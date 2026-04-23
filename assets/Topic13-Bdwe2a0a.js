import{r as o,j as e}from"./index-CmAIoOXN.js";import{c as l}from"./clsx-B-dksMZM.js";import{T as i}from"./TeacherSukantaHui-1LCiMfJM.js";import{J as d}from"./JavaFileLoader-BTzcqr9I.js";import"./git-branch-AzLzm2E2.js";import"./JavaCodeBlock-BglY1nU3.js";import"./prism-6Oj8TI1J.js";import"./browser-n5DCIAUE.js";import"./prism-java-BwO6k4I_.js";const c=`import java.util.Arrays;\r
\r
public class SelectionSortDescending {\r
    \r
    // Basic descending selection sort\r
    public static void selectionSortDescending(int[] arr) {\r
        int n = arr.length;\r
        \r
        for (int i = 0; i < n - 1; i++) {\r
            // Find maximum element in unsorted portion\r
            int maxIndex = i;\r
            \r
            for (int j = i + 1; j < n; j++) {\r
                if (arr[j] > arr[maxIndex]) {  // Note: > for descending\r
                    maxIndex = j;\r
                }\r
            }\r
            \r
            // Swap maximum with first element of unsorted portion\r
            if (maxIndex != i) {\r
                int temp = arr[i];\r
                arr[i] = arr[maxIndex];\r
                arr[maxIndex] = temp;\r
            }\r
        }\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] numbers = {64, 25, 12, 22, 11, 90, 34};\r
        \r
        System.out.println("Original array: " + Arrays.toString(numbers));\r
        selectionSortDescending(numbers);\r
        System.out.println("Descending order: " + Arrays.toString(numbers));\r
        \r
        // Barrackpore school highest scores first\r
        int[] scores = {78, 92, 85, 96, 67, 88, 91};\r
        System.out.println("\\nStudent scores: " + Arrays.toString(scores));\r
        selectionSortDescending(scores);\r
        System.out.println("Ranked (highest first): " + Arrays.toString(scores));\r
    }\r
}`,x=`import java.util.Arrays;\r
\r
public class SelectionSortDescendingOptimized {\r
    \r
    // Optimized descending selection sort with statistics\r
    public static void selectionSortDescending(int[] arr) {\r
        int n = arr.length;\r
        int comparisons = 0;\r
        int swaps = 0;\r
        \r
        for (int i = 0; i < n - 1; i++) {\r
            int maxIndex = i;\r
            \r
            for (int j = i + 1; j < n; j++) {\r
                comparisons++;\r
                if (arr[j] > arr[maxIndex]) {\r
                    maxIndex = j;\r
                }\r
            }\r
            \r
            // Only swap if needed\r
            if (maxIndex != i) {\r
                swaps++;\r
                int temp = arr[i];\r
                arr[i] = arr[maxIndex];\r
                arr[maxIndex] = temp;\r
            }\r
            \r
            System.out.println("After pass " + (i + 1) + ": " + Arrays.toString(arr));\r
        }\r
        \r
        System.out.println("\\nTotal comparisons: " + comparisons);\r
        System.out.println("Total swaps: " + swaps);\r
    }\r
    \r
    // Find top k largest elements using selection sort concept\r
    public static int[] findTopK(int[] arr, int k) {\r
        if (k < 1 || k > arr.length) {\r
            throw new IllegalArgumentException("Invalid k value");\r
        }\r
        \r
        int[] result = arr.clone();\r
        \r
        // Run only k passes of descending selection sort\r
        for (int i = 0; i < k; i++) {\r
            int maxIndex = i;\r
            for (int j = i + 1; j < result.length; j++) {\r
                if (result[j] > result[maxIndex]) {\r
                    maxIndex = j;\r
                }\r
            }\r
            int temp = result[i];\r
            result[i] = result[maxIndex];\r
            result[maxIndex] = temp;\r
        }\r
        \r
        return Arrays.copyOf(result, k);\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] scores = {64, 25, 12, 22, 11, 90, 34};\r
        \r
        System.out.println("Original: " + Arrays.toString(scores));\r
        selectionSortDescending(scores.clone());\r
        \r
        // Find top 3 scores\r
        int[] top3 = findTopK(scores, 3);\r
        System.out.println("\\nTop 3 scores: " + Arrays.toString(top3));\r
        \r
        // Student percentages\r
        int[] percentages = {85, 92, 78, 96, 88, 91, 84};\r
        System.out.println("\\nAll percentages: " + Arrays.toString(percentages));\r
        selectionSortDescending(percentages);\r
        System.out.println("Ranked percentages: " + Arrays.toString(percentages));\r
    }\r
}`,m=`import java.util.Arrays;\r
\r
public class SelectionSortDescendingStepByStep {\r
    \r
    // Descending selection sort with detailed logging\r
    public static void selectionSortDescendingWithTrace(int[] arr) {\r
        int n = arr.length;\r
        \r
        System.out.println("Starting Descending Selection Sort...\\n");\r
        System.out.println("Initial array: " + Arrays.toString(arr));\r
        System.out.println();\r
        \r
        for (int i = 0; i < n - 1; i++) {\r
            System.out.println("Pass " + (i + 1) + ":");\r
            System.out.println("  Looking for MAXIMUM in indices [" + i + " to " + (n-1) + "]");\r
            \r
            int maxIndex = i;\r
            \r
            for (int j = i + 1; j < n; j++) {\r
                System.out.println("    Compare arr[" + j + "]=" + arr[j] + \r
                                 " with arr[" + maxIndex + "]=" + arr[maxIndex]);\r
                \r
                if (arr[j] > arr[maxIndex]) {\r
                    System.out.println("    → New maximum found at index " + j + " (value " + arr[j] + ")");\r
                    maxIndex = j;\r
                }\r
            }\r
            \r
            System.out.println("  Maximum element: " + arr[maxIndex] + " at index " + maxIndex);\r
            \r
            if (maxIndex != i) {\r
                System.out.println("  Swapping arr[" + i + "]=" + arr[i] + \r
                                 " with arr[" + maxIndex + "]=" + arr[maxIndex]);\r
                int temp = arr[i];\r
                arr[i] = arr[maxIndex];\r
                arr[maxIndex] = temp;\r
            } else {\r
                System.out.println("  No swap needed (max already at correct position)");\r
            }\r
            \r
            System.out.println("  Array after pass " + (i + 1) + ": " + Arrays.toString(arr));\r
            System.out.println();\r
        }\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] numbers = {64, 25, 12, 22, 11, 90, 34};\r
        \r
        System.out.println("Target: Sort in descending order (largest to smallest)");\r
        System.out.println("Original: " + Arrays.toString(numbers));\r
        System.out.println();\r
        \r
        selectionSortDescendingWithTrace(numbers);\r
        \r
        System.out.println("Final sorted array: " + Arrays.toString(numbers));\r
    }\r
}`,g=`import java.util.Arrays;\r
import java.util.Comparator;\r
\r
class Employee implements Comparable<Employee> {\r
    String name;\r
    double salary;\r
    \r
    Employee(String name, double salary) {\r
        this.name = name;\r
        this.salary = salary;\r
    }\r
    \r
    @Override\r
    public int compareTo(Employee other) {\r
        return Double.compare(this.salary, other.salary);\r
    }\r
    \r
    @Override\r
    public String toString() {\r
        return name + " (₹" + salary + ")";\r
    }\r
}\r
\r
public class SelectionSortDescendingObjects {\r
    \r
    // Generic descending selection sort for Comparable objects\r
    public static <T extends Comparable<T>> void selectionSortDescending(T[] arr) {\r
        int n = arr.length;\r
        \r
        for (int i = 0; i < n - 1; i++) {\r
            int maxIndex = i;\r
            \r
            for (int j = i + 1; j < n; j++) {\r
                // Note: compareTo > 0 for descending\r
                if (arr[j].compareTo(arr[maxIndex]) > 0) {\r
                    maxIndex = j;\r
                }\r
            }\r
            \r
            if (maxIndex != i) {\r
                T temp = arr[i];\r
                arr[i] = arr[maxIndex];\r
                arr[maxIndex] = temp;\r
            }\r
        }\r
    }\r
    \r
    // Selection sort with custom comparator for descending order\r
    public static <T> void selectionSortDescending(T[] arr, Comparator<T> comp) {\r
        int n = arr.length;\r
        \r
        for (int i = 0; i < n - 1; i++) {\r
            int maxIndex = i;\r
            \r
            for (int j = i + 1; j < n; j++) {\r
                if (comp.compare(arr[j], arr[maxIndex]) > 0) {\r
                    maxIndex = j;\r
                }\r
            }\r
            \r
            if (maxIndex != i) {\r
                T temp = arr[i];\r
                arr[i] = arr[maxIndex];\r
                arr[maxIndex] = temp;\r
            }\r
        }\r
    }\r
    \r
    public static void main(String[] args) {\r
        // Employee salaries - Barrackpore company\r
        Employee[] employees = {\r
            new Employee("Swadeep", 50000),\r
            new Employee("Tuhina", 75000),\r
            new Employee("Abhronila", 60000),\r
            new Employee("Nandini", 85000),\r
            new Employee("Riddhiman", 70000)\r
        };\r
        \r
        System.out.println("Original employees:");\r
        for (Employee e : employees) {\r
            System.out.println("  " + e);\r
        }\r
        \r
        selectionSortDescending(employees);\r
        \r
        System.out.println("\\nSorted by salary (highest first):");\r
        for (Employee e : employees) {\r
            System.out.println("  " + e);\r
        }\r
        \r
        // String array - cities\r
        String[] cities = {"Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Kolkata"};\r
        System.out.println("\\nOriginal cities: " + Arrays.toString(cities));\r
        selectionSortDescending(cities);\r
        System.out.println("Descending alphabetical: " + Arrays.toString(cities));\r
        \r
        // Using custom comparator for string length (descending)\r
        String[] names = {"Swadeep", "Tuhina", "Abhronila", "Nandini"};\r
        System.out.println("\\nNames by length (descending):");\r
        System.out.println("Original: " + Arrays.toString(names));\r
        selectionSortDescending(names, (a, b) -> Integer.compare(b.length(), a.length()));\r
        System.out.println("By length desc: " + Arrays.toString(names));\r
    }\r
}`,h=()=>{const[r,t]=o.useState(0),s=[{label:"Pass 1: Find maximum from indices 0-6 → 90 at index 5",array:[64,25,12,22,11,90,34],maxIndex:5,swapIndices:[0,5]},{label:"Pass 2: Find maximum from indices 1-6 → 64 at index 4",array:[90,25,12,22,11,64,34],maxIndex:4,swapIndices:[1,4]},{label:"Pass 3: Find maximum from indices 2-6 → 34 at index 6",array:[90,64,12,22,11,25,34],maxIndex:6,swapIndices:[2,6]},{label:"Pass 4: Find maximum from indices 3-6 → 25 at index 5",array:[90,64,34,22,11,25,12],maxIndex:5,swapIndices:[3,5]},{label:"Pass 5: Find maximum from indices 4-6 → 22 at index 4",array:[90,64,34,25,11,22,12],maxIndex:4,swapIndices:[4,4]},{label:"Pass 6: Find maximum from indices 5-6 → 12 at index 6",array:[90,64,34,25,22,11,12],maxIndex:6,swapIndices:[5,6]},{label:"Pass 7: Final sorted descending array!",array:[90,64,34,25,22,12,11],maxIndex:-1,swapIndices:[]}];return e.jsxs("div",{className:"w-full",children:[e.jsxs("svg",{viewBox:"0 0 900 320",className:"w-full h-auto max-w-5xl mx-auto my-4","aria-label":"Descending Selection Sort Visualization",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"selectionDescGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#f43f5e",stopOpacity:.1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#ec4899",stopOpacity:.2}})]}),e.jsx("filter",{id:"shadow",x:"-5%",y:"-5%",width:"110%",height:"110%",children:e.jsx("feDropShadow",{dx:"1",dy:"1",stdDeviation:"2",floodOpacity:"0.2"})}),e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#f43f5e"})})]}),e.jsx("text",{x:"450",y:"25",textAnchor:"middle",fill:"#1e293b","dark:text-gray-200":!0,fontSize:"14",fontWeight:"bold",children:s[r].label}),e.jsx("rect",{x:"50",y:"40",width:r*110+60,height:"4",rx:"2",fill:"#10b981"}),e.jsx("text",{x:"50",y:"35",fill:"#10b981",fontSize:"11",fontWeight:"bold",children:"✓ Sorted Region (Largest First)"}),e.jsxs("g",{transform:"translate(380, 55)",children:[e.jsx("path",{d:"M 0 0 L 20 15 L 0 30",fill:"none",stroke:"#f43f5e",strokeWidth:"2"}),e.jsx("text",{x:"25",y:"20",fill:"#f43f5e",fontSize:"11",fontWeight:"bold",children:"Largest →"})]}),s[r].array.map((a,n)=>e.jsxs("g",{transform:`translate(${n*110+50}, 80)`,children:[e.jsx("rect",{x:"0",y:"0",width:"90",height:"60",rx:"6",fill:n<r?"#dcfce7":"#ffffff",stroke:n===s[r].maxIndex?"#f59e0b":n<r?"#10b981":"#f43f5e",strokeWidth:n===s[r].maxIndex?"4":"2",className:"transition-all duration-300 hover:shadow-lg",filter:"url(#shadow)",children:n===s[r].maxIndex&&e.jsx("animate",{attributeName:"stroke",values:"#f59e0b;#f43f5e;#f59e0b",dur:"1s",repeatCount:"indefinite"})}),e.jsx("text",{x:"45",y:"35",textAnchor:"middle",fill:"#1e293b",fontSize:"20",fontWeight:"bold",children:a}),e.jsxs("text",{x:"45",y:"78",textAnchor:"middle",fill:"#94a3b8",fontSize:"11",children:["index ",n]}),n===s[r].maxIndex&&e.jsxs("g",{children:[e.jsx("text",{x:"45",y:"-10",textAnchor:"middle",fill:"#f59e0b",fontSize:"12",fontWeight:"bold",children:"✓ MAX"}),e.jsx("path",{d:"M 45 -5 L 45 0",stroke:"#f59e0b",strokeWidth:"2"})]}),n===r&&n<s[r].array.length-1&&e.jsxs("g",{children:[e.jsx("text",{x:"45",y:"95",textAnchor:"middle",fill:"#f43f5e",fontSize:"11",children:"position"}),e.jsx("path",{d:"M 45 90 L 45 85",stroke:"#f43f5e",strokeWidth:"2"})]})]},n)),s[r].swapIndices.length===2&&s[r].swapIndices[0]!==s[r].swapIndices[1]&&e.jsxs("g",{children:[e.jsx("path",{d:`M ${s[r].swapIndices[0]*110+95} 110 Q ${(s[r].swapIndices[0]+s[r].swapIndices[1])*55+95} 150 ${s[r].swapIndices[1]*110+95} 110`,fill:"none",stroke:"#f59e0b",strokeWidth:"2",strokeDasharray:"5,5",markerEnd:"url(#arrowhead)",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;10",dur:"0.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:450,y:"165",textAnchor:"middle",fill:"#f59e0b",fontSize:"12",fontWeight:"bold",children:"SWAP"})]}),e.jsxs("g",{transform:"translate(350, 240)",children:[e.jsx("rect",{x:"0",y:"0",width:"200",height:"35",rx:"8",fill:"#f43f5e",className:"cursor-pointer hover:fill-rose-600 transition-all duration-300"}),e.jsx("text",{x:"100",y:"24",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",className:"cursor-pointer",children:r<6?"Next Pass →":"Reset"})]})]}),e.jsx("div",{className:"text-center mt-2",children:e.jsx("button",{onClick:()=>t((r+1)%7),className:"px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-all duration-300",children:r<6?"Next Pass (Step "+(r+2)+"/7)":"Reset Animation"})})]})},p=()=>e.jsxs("svg",{viewBox:"0 0 700 300",className:"w-full h-auto max-w-3xl mx-auto my-4",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),e.jsx("rect",{x:"50",y:"20",width:"280",height:"250",rx:"8",fill:"#dbeafe",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"190",y:"50",textAnchor:"middle",fill:"#1e3a8a",fontSize:"16",fontWeight:"bold",children:"Ascending Selection"}),e.jsx("text",{x:"190",y:"75",textAnchor:"middle",fill:"#3b82f6",fontSize:"12",children:"Find MINIMUM each pass"}),e.jsx("g",{transform:"translate(70, 100)",children:[11,12,22,25,34,64,90].map((r,t)=>e.jsxs("g",{transform:`translate(${t*38}, 0)`,children:[e.jsx("rect",{x:"0",y:"0",width:"32",height:"40",rx:"4",fill:"#eff6ff",stroke:"#3b82f6",strokeWidth:"1.5"}),e.jsx("text",{x:"16",y:"25",textAnchor:"middle",fill:"#1e3a8a",fontSize:"11",fontWeight:"bold",children:r})]},t))}),e.jsx("text",{x:"190",y:"175",textAnchor:"middle",fill:"#1e3a8a",fontSize:"12",children:"Smallest → Largest"}),e.jsx("path",{d:"M 80 195 L 300 195",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"190",y:"215",textAnchor:"middle",fill:"#3b82f6",fontSize:"11",children:"Increasing order"}),e.jsx("text",{x:"190",y:"240",textAnchor:"middle",fill:"#3b82f6",fontSize:"11",children:"Find min each pass"}),e.jsx("rect",{x:"370",y:"20",width:"280",height:"250",rx:"8",fill:"#fce7f3",stroke:"#ec4899",strokeWidth:"2"}),e.jsx("text",{x:"510",y:"50",textAnchor:"middle",fill:"#831843",fontSize:"16",fontWeight:"bold",children:"Descending Selection"}),e.jsx("text",{x:"510",y:"75",textAnchor:"middle",fill:"#ec4899",fontSize:"12",children:"Find MAXIMUM each pass"}),e.jsx("g",{transform:"translate(390, 100)",children:[90,64,34,25,22,12,11].map((r,t)=>e.jsxs("g",{transform:`translate(${t*38}, 0)`,children:[e.jsx("rect",{x:"0",y:"0",width:"32",height:"40",rx:"4",fill:"#fdf2f8",stroke:"#ec4899",strokeWidth:"1.5"}),e.jsx("text",{x:"16",y:"25",textAnchor:"middle",fill:"#831843",fontSize:"11",fontWeight:"bold",children:r})]},t))}),e.jsx("text",{x:"510",y:"175",textAnchor:"middle",fill:"#831843",fontSize:"12",children:"Largest → Smallest"}),e.jsx("path",{d:"M 400 195 L 620 195",stroke:"#ec4899",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"510",y:"215",textAnchor:"middle",fill:"#ec4899",fontSize:"11",children:"Decreasing order"}),e.jsx("text",{x:"510",y:"240",textAnchor:"middle",fill:"#ec4899",fontSize:"11",children:"Find max each pass"}),e.jsx("rect",{x:"290",y:"230",width:"120",height:"30",rx:"15",fill:"#f59e0b"}),e.jsx("text",{x:"350",y:"250",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"min → max"})]}),I=()=>{const[r,t]=o.useState("theory");return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"mb-8 text-center animate-[fadeInUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 dark:from-rose-400 dark:to-pink-400 bg-clip-text text-transparent mb-4",children:"Selection Sort - Descending Order"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed",children:"Selecting the maximum element and placing it at the beginning - sorting from largest to smallest"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700",children:["theory","visual","code","practice"].map(s=>e.jsx("button",{onClick:()=>t(s),className:l("px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-300",r===s?"bg-rose-50 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 border-b-2 border-rose-600":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"),children:s.charAt(0).toUpperCase()+s.slice(1)},s))}),e.jsxs("div",{className:"space-y-6",children:[r==="theory"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center",children:[e.jsx("span",{className:"bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold",children:"1"}),"Descending Order Selection Sort"]}),e.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-4",children:["Descending selection sort is ",e.jsx("strong",{className:"text-rose-600 dark:text-rose-400",children:"identical to ascending selection sort"})," except it selects the ",e.jsx("strong",{className:"text-rose-600 dark:text-rose-400",children:"maximum element"})," instead of the minimum. The largest element is placed at the beginning, then the second largest, and so on."]}),e.jsx("div",{className:"bg-rose-50 dark:bg-rose-900/30 p-4 rounded-lg mb-4",children:e.jsxs("p",{className:"text-sm text-rose-800 dark:text-rose-200 font-mono",children:[e.jsx("strong",{children:"Prototype:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"public static void selectionSortDescending(int[] arr)"}),e.jsx("br",{}),e.jsx("strong",{children:"Return Type:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"void"})," (sorts in-place)",e.jsx("br",{}),e.jsx("strong",{children:"Key Difference:"})," Find maximum instead of minimum, swap condition changes from ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"<"})," to ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:">"})]})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🔄 Ascending vs Descending Selection Sort"}),e.jsx(p,{}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-blue-800 dark:text-blue-300 mb-2",children:"Ascending Order"}),e.jsx("code",{className:"block bg-gray-900 text-green-400 p-2 rounded text-sm",children:`for (int i = 0; i < n-1; i++) {
    int minIndex = i;
    for (int j = i+1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;  // Find MINIMUM
        }
    }
    swap(arr[i], arr[minIndex]);
}`}),e.jsx("p",{className:"text-sm text-blue-700 dark:text-blue-300 mt-2",children:"Smallest first → grows left to right"})]}),e.jsxs("div",{className:"bg-rose-50 dark:bg-rose-900/20 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-rose-800 dark:text-rose-300 mb-2",children:"Descending Order"}),e.jsx("code",{className:"block bg-gray-900 text-green-400 p-2 rounded text-sm",children:`for (int i = 0; i < n-1; i++) {
    int maxIndex = i;
    for (int j = i+1; j < n; j++) {
        if (arr[j] > arr[maxIndex]) {
            maxIndex = j;  // Find MAXIMUM
        }
    }
    swap(arr[i], arr[maxIndex]);
}`}),e.jsx("p",{className:"text-sm text-rose-700 dark:text-rose-300 mt-2",children:"Largest first → grows left to right"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚙️ How Descending Selection Sort Works"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-3 text-gray-600 dark:text-gray-300",children:[e.jsxs("p",{children:["1️⃣ ",e.jsx("strong",{children:"Divide"})," array into sorted (left) and unsorted (right) regions"]}),e.jsxs("p",{children:["2️⃣ ",e.jsx("strong",{children:"Find maximum"})," element in unsorted region"]}),e.jsxs("p",{children:["3️⃣ ",e.jsx("strong",{children:"Swap maximum"})," with first element of unsorted region"]}),e.jsxs("p",{children:["4️⃣ ",e.jsx("strong",{children:"Expand"})," sorted region by one element (now contains largest)"]}),e.jsxs("p",{children:["5️⃣ ",e.jsx("strong",{children:"Repeat"})," until entire array is sorted descending"]}),e.jsxs("p",{children:["6️⃣ ",e.jsx("strong",{children:"Result"})," - Array sorted from largest to smallest"]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Analogy"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Award ceremony:"}),e.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-300 mt-2 list-disc list-inside",children:[e.jsx("li",{children:"Select highest scorer for Gold medal"}),e.jsx("li",{children:"Select next highest for Silver medal"}),e.jsx("li",{children:"Then Bronze, and so on"}),e.jsx("li",{children:"Each pass finds the next highest!"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🌍 Real-World Examples"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"🏅 Olympic Medal Ranking"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Select gold medalist first (highest score), then silver, then bronze - descending selection sort!"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"📱 Top Downloads Chart"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"App store showing most downloaded apps first - selecting maximum download counts!"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"💰 Wealthiest People List"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Forbes richest list - selecting highest net worth first, then next highest!"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"📊 Class Rank List"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Teacher Sukanta Hui ranking students: Nandini (96%) first, then Angshuman (92%), then Tuhina (91%) - descending selection!"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📊 Complexity Analysis"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[e.jsxs("div",{className:"text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Best Case"}),e.jsx("p",{className:"text-xl font-bold text-green-600",children:"O(n²)"}),e.jsx("p",{className:"text-xs",children:"Always n² comparisons"})]}),e.jsxs("div",{className:"text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Average Case"}),e.jsx("p",{className:"text-xl font-bold text-yellow-600",children:"O(n²)"}),e.jsx("p",{className:"text-xs",children:"n²/2 comparisons"})]}),e.jsxs("div",{className:"text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Worst Case"}),e.jsx("p",{className:"text-xl font-bold text-red-600",children:"O(n²)"}),e.jsx("p",{className:"text-xs",children:"n² comparisons"})]}),e.jsxs("div",{className:"text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Swaps"}),e.jsx("p",{className:"text-xl font-bold text-blue-600",children:"O(n)"}),e.jsx("p",{className:"text-xs",children:"Only n swaps total!"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"✨ Properties of Descending Selection Sort"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-red-600",children:"✗ Unstable Sort"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Equal elements may change relative order (same as ascending)"})]}),e.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-blue-600",children:"✓ In-place Algorithm"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"No extra memory needed (O(1) space)"})]}),e.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-yellow-600",children:"✓ Non-adaptive"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Always O(n²) even if array sorted descending"})]}),e.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-green-600",children:"✓ Minimal Swaps"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Only n swaps total - great for expensive swap operations!"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"💡 Tips & Tricks"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"One change:"})," Change ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"<"})," to ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:">"})," and rename minIndex to maxIndex"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Same swap count:"})," Still only n swaps total - minimal!"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Use for:"})," Leaderboards, rankings, top-N queries, highest scores first"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Memory efficient:"})," Same O(1) space complexity as ascending version"]})]})]}),e.jsx(i,{note:"Descending selection sort is perfect for 'top N' problems! In Barrackpore school, we use it to display rank lists. The beauty is that only the comparison changes - everything else stays the same. Challenge students: 'Can you write one selection sort that works for both orders using a comparator?' This builds flexible thinking!"})]}),r==="visual"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"👁️ Visual Walkthrough - Descending Order"}),e.jsx(h,{}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-4",children:"Watch how the maximum element is selected and swapped to its correct position at the beginning each pass"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📝 Dry Run Example"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-700/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"Pass"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"i"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"maxIndex"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"Found Maximum"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"Swap"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"Array After"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[{pass:1,i:0,max:5,found:"90 at index 5",swap:"swap(0,5)",result:"[90, 25, 12, 22, 11, 64, 34]"},{pass:2,i:1,max:4,found:"64 at index 5",swap:"swap(1,5)",result:"[90, 64, 12, 22, 11, 25, 34]"},{pass:3,i:2,max:6,found:"34 at index 6",swap:"swap(2,6)",result:"[90, 64, 34, 22, 11, 25, 12]"},{pass:4,i:3,max:5,found:"25 at index 5",swap:"swap(3,5)",result:"[90, 64, 34, 25, 11, 22, 12]"},{pass:5,i:4,max:4,found:"22 at index 5",swap:"swap(4,5)",result:"[90, 64, 34, 25, 22, 11, 12]"},{pass:6,i:5,max:6,found:"12 at index 6",swap:"swap(5,6)",result:"[90, 64, 34, 25, 22, 12, 11]"}].map((s,a)=>e.jsxs("tr",{className:s.swap!=="swap(i,i)"?"bg-rose-50 dark:bg-rose-900/10":"",children:[e.jsx("td",{className:"px-3 py-2 text-sm",children:s.pass}),e.jsx("td",{className:"px-3 py-2 text-sm",children:s.i}),e.jsx("td",{className:"px-3 py-2 text-sm",children:s.max}),e.jsx("td",{className:"px-3 py-2 text-sm",children:s.found}),e.jsx("td",{className:"px-3 py-2 text-sm",children:s.swap}),e.jsx("td",{className:"px-3 py-2 text-sm font-mono",children:s.result})]},a))})]})})]}),e.jsx(i,{note:"The visual clearly shows sorted region growing from left with largest values. Have students compare with ascending version - they'll see it's the mirror image! This reinforces understanding of how selection sort works regardless of direction."})]}),r==="code"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(d,{fileModule:c,title:"SelectionSortDescending.java",highlightLines:[]}),e.jsx(d,{fileModule:x,title:"SelectionSortDescendingOptimized.java",highlightLines:[]}),e.jsx(d,{fileModule:m,title:"SelectionSortDescendingStepByStep.java",highlightLines:[]}),e.jsx(d,{fileModule:g,title:"SelectionSortDescendingObjects.java",highlightLines:[]})]})]}),e.jsx(i,{note:"Compare the descending code with ascending side-by-side. Students should notice: maxIndex instead of minIndex, and > instead of <. Everything else is identical! This is a powerful lesson in algorithm patterns."})]}),r==="practice"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Using < instead of >"}),e.jsxs("p",{className:"text-sm",children:["Using ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"if (arr[j] < arr[maxIndex])"})," finds minimum instead of maximum!"]})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Initializing maxIndex incorrectly"}),e.jsx("p",{className:"text-sm",children:"Always initialize maxIndex = i at start of each pass, not 0!"})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Forgetting stable property"}),e.jsx("p",{className:"text-sm",children:"Selection sort is unstable in both ascending and descending - equal elements may reorder"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"✅ Best Practices"}),e.jsxs("ul",{className:"space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"maxIndex"})," variable name clearly indicating purpose"]}),e.jsx("li",{children:"Add comment explaining we're finding maximum for descending order"}),e.jsxs("li",{children:["Check ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"if (maxIndex != i)"})," before swapping to avoid unnecessary swaps"]}),e.jsx("li",{children:"Consider making sort direction a parameter for reusable code"}),e.jsx("li",{children:"Document that algorithm sorts in descending order (largest to smallest)"})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"💭 Think About..."}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"🤔 How would you modify the code to find both min and max in one pass?"}),e.jsx("li",{children:"🤔 What happens to the sorted region in descending selection sort?"}),e.jsx("li",{children:"🤔 Why does descending selection sort still make only n swaps?"}),e.jsx("li",{children:"🤔 How would you create a generic selection sort that accepts ascending/descending flag?"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🎯 Questions & Answers"}),e.jsx("div",{className:"space-y-4",children:y.map((s,a)=>e.jsxs("details",{className:"group border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("summary",{className:"cursor-pointer p-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:s.question}),e.jsx("div",{className:"p-4 pt-0 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700",children:s.answer})]},a))})]}),e.jsx(i,{note:"The key insight: selection sort's minimal swaps make it ideal for descending order too! I have students implement both ascending and descending, then combine into one method with a boolean parameter. This builds code reusability skills essential for professional development."})]})]})]}),e.jsx("style",{children:`
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
      `})]})},y=[{question:"What is the only difference between ascending and descending selection sort?",answer:"Find maximum instead of minimum (change < to > and rename minIndex to maxIndex)."},{question:"In descending selection sort, which element is placed first?",answer:"The maximum (largest) element is placed at index 0, then second largest, and so on."},{question:"Is descending selection sort stable?",answer:"No, like ascending selection sort, it's unstable because non-adjacent swaps can reorder equal elements."},{question:"What is the time complexity of descending selection sort?",answer:"Same as ascending: Best O(n²), Average O(n²), Worst O(n²). Always performs n(n-1)/2 comparisons."},{question:"How many swaps does descending selection sort make?",answer:"At most n-1 swaps total (one per pass) - same as ascending version!"},{question:"When would you use descending selection sort?",answer:"Leaderboards (highest score first), top products, rank lists, medal tallies, highest paid employees."},{question:"Can we use the same method for both ascending and descending?",answer:"Yes! Add a boolean parameter 'ascending' and use conditional: ascending ? arr[j] < arr[minIndex] : arr[j] > arr[maxIndex]"},{question:"What's the best case for descending selection sort?",answer:"Even if array is already descending, it still performs all n² comparisons (non-adaptive)."},{question:"What's the worst case for descending selection sort?",answer:"Ascending order requires same number of comparisons as any other order - always O(n²)."},{question:"How to sort objects in descending order?",answer:"Use comparator: if (comparator.compare(arr[j], arr[maxIndex]) > 0) to find maximum based on custom logic."},{question:"Why do we swap when arr[j] > arr[maxIndex] for descending?",answer:"Because we want the largest element. If current element is greater than current max, it becomes new max."},{question:"What happens to the smallest element in descending selection sort?",answer:"It ends up at the end (last position) after all passes complete."},{question:"Is descending selection sort adaptive?",answer:"No, it's non-adaptive. Performance doesn't improve with partially sorted data - always O(n²) comparisons."},{question:"How many passes needed for 10 elements in descending selection sort?",answer:"9 passes maximum (n-1 passes) to sort fully descending."},{question:"Can descending selection sort handle duplicate values?",answer:"Yes, but it's unstable - duplicates may change relative order during swapping."},{question:"How to convert ascending code to descending?",answer:"Change if(arr[j] < arr[minIndex]) to if(arr[j] > arr[maxIndex]) and rename variables accordingly."},{question:"What's the space complexity of descending selection sort?",answer:"O(1) - sorts in-place using only a few variables, same as ascending."},{question:"How would you find top 3 highest scores using selection sort?",answer:"Run only 3 passes of descending selection sort - first 3 elements will be the top 3 scores!"},{question:"Why teach descending sort separately?",answer:"Teaches that algorithm structure remains same while behavior changes via comparison logic - reinforces understanding."},{question:"How to test if descending sort works correctly?",answer:"After sorting, verify arr[i] >= arr[i+1] for all i. Also test with duplicates, empty, and single-element arrays."}];export{I as default};
