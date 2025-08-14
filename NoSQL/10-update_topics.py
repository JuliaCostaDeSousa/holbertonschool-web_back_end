#!/usr/bin/env python3
""" Module 10-update_topics"""

def update_topics(mongo_collection, name, topics):
    """Changes all topics of a school document based on the name
    """
    query = {"name": name}
    new = {"$set":{"topics" :topics}}
    return mongo_collection.updateMany(query, new)
