import{r as d,j as e}from"./index-DlQhRwac.js";import{c as t}from"./clsx-B-dksMZM.js";import{T as c}from"./TeacherSukantaHui-oAfgzdyj.js";import{F as h}from"./FAQTemplate-Dd-OzPva.js";import{J as o}from"./JavaFileLoader-JjjOWRqk.js";import"./git-branch-DB-sdnF9.js";import"./JavaCodeBlock-B3QOaYGb.js";import"./prism-DOs7RmKt.js";import"./browser-BVlc5g3G.js";import"./prism-java-BwO6k4I_.js";const x=`/**\r
 * Recursive Tree Traversals: Inorder, Preorder, Postorder\r
 * Time Complexity: O(n) — each node visited once\r
 * Space Complexity: O(h) — recursion stack depth = height of tree\r
 * \r
 * For a balanced tree: O(log n) space\r
 * For a skewed tree: O(n) space\r
 */\r
public class TreeTraversals {\r
    // Simple binary tree node\r
    static class Node {\r
        int data;\r
        Node left, right;\r
        Node(int data) {\r
            this.data = data;\r
            left = right = null;\r
        }\r
    }\r
\r
    private static int callCount = 0;\r
    private static int maxDepth = 0;\r
\r
    public static void main(String[] args) {\r
        // Build a sample tree\r
        Node root = buildTree();\r
\r
        System.out.println("=== Tree Traversals ===");\r
        System.out.println("Tree structure: 1 → 2, 3; 2 → 4, 5; 3 → 6, 7");\r
\r
        // Inorder\r
        System.out.println("\\n1. Inorder (Left, Root, Right):");\r
        callCount = 0;\r
        maxDepth = 0;\r
        inorder(root);\r
        System.out.println("\\n   Calls: " + callCount + ", Depth: " + maxDepth);\r
\r
        // Preorder\r
        System.out.println("\\n2. Preorder (Root, Left, Right):");\r
        callCount = 0;\r
        maxDepth = 0;\r
        preorder(root);\r
        System.out.println("\\n   Calls: " + callCount + ", Depth: " + maxDepth);\r
\r
        // Postorder\r
        System.out.println("\\n3. Postorder (Left, Right, Root):");\r
        callCount = 0;\r
        maxDepth = 0;\r
        postorder(root);\r
        System.out.println("\\n   Calls: " + callCount + ", Depth: " + maxDepth);\r
\r
        System.out.println("\\nAll traversals visit each node once → O(n) time");\r
        System.out.println("Depth = height of tree → O(h) space");\r
    }\r
\r
    public static Node buildTree() {\r
        Node root = new Node(1);\r
        root.left = new Node(2);\r
        root.right = new Node(3);\r
        root.left.left = new Node(4);\r
        root.left.right = new Node(5);\r
        root.right.left = new Node(6);\r
        root.right.right = new Node(7);\r
        return root;\r
    }\r
\r
    // Inorder: Left, Root, Right\r
    public static void inorder(Node node) {\r
        callCount++;\r
        depth++;\r
        if (depth > maxDepth) maxDepth = depth;\r
\r
        if (node == null) {\r
            depth--;\r
            return;\r
        }\r
        String indent = "  ".repeat(depth - 1);\r
        System.out.print(indent + "visiting " + node.data + "\\n");\r
        inorder(node.left);\r
        inorder(node.right);\r
        depth--;\r
    }\r
\r
    // Preorder: Root, Left, Right\r
    public static void preorder(Node node) {\r
        callCount++;\r
        depth++;\r
        if (depth > maxDepth) maxDepth = depth;\r
\r
        if (node == null) {\r
            depth--;\r
            return;\r
        }\r
        String indent = "  ".repeat(depth - 1);\r
        System.out.print(indent + "visiting " + node.data + "\\n");\r
        preorder(node.left);\r
        preorder(node.right);\r
        depth--;\r
    }\r
\r
    // Postorder: Left, Right, Root\r
    public static void postorder(Node node) {\r
        callCount++;\r
        depth++;\r
        if (depth > maxDepth) maxDepth = depth;\r
\r
        if (node == null) {\r
            depth--;\r
            return;\r
        }\r
        String indent = "  ".repeat(depth - 1);\r
        postorder(node.left);\r
        postorder(node.right);\r
        System.out.print(indent + "visiting " + node.data + "\\n");\r
        depth--;\r
    }\r
\r
    private static int depth = 0;\r
}`,p=`/**\r
 * Analyzes tree traversal recursion depth for different tree shapes.\r
 * Compares balanced trees vs skewed trees.\r
 */\r
public class TreeAnalysis {\r
    static class Node {\r
        int data;\r
        Node left, right;\r
        Node(int data) { this.data = data; }\r
    }\r
\r
    private static int maxDepth = 0;\r
\r
    public static void main(String[] args) {\r
        int n = 10;\r
\r
        System.out.println("=== Tree Analysis: Balanced vs Skewed ===");\r
        System.out.println("Number of nodes: " + n);\r
        System.out.println();\r
\r
        // Balanced tree\r
        Node balancedRoot = buildBalancedTree(1, n);\r
        maxDepth = 0;\r
        inorder(balancedRoot);\r
        System.out.println("Balanced tree height: " + maxDepth);\r
        System.out.println("Balanced tree: O(log n) space ~ " + (int)(Math.log(n)/Math.log(2)));\r
\r
        // Skewed tree\r
        Node skewedRoot = buildSkewedTree(n);\r
        maxDepth = 0;\r
        inorder(skewedRoot);\r
        System.out.println("Skewed tree height: " + maxDepth);\r
        System.out.println("Skewed tree: O(n) space ~ " + n);\r
\r
        System.out.println("\\nTime is O(n) for both — only space differs.");\r
        System.out.println("Balanced trees are more memory-efficient for recursion.");\r
    }\r
\r
    // Build a balanced BST from 1 to n\r
    public static Node buildBalancedTree(int start, int end) {\r
        if (start > end) return null;\r
        int mid = start + (end - start) / 2;\r
        Node node = new Node(mid);\r
        node.left = buildBalancedTree(start, mid - 1);\r
        node.right = buildBalancedTree(mid + 1, end);\r
        return node;\r
    }\r
\r
    // Build a skewed tree (right-skewed, like a linked list)\r
    public static Node buildSkewedTree(int n) {\r
        Node root = new Node(1);\r
        Node current = root;\r
        for (int i = 2; i <= n; i++) {\r
            current.right = new Node(i);\r
            current = current.right;\r
        }\r
        return root;\r
    }\r
\r
    // Inorder traversal to measure depth\r
    public static void inorder(Node node) {\r
        depth++;\r
        if (depth > maxDepth) maxDepth = depth;\r
\r
        if (node == null) {\r
            depth--;\r
            return;\r
        }\r
        inorder(node.left);\r
        inorder(node.right);\r
        depth--;\r
    }\r
\r
    private static int depth = 0;\r
}`,m=`import java.util.Stack;\r
\r
/**\r
 * Compares recursive and iterative inorder traversal.\r
 * Both are O(n) time.\r
 * Recursive: O(h) space (call stack)\r
 * Iterative: O(h) space (explicit stack)\r
 * \r
 * Iterative avoids stack overflow for very deep trees.\r
 */\r
public class IterativeTraversal {\r
    static class Node {\r
        int data;\r
        Node left, right;\r
        Node(int data) { this.data = data; }\r
    }\r
\r
    private static int callCount = 0;\r
    private static int maxDepth = 0;\r
\r
    public static void main(String[] args) {\r
        // Build a skewed tree (worst-case for recursion)\r
        int n = 100;\r
        Node root = buildSkewedTree(n);\r
\r
        System.out.println("=== Recursive vs Iterative Traversal ===");\r
        System.out.println("Skewed tree with " + n + " nodes");\r
        System.out.println();\r
\r
        // Recursive inorder (may stack overflow for large n)\r
        System.out.println("1. Recursive inorder:");\r
        long start = System.nanoTime();\r
        callCount = 0;\r
        maxDepth = 0;\r
        recursiveInorder(root);\r
        long end = System.nanoTime();\r
        System.out.println("   Time: " + (end - start) + " ns");\r
        System.out.println("   Max depth: " + maxDepth);\r
        System.out.println("   Space: O(n) = " + n + " (call stack)");\r
\r
        // Iterative inorder (safe for large n)\r
        System.out.println("\\n2. Iterative inorder (explicit stack):");\r
        start = System.nanoTime();\r
        int iterDepth = iterativeInorder(root);\r
        end = System.nanoTime();\r
        System.out.println("   Time: " + (end - start) + " ns");\r
        System.out.println("   Max stack size: " + iterDepth);\r
        System.out.println("   Space: O(n) = " + n + " (explicit stack)");\r
\r
        System.out.println("\\nBoth are O(n) time and O(h) space.");\r
        System.out.println("Iterative avoids recursion stack overflow for deep trees.");\r
        System.out.println("For a balanced tree, both would use O(log n) space.");\r
    }\r
\r
    // Build a right-skewed tree\r
    public static Node buildSkewedTree(int n) {\r
        Node root = new Node(1);\r
        Node current = root;\r
        for (int i = 2; i <= n; i++) {\r
            current.right = new Node(i);\r
            current = current.right;\r
        }\r
        return root;\r
    }\r
\r
    // Recursive inorder with depth tracking\r
    public static void recursiveInorder(Node node) {\r
        callCount++;\r
        depth++;\r
        if (depth > maxDepth) maxDepth = depth;\r
\r
        if (node == null) {\r
            depth--;\r
            return;\r
        }\r
        recursiveInorder(node.left);\r
        // visit node\r
        recursiveInorder(node.right);\r
        depth--;\r
    }\r
\r
    // Iterative inorder using explicit stack\r
    public static int iterativeInorder(Node root) {\r
        Stack<Node> stack = new Stack<>();\r
        Node current = root;\r
        int maxStackSize = 0;\r
\r
        while (current != null || !stack.isEmpty()) {\r
            while (current != null) {\r
                stack.push(current);\r
                if (stack.size() > maxStackSize) maxStackSize = stack.size();\r
                current = current.left;\r
            }\r
            current = stack.pop();\r
            // visit current\r
            current = current.right;\r
        }\r
        return maxStackSize;\r
    }\r
\r
    private static int depth = 0;\r
}`,g=[{question:"What is the recurrence for tree traversals?",shortAnswer:"T(n) = T(k) + T(n-1-k) + O(1), T(0) = O(1)",explanation:"Each node is visited once, and each visit does constant work.",hint:"Visit each node once.",level:"basic",codeExample:"// T(n) = T(k) + T(n-1-k) + 1"},{question:"What is the time complexity of recursive tree traversals?",shortAnswer:"O(n) — linear time.",explanation:"Every node in the tree is visited exactly once.",hint:"Visit every node.",level:"basic",codeExample:"// O(n)"},{question:"What is the space complexity of recursive tree traversals?",shortAnswer:"O(h) — where h is the height of the tree.",explanation:"The recursion stack depth equals the height of the tree.",hint:"Stack depth = height.",level:"basic",codeExample:"// O(h)"},{question:"What is the space complexity for a balanced tree?",shortAnswer:"O(log n) — the height is logarithmic.",explanation:"A balanced tree has height O(log n), so stack space is O(log n).",hint:"log n.",level:"intermediate",codeExample:"// O(log n)"},{question:"What is the space complexity for a skewed tree?",shortAnswer:"O(n) — the height is linear.",explanation:"A skewed tree has height O(n), so stack space is O(n).",hint:"O(n).",level:"intermediate",codeExample:"// O(n)"},{question:"What is the order of nodes in preorder traversal?",shortAnswer:"Root → Left → Right.",explanation:"Visit the root first, then recursively traverse the left subtree, then the right.",hint:"Root first.",level:"basic",codeExample:"// visit(node); preorder(left); preorder(right);"},{question:"What is the order of nodes in inorder traversal?",shortAnswer:"Left → Root → Right.",explanation:"Recursively traverse the left subtree, then visit the root, then the right.",hint:"Left, Root, Right.",level:"basic",codeExample:"// inorder(left); visit(node); inorder(right);"},{question:"What is the order of nodes in postorder traversal?",shortAnswer:"Left → Right → Root.",explanation:"Recursively traverse the left subtree, then the right, then visit the root.",hint:"Left, Right, Root.",level:"basic",codeExample:"// postorder(left); postorder(right); visit(node);"},{question:"What is the base case for recursive tree traversal?",shortAnswer:"If the node is null, return.",explanation:"The recursion stops when it reaches a null child.",hint:"null check.",level:"basic",codeExample:"// if (node == null) return;"},{question:"Why does tree traversal take O(n) time?",shortAnswer:"Because every node is visited exactly once.",explanation:"There are n nodes, and each node is processed in constant time.",hint:"Visit each node once.",level:"basic",codeExample:"// n visits"},{question:"Can recursive tree traversal cause a stack overflow?",shortAnswer:"Yes, for a very skewed tree with depth > stack size limit.",explanation:"A skewed tree has height O(n), which can exceed the recursion stack limit.",hint:"Skewed tree.",level:"intermediate",codeExample:"// StackOverflowError for large skewed trees"},{question:"How can you avoid stack overflow in tree traversal?",shortAnswer:"Use iterative traversal with an explicit stack.",explanation:"Iterative traversal uses a stack on the heap, which can handle larger sizes.",hint:"Iterative.",level:"intermediate",codeExample:"// Stack<Node> stack = new Stack<>();"},{question:"What is the time complexity of iterative tree traversal?",shortAnswer:"O(n) — same as recursive.",explanation:"Each node is still visited once.",hint:"O(n).",level:"basic",codeExample:"// O(n)"},{question:"What is the space complexity of iterative tree traversal?",shortAnswer:"O(h) — same as recursive, but the stack is on the heap.",explanation:"The explicit stack still has size O(h) in the worst case.",hint:"O(h).",level:"intermediate",codeExample:"// O(h) space"},{question:"What is the height of a balanced binary tree?",shortAnswer:"O(log n) — where n is the number of nodes.",explanation:"A balanced tree has height at most log₂(n).",hint:"log n.",level:"basic",codeExample:"// ~log₂(n)"},{question:"What is the height of a skewed binary tree?",shortAnswer:"O(n) — linear height.",explanation:"A skewed tree is essentially a linked list, so height = n.",hint:"n.",level:"basic",codeExample:"// n"},{question:"What is the recurrence for tree traversal in terms of n (balanced)?",shortAnswer:"T(n) = 2T(n/2) + O(1) → O(n).",explanation:"For a balanced tree, each subtree has n/2 nodes.",hint:"2T(n/2) + 1.",level:"intermediate",codeExample:"// T(n) = 2T(n/2) + 1"},{question:"What is the recurrence for tree traversal in terms of n (skewed)?",shortAnswer:"T(n) = T(n-1) + O(1) → O(n).",explanation:"For a skewed tree, the recursion is linear.",hint:"T(n-1) + 1.",level:"intermediate",codeExample:"// T(n) = T(n-1) + 1"},{question:"What is the space complexity of tree traversal for a perfectly balanced tree?",shortAnswer:"O(log n) — the height is log₂(n).",explanation:"The recursion stack depth is the height of the tree.",hint:"O(log n).",level:"intermediate",codeExample:"// O(log n)"},{question:"What is the space complexity of tree traversal for a tree that is a linked list?",shortAnswer:"O(n) — the height is n.",explanation:"A tree that is a linked list has height n, so stack depth is n.",hint:"O(n).",level:"intermediate",codeExample:"// O(n)"},{question:"What traversal would you use to get sorted order from a BST?",shortAnswer:"Inorder traversal.",explanation:"Inorder traversal of a BST visits nodes in ascending order.",hint:"Inorder.",level:"basic",codeExample:"// inorder gives sorted order"},{question:"What traversal would you use to copy a tree?",shortAnswer:"Preorder traversal.",explanation:"Preorder visits root first, which is useful for creating a copy.",hint:"Preorder.",level:"intermediate",codeExample:"// preorder for copying"},{question:"What traversal would you use to delete a tree?",shortAnswer:"Postorder traversal.",explanation:"Postorder visits children before the parent, so you can delete children first.",hint:"Postorder.",level:"intermediate",codeExample:"// postorder for deletion"},{question:"What is the time complexity of Morris traversal?",shortAnswer:"O(n) — linear time, O(1) space.",explanation:"Morris traversal uses threaded binary trees to traverse without recursion or stack.",hint:"O(1) space.",level:"advanced",codeExample:"// O(n) time, O(1) space"},{question:"Can tree traversal be done in O(1) space recursively?",shortAnswer:"No, recursion inherently uses O(h) stack space.",explanation:"Recursive calls consume stack space proportional to the depth.",hint:"No.",level:"advanced",codeExample:"// recursion uses stack"},{question:"What is the space complexity of Morris traversal?",shortAnswer:"O(1) — constant space (no recursion, no stack).",explanation:"Morris traversal uses the tree's null pointers to traverse without extra memory.",hint:"O(1).",level:"advanced",codeExample:"// O(1) space"},{question:"What is the recurrence for the number of recursive calls in tree traversal?",shortAnswer:"C(n) = C(k) + C(n-1-k) + 1, C(0) = 1 → O(n).",explanation:"Each node causes one call (plus null checks).",hint:"C(n) = C(k) + C(n-1-k) + 1.",level:"advanced",codeExample:"// C(n) = C(k) + C(n-1-k) + 1"},{question:"What is the maximum recursion depth for inorder traversal of a skewed tree?",shortAnswer:"n — the height of the tree.",explanation:"For a skewed tree, the deepest path has n nodes.",hint:"n.",level:"intermediate",codeExample:"// depth = n"},{question:"What is the maximum recursion depth for inorder traversal of a balanced tree?",shortAnswer:"log₂(n) — the height of the tree.",explanation:"For a balanced tree, the height is logarithmic.",hint:"log n.",level:"intermediate",codeExample:"// depth = log₂(n)"},{question:"Can tree traversal be parallelized?",shortAnswer:"Yes, subtrees can be traversed in parallel.",explanation:"Left and right subtrees are independent, so they can be processed concurrently.",hint:"Parallel.",level:"advanced",codeExample:"// parallel traversal"},{question:"What is the time complexity of tree traversal with n nodes and height h?",shortAnswer:"O(n) — independent of height.",explanation:"Time is determined by the number of nodes, not the height.",hint:"O(n).",level:"basic",codeExample:"// O(n)"},{question:"What is the space complexity of tree traversal with n nodes and height h?",shortAnswer:"O(h) — depends on the height.",explanation:"The recursion stack depth is the height of the tree.",hint:"O(h).",level:"basic",codeExample:"// O(h)"}],O=()=>{const[n,l]=d.useState("overview"),s="animate-[fadeSlideUp_0.6s_ease-out_forwards] opacity-100",i=r=>`animate-[fadeSlideUp_0.5s_ease-out_${r*.08}s_forwards] opacity-100`;return e.jsxs("div",{className:"min-h-screen w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans leading-relaxed antialiased transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12",children:[e.jsxs("header",{className:t(s,"space-y-4"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-mono font-semibold tracking-wider uppercase bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full",children:"Topic 45"}),e.jsx("span",{className:"text-xs font-medium text-gray-500 dark:text-gray-400",children:"Recursive Algorithms"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Complexity of Recursive Tree Traversals"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl",children:["Analyzing the ",e.jsx("span",{className:"text-emerald-600 dark:text-emerald-400 font-semibold",children:"O(n) time"})," and",e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400 font-semibold",children:" O(h) space"})," of recursive tree traversals — understanding how the tree shape affects the recursion stack."]})]}),e.jsx("nav",{className:"flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-800 pb-3",children:["overview","code","faq"].map(r=>e.jsxs("button",{onClick:()=>l(r),className:t("px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300",n===r?"bg-indigo-600 text-white shadow-md shadow-indigo-600/20 dark:shadow-indigo-500/20":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),children:[r==="overview"&&"📖 Overview",r==="code"&&"☕ Code Examples",r==="faq"&&"❓ FAQ"]},r))}),e.jsxs("div",{className:"space-y-12",children:[n==="overview"&&e.jsxs("div",{className:"space-y-12",children:[e.jsxs("section",{className:t(s,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," What are Recursive Tree Traversals?"]}),e.jsxs("div",{className:"prose prose-gray dark:prose-invert max-w-none",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Tree traversals"})," are algorithms that visit every node in a tree data structure exactly once. The three classic ",e.jsx("strong",{children:"depth-first traversals"})," are:"]}),e.jsxs("ul",{className:"list-disc pl-6 mt-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Preorder:"})," Visit root, then left subtree, then right subtree."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Inorder:"})," Visit left subtree, then root, then right subtree."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Postorder:"})," Visit left subtree, then right subtree, then root."]})]}),e.jsxs("p",{children:["For a binary tree with ",e.jsx("strong",{children:"n"})," nodes, the recurrence is:",e.jsx("span",{className:"block font-mono text-center text-lg my-2",children:"T(n) = T(left) + T(right) + O(1),   T(0) = O(1)"}),"This gives ",e.jsx("strong",{children:"O(n)"})," time for all traversals. The space complexity is ",e.jsx("strong",{children:"O(h)"}),", where ",e.jsx("strong",{children:"h"})," is the height of the tree — O(log n) for balanced trees, O(n) for skewed trees."]}),e.jsx("p",{children:"Think of it like exploring a family tree: you start at the root, visit all descendants in a systematic order. The depth of your recursion is the height of the tree — the path from root to the deepest leaf."})]})]}),e.jsxs("section",{className:t(s,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Types of Tree Traversals"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[{type:"Preorder",order:"Root → Left → Right",use:"Copying a tree, prefix expression evaluation.",icon:"🌳"},{type:"Inorder",order:"Left → Root → Right",use:"BST traversal gives sorted order.",icon:"🔢"},{type:"Postorder",order:"Left → Right → Root",use:"Deleting a tree, postfix expression evaluation.",icon:"🗑️"}].map((r,a)=>e.jsxs("div",{className:t(i(a),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10","hover:scale-[1.01] hover:border-emerald-300 dark:hover:border-emerald-700"),children:[e.jsx("div",{className:"text-2xl mb-2",children:r.icon}),e.jsx("h3",{className:"font-bold text-emerald-600 dark:text-emerald-400",children:r.type}),e.jsx("p",{className:"text-sm font-mono text-gray-500 dark:text-gray-400 mt-1",children:r.order}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:r.use})]},a))})]}),e.jsxs("section",{className:t(s,"space-y-6"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Complexity Analysis"]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[{traversal:"Preorder",time:"O(n)",space:"O(h) — O(log n) balanced, O(n) skewed",example:"n=1000, balanced: ~10 depth, skewed: ~1000 depth"},{traversal:"Inorder",time:"O(n)",space:"O(h) — same as above",example:"n=1000, balanced: ~10 depth, skewed: ~1000 depth"},{traversal:"Postorder",time:"O(n)",space:"O(h) — same as above",example:"n=1000, balanced: ~10 depth, skewed: ~1000 depth"}].map((r,a)=>e.jsxs("div",{className:t(i(a+3),"p-5 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10","hover:scale-[1.01] hover:border-emerald-300 dark:hover:border-emerald-700"),children:[e.jsx("h3",{className:"font-bold text-gray-800 dark:text-gray-100",children:r.traversal}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:["Time: ",e.jsx("span",{className:"font-semibold",children:r.time})]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Space: ",e.jsx("span",{className:"font-semibold",children:r.space})]}),e.jsx("p",{className:"text-sm font-mono text-emerald-600 dark:text-emerald-400 mt-2",children:r.example})]},a))})]}),e.jsxs("section",{className:t(s,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Visual Intuition: Recursion Depth"]}),e.jsxs("div",{className:"w-full rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-4 sm:p-6",children:[e.jsxs("svg",{viewBox:"0 0 800 300",className:"w-full h-auto max-h-64",role:"img","aria-label":"Tree traversal recursion depth",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow45",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),e.jsx("text",{x:"400",y:"20",textAnchor:"middle",fontSize:"12",fill:"#374151",className:"dark:fill-gray-300",children:"Recursion Depth = Height of Tree (h)"}),e.jsx("text",{x:"150",y:"45",textAnchor:"middle",fontSize:"11",fill:"#374151",className:"dark:fill-gray-300",children:"Balanced: h = O(log n)"}),e.jsx("circle",{cx:"150",cy:"65",r:"12",fill:"#818cf8"}),e.jsx("line",{x1:"150",y1:"77",x2:"130",y2:"95",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"150",y1:"77",x2:"170",y2:"95",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("circle",{cx:"130",cy:"105",r:"10",fill:"#34d399"}),e.jsx("circle",{cx:"170",cy:"105",r:"10",fill:"#34d399"}),e.jsx("line",{x1:"130",y1:"115",x2:"120",y2:"130",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"130",y1:"115",x2:"140",y2:"130",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"170",y1:"115",x2:"160",y2:"130",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("line",{x1:"170",y1:"115",x2:"180",y2:"130",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("circle",{cx:"120",cy:"140",r:"8",fill:"#f472b6"}),e.jsx("circle",{cx:"140",cy:"140",r:"8",fill:"#f472b6"}),e.jsx("circle",{cx:"160",cy:"140",r:"8",fill:"#f472b6"}),e.jsx("circle",{cx:"180",cy:"140",r:"8",fill:"#f472b6"}),e.jsx("text",{x:"150",y:"175",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"Depth ~3"}),e.jsx("text",{x:"650",y:"45",textAnchor:"middle",fontSize:"11",fill:"#374151",className:"dark:fill-gray-300",children:"Skewed: h = O(n)"}),e.jsx("circle",{cx:"650",cy:"65",r:"12",fill:"#f87171"}),e.jsx("line",{x1:"650",y1:"77",x2:"650",y2:"95",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("circle",{cx:"650",cy:"105",r:"10",fill:"#f87171",opacity:"0.8"}),e.jsx("line",{x1:"650",y1:"115",x2:"650",y2:"130",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("circle",{cx:"650",cy:"140",r:"8",fill:"#f87171",opacity:"0.7"}),e.jsx("line",{x1:"650",y1:"148",x2:"650",y2:"160",stroke:"#6b7280",strokeWidth:"1.5"}),e.jsx("circle",{cx:"650",cy:"170",r:"7",fill:"#f87171",opacity:"0.6"}),e.jsx("text",{x:"650",y:"200",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"Depth ~5"}),e.jsx("text",{x:"400",y:"245",textAnchor:"middle",fontSize:"11",fill:"#374151",className:"dark:fill-gray-300",children:"Balanced tree → O(log n) stack space. Skewed tree → O(n) stack space."}),e.jsx("text",{x:"400",y:"270",textAnchor:"middle",fontSize:"11",fill:"#6b7280",children:"Time = O(n) for both — each node visited once."})]}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-2",children:"The recursion depth depends on the tree's height. Balanced trees give O(log n) space; skewed trees give O(n) space."})]})]}),e.jsxs("section",{className:t(s,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Recurrence Relation"]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700",children:[e.jsx("p",{className:"font-mono text-lg text-center",children:"T(n) = T(k) + T(n-1-k) + O(1),   T(0) = O(1)"}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-2",children:["Where ",e.jsx("strong",{children:"k"})," is the size of the left subtree, and ",e.jsx("strong",{children:"n-1-k"})," is the size of the right subtree. Each node is visited once with O(1) work."]}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-1",children:["For any split, T(n) = T(k) + T(n-1-k) + 1 solves to ",e.jsx("strong",{children:"O(n)"}),"."]}),e.jsxs("p",{className:"text-center text-sm text-gray-600 dark:text-gray-400 mt-1",children:["The space complexity is determined by the recursion depth = ",e.jsx("strong",{children:"height of the tree"}),"."]}),e.jsxs("p",{className:"text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-2",children:["Time Complexity: ",e.jsx("span",{className:"font-mono",children:"O(n)"})," (all traversals)"]}),e.jsxs("p",{className:"text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400",children:["Space Complexity: ",e.jsx("span",{className:"font-mono",children:"O(h)"})," where h is tree height"]})]})]}),e.jsxs("section",{className:t(s,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Real-World Examples"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"File System:"})," ","Traversing a directory structure to list all files or calculate total size uses tree traversal. A balanced directory tree (like a well-organized file system) uses less stack space."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"Expression Parsing:"})," ","Evaluating arithmetic expressions using an expression tree uses postorder traversal."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"Classroom Example:"})," ","A school in ",e.jsx("strong",{children:"Barrackpore"})," has a school hierarchy: Principal (root) → Heads of Departments → Teachers → Students. Recursive traversal visits every person in the hierarchy once."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"Game AI:"})," ","Exploring game trees (like chess) uses tree traversal. The recursion depth is the depth of the game tree (number of moves ahead)."]})})]})]}),e.jsxs("section",{className:t(s,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Professional Tips"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{tip:"Use iterative traversal for very deep trees",desc:"Recursive traversal can cause stack overflow for skewed trees. Use an explicit stack."},{tip:"Balanced trees = O(log n) space",desc:"If your tree is balanced (like an AVL tree), the recursion stack is only O(log n)."},{tip:"All traversals are O(n) time",desc:"Every node is visited exactly once, so time complexity is always linear."},{tip:"Choose traversal based on your use case",desc:"Preorder for copying, inorder for BST sorted order, postorder for deletion."}].map((r,a)=>e.jsxs("div",{className:t(i(a+6),"p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800","transition-all duration-300 hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700"),children:[e.jsxs("p",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:["✦ ",r.tip]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:r.desc})]},a))})]}),e.jsxs("section",{className:t(s,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Common Mistakes"]}),e.jsxs("ul",{className:"space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting the base case:"})," Without if (node == null) return, the recursion never terminates."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming space is always O(log n):"})," For a skewed tree, space is O(n), not O(log n). Always consider the tree height."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing preorder, inorder, and postorder:"})," Each has a specific order of visiting nodes. Practice tracing each on the same tree."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Overlooking the difference between time and space:"})," Time is always O(n), but space depends on the tree shape."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using recursion on very large skewed trees:"})," This can cause stack overflow. Use iterative traversal for safety.",e.jsxs("span",{className:"block text-sm text-gray-500 dark:text-gray-400 mt-1",children:["— ",e.jsx("strong",{children:"Susmita"})," once wrote an inorder traversal for a skewed tree of 1 million nodes and got a StackOverflowError. She learned to use iterative traversal for large trees."]})]})]})]}),e.jsxs("section",{className:t(s,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Best Practices"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use iterative traversal"})," for very deep trees (h > 1000) to avoid stack overflow."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Know your tree shape"})," — balanced vs skewed determines space complexity."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Write the recurrence"})," — T(n) = T(k) + T(n-1-k) + O(1) → O(n) — to understand the complexity."]})}),e.jsx("div",{className:"p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold text-emerald-600 dark:text-emerald-400",children:"✓"})," ",e.jsx("strong",{children:"Use the right traversal"})," for the right task: inorder for BST sorted output, preorder for copying, postorder for deletion."]})})]})]}),e.jsxs("section",{className:t(s,"space-y-4"),children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"●"})," Mini Checklist"]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:["✅ Can you write the recurrence for tree traversals?","✅ Do you know the time complexity (O(n)) and why?","✅ Do you know the space complexity (O(h)) and why?","✅ Can you implement inorder, preorder, and postorder?","✅ Do you understand the difference between balanced and skewed trees?","✅ Can you identify when to use recursive vs iterative traversal?"].map((r,a)=>e.jsx("div",{className:t(i(a+10),"p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-sm text-gray-700 dark:text-gray-300","transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"),children:r},a))})]}),e.jsxs("section",{className:t(s,"space-y-3 p-5 rounded-xl bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40"),children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-2",children:"💡 Think About…"}),e.jsxs("ul",{className:"space-y-2 text-amber-700 dark:text-amber-200/80 text-sm list-disc pl-5",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Observe carefully:"})," For a tree with n nodes, how many recursive calls are made? Each node is visited once, so n calls (plus null checks). That's O(n) time."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Try changing this:"})," What if the tree is a balanced binary tree? The height is log₂(n), so stack space is O(log n). What if it's a skewed tree (like a linked list)? The height is n, so stack space is O(n)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Think about:"})," A school in ",e.jsx("strong",{children:"Barrackpore"})," has a hierarchical organization with a principal, department heads, teachers, and students. The recursion depth for traversing this hierarchy is the depth of the tree (number of levels). A balanced hierarchy uses less stack space than a deeply nested one."]})]})]})]}),n==="code"&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:t(s,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Tree Traversals — Inorder, Preorder, Postorder"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Demonstrates recursive tree traversals with call count and depth tracking."}),e.jsx(o,{fileModule:x,title:"TreeTraversals.java",highlightLines:[]})]}),e.jsxs("section",{className:t(s,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Tree Analysis — Balanced vs Skewed"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Compares the recursion depth for balanced and skewed trees."}),e.jsx(o,{fileModule:p,title:"TreeAnalysis.java",highlightLines:[]})]}),e.jsxs("section",{className:t(s,"space-y-3"),children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"☕ Iterative Traversal — O(n) Time, O(h) Space (Explicit Stack)"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Compares recursive and iterative (stack-based) inorder traversal."}),e.jsx(o,{fileModule:m,title:"IterativeTraversal.java",highlightLines:[]})]})]}),n==="faq"&&e.jsx("div",{className:t(s,"space-y-4"),children:e.jsx(h,{title:"Complexity of Recursive Tree Traversals — FAQs",questions:g})})]}),e.jsx("div",{className:t(s,"pt-4 border-t border-gray-200 dark:border-gray-800"),children:e.jsx(c,{note:`Tree traversals are the foundation of many algorithms. I emphasize that the time complexity is always 
              O(n) because each node is visited once. The space complexity, however, depends on the tree shape. 
              Students often forget that the recursion stack depth is the height of the tree, not the number of nodes. 
              A balanced tree gives O(log n) space, while a skewed tree gives O(n). This is a great opportunity 
              to discuss the importance of balanced trees and the risk of stack overflow in recursive traversals. 
              Practice all three traversals on the same tree to see the different orders. Also, show the iterative 
              versions to demonstrate how to avoid recursion stack limits.`})}),e.jsx("footer",{className:"text-center text-xs text-gray-400 dark:text-gray-600 pt-8 border-t border-gray-200 dark:border-gray-800",children:e.jsx("p",{children:"Topic 45 · Complexity of Recursive Tree Traversals · Built with ❤️ for the classroom"})})]}),e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0%   { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[fadeSlideUp_.*\\] {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `})]})};export{O as default};
