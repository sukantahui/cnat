import{j as e}from"./index-Ci-Q4Ner.js";import{c as a}from"./clsx-B-dksMZM.js";import{J as n}from"./JavaFileLoader-BlL9pLbO.js";import"./JavaCodeBlock-CbpPnd07.js";import"./prism-BuBU6Rh9.js";import"./browser-Dp8W79cH.js";import"./prism-java-BwO6k4I_.js";const s=`import java.sql.*;\r
\r
public class SavepointExample {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String insert1 = "INSERT INTO students (name, age, city) VALUES ('Rohan', 20, 'Kolkata')";\r
        String insert2 = "INSERT INTO students (name, age, city) VALUES ('Priya', 19, 'Delhi')";\r
        String insert3 = "INSERT INTO students (name, age, city) VALUES ('Anil', 21, 'Mumbai')";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password)) {\r
            conn.setAutoCommit(false);\r
\r
            try (Statement stmt = conn.createStatement()) {\r
                stmt.executeUpdate(insert1);\r
                System.out.println("Insert 1 executed.");\r
\r
                // Create a savepoint\r
                Savepoint sp1 = conn.setSavepoint("AfterInsert1");\r
\r
                stmt.executeUpdate(insert2);\r
                System.out.println("Insert 2 executed.");\r
\r
                // Oops, something went wrong, let's rollback to sp1\r
                conn.rollback(sp1);\r
                System.out.println("Rolled back to savepoint, insert2 undone.");\r
\r
                // Now execute insert3\r
                stmt.executeUpdate(insert3);\r
                System.out.println("Insert 3 executed.");\r
\r
                // Commit everything (insert1 and insert3)\r
                conn.commit();\r
                System.out.println("Transaction committed. Only insert1 and insert3 remain.");\r
            } catch (SQLException e) {\r
                conn.rollback();\r
                e.printStackTrace();\r
            }\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,r=`import java.sql.*;\r
\r
public class RollbackToSavepoint {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String insertA = "INSERT INTO students (name, age, city) VALUES ('Amit', 22, 'Pune')";\r
        String insertB = "INSERT INTO students (name, age, city) VALUES ('Sneha', 21, 'Chennai')";\r
        String insertC = "INSERT INTO students (name, age, city) VALUES ('Raj', 23, 'Jaipur')";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password)) {\r
            conn.setAutoCommit(false);\r
\r
            Savepoint sp1 = null;\r
            try (Statement stmt = conn.createStatement()) {\r
                stmt.executeUpdate(insertA);\r
                sp1 = conn.setSavepoint("sp1");\r
\r
                stmt.executeUpdate(insertB);\r
                // Simulate an error\r
                if (true) throw new SQLException("Simulated error after insertB");\r
\r
                stmt.executeUpdate(insertC);\r
                conn.commit();\r
            } catch (SQLException e) {\r
                System.out.println("Error: " + e.getMessage());\r
                if (sp1 != null) {\r
                    conn.rollback(sp1);\r
                    System.out.println("Rolled back to savepoint. InsertA preserved.");\r
                } else {\r
                    conn.rollback();\r
                    System.out.println("No savepoint, full rollback.");\r
                }\r
                // Now commit the partial work (insertA)\r
                conn.commit();\r
            }\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,i=`import java.sql.*;\r
\r
public class ReleaseSavepointDemo {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String insertX = "INSERT INTO students (name, age, city) VALUES ('X', 20, 'Xcity')";\r
        String insertY = "INSERT INTO students (name, age, city) VALUES ('Y', 21, 'Ycity')";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password)) {\r
            conn.setAutoCommit(false);\r
\r
            try (Statement stmt = conn.createStatement()) {\r
                stmt.executeUpdate(insertX);\r
                Savepoint sp = conn.setSavepoint("sp");\r
                stmt.executeUpdate(insertY);\r
\r
                // We decide we no longer need the savepoint\r
                conn.releaseSavepoint(sp);\r
                System.out.println("Savepoint released.");\r
\r
                // Now we cannot rollback to sp\r
                try {\r
                    conn.rollback(sp); // This will throw SQLException\r
                } catch (SQLException e) {\r
                    System.out.println("Cannot rollback to released savepoint: " + e.getMessage());\r
                }\r
\r
                // Commit the transaction\r
                conn.commit();\r
                System.out.println("Transaction committed.");\r
            } catch (SQLException e) {\r
                conn.rollback();\r
                e.printStackTrace();\r
            }\r
        } catch (SQLException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,g=()=>{const t=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark:bg-gray-900 dark:text-gray-200 min-h-screen py-8 px-4 transition-colors duration-300",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-4xl mx-auto space-y-12",children:[e.jsxs("section",{className:"animate-[fadeSlideUp_0.6s_ease-out]","aria-label":"Introduction to Commit, Rollback, Savepoint",children:[e.jsx("h1",{className:"text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4",children:"💾 Commit, Rollback, and Savepoint"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In the previous topic, we learned about transactions and the basic ",e.jsx("code",{children:"commit()"})," and ",e.jsx("code",{children:"rollback()"}),"methods. Now we go a step further: ",e.jsx("strong",{children:"savepoints"})," allow partial rollbacks within a transaction. This gives you finer control when a complex transaction needs to undo only part of its work."]}),e.jsxs("p",{className:"mt-2 text-md",children:[e.jsx("span",{className:"font-semibold",children:"Abhronila"})," from Ichapur is processing a batch of student registrations. If one registration fails, she doesn't want to lose all previous successful inserts. Savepoints let her mark a point and rollback only to that point."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.7s_ease-out] space-y-4","aria-label":"Commit and Rollback recap",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🔁 Commit & Rollback – Quick Recap"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("svg",{className:"w-8 h-8 text-green-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("h3",{className:"text-xl font-bold",children:"commit()"})]}),e.jsx("p",{className:"mt-2",children:"Permanently saves all changes made since the last commit/rollback. Once committed, changes are visible to other transactions and survive failures."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("svg",{className:"w-8 h-8 text-red-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),e.jsx("h3",{className:"text-xl font-bold",children:"rollback()"})]}),e.jsx("p",{className:"mt-2",children:"Undoes all changes made since the last commit/rollback, restoring the database to the state at the start of the transaction."})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.8s_ease-out] space-y-4","aria-label":"Savepoint concept",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"📍 Savepoints – Partial Rollback"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-inner flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 600 200",className:"w-full max-w-2xl",stroke:"currentColor",fill:"none",strokeWidth:"2",children:[e.jsx("line",{x1:"50",y1:"100",x2:"550",y2:"100",className:"stroke-gray-400 dark:stroke-gray-500",strokeDasharray:"4 4"}),e.jsx("circle",{cx:"50",cy:"100",r:"8",className:"stroke-indigo-500 fill-indigo-100 dark:fill-indigo-900/20"}),e.jsx("text",{x:"40",y:"70",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"Start"}),e.jsx("circle",{cx:"200",cy:"100",r:"8",className:"stroke-amber-500 fill-amber-100 dark:fill-amber-900/20"}),e.jsx("text",{x:"190",y:"70",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"SP1"}),e.jsx("circle",{cx:"350",cy:"100",r:"8",className:"stroke-amber-500 fill-amber-100 dark:fill-amber-900/20"}),e.jsx("text",{x:"340",y:"70",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"SP2"}),e.jsx("circle",{cx:"500",cy:"100",r:"8",className:"stroke-green-500 fill-green-100 dark:fill-green-900/20"}),e.jsx("text",{x:"490",y:"70",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"Commit"}),e.jsx("path",{d:"M450 120 L350 120 L350 108",stroke:"red",fill:"none",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"380",y:"140",className:"text-xs fill-red-500",stroke:"none",children:"rollback to SP2"}),e.jsx("rect",{x:"350",y:"80",width:"150",height:"40",fill:"red",fillOpacity:"0.1",stroke:"red",strokeDasharray:"2 2"}),e.jsx("text",{x:"370",y:"70",className:"text-xs fill-red-500",stroke:"none",children:"Undone"})]})}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 text-center",children:"Savepoints act as bookmarks within a transaction. You can rollback to a specific savepoint, undoing only the work done after that point, while preserving earlier changes."})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.9s_ease-out] space-y-4","aria-label":"Savepoint methods",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🧰 Savepoint API"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Connection methods:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded",children:"Savepoint setSavepoint()"}),"– Creates an unnamed savepoint and returns a Savepoint object."]}),e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded",children:"Savepoint setSavepoint(String name)"}),"– Creates a named savepoint."]}),e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded",children:"void rollback(Savepoint savepoint)"}),"– Undoes all changes after the given savepoint."]}),e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded",children:"void releaseSavepoint(Savepoint savepoint)"}),"– Removes a savepoint (makes it unavailable for rollback)."]})]}),e.jsxs("p",{className:"mt-4 text-sm text-amber-600 dark:text-amber-400",children:["⚠️ Not all databases support savepoints. Check using ",e.jsx("code",{children:"DatabaseMetaData.supportsSavepoints()"}),"."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.0s_ease-out] space-y-6","aria-label":"Code examples for savepoints",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🔹 Basic Savepoint Usage"}),e.jsx(n,{fileModule:s,title:"SavepointExample.java",highlightLines:[9,10,11,12,13,14,15,16,17]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Rolling Back to a Savepoint on Error"}),e.jsx(n,{fileModule:r,title:"RollbackToSavepoint.java",highlightLines:[9,10,11,14,15,16,17,18,21]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Releasing Savepoints"}),e.jsx(n,{fileModule:i,title:"ReleaseSavepointDemo.java",highlightLines:[11,12,13,14,15]})]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border-l-4 border-indigo-400",children:e.jsxs("p",{className:"text-sm font-medium text-indigo-800 dark:text-indigo-200",children:["💡 ",e.jsx("strong",{children:"Observe carefully:"})," After rolling back to a savepoint, the savepoint still exists and can be used again. What happens if you try to rollback to a released savepoint?"]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.1s_ease-out] space-y-3","aria-label":"Common mistakes",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-red-200 dark:border-red-800 pb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-red-700 dark:text-red-300",children:[e.jsx("li",{children:"Assuming all databases support savepoints – always check first."}),e.jsx("li",{children:"Using savepoints without disabling auto-commit – savepoints only work in manual transaction mode."}),e.jsx("li",{children:"Trying to rollback to a savepoint after commit – savepoints are cleared after commit or full rollback."}),e.jsx("li",{children:"Releasing a savepoint then attempting to rollback to it – causes SQLException."}),e.jsx("li",{children:"Naming savepoints with names that are not unique within the transaction."}),e.jsxs("li",{children:["Not handling ",e.jsx("code",{children:"SQLException"})," when creating savepoints – may indicate lack of support."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.2s_ease-out] space-y-3","aria-label":"Best practices",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-green-200 dark:border-green-800 pb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-green-800 dark:text-green-200",children:[e.jsx("li",{children:"Use named savepoints for better readability and debugging."}),e.jsx("li",{children:"Always release savepoints when they are no longer needed to free resources."}),e.jsx("li",{children:"Keep the number of savepoints reasonable – too many can impact performance."}),e.jsx("li",{children:"Document the savepoint strategy in complex transactions."}),e.jsx("li",{children:"Test rollback-to-savepoint logic thoroughly, including error paths."}),e.jsx("li",{children:"Prefer savepoints over splitting transactions when partial success is acceptable."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.3s_ease-out] space-y-3","aria-label":"Professional tips",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-amber-200 dark:border-amber-800 pb-2",children:"🧠 Tips & Tricks"}),e.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Nested savepoints:"})," You can create multiple savepoints sequentially – rolling back to an earlier one invalidates later savepoints."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Savepoint names:"}),' Use meaningful names like "before_insert_batch" or "after_validation".']}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Check support:"})," Use ",e.jsx("code",{children:"conn.getMetaData().supportsSavepoints()"})," before attempting."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Performance:"})," Savepoints add overhead – use them judiciously, not for every single row."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Swadeep's trick:"})," In long-running batch jobs, set a savepoint every 100 records; if a record fails, rollback to the last savepoint and skip the problematic record."]})]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.4s_ease-out] space-y-3","aria-label":"Teacher's note",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"👩‍🏫 Teacher's Note"}),e.jsxs("div",{className:a("bg-indigo-100 dark:bg-indigo-900/40 p-5 rounded-xl","transition-all duration-300 hover:shadow-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/60"),children:[e.jsx("p",{className:"font-bold text-indigo-900 dark:text-indigo-100",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-indigo-800 dark:text-indigo-200",children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsxs("p",{className:"text-sm mt-1",children:["💼 ",t," years of experience in Programming, RDBMS, OS, Web Development."]}),e.jsxs("p",{className:"mt-3",children:[e.jsx("span",{className:"font-semibold",children:"Point to remember:"})," Savepoints are like bookmarks in a long document. Students often think rollback always undoes everything – savepoints give surgical precision.",e.jsx("br",{}),e.jsx("span",{className:"italic",children:`"Debangshu, imagine you're writing a long essay and you save draft versions. If you don't like the last paragraph, you can go back to the previous draft without losing the whole essay."`})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.5s_ease-out] space-y-3","aria-label":"Quick checklist",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-2",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:"✔️ I understand the purpose of savepoints in transactions."}),e.jsxs("li",{children:["✔️ I know how to create a savepoint using ",e.jsx("code",{children:"setSavepoint()"}),"."]}),e.jsx("li",{children:"✔️ I can rollback to a specific savepoint."}),e.jsxs("li",{children:["✔️ I understand the difference between ",e.jsx("code",{children:"rollback()"})," and ",e.jsx("code",{children:"rollback(Savepoint)"}),"."]}),e.jsx("li",{children:"✔️ I know when to release a savepoint."}),e.jsx("li",{children:"✔️ I am aware that not all databases support savepoints."})]})})]})]})]})};export{g as default};
