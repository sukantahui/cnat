import{r as a,j as e}from"./index-Czk7a0H9.js";import{c as n}from"./clsx-B-dksMZM.js";import{F as f}from"./FAQTemplate-C1oyb7Bv.js";import{T as v}from"./TeacherSukantaHui-ClLEdT_L.js";import{J as l}from"./JavaFileLoader-D5YquA0o.js";import"./git-branch-2vfSWSZD.js";import"./JavaCodeBlock-CySzL3ZH.js";import"./prism-IyxSUpEx.js";import"./browser-oxRBL7Ul.js";import"./prism-java-BwO6k4I_.js";const j=`// BasicEntity.java\r
package com.school.model;\r
\r
import javax.persistence.*;\r
\r
@Entity  // Marks this class as entity\r
@Table(name = "students")  // Optional: table name (defaults to "Student")\r
public class Student {\r
    @Id  // Primary key\r
    private Long id;\r
    \r
    private String name;\r
    private String city;\r
    \r
    // No-arg constructor (required)\r
    public Student() {}\r
    \r
    public Student(String name, String city) {\r
        this.name = name;\r
        this.city = city;\r
    }\r
    \r
    // getters and setters...\r
}`,E=`// ColumnMappings.java\r
package com.school.model;\r
\r
import javax.persistence.*;\r
\r
@Entity\r
@Table(name = "student_details")\r
public class StudentDetail {\r
    @Id\r
    @GeneratedValue(strategy = GenerationType.IDENTITY)\r
    private Long id;\r
    \r
    @Column(name = "full_name", length = 100, nullable = false)\r
    private String name;\r
    \r
    @Column(unique = true, length = 20)\r
    private String rollNumber;\r
    \r
    @Column(precision = 10, scale = 2)  // e.g., DECIMAL(10,2)\r
    private Double feeBalance;\r
    \r
    @Column(insertable = false, updatable = false)  // read-only column\r
    private String createdBySystem;\r
    \r
    // getters/setters omitted\r
}`,I=`// IdGeneration.java\r
import javax.persistence.*;\r
\r
@Entity\r
public class IdExample {\r
    // Strategy 1: IDENTITY (auto-increment)\r
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)\r
    private Long identityId;\r
    \r
    // Strategy 2: SEQUENCE (with custom generator)\r
    @Id @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "my_seq")\r
    @SequenceGenerator(name = "my_seq", sequenceName = "student_seq", allocationSize = 50)\r
    private Long sequenceId;\r
    \r
    // Strategy 3: TABLE (portable but slower)\r
    @Id @GeneratedValue(strategy = GenerationType.TABLE, generator = "table_gen")\r
    @TableGenerator(name = "table_gen", table = "id_gen", pkColumnValue = "student")\r
    private Long tableId;\r
    \r
    // Strategy 4: AUTO (Hibernate chooses based on dialect)\r
    @Id @GeneratedValue(strategy = GenerationType.AUTO)\r
    private Long autoId;\r
    \r
    // Strategy 5: UUID\r
    @Id @GeneratedValue(generator = "uuid2")\r
    @GenericGenerator(name = "uuid2", strategy = "uuid2")\r
    private String uuidId;\r
    \r
    // Strategy 6: ASSIGNED (no generation)\r
    @Id\r
    private String email;\r
}`,T=`// EmbeddedExample.java\r
package com.school.model;\r
\r
import javax.persistence.*;\r
\r
// Embeddable – reusable component, no table\r
@Embeddable\r
public class Address {\r
    private String street;\r
    private String city;\r
    private String zipCode;\r
    // getters/setters...\r
}\r
\r
// Entity using embedded component\r
@Entity\r
public class Employee {\r
    @Id @GeneratedValue\r
    private Long id;\r
    \r
    @Embedded  // Columns: street, city, zipCode\r
    private Address homeAddress;\r
    \r
    @AttributeOverrides({  // Override column names for same embeddable type\r
        @AttributeOverride(name = "street", column = @Column(name = "office_street")),\r
        @AttributeOverride(name = "city", column = @Column(name = "office_city")),\r
        @AttributeOverride(name = "zipCode", column = @Column(name = "office_zip"))\r
    })\r
    @Embedded\r
    private Address officeAddress;\r
}`,N=`// TemporalExample.java\r
import javax.persistence.*;\r
import java.util.Date;\r
import java.time.LocalDate;\r
import java.time.LocalDateTime;\r
\r
@Entity\r
public class DateEntity {\r
    @Id @GeneratedValue\r
    private Long id;\r
    \r
    // Legacy Date with @Temporal\r
    @Temporal(TemporalType.DATE)      // SQL DATE\r
    private Date birthDate;\r
    \r
    @Temporal(TemporalType.TIME)      // SQL TIME\r
    private Date alarmTime;\r
    \r
    @Temporal(TemporalType.TIMESTAMP) // SQL TIMESTAMP\r
    private Date createdAt;\r
    \r
    // Java 8 Time API – no @Temporal needed\r
    private LocalDate joinDate;        // maps to DATE\r
    private LocalDateTime lastLogin;   // maps to TIMESTAMP\r
    // getters/setters...\r
}`,S=`// AccessStrategy.java\r
import javax.persistence.*;\r
\r
// Field access (default because @Id is on field)\r
@Entity\r
public class FieldAccessEntity {\r
    @Id\r
    private Long id;\r
    private String name;\r
    // getters/setters but Hibernate accesses fields directly\r
}\r
\r
// Property access (explicit with @Access)\r
@Entity\r
@Access(AccessType.PROPERTY)  // force property access for whole class\r
public class PropertyAccessEntity {\r
    private Long id;\r
    private String name;\r
    \r
    @Id\r
    public Long getId() { return id; }\r
    public void setId(Long id) { this.id = id; }\r
    // Hibernate uses getters/setters\r
}\r
\r
// Mixed access: override for specific field\r
@Entity\r
public class MixedAccessEntity {\r
    private Long id;\r
    private String name;\r
    \r
    @Id\r
    @Access(AccessType.PROPERTY)  // only id uses property access\r
    public Long getId() { return id; }\r
    public void setId(Long id) { this.id = id; }\r
    \r
    @Access(AccessType.FIELD)     // name uses field access\r
    private String name;\r
}`,w=[{question:"What is the purpose of @Entity annotation?",shortAnswer:"Marks a Java class as a persistent entity (maps to a database table).",explanation:"@Entity tells Hibernate that the class should be managed and its instances stored. Without it, the class is ignored. The table name defaults to the class name (first letter lowercase).",hint:"Try removing @Entity and see MappingException.",level:"basic",codeExample:`@Entity
public class Student { ... }`},{question:"How does Hibernate determine the primary key for an entity?",shortAnswer:"Using @Id annotation on a field or getter representing the primary key.",explanation:"The @Id field uniquely identifies each entity instance. It can be a natural key (e.g., email) or a surrogate key (auto-generated). You can also have composite primary keys with @IdClass or @EmbeddedId.",hint:"Every entity must have @Id, otherwise Hibernate won't know how to find rows.",level:"basic",codeExample:`@Id
private Long studentId;`},{question:"What are the differences between FIELD and PROPERTY access?",shortAnswer:"FIELD access reads/writes fields directly; PROPERTY access uses getters/setters.",explanation:"Access type is determined by placement of @Id. If @Id is on a field → field access; if on a getter → property access. Field access is simpler. Property access allows validation or transformation in getters/setters.",hint:"Mixed access is possible but rarely needed.",level:"moderate",codeExample:`// Field access
@Id private Long id;
// Property access
@Id public Long getId() { return id; }`},{question:"Explain the @GeneratedValue strategy 'SEQUENCE' vs 'IDENTITY'. When would you choose SEQUENCE?",shortAnswer:"IDENTITY uses auto-increment columns; SEQUENCE uses database sequences. Choose SEQUENCE for better batch insert performance and when using databases that support sequences (PostgreSQL, Oracle).",explanation:"IDENTITY causes Hibernate to execute INSERT right away to get the generated ID, disabling batching. SEQUENCE allows Hibernate to pre-allocate IDs in batch, improving bulk insert performance.",hint:"If you insert many rows in one transaction, SEQUENCE is faster.",level:"expert",codeExample:`@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq")
@SequenceGenerator(name="seq", allocationSize=50)`},{question:"What is the purpose of @Column(insertable=false, updatable=false)?",shortAnswer:"Makes the column read-only: Hibernate excludes it from INSERT and UPDATE statements.",explanation:"Useful for database-generated columns (e.g., created_date with DEFAULT CURRENT_TIMESTAMP, or last_updated triggers). The field is still readable.",hint:"This is different from @Transient (field not persistent at all).",level:"moderate",codeExample:`@Column(insertable = false, updatable = false)
private LocalDateTime createdAt;`},{question:"What is the difference between @Transient and transient Java keyword?",shortAnswer:"@Transient is JPA-specific and excludes the field from persistence; 'transient' is Java serialization keyword (ignored by Hibernate as well but not JPA standard).",explanation:"Use @Transient for fields that should not be stored in database, e.g., calculated fields. 'transient' also works in Hibernate but is not portable to other JPA providers.",hint:"For portability, always use @Transient.",level:"moderate",codeExample:`@Transient
private int ageCalculatedFromBirthDate;`},{question:"How do you map a composite primary key?",shortAnswer:"Two options: @IdClass (define separate key class) or @EmbeddedId (embed key class with @Embeddable).",explanation:"@EmbeddedId is more object-oriented (key is a single object). @IdClass maps multiple fields as IDs but requires duplicate field names. Both require implementing equals/hashCode.",hint:"Use @EmbeddedId for cleaner code.",level:"moderate",codeExample:`@Embeddable class OrderId { int orderNum; int customerId; }
@Entity
class Order { @EmbeddedId OrderId id; }`},{question:"What happens if you don't provide a no-arg constructor in an entity?",shortAnswer:"Hibernate will throw a runtime exception because it needs to instantiate the entity via reflection.",explanation:"Hibernate uses Class.newInstance() or constructors via reflection. The no-arg constructor can be private, but must exist. If you have a parameterized constructor, also add a no-arg one.",hint:"Always include protected or public default constructor.",level:"basic",codeExample:"protected Student() {} // required"},{question:"What is the purpose of @Lob annotation?",shortAnswer:"Marks large object (BLOB for binary, CLOB for character data).",explanation:"Maps to database BLOB (byte[]) or CLOB (String/char[]). Hibernate handles streaming automatically. Not recommended for very large files; use separate storage.",hint:"@Lob with String maps to CLOB; with byte[] maps to BLOB.",level:"moderate",codeExample:`@Lob
private String description; // CLOB
@Lob
private byte[] photo; // BLOB`},{question:"Can an entity extend a non-entity superclass?",shortAnswer:"Yes, but fields from superclass are not persisted unless the superclass is annotated @MappedSuperclass.",explanation:"If superclass has @MappedSuperclass, its fields are included in the entity table. Without it, fields are ignored by Hibernate.",hint:"Use @MappedSuperclass for common fields like id, createdAt, updatedAt.",level:"moderate",codeExample:`@MappedSuperclass
abstract class BaseEntity { @Id Long id; }
@Entity class User extends BaseEntity { }`},{question:"What is the default naming strategy for table and column names?",shortAnswer:"Table name = entity class name (first letter lowercase), column name = field name.",explanation:"You can override with @Table(name=...) and @Column(name=...). Hibernate's PhysicalNamingStrategy can apply global rules (e.g., snake_case).",hint:"If your database uses snake_case (e.g., student_name), use a naming strategy.",level:"basic",codeExample:`@Entity
@Table(name = "students")
public class Student {
    @Column(name = "full_name")
    private String name;
}`},{question:"How do you specify the schema for an entity?",shortAnswer:'Use schema attribute in @Table: @Table(schema = "school").',explanation:"If your database has multiple schemas, setting schema ensures Hibernate uses the correct one. Also can set hibernate.default_schema globally.",hint:"For multi-tenant SaaS, schema is often set programmatically.",level:"moderate",codeExample:'@Table(schema = "production", name = "students")'},{question:"What is the @Enumerated annotation and its two types?",shortAnswer:"@Enumerated maps Java enum to database column. Types: ORDINAL (stores index) and STRING (stores name).",explanation:"ORDINAL is fragile if enum order changes. STRING is safer but uses more storage. You can also create a custom AttributeConverter for more control.",hint:"Prefer STRING for stability, ORDINAL only if space is critical and enums never reorder.",level:"moderate",codeExample:`@Enumerated(EnumType.STRING)
private Grade grade;`},{question:"Explain the concept of 'derived property' mapping.",shortAnswer:"Derived properties are calculated from database columns and not stored. Use @Formula (Hibernate) or @Transient + custom getter.",explanation:'@Formula performs calculation in the database, e.g., @Formula("price * quantity") returns total. This is not JPA standard but Hibernate extension.',hint:"Derived properties are read-only and useful for computed values.",level:"expert",codeExample:`@Formula("salary * 0.1")
private double bonus;`},{question:"What is the @Access annotation used for?",shortAnswer:"@Access explicitly sets the access type (FIELD or PROPERTY) at class or field level.",explanation:"Useful when you want to mix access types: e.g., property access for most fields but field access for a specific lazy loaded one. Overrides the default access inferred from @Id placement.",hint:"Mixed access is advanced; keep it simple with single access type per entity.",level:"expert",codeExample:`@Access(AccessType.FIELD)
private String lazyField;`},{question:"How do you map a UUID as primary key?",shortAnswer:'Use @Id @GeneratedValue(generator = "uuid2") with @GenericGenerator(name="uuid2", strategy="uuid2").',explanation:"Hibernate generates RFC 4122 UUIDs. Column type should be BINARY(16) or UUID (depending on database). This is excellent for distributed systems.",hint:"Consider using UUID as binary for performance.",level:"expert",codeExample:`@Id @GeneratedValue(generator = "uuid2")
@GenericGenerator(name = "uuid2", strategy = "uuid2")
private UUID id;`},{question:"What is @Version annotation used for?",shortAnswer:"@Version enables optimistic locking by maintaining a version number or timestamp.",explanation:"Hibernate increments the version each time the entity is updated. If another transaction updated the same row, version mismatch causes OptimisticLockException. Prevents lost updates.",hint:"Always add @Version to entities that may be updated concurrently.",level:"expert",codeExample:`@Version
private int version;`},{question:"What is the difference between @Column(unique=true) and @UniqueConstraint?",shortAnswer:"@Column(unique=true) applies to a single column; @UniqueConstraint in @Table can apply to multiple columns (composite unique).",explanation:"Both are used for DDL generation. They don't enforce runtime constraints (database does). Use @UniqueConstraint for unique across columns: e.g., student_name and class_id together unique.",hint:"Check your database schema after generation to verify constraints.",level:"moderate",codeExample:'@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"firstName", "lastName"}))'},{question:"Can you map an entity to a view instead of a table?",shortAnswer:`Yes, treat the view like a table using @Table(name = "view_name"). But it's read-only unless the view is updatable.`,explanation:"Hibernate doesn't differentiate. Use @Immutable or set updatable=false for columns. Native updates may fail if view is not updatable.",hint:"Make entity read-only by annotating @Immutable.",level:"expert",codeExample:`@Entity @Table(name = "student_summary_view")
@Immutable
public class StudentSummary { ... }`},{question:"What is the purpose of @DynamicInsert and @DynamicUpdate?",shortAnswer:"Generate INSERT/UPDATE statements that include only changed (non-null) columns, not all columns.",explanation:"By default Hibernate includes all columns in INSERT/UPDATE even if unchanged. Dynamic versions generate SQL at runtime with only the columns that are set. Useful for large tables with many columns, but adds overhead.",hint:"Use when you have a table with many columns and only update a few at a time.",level:"expert",codeExample:`@DynamicInsert
@DynamicUpdate
@Entity
public class LargeTable { ... }`},{question:"How do you map a Java 8 Optional field?",shortAnswer:"Hibernate does not directly support java.util.Optional as a field type. Use the value directly or implement a UserType.",explanation:"Optional is intended for return types, not persistent fields. Map the underlying value (maybe null) and wrap in Optional in getter.",hint:"Never persist Optional directly; convert to/from nullable.",level:"expert",codeExample:`private String middleName; // nullable
public Optional<String> getMiddleName() { return Optional.ofNullable(middleName); }`}],H=()=>{const[t,g]=a.useState({intro:!1,annotations:!1,columnMapping:!1,idGen:!1,embedded:!1,temporal:!1,checklist:!1}),x=(r,i)=>{r.forEach(o=>{o.isIntersecting&&g(d=>({...d,[i]:!0}))})},s=(r,i)=>{if(!r.current)return;const o=new IntersectionObserver(d=>x(d,i),{threshold:.2,rootMargin:"0px 0px -50px 0px"});return o.observe(r.current),o},c=a.useRef(null),m=a.useRef(null),p=a.useRef(null),u=a.useRef(null),h=a.useRef(null),y=a.useRef(null),b=a.useRef(null);return a.useEffect(()=>{const r=[s(c,"intro"),s(m,"annotations"),s(p,"columnMapping"),s(u,"idGen"),s(h,"embedded"),s(y,"temporal"),s(b,"checklist")];return()=>r.forEach(i=>i&&i.disconnect())},[]),e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 font-sans leading-relaxed",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16",children:[e.jsxs("div",{ref:c,className:n("text-center mb-16 transition-all duration-700 ease-out",t.intro?"animate-fadeSlideUp":"opacity-0 translate-y-8"),children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400",children:"Entity Mapping"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Transforming Java objects into database tables – the heart of ORM"}),e.jsxs("div",{className:"mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm",children:[e.jsx("span",{className:"font-mono",children:"🗺️"})," @Entity · @Table · @Id · @GeneratedValue · @Column"]})]}),e.jsxs("div",{ref:m,className:n("mb-16 bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl",t.annotations?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.1s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"🧩"})," What is Entity Mapping?"]}),e.jsxs("p",{className:"mb-3",children:["Entity mapping is the process of linking a Java class (the entity) to a database table, and its fields to table columns. In Hibernate (and JPA), this is done using ",e.jsx("strong",{children:"annotations"})," (modern) or XML (legacy)."]}),e.jsx("p",{className:"mb-3",children:"The entity represents a persistent object: it has an identity (primary key), can be loaded, saved, updated, and deleted. Hibernate manages the mapping – you work with objects, not SQL."}),e.jsx("div",{className:"bg-green-50 dark:bg-green-900/20 p-4 rounded-xl mt-3 border-l-4 border-green-500",children:e.jsxs("p",{className:"italic",children:["✨ Real-world: In a school system, a ",e.jsx("code",{children:"Student"})," entity maps to the ",e.jsx("code",{children:"students"})," table. Swadeep's record in Java becomes a row in the database. No manual SQL needed."]})})]}),e.jsxs("div",{ref:p,className:n("mb-16",t.columnMapping?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"🏷️ Basic Entity Mapping"}),e.jsx(l,{fileModule:j,title:"Student.java - Minimal Entity Mapping",highlightLines:[3,4,5,9,10,12,13]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:["⬆️ ",e.jsx("code",{children:"@Entity"})," marks the class; ",e.jsx("code",{children:"@Id"})," defines the primary key. Table name defaults to class name (Student → student)."]})]}),e.jsxs("div",{ref:u,className:n("mb-16",t.idGen?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"📝 Customizing Column Mapping (@Column)"}),e.jsx(l,{fileModule:E,title:"StudentDetail.java - Using @Column attributes",highlightLines:[11,12,13,14,15,16,17,18]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 mt-4",children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-3 rounded-lg",children:[e.jsx("h4",{className:"font-bold",children:"name"}),e.jsx("p",{className:"text-sm",children:"Database column name (default = field name)"})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-3 rounded-lg",children:[e.jsx("h4",{className:"font-bold",children:"nullable / unique"}),e.jsx("p",{className:"text-sm",children:"NOT NULL / UNIQUE constraints (schema generation)"})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-3 rounded-lg",children:[e.jsx("h4",{className:"font-bold",children:"length / precision / scale"}),e.jsx("p",{className:"text-sm",children:"For VARCHAR(255) or DECIMAL(10,2)"})]})]})]}),e.jsxs("div",{ref:h,className:n("mb-16",t.embedded?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.4s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"🔑 Primary Key Generation (@Id, @GeneratedValue)"}),e.jsx(l,{fileModule:I,title:"IdGenerationExample.java - All Generation Strategies",highlightLines:[7,8,9,10,11,12,13,14,15]}),e.jsx("div",{className:"overflow-x-auto mt-4",children:e.jsxs("table",{className:"min-w-full text-sm bg-white dark:bg-gray-800 rounded-lg overflow-hidden",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 text-left",children:"Strategy"}),e.jsx("th",{className:"p-2 text-left",children:"Description"}),e.jsx("th",{className:"p-2 text-left",children:"Best for"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-600",children:[e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50",children:[e.jsx("td",{className:"p-2",children:"IDENTITY"}),e.jsx("td",{children:"Auto-increment column (MySQL, SQL Server)"}),e.jsx("td",{children:"Simple, single-database apps"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50",children:[e.jsx("td",{className:"p-2",children:"SEQUENCE"}),e.jsx("td",{children:"Database sequence (PostgreSQL, Oracle)"}),e.jsx("td",{children:"High concurrency, batch inserts"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50",children:[e.jsx("td",{className:"p-2",children:"TABLE"}),e.jsx("td",{children:"Simulates sequence using a separate table"}),e.jsx("td",{children:"Portability across databases (but slower)"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50",children:[e.jsx("td",{className:"p-2",children:"UUID / AUTO"}),e.jsx("td",{children:"Let Hibernate pick (UUID or identity/sequence)"}),e.jsx("td",{children:"Distributed systems or when database agnostic"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50",children:[e.jsx("td",{className:"p-2",children:"ASSIGNED"}),e.jsx("td",{children:"Application assigns ID (no generation)"}),e.jsx("td",{children:"Natural keys like email/username"})]})]})]})})]}),e.jsxs("div",{ref:y,className:n("mb-16",t.temporal?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.5s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"🧩 Embedded Objects (@Embeddable / @Embedded)"}),e.jsx("p",{className:"mb-3",children:"Reuse common fields across multiple entities without creating a separate table."}),e.jsx(l,{fileModule:T,title:"Address.java (Embeddable) & Employee.java (usage)",highlightLines:[3,4,5,6,7,8,9,10,11,12,13,14,15,16]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:["⬆️ The ",e.jsx("code",{children:"Address"})," fields become columns in the ",e.jsx("code",{children:"Employee"})," table (e.g., ",e.jsx("code",{children:"street"}),", ",e.jsx("code",{children:"city"}),")."]})]}),e.jsxs("div",{className:n("mb-16",t.temporal?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.6s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"⏰ Temporal (Date/Time) Mapping"}),e.jsx(l,{fileModule:N,title:"DateEntity.java - @Temporal and Java 8 Time API",highlightLines:[9,10,11,12,13,14,15,16,17,18]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:["💡 ",e.jsx("strong",{children:"Best practice:"})," Use Java 8 ",e.jsx("code",{children:"LocalDate"}),", ",e.jsx("code",{children:"LocalDateTime"}),", ",e.jsx("code",{children:"Instant"})," – no ",e.jsx("code",{children:"@Temporal"})," needed, and they handle timezone better."]})]}),e.jsxs("div",{className:n("mb-16",t.temporal?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.7s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"🎯 Access Strategy: Field vs Property"}),e.jsx(l,{fileModule:S,title:"AccessStrategyDemo.java - @Access annotation",highlightLines:[5,6,7,8,9,10,11,12,13]}),e.jsxs("div",{className:"mt-3 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg",children:[e.jsx("p",{children:e.jsx("strong",{children:"Rules:"})}),e.jsxs("ul",{className:"list-disc list-inside",children:[e.jsxs("li",{children:["If you place ",e.jsx("code",{children:"@Id"})," on a field → field access (Hibernate reads/writes fields directly)."]}),e.jsxs("li",{children:["If you place ",e.jsx("code",{children:"@Id"})," on a getter → property access (Hibernate uses getters/setters)."]}),e.jsxs("li",{children:["Mixed access (e.g., some fields private, some getters) requires ",e.jsx("code",{children:"@Access"})," at class/field level."]})]}),e.jsx("p",{className:"mt-2 italic",children:"💡 Most projects use field access (simpler, less boilerplate). Use property access when you need custom logic inside getters/setters."})]})]}),e.jsxs("div",{ref:b,className:n("mb-12 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-8 border-amber-500",t.checklist?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.8s"},children:[e.jsx("h3",{className:"text-xl font-bold mb-3 flex items-center gap-2",children:"💡 Tips & Tricks (Professional)"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["🔹 Always provide a ",e.jsx("strong",{children:"no-arg constructor"})," (Hibernate uses it for proxy creation)."]}),e.jsxs("li",{children:["🔹 Override ",e.jsx("code",{children:"equals()"})," and ",e.jsx("code",{children:"hashCode()"})," using the database identifier (or business key in transient state)."]}),e.jsxs("li",{children:["🔹 For ",e.jsx("code",{children:"@GeneratedValue(strategy = SEQUENCE)"}),", consider ",e.jsx("code",{children:"@SequenceGenerator"})," to customize sequence name and allocation size."]}),e.jsxs("li",{children:["🔹 Use ",e.jsx("code",{children:"@DynamicInsert"})," and ",e.jsx("code",{children:"@DynamicUpdate"})," only when you have many columns and partial updates matter; otherwise they add overhead."]}),e.jsxs("li",{children:["🔹 For large text fields, use ",e.jsx("code",{children:"@Lob"})," (CLOB) – maps to TEXT or CLOB database type."]})]}),e.jsx("h3",{className:"text-xl font-bold mt-6 mb-3 flex items-center gap-2",children:"⚠️ Common Pitfalls (Beginners)"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["❌ Forgetting ",e.jsx("code",{children:"@Entity"})," → Hibernate ignores the class, no table created."]}),e.jsxs("li",{children:["❌ Using ",e.jsx("code",{children:"@Id"})," on a field but also having setters that break identity contract."]}),e.jsxs("li",{children:["❌ Mutable fields in ",e.jsx("code",{children:"equals/hashCode"})," (e.g., using name) – can break Set/HashMap behavior."]}),e.jsxs("li",{children:["❌ Not specifying ",e.jsx("code",{children:"@Column(insertable=false, updatable=false)"})," for derived or read-only columns."]}),e.jsxs("li",{children:["❌ Using ",e.jsx("code",{children:"Date"})," without ",e.jsx("code",{children:"@Temporal"})," – Hibernate defaults to TIMESTAMP, perhaps not what you want."]}),e.jsxs("li",{children:["❌ Using primitive types like ",e.jsx("code",{children:"int"})," for nullable columns – use ",e.jsx("code",{children:"Integer"})," to represent null."]})]}),e.jsx("div",{className:"mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg text-center",children:e.jsx("p",{className:"text-blue-600 dark:text-blue-400 font-semibold",children:"✅ Mini Checklist: Every entity needs @Entity, @Id, a no-arg constructor. Decide access type (field/property). Map columns explicitly if names differ. Choose ID generation strategy wisely."})})]}),e.jsxs("div",{className:"my-12 p-5 bg-gray-100 dark:bg-gray-800/60 rounded-xl border border-gray-300 dark:border-gray-600 text-center transition-all hover:scale-[1.01]",children:[e.jsx("h4",{className:"font-mono text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2",children:"🔎 Think about ..."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["You are designing a library system for ",e.jsx("strong",{children:"Barrackpore Public Library"}),". The table ",e.jsx("code",{children:"books"})," has columns: ",e.jsx("code",{children:"book_id"})," (auto-increment), ",e.jsx("code",{children:"title"})," (max 200), ",e.jsx("code",{children:"isbn"})," (unique, nullable), ",e.jsx("code",{children:"published_date"})," (DATE). How would you map this entity? Which ID generation? Which ",e.jsx("code",{children:"@Column"})," attributes?"]})]}),e.jsx(f,{title:"Entity Mapping - Expert FAQs",questions:w}),e.jsx("div",{className:"mt-12",children:e.jsx(v,{note:"📚 Entity mapping is the first step students often mess up. I tell them: 'An entity is just a Java class that looks like a table.' Always start by drawing the table schema on paper, then map field-by-field. And never skip @Id – Hibernate needs a primary key to track objects. For Barrackpore School's student records, try mapping Student with roll number as @Id – that's a natural key. But be careful: natural keys can change; often a synthetic ID is safer."})})]})]})};export{H as default};
