import{r as i,j as e}from"./index-C0mc_94R.js";import{J as a}from"./JavaFileLoader-4-ehjeT5.js";import{F as o}from"./FAQTemplate-B3BZY6n9.js";import{T as l}from"./TeacherSukantaHui-BgeyJkit.js";import"./JavaCodeBlock-DVZM98Yl.js";import"./prism-Dde13G4z.js";import"./browser-BC2oEfF8.js";import"./prism-java-BwO6k4I_.js";import"./clsx-B-dksMZM.js";import"./git-branch-C92UGbmu.js";const c=`package com.example.rest;\r
\r
import javax.ws.rs.GET;\r
import javax.ws.rs.Path;\r
import javax.ws.rs.Produces;\r
import javax.ws.rs.core.MediaType;\r
\r
@Path("/hello")\r
public class HelloWorldResource {\r
    @GET\r
    @Produces(MediaType.TEXT_PLAIN)\r
    public String sayHello() {\r
        return "Hello, RESTful world!";\r
    }\r
}`,d=`package com.example.rest;\r
\r
import javax.ws.rs.*;\r
import javax.ws.rs.core.*;\r
import java.util.*;\r
import java.util.concurrent.ConcurrentHashMap;\r
\r
@Path("/users")\r
@Produces(MediaType.APPLICATION_JSON)\r
@Consumes(MediaType.APPLICATION_JSON)\r
public class UserResource {\r
    private static Map<Integer, User> users = new ConcurrentHashMap<>();\r
    private static int idCounter = 1;\r
\r
    @GET\r
    public List<User> getAll() {\r
        return new ArrayList<>(users.values());\r
    }\r
\r
    @GET\r
    @Path("/{id}")\r
    public Response getById(@PathParam("id") int id) {\r
        User user = users.get(id);\r
        if (user == null) {\r
            return Response.status(Response.Status.NOT_FOUND).build();\r
        }\r
        return Response.ok(user).build();\r
    }\r
\r
    @POST\r
    public Response create(User user) {\r
        user.setId(idCounter++);\r
        users.put(user.getId(), user);\r
        return Response.status(Response.Status.CREATED).entity(user).build();\r
    }\r
\r
    @PUT\r
    @Path("/{id}")\r
    public Response update(@PathParam("id") int id, User updated) {\r
        if (!users.containsKey(id)) {\r
            return Response.status(Response.Status.NOT_FOUND).build();\r
        }\r
        updated.setId(id);\r
        users.put(id, updated);\r
        return Response.ok(updated).build();\r
    }\r
\r
    @DELETE\r
    @Path("/{id}")\r
    public Response delete(@PathParam("id") int id) {\r
        if (users.remove(id) == null) {\r
            return Response.status(Response.Status.NOT_FOUND).build();\r
        }\r
        return Response.noContent().build();\r
    }\r
}\r
\r
// Simple User model\r
class User {\r
    private int id;\r
    private String name;\r
    // getters/setters omitted for brevity\r
    public int getId() { return id; }\r
    public void setId(int id) { this.id = id; }\r
    public String getName() { return name; }\r
    public void setName(String name) { this.name = name; }\r
}`,p=`package com.example.rest;\r
\r
import org.glassfish.jersey.server.ResourceConfig;\r
import javax.ws.rs.ApplicationPath;\r
\r
@ApplicationPath("/api")\r
public class ApplicationConfig extends ResourceConfig {\r
    public ApplicationConfig() {\r
        packages("com.example.rest");\r
        // or register(HelloWorldResource.class, UserResource.class);\r
    }\r
}`,x=`package com.example.rest;\r
\r
import javax.ws.rs.*;\r
import javax.ws.rs.core.MediaType;\r
\r
@Path("/calc")\r
public class PathParamExample {\r
    @GET\r
    @Path("/add/{a}/{b}")\r
    @Produces(MediaType.TEXT_PLAIN)\r
    public int add(@PathParam("a") int a, @PathParam("b") int b) {\r
        return a + b;\r
    }\r
\r
    @GET\r
    @Path("/greet")\r
    @Produces(MediaType.TEXT_PLAIN)\r
    public String greet(@QueryParam("name") String name) {\r
        return "Hello " + (name != null ? name : "Guest");\r
    }\r
}`,m=`package com.example.rest;\r
\r
import javax.ws.rs.*;\r
import javax.ws.rs.core.MediaType;\r
\r
@Path("/feedback")\r
public class FormParamExample {\r
    @POST\r
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)\r
    @Produces(MediaType.TEXT_PLAIN)\r
    public String submit(@FormParam("email") String email,\r
                         @FormParam("message") String message) {\r
        return "Received from " + email + ": " + message;\r
    }\r
}`,u=`<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"\r
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\r
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee \r
         http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"\r
         version="4.0">\r
\r
    <servlet>\r
        <servlet-name>JerseyServlet</servlet-name>\r
        <servlet-class>org.glassfish.jersey.servlet.ServletContainer</servlet-class>\r
        <init-param>\r
            <param-name>jersey.config.server.provider.packages</param-name>\r
            <param-value>com.example.rest</param-value>\r
        </init-param>\r
        <load-on-startup>1</load-on-startup>\r
    </servlet>\r
    <servlet-mapping>\r
        <servlet-name>JerseyServlet</servlet-name>\r
        <url-pattern>/api/*</url-pattern>\r
    </servlet-mapping>\r
</web-app>`,h=[{question:"What does JAX‑RS stand for?",shortAnswer:"Java API for RESTful Web Services",explanation:"A specification for building REST APIs in Java using annotations.",level:"basic"},{question:"What is the most common implementation of JAX‑RS?",shortAnswer:"Jersey (reference implementation)",explanation:"Other implementations include RESTEasy, Apache CXF.",level:"basic"},{question:"Which annotation marks a class as a REST resource?",shortAnswer:"@Path",explanation:"Defines the base URI for the resource.",level:"basic",codeExample:'@Path("/books") public class BookResource { ... }'},{question:"Which annotation specifies the HTTP method for a method?",shortAnswer:"@GET, @POST, @PUT, @DELETE, etc.",explanation:"Correspond to HTTP verbs.",level:"basic"},{question:"How do you extract a variable from the URI path?",shortAnswer:"@PathParam",explanation:'Example: @Path("/users/{id}") public User get(@PathParam("id") int id)',level:"intermediate"},{question:"What annotation extracts query parameters?",shortAnswer:"@QueryParam",explanation:'e.g., /search?q=jersey -> @QueryParam("q") String query',level:"intermediate"},{question:"What is the purpose of @Produces?",shortAnswer:"Specifies the media type(s) the method can return.",explanation:"Common values: MediaType.APPLICATION_JSON, TEXT_PLAIN.",level:"basic"},{question:"What does @Consumes do?",shortAnswer:"Specifies the media type the method can accept (request body).",explanation:"e.g., @Consumes(MediaType.APPLICATION_JSON)",level:"basic"},{question:"How do you return a custom HTTP status code?",shortAnswer:"Use javax.ws.rs.core.Response.",explanation:"Response.status(Status.CREATED).entity(obj).build()",level:"intermediate"},{question:"What dependency is needed for JSON support in Jersey?",shortAnswer:"jersey-media-json-jackson (or jersey-media-moxy)",explanation:"Add to pom.xml or classpath.",level:"advanced"}],R=()=>{const s=i.useRef([]);return i.useEffect(()=>{const r=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&(n.target.classList.add("animate-slide-up"),r.unobserve(n.target))})},{threshold:.1});return s.current.forEach(t=>{t&&r.observe(t)}),()=>r.disconnect()},[]),e.jsx("div",{className:"dark min-h-screen bg-gray-950 text-gray-100 font-sans leading-relaxed p-6 md:p-10",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("header",{className:"text-center space-y-4 animate-slide-up",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent",children:"RESTful Web Services with JAX-RS (Jersey)"}),e.jsx("p",{className:"text-lg text-gray-300 max-w-2xl mx-auto",children:"Building REST APIs using Java API for RESTful Web Services – annotations, resources, HTTP methods, and JSON support."})]}),e.jsxs("section",{ref:r=>s.current[0]=r,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-purple-400 flex items-center gap-2",children:[e.jsx("span",{children:"🌐"})," What is JAX‑RS and Jersey?"]}),e.jsxs("p",{className:"mt-3 text-gray-300",children:[e.jsx("strong",{children:"JAX‑RS"})," (Java API for RESTful Web Services) is a Java specification for building RESTful web services using annotations. ",e.jsx("strong",{children:"Jersey"})," is the reference implementation (also the most popular). It allows you to create REST APIs with POJOs and minimal configuration."]}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Key annotations: ",e.jsx("code",{children:"@Path"}),", ",e.jsx("code",{children:"@GET"}),", ",e.jsx("code",{children:"@POST"}),", ",e.jsx("code",{children:"@PUT"}),", ",e.jsx("code",{children:"@DELETE"}),", ",e.jsx("code",{children:"@PathParam"}),", ",e.jsx("code",{children:"@QueryParam"}),", ",e.jsx("code",{children:"@Produces"}),", ",e.jsx("code",{children:"@Consumes"}),"."]}),e.jsx("div",{className:"mt-4 p-4 bg-gray-800/50 rounded-xl border-l-4 border-purple-500",children:e.jsxs("p",{className:"text-sm italic text-gray-300",children:["📘 ",e.jsx("strong",{children:"Real‑world context:"})," The Barrackpore High School wants a mobile app to fetch student grades. Instead of JSPs returning HTML, they create a REST API (Jersey) that returns JSON. The mobile app then displays the data. This decouples backend from frontend."]})})]}),e.jsxs("section",{ref:r=>s.current[1]=r,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"🔄 REST API Request Flow"}),e.jsx("div",{className:"mt-6 flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 750 180",className:"w-full max-w-4xl h-auto",children:[e.jsx("rect",{x:"20",y:"30",width:"120",height:"50",rx:"8",fill:"#1e293b",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("text",{x:"80",y:"55",textAnchor:"middle",fill:"#d8b4fe",fontSize:"13",children:"Client"}),e.jsx("text",{x:"80",y:"72",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"(React/Postman)"}),e.jsx("rect",{x:"190",y:"30",width:"160",height:"50",rx:"8",fill:"#1e293b",stroke:"#a855f7",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"270",y:"50",textAnchor:"middle",fill:"#d8b4fe",fontSize:"13",children:"Jersey Servlet"}),e.jsx("text",{x:"270",y:"67",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"/api/*"}),e.jsx("rect",{x:"400",y:"30",width:"160",height:"50",rx:"8",fill:"#1e293b",stroke:"#a855f7",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"2s",begin:"0.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"480",y:"50",textAnchor:"middle",fill:"#d8b4fe",fontSize:"13",children:"Resource Class"}),e.jsx("text",{x:"480",y:"67",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:'@Path("/users")'}),e.jsx("rect",{x:"610",y:"30",width:"110",height:"50",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"665",y:"55",textAnchor:"middle",fill:"#86efac",fontSize:"13",children:"JSON Response"}),e.jsx("line",{x1:"140",y1:"55",x2:"188",y2:"55",stroke:"#a855f7",strokeWidth:"2",markerEnd:"url(#arrRest)"}),e.jsx("line",{x1:"350",y1:"55",x2:"398",y2:"55",stroke:"#a855f7",strokeWidth:"2",markerEnd:"url(#arrRest)"}),e.jsx("line",{x1:"560",y1:"55",x2:"608",y2:"55",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrRest)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrRest",markerWidth:"8",markerHeight:"8",refX:"6",refY:"4",orient:"auto",children:e.jsx("polygon",{points:"0 0, 8 4, 0 8",fill:"#a855f7"})})}),e.jsx("text",{x:"270",y:"115",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"HTTP Request (GET /api/users)"}),e.jsx("text",{x:"480",y:"115",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"Method returns Java Object"}),e.jsx("text",{x:"665",y:"115",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"JSON/XML"})]})})]}),e.jsxs("section",{ref:r=>s.current[2]=r,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"🏷️ Hello World Resource"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["A resource class is a plain Java class annotated with ",e.jsx("code",{children:"@Path"}),". Methods use HTTP method annotations."]}),e.jsx(a,{fileModule:c,title:"HelloWorldResource.java – Basic REST Endpoint",highlightLines:[4,8,10]}),e.jsx("div",{className:"mt-4 p-3 bg-purple-950/30 border-l-4 border-purple-500 rounded",children:e.jsxs("p",{className:"text-sm",children:["💡 ",e.jsx("strong",{children:"Tip:"})," Use ",e.jsx("code",{children:"@Produces(MediaType.TEXT_PLAIN)"})," to specify response content type."]})})]}),e.jsxs("section",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"📋 User Resource – CRUD Example"}),e.jsx("p",{className:"mt-3 text-gray-300",children:"Example of a REST resource handling users with in‑memory store."}),e.jsx(a,{fileModule:d,title:"UserResource.java – GET, POST, PUT, DELETE",highlightLines:[4,8,12,16,20]})]}),e.jsxs("section",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"⚙️ Registering Resources – ApplicationConfig"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Extend ",e.jsx("code",{children:"Application"})," or use ",e.jsx("code",{children:"ResourceConfig"})," to register resource classes. Optionally configure package scanning."]}),e.jsx(a,{fileModule:p,title:"ApplicationConfig.java – Jersey Application",highlightLines:[5,6]}),e.jsx("div",{className:"mt-3 p-3 bg-gray-800 rounded-lg",children:e.jsxs("p",{className:"text-sm font-mono",children:["Or in web.xml: map Jersey servlet to ",e.jsx("code",{children:"/api/*"}),"."]})})]}),e.jsxs("section",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"🔍 @PathParam & @QueryParam"}),e.jsx("p",{className:"mt-3 text-gray-300",children:"Extract variables from URL path or query string."}),e.jsx(a,{fileModule:x,title:"PathParamExample.java – Path and Query Parameters",highlightLines:[8,12,16]})]}),e.jsxs("section",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"📝 @FormParam for Form Submissions"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Handle ",e.jsx("code",{children:"application/x-www-form-urlencoded"})," data."]}),e.jsx(a,{fileModule:m,title:"FormParamExample.java – POST Form Data",highlightLines:[7,8,9]})]}),e.jsxs("section",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"📦 JSON Support with Jackson"}),e.jsx("p",{className:"mt-3 text-gray-300",children:"Add Jackson (or MOXy) dependency to automatically convert Java objects to/from JSON. Jersey will detect the library."}),e.jsxs("div",{className:"mt-3 p-3 bg-gray-800 rounded-lg font-mono text-sm",children:["// Maven dependency",e.jsx("br",{}),"<dependency>",e.jsx("br",{}),"  <groupId>org.glassfish.jersey.media</groupId>",e.jsx("br",{}),"  <artifactId>jersey-media-json-jackson</artifactId>",e.jsx("br",{}),"</dependency>"]}),e.jsxs("p",{className:"mt-2 text-gray-300",children:["Then just return POJOs as ",e.jsx("code",{children:"@Produces(MediaType.APPLICATION_JSON)"}),"."]})]}),e.jsxs("section",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"📄 web.xml Jersey Servlet Mapping"}),e.jsx(a,{fileModule:u,title:"web.xml – Jersey Servlet Configuration",highlightLines:[6,7,8,12]})]}),e.jsxs("section",{ref:r=>s.current[3]=r,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to register resources"})," – either in ApplicationConfig or via package scanning."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not adding Jackson dependency"})," – results in 500 error or no JSON support."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mixing @PathParam and @QueryParam incorrectly"})," – ensure path matches."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Returning non‑serializable objects"})," – Jersey will fail to marshal to JSON."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not setting @Consumes/@Produces"})," – can lead to content negotiation issues."]})]})]}),e.jsxs("section",{ref:r=>s.current[4]=r,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-decimal list-inside space-y-2 text-gray-300",children:[e.jsxs("li",{children:["Use nouns for resource names (e.g., ",e.jsx("code",{children:"/students"}),", not ",e.jsx("code",{children:"/getStudent"}),")."]}),e.jsxs("li",{children:["Use appropriate HTTP status codes via ",e.jsx("code",{children:"Response"})," class."]}),e.jsxs("li",{children:["Prefer ",e.jsx("code",{children:"@Produces(MediaType.APPLICATION_JSON)"})," for modern APIs."]}),e.jsx("li",{children:"Validate input using Bean Validation (JSR 303)."}),e.jsx("li",{children:"Separate resource classes logically (e.g., UserResource, ProductResource)."}),e.jsx("li",{children:"Document your API with OpenAPI/Swagger annotations."})]})]}),e.jsxs("section",{ref:r=>s.current[5]=r,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"📋 Mini Checklist"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-4",children:["✅ Add Jersey dependencies (jersey-container-servlet, jersey-media-json-jackson)","✅ Create resource class with @Path","✅ Annotate methods with @GET, @POST, etc.","✅ Use @Produces and @Consumes","✅ Register resources via Application subclass or web.xml","✅ Test with Postman or curl","✅ Return Response objects for status codes","✅ Use path/query parameters correctly","✅ Handle exceptions with ExceptionMapper","✅ Document endpoints"].map((r,t)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-200 text-sm",children:[e.jsx("span",{className:"text-purple-400",children:"✓"})," ",r]},t))})]}),e.jsxs("section",{ref:r=>s.current[6]=r,className:"bg-gray-900/50 rounded-2xl p-6 border border-purple-500/30",children:[e.jsx("h2",{className:"text-xl font-semibold text-purple-400",children:"🧠 Hints – Think Like a Pro"}),e.jsxs("ul",{className:"space-y-2 text-gray-300 italic",children:[e.jsxs("li",{children:["🔍 ",e.jsx("strong",{children:"Observe carefully:"})," Use browser or Postman to call your API and inspect the JSON response."]}),e.jsxs("li",{children:["⚙️ ",e.jsx("strong",{children:"Try changing:"})," Return a different HTTP status like 201 Created for POST."]}),e.jsxs("li",{children:["📂 ",e.jsx("strong",{children:"Think about:"})," How would you secure a JAX‑RS resource? (Container security or filters)."]}),e.jsxs("li",{children:["🧩 ",e.jsx("strong",{children:"Debug:"})," 404 error – check if the servlet mapping matches your @Path and your web.xml or annotation config."]})]})]}),e.jsx(o,{title:"JAX‑RS (Jersey) FAQs",questions:h}),e.jsx("div",{className:"mt-8",children:e.jsx(l,{note:"Introduce JAX‑RS as the modern alternative to servlets for building APIs. Show how a single resource class replaces multiple servlets. Emphasise HTTP methods and status codes. Hands‑on: create a simple 'book' resource with in‑memory list, test with Postman. Then add JSON and see how Jersey serialises automatically. This is a perfect stepping stone to Spring Boot REST controllers."})}),e.jsx("footer",{className:"text-center text-gray-500 text-sm pt-8 border-t border-gray-800",children:"Topic 15: RESTful Web Services with JAX‑RS (Jersey) – Part of Servlet Mastery Series"})]})})};export{R as default};
