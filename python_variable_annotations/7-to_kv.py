#!/usr/bin/env python3
"""
Module 7-to_kv.py
"""
from typing import Tuple, Union

def to_kv(k: str, v: Union[int, float]) -> Tuple:
    """
    Takes a string k and an int OR float v as arguments and returns a tuple.
    """
    tuple_return: Tuple[str, Union[int, float]] = (k, v*v)
    return tuple_return
