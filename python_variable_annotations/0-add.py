#!/usr/bin/python3
"""
Module 0-add.py
"""
import sys


def add(float1: float, float2: float) -> float:
    """
    Adds two floats and return their sum as float
    """

    if not float1 or not float2:
        raise ValueError("One argument is missing")
    if type(float1) is not float or type(float2) is not float:
        raise TypeError("Arguments must be floats")
    return float(float1 + float2)
