import{r as c,j as e}from"./index-M13epWmp.js";import{c as d}from"./clsx-B-dksMZM.js";import{J as n}from"./JavaFileLoader-IXnK6GM0.js";import{T as h}from"./TeacherSukantaHui-D1l_wi-n.js";import{F as u}from"./FAQTemplate-D0r5Eyku.js";import"./JavaCodeBlock-BtexpujI.js";import"./prism-__2n-qyh.js";import"./browser-TC9_T_od.js";import"./prism-java-BwO6k4I_.js";import"./git-branch-D8pg7UcO.js";const m=`// topic0_files/VariableDeclaration.java\r
// Demonstrates variable declaration, initialization, and usage\r
\r
public class VariableDeclaration {\r
    public static void main(String[] args) {\r
        // Declaration without initialization\r
        int studentAge;\r
        double averageScore;\r
        String studentName;\r
\r
        // Initialization later\r
        studentAge = 16;\r
        averageScore = 85.75;\r
        studentName = "Swadeep";\r
\r
        // Declare + initialize in one line\r
        int totalStudents = 30;\r
        final String SCHOOL_NAME = "Barrackpore High School";\r
\r
        // Output\r
        System.out.println("Student: " + studentName);\r
        System.out.println("Age: " + studentAge);\r
        System.out.println("Score: " + averageScore);\r
        System.out.println("Total Students: " + totalStudents);\r
        System.out.println("School: " + SCHOOL_NAME);\r
    }\r
}`,b=`// topic0_files/ConstantDefinition.java\r
// Shows how to define and use constants (final variables)\r
\r
public class ConstantDefinition {\r
    // Class-level constant (static final)\r
    public static final double PI = 3.14159265359;\r
\r
    // Instance constant (final, initialized in constructor)\r
    private final int maxCapacity;\r
\r
    public ConstantDefinition(int maxCapacity) {\r
        this.maxCapacity = maxCapacity; // blank final initialization\r
    }\r
\r
    public static void main(String[] args) {\r
        // Local constant\r
        final int MAX_USERS = 100;\r
\r
        // Using class constant\r
        System.out.println("PI value: " + PI);\r
\r
        // Using local constant\r
        System.out.println("Max users allowed: " + MAX_USERS);\r
\r
        // Uncommenting below would cause compilation error:\r
        // MAX_USERS = 200;\r
\r
        ConstantDefinition obj = new ConstantDefinition(50);\r
        System.out.println("Object max capacity: " + obj.maxCapacity);\r
    }\r
}`,p=`// topic0_files/ScopeLocal.java\r
// Illustrates local variable scope and errors when out of scope\r
\r
public class ScopeLocal {\r
    public static void main(String[] args) {\r
        // Local variable inside main\r
        int x = 10;\r
\r
        if (x > 5) {\r
            int y = 20;    // y's scope is only inside this if block\r
            System.out.println("Inside if: x=" + x + ", y=" + y);\r
        }\r
\r
        System.out.println("Outside if: x=" + x);\r
        // The following line would cause error: cannot find symbol y\r
        // System.out.println(y);\r
    }\r
\r
    public void testMethod() {\r
        // x is not accessible here; each method has its own scope\r
        // System.out.println(x); // ERROR\r
    }\r
}`,v=`// topic0_files/ScopeClass.java\r
// Demonstrates class (instance) and static variable scope\r
\r
public class ScopeClass {\r
    // Instance variable - accessible throughout the class via 'this'\r
    private int instanceVar = 10;\r
\r
    // Static variable - one copy shared across all instances\r
    private static int staticVar = 100;\r
\r
    public void display() {\r
        // Can access both instance and static variables directly\r
        System.out.println("Instance var: " + instanceVar);\r
        System.out.println("Static var: " + staticVar);\r
    }\r
\r
    public static void staticMethod() {\r
        // Static methods cannot access instance variables directly\r
        // System.out.println(instanceVar); // ERROR\r
        System.out.println("Static var inside static method: " + staticVar);\r
    }\r
\r
    public static void main(String[] args) {\r
        ScopeClass obj1 = new ScopeClass();\r
        ScopeClass obj2 = new ScopeClass();\r
\r
        obj1.instanceVar = 20;   // changes only for obj1\r
        staticVar = 200;          // changes for all instances\r
\r
        obj1.display();  // instanceVar=20, staticVar=200\r
        obj2.display();  // instanceVar=10, staticVar=200\r
    }\r
}`,f=`// topic0_files/ShadowingExample.java\r
// Shows variable shadowing (local variable hides instance variable)\r
\r
public class ShadowingExample {\r
    private int value = 100;  // instance variable\r
\r
    public void setValue(int value) {  // parameter shadows instance variable\r
        // Using 'this' to refer to instance variable\r
        this.value = value;    // assigns parameter to instance variable\r
        System.out.println("Parameter value: " + value);\r
        System.out.println("Instance value: " + this.value);\r
    }\r
\r
    public void shadowBlock() {\r
        int x = 5;\r
        if (true) {\r
            int x = 10;   // ERROR: variable x is already defined in method\r
            // In Java, you cannot shadow a local variable inside a nested block\r
        }\r
        // But you can shadow an instance variable with a local variable:\r
        String value = "Shadowed";\r
        System.out.println("Local value: " + value);  // refers to local, not instance\r
        System.out.println("Instance value: " + this.value);\r
    }\r
\r
    public static void main(String[] args) {\r
        ShadowingExample ex = new ShadowingExample();\r
        ex.setValue(250);\r
        ex.shadowBlock();\r
    }\r
}`,g=`// topic0_files/InitBestPractice.java\r
// Best practices for variable initialization to avoid errors\r
\r
public class InitBestPractice {\r
    // Good: Initialize instance variables at declaration where possible\r
    private int id = -1;\r
    private String name = "Unknown";\r
\r
    // Or initialize in constructor\r
    private double salary;\r
\r
    public InitBestPractice(double salary) {\r
        this.salary = salary;  // mandatory initialization\r
    }\r
\r
    // Always initialize local variables before use\r
    public void process() {\r
        int count = 0;          // explicit initialization\r
        boolean flag = false;   // explicit initialization\r
\r
        if (flag) {\r
            count = 10;\r
        }\r
        // count is always initialized regardless of flag\r
        System.out.println("Count: " + count);\r
    }\r
\r
    public static void main(String[] args) {\r
        InitBestPractice obj = new InitBestPractice(50000);\r
        obj.process();\r
\r
        // Wrong: uninitialized local variable\r
        // int x;\r
        // System.out.println(x); // COMPILE ERROR\r
    }\r
}`,x=[{question:"What is the difference between a variable and a constant?",shortAnswer:"Variables can change value; constants cannot after initialization.",explanation:"In Java, constants are declared using the `final` keyword. Variables allow modification throughout program execution, while constants represent fixed values, improving readability and safety.",hint:"Think of a variable as a whiteboard that can be erased, a constant as an engraved stone.",level:"basic",codeExample:`int age = 25;     // variable
final double PI = 3.14; // constant`},{question:"What does 'declaration' mean? Give an example.",shortAnswer:"Declaration introduces a variable's type and name without assigning a value.",explanation:"It tells the compiler about the variable's existence and type. Memory is not allocated at this stage (except for primitive local variables, memory is conceptually allocated at declaration).",hint:"Like reserving a seat with a label but no one sitting yet.",level:"basic",codeExample:`int totalMarks;   // declaration
String studentName;`},{question:"What is initialization? Why is it mandatory for local variables?",shortAnswer:"Assigning an initial value to a variable. Local variables must be initialized before use to avoid garbage values.",explanation:"Java does not assign default values to local variables (unlike instance variables). Using an uninitialized local variable causes a compile-time error. This prevents bugs from reading undefined state.",hint:"Try printing a local variable without giving it any value – Java will refuse to compile.",level:"intermediate",codeExample:`int x;       // declared but not initialized
// System.out.println(x); // ERROR
x = 10;     // initialization
System.out.println(x); // OK`},{question:"Explain variable scope with a real-world analogy.",shortAnswer:"Scope defines where a variable is accessible – like a room where only people inside can see a whiteboard.",explanation:"Scope can be class-level (whole class), method-level (inside method), or block-level (inside { }). Variables declared inside a block die after the block ends.",hint:"Think about Swadeep's notebook: only he sees notes written inside his room, not outside.",level:"basic",codeExample:`public class Test {
    int classVar; // accessible everywhere in class
    void method() {
        int localVar; // only inside method
    }
}`},{question:"What are the default values of instance variables in Java?",shortAnswer:"0 for numeric primitives, false for boolean, null for objects, '\\u0000' for char.",explanation:"Java ensures instance variables (non-static fields) get default values when an object is created. Local variables do not get defaults and must be initialized manually.",hint:"Observe carefully: only class-level fields have defaults; method variables do not.",level:"basic",codeExample:`class Demo {
    int i;      // 0
    boolean b;  // false
    String s;   // null
}`},{question:"Can a final variable be left uninitialized?",shortAnswer:"Yes, it can be a blank final variable, but it must be initialized exactly once in every constructor or in an initializer block.",explanation:"Blank final variables provide flexibility: you can set different values per instance while still ensuring immutability after construction.",hint:"Try changing a blank final after constructor – compiler will stop you.",level:"intermediate",codeExample:`class Student {
    final int rollNo;
    Student(int r) { rollNo = r; }
}`},{question:"What is variable shadowing? When should it be avoided?",shortAnswer:"Shadowing occurs when a variable in an inner scope has the same name as one in an outer scope, hiding the outer one.",explanation:"Parameter names or local variables can shadow instance variables. This can cause confusion. Use 'this' to access the instance variable. Avoid shadowing for clarity.",hint:"If you need 'this', you have shadowing. Prefer distinct names.",level:"intermediate",codeExample:`class Person {
    String name;
    void setName(String name) { this.name = name; } // shadow resolved by this
}`},{question:"What is the lifetime of a local variable?",shortAnswer:"From the point of declaration until the end of the block where it is declared.",explanation:"Local variables are stored on the stack; they are created when the method (or block) is entered and destroyed when it exits. Therefore, they cannot be used outside their block.",hint:"Think of Tuhina buying a chai – the cup exists only while she is at the stall (block).",level:"basic",codeExample:`{
    int x = 5;
} // x dies here`},{question:"What is a static variable? How is it different from an instance variable?",shortAnswer:"Static variables belong to the class, shared among all objects; instance variables belong to each object separately.",explanation:"Static variables are initialized once when the class is loaded. They are useful for constants or counters shared across instances.",hint:"If Abhronila and Debangshu both see the same notice board, that's static; their own diaries are instance.",level:"intermediate",codeExample:`class Counter {
    static int count = 0; // shared
    int id;               // per object
}`},{question:"What are the naming conventions for variables and constants in Java?",shortAnswer:"Variables: camelCase (studentName). Constants: UPPER_SNAKE_CASE (MAX_HEIGHT).",explanation:"Following conventions improves readability across teams. Constants are often `static final` and named with uppercase letters and underscores.",hint:"Spot the difference: `totalScore` vs `MAX_SCORE`.",level:"basic",codeExample:`int studentAge;
final double TAX_RATE = 0.18;`},{question:"Explain the concept of 'final' parameter in a method.",shortAnswer:"A final parameter cannot be reassigned inside the method body.",explanation:"Declaring a parameter as final prevents accidental modification inside the method. It's a good practice for parameters that should remain unchanged.",hint:"Try modifying a final parameter – the compiler will object.",level:"intermediate",codeExample:`void setValue(final int val) {
    // val = 10; // ERROR
}`},{question:"What happens when you assign a larger primitive type to a smaller one?",shortAnswer:"Possible loss of data; requires explicit casting (narrowing conversion).",explanation:"While this relates to type conversion, constants and variables must store compatible types. Mixing types may need casting, but for constants, the compiler checks range.",hint:"Think of putting ocean water into a glass – you need to decide what to spill.",level:"intermediate",codeExample:`int big = 1000;
byte small = (byte) big; // explicit cast, may lose data`},{question:"Can we declare a variable as both static and final? What does it mean?",shortAnswer:"Yes. It creates a class-level constant that cannot be changed and is shared across all instances.",explanation:"`static final` variables are the most common way to define constants in Java. They are typically initialized at declaration or in static initializer blocks.",hint:"That's the standard for mathematical constants like PI.",level:"basic",codeExample:'public static final String APP_NAME = "SchoolSys";'},{question:"What is the default value of a char variable?",shortAnswer:"The null character '\\u0000' (Unicode 0).",explanation:"The default value for char is not a printable character; it's the null character. When printed, it may appear as nothing or a small box depending on the console.",hint:"Print an uninitialized char variable to see (or not see) the effect.",level:"basic",codeExample:"char c; // '\\u0000'"},{question:"How does scope affect garbage collection?",shortAnswer:"When a variable goes out of scope, it becomes eligible for garbage collection only if it references an object and no other references exist.",explanation:"Local variables in methods are cleaned up when the method ends, but objects they referenced might still be alive if stored elsewhere. Scope determines reachability.",hint:"An object can outlive the variable that created it if passed elsewhere.",level:"expert",codeExample:`void method() {
    Student s = new Student();
} // s goes out of scope, Student object may be GC`},{question:"What is the difference between declaration and definition in Java (compared to C/C++)?",shortAnswer:"In Java, declaration of primitive variables is also definition because memory is allocated. For methods, abstract methods are only declarations.",explanation:"Java abstracts memory management, but for variables, the declaration at class level implicitly allocates space. For local variables, space is allocated when the block is entered.",hint:"Unlike C, you can't have 'extern int x;' in Java.",level:"expert",codeExample:"int x; // declaration & definition (allocation) in Java"},{question:"What is a 'blank final' variable? Where can it be initialized?",shortAnswer:"A final variable declared without initialization. It must be initialized in every constructor or in an instance initializer block.",explanation:"Blank finals allow different constants per instance while preserving finality after construction. They are useful for immutable objects with constructor-provided values.",hint:"Observe carefully: static blank finals must be initialized in static blocks, not constructors.",level:"advanced",codeExample:`class Circle {
    final double radius;
    Circle(double r) { radius = r; }
}`},{question:"Can a local variable be declared static? Why?",shortAnswer:"No. Static is only allowed at class level. Local variables belong to methods and cannot be static.",explanation:"Static variables are associated with the class, not with method invocations. Allowing static inside methods would be meaningless because each method call would need its own copy.",hint:"Try writing `static int x;` inside a method – compiler error.",level:"intermediate",codeExample:`void method() {
    // static int y; // ERROR
}`},{question:"Explain the concept of 'effectively final' in Java.",shortAnswer:"A variable that is not declared final but whose value never changes after initialization is 'effectively final'.",explanation:"From Java 8 onwards, lambda expressions can capture only final or effectively final local variables. It allows cleaner code without explicit final keyword.",hint:"If you can add `final` to a variable without causing an error, it's effectively final.",level:"advanced",codeExample:`int x = 10; // effectively final if never reassigned
Runnable r = () -> System.out.println(x); // allowed`},{question:"What is the memory location of local, instance, and static variables?",shortAnswer:"Local variables: stack; Instance variables: heap (inside objects); Static variables: method area (metaspace).",explanation:"Understanding memory helps debug scope and lifetime issues. Stack is per-thread, heap is shared, method area stores class data.",hint:"Think of a fast-food counter: stack = order slip (temporary), heap = burger (persistent), static = menu board (shared).",level:"expert",codeExample:"// No code, conceptual"},{question:"Can an instance variable be accessed from a static method?",shortAnswer:"No, directly. You need an object reference.",explanation:"Static methods belong to the class, not any instance. Without an object, instance variables do not exist. Use `new Class().instanceVar` or pass an object.",hint:"Static methods cannot use 'this' – that's the clue.",level:"intermediate",codeExample:`class Test {
    int inst = 5;
    static void m() { System.out.println(inst); } // ERROR
}`},{question:"What is the purpose of local variable type inference (var) in Java 10?",shortAnswer:"`var` allows the compiler to infer the type from the initializer, reducing boilerplate.",explanation:"`var` can only be used for local variables with initializers. It improves readability for complex generic types but should not be overused where type is not obvious.",hint:"Use `var` when the type is clear from the right-hand side, like `var list = new ArrayList<String>();`.",level:"advanced",codeExample:`var name = "Swadeep"; // infers String
var numbers = List.of(1,2,3); // infers List<Integer>`},{question:"How does variable shadowing interact with inheritance?",shortAnswer:"Subclass can declare a variable with same name as a superclass variable, hiding it (but not overriding like methods).",explanation:"Variables are resolved at compile-time based on reference type, not object type. This can cause confusion; prefer private fields with getters/setters.",hint:"Try accessing the variable through super to see both values.",level:"expert",codeExample:`class Parent { int x = 1; }
class Child extends Parent { int x = 2; }
// ((Parent) child).x gives 1, child.x gives 2`},{question:"What are the restrictions on constant expression values?",shortAnswer:"Constant expressions can only use literals, final variables, and compile-time operators; result must be representable in the target type.",explanation:"Constants are evaluated at compile time. Non-constant expressions (e.g., method calls) cannot be used to initialize constants unless they are constant-foldable.",hint:"`final int MAX = 10 + 20;` works; `final int RAND = Math.random();` fails.",level:"advanced",codeExample:`final int SUM = 5 + 3; // constant expression
final long L = 100L; // fine`},{question:"Explain 'definite assignment' rule in Java.",shortAnswer:"Java requires that every local variable must be definitely assigned before its value is read, enforced at compile time.",explanation:"The compiler uses flow analysis to ensure that for each possible execution path, a variable is assigned a value before any use. This prevents uninitialized local variable bugs.",hint:"If there's any path where variable is unassigned, compilation fails.",level:"expert",codeExample:`int x;
if (flag) { x = 1; }
// System.out.println(x); // ERROR if flag could be false`},{question:"What is the scope of a variable declared in a for-loop initializer?",shortAnswer:"The scope is the entire for statement, including the loop body and condition.",explanation:"Variables declared in the for-loop initializer are not accessible after the loop ends. This is a block-level scope.",hint:"After the loop, the variable is gone – so you cannot use it to check the last value.",level:"intermediate",codeExample:`for (int i = 0; i < 10; i++) { }
// i is not defined here`},{question:"What happens if you try to assign a long literal to a float variable without casting?",shortAnswer:"Implicit widening conversion from long to float is allowed but may lose precision (possible loss of least significant bits).",explanation:"Java allows assignment of an int or long to a float because float has a larger range but limited precision. The compiler warns about possible precision loss.",hint:"Think of fitting a 8-digit number into a 6-digit display – rounding occurs.",level:"intermediate",codeExample:`long big = 123456789L;
float f = big; // allowed, but f may be 1.2345679E8`},{question:"Can a constant be changed using reflection?",shortAnswer:"Yes, reflection can modify even final fields, but it is dangerous and should never be done in normal code.",explanation:"`final` is a compile-time and runtime protection but not absolute. Reflection can bypass access control and modify constants, leading to unpredictable behavior.",hint:"It's like picking a lock – possible but breaks the contract.",level:"expert",codeExample:"// Reflection code to set final field – not shown for safety"},{question:"What is the difference between primitive and reference variable initialization?",shortAnswer:"Primitive variables store values; reference variables store addresses (or null). Default for reference is null.",explanation:"References to objects default to null; accessing methods on a null reference causes NullPointerException. Primitive defaults are safe (0, false).",hint:"Null means 'no object'; you must create an object (new) to assign a non-null reference.",level:"basic",codeExample:`String s; // null by default
int i; // 0`},{question:"Why can't we use a variable before its declaration?",shortAnswer:"Java is a statically-typed language; the compiler reads sequentially. Using a variable before its declaration would be an unknown symbol.",explanation:"Java's syntax requires declaration before usage in the source code (except for class methods/fields, which can be used in any order inside the class). Local variables must appear first.",hint:"Reorder your statements: declare, then use.",level:"basic",codeExample:`// System.out.println(x); // ERROR
int x = 5;`}],y=`
  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-slide-up {
    animation: fadeSlideUp 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
  }
  @media (prefers-reduced-motion: reduce) {
    .animate-fade-slide-up {
      animation: none;
      opacity: 1;
      transform: none;
    }
  }
`,o=[{question:"What is a variable in programming?",answer:"A named storage location in memory that can hold a value which may change during program execution."},{question:"What is a constant?",answer:"A value that cannot be changed after initialization. In Java, declared using the 'final' keyword."},{question:"What is variable declaration?",answer:"Specifying the type and name of a variable without allocating memory or giving a value."},{question:"What is variable initialization?",answer:"Assigning an initial value to a variable at the time of declaration or later."},{question:"What is variable scope?",answer:"The region of the program where a variable is accessible. Examples: local, instance, class scope."},{question:"Can a local variable be used outside its method in Java?",answer:"No, local variables are only accessible within the method, constructor, or block they are declared in."},{question:"What happens if you use a variable before initialization in Java?",answer:"Compilation error: 'variable might not have been initialized'."},{question:"What is the default value of an instance variable in Java?",answer:"0 for numeric types, false for boolean, null for objects."},{question:"What is the naming convention for constants in Java?",answer:"Uppercase letters with underscores (e.g., MAX_HEIGHT)."},{question:"Can you declare a variable as final without initializing it?",answer:"Yes, but it must be initialized exactly once before use (blank final variable)."},{question:"What is variable shadowing?",answer:"When a variable declared in an inner scope has the same name as a variable in an outer scope, hiding the outer variable."},{question:"What is the difference between declaration and definition?",answer:"Declaration introduces the name and type; definition allocates storage (in Java, declaration is typically also definition except for abstract methods)."},{question:"What is a class variable (static variable)?",answer:"A variable shared among all instances of a class, declared with the 'static' keyword."},{question:"What is an instance variable?",answer:"A variable that belongs to an instance (object) of a class; each object has its own copy."},{question:"What are the primitive variable types in Java?",answer:"byte, short, int, long, float, double, char, boolean."},{question:"What is a null literal?",answer:"A special literal that represents no object; can be assigned to any reference type variable."},{question:"Can a final variable be reassigned?",answer:"No, once assigned, its value cannot be changed."},{question:"What is a blank final variable?",answer:"A final variable declared but not initialized; must be initialized in every constructor."},{question:"What is the scope of a method parameter?",answer:"The entire method body. It acts like a local variable."},{question:"What does 'this' keyword refer to?",answer:"Refers to the current object instance; used to access instance variables when shadowed by parameters or local variables."}];function w(){const[t,s]=c.useState(Array(o.length).fill(!1)),r=i=>{s(a=>{const l=[...a];return l[i]=!l[i],l})};return e.jsxs("div",{className:"mt-16 rounded-2xl bg-white/50 dark:bg-gray-800/50 p-6 shadow-lg backdrop-blur-sm",children:[e.jsx("h3",{className:"mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100 border-l-4 border-indigo-500 pl-4",children:"✍️ Test Your Knowledge: 20 Practice Questions"}),e.jsx("div",{className:"grid gap-4 md:grid-cols-1",children:o.map((i,a)=>e.jsx("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-md hover:scale-[1.01]",children:e.jsxs("div",{className:"flex flex-col p-5",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:[a+1,". ",i.question]}),e.jsx("button",{onClick:()=>r(a),className:"rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700 transition-all hover:bg-indigo-200 dark:bg-indigo-900/60 dark:text-indigo-200 dark:hover:bg-indigo-800",children:t[a]?"Hide Answer":"Show Answer"})]}),t[a]&&e.jsx("div",{className:"mt-3 rounded-lg bg-indigo-50 p-3 text-gray-700 dark:bg-indigo-900/30 dark:text-gray-200 transition-all duration-200",children:i.answer})]})},a))})]})}function I(){const[t,s]=c.useState(!1),r=["animate-fade-slide-up animation-delay-0","animate-fade-slide-up animation-delay-100","animate-fade-slide-up animation-delay-200","animate-fade-slide-up animation-delay-300"];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:y}),e.jsx("style",{children:`
        .animation-delay-0 { animation-delay: 0ms; }
        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        @media (prefers-reduced-motion: reduce) {
          [class*="animation-delay-"] { animation-delay: 0ms; }
        }
      `}),e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100",children:e.jsxs("div",{className:"mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12",children:[e.jsxs("div",{className:"animate-fade-slide-up mb-12 text-center",children:[e.jsx("h1",{className:"text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400",children:"Constants & Variables"}),e.jsx("p",{className:"mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto",children:"Definition · Declaration · Initialization · Scope — The building blocks of data storage in programming."})]}),e.jsx("div",{className:"animate-fade-slide-up mb-16 flex justify-center",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:e.jsx("div",{className:"w-full max-w-xl rounded-2xl bg-white p-4 shadow-md transition-all duration-500 hover:shadow-xl dark:bg-gray-800/70",children:e.jsxs("svg",{viewBox:"0 0 600 200",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("rect",{x:"20",y:"40",width:"240",height:"120",rx:"12",fill:"none",stroke:"#4F46E5",strokeWidth:"2.5",className:"transition-all duration-300",style:{stroke:t?"#818CF8":"#4F46E5"}}),e.jsx("text",{x:"140",y:"30",textAnchor:"middle",fill:"#4F46E5",fontWeight:"bold",fontSize:"16",children:"Variable (Mutable)"}),e.jsx("text",{x:"60",y:"80",fill:"#1F2937",className:"dark:fill-gray-200",fontSize:"14",children:"int score = 95;"}),e.jsx("text",{x:"60",y:"110",fill:"#6B7280",fontSize:"12",children:"→ score = 98;"}),e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",repeatCount:"indefinite"}),e.jsx("rect",{x:"340",y:"40",width:"240",height:"120",rx:"12",fill:"none",stroke:"#10B981",strokeWidth:"2.5",className:"transition-all duration-300",style:{stroke:t?"#34D399":"#10B981"}}),e.jsx("text",{x:"460",y:"30",textAnchor:"middle",fill:"#10B981",fontWeight:"bold",fontSize:"16",children:"Constant (Immutable)"}),e.jsx("text",{x:"380",y:"80",fill:"#1F2937",className:"dark:fill-gray-200",fontSize:"14",children:"final double PI = 3.1416;"}),e.jsx("text",{x:"380",y:"110",fill:"#EF4444",fontSize:"12",children:"❌ PI = 3.14; // Error"}),t&&e.jsxs("g",{opacity:"0.9",children:[e.jsx("text",{x:"290",y:"130",fill:"#4B5563",fontSize:"12",textAnchor:"middle",children:"✏️ Variables change"}),e.jsx("text",{x:"290",y:"150",fill:"#4B5563",fontSize:"12",textAnchor:"middle",children:"🔒 Constants fixed"})]})]})})}),e.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-14",children:[{title:"📘 Definition",content:"Variables store data that can change; Constants store fixed values (final). Both have a type and a memory location."},{title:"📝 Declaration",content:"Specify type + name: e.g., `int age;` No memory allocated until definition/initialization."},{title:"⚙️ Initialization",content:"Assign first value: `int age = 20;` Uninitialized local variables cause compile errors."},{title:"🎯 Scope",content:"Region where variable is accessible: class, method, or block-level. Determines lifetime & visibility."}].map((i,a)=>e.jsxs("div",{className:d("rounded-xl bg-white p-5 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:bg-gray-800/80 dark:hover:bg-gray-700",r[a%4]),children:[e.jsx("h3",{className:"text-xl font-bold text-indigo-600 dark:text-indigo-400",children:i.title}),e.jsx("p",{className:"mt-2 leading-relaxed text-gray-600 dark:text-gray-300",children:i.content})]},a))}),e.jsxs("div",{className:"animate-fade-slide-up mb-14 rounded-2xl bg-indigo-50 p-6 dark:bg-indigo-950/30",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:"📜 Java Declaration Signatures"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm",children:`// Variable declaration syntax
type variableName [= value];

// Constant declaration
final type CONSTANT_NAME = value;

// Example
int studentCount = 35;
final double TAX_RATE = 0.18;`}),e.jsxs("p",{className:"mt-4 text-gray-700 dark:text-gray-200",children:[e.jsx("strong",{children:"Purpose:"})," Reserve memory and associate a name with data. ",e.jsx("strong",{children:"When/Why:"})," Use variables for changing data (user score, temp reading), constants for fixed values (PI, max users)."]}),e.jsx("div",{className:"mt-4 rounded-lg bg-white p-3 dark:bg-gray-800/60",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold",children:"🌍 Real-world:"})," In a school system, ",e.jsx("strong",{children:"studentName"})," (variable) changes per student, but ",e.jsx("strong",{children:"SCHOOL_YEAR"})," (constant) stays same. Barrackpore high school uses constants for max seats = 50."]})})]}),e.jsxs("div",{className:"animate-fade-slide-up mb-12 space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-indigo-500 pl-3",children:"💻 Java Demonstrations"}),e.jsxs("div",{className:"grid gap-5 md:grid-cols-1",children:[e.jsx(n,{fileModule:m,title:"VariableDeclaration.java",highlightLines:[]}),e.jsx(n,{fileModule:b,title:"ConstantDefinition.java",highlightLines:[]}),e.jsx(n,{fileModule:p,title:"ScopeLocal.java",highlightLines:[]}),e.jsx(n,{fileModule:v,title:"ScopeClass.java",highlightLines:[]}),e.jsx(n,{fileModule:f,title:"ShadowingExample.java",highlightLines:[]}),e.jsx(n,{fileModule:g,title:"InitBestPractice.java",highlightLines:[]})]})]}),e.jsxs("div",{className:"grid gap-6 md:grid-cols-2 animate-fade-slide-up",children:[e.jsxs("div",{className:"rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-800/50 dark:bg-amber-950/20 transition-all hover:shadow-md",children:[e.jsx("h3",{className:"text-xl font-bold text-amber-700 dark:text-amber-400",children:"💡 Tips & Tricks (Pro Level)"}),e.jsxs("ul",{className:"mt-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-200",children:[e.jsx("li",{children:'Use `var` (Java 10+) for local variables when type is obvious: `var name = "Swadeep";`'}),e.jsx("li",{children:"Initialize variables as close to usage as possible – improves readability."}),e.jsx("li",{children:"Declare constants with `static final` for class-level immutability."}),e.jsx("li",{children:"Use meaningful names: `totalMarks` not `tm`."}),e.jsx("li",{children:"Debugging variable scope: highlight blocks to check visibility."})]})]}),e.jsxs("div",{className:"rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-800/50 dark:bg-red-950/20 transition-all hover:shadow-md",children:[e.jsx("h3",{className:"text-xl font-bold text-red-600 dark:text-red-400",children:"⚠️ Common Mistakes & Pitfalls"}),e.jsxs("ul",{className:"mt-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-200",children:[e.jsx("li",{children:"Using uninitialized local variable → compilation error."}),e.jsx("li",{children:"Assuming default values for local variables (they don't have any)."}),e.jsx("li",{children:"Assigning new value to final constant."}),e.jsx("li",{children:"Variable name conflicts (shadowing) causing logic errors."}),e.jsx("li",{children:"Forgetting scope: accessing loop variable outside loop."})]})]})]}),e.jsxs("div",{className:"animate-fade-slide-up mt-10 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 p-5 dark:from-emerald-950/30 dark:to-teal-950/30",children:[e.jsx("h3",{className:"text-xl font-bold text-emerald-700 dark:text-emerald-400",children:"✅ Best Practices & Mini Checklist"}),e.jsxs("div",{className:"mt-3 grid gap-3 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Coding Standards:"}),e.jsxs("ul",{className:"ml-5 list-disc text-gray-700 dark:text-gray-200",children:[e.jsx("li",{children:"CamelCase for variables (studentAge)."}),e.jsx("li",{children:"UPPER_SNAKE_CASE for constants."}),e.jsx("li",{children:"Declare one variable per line."})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Memory Checklist:"}),e.jsxs("ul",{className:"ml-5 list-disc text-gray-700 dark:text-gray-200",children:[e.jsx("li",{children:"☑️ Local variables live in stack."}),e.jsx("li",{children:"☑️ Instance variables stored in heap."}),e.jsx("li",{children:"☑️ Constants are compile-time if primitive/string."})]})]})]})]}),e.jsxs("div",{className:"animate-fade-slide-up mt-12 rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-800/40 dark:bg-blue-950/20",children:[e.jsx("h3",{className:"text-lg font-bold text-blue-700 dark:text-blue-300",children:"🔍 Think about..."}),e.jsx("p",{className:"mt-1 text-gray-700 dark:text-gray-200",children:"Try changing a constant value in the Java examples — what error message do you see? Observe carefully how variable scope changes when moving code block from method to class level."})]}),e.jsx("div",{className:"animate-fade-slide-up mt-12",children:e.jsx(h,{note:"When teaching constants, emphasize 'final' as a contract with the future reader. Use examples from daily life: a student's roll number (constant for the year) vs attendance count (variable). Encourage students to run ScopeLocal.java to witness error messages — hands-on debugging builds intuition faster than theory. Watch out for the blank final misconception: you can defer initialization only once via constructor."})}),e.jsx("div",{className:"animate-fade-slide-up mt-16",children:e.jsx(u,{title:"Constants & Variables - Deep Dive FAQs",questions:x})}),e.jsx(w,{})]})})]})}export{I as default};
