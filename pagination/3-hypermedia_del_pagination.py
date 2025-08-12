#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """Dataset with no missing data if some data are deleted
        """
        if index is None:
            index = 0
        first_index = index
        max_index = len(self.dataset()) - 1
        assert 0 <= index <= max_index
        data = self.indexed_dataset()
        real_data = []
        cursor = index
        while len(real_data) < page_size and cursor <= max_index:
            if cursor in data:
                real_data.append(data[cursor])
            cursor += 1
        next_index = cursor if cursor <= max_index else None
        dic = {'index': first_index,
               'data': real_data,
               'page_size': len(real_data),
               'next_index': next_index
               }
        return dic
