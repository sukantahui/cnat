import{j as e}from"./index-COd1BgDP.js";import{c as r}from"./clsx-B-dksMZM.js";import{J as t}from"./JavaFileLoader-BP9eIELP.js";import"./JavaCodeBlock-Dep8i8YL.js";import"./prism-XSjjC35C.js";import"./browser-Cg0sBYot.js";import"./prism-java-BwO6k4I_.js";const s=`// Model/Entity class representing a student\r
public class Student {\r
    private int id;\r
    private String name;\r
    private int age;\r
    private String city;\r
\r
    public Student() {}\r
\r
    public Student(int id, String name, int age, String city) {\r
        this.id = id;\r
        this.name = name;\r
        this.age = age;\r
        this.city = city;\r
    }\r
\r
    // Getters and setters\r
    public int getId() { return id; }\r
    public void setId(int id) { this.id = id; }\r
\r
    public String getName() { return name; }\r
    public void setName(String name) { this.name = name; }\r
\r
    public int getAge() { return age; }\r
    public void setAge(int age) { this.age = age; }\r
\r
    public String getCity() { return city; }\r
    public void setCity(String city) { this.city = city; }\r
\r
    @Override\r
    public String toString() {\r
        return "Student{" +\r
                "id=" + id +\r
                ", name='" + name + '\\'' +\r
                ", age=" + age +\r
                ", city='" + city + '\\'' +\r
                '}';\r
    }\r
}`,i=`import java.util.List;\r
\r
// DAO interface – defines all database operations for Student\r
public interface StudentDAO {\r
    void save(Student student);\r
    void update(Student student);\r
    void delete(int id);\r
    Student getById(int id);\r
    List<Student> getAll();\r
}`,a=`import javax.sql.DataSource;\r
import java.sql.*;\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
// JDBC implementation of StudentDAO\r
public class StudentDAOImpl implements StudentDAO {\r
    private DataSource dataSource;\r
\r
    // DataSource is injected via constructor (connection pooling)\r
    public StudentDAOImpl(DataSource dataSource) {\r
        this.dataSource = dataSource;\r
    }\r
\r
    @Override\r
    public void save(Student student) {\r
        String sql = "INSERT INTO students (name, age, city) VALUES (?, ?, ?)";\r
        try (Connection conn = dataSource.getConnection();\r
             PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
            pstmt.setString(1, student.getName());\r
            pstmt.setInt(2, student.getAge());\r
            pstmt.setString(3, student.getCity());\r
            pstmt.executeUpdate();\r
        } catch (SQLException e) {\r
            throw new RuntimeException("Error saving student", e);\r
        }\r
    }\r
\r
    @Override\r
    public void update(Student student) {\r
        String sql = "UPDATE students SET name = ?, age = ?, city = ? WHERE id = ?";\r
        try (Connection conn = dataSource.getConnection();\r
             PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
            pstmt.setString(1, student.getName());\r
            pstmt.setInt(2, student.getAge());\r
            pstmt.setString(3, student.getCity());\r
            pstmt.setInt(4, student.getId());\r
            pstmt.executeUpdate();\r
        } catch (SQLException e) {\r
            throw new RuntimeException("Error updating student", e);\r
        }\r
    }\r
\r
    @Override\r
    public void delete(int id) {\r
        String sql = "DELETE FROM students WHERE id = ?";\r
        try (Connection conn = dataSource.getConnection();\r
             PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
            pstmt.setInt(1, id);\r
            pstmt.executeUpdate();\r
        } catch (SQLException e) {\r
            throw new RuntimeException("Error deleting student", e);\r
        }\r
    }\r
\r
    @Override\r
    public Student getById(int id) {\r
        String sql = "SELECT id, name, age, city FROM students WHERE id = ?";\r
        try (Connection conn = dataSource.getConnection();\r
             PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
            pstmt.setInt(1, id);\r
            try (ResultSet rs = pstmt.executeQuery()) {\r
                if (rs.next()) {\r
                    return new Student(\r
                            rs.getInt("id"),\r
                            rs.getString("name"),\r
                            rs.getInt("age"),\r
                            rs.getString("city")\r
                    );\r
                }\r
            }\r
        } catch (SQLException e) {\r
            throw new RuntimeException("Error fetching student by id", e);\r
        }\r
        return null;\r
    }\r
\r
    @Override\r
    public List<Student> getAll() {\r
        List<Student> students = new ArrayList<>();\r
        String sql = "SELECT id, name, age, city FROM students";\r
        try (Connection conn = dataSource.getConnection();\r
             Statement stmt = conn.createStatement();\r
             ResultSet rs = stmt.executeQuery(sql)) {\r
            while (rs.next()) {\r
                students.add(new Student(\r
                        rs.getInt("id"),\r
                        rs.getString("name"),\r
                        rs.getInt("age"),\r
                        rs.getString("city")\r
                ));\r
            }\r
        } catch (SQLException e) {\r
            throw new RuntimeException("Error fetching all students", e);\r
        }\r
        return students;\r
    }\r
}`,d=`import com.zaxxer.hikari.HikariConfig;\r
import com.zaxxer.hikari.HikariDataSource;\r
\r
import javax.sql.DataSource;\r
import java.util.List;\r
\r
public class DAODemo {\r
    public static void main(String[] args) {\r
        // Setup DataSource (HikariCP)\r
        HikariConfig config = new HikariConfig();\r
        config.setJdbcUrl("jdbc:mysql://localhost:3306/schoolDB");\r
        config.setUsername("root");\r
        config.setPassword("password");\r
        config.setMaximumPoolSize(5);\r
\r
        DataSource dataSource = new HikariDataSource(config);\r
\r
        // Create DAO instance\r
        StudentDAO studentDAO = new StudentDAOImpl(dataSource);\r
\r
        // Create a new student\r
        Student newStudent = new Student(0, "Swadeep", 20, "Barrackpore");\r
        studentDAO.save(newStudent);\r
        System.out.println("Student saved.");\r
\r
        // Retrieve all students\r
        List<Student> students = studentDAO.getAll();\r
        System.out.println("All students:");\r
        for (Student s : students) {\r
            System.out.println(s);\r
        }\r
\r
        // Update a student (assume id 1 exists)\r
        Student student = studentDAO.getById(1);\r
        if (student != null) {\r
            student.setCity("Kolkata");\r
            studentDAO.update(student);\r
            System.out.println("Student updated.");\r
        }\r
\r
        // Delete a student (id 2)\r
        studentDAO.delete(2);\r
        System.out.println("Student deleted (if existed).");\r
    }\r
}`,g=()=>{const n=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark:bg-gray-900 dark:text-gray-200 min-h-screen py-8 px-4 transition-colors duration-300",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-4xl mx-auto space-y-12",children:[e.jsxs("section",{className:"animate-[fadeSlideUp_0.6s_ease-out]","aria-label":"Introduction to DAO Design Pattern",children:[e.jsx("h1",{className:"text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4",children:"🏗️ DAO (Data Access Object) Design Pattern"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["The ",e.jsx("strong",{children:"Data Access Object (DAO)"})," pattern is a structural pattern that separates the data persistence logic from the business logic. It provides an abstract interface to the database, hiding all the low‑level JDBC details. This makes the code cleaner, more testable, and easier to maintain."]}),e.jsxs("p",{className:"mt-2 text-md",children:[e.jsx("span",{className:"font-semibold",children:"Abhronila"})," from Ichapur is building a student management system. Without DAO, her business logic would be mixed with SQL statements, making changes difficult. By using DAO, she can switch from MySQL to PostgreSQL later without rewriting the whole application."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.7s_ease-out] space-y-4","aria-label":"DAO pattern diagram",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🧩 DAO Pattern Structure"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-inner flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 600 200",className:"w-full max-w-2xl",stroke:"currentColor",fill:"none",strokeWidth:"2",children:[e.jsx("rect",{x:"20",y:"20",width:"120",height:"60",rx:"8",className:"stroke-indigo-500 fill-indigo-50 dark:fill-indigo-900/20"}),e.jsx("text",{x:"40",y:"55",className:"text-sm fill-gray-800 dark:fill-gray-200",stroke:"none",children:"Business Layer"}),e.jsx("text",{x:"30",y:"75",className:"text-[8px] fill-gray-500",stroke:"none",children:"(Service/Controller)"}),e.jsx("rect",{x:"200",y:"20",width:"120",height:"60",rx:"8",className:"stroke-emerald-500 fill-emerald-50 dark:fill-emerald-900/20"}),e.jsx("text",{x:"220",y:"55",className:"text-sm fill-gray-800 dark:fill-gray-200",stroke:"none",children:"«interface»"}),e.jsx("text",{x:"240",y:"75",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"StudentDAO"}),e.jsx("rect",{x:"380",y:"20",width:"120",height:"60",rx:"8",className:"stroke-sky-500 fill-sky-50 dark:fill-sky-900/20"}),e.jsx("text",{x:"400",y:"55",className:"text-sm fill-gray-800 dark:fill-gray-200",stroke:"none",children:"StudentDAOImpl"}),e.jsx("text",{x:"410",y:"75",className:"text-[8px] fill-gray-500",stroke:"none",children:"(JDBC code)"}),e.jsx("rect",{x:"500",y:"120",width:"80",height:"40",rx:"8",className:"stroke-purple-500 fill-purple-50 dark:fill-purple-900/20"}),e.jsx("text",{x:"510",y:"150",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"Database"}),e.jsx("path",{d:"M140 50 L200 50",className:"stroke-gray-400 dark:stroke-gray-500",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"2s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M320 50 L380 50",className:"stroke-gray-400 dark:stroke-gray-500",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"2s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M440 80 L540 120",className:"stroke-gray-400 dark:stroke-gray-500",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"450",y:"100",className:"text-[8px] fill-gray-500",stroke:"none",children:"SQL"})]})}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 text-center",children:"Business layer depends on the DAO interface, not the implementation. The implementation handles all JDBC code."})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.8s_ease-out] space-y-4","aria-label":"Components of DAO pattern",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"📦 Key Components"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition",children:[e.jsx("h3",{className:"text-xl font-bold text-indigo-600 dark:text-indigo-400",children:"1. Model / Entity"}),e.jsxs("p",{className:"mt-2 text-sm",children:["Simple Java class representing a database table (e.g., ",e.jsx("code",{children:"Student"})," with fields, getters, setters)."]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition",children:[e.jsx("h3",{className:"text-xl font-bold text-emerald-600 dark:text-emerald-400",children:"2. DAO Interface"}),e.jsxs("p",{className:"mt-2 text-sm",children:["Defines CRUD operations (e.g., ",e.jsx("code",{children:"getAll()"}),", ",e.jsx("code",{children:"save(student)"}),", ",e.jsx("code",{children:"update(student)"}),",",e.jsx("code",{children:"delete(id)"}),")."]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition",children:[e.jsx("h3",{className:"text-xl font-bold text-sky-600 dark:text-sky-400",children:"3. DAO Implementation"}),e.jsx("p",{className:"mt-2 text-sm",children:"Implements the interface using JDBC (or JPA, etc.). Contains all database access logic."})]})]}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Optionally, a DAO factory can be used to instantiate the correct implementation."})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.9s_ease-out] space-y-4","aria-label":"Benefits of DAO",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"✅ Why Use DAO?"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-green-800 dark:text-green-200 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Separation of Concerns:"})," Business logic doesn't deal with SQL or JDBC."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Testability:"})," You can mock the DAO interface to unit test business logic without a database."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Maintainability:"})," Changes to the database (e.g., switching from MySQL to Oracle) only affect the DAO implementation."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reusability:"})," DAO can be used by multiple parts of the application."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Readability:"})," Code becomes cleaner and more focused."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.0s_ease-out] space-y-6","aria-label":"Code examples for DAO pattern",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🔹 Student Model (Entity)"}),e.jsx(t,{fileModule:s,title:"Student.java",highlightLines:[3,4,5,6,7,8,9,10,11,12,13]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 StudentDAO Interface"}),e.jsx(t,{fileModule:i,title:"StudentDAO.java",highlightLines:[4,5,6,7,8]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 StudentDAOImpl (JDBC Implementation)"}),e.jsx(t,{fileModule:a,title:"StudentDAOImpl.java",highlightLines:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Using the DAO (Demo)"}),e.jsx(t,{fileModule:d,title:"DAODemo.java",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16,17]})]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border-l-4 border-indigo-400",children:e.jsxs("p",{className:"text-sm font-medium text-indigo-800 dark:text-indigo-200",children:["💡 ",e.jsx("strong",{children:"Observe carefully:"})," In ",e.jsx("code",{children:"StudentDAOImpl"}),", we use a connection pool (DataSource) instead of DriverManager. This is a production‑grade approach. How would you modify the code to use a different database?"]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.1s_ease-out] space-y-3","aria-label":"Common mistakes",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-red-200 dark:border-red-800 pb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-red-700 dark:text-red-300",children:[e.jsx("li",{children:"Putting JDBC code directly in the business layer (defeats the purpose of DAO)."}),e.jsx("li",{children:"Not using interfaces – makes it harder to switch implementations or mock for testing."}),e.jsx("li",{children:"Forgetting to close resources (connections, statements, result sets) in the DAO implementation."}),e.jsxs("li",{children:["Handling ",e.jsx("code",{children:"SQLException"})," improperly – either swallowing or exposing it to business layer."]}),e.jsx("li",{children:"Creating a new connection for every DAO call without pooling – kills performance."}),e.jsxs("li",{children:["Making DAO methods ",e.jsx("code",{children:"static"})," – hinders dependency injection and testability."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.2s_ease-out] space-y-3","aria-label":"Best practices",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-green-200 dark:border-green-800 pb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-green-800 dark:text-green-200",children:[e.jsx("li",{children:"Always define a DAO interface, even if you have only one implementation."}),e.jsx("li",{children:"Use connection pooling (DataSource) in DAO implementations."}),e.jsxs("li",{children:["Wrap low‑level SQL exceptions in a custom runtime exception (e.g., ",e.jsx("code",{children:"DataAccessException"}),")."]}),e.jsx("li",{children:"Use try‑with‑resources to auto‑close JDBC resources."}),e.jsx("li",{children:"Keep transaction management outside the DAO (in the service layer)."}),e.jsx("li",{children:"Inject DataSource via constructor to make DAOs testable and configurable."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.3s_ease-out] space-y-3","aria-label":"Professional tips",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-amber-200 dark:border-amber-800 pb-2",children:"🧠 Tips & Tricks"}),e.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Generic DAO:"})," Create a base interface ",e.jsx("code",{children:"GenericDAO<T, ID>"})," with common methods to reduce boilerplate."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"DTO vs Entity:"})," DAO typically returns entity objects. For complex queries, you might return DTOs (Data Transfer Objects)."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Spring JdbcTemplate:"})," In Spring, you can use ",e.jsx("code",{children:"JdbcTemplate"})," to simplify JDBC code inside DAO implementations."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Testing:"})," Use an in‑memory database (like H2) for testing DAO implementations."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Debangshu's trick:"})," Keep a separate ",e.jsx("code",{children:"ConnectionFactory"})," class that provides DataSource – then all DAOs can use it consistently."]})]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.4s_ease-out] space-y-3","aria-label":"Teacher's note",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"👩‍🏫 Teacher's Note"}),e.jsxs("div",{className:r("bg-indigo-100 dark:bg-indigo-900/40 p-5 rounded-xl","transition-all duration-300 hover:shadow-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/60"),children:[e.jsx("p",{className:"font-bold text-indigo-900 dark:text-indigo-100",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-indigo-800 dark:text-indigo-200",children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsxs("p",{className:"text-sm mt-1",children:["💼 ",n," years of experience in Programming, RDBMS, OS, Web Development."]}),e.jsxs("p",{className:"mt-3",children:[e.jsx("span",{className:"font-semibold",children:"Point to remember:"})," The DAO pattern is fundamental in enterprise Java. Students often skip the interface – emphasize that interfaces enable loose coupling and easier testing.",e.jsx("br",{}),e.jsx("span",{className:"italic",children:'"Swadeep, think of DAO as a restaurant menu: the interface lists what you can order, but the kitchen (implementation) can change without affecting the menu."'})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.5s_ease-out] space-y-3","aria-label":"Quick checklist",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-2",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:"✔️ I understand the purpose of the DAO pattern."}),e.jsx("li",{children:"✔️ I can create a model class, DAO interface, and DAO implementation."}),e.jsx("li",{children:"✔️ I know how to use DataSource inside a DAO."}),e.jsx("li",{children:"✔️ I understand the benefits of separating data access from business logic."}),e.jsx("li",{children:"✔️ I can write unit tests using a mock DAO."}),e.jsx("li",{children:"✔️ I am aware of common pitfalls and best practices for DAOs."})]})})]})]})]})};export{g as default};
