import{r as a,j as e}from"./index-NACEEa8w.js";import{J as r}from"./JavaQuestionPaperTemplate-B7T6LvOp.js";import"./PrintButton-Dmdb-xAq.js";import"./JavaCodeBlock-BenGqs1_.js";import"./prism-aQ4BM5eP.js";import"./browser-CZeQo2s3.js";import"./prism-java-BwO6k4I_.js";const i="JAVA-1DARRAY-STRING-01",s="Java Practice Paper: 1D Arrays & String Handling",o="1.5 Hours",c=35,l="Knowledge of basic Java syntax, loops (for, while), conditionals (if-else, switch), and the main() method.",m=["All questions are compulsory.","Write Java code where asked. Assume proper class and main method unless specified otherwise.","Use meaningful variable names and proper code indentation.","Marks are indicated against each question."],h=[{section:"A",type:"Theory & Short Answer",marksPerQuestion:2,totalQuestions:5,description:"Answer concisely (2–3 lines).",questions:[{q:"What is the difference between the `length` variable of an array and the `length()` method of a String?",marks:2,answer:"`length` is a final variable applicable to arrays that gives the total number of elements in the array. `length()` is a method applicable to String objects that returns the number of characters in the string. For example: `int size = arr.length;` vs `int len = str.length();`.",hint:"Remember: arrays have a property, Strings have a method."},{q:'State the output of the following code snippet:\n```java\nString s1 = "ICSE";\nString s2 = "icse";\nSystem.out.println(s1.equals(s2));\nSystem.out.println(s1.equalsIgnoreCase(s2));\n```',marks:2,answer:"Output:\n`false`\n`true`\nReason: `equals()` method is case-sensitive, so 'ICSE' and 'icse' are not equal. `equalsIgnoreCase()` ignores case differences, so they are considered equal.",hint:"Check the case-sensitivity of each method."},{q:"Consider a 1D array `int[] x = {15, 10, 5, 25, 20};`. After one complete pass of the **Bubble Sort** algorithm (sorting in ascending order), what will be the state of the array? Show your steps.",marks:2,answer:`After one pass of Bubble Sort, the largest element (25) 'bubbles up' to the last position. The array becomes:
\`{10, 5, 15, 20, 25}\`.

Steps:
Compare 15 & 10 → swap → {10, 15, 5, 25, 20}
Compare 15 & 5 → swap → {10, 5, 15, 25, 20}
Compare 15 & 25 → no swap
Compare 25 & 20 → swap → {10, 5, 15, 20, 25}`,hint:"Perform adjacent comparisons and swaps."},{q:"Why are String objects considered immutable in Java? Explain with a small code example.",marks:2,answer:'String objects are immutable, meaning their values cannot be changed after they are created. Any operation that appears to modify a String, like concatenation, actually creates a new String object.\n```java\nString name = "Ram";\nname.concat(" Kumar"); // returns a new String but \'name\' still refers to "Ram"\n```',hint:"Think about what happens when you try to change a String."},{q:"You are writing a search function and know your data is sorted. Why would you choose Binary Search over Linear Search? (Explain in terms of steps and efficiency.)",marks:2,answer:"Binary Search is far more efficient for large, sorted datasets. For an array of size n, Binary Search has a time complexity of O(log₂n), while Linear Search has O(n). For example, in an array of 1,000 elements, Binary Search takes at most 10 comparisons, whereas Linear Search might take up to 1,000.",hint:"Compare how quickly each algorithm narrows down the search."}]},{section:"B",type:"Programming Problems",marksPerQuestion:5,totalQuestions:5,description:"Write complete Java programs. Include necessary imports and class definition.",questions:[{q:"Write a Java program that takes a 1D integer array as input from the user, calculates, and displays the sum of all elements at **odd indices** of the array (e.g., indices 1, 3, 5...).",marks:5,answer:`\`\`\`java
import java.util.Scanner;

public class SumOddIndices {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int n = sc.nextInt();
        int[] arr = new int[n];
        int sum = 0;
        
        System.out.println("Enter " + n + " integers:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
            if (i % 2 != 0) {  // Check for odd index
                sum += arr[i];
            }
        }
        
        System.out.println("Sum of elements at odd indices: " + sum);
        sc.close();
    }
}
\`\`\``,hint:"Loop through the array and use a conditional to check for odd indices (i % 2 != 0)."},{q:'Write a program to input a string from the user and print the **new string** after removing all the vowels from it. Example: Input: `"PROGRAMMING"` → Output: `"PRGRMMNG"`.',marks:5,answer:`\`\`\`java
import java.util.Scanner;

public class RemoveVowels {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();
        String result = "";
        
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            // Check if the character is a vowel (both cases)
            if (ch != 'A' && ch != 'E' && ch != 'I' && ch != 'O' && ch != 'U' &&
                ch != 'a' && ch != 'e' && ch != 'i' && ch != 'o' && ch != 'u') {
                result += ch;
            }
        }
        
        System.out.println("String after removing vowels: " + result);
        sc.close();
    }
}
\`\`\``,hint:"Loop through each character, check if it's a vowel, and concatenate non-vowels to a new String."},{q:'Write a Java program to perform **Binary Search** on a sorted integer array. Your program should prompt the user for the target value and display its position (index + 1) if found, otherwise display a "not found" message.',marks:5,answer:`\`\`\`java
import java.util.Scanner;

public class BinarySearchDemo {
    public static void main(String[] args) {
        // Consider the array is already sorted
        int[] arr = {11, 25, 32, 47, 54, 68, 79, 85, 93};
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the element to search: ");
        int key = sc.nextInt();
        
        int left = 0, right = arr.length - 1;
        int position = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2; // avoid overflow
            if (arr[mid] == key) {
                position = mid + 1; // +1 for human-readable position
                break;
            } else if (arr[mid] < key) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        if (position != -1)
            System.out.println("Element found at position: " + position);
        else
            System.out.println("Element not found.");
        
        sc.close();
    }
}
\`\`\``,hint:"The array must be sorted. Maintain `left` and `right` pointers, calculate `mid`, and adjust your search range accordingly."},{q:'Write a program that accepts a sentence (a `String`) from the user and prints a new string where the first character of every word is in uppercase and the rest are in lowercase. Example: Input: `"tHe sKY iS bLUe"` → Output: `"The Sky Is Blue"`.',marks:5,answer:`\`\`\`java
import java.util.Scanner;

public class CapitalizeWords {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String sentence = sc.nextLine();
        String result = "";
        
        // Split the sentence into words based on spaces
        String[] words = sentence.split(" ");
        
        for (String word : words) {
            if (word.length() > 0) {
                String firstLetter = word.substring(0, 1).toUpperCase();
                String restLetters = word.substring(1).toLowerCase();
                result += firstLetter + restLetters + " ";
            }
        }
        
        // Remove the trailing space
        result = result.trim();
        System.out.println("Formatted sentence: " + result);
        sc.close();
    }
}
\`\`\``,hint:'Use `split(" ")` to break the sentence into words. Manipulate each word using `toUpperCase()` and `toLowerCase()`, then reassemble.'},{q:`**Witty Question:** Consider the following code that is intended to find the largest element in an array but has a subtle error. Find the error, explain why it occurs, and provide the corrected code.
\`\`\`java
int[] nums = {10, 42, 18, 75, 33};
int max = 0;
for (int i = 1; i <= nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i];
    }
}
System.out.println("Largest number is " + max);
\`\`\``,marks:5,answer:"**Error 1: Off-by-one in loop condition.** `i <= nums.length` will cause an `ArrayIndexOutOfBoundsException` because the last valid index is `nums.length - 1`. **Error 2: Incorrect initial value for max.** Setting `max` to 0 will fail if all array elements are negative, as 0 would be incorrectly reported as the largest.\n\n**Corrected Code:**\n```java\nint[] nums = {10, 42, 18, 75, 33};\nint max = nums[0]; // Assume first element is the largest initially\nfor (int i = 1; i < nums.length; i++) { // Use '<' to stay within bounds\n    if (nums[i] > max) {\n        max = nums[i];\n    }\n}\nSystem.out.println(\"Largest number is \" + max);\n```",hint:"Check your loop's boundary condition and think about what value you should initialize the maximum variable with."}]}],u={paperId:i,title:s,duration:o,totalMarks:c,prerequisites:l,instructions:m,sections:h},x=()=>{const[n,p]=a.useState(u),t={name:"Coder & AccoTax",address:"Barrackpore, Kolkata",logo:"/logo.png"};return e.jsx("div",{className:"container mx-auto py-8",children:e.jsx(r,{data:n,isLoggedIn:!0,organizationDetails:t})})};export{x as default};
