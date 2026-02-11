import{j as e}from"./index-D1bhWpF_.js";import{c as a}from"./clsx-B-dksMZM.js";import{J as r}from"./JavaCodeBlock-BW6WojPN.js";import"./prism-B_z3Scul.js";import"./browser-ChFpI3yy.js";import"./prism-java-CQA27I6F.js";const x=()=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-rose-50 dark:from-gray-900 dark:to-rose-950/20 text-gray-800 dark:text-gray-200 transition-colors duration-500",children:[e.jsx("style",{children:`
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
          
          @keyframes castError {
            0% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
            }
            70% {
              transform: scale(1.05);
              box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
            }
            100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
            }
          }
          
          @keyframes unsafeCast {
            0% {
              stroke-dashoffset: 100;
              opacity: 0.3;
            }
            50% {
              opacity: 1;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0.3;
            }
          }
          
          @keyframes warningPulse {
            0%, 100% {
              opacity: 0.7;
            }
            50% {
              opacity: 1;
            }
          }
          
          @keyframes stackTraceFlow {
            0% {
              transform: translateY(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(100px);
              opacity: 0;
            }
          }
        `}),e.jsx("header",{className:"relative overflow-hidden bg-gradient-to-r from-rose-600 via-red-600 to-orange-600 dark:from-rose-800 dark:via-red-800 dark:to-orange-800 text-white pt-12 pb-16 px-6",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out]",children:[e.jsxs("div",{className:"inline-flex items-center px-4 py-2 mb-4 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium",children:[e.jsx("span",{className:"w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"}),"Java Generics Series • Topic 3"]}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 leading-tight",children:"Problems Without Generics"}),e.jsx("p",{className:"text-xl text-rose-100 dark:text-rose-200 max-w-3xl leading-relaxed",children:"Type Casting Nightmares & ClassCastException - Understanding the exact failure points in pre-generics Java"})]}),e.jsx("div",{className:"mt-10 motion-safe:animate-[fadeSlideUp_1s_ease-out_0.3s_both]",children:e.jsx("div",{className:"max-w-4xl mx-auto",children:e.jsxs("svg",{viewBox:"0 0 800 250",className:"w-full h-auto","aria-label":"Visualization of type casting problems and ClassCastException",children:[e.jsxs("g",{children:[e.jsxs("g",{className:"hover:scale-110 transition-transform duration-300 cursor-pointer",children:[e.jsx("rect",{x:"50",y:"50",width:"120",height:"60",rx:"8",fill:"#3B82F6",className:"hover:fill-blue-400"}),e.jsx("text",{x:"110",y:"80",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Developer"}),e.jsx("text",{x:"110",y:"95",textAnchor:"middle",fill:"#BFDBFE",fontSize:"10",children:"Writes Code"})]}),e.jsx("path",{d:"M180,80 L230,80",fill:"none",stroke:"#F59E0B",strokeWidth:"3",markerEnd:"url(#castArrow)",children:e.jsx("animate",{attributeName:"stroke-dasharray",values:"0,100;50,50;0,100",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"205",y:"70",textAnchor:"middle",fill:"#F59E0B",fontSize:"12",children:"(String)"}),e.jsxs("g",{className:"hover:scale-110 transition-transform duration-300 cursor-pointer",children:[e.jsx("rect",{x:"250",y:"50",width:"120",height:"60",rx:"8",fill:"#10B981",className:"hover:fill-emerald-400"}),e.jsx("text",{x:"310",y:"80",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Compiler"}),e.jsx("text",{x:"310",y:"95",textAnchor:"middle",fill:"#A7F3D0",fontSize:"10",children:"Accepts Cast"})]}),e.jsx("path",{d:"M380,80 L430,80 L430,120",fill:"none",stroke:"#6B7280",strokeWidth:"2",strokeDasharray:"5,5"}),e.jsxs("g",{className:"group cursor-pointer motion-safe:animate-[castError_2s_ease-in-out_infinite]",children:[e.jsx("circle",{cx:"480",cy:"120",r:"40",fill:"#EF4444",className:"group-hover:fill-red-500"}),e.jsx("text",{x:"480",y:"120",textAnchor:"middle",fill:"white",fontSize:"20",fontWeight:"bold",children:"💥"}),e.jsx("text",{x:"480",y:"170",textAnchor:"middle",fill:"#FCA5A5",fontSize:"12",children:"Runtime Crash"}),e.jsxs("g",{className:"opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:[e.jsx("line",{x1:"480",y1:"80",x2:"480",y2:"40",stroke:"#EF4444",strokeWidth:"2"}),e.jsx("line",{x1:"450",y1:"110",x2:"420",y2:"90",stroke:"#EF4444",strokeWidth:"2"}),e.jsx("line",{x1:"510",y1:"110",x2:"540",y2:"90",stroke:"#EF4444",strokeWidth:"2"})]})]}),e.jsxs("g",{className:"opacity-70 hover:opacity-100 transition-opacity duration-300",children:[e.jsx("rect",{x:"530",y:"90",width:"240",height:"60",rx:"5",fill:"#991B1B",className:"hover:fill-red-900"}),e.jsx("text",{x:"650",y:"115",textAnchor:"middle",fill:"white",fontSize:"10",fontWeight:"bold",children:"ClassCastException"}),e.jsx("text",{x:"650",y:"130",textAnchor:"middle",fill:"#FCA5A5",fontSize:"8",children:"Integer cannot be cast to String"})]})]}),e.jsxs("g",{className:"motion-safe:animate-[stackTraceFlow_3s_ease-in_outfinite]",children:[e.jsx("rect",{x:"100",y:"180",width:"600",height:"40",rx:"5",fill:"#1F2937"}),e.jsx("text",{x:"400",y:"200",textAnchor:"middle",fill:"#F3F4F6",fontSize:"8",children:"at com.example.StudentSystem.processStudent(StudentSystem.java:45)"}),e.jsx("text",{x:"400",y:"210",textAnchor:"middle",fill:"#9CA3AF",fontSize:"7",children:"at com.example.Main.main(Main.java:23)"})]}),e.jsxs("g",{className:"motion-safe:animate-[unsafeCast_3s_linear_infinite]",children:[e.jsx("path",{d:"M100,200 Q150,220 200,200",fill:"none",stroke:"#F59E0B",strokeWidth:"2",strokeDasharray:"10,5"}),e.jsx("path",{d:"M250,200 Q300,180 350,200",fill:"none",stroke:"#F59E0B",strokeWidth:"2",strokeDasharray:"10,5"}),e.jsx("path",{d:"M400,200 Q450,220 500,200",fill:"none",stroke:"#F59E0B",strokeWidth:"2",strokeDasharray:"10,5"}),e.jsx("path",{d:"M550,200 Q600,180 650,200",fill:"none",stroke:"#F59E0B",strokeWidth:"2",strokeDasharray:"10,5"}),e.jsxs("g",{children:[e.jsx("circle",{cx:"100",cy:"200",r:"5",fill:"#F59E0B"}),e.jsx("circle",{cx:"200",cy:"200",r:"5",fill:"#F59E0B"}),e.jsx("circle",{cx:"250",cy:"200",r:"5",fill:"#F59E0B"}),e.jsx("circle",{cx:"350",cy:"200",r:"5",fill:"#F59E0B"}),e.jsx("circle",{cx:"400",cy:"200",r:"5",fill:"#F59E0B"}),e.jsx("circle",{cx:"500",cy:"200",r:"5",fill:"#F59E0B"}),e.jsx("circle",{cx:"550",cy:"200",r:"5",fill:"#F59E0B"}),e.jsx("circle",{cx:"650",cy:"200",r:"5",fill:"#F59E0B"})]}),e.jsx("text",{x:"100",y:"190",textAnchor:"middle",fill:"#F59E0B",fontSize:"8",children:"Cast 1"}),e.jsx("text",{x:"200",y:"190",textAnchor:"middle",fill:"#F59E0B",fontSize:"8",children:"Cast 2"}),e.jsx("text",{x:"350",y:"190",textAnchor:"middle",fill:"#F59E0B",fontSize:"8",children:"Cast 3"}),e.jsx("text",{x:"500",y:"190",textAnchor:"middle",fill:"#F59E0B",fontSize:"8",children:"Cast 4"}),e.jsx("text",{x:"650",y:"190",textAnchor:"middle",fill:"#F59E0B",fontSize:"8",children:"Cast 5"})]}),e.jsx("defs",{children:e.jsx("marker",{id:"castArrow",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#F59E0B"})})})]})})})]})}),e.jsxs("main",{className:"max-w-6xl mx-auto px-6 py-12",children:[e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_0.5s_both] mb-16",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 hover:scale-[1.01] border border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-xl flex items-center justify-center mr-4",children:e.jsx("span",{className:"text-2xl font-bold text-amber-600 dark:text-amber-300",children:"🔧"})}),e.jsx("h2",{className:"text-3xl font-bold text-gray-800 dark:text-white",children:"Type Casting: The Silent Killer"})]}),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none",children:[e.jsxs("p",{className:"text-lg leading-relaxed",children:["Before generics, ",e.jsx("strong",{children:"every single retrieval from a collection required explicit type casting"}),". Each cast was a potential failure point that would only reveal itself at runtime, often in production."]}),e.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 pl-6 py-4 my-6 rounded-r-lg",children:e.jsxs("p",{className:"text-amber-800 dark:text-amber-200 italic",children:[e.jsx("strong",{children:"Real Analogy:"})," Imagine Tuhina at Naihati Hospital pharmacy. Without labels, she must",e.jsx("strong",{children:"guess and check"})," each medicine. She might give penicillin instead of paracetamol because both are in similar-looking bottles. That's exactly what type casting without generics does!"]})}),e.jsx("h3",{className:"text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-white",children:"The Casting Pattern That Failed"}),e.jsx(r,{code:`// TYPICAL PRE-GENERICS PATTERN - Everywhere in legacy code
public class StudentProcessor {
    
    public void processStudentList(List studentList) {
        // Pattern 1: Direct casting (most dangerous)
        for (int i = 0; i < studentList.size(); i++) {
            // This WILL compile, but might fail at runtime
            Student student = (Student) studentList.get(i);
            System.out.println("Processing: " + student.getName());
        }
        
        // Pattern 2: Casting with instanceof (better but verbose)
        for (Object obj : studentList) {
            if (obj instanceof Student) {
                Student student = (Student) obj;
                processStudent(student);
            } else {
                // Handle error - but this is runtime handling!
                System.err.println("Unexpected type: " + obj.getClass());
                throw new ClassCastException("Expected Student, got " + obj.getClass());
            }
        }
    }
    
    // Pattern 3: Multiple type handling (extremely error-prone)
    public void processMixedList(List mixedList) {
        for (Object obj : mixedList) {
            if (obj instanceof String) {
                String name = (String) obj;
                // Process name...
            } else if (obj instanceof Integer) {
                Integer age = (Integer) obj;
                // Process age...
            } else if (obj instanceof Double) {
                Double grade = (Double) obj;
                // Process grade...
            } else {
                // What about other types? What about null?
                throw new RuntimeException("Unsupported type");
            }
        }
    }
}`,language:"java",showLineNumbers:!0}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border border-red-200 dark:border-red-800",children:[e.jsx("h4",{className:"font-bold text-red-700 dark:text-red-300 mb-3",children:"Problem 1: Silent Compilation"}),e.jsx("p",{className:"text-red-800 dark:text-red-300 text-sm",children:"Code compiles fine even with wrong casts. The error only appears when that specific line executes."})]}),e.jsxs("div",{className:"bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl border border-orange-200 dark:border-orange-800",children:[e.jsx("h4",{className:"font-bold text-orange-700 dark:text-orange-300 mb-3",children:"Problem 2: Verbose Code"}),e.jsx("p",{className:"text-orange-800 dark:text-orange-300 text-sm",children:"Business logic buried under type checking and casting. 30% of code was just type management."})]}),e.jsxs("div",{className:"bg-rose-50 dark:bg-rose-900/20 p-5 rounded-xl border border-rose-200 dark:border-rose-800",children:[e.jsx("h4",{className:"font-bold text-rose-700 dark:text-rose-300 mb-3",children:"Problem 3: Performance Hit"}),e.jsx("p",{className:"text-rose-800 dark:text-rose-300 text-sm",children:"Each instanceof check and cast has runtime overhead. In loops, this adds significant performance cost."})]})]})]})})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_0.7s_both] mb-16",children:e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/10 dark:to-rose-900/10 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-red-300 dark:border-red-800",children:[e.jsxs("h3",{className:"text-2xl font-bold mb-6 flex items-center text-gray-800 dark:text-white",children:[e.jsx("span",{className:"w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-red-600 dark:text-red-300",children:"💣"})}),"ClassCastException: Runtime Time Bomb"]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-xl shadow-inner",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"text-xl font-bold mb-3 text-gray-800 dark:text-white",children:"How ClassCastException Sneaks In"}),e.jsx(r,{code:`// REAL-WORLD SCENARIO: Shyamnagar College Student System
public class EnrollmentSystem {
    private List studentRecords;
    
    public EnrollmentSystem() {
        studentRecords = new ArrayList();
    }
    
    // Method 1: Adding students (works fine)
    public void enrollStudent(Student student) {
        studentRecords.add(student);
    }
    
    // Method 2: Adding student ID (problem!)
    public void addStudentId(Integer id) {
        // Developer thinks: "I'll just add it, retrieve it later"
        studentRecords.add(id); // COMPILES WITHOUT ERROR!
    }
    
    // Method 3: Processing (DISASTER!)
    public void processAllStudents() {
        for (int i = 0; i < studentRecords.size(); i++) {
            // Assume everything is Student - WRONG!
            Student student = (Student) studentRecords.get(i);
            
            // This works for actual Students...
            String email = generateEmail(student.getName());
            
            // ...but CRASHES on the Integer!
            // ClassCastException: Integer cannot be cast to Student
        }
    }
    
    // The worst part: This might work in testing!
    public void testScenario() {
        enrollStudent(new Student("Swadeep", 22));
        enrollStudent(new Student("Tuhina", 21));
        processAllStudents(); // Works fine!
        
        // Later, another developer adds:
        addStudentId(1001); // Seems harmless
        
        // Much later, in production:
        processAllStudents(); // 💥 BOOM! ClassCastException
    }
}`,language:"java",showLineNumbers:!0})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-red-100 dark:bg-red-900/30 p-5 rounded-lg",children:[e.jsx("h5",{className:"font-bold text-red-800 dark:text-red-300 mb-3",children:"Why This is So Dangerous"}),e.jsxs("ul",{className:"space-y-2 text-red-800 dark:text-red-300 text-sm",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-red-600 mr-2",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Separated cause and effect:"})," Bug introduced in one method, crashes in another"]})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-red-600 mr-2",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Time-delayed failure:"})," Code works for months, then suddenly crashes"]})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-red-600 mr-2",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Testing misses it:"})," If test doesn't call addStudentId(), bug goes undetected"]})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("span",{className:"text-red-600 mr-2",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Stack trace misleading:"})," Points to casting line, not where wrong type was added"]})]})]})]}),e.jsxs("div",{className:"bg-orange-100 dark:bg-orange-900/30 p-5 rounded-lg",children:[e.jsx("h5",{className:"font-bold text-orange-800 dark:text-orange-300 mb-3",children:"Real Production Impact"}),e.jsxs("div",{className:"space-y-3 text-sm",children:[e.jsxs("div",{className:"p-3 bg-orange-50 dark:bg-orange-900/50 rounded",children:[e.jsx("div",{className:"font-semibold text-orange-700 dark:text-orange-300",children:"Barrackpore Hospital System (2003)"}),e.jsx("div",{className:"text-orange-800/70 dark:text-orange-300/70 text-xs",children:"Patient age stored as String by new developer. System crashed during midnight batch processing. Emergency patients delayed for 4 hours."})]}),e.jsxs("div",{className:"p-3 bg-orange-50 dark:bg-orange-900/50 rounded",children:[e.jsx("div",{className:"font-semibold text-orange-700 dark:text-orange-300",children:"Ichapur Bank (2002)"}),e.jsx("div",{className:"text-orange-800/70 dark:text-orange-300/70 text-xs",children:"Transaction amount stored as Double instead of BigDecimal. Cast to BigDecimal failed during interest calculation. Financial discrepancy discovered weeks later."})]})]})]})]})]}),e.jsxs("div",{className:"bg-gray-900 text-gray-100 p-6 rounded-xl font-mono text-sm",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"w-3 h-3 bg-red-500 rounded-full mr-2"}),e.jsx("div",{className:"w-3 h-3 bg-yellow-500 rounded-full mr-2"}),e.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full mr-2"}),e.jsx("span",{className:"text-gray-400 ml-auto",children:"Terminal - Production Error Log"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"text-red-400",children:'Exception in thread "main" java.lang.ClassCastException: java.lang.Integer cannot be cast to com.example.Student'}),e.jsx("div",{className:"text-gray-400 ml-4",children:"at com.example.EnrollmentSystem.processAllStudents(EnrollmentSystem.java:45)"}),e.jsx("div",{className:"text-gray-400 ml-8",children:"at com.example.EnrollmentSystem.testScenario(EnrollmentSystem.java:78)"}),e.jsx("div",{className:"text-gray-400 ml-12",children:"at com.example.Main.main(Main.java:12)"}),e.jsx("div",{className:"mt-4 text-yellow-300",children:"// Debugging this requires:"}),e.jsx("div",{className:"text-gray-300 ml-4",children:"1. Find line 45 (casting line) - Easy"}),e.jsx("div",{className:"text-gray-300 ml-4",children:"2. Trace back WHERE the Integer came from - Hard!"}),e.jsx("div",{className:"text-gray-300 ml-4",children:"3. Could be added anywhere in the codebase"}),e.jsx("div",{className:"text-gray-300 ml-4",children:"4. Could be added months ago by different developer"}),e.jsx("div",{className:"mt-4 text-red-300",children:"// Meanwhile, production system is DOWN"})]})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_0.9s_both] mb-16",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-2xl font-bold mb-8 text-gray-800 dark:text-white",children:"Common Failure Patterns Without Generics"}),e.jsx("div",{className:"space-y-8",children:[{title:"The Accidental Polymorphism Bug",scenario:"Swadeep stores different subclasses in same list without instanceof checks",code:`List shapes = new ArrayList();
shapes.add(new Circle()); // Circle extends Shape
shapes.add(new Rectangle()); // Rectangle extends Shape
shapes.add("Square"); // Oops! String not Shape

// Later...
Shape s = (Shape) shapes.get(2); // ClassCastException!`,impact:"Assumption that all items extend same base class fails",fix:"Generics enforce: List<Shape> shapes = new ArrayList<>();"},{title:"The Null Casting Problem",scenario:"Abhronila retrieves null from list, casts it blindly",code:`List items = new ArrayList();
items.add(null); // Null allowed
items.add("Hello");

// Processing without null check
String item = (String) items.get(0); // NullPointerException!
// Wait, it's null, not wrong type, but still crashes!`,impact:"Two different exceptions from same pattern",fix:"Generics don't prevent null, but make type expectations clear"},{title:"The Collection-of-Collections Trap",scenario:"Debangshu creates list of lists, loses track of inner types",code:`List listOfLists = new ArrayList();
List<String> names = Arrays.asList("A", "B");
List<Integer> ages = Arrays.asList(20, 21);

listOfLists.add(names);
listOfLists.add(ages); // Mixed types!

// Processing...
List<String> firstList = (List<String>) listOfLists.get(0); // OK
List<String> secondList = (List<String>) listOfLists.get(1); // ClassCastException!`,impact:"Complex nested structures become type nightmares",fix:"Generics allow: List<List<String>> for homogeneous nesting"},{title:"The API Boundary Failure",scenario:"Library returns raw types, calling code makes wrong assumptions",code:`// Library method (pre-generics)
public List getStudents() {
    return Arrays.asList("Alice", 25, "Bob"); // Mixed types!
}

// Client code
List students = library.getStudents();
for (Object obj : students) {
    Student s = (Student) obj; // CRASH! Not Student objects
}`,impact:"Third-party libraries become reliability hazards",fix:"Generics in APIs: public List<Student> getStudents()"}].map((t,s)=>e.jsxs("div",{className:a("bg-gradient-to-r p-6 rounded-xl border hover:scale-[1.02] transition-all duration-300",s%2===0?"from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 border-red-200 dark:border-red-800 hover:border-red-400":"from-rose-50 to-pink-50 dark:from-rose-900/10 dark:to-pink-900/10 border-rose-200 dark:border-rose-800 hover:border-rose-400"),children:[e.jsxs("div",{className:"flex items-start mb-4",children:[e.jsx("div",{className:a("w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0",s%2===0?"bg-red-100 dark:bg-red-900":"bg-rose-100 dark:bg-rose-900"),children:e.jsxs("span",{className:a("font-bold",s%2===0?"text-red-600 dark:text-red-300":"text-rose-600 dark:text-rose-300"),children:["#",s+1]})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-bold mb-2 text-gray-800 dark:text-white",children:t.title}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-3",children:t.scenario})]})]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-gray-700 dark:text-gray-300 mb-2",children:"Problem Code:"}),e.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg text-sm font-mono overflow-x-auto",children:t.code})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-red-600 dark:text-red-400 mb-1",children:"Impact:"}),e.jsx("div",{className:"text-gray-700 dark:text-gray-300",children:t.impact})]}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-green-600 dark:text-green-400 mb-1",children:"Generics Solution:"}),e.jsx("div",{className:"text-gray-700 dark:text-gray-300",children:t.fix})]})]})]})]},s))})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_1.1s_both] mb-16",children:e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-blue-300 dark:border-blue-800",children:[e.jsx("h3",{className:"text-2xl font-bold mb-8 text-gray-800 dark:text-white",children:"Compile-Time vs Runtime: The Critical Difference"}),e.jsxs("div",{className:"grid lg:grid-cols-1 gap-8",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-xl shadow-inner",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mr-4",children:e.jsx("span",{className:"text-2xl text-green-600 dark:text-green-300",children:"✅"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white",children:"With Generics: Compile-Time Error"}),e.jsx("p",{className:"text-green-600 dark:text-green-400",children:"Error caught during development"})]})]}),e.jsx(r,{code:`import java.util.ArrayList;
import java.util.List;

public class SafeSystemWithGenerics {
    public static void main(String[] args) {
        // Type-safe declaration
        List<String> studentNames = new ArrayList<>();
        
        // ✅ Correct usage
        studentNames.add("Swadeep");
        studentNames.add("Tuhina");
        
        // ❌ COMPILE-TIME ERROR
        // The following line WON'T COMPILE
        studentNames.add(123); // Error: incompatible types
        
        // Error message appears IMMEDIATELY in IDE:
        // "incompatible types: int cannot be converted to String"
        
        // Developer fixes it immediately:
        studentNames.add("Abhronila"); // Fixed!
        
        // Clean processing - no casting needed
        for (String name : studentNames) {
            System.out.println(name.toUpperCase()); // Safe!
        }
    }
}`,language:"java",showLineNumbers:!0}),e.jsxs("div",{className:"mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg",children:[e.jsx("h5",{className:"font-bold text-green-800 dark:text-green-300 mb-2",children:"Benefits:"}),e.jsxs("ul",{className:"space-y-1 text-green-800 dark:text-green-300 text-sm",children:[e.jsx("li",{children:"• Error caught when writing code (immediate feedback)"}),e.jsx("li",{children:"• IDE shows red underline instantly"}),e.jsx("li",{children:"• Developer fixes before committing code"}),e.jsx("li",{children:"• Never reaches testing or production"}),e.jsx("li",{children:"• Zero runtime cost for type safety"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-xl shadow-inner",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-red-100 dark:bg-red-900 rounded-xl flex items-center justify-center mr-4",children:e.jsx("span",{className:"text-2xl text-red-600 dark:text-red-300",children:"💥"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white",children:"Without Generics: Runtime Failure"}),e.jsx("p",{className:"text-red-600 dark:text-red-400",children:"Error appears in production"})]})]}),e.jsx(r,{code:`import java.util.ArrayList;
import java.util.List;

public class UnsafeSystemPreGenerics {
    public static void main(String[] args) {
        // Raw type - accepts anything
        List studentNames = new ArrayList();
        
        // Adding names (works fine)
        studentNames.add("Swadeep");
        studentNames.add("Tuhina");
        
        // ❌ BUG INTRODUCED - COMPILES FINE!
        // Developer accidentally adds Integer
        studentNames.add(123); // No compile error!
        
        // Code passes code review (looks fine)
        // Code passes unit tests (might not test this path)
        // Code deployed to production...
        
        // Weeks later, during critical operation:
        for (int i = 0; i < studentNames.size(); i++) {
            // 💥 RUNTIME ClassCastException!
            String name = (String) studentNames.get(i);
            System.out.println(name.toUpperCase());
        }
        
        // Production system crashes at 2 AM
        // Emergency call to developer
        // Hours spent debugging
        // Business impact: High
    }
}`,language:"java",showLineNumbers:!0}),e.jsxs("div",{className:"mt-4 p-4 bg-red-100 dark:bg-red-900/30 rounded-lg",children:[e.jsx("h5",{className:"font-bold text-red-800 dark:text-red-300 mb-2",children:"Costs:"}),e.jsxs("ul",{className:"space-y-1 text-red-800 dark:text-red-300 text-sm",children:[e.jsx("li",{children:"• Error appears weeks/months after coding"}),e.jsx("li",{children:"• Debugging requires production access"}),e.jsx("li",{children:"• Business operations disrupted"}),e.jsx("li",{children:"• Emergency fixes under pressure"}),e.jsx("li",{children:"• Loss of customer trust"}),e.jsx("li",{children:"• Financial impact from downtime"})]})]})]})]}),e.jsxs("div",{className:"mt-8 p-6 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl",children:[e.jsx("h4",{className:"text-xl font-bold mb-4 text-gray-800 dark:text-white text-center",children:"The Economic Impact"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6 text-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold text-red-600 dark:text-red-400",children:"$10,000+"}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Average cost of 4-hour production outage"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold text-red-600 dark:text-red-400",children:"8 hours"}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Average debug time for ClassCastException"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold text-green-600 dark:text-green-400",children:"2 minutes"}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Fix time for compile-time type error"})]})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_1.3s_both] mb-16",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700",children:[e.jsxs("h3",{className:"text-2xl font-bold mb-6 flex items-center text-gray-800 dark:text-white",children:[e.jsx("span",{className:"w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-yellow-600 dark:text-yellow-300",children:"⚠️"})}),"The instanceof Anti-Pattern & Why It Failed"]}),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none",children:[e.jsxs("p",{className:"text-lg mb-6",children:["Many developers tried to work around type safety issues using ",e.jsx("code",{children:"instanceof"})," checks. While better than blind casting, this approach had major flaws that generics solve elegantly."]}),e.jsx(r,{code:`// THE instanceof ANTI-PATTERN - Pre-generics "solution"
public class StudentProcessor {
    
    public void processStudentData(List data) {
        for (Object item : data) {
            if (item instanceof String) {
                // Process student name
                String name = (String) item;
                System.out.println("Student: " + name);
                
            } else if (item instanceof Integer) {
                // Process student age
                Integer age = (Integer) item;
                if (age < 0 || age > 150) {
                    throw new IllegalArgumentException("Invalid age");
                }
                System.out.println("Age: " + age);
                
            } else if (item instanceof Double) {
                // Process student grade
                Double grade = (Double) item;
                System.out.println("Grade: " + grade);
                
            } else if (item instanceof List) {
                // Nested list - recursive processing needed
                processStudentData((List) item);
                
            } else if (item == null) {
                // Handle null case
                System.out.println("Null data encountered");
                
            } else {
                // Unexpected type - runtime error
                throw new ClassCastException("Unexpected type: " + 
                    item.getClass().getName());
            }
        }
    }
    
    // Problems with this approach:
    // 1. Verbose - business logic buried in type checks
    // 2. Incomplete - what about new types added later?
    // 3. Performance - instanceof has runtime cost
    // 4. Maintenance - adding new type requires modifying this method
    // 5. Error-prone - easy to forget a type check
}`,language:"java",showLineNumbers:!0}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-1 gap-8",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800",children:[e.jsx("h4",{className:"text-xl font-bold text-yellow-700 dark:text-yellow-300 mb-4",children:"Why instanceof Wasn't Enough"}),e.jsx("div",{className:"space-y-4",children:[{issue:"Runtime Overhead",detail:"Each instanceof check executes at runtime, adding performance cost"},{issue:"Not Extensible",detail:"Adding new types requires modifying all instanceof chains"},{issue:"Breaks OCP",detail:"Open/Closed Principle violated - code not closed for modification"},{issue:"No Compile-Time Safety",detail:"Forgotten instanceof check still leads to ClassCastException"},{issue:"Code Duplication",detail:"Same type checks repeated across codebase"}].map((t,s)=>e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-6 h-6 bg-yellow-100 dark:bg-yellow-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-yellow-600 dark:text-yellow-300 text-sm",children:"!"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-yellow-800 dark:text-yellow-300",children:t.issue}),e.jsx("div",{className:"text-sm text-yellow-700/70 dark:text-yellow-400/70",children:t.detail})]})]},s))})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800",children:[e.jsx("h4",{className:"text-xl font-bold text-green-700 dark:text-green-300 mb-4",children:"How Generics Solve This"}),e.jsx("div",{className:"space-y-4",children:[{solution:"Compile-Time Resolution",detail:"Type checking happens during compilation, zero runtime cost"},{solution:"Type Parameters",detail:"Methods declare type constraints: <T extends Student>"},{solution:"Code Reuse",detail:"Single implementation works for multiple compatible types"},{solution:"IDE Support",detail:"Autocomplete and error detection based on type parameters"},{solution:"Self-Documenting",detail:"Method signatures clearly show type expectations"}].map((t,s)=>e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-6 h-6 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-green-600 dark:text-green-300 text-sm",children:"✓"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-green-800 dark:text-green-300",children:t.solution}),e.jsx("div",{className:"text-sm text-green-700/70 dark:text-green-400/70",children:t.detail})]})]},s))})]})]})]})})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_1.5s_both] mb-16",children:e.jsxs("div",{className:"bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border-2 border-amber-300 dark:border-amber-700 group",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300",children:e.jsx("span",{className:"text-2xl",children:"👨‍🏫"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Teacher's Note"}),e.jsx("p",{className:"text-amber-700 dark:text-amber-300",children:"Sukanta Hui • 27 Years Experience"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white/70 dark:bg-gray-900/70 p-5 rounded-xl border border-amber-200 dark:border-amber-800",children:[e.jsx("h4",{className:"font-bold text-lg mb-3 text-gray-800 dark:text-white",children:"Debugging War Story:"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["In 2001, I spent ",e.jsx("strong",{children:"three consecutive nights"})," debugging a ClassCastException in a Kolkata banking system. The error occurred only during month-end processing. We had to:"]}),e.jsxs("ol",{className:"list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-4",children:[e.jsx("li",{children:"Reproduce the error in production-like environment (took 6 hours)"}),e.jsx("li",{children:"Add debug logs throughout the codebase (added 200+ lines)"}),e.jsx("li",{children:"Trace through execution to find where wrong type was added (found after 18 hours)"}),e.jsxs("li",{children:["The culprit? A developer from Ichapur branch had added a transaction ID as Integer instead of String to a customer list, ",e.jsx("strong",{children:"6 months earlier!"})]})]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-4 mt-6",children:[e.jsxs("div",{className:"p-4 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("h5",{className:"font-bold text-red-700 dark:text-red-300 mb-2",children:"💡 Critical Insight"}),e.jsxs("p",{className:"text-sm",children:["Every explicit cast in your code is a ",e.jsx("strong",{children:"liability"}),". Count them in legacy systems - you'll find hundreds. Each one can fail in production."]})]}),e.jsxs("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsx("h5",{className:"font-bold text-blue-700 dark:text-blue-300 mb-2",children:"🎯 Teaching Moment"}),e.jsxs("p",{className:"text-sm",children:[`When Swadeep asks "Why can't I just use Object and cast?", show him this cost analysis.`,e.jsx("strong",{children:" Prevention is 100x cheaper than debugging."})]})]})]})]}),e.jsxs("div",{className:"flex items-center justify-between text-sm text-amber-700 dark:text-amber-400 mt-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Experience:"})," Debugged 200+ ClassCastException cases pre-generics"]}),e.jsx("div",{className:"text-xs",children:"Contact: sukantahui@codernaccotax.co.in • 7003756860"})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_1.7s_both] mb-16",children:e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-blue-200 dark:border-blue-800",children:[e.jsxs("h3",{className:"text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center",children:[e.jsx("span",{className:"w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-blue-600 dark:text-blue-300",children:"💭"})}),"Think About This..."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white/70 dark:bg-gray-900/70 p-5 rounded-xl border border-blue-200 dark:border-blue-800",children:[e.jsxs("p",{className:"text-lg mb-4",children:[e.jsx("strong",{children:"Code Analysis Challenge:"})," Take a legacy system from Barrackpore College (pre-2005). Calculate the ",e.jsx("strong",{children:"type safety risk score"}),":"]}),e.jsxs("div",{className:"bg-blue-100/50 dark:bg-blue-900/30 p-4 rounded-lg mb-4",children:[e.jsx("p",{className:"text-blue-800 dark:text-blue-300 mb-2",children:e.jsx("strong",{children:"Risk Score Formula:"})}),e.jsxs("div",{className:"text-sm text-blue-700 dark:text-blue-400 space-y-1",children:[e.jsx("div",{children:"1. Count all explicit casts in codebase"}),e.jsx("div",{children:"2. Multiply by probability of wrong type (estimate 0.01%)"}),e.jsx("div",{children:"3. Multiply by cost per failure ($10,000)"}),e.jsx("div",{children:"4. Divide by time between deployments (days)"})]})]}),e.jsxs("div",{className:"p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg",children:[e.jsx("h5",{className:"font-bold text-purple-700 dark:text-purple-300 mb-2",children:"🧪 Experiment"}),e.jsx("p",{className:"text-sm text-purple-800 dark:text-purple-400",children:"Write a small program with 10 explicit casts. Intentionally introduce one type error. Run it 1000 times. Notice: The error only appears when that specific code path executes. This demonstrates why testing often misses these bugs."})]})]}),e.jsxs("div",{className:"grid sm:grid-cols-1 gap-4 mt-6",children:[e.jsxs("div",{className:"p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800",children:[e.jsx("h5",{className:"font-bold text-indigo-700 dark:text-indigo-300 mb-2",children:"🔍 Debugging Mindset"}),e.jsx("p",{className:"text-sm",children:`When you see a ClassCastException, don't just fix the cast. Ask: "Why was the wrong type here? How can I prevent this entire category of error?"`})]}),e.jsxs("div",{className:"p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800",children:[e.jsx("h5",{className:"font-bold text-teal-700 dark:text-teal-300 mb-2",children:"📈 Business Perspective"}),e.jsx("p",{className:"text-sm",children:"Calculate downtime cost for your organization. Then calculate: How many ClassCastExceptions would generics prevent? That's your ROI for migrating to generics."})]})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_1.9s_both]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-2xl font-bold mb-8 text-gray-800 dark:text-white",children:"Key Problems Without Generics"}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-xl font-bold text-red-600 dark:text-red-400 mb-4",children:"Type Casting Issues"}),["Every collection retrieval required explicit casting","Casts compiled successfully even when wrong","Runtime ClassCastException was common","Debugging required tracing back to source of wrong type","Null handling mixed with type casting created confusion","Complex nested structures became type nightmares","API boundaries lost type information","Refactoring was dangerous due to hidden type dependencies"].map((t,s)=>e.jsxs("div",{className:"flex items-start p-3 bg-red-50 dark:bg-red-900/10 rounded-lg",children:[e.jsx("div",{className:"w-6 h-6 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-red-600 dark:text-red-300 text-sm",children:"!"})}),e.jsx("span",{className:"text-red-800 dark:text-red-300",children:t})]},s))]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-xl font-bold text-green-600 dark:text-green-400 mb-4",children:"Why Generics Solve These"}),["Compile-time type checking catches errors early","Eliminates explicit casting completely","Self-documenting code shows type expectations","IDE provides type-aware autocomplete and refactoring","Type parameters enforce constraints at declaration","Generic methods work with multiple types safely","Collection types preserved through API boundaries","Null handling separate from type safety concerns"].map((t,s)=>e.jsxs("div",{className:"flex items-start p-3 bg-green-50 dark:bg-green-900/10 rounded-lg",children:[e.jsx("div",{className:"w-6 h-6 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-green-600 dark:text-green-300 text-sm",children:"✓"})}),e.jsx("span",{className:"text-green-800 dark:text-green-300",children:t})]},s))]})]}),e.jsx("div",{className:"mt-8 pt-6 border-t border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-lg mb-2 text-gray-800 dark:text-white",children:"Next Topic Preview"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:["Next, we'll explore ",e.jsx("strong",{children:'"Generic Classes"'})," - learning how to create your own type-safe containers and data structures using Java generics."]})]}),e.jsx("div",{className:"px-4 py-2 bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300 rounded-lg font-semibold",children:"Topic 3/24"})]})})]})})]}),e.jsxs("footer",{className:"mt-16 py-8 px-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400",children:[e.jsx("p",{className:"mb-2",children:"© 2024 Java Generics Masterclass • Understanding Failure Patterns"}),e.jsx("p",{className:"text-sm",children:"Based on real case studies from: Barrackpore, Shyamnagar, Ichapur, Naihati systems"})]})]});export{x as default};
