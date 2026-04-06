import{j as e}from"./index-CAtQrb46.js";import{J as r}from"./JavaFileLoader-DAfvF06L.js";import"./JavaCodeBlock-BJaKHduy.js";import"./prism-Bh7twZJ6.js";import"./browser-a81X0uhP.js";import"./prism-java-BwO6k4I_.js";const a=`package com.example.beans;\r
\r
import java.io.Serializable;\r
\r
public class Student implements Serializable {\r
    private static final long serialVersionUID = 1L;\r
    \r
    private String name;\r
    private int age;\r
    private String course;\r
    \r
    // Public no-argument constructor\r
    public Student() {\r
        this.name = "Unknown";\r
        this.age = 0;\r
        this.course = "Not assigned";\r
    }\r
    \r
    // Getters and setters\r
    public String getName() {\r
        return name;\r
    }\r
    \r
    public void setName(String name) {\r
        this.name = name;\r
    }\r
    \r
    public int getAge() {\r
        return age;\r
    }\r
    \r
    public void setAge(int age) {\r
        this.age = age;\r
    }\r
    \r
    public String getCourse() {\r
        return course;\r
    }\r
    \r
    public void setCourse(String course) {\r
        this.course = course;\r
    }\r
}`,n=`<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>\r
<!DOCTYPE html>\r
<html>\r
<head>\r
    <title>useBean Example</title>\r
</head>\r
<body>\r
    <h2>Creating a JavaBean</h2>\r
    \r
    <jsp:useBean id="student" class="com.example.beans.Student" scope="page" />\r
    \r
    <p>Bean created successfully. Default name: <jsp:getProperty name="student" property="name" /></p>\r
    <p>Default age: <jsp:getProperty name="student" property="age" /></p>\r
</body>\r
</html>`,i=`<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>\r
<!DOCTYPE html>\r
<html>\r
<head>\r
    <title>setProperty Example</title>\r
</head>\r
<body>\r
    <h2>Populating a Bean from Request</h2>\r
    \r
    <jsp:useBean id="student" class="com.example.beans.Student" scope="request" />\r
    \r
    <!-- Automatically match all request parameters to bean properties -->\r
    <jsp:setProperty name="student" property="*" />\r
    \r
    <p>Name: <jsp:getProperty name="student" property="name" /></p>\r
    <p>Age: <jsp:getProperty name="student" property="age" /></p>\r
    <p>Course: <jsp:getProperty name="student" property="course" /></p>\r
    \r
    <hr>\r
    <p>Try accessing this page with: <code>?name=Swadeep&age=20&course=BCA</code></p>\r
</body>\r
</html>`,l=`<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>\r
<!DOCTYPE html>\r
<html>\r
<head>\r
    <title>getProperty Example</title>\r
</head>\r
<body>\r
    <h2>Displaying Bean Properties</h2>\r
    \r
    <jsp:useBean id="student" class="com.example.beans.Student" scope="page" />\r
    \r
    <!-- Manually set some properties -->\r
    <jsp:setProperty name="student" property="name" value="Tuhina" />\r
    <jsp:setProperty name="student" property="age" value="22" />\r
    <jsp:setProperty name="student" property="course" value="MCA" />\r
    \r
    <h3>Student Details:</h3>\r
    <ul>\r
        <li>Name: <jsp:getProperty name="student" property="name" /></li>\r
        <li>Age: <jsp:getProperty name="student" property="age" /></li>\r
        <li>Course: <jsp:getProperty name="student" property="course" /></li>\r
    </ul>\r
</body>\r
</html>`,o=`<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>\r
<!DOCTYPE html>\r
<html>\r
<head>\r
    <title>Scope Example</title>\r
</head>\r
<body>\r
    <h2>Session Scoped Bean</h2>\r
    \r
    <jsp:useBean id="counter" class="com.example.beans.Counter" scope="session" />\r
    \r
    <jsp:setProperty name="counter" property="count" value="0" />\r
    \r
    <%\r
        // Increment counter\r
        counter.setCount(counter.getCount() + 1);\r
    %>\r
    \r
    <p>This page has been accessed <jsp:getProperty name="counter" property="count" /> time(s) in this session.</p>\r
    <p><a href="scope_example.jsp">Refresh</a> to see the count increase.</p>\r
    \r
    <!-- Note: You need a Counter bean for this to work -->\r
    <!-- Counter.java: public class Counter { private int count; // getter/setter } -->\r
</body>\r
</html>`,d=`
  @keyframes fadeSlideUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`,j=()=>{const t=new Date().getFullYear()-1998,s=[100,200,300,400,500,600];return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6 md:p-8 font-sans leading-relaxed",children:[e.jsx("style",{children:d}),e.jsxs("header",{className:"max-w-4xl mx-auto mb-12 text-center animate-[fadeSlideUp_0.6s_ease-out]",style:{animationFillMode:"both"},children:[e.jsx("h1",{className:"text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-3",children:"JavaBeans in JSP"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400",children:"Encapsulating data and logic in reusable components."})]}),e.jsxs("section",{className:"max-w-4xl mx-auto mb-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-[fadeSlideUp_0.6s_ease-out]",style:{animationDelay:`${s[0]}ms`,animationFillMode:"both"},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-3 mb-4",children:"What are JavaBeans?"}),e.jsx("p",{className:"mb-3",children:"A JavaBean is a reusable Java class that follows specific conventions: a public no‑argument constructor, private properties with public getter/setter methods, and it is serializable (optional but common). In JSP, JavaBeans are used to separate data (model) from presentation (view), promoting cleaner, more maintainable code."}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{className:"text-indigo-600 dark:text-indigo-400",children:"Real‑world analogy:"})," ","Think of a student registration form. The ",e.jsx("strong",{children:"JavaBean"})," is like a blank registration card (with fields for name, age, course). The JSP page is the clerk who fills in the card (",e.jsx("code",{children:"jsp:setProperty"}),") and reads information from it (",e.jsx("code",{children:"jsp:getProperty"}),"). Multiple clerks (different JSPs) can use the same card design."]}),e.jsx("div",{className:"mt-4 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800",children:e.jsxs("p",{className:"text-sm italic",children:[e.jsx("span",{className:"font-semibold",children:"💡 Teacher's Note (Sukanta Hui):"})," ",`"Students from Barrackpore often ask why we need beans when we can just use request attributes. Beans enforce a contract – they ensure data is properly encapsulated and reusable across pages. They're the foundation of MVC in JSP."`]})})]}),e.jsxs("section",{className:"max-w-4xl mx-auto mb-12 animate-[fadeSlideUp_0.6s_ease-out]",style:{animationDelay:`${s[1]}ms`,animationFillMode:"both"},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-3 mb-6",children:"How JSP Interacts with JavaBeans"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300",children:e.jsxs("svg",{viewBox:"0 0 700 220",className:"w-full h-auto",preserveAspectRatio:"xMidYMid meet",children:[e.jsxs("g",{transform:"translate(50,60)",children:[e.jsx("rect",{x:"0",y:"0",width:"160",height:"120",rx:"10",fill:"#fef9c3",stroke:"#ca8a04",strokeWidth:"2",className:"transition-all duration-300 hover:fill-yellow-100 dark:hover:fill-yellow-900/50"}),e.jsx("text",{x:"80",y:"25",textAnchor:"middle",fontSize:"14",fontWeight:"bold",fill:"#854d0e",children:"JSP Page"}),e.jsx("text",{x:"80",y:"50",textAnchor:"middle",fontSize:"10",fill:"#854d0e",children:"<jsp:useBean>"}),e.jsx("text",{x:"80",y:"70",textAnchor:"middle",fontSize:"10",fill:"#854d0e",children:"<jsp:setProperty>"}),e.jsx("text",{x:"80",y:"90",textAnchor:"middle",fontSize:"10",fill:"#854d0e",children:"<jsp:getProperty>"})]}),e.jsx("line",{x1:"210",y1:"120",x2:"290",y2:"120",stroke:"#9ca3af",strokeWidth:"2",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;20",dur:"2s",repeatCount:"indefinite"})}),e.jsxs("g",{transform:"translate(310,40)",children:[e.jsx("rect",{x:"0",y:"0",width:"200",height:"160",rx:"10",fill:"#dcfce7",stroke:"#16a34a",strokeWidth:"2",className:"transition-all duration-300 hover:fill-green-100 dark:hover:fill-green-900/50"}),e.jsx("text",{x:"100",y:"25",textAnchor:"middle",fontSize:"14",fontWeight:"bold",fill:"#166534",children:"JavaBean"}),e.jsxs("text",{x:"100",y:"50",textAnchor:"middle",fontSize:"10",fill:"#166534",children:["public class Student ","{"]}),e.jsx("text",{x:"30",y:"70",fontSize:"10",fill:"#166534",children:"- name: String"}),e.jsx("text",{x:"30",y:"90",fontSize:"10",fill:"#166534",children:"- age: int"}),e.jsx("text",{x:"30",y:"110",fontSize:"10",fill:"#166534",children:"+ getName()"}),e.jsx("text",{x:"30",y:"130",fontSize:"10",fill:"#166534",children:"+ setName()"}),e.jsx("text",{x:"30",y:"150",fontSize:"10",fill:"#166534",children:"+ getAge() / setAge()"}),e.jsx("text",{x:"100",y:"175",textAnchor:"middle",fontSize:"10",fill:"#166534",children:"}"})]}),e.jsx("text",{x:"500",y:"120",fontSize:"11",fill:"#6b7280",children:"Scopes: page | request | session | application"})]})})]}),e.jsxs("section",{className:"max-w-4xl mx-auto mb-12 grid gap-6 md:grid-cols-3 animate-[fadeSlideUp_0.6s_ease-out]",style:{animationDelay:`${s[2]}ms`,animationFillMode:"both"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-blue-200 dark:border-blue-900 hover:shadow-lg transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-700",children:[e.jsxs("h3",{className:"text-lg font-semibold text-blue-700 dark:text-blue-400 mb-2 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"🫘"})," <jsp:useBean>"]}),e.jsxs("p",{className:"text-sm mb-2",children:[e.jsx("strong",{children:"Syntax:"})," ",e.jsx("code",{children:'<jsp:useBean id="beanId" class="package.Class" scope="..." />'})]}),e.jsxs("p",{className:"text-sm mb-2",children:[e.jsx("strong",{children:"Purpose:"})," Declares and instantiates a JavaBean (or locates an existing one) in a specified scope."]}),e.jsx("p",{className:"text-sm mb-2",children:e.jsx("strong",{children:"Attributes:"})}),e.jsxs("ul",{className:"text-xs list-disc list-inside mb-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"id"})," – name used to refer to the bean"]}),e.jsxs("li",{children:[e.jsx("code",{children:"class"})," – fully qualified class name"]}),e.jsxs("li",{children:[e.jsx("code",{children:"scope"})," – page, request, session, or application"]}),e.jsxs("li",{children:[e.jsx("code",{children:"type"})," (optional) – type of the bean reference"]}),e.jsxs("li",{children:[e.jsx("code",{children:"beanName"})," (optional) – name for instantiation"]})]}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-2",children:"If the bean already exists in the given scope, it is reused; otherwise a new instance is created."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-green-200 dark:border-green-900 hover:shadow-lg transition-all duration-300 hover:border-green-400 dark:hover:border-green-700",children:[e.jsxs("h3",{className:"text-lg font-semibold text-green-700 dark:text-green-400 mb-2 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"✏️"})," <jsp:setProperty>"]}),e.jsxs("p",{className:"text-sm mb-2",children:[e.jsx("strong",{children:"Syntax:"})," ",e.jsx("code",{children:'<jsp:setProperty name="beanId" property="propName" value="value" />'})]}),e.jsxs("p",{className:"text-sm mb-2",children:[e.jsx("strong",{children:"Purpose:"})," Sets a property of a JavaBean, either from a fixed value or from a request parameter."]}),e.jsx("p",{className:"text-sm mb-2",children:e.jsx("strong",{children:"Special features:"})}),e.jsxs("ul",{className:"text-xs list-disc list-inside mb-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:'property="*"'})," – matches all request parameters to bean properties"]}),e.jsxs("li",{children:[e.jsx("code",{children:'param="requestParam"'})," – uses a specific request parameter"]})]}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-2",children:"Type conversion is automatically performed for primitive types and common types (e.g., String → int)."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-purple-200 dark:border-purple-900 hover:shadow-lg transition-all duration-300 hover:border-purple-400 dark:hover:border-purple-700",children:[e.jsxs("h3",{className:"text-lg font-semibold text-purple-700 dark:text-purple-400 mb-2 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"🔍"})," <jsp:getProperty>"]}),e.jsxs("p",{className:"text-sm mb-2",children:[e.jsx("strong",{children:"Syntax:"})," ",e.jsx("code",{children:'<jsp:getProperty name="beanId" property="propName" />'})]}),e.jsxs("p",{className:"text-sm mb-2",children:[e.jsx("strong",{children:"Purpose:"})," Retrieves the value of a bean property and outputs it to the response."]}),e.jsxs("p",{className:"text-sm mb-2",children:[e.jsx("strong",{children:"Equivalent:"})," In scriptlets: ",e.jsx("code",{children:"<%= bean.getProperty() %>"}),", but cleaner."]}),e.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-2",children:["The property must have a public getter method following the naming convention (e.g., ",e.jsx("code",{children:"getName()"})," for property ",e.jsx("code",{children:"name"}),")."]})]})]}),e.jsxs("section",{className:"max-w-4xl mx-auto mb-12 animate-[fadeSlideUp_0.6s_ease-out]",style:{animationDelay:`${s[3]}ms`,animationFillMode:"both"},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-3 mb-6",children:"Practical Examples"}),e.jsxs("div",{className:"mb-8",children:[e.jsx(r,{fileModule:a,title:"Student.java – A simple JavaBean",highlightLines:[]}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-2",children:"This JavaBean follows the conventions: private fields, public no‑arg constructor, getters/setters."})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx(r,{fileModule:n,title:"useBean_example.jsp – Creating and accessing a bean",highlightLines:[7]}),e.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-2",children:["The ",e.jsx("code",{children:"<jsp:useBean>"})," tag creates a new bean instance (or finds an existing one) in page scope."]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx(r,{fileModule:i,title:"setProperty_example.jsp – Setting properties from request",highlightLines:[8,9,10]}),e.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-2",children:["Using ",e.jsx("code",{children:'property="*"'})," automatically populates bean properties from matching request parameters."]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx(r,{fileModule:l,title:"getProperty_example.jsp – Displaying bean properties",highlightLines:[13,14]}),e.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-2",children:["The ",e.jsx("code",{children:"<jsp:getProperty>"})," tag outputs property values directly."]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx(r,{fileModule:o,title:"scope_example.jsp – Bean across different scopes",highlightLines:[7,18]}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-2",children:"Demonstrates a session‑scoped bean that persists across requests from the same user."})]}),e.jsxs("div",{className:"mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg",children:[e.jsx("p",{className:"text-sm font-medium text-yellow-800 dark:text-yellow-300",children:"🔍 Observe carefully:"}),e.jsxs("p",{className:"text-sm text-yellow-700 dark:text-yellow-400",children:["When using ",e.jsx("code",{children:'property="*"'}),", the request parameter names must exactly match the bean property names. Also, the bean must have a no‑argument constructor; otherwise ",e.jsx("code",{children:"<jsp:useBean>"})," will fail."]})]})]}),e.jsxs("div",{className:"max-w-4xl mx-auto mb-12 grid gap-6 md:grid-cols-2 animate-[fadeSlideUp_0.6s_ease-out]",style:{animationDelay:`${s[4]}ms`,animationFillMode:"both"},children:[e.jsxs("section",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300",children:[e.jsxs("h2",{className:"text-xl font-semibold text-red-600 dark:text-red-400 mb-4 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"⚠️"})," Common Pitfalls"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Missing no‑arg constructor:"})," The bean class must have a public no‑argument constructor."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Property name mismatches:"})," In ",e.jsx("code",{children:'property="*"'}),", request parameter names must match bean property names exactly (case‑sensitive)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to import the bean class:"})," The JSP page must be able to see the bean class (usually in ",e.jsx("code",{children:"WEB-INF/classes"})," or a JAR)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using wrong scope:"})," If you expect the bean to persist across requests, you must use ",e.jsx("code",{children:'scope="session"'}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Misunderstanding type conversion:"})," Automatic conversion works for primitives and common types, but for custom types you need to handle manually."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Scriptlet interference:"})," Mixing scriptlets with bean tags can lead to confusion and errors."]})]})]}),e.jsxs("section",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300",children:[e.jsxs("h2",{className:"text-xl font-semibold text-green-600 dark:text-green-400 mb-4 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"✅"})," Best Practices"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use beans as pure data containers:"})," Avoid business logic inside beans; keep them simple."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Leverage ",e.jsx("code",{children:'property="*"'})," for form processing:"]})," It saves time and reduces code."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Combine with Expression Language (EL):"})," EL can directly access bean properties: ",e.jsx("code",{children:"${student.name}"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Choose the narrowest scope possible:"})," Prefer request scope over session unless you need to persist across requests."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Always specify the full class name in ",e.jsx("code",{children:"class"})," attribute:"]})," Including the package."]}),e.jsx("li",{children:e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"<jsp:useBean>"})," with ",e.jsx("code",{children:"type"})," and ",e.jsx("code",{children:"class"})," for interfaces/abstract classes."]})})]})]})]}),e.jsxs("div",{className:"max-w-4xl mx-auto mb-12 grid gap-6 md:grid-cols-2 animate-[fadeSlideUp_0.6s_ease-out]",style:{animationDelay:`${s[5]}ms`,animationFillMode:"both"},children:[e.jsxs("section",{className:"bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-indigo-200 dark:border-indigo-800",children:[e.jsxs("h2",{className:"text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-2 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"🧑‍🏫"})," Teacher's Note"]}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Sukanta Hui"})," (email: sukantahui@codernaccotax.co.in, mobile: 7003756860)"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Experience:"})," ",t," years (since 1998)"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Skill areas:"})," Programming Languages, RDBMS, Operating Systems, Web Development"]}),e.jsx("hr",{className:"border-indigo-300 dark:border-indigo-700 my-3"}),e.jsxs("p",{className:"italic",children:['"I tell my students from Naihati: a JavaBean is like a well‑organized drawer. You put things in (',e.jsx("code",{children:"setProperty"}),"), take them out (",e.jsx("code",{children:"getProperty"}),'), and you can have the same drawer in different rooms (scopes). Always ensure your drawer (bean) is properly built – with a default constructor and proper getters/setters. This simple habit saves hours of debugging."']})]})]}),e.jsxs("section",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300",children:[e.jsxs("h2",{className:"text-xl font-semibold mb-4 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"📋"})," Mini Checklist"]}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-green-500 mr-2",children:"✓"}),"I know the conventions for a JavaBean (no‑arg constructor, private fields, public getters/setters)."]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-green-500 mr-2",children:"✓"}),"I can use ",e.jsx("code",{children:"<jsp:useBean>"})," to create or locate a bean."]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-green-500 mr-2",children:"✓"}),"I understand how ",e.jsx("code",{children:'property="*"'})," automatically maps request parameters."]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-green-500 mr-2",children:"✓"}),"I can choose the appropriate scope (page, request, session, application)."]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-green-500 mr-2",children:"✓"}),"I can display bean properties using ",e.jsx("code",{children:"<jsp:getProperty>"}),"."]})]})]})]}),e.jsxs("section",{className:"max-w-4xl mx-auto mb-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-[fadeSlideUp_0.6s_ease-out]",style:{animationDelay:"700ms",animationFillMode:"both"},children:[e.jsxs("h2",{className:"text-xl font-semibold text-amber-600 dark:text-amber-400 mb-4 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"💎"})," Professional Tips & Tricks"]}),e.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[e.jsxs("div",{className:"p-3 bg-gray-100 dark:bg-gray-700 rounded-lg",children:[e.jsx("p",{className:"font-medium",children:"🔧 Debugging Tip"}),e.jsxs("p",{className:"text-sm",children:["If ",e.jsx("code",{children:'property="*"'})," doesn't populate your bean, check that the request parameter names exactly match the bean property names. Also ensure the bean has setter methods (e.g., ",e.jsx("code",{children:"setName()"})," for property ",e.jsx("code",{children:"name"}),")."]})]}),e.jsxs("div",{className:"p-3 bg-gray-100 dark:bg-gray-700 rounded-lg",children:[e.jsx("p",{className:"font-medium",children:"🚀 Performance Trick"}),e.jsx("p",{className:"text-sm",children:"Avoid putting large objects in session scope. If you need to keep data across requests, store only an ID and retrieve the full object from a database when needed."})]}),e.jsxs("div",{className:"p-3 bg-gray-100 dark:bg-gray-700 rounded-lg",children:[e.jsx("p",{className:"font-medium",children:"🧠 Maintainability"}),e.jsxs("p",{className:"text-sm",children:["Use a base or abstract bean for common properties (like ",e.jsx("code",{children:"id"}),",",e.jsx("code",{children:"createdDate"}),") to reduce duplication."]})]}),e.jsxs("div",{className:"p-3 bg-gray-100 dark:bg-gray-700 rounded-lg",children:[e.jsx("p",{className:"font-medium",children:"📦 Quick Tip"}),e.jsxs("p",{className:"text-sm",children:["You can combine ",e.jsx("code",{children:"<jsp:setProperty>"})," with a specific ",e.jsx("code",{children:"param"}),"to map a request parameter to a differently named property."]})]})]})]}),e.jsxs("footer",{className:"max-w-4xl mx-auto text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 pt-6",children:[e.jsx("p",{children:"Topic 4: JavaBeans in JSP — Clean separation of data and presentation."}),e.jsx("p",{className:"mt-1",children:"Examples inspired by students from Barrackpore, Shyamnagar, Ichapur, Naihati."})]})]})};export{j as default};
