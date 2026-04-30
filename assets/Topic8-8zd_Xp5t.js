import{r as o,j as e}from"./index-sRNy85CP.js";import{c as l}from"./clsx-B-dksMZM.js";import{T as n}from"./TeacherSukantaHui-BwdTrUd-.js";import{J as s}from"./JavaFileLoader-BTkr-Z89.js";import"./git-branch-Al-7J7-z.js";import"./JavaCodeBlock-S7Z7pBVM.js";import"./prism-CMh3e-_S.js";import"./browser-Cey3ecHY.js";import"./prism-java-BwO6k4I_.js";const d=`public class LinearSearchBasic {\r
    public static void main(String[] args) {\r
        int[] marks = {78, 89, 92, 67, 85, 90, 76};\r
        int target = 67;\r
        int position = -1;\r
        \r
        // Linear search\r
        for (int i = 0; i < marks.length; i++) {\r
            if (marks[i] == target) {\r
                position = i;\r
                break;  // Exit loop when found\r
            }\r
        }\r
        \r
        if (position != -1) {\r
            System.out.println(target + " found at index: " + position);\r
        } else {\r
            System.out.println(target + " not found in array");\r
        }\r
    }\r
}`,c=`public class LinearSearchWithMethod {\r
    \r
    // Reusable linear search method\r
    public static int linearSearch(int[] arr, int target) {\r
        if (arr == null) {\r
            return -1;  // Handle null array\r
        }\r
        \r
        for (int i = 0; i < arr.length; i++) {\r
            if (arr[i] == target) {\r
                return i;  // Found at index i\r
            }\r
        }\r
        return -1;  // Not found\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] scores = {45, 67, 89, 34, 78, 90, 56};\r
        \r
        int searchFor = 78;\r
        int result = linearSearch(scores, searchFor);\r
        \r
        if (result != -1) {\r
            System.out.println(searchFor + " found at position: " + result);\r
        } else {\r
            System.out.println(searchFor + " not found");\r
        }\r
        \r
        // Search for non-existent value\r
        System.out.println("Searching for 100: " + linearSearch(scores, 100));\r
    }\r
}`,h=`import java.util.ArrayList;\r
\r
public class LinearSearchMultiple {\r
    \r
    // Find all occurrences\r
    public static ArrayList<Integer> findAllOccurrences(int[] arr, int target) {\r
        ArrayList<Integer> positions = new ArrayList<>();\r
        \r
        for (int i = 0; i < arr.length; i++) {\r
            if (arr[i] == target) {\r
                positions.add(i);\r
            }\r
        }\r
        return positions;\r
    }\r
    \r
    // Find last occurrence\r
    public static int findLastOccurrence(int[] arr, int target) {\r
        int lastIndex = -1;\r
        for (int i = 0; i < arr.length; i++) {\r
            if (arr[i] == target) {\r
                lastIndex = i;\r
            }\r
        }\r
        return lastIndex;\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] numbers = {23, 45, 23, 67, 23, 89, 23, 12};\r
        int target = 23;\r
        \r
        // Find all positions\r
        ArrayList<Integer> positions = findAllOccurrences(numbers, target);\r
        System.out.println(target + " found at indices: " + positions);\r
        \r
        // Find last position\r
        int lastPos = findLastOccurrence(numbers, target);\r
        System.out.println("Last occurrence at index: " + lastPos);\r
        \r
        // Count frequency\r
        System.out.println("Frequency: " + positions.size());\r
    }\r
}`,x=`class Student {\r
    String name;\r
    int rollNo;\r
    \r
    Student(String name, int rollNo) {\r
        this.name = name;\r
        this.rollNo = rollNo;\r
    }\r
    \r
    @Override\r
    public boolean equals(Object obj) {\r
        if (this == obj) return true;\r
        if (obj == null || getClass() != obj.getClass()) return false;\r
        Student student = (Student) obj;\r
        return rollNo == student.rollNo;\r
    }\r
    \r
    @Override\r
    public String toString() {\r
        return name + "(" + rollNo + ")";\r
    }\r
}\r
\r
public class LinearSearchObjects {\r
    \r
    public static int searchStudent(Student[] students, int rollNo) {\r
        Student target = new Student("", rollNo);\r
        for (int i = 0; i < students.length; i++) {\r
            if (students[i].equals(target)) {\r
                return i;\r
            }\r
        }\r
        return -1;\r
    }\r
    \r
    public static void main(String[] args) {\r
        Student[] class8 = {\r
            new Student("Swadeep", 101),\r
            new Student("Tuhina", 102),\r
            new Student("Abhronila", 103),\r
            new Student("Nandini", 104),\r
            new Student("Riddhiman", 105)\r
        };\r
        \r
        int searchRoll = 103;\r
        int position = searchStudent(class8, searchRoll);\r
        \r
        if (position != -1) {\r
            System.out.println("Student found: " + class8[position]);\r
            System.out.println("Position: " + position);\r
        } else {\r
            System.out.println("Student with roll " + searchRoll + " not found");\r
        }\r
    }\r
}`,m=()=>e.jsxs("svg",{viewBox:"0 0 700 200",className:"w-full h-auto max-w-3xl mx-auto my-4","aria-label":"Linear Search Step-by-Step Visualization",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"searchGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#6366f1",stopOpacity:.1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#8b5cf6",stopOpacity:.2}})]}),e.jsx("filter",{id:"shadow",x:"-5%",y:"-5%",width:"110%",height:"110%",children:e.jsx("feDropShadow",{dx:"1",dy:"1",stdDeviation:"2",floodOpacity:"0.2"})})]}),[23,45,12,67,34,89,56].map((t,a)=>e.jsxs("g",{transform:`translate(${a*90+20}, 40)`,children:[e.jsx("rect",{x:"0",y:"0",width:"70",height:"50",rx:"6",fill:"#ffffff",stroke:"#6366f1",strokeWidth:"2",className:"transition-all duration-300 hover:stroke-indigo-500 hover:shadow-lg",filter:"url(#shadow)"}),e.jsx("text",{x:"35",y:"30",textAnchor:"middle",fill:"#1e293b",fontSize:"16",fontWeight:"bold",children:t}),e.jsxs("text",{x:"35",y:"65",textAnchor:"middle",fill:"#64748b",fontSize:"11",children:["index [",a,"]"]}),a===3&&e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:"0",y:"0",width:"70",height:"50",rx:"6",fill:"none",stroke:"#f59e0b",strokeWidth:"3",children:e.jsx("animate",{attributeName:"opacity",values:"1;0.3;1",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"35",y:"-10",textAnchor:"middle",fill:"#f59e0b",fontSize:"12",fontWeight:"bold",children:"✓ Found!"})]}),a<3&&e.jsx("path",{d:"M 35 50 L 35 70",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrowhead)",children:e.jsx("animate",{attributeName:"opacity",values:"1;0;1",dur:"0.5s",repeatCount:"indefinite"})})]},a)),e.jsx("text",{x:"200",y:"120",textAnchor:"middle",fill:"#3b82f6",fontSize:"14",fontWeight:"bold",children:"Scanning →"}),e.jsx("rect",{x:"50",y:"140",width:"580",height:"40",rx:"6",fill:"url(#searchGrad)",stroke:"#6366f1",strokeWidth:"1"}),e.jsx("text",{x:"340",y:"165",textAnchor:"middle",fill:"#1e293b",fontSize:"13",children:"Time Complexity: O(n) | Space Complexity: O(1)"})]}),g=()=>e.jsx("svg",{viewBox:"0 0 600 300",className:"w-full h-auto max-w-2xl mx-auto my-4","aria-label":"Linear Search Algorithm Steps",children:e.jsxs("g",{transform:"translate(20, 20)",children:[e.jsx("rect",{x:"0",y:"0",width:"540",height:"45",rx:"8",fill:"#f8fafc",stroke:"#cbd5e1",strokeWidth:"1.5",className:"group hover:shadow-md transition-all duration-300",children:e.jsxs("text",{x:"20",y:"28",fill:"#1e293b",fontSize:"13",children:[e.jsx("tspan",{fontWeight:"bold",fill:"#6366f1",children:"Step 1:"})," Start from first element (index 0)"]})}),e.jsx("line",{x1:"270",y1:"45",x2:"270",y2:"65",stroke:"#cbd5e1",strokeWidth:"1.5",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"0",y:"65",width:"540",height:"45",rx:"8",fill:"#f8fafc",stroke:"#cbd5e1",strokeWidth:"1.5",className:"group hover:shadow-md transition-all duration-300",children:e.jsxs("text",{x:"20",y:"93",fill:"#1e293b",fontSize:"13",children:[e.jsx("tspan",{fontWeight:"bold",fill:"#6366f1",children:"Step 2:"})," Compare current element with target"]})}),e.jsx("line",{x1:"270",y1:"110",x2:"270",y2:"130",stroke:"#cbd5e1",strokeWidth:"1.5",markerEnd:"url(#arrow)"}),e.jsx("polygon",{points:"270,130 380,165 270,200 160,165",fill:"#fef3c7",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"270",y:"170",textAnchor:"middle",fill:"#92400e",fontSize:"12",fontWeight:"bold",children:"Match?"}),e.jsx("line",{x1:"380",y1:"165",x2:"450",y2:"165",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"415",y:"158",textAnchor:"middle",fill:"#10b981",fontSize:"11",children:"YES"}),e.jsx("rect",{x:"450",y:"145",width:"120",height:"40",rx:"8",fill:"#dcfce7",stroke:"#10b981",strokeWidth:"1.5",children:e.jsx("text",{x:"510",y:"170",textAnchor:"middle",fill:"#166534",fontSize:"12",fontWeight:"bold",children:"Return index"})}),e.jsx("line",{x1:"160",y1:"200",x2:"160",y2:"235",stroke:"#ef4444",strokeWidth:"1.5"}),e.jsx("text",{x:"145",y:"222",textAnchor:"end",fill:"#ef4444",fontSize:"11",children:"NO"}),e.jsx("rect",{x:"40",y:"235",width:"240",height:"40",rx:"8",fill:"#f8fafc",stroke:"#cbd5e1",strokeWidth:"1.5",className:"group hover:shadow-md transition-all duration-300",children:e.jsx("text",{x:"160",y:"260",textAnchor:"middle",fill:"#1e293b",fontSize:"12",children:"Move to next element"})}),e.jsx("path",{d:"M 280 255 Q 520 255 520 165 Q 520 90 380 90",fill:"none",stroke:"#6366f1",strokeWidth:"1.5",strokeDasharray:"5,5",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"530",y:"180",fill:"#6366f1",fontSize:"10",children:"repeat"})]})}),S=()=>{const[t,a]=o.useState("theory");return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"mb-8 text-center animate-[fadeInUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-4",children:"Linear Search in Unsorted Arrays"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed",children:"Sequential searching through array elements - the simplest search algorithm"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700",children:["theory","visual","code","practice"].map(r=>e.jsx("button",{onClick:()=>a(r),className:l("px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-300",t===r?"bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"),children:r.charAt(0).toUpperCase()+r.slice(1)},r))}),e.jsxs("div",{className:"space-y-6",children:[t==="theory"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center",children:[e.jsx("span",{className:"bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold",children:"1"}),"What is Linear Search?"]}),e.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-4",children:["Linear search is the ",e.jsx("strong",{className:"text-indigo-600 dark:text-indigo-400",children:"simplest searching algorithm"})," that sequentially checks each element in an array until a match is found or the end is reached. It works on ",e.jsx("strong",{className:"text-indigo-600 dark:text-indigo-400",children:"both sorted and unsorted arrays"}),"."]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg mb-4",children:e.jsxs("p",{className:"text-sm text-indigo-800 dark:text-indigo-200 font-mono",children:[e.jsx("strong",{children:"Prototype:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"public static int linearSearch(int[] arr, int target)"}),e.jsx("br",{}),e.jsx("strong",{children:"Return Type:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"int"})," (index if found, -1 if not found)",e.jsx("br",{}),e.jsx("strong",{children:"Purpose:"})," Find position of target element in unsorted array"]})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚙️ How Linear Search Works"}),e.jsxs("div",{className:"space-y-3 text-gray-600 dark:text-gray-300",children:[e.jsxs("p",{children:["1️⃣ ",e.jsx("strong",{children:"Start"})," from the first element (index 0)"]}),e.jsxs("p",{children:["2️⃣ ",e.jsx("strong",{children:"Compare"})," current element with the target value"]}),e.jsxs("p",{children:["3️⃣ ",e.jsx("strong",{children:"If match found"})," → return current index immediately"]}),e.jsxs("p",{children:["4️⃣ ",e.jsx("strong",{children:"If no match"})," → move to next element (index + 1)"]}),e.jsxs("p",{children:["5️⃣ ",e.jsx("strong",{children:"Repeat"})," steps 2-4 until array end is reached"]}),e.jsxs("p",{children:["6️⃣ ",e.jsx("strong",{children:"Return -1"})," if element not found"]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🌍 Real-World Examples"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"📚 Library Book Search"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:`A librarian checking each shelf sequentially until finding "Harry Potter" - books aren't sorted by title!`})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"🎒 Lost Student ID"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Teacher Sukanta Hui checking each student in Barrackpore school roll call until finding Abhronila's ID card."})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"🚇 Train Platform Search"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Checking platform numbers sequentially at Shyamnagar station to find train to Naihati."})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"📱 Contact List"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:'Scrolling through unsorted phone contacts to find "Riddhiman" - one by one until found.'})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📊 Complexity Analysis"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-gray-700 dark:text-gray-200",children:"Best Case:"}),e.jsx("span",{className:"text-green-600 dark:text-green-400 font-mono",children:"O(1)"}),e.jsx("span",{className:"text-sm text-gray-500",children:"Element found at first position (index 0)"})]}),e.jsxs("div",{className:"flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-gray-700 dark:text-gray-200",children:"Average Case:"}),e.jsx("span",{className:"text-yellow-600 dark:text-yellow-400 font-mono",children:"O(n)"}),e.jsx("span",{className:"text-sm text-gray-500",children:"Element found in middle of array"})]}),e.jsxs("div",{className:"flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-gray-700 dark:text-gray-200",children:"Worst Case:"}),e.jsx("span",{className:"text-red-600 dark:text-red-400 font-mono",children:"O(n)"}),e.jsx("span",{className:"text-sm text-gray-500",children:"Element at last position or not present"})]}),e.jsxs("div",{className:"flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-gray-700 dark:text-gray-200",children:"Space Complexity:"}),e.jsx("span",{className:"text-blue-600 dark:text-blue-400 font-mono",children:"O(1)"}),e.jsx("span",{className:"text-sm text-gray-500",children:"No extra space needed (iterative)"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"💡 Tips & Tricks"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Early termination"})," - Return immediately when match found (saves time)"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Sentinel search"})," - Add target at end to avoid bounds checking (micro-optimization)"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Return -1 convention"}),' - Standard way to indicate "not found"']}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Use for-each loop"})," when index isn't needed, traditional for loop when index matters"]})]})]}),e.jsx(n,{note:"Linear search is your go-to for small or unsorted datasets. While O(n) might seem slow, it's often faster than sorting + binary search for single searches. Always remember: Simplicity wins when n is small! Students in Ichapur love this algorithm because it's intuitive - like finding a friend in a line."})]}),t==="visual"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"👁️ Visual Walkthrough"}),e.jsx(m,{}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-4",children:"Scanning each element sequentially until target (67) is found at index 3"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📐 Algorithm Flowchart"}),e.jsx(g,{})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📝 Dry Run Example"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-700/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200",children:"Step"}),e.jsx("th",{className:"px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200",children:"Index"}),e.jsx("th",{className:"px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200",children:"Element"}),e.jsx("th",{className:"px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200",children:"Target"}),e.jsx("th",{className:"px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200",children:"Match?"}),e.jsx("th",{className:"px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200",children:"Action"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[{step:1,idx:0,elem:23,match:"No",action:"Continue"},{step:2,idx:1,elem:45,match:"No",action:"Continue"},{step:3,idx:2,elem:12,match:"No",action:"Continue"},{step:4,idx:3,elem:67,match:"✓ Yes",action:"Return 3"}].map((r,i)=>e.jsxs("tr",{className:r.match==="✓ Yes"?"bg-green-50 dark:bg-green-900/20":"",children:[e.jsx("td",{className:"px-4 py-2 text-sm text-gray-600 dark:text-gray-300",children:r.step}),e.jsx("td",{className:"px-4 py-2 text-sm text-gray-600 dark:text-gray-300",children:r.idx}),e.jsx("td",{className:"px-4 py-2 text-sm text-gray-600 dark:text-gray-300",children:r.elem}),e.jsx("td",{className:"px-4 py-2 text-sm text-gray-600 dark:text-gray-300",children:"67"}),e.jsx("td",{className:"px-4 py-2 text-sm text-gray-600 dark:text-gray-300",children:r.match}),e.jsx("td",{className:"px-4 py-2 text-sm text-gray-600 dark:text-gray-300",children:r.action})]},i))})]})})]}),e.jsx(n,{note:"Visual tracing is crucial for understanding algorithms. Have students act out linear search - line up 10 students, each with a number, and have a 'searcher' check each person. This kinesthetic approach works wonders in my Barrackpore classroom!"})]}),t==="code"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(s,{fileModule:d,title:"LinearSearchBasic.java",highlightLines:[]}),e.jsx(s,{fileModule:c,title:"LinearSearchWithMethod.java",highlightLines:[]}),e.jsx(s,{fileModule:h,title:"LinearSearchMultiple.java",highlightLines:[]}),e.jsx(s,{fileModule:x,title:"LinearSearchObjects.java",highlightLines:[]})]})]}),e.jsx(n,{note:"Notice the pattern: always start with index 0, compare, then increment. The 'return -1' at the end is critical - new students often forget it! Also, show how to search for objects by overriding equals() method."})]}),t==="practice"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 dark:text-red-400 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Off-by-one errors"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:["Loop condition ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"i <= arr.length"})," causes ArrayIndexOutOfBoundsException"]})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 dark:text-red-400 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Forgetting to return -1"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Method with no return when element not found causes compilation error"})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 dark:text-red-400 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Comparing objects with =="}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:["Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:".equals()"})," for String/Object comparison"]})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"✅ Best Practices"}),e.jsxs("ul",{className:"space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside",children:[e.jsxs("li",{children:["Always check for ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"null"})," array before searching"]}),e.jsxs("li",{children:["Use meaningful variable names: ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"target"})," instead of ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"t"})]}),e.jsx("li",{children:"Extract search logic into separate method for reusability"}),e.jsx("li",{children:"Document return value convention (-1 means not found)"}),e.jsx("li",{children:"For multiple occurrences, collect indices in ArrayList"})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"💭 Think About..."}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"🤔 What happens if array has duplicate elements? Which index is returned?"}),e.jsx("li",{children:"🤔 How would you modify the code to find LAST occurrence of target?"}),e.jsx("li",{children:"🤔 Can linear search work faster if array is sorted? (Hint: early termination when element > target)"}),e.jsx("li",{children:"🤔 Why do we return -1 instead of 0 or null?"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🎯 Questions & Answers"}),e.jsx("div",{className:"space-y-4",children:u.map((r,i)=>e.jsxs("details",{className:"group border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("summary",{className:"cursor-pointer p-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:r.question}),e.jsx("div",{className:"p-4 pt-0 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700",children:r.answer})]},i))})]}),e.jsx(n,{note:"The key to mastering linear search is practice with different data types. Have students search for strings, objects, and primitive types. Create scenarios where search is the bottleneck and discuss when to use alternative approaches like HashMap for repeated searches."})]})]})]}),e.jsx("style",{children:`
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
      `})]})},u=[{question:"What is linear search and when is it used?",answer:"Linear search sequentially checks each element until finding the target. It's used for unsorted arrays, small datasets, or when simplicity is preferred over speed."},{question:"What is the time complexity of linear search?",answer:"Best case O(1), Average case O(n), Worst case O(n). Linear search requires checking each element until found."},{question:"Why does linear search work on unsorted arrays?",answer:"Because it checks every element regardless of order. It doesn't rely on any ordering property, making it universal but slower for large datasets."},{question:"What value should be returned if element not found?",answer:"Convention is to return -1 because array indices are never negative. This clearly indicates 'not found'."},{question:"How to find all occurrences using linear search?",answer:"Store indices in an ArrayList instead of returning on first match. Continue searching through entire array."},{question:"What is sentinel linear search?",answer:"Place target at the end of array to eliminate bounds checking, slightly improving performance by removing the i < n condition."},{question:"Can linear search be recursive?",answer:"Yes, but iterative is preferred due to stack overflow risk for large arrays. Recursive version checks arr[0] then recurses on remaining array."},{question:"How does linear search compare to binary search?",answer:"Linear search O(n) works on any array. Binary search O(log n) requires sorted array. For unsorted arrays, linear search is the only option unless you sort first (O(n log n))."},{question:"What's the space complexity of linear search?",answer:"O(1) - iterative version uses constant extra space regardless of input size. Recursive version uses O(n) stack space."},{question:"How to search for objects with linear search?",answer:"Override equals() method in your class. Then compare using obj.equals(target) instead of == for content comparison."},{question:"What happens if array is null?",answer:"NullPointerException occurs. Always check if(arr == null) before searching to handle gracefully."},{question:"How to find last occurrence using linear search?",answer:"Scan entire array and update lastIndex variable whenever match found. Return lastIndex after loop completes."},{question:"Can linear search be optimized?",answer:"Transposition - move found element forward for future searches. Move-to-front - place found element at beginning. Helpful when same elements searched repeatedly."},{question:"How to search 2D array using linear search?",answer:"Nested loops - outer for rows, inner for columns. Return row and column indices as array or custom object."},{question:"What's the difference between linear search and contains() method?",answer:"contains() internally uses linear search for Lists but returns boolean instead of index. ArrayList.contains() is O(n)."},{question:"When should you NOT use linear search?",answer:"For large datasets with frequent searches. Use HashMap for O(1) lookups or binary search on sorted array if sorting cost is acceptable."},{question:"How to count frequency using linear search?",answer:"Initialize counter, iterate array, increment when match found. Return counter for single element frequency."},{question:"What's the best case scenario for linear search?",answer:"Target at first position - only one comparison. Occurs when searching for element known to be at start or when using move-to-front optimization."},{question:"How does linear search work with generics?",answer:"Define method with <T> type parameter. Use equals() for comparison since T extends Object. Works with any reference type."},{question:"Why is linear search called 'sequential search'?",answer:"Because it examines elements in sequence order, one after another, without skipping or jumping ahead."}];export{S as default};
