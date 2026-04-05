import{j as e}from"./index-BXlhguQt.js";import{c as s}from"./clsx-B-dksMZM.js";import{J as r}from"./JavaFileLoader-CdULjISb.js";import"./JavaCodeBlock-DvXL45Ks.js";import"./prism-CikWfFON.js";import"./browser-Bf4mcs6x.js";import"./prism-java-BwO6k4I_.js";const t=`import java.sql.Connection;\r
import java.sql.DriverManager;\r
import java.sql.SQLException;\r
\r
public class SimpleConnection {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        // Try-with-resources ensures connection is closed automatically\r
        try (Connection conn = DriverManager.getConnection(url, user, password)) {\r
            System.out.println("✅ Connected to database successfully!");\r
            System.out.println("Connection object: " + conn.getClass().getName());\r
        } catch (SQLException e) {\r
            System.err.println("❌ Connection failed!");\r
            e.printStackTrace();\r
        }\r
    }\r
}`,i=`import java.sql.Connection;\r
import java.sql.DriverManager;\r
import java.sql.SQLException;\r
import java.util.Properties;\r
\r
public class ConnectionProperties {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        Properties props = new Properties();\r
        props.setProperty("user", "root");\r
        props.setProperty("password", "password");\r
        props.setProperty("useSSL", "false");\r
        props.setProperty("serverTimezone", "UTC");\r
\r
        try (Connection conn = DriverManager.getConnection(url, props)) {\r
            System.out.println("✅ Connected using Properties object!");\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,a=`import java.sql.Connection;\r
import java.sql.DriverManager;\r
import java.sql.SQLException;\r
\r
public class ConnectionURLDemo {\r
    public static void main(String[] args) {\r
        // MySQL\r
        String mysqlURL = "jdbc:mysql://localhost:3306/schoolDB?useSSL=false&serverTimezone=UTC";\r
        // PostgreSQL\r
        String postgresURL = "jdbc:postgresql://localhost:5432/schoolDB";\r
        // Oracle (thin)\r
        String oracleURL = "jdbc:oracle:thin:@localhost:1521:xe";\r
        // H2 (embedded)\r
        String h2URL = "jdbc:h2:~/test";\r
\r
        System.out.println("MySQL URL: " + mysqlURL);\r
        System.out.println("PostgreSQL URL: " + postgresURL);\r
        System.out.println("Oracle URL: " + oracleURL);\r
        System.out.println("H2 URL: " + h2URL);\r
\r
        // Attempt MySQL connection (example)\r
        try (Connection conn = DriverManager.getConnection(mysqlURL, "root", "password")) {\r
            System.out.println("✅ MySQL connection established.");\r
        } catch (SQLException e) {\r
            System.out.println("❌ MySQL connection failed (ensure driver is in classpath).");\r
            e.printStackTrace();\r
        }\r
    }\r
}`,o=`import java.sql.Connection;\r
import java.sql.DriverManager;\r
import java.sql.SQLException;\r
\r
public class ConnectionCloseExample {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        Connection conn = null;\r
        try {\r
            conn = DriverManager.getConnection(url, user, password);\r
            System.out.println("✅ Connected.");\r
            // do some work...\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        } finally {\r
            if (conn != null) {\r
                try {\r
                    conn.close();\r
                    System.out.println("Connection closed.");\r
                } catch (SQLException e) {\r
                    e.printStackTrace();\r
                }\r
            }\r
        }\r
    }\r
}`,u=()=>{const n=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark:bg-gray-900 dark:text-gray-200 min-h-screen py-8 px-4 transition-colors duration-300",children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}),e.jsxs("div",{className:"max-w-4xl mx-auto space-y-12",children:[e.jsxs("section",{className:"animate-[fadeSlideUp_0.6s_ease-out]","aria-label":"Introduction to Connecting Java with Databases",children:[e.jsx("h1",{className:"text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4",children:"🔗 Connecting Java with Databases"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["After understanding JDBC drivers and architecture, the next step is to actually",e.jsx("strong",{className:"text-indigo-600 dark:text-indigo-400",children:" establish a connection"})," between your Java application and a database. This is done using the ",e.jsx("code",{children:"DriverManager"})," class or a ",e.jsx("code",{children:"DataSource"})," (covered later)."]}),e.jsxs("p",{className:"mt-2 text-md",children:["Think of it like making a phone call: you need the correct number (URL), credentials (user/password), and a working network (driver). ",e.jsx("span",{className:"font-semibold",children:"Swadeep"})," from Barrackpore uses this to store his school project data."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.7s_ease-out] space-y-4","aria-label":"Steps to connect",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🧭 Steps to Establish a Connection"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-inner flex justify-center hover:shadow-lg transition-shadow duration-300",children:e.jsxs("svg",{viewBox:"0 0 600 180",className:"w-full max-w-2xl",stroke:"currentColor",fill:"none",strokeWidth:"2",children:[e.jsx("rect",{x:"20",y:"20",width:"120",height:"60",rx:"8",className:"stroke-indigo-500 dark:stroke-indigo-400"}),e.jsx("text",{x:"50",y:"55",className:"text-xs fill-gray-800 dark:fill-gray-200",stroke:"none",children:"Java App"}),e.jsx("rect",{x:"180",y:"20",width:"120",height:"60",rx:"8",className:"stroke-emerald-500 dark:stroke-emerald-400"}),e.jsx("text",{x:"200",y:"55",className:"text-xs fill-gray-800 dark:fill-gray-200",stroke:"none",children:"DriverManager"}),e.jsx("rect",{x:"340",y:"20",width:"120",height:"60",rx:"8",className:"stroke-sky-500 dark:stroke-sky-400"}),e.jsx("text",{x:"370",y:"55",className:"text-xs fill-gray-800 dark:fill-gray-200",stroke:"none",children:"Driver"}),e.jsx("rect",{x:"500",y:"20",width:"80",height:"60",rx:"8",className:"stroke-purple-500 dark:stroke-purple-400"}),e.jsx("text",{x:"520",y:"55",className:"text-xs fill-gray-800 dark:fill-gray-200",stroke:"none",children:"DB"}),e.jsx("line",{x1:"140",y1:"50",x2:"180",y2:"50",className:"stroke-gray-400 dark:stroke-gray-500",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"2s",repeatCount:"indefinite"})}),e.jsx("line",{x1:"300",y1:"50",x2:"340",y2:"50",className:"stroke-gray-400 dark:stroke-gray-500",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"2s",repeatCount:"indefinite"})}),e.jsx("line",{x1:"460",y1:"50",x2:"500",y2:"50",className:"stroke-gray-400 dark:stroke-gray-500",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"150",y:"30",className:"text-[8px] fill-gray-500",stroke:"none",children:"1. getConnection()"}),e.jsx("text",{x:"310",y:"30",className:"text-[8px] fill-gray-500",stroke:"none",children:"2. connect()"}),e.jsx("text",{x:"470",y:"30",className:"text-[8px] fill-gray-500",stroke:"none",children:"3. native protocol"}),e.jsx("path",{d:"M540 80 L540 110 L100 110 L100 80",className:"stroke-gray-400 dark:stroke-gray-500",strokeDasharray:"4 4",fill:"none",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;12;0",dur:"2.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"250",y:"130",className:"text-[8px] fill-gray-500",stroke:"none",children:"4. Connection object returned"})]})}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 text-center",children:["The application calls ",e.jsx("code",{children:"DriverManager.getConnection()"}),", which finds a suitable driver, establishes a network connection, and returns a ",e.jsx("code",{children:"Connection"})," object."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.8s_ease-out] space-y-6","aria-label":"Code examples",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🔹 Simple Connection (try-with-resources)"}),e.jsx(r,{fileModule:t,title:"SimpleConnection.java",highlightLines:[6,7,8,9]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Using Properties Object"}),e.jsx(r,{fileModule:i,title:"ConnectionProperties.java",highlightLines:[8,9,10,11,14]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Different Database URLs"}),e.jsx(r,{fileModule:a,title:"ConnectionURLDemo.java",highlightLines:[7,8,9,10]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Manual Connection Closing (finally block)"}),e.jsx(r,{fileModule:o,title:"ConnectionCloseExample.java",highlightLines:[12,15,16,17,18]})]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border-l-4 border-indigo-400",children:e.jsxs("p",{className:"text-sm font-medium text-indigo-800 dark:text-indigo-200",children:["💡 ",e.jsx("strong",{children:"Think about…"})," Why is try-with-resources preferred over manually closing in finally? Observe that it automatically closes the connection even if an exception occurs."]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.9s_ease-out] space-y-3","aria-label":"Common mistakes",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-red-200 dark:border-red-800 pb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-red-700 dark:text-red-300",children:[e.jsxs("li",{children:["Forgetting to add the JDBC driver JAR to the classpath → ",e.jsx("code",{children:"No suitable driver found"}),"."]}),e.jsx("li",{children:"Using wrong URL format (e.g., missing database name, wrong port)."}),e.jsx("li",{children:"Hardcoding credentials in source code (security risk)."}),e.jsx("li",{children:"Not closing the connection → resource leaks, database may run out of connections."}),e.jsxs("li",{children:["Ignoring ",e.jsx("code",{children:"SQLException"})," – always handle or log it."]}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"Class.forName()"})," unnecessarily in JDBC 4.0+."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.0s_ease-out] space-y-3","aria-label":"Best practices",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-green-200 dark:border-green-800 pb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-green-800 dark:text-green-200",children:[e.jsx("li",{children:"Always use try-with-resources (Java 7+) to auto-close connections."}),e.jsx("li",{children:"Store database credentials in configuration files (see Topic 15)."}),e.jsx("li",{children:"Use connection pooling in production (Topic 9)."}),e.jsxs("li",{children:["Set reasonable timeout values in the URL (e.g., ",e.jsx("code",{children:"connectTimeout=5000"}),")."]}),e.jsxs("li",{children:["Test connection before heavy operations (",e.jsx("code",{children:"conn.isValid(5)"}),")."]}),e.jsx("li",{children:"Close resources in the reverse order of opening (ResultSet → Statement → Connection)."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.1s_ease-out] space-y-3","aria-label":"Professional tips",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-amber-200 dark:border-amber-800 pb-2",children:"🧠 Tips & Tricks"}),e.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"URL parameters:"})," Append ",e.jsx("code",{children:"?useSSL=false&serverTimezone=UTC"})," to MySQL URLs to avoid common warnings."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Debugging connections:"})," Enable ",e.jsx("code",{children:"DriverManager.setLogWriter(new PrintWriter(System.out))"})," to see which driver is used."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Check driver version:"})," Always use the driver version compatible with your database server."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Connection timeout:"})," Add ",e.jsx("code",{children:"connectTimeout=5000"})," to the URL to avoid hanging."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Swadeep's tip:"})," Keep a pool of connection strings for different environments (dev, test, prod)."]})]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.2s_ease-out] space-y-3","aria-label":"Teacher's note",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"👩‍🏫 Teacher's Note"}),e.jsxs("div",{className:s("bg-indigo-100 dark:bg-indigo-900/40 p-5 rounded-xl","transition-all duration-300 hover:shadow-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/60"),children:[e.jsx("p",{className:"font-bold text-indigo-900 dark:text-indigo-100",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-indigo-800 dark:text-indigo-200",children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsxs("p",{className:"text-sm mt-1",children:["💼 ",n," years of experience in Programming, RDBMS, OS, Web Development."]}),e.jsxs("p",{className:"mt-3",children:[e.jsx("span",{className:"font-semibold",children:"Point to remember:"})," Students often forget that the connection must be closed. Emphasize the try-with-resources pattern from the start.",e.jsx("br",{}),e.jsx("span",{className:"italic",children:`"Abhronila, think of a database connection like a phone call – you must hang up when done, otherwise you'll block the line."`})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.3s_ease-out] space-y-3","aria-label":"Quick checklist",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-2",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:"✔️ I know the correct URL format for my database."}),e.jsx("li",{children:"✔️ I have added the driver JAR to the classpath."}),e.jsxs("li",{children:["✔️ I can write code using ",e.jsx("code",{children:"DriverManager.getConnection()"}),"."]}),e.jsx("li",{children:"✔️ I understand try-with-resources and manual closing."}),e.jsx("li",{children:"✔️ I know common connection pitfalls and how to avoid them."}),e.jsxs("li",{children:["✔️ I can pass connection properties via a ",e.jsx("code",{children:"Properties"})," object."]})]})})]})]})]})};export{u as default};
