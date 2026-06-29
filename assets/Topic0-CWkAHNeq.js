import{r as t,j as e}from"./index-BvEfGfTn.js";import{c as a}from"./clsx-B-dksMZM.js";import{F as y}from"./FAQTemplate-DLwClWsT.js";import{T as f}from"./TeacherSukantaHui-BQBwwJWN.js";import{J as p}from"./JavaFileLoader-CP8t2oQN.js";import"./git-branch-Do_ZG0BN.js";import"./JavaCodeBlock-Do2zzRk8.js";import"./prism-D96f-id0.js";import"./browser-Dy9von7W.js";import"./prism-java-BwO6k4I_.js";const w=`// JdbcExample.java\r
// Demonstrates traditional JDBC code to fetch students from a database.\r
// Note the manual steps: DriverManager, Connection, Statement, ResultSet, and exception handling.\r
\r
import java.sql.*;\r
\r
public class JdbcExample {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/school_db";\r
        String user = "root";\r
        String password = "password";\r
\r
        Connection conn = null;\r
        Statement stmt = null;\r
        ResultSet rs = null;\r
\r
        try {\r
            // 1. Load & register the driver (optional for modern JDBC)\r
            Class.forName("com.mysql.cj.jdbc.Driver");\r
\r
            // 2. Establish connection\r
            conn = DriverManager.getConnection(url, user, password);\r
\r
            // 3. Create statement\r
            stmt = conn.createStatement();\r
\r
            // 4. Execute query\r
            String sql = "SELECT id, name, age FROM student";\r
            rs = stmt.executeQuery(sql);\r
\r
            // 5. Process result set (manual mapping)\r
            while (rs.next()) {\r
                int id = rs.getInt("id");\r
                String name = rs.getString("name");\r
                int age = rs.getInt("age");\r
                System.out.println("Student: " + id + ", " + name + ", " + age);\r
            }\r
        } catch (ClassNotFoundException | SQLException e) {\r
            e.printStackTrace();\r
        } finally {\r
            // 6. Close resources (boilerplate)\r
            try { if (rs != null) rs.close(); } catch (SQLException e) { e.printStackTrace(); }\r
            try { if (stmt != null) stmt.close(); } catch (SQLException e) { e.printStackTrace(); }\r
            try { if (conn != null) conn.close(); } catch (SQLException e) { e.printStackTrace(); }\r
        }\r
    }\r
}`,v=`// HibernateOrmExample.java\r
// Using Hibernate (ORM) to achieve the same result with minimal code.\r
// Entity class Student is mapped to the database table.\r
\r
import org.hibernate.Session;\r
import org.hibernate.SessionFactory;\r
import org.hibernate.cfg.Configuration;\r
import java.util.List;\r
\r
public class HibernateOrmExample {\r
    public static void main(String[] args) {\r
        // 1. Build SessionFactory (once per application)\r
        SessionFactory factory = new Configuration()\r
                .configure("hibernate.cfg.xml")\r
                .addAnnotatedClass(Student.class)\r
                .buildSessionFactory();\r
\r
        // 2. Open session\r
        Session session = factory.getCurrentSession();\r
\r
        try {\r
            // 3. Start transaction\r
            session.beginTransaction();\r
\r
            // 4. Execute HQL query – no SQL strings!\r
            List<Student> students = session.createQuery("from Student", Student.class).getResultList();\r
\r
            // 5. Process results – already mapped to Java objects\r
            for (Student s : students) {\r
                System.out.println("Student: " + s.getId() + ", " + s.getName() + ", " + s.getAge());\r
            }\r
\r
            // 6. Commit transaction\r
            session.getTransaction().commit();\r
        } finally {\r
            factory.close();\r
        }\r
    }\r
}\r
\r
// Entity class (simplified)\r
// @Entity\r
// @Table(name = "student")\r
// class Student {\r
//     @Id\r
//     @GeneratedValue(strategy = GenerationType.IDENTITY)\r
//     @Column(name = "id")\r
//     private int id;\r
//     \r
//     @Column(name = "name")\r
//     private String name;\r
//     \r
//     @Column(name = "age")\r
//     private int age;\r
//     \r
//     // getters & setters ...\r
// }`,S=[{question:"What is the primary difference between JDBC and ORM?",shortAnswer:"JDBC requires manual SQL and object mapping; ORM automates these tasks.",explanation:"JDBC is a low-level API where developers write SQL and manually map ResultSet to objects. ORM frameworks like Hibernate map Java objects directly to database tables, generating SQL automatically and reducing boilerplate.",hint:"Think about the level of abstraction and who writes the SQL.",level:"moderate",codeExample:`JDBC: String sql = "SELECT * FROM user";
ORM: session.createQuery("from User", User.class);`},{question:"What is the N+1 query problem in ORM?",shortAnswer:"When one query fetches parent entities and then N additional queries fetch each child collection.",explanation:"Example: fetching 10 students lazily loads each student's addresses. That's 1 query for students + 10 queries for addresses = 11 queries. Can be solved with JOIN FETCH or batch fetching.",hint:"Watch out for lazy loading inside loops.",level:"expert",codeExample:`// Problem:
List<Student> students = session.createQuery("from Student").list();
for(Student s: students) { s.getAddresses().size(); }
// Solution:
session.createQuery("from Student s join fetch s.addresses").list();`},{question:"Can you use both JDBC and Hibernate in the same application?",shortAnswer:"Yes, but careful with transaction boundaries and session management.",explanation:"Common pattern: use Hibernate for CRUD, fallback to JDBC for bulk operations or complex reporting queries. Ensure both use the same DataSource to avoid locking issues.",hint:"Spring's JdbcTemplate can work alongside Hibernate SessionFactory.",level:"expert",codeExample:`// Get raw connection from Hibernate session
Session session = entityManager.unwrap(Session.class);
session.doWork(connection -> { /* JDBC code */ });`},{question:"What is the role of @Transactional in Spring Data JPA compared to manual JDBC transactions?",shortAnswer:"@Transactional declaratively manages transaction boundaries; JDBC requires manual commit/rollback.",explanation:"In JDBC you call connection.commit() and connection.rollback(). With ORM and Spring, @Transactional wraps the method in a transaction, flushes the session automatically, and rolls back on runtime exception.",hint:"Think about exception propagation and declarative vs imperative.",level:"moderate",codeExample:`@Transactional
public void saveStudent(Student s) {
    // no explicit commit needed
    studentRepository.save(s);
}`},{question:"How does Hibernate's first-level cache compare to JDBC?",shortAnswer:"First-level cache is session-scoped and reduces duplicate SELECTs; JDBC has no built-in cache.",explanation:"Within a Hibernate session, if you fetch the same entity twice by ID, only one SQL query is executed. JDBC would execute two queries unless you manually cache the result.",hint:"Try fetching the same object twice in a single session.",level:"moderate",codeExample:`Session s = factory.openSession();
Book b1 = s.get(Book.class, 1L); // SQL executed
Book b2 = s.get(Book.class, 1L); // from cache, no SQL`},{question:"What is the difference between get() and load() in Hibernate?",shortAnswer:"get() immediately hits the database and returns null if not found; load() returns a proxy and throws exception if not found.",explanation:"get() is suitable when you need the data right away. load() is useful when you only need a reference (e.g., setting parent for a child) without actually fetching the state.",hint:"Consider performance and existence guarantees.",level:"moderate",codeExample:`Book b = session.load(Book.class, id); // no SQL
b.getTitle(); // SQL now`},{question:"What is the main advantage of using HQL over native SQL?",shortAnswer:"HQL is object-oriented, database-independent, and supports polymorphic queries.",explanation:"HQL works with entity names and property names, not table/column names. It reduces vendor lock-in. JDBC's native SQL ties you to a specific database dialect.",hint:"Switching from MySQL to PostgreSQL – what changes?",level:"moderate",codeExample:`// HQL
from Student s where s.age > 18
// Native SQL
SELECT * FROM student WHERE age > 18`},{question:"Explain the concept of 'dirty checking' in ORM. How is it different from JDBC?",shortAnswer:"Hibernate automatically detects changes to managed entities and issues UPDATEs at flush time; JDBC requires explicit UPDATE statements.",explanation:"When you modify a property of a persistent object, Hibernate compares snapshot and snapshot-dirty states during flush. JDBC forces developers to write and execute UPDATE manually.",hint:"Modify a student's name inside a transaction – do you need to call update()?",level:"expert",codeExample:`session.beginTransaction();
Student s = session.get(Student.class, 1L);
s.setName("New Name");
session.getTransaction().commit(); // UPDATE is auto-generated`},{question:"What is the purpose of the @GeneratedValue annotation? Is there a JDBC equivalent?",shortAnswer:"@GeneratedValue configures primary key generation strategies (AUTO, IDENTITY, SEQUENCE, TABLE). JDBC would require manual handling of generated keys via getGeneratedKeys().",explanation:"Hibernate abstracts the database-specific key generation. JDBC gives you more control but more boilerplate and portability issues.",hint:"Try using IDENTITY on MySQL vs SEQUENCE on PostgreSQL.",level:"moderate",codeExample:`@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;`},{question:"How does exception handling differ between JDBC and Hibernate?",shortAnswer:"JDBC throws SQLException (checked), while Hibernate uses HibernateException (unchecked) or PersistenceException (JPA).",explanation:"Unchecked exceptions in Hibernate simplify code because you don't have to catch every low-level SQL error. But you still need to handle constraint violations and roll back transactions.",hint:"Which one forces try-catch for every database call?",level:"moderate",codeExample:`// JDBC requires catch
} catch (SQLException e) { ... }
// Hibernate - no forced catch but you may handle PersistenceException`},{question:"What is the difference between fetch type LAZY and EAGER in ORM, and how does JDBC simulate it?",shortAnswer:"LAZY loads associations on-demand; EAGER loads them immediately (via JOIN or separate SELECT). JDBC would need explicit JOINs or separate queries to achieve either.",explanation:"EAGER can cause performance issues if overused (cartesian product). LAZY can cause LazyInitializationException if accessed outside session. JDBC gives full control but lacks automatic lazy loading.",hint:"Check when you open and close the session.",level:"expert",codeExample:`@OneToMany(fetch = FetchType.LAZY)
private List<Order> orders;`},{question:"How would you implement pagination in JDBC vs Hibernate?",shortAnswer:"JDBC uses LIMIT/OFFSET or ROWNUM; Hibernate provides setFirstResult() and setMaxResults() that work across databases.",explanation:"Hibernate translates these methods into database-specific pagination (e.g., LIMIT for MySQL, ROWNUM for Oracle). JDBC forces you to write dialect-specific SQL fragments.",hint:"What happens when you move from H2 to Oracle?",level:"moderate",codeExample:`// Hibernate
Query q = session.createQuery("from Student");
q.setFirstResult(20).setMaxResults(10);
// JDBC
String sql = "SELECT * FROM student LIMIT 10 OFFSET 20"; // MySQL only`},{question:"What are the benefits of using Hibernate's Criteria API over raw JDBC?",shortAnswer:"Criteria API allows dynamic, type-safe query building without string concatenation, reducing SQL injection risk.",explanation:"JDBC often requires concatenating user input into SQL strings, leading to injection vulnerabilities. Criteria API uses programmatic predicates and parameter binding.",hint:"How would you add a dynamic 'where' clause based on user input?",level:"moderate",codeExample:`// JPA CriteriaBuilder
cb.equal(root.get("name"), name);
// JDBC vulnerable version
String sql = "SELECT * FROM student WHERE name = '" + name + "'";`},{question:"How does connection pooling differ between bare JDBC and Hibernate?",shortAnswer:"JDBC requires manual pooling setup (e.g., HikariCP). Hibernate integrates pooling out-of-the-box via c3p0 or HikariCP configuration.",explanation:"JDBC DriverManager.getConnection() creates a new physical connection each time, which is expensive. Hibernate's connection pool reuses connections and dramatically improves performance.",hint:"Check your production logs for 'connection open/close'.",level:"expert",codeExample:`// Hibernate config
<property name="hibernate.c3p0.max_size">20</property>`},{question:"What is the purpose of hbm2ddl.auto in Hibernate, and is there a JDBC equivalent?",shortAnswer:"hbm2ddl.auto automates schema validation, update, or creation. JDBC has no built-in schema generation; you must use external tools or run DDL scripts manually.",explanation:"Common values: validate, update, create, create-drop. In development, 'update' (or 'create-drop') is convenient. In production, usually 'validate' or none.",hint:"What would 'create-drop' do to your data at application shutdown?",level:"moderate",codeExample:'<property name="hibernate.hbm2ddl.auto">update</property>'},{question:"Explain the concept of 'detached objects' in Hibernate. Does JDBC have anything similar?",shortAnswer:"Detached objects are persistent objects no longer associated with a session. JDBC has no concept of object state tracking; everything is manual.",explanation:"After session.close(), the object becomes detached. You can modify it and later merge() it back. JDBC would require re-fetching and comparing all fields manually.",hint:"Think about web applications where entities are sent to the UI.",level:"expert",codeExample:`session.close();
student.setName("New");
Session newSession = factory.openSession();
newSession.merge(student);`},{question:"What is the difference between Hibernate's @NaturalId and a regular column? When would you use JDBC for natural keys?",shortAnswer:"@NaturalId marks a business key (e.g., email) for caching and load-by-natural-id. JDBC requires manual queries for such lookups.",explanation:"Hibernate can cache natural ID lookups and provides loadByNaturalId() API. JDBC would need a SELECT by that column every time, with no automatic caching.",hint:"What if 'email' is unique and frequently used in WHERE clauses?",level:"expert",codeExample:`@NaturalId
private String email;
// usage
session.byNaturalId(User.class).using("email", email).load();`},{question:"How do you handle BLOB/CLOB data in JDBC vs Hibernate?",shortAnswer:"Both support BLOB/CLOB, but Hibernate provides @Lob and automatic conversion to byte[]/String, while JDBC requires streaming or getBlob() methods.",explanation:"Hibernate simplifies large object handling by mapping them directly to Java types. JDBC needs special handling (InputStream, Reader) and resource management.",hint:"What's the risk of reading a 100MB image into memory?",level:"moderate",codeExample:`@Lob
private byte[] photo; // Hibernate
// JDBC
Blob blob = rs.getBlob("photo");
InputStream is = blob.getBinaryStream();`},{question:"What is the 'Open Session in View' pattern, and why is it controversial?",shortAnswer:"OSIV keeps the Hibernate session open throughout the view rendering to avoid LazyInitializationException, but it can cause connection holding issues.",explanation:"In web apps, if you close session before rendering, lazy collections throw exception. OSIV delays closing until after view. However, it can lead to N+1 queries and holds DB connections longer.",hint:"Balance between convenience and scalability.",level:"expert",codeExample:`// Spring property
spring.jpa.open-in-view=true // default in some versions`},{question:"How does batch processing differ between JDBC and Hibernate?",shortAnswer:"JDBC uses addBatch() and executeBatch(); Hibernate uses batching properties and session.flush()/clear() to avoid memory overflow.",explanation:"Hibernate's batching is transparent but requires configuration (hibernate.jdbc.batch_size). Without batching, Hibernate may still issue many single INSERT statements. JDBC batching is explicit but faster for pure bulk inserts.",hint:"What happens to the persistence context when you insert 10000 entities?",level:"expert",codeExample:`// Hibernate batch
for(int i=0;i<10000;i++) {
    session.save(entity);
    if(i%50==0) { session.flush(); session.clear(); }
}`},{question:"What are the pros and cons of using native queries in Hibernate compared to pure JDBC?",shortAnswer:"Native queries in Hibernate return managed entities but bypass certain Hibernate optimizations; pure JDBC returns raw results and no caching.",explanation:"Hibernate's native queries can still map results to entities using @SqlResultSetMapping. However, they skip the first-level cache and might lead to stale data. Pure JDBC gives full control but no object mapping.",hint:"When do you absolutely need native query over HQL?",level:"expert",codeExample:`@Query(value = "SELECT * FROM student WHERE age > :age", nativeQuery = true)
List<Student> findByAgeNative(@Param("age") int age);`},{question:"Explain the purpose of the 'merge' operation versus 'update' in Hibernate. How would you handle similar logic in JDBC?",shortAnswer:"merge() copies state from a detached entity to a persistent entity; update() reattaches. JDBC would require manual field-by-field copy or an UPDATE statement.",explanation:"merge returns a managed copy, leaving the original unchanged. update throws exception if the object is detached and no database row exists. JDBC doesn't track states.",hint:"Try merging an entity that already exists in the session.",level:"expert",codeExample:"Student managed = session.merge(detachedStudent); // safer"},{question:"What is Hibernate's 'version-less' optimistic locking with @OptimisticLock(excluded)?",shortAnswer:"It allows excluding certain fields from version increment. JDBC must manually implement optimistic locking using a version column or timestamp.",explanation:"Hibernate uses a version column by default. But you can annotate fields as @OptimisticLock(excluded=true) so they don't cause version increments when modified. JDBC would need custom logic.",hint:"Useful for updating counters without changing the row version.",level:"expert",codeExample:`@Version private int version;
@OptimisticLock(excluded=true)
private int viewCount;`},{question:"How do you implement inheritance mapping in Hibernate (SINGLE_TABLE, JOINED, TABLE_PER_CLASS) and what's the JDBC alternative?",shortAnswer:"Hibernate provides three strategies; JDBC requires manual discriminator or separate table handling on every query.",explanation:"SINGLE_TABLE uses a discriminator column; JOINED uses normalized tables; TABLE_PER_CLASS creates a table per concrete class. JDBC would force you to UNION or join manually and map the result.",hint:"Which strategy gives the best performance for polymorphic queries?",level:"expert",codeExample:`@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Vehicle { }`},{question:"What is the 'Proxy Pattern' in Hibernate and how does it relate to lazy loading?",shortAnswer:"Hibernate uses dynamic proxies or bytecode enhancement to intercept method calls on lazy associations and load data on demand.",explanation:"When you call load() or access a lazy @ManyToOne, Hibernate returns a proxy that looks like the real object but has no database data until a method is invoked. JDBC has no proxy concept.",hint:"Why does calling getId() on a proxy not trigger a SELECT?",level:"expert",codeExample:`Book b = session.load(Book.class, id); // proxy
b.getTitle(); // now SQL`},{question:"Explain the concept of 'flush mode' in Hibernate (AUTO, COMMIT, MANUAL). JDBC has no equivalent.",shortAnswer:"Flush mode determines when Hibernate synchronizes the persistence context with the database. JDBC executes each statement immediately unless you explicitly batch.",explanation:"AUTO flushes before queries; COMMIT flushes only at transaction commit; MANUAL requires explicit flush(). This contrasts with JDBC where each insert/update is sent immediately.",hint:"What happens when you query after an UPDATE but before commit?",level:"expert",codeExample:"session.setHibernateFlushMode(FlushMode.COMMIT);"},{question:"How does Hibernate's @DynamicInsert and @DynamicUpdate affect performance compared to JDBC?",shortAnswer:"They generate SQL that includes only changed columns, reducing network traffic and preserving defaults. JDBC can achieve similar with dynamic SQL building.",explanation:"By default, Hibernate includes all columns in UPDATE/INSERT. Dynamic* annotations generate column lists at runtime. JDBC gives you full control but at the cost of manual string building.",hint:"Useful when you have large tables with many nullable columns and default values.",level:"expert",codeExample:`@DynamicUpdate
@Entity
public class User { ... }`},{question:"What are the benefits of using Spring Data JPA over raw Hibernate or JDBC?",shortAnswer:"Spring Data JPA provides repository abstraction, automatic query derivation, and pagination, reducing boilerplate even further than Hibernate alone.",explanation:"With JDBC you write all DAO code. With Hibernate you write some. With Spring Data JPA you often write only an interface. It builds on Hibernate but adds method name parsing and query by example.",hint:"What method name would you write to find by last name and age?",level:"expert",codeExample:`interface StudentRepo extends JpaRepository<Student, Long> {
    List<Student> findByLastNameAndAgeGreaterThan(String lastName, int age);
}`},{question:"How do you handle multi-tenancy in Hibernate vs JDBC?",shortAnswer:"Hibernate supports schema, database, or discriminator-based multi-tenancy. JDBC would require manually switching connections or including tenant filters in every query.",explanation:"Hibernate can intercept connection to set tenant ID via @TenantId or schema switching. JDBC forces you to handle tenant isolation at the connection or query level, which is error-prone.",hint:"Think of SaaS applications where each customer's data is isolated.",level:"expert",codeExample:'<property name="hibernate.multiTenancy">SCHEMA</property>'},{question:"Last question: In terms of debugging and performance tuning, which approach (JDBC vs ORM) is easier for a beginner?",shortAnswer:"JDBC is easier for understanding SQL, but ORM hides complexity, making debugging harder initially.",explanation:"With JDBC, you see every SQL, every mapping. With Hibernate, issues like N+1 queries, LazyInitializationException, or proxy serialization are non-obvious. However, for simple CRUD, ORM is faster to develop.",hint:"What would you prefer when you need to analyze an unexpected slow query?",level:"expert",codeExample:`// Enable SQL logging in Hibernate
<property name="hibernate.show_sql">true</property>
<property name="hibernate.format_sql">true</property>`}],q=()=>{const[n,x]=t.useState({intro:!1,comparison:!1,jdbcCode:!1,ormCode:!1,prosCons:!1,checklist:!1}),g=(r,s)=>{r.forEach(o=>{o.isIntersecting&&x(l=>({...l,[s]:!0}))})},i=(r,s)=>{if(!r.current)return;const o=new IntersectionObserver(l=>g(l,s),{threshold:.2,rootMargin:"0px 0px -50px 0px"});return o.observe(r.current),o},d=t.useRef(null),c=t.useRef(null),u=t.useRef(null),h=t.useRef(null),m=t.useRef(null),b=t.useRef(null);return t.useEffect(()=>{const r=[i(d,"intro"),i(c,"comparison"),i(u,"jdbcCode"),i(h,"ormCode"),i(m,"prosCons"),i(b,"checklist")];return()=>r.forEach(s=>s&&s.disconnect())},[]),e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 font-sans leading-relaxed",children:[e.jsx("style",{children:`
    @keyframes fadeSlideUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes softGlow {
      0% {
        box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.3);
      }
      70% {
        box-shadow: 0 0 0 8px rgba(59, 130, 246, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
      }
    }
    .animate-fadeSlideUp {
      animation: fadeSlideUp 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
    }
    .animate-softGlow {
      animation: softGlow 1.5s infinite;
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-fadeSlideUp {
        animation: none;
        opacity: 1;
        transform: translateY(0);
      }
      .animate-softGlow {
        animation: none;
      }
    }
  `}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16",children:[e.jsxs("div",{ref:d,className:a("text-center mb-16 transition-all duration-700 ease-out",n.intro?"animate-fadeSlideUp":"opacity-0 translate-y-8"),children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400",children:"ORM vs JDBC"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Bridging the gap between Object-Oriented Java and Relational Databases"}),e.jsxs("div",{className:"mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm",children:[e.jsx("span",{className:"font-mono",children:"🔍"})," Core Concept • Data Persistence • Java Ecosystem"]})]}),e.jsxs("div",{className:a("mb-16 bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl",n.intro?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.1s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"📖"})," Understanding the Core"]}),e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-blue-600 dark:text-blue-400",children:"JDBC (Java Database Connectivity)"})," is the low-level API that allows Java applications to execute SQL statements. It requires manual handling of connections, statements, result sets, and SQL injection risks. Each database interaction involves boilerplate code and manual mapping between database rows and Java objects."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-green-600 dark:text-green-400",children:"ORM (Object-Relational Mapping)"})," like Hibernate abstracts away the SQL layer. You work with plain Java objects (Entities), and the ORM framework generates optimized SQL, manages connections, and maps results automatically. This reduces boilerplate by ~70% and makes the code more maintainable."]}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500 mt-4",children:e.jsx("p",{className:"italic",children:"✨ Real-world analogy: JDBC is like assembling furniture with individual screws and a manual; ORM is like buying pre-assembled smart furniture that auto-adjusts to your room."})})]})]}),e.jsxs("div",{ref:c,className:a("mb-16",n.comparison?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-6 text-center",children:"Visual Flow Comparison"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group",children:[e.jsx("h3",{className:"text-xl font-bold text-center mb-3 text-red-600 dark:text-red-400",children:"JDBC Approach"}),e.jsxs("svg",{viewBox:"0 0 320 300",className:"w-full h-auto",children:[e.jsx("rect",{x:"10",y:"10",width:"80",height:"40",rx:"8",fill:"#3b82f6",className:"group-hover:fill-blue-400 transition-colors"}),e.jsx("text",{x:"50",y:"35",textAnchor:"middle",fill:"white",fontSize:"12",children:"Java App"}),e.jsx("path",{d:"M90 30 L120 30",stroke:"#94a3b8",strokeWidth:"2",markerEnd:"url(#arrowJDBC)"}),e.jsx("rect",{x:"125",y:"10",width:"100",height:"40",rx:"8",fill:"#ef4444",className:"group-hover:fill-red-400 transition-colors"}),e.jsx("text",{x:"175",y:"35",textAnchor:"middle",fill:"white",fontSize:"11",children:"SQL String"}),e.jsx("path",{d:"M225 30 L255 30",stroke:"#94a3b8",strokeWidth:"2",markerEnd:"url(#arrowJDBC)"}),e.jsx("rect",{x:"260",y:"10",width:"50",height:"40",rx:"8",fill:"#f59e0b",className:"group-hover:fill-amber-400 transition-colors"}),e.jsx("text",{x:"285",y:"35",textAnchor:"middle",fill:"white",fontSize:"10",children:"DB"}),e.jsx("path",{d:"M285 50 L285 90",stroke:"#94a3b8",strokeWidth:"2",markerEnd:"url(#arrowJDBC)"}),e.jsx("rect",{x:"230",y:"95",width:"110",height:"40",rx:"8",fill:"#8b5cf6",className:"group-hover:fill-violet-400 transition-colors"}),e.jsx("text",{x:"285",y:"120",textAnchor:"middle",fill:"white",fontSize:"11",children:"ResultSet"}),e.jsx("path",{d:"M230 115 L200 115",stroke:"#94a3b8",strokeWidth:"2",markerEnd:"url(#arrowJDBC)"}),e.jsx("rect",{x:"60",y:"95",width:"135",height:"40",rx:"8",fill:"#ec489a",className:"group-hover:fill-pink-400 transition-colors"}),e.jsx("text",{x:"128",y:"120",textAnchor:"middle",fill:"white",fontSize:"10",children:"Manual Mapping"}),e.jsx("path",{d:"M60 115 L30 115 L30 70",stroke:"#94a3b8",strokeWidth:"2",markerEnd:"url(#arrowJDBC)",fill:"none"}),e.jsx("rect",{x:"10",y:"160",width:"80",height:"40",rx:"8",fill:"#3b82f6",className:"group-hover:fill-blue-400 transition-colors"}),e.jsx("text",{x:"50",y:"185",textAnchor:"middle",fill:"white",fontSize:"12",children:"Java Object"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowJDBC",markerWidth:"8",markerHeight:"8",refX:"6",refY:"4",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,4 L0,8 Z",fill:"#94a3b8"})})}),e.jsx("text",{x:"160",y:"200",textAnchor:"middle",fill:"#ef4444",fontSize:"11",className:"font-mono",children:"⚠️ Boilerplate + SQL Errors"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group",children:[e.jsx("h3",{className:"text-xl font-bold text-center mb-3 text-green-600 dark:text-green-400",children:"ORM (Hibernate)"}),e.jsxs("svg",{viewBox:"0 0 320 270",className:"w-full h-auto",children:[e.jsx("rect",{x:"10",y:"10",width:"80",height:"40",rx:"8",fill:"#3b82f6",className:"group-hover:fill-blue-400 transition-colors"}),e.jsx("text",{x:"50",y:"35",textAnchor:"middle",fill:"white",fontSize:"12",children:"Java Entity"}),e.jsx("path",{d:"M90 30 L130 30",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrowORM)"}),e.jsx("rect",{x:"135",y:"10",width:"100",height:"40",rx:"8",fill:"#10b981",className:"group-hover:fill-emerald-400 transition-colors"}),e.jsx("text",{x:"185",y:"35",textAnchor:"middle",fill:"white",fontSize:"11",children:"Session / EM"}),e.jsx("path",{d:"M235 30 L270 30",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrowORM)"}),e.jsx("rect",{x:"275",y:"10",width:"40",height:"40",rx:"8",fill:"#f59e0b"}),e.jsx("text",{x:"295",y:"35",textAnchor:"middle",fill:"white",fontSize:"10",children:"DB"}),e.jsx("path",{d:"M295 50 L295 100",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrowORM)"}),e.jsx("rect",{x:"230",y:"105",width:"130",height:"40",rx:"8",fill:"#8b5cf6",className:"group-hover:fill-violet-400 transition-colors"}),e.jsx("text",{x:"295",y:"130",textAnchor:"middle",fill:"white",fontSize:"11",children:"Auto-Mapping"}),e.jsx("path",{d:"M230 125 L190 125",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrowORM)"}),e.jsx("rect",{x:"60",y:"105",width:"125",height:"40",rx:"8",fill:"#10b981",className:"group-hover:fill-emerald-400 transition-colors"}),e.jsx("text",{x:"123",y:"130",textAnchor:"middle",fill:"white",fontSize:"11",children:"Java Object"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowORM",markerWidth:"8",markerHeight:"8",refX:"6",refY:"4",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,4 L0,8 Z",fill:"#10b981"})})}),e.jsx("text",{x:"150",y:"195",textAnchor:"middle",fill:"#10b981",fontSize:"12",className:"font-mono animate-softGlow",children:"✨ Productivity + Type Safety"})]})]})]})]}),e.jsxs("div",{className:"space-y-12",children:[e.jsxs("div",{ref:u,className:a("transition-all duration-500",n.jdbcCode?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:"💻 Traditional JDBC Example"}),e.jsx(p,{fileModule:w,title:"JdbcExample.java - Manual mapping & resource handling",highlightLines:[12,13,14,18,19,20]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"⬆️ Observe the boilerplate: DriverManager, try-catch-finally, manual iteration over ResultSet."})]}),e.jsxs("div",{ref:h,className:a("transition-all duration-500",n.ormCode?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.4s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:"✨ Hibernate ORM Example"}),e.jsx(p,{fileModule:v,title:"HibernateOrmExample.java - Clean, focused on business logic",highlightLines:[10,11,12]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"⬆️ No SQL strings, automatic dirty checking, and built-in caching."})]})]}),e.jsxs("div",{ref:m,className:a("grid md:grid-cols-2 gap-6 my-16",n.prosCons?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.5s"},children:[e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 transition-all hover:shadow-lg",children:[e.jsx("h3",{className:"text-xl font-bold text-green-700 dark:text-green-300 mb-3",children:"✅ ORM Advantages"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Reduces boilerplate by 70-80%"}),e.jsx("li",{children:"Object-oriented thinking, not relational"}),e.jsx("li",{children:"Automatic query generation & caching"}),e.jsx("li",{children:"Lazy loading, connection pooling"}),e.jsx("li",{children:"Database vendor independence"})]})]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800 transition-all hover:shadow-lg",children:[e.jsx("h3",{className:"text-xl font-bold text-red-700 dark:text-red-300 mb-3",children:"❌ JDBC Pain Points"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Manual SQL & result set mapping"}),e.jsx("li",{children:"Boilerplate (Connection, Statement, ResultSet)"}),e.jsx("li",{children:"SQL injection risk (if not using PreparedStatement)"}),e.jsx("li",{children:"No built-in caching"}),e.jsx("li",{children:"Verbose error handling"})]})]})]}),e.jsxs("div",{className:a("mb-12 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-8 border-amber-500",n.prosCons?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.6s"},children:[e.jsx("h3",{className:"text-xl font-bold mb-3 flex items-center gap-2",children:"💡 Tips & Tricks (Professional)"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Start with JDBC"})," to understand the underlying layers, then adopt ORM for productivity."]}),e.jsxs("li",{children:["🔹 Use ",e.jsx("strong",{children:"JPA annotations"})," (like @Entity) for portable ORM mapping across providers (Hibernate, EclipseLink)."]}),e.jsx("li",{children:"🔹 For complex reports, sometimes fallback to native JDBC queries inside ORM – hybrid approach works!"}),e.jsxs("li",{children:["🔹 Enable ",e.jsx("strong",{children:"show_sql"})," in Hibernate to inspect generated SQL."]}),e.jsx("li",{children:"🔹 In microservices, ORM still helps; but for very high throughput, consider jOOQ or plain JDBC with caching."})]}),e.jsx("h3",{className:"text-xl font-bold mt-6 mb-3 flex items-center gap-2",children:"⚠️ Common Pitfalls (Beginners)"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"❌ Thinking ORM is always faster – it adds overhead; complex queries need tuning."}),e.jsx("li",{children:"❌ Forgetting to close resources in JDBC leading to connection leaks."}),e.jsx("li",{children:"❌ Not understanding the N+1 query problem in ORM."}),e.jsx("li",{children:"❌ Using ORM without understanding underlying SQL, causing performance disasters."}),e.jsx("li",{children:"❌ Mixing JDBC and ORM transactions without care."})]}),e.jsx("div",{className:"mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg text-center",children:e.jsx("p",{className:"text-blue-600 dark:text-blue-400 font-semibold",children:"✅ Mini Checklist: Before using ORM, ensure you understand JDBC basics. After ORM, learn to optimize lazy loading & caching."})})]}),e.jsxs("div",{className:"my-12 p-5 bg-gray-100 dark:bg-gray-800/60 rounded-xl border border-gray-300 dark:border-gray-600 text-center transition-all hover:scale-[1.01]",children:[e.jsx("h4",{className:"font-mono text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2",children:"🔎 Think about ..."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["If you were to build a school management system for ",e.jsx("strong",{children:"Barrackpore High School"}),` with entities like Student, Teacher, Subject – would you write 300 lines of JDBC or use Hibernate entities? What's easier to maintain when adding a new "Attendance" feature?`]})]}),e.jsx(y,{title:"ORM vs JDBC - Expert FAQs",questions:S}),e.jsx("div",{className:"mt-12",children:e.jsx(f,{note:"🚀 ORM vs JDBC is not a war – it's about context. I've seen many professionals over-engineer ORM for tiny CRUD projects and under-engineer with raw JDBC for complex object graphs. Start with JDBC for deep understanding, then let Hibernate take the wheel. Remember, even Hibernate uses JDBC under the hood! Also, always name your entities meaningfully like 'Student' not 'Entity1' – future-you will thank."})})]})]})};export{q as default};
