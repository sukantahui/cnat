import{j as e}from"./index-BFnLuail.js";import{J as a}from"./JavaCodeBlock-BW2HnNng.js";import"./prism-DTsTe1iV.js";import"./browser-BMQRQ0HI.js";import"./prism-java-CQA27I6F.js";const o=()=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-950/20 text-gray-800 dark:text-gray-200 transition-colors duration-500",children:[e.jsx("style",{children:`
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
          
          @keyframes blueprintGlow {
            0%, 100% {
              box-shadow: 0 4px 6px -1px rgba(34, 197, 94, 0.1);
            }
            50% {
              box-shadow: 0 10px 15px -3px rgba(34, 197, 94, 0.3);
            }
          }
          
          @keyframes typeParameterFlow {
            0% {
              stroke-dashoffset: 100;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }
          
          @keyframes instanceCreation {
            0% {
              transform: scale(0.8);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          
          @keyframes templatePulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
        `}),e.jsx("header",{className:"relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-800 dark:via-green-800 dark:to-teal-800 text-white pt-12 pb-16 px-6",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out]",children:[e.jsxs("div",{className:"inline-flex items-center px-4 py-2 mb-4 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium",children:[e.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"}),"Java Generics Series • Topic 4"]}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 leading-tight",children:"Generic Classes"}),e.jsx("p",{className:"text-xl text-emerald-100 dark:text-emerald-200 max-w-3xl leading-relaxed",children:"Creating Type-Safe Containers - Blueprints that adapt to any data type"})]}),e.jsx("div",{className:"mt-10 motion-safe:animate-[fadeSlideUp_1s_ease-out_0.3s_both]",children:e.jsx("div",{className:"max-w-4xl mx-auto",children:e.jsxs("svg",{viewBox:"0 0 800 250",className:"w-full h-auto","aria-label":"Visualization of generic class concept",children:[e.jsxs("g",{className:"group cursor-pointer",children:[e.jsx("rect",{x:"50",y:"50",width:"300",height:"150",rx:"15",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeDasharray:"10,5",className:"text-emerald-400 group-hover:stroke-4 transition-all duration-300",children:e.jsx("animate",{attributeName:"stroke-dasharray",values:"10,5;20,5;10,5",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"200",y:"90",textAnchor:"middle",fill:"currentColor",fontSize:"20",fontWeight:"bold",children:"Generic Blueprint"}),e.jsxs("g",{className:"motion-safe:animate-[typeParameterFlow_2s_ease-in-out_infinite]",children:[e.jsx("rect",{x:"180",y:"110",width:"40",height:"30",rx:"5",fill:"#10B981",className:"group-hover:fill-emerald-400"}),e.jsx("text",{x:"200",y:"130",textAnchor:"middle",fill:"white",fontSize:"16",fontWeight:"bold",children:"<T>"}),e.jsx("text",{x:"200",y:"150",textAnchor:"middle",fill:"#A7F3D0",fontSize:"10",children:"Type Parameter"})]}),e.jsxs("text",{x:"200",y:"185",textAnchor:"middle",fill:"currentColor",fontSize:"14",children:["class Box<T> ","{ ... }"]})]}),e.jsxs("g",{children:[e.jsx("path",{d:"M370,125 L430,125",fill:"none",stroke:"currentColor",strokeWidth:"2",markerEnd:"url(#createArrow)",children:e.jsx("animate",{attributeName:"stroke-dasharray",values:"0,100;50,50;0,100",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"400",y:"115",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"new Box<>()"})]}),e.jsxs("g",{className:"motion-safe:animate-[instanceCreation_1s_ease-out_0.5s_both]",children:[e.jsxs("g",{className:"group hover:animate-[templatePulse_1s_ease-in-out] cursor-pointer",children:[e.jsx("rect",{x:"470",y:"30",width:"100",height:"70",rx:"10",fill:"#3B82F6",className:"group-hover:fill-blue-400 transition-colors duration-300"}),e.jsx("text",{x:"520",y:"50",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Box<String>"}),e.jsx("rect",{x:"495",y:"60",width:"50",height:"30",rx:"5",fill:"#1D4ED8"}),e.jsx("text",{x:"520",y:"78",textAnchor:"middle",fill:"white",fontSize:"12",children:'"Hello"'})]}),e.jsxs("g",{className:"group hover:animate-[templatePulse_1s_ease-in-out] cursor-pointer",style:{animationDelay:"0.2s"},children:[e.jsx("rect",{x:"470",y:"110",width:"100",height:"70",rx:"10",fill:"#EF4444",className:"group-hover:fill-red-400 transition-colors duration-300"}),e.jsx("text",{x:"520",y:"130",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Box<Integer>"}),e.jsx("rect",{x:"495",y:"140",width:"50",height:"30",rx:"5",fill:"#DC2626"}),e.jsx("text",{x:"520",y:"158",textAnchor:"middle",fill:"white",fontSize:"12",children:"42"})]}),e.jsxs("g",{className:"group hover:animate-[templatePulse_1s_ease-in-out] cursor-pointer",style:{animationDelay:"0.4s"},children:[e.jsx("rect",{x:"470",y:"190",width:"100",height:"70",rx:"10",fill:"#8B5CF6",className:"group-hover:fill-violet-400 transition-colors duration-300"}),e.jsx("text",{x:"520",y:"210",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Box<Double>"}),e.jsx("rect",{x:"495",y:"220",width:"50",height:"30",rx:"5",fill:"#7C3AED"}),e.jsx("text",{x:"520",y:"238",textAnchor:"middle",fill:"white",fontSize:"12",children:"3.14"})]}),e.jsxs("g",{className:"group hover:animate-[templatePulse_1s_ease-in-out] cursor-pointer",style:{animationDelay:"0.6s"},children:[e.jsx("rect",{x:"590",y:"70",width:"150",height:"110",rx:"10",fill:"#F59E0B",className:"group-hover:fill-amber-400 transition-colors duration-300"}),e.jsx("text",{x:"665",y:"90",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Box<Student>"}),e.jsx("rect",{x:"615",y:"105",width:"100",height:"60",rx:"5",fill:"#D97706"}),e.jsx("text",{x:"665",y:"125",textAnchor:"middle",fill:"white",fontSize:"10",children:"Student Object"}),e.jsx("text",{x:"665",y:"140",textAnchor:"middle",fill:"#FDE68A",fontSize:"8",children:'name: "Swadeep"'}),e.jsx("text",{x:"665",y:"150",textAnchor:"middle",fill:"#FDE68A",fontSize:"8",children:"age: 22"})]})]}),e.jsxs("g",{className:"opacity-50",children:[e.jsx("line",{x1:"200",y1:"200",x2:"520",y2:"95",stroke:"#10B981",strokeWidth:"1",strokeDasharray:"5,5"}),e.jsx("line",{x1:"200",y1:"200",x2:"520",y2:"175",stroke:"#10B981",strokeWidth:"1",strokeDasharray:"5,5"}),e.jsx("line",{x1:"200",y1:"200",x2:"520",y2:"255",stroke:"#10B981",strokeWidth:"1",strokeDasharray:"5,5"}),e.jsx("line",{x1:"200",y1:"200",x2:"665",y2:"125",stroke:"#10B981",strokeWidth:"1",strokeDasharray:"5,5"})]}),e.jsx("defs",{children:e.jsx("marker",{id:"createArrow",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"currentColor"})})})]})})})]})}),e.jsxs("main",{className:"max-w-6xl mx-auto px-6 py-12",children:[e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_0.5s_both] mb-16",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 hover:scale-[1.01] border border-gray-200 dark:border-gray-700 motion-safe:animate-[blueprintGlow_3s_ease-in-out_infinite]",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center mr-4",children:e.jsx("span",{className:"text-2xl font-bold text-emerald-600 dark:text-emerald-300",children:"🏗️"})}),e.jsx("h2",{className:"text-3xl font-bold text-gray-800 dark:text-white",children:"What Are Generic Classes?"})]}),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none",children:[e.jsxs("p",{className:"text-lg leading-relaxed",children:["A ",e.jsx("strong",{children:"Generic Class"})," is a class that can work with any data type while maintaining",e.jsx("strong",{children:" compile-time type safety"}),". It's like a blueprint for creating type-safe containers where the actual type is specified when the class is instantiated."]}),e.jsx("div",{className:"bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 pl-6 py-4 my-6 rounded-r-lg",children:e.jsxs("p",{className:"text-emerald-800 dark:text-emerald-200 italic",children:[e.jsx("strong",{children:"Analogy:"})," Think of a ",e.jsx("strong",{children:"mold"})," in a Barrackpore sweet factory. The mold (generic class) can create rosogolla (String), sandesh (Integer), or mishti doi (Double) based on the ingredients (type parameter) you pour into it. One mold, many specific sweets!"]})}),e.jsx("h3",{className:"text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-white",children:"The Core Concept"}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-8 my-8",children:[e.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all duration-300",children:[e.jsx("h4",{className:"text-xl font-bold text-emerald-700 dark:text-emerald-300 mb-3",children:"Class Definition (Blueprint)"}),e.jsx(a,{code:`// Generic Class Blueprint
// T is a Type Parameter - placeholder for actual type
public class Box<T> {
    private T content;  // T can be String, Integer, Student, etc.
    
    public void setContent(T content) {
        this.content = content;
    }
    
    public T getContent() {
        return content;  // Returns the specific type T
    }
    
    // Other methods can use T as well
    public boolean isEmpty() {
        return content == null;
    }
}`,language:"java",showLineNumbers:!0}),e.jsxs("p",{className:"text-emerald-800 dark:text-emerald-300 mt-4 text-sm",children:["The ",e.jsx("code",{children:"Box<T>"})," class is a ",e.jsx("strong",{children:"template"}),". ",e.jsx("code",{children:"T"})," is a placeholder that gets replaced with actual types."]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300",children:[e.jsx("h4",{className:"text-xl font-bold text-blue-700 dark:text-blue-300 mb-3",children:"Class Usage (Instances)"}),e.jsx(a,{code:`// Creating SPECIFIC instances from the blueprint
public class Main {
    public static void main(String[] args) {
        // String Box - T becomes String
        Box<String> stringBox = new Box<>();
        stringBox.setContent("Hello from Barrackpore!");
        String message = stringBox.getContent(); // No casting!
        
        // Integer Box - T becomes Integer
        Box<Integer> ageBox = new Box<>();
        ageBox.setContent(22);
        int age = ageBox.getContent(); // Auto-unboxing works
        
        // Custom type Box - T becomes Student
        Box<Student> studentBox = new Box<>();
        studentBox.setContent(new Student("Swadeep", "Computer Science"));
        Student student = studentBox.getContent(); // Type safe!
        
        // COMPILE-TIME TYPE SAFETY
        // stringBox.setContent(123); // ERROR: incompatible types
        // studentBox.setContent("Tuhina"); // ERROR: String not Student
    }
}`,language:"java",showLineNumbers:!0}),e.jsxs("p",{className:"text-blue-800 dark:text-blue-300 mt-4 text-sm",children:["Each instance is ",e.jsx("strong",{children:"type-specific"}),". The compiler enforces type consistency."]})]})]})]})})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_0.7s_both] mb-16",children:e.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/10 dark:to-violet-900/10 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-purple-300 dark:border-purple-800",children:[e.jsxs("h3",{className:"text-2xl font-bold mb-6 flex items-center text-gray-800 dark:text-white",children:[e.jsx("span",{className:"w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-purple-600 dark:text-purple-300",children:"🔬"})}),"Anatomy of a Generic Class"]}),e.jsxs("div",{className:"space-y-8",children:[e.jsx("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-xl shadow-inner",children:e.jsxs("div",{className:"grid md:grid-cols-1 gap-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-bold mb-4 text-gray-800 dark:text-white",children:"Class Declaration"}),e.jsx("div",{className:"space-y-6",children:[{component:"Type Parameter",syntax:"<T>",purpose:"Placeholder for actual type",example:"class Container<T>"},{component:"Multiple Parameters",syntax:"<K, V>",purpose:"Multiple type placeholders",example:"class Pair<K, V>"},{component:"Type Variable",syntax:"T item",purpose:"Field using type parameter",example:"private T content;"},{component:"Generic Method Parameter",syntax:"(T param)",purpose:"Method accepting type T",example:"public void add(T item)"},{component:"Return Type",syntax:"T get()",purpose:"Method returning type T",example:"public T getContent()"}].map((t,r)=>e.jsxs("div",{className:"p-4 bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-lg border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-purple-700 dark:text-purple-300",children:t.component}),e.jsx("code",{className:"text-sm bg-purple-200 dark:bg-purple-800 px-2 py-1 rounded",children:t.syntax})]}),e.jsx("div",{className:"text-xs text-purple-600 dark:text-purple-400 bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded",children:t.example})]}),e.jsx("p",{className:"text-sm text-purple-800 dark:text-purple-400",children:t.purpose})]},r))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-bold mb-4 text-gray-800 dark:text-white",children:"Complete Example"}),e.jsx(a,{code:`// Generic Pair Class - Two different types
public class Pair<K, V> {
    // Fields using type parameters
    private K key;
    private V value;
    
    // Constructor using type parameters
    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }
    
    // Getters with exact return types
    public K getKey() {
        return key;  // Returns type K
    }
    
    public V getValue() {
        return value; // Returns type V
    }
    
    // Setters enforcing type safety
    public void setKey(K key) {
        this.key = key;
    }
    
    public void setValue(V value) {
        this.value = value;
    }
    
    // Utility method using both types
    public String toString() {
        return "Pair: " + key + " -> " + value;
    }
    
    // Generic method inside generic class
    public <U> Pair<K, U> transformValue(Function<V, U> transformer) {
        U newValue = transformer.apply(value);
        return new Pair<>(key, newValue);
    }
}

// Usage example from Ichapur College
Pair<String, Integer> studentGrade = new Pair<>("Swadeep", 85);
String name = studentGrade.getKey();      // String
int grade = studentGrade.getValue();      // Integer

Pair<Integer, String> productInfo = new Pair<>(101, "Laptop");
int productId = productInfo.getKey();     // Integer
String productName = productInfo.getValue(); // String`,language:"java",showLineNumbers:!0})]})]})}),e.jsxs("div",{className:"bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-emerald-300 dark:border-emerald-700",children:[e.jsx("h4",{className:"text-xl font-bold mb-4 text-gray-800 dark:text-white",children:"Type Parameter Naming Conventions"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-4",children:[{letter:"T",meaning:"Type",example:"Box<T>"},{letter:"E",meaning:"Element",example:"List<E>"},{letter:"K",meaning:"Key",example:"Map<K, V>"},{letter:"V",meaning:"Value",example:"Map<K, V>"},{letter:"N",meaning:"Number",example:"Calculator<N>"}].map((t,r)=>e.jsxs("div",{className:"text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all duration-300",children:[e.jsx("div",{className:"text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2",children:t.letter}),e.jsx("div",{className:"font-semibold text-emerald-800 dark:text-emerald-300",children:t.meaning}),e.jsx("div",{className:"text-xs text-emerald-700/70 dark:text-emerald-400/70 mt-1",children:t.example})]},r))}),e.jsxs("p",{className:"text-sm text-emerald-800 dark:text-emerald-400 mt-4",children:[e.jsx("strong",{children:"Pro Tip:"})," Use descriptive names for complex scenarios:",e.jsx("code",{children:" <ITEM_TYPE>, <RESULT_TYPE>, <KEY_TYPE, VALUE_TYPE>"})]})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_0.9s_both] mb-16",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-2xl font-bold mb-8 text-gray-800 dark:text-white",children:"Practical Generic Class Examples"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-6 rounded-xl border border-blue-200 dark:border-blue-800",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-blue-600 dark:text-blue-300",children:"📦"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white",children:"1. Generic Container Class"}),e.jsx("p",{className:"text-blue-600 dark:text-blue-400",children:"Naihati College Library System"})]})]}),e.jsx(a,{code:`// Generic Container for Library Items
public class LibraryContainer<T> {
    private T[] items;
    private int size;
    private int capacity;
    
    @SuppressWarnings("unchecked")
    public LibraryContainer(int capacity) {
        this.capacity = capacity;
        this.items = (T[]) new Object[capacity]; // Generic array creation
        this.size = 0;
    }
    
    // Type-safe addition
    public void addItem(T item) {
        if (size >= capacity) {
            throw new IllegalStateException("Container is full");
        }
        items[size++] = item;
    }
    
    // Type-safe retrieval
    public T getItem(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException("Invalid index: " + index);
        }
        return items[index]; // No casting needed!
    }
    
    // Type-safe search
    public boolean contains(T item) {
        for (int i = 0; i < size; i++) {
            if (items[i].equals(item)) {
                return true;
            }
        }
        return false;
    }
    
    // Usage in Shyamnagar Library
    public static void main(String[] args) {
        // Container for Books (String titles)
        LibraryContainer<String> bookTitles = new LibraryContainer<>(100);
        bookTitles.addItem("Java Programming");
        bookTitles.addItem("Data Structures");
        String book = bookTitles.getItem(0); // Type: String
        
        // Container for Student IDs (Integer)
        LibraryContainer<Integer> studentIds = new LibraryContainer<>(500);
        studentIds.addItem(1001);
        studentIds.addItem(1002);
        int id = studentIds.getItem(0); // Type: Integer
        
        // Container for Custom Objects
        LibraryContainer<Student> students = new LibraryContainer<>(50);
        students.addItem(new Student("Tuhina", 21));
        Student student = students.getItem(0); // Type: Student
        
        // TYPE SAFETY ENFORCED:
        // bookTitles.addItem(123); // COMPILE ERROR
        // studentIds.addItem("Abhronila"); // COMPILE ERROR
    }
}`,language:"java",showLineNumbers:!0})]}),e.jsxs("div",{className:"bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 p-6 rounded-xl border border-green-200 dark:border-green-800",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-green-600 dark:text-green-300",children:"📄"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-bold text-gray-800 dark:text-white",children:"2. Generic Response Wrapper"}),e.jsx("p",{className:"text-green-600 dark:text-green-400",children:"Barrackpore University API System"})]})]}),e.jsx(a,{code:`// Generic API Response Wrapper
public class ApiResponse<T> {
    private boolean success;
    private String message;
    private T data;  // Generic data payload
    private long timestamp;
    
    // Constructor for successful responses
    public static <T> ApiResponse<T> success(T data) {
        ApiResponse<T> response = new ApiResponse<>();
        response.success = true;
        response.message = "Operation successful";
        response.data = data;
        response.timestamp = System.currentTimeMillis();
        return response;
    }
    
    // Constructor for error responses
    public static <T> ApiResponse<T> error(String message) {
        ApiResponse<T> response = new ApiResponse<>();
        response.success = false;
        response.message = message;
        response.data = null;
        response.timestamp = System.currentTimeMillis();
        return response;
    }
    
    // Getters
    public boolean isSuccess() { return success; }
    public String getMessage() { return message; }
    public T getData() { return data; }  // Returns specific type T
    public long getTimestamp() { return timestamp; }
    
    // Usage in University System
    public class StudentService {
        public ApiResponse<Student> getStudentById(int id) {
            try {
                Student student = database.findStudent(id);
                return ApiResponse.success(student);  // Student type inferred
            } catch (Exception e) {
                return ApiResponse.error("Student not found");
            }
        }
        
        public ApiResponse<List<Student>> getAllStudents() {
            try {
                List<Student> students = database.getAllStudents();
                return ApiResponse.success(students); // List<Student> type
            } catch (Exception e) {
                return ApiResponse.error("Database error");
            }
        }
        
        public ApiResponse<Integer> getStudentCount() {
            try {
                int count = database.getCount();
                return ApiResponse.success(count);    // Integer type
            } catch (Exception e) {
                return ApiResponse.error("Count failed");
            }
        }
    }
    
    // Client code - Type safe!
    ApiResponse<Student> response1 = service.getStudentById(101);
    if (response1.isSuccess()) {
        Student student = response1.getData();  // Type: Student
        System.out.println(student.getName());
    }
    
    ApiResponse<List<Student>> response2 = service.getAllStudents();
    if (response2.isSuccess()) {
        List<Student> students = response2.getData(); // Type: List<Student>
        students.forEach(s -> System.out.println(s.getName()));
    }
}`,language:"java",showLineNumbers:!0})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_1.1s_both] mb-16",children:e.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-orange-300 dark:border-orange-800",children:[e.jsx("h3",{className:"text-2xl font-bold mb-8 text-gray-800 dark:text-white",children:"Multiple Type Parameters"}),e.jsxs("div",{className:"grid lg:grid-cols-1 gap-8",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-xl shadow-inner",children:[e.jsx("h4",{className:"text-xl font-bold mb-4 text-gray-800 dark:text-white",children:"Generic Pair Class"}),e.jsx(a,{code:`// Generic Pair with TWO type parameters
public class Pair<FirstType, SecondType> {
    private FirstType first;
    private SecondType second;
    
    public Pair(FirstType first, SecondType second) {
        this.first = first;
        this.second = second;
    }
    
    public FirstType getFirst() {
        return first;
    }
    
    public SecondType getSecond() {
        return second;
    }
    
    public void setFirst(FirstType first) {
        this.first = first;
    }
    
    public void setSecond(SecondType second) {
        this.second = second;
    }
    
    // Swap the pair
    public Pair<SecondType, FirstType> swap() {
        return new Pair<>(second, first);
    }
    
    // Check if both elements are equal
    public boolean bothEqual(Object obj) {
        return first.equals(obj) && second.equals(obj);
    }
    
    @Override
    public String toString() {
        return "(" + first + ", " + second + ")";
    }
}

// Ichapur College Usage Examples
public class CollegeSystem {
    public static void main(String[] args) {
        // Student-Name Pair
        Pair<Integer, String> studentRecord = 
            new Pair<>(101, "Swadeep");
        int id = studentRecord.getFirst();      // Integer
        String name = studentRecord.getSecond(); // String
        
        // Course-Grade Pair
        Pair<String, Double> courseGrade = 
            new Pair<>("Java Programming", 85.5);
        String course = courseGrade.getFirst();  // String
        double grade = courseGrade.getSecond();  // Double
        
        // Complex: Pair of Lists
        Pair<List<String>, List<Integer>> studentData = 
            new Pair<>(
                Arrays.asList("Swadeep", "Tuhina"),
                Arrays.asList(22, 21)
            );
        
        // Type-safe operations
        Pair<String, Integer> swapped = studentRecord.swap();
        // swapped is Pair<String, Integer> ("Swadeep", 101)
        
        // COMPILE-TIME TYPE SAFETY
        // studentRecord.setFirst("Invalid"); // ERROR: String not Integer
        // courseGrade.setSecond("A");        // ERROR: String not Double
    }
}`,language:"java",showLineNumbers:!0})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700",children:[e.jsx("h4",{className:"text-xl font-bold text-orange-800 dark:text-orange-300 mb-4",children:"Real-World Use Cases"}),e.jsx("div",{className:"space-y-4",children:[{title:"Database Records",desc:"Map primary key to entity: Pair<Long, Student>",example:"studentId → Student object"},{title:"Key-Value Stores",desc:"Generic configuration: Pair<String, Object>",example:'"timeout" → 30'},{title:"Graph Edges",desc:"Connect vertices: Pair<Vertex, Vertex>",example:"Barrackpore → Shyamnagar"},{title:"API Requests",desc:"Parameter-value pairs: Pair<String, String>",example:'"name" → "Debangshu"'},{title:"Coordinate Systems",desc:"2D/3D coordinates: Pair<Double, Double>",example:"(x, y) coordinates"}].map((t,r)=>e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-orange-200 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-300",children:[e.jsx("div",{className:"font-bold text-orange-700 dark:text-orange-300 mb-1",children:t.title}),e.jsx("div",{className:"text-sm text-orange-800/70 dark:text-orange-400/70 mb-2",children:t.desc}),e.jsx("div",{className:"text-xs text-orange-600 dark:text-orange-500 bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded inline-block",children:t.example})]},r))})]}),e.jsxs("div",{className:"bg-gradient-to-r from-red-100 to-rose-100 dark:from-red-900/20 dark:to-rose-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700",children:[e.jsx("h4",{className:"text-xl font-bold text-red-800 dark:text-red-300 mb-4",children:"Common Mistakes to Avoid"}),e.jsx("div",{className:"space-y-3",children:["Using raw types: Pair instead of Pair<String, Integer>","Forgetting diamond operator: new Pair<>(), not new Pair()","Mixing type parameters: Pair<String, String> vs Pair<String, Integer>","Creating arrays of generic types: Pair<String, Integer>[]","Using instanceof with generic types: obj instanceof Pair<String, Integer>"].map((t,r)=>e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-6 h-6 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-red-600 dark:text-red-300 text-sm",children:"✗"})}),e.jsx("span",{className:"text-red-800 dark:text-red-300 text-sm",children:t})]},r))})]})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_1.3s_both] mb-16",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700",children:[e.jsxs("h3",{className:"text-2xl font-bold mb-6 flex items-center text-gray-800 dark:text-white",children:[e.jsx("span",{className:"w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-blue-600 dark:text-blue-300",children:"⚖️"})}),"Generic Class vs Regular Class: Comparison"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",children:[e.jsx("th",{className:"p-4 text-left border-b border-blue-200 dark:border-blue-800",children:"Aspect"}),e.jsx("th",{className:"p-4 text-left border-b border-blue-200 dark:border-blue-800 text-red-600 dark:text-red-400",children:"Regular Class"}),e.jsx("th",{className:"p-4 text-left border-b border-blue-200 dark:border-blue-800 text-green-600 dark:text-green-400",children:"Generic Class"})]})}),e.jsx("tbody",{children:[{aspect:"Type Safety",regular:"Runtime checking (ClassCastException)",generic:"Compile-time checking",regularBadge:"❌ Risky",genericBadge:"✅ Safe"},{aspect:"Code Reusability",regular:"Separate classes for each type",generic:"Single class for all types",regularBadge:"Duplicated",genericBadge:"Reusable"},{aspect:"Casting Required",regular:"Explicit casting everywhere",generic:"No casting needed",regularBadge:"Verbose",genericBadge:"Clean"},{aspect:"API Clarity",regular:"Object parameters/returns",generic:"Specific type parameters/returns",regularBadge:"Vague",genericBadge:"Clear"},{aspect:"Maintenance",regular:"Change affects all duplicate classes",generic:"Change in one place",regularBadge:"Difficult",genericBadge:"Easy"},{aspect:"Performance",regular:"Runtime type checking overhead",generic:"Compile-time resolution",regularBadge:"Slower",genericBadge:"Faster"},{aspect:"IDE Support",regular:"Limited type inference",generic:"Full type-aware features",regularBadge:"Basic",genericBadge:"Advanced"}].map((t,r)=>e.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300",children:[e.jsx("td",{className:"p-4 font-semibold text-gray-800 dark:text-white",children:t.aspect}),e.jsxs("td",{className:"p-4",children:[e.jsx("div",{className:"text-red-800 dark:text-red-300",children:t.regular}),e.jsx("div",{className:"text-xs px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded inline-block mt-1",children:t.regularBadge})]}),e.jsxs("td",{className:"p-4",children:[e.jsx("div",{className:"text-green-800 dark:text-green-300",children:t.generic}),e.jsx("div",{className:"text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded inline-block mt-1",children:t.genericBadge})]})]},r))})]})}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/10 p-5 rounded-xl border border-red-200 dark:border-red-800",children:[e.jsx("h4",{className:"font-bold text-red-700 dark:text-red-300 mb-3",children:"Before: Multiple Specific Classes"}),e.jsx(a,{code:`// Duplicate classes for each type
class StringBox {
    private String content;
    public void setContent(String content) { ... }
    public String getContent() { ... }
}

class IntegerBox {
    private Integer content;
    public void setContent(Integer content) { ... }
    public Integer getContent() { ... }
}

class StudentBox {
    private Student content;
    public void setContent(Student content) { ... }
    public Student getContent() { ... }
}

// Maintenance nightmare!
// Need to update ALL classes for any change`,language:"java",showLineNumbers:!0})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/10 p-5 rounded-xl border border-green-200 dark:border-green-800",children:[e.jsx("h4",{className:"font-bold text-green-700 dark:text-green-300 mb-3",children:"After: Single Generic Class"}),e.jsx(a,{code:`// One class handles all types
class Box<T> {
    private T content;
    public void setContent(T content) { ... }
    public T getContent() { ... }
}

// Usage with any type
Box<String> stringBox = new Box<>();
Box<Integer> integerBox = new Box<>();
Box<Student> studentBox = new Box<>();

// Single point of maintenance
// All types benefit from improvements`,language:"java",showLineNumbers:!0})]})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_1.5s_both] mb-16",children:e.jsxs("div",{className:"bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/10 dark:to-cyan-900/10 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-teal-300 dark:border-teal-800",children:[e.jsx("h3",{className:"text-2xl font-bold mb-8 text-gray-800 dark:text-white",children:"Best Practices for Generic Classes"}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-900 p-5 rounded-xl border border-teal-200 dark:border-teal-800",children:[e.jsx("h4",{className:"text-lg font-bold text-teal-700 dark:text-teal-300 mb-3",children:"Design Guidelines"}),e.jsx("div",{className:"space-y-4",children:["Start generic from the beginning - don't retrofit","Use descriptive type parameter names for complex scenarios","Keep generic classes focused on single responsibility","Document type parameter constraints clearly","Consider making generic classes immutable when possible","Use bounded type parameters to restrict valid types","Avoid raw types in new code - always specify type arguments"].map((t,r)=>e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-6 h-6 bg-teal-100 dark:bg-teal-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-teal-600 dark:text-teal-300 text-sm",children:r+1})}),e.jsx("span",{className:"text-teal-800 dark:text-teal-300",children:t})]},r))})]}),e.jsxs("div",{className:"bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20 p-5 rounded-xl border border-amber-200 dark:border-amber-800",children:[e.jsx("h4",{className:"text-lg font-bold text-amber-700 dark:text-amber-300 mb-3",children:"Performance Tips"}),e.jsx("div",{className:"space-y-3",children:["Generic classes have zero runtime overhead","Type erasure happens at compile time","No instanceof checks needed in generic code","Avoid creating arrays of generic types","Use collections instead of arrays for generic types","Consider type tokens for runtime type information"].map((t,r)=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-5 h-5 bg-amber-100 dark:bg-amber-800 rounded-full flex items-center justify-center mr-2 flex-shrink-0",children:e.jsx("span",{className:"text-amber-600 dark:text-amber-300 text-xs",children:"⚡"})}),e.jsx("span",{className:"text-amber-800 dark:text-amber-300 text-sm",children:t})]},r))})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-xl shadow-inner",children:[e.jsx("h4",{className:"text-lg font-bold mb-4 text-gray-800 dark:text-white",children:"Professional Example"}),e.jsx(a,{code:`// Professional-grade Generic Cache Class
// Used in Barrackpore University's Student Portal
public class GenericCache<KEY_TYPE, VALUE_TYPE> {
    private final Map<KEY_TYPE, CacheEntry<VALUE_TYPE>> cache;
    private final long defaultTtl; // Time-to-live in milliseconds
    
    // Static nested generic class
    private static class CacheEntry<VALUE_TYPE> {
        private final VALUE_TYPE value;
        private final long expiryTime;
        
        public CacheEntry(VALUE_TYPE value, long ttl) {
            this.value = value;
            this.expiryTime = System.currentTimeMillis() + ttl;
        }
        
        public boolean isExpired() {
            return System.currentTimeMillis() > expiryTime;
        }
        
        public VALUE_TYPE getValue() {
            return value;
        }
    }
    
    public GenericCache(long defaultTtl) {
        this.cache = new ConcurrentHashMap<>();
        this.defaultTtl = defaultTtl;
    }
    
    // Type-safe put method
    public void put(KEY_TYPE key, VALUE_TYPE value) {
        put(key, value, defaultTtl);
    }
    
    public void put(KEY_TYPE key, VALUE_TYPE value, long ttl) {
        cache.put(key, new CacheEntry<>(value, ttl));
    }
    
    // Type-safe get method
    public Optional<VALUE_TYPE> get(KEY_TYPE key) {
        CacheEntry<VALUE_TYPE> entry = cache.get(key);
        if (entry == null || entry.isExpired()) {
            cache.remove(key);
            return Optional.empty();
        }
        return Optional.of(entry.getValue());
    }
    
    // Generic method with wildcard
    public void putAll(Map<? extends KEY_TYPE, ? extends VALUE_TYPE> map) {
        map.forEach(this::put);
    }
    
    // Clear expired entries
    public void cleanup() {
        cache.entrySet().removeIf(entry -> entry.getValue().isExpired());
    }
}

// Usage in Student System
GenericCache<Integer, Student> studentCache = 
    new GenericCache<>(30 * 60 * 1000); // 30 minute TTL

// Cache student objects
studentCache.put(101, new Student("Swadeep", "CS"));
studentCache.put(102, new Student("Tuhina", "Math"));

// Type-safe retrieval
Optional<Student> student = studentCache.get(101);
if (student.isPresent()) {
    Student s = student.get(); // Type: Student
    System.out.println(s.getName());
}`,language:"java",showLineNumbers:!0})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_1.7s_both] mb-16",children:e.jsxs("div",{className:"bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border-2 border-amber-300 dark:border-amber-700 group",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300",children:e.jsx("span",{className:"text-2xl",children:"👨‍🏫"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Teacher's Note"}),e.jsx("p",{className:"text-amber-700 dark:text-amber-300",children:"Sukanta Hui • 27 Years Experience"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white/70 dark:bg-gray-900/70 p-5 rounded-xl border border-amber-200 dark:border-amber-800",children:[e.jsx("h4",{className:"font-bold text-lg mb-3 text-gray-800 dark:text-white",children:"The Blueprint Mindset:"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["When I first taught generics at Barrackpore College in 2005, I used this analogy: A generic class is like an ",e.jsx("strong",{children:"architect's blueprint"})," for a house. The blueprint (generic class) shows where walls, doors, and windows go, but doesn't specify the exact materials. When you build (instantiate), you choose: brick house (Box<String>), wooden house (Box<Integer>), or concrete house (Box<Student>). One blueprint, many specific houses!"]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-4 mt-6",children:[e.jsxs("div",{className:"p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg",children:[e.jsx("h5",{className:"font-bold text-emerald-700 dark:text-emerald-300 mb-2",children:"💡 Pro Tip for Beginners"}),e.jsxs("p",{className:"text-sm",children:["Start by identifying ",e.jsx("strong",{children:"data containers"})," in your code. If Debangshu from Shyamnagar has separate classes for StringList, IntegerList, StudentList - that's a perfect candidate for a generic class."]})]}),e.jsxs("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsx("h5",{className:"font-bold text-blue-700 dark:text-blue-300 mb-2",children:"🎯 Real-World Application"}),e.jsxs("p",{className:"text-sm",children:["In Ichapur's hospital system, we created ",e.jsx("code",{children:"MedicalRecord<T>"}),"that could store lab reports (String), patient vitals (Map), or scan images (Byte[]). One class reduced code duplication by ",e.jsx("strong",{children:"70%"}),"."]})]})]})]}),e.jsxs("div",{className:"flex items-center justify-between text-sm text-amber-700 dark:text-amber-400 mt-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Experience:"})," Designed 50+ generic classes for enterprise systems"]}),e.jsx("div",{className:"text-xs",children:"Contact: sukantahui@codernaccotax.co.in • 7003756860"})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_1.9s_both] mb-16",children:e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-blue-200 dark:border-blue-800",children:[e.jsxs("h3",{className:"text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center",children:[e.jsx("span",{className:"w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-blue-600 dark:text-blue-300",children:"💭"})}),"Think About This..."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white/70 dark:bg-gray-900/70 p-5 rounded-xl border border-blue-200 dark:border-blue-800",children:[e.jsxs("p",{className:"text-lg mb-4",children:[e.jsx("strong",{children:"Design Challenge:"})," Tuhina needs a system for Naihati College that stores:"]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{className:"p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg",children:[e.jsx("div",{className:"font-bold text-purple-700 dark:text-purple-300",children:"Student Grades"}),e.jsx("div",{className:"text-sm text-purple-600 dark:text-purple-400",children:"Map<String, Double>"})]}),e.jsxs("div",{className:"p-4 bg-green-100 dark:bg-green-900/30 rounded-lg",children:[e.jsx("div",{className:"font-bold text-green-700 dark:text-green-300",children:"Course Attendance"}),e.jsx("div",{className:"text-sm text-green-600 dark:text-green-400",children:"Map<String, List<Date>>"})]}),e.jsxs("div",{className:"p-4 bg-amber-100 dark:bg-amber-900/30 rounded-lg",children:[e.jsx("div",{className:"font-bold text-amber-700 dark:text-amber-300",children:"Exam Results"}),e.jsx("div",{className:"text-sm text-amber-600 dark:text-amber-400",children:"Map<String, Map<String, Integer>>"})]})]}),e.jsxs("div",{className:"bg-blue-100/50 dark:bg-blue-900/30 p-4 rounded-lg",children:[e.jsxs("p",{className:"text-blue-800 dark:text-blue-300 mb-2",children:[e.jsx("strong",{children:"Question:"})," Should she create separate container classes for each, or one generic class? What would the generic class look like?"]}),e.jsxs("p",{className:"text-sm text-blue-700 dark:text-blue-400",children:[e.jsx("strong",{children:"Try designing:"})," Create a ",e.jsx("code",{children:"CollegeContainer<K, V>"}),"that can handle all three scenarios. What methods would it need?"]})]})]}),e.jsxs("div",{className:"grid sm:grid-cols-1 gap-4 mt-6",children:[e.jsxs("div",{className:"p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800",children:[e.jsx("h5",{className:"font-bold text-indigo-700 dark:text-indigo-300 mb-2",children:"🔍 Debugging Exercise"}),e.jsx("p",{className:"text-sm",children:"Take a non-generic class from a legacy system. Add type parameters. How many compiler errors appear? Each error shows a type safety issue that was previously hidden."})]}),e.jsxs("div",{className:"p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800",children:[e.jsx("h5",{className:"font-bold text-teal-700 dark:text-teal-300 mb-2",children:"📈 Scalability Thinking"}),e.jsx("p",{className:"text-sm",children:'If Abhronila adds a new data type tomorrow (Faculty records), does your system need new container classes? With generics, the answer should be "no".'})]})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_2.1s_both]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-2xl font-bold mb-8 text-gray-800 dark:text-white",children:"What You've Learned About Generic Classes"}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400",children:"Key Concepts"}),["Generic classes are blueprints for type-safe containers","Type parameters (<T>) are placeholders for actual types","Each instance specifies concrete type arguments","Compiler enforces type consistency across all operations","Generic classes eliminate code duplication","Multiple type parameters allow complex data structures","Type erasure removes generic info at runtime (but keeps type safety)","Generic classes work with any type - built-in or custom"].map((t,r)=>e.jsxs("div",{className:"flex items-start mb-3 p-3 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg",children:[e.jsx("div",{className:"w-6 h-6 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-emerald-600 dark:text-emerald-300",children:r+1})}),e.jsx("span",{className:"text-emerald-800 dark:text-emerald-300",children:t})]},r))]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-bold mb-4 text-blue-600 dark:text-blue-400",children:"Syntax Essentials"}),["Declaration: class ClassName<T> { ... }","Multiple params: class Pair<K, V> { ... }","Type variables: private T content;","Generic methods: public T getContent() { ... }","Constructor: public Box(T content) { ... }","Instantiation: Box<String> box = new Box<>();","Diamond operator: new Box<>() infers type","Bounded types: class Box<T extends Number> (later topic)"].map((t,r)=>e.jsxs("div",{className:"flex items-start mb-3 p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg",children:[e.jsx("div",{className:"w-6 h-6 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-blue-600 dark:text-blue-300",children:"#"})}),e.jsx("code",{className:"text-blue-800 dark:text-blue-300 font-mono text-sm",children:t})]},r))]})]}),e.jsx("div",{className:"mt-8 pt-6 border-t border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-lg mb-2 text-gray-800 dark:text-white",children:"Next Topic Preview"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:["Next, we'll dive into ",e.jsx("strong",{children:'"Defining and Using Generic Classes"'})," - hands-on examples of creating and working with generic classes in real scenarios."]})]}),e.jsx("div",{className:"px-4 py-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-lg font-semibold",children:"Topic 4/24"})]})})]})})]}),e.jsxs("footer",{className:"mt-16 py-8 px-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400",children:[e.jsx("p",{className:"mb-2",children:"© 2024 Java Generics Masterclass • Building Type-Safe Containers"}),e.jsx("p",{className:"text-sm",children:"Examples from: Barrackpore University, Naihati College, Shyamnagar Library, Ichapur Hospital"})]})]});export{o as default};
