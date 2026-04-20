import{r as d,j as e}from"./index-BpX9yBGC.js";import{c as o}from"./clsx-B-dksMZM.js";import{T as a}from"./TeacherSukantaHui-CHCwqUcS.js";import{J as s}from"./JavaFileLoader-IcrsZWR8.js";import"./git-branch-BAD8G2G1.js";import"./JavaCodeBlock-CCHhybLy.js";import"./prism-BHdG3xKe.js";import"./browser-DzBsnsNp.js";import"./prism-java-BwO6k4I_.js";const m=`import java.util.Arrays;\r
\r
public class FindSmallestBasic {\r
    \r
    // Find minimum element in array\r
    public static int findMin(int[] arr) {\r
        // Handle empty array\r
        if (arr == null || arr.length == 0) {\r
            throw new IllegalArgumentException("Array cannot be empty");\r
        }\r
        \r
        int min = arr[0];  // Assume first element is smallest\r
        \r
        // Start from index 1 (already compared index 0)\r
        for (int i = 1; i < arr.length; i++) {\r
            if (arr[i] < min) {  // Note: < operator for minimum\r
                min = arr[i];     // Found new minimum\r
            }\r
        }\r
        \r
        return min;\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] scores = {45, 67, 23, 89, 12, 78, 34};\r
        \r
        System.out.println("Array: " + Arrays.toString(scores));\r
        System.out.println("Smallest element: " + findMin(scores));\r
        \r
        // Barrackpore school exam scores - find lowest\r
        int[] examScores = {78, 92, 85, 96, 67, 88, 91};\r
        System.out.println("\\nExam scores: " + Arrays.toString(examScores));\r
        System.out.println("Lowest score: " + findMin(examScores));\r
        \r
        // Negative numbers test\r
        int[] temperatures = {-5, -12, -3, -8, -1};\r
        System.out.println("\\nTemperatures: " + Arrays.toString(temperatures));\r
        System.out.println("Coldest: " + findMin(temperatures));\r
        \r
        // Student ages\r
        int[] ages = {15, 14, 16, 13, 15, 14};\r
        System.out.println("\\nStudent ages: " + Arrays.toString(ages));\r
        System.out.println("Youngest: " + findMin(ages));\r
    }\r
}`,c=`import java.util.Arrays;\r
\r
public class FindSmallestWithIndex {\r
    \r
    // Find minimum element and its index\r
    public static int findMinIndex(int[] arr) {\r
        if (arr == null || arr.length == 0) {\r
            return -1;  // Return -1 for empty array\r
        }\r
        \r
        int minIndex = 0;  // Start with first element\r
        \r
        for (int i = 1; i < arr.length; i++) {\r
            if (arr[i] < arr[minIndex]) {  // Note: < operator\r
                minIndex = i;  // Update index of minimum\r
            }\r
        }\r
        \r
        return minIndex;\r
    }\r
    \r
    // Find minimum with detailed tracking\r
    public static void findMinWithDetails(int[] arr) {\r
        if (arr == null || arr.length == 0) {\r
            System.out.println("Array is empty");\r
            return;\r
        }\r
        \r
        int min = arr[0];\r
        int minIndex = 0;\r
        \r
        System.out.println("Starting search for minimum...");\r
        System.out.println("Initial min = " + min + " at index " + minIndex);\r
        \r
        for (int i = 1; i < arr.length; i++) {\r
            System.out.println("Comparing arr[" + i + "] = " + arr[i] + " with min = " + min);\r
            \r
            if (arr[i] < min) {\r
                min = arr[i];\r
                minIndex = i;\r
                System.out.println("  → New minimum found! Now min = " + min + " at index " + minIndex);\r
            } else {\r
                System.out.println("  → No update");\r
            }\r
        }\r
        \r
        System.out.println("\\n✓ Minimum value: " + min);\r
        System.out.println("✓ Found at index: " + minIndex);\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] scores = {45, 67, 23, 89, 12, 78, 34};\r
        \r
        System.out.println("Array: " + Arrays.toString(scores));\r
        \r
        int minIdx = findMinIndex(scores);\r
        System.out.println("Minimum value: " + scores[minIdx]);\r
        System.out.println("Found at index: " + minIdx);\r
        \r
        System.out.println("\\n" + "=".repeat(40));\r
        findMinWithDetails(scores);\r
        \r
        // Student heights - find shortest\r
        int[] heights = {165, 172, 158, 180, 169, 175};\r
        System.out.println("\\nStudent heights: " + Arrays.toString(heights));\r
        int shortestIdx = findMinIndex(heights);\r
        System.out.println("Shortest student height: " + heights[shortestIdx] + " cm");\r
        System.out.println("Position in array: " + shortestIdx);\r
    }\r
}`,x=`import java.util.Arrays;\r
\r
public class FindSmallestMultiple {\r
    \r
    // Find both minimum and maximum in one pass\r
    public static void findMinAndMax(int[] arr) {\r
        if (arr == null || arr.length == 0) {\r
            System.out.println("Array is empty");\r
            return;\r
        }\r
        \r
        int min = arr[0];\r
        int max = arr[0];\r
        \r
        for (int i = 1; i < arr.length; i++) {\r
            if (arr[i] < min) {\r
                min = arr[i];\r
            }\r
            if (arr[i] > max) {\r
                max = arr[i];\r
            }\r
        }\r
        \r
        System.out.println("Minimum: " + min);\r
        System.out.println("Maximum: " + max);\r
        System.out.println("Range: " + (max - min));\r
    }\r
    \r
    // Find bottom 3 smallest elements\r
    public static void findBottomThree(int[] arr) {\r
        if (arr == null || arr.length < 3) {\r
            System.out.println("Array needs at least 3 elements");\r
            return;\r
        }\r
        \r
        int first = Integer.MAX_VALUE;\r
        int second = Integer.MAX_VALUE;\r
        int third = Integer.MAX_VALUE;\r
        \r
        for (int num : arr) {\r
            if (num < first) {\r
                third = second;\r
                second = first;\r
                first = num;\r
            } else if (num < second && num != first) {\r
                third = second;\r
                second = num;\r
            } else if (num < third && num != second && num != first) {\r
                third = num;\r
            }\r
        }\r
        \r
        System.out.println("Bottom 3 smallest: " + first + ", " + second + ", " + third);\r
    }\r
    \r
    // Find minimum using tournament style (divide and conquer)\r
    public static int findMinTournament(int[] arr, int left, int right) {\r
        if (left == right) {\r
            return arr[left];\r
        }\r
        \r
        int mid = left + (right - left) / 2;\r
        int leftMin = findMinTournament(arr, left, mid);\r
        int rightMin = findMinTournament(arr, mid + 1, right);\r
        \r
        return Math.min(leftMin, rightMin);\r
    }\r
    \r
    public static void main(String[] args) {\r
        int[] scores = {45, 67, 23, 89, 12, 78, 34, 5, 56};\r
        \r
        System.out.println("Array: " + Arrays.toString(scores));\r
        \r
        System.out.println("\\n--- Min and Max Together ---");\r
        findMinAndMax(scores);\r
        \r
        System.out.println("\\n--- Bottom 3 Smallest ---");\r
        findBottomThree(scores);\r
        \r
        System.out.println("\\n--- Tournament Method ---");\r
        int min = findMinTournament(scores, 0, scores.length - 1);\r
        System.out.println("Minimum (tournament): " + min);\r
        \r
        // Student scores from Barrackpore - find lowest for improvement\r
        int[] studentScores = {85, 92, 78, 96, 67, 88, 91, 84};\r
        System.out.println("\\nBarrackpore School Scores: " + Arrays.toString(studentScores));\r
        findMinAndMax(studentScores);\r
        System.out.println("Need improvement (below 70): " + \r
            (findMinTournament(studentScores, 0, studentScores.length - 1) < 70 ? "Yes" : "No"));\r
    }\r
}`,h=`import java.util.Arrays;\r
import java.util.Comparator;\r
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
public class FindSmallestObjects {\r
    \r
    // Find min using Comparable\r
    public static <T extends Comparable<T>> T findMin(T[] arr) {\r
        if (arr == null || arr.length == 0) {\r
            return null;\r
        }\r
        \r
        T min = arr[0];\r
        for (int i = 1; i < arr.length; i++) {\r
            if (arr[i].compareTo(min) < 0) {  // Note: < 0 for minimum\r
                min = arr[i];\r
            }\r
        }\r
        return min;\r
    }\r
    \r
    // Find min using custom Comparator\r
    public static <T> T findMin(T[] arr, Comparator<T> comp) {\r
        if (arr == null || arr.length == 0) {\r
            return null;\r
        }\r
        \r
        T min = arr[0];\r
        for (int i = 1; i < arr.length; i++) {\r
            if (comp.compare(arr[i], min) < 0) {\r
                min = arr[i];\r
            }\r
        }\r
        return min;\r
    }\r
    \r
    public static void main(String[] args) {\r
        // Product prices - find cheapest\r
        Product[] products = {\r
            new Product("Notebook", 50),\r
            new Product("Pen", 20),\r
            new Product("Eraser", 10),\r
            new Product("Scale", 30),\r
            new Product("Sharpener", 15)\r
        };\r
        \r
        System.out.println("Products: " + Arrays.toString(products));\r
        \r
        Product cheapest = findMin(products);\r
        System.out.println("\\nCheapest product: " + cheapest);\r
        \r
        // String array - find shortest name\r
        String[] names = {"Swadeep", "Tuhina", "Abhronila", "Riddhiman", "Angshuman"};\r
        System.out.println("\\nNames: " + Arrays.toString(names));\r
        \r
        String shortest = findMin(names, (a, b) -> Integer.compare(a.length(), b.length()));\r
        System.out.println("Shortest name: " + shortest);\r
        \r
        // Double array - find lowest price\r
        Double[] prices = {45.99, 67.50, 23.75, 89.99, 12.25, 78.30};\r
        System.out.println("\\nPrices: " + Arrays.toString(prices));\r
        System.out.println("Lowest price: " + findMin(prices));\r
        \r
        // Student scores - find lowest\r
        Integer[] scores = {85, 92, 78, 96, 67, 88, 91};\r
        System.out.println("\\nStudent scores: " + Arrays.toString(scores));\r
        System.out.println("Lowest score: " + findMin(scores));\r
        \r
        // Custom object with different comparison (by name length)\r
        System.out.println("\\nStudents by name length (shortest first):");\r
        Product shortestName = findMin(products, (a, b) -> Integer.compare(a.name.length(), b.name.length()));\r
        System.out.println("Product with shortest name: " + shortestName);\r
    }\r
}`,g=()=>{const[t,l]=d.useState(0),r=[{label:"Step 1: Initialize min = arr[0] = 45",array:[45,67,23,89,12,78,34],currentMin:45,currentIndex:0,comparing:-1},{label:"Step 2: Compare 67 with min (45) → 67 > 45, no change",array:[45,67,23,89,12,78,34],currentMin:45,currentIndex:1,comparing:1},{label:"Step 3: Compare 23 with min (45) → 23 < 45, update min = 23",array:[45,67,23,89,12,78,34],currentMin:23,currentIndex:2,comparing:2},{label:"Step 4: Compare 89 with min (23) → 89 > 23, no change",array:[45,67,23,89,12,78,34],currentMin:23,currentIndex:3,comparing:3},{label:"Step 5: Compare 12 with min (23) → 12 < 23, update min = 12",array:[45,67,23,89,12,78,34],currentMin:12,currentIndex:4,comparing:4},{label:"Step 6: Compare 78 with min (12) → 78 > 12, no change",array:[45,67,23,89,12,78,34],currentMin:12,currentIndex:5,comparing:5},{label:"Step 7: Compare 34 with min (12) → 34 > 12, no change",array:[45,67,23,89,12,78,34],currentMin:12,currentIndex:6,comparing:6},{label:"✓ Complete! Smallest element is 12 at index 4",array:[45,67,23,89,12,78,34],currentMin:12,currentIndex:-1,comparing:-1}];return e.jsxs("div",{className:"w-full",children:[e.jsxs("svg",{viewBox:"0 0 900 350",className:"w-full h-auto max-w-5xl mx-auto my-4","aria-label":"Finding Smallest Element Visualization",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"smallestGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#10b981",stopOpacity:.1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#06b6d4",stopOpacity:.2}})]}),e.jsx("filter",{id:"shadow",x:"-5%",y:"-5%",width:"110%",height:"110%",children:e.jsx("feDropShadow",{dx:"1",dy:"1",stdDeviation:"2",floodOpacity:"0.2"})})]}),e.jsx("text",{x:"450",y:"25",textAnchor:"middle",fill:"#1e293b","dark:text-gray-200":!0,fontSize:"14",fontWeight:"bold",children:r[t].label}),e.jsx("rect",{x:"50",y:"40",width:"200",height:"35",rx:"8",fill:"#d1fae5",stroke:"#10b981",strokeWidth:"2"}),e.jsxs("text",{x:"150",y:"62",textAnchor:"middle",fill:"#065f46",fontSize:"14",fontWeight:"bold",children:["Current MIN: ",r[t].currentMin]}),r[t].array.map((n,i)=>e.jsxs("g",{transform:`translate(${i*100+50}, 100)`,children:[e.jsxs("rect",{x:"0",y:"0",width:"80",height:"60",rx:"6",fill:n===r[t].currentMin&&r[t].currentMin!==45?"#d1fae5":"#ffffff",stroke:i===r[t].comparing||n===r[t].currentMin&&r[t].currentMin!==45?"#10b981":"#cbd5e1",strokeWidth:i===r[t].comparing?"3":"2",className:"transition-all duration-300 hover:shadow-lg",filter:"url(#shadow)",children:[i===r[t].comparing&&e.jsx("animate",{attributeName:"stroke",values:"#10b981;#06b6d4;#10b981",dur:"0.8s",repeatCount:"indefinite"}),n===r[t].currentMin&&n!==45&&i!==r[t].comparing&&e.jsx("animate",{attributeName:"fill",values:"#d1fae5;#a7f3d0;#d1fae5",dur:"1s",repeatCount:"indefinite"})]}),e.jsx("text",{x:"40",y:"35",textAnchor:"middle",fill:"#1e293b",fontSize:"22",fontWeight:"bold",children:n}),e.jsxs("text",{x:"40",y:"78",textAnchor:"middle",fill:"#94a3b8",fontSize:"11",children:["index ",i]}),i===r[t].comparing&&e.jsxs("g",{children:[e.jsx("text",{x:"40",y:"-10",textAnchor:"middle",fill:"#10b981",fontSize:"11",fontWeight:"bold",children:"Comparing →"}),e.jsx("path",{d:"M 40 -3 L 40 0",stroke:"#10b981",strokeWidth:"2"})]}),n===r[t].currentMin&&n!==45&&i!==r[t].comparing&&r[t].currentMin!==12&&e.jsxs("g",{children:[e.jsx("text",{x:"40",y:"-10",textAnchor:"middle",fill:"#10b981",fontSize:"11",fontWeight:"bold",children:"✓ MIN"}),e.jsx("path",{d:"M 40 -3 L 40 0",stroke:"#10b981",strokeWidth:"2"})]}),n===12&&r[t].currentMin===12&&r[t].comparing===-1&&e.jsxs("g",{children:[e.jsx("text",{x:"40",y:"-10",textAnchor:"middle",fill:"#10b981",fontSize:"12",fontWeight:"bold",children:"🏆 SMALLEST!"}),e.jsx("path",{d:"M 40 -3 L 40 0",stroke:"#10b981",strokeWidth:"2"})]})]},i)),e.jsxs("g",{transform:"translate(50, 190)",children:[e.jsx("rect",{x:"0",y:"0",width:"800",height:"8",rx:"4",fill:"#e5e7eb"}),e.jsx("rect",{x:"0",y:"0",width:(t+1)*100,height:"8",rx:"4",fill:"#10b981",children:e.jsx("animate",{attributeName:"width",values:"0;800",dur:"2s",repeatCount:"indefinite"})})]}),e.jsxs("g",{transform:"translate(350, 260)",children:[e.jsx("rect",{x:"0",y:"0",width:"200",height:"35",rx:"8",fill:"#10b981",className:"cursor-pointer hover:fill-emerald-600 transition-all duration-300"}),e.jsx("text",{x:"100",y:"24",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",className:"cursor-pointer",children:t<7?"Next Step →":"Reset"})]})]}),e.jsx("div",{className:"text-center mt-2",children:e.jsx("button",{onClick:()=>l((t+1)%8),className:"px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all duration-300",children:t<7?"Next Step (Step "+(t+2)+"/8)":"Reset Animation"})})]})},u=()=>e.jsx("svg",{viewBox:"0 0 600 400",className:"w-full h-auto max-w-2xl mx-auto my-4",children:e.jsxs("g",{transform:"translate(20, 20)",children:[e.jsx("ellipse",{cx:"280",cy:"20",rx:"40",ry:"20",fill:"#10b981"}),e.jsx("text",{x:"280",y:"25",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"START"}),e.jsx("line",{x1:"280",y1:"40",x2:"280",y2:"70",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"140",y:"70",width:"280",height:"45",rx:"8",fill:"#eff6ff",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"280",y:"97",textAnchor:"middle",fill:"#1e3a8a",fontSize:"13",fontWeight:"bold",children:"min = arr[0]"}),e.jsx("line",{x1:"280",y1:"115",x2:"280",y2:"145",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"140",y:"145",width:"280",height:"45",rx:"8",fill:"#fce7f3",stroke:"#ec4899",strokeWidth:"2"}),e.jsx("text",{x:"280",y:"172",textAnchor:"middle",fill:"#9d174d",fontSize:"13",fontWeight:"bold",children:"for i = 1 to n-1"}),e.jsx("line",{x1:"280",y1:"190",x2:"280",y2:"220",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("polygon",{points:"280,220 380,260 280,300 180,260",fill:"#d1fae5",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"280",y:"265",textAnchor:"middle",fill:"#065f46",fontSize:"12",fontWeight:"bold",children:"arr[i] < min?"}),e.jsx("line",{x1:"380",y1:"260",x2:"480",y2:"260",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"430",y:"253",textAnchor:"middle",fill:"#10b981",fontSize:"11",children:"YES"}),e.jsx("rect",{x:"480",y:"240",width:"100",height:"40",rx:"8",fill:"#dcfce7",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"530",y:"265",textAnchor:"middle",fill:"#166534",fontSize:"11",fontWeight:"bold",children:"min = arr[i]"}),e.jsx("line",{x1:"180",y1:"260",x2:"80",y2:"260",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"130",y:"253",textAnchor:"middle",fill:"#ef4444",fontSize:"11",children:"NO"}),e.jsx("rect",{x:"20",y:"240",width:"60",height:"40",rx:"8",fill:"#fee2e2",stroke:"#ef4444",strokeWidth:"2"}),e.jsx("text",{x:"50",y:"265",textAnchor:"middle",fill:"#991b1b",fontSize:"11",fontWeight:"bold",children:"→"}),e.jsx("path",{d:"M 530 280 L 530 340 L 280 340 L 280 300",fill:"none",stroke:"#ec4899",strokeWidth:"2",strokeDasharray:"5,5",markerEnd:"url(#arrow)"}),e.jsx("path",{d:"M 50 280 L 50 360 L 280 360 L 280 300",fill:"none",stroke:"#ec4899",strokeWidth:"2",strokeDasharray:"5,5",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"180",y:"370",width:"200",height:"40",rx:"8",fill:"#dbeafe",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"280",y:"395",textAnchor:"middle",fill:"#1e3a8a",fontSize:"12",fontWeight:"bold",children:"Print min"}),e.jsx("line",{x1:"280",y1:"410",x2:"280",y2:"440",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("ellipse",{cx:"280",cy:"460",rx:"40",ry:"20",fill:"#ef4444"}),e.jsx("text",{x:"280",y:"465",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"END"})]})}),M=()=>{const[t,l]=d.useState("theory");return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",children:[e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"mb-8 text-center animate-[fadeInUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-4",children:"Finding the Smallest Element in an Array"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed",children:"Linear scan to find minimum value - the mirror image of finding maximum"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700",children:["theory","visual","code","practice"].map(r=>e.jsx("button",{onClick:()=>l(r),className:o("px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-300",t===r?"bg-emerald-50 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-600":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"),children:r.charAt(0).toUpperCase()+r.slice(1)},r))}),e.jsxs("div",{className:"space-y-6",children:[t==="theory"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center",children:[e.jsx("span",{className:"bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold",children:"1"}),"Finding Minimum Element"]}),e.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-4",children:["Finding the smallest element is ",e.jsx("strong",{className:"text-emerald-600 dark:text-emerald-400",children:"identical to finding the largest"})," except we use the ",e.jsx("strong",{className:"text-emerald-600 dark:text-emerald-400",children:"less than (<) operator"})," instead of greater than (>). It's a fundamental linear scan algorithm that tracks the current minimum."]}),e.jsx("div",{className:"bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg mb-4",children:e.jsxs("p",{className:"text-sm text-emerald-800 dark:text-emerald-200 font-mono",children:[e.jsx("strong",{children:"Prototype:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"public static int findMin(int[] arr)"}),e.jsx("br",{}),e.jsx("strong",{children:"Return Type:"})," ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"int"})," (minimum value)",e.jsx("br",{}),e.jsx("strong",{children:"Purpose:"})," Find the smallest value in any array",e.jsx("br",{}),e.jsx("strong",{children:"Key Insight:"})," Only the comparison operator changes from finding max!"]})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🔄 Finding Max vs Finding Min"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-orange-800 dark:text-orange-300 mb-2",children:"Finding Maximum"}),e.jsx("code",{className:"block bg-gray-900 text-green-400 p-2 rounded text-sm",children:`int max = arr[0];
for (int i = 1; i < arr.length; i++) {
    if (arr[i] > max) {  // > operator
        max = arr[i];
    }
}`}),e.jsx("p",{className:"text-sm text-orange-700 dark:text-orange-300 mt-2",children:"Largest value emerges"})]}),e.jsxs("div",{className:"bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-emerald-800 dark:text-emerald-300 mb-2",children:"Finding Minimum"}),e.jsx("code",{className:"block bg-gray-900 text-green-400 p-2 rounded text-sm",children:`int min = arr[0];
for (int i = 1; i < arr.length; i++) {
    if (arr[i] < min) {  // < operator
        min = arr[i];
    }
}`}),e.jsx("p",{className:"text-sm text-emerald-700 dark:text-emerald-300 mt-2",children:"Smallest value emerges"})]})]}),e.jsxs("p",{className:"text-center text-gray-600 dark:text-gray-300 mt-4 text-sm",children:["💡 Only ONE character changes: ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:">"})," becomes ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"<"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚙️ How It Works"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-3 text-gray-600 dark:text-gray-300",children:[e.jsxs("p",{children:["1️⃣ ",e.jsx("strong",{children:"Initialize"})," min = arr[0] (assume first element is smallest)"]}),e.jsxs("p",{children:["2️⃣ ",e.jsx("strong",{children:"Traverse"})," array from index 1 to n-1"]}),e.jsxs("p",{children:["3️⃣ ",e.jsx("strong",{children:"Compare"})," each element with current min"]}),e.jsxs("p",{children:["4️⃣ ",e.jsx("strong",{children:"Update min"})," if current element is smaller"]}),e.jsxs("p",{children:["5️⃣ ",e.jsx("strong",{children:"After loop"}),", min contains the smallest value"]}),e.jsxs("p",{children:["6️⃣ ",e.jsx("strong",{children:"Optional"})," - Track index of min element"]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"Analogy"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Finding lightest backpack:"}),e.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-300 mt-2 list-disc list-inside",children:[e.jsx("li",{children:"Start with first backpack's weight as lightest"}),e.jsx("li",{children:"Check each backpack one by one"}),e.jsx("li",{children:"If lighter found, update lightest"}),e.jsx("li",{children:"After checking all, you know the lightest!"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🌍 Real-World Examples"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"💰 Lowest Price"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Shopping app finding cheapest product in Barrackpore market - comparing prices to find minimum!"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"🏃 Fastest Race Time"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Sports meet finding winner - smallest time wins!"})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"🌡️ Lowest Temperature"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Weather app finding coldest day in Shyamnagar this week."})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg group hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300",children:[e.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"📊 Lowest Score"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Teacher finding lowest test score to identify students needing extra help."})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📊 Complexity Analysis"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[e.jsxs("div",{className:"text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Best Case"}),e.jsx("p",{className:"text-xl font-bold text-green-600",children:"O(n)"}),e.jsx("p",{className:"text-xs",children:"Still check all elements"})]}),e.jsxs("div",{className:"text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Average Case"}),e.jsx("p",{className:"text-xl font-bold text-yellow-600",children:"O(n)"}),e.jsx("p",{className:"text-xs",children:"n comparisons"})]}),e.jsxs("div",{className:"text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Worst Case"}),e.jsx("p",{className:"text-xl font-bold text-red-600",children:"O(n)"}),e.jsx("p",{className:"text-xs",children:"n comparisons"})]}),e.jsxs("div",{className:"text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"Space"}),e.jsx("p",{className:"text-xl font-bold text-blue-600",children:"O(1)"}),e.jsx("p",{className:"text-xs",children:"Only 1 variable"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚠️ Edge Cases to Consider"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-yellow-800",children:"Single element array"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Returns that element directly"})]}),e.jsxs("div",{className:"p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-yellow-800",children:"All elements equal"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Returns the value (any works)"})]}),e.jsxs("div",{className:"p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-yellow-800",children:"Negative numbers"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Works fine - most negative is minimum"})]}),e.jsxs("div",{className:"p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("span",{className:"font-semibold text-yellow-800",children:"Empty array"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:"Should throw exception or return special value"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"💡 Tips & Tricks"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"One character difference:"})," Finding min uses ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"<"})," instead of ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:">"})]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Track index too:"})," Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"minIndex"})," if position matters"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Handle empty array:"})," Always check ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"if (arr == null || arr.length == 0)"})]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Use Integer.MAX_VALUE:"})," Alternative initialization for empty check"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Find both min and max:"})," Can do in single pass for efficiency!"]})]})]}),e.jsx(a,{note:"Finding min is the perfect partner to finding max! I tell students: 'If you can find the tallest, you can find the shortest - just flip the comparison.' This builds pattern recognition. Challenge: Find both min and max in one pass - it's only slightly more complex!"})]}),t==="visual"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"👁️ Visual Walkthrough"}),e.jsx(g,{}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-4",children:"Watch how the minimum value updates as we scan through the array"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📐 Algorithm Flowchart"}),e.jsx(u,{})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"📝 Dry Run Example"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-700/50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"Step"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"i"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"arr[i]"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"Current Min"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"Comparison"}),e.jsx("th",{className:"px-3 py-2 text-left text-sm font-semibold",children:"Action"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[{step:1,i:0,val:45,min:45,compare:"-",action:"Initialize min = 45"},{step:2,i:1,val:67,min:45,compare:"67 < 45? No",action:"No change"},{step:3,i:2,val:23,min:45,compare:"23 < 45? Yes",action:"✓ Update min = 23"},{step:4,i:3,val:89,min:23,compare:"89 < 23? No",action:"No change"},{step:5,i:4,val:12,min:23,compare:"12 < 23? Yes",action:"✓ Update min = 12"},{step:6,i:5,val:78,min:12,compare:"78 < 12? No",action:"No change"},{step:7,i:6,val:34,min:12,compare:"34 < 12? No",action:"No change"}].map((r,n)=>e.jsxs("tr",{className:r.action.includes("Update")?"bg-emerald-50 dark:bg-emerald-900/20":"",children:[e.jsx("td",{className:"px-3 py-2 text-sm",children:r.step}),e.jsx("td",{className:"px-3 py-2 text-sm",children:r.i}),e.jsx("td",{className:"px-3 py-2 text-sm",children:r.val}),e.jsx("td",{className:"px-3 py-2 text-sm font-semibold",children:r.min}),e.jsx("td",{className:"px-3 py-2 text-sm",children:r.compare}),e.jsx("td",{className:"px-3 py-2 text-sm",children:r.action})]},n))})]})})]}),e.jsx(a,{note:"The visual animation clearly shows the 'min' variable decreasing. I have students compare this with the max animation - they'll see it's the mirror image. This reinforces that algorithms are patterns, and small changes produce different results!"})]}),t==="code"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(s,{fileModule:m,title:"FindSmallestBasic.java",highlightLines:[]}),e.jsx(s,{fileModule:c,title:"FindSmallestWithIndex.java",highlightLines:[]}),e.jsx(s,{fileModule:x,title:"FindSmallestMultiple.java",highlightLines:[]}),e.jsx(s,{fileModule:h,title:"FindSmallestObjects.java",highlightLines:[]})]})]}),e.jsx(a,{note:"Compare the code with find max - they're almost identical! This is a powerful lesson: understanding one operation teaches the other. Have students modify the max code to find min by changing just one character. This builds confidence and pattern recognition!"})]}),t==="practice"&&e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.4s_ease-out]",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Using > instead of <"}),e.jsxs("p",{className:"text-sm",children:["Using ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"if (arr[i] > min)"})," finds maximum instead of minimum!"]})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Initializing min = 0"}),e.jsx("p",{className:"text-sm",children:"Fails if all numbers are positive - min would incorrectly remain 0"})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("span",{className:"text-red-600 text-xl",children:"❌"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Not handling empty array"}),e.jsx("p",{className:"text-sm",children:"Accessing arr[0] on empty array causes ArrayIndexOutOfBoundsException"})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"✅ Best Practices"}),e.jsxs("ul",{className:"space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside",children:[e.jsx("li",{children:"Always check for null and empty array before processing"}),e.jsxs("li",{children:["Use ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"Integer.MAX_VALUE"})," for generic initialization"]}),e.jsx("li",{children:"Consider returning index instead of value when position matters"}),e.jsx("li",{children:"Document behavior for empty arrays (exception or special return)"}),e.jsxs("li",{children:["Use meaningful variable names: ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"minValue"})," not ",e.jsx("code",{className:"bg-gray-200 px-1 rounded",children:"m"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3",children:"💭 Think About..."}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"🤔 How would you find the second smallest element?"}),e.jsx("li",{children:"🤔 Can we find both min and max in fewer than 2n comparisons?"}),e.jsx("li",{children:"🤔 How would you find the minimum absolute value?"}),e.jsx("li",{children:"🤔 What's the difference between finding min in sorted vs unsorted array?"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4",children:"🎯 Questions & Answers"}),e.jsx("div",{className:"space-y-4",children:p.map((r,n)=>e.jsxs("details",{className:"group border border-gray-200 dark:border-gray-700 rounded-lg",children:[e.jsx("summary",{className:"cursor-pointer p-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",children:r.question}),e.jsx("div",{className:"p-4 pt-0 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700",children:r.answer})]},n))})]}),e.jsx(a,{note:"Finding min reinforces the pattern from finding max. I challenge students: 'Write one method that can find either min or max based on a parameter.' This builds flexible, reusable code skills. In Barrackpoor, we use min to find lowest scores for improvement plans!"})]})]})]}),e.jsx("style",{children:`
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
      `})]})},p=[{question:"What is the time complexity of finding minimum in an array?",answer:"O(n) - must examine every element to ensure we found the smallest value."},{question:"Why do we initialize min with arr[0]?",answer:"To have a starting point for comparison. If array has at least one element, arr[0] is a valid starting minimum."},{question:"What's the only difference between finding max and finding min?",answer:"The comparison operator changes from > to <. Everything else remains identical!"},{question:"What if array has only one element?",answer:"The loop doesn't execute, and min (initialized to arr[0]) correctly returns that element."},{question:"How to handle empty array?",answer:"Check arr == null || arr.length == 0 first. Either throw IllegalArgumentException or return Integer.MAX_VALUE."},{question:"How to find both minimum and maximum in one pass?",answer:"Track both min and max simultaneously, updating both as you traverse the array once."},{question:"What's the space complexity of finding minimum?",answer:"O(1) - only uses a few variables regardless of array size."},{question:"Can we find minimum in sorted array faster?",answer:"If ascending, min is first element O(1). If descending, min is last element O(1)."},{question:"How to find minimum using streams?",answer:"Arrays.stream(arr).min().getAsInt() - but still O(n) internally."},{question:"What's wrong with initializing min = 0?",answer:"Fails if all numbers are positive - min would incorrectly remain 0 instead of actual minimum."},{question:"How to find minimum absolute value?",answer:"Compare Math.abs(arr[i]) instead of arr[i] directly, but careful with sign."},{question:"How to find second smallest element?",answer:"Track both smallest and second smallest during single pass, updating both appropriately."},{question:"What's the best case for finding minimum?",answer:"Still O(n) - you always need to verify no smaller element exists later in array."},{question:"How to find minimum in 2D array?",answer:"Nested loops - outer for rows, inner for columns, update min when smaller found."},{question:"Can we use divide and conquer to find min?",answer:"Yes - split array, find min in left and right halves, return smaller. Still O(n) but uses recursion."},{question:"How to find bottom 3 minimum values?",answer:"Track three variables: first, second, third min. Update accordingly when smaller found."},{question:"What's the difference between min and minimum?",answer:"Same concept - 'min' is commonly used abbreviation for minimum."},{question:"How to find min in ArrayList?",answer:"Collections.min(list) or manual loop with list.get(i)."},{question:"Why can't we use sorting to find min?",answer:"We can, but sorting is O(n log n) - slower than direct O(n) scan."},{question:"How to find minimum of custom objects?",answer:"Implement Comparable interface and use compareTo(), or provide Comparator."}];export{M as default};
