import{r as s,j as e}from"./index-gsr__VoO.js";import{c as n}from"./clsx-B-dksMZM.js";import{F as b}from"./FAQTemplate-CEVTVkoN.js";import{T as j}from"./TeacherSukantaHui-DvbQRa-c.js";import{J as r}from"./JavaFileLoader-Oc7S8mbZ.js";import"./git-branch-Bxm2eNpw.js";import"./JavaCodeBlock-NUM7pLrI.js";import"./prism-CyJ4Ug4E.js";import"./browser--8xGBJJU.js";import"./prism-java-BwO6k4I_.js";const E=`// LazyVsEagerEntity.java\r
import javax.persistence.*;\r
import java.util.List;\r
\r
@Entity\r
public class Student {\r
    @Id @GeneratedValue\r
    private Long id;\r
    private String name;\r
    \r
    // LAZY is default for @OneToMany\r
    @OneToMany(mappedBy = "student", fetch = FetchType.LAZY)\r
    private List<Course> courses;  // Default LAZY\r
    \r
    // EAGER override – use with caution\r
    @OneToMany(mappedBy = "student", fetch = FetchType.EAGER)\r
    private List<Address> addresses;  // Always loads with student\r
}\r
\r
@Entity\r
public class Course {\r
    @Id @GeneratedValue\r
    private Long id;\r
    \r
    // @ManyToOne defaults to EAGER\r
    @ManyToOne(fetch = FetchType.LAZY)  // Override to LAZY\r
    private Student student;\r
}`,v=`// LazyLoadingDemo.java\r
import org.hibernate.Session;\r
import org.hibernate.SessionFactory;\r
\r
public class LazyLoadingDemo {\r
    public static void main(String[] args) {\r
        SessionFactory factory = SessionFactoryProvider.getFactory();\r
        Session session = factory.openSession();\r
        \r
        Student student = session.get(Student.class, 1L);\r
        // At this point, courses are NOT loaded (proxy)\r
        \r
        System.out.println(student.getName());  // already loaded, no SQL for courses\r
        \r
        // Accessing lazy collection triggers SQL\r
        List<Course> courses = student.getCourses();  // SELECT courses...\r
        System.out.println(courses.size());\r
        \r
        session.close();\r
    }\r
}`,w=`// LazyInitializationException.java\r
import org.hibernate.Session;\r
import org.hibernate.SessionFactory;\r
\r
public class LazyInitializationExceptionDemo {\r
    public static void main(String[] args) {\r
        SessionFactory factory = SessionFactoryProvider.getFactory();\r
        Student student;\r
        \r
        Session session = factory.openSession();\r
        student = session.get(Student.class, 1L);\r
        session.close();  // session closed\r
        \r
        // LazyInitializationException thrown here\r
        List<Course> courses = student.getCourses();  // 💥 Exception!\r
        // Cannot access lazy association outside session\r
    }\r
}`,N=`// JoinFetchExample.java\r
import org.hibernate.Session;\r
import org.hibernate.query.Query;\r
import java.util.List;\r
\r
public class JoinFetchExample {\r
    public List<Student> getStudentsWithCourses() {\r
        Session session = factory.openSession();\r
        try {\r
            Query<Student> query = session.createQuery(\r
                "SELECT DISTINCT s FROM Student s JOIN FETCH s.courses", Student.class);\r
            return query.list();  // courses loaded in same query\r
        } finally {\r
            session.close();\r
        }\r
        // No LazyInitializationException when accessing courses outside session\r
    }\r
}`,z=`// BatchFetching.java\r
import org.hibernate.annotations.BatchSize;\r
import javax.persistence.*;\r
import java.util.List;\r
\r
@Entity\r
public class Student {\r
    @Id @GeneratedValue\r
    private Long id;\r
    \r
    @OneToMany(mappedBy = "student", fetch = FetchType.LAZY)\r
    @BatchSize(size = 10)  // Load up to 10 collections in one query\r
    private List<Course> courses;\r
}\r
\r
// With @BatchSize, loading 20 students' courses may execute only 2 queries instead of 20.`,L=[{question:"What is the default fetch type for @OneToMany in JPA?",shortAnswer:"LAZY.",explanation:"Collections are by default lazy to avoid performance issues. Subclass-specific Hibernate also defaults to LAZY for @ManyToMany.",hint:"ManyToOne is EAGER by default, not OneToMany.",level:"basic",codeExample:'@OneToMany(mappedBy = "student") // LAZY by default'},{question:"What is the default fetch type for @ManyToOne?",shortAnswer:"EAGER.",explanation:"Single-valued associations default to eager loading. Override with fetch = FetchType.LAZY if not always needed.",hint:"Many side of one-to-many defaults to EAGER.",level:"basic",codeExample:"@ManyToOne(fetch = FetchType.LAZY) // override to LAZY"},{question:"Explain LazyInitializationException and how to fix it.",shortAnswer:"Exception thrown when accessing a lazy association after the session is closed. Fix by initializing before session close (JOIN FETCH, calling size(), DTO, or keeping session open).",explanation:"Common in web apps where you load entity in service layer (session closed) then try to access lazy data in view layer.",hint:"Use JOIN FETCH or entity graphs.",level:"moderate",codeExample:`session.close();
student.getCourses().size(); // throws`},{question:"What is the N+1 query problem in the context of lazy loading?",shortAnswer:"Fetching N parent entities triggers N additional queries for each's lazy collection when accessed.",explanation:"Example: 10 students, each with courses. After loading students, accessing each student.getCourses() issues 10 separate queries.",hint:"JOIN FETCH solves N+1.",level:"moderate",codeExample:`List<Student> students = session.createQuery("FROM Student").list();
for(Student s: students) { s.getCourses().size(); } // N extra queries`},{question:"What is a Hibernate proxy?",shortAnswer:"A runtime-generated subclass of an entity used to implement lazy loading.",explanation:"When you load an entity with lazy associations, Hibernate returns a proxy for those associations. First access triggers DB load.",hint:"Check class name of lazy association – ends with $$_jvst...",level:"moderate",codeExample:"System.out.println(student.getCourses().getClass()); // Proxy class"},{question:"How does JOIN FETCH differ from EAGER fetch type?",shortAnswer:"JOIN FETCH is query-specific; EAGER is configured on mapping and applies to all queries.",explanation:"JOIN FETCH is more flexible – you can decide per query whether to load an association. EAGER is global and may cause performance issues.",hint:"Prefer JOIN FETCH over EAGER.",level:"expert",codeExample:`FROM Student s JOIN FETCH s.courses // one query
// vs
@OneToMany(fetch = EAGER) // always`},{question:"What is the 'Open Session in View' pattern? Pros and cons?",shortAnswer:"Keeps Hibernate session open during view rendering to allow lazy loading. Pros: avoids LazyInitializationException. Cons: holds DB connections longer, can cause N+1 queries.",explanation:"In Spring, spring.jpa.open-in-view=true. Useful for simple apps but can be problematic under load.",hint:"Use DTOs or JOIN FETCH instead.",level:"expert",codeExample:"spring.jpa.open-in-view=true // default in many Spring Boot versions"},{question:"Can you mix lazy and eager in the same entity?",shortAnswer:"Yes, each association has its own fetch type. But beware of cartesian products.",explanation:"If you have multiple eager collections, Hibernate may create a cartesian product. Prefer lazy for collections.",hint:"Two EAGER collections → large result set.",level:"moderate",codeExample:`@OneToMany(fetch = EAGER) List<Course> courses;
@OneToMany(fetch = EAGER) List<Address> addresses; // danger`},{question:"What is the @BatchSize annotation used for?",shortAnswer:"Load lazy collections in batches, reducing the N+1 problem.",explanation:"Instead of one query per collection, Hibernate loads multiple collections in one query using IN clause.",hint:"@BatchSize on collection field or class level.",level:"expert",codeExample:`@BatchSize(size = 10)
private List<Course> courses;`},{question:"How can you initialize a lazy collection programmatically?",shortAnswer:"Call Hibernate.initialize(collection) or collection.size() within an open session.",explanation:"Hibernate.initialize(collection) forces loading. Also works for proxies.",hint:"Useful before closing session if you need the data.",level:"moderate",codeExample:"Hibernate.initialize(student.getCourses());"}],H=()=>{const[t,g]=s.useState({intro:!1,concepts:!1,lazyDemo:!1,exception:!1,solutions:!1,comparison:!1,checklist:!1}),f=(i,o)=>{i.forEach(l=>{l.isIntersecting&&g(d=>({...d,[o]:!0}))})},a=(i,o)=>{if(!i.current)return;const l=new IntersectionObserver(d=>f(d,o),{threshold:.2,rootMargin:"0px 0px -50px 0px"});return l.observe(i.current),l},h=s.useRef(null),u=s.useRef(null),c=s.useRef(null),y=s.useRef(null),p=s.useRef(null),m=s.useRef(null),x=s.useRef(null);return s.useEffect(()=>{const i=[a(h,"intro"),a(u,"concepts"),a(c,"lazyDemo"),a(y,"exception"),a(p,"solutions"),a(m,"comparison"),a(x,"checklist")];return()=>i.forEach(o=>o&&o.disconnect())},[]),e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 font-sans leading-relaxed",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16",children:[e.jsxs("div",{ref:h,className:n("text-center mb-16 transition-all duration-700 ease-out",t.intro?"animate-fadeSlideUp":"opacity-0 translate-y-8"),children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-600 dark:from-yellow-400 dark:to-amber-400",children:"Lazy Loading vs Eager Loading"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"When to load associations – performance and the infamous LazyInitializationException"}),e.jsxs("div",{className:"mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 text-sm",children:[e.jsx("span",{className:"font-mono",children:"⏳"})," LAZY · EAGER · JOIN FETCH · N+1 · Proxy"]})]}),e.jsxs("div",{ref:u,className:n("mb-16 bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl",t.concepts?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.1s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"⚖️"})," Lazy vs Eager – The Performance Trade-off"]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Lazy Loading"})," delays fetching an association until it's actually accessed. ",e.jsx("strong",{children:"Eager Loading"})," fetches the association immediately (via join or separate select). Hibernate defaults: ",e.jsx("code",{children:"@OneToMany"})," and ",e.jsx("code",{children:"@ManyToMany"})," are LAZY; ",e.jsx("code",{children:"@ManyToOne"})," and ",e.jsx("code",{children:"@OneToOne"})," are EAGER (unless overridden)."]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mt-4",children:[e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-3 rounded",children:[e.jsx("strong",{children:"⏳ LAZY (default for collections)"}),e.jsx("br",{}),"✅ Saves memory and time if association is not used.",e.jsx("br",{}),"❌ LazyInitializationException if accessed outside session."]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-3 rounded",children:[e.jsx("strong",{children:"⚡ EAGER (default for single-valued)"}),e.jsx("br",{}),"✅ Data always ready, no proxy issues.",e.jsx("br",{}),"❌ Can lead to N+1 queries or cartesian products if misused."]})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl mt-4 border-l-4 border-yellow-500",children:e.jsxs("p",{className:"italic",children:["✨ Real-world: At ",e.jsx("strong",{children:"Naihati College"}),", loading a Student with 10 Courses – if you never access courses, lazy loading saves 10 queries. But if you ALWAYS need courses, eager loading might be better. The classic trade-off."]})})]}),e.jsxs("div",{ref:c,className:n("mb-16",t.lazyDemo?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📦 Mapping LAZY and EAGER"}),e.jsx(r,{fileModule:E,title:"LazyVsEagerEntity.java - Configuring fetch types",highlightLines:[6,7,8,9,10,11,12]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800/60 p-3 rounded mt-3 text-sm",children:[e.jsx("strong",{children:"💡 Rule:"})," Collections should be LAZY (default). Override to EAGER only if you always need them and the data size is small. For many-to-one, consider explicit LAZY if you often load entities without needing the parent."]})]}),e.jsxs("div",{ref:c,className:n("mb-16",t.lazyDemo?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔍 How LAZY Loading Works (Proxy Pattern)"}),e.jsx(r,{fileModule:v,title:"LazyLoadingDemo.java - Proxy objects and SQL timing",highlightLines:[8,9,10,11,12]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"📌 Hibernate returns a proxy (subclass of entity) for lazy associations. The first access triggers a database query."})]}),e.jsxs("div",{ref:y,className:n("mb-16",t.exception?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.4s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"})," The Infamous LazyInitializationException"]}),e.jsx(r,{fileModule:w,title:"LazyInitializationException.java - What happens when session is closed",highlightLines:[9,10,11,12,13,14]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-3 rounded mt-3",children:[e.jsx("strong",{children:"Why it happens:"})," You try to access a lazy association after the Hibernate session is closed. The proxy cannot fetch data because the database connection is gone."]})]}),e.jsxs("div",{ref:p,className:n("mb-16",t.solutions?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.5s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🛠️ Solutions to LazyInitializationException"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow",children:[e.jsx("h3",{className:"font-bold text-blue-600",children:"1. JOIN FETCH"}),e.jsx("p",{children:"Initialize lazy associations in the query."}),e.jsx(r,{fileModule:N,title:"JoinFetchExample.java - Using JOIN FETCH",highlightLines:[8,9]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow",children:[e.jsx("h3",{className:"font-bold text-blue-600",children:"2. Open Session in View (OSIV)"}),e.jsx("p",{children:"Keep session open during view rendering (Spring: spring.jpa.open-in-view=true). Controversial because it holds DB connections."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow",children:[e.jsx("h3",{className:"font-bold text-blue-600",children:"3. Batch Fetching"}),e.jsx("p",{children:"Load collections in batches to reduce N+1."}),e.jsx(r,{fileModule:z,title:"BatchFetching.java - @BatchSize annotation",highlightLines:[5,6]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow",children:[e.jsx("h3",{className:"font-bold text-blue-600",children:"4. DTO Projection"}),e.jsx("p",{children:"Select only needed fields, avoid lazy loading altogether."}),e.jsx("code",{className:"text-sm",children:"SELECT new StudentDTO(s.id, s.name, c.title) FROM Student s JOIN s.courses c"})]})]})]}),e.jsxs("div",{ref:m,className:n("mb-16 overflow-x-auto",t.comparison?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.6s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"📊 LAZY vs EAGER – Comparison"}),e.jsxs("table",{className:"min-w-full text-sm bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 text-left",children:"Aspect"}),e.jsx("th",{className:"p-3 text-left",children:"LAZY"}),e.jsx("th",{className:"p-3 text-left",children:"EAGER"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-600",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-3",children:"SQL queries"}),e.jsx("td",{children:"May be fewer if association not used"}),e.jsx("td",{children:"Always fetched (join or separate select)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3",children:"Memory footprint"}),e.jsx("td",{children:"Lower if association not used"}),e.jsx("td",{children:"Higher – loads all data"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3",children:"Risk of exception"}),e.jsx("td",{children:"LazyInitializationException outside session"}),e.jsx("td",{children:"None – data already loaded"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3",children:"Default for"}),e.jsx("td",{children:"@OneToMany, @ManyToMany"}),e.jsx("td",{children:"@ManyToOne, @OneToOne"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3",children:"N+1 problem"}),e.jsx("td",{children:"Can cause if accessed in loop"}),e.jsx("td",{children:"Can cause if misconfigured (e.g., EAGER on both sides)"})]})]})]})]}),e.jsxs("div",{ref:x,className:n("mb-12 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-8 border-amber-500",t.checklist?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.7s"},children:[e.jsx("h3",{className:"text-xl font-bold mb-3 flex items-center gap-2",children:"💡 Tips & Tricks (Professional)"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Always prefer LAZY for collections"})," – change to EAGER only after careful analysis."]}),e.jsxs("li",{children:["🔹 Use ",e.jsx("code",{children:"JOIN FETCH"})," to initialize specific associations for a query without changing global fetch type."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Batch fetching"})," (",e.jsx("code",{children:"@BatchSize"}),") is a great middle ground for lazy collections you often need."]}),e.jsxs("li",{children:["🔹 In web apps, consider using ",e.jsx("strong",{children:"DTO projections"})," for view-specific data to avoid LazyInitializationException entirely."]}),e.jsxs("li",{children:["🔹 Enable ",e.jsx("code",{children:"hibernate.show_sql"})," to detect N+1 queries caused by lazy loading inside loops."]})]}),e.jsx("h3",{className:"text-xl font-bold mt-6 mb-3 flex items-center gap-2",children:"⚠️ Common Pitfalls (Beginners)"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"LazyInitializationException"})," – trying to access lazy data after session closed."]}),e.jsxs("li",{children:["❌ The ",e.jsx("strong",{children:"N+1 problem"})," – fetching N parent entities, then each triggers a query for children."]}),e.jsxs("li",{children:["❌ Setting ",e.jsx("code",{children:"@OneToMany(fetch = EAGER)"})," and also ",e.jsx("code",{children:"@ManyToOne(fetch = EAGER)"})," on the other side → cartesian product."]}),e.jsxs("li",{children:["❌ Assuming ",e.jsx("code",{children:"@Transactional"})," automatically keeps session open – it does, but only within the method. Once method returns, session closes."]}),e.jsx("li",{children:"❌ Overriding equals/hashCode on entities with lazy fields – can trigger unwanted initialization."})]}),e.jsx("div",{className:"mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg text-center",children:e.jsx("p",{className:"text-yellow-600 dark:text-yellow-400 font-semibold",children:"✅ Mini Checklist: Default to LAZY for collections. Use JOIN FETCH when you know you'll need the association. Keep session open for the duration of data access. Batch fetch for frequently accessed collections. Consider DTOs for complex views."})})]}),e.jsxs("div",{className:"my-12 p-5 bg-gray-100 dark:bg-gray-800/60 rounded-xl border border-gray-300 dark:border-gray-600 text-center transition-all hover:scale-[1.01]",children:[e.jsx("h4",{className:"font-mono text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2",children:"🔎 Think about ..."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["In a school system, you have a REST API endpoint ",e.jsx("code",{children:"/students/{id}"})," that returns student details and their list of courses. If you use lazy loading, the courses won't be included in the response because the session closes before JSON serialization. How would you solve this? (Hint: JOIN FETCH or DTO)."]})]}),e.jsx(b,{title:"Lazy Loading vs Eager Loading - Expert FAQs",questions:L}),e.jsx("div",{className:"mt-12",children:e.jsx(j,{note:"⏳ Lazy loading is one of Hibernate's most misunderstood features. I tell students: 'Think of it as on-demand loading.' I've fixed countless production issues caused by N+1 queries from lazy loading in loops. Always show the SQL log – with lazy you see separate queries, with JOIN FETCH you see one. And the LazyInitializationException? That's a rite of passage! Once they understand proxies, they become real Hibernate pros."})})]})]})};export{H as default};
