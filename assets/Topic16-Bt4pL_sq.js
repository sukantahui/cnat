import{r as o,j as e}from"./index-DLefW0Tp.js";import{c as d}from"./clsx-B-dksMZM.js";import{T as a}from"./TeacherSukantaHui-3y4FXw4k.js";import{J as i}from"./JavaFileLoader-Bddd4QbW.js";import"./git-branch-YeYTvmDr.js";import"./JavaCodeBlock-CGUYzLjP.js";import"./prism-CzJDobEc.js";import"./browser-COpx1UKX.js";import"./prism-java-BwO6k4I_.js";const c=`import java.util.Arrays;\r
\r
public class SecondLargestBasic {\r
    \r
    // Method 1: Using sorting (simplest)\r
    public static int findSecondLargestBySorting(int[] arr) {\r
        if (arr == null || arr.length < 2) {\r
            throw new IllegalArgumentException("Array must have at least 2 elements");\r
        }\r
        \r
        int[] sorted = arr.clone();\r
        Arrays.sort(sorted);\r
        \r
        // Find first element different from largest\r
        int largest = sorted[sorted.length - 1];\r
        for (int i = sorted.length - 2; i >= 0; i--) {\r
            if (sorted[i] != largest) {\r
                return sorted[i];\r
            }\r
        }\r
        \r
        throw new IllegalArgumentException("No second largest element (all elements equal)");\r
    }\r
    \r
    // Method 2: Two-pass method\r
    public static int findSecondLargestTwoPass(int[] arr) {\r
        if (arr == null || arr.length < 2) {\r
            throw new IllegalArgumentException("Array must have at least 2 elements");\r
        }\r
        \r
        // First pass: find largest\r
        int largest = arr[0];\r
        for (int i = 1; i < arr.length; i++) {\r
            if (arr[i] > largest) {\r
                largest = arr[i];\r
            }\r
        }\r
        \r
        // Second pass: find largest less than largest\r
        int secondLargest = Integer.MIN_VALUE;\r
        for (int num : arr) {\r
            if (num != largest && num > secondLargest) {\r
                secondLargest = num;\r
            }\r
        }\r
        \r
        if (secondLargest == Integer.MIN_VALUE) {\r
            throw new IllegalArgumentException("No second largest element (all elements equal to largest)");\r
        }\r
        \r
        return secondLargest;\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] scores = {45, 67, 23, 89, 12, 78, 34};\r
        \r
        System.out.println("Array: " + Arrays.toString(scores));\r
        System.out.println("Second largest (sorting): " + findSecondLargestBySorting(scores));\r
        System.out.println("Second largest (two-pass): " + findSecondLargestTwoPass(scores));\r
        \r
        // Barrackpore school toppers\r
        int[] examScores = {78, 92, 85, 96, 67, 88, 91};\r
        System.out.println("\\nExam scores: " + Arrays.toString(examScores));\r
        System.out.println("Second highest score: " + findSecondLargestTwoPass(examScores));\r
        \r
        // Test with duplicates\r
        int[] duplicates = {100, 100, 90, 80, 70};\r
        System.out.println("\\nWith duplicates: " + Arrays.toString(duplicates));\r
        System.out.println("Second largest: " + findSecondLargestTwoPass(duplicates));\r
    }\r
}`,g=`import java.util.Arrays;\r
\r
public class SecondLargestWithDuplicates {\r
    \r
    // Handle duplicates carefully\r
    public static int findSecondLargest(int[] arr) {\r
        if (arr == null || arr.length < 2) {\r
            throw new IllegalArgumentException("Array must have at least 2 elements");\r
        }\r
        \r
        int first = Integer.MIN_VALUE;\r
        int second = Integer.MIN_VALUE;\r
        \r
        for (int num : arr) {\r
            if (num > first) {\r
                second = first;\r
                first = num;\r
            } else if (num > second && num != first) {\r
                // Important: num != first handles duplicates\r
                second = num;\r
            }\r
        }\r
        \r
        if (second == Integer.MIN_VALUE) {\r
            throw new IllegalArgumentException("No second largest element (all elements may be equal or array too small)");\r
        }\r
        \r
        return second;\r
    }\r
    \r
    // Also return indices of first and second largest\r
    public static int[] findFirstAndSecondIndices(int[] arr) {\r
        if (arr == null || arr.length < 2) {\r
            return new int[]{-1, -1};\r
        }\r
        \r
        int firstIdx = 0;\r
        int secondIdx = -1;\r
        \r
        for (int i = 1; i < arr.length; i++) {\r
            if (arr[i] > arr[firstIdx]) {\r
                secondIdx = firstIdx;\r
                firstIdx = i;\r
            } else if (secondIdx == -1 || (arr[i] > arr[secondIdx] && arr[i] != arr[firstIdx])) {\r
                secondIdx = i;\r
            }\r
        }\r
        \r
        return new int[]{firstIdx, secondIdx};\r
    }\r
    \r
    public static void main(String[] args) {\r
        // Test with various scenarios\r
        int[][] testCases = {\r
            {45, 67, 23, 89, 12, 78, 34},\r
            {100, 100, 90, 80, 70},\r
            {5, 5, 5, 5},\r
            {-5, -10, -3, -8},\r
            {1}\r
        };\r
        \r
        for (int[] test : testCases) {\r
            System.out.println("\\nArray: " + Arrays.toString(test));\r
            try {\r
                int second = findSecondLargest(test);\r
                System.out.println("Second largest: " + second);\r
                \r
                int[] indices = findFirstAndSecondIndices(test);\r
                if (indices[1] != -1) {\r
                    System.out.println("First at index " + indices[0] + " (value " + test[indices[0]] + ")");\r
                    System.out.println("Second at index " + indices[1] + " (value " + test[indices[1]] + ")");\r
                } else {\r
                    System.out.println("No second largest exists");\r
                }\r
            } catch (IllegalArgumentException e) {\r
                System.out.println("Error: " + e.getMessage());\r
            }\r
        }\r
        \r
        // Student scores from Barrackpore\r
        int[] studentScores = {85, 92, 78, 96, 96, 88, 91};\r
        System.out.println("\\nBarrackpore School Scores: " + Arrays.toString(studentScores));\r
        System.out.println("Second topper: " + findSecondLargest(studentScores));\r
        \r
        int[] indices = findFirstAndSecondIndices(studentScores);\r
        System.out.println("Topper at index " + indices[0] + " with score " + studentScores[indices[0]]);\r
        System.out.println("Runner-up at index " + indices[1] + " with score " + studentScores[indices[1]]);\r
    }\r
}`,x=`import java.util.Arrays;\r
\r
public class SecondLargestSinglePass {\r
    \r
    // Optimal single pass solution\r
    public static int findSecondLargest(int[] arr) {\r
        if (arr == null || arr.length < 2) {\r
            throw new IllegalArgumentException("Array must have at least 2 elements");\r
        }\r
        \r
        int first = arr[0];\r
        int second = Integer.MIN_VALUE;\r
        \r
        for (int i = 1; i < arr.length; i++) {\r
            if (arr[i] > first) {\r
                second = first;\r
                first = arr[i];\r
            } else if (arr[i] > second && arr[i] != first) {\r
                second = arr[i];\r
            }\r
        }\r
        \r
        if (second == Integer.MIN_VALUE) {\r
            throw new IllegalArgumentException("No second largest element found");\r
        }\r
        \r
        return second;\r
    }\r
    \r
    // Find top K largest using single pass (for K=2,3,etc.)\r
    public static int[] findTopK(int[] arr, int k) {\r
        if (arr == null || arr.length < k) {\r
            throw new IllegalArgumentException("Array must have at least " + k + " elements");\r
        }\r
        \r
        int[] top = new int[k];\r
        Arrays.fill(top, Integer.MIN_VALUE);\r
        \r
        for (int num : arr) {\r
            for (int i = 0; i < k; i++) {\r
                if (num > top[i]) {\r
                    // Shift smaller values down\r
                    for (int j = k - 1; j > i; j--) {\r
                        top[j] = top[j - 1];\r
                    }\r
                    top[i] = num;\r
                    break;\r
                } else if (num == top[i]) {\r
                    break; // Skip duplicates\r
                }\r
            }\r
        }\r
        \r
        return top;\r
    }\r
    \r
    // With detailed step-by-step output\r
    public static void findSecondLargestWithTrace(int[] arr) {\r
        if (arr == null || arr.length < 2) {\r
            System.out.println("Array must have at least 2 elements");\r
            return;\r
        }\r
        \r
        int first = arr[0];\r
        int second = Integer.MIN_VALUE;\r
        \r
        System.out.println("Starting search for first and second largest...");\r
        System.out.println("Initial: first = " + first + ", second = " + second);\r
        System.out.println();\r
        \r
        for (int i = 1; i < arr.length; i++) {\r
            System.out.println("Checking arr[" + i + "] = " + arr[i]);\r
            \r
            if (arr[i] > first) {\r
                System.out.println("  " + arr[i] + " > " + first + " → New largest found!");\r
                second = first;\r
                first = arr[i];\r
                System.out.println("  Updated: first = " + first + ", second = " + second);\r
            } else if (arr[i] > second && arr[i] != first) {\r
                System.out.println("  " + arr[i] + " is between " + second + " and " + first);\r
                second = arr[i];\r
                System.out.println("  Updated: second = " + second);\r
            } else {\r
                System.out.println("  No update needed");\r
            }\r
            System.out.println();\r
        }\r
        \r
        System.out.println("✓ Final result:");\r
        System.out.println("  First largest: " + first);\r
        System.out.println("  Second largest: " + second);\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] scores = {45, 67, 23, 89, 12, 78, 34};\r
        \r
        System.out.println("Array: " + Arrays.toString(scores));\r
        System.out.println("Second largest: " + findSecondLargest(scores));\r
        \r
        System.out.println("\\n" + "=".repeat(50));\r
        findSecondLargestWithTrace(scores);\r
        \r
        // Find top 3 largest\r
        int[] top3 = findTopK(scores, 3);\r
        System.out.println("\\nTop 3 largest: " + Arrays.toString(top3));\r
        \r
        // Find top 5 from student scores\r
        int[] studentScores = {85, 92, 78, 96, 88, 91, 84, 95, 87, 90};\r
        System.out.println("\\nAll scores: " + Arrays.toString(studentScores));\r
        int[] top5 = findTopK(studentScores, 5);\r
        System.out.println("Top 5 scores: " + Arrays.toString(top5));\r
    }\r
}`,m=`import java.util.Arrays;\r
import java.util.Comparator;\r
\r
class Student implements Comparable<Student> {\r
    String name;\r
    int score;\r
    \r
    Student(String name, int score) {\r
        this.name = name;\r
        this.score = score;\r
    }\r
    \r
    @Override\r
    public int compareTo(Student other) {\r
        return Integer.compare(this.score, other.score);\r
    }\r
    \r
    @Override\r
    public String toString() {\r
        return name + " (" + score + ")";\r
    }\r
}\r
\r
public class SecondLargestObjects {\r
    \r
    // Find second largest using Comparable\r
    public static <T extends Comparable<T>> T findSecondLargest(T[] arr) {\r
        if (arr == null || arr.length < 2) {\r
            return null;\r
        }\r
        \r
        T first = arr[0];\r
        T second = null;\r
        \r
        for (int i = 1; i < arr.length; i++) {\r
            if (arr[i].compareTo(first) > 0) {\r
                second = first;\r
                first = arr[i];\r
            } else if (second == null || (arr[i].compareTo(second) > 0 && arr[i].compareTo(first) != 0)) {\r
                second = arr[i];\r
            }\r
        }\r
        \r
        return second;\r
    }\r
    \r
    // Find second largest using Comparator\r
    public static <T> T findSecondLargest(T[] arr, Comparator<T> comp) {\r
        if (arr == null || arr.length < 2) {\r
            return null;\r
        }\r
        \r
        T first = arr[0];\r
        T second = null;\r
        \r
        for (int i = 1; i < arr.length; i++) {\r
            if (comp.compare(arr[i], first) > 0) {\r
                second = first;\r
                first = arr[i];\r
            } else if (second == null || (comp.compare(arr[i], second) > 0 && comp.compare(arr[i], first) != 0)) {\r
                second = arr[i];\r
            }\r
        }\r
        \r
        return second;\r
    }\r
    \r
    public static void main(String[] args) {\r
        // Student scores - find second topper\r
        Student[] students = {\r
            new Student("Swadeep", 85),\r
            new Student("Tuhina", 92),\r
            new Student("Abhronila", 78),\r
            new Student("Nandini", 96),\r
            new Student("Riddhiman", 88),\r
            new Student("Angshuman", 91)\r
        };\r
        \r
        System.out.println("Students: " + Arrays.toString(students));\r
        \r
        Student secondTopper = findSecondLargest(students);\r
        System.out.println("\\nSecond topper: " + secondTopper);\r
        \r
        // Find second longest string\r
        String[] names = {"Swadeep", "Tuhina", "Abhronila", "Riddhiman", "Angshuman"};\r
        System.out.println("\\nNames: " + Arrays.toString(names));\r
        \r
        String secondLongest = findSecondLargest(names, (a, b) -> Integer.compare(a.length(), b.length()));\r
        System.out.println("Second longest name: " + secondLongest);\r
        \r
        // Product prices - find second most expensive\r
        Product[] products = {\r
            new Product("Laptop", 50000),\r
            new Product("Phone", 30000),\r
            new Product("Tablet", 25000),\r
            new Product("Watch", 15000),\r
            new Product("Headphones", 8000)\r
        };\r
        \r
        System.out.println("\\nProducts: " + Arrays.toString(products));\r
        Product secondMostExpensive = findSecondLargest(products);\r
        System.out.println("Second most expensive: " + secondMostExpensive);\r
        \r
        // Integer array\r
        Integer[] scores = {45, 67, 23, 89, 12, 78, 34};\r
        System.out.println("\\nScores: " + Arrays.toString(scores));\r
        System.out.println("Second highest score: " + findSecondLargest(scores));\r
    }\r
}\r
\r
// Helper class for product\r
class Product implements Comparable<Product> {\r
    String name;\r
    double price;\r
    \r
    Product(String name, double price) {\r
        this.name = name;\r
        this.price = price;\r
    }\r
    \r
    @Override\r
    public int compareTo(Product other) {\r
        return Double.compare(this.price, other.price);\r
    }\r
    \r
    @Override\r
    public String toString() {\r
        return name + " (₹" + price + ")";\r
    }\r
}`,h=()=>{const[t,l]=o.useState(0),r=[{label:"Initialize: first = -∞, second = -∞",first:null,second:null,currentIdx:-1,array:[45,67,23,89,12,78,34]},{label:"i=0: arr[0]=45 → first=45, second=-∞",first:45,second:null,currentIdx:0,array:[45,67,23,89,12,78,34]},{label:"i=1: arr[1]=67 > first(45) → second=45, first=67",first:67,second:45,currentIdx:1,array:[45,67,23,89,12,78,34]},{label:"i=2: arr[2]=23 → between first(67) and second(45)? No",first:67,second:45,currentIdx:2,array:[45,67,23,89,12,78,34]},{label:"i=3: arr[3]=89 > first(67) → second=67, first=89",first:89,second:67,currentIdx:3,array:[45,67,23,89,12,78,34]},{label:"i=4: arr[4]=12 → between first(89) and second(67)? No",first:89,second:67,currentIdx:4,array:[45,67,23,89,12,78,34]},{label:"i=5: arr[5]=78 → between first(89) and second(67)? Yes (78>67) → second=78",first:89,second:78,currentIdx:5,array:[45,67,23,89,12,78,34]},{label:"i=6: arr[6]=34 → between first(89) and second(78)? No",first:89,second:78,currentIdx:6,array:[45,67,23,89,12,78,34]},{label:"✓ Complete! First=89, Second=78",first:89,second:78,currentIdx:-1,array:[45,67,23,89,12,78,34]}];return e.jsxs("div",{className:"w-full",children:[e.jsxs("svg",{viewBox:"0 0 950 400",className:"w-full h-auto max-w-6xl mx-auto my-4","aria-label":"Finding Second Largest Visualization",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"secondGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#f59e0b",stopOpacity:.1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#ef4444",stopOpacity:.2}})]}),e.jsx("filter",{id:"shadow",x:"-5%",y:"-5%",width:"110%",height:"110%",children:e.jsx("feDropShadow",{dx:"1",dy:"1",stdDeviation:"2",floodOpacity:"0.2"})})]}),e.jsx("text",{x:"475",y:"25",textAnchor:"middle",fill:"#1e293b","dark:text-gray-200":!0,fontSize:"13",fontWeight:"bold",children:r[t].label}),e.jsx("rect",{x:"50",y:"40",width:"200",height:"35",rx:"8",fill:"#fef3c7",stroke:"#f59e0b",strokeWidth:"2"}),e.jsxs("text",{x:"150",y:"62",textAnchor:"middle",fill:"#92400e",fontSize:"13",fontWeight:"bold",children:["1st: ",r[t].first!==null?r[t].first:"-∞"]}),e.jsx("rect",{x:"280",y:"40",width:"200",height:"35",rx:"8",fill:"#fef3c7",stroke:"#f59e0b",strokeWidth:"2"}),e.jsxs("text",{x:"380",y:"62",textAnchor:"middle",fill:"#92400e",fontSize:"13",fontWeight:"bold",children:["2nd: ",r[t].second!==null?r[t].second:"-∞"]}),r[t].array.map((n,s)=>e.jsxs("g",{transform:`translate(${s*105+50}, 100)`,children:[e.jsxs("rect",{x:"0",y:"0",width:"85",height:"60",rx:"6",fill:s===r[t].currentIdx?"#fef3c7":"#ffffff",stroke:s===r[t].currentIdx?"#f59e0b":n===r[t].first?"#10b981":n===r[t].second?"#3b82f6":"#cbd5e1",strokeWidth:s===r[t].currentIdx?"3":"2",className:"transition-all duration-300 hover:shadow-lg",filter:"url(#shadow)",children:[s===r[t].currentIdx&&e.jsx("animate",{attributeName:"stroke",values:"#f59e0b;#ef4444;#f59e0b",dur:"0.8s",repeatCount:"indefinite"}),n===r[t].first&&e.jsx("animate",{attributeName:"fill",values:"#d1fae5;#a7f3d0;#d1fae5",dur:"1.5s",repeatCount:"indefinite"}),n===r[t].second&&e.jsx("animate",{attributeName:"fill",values:"#dbeafe;#bfdbfe;#dbeafe",dur:"1.5s",repeatCount:"indefinite"})]}),e.jsx("text",{x:"42",y:"35",textAnchor:"middle",fill:"#1e293b",fontSize:"20",fontWeight:"bold",children:n}),e.jsxs("text",{x:"42",y:"78",textAnchor:"middle",fill:"#94a3b8",fontSize:"10",children:["index ",s]}),n===r[t].first&&e.jsx("text",{x:"42",y:"-10",textAnchor:"middle",fill:"#10b981",fontSize:"11",fontWeight:"bold",children:"🥇 1st"}),n===r[t].second&&r[t].second!==null&&e.jsx("text",{x:"42",y:"-10",textAnchor:"middle",fill:"#3b82f6",fontSize:"11",fontWeight:"bold",children:"🥈 2nd"})]},s)),e.jsxs("g",{transform:"translate(375, 300)",children:[e.jsx("rect",{x:"0",y:"0",width:"200",height:"35",rx:"8",fill:"#f59e0b",className:"cursor-pointer hover:fill-orange-600 transition-all duration-300"}),e.jsx("text",{x:"100",y:"24",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",className:"cursor-pointer",children:t<8?"Next Step →":"Reset"})]})]}),e.jsx("div",{className:"text-center mt-2",children:e.jsx("button",{onClick:()=>l((t+1)%9),className:"px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300",children:t<8?"Next Step (Step "+(t+2)+"/9)":"Reset Animation"})})]})},p=()=>e.jsxs("svg",{viewBox:"0 0 700 250",className:"w-full h-auto max-w-3xl mx-auto my-4",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),e.jsx("rect",{x:"50",y:"20",width:"280",height:"200",rx:"8",fill:"#fee2e2",stroke:"#ef4444",strokeWidth:"1.5"}),e.jsx("text",{x:"190",y:"50",textAnchor:"middle",fill:"#991b1b",fontSize:"14",fontWeight:"bold",children:"Method 1: Sort"}),e.jsx("text",{x:"190",y:"75",textAnchor:"middle",fill:"#7f1d1d",fontSize:"11",children:"Arrays.sort(arr)"}),e.jsx("text",{x:"190",y:"95",textAnchor:"middle",fill:"#7f1d1d",fontSize:"11",children:"return arr[n-2]"}),e.jsx("line",{x1:"70",y1:"110",x2:"310",y2:"110",stroke:"#ef4444",strokeWidth:"1"}),e.jsx("text",{x:"190",y:"130",textAnchor:"middle",fill:"#991b1b",fontSize:"12",fontWeight:"bold",children:"Complexity: O(n log n)"}),e.jsx("text",{x:"190",y:"150",textAnchor:"middle",fill:"#7f1d1d",fontSize:"11",children:"Easy to implement"}),e.jsx("text",{x:"190",y:"170",textAnchor:"middle",fill:"#7f1d1d",fontSize:"11",children:"Inefficient for large n"}),e.jsx("text",{x:"190",y:"190",textAnchor:"middle",fill:"#7f1d1d",fontSize:"11",children:"Modifies original array"}),e.jsx("rect",{x:"370",y:"20",width:"280",height:"200",rx:"8",fill:"#fef3c7",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"510",y:"50",textAnchor:"middle",fill:"#92400e",fontSize:"14",fontWeight:"bold",children:"Method 2: Two Pass"}),e.jsx("text",{x:"510",y:"75",textAnchor:"middle",fill:"#92400e",fontSize:"11",children:"1st pass: find max"}),e.jsx("text",{x:"510",y:"95",textAnchor:"middle",fill:"#92400e",fontSize:"11",children:"2nd pass: find max < first"}),e.jsx("line",{x1:"390",y1:"110",x2:"630",y2:"110",stroke:"#f59e0b",strokeWidth:"1"}),e.jsx("text",{x:"510",y:"130",textAnchor:"middle",fill:"#92400e",fontSize:"12",fontWeight:"bold",children:"Complexity: O(2n) = O(n)"}),e.jsx("text",{x:"510",y:"150",textAnchor:"middle",fill:"#92400e",fontSize:"11",children:"Doesn't modify array"}),e.jsx("text",{x:"510",y:"170",textAnchor:"middle",fill:"#92400e",fontSize:"11",children:"2 passes over array"}),e.jsx("text",{x:"510",y:"190",textAnchor:"middle",fill:"#92400e",fontSize:"11",children:"Handles duplicates"}),e.jsx("rect",{x:"50",y:"230",width:"600",height:"50",rx:"8",fill:"#dcfce7",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"350",y:"250",textAnchor:"middle",fill:"#14532d",fontSize:"13",fontWeight:"bold",children:"Method 3: Single Pass (Best!)"}),e.jsx("text",{x:"350",y:"268",textAnchor:"middle",fill:"#166534",fontSize:"11",children:"Track both largest and second largest in one pass → O(n) time, O(1) space"})]}),A=()=>{const[t,l]=o.useState("theory");return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"mb-8 text-center animate-[fadeInUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent mb-4",children:"Finding the Second Largest Element"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed",children:"Tracking the top two values in a single pass - the runner-up problem"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700",children:["theory","visual","code","practice"].map(r=>e.jsx("button",{onClick:()=>l(r),className:d("px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-300",t===r?"bg-orange-50 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 border-b-2 border-orange-600":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"),children:r.charAt(0).toUpperCase()+r.slice(1)},r))}),e.jsxs("div",{className:"space-y-6",children:[t==="theory"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center",children:[e.jsx("span",{className:"bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold",children:"1"}),"What is the Second Largest?"]}),e.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-4",children:["The ",e.jsx("strong",{className:"text-orange-600 dark:text-orange-400",children:"second largest element"})," is the maximum value that is ",e.jsx("strong",{className:"text-orange-600 dark:text-orange-400",children:"less than the largest element"}),". Finding it efficiently requires tracking both the largest and second largest in a single pass, or using other approaches like sorting or two passes."]}),e.jsx("div",{className:"bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg mb-4",children:e.jsxs("p",{className:"text-sm text-orange-800 dark:text-orange-200 font-mono",children:[e.jsx("strong",{children:"Prototype:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"public static int findSecondLargest(int[] arr)"}),e.jsx("br",{}),e.jsx("strong",{children:"Return Type:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"int"})," (second largest value)",e.jsx("br",{}),e.jsx("strong",{children:"Purpose:"})," Find runner-up value without sorting entire array",e.jsx("br",{}),e.jsx("strong",{children:"Key Challenge:"})," Handle duplicates correctly!"]})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🔄 Three Approaches Compared"}),e.jsx(p,{})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚙️ Single Pass Algorithm (Best Approach)"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-3 text-gray-600 dark:text-gray-300",children:[e.jsxs("p",{children:["1️⃣ ",e.jsx("strong",{children:"Initialize"})," first = Integer.MIN_VALUE, second = Integer.MIN_VALUE"]}),e.jsxs("p",{children:["2️⃣ ",e.jsx("strong",{children:"Traverse"})," each element in array"]}),e.jsxs("p",{children:["3️⃣ ",e.jsx("strong",{children:"If current > first"})," → second = first, first = current"]}),e.jsxs("p",{children:["4️⃣ ",e.jsx("strong",{children:"Else if current > second AND current != first"})," → second = current"]}),e.jsxs("p",{children:["5️⃣ ",e.jsx("strong",{children:"After loop"}),", second contains second largest"]}),e.jsxs("p",{children:["6️⃣ ",e.jsx("strong",{children:"Edge case"})," - If second still MIN_VALUE, no second largest exists"]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Analogy"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Race competition:"}),e.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-300 mt-2 list-disc list-inside",children:[e.jsx("li",{children:"Track 1st place (gold medalist)"}),e.jsx("li",{children:"Track 2nd place (silver medalist)"}),e.jsx("li",{children:"When new 1st place found, old 1st becomes 2nd"}),e.jsx("li",{children:"When someone beats 2nd but not 1st, update 2nd"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🌍 Real-World Examples"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"🏅 Olympic Medal Tracking"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Finding silver medalist (second highest score) after gold medalist."})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"📊 Class Rank"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Teacher Sukanta Hui finding second topper after Nandini scored highest."})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"💰 Stock Market"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Finding second highest stock price of the day."})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"🎮 Game High Scores"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Displaying second highest score on leaderboard."})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📊 Complexity Analysis"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Sort Method"}),e.jsx("p",{className:"text-lg font-bold text-green-600",children:"O(n log n)"}),e.jsx("p",{className:"text-xs",children:"Simplest code"})]}),e.jsxs("div",{className:"text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Two Pass Method"}),e.jsx("p",{className:"text-lg font-bold text-yellow-600",children:"O(2n) = O(n)"}),e.jsx("p",{className:"text-xs",children:"2 traversals"})]}),e.jsxs("div",{className:"text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Single Pass (Best)"}),e.jsx("p",{className:"text-lg font-bold text-blue-600",children:"O(n)"}),e.jsx("p",{className:"text-xs",children:"1 traversal, O(1) space"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚠️ Edge Cases to Consider"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-yellow-800",children:"Duplicate largest values"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"If all largest values are same, second largest is next distinct value"})]}),e.jsxs("div",{className:"p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-yellow-800",children:"Array with 1 element"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"No second largest exists"})]}),e.jsxs("div",{className:"p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-yellow-800",children:"All elements equal"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"No second largest (all values same)"})]}),e.jsxs("div",{className:"p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-yellow-800",children:"Negative numbers"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Works fine with proper initialization"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"💡 Tips & Tricks"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Initialize with MIN_VALUE:"})," Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"Integer.MIN_VALUE"})," for proper negative handling"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Handle duplicates carefully:"})," Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"current != first"})," check"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Return sentinel:"})," If no second largest exists, return ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"Integer.MIN_VALUE"})," or throw exception"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Track indices too:"})," Useful when positions matter"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Extension:"})," Same logic works for top K elements with priority queue"]})]})]}),e.jsx(a,{note:"The second largest problem teaches multi-variable tracking! I tell students: 'It's like running a race and remembering both gold and silver medalists.' The single pass solution is elegant - only O(n) time and O(1) space. Challenge: Extend to top 3 or top K elements!"})]}),t==="visual"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"👁️ Visual Walkthrough"}),e.jsx(h,{}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-4",children:"Watch how first and second place change as we find larger values"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📝 Dry Run Example"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-700/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"Step"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"i"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"arr[i]"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"Comparison"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"First (1st)"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"Second (2nd)"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"Action"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[{step:1,i:0,val:45,compare:"-",first:45,second:"MIN",action:"Initialize"},{step:2,i:1,val:67,compare:"67 > 45",first:67,second:45,action:"Update first→second"},{step:3,i:2,val:23,compare:"23 between?",first:67,second:45,action:"No change"},{step:4,i:3,val:89,compare:"89 > 67",first:89,second:67,action:"Update first→second"},{step:5,i:4,val:12,compare:"12 between?",first:89,second:67,action:"No change"},{step:6,i:5,val:78,compare:"78 between 67 and 89",first:89,second:78,action:"Update second"},{step:7,i:6,val:34,compare:"34 between?",first:89,second:78,action:"No change"}].map((r,n)=>e.jsxs("tr",{className:r.action.includes("Update")?"bg-orange-50 dark:bg-orange-900/20":"",children:[e.jsx("td",{className:"px-3 py-2 text-sm",children:r.step}),e.jsx("td",{className:"px-3 py-2 text-sm",children:r.i}),e.jsx("td",{className:"px-3 py-2 text-sm",children:r.val}),e.jsx("td",{className:"px-3 py-2 text-sm",children:r.compare}),e.jsx("td",{className:"px-3 py-2 text-sm font-bold text-green-600",children:r.first}),e.jsx("td",{className:"px-3 py-2 text-sm font-bold text-blue-600",children:r.second}),e.jsx("td",{className:"px-3 py-2 text-sm",children:r.action})]},n))})]})})]}),e.jsx(a,{note:"The animation clearly shows the 'medal tracking' analogy. Have students predict when first and second will update. This builds intuition for multi-variable state tracking - a crucial programming skill!"})]}),t==="code"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(i,{fileModule:c,title:"SecondLargestBasic.java",highlightLines:[]}),e.jsx(i,{fileModule:g,title:"SecondLargestWithDuplicates.java",highlightLines:[]}),e.jsx(i,{fileModule:x,title:"SecondLargestSinglePass.java",highlightLines:[]}),e.jsx(i,{fileModule:m,title:"SecondLargestObjects.java",highlightLines:[]})]})]}),e.jsx(a,{note:"Compare the three approaches: sorting (easy but slow), two-pass (clear but 2 traversals), single-pass (optimal). The single-pass solution is a great example of optimizing by tracking additional state. Have students implement all three and compare performance!"})]}),t==="practice"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Not handling duplicates"}),e.jsx("p",{className:"text-sm",children:"For [10, 10, 5], second largest should be 5, not 10"})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Incorrect initialization"}),e.jsx("p",{className:"text-sm",children:"Initializing both to 0 fails with negative numbers"})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Not checking if second exists"}),e.jsx("p",{className:"text-sm",children:"Returning second without checking if it was updated"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"✅ Best Practices"}),e.jsxs("ul",{className:"space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"Integer.MIN_VALUE"})," for initialization"]}),e.jsxs("li",{children:["Add duplicate check: ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"current != first"})]}),e.jsx("li",{children:"Return sentinel or throw exception if second largest doesn't exist"}),e.jsxs("li",{children:["Consider using ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"long"})," for sum to avoid overflow"]}),e.jsx("li",{children:"Document edge case behavior clearly"})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"💭 Think About..."}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"🤔 How would you find the third largest element?"}),e.jsx("li",{children:"🤔 Can you find second largest without using MIN_VALUE initialization?"}),e.jsx("li",{children:"🤔 How would you handle an array with all identical values?"}),e.jsx("li",{children:"🤔 What's the minimum number of comparisons needed?"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🎯 Questions & Answers"}),e.jsx("div",{className:"space-y-4",children:u.map((r,n)=>e.jsxs("details",{className:"group border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("summary",{className:"cursor-pointer p-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:r.question}),e.jsx("div",{className:"p-4 pt-0 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700",children:r.answer})]},n))})]}),e.jsx(a,{note:"The second largest problem is excellent for teaching edge cases! Students often forget about duplicates or arrays with no second largest. Have them write test cases that break their code - this builds robust programming habits."})]})]})]}),e.jsx("style",{children:`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[fadeInUp_.*\\] {
            animation: none !important;
          }
        }
        
        details summary::-webkit-details-marker {
          display: none;
        }
        
        details summary {
          list-style: none;
        }
      `})]})},u=[{question:"What is the second largest element?",answer:"The maximum value that is strictly less than the largest element in the array."},{question:"What's the time complexity of finding second largest?",answer:"O(n) using single pass method, O(n log n) using sorting."},{question:"How to handle duplicates when finding second largest?",answer:"Use condition 'current != first' when updating second to skip duplicate largest values."},{question:"What if array has only one element?",answer:"There is no second largest element. Should return sentinel (MIN_VALUE) or throw exception."},{question:"What if all elements are equal?",answer:"No second largest exists since all values are identical."},{question:"Why use Integer.MIN_VALUE for initialization?",answer:"To handle negative numbers correctly. Initializing with 0 would fail for arrays with all negative numbers."},{question:"What's the best approach for finding second largest?",answer:"Single pass tracking both first and second - O(n) time, O(1) space, doesn't modify original array."},{question:"How to find second largest using sorting?",answer:"Sort array ascending, then traverse from end to find first element different from largest."},{question:"What's the two-pass method?",answer:"First pass find largest, second pass find largest element less than first largest."},{question:"Can we find second largest using streams?",answer:"Yes: Arrays.stream(arr).boxed().sorted(Comparator.reverseOrder()).distinct().skip(1).findFirst()"},{question:"How to find third largest?",answer:"Extend the logic - track first, second, and third largest, updating all three appropriately."},{question:"What's the minimum number of comparisons needed?",answer:"n + log n - 2 comparisons using tournament method (optimal)."},{question:"How does tournament method work?",answer:"Compare elements in pairs, track winners and the elements that lost to the champion."},{question:"What's wrong with sorting to find second largest?",answer:"Sorting is O(n log n) vs O(n) optimal. Also modifies original array unless you copy."},{question:"How to find second largest in 2D array?",answer:"Flatten or traverse all elements tracking first and second largest across all rows and columns."},{question:"What if second largest doesn't exist?",answer:"Return Integer.MIN_VALUE or throw IllegalArgumentException based on requirements."},{question:"How to find second largest in ArrayList?",answer:"Same logic using list.get(i) and manual traversal, or Collections.sort() then find."},{question:"Why is single pass better than two-pass?",answer:"Single pass makes only one traversal (n comparisons) vs two traversals (2n comparisons)."},{question:"How to handle empty array?",answer:"Check array length first. If length < 2, return sentinel or throw exception."},{question:"Can we use priority queue to find second largest?",answer:"Yes, but O(n log k) where k=2, so O(n) with heap of size 2, but simpler to track variables."}];export{A as default};
