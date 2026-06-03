import{r as t,j as e}from"./index-DjvKv1PW.js";import{c as n}from"./clsx-B-dksMZM.js";import{F as b}from"./FAQTemplate-ByAk5Pae.js";import{T as S}from"./TeacherSukantaHui-L5TKwlgX.js";import{J as o}from"./JavaFileLoader-_5MLrpTH.js";import"./git-branch-Cz06tWqr.js";import"./JavaCodeBlock-DFloxm48.js";import"./prism-BF08qRUT.js";import"./browser-BNqNpsb2.js";import"./prism-java-BwO6k4I_.js";const v=`// CreateExample.java\r
import org.hibernate.Session;\r
import org.hibernate.SessionFactory;\r
import org.hibernate.Transaction;\r
import org.hibernate.cfg.Configuration;\r
\r
public class CreateExample {\r
    public static void main(String[] args) {\r
        SessionFactory factory = new Configuration().configure().buildSessionFactory();\r
        \r
        Session session = factory.openSession();\r
        Transaction tx = session.beginTransaction();\r
        \r
        // Create new entity\r
        Student student = new Student("Swadeep Sarkar", "Barrackpore");\r
        \r
        // Save (INSERT)\r
        Long generatedId = (Long) session.save(student);  // returns generated ID\r
        // Or JPA style: session.persist(student); // returns void\r
        \r
        tx.commit();\r
        System.out.println("Student saved with ID: " + generatedId);\r
        \r
        session.close();\r
        factory.close();\r
    }\r
}`,j=`// ReadExample.java\r
import org.hibernate.Session;\r
import org.hibernate.SessionFactory;\r
import org.hibernate.cfg.Configuration;\r
\r
public class ReadExample {\r
    public static void main(String[] args) {\r
        SessionFactory factory = new Configuration().configure().buildSessionFactory();\r
        Session session = factory.openSession();\r
        \r
        // Method 1: get() - immediate SQL, returns null if not found\r
        Student student = session.get(Student.class, 1L);\r
        if (student != null) {\r
            System.out.println("Found: " + student.getName());\r
        }\r
        \r
        // Method 2: load() - returns proxy, lazy loading\r
        Student proxy = session.load(Student.class, 1L);\r
        System.out.println("Proxy ID: " + proxy.getId()); // no SELECT\r
        System.out.println("Proxy name: " + proxy.getName()); // SELECT now\r
        \r
        // Method 3: HQL query\r
        List<Student> students = session.createQuery("from Student", Student.class).list();\r
        \r
        session.close();\r
        factory.close();\r
    }\r
}`,w=`// UpdateExample.java\r
import org.hibernate.Session;\r
import org.hibernate.SessionFactory;\r
import org.hibernate.Transaction;\r
import org.hibernate.cfg.Configuration;\r
\r
public class UpdateExample {\r
    public static void main(String[] args) {\r
        SessionFactory factory = new Configuration().configure().buildSessionFactory();\r
        Session session = factory.openSession();\r
        Transaction tx = session.beginTransaction();\r
        \r
        // Method 1: Dirty checking (for managed entity)\r
        Student student = session.get(Student.class, 1L);\r
        student.setCity("Shyamnagar");  // Auto UPDATE on flush/commit\r
        // No need to call session.update()\r
        \r
        // Method 2: update() for detached entity\r
        Student detachedStudent = new Student("Tuhina Das", "Ichapur");\r
        detachedStudent.setId(2L);  // assume exists\r
        session.update(detachedStudent);\r
        \r
        // Method 3: merge() for merging detached state\r
        Student merged = (Student) session.merge(detachedStudent);\r
        \r
        tx.commit();\r
        session.close();\r
        factory.close();\r
    }\r
}`,E=`// DeleteExample.java\r
import org.hibernate.Session;\r
import org.hibernate.SessionFactory;\r
import org.hibernate.Transaction;\r
import org.hibernate.cfg.Configuration;\r
\r
public class DeleteExample {\r
    public static void main(String[] args) {\r
        SessionFactory factory = new Configuration().configure().buildSessionFactory();\r
        Session session = factory.openSession();\r
        Transaction tx = session.beginTransaction();\r
        \r
        // Method 1: Delete managed entity\r
        Student student = session.get(Student.class, 3L);\r
        session.delete(student);  // schedules DELETE\r
        \r
        // Method 2: Delete with HQL (bulk)\r
        int deletedCount = session.createQuery("delete from Student where city = 'Ichapur'")\r
                                  .executeUpdate();\r
        \r
        // Method 3: Delete detached entity (must have @Version or same ID)\r
        Student detached = new Student();\r
        detached.setId(5L);\r
        session.delete(detached);\r
        \r
        tx.commit();\r
        session.close();\r
        factory.close();\r
    }\r
}`,N=`// CrudComplete.java\r
// Complete service class for Student entity\r
import org.hibernate.Session;\r
import org.hibernate.SessionFactory;\r
import org.hibernate.Transaction;\r
import java.util.List;\r
\r
public class StudentService {\r
    private SessionFactory factory;\r
    \r
    public StudentService(SessionFactory factory) {\r
        this.factory = factory;\r
    }\r
    \r
    // CREATE\r
    public Long saveStudent(Student student) {\r
        Session session = factory.openSession();\r
        Transaction tx = session.beginTransaction();\r
        Long id = (Long) session.save(student);\r
        tx.commit();\r
        session.close();\r
        return id;\r
    }\r
    \r
    // READ by ID\r
    public Student getStudent(Long id) {\r
        Session session = factory.openSession();\r
        Student student = session.get(Student.class, id);\r
        session.close();\r
        return student;\r
    }\r
    \r
    // READ all\r
    public List<Student> getAllStudents() {\r
        Session session = factory.openSession();\r
        List<Student> list = session.createQuery("from Student", Student.class).list();\r
        session.close();\r
        return list;\r
    }\r
    \r
    // UPDATE - using merge for detached\r
    public void updateStudent(Student student) {\r
        Session session = factory.openSession();\r
        Transaction tx = session.beginTransaction();\r
        session.merge(student);  // copies state to managed instance\r
        tx.commit();\r
        session.close();\r
    }\r
    \r
    // DELETE\r
    public void deleteStudent(Long id) {\r
        Session session = factory.openSession();\r
        Transaction tx = session.beginTransaction();\r
        Student student = session.get(Student.class, id);\r
        if (student != null) {\r
            session.delete(student);\r
        }\r
        tx.commit();\r
        session.close();\r
    }\r
}`,k=[{question:"What is the difference between session.save() and session.persist()?",shortAnswer:"save() returns the generated ID and can persist outside transaction; persist() returns void and follows JPA spec – requires transaction.",explanation:"save() is Hibernate-specific, persist() is JPA-standard. If outside transaction, save() still inserts but doesn't rollback; persist() throws exception. Modern JPA code uses persist() for portability.",hint:"Which method would you use if you want to stay JPA-compliant?",level:"moderate",codeExample:`Long id = session.save(obj); // Hibernate
session.persist(obj); // JPA`},{question:"How does Hibernate know which objects to update automatically?",shortAnswer:"Through dirty checking: Hibernate compares the current state with a snapshot taken when the object was loaded.",explanation:"During flush, Hibernate iterates over all managed objects, checks which fields changed, and generates UPDATE statements accordingly. No manual update call needed.",hint:"Modify a field inside transaction after get() – watch the SQL log.",level:"expert",codeExample:`Student s = session.get(Student.class, 1L);
s.setName("New"); // Hibernate will UPDATE on commit`},{question:"Can you delete an entity without loading it first?",shortAnswer:"Yes, use session.delete() with a proxy or HQL bulk delete.",explanation:'Create a detached object with only ID set, then session.delete(detached). Or use session.createQuery("delete from Student where id = :id"). Both avoid loading the entity, improving performance.',hint:"Useful for large tables where loading just to delete is wasteful.",level:"expert",codeExample:"Student s = new Student(); s.setId(1L); session.delete(s);"},{question:"What is the difference between update() and merge()?",shortAnswer:"update() reattaches a detached entity and throws exception if object is already in session; merge() copies state to existing managed instance (safer).",explanation:"If you're unsure whether the object is detached or already managed, use merge(). It returns a managed copy. update() may cause NonUniqueObjectException if the same ID is already in session.",hint:"In web apps with detached objects, prefer merge().",level:"expert",codeExample:"Student managed = (Student) session.merge(detachedStudent);"},{question:"How do you perform bulk INSERTs efficiently with Hibernate?",shortAnswer:"Use batch insert with jdbc.batch_size, and flush/clear periodically, or use StatelessSession.",explanation:"Set hibernate.jdbc.batch_size=20-50. Then save many entities, and after every batch, call session.flush() and session.clear() to avoid memory issues. StatelessSession is even faster but loses caching.",hint:"Without batching, each save() is a separate INSERT.",level:"expert",codeExample:"for(int i=0;i<10000;i++){ session.save(entity); if(i%50==0){session.flush(); session.clear();}}"},{question:"What is the purpose of session.refresh()?",shortAnswer:"Refreshes a managed entity from the database, overwriting local changes.",explanation:"Useful when you suspect the database version is newer due to external updates. The entity's state is reloaded, and any local unflushed changes are lost.",hint:"Concurrency debugging: refresh() shows the latest DB state.",level:"moderate",codeExample:"session.refresh(student); // student now has DB values"},{question:"What happens if you call get() with non-existent ID?",shortAnswer:"get() returns null, no exception.",explanation:"Unlike load(), which throws ObjectNotFoundException when accessed, get() is safe for existence checks. Always check for null to avoid NPE.",hint:"Use get() when you're not sure the row exists.",level:"basic",codeExample:`Student s = session.get(Student.class, 999L);
if(s==null) System.out.println("Not found");`},{question:"How do you retrieve an entity using its natural ID (e.g., email)?",shortAnswer:"Use HQL or Criteria API, or @NaturalId with session.byNaturalId().",explanation:'If you mark a field as @NaturalId, Hibernate can load by that field using session.byNaturalId(Student.class).using("email", email).load(). This also caches the natural ID.',hint:"Natural IDs are business keys like email or username.",level:"expert",codeExample:'Student s = session.byNaturalId(Student.class).using("email", email).load();'},{question:"What is the effect of session.clear() on CRUD operations?",shortAnswer:"clear() detaches all managed objects from session. Pending changes not flushed are lost.",explanation:"After clear(), any objects previously loaded become detached. Subsequent modifications won't be automatically flushed unless you reattach them. Useful after batch processing to free memory.",hint:"Call clear() after batch flush to avoid memory blow.",level:"expert",codeExample:`session.save(entity); // not flushed
session.clear(); // entity becomes detached, no INSERT`},{question:"Can you call saveOrUpdate() on a new entity? What does it do?",shortAnswer:"saveOrUpdate() saves if ID is null or transient; updates if entity exists. It's Hibernate-specific, replaced by merge() in JPA.",explanation:"Hibernate checks the ID and version. If ID is null or transient (no DB row), it calls save(); otherwise update(). Modern JPA uses persist() for new and merge() for detached.",hint:"saveOrUpdate() is convenient but deprecated in favor of merge().",level:"moderate",codeExample:"session.saveOrUpdate(student);"}],M=()=>{const[s,f]=t.useState({intro:!1,create:!1,read:!1,update:!1,delete:!1,complete:!1,checklist:!1}),y=(r,i)=>{r.forEach(l=>{l.isIntersecting&&f(c=>({...c,[i]:!0}))})},a=(r,i)=>{if(!r.current)return;const l=new IntersectionObserver(c=>y(c,i),{threshold:.2,rootMargin:"0px 0px -50px 0px"});return l.observe(r.current),l},d=t.useRef(null),u=t.useRef(null),h=t.useRef(null),m=t.useRef(null),p=t.useRef(null),g=t.useRef(null),x=t.useRef(null);return t.useEffect(()=>{const r=[a(d,"intro"),a(u,"create"),a(h,"read"),a(m,"update"),a(p,"delete"),a(g,"complete"),a(x,"checklist")];return()=>r.forEach(i=>i&&i.disconnect())},[]),e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 font-sans leading-relaxed",children:[e.jsx("style",{children:`
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
    .animate-fadeSlideUp {
      animation: fadeSlideUp 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-fadeSlideUp {
        animation: none;
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16",children:[e.jsxs("div",{ref:d,className:n("text-center mb-16 transition-all duration-700 ease-out",s.intro?"animate-fadeSlideUp":"opacity-0 translate-y-8"),children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400",children:"CRUD Operations"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Create, Read, Update, Delete – the four essential database operations in Hibernate"}),e.jsxs("div",{className:"mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-sm",children:[e.jsx("span",{className:"font-mono",children:"📝"})," save · get · merge · delete · query"]})]}),e.jsxs("div",{ref:d,className:n("mb-16 bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl",s.intro?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.1s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"🔄"})," The Four Pillars of Persistence"]}),e.jsxs("p",{className:"mb-3",children:["Every application that stores data needs to perform basic operations: ",e.jsx("strong",{children:"Create"})," (insert), ",e.jsx("strong",{children:"Read"})," (select), ",e.jsx("strong",{children:"Update"})," (modify), and ",e.jsx("strong",{children:"Delete"})," (remove). In Hibernate, these are done through the ",e.jsx("code",{children:"Session"})," object with methods like ",e.jsx("code",{children:"save()/persist()"}),", ",e.jsx("code",{children:"get()/load()"}),", ",e.jsx("code",{children:"update()/merge()"}),", and ",e.jsx("code",{children:"delete()"}),"."]}),e.jsx("p",{className:"mb-3",children:"Unlike JDBC where you write SQL statements manually, Hibernate lets you work with Java objects. Changes are automatically translated to INSERT, SELECT, UPDATE, or DELETE SQL when the session flushes."}),e.jsx("div",{className:"bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl mt-3 border-l-4 border-teal-500",children:e.jsxs("p",{className:"italic",children:["📚 Real-world: At ",e.jsx("strong",{children:"Barrackpore High School"}),", the admin needs to add a new student (Create), view student details (Read), change the student's city (Update), or remove a graduated student (Delete). Hibernate makes each operation a single method call."]})})]}),e.jsxs("div",{ref:u,className:n("mb-16",s.create?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.2s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"➕"})," Create (Insert)"]}),e.jsx(o,{fileModule:v,title:"CreateExample.java - Saving Entities",highlightLines:[14,15,16,17]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mt-3 text-sm",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-3 rounded",children:[e.jsx("strong",{children:"save() vs persist()"}),": save() returns generated ID immediately; persist() returns void and is JPA standard. Prefer persist() for JPA portability."]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-3 rounded",children:[e.jsx("strong",{children:"Automatic INSERT"}),": Occurs only on transaction commit or session flush, not at the moment of save()."]})]})]}),e.jsxs("div",{ref:h,className:n("mb-16",s.read?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.3s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"🔍"})," Read (Select)"]}),e.jsx(o,{fileModule:j,title:"ReadExample.java - Retrieving Entities",highlightLines:[12,13,14,16,17,18]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-3 mt-4 text-sm",children:[e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 p-2 rounded",children:[e.jsx("strong",{children:"get()"}),": Hits DB immediately, returns null if not found."]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 p-2 rounded",children:[e.jsx("strong",{children:"load()"}),": Returns proxy, throws exception if not found on access."]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/20 p-2 rounded",children:[e.jsx("strong",{children:"HQL/Criteria"}),": For complex queries, use session.createQuery()."]})]})]}),e.jsxs("div",{ref:m,className:n("mb-16",s.update?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.4s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"✏️"})," Update (Modify)"]}),e.jsx(o,{fileModule:w,title:"UpdateExample.java - Modifying Data",highlightLines:[12,13,14,15,18,19,20]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:["🔄 ",e.jsx("strong",{children:"Dirty checking:"})," If you modify a managed entity inside a transaction, Hibernate automatically generates an UPDATE at flush time. You don't need to call any method unless the entity is detached."]})]}),e.jsxs("div",{ref:p,className:n("mb-16",s.delete?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.5s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"🗑️"})," Delete (Remove)"]}),e.jsx(o,{fileModule:E,title:"DeleteExample.java - Removing Entities",highlightLines:[12,13,14,15,16]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-3 rounded mt-3",children:[e.jsx("strong",{children:"⚠️ Important:"})," After deletion, the entity becomes transient (detached and removed from database). Do not reuse it."]})]}),e.jsxs("div",{ref:g,className:n("mb-16",s.complete?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.6s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🎯 Complete CRUD Service"}),e.jsx(o,{fileModule:N,title:"StudentService.java - Full CRUD implementation",highlightLines:[8,9,10,11,12,13,14,15]})]}),e.jsxs("div",{ref:x,className:n("mb-12 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-8 border-amber-500",s.checklist?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.7s"},children:[e.jsx("h3",{className:"text-xl font-bold mb-3 flex items-center gap-2",children:"💡 Tips & Tricks (Professional)"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["🔹 Use ",e.jsx("code",{children:"persist()"})," for new entities; use ",e.jsx("code",{children:"merge()"})," for detached entities (e.g., from web form)."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Bulk operations:"})," For many updates/deletes, use HQL update/delete queries (e.g., ",e.jsx("code",{children:'session.createQuery("delete from Student where city = :city").executeUpdate()'}),")."]}),e.jsx("li",{children:"🔹 Always wrap CRUD in a transaction – otherwise, no changes are written to DB."}),e.jsx("li",{children:"🔹 After delete, set the entity reference to null to avoid accidental reuse."}),e.jsxs("li",{children:["🔹 Use ",e.jsx("code",{children:"@Version"})," for optimistic locking to prevent lost updates in concurrent scenarios."]})]}),e.jsx("h3",{className:"text-xl font-bold mt-6 mb-3 flex items-center gap-2",children:"⚠️ Common Pitfalls (Beginners)"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"❌ Forgetting to begin transaction → no INSERT/UPDATE/DELETE executed."}),e.jsxs("li",{children:["❌ Calling ",e.jsx("code",{children:"update()"})," on a managed entity (unnecessary, dirty checking already does it)."]}),e.jsxs("li",{children:["❌ Using ",e.jsx("code",{children:"merge()"})," incorrectly on a new entity – it becomes managed but may cause duplicate ID issues."]}),e.jsx("li",{children:"❌ Not closing the session → connection leaks."}),e.jsx("li",{children:"❌ Trying to read after session closed → LazyInitializationException."}),e.jsx("li",{children:"❌ Deleting an entity that has child associations without cascade → foreign key constraint violation."})]}),e.jsx("div",{className:"mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg text-center",children:e.jsx("p",{className:"text-green-600 dark:text-green-400 font-semibold",children:"✅ Mini Checklist: Begin transaction before any write operation. For reads, transaction is not required but recommended for consistency. Always close session in finally block."})})]}),e.jsxs("div",{className:"my-12 p-5 bg-gray-100 dark:bg-gray-800/60 rounded-xl border border-gray-300 dark:border-gray-600 text-center transition-all hover:scale-[1.01]",children:[e.jsx("h4",{className:"font-mono text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2",children:"🔎 Think about ..."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["You are building a library system for ",e.jsx("strong",{children:"Naihati Public Library"}),`. A student borrows a book – that's a Create operation in a "BorrowRecord" table. When the student returns the book, you need to Update the return date. What happens if two librarians try to return the same book simultaneously? How does Hibernate handle concurrency if you use `,e.jsx("code",{children:"@Version"}),"?"]})]}),e.jsx(b,{title:"CRUD Operations - Expert FAQs",questions:k}),e.jsx("div",{className:"mt-12",children:e.jsx(S,{note:"📘 CRUD seems trivial but is the foundation. I've seen students write save() without transaction – the object never appears in DB. Another classic: trying to read after session.close(). My advice: always write a 'crudTemplate' method that handles session and transaction lifecycle. Also, demonstrate Hibernate's automatic dirty checking: modify an entity inside transaction and see the UPDATE without calling any method – that surprises beginners!"})})]})]})};export{M as default};
