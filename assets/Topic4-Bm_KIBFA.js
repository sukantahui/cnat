import{j as e}from"./index-Cufz2vn-.js";import{c as s}from"./clsx-B-dksMZM.js";import{J as t}from"./JavaFileLoader-CEoERlg9.js";import"./JavaCodeBlock-CrahlGTT.js";import"./prism-Brf2rvGz.js";import"./browser-MIX2JdSA.js";import"./prism-java-BwO6k4I_.js";const n=`import java.sql.*;\r
\r
public class StatementExample {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        // Simulate user input (e.g., from a login form)\r
        String userInput = "admin' OR '1'='1"; // malicious input\r
\r
        // Vulnerable query concatenation\r
        String query = "SELECT * FROM users WHERE username = '" + userInput + "'";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             Statement stmt = conn.createStatement();\r
             ResultSet rs = stmt.executeQuery(query)) {\r
\r
            System.out.println("Executing: " + query);\r
            if (rs.next()) {\r
                System.out.println("⚠️ Login successful without valid credentials!");\r
            } else {\r
                System.out.println("Login failed.");\r
            }\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,a=`import java.sql.*;\r
\r
public class PreparedStatementExample {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        // Simulate safe user input\r
        String userInput = "admin' OR '1'='1"; // same malicious input\r
\r
        // Safe query with placeholder\r
        String query = "SELECT * FROM users WHERE username = ?";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             PreparedStatement pstmt = conn.prepareStatement(query)) {\r
\r
            pstmt.setString(1, userInput); // input is treated as data, not SQL\r
            ResultSet rs = pstmt.executeQuery();\r
\r
            if (rs.next()) {\r
                System.out.println("Login successful.");\r
            } else {\r
                System.out.println("✅ Login failed – malicious input didn't work.");\r
            }\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,i=`import java.sql.*;\r
\r
public class BatchExample {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String insertSQL = "INSERT INTO students (name, age, city) VALUES (?, ?, ?)";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             PreparedStatement pstmt = conn.prepareStatement(insertSQL)) {\r
\r
            // First student\r
            pstmt.setString(1, "Debangshu");\r
            pstmt.setInt(2, 22);\r
            pstmt.setString(3, "Naihati");\r
            pstmt.addBatch();\r
\r
            // Second student\r
            pstmt.setString(1, "Swadeep");\r
            pstmt.setInt(2, 20);\r
            pstmt.setString(3, "Barrackpore");\r
            pstmt.addBatch();\r
\r
            // Third student\r
            pstmt.setString(1, "Tuhina");\r
            pstmt.setInt(2, 19);\r
            pstmt.setString(3, "Shyamnagar");\r
            pstmt.addBatch();\r
\r
            int[] results = pstmt.executeBatch();\r
            System.out.println("Batch executed. Affected rows: " + results.length);\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,l=`import java.sql.*;\r
\r
public class ComparisonDemo {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        // Measure Statement performance for repeated inserts\r
        long start = System.currentTimeMillis();\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             Statement stmt = conn.createStatement()) {\r
\r
            for (int i = 0; i < 100; i++) {\r
                String sql = "INSERT INTO log (message) VALUES ('Statement " + i + "')";\r
                stmt.executeUpdate(sql);\r
            }\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
        long statementTime = System.currentTimeMillis() - start;\r
        System.out.println("Statement time: " + statementTime + " ms");\r
\r
        // Measure PreparedStatement performance for repeated inserts\r
        start = System.currentTimeMillis();\r
        String insertSQL = "INSERT INTO log (message) VALUES (?)";\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             PreparedStatement pstmt = conn.prepareStatement(insertSQL)) {\r
\r
            for (int i = 0; i < 100; i++) {\r
                pstmt.setString(1, "PreparedStatement " + i);\r
                pstmt.executeUpdate();\r
            }\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
        long preparedTime = System.currentTimeMillis() - start;\r
        System.out.println("PreparedStatement time: " + preparedTime + " ms");\r
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
      `}),e.jsxs("div",{className:"max-w-4xl mx-auto space-y-12",children:[e.jsxs("section",{className:"animate-[fadeSlideUp_0.6s_ease-out]","aria-label":"Introduction to Statement vs PreparedStatement",children:[e.jsx("h1",{className:"text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4",children:"⚖️ Statement vs PreparedStatement"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In the previous topic, we used ",e.jsx("code",{children:"Statement"})," to execute SQL queries. However, Java provides a more powerful and safer alternative:",e.jsx("code",{className:"mx-1",children:"PreparedStatement"}),". This topic explores the key differences, when to use each, and why",e.jsx("code",{children:"PreparedStatement"})," is almost always the better choice in real-world applications."]}),e.jsxs("p",{className:"mt-2 text-md",children:[e.jsx("span",{className:"font-semibold",children:"Debangshu"})," from Naihati is building a login system for his college. If he uses plain ",e.jsx("code",{children:"Statement"})," and concatenates user input, his system could be hacked via",e.jsx("strong",{className:"text-red-600 dark:text-red-400",children:" SQL injection"}),". ",e.jsx("code",{children:"PreparedStatement"})," prevents this."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.7s_ease-out] space-y-4","aria-label":"Comparison table",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"📊 Key Differences"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse bg-white dark:bg-gray-800 rounded-xl shadow-md",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-indigo-100 dark:bg-indigo-900/40",children:[e.jsx("th",{className:"p-3 text-left font-semibold",children:"Feature"}),e.jsx("th",{className:"p-3 text-left font-semibold",children:"Statement"}),e.jsx("th",{className:"p-3 text-left font-semibold",children:"PreparedStatement"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium",children:"SQL Injection"}),e.jsx("td",{className:"p-3 text-red-600 dark:text-red-400",children:"❌ Vulnerable"}),e.jsx("td",{className:"p-3 text-green-600 dark:text-green-400",children:"✅ Safe (precompiled)"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium",children:"Performance (repeated queries)"}),e.jsx("td",{className:"p-3",children:"Parsed every time → slower"}),e.jsx("td",{className:"p-3",children:"Precompiled once → faster"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium",children:"Type safety"}),e.jsx("td",{className:"p-3",children:"No; values concatenated as strings"}),e.jsx("td",{className:"p-3",children:"Yes; setXxx() methods enforce types"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium",children:"Readability"}),e.jsx("td",{className:"p-3",children:"SQL string messy with concatenation"}),e.jsx("td",{className:"p-3",children:"Clean SQL with placeholders (?)"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium",children:"Binary data (BLOB)"}),e.jsx("td",{className:"p-3",children:"Difficult to handle"}),e.jsx("td",{className:"p-3",children:"Easy with setBinaryStream()"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",children:[e.jsx("td",{className:"p-3 font-medium",children:"When to use"}),e.jsx("td",{className:"p-3",children:"DDL, no parameters, one-time execution"}),e.jsx("td",{className:"p-3",children:"All DML with parameters, repeated executions"})]})]})]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.8s_ease-out] space-y-4","aria-label":"SQL injection explained",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🎭 SQL Injection Attack"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-inner flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 600 180",className:"w-full max-w-2xl",stroke:"currentColor",fill:"none",strokeWidth:"2",children:[e.jsx("rect",{x:"20",y:"20",width:"120",height:"60",rx:"8",className:"stroke-indigo-500 dark:stroke-indigo-400"}),e.jsx("text",{x:"40",y:"55",className:"text-xs fill-gray-800 dark:fill-gray-200",stroke:"none",children:"User Input"}),e.jsx("text",{x:"30",y:"75",className:"text-[8px] fill-gray-500",stroke:"none",children:"' OR '1'='1"}),e.jsx("rect",{x:"180",y:"20",width:"160",height:"60",rx:"8",className:"stroke-red-500 dark:stroke-red-400"}),e.jsx("text",{x:"200",y:"55",className:"text-xs fill-gray-800 dark:fill-gray-200",stroke:"none",children:"String concatenation"}),e.jsx("text",{x:"190",y:"75",className:"text-[8px] fill-gray-500",stroke:"none",children:`"SELECT * FROM users WHERE name = '" + input + "'"`}),e.jsx("rect",{x:"380",y:"20",width:"200",height:"60",rx:"8",className:"stroke-red-500 dark:stroke-red-400"}),e.jsx("text",{x:"400",y:"55",className:"text-xs fill-gray-800 dark:fill-gray-200",stroke:"none",children:"Dangerous Query"}),e.jsx("text",{x:"390",y:"75",className:"text-[8px] fill-gray-500",stroke:"none",children:"SELECT * FROM users WHERE name = '' OR '1'='1'"}),e.jsx("line",{x1:"140",y1:"50",x2:"180",y2:"50",className:"stroke-gray-400 dark:stroke-gray-500",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("line",{x1:"340",y1:"50",x2:"380",y2:"50",className:"stroke-gray-400 dark:stroke-gray-500",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"540",cy:"90",r:"15",className:"stroke-red-500 fill-red-100 dark:fill-red-900/30"}),e.jsx("path",{d:"M535 85 L545 95 M545 85 L535 95",stroke:"red",strokeWidth:"2"})]})}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 text-center",children:["Concatenating user input directly into SQL allows attackers to alter the query logic.",e.jsx("code",{children:"PreparedStatement"})," treats input as data only, never as part of the SQL command."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.9s_ease-out] space-y-6","aria-label":"Code examples comparing Statement and PreparedStatement",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🔴 Statement (Vulnerable)"}),e.jsx(t,{fileModule:n,title:"StatementExample.java",highlightLines:[9,10,11]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🟢 PreparedStatement (Safe & Efficient)"}),e.jsx(t,{fileModule:a,title:"PreparedStatementExample.java",highlightLines:[8,9,10,11,12,15]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"📦 Batch Processing with PreparedStatement"}),e.jsx(t,{fileModule:i,title:"BatchExample.java",highlightLines:[11,12,13,14,16]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"⏱️ Performance Comparison Demo"}),e.jsx(t,{fileModule:l,title:"ComparisonDemo.java",highlightLines:[9,15,20,21]})]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border-l-4 border-indigo-400",children:e.jsxs("p",{className:"text-sm font-medium text-indigo-800 dark:text-indigo-200",children:["💡 ",e.jsx("strong",{children:"Try changing this:"})," In the Statement example, replace the username with",e.jsx("code",{children:"' OR '1'='1"})," and see what happens. Then try the same with PreparedStatement – it won't work."]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.0s_ease-out] space-y-3","aria-label":"Common mistakes",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-red-200 dark:border-red-800 pb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-red-700 dark:text-red-300",children:[e.jsxs("li",{children:["Still concatenating parameters even when using ",e.jsx("code",{children:"PreparedStatement"})," – defeats the purpose."]}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"setXxx()"})," with wrong type (e.g., ",e.jsx("code",{children:"setString"})," for an integer column)."]}),e.jsxs("li",{children:["Forgetting to call ",e.jsx("code",{children:"executeUpdate()"})," or ",e.jsx("code",{children:"executeQuery()"})," after setting parameters."]}),e.jsxs("li",{children:["Not reusing ",e.jsx("code",{children:"PreparedStatement"})," for batch operations – creates overhead."]}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"Statement"})," for dynamic table/column names (can't use PreparedStatement for those)."]}),e.jsx("li",{children:"Ignoring SQL injection risks in reporting tools that use dynamic queries."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.1s_ease-out] space-y-3","aria-label":"Best practices",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-green-200 dark:border-green-800 pb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-green-800 dark:text-green-200",children:[e.jsxs("li",{children:["Always use ",e.jsx("code",{children:"PreparedStatement"})," for queries with user input."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"Statement"})," only for DDL (CREATE, ALTER) or when no parameters are needed."]}),e.jsxs("li",{children:["Set parameter types explicitly (",e.jsx("code",{children:"setString"}),", ",e.jsx("code",{children:"setInt"}),", etc.) – don't rely on conversion."]}),e.jsxs("li",{children:["Reuse ",e.jsx("code",{children:"PreparedStatement"})," in loops or batches for performance."]}),e.jsxs("li",{children:["Close ",e.jsx("code",{children:"PreparedStatement"})," in finally block or try-with-resources."]}),e.jsx("li",{children:"For dynamic table/column names, validate against a whitelist."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.2s_ease-out] space-y-3","aria-label":"Professional tips",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-amber-200 dark:border-amber-800 pb-2",children:"🧠 Tips & Tricks"}),e.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Generated keys:"})," Use ",e.jsx("code",{children:"PreparedStatement.RETURN_GENERATED_KEYS"})," to retrieve auto-increment IDs."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Named parameters:"})," Some databases support named parameters via vendor-specific extensions."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Logging:"})," To debug, log the SQL with parameter values (but be careful not to log sensitive data)."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Performance tip:"})," For repeated inserts, use batch with ",e.jsx("code",{children:"PreparedStatement"})," (Topic 8)."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Swadeep's trick:"})," Use ",e.jsx("code",{children:"setObject()"})," when the type is dynamic, but prefer typed methods for clarity."]})]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.3s_ease-out] space-y-3","aria-label":"Teacher's note",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"👩‍🏫 Teacher's Note"}),e.jsxs("div",{className:s("bg-indigo-100 dark:bg-indigo-900/40 p-5 rounded-xl","transition-all duration-300 hover:shadow-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/60"),children:[e.jsx("p",{className:"font-bold text-indigo-900 dark:text-indigo-100",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-indigo-800 dark:text-indigo-200",children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsxs("p",{className:"text-sm mt-1",children:["💼 ",r," years of experience in Programming, RDBMS, OS, Web Development."]}),e.jsxs("p",{className:"mt-3",children:[e.jsx("span",{className:"font-semibold",children:"Point to remember:"})," SQL injection is one of the most critical web vulnerabilities. Teach students to ",e.jsx("strong",{children:"never trust user input"}),". PreparedStatement is their first line of defense.",e.jsx("br",{}),e.jsx("span",{className:"italic",children:'"Abhronila, think of PreparedStatement as a template with blanks – you fill in the blanks with safe values, but the structure remains fixed."'})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.4s_ease-out] space-y-3","aria-label":"Quick checklist",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-2",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:"✔️ I understand SQL injection and why it's dangerous."}),e.jsx("li",{children:"✔️ I can explain the difference between Statement and PreparedStatement."}),e.jsx("li",{children:"✔️ I know how to create and use PreparedStatement with placeholders."}),e.jsxs("li",{children:["✔️ I can use ",e.jsx("code",{children:"setXxx()"})," methods correctly."]}),e.jsx("li",{children:"✔️ I know when to use Statement vs PreparedStatement."}),e.jsx("li",{children:"✔️ I can implement batch updates with PreparedStatement."})]})})]})]})]})};export{g as default};
