import{r as l,j as e}from"./index-BzuofKLN.js";import{c as d}from"./clsx-B-dksMZM.js";import{T as i}from"./TeacherSukantaHui-CIZzO11w.js";import{J as a}from"./JavaFileLoader-BS5vbNQy.js";import"./git-branch-DXQ8XUas.js";import"./JavaCodeBlock-DHyFNf4w.js";import"./prism-Dmu-iiPQ.js";import"./browser-DbdBQDpB.js";import"./prism-java-BwO6k4I_.js";const c=`import java.util.Arrays;\r
\r
public class SelectionSortBasic {\r
    \r
    // Basic selection sort\r
    public static void selectionSort(int[] arr) {\r
        int n = arr.length;\r
        \r
        for (int i = 0; i < n - 1; i++) {\r
            // Find minimum element in unsorted portion\r
            int minIndex = i;\r
            \r
            for (int j = i + 1; j < n; j++) {\r
                if (arr[j] < arr[minIndex]) {\r
                    minIndex = j;\r
                }\r
            }\r
            \r
            // Swap minimum with first element of unsorted portion\r
            int temp = arr[i];\r
            arr[i] = arr[minIndex];\r
            arr[minIndex] = temp;\r
        }\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] numbers = {64, 25, 12, 22, 11};\r
        \r
        System.out.println("Original array: " + Arrays.toString(numbers));\r
        selectionSort(numbers);\r
        System.out.println("Sorted array: " + Arrays.toString(numbers));\r
        \r
        // Barrackpore school roll numbers\r
        int[] rollNos = {105, 102, 108, 101, 107, 104, 103, 106};\r
        System.out.println("\\nRoll numbers: " + Arrays.toString(rollNos));\r
        selectionSort(rollNos);\r
        System.out.println("Sorted rolls: " + Arrays.toString(rollNos));\r
    }\r
}`,x=`import java.util.Arrays;\r
\r
public class SelectionSortOptimized {\r
    \r
    // Optimized selection sort with unnecessary swap prevention\r
    public static void selectionSort(int[] arr) {\r
        int n = arr.length;\r
        int comparisons = 0;\r
        int swaps = 0;\r
        \r
        for (int i = 0; i < n - 1; i++) {\r
            int minIndex = i;\r
            \r
            for (int j = i + 1; j < n; j++) {\r
                comparisons++;\r
                if (arr[j] < arr[minIndex]) {\r
                    minIndex = j;\r
                }\r
            }\r
            \r
            // Only swap if needed\r
            if (minIndex != i) {\r
                swaps++;\r
                int temp = arr[i];\r
                arr[i] = arr[minIndex];\r
                arr[minIndex] = temp;\r
            }\r
            \r
            System.out.println("After pass " + (i + 1) + ": " + Arrays.toString(arr));\r
        }\r
        \r
        System.out.println("\\nTotal comparisons: " + comparisons);\r
        System.out.println("Total swaps: " + swaps);\r
    }\r
    \r
    // Find kth smallest element using selection sort concept\r
    public static int findKthSmallest(int[] arr, int k) {\r
        if (k < 1 || k > arr.length) {\r
            throw new IllegalArgumentException("Invalid k value");\r
        }\r
        \r
        // Run only k passes\r
        for (int i = 0; i < k; i++) {\r
            int minIndex = i;\r
            for (int j = i + 1; j < arr.length; j++) {\r
                if (arr[j] < arr[minIndex]) {\r
                    minIndex = j;\r
                }\r
            }\r
            int temp = arr[i];\r
            arr[i] = arr[minIndex];\r
            arr[minIndex] = temp;\r
        }\r
        \r
        return arr[k - 1];\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] scores = {64, 25, 12, 22, 11, 90, 34};\r
        \r
        System.out.println("Original: " + Arrays.toString(scores));\r
        selectionSort(scores.clone());\r
        \r
        // Find 3rd smallest\r
        int[] temp = {64, 25, 12, 22, 11, 90, 34};\r
        int kthSmallest = findKthSmallest(temp, 3);\r
        System.out.println("\\n3rd smallest element: " + kthSmallest);\r
        \r
        // Student heights example\r
        int[] heights = {165, 172, 158, 180, 169, 175};\r
        System.out.println("\\nStudent heights: " + Arrays.toString(heights));\r
        selectionSort(heights);\r
        System.out.println("Sorted heights: " + Arrays.toString(heights));\r
    }\r
}`,m=`import java.util.Arrays;\r
\r
public class SelectionSortStepByStep {\r
    \r
    // Selection sort with detailed logging\r
    public static void selectionSortWithTrace(int[] arr) {\r
        int n = arr.length;\r
        \r
        System.out.println("Starting Selection Sort...\\n");\r
        System.out.println("Initial array: " + Arrays.toString(arr));\r
        System.out.println();\r
        \r
        for (int i = 0; i < n - 1; i++) {\r
            System.out.println("Pass " + (i + 1) + ":");\r
            System.out.println("  Looking for minimum in indices [" + i + " to " + (n-1) + "]");\r
            \r
            int minIndex = i;\r
            \r
            for (int j = i + 1; j < n; j++) {\r
                System.out.println("    Compare arr[" + j + "]=" + arr[j] + \r
                                 " with arr[" + minIndex + "]=" + arr[minIndex]);\r
                \r
                if (arr[j] < arr[minIndex]) {\r
                    System.out.println("    → New minimum found at index " + j);\r
                    minIndex = j;\r
                }\r
            }\r
            \r
            System.out.println("  Minimum element: " + arr[minIndex] + " at index " + minIndex);\r
            \r
            if (minIndex != i) {\r
                System.out.println("  Swapping arr[" + i + "]=" + arr[i] + \r
                                 " with arr[" + minIndex + "]=" + arr[minIndex]);\r
                int temp = arr[i];\r
                arr[i] = arr[minIndex];\r
                arr[minIndex] = temp;\r
            } else {\r
                System.out.println("  No swap needed (min already at correct position)");\r
            }\r
            \r
            System.out.println("  Array after pass " + (i + 1) + ": " + Arrays.toString(arr));\r
            System.out.println();\r
        }\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] numbers = {64, 25, 12, 22, 11};\r
        \r
        System.out.println("Target: Sort in ascending order");\r
        System.out.println("Original: " + Arrays.toString(numbers));\r
        System.out.println();\r
        \r
        selectionSortWithTrace(numbers);\r
        \r
        System.out.println("Final sorted array: " + Arrays.toString(numbers));\r
    }\r
}`,h=`import java.util.Arrays;\r
\r
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
}\r
\r
public class SelectionSortWithObjects {\r
    \r
    // Generic selection sort for Comparable objects\r
    public static <T extends Comparable<T>> void selectionSort(T[] arr) {\r
        int n = arr.length;\r
        \r
        for (int i = 0; i < n - 1; i++) {\r
            int minIndex = i;\r
            \r
            for (int j = i + 1; j < n; j++) {\r
                if (arr[j].compareTo(arr[minIndex]) < 0) {\r
                    minIndex = j;\r
                }\r
            }\r
            \r
            if (minIndex != i) {\r
                T temp = arr[i];\r
                arr[i] = arr[minIndex];\r
                arr[minIndex] = temp;\r
            }\r
        }\r
    }\r
    \r
    // Selection sort with custom comparator (descending)\r
    public static <T> void selectionSortDescending(T[] arr, java.util.Comparator<T> comp) {\r
        int n = arr.length;\r
        \r
        for (int i = 0; i < n - 1; i++) {\r
            int minIndex = i;\r
            \r
            for (int j = i + 1; j < n; j++) {\r
                if (comp.compare(arr[j], arr[minIndex]) > 0) { // Note: > for descending\r
                    minIndex = j;\r
                }\r
            }\r
            \r
            if (minIndex != i) {\r
                T temp = arr[i];\r
                arr[i] = arr[minIndex];\r
                arr[minIndex] = temp;\r
            }\r
        }\r
    }\r
    \r
    public static void main(String[] args) {\r
        // Product prices - Barrackpore store\r
        Product[] products = {\r
            new Product("Notebook", 50),\r
            new Product("Pen", 20),\r
            new Product("Eraser", 10),\r
            new Product("Scale", 30),\r
            new Product("Sharpener", 15)\r
        };\r
        \r
        System.out.println("Original products:");\r
        for (Product p : products) {\r
            System.out.println("  " + p);\r
        }\r
        \r
        selectionSort(products);\r
        \r
        System.out.println("\\nSorted by price (ascending):");\r
        for (Product p : products) {\r
            System.out.println("  " + p);\r
        }\r
        \r
        // String array - student names\r
        String[] students = {"Swadeep", "Tuhina", "Abhronila", "Nandini", "Riddhiman"};\r
        System.out.println("\\nOriginal names: " + Arrays.toString(students));\r
        selectionSort(students);\r
        System.out.println("Sorted names: " + Arrays.toString(students));\r
        \r
        // Descending order using custom comparator\r
        Integer[] scores = {85, 92, 78, 96, 88, 91};\r
        System.out.println("\\nOriginal scores: " + Arrays.toString(scores));\r
        selectionSortDescending(scores, (a, b) -> a.compareTo(b));\r
        System.out.println("Descending scores: " + Arrays.toString(scores));\r
    }\r
}`,p=()=>{const[t,o]=l.useState(0),r=[{label:"Pass 1: Find minimum from indices 0-6 → 11 at index 5",array:[64,25,12,22,11,90,34],minIndex:5,swapIndices:[0,5]},{label:"Pass 2: Find minimum from indices 1-6 → 12 at index 2",array:[11,25,12,22,64,90,34],minIndex:2,swapIndices:[1,2]},{label:"Pass 3: Find minimum from indices 2-6 → 22 at index 3",array:[11,12,25,22,64,90,34],minIndex:3,swapIndices:[2,3]},{label:"Pass 4: Find minimum from indices 3-6 → 25 at index 4",array:[11,12,22,25,64,90,34],minIndex:4,swapIndices:[3,4]},{label:"Pass 5: Find minimum from indices 4-6 → 34 at index 6",array:[11,12,22,25,64,90,34],minIndex:6,swapIndices:[4,6]},{label:"Pass 6: Final sorted array!",array:[11,12,22,25,34,64,90],minIndex:-1,swapIndices:[]}];return e.jsxs("div",{className:"w-full",children:[e.jsxs("svg",{viewBox:"0 0 900 300",className:"w-full h-auto max-w-5xl mx-auto my-4","aria-label":"Selection Sort Visualization",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"selectionGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#8b5cf6",stopOpacity:.1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#a855f7",stopOpacity:.2}})]}),e.jsx("filter",{id:"shadow",x:"-5%",y:"-5%",width:"110%",height:"110%",children:e.jsx("feDropShadow",{dx:"1",dy:"1",stdDeviation:"2",floodOpacity:"0.2"})}),e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#8b5cf6"})})]}),e.jsx("text",{x:"450",y:"25",textAnchor:"middle",fill:"#1e293b","dark:text-gray-200":!0,fontSize:"14",fontWeight:"bold",children:r[t].label}),e.jsx("rect",{x:"50",y:"40",width:t*110+60,height:"4",rx:"2",fill:"#10b981"}),e.jsx("text",{x:"50",y:"35",fill:"#10b981",fontSize:"11",fontWeight:"bold",children:"✓ Sorted Region"}),r[t].array.map((s,n)=>e.jsxs("g",{transform:`translate(${n*110+50}, 60)`,children:[e.jsx("rect",{x:"0",y:"0",width:"90",height:"60",rx:"6",fill:n<t?"#dcfce7":"#ffffff",stroke:n===r[t].minIndex?"#f59e0b":n<t?"#10b981":"#8b5cf6",strokeWidth:n===r[t].minIndex?"4":"2",className:"transition-all duration-300 hover:shadow-lg",filter:"url(#shadow)",children:n===r[t].minIndex&&e.jsx("animate",{attributeName:"stroke",values:"#f59e0b;#8b5cf6;#f59e0b",dur:"1s",repeatCount:"indefinite"})}),e.jsx("text",{x:"45",y:"35",textAnchor:"middle",fill:"#1e293b",fontSize:"20",fontWeight:"bold",children:s}),e.jsxs("text",{x:"45",y:"78",textAnchor:"middle",fill:"#94a3b8",fontSize:"11",children:["index ",n]}),n===r[t].minIndex&&e.jsxs("g",{children:[e.jsx("text",{x:"45",y:"-10",textAnchor:"middle",fill:"#f59e0b",fontSize:"12",fontWeight:"bold",children:"✓ MIN"}),e.jsx("path",{d:"M 45 -5 L 45 0",stroke:"#f59e0b",strokeWidth:"2"})]}),n===t&&n<r[t].array.length-1&&e.jsxs("g",{children:[e.jsx("text",{x:"45",y:"95",textAnchor:"middle",fill:"#8b5cf6",fontSize:"11",children:"current"}),e.jsx("path",{d:"M 45 90 L 45 85",stroke:"#8b5cf6",strokeWidth:"2"})]})]},n)),r[t].swapIndices.length===2&&e.jsxs("g",{children:[e.jsx("path",{d:`M ${r[t].swapIndices[0]*110+95} 90 Q ${(r[t].swapIndices[0]+r[t].swapIndices[1])*55+95} 130 ${r[t].swapIndices[1]*110+95} 90`,fill:"none",stroke:"#f59e0b",strokeWidth:"2",strokeDasharray:"5,5",markerEnd:"url(#arrowhead)",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;10",dur:"0.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:450,y:"150",textAnchor:"middle",fill:"#f59e0b",fontSize:"12",fontWeight:"bold",children:"SWAP"})]}),e.jsxs("g",{transform:"translate(350, 220)",children:[e.jsx("rect",{x:"0",y:"0",width:"200",height:"35",rx:"8",fill:"#8b5cf6",className:"cursor-pointer hover:fill-purple-600 transition-all duration-300"}),e.jsx("text",{x:"100",y:"24",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",className:"cursor-pointer",children:t<5?"Next Pass →":"Reset"})]})]}),e.jsx("div",{className:"text-center mt-2",children:e.jsx("button",{onClick:()=>o((t+1)%6),className:"px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all duration-300",children:t<5?"Next Pass (Step "+(t+2)+"/6)":"Reset Animation"})})]})},g=()=>e.jsx("svg",{viewBox:"0 0 700 500",className:"w-full h-auto max-w-3xl mx-auto my-4",children:e.jsxs("g",{transform:"translate(20, 20)",children:[e.jsx("ellipse",{cx:"330",cy:"20",rx:"40",ry:"20",fill:"#10b981"}),e.jsx("text",{x:"330",y:"25",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"START"}),e.jsx("line",{x1:"330",y1:"40",x2:"330",y2:"70",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"180",y:"70",width:"300",height:"45",rx:"8",fill:"#eff6ff",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"330",y:"97",textAnchor:"middle",fill:"#1e3a8a",fontSize:"13",fontWeight:"bold",children:"for i = 0 to n-1"}),e.jsx("line",{x1:"330",y1:"115",x2:"330",y2:"145",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"150",y:"145",width:"360",height:"40",rx:"8",fill:"#fef3c7",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"330",y:"170",textAnchor:"middle",fill:"#92400e",fontSize:"12",fontWeight:"bold",children:"minIndex = i"}),e.jsx("line",{x1:"330",y1:"185",x2:"330",y2:"215",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"150",y:"215",width:"360",height:"45",rx:"8",fill:"#fce7f3",stroke:"#ec4899",strokeWidth:"2"}),e.jsx("text",{x:"330",y:"242",textAnchor:"middle",fill:"#9d174d",fontSize:"12",fontWeight:"bold",children:"for j = i+1 to n-1"}),e.jsx("line",{x1:"330",y1:"260",x2:"330",y2:"290",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("polygon",{points:"330,290 430,330 330,370 230,330",fill:"#fce7f3",stroke:"#ec4899",strokeWidth:"2"}),e.jsx("text",{x:"330",y:"335",textAnchor:"middle",fill:"#9d174d",fontSize:"11",fontWeight:"bold",children:"arr[j] < arr[minIndex]?"}),e.jsx("line",{x1:"430",y1:"330",x2:"530",y2:"330",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"480",y:"323",textAnchor:"middle",fill:"#10b981",fontSize:"11",children:"YES"}),e.jsx("rect",{x:"530",y:"310",width:"130",height:"40",rx:"8",fill:"#dcfce7",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"595",y:"335",textAnchor:"middle",fill:"#166534",fontSize:"11",fontWeight:"bold",children:"minIndex = j"}),e.jsx("line",{x1:"230",y1:"330",x2:"130",y2:"330",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"180",y:"323",textAnchor:"middle",fill:"#ef4444",fontSize:"11",children:"NO"}),e.jsx("rect",{x:"20",y:"310",width:"110",height:"40",rx:"8",fill:"#fee2e2",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"75",y:"335",textAnchor:"middle",fill:"#991b1b",fontSize:"11",fontWeight:"bold",children:"Continue"}),e.jsx("path",{d:"M 595 350 L 595 390 L 330 390 L 330 370",fill:"none",stroke:"#ec4899",strokeWidth:"2",strokeDasharray:"5,5",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"200",y:"420",width:"260",height:"40",rx:"8",fill:"#dcfce7",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"330",y:"445",textAnchor:"middle",fill:"#166534",fontSize:"12",fontWeight:"bold",children:"swap(arr[i], arr[minIndex])"}),e.jsx("path",{d:"M 330 460 L 330 395 L 330 375",fill:"none",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("ellipse",{cx:"330",cy:"480",rx:"40",ry:"20",fill:"#ef4444"}),e.jsx("text",{x:"330",y:"485",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"END"})]})}),u=()=>e.jsxs("svg",{viewBox:"0 0 700 180",className:"w-full h-auto max-w-3xl mx-auto my-4",children:[e.jsx("rect",{x:"50",y:"20",width:"280",height:"140",rx:"8",fill:"#fee2e2",stroke:"#ef4444",strokeWidth:"1.5"}),e.jsx("text",{x:"190",y:"50",textAnchor:"middle",fill:"#991b1b",fontSize:"14",fontWeight:"bold",children:"Bubble Sort"}),e.jsx("text",{x:"190",y:"75",textAnchor:"middle",fill:"#7f1d1d",fontSize:"12",children:"Best: O(n²)"}),e.jsx("text",{x:"190",y:"95",textAnchor:"middle",fill:"#7f1d1d",fontSize:"12",children:"Avg: O(n²)"}),e.jsx("text",{x:"190",y:"115",textAnchor:"middle",fill:"#7f1d1d",fontSize:"12",children:"Worst: O(n²)"}),e.jsx("text",{x:"190",y:"140",textAnchor:"middle",fill:"#7f1d1d",fontSize:"12",children:"Many swaps"}),e.jsx("rect",{x:"370",y:"20",width:"280",height:"140",rx:"8",fill:"#dcfce7",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"510",y:"50",textAnchor:"middle",fill:"#14532d",fontSize:"14",fontWeight:"bold",children:"Selection Sort"}),e.jsx("text",{x:"510",y:"75",textAnchor:"middle",fill:"#166534",fontSize:"12",children:"Best: O(n²)"}),e.jsx("text",{x:"510",y:"95",textAnchor:"middle",fill:"#166534",fontSize:"12",children:"Avg: O(n²)"}),e.jsx("text",{x:"510",y:"115",textAnchor:"middle",fill:"#166534",fontSize:"12",children:"Worst: O(n²)"}),e.jsx("text",{x:"510",y:"140",textAnchor:"middle",fill:"#166534",fontSize:"12",children:"Minimal swaps (n swaps)"})]}),A=()=>{const[t,o]=l.useState("theory");return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"mb-8 text-center animate-[fadeInUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4",children:"Selection Sort - Ascending Order"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed",children:"Selecting the minimum element and placing it at the beginning - the intuitive sorting algorithm"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700",children:["theory","visual","code","practice"].map(r=>e.jsx("button",{onClick:()=>o(r),className:d("px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-300",t===r?"bg-purple-50 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 border-b-2 border-purple-600":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"),children:r.charAt(0).toUpperCase()+r.slice(1)},r))}),e.jsxs("div",{className:"space-y-6",children:[t==="theory"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center",children:[e.jsx("span",{className:"bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold",children:"1"}),"What is Selection Sort?"]}),e.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-4",children:["Selection sort is an ",e.jsx("strong",{className:"text-purple-600 dark:text-purple-400",children:"in-place comparison sorting algorithm"})," that divides the array into sorted and unsorted regions. It repeatedly ",e.jsx("strong",{className:"text-purple-600 dark:text-purple-400",children:"selects the minimum element"})," from the unsorted region and swaps it with the first element of the unsorted region."]}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg mb-4",children:e.jsxs("p",{className:"text-sm text-purple-800 dark:text-purple-200 font-mono",children:[e.jsx("strong",{children:"Prototype:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"public static void selectionSort(int[] arr)"}),e.jsx("br",{}),e.jsx("strong",{children:"Return Type:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"void"})," (sorts in-place)",e.jsx("br",{}),e.jsx("strong",{children:"Key Feature:"})," Makes only O(n) swaps - minimal swapping!"]})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚙️ How Selection Sort Works"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-3 text-gray-600 dark:text-gray-300",children:[e.jsxs("p",{children:["1️⃣ ",e.jsx("strong",{children:"Divide"})," array into sorted (left) and unsorted (right) regions"]}),e.jsxs("p",{children:["2️⃣ ",e.jsx("strong",{children:"Find minimum"})," element in unsorted region"]}),e.jsxs("p",{children:["3️⃣ ",e.jsx("strong",{children:"Swap"})," minimum with first element of unsorted region"]}),e.jsxs("p",{children:["4️⃣ ",e.jsx("strong",{children:"Expand"})," sorted region by one element"]}),e.jsxs("p",{children:["5️⃣ ",e.jsx("strong",{children:"Repeat"})," until entire array is sorted"]}),e.jsxs("p",{children:["6️⃣ ",e.jsx("strong",{children:"Result"})," - Each pass places one element in final position"]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Analogy"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Organizing a deck of cards:"}),e.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-300 mt-2 list-disc list-inside",children:[e.jsx("li",{children:"Look through unsorted cards for smallest"}),e.jsx("li",{children:"Place it at the beginning of sorted pile"}),e.jsx("li",{children:"Repeat with remaining cards"}),e.jsx("li",{children:"Each pass finds the next smallest!"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🌍 Real-World Examples"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"🎯 Prize Distribution"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Teacher Sukanta Hui selects the highest scorer first, then next highest - selection sort in action!"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"📋 To-Do List Prioritization"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Finding the most important task first, then next important - selecting priorities!"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"🏃 Race Ranking"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Selecting fastest runner first (gold), then second fastest (silver) - selection sort!"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"📊 Exam Grading"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Finding top score in Barrackpore school, then second highest - selection sort naturally!"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📊 Complexity Analysis"}),e.jsx(u,{}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 mt-4",children:[e.jsxs("div",{className:"text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Best Case"}),e.jsx("p",{className:"text-xl font-bold text-green-600",children:"O(n²)"}),e.jsx("p",{className:"text-xs",children:"Always n² comparisons"})]}),e.jsxs("div",{className:"text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Average Case"}),e.jsx("p",{className:"text-xl font-bold text-yellow-600",children:"O(n²)"}),e.jsx("p",{className:"text-xs",children:"n²/2 comparisons"})]}),e.jsxs("div",{className:"text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Worst Case"}),e.jsx("p",{className:"text-xl font-bold text-red-600",children:"O(n²)"}),e.jsx("p",{className:"text-xs",children:"n² comparisons"})]}),e.jsxs("div",{className:"text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Swaps"}),e.jsx("p",{className:"text-xl font-bold text-blue-600",children:"O(n)"}),e.jsx("p",{className:"text-xs",children:"Only n swaps total!"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"✨ Properties of Selection Sort"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-red-600",children:"✗ Unstable Sort"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Equal elements may change relative order"})]}),e.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-blue-600",children:"✓ In-place Algorithm"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"No extra memory needed (O(1) space)"})]}),e.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-yellow-600",children:"✓ Non-adaptive"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Always O(n²) even if array sorted"})]}),e.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-green-600",children:"✓ Minimal Swaps"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Only n swaps total - great for expensive swap operations!"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"💡 Tips & Tricks"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Minimal swaps:"})," Perfect when swapping is expensive (e.g., large objects)"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Predictable performance:"})," Always O(n²) - no worst-case surprises"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Memory efficient:"})," Great for memory-constrained environments"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Easy to implement:"})," Simpler than quicksort or mergesort"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Small datasets:"})," Works well for n < 1000"]})]})]}),e.jsx(i,{note:"Selection sort's beauty is its simplicity and minimal swapping! I tell students in Barrackpore: 'Think of it as picking the best apple from a basket, then the next best, then the next.' Unlike bubble sort, each pass guarantees one element is in final position. Have them count swaps vs comparisons - eye-opening!"})]}),t==="visual"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"👁️ Visual Walkthrough"}),e.jsx(p,{}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-4",children:"Watch how the minimum element is selected and swapped to its correct position each pass"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📐 Algorithm Flowchart"}),e.jsx(g,{})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📝 Dry Run Example"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-700/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"Pass"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"i"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"minIndex"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"Found Minimum"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"Swap"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"Array After"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[{pass:1,i:0,min:5,found:"11 at index 5",swap:"swap(0,5)",result:"[11, 25, 12, 22, 64, 90, 34]"},{pass:2,i:1,min:2,found:"12 at index 2",swap:"swap(1,2)",result:"[11, 12, 25, 22, 64, 90, 34]"},{pass:3,i:2,min:3,found:"22 at index 3",swap:"swap(2,3)",result:"[11, 12, 22, 25, 64, 90, 34]"},{pass:4,i:3,min:3,found:"25 at index 3",swap:"swap(3,3) - no swap",result:"[11, 12, 22, 25, 64, 90, 34]"},{pass:5,i:4,min:6,found:"34 at index 6",swap:"swap(4,6)",result:"[11, 12, 22, 25, 34, 90, 64]"},{pass:6,i:5,min:6,found:"64 at index 6",swap:"swap(5,6)",result:"[11, 12, 22, 25, 34, 64, 90]"}].map((r,s)=>e.jsxs("tr",{className:r.swap!=="swap(i,i) - no swap"&&r.swap!=="swap(3,3) - no swap"?"bg-purple-50 dark:bg-purple-900/10":"",children:[e.jsx("td",{className:"px-3 py-2 text-sm",children:r.pass}),e.jsx("td",{className:"px-3 py-2 text-sm",children:r.i}),e.jsx("td",{className:"px-3 py-2 text-sm",children:r.min}),e.jsx("td",{className:"px-3 py-2 text-sm",children:r.found}),e.jsx("td",{className:"px-3 py-2 text-sm",children:r.swap}),e.jsx("td",{className:"px-3 py-2 text-sm font-mono",children:r.result})]},s))})]})})]}),e.jsx(i,{note:"The visual representation clearly shows the sorted region growing from left to right. Have students predict which element will be selected next - this builds intuition! In my Ichapur class, we use playing cards to physically demonstrate selection sort - students love it!"})]}),t==="code"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(a,{fileModule:c,title:"SelectionSortBasic.java",highlightLines:[]}),e.jsx(a,{fileModule:x,title:"SelectionSortOptimized.java",highlightLines:[]}),e.jsx(a,{fileModule:m,title:"SelectionSortStepByStep.java",highlightLines:[]}),e.jsx(a,{fileModule:h,title:"SelectionSortWithObjects.java",highlightLines:[]})]})]}),e.jsx(i,{note:"Notice how selection sort differs from bubble sort - bubble sort swaps many times, selection sort finds minimum first then swaps once per pass. This is a great lesson in algorithm design: different approaches to same problem!"})]}),t==="practice"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Wrong minIndex initialization"}),e.jsx("p",{className:"text-sm",children:"Always initialize minIndex = i at start of each pass, not 0!"})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Off-by-one in inner loop"}),e.jsx("p",{className:"text-sm",children:"Inner loop should run j = i+1 to n, not j = 0 to n"})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Swapping with itself"}),e.jsx("p",{className:"text-sm",children:"Check if minIndex != i before swapping to avoid unnecessary swap"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"✅ Best Practices"}),e.jsxs("ul",{className:"space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"minIndex"})," variable name clearly indicating purpose"]}),e.jsxs("li",{children:["Add check ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"if (minIndex != i)"})," before swapping"]}),e.jsx("li",{children:"Extract findMin and swap into separate methods for clarity"}),e.jsx("li",{children:"Consider using for selection sort when swaps are expensive"}),e.jsx("li",{children:"Document that algorithm is unstable for objects with equal keys"})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"💭 Think About..."}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"🤔 Why does selection sort make fewer swaps than bubble sort?"}),e.jsx("li",{children:"🤔 How would you modify selection sort to sort in descending order?"}),e.jsx("li",{children:"🤔 Why is selection sort considered unstable? Can you find an example?"}),e.jsx("li",{children:"🤔 When would you choose selection sort over bubble sort?"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🎯 Questions & Answers"}),e.jsx("div",{className:"space-y-4",children:y.map((r,s)=>e.jsxs("details",{className:"group border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("summary",{className:"cursor-pointer p-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:r.question}),e.jsx("div",{className:"p-4 pt-0 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700",children:r.answer})]},s))})]}),e.jsx(i,{note:"Selection sort is excellent for teaching the concept of 'selecting' vs 'bubbling'. Have students implement both and count operations - they'll discover selection sort does fewer swaps! This builds appreciation for algorithm efficiency beyond just Big O notation."})]})]})]}),e.jsx("style",{children:`
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
      `})]})},y=[{question:"What is selection sort and how does it work?",answer:"Selection sort divides array into sorted/unsorted regions, finds minimum in unsorted region, and swaps it with first unsorted element. Repeats until sorted."},{question:"What is the time complexity of selection sort?",answer:"O(n²) for best, average, and worst cases. Always performs n(n-1)/2 comparisons regardless of input order."},{question:"How many swaps does selection sort make?",answer:"At most n-1 swaps total (one per pass). This is minimal among comparison-based sorting algorithms."},{question:"Is selection sort stable?",answer:"No, selection sort is unstable. Equal elements may change relative order when swapping non-adjacent elements."},{question:"Why is selection sort better than bubble sort?",answer:"Selection sort makes far fewer swaps (O(n) vs O(n²)). However, both have same O(n²) comparisons."},{question:"What's the space complexity of selection sort?",answer:"O(1) - sorts in-place using only a few variables (minIndex, temp). No extra arrays needed."},{question:"When should you use selection sort?",answer:"When swapping is expensive (large objects), memory is limited, or dataset is small (n < 1000)."},{question:"How to sort in descending order using selection sort?",answer:"Find maximum instead of minimum in unsorted region, or use comparator that reverses comparison."},{question:"Why does selection sort always perform O(n²) comparisons?",answer:"It always scans entire unsorted region regardless of order - no early termination like bubble sort."},{question:"How does selection sort compare to insertion sort?",answer:"Insertion sort is adaptive (O(n) for sorted data) and stable. Selection sort has fewer swaps but more comparisons."},{question:"What's the best case for selection sort?",answer:"Best case is also O(n²) - even if array sorted, it still scans all elements to find minimum."},{question:"How to implement selection sort for strings?",answer:"Use compareTo() method to compare strings. Find smallest string lexicographically and swap."},{question:"Why is selection sort called 'selection' sort?",answer:"Because each pass 'selects' the minimum element from unsorted portion and places it in correct position."},{question:"Can selection sort be made stable?",answer:"Yes, by inserting instead of swapping, but that requires O(n) extra space or linked list implementation."},{question:"How many comparisons for n=100?",answer:"n(n-1)/2 = 100*99/2 = 4,950 comparisons regardless of input order."},{question:"What happens if array is already sorted?",answer:"Selection sort still performs all n(n-1)/2 comparisons but only n-1 swaps (each swap with itself)."},{question:"How to find kth smallest using selection sort?",answer:"Run selection sort for k passes - the kth element placed is the kth smallest. More efficient than full sort."},{question:"Why isn't selection sort used in practice?",answer:"O(n²) is too slow for large datasets. Better algorithms like quicksort O(n log n) are preferred."},{question:"How to optimize selection sort?",answer:"Can find both min and max in same pass (double selection sort), reducing passes by half."},{question:"Is selection sort adaptive?",answer:"No, it's non-adaptive. Performance doesn't improve with partially sorted data - always O(n²) comparisons."}];export{A as default};
