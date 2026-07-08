import{j as e}from"./index-gsr__VoO.js";import{J as a}from"./JavaFileLoader-Oc7S8mbZ.js";import{F as r}from"./FAQTemplate-CEVTVkoN.js";import{T as i}from"./TeacherSukantaHui-DvbQRa-c.js";import"./JavaCodeBlock-NUM7pLrI.js";import"./prism-CyJ4Ug4E.js";import"./browser--8xGBJJU.js";import"./prism-java-BwO6k4I_.js";import"./clsx-B-dksMZM.js";import"./git-branch-Bxm2eNpw.js";const s=`<?xml version="1.0" encoding="UTF-8"?>\r
<persistence xmlns="https://jakarta.ee/xml/ns/persistence"\r
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\r
             xsi:schemaLocation="https://jakarta.ee/xml/ns/persistence https://jakarta.ee/xml/ns/persistence/persistence_3_0.xsd"\r
             version="3.0">\r
\r
    <persistence-unit name="schoolPU" transaction-type="RESOURCE_LOCAL">\r
        <provider>org.hibernate.jpa.HibernatePersistenceProvider</provider>\r
        \r
        <!-- List of entity classes -->\r
        <class>com.school.entity.Student</class>\r
        \r
        <properties>\r
            <!-- Database connection properties -->\r
            <property name="jakarta.persistence.jdbc.driver" value="org.postgresql.Driver"/>\r
            <property name="jakarta.persistence.jdbc.url" value="jdbc:postgresql://localhost:5432/school_db"/>\r
            <property name="jakarta.persistence.jdbc.user" value="swadeep"/>\r
            <property name="jakarta.persistence.jdbc.password" value="secure123"/>\r
            \r
            <!-- Hibernate specific (but recognized by any JPA provider that supports them) -->\r
            <property name="hibernate.dialect" value="org.hibernate.dialect.PostgreSQLDialect"/>\r
            <property name="hibernate.show_sql" value="true"/>\r
            <property name="hibernate.hbm2ddl.auto" value="update"/>\r
        </properties>\r
    </persistence-unit>\r
</persistence>`,o=`// StudentEntity.java - JPA entity using standard annotations\r
package com.school.entity;\r
\r
import jakarta.persistence.*;\r
import java.time.LocalDate;\r
\r
@Entity\r
@Table(name = "students")\r
public class Student {\r
\r
    @Id\r
    @GeneratedValue(strategy = GenerationType.IDENTITY)\r
    private Long id;\r
\r
    @Column(nullable = false, length = 100)\r
    private String name;\r
\r
    @Column(unique = true)\r
    private String email;\r
\r
    private Integer age;\r
\r
    private String city;\r
\r
    @Column(name = "birth_date")\r
    private LocalDate birthDate;\r
\r
    // Constructors\r
    public Student() {}\r
\r
    public Student(String name, String email, String city) {\r
        this.name = name;\r
        this.email = email;\r
        this.city = city;\r
    }\r
\r
    // Getters and setters\r
    public Long getId() { return id; }\r
    public void setId(Long id) { this.id = id; }\r
    public String getName() { return name; }\r
    public void setName(String name) { this.name = name; }\r
    public String getEmail() { return email; }\r
    public void setEmail(String email) { this.email = email; }\r
    public Integer getAge() { return age; }\r
    public void setAge(Integer age) { this.age = age; }\r
    public String getCity() { return city; }\r
    public void setCity(String city) { this.city = city; }\r
    public LocalDate getBirthDate() { return birthDate; }\r
    public void setBirthDate(LocalDate birthDate) { this.birthDate = birthDate; }\r
}`,l=`// JpaCrudExample.java - Using JPA's EntityManager for CRUD operations\r
package com.school.jpa;\r
\r
import jakarta.persistence.*;\r
import com.school.entity.Student;\r
\r
public class JpaCrudExample {\r
    public static void main(String[] args) {\r
        // Obtain EntityManagerFactory from persistence unit\r
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("schoolPU");\r
        EntityManager em = emf.createEntityManager();\r
        EntityTransaction tx = em.getTransaction();\r
\r
        try {\r
            tx.begin();\r
\r
            // CREATE\r
            Student student = new Student("Tuhina", "tuhina@school.edu", "Shyamnagar");\r
            em.persist(student);\r
            System.out.println("Student persisted with ID: " + student.getId());\r
\r
            // READ\r
            Student found = em.find(Student.class, student.getId());\r
            System.out.println("Found: " + found.getName());\r
\r
            // UPDATE\r
            found.setCity("Ichapur");\r
            em.merge(found);\r
\r
            // DELETE\r
            em.remove(found);\r
\r
            tx.commit();\r
        } catch (Exception e) {\r
            if (tx.isActive()) tx.rollback();\r
            e.printStackTrace();\r
        } finally {\r
            em.close();\r
            emf.close();\r
        }\r
    }\r
}`,d=`// JpaVsHibernateExample.java - Shows code using JPA vs Hibernate API side by side\r
package com.school.comparison;\r
\r
// JPA way (portable)\r
import jakarta.persistence.*;\r
\r
// Hibernate way (vendor-specific)\r
// import org.hibernate.Session;\r
// import org.hibernate.SessionFactory;\r
\r
public class JpaVsHibernateExample {\r
\r
    // Using JPA EntityManager\r
    public void jpaUpdate(EntityManager em, Long id, String newName) {\r
        Student student = em.find(Student.class, id);\r
        if (student != null) {\r
            student.setName(newName);\r
            // no explicit update needed – automatic dirty checking\r
        }\r
    }\r
\r
    // Using Hibernate Session (native)\r
    /*\r
    public void hibernateUpdate(Session session, Long id, String newName) {\r
        Student student = session.get(Student.class, id);\r
        if (student != null) {\r
            student.setName(newName);\r
            session.update(student); // optional, but often explicit\r
        }\r
    }\r
    */\r
\r
    // Note: Hibernate's Session interface extends JPA's EntityManager,\r
    // so you can cast when you need Hibernate-specific methods.\r
}`,c=[{question:"What is the difference between JPA and Hibernate?",shortAnswer:"JPA is a specification; Hibernate is an implementation of that specification.",explanation:"JPA defines standard interfaces and annotations (javax.persistence). Hibernate implements them and adds proprietary features. You can code to JPA interfaces and swap the provider without changing code.",hint:"Think of JPA as the 'JDBC of ORM'.",level:"basic",codeExample:"// JPA: EntityManager em = ... ; // Hibernate: Session session = ... ;"},{question:"What is the role of persistence.xml?",shortAnswer:"It defines one or more persistence units, including datasource, provider, entity classes, and properties.",explanation:"META-INF/persistence.xml is the configuration file for JPA. It tells the JPA provider (Hibernate) which database to connect to, which entities to scan, and various settings.",hint:"In Spring Boot, you can often omit it and use spring.datasource properties instead.",level:"basic",codeExample:'<persistence-unit name="myPU"> <provider>org.hibernate.jpa.HibernatePersistenceProvider</provider> ... </persistence-unit>'},{question:"What is EntityManagerFactory?",shortAnswer:"A thread-safe factory that creates EntityManager instances. It represents a persistence unit.",explanation:"EntityManagerFactory is expensive to create, so you generally create one per persistence unit per application. It is used to obtain EntityManager objects, which are the working interface for data operations.",hint:'Typically, you create it once using Persistence.createEntityManagerFactory("unitName").',level:"basic",codeExample:'EntityManagerFactory emf = Persistence.createEntityManagerFactory("schoolPU");'},{question:"What is the difference between EntityManager.persist() and EntityManager.merge()?",shortAnswer:"persist() makes a transient entity managed; merge() copies state from a detached entity into a managed instance.",explanation:"Use persist for new entities that will be inserted. Use merge when you have a detached entity (e.g., received from client) and want to update the database. merge returns the managed instance.",hint:"If you call merge on a new entity, it will also insert.",level:"intermediate",codeExample:`em.persist(newStudent); // insert
Student managed = em.merge(detachedStudent); // update`},{question:"How does JPA handle transactions?",shortAnswer:"Through EntityTransaction (for resource-local) or JTA (for container-managed).",explanation:"In Java SE, use em.getTransaction().begin()/.commit()/.rollback(). In Java EE / Spring, transactions are typically managed declaratively (@Transactional).",hint:"Resource-local transactions can't span multiple databases.",level:"intermediate",codeExample:"EntityTransaction tx = em.getTransaction(); tx.begin(); ... tx.commit();"},{question:"What is JPQL?",shortAnswer:"Java Persistence Query Language – a database-independent query language based on entity objects, not tables.",explanation:"JPQL uses entity names and field names (e.g., 'SELECT s FROM Student s WHERE s.city = :city') and is translated into native SQL by the provider. It supports joins, aggregation, and subqueries.",hint:"JPQL is case-sensitive for Java entity/field names, but not for SQL keywords.",level:"intermediate",codeExample:'Query q = em.createQuery("SELECT s FROM Student s WHERE s.age > :minAge");'},{question:"What is the difference between JPQL and Criteria API?",shortAnswer:"JPQL is string-based; Criteria API is type-safe and programmatic.",explanation:"JPQL is easier to write for simple queries but error-prone (runtime). Criteria API allows dynamic query construction and is type-safe, but verbose. In JPA 2.2, Criteria has metamodel generation for even better type safety.",hint:"For simple static queries, JPQL is fine; for dynamic filters, use Criteria.",level:"advanced",codeExample:"CriteriaBuilder cb = em.getCriteriaBuilder(); CriteriaQuery<Student> cq = cb.createQuery(Student.class);"},{question:"What is the persistence context?",shortAnswer:"A set of managed entity instances associated with an EntityManager. It acts as a first-level cache.",explanation:"Within a transaction, the EntityManager keeps track of entities. Any changes to managed entities are automatically flushed to the database at commit time. This is the 'first-level cache' of JPA.",hint:"The persistence context is not shared across EntityManagers.",level:"intermediate",codeExample:"Student s1 = em.find(Student.class, 1L); Student s2 = em.find(Student.class, 1L); // same instance"},{question:"What is the difference between detached, managed, and transient entities?",shortAnswer:"Transient: never persisted; Managed: associated with persistence context; Detached: previously managed but context closed.",explanation:"Transient objects have no DB identity. Managed objects are in the persistence context, changes are tracked. Detached objects have a DB identity but not attached to any EntityManager; you can merge them back.",hint:"After em.close(), all entities become detached.",level:"basic",codeExample:`Student s = new Student(); // transient
em.persist(s); // managed
em.close(); // detached`},{question:"How do I use JPA with Spring Boot?",shortAnswer:"Spring Boot auto-configures EntityManagerFactory and TransactionManager when you add spring-boot-starter-data-jpa.",explanation:"Spring Boot reads application.properties, scans for @Entity, creates a DataSource, and provides a default JPA implementation (Hibernate). You can inject EntityManager or use Spring Data JPA repositories.",hint:"Use @Autowired EntityManager or extend JpaRepository interface.",level:"intermediate",codeExample:`spring.datasource.url=jdbc:postgresql://localhost/db
spring.jpa.hibernate.ddl-auto=update`}],m=`
  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-slide-up {
    animation: fadeSlideUp 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
  }
  @keyframes softGlow {
    0% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
    50% { box-shadow: 0 0 0 6px rgba(59,130,246,0.2); }
    100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
  }
  .animate-soft-glow {
    animation: softGlow 1.2s ease-in-out 2;
  }
`,w=()=>e.jsxs("div",{className:"w-full max-w-6xl mx-auto px-4 py-8 space-y-12 dark:bg-gray-900 bg-gray-50 transition-colors duration-300",children:[e.jsx("style",{children:m}),e.jsxs("div",{className:"animate-fade-slide-up text-center space-y-4",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent",children:"Introduction to JPA (Java Persistence API)"}),e.jsx("p",{className:"text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"JPA is the standard specification for object-relational mapping in Java. Learn how it provides a vendor-agnostic API, how Hibernate implements it, and the key concepts like EntityManager, Persistence Context, and JPQL."})]}),e.jsxs("section",{className:"space-y-5 animate-fade-slide-up [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]",children:[e.jsx("div",{className:"flex items-center gap-3 border-l-4 border-blue-500 pl-4",children:e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100",children:"What is JPA?"})}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsx("strong",{children:"Jakarta Persistence API (JPA)"})," (formerly Java Persistence API) is a specification that defines a standard for object-relational mapping (ORM) and management of persistent objects in Java. JPA itself is not a product; it's a set of interfaces and annotations. ",e.jsx("strong",{children:"Hibernate"})," is one of the most popular implementations (providers) of JPA, alongside EclipseLink, OpenJPA, and others."]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-green-50 dark:bg-green-950/40 p-4 rounded-xl border-l-4 border-green-400",children:[e.jsx("p",{className:"font-semibold text-green-800 dark:text-green-200",children:"📜 JPA Specification"}),e.jsx("p",{className:"text-sm",children:"Defines the rules (javax.persistence.* or jakarta.persistence.*). No code."})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-950/40 p-4 rounded-xl border-l-4 border-purple-400",children:[e.jsx("p",{className:"font-semibold text-purple-800 dark:text-purple-200",children:"⚙️ JPA Provider (e.g., Hibernate)"}),e.jsx("p",{className:"text-sm",children:"Implements the interfaces, adds optimizations, but remains JPA-compliant."})]})]}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-950/40 p-4 rounded-xl border-l-4 border-blue-400",children:e.jsxs("p",{className:"text-sm italic text-blue-800 dark:text-blue-200",children:["💡 ",e.jsx("strong",{children:"Real-world analogy:"})," JPA is like Bluetooth specification – many manufacturers (providers) implement it, but your code works with any compliant device. At Barrackpore High School, using JPA allows switching from Hibernate to EclipseLink without changing most of the code."]})})]})]}),e.jsxs("section",{className:"space-y-5 animate-fade-slide-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 border-l-4 border-blue-500 pl-4",children:"JPA Building Blocks"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all",children:[e.jsx("div",{className:"text-3xl mb-2",children:"📦"}),e.jsx("h3",{className:"font-bold text-lg",children:"Entity"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:["A plain Java class annotated with ",e.jsx("code",{children:"@Entity"}),". Maps to a database table."]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all",children:[e.jsx("div",{className:"text-3xl mb-2",children:"🗂️"}),e.jsx("h3",{className:"font-bold text-lg",children:"Persistence Unit"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:["Defined in ",e.jsx("code",{children:"META-INF/persistence.xml"}),". Contains connection info, provider, entities."]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all",children:[e.jsx("div",{className:"text-3xl mb-2",children:"🔧"}),e.jsx("h3",{className:"font-bold text-lg",children:"EntityManager"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Interface for CRUD operations, JPQL queries, managing the persistence context."})]})]}),e.jsx(a,{fileModule:s,title:"META-INF/persistence.xml (Configuration)",highlightLines:[5,8,12]}),e.jsx(a,{fileModule:o,title:"StudentEntity.java (JPA Entity)",highlightLines:[4,7,10]}),e.jsx("div",{className:"bg-amber-50 dark:bg-amber-950/30 p-5 rounded-xl border border-amber-200 dark:border-amber-800",children:e.jsxs("p",{className:"text-sm font-mono text-amber-800 dark:text-amber-300",children:["🧠 ",e.jsx("strong",{children:"Teacher insight:"}),' A persistence unit is like a "database context" – you can have multiple units for different databases. The ',e.jsx("code",{children:"persistence.xml"})," is the JPA equivalent of Hibernate's ",e.jsx("code",{children:"hibernate.cfg.xml"})," but vendor-neutral."]})})]}),e.jsxs("section",{className:"space-y-5 animate-fade-slide-up [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 border-l-4 border-green-500 pl-4",children:"EntityManager in Action"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsx("code",{children:"EntityManager"})," is the central API in JPA. It manages the lifecycle of entities, provides methods like ",e.jsx("code",{children:"persist()"}),", ",e.jsx("code",{children:"merge()"}),", ",e.jsx("code",{children:"remove()"}),", ",e.jsx("code",{children:"find()"}),", and ",e.jsx("code",{children:"createQuery()"}),". It also controls the persistence context (first-level cache)."]}),e.jsx(a,{fileModule:l,title:"JpaCrudExample.java (Using EntityManager)",highlightLines:[15,20,27,32]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-xl border border-indigo-200 dark:border-indigo-800",children:e.jsx("p",{className:"text-sm italic text-indigo-800 dark:text-indigo-200",children:"💡 Notice: No Hibernate-specific classes! This code works with any JPA provider (EclipseLink, OpenJPA, etc.)."})})]}),e.jsxs("section",{className:"space-y-5 animate-fade-slide-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 border-l-4 border-purple-500 pl-4",children:"JPA vs Hibernate API"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:"Hibernate is a JPA provider, but it also offers proprietary features (stateless sessions, custom caching, etc.). The recommended practice is to program against JPA interfaces for portability, falling back to Hibernate-specific only when needed."}),e.jsx(a,{fileModule:d,title:"JpaVsHibernateExample.java (Side-by-side)",highlightLines:[5,18,30]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/30 p-5 rounded-xl border border-yellow-200 dark:border-yellow-800",children:e.jsxs("p",{className:"text-sm font-mono text-yellow-800 dark:text-yellow-300",children:["🔄 Pro tip: When you need Hibernate-specific features (like ",e.jsx("code",{children:"@BatchSize"}),"), annotate your entities with them – they will be ignored by other providers, but your code stays JPA-compliant."]})})]}),e.jsxs("section",{className:"space-y-5 animate-fade-slide-up [animation-delay:500ms] opacity-0 [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 border-l-4 border-teal-500 pl-4",children:"🏗️ JPA Architecture Overview"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500",children:[e.jsxs("svg",{viewBox:"0 0 900 380",className:"w-full h-auto","aria-label":"JPA Architecture",children:[e.jsx("rect",{x:"30",y:"20",width:"840",height:"50",rx:"10",fill:"#3b82f6",fillOpacity:"0.1",stroke:"#3b82f6"}),e.jsx("text",{x:"450",y:"50",textAnchor:"middle",className:"text-md font-bold fill-blue-800 dark:fill-blue-300",children:"Java Application (using JPA API)"}),e.jsx("line",{x1:"450",y1:"70",x2:"450",y2:"100",stroke:"#64748b",strokeWidth:"2",markerEnd:"url(#arrowDown)"}),e.jsx("rect",{x:"30",y:"110",width:"840",height:"60",rx:"10",fill:"#10b981",fillOpacity:"0.1",stroke:"#10b981"}),e.jsx("text",{x:"450",y:"135",textAnchor:"middle",className:"text-md font-bold fill-green-800 dark:fill-green-300",children:"JPA Interfaces (javax.persistence.*)"}),e.jsx("text",{x:"450",y:"155",textAnchor:"middle",className:"text-sm fill-gray-600 dark:fill-gray-400",children:"EntityManager, EntityTransaction, Query, CriteriaBuilder, etc."}),e.jsx("line",{x1:"450",y1:"170",x2:"450",y2:"205",stroke:"#64748b",strokeWidth:"2",markerEnd:"url(#arrowDown)"}),e.jsx("rect",{x:"30",y:"215",width:"840",height:"60",rx:"10",fill:"#f59e0b",fillOpacity:"0.1",stroke:"#f59e0b"}),e.jsx("text",{x:"450",y:"240",textAnchor:"middle",className:"text-md font-bold fill-amber-800 dark:fill-amber-300",children:"JPA Provider (e.g., Hibernate, EclipseLink)"}),e.jsx("text",{x:"450",y:"260",textAnchor:"middle",className:"text-sm fill-gray-600 dark:fill-gray-400",children:"Implements the specification, adds optimizations & extensions"}),e.jsx("line",{x1:"450",y1:"275",x2:"450",y2:"310",stroke:"#64748b",strokeWidth:"2",markerEnd:"url(#arrowDown)"}),e.jsx("rect",{x:"30",y:"320",width:"840",height:"50",rx:"10",fill:"#ef4444",fillOpacity:"0.1",stroke:"#ef4444"}),e.jsx("text",{x:"450",y:"350",textAnchor:"middle",className:"text-md font-bold fill-red-800 dark:fill-red-300",children:"Relational Database (JDBC)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowDown",markerWidth:"10",markerHeight:"7",refX:"5",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})})})]}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-3",children:"JPA provides a clean abstraction – your code stays portable across providers."})]})]}),e.jsxs("section",{className:"space-y-5 animate-fade-slide-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]",children:[e.jsx("div",{className:"flex items-center gap-2 border-l-4 border-red-500 pl-4",children:e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100",children:"⚠️ Common Pitfalls & Misconceptions"})}),e.jsx("div",{className:"grid md:grid-cols-2 gap-5",children:[{title:"Confusing JPA with Hibernate",desc:"Many think JPA is Hibernate – but JPA is the spec, Hibernate is an implementation.",fix:"Always refer to interfaces (EntityManager) rather than Hibernate's Session unless you need advanced features."},{title:"Forgetting persistence.xml location",desc:"persistence.xml must be in META-INF/ folder of classpath (e.g., src/main/resources/META-INF).",fix:"Use the correct folder structure; IDEs often help generate it."},{title:"Mixing JPA annotations and Hibernate XML mappings",desc:"This leads to confusion and unpredictable behavior.",fix:"Choose one approach: prefer JPA annotations for portability."},{title:"Not handling EntityManager lifecycle",desc:"Leaking EntityManager instances causes connection pool exhaustion.",fix:"Use try-with-resources or close() in finally block."}].map((t,n)=>e.jsxs("div",{className:"bg-white dark:bg-gray-800/70 rounded-xl p-5 border-l-4 border-red-400 shadow-sm hover:shadow-md transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-red-700 dark:text-red-300",children:t.title}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-2",children:t.desc}),e.jsxs("p",{className:"text-xs font-mono text-green-700 dark:text-green-400 mt-3",children:["✅ ",t.fix]})]},n))})]}),e.jsxs("section",{className:"space-y-5 animate-fade-slide-up [animation-delay:700ms] opacity-0 [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 border-l-4 border-emerald-500 pl-4",children:"✅ Best Practices & Industry Habits"}),e.jsxs("div",{className:"bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-md",children:[e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-emerald-500 text-xl",children:"✓"})," Program against JPA interfaces – your code remains provider-agnostic."]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-emerald-500 text-xl",children:"✓"})," Use ",e.jsx("strong",{children:"dependency injection"})," (CDI or Spring) for EntityManager to avoid manual lifecycling."]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-emerald-500 text-xl",children:"✓"})," Define persistence.xml with properties to allow override via system properties (e.g., DB credentials)."]}),e.jsxs("li",{className:"flex gap-2",children:[e.jsx("span",{className:"text-emerald-500 text-xl",children:"✓"})," Prefer JPQL (or Criteria API) over native SQL for portability across databases."]})]}),e.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-700"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mt-4",children:["Use @Entity","Define @Id","Place persistence.xml correctly","Close EntityManager"].map((t,n)=>e.jsxs("div",{className:"bg-emerald-50 dark:bg-emerald-950/50 p-2 rounded-md text-xs font-medium text-emerald-800 dark:text-emerald-200",children:["📌 ",t]},n))})]})]}),e.jsxs("section",{className:"space-y-4 animate-fade-slide-up [animation-delay:800ms] opacity-0 [animation-fill-mode:forwards] bg-indigo-50 dark:bg-indigo-950/40 rounded-2xl p-6 border border-indigo-200 dark:border-indigo-800",children:[e.jsx("h3",{className:"text-xl font-bold text-indigo-800 dark:text-indigo-300 flex items-center gap-2",children:"💭 Think & Experiment"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm",children:[e.jsxs("p",{className:"font-mono text-sm",children:[e.jsx("strong",{children:"Observe carefully:"})," What happens if you call ",e.jsx("code",{children:"entityManager.find()"})," twice within the same transaction with the same ID?"]}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"🔍 It returns the same instance (first-level cache)."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm",children:[e.jsxs("p",{className:"font-mono text-sm",children:[e.jsx("strong",{children:"Try changing this:"})," Switch the JPA provider from Hibernate to EclipseLink (add dependencies, change persistence.xml)."]}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"🔄 Your application code should still work."})]})]})]}),e.jsxs("section",{className:"space-y-4 animate-fade-slide-up [animation-delay:900ms] opacity-0 [animation-fill-mode:forwards]",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"💎"}),e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100",children:"Pro Tips & Classroom shortcuts"})]}),e.jsxs("div",{className:"bg-cyan-50 dark:bg-cyan-950/40 rounded-xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-cyan-600",children:"🔁"}),e.jsxs("div",{children:[e.jsx("strong",{children:"JPA Buddy / Dali:"})," IDE plugins to generate persistence.xml and entities from DB schema."]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-cyan-600",children:"⚡"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Use JPA static metamodel:"})," For typesafe Criteria queries (generate classes like Student_)."]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-cyan-600",children:"🧩"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Entity graphs:"})," ",e.jsx("code",{children:"@EntityGraph"})," to control fetch plans without changing JPQL."]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-cyan-600",children:"📌"}),e.jsxs("div",{children:[e.jsx("strong",{children:"JPA 2.2+ features:"})," Stream results, date/time API, CDI injection into listeners."]})]})]})]}),e.jsx("div",{className:"animate-fade-slide-up [animation-delay:1000ms] opacity-0 [animation-fill-mode:forwards]",children:e.jsx(r,{title:"JPA (Java Persistence API) FAQs",questions:c})}),e.jsx("div",{className:"animate-fade-slide-up [animation-delay:1100ms] opacity-0 [animation-fill-mode:forwards]",children:e.jsx(i,{note:"🎓 Teacher's Note: Start with a clear distinction between JPA (spec) and Hibernate (impl). Show students that by switching the provider in persistence.xml, their code still runs. Emphasize that modern Spring Boot uses JPA by default (spring-boot-starter-data-jpa includes Hibernate but you code against JPA). A good lab: Write a simple CRUD using EntityManager only, then replace Hibernate with EclipseLink and prove portability."})}),e.jsx("div",{className:"text-center text-xs text-gray-400 pt-6",children:"Topic 14 — Introduction to JPA (Java Persistence API) | Industry-grade best practices"})]});export{w as default};
