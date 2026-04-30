import{r as a,j as e}from"./index-DdIeXD-l.js";import{J as t}from"./JavaFileLoader-C1CenQp-.js";import{T as s}from"./TeacherSukantaHui-Ds9MNVZs.js";import{F as r}from"./FAQTemplate-zqOawnUC.js";import"./JavaCodeBlock-BZqUsZXj.js";import"./prism-bVBSx9jp.js";import"./browser-DPO_eEMk.js";import"./prism-java-BwO6k4I_.js";import"./git-branch-mOcsg_Cc.js";import"./clsx-B-dksMZM.js";const n=[{question:"What happens if you declare an abstract method in a non-abstract class?",shortAnswer:"Compiler error: 'The abstract method can only be defined by an abstract class'.",explanation:"Java requires that any class containing an abstract method must be declared abstract. This ensures that incomplete classes cannot be instantiated.",hint:"If a class has an abstract method, it's incomplete — mark it abstract.",level:"basic",codeExample:"class Bad { abstract void m(); } // ERROR"},{question:"Can you instantiate an abstract class using the 'new' keyword?",shortAnswer:"No, abstract classes cannot be instantiated directly.",explanation:"Abstract classes are incomplete (may have abstract methods without bodies). Java prevents creating instances to avoid calling undefined methods.",hint:"You can only instantiate concrete subclasses.",level:"basic",codeExample:`abstract class A {}
// A a = new A(); // ERROR`},{question:"What is the rule about abstract methods and method bodies?",shortAnswer:"Abstract methods cannot have a body — they must end with a semicolon.",explanation:"An abstract method declares a contract but provides no implementation. Subclasses are responsible for the body.",hint:"No curly braces for abstract methods.",level:"basic",codeExample:`public abstract void doIt(); // correct
// public abstract void doIt() {} // ERROR`},{question:"Can an abstract method be private? Why or why not?",shortAnswer:"No, because private methods are not visible to subclasses, so they cannot be overridden.",explanation:"Abstract methods rely on subclasses to provide implementation. A private method cannot be accessed or overridden by a subclass, defeating the purpose.",hint:"Private = invisible to children. Abstract = must be implemented by children. They conflict.",level:"intermediate",codeExample:"// private abstract void m(); // ILLEGAL"},{question:"Can an abstract method be static?",shortAnswer:"No, static methods belong to the class and cannot be overridden; abstract methods require overriding.",explanation:"Static methods are resolved at compile-time based on the reference type, not runtime polymorphism. Abstract methods depend on dynamic dispatch.",hint:"You cannot override static methods, but abstract methods demand overriding.",level:"intermediate",codeExample:"// public static abstract void m(); // ERROR"},{question:"Can an abstract method be final?",shortAnswer:"No, final prevents overriding, but abstract methods must be overridden.",explanation:"Final methods cannot be changed in subclasses. An abstract method has no body and requires a subclass to provide one — the two modifiers are mutually exclusive.",hint:"You can't have a method that both must be overridden and cannot be overridden.",level:"intermediate",codeExample:"// public final abstract void m(); // ERROR"},{question:"If a subclass does not implement all abstract methods from its abstract parent, what must it be?",shortAnswer:"The subclass must also be declared abstract.",explanation:"A class that inherits abstract methods without implementing them is itself incomplete and must be marked abstract.",hint:"The 'abstract' keyword cascades down until all methods are implemented.",level:"basic",codeExample:`abstract class A { abstract void m1(); abstract void m2(); }
abstract class B extends A { void m1() {} } // B is still abstract because m2() missing`},{question:"Can an abstract class be final?",shortAnswer:"No, because final prevents inheritance, but abstract classes are designed to be extended.",explanation:"Final means no subclasses allowed. Abstract means incomplete and requires subclassing. They are contradictory.",hint:"A class cannot be both a blueprint (abstract) and unchangeable (final).",level:"intermediate",codeExample:"// final abstract class X {} // COMPILE ERROR"},{question:"Can an abstract class have a constructor?",shortAnswer:"Yes, abstract classes can have constructors, and they are called when a concrete subclass is instantiated.",explanation:"Constructors initialize common state. Even though you can't instantiate the abstract class directly, its constructor runs via super() from the subclass.",hint:"The constructor chain includes abstract classes.",level:"intermediate",codeExample:`abstract class Base { Base() { System.out.println("Base"); } }
class Derived extends Base { Derived() { super(); } }`},{question:"Can an abstract class have instance variables?",shortAnswer:"Yes, abstract classes can have instance variables (fields), which are inherited by subclasses.",explanation:"Unlike interfaces (which only have static final constants), abstract classes can hold mutable state that subclasses can access and modify.",hint:"This is a key difference from interfaces.",level:"basic",codeExample:"abstract class Animal { protected String name; } // allowed"},{question:"Can an abstract class have static methods?",shortAnswer:"Yes, abstract classes can have static methods with implementations.",explanation:"Static methods belong to the class itself, not instances. They are not abstract (since abstract methods cannot be static) but can be concrete static methods.",hint:"Useful for utility methods or factory methods returning subclasses.",level:"intermediate",codeExample:"abstract class Factory { static AbstractClass create() { return new Concrete(); } }"},{question:"Can an abstract class be synchronized?",shortAnswer:"The class itself cannot be marked synchronized (that's not a valid modifier for classes). Methods can be synchronized.",explanation:"synchronized is a method or block modifier, not a class modifier. Abstract methods cannot be synchronized because they have no implementation.",hint:"You can have synchronized concrete methods in an abstract class.",level:"advanced",codeExample:"abstract class A { public synchronized void concreteMethod() { } } // OK"},{question:"What is the default access modifier for an abstract method if none is specified?",shortAnswer:"Package-private (default), same as other methods.",explanation:"If you omit access modifier, it's accessible only within the same package. This is allowed for abstract methods as long as subclasses are in the same package.",hint:"Often better to use protected or public for broader accessibility.",level:"intermediate",codeExample:"abstract class A { abstract void m(); } // package-private abstract method"},{question:"Can an abstract class implement multiple interfaces?",shortAnswer:"Yes, an abstract class can implement multiple interfaces, just like concrete classes.",explanation:"The abstract class may choose to implement some interface methods and leave others abstract for subclasses to implement.",hint:"This is a powerful way to provide partial implementations.",level:"intermediate",codeExample:`interface I1 { void a(); }
interface I2 { void b(); }
abstract class C implements I1, I2 { public void a() {} } // b() remains abstract`},{question:"Can an abstract class extend a concrete class?",shortAnswer:"Yes, an abstract class can extend a concrete class. It may then override methods or add new abstract methods.",explanation:"The concrete parent provides some functionality, and the abstract child can add abstraction on top.",hint:"Useful when you want to make a normally concrete class abstract for further specialization.",level:"advanced",codeExample:`class ConcreteParent { void doIt() { } }
abstract class AbstractChild extends ConcreteParent { abstract void doMore(); }`},{question:"What happens if you try to declare an abstract method in an enum?",shortAnswer:"It's allowed, but the enum must have constant-specific class bodies implementing the method.",explanation:"Enum constants can provide their own implementations of abstract methods defined in the enum declaration.",hint:"This is an advanced pattern for strategy enums.",level:"expert",codeExample:"enum Operation { PLUS { double apply(double a, double b) { return a+b; } }, MINUS {...}; abstract double apply(double a, double b); }"},{question:"Can an abstract class have a method with the same signature as a default method in an interface?",shortAnswer:"Yes, and the class method takes precedence (class wins over interface).",explanation:"If an abstract class implements an interface with a default method, the abstract class can override it (concretely or abstractly).",hint:"Class methods always win over default interface methods.",level:"advanced",codeExample:`interface I { default void m() { } }
abstract class A implements I { public abstract void m(); } // re-abstracts`},{question:"Is it allowed to have an abstract class with no abstract methods?",shortAnswer:"Yes, an abstract class can have zero abstract methods. It simply cannot be instantiated.",explanation:"Sometimes you want to prevent instantiation of a class even though it's fully implemented. Marking it abstract serves that purpose.",hint:"Useful for utility base classes that should only be extended.",level:"intermediate",codeExample:"abstract class NoAbstractMethods { void concreteOnly() { } } // cannot instantiate"},{question:"Can you override a concrete method with an abstract method in a subclass?",shortAnswer:"Yes, but the subclass must then be declared abstract.",explanation:"You can 're-abstract' a method by overriding a concrete method with an abstract one. This forces further subclasses to implement it.",hint:"Rarely used, but allowed.",level:"expert",codeExample:`class A { void m() {} }
abstract class B extends A { abstract void m(); } // allowed, B abstract`},{question:"Can an abstract class be annotated with @FunctionalInterface?",shortAnswer:"No, @FunctionalInterface applies only to interfaces, not classes.",explanation:"Functional interfaces are a specific concept for lambda expressions. Abstract classes cannot be used as functional interfaces even if they have one abstract method.",hint:"Only interfaces can be functional interfaces.",level:"intermediate",codeExample:"// @FunctionalInterface abstract class X {} // COMPILE ERROR"},{question:"What is the rule about abstract methods and checked exceptions?",shortAnswer:"Abstract methods can declare checked exceptions. Subclasses can throw the same, a subclass, or none (if the declared exception is unchecked).",explanation:"The throws clause is part of the method contract. Subclasses cannot throw broader checked exceptions.",hint:"Same rules as overriding concrete methods that throw exceptions.",level:"advanced",codeExample:"abstract void load() throws IOException; // subclass can throw FileNotFoundException (subclass) or no exception"},{question:"Can an abstract class have a main method?",shortAnswer:"Yes, and it can be executed. The main method is static, so it doesn't require an instance.",explanation:"Even though you can't instantiate the abstract class, static methods belong to the class and can be called directly.",hint:"Useful for testing or as a launcher for subclasses.",level:"intermediate",codeExample:'abstract class Test { public static void main(String[] args) { System.out.println("Runs fine"); } }'},{question:"What happens if you try to use 'abstract' with 'native'?",shortAnswer:"It's allowed? Actually, native methods have no body (implemented in C/C++), but they are not abstract. A method can be both native and abstract? No, that's not allowed.",explanation:"native implies implementation exists elsewhere (native code), abstract implies no implementation and must be overridden. They are contradictory.",hint:"A method cannot be both native (external implementation) and abstract (no implementation).",level:"expert",codeExample:"// public abstract native void m(); // COMPILE ERROR"},{question:"Can an abstract method be generic?",shortAnswer:"Yes, abstract methods can declare type parameters.",explanation:"Type parameters can be defined at the method level, allowing subclasses to provide type-safe implementations.",hint:"Useful for abstract algorithms that work with different types.",level:"advanced",codeExample:"abstract class Processor { abstract <T> T process(T input); }"},{question:"What is the rule about abstract classes and serialization?",shortAnswer:"Abstract classes can implement Serializable. Subclasses are responsible for handling serialization appropriately.",explanation:"If an abstract class implements Serializable, all subclasses are serializable unless they explicitly prevent it.",hint:"Be careful with transient fields and custom serialization in abstract classes.",level:"expert",codeExample:"abstract class Base implements Serializable { protected transient int cache; }"},{question:"Can an abstract class have a final abstract method? (Trick question)",shortAnswer:"No, that's a contradiction. final and abstract cannot be combined on a method.",explanation:"final prevents overriding; abstract requires overriding. They cannot coexist.",hint:"The compiler will reject 'final abstract'.",level:"intermediate",codeExample:"// public final abstract void m(); // ERROR"},{question:"What is the rule about abstract classes and instanceof?",shortAnswer:"You can use instanceof with abstract class types because the actual object is always a concrete subclass.",explanation:"The instanceof operator works with any reference type, including abstract classes. It returns true if the object is an instance of a subclass.",hint:"instanceof checks the actual object type, not the reference type.",level:"intermediate",codeExample:"Animal a = new Dog(); if (a instanceof Animal) { } // true"},{question:"Can an abstract class be used as a type parameter?",shortAnswer:"Yes, abstract classes can be used as type arguments in generics.",explanation:"Generic type parameters can be bounded by abstract classes. You can have List<Animal> where Animal is abstract.",hint:"You cannot instantiate the abstract type, but you can add subclasses to the collection.",level:"advanced",codeExample:"List<Animal> list = new ArrayList<>(); list.add(new Dog()); // valid"},{question:"What is the rule about abstract methods and covariant return types?",shortAnswer:"Subclasses overriding an abstract method can use covariant return types (a subclass of the declared return type).",explanation:"This allows more specific return types in subclasses while maintaining the contract.",hint:"Valid since Java 5.",level:"advanced",codeExample:`abstract class A { abstract Object get(); }
class B extends A { @Override String get() { return ""; } } // covariant`},{question:"Can an abstract class have a nested class that is concrete?",shortAnswer:"Yes, abstract classes can have nested classes (static or inner) that are concrete.",explanation:"Nested classes are separate from the abstract nature of the outer class. They can be instantiated independently.",hint:"Useful for builders or helper classes.",level:"intermediate",codeExample:"abstract class Outer { static class Helper { } } // Helper is concrete"}],i=`// RuleViolationsDemo.java\r
// This file demonstrates common violations of abstract class rules.\r
// Each section shows an error - these will NOT compile.\r
\r
public class RuleViolationsDemo {\r
    public static void main(String[] args) {\r
        System.out.println("This file demonstrates compilation errors!");\r
    }\r
}\r
\r
// ========== VIOLATION 1: Abstract method in non-abstract class ==========\r
// ERROR: The abstract method can only be defined by an abstract class\r
class BadClass1 {\r
    public abstract void doSomething(); // COMPILE ERROR\r
}\r
\r
\r
// ========== VIOLATION 2: Trying to instantiate abstract class ==========\r
abstract class CannotInstantiate {\r
    void hello() { System.out.println("Hello"); }\r
}\r
\r
class Violation2 {\r
    void test() {\r
        // CannotInstantiate obj = new CannotInstantiate(); // COMPILE ERROR\r
        // error: Cannot instantiate the type CannotInstantiate\r
    }\r
}\r
\r
\r
// ========== VIOLATION 3: Abstract method with body ==========\r
abstract class BadClass3 {\r
    // ERROR: abstract method cannot have a body\r
    public abstract void badMethod() {\r
        System.out.println("This is not allowed");\r
    }\r
}\r
\r
\r
// ========== VIOLATION 4: Private abstract method ==========\r
abstract class BadClass4 {\r
    // ERROR: illegal combination of modifiers: abstract and private\r
    private abstract void hidden(); // COMPILE ERROR\r
}\r
\r
\r
// ========== VIOLATION 5: Static abstract method ==========\r
abstract class BadClass5 {\r
    // ERROR: illegal combination of modifiers: abstract and static\r
    public static abstract void staticAbstract(); // COMPILE ERROR\r
}\r
\r
\r
// ========== VIOLATION 6: Final abstract method ==========\r
abstract class BadClass6 {\r
    // ERROR: illegal combination of modifiers: abstract and final\r
    public final abstract void cantOverride(); // COMPILE ERROR\r
}\r
\r
\r
// ========== VIOLATION 7: Subclass not implementing abstract methods ==========\r
abstract class Parent {\r
    public abstract void method1();\r
    public abstract void method2();\r
}\r
\r
// ERROR: The type Child must implement the inherited abstract method Parent.method1()\r
class Child extends Parent {\r
    // Only implements method1, forgot method2\r
    public void method1() { }\r
    // Missing method2() → COMPILE ERROR\r
}\r
\r
\r
// ========== VIOLATION 8: Final abstract class ==========\r
// ERROR: illegal combination of modifiers: abstract and final\r
final abstract class BadClass8 { // COMPILE ERROR\r
    void someMethod() { }\r
}\r
`,l=`// AbstractClassRules.java\r
// Demonstrates all the correct ways to use abstract classes and methods\r
\r
// Rule 1: If a class has an abstract method, it MUST be abstract\r
abstract class CorrectAbstractClass {\r
    // Abstract method - no body, ends with semicolon\r
    public abstract void performAction();\r
    \r
    // Concrete method - allowed in abstract class\r
    public void log(String message) {\r
        System.out.println("[LOG] " + message);\r
    }\r
    \r
    // Protected abstract method - allowed\r
    protected abstract void internalTask();\r
    \r
    // Abstract method with parameters and return type\r
    public abstract int calculate(int a, int b);\r
}\r
\r
// Rule 2: Cannot instantiate abstract class directly\r
// CorrectAbstractClass obj = new CorrectAbstractClass(); // ERROR - can't do this\r
\r
// Rule 3: Subclass must implement ALL abstract methods (unless subclass is also abstract)\r
class ConcreteImplementation extends CorrectAbstractClass {\r
    @Override\r
    public void performAction() {\r
        System.out.println("Action performed!");\r
    }\r
    \r
    @Override\r
    protected void internalTask() {\r
        System.out.println("Internal task done");\r
    }\r
    \r
    @Override\r
    public int calculate(int a, int b) {\r
        return a + b;\r
    }\r
}\r
\r
// Rule 4: Abstract class can have constructors\r
abstract class Animal {\r
    protected String name;\r
    \r
    // Constructor - allowed and useful\r
    public Animal(String name) {\r
        this.name = name;\r
        System.out.println("Animal created: " + name);\r
    }\r
    \r
    public abstract void makeSound();\r
}\r
\r
class Dog extends Animal {\r
    public Dog(String name) {\r
        super(name);  // Calling abstract class constructor\r
    }\r
    \r
    @Override\r
    public void makeSound() {\r
        System.out.println(name + " says: Woof!");\r
    }\r
}\r
\r
// Rule 5: Abstract class can have fields (including non-final)\r
abstract class Counter {\r
    protected int count = 0;\r
    \r
    public abstract void increment();\r
    \r
    public int getCount() {\r
        return count;\r
    }\r
}\r
\r
class ClickCounter extends Counter {\r
    @Override\r
    public void increment() {\r
        count++;\r
    }\r
}\r
\r
// Rule 6: Abstract class can have static methods\r
abstract class Utility {\r
    public static void printHelp() {\r
        System.out.println("This is an abstract utility class");\r
    }\r
    \r
    public abstract void doWork();\r
}\r
\r
// Rule 7: Abstract class can have main method (useful for testing)\r
abstract class TestableAbstract {\r
    public abstract void run();\r
    \r
    public static void main(String[] args) {\r
        System.out.println("This runs even though class is abstract!");\r
        // Cannot create instance, but static method works\r
    }\r
}\r
\r
public class AbstractClassRules {\r
    public static void main(String[] args) {\r
        // Proper usage: instantiate concrete subclass\r
        ConcreteImplementation obj = new ConcreteImplementation();\r
        obj.performAction();\r
        obj.log("Test message");\r
        System.out.println("Calculate: " + obj.calculate(5, 3));\r
        \r
        Dog myDog = new Dog("Buddy");\r
        myDog.makeSound();\r
        \r
        ClickCounter counter = new ClickCounter();\r
        counter.increment();\r
        counter.increment();\r
        System.out.println("Count: " + counter.getCount());\r
        \r
        // Calling static method from abstract class\r
        Utility.printHelp();\r
    }\r
}`,o=`// ConstructorRulesDemo.java\r
// Demonstrates constructor rules in abstract classes\r
\r
abstract class BaseEntity {\r
    private int id;\r
    private String name;\r
    \r
    // Abstract class constructor - can have parameters\r
    public BaseEntity(int id, String name) {\r
        this.id = id;\r
        this.name = name;\r
        System.out.println("BaseEntity constructor called: " + name);\r
    }\r
    \r
    // No-arg constructor also allowed\r
    public BaseEntity() {\r
        this(0, "Unknown");\r
    }\r
    \r
    public abstract void display();\r
    \r
    public int getId() { return id; }\r
    public String getName() { return name; }\r
}\r
\r
abstract class MiddleLayer extends BaseEntity {\r
    private String department;\r
    \r
    public MiddleLayer(int id, String name, String department) {\r
        super(id, name);  // Must call super constructor explicitly if no default\r
        this.department = department;\r
        System.out.println("MiddleLayer constructor called");\r
    }\r
    \r
    // Can add more abstract methods\r
    public abstract String getDepartmentInfo();\r
}\r
\r
class ConcreteEntity extends MiddleLayer {\r
    private double salary;\r
    \r
    public ConcreteEntity(int id, String name, String department, double salary) {\r
        super(id, name, department);  // Chain up the constructor call\r
        this.salary = salary;\r
        System.out.println("ConcreteEntity constructor called");\r
    }\r
    \r
    @Override\r
    public void display() {\r
        System.out.println("ID: " + getId() + ", Name: " + getName() + \r
                           ", Dept: " + getDepartmentInfo() + ", Salary: " + salary);\r
    }\r
    \r
    @Override\r
    public String getDepartmentInfo() {\r
        return "Department: " + (super.getName() != null ? "Active" : "Inactive");\r
    }\r
}\r
\r
// Abstract class with multiple constructors\r
abstract class Logger {\r
    private String prefix;\r
    \r
    public Logger() {\r
        this("DEFAULT");\r
    }\r
    \r
    public Logger(String prefix) {\r
        this.prefix = prefix;\r
    }\r
    \r
    public abstract void log(String message);\r
    \r
    protected String getPrefix() {\r
        return prefix;\r
    }\r
}\r
\r
class FileLogger extends Logger {\r
    private String filename;\r
    \r
    public FileLogger(String filename) {\r
        super("FILE");  // Choose which super constructor to call\r
        this.filename = filename;\r
    }\r
    \r
    public FileLogger(String prefix, String filename) {\r
        super(prefix);\r
        this.filename = filename;\r
    }\r
    \r
    @Override\r
    public void log(String message) {\r
        System.out.println("[" + getPrefix() + "] Writing to " + filename + ": " + message);\r
    }\r
}\r
\r
public class ConstructorRulesDemo {\r
    public static void main(String[] args) {\r
        System.out.println("=== Constructor Chain Demo ===");\r
        ConcreteEntity emp = new ConcreteEntity(101, "Abhronila", "Engineering", 75000);\r
        emp.display();\r
        \r
        System.out.println("\\n=== Multiple Constructors ===");\r
        FileLogger logger1 = new FileLogger("app.log");\r
        logger1.log("Application started");\r
        \r
        FileLogger logger2 = new FileLogger("CUSTOM", "debug.log");\r
        logger2.log("Debug message");\r
        \r
        // Important: You cannot call new on abstract class\r
        // Logger l = new Logger(); // ERROR\r
    }\r
}`,w=()=>{const[c,d]=a.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:`
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
        @keyframes softGlow {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(59,130,246,0)); }
          50% { filter: drop-shadow(0 0 8px rgba(59,130,246,0.5)); }
        }
        @keyframes borderPulse {
          0%, 100% { border-color: rgba(168,85,247,0.3); }
          50% { border-color: rgba(168,85,247,0.8); }
        }
        .animate-fadeSlideUp {
          animation: fadeSlideUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }
        .animate-softGlow {
          animation: softGlow 3s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeSlideUp, .animate-softGlow {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}),e.jsx("div",{className:"max-w-5xl mx-auto animate-fadeSlideUp",children:e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400",children:"Rules for Abstract Classes"}),e.jsx("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed",children:"The commandments of abstraction — what you can and cannot do with abstract classes and methods."})]})}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-purple-500 pl-4 mb-4",children:"Why Rules Matter"}),e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsx("p",{children:"Abstract classes and methods follow strict rules enforced by the Java compiler. Understanding these rules prevents errors and helps you design robust inheritance hierarchies. Let's explore each rule with examples and common pitfalls."}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mt-3",children:e.jsxs("p",{className:"italic",children:["✨ ",e.jsx("strong",{children:"Teacher's insight:"}),` Students often ask "Why can't I do X with abstract classes?" The answer is usually about preventing ambiguity or enforcing complete implementation. Think of these rules as guardrails that keep your code safe and predictable.`]})})]})]}),e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-indigo-500 pl-4 mb-4",children:"The 7 Golden Rules of Abstract Classes"}),e.jsx("div",{className:"flex justify-center my-4",children:e.jsx("svg",{viewBox:"0 0 800 500",className:"w-full max-w-4xl h-auto","aria-label":"Abstract class rules diagram",children:e.jsxs("g",{transform:"translate(20, 20)",children:[e.jsxs("g",{transform:"translate(0, 0)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"70",rx:"10",fill:"#1e1b4b",className:"dark:fill-gray-800 fill-indigo-50",stroke:"#818cf8",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"25",fill:"#c7d2fe",fontSize:"12",fontWeight:"bold",children:"Rule 1"}),e.jsx("text",{x:"15",y:"45",fill:"#e0e7ff",fontSize:"11",children:"If a class has ≥1 abstract method,"}),e.jsx("text",{x:"15",y:"60",fill:"#fca5a5",fontSize:"11",fontWeight:"bold",children:"→ class MUST be abstract"})]}),e.jsxs("g",{transform:"translate(260, 0)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"70",rx:"10",fill:"#1e1b4b",className:"dark:fill-gray-800 fill-indigo-50",stroke:"#818cf8",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"25",fill:"#c7d2fe",fontSize:"12",fontWeight:"bold",children:"Rule 2"}),e.jsx("text",{x:"15",y:"45",fill:"#e0e7ff",fontSize:"11",children:"Cannot instantiate abstract class"}),e.jsx("text",{x:"15",y:"60",fill:"#fca5a5",fontSize:"11",fontWeight:"bold",children:"→ new AbstractClass() ❌"})]}),e.jsxs("g",{transform:"translate(520, 0)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"70",rx:"10",fill:"#1e1b4b",className:"dark:fill-gray-800 fill-indigo-50",stroke:"#818cf8",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"25",fill:"#c7d2fe",fontSize:"12",fontWeight:"bold",children:"Rule 3"}),e.jsx("text",{x:"15",y:"45",fill:"#e0e7ff",fontSize:"11",children:"Abstract methods: no body"}),e.jsx("text",{x:"15",y:"60",fill:"#fca5a5",fontSize:"11",fontWeight:"bold",children:"→ ends with ; not "})]}),e.jsxs("g",{transform:"translate(0, 90)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"70",rx:"10",fill:"#1e1b4b",className:"dark:fill-gray-800 fill-indigo-50",stroke:"#818cf8",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"25",fill:"#c7d2fe",fontSize:"12",fontWeight:"bold",children:"Rule 4"}),e.jsx("text",{x:"15",y:"45",fill:"#e0e7ff",fontSize:"11",children:"Abstract method cannot be"}),e.jsx("text",{x:"15",y:"60",fill:"#fca5a5",fontSize:"11",fontWeight:"bold",children:"→ private, static, final"})]}),e.jsxs("g",{transform:"translate(260, 90)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"70",rx:"10",fill:"#1e1b4b",className:"dark:fill-gray-800 fill-indigo-50",stroke:"#818cf8",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"25",fill:"#c7d2fe",fontSize:"12",fontWeight:"bold",children:"Rule 5"}),e.jsx("text",{x:"15",y:"45",fill:"#e0e7ff",fontSize:"11",children:"Abstract class can have"}),e.jsx("text",{x:"15",y:"60",fill:"#86efac",fontSize:"11",fontWeight:"bold",children:"→ constructors, fields, concrete methods"})]}),e.jsxs("g",{transform:"translate(520, 90)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"70",rx:"10",fill:"#1e1b4b",className:"dark:fill-gray-800 fill-indigo-50",stroke:"#818cf8",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"25",fill:"#c7d2fe",fontSize:"12",fontWeight:"bold",children:"Rule 6"}),e.jsx("text",{x:"15",y:"45",fill:"#e0e7ff",fontSize:"11",children:"Subclass must implement ALL"}),e.jsx("text",{x:"15",y:"60",fill:"#fca5a5",fontSize:"11",fontWeight:"bold",children:"→ abstract methods (or be abstract)"})]}),e.jsxs("g",{transform:"translate(130, 180)",children:[e.jsx("rect",{x:"0",y:"0",width:"500",height:"70",rx:"10",fill:"#1e1b4b",className:"dark:fill-gray-800 fill-indigo-50",stroke:"#f472b6",strokeWidth:"2",strokeDasharray:"6 3"}),e.jsx("text",{x:"250",y:"25",textAnchor:"middle",fill:"#fbcfe8",fontSize:"12",fontWeight:"bold",children:"Rule 7 (The Big One)"}),e.jsx("text",{x:"250",y:"45",textAnchor:"middle",fill:"#e0e7ff",fontSize:"11",children:"Abstract class CANNOT be final"}),e.jsx("text",{x:"250",y:"60",textAnchor:"middle",fill:"#fca5a5",fontSize:"11",fontWeight:"bold",children:"→ final prevents inheritance, abstract requires it"})]})]})})}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-center text-sm text-gray-600 dark:text-gray-400 mt-4",children:[e.jsxs("div",{className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all",children:["🚫 ",e.jsx("span",{className:"font-medium",children:"No instantiation"})]}),e.jsxs("div",{className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all",children:["📝 ",e.jsx("span",{className:"font-medium",children:"No method body"})]}),e.jsxs("div",{className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all",children:["🔒 ",e.jsx("span",{className:"font-medium",children:"No private/static/final abstract"})]}),e.jsxs("div",{className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all",children:["🏗️ ",e.jsx("span",{className:"font-medium",children:"Constructors allowed"})]})]})]}),e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-red-500 pl-4 mb-4",children:"Rules in Action (What Breaks & What Works)"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Let's see code that violates rules and the correct way to follow them:"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{fileModule:i,title:"RuleViolationsDemo.java (What NOT to do)",highlightLines:[5,6,9,10,13,14,17,18]}),e.jsx(t,{fileModule:l,title:"AbstractClassRules.java (Correct Usage)",highlightLines:[5,6,7,10,11,12,15,16]}),e.jsx(t,{fileModule:o,title:"ConstructorRulesDemo.java",highlightLines:[8,9,10,14,15,18,19]})]}),e.jsx("div",{className:"mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg",children:e.jsxs("p",{className:"text-sm",children:["⚠️ ",e.jsx("strong",{children:"Compiler Errors to Remember:"}),' "Illegal combination of modifiers", "Cannot instantiate the type", "The type must be abstract", "Missing method body".']})})]}),e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-green-500 pl-4 mb-4",children:"Quick Reference: Allowed vs Forbidden"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full text-sm text-left text-gray-700 dark:text-gray-300",children:[e.jsx("thead",{className:"text-xs uppercase bg-gray-100 dark:bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3",children:"Modifier / Feature"}),e.jsx("th",{className:"px-4 py-3",children:"Abstract Class"}),e.jsx("th",{className:"px-4 py-3",children:"Abstract Method"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-800/50",children:[e.jsx("td",{className:"px-4 py-2",children:"public"}),e.jsx("td",{className:"px-4 py-2 text-green-600",children:"✓"}),e.jsx("td",{className:"px-4 py-2 text-green-600",children:"✓"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-800/50",children:[e.jsx("td",{className:"px-4 py-2",children:"protected"}),e.jsx("td",{className:"px-4 py-2 text-green-600",children:"✓"}),e.jsx("td",{className:"px-4 py-2 text-green-600",children:"✓"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-800/50",children:[e.jsx("td",{className:"px-4 py-2",children:"private"}),e.jsx("td",{className:"px-4 py-2 text-green-600",children:"✓ (fields/methods)"}),e.jsx("td",{className:"px-4 py-2 text-red-600",children:"❌"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-800/50",children:[e.jsx("td",{className:"px-4 py-2",children:"static"}),e.jsx("td",{className:"px-4 py-2 text-green-600",children:"✓"}),e.jsx("td",{className:"px-4 py-2 text-red-600",children:"❌"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-800/50",children:[e.jsx("td",{className:"px-4 py-2",children:"final"}),e.jsx("td",{className:"px-4 py-2 text-red-600",children:"❌ (class)"}),e.jsx("td",{className:"px-4 py-2 text-red-600",children:"❌"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-800/50",children:[e.jsx("td",{className:"px-4 py-2",children:"synchronized"}),e.jsx("td",{className:"px-4 py-2 text-green-600",children:"✓ (methods)"}),e.jsx("td",{className:"px-4 py-2 text-red-600",children:"❌"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-800/50",children:[e.jsx("td",{className:"px-4 py-2",children:"Constructors"}),e.jsx("td",{className:"px-4 py-2 text-green-600",children:"✓"}),e.jsx("td",{className:"px-4 py-2",children:"N/A"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-800/50",children:[e.jsx("td",{className:"px-4 py-2",children:"Instance fields"}),e.jsx("td",{className:"px-4 py-2 text-green-600",children:"✓"}),e.jsx("td",{className:"px-4 py-2",children:"N/A"})]})]})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeSlideUp",children:[e.jsxs("div",{className:"bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl p-5 border border-yellow-200 dark:border-yellow-800 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-semibold flex items-center gap-2",children:"💎 Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 mt-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"@Override annotation"})," when implementing abstract methods — the compiler will catch signature mismatches."]}),e.jsx("li",{children:`If you see "The type X must implement inherited abstract method", you've missed an implementation.`}),e.jsxs("li",{children:["Abstract classes can have ",e.jsx("strong",{children:"main()"})," — useful for testing subclasses."]}),e.jsxs("li",{children:["Remember: ",e.jsx("strong",{children:"abstract"})," ≠ ",e.jsx("strong",{children:"interface"})," — abstract classes can hold state."]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-5 border border-red-200 dark:border-red-800 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-semibold flex items-center gap-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 mt-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting the abstract keyword on class"})," when it has abstract methods → compiler error."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Trying to instantiate abstract class"})," with ",e.jsx("code",{children:"new"})," → error."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using private abstract method"}),' → "illegal combination of modifiers".']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Declaring abstract method in non-abstract class"}),' → "The abstract method can only be defined by an abstract class".']})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeSlideUp",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border-l-4 border-green-500",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"✅ Best Practices"}),e.jsxs("ul",{className:"space-y-2 mt-2 text-gray-700 dark:text-gray-300 list-disc list-inside",children:[e.jsxs("li",{children:["Always mark your abstract class as ",e.jsx("code",{children:"abstract"})," — even if it has no abstract methods (prevents instantiation)."]}),e.jsx("li",{children:"Document which methods are abstract and why."}),e.jsx("li",{children:"Keep abstract methods few and focused — too many indicate a design issue."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"protected"})," abstract methods when only subclasses should implement them."]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border-l-4 border-blue-500",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"📋 Mini Checklist"}),e.jsxs("ul",{className:"space-y-2 mt-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"✔️ Does every abstract method have a semicolon (no body)?"}),e.jsx("li",{children:"✔️ Is the class marked abstract if it has any abstract method?"}),e.jsx("li",{children:"✔️ Are all abstract methods implemented in concrete subclasses?"}),e.jsx("li",{children:"✔️ Did I avoid private/static/final on abstract methods?"})]})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800/60 rounded-xl p-5 border-l-8 border-indigo-400 animate-fadeSlideUp",children:[e.jsx("h3",{className:"font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2",children:"🧠 Think about..."}),e.jsx("p",{className:"italic text-gray-700 dark:text-gray-300 mt-1",children:"Why can't an abstract method be static? Consider: static methods belong to the class and are not inherited polymorphically. An abstract method expects runtime polymorphism — they conflict by design."}),e.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:["Try removing the ",e.jsx("code",{children:"abstract"})," keyword from the class but keep an abstract method. What error do you get? That's Rule #1 in action."]})]}),e.jsx("div",{className:"animate-fadeSlideUp",children:e.jsx(r,{title:"Rules for Abstract Classes - FAQs",questions:n})}),e.jsx("div",{className:"animate-fadeSlideUp mt-8",children:e.jsx(s,{note:"Rules can be dry, but turn them into a 'spot the violation' game. Show students broken code and ask them to identify which rule is violated. The 7 rules poster (SVG) can be printed or used as a reference. Emphasize that these rules exist to prevent ambiguity — Java forces you to be explicit about incomplete classes."})})]})]})};export{w as default};
