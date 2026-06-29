import{j as e}from"./index-BvEfGfTn.js";import{J as r}from"./JavaFileLoader-CP8t2oQN.js";import{F as s}from"./FAQTemplate-DLwClWsT.js";import{T as a}from"./TeacherSukantaHui-BQBwwJWN.js";import"./JavaCodeBlock-Do2zzRk8.js";import"./prism-D96f-id0.js";import"./browser-Dy9von7W.js";import"./prism-java-BwO6k4I_.js";import"./clsx-B-dksMZM.js";import"./git-branch-Do_ZG0BN.js";const n=`// CriteriaBasicExample.java – Simple Criteria query\r
package com.school.criteria;\r
\r
import jakarta.persistence.*;\r
import com.school.entity.Student;\r
\r
public class CriteriaBasicExample {\r
    public static void findStudentsOlderThan(int minAge) {\r
        EntityManager em = HibernateUtil.getEntityManager();\r
        CriteriaBuilder cb = em.getCriteriaBuilder();\r
        CriteriaQuery<Student> cq = cb.createQuery(Student.class);\r
        Root<Student> student = cq.from(Student.class);\r
        \r
        cq.select(student).where(cb.gt(student.get("age"), minAge));\r
        \r
        List<Student> results = em.createQuery(cq).getResultList();\r
        results.forEach(s -> System.out.println(s.getName()));\r
        em.close();\r
    }\r
}`,d=`// CriteriaDynamicFilters.java – Conditional WHERE clauses\r
package com.school.criteria;\r
\r
import jakarta.persistence.*;\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class CriteriaDynamicFilters {\r
    \r
    public static List<Student> searchStudents(String name, String city, Integer minAge) {\r
        EntityManager em = HibernateUtil.getEntityManager();\r
        CriteriaBuilder cb = em.getCriteriaBuilder();\r
        CriteriaQuery<Student> cq = cb.createQuery(Student.class);\r
        Root<Student> student = cq.from(Student.class);\r
        \r
        List<Predicate> predicates = new ArrayList<>();\r
        if (name != null && !name.isEmpty()) {\r
            predicates.add(cb.like(student.get("name"), "%" + name + "%"));\r
        }\r
        if (city != null && !city.isEmpty()) {\r
            predicates.add(cb.equal(student.get("city"), city));\r
        }\r
        if (minAge != null) {\r
            predicates.add(cb.ge(student.get("age"), minAge));\r
        }\r
        \r
        cq.select(student).where(predicates.toArray(new Predicate[0]));\r
        \r
        List<Student> results = em.createQuery(cq).getResultList();\r
        em.close();\r
        return results;\r
    }\r
}`,o=`// HqlAggregation.java – GROUP BY, COUNT, AVG\r
package com.school.hql;\r
\r
import jakarta.persistence.*;\r
\r
public class HqlAggregation {\r
    public static void countStudentsByCity() {\r
        EntityManager em = HibernateUtil.getEntityManager();\r
        String hql = "SELECT s.city, COUNT(s), AVG(s.age) FROM Student s GROUP BY s.city";\r
        TypedQuery<Object[]> query = em.createQuery(hql, Object[].class);\r
        List<Object[]> results = query.getResultList();\r
        for (Object[] row : results) {\r
            String city = (String) row[0];\r
            Long count = (Long) row[1];\r
            Double avgAge = (Double) row[2];\r
            System.out.printf("City: %s, students: %d, average age: %.1f%n", city, count, avgAge);\r
        }\r
        em.close();\r
    }\r
}`,l=`// HqlSubquery.java – Subqueries in WHERE / SELECT\r
package com.school.hql;\r
\r
import jakarta.persistence.*;\r
\r
public class HqlSubquery {\r
    public static void findStudentsAboveAverageAge() {\r
        EntityManager em = HibernateUtil.getEntityManager();\r
        // Subquery in WHERE\r
        String hql = "SELECT s FROM Student s WHERE s.age > (SELECT AVG(age) FROM Student)";\r
        List<Student> aboveAvg = em.createQuery(hql, Student.class).getResultList();\r
        \r
        // Subquery in SELECT (scalar)\r
        String hql2 = "SELECT s.name, (SELECT COUNT(c) FROM Course c WHERE c.studentId = s.id) FROM Student s";\r
        List<Object[]> result = em.createQuery(hql2, Object[].class).getResultList();\r
        em.close();\r
    }\r
}`,c=`// JpaCriteriaBuilder – Group by, having, order by\r
package com.school.criteria;\r
\r
import jakarta.persistence.*;\r
\r
public class JpaCriteriaBuilder {\r
    public static void groupByHaving() {\r
        EntityManager em = HibernateUtil.getEntityManager();\r
        CriteriaBuilder cb = em.getCriteriaBuilder();\r
        CriteriaQuery<Object[]> cq = cb.createQuery(Object[].class);\r
        Root<Student> student = cq.from(Student.class);\r
        \r
        cq.multiselect(student.get("city"), cb.count(student), cb.avg(student.get("age")))\r
          .groupBy(student.get("city"))\r
          .having(cb.gt(cb.count(student), 2))\r
          .orderBy(cb.desc(cb.avg(student.get("age"))));\r
        \r
        List<Object[]> results = em.createQuery(cq).getResultList();\r
        em.close();\r
    }\r
}`,m=[{question:"What is the main advantage of Criteria API over HQL?",shortAnswer:"Type‑safe, dynamic query construction without string concatenation.",explanation:"Criteria API is ideal when you need to conditionally add WHERE clauses, JOINs, or ORDER BY based on user input. It avoids SQL injection and is refactor‑friendly.",hint:"Try building a search form with 5 optional filters – Criteria API keeps the code clean.",level:"basic",codeExample:"cq.where(predicates.toArray(new Predicate[0]));"},{question:"How to write a JOIN FETCH using JPA Criteria?",shortAnswer:"Use `Root.fetch()` method with JoinType.",explanation:'`root.fetch("courses", JoinType.LEFT);` loads the association eagerly. For a join that also allows filtering, use `Join<...> join = root.join("courses");` and then fetch.',hint:"`.fetch()` does not return a Join object; use `.join()` if you need to add conditions on the joined table.",level:"intermediate",codeExample:'root.fetch("courses", JoinType.LEFT);'},{question:'What is the difference between `root.get("field")` and `root.get("association").get("field")`?',shortAnswer:"The latter requires joining the association first, or it will fail.",explanation:'If `address` is a ManyToOne property, `root.get("address").get("city")` is invalid unless you have already joined `address` (e.g., `Join<Student, Address> addressJoin = root.join("address")`).',hint:"Always join before navigating to a related entity's property.",level:"intermediate",codeExample:'Join<Student, Address> addr = root.join("address"); cq.where(cb.equal(addr.get("city"), "Barrackpore"));'},{question:"How do you create a DTO projection with HQL?",shortAnswer:"Use `SELECT NEW com.school.StudentDTO(s.id, s.name) FROM Student s`.",explanation:"The DTO class must have a matching constructor. This avoids loading full entities, reduces memory, and improves performance for read‑only queries.",hint:"Make sure the DTO constructor argument order and types match the SELECT clause.",level:"basic",codeExample:'List<StudentDTO> dtos = session.createQuery("SELECT NEW StudentDTO(s.id, s.name) FROM Student s", StudentDTO.class).list();'},{question:"Can you use subqueries in the SELECT clause of HQL?",shortAnswer:"Yes, HQL supports subqueries in SELECT, WHERE, and FROM clauses (limited in FROM).",explanation:"Example: `SELECT s.name, (SELECT COUNT(c) FROM s.courses c) FROM Student s`. The subquery must return a single scalar value. Avoid correlated subqueries for large datasets.",hint:"If performance suffers, rewrite as a JOIN with GROUP BY.",level:"advanced",codeExample:"SELECT s.id, (SELECT MAX(c.credits) FROM Course c WHERE c.student.id = s.id) FROM Student s"},{question:"How to paginate with Criteria API?",shortAnswer:"Use `setFirstResult(offset)` and `setMaxResults(limit)` on the TypedQuery.",explanation:"After building the CriteriaQuery and obtaining the query object, call `query.setFirstResult(start).setMaxResults(pageSize)` before executing. Works the same as HQL.",hint:"For huge offset, consider keyset pagination for better performance.",level:"intermediate",codeExample:"em.createQuery(cq).setFirstResult(20).setMaxResults(10).getResultList();"},{question:"What is the JPA static metamodel and how does it help?",shortAnswer:"Generated `*_` classes provide type‑safe access to entity attributes in Criteria API.",explanation:'Instead of strings like `"name"`, you use `Student_.name`. This avoids typos and makes refactoring safe. Generated by annotation processor (e.g., Hibernate JPA Metamodel Generator).',hint:"Add the metamodel generator dependency and compile – you'll see classes like `Student_` in target/generated-sources.",level:"advanced",codeExample:'cq.where(cb.equal(root.get(Student_.name), "Tuhina"));'}],u=`
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-slide-up {
    animation: fadeSlideUp 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
  }
  @keyframes softGlow {
    0% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
    50% { box-shadow: 0 0 0 6px rgba(59,130,246,0.2); }
    100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
  }
  .animate-soft-glow { animation: softGlow 1.2s ease-in-out 2; }
`,w=()=>e.jsxs("div",{className:"w-full max-w-6xl mx-auto px-4 py-8 space-y-12 dark:bg-gray-900 bg-gray-50 transition-colors duration-300",children:[e.jsx("style",{children:u}),e.jsxs("div",{className:"animate-fade-slide-up text-center space-y-4",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent",children:"Criteria API & HQL Advanced Queries"}),e.jsx("p",{className:"text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Move beyond simple CRUD – master dynamic queries with Criteria API (type‑safe, programmatic) and advanced HQL features (joins, subqueries, aggregation, DTO projections). Build flexible search screens and complex reports with confidence."})]}),e.jsxs("section",{className:"space-y-5 animate-fade-slide-up [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]",children:[e.jsx("div",{className:"flex items-center gap-3 border-l-4 border-blue-500 pl-4",children:e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100",children:"Why Criteria & Advanced HQL?"})}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:["HQL (Hibernate Query Language) is great for static, known queries. But when you need to conditionally add filters, sort fields, or build multi-tenant queries dynamically,",e.jsx("strong",{className:"font-semibold",children:" Criteria API"})," (JPA 2.0+ – ",e.jsx("code",{children:"CriteriaBuilder"}),") provides a type‑safe, programmatic way to construct queries without string concatenation.",e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"Advanced HQL"})," takes you beyond basic SELECT: joins between unrelated entities, subqueries in SELECT/WHERE, aggregations with GROUP BY, and DTO projections."]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-green-50 dark:bg-green-950/40 p-4 rounded-xl border-l-4 border-green-400",children:[e.jsx("p",{className:"font-semibold text-green-800 dark:text-green-200",children:"🎯 When to use Criteria API"}),e.jsx("p",{className:"text-sm",children:"Dynamic search forms, user‑specified filters, variable sorting, multi‑tenant conditions."})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-950/40 p-4 rounded-xl border-l-4 border-purple-400",children:[e.jsx("p",{className:"font-semibold text-purple-800 dark:text-purple-200",children:"📊 When to use advanced HQL"}),e.jsx("p",{className:"text-sm",children:"Complex reporting, aggregations, cross‑entity joins, subqueries, DTO projections."})]})]}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-950/40 p-4 rounded-xl border-l-4 border-blue-400",children:e.jsxs("p",{className:"text-sm italic text-blue-800 dark:text-blue-200",children:["💡 ",e.jsx("strong",{children:"Real‑world scenario:"})," At Barrackpore High School, the attendance report page needs dynamic filtering by date range, class, and student name. Criteria API builds the query on‑the‑fly, while HQL’s aggregation counts presents per month."]})})]})]}),e.jsxs("section",{className:"space-y-5 animate-fade-slide-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 border-l-4 border-green-500 pl-4",children:"Criteria API (JPA 2.0 CriteriaBuilder)"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:"The JPA Criteria API is type‑safe and uses metamodel classes (or string paths). It’s ideal for dynamic queries."}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsx(r,{fileModule:n,title:"CriteriaBasicExample.java (Simple Criteria)",highlightLines:[8,12,18]}),e.jsx(r,{fileModule:d,title:"CriteriaDynamicFilters.java (Conditional WHERE)",highlightLines:[10,15,22]})]}),e.jsx("div",{className:"bg-amber-50 dark:bg-amber-950/30 p-5 rounded-xl border border-amber-200 dark:border-amber-800",children:e.jsxs("p",{className:"text-sm font-mono text-amber-800 dark:text-amber-300",children:["🧠 ",e.jsx("strong",{children:"Insight:"})," If you use Hibernate’s legacy ",e.jsx("code",{children:"org.hibernate.Criteria"})," (deprecated since 5.2), migrate to JPA ",e.jsx("code",{children:"CriteriaBuilder"})," – it’s future‑proof and portable."]})})]}),e.jsxs("section",{className:"space-y-5 animate-fade-slide-up [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 border-l-4 border-blue-500 pl-4",children:"Advanced HQL Techniques"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsx(r,{fileModule:o,title:"HqlAggregation.java (GROUP BY, COUNT, AVG)",highlightLines:[8,12,20]}),e.jsx(r,{fileModule:l,title:"HqlSubquery.java (Subqueries in SELECT/WHERE)",highlightLines:[9,14]})]}),e.jsx("div",{className:"mt-4",children:e.jsx(r,{fileModule:c,title:"JpaCriteriaBuilder.java (Group by, having, order by)",highlightLines:[10,16,22]})}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-xl border border-indigo-200 dark:border-indigo-800",children:e.jsxs("p",{className:"text-sm italic text-indigo-800 dark:text-indigo-200",children:["💡 ",e.jsx("strong",{children:"Pro tip:"})," DTO projections with ",e.jsx("code",{children:"SELECT new"})," are far more efficient than returning full entities for read‑only reports – less memory, no dirty checking."]})})]}),e.jsxs("section",{className:"space-y-5 animate-fade-slide-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 border-l-4 border-teal-500 pl-4",children:"🔄 Dynamic Query Building with Criteria API"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500",children:[e.jsxs("svg",{viewBox:"0 0 900 240",className:"w-full h-auto","aria-label":"Criteria flow",children:[e.jsx("rect",{x:"20",y:"30",width:"160",height:"60",rx:"8",fill:"#3b82f6",fillOpacity:"0.2",stroke:"#3b82f6"}),e.jsx("text",{x:"100",y:"55",textAnchor:"middle",className:"text-sm font-semibold fill-blue-800 dark:fill-blue-300",children:"User Input"}),e.jsx("text",{x:"100",y:"75",textAnchor:"middle",className:"text-xs",children:"filters / sorting"}),e.jsx("line",{x1:"180",y1:"60",x2:"230",y2:"60",stroke:"#94a3b8",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"240",y:"30",width:"180",height:"60",rx:"8",fill:"#10b981",fillOpacity:"0.2",stroke:"#10b981"}),e.jsx("text",{x:"330",y:"55",textAnchor:"middle",className:"text-sm font-semibold fill-green-800 dark:fill-green-300",children:"CriteriaBuilder"}),e.jsx("text",{x:"330",y:"75",textAnchor:"middle",className:"text-xs",children:"create predicates"}),e.jsx("line",{x1:"420",y1:"60",x2:"470",y2:"60",stroke:"#94a3b8",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"480",y:"30",width:"180",height:"60",rx:"8",fill:"#f59e0b",fillOpacity:"0.2",stroke:"#f59e0b"}),e.jsx("text",{x:"570",y:"55",textAnchor:"middle",className:"text-sm font-semibold fill-amber-800 dark:fill-amber-300",children:"Build Query"}),e.jsx("text",{x:"570",y:"75",textAnchor:"middle",className:"text-xs",children:"add WHERE/ORDER BY"}),e.jsx("line",{x1:"660",y1:"60",x2:"710",y2:"60",stroke:"#94a3b8",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"720",y:"30",width:"160",height:"60",rx:"8",fill:"#ef4444",fillOpacity:"0.2",stroke:"#ef4444"}),e.jsx("text",{x:"800",y:"55",textAnchor:"middle",className:"text-sm font-semibold fill-red-800 dark:fill-red-300",children:"Execute & get results"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})})})]}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-3",children:"Criteria API builds queries incrementally based on runtime conditions – no string concatenation, safe from injection."})]})]}),e.jsxs("section",{className:"space-y-5 animate-fade-slide-up [animation-delay:500ms] opacity-0 [animation-fill-mode:forwards]",children:[e.jsx("div",{className:"flex items-center gap-2 border-l-4 border-red-500 pl-4",children:e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100",children:"⚠️ Common Pitfalls"})}),e.jsx("div",{className:"grid md:grid-cols-2 gap-5",children:[{title:"Forgetting to add join for nested paths",desc:'Using root.get("address.city") without join leads to error.',fix:'Join<Student, Address> addressJoin = root.join("address"); then addressJoin.get("city").'},{title:"Misusing Hibernate’s legacy Criteria (deprecated)",desc:"org.hibernate.Criteria is deprecated and less type‑safe.",fix:"Migrate to JPA CriteriaBuilder."},{title:"Cartesian product with multiple joins",desc:"Fetching two collections in Criteria may cause huge result sets.",fix:"Use distinct or batch fetching."},{title:"Missing DISTINCT in subqueries",desc:"Subqueries returning many duplicates can be slow.",fix:"Add distinct() inside the subquery."}].map((t,i)=>e.jsxs("div",{className:"bg-white dark:bg-gray-800/70 rounded-xl p-5 border-l-4 border-red-400 shadow-sm hover:shadow-md transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-red-700 dark:text-red-300",children:t.title}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mt-2",children:t.desc}),e.jsxs("p",{className:"text-xs font-mono text-green-700 dark:text-green-400 mt-3",children:["✅ ",t.fix]})]},i))})]}),e.jsxs("section",{className:"space-y-5 animate-fade-slide-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100 border-l-4 border-emerald-500 pl-4",children:"✅ Best Practices"}),e.jsxs("div",{className:"bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-md",children:[e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["✓ ",e.jsx("strong",{children:"Use static metamodel"})," – generate `Student_` classes for type‑safe Criteria queries."]}),e.jsxs("li",{children:["✓ ",e.jsx("strong",{children:"Prefer DTO projections"})," (`SELECT new`) for read‑only reports to avoid persistent state overhead."]}),e.jsxs("li",{children:["✓ ",e.jsx("strong",{children:"Always paginate"})," – use `setFirstResult` / `setMaxResults` for large result sets."]}),e.jsxs("li",{children:["✓ ",e.jsx("strong",{children:"Index your WHERE and JOIN columns"})," – both JPQL/Criteria queries benefit."]})]}),e.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-700"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mt-4",children:["Use DTOs for reports","Add indexes","Prefer JPA Criteria","Limit result size"].map((t,i)=>e.jsxs("div",{className:"bg-emerald-50 dark:bg-emerald-950/50 p-2 rounded-md text-xs font-medium text-emerald-800 dark:text-emerald-200",children:["📌 ",t]},i))})]})]}),e.jsxs("section",{className:"space-y-4 animate-fade-slide-up [animation-delay:700ms] opacity-0 [animation-fill-mode:forwards] bg-indigo-50 dark:bg-indigo-950/40 rounded-2xl p-6 border border-indigo-200 dark:border-indigo-800",children:[e.jsx("h3",{className:"text-xl font-bold text-indigo-800 dark:text-indigo-300",children:"💭 Think & Experiment"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm",children:[e.jsxs("p",{className:"font-mono text-sm",children:[e.jsx("strong",{children:"Observe carefully:"})," Write a HQL query with `JOIN FETCH`; then write the same query using Criteria API."]}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:'🔍 Criteria needs `.fetch("association", JoinType.LEFT)` to emulate JOIN FETCH.'})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm",children:[e.jsxs("p",{className:"font-mono text-sm",children:[e.jsx("strong",{children:"Try changing this:"})," Replace an entity‑returning query with a DTO projection using `SELECT new`."]}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"🔄 Compare memory usage and execution time."})]})]})]}),e.jsxs("section",{className:"space-y-4 animate-fade-slide-up [animation-delay:800ms] opacity-0 [animation-fill-mode:forwards]",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"💎"}),e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 dark:text-gray-100",children:"Pro Tips & Classroom shortcuts"})]}),e.jsxs("div",{className:"bg-cyan-50 dark:bg-cyan-950/40 rounded-xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-cyan-600",children:"🔁"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Static metamodel generation:"})," Use Hibernate JPA 2 Metamodel Generator (annotation processor) to create type‑safe `*_` classes."]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-cyan-600",children:"⚡"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Subquery in FROM clause:"})," Hibernate supports it via `FROM (SELECT ...)` but use native SQL if needed."]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-cyan-600",children:"🧩"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Dynamic sorting:"})," Use `criteriaQuery.orderBy(cb.asc(root.get(sortField)))` where `sortField` is user‑provided."]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-cyan-600",children:"📌"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Performance monitor:"})," Enable `hibernate.generate_statistics` and log to spot Criteria inefficiencies."]})]})]})]}),e.jsx("div",{className:"animate-fade-slide-up [animation-delay:900ms] opacity-0 [animation-fill-mode:forwards]",children:e.jsx(s,{title:"Criteria API & Advanced HQL FAQs",questions:m})}),e.jsx("div",{className:"animate-fade-slide-up [animation-delay:1000ms] opacity-0 [animation-fill-mode:forwards]",children:e.jsx(a,{note:"🎓 Teacher's Note: Students often struggle with Criteria API’s verbosity. Show them how a simple search form with 3 conditional filters becomes ugly with string concatenation but elegant with predicates. Use the static metamodel to avoid magic strings. A challenging lab: build a real search/filter UI (using student and course data) and implement the backend using Criteria – then compare the SQL output with HQL."})}),e.jsx("div",{className:"text-center text-xs text-gray-400 pt-6",children:"Topic 10 — Criteria API & HQL Advanced Queries | Industry-grade best practices"})]});export{w as default};
