import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 007_002: List Implementations & ArrayList Internals\r
 * Topic 1: java.util.ArrayList Internal Mechanics: The Backing Object[] elementData Array\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.lang.reflect.Field;\r
import java.util.ArrayList;\r
\r
public class ArrayListBackingArrayInternalsDemo {\r
\r
    // Inspecting private transient Object[] elementData array via Reflection:\r
    private static void inspectArrayListCapacity(String label, ArrayList<?> list) throws Exception {\r
        Field elementDataField = ArrayList.class.getDeclaredField("elementData");\r
        elementDataField.setAccessible(true);\r
        Object[] elementData = (Object[]) elementDataField.get(list);\r
\r
        System.out.printf("  [%-15s] Size (elements): %-2d | Internal Capacity (elementData.length): %-2d%n",\r
                label, list.size(), (elementData == null ? 0 : elementData.length));\r
    }\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: ArrayList BACKING ARRAY (elementData) INTERNALS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Inspecting Initial State (Lazy Allocation):");\r
        ArrayList<String> studentList = new ArrayList<>();\r
        inspectArrayListCapacity("New ArrayList()", studentList); // Points to DEFAULTCAPACITY_EMPTY_ELEMENTDATA (length 0)\r
\r
        System.out.println("\\n>>> 2. Adding First Element (Triggers Expansion to Default 10):");\r
        studentList.add("Swadeep Paul (Barrackpore)");\r
        inspectArrayListCapacity("After 1st Add", studentList); // Expanded to 10!\r
\r
        System.out.println("\\n>>> 3. Adding 9 More Elements (Fills Capacity to 10):");\r
        for (int i = 2; i <= 10; i++) {\r
            studentList.add("Student " + i);\r
        }\r
        inspectArrayListCapacity("After 10 Adds", studentList); // Size = 10, Capacity = 10\r
\r
        System.out.println("\\n>>> 4. Adding 11th Element (Triggers 1.5x Expansion to 15!):");\r
        studentList.add("Student 11 (Triggers Growth)");\r
        inspectArrayListCapacity("After 11th Add", studentList); // Expanded to 15!\r
\r
        System.out.println("\\n>>> WHAT IS 'transient Object[] elementData'?");\r
        System.out.println("  1. The underlying contiguous heap array where ArrayList stores element references.");\r
        System.out.println("  2. 'transient': Marked transient because custom 'writeObject()' serializes only active elements, not empty buffer slots.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_002: List Implementations & ArrayList Internals\r
Topic 1: ArrayList Backing Array\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ARRAYLIST INTERNALS:\r
   - Backed by 'transient Object[] elementData'.\r
   - Initialized to empty array {} until first add.\r
   - First 'add()' expands array to default capacity 10.\r
   - 'transient' prevents serializing empty unused slots.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why is the internal backing array 'transient Object[] elementData' in java.util.ArrayList marked as 'transient'?",shortAnswer:"If 'elementData' were serialized using default Java serialization, all trailing empty buffer slots (e.g. 90 empty null entries in an array of capacity 100 with size 10) would be written to the byte stream, wasting bandwidth and storage. Marking it 'transient' allows ArrayList to provide custom 'writeObject()' and 'readObject()' methods that serialize ONLY the actual active elements ('size').",explanation:"A classic high-performance serialization optimization in the JDK core library.",hint:"Prevents serializing empty unused buffer slots, saving network bandwidth and disk space.",level:"Advanced",codeExample:"transient Object[] elementData; // Custom writeObject serializes only active size"}];function A(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_002 · Topic 1"}),t.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Backing Array Internals"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[t.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.ArrayList"})," Internal Mechanics: The Backing ",t.jsx("code",{className:"text-purple-400 font-mono",children:"Object[] elementData"})," Array"]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Trace internal JVM memory layouts: inspecting the private ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"elementData"})," array via reflection to observe lazy initialization and capacity vs size."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:i,title:"ArrayListBackingArrayInternalsDemo.java",highlightLines:[7,10,14,15,16,25,29,35,39]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{title:"Backing Array FAQs",questions:l})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:s,title:"Module 007_002 Topic 1: ArrayList Backing Array",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_002_topic1_arraylist_backing_array_note.txt"})}),t.jsx(r,{note:"Under the hood, an ArrayList is just a plain Java array ('Object[] elementData') that automatically swaps itself for a larger array whenever it runs out of space! That's why it gives you the speed of an array with the flexibility of a dynamic list! — Sukanta Hui"})]})}export{A as default};
