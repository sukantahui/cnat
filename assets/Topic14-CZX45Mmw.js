import{r as d,j as e}from"./index-CmAIoOXN.js";import{c as o}from"./clsx-B-dksMZM.js";import{T as s}from"./TeacherSukantaHui-1LCiMfJM.js";import{J as i}from"./JavaFileLoader-BTzcqr9I.js";import"./git-branch-AzLzm2E2.js";import"./JavaCodeBlock-BglY1nU3.js";import"./prism-6Oj8TI1J.js";import"./browser-n5DCIAUE.js";import"./prism-java-BwO6k4I_.js";const x=`import java.util.Arrays;\r
\r
public class FindLargestBasic {\r
    \r
    // Find maximum element in array\r
    public static int findMax(int[] arr) {\r
        // Handle empty array\r
        if (arr == null || arr.length == 0) {\r
            throw new IllegalArgumentException("Array cannot be empty");\r
        }\r
        \r
        int max = arr[0];  // Assume first element is largest\r
        \r
        // Start from index 1 (already compared index 0)\r
        for (int i = 1; i < arr.length; i++) {\r
            if (arr[i] > max) {\r
                max = arr[i];  // Found new maximum\r
            }\r
        }\r
        \r
        return max;\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] scores = {45, 67, 23, 89, 12, 78, 34};\r
        \r
        System.out.println("Array: " + Arrays.toString(scores));\r
        System.out.println("Largest element: " + findMax(scores));\r
        \r
        // Barrackpore school exam scores\r
        int[] examScores = {78, 92, 85, 96, 67, 88, 91};\r
        System.out.println("\\nExam scores: " + Arrays.toString(examScores));\r
        System.out.println("Highest score: " + findMax(examScores));\r
        \r
        // Negative numbers test\r
        int[] temperatures = {-5, -12, -3, -8, -1};\r
        System.out.println("\\nTemperatures: " + Arrays.toString(temperatures));\r
        System.out.println("Warmest: " + findMax(temperatures));\r
    }\r
}`,m=`import java.util.Arrays;\r
\r
public class FindLargestWithIndex {\r
    \r
    // Find maximum element and its index\r
    public static int findMaxIndex(int[] arr) {\r
        if (arr == null || arr.length == 0) {\r
            return -1;  // Return -1 for empty array\r
        }\r
        \r
        int maxIndex = 0;  // Start with first element\r
        \r
        for (int i = 1; i < arr.length; i++) {\r
            if (arr[i] > arr[maxIndex]) {\r
                maxIndex = i;  // Update index of maximum\r
            }\r
        }\r
        \r
        return maxIndex;\r
    }\r
    \r
    // Find maximum with detailed tracking\r
    public static void findMaxWithDetails(int[] arr) {\r
        if (arr == null || arr.length == 0) {\r
            System.out.println("Array is empty");\r
            return;\r
        }\r
        \r
        int max = arr[0];\r
        int maxIndex = 0;\r
        \r
        System.out.println("Starting search...");\r
        System.out.println("Initial max = " + max + " at index " + maxIndex);\r
        \r
        for (int i = 1; i < arr.length; i++) {\r
            System.out.println("Comparing arr[" + i + "] = " + arr[i] + " with max = " + max);\r
            \r
            if (arr[i] > max) {\r
                max = arr[i];\r
                maxIndex = i;\r
                System.out.println("  → New max found! Now max = " + max + " at index " + maxIndex);\r
            } else {\r
                System.out.println("  → No update");\r
            }\r
        }\r
        \r
        System.out.println("\\n✓ Maximum value: " + max);\r
        System.out.println("✓ Found at index: " + maxIndex);\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] scores = {45, 67, 23, 89, 12, 78, 34};\r
        \r
        System.out.println("Array: " + Arrays.toString(scores));\r
        \r
        int maxIdx = findMaxIndex(scores);\r
        System.out.println("Maximum value: " + scores[maxIdx]);\r
        System.out.println("Found at index: " + maxIdx);\r
        \r
        System.out.println("\\n" + "=".repeat(40));\r
        findMaxWithDetails(scores);\r
        \r
        // Student heights example\r
        int[] heights = {165, 172, 158, 180, 169, 175};\r
        System.out.println("\\nStudent heights: " + Arrays.toString(heights));\r
        int tallestIdx = findMaxIndex(heights);\r
        System.out.println("Tallest student height: " + heights[tallestIdx] + " cm");\r
        System.out.println("Position in array: " + tallestIdx);\r
    }\r
}`,c=`import java.util.Arrays;\r
\r
public class FindLargestMultiple {\r
    \r
    // Find top 3 largest elements\r
    public static void findTopThree(int[] arr) {\r
        if (arr == null || arr.length < 3) {\r
            System.out.println("Array needs at least 3 elements");\r
            return;\r
        }\r
        \r
        int first = Integer.MIN_VALUE;\r
        int second = Integer.MIN_VALUE;\r
        int third = Integer.MIN_VALUE;\r
        \r
        for (int num : arr) {\r
            if (num > first) {\r
                third = second;\r
                second = first;\r
                first = num;\r
            } else if (num > second && num != first) {\r
                third = second;\r
                second = num;\r
            } else if (num > third && num != second && num != first) {\r
                third = num;\r
            }\r
        }\r
        \r
        System.out.println("Top 3 largest: " + first + ", " + second + ", " + third);\r
    }\r
    \r
    // Find maximum using tournament style (compare in pairs)\r
    public static int findMaxTournament(int[] arr, int left, int right) {\r
        if (left == right) {\r
            return arr[left];\r
        }\r
        \r
        int mid = left + (right - left) / 2;\r
        int leftMax = findMaxTournament(arr, left, mid);\r
        int rightMax = findMaxTournament(arr, mid + 1, right);\r
        \r
        return Math.max(leftMax, rightMax);\r
    }\r
    \r
    // Find second largest in one pass\r
    public static void findFirstAndSecondMax(int[] arr) {\r
        if (arr == null || arr.length < 2) {\r
            System.out.println("Need at least 2 elements");\r
            return;\r
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
                second = num;\r
            }\r
        }\r
        \r
        System.out.println("Largest: " + first);\r
        System.out.println("Second largest: " + second);\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] scores = {45, 67, 23, 89, 12, 78, 34, 89, 56};\r
        \r
        System.out.println("Array: " + Arrays.toString(scores));\r
        \r
        System.out.println("\\n--- Top 3 Largest ---");\r
        findTopThree(scores);\r
        \r
        System.out.println("\\n--- Tournament Method ---");\r
        int max = findMaxTournament(scores, 0, scores.length - 1);\r
        System.out.println("Maximum (tournament): " + max);\r
        \r
        System.out.println("\\n--- First & Second Largest ---");\r
        findFirstAndSecondMax(scores);\r
        \r
        // Student scores from Barrackpore\r
        int[] studentScores = {85, 92, 78, 96, 88, 91, 84, 95};\r
        System.out.println("\\nBarrackpore School Scores: " + Arrays.toString(studentScores));\r
        findFirstAndSecondMax(studentScores);\r
    }\r
}`,h=`import java.util.Arrays;\r
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
public class FindLargestObjects {\r
    \r
    // Find max using Comparable\r
    public static <T extends Comparable<T>> T findMax(T[] arr) {\r
        if (arr == null || arr.length == 0) {\r
            return null;\r
        }\r
        \r
        T max = arr[0];\r
        for (int i = 1; i < arr.length; i++) {\r
            if (arr[i].compareTo(max) > 0) {\r
                max = arr[i];\r
            }\r
        }\r
        return max;\r
    }\r
    \r
    // Find max using custom Comparator\r
    public static <T> T findMax(T[] arr, Comparator<T> comp) {\r
        if (arr == null || arr.length == 0) {\r
            return null;\r
        }\r
        \r
        T max = arr[0];\r
        for (int i = 1; i < arr.length; i++) {\r
            if (comp.compare(arr[i], max) > 0) {\r
                max = arr[i];\r
            }\r
        }\r
        return max;\r
    }\r
    \r
    public static void main(String[] args) {\r
        // Student objects\r
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
        Student topper = findMax(students);\r
        System.out.println("\\nTopper: " + topper);\r
        \r
        // String array - find longest string\r
        String[] names = {"Swadeep", "Tuhina", "Abhronila", "Riddhiman", "Angshuman"};\r
        System.out.println("\\nNames: " + Arrays.toString(names));\r
        \r
        String longest = findMax(names, (a, b) -> Integer.compare(a.length(), b.length()));\r
        System.out.println("Longest name: " + longest);\r
        \r
        // Double array\r
        Double[] prices = {45.99, 67.50, 23.75, 89.99, 12.25, 78.30};\r
        System.out.println("\\nPrices: " + Arrays.toString(prices));\r
        System.out.println("Highest price: " + findMax(prices));\r
        \r
        // Custom object with different comparison\r
        System.out.println("\\nStudents by name length (longest first):");\r
        Student longestName = findMax(students, (a, b) -> Integer.compare(a.name.length(), b.name.length()));\r
        System.out.println("Student with longest name: " + longestName);\r
    }\r
}`,g=()=>{const[r,l]=d.useState(0),t=[{label:"Step 1: Initialize max = arr[0] = 45",array:[45,67,23,89,12,78,34],currentMax:45,currentIndex:0,comparing:-1},{label:"Step 2: Compare 67 with max (45) → 67 > 45, update max = 67",array:[45,67,23,89,12,78,34],currentMax:67,currentIndex:1,comparing:1},{label:"Step 3: Compare 23 with max (67) → 23 < 67, no change",array:[45,67,23,89,12,78,34],currentMax:67,currentIndex:2,comparing:2},{label:"Step 4: Compare 89 with max (67) → 89 > 67, update max = 89",array:[45,67,23,89,12,78,34],currentMax:89,currentIndex:3,comparing:3},{label:"Step 5: Compare 12 with max (89) → 12 < 89, no change",array:[45,67,23,89,12,78,34],currentMax:89,currentIndex:4,comparing:4},{label:"Step 6: Compare 78 with max (89) → 78 < 89, no change",array:[45,67,23,89,12,78,34],currentMax:89,currentIndex:5,comparing:5},{label:"Step 7: Compare 34 with max (89) → 34 < 89, no change",array:[45,67,23,89,12,78,34],currentMax:89,currentIndex:6,comparing:6},{label:"✓ Complete! Largest element is 89 at index 3",array:[45,67,23,89,12,78,34],currentMax:89,currentIndex:-1,comparing:-1}];return e.jsxs("div",{className:"w-full",children:[e.jsxs("svg",{viewBox:"0 0 900 350",className:"w-full h-auto max-w-5xl mx-auto my-4","aria-label":"Finding Largest Element Visualization",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"largestGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#f59e0b",stopOpacity:.1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#ef4444",stopOpacity:.2}})]}),e.jsx("filter",{id:"shadow",x:"-5%",y:"-5%",width:"110%",height:"110%",children:e.jsx("feDropShadow",{dx:"1",dy:"1",stdDeviation:"2",floodOpacity:"0.2"})}),e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#f59e0b"})})]}),e.jsx("text",{x:"450",y:"25",textAnchor:"middle",fill:"#1e293b","dark:text-gray-200":!0,fontSize:"14",fontWeight:"bold",children:t[r].label}),e.jsx("rect",{x:"50",y:"40",width:"200",height:"35",rx:"8",fill:"#fef3c7",stroke:"#f59e0b",strokeWidth:"2"}),e.jsxs("text",{x:"150",y:"62",textAnchor:"middle",fill:"#92400e",fontSize:"14",fontWeight:"bold",children:["Current MAX: ",t[r].currentMax]}),t[r].array.map((n,a)=>e.jsxs("g",{transform:`translate(${a*100+50}, 100)`,children:[e.jsxs("rect",{x:"0",y:"0",width:"80",height:"60",rx:"6",fill:n===t[r].currentMax&&t[r].currentMax!==45?"#fef3c7":"#ffffff",stroke:a===t[r].comparing?"#f59e0b":n===t[r].currentMax&&t[r].currentMax!==45?"#10b981":"#cbd5e1",strokeWidth:a===t[r].comparing?"3":"2",className:"transition-all duration-300 hover:shadow-lg",filter:"url(#shadow)",children:[a===t[r].comparing&&e.jsx("animate",{attributeName:"stroke",values:"#f59e0b;#ef4444;#f59e0b",dur:"0.8s",repeatCount:"indefinite"}),n===t[r].currentMax&&n!==45&&a!==t[r].comparing&&e.jsx("animate",{attributeName:"fill",values:"#fef3c7;#fde68a;#fef3c7",dur:"1s",repeatCount:"indefinite"})]}),e.jsx("text",{x:"40",y:"35",textAnchor:"middle",fill:"#1e293b",fontSize:"22",fontWeight:"bold",children:n}),e.jsxs("text",{x:"40",y:"78",textAnchor:"middle",fill:"#94a3b8",fontSize:"11",children:["index ",a]}),a===t[r].comparing&&e.jsxs("g",{children:[e.jsx("text",{x:"40",y:"-10",textAnchor:"middle",fill:"#f59e0b",fontSize:"11",fontWeight:"bold",children:"Comparing →"}),e.jsx("path",{d:"M 40 -3 L 40 0",stroke:"#f59e0b",strokeWidth:"2"})]}),n===t[r].currentMax&&n!==45&&a!==t[r].comparing&&t[r].currentMax!==89&&e.jsxs("g",{children:[e.jsx("text",{x:"40",y:"-10",textAnchor:"middle",fill:"#10b981",fontSize:"11",fontWeight:"bold",children:"✓ MAX"}),e.jsx("path",{d:"M 40 -3 L 40 0",stroke:"#10b981",strokeWidth:"2"})]}),n===89&&t[r].currentMax===89&&t[r].comparing===-1&&e.jsxs("g",{children:[e.jsx("text",{x:"40",y:"-10",textAnchor:"middle",fill:"#ef4444",fontSize:"12",fontWeight:"bold",children:"🏆 WINNER!"}),e.jsx("path",{d:"M 40 -3 L 40 0",stroke:"#ef4444",strokeWidth:"2"})]})]},a)),e.jsxs("g",{transform:"translate(50, 190)",children:[e.jsx("rect",{x:"0",y:"0",width:"800",height:"8",rx:"4",fill:"#e5e7eb"}),e.jsx("rect",{x:"0",y:"0",width:(r+1)*100,height:"8",rx:"4",fill:"#f59e0b",children:e.jsx("animate",{attributeName:"width",values:"0;800",dur:"2s",repeatCount:"indefinite"})})]}),e.jsxs("g",{transform:"translate(350, 260)",children:[e.jsx("rect",{x:"0",y:"0",width:"200",height:"35",rx:"8",fill:"#f59e0b",className:"cursor-pointer hover:fill-orange-600 transition-all duration-300"}),e.jsx("text",{x:"100",y:"24",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",className:"cursor-pointer",children:r<7?"Next Step →":"Reset"})]})]}),e.jsx("div",{className:"text-center mt-2",children:e.jsx("button",{onClick:()=>l((r+1)%8),className:"px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300",children:r<7?"Next Step (Step "+(r+2)+"/8)":"Reset Animation"})})]})},u=()=>e.jsx("svg",{viewBox:"0 0 600 400",className:"w-full h-auto max-w-2xl mx-auto my-4",children:e.jsxs("g",{transform:"translate(20, 20)",children:[e.jsx("ellipse",{cx:"280",cy:"20",rx:"40",ry:"20",fill:"#10b981"}),e.jsx("text",{x:"280",y:"25",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"START"}),e.jsx("line",{x1:"280",y1:"40",x2:"280",y2:"70",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"140",y:"70",width:"280",height:"45",rx:"8",fill:"#eff6ff",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"280",y:"97",textAnchor:"middle",fill:"#1e3a8a",fontSize:"13",fontWeight:"bold",children:"max = arr[0]"}),e.jsx("line",{x1:"280",y1:"115",x2:"280",y2:"145",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"140",y:"145",width:"280",height:"45",rx:"8",fill:"#fce7f3",stroke:"#ec4899",strokeWidth:"2"}),e.jsx("text",{x:"280",y:"172",textAnchor:"middle",fill:"#9d174d",fontSize:"13",fontWeight:"bold",children:"for i = 1 to n-1"}),e.jsx("line",{x1:"280",y1:"190",x2:"280",y2:"220",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("polygon",{points:"280,220 380,260 280,300 180,260",fill:"#fef3c7",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"280",y:"265",textAnchor:"middle",fill:"#92400e",fontSize:"12",fontWeight:"bold",children:"arr[i] > max?"}),e.jsx("line",{x1:"380",y1:"260",x2:"480",y2:"260",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"430",y:"253",textAnchor:"middle",fill:"#10b981",fontSize:"11",children:"YES"}),e.jsx("rect",{x:"480",y:"240",width:"100",height:"40",rx:"8",fill:"#dcfce7",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"530",y:"265",textAnchor:"middle",fill:"#166534",fontSize:"11",fontWeight:"bold",children:"max = arr[i]"}),e.jsx("line",{x1:"180",y1:"260",x2:"80",y2:"260",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"130",y:"253",textAnchor:"middle",fill:"#ef4444",fontSize:"11",children:"NO"}),e.jsx("rect",{x:"20",y:"240",width:"60",height:"40",rx:"8",fill:"#fee2e2",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"50",y:"265",textAnchor:"middle",fill:"#991b1b",fontSize:"11",fontWeight:"bold",children:"→"}),e.jsx("path",{d:"M 530 280 L 530 340 L 280 340 L 280 300",fill:"none",stroke:"#ec4899",strokeWidth:"2",strokeDasharray:"5,5",markerEnd:"url(#arrow)"}),e.jsx("path",{d:"M 50 280 L 50 360 L 280 360 L 280 300",fill:"none",stroke:"#ec4899",strokeWidth:"2",strokeDasharray:"5,5",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"180",y:"370",width:"200",height:"40",rx:"8",fill:"#dbeafe",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"280",y:"395",textAnchor:"middle",fill:"#1e3a8a",fontSize:"12",fontWeight:"bold",children:"Print max"}),e.jsx("line",{x1:"280",y1:"410",x2:"280",y2:"440",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("ellipse",{cx:"280",cy:"460",rx:"40",ry:"20",fill:"#ef4444"}),e.jsx("text",{x:"280",y:"465",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"END"})]})}),A=()=>{const[r,l]=d.useState("theory");return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"mb-8 text-center animate-[fadeInUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent mb-4",children:"Finding the Largest Element in an Array"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed",children:"Simple linear scan to find maximum value - the foundation of many algorithms"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700",children:["theory","visual","code","practice"].map(t=>e.jsx("button",{onClick:()=>l(t),className:o("px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-300",r===t?"bg-orange-50 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 border-b-2 border-orange-600":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"),children:t.charAt(0).toUpperCase()+t.slice(1)},t))}),e.jsxs("div",{className:"space-y-6",children:[r==="theory"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center",children:[e.jsx("span",{className:"bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold",children:"1"}),"Finding Maximum Element"]}),e.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-4",children:["Finding the largest element in an array is a ",e.jsx("strong",{className:"text-orange-600 dark:text-orange-400",children:"fundamental linear search operation"})," that scans through all elements while keeping track of the current maximum. It's a ",e.jsx("strong",{className:"text-orange-600 dark:text-orange-400",children:"single-pass algorithm"})," with O(n) time complexity."]}),e.jsx("div",{className:"bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg mb-4",children:e.jsxs("p",{className:"text-sm text-orange-800 dark:text-orange-200 font-mono",children:[e.jsx("strong",{children:"Prototype:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"public static int findMax(int[] arr)"}),e.jsx("br",{}),e.jsx("strong",{children:"Return Type:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"int"})," (maximum value)",e.jsx("br",{}),e.jsx("strong",{children:"Purpose:"})," Find the largest value in any array (sorted or unsorted)",e.jsx("br",{}),e.jsx("strong",{children:"Time Complexity:"})," O(n) - must check every element"]})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚙️ How It Works"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-3 text-gray-600 dark:text-gray-300",children:[e.jsxs("p",{children:["1️⃣ ",e.jsx("strong",{children:"Initialize"})," max = arr[0] (assume first element is largest)"]}),e.jsxs("p",{children:["2️⃣ ",e.jsx("strong",{children:"Traverse"})," array from index 1 to n-1"]}),e.jsxs("p",{children:["3️⃣ ",e.jsx("strong",{children:"Compare"})," each element with current max"]}),e.jsxs("p",{children:["4️⃣ ",e.jsx("strong",{children:"Update max"})," if current element is larger"]}),e.jsxs("p",{children:["5️⃣ ",e.jsx("strong",{children:"After loop"}),", max contains the largest value"]}),e.jsxs("p",{children:["6️⃣ ",e.jsx("strong",{children:"Optional"})," - Track index of max element"]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Analogy"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Finding tallest student:"}),e.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-300 mt-2 list-disc list-inside",children:[e.jsx("li",{children:"Start with first student's height as tallest"}),e.jsx("li",{children:"Check each student one by one"}),e.jsx("li",{children:"If taller found, update tallest"}),e.jsx("li",{children:"After checking all, you know the tallest!"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🌍 Real-World Examples"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"📊 Highest Exam Score"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Teacher Sukanta Hui scanning class scores to find topper - Nandini scored 98%!"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"🌡️ Maximum Temperature"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Weather app scanning week's temperatures to find hottest day in Barrackpore."})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"💰 Highest Transaction"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Bank scanning monthly transactions to find largest purchase amount."})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"🏃 Fastest Race Time"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Sports meet scanning runner times to find winner (smallest time)."})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📊 Complexity Analysis"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[e.jsxs("div",{className:"text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Best Case"}),e.jsx("p",{className:"text-xl font-bold text-green-600",children:"O(n)"}),e.jsx("p",{className:"text-xs",children:"Still check all elements"})]}),e.jsxs("div",{className:"text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Average Case"}),e.jsx("p",{className:"text-xl font-bold text-yellow-600",children:"O(n)"}),e.jsx("p",{className:"text-xs",children:"n comparisons"})]}),e.jsxs("div",{className:"text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Worst Case"}),e.jsx("p",{className:"text-xl font-bold text-red-600",children:"O(n)"}),e.jsx("p",{className:"text-xs",children:"n comparisons"})]}),e.jsxs("div",{className:"text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Space"}),e.jsx("p",{className:"text-xl font-bold text-blue-600",children:"O(1)"}),e.jsx("p",{className:"text-xs",children:"Only 1 variable"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚠️ Edge Cases to Consider"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-yellow-800",children:"Single element array"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Returns that element directly"})]}),e.jsxs("div",{className:"p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-yellow-800",children:"All elements equal"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Returns the value (any works)"})]}),e.jsxs("div",{className:"p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-yellow-800",children:"Negative numbers"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Works fine - compares correctly"})]}),e.jsxs("div",{className:"p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-yellow-800",children:"Empty array"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Should throw exception or return special value"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"💡 Tips & Tricks"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Start from index 1:"})," No need to compare first element with itself"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Track index too:"})," Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"maxIndex"})," if position matters"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Handle empty array:"})," Always check ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"if (arr == null || arr.length == 0)"})]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Use Integer.MIN_VALUE:"})," Alternative initialization for empty check"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"For objects:"})," Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"compareTo()"})," or ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"Comparator"})]})]})]}),e.jsx(s,{note:"Finding max is the 'Hello World' of array processing! I tell students: 'Think of it as a tournament - the champion emerges by defeating all challengers.' This algorithm appears everywhere - from game high scores to data analytics. Master this simple pattern and you've learned 80% of array processing!"})]}),r==="visual"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"👁️ Visual Walkthrough"}),e.jsx(g,{}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-4",children:"Watch how the maximum value updates as we scan through the array"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📐 Algorithm Flowchart"}),e.jsx(u,{})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📊 Finding Max vs Other Operations"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-700/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 text-left text-sm font-semibold",children:"Operation"}),e.jsx("th",{className:"px-4 py-2 text-left text-sm font-semibold",children:"Time Complexity"}),e.jsx("th",{className:"px-4 py-2 text-left text-sm font-semibold",children:"Space"}),e.jsx("th",{className:"px-4 py-2 text-left text-sm font-semibold",children:"Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsxs("tr",{className:"bg-orange-50 dark:bg-orange-900/10",children:[e.jsx("td",{className:"px-4 py-2 text-sm font-semibold",children:"Find Maximum"}),e.jsx("td",{className:"px-4 py-2 text-sm",children:"O(n)"}),e.jsx("td",{className:"px-4 py-2 text-sm",children:"O(1)"}),e.jsx("td",{className:"px-4 py-2 text-sm",children:"Single pass scan"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 text-sm font-semibold",children:"Find Minimum"}),e.jsx("td",{className:"px-4 py-2 text-sm",children:"O(n)"}),e.jsx("td",{className:"px-4 py-2 text-sm",children:"O(1)"}),e.jsx("td",{className:"px-4 py-2 text-sm",children:"Similar logic"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 text-sm font-semibold",children:"Find Both Min & Max"}),e.jsx("td",{className:"px-4 py-2 text-sm",children:"O(n)"}),e.jsx("td",{className:"px-4 py-2 text-sm",children:"O(1)"}),e.jsx("td",{className:"px-4 py-2 text-sm",children:"Track both together"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2 text-sm font-semibold",children:"Sort & Get Max"}),e.jsx("td",{className:"px-4 py-2 text-sm",children:"O(n log n)"}),e.jsx("td",{className:"px-4 py-2 text-sm",children:"O(n)"}),e.jsx("td",{className:"px-4 py-2 text-sm",children:"Overkill!"})]})]})]})})]}),e.jsx(s,{note:"The visual animation clearly shows the 'max' variable evolving. I have students predict when max will update - this builds intuition. Compare with finding minimum - they'll see it's just flipping the comparison operator!"})]}),r==="code"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(i,{fileModule:x,title:"FindLargestBasic.java",highlightLines:[]}),e.jsx(i,{fileModule:m,title:"FindLargestWithIndex.java",highlightLines:[]}),e.jsx(i,{fileModule:c,title:"FindLargestMultiple.java",highlightLines:[]}),e.jsx(i,{fileModule:h,title:"FindLargestObjects.java",highlightLines:[]})]})]}),e.jsx(s,{note:"Start with the basic version, then add index tracking. Show how to handle edge cases like empty arrays. The 'tournament' approach (comparing in pairs) is a great extension for advanced students - it reduces comparisons!"})]}),r==="practice"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Starting loop at index 0"}),e.jsx("p",{className:"text-sm",children:"Comparing arr[0] with itself - unnecessary comparison, but works"})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Not handling empty array"}),e.jsx("p",{className:"text-sm",children:"Accessing arr[0] on empty array causes ArrayIndexOutOfBoundsException"})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Using >= instead of >"}),e.jsx("p",{className:"text-sm",children:"For duplicate max values, last occurrence becomes max with >="})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"✅ Best Practices"}),e.jsxs("ul",{className:"space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside",children:[e.jsx("li",{children:"Always check for null and empty array before processing"}),e.jsxs("li",{children:["Use ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"Integer.MIN_VALUE"})," for generic initialization"]}),e.jsx("li",{children:"Consider returning index instead of value when position matters"}),e.jsx("li",{children:"Document behavior for empty arrays (exception or special return)"}),e.jsxs("li",{children:["Use meaningful variable names: ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"maxValue"})," not ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"m"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"💭 Think About..."}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"🤔 How would you find the second largest element?"}),e.jsx("li",{children:"🤔 Can we find max with fewer than n comparisons?"}),e.jsx("li",{children:"🤔 How would you find the maximum absolute value?"}),e.jsx("li",{children:"🤔 What's the difference between finding max in sorted vs unsorted array?"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🎯 Questions & Answers"}),e.jsx("div",{className:"space-y-4",children:p.map((t,n)=>e.jsxs("details",{className:"group border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("summary",{className:"cursor-pointer p-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:t.question}),e.jsx("div",{className:"p-4 pt-0 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700",children:t.answer})]},n))})]}),e.jsx(s,{note:"Finding max is deceptively simple but teaches core concepts: initialization, traversal, comparison, and state tracking. Have students modify the code to find min, then both min and max in one pass. This builds confidence before tackling more complex algorithms!"})]})]})]}),e.jsx("style",{children:`
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
      `})]})},p=[{question:"What is the time complexity of finding maximum in an array?",answer:"O(n) - must examine every element to ensure we found the largest value."},{question:"Why do we initialize max with arr[0]?",answer:"To have a starting point for comparison. If array has at least one element, arr[0] is a valid starting maximum."},{question:"What if array has only one element?",answer:"The loop doesn't execute, and max (initialized to arr[0]) correctly returns that element."},{question:"How to handle empty array?",answer:"Check arr == null || arr.length == 0 first. Either throw IllegalArgumentException or return Integer.MIN_VALUE."},{question:"How to find both maximum and minimum in one pass?",answer:"Track both max and min simultaneously, updating both as you traverse the array once."},{question:"What's the space complexity of finding maximum?",answer:"O(1) - only uses a few variables regardless of array size."},{question:"Can we find maximum in sorted array faster?",answer:"If ascending, max is last element O(1). If descending, max is first element O(1)."},{question:"How to find maximum using streams?",answer:"Arrays.stream(arr).max().getAsInt() - but still O(n) internally."},{question:"What's wrong with initializing max = 0?",answer:"Fails if all numbers are negative - max would incorrectly remain 0."},{question:"How to find maximum absolute value?",answer:"Compare Math.abs(arr[i]) instead of arr[i] directly, but careful with sign."},{question:"How to find second largest element?",answer:"Track both largest and second largest during single pass, updating both appropriately."},{question:"What's the best case for finding maximum?",answer:"Still O(n) - you always need to verify no larger element exists later in array."},{question:"How to find maximum in 2D array?",answer:"Nested loops - outer for rows, inner for columns, update max when larger found."},{question:"Can we use divide and conquer to find max?",answer:"Yes - split array, find max in left and right halves, return larger. Still O(n) but uses recursion."},{question:"How to find top 3 maximum values?",answer:"Track three variables: first, second, third max. Update accordingly when larger found."},{question:"What's the difference between max and maximum?",answer:"Same concept - 'max' is commonly used abbreviation for maximum."},{question:"How to find max in ArrayList?",answer:"Collections.max(list) or manual loop with list.get(i)."},{question:"Why can't we use sorting to find max?",answer:"We can, but sorting is O(n log n) - slower than direct O(n) scan."},{question:"How to find max of custom objects?",answer:"Implement Comparable interface and use compareTo(), or provide Comparator."},{question:"What's the tournament method for finding max?",answer:"Compare elements in pairs, winners compete again - reduces comparisons to n-1."}];export{A as default};
