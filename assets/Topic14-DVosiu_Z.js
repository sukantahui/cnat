import{j as e}from"./index-CTaFCVvl.js";import{J as t}from"./JavaFileLoader-XLJUUvz7.js";import{T as a}from"./TeacherSukantaHui-CXljMfmu.js";import"./JavaCodeBlock-DY4r9R4l.js";import"./prism-BVjeagNH.js";import"./browser-CZkhuWkG.js";import"./prism-java-BwO6k4I_.js";import"./git-branch-DjtSZz17.js";const r=`package com.example.tags;\r
\r
import javax.servlet.jsp.JspException;\r
import javax.servlet.jsp.tagext.SimpleTagSupport;\r
import java.io.IOException;\r
\r
public class HelloTag extends SimpleTagSupport {\r
    @Override\r
    public void doTag() throws JspException, IOException {\r
        getJspContext().getOut().write("Hello, World!");\r
    }\r
}`,i=`package com.example.tags;\r
\r
import javax.servlet.jsp.JspException;\r
import javax.servlet.jsp.tagext.SimpleTagSupport;\r
import java.io.IOException;\r
\r
public class RepeatTag extends SimpleTagSupport {\r
    private int times;\r
\r
    public void setTimes(int times) {\r
        this.times = times;\r
    }\r
\r
    @Override\r
    public void doTag() throws JspException, IOException {\r
        for (int i = 0; i < times; i++) {\r
            // Invoke the body content once per iteration\r
            getJspBody().invoke(null);\r
        }\r
    }\r
}\r
`,l=`<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>\r
<%@ taglib prefix="my" uri="/WEB-INF/tlds/mytags.tld" %>\r
<html>\r
<body>\r
    <my:hello />\r
    <br/>\r
    <my:repeat times="3">\r
        <p>This line repeats 3 times.</p>\r
    </my:repeat>\r
</body>\r
</html>`,n=`package com.example.tags;\r
\r
import javax.servlet.jsp.JspException;\r
import javax.servlet.jsp.tagext.SimpleTagSupport;\r
import java.io.IOException;\r
\r
public class GreetingTag extends SimpleTagSupport {\r
    private String name;\r
\r
    public void setName(String name) {\r
        this.name = name;\r
    }\r
\r
    @Override\r
    public void doTag() throws JspException, IOException {\r
        getJspContext().getOut().write("Hello, " + name + "!");\r
    }\r
}`,d=`<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>\r
<%@ taglib prefix="my" uri="/WEB-INF/tlds/mytags.tld" %>\r
<html>\r
<body>\r
    <my:greeting name="Swadeep" />\r
</body>\r
</html>`,o=`<?xml version="1.0" encoding="UTF-8"?>\r
<taglib xmlns="http://java.sun.com/xml/ns/javaee"\r
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\r
        xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-jsptaglibrary_2_1.xsd"\r
        version="2.1">\r
    <tlib-version>1.0</tlib-version>\r
    <short-name>my</short-name>\r
    <uri>/WEB-INF/tlds/mytags.tld</uri>\r
\r
    <tag>\r
        <name>hello</name>\r
        <tag-class>com.example.tags.HelloTag</tag-class>\r
        <body-content>empty</body-content>\r
    </tag>\r
\r
    <tag>\r
        <name>repeat</name>\r
        <tag-class>com.example.tags.RepeatTag</tag-class>\r
        <body-content>tagdependent</body-content>\r
        <attribute>\r
            <name>times</name>\r
            <required>true</required>\r
            <rtexprvalue>true</rtexprvalue>\r
        </attribute>\r
    </tag>\r
\r
    <tag>\r
        <name>greeting</name>\r
        <tag-class>com.example.tags.GreetingTag</tag-class>\r
        <body-content>empty</body-content>\r
        <attribute>\r
            <name>name</name>\r
            <required>true</required>\r
            <rtexprvalue>true</rtexprvalue>\r
        </attribute>\r
    </tag>\r
</taglib>`,y=()=>{const s=new Date().getFullYear()-1998;return e.jsxs("div",{className:"w-full max-w-7xl mx-auto px-4 py-8 space-y-12 dark:bg-gray-900 dark:text-gray-100",children:[e.jsxs("div",{className:"text-center space-y-2 animate-[fadeSlideUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent",children:"JSP 2.0 Simple Tag Handlers"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed",children:"Building custom tags with Java classes – simpler and more powerful"})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"What are Simple Tag Handlers?"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]",children:[e.jsxs("p",{className:"leading-relaxed mb-4",children:[e.jsx("strong",{children:"Simple Tag Handlers"})," were introduced in JSP 2.0 as a simpler alternative to the classic tag handlers (Tag, IterationTag, BodyTag). They extend ",e.jsx("code",{children:"javax.servlet.jsp.tagext.SimpleTagSupport"})," and override the ",e.jsx("code",{children:"doTag()"})," method. This approach eliminates complex lifecycle methods and makes custom tag development easier."]}),e.jsxs("p",{className:"leading-relaxed",children:["Simple tags can have attributes, body content, and can be invoked multiple times. They are perfect for creating reusable UI components like",e.jsx("code",{children:"<my:greeting>"})," or ",e.jsx("code",{children:"<my:repeat>"})," without the boilerplate of classic tags."]})]})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.2s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"Simple Tag Lifecycle"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"650",height:"200",viewBox:"0 0 650 200",className:"w-full max-w-3xl h-auto",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#3b82f6"})})}),e.jsx("rect",{x:"20",y:"70",width:"100",height:"60",rx:"8",fill:"#1e293b",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"70",y:"105",textAnchor:"middle",fill:"white",children:"<my:tag>"}),e.jsx("line",{x1:"120",y1:"100",x2:"160",y2:"100",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"170",y:"70",width:"140",height:"60",rx:"8",fill:"#1e293b",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"240",y:"95",textAnchor:"middle",fill:"white",children:"SimpleTagSupport"}),e.jsx("text",{x:"240",y:"115",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"doTag()"}),e.jsx("line",{x1:"310",y1:"100",x2:"350",y2:"100",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"360",y:"70",width:"100",height:"60",rx:"8",fill:"#1e293b",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"410",y:"105",textAnchor:"middle",fill:"white",children:"Output"}),e.jsx("text",{x:"240",y:"155",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"Simple lifecycle – just doTag()"})]})}),e.jsxs("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-4",children:["Simple tag handlers execute all logic in the ",e.jsx("code",{children:"doTag()"})," method, simplifying development."]})]})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.3s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"Key Concepts"}),e.jsxs("div",{className:"grid gap-6 md:grid-cols-2",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-xl hover:scale-105",children:[e.jsx("h3",{className:"text-xl font-bold text-blue-600 dark:text-blue-400 mb-2",children:"SimpleTagSupport"}),e.jsxs("p",{className:"leading-relaxed",children:["Base class for simple tags. Provides methods like ",e.jsx("code",{children:"getJspContext()"}),", ",e.jsx("code",{children:"getJspBody()"}),", and ",e.jsx("code",{children:"setJspBody()"}),"."]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-xl hover:scale-105",children:[e.jsx("h3",{className:"text-xl font-bold text-blue-600 dark:text-blue-400 mb-2",children:"doTag()"}),e.jsx("p",{className:"leading-relaxed",children:"The only method you need to implement. Contains all tag logic: processing attributes, invoking body, and writing output."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-xl hover:scale-105",children:[e.jsx("h3",{className:"text-xl font-bold text-blue-600 dark:text-blue-400 mb-2",children:"Attributes"}),e.jsxs("p",{className:"leading-relaxed",children:["Declared via ",e.jsx("code",{children:"<attribute>"})," in TLD or directly via setter methods in the tag class (convention-based)."]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-xl hover:scale-105",children:[e.jsx("h3",{className:"text-xl font-bold text-blue-600 dark:text-blue-400 mb-2",children:"JspFragment"}),e.jsxs("p",{className:"leading-relaxed",children:["Represents the tag's body content. Can be invoked multiple times via ",e.jsx("code",{children:"invoke()"}),"."]})]})]})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.4s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"1. A Simple Tag Handler (HelloTag)"}),e.jsx(t,{fileModule:r,title:"HelloTag.java",highlightLines:[6,7,8]}),e.jsx("p",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:'This tag outputs "Hello, World!" directly to the response.'})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"2. A Tag with Body (RepeatTag)"}),e.jsx(t,{fileModule:i,title:"RepeatTag.java",highlightLines:[8,9,10,11,12]}),e.jsx("p",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:"Repeats its body content a specified number of times."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"3. JSP Using the Simple Tag"}),e.jsx(t,{fileModule:l,title:"usingSimpleTag.jsp",highlightLines:[3,4,5]}),e.jsx("p",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:"Demonstrates how to use the custom tags in a JSP."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"4. Tag with Attributes (GreetingTag)"}),e.jsx(t,{fileModule:n,title:"GreetingTag.java",highlightLines:[6,7,8,9]}),e.jsxs("p",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:["Accepts a ",e.jsx("code",{children:"name"})," attribute and outputs a personalized greeting."]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"5. JSP Using Tag with Attributes"}),e.jsx(t,{fileModule:d,title:"jspWithAttributes.jsp",highlightLines:[3]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"6. TLD File (Tag Library Descriptor)"}),e.jsx(t,{fileModule:o,title:"mytags.tld",highlightLines:[10,11,12,13,14,15,16]}),e.jsxs("p",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:["Describes the tags and their attributes. Place in ",e.jsx("code",{children:"/WEB-INF/tlds/"}),"."]})]})]})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.5s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"Real-world Applications"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("ul",{className:"list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"UI Components:"})," Create reusable buttons, panels, data grids, etc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Conditional Rendering:"})," Tags that show/hide content based on user roles."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Loop Constructs:"})," Build custom iterators that generate HTML with alternating styles."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Layout Management:"})," Implement templates where content is injected as fragments."]})]}),e.jsxs("p",{className:"mt-4 text-sm italic text-gray-500 dark:text-gray-400",children:["Example: In a school system, a ",e.jsx("code",{children:"<school:studentCard />"})," tag could display a student's photo, name, and grade with consistent styling across pages."]})]})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.6s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"💡 Tips & Tricks"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"getJspContext().getOut()"})," to write directly to the response if you don't need to process the body."]}),e.jsxs("li",{children:["If your tag has a body, you can invoke it multiple times using ",e.jsx("code",{children:"getJspBody().invoke(null)"}),". Pass a ",e.jsx("code",{children:"Writer"})," to capture the output."]}),e.jsxs("li",{children:["For attributes, just add a setter method; the container will automatically set it before calling ",e.jsx("code",{children:"doTag()"}),"."]}),e.jsxs("li",{children:["Use the ",e.jsx("code",{children:"skipBody"})," pattern: if some condition is false, simply skip invoking the body."]}),e.jsxs("li",{children:["Simple tags can also implement ",e.jsx("code",{children:"DynamicAttributes"})," to accept any number of attributes."]})]})})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.7s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"⚠️ Common Mistakes"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Forgetting to declare the tag library in TLD or web.xml:"})," The JSP won't find the tag."]}),e.jsxs("li",{children:["❌ ",e.jsxs("strong",{children:["Not handling ",e.jsx("code",{children:"JspException"})," or ",e.jsx("code",{children:"IOException"})," in ",e.jsx("code",{children:"doTag()"}),":"]})," Always re-throw or wrap them."]}),e.jsxs("li",{children:["❌ ",e.jsxs("strong",{children:["Invoking ",e.jsx("code",{children:"getJspBody()"})," when the tag has no body:"]})," It returns ",e.jsx("code",{children:"null"}),"; always check."]}),e.jsxs("li",{children:["❌ ",e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"out.print()"})," after the body has been invoked multiple times:"]})," The order of writing might be confusing."]}),e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Not making the tag thread‑safe:"})," If you store mutable instance variables, they could be corrupted under concurrent access. Use local variables."]})]})})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.8s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"✅ Best Practices"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsx("li",{children:"Keep tags simple and focused on presentation; move complex logic to helper classes."}),e.jsx("li",{children:"Define a clear TLD with descriptive documentation for each tag and attribute."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"rtexprvalue"})," in TLD to allow EL expressions as attribute values."]}),e.jsxs("li",{children:["Always handle ",e.jsx("code",{children:"JspException"})," and ",e.jsx("code",{children:"IOException"})," properly."]}),e.jsx("li",{children:"For tags that output a lot of HTML, consider using JSP fragments to generate dynamic content."})]})})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.9s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"🔍 Hint Section"}),e.jsxs("div",{className:"bg-blue-50 dark:bg-gray-800/50 border border-blue-200 dark:border-gray-700 rounded-xl p-6",children:[e.jsxs("p",{className:"italic leading-relaxed",children:[e.jsx("strong",{children:"Think about…"})," How would you write a tag that outputs a table with alternating row colors? You can use a loop inside ",e.jsx("code",{children:"doTag()"})," and invoke the body for each row."]}),e.jsxs("p",{className:"mt-3 leading-relaxed",children:[e.jsx("strong",{children:"Observe carefully…"})," In the ",e.jsx("code",{children:"RepeatTag"}),", we used ",e.jsx("code",{children:"getJspBody().invoke(null)"}),". What would happen if we passed a ",e.jsx("code",{children:"StringWriter"})," instead? You could capture the body content and modify it."]}),e.jsxs("p",{className:"mt-3 leading-relaxed",children:[e.jsx("strong",{children:"Try changing this…"})," Modify the ",e.jsx("code",{children:"GreetingTag"})," to also accept a ",e.jsx("code",{children:"greeting"}),' attribute that defaults to "Hello". How would you handle a missing attribute?']})]})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_1s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:e.jsxs("ul",{className:"list-check list-inside space-y-2",children:[e.jsx("li",{children:"✅ Understand the difference between classic and simple tags."}),e.jsx("li",{children:"✅ Know the lifecycle: instantiation → set attributes → setJspBody → doTag."}),e.jsxs("li",{children:["✅ Implement a custom tag by extending ",e.jsx("code",{children:"SimpleTagSupport"})," and overriding ",e.jsx("code",{children:"doTag()"}),"."]}),e.jsx("li",{children:"✅ Declare attributes via setter methods or TLD."}),e.jsxs("li",{children:["✅ Use ",e.jsx("code",{children:"getJspBody()"})," to access body content and invoke it."]}),e.jsxs("li",{children:["✅ Write a TLD file and reference it in JSPs using ",e.jsx("code",{children:"taglib"})," directive."]}),e.jsx("li",{children:"✅ Handle exceptions properly."})]})})]}),e.jsx(a,{note:`Simple tag handlers are a game-changer for JSP developers. In my ${s} years of teaching (since 1998), I've found that students grasp them much faster than the older Tag interface. The key is to remember that everything happens in doTag() – there's no need to manage state across multiple lifecycle methods. 
        A pro tip: if your tag needs to output a lot of HTML, consider using a JSP fragment as the body and invoking it multiple times. This keeps your Java code clean and lets the JSP handle the presentation. 
        Also, when writing tags, always think about thread safety: avoid storing mutable data in instance variables. Use local variables inside doTag() instead. 
        In a school management system, you could create a tag that displays a student profile card, accepting a StudentBean as an attribute and rendering it consistently across the entire application. 
        Remember, tags are meant to be reusable, so design them with flexibility in mind.`})]})};export{y as default};
