import{j as e}from"./index-M13epWmp.js";import{c as s}from"./clsx-B-dksMZM.js";import{J as r}from"./JavaFileLoader-IXnK6GM0.js";import"./JavaCodeBlock-BtexpujI.js";import"./prism-__2n-qyh.js";import"./browser-TC9_T_od.js";import"./prism-java-BwO6k4I_.js";const a=`import java.sql.*;\r
import java.io.FileInputStream;\r
import java.io.IOException;\r
\r
public class BlobInsert {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/libraryDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String sql = "INSERT INTO books (title, cover_image, description) VALUES (?, ?, ?)";\r
        String imagePath = "book_cover.jpg"; // assume this file exists\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             PreparedStatement pstmt = conn.prepareStatement(sql);\r
             FileInputStream fis = new FileInputStream(imagePath)) {\r
\r
            pstmt.setString(1, "Java Programming");\r
            // Set BLOB parameter using input stream (streaming)\r
            pstmt.setBinaryStream(2, fis, fis.available()); // .available() gives file size (for small files)\r
            // For very large files, better to pass length separately or use setBinaryStream with no length\r
            pstmt.setString(3, "A comprehensive guide to Java.");\r
\r
            int rows = pstmt.executeUpdate();\r
            System.out.println(rows + " row(s) inserted with BLOB.");\r
\r
        } catch (SQLException | IOException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,i=`import java.sql.*;\r
import java.io.FileOutputStream;\r
import java.io.IOException;\r
import java.io.InputStream;\r
\r
public class BlobRetrieve {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/libraryDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String sql = "SELECT cover_image FROM books WHERE id = ?";\r
        int bookId = 1; // assume this ID exists\r
        String outputFile = "retrieved_cover.jpg";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
\r
            pstmt.setInt(1, bookId);\r
            try (ResultSet rs = pstmt.executeQuery()) {\r
                if (rs.next()) {\r
                    // Get the BLOB as an input stream\r
                    try (InputStream is = rs.getBinaryStream("cover_image");\r
                         FileOutputStream fos = new FileOutputStream(outputFile)) {\r
\r
                        byte[] buffer = new byte[1024];\r
                        int bytesRead;\r
                        while ((bytesRead = is.read(buffer)) != -1) {\r
                            fos.write(buffer, 0, bytesRead);\r
                        }\r
                        System.out.println("Image saved to " + outputFile);\r
                    }\r
                }\r
            }\r
        } catch (SQLException | IOException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,n=`import java.sql.*;\r
import java.io.FileReader;\r
import java.io.IOException;\r
\r
public class ClobInsert {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/libraryDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String sql = "INSERT INTO books (title, description) VALUES (?, ?)";\r
        String descriptionPath = "book_description.txt"; // assume this file exists\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             PreparedStatement pstmt = conn.prepareStatement(sql);\r
             FileReader fr = new FileReader(descriptionPath)) {\r
\r
            pstmt.setString(1, "Effective Java");\r
            // Set CLOB parameter using character stream\r
            pstmt.setCharacterStream(2, fr);\r
\r
            int rows = pstmt.executeUpdate();\r
            System.out.println(rows + " row(s) inserted with CLOB.");\r
\r
        } catch (SQLException | IOException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,l=`import java.sql.*;\r
import java.io.Reader;\r
import java.io.FileWriter;\r
import java.io.IOException;\r
\r
public class ClobRetrieve {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/libraryDB";\r
        String user = "root";\r
        String password = "password";\r
\r
        String sql = "SELECT description FROM books WHERE id = ?";\r
        int bookId = 1; // assume this ID exists\r
        String outputFile = "retrieved_description.txt";\r
\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
\r
            pstmt.setInt(1, bookId);\r
            try (ResultSet rs = pstmt.executeQuery()) {\r
                if (rs.next()) {\r
                    // Get the CLOB as a character stream\r
                    try (Reader reader = rs.getCharacterStream("description");\r
                         FileWriter writer = new FileWriter(outputFile)) {\r
\r
                        char[] buffer = new char[1024];\r
                        int charsRead;\r
                        while ((charsRead = reader.read(buffer)) != -1) {\r
                            writer.write(buffer, 0, charsRead);\r
                        }\r
                        System.out.println("Description saved to " + outputFile);\r
                    }\r
                }\r
            }\r
        } catch (SQLException | IOException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,b=()=>{const t=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark:bg-gray-900 dark:text-gray-200 min-h-screen py-8 px-4 transition-colors duration-300",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-4xl mx-auto space-y-12",children:[e.jsxs("section",{className:"animate-[fadeSlideUp_0.6s_ease-out]","aria-label":"Introduction to BLOB and CLOB",children:[e.jsx("h1",{className:"text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4",children:"🖼️ Handling BLOB and CLOB Data"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["Databases can store more than just numbers and short strings. ",e.jsx("strong",{children:"BLOB"})," (Binary Large Object) is used for binary data like images, PDFs, or audio files. ",e.jsx("strong",{children:"CLOB"})," (Character Large Object) stores large character data, such as entire books or XML documents. JDBC provides methods to read and write these large objects efficiently."]}),e.jsxs("p",{className:"mt-2 text-md",children:[e.jsx("span",{className:"font-semibold",children:"Tuhina"})," from Shyamnagar is building a digital library system. She needs to store book covers (images) and full‑text book descriptions (CLOB) in the database. JDBC's BLOB/CLOB support makes this possible."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.7s_ease-out] space-y-4","aria-label":"BLOB vs CLOB comparison",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"📊 BLOB vs CLOB"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:s("bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700"),children:[e.jsxs("div",{className:"flex items-center space-x-3 mb-2",children:[e.jsx("svg",{className:"w-10 h-10 text-blue-600 dark:text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})}),e.jsx("h3",{className:"text-xl font-bold",children:"BLOB"})]}),e.jsx("p",{children:"Binary Large Object – stores binary data (images, videos, files)."}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-2",children:[e.jsxs("li",{children:["JDBC type: ",e.jsx("code",{children:"Types.BLOB"})]}),e.jsxs("li",{children:["Java mapping: ",e.jsx("code",{children:"byte[]"}),", ",e.jsx("code",{children:"InputStream"})]}),e.jsxs("li",{children:["Methods: ",e.jsx("code",{children:"setBinaryStream()"}),", ",e.jsx("code",{children:"getBinaryStream()"}),", ",e.jsx("code",{children:"setBytes()"}),", ",e.jsx("code",{children:"getBytes()"})]})]})]}),e.jsxs("div",{className:s("bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700"),children:[e.jsxs("div",{className:"flex items-center space-x-3 mb-2",children:[e.jsx("svg",{className:"w-10 h-10 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),e.jsx("h3",{className:"text-xl font-bold",children:"CLOB"})]}),e.jsx("p",{children:"Character Large Object – stores large text data (books, XML, JSON)."}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-2",children:[e.jsxs("li",{children:["JDBC type: ",e.jsx("code",{children:"Types.CLOB"})]}),e.jsxs("li",{children:["Java mapping: ",e.jsx("code",{children:"String"}),", ",e.jsx("code",{children:"Reader"})]}),e.jsxs("li",{children:["Methods: ",e.jsx("code",{children:"setCharacterStream()"}),", ",e.jsx("code",{children:"getCharacterStream()"}),", ",e.jsx("code",{children:"setString()"}),", ",e.jsx("code",{children:"getString()"})]})]})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.8s_ease-out] space-y-4","aria-label":"Table structure",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🗂️ Example Table Schema"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:[e.jsx("pre",{className:"text-sm bg-gray-100 dark:bg-gray-900 p-4 rounded overflow-x-auto",children:`CREATE TABLE books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    cover_image BLOB,                -- stores the book cover image
    description CLOB                  -- stores the full book description
);`}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:["MySQL, PostgreSQL, Oracle all support BLOB and CLOB types, though type names may vary (e.g., ",e.jsx("code",{children:"TEXT"})," for large text in MySQL)."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.9s_ease-out] space-y-4","aria-label":"BLOB storage flow",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"📥 Storing a BLOB (Image)"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-inner flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 600 150",className:"w-full max-w-2xl",stroke:"currentColor",fill:"none",strokeWidth:"2",children:[e.jsx("rect",{x:"20",y:"30",width:"80",height:"60",rx:"4",className:"stroke-indigo-400 fill-indigo-50 dark:fill-indigo-900/20"}),e.jsx("text",{x:"40",y:"70",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"image.jpg"}),e.jsx("rect",{x:"120",y:"20",width:"100",height:"40",rx:"4",className:"stroke-emerald-400 fill-emerald-50 dark:fill-emerald-900/20"}),e.jsx("text",{x:"140",y:"45",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"FileInputStream"}),e.jsx("rect",{x:"240",y:"20",width:"120",height:"40",rx:"4",className:"stroke-sky-400 fill-sky-50 dark:fill-sky-900/20"}),e.jsx("text",{x:"260",y:"45",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"PreparedStatement"}),e.jsx("text",{x:"250",y:"60",className:"text-[8px] fill-gray-500",stroke:"none",children:"setBinaryStream()"}),e.jsx("rect",{x:"380",y:"30",width:"80",height:"60",rx:"4",className:"stroke-purple-400 fill-purple-50 dark:fill-purple-900/20"}),e.jsx("text",{x:"400",y:"70",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"Database"}),e.jsx("path",{d:"M100 60 L120 40",className:"stroke-gray-400 dark:stroke-gray-500",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M220 40 L240 40",className:"stroke-gray-400 dark:stroke-gray-500",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M360 40 L380 60",className:"stroke-gray-400 dark:stroke-gray-500",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite"})})]})}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 text-center",children:["The image file is read as a stream and sent to the database via ",e.jsx("code",{children:"setBinaryStream()"}),"."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.0s_ease-out] space-y-6","aria-label":"Code examples for BLOB and CLOB",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🔹 Inserting a BLOB (Image)"}),e.jsx(r,{fileModule:a,title:"BlobInsert.java",highlightLines:[7,8,9,10,11,12,13,14,15,16]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Retrieving a BLOB"}),e.jsx(r,{fileModule:i,title:"BlobRetrieve.java",highlightLines:[6,7,8,9,10,11,12,13,14,15,16,17,18,19]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Inserting a CLOB (Large Text)"}),e.jsx(r,{fileModule:n,title:"ClobInsert.java",highlightLines:[6,7,8,9,10,11,12,13]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Retrieving a CLOB"}),e.jsx(r,{fileModule:l,title:"ClobRetrieve.java",highlightLines:[6,7,8,9,10,11,12,13,14,15,16]})]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border-l-4 border-indigo-400",children:e.jsxs("p",{className:"text-sm font-medium text-indigo-800 dark:text-indigo-200",children:["💡 ",e.jsx("strong",{children:"Observe carefully:"})," For very large files (GBs), reading the entire file into a byte array (",e.jsx("code",{children:"setBytes()"}),") may cause memory issues. Always use streaming methods (",e.jsx("code",{children:"setBinaryStream()"}),",",e.jsx("code",{children:"setCharacterStream()"}),") for large objects."]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.1s_ease-out] space-y-3","aria-label":"Common mistakes",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-red-200 dark:border-red-800 pb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-red-700 dark:text-red-300",children:[e.jsxs("li",{children:["Using ",e.jsx("code",{children:"setBytes()"})," or ",e.jsx("code",{children:"getBytes()"})," for very large files – leads to memory overflow."]}),e.jsx("li",{children:"Forgetting to close streams (FileInputStream, etc.) – resource leaks."}),e.jsx("li",{children:"Not setting the content length correctly – some databases need to know the length."}),e.jsx("li",{children:"Assuming all databases support the same BLOB/CLOB method names (e.g., Oracle uses different approach)."}),e.jsx("li",{children:"Storing large objects in the database without considering performance – sometimes file system is better."}),e.jsxs("li",{children:["Not handling ",e.jsx("code",{children:"SQLException"})," properly when streams are interrupted."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.2s_ease-out] space-y-3","aria-label":"Best practices",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-green-200 dark:border-green-800 pb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-green-800 dark:text-green-200",children:[e.jsxs("li",{children:["Always use streaming methods (",e.jsx("code",{children:"setBinaryStream"}),", ",e.jsx("code",{children:"getBinaryStream"}),") for large objects."]}),e.jsx("li",{children:"Close input/output streams in finally blocks or use try-with-resources."}),e.jsx("li",{children:"Consider storing only the file path in the database and files on disk if the files are very large (videos)."}),e.jsx("li",{children:"Set appropriate fetch size for CLOBs to avoid memory issues."}),e.jsxs("li",{children:["Use database-specific optimizations (e.g., Oracle's ",e.jsx("code",{children:"BLOB"})," and ",e.jsx("code",{children:"CLOB"})," locators)."]}),e.jsx("li",{children:"Test with realistic file sizes to ensure performance."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.3s_ease-out] space-y-3","aria-label":"Professional tips",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-amber-200 dark:border-amber-800 pb-2",children:"🧠 Tips & Tricks"}),e.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"BLOB length:"})," Use ",e.jsx("code",{children:"preparedStatement.setBinaryStream(paramIndex, inputStream, file.length())"}),"to give the database a hint about the size (improves performance)."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"CLOB from file:"})," For a text file, use ",e.jsx("code",{children:"new FileReader(file)"})," with ",e.jsx("code",{children:"setCharacterStream"}),"."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Partial reading:"})," You can read BLOB/CLOB in chunks using streams to process large data without loading it all."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Database limits:"})," Know your database's maximum BLOB/CLOB size (MySQL's LONGBLOB can store up to 4GB)."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Swadeep's trick:"})," For thumbnails, store the image as BLOB, but also store a thumbnail version to speed up listing pages."]})]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.4s_ease-out] space-y-3","aria-label":"Teacher's note",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"👩‍🏫 Teacher's Note"}),e.jsxs("div",{className:s("bg-indigo-100 dark:bg-indigo-900/40 p-5 rounded-xl","transition-all duration-300 hover:shadow-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/60"),children:[e.jsx("p",{className:"font-bold text-indigo-900 dark:text-indigo-100",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-indigo-800 dark:text-indigo-200",children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsxs("p",{className:"text-sm mt-1",children:["💼 ",t," years of experience in Programming, RDBMS, OS, Web Development."]}),e.jsxs("p",{className:"mt-3",children:[e.jsx("span",{className:"font-semibold",children:"Point to remember:"})," Many students think storing images in the database is always bad – it's actually a valid approach for small to medium files and when transactional integrity is required. Teach them to choose based on use case.",e.jsx("br",{}),e.jsx("span",{className:"italic",children:'"Debangshu, if you need to keep the image and metadata in sync (e.g., medical records), database BLOB is great. For serving millions of images, a CDN + file system is better."'})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.5s_ease-out] space-y-3","aria-label":"Quick checklist",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-2",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:"✔️ I understand the difference between BLOB and CLOB."}),e.jsx("li",{children:"✔️ I can insert an image (BLOB) into the database using streaming."}),e.jsx("li",{children:"✔️ I can retrieve and save a BLOB to a file."}),e.jsx("li",{children:"✔️ I can store and retrieve large text (CLOB) using character streams."}),e.jsx("li",{children:"✔️ I know to always use streaming for large objects."}),e.jsx("li",{children:"✔️ I am aware of the trade‑offs of storing files in the database vs. file system."})]})})]})]})]})};export{b as default};
