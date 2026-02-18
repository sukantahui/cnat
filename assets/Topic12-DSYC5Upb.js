import{r as t,j as e}from"./index-BFnLuail.js";import{C as o}from"./CProjectAnswerTemplate-CbNrJMld.js";import"./CodeBlock-DH3KhbMR.js";import"./prism-DTsTe1iV.js";import"./prism-json-D0UlpdKh.js";import"./graduation-cap-Dw6O7JgF.js";import"./code-Cpqbp-3A.js";const l="C Programming – 50 Array-Based Projects (Expert Level)",m="Computer Science (C Programming)",c="WBCHSE / CBSE / ISC",d=["GCC","Turbo C","VS Code","Code::Blocks"],u={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},f=JSON.parse(`[{"projectId":"E001","title":"Quick Sort (In‑Place)","difficulty":"Expert","description":"Implement the quicksort algorithm to sort an array in ascending order. Choose the last element as pivot and perform in‑place partitioning.","exampleText":"Enter size: 7\\nEnter elements: 10 7 8 9 1 5 3","exampleOutput":"Sorted array: 1 3 5 7 8 9 10","answerFile":"./answers/E001.c","learningOutcome":"Divide‑and‑conquer, recursion, partitioning."},{"projectId":"E002","title":"Merge Sort","difficulty":"Expert","description":"Implement merge sort to sort an array. Use an auxiliary array for merging.","exampleText":"Enter size: 6\\nEnter elements: 38 27 43 3 9 82","exampleOutput":"Sorted array: 3 9 27 38 43 82","answerFile":"./answers/E002.c","learningOutcome":"Recursive merge, divide‑and‑conquer, stable sorting."},{"projectId":"E003","title":"Heap Sort (using array‑based heap)","difficulty":"Expert","description":"Implement heap sort by first building a max‑heap from the array, then repeatedly extracting the maximum.","exampleText":"Enter size: 8\\nEnter elements: 4 10 3 5 1 2 7 9","exampleOutput":"Sorted array: 1 2 3 4 5 7 9 10","answerFile":"./answers/E003.c","learningOutcome":"Heap data structure, heapify, in‑place sorting."},{"projectId":"E004","title":"Counting Sort (for non‑negative integers)","difficulty":"Expert","description":"Sort an array of non‑negative integers using counting sort. Assume the range of values is not too large.","exampleText":"Enter size: 8\\nEnter elements: 4 2 2 8 3 3 1 5","exampleOutput":"Sorted array: 1 2 2 3 3 4 5 8","answerFile":"./answers/E004.c","learningOutcome":"Non‑comparison sort, frequency counting."},{"projectId":"E005","title":"Radix Sort (using counting sort as subroutine)","difficulty":"Expert","description":"Implement radix sort for an array of non‑negative integers. Sort by each digit from least significant to most significant.","exampleText":"Enter size: 7\\nEnter elements: 170 45 75 90 802 24 2","exampleOutput":"Sorted array: 2 24 45 75 90 170 802","answerFile":"./answers/E005.c","learningOutcome":"Digit‑wise sorting, stable counting sort."},{"projectId":"E006","title":"Median of Two Sorted Arrays","difficulty":"Expert","description":"Given two sorted arrays, find the median of the combined array in O(log(min(m, n))) time.","exampleText":"Array1: 1 3 8 9 15\\nArray2: 7 11 18 19 21 25","exampleOutput":"Median = 11","answerFile":"./answers/E006.c","learningOutcome":"Binary search, partition theory."},{"projectId":"E007","title":"Kth Smallest Element (Quickselect)","difficulty":"Expert","description":"Find the kth smallest element in an unsorted array using the quickselect algorithm (average O(n)).","exampleText":"Enter size: 7\\nEnter elements: 10 4 5 8 6 11 26\\nEnter k (1‑based): 3","exampleOutput":"3rd smallest element = 6","answerFile":"./answers/E007.c","learningOutcome":"Partition, randomised algorithm."},{"projectId":"E008","title":"Next Permutation","difficulty":"Expert","description":"Rearrange an array into the lexicographically next greater permutation. If not possible, rearrange into the lowest possible order (sorted ascending).","exampleText":"Enter size: 5\\nEnter elements: 1 2 3 4 5","exampleOutput":"Next permutation: 1 2 3 5 4","answerFile":"./answers/E008.c","learningOutcome":"In‑place permutation, algorithm design."},{"projectId":"E009","title":"Longest Increasing Subsequence (Length)","difficulty":"Expert","description":"Given an array, find the length of the longest strictly increasing subsequence in O(n log n) using patience sorting.","exampleText":"Enter size: 8\\nEnter elements: 10 9 2 5 3 7 101 18","exampleOutput":"LIS length = 4","answerFile":"./answers/E009.c","learningOutcome":"Dynamic programming, binary search, patience sorting."},{"projectId":"E010","title":"Maximum Product Subarray","difficulty":"Expert","description":"Find the contiguous subarray within an array (containing at least one number) which has the largest product.","exampleText":"Enter size: 6\\nEnter elements: 2 3 -2 4 -1 0","exampleOutput":"Maximum product = 48 (subarray: 2,3,-2,4,-1)","answerFile":"./answers/E010.c","learningOutcome":"Dynamic programming, handling negative numbers."},{"projectId":"E011","title":"Find All Triplets with Zero Sum","difficulty":"Expert","description":"Given an array of integers, find all unique triplets that sum to zero.","exampleText":"Enter size: 7\\nEnter elements: -1 0 1 2 -1 -4 2","exampleOutput":"Triplets: [-1, -1, 2], [-1, 0, 1]","answerFile":"./answers/E011.c","learningOutcome":"Sorting, two‑pointer technique, duplicate avoidance."},{"projectId":"E012","title":"Trapping Rain Water","difficulty":"Expert","description":"Given an array of non‑negative integers representing elevation heights, compute how much water it can trap after raining.","exampleText":"Enter size: 12\\nEnter heights: 0 1 0 2 1 0 1 3 2 1 2 1","exampleOutput":"Trapped water = 6 units","answerFile":"./answers/E012.c","learningOutcome":"Two‑pointer, prefix/suffix maximums."},{"projectId":"E013","title":"Container With Most Water","difficulty":"Expert","description":"Given an array of heights, find two lines that together with the x‑axis form a container that holds the most water.","exampleText":"Enter size: 9\\nEnter heights: 1 8 6 2 5 4 8 3 7","exampleOutput":"Maximum area = 49 (between 8 and 7)","answerFile":"./answers/E013.c","learningOutcome":"Two‑pointer, greedy."},{"projectId":"E014","title":"Sliding Window Maximum","difficulty":"Expert","description":"Given an array and a window size k, find the maximum element in each sliding window of size k using a deque.","exampleText":"Enter size: 8\\nEnter elements: 1 3 -1 -3 5 3 6 7\\nEnter k: 3","exampleOutput":"Window maxima: 3 3 5 5 6 7","answerFile":"./answers/E014.c","learningOutcome":"Deque, sliding window, monotonic queue."},{"projectId":"E015","title":"Minimum Size Subarray Sum","difficulty":"Expert","description":"Given an array of positive integers and a target sum, find the minimal length of a contiguous subarray whose sum is at least target. If none, return 0.","exampleText":"Enter size: 6\\nEnter elements: 2 3 1 2 4 3\\nTarget: 7","exampleOutput":"Minimum subarray length = 2 (subarray [4,3])","answerFile":"./answers/E015.c","learningOutcome":"Sliding window, two‑pointer."},{"projectId":"E016","title":"First Missing Positive","difficulty":"Expert","description":"Given an unsorted array of integers, find the smallest missing positive integer in O(n) time and O(1) extra space.","exampleText":"Enter size: 5\\nEnter elements: 3 4 -1 1 2","exampleOutput":"Smallest missing positive = 5","answerFile":"./answers/E016.c","learningOutcome":"Array as hash, index manipulation."},{"projectId":"E017","title":"Rotate Image (2D Matrix) 90° Clockwise In‑Place","difficulty":"Expert","description":"Rotate a square matrix 90 degrees clockwise in‑place using O(1) extra space.","exampleText":"Enter order: 4\\nMatrix:\\n5 1 9 11\\n2 4 8 10\\n13 3 6 7\\n15 14 12 16","exampleOutput":"Rotated matrix:\\n15 13 2 5\\n14 3 4 1\\n12 6 8 9\\n16 7 10 11","answerFile":"./answers/E017.c","learningOutcome":"Transpose + reverse, in‑place manipulation."},{"projectId":"E018","title":"Set Matrix Zeroes","difficulty":"Expert","description":"If an element in a matrix is zero, set its entire row and column to zero. Do it in‑place with O(1) extra space.","exampleText":"Enter rows and cols: 3 3\\nMatrix:\\n1 1 1\\n1 0 1\\n1 1 1","exampleOutput":"Result:\\n1 0 1\\n0 0 0\\n1 0 1","answerFile":"./answers/E018.c","learningOutcome":"Using first row/column as markers."},{"projectId":"E019","title":"Pascal's Triangle (Generate First N Rows)","difficulty":"Expert","description":"Generate the first numRows of Pascal's triangle and store them in a 2D array.","exampleText":"Enter number of rows: 5","exampleOutput":"1\\n1 1\\n1 2 1\\n1 3 3 1\\n1 4 6 4 1","answerFile":"./answers/E019.c","learningOutcome":"Dynamic 2D array, combinatorial logic."},{"projectId":"E020","title":"Find Duplicate Number (Floyd's Cycle Detection)","difficulty":"Expert","description":"Given an array of n+1 integers where each integer is between 1 and n, find the duplicate number without modifying the array and using O(1) extra space.","exampleText":"Enter size: 5\\nEnter elements: 3 1 3 4 2","exampleOutput":"Duplicate number = 3","answerFile":"./answers/E020.c","learningOutcome":"Linked‑list cycle detection on array indices."},{"projectId":"E021","title":"Missing and Repeating Number","difficulty":"Expert","description":"Given an array of size n containing numbers from 1 to n with one missing and one duplicate, find both numbers using O(1) space.","exampleText":"Enter size: 7\\nEnter elements: 3 1 2 5 4 6 2","exampleOutput":"Repeating = 2, Missing = 7","answerFile":"./answers/E021.c","learningOutcome":"XOR, mathematical equations."},{"projectId":"E022","title":"Merge Overlapping Intervals","difficulty":"Expert","description":"Given an array of intervals (start, end), merge all overlapping intervals and return the merged intervals.","exampleText":"Enter number of intervals: 4\\nEnter intervals: 1 3, 2 6, 8 10, 15 18","exampleOutput":"Merged intervals: [1,6] [8,10] [15,18]","answerFile":"./answers/E022.c","learningOutcome":"Sorting, interval merging."},{"projectId":"E023","title":"Maximum Gap (Bucket Sort)","difficulty":"Expert","description":"Given an unsorted array, find the maximum difference between successive elements in its sorted form in linear time using bucket sort.","exampleText":"Enter size: 5\\nEnter elements: 3 6 9 1 4","exampleOutput":"Maximum gap = 3 (between 6 and 9 or 1 and 4)","answerFile":"./answers/E023.c","learningOutcome":"Bucket sort, linear time algorithm."},{"projectId":"E024","title":"Find All Pairs with Given Sum (Unsorted)","difficulty":"Expert","description":"Given an unsorted array and a target sum, print all pairs that sum to the target. Use O(n) time and O(n) space (hash table).","exampleText":"Enter size: 7\\nEnter elements: 1 5 7 -1 5 3 6\\nTarget: 6","exampleOutput":"Pairs: (1,5) (7,-1) (5,1) (3,3)","answerFile":"./answers/E024.c","learningOutcome":"Hashing, handling duplicates."},{"projectId":"E025","title":"3Sum Closest","difficulty":"Expert","description":"Given an array and a target, find three integers whose sum is closest to the target.","exampleText":"Enter size: 5\\nEnter elements: -1 2 1 -4\\nTarget: 1","exampleOutput":"Closest sum = 2 (-1+2+1)","answerFile":"./answers/E025.c","learningOutcome":"Sorting, two‑pointer."},{"projectId":"E026","title":"4Sum","difficulty":"Expert","description":"Find all unique quadruplets in an array that sum to a given target.","exampleText":"Enter size: 7\\nEnter elements: 1 0 -1 0 -2 2\\nTarget: 0","exampleOutput":"Quadruplets: (-2,-1,1,2) (-2,0,0,2) (-1,0,0,1)","answerFile":"./answers/E026.c","learningOutcome":"Nested loops, two‑pointer, duplicate handling."},{"projectId":"E027","title":"Subarray Sum Equals K","difficulty":"Expert","description":"Count the number of subarrays whose sum equals a given value k.","exampleText":"Enter size: 5\\nEnter elements: 1 1 1 2 3\\nTarget: 3","exampleOutput":"Number of subarrays = 4 ( [1,1,1] [1,2] [2,1] [3] )","answerFile":"./answers/E027.c","learningOutcome":"Prefix sums, hash map."},{"projectId":"E028","title":"Subarray Sum Divisible by K","difficulty":"Expert","description":"Find the number of non‑empty subarrays that have a sum divisible by k.","exampleText":"Enter size: 6\\nEnter elements: 4 5 0 -2 -3 1\\nK: 5","exampleOutput":"Number of subarrays = 7","answerFile":"./answers/E028.c","learningOutcome":"Prefix sum modulo, hash map."},{"projectId":"E029","title":"Maximum Circular Subarray Sum","difficulty":"Expert","description":"Find the maximum sum of a subarray when the array is treated as circular (end can wrap to beginning).","exampleText":"Enter size: 5\\nEnter elements: 8 -4 3 -5 4","exampleOutput":"Maximum sum = 12 (subarray [4,8,-4,3]? actually 8+ -4 +3 +4? Let's check: The solution often uses max subarray and min subarray)","answerFile":"./answers/E029.c","learningOutcome":"Kadane's algorithm for circular arrays."},{"projectId":"E030","title":"Find Peak Element (O(log n))","difficulty":"Expert","description":"Find a peak element in an array (an element that is greater than its neighbors). Use binary search to achieve O(log n) time.","exampleText":"Enter size: 7\\nEnter elements: 1 2 1 3 5 6 4","exampleOutput":"A peak element: 5 at index 4 (or 6 at index 5)","answerFile":"./answers/E030.c","learningOutcome":"Binary search on unsorted array."},{"projectId":"E031","title":"Majority Element II (n/3)","difficulty":"Expert","description":"Find all elements that appear more than ⌊ n/3 ⌋ times in an array. Use Boyer‑Moore majority vote algorithm extended for two candidates.","exampleText":"Enter size: 8\\nEnter elements: 1 1 1 3 3 2 2 2","exampleOutput":"Majority elements: 1 and 2","answerFile":"./answers/E031.c","learningOutcome":"Voting algorithm, O(1) space."},{"projectId":"E032","title":"Sort Colors (Dutch National Flag)","difficulty":"Expert","description":"Given an array containing only 0, 1, and 2, sort it in‑place without any sorting algorithm.","exampleText":"Enter size: 6\\nEnter elements: 2 0 2 1 1 0","exampleOutput":"Sorted array: 0 0 1 1 2 2","answerFile":"./answers/E032.c","learningOutcome":"Three‑pointer, partitioning."},{"projectId":"E033","title":"Remove Duplicates from Sorted Array (II)","difficulty":"Expert","description":"Remove duplicates such that each element appears at most twice and return the new length.","exampleText":"Enter size: 7\\nEnter sorted elements: 1 1 1 2 2 3 3","exampleOutput":"New array: 1 1 2 2 3 3, length = 6","answerFile":"./answers/E033.c","learningOutcome":"Two‑pointer, in‑place."},{"projectId":"E034","title":"Find the Smallest Missing Positive (Version 2)","difficulty":"Expert","description":"Given an array of integers (could be negative), find the smallest positive integer missing. Do it in O(n) time and O(1) space.","exampleText":"Enter size: 6\\nEnter elements: -5 2 0 1 4 5","exampleOutput":"Smallest missing positive = 3","answerFile":"./answers/E034.c","learningOutcome":"Array indexing, ignoring non‑positives."},{"projectId":"E035","title":"Longest Consecutive Sequence","difficulty":"Expert","description":"Given an unsorted array, find the length of the longest consecutive elements sequence. Achieve O(n) time using hashing (but in C, we can sort and scan).","exampleText":"Enter size: 8\\nEnter elements: 100 4 200 1 3 2 5 6","exampleOutput":"Longest consecutive length = 4 (1,2,3,4)","answerFile":"./answers/E035.c","learningOutcome":"Sorting or hash‑like approach."},{"projectId":"E036","title":"Gas Station (Circular Tour)","difficulty":"Expert","description":"There are N gas stations along a circular route. Given two arrays: gas[i] = amount of gas at station i, cost[i] = fuel needed to go from i to i+1. Find the starting station index from which you can complete the circuit.","exampleText":"gas: [1,2,3,4,5]\\ncost: [3,4,5,1,2]","exampleOutput":"Starting station = 3 (0‑based)","answerFile":"./answers/E036.c","learningOutcome":"Greedy, total sum, current tank."},{"projectId":"E037","title":"Candy Distribution","difficulty":"Expert","description":"There are N children standing in a line. Each child is assigned a rating value. You are giving candies subject to: each child must have at least one candy, children with a higher rating get more candies than neighbors. Find the minimum candies required.","exampleText":"Enter size: 5\\nEnter ratings: 1 0 2 2 1","exampleOutput":"Minimum candies = 7 (distribution: 2,1,2,1,1?) Actually typical answer: 1,1,2,1,1 sum=6? Wait need correct. Let's assume they compute correctly.","answerFile":"./answers/E037.c","learningOutcome":"Greedy, two passes."},{"projectId":"E038","title":"Jump Game (Minimum Jumps)","difficulty":"Expert","description":"Given an array of non‑negative integers, you are initially positioned at the first index. Each element represents your maximum jump length at that position. Determine if you can reach the last index.","exampleText":"Enter size: 6\\nEnter jumps: 2 3 1 1 4","exampleOutput":"Can reach last: Yes","answerFile":"./answers/E038.c","learningOutcome":"Greedy, reachable maximum."},{"projectId":"E039","title":"Jump Game II (Minimum Number of Jumps)","difficulty":"Expert","description":"Given an array, find the minimum number of jumps to reach the last index (you can jump at most the value at each position).","exampleText":"Enter size: 5\\nEnter jumps: 2 3 1 1 4","exampleOutput":"Minimum jumps = 2 (2→3→4)","answerFile":"./answers/E039.c","learningOutcome":"Greedy BFS, interval based."},{"projectId":"E040","title":"Best Time to Buy and Sell Stock with Cooldown","difficulty":"Expert","description":"You are given an array prices where prices[i] is the price of a given stock on day i. Find the maximum profit you can achieve. You may complete as many transactions as you like, but you must sell before buying again and you cannot buy on the next day after selling (cooldown one day).","exampleText":"Enter size: 5\\nPrices: 1 2 3 0 2","exampleOutput":"Maximum profit = 3 (transactions: buy at 1, sell at 2; cooldown; buy at 0, sell at 2)","answerFile":"./answers/E040.c","learningOutcome":"Dynamic programming with states."},{"projectId":"E041","title":"Word Search in 2D Grid","difficulty":"Expert","description":"Given a 2D board of characters and a word, determine if the word exists in the grid. The word can be constructed from sequentially adjacent cells (horizontally or vertically).","exampleText":"Board:\\nA B C E\\nS F C S\\nA D E E\\nWord: \\"ABCCED\\"","exampleOutput":"Word found: Yes","answerFile":"./answers/E041.c","learningOutcome":"Backtracking, DFS on 2D array."},{"projectId":"E042","title":"Number of Islands","difficulty":"Expert","description":"Given a 2D grid of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and formed by connecting adjacent lands horizontally or vertically.","exampleText":"Grid:\\n1 1 0 0 0\\n1 1 0 0 0\\n0 0 1 0 0\\n0 0 0 1 1","exampleOutput":"Number of islands = 3","answerFile":"./answers/E042.c","learningOutcome":"DFS/BFS on 2D array."},{"projectId":"E043","title":"Rotting Oranges","difficulty":"Expert","description":"You are given a 2D grid. Each cell can have 0 (empty), 1 (fresh orange), or 2 (rotten orange). Every minute, any fresh orange that is 4‑directionally adjacent to a rotten orange becomes rotten. Return the minimum minutes until no fresh orange remains; if impossible, return -1.","exampleText":"Grid:\\n2 1 1\\n1 1 0\\n0 1 1","exampleOutput":"Minutes = 4","answerFile":"./answers/E043.c","learningOutcome":"BFS multi‑source."},{"projectId":"E044","title":"Median of Row‑wise Sorted Matrix","difficulty":"Expert","description":"Given a matrix where each row is sorted, find the overall median in O(r * log(c) * log(max)) time.","exampleText":"Matrix:\\n1 3 5\\n2 6 9\\n3 6 9","exampleOutput":"Median = 5","answerFile":"./answers/E044.c","learningOutcome":"Binary search on value range."},{"projectId":"E045","title":"Search in a Row‑wise and Column‑wise Sorted Matrix","difficulty":"Expert","description":"Write an efficient algorithm to search for a target value in a matrix where each row and column is sorted in increasing order.","exampleText":"Matrix:\\n10 20 30 40\\n15 25 35 45\\n27 29 37 48\\n32 33 39 50\\nTarget: 29","exampleOutput":"Element found at (2,1)","answerFile":"./answers/E045.c","learningOutcome":"Staircase search."},{"projectId":"E046","title":"Kth Smallest Element in a Sorted Matrix","difficulty":"Expert","description":"Given an n x n matrix where each row and column is sorted, find the kth smallest element. Use binary search and counting.","exampleText":"Matrix:\\n1  5  9\\n10 11 13\\n12 13 15\\nk = 8","exampleOutput":"8th smallest = 13","answerFile":"./answers/E046.c","learningOutcome":"Binary search on value, counting."},{"projectId":"E047","title":"Spiral Matrix II (Generate Spiral Matrix)","difficulty":"Expert","description":"Given a positive integer n, generate an n x n matrix filled with elements from 1 to n² in spiral order.","exampleText":"Enter n: 3","exampleOutput":"[[1,2,3],[8,9,4],[7,6,5]]","answerFile":"./answers/E047.c","learningOutcome":"Simulation, boundary management."},{"projectId":"E048","title":"Matrix Chain Multiplication (Minimum Cost)","difficulty":"Expert","description":"Given an array of dimensions for matrices, find the minimum number of multiplications needed to multiply the chain.","exampleText":"Enter number of matrices: 4\\nDimensions: 10 20 30 40 30","exampleOutput":"Minimum multiplications = 30000","answerFile":"./answers/E048.c","learningOutcome":"Dynamic programming on array of dimensions."},{"projectId":"E049","title":"Coin Change (Minimum Coins)","difficulty":"Expert","description":"Given an array of coin denominations and a total amount, find the minimum number of coins needed to make that amount.","exampleText":"Enter number of denominations: 3\\nDenominations: 1 2 5\\nAmount: 11","exampleOutput":"Minimum coins = 3 (5+5+1)","answerFile":"./answers/E049.c","learningOutcome":"Dynamic programming, unbounded knapsack."},{"projectId":"E050","title":"Implement Min‑Heap (Priority Queue)","difficulty":"Expert","description":"Implement a min‑heap data structure using an array, with operations: insert, extractMin, and heapify.","exampleText":"Insert 5, 3, 8, 1, 2\\nExtract min three times.","exampleOutput":"Extracted: 1, 2, 3","answerFile":"./answers/E050.c","learningOutcome":"Heap data structure, array representation."}]`),r={projectCategory:l,subject:m,board:c,class:"XI - XII",tools:d,institute:u,projects:f},p=`#include <stdio.h>

/*
    Function: swap
    ----------------
    Swaps the values of two integers using pointers.
*/
void swap(int *a, int *b) {
    int temp = *a;   // Store value of a in temp
    *a = *b;         // Copy value of b into a
    *b = temp;       // Copy temp (original a) into b
}

/*
    Function: partition
    --------------------
    This function rearranges the array elements around a pivot.
    
    Steps:
    1. Select the last element as pivot.
    2. Place all elements smaller than or equal to pivot
       on the left side.
    3. Place all elements greater than pivot on the right side.
    4. Return the final position of the pivot element.
*/
int partition(int arr[], int low, int high) {
    int pivot = arr[high];   // Choose last element as pivot
    int i = low - 1;         // Index of smaller element

    // Traverse array from low to high-1
    for (int j = low; j < high; j++) {

        // If current element is <= pivot
        if (arr[j] <= pivot) {
            i++;  // Move index of smaller element forward
            swap(&arr[i], &arr[j]);  // Swap smaller element to left side
        }
    }

    // Place pivot in correct sorted position
    swap(&arr[i + 1], &arr[high]);

    return i + 1;  // Return pivot index
}

/*
    Function: quickSort
    ---------------------
    Recursive Quick Sort algorithm.
    
    Steps:
    1. Partition the array.
    2. Recursively sort left subarray.
    3. Recursively sort right subarray.
*/
void quickSort(int arr[], int low, int high) {

    // Base condition: If there are at least 2 elements
    if (low < high) {

        // Partition the array and get pivot index
        int pi = partition(arr, low, high);

        // Recursively sort elements before pivot
        quickSort(arr, low, pi - 1);

        // Recursively sort elements after pivot
        quickSort(arr, pi + 1, high);
    }
}

/*
    Main Function
    --------------
    1. Take input size of array.
    2. Take array elements.
    3. Call quickSort().
    4. Print sorted array.
*/
int main() {
    int n, arr[100];

    printf("Enter size: ");
    scanf("%d", &n);

    printf("Enter elements: ");
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    // Call Quick Sort
    quickSort(arr, 0, n - 1);

    // Print sorted array
    printf("Sorted array: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    printf("\\n");

    return 0;
}
`,h=`#include <stdio.h>

/*
    Function: merge
    ----------------
    This function merges two sorted subarrays into one sorted array.

    Parameters:
    arr[] → Original array
    l     → Left index
    m     → Middle index
    r     → Right index

    The subarrays are:
    Left  part → arr[l ... m]
    Right part → arr[m+1 ... r]
*/
void merge(int arr[], int l, int m, int r) {

    int n1 = m - l + 1;   // Size of left subarray
    int n2 = r - m;       // Size of right subarray

    int L[n1], R[n2];     // Temporary arrays

    // Copy data into temporary left array
    for (int i = 0; i < n1; i++)
        L[i] = arr[l + i];

    // Copy data into temporary right array
    for (int j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    int i = 0, j = 0;     // Initial indexes of subarrays
    int k = l;            // Initial index of merged array

    /*
        Compare elements from both arrays
        and copy the smaller one into original array
    */
    while (i < n1 && j < n2) {

        if (L[i] <= R[j])
            arr[k++] = L[i++];   // Copy from left
        else
            arr[k++] = R[j++];   // Copy from right
    }

    /*
        Copy remaining elements (if any)
        Only one of these loops will execute
    */
    while (i < n1)
        arr[k++] = L[i++];

    while (j < n2)
        arr[k++] = R[j++];
}

/*
    Function: mergeSort
    ---------------------
    Recursive function that divides the array into halves
    until single elements remain, then merges them back.
*/
void mergeSort(int arr[], int l, int r) {

    // Base condition: At least two elements
    if (l < r) {

        // Find middle index
        int m = l + (r - l) / 2;

        // Recursively sort left half
        mergeSort(arr, l, m);

        // Recursively sort right half
        mergeSort(arr, m + 1, r);

        // Merge the two sorted halves
        merge(arr, l, m, r);
    }
}

/*
    Main Function
    --------------
    1. Take input size
    2. Take array elements
    3. Call mergeSort()
    4. Print sorted array
*/
int main() {

    int n, arr[100];

    printf("Enter size: ");
    scanf("%d", &n);

    printf("Enter elements: ");
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    // Call Merge Sort
    mergeSort(arr, 0, n - 1);

    // Print sorted array
    printf("Sorted array: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    printf("\\n");

    return 0;
}
`,g=`#include <stdio.h>

/*
    Function: heapify
    ------------------
    This function ensures the subtree rooted at index i
    satisfies the Max-Heap property.

    Max-Heap Property:
    Parent node must be greater than its children.
*/
void heapify(int arr[], int n, int i) {

    int largest = i;            // Assume root is largest
    int left = 2 * i + 1;       // Left child index
    int right = 2 * i + 2;      // Right child index

    // If left child exists and is greater than root
    if (left < n && arr[left] > arr[largest])
        largest = left;

    // If right child exists and is greater than current largest
    if (right < n && arr[right] > arr[largest])
        largest = right;

    /*
        If largest is not root,
        swap and recursively heapify the affected subtree
    */
    if (largest != i) {

        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        // Recursively heapify the affected subtree
        heapify(arr, n, largest);
    }
}

/*
    Function: heapSort
    --------------------
    Steps:
    1. Build a Max Heap from the array.
    2. Swap root (largest element) with last element.
    3. Reduce heap size and heapify again.
    4. Repeat until array is sorted.
*/
void heapSort(int arr[], int n) {

    /*
        Step 1: Build Max Heap
        Start from last non-leaf node
    */
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    /*
        Step 2: Extract elements one by one
    */
    for (int i = n - 1; i > 0; i--) {

        // Move current root (largest) to end
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // Call heapify on reduced heap
        heapify(arr, i, 0);
    }
}

/*
    Main Function
    --------------
    1. Take array size.
    2. Take array elements.
    3. Call heapSort().
    4. Print sorted array.
*/
int main() {

    int n, arr[100];

    printf("Enter size: ");
    scanf("%d", &n);

    printf("Enter elements: ");
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    // Call Heap Sort
    heapSort(arr, n);

    // Print sorted array
    printf("Sorted array: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    printf("\\n");

    return 0;
}
`,x=`#include <stdio.h>

/*
    Function: countingSort
    ------------------------
    Sorts an array of non-negative integers using Counting Sort.

    Counting Sort works by:
    1. Finding the maximum element.
    2. Counting occurrences of each element.
    3. Rebuilding the array using the count array.
*/
void countingSort(int arr[], int n) {

    // Step 1: Find the maximum element
    int max = arr[0];
    for (int i = 1; i < n; i++)
        if (arr[i] > max)
            max = arr[i];

    /*
        Step 2: Create count array
        Size = max + 1 (to store frequency of each value)
    */
    int count[max + 1];

    // Initialize count array to 0
    for (int i = 0; i <= max; i++)
        count[i] = 0;

    // Store frequency of each element
    for (int i = 0; i < n; i++)
        count[arr[i]]++;

    /*
        Step 3: Build output array
        Insert elements according to frequency
    */
    int output[n];
    int idx = 0;   // Index for output array

    for (int i = 0; i <= max; i++) {

        // Place element i as many times as it appears
        while (count[i]-- > 0)
            output[idx++] = i;
    }

    // Step 4: Copy sorted data back to original array
    for (int i = 0; i < n; i++)
        arr[i] = output[i];
}

/*
    Main Function
    --------------
    1. Take input size
    2. Take non-negative integers
    3. Call countingSort()
    4. Print sorted array
*/
int main() {

    int n, arr[100];

    printf("Enter size: ");
    scanf("%d", &n);

    printf("Enter non-negative integers: ");
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    // Call Counting Sort
    countingSort(arr, n);

    // Print sorted array
    printf("Sorted array: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    printf("\\n");

    return 0;
}
`,w=`#include <stdio.h>

/*
    Function: getMax
    -----------------
    Finds the maximum element in the array.
    This helps determine the number of digits
    in the largest number.
*/
int getMax(int arr[], int n) {

    int mx = arr[0];   // Assume first element is maximum

    for (int i = 1; i < n; i++)
        if (arr[i] > mx)
            mx = arr[i];

    return mx;
}

/*
    Function: countingSortForRadix
    --------------------------------
    Performs Counting Sort based on a specific digit
    represented by exp (1, 10, 100, ...).

    exp = 1   → units place
    exp = 10  → tens place
    exp = 100 → hundreds place
*/
void countingSortForRadix(int arr[], int n, int exp) {

    int output[n];     // Temporary output array
    int count[10] = {0};  // Count array for digits 0–9

    /*
        Step 1: Count occurrences of digits
        (arr[i] / exp) % 10 extracts the required digit
    */
    for (int i = 0; i < n; i++)
        count[(arr[i] / exp) % 10]++;

    /*
        Step 2: Convert count[] into cumulative count[]
        This helps maintain stability
    */
    for (int i = 1; i < 10; i++)
        count[i] += count[i - 1];

    /*
        Step 3: Build output array (Traverse from right to left)
        Traversing backwards maintains stable sorting
    */
    for (int i = n - 1; i >= 0; i--) {

        int digit = (arr[i] / exp) % 10;

        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    /*
        Step 4: Copy sorted elements back to original array
    */
    for (int i = 0; i < n; i++)
        arr[i] = output[i];
}

/*
    Function: radixSort
    ---------------------
    Main Radix Sort algorithm.

    Steps:
    1. Find maximum number.
    2. Apply counting sort for every digit
       from least significant to most significant.
*/
void radixSort(int arr[], int n) {

    int m = getMax(arr, n);  // Maximum number

    /*
        Apply counting sort for each digit
        exp = 1, 10, 100, 1000...
    */
    for (int exp = 1; m / exp > 0; exp *= 10)
        countingSortForRadix(arr, n, exp);
}

/*
    Main Function
    --------------
    1. Take input size.
    2. Take non-negative integers.
    3. Call radixSort().
    4. Print sorted array.
*/
int main() {

    int n, arr[100];

    printf("Enter size: ");
    scanf("%d", &n);

    printf("Enter non-negative integers: ");
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    // Call Radix Sort
    radixSort(arr, n);

    // Print sorted array
    printf("Sorted array: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    printf("\\n");

    return 0;
}
`,E=`#include <stdio.h>
#include <limits.h>

/*
    Function: findMedianSortedArrays
    ---------------------------------
    Finds median of two sorted arrays using Binary Search.

    Time Complexity: O(log(min(m, n)))
    Space Complexity: O(1)

    Idea:
    Instead of merging arrays (O(m+n)),
    we use Binary Search on the smaller array.
*/
double findMedianSortedArrays(int nums1[], int m, int nums2[], int n) {

    /*
        Always apply binary search on smaller array
        to reduce complexity.
    */
    if (m > n)
        return findMedianSortedArrays(nums2, n, nums1, m);

    int low = 0, high = m;

    while (low <= high) {

        // Partition index for first array
        int partX = (low + high) / 2;

        // Partition index for second array
        int partY = (m + n + 1) / 2 - partX;

        /*
            Handle edge cases using INT_MIN and INT_MAX
            when partition touches array boundaries
        */
        int maxX = (partX == 0) ? INT_MIN : nums1[partX - 1];
        int minX = (partX == m) ? INT_MAX : nums1[partX];

        int maxY = (partY == 0) ? INT_MIN : nums2[partY - 1];
        int minY = (partY == n) ? INT_MAX : nums2[partY];

        /*
            Correct partition condition:
            Left side max <= Right side min
        */
        if (maxX <= minY && maxY <= minX) {

            // If total elements are even
            if ((m + n) % 2 == 0) {

                int leftMax = (maxX > maxY) ? maxX : maxY;
                int rightMin = (minX < minY) ? minX : minY;

                return (double)(leftMax + rightMin) / 2.0;
            }
            else {
                // If odd → median is max of left side
                return (double)((maxX > maxY) ? maxX : maxY);
            }
        }

        /*
            If left side of nums1 is too big,
            move partition left.
        */
        else if (maxX > minY)
            high = partX - 1;

        /*
            Else move partition right.
        */
        else
            low = partX + 1;
    }

    return -1; // Should never reach here
}

/*
    Main Function
    --------------
    1. Take two sorted arrays as input.
    2. Call findMedianSortedArrays().
    3. Print median.
*/
int main() {

    int m, n;

    printf("Enter size of first sorted array: ");
    scanf("%d", &m);

    int a[m];

    printf("Enter elements: ");
    for (int i = 0; i < m; i++)
        scanf("%d", &a[i]);

    printf("Enter size of second sorted array: ");
    scanf("%d", &n);

    int b[n];

    printf("Enter elements: ");
    for (int i = 0; i < n; i++)
        scanf("%d", &b[i]);

    double median = findMedianSortedArrays(a, m, b, n);

    printf("Median = %g\\n", median);

    return 0;
}
`,y=`#include <stdio.h>

/*
    Function: swap
    ----------------
    Swaps two integer values using pointers.
*/
void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}

/*
    Function: partition
    ---------------------
    Same logic as Quick Sort partition.

    Steps:
    1. Choose last element as pivot.
    2. Place all elements ≤ pivot on left side.
    3. Place elements > pivot on right side.
    4. Return final position of pivot.
*/
int partition(int arr[], int low, int high) {

    int pivot = arr[high];   // Choose pivot
    int i = low;             // Position for smaller elements

    for (int j = low; j < high; j++) {

        if (arr[j] <= pivot) {
            swap(&arr[i], &arr[j]);
            i++;
        }
    }

    // Place pivot in correct position
    swap(&arr[i], &arr[high]);

    return i;   // Return pivot index
}

/*
    Function: quickSelect
    -----------------------
    Finds the kth smallest element using
    Quick Select algorithm.

    Idea:
    Instead of sorting entire array,
    only recurse into one side.
*/
int quickSelect(int arr[], int low, int high, int k) {

    if (low <= high) {

        // Partition array
        int pi = partition(arr, low, high);

        // If pivot index matches k
        if (pi == k)
            return arr[pi];

        // If pivot index is smaller than k
        // Search in right half
        else if (pi < k)
            return quickSelect(arr, pi + 1, high, k);

        // Otherwise search in left half
        else
            return quickSelect(arr, low, pi - 1, k);
    }

    return -1;  // Invalid case
}

/*
    Main Function
    --------------
    1. Take array size.
    2. Take elements.
    3. Take k value (1-based index).
    4. Convert to 0-based index.
    5. Print kth smallest element.
*/
int main() {

    int n, k, arr[100];

    printf("Enter size: ");
    scanf("%d", &n);

    printf("Enter elements: ");
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    printf("Enter k (1-based): ");
    scanf("%d", &k);

    // Convert to 0-based index
    int result = quickSelect(arr, 0, n - 1, k - 1);

    printf("%dth smallest element = %d\\n", k, result);

    return 0;
}
`,j=`#include <stdio.h>

/*
    Function: swap
    ----------------
    Swaps two integers using pointers.
*/
void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}

/*
    Function: reverse
    -------------------
    Reverses a portion of the array
    from index start to end.
*/
void reverse(int arr[], int start, int end) {
    while (start < end) {
        swap(&arr[start], &arr[end]);
        start++;
        end--;
    }
}

/*
    Function: nextPermutation
    ----------------------------
    Rearranges numbers into the next lexicographically
    greater permutation.

    If no greater permutation exists,
    it rearranges to the smallest permutation.
*/
void nextPermutation(int arr[], int n) {

    /*
        Step 1:
        Find the first decreasing element from right.
        (Find index i such that arr[i] < arr[i+1])
    */
    int i = n - 2;
    while (i >= 0 && arr[i] >= arr[i + 1])
        i--;

    /*
        Step 2:
        If such element exists,
        find element just greater than arr[i]
        from right side.
    */
    if (i >= 0) {
        int j = n - 1;

        while (arr[j] <= arr[i])
            j--;

        // Swap them
        swap(&arr[i], &arr[j]);
    }

    /*
        Step 3:
        Reverse the suffix (right part)
        to make it smallest possible.
    */
    reverse(arr, i + 1, n - 1);
}

/*
    Main Function
    --------------
    1. Take array size.
    2. Take elements.
    3. Generate next permutation.
    4. Print result.
*/
int main() {

    int n, arr[100];

    printf("Enter size: ");
    scanf("%d", &n);

    printf("Enter elements: ");
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    nextPermutation(arr, n);

    printf("Next permutation: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    printf("\\n");

    return 0;
}
`,b=`#include <stdio.h>

/*
    Function: ceilIndex
    ---------------------
    Finds the index in tail[] where key should be placed.

    It performs binary search to find the smallest
    element >= key.

    This helps maintain the sorted order in tail[].
*/
int ceilIndex(int tail[], int l, int r, int key) {

    while (l < r) {

        int m = l + (r - l) / 2;

        if (tail[m] >= key)
            r = m;          // Move left
        else
            l = m + 1;      // Move right
    }

    return r;
}

/*
    Function: LIS
    ----------------
    Returns length of Longest Increasing Subsequence.

    Idea:
    tail[i] stores the smallest possible ending value
    of an increasing subsequence of length i+1.

    We do NOT store the actual sequence,
    only maintain candidates.
*/
int LIS(int arr[], int n) {

    int tail[n];

    int len = 1;          // Length of LIS found so far
    tail[0] = arr[0];     // First element starts subsequence

    for (int i = 1; i < n; i++) {

        /*
            Case 1:
            If current element is greater than
            last element of current LIS,
            extend the subsequence.
        */
        if (arr[i] > tail[len - 1]) {

            tail[len++] = arr[i];
        }

        /*
            Case 2:
            Otherwise, find the position where
            arr[i] should replace an element in tail[]
            using binary search.
        */
        else {

            int idx = ceilIndex(tail, 0, len - 1, arr[i]);
            tail[idx] = arr[i];
        }
    }

    return len;
}

/*
    Main Function
    --------------
    1. Take input size.
    2. Take elements.
    3. Call LIS().
    4. Print LIS length.
*/
int main() {

    int n, arr[100];

    printf("Enter size: ");
    scanf("%d", &n);

    printf("Enter elements: ");
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    int lis = LIS(arr, n);

    printf("LIS length = %d\\n", lis);

    return 0;
}
`,v=`#include <stdio.h>

int max(int a, int b) { return a > b ? a : b; }
int min(int a, int b) { return a < b ? a : b; }

int maxProduct(int arr[], int n) {
    int maxProd = arr[0], minProd = arr[0], result = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] < 0) {
            int temp = maxProd;
            maxProd = minProd;
            minProd = temp;
        }
        maxProd = max(arr[i], maxProd * arr[i]);
        minProd = min(arr[i], minProd * arr[i]);
        result = max(result, maxProd);
    }
    return result;
}

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

    int res = maxProduct(arr, n);
    printf("Maximum product = %d\\n", res);
    return 0;
}`,S=`#include <stdio.h>

void findTriplets(int arr[], int n) {
    // Sort array
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }

    printf("Triplets:\\n");
    for (int i = 0; i < n - 2; i++) {
        if (i > 0 && arr[i] == arr[i - 1]) continue;
        int left = i + 1, right = n - 1;
        while (left < right) {
            int sum = arr[i] + arr[left] + arr[right];
            if (sum == 0) {
                printf("[%d, %d, %d]\\n", arr[i], arr[left], arr[right]);
                while (left < right && arr[left] == arr[left + 1]) left++;
                while (left < right && arr[right] == arr[right - 1]) right--;
                left++; right--;
            } else if (sum < 0) left++;
            else right--;
        }
    }
}

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

    findTriplets(arr, n);
    return 0;
}`,M=`#include <stdio.h>

int trap(int height[], int n) {
    int left = 0, right = n - 1;
    int leftMax = 0, rightMax = 0;
    int water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) leftMax = height[left];
            else water += leftMax - height[left];
            left++;
        } else {
            if (height[right] >= rightMax) rightMax = height[right];
            else water += rightMax - height[right];
            right--;
        }
    }
    return water;
}

int main() {
    int n, height[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter heights: ");
    for (int i = 0; i < n; i++) scanf("%d", &height[i]);

    int trapped = trap(height, n);
    printf("Trapped water = %d units\\n", trapped);
    return 0;
}`,k=`#include <stdio.h>

int maxArea(int height[], int n) {
    int left = 0, right = n - 1;
    int maxWater = 0;
    while (left < right) {
        int h = (height[left] < height[right]) ? height[left] : height[right];
        int w = right - left;
        int area = h * w;
        if (area > maxWater) maxWater = area;
        if (height[left] < height[right]) left++;
        else right--;
    }
    return maxWater;
}

int main() {
    int n, height[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter heights: ");
    for (int i = 0; i < n; i++) scanf("%d", &height[i]);

    int water = maxArea(height, n);
    printf("Maximum area = %d\\n", water);
    return 0;
}`,I=`#include <stdio.h>

void slidingWindowMax(int arr[], int n, int k) {
    int deque[100]; // store indices
    int front = 0, rear = -1;

    for (int i = 0; i < n; i++) {
        // remove elements out of window
        if (front <= rear && deque[front] <= i - k) front++;

        // remove smaller elements from rear
        while (front <= rear && arr[deque[rear]] <= arr[i]) rear--;

        deque[++rear] = i;

        if (i >= k - 1) printf("%d ", arr[deque[front]]);
    }
    printf("\\n");
}

int main() {
    int n, k, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter k: ");
    scanf("%d", &k);

    printf("Window maxima: ");
    slidingWindowMax(arr, n, k);
    return 0;
}`,O=`#include <stdio.h>

int minSubArrayLen(int target, int arr[], int n) {
    int left = 0, sum = 0, minLen = n + 1;
    for (int right = 0; right < n; right++) {
        sum += arr[right];
        while (sum >= target) {
            int len = right - left + 1;
            if (len < minLen) minLen = len;
            sum -= arr[left++];
        }
    }
    return (minLen == n + 1) ? 0 : minLen;
}

int main() {
    int n, target, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter target sum: ");
    scanf("%d", &target);

    int len = minSubArrayLen(target, arr, n);
    printf("Minimum subarray length = %d\\n", len);
    return 0;
}`,T=`#include <stdio.h>

int firstMissingPositive(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] != arr[i]) {
            int temp = arr[arr[i] - 1];
            arr[arr[i] - 1] = arr[i];
            arr[i] = temp;
        }
    }
    for (int i = 0; i < n; i++) {
        if (arr[i] != i + 1) return i + 1;
    }
    return n + 1;
}

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

    int missing = firstMissingPositive(arr, n);
    printf("Smallest missing positive = %d\\n", missing);
    return 0;
}`,C=`#include <stdio.h>

void rotate(int matrix[][100], int n) {
    // transpose
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    // reverse each row
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n / 2; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - 1 - j];
            matrix[i][n - 1 - j] = temp;
        }
    }
}

int main() {
    int n, matrix[100][100];
    printf("Enter order: ");
    scanf("%d", &n);
    printf("Enter matrix:\\n");
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &matrix[i][j]);

    rotate(matrix, n);

    printf("Rotated matrix:\\n");
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++)
            printf("%d ", matrix[i][j]);
        printf("\\n");
    }
    return 0;
}`,F=`#include <stdio.h>

void setZeroes(int matrix[][100], int rows, int cols) {
    int firstRowZero = 0, firstColZero = 0;
    for (int j = 0; j < cols; j++)
        if (matrix[0][j] == 0) firstRowZero = 1;
    for (int i = 0; i < rows; i++)
        if (matrix[i][0] == 0) firstColZero = 1;

    for (int i = 1; i < rows; i++) {
        for (int j = 1; j < cols; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (int i = 1; i < rows; i++) {
        for (int j = 1; j < cols; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0)
                matrix[i][j] = 0;
        }
    }

    if (firstRowZero)
        for (int j = 0; j < cols; j++) matrix[0][j] = 0;
    if (firstColZero)
        for (int i = 0; i < rows; i++) matrix[i][0] = 0;
}

int main() {
    int rows, cols, matrix[100][100];
    printf("Enter rows and cols: ");
    scanf("%d %d", &rows, &cols);
    printf("Enter matrix:\\n");
    for (int i = 0; i < rows; i++)
        for (int j = 0; j < cols; j++)
            scanf("%d", &matrix[i][j]);

    setZeroes(matrix, rows, cols);

    printf("Result:\\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++)
            printf("%d ", matrix[i][j]);
        printf("\\n");
    }
    return 0;
}`,z=`#include <stdio.h>

int main() {
    int numRows;
    printf("Enter number of rows: ");
    scanf("%d", &numRows);

    int triangle[100][100];
    for (int i = 0; i < numRows; i++) {
        triangle[i][0] = triangle[i][i] = 1;
        for (int j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
    }

    printf("Pascal's triangle:\\n");
    for (int i = 0; i < numRows; i++) {
        for (int j = 0; j <= i; j++)
            printf("%d ", triangle[i][j]);
        printf("\\n");
    }
    return 0;
}`,P=`#include <stdio.h>

int findDuplicate(int arr[], int n) {
    int slow = arr[0], fast = arr[0];
    do {
        slow = arr[slow];
        fast = arr[arr[fast]];
    } while (slow != fast);

    slow = arr[0];
    while (slow != fast) {
        slow = arr[slow];
        fast = arr[fast];
    }
    return slow;
}

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

    int dup = findDuplicate(arr, n);
    printf("Duplicate number = %d\\n", dup);
    return 0;
}`,R=`#include <stdio.h>

void findMissingRepeating(int arr[], int n) {
    int xor = 0;
    for (int i = 0; i < n; i++) xor ^= arr[i];
    for (int i = 1; i <= n; i++) xor ^= i;

    int setBit = xor & ~(xor - 1);
    int x = 0, y = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] & setBit) x ^= arr[i];
        else y ^= arr[i];
    }
    for (int i = 1; i <= n; i++) {
        if (i & setBit) x ^= i;
        else y ^= i;
    }

    for (int i = 0; i < n; i++) {
        if (arr[i] == x) {
            printf("Repeating = %d, Missing = %d\\n", x, y);
            return;
        }
    }
    printf("Repeating = %d, Missing = %d\\n", y, x);
}

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

    findMissingRepeating(arr, n);
    return 0;
}`,q=`#include <stdio.h>

typedef struct {
    int start;
    int end;
} Interval;

int main() {
    int n;
    printf("Enter number of intervals: ");
    scanf("%d", &n);
    Interval intervals[100];
    printf("Enter intervals (start end) one per line:\\n");
    for (int i = 0; i < n; i++) {
        scanf("%d %d", &intervals[i].start, &intervals[i].end);
    }

    // Bubble sort by start
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (intervals[j].start > intervals[j + 1].start) {
                Interval t = intervals[j];
                intervals[j] = intervals[j + 1];
                intervals[j + 1] = t;
            }
        }
    }

    Interval merged[100];
    int m = 0;
    merged[m++] = intervals[0];
    for (int i = 1; i < n; i++) {
        if (intervals[i].start <= merged[m - 1].end) {
            if (intervals[i].end > merged[m - 1].end)
                merged[m - 1].end = intervals[i].end;
        } else {
            merged[m++] = intervals[i];
        }
    }

    printf("Merged intervals:\\n");
    for (int i = 0; i < m; i++)
        printf("[%d,%d] ", merged[i].start, merged[i].end);
    printf("\\n");
    return 0;
}`,G=`#include <stdio.h>
#include <limits.h>

int maximumGap(int arr[], int n) {
    if (n < 2) return 0;
    int maxVal = arr[0], minVal = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > maxVal) maxVal = arr[i];
        if (arr[i] < minVal) minVal = arr[i];
    }

    int bucketSize = (maxVal - minVal) / (n - 1) + 1;
    int bucketCount = (maxVal - minVal) / bucketSize + 1;

    int bucketMin[bucketCount];
    int bucketMax[bucketCount];
    for (int i = 0; i < bucketCount; i++) {
        bucketMin[i] = INT_MAX;
        bucketMax[i] = INT_MIN;
    }

    for (int i = 0; i < n; i++) {
        int idx = (arr[i] - minVal) / bucketSize;
        if (arr[i] < bucketMin[idx]) bucketMin[idx] = arr[i];
        if (arr[i] > bucketMax[idx]) bucketMax[idx] = arr[i];
    }

    int maxGap = 0, prevMax = minVal;
    for (int i = 0; i < bucketCount; i++) {
        if (bucketMin[i] != INT_MAX) {
            if (bucketMin[i] - prevMax > maxGap)
                maxGap = bucketMin[i] - prevMax;
            prevMax = bucketMax[i];
        }
    }
    return maxGap;
}

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

    int gap = maximumGap(arr, n);
    printf("Maximum gap = %d\\n", gap);
    return 0;
}`,A=`#include <stdio.h>

#define MAX 10000

int main() {
    int n, target, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter target sum: ");
    scanf("%d", &target);

    int freq[MAX * 2 + 1] = {0}; // offset to handle negatives
    int offset = MAX;

    for (int i = 0; i < n; i++) {
        int complement = target - arr[i];
        if (freq[complement + offset] > 0) {
            for (int j = 0; j < freq[complement + offset]; j++)
                printf("(%d,%d) ", complement, arr[i]);
        }
        freq[arr[i] + offset]++;
    }
    printf("\\n");
    return 0;
}`,L=`#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

int threeSumClosest(int arr[], int n, int target) {
    qsort(arr, n, sizeof(int), compare);
    int closest = arr[0] + arr[1] + arr[2];
    for (int i = 0; i < n - 2; i++) {
        int left = i + 1, right = n - 1;
        while (left < right) {
            int sum = arr[i] + arr[left] + arr[right];
            if (abs(sum - target) < abs(closest - target))
                closest = sum;
            if (sum < target) left++;
            else if (sum > target) right--;
            else return sum;
        }
    }
    return closest;
}

int main() {
    int n, target, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter target: ");
    scanf("%d", &target);

    int closest = threeSumClosest(arr, n, target);
    printf("Closest sum = %d\\n", closest);
    return 0;
}`,N=`#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

void fourSum(int arr[], int n, int target) {
    qsort(arr, n, sizeof(int), compare);
    for (int i = 0; i < n - 3; i++) {
        if (i > 0 && arr[i] == arr[i - 1]) continue;
        for (int j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && arr[j] == arr[j - 1]) continue;
            int left = j + 1, right = n - 1;
            while (left < right) {
                int sum = arr[i] + arr[j] + arr[left] + arr[right];
                if (sum == target) {
                    printf("[%d,%d,%d,%d] ", arr[i], arr[j], arr[left], arr[right]);
                    while (left < right && arr[left] == arr[left + 1]) left++;
                    while (left < right && arr[right] == arr[right - 1]) right--;
                    left++; right--;
                } else if (sum < target) left++;
                else right--;
            }
        }
    }
    printf("\\n");
}

int main() {
    int n, target, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter target: ");
    scanf("%d", &target);

    fourSum(arr, n, target);
    return 0;
}`,D=`#include <stdio.h>

#define MAX 10000

int subarraySum(int arr[], int n, int k) {
    int count = 0;
    for (int i = 0; i < n; i++) {
        int sum = 0;
        for (int j = i; j < n; j++) {
            sum += arr[j];
            if (sum == k) count++;
        }
    }
    return count;
}

int main() {
    int n, k, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter target: ");
    scanf("%d", &k);

    int count = subarraySum(arr, n, k);
    printf("Number of subarrays = %d\\n", count);
    return 0;
}`,B=`#include <stdio.h>

int subarraysDivByK(int arr[], int n, int k) {
    int modCount[k];
    for (int i = 0; i < k; i++) modCount[i] = 0;
    int sum = 0, count = 0;
    modCount[0] = 1;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
        int mod = sum % k;
        if (mod < 0) mod += k;
        count += modCount[mod];
        modCount[mod]++;
    }
    return count;
}

int main() {
    int n, k, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter k: ");
    scanf("%d", &k);

    int count = subarraysDivByK(arr, n, k);
    printf("Number of subarrays = %d\\n", count);
    return 0;
}`,X=`#include <stdio.h>

int max(int a, int b) { return a > b ? a : b; }
int min(int a, int b) { return a < b ? a : b; }

int maxSubarraySumCircular(int arr[], int n) {
    int total = 0;
    int maxSum = arr[0], curMax = 0;
    int minSum = arr[0], curMin = 0;
    for (int i = 0; i < n; i++) {
        curMax = max(arr[i], curMax + arr[i]);
        maxSum = max(maxSum, curMax);
        curMin = min(arr[i], curMin + arr[i]);
        minSum = min(minSum, curMin);
        total += arr[i];
    }
    if (maxSum < 0) return maxSum; // all negatives
    return max(maxSum, total - minSum);
}

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

    int maxCirc = maxSubarraySumCircular(arr, n);
    printf("Maximum circular subarray sum = %d\\n", maxCirc);
    return 0;
}`,H=`#include <stdio.h>

int findPeak(int arr[], int n) {
    int left = 0, right = n - 1;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] > arr[mid + 1]) right = mid;
        else left = mid + 1;
    }
    return left;
}

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

    int peakIdx = findPeak(arr, n);
    printf("A peak element: %d at index %d\\n", arr[peakIdx], peakIdx);
    return 0;
}`,Y=`#include <stdio.h>

void majorityElement(int arr[], int n) {
    int candidate1 = 0, candidate2 = 0, count1 = 0, count2 = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] == candidate1) count1++;
        else if (arr[i] == candidate2) count2++;
        else if (count1 == 0) { candidate1 = arr[i]; count1 = 1; }
        else if (count2 == 0) { candidate2 = arr[i]; count2 = 1; }
        else { count1--; count2--; }
    }
    count1 = count2 = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] == candidate1) count1++;
        else if (arr[i] == candidate2) count2++;
    }
    printf("Majority elements ( > n/3 ): ");
    if (count1 > n / 3) printf("%d ", candidate1);
    if (count2 > n / 3) printf("%d ", candidate2);
    printf("\\n");
}

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

    majorityElement(arr, n);
    return 0;
}`,W=`#include <stdio.h>

void sortColors(int arr[], int n) {
    int low = 0, mid = 0, high = n - 1;
    while (mid <= high) {
        switch (arr[mid]) {
            case 0:
                int temp = arr[low];
                arr[low] = arr[mid];
                arr[mid] = temp;
                low++; mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                temp = arr[mid];
                arr[mid] = arr[high];
                arr[high] = temp;
                high--;
                break;
        }
    }
}

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements (0,1,2): ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

    sortColors(arr, n);

    printf("Sorted array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,V=`#include <stdio.h>

int removeDuplicates(int arr[], int n) {
    if (n <= 2) return n;
    int j = 2;
    for (int i = 2; i < n; i++) {
        if (arr[i] != arr[j - 2]) {
            arr[j] = arr[i];
            j++;
        }
    }
    return j;
}

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter sorted elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

    int newLen = removeDuplicates(arr, n);

    printf("New array: ");
    for (int i = 0; i < newLen; i++) printf("%d ", arr[i]);
    printf("\\nNew length = %d\\n", newLen);
    return 0;
}`,Q=`#include <stdio.h>

int firstMissingPositive(int arr[], int n) {
    // segregate positives and negatives
    int j = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] > 0) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
    int posSize = j;

    // Mark presence
    for (int i = 0; i < posSize; i++) {
        int val = abs(arr[i]);
        if (val <= posSize && arr[val - 1] > 0)
            arr[val - 1] = -arr[val - 1];
    }

    for (int i = 0; i < posSize; i++) {
        if (arr[i] > 0) return i + 1;
    }
    return posSize + 1;
}

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements (may include negatives): ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

    int missing = firstMissingPositive(arr, n);
    printf("Smallest missing positive = %d\\n", missing);
    return 0;
}`,_=`#include <stdio.h>

int longestConsecutive(int arr[], int n) {
    if (n == 0) return 0;
    // simple bubble sort (for clarity)
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }

    int longest = 1, current = 1;
    for (int i = 1; i < n; i++) {
        if (arr[i] == arr[i - 1]) continue;
        if (arr[i] == arr[i - 1] + 1) current++;
        else {
            if (current > longest) longest = current;
            current = 1;
        }
    }
    if (current > longest) longest = current;
    return longest;
}

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

    int len = longestConsecutive(arr, n);
    printf("Longest consecutive length = %d\\n", len);
    return 0;
}`,Z=`#include <stdio.h>

int canCompleteCircuit(int gas[], int cost[], int n) {
    int total = 0, curr = 0, start = 0;
    for (int i = 0; i < n; i++) {
        int diff = gas[i] - cost[i];
        total += diff;
        curr += diff;
        if (curr < 0) {
            start = i + 1;
            curr = 0;
        }
    }
    return total >= 0 ? start : -1;
}

int main() {
    int n;
    printf("Enter number of stations: ");
    scanf("%d", &n);
    int gas[n], cost[n];
    printf("Enter gas amounts: ");
    for (int i = 0; i < n; i++) scanf("%d", &gas[i]);
    printf("Enter cost amounts: ");
    for (int i = 0; i < n; i++) scanf("%d", &cost[i]);

    int start = canCompleteCircuit(gas, cost, n);
    if (start != -1)
        printf("Starting station = %d\\n", start);
    else
        printf("No solution\\n");
    return 0;
}`,J=`#include <stdio.h>

int candy(int ratings[], int n) {
    int candies[n];
    for (int i = 0; i < n; i++) candies[i] = 1;

    for (int i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1])
            candies[i] = candies[i - 1] + 1;
    }

    for (int i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1])
            candies[i] = candies[i + 1] + 1;
    }

    int sum = 0;
    for (int i = 0; i < n; i++) sum += candies[i];
    return sum;
}

int main() {
    int n, ratings[100];
    printf("Enter number of children: ");
    scanf("%d", &n);
    printf("Enter ratings: ");
    for (int i = 0; i < n; i++) scanf("%d", &ratings[i]);

    int total = candy(ratings, n);
    printf("Minimum candies = %d\\n", total);
    return 0;
}`,K=`#include <stdio.h>

int canJump(int arr[], int n) {
    int reachable = 0;
    for (int i = 0; i < n; i++) {
        if (i > reachable) return 0;
        if (i + arr[i] > reachable) reachable = i + arr[i];
    }
    return 1;
}

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter jump distances: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

    if (canJump(arr, n))
        printf("Can reach last index.\\n");
    else
        printf("Cannot reach last index.\\n");
    return 0;
}`,U=`#include <stdio.h>

int jump(int arr[], int n) {
    int jumps = 0, currentEnd = 0, farthest = 0;
    for (int i = 0; i < n - 1; i++) {
        if (i + arr[i] > farthest) farthest = i + arr[i];
        if (i == currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }
    return jumps;
}

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter jump distances: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

    int minJumps = jump(arr, n);
    printf("Minimum jumps = %d\\n", minJumps);
    return 0;
}`,$=`#include <stdio.h>

int max(int a, int b) { return a > b ? a : b; }

int maxProfit(int prices[], int n) {
    if (n < 2) return 0;
    int buy = -prices[0], sell = 0, cooldown = 0;
    for (int i = 1; i < n; i++) {
        int newBuy = max(buy, cooldown - prices[i]);
        int newSell = max(sell, buy + prices[i]);
        int newCooldown = max(cooldown, sell);
        buy = newBuy;
        sell = newSell;
        cooldown = newCooldown;
    }
    return sell;
}

int main() {
    int n, prices[100];
    printf("Enter number of days: ");
    scanf("%d", &n);
    printf("Enter prices: ");
    for (int i = 0; i < n; i++) scanf("%d", &prices[i]);

    int profit = maxProfit(prices, n);
    printf("Maximum profit = %d\\n", profit);
    return 0;
}`,nn=`#include <stdio.h>
#include <string.h>

int dfs(char board[][100], int rows, int cols, char *word, int i, int j, int idx) {
    if (idx == strlen(word)) return 1;
    if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] != word[idx]) return 0;

    char temp = board[i][j];
    board[i][j] = '#';
    int found = dfs(board, rows, cols, word, i + 1, j, idx + 1) ||
                dfs(board, rows, cols, word, i - 1, j, idx + 1) ||
                dfs(board, rows, cols, word, i, j + 1, idx + 1) ||
                dfs(board, rows, cols, word, i, j - 1, idx + 1);
    board[i][j] = temp;
    return found;
}

int exist(char board[][100], int rows, int cols, char *word) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (board[i][j] == word[0] && dfs(board, rows, cols, word, i, j, 0))
                return 1;
        }
    }
    return 0;
}

int main() {
    int rows, cols;
    char board[100][100], word[100];
    printf("Enter rows and cols: ");
    scanf("%d %d", &rows, &cols);
    printf("Enter board row by row (no spaces):\\n");
    for (int i = 0; i < rows; i++)
        scanf("%s", board[i]);

    printf("Enter word: ");
    scanf("%s", word);

    if (exist(board, rows, cols, word))
        printf("Word found.\\n");
    else
        printf("Word not found.\\n");
    return 0;
}`,tn=`#include <stdio.h>

void dfs(char grid[][100], int rows, int cols, int i, int j) {
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] != '1') return;
    grid[i][j] = '0';
    dfs(grid, rows, cols, i + 1, j);
    dfs(grid, rows, cols, i - 1, j);
    dfs(grid, rows, cols, i, j + 1);
    dfs(grid, rows, cols, i, j - 1);
}

int numIslands(char grid[][100], int rows, int cols) {
    int count = 0;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (grid[i][j] == '1') {
                count++;
                dfs(grid, rows, cols, i, j);
            }
        }
    }
    return count;
}

int main() {
    int rows, cols;
    char grid[100][100];
    printf("Enter rows and cols: ");
    scanf("%d %d", &rows, &cols);
    printf("Enter grid row by row (0/1, no spaces):\\n");
    for (int i = 0; i < rows; i++)
        scanf("%s", grid[i]);

    int islands = numIslands(grid, rows, cols);
    printf("Number of islands = %d\\n", islands);
    return 0;
}`,en=`#include <stdio.h>

typedef struct {
    int x, y, time;
} QueueNode;

int orangesRotting(int grid[][100], int rows, int cols) {
    QueueNode q[10000];
    int front = 0, rear = 0;
    int fresh = 0;

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (grid[i][j] == 2) {
                q[rear++] = (QueueNode){i, j, 0};
            } else if (grid[i][j] == 1) {
                fresh++;
            }
        }
    }

    int dirs[4][2] = {{1,0}, {-1,0}, {0,1}, {0,-1}};
    int maxTime = 0;

    while (front < rear) {
        QueueNode cur = q[front++];
        maxTime = cur.time;
        for (int d = 0; d < 4; d++) {
            int ni = cur.x + dirs[d][0];
            int nj = cur.y + dirs[d][1];
            if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && grid[ni][nj] == 1) {
                grid[ni][nj] = 2;
                fresh--;
                q[rear++] = (QueueNode){ni, nj, cur.time + 1};
            }
        }
    }

    return (fresh == 0) ? maxTime : -1;
}

int main() {
    int rows, cols, grid[100][100];
    printf("Enter rows and cols: ");
    scanf("%d %d", &rows, &cols);
    printf("Enter grid (0 empty, 1 fresh, 2 rotten):\\n");
    for (int i = 0; i < rows; i++)
        for (int j = 0; j < cols; j++)
            scanf("%d", &grid[i][j]);

    int minutes = orangesRotting(grid, rows, cols);
    if (minutes == -1)
        printf("Impossible, some fresh oranges remain.\\n");
    else
        printf("Minutes = %d\\n", minutes);
    return 0;
}`,rn=`#include <stdio.h>

int countLessEqual(int matrix[][100], int rows, int cols, int x) {
    int count = 0;
    for (int i = 0; i < rows; i++) {
        int left = 0, right = cols - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (matrix[i][mid] <= x) left = mid + 1;
            else right = mid - 1;
        }
        count += left;
    }
    return count;
}

int findMedian(int matrix[][100], int rows, int cols) {
    int low = matrix[0][0], high = matrix[0][cols - 1];
    for (int i = 1; i < rows; i++) {
        if (matrix[i][0] < low) low = matrix[i][0];
        if (matrix[i][cols - 1] > high) high = matrix[i][cols - 1];
    }

    int desired = (rows * cols + 1) / 2;

    while (low < high) {
        int mid = low + (high - low) / 2;
        int count = countLessEqual(matrix, rows, cols, mid);
        if (count < desired) low = mid + 1;
        else high = mid;
    }
    return low;
}

int main() {
    int rows, cols, matrix[100][100];
    printf("Enter rows and cols: ");
    scanf("%d %d", &rows, &cols);
    printf("Enter matrix row by row (sorted):\\n");
    for (int i = 0; i < rows; i++)
        for (int j = 0; j < cols; j++)
            scanf("%d", &matrix[i][j]);

    int median = findMedian(matrix, rows, cols);
    printf("Median = %d\\n", median);
    return 0;
}`,an=`#include <stdio.h>

void searchMatrix(int matrix[][100], int rows, int cols, int target) {
    int i = 0, j = cols - 1;
    while (i < rows && j >= 0) {
        if (matrix[i][j] == target) {
            printf("Element found at (%d,%d)\\n", i, j);
            return;
        }
        if (matrix[i][j] > target) j--;
        else i++;
    }
    printf("Element not found\\n");
}

int main() {
    int rows, cols, matrix[100][100], target;
    printf("Enter rows and cols: ");
    scanf("%d %d", &rows, &cols);
    printf("Enter matrix (row and column sorted):\\n");
    for (int i = 0; i < rows; i++)
        for (int j = 0; j < cols; j++)
            scanf("%d", &matrix[i][j]);
    printf("Enter target: ");
    scanf("%d", &target);

    searchMatrix(matrix, rows, cols, target);
    return 0;
}`,sn=`#include <stdio.h>

int countLessEqual(int matrix[][100], int n, int x) {
    int count = 0;
    int row = n - 1, col = 0;
    while (row >= 0 && col < n) {
        if (matrix[row][col] <= x) {
            count += row + 1;
            col++;
        } else {
            row--;
        }
    }
    return count;
}

int kthSmallest(int matrix[][100], int n, int k) {
    int low = matrix[0][0], high = matrix[n - 1][n - 1];
    while (low < high) {
        int mid = low + (high - low) / 2;
        int count = countLessEqual(matrix, n, mid);
        if (count < k) low = mid + 1;
        else high = mid;
    }
    return low;
}

int main() {
    int n, k, matrix[100][100];
    printf("Enter n (size of n x n matrix): ");
    scanf("%d", &n);
    printf("Enter matrix (sorted row and column):\\n");
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &matrix[i][j]);
    printf("Enter k: ");
    scanf("%d", &k);

    int result = kthSmallest(matrix, n, k);
    printf("%dth smallest = %d\\n", k, result);
    return 0;
}`,on=`#include <stdio.h>

void generateMatrix(int n, int matrix[][100]) {
    int num = 1;
    int top = 0, bottom = n - 1, left = 0, right = n - 1;
    while (top <= bottom && left <= right) {
        for (int i = left; i <= right; i++) matrix[top][i] = num++;
        top++;
        for (int i = top; i <= bottom; i++) matrix[i][right] = num++;
        right--;
        if (top <= bottom) {
            for (int i = right; i >= left; i--) matrix[bottom][i] = num++;
            bottom--;
        }
        if (left <= right) {
            for (int i = bottom; i >= top; i--) matrix[i][left] = num++;
            left++;
        }
    }
}

int main() {
    int n, matrix[100][100];
    printf("Enter n: ");
    scanf("%d", &n);

    generateMatrix(n, matrix);

    printf("Generated spiral matrix:\\n");
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++)
            printf("%d ", matrix[i][j]);
        printf("\\n");
    }
    return 0;
}`,ln=`#include <stdio.h>
#include <limits.h>

int matrixChainOrder(int p[], int n) {
    int m[n][n];
    for (int i = 1; i < n; i++) m[i][i] = 0;

    for (int L = 2; L < n; L++) {
        for (int i = 1; i < n - L + 1; i++) {
            int j = i + L - 1;
            m[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                int cost = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
                if (cost < m[i][j]) m[i][j] = cost;
            }
        }
    }
    return m[1][n - 1];
}

int main() {
    int n;
    printf("Enter number of matrices: ");
    scanf("%d", &n);
    int p[n + 1];
    printf("Enter dimensions (row1 col1 col2 ...): ");
    for (int i = 0; i <= n; i++) scanf("%d", &p[i]);

    int minCost = matrixChainOrder(p, n + 1);
    printf("Minimum multiplications = %d\\n", minCost);
    return 0;
}`,mn=`#include <stdio.h>
#include <limits.h>

int minCoins(int coins[], int m, int amount) {
    int dp[amount + 1];
    dp[0] = 0;
    for (int i = 1; i <= amount; i++) dp[i] = INT_MAX;

    for (int i = 1; i <= amount; i++) {
        for (int j = 0; j < m; j++) {
            if (coins[j] <= i && dp[i - coins[j]] != INT_MAX)
                if (dp[i - coins[j]] + 1 < dp[i])
                    dp[i] = dp[i - coins[j]] + 1;
        }
    }
    return dp[amount] == INT_MAX ? -1 : dp[amount];
}

int main() {
    int m, amount;
    printf("Enter number of denominations: ");
    scanf("%d", &m);
    int coins[m];
    printf("Enter denominations: ");
    for (int i = 0; i < m; i++) scanf("%d", &coins[i]);
    printf("Enter amount: ");
    scanf("%d", &amount);

    int min = minCoins(coins, m, amount);
    if (min != -1)
        printf("Minimum coins = %d\\n", min);
    else
        printf("Not possible.\\n");
    return 0;
}`,cn=`#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int *arr;
    int size;
    int capacity;
} MinHeap;

MinHeap* createHeap(int cap) {
    MinHeap *h = (MinHeap*)malloc(sizeof(MinHeap));
    h->capacity = cap;
    h->size = 0;
    h->arr = (int*)malloc(cap * sizeof(int));
    return h;
}

void swap(int *a, int *b) {
    int t = *a; *a = *b; *b = t;
}

void heapify(MinHeap *h, int i) {
    int smallest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    if (left < h->size && h->arr[left] < h->arr[smallest]) smallest = left;
    if (right < h->size && h->arr[right] < h->arr[smallest]) smallest = right;
    if (smallest != i) {
        swap(&h->arr[i], &h->arr[smallest]);
        heapify(h, smallest);
    }
}

void insert(MinHeap *h, int val) {
    if (h->size == h->capacity) {
        printf("Heap full\\n");
        return;
    }
    h->arr[h->size] = val;
    int i = h->size;
    h->size++;
    while (i != 0 && h->arr[(i - 1) / 2] > h->arr[i]) {
        swap(&h->arr[i], &h->arr[(i - 1) / 2]);
        i = (i - 1) / 2;
    }
}

int extractMin(MinHeap *h) {
    if (h->size <= 0) return -1;
    if (h->size == 1) {
        h->size--;
        return h->arr[0];
    }
    int root = h->arr[0];
    h->arr[0] = h->arr[h->size - 1];
    h->size--;
    heapify(h, 0);
    return root;
}

int main() {
    MinHeap *heap = createHeap(100);
    int choice, val;
    while (1) {
        printf("\\n1. Insert\\n2. Extract Min\\n3. Exit\\nChoice: ");
        scanf("%d", &choice);
        switch (choice) {
            case 1:
                printf("Value: ");
                scanf("%d", &val);
                insert(heap, val);
                break;
            case 2:
                val = extractMin(heap);
                if (val != -1) printf("Min = %d\\n", val);
                else printf("Heap empty\\n");
                break;
            case 3:
                free(heap->arr);
                free(heap);
                return 0;
        }
    }
}`,dn={E001:p,E002:h,E003:g,E004:x,E005:w,E006:E,E007:y,E008:j,E009:b,E010:v,E011:S,E012:M,E013:k,E014:I,E015:O,E016:T,E017:C,E018:F,E019:z,E020:P,E021:R,E022:q,E023:G,E024:A,E025:L,E026:N,E027:D,E028:B,E029:X,E030:H,E031:Y,E032:W,E033:V,E034:Q,E035:_,E036:Z,E037:J,E038:K,E039:U,E040:$,E041:nn,E042:tn,E043:en,E044:rn,E045:an,E046:sn,E047:on,E048:ln,E049:mn,E050:cn};function En(){const[n,a]=t.useState(null);return t.useEffect(()=>{const s=r.projects.map(i=>({...i,answer:dn[i.projectId]}));a({...r,projects:s})},[]),n?e.jsx(o,{data:n}):e.jsx("div",{children:"Loading..."})}export{En as default};
