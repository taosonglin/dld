#include "server.hpp"
#include <vector>

int main(int argc,char *argv[])
{
	std::vector<const char*> my_vec;
	MYSQL conn=connect_db();
	char sql[256]={0};
	strcpy(sql,"select `day_retn` from Fund_Return_Daily where `trade_date`=(select max(`trade_date`) from Fund_Return_Daily);");
	mysql_query(&conn,sql);
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
       	
	for(auto it=my_vec.begin();it!=my_vec.end();it++)
	{
		std::cout<<*it<<std::endl;
	}	
	disconnect_db(conn);
	lengths=NULL;
	return 0;
}
