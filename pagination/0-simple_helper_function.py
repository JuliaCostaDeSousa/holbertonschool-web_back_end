#!/usr/bin/env python3
"""
Module 0-simple_helper_function
"""


def index_range(page, page_size):
    """
    Returns a tuple of size two containing a start index and an end index.
    """

    if page == 1:
        res = tuple([0, page_size])
    res = tuple([(page - 1) * page_size, page * page_size])
    return res
