import{j as e}from"./index-BzuofKLN.js";import{c as r}from"./clsx-B-dksMZM.js";import{J as t}from"./JavaFileLoader-BS5vbNQy.js";import"./JavaCodeBlock-DHyFNf4w.js";import"./prism-Dmu-iiPQ.js";import"./browser-DbdBQDpB.js";import"./prism-java-BwO6k4I_.js";const n=`import java.sql.*;\r
\r
public class ScrollableResultSet {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String query = "SELECT id, name, age, city FROM students";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             Statement stmt = conn.createStatement(\r
                     ResultSet.TYPE_SCROLL_INSENSITIVE,\r
                     ResultSet.CONCUR_READ_ONLY);\r
             ResultSet rs = stmt.executeQuery(query)) {\r
\r
            // Move to last row to get row count\r
            rs.last();\r
            int rowCount = rs.getRow();\r
            System.out.println("Total rows: " + rowCount);\r
\r
            // Move to first row\r
            rs.first();\r
            System.out.println("First row: " + rs.getString("name"));\r
\r
            // Move to row 2 using absolute\r
            rs.absolute(2);\r
            System.out.println("Row 2: " + rs.getString("name"));\r
\r
            // Move back one row using relative\r
            rs.relative(-1);\r
            System.out.println("After relative(-1): " + rs.getString("name"));\r
\r
            // Check if first\r
            System.out.println("Is first? " + rs.isFirst());\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,a=`import java.sql.*;\r
\r
public class UpdatableResultSet {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String query = "SELECT id, name, age, city FROM students";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             Statement stmt = conn.createStatement(\r
                     ResultSet.TYPE_SCROLL_INSENSITIVE,\r
                     ResultSet.CONCUR_UPDATABLE);\r
             ResultSet rs = stmt.executeQuery(query)) {\r
\r
            // Update the city of the first row\r
            if (rs.next()) {\r
                System.out.println("Updating: " + rs.getString("name"));\r
                rs.updateString("city", "Kolkata");\r
                rs.updateRow(); // important: actually update the database\r
                System.out.println("City updated to Kolkata.");\r
            }\r
\r
            // Verify update\r
            rs.beforeFirst();\r
            while (rs.next()) {\r
                System.out.printf("%d: %s, %s%n", rs.getInt("id"), rs.getString("name"), rs.getString("city"));\r
            }\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,i=`import java.sql.*;\r
\r
public class InsertRowResultSet {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String query = "SELECT id, name, age, city FROM students";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             Statement stmt = conn.createStatement(\r
                     ResultSet.TYPE_SCROLL_INSENSITIVE,\r
                     ResultSet.CONCUR_UPDATABLE);\r
             ResultSet rs = stmt.executeQuery(query)) {\r
\r
            // Move to insert row\r
            rs.moveToInsertRow();\r
\r
            // Set values for the new row\r
            rs.updateString("name", "Rohan");\r
            rs.updateInt("age", 22);\r
            rs.updateString("city", "Delhi");\r
            // id is auto-generated, so we don't set it\r
\r
            // Insert the row\r
            rs.insertRow();\r
            System.out.println("New row inserted.");\r
\r
            // Move back to the current row (optional)\r
            rs.moveToCurrentRow();\r
\r
            // Display all rows to confirm\r
            rs.beforeFirst();\r
            while (rs.next()) {\r
                System.out.printf("%d: %s%n", rs.getInt("id"), rs.getString("name"));\r
            }\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,l=`import java.sql.*;\r
\r
public class DeleteRowResultSet {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String query = "SELECT id, name, age, city FROM students";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             Statement stmt = conn.createStatement(\r
                     ResultSet.TYPE_SCROLL_INSENSITIVE,\r
                     ResultSet.CONCUR_UPDATABLE);\r
             ResultSet rs = stmt.executeQuery(query)) {\r
\r
            // Delete the row with id = 2 (or any specific row)\r
            while (rs.next()) {\r
                if (rs.getInt("id") == 2) {\r
                    rs.deleteRow();\r
                    System.out.println("Row with id 2 deleted.");\r
                    break;\r
                }\r
            }\r
\r
            // Show remaining rows\r
            rs.beforeFirst();\r
            while (rs.next()) {\r
                System.out.printf("%d: %s%n", rs.getInt("id"), rs.getString("name"));\r
            }\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,g=()=>{const s=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark:bg-gray-900 dark:text-gray-200 min-h-screen py-8 px-4 transition-colors duration-300",children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes gentlePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}),e.jsxs("div",{className:"max-w-4xl mx-auto space-y-12",children:[e.jsxs("section",{className:"animate-[fadeSlideUp_0.6s_ease-out]","aria-label":"Introduction to Scrollable and Updatable ResultSet",children:[e.jsx("h1",{className:"text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4",children:"🔄 Scrollable and Updatable ResultSet"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["By default, a ",e.jsx("code",{children:"ResultSet"})," is ",e.jsx("strong",{children:"forward‑only"})," and ",e.jsx("strong",{children:"read‑only"}),". However, JDBC allows you to create ",e.jsx("code",{children:"Statement"})," objects that produce",e.jsx("strong",{children:" scrollable"})," (can move backwards, jump to rows) and ",e.jsx("strong",{children:"updatable"}),"(can modify data directly through the ",e.jsx("code",{children:"ResultSet"}),") result sets. This gives you more flexibility when navigating and editing data."]}),e.jsxs("p",{className:"mt-2 text-md",children:[e.jsx("span",{className:"font-semibold",children:"Tuhina"})," from Shyamnagar wants to build an admin panel where she can browse student records, move to the last page, edit a record, and delete another – all without writing separate SQL statements. Scrollable and updatable ResultSets make this possible."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.7s_ease-out] space-y-4","aria-label":"Scrollable types",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🧭 Scrollable ResultSet Types"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:[e.jsxs("p",{className:"mb-3",children:["When creating a ",e.jsx("code",{children:"Statement"})," or ",e.jsx("code",{children:"PreparedStatement"}),", you can specify two constants:"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:[e.jsx("code",{children:"ResultSet.TYPE_FORWARD_ONLY"})," – default, can only move forward."]}),e.jsxs("li",{children:[e.jsx("code",{children:"ResultSet.TYPE_SCROLL_INSENSITIVE"})," – can scroll in any direction, but does not reflect changes made by others (insensitive to database modifications)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"ResultSet.TYPE_SCROLL_SENSITIVE"})," – scrollable and reflects changes made by others (sensitive). Not all databases support this."]})]}),e.jsxs("p",{className:"mt-3",children:[e.jsx("strong",{children:"Navigation methods:"})," ",e.jsx("code",{children:"previous()"}),", ",e.jsx("code",{children:"first()"}),", ",e.jsx("code",{children:"last()"}),",",e.jsx("code",{children:"absolute(int)"}),", ",e.jsx("code",{children:"relative(int)"}),", ",e.jsx("code",{children:"beforeFirst()"}),", ",e.jsx("code",{children:"afterLast()"}),",",e.jsx("code",{children:"isFirst()"}),", ",e.jsx("code",{children:"isLast()"}),", ",e.jsx("code",{children:"getRow()"}),"."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.8s_ease-out] space-y-4","aria-label":"Updatable ResultSet",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"✏️ Updatable ResultSet"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:[e.jsx("p",{className:"mb-3",children:"To make a ResultSet updatable, specify the concurrency mode:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:[e.jsx("code",{children:"ResultSet.CONCUR_READ_ONLY"})," – default, cannot update."]}),e.jsxs("li",{children:[e.jsx("code",{children:"ResultSet.CONCUR_UPDATABLE"})," – allows updates, inserts, and deletes directly on the ResultSet."]})]}),e.jsx("p",{className:"mt-3",children:e.jsx("strong",{children:"Update methods:"})}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"updateXxx(column, value)"})," – updates the current row's column (not yet sent to DB)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"updateRow()"})," – sends the update to the database."]}),e.jsxs("li",{children:[e.jsx("code",{children:"insertRow()"})," – inserts a new row after using ",e.jsx("code",{children:"moveToInsertRow()"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"deleteRow()"})," – deletes the current row."]}),e.jsxs("li",{children:[e.jsx("code",{children:"cancelRowUpdates()"})," – cancels updates to the current row."]}),e.jsxs("li",{children:[e.jsx("code",{children:"refreshRow()"})," – refreshes the row from the database."]})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.9s_ease-out] space-y-4","aria-label":"Scrollable navigation demo",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🎯 Navigating a Scrollable ResultSet"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-inner flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 600 200",className:"w-full max-w-2xl",stroke:"currentColor",fill:"none",strokeWidth:"2",children:[e.jsx("rect",{x:"50",y:"20",width:"500",height:"120",rx:"8",className:"stroke-indigo-300 dark:stroke-indigo-700 fill-indigo-50 dark:fill-indigo-900/20"}),e.jsx("line",{x1:"50",y1:"50",x2:"550",y2:"50",className:"stroke-gray-300 dark:stroke-gray-600"}),e.jsx("line",{x1:"50",y1:"80",x2:"550",y2:"80",className:"stroke-gray-300 dark:stroke-gray-600"}),e.jsx("line",{x1:"50",y1:"110",x2:"550",y2:"110",className:"stroke-gray-300 dark:stroke-gray-600"}),e.jsx("text",{x:"70",y:"40",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"ID"}),e.jsx("text",{x:"200",y:"40",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"Name"}),e.jsx("text",{x:"70",y:"70",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"1"}),e.jsx("text",{x:"200",y:"70",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"Swadeep"}),e.jsx("text",{x:"70",y:"100",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"2"}),e.jsx("text",{x:"200",y:"100",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"Tuhina"}),e.jsx("text",{x:"70",y:"130",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"3"}),e.jsx("text",{x:"200",y:"130",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"Abhronila"}),e.jsx("path",{d:"M20 100 L40 95 L40 105 Z",fill:"green",className:"dark:fill-green-400",children:e.jsx("animateMotion",{path:"M0 0 L0 -30 L30 0 L0 30 L0 0",dur:"4s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M300 150 L300 140 L295 145 M300 140 L305 145",stroke:"blue",fill:"none"}),e.jsx("text",{x:"260",y:"180",className:"text-xs fill-blue-600",stroke:"none",children:"absolute(3)"}),e.jsx("text",{x:"260",y:"195",className:"text-xs fill-blue-600",stroke:"none",children:"previous()"})]})}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 text-center",children:["With scrollable ResultSet, you can move to any row directly (",e.jsx("code",{children:"absolute"}),"), go backwards (",e.jsx("code",{children:"previous"}),"), or jump relative to current (",e.jsx("code",{children:"relative"}),")."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.0s_ease-out] space-y-6","aria-label":"Code examples for scrollable and updatable ResultSet",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🔹 Scrollable ResultSet Navigation"}),e.jsx(t,{fileModule:n,title:"ScrollableResultSet.java",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16,17,18]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Updatable ResultSet (Update Existing Row)"}),e.jsx(t,{fileModule:a,title:"UpdatableResultSet.java",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16,17]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Inserting a New Row via ResultSet"}),e.jsx(t,{fileModule:i,title:"InsertRowResultSet.java",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16,17,18]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Deleting a Row via ResultSet"}),e.jsx(t,{fileModule:l,title:"DeleteRowResultSet.java",highlightLines:[5,6,7,8,9,10,11,12]})]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border-l-4 border-indigo-400",children:e.jsxs("p",{className:"text-sm font-medium text-indigo-800 dark:text-indigo-200",children:["💡 ",e.jsx("strong",{children:"Observe carefully:"})," After calling ",e.jsx("code",{children:"updateXxx()"}),", you must call",e.jsx("code",{children:"updateRow()"})," to persist changes. What happens if you move to another row without calling",e.jsx("code",{children:"updateRow()"}),"?"]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.1s_ease-out] space-y-3","aria-label":"Common mistakes",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-red-200 dark:border-red-800 pb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-red-700 dark:text-red-300",children:[e.jsx("li",{children:"Assuming all databases support scrollable/updatable ResultSets – some drivers may not, or may have limitations."}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"TYPE_SCROLL_SENSITIVE"})," without checking database support – can lead to unexpected behavior."]}),e.jsxs("li",{children:["Forgetting that the ResultSet must be created with ",e.jsx("code",{children:"CONCUR_UPDATABLE"})," to call update methods."]}),e.jsxs("li",{children:["Modifying a row without being positioned on a valid row (e.g., after ",e.jsx("code",{children:"afterLast()"}),")."]}),e.jsxs("li",{children:["Not calling ",e.jsx("code",{children:"updateRow()"})," after updates – changes are lost."]}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"moveToInsertRow()"})," and forgetting to move back (",e.jsx("code",{children:"moveToCurrentRow()"}),") – leads to confusion."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.2s_ease-out] space-y-3","aria-label":"Best practices",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-green-200 dark:border-green-800 pb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-green-800 dark:text-green-200",children:[e.jsx("li",{children:"Only request scrollability/updatability when needed – it adds overhead."}),e.jsxs("li",{children:["Prefer ",e.jsx("code",{children:"TYPE_SCROLL_INSENSITIVE"})," for most use cases – better performance and wider support."]}),e.jsxs("li",{children:["Always check if the ResultSet is scrollable/updatable using ",e.jsx("code",{children:"getType()"})," and ",e.jsx("code",{children:"getConcurrency()"}),"."]}),e.jsxs("li",{children:["After inserting a row, call ",e.jsx("code",{children:"moveToCurrentRow()"})," if you need to continue working on the current row."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"refreshRow()"})," to reload a row if you suspect it has been updated by another transaction."]}),e.jsx("li",{children:"Keep transactions short when using updatable ResultSets to avoid locking issues."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.3s_ease-out] space-y-3","aria-label":"Professional tips",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-amber-200 dark:border-amber-800 pb-2",children:"🧠 Tips & Tricks"}),e.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Scrollable + Updatable = Powerful UI:"})," Build data grids that allow inline editing and navigation."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Row count:"})," Use ",e.jsx("code",{children:"last()"})," then ",e.jsx("code",{children:"getRow()"})," to get total rows without counting."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Batch updates:"})," Combine with batch processing for multiple updates via ResultSet."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Check driver capabilities:"})," Use ",e.jsx("code",{children:"DatabaseMetaData.supportsResultSetType()"})," and ",e.jsx("code",{children:"supportsResultSetConcurrency()"}),"."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Debangshu's trick:"})," In a paginated web app, use ",e.jsx("code",{children:"absolute(startRow)"})," and loop forward to fetch a page – avoid large result sets in memory."]})]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.4s_ease-out] space-y-3","aria-label":"Teacher's note",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"👩‍🏫 Teacher's Note"}),e.jsxs("div",{className:r("bg-indigo-100 dark:bg-indigo-900/40 p-5 rounded-xl","transition-all duration-300 hover:shadow-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/60"),children:[e.jsx("p",{className:"font-bold text-indigo-900 dark:text-indigo-100",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-indigo-800 dark:text-indigo-200",children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsxs("p",{className:"text-sm mt-1",children:["💼 ",s," years of experience in Programming, RDBMS, OS, Web Development."]}),e.jsxs("p",{className:"mt-3",children:[e.jsx("span",{className:"font-semibold",children:"Point to remember:"})," Many students think ResultSets are just for reading. Emphasize that scrollable and updatable ResultSets are a powerful feature for desktop-style applications, but they come with performance costs and may not be suitable for web apps with thousands of concurrent users.",e.jsx("br",{}),e.jsx("span",{className:"italic",children:'"Abhronila, think of a default ResultSet as a one‑way street – you can only go forward. A scrollable ResultSet is like a city map – you can go anywhere, but you need a better car (database support)."'})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.5s_ease-out] space-y-3","aria-label":"Quick checklist",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-2",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:"✔️ I understand the difference between forward‑only, scroll‑insensitive, and scroll‑sensitive ResultSets."}),e.jsxs("li",{children:["✔️ I know how to create a scrollable ResultSet using ",e.jsx("code",{children:"Statement"})," constants."]}),e.jsxs("li",{children:["✔️ I can navigate using ",e.jsx("code",{children:"previous()"}),", ",e.jsx("code",{children:"absolute()"}),", ",e.jsx("code",{children:"relative()"}),", etc."]}),e.jsx("li",{children:"✔️ I can update a row in the ResultSet and persist changes."}),e.jsx("li",{children:"✔️ I can insert and delete rows via the ResultSet."}),e.jsx("li",{children:"✔️ I am aware of database support and common pitfalls."})]})})]})]})]})};export{g as default};
