import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
 * Topic 6: TYPE_SCROLL_INSENSITIVE - Bidirectional Cursor Navigation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.PreparedStatement;\r
import java.sql.ResultSet;\r
import java.sql.SQLException;\r
\r
public class TypeScrollInsensitiveNavigationDemo {\r
\r
    public static void demonstrateScrollableNavigation(Connection conn) throws SQLException {\r
        String sql = "SELECT student_id, name, score FROM students ORDER BY score DESC";\r
\r
        try (PreparedStatement pstmt = conn.prepareStatement(\r
                sql,\r
                ResultSet.TYPE_SCROLL_INSENSITIVE,\r
                ResultSet.CONCUR_READ_ONLY);\r
             ResultSet rs = pstmt.executeQuery()) {\r
\r
            // 1. Move to last row to find total count:\r
            if (rs.last()) {\r
                int totalRows = rs.getRow();\r
                System.out.println("   [SCROLL]: Total matching students = " + totalRows);\r
                System.out.println("   [LAST ROW]: Lowest ranked: " + rs.getString("name"));\r
            }\r
\r
            // 2. Jump to the first row (Top Rank):\r
            if (rs.first()) {\r
                System.out.println("   [FIRST ROW]: Top ranked student: " + rs.getString("name") + " (" + rs.getDouble("score") + ")");\r
            }\r
\r
            // 3. Jump directly to absolute row index 5:\r
            if (rs.absolute(5)) {\r
                System.out.println("   [ABSOLUTE 5]: Rank #5 student: " + rs.getString("name"));\r
            }\r
\r
            // 4. Move relative offset (+2 rows forward):\r
            if (rs.relative(2)) {\r
                System.out.println("   [RELATIVE +2]: Rank #7 student: " + rs.getString("name"));\r
            }\r
\r
            // 5. Navigate backwards:\r
            while (rs.previous()) {\r
                System.out.println("   [BACKWARD]: Step back to Row #" + rs.getRow() + ": " + rs.getString("name"));\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: TYPE_SCROLL_INSENSITIVE NAVIGATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> KEY SCROLLABLE CURSOR METHODS:");\r
        System.out.println("  - rs.first()        : Moves cursor to row 1.");\r
        System.out.println("  - rs.last()         : Moves cursor to the final row.");\r
        System.out.println("  - rs.previous()     : Moves cursor backward by 1 row.");\r
        System.out.println("  - rs.absolute(int n): Jumps directly to row N (negative N counts from end!).");\r
        System.out.println("  - rs.relative(int n): Jumps forward (+n) or backward (-n) from current row.");\r
        System.out.println("  - rs.beforeFirst()  : Resets cursor before row 1.");\r
        System.out.println("  - rs.afterLast()    : Resets cursor after last row.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
Topic 6: TYPE_SCROLL_INSENSITIVE Navigation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT 'INSENSITIVE' MEANS:\r
   - The result set is insensitive to changes made to the database while it is open.\r
   - It sees a static snapshot of data as it existed when the query was executed.\r
\r
2. ABSOLUTE VS RELATIVE:\r
   - 'rs.absolute(10)'  : Moves cursor to row 10 from the beginning.\r
   - 'rs.absolute(-1)'  : Moves cursor to the last row (-2 is second from last!).\r
   - 'rs.relative(3)'   : Moves cursor 3 rows forward from current position.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"How do you jump directly to the last row of a scrollable ResultSet and obtain the total number of rows returned?",shortAnswer:"Call rs.last() to move the cursor to the final row, and then call rs.getRow() to obtain the total row count.",explanation:"Standard pattern for calculating row counts in desktop GUI tables.",hint:"Call rs.last() followed by rs.getRow().",level:"Intermediate",codeExample:"if (rs.last()) { int total = rs.getRow(); }"},{question:"What happens if you pass a negative integer to rs.absolute(int row), such as rs.absolute(-1)?",shortAnswer:"The cursor positions itself relative to the end of the ResultSet: -1 moves to the last row, -2 moves to the second-to-last row, and so forth.",explanation:"Negative indices provide backward absolute positioning.",hint:"-1 positions the cursor on the last row of the result set.",level:"Intermediate",codeExample:"rs.absolute(-1); // Positions on the last row"}];function x(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_003 · Topic 6"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ResultSet & Metadata"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["TYPE_SCROLL_INSENSITIVE: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Bidirectional Cursor Navigation"})]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Navigating anywhere: moving backward with rs.previous(), jumping to row numbers with rs.absolute(), and seeking relative offsets."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:o,title:"TypeScrollInsensitiveNavigationDemo.java",highlightLines:[18,25,34,43]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{title:"ResultSet & Metadata FAQs",questions:i})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:a,title:"Module 011_003 Topic 6: TYPE_SCROLL_INSENSITIVE Navigation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_003_topic6_type_scroll_insensitive_navigation_note.txt"})}),t.jsx(s,{note:"With TYPE_SCROLL_INSENSITIVE, your ResultSet becomes like a random-access array! You can call rs.last() to find the total row count, rs.first() to jump back to start, or rs.absolute(50) to jump straight to row 50! — Sukanta Hui"})]})}export{x as default};
