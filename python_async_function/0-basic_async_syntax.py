#!/usr/bin/env python3
"""
Module 0-basic_async_syntax.py
"""
import random
import asyncio


async def wait_random(max_delay=10):
    """
    Takes in an integer argument as waiting delay and returns it.
    """
    delay = float(random.randrange(max_delay * 10**9)) * 10**-9
    await asyncio.sleep(delay)
    return delay
