#!/usr/bin/env python3
"""
Module 2-hypermedia_pagination
"""

import csv
import math
from typing import List, Dict


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

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """Returns a dictionary with page informations
        """
        total_page = math.ceil(len(self.dataset())/page_size)
        dic = {'page_size': page_size if page <= total_page else 0,
               'page': page,
               'data': self.get_page(page, page_size),
               'next_page': page + 1 if page <= total_page else None,
               'prev_page': (page - 1) if (page > 1) else None,
               'total_pages': math.ceil(len(self.dataset())/page_size)
               }
        return dic
