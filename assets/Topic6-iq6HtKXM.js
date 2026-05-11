import{r as a,j as e}from"./index-D2oyZ1_5.js";import{J as s}from"./JavaFileLoader-CE9M3qV6.js";import{F as n}from"./FAQTemplate-lA0Xw1k3.js";import{T as o}from"./TeacherSukantaHui-2kQ_fqw6.js";import"./JavaCodeBlock-DLXsyqd0.js";import"./prism-CZHQu0su.js";import"./browser-Ds45x8TN.js";import"./prism-java-BwO6k4I_.js";import"./clsx-B-dksMZM.js";import"./git-branch-DnPGondI.js";const d=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.http.*;\r
import javax.servlet.annotation.*;\r
\r
@WebServlet("/upload")\r
@MultipartConfig(\r
    location = "/var/tmp/uploads",\r
    maxFileSize = 5 * 1024 * 1024,    // 5 MB\r
    maxRequestSize = 10 * 1024 * 1024 // 10 MB\r
)\r
public class FileUploadServlet extends HttpServlet {\r
    private static final String UPLOAD_DIR = "/var/web/uploads";\r
\r
    @Override\r
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        // Ensure upload directory exists\r
        File uploadDir = new File(UPLOAD_DIR);\r
        if (!uploadDir.exists()) uploadDir.mkdirs();\r
\r
        Part filePart = req.getPart("myFile");\r
        String originalFileName = getSubmittedFileName(filePart);\r
        String uniqueFileName = System.currentTimeMillis() + "_" + originalFileName;\r
        String savePath = UPLOAD_DIR + File.separator + uniqueFileName;\r
\r
        filePart.write(savePath);   // Saves to the location specified in @MultipartConfig? No: Part.write uses the location attribute.\r
        // Actually Part.write() uses the @MultipartConfig location value as base directory.\r
        // Better: use filePart.write(savePath) with absolute path? Correct usage: filePart.write(savePath) writes to that exact path.\r
        // So we override the default location.\r
        \r
        // Get description field (ordinary form field)\r
        String desc = req.getParameter("desc");\r
        \r
        resp.setContentType("text/html");\r
        PrintWriter out = resp.getWriter();\r
        out.println("<h2>Uploaded: " + originalFileName + " as " + uniqueFileName + "</h2>");\r
        out.println("<p>Description: " + desc + "</p>");\r
    }\r
    \r
    private String getSubmittedFileName(Part part) {\r
        for (String cd : part.getHeader("Content-Disposition").split(";")) {\r
            if (cd.trim().startsWith("filename")) {\r
                return cd.substring(cd.indexOf('=') + 1).trim().replace("\\"", "");\r
            }\r
        }\r
        return null;\r
    }\r
}`,c=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.http.*;\r
import java.nio.file.*;\r
\r
@WebServlet("/download")\r
public class FileDownloadServlet extends HttpServlet {\r
    private static final String UPLOAD_DIR = "/var/web/uploads";\r
\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        String fileName = req.getParameter("file");\r
        if (fileName == null || fileName.isEmpty() || fileName.contains("..")) {\r
            resp.sendError(HttpServletResponse.SC_BAD_REQUEST);\r
            return;\r
        }\r
        File file = new File(UPLOAD_DIR, fileName);\r
        if (!file.exists() || !file.isFile()) {\r
            resp.sendError(HttpServletResponse.SC_NOT_FOUND);\r
            return;\r
        }\r
\r
        resp.setContentType(Files.probeContentType(file.toPath()));\r
        resp.setHeader("Content-Disposition", "attachment; filename=\\"" + fileName + "\\"");\r
        resp.setContentLengthLong(file.length());\r
\r
        try (InputStream in = new FileInputStream(file);\r
             OutputStream out = resp.getOutputStream()) {\r
            byte[] buffer = new byte[8192];\r
            int bytesRead;\r
            while ((bytesRead = in.read(buffer)) != -1) {\r
                out.write(buffer, 0, bytesRead);\r
            }\r
        }\r
    }\r
}`,h=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.http.*;\r
import javax.servlet.annotation.*;\r
import java.util.Collection;\r
\r
@WebServlet("/multiUpload")\r
@MultipartConfig(maxFileSize = 10 * 1024 * 1024)\r
public class MultiPartServlet extends HttpServlet {\r
    @Override\r
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        Collection<Part> parts = req.getParts();\r
        for (Part part : parts) {\r
            if (part.getSubmittedFileName() != null && part.getSize() > 0) {\r
                String fileName = part.getSubmittedFileName();\r
                part.write("/uploads/" + fileName);\r
            }\r
        }\r
        resp.getWriter().println("Uploaded " + parts.size() + " files.");\r
    }\r
}`,p=`<!DOCTYPE html>\r
<html>\r
<head>\r
    <title>File Upload</title>\r
</head>\r
<body>\r
    <form action="upload" method="post" enctype="multipart/form-data">\r
        <label>Select file:</label>\r
        <input type="file" name="myFile" required/><br/>\r
        <label>Description:</label>\r
        <input type="text" name="desc"/><br/>\r
        <input type="submit" value="Upload"/>\r
    </form>\r
</body>\r
</html>`,x=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.http.*;\r
\r
@WebServlet("/fileList")\r
public class FileListServlet extends HttpServlet {\r
    private static final String UPLOAD_DIR = "/var/web/uploads";\r
\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        File folder = new File(UPLOAD_DIR);\r
        File[] files = folder.listFiles();\r
        resp.setContentType("text/html");\r
        PrintWriter out = resp.getWriter();\r
        out.println("<html><body><ul>");\r
        if (files != null) {\r
            for (File f : files) {\r
                out.println("<li><a href='download?file=" + f.getName() + "'>" + f.getName() + "</a></li>");\r
            }\r
        }\r
        out.println("</ul></body></html>");\r
    }\r
}`,m=[{question:"What is the Part API in Servlet 3.0?",shortAnswer:"A built-in API for processing multipart/form-data file uploads without external libraries.",explanation:"Part objects represent each uploaded file or form field in a multipart request.",hint:"It replaces Apache Commons FileUpload.",level:"basic",codeExample:'Part filePart = request.getPart("fileInput"); filePart.write("/path/saved.txt");'},{question:"Which annotation must be added to a servlet to enable multipart parsing?",shortAnswer:"@MultipartConfig",explanation:"This annotation tells the container to parse the request as multipart/form-data.",hint:"Without it, getPart() throws IllegalStateException.",level:"basic"},{question:"What HTML form attribute is required for file upload?",shortAnswer:"enctype='multipart/form-data'",explanation:"It tells the browser to encode the form as multipart data.",level:"basic"}],P=()=>{const r=a.useRef([]);return a.useEffect(()=>{const t=new IntersectionObserver(i=>{i.forEach(l=>{l.isIntersecting&&(l.target.classList.add("animate-slide-up"),t.unobserve(l.target))})},{threshold:.1});return r.current.forEach(i=>{i&&t.observe(i)}),()=>t.disconnect()},[]),e.jsx("div",{className:"dark min-h-screen bg-gray-950 text-gray-100 font-sans leading-relaxed p-6 md:p-10",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("header",{className:"text-center space-y-4 animate-slide-up",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"File Upload & Download (Part API)"}),e.jsx("p",{className:"text-lg text-gray-300 max-w-2xl mx-auto",children:"Handling multipart form data – upload files, save them, and serve downloads using the built-in Part API (Servlet 3.0+)."})]}),e.jsxs("section",{ref:t=>r.current[0]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-yellow-400 flex items-center gap-2",children:[e.jsx("span",{children:"📁"})," What is the Part API?"]}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Before Servlet 3.0, handling file uploads required external libraries like Apache Commons FileUpload. The ",e.jsx("strong",{children:"Part API"})," (",e.jsx("code",{children:"javax.servlet.http.Part"}),") is a built‑in solution that simplifies multipart/form‑data processing. Each uploaded file is represented as a ",e.jsx("code",{children:"Part"})," object, giving you access to the file content, name, size, and headers."]}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["To enable multipart support, annotate your servlet with ",e.jsx("code",{children:"@MultipartConfig"})," or configure it in ",e.jsx("code",{children:"web.xml"}),". The API automatically parses the request and makes parts available via ",e.jsx("code",{children:"request.getParts()"})," or ",e.jsx("code",{children:"request.getPart(name)"}),"."]}),e.jsx("div",{className:"mt-4 p-4 bg-gray-800/50 rounded-xl border-l-4 border-yellow-500",children:e.jsxs("p",{className:"text-sm italic text-gray-300",children:["📘 ",e.jsx("strong",{children:"Real‑world scenario:"})," At Naihati Public School, students upload assignments via a web form. The ",e.jsx("code",{children:"AssignmentUploadServlet"})," uses Part API to save PDFs and images to a server folder. Later, teachers can download the files using a download servlet."]})})]}),e.jsxs("section",{ref:t=>r.current[1]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-yellow-400",children:"🔄 Upload & Download Workflow"}),e.jsx("div",{className:"mt-6 flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 700 200",className:"w-full max-w-3xl h-auto",children:[e.jsx("rect",{x:"20",y:"40",width:"160",height:"60",rx:"8",fill:"#1e293b",stroke:"#eab308",strokeWidth:"2"}),e.jsx("text",{x:"100",y:"65",textAnchor:"middle",fill:"#fef08a",fontSize:"13",children:"HTML Form"}),e.jsx("text",{x:"100",y:"82",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"enctype=multipart/form-data"}),e.jsx("rect",{x:"230",y:"40",width:"160",height:"60",rx:"8",fill:"#1e293b",stroke:"#eab308",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"310",y:"65",textAnchor:"middle",fill:"#fef08a",fontSize:"13",children:"Upload Servlet"}),e.jsx("text",{x:"310",y:"82",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"@MultipartConfig"}),e.jsx("rect",{x:"460",y:"40",width:"180",height:"60",rx:"8",fill:"#1e293b",stroke:"#eab308",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"2s",begin:"0.8s",repeatCount:"indefinite"})}),e.jsx("text",{x:"550",y:"65",textAnchor:"middle",fill:"#fef08a",fontSize:"13",children:"File Storage"}),e.jsx("text",{x:"550",y:"82",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"/uploads/ on server"}),e.jsx("line",{x1:"180",y1:"70",x2:"228",y2:"70",stroke:"#eab308",strokeWidth:"2",markerEnd:"url(#arrUp)"}),e.jsx("line",{x1:"390",y1:"70",x2:"458",y2:"70",stroke:"#eab308",strokeWidth:"2",markerEnd:"url(#arrUp)"}),e.jsx("rect",{x:"230",y:"130",width:"160",height:"60",rx:"8",fill:"#1e293b",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"310",y:"155",textAnchor:"middle",fill:"#93c5fd",fontSize:"13",children:"Download Servlet"}),e.jsx("text",{x:"310",y:"172",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"File → OutputStream"}),e.jsx("line",{x1:"390",y1:"70",x2:"310",y2:"128",stroke:"#6b7280",strokeWidth:"1.5",strokeDasharray:"4,4"}),e.jsx("line",{x1:"550",y1:"100",x2:"400",y2:"130",stroke:"#6b7280",strokeWidth:"1.5",strokeDasharray:"4,4"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrUp",markerWidth:"8",markerHeight:"8",refX:"6",refY:"4",orient:"auto",children:e.jsx("polygon",{points:"0 0, 8 4, 0 8",fill:"#eab308"})})}),e.jsx("text",{x:"550",y:"195",textAnchor:"middle",fill:"#6b7280",fontSize:"11",children:"Client downloads"})]})}),e.jsx("p",{className:"text-center text-gray-400 text-sm mt-2",children:"Client uploads → Servlet processes → Saves file → Download servlet retrieves and sends file with proper headers"})]}),e.jsxs("section",{ref:t=>r.current[2]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-yellow-400",children:"⚙️ Enabling Multipart Support"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Annotate your servlet with ",e.jsx("code",{children:"@MultipartConfig"})," to tell the container to parse the request as multipart/form-data. You can also specify:"]}),e.jsxs("ul",{className:"list-disc list-inside text-gray-300 mt-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"location"})," – directory for temporary storage (default depends on container)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"maxFileSize"})," – maximum allowed file size (e.g., ",e.jsx("code",{children:"1024 * 1024 * 5"})," for 5MB)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"maxRequestSize"})," – maximum size of entire form (including all parts)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"fileSizeThreshold"})," – size threshold after which file is written to disk"]})]}),e.jsx("div",{className:"mt-4 p-3 bg-gray-800 rounded-lg",children:e.jsx("p",{className:"font-mono text-sm",children:'@MultipartConfig(location = "/tmp", maxFileSize = 10485760, maxRequestSize = 20971520)'})})]}),e.jsxs("section",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-yellow-400",children:"📝 HTML Form for File Upload"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["The form must have ",e.jsx("code",{children:'method="POST"'})," and ",e.jsx("code",{children:'enctype="multipart/form-data"'}),"."]}),e.jsx(s,{fileModule:p,title:"upload.html – Upload Form",highlightLines:[6,7]})]}),e.jsxs("section",{ref:t=>r.current[3]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-yellow-400",children:"📤 File Upload Servlet"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["In the servlet, call ",e.jsx("code",{children:'request.getPart("fileInputName")'})," to obtain the ",e.jsx("code",{children:"Part"})," object. Use its methods: ",e.jsx("code",{children:"getSubmittedFileName()"}),", ",e.jsx("code",{children:"getSize()"}),", ",e.jsx("code",{children:"write(String fileName)"}),", and ",e.jsx("code",{children:"getInputStream()"}),"."]}),e.jsx("div",{className:"mt-5",children:e.jsx(s,{fileModule:d,title:"FileUploadServlet.java – Basic Upload",highlightLines:[20,24,25,29,30]})}),e.jsx("div",{className:"mt-4 p-3 bg-yellow-950/30 border-l-4 border-yellow-500 rounded",children:e.jsxs("p",{className:"text-sm text-gray-200",children:["💡 ",e.jsx("strong",{children:"Important:"})," ",e.jsx("code",{children:"Part.write()"})," is the easiest way to save, but ensure the directory exists. Also sanitize the filename – never trust user input!"]})})]}),e.jsxs("section",{ref:t=>r.current[4]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-yellow-400",children:"📎 Handling Multiple File Uploads"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["For multiple files (HTML5 ",e.jsx("code",{children:"multiple"})," attribute or multiple inputs), iterate over ",e.jsx("code",{children:"request.getParts()"})," and filter by content type or name."]}),e.jsx(s,{fileModule:h,title:"MultiPartServlet.java – Multiple Files",highlightLines:[18,19,20,21,28]})]}),e.jsxs("section",{ref:t=>r.current[5]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-yellow-400",children:"📥 File Download Servlet"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Download is not handled by Part API – you manually read the file from disk and write it to ",e.jsx("code",{children:"response.getOutputStream()"}),". Set correct headers: ",e.jsx("code",{children:"Content-Disposition"})," (attachment/inline) and ",e.jsx("code",{children:"Content-Type"}),"."]}),e.jsx("div",{className:"mt-5",children:e.jsx(s,{fileModule:c,title:"FileDownloadServlet.java – Secure Download",highlightLines:[18,19,20,21,24,28,31]})}),e.jsx("div",{className:"mt-4 p-3 bg-blue-950/30 border-l-4 border-blue-500 rounded",children:e.jsxs("p",{className:"text-sm text-gray-200",children:["💡 ",e.jsx("strong",{children:"Security note:"})," Never accept user input to specify file path directly. Validate against a whitelist or use a mapping (e.g., file ID stored in database)."]})})]}),e.jsxs("section",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-yellow-400",children:"📋 Listing Uploaded Files"}),e.jsx("p",{className:"mt-3 text-gray-300",children:"To provide a download interface, list files from the upload directory or database."}),e.jsx(s,{fileModule:x,title:"FileListServlet.java – Generate Download Links",highlightLines:[12,13,14,16,19]})]}),e.jsxs("section",{ref:t=>r.current[6]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-yellow-400",children:"⚠️ Common Pitfalls (Beginners)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-300 mt-3",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Missing ",e.jsx("code",{children:"@MultipartConfig"}),":"]})," Without this annotation, ",e.jsx("code",{children:"getPart()"})," throws an exception."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Forgetting ",e.jsx("code",{children:'enctype="multipart/form-data"'})," in HTML:"]})," Received as regular form fields, not parts."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Not checking ",e.jsx("code",{children:"Part"})," size:"]})," A file part could be empty if no file selected – call ",e.jsx("code",{children:"getSize() > 0"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hardcoding file paths:"})," Use relative paths or external configuration. Avoid absolute paths that may not exist on all servers."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Directory not writable:"})," Ensure the target folder exists and the servlet container has write permissions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No filename validation:"})," Users can upload malicious filenames (e.g., ",e.jsx("code",{children:"../../../config.xml"}),"). Sanitize or generate unique names."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not closing streams:"})," Even with ",e.jsx("code",{children:"Part.write()"}),", you may need to close ",e.jsx("code",{children:"getInputStream()"})," if used manually."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Download servlet causing memory issues:"})," For large files, read in chunks (buffer) instead of loading entire file into memory."]})]})]}),e.jsxs("section",{ref:t=>r.current[7]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-yellow-400",children:"✅ Best Practices (Industry)"}),e.jsxs("ul",{className:"list-decimal list-inside space-y-2 text-gray-300 mt-3",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always validate file size and type:"})," Check content type via ",e.jsx("code",{children:"Part.getContentType()"})," and limit extensions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Generate unique file names:"})," Use UUID or timestamp + user ID to avoid collisions and path traversal."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Store metadata in a database:"})," Keep original filename, upload time, user, and server path for efficient management."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Upload to a dedicated directory outside the webapp:"})," Prevents direct access to uploaded files. Use a symbolic link or configure a separate servlet to serve them."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Set reasonable timeouts and size limits"})," – protect against denial‑of‑service via large uploads."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"Part.write()"})," with caution:"]})," It saves to the location specified in ",e.jsx("code",{children:"@MultipartConfig"}),". Ensure that location is not web‑accessible."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Download with proper content type:"})," Use ",e.jsx("code",{children:"Files.probeContentType()"})," or a mapping based on extension to set correct MIME type."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Implement access control:"})," Only allow file download if the user owns the file or has permission."]})]})]}),e.jsxs("section",{ref:t=>r.current[8]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-yellow-400",children:"📋 Mini Checklist"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-4",children:["✅ Add @MultipartConfig to Servlet","✅ HTML form with POST and enctype=multipart/form-data","✅ Retrieve Part via request.getPart(name)","✅ Validate file size, type, and filename","✅ Save file using part.write() or InputStream copy","✅ Handle empty parts (no file selected)","✅ Create upload directory if not exists","✅ Use unique filenames to avoid collisions","✅ Download: set Content-Disposition header","✅ Stream file in chunks to avoid memory issues","✅ Protect against path traversal (download)","✅ Log errors and notify user"].map((t,i)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-200 text-sm",children:[e.jsx("span",{className:"text-yellow-400",children:"✓"})," ",t]},i))})]}),e.jsxs("section",{ref:t=>r.current[9]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-yellow-500/30",children:[e.jsx("h2",{className:"text-xl font-semibold text-yellow-400",children:"🧠 Hints – Think Like a Pro"}),e.jsxs("ul",{className:"space-y-2 text-gray-300 italic",children:[e.jsxs("li",{children:["🔍 ",e.jsx("strong",{children:"Observe carefully:"})," When you upload a file, inspect the ",e.jsx("code",{children:"Part"})," headers – they include the original filename in ",e.jsx("code",{children:"Content-Disposition"}),"."]}),e.jsxs("li",{children:["⚙️ ",e.jsx("strong",{children:"Try changing:"})," Omit ",e.jsx("code",{children:"@MultipartConfig"})," and see the exception. Then add it and test with different ",e.jsx("code",{children:"maxFileSize"})," values."]}),e.jsxs("li",{children:["📂 ",e.jsx("strong",{children:"Think about:"})," Why should uploaded files never be stored inside the web application folder? (Hint: someone could guess the URL and download any file)"]}),e.jsxs("li",{children:["🧩 ",e.jsx("strong",{children:"Debug:"})," Use ",e.jsx("code",{children:"part.getInputStream()"})," to read the file content and write it manually – compare with ",e.jsx("code",{children:"part.write()"}),". Which approach gives you more control?"]})]})]}),e.jsx(n,{title:"File Upload & Download (Part API) FAQs",questions:m}),e.jsx("div",{className:"mt-8",children:e.jsx(o,{note:"The Part API is a game‑changer for students who previously used external libraries. Emphasise that the HTML form must be exactly right – one missing enctype and the upload fails. Run a live demo: build a simple profile picture uploader. Show them how to limit file types using `getContentType()` and how to rename files to avoid overwriting. For download, highlight the importance of `Content-Disposition: attachment` for forcing download vs `inline` for displaying in browser. Also discuss security: never trust user-supplied filenames, and always store files outside the web root. A fun exercise: create a shared document repository for the class."})}),e.jsx("footer",{className:"text-center text-gray-500 text-sm pt-8 border-t border-gray-800",children:"Topic 6: File Upload & Download (Part API) – Part of Servlet Mastery Series"})]})})};export{P as default};
