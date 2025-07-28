#!/usr/bin/env python3
"""
Module 4-tasks.py
"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn wait_random n times with the specified max_delay
    Returns the list of all the delays (float values)
    """

    coroutines = [task_wait_random(max_delay) for i in range(n)]

    delays_list = []
    for completed in asyncio.as_completed(coroutines):
        delay = await completed
        delays_list.append(delay)
    return delays_list
