import{r,j as t}from"./index-BFnLuail.js";import{C as s}from"./CProjectAnswerTemplate-CbNrJMld.js";import"./CodeBlock-DH3KhbMR.js";import"./prism-DTsTe1iV.js";import"./prism-json-D0UlpdKh.js";import"./graduation-cap-Dw6O7JgF.js";import"./code-Cpqbp-3A.js";const f="C Programming – 50 Array-Based Projects (Moderate Level)",d="Computer Science (C Programming)",l="WBCHSE / CBSE / ISC",c=["GCC","Turbo C","VS Code","Code::Blocks"],m={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},p=JSON.parse(`[{"projectId":"A001","title":"Sum and Average of Array Elements","difficulty":"Beginner","description":"Read N integers into an array and compute their sum and average.","exampleText":"Enter size: 5\\nEnter elements: 10 20 30 40 50","exampleOutput":"Sum = 150, Average = 30.00","answerFile":"./answers/A001.c","learningOutcome":"Basic array traversal and accumulation."},{"projectId":"A002","title":"Find Maximum and Minimum in Array","difficulty":"Beginner","description":"Find the largest and smallest element in an array.","exampleText":"Enter size: 6\\nEnter elements: 12 7 45 9 23 18","exampleOutput":"Maximum = 45, Minimum = 7","answerFile":"./answers/A002.c","learningOutcome":"Comparison and tracking extremes."},{"projectId":"A003","title":"Reverse an Array (using temporary array)","difficulty":"Beginner","description":"Reverse the elements of an array using a second array.","exampleText":"Enter size: 5\\nEnter elements: 1 2 3 4 5","exampleOutput":"Reversed array: 5 4 3 2 1","answerFile":"./answers/A003.c","learningOutcome":"Array indexing and reversal logic."},{"projectId":"A004","title":"Reverse an Array (in-place)","difficulty":"Intermediate","description":"Reverse an array without using another array (two-pointer swap).","exampleText":"Enter size: 6\\nEnter elements: 10 20 30 40 50 60","exampleOutput":"Reversed array: 60 50 40 30 20 10","answerFile":"./answers/A004.c","learningOutcome":"In-place reversal using two pointers."},{"projectId":"A005","title":"Count Even and Odd Elements","difficulty":"Beginner","description":"Count the number of even and odd elements in an array.","exampleText":"Enter size: 7\\nEnter elements: 12 7 5 8 10 3 6","exampleOutput":"Even: 4, Odd: 3","answerFile":"./answers/A005.c","learningOutcome":"Conditional counting."},{"projectId":"A006","title":"Search an Element (Linear Search)","difficulty":"Beginner","description":"Find the index of a given element using linear search. Return -1 if not found.","exampleText":"Enter size: 5\\nEnter elements: 10 23 45 67 89\\nEnter element to search: 45","exampleOutput":"Element 45 found at index 2","answerFile":"./answers/A006.c","learningOutcome":"Linear search algorithm."},{"projectId":"A007","title":"Second Largest Element in Array","difficulty":"Intermediate","description":"Find the second largest element in an array without sorting.","exampleText":"Enter size: 6\\nEnter elements: 12 35 1 10 34 1","exampleOutput":"Second largest = 34","answerFile":"./answers/A007.c","learningOutcome":"Multiple condition tracking."},{"projectId":"A008","title":"Remove Duplicates from Sorted Array","difficulty":"Intermediate","description":"Given a sorted array, remove duplicates in-place and return new length.","exampleText":"Enter size: 7\\nEnter sorted elements: 1 1 2 2 3 4 4","exampleOutput":"Array after removing duplicates: 1 2 3 4\\nNew length = 4","answerFile":"./answers/A008.c","learningOutcome":"In-place duplicate removal."},{"projectId":"A009","title":"Insert Element at Specific Position","difficulty":"Intermediate","description":"Insert an element at a given position in an array (shift right).","exampleText":"Enter size: 5\\nEnter elements: 10 20 30 40 50\\nEnter position (0-5) and value: 2 25","exampleOutput":"Array after insertion: 10 20 25 30 40 50","answerFile":"./answers/A009.c","learningOutcome":"Shifting elements for insertion."},{"projectId":"A010","title":"Delete Element at Specific Position","difficulty":"Intermediate","description":"Delete an element at a given position in an array (shift left).","exampleText":"Enter size: 6\\nEnter elements: 10 20 30 40 50 60\\nEnter position to delete (0-5): 2","exampleOutput":"Array after deletion: 10 20 40 50 60","answerFile":"./answers/A010.c","learningOutcome":"Shifting left for deletion."},{"projectId":"A011","title":"Rotate Array Left by One","difficulty":"Beginner","description":"Rotate the array left by one position (first element moves to end).","exampleText":"Enter size: 5\\nEnter elements: 1 2 3 4 5","exampleOutput":"Array after left rotation: 2 3 4 5 1","answerFile":"./answers/A011.c","learningOutcome":"Simple rotation."},{"projectId":"A012","title":"Rotate Array Right by One","difficulty":"Beginner","description":"Rotate the array right by one position (last element moves to front).","exampleText":"Enter size: 5\\nEnter elements: 1 2 3 4 5","exampleOutput":"Array after right rotation: 5 1 2 3 4","answerFile":"./answers/A012.c","learningOutcome":"Right rotation logic."},{"projectId":"A013","title":"Rotate Array Left by K Positions","difficulty":"Intermediate","description":"Rotate array left by K positions (efficient method).","exampleText":"Enter size: 7\\nEnter elements: 1 2 3 4 5 6 7\\nEnter K: 3","exampleOutput":"Array after left rotation: 4 5 6 7 1 2 3","answerFile":"./answers/A013.c","learningOutcome":"Reversal algorithm for rotation."},{"projectId":"A014","title":"Rotate Array Right by K Positions","difficulty":"Intermediate","description":"Rotate array right by K positions using reversal.","exampleText":"Enter size: 7\\nEnter elements: 1 2 3 4 5 6 7\\nEnter K: 3","exampleOutput":"Array after right rotation: 5 6 7 1 2 3 4","answerFile":"./answers/A014.c","learningOutcome":"Right rotation via reversal."},{"projectId":"A015","title":"Find Missing Number in Consecutive Array","difficulty":"Intermediate","description":"Given an array of size n-1 containing numbers from 1 to n with one missing, find the missing number.","exampleText":"Enter n: 6\\nEnter n-1 elements: 1 2 4 5 6","exampleOutput":"Missing number = 3","answerFile":"./answers/A015.c","learningOutcome":"Sum formula for missing number."},{"projectId":"A016","title":"Find Pair with Given Sum (Two Sum)","difficulty":"Intermediate","description":"Find if there exists a pair of elements in the array that sum to a given target.","exampleText":"Enter size: 6\\nEnter elements: 8 7 2 5 3 1\\nEnter target sum: 10","exampleOutput":"Pair found: 7 + 3 = 10","answerFile":"./answers/A016.c","learningOutcome":"Nested loops for pair finding."},{"projectId":"A017","title":"Find Majority Element (Moore's Voting Algorithm)","difficulty":"Advanced","description":"Find the element that appears more than n/2 times (if exists).","exampleText":"Enter size: 7\\nEnter elements: 2 2 1 1 2 2 3","exampleOutput":"Majority element = 2","answerFile":"./answers/A017.c","learningOutcome":"Moore's Voting Algorithm."},{"projectId":"A018","title":"Move All Zeros to End","difficulty":"Intermediate","description":"Given an array, move all zeros to the end while maintaining order of non-zero elements.","exampleText":"Enter size: 7\\nEnter elements: 1 0 2 0 3 0 4","exampleOutput":"Array after moving zeros: 1 2 3 4 0 0 0","answerFile":"./answers/A018.c","learningOutcome":"Two-pointer technique."},{"projectId":"A019","title":"Merge Two Sorted Arrays","difficulty":"Intermediate","description":"Merge two sorted arrays into a third sorted array.","exampleText":"Enter size of first array: 4\\nEnter sorted elements: 1 3 5 7\\nEnter size of second array: 3\\nEnter sorted elements: 2 4 6","exampleOutput":"Merged array: 1 2 3 4 5 6 7","answerFile":"./answers/A019.c","learningOutcome":"Merge algorithm."},{"projectId":"A020","title":"Union and Intersection of Two Sorted Arrays","difficulty":"Intermediate","description":"Find union and intersection of two sorted arrays.","exampleText":"Array A: 1 3 4 5 7\\nArray B: 2 3 5 6","exampleOutput":"Union: 1 2 3 4 5 6 7\\nIntersection: 3 5","answerFile":"./answers/A020.c","learningOutcome":"Set operations on arrays."},{"projectId":"A021","title":"Bubble Sort","difficulty":"Beginner","description":"Sort an array using bubble sort.","exampleText":"Enter size: 6\\nEnter elements: 64 34 25 12 22 11","exampleOutput":"Sorted array: 11 12 22 25 34 64","answerFile":"./answers/A021.c","learningOutcome":"Basic sorting."},{"projectId":"A022","title":"Selection Sort","difficulty":"Beginner","description":"Sort an array using selection sort.","exampleText":"Enter size: 5\\nEnter elements: 29 10 14 37 13","exampleOutput":"Sorted array: 10 13 14 29 37","answerFile":"./answers/A022.c","learningOutcome":"Selection sort logic."},{"projectId":"A023","title":"Insertion Sort","difficulty":"Intermediate","description":"Sort an array using insertion sort.","exampleText":"Enter size: 6\\nEnter elements: 12 11 13 5 6 7","exampleOutput":"Sorted array: 5 6 7 11 12 13","answerFile":"./answers/A023.c","learningOutcome":"Insertion sort, shifting."},{"projectId":"A024","title":"Binary Search on Sorted Array","difficulty":"Intermediate","description":"Implement binary search to find an element in a sorted array.","exampleText":"Enter size: 7\\nEnter sorted elements: 2 5 8 12 16 23 38\\nEnter element to search: 16","exampleOutput":"Element 16 found at index 4","answerFile":"./answers/A024.c","learningOutcome":"Binary search algorithm."},{"projectId":"A025","title":"Check if Array is Sorted","difficulty":"Beginner","description":"Determine if an array is sorted in non-decreasing order.","exampleText":"Enter size: 5\\nEnter elements: 1 3 5 7 9","exampleOutput":"Array is sorted.","answerFile":"./answers/A025.c","learningOutcome":"Simple condition checking."},{"projectId":"A026","title":"Leaders in an Array","difficulty":"Intermediate","description":"Print all leaders (elements greater than all elements to their right).","exampleText":"Enter size: 6\\nEnter elements: 16 17 4 3 5 2","exampleOutput":"Leaders: 17 5 2","answerFile":"./answers/A026.c","learningOutcome":"Reverse traversal for leaders."},{"projectId":"A027","title":"Maximum Subarray Sum (Kadane's Algorithm)","difficulty":"Advanced","description":"Find the maximum sum of a contiguous subarray (Kadane's algorithm).","exampleText":"Enter size: 8\\nEnter elements: -2 -3 4 -1 -2 1 5 -3","exampleOutput":"Maximum subarray sum = 7","answerFile":"./answers/A027.c","learningOutcome":"Kadane's algorithm."},{"projectId":"A028","title":"Find Equilibrium Index","difficulty":"Intermediate","description":"Find an index where sum of left elements equals sum of right elements.","exampleText":"Enter size: 7\\nEnter elements: -7 1 5 2 -4 3 0","exampleOutput":"Equilibrium index found at 3","answerFile":"./answers/A028.c","learningOutcome":"Prefix sums."},{"projectId":"A029","title":"Wave Array (Sort in Wave Form)","difficulty":"Intermediate","description":"Arrange array elements in wave form: arr[0] >= arr[1] <= arr[2] >= arr[3] <= ...","exampleText":"Enter size: 6\\nEnter elements: 3 6 5 10 7 20","exampleOutput":"Wave array: 6 3 10 5 20 7","answerFile":"./answers/A029.c","learningOutcome":"Wave arrangement."},{"projectId":"A030","title":"Rearrange Positive and Negative Numbers","difficulty":"Advanced","description":"Rearrange array so that positive and negative numbers alternate, preserving order if possible.","exampleText":"Enter size: 6\\nEnter elements: 1 2 -3 -4 5 -6","exampleOutput":"Rearranged: 1 -3 2 -4 5 -6","answerFile":"./answers/A030.c","learningOutcome":"Complex rearrangement, rotation."},{"projectId":"A031","title":"Matrix Addition","difficulty":"Beginner","description":"Add two matrices of same dimensions.","exampleText":"Enter rows and cols: 2 2\\nMatrix A: 1 2 3 4\\nMatrix B: 5 6 7 8","exampleOutput":"Sum:\\n6 8\\n10 12","answerFile":"./answers/A031.c","learningOutcome":"2D array traversal."},{"projectId":"A032","title":"Matrix Multiplication","difficulty":"Intermediate","description":"Multiply two matrices (if compatible).","exampleText":"Enter rows/cols of A: 2 3\\nA: 1 2 3 4 5 6\\nEnter rows/cols of B: 3 2\\nB: 7 8 9 10 11 12","exampleOutput":"Product:\\n58 64\\n139 154","answerFile":"./answers/A032.c","learningOutcome":"Triple nested loops."},{"projectId":"A033","title":"Transpose of a Matrix","difficulty":"Beginner","description":"Find transpose of a matrix.","exampleText":"Enter rows and cols: 2 3\\nMatrix: 1 2 3 4 5 6","exampleOutput":"Transpose:\\n1 4\\n2 5\\n3 6","answerFile":"./answers/A033.c","learningOutcome":"Row-column swap."},{"projectId":"A034","title":"Check if Matrix is Symmetric","difficulty":"Intermediate","description":"Check if a square matrix is symmetric (equal to its transpose).","exampleText":"Enter order of matrix: 3\\nEnter matrix: 1 2 3 2 4 5 3 5 6","exampleOutput":"Matrix is symmetric.","answerFile":"./answers/A034.c","learningOutcome":"Matrix symmetry."},{"projectId":"A035","title":"Row-Wise Sum of Matrix","difficulty":"Beginner","description":"Compute sum of each row of a matrix.","exampleText":"Enter rows and cols: 3 3\\nMatrix: 1 2 3 4 5 6 7 8 9","exampleOutput":"Row sums: Row0=6, Row1=15, Row2=24","answerFile":"./answers/A035.c","learningOutcome":"Row traversal."},{"projectId":"A036","title":"Column-Wise Sum of Matrix","difficulty":"Beginner","description":"Compute sum of each column of a matrix.","exampleText":"Enter rows and cols: 3 3\\nMatrix: 1 2 3 4 5 6 7 8 9","exampleOutput":"Column sums: Col0=12, Col1=15, Col2=18","answerFile":"./answers/A036.c","learningOutcome":"Column traversal."},{"projectId":"A037","title":"Matrix Diagonal Sum (Primary)","difficulty":"Beginner","description":"Find sum of primary diagonal of a square matrix.","exampleText":"Enter order: 3\\nMatrix: 1 2 3 4 5 6 7 8 9","exampleOutput":"Primary diagonal sum = 15","answerFile":"./answers/A037.c","learningOutcome":"Diagonal access."},{"projectId":"A038","title":"Matrix Secondary Diagonal Sum","difficulty":"Beginner","description":"Find sum of secondary diagonal of a square matrix.","exampleText":"Enter order: 3\\nMatrix: 1 2 3 4 5 6 7 8 9","exampleOutput":"Secondary diagonal sum = 15","answerFile":"./answers/A038.c","learningOutcome":"Secondary diagonal."},{"projectId":"A039","title":"Check Sparse Matrix","difficulty":"Intermediate","description":"Determine if matrix is sparse (more zeros than non-zero).","exampleText":"Enter rows and cols: 3 3\\nMatrix: 0 0 5 0 2 0 1 0 0","exampleOutput":"Matrix is sparse (zero count = 6/9 > 0.5).","answerFile":"./answers/A039.c","learningOutcome":"Sparse condition."},{"projectId":"A040","title":"Upper Triangular Matrix","difficulty":"Intermediate","description":"Check if a matrix is upper triangular (all below main diagonal zero).","exampleText":"Enter order: 3\\nMatrix: 1 2 3 0 5 6 0 0 9","exampleOutput":"Matrix is upper triangular.","answerFile":"./answers/A040.c","learningOutcome":"Triangular matrix condition."},{"projectId":"A041","title":"Lower Triangular Matrix","difficulty":"Intermediate","description":"Check if a matrix is lower triangular (all above main diagonal zero).","exampleText":"Enter order: 3\\nMatrix: 1 0 0 4 5 0 7 8 9","exampleOutput":"Matrix is lower triangular.","answerFile":"./answers/A041.c","learningOutcome":"Lower triangular condition."},{"projectId":"A042","title":"Matrix Rotation 90 Degrees Clockwise","difficulty":"Advanced","description":"Rotate a square matrix 90 degrees clockwise in-place.","exampleText":"Enter order: 3\\nMatrix: 1 2 3 4 5 6 7 8 9","exampleOutput":"Rotated matrix:\\n7 4 1\\n8 5 2\\n9 6 3","answerFile":"./answers/A042.c","learningOutcome":"In-place matrix rotation."},{"projectId":"A043","title":"Matrix Rotation 90 Degrees Anticlockwise","difficulty":"Advanced","description":"Rotate a square matrix 90 degrees anticlockwise in-place.","exampleText":"Enter order: 3\\nMatrix: 1 2 3 4 5 6 7 8 9","exampleOutput":"Rotated matrix:\\n3 6 9\\n2 5 8\\n1 4 7","answerFile":"./answers/A043.c","learningOutcome":"Anticlockwise rotation."},{"projectId":"A044","title":"Find Determinant of 2x2 Matrix","difficulty":"Beginner","description":"Compute determinant of a 2x2 matrix.","exampleText":"Enter 2x2 matrix: 4 3 2 1","exampleOutput":"Determinant = -2","answerFile":"./answers/A044.c","learningOutcome":"Determinant formula."},{"projectId":"A045","title":"Find Determinant of 3x3 Matrix","difficulty":"Intermediate","description":"Compute determinant of a 3x3 matrix.","exampleText":"Enter 3x3 matrix: 1 2 3 4 5 6 7 8 9","exampleOutput":"Determinant = 0","answerFile":"./answers/A045.c","learningOutcome":"3x3 determinant expansion."},{"projectId":"A046","title":"Magic Square Check","difficulty":"Advanced","description":"Check if a given square matrix is a magic square (all rows, columns, diagonals sum to same number).","exampleText":"Enter order: 3\\nMatrix: 8 1 6 3 5 7 4 9 2","exampleOutput":"Matrix is a magic square (sum=15).","answerFile":"./answers/A046.c","learningOutcome":"Magic square validation."},{"projectId":"A047","title":"Spiral Traversal of Matrix","difficulty":"Advanced","description":"Print matrix elements in spiral order.","exampleText":"Enter rows and cols: 3 3\\nMatrix: 1 2 3 4 5 6 7 8 9","exampleOutput":"Spiral order: 1 2 3 6 9 8 7 4 5","answerFile":"./answers/A047.c","learningOutcome":"Spiral traversal logic."},{"projectId":"A048","title":"Find Row with Maximum 1's in Binary Matrix","difficulty":"Intermediate","description":"Given a binary matrix sorted row-wise, find row with maximum number of 1's.","exampleText":"Enter rows and cols: 3 4\\nMatrix: 0 0 1 1  0 1 1 1  0 0 0 1","exampleOutput":"Row 1 has maximum 1's (3).","answerFile":"./answers/A048.c","learningOutcome":"Row-wise counting."},{"projectId":"A049","title":"Boundary Elements of Matrix","difficulty":"Intermediate","description":"Print boundary elements of a matrix.","exampleText":"Enter rows and cols: 3 4\\nMatrix: 1 2 3 4 5 6 7 8 9 10 11 12","exampleOutput":"Boundary elements: 1 2 3 4 8 12 11 10 9 5","answerFile":"./answers/A049.c","learningOutcome":"Boundary traversal."},{"projectId":"A050","title":"Find Peak Element (2D Matrix)","difficulty":"Advanced","description":"Find a peak element in a 2D matrix (greater than or equal to its neighbors).","exampleText":"Enter rows and cols: 3 3\\nMatrix: 10 8 10 10 9 9 5 12 7","exampleOutput":"Peak element found: 12 at (2,1)","answerFile":"./answers/A050.c","learningOutcome":"2D peak finding."}]`),e={projectCategory:f,subject:d,board:l,class:"XI - XII",tools:c,institute:m,projects:p},u=`#include <stdio.h>

int main() {
    int n, arr[100], sum = 0;
    float avg;
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
        sum += arr[i];
    }
    avg = (float)sum / n;
    printf("Sum = %d, Average = %.2f\\n", sum, avg);
    return 0;
}`,x=`#include <stdio.h>

int main() {
    int n, arr[100], max, min;
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    max = min = arr[0];
    for(int i = 1; i < n; i++) {
        if(arr[i] > max) max = arr[i];
        if(arr[i] < min) min = arr[i];
    }
    printf("Maximum = %d, Minimum = %d\\n", max, min);
    return 0;
}`,j=`#include <stdio.h>

int main() {
    int n, arr[100], rev[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    for(int i = 0; i < n; i++) rev[i] = arr[n-1-i];
    printf("Reversed array: ");
    for(int i = 0; i < n; i++) printf("%d ", rev[i]);
    printf("\\n");
    return 0;
}`,g=`#include <stdio.h>

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    for(int i = 0, j = n-1; i < j; i++, j--) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    printf("Reversed array: ");
    for(int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,E=`#include <stdio.h>

int main() {
    int n, arr[100], even = 0, odd = 0;
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
        if(arr[i] % 2 == 0) even++;
        else odd++;
    }
    printf("Even: %d, Odd: %d\\n", even, odd);
    return 0;
}`,A=`#include <stdio.h>

int main() {
    int n, arr[100], key, pos = -1;
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter element to search: ");
    scanf("%d", &key);
    for(int i = 0; i < n; i++) {
        if(arr[i] == key) {
            pos = i;
            break;
        }
    }
    if(pos != -1)
        printf("Element %d found at index %d\\n", key, pos);
    else
        printf("Element not found\\n");
    return 0;
}`,w=`#include <stdio.h>
#include <limits.h>

int main() {
    int n, arr[100];
    int first, second;
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    first = second = INT_MIN;
    for(int i = 0; i < n; i++) {
        if(arr[i] > first) {
            second = first;
            first = arr[i];
        } else if(arr[i] > second && arr[i] != first) {
            second = arr[i];
        }
    }
    if(second == INT_MIN)
        printf("No second largest\\n");
    else
        printf("Second largest = %d\\n", second);
    return 0;
}`,y=`#include <stdio.h>

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter sorted elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    int j = 0;
    for(int i = 0; i < n; i++) {
        if(arr[i] != arr[i+1]) {
            arr[j++] = arr[i];
        }
    }
    printf("Array after removing duplicates: ");
    for(int i = 0; i < j; i++) printf("%d ", arr[i]);
    printf("\\nNew length = %d\\n", j);
    return 0;
}`,h=`#include <stdio.h>

int main() {
    int n, arr[100], pos, val;
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter position and value: ");
    scanf("%d %d", &pos, &val);
    if(pos < 0 || pos > n) {
        printf("Invalid position\\n");
        return 0;
    }
    for(int i = n; i > pos; i--)
        arr[i] = arr[i-1];
    arr[pos] = val;
    n++;
    printf("Array after insertion: ");
    for(int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,O=`#include <stdio.h>

int main() {
    int n, arr[100], pos;
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter position to delete: ");
    scanf("%d", &pos);
    if(pos < 0 || pos >= n) {
        printf("Invalid position\\n");
        return 0;
    }
    for(int i = pos; i < n-1; i++)
        arr[i] = arr[i+1];
    n--;
    printf("Array after deletion: ");
    for(int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,v=`#include <stdio.h>

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    int first = arr[0];
    for(int i = 0; i < n-1; i++)
        arr[i] = arr[i+1];
    arr[n-1] = first;
    printf("Array after left rotation: ");
    for(int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,I=`#include <stdio.h>

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    int last = arr[n-1];
    for(int i = n-1; i > 0; i--)
        arr[i] = arr[i-1];
    arr[0] = last;
    printf("Array after right rotation: ");
    for(int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,M=`#include <stdio.h>

void reverse(int arr[], int start, int end) {
    while(start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++; end--;
    }
}

int main() {
    int n, arr[100], k;
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter K: ");
    scanf("%d", &k);
    k = k % n;
    reverse(arr, 0, k-1);
    reverse(arr, k, n-1);
    reverse(arr, 0, n-1);
    printf("Array after left rotation: ");
    for(int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,S=`#include <stdio.h>

void reverse(int arr[], int start, int end) {
    while(start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++; end--;
    }
}

int main() {
    int n, arr[100], k;
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter K: ");
    scanf("%d", &k);
    k = k % n;
    reverse(arr, 0, n-1);
    reverse(arr, 0, k-1);
    reverse(arr, k, n-1);
    printf("Array after right rotation: ");
    for(int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,b=`#include <stdio.h>

int main() {
    int n, arr[100], sum = 0;
    printf("Enter n: ");
    scanf("%d", &n);
    printf("Enter %d elements: ", n-1);
    for(int i = 0; i < n-1; i++) {
        scanf("%d", &arr[i]);
        sum += arr[i];
    }
    int total = n * (n + 1) / 2;
    printf("Missing number = %d\\n", total - sum);
    return 0;
}`,k=`#include <stdio.h>

int main() {
    int n, arr[100], target, found = 0;
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter target sum: ");
    scanf("%d", &target);
    for(int i = 0; i < n-1; i++) {
        for(int j = i+1; j < n; j++) {
            if(arr[i] + arr[j] == target) {
                printf("Pair found: %d + %d = %d\\n", arr[i], arr[j], target);
                found = 1;
                break;
            }
        }
        if(found) break;
    }
    if(!found) printf("No pair found\\n");
    return 0;
}`,F=`#include <stdio.h>

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    int candidate = arr[0], count = 1;
    for(int i = 1; i < n; i++) {
        if(arr[i] == candidate) count++;
        else count--;
        if(count == 0) {
            candidate = arr[i];
            count = 1;
        }
    }
    count = 0;
    for(int i = 0; i < n; i++)
        if(arr[i] == candidate) count++;
    if(count > n/2)
        printf("Majority element = %d\\n", candidate);
    else
        printf("No majority element\\n");
    return 0;
}`,z=`#include <stdio.h>

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    int j = 0;
    for(int i = 0; i < n; i++) {
        if(arr[i] != 0) {
            arr[j++] = arr[i];
        }
    }
    while(j < n) arr[j++] = 0;
    printf("Array after moving zeros: ");
    for(int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,T=`#include <stdio.h>

int main() {
    int n1, n2, a[100], b[100], merged[200];
    printf("Enter size of first array: ");
    scanf("%d", &n1);
    printf("Enter sorted elements: ");
    for(int i = 0; i < n1; i++) scanf("%d", &a[i]);
    printf("Enter size of second array: ");
    scanf("%d", &n2);
    printf("Enter sorted elements: ");
    for(int i = 0; i < n2; i++) scanf("%d", &b[i]);
    int i = 0, j = 0, k = 0;
    while(i < n1 && j < n2) {
        if(a[i] < b[j]) merged[k++] = a[i++];
        else merged[k++] = b[j++];
    }
    while(i < n1) merged[k++] = a[i++];
    while(j < n2) merged[k++] = b[j++];
    printf("Merged array: ");
    for(int idx = 0; idx < k; idx++) printf("%d ", merged[idx]);
    printf("\\n");
    return 0;
}`,R=`#include <stdio.h>

int main() {
    int n1, n2, a[100], b[100];
    printf("Enter size of first sorted array: ");
    scanf("%d", &n1);
    printf("Enter elements: ");
    for(int i = 0; i < n1; i++) scanf("%d", &a[i]);
    printf("Enter size of second sorted array: ");
    scanf("%d", &n2);
    printf("Enter elements: ");
    for(int i = 0; i < n2; i++) scanf("%d", &b[i]);
    // Union
    int i = 0, j = 0;
    printf("Union: ");
    while(i < n1 && j < n2) {
        if(a[i] < b[j]) printf("%d ", a[i++]);
        else if(b[j] < a[i]) printf("%d ", b[j++]);
        else { printf("%d ", a[i]); i++; j++; }
    }
    while(i < n1) printf("%d ", a[i++]);
    while(j < n2) printf("%d ", b[j++]);
    printf("\\n");
    // Intersection
    i = 0; j = 0;
    printf("Intersection: ");
    while(i < n1 && j < n2) {
        if(a[i] < b[j]) i++;
        else if(b[j] < a[i]) j++;
        else { printf("%d ", a[i]); i++; j++; }
    }
    printf("\\n");
    return 0;
}`,C=`#include <stdio.h>

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    for(int i = 0; i < n-1; i++) {
        for(int j = 0; j < n-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    printf("Sorted array: ");
    for(int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,B=`#include <stdio.h>

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    for(int i = 0; i < n-1; i++) {
        int minIdx = i;
        for(int j = i+1; j < n; j++) {
            if(arr[j] < arr[minIdx])
                minIdx = j;
        }
        int temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    printf("Sorted array: ");
    for(int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,P=`#include <stdio.h>

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    for(int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i-1;
        while(j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    printf("Sorted array: ");
    for(int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,D=`#include <stdio.h>

int binarySearch(int arr[], int low, int high, int key) {
    while(low <= high) {
        int mid = low + (high - low) / 2;
        if(arr[mid] == key) return mid;
        if(arr[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

int main() {
    int n, arr[100], key;
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter sorted elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter element to search: ");
    scanf("%d", &key);
    int index = binarySearch(arr, 0, n-1, key);
    if(index != -1)
        printf("Element %d found at index %d\\n", key, index);
    else
        printf("Element not found\\n");
    return 0;
}`,q=`#include <stdio.h>

int main() {
    int n, arr[100], sorted = 1;
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    for(int i = 0; i < n-1; i++) {
        if(arr[i] > arr[i+1]) {
            sorted = 0;
            break;
        }
    }
    if(sorted) printf("Array is sorted.\\n");
    else printf("Array is not sorted.\\n");
    return 0;
}`,N=`#include <stdio.h>

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    int maxFromRight = arr[n-1];
    printf("Leaders: %d ", maxFromRight);
    for(int i = n-2; i >= 0; i--) {
        if(arr[i] > maxFromRight) {
            maxFromRight = arr[i];
            printf("%d ", arr[i]);
        }
    }
    printf("\\n");
    return 0;
}`,L=`#include <stdio.h>

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    int maxSoFar = arr[0], maxEndingHere = arr[0];
    for(int i = 1; i < n; i++) {
        maxEndingHere = (arr[i] > maxEndingHere + arr[i]) ? arr[i] : maxEndingHere + arr[i];
        maxSoFar = (maxSoFar > maxEndingHere) ? maxSoFar : maxEndingHere;
    }
    printf("Maximum subarray sum = %d\\n", maxSoFar);
    return 0;
}`,K=`#include <stdio.h>

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    int total = 0, leftSum = 0;
    for(int i = 0; i < n; i++) total += arr[i];
    int found = -1;
    for(int i = 0; i < n; i++) {
        total -= arr[i];
        if(leftSum == total) {
            found = i;
            break;
        }
        leftSum += arr[i];
    }
    if(found != -1)
        printf("Equilibrium index found at %d\\n", found);
    else
        printf("No equilibrium index\\n");
    return 0;
}`,H=`#include <stdio.h>

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    for(int i = 0; i < n-1; i += 2) {
        int temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    printf("Wave array: ");
    for(int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,W=`#include <stdio.h>

void rotateRight(int arr[], int from, int to) {
    int temp = arr[to];
    for(int i = to; i > from; i--)
        arr[i] = arr[i-1];
    arr[from] = temp;
}

int main() {
    int n, arr[100];
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for(int i = 0; i < n; i++) scanf("%d", &arr[i]);
    int outOfPlace = -1;
    for(int i = 0; i < n; i++) {
        if(outOfPlace == -1) {
            if((i % 2 == 0 && arr[i] < 0) || (i % 2 == 1 && arr[i] > 0))
                outOfPlace = i;
        } else {
            if((arr[outOfPlace] < 0 && arr[i] > 0) || (arr[outOfPlace] > 0 && arr[i] < 0)) {
                rotateRight(arr, outOfPlace, i);
                if(i - outOfPlace >= 2) outOfPlace += 2;
                else outOfPlace = -1;
            }
        }
    }
    printf("Rearranged: ");
    for(int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,G=`#include <stdio.h>

int main() {
    int a[10][10], b[10][10], sum[10][10], r, c;
    printf("Enter rows and cols: ");
    scanf("%d %d", &r, &c);
    printf("Matrix A:\\n");
    for(int i = 0; i < r; i++)
        for(int j = 0; j < c; j++)
            scanf("%d", &a[i][j]);
    printf("Matrix B:\\n");
    for(int i = 0; i < r; i++)
        for(int j = 0; j < c; j++)
            scanf("%d", &b[i][j]);
    for(int i = 0; i < r; i++)
        for(int j = 0; j < c; j++)
            sum[i][j] = a[i][j] + b[i][j];
    printf("Sum:\\n");
    for(int i = 0; i < r; i++) {
        for(int j = 0; j < c; j++)
            printf("%d ", sum[i][j]);
        printf("\\n");
    }
    return 0;
}`,U=`#include <stdio.h>

int main() {
    int a[10][10], b[10][10], mul[10][10] = {0};
    int r1, c1, r2, c2;
    printf("Enter rows and cols of A: ");
    scanf("%d %d", &r1, &c1);
    printf("Enter A:\\n");
    for(int i = 0; i < r1; i++)
        for(int j = 0; j < c1; j++)
            scanf("%d", &a[i][j]);
    printf("Enter rows and cols of B: ");
    scanf("%d %d", &r2, &c2);
    if(c1 != r2) {
        printf("Multiplication not possible.\\n");
        return 0;
    }
    printf("Enter B:\\n");
    for(int i = 0; i < r2; i++)
        for(int j = 0; j < c2; j++)
            scanf("%d", &b[i][j]);
    for(int i = 0; i < r1; i++) {
        for(int j = 0; j < c2; j++) {
            for(int k = 0; k < c1; k++) {
                mul[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    printf("Product:\\n");
    for(int i = 0; i < r1; i++) {
        for(int j = 0; j < c2; j++)
            printf("%d ", mul[i][j]);
        printf("\\n");
    }
    return 0;
}`,V=`#include <stdio.h>

int main() {
    int a[10][10], trans[10][10], r, c;
    printf("Enter rows and cols: ");
    scanf("%d %d", &r, &c);
    printf("Enter matrix:\\n");
    for(int i = 0; i < r; i++)
        for(int j = 0; j < c; j++)
            scanf("%d", &a[i][j]);
    for(int i = 0; i < r; i++)
        for(int j = 0; j < c; j++)
            trans[j][i] = a[i][j];
    printf("Transpose:\\n");
    for(int i = 0; i < c; i++) {
        for(int j = 0; j < r; j++)
            printf("%d ", trans[i][j]);
        printf("\\n");
    }
    return 0;
}`,X=`#include <stdio.h>

int main() {
    int a[10][10], n, sym = 1;
    printf("Enter order of matrix: ");
    scanf("%d", &n);
    printf("Enter matrix:\\n");
    for(int i = 0; i < n; i++)
        for(int j = 0; j < n; j++)
            scanf("%d", &a[i][j]);
    for(int i = 0; i < n && sym; i++) {
        for(int j = 0; j < n; j++) {
            if(a[i][j] != a[j][i]) {
                sym = 0;
                break;
            }
        }
    }
    if(sym) printf("Matrix is symmetric.\\n");
    else printf("Matrix is not symmetric.\\n");
    return 0;
}`,_=`#include <stdio.h>

int main() {
    int a[10][10], r, c;
    printf("Enter rows and cols: ");
    scanf("%d %d", &r, &c);
    printf("Enter matrix:\\n");
    for(int i = 0; i < r; i++)
        for(int j = 0; j < c; j++)
            scanf("%d", &a[i][j]);
    printf("Row sums: ");
    for(int i = 0; i < r; i++) {
        int sum = 0;
        for(int j = 0; j < c; j++)
            sum += a[i][j];
        printf("Row%d=%d ", i, sum);
    }
    printf("\\n");
    return 0;
}`,J=`#include <stdio.h>

int main() {
    int a[10][10], r, c;
    printf("Enter rows and cols: ");
    scanf("%d %d", &r, &c);
    printf("Enter matrix:\\n");
    for(int i = 0; i < r; i++)
        for(int j = 0; j < c; j++)
            scanf("%d", &a[i][j]);
    printf("Column sums: ");
    for(int j = 0; j < c; j++) {
        int sum = 0;
        for(int i = 0; i < r; i++)
            sum += a[i][j];
        printf("Col%d=%d ", j, sum);
    }
    printf("\\n");
    return 0;
}`,Z=`#include <stdio.h>

int main() {
    int a[10][10], n, sum = 0;
    printf("Enter order: ");
    scanf("%d", &n);
    printf("Enter matrix:\\n");
    for(int i = 0; i < n; i++)
        for(int j = 0; j < n; j++)
            scanf("%d", &a[i][j]);
    for(int i = 0; i < n; i++)
        sum += a[i][i];
    printf("Primary diagonal sum = %d\\n", sum);
    return 0;
}`,Q=`#include <stdio.h>

int main() {
    int a[10][10], n, sum = 0;
    printf("Enter order: ");
    scanf("%d", &n);
    printf("Enter matrix:\\n");
    for(int i = 0; i < n; i++)
        for(int j = 0; j < n; j++)
            scanf("%d", &a[i][j]);
    for(int i = 0; i < n; i++)
        sum += a[i][n-1-i];
    printf("Secondary diagonal sum = %d\\n", sum);
    return 0;
}`,Y=`#include <stdio.h>

int main() {
    int a[10][10], r, c, zero = 0;
    printf("Enter rows and cols: ");
    scanf("%d %d", &r, &c);
    printf("Enter matrix:\\n");
    for(int i = 0; i < r; i++)
        for(int j = 0; j < c; j++) {
            scanf("%d", &a[i][j]);
            if(a[i][j] == 0) zero++;
        }
    if(zero > (r*c)/2)
        printf("Matrix is sparse.\\n");
    else
        printf("Matrix is not sparse.\\n");
    return 0;
}`,$=`#include <stdio.h>

int main() {
    int a[10][10], n, upper = 1;
    printf("Enter order: ");
    scanf("%d", &n);
    printf("Enter matrix:\\n");
    for(int i = 0; i < n; i++)
        for(int j = 0; j < n; j++)
            scanf("%d", &a[i][j]);
    for(int i = 1; i < n && upper; i++) {
        for(int j = 0; j < i; j++) {
            if(a[i][j] != 0) {
                upper = 0;
                break;
            }
        }
    }
    if(upper) printf("Matrix is upper triangular.\\n");
    else printf("Matrix is not upper triangular.\\n");
    return 0;
}`,nn=`#include <stdio.h>

int main() {
    int a[10][10], n, lower = 1;
    printf("Enter order: ");
    scanf("%d", &n);
    printf("Enter matrix:\\n");
    for(int i = 0; i < n; i++)
        for(int j = 0; j < n; j++)
            scanf("%d", &a[i][j]);
    for(int i = 0; i < n && lower; i++) {
        for(int j = i+1; j < n; j++) {
            if(a[i][j] != 0) {
                lower = 0;
                break;
            }
        }
    }
    if(lower) printf("Matrix is lower triangular.\\n");
    else printf("Matrix is not lower triangular.\\n");
    return 0;
}`,rn=`#include <stdio.h>

int main() {
    int a[10][10], n;
    printf("Enter order: ");
    scanf("%d", &n);
    printf("Enter matrix:\\n");
    for(int i = 0; i < n; i++)
        for(int j = 0; j < n; j++)
            scanf("%d", &a[i][j]);
    // transpose
    for(int i = 0; i < n; i++) {
        for(int j = i+1; j < n; j++) {
            int temp = a[i][j];
            a[i][j] = a[j][i];
            a[j][i] = temp;
        }
    }
    // reverse each row
    for(int i = 0; i < n; i++) {
        for(int j = 0, k = n-1; j < k; j++, k--) {
            int temp = a[i][j];
            a[i][j] = a[i][k];
            a[i][k] = temp;
        }
    }
    printf("Rotated matrix:\\n");
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++)
            printf("%d ", a[i][j]);
        printf("\\n");
    }
    return 0;
}`,tn=`#include <stdio.h>

int main() {
    int a[10][10], n;
    printf("Enter order: ");
    scanf("%d", &n);
    printf("Enter matrix:\\n");
    for(int i = 0; i < n; i++)
        for(int j = 0; j < n; j++)
            scanf("%d", &a[i][j]);
    // transpose
    for(int i = 0; i < n; i++) {
        for(int j = i+1; j < n; j++) {
            int temp = a[i][j];
            a[i][j] = a[j][i];
            a[j][i] = temp;
        }
    }
    // reverse each column
    for(int j = 0; j < n; j++) {
        for(int i = 0, k = n-1; i < k; i++, k--) {
            int temp = a[i][j];
            a[i][j] = a[k][j];
            a[k][j] = temp;
        }
    }
    printf("Rotated matrix:\\n");
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++)
            printf("%d ", a[i][j]);
        printf("\\n");
    }
    return 0;
}`,en=`#include <stdio.h>

int main() {
    int a[2][2];
    printf("Enter 2x2 matrix:\\n");
    for(int i = 0; i < 2; i++)
        for(int j = 0; j < 2; j++)
            scanf("%d", &a[i][j]);
    int det = a[0][0]*a[1][1] - a[0][1]*a[1][0];
    printf("Determinant = %d\\n", det);
    return 0;
}`,an=`#include <stdio.h>

int main() {
    int a[3][3];
    printf("Enter 3x3 matrix:\\n");
    for(int i = 0; i < 3; i++)
        for(int j = 0; j < 3; j++)
            scanf("%d", &a[i][j]);
    int det = a[0][0]*(a[1][1]*a[2][2] - a[1][2]*a[2][1])
            - a[0][1]*(a[1][0]*a[2][2] - a[1][2]*a[2][0])
            + a[0][2]*(a[1][0]*a[2][1] - a[1][1]*a[2][0]);
    printf("Determinant = %d\\n", det);
    return 0;
}`,on=`#include <stdio.h>

int main() {
    int a[10][10], n;
    printf("Enter order: ");
    scanf("%d", &n);
    printf("Enter matrix:\\n");
    for(int i = 0; i < n; i++)
        for(int j = 0; j < n; j++)
            scanf("%d", &a[i][j]);
    int sumD1 = 0, sumD2 = 0;
    for(int i = 0; i < n; i++) {
        sumD1 += a[i][i];
        sumD2 += a[i][n-1-i];
    }
    if(sumD1 != sumD2) {
        printf("Not a magic square\\n");
        return 0;
    }
    int magic = sumD1;
    for(int i = 0; i < n; i++) {
        int rowSum = 0, colSum = 0;
        for(int j = 0; j < n; j++) {
            rowSum += a[i][j];
            colSum += a[j][i];
        }
        if(rowSum != magic || colSum != magic) {
            printf("Not a magic square\\n");
            return 0;
        }
    }
    printf("Matrix is a magic square (sum=%d).\\n", magic);
    return 0;
}`,sn=`#include <stdio.h>

int main() {
    int a[10][10], r, c;
    printf("Enter rows and cols: ");
    scanf("%d %d", &r, &c);
    printf("Enter matrix:\\n");
    for(int i = 0; i < r; i++)
        for(int j = 0; j < c; j++)
            scanf("%d", &a[i][j]);
    int top = 0, bottom = r-1, left = 0, right = c-1;
    printf("Spiral order: ");
    while(top <= bottom && left <= right) {
        for(int i = left; i <= right; i++) printf("%d ", a[top][i]);
        top++;
        for(int i = top; i <= bottom; i++) printf("%d ", a[i][right]);
        right--;
        if(top <= bottom) {
            for(int i = right; i >= left; i--) printf("%d ", a[bottom][i]);
            bottom--;
        }
        if(left <= right) {
            for(int i = bottom; i >= top; i--) printf("%d ", a[i][left]);
            left++;
        }
    }
    printf("\\n");
    return 0;
}`,fn=`#include <stdio.h>

int main() {
    int a[10][10], r, c;
    printf("Enter rows and cols: ");
    scanf("%d %d", &r, &c);
    printf("Enter binary matrix row-wise:\\n");
    for(int i = 0; i < r; i++)
        for(int j = 0; j < c; j++)
            scanf("%d", &a[i][j]);
    int maxRow = -1, maxCount = -1;
    for(int i = 0; i < r; i++) {
        int count = 0;
        for(int j = 0; j < c; j++) {
            if(a[i][j] == 1) count++;
        }
        if(count > maxCount) {
            maxCount = count;
            maxRow = i;
        }
    }
    printf("Row %d has maximum 1's (%d).\\n", maxRow, maxCount);
    return 0;
}`,dn=`#include <stdio.h>

int main() {
    int a[10][10], r, c;
    printf("Enter rows and cols: ");
    scanf("%d %d", &r, &c);
    printf("Enter matrix:\\n");
    for(int i = 0; i < r; i++)
        for(int j = 0; j < c; j++)
            scanf("%d", &a[i][j]);
    printf("Boundary elements: ");
    for(int i = 0; i < c; i++) printf("%d ", a[0][i]);
    for(int i = 1; i < r; i++) printf("%d ", a[i][c-1]);
    if(r > 1) for(int i = c-2; i >= 0; i--) printf("%d ", a[r-1][i]);
    if(c > 1) for(int i = r-2; i > 0; i--) printf("%d ", a[i][0]);
    printf("\\n");
    return 0;
}`,ln=`#include <stdio.h>

int main() {
    int a[10][10], r, c;
    printf("Enter rows and cols: ");
    scanf("%d %d", &r, &c);
    printf("Enter matrix:\\n");
    for(int i = 0; i < r; i++)
        for(int j = 0; j < c; j++)
            scanf("%d", &a[i][j]);
    int found = 0;
    for(int i = 0; i < r && !found; i++) {
        for(int j = 0; j < c; j++) {
            int val = a[i][j];
            int left = (j>0) ? a[i][j-1] : -1;
            int right = (j<c-1) ? a[i][j+1] : -1;
            int up = (i>0) ? a[i-1][j] : -1;
            int down = (i<r-1) ? a[i+1][j] : -1;
            if(val >= left && val >= right && val >= up && val >= down) {
                printf("Peak element found: %d at (%d,%d)\\n", val, i, j);
                found = 1;
                break;
            }
        }
    }
    if(!found) printf("No peak element found.\\n");
    return 0;
}`,cn={A001:u,A002:x,A003:j,A004:g,A005:E,A006:A,A007:w,A008:y,A009:h,A010:O,A011:v,A012:I,A013:M,A014:S,A015:b,A016:k,A017:F,A018:z,A019:T,A020:R,A021:C,A022:B,A023:P,A024:D,A025:q,A026:N,A027:L,A028:K,A029:H,A030:W,A031:G,A032:U,A033:V,A034:X,A035:_,A036:J,A037:Z,A038:Q,A039:Y,A040:$,A041:nn,A042:rn,A043:tn,A044:en,A045:an,A046:on,A047:sn,A048:fn,A049:dn,A050:ln};function An(){const[n,a]=r.useState(null);return r.useEffect(()=>{const o=e.projects.map(i=>({...i,answer:cn[i.projectId]}));a({...e,projects:o})},[]),n?t.jsx(s,{data:n}):t.jsx("div",{children:"Loading..."})}export{An as default};
