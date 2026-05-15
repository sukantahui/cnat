import{r as n,j as e}from"./index-CRQVh4re.js";import{c as t}from"./clsx-B-dksMZM.js";import{F as b}from"./FAQTemplate-CZYzvsmW.js";import{T as v}from"./TeacherSukantaHui-BbC31_xi.js";import{J as o}from"./JavaFileLoader-D8cYR3nq.js";import"./git-branch-C3oVR8Wb.js";import"./JavaCodeBlock-BwGLOxAw.js";import"./prism-CY4NEqq1.js";import"./browser-CYxlFkZK.js";import"./prism-java-BwO6k4I_.js";const T=`// OneToOne.java\r
import javax.persistence.*;\r
\r
// Owner side (has foreign key)\r
@Entity\r
public class Person {\r
    @Id @GeneratedValue\r
    private Long id;\r
    private String name;\r
    \r
    @OneToOne(cascade = CascadeType.ALL)\r
    @JoinColumn(name = "passport_id", unique = true)\r
    private Passport passport;\r
    // getters/setters\r
}\r
\r
// Inverse side (mappedBy)\r
@Entity\r
public class Passport {\r
    @Id @GeneratedValue\r
    private Long id;\r
    private String number;\r
    \r
    @OneToOne(mappedBy = "passport")  // no foreign key\r
    private Person person;\r
    // getters/setters\r
}\r
\r
// Alternative: shared primary key (using @MapsId)\r
@Entity\r
public class Employee {\r
    @Id\r
    private Long id;\r
    @OneToOne\r
    @MapsId\r
    @JoinColumn(name = "id")\r
    private EmployeeDetails details;\r
}`,j=`// OneToMany.java - One side (Classroom)\r
import javax.persistence.*;\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
@Entity\r
public class Classroom {\r
    @Id @GeneratedValue\r
    private Long id;\r
    private String name;\r
    \r
    @OneToMany(mappedBy = "classroom", cascade = CascadeType.ALL, fetch = FetchType.LAZY)\r
    private List<Student> students = new ArrayList<>();\r
    \r
    // helper method to maintain both sides\r
    public void addStudent(Student student) {\r
        students.add(student);\r
        student.setClassroom(this);\r
    }\r
}`,M=`// ManyToOne.java - Many side (Student)\r
import javax.persistence.*;\r
\r
@Entity\r
public class Student {\r
    @Id @GeneratedValue\r
    private Long id;\r
    private String name;\r
    \r
    @ManyToOne(fetch = FetchType.LAZY)\r
    @JoinColumn(name = "classroom_id")\r
    private Classroom classroom;\r
    \r
    // getters/setters\r
}`,O=`// ManyToMany.java - Many-to-Many with join table\r
import javax.persistence.*;\r
import java.util.HashSet;\r
import java.util.Set;\r
\r
@Entity\r
public class Student {\r
    @Id @GeneratedValue\r
    private Long id;\r
    private String name;\r
    \r
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})\r
    @JoinTable(\r
        name = "student_course",\r
        joinColumns = @JoinColumn(name = "student_id"),\r
        inverseJoinColumns = @JoinColumn(name = "course_id")\r
    )\r
    private Set<Course> courses = new HashSet<>();\r
}\r
\r
@Entity\r
public class Course {\r
    @Id @GeneratedValue\r
    private Long id;\r
    private String title;\r
    \r
    @ManyToMany(mappedBy = "courses")\r
    private Set<Student> students = new HashSet<>();\r
}`,w=`// CascadeExample.java - Different cascade types\r
import javax.persistence.*;\r
\r
@Entity\r
public class Parent {\r
    @Id @GeneratedValue\r
    private Long id;\r
    \r
    // PERSIST → save child automatically when parent saved\r
    @OneToMany(mappedBy = "parent", cascade = CascadeType.PERSIST)\r
    private List<Child> children;\r
    \r
    // REMOVE → delete child when parent deleted\r
    @OneToMany(mappedBy = "parent", cascade = CascadeType.REMOVE)\r
    private List<Child> removableChildren;\r
    \r
    // ALL → all operations cascade\r
    @OneToMany(mappedBy = "parent", cascade = CascadeType.ALL)\r
    private List<Child> allCascadeChildren;\r
    \r
    // DETACH, MERGE, REFRESH also available\r
}`,C=`// OrphanRemoval.java - When a child is removed from collection, it's deleted\r
import javax.persistence.*;\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
@Entity\r
public class ParentWithOrphan {\r
    @Id @GeneratedValue\r
    private Long id;\r
    \r
    @OneToMany(mappedBy = "parent", cascade = CascadeType.ALL, orphanRemoval = true)\r
    private List<Child> children = new ArrayList<>();\r
    \r
    public void removeChild(Child child) {\r
        children.remove(child);\r
        child.setParent(null);  // orphanRemoval will delete the child from DB\r
    }\r
}`,E=[{question:"What is the difference between @OneToMany and @ManyToOne?",shortAnswer:"@OneToMany is the one side, @ManyToOne is the many side. They are opposite ends of the same relationship.",explanation:"In a bidirectional one-to-many, the many side (with @ManyToOne) owns the foreign key. The one side uses mappedBy to indicate it's the inverse.",hint:"Think of Classroom (one) and Student (many).",level:"basic",codeExample:`class Classroom { @OneToMany(mappedBy="classroom") List<Student> students; }
class Student { @ManyToOne Classroom classroom; }`},{question:"What does the 'mappedBy' attribute do?",shortAnswer:"It indicates that the other side of the bidirectional relationship owns the association (has the foreign key).",explanation:"mappedBy tells Hibernate not to create a foreign key column on this side. The value is the property name on the owning side.",hint:"Without mappedBy, Hibernate creates two foreign keys.",level:"moderate",codeExample:'@OneToMany(mappedBy = "student") // student is field in Address entity'},{question:"What is the default fetch type for @OneToMany and @ManyToOne?",shortAnswer:"@OneToMany defaults to LAZY; @ManyToOne defaults to EAGER.",explanation:"This is for performance reasons: a collection could be huge, but a single reference is usually okay. You can override with fetch = FetchType.LAZY/EAGER.",hint:"@ManyToOne(fetch = FetchType.LAZY) is recommended for most cases.",level:"moderate",codeExample:"@ManyToOne(fetch = FetchType.LAZY)"},{question:"How do you implement a many-to-many relationship with additional columns (e.g., enrollment date)?",shortAnswer:"Create an intermediate entity (e.g., Enrollment) with @ManyToOne to both sides, plus extra fields.",explanation:"The join table becomes an entity. Student has @OneToMany to Enrollment, Course has @OneToMany to Enrollment. Enrollment has @ManyToOne to both.",hint:"This pattern is called 'associative entity' or 'junction table with extra attributes'.",level:"expert",codeExample:"public class Enrollment { @ManyToOne Student student; @ManyToOne Course course; LocalDate enrollmentDate; }"},{question:"Explain the purpose of @JoinColumn and @JoinTable.",shortAnswer:"@JoinColumn specifies foreign key column name for one-to-one/many-to-one; @JoinTable defines a join table for many-to-many.",explanation:"@JoinColumn is used on owning side. @JoinTable defines name, joinColumns, inverseJoinColumns.",hint:"Default names are often ugly; customize them.",level:"moderate",codeExample:`@JoinColumn(name = "passport_id")
@JoinTable(name = "student_course", joinColumns = @JoinColumn(name="student"))`},{question:"What is the difference between CascadeType.REMOVE and orphanRemoval=true?",shortAnswer:"CascadeType.REMOVE deletes children when parent is deleted; orphanRemoval deletes child when removed from parent collection (even if parent remains).",explanation:"orphanRemoval is more aggressive: as soon as a child is dereferenced from the parent, it's deleted from DB.",hint:"Use orphanRemoval for composition (parent owns child lifecycle).",level:"expert",codeExample:"@OneToMany(orphanRemoval = true) // remove from collection -> delete from DB"},{question:"How can you avoid the N+1 query problem in one-to-many collections?",shortAnswer:"Use JOIN FETCH in HQL, entity graph, or batch fetching.",explanation:"JOIN FETCH loads the collection in the same query. But careful: fetching multiple collections causes cartesian product. Use batch size as alternative.",hint:"Query: FROM Student s JOIN FETCH s.courses WHERE s.id = 1",level:"expert",codeExample:'List<Student> students = session.createQuery("FROM Student s JOIN FETCH s.courses", Student.class).list();'},{question:"What is the 'owner side' of a bidirectional relationship?",shortAnswer:"The side that contains the foreign key (usually @ManyToOne or @OneToOne with @JoinColumn).",explanation:"Hibernate only tracks changes from the owner side. Updates to the inverse side (mappedBy) are ignored unless you synchronize both sides.",hint:"Always set both sides in code, but only the owner side matters for persistence.",level:"moderate",codeExample:`student.setClassroom(classroom); // owner side
classroom.getStudents().add(student); // must also set for consistency`},{question:"Can you have a unidirectional @OneToMany? How is it mapped?",shortAnswer:"Yes, use @OneToMany without mappedBy and @JoinColumn on the collection (or join table).",explanation:"Unidirectional one-to-many uses a foreign key column in the child table but without a many-to-one on child. This is less common.",hint:"Not recommended because it may cause extra update statements.",level:"expert",codeExample:'@OneToMany @JoinColumn(name = "classroom_id") private List<Student> students;'},{question:"What is the effect of cascade = CascadeType.PERSIST on a one-to-many?",shortAnswer:"When you save the parent, all new children in the collection are also saved (persisted).",explanation:"Without it, you must save each child explicitly or get TransientObjectException.",hint:"Very useful for parent-child aggregations.",level:"moderate",codeExample:"parent.getChildren().add(newChild); session.save(parent); // child also saved"}],U=()=>{const[a,g]=n.useState({intro:!1,oneToOne:!1,oneToMany:!1,manyToOne:!1,manyToMany:!1,cascade:!1,checklist:!1}),f=(r,i)=>{r.forEach(l=>{l.isIntersecting&&g(c=>({...c,[i]:!0}))})},s=(r,i)=>{if(!r.current)return;const l=new IntersectionObserver(c=>f(c,i),{threshold:.2,rootMargin:"0px 0px -50px 0px"});return l.observe(r.current),l},d=n.useRef(null),m=n.useRef(null),h=n.useRef(null),p=n.useRef(null),y=n.useRef(null),u=n.useRef(null),x=n.useRef(null);return n.useEffect(()=>{const r=[s(d,"intro"),s(m,"oneToOne"),s(h,"oneToMany"),s(p,"manyToOne"),s(y,"manyToMany"),s(u,"cascade"),s(x,"checklist")];return()=>r.forEach(i=>i&&i.disconnect())},[]),e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 font-sans leading-relaxed",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16",children:[e.jsxs("div",{ref:d,className:t("text-center mb-16 transition-all duration-700 ease-out",a.intro?"animate-fadeSlideUp":"opacity-0 translate-y-8"),children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400",children:"Relationship Mappings"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Connecting entities: One-to-One, One-to-Many, Many-to-One, Many-to-Many"}),e.jsxs("div",{className:"mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm",children:[e.jsx("span",{className:"font-mono",children:"🔗"})," @OneToOne · @OneToMany · @ManyToOne · @ManyToMany · Cascade"]})]}),e.jsxs("div",{ref:d,className:t("mb-16 bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl",a.intro?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.1s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"🧩"})," Why Entity Relationships?"]}),e.jsx("p",{className:"mb-3",children:"Real-world data is connected. A student has an address (one-to-one), a student belongs to a classroom (many-to-one), a classroom has many students (one-to-many), and a student can enroll in many courses while a course has many students (many-to-many). Hibernate maps these relationships using annotations, preserving referential integrity and enabling object navigation."}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mt-4",children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-3 rounded",children:[e.jsx("strong",{children:"📌 One-to-One"}),": Person ↔ Passport, Student ↔ Locker"]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-3 rounded",children:[e.jsx("strong",{children:"📌 One-to-Many / Many-to-One"}),": Classroom → Students (bidirectional)"]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-3 rounded",children:[e.jsx("strong",{children:"📌 Many-to-Many"}),": Student ↔ Course (via join table)"]})]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl mt-4 border-l-4 border-indigo-500",children:e.jsxs("p",{className:"italic",children:["✨ Real-world: At ",e.jsx("strong",{children:"Naihati High School"}),", a Student has one Address, one Classroom (many-to-one), and many Courses (many-to-many). Hibernate lets us navigate like ",e.jsx("code",{children:"student.getCourses()"})," without writing JOIN queries."]})})]}),e.jsxs("div",{ref:m,className:t("mb-16",a.oneToOne?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔂 One-to-One Mapping"}),e.jsxs("p",{className:"mb-2",children:["Two entities share a unique relationship. One side is the owner (with foreign key), the other uses ",e.jsx("code",{children:"mappedBy"}),"."]}),e.jsx(o,{fileModule:T,title:"OneToOne.java - Person ↔ Passport (shared primary key / foreign key)",highlightLines:[6,7,8,9,10,11,12,13]})]}),e.jsxs("div",{ref:h,className:t("mb-16",a.oneToMany?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📦 One-to-Many (Bidirectional)"}),e.jsx(o,{fileModule:j,title:"OneToMany.java - Classroom → Students (One-to-Many)",highlightLines:[8,9,10,11,12,13,14,15]})]}),e.jsxs("div",{ref:p,className:t("mb-16",a.manyToOne?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.4s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"👥 Many-to-One (the owning side)"}),e.jsx(o,{fileModule:M,title:"ManyToOne.java - Student → Classroom (Many-to-One)",highlightLines:[9,10,11]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:["✅ In bidirectional one-to-many, the many side (with ",e.jsx("code",{children:"@ManyToOne"}),") is the owner; the one side uses ",e.jsx("code",{children:"mappedBy"}),"."]})]}),e.jsxs("div",{ref:y,className:t("mb-16",a.manyToMany?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.5s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔄 Many-to-Many"}),e.jsx("p",{className:"mb-2",children:"Uses a join table. Can be unidirectional or bidirectional."}),e.jsx(o,{fileModule:O,title:"ManyToMany.java - Student ↔ Course (with join table)",highlightLines:[8,9,10,11,12,13,14,15,16,17]}),e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded mt-3 text-sm",children:[e.jsx("strong",{children:"⚠️ Warning:"})," Avoid cascading ALL on ManyToMany – may cause unintended deletes."]})]}),e.jsxs("div",{ref:u,className:t("mb-16",a.cascade?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.6s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"⛓️ Cascade Types & Orphan Removal"}),e.jsx(o,{fileModule:w,title:"CascadeExample.java - PERSIST, MERGE, REMOVE, ALL, DETACH, REFRESH",highlightLines:[6,7,8,9,10]}),e.jsx(o,{fileModule:C,title:"OrphanRemoval.java - When a child is removed from collection, it is deleted",highlightLines:[6,7]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-3 mt-3 text-sm",children:[e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-2 rounded",children:[e.jsx("strong",{children:"CascadeType.PERSIST"})," – save child when parent saves"]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-2 rounded",children:[e.jsx("strong",{children:"CascadeType.REMOVE"})," – delete child when parent deleted"]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-2 rounded",children:[e.jsx("strong",{children:"orphanRemoval=true"})," – delete child when removed from collection"]})]})]}),e.jsxs("div",{ref:x,className:t("mb-12 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-8 border-amber-500",a.checklist?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.7s"},children:[e.jsx("h3",{className:"text-xl font-bold mb-3 flex items-center gap-2",children:"💡 Tips & Tricks (Professional)"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Always set both sides"})," of bidirectional relationships in code – don't rely on Hibernate to fix them."]}),e.jsxs("li",{children:["🔹 Use ",e.jsx("code",{children:'@JoinColumn(name="fk_column")'})," to customize foreign key name."]}),e.jsxs("li",{children:["🔹 Prefer ",e.jsx("code",{children:"Set"})," over ",e.jsx("code",{children:"List"})," for collections to avoid duplicate entries and performance issues."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"LAZY"})," is default for ",e.jsx("code",{children:"@OneToMany"})," and ",e.jsx("code",{children:"@ManyToMany"})," – that's good. Use ",e.jsx("code",{children:"JOIN FETCH"})," when needed."]}),e.jsxs("li",{children:["🔹 For many-to-many with extra columns (e.g., enrollment date), create an intermediate entity (",e.jsx("code",{children:"@ManyToOne"})," on both sides with additional fields)."]})]}),e.jsx("h3",{className:"text-xl font-bold mt-6 mb-3 flex items-center gap-2",children:"⚠️ Common Pitfalls (Beginners)"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["❌ Forgetting ",e.jsx("code",{children:"mappedBy"})," on the inverse side → Hibernate creates two foreign keys."]}),e.jsxs("li",{children:["❌ Using ",e.jsx("code",{children:"CascadeType.REMOVE"})," on many-to-many – deletes unrelated entities."]}),e.jsxs("li",{children:["❌ Not overriding ",e.jsx("code",{children:"equals/hashCode"})," when using Set → duplicates or missing items."]}),e.jsx("li",{children:"❌ Fetching large collections eagerly → performance disaster."}),e.jsxs("li",{children:["❌ Modifying collection while iterating → ",e.jsx("code",{children:"ConcurrentModificationException"}),"."]})]}),e.jsx("div",{className:"mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg text-center",children:e.jsxs("p",{className:"text-indigo-600 dark:text-indigo-400 font-semibold",children:["✅ Mini Checklist: Decide which side is owner (the one with foreign key). Use ",e.jsx("code",{children:"mappedBy"})," on the inverse side. Default to LAZY. Test bidirectional synchronization with helper methods."]})})]}),e.jsxs("div",{className:"my-12 p-5 bg-gray-100 dark:bg-gray-800/60 rounded-xl border border-gray-300 dark:border-gray-600 text-center transition-all hover:scale-[1.01]",children:[e.jsx("h4",{className:"font-mono text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2",children:"🔎 Think about ..."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Designing a library system for ",e.jsx("strong",{children:"Barrackpore Town Library"}),". A ",e.jsx("code",{children:"Member"})," can borrow many ",e.jsx("code",{children:"Book"}),"s, but a book can be borrowed by only one member at a time. What relationship is that? Is it unidirectional or bidirectional? How would you map the borrowing date? That's a many-to-many with extra attributes, so you'd need an intermediate entity ",e.jsx("code",{children:"BorrowRecord"}),"."]})]}),e.jsx(b,{title:"Relationship Mappings - Expert FAQs",questions:E}),e.jsx("div",{className:"mt-12",children:e.jsx(v,{note:"📌 Relationships are often the hardest part for students. The key is to first draw the ER diagram on paper, then decide the owner side. I always tell them: 'The side that holds the foreign key is the owner, and it gets @JoinColumn. The other side has mappedBy.' Also, demonstrate the N+1 problem with a loop over students and accessing their courses – then show how JOIN FETCH solves it. Cascade should be used sparingly – ALL is dangerous."})})]})]})};export{U as default};
