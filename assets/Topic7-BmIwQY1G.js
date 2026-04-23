import{j as e}from"./index-CmAIoOXN.js";import{c as s}from"./clsx-B-dksMZM.js";import{T as t}from"./TeacherSukantaHui-1LCiMfJM.js";import{J as a}from"./JavaFileLoader-BTzcqr9I.js";import"./git-branch-AzLzm2E2.js";import"./JavaCodeBlock-BglY1nU3.js";import"./prism-6Oj8TI1J.js";import"./browser-n5DCIAUE.js";import"./prism-java-BwO6k4I_.js";const n=`package com.example.tags;\r
\r
import javax.servlet.jsp.JspException;\r
import javax.servlet.jsp.tagext.SimpleTagSupport;\r
import java.io.IOException;\r
\r
public class HelloTag extends SimpleTagSupport {\r
    @Override\r
    public void doTag() throws JspException, IOException {\r
        getJspContext().getOut().print("Hello from a custom tag!");\r
    }\r
}`,i=`<?xml version="1.0" encoding="UTF-8"?>\r
<taglib xmlns="http://java.sun.com/xml/ns/j2ee"\r
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\r
        xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee \r
        http://java.sun.com/xml/ns/j2ee/web-jsptaglibrary_2_0.xsd"\r
        version="2.0">\r
    <tlib-version>1.0</tlib-version>\r
    <short-name>mytags</short-name>\r
    <uri>http://example.com/mytags</uri>\r
\r
    <tag>\r
        <name>hello</name>\r
        <tag-class>com.example.tags.HelloTag</tag-class>\r
        <body-content>empty</body-content>\r
    </tag>\r
\r
    <tag>\r
        <name>greet</name>\r
        <tag-class>com.example.tags.AttributeTag</tag-class>\r
        <body-content>empty</body-content>\r
        <attribute>\r
            <name>name</name>\r
            <required>true</required>\r
            <rtexprvalue>true</rtexprvalue>\r
        </attribute>\r
    </tag>\r
\r
    <tag>\r
        <name>repeat</name>\r
        <tag-class>com.example.tags.BodyTag</tag-class>\r
        <body-content>scriptless</body-content>\r
        <attribute>\r
            <name>count</name>\r
            <required>true</required>\r
            <rtexprvalue>true</rtexprvalue>\r
        </attribute>\r
    </tag>\r
</taglib>`,r=`<%@ taglib uri="http://example.com/mytags" prefix="mytags" %>\r
<html>\r
<body>\r
    <mytags:hello />\r
    <br/>\r
    <mytags:greet name="Swadeep" />\r
    <br/>\r
    <mytags:repeat count="3">\r
        Welcome to Barrackpore! <br/>\r
    </mytags:repeat>\r
</body>\r
</html>`,l=`package com.example.tags;\r
\r
import javax.servlet.jsp.JspException;\r
import javax.servlet.jsp.tagext.SimpleTagSupport;\r
import java.io.IOException;\r
\r
public class AttributeTag extends SimpleTagSupport {\r
    private String name;\r
\r
    public void setName(String name) {\r
        this.name = name;\r
    }\r
\r
    @Override\r
    public void doTag() throws JspException, IOException {\r
        getJspContext().getOut().print("Hello, " + name + "!");\r
    }\r
}`,o=`package com.example.tags;\r
\r
import javax.servlet.jsp.JspException;\r
import javax.servlet.jsp.tagext.SimpleTagSupport;\r
import java.io.IOException;\r
\r
public class BodyTag extends SimpleTagSupport {\r
    private int count;\r
\r
    public void setCount(int count) {\r
        this.count = count;\r
    }\r
\r
    @Override\r
    public void doTag() throws JspException, IOException {\r
        for (int i = 0; i < count; i++) {\r
            getJspBody().invoke(null);\r
        }\r
    }\r
}`,d=`
  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`,b=()=>(new Date().getFullYear(),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:d}),e.jsxs("div",{className:"bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans leading-relaxed",children:[e.jsxs("div",{className:s("max-w-4xl mx-auto px-4 py-8 space-y-8","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]"),children:[e.jsx("h1",{className:"text-4xl font-bold text-indigo-700 dark:text-indigo-400",children:"Custom Tag Libraries"}),e.jsx("p",{className:"text-lg",children:"Custom tags allow you to create reusable, self-contained components in JSP. They encapsulate complex logic behind simple XML-like tags, promoting separation of concerns and reducing scriptlet pollution."})]}),e.jsxs("section",{className:s("max-w-4xl mx-auto px-4 py-8","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","animation-delay-[100ms]"),children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"w-1 h-6 bg-indigo-500 rounded-full"}),"Why Custom Tags?"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8 items-center",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-4",children:"JSP offers built-in tags (like JSTL), but sometimes you need application‑specific functionality. Custom tags let you:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsx("li",{children:"Reuse common presentation logic across many pages."}),e.jsx("li",{children:"Hide complex Java code behind a clean tag interface."}),e.jsx("li",{children:"Make JSP pages easier for web designers to maintain."}),e.jsx("li",{children:"Create a library of domain‑specific components."})]})]}),e.jsx("div",{className:"flex justify-center p-4",children:e.jsxs("svg",{width:"280",height:"160",viewBox:"0 0 280 160",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"stroke-current text-indigo-500 dark:text-indigo-400",children:[e.jsx("rect",{x:"10",y:"20",width:"80",height:"40",rx:"8",className:"fill-gray-200 dark:fill-gray-800 stroke-2"}),e.jsx("text",{x:"20",y:"45",className:"text-xs fill-gray-700 dark:fill-gray-300",children:"JSP"}),e.jsx("path",{d:"M90 40 L120 40 L120 80 L150 80",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("circle",{cx:"160",cy:"80",r:"6",className:"fill-indigo-500"}),e.jsx("text",{x:"170",y:"85",className:"text-xs fill-gray-700 dark:fill-gray-300",children:"Tag Handler"}),e.jsx("path",{d:"M160 86 L160 110 L210 110",stroke:"currentColor",strokeWidth:"2",fill:"none"}),e.jsx("rect",{x:"220",y:"90",width:"50",height:"40",rx:"8",className:"fill-green-100 dark:fill-green-900/30 stroke-2 stroke-green-600"}),e.jsx("text",{x:"230",y:"115",className:"text-xs fill-gray-700 dark:fill-gray-300",children:"Output"})]})})]})]}),e.jsxs("section",{className:s("max-w-4xl mx-auto px-4 py-8","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","animation-delay-[200ms]"),children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"🏗️ How Custom Tags Work"}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300",children:[e.jsx("p",{className:"mb-4",children:"A custom tag consists of three parts:"}),e.jsxs("ul",{className:"list-decimal list-inside space-y-2 ml-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Tag Handler Class"})," – a Java class (usually extending ",e.jsx("code",{children:"SimpleTagSupport"})," or ",e.jsx("code",{children:"TagSupport"}),") that implements the tag's behavior."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tag Library Descriptor (TLD)"})," – an XML file that maps the tag name to the handler class and defines attributes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"JSP Page"})," – uses the tag via the taglib directive."]})]}),e.jsxs("p",{className:"mt-4 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Hint:"})," In JSP 2.0+, you can also use ",e.jsx("strong",{children:"tag files"})," (JSP‑based tags) without writing Java. We'll cover tag files in a later topic."]})]})]}),e.jsxs("section",{className:s("max-w-4xl mx-auto px-4 py-8","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","animation-delay-[300ms]"),children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"📝 Creating a Simple Tag (Hello World)"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl hover:shadow-lg transition-all duration-300",children:[e.jsx("h3",{className:"text-xl font-medium mb-2",children:"1. Write the Tag Handler"}),e.jsxs("p",{className:"mb-4",children:["Extend ",e.jsx("code",{children:"SimpleTagSupport"})," (preferred in JSP 2.0+) and override ",e.jsx("code",{children:"doTag()"}),"."]}),e.jsx(a,{fileModule:n,title:"HelloTag.java",highlightLines:[]})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl hover:shadow-lg transition-all duration-300",children:[e.jsx("h3",{className:"text-xl font-medium mb-2",children:"2. Define the Tag Library Descriptor (TLD)"}),e.jsxs("p",{className:"mb-4",children:["Place this file in ",e.jsx("code",{children:"/WEB-INF/tlds/"})," or any subfolder."]}),e.jsx(a,{fileModule:i,title:"mytags.tld",highlightLines:[]})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl hover:shadow-lg transition-all duration-300",children:[e.jsx("h3",{className:"text-xl font-medium mb-2",children:"3. Use the Tag in a JSP"}),e.jsx("p",{className:"mb-4",children:"Declare the taglib with the URI defined in the TLD."}),e.jsx(a,{fileModule:r,title:"useCustomTag.jsp",highlightLines:[]})]})]})]}),e.jsxs("section",{className:s("max-w-4xl mx-auto px-4 py-8","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","animation-delay-[400ms]"),children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"🏷️ Adding Attributes"}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl hover:shadow-lg transition-all duration-300",children:[e.jsxs("p",{className:"mb-4",children:["Attributes make tags configurable. In the handler, you provide setter methods that match attribute names. The container calls them before ",e.jsx("code",{children:"doTag()"}),"."]}),e.jsx(a,{fileModule:l,title:"AttributeTag.java",highlightLines:[]}),e.jsx("p",{className:"mt-4",children:e.jsx("strong",{children:"Usage in JSP:"})}),e.jsx("pre",{className:"bg-white dark:bg-gray-900 p-4 rounded-lg text-sm",children:'<mytags:greet name="Swadeep" />'}),e.jsxs("p",{className:"mt-4 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Prototype:"})," The tag handler class must have a public setter for each attribute. Attributes are defined in TLD with ",e.jsx("code",{children:"<attribute>"}),"."]})]})]}),e.jsxs("section",{className:s("max-w-4xl mx-auto px-4 py-8","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","animation-delay-[500ms]"),children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"📄 Tags with Body Content"}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl hover:shadow-lg transition-all duration-300",children:[e.jsxs("p",{className:"mb-4",children:["Use ",e.jsx("code",{children:"getJspBody()"})," to access the tag body. The body can be evaluated multiple times."]}),e.jsx(a,{fileModule:o,title:"BodyTag.java",highlightLines:[]}),e.jsx("p",{className:"mt-4",children:e.jsx("strong",{children:"Usage:"})}),e.jsx("pre",{className:"bg-white dark:bg-gray-900 p-4 rounded-lg text-sm",children:`<mytags:repeat count="3">
  Hello from Barrackpore!<br/>
</mytags:repeat>`}),e.jsxs("p",{className:"mt-4 text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Purpose:"})," The body content can be any JSP markup (including other tags), and the tag can invoke it multiple times."]})]})]}),e.jsxs("section",{className:s("max-w-4xl mx-auto px-4 py-8","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","animation-delay-[600ms]"),children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"🔄 Tag Lifecycle (Classic vs Simple)"}),e.jsxs("div",{className:"grid gap-6",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl hover:shadow-lg transition-all duration-300",children:[e.jsx("h3",{className:"text-xl font-medium mb-2",children:"SimpleTag (JSP 2.0+)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:["Simpler: only ",e.jsx("code",{children:"doTag()"})," method."]}),e.jsx("li",{children:"Better performance."}),e.jsx("li",{children:"No need to manage lifecycle flags."})]})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl hover:shadow-lg transition-all duration-300",children:[e.jsx("h3",{className:"text-xl font-medium mb-2",children:"Classic Tag (pre‑JSP 2.0)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsxs("li",{children:["Implements ",e.jsx("code",{children:"Tag"})," or ",e.jsx("code",{children:"BodyTag"}),"."]}),e.jsxs("li",{children:["Lifecycle: ",e.jsx("code",{children:"doStartTag()"}),", ",e.jsx("code",{children:"doAfterBody()"}),", ",e.jsx("code",{children:"doEndTag()"}),"."]}),e.jsx("li",{children:"Still used in legacy code; prefer SimpleTag for new development."})]})]})]})]}),e.jsxs("section",{className:s("max-w-4xl mx-auto px-4 py-8","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","animation-delay-[700ms]"),children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"💡 Tips & Tricks"}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl hover:shadow-lg transition-all duration-300",children:e.jsxs("ul",{className:"list-disc list-inside space-y-3",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use SimpleTagSupport:"})," It's the recommended base class for new tags."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Keep attributes typed:"})," The container automatically converts strings to the setter parameter type (e.g., ",e.jsx("code",{children:"int"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"TLD location:"})," Place TLD files under ",e.jsx("code",{children:"/WEB-INF"})," or any subdirectory; the container will find them."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tag reuse:"})," A single tag handler can be used for multiple tag names by defining multiple ",e.jsx("code",{children:"<tag>"})," entries pointing to the same class."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Nested tags:"})," Use ",e.jsx("code",{children:"getParent()"})," to communicate with the enclosing tag."]})]})})]}),e.jsxs("section",{className:s("max-w-4xl mx-auto px-4 py-8","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","animation-delay-[800ms]"),children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"⚠️ Common Pitfalls"}),e.jsx("div",{className:"bg-red-50 dark:bg-red-900/20 p-6 rounded-xl hover:shadow-lg transition-all duration-300",children:e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Missing setter for attribute:"})," If you declare an attribute in TLD but no setter, you'll get a runtime error."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting the TLD:"})," Without a TLD, the tag is unknown. Make sure the URI in the JSP matches the TLD's ",e.jsx("code",{children:"<uri>"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using scriptlets inside tag body:"})," While allowed, it breaks the tag's reusability. Keep body content clean."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Thread safety:"})," Tag handlers are reused by the container; do not store request‑specific state in instance variables unless you reset them properly."]})]})})]}),e.jsxs("section",{className:s("max-w-4xl mx-auto px-4 py-8","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","animation-delay-[900ms]"),children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"✅ Best Practices"}),e.jsx("div",{className:"bg-green-50 dark:bg-green-900/20 p-6 rounded-xl hover:shadow-lg transition-all duration-300",children:e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Name tags clearly:"})," Use a prefix (e.g., ",e.jsx("code",{children:"mytags"}),") and meaningful names."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Document attributes:"})," Add descriptions in the TLD for tool support."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use JSP 2.0 SimpleTag interface:"})," Avoid classic tag complexity."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Organize tags in libraries:"})," Group related tags in a single TLD."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test tags independently:"})," Write unit tests for tag handlers to ensure correctness."]})]})})]}),e.jsxs("section",{className:s("max-w-4xl mx-auto px-4 py-8","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","animation-delay-[1000ms]"),children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-gray-100 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✔"})," Tag handler extends ",e.jsx("code",{children:"SimpleTagSupport"})," (or implements ",e.jsx("code",{children:"SimpleTag"}),")."]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✔"})," ",e.jsx("code",{children:"doTag()"})," method defined."]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✔"})," TLD file exists with correct ",e.jsx("code",{children:"<uri>"})," and ",e.jsx("code",{children:"<tag>"})," definitions."]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✔"})," Setter methods for all attributes."]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✔"})," Taglib directive in JSP with correct URI."]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✔"})," Tag handler class in ",e.jsx("code",{children:"/WEB-INF/classes"})," or in a JAR under ",e.jsx("code",{children:"/WEB-INF/lib"}),"."]})]})})]}),e.jsx("section",{className:s("max-w-4xl mx-auto px-4 py-8","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","animation-delay-[1100ms]"),children:e.jsx(t,{note:`Custom tags are the foundation of reusable UI components in JSP. 
I always tell students: "Think of them as Java methods that you can call with HTML-like syntax." 
A good starting exercise: Create a tag that displays the current date and time (like <mytags:currentDateTime />). 
Then extend it with a format attribute. 
Remember to emphasize that the tag handler should be stateless – any data needed should be passed as attributes.`})}),e.jsx("div",{className:s("max-w-4xl mx-auto px-4 pb-8","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","animation-delay-[1200ms]"),children:e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 rounded hover:shadow-lg transition-all duration-300",children:[e.jsx("p",{className:"font-medium",children:"💭 Think about..."}),e.jsxs("p",{className:"mt-2",children:["If you create a tag that repeats its body a given number of times (like our ",e.jsx("code",{children:"<repeat>"})," example), what happens if the body contains other custom tags? Does the container still execute them correctly? How could you pass the current iteration index to those nested tags?"]})]})})]})]}));export{b as default};
