#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'birthdayCakeCandles' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY candles as parameter.
#

def birthdayCakeCandles(candles):
    candles.sort()
    number_of_longest = 0
    total_candles = len(candles)
    for i in range(len(candles)):
        if i == 0:
            number_of_longest += 1
        elif candles[total_candles - i -1] == candles[total_candles - 1]:
            number_of_longest += 1
        else:
            return number_of_longest
    return number_of_longest

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    candles_count = int(input().strip())

    candles = list(map(int, input().rstrip().split()))

    result = birthdayCakeCandles(candles)

    fptr.write(str(result) + '\n')

    fptr.close()