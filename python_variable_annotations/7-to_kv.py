#!/usr/bin/env python3
"""
Module 7-to_kv.py
"""


def to_kv(k: str, v: int | float) -> tuple:
    """
    Takes a string k and an int OR float v as arguments and returns a tuple.
    """
    tuple_return: tuple[str, int | float] = (k, v*v)
    return tuple_return
