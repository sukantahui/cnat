import{j as e}from"./index-CiucDjKk.js";import{c as s}from"./clsx-B-dksMZM.js";import{J as t}from"./JavaFileLoader-Z1zK9vZ1.js";import"./JavaCodeBlock-DYcNfCfb.js";import"./prism-N1wpkgPW.js";import"./browser-B-_2VGEU.js";import"./prism-java-BwO6k4I_.js";const a=`import java.sql.*;\r
\r
public class CallableStatementIn {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        // Assume a stored procedure: get_students_by_city(IN city_name VARCHAR)\r
        String sql = "{call get_students_by_city(?)}";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             CallableStatement cstmt = conn.prepareCall(sql)) {\r
\r
            cstmt.setString(1, "Barrackpore");\r
            boolean hadResults = cstmt.execute();\r
\r
            if (hadResults) {\r
                try (ResultSet rs = cstmt.getResultSet()) {\r
                    while (rs.next()) {\r
                        System.out.println(rs.getString("name"));\r
                    }\r
                }\r
            }\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,n=`import java.sql.*;\r
\r
public class CallableStatementOut {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        // Stored procedure: get_student_count_by_city(IN city_name VARCHAR, OUT count INT)\r
        String sql = "{call get_student_count_by_city(?, ?)}";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             CallableStatement cstmt = conn.prepareCall(sql)) {\r
\r
            cstmt.setString(1, "Shyamnagar");\r
            cstmt.registerOutParameter(2, Types.INTEGER);\r
\r
            cstmt.execute();\r
\r
            int count = cstmt.getInt(2);\r
            System.out.println("Number of students in Shyamnagar: " + count);\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,l=`import java.sql.*;\r
\r
public class CallableStatementInOut {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        // Stored procedure: increment_counter(INOUT counter INT)\r
        String sql = "{call increment_counter(?)}";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             CallableStatement cstmt = conn.prepareCall(sql)) {\r
\r
            cstmt.setInt(1, 5);\r
            cstmt.registerOutParameter(1, Types.INTEGER);\r
\r
            cstmt.execute();\r
\r
            int newValue = cstmt.getInt(1);\r
            System.out.println("New counter value: " + newValue);\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,i=`import java.sql.*;\r
\r
public class CallableStatementResultSet {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        // Stored procedure: get_all_students() returns a result set\r
        String sql = "{call get_all_students()}";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             CallableStatement cstmt = conn.prepareCall(sql);\r
             ResultSet rs = cstmt.executeQuery()) {\r
\r
            while (rs.next()) {\r
                System.out.printf("ID: %d, Name: %s, Age: %d, City: %s%n",\r
                        rs.getInt("id"),\r
                        rs.getString("name"),\r
                        rs.getInt("age"),\r
                        rs.getString("city"));\r
            }\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,g=()=>{const r=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark:bg-gray-900 dark:text-gray-200 min-h-screen py-8 px-4 transition-colors duration-300",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-4xl mx-auto space-y-12",children:[e.jsxs("section",{className:"animate-[fadeSlideUp_0.6s_ease-out]","aria-label":"Introduction to Stored Procedures and CallableStatement",children:[e.jsx("h1",{className:"text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4",children:"📞 Calling Stored Procedures with CallableStatement"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["A ",e.jsx("strong",{children:"stored procedure"})," is a set of pre‑compiled SQL statements stored in the database. It can accept parameters, perform complex operations, and return results. In JDBC, we use",e.jsx("code",{className:"mx-1",children:"CallableStatement"})," to invoke stored procedures. This is especially useful for encapsulating business logic in the database, improving performance by reducing network traffic."]}),e.jsxs("p",{className:"mt-2 text-md",children:[e.jsx("span",{className:"font-semibold",children:"Abhronila"})," from Ichapur is building a reporting system. The company's DBA created a stored procedure to calculate monthly sales. Abhronila needs to call it from Java – that's where",e.jsx("code",{children:"CallableStatement"})," comes in."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.7s_ease-out] space-y-4","aria-label":"What is a stored procedure?",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🏛️ Stored Procedures"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:[e.jsx("p",{className:"mb-3",children:"A stored procedure is like a method in Java – it has a name, can take parameters, and can return values. It's stored in the database and can be called by any application."}),e.jsx("p",{className:"font-semibold",children:"Example (MySQL):"}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-900 p-3 rounded text-sm overflow-x-auto",children:`DELIMITER //
CREATE PROCEDURE GetStudentCountByCity(IN city_name VARCHAR(50), OUT count INT)
BEGIN
    SELECT COUNT(*) INTO count FROM students WHERE city = city_name;
END //
DELIMITER ;`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"This procedure takes an input city name and returns the number of students in that city via an OUT parameter."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.8s_ease-out] space-y-4","aria-label":"CallableStatement basics",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🛠️ CallableStatement"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:[e.jsxs("p",{className:"mb-3",children:[e.jsx("code",{children:"CallableStatement"})," extends ",e.jsx("code",{children:"PreparedStatement"})," and is used to execute stored procedures. The SQL syntax varies by database, but the standard JDBC escape syntax is:"]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-900 p-2 rounded text-sm",children:`{call procedure_name(?, ?, ...)}  -- for procedures
{? = call function_name(?, ...)}      -- for functions`}),e.jsx("h3",{className:"font-semibold mt-4",children:"Key methods:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-sm",children:[e.jsxs("li",{children:[e.jsx("code",{children:"registerOutParameter(int index, int sqlType)"})," – declares an OUT parameter type."]}),e.jsxs("li",{children:[e.jsx("code",{children:"setXxx(int index, value)"})," – sets IN parameters (same as PreparedStatement)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"execute()"})," – executes the procedure."]}),e.jsxs("li",{children:[e.jsx("code",{children:"getXxx(int index)"})," – retrieves OUT parameter values after execution."]})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.9s_ease-out] space-y-4","aria-label":"Parameter types diagram",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🔄 IN, OUT, and INOUT Parameters"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-inner flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 600 150",className:"w-full max-w-2xl",stroke:"currentColor",fill:"none",strokeWidth:"2",children:[e.jsx("rect",{x:"20",y:"30",width:"100",height:"60",rx:"8",className:"stroke-indigo-500 fill-indigo-50 dark:fill-indigo-900/20"}),e.jsx("text",{x:"40",y:"65",className:"text-xs fill-gray-800 dark:fill-gray-200",stroke:"none",children:"Java"}),e.jsx("rect",{x:"150",y:"20",width:"120",height:"40",rx:"4",className:"stroke-emerald-500 fill-emerald-50 dark:fill-emerald-900/20"}),e.jsx("text",{x:"170",y:"45",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"CallableStatement"}),e.jsx("rect",{x:"300",y:"30",width:"100",height:"60",rx:"8",className:"stroke-purple-500 fill-purple-50 dark:fill-purple-900/20"}),e.jsx("text",{x:"330",y:"65",className:"text-xs fill-gray-800 dark:fill-gray-200",stroke:"none",children:"Database"}),e.jsx("path",{d:"M120 50 L150 40",className:"stroke-green-500",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"130",y:"30",className:"text-[8px] fill-green-600",stroke:"none",children:"IN (setXxx)"}),e.jsx("path",{d:"M270 40 L300 50",className:"stroke-blue-500",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite",begin:"0.5s"})}),e.jsx("text",{x:"210",y:"70",className:"text-[8px] fill-blue-600",stroke:"none",children:"OUT (getXxx)"}),e.jsx("text",{x:"310",y:"20",className:"text-[8px] fill-gray-500",stroke:"none",children:"CALL proc(IN, OUT)"})]})}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 text-center",children:"IN parameters are set before execution; OUT parameters are retrieved after."})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.0s_ease-out] space-y-6","aria-label":"Code examples for CallableStatement",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🔹 Stored Procedure with IN Parameter"}),e.jsx(t,{fileModule:a,title:"CallableStatementIn.java",highlightLines:[6,7,8,9,10,11]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Stored Procedure with OUT Parameter"}),e.jsx(t,{fileModule:n,title:"CallableStatementOut.java",highlightLines:[7,8,9,10,11,12,13,14]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Stored Procedure with INOUT Parameter"}),e.jsx(t,{fileModule:l,title:"CallableStatementInOut.java",highlightLines:[7,8,9,10,11,12,13]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Stored Procedure Returning a ResultSet"}),e.jsx(t,{fileModule:i,title:"CallableStatementResultSet.java",highlightLines:[6,7,8,9,10,11,12,13,14]})]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border-l-4 border-indigo-400",children:e.jsxs("p",{className:"text-sm font-medium text-indigo-800 dark:text-indigo-200",children:["💡 ",e.jsx("strong",{children:"Observe carefully:"})," The OUT parameter must be registered with the correct SQL type (",e.jsx("code",{children:"Types.INTEGER"}),", ",e.jsx("code",{children:"Types.VARCHAR"}),", etc.) before execution. What happens if you use the wrong type?"]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.1s_ease-out] space-y-3","aria-label":"Common mistakes",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-red-200 dark:border-red-800 pb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-red-700 dark:text-red-300",children:[e.jsx("li",{children:"Forgetting to register OUT parameters before execution."}),e.jsxs("li",{children:["Using the wrong SQL type when registering OUT parameters (e.g., using ",e.jsx("code",{children:"Types.INTEGER"})," for a VARCHAR)."]}),e.jsxs("li",{children:["Not handling ",e.jsx("code",{children:"SQLException"})," when the procedure doesn't exist or has wrong parameters."]}),e.jsx("li",{children:"Assuming all databases use the same escape syntax – some databases have proprietary syntax."}),e.jsxs("li",{children:["Calling ",e.jsx("code",{children:"executeQuery()"})," for a procedure that returns multiple result sets or update counts."]}),e.jsx("li",{children:"Not closing the CallableStatement (though it's auto‑closed in try‑with‑resources)."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.2s_ease-out] space-y-3","aria-label":"Best practices",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-green-200 dark:border-green-800 pb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-green-800 dark:text-green-200",children:[e.jsx("li",{children:"Use stored procedures for complex database operations that are used frequently."}),e.jsxs("li",{children:["Always register OUT parameters with the correct JDBC type (",e.jsx("code",{children:"java.sql.Types"}),")."]}),e.jsxs("li",{children:["Use the standard escape syntax ",e.jsx("code",{children:"call proc(?,?)"})," for portability."]}),e.jsxs("li",{children:["For procedures that return result sets, use ",e.jsx("code",{children:"execute()"})," and then ",e.jsx("code",{children:"getResultSet()"}),"."]}),e.jsxs("li",{children:["Handle multiple result sets with ",e.jsx("code",{children:"getMoreResults()"})," if needed."]}),e.jsx("li",{children:"Document the stored procedure's parameters and return type clearly in your code."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.3s_ease-out] space-y-3","aria-label":"Professional tips",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-amber-200 dark:border-amber-800 pb-2",children:"🧠 Tips & Tricks"}),e.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Debugging:"})," Log the actual SQL string (including parameter values) before execution."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Named parameters:"})," Some databases (like Oracle) support named parameters using ",e.jsx("code",{children:"/*+*/"})," hints – but not portable."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Multiple OUT parameters:"})," Register them in the order they appear in the procedure definition."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Returning cursors:"})," In Oracle, you can return a REF CURSOR and retrieve it as a ResultSet."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Swadeep's trick:"})," Create a wrapper method for each stored procedure in a DAO class – keeps JDBC code centralized and reusable."]})]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.4s_ease-out] space-y-3","aria-label":"Teacher's note",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"👩‍🏫 Teacher's Note"}),e.jsxs("div",{className:s("bg-indigo-100 dark:bg-indigo-900/40 p-5 rounded-xl","transition-all duration-300 hover:shadow-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/60"),children:[e.jsx("p",{className:"font-bold text-indigo-900 dark:text-indigo-100",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-indigo-800 dark:text-indigo-200",children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsxs("p",{className:"text-sm mt-1",children:["💼 ",r," years of experience in Programming, RDBMS, OS, Web Development."]}),e.jsxs("p",{className:"mt-3",children:[e.jsx("span",{className:"font-semibold",children:"Point to remember:"})," Stored procedures are powerful but can tie your application to a specific database. Use them judiciously – for complex logic that benefits from being close to the data, but avoid business logic in the database if you need database independence.",e.jsx("br",{}),e.jsx("span",{className:"italic",children:'"Tuhina, think of stored procedures as APIs provided by the database. CallableStatement is your HTTP client to call those APIs."'})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.5s_ease-out] space-y-3","aria-label":"Quick checklist",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-2",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:"✔️ I understand what stored procedures are and when to use them."}),e.jsx("li",{children:"✔️ I know how to create a CallableStatement using the escape syntax."}),e.jsx("li",{children:"✔️ I can set IN parameters, register OUT parameters, and retrieve results."}),e.jsx("li",{children:"✔️ I can handle stored procedures that return result sets."}),e.jsx("li",{children:"✔️ I know the difference between IN, OUT, and INOUT parameters."}),e.jsx("li",{children:"✔️ I am aware of common pitfalls and best practices."})]})})]})]})]})};export{g as default};
