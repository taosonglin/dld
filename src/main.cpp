#include "server.hpp"

int main(int argc,char *argv[])
{
	int max_thread_num = std::thread::hardware_concurrency();
	http_server server(max_thread_num);
	server.listen("0.0.0.0", "8888");
        server.set_http_handler<GET,POST>("/login",login);
        server.set_http_handler<GET,POST>("/auth",auth);
	server.set_http_handler<GET,POST>("/indexTable",indexTable);
	server.run();
	return 0;
}
