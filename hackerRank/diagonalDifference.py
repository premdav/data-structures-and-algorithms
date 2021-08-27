'''
Full problem definition can be found in problemDefinitions folder - diagonalDifference.pdf
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix `arr` is shown below:
1 2 3
4 5 6
9 8 9 

The left-to-right diagonal = 1 + 5 + 9 = 15. The right-to-left diagonal = 3 + 5 + 9 = 17. Their absolute difference is 
| 15 - 17 | = 2

Function Description
Complete the diagonalDifference function in the editor below.
diagonalDifference takes the following parameter:
 - int arr[n][m]: an array of integers
Return:
 - int: the absolute diagonal difference

 Sample Input:
11 2 4
4 5 6
10 8 -12

Sample Output:
15

Explanation:
11
   5
     -12
sum across primary diagonal = 4

     4
   5
10
sum across secondary = 19

|4-19| = 15

'''

# full HackerRank solution
#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'diagonalDifference' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.
#

def diagonalDifference(arr):
    # Write your code here
    l_dif = 0
    r_dif = 0
    total_len = len(arr)
    for i in range(len(arr)):
        l_dif += arr[i][i]
        r_dif += arr[i][total_len - i - 1]
    return abs(l_dif - r_dif)
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    arr = []

    for _ in range(n):
        arr.append(list(map(int, input().rstrip().split())))

    result = diagonalDifference(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
