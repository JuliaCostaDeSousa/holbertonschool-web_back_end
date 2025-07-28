#!/usr/bin/env python3
"""
Module 0-basic_async_syntax.py
"""
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """
    Takes in an integer argument as waiting delay and returns it.
    """
    delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
