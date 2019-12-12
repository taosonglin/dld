#include <stdio.h>
#include <iostream>
#include <string.h>
#include <fstream>
int main()
{
	std::ifstream file("/root/dld/template/index.html");
	if(!file.is_open())
	{
		std::cout<<"open error"<<std::endl;	
	}
	else
	{
		std::cout<<file.rdbuf()<<std::endl;	
	}
	
	return 0;
}
