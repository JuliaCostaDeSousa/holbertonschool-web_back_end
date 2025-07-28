#!/usr/bin/env python3
"""
Module 8-make_multiplier.py
"""
import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """
    Returns a function that multiplies a float by multiplier
    The returned function takes no arguments in the return
    in order to be user later with any value
    """
    def func_multiplier(float1: float) -> float:
        """
        Multiplies a float by multiplier
        """
        return float1 * multiplier
    return func_multiplier
