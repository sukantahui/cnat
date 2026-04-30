import{j as e}from"./index-DdIeXD-l.js";import{c as t}from"./clsx-B-dksMZM.js";import{J as a}from"./JavaFileLoader-C1CenQp-.js";import"./JavaCodeBlock-BZqUsZXj.js";import"./prism-bVBSx9jp.js";import"./browser-DPO_eEMk.js";import"./prism-java-BwO6k4I_.js";const s=`import java.sql.*;\r
\r
public class BasicTransaction {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/bankDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String debitSQL = "UPDATE accounts SET balance = balance - 200 WHERE account_id = 1";\r
        String creditSQL = "UPDATE accounts SET balance = balance + 200 WHERE account_id = 2";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password)) {\r
            // Disable auto-commit to start transaction\r
            conn.setAutoCommit(false);\r
\r
            try (Statement stmt = conn.createStatement()) {\r
                stmt.executeUpdate(debitSQL);\r
                stmt.executeUpdate(creditSQL);\r
\r
                // If both succeed, commit\r
                conn.commit();\r
                System.out.println("Transaction committed successfully.");\r
            } catch (SQLException e) {\r
                // If any error, rollback\r
                conn.rollback();\r
                System.out.println("Transaction rolled back due to error.");\r
                e.printStackTrace();\r
            }\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,n=`import java.sql.*;\r
\r
public class TransactionRollback {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/bankDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String debitSQL = "UPDATE accounts SET balance = balance - 200 WHERE account_id = 1";\r
        // Intentional error: wrong table name to trigger rollback\r
        String creditSQL = "UPDATE accounts_wrong SET balance = balance + 200 WHERE account_id = 2";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password)) {\r
            conn.setAutoCommit(false);\r
\r
            try (Statement stmt = conn.createStatement()) {\r
                stmt.executeUpdate(debitSQL);\r
                stmt.executeUpdate(creditSQL); // This will throw exception\r
                conn.commit();\r
                System.out.println("Transaction committed.");\r
            } catch (SQLException e) {\r
                conn.rollback();\r
                System.out.println("Transaction rolled back due to error: " + e.getMessage());\r
            }\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,i=`import java.sql.*;\r
\r
public class TransactionIsolationDemo {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/bankDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password)) {\r
            // Check default isolation level\r
            System.out.println("Default isolation level: " + conn.getTransactionIsolation());\r
\r
            // Set to a higher level (example: SERIALIZABLE)\r
            conn.setTransactionIsolation(Connection.TRANSACTION_SERIALIZABLE);\r
            System.out.println("New isolation level: " + conn.getTransactionIsolation());\r
\r
            // Now perform transactions...\r
            // (code omitted for brevity)\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,b=()=>{const r=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark:bg-gray-900 dark:text-gray-200 min-h-screen py-8 px-4 transition-colors duration-300",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-4xl mx-auto space-y-12",children:[e.jsxs("section",{className:"animate-[fadeSlideUp_0.6s_ease-out]","aria-label":"Introduction to Transaction Management",children:[e.jsx("h1",{className:"text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4",children:"🔄 Transaction Management"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["A ",e.jsx("strong",{children:"transaction"})," is a unit of work that consists of one or more SQL statements that must be executed completely or not at all. Transaction management ensures data integrity and consistency, following the ",e.jsx("span",{className:"font-semibold",children:"ACID"})," properties."]}),e.jsxs("p",{className:"mt-2 text-md",children:[e.jsx("span",{className:"font-semibold",children:"Tuhina"})," from Shyamnagar is building a banking system. When she transfers money from Swadeep's account to Abhronila's account, both the debit and credit must succeed together. If one fails, the entire operation must be rolled back."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.7s_ease-out] space-y-4","aria-label":"ACID properties",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🧪 ACID Properties"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:t("bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700 text-center"),children:[e.jsx("div",{className:"text-4xl mb-2 text-blue-600 dark:text-blue-400",children:"⚛️"}),e.jsx("h3",{className:"text-xl font-bold",children:"Atomicity"}),e.jsx("p",{className:"text-sm mt-1",children:"All or nothing – transaction completes fully or not at all."})]}),e.jsxs("div",{className:t("bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700 text-center"),children:[e.jsx("div",{className:"text-4xl mb-2 text-green-600 dark:text-green-400",children:"📏"}),e.jsx("h3",{className:"text-xl font-bold",children:"Consistency"}),e.jsx("p",{className:"text-sm mt-1",children:"Database remains in a valid state before and after transaction."})]}),e.jsxs("div",{className:t("bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700 text-center"),children:[e.jsx("div",{className:"text-4xl mb-2 text-amber-600 dark:text-amber-400",children:"🛡️"}),e.jsx("h3",{className:"text-xl font-bold",children:"Isolation"}),e.jsx("p",{className:"text-sm mt-1",children:"Concurrent transactions don't interfere with each other."})]}),e.jsxs("div",{className:t("bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700 text-center"),children:[e.jsx("div",{className:"text-4xl mb-2 text-purple-600 dark:text-purple-400",children:"💾"}),e.jsx("h3",{className:"text-xl font-bold",children:"Durability"}),e.jsx("p",{className:"text-sm mt-1",children:"Once committed, changes persist even after system failure."})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.8s_ease-out] space-y-4","aria-label":"Transaction methods",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🛠️ Controlling Transactions"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Connection methods:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded",children:"void setAutoCommit(boolean autoCommit)"}),"– If false, starts a transaction."]}),e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded",children:"void commit()"}),"– Makes all changes since last commit permanent."]}),e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded",children:"void rollback()"}),"– Undoes all changes since last commit."]}),e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded",children:"boolean getAutoCommit()"}),"– Returns current auto-commit mode."]})]}),e.jsxs("p",{className:"mt-4 text-sm text-gray-600 dark:text-gray-400",children:["By default, connections are in ",e.jsx("strong",{children:"auto-commit mode"})," – each SQL statement is treated as a separate transaction and committed immediately. For multi-statement transactions, you must disable auto-commit."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.9s_ease-out] space-y-4","aria-label":"Transaction flow diagram",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🔄 Money Transfer Transaction"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-inner flex justify-center hover:shadow-lg transition-shadow",children:e.jsxs("svg",{viewBox:"0 0 600 250",className:"w-full max-w-2xl",stroke:"currentColor",fill:"none",strokeWidth:"2",children:[e.jsx("rect",{x:"20",y:"30",width:"120",height:"80",rx:"8",className:"stroke-indigo-500 dark:stroke-indigo-400 fill-indigo-50 dark:fill-indigo-900/20"}),e.jsx("text",{x:"50",y:"70",className:"text-sm fill-gray-800 dark:fill-gray-200",stroke:"none",children:"Account A"}),e.jsx("text",{x:"40",y:"95",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"₹1000"}),e.jsx("rect",{x:"460",y:"30",width:"120",height:"80",rx:"8",className:"stroke-indigo-500 dark:stroke-indigo-400 fill-indigo-50 dark:fill-indigo-900/20"}),e.jsx("text",{x:"490",y:"70",className:"text-sm fill-gray-800 dark:fill-gray-200",stroke:"none",children:"Account B"}),e.jsx("text",{x:"480",y:"95",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"₹500"}),e.jsx("path",{d:"M140 70 L200 70",className:"stroke-amber-500 dark:stroke-amber-400",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"150",y:"50",className:"text-xs fill-amber-600 dark:fill-amber-400",stroke:"none",children:"1. Debit ₹200"}),e.jsx("path",{d:"M460 70 L400 70",className:"stroke-green-500 dark:stroke-green-400",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"320",y:"50",className:"text-xs fill-green-600 dark:fill-green-400",stroke:"none",children:"2. Credit ₹200"}),e.jsx("rect",{x:"180",y:"140",width:"240",height:"60",rx:"8",className:"stroke-purple-500 dark:stroke-purple-400 fill-purple-50 dark:fill-purple-900/20"}),e.jsx("text",{x:"200",y:"180",className:"text-sm fill-gray-800 dark:fill-gray-200",stroke:"none",children:"Both succeeded?"}),e.jsx("path",{d:"M300 200 L300 230",stroke:"green",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",begin:"2s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"300",cy:"240",r:"10",className:"stroke-green-500 fill-green-100 dark:fill-green-900/20"}),e.jsx("text",{x:"280",y:"244",className:"text-xs fill-green-600 dark:fill-green-400",stroke:"none",children:"COMMIT"}),e.jsx("path",{d:"M220 200 L220 230",stroke:"red",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",begin:"2s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"220",cy:"240",r:"10",className:"stroke-red-500 fill-red-100 dark:fill-red-900/20"}),e.jsx("text",{x:"200",y:"244",className:"text-xs fill-red-600 dark:fill-red-400",stroke:"none",children:"ROLLBACK"})]})}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 text-center",children:"If both operations succeed, we commit; if any fails, we rollback to keep accounts consistent."})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.0s_ease-out] space-y-6","aria-label":"Code examples for transactions",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🔹 Basic Transaction with Commit"}),e.jsx(a,{fileModule:s,title:"BasicTransaction.java",highlightLines:[10,11,12,13,14,19,20,21]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Transaction with Rollback on Error"}),e.jsx(a,{fileModule:n,title:"TransactionRollback.java",highlightLines:[11,12,13,17,18,19,22,23,24]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Transaction Isolation Levels (Preview)"}),e.jsx(a,{fileModule:i,title:"TransactionIsolationDemo.java",highlightLines:[7,8,9,10,11]})]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border-l-4 border-indigo-400",children:e.jsxs("p",{className:"text-sm font-medium text-indigo-800 dark:text-indigo-200",children:["💡 ",e.jsx("strong",{children:"Think about:"})," What happens if you forget to call ",e.jsx("code",{children:"commit()"})," after disabling auto-commit? The changes will be lost when the connection closes. Always ensure commit or rollback is called."]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.1s_ease-out] space-y-3","aria-label":"Common mistakes",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-red-200 dark:border-red-800 pb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-red-700 dark:text-red-300",children:[e.jsx("li",{children:"Forgetting to disable auto-commit – each statement commits separately."}),e.jsxs("li",{children:["Not calling ",e.jsx("code",{children:"commit()"})," or ",e.jsx("code",{children:"rollback()"})," before closing connection – uncommitted changes are lost."]}),e.jsx("li",{children:"Mixing auto-commit and manual transaction management in same connection."}),e.jsx("li",{children:"Not handling exceptions – transaction may be left in an incomplete state."}),e.jsx("li",{children:"Assuming all databases support transactions (MyISAM engine in MySQL does not)."}),e.jsx("li",{children:"Using savepoints without checking if the database supports them (topic 7)."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.2s_ease-out] space-y-3","aria-label":"Best practices",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-green-200 dark:border-green-800 pb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-green-800 dark:text-green-200",children:[e.jsx("li",{children:"Always use try-catch-finally or try-with-resources to ensure commit/rollback."}),e.jsx("li",{children:"Keep transactions as short as possible – don't include user think time."}),e.jsx("li",{children:"Set appropriate isolation level based on concurrency requirements."}),e.jsx("li",{children:"Test rollback scenarios by simulating failures."}),e.jsx("li",{children:"For distributed transactions, consider JTA (outside JDBC scope)."}),e.jsx("li",{children:"Log transaction boundaries for debugging and auditing."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.3s_ease-out] space-y-3","aria-label":"Professional tips",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-amber-200 dark:border-amber-800 pb-2",children:"🧠 Tips & Tricks"}),e.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Batch with transaction:"})," Combine batch processing (topic 8) with transactions for massive performance gains."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Check transaction support:"})," Use ",e.jsx("code",{children:"DatabaseMetaData.supportsTransactions()"})," before attempting."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Deadlock handling:"})," Be prepared to retry transactions that fail due to deadlocks."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Savepoints preview:"})," In long transactions, consider savepoints (next topic) to rollback partially."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Debangshu's trick:"})," Always set a timeout for transactions to avoid indefinite locks."]})]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.4s_ease-out] space-y-3","aria-label":"Teacher's note",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"👩‍🏫 Teacher's Note"}),e.jsxs("div",{className:t("bg-indigo-100 dark:bg-indigo-900/40 p-5 rounded-xl","transition-all duration-300 hover:shadow-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/60"),children:[e.jsx("p",{className:"font-bold text-indigo-900 dark:text-indigo-100",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-indigo-800 dark:text-indigo-200",children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsxs("p",{className:"text-sm mt-1",children:["💼 ",r," years of experience in Programming, RDBMS, OS, Web Development."]}),e.jsxs("p",{className:"mt-3",children:[e.jsx("span",{className:"font-semibold",children:"Point to remember:"})," Students often forget that auto-commit is on by default. Emphasize the three‑step pattern: ",e.jsx("code",{children:"setAutoCommit(false)"}),", perform work, then ",e.jsx("code",{children:"commit()"})," or",e.jsx("code",{children:"rollback()"}),".",e.jsx("br",{}),e.jsx("span",{className:"italic",children:`"Abhronila, think of it like writing a letter – you don't send it until you're done. Auto‑commit sends every sentence!"`})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.5s_ease-out] space-y-3","aria-label":"Quick checklist",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-2",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:"✔️ I understand ACID properties and why they matter."}),e.jsx("li",{children:"✔️ I know how to disable auto-commit and start a transaction."}),e.jsx("li",{children:"✔️ I can write code that commits or rolls back based on success/failure."}),e.jsx("li",{children:"✔️ I handle exceptions to ensure rollback when needed."}),e.jsx("li",{children:"✔️ I know the difference between auto-commit and manual transactions."}),e.jsx("li",{children:"✔️ I am aware of isolation levels (to be explored later)."})]})})]})]})]})};export{b as default};
