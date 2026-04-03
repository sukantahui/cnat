import{j as e}from"./index-BjcB6RzK.js";import{c as n}from"./clsx-B-dksMZM.js";import{J as t}from"./JavaFileLoader-BC2oLCDG.js";import"./JavaCodeBlock-DJablnKp.js";import"./prism-C1P4T1Hh.js";import"./browser-HIBOrpFg.js";import"./prism-java-BwO6k4I_.js";const a=`import java.sql.*;\r
\r
public class StatementBatch {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             Statement stmt = conn.createStatement()) {\r
\r
            // Disable auto-commit for better control (optional)\r
            conn.setAutoCommit(false);\r
\r
            // Add multiple SQL commands to batch\r
            stmt.addBatch("INSERT INTO students (name, age, city) VALUES ('Ravi', 20, 'Delhi')");\r
            stmt.addBatch("INSERT INTO students (name, age, city) VALUES ('Priya', 21, 'Mumbai')");\r
            stmt.addBatch("INSERT INTO students (name, age, city) VALUES ('Amit', 22, 'Kolkata')");\r
            stmt.addBatch("UPDATE students SET age = 23 WHERE name = 'Ravi'");\r
\r
            // Execute batch\r
            int[] updateCounts = stmt.executeBatch();\r
            System.out.println("Batch executed. Number of affected rows per command:");\r
            for (int count : updateCounts) {\r
                System.out.println("  " + count);\r
            }\r
\r
            // Commit transaction\r
            conn.commit();\r
\r
        } catch (BatchUpdateException e) {\r
            // Handle batch exception\r
            System.err.println("Batch failed at command index: " + e.getUpdateCounts().length);\r
            e.printStackTrace();\r
            try (Connection conn = DriverManager.getConnection(url, user, password)) {\r
                conn.rollback(); // rollback if needed\r
            } catch (SQLException ex) {\r
                ex.printStackTrace();\r
            }\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,s=`import java.sql.*;\r
\r
public class PreparedStatementBatch {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String sql = "INSERT INTO students (name, age, city) VALUES (?, ?, ?)";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
\r
            conn.setAutoCommit(false);\r
\r
            // First record\r
            pstmt.setString(1, "Swadeep");\r
            pstmt.setInt(2, 20);\r
            pstmt.setString(3, "Barrackpore");\r
            pstmt.addBatch();\r
\r
            // Second record\r
            pstmt.setString(1, "Tuhina");\r
            pstmt.setInt(2, 19);\r
            pstmt.setString(3, "Shyamnagar");\r
            pstmt.addBatch();\r
\r
            // Third record\r
            pstmt.setString(1, "Abhronila");\r
            pstmt.setInt(2, 21);\r
            pstmt.setString(3, "Ichapur");\r
            pstmt.addBatch();\r
\r
            // Execute batch\r
            int[] counts = pstmt.executeBatch();\r
            System.out.println("Inserted " + counts.length + " records.");\r
\r
            conn.commit();\r
\r
        } catch (BatchUpdateException e) {\r
            System.err.println("Batch failed. Successful count: " + e.getUpdateCounts().length);\r
            e.printStackTrace();\r
            // rollback logic...\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,i=`import java.sql.*;\r
\r
public class TransactionBatch {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String sql = "INSERT INTO students (name, age, city) VALUES (?, ?, ?)";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
\r
            // Start transaction\r
            conn.setAutoCommit(false);\r
\r
            // Batch 100 records (simulated)\r
            for (int i = 1; i <= 100; i++) {\r
                pstmt.setString(1, "Student" + i);\r
                pstmt.setInt(2, 18 + (i % 10));\r
                pstmt.setString(3, "City" + (i % 5));\r
                pstmt.addBatch();\r
\r
                // Execute every 20 records to avoid memory buildup\r
                if (i % 20 == 0) {\r
                    int[] counts = pstmt.executeBatch();\r
                    System.out.println("Batch of 20 executed, total so far: " + i);\r
                }\r
            }\r
            // Execute remaining batch if any\r
            pstmt.executeBatch();\r
\r
            // Commit all\r
            conn.commit();\r
            System.out.println("Transaction committed.");\r
\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
            try (Connection conn = DriverManager.getConnection(url, user, password)) {\r
                conn.rollback();\r
                System.out.println("Transaction rolled back.");\r
            } catch (SQLException ex) {\r
                ex.printStackTrace();\r
            }\r
        }\r
    }\r
}`,c=`import java.sql.*;\r
\r
public class BatchExceptionHandling {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String sql = "INSERT INTO students (name, age, city) VALUES (?, ?, ?)";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
\r
            conn.setAutoCommit(false);\r
\r
            // Valid record\r
            pstmt.setString(1, "Valid");\r
            pstmt.setInt(2, 25);\r
            pstmt.setString(3, "ValidCity");\r
            pstmt.addBatch();\r
\r
            // This record might cause an error if age is out of range, etc.\r
            pstmt.setString(1, "Invalid");\r
            pstmt.setInt(2, 999); // assuming age column has constraint\r
            pstmt.setString(3, "InvalidCity");\r
            pstmt.addBatch();\r
\r
            // Another valid record\r
            pstmt.setString(1, "AnotherValid");\r
            pstmt.setInt(2, 22);\r
            pstmt.setString(3, "AnotherCity");\r
            pstmt.addBatch();\r
\r
            int[] counts = pstmt.executeBatch();\r
            System.out.println("All batch commands succeeded.");\r
            conn.commit();\r
\r
        } catch (BatchUpdateException e) {\r
            System.err.println("BatchUpdateException caught!");\r
            int[] updateCounts = e.getUpdateCounts();\r
            System.out.println("Number of successful commands before failure: " + updateCounts.length);\r
            for (int i = 0; i < updateCounts.length; i++) {\r
                System.out.println("Command " + i + " returned: " + updateCounts[i]);\r
            }\r
            // Rollback entire transaction or handle partial success\r
            try (Connection conn = DriverManager.getConnection(url, user, password)) {\r
                conn.rollback();\r
                System.out.println("Transaction rolled back.");\r
            } catch (SQLException ex) {\r
                ex.printStackTrace();\r
            }\r
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
      `}),e.jsxs("div",{className:"max-w-4xl mx-auto space-y-12",children:[e.jsxs("section",{className:"animate-[fadeSlideUp_0.6s_ease-out]","aria-label":"Introduction to Batch Processing",children:[e.jsx("h1",{className:"text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4",children:"📦 Batch Processing"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["When you need to execute multiple SQL statements (especially INSERT/UPDATE/DELETE) against a database, sending them one by one creates a lot of network round trips and degrades performance.",e.jsx("strong",{className:"text-indigo-600 dark:text-indigo-400",children:" Batch processing"})," allows you to group multiple statements into a single batch and send them to the database in one go."]}),e.jsxs("p",{className:"mt-2 text-md",children:[e.jsx("span",{className:"font-semibold",children:"Swadeep"})," from Barrackpore has a CSV file with 10,000 new student records. Using individual INSERT statements would take minutes; with batch processing, it takes seconds."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.7s_ease-out] space-y-4","aria-label":"Batch processing illustration",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🏭 How Batch Processing Works"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-inner flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 600 180",className:"w-full max-w-2xl",stroke:"currentColor",fill:"none",strokeWidth:"2",children:[e.jsx("rect",{x:"20",y:"20",width:"60",height:"40",rx:"4",className:"stroke-indigo-400 fill-indigo-50 dark:fill-indigo-900/20"}),e.jsx("text",{x:"30",y:"45",className:"text-[8px] fill-gray-600 dark:fill-gray-400",stroke:"none",children:"INSERT 1"}),e.jsx("rect",{x:"20",y:"70",width:"60",height:"40",rx:"4",className:"stroke-indigo-400 fill-indigo-50 dark:fill-indigo-900/20"}),e.jsx("text",{x:"30",y:"95",className:"text-[8px] fill-gray-600 dark:fill-gray-400",stroke:"none",children:"INSERT 2"}),e.jsx("rect",{x:"20",y:"120",width:"60",height:"40",rx:"4",className:"stroke-indigo-400 fill-indigo-50 dark:fill-indigo-900/20"}),e.jsx("text",{x:"30",y:"145",className:"text-[8px] fill-gray-600 dark:fill-gray-400",stroke:"none",children:"INSERT 3"}),e.jsx("rect",{x:"120",y:"20",width:"200",height:"140",rx:"8",className:"stroke-emerald-500 fill-emerald-50 dark:fill-emerald-900/20"}),e.jsx("text",{x:"180",y:"40",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"Batch"}),e.jsx("rect",{x:"140",y:"50",width:"160",height:"30",rx:"4",className:"stroke-emerald-400 fill-emerald-100 dark:fill-emerald-800/30"}),e.jsx("text",{x:"180",y:"70",className:"text-[8px] fill-gray-600 dark:fill-gray-400",stroke:"none",children:"INSERT 1; INSERT 2; INSERT 3;"}),e.jsx("path",{d:"M320 90 L420 90",className:"stroke-gray-400 dark:stroke-gray-500",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;12;0",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"340",y:"70",className:"text-[8px] fill-gray-500",stroke:"none",children:"single trip"}),e.jsx("rect",{x:"440",y:"50",width:"120",height:"80",rx:"8",className:"stroke-purple-500 fill-purple-50 dark:fill-purple-900/20"}),e.jsx("text",{x:"470",y:"95",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"Database"})]})}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 text-center",children:"Instead of sending 10,000 separate INSERT statements (10,000 round trips), you group them into batches, drastically reducing network overhead."})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.8s_ease-out] space-y-4","aria-label":"Batch methods",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🛠️ Batch Processing API"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Statement methods:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded",children:"void addBatch(String sql)"}),"– Adds a SQL command to the current batch."]}),e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded",children:"int[] executeBatch()"}),"– Submits the batch to the database. Returns an array of update counts."]}),e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded",children:"void clearBatch()"}),"– Empties the current batch."]})]}),e.jsx("h3",{className:"text-xl font-semibold mt-4 mb-2",children:"PreparedStatement (same methods, but no SQL param in addBatch):"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded",children:"void addBatch()"}),"– Adds the current set of parameters to the batch."]}),e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded",children:"int[] executeBatch()"}),"– Executes the batch."]})]}),e.jsxs("p",{className:"mt-4 text-sm text-amber-600 dark:text-amber-400",children:["⚠️ executeBatch() clears the batch automatically after execution. The returned array contains one element per statement in the batch: either an update count or ",e.jsx("code",{children:"Statement.SUCCESS_NO_INFO"})," or",e.jsx("code",{children:"Statement.EXECUTE_FAILED"}),"."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.9s_ease-out] space-y-6","aria-label":"Code examples for batch processing",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🔹 Batch with Statement"}),e.jsx(t,{fileModule:a,title:"StatementBatch.java",highlightLines:[9,10,11,12,13,14]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Batch with PreparedStatement (recommended)"}),e.jsx(t,{fileModule:s,title:"PreparedStatementBatch.java",highlightLines:[8,9,10,11,12,13,14,15,16]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Batch inside a Transaction"}),e.jsx(t,{fileModule:i,title:"TransactionBatch.java",highlightLines:[8,9,10,11,14,15,16]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Handling BatchUpdateException"}),e.jsx(t,{fileModule:c,title:"BatchExceptionHandling.java",highlightLines:[10,11,12,13,14,15,16,17,18,19,20,21]})]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border-l-4 border-indigo-400",children:e.jsxs("p",{className:"text-sm font-medium text-indigo-800 dark:text-indigo-200",children:["💡 ",e.jsx("strong",{children:"Observe carefully:"})," In ",e.jsx("code",{children:"PreparedStatementBatch"}),", we call ",e.jsx("code",{children:"addBatch()"})," after setting parameters. What happens if you forget to call ",e.jsx("code",{children:"clearParameters()"})," or reuse the same parameters?"]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.0s_ease-out] space-y-3","aria-label":"Common mistakes",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-red-200 dark:border-red-800 pb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-red-700 dark:text-red-300",children:[e.jsx("li",{children:"Adding queries that return a ResultSet (like SELECT) to a batch – not allowed."}),e.jsx("li",{children:"Not clearing the batch after execution if you plan to reuse the statement for another batch."}),e.jsx("li",{children:"Assuming all statements in the batch succeed – always check the update count array."}),e.jsxs("li",{children:["Forgetting that ",e.jsx("code",{children:"executeBatch()"})," throws ",e.jsx("code",{children:"BatchUpdateException"})," if any statement fails; the array in the exception contains results for successful ones."]}),e.jsx("li",{children:"Using auto-commit with large batches – each statement may be committed individually, causing performance issues and making rollback impossible. Better to disable auto-commit."}),e.jsx("li",{children:"Batch size too large – can cause memory issues; optimal size depends on database and network."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.1s_ease-out] space-y-3","aria-label":"Best practices",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-green-200 dark:border-green-800 pb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-green-800 dark:text-green-200",children:[e.jsxs("li",{children:["Always use ",e.jsx("code",{children:"PreparedStatement"})," for batch inserts/updates – it's faster and safer."]}),e.jsx("li",{children:"Disable auto-commit before starting a batch, then commit after the batch to ensure atomicity."}),e.jsx("li",{children:"Choose an optimal batch size (typically 100–1000, depending on your database). Experiment."}),e.jsxs("li",{children:["Handle ",e.jsx("code",{children:"BatchUpdateException"})," to determine which records failed."]}),e.jsx("li",{children:"Clear the batch if you need to reuse the statement for a different set of parameters."}),e.jsxs("li",{children:["Consider using ",e.jsx("code",{children:"addBatch()"})," and ",e.jsx("code",{children:"executeBatch()"})," in a loop for very large datasets, resetting the batch periodically."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.2s_ease-out] space-y-3","aria-label":"Professional tips",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-amber-200 dark:border-amber-800 pb-2",children:"🧠 Tips & Tricks"}),e.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Measure performance:"})," Always benchmark with and without batch to see the improvement."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"MySQL specific:"})," Add ",e.jsx("code",{children:"?rewriteBatchedStatements=true"})," to your JDBC URL for MySQL to truly optimize batch inserts."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Oracle:"})," Use ",e.jsx("code",{children:"PreparedStatement"})," with batch and set",e.jsx("code",{children:"oracle.jdbc.defaultBatchValue"})," as a connection property."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Large batches:"})," If you're inserting millions of rows, consider using database-specific bulk load tools (like ",e.jsx("code",{children:"LOAD DATA INFILE"})," in MySQL) for even better performance."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Tuhina's trick:"})," When processing a file, read a chunk of records, add them to batch, execute, and repeat. This keeps memory usage low."]})]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.3s_ease-out] space-y-3","aria-label":"Teacher's note",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"👩‍🏫 Teacher's Note"}),e.jsxs("div",{className:n("bg-indigo-100 dark:bg-indigo-900/40 p-5 rounded-xl","transition-all duration-300 hover:shadow-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/60"),children:[e.jsx("p",{className:"font-bold text-indigo-900 dark:text-indigo-100",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-indigo-800 dark:text-indigo-200",children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsxs("p",{className:"text-sm mt-1",children:["💼 ",r," years of experience in Programming, RDBMS, OS, Web Development."]}),e.jsxs("p",{className:"mt-3",children:[e.jsx("span",{className:"font-semibold",children:"Point to remember:"})," Batch processing is a classic optimization technique. Students often think of it as just a convenience, but the performance gain is enormous – especially over slow networks.",e.jsx("br",{}),e.jsx("span",{className:"italic",children:'"Abhronila, think of it like mailing 100 letters: putting them all in one envelope saves 99 trips to the post office."'})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.4s_ease-out] space-y-3","aria-label":"Quick checklist",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-2",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:"✔️ I understand why batch processing improves performance."}),e.jsx("li",{children:"✔️ I know how to add statements to a batch using Statement and PreparedStatement."}),e.jsx("li",{children:"✔️ I can execute a batch and interpret the update counts array."}),e.jsx("li",{children:"✔️ I know how to handle BatchUpdateException."}),e.jsx("li",{children:"✔️ I understand the importance of disabling auto-commit for atomic batches."}),e.jsx("li",{children:"✔️ I can choose an appropriate batch size for my application."})]})})]})]})]})};export{g as default};
