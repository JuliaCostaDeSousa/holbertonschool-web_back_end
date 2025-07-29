#!/usr/bin/env python3
"""
Module 0-async_generator.py
"""
import random
import asyncio


async def async_generator():
    """
    Generates a random number 10 times
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
