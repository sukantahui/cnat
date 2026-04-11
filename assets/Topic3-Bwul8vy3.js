import{j as e}from"./index-BxcHuftT.js";import{c as r}from"./clsx-B-dksMZM.js";import{J as t}from"./JavaFileLoader-XgzUy0BZ.js";import"./JavaCodeBlock-D_0g-gUT.js";import"./prism-DDSRbUDI.js";import"./browser-DULzV_BU.js";import"./prism-java-BwO6k4I_.js";const a=`import java.sql.Connection;\r
import java.sql.DriverManager;\r
import java.sql.SQLException;\r
import java.sql.Statement;\r
\r
public class CreateTable {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String createTableSQL = "CREATE TABLE IF NOT EXISTS students (" +\r
                "id INT AUTO_INCREMENT PRIMARY KEY, " +\r
                "name VARCHAR(100) NOT NULL, " +\r
                "age INT, " +\r
                "city VARCHAR(50))";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             Statement stmt = conn.createStatement()) {\r
\r
            // executeUpdate() used for DDL (CREATE, ALTER, DROP) as well\r
            int result = stmt.executeUpdate(createTableSQL);\r
            System.out.println("Table 'students' created successfully. Result: " + result);\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,n=`import java.sql.Connection;\r
import java.sql.DriverManager;\r
import java.sql.SQLException;\r
import java.sql.Statement;\r
\r
public class InsertRecord {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String insertSQL = "INSERT INTO students (name, age, city) VALUES " +\r
                "('Swadeep', 20, 'Barrackpore'), " +\r
                "('Tuhina', 19, 'Shyamnagar'), " +\r
                "('Abhronila', 21, 'Ichapur')";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             Statement stmt = conn.createStatement()) {\r
\r
            int rowsAffected = stmt.executeUpdate(insertSQL);\r
            System.out.println(rowsAffected + " row(s) inserted.");\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}\r
`,i=`import java.sql.*;\r
\r
public class SelectRecords {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String selectSQL = "SELECT id, name, age, city FROM students";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             Statement stmt = conn.createStatement();\r
             ResultSet rs = stmt.executeQuery(selectSQL)) {\r
\r
            while (rs.next()) {\r
                int id = rs.getInt("id");\r
                String name = rs.getString("name");\r
                int age = rs.getInt("age");\r
                String city = rs.getString("city");\r
                System.out.printf("ID: %d, Name: %s, Age: %d, City: %s%n", id, name, age, city);\r
            }\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,d=`import java.sql.Connection;\r
import java.sql.DriverManager;\r
import java.sql.SQLException;\r
import java.sql.Statement;\r
\r
public class UpdateDeleteExample {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String updateSQL = "UPDATE students SET age = 22 WHERE name = 'Swadeep'";\r
        String deleteSQL = "DELETE FROM students WHERE name = 'Abhronila'";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             Statement stmt = conn.createStatement()) {\r
\r
            // Update\r
            int updatedRows = stmt.executeUpdate(updateSQL);\r
            System.out.println(updatedRows + " row(s) updated.");\r
\r
            // Delete\r
            int deletedRows = stmt.executeUpdate(deleteSQL);\r
            System.out.println(deletedRows + " row(s) deleted.");\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,p=()=>{const s=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark:bg-gray-900 dark:text-gray-200 min-h-screen py-8 px-4 transition-colors duration-300",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-4xl mx-auto space-y-12",children:[e.jsxs("section",{className:"animate-[fadeSlideUp_0.6s_ease-out]","aria-label":"Introduction to Executing SQL Queries",children:[e.jsx("h1",{className:"text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4",children:"📝 Executing SQL Queries (CRUD)"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["Once a connection is established, you can execute SQL statements using",e.jsx("code",{className:"mx-1",children:"Statement"}),", ",e.jsx("code",{children:"PreparedStatement"})," (next topic), or",e.jsx("code",{children:"CallableStatement"}),". This topic focuses on the basic CRUD operations",e.jsx("strong",{className:"text-indigo-600 dark:text-indigo-400",children:" Create, Read, Update, Delete"})," using",e.jsx("code",{children:"Statement"}),"."]}),e.jsxs("p",{className:"mt-2 text-md",children:[e.jsx("span",{className:"font-semibold",children:"Tuhina"})," from Shyamnagar wants to build a student management system. She needs to add new students (INSERT), view them (SELECT), update details (UPDATE), and remove old records (DELETE). These four operations are the foundation of any database application."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.7s_ease-out] space-y-4","aria-label":"CRUD operations explained",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🔄 CRUD Operations"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:r("bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700 text-center"),children:[e.jsx("div",{className:"text-4xl mb-2 text-green-600 dark:text-green-400",children:"➕"}),e.jsx("h3",{className:"text-xl font-bold",children:"CREATE"}),e.jsx("p",{className:"text-sm mt-1",children:"INSERT new records"}),e.jsx("code",{className:"text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-2 inline-block",children:"INSERT INTO table ..."})]}),e.jsxs("div",{className:r("bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700 text-center"),children:[e.jsx("div",{className:"text-4xl mb-2 text-blue-600 dark:text-blue-400",children:"🔍"}),e.jsx("h3",{className:"text-xl font-bold",children:"READ"}),e.jsx("p",{className:"text-sm mt-1",children:"Retrieve records"}),e.jsx("code",{className:"text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-2 inline-block",children:"SELECT ... FROM ..."})]}),e.jsxs("div",{className:r("bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700 text-center"),children:[e.jsx("div",{className:"text-4xl mb-2 text-amber-600 dark:text-amber-400",children:"✏️"}),e.jsx("h3",{className:"text-xl font-bold",children:"UPDATE"}),e.jsx("p",{className:"text-sm mt-1",children:"Modify existing records"}),e.jsx("code",{className:"text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-2 inline-block",children:"UPDATE table SET ..."})]}),e.jsxs("div",{className:r("bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700 text-center"),children:[e.jsx("div",{className:"text-4xl mb-2 text-red-600 dark:text-red-400",children:"❌"}),e.jsx("h3",{className:"text-xl font-bold",children:"DELETE"}),e.jsx("p",{className:"text-sm mt-1",children:"Remove records"}),e.jsx("code",{className:"text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-2 inline-block",children:"DELETE FROM table ..."})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.8s_ease-out] space-y-4","aria-label":"Steps to execute SQL using Statement",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"⚙️ How to Execute SQL with Statement"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-inner flex justify-center hover:shadow-lg transition-shadow duration-300",children:e.jsxs("svg",{viewBox:"0 0 600 200",className:"w-full max-w-2xl",stroke:"currentColor",fill:"none",strokeWidth:"2",children:[e.jsx("rect",{x:"20",y:"20",width:"120",height:"60",rx:"8",className:"stroke-indigo-500 dark:stroke-indigo-400"}),e.jsx("text",{x:"40",y:"55",className:"text-xs fill-gray-800 dark:fill-gray-200",stroke:"none",children:"Connection"}),e.jsx("rect",{x:"180",y:"20",width:"120",height:"60",rx:"8",className:"stroke-emerald-500 dark:stroke-emerald-400"}),e.jsx("text",{x:"210",y:"55",className:"text-xs fill-gray-800 dark:fill-gray-200",stroke:"none",children:"Statement"}),e.jsx("rect",{x:"340",y:"20",width:"120",height:"60",rx:"8",className:"stroke-sky-500 dark:stroke-sky-400"}),e.jsx("text",{x:"370",y:"55",className:"text-xs fill-gray-800 dark:fill-gray-200",stroke:"none",children:"executeQuery()"}),e.jsx("rect",{x:"500",y:"20",width:"80",height:"60",rx:"8",className:"stroke-purple-500 dark:stroke-purple-400"}),e.jsx("text",{x:"520",y:"55",className:"text-xs fill-gray-800 dark:fill-gray-200",stroke:"none",children:"ResultSet"}),e.jsx("line",{x1:"140",y1:"50",x2:"180",y2:"50",className:"stroke-gray-400 dark:stroke-gray-500",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("line",{x1:"300",y1:"50",x2:"340",y2:"50",className:"stroke-gray-400 dark:stroke-gray-500",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("line",{x1:"460",y1:"50",x2:"500",y2:"50",className:"stroke-gray-400 dark:stroke-gray-500",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"150",y:"15",className:"text-[8px] fill-gray-500",stroke:"none",children:"createStatement()"}),e.jsx("text",{x:"310",y:"15",className:"text-[8px] fill-gray-500",stroke:"none",children:"SQL"}),e.jsx("text",{x:"470",y:"15",className:"text-[8px] fill-gray-500",stroke:"none",children:"data"})]})}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 text-center",children:["From a ",e.jsx("code",{children:"Connection"}),", create a ",e.jsx("code",{children:"Statement"}),". Then call",e.jsx("code",{children:"executeQuery()"})," for SELECT or ",e.jsx("code",{children:"executeUpdate()"})," for INSERT/UPDATE/DELETE."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.9s_ease-out] space-y-6","aria-label":"Code examples for CRUD",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🔹 Creating a Table (DDL)"}),e.jsx(t,{fileModule:a,title:"CreateTable.java",highlightLines:[8,9,10]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Inserting a Record (INSERT)"}),e.jsx(t,{fileModule:n,title:"InsertRecord.java",highlightLines:[10,11,12]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Selecting Records (SELECT)"}),e.jsx(t,{fileModule:i,title:"SelectRecords.java",highlightLines:[9,12,13,14]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Updating and Deleting Records"}),e.jsx(t,{fileModule:d,title:"UpdateDeleteExample.java",highlightLines:[9,10,14,15]})]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border-l-4 border-indigo-400",children:e.jsxs("p",{className:"text-sm font-medium text-indigo-800 dark:text-indigo-200",children:["💡 ",e.jsx("strong",{children:"Observe carefully:"})," ",e.jsx("code",{children:"executeUpdate()"})," returns the number of affected rows. For SELECT, we use ",e.jsx("code",{children:"executeQuery()"})," which returns a ",e.jsx("code",{children:"ResultSet"}),". Why do you think there are two different methods?"]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.0s_ease-out] space-y-3","aria-label":"Common mistakes",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-red-200 dark:border-red-800 pb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-red-700 dark:text-red-300",children:[e.jsxs("li",{children:["Using ",e.jsx("code",{children:"executeQuery()"})," for INSERT/UPDATE/DELETE → throws ",e.jsx("code",{children:"SQLException"}),"."]}),e.jsxs("li",{children:["Not closing ",e.jsx("code",{children:"Statement"})," and ",e.jsx("code",{children:"ResultSet"})," objects → resource leaks."]}),e.jsxs("li",{children:["Forgetting to handle ",e.jsx("code",{children:"SQLException"})," – always use try-catch or declare throws."]}),e.jsx("li",{children:"SQL injection vulnerability when concatenating user input into query strings (use PreparedStatement instead)."}),e.jsx("li",{children:"Assuming the table already exists before running INSERT/SELECT."}),e.jsxs("li",{children:["Not moving the cursor with ",e.jsx("code",{children:"ResultSet.next()"})," before reading data."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.1s_ease-out] space-y-3","aria-label":"Best practices",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-green-200 dark:border-green-800 pb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-green-800 dark:text-green-200",children:[e.jsx("li",{children:"Always use try-with-resources to auto-close Statement and ResultSet."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"executeUpdate()"})," for INSERT, UPDATE, DELETE; ",e.jsx("code",{children:"executeQuery()"})," for SELECT."]}),e.jsxs("li",{children:["Validate user input and consider using ",e.jsx("code",{children:"PreparedStatement"})," (next topic) to prevent SQL injection."]}),e.jsx("li",{children:"Process ResultSet efficiently – avoid loading huge datasets into memory."}),e.jsx("li",{children:"Use meaningful names for SQL variables and constants."}),e.jsx("li",{children:"Log SQL queries during development for debugging."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.2s_ease-out] space-y-3","aria-label":"Professional tips",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-amber-200 dark:border-amber-800 pb-2",children:"🧠 Tips & Tricks"}),e.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Batch updates:"})," For multiple INSERT/UPDATE, use ",e.jsx("code",{children:"addBatch()"})," and ",e.jsx("code",{children:"executeBatch()"})," (Topic 8)."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Auto-generated keys:"})," After INSERT, retrieve generated keys using ",e.jsx("code",{children:"Statement.RETURN_GENERATED_KEYS"}),"."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Scrollable ResultSet:"})," You can create Statement that returns scrollable ResultSet (Topic 14)."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Query timeout:"})," Set ",e.jsx("code",{children:"stmt.setQueryTimeout(5)"})," to avoid long-running queries."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Debangshu's trick:"})," When debugging, print the SQL query before execution to catch syntax errors."]})]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.3s_ease-out] space-y-3","aria-label":"Teacher's note",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"👩‍🏫 Teacher's Note"}),e.jsxs("div",{className:r("bg-indigo-100 dark:bg-indigo-900/40 p-5 rounded-xl","transition-all duration-300 hover:shadow-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/60"),children:[e.jsx("p",{className:"font-bold text-indigo-900 dark:text-indigo-100",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-indigo-800 dark:text-indigo-200",children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsxs("p",{className:"text-sm mt-1",children:["💼 ",s," years of experience in Programming, RDBMS, OS, Web Development."]}),e.jsxs("p",{className:"mt-3",children:[e.jsx("span",{className:"font-semibold",children:"Point to remember:"})," Students often mix up ",e.jsx("code",{children:"executeQuery()"})," and",e.jsx("code",{children:"executeUpdate()"}),". Remind them: Query = SELECT (returns data), Update = INSERT/UPDATE/DELETE (returns count).",e.jsx("br",{}),e.jsx("span",{className:"italic",children:'"Abhronila, think of it like asking a question (query) vs. giving a command (update)."'})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.4s_ease-out] space-y-3","aria-label":"Quick checklist",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-2",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:"✔️ I can explain CRUD operations in SQL."}),e.jsxs("li",{children:["✔️ I know how to create a ",e.jsx("code",{children:"Statement"})," from a ",e.jsx("code",{children:"Connection"}),"."]}),e.jsx("li",{children:"✔️ I can write code to INSERT, SELECT, UPDATE, DELETE records."}),e.jsxs("li",{children:["✔️ I understand the difference between ",e.jsx("code",{children:"executeQuery()"})," and ",e.jsx("code",{children:"executeUpdate()"}),"."]}),e.jsxs("li",{children:["✔️ I know how to process a ",e.jsx("code",{children:"ResultSet"})," using ",e.jsx("code",{children:"next()"})," and getters."]}),e.jsx("li",{children:"✔️ I am aware of SQL injection risks and why we need PreparedStatement."})]})})]})]})]})};export{p as default};
