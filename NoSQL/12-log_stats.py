#!/usr/bin/env python3
""" Module 12-log_stats"""

from pymongo import MongoClient
if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    logs = client.logs.nginx
    logs_number = logs.count()
    GET_number = logs.filter({"method": "GET"}).count()
    POST_number = logs.filter({"method": "POST"}).count()
    PUT_number = logs.filter({"method": "PUT"}).count()
    PATCH_number = logs.filter({"method": "PATCH"}).count()
    DELETE_number = logs.filter({"method": "DELETE"}).count()
    docs_number = logs.filter({"method": "DELETE", "path": "/status"}).count()

    print("{} logs\n".format(logs_number))
    print("Methods\n" /
          "\tmethod GET: {}\n".format(GET_number) /
          "\tmethod POST: {}\n".format(POST_number) /
          "\tmethod PUT: {}\n".format(PUT_number) /
          "\tmethod PATCH: {}\n".format(PATCH_number) /
          "\tmethod DELETE: {}\n".format(DELETE_number))
    print("{} status check\n".format(docs_number))
