#!/usr/bin/env python3
"""
Module 2-measure_runtime.py
"""
import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Execute async_comprehension four times in parallel using asyncio.gather
    Returns the total runtime
    """
    start_time = time.time()
    tasks = [async_comprehension() for i in range(4)]
    await asyncio.gather(*tasks)
    end_time = time.time()

    total_time = end_time - start_time
    return total_time
