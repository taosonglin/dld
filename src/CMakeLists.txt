#project name
PROJECT(src)

if(MSVC)
	set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} /std:c++latest")
else ()
        set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS}  -pthread -std=c++17")
endif ()

SET(ENABLE_GZIP OFF)
SET(ENABLE_SSL OFF)
SET(ENABLE_CLIENT_SSL OFF)
SET(ENABLE_ASIO_STANDALONE OFF)

if (ENABLE_SSL)
        add_definitions(-DCINATRA_ENABLE_SSL)
        message(STATUS "Use SSL")
endif()

if(ENABLE_GZIP)
        add_definitions(-DCINATRA_ENABLE_GZIP)
endif()

if(ENABLE_CLIENT_SSL)
        add_definitions(-DCINATRA_ENABLE_CLIENT_SSL)
endif()

if(ENABLE_ASIO_STANDALONE)
        add_definitions(-DASIO_STANDALONE)
else()
        find_package(Boost 1.60 REQUIRED COMPONENTS system)
endif()

if (ENABLE_SSL)
find_package(OpenSSL REQUIRED)
endif()
if (ENABLE_CLIENT_SSL)
        find_package(OpenSSL REQUIRED)
endif()

if (ENABLE_GZIP)
        find_package(ZLIB REQUIRED)
endif()

add_executable(server main.cpp)

set(EXECUTABLE_OUTPUT_PATH ${PROJECT_ROOT})

include_directories($ )


