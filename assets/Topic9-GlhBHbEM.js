import{r as l,j as e}from"./index-BRkQtvvo.js";import{c as o}from"./clsx-B-dksMZM.js";import{T as n}from"./TeacherSukantaHui-B1SgCAnr.js";import{J as s}from"./JavaFileLoader-B0vdGwHl.js";import"./git-branch-C248mFH1.js";import"./JavaCodeBlock-DANzwlpc.js";import"./prism-Bp9tolF5.js";import"./browser-UOaIe3LW.js";import"./prism-java-BwO6k4I_.js";const d=`import java.util.Arrays;\r
\r
public class BinarySearchBasic {\r
    \r
    // Iterative binary search\r
    public static int binarySearch(int[] arr, int target) {\r
        if (arr == null || arr.length == 0) {\r
            return -1;\r
        }\r
        \r
        int low = 0;\r
        int high = arr.length - 1;\r
        \r
        while (low <= high) {\r
            // Prevent overflow\r
            int mid = low + (high - low) / 2;\r
            \r
            if (arr[mid] == target) {\r
                return mid;  // Found\r
            } else if (target < arr[mid]) {\r
                high = mid - 1;  // Search left half\r
            } else {\r
                low = mid + 1;   // Search right half\r
            }\r
        }\r
        \r
        return -1;  // Not found\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] marks = {12, 23, 34, 45, 56, 67, 78, 89, 90};\r
        \r
        System.out.println("Array: " + Arrays.toString(marks));\r
        \r
        int searchFor = 67;\r
        int result = binarySearch(marks, searchFor);\r
        \r
        if (result != -1) {\r
            System.out.println(searchFor + " found at index: " + result);\r
        } else {\r
            System.out.println(searchFor + " not found");\r
        }\r
        \r
        // Search for non-existent value\r
        System.out.println("Searching for 100: " + binarySearch(marks, 100));\r
    }\r
}`,c=`import java.util.Arrays;\r
\r
public class BinarySearchRecursive {\r
    \r
    // Recursive binary search\r
    public static int binarySearchRecursive(int[] arr, int target, int low, int high) {\r
        // Base case: element not found\r
        if (low > high) {\r
            return -1;\r
        }\r
        \r
        int mid = low + (high - low) / 2;\r
        \r
        if (arr[mid] == target) {\r
            return mid;  // Found\r
        } else if (target < arr[mid]) {\r
            return binarySearchRecursive(arr, target, low, mid - 1);  // Search left\r
        } else {\r
            return binarySearchRecursive(arr, target, mid + 1, high); // Search right\r
        }\r
    }\r
    \r
    // Wrapper method for convenience\r
    public static int binarySearch(int[] arr, int target) {\r
        if (arr == null) return -1;\r
        return binarySearchRecursive(arr, target, 0, arr.length - 1);\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] scores = {15, 25, 35, 45, 55, 65, 75, 85, 95};\r
        \r
        System.out.println("Array: " + Arrays.toString(scores));\r
        \r
        int[] testValues = {55, 100, 15, 95};\r
        \r
        for (int target : testValues) {\r
            int result = binarySearch(scores, target);\r
            if (result != -1) {\r
                System.out.println(target + " found at index: " + result);\r
            } else {\r
                System.out.println(target + " not found");\r
            }\r
        }\r
    }\r
}`,h=`import java.util.Arrays;\r
\r
public class BinarySearchFirstLast {\r
    \r
    // Find first occurrence\r
    public static int findFirst(int[] arr, int target) {\r
        if (arr == null) return -1;\r
        \r
        int low = 0;\r
        int high = arr.length - 1;\r
        int result = -1;\r
        \r
        while (low <= high) {\r
            int mid = low + (high - low) / 2;\r
            \r
            if (arr[mid] == target) {\r
                result = mid;      // Found, but continue searching left\r
                high = mid - 1;    // Look for earlier occurrence\r
            } else if (target < arr[mid]) {\r
                high = mid - 1;\r
            } else {\r
                low = mid + 1;\r
            }\r
        }\r
        \r
        return result;\r
    }\r
    \r
    // Find last occurrence\r
    public static int findLast(int[] arr, int target) {\r
        if (arr == null) return -1;\r
        \r
        int low = 0;\r
        int high = arr.length - 1;\r
        int result = -1;\r
        \r
        while (low <= high) {\r
            int mid = low + (high - low) / 2;\r
            \r
            if (arr[mid] == target) {\r
                result = mid;      // Found, but continue searching right\r
                low = mid + 1;     // Look for later occurrence\r
            } else if (target < arr[mid]) {\r
                high = mid - 1;\r
            } else {\r
                low = mid + 1;\r
            }\r
        }\r
        \r
        return result;\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] numbers = {10, 20, 20, 20, 30, 30, 40, 50, 50, 60};\r
        \r
        System.out.println("Array: " + Arrays.toString(numbers));\r
        \r
        int target = 20;\r
        int first = findFirst(numbers, target);\r
        int last = findLast(numbers, target);\r
        \r
        System.out.println("Target: " + target);\r
        System.out.println("First occurrence at index: " + first);\r
        System.out.println("Last occurrence at index: " + last);\r
        System.out.println("Frequency: " + (last - first + 1));\r
        \r
        // Student example from Barrackpore school\r
        int[] rollNos = {101, 102, 103, 103, 103, 104, 105, 106};\r
        System.out.println("\\nRoll numbers: " + Arrays.toString(rollNos));\r
        System.out.println("First student with roll 103: " + findFirst(rollNos, 103));\r
        System.out.println("Last student with roll 103: " + findLast(rollNos, 103));\r
    }\r
}`,x=`import java.util.Arrays;\r
\r
public class BinarySearchInsertionPoint {\r
    \r
    // Find insertion point (where element would be inserted)\r
    public static int findInsertionPoint(int[] arr, int target) {\r
        if (arr == null) return 0;\r
        \r
        int low = 0;\r
        int high = arr.length - 1;\r
        \r
        while (low <= high) {\r
            int mid = low + (high - low) / 2;\r
            \r
            if (arr[mid] == target) {\r
                return mid;  // Element exists, insert at same position\r
            } else if (target < arr[mid]) {\r
                high = mid - 1;\r
            } else {\r
                low = mid + 1;\r
            }\r
        }\r
        \r
        return low;  // Insertion point\r
    }\r
    \r
    // Insert element maintaining sorted order\r
    public static int[] insertElement(int[] arr, int element) {\r
        int pos = findInsertionPoint(arr, element);\r
        int[] newArr = new int[arr.length + 1];\r
        \r
        // Copy elements before insertion point\r
        for (int i = 0; i < pos; i++) {\r
            newArr[i] = arr[i];\r
        }\r
        \r
        // Insert new element\r
        newArr[pos] = element;\r
        \r
        // Copy remaining elements\r
        for (int i = pos; i < arr.length; i++) {\r
            newArr[i + 1] = arr[i];\r
        }\r
        \r
        return newArr;\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] scores = {10, 20, 30, 40, 50, 60};\r
        \r
        System.out.println("Original array: " + Arrays.toString(scores));\r
        \r
        int[] testElements = {25, 5, 65, 30};\r
        \r
        for (int elem : testElements) {\r
            int insertionPoint = findInsertionPoint(scores, elem);\r
            System.out.println("Insert " + elem + " at index: " + insertionPoint);\r
        }\r
        \r
        // Insert 35 into array\r
        int[] newScores = insertElement(scores, 35);\r
        System.out.println("\\nAfter inserting 35: " + Arrays.toString(newScores));\r
        \r
        // Student grades example\r
        int[] grades = {65, 70, 75, 80, 85, 90};\r
        int tuhinasGrade = 82;\r
        int pos = findInsertionPoint(grades, tuhinasGrade);\r
        System.out.println("\\nTuhina's grade " + tuhinasGrade + \r
                           " would be inserted at position " + pos);\r
    }\r
}`,m=()=>e.jsxs("svg",{viewBox:"0 0 800 250",className:"w-full h-auto max-w-4xl mx-auto my-4","aria-label":"Binary Search Step-by-Step Visualization",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"binaryGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#8b5cf6",stopOpacity:.1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#ec4899",stopOpacity:.2}})]}),e.jsx("filter",{id:"shadow",x:"-5%",y:"-5%",width:"110%",height:"110%",children:e.jsx("feDropShadow",{dx:"1",dy:"1",stdDeviation:"2",floodOpacity:"0.2"})}),e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#8b5cf6"})})]}),e.jsx("text",{x:"400",y:"25",textAnchor:"middle",fill:"#6b7280",fontSize:"12",children:"Initial Sorted Array"}),[2,5,8,12,16,23,38,45,56,67].map((t,i)=>e.jsxs("g",{transform:`translate(${i*72+30}, 35)`,children:[e.jsx("rect",{x:"0",y:"0",width:"62",height:"40",rx:"4",fill:"#ffffff",stroke:"#8b5cf6",strokeWidth:"1.5",filter:"url(#shadow)"}),e.jsx("text",{x:"31",y:"25",textAnchor:"middle",fill:"#1e293b",fontSize:"13",fontWeight:"bold",children:t}),e.jsx("text",{x:"31",y:"52",textAnchor:"middle",fill:"#94a3b8",fontSize:"9",children:i})]},i)),e.jsx("text",{x:"400",y:"115",textAnchor:"middle",fill:"#8b5cf6",fontSize:"14",fontWeight:"bold",children:"Searching for target: 38"}),e.jsxs("g",{transform:"translate(30, 130)",children:[e.jsx("rect",{x:"0",y:"0",width:"740",height:"35",rx:"6",fill:"#f3e8ff",stroke:"#8b5cf6",strokeWidth:"1"}),e.jsx("text",{x:"15",y:"23",fill:"#6b21a8",fontSize:"12",fontWeight:"bold",children:"Step 1:"}),e.jsx("text",{x:"80",y:"23",fill:"#4c1d95",fontSize:"12",children:"low = 0, high = 9 → mid = (0+9)/2 = 4 → arr[4] = 16"}),e.jsx("text",{x:"550",y:"23",fill:"#ef4444",fontSize:"12",children:"16 < 38 → go right"})]}),e.jsxs("g",{transform:"translate(30, 175)",children:[e.jsx("rect",{x:"0",y:"0",width:"740",height:"35",rx:"6",fill:"#fce7f3",stroke:"#ec4899",strokeWidth:"1"}),e.jsx("text",{x:"15",y:"23",fill:"#be185d",fontSize:"12",fontWeight:"bold",children:"Step 2:"}),e.jsx("text",{x:"80",y:"23",fill:"#9d174d",fontSize:"12",children:"low = 5, high = 9 → mid = (5+9)/2 = 7 → arr[7] = 45"}),e.jsx("text",{x:"550",y:"23",fill:"#ef4444",fontSize:"12",children:"45 > 38 → go left"})]}),e.jsxs("g",{transform:"translate(30, 220)",children:[e.jsx("rect",{x:"0",y:"0",width:"740",height:"35",rx:"6",fill:"#dcfce7",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"15",y:"23",fill:"#047857",fontSize:"12",fontWeight:"bold",children:"Step 3:"}),e.jsx("text",{x:"80",y:"23",fill:"#065f46",fontSize:"12",children:"low = 5, high = 6 → mid = (5+6)/2 = 5 → arr[5] = 23"}),e.jsx("text",{x:"550",y:"23",fill:"#10b981",fontSize:"12",children:"23 < 38 → go right"})]}),e.jsxs("g",{transform:"translate(200, 265)",children:[e.jsx("rect",{x:"0",y:"0",width:"400",height:"35",rx:"6",fill:"#dcfce7",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"15",y:"23",fill:"#047857",fontSize:"12",fontWeight:"bold",children:"Step 4:"}),e.jsx("text",{x:"80",y:"23",fill:"#065f46",fontSize:"12",children:"low = 6, high = 6 → arr[6] = 38 ✓ FOUND!"})]})]}),g=()=>e.jsx("svg",{viewBox:"0 0 600 350",className:"w-full h-auto max-w-2xl mx-auto my-4","aria-label":"Binary Search Decision Tree",children:e.jsxs("g",{transform:"translate(300, 30)",children:[e.jsx("circle",{cx:"0",cy:"0",r:"28",fill:"#8b5cf6",stroke:"#6d28d9",strokeWidth:"2",className:"transition-all duration-300 hover:scale-105",children:e.jsx("animate",{attributeName:"opacity",values:"1;0.8;1",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"0",y:"5",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"mid=4"}),e.jsx("line",{x1:"0",y1:"28",x2:"-120",y2:"70",stroke:"#cbd5e1",strokeWidth:"2"}),e.jsx("line",{x1:"0",y1:"28",x2:"120",y2:"70",stroke:"#cbd5e1",strokeWidth:"2"}),e.jsx("circle",{cx:"-120",cy:"70",r:"28",fill:"#a78bfa",stroke:"#6d28d9",strokeWidth:"2",className:"transition-all duration-300 hover:scale-105",children:e.jsx("text",{x:"-120",y:"75",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"mid=1"})}),e.jsx("circle",{cx:"120",cy:"70",r:"28",fill:"#a78bfa",stroke:"#6d28d9",strokeWidth:"2",className:"transition-all duration-300 hover:scale-105",children:e.jsx("text",{x:"120",y:"75",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"mid=7"})}),e.jsx("line",{x1:"-120",y1:"98",x2:"-200",y2:"140",stroke:"#cbd5e1",strokeWidth:"2"}),e.jsx("line",{x1:"-120",y1:"98",x2:"-40",y2:"140",stroke:"#cbd5e1",strokeWidth:"2"}),e.jsx("line",{x1:"120",y1:"98",x2:"40",y2:"140",stroke:"#cbd5e1",strokeWidth:"2"}),e.jsx("line",{x1:"120",y1:"98",x2:"200",y2:"140",stroke:"#cbd5e1",strokeWidth:"2"}),e.jsx("circle",{cx:"-200",cy:"140",r:"28",fill:"#c4b5fd",stroke:"#6d28d9",strokeWidth:"2",children:e.jsx("text",{x:"-200",y:"145",textAnchor:"middle",fill:"#4c1d95",fontSize:"12",fontWeight:"bold",children:"mid=0"})}),e.jsx("circle",{cx:"-40",cy:"140",r:"28",fill:"#c4b5fd",stroke:"#6d28d9",strokeWidth:"2",children:e.jsx("text",{x:"-40",y:"145",textAnchor:"middle",fill:"#4c1d95",fontSize:"12",fontWeight:"bold",children:"mid=2"})}),e.jsx("circle",{cx:"40",cy:"140",r:"28",fill:"#c4b5fd",stroke:"#6d28d9",strokeWidth:"2",children:e.jsx("text",{x:"40",y:"145",textAnchor:"middle",fill:"#4c1d95",fontSize:"12",fontWeight:"bold",children:"mid=6"})}),e.jsx("circle",{cx:"200",cy:"140",r:"28",fill:"#c4b5fd",stroke:"#6d28d9",strokeWidth:"2",children:e.jsx("text",{x:"200",y:"145",textAnchor:"middle",fill:"#4c1d95",fontSize:"12",fontWeight:"bold",children:"mid=8"})}),e.jsx("text",{x:"-250",y:"175",textAnchor:"middle",fill:"#10b981",fontSize:"11",fontWeight:"bold",children:"left"}),e.jsx("text",{x:"250",y:"175",textAnchor:"middle",fill:"#ef4444",fontSize:"11",fontWeight:"bold",children:"right"}),e.jsxs("g",{transform:"translate(-280, 220)",children:[e.jsx("text",{x:"0",y:"0",fill:"#1e293b",fontSize:"11",fontWeight:"bold",children:"Decision Path:"}),e.jsx("circle",{cx:"0",cy:"20",r:"6",fill:"#8b5cf6"}),e.jsx("text",{x:"15",y:"25",fill:"#6b7280",fontSize:"10",children:"Compare mid element"}),e.jsx("path",{d:"M 0 35 L 0 45",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrowhead)"}),e.jsx("text",{x:"15",y:"50",fill:"#10b981",fontSize:"10",children:"Go left if target < mid"}),e.jsx("path",{d:"M 0 60 L 0 70",stroke:"#ef4444",strokeWidth:"2",markerEnd:"url(#arrowhead)"}),e.jsx("text",{x:"15",y:"75",fill:"#ef4444",fontSize:"10",children:"Go right if target > mid"})]})]})}),y=()=>e.jsxs("svg",{viewBox:"0 0 700 200",className:"w-full h-auto max-w-3xl mx-auto my-4",children:[e.jsx("rect",{x:"50",y:"20",width:"280",height:"160",rx:"8",fill:"#fee2e2",stroke:"#ef4444",strokeWidth:"1.5"}),e.jsx("text",{x:"190",y:"45",textAnchor:"middle",fill:"#991b1b",fontSize:"14",fontWeight:"bold",children:"Linear Search - O(n)"}),e.jsx("line",{x1:"70",y1:"160",x2:"310",y2:"160",stroke:"#991b1b",strokeWidth:"2"}),e.jsx("line",{x1:"70",y1:"160",x2:"70",y2:"160",stroke:"#991b1b",strokeWidth:"2"}),e.jsx("line",{x1:"310",y1:"60",x2:"310",y2:"160",stroke:"#991b1b",strokeWidth:"2",strokeDasharray:"4"}),e.jsx("text",{x:"310",y:"55",textAnchor:"middle",fill:"#991b1b",fontSize:"10",children:"n=10"}),e.jsx("rect",{x:"370",y:"20",width:"280",height:"160",rx:"8",fill:"#dcfce7",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"510",y:"45",textAnchor:"middle",fill:"#14532d",fontSize:"14",fontWeight:"bold",children:"Binary Search - O(log n)"}),e.jsx("line",{x1:"390",y1:"160",x2:"630",y2:"160",stroke:"#14532d",strokeWidth:"2"}),e.jsx("line",{x1:"390",y1:"160",x2:"390",y2:"160",stroke:"#14532d",strokeWidth:"2"}),e.jsx("line",{x1:"630",y1:"120",x2:"630",y2:"160",stroke:"#14532d",strokeWidth:"2",strokeDasharray:"4"}),e.jsx("text",{x:"630",y:"115",textAnchor:"middle",fill:"#14532d",fontSize:"10",children:"log₂10≈3.3"}),e.jsx("text",{x:"510",y:"175",textAnchor:"middle",fill:"#6b7280",fontSize:"11",children:"~3 comparisons vs 10 comparisons!"})]}),W=()=>{const[t,i]=l.useState("theory");return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"mb-8 text-center animate-[fadeInUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4",children:"Binary Search in Sorted Arrays"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed",children:"Divide and conquer search algorithm - O(log n) time complexity"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700",children:["theory","visual","code","practice"].map(r=>e.jsx("button",{onClick:()=>i(r),className:o("px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-300",t===r?"bg-purple-50 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 border-b-2 border-purple-600":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"),children:r.charAt(0).toUpperCase()+r.slice(1)},r))}),e.jsxs("div",{className:"space-y-6",children:[t==="theory"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center",children:[e.jsx("span",{className:"bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold",children:"1"}),"What is Binary Search?"]}),e.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-4",children:["Binary search is an ",e.jsx("strong",{className:"text-purple-600 dark:text-purple-400",children:"efficient searching algorithm"})," that works on ",e.jsx("strong",{className:"text-purple-600 dark:text-purple-400",children:"sorted arrays"})," by repeatedly dividing the search interval in half. It compares the target value with the middle element and eliminates half of the remaining elements in each step."]}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg mb-4",children:e.jsxs("p",{className:"text-sm text-purple-800 dark:text-purple-200 font-mono",children:[e.jsx("strong",{children:"Prototype:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"public static int binarySearch(int[] arr, int target)"}),e.jsx("br",{}),e.jsx("strong",{children:"Return Type:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"int"})," (index if found, -1 if not found)",e.jsx("br",{}),e.jsx("strong",{children:"Precondition:"})," Array MUST be sorted in ascending order",e.jsx("br",{}),e.jsx("strong",{children:"Purpose:"})," Fast search in sorted datasets"]})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚙️ How Binary Search Works"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-3 text-gray-600 dark:text-gray-300",children:[e.jsxs("p",{children:["1️⃣ ",e.jsx("strong",{children:"Initialize"})," low = 0, high = arr.length - 1"]}),e.jsxs("p",{children:["2️⃣ ",e.jsx("strong",{children:"Calculate mid"})," = (low + high) / 2"]}),e.jsxs("p",{children:["3️⃣ ",e.jsx("strong",{children:"Compare"})," arr[mid] with target"]}),e.jsxs("p",{children:["4️⃣ ",e.jsx("strong",{children:"If match"})," → return mid"]}),e.jsxs("p",{children:["5️⃣ ",e.jsx("strong",{children:"If target < arr[mid]"})," → high = mid - 1"]}),e.jsxs("p",{children:["6️⃣ ",e.jsx("strong",{children:"If target > arr[mid]"})," → low = mid + 1"]}),e.jsxs("p",{children:["7️⃣ ",e.jsx("strong",{children:"Repeat"})," until low > high"]}),e.jsxs("p",{children:["8️⃣ ",e.jsx("strong",{children:"Return -1"})," if not found"]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Analogy"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Finding a page in a book:"}),e.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-300 mt-2 list-disc list-inside",children:[e.jsx("li",{children:"Open to middle page"}),e.jsx("li",{children:"If target page is earlier → go left half"}),e.jsx("li",{children:"If later → go right half"}),e.jsx("li",{children:"Repeat until found"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🌍 Real-World Examples"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"📞 Phone Directory"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:'Finding "Sukanta Hui" in alphabetical directory - open middle, compare, eliminate half!'})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"🎮 Number Guessing Game"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Guess number between 1-100 - each guess cuts possibilities in half!"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"📚 Dictionary Lookup"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:'Finding "Binary Search" in dictionary - alphabetical order enables binary search!'})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"🗺️ Map Navigation"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Finding Barrackpore on sorted list of West Bengal cities!"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📊 Complexity Analysis"}),e.jsx(y,{}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 mt-4",children:[e.jsxs("div",{className:"text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Best Case"}),e.jsx("p",{className:"text-xl font-bold text-green-600",children:"O(1)"}),e.jsx("p",{className:"text-xs",children:"Middle element"})]}),e.jsxs("div",{className:"text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Average Case"}),e.jsx("p",{className:"text-xl font-bold text-yellow-600",children:"O(log n)"}),e.jsx("p",{className:"text-xs",children:"Logarithmic"})]}),e.jsxs("div",{className:"text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Worst Case"}),e.jsx("p",{className:"text-xl font-bold text-red-600",children:"O(log n)"}),e.jsx("p",{className:"text-xs",children:"Not found"})]}),e.jsxs("div",{className:"text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Space (Iterative)"}),e.jsx("p",{className:"text-xl font-bold text-blue-600",children:"O(1)"}),e.jsx("p",{className:"text-xs",children:"Constant"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"💡 Tips & Tricks"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Avoid overflow:"})," Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"mid = low + (high - low) / 2"})," instead of ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"(low + high)/2"})]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Sorted requirement:"})," Always verify array is sorted before binary search"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Built-in method:"})," Java provides ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"Arrays.binarySearch()"})]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Insertion point:"})," Return value ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"-(insertion point) - 1"})," when not found"]})]})]}),e.jsx(n,{note:"Binary search is a game-changer! Show students how searching in 1 billion elements takes only 30 comparisons (log₂ 1B ≈ 30). Compare with linear search's 1 billion comparisons. This blew my Barrackpore students' minds! Always emphasize - the array MUST be sorted first!"})]}),t==="visual"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"👁️ Visual Walkthrough"}),e.jsx(m,{})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🌲 Decision Tree Representation"}),e.jsx(g,{}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-4",children:"Each node represents a comparison, reducing search space by half"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📝 Dry Run Example"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-700/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"Step"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"low"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"high"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"mid"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"arr[mid]"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"Comparison"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"Action"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[{step:1,low:0,high:9,mid:4,val:16,compare:"16 < 38",action:"low = 5"},{step:2,low:5,high:9,mid:7,val:45,compare:"45 > 38",action:"high = 6"},{step:3,low:5,high:6,mid:5,val:23,compare:"23 < 38",action:"low = 6"},{step:4,low:6,high:6,mid:6,val:38,compare:"38 == 38",action:"✓ FOUND at 6"}].map((r,a)=>e.jsxs("tr",{className:r.action.includes("FOUND")?"bg-green-50 dark:bg-green-900/20":"",children:[e.jsx("td",{className:"px-3 py-2 text-sm",children:r.step}),e.jsx("td",{className:"px-3 py-2 text-sm",children:r.low}),e.jsx("td",{className:"px-3 py-2 text-sm",children:r.high}),e.jsx("td",{className:"px-3 py-2 text-sm",children:r.mid}),e.jsx("td",{className:"px-3 py-2 text-sm",children:r.val}),e.jsx("td",{className:"px-3 py-2 text-sm",children:r.compare}),e.jsx("td",{className:"px-3 py-2 text-sm font-medium",children:r.action})]},a))})]})})]}),e.jsx(n,{note:"The decision tree visualization is powerful. I tell my students: 'Binary search is like playing the number guessing game with a smart friend who always says higher/lower.' Have them simulate with different targets!"})]}),t==="code"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(s,{fileModule:d,title:"BinarySearchBasic.java",highlightLines:[]}),e.jsx(s,{fileModule:c,title:"BinarySearchRecursive.java",highlightLines:[]}),e.jsx(s,{fileModule:h,title:"BinarySearchFirstLast.java",highlightLines:[]}),e.jsx(s,{fileModule:x,title:"BinarySearchInsertionPoint.java",highlightLines:[]})]})]}),e.jsx(n,{note:"The recursive version is elegant but watch out for stack overflow on very large arrays. Always prefer iterative for production code. Show both so students understand the trade-offs!"})]}),t==="practice"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Unsorted array assumption"}),e.jsx("p",{className:"text-sm",children:"Binary search gives WRONG results on unsorted arrays - always sort first!"})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Integer overflow in mid calculation"}),e.jsxs("p",{className:"text-sm",children:[e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"(low + high) / 2"})," can overflow for large arrays near 2^31"]})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Off-by-one errors"}),e.jsx("p",{className:"text-sm",children:"Incorrect high = mid instead of mid-1, or low = mid instead of mid+1 causes infinite loops"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"✅ Best Practices"}),e.jsxs("ul",{className:"space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside",children:[e.jsx("li",{children:"Always verify array is sorted before binary search"}),e.jsxs("li",{children:["Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"low + (high - low) / 2"})," for mid calculation"]}),e.jsxs("li",{children:["Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"while (low <= high)"})," for proper bounds"]}),e.jsxs("li",{children:["Consider using built-in ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"Arrays.binarySearch()"})," for production code"]}),e.jsx("li",{children:"Document that array must be sorted (precondition)"})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"💭 Think About..."}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"🤔 What happens if array has duplicate elements? Which index is returned?"}),e.jsx("li",{children:"🤔 How would you find the FIRST occurrence of target with duplicates?"}),e.jsx("li",{children:"🤔 Why is binary search not efficient for linked lists?"}),e.jsx("li",{children:"🤔 Can binary search work on descending sorted arrays?"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🎯 Questions & Answers"}),e.jsx("div",{className:"space-y-4",children:p.map((r,a)=>e.jsxs("details",{className:"group border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("summary",{className:"cursor-pointer p-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:r.question}),e.jsx("div",{className:"p-4 pt-0 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700",children:r.answer})]},a))})]}),e.jsx(n,{note:"The key insight: Binary search reduces the problem size by half each time. Have students calculate how many steps for different array sizes. My favorite question: 'How many comparisons to find a number in a phone book of 1 million names?' Answer: Only ~20!"})]})]})]}),e.jsx("style",{children:`
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
      `})]})},p=[{question:"What is binary search and when is it used?",answer:"Binary search is an efficient O(log n) algorithm that finds elements in sorted arrays by repeatedly dividing the search space in half. Used when dataset is sorted and search operations are frequent."},{question:"Why does binary search require sorted arrays?",answer:"Binary search relies on the ordering property to eliminate half the elements. Without sorting, we cannot determine which half contains the target."},{question:"What is the time complexity of binary search?",answer:"O(log n) for both average and worst cases. Best case O(1) when target is the middle element."},{question:"How to prevent integer overflow in mid calculation?",answer:"Use mid = low + (high - low) / 2 instead of (low + high) / 2. This prevents overflow when low + high exceeds Integer.MAX_VALUE."},{question:"What is the space complexity of recursive binary search?",answer:"O(log n) due to recursive call stack. Iterative version uses O(1) space."},{question:"How to find first occurrence in duplicate array?",answer:"Modify binary search to continue searching left even after finding target. Update result when found and set high = mid - 1."},{question:"What does Arrays.binarySearch() return when element not found?",answer:"Returns -(insertion point) - 1 where insertion point is where the element would be inserted to maintain sorted order."},{question:"Can binary search work on descending sorted arrays?",answer:"Yes, just reverse the comparison logic: go left if target > arr[mid], go right if target < arr[mid]."},{question:"Why is binary search inefficient for linked lists?",answer:"Linked lists don't support O(1) random access. Finding middle element requires traversing from head, making it O(n) per step."},{question:"What's the difference between linear and binary search?",answer:"Linear search O(n) works on any array. Binary search O(log n) requires sorted arrays but is exponentially faster for large datasets."},{question:"How many comparisons for 1 million elements?",answer:"About 20 comparisons (log₂ 1,000,000 ≈ 20). Linear search would need up to 1 million comparisons."},{question:"What happens if array is null?",answer:"NullPointerException. Always check for null before searching."},{question:"How to implement binary search for custom objects?",answer:"Ensure objects implement Comparable interface or provide Comparator. Compare using compareTo() instead of relational operators."},{question:"What is ternary search? Is it better?",answer:"Ternary search divides into 3 parts but requires 2 comparisons per step. It's actually slower than binary search for most cases."},{question:"Can binary search find insertion point?",answer:"Yes, when loop ends with low > high, 'low' is the insertion point where element should be inserted."},{question:"What is exponential search?",answer:"First find range where element might exist by doubling indices, then perform binary search. Useful for unbounded/infinite arrays."},{question:"How to choose between linear and binary search?",answer:"Use linear for small arrays (n < 50), unsorted data, or single searches. Use binary for large sorted arrays with frequent searches."},{question:"What is interpolation search?",answer:"Improved binary search for uniformly distributed data that guesses position using formula: pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])"},{question:"Why use while (low <= high) not while (low < high)?",answer:"Using <= ensures the case when low == high is checked. With < only, you'd miss the last element."},{question:"How to find rotation point in rotated sorted array?",answer:"Modified binary search comparing mid with boundaries to determine which half is sorted, then decide which half contains the rotation point."}];export{W as default};
