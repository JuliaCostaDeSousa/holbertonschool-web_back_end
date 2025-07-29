#!/usr/bin/env python3
"""
Module 0-async_generator.py
"""
import random
import asyncio
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Asynchronously yields 10 random float numbers between 0 and 10,
    with a 1-second delay between each yield.
    """
    for i in range(10):
        yield random.uniform(0, 10)
        await asyncio.sleep(1)
