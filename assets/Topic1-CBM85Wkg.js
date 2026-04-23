import{r as a,j as n}from"./index-29x6CIxg.js";import{J as r}from"./JavaQuestionPaperTemplate-4tFmABCg.js";import"./PrintButton-BCajf190.js";import"./JavaCodeBlock-DXQeuhK6.js";import"./prism-D8qPEyTn.js";import"./browser-BhB_hP4n.js";import"./prism-java-BwO6k4I_.js";const i="JAVA-ARRAY-MOD-02",o="Java Arrays – Moderate Level Practice",s="1.5 Hours",l=35,c="Loops, conditionals, basic array syntax, knowledge of searching algorithms",m=["All questions are compulsory.","Write Java code where asked. Assume proper class and main method unless specified.","Use meaningful variable names and proper indentation.","Marks are indicated against each question."],d=[{section:"A",type:"Theory & Short Answer",marksPerQuestion:2,totalQuestions:5,description:"Answer concisely (2–3 lines).",questions:[{q:"What is the difference between linear search and binary search? Under what condition is binary search preferred?",marks:2,answer:"Linear search scans each element sequentially (O(n)) and works on unsorted arrays. Binary search repeatedly divides the search interval in half (O(log n)) but requires the array to be sorted. Binary search is preferred when the array is large and sorted.",hint:"Think about time complexity and prerequisite of sorting."},{q:"Explain the memory representation of a 2D array in Java. Are rows stored contiguously?",marks:2,answer:"In Java, a 2D array is an array of arrays (reference type). Each row reference is stored contiguously, but the actual row arrays are objects stored in heap memory, not necessarily contiguous. However, each row's elements are contiguous in memory.",hint:"Java does not have true 2D arrays; it's an array of references."},{q:'What will be the output of the following witty code snippet?\n```java\nint[] arr = new int[5];\nSystem.out.println(arr[0] + ", " + arr[5]);\n```',marks:2,answer:'Output: `0, Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5`\nExplanation: arr[0] is default 0, but arr[5] is out of bounds (valid indices 0–4).',hint:"Array indices start at 0 and go up to length-1."},{q:"Write a Java expression to access the element in the 3rd row and 2nd column of a 2D array named 'matrix'.",marks:2,answer:"`matrix[2][1]`  (since indices start at 0: row index 2 = third row, column index 1 = second column).",hint:"Remember zero‑based indexing."},{q:"What is the time complexity of reversing an array in‑place without using an extra array? Explain why.",marks:2,answer:"O(n) because we swap elements from both ends towards the middle, performing n/2 swaps. Each swap is constant time, so total time is proportional to the number of elements.",hint:"Consider how many swaps are needed."}]},{section:"B",type:"Programming Problems",marksPerQuestion:5,totalQuestions:5,description:"Write complete Java programs. Include necessary imports and class definition.",questions:[{q:"Write a Java program to perform linear search on an array of integers. The program should take the array and a search key as input and return the index of the first occurrence, or -1 if not found.",marks:5,answer:`\`\`\`java
import java.util.Scanner;

public class LinearSearchDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = {42, 17, 89, 23, 5, 76, 34};
        
        System.out.print("Enter element to search: ");
        int key = sc.nextInt();
        
        int index = -1;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == key) {
                index = i;
                break;
            }
        }
        
        if (index != -1)
            System.out.println("Element found at index " + index);
        else
            System.out.println("Element not found");
        sc.close();
    }
}
\`\`\``,hint:"Use a loop and break when found."},{q:"Write a Java program to implement binary search on a sorted integer array. Assume the array is already sorted in ascending order. Return the index if found, else -1.",marks:5,answer:`\`\`\`java
public class BinarySearchDemo {
    public static void main(String[] args) {
        int[] arr = {5, 12, 23, 34, 45, 56, 67, 78, 89};
        int key = 45;
        
        int left = 0, right = arr.length - 1;
        int result = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == key) {
                result = mid;
                break;
            } else if (arr[mid] < key) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        if (result != -1)
            System.out.println("Element found at index " + result);
        else
            System.out.println("Element not found");
    }
}
\`\`\``,hint:"Use while(left <= right) and calculate mid to avoid overflow."},{q:"Write a program to reverse an integer array in‑place (without using a second array). Example: {10, 20, 30, 40, 50} → {50, 40, 30, 20, 10}.",marks:5,answer:`\`\`\`java
public class InPlaceReverse {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        
        System.out.print("Original: ");
        printArray(arr);
        
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
        
        System.out.print("Reversed: ");
        printArray(arr);
    }
    
    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
\`\`\``,hint:"Swap elements from both ends moving toward the centre."},{q:"Write a Java program that creates a 3×3 matrix (2D array) of integers, fills it with user input, and then prints the sum of all elements, the sum of the main diagonal, and the sum of the anti‑diagonal.",marks:5,answer:`\`\`\`java
import java.util.Scanner;

public class MatrixOperations {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[][] matrix = new int[3][3];
        int totalSum = 0, diag1 = 0, diag2 = 0;
        
        System.out.println("Enter 9 integers for the 3x3 matrix:");
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                matrix[i][j] = sc.nextInt();
                totalSum += matrix[i][j];
                if (i == j) diag1 += matrix[i][j];
                if (i + j == 2) diag2 += matrix[i][j];
            }
        }
        
        System.out.println("Sum of all elements: " + totalSum);
        System.out.println("Sum of main diagonal: " + diag1);
        System.out.println("Sum of anti-diagonal: " + diag2);
        sc.close();
    }
}
\`\`\``,hint:"Main diagonal: i == j; anti‑diagonal: i + j == size-1."},{q:"**Witty Question:** What is wrong with the following code that tries to copy an array? Fix it and explain.\n```java\nint[] original = {1,2,3};\nint[] copy = original;\ncopy[0] = 99;\nSystem.out.println(original[0]);\n```",marks:5,answer:"The code does not create a true copy; it only copies the reference. Both `original` and `copy` refer to the same array object. Changing `copy[0]` also changes `original[0]`, so output is `99`. To create an actual copy, use `int[] copy = Arrays.copyOf(original, original.length);` or clone `original.clone()`. For deep copy of 2D arrays, a nested loop is needed.",hint:"Arrays are reference types in Java – assignment copies the reference, not the elements."}]}],u={paperId:i,title:o,duration:s,totalMarks:l,prerequisites:c,instructions:m,sections:d},b=()=>{const[e,p]=a.useState(u),t={name:"Coder & AccoTax",address:"Barrackpore, Kolkata",logo:"/logo.png"};return n.jsx("div",{className:"container mx-auto py-8",children:n.jsx(r,{data:e,isLoggedIn:!0,organizationDetails:t})})};export{b as default};
