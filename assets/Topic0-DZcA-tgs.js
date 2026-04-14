import{r as a,j as n}from"./index-Cufz2vn-.js";import{J as r}from"./JavaQuestionPaperTemplate-BdxMU_7M.js";import"./PrintButton-BnA23vMB.js";import"./JavaCodeBlock-CrahlGTT.js";import"./prism-Brf2rvGz.js";import"./browser-MIX2JdSA.js";import"./prism-java-BwO6k4I_.js";const i="JAVA-ARRAY-CLASSX-01",s="Java Arrays – Practice Paper (Class X)",o="1 Hour",l=30,m="Basics of Java syntax, loops (for, while), conditional statements (if-else)",u=["All questions are compulsory.","Write Java code where asked. Assume proper class and main method unless specified.","Use proper indentation and meaningful variable names.","Each question carries marks as indicated."],c=[{section:"A",type:"Short Answer Questions",marksPerQuestion:2,totalQuestions:5,description:"Answer in one or two sentences.",questions:[{q:"What is an array in Java? How is it different from a normal variable?",marks:2,answer:"An array is a container object that holds a fixed number of values of a single type. Unlike a normal variable that stores a single value, an array can store multiple values under one name and allows access using an index.",hint:"Think about storing multiple marks of students."},{q:"Write the syntax to declare and initialize an integer array named 'scores' with 5 elements, all set to zero.",marks:2,answer:"```java\nint[] scores = new int[5];\n```\nOr using literal initialization:\n```java\nint[] scores = {0, 0, 0, 0, 0};\n```",hint:"Use the 'new' keyword or curly braces."},{q:"What is the index of the first element of an array? What is the index of the last element of an array 'arr'?",marks:2,answer:"The first element is at index 0. The last element is at index `arr.length - 1`.",hint:"Array indices start from 0."},{q:"What will be the output of the following code?\n```java\nint[] nums = {2, 4, 6, 8};\nSystem.out.println(nums[2]);\n```",marks:2,answer:"Output: `6`\nExplanation: The array elements are at indices 0→2, 1→4, 2→6, 3→8.",hint:"Count carefully: index 2 is the third element."},{q:"Write a Java statement to find the length of an array named 'data'.",marks:2,answer:"```java\nint len = data.length;\n```\nNote: `length` is a property, not a method.",hint:"Arrays have a 'length' field, not a method like String's length()."}]},{section:"B",type:"Programming Problems",marksPerQuestion:5,totalQuestions:4,description:"Write complete Java programs. Assume 'main' method is inside a class.",questions:[{q:"Write a program to create an integer array of 5 elements, input values from the user, and display the sum of all elements.",marks:5,answer:`\`\`\`java
import java.util.Scanner;

public class ArraySum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[5];
        int sum = 0;
        
        System.out.println("Enter 5 integers:");
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
            sum += arr[i];
        }
        
        System.out.println("Sum of array elements: " + sum);
        sc.close();
    }
}
\`\`\``,hint:"Use a loop to read and add elements."},{q:"Write a program to find the largest and smallest element in an array of integers: {34, 12, 56, 78, 9, 23}.",marks:5,answer:`\`\`\`java
public class MinMaxArray {
    public static void main(String[] args) {
        int[] arr = {34, 12, 56, 78, 9, 23};
        int min = arr[0];
        int max = arr[0];
        
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < min) min = arr[i];
            if (arr[i] > max) max = arr[i];
        }
        
        System.out.println("Smallest: " + min);
        System.out.println("Largest: " + max);
    }
}
\`\`\``,hint:"Initialize min and max with the first element, then compare with others."},{q:"Write a program to print all even numbers from an array of integers: {15, 22, 8, 19, 31, 40, 7}.",marks:5,answer:`\`\`\`java
public class EvenNumbers {
    public static void main(String[] args) {
        int[] arr = {15, 22, 8, 19, 31, 40, 7};
        System.out.print("Even numbers: ");
        for (int num : arr) {
            if (num % 2 == 0) {
                System.out.print(num + " ");
            }
        }
    }
}
\`\`\`
Output: Even numbers: 22 8 40`,hint:"Use modulus operator (%) to check evenness."},{q:"Write a program that reverses an integer array in place (without using a second array). Example: {1,2,3,4,5} → {5,4,3,2,1}.",marks:5,answer:`\`\`\`java
public class ReverseArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        
        System.out.print("Original array: ");
        printArray(arr);
        
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
        
        System.out.print("Reversed array: ");
        printArray(arr);
    }
    
    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
\`\`\``,hint:"Swap elements from both ends moving towards the center."}]}],p={paperId:i,title:s,duration:o,totalMarks:l,prerequisites:m,instructions:u,sections:c},b=()=>{const[e,d]=a.useState(p),t={name:"Coder & AccoTax",address:"Barrackpore, Kolkata",logo:"/logo.png"};return n.jsx("div",{className:"container mx-auto py-8",children:n.jsx(r,{data:e,isLoggedIn:!0,organizationDetails:t})})};export{b as default};
