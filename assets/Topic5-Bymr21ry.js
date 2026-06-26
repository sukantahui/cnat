import{r as t,j as e}from"./index-UqT5O8p1.js";import{c as n}from"./clsx-B-dksMZM.js";import{F as b}from"./FAQTemplate-DIfKyZOP.js";import{T as R}from"./TeacherSukantaHui-n-XI7Z6e.js";import{J as a}from"./JavaFileLoader-BN3Zd4kz.js";import"./git-branch-DqaaVz3l.js";import"./JavaCodeBlock-BRhaxxgt.js";import"./prism-D4X2Is8h.js";import"./browser-BdROBGLT.js";import"./prism-java-BwO6k4I_.js";const N=`// BasicHql.java\r
import org.hibernate.Session;\r
import org.hibernate.SessionFactory;\r
import org.hibernate.cfg.Configuration;\r
import java.util.List;\r
\r
public class BasicHql {\r
    public static void main(String[] args) {\r
        SessionFactory factory = new Configuration().configure().buildSessionFactory();\r
        Session session = factory.openSession();\r
        \r
        // 1. Simple FROM (returns all students)\r
        List<Student> students = session.createQuery("FROM Student", Student.class).list();\r
        \r
        // 2. With alias\r
        List<Student> students2 = session.createQuery("FROM Student s", Student.class).list();\r
        \r
        // 3. SELECT specific fields (projection) – returns Object[]\r
        List<Object[]> namesAndCities = session.createQuery(\r
            "SELECT s.name, s.city FROM Student s", Object[].class).list();\r
        \r
        // 4. ORDER BY\r
        List<Student> sorted = session.createQuery(\r
            "FROM Student s ORDER BY s.name DESC", Student.class).list();\r
        \r
        // 5. DISTINCT\r
        List<String> distinctCities = session.createQuery(\r
            "SELECT DISTINCT s.city FROM Student s", String.class).list();\r
        \r
        session.close();\r
        factory.close();\r
    }\r
}`,w=`// WhereHql.java\r
import org.hibernate.Session;\r
import org.hibernate.SessionFactory;\r
import org.hibernate.cfg.Configuration;\r
import java.util.List;\r
\r
public class WhereHql {\r
    public static void main(String[] args) {\r
        SessionFactory factory = new Configuration().configure().buildSessionFactory();\r
        Session session = factory.openSession();\r
        \r
        // Simple condition\r
        List<Student> fromBarrackpore = session.createQuery(\r
            "FROM Student s WHERE s.city = 'Barrackpore'", Student.class).list();\r
        \r
        // Multiple conditions (AND, OR)\r
        List<Student> fromIchapur = session.createQuery(\r
            "FROM Student s WHERE s.city = 'Ichapur' AND s.age > 18", Student.class).list();\r
        \r
        // LIKE operator\r
        List<Student> nameStartingS = session.createQuery(\r
            "FROM Student s WHERE s.name LIKE 'S%'", Student.class).list();\r
        \r
        // BETWEEN\r
        List<Student> ageRange = session.createQuery(\r
            "FROM Student s WHERE s.age BETWEEN 10 AND 15", Student.class).list();\r
        \r
        // IN clause\r
        List<Student> inCities = session.createQuery(\r
            "FROM Student s WHERE s.city IN ('Barrackpore', 'Shyamnagar', 'Naihati')", Student.class).list();\r
        \r
        // IS NULL\r
        List<Student> missingCity = session.createQuery(\r
            "FROM Student s WHERE s.city IS NULL", Student.class).list();\r
        \r
        session.close();\r
        factory.close();\r
    }\r
}`,H=`// JoinsHql.java\r
import org.hibernate.Session;\r
import org.hibernate.SessionFactory;\r
import org.hibernate.cfg.Configuration;\r
import java.util.List;\r
\r
public class JoinsHql {\r
    public static void main(String[] args) {\r
        SessionFactory factory = new Configuration().configure().buildSessionFactory();\r
        Session session = factory.openSession();\r
        \r
        // INNER JOIN (students with their courses)\r
        List<Object[]> result = session.createQuery(\r
            "SELECT s.name, c.courseName FROM Student s JOIN s.courses c", Object[].class).list();\r
        \r
        // LEFT JOIN (include students with no courses)\r
        List<Student> studentsWithCourses = session.createQuery(\r
            "SELECT DISTINCT s FROM Student s LEFT JOIN s.courses c", Student.class).list();\r
        \r
        // JOIN FETCH – solves N+1 problem (loads courses immediately)\r
        List<Student> studentsWithCoursesFetched = session.createQuery(\r
            "FROM Student s JOIN FETCH s.courses c", Student.class).list();\r
        // Now courses are already loaded, no additional queries when accessed.\r
        \r
        // Fetch multiple associations? Use only one fetch join per query to avoid cartesian product.\r
        session.close();\r
        factory.close();\r
    }\r
}`,L=`// AggregatesHql.java\r
import org.hibernate.Session;\r
import org.hibernate.SessionFactory;\r
import org.hibernate.cfg.Configuration;\r
\r
public class AggregatesHql {\r
    public static void main(String[] args) {\r
        SessionFactory factory = new Configuration().configure().buildSessionFactory();\r
        Session session = factory.openSession();\r
        \r
        // COUNT\r
        Long studentCount = session.createQuery(\r
            "SELECT COUNT(s) FROM Student s", Long.class).uniqueResult();\r
        \r
        // SUM (assuming marks field exists)\r
        Double totalMarks = session.createQuery(\r
            "SELECT SUM(m.marks) FROM Student s JOIN s.marks m WHERE s.id = 1", Double.class).uniqueResult();\r
        \r
        // AVG\r
        Double avgAge = session.createQuery(\r
            "SELECT AVG(s.age) FROM Student s", Double.class).uniqueResult();\r
        \r
        // MIN / MAX\r
        Integer minAge = session.createQuery(\r
            "SELECT MIN(s.age) FROM Student s", Integer.class).uniqueResult();\r
        Integer maxAge = session.createQuery(\r
            "SELECT MAX(s.age) FROM Student s", Integer.class).uniqueResult();\r
        \r
        // GROUP BY and HAVING\r
        Object[] cityStats = (Object[]) session.createQuery(\r
            "SELECT s.city, COUNT(s) FROM Student s GROUP BY s.city HAVING COUNT(s) > 1", Object[].class).uniqueResult();\r
        \r
        session.close();\r
        factory.close();\r
    }\r
}`,O=`// ParametersHql.java\r
import org.hibernate.Session;\r
import org.hibernate.SessionFactory;\r
import org.hibernate.cfg.Configuration;\r
import org.hibernate.query.Query;\r
import java.util.List;\r
\r
public class ParametersHql {\r
    public static void main(String[] args) {\r
        SessionFactory factory = new Configuration().configure().buildSessionFactory();\r
        Session session = factory.openSession();\r
        \r
        // Named parameters (recommended)\r
        Query<Student> query1 = session.createQuery(\r
            "FROM Student s WHERE s.city = :city AND s.age > :minAge", Student.class);\r
        query1.setParameter("city", "Barrackpore");\r
        query1.setParameter("minAge", 18);\r
        List<Student> result1 = query1.list();\r
        \r
        // Positional parameters (legacy, order matters)\r
        Query<Student> query2 = session.createQuery(\r
            "FROM Student s WHERE s.city = ?1 AND s.age > ?2", Student.class);\r
        query2.setParameter(1, "Shyamnagar");\r
        query2.setParameter(2, 20);\r
        List<Student> result2 = query2.list();\r
        \r
        // Parameter list for IN clause\r
        Query<Student> query3 = session.createQuery(\r
            "FROM Student s WHERE s.city IN :cities", Student.class);\r
        query3.setParameterList("cities", List.of("Barrackpore", "Ichapur"));\r
        List<Student> result3 = query3.list();\r
        \r
        session.close();\r
        factory.close();\r
    }\r
}`,q=`// NamedQueries.java\r
import javax.persistence.*;\r
\r
// Define named queries on entity class\r
@NamedQueries({\r
    @NamedQuery(name = "Student.findByCity", query = "FROM Student s WHERE s.city = :city"),\r
    @NamedQuery(name = "Student.countByCity", query = "SELECT COUNT(s) FROM Student s WHERE s.city = :city")\r
})\r
@Entity\r
public class Student {\r
    // fields...\r
}\r
\r
// Usage in DAO\r
public class StudentDAO {\r
    public List<Student> getStudentsByCity(String city) {\r
        Session session = sessionFactory.getCurrentSession();\r
        Query<Student> query = session.createNamedQuery("Student.findByCity", Student.class);\r
        query.setParameter("city", city);\r
        return query.list();\r
    }\r
}\r
\r
// Also possible in XML (META-INF/orm.xml)\r
// <named-query name="Student.findByCity">\r
//   <query>FROM Student s WHERE s.city = :city</query>\r
// </named-query>`,j=`// PaginationHql.java\r
import org.hibernate.Session;\r
import org.hibernate.SessionFactory;\r
import org.hibernate.cfg.Configuration;\r
import org.hibernate.query.Query;\r
import java.util.List;\r
\r
public class PaginationHql {\r
    public static void main(String[] args) {\r
        SessionFactory factory = new Configuration().configure().buildSessionFactory();\r
        Session session = factory.openSession();\r
        \r
        int pageNumber = 2;     // 0-indexed (0 = first page)\r
        int pageSize = 10;\r
        \r
        Query<Student> query = session.createQuery("FROM Student s ORDER BY s.id", Student.class);\r
        query.setFirstResult(pageNumber * pageSize);  // offset\r
        query.setMaxResults(pageSize);               // limit\r
        \r
        List<Student> page = query.list();\r
        \r
        // Get total count for pagination UI\r
        Long totalCount = session.createQuery("SELECT COUNT(*) FROM Student", Long.class).uniqueResult();\r
        int totalPages = (int) Math.ceil((double) totalCount / pageSize);\r
        \r
        System.out.println("Page " + (pageNumber+1) + " of " + totalPages);\r
        \r
        session.close();\r
        factory.close();\r
    }\r
}`,T=[{question:"What is the main difference between HQL and SQL?",shortAnswer:"HQL operates on entity objects and their properties; SQL operates on tables and columns.",explanation:"HQL is database-independent, uses class names, property names, and supports polymorphic queries. SQL is database-specific and ties you to a particular schema.",hint:"Try writing 'FROM Student' vs 'SELECT * FROM students'.",level:"basic",codeExample:`HQL: FROM Student s WHERE s.city = 'Ichapur'
SQL: SELECT * FROM students WHERE city = 'Ichapur'`},{question:"What is the default return type of session.createQuery() when no type is specified?",shortAnswer:"org.hibernate.query.Query returning Object if using raw Hibernate, or TypedQuery with type parameter if using JPA.",explanation:"Modern Hibernate encourages using typed queries: session.createQuery(hql, Student.class). Without type, it returns raw Query and you need to cast results.",hint:"Always use the typed version to avoid ClassCastException.",level:"moderate",codeExample:'Query<Student> q = session.createQuery("FROM Student", Student.class);'},{question:"Explain the difference between JOIN and JOIN FETCH in HQL.",shortAnswer:"JOIN creates a projection or allows conditions on associated entities; JOIN FETCH eagerly loads the association in the same query (solves N+1).",explanation:"JOIN without FETCH only returns the root entity (unless you select the association). JOIN FETCH tells Hibernate to initialize the association when loading the root entity, avoiding additional queries.",hint:"Use JOIN FETCH when you know you'll need the association immediately.",level:"expert",codeExample:"FROM Student s JOIN FETCH s.courses WHERE s.id = 1"},{question:"How can you avoid the N+1 query problem using HQL?",shortAnswer:"Use JOIN FETCH or use a batch fetch strategy, or write a DTO query that fetches all needed data.",explanation:"JOIN FETCH retrieves the association in the same SELECT. For multiple collections, consider batch size or multiple queries.",hint:"See the SQL log: without FETCH, one query for parent, then N for children.",level:"moderate",codeExample:"FROM Student s JOIN FETCH s.address WHERE s.city = 'Barrackpore'"},{question:"What is the purpose of the SELECT clause in HQL? Is it mandatory?",shortAnswer:"SELECT is optional – if omitted, it implies SELECT * (all properties).",explanation:"You can write 'FROM Student' which returns full entities. Explicit SELECT is needed for projections (specific fields) or aggregate results.",hint:"Use projections to improve performance when you don't need the whole entity.",level:"basic",codeExample:"SELECT s.name, s.city FROM Student s"},{question:"How do you perform a bulk update using HQL?",shortAnswer:"Use UPDATE ... SET ... WHERE query and call executeUpdate().",explanation:"Bulk HQL updates bypass the session cache and directly execute SQL. You need to clear() or refresh affected entities to avoid stale state.",hint:"After bulk update, session.clear() to avoid inconsistent persistence context.",level:"moderate",codeExample:`int updated = session.createQuery("UPDATE Student SET city = :newCity WHERE city = :oldCity")
.setParameter("newCity", "Shyamnagar")
.setParameter("oldCity", "Ichapur")
.executeUpdate();`},{question:"How do you write a native SQL query in Hibernate? What are the trade-offs?",shortAnswer:"Use session.createNativeQuery(). Trade-off: database dependency, but can use vendor-specific features.",explanation:"Native queries return raw SQL results; you can map to entities using addEntity() or to DTOs with @SqlResultSetMapping. They don't support caching unless explicitly configured.",hint:"Use native SQL for complex reports or when HQL cannot express something.",level:"expert",codeExample:'NativeQuery<Student> q = session.createNativeQuery("SELECT * FROM students WHERE city = ?", Student.class);'},{question:"What is the difference between list() and uniqueResult()?",shortAnswer:"list() returns multiple rows as a List; uniqueResult() returns a single result or null (if zero rows).",explanation:"If the query returns more than one row, uniqueResult() throws NonUniqueResultException. For zero rows, uniqueResult() returns null (Hibernate 5+).",hint:"Use uniqueResult() when exactly zero or one result expected.",level:"moderate",codeExample:`Student s = session.createQuery("FROM Student WHERE id = :id", Student.class)
.setParameter("id", 1L).uniqueResult();`},{question:"How can you paginate results in HQL without loading all rows?",shortAnswer:"Use setFirstResult() (offset) and setMaxResults() (limit).",explanation:"Hibernate translates these to database-specific pagination (LIMIT/OFFSET, ROWNUM, etc.). This is efficient even for large result sets.",hint:"Combine with ORDER BY for consistent pagination.",level:"moderate",codeExample:"query.setFirstResult(20).setMaxResults(10);"},{question:"What are named parameters and why are they better than positional parameters?",shortAnswer:"Named parameters use :name and are easier to read, less error-prone, and can be used multiple times.",explanation:"Positional parameters (?1, ?2) rely on order, which can break when query changes. Named parameters are self-documenting and safer.",hint:"Always prefer named parameters for maintainability.",level:"basic",codeExample:'query.setParameter("city", "Barrackpore"); // vs setParameter(1, "Barrackpore")'},{question:"How do you write an HQL query that returns a DTO instead of an entity?",shortAnswer:"Use SELECT NEW fully.qualified.ClassName(field1, field2) FROM ...",explanation:"This constructor expression allows you to project results into a non-entity class (DTO) without needing a separate result set mapping.",hint:"More efficient than returning full entities when only few fields needed.",level:"expert",codeExample:"SELECT NEW com.school.dto.StudentNameDTO(s.name, s.city) FROM Student s"},{question:"Explain the difference between INNER JOIN and LEFT JOIN in HQL.",shortAnswer:"INNER JOIN returns only entities that have a matching association; LEFT JOIN returns all root entities regardless of association existence (null for missing).",explanation:"Same as SQL JOIN semantics. LEFT JOIN is useful when you want to include entities even if they have no related rows.",hint:"Use LEFT JOIN when you need to see students even if they are not enrolled in any course.",level:"moderate",codeExample:"FROM Student s LEFT JOIN s.courses c WHERE c.courseName IS NULL"},{question:"How does HQL handle polymorphism?",shortAnswer:"HQL automatically returns instances of subclasses when querying a superclass or interface.",explanation:"If you query 'FROM Payment', it returns all Payment, CreditCardPayment, CashPayment objects. This is implicit and requires no special syntax.",hint:"Use treat for downcasting: 'FROM Payment p WHERE treat(p as CreditCardPayment).cardType = 'VISA'",level:"expert",codeExample:"FROM Animal a // returns Cat, Dog, etc."},{question:"What is the purpose of the HQL 'SIZE' function?",shortAnswer:"SIZE returns the number of elements in a collection association.",explanation:"Can be used in WHERE clause or SELECT. Example: WHERE SIZE(s.addresses) > 2. Also use 'IS EMPTY' to check for empty collections.",hint:"SIZE works even with lazy collections without loading them? Actually, it may cause a query.",level:"moderate",codeExample:"FROM Student s WHERE SIZE(s.courses) > 3"},{question:"Can you use aggregate functions in HQL without GROUP BY?",shortAnswer:"Yes, single aggregate returns one row; mixing aggregate and non-aggregate forces GROUP BY.",explanation:"SELECT COUNT(s), AVG(s.age) FROM Student is allowed. But SELECT s.name, COUNT(s.courses) would require GROUP BY s.name.",hint:"Most SQL rules apply in HQL aggregates.",level:"moderate",codeExample:"SELECT MAX(s.age), MIN(s.age) FROM Student s"},{question:"How do you write a subquery in HQL?",shortAnswer:"Enclose subquery in parentheses, usually in WHERE or SELECT clause.",explanation:"Subqueries can refer to outer query aliases (correlated). They can return single values or lists (using IN, EXISTS, etc.).",hint:"Use subqueries when a JOIN is not feasible or when you need aggregation on related data.",level:"expert",codeExample:"FROM Student s WHERE s.age > (SELECT AVG(age) FROM Student)"},{question:"What is the difference between Query.list() and Query.scroll()?",shortAnswer:"list() loads all results into memory; scroll() returns a scrollable result set that fetches rows on demand (suitable for large results).",explanation:"scroll() uses database cursor if supported, but requires keeping the session open. Useful for processing millions of rows.",hint:"For very large result sets, consider StatelessSession and scroll.",level:"expert",codeExample:"ScrollableResults sr = query.scroll(); while(sr.next()) { Object[] row = sr.get(); }"},{question:"Explain the use of 'FETCH' with 'JOIN' in HQL and its effect on caching.",shortAnswer:"JOIN FETCH populates the association in the same query, and the fetched data is stored in the session cache (first-level).",explanation:"Second-level cache may still be queried if the entity is cacheable. JOIN FETCH can lead to repeated data if used with multiple collections.",hint:"Avoid JOIN FETCH on multiple collections – use batch fetching instead.",level:"expert",codeExample:"FROM Parent p JOIN FETCH p.children WHERE p.id = 1"},{question:"How do you use HQL with Enums?",shortAnswer:"Refer to enum property directly: WHERE s.status = com.school.Status.ACTIVE or by constant with .",explanation:"If the enum is a string persisted, you can also use a parameter: setParameter('status', Status.ACTIVE). Hibernate converts to database value.",hint:"Always use parameter binding for enums to avoid string concatenation.",level:"moderate",codeExample:"FROM Student s WHERE s.status = :status"},{question:"What is the purpose of the 'ELEMENTS' function in HQL?",shortAnswer:"ELEMENTS is used to refer to elements of a collection in a join, but it's largely obsolete now – standard joins are preferred.",explanation:"Old syntax: FROM Student s, IN(s.courses) c; new syntax: FROM Student s JOIN s.courses c.",hint:"Don't use ELEMENTS – use JOIN for clarity.",level:"expert",codeExample:"FROM Student s, IN(s.courses) c WHERE c.name = 'Math' // old style"},{question:"How can you call a stored procedure using HQL or Hibernate?",shortAnswer:"Use session.createStoredProcedureQuery() or @NamedStoredProcedureQuery.",explanation:"HQL does not directly call stored procedures; JPA 2.1 introduced StoredProcedureQuery. You can also use native SQL CallableStatement.",hint:"Stored procedures reduce database coupling – use with caution.",level:"expert",codeExample:'StoredProcedureQuery sp = session.createStoredProcedureQuery("get_students");'},{question:"What is the difference between 'IN' and 'EXISTS' in HQL?",shortAnswer:"IN is used for a list of values or subquery result; EXISTS checks for existence of at least one row in subquery.",explanation:"EXISTS is often more efficient for subqueries because it stops as soon as a match is found. IN may evaluate the whole subquery.",hint:"Prefer EXISTS for correlated subqueries.",level:"expert",codeExample:"FROM Student s WHERE EXISTS (SELECT 1 FROM Enrollment e WHERE e.student = s AND e.grade > 90)"},{question:"How do you write a query that returns entities with their count of associated objects?",shortAnswer:"Use GROUP BY and HAVING, or SELECT entity, COUNT(association).",explanation:"Example: SELECT s, COUNT(c) FROM Student s JOIN s.courses c GROUP BY s. Returns List<Object[]> where first element is Student, second is count.",hint:"Project both the entity and the count.",level:"moderate",codeExample:"SELECT s, SIZE(s.courses) FROM Student s"},{question:"Explain the timezone handling when querying date/time fields in HQL.",shortAnswer:"HQL uses the JVM timezone unless the database or JDBC driver is configured otherwise. Use Temporal annotations.",explanation:"For date/time comparisons, ensure consistent timezone. You can set the session timezone using hibernate.jdbc.time_zone property.",hint:"Use UTC for database storage to avoid timezone issues.",level:"expert",codeExample:"hibernate.jdbc.time_zone = UTC"},{question:"What is the difference between 'WHERE' and 'HAVING' in HQL?",shortAnswer:"WHERE filters rows before grouping; HAVING filters groups after aggregation.",explanation:"HAVING is used with GROUP BY and aggregate conditions (e.g., COUNT(*) > 5). You cannot use aggregates in WHERE.",hint:"Remember: WHERE → GROUP BY → HAVING → ORDER BY.",level:"moderate",codeExample:"SELECT city, COUNT(*) FROM Student GROUP BY city HAVING COUNT(*) > 2"},{question:"Can you use arithmetic expressions in HQL SELECT and WHERE clauses?",shortAnswer:"Yes: +, -, *, /, % can be used on numeric properties and literals.",explanation:"Example: SELECT s.age + 5, s.age * 1.1 FROM Student s WHERE s.age * 2 > 50.",hint:"Use parentheses for clarity.",level:"moderate",codeExample:"FROM Student s WHERE s.age / 2 > 10"},{question:"How does HQL handle caching?",shortAnswer:"Query results can be cached using query.setCacheable(true) if second-level cache is enabled.",explanation:"Query cache stores the identifiers of returned entities; the entities themselves come from entity cache. For projections, values are cached directly.",hint:"Enable query cache only for queries that are executed frequently with same parameters.",level:"expert",codeExample:'query.setCacheable(true).setCacheRegion("student.queries");'},{question:"What is the purpose of the 'VERSIONED' keyword in HQL update queries?",shortAnswer:"UPDATE VERSIONED updates the version column of entities even if the updated fields don't include the version.",explanation:"It forces the version number to increment for optimistically locked entities, even if the update does not modify the entity. Useful for custom update statements.",hint:"Rarely needed, but important for consistency with optimistic locking.",level:"expert",codeExample:"UPDATE VERSIONED Student s SET s.city = :newCity WHERE s.city = :oldCity"},{question:"How do you use HQL with collections of basic types (e.g., List<String>)?",shortAnswer:"Reference the collection element as if it were a property: SELECT s FROM Student s JOIN s.phoneNumbers p WHERE p LIKE '91%'.",explanation:"If the collection is of basic type, the join element is that type. You can treat it like any other path.",hint:"Be careful with duplicate results: use DISTINCT.",level:"expert",codeExample:"SELECT DISTINCT s FROM Student s JOIN s.emails e WHERE e LIKE '%@school.com'"},{question:"What is the most common mistake when writing HQL for the first time?",shortAnswer:"Using table or column names instead of entity/property names, causing QuerySyntaxException.",explanation:"Newcomers often write 'SELECT * FROM students' and wonder why Hibernate complains. HQL is case-sensitive for properties, but not for keywords.",hint:"If you see 'table not mapped', you're using SQL, not HQL.",level:"basic",codeExample:`Wrong: FROM students WHERE city = 'Barrackpore'
Correct: FROM Student s WHERE s.city = 'Barrackpore'`}],J=()=>{const[s,S]=t.useState({intro:!1,basic:!1,where:!1,joins:!1,aggregates:!1,parameters:!1,named:!1,pagination:!1,checklist:!1}),x=(i,o)=>{i.forEach(l=>{l.isIntersecting&&S(u=>({...u,[o]:!0}))})},r=(i,o)=>{if(!i.current)return;const l=new IntersectionObserver(u=>x(u,o),{threshold:.2,rootMargin:"0px 0px -50px 0px"});return l.observe(i.current),l},c=t.useRef(null),d=t.useRef(null),m=t.useRef(null),h=t.useRef(null),p=t.useRef(null),y=t.useRef(null),g=t.useRef(null),f=t.useRef(null),E=t.useRef(null);return t.useEffect(()=>{const i=[r(c,"intro"),r(d,"basic"),r(m,"where"),r(h,"joins"),r(p,"aggregates"),r(y,"parameters"),r(g,"named"),r(f,"pagination"),r(E,"checklist")];return()=>i.forEach(o=>o&&o.disconnect())},[]),e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 font-sans leading-relaxed",children:[e.jsx("style",{children:`
    @keyframes fadeSlideUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeSlideUp {
      animation: fadeSlideUp 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-fadeSlideUp { animation: none; opacity: 1; transform: translateY(0); }
    }
  `}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16",children:[e.jsxs("div",{ref:c,className:n("text-center mb-16 transition-all duration-700 ease-out",s.intro?"animate-fadeSlideUp":"opacity-0 translate-y-8"),children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400",children:"Hibernate Query Language (HQL)"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Object-oriented queries that work with entities, not tables"}),e.jsxs("div",{className:"mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 text-sm",children:[e.jsx("span",{className:"font-mono",children:"📊"})," FROM · WHERE · JOIN · GROUP BY · ORDER BY"]})]}),e.jsxs("div",{ref:c,className:n("mb-16 bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl",s.intro?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.1s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"🔍"})," What is HQL?"]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Hibernate Query Language (HQL)"})," is an object-oriented query language, similar to SQL, but instead of table and column names, you use Java class and property names. HQL queries are translated by Hibernate into SQL for the target database."]}),e.jsx("p",{className:"mb-3",children:"Benefits: database independence, polymorphic queries, support for joins, pagination, named parameters, and aggregate functions."}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mt-4",children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-3 rounded",children:[e.jsx("strong",{children:"SQL:"}),e.jsx("br",{}),e.jsx("code",{children:"SELECT * FROM students WHERE city = 'Barrackpore'"})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-3 rounded",children:[e.jsx("strong",{children:"HQL:"}),e.jsx("br",{}),e.jsx("code",{children:"FROM Student s WHERE s.city = 'Barrackpore'"})]})]}),e.jsx("div",{className:"bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl mt-4 border-l-4 border-orange-500",children:e.jsxs("p",{className:"italic",children:["✨ Real-world: In a school management system for ",e.jsx("strong",{children:"Ichapur High School"}),", you can write ",e.jsx("code",{children:`"FROM Student s WHERE s.classroom = '10A'"`})," – no table names, no column names, just Java objects."]})})]}),e.jsxs("div",{ref:d,className:n("mb-16",s.basic?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📘 Basic HQL Queries"}),e.jsx(a,{fileModule:N,title:"BasicHql.java - Simple SELECT, aliases, ORDER BY",highlightLines:[10,11,12,13,14,15]})]}),e.jsxs("div",{ref:m,className:n("mb-16",s.where?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔍 Filtering with WHERE"}),e.jsx(a,{fileModule:w,title:"WhereHql.java - Conditions, logical operators, BETWEEN, LIKE, IN",highlightLines:[12,13,14,15,16]})]}),e.jsxs("div",{ref:h,className:n("mb-16",s.joins?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.4s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🤝 Joins in HQL"}),e.jsx(a,{fileModule:H,title:"JoinsHql.java - INNER JOIN, LEFT JOIN, FETCH JOIN",highlightLines:[13,14,15,16,17,18,19]}),e.jsxs("div",{className:"mt-3 bg-blue-50 dark:bg-blue-900/20 p-3 rounded",children:[e.jsx("strong",{children:"💡 JOIN FETCH:"})," Solves N+1 problem by retrieving associations in a single query."]})]}),e.jsxs("div",{ref:p,className:n("mb-16",s.aggregates?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.5s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📈 Aggregate Functions & GROUP BY"}),e.jsx(a,{fileModule:L,title:"AggregatesHql.java - COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING",highlightLines:[14,15,16,17,18,19]})]}),e.jsxs("div",{ref:y,className:n("mb-16",s.parameters?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.6s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔗 Named & Positional Parameters"}),e.jsx(a,{fileModule:O,title:"ParametersHql.java - Named parameters (:name) and positional (?)",highlightLines:[12,13,14,15,16]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:["✅ Always use ",e.jsx("strong",{children:"named parameters"})," for readability and safety (prevents SQL injection)."]})]}),e.jsxs("div",{ref:g,className:n("mb-16",s.named?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.7s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🏷️ Named Queries (Predefined HQL)"}),e.jsx(a,{fileModule:q,title:"NamedQueries.java - @NamedQuery annotation and XML definition",highlightLines:[5,6,7,8,9,10,11,12,13]})]}),e.jsxs("div",{ref:f,className:n("mb-16",s.pagination?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.8s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📄 Pagination with setFirstResult() & setMaxResults()"}),e.jsx(a,{fileModule:j,title:"PaginationHql.java - Page through results efficiently",highlightLines:[10,11,12]})]}),e.jsxs("div",{ref:E,className:n("mb-12 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-8 border-amber-500",s.checklist?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.9s"},children:[e.jsx("h3",{className:"text-xl font-bold mb-3 flex items-center gap-2",children:"💡 Tips & Tricks (Professional)"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["🔹 Use ",e.jsx("strong",{children:"named parameters"})," (",e.jsx("code",{children:":name"}),") instead of positional parameters – more readable and maintainable."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"JOIN FETCH"})," is your best friend for avoiding LazyInitializationException, but beware of cartesian products if you fetch multiple collections."]}),e.jsxs("li",{children:["🔹 Always use ",e.jsx("strong",{children:"projections"})," (SELECT specific fields) when you don't need full entities – reduces memory and network overhead."]}),e.jsxs("li",{children:["🔹 For dynamic queries, consider ",e.jsx("strong",{children:"Criteria API"})," or ",e.jsx("strong",{children:"JPA Specification"})," instead of string concatenation."]}),e.jsxs("li",{children:["🔹 Enable ",e.jsx("code",{children:"hibernate.show_sql"})," and ",e.jsx("code",{children:"hibernate.format_sql"})," to see the generated SQL – helps understand performance."]})]}),e.jsx("h3",{className:"text-xl font-bold mt-6 mb-3 flex items-center gap-2",children:"⚠️ Common Pitfalls (Beginners)"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"❌ Using table/column names instead of entity/property names → Hibernate throws QuerySyntaxException."}),e.jsxs("li",{children:["❌ Forgetting the ",e.jsx("code",{children:"SELECT"}),' keyword – "FROM Student" works, but "SELECT s FROM Student s" is clearer.']}),e.jsxs("li",{children:["❌ Using ",e.jsx("code",{children:"JOIN FETCH"})," on multiple collections → cartesian product, may return huge result sets."]}),e.jsxs("li",{children:["❌ Not handling ",e.jsx("code",{children:"NoResultException"})," – ",e.jsx("code",{children:"uniqueResult()"})," can return null only if you use ",e.jsx("code",{children:"getSingleResult()"})," (throws)."]}),e.jsxs("li",{children:["❌ Using ",e.jsx("code",{children:"list()"})," for huge result sets without pagination → memory overload."]})]}),e.jsx("div",{className:"mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg text-center",children:e.jsxs("p",{className:"text-orange-600 dark:text-orange-400 font-semibold",children:["✅ Mini Checklist: Always test HQL on a small dataset first. Use named parameters. For joins, prefer ",e.jsx("code",{children:"JOIN FETCH"})," only when needed. Enable SQL logging for debugging."]})})]}),e.jsxs("div",{className:"my-12 p-5 bg-gray-100 dark:bg-gray-800/60 rounded-xl border border-gray-300 dark:border-gray-600 text-center transition-all hover:scale-[1.01]",children:[e.jsx("h4",{className:"font-mono text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2",children:"🔎 Think about ..."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["You need to find all students from ",e.jsx("strong",{children:"Shyamnagar"})," who scored above 80% in Mathematics. Their addresses and marks are in separate related entities. Would you write a single HQL with JOIN FETCH, or fetch students first then lazily load marks? How many queries would each approach generate?"]})]}),e.jsx(b,{title:"Hibernate Query Language (HQL) - Expert FAQs",questions:T}),e.jsx("div",{className:"mt-12",children:e.jsx(R,{note:"📖 HQL is one of the most powerful features of Hibernate. Students often struggle switching from SQL mindset. I tell them: 'Forget columns; think objects and their fields.' Show the generated SQL side-by-side – that's the 'aha!' moment. Also, demonstrate the N+1 problem with a loop and then show how JOIN FETCH magically reduces it to one query. They'll appreciate HQL's elegance."})})]})]})};export{J as default};
