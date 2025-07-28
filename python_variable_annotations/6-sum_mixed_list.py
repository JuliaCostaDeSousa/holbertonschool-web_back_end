#!/usr/bin/env python3
"""
Module 6-sum_mixed_list.py
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Returns the sum of floats from a list of integers and/or floats
    """
    return sum(mxd_lst)
