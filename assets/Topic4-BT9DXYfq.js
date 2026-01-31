import{j as e}from"./index-DdrZIREY.js";import{c as a}from"./clsx-B-dksMZM.js";import{J as s}from"./JavaCodeBlock-BAATJHld.js";import"./prism-BXnVCqBx.js";import"./browser--PeUOrNH.js";import"./prism-java-CQA27I6F.js";const x=()=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950/20 text-gray-800 dark:text-gray-200 transition-colors duration-500",children:[e.jsx("style",{children:`
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
          
          @keyframes codeFlow {
            0% {
              transform: translateX(-10px);
              opacity: 0.8;
            }
            50% {
              transform: translateX(0);
              opacity: 1;
            }
            100% {
              transform: translateX(-10px);
              opacity: 0.8;
            }
          }
          
          @keyframes syntaxHighlight {
            0%, 100% {
              background-color: rgba(99, 102, 241, 0.1);
            }
            50% {
              background-color: rgba(99, 102, 241, 0.3);
            }
          }
          
          @keyframes compileCheck {
            0% {
              transform: scale(0.9);
              opacity: 0;
            }
            70% {
              transform: scale(1.1);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          
          @keyframes errorPulse {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
            }
          }
        `}),e.jsx("header",{className:"relative overflow-hidden bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 dark:from-indigo-800 dark:via-blue-800 dark:to-violet-800 text-white pt-12 pb-16 px-6",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out]",children:[e.jsxs("div",{className:"inline-flex items-center px-4 py-2 mb-4 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium",children:[e.jsx("span",{className:"w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"}),"Java Generics Series • Topic 5"]}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 leading-tight",children:"Defining & Using Generic Classes"}),e.jsx("p",{className:"text-xl text-indigo-100 dark:text-indigo-200 max-w-3xl leading-relaxed",children:"From Theory to Practice - Step-by-step creation and usage of type-safe containers"})]}),e.jsx("div",{className:"mt-10 motion-safe:animate-[fadeSlideUp_1s_ease-out_0.3s_both]",children:e.jsx("div",{className:"max-w-5xl mx-auto",children:e.jsxs("svg",{viewBox:"0 0 900 220",className:"w-full h-auto","aria-label":"Development flow from generic class definition to usage",children:[e.jsxs("g",{children:[e.jsxs("g",{className:"group cursor-pointer motion-safe:animate-[codeFlow_3s_ease-in-out_infinite]",children:[e.jsx("rect",{x:"50",y:"30",width:"180",height:"80",rx:"10",fill:"#4F46E5",className:"group-hover:fill-indigo-400 transition-colors duration-300"}),e.jsx("text",{x:"140",y:"55",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Step 1: Define"}),e.jsx("rect",{x:"70",y:"65",width:"120",height:"30",rx:"5",fill:"#3730A3"}),e.jsx("text",{x:"130",y:"85",textAnchor:"middle",fill:"#A5B4FC",fontSize:"12",fontFamily:"monospace",children:"class Box<T>"})]}),e.jsx("path",{d:"M240,70 L290,70",fill:"none",stroke:"white",strokeWidth:"2",markerEnd:"url(#arrow)",children:e.jsx("animate",{attributeName:"stroke-dasharray",values:"0,100;50,50;0,100",dur:"2s",repeatCount:"indefinite"})}),e.jsxs("g",{className:"group cursor-pointer",style:{animationDelay:"0.3s"},children:[e.jsx("rect",{x:"310",y:"30",width:"180",height:"80",rx:"10",fill:"#7C3AED",className:"group-hover:fill-violet-400 transition-colors duration-300"}),e.jsx("text",{x:"400",y:"55",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Step 2: Implement"}),e.jsx("rect",{x:"330",y:"65",width:"140",height:"30",rx:"5",fill:"#5B21B6"}),e.jsx("text",{x:"400",y:"85",textAnchor:"middle",fill:"#DDD6FE",fontSize:"10",fontFamily:"monospace",children:"private T item;"})]}),e.jsx("path",{d:"M500,70 L550,70",fill:"none",stroke:"white",strokeWidth:"2",markerEnd:"url(#arrow)",children:e.jsx("animate",{attributeName:"stroke-dasharray",values:"0,100;50,50;0,100",dur:"2s",repeatCount:"indefinite",begin:"0.5s"})}),e.jsxs("g",{className:"group cursor-pointer motion-safe:animate-[compileCheck_2s_ease-in-out_infinite]",children:[e.jsx("rect",{x:"570",y:"30",width:"120",height:"80",rx:"10",fill:"#10B981",className:"group-hover:fill-emerald-400 transition-colors duration-300"}),e.jsx("text",{x:"630",y:"55",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Step 3: Compile"}),e.jsx("circle",{cx:"630",cy:"80",r:"20",fill:"#059669"}),e.jsx("text",{x:"630",y:"85",textAnchor:"middle",fill:"white",fontSize:"20",children:"✓"})]}),e.jsx("path",{d:"M700,70 L750,70",fill:"none",stroke:"white",strokeWidth:"2",markerEnd:"url(#arrow)",children:e.jsx("animate",{attributeName:"stroke-dasharray",values:"0,100;50,50;0,100",dur:"2s",repeatCount:"indefinite",begin:"1s"})}),e.jsxs("g",{className:"group cursor-pointer",children:[e.jsx("rect",{x:"770",y:"30",width:"120",height:"80",rx:"10",fill:"#F59E0B",className:"group-hover:fill-amber-400 transition-colors duration-300"}),e.jsx("text",{x:"830",y:"55",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Step 4: Use"}),e.jsx("rect",{x:"785",y:"65",width:"90",height:"30",rx:"5",fill:"#D97706"}),e.jsx("text",{x:"830",y:"85",textAnchor:"middle",fill:"white",fontSize:"10",fontFamily:"monospace",children:"Box<String>"})]})]}),e.jsxs("g",{children:[e.jsxs("g",{className:"opacity-70 hover:opacity-100 transition-opacity duration-300",children:[e.jsx("path",{d:"M100,140 L800,140",stroke:"#10B981",strokeWidth:"3",strokeDasharray:"5,5"}),[100,250,400,550,700,850].map((r,t)=>e.jsxs("g",{children:[e.jsx("circle",{cx:r,cy:"140",r:"8",fill:"#10B981"}),e.jsxs("text",{x:r,y:"130",textAnchor:"middle",fill:"#10B981",fontSize:"8",children:["Check ",t+1]})]},t))]}),e.jsxs("g",{className:"motion-safe:animate-[errorPulse_2s_ease-in-out_infinite]",style:{animationDelay:"1.5s"},children:[e.jsx("rect",{x:"350",y:"170",width:"200",height:"30",rx:"5",fill:"#EF4444"}),e.jsx("text",{x:"450",y:"190",textAnchor:"middle",fill:"white",fontSize:"10",children:"Compile-time Type Error"}),e.jsx("line",{x1:"450",y1:"170",x2:"450",y2:"140",stroke:"#EF4444",strokeWidth:"2",strokeDasharray:"3,3"})]})]}),e.jsxs("g",{className:"opacity-80 hover:opacity-100 transition-opacity duration-300",children:[e.jsx("rect",{x:"100",y:"180",width:"80",height:"30",rx:"5",fill:"#3B82F6"}),e.jsx("text",{x:"140",y:"200",textAnchor:"middle",fill:"white",fontSize:"10",children:"String"}),e.jsx("rect",{x:"250",y:"180",width:"80",height:"30",rx:"5",fill:"#EF4444"}),e.jsx("text",{x:"290",y:"200",textAnchor:"middle",fill:"white",fontSize:"10",children:"Integer"}),e.jsx("rect",{x:"400",y:"180",width:"80",height:"30",rx:"5",fill:"#8B5CF6"}),e.jsx("text",{x:"440",y:"200",textAnchor:"middle",fill:"white",fontSize:"10",children:"Double"}),e.jsx("rect",{x:"550",y:"180",width:"80",height:"30",rx:"5",fill:"#10B981"}),e.jsx("text",{x:"590",y:"200",textAnchor:"middle",fill:"white",fontSize:"10",children:"Student"}),e.jsx("rect",{x:"700",y:"180",width:"80",height:"30",rx:"5",fill:"#F59E0B"}),e.jsx("text",{x:"740",y:"200",textAnchor:"middle",fill:"white",fontSize:"10",children:"List<T>"})]}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"white"})})})]})})})]})}),e.jsxs("main",{className:"max-w-6xl mx-auto px-6 py-12",children:[e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_0.5s_both] mb-16",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 hover:scale-[1.01] border border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center mr-4",children:e.jsx("span",{className:"text-2xl font-bold text-indigo-600 dark:text-indigo-300",children:"📝"})}),e.jsx("h2",{className:"text-3xl font-bold text-gray-800 dark:text-white",children:"Step 1: Defining Generic Classes"})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none",children:[e.jsxs("p",{className:"text-lg leading-relaxed",children:["Defining a generic class involves specifying ",e.jsx("strong",{children:"type parameters"})," in angle brackets after the class name. These parameters act as placeholders that get replaced with actual types when the class is instantiated."]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 pl-6 py-4 my-6 rounded-r-lg",children:e.jsxs("p",{className:"text-indigo-800 dark:text-indigo-200 italic",children:[e.jsx("strong",{children:"Think Like a Developer:"})," When Abhronila from Shyamnagar defines",e.jsx("code",{children:" class Container<ITEM_TYPE>"}),`, she's saying: "This container can hold`,e.jsx("strong",{children:" any single type"}),` of item. You tell me what type when you create it, and I'll ensure it only holds that type."`]})}),e.jsx("h3",{className:"text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-white",children:"Basic Definition Syntax"}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-8 my-8",children:[e.jsxs("div",{className:"bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all duration-300",children:[e.jsx("h4",{className:"text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-3",children:"Simple Generic Class"}),e.jsx(s,{code:`// Basic generic class with one type parameter
public class Box<T> {
    // Field using type parameter
    private T content;
    
    // Constructor using type parameter
    public Box(T content) {
        this.content = content;
    }
    
    // Getter returns type T
    public T getContent() {
        return content;
    }
    
    // Setter accepts type T
    public void setContent(T content) {
        this.content = content;
    }
    
    // Method using type parameter
    public boolean isEmpty() {
        return content == null;
    }
    
    // Static method (note: cannot use T here!)
    public static <U> Box<U> createEmpty() {
        return new Box<>(null);
    }
}`,language:"java",showLineNumbers:!0}),e.jsx("div",{className:"mt-4 p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg",children:e.jsxs("p",{className:"text-indigo-800 dark:text-indigo-300 text-sm",children:[e.jsx("strong",{children:"Key Points:"}),"Type parameter ",e.jsx("code",{children:"T"})," can be used in fields, constructors, method parameters, and return types."]})})]}),e.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300",children:[e.jsx("h4",{className:"text-xl font-bold text-purple-700 dark:text-purple-300 mb-3",children:"Multiple Type Parameters"}),e.jsx(s,{code:`// Generic class with multiple type parameters
public class KeyValuePair<KEY_TYPE, VALUE_TYPE> {
    // Fields using different type parameters
    private KEY_TYPE key;
    private VALUE_TYPE value;
    
    // Constructor with multiple type parameters
    public KeyValuePair(KEY_TYPE key, VALUE_TYPE value) {
        this.key = key;
        this.value = value;
    }
    
    // Getters with specific return types
    public KEY_TYPE getKey() {
        return key;
    }
    
    public VALUE_TYPE getValue() {
        return value;
    }
    
    // Setters enforcing type safety
    public void setKey(KEY_TYPE key) {
        this.key = key;
    }
    
    public void setValue(VALUE_TYPE value) {
        this.value = value;
    }
    
    // Method using both types
    public String describe() {
        return "Key: " + key + ", Value: " + value;
    }
    
    // Swap key and value (returns new pair)
    public KeyValuePair<VALUE_TYPE, KEY_TYPE> swap() {
        return new KeyValuePair<>(value, key);
    }
}`,language:"java",showLineNumbers:!0}),e.jsx("div",{className:"mt-4 p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg",children:e.jsxs("p",{className:"text-purple-800 dark:text-purple-300 text-sm",children:[e.jsx("strong",{children:"Note:"})," Multiple type parameters allow creating complex data structures like pairs, tuples, or maps."]})})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-300 dark:border-blue-800",children:[e.jsx("h4",{className:"text-xl font-bold mb-4 text-gray-800 dark:text-white",children:"Common Generic Class Patterns"}),e.jsx("div",{className:"grid md:grid-cols-3 gap-4",children:[{name:"Container/Wrapper",desc:"Holds single item of any type",example:"Box<T>, Container<T>, Wrapper<T>",useCase:"Data encapsulation"},{name:"Pair/Tuple",desc:"Holds two related items of possibly different types",example:"Pair<K,V>, Tuple2<T,U>",useCase:"Key-value storage"},{name:"Node/Link",desc:"Linked data structure nodes",example:"Node<T>, LinkedListNode<T>",useCase:"Data structures"},{name:"Result/Response",desc:"Wraps result with status/metadata",example:"Result<T>, ApiResponse<T>",useCase:"API responses"},{name:"Factory/Builder",desc:"Creates instances of type T",example:"Factory<T>, Builder<T>",useCase:"Object creation"},{name:"Repository/DAO",desc:"Data access for type T",example:"Repository<T>, Dao<T>",useCase:"Database access"}].map((r,t)=>e.jsxs("div",{className:"bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300",children:[e.jsx("div",{className:"font-bold text-blue-700 dark:text-blue-300 mb-2",children:r.name}),e.jsx("p",{className:"text-sm text-blue-800/70 dark:text-blue-400/70 mb-2",children:r.desc}),e.jsx("code",{className:"text-xs bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded block mb-2",children:r.example}),e.jsx("div",{className:"text-xs text-blue-600 dark:text-blue-500",children:r.useCase})]},t))})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_0.7s_both] mb-16",children:e.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/10 dark:to-green-900/10 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-emerald-300 dark:border-emerald-800",children:[e.jsxs("h3",{className:"text-2xl font-bold mb-6 flex items-center text-gray-800 dark:text-white",children:[e.jsx("span",{className:"w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-emerald-600 dark:text-emerald-300",children:"⚙️"})}),"Step 2: Implementation Details & Internal Mechanics"]}),e.jsxs("div",{className:"space-y-8",children:[e.jsx("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-xl shadow-inner",children:e.jsxs("div",{className:"grid lg:grid-cols-1 gap-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-bold mb-4 text-gray-800 dark:text-white",children:"Field & Constructor Implementation"}),e.jsx(s,{code:`// Complete Generic Stack Implementation
// Used in Barrackpore University's algorithm course
public class GenericStack<T> {
    // Generic array - note the workaround
    private T[] elements;
    private int top;
    private final int capacity;
    
    // Constructor with generic array creation
    @SuppressWarnings("unchecked")
    public GenericStack(int capacity) {
        this.capacity = capacity;
        // Cannot do: new T[capacity]
        // Workaround: Create Object array and cast
        this.elements = (T[]) new Object[capacity];
        this.top = -1;
    }
    
    // Type-safe push operation
    public void push(T item) {
        if (isFull()) {
            throw new IllegalStateException("Stack is full");
        }
        elements[++top] = item; // Type safety maintained
    }
    
    // Type-safe pop operation
    public T pop() {
        if (isEmpty()) {
            throw new IllegalStateException("Stack is empty");
        }
        T item = elements[top];
        elements[top--] = null; // Avoid memory leak
        return item; // Returns type T - no casting!
    }
    
    // Type-safe peek
    public T peek() {
        if (isEmpty()) {
            throw new IllegalStateException("Stack is empty");
        }
        return elements[top];
    }
    
    public boolean isEmpty() {
        return top == -1;
    }
    
    public boolean isFull() {
        return top == capacity - 1;
    }
    
    public int size() {
        return top + 1;
    }
    
    // Generic method inside generic class
    public <U> GenericStack<U> transform(Function<T, U> transformer) {
        GenericStack<U> result = new GenericStack<>(this.capacity);
        for (int i = 0; i <= top; i++) {
            result.push(transformer.apply(elements[i]));
        }
        return result;
    }
}`,language:"java",showLineNumbers:!0})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-emerald-100 dark:bg-emerald-900/20 p-5 rounded-xl border border-emerald-200 dark:border-emerald-700",children:[e.jsx("h5",{className:"font-bold text-emerald-800 dark:text-emerald-300 mb-3",children:"Implementation Challenges & Solutions"}),e.jsx("div",{className:"space-y-4",children:[{challenge:"Generic Array Creation",solution:"Create Object[] and cast: (T[]) new Object[size]",warning:'@SuppressWarnings("unchecked") needed'},{challenge:"Static Fields",solution:"Cannot use T in static context - use separate generic method",warning:"static T field; // Compile error"},{challenge:"Instanceof with Generics",solution:"Use raw types: obj instanceof GenericStack",warning:"obj instanceof GenericStack<String> // Error"},{challenge:"Primitive Types",solution:"Use wrapper classes: Integer, Double, etc.",warning:"GenericStack<int> // Error, use GenericStack<Integer>"}].map((r,t)=>e.jsxs("div",{className:"p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-emerald-700 dark:text-emerald-400",children:r.challenge}),e.jsxs("div",{className:"text-sm text-emerald-800/70 dark:text-emerald-400/70 mt-1",children:[e.jsx("strong",{children:"Solution:"})," ",r.solution]}),e.jsx("div",{className:"text-xs text-amber-700 dark:text-amber-400 mt-1",children:r.warning})]},t))})]}),e.jsxs("div",{className:"bg-blue-100 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-700",children:[e.jsx("h5",{className:"font-bold text-blue-800 dark:text-blue-300 mb-3",children:"Memory & Performance Considerations"}),e.jsx("div",{className:"space-y-3",children:["Type erasure: Generic info removed at runtime","No runtime overhead for type safety","Cast operations eliminated at compile time","Array creation workaround has minimal overhead","Collections preferred over arrays for complex types"].map((r,t)=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-5 h-5 bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center mr-2 flex-shrink-0",children:e.jsx("span",{className:"text-blue-600 dark:text-blue-300 text-xs",children:"⚡"})}),e.jsx("span",{className:"text-blue-800 dark:text-blue-300 text-sm",children:r})]},t))})]})]})]})}),e.jsxs("div",{className:"bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-amber-300 dark:border-amber-800",children:[e.jsx("h4",{className:"text-xl font-bold mb-4 text-gray-800 dark:text-white",children:"Understanding Type Erasure"}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-amber-700 dark:text-amber-300 mb-2",children:"Source Code (Compile Time)"}),e.jsxs("div",{className:"bg-amber-100 dark:bg-amber-900/30 p-4 rounded-lg font-mono text-sm",children:[e.jsx("div",{className:"text-amber-800 dark:text-amber-300",children:"// Generic class definition"}),e.jsxs("div",{className:"text-amber-800 dark:text-amber-300",children:["public class Container<T> ","{"]}),e.jsx("div",{className:"text-amber-800 dark:text-amber-300 ml-4",children:"private T item;"}),e.jsxs("div",{className:"text-amber-800 dark:text-amber-300 ml-4",children:["public T getItem() ","{"]}),e.jsx("div",{className:"text-amber-800 dark:text-amber-300 ml-8",children:"return item;"}),e.jsx("div",{className:"text-amber-800 dark:text-amber-300 ml-4",children:"}"}),e.jsx("div",{className:"text-amber-800 dark:text-amber-300",children:"}"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-amber-700 dark:text-amber-300 mb-2",children:"After Type Erasure (Runtime)"}),e.jsxs("div",{className:"bg-amber-100 dark:bg-amber-900/30 p-4 rounded-lg font-mono text-sm",children:[e.jsx("div",{className:"text-amber-800 dark:text-amber-300",children:"// Type T replaced with Object"}),e.jsxs("div",{className:"text-amber-800 dark:text-amber-300",children:["public class Container ","{"]}),e.jsx("div",{className:"text-amber-800 dark:text-amber-300 ml-4",children:"private Object item;"}),e.jsxs("div",{className:"text-amber-800 dark:text-amber-300 ml-4",children:["public Object getItem() ","{"]}),e.jsx("div",{className:"text-amber-800 dark:text-amber-300 ml-8",children:"return item;"}),e.jsx("div",{className:"text-amber-800 dark:text-amber-300 ml-4",children:"}"}),e.jsx("div",{className:"text-amber-800 dark:text-amber-300",children:"}"})]})]})]}),e.jsxs("p",{className:"text-sm text-amber-800 dark:text-amber-400 mt-4",children:[e.jsx("strong",{children:"Key Insight:"})," Type erasure happens at compile time. The compiler inserts necessary casts in client code, so runtime still maintains type safety."]})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_0.9s_both] mb-16",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700",children:[e.jsxs("h3",{className:"text-2xl font-bold mb-6 flex items-center text-gray-800 dark:text-white",children:[e.jsx("span",{className:"w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-green-600 dark:text-green-300",children:"🔍"})}),"Step 3: Compilation Process & Type Checking"]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 p-6 rounded-xl border border-green-300 dark:border-green-800",children:[e.jsx("h4",{className:"text-xl font-bold mb-4 text-gray-800 dark:text-white",children:"How the Compiler Checks Generic Classes"}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-8",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h5",{className:"font-bold text-green-700 dark:text-green-300 mb-2",children:"Compile-Time Type Checking"}),e.jsx(s,{code:`// Compiler analyzes generic usage
public class CompilationExample {
    public static void main(String[] args) {
        // Create specific instances
        Box<String> stringBox = new Box<>("Hello");
        Box<Integer> integerBox = new Box<>(42);
        
        // ✅ VALID: Type matches
        String text = stringBox.getContent();
        Integer number = integerBox.getContent();
        
        // ❌ COMPILE-TIME ERRORS:
        // 1. Wrong type assignment
        // Integer wrong1 = stringBox.getContent(); 
        // Error: String cannot be converted to Integer
        
        // 2. Wrong type passed to method
        // stringBox.setContent(123);
        // Error: int cannot be converted to String
        
        // 3. Raw type warning
        Box rawBox = new Box("Raw"); // Warning: raw type
        // Object obj = rawBox.getContent(); // OK but unsafe
        
        // 4. Type inference with diamond operator
        Box<String> inferredBox = new Box<>();
        // Compiler infers Box<String> from variable type
    }
}`,language:"java",showLineNumbers:!0})]}),e.jsxs("div",{className:"p-4 bg-green-100 dark:bg-green-900/30 rounded-lg",children:[e.jsx("h6",{className:"font-bold text-green-800 dark:text-green-300 mb-2",children:"Compiler's Job:"}),e.jsxs("ul",{className:"text-sm text-green-800 dark:text-green-300 space-y-1",children:[e.jsx("li",{children:"• Verify type arguments match type parameters"}),e.jsx("li",{children:"• Insert necessary casts (invisible to developer)"}),e.jsx("li",{children:"• Check generic method invocations"}),e.jsx("li",{children:"• Ensure type consistency throughout usage"})]})]})]}),e.jsx("div",{children:e.jsxs("div",{className:"mb-6",children:[e.jsx("h5",{className:"font-bold text-red-700 dark:text-red-300 mb-2",children:"Error Messages & How to Fix Them"}),e.jsx("div",{className:"space-y-4",children:[{error:"incompatible types",cause:"Assigning wrong type to generic variable",fix:"Check type arguments match",example:"Box<String> box = new Box<Integer>();"},{error:"unchecked conversion",cause:"Using raw types without warnings",fix:"Specify type arguments",example:"Box box = new Box(); → Box<String> box = new Box<>();"},{error:"type parameter cannot be instantiated",cause:"Trying to create instance of type parameter",fix:"Use reflection or factory pattern",example:"new T(); // Error"},{error:"generic array creation",cause:"Creating array of generic type",fix:"Use collection or Object[] with cast",example:"T[] array = new T[10]; // Error"}].map((r,t)=>e.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800",children:[e.jsx("div",{className:"font-bold text-red-700 dark:text-red-300",children:r.error}),e.jsxs("div",{className:"text-sm text-red-800/70 dark:text-red-400/70 mt-1",children:[e.jsx("strong",{children:"Cause:"})," ",r.cause]}),e.jsxs("div",{className:"text-sm text-green-700 dark:text-green-400 mt-1",children:[e.jsx("strong",{children:"Fix:"})," ",r.fix]}),e.jsx("code",{className:"text-xs bg-red-100 dark:bg-red-900/50 px-2 py-1 rounded block mt-2",children:r.example})]},t))})]})})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-300 dark:border-blue-800",children:[e.jsx("h4",{className:"text-xl font-bold mb-4 text-gray-800 dark:text-white",children:"IDE Support for Generic Classes"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg text-center",children:[e.jsx("div",{className:"text-3xl mb-2",children:"✨"}),e.jsx("div",{className:"font-bold text-blue-700 dark:text-blue-300",children:"Type Inference"}),e.jsx("div",{className:"text-sm text-blue-800/70 dark:text-blue-400/70 mt-2",children:"IDE suggests type arguments based on context"})]}),e.jsxs("div",{className:"bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg text-center",children:[e.jsx("div",{className:"text-3xl mb-2",children:"🔧"}),e.jsx("div",{className:"font-bold text-blue-700 dark:text-blue-300",children:"Quick Fixes"}),e.jsx("div",{className:"text-sm text-blue-800/70 dark:text-blue-400/70 mt-2",children:"Automatic fixes for generic-related errors"})]}),e.jsxs("div",{className:"bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg text-center",children:[e.jsx("div",{className:"text-3xl mb-2",children:"📖"}),e.jsx("div",{className:"font-bold text-blue-700 dark:text-blue-300",children:"Documentation"}),e.jsx("div",{className:"text-sm text-blue-800/70 dark:text-blue-400/70 mt-2",children:"Shows type parameters in tooltips"})]})]}),e.jsxs("div",{className:"mt-6 bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-3 h-3 bg-red-500 rounded-full mr-2"}),e.jsx("div",{className:"w-3 h-3 bg-yellow-500 rounded-full mr-2"}),e.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full mr-2"}),e.jsx("span",{className:"text-gray-400",children:"IDE - IntelliJ/Eclipse"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-green-400",children:"Box<String>"})," box = ",e.jsx("span",{className:"text-yellow-300",children:"new Box<>"}),'("Hello");']}),e.jsx("div",{className:"text-gray-500",children:'// ^ IDE infers Box<String> from "Hello"'}),e.jsxs("div",{className:"mt-2",children:[e.jsx("span",{className:"text-blue-300",children:"box.setContent"}),"(",e.jsx("span",{className:"text-red-400",children:"123"}),");"]}),e.jsx("div",{className:"text-red-400",children:'// ^ IDE shows red underline: "setContent(java.lang.String)"'})]})]})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_1.1s_both] mb-16",children:e.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-orange-300 dark:border-orange-800",children:[e.jsx("h3",{className:"text-2xl font-bold mb-8 text-gray-800 dark:text-white",children:"Step 4: Using Generic Classes in Practice"}),e.jsxs("div",{className:"grid lg:grid-cols-1 gap-8",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-xl shadow-inner",children:[e.jsx("h4",{className:"text-xl font-bold mb-4 text-gray-800 dark:text-white",children:"Basic Usage Patterns"}),e.jsx(s,{code:`// Practical Usage Examples from Naihati College
public class GenericClassUsage {
    
    public static void main(String[] args) {
        // 1. Simple Box usage
        Box<String> messageBox = new Box<>("Welcome to Barrackpore");
        String message = messageBox.getContent(); // Type: String
        messageBox.setContent("Updated message");
        
        // 2. Stack usage (from earlier example)
        GenericStack<Integer> numberStack = new GenericStack<>(10);
        numberStack.push(10);
        numberStack.push(20);
        numberStack.push(30);
        
        int topNumber = numberStack.peek(); // Type: Integer
        int popped = numberStack.pop();     // Type: Integer
        
        // 3. Pair usage with different types
        Pair<String, Integer> studentGrade = 
            new Pair<>("Swadeep", 85);
        String studentName = studentGrade.getFirst();
        int grade = studentGrade.getValue();
        
        // 4. Complex: Stack of Pairs
        GenericStack<Pair<String, Double>> gradeStack = 
            new GenericStack<>(50);
        gradeStack.push(new Pair<>("Math", 92.5));
        gradeStack.push(new Pair<>("Science", 88.0));
        
        // 5. Type inference with methods
        Box<String> inferredBox = createBox("Inferred type");
        
        // 6. Wildcard usage (advanced - next topic)
        List<Box<String>> stringBoxes = new ArrayList<>();
        processBoxes(stringBoxes);
    }
    
    // Generic method creating Box instances
    public static <T> Box<T> createBox(T content) {
        return new Box<>(content);
    }
    
    // Method using wildcards
    public static void processBoxes(List<? extends Box<?>> boxes) {
        // Process any Box of any type
    }
    
    // Real-world scenario: Student Record System
    public static class StudentRecordSystem {
        private Map<Integer, Box<Student>> studentRecords;
        
        public void addStudentRecord(int id, Student student) {
            Box<Student> record = new Box<>(student);
            studentRecords.put(id, record);
        }
        
        public Student getStudent(int id) {
            Box<Student> record = studentRecords.get(id);
            return record != null ? record.getContent() : null;
        }
    }
}`,language:"java",showLineNumbers:!0})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700",children:[e.jsx("h5",{className:"font-bold text-orange-800 dark:text-orange-300 mb-4",children:"Real-World Application: School System"}),e.jsx("div",{className:"space-y-4",children:[{component:"GradeBook<T>",purpose:"Store grades of any type (Double, String, Enum)",example:"GradeBook<Double> mathGrades"},{component:"AttendanceRecord<D, S>",purpose:"Map dates to student attendance",example:"AttendanceRecord<LocalDate, Boolean>"},{component:"ResourcePool<R>",purpose:"Manage reusable resources",example:"ResourcePool<DatabaseConnection>"},{component:"Validator<T>",purpose:"Validate objects of type T",example:"Validator<Student> studentValidator"},{component:"Transformer<I, O>",purpose:"Convert between types",example:"Transformer<String, Integer> parser"}].map((r,t)=>e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-orange-200 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-300",children:[e.jsx("div",{className:"font-bold text-orange-700 dark:text-orange-300 mb-1",children:r.component}),e.jsx("div",{className:"text-sm text-orange-800/70 dark:text-orange-400/70 mb-2",children:r.purpose}),e.jsx("code",{className:"text-xs bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded",children:r.example})]},t))})]}),e.jsxs("div",{className:"bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-rose-200 dark:border-rose-700",children:[e.jsx("h5",{className:"font-bold text-rose-800 dark:text-rose-300 mb-4",children:"Common Usage Mistakes & Fixes"}),e.jsx("div",{className:"space-y-3",children:["Mistake: Using raw types instead of specifying type arguments","Fix: Always use Box<String> instead of Box","Mistake: Forgetting diamond operator <>","Fix: Use new Box<>() not new Box<String>()","Mistake: Trying to create generic array","Fix: Use ArrayList<Box<String>> instead of Box<String>[]","Mistake: Using instanceof with parameterized type","Fix: Use raw type: obj instanceof Box","Mistake: Ignoring compiler warnings","Fix: Address all unchecked warnings"].map((r,t)=>e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:a("w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0",t%2===0?"bg-rose-100 dark:bg-rose-800":"bg-green-100 dark:bg-green-800"),children:e.jsx("span",{className:a(t%2===0?"text-rose-600 dark:text-rose-300":"text-green-600 dark:text-green-300","text-sm"),children:t%2===0?"✗":"✓"})}),e.jsx("span",{className:a(t%2===0?"text-rose-800 dark:text-rose-300":"text-green-800 dark:text-green-300","text-sm"),children:r})]},t))})]})]})]}),e.jsxs("div",{className:"mt-8 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-violet-300 dark:border-violet-800",children:[e.jsx("h4",{className:"text-xl font-bold mb-4 text-gray-800 dark:text-white",children:"Advanced Usage Patterns"}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6",children:[e.jsx("div",{children:e.jsx(s,{code:`// 1. Nested Generics
List<Box<String>> listOfBoxes = new ArrayList<>();
listOfBoxes.add(new Box<>("Item 1"));
listOfBoxes.add(new Box<>("Item 2"));

// Type-safe processing
for (Box<String> box : listOfBoxes) {
    String content = box.getContent(); // Type: String
}

// 2. Generic Class as Type Parameter
Map<String, Box<Integer>> studentScores = new HashMap<>();
studentScores.put("Swadeep", new Box<>(85));
studentScores.put("Tuhina", new Box<>(92));

// 3. Method Chaining with Generics
ApiResponse<List<Student>> response = studentService
    .getAllStudents()
    .filter(Student::isActive)
    .transformToList();

// 4. Factory Pattern with Generics
StudentFactory<Undergraduate> undergradFactory = 
    new StudentFactory<>(Undergraduate.class);
Undergraduate student = undergradFactory.create("Abhronila");

// 5. Builder Pattern with Generics
QueryBuilder<Student> builder = new QueryBuilder<Student>()
    .where("age", ">", 18)
    .orderBy("name")
    .limit(100);
List<Student> students = builder.execute();`,language:"java",showLineNumbers:!0})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg",children:[e.jsx("h6",{className:"font-bold text-violet-700 dark:text-violet-300 mb-2",children:"Design Patterns with Generics"}),e.jsxs("ul",{className:"text-sm text-violet-800 dark:text-violet-400 space-y-2",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Factory Pattern:"})," ",e.jsx("code",{children:"Factory<T>"})," creates instances of T"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Builder Pattern:"})," ",e.jsx("code",{children:"Builder<T>"})," constructs complex T objects"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Repository Pattern:"})," ",e.jsx("code",{children:"Repository<T>"})," handles persistence of T"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Strategy Pattern:"})," ",e.jsx("code",{children:"Strategy<T>"})," implements algorithms for T"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Observer Pattern:"})," ",e.jsx("code",{children:"Observer<T>"})," observes events of type T"]})]})]}),e.jsxs("div",{className:"p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg",children:[e.jsx("h6",{className:"font-bold text-violet-700 dark:text-violet-300 mb-2",children:"Performance Benefits"}),e.jsxs("div",{className:"text-sm text-violet-800 dark:text-violet-400 space-y-1",children:[e.jsx("div",{children:"• Eliminates runtime type checking"}),e.jsx("div",{children:"• Reduces explicit casting overhead"}),e.jsx("div",{children:"• Enables better JIT optimization"}),e.jsx("div",{children:"• Reduces memory footprint for type information"})]})]})]})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_1.3s_both] mb-16",children:e.jsxs("div",{className:"bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border-2 border-amber-300 dark:border-amber-700 group",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300",children:e.jsx("span",{className:"text-2xl",children:"👨‍🏫"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Teacher's Note"}),e.jsx("p",{className:"text-amber-700 dark:text-amber-300",children:"Sukanta Hui • 27 Years Experience"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white/70 dark:bg-gray-900/70 p-5 rounded-xl border border-amber-200 dark:border-amber-800",children:[e.jsx("h4",{className:"font-bold text-lg mb-3 text-gray-800 dark:text-white",children:"The Development Workflow Mindset:"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["When I train developers at Barrackpore Tech Park, I emphasize this workflow:",e.jsx("strong",{children:" Define → Implement → Compile → Use"}),". Each step has specific goals:"]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-6",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-bold text-blue-600 dark:text-blue-400 mb-2",children:"Define Phase (Planning)"}),e.jsxs("ul",{className:"text-sm text-gray-700 dark:text-gray-400 space-y-1",children:[e.jsx("li",{children:'• Ask: "What types will this work with?"'}),e.jsx("li",{children:"• Choose meaningful type parameter names"}),e.jsx("li",{children:"• Consider future extensibility"}),e.jsxs("li",{children:["• Example: Debangshu needs ",e.jsx("code",{children:"GradeContainer<GRADE_TYPE>"})]})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-bold text-green-600 dark:text-green-400 mb-2",children:"Compile Phase (Verification)"}),e.jsxs("ul",{className:"text-sm text-gray-700 dark:text-gray-400 space-y-1",children:[e.jsx("li",{children:"• Treat warnings as errors"}),e.jsx("li",{children:"• Verify type consistency"}),e.jsx("li",{children:"• Test with different type arguments"}),e.jsxs("li",{children:["• Example: Does ",e.jsx("code",{children:"GradeContainer<String>"}),' work with "A+"?']})]})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg",children:[e.jsx("h5",{className:"font-bold text-indigo-700 dark:text-indigo-300 mb-2",children:"💡 Classroom Exercise"}),e.jsx("p",{className:"text-sm text-indigo-800 dark:text-indigo-400",children:"Take Swadeep's student management system. Identify 3 container classes that should be generic. For each, write the class definition, implement it, compile it, and write usage examples. Notice how many type safety issues the compiler catches!"})]})]}),e.jsxs("div",{className:"flex items-center justify-between text-sm text-amber-700 dark:text-amber-400 mt-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Real Project:"})," Led generic class migration for Ichapur Hospital (2006)"]}),e.jsx("div",{className:"text-xs",children:"Contact: sukantahui@codernaccotax.co.in • 7003756860"})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_1.5s_both] mb-16",children:e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-blue-200 dark:border-blue-800",children:[e.jsxs("h3",{className:"text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center",children:[e.jsx("span",{className:"w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3",children:e.jsx("span",{className:"text-blue-600 dark:text-blue-300",children:"💭"})}),"Think About This..."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white/70 dark:bg-gray-900/70 p-5 rounded-xl border border-blue-200 dark:border-blue-800",children:[e.jsxs("p",{className:"text-lg mb-4",children:[e.jsx("strong",{children:"Development Challenge:"})," Tuhina is building a library system for Naihati College. She needs containers for:"]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{className:"p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg",children:[e.jsx("div",{className:"font-bold text-purple-700 dark:text-purple-300",children:"Books"}),e.jsx("div",{className:"text-sm text-purple-600 dark:text-purple-400",children:"String titles, ISBN, Author"})]}),e.jsxs("div",{className:"p-4 bg-green-100 dark:bg-green-900/30 rounded-lg",children:[e.jsx("div",{className:"font-bold text-green-700 dark:text-green-300",children:"Members"}),e.jsx("div",{className:"text-sm text-green-600 dark:text-green-400",children:"Student/Faculty objects"})]}),e.jsxs("div",{className:"p-4 bg-amber-100 dark:bg-amber-900/30 rounded-lg",children:[e.jsx("div",{className:"font-bold text-amber-700 dark:text-amber-300",children:"Transactions"}),e.jsx("div",{className:"text-sm text-amber-600 dark:text-amber-400",children:"Book + Member + Date"})]})]}),e.jsxs("div",{className:"bg-blue-100/50 dark:bg-blue-900/30 p-4 rounded-lg",children:[e.jsxs("p",{className:"text-blue-800 dark:text-blue-300 mb-2",children:[e.jsx("strong",{children:"Question:"})," Should she create separate container classes or generic ones? Design a generic ",e.jsx("code",{children:"LibraryContainer<ITEM_TYPE>"})," that can handle all three."]}),e.jsxs("p",{className:"text-sm text-blue-700 dark:text-blue-400",children:[e.jsx("strong",{children:"Consider:"})," What methods would work for all types? What type-specific methods would need to be in subclasses or use different approaches?"]})]}),e.jsxs("div",{className:"mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg",children:[e.jsx("h5",{className:"font-bold text-emerald-700 dark:text-emerald-300 mb-2",children:"🧪 Compilation Test"}),e.jsxs("p",{className:"text-sm text-emerald-800 dark:text-emerald-400",children:["Write your generic class. Then try to use it incorrectly:",e.jsx("code",{children:" LibraryContainer<String> container = new LibraryContainer<Integer>();"}),"Watch the compiler catch the error. This is type safety in action!"]})]})]}),e.jsxs("div",{className:"grid sm:grid-cols-1 gap-4 mt-6",children:[e.jsxs("div",{className:"p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800",children:[e.jsx("h5",{className:"font-bold text-indigo-700 dark:text-indigo-300 mb-2",children:"🔍 Code Review Exercise"}),e.jsx("p",{className:"text-sm",children:"Review a colleague's non-generic container class. Identify all explicit casts. Each cast represents a potential runtime error. Propose a generic version."})]}),e.jsxs("div",{className:"p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800",children:[e.jsx("h5",{className:"font-bold text-teal-700 dark:text-teal-300 mb-2",children:"📈 Refactoring Practice"}),e.jsx("p",{className:"text-sm",children:"Take an existing class that uses Object and casting. Refactor it to be generic. Count how many compiler warnings disappear. Each warning eliminated improves reliability."})]})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_0.8s_ease-out_1.7s_both]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-2xl font-bold mb-8 text-gray-800 dark:text-white",children:"Defining & Using Generic Classes: Checklist"}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400",children:"Definition Phase"}),["Choose appropriate type parameter names (T, E, K, V, etc.)","Specify type parameters in class declaration: class Name<T>","Use type parameters in fields, constructors, and methods","Consider multiple type parameters for complex structures","Handle generic array creation properly","Add necessary @SuppressWarnings annotations","Consider bounded type parameters if needed","Make class immutable when possible"].map((r,t)=>e.jsxs("div",{className:"flex items-start mb-3 p-3 bg-indigo-50 dark:bg-indigo-900/10 rounded-lg",children:[e.jsx("div",{className:"w-6 h-6 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-indigo-600 dark:text-indigo-300",children:t+1})}),e.jsx("span",{className:"text-indigo-800 dark:text-indigo-300",children:r})]},t))]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-bold mb-4 text-green-600 dark:text-green-400",children:"Usage Phase"}),["Always specify type arguments when instantiating","Use diamond operator <> for type inference","Avoid raw types in new code","Let IDE infer types when possible","Test with different type arguments","Handle compiler warnings immediately","Use nested generics carefully","Consider performance implications of complex generic structures","Document type parameter constraints","Use generic classes in collections and APIs"].map((r,t)=>e.jsxs("div",{className:"flex items-start mb-3 p-3 bg-green-50 dark:bg-green-900/10 rounded-lg",children:[e.jsx("div",{className:"w-6 h-6 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-green-600 dark:text-green-300",children:t+1})}),e.jsx("span",{className:"text-green-800 dark:text-green-300",children:r})]},t))]})]}),e.jsx("div",{className:"mt-8 pt-6 border-t border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-lg mb-2 text-gray-800 dark:text-white",children:"Next Topic Preview"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:["Next, we'll explore ",e.jsx("strong",{children:'"Generic Methods"'})," - methods that can operate on different types independently of their class's type parameters."]})]}),e.jsx("div",{className:"px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-lg font-semibold",children:"Topic 5/24"})]})})]})})]}),e.jsxs("footer",{className:"mt-16 py-8 px-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400",children:[e.jsx("p",{className:"mb-2",children:"© 2024 Java Generics Masterclass • Practical Implementation Guide"}),e.jsx("p",{className:"text-sm",children:"Development workflows from: Barrackpore Tech Park, Naihati College, Shyamnagar Library Systems"})]})]});export{x as default};
