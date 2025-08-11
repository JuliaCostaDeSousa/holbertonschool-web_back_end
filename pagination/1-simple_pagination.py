#!/usr/bin/env python3
"""
Module 1-simple_pagination
"""

import csv
from typing import List


def index_range(page, page_size):
    """
    Returns a tuple of size two containing a start index and an end index.
    """

    if page == 1:
        res = tuple([0, page_size])
    res = tuple([(page - 1) * page_size, page * page_size])
    return res


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Returns the appropriate page of the dataset
        """
        data = self.dataset()
        assert isinstance(page, int) and 0 < page
        assert isinstance(page_size, int) and 0 < page_size
        res = index_range(page, page_size)
        if res[0] >= len(data):
            return []
        return data[res[0]:res[1]]
