#include "../include/cinatra.hpp"
#include <mysql/mysql.h>

#define SQL_AUTH "select `passwd` from users where username='%s';"
#define SQL_IDX_TBL "select "
#define DB_ADDR "localhost"
#define SYS_USER "root"
#define PASSWD "dld2019!"
#define DB_USE "dldDB"


using namespace cinatra;

MYSQL connect_db()
{
	MYSQL conn;
	mysql_init(&conn);
	mysql_real_connect(&conn,DB_ADDR,SYS_USER,PASSWD,DB_USE,3306,NULL,0);
	return conn;
}

void disconnect_db(MYSQL &conn)
{
	mysql_close(&conn);
}

void login(request& req,response& res)
{
        res.render_view("template/login.html");
}

std::vector<const char*> query(char *sql)
{
	std::vector<const char*> my_vec;
	std::string tmp=sql;
        MYSQL conn=connect_db();
  //      strcpy(sql,"select `day_retn` from Fund_Return_Daily where `trade_date`=(select max(`trade_date`) from Fund_Return_Daily);");
        mysql_query(&conn,tmp.c_str());
        MYSQL_ROW ret;
        int num_rows;
        int num_fields;
        long unsigned int *lengths=NULL;

        try
        {
                MYSQL_RES *res=mysql_store_result(&conn);
                num_rows=mysql_num_rows(res);
                num_fields=mysql_num_fields(res);
                if(!res) throw std::string("MYSQL NO RESULT");
                while(ret=mysql_fetch_row(res))
                {
                        for(int i=0;i<num_fields;i++)
                        {
                                my_vec.push_back(ret[i]?ret[i]:"NULL");
                        }
                }
                mysql_free_result(res);
                res=NULL;
        }
        catch(std::string &error_msg)
        {
                std::cout<<error_msg<<std::endl;
        }

        disconnect_db(conn);
        lengths=NULL;
	return my_vec; 
	
}

void auth(request &req,response &res)
{
        bool success=req.parse_form_urlencoded();
        if(!success)return;
        auto form_url_map=req.get_form_url_map();
        std::string_view username=form_url_map["username"];
        std::string_view password=form_url_map["password"];
	char sql[256];
	memset(sql,0,256);
	char *tmp_usr=(char*)malloc(username.size()+1);
	char *tmp_passwd=(char*)malloc(password.size()+1);
	strncpy(tmp_usr,username.data(),username.size());
	tmp_usr[username.size()]='\0';
	strncpy(tmp_passwd,password.data(),password.size());
	tmp_passwd[password.size()]='\0';
	sprintf(sql,SQL_AUTH,tmp_usr);
	MYSQL conn=connect_db();
	mysql_query(&conn,sql);
        MYSQL_ROW ret;	
	try
        {
                MYSQL_RES *result=mysql_store_result(&conn);
                if(!result) throw std::string("MYSQL not result!");
                ret=mysql_fetch_row(result);
                result=NULL;
        }
        catch (std::string &error_msg)
        {
                std::cout<<error_msg<<std::endl;
        }
        if(strcmp(tmp_passwd,(*ret))==0)
        {
                res.set_attr<char*>("user",tmp_usr);
                res.render_view("template/index.html");
        }
	else
	{
		std::cout<<"auth error,password is:"<<tmp_passwd<<std::endl;
	}
	
	disconnect_db(conn);
	free(tmp_usr);
	free(tmp_passwd);
	tmp_usr=NULL;
	tmp_passwd=NULL;
}

void indexTable(request& req,response& res)
{
	std::cout<<"test\n";
//	if(req.get_method()!="POST")return;
	char sql[256];
	strcpy(sql,"select `day_retn` from Fund_Return_Daily where `trade_date`=(select max(`trade_date`) from Fund_Return_Daily);");
	std::vector<const char *> ret=query(sql);
	for(auto it=ret.begin();it!=ret.end();it++)
	{
		std::cout<<*it<<std::endl;
	}	

}


