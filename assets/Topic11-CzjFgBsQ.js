import{r as o,j as e}from"./index-Cufz2vn-.js";import{c as l}from"./clsx-B-dksMZM.js";import{T as i}from"./TeacherSukantaHui-CSNSdAyL.js";import{J as d}from"./JavaFileLoader-CEoERlg9.js";import"./git-branch-BbIGEXCQ.js";import"./JavaCodeBlock-CrahlGTT.js";import"./prism-Brf2rvGz.js";import"./browser-MIX2JdSA.js";import"./prism-java-BwO6k4I_.js";const c=`import java.util.Arrays;\r
\r
public class BubbleSortDescending {\r
    \r
    // Basic descending bubble sort\r
    public static void bubbleSortDescending(int[] arr) {\r
        int n = arr.length;\r
        \r
        for (int i = 0; i < n - 1; i++) {\r
            for (int j = 0; j < n - 1; j++) {\r
                // Swap if left element is SMALLER than right (for descending)\r
                if (arr[j] < arr[j + 1]) {\r
                    int temp = arr[j];\r
                    arr[j] = arr[j + 1];\r
                    arr[j + 1] = temp;\r
                }\r
            }\r
        }\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] scores = {64, 34, 25, 12, 22, 11, 90};\r
        \r
        System.out.println("Original array: " + Arrays.toString(scores));\r
        bubbleSortDescending(scores);\r
        System.out.println("Descending order: " + Arrays.toString(scores));\r
        \r
        // Barrackpore school high scores\r
        int[] highScores = {78, 92, 85, 67, 95, 88, 91};\r
        System.out.println("\\nStudent high scores: " + Arrays.toString(highScores));\r
        bubbleSortDescending(highScores);\r
        System.out.println("Ranked scores (highest first): " + Arrays.toString(highScores));\r
    }\r
}`,g=`import java.util.Arrays;\r
\r
public class BubbleSortDescendingOptimized {\r
    \r
    // Optimized descending bubble sort\r
    public static void bubbleSortDescending(int[] arr) {\r
        int n = arr.length;\r
        boolean swapped;\r
        \r
        for (int i = 0; i < n - 1; i++) {\r
            swapped = false;\r
            \r
            // Last i elements are already in position\r
            for (int j = 0; j < n - i - 1; j++) {\r
                // Swap if left is smaller than right (for descending)\r
                if (arr[j] < arr[j + 1]) {\r
                    int temp = arr[j];\r
                    arr[j] = arr[j + 1];\r
                    arr[j + 1] = temp;\r
                    swapped = true;\r
                }\r
            }\r
            \r
            // If no swaps, array is sorted descending\r
            if (!swapped) {\r
                System.out.println("Array sorted after pass " + (i + 1));\r
                break;\r
            }\r
            \r
            System.out.println("After pass " + (i + 1) + ": " + Arrays.toString(arr));\r
        }\r
    }\r
    \r
    public static void main(String[] args) {\r
        // Already descending - best case\r
        int[] descending = {90, 64, 34, 25, 22, 12, 11};\r
        System.out.println("Already descending array:");\r
        System.out.println("Original: " + Arrays.toString(descending));\r
        bubbleSortDescending(descending);\r
        System.out.println("Sorted: " + Arrays.toString(descending));\r
        \r
        // Ascending array - worst case\r
        int[] ascending = {11, 12, 22, 25, 34, 64, 90};\r
        System.out.println("\\nAscending array (worst case):");\r
        System.out.println("Original: " + Arrays.toString(ascending));\r
        bubbleSortDescending(ascending);\r
        System.out.println("Sorted descending: " + Arrays.toString(ascending));\r
        \r
        // Random array\r
        int[] random = {45, 23, 89, 12, 67, 34, 78};\r
        System.out.println("\\nRandom array:");\r
        System.out.println("Original: " + Arrays.toString(random));\r
        bubbleSortDescending(random);\r
        System.out.println("Sorted descending: " + Arrays.toString(random));\r
    }\r
}`,m=`import java.util.Arrays;\r
import java.util.Comparator;\r
\r
public class BubbleSortDescendingWithCompare {\r
    \r
    // Generic bubble sort with comparator\r
    public static <T> void bubbleSort(T[] arr, Comparator<T> comp) {\r
        int n = arr.length;\r
        boolean swapped;\r
        \r
        for (int i = 0; i < n - 1; i++) {\r
            swapped = false;\r
            \r
            for (int j = 0; j < n - i - 1; j++) {\r
                // Use comparator to determine order\r
                if (comp.compare(arr[j], arr[j + 1]) < 0) {\r
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
    // Convenience methods\r
    public static void bubbleSortDescending(Integer[] arr) {\r
        bubbleSort(arr, Comparator.naturalOrder());\r
    }\r
    \r
    public static void bubbleSortDescending(String[] arr) {\r
        bubbleSort(arr, Comparator.naturalOrder());\r
    }\r
    \r
    public static void main(String[] args) {\r
        // Integer array\r
        Integer[] numbers = {64, 34, 25, 12, 22, 11, 90};\r
        System.out.println("Original numbers: " + Arrays.toString(numbers));\r
        bubbleSortDescending(numbers);\r
        System.out.println("Descending: " + Arrays.toString(numbers));\r
        \r
        // String array - names from Barrackpore\r
        String[] names = {"Swadeep", "Tuhina", "Abhronila", "Nandini", "Riddhiman", "Angshuman"};\r
        System.out.println("\\nOriginal names: " + Arrays.toString(names));\r
        bubbleSortDescending(names);\r
        System.out.println("Descending alphabetical: " + Arrays.toString(names));\r
        \r
        // Using custom comparator for different order\r
        String[] cities = {"Barrackpore", "Shyamnagar", "Ichapur", "Naihati"};\r
        System.out.println("\\nCities by length (descending):");\r
        System.out.println("Original: " + Arrays.toString(cities));\r
        bubbleSort(cities, (a, b) -> Integer.compare(b.length(), a.length()));\r
        System.out.println("By length desc: " + Arrays.toString(cities));\r
    }\r
}`,h=`import java.util.Arrays;\r
\r
class Student implements Comparable<Student> {\r
    String name;\r
    int percentage;\r
    \r
    Student(String name, int percentage) {\r
        this.name = name;\r
        this.percentage = percentage;\r
    }\r
    \r
    @Override\r
    public int compareTo(Student other) {\r
        return Integer.compare(this.percentage, other.percentage);\r
    }\r
    \r
    @Override\r
    public String toString() {\r
        return name + "(" + percentage + "%)";\r
    }\r
}\r
\r
public class BubbleSortDescendingObjects {\r
    \r
    // Bubble sort for Comparable objects (descending)\r
    public static <T extends Comparable<T>> void bubbleSortDescending(T[] arr) {\r
        int n = arr.length;\r
        boolean swapped;\r
        \r
        for (int i = 0; i < n - 1; i++) {\r
            swapped = false;\r
            \r
            for (int j = 0; j < n - i - 1; j++) {\r
                // Reverse comparison for descending order\r
                if (arr[j].compareTo(arr[j + 1]) < 0) {\r
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
        // Student objects - Barrackpore school results\r
        Student[] students = {\r
            new Student("Swadeep", 85),\r
            new Student("Tuhina", 92),\r
            new Student("Abhronila", 78),\r
            new Student("Nandini", 96),\r
            new Student("Riddhiman", 88),\r
            new Student("Angshuman", 91)\r
        };\r
        \r
        System.out.println("Original student list:");\r
        for (Student s : students) {\r
            System.out.println("  " + s);\r
        }\r
        \r
        bubbleSortDescending(students);\r
        \r
        System.out.println("\\nRanked by percentage (highest first):");\r
        for (Student s : students) {\r
            System.out.println("  " + s);\r
        }\r
        \r
        // Double array\r
        Double[] temperatures = {98.6, 72.5, 100.2, 65.8, 85.3};\r
        System.out.println("\\nOriginal temps: " + Arrays.toString(temperatures));\r
        bubbleSortDescending(temperatures);\r
        System.out.println("Descending temps: " + Arrays.toString(temperatures));\r
    }\r
}`,x=()=>{const[s,t]=o.useState(0),r=[{label:"Pass 1: Smallest element bubbles to end",array:[45,67,23,89,12,78,34],comparisons:[0,1,2,3,4,5]},{label:"Pass 2: Second smallest bubbles to position",array:[67,45,89,23,78,34,12],comparisons:[0,1,2,3,4]},{label:"Pass 3: Continuing bubble down",array:[67,89,45,78,34,23,12],comparisons:[0,1,2,3]},{label:"Pass 4: Almost sorted descending",array:[89,67,78,45,34,23,12],comparisons:[0,1,2]},{label:"Pass 5: Final check - sorted descending!",array:[89,78,67,45,34,23,12],comparisons:[0,1]}];return e.jsxs("div",{className:"w-full",children:[e.jsxs("svg",{viewBox:"0 0 800 400",className:"w-full h-auto max-w-4xl mx-auto my-4","aria-label":"Descending Bubble Sort Visualization",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"bubbleDescGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#ec4899",stopOpacity:.1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#f43f5e",stopOpacity:.2}})]}),e.jsx("filter",{id:"shadow",x:"-5%",y:"-5%",width:"110%",height:"110%",children:e.jsx("feDropShadow",{dx:"1",dy:"1",stdDeviation:"2",floodOpacity:"0.2"})})]}),e.jsx("text",{x:"400",y:"25",textAnchor:"middle",fill:"#1e293b","dark:text-gray-200":!0,fontSize:"14",fontWeight:"bold",children:r[s].label}),e.jsxs("g",{transform:"translate(380, 35)",children:[e.jsx("path",{d:"M 0 0 L 20 15 L 0 30",fill:"none",stroke:"#f43f5e",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"25",y:"20",fill:"#f43f5e",fontSize:"11",fontWeight:"bold",children:"Smallest ↓"})]}),r[s].array.map((n,a)=>e.jsxs("g",{transform:`translate(${a*85+60}, 80)`,children:[e.jsx("rect",{x:"0",y:"0",width:"70",height:"60",rx:"6",fill:"#ffffff",stroke:r[s].comparisons.includes(a)?"#f59e0b":"#ec4899",strokeWidth:r[s].comparisons.includes(a)?"3":"2",className:"transition-all duration-300 hover:shadow-lg",filter:"url(#shadow)",children:r[s].comparisons.includes(a)&&e.jsx("animate",{attributeName:"stroke",values:"#f59e0b;#ec4899;#f59e0b",dur:"1s",repeatCount:"indefinite"})}),e.jsx("text",{x:"35",y:"35",textAnchor:"middle",fill:"#1e293b",fontSize:"18",fontWeight:"bold",children:n}),e.jsxs("text",{x:"35",y:"75",textAnchor:"middle",fill:"#94a3b8",fontSize:"11",children:["index ",a]})]},a)),s<4&&e.jsx("g",{children:r[s].comparisons.map((n,a)=>e.jsxs("g",{transform:`translate(${n*85+95}, 160)`,children:[e.jsxs("circle",{cx:"0",cy:"0",r:"15",fill:"#f43f5e",opacity:"0.6",children:[e.jsx("animate",{attributeName:"cy",values:"0;30;30",dur:"1.5s",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"opacity",values:"0.6;0.2;0.6",dur:"1.5s",repeatCount:"indefinite"})]}),e.jsx("text",{x:"0",y:"0",textAnchor:"middle",fill:"white",fontSize:"10",fontWeight:"bold",children:n===r[s].comparisons[r[s].comparisons.length-1]?"✓":"↓"})]},a))}),e.jsxs("g",{transform:"translate(300, 350)",children:[e.jsx("rect",{x:"0",y:"0",width:"200",height:"35",rx:"8",fill:"#ec4899",className:"cursor-pointer hover:fill-pink-600 transition-all duration-300"}),e.jsx("text",{x:"100",y:"24",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",className:"cursor-pointer",children:s<4?"Next Pass →":"Reset"})]})]}),e.jsx("div",{className:"text-center mt-2",children:e.jsx("button",{onClick:()=>t((s+1)%5),className:"px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all duration-300",children:s<4?"Next Pass (Step "+(s+2)+"/5)":"Reset Animation"})})]})},p=()=>e.jsxs("svg",{viewBox:"0 0 700 300",className:"w-full h-auto max-w-3xl mx-auto my-4",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),e.jsx("rect",{x:"50",y:"20",width:"280",height:"250",rx:"8",fill:"#dbeafe",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"190",y:"50",textAnchor:"middle",fill:"#1e3a8a",fontSize:"16",fontWeight:"bold",children:"Ascending Order"}),e.jsx("text",{x:"190",y:"75",textAnchor:"middle",fill:"#3b82f6",fontSize:"12",children:"arr[j] > arr[j+1] → SWAP"}),e.jsx("g",{transform:"translate(70, 100)",children:[12,23,34,45,56,67].map((s,t)=>e.jsxs("g",{transform:`translate(${t*38}, 0)`,children:[e.jsx("rect",{x:"0",y:"0",width:"32",height:"40",rx:"4",fill:"#eff6ff",stroke:"#3b82f6",strokeWidth:"1.5"}),e.jsx("text",{x:"16",y:"25",textAnchor:"middle",fill:"#1e3a8a",fontSize:"11",fontWeight:"bold",children:s})]},t))}),e.jsx("text",{x:"190",y:"175",textAnchor:"middle",fill:"#1e3a8a",fontSize:"12",children:"Smallest → Largest"}),e.jsx("path",{d:"M 80 195 L 300 195",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"190",y:"215",textAnchor:"middle",fill:"#3b82f6",fontSize:"11",children:"Increasing order"}),e.jsx("rect",{x:"370",y:"20",width:"280",height:"250",rx:"8",fill:"#fce7f3",stroke:"#ec4899",strokeWidth:"2"}),e.jsx("text",{x:"510",y:"50",textAnchor:"middle",fill:"#831843",fontSize:"16",fontWeight:"bold",children:"Descending Order"}),e.jsx("text",{x:"510",y:"75",textAnchor:"middle",fill:"#ec4899",fontSize:"12",children:"arr[j] < arr[j+1] → SWAP"}),e.jsx("g",{transform:"translate(390, 100)",children:[67,56,45,34,23,12].map((s,t)=>e.jsxs("g",{transform:`translate(${t*38}, 0)`,children:[e.jsx("rect",{x:"0",y:"0",width:"32",height:"40",rx:"4",fill:"#fdf2f8",stroke:"#ec4899",strokeWidth:"1.5"}),e.jsx("text",{x:"16",y:"25",textAnchor:"middle",fill:"#831843",fontSize:"11",fontWeight:"bold",children:s})]},t))}),e.jsx("text",{x:"510",y:"175",textAnchor:"middle",fill:"#831843",fontSize:"12",children:"Largest → Smallest"}),e.jsx("path",{d:"M 400 195 L 620 195",stroke:"#ec4899",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"510",y:"215",textAnchor:"middle",fill:"#ec4899",fontSize:"11",children:"Decreasing order"}),e.jsx("rect",{x:"290",y:"230",width:"120",height:"30",rx:"15",fill:"#f59e0b"}),e.jsx("text",{x:"350",y:"250",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"Just swap > to <"})]}),A=()=>{const[s,t]=o.useState("theory");return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"mb-8 text-center animate-[fadeInUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400 bg-clip-text text-transparent mb-4",children:"Bubble Sort - Descending Order"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed",children:"Sorting arrays from largest to smallest - the same algorithm, just reversed comparison"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700",children:["theory","visual","code","practice"].map(r=>e.jsx("button",{onClick:()=>t(r),className:l("px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-300",s===r?"bg-pink-50 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 border-b-2 border-pink-600":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"),children:r.charAt(0).toUpperCase()+r.slice(1)},r))}),e.jsxs("div",{className:"space-y-6",children:[s==="theory"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center",children:[e.jsx("span",{className:"bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold",children:"1"}),"Descending Order Bubble Sort"]}),e.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-4",children:["Descending bubble sort is ",e.jsx("strong",{className:"text-pink-600 dark:text-pink-400",children:"identical to ascending bubble sort"})," except for the comparison operator. Instead of swapping when ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"arr[j] > arr[j+1]"}),", we swap when ",e.jsx("strong",{className:"text-pink-600 dark:text-pink-400",children:"arr[j] < arr[j+1]"})," to move smaller elements to the end."]}),e.jsx("div",{className:"bg-pink-50 dark:bg-pink-900/30 p-4 rounded-lg mb-4",children:e.jsxs("p",{className:"text-sm text-pink-800 dark:text-pink-200 font-mono",children:[e.jsx("strong",{children:"Prototype:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"public static void bubbleSortDescending(int[] arr)"}),e.jsx("br",{}),e.jsx("strong",{children:"Return Type:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"void"})," (sorts in-place)",e.jsx("br",{}),e.jsx("strong",{children:"Key Difference:"})," Swap condition changed from ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:">"})," to ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"<"})]})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🔄 Ascending vs Descending"}),e.jsx(p,{}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-blue-800 dark:text-blue-300 mb-2",children:"Ascending Order"}),e.jsx("code",{className:"block bg-gray-900 text-green-400 p-2 rounded text-sm",children:`if (arr[j] > arr[j+1]) {
    // Swap - larger moves right
    int temp = arr[j];
    arr[j] = arr[j+1];
    arr[j+1] = temp;
}`}),e.jsx("p",{className:"text-sm text-blue-700 dark:text-blue-300 mt-2",children:"Largest bubbles to the END"})]}),e.jsxs("div",{className:"bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-pink-800 dark:text-pink-300 mb-2",children:"Descending Order"}),e.jsx("code",{className:"block bg-gray-900 text-green-400 p-2 rounded text-sm",children:`if (arr[j] < arr[j+1]) {
    // Swap - smaller moves right
    int temp = arr[j];
    arr[j] = arr[j+1];
    arr[j+1] = temp;
}`}),e.jsx("p",{className:"text-sm text-pink-700 dark:text-pink-300 mt-2",children:"Smallest sinks to the END"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚙️ How Descending Bubble Sort Works"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-3 text-gray-600 dark:text-gray-300",children:[e.jsxs("p",{children:["1️⃣ ",e.jsx("strong",{children:"Start"})," from the beginning of the array"]}),e.jsxs("p",{children:["2️⃣ ",e.jsx("strong",{children:"Compare"})," each adjacent pair (arr[j] and arr[j+1])"]}),e.jsxs("p",{children:["3️⃣ ",e.jsx("strong",{children:"Swap if arr[j] < arr[j+1]"})," (when left is smaller than right)"]}),e.jsxs("p",{children:["4️⃣ ",e.jsx("strong",{children:"After each pass"}),', the smallest element "sinks" to the end']}),e.jsxs("p",{children:["5️⃣ ",e.jsx("strong",{children:"Result"})," - Array sorted from largest to smallest"]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Analogy"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Heavy vs Light balls:"}),e.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-300 mt-2 list-disc list-inside",children:[e.jsx("li",{children:"Ascending: Light balls float up, heavy sink down"}),e.jsx("li",{children:"Descending: Heavy float up, light sink down"}),e.jsx("li",{children:"Just reverse the comparison!"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🌍 Real-World Examples"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"🏆 Leaderboard Ranking"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"High scores displayed highest first - top scorers (Angshuman: 98, Riddhiman: 95, Swadeep: 92) bubble to front!"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"📅 Recent Posts Feed"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Newest content first - dates sorted descending order (today → yesterday → last week)."})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"💰 Price Sorting (High to Low)"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"E-commerce sites showing most expensive items first - customers see premium products initially."})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"⭐ Rating Sorting"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"5-star reviews appear first, then 4-star, etc. - best rated products bubble to top in Barrackpore shopping app!"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📊 Complexity Analysis"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[e.jsxs("div",{className:"text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Best Case"}),e.jsx("p",{className:"text-xl font-bold text-green-600",children:"O(n)"}),e.jsx("p",{className:"text-xs",children:"Already descending"})]}),e.jsxs("div",{className:"text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Average Case"}),e.jsx("p",{className:"text-xl font-bold text-yellow-600",children:"O(n²)"}),e.jsx("p",{className:"text-xs",children:"Random order"})]}),e.jsxs("div",{className:"text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Worst Case"}),e.jsx("p",{className:"text-xl font-bold text-red-600",children:"O(n²)"}),e.jsx("p",{className:"text-xs",children:"Ascending order"})]}),e.jsxs("div",{className:"text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Space"}),e.jsx("p",{className:"text-xl font-bold text-blue-600",children:"O(1)"}),e.jsx("p",{className:"text-xs",children:"In-place sorting"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"💡 Tips & Tricks"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"One-character change:"})," Just change ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:">"})," to ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"<"})," in swap condition"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Use Comparator:"})," For objects, use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"comparator.reversed()"})," or swap comparison logic"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Best for:"})," When you need largest elements first (leaderboards, top scores, recent items)"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Remember:"})," The algorithm structure is IDENTICAL - only comparison changes!"]})]})]}),e.jsx(i,{note:"The beauty of bubble sort is how simple it is to reverse order! I tell my students: 'Want descending? Just flip the comparison sign!' Have them practice by taking ascending code and changing one character. This reinforces understanding of how comparison operators control sort order. In Barrackpore, we use descending sort for class rank lists - highest percentage first!"})]}),s==="visual"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"👁️ Visual Walkthrough - Descending Order"}),e.jsx(x,{}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-4",children:'Watch the smallest elements "sink" to the end while largest bubble to front'})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📝 Dry Run Example"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-700/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-2 text-left text-sm font-semibold",children:"Pass"}),e.jsx("th",{className:"px-2 py-2 text-left text-sm font-semibold",children:"j"}),e.jsx("th",{className:"px-2 py-2 text-left text-sm font-semibold",children:"arr[j]"}),e.jsx("th",{className:"px-2 py-2 text-left text-sm font-semibold",children:"arr[j+1]"}),e.jsx("th",{className:"px-2 py-2 text-left text-sm font-semibold",children:"Swap? (arr[j] < arr[j+1]?)"}),e.jsx("th",{className:"px-2 py-2 text-left text-sm font-semibold",children:"Array After"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[{pass:1,j:0,a:45,b:67,swap:"✓ (45<67)",result:"[67, 45, 23, 89, 12, 78, 34]"},{pass:1,j:1,a:45,b:23,swap:"✗ (45<23? No)",result:"[67, 45, 23, 89, 12, 78, 34]"},{pass:1,j:2,a:23,b:89,swap:"✓ (23<89)",result:"[67, 45, 89, 23, 12, 78, 34]"},{pass:1,j:3,a:23,b:12,swap:"✗ (23<12? No)",result:"[67, 45, 89, 23, 12, 78, 34]"},{pass:1,j:4,a:12,b:78,swap:"✓ (12<78)",result:"[67, 45, 89, 23, 78, 12, 34]"},{pass:1,j:5,a:12,b:34,swap:"✓ (12<34)",result:"[67, 45, 89, 23, 78, 34, 12]"},{pass:2,j:0,a:67,b:45,swap:"✗ (67<45? No)",result:"[67, 45, 89, 23, 78, 34, 12]"},{pass:2,j:1,a:45,b:89,swap:"✓ (45<89)",result:"[67, 89, 45, 23, 78, 34, 12]"},{pass:2,j:2,a:45,b:23,swap:"✗ (45<23? No)",result:"[67, 89, 45, 23, 78, 34, 12]"},{pass:2,j:3,a:23,b:78,swap:"✓ (23<78)",result:"[67, 89, 45, 78, 23, 34, 12]"},{pass:2,j:4,a:23,b:34,swap:"✓ (23<34)",result:"[67, 89, 45, 78, 34, 23, 12]"}].map((r,n)=>e.jsxs("tr",{className:r.swap.includes("✓")?"bg-pink-50 dark:bg-pink-900/10":"",children:[e.jsx("td",{className:"px-2 py-1 text-xs",children:r.pass}),e.jsx("td",{className:"px-2 py-1 text-xs",children:r.j}),e.jsx("td",{className:"px-2 py-1 text-xs",children:r.a}),e.jsx("td",{className:"px-2 py-1 text-xs",children:r.b}),e.jsx("td",{className:"px-2 py-1 text-xs",children:r.swap}),e.jsx("td",{className:"px-2 py-1 text-xs font-mono",children:r.result})]},n))})]})})]}),e.jsx(i,{note:"Visualizing descending sort helps students understand that algorithms are flexible - just one condition change creates completely different ordering. I have students trace both ascending and descending on same array to see the mirror effect!"})]}),s==="code"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(d,{fileModule:c,title:"BubbleSortDescending.java",highlightLines:[]}),e.jsx(d,{fileModule:g,title:"BubbleSortDescendingOptimized.java",highlightLines:[]}),e.jsx(d,{fileModule:m,title:"BubbleSortDescendingWithCompare.java",highlightLines:[]}),e.jsx(d,{fileModule:h,title:"BubbleSortDescendingObjects.java",highlightLines:[]})]})]}),e.jsx(i,{note:"Compare the descending code side-by-side with ascending. Students should notice ONLY the comparison operator changed! This is a powerful lesson - algorithms are patterns, and small tweaks produce different behaviors. Ask them: 'What other operators could we use?'"})]}),s==="practice"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Using wrong comparison operator"}),e.jsxs("p",{className:"text-sm",children:["Using ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:">"})," instead of ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"<"})," gives ascending order!"]})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Confusing with ascending optimization"}),e.jsx("p",{className:"text-sm",children:"The swapped flag logic works the same - just the comparison changes"})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Forgetting stable property still holds"}),e.jsx("p",{className:"text-sm",children:"Descending bubble sort remains stable - equal elements keep relative order"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"✅ Best Practices"}),e.jsxs("ul",{className:"space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside",children:[e.jsxs("li",{children:["Use method name clearly indicating descending sort (e.g., ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"bubbleSortDescending"}),")"]}),e.jsx("li",{children:"Add comment explaining comparison logic for clarity"}),e.jsx("li",{children:"Test with ascending, descending, and random arrays"}),e.jsx("li",{children:"Consider making sort direction a parameter for reusable code"}),e.jsx("li",{children:"Document that algorithm sorts in descending order (largest to smallest)"})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"💭 Think About..."}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"🤔 How would you modify the code to sort in descending order using a Comparator?"}),e.jsx("li",{children:'🤔 What happens to the "bubbling" visualization when sorting descending?'}),e.jsx("li",{children:"🤔 Why does the smallest element end up at the end after first pass?"}),e.jsx("li",{children:"🤔 How would you create a generic sort that accepts ascending/descending flag?"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🎯 Questions & Answers"}),e.jsx("div",{className:"space-y-4",children:b.map((r,n)=>e.jsxs("details",{className:"group border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("summary",{className:"cursor-pointer p-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:r.question}),e.jsx("div",{className:"p-4 pt-0 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700",children:r.answer})]},n))})]}),e.jsx(i,{note:"The leap from ascending to descending is small but conceptually important. It teaches that sorting order is just a matter of comparison logic. Challenge students: 'Write ONE sort method that can sort both ways using a boolean parameter.' This builds flexible thinking!"})]})]})]}),e.jsx("style",{children:`
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
      `})]})},b=[{question:"What is the only difference between ascending and descending bubble sort?",answer:"The comparison operator in the swap condition changes from > (greater than) to < (less than)."},{question:"In descending bubble sort, which elements 'bubble' to the end?",answer:"Smallest elements 'sink' to the end of the array, while largest elements move to the front."},{question:"Is descending bubble sort stable?",answer:"Yes! Like ascending bubble sort, descending version is also stable - equal elements maintain relative order."},{question:"What is the time complexity of descending bubble sort?",answer:"Same as ascending: Best O(n), Average O(n²), Worst O(n²). The algorithm structure is identical."},{question:"When would you use descending bubble sort?",answer:"Leaderboards (highest score first), recent posts (newest first), price sorting (highest to lowest), ratings (best first)."},{question:"How does the swapped flag optimization work in descending sort?",answer:"Exactly the same! Track if any swap occurred in a pass. If no swaps, array is already sorted descending."},{question:"Can we use the same method for both ascending and descending?",answer:"Yes! Add a boolean parameter 'ascending' and use conditional comparison: ascending ? arr[j] > arr[j+1] : arr[j] < arr[j+1]"},{question:"What's the best case for descending bubble sort?",answer:"Array already sorted in descending order - only one pass needed with swapped flag optimization."},{question:"What's the worst case for descending bubble sort?",answer:"Array sorted in ascending order - requires maximum comparisons and swaps (n² operations)."},{question:"How to sort objects in descending order?",answer:"Use comparator: if (comparator.compare(arr[j], arr[j+1]) < 0) for descending, or use comparator.reversed()"},{question:"Why do we swap when arr[j] < arr[j+1] for descending?",answer:"Because we want larger elements on left. If left is smaller than right, they're out of order and need swapping."},{question:"What happens to the largest element in first pass of descending sort?",answer:"It moves to the front (index 0) through successive swaps, 'bubbling up' to the beginning."},{question:"Is descending bubble sort adaptive?",answer:"Yes! With swapped flag optimization, it adapts to already sorted portions and terminates early."},{question:"How many passes needed for 10 elements in worst case?",answer:"9 passes maximum (n-1 passes) before array is fully sorted descending."},{question:"Can bubble sort descending handle duplicate values?",answer:"Yes, and it's stable - duplicates maintain their original relative order during sorting."},{question:"How to convert ascending code to descending?",answer:"Change if(arr[j] > arr[j+1]) to if(arr[j] < arr[j+1]). That's literally it!"},{question:"What's the space complexity of descending bubble sort?",answer:"O(1) - sorts in-place using only a temporary variable for swapping."},{question:"How would you sort strings in descending alphabetical order?",answer:"Use compareTo() and swap when arr[j].compareTo(arr[j+1]) < 0 (Z comes before A)."},{question:"Why teach descending sort separately?",answer:"Teaches that algorithm structure remains same while behavior changes via comparison logic - fundamental CS concept."},{question:"How to test if descending sort works correctly?",answer:"After sorting, verify arr[i] >= arr[i+1] for all i. Also test with duplicates, empty, and single-element arrays."}];export{A as default};
