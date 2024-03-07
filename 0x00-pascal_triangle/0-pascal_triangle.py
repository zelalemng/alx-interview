#!/usr/bin/python3

"""
0-pascal_triangle
"""


def pascal_triangle(n):
    """
    Returns a list of integers
    representing the Pascal Triangle of n
    returns empty list if n <= 0
    """
    matrix = []

    if n <= 0:
        return matrix
    matrix = [[1]]
    for i in range(1, n):
        row = [1]
        for j in range(len(matrix[i - 1]) - 1):
            curr = matrix[i - 1]
            row.append(matrix[i - 1][j] + matrix[i - 1][j + 1])
        row.append(1)
        matrix.append(row)
    return matrix
