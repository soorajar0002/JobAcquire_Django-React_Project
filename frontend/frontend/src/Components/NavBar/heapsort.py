def heapify(arr, N, i):
    largest = i
    l = 2 * i + 1
    r = 2 * i + 2
    if l < N and arr[l] > arr[largest]:
        largest = l
    if r < N and arr[r] > arr[largest]:
        largest = r
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, N, largest)
def buildHeap(arr, N):
    startIdx = N // 2 - 1
    for i in range(startIdx, -1, -1):
        heapify(arr, N, i)
    for i in range(N- 1, 0, -1):
        (arr[i], arr[0]) = (arr[0], arr[i])  # swap
        heapify(arr, i, 0)
def printHeap(arr, N):
    print("Array representation of Heap is:")
    for i in range(N):
        print(arr[i], end=" ")
    print()

arr = [1, 3, 5, 4, 6, 13,10, 9, 8, 15, 17]
N = len(arr)
buildHeap(arr, N)
printHeap(arr, N)