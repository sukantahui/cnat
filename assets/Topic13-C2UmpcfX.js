import{j as e}from"./index-CcWT5Clg.js";import{c as t}from"./clsx-B-dksMZM.js";import{J as r}from"./JavaFileLoader-DHy0dA-s.js";import"./JavaCodeBlock-D5aBMD6x.js";import"./prism-BOTN7K2F.js";import"./browser-CLrHwac_.js";import"./prism-java-BwO6k4I_.js";const s=`import javax.sql.rowset.JdbcRowSet;\r
import javax.sql.rowset.RowSetProvider;\r
import java.sql.SQLException;\r
\r
public class JdbcRowSetExample {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        try (JdbcRowSet jrs = RowSetProvider.newFactory().createJdbcRowSet()) {\r
            jrs.setUrl(url);\r
            jrs.setUsername(user);\r
            jrs.setPassword(password);\r
            jrs.setCommand("SELECT id, name, age, city FROM students");\r
            jrs.execute();\r
\r
            // JdbcRowSet is scrollable and updatable\r
            jrs.last();\r
            System.out.println("Total rows: " + jrs.getRow());\r
\r
            jrs.beforeFirst();\r
            while (jrs.next()) {\r
                System.out.printf("%d: %s (%d) from %s%n",\r
                        jrs.getInt("id"),\r
                        jrs.getString("name"),\r
                        jrs.getInt("age"),\r
                        jrs.getString("city"));\r
            }\r
\r
            // Update example (connected)\r
            jrs.absolute(1);\r
            jrs.updateString("city", "Kolkata");\r
            jrs.updateRow(); // updates database immediately\r
            System.out.println("First row updated.");\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,n=`import javax.sql.rowset.CachedRowSet;\r
import javax.sql.rowset.RowSetProvider;\r
import java.sql.Connection;\r
import java.sql.DriverManager;\r
import java.sql.SQLException;\r
\r
public class CachedRowSetExample {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             CachedRowSet crs = RowSetProvider.newFactory().createCachedRowSet()) {\r
\r
            // Populate the CachedRowSet\r
            crs.setCommand("SELECT id, name, age, city FROM students");\r
            crs.execute(conn); // uses the provided connection\r
\r
            // Now we can close the connection\r
            conn.close();\r
            System.out.println("Connection closed, but CachedRowSet still holds data.");\r
\r
            // Navigate and modify offline\r
            crs.last();\r
            System.out.println("Total rows: " + crs.getRow());\r
\r
            // Modify data (offline)\r
            crs.absolute(2);\r
            crs.updateString("city", "Delhi");\r
            crs.updateRow();\r
\r
            // To sync changes back, we need a new connection\r
            try (Connection newConn = DriverManager.getConnection(url, user, password)) {\r
                crs.acceptChanges(newConn);\r
                System.out.println("Changes synchronized to database.");\r
            }\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,i=`import javax.sql.rowset.WebRowSet;\r
import javax.sql.rowset.RowSetProvider;\r
import java.io.FileReader;\r
import java.io.FileWriter;\r
import java.sql.Connection;\r
import java.sql.DriverManager;\r
import java.sql.SQLException;\r
\r
public class WebRowSetExample {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
        String xmlFile = "students.xml";\r
\r
        // Write to XML\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             WebRowSet wrs = RowSetProvider.newFactory().createWebRowSet()) {\r
\r
            wrs.setCommand("SELECT id, name, age, city FROM students");\r
            wrs.execute(conn);\r
\r
            try (FileWriter writer = new FileWriter(xmlFile)) {\r
                wrs.writeXml(writer);\r
                System.out.println("Data written to " + xmlFile);\r
            }\r
\r
        } catch (Exception e) {\r
            e.printStackTrace();\r
        }\r
\r
        // Read from XML\r
        try (WebRowSet wrs2 = RowSetProvider.newFactory().createWebRowSet();\r
             FileReader reader = new FileReader(xmlFile)) {\r
\r
            wrs2.readXml(reader);\r
            while (wrs2.next()) {\r
                System.out.printf("%d: %s%n", wrs2.getInt("id"), wrs2.getString("name"));\r
            }\r
\r
        } catch (Exception e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,o=`import javax.sql.rowset.JoinRowSet;\r
import javax.sql.rowset.CachedRowSet;\r
import javax.sql.rowset.RowSetProvider;\r
import java.sql.Connection;\r
import java.sql.DriverManager;\r
import java.sql.SQLException;\r
\r
public class RowSetJoinExample {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             CachedRowSet studentsRs = RowSetProvider.newFactory().createCachedRowSet();\r
             CachedRowSet coursesRs = RowSetProvider.newFactory().createCachedRowSet();\r
             JoinRowSet joinRs = RowSetProvider.newFactory().createJoinRowSet()) {\r
\r
            // Fetch students\r
            studentsRs.setCommand("SELECT id, name FROM students");\r
            studentsRs.execute(conn);\r
            studentsRs.setMatchColumn("id"); // column to join on\r
\r
            // Fetch courses (assuming a courses table with student_id)\r
            coursesRs.setCommand("SELECT student_id, course_name FROM courses");\r
            coursesRs.execute(conn);\r
            coursesRs.setMatchColumn("student_id");\r
\r
            // Add both to JoinRowSet\r
            joinRs.addRowSet(studentsRs);\r
            joinRs.addRowSet(coursesRs);\r
\r
            // Now joinRs contains the joined data\r
            while (joinRs.next()) {\r
                System.out.printf("Student: %s, Course: %s%n",\r
                        joinRs.getString("name"),\r
                        joinRs.getString("course_name"));\r
            }\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,w=()=>{const a=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark:bg-gray-900 dark:text-gray-200 min-h-screen py-8 px-4 transition-colors duration-300",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-4xl mx-auto space-y-12",children:[e.jsxs("section",{className:"animate-[fadeSlideUp_0.6s_ease-out]","aria-label":"Introduction to RowSet",children:[e.jsx("h1",{className:"text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4",children:"📋 RowSet and Its Types"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:[e.jsx("code",{children:"RowSet"})," is an extension of the ",e.jsx("code",{children:"ResultSet"})," interface that provides additional flexibility and features. It is part of the ",e.jsx("code",{children:"javax.sql.rowset"})," package and offers both connected and disconnected ways to work with tabular data. RowSets are easier to use, scrollable, updatable, and even serializable – making them ideal for JavaBeans and web applications."]}),e.jsxs("p",{className:"mt-2 text-md",children:[e.jsx("span",{className:"font-semibold",children:"Debangshu"})," from Naihati is building a desktop application that needs to work offline. He can use ",e.jsx("code",{children:"CachedRowSet"})," to fetch data, close the connection, and still manipulate the data locally. Later, he can reconnect and sync changes."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.7s_ease-out] space-y-4","aria-label":"RowSet hierarchy",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🧬 RowSet Hierarchy"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-inner flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 600 200",className:"w-full max-w-2xl",stroke:"currentColor",fill:"none",strokeWidth:"2",children:[e.jsx("rect",{x:"250",y:"20",width:"100",height:"40",rx:"8",className:"stroke-indigo-500 fill-indigo-50 dark:fill-indigo-900/20"}),e.jsx("text",{x:"270",y:"45",className:"text-xs fill-gray-800 dark:fill-gray-200",stroke:"none",children:"«interface»"}),e.jsx("text",{x:"270",y:"55",className:"text-xs fill-gray-800 dark:fill-gray-200",stroke:"none",children:"RowSet"}),e.jsx("rect",{x:"30",y:"100",width:"100",height:"40",rx:"8",className:"stroke-emerald-500 fill-emerald-50 dark:fill-emerald-900/20"}),e.jsx("text",{x:"50",y:"125",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"JdbcRowSet"}),e.jsx("rect",{x:"150",y:"100",width:"100",height:"40",rx:"8",className:"stroke-emerald-500 fill-emerald-50 dark:fill-emerald-900/20"}),e.jsx("text",{x:"170",y:"125",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"CachedRowSet"}),e.jsx("rect",{x:"270",y:"100",width:"100",height:"40",rx:"8",className:"stroke-emerald-500 fill-emerald-50 dark:fill-emerald-900/20"}),e.jsx("text",{x:"290",y:"125",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"WebRowSet"}),e.jsx("rect",{x:"390",y:"100",width:"100",height:"40",rx:"8",className:"stroke-emerald-500 fill-emerald-50 dark:fill-emerald-900/20"}),e.jsx("text",{x:"410",y:"125",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"FilteredRowSet"}),e.jsx("rect",{x:"510",y:"100",width:"100",height:"40",rx:"8",className:"stroke-emerald-500 fill-emerald-50 dark:fill-emerald-900/20"}),e.jsx("text",{x:"530",y:"125",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"JoinRowSet"}),e.jsx("line",{x1:"300",y1:"60",x2:"200",y2:"100",className:"stroke-gray-400 dark:stroke-gray-500"}),e.jsx("line",{x1:"300",y1:"60",x2:"300",y2:"100",className:"stroke-gray-400 dark:stroke-gray-500"}),e.jsx("line",{x1:"300",y1:"60",x2:"400",y2:"100",className:"stroke-gray-400 dark:stroke-gray-500"})]})}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 text-center",children:["All RowSet types extend the ",e.jsx("code",{children:"RowSet"})," interface, which itself extends ",e.jsx("code",{children:"ResultSet"}),"."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.8s_ease-out] space-y-4","aria-label":"Types of RowSet",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"📦 RowSet Variants"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:t("bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700"),children:[e.jsx("h3",{className:"text-xl font-bold text-indigo-600 dark:text-indigo-400",children:"JdbcRowSet"}),e.jsxs("p",{className:"text-sm mt-1",children:["A connected RowSet that wraps a ",e.jsx("code",{children:"ResultSet"}),". It maintains a connection to the database and provides scrollable/updatable capabilities even if the underlying ResultSet doesn't."]}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Use when you need a scrollable/updatable ResultSet."})]}),e.jsxs("div",{className:t("bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700"),children:[e.jsx("h3",{className:"text-xl font-bold text-emerald-600 dark:text-emerald-400",children:"CachedRowSet"}),e.jsx("p",{className:"text-sm mt-1",children:"A disconnected RowSet that caches data in memory. It can operate without a database connection, and changes can be synchronized back later. It is scrollable, updatable, and serializable."}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Ideal for offline or desktop applications."})]}),e.jsxs("div",{className:t("bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700"),children:[e.jsx("h3",{className:"text-xl font-bold text-sky-600 dark:text-sky-400",children:"WebRowSet"}),e.jsxs("p",{className:"text-sm mt-1",children:["Extends ",e.jsx("code",{children:"CachedRowSet"})," and adds the ability to read/write itself in XML format. This makes it easy to exchange data between different tiers or applications."]}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Great for web services and data exchange."})]}),e.jsxs("div",{className:t("bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700"),children:[e.jsx("h3",{className:"text-xl font-bold text-amber-600 dark:text-amber-400",children:"FilteredRowSet"}),e.jsxs("p",{className:"text-sm mt-1",children:["Allows filtering of rows based on a ",e.jsx("code",{children:"Predicate"})," without re-querying the database. Only rows that satisfy the filter are visible."]}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Useful for client-side filtering."})]}),e.jsxs("div",{className:t("bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700 md:col-span-2"),children:[e.jsx("h3",{className:"text-xl font-bold text-purple-600 dark:text-purple-400",children:"JoinRowSet"}),e.jsx("p",{className:"text-sm mt-1",children:`Allows you to combine data from multiple RowSets (which may come from different databases) into one virtual "joined" RowSet. It's like an in‑memory SQL join.`}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Powerful for combining data from multiple sources."})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.9s_ease-out] space-y-4","aria-label":"Connected vs Disconnected",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🔌 Connected vs Disconnected"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("p",{className:"font-bold text-center",children:"JdbcRowSet (Connected)"}),e.jsxs("svg",{viewBox:"0 0 200 100",className:"w-full",children:[e.jsx("rect",{x:"10",y:"20",width:"60",height:"40",rx:"4",fill:"#e0f2fe",stroke:"#0284c7"}),e.jsx("text",{x:"25",y:"45",fontSize:"8",fill:"#0284c7",children:"App"}),e.jsx("line",{x1:"70",y1:"40",x2:"120",y2:"40",stroke:"#0284c7",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("rect",{x:"130",y:"20",width:"60",height:"40",rx:"4",fill:"#bbf7d0",stroke:"#16a34a"}),e.jsx("text",{x:"145",y:"45",fontSize:"8",fill:"#16a34a",children:"DB"})]}),e.jsx("p",{className:"text-xs text-center mt-1",children:"Always connected, holds resources"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg",children:[e.jsx("p",{className:"font-bold text-center",children:"CachedRowSet (Disconnected)"}),e.jsxs("svg",{viewBox:"0 0 200 120",className:"w-full",children:[e.jsx("rect",{x:"10",y:"10",width:"60",height:"40",rx:"4",fill:"#e0f2fe",stroke:"#0284c7"}),e.jsx("text",{x:"25",y:"35",fontSize:"8",fill:"#0284c7",children:"App"}),e.jsx("line",{x1:"70",y1:"30",x2:"120",y2:"30",stroke:"#0284c7",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("rect",{x:"130",y:"10",width:"60",height:"40",rx:"4",fill:"#bbf7d0",stroke:"#16a34a"}),e.jsx("text",{x:"145",y:"35",fontSize:"8",fill:"#16a34a",children:"DB"}),e.jsx("text",{x:"30",y:"70",fontSize:"8",fill:"#64748b",children:"Fetch data, then close"}),e.jsx("rect",{x:"10",y:"80",width:"60",height:"40",rx:"4",fill:"#e0f2fe",stroke:"#0284c7"}),e.jsx("text",{x:"25",y:"105",fontSize:"8",fill:"#0284c7",children:"App"}),e.jsx("rect",{x:"80",y:"80",width:"100",height:"40",rx:"4",fill:"#fed7aa",stroke:"#c2410c"}),e.jsx("text",{x:"110",y:"105",fontSize:"8",fill:"#c2410c",children:"Cached Data"})]}),e.jsx("p",{className:"text-xs text-center mt-1",children:"Disconnected, works offline"})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.0s_ease-out] space-y-6","aria-label":"Code examples for RowSet",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🔹 Using JdbcRowSet (Connected)"}),e.jsx(r,{fileModule:s,title:"JdbcRowSetExample.java",highlightLines:[5,6,7,8,9,10,11,12,13,14]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Using CachedRowSet (Disconnected)"}),e.jsx(r,{fileModule:n,title:"CachedRowSetExample.java",highlightLines:[6,7,8,9,10,11,12,13,14,15,16,17,18,19]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Using WebRowSet (XML)"}),e.jsx(r,{fileModule:i,title:"WebRowSetExample.java",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Using JoinRowSet (Combining Data)"}),e.jsx(r,{fileModule:o,title:"RowSetJoinExample.java",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16,17]})]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border-l-4 border-indigo-400",children:e.jsxs("p",{className:"text-sm font-medium text-indigo-800 dark:text-indigo-200",children:["💡 ",e.jsx("strong",{children:"Observe carefully:"})," In the ",e.jsx("code",{children:"CachedRowSet"})," example, we close the connection after fetching, but we can still read and modify the data. Only when we call ",e.jsx("code",{children:"acceptChanges()"})," do we need a new connection. How is this useful in a web application?"]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.1s_ease-out] space-y-3","aria-label":"Common mistakes",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-red-200 dark:border-red-800 pb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-red-700 dark:text-red-300",children:[e.jsxs("li",{children:["Using ",e.jsx("code",{children:"CachedRowSet"})," without a connection when trying to sync changes – need a live connection."]}),e.jsx("li",{children:"Forgetting to set username/password for disconnected RowSets – they need credentials to reconnect."}),e.jsxs("li",{children:["Modifying a ",e.jsx("code",{children:"CachedRowSet"})," and not calling ",e.jsx("code",{children:"acceptChanges()"})," – changes are lost."]}),e.jsx("li",{children:"Assuming all RowSet implementations are thread-safe – they are not; synchronize externally."}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"WebRowSet"})," without handling XML parsing exceptions."]}),e.jsxs("li",{children:["Creating too many ",e.jsx("code",{children:"CachedRowSet"})," objects for large datasets – memory issues."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.2s_ease-out] space-y-3","aria-label":"Best practices",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-green-200 dark:border-green-800 pb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-green-800 dark:text-green-200",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"CachedRowSet"})," for data that needs to be displayed offline or passed between layers."]}),e.jsxs("li",{children:["Always close the connection after populating a ",e.jsx("code",{children:"CachedRowSet"})," to free resources."]}),e.jsx("li",{children:"Set the username, password, and URL before populating a disconnected RowSet."}),e.jsxs("li",{children:["For ",e.jsx("code",{children:"WebRowSet"}),", use the XML write/read for data exchange between heterogeneous systems."]}),e.jsxs("li",{children:["When using ",e.jsx("code",{children:"FilteredRowSet"}),", implement the ",e.jsx("code",{children:"Predicate"})," interface carefully."]}),e.jsxs("li",{children:["Prefer ",e.jsx("code",{children:"JoinRowSet"})," over manual in‑memory joins for cleaner code."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.3s_ease-out] space-y-3","aria-label":"Professional tips",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-amber-200 dark:border-amber-800 pb-2",children:"🧠 Tips & Tricks"}),e.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Serialization:"})," ",e.jsx("code",{children:"CachedRowSet"})," is serializable – you can save it to disk or send over network."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Batch updates:"})," ",e.jsx("code",{children:"CachedRowSet"})," can accumulate changes and apply them in a batch when ",e.jsx("code",{children:"acceptChanges()"})," is called."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Event handling:"})," RowSet supports listeners to track cursor movements and changes."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Metadata:"})," You can retrieve metadata from a RowSet even when disconnected."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Abhronila's trick:"})," Use ",e.jsx("code",{children:"CachedRowSet"})," as a data source for JasperReports or other reporting tools – it's lightweight and portable."]})]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.4s_ease-out] space-y-3","aria-label":"Teacher's note",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"👩‍🏫 Teacher's Note"}),e.jsxs("div",{className:t("bg-indigo-100 dark:bg-indigo-900/40 p-5 rounded-xl","transition-all duration-300 hover:shadow-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/60"),children:[e.jsx("p",{className:"font-bold text-indigo-900 dark:text-indigo-100",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-indigo-800 dark:text-indigo-200",children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsxs("p",{className:"text-sm mt-1",children:["💼 ",a," years of experience in Programming, RDBMS, OS, Web Development."]}),e.jsxs("p",{className:"mt-3",children:[e.jsx("span",{className:"font-semibold",children:"Point to remember:"})," RowSet bridges the gap between ResultSet and full‑blown ORM frameworks. It's a powerful tool that many students overlook. Emphasize that",e.jsx("code",{children:"CachedRowSet"})," is especially useful in desktop and web applications where you don't want to keep database connections open.",e.jsx("br",{}),e.jsx("span",{className:"italic",children:'"Swadeep, think of CachedRowSet as taking a photo of your data – you can look at it anywhere, but to update the original, you need to go back to the studio (database)."'})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.5s_ease-out] space-y-3","aria-label":"Quick checklist",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-2",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:"✔️ I understand the difference between RowSet and ResultSet."}),e.jsx("li",{children:"✔️ I know the five types of RowSet and their use cases."}),e.jsx("li",{children:"✔️ I can use JdbcRowSet to get a scrollable/updatable ResultSet."}),e.jsx("li",{children:"✔️ I can fetch data into a CachedRowSet and work offline."}),e.jsx("li",{children:"✔️ I can write/read a WebRowSet to/from XML."}),e.jsx("li",{children:"✔️ I am aware of common pitfalls and best practices."})]})})]})]})]})};export{w as default};
