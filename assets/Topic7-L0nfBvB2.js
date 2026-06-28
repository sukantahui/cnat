import{r as t,j as e}from"./index-DlQhRwac.js";import{c as s}from"./clsx-B-dksMZM.js";import{F as f}from"./FAQTemplate-Dd-OzPva.js";import{T as N}from"./TeacherSukantaHui-oAfgzdyj.js";import{J as l}from"./JavaFileLoader-JjjOWRqk.js";import"./git-branch-DB-sdnF9.js";import"./JavaCodeBlock-B3QOaYGb.js";import"./prism-DOs7RmKt.js";import"./browser-BVlc5g3G.js";import"./prism-java-BwO6k4I_.js";const j=`// SingleTable.java\r
import javax.persistence.*;\r
\r
@Entity\r
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)\r
@DiscriminatorColumn(name = "payment_type", discriminatorType = DiscriminatorType.STRING)\r
public abstract class Payment {\r
    @Id @GeneratedValue\r
    private Long id;\r
    private Double amount;\r
    private LocalDate date;\r
}\r
\r
@Entity\r
@DiscriminatorValue("CC")\r
public class CreditCardPayment extends Payment {\r
    private String cardNumber;\r
    private String cardHolderName;\r
}\r
\r
@Entity\r
@DiscriminatorValue("CH")\r
public class ChequePayment extends Payment {\r
    private String chequeNumber;\r
    private String bankName;\r
}`,E=`// JoinedTable.java\r
import javax.persistence.*;\r
\r
@Entity\r
@Inheritance(strategy = InheritanceType.JOINED)\r
public abstract class Payment {\r
    @Id @GeneratedValue\r
    private Long id;\r
    private Double amount;\r
}\r
\r
@Entity\r
@PrimaryKeyJoinColumn(name = "payment_id")\r
public class CreditCardPayment extends Payment {\r
    private String cardNumber;\r
}\r
\r
@Entity\r
@PrimaryKeyJoinColumn(name = "payment_id")\r
public class CashPayment extends Payment {\r
    // no extra fields\r
}`,v=`// TablePerClass.java\r
import javax.persistence.*;\r
\r
@Entity\r
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)\r
public abstract class Payment {\r
    @Id @GeneratedValue  // WARNING: IDENTITY won't work across tables\r
    protected Long id;\r
    protected Double amount;\r
}\r
\r
@Entity\r
public class CreditCardPayment extends Payment {\r
    private String cardNumber;\r
}`,S=`// MappedSuperclass.java\r
import javax.persistence.*;\r
\r
@MappedSuperclass\r
public abstract class BaseEntity {\r
    @Id @GeneratedValue\r
    private Long id;\r
    private LocalDateTime createdAt;\r
    private LocalDateTime updatedAt;\r
    \r
    @PrePersist\r
    protected void onCreate() { createdAt = LocalDateTime.now(); }\r
}\r
\r
@Entity\r
public class Student extends BaseEntity {\r
    private String name;\r
    // inherits id, createdAt, updatedAt fields in student table\r
}`,I=`// PolymorphicQueries.java\r
import org.hibernate.Session;\r
import java.util.List;\r
\r
public class PolymorphicQueries {\r
    public void demo(Session session) {\r
        // Returns all Payment subclasses: CreditCardPayment, ChequePayment, CashPayment\r
        List<Payment> allPayments = session.createQuery("FROM Payment", Payment.class).list();\r
        \r
        // Restrict to specific subtype\r
        List<CreditCardPayment> creditPayments = session.createQuery("FROM CreditCardPayment", CreditCardPayment.class).list();\r
        \r
        // Using TYPE operator\r
        List<Payment> onlyCreditAndCheque = session.createQuery(\r
            "FROM Payment p WHERE TYPE(p) IN (CreditCardPayment, ChequePayment)", Payment.class).list();\r
        \r
        // Downcasting in HQL\r
        List<String> cardNumbers = session.createQuery(\r
            "SELECT p.cardNumber FROM CreditCardPayment p", String.class).list();\r
    }\r
}`,C=[{question:"What are the four inheritance mapping strategies in JPA/Hibernate?",shortAnswer:"SINGLE_TABLE, JOINED, TABLE_PER_CLASS, and @MappedSuperclass (though the last is not a full inheritance strategy).",explanation:"SINGLE_TABLE: all classes in one table with discriminator. JOINED: each class has its own table, linked by FK. TABLE_PER_CLASS: each concrete class gets a table containing all fields. @MappedSuperclass: fields reused but no inheritance in DB.",hint:"Think of normalization vs performance.",level:"moderate",codeExample:"@Inheritance(strategy = InheritanceType.SINGLE_TABLE)"},{question:"What is the default inheritance strategy in JPA?",shortAnswer:"SINGLE_TABLE.",explanation:"If you don't specify @Inheritance, Hibernate/JPA defaults to SINGLE_TABLE. This may be surprising for those expecting separate tables.",hint:"Always explicitly declare the strategy you want.",level:"basic",codeExample:"@Entity // defaults to SINGLE_TABLE"},{question:"When would you use JOINED strategy over SINGLE_TABLE?",shortAnswer:"When the hierarchy has many columns that are mostly nullable, or when you need strict normalization and referential integrity.",explanation:"JOINED avoids wasted space and allows NOT NULL constraints on subtype columns. However, polymorphic queries require joins, which may be slower.",hint:"If you have many subtypes with very different fields, JOINED might be better.",level:"moderate",codeExample:"Use JOINED for statistics/audit logs where each subtype has distinct attributes."},{question:"Why is TABLE_PER_CLASS generally discouraged?",shortAnswer:"It leads to poor polymorphic query performance (UNION), ID generation conflicts, and duplicate data.",explanation:"Hibernate uses UNION queries for base class queries. Also, using IDENTITY generation across tables fails. TABLE_PER_CLASS is rarely the right choice.",hint:"Avoid unless you have a very specific reason like legacy schema.",level:"expert",codeExample:"// Polymorphic query generates UNION under the hood"},{question:"What is the purpose of @DiscriminatorColumn and @DiscriminatorValue?",shortAnswer:"They customize the discriminator column and values used in SINGLE_TABLE or JOINED strategies.",explanation:"By default, discriminator column is DTYPE with value = entity name. You can rename column and set custom values for each subclass.",hint:"Use @DiscriminatorValue to map legacy codes (e.g., 'CC' for CreditCard).",level:"moderate",codeExample:`@DiscriminatorColumn(name = "payment_type")
@DiscriminatorValue("CC")`},{question:"Can you query a @MappedSuperclass?",shortAnswer:"No, because it is not an entity. You can only query the concrete entity classes.",explanation:"@MappedSuperclass is just a template for fields. You cannot perform polymorphic queries on it. Use entity inheritance if you need polymorphism.",hint:"@MappedSuperclass = code reuse only, no polymorphism.",level:"moderate",codeExample:"// FROM BaseEntity is invalid"},{question:"How does the JOINED strategy store child rows?",shortAnswer:"Parent table contains common columns; child table contains extra columns and a foreign key referencing parent table's primary key.",explanation:"A row in parent is required for each child. Queries for a specific subtype join the two tables. @PrimaryKeyJoinColumn defines the FK.",hint:"Think of a normalized ER diagram.",level:"moderate",codeExample:`CREATE TABLE payment (id BIGINT PRIMARY KEY, amount DOUBLE)
CREATE TABLE credit_payment (payment_id BIGINT PRIMARY KEY, card_number VARCHAR)`},{question:"What is the 'TYPE' operator in HQL used for?",shortAnswer:"It filters results by the discriminator of the entity (subtype).",explanation:"Useful when you want only certain subclasses from a polymorphic query. Example: FROM Payment p WHERE TYPE(p) = CreditCardPayment",hint:"Alternative to querying the subclass directly.",level:"expert",codeExample:"FROM Animal a WHERE TYPE(a) IN (Dog, Cat)"},{question:"Can you change the inheritance strategy after deployment?",shortAnswer:"Generally no – schema migration would be complex and Hibernate doesn't support it automatically.",explanation:"Changing from SINGLE_TABLE to JOINED would require data migration scripts. Design carefully upfront.",hint:"Consider extensibility: JOINED is more flexible for adding subclasses.",level:"expert",codeExample:"Plan strategy early; avoid switching later."},{question:"What happens to discriminator column in JOINED strategy?",shortAnswer:"JOINED also uses a discriminator column by default (optional) to identify subtype without joining child tables.",explanation:"If you don't need it, you can disable with @DiscriminatorColumn(nullable=true) or set to false. Without it, Hibernate may join to find type.",hint:"Leaving discriminator can improve performance for base class queries.",level:"expert",codeExample:"@DiscriminatorColumn(required = false)"}],O=()=>{const[a,g]=t.useState({intro:!1,single:!1,joined:!1,tablePerClass:!1,mappedSuperclass:!1,comparison:!1,checklist:!1}),b=(n,i)=>{n.forEach(o=>{o.isIntersecting&&g(m=>({...m,[i]:!0}))})},r=(n,i)=>{if(!n.current)return;const o=new IntersectionObserver(m=>b(m,i),{threshold:.2,rootMargin:"0px 0px -50px 0px"});return o.observe(n.current),o},d=t.useRef(null),h=t.useRef(null),p=t.useRef(null),u=t.useRef(null),y=t.useRef(null),c=t.useRef(null),x=t.useRef(null);return t.useEffect(()=>{const n=[r(d,"intro"),r(h,"single"),r(p,"joined"),r(u,"tablePerClass"),r(y,"mappedSuperclass"),r(c,"comparison"),r(x,"checklist")];return()=>n.forEach(i=>i&&i.disconnect())},[]),e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 font-sans leading-relaxed",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16",children:[e.jsxs("div",{ref:d,className:s("text-center mb-16 transition-all duration-700 ease-out",a.intro?"animate-fadeSlideUp":"opacity-0 translate-y-8"),children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400",children:"Inheritance Mapping Strategies"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Mapping object-oriented inheritance to relational tables"}),e.jsxs("div",{className:"mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 text-sm",children:[e.jsx("span",{className:"font-mono",children:"🧬"})," SINGLE_TABLE · JOINED · TABLE_PER_CLASS · @MappedSuperclass"]})]}),e.jsxs("div",{ref:d,className:s("mb-16 bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl",a.intro?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.1s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"📊"})," The Object-Relational Impedance Mismatch"]}),e.jsx("p",{className:"mb-3",children:"Relational databases don't support inheritance. Hibernate provides four strategies to map a class hierarchy (parent and child classes) to tables, each with trade-offs in performance, data normalization, and query complexity."}),e.jsx("div",{className:"grid md:grid-cols-2 gap-4 mt-4",children:e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-3 rounded",children:[e.jsx("strong",{children:"🎯 Example:"})," Payment abstract class with CreditCardPayment, CashPayment, ChequePayment subclasses."]})}),e.jsx("div",{className:"bg-pink-50 dark:bg-pink-900/20 p-4 rounded-xl mt-4 border-l-4 border-pink-500",children:e.jsxs("p",{className:"italic",children:["✨ Real-world: ",e.jsx("strong",{children:"Barrackpore School Fee System"})," – different payment methods share common fields (amount, date) but have unique fields (cardNumber, chequeNumber). Choosing the right strategy impacts query speed and schema complexity."]})})]}),e.jsxs("div",{ref:h,className:s("mb-16",a.single?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📋 SINGLE_TABLE Strategy"}),e.jsx("p",{className:"mb-2",children:"One table for the entire hierarchy, with a discriminator column to identify the subtype."}),e.jsx(l,{fileModule:j,title:"SingleTable.java - @Inheritance(strategy = InheritanceType.SINGLE_TABLE)",highlightLines:[3,4,5,6,7,8,9,10]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mt-3 text-sm",children:[e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-2 rounded",children:["✅ ",e.jsx("strong",{children:"Pros:"})," Fastest polymorphic queries, no joins."]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-2 rounded",children:["❌ ",e.jsx("strong",{children:"Cons:"})," Wasted space (nullable columns), column limits, not normalized."]})]})]}),e.jsxs("div",{ref:p,className:s("mb-16",a.joined?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔗 JOINED Strategy"}),e.jsx("p",{className:"mb-2",children:"One table for the parent, separate tables for each child, linked by foreign key."}),e.jsx(l,{fileModule:E,title:"JoinedTable.java - @Inheritance(strategy = InheritanceType.JOINED)",highlightLines:[3,4,5,6,7,8]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mt-3 text-sm",children:[e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-2 rounded",children:["✅ ",e.jsx("strong",{children:"Pros:"})," Normalized, no wasted columns, easy to add subtypes."]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-2 rounded",children:["❌ ",e.jsx("strong",{children:"Cons:"})," Joins required for queries (slower for large hierarchies)."]})]})]}),e.jsxs("div",{ref:u,className:s("mb-16",a.tablePerClass?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.4s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📁 TABLE_PER_CLASS Strategy"}),e.jsx("p",{className:"mb-2",children:"Each concrete class has its own table, containing all fields (including inherited). Parent table not created."}),e.jsx(l,{fileModule:v,title:"TablePerClass.java - @Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)",highlightLines:[3,4,5,6]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mt-3 text-sm",children:[e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-2 rounded",children:["✅ ",e.jsx("strong",{children:"Pros:"})," No joins, each table independent."]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-2 rounded",children:["❌ ",e.jsx("strong",{children:"Cons:"})," Polymorphic queries use UNION (slow), duplicate columns across tables, ID generation issues."]})]})]}),e.jsxs("div",{ref:y,className:s("mb-16",a.mappedSuperclass?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.5s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🧩 @MappedSuperclass (Shared fields, no inheritance in DB)"}),e.jsx("p",{className:"mb-2",children:"Parent is not an entity; its fields are copied into child entity tables. No polymorphic queries."}),e.jsx(l,{fileModule:S,title:"MappedSuperclass.java - Reusable fields but no relationship",highlightLines:[3,4,5,6,7,8,9]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"⚠️ Use when you just want common fields (like id, createdAt, updatedAt) without inheritance behavior. No @Inheritance annotation needed."})]}),e.jsxs("div",{ref:c,className:s("mb-16 overflow-x-auto",a.comparison?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.6s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"📊 Strategy Comparison"}),e.jsxs("table",{className:"min-w-full text-sm bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 text-left",children:"Strategy"}),e.jsx("th",{className:"p-3 text-left",children:"Tables"}),e.jsx("th",{className:"p-3 text-left",children:"Columns"}),e.jsx("th",{className:"p-3 text-left",children:"Polymorphic Query"}),e.jsx("th",{className:"p-3 text-left",children:"Best For"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-600",children:[e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50",children:[e.jsx("td",{className:"p-3 font-medium",children:"SINGLE_TABLE"}),e.jsx("td",{children:"1"}),e.jsx("td",{children:"All fields + discriminator"}),e.jsx("td",{children:"Fast, no join"}),e.jsx("td",{children:"Small hierarchies, few nullable columns"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50",children:[e.jsx("td",{className:"p-3 font-medium",children:"JOINED"}),e.jsx("td",{children:"N+1 (N = subclasses)"}),e.jsx("td",{children:"Normalized"}),e.jsx("td",{children:"Joins required"}),e.jsx("td",{children:"Normalized schema, many subtypes"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50",children:[e.jsx("td",{className:"p-3 font-medium",children:"TABLE_PER_CLASS"}),e.jsx("td",{children:"1 per concrete class"}),e.jsx("td",{children:"All fields duplicated"}),e.jsx("td",{children:"UNION queries"}),e.jsx("td",{children:"Rarely used – avoid"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50",children:[e.jsx("td",{className:"p-3 font-medium",children:"@MappedSuperclass"}),e.jsx("td",{children:"As per children"}),e.jsx("td",{children:"Fields copied"}),e.jsx("td",{children:"None (no polymorphism)"}),e.jsx("td",{children:"Shared fields without inheritance"})]})]})]})]}),e.jsxs("div",{ref:c,className:s("mb-16",a.comparison?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.7s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔍 Polymorphic Queries"}),e.jsx(l,{fileModule:I,title:"PolymorphicQueries.java - Querying the base class returns all subtypes",highlightLines:[8,9,10,11,12,13]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:'✅ HQL "FROM Payment" returns CreditCardPayment, CashPayment, ChequePayment objects. No special syntax needed.'})]}),e.jsxs("div",{ref:x,className:s("mb-12 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-8 border-amber-500",a.checklist?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.8s"},children:[e.jsx("h3",{className:"text-xl font-bold mb-3 flex items-center gap-2",children:"💡 Tips & Tricks (Professional)"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"SINGLE_TABLE"})," is the default and usually the best for most applications due to performance."]}),e.jsxs("li",{children:["🔹 Use ",e.jsx("code",{children:"@DiscriminatorColumn"})," and ",e.jsx("code",{children:"@DiscriminatorValue"})," to customize discriminator."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"JOINED"})," is good for deep hierarchies or when subtypes have many unique fields and nulls are undesirable."]}),e.jsxs("li",{children:["🔹 Avoid ",e.jsx("strong",{children:"TABLE_PER_CLASS"})," – it causes issues with identity generation and polymorphic queries use UNION which is slow."]}),e.jsxs("li",{children:["🔹 For pure code reuse without persistence behavior, use ",e.jsx("code",{children:"@MappedSuperclass"})," (e.g., common audit fields)."]})]}),e.jsx("h3",{className:"text-xl font-bold mt-6 mb-3 flex items-center gap-2",children:"⚠️ Common Pitfalls (Beginners)"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["❌ Forgetting ",e.jsx("code",{children:"@Inheritance"})," annotation – defaults to SINGLE_TABLE, but you must know that."]}),e.jsx("li",{children:'❌ Not specifying discriminator column for SINGLE_TABLE – Hibernate uses default "DTYPE".'}),e.jsxs("li",{children:["❌ Using TABLE_PER_CLASS with ",e.jsx("code",{children:"@GeneratedValue(strategy = IDENTITY)"})," – doesn't work properly across tables."]}),e.jsxs("li",{children:["❌ Querying base class and getting all subtypes when you only wanted one type – use ",e.jsx("code",{children:"TYPE"})," operator."]})]}),e.jsx("div",{className:"mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg text-center",children:e.jsx("p",{className:"text-pink-600 dark:text-pink-400 font-semibold",children:"✅ Mini Checklist: Choose strategy based on normalization vs performance. SINGLE_TABLE for most cases. JOINED for strict normalization. Avoid TABLE_PER_CLASS. Use @MappedSuperclass for shared fields only."})})]}),e.jsxs("div",{className:"my-12 p-5 bg-gray-100 dark:bg-gray-800/60 rounded-xl border border-gray-300 dark:border-gray-600 text-center transition-all hover:scale-[1.01]",children:[e.jsx("h4",{className:"font-mono text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2",children:"🔎 Think about ..."}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:`You have a class hierarchy: Vehicle (abstract) → Car, Bike, Truck. Car has 'doorCount', Bike has 'hasGear', Truck has 'loadCapacity'. Which strategy avoids many nullable columns? Which strategy gives fastest query for "SELECT * FROM Vehicle"? Which strategy would you choose if you expect many new subclasses?`})]}),e.jsx(f,{title:"Inheritance Mapping - Expert FAQs",questions:C}),e.jsx("div",{className:"mt-12",children:e.jsx(N,{note:"🧬 Inheritance mapping confuses students because databases don't inherit. I use an analogy: SINGLE_TABLE is like a spreadsheet with many empty cells; JOINED is like a relational database with foreign keys; TABLE_PER_CLASS is like separate Excel files for each subtype. Always demonstrate the SQL generated for each strategy – that clarifies the trade-offs. For <strong>Ichapur School</strong> payment system, I'd start with SINGLE_TABLE until nullable columns become a problem."})})]})]})};export{O as default};
