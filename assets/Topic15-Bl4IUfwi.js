import{j as e}from"./index-wvAt8vmb.js";import{c as i}from"./clsx-B-dksMZM.js";import{J as r}from"./JavaFileLoader-DAXNd0zU.js";import"./JavaCodeBlock-CBj_Ta35.js";import"./prism-DcZHCaJ1.js";import"./browser-DJQlkVhD.js";import"./prism-java-BwO6k4I_.js";const a=`import java.io.InputStream;\r
import java.sql.Connection;\r
import java.sql.DriverManager;\r
import java.sql.SQLException;\r
import java.util.Properties;\r
\r
public class PropertiesLoader {\r
    public static void main(String[] args) {\r
        Properties props = new Properties();\r
        \r
        // Load properties file from classpath\r
        try (InputStream input = PropertiesLoader.class.getClassLoader()\r
                .getResourceAsStream("db.properties")) {\r
            \r
            if (input == null) {\r
                System.err.println("Sorry, unable to find db.properties");\r
                return;\r
            }\r
            \r
            props.load(input);\r
            \r
            // Get values\r
            String url = props.getProperty("db.url");\r
            String user = props.getProperty("db.username");\r
            String password = props.getProperty("db.password");\r
            \r
            // Connect to database\r
            try (Connection conn = DriverManager.getConnection(url, user, password)) {\r
                System.out.println("Connected to database using properties!");\r
                System.out.println("URL: " + url);\r
            } catch (SQLException e) {\r
                e.printStackTrace();\r
            }\r
            \r
        } catch (Exception e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,t=`import com.zaxxer.hikari.HikariConfig;\r
import com.zaxxer.hikari.HikariDataSource;\r
import java.io.InputStream;\r
import java.sql.Connection;\r
import java.sql.SQLException;\r
import java.util.Properties;\r
\r
public class DataSourceFromProperties {\r
    public static void main(String[] args) {\r
        Properties props = new Properties();\r
        \r
        try (InputStream input = DataSourceFromProperties.class.getClassLoader()\r
                .getResourceAsStream("db.properties")) {\r
            \r
            props.load(input);\r
            \r
            // Create HikariCP config from properties\r
            HikariConfig config = new HikariConfig();\r
            config.setJdbcUrl(props.getProperty("db.url"));\r
            config.setUsername(props.getProperty("db.username"));\r
            config.setPassword(props.getProperty("db.password"));\r
            config.setMaximumPoolSize(Integer.parseInt(props.getProperty("db.pool.size", "10")));\r
            \r
            try (HikariDataSource dataSource = new HikariDataSource(config);\r
                 Connection conn = dataSource.getConnection()) {\r
                System.out.println("Connected via HikariCP using properties!");\r
            }\r
            \r
        } catch (Exception e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,n=`import java.io.InputStream;\r
import java.sql.Connection;\r
import java.sql.DriverManager;\r
import java.sql.SQLException;\r
import java.util.Properties;\r
\r
public class MultiEnvProperties {\r
    public static void main(String[] args) {\r
        // Determine environment (could come from system property, environment variable, etc.)\r
        String env = System.getProperty("app.env", "dev"); // default to dev\r
        String fileName = "application-" + env + ".properties";\r
        \r
        Properties props = new Properties();\r
        \r
        try (InputStream input = MultiEnvProperties.class.getClassLoader()\r
                .getResourceAsStream(fileName)) {\r
            \r
            if (input == null) {\r
                System.err.println("Sorry, unable to find " + fileName);\r
                return;\r
            }\r
            \r
            props.load(input);\r
            \r
            String url = props.getProperty("db.url");\r
            String user = props.getProperty("db.username");\r
            String password = props.getProperty("db.password");\r
            \r
            System.out.println("Loading configuration for environment: " + env);\r
            System.out.println("URL: " + url);\r
            \r
            try (Connection conn = DriverManager.getConnection(url, user, password)) {\r
                System.out.println("Connection successful!");\r
            }\r
            \r
        } catch (Exception e) {\r
            e.printStackTrace();\r
        }\r
    }\r
}`,h=()=>{const s=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark:bg-gray-900 dark:text-gray-200 min-h-screen py-8 px-4 transition-colors duration-300",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-4xl mx-auto space-y-12",children:[e.jsxs("section",{className:"animate-[fadeSlideUp_0.6s_ease-out]","aria-label":"Introduction to Database Configuration Using Properties Files",children:[e.jsx("h1",{className:"text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4",children:"⚙️ Database Configuration Using Properties Files"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["Hardcoding database URLs, usernames, and passwords in Java source code is a bad practice. It makes the application inflexible, harder to maintain, and poses a security risk.",e.jsx("strong",{className:"text-indigo-600 dark:text-indigo-400",children:" Properties files"})," provide a simple way to externalize configuration. You can change database settings without recompiling, and even have different configurations for development, testing, and production."]}),e.jsxs("p",{className:"mt-2 text-md",children:[e.jsx("span",{className:"font-semibold",children:"Swadeep"})," from Barrackpore is deploying his application to a cloud server. The database credentials are different from his local machine. By using a properties file, he can just replace the file on the server without touching the code."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.7s_ease-out] space-y-4","aria-label":"Properties file format",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"📄 Properties File Format"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:[e.jsxs("p",{className:"mb-2",children:["A properties file is a simple text file with key=value pairs. Lines starting with ",e.jsx("code",{children:"#"})," are comments."]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-900 p-3 rounded text-sm overflow-x-auto",children:`# Database configuration for development
db.url=jdbc:mysql://localhost:3306/schoolDB
db.username=root
db.password=secret
db.pool.size=10`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Keys are case‑sensitive and usually follow a dot‑separated naming convention."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.8s_ease-out] space-y-4","aria-label":"Loading properties in Java",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"📥 Loading Properties in Java"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:[e.jsxs("p",{className:"mb-2",children:["Use the ",e.jsx("code",{children:"java.util.Properties"})," class to load a properties file from the classpath or file system."]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-900 p-3 rounded text-sm overflow-x-auto",children:`Properties props = new Properties();
// Load from classpath
try (InputStream input = getClass().getClassLoader().getResourceAsStream("db.properties")) {
    props.load(input);
}
// Access values
String url = props.getProperty("db.url");
String user = props.getProperty("db.username");
String password = props.getProperty("db.password");`})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.9s_ease-out] space-y-4","aria-label":"Configuration separation diagram",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🔀 Separating Config from Code"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-inner flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 600 180",className:"w-full max-w-2xl",stroke:"currentColor",fill:"none",strokeWidth:"2",children:[e.jsx("rect",{x:"20",y:"20",width:"120",height:"60",rx:"8",className:"stroke-indigo-500 fill-indigo-50 dark:fill-indigo-900/20"}),e.jsx("text",{x:"40",y:"55",className:"text-sm fill-gray-800 dark:fill-gray-200",stroke:"none",children:"Java Code"}),e.jsx("text",{x:"30",y:"75",className:"text-[8px] fill-gray-500",stroke:"none",children:"(compiled .class)"}),e.jsx("rect",{x:"220",y:"20",width:"120",height:"60",rx:"8",className:"stroke-emerald-500 fill-emerald-50 dark:fill-emerald-900/20"}),e.jsx("text",{x:"240",y:"55",className:"text-sm fill-gray-800 dark:fill-gray-200",stroke:"none",children:"db.properties"}),e.jsx("text",{x:"250",y:"75",className:"text-[8px] fill-gray-500",stroke:"none",children:"(plain text)"}),e.jsx("rect",{x:"420",y:"20",width:"120",height:"60",rx:"8",className:"stroke-purple-500 fill-purple-50 dark:fill-purple-900/20"}),e.jsx("text",{x:"450",y:"55",className:"text-sm fill-gray-800 dark:fill-gray-200",stroke:"none",children:"Database"}),e.jsx("path",{d:"M140 50 L220 50",className:"stroke-gray-400 dark:stroke-gray-500",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"160",y:"30",className:"text-[8px] fill-gray-500",stroke:"none",children:"reads config"}),e.jsx("path",{d:"M340 50 L420 50",className:"stroke-gray-400 dark:stroke-gray-500",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"360",y:"30",className:"text-[8px] fill-gray-500",stroke:"none",children:"connects with"}),e.jsx("text",{x:"260",y:"120",className:"text-xs fill-amber-600 dark:fill-amber-400",stroke:"none",children:"Different per environment"})]})}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 text-center",children:"The same compiled code can work with different properties files for dev, test, and production."})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.0s_ease-out] space-y-6","aria-label":"Code examples for properties file usage",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🔹 Loading Properties and Connecting with DriverManager"}),e.jsx(r,{fileModule:a,title:"PropertiesLoader.java",highlightLines:[7,8,9,10,11,12,13,14,15,16,17,18]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Using Properties with HikariCP DataSource"}),e.jsx(r,{fileModule:t,title:"DataSourceFromProperties.java",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16,17,18]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Multiple Environment Properties (dev, test, prod)"}),e.jsx(r,{fileModule:n,title:"MultiEnvProperties.java",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]})]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border-l-4 border-indigo-400",children:e.jsxs("p",{className:"text-sm font-medium text-indigo-800 dark:text-indigo-200",children:["💡 ",e.jsx("strong",{children:"Think about:"})," How would you handle sensitive information like passwords in properties files when the file might be checked into version control? (Hint: use environment variables or encrypted values.)"]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.1s_ease-out] space-y-3","aria-label":"Common mistakes",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-red-200 dark:border-red-800 pb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-red-700 dark:text-red-300",children:[e.jsx("li",{children:"Properties file not found at runtime (wrong path, not in classpath)."}),e.jsx("li",{children:"Forgetting to close the input stream after loading – resource leak."}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"getResourceAsStream"})," from the wrong classloader (especially in web apps)."]}),e.jsx("li",{children:"Hardcoding fallback values that override the properties file, defeating the purpose."}),e.jsx("li",{children:"Storing sensitive data (passwords) in plain text in version control – use environment variables or secrets management."}),e.jsxs("li",{children:["Not handling missing keys – use ",e.jsx("code",{children:"getProperty(key, defaultValue)"})," to provide defaults."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.2s_ease-out] space-y-3","aria-label":"Best practices",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-green-200 dark:border-green-800 pb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-green-800 dark:text-green-200",children:[e.jsxs("li",{children:["Store properties files in the classpath (e.g., ",e.jsx("code",{children:"src/main/resources"}),") for easy access."]}),e.jsxs("li",{children:["Use meaningful key names with a consistent prefix (e.g., ",e.jsx("code",{children:"db."}),", ",e.jsx("code",{children:"app."}),")."]}),e.jsx("li",{children:"Provide default values in code for critical properties as a fallback."}),e.jsx("li",{children:"Never commit real passwords to version control; use placeholders and externalize them via environment variables."}),e.jsxs("li",{children:["For different environments, use different properties files (e.g., ",e.jsx("code",{children:"application-dev.properties"}),", ",e.jsx("code",{children:"application-prod.properties"}),") and load based on a system property."]}),e.jsx("li",{children:"Validate required properties at application startup and fail fast."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.3s_ease-out] space-y-3","aria-label":"Professional tips",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-amber-200 dark:border-amber-800 pb-2",children:"🧠 Tips & Tricks"}),e.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"ResourceBundle:"})," For internationalization, consider ",e.jsx("code",{children:"ResourceBundle"})," instead of Properties."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"System property override:"})," Allow system properties to override file properties (e.g., ",e.jsx("code",{children:'System.getProperty("db.url", props.getProperty("db.url"))'}),")."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Encrypted passwords:"})," Use Jasypt or similar to encrypt passwords in properties files and decrypt at runtime."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Watch for changes:"})," For long‑running apps, you can reload properties files periodically to pick up changes without restart."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Tuhina's trick:"})," Use a ",e.jsx("code",{children:"Config"})," singleton that loads properties once and provides typed getters – keeps code clean."]})]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.4s_ease-out] space-y-3","aria-label":"Teacher's note",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"👩‍🏫 Teacher's Note"}),e.jsxs("div",{className:i("bg-indigo-100 dark:bg-indigo-900/40 p-5 rounded-xl","transition-all duration-300 hover:shadow-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/60"),children:[e.jsx("p",{className:"font-bold text-indigo-900 dark:text-indigo-100",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-indigo-800 dark:text-indigo-200",children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsxs("p",{className:"text-sm mt-1",children:["💼 ",s," years of experience in Programming, RDBMS, OS, Web Development."]}),e.jsxs("p",{className:"mt-3",children:[e.jsx("span",{className:"font-semibold",children:"Point to remember:"})," Many beginners hardcode database credentials. Emphasize that this is a security risk and a maintenance nightmare. Properties files are the simplest form of externalized configuration and a stepping stone to more advanced tools like Spring's",e.jsx("code",{children:"@ConfigurationProperties"})," or MicroProfile Config.",e.jsx("br",{}),e.jsx("span",{className:"italic",children:'"Debangshu, treat properties files like a recipe – you can change ingredients without rewriting the cookbook."'})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.5s_ease-out] space-y-3","aria-label":"Quick checklist",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-2",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:"✔️ I understand why hardcoding configuration is bad."}),e.jsx("li",{children:"✔️ I can create a properties file with database settings."}),e.jsxs("li",{children:["✔️ I know how to load properties using ",e.jsx("code",{children:"Properties.load()"})," from classpath."]}),e.jsxs("li",{children:["✔️ I can use loaded properties with ",e.jsx("code",{children:"DriverManager"})," or ",e.jsx("code",{children:"DataSource"}),"."]}),e.jsx("li",{children:"✔️ I can handle multiple environments with different properties files."}),e.jsx("li",{children:"✔️ I am aware of security concerns and best practices for sensitive data."})]})})]})]})]})};export{h as default};
