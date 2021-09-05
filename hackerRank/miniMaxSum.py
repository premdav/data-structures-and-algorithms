#!/bin/python3
from functools import reduce
import math
import os
import random
import re
import sys

#
# Complete the 'miniMaxSum' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def miniMaxSum(arr):
    min = reduce(lambda x,y: x + y, sorted(arr)[:-1])
    max = reduce(lambda x, y: x + y, sorted(arr)[1:])
    print(min,max)

if __name__ == '__main__':

    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)