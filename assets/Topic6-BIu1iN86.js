import{j as e}from"./index-nd0Xa-ab.js";import{c as a}from"./clsx-B-dksMZM.js";import{J as s}from"./JavaFileLoader-D5Y3d47h.js";import"./JavaCodeBlock-vLsYJXXm.js";import"./prism-BoExQATs.js";import"./browser-C-utrmoZ.js";import"./prism-java-BwO6k4I_.js";const n=`<?xml version="1.0" encoding="UTF-8"?>\r
<project xmlns="http://maven.apache.org/POM/4.0.0"\r
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\r
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 \r
         http://maven.apache.org/xsd/maven-4.0.0.xsd">\r
    <modelVersion>4.0.0</modelVersion>\r
\r
    <groupId>com.example</groupId>\r
    <artifactId>my-webapp</artifactId>\r
    <version>1.0-SNAPSHOT</version>\r
    <packaging>war</packaging>\r
\r
    <properties>\r
        <maven.compiler.source>11</maven.compiler.source>\r
        <maven.compiler.target>11</maven.compiler.target>\r
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\r
    </properties>\r
\r
    <dependencies>\r
        <!-- Servlet API (provided by the server) -->\r
        <dependency>\r
            <groupId>javax.servlet</groupId>\r
            <artifactId>javax.servlet-api</artifactId>\r
            <version>4.0.1</version>\r
            <scope>provided</scope>\r
        </dependency>\r
\r
        <!-- Optional: JSP API if you use JSP -->\r
        <dependency>\r
            <groupId>javax.servlet.jsp</groupId>\r
            <artifactId>javax.servlet.jsp-api</artifactId>\r
            <version>2.3.3</version>\r
            <scope>provided</scope>\r
        </dependency>\r
\r
        <!-- JSTL (if needed) -->\r
        <dependency>\r
            <groupId>javax.servlet</groupId>\r
            <artifactId>jstl</artifactId>\r
            <version>1.2</version>\r
        </dependency>\r
    </dependencies>\r
\r
    <build>\r
        <finalName>my-webapp</finalName>\r
        <plugins>\r
            <plugin>\r
                <groupId>org.apache.maven.plugins</groupId>\r
                <artifactId>maven-war-plugin</artifactId>\r
                <version>3.3.2</version>\r
            </plugin>\r
        </plugins>\r
    </build>\r
</project>`,r=`plugins {\r
    id 'war'\r
    id 'java'\r
}\r
\r
group = 'com.example'\r
version = '1.0-SNAPSHOT'\r
\r
sourceCompatibility = '11'\r
targetCompatibility = '11'\r
\r
repositories {\r
    mavenCentral()\r
}\r
\r
dependencies {\r
    // Servlet API (provided by the server)\r
    providedCompile 'javax.servlet:javax.servlet-api:4.0.1'\r
\r
    // JSP API (provided)\r
    providedCompile 'javax.servlet.jsp:javax.servlet.jsp-api:2.3.3'\r
\r
    // JSTL\r
    implementation 'javax.servlet:jstl:1.2'\r
}\r
\r
war {\r
    archiveName = 'my-webapp.war'\r
}`,t=`import java.io.IOException;\r
import java.io.PrintWriter;\r
import javax.servlet.ServletException;\r
import javax.servlet.annotation.WebServlet;\r
import javax.servlet.http.HttpServlet;\r
import javax.servlet.http.HttpServletRequest;\r
import javax.servlet.http.HttpServletResponse;\r
\r
/**\r
 * A simple "Hello World" Servlet to test the development environment.\r
 */\r
@WebServlet("/hello")\r
public class HelloWorldServlet extends HttpServlet {\r
\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
\r
        resp.setContentType("text/html");\r
        PrintWriter out = resp.getWriter();\r
        out.println("<html><head><title>Hello</title></head><body>");\r
        out.println("<h1>Hello, World!</h1>");\r
        out.println("<p>Your development environment is working!</p>");\r
        out.println("</body></html>");\r
    }\r
}`;function h(){return e.jsxs("div",{className:"dark",children:[e.jsx("main",{className:a("min-h-screen bg-gray-50 px-4 py-12 font-sans leading-relaxed text-gray-800","dark:bg-gray-900 dark:text-gray-200","motion-safe:animate-[fadeIn_0.6s_ease-out]"),children:e.jsxs("div",{className:"mx-auto max-w-4xl space-y-8",children:[e.jsxs("header",{className:a("border-l-4 border-blue-600 pl-4","motion-safe:animate-[slideUp_0.5s_ease-out]"),children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Setting Up Development Environment"}),e.jsx("p",{className:"mt-2 text-lg text-gray-600 dark:text-gray-400",children:"IDEs, Build Tools, and Project Structure"})]}),e.jsxs("section",{className:a("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[100ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Why a Proper Setup Matters"}),e.jsx("p",{className:"mb-3",children:"A well‑configured development environment saves hours of frustration. It includes an IDE (Integrated Development Environment) for writing code, a build tool for managing dependencies and compiling, and a server for deployment. In this topic, we'll set up everything needed to start building Java web applications."}),e.jsx("p",{children:"Whether you choose Eclipse, IntelliJ IDEA, or VS Code, the core concepts remain the same. We'll also introduce Maven and Gradle – the industry standards for dependency management and build automation."})]}),e.jsxs("section",{className:a("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[200ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Choosing an IDE"}),e.jsxs("div",{className:"grid gap-4 sm:grid-cols-3",children:[e.jsxs("div",{className:"rounded-lg border-l-4 border-purple-600 bg-purple-50 p-4 dark:bg-purple-900/20",children:[e.jsx("h3",{className:"font-bold text-purple-800 dark:text-purple-300",children:"Eclipse"}),e.jsx("p",{className:"text-sm",children:"Free, open‑source, widely used in academia. Excellent plugin ecosystem (Maven, Tomcat, etc.). Great for learning."})]}),e.jsxs("div",{className:"rounded-lg border-l-4 border-orange-600 bg-orange-50 p-4 dark:bg-orange-900/20",children:[e.jsx("h3",{className:"font-bold text-orange-800 dark:text-orange-300",children:"IntelliJ IDEA"}),e.jsx("p",{className:"text-sm",children:"Community edition is free. Industry favorite, with smart code completion and deep framework support. Ultimate edition adds EE features."})]}),e.jsxs("div",{className:"rounded-lg border-l-4 border-blue-600 bg-blue-50 p-4 dark:bg-blue-900/20",children:[e.jsx("h3",{className:"font-bold text-blue-800 dark:text-blue-300",children:"VS Code"}),e.jsx("p",{className:"text-sm",children:"Lightweight, extensible with Java extensions. Good for microservices and modern workflows, but less integrated for EE."})]})]}),e.jsxs("p",{className:"mt-4",children:[e.jsx("span",{className:"font-semibold",children:"Teacher's advice:"})," Start with Eclipse or IntelliJ Community – both are free and have excellent Java EE support. Tuhina uses IntelliJ, while Debangshu prefers Eclipse; both work well for the projects in Barrackpore."]})]}),e.jsxs("section",{className:a("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[300ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Build Tools: Maven vs Gradle"}),e.jsx("p",{className:"mb-3",children:"Build tools automate compiling, testing, packaging, and dependency management. Instead of manually downloading JARs, you declare them in a configuration file, and the tool fetches them from repositories."}),e.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-blue-700 dark:text-blue-300",children:"Apache Maven"}),e.jsxs("ul",{className:"list-inside list-disc text-sm",children:[e.jsxs("li",{children:["Uses ",e.jsx("code",{children:"pom.xml"})," for configuration."]}),e.jsx("li",{children:"Convention over configuration – standard project layout."}),e.jsx("li",{children:"Extensive plugin ecosystem."}),e.jsx("li",{children:"Steep learning curve but widely adopted."})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-green-700 dark:text-green-300",children:"Gradle"}),e.jsxs("ul",{className:"list-inside list-disc text-sm",children:[e.jsxs("li",{children:["Uses Groovy or Kotlin DSL (",e.jsx("code",{children:"build.gradle"}),")."]}),e.jsx("li",{children:"More flexible and faster than Maven (incremental builds)."}),e.jsx("li",{children:"Preferred for Android and modern projects."}),e.jsx("li",{children:"Can be simpler for small projects."})]})]})]}),e.jsx("p",{className:"mt-3",children:"For this course, we'll use Maven because of its prevalence in enterprise Java and simpler XML syntax. But the concepts translate directly to Gradle."})]}),e.jsxs("section",{className:a("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[400ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Sample Configuration Files"}),e.jsxs("p",{className:"mb-4",children:["Below are typical ",e.jsx("code",{children:"pom.xml"})," (Maven) and ",e.jsx("code",{children:"build.gradle"}),"(Gradle) files for a simple Servlet‑based web application."]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(s,{fileModule:n,title:"pom.xml (Maven)",highlightLines:[10,15,20]}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Maven configuration declaring project metadata, dependencies, and build plugins (like the war plugin for packaging)."})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(s,{fileModule:r,title:"build.gradle (Gradle)",highlightLines:[5,9,13]}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Equivalent Gradle build script using the Groovy DSL."})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(s,{fileModule:t,title:"HelloWorldServlet.java",highlightLines:[7,12]}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"A minimal Servlet that can be built and deployed using the above configurations."})]})]}),e.jsxs("section",{className:a("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[500ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Step‑by‑Step Setup (Using Eclipse + Maven + Tomcat)"}),e.jsxs("ol",{className:"list-inside list-decimal space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold",children:"Install Java JDK:"})," Download and install JDK 11 or 17 from Oracle or OpenJDK. Set ",e.jsx("code",{children:"JAVA_HOME"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold",children:"Install an IDE:"})," Eclipse IDE for Enterprise Java Developers (includes Maven and Tomcat integration)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold",children:"Install Apache Tomcat:"})," Download and extract Tomcat 10 (or 9). In Eclipse, add it as a Server runtime."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold",children:"Create a Maven project:"})," File → New → Maven Project. Choose the ",e.jsx("code",{children:"maven‑archetype‑webapp"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold",children:"Add dependencies:"})," In",e.jsx("code",{children:"pom.xml"}),", add the Servlet API dependency (scope provided)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold",children:"Write your first Servlet:"})," Create a Java class extending ",e.jsx("code",{children:"HttpServlet"}),", annotate with",e.jsx("code",{children:"@WebServlet"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold",children:"Build and deploy:"})," Right‑click project → Run As → Run on Server. Tomcat will start and open your app in the browser."]})]})]}),e.jsxs("section",{className:a("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[600ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Real‑World Context"}),e.jsx("p",{className:"mb-3",children:"In professional environments, the setup is often standardized by the team. Many companies use Maven or Gradle with a corporate repository (like Nexus or Artifactory) to cache dependencies. IDEs are a matter of preference, but IntelliJ is dominant in startups, while Eclipse is still common in large enterprises."}),e.jsxs("p",{children:["When Swadeep interned at a Barrackpore IT firm, he was given a Maven project and told to import it into Eclipse. Understanding the structure and the ",e.jsx("code",{children:"pom.xml"})," allowed him to start contributing immediately."]})]}),e.jsxs("section",{className:a("rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20","border border-blue-200 dark:border-blue-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[700ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"💡 Tips & Tricks"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Use an archetype:"})," Maven archetypes generate a ready‑to‑run project skeleton. The ",e.jsx("code",{children:"maven-archetype-webapp"}),"is perfect for web apps."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Leverage IDE shortcuts:"})," In Eclipse,",e.jsx("code",{children:"Ctrl+Shift+O"})," organizes imports; in IntelliJ, ",e.jsx("code",{children:"Ctrl+Alt+O"}),"."]}),e.jsxs("li",{children:[e.jsxs("span",{className:"font-medium",children:["Keep ",e.jsx("code",{children:"pom.xml"})," tidy:"]})," Use",e.jsx("code",{children:"<properties>"})," for version numbers to avoid duplication."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Tomcat logs:"})," Check the console output in Eclipse – it shows deployment status and errors."]})]})]}),e.jsxs("section",{className:a("rounded-lg bg-red-50 p-6 dark:bg-red-900/20","border border-red-200 dark:border-red-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[800ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"⚠️ Common Mistakes Beginners Make"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsxs("li",{children:[e.jsxs("span",{className:"font-medium",children:["Missing ",e.jsx("code",{children:"JAVA_HOME"}),":"]})," Many tools (Maven, Tomcat) rely on this environment variable. If not set, you'll get cryptic errors."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Incorrect Tomcat version:"})," Using Tomcat 10 with Jakarta EE 9+ packages (",e.jsx("code",{children:"jakarta.servlet"}),") instead of ",e.jsx("code",{children:"javax.servlet"})," will cause ",e.jsx("code",{children:"ClassNotFoundException"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Forgetting to add Servlet API dependency:"})," ","Without it, your code won't compile. Remember to set scope to",e.jsx("code",{children:"provided"})," because the server already includes it."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Not refreshing the project:"})," After changing ",e.jsx("code",{children:"pom.xml"}),", you need to update the project (Maven → Update Project) to download new dependencies."]})]})]}),e.jsxs("section",{className:a("rounded-lg bg-green-50 p-6 dark:bg-green-900/20","border border-green-200 dark:border-green-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[900ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Use a build tool from day one:"})," Even for small projects, Maven or Gradle enforce a standard structure and manage dependencies."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Keep dependencies up‑to‑date:"})," Use the latest stable versions, but be aware of major changes (like Jakarta EE)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Version control everything:"})," Include",e.jsx("code",{children:"pom.xml"}),", but exclude IDE‑specific files (add them to",e.jsx("code",{children:".gitignore"}),")."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Understand the directory layout:"})," ",e.jsx("code",{children:"src/main/java"})," for sources, ",e.jsx("code",{children:"src/main/webapp"})," for web resources (JSP, HTML, ",e.jsx("code",{children:"WEB-INF"}),")."]})]})]}),e.jsxs("section",{className:a("rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20","border border-yellow-200 dark:border-yellow-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[1000ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"📋 Mini Checklist – What to Remember"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsxs("li",{children:["☐ JDK installed and ",e.jsx("code",{children:"JAVA_HOME"})," set."]}),e.jsx("li",{children:"☐ IDE installed (Eclipse or IntelliJ)."}),e.jsx("li",{children:"☐ Tomcat (or another server) downloaded and configured in IDE."}),e.jsx("li",{children:"☐ Maven or Gradle installed (or use IDE bundled)."}),e.jsx("li",{children:"☐ Maven project created with webapp archetype."}),e.jsxs("li",{children:["☐ Servlet API dependency added with scope ",e.jsx("code",{children:"provided"}),"."]}),e.jsxs("li",{children:["☐ Project structure: ",e.jsx("code",{children:"src/main/java"}),", ",e.jsx("code",{children:"src/main/webapp"}),"."]})]})]}),e.jsxs("section",{className:a("rounded-lg bg-indigo-50 p-6 dark:bg-indigo-900/20","border border-indigo-200 dark:border-indigo-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[1100ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"🤔 Think About…"}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-medium",children:"Observe carefully:"})," In the",e.jsx("code",{children:"pom.xml"}),", why is the Servlet API dependency scope set to",e.jsx("code",{children:"provided"}),"? (Hint: who provides the actual JAR at runtime?)"]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"Try changing this:"})," What happens if you change the scope to ",e.jsx("code",{children:"compile"})," and package the app? Will it still run on Tomcat? Why or why not?"]})]}),e.jsxs("section",{className:a("rounded-lg bg-purple-50 p-6 dark:bg-purple-900/20","border border-purple-200 dark:border-purple-800","transition-all duration-300 hover:shadow-xl hover:scale-[1.01]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"👨‍🏫 Teacher’s Note – Sukanta Hui"}),e.jsxs("div",{className:"flex flex-col gap-2 sm:flex-row",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Sukanta Hui"})," (27 years of experience in Programming, RDBMS, OS, and Web Development)"]}),e.jsxs("p",{className:"mb-2",children:["📧"," ",e.jsx("a",{href:"mailto:sukantahui@codernaccotax.co.in",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"sukantahui@codernaccotax.co.in"})]}),e.jsx("p",{children:"📞 7003756860"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"italic",children:["“Setting up the environment is the first real challenge for any developer. I've seen students spend hours on a problem that was simply a missing ",e.jsx("code",{children:"JAVA_HOME"})," or an incorrect Tomcat version. My advice: follow the steps methodically, and when something fails, read the error message carefully – it often tells you exactly what's wrong. Abhronila once spent an afternoon debugging a '404' only to realize she hadn't deployed the app. Don't skip the basics.”"]}),e.jsxs("p",{className:"mt-2 text-sm",children:[e.jsx("span",{className:"font-semibold",children:"Remember:"})," A solid setup saves days of frustration later."]})]})]})]})]})}),e.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animation-delay-\\[100ms\\] { animation-delay: 100ms; }
        .animation-delay-\\[200ms\\] { animation-delay: 200ms; }
        .animation-delay-\\[300ms\\] { animation-delay: 300ms; }
        .animation-delay-\\[400ms\\] { animation-delay: 400ms; }
        .animation-delay-\\[500ms\\] { animation-delay: 500ms; }
        .animation-delay-\\[600ms\\] { animation-delay: 600ms; }
        .animation-delay-\\[700ms\\] { animation-delay: 700ms; }
        .animation-delay-\\[800ms\\] { animation-delay: 800ms; }
        .animation-delay-\\[900ms\\] { animation-delay: 900ms; }
        .animation-delay-\\[1000ms\\] { animation-delay: 1000ms; }
        .animation-delay-\\[1100ms\\] { animation-delay: 1100ms; }

        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-\\[fadeIn_0\\.6s_ease-out\\],
          .motion-safe\\:animate-\\[slideUp_0\\.5s_ease-out\\] {
            animation: none !important;
          }
        }
      `})]})}export{h as default};
