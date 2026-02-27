import{r as o,j as a}from"./index-meFSU1Lv.js";import{C as d}from"./COutputPracticeTemplateWithFiles-NsiKBV4G.js";import"./CodeBlock-CjWqBd4d.js";import"./prism-sFrOkMqg.js";import"./prism-json-D0UlpdKh.js";const l=`#include <stdio.h>\r
int main() {\r
    int arr[] = {5, 2, 8, 1};\r
    printf("%d", arr[0]);\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
int main() {\r
    int arr[] = {3, 7, 2, 9};\r
    printf("%d", arr[3]);\r
    return 0;\r
}\r
`,p=`#include <stdio.h>\r
int main() {\r
    int arr[] = {2, 4, 6, 8};\r
    int sum = 0;\r
    for (int i = 0; i < 4; i++) \r
        sum += arr[i];\r
    printf("%d", sum);\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
int main() {\r
    int arr[] = {2, 4, 6, 8};\r
    int sum = 0;\r
    for (int i = 0; i < 4; i++) \r
        sum += arr[i];\r
    printf("%d", sum / 4);\r
    return 0;\r
}\r
`,m=`#include <stdio.h>\r
int main() {\r
    int arr[] = {2, 4, 6, 8};\r
    int max = arr[0];\r
    for (int i = 1; i < 4; i++) \r
        if (arr[i] > max) \r
            max = arr[i];\r
    printf("%d", max);\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
int main() {\r
    int arr[] = {2, 4, 6, 8};\r
    int min = arr[0];\r
    for (int i = 1; i < 4; i++) \r
        if (arr[i] < min) \r
            min = arr[i];\r
    printf("%d", min);\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
int main() {\r
    int arr[] = {2, 4, 6, 8};\r
    for (int i = 3; i >= 0; i--) \r
        printf("%d ", arr[i]);\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
int main() {\r
    int arr[] = {1, 2, 3, 4, 5};\r
    int count = 0;\r
    for (int i = 0; i < 5; i++) \r
        if (arr[i] % 2 == 0) \r
            count++;\r
    printf("%d", count);\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
int main() {\r
    int arr[] = {1, 2, 3, 4, 5};\r
    int count = 0;\r
    for (int i = 0; i < 5; i++) \r
        if (arr[i] % 2 != 0) \r
            count++;\r
    printf("%d", count);\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
int main() {\r
    int arr[] = {2, 4, 6, 8};\r
    for (int i = 0; i < 4; i += 2) \r
        printf("%d ", arr[i]);\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
int main() {\r
    int arr[] = {2, 4, 6, 8};\r
    for (int i = 1; i < 4; i += 2) \r
        printf("%d ", arr[i]);\r
    return 0;\r
}\r
`,j=`#include <stdio.h>\r
int main() {\r
    int arr[] = {2, 4, 6, 8};\r
    int key = 6, index = -1;\r
    for (int i = 0; i < 4; i++) \r
        if (arr[i] == key) index = i;\r
    printf("%d", index);\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
int main() {\r
    int src[] = {2, 4, 6, 8};\r
    int dest[4];\r
    for (int i = 0; i < 4; i++) \r
        dest[i] = src[i];\r
    for (int i = 0; i < 4; i++) \r
        printf("%d ", dest[i]);\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
int main() {\r
    int a[] = {2, 4, 6, 8};\r
    int b[] = {3, 5, 7, 9};\r
    int c[8];\r
    for (int i = 0; i < 4; i++) \r
        c[i] = a[i];\r
    for (int i = 0; i < 4; i++) \r
        c[i+4] = b[i];\r
    for (int i = 0; i < 8; i++) \r
        printf("%d ", c[i]);\r
    return 0;\r
}\r
`,q=`#include <stdio.h>\r
int main() {\r
    int arr[] = {2, 4, 6, 8};\r
    int temp = arr[0];\r
    for (int i = 0; i < 3; i++) \r
        arr[i] = arr[i+1];\r
    arr[3] = temp;\r
    for (int i = 0; i < 4; i++) \r
        printf("%d ", arr[i]);\r
    return 0;\r
}\r
`,M=`#include <stdio.h>\r
int main() {\r
    int arr[] = {2, 4, 6, 8};\r
    int temp = arr[3];\r
    for (int i = 3; i > 0; i--) \r
        arr[i] = arr[i-1];\r
    arr[0] = temp;\r
    for (int i = 0; i < 4; i++) \r
        printf("%d ", arr[i]);\r
    return 0;\r
}\r
`,F=`#include <stdio.h>\r
int main() {\r
    int arr[] = {5, 4, 3, 2, 1};\r
    int n = 5, temp;\r
    for (int i = 0; i < n-1; i++)\r
        for (int j = 0; j < n-i-1; j++)\r
            if (arr[j] > arr[j+1]) {\r
                temp = arr[j];\r
                arr[j] = arr[j+1];\r
                arr[j+1] = temp;\r
            }\r
    for (int i = 0; i < n; i++) \r
        printf("%d ", arr[i]);\r
    return 0;\r
}\r
`,W=`#include <stdio.h>\r
int main() {\r
    int arr[] = {8, 6, 4, 2};\r
    int first = arr[0], second = arr[1];\r
    if (second > first) \r
    { \r
        int t = first; first = second; second = t; \r
    }\r
    for (int i = 2; i < 4; i++) {\r
        if (arr[i] > first) \r
        { \r
            second = first; first = arr[i]; \r
        }\r
        else if (arr[i] > second) \r
            second = arr[i];\r
    }\r
    printf("%d", second);\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
int main() {\r
    int arr[] = {8, 6, 4, 2};\r
    int first = arr[0], second = arr[1];\r
    if (second < first) \r
    { \r
        int t = first; first = second; second = t; \r
    }\r
    for (int i = 2; i < 4; i++) {\r
        if (arr[i] < first)\r
        { \r
            second = first; first = arr[i]; \r
        }\r
        else if (arr[i] < second) \r
            second = arr[i];\r
    }\r
    printf("%d", second);\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
int main() {\r
    int arr[] = {2, 4, 6, 8};\r
    int temp[4], k = 0;\r
    for (int i = 0; i < 4; i++) {\r
        int dup = 0;\r
        for (int j = 0; j < k; j++) \r
        if (temp[j] == arr[i]) \r
            dup = 1;\r
        if (!dup) \r
            temp[k++] = arr[i];\r
    }\r
    for (int i = 0; i < k; i++) printf("%d ", temp[i]);\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
int main() {\r
    int arr[] = {2, 3, 2, 4};\r
    int freq[10] = {0};\r
    for (int i = 0; i < 4; i++) \r
        freq[arr[i]]++;\r
    for (int i = 0; i < 10; i++)\r
        if (freq[i] > 0) printf("%d appears %d time(s)\\n", i, freq[i]);\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
int main() {\r
    int arr[] = {1, 2, 3, 2, 1};\r
    int n = 5, palindrome = 1;\r
    for (int i = 0; i < n/2; i++)\r
        if (arr[i] != arr[n-1-i]) { palindrome = 0; break; }\r
    printf(palindrome ? "Palindrome" : "Not Palindrome");\r
    return 0;\r
}\r
`,H=`#include <stdio.h>\r
int main() {\r
    int arr[] = {2, 7, 4, 5};\r
    int target = 9;\r
    for (int i = 0; i < 4; i++)\r
        for (int j = i+1; j < 4; j++)\r
            if (arr[i] + arr[j] == target)\r
                printf("%d", arr[i]);\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
int main() {\r
    int arr[] = {4, -2, 3, -1, 2};\r
    int max_so_far = arr[0], curr_max = arr[0];\r
    for (int i = 1; i < 5; i++) {\r
        curr_max = (arr[i] > curr_max + arr[i]) ? arr[i] : curr_max + arr[i];\r
        max_so_far = (curr_max > max_so_far) ? curr_max : max_so_far;\r
    }\r
    printf("%d", max_so_far);\r
    return 0;\r
}\r
`,z=`#include <stdio.h>\r
int main() {\r
    int mat[2][2] = {{1, 2}, {3, 4}};\r
    int sum = 0;\r
    for (int i = 0; i < 2; i++)\r
        for (int j = 0; j < 2; j++)\r
            sum += mat[i][j];\r
    printf("%d", sum);\r
    return 0;\r
}\r
`,D=`#include <stdio.h>\r
int main() {\r
    int a[2][2] = {{1, 2}, {3, 4}};\r
    int b[2][2] = {{5, 6}, {7, 8}};\r
    int c[2][2] = {0};\r
    for (int i = 0; i < 2; i++)\r
        for (int j = 0; j < 2; j++)\r
            for (int k = 0; k < 2; k++)\r
                c[i][j] += a[i][k] * b[k][j];\r
    for (int i = 0; i < 2; i++) {\r
        for (int j = 0; j < 2; j++)\r
            printf("%d ", c[i][j]);\r
        printf("\\n");\r
    }\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
int main() {\r
    int mat[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\r
    int trans[3][3];\r
    for (int i = 0; i < 3; i++)\r
        for (int j = 0; j < 3; j++)\r
            trans[j][i] = mat[i][j];\r
    for (int i = 0; i < 3; i++) {\r
        for (int j = 0; j < 3; j++)\r
            printf("%d ", trans[i][j]);\r
        printf("\\n");\r
    }\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
int main() {\r
    int mat[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\r
    int sum = 0;\r
    for (int i = 0; i < 3; i++) \r
        sum += mat[i][i];\r
    printf("%d", sum);\r
    return 0;\r
}\r
`,L=`#include <stdio.h>\r
int main() {\r
    int mat[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\r
    for (int i = 0; i < 3; i++) {\r
        int row_sum = 0;\r
        for (int j = 0; j < 3; j++) \r
            row_sum += mat[i][j];\r
        printf("%d ", row_sum);\r
    }\r
    return 0;\r
}\r
`,B=`#include <stdio.h>\r
int main() {\r
    int mat[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\r
    for (int j = 0; j < 3; j++) {\r
        int col_sum = 0;\r
        for (int i = 0; i < 3; i++) \r
            col_sum += mat[i][j];\r
        printf("%d ", col_sum);\r
    }\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
int main() {\r
    char *words[] = {"Hello", "World", "C", "Programming"};\r
    printf("%s %s", words[0], words[1]);\r
    return 0;\r
}\r
`,Q=`#include <stdio.h>\r
int main() {\r
    int arr[5] = {5, 4, 3, 2, 1};\r
    int (*ptr)[5] = &arr;\r
    printf("%d", (*ptr)[0]);\r
    return 0;\r
}\r
`,R=`#include <stdio.h>\r
int sumArray(int arr[], int n) {\r
    int s = 0;\r
    for (int i = 0; i < n; i++) \r
        s += arr[i];\r
    return s;\r
}\r
int main() {\r
    int arr[] = {1, 2, 3, 4, 5};\r
    printf("%d", sumArray(arr, 5));\r
    return 0;\r
}\r
`,$=`#include <stdio.h>\r
int* getArray() {\r
    static int arr[] = {2, 4, 6, 8};\r
    return arr;\r
}\r
int main() {\r
    int *p = getArray();\r
    for (int i = 0; i < 4; i++) \r
        printf("%d ", p[i]);\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
#include <stdlib.h>\r
int main() {\r
    int *arr = (int*)malloc(5 * sizeof(int));\r
    for (int i = 0; i < 5; i++) \r
        arr[i] = i+1;\r
    for (int i = 0; i < 5; i++) \r
        printf("%d ", arr[i]);\r
    free(arr);\r
    return 0;\r
}\r
`,J=`#include <stdio.h>\r
int main() {\r
    int mat[2][3] = {{1, 2, 3}, {4, 5, 6}};\r
    for (int i = 0; i < 2; i++) {\r
        for (int j = 0; j < 3; j++)\r
            printf("%d ", mat[i][j]);\r
        printf("\\n");\r
    }\r
    return 0;\r
}\r
`,U=`#include <stdio.h>\r
int main() {\r
    int *jagged[3];\r
    int row1[] = {1, 2};\r
    int row2[] = {3, 4, 5};\r
    int row3[] = {6};\r
    jagged[0] = row1;\r
    jagged[1] = row2;\r
    jagged[2] = row3;\r
    int sizes[] = {2, 3, 1};\r
    for (int i = 0; i < 3; i++) {\r
        for (int j = 0; j < sizes[i]; j++)\r
            printf("%d ", jagged[i][j]);\r
        printf("\\n");\r
    }\r
    return 0;\r
}\r
`,G=`#include <stdio.h>\r
struct Person {\r
    char name[20];\r
    int age;\r
};\r
int main() {\r
    struct Person people[2] = {{"Alice", 25}, {"Bob", 30}};\r
    for (int i = 0; i < 2; i++)\r
        printf("%s %d\\n", people[i].name, people[i].age);\r
    return 0;\r
}\r
`,K=`#include <stdio.h>\r
struct Student {\r
    char name[20];\r
    int marks[3];\r
};\r
int main() {\r
    struct Student s = {"John", {90, 85, 92}};\r
    for (int i = 0; i < 3; i++)\r
        printf("%d ", s.marks[i]);\r
    return 0;\r
}\r
`,V=`#include <stdio.h>\r
void printArray(int arr[], int n) {\r
    for (int i = 0; i < n; i++) \r
        printf("%d ", arr[i]);\r
}\r
int main() {\r
    int arr[] = {10, 20, 30};\r
    printArray(arr, 3);\r
    return 0;\r
}\r
`,X=`#include <stdio.h>\r
void printMatrix(int mat[][3], int rows) {\r
    for (int i = 0; i < rows; i++) {\r
        for (int j = 0; j < 3; j++)\r
            printf("%d ", mat[i][j]);\r
        printf("\\n");\r
    }\r
}\r
int main() {\r
    int mat[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\r
    printMatrix(mat, 3);\r
    return 0;\r
}\r
`,Y=`#include <stdio.h>\r
int main() {\r
    int arr[3] = {1, 2, 3};\r
    printf("%d", arr[5]);  // out-of-bounds access\r
    return 0;\r
}\r
`,Z=`#include <stdio.h>\r
int main() {\r
    int arr[10];\r
    printf("%lu", sizeof(arr));\r
    return 0;\r
}\r
`,nn=`#include <stdio.h>\r
int add(int a, int b) { return a + b; }\r
int sub(int a, int b) { return a - b; }\r
int main() {\r
    int (*ops[2])(int, int) = {add, sub};\r
    printf("%d", ops[0](10, 5));\r
    return 0;\r
}\r
`,rn=`#include <stdio.h>\r
int main() {\r
    char str[] = "Hello";\r
    printf("%s", str);\r
    return 0;\r
}\r
`,tn=`#include <stdio.h>\r
#include <string.h>\r
int main() {\r
    char str1[20] = "Hello";\r
    char str2[] = "World";\r
    strcat(str1, str2);\r
    printf("%s", str1);\r
    return 0;\r
}\r
`,en=`#include <stdio.h>\r
#include <string.h>\r
int main() {\r
    char str[20] = "Hello";\r
    strcpy(str, "Hello");\r
    strcat(str, "Hello");\r
    printf("%s", str);\r
    return 0;\r
}\r
`,on=`#include <stdio.h>\r
#include <string.h>\r
int main() {\r
    char str[] = "Hello";\r
    printf("%lu", strlen(str));\r
    return 0;\r
}\r
`,an=`#include <stdio.h>\r
#include <string.h>\r
int main() {\r
    char str1[] = "Hello";\r
    char str2[] = "Hello";\r
    if (strcmp(str1, str2) == 0)\r
        printf("Strings are equal");\r
    else\r
        printf("Strings are not equal");\r
    return 0;\r
}\r
`,sn=`#include <stdio.h>\r
#include <string.h>\r
int main() {\r
    char str[] = "madam";\r
    int len = strlen(str), palindrome = 1;\r
    for (int i = 0; i < len/2; i++)\r
        if (str[i] != str[len-1-i]) \r
        { \r
            palindrome = 0; break; \r
        }\r
    printf(palindrome ? "Palindrome" : "Not Palindrome");\r
    return 0;\r
}\r
`,un={path:"/images/c-logo.svg",alt:"C Programming Language"},cn="C Array Output Questions – Moderate",dn="Computer Science",ln="CBSE",fn=[{id:"C001",difficulty:"Moderate",question:"What is the output?",codeFile:"C001.c",output:"5",explanation:"The first element of the array is 5."},{id:"C002",difficulty:"Moderate",question:"What is the output?",codeFile:"C002.c",output:"9",explanation:"The last element of the array is 9."},{id:"C003",difficulty:"Moderate",question:"What is the output?",codeFile:"C003.c",output:"20",explanation:"Sum of elements {2,4,6,8} = 20."},{id:"C004",difficulty:"Moderate",question:"What is the output?",codeFile:"C004.c",output:"5",explanation:"Average of {2,4,6,8} = 20/4 = 5."},{id:"C005",difficulty:"Moderate",question:"What is the output?",codeFile:"C005.c",output:"8",explanation:"Maximum element in {2,4,6,8} is 8."},{id:"C006",difficulty:"Moderate",question:"What is the output?",codeFile:"C006.c",output:"2",explanation:"Minimum element in {2,4,6,8} is 2."},{id:"C007",difficulty:"Moderate",question:"What is the output?",codeFile:"C007.c",output:"8 6 4 2",explanation:"Array printed in reverse order."},{id:"C008",difficulty:"Moderate",question:"What is the output?",codeFile:"C008.c",output:"2",explanation:"Count of even numbers in {1,2,3,4,5} is 2."},{id:"C009",difficulty:"Moderate",question:"What is the output?",codeFile:"C009.c",output:"3",explanation:"Count of odd numbers in {1,2,3,4,5} is 3."},{id:"C010",difficulty:"Moderate",question:"What is the output?",codeFile:"C010.c",output:"2 6",explanation:"Elements at even indices (0,2) of {2,4,6,8} are 2 and 6."},{id:"C011",difficulty:"Moderate",question:"What is the output?",codeFile:"C011.c",output:"4 8",explanation:"Elements at odd indices (1,3) of {2,4,6,8} are 4 and 8."},{id:"C012",difficulty:"Moderate",question:"What is the output?",codeFile:"C012.c",output:"2",explanation:"Index of value 6 in array {2,4,6,8} is 2."},{id:"C013",difficulty:"Moderate",question:"What is the output?",codeFile:"C013.c",output:"2 4 6 8",explanation:"Copied array elements printed."},{id:"C014",difficulty:"Moderate",question:"What is the output?",codeFile:"C014.c",output:"2 4 6 8 3 5 7 9",explanation:"Merged array of {2,4,6,8} and {3,5,7,9}."},{id:"C015",difficulty:"Moderate",question:"What is the output?",codeFile:"C015.c",output:"4 6 8 2",explanation:"Array left rotated by one: {2,4,6,8} -> {4,6,8,2}."},{id:"C016",difficulty:"Moderate",question:"What is the output?",codeFile:"C016.c",output:"8 2 4 6",explanation:"Array right rotated by one: {2,4,6,8} -> {8,2,4,6}."},{id:"C017",difficulty:"Moderate",question:"What is the output?",codeFile:"C017.c",output:"1 2 3 4 5",explanation:"Array sorted in ascending order (bubble sort of {5,4,3,2,1})."},{id:"C018",difficulty:"Moderate",question:"What is the output?",codeFile:"C018.c",output:"6",explanation:"Second largest in {8,6,4,2} is 6."},{id:"C019",difficulty:"Moderate",question:"What is the output?",codeFile:"C019.c",output:"4",explanation:"Second smallest in {8,6,4,2} is 4."},{id:"C020",difficulty:"Moderate",question:"What is the output?",codeFile:"C020.c",output:"2 4 6 8",explanation:"After removing duplicates (no duplicates in {2,4,6,8})."},{id:"C021",difficulty:"Moderate",question:"What is the output?",codeFile:"C021.c",output:`2 appears 2 times
3 appears 1 time
4 appears 1 time`,explanation:"Frequency of each element in {2,3,2,4}."},{id:"C022",difficulty:"Moderate",question:"What is the output?",codeFile:"C022.c",output:"Palindrome",explanation:"Array {1,2,3,2,1} is a palindrome."},{id:"C023",difficulty:"Moderate",question:"What is the output?",codeFile:"C023.c",output:"2",explanation:"First element of the pair with sum 9 in {2,7,4,5}."},{id:"C024",difficulty:"Moderate",question:"What is the output?",codeFile:"C024.c",output:"6",explanation:"Maximum subarray sum of {4, -2, 3, -1, 2} is 6."},{id:"C025",difficulty:"Moderate",question:"What is the output?",codeFile:"C025.c",output:"10",explanation:"Sum of all elements in 2x2 matrix {{1,2},{3,4}} = 10."},{id:"C026",difficulty:"Moderate",question:"What is the output?",codeFile:"C026.c",output:`19 22
43 50`,explanation:"Product of two 2x2 matrices."},{id:"C027",difficulty:"Moderate",question:"What is the output?",codeFile:"C027.c",output:`1 4 7
2 5 8
3 6 9`,explanation:"Transpose of a 3x3 matrix."},{id:"C028",difficulty:"Moderate",question:"What is the output?",codeFile:"C028.c",output:"15",explanation:"Sum of diagonal elements of a 3x3 matrix (1+5+9=15)."},{id:"C029",difficulty:"Moderate",question:"What is the output?",codeFile:"C029.c",output:"6 15 24",explanation:"Row-wise sums of a 3x3 matrix."},{id:"C030",difficulty:"Moderate",question:"What is the output?",codeFile:"C030.c",output:"12 15 18",explanation:"Column-wise sums of a 3x3 matrix."},{id:"C031",difficulty:"Moderate",question:"What is the output?",codeFile:"C031.c",output:"Hello World",explanation:"Array of pointers to strings: prints the first two strings."},{id:"C032",difficulty:"Moderate",question:"What is the output?",codeFile:"C032.c",output:"5",explanation:"Pointer to array: first element."},{id:"C033",difficulty:"Moderate",question:"What is the output?",codeFile:"C033.c",output:"15",explanation:"Passing array to function that returns sum."},{id:"C034",difficulty:"Moderate",question:"What is the output?",codeFile:"C034.c",output:"2 4 6 8",explanation:"Function returning pointer to static array."},{id:"C035",difficulty:"Moderate",question:"What is the output?",codeFile:"C035.c",output:"1 2 3 4 5",explanation:"Dynamically allocated array printed."},{id:"C036",difficulty:"Moderate",question:"What is the output?",codeFile:"C036.c",output:`1 2 3
4 5 6`,explanation:"Traversing a 2D array."},{id:"C037",difficulty:"Moderate",question:"What is the output?",codeFile:"C037.c",output:`1 2
3 4 5
6`,explanation:"Simulated jagged array printed."},{id:"C038",difficulty:"Moderate",question:"What is the output?",codeFile:"C038.c",output:`Alice 25
Bob 30`,explanation:"Array of structures."},{id:"C039",difficulty:"Moderate",question:"What is the output?",codeFile:"C039.c",output:"90 85 92",explanation:"Structure containing array of marks."},{id:"C040",difficulty:"Moderate",question:"What is the output?",codeFile:"C040.c",output:"10 20 30",explanation:"Passing array and its size to function."},{id:"C041",difficulty:"Moderate",question:"What is the output?",codeFile:"C041.c",output:`1 2 3
4 5 6
7 8 9`,explanation:"Passing 2D array to function."},{id:"C042",difficulty:"Moderate",question:"What is the output?",codeFile:"C042.c",output:"garbage value (undefined)",explanation:"Accessing out of bounds leads to undefined behavior – the output may vary."},{id:"C043",difficulty:"Moderate",question:"What is the output?",codeFile:"C043.c",output:"40",explanation:"Using sizeof on array of 10 ints gives 40 bytes."},{id:"C044",difficulty:"Moderate",question:"What is the output?",codeFile:"C044.c",output:"15",explanation:"Array of function pointers – calls the add function."},{id:"C045",difficulty:"Moderate",question:"What is the output?",codeFile:"C045.c",output:"Hello",explanation:"Character array (string) printed."},{id:"C046",difficulty:"Moderate",question:"What is the output?",codeFile:"C046.c",output:"HelloWorld",explanation:"Copying and concatenating strings."},{id:"C047",difficulty:"Moderate",question:"What is the output?",codeFile:"C047.c",output:"HelloHello",explanation:"String concatenation."},{id:"C048",difficulty:"Moderate",question:"What is the output?",codeFile:"C048.c",output:"5",explanation:"Length of string 'Hello'."},{id:"C049",difficulty:"Moderate",question:"What is the output?",codeFile:"C049.c",output:"Strings are equal",explanation:"Comparison of two identical strings."},{id:"C050",difficulty:"Moderate",question:"What is the output?",codeFile:"C050.c",output:"Palindrome",explanation:"Checking if string 'madam' is palindrome."}],s={subjectLogo:un,topic:cn,subject:dn,class:12,board:ln,questions:fn};function gn(){const[r,u]=o.useState(null);return o.useEffect(()=>{const t=Object.assign({"./topic14_files/answers/C001.c":l,"./topic14_files/answers/C002.c":f,"./topic14_files/answers/C003.c":p,"./topic14_files/answers/C004.c":_,"./topic14_files/answers/C005.c":m,"./topic14_files/answers/C006.c":h,"./topic14_files/answers/C007.c":C,"./topic14_files/answers/C008.c":g,"./topic14_files/answers/C009.c":y,"./topic14_files/answers/C010.c":x,"./topic14_files/answers/C011.c":b,"./topic14_files/answers/C012.c":j,"./topic14_files/answers/C013.c":w,"./topic14_files/answers/C014.c":v,"./topic14_files/answers/C015.c":q,"./topic14_files/answers/C016.c":M,"./topic14_files/answers/C017.c":F,"./topic14_files/answers/C018.c":W,"./topic14_files/answers/C019.c":A,"./topic14_files/answers/C020.c":k,"./topic14_files/answers/C021.c":P,"./topic14_files/answers/C022.c":S,"./topic14_files/answers/C023.c":H,"./topic14_files/answers/C024.c":E,"./topic14_files/answers/C025.c":z,"./topic14_files/answers/C026.c":D,"./topic14_files/answers/C027.c":O,"./topic14_files/answers/C028.c":T,"./topic14_files/answers/C029.c":L,"./topic14_files/answers/C030.c":B,"./topic14_files/answers/C031.c":N,"./topic14_files/answers/C032.c":Q,"./topic14_files/answers/C033.c":R,"./topic14_files/answers/C034.c":$,"./topic14_files/answers/C035.c":I,"./topic14_files/answers/C036.c":J,"./topic14_files/answers/C037.c":U,"./topic14_files/answers/C038.c":G,"./topic14_files/answers/C039.c":K,"./topic14_files/answers/C040.c":V,"./topic14_files/answers/C041.c":X,"./topic14_files/answers/C042.c":Y,"./topic14_files/answers/C043.c":Z,"./topic14_files/answers/C044.c":nn,"./topic14_files/answers/C045.c":rn,"./topic14_files/answers/C046.c":tn,"./topic14_files/answers/C047.c":en,"./topic14_files/answers/C048.c":on,"./topic14_files/answers/C049.c":an,"./topic14_files/answers/C050.c":sn}),e={};Object.keys(t).forEach(n=>{const i=n.split("/").pop();e[i]=t[n]});const c=s.questions.map(n=>{const i=e[n.codeFile];return i||console.warn(`⚠ Missing code file: ${n.codeFile}`),{...n,code:i||`// ⚠ File "${n.codeFile}" not found in answers folder`}});u({...s,questions:c})},[]),r?a.jsx(d,{data:r}):a.jsx("div",{children:"Loading..."})}export{gn as default};
