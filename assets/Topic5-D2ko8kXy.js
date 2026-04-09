import{j as e}from"./index-DLefW0Tp.js";import{c as s}from"./clsx-B-dksMZM.js";import{J as t}from"./JavaFileLoader-Bddd4QbW.js";import"./JavaCodeBlock-CGUYzLjP.js";import"./prism-CzJDobEc.js";import"./browser-COpx1UKX.js";import"./prism-java-BwO6k4I_.js";const a=`import java.sql.*;\r
\r
public class ResultSetDemo {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String query = "SELECT id, name, age, city FROM students";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             Statement stmt = conn.createStatement();\r
             ResultSet rs = stmt.executeQuery(query)) {\r
\r
            System.out.println("Student Records:");\r
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
}`,n=`import java.sql.*;\r
\r
public class ResultSetMetaDataDemo {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String query = "SELECT * FROM students";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             Statement stmt = conn.createStatement();\r
             ResultSet rs = stmt.executeQuery(query)) {\r
\r
            ResultSetMetaData rsmd = rs.getMetaData();\r
            int columnCount = rsmd.getColumnCount();\r
\r
            System.out.println("Column details:");\r
            for (int i = 1; i <= columnCount; i++) {\r
                System.out.printf("Column %d: %s (%s)%n",\r
                        i,\r
                        rsmd.getColumnName(i),\r
                        rsmd.getColumnTypeName(i));\r
            }\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,i=`import java.sql.*;\r
\r
public class DatabaseMetaDataDemo {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password)) {\r
            DatabaseMetaData dbmd = conn.getMetaData();\r
\r
            System.out.println("Database: " + dbmd.getDatabaseProductName());\r
            System.out.println("Version: " + dbmd.getDatabaseProductVersion());\r
            System.out.println("Driver: " + dbmd.getDriverName());\r
\r
            // Get list of tables\r
            ResultSet tables = dbmd.getTables(null, null, "%", new String[]{"TABLE"});\r
            System.out.println("\\nTables in database:");\r
            while (tables.next()) {\r
                System.out.println("  " + tables.getString("TABLE_NAME"));\r
            }\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,l=`import java.sql.*;\r
\r
public class ScrollableResultSetDemo {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String query = "SELECT id, name, age, city FROM students";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             // Create a scrollable, read-only ResultSet\r
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
            // Move to second last row\r
            rs.absolute(rowCount - 1);\r
            System.out.println("Second last row: " + rs.getString("name"));\r
\r
            // Move back\r
            rs.previous();\r
            System.out.println("Previous (last) row: " + rs.getString("name"));\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,j=()=>{const r=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark:bg-gray-900 dark:text-gray-200 min-h-screen py-8 px-4 transition-colors duration-300",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-4xl mx-auto space-y-12",children:[e.jsxs("section",{className:"animate-[fadeSlideUp_0.6s_ease-out]","aria-label":"Introduction to ResultSet and Metadata",children:[e.jsx("h1",{className:"text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4",children:"📊 ResultSet and Metadata"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["When you execute a ",e.jsx("code",{children:"SELECT"})," query using ",e.jsx("code",{children:"Statement"})," or ",e.jsx("code",{children:"PreparedStatement"}),", the database returns the results in a ",e.jsx("code",{children:"ResultSet"})," object. The ",e.jsx("code",{children:"ResultSet"})," acts like a cursor pointing to the current row of data. Additionally, JDBC provides metadata classes to get information about the result set itself (",e.jsx("code",{children:"ResultSetMetaData"}),") and the database (",e.jsx("code",{children:"DatabaseMetaData"}),")."]}),e.jsxs("p",{className:"mt-2 text-md",children:[e.jsx("span",{className:"font-semibold",children:"Abhronila"})," from Ichapur is building a report generator. She needs to dynamically discover column names and types without knowing them in advance – that's where metadata shines."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.7s_ease-out] space-y-4","aria-label":"ResultSet navigation",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🔍 Navigating a ResultSet"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-inner flex justify-center hover:shadow-lg transition-shadow",children:e.jsxs("svg",{viewBox:"0 0 600 200",className:"w-full max-w-2xl",stroke:"currentColor",fill:"none",strokeWidth:"2",children:[e.jsx("rect",{x:"50",y:"20",width:"500",height:"120",rx:"8",className:"stroke-indigo-300 dark:stroke-indigo-700 fill-indigo-50 dark:fill-indigo-900/20"}),e.jsx("line",{x1:"50",y1:"50",x2:"550",y2:"50",className:"stroke-gray-300 dark:stroke-gray-600"}),e.jsx("line",{x1:"50",y1:"80",x2:"550",y2:"80",className:"stroke-gray-300 dark:stroke-gray-600"}),e.jsx("line",{x1:"50",y1:"110",x2:"550",y2:"110",className:"stroke-gray-300 dark:stroke-gray-600"}),e.jsx("line",{x1:"150",y1:"20",x2:"150",y2:"140",className:"stroke-gray-300 dark:stroke-gray-600"}),e.jsx("line",{x1:"300",y1:"20",x2:"300",y2:"140",className:"stroke-gray-300 dark:stroke-gray-600"}),e.jsx("line",{x1:"450",y1:"20",x2:"450",y2:"140",className:"stroke-gray-300 dark:stroke-gray-600"}),e.jsx("text",{x:"80",y:"40",className:"text-xs fill-gray-700 dark:fill-gray-300",stroke:"none",children:"ID"}),e.jsx("text",{x:"200",y:"40",className:"text-xs fill-gray-700 dark:fill-gray-300",stroke:"none",children:"Name"}),e.jsx("text",{x:"360",y:"40",className:"text-xs fill-gray-700 dark:fill-gray-300",stroke:"none",children:"Age"}),e.jsx("text",{x:"500",y:"40",className:"text-xs fill-gray-700 dark:fill-gray-300",stroke:"none",children:"City"}),e.jsx("text",{x:"80",y:"70",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"1"}),e.jsx("text",{x:"200",y:"70",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"Swadeep"}),e.jsx("text",{x:"360",y:"70",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"20"}),e.jsx("text",{x:"500",y:"70",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"Barrackpore"}),e.jsx("text",{x:"80",y:"100",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"2"}),e.jsx("text",{x:"200",y:"100",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"Tuhina"}),e.jsx("text",{x:"360",y:"100",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"19"}),e.jsx("text",{x:"500",y:"100",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"Shyamnagar"}),e.jsx("text",{x:"80",y:"130",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"3"}),e.jsx("text",{x:"200",y:"130",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"Abhronila"}),e.jsx("text",{x:"360",y:"130",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"21"}),e.jsx("text",{x:"500",y:"130",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"Ichapur"}),e.jsxs("path",{d:"M20 80 L40 70 L40 90 Z",fill:"green",className:"dark:fill-green-400",children:[e.jsx("animate",{attributeName:"opacity",values:"1;0.5;1",dur:"1.5s",repeatCount:"indefinite"}),e.jsx("animateMotion",{path:"M0 0 L480 0",dur:"4s",repeatCount:"indefinite"})]}),e.jsx("text",{x:"10",y:"60",className:"text-[8px] fill-green-600 dark:fill-green-400",stroke:"none",children:"cursor"})]})}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 text-center",children:["The cursor initially points before the first row. ",e.jsx("code",{children:"next()"})," moves it forward and returns true if a row exists. You can then retrieve column values by index or name."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.8s_ease-out] space-y-4","aria-label":"ResultSet methods",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🧰 Important ResultSet Methods"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition",children:[e.jsx("h3",{className:"font-bold text-lg",children:"Navigation"}),e.jsxs("ul",{className:"list-disc list-inside text-sm space-y-1 mt-2",children:[e.jsxs("li",{children:[e.jsx("code",{children:"boolean next()"})," – moves to next row"]}),e.jsxs("li",{children:[e.jsx("code",{children:"boolean previous()"})," – moves to previous row"]}),e.jsxs("li",{children:[e.jsx("code",{children:"boolean first()"})," – moves to first row"]}),e.jsxs("li",{children:[e.jsx("code",{children:"boolean last()"})," – moves to last row"]}),e.jsxs("li",{children:[e.jsx("code",{children:"boolean absolute(int row)"})," – moves to specific row"]}),e.jsxs("li",{children:[e.jsx("code",{children:"boolean relative(int rows)"})," – moves forward/backward"]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition",children:[e.jsx("h3",{className:"font-bold text-lg",children:"Data Retrieval"}),e.jsxs("ul",{className:"list-disc list-inside text-sm space-y-1 mt-2",children:[e.jsx("li",{children:e.jsx("code",{children:"getString(int columnIndex)"})}),e.jsx("li",{children:e.jsx("code",{children:"getInt(String columnLabel)"})}),e.jsx("li",{children:e.jsx("code",{children:"getDouble(int columnIndex)"})}),e.jsx("li",{children:e.jsx("code",{children:"getDate(String columnLabel)"})}),e.jsx("li",{children:e.jsx("code",{children:"getObject(int columnIndex)"})}),e.jsx("li",{children:"… and many more type-specific getters"})]})]})]}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Note: Column indexes start at 1 (not 0). Use column labels for better readability."})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.9s_ease-out] space-y-4","aria-label":"Metadata types",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"📋 Metadata"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:s("bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700"),children:[e.jsxs("div",{className:"flex items-center space-x-3 mb-3",children:[e.jsx("svg",{className:"w-10 h-10 text-indigo-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 7h16M4 12h16M4 17h16"})}),e.jsx("h3",{className:"text-xl font-bold",children:"ResultSetMetaData"})]}),e.jsx("p",{children:"Information about the columns in a ResultSet: number of columns, column names, data types, etc."}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-2 space-y-1",children:[e.jsx("li",{children:e.jsx("code",{children:"getColumnCount()"})}),e.jsx("li",{children:e.jsx("code",{children:"getColumnName(int)"})}),e.jsx("li",{children:e.jsx("code",{children:"getColumnType(int)"})}),e.jsx("li",{children:e.jsx("code",{children:"getColumnTypeName(int)"})}),e.jsx("li",{children:e.jsx("code",{children:"isNullable(int)"})})]})]}),e.jsxs("div",{className:s("bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700"),children:[e.jsxs("div",{className:"flex items-center space-x-3 mb-3",children:[e.jsx("svg",{className:"w-10 h-10 text-emerald-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"})}),e.jsx("h3",{className:"text-xl font-bold",children:"DatabaseMetaData"})]}),e.jsx("p",{children:"Information about the database itself: tables, views, procedures, supported features, etc."}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-2 space-y-1",children:[e.jsx("li",{children:e.jsx("code",{children:"getTables()"})}),e.jsx("li",{children:e.jsx("code",{children:"getColumns()"})}),e.jsx("li",{children:e.jsx("code",{children:"getPrimaryKeys()"})}),e.jsx("li",{children:e.jsx("code",{children:"getDatabaseProductName()"})}),e.jsx("li",{children:e.jsx("code",{children:"supportsTransactions()"})})]})]})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Metadata allows you to write generic database tools that work with any schema."})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.0s_ease-out] space-y-6","aria-label":"Code examples for ResultSet and Metadata",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🔹 Basic ResultSet Navigation"}),e.jsx(t,{fileModule:a,title:"ResultSetDemo.java",highlightLines:[10,11,12,13,14,15]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Using ResultSetMetaData"}),e.jsx(t,{fileModule:n,title:"ResultSetMetaDataDemo.java",highlightLines:[8,9,10,11,12,13,14]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 DatabaseMetaData in Action"}),e.jsx(t,{fileModule:i,title:"DatabaseMetaDataDemo.java",highlightLines:[7,8,9,10,11,12,13,14,15]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Scrollable ResultSet (Preview)"}),e.jsx(t,{fileModule:l,title:"ScrollableResultSetDemo.java",highlightLines:[8,9,10,11,12,15,16,17]})]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border-l-4 border-indigo-400",children:e.jsxs("p",{className:"text-sm font-medium text-indigo-800 dark:text-indigo-200",children:["💡 ",e.jsx("strong",{children:"Observe carefully:"})," In the scrollable example, we create the Statement with",e.jsx("code",{children:"ResultSet.TYPE_SCROLL_INSENSITIVE"})," and ",e.jsx("code",{children:"ResultSet.CONCUR_READ_ONLY"}),". What happens if you change the type to ",e.jsx("code",{children:"TYPE_FORWARD_ONLY"}),"?"]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.1s_ease-out] space-y-3","aria-label":"Common mistakes",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-red-200 dark:border-red-800 pb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-red-700 dark:text-red-300",children:[e.jsxs("li",{children:["Forgetting to call ",e.jsx("code",{children:"next()"})," before accessing data – results in ",e.jsx("code",{children:"SQLException"}),"."]}),e.jsx("li",{children:"Using column index 0 (JDBC columns start at 1)."}),e.jsx("li",{children:"Assuming all ResultSets are scrollable – default is forward-only."}),e.jsx("li",{children:"Not closing ResultSet, Statement, Connection – leads to resource leaks."}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"getString()"})," for all columns, even numeric ones – can cause subtle bugs."]}),e.jsxs("li",{children:["Ignoring ",e.jsx("code",{children:"SQLException"})," when retrieving metadata – e.g., database may not support certain features."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.2s_ease-out] space-y-3","aria-label":"Best practices",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-green-200 dark:border-green-800 pb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-green-800 dark:text-green-200",children:[e.jsx("li",{children:"Always use column labels (names) instead of indices for readability."}),e.jsxs("li",{children:["Check for null using ",e.jsx("code",{children:"rs.wasNull()"})," after reading a value."]}),e.jsx("li",{children:"Use try-with-resources to auto-close ResultSet, Statement, and Connection."}),e.jsx("li",{children:"When dealing with large datasets, consider streaming or pagination."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"ResultSetMetaData"})," to build dynamic reports or tools."]}),e.jsx("li",{children:"For database metadata, cache results if they don't change often."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.3s_ease-out] space-y-3","aria-label":"Professional tips",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-amber-200 dark:border-amber-800 pb-2",children:"🧠 Tips & Tricks"}),e.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Generic printer:"})," Write a method that prints any ResultSet by using metadata to iterate columns."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Check column type:"})," Use ",e.jsx("code",{children:"getColumnType()"})," to decide which getter to call (e.g., getInt vs getString)."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"DatabaseMetaData trick:"})," Use ",e.jsx("code",{children:"getTables()"})," to get a list of all tables in the database – useful for schema explorers."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Performance:"})," Fetch size – ",e.jsx("code",{children:"stmt.setFetchSize(50)"})," can optimize network round trips."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Tuhina's tip:"})," When debugging, print the row number and column count to verify cursor position."]})]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.4s_ease-out] space-y-3","aria-label":"Teacher's note",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"👩‍🏫 Teacher's Note"}),e.jsxs("div",{className:s("bg-indigo-100 dark:bg-indigo-900/40 p-5 rounded-xl","transition-all duration-300 hover:shadow-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/60"),children:[e.jsx("p",{className:"font-bold text-indigo-900 dark:text-indigo-100",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-indigo-800 dark:text-indigo-200",children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsxs("p",{className:"text-sm mt-1",children:["💼 ",r," years of experience in Programming, RDBMS, OS, Web Development."]}),e.jsxs("p",{className:"mt-3",children:[e.jsx("span",{className:"font-semibold",children:"Point to remember:"})," Students often treat ResultSet like a collection, but it's a cursor. Emphasize that it maintains a connection to the database and must be closed.",e.jsx("br",{}),e.jsx("span",{className:"italic",children:'"Debangshu, think of ResultSet as a pointer moving through rows – you must keep calling next() until it returns false."'})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.5s_ease-out] space-y-3","aria-label":"Quick checklist",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-2",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["✔️ I know how to navigate a ResultSet using ",e.jsx("code",{children:"next()"})," and other methods."]}),e.jsx("li",{children:"✔️ I can retrieve column values by index and by name."}),e.jsx("li",{children:"✔️ I understand how to get metadata from a ResultSet."}),e.jsx("li",{children:"✔️ I can use DatabaseMetaData to discover database structure."}),e.jsx("li",{children:"✔️ I know the difference between forward-only and scrollable ResultSets."}),e.jsx("li",{children:"✔️ I always close ResultSet, Statement, and Connection."})]})})]})]})]})};export{j as default};
