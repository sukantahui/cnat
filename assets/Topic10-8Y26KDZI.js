import{r as o,j as e}from"./index-COd1BgDP.js";import{c as d}from"./clsx-B-dksMZM.js";import{T as n}from"./TeacherSukantaHui-BiDY59dC.js";import{J as i}from"./JavaFileLoader-BP9eIELP.js";import"./git-branch-BMCsOpU_.js";import"./JavaCodeBlock-Dep8i8YL.js";import"./prism-XSjjC35C.js";import"./browser-Cg0sBYot.js";import"./prism-java-BwO6k4I_.js";const c=`import java.util.Arrays;\r
\r
public class BubbleSortBasic {\r
    \r
    // Basic bubble sort - no optimization\r
    public static void bubbleSort(int[] arr) {\r
        int n = arr.length;\r
        \r
        // Number of passes\r
        for (int i = 0; i < n - 1; i++) {\r
            // Compare adjacent elements\r
            for (int j = 0; j < n - 1; j++) {\r
                if (arr[j] > arr[j + 1]) {\r
                    // Swap\r
                    int temp = arr[j];\r
                    arr[j] = arr[j + 1];\r
                    arr[j + 1] = temp;\r
                }\r
            }\r
        }\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] marks = {64, 34, 25, 12, 22, 11, 90};\r
        \r
        System.out.println("Original array: " + Arrays.toString(marks));\r
        bubbleSort(marks);\r
        System.out.println("Sorted array: " + Arrays.toString(marks));\r
        \r
        // Student scores example - Barrackpore school\r
        int[] scores = {78, 89, 45, 92, 67, 85};\r
        System.out.println("\\nStudent scores: " + Arrays.toString(scores));\r
        bubbleSort(scores);\r
        System.out.println("Sorted scores: " + Arrays.toString(scores));\r
    }\r
}`,x=`import java.util.Arrays;\r
\r
public class BubbleSortOptimized {\r
    \r
    // Optimized bubble sort with early termination\r
    public static void bubbleSort(int[] arr) {\r
        int n = arr.length;\r
        boolean swapped;\r
        \r
        for (int i = 0; i < n - 1; i++) {\r
            swapped = false;\r
            \r
            // Last i elements are already sorted\r
            for (int j = 0; j < n - i - 1; j++) {\r
                if (arr[j] > arr[j + 1]) {\r
                    // Swap\r
                    int temp = arr[j];\r
                    arr[j] = arr[j + 1];\r
                    arr[j + 1] = temp;\r
                    swapped = true;\r
                }\r
            }\r
            \r
            // If no swaps, array is sorted\r
            if (!swapped) {\r
                System.out.println("Array sorted after pass " + (i + 1));\r
                break;\r
            }\r
        }\r
    }\r
    \r
    public static void main(String[] args) {\r
        // Already sorted array - best case\r
        int[] sorted = {11, 12, 22, 25, 34, 64, 90};\r
        System.out.println("Testing with sorted array:");\r
        System.out.println("Original: " + Arrays.toString(sorted));\r
        bubbleSort(sorted);\r
        System.out.println("Sorted: " + Arrays.toString(sorted));\r
        \r
        // Nearly sorted array\r
        int[] nearlySorted = {11, 12, 25, 22, 34, 64, 90};\r
        System.out.println("\\nTesting with nearly sorted array:");\r
        System.out.println("Original: " + Arrays.toString(nearlySorted));\r
        bubbleSort(nearlySorted);\r
        System.out.println("Sorted: " + Arrays.toString(nearlySorted));\r
        \r
        // Random array\r
        int[] random = {64, 34, 25, 12, 22, 11, 90};\r
        System.out.println("\\nTesting with random array:");\r
        System.out.println("Original: " + Arrays.toString(random));\r
        bubbleSort(random);\r
        System.out.println("Sorted: " + Arrays.toString(random));\r
    }\r
}`,m=`import java.util.Arrays;\r
\r
public class BubbleSortStepByStep {\r
    \r
    // Bubble sort with detailed logging\r
    public static void bubbleSortWithTrace(int[] arr) {\r
        int n = arr.length;\r
        boolean swapped;\r
        \r
        System.out.println("Starting Bubble Sort...\\n");\r
        \r
        for (int i = 0; i < n - 1; i++) {\r
            swapped = false;\r
            System.out.println("Pass " + (i + 1) + ":");\r
            \r
            for (int j = 0; j < n - i - 1; j++) {\r
                System.out.print("  Compare arr[" + j + "]=" + arr[j] + \r
                               " and arr[" + (j+1) + "]=" + arr[j+1]);\r
                \r
                if (arr[j] > arr[j + 1]) {\r
                    System.out.println(" → Swap!");\r
                    int temp = arr[j];\r
                    arr[j] = arr[j + 1];\r
                    arr[j + 1] = temp;\r
                    swapped = true;\r
                } else {\r
                    System.out.println(" → No swap");\r
                }\r
                \r
                System.out.println("    Array now: " + Arrays.toString(arr));\r
            }\r
            \r
            System.out.println("End of pass " + (i + 1) + ": " + Arrays.toString(arr));\r
            \r
            if (!swapped) {\r
                System.out.println("\\nNo swaps in pass " + (i + 1) + " - array is sorted!");\r
                break;\r
            }\r
            System.out.println();\r
        }\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] numbers = {64, 34, 25, 12, 22, 11, 90};\r
        \r
        System.out.println("Initial array: " + Arrays.toString(numbers));\r
        System.out.println("Target: Sort in ascending order\\n");\r
        \r
        bubbleSortWithTrace(numbers);\r
        \r
        System.out.println("\\nFinal sorted array: " + Arrays.toString(numbers));\r
    }\r
}`,h=`import java.util.Arrays;\r
\r
public class BubbleSortWithStrings {\r
    \r
    // Bubble sort for String arrays\r
    public static void bubbleSort(String[] arr) {\r
        int n = arr.length;\r
        boolean swapped;\r
        \r
        for (int i = 0; i < n - 1; i++) {\r
            swapped = false;\r
            \r
            for (int j = 0; j < n - i - 1; j++) {\r
                // compareTo returns negative if first < second\r
                if (arr[j].compareTo(arr[j + 1]) > 0) {\r
                    String temp = arr[j];\r
                    arr[j] = arr[j + 1];\r
                    arr[j + 1] = temp;\r
                    swapped = true;\r
                }\r
            }\r
            \r
            if (!swapped) break;\r
        }\r
    }\r
    \r
    // Bubble sort for arrays of any Comparable type\r
    public static <T extends Comparable<T>> void bubbleSortGeneric(T[] arr) {\r
        int n = arr.length;\r
        boolean swapped;\r
        \r
        for (int i = 0; i < n - 1; i++) {\r
            swapped = false;\r
            \r
            for (int j = 0; j < n - i - 1; j++) {\r
                if (arr[j].compareTo(arr[j + 1]) > 0) {\r
                    T temp = arr[j];\r
                    arr[j] = arr[j + 1];\r
                    arr[j + 1] = temp;\r
                    swapped = true;\r
                }\r
            }\r
            \r
            if (!swapped) break;\r
        }\r
    }\r
    \r
    public static void main(String[] args) {\r
        // Student names from Barrackpore school\r
        String[] students = {"Swadeep", "Tuhina", "Abhronila", "Nandini", "Riddhiman", "Angshuman"};\r
        \r
        System.out.println("Original names: " + Arrays.toString(students));\r
        bubbleSort(students);\r
        System.out.println("Sorted names: " + Arrays.toString(students));\r
        \r
        // City names\r
        String[] cities = {"Barrackpore", "Shyamnagar", "Ichapur", "Naihati", "Kolkata"};\r
        System.out.println("\\nOriginal cities: " + Arrays.toString(cities));\r
        bubbleSort(cities);\r
        System.out.println("Sorted cities: " + Arrays.toString(cities));\r
        \r
        // Using generic version with Double\r
        Double[] scores = {78.5, 92.3, 67.8, 88.0, 95.5};\r
        System.out.println("\\nOriginal scores: " + Arrays.toString(scores));\r
        bubbleSortGeneric(scores);\r
        System.out.println("Sorted scores: " + Arrays.toString(scores));\r
    }\r
}`,b=()=>{const[t,l]=o.useState(0),r=[{label:"Pass 1: Largest element bubbles to end",array:[45,23,67,12,89,34,78],comparisons:[0,1,2,3,4,5]},{label:"Pass 2: Second largest bubbles to position",array:[23,45,12,67,34,78,89],comparisons:[0,1,2,3,4]},{label:"Pass 3: Continuing bubble up",array:[23,12,45,34,67,78,89],comparisons:[0,1,2,3]},{label:"Pass 4: Almost sorted",array:[12,23,34,45,67,78,89],comparisons:[0,1,2]},{label:"Pass 5: Final check - sorted!",array:[12,23,34,45,67,78,89],comparisons:[0,1]}];return e.jsxs("div",{className:"w-full",children:[e.jsxs("svg",{viewBox:"0 0 800 400",className:"w-full h-auto max-w-4xl mx-auto my-4","aria-label":"Bubble Sort Visualization",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"bubbleGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#3b82f6",stopOpacity:.1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#06b6d4",stopOpacity:.2}})]}),e.jsx("filter",{id:"shadow",x:"-5%",y:"-5%",width:"110%",height:"110%",children:e.jsx("feDropShadow",{dx:"1",dy:"1",stdDeviation:"2",floodOpacity:"0.2"})}),e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#3b82f6"})})]}),e.jsx("text",{x:"400",y:"25",textAnchor:"middle",fill:"#1e293b","dark:text-gray-200":!0,fontSize:"14",fontWeight:"bold",children:r[t].label}),r[t].array.map((s,a)=>e.jsxs("g",{transform:`translate(${a*85+60}, 50)`,children:[e.jsx("rect",{x:"0",y:"0",width:"70",height:"60",rx:"6",fill:"#ffffff",stroke:r[t].comparisons.includes(a)?"#f59e0b":"#3b82f6",strokeWidth:r[t].comparisons.includes(a)?"3":"2",className:"transition-all duration-300 hover:shadow-lg",filter:"url(#shadow)",children:r[t].comparisons.includes(a)&&e.jsx("animate",{attributeName:"stroke",values:"#f59e0b;#3b82f6;#f59e0b",dur:"1s",repeatCount:"indefinite"})}),e.jsx("text",{x:"35",y:"35",textAnchor:"middle",fill:"#1e293b",fontSize:"18",fontWeight:"bold",children:s}),e.jsxs("text",{x:"35",y:"75",textAnchor:"middle",fill:"#94a3b8",fontSize:"11",children:["index ",a]})]},a)),t<4&&e.jsx("g",{children:r[t].comparisons.map((s,a)=>e.jsxs("g",{transform:`translate(${s*85+95}, 130)`,children:[e.jsxs("circle",{cx:"0",cy:"0",r:"15",fill:"#f59e0b",opacity:"0.6",children:[e.jsx("animate",{attributeName:"cy",values:"0;-30;-30",dur:"1.5s",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"opacity",values:"0.6;0.2;0.6",dur:"1.5s",repeatCount:"indefinite"})]}),e.jsxs("text",{x:"0",y:"0",textAnchor:"middle",fill:"white",fontSize:"10",fontWeight:"bold",children:[s===r[t].comparisons[r[t].comparisons.length-1]?"✓":"↑",e.jsx("animate",{attributeName:"opacity",values:"1;0.5;1",dur:"1.5s",repeatCount:"indefinite"})]})]},a))}),e.jsxs("g",{transform:"translate(300, 350)",children:[e.jsx("rect",{x:"0",y:"0",width:"200",height:"35",rx:"8",fill:"#3b82f6",className:"cursor-pointer hover:fill-blue-600 transition-all duration-300"}),e.jsx("text",{x:"100",y:"24",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",className:"cursor-pointer",children:t<4?"Next Pass →":"Reset"}),e.jsx("text",{x:"100",y:"-10",textAnchor:"middle",fill:"#6b7280",fontSize:"11",children:"Click to animate bubble sort"})]})]}),e.jsx("div",{className:"text-center mt-2",children:e.jsx("button",{onClick:()=>l((t+1)%5),className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300",children:t<4?"Next Pass (Step "+(t+2)+"/5)":"Reset Animation"})})]})},p=()=>e.jsx("svg",{viewBox:"0 0 700 450",className:"w-full h-auto max-w-3xl mx-auto my-4",children:e.jsxs("g",{transform:"translate(20, 20)",children:[e.jsx("ellipse",{cx:"330",cy:"20",rx:"40",ry:"20",fill:"#10b981"}),e.jsx("text",{x:"330",y:"25",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"START"}),e.jsx("line",{x1:"330",y1:"40",x2:"330",y2:"70",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"180",y:"70",width:"300",height:"45",rx:"8",fill:"#eff6ff",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"330",y:"97",textAnchor:"middle",fill:"#1e3a8a",fontSize:"13",fontWeight:"bold",children:"for i = 0 to n-1"}),e.jsx("line",{x1:"330",y1:"115",x2:"330",y2:"145",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"150",y:"145",width:"360",height:"45",rx:"8",fill:"#fef3c7",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"330",y:"172",textAnchor:"middle",fill:"#92400e",fontSize:"13",fontWeight:"bold",children:"for j = 0 to n-i-2"}),e.jsx("line",{x1:"330",y1:"190",x2:"330",y2:"220",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("polygon",{points:"330,220 430,260 330,300 230,260",fill:"#fce7f3",stroke:"#ec4899",strokeWidth:"2"}),e.jsx("text",{x:"330",y:"265",textAnchor:"middle",fill:"#9d174d",fontSize:"12",fontWeight:"bold",children:"arr[j] > arr[j+1]?"}),e.jsx("line",{x1:"430",y1:"260",x2:"530",y2:"260",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"480",y:"253",textAnchor:"middle",fill:"#10b981",fontSize:"11",children:"YES"}),e.jsx("rect",{x:"530",y:"240",width:"130",height:"40",rx:"8",fill:"#dcfce7",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"595",y:"265",textAnchor:"middle",fill:"#166534",fontSize:"12",fontWeight:"bold",children:"Swap Elements"}),e.jsx("line",{x1:"230",y1:"260",x2:"130",y2:"260",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"180",y:"253",textAnchor:"middle",fill:"#ef4444",fontSize:"11",children:"NO"}),e.jsx("rect",{x:"20",y:"240",width:"110",height:"40",rx:"8",fill:"#fee2e2",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"75",y:"265",textAnchor:"middle",fill:"#991b1b",fontSize:"12",fontWeight:"bold",children:"Continue"}),e.jsx("path",{d:"M 595 280 L 595 330 L 330 330 L 330 300",fill:"none",stroke:"#3b82f6",strokeWidth:"2",strokeDasharray:"5,5",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"595",y:"320",textAnchor:"middle",fill:"#3b82f6",fontSize:"10",children:"continue inner loop"}),e.jsx("path",{d:"M 75 280 L 75 370 L 330 370 L 330 300",fill:"none",stroke:"#3b82f6",strokeWidth:"2",strokeDasharray:"5,5",markerEnd:"url(#arrow)"}),e.jsx("ellipse",{cx:"330",cy:"420",rx:"40",ry:"20",fill:"#ef4444"}),e.jsx("text",{x:"330",y:"425",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"END"}),e.jsx("line",{x1:"330",y1:"370",x2:"330",y2:"400",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow)"})]})}),g=()=>e.jsxs("svg",{viewBox:"0 0 700 200",className:"w-full h-auto max-w-3xl mx-auto my-4",children:[e.jsx("rect",{x:"50",y:"20",width:"280",height:"160",rx:"8",fill:"#fee2e2",stroke:"#ef4444",strokeWidth:"1.5"}),e.jsx("text",{x:"190",y:"50",textAnchor:"middle",fill:"#991b1b",fontSize:"14",fontWeight:"bold",children:"Unsorted Array"}),e.jsx("text",{x:"190",y:"75",textAnchor:"middle",fill:"#7f1d1d",fontSize:"12",children:"[64, 34, 25, 12, 22, 11, 90]"}),e.jsx("line",{x1:"70",y1:"90",x2:"310",y2:"90",stroke:"#ef4444",strokeWidth:"1"}),e.jsx("text",{x:"190",y:"115",textAnchor:"middle",fill:"#991b1b",fontSize:"14",fontWeight:"bold",children:"After Bubble Sort"}),e.jsx("text",{x:"190",y:"140",textAnchor:"middle",fill:"#7f1d1d",fontSize:"12",children:"[11, 12, 22, 25, 34, 64, 90]"}),e.jsx("rect",{x:"370",y:"20",width:"280",height:"160",rx:"8",fill:"#dcfce7",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"510",y:"50",textAnchor:"middle",fill:"#14532d",fontSize:"14",fontWeight:"bold",children:"Sorted Ascending"}),e.jsx("text",{x:"510",y:"75",textAnchor:"middle",fill:"#166534",fontSize:"12",children:"Smallest → Largest"}),e.jsx("line",{x1:"390",y1:"90",x2:"630",y2:"90",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"510",y:"115",textAnchor:"middle",fill:"#14532d",fontSize:"14",fontWeight:"bold",children:"Properties"}),e.jsx("text",{x:"510",y:"140",textAnchor:"middle",fill:"#166534",fontSize:"11",children:"Stable | In-place | O(n²)"})]}),W=()=>{const[t,l]=o.useState("theory");return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"mb-8 text-center animate-[fadeInUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4",children:"Bubble Sort - Ascending Order"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed",children:"The simplest sorting algorithm - repeatedly swapping adjacent elements to bubble up the largest"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700",children:["theory","visual","code","practice"].map(r=>e.jsx("button",{onClick:()=>l(r),className:d("px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-300",t===r?"bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"),children:r.charAt(0).toUpperCase()+r.slice(1)},r))}),e.jsxs("div",{className:"space-y-6",children:[t==="theory"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center",children:[e.jsx("span",{className:"bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold",children:"1"}),"What is Bubble Sort?"]}),e.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-4",children:["Bubble sort is a ",e.jsx("strong",{className:"text-blue-600 dark:text-blue-400",children:"simple comparison-based sorting algorithm"})," that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, indicating the list is sorted."]}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-4",children:e.jsxs("p",{className:"text-sm text-blue-800 dark:text-blue-200 font-mono",children:[e.jsx("strong",{children:"Prototype:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"public static void bubbleSort(int[] arr)"}),e.jsx("br",{}),e.jsx("strong",{children:"Return Type:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"void"})," (sorts in-place)",e.jsx("br",{}),e.jsx("strong",{children:"Purpose:"})," Sort array in ascending order by bubbling largest elements to the end"]})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚙️ How Bubble Sort Works"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-3 text-gray-600 dark:text-gray-300",children:[e.jsxs("p",{children:["1️⃣ ",e.jsx("strong",{children:"Start"})," from the beginning of the array"]}),e.jsxs("p",{children:["2️⃣ ",e.jsx("strong",{children:"Compare"})," each adjacent pair (arr[j] and arr[j+1])"]}),e.jsxs("p",{children:["3️⃣ ",e.jsx("strong",{children:"Swap"})," if arr[j] > arr[j+1] (for ascending order)"]}),e.jsxs("p",{children:["4️⃣ ",e.jsx("strong",{children:"After each pass"}),', the largest element "bubbles up" to the end']}),e.jsxs("p",{children:["5️⃣ ",e.jsx("strong",{children:"Repeat"})," passes until no swaps are needed"]}),e.jsxs("p",{children:["6️⃣ ",e.jsx("strong",{children:"Optimization"})," - After i passes, last i elements are sorted"]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Analogy"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Bubbles in a soda:"}),e.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-300 mt-2 list-disc list-inside",children:[e.jsx("li",{children:"Larger bubbles rise faster to the top"}),e.jsx("li",{children:"Smaller bubbles get passed by larger ones"}),e.jsx("li",{children:"Each pass, the largest unsorted bubble reaches its correct position"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🌍 Real-World Examples"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"🎈 Balloon Sorting Game"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:'Teacher Sukanta Hui has students line up by height - tallest students "bubble" to the end through adjacent swaps!'})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"📚 Library Book Arranging"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Librarian in Barrackpore arranging books by call number - each pass moves largest number to correct shelf."})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"🏃‍♂️ Race Results"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Sorting race times - slowest times bubble to bottom, fastest rise to top!"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"📊 Exam Score Sorting"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Angshuman's 95 bubbles up, while lower scores sink down - perfect for small class sizes!"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📊 Complexity Analysis"}),e.jsx(g,{}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 mt-4",children:[e.jsxs("div",{className:"text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Best Case"}),e.jsx("p",{className:"text-xl font-bold text-green-600",children:"O(n)"}),e.jsx("p",{className:"text-xs",children:"Already sorted array"})]}),e.jsxs("div",{className:"text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Average Case"}),e.jsx("p",{className:"text-xl font-bold text-yellow-600",children:"O(n²)"}),e.jsx("p",{className:"text-xs",children:"Random order"})]}),e.jsxs("div",{className:"text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Worst Case"}),e.jsx("p",{className:"text-xl font-bold text-red-600",children:"O(n²)"}),e.jsx("p",{className:"text-xs",children:"Reverse sorted"})]}),e.jsxs("div",{className:"text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Space"}),e.jsx("p",{className:"text-xl font-bold text-blue-600",children:"O(1)"}),e.jsx("p",{className:"text-xs",children:"In-place sorting"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"✨ Properties of Bubble Sort"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-green-600",children:"✓ Stable Sort"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Equal elements maintain their relative order"})]}),e.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-blue-600",children:"✓ In-place Algorithm"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"No extra memory needed"})]}),e.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-yellow-600",children:"✓ Adaptive"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Performance improves on partially sorted arrays"})]}),e.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-purple-600",children:"✓ Online"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Can sort as elements arrive"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"💡 Tips & Tricks"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Optimization 1:"})," Use a ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"swapped"})," flag to detect early completion"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Optimization 2:"})," Reduce inner loop range by ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"i"})," since last i elements are sorted"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"When to use:"})," Small datasets (n < 100) or nearly sorted data"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Educational value:"})," Best for teaching sorting concepts, not production use"]})]})]}),e.jsx(n,{note:"Bubble sort is the 'hello world' of sorting algorithms! I tell my students in Barrackpore: 'Watch the largest numbers bubble up like air bubbles in water.' The optimization with swapped flag is crucial - without it, bubble sort always does n² comparisons. Have students trace with small arrays first (5-6 elements)."})]}),t==="visual"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"👁️ Visual Walkthrough"}),e.jsx(b,{}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-4",children:"Click 'Next Pass' to see how largest elements bubble to the end"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📐 Algorithm Flowchart"}),e.jsx(p,{})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📝 Dry Run Example"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-700/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-2 text-left text-sm font-semibold",children:"Pass"}),e.jsx("th",{className:"px-2 py-2 text-left text-sm font-semibold",children:"j"}),e.jsx("th",{className:"px-2 py-2 text-left text-sm font-semibold",children:"arr[j]"}),e.jsx("th",{className:"px-2 py-2 text-left text-sm font-semibold",children:"arr[j+1]"}),e.jsx("th",{className:"px-2 py-2 text-left text-sm font-semibold",children:"Swap?"}),e.jsx("th",{className:"px-2 py-2 text-left text-sm font-semibold",children:"Array After"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[{pass:1,j:0,a:64,b:34,swap:"✓",result:"[34, 64, 25, 12, 22, 11, 90]"},{pass:1,j:1,a:64,b:25,swap:"✓",result:"[34, 25, 64, 12, 22, 11, 90]"},{pass:1,j:2,a:64,b:12,swap:"✓",result:"[34, 25, 12, 64, 22, 11, 90]"},{pass:1,j:3,a:64,b:22,swap:"✓",result:"[34, 25, 12, 22, 64, 11, 90]"},{pass:1,j:4,a:64,b:11,swap:"✓",result:"[34, 25, 12, 22, 11, 64, 90]"},{pass:1,j:5,a:64,b:90,swap:"✗",result:"[34, 25, 12, 22, 11, 64, 90]"},{pass:2,j:0,a:34,b:25,swap:"✓",result:"[25, 34, 12, 22, 11, 64, 90]"},{pass:2,j:1,a:34,b:12,swap:"✓",result:"[25, 12, 34, 22, 11, 64, 90]"},{pass:2,j:2,a:34,b:22,swap:"✓",result:"[25, 12, 22, 34, 11, 64, 90]"},{pass:2,j:3,a:34,b:11,swap:"✓",result:"[25, 12, 22, 11, 34, 64, 90]"}].map((r,s)=>e.jsxs("tr",{className:r.swap==="✓"?"bg-yellow-50 dark:bg-yellow-900/10":"",children:[e.jsx("td",{className:"px-2 py-1 text-xs",children:r.pass}),e.jsx("td",{className:"px-2 py-1 text-xs",children:r.j}),e.jsx("td",{className:"px-2 py-1 text-xs",children:r.a}),e.jsx("td",{className:"px-2 py-1 text-xs",children:r.b}),e.jsx("td",{className:"px-2 py-1 text-xs",children:r.swap}),e.jsx("td",{className:"px-2 py-1 text-xs font-mono",children:r.result})]},s))})]})})]}),e.jsx(n,{note:"The step-by-step table is gold! Have students trace the entire algorithm manually before coding. I make my students in Ichapur simulate bubble sort with index cards - physical manipulation builds mental models that last!"})]}),t==="code"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(i,{fileModule:c,title:"BubbleSortBasic.java",highlightLines:[]}),e.jsx(i,{fileModule:x,title:"BubbleSortOptimized.java",highlightLines:[]}),e.jsx(i,{fileModule:m,title:"BubbleSortStepByStep.java",highlightLines:[]}),e.jsx(i,{fileModule:h,title:"BubbleSortWithStrings.java",highlightLines:[]})]})]}),e.jsx(n,{note:"Start with the basic version, then introduce optimizations gradually. The 'swapped' flag optimization is a great lesson in algorithm analysis - students can see how it improves performance on nearly-sorted data!"})]}),t==="practice"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Off-by-one in inner loop"}),e.jsxs("p",{className:"text-sm",children:["Using ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"j < arr.length - 1"})," without subtracting i causes unnecessary comparisons"]})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Forgetting swapped flag optimization"}),e.jsx("p",{className:"text-sm",children:"Basic version always does n² comparisons even on sorted array"})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Incorrect swap logic"}),e.jsxs("p",{className:"text-sm",children:["Using ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"arr[j] = arr[j+1]"})," without temporary variable loses data"]})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"✅ Best Practices"}),e.jsxs("ul",{className:"space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside",children:[e.jsx("li",{children:"Always use the optimized version with swapped flag"}),e.jsx("li",{children:"Reduce inner loop range by i to avoid checking sorted elements"}),e.jsx("li",{children:"Use meaningful variable names (not just i, j but array, n)"}),e.jsx("li",{children:"Extract swap logic into separate method for clarity"}),e.jsx("li",{children:"Test with edge cases: empty array, single element, already sorted, reverse sorted"})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"💭 Think About..."}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"🤔 Why does the largest element always end up at the correct position after first pass?"}),e.jsx("li",{children:"🤔 How would you modify bubble sort to sort in descending order?"}),e.jsx("li",{children:"🤔 What happens to the algorithm's complexity if array is already sorted?"}),e.jsx("li",{children:"🤔 Why is bubble sort called a 'stable' sorting algorithm?"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🎯 Questions & Answers"}),e.jsx("div",{className:"space-y-4",children:u.map((r,s)=>e.jsxs("details",{className:"group border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("summary",{className:"cursor-pointer p-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:r.question}),e.jsx("div",{className:"p-4 pt-0 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700",children:r.answer})]},s))})]}),e.jsx(n,{note:"The 'why bubble sort?' question always comes up. Be honest - it's not for production. But it teaches core concepts: nested loops, swapping, in-place modification, and optimization. The swapped flag optimization is particularly satisfying to explain - students see how one boolean can dramatically improve performance!"})]})]})]}),e.jsx("style",{children:`
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
      `})]})},u=[{question:"What is bubble sort and how does it work?",answer:"Bubble sort repeatedly steps through array, compares adjacent elements, and swaps if they're in wrong order. Largest elements 'bubble' to end after each pass."},{question:"What is the time complexity of bubble sort?",answer:"Best case O(n) with optimization, average O(n²), worst O(n²). Without optimization, always O(n²)."},{question:"Why is bubble sort called 'bubble' sort?",answer:"Larger elements 'bubble up' to their correct position at the end of the array, similar to bubbles rising in water."},{question:"How can bubble sort be optimized?",answer:"Add swapped flag to detect early completion, reduce inner loop range by i since last i elements are sorted."},{question:"Is bubble sort stable?",answer:"Yes! Equal elements maintain their relative order because swaps only occur when left > right."},{question:"What's the space complexity of bubble sort?",answer:"O(1) - sorts in-place using only a temporary variable for swapping, no extra memory needed."},{question:"How many passes does bubble sort need?",answer:"In worst case, n-1 passes. With optimization, stops early when array becomes sorted."},{question:"When should you use bubble sort?",answer:"Small datasets (n < 100), nearly sorted data, educational purposes, or when simplicity is priority."},{question:"How to sort in descending order using bubble sort?",answer:"Change swap condition to arr[j] < arr[j+1] (swap when left is smaller than right)."},{question:"What's the difference between bubble sort and selection sort?",answer:"Bubble sort swaps adjacent elements repeatedly. Selection sort finds minimum and places at beginning in one swap per pass."},{question:"Why does inner loop run until n-i-2?",answer:"After i passes, last i elements are sorted and don't need checking. -2 because j+1 must be valid index."},{question:"What happens to largest element after first pass?",answer:"It 'bubbles' all the way to the end (index n-1) through successive swaps."},{question:"How many comparisons in worst case?",answer:"n(n-1)/2 comparisons. For n=100, that's 4,950 comparisons."},{question:"Can bubble sort handle strings?",answer:"Yes, using compareTo() method. Swap when left.compareTo(right) > 0 for ascending order."},{question:"What's a 'pass' in bubble sort?",answer:"One complete iteration from start to end of unsorted portion, performing adjacent comparisons and swaps."},{question:"How to detect array is sorted early?",answer:"Track swaps in a boolean. If no swaps in a complete pass, array is sorted - break early."},{question:"What's the difference between bubble sort and insertion sort?",answer:"Both O(n²). Insertion sort builds sorted portion by inserting elements. Bubble sort repeatedly swaps adjacent pairs."},{question:"Why is bubble sort inefficient for large datasets?",answer:"Quadratic time complexity O(n²) becomes impractical for large n. For n=10,000, it needs ~50 million comparisons."},{question:"How to implement bubble sort for ArrayList?",answer:"Same logic using arr.get(j) and arr.set(j, value) methods instead of array indexing."},{question:"What's 'cocktail shaker sort'?",answer:"Variation of bubble sort that sorts in both directions (left-to-right then right-to-left), potentially faster for certain patterns."}];export{W as default};
