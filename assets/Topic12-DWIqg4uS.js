import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 007_004: Queue, Deque & PriorityQueue\r
 * Topic 12: Using ArrayDeque as a High-Speed LIFO Stack: Expression Evaluation & Undo-Redo\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayDeque;\r
import java.util.Deque;\r
\r
public class ArrayDequeAsLifoStackDemo {\r
\r
    // Classic Stack Algorithm: Validating Balanced Parentheses in a Source String:\r
    public static boolean isBalanced(String expression) {\r
        Deque<Character> bracketStack = new ArrayDeque<>();\r
\r
        for (char ch : expression.toCharArray()) {\r
            if (ch == '(' || ch == '{' || ch == '[') {\r
                bracketStack.push(ch); // LIFO push\r
            } else if (ch == ')' || ch == '}' || ch == ']') {\r
                if (bracketStack.isEmpty()) return false;\r
                char top = bracketStack.pop(); // LIFO pop\r
                if ((ch == ')' && top != '(') ||\r
                    (ch == '}' && top != '{') ||\r
                    (ch == ']' && top != '[')) {\r
                    return false;\r
                }\r
            }\r
        }\r
        return bracketStack.isEmpty();\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: ArrayDeque AS LIFO STACK (EXPRESSION PARSER) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String validExpression = "{ [ ( Swadeep + Tuhina ) * 10 ] + Abhronila }";\r
        String invalidExpression = "{ [ ( Debangshu ) } ]"; // Mismatched closing order\r
\r
        System.out.println(">>> Testing Expression 1: " + validExpression);\r
        System.out.println("  Is Balanced? : " + isBalanced(validExpression));\r
\r
        System.out.println("\\n>>> Testing Expression 2: " + invalidExpression);\r
        System.out.println("  Is Balanced? : " + isBalanced(invalidExpression));\r
\r
        System.out.println("\\n>>> LIFO STACK CONVENTIONS IN ArrayDeque:");\r
        System.out.println("  1. 'push(e)' : Equivalent to 'addFirst(e)' (Inserts at stack top).");\r
        System.out.println("  2. 'pop()'   : Equivalent to 'removeFirst()' (Removes from stack top).");\r
        System.out.println("  3. 'peek()'  : Equivalent to 'peekFirst()' (Inspects stack top).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_004: Queue, Deque & PriorityQueue\r
Topic 12: ArrayDeque as LIFO Stack\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LIFO STACK PATTERN:\r
   - Declare: 'Deque<T> stack = new ArrayDeque<>();'.\r
   - 'push(e)' → addFirst(e).\r
   - 'pop()' → removeFirst().\r
   - 'peek()' → peekFirst().\r
   - Ideal for expression parsing, depth-first search (DFS), and undo-redo stacks.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How do the stack methods 'push(e)', 'pop()', and 'peek()' map to double-ended queue operations in 'ArrayDeque'?",shortAnswer:"In 'ArrayDeque': 1. 'push(e)' maps directly to 'addFirst(e)' (inserting at the head/top). 2. 'pop()' maps directly to 'removeFirst()' (removing and returning from the head/top). 3. 'peek()' maps directly to 'peekFirst()' (inspecting the head/top without removal).",explanation:"Standard mapping defined in the Deque interface.",hint:"push = addFirst, pop = removeFirst, peek = peekFirst.",level:"Beginner",codeExample:'Deque<String> stack = new ArrayDeque<>(); stack.push("A"); String top = stack.pop();'}];function k(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_004 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"LIFO Stack"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Using ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ArrayDeque"})," as a High-Speed LIFO Stack: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"push()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"pop()"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"peek()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Implement classic stack algorithms: building a balanced parentheses expression parser using ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"push()"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"pop()"}),", and ",e.jsx("code",{className:"text-amber-300 font-mono",children:"peek()"})," on ArrayDeque."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"ArrayDequeAsLifoStackDemo.java",highlightLines:[7,10,11,15,16,18,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"LIFO Stack FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 007_004 Topic 12: ArrayDeque as LIFO Stack",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_004_topic12_arraydeque_lifo_stack_note.txt"})}),e.jsx(a,{note:"Whenever you build an undo-redo engine, syntax validator, or depth-first search, always declare 'Deque<T> stack = new ArrayDeque<>()'! It gives you pure LIFO stack semantics with incredible speed! — Sukanta Hui"})]})}export{k as default};
