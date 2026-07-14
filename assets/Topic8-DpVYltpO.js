import{r as s,j as e}from"./index-CK4WUhpx.js";import{c as a}from"./clsx-B-dksMZM.js";import{F as f}from"./FAQTemplate-omkku7A3.js";import{T as v}from"./TeacherSukantaHui-CAKlTT30.js";import{J as c}from"./JavaFileLoader-FEFyuOfA.js";import"./github-BjzfPmy3.js";import"./createLucideIcon--yS5sPo-.js";import"./git-branch-YOW4_iC7.js";import"./JavaCodeBlock-DceQA7l-.js";import"./prism-Bgw5yzRN.js";import"./browser-2mk3wPy-.js";import"./prism-java-BwO6k4I_.js";const j=`// FirstLevelCache.java\r
import org.hibernate.Session;\r
import org.hibernate.SessionFactory;\r
\r
public class FirstLevelCache {\r
    public static void main(String[] args) {\r
        SessionFactory factory = SessionFactoryProvider.getFactory();\r
        Session session = factory.openSession();\r
        \r
        // First get() executes SQL\r
        Student s1 = session.get(Student.class, 1L);\r
        \r
        // Second get() within same session – no SQL, cached\r
        Student s2 = session.get(Student.class, 1L);\r
        \r
        System.out.println(s1 == s2); // true (same object identity)\r
        \r
        // Clear the cache\r
        session.clear(); // or session.evict(s1)\r
        Student s3 = session.get(Student.class, 1L); // SQL again\r
        \r
        session.close();\r
    }\r
}`,S=`// SecondLevelCacheCfg.java\r
import org.hibernate.annotations.Cache;\r
import org.hibernate.annotations.CacheConcurrencyStrategy;\r
import javax.persistence.*;\r
\r
@Entity\r
@Cacheable  // JPA annotation to indicate entity is cacheable\r
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE) // Hibernate specific\r
public class Student {\r
    @Id @GeneratedValue\r
    private Long id;\r
    private String name;\r
    // ...\r
}\r
\r
// Usage in code: second-level caches across sessions\r
Session session1 = factory.openSession();\r
Student s1 = session1.get(Student.class, 1L); // SQL\r
session1.close();\r
\r
Session session2 = factory.openSession();\r
Student s2 = session2.get(Student.class, 1L); // From cache, no SQL\r
session2.close();`,C=`// QueryCache.java\r
import org.hibernate.Session;\r
import org.hibernate.query.Query;\r
import java.util.List;\r
\r
public class QueryCacheDemo {\r
    public void demo(Session session) {\r
        // Enable query cache (requires second-level cache enabled)\r
        Query<Student> query = session.createQuery("FROM Student s WHERE s.city = :city", Student.class);\r
        query.setParameter("city", "Barrackpore");\r
        query.setCacheable(true);  // cache this query\r
        query.setCacheRegion("student.byCity"); // optional named region\r
        List<Student> result = query.list();\r
        \r
        // Second execution with same parameters\r
        Query<Student> query2 = session.createQuery("FROM Student s WHERE s.city = :city", Student.class);\r
        query2.setParameter("city", "Barrackpore");\r
        query2.setCacheable(true);\r
        List<Student> result2 = query2.list(); // From query cache (IDs), then entities from 2LC\r
    }\r
}`,w=`// Cache settings in hibernate.cfg.xml (shown as Java comment)\r
/*\r
<hibernate-configuration>\r
  <session-factory>\r
    <!-- Enable second-level cache -->\r
    <property name="hibernate.cache.use_second_level_cache">true</property>\r
    <property name="hibernate.cache.region.factory_class">\r
        org.hibernate.cache.ehcache.EhCacheRegionFactory\r
    </property>\r
    <!-- Enable query cache -->\r
    <property name="hibernate.cache.use_query_cache">true</property>\r
    <!-- Stats for monitoring -->\r
    <property name="hibernate.generate_statistics">true</property>\r
  </session-factory>\r
</hibernate-configuration>\r
*/`,L=`<?xml version="1.0" encoding="UTF-8"?>\r
<ehcache xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\r
         xsi:noNamespaceSchemaLocation="http://ehcache.org/ehcache.xsd">\r
    \r
    <!-- Default cache configuration -->\r
    <defaultCache\r
        maxEntriesLocalHeap="10000"\r
        eternal="false"\r
        timeToIdleSeconds="300"\r
        timeToLiveSeconds="600"\r
        overflowToDisk="false"\r
        statistics="true"/>\r
    \r
    <!-- Specific cache regions -->\r
    <cache name="com.school.model.Student"\r
           maxEntriesLocalHeap="2000"\r
           eternal="false"\r
           timeToLiveSeconds="3600"/>\r
    \r
    <cache name="student.byCity"\r
           maxEntriesLocalHeap="500"\r
           eternal="false"\r
           timeToLiveSeconds="1800"/>\r
</ehcache>`,N=[{question:"What is the first-level cache in Hibernate?",shortAnswer:"A session-scoped cache that stores entities retrieved during a session; enabled by default.",explanation:"It ensures that within the same session, the same entity is not loaded twice. It is mandatory and cannot be disabled.",hint:"Try loading the same entity twice in one session – watch SQL count.",level:"basic",codeExample:`session.get(Student.class, 1L); // SQL
session.get(Student.class, 1L); // from cache`},{question:"How do you enable second-level cache?",shortAnswer:"Set hibernate.cache.use_second_level_cache=true, specify cache region factory, and annotate entities with @Cacheable.",explanation:"Also need a cache provider like Ehcache in classpath. Optionally use @Cache to set concurrency strategy.",hint:"Don't forget to add ehcache.xml configuration file.",level:"moderate",codeExample:"@Entity @Cacheable @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)"},{question:"When would you use READ_WRITE vs READ_ONLY cache concurrency?",shortAnswer:"READ_ONLY for immutable entities (no updates); READ_WRITE for entities that are occasionally updated.",explanation:"READ_ONLY has no overhead but throws exception on update. READ_WRITE uses soft locks for transaction isolation.",hint:"Use READ_ONLY for reference data like country codes.",level:"expert",codeExample:"@Cache(usage = CacheConcurrencyStrategy.READ_ONLY)"},{question:"Does second-level cache work across multiple Sessions?",shortAnswer:"Yes, that's its purpose – shared across sessions in the same SessionFactory.",explanation:"When one session loads an entity, subsequent sessions can retrieve it from the cache without hitting the database.",hint:"Close a session, open a new one – see if SQL repeats.",level:"moderate",codeExample:`Session s1 = factory.openSession(); s1.get(...); s1.close();
Session s2 = factory.openSession(); s2.get(...); // from 2LC`},{question:"What is the purpose of query cache?",shortAnswer:"Caches the result set (identifiers) of queries, avoiding repeated query execution.",explanation:"Query cache stores the IDs of returned entities. When query repeats, it retrieves IDs from cache then fetches entities from second-level cache.",hint:"Query cache alone without 2LC is ineffective – it only caches IDs.",level:"moderate",codeExample:"query.setCacheable(true);"},{question:"How do you invalidate second-level cache programmatically?",shortAnswer:"Use sessionFactory.getCache().evictEntity(Student.class, id) or evictAll().",explanation:"Useful after bulk updates or external database changes. You can evict specific entities, collections, or entire regions.",hint:"Call this after native SQL updates.",level:"expert",codeExample:"sessionFactory.getCache().evictEntityRegion(Student.class);"},{question:"What is the default cache concurrency strategy?",shortAnswer:"None – you must specify it with @Cache, otherwise entity is not cached even if @Cacheable is present.",explanation:"JPA's @Cacheable enables caching but Hibernate needs @Cache with usage strategy to actually store data.",hint:"Missing @Cache causes no second-level caching even with properties set.",level:"expert",codeExample:`@Cacheable
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)`},{question:"How does Hibernate handle updates to cached entities?",shortAnswer:"When an entity is updated, Hibernate evicts it from second-level cache (or updates depending on strategy).",explanation:"For READ_WRITE, the cache entry is updated. For others, it's invalidated. Query cache is also invalidated if any entity in its result set changes.",hint:"Check if query cache still returns stale data after update – it should be invalidated.",level:"expert",codeExample:"// update automatically evicts/updates 2LC"},{question:"Can you use query cache without second-level cache?",shortAnswer:"Yes, but it's not recommended – it caches only IDs, leading to many individual selects.",explanation:"Without 2LC, the IDs are cached, but each entity still requires a database hit. You enable both for maximum benefit.",hint:"Enable both or neither.",level:"moderate",codeExample:"without 2LC: cache hits IDs but then N queries for each entity."},{question:"What are the limitations of first-level cache?",shortAnswer:"It's session-scoped, not shared; cleared when session closes; can cause memory issues if too many objects loaded.",explanation:"It's automatic but not suitable for cross-session sharing. Also, it doesn't cache queries or collections by default.",hint:"Use it for repeat reads in same transaction, not across requests.",level:"basic",codeExample:"Session ends → cache lost."}],H=()=>{const[t,x]=s.useState({intro:!1,firstLevel:!1,secondLevel:!1,queryCache:!1,config:!1,comparison:!1,checklist:!1}),b=(r,i)=>{r.forEach(o=>{o.isIntersecting&&x(d=>({...d,[i]:!0}))})},n=(r,i)=>{if(!r.current)return;const o=new IntersectionObserver(d=>b(d,i),{threshold:.2,rootMargin:"0px 0px -50px 0px"});return o.observe(r.current),o},l=s.useRef(null),h=s.useRef(null),u=s.useRef(null),m=s.useRef(null),y=s.useRef(null),g=s.useRef(null),p=s.useRef(null);return s.useEffect(()=>{const r=[n(l,"intro"),n(h,"firstLevel"),n(u,"secondLevel"),n(m,"queryCache"),n(y,"config"),n(g,"comparison"),n(p,"checklist")];return()=>r.forEach(i=>i&&i.disconnect())},[]),e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 font-sans leading-relaxed",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16",children:[e.jsxs("div",{ref:l,className:a("text-center mb-16 transition-all duration-700 ease-out",t.intro?"animate-fadeSlideUp":"opacity-0 translate-y-8"),children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400",children:"Caching in Hibernate"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"First-Level, Second-Level, and Query Cache – Supercharge Your Performance"}),e.jsxs("div",{className:"mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm",children:[e.jsx("span",{className:"font-mono",children:"⚡"})," Session Cache · Shared Cache · Query Result Cache"]})]}),e.jsxs("div",{ref:l,className:a("mb-16 bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl",t.intro?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.1s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"🚀"})," Why Cache?"]}),e.jsx("p",{className:"mb-3",children:"Database access is expensive. Caching reduces the number of SQL queries sent to the database, dramatically improving application performance. Hibernate provides three levels of caching:"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 mt-4",children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-3 rounded text-center",children:[e.jsx("strong",{children:"📦 First-Level Cache"}),e.jsx("br",{}),"Session-scoped, mandatory"]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-3 rounded text-center",children:[e.jsx("strong",{children:"🗄️ Second-Level Cache"}),e.jsx("br",{}),"SessionFactory-scoped, optional"]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-3 rounded text-center",children:[e.jsx("strong",{children:"🔍 Query Cache"}),e.jsx("br",{}),"Caches query results + identifiers"]})]}),e.jsx("div",{className:"bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-xl mt-4 border-l-4 border-cyan-500",children:e.jsxs("p",{className:"italic",children:["✨ Real-world: At ",e.jsx("strong",{children:"Shyamnagar College"}),", the student list is requested hundreds of times per minute. With second-level cache, the database is hit only once every minute. Response time drops from 200ms to 5ms."]})})]}),e.jsxs("div",{ref:h,className:a("mb-16",t.firstLevel?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"📦 First-Level Cache (Session Cache)"}),e.jsx("p",{className:"mb-2",children:"Enabled by default, cannot be disabled. Lives within a single Session. Automatically caches entities retrieved during that session."}),e.jsx(c,{fileModule:j,title:"FirstLevelCache.java - Same entity, same session",highlightLines:[9,10,11,12]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mt-3 text-sm",children:[e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-2 rounded",children:["✅ ",e.jsx("strong",{children:"Pros:"})," Guarantee of repeatable read, no configuration."]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-2 rounded",children:["❌ ",e.jsx("strong",{children:"Limitation:"})," Cleared when session closes, not shared."]})]})]}),e.jsxs("div",{ref:u,className:a("mb-16",t.secondLevel?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🗄️ Second-Level Cache (SessionFactory Cache)"}),e.jsx("p",{className:"mb-2",children:"Shared across sessions. Must be explicitly configured with a cache provider (Ehcache, Hazelcast, Infinispan). Entities must be annotated with @Cacheable."}),e.jsx(c,{fileModule:S,title:"SecondLevelCacheCfg.java - Enabling and using second-level cache",highlightLines:[5,6,7,8,9,10,11]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"🔧 Cache concurrency strategies: READ_ONLY, NONSTRICT_READ_WRITE, READ_WRITE, TRANSACTIONAL."})]}),e.jsxs("div",{ref:m,className:a("mb-16",t.queryCache?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.4s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"🔍 Query Cache"}),e.jsx("p",{className:"mb-2",children:"Caches the result set of HQL/JPQL queries (store identifiers). Works together with second-level cache. Must be enabled separately."}),e.jsx(c,{fileModule:C,title:"QueryCache.java - Caching query results",highlightLines:[8,9,10,11,12,13]}),e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded mt-3 text-sm",children:[e.jsx("strong",{children:"⚠️ Warning:"})," Query cache invalidated when any entity in the result set changes. Use only for read-mostly data."]})]}),e.jsxs("div",{ref:y,className:a("mb-16",t.config?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.5s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3",children:"⚙️ Configuration & Ehcache Setup"}),e.jsx(c,{fileModule:w,title:"hibernate.cfg.xml - Cache properties",highlightLines:[8,9,10,11,12,13,14]}),e.jsx(c,{fileModule:L,title:"ehcache.xml - Cache region configuration",highlightLines:[5,6,7,8,9,10]})]}),e.jsxs("div",{ref:g,className:a("mb-16 overflow-x-auto",t.comparison?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.6s"},children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"📊 Cache Comparison"}),e.jsxs("table",{className:"min-w-full text-sm bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 text-left",children:"Feature"}),e.jsx("th",{className:"p-3 text-left",children:"First-Level"}),e.jsx("th",{className:"p-3 text-left",children:"Second-Level"}),e.jsx("th",{className:"p-3 text-left",children:"Query Cache"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-600",children:[e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50",children:[e.jsx("td",{className:"p-3",children:"Scope"}),e.jsx("td",{children:"Session"}),e.jsx("td",{children:"SessionFactory"}),e.jsx("td",{children:"SessionFactory"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50",children:[e.jsx("td",{className:"p-3",children:"Mandatory"}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"No"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50",children:[e.jsx("td",{className:"p-3",children:"Caches"}),e.jsx("td",{children:"Entities"}),e.jsx("td",{children:"Entities, Collections"}),e.jsx("td",{children:"Query results (IDs)"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50",children:[e.jsx("td",{className:"p-3",children:"Cache provider"}),e.jsx("td",{children:"Hibernate internal"}),e.jsx("td",{children:"Ehcache, Hazelcast, etc."}),e.jsx("td",{children:"Same as 2LC"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50",children:[e.jsx("td",{className:"p-3",children:"Eviction"}),e.jsx("td",{children:"session.clear() / evict()"}),e.jsx("td",{children:"Cache region manager"}),e.jsx("td",{children:"Automatic on update"})]})]})]})]}),e.jsxs("div",{ref:p,className:a("mb-12 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-8 border-amber-500",t.checklist?"animate-fadeSlideUp":"opacity-0 translate-y-8"),style:{animationDelay:"0.7s"},children:[e.jsx("h3",{className:"text-xl font-bold mb-3 flex items-center gap-2",children:"💡 Tips & Tricks (Professional)"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"First-level cache is automatic"})," – use it to avoid repeated queries in same transaction."]}),e.jsxs("li",{children:["🔹 Enable second-level cache ",e.jsx("strong",{children:"only for read-mostly entities"})," (reference data, lookup tables). Avoid caching frequently updated entities."]}),e.jsxs("li",{children:["🔹 Use ",e.jsx("code",{children:"READ_WRITE"})," strategy for entities that are updated but still benefit from caching; ",e.jsx("code",{children:"READ_ONLY"})," for immutable data."]}),e.jsx("li",{children:"🔹 Query cache works best for queries that are executed with same parameters and whose tables change rarely."}),e.jsxs("li",{children:["🔹 Monitor cache hit rates using ",e.jsx("code",{children:"Statistics"})," API. If hit rate is low, caching may hurt performance."]})]}),e.jsx("h3",{className:"text-xl font-bold mt-6 mb-3 flex items-center gap-2",children:"⚠️ Common Pitfalls (Beginners)"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["❌ Expecting second-level cache to work without ",e.jsx("code",{children:"@Cacheable"})," or configuration."]}),e.jsx("li",{children:"❌ Using query cache without second-level cache – only caches IDs, then hits DB for each entity anyway."}),e.jsx("li",{children:"❌ Caching entities that are frequently updated – cache invalidation overhead."}),e.jsxs("li",{children:["❌ Forgetting to define ",e.jsx("code",{children:"ehcache.xml"})," or missing cache provider library."]}),e.jsxs("li",{children:["❌ Overriding ",e.jsx("code",{children:"equals/hashCode"})," incorrectly causing cache misses."]})]}),e.jsx("div",{className:"mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg text-center",children:e.jsx("p",{className:"text-blue-600 dark:text-blue-400 font-semibold",children:"✅ Mini Checklist: Ensure cache provider is in classpath. Annotate entities with @Cacheable and @Cache. Enable second-level cache in cfg.xml. For query cache, call setCacheable(true). Use read-only for reference data."})})]}),e.jsxs("div",{className:"my-12 p-5 bg-gray-100 dark:bg-gray-800/60 rounded-xl border border-gray-300 dark:border-gray-600 text-center transition-all hover:scale-[1.01]",children:[e.jsx("h4",{className:"font-mono text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2",children:"🔎 Think about ..."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Your school management system has a ",e.jsx("code",{children:"Student"})," entity that is updated rarely (address changes once a year) and queried thousands of times a day. Which caching levels would you apply? What about ",e.jsx("code",{children:"Attendance"})," recorded daily – should it be cached? Why?"]})]}),e.jsx(f,{title:"Hibernate Caching - Expert FAQs",questions:N}),e.jsx("div",{className:"mt-12",children:e.jsx(v,{note:"💾 Caching is a double-edged sword. I've seen developers enable second-level cache for everything then wonder why updates don't show. Rule of thumb: 'read more, write less' data benefits most. Demo: show SQL logs with 1st-level cache (2 gets -> 1 SQL). Then show 2nd-level across sessions. Then show query cache on a complex report. Students love seeing the performance jump!"})})]})]})};export{H as default};
