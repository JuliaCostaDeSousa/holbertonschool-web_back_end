#!/usr/bin/env python3
"""
Module 1-async_comprehension.py
"""
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Collects 10 random number with async_generator and returns them
    """
    result: List = []
    async for i in async_generator():
        result.append(i)
    return result
