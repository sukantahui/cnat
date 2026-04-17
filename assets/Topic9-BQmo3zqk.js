import{j as e}from"./index-BRgF9Sn_.js";import{c as r}from"./clsx-B-dksMZM.js";import{J as n}from"./JavaFileLoader-BNuxVtlv.js";import"./JavaCodeBlock-N0t8K9nt.js";import"./prism-pjyEz7w3.js";import"./browser-OgYvCs2K.js";import"./prism-java-BwO6k4I_.js";const o=`import org.apache.commons.dbcp2.BasicDataSource;\r
import java.sql.Connection;\r
import java.sql.SQLException;\r
\r
public class DBCPExample {\r
    public static void main(String[] args) {\r
        // Create and configure DBCP connection pool\r
        BasicDataSource dataSource = new BasicDataSource();\r
        dataSource.setUrl("jdbc:mysql://localhost:3306/schoolDB");\r
        dataSource.setUsername("root");\r
        dataSource.setPassword("password");\r
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");\r
\r
        // Pool configuration\r
        dataSource.setInitialSize(5);\r
        dataSource.setMaxTotal(20);\r
        dataSource.setMaxIdle(10);\r
        dataSource.setMinIdle(2);\r
        dataSource.setMaxWaitMillis(30000);\r
        dataSource.setValidationQuery("SELECT 1");\r
        dataSource.setTestOnBorrow(true);\r
\r
        // Use connections from the pool\r
        for (int i = 0; i < 10; i++) {\r
            try (Connection conn = dataSource.getConnection()) {\r
                System.out.println("Got connection #" + i + " from pool");\r
                // Simulate work\r
                Thread.sleep(100);\r
            } catch (SQLException | InterruptedException e) {\r
                e.printStackTrace();\r
            }\r
        }\r
\r
        // Close the pool when application shuts down\r
        try {\r
            dataSource.close();\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,t=`import com.zaxxer.hikari.HikariConfig;\r
import com.zaxxer.hikari.HikariDataSource;\r
import java.sql.Connection;\r
import java.sql.SQLException;\r
\r
public class HikariExample {\r
    public static void main(String[] args) {\r
        // HikariCP configuration\r
        HikariConfig config = new HikariConfig();\r
        config.setJdbcUrl("jdbc:mysql://localhost:3306/schoolDB");\r
        config.setUsername("root");\r
        config.setPassword("password");\r
        config.setDriverClassName("com.mysql.cj.jdbc.Driver");\r
\r
        // Pool settings\r
        config.setMaximumPoolSize(20);\r
        config.setMinimumIdle(5);\r
        config.setConnectionTimeout(30000); // maxWaitMillis equivalent\r
        config.setIdleTimeout(600000); // 10 minutes\r
        config.setConnectionTestQuery("SELECT 1");\r
        config.setConnectionInitSql("SELECT 1");\r
\r
        // Create pool\r
        try (HikariDataSource dataSource = new HikariDataSource(config)) {\r
            for (int i = 0; i < 10; i++) {\r
                try (Connection conn = dataSource.getConnection()) {\r
                    System.out.println("Got HikariCP connection #" + i);\r
                    // Simulate work\r
                    Thread.sleep(100);\r
                } catch (SQLException | InterruptedException e) {\r
                    e.printStackTrace();\r
                }\r
            }\r
        } // dataSource closed automatically\r
    }\r
}`,i=`import javax.sql.DataSource;\r
import com.mysql.cj.jdbc.MysqlDataSource;\r
import java.sql.Connection;\r
import java.sql.SQLException;\r
\r
public class DataSourceConfig {\r
    public static void main(String[] args) {\r
        // Create a MySQL DataSource (not pooled, just a simple implementation)\r
        MysqlDataSource dataSource = new MysqlDataSource();\r
        dataSource.setUrl("jdbc:mysql://localhost:3306/schoolDB");\r
        dataSource.setUser("root");\r
        dataSource.setPassword("password");\r
\r
        // Use the DataSource to get a connection\r
        try (Connection conn = dataSource.getConnection()) {\r
            System.out.println("Connected using DataSource!");\r
            System.out.println("Connection class: " + conn.getClass().getName());\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,s=`import com.zaxxer.hikari.HikariConfig;\r
import com.zaxxer.hikari.HikariDataSource;\r
import java.sql.Connection;\r
import java.sql.SQLException;\r
\r
public class ConnectionPoolDemo {\r
    public static void main(String[] args) {\r
        HikariConfig config = new HikariConfig();\r
        config.setJdbcUrl("jdbc:mysql://localhost:3306/schoolDB");\r
        config.setUsername("root");\r
        config.setPassword("password");\r
        config.setMaximumPoolSize(3); // small pool for demo\r
\r
        try (HikariDataSource dataSource = new HikariDataSource(config)) {\r
            // Borrow two connections\r
            Connection conn1 = dataSource.getConnection();\r
            Connection conn2 = dataSource.getConnection();\r
            System.out.println("Active connections: " + dataSource.getHikariPoolMXBean().getActiveConnections());\r
\r
            // Return one to the pool\r
            conn1.close(); // not actually closed, returned to pool\r
            System.out.println("After closing conn1, active: " + dataSource.getHikariPoolMXBean().getActiveConnections());\r
\r
            // Borrow a third – should reuse the returned connection\r
            Connection conn3 = dataSource.getConnection();\r
            System.out.println("After borrowing conn3, active: " + dataSource.getHikariPoolMXBean().getActiveConnections());\r
\r
            // Clean up\r
            conn2.close();\r
            conn3.close();\r
            System.out.println("All returned, active: " + dataSource.getHikariPoolMXBean().getActiveConnections());\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,u=()=>{const a=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark:bg-gray-900 dark:text-gray-200 min-h-screen py-8 px-4 transition-colors duration-300",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-4xl mx-auto space-y-12",children:[e.jsxs("section",{className:"animate-[fadeSlideUp_0.6s_ease-out]","aria-label":"Introduction to Connection Pooling and DataSource",children:[e.jsx("h1",{className:"text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4",children:"🔌 Connection Pooling and DataSource"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In real‑world applications, creating a new database connection for every request is expensive and slow.",e.jsx("strong",{className:"text-indigo-600 dark:text-indigo-400",children:" Connection pooling"})," maintains a pool of reusable connections, dramatically improving performance. The ",e.jsx("code",{children:"DataSource"})," interface provides a standard way to obtain pooled connections, replacing the old ",e.jsx("code",{children:"DriverManager"}),"."]}),e.jsxs("p",{className:"mt-2 text-md",children:[e.jsx("span",{className:"font-semibold",children:"Debangshu"})," from Naihati runs a busy college website with hundreds of concurrent users. Without connection pooling, his database would quickly run out of connections and crash."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.7s_ease-out] space-y-4","aria-label":"Why connection pooling",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🏊 The Problem: Expensive Connections"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-inner flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 600 180",className:"w-full max-w-2xl",stroke:"currentColor",fill:"none",strokeWidth:"2",children:[e.jsx("rect",{x:"20",y:"20",width:"80",height:"60",rx:"8",className:"stroke-red-400 fill-red-50 dark:fill-red-900/20"}),e.jsx("text",{x:"30",y:"55",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"App"}),e.jsx("path",{d:"M100 50 L200 50",className:"stroke-gray-400",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("rect",{x:"220",y:"20",width:"80",height:"60",rx:"8",className:"stroke-red-400 fill-red-50 dark:fill-red-900/20"}),e.jsx("text",{x:"240",y:"55",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"DB"}),e.jsx("text",{x:"120",y:"30",className:"text-[8px] fill-gray-500",stroke:"none",children:"new connection"}),e.jsx("path",{d:"M100 120 L200 120",className:"stroke-gray-400",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite",begin:"0.5s"})}),e.jsx("text",{x:"120",y:"100",className:"text-[8px] fill-gray-500",stroke:"none",children:"new connection"}),e.jsx("rect",{x:"350",y:"20",width:"80",height:"60",rx:"8",className:"stroke-green-400 fill-green-50 dark:fill-green-900/20"}),e.jsx("text",{x:"370",y:"55",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"App"}),e.jsx("rect",{x:"450",y:"50",width:"120",height:"80",rx:"8",className:"stroke-emerald-500 fill-emerald-50 dark:fill-emerald-900/20"}),e.jsx("text",{x:"480",y:"95",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"Pool"}),e.jsx("circle",{cx:"500",cy:"70",r:"6",fill:"green",className:"dark:fill-green-400"}),e.jsx("circle",{cx:"520",cy:"70",r:"6",fill:"green",className:"dark:fill-green-400"}),e.jsx("circle",{cx:"540",cy:"70",r:"6",fill:"green",className:"dark:fill-green-400"}),e.jsx("rect",{x:"590",y:"20",width:"80",height:"60",rx:"8",className:"stroke-green-400 fill-green-50 dark:fill-green-900/20"}),e.jsx("text",{x:"610",y:"55",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"DB"}),e.jsx("path",{d:"M430 80 L450 80",className:"stroke-gray-400",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"380",y:"70",className:"text-[8px] fill-gray-500",stroke:"none",children:"borrow"})]})}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 text-center",children:"Left: each request opens its own connection (costly). Right: connections are reused from a pool."})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.8s_ease-out] space-y-4","aria-label":"DataSource vs DriverManager",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"📋 DataSource Interface"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition",children:[e.jsx("h3",{className:"text-xl font-bold text-amber-600 dark:text-amber-400",children:"DriverManager"}),e.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[e.jsx("li",{children:"Basic, simple to use"}),e.jsx("li",{children:"No connection pooling"}),e.jsx("li",{children:"Every call creates new connection"}),e.jsx("li",{children:"Not suitable for production"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition",children:[e.jsx("h3",{className:"text-xl font-bold text-green-600 dark:text-green-400",children:"DataSource"}),e.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[e.jsx("li",{children:"Standard interface for connection factories"}),e.jsx("li",{children:"Supports connection pooling"}),e.jsx("li",{children:"Can be configured via JNDI (in containers)"}),e.jsx("li",{children:"Portable across environments"})]})]})]}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"In Java EE / Spring, DataSource is the preferred way to obtain database connections."})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.9s_ease-out] space-y-4","aria-label":"Popular connection pools",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🏊 Popular Connection Pool Implementations"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:r("bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700"),children:[e.jsxs("div",{className:"flex items-center space-x-3 mb-2",children:[e.jsx("svg",{className:"w-8 h-8 text-indigo-500",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})}),e.jsx("h3",{className:"text-xl font-bold",children:"Apache DBCP"})]}),e.jsx("p",{className:"text-sm",children:"One of the oldest and most widely used connection pools. Comes with commons-dbcp2."}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Pros: Mature, well‑documented. Cons: Can be slower under high concurrency."})]}),e.jsxs("div",{className:r("bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700"),children:[e.jsxs("div",{className:"flex items-center space-x-3 mb-2",children:[e.jsx("svg",{className:"w-8 h-8 text-emerald-500",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})}),e.jsx("h3",{className:"text-xl font-bold",children:"HikariCP"})]}),e.jsx("p",{className:"text-sm",children:"Modern, extremely fast, lightweight. Default connection pool in Spring Boot 2.x."}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Pros: Blazing fast, low overhead. Cons: Slightly fewer configuration options."})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.0s_ease-out] space-y-4","aria-label":"Configuration parameters",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"⚙️ Key Pool Configuration Parameters"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:[e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-300 dark:border-gray-600",children:[e.jsx("th",{className:"text-left py-2",children:"Parameter"}),e.jsx("th",{className:"text-left py-2",children:"Description"}),e.jsx("th",{className:"text-left py-2",children:"Typical Value"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-700",children:[e.jsx("td",{className:"py-2 font-mono",children:"initialSize"}),e.jsx("td",{children:"Number of connections created when pool starts"}),e.jsx("td",{children:"5–10"})]}),e.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-700",children:[e.jsx("td",{className:"py-2 font-mono",children:"maxTotal"}),e.jsx("td",{children:"Maximum number of connections in the pool"}),e.jsx("td",{children:"20–100 (depends on DB)"})]}),e.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-700",children:[e.jsx("td",{className:"py-2 font-mono",children:"maxIdle"}),e.jsx("td",{children:"Maximum number of idle connections to keep"}),e.jsx("td",{children:"10"})]}),e.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-700",children:[e.jsx("td",{className:"py-2 font-mono",children:"minIdle"}),e.jsx("td",{children:"Minimum number of idle connections to maintain"}),e.jsx("td",{children:"2–5"})]}),e.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-700",children:[e.jsx("td",{className:"py-2 font-mono",children:"maxWaitMillis"}),e.jsx("td",{children:"Maximum time to wait for a connection before throwing exception"}),e.jsx("td",{children:"30000 (30 sec)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 font-mono",children:"validationQuery"}),e.jsx("td",{children:'SQL query to test if a connection is valid (e.g., "SELECT 1")'}),e.jsx("td",{children:"SELECT 1"})]})]})]}),e.jsxs("p",{className:"text-xs text-gray-500 mt-3",children:["Note: Parameter names may differ slightly between DBCP and HikariCP (e.g., Hikari uses",e.jsx("code",{children:"maximumPoolSize"})," instead of ",e.jsx("code",{children:"maxTotal"}),")."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.1s_ease-out] space-y-6","aria-label":"Code examples for connection pooling",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🔹 Basic DataSource Setup (Standalone)"}),e.jsx(n,{fileModule:i,title:"DataSourceConfig.java",highlightLines:[5,6,7,8,9,10,11,14]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Using Apache DBCP2"}),e.jsx(n,{fileModule:o,title:"DBCPExample.java",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,18]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Using HikariCP"}),e.jsx(n,{fileModule:t,title:"HikariExample.java",highlightLines:[5,6,7,8,9,10,11,12,13,14,17]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Demonstrating Pool Reuse"}),e.jsx(n,{fileModule:s,title:"ConnectionPoolDemo.java",highlightLines:[7,8,9,12,13,14,15,16,17,18,19]})]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border-l-4 border-indigo-400",children:e.jsxs("p",{className:"text-sm font-medium text-indigo-800 dark:text-indigo-200",children:["💡 ",e.jsx("strong",{children:"Observe carefully:"})," In the pool demo, we never actually close the physical connection – we just return it to the pool. The ",e.jsx("code",{children:"close()"})," method on a pooled connection is overridden to return it to the pool, not to close it."]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.2s_ease-out] space-y-3","aria-label":"Common mistakes",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-red-200 dark:border-red-800 pb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-red-700 dark:text-red-300",children:[e.jsx("li",{children:"Not closing connections (or forgetting to return them to the pool) – leads to pool exhaustion."}),e.jsx("li",{children:"Setting pool sizes too high – can overwhelm the database with too many connections."}),e.jsx("li",{children:"Not configuring validation queries – connections may become stale and cause errors."}),e.jsx("li",{children:"Using the same DataSource instance without proper synchronization in multithreaded environments (DataSource is thread-safe, but care needed with config)."}),e.jsx("li",{children:"Mixing up parameter names between DBCP and HikariCP – leads to ineffective configuration."}),e.jsxs("li",{children:["Not handling ",e.jsx("code",{children:"SQLException"})," when borrowing a connection – the pool may be empty or timeout."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.3s_ease-out] space-y-3","aria-label":"Best practices",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-green-200 dark:border-green-800 pb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-green-800 dark:text-green-200",children:[e.jsx("li",{children:"Always close connections, statements, and result sets in finally blocks or try-with-resources."}),e.jsx("li",{children:"Choose HikariCP for new projects – it's fast and actively maintained."}),e.jsx("li",{children:"Set appropriate pool size based on database max connections and application concurrency."}),e.jsx("li",{children:"Enable connection validation (testOnBorrow or testWhileIdle) to avoid handing out dead connections."}),e.jsx("li",{children:"Monitor pool usage (active/idle counts) in production."}),e.jsx("li",{children:"Externalize DataSource configuration (properties files, environment variables) for different environments."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.4s_ease-out] space-y-3","aria-label":"Professional tips",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-amber-200 dark:border-amber-800 pb-2",children:"🧠 Tips & Tricks"}),e.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Connection leak detection:"})," HikariCP can log leaks if you enable ",e.jsx("code",{children:"leakDetectionThreshold"}),"."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"PreparedStatement pooling:"})," Some pools support pooling of PreparedStatements as well – can boost performance further."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"JMX monitoring:"})," Both DBCP and HikariCP expose JMX beans to monitor pool health."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Graceful shutdown:"})," When shutting down your app, close the DataSource to release all connections."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Tuhina's trick:"})," Use a connection pool in your development environment too – it mimics production behavior and catches pool-related bugs early."]})]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.5s_ease-out] space-y-3","aria-label":"Teacher's note",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"👩‍🏫 Teacher's Note"}),e.jsxs("div",{className:r("bg-indigo-100 dark:bg-indigo-900/40 p-5 rounded-xl","transition-all duration-300 hover:shadow-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/60"),children:[e.jsx("p",{className:"font-bold text-indigo-900 dark:text-indigo-100",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-indigo-800 dark:text-indigo-200",children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsxs("p",{className:"text-sm mt-1",children:["💼 ",a," years of experience in Programming, RDBMS, OS, Web Development."]}),e.jsxs("p",{className:"mt-3",children:[e.jsx("span",{className:"font-semibold",children:"Point to remember:"})," Connection pooling is not just an optimization – it's essential for any production application with more than a handful of users. Students often think DriverManager is fine until they deploy and the database crashes.",e.jsx("br",{}),e.jsx("span",{className:"italic",children:'"Abhronila, think of connection pooling as a library – you borrow a book, read it, and return it so others can use it. DriverManager is like buying a new book for every reader – expensive and wasteful."'})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.6s_ease-out] space-y-3","aria-label":"Quick checklist",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-2",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:"✔️ I understand why connection pooling is necessary."}),e.jsx("li",{children:"✔️ I know the difference between DriverManager and DataSource."}),e.jsx("li",{children:"✔️ I can configure Apache DBCP or HikariCP in a Java application."}),e.jsx("li",{children:"✔️ I understand key pool parameters and how to set them."}),e.jsx("li",{children:"✔️ I know how to properly return connections to the pool (by calling close)."}),e.jsx("li",{children:"✔️ I am aware of common pool-related pitfalls and how to avoid them."})]})})]})]})]})};export{u as default};
