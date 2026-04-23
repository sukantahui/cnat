import{r as a,j as e}from"./index-29x6CIxg.js";import{J as n}from"./JavaFileLoader-D7AtwUFV.js";import{F as l}from"./FAQTemplate-Dzu6_Pg9.js";import{T as c}from"./TeacherSukantaHui-CkLTFTKX.js";import"./JavaCodeBlock-DXQeuhK6.js";import"./prism-D8qPEyTn.js";import"./browser-BhB_hP4n.js";import"./prism-java-BwO6k4I_.js";import"./clsx-B-dksMZM.js";import"./git-branch-Db0vt137.js";const d=`// DynamicMethodDispatchDemo.java\r
class Animal {\r
    void sound() {\r
        System.out.println("Animal makes a sound");\r
    }\r
}\r
\r
class Dog extends Animal {\r
    @Override\r
    void sound() {\r
        System.out.println("Dog barks: Woof Woof!");\r
    }\r
}\r
\r
class Cat extends Animal {\r
    @Override\r
    void sound() {\r
        System.out.println("Cat meows: Meow Meow!");\r
    }\r
}\r
\r
public class DynamicMethodDispatchDemo {\r
    public static void main(String[] args) {\r
        Animal myAnimal;   // reference of type Animal\r
        \r
        myAnimal = new Dog();\r
        myAnimal.sound();  // Output: Dog barks: Woof Woof!\r
        \r
        myAnimal = new Cat();\r
        myAnimal.sound();  // Output: Cat meows: Meow Meow!\r
        \r
        // Real-world: Swadeep uses a single reference to handle different animals\r
    }\r
}`,h=`// UpcastingDemo.java\r
class Teacher {\r
    void introduce() {\r
        System.out.println("I am a teacher");\r
    }\r
}\r
\r
class MathTeacher extends Teacher {\r
    @Override\r
    void introduce() {\r
        System.out.println("I am a Math teacher, I love numbers");\r
    }\r
    \r
    void teachAlgebra() {\r
        System.out.println("Teaching algebra...");\r
    }\r
}\r
\r
public class UpcastingDemo {\r
    public static void main(String[] args) {\r
        // Upcasting: subclass object assigned to superclass reference\r
        Teacher t = new MathTeacher();   // implicit upcasting\r
        t.introduce();   // dynamic dispatch calls MathTeacher's introduce()\r
        \r
        // t.teachAlgebra(); // ERROR! Reference type Teacher doesn't know teachAlgebra()\r
        \r
        // But the object is still a MathTeacher – dynamic dispatch works for overridden methods only.\r
        \r
        // Downcasting (with care)\r
        if (t instanceof MathTeacher) {\r
            MathTeacher mt = (MathTeacher) t;\r
            mt.teachAlgebra(); // Now it's safe\r
        }\r
    }\r
}`,m=`// RuntimePolymorphismDemo.java\r
// Demonstrating runtime polymorphism with an array of superclass references\r
class Student {\r
    void study() {\r
        System.out.println("Student studies general subjects");\r
    }\r
}\r
\r
class ArtStudent extends Student {\r
    @Override\r
    void study() {\r
        System.out.println("ArtStudent paints and draws");\r
    }\r
}\r
\r
class ScienceStudent extends Student {\r
    @Override\r
    void study() {\r
        System.out.println("ScienceStudent does experiments");\r
    }\r
}\r
\r
class CommerceStudent extends Student {\r
    @Override\r
    void study() {\r
        System.out.println("CommerceStudent learns accounting");\r
    }\r
}\r
\r
public class RuntimePolymorphismDemo {\r
    public static void main(String[] args) {\r
        // Array of superclass references\r
        Student[] students = {\r
            new ArtStudent(),\r
            new ScienceStudent(),\r
            new CommerceStudent(),\r
            new Student()\r
        };\r
        \r
        // Dynamic dispatch in a loop – each object's own study() is called\r
        for (Student s : students) {\r
            s.study();   // Which version runs? Depends on actual object type!\r
        }\r
        \r
        // Output:\r
        // ArtStudent paints and draws\r
        // ScienceStudent does experiments\r
        // CommerceStudent learns accounting\r
        // Student studies general subjects\r
        \r
        // Real-world: Tuhina's school can manage all students uniformly\r
        // while each behaves according to their specialization.\r
    }\r
}`,p=[{question:"What is dynamic method dispatch in Java?",shortAnswer:"Runtime mechanism where an overridden method is called based on the actual object type, not the reference type.",explanation:"It's also known as runtime polymorphism. The JVM decides at runtime which method implementation to execute when a superclass reference points to a subclass object.",hint:"Think of a remote control (reference) operating different devices (actual objects).",level:"basic",codeExample:"Animal a = new Dog(); a.sound(); // Dog's sound() runs"},{question:"What is the difference between compile-time polymorphism and runtime polymorphism?",shortAnswer:"Compile-time (method overloading) is resolved at compile time; runtime (method overriding & dynamic dispatch) is resolved at runtime.",explanation:"Overloaded methods are chosen based on reference type and arguments; overridden methods are chosen based on actual object type.",hint:"Overloading = same name different parameters; Overriding = same signature in subclass.",level:"intermediate",codeExample:`// Overloading: compile-time
void print(int a) {}
void print(String s) {}
// Overriding: runtime
class Parent { void show() {} }
class Child extends Parent { void show() {} }`},{question:"Can static methods be dynamically dispatched?",shortAnswer:"No. Static methods are resolved at compile time based on the reference type, not the actual object.",explanation:"Static methods belong to the class, not instances. So even if you use a subclass reference, the parent's static method runs if called via superclass reference.",hint:"Try calling a static method using a superclass reference pointing to a subclass object – you'll see the parent's version.",level:"basic",codeExample:`class Parent { static void test() { System.out.println("Parent"); } }
class Child extends Parent { static void test() { System.out.println("Child"); } }
Parent p = new Child(); p.test(); // prints Parent`},{question:"What is upcasting?",shortAnswer:"Assigning a subclass object to a superclass reference variable.",explanation:"Upcasting is always safe and implicit. It allows dynamic dispatch to work.",hint:"Upcasting = going up the inheritance hierarchy.",level:"basic",codeExample:"Dog d = new Dog(); Animal a = d; // upcasting"},{question:"What is downcasting? Why is it risky?",shortAnswer:"Assigning a superclass reference back to a subclass reference. Risky because it can throw ClassCastException if the actual object is not of that subclass.",explanation:"Downcasting requires explicit casting and should be preceded by instanceof check.",hint:"Only downcast if you are sure of the actual object type.",level:"intermediate",codeExample:`Animal a = new Dog(); Dog d = (Dog) a; // safe
Cat c = (Cat) a; // ClassCastException`},{question:`What will be the output? class A { void m() { System.out.print("A"); } }
class B extends A { void m() { System.out.print("B"); } }
public class Test { public static void main(String[] args) { A a = new B(); a.m(); } }`,shortAnswer:"B",explanation:"Dynamic dispatch calls B's m() because the actual object is B.",hint:"Reference type is A, but object is B.",level:"basic",codeExample:"Output: B"},{question:"What is the role of the JVM in dynamic method dispatch?",shortAnswer:"The JVM uses the actual object's class to look up the method at runtime via the virtual method table (vtable).",explanation:"Each class has a vtable mapping method signatures to actual code. The JVM follows the vtable of the runtime object.",hint:"Behind the scenes, each object carries a pointer to its class's method table.",level:"advanced",codeExample:"No code, but think of method lookup as a table lookup."},{question:"Can we achieve dynamic dispatch with fields (instance variables)?",shortAnswer:"No. Fields are not polymorphic – they are accessed based on reference type, not actual object type.",explanation:"Only methods are subject to dynamic dispatch. Field access is resolved at compile time.",hint:"Try accessing a field through a superclass reference – you'll get the superclass field value, even if subclass hides it.",level:"intermediate",codeExample:`class Parent { int x = 10; }
class Child extends Parent { int x = 20; }
Parent p = new Child(); System.out.println(p.x); // prints 10`},{question:"What is the difference between method hiding and method overriding?",shortAnswer:"Static methods are hidden (compile-time), instance methods are overridden (runtime).",explanation:"Hiding occurs with static methods – which method runs depends on reference type. Overriding is dynamic dispatch.",hint:"Static methods belong to class, not object.",level:"advanced",codeExample:`class Parent { static void show() { System.out.println("Parent"); } }
class Child extends Parent { static void show() { System.out.println("Child"); } }
Parent p = new Child(); p.show(); // Parent (hiding)
// vs instance method overriding`},{question:"Why can't private methods be overridden?",shortAnswer:"Private methods are not visible to subclasses, so they cannot be overridden. They are bound at compile time.",explanation:"If a subclass defines a method with the same signature, it's a new method, not an override.",hint:"Access modifiers matter. Private is class-private.",level:"basic",codeExample:`class Parent { private void secret() {} }
class Child extends Parent { private void secret() {} } // not overriding`},{question:`What is the output? class Parent { void print() { System.out.println("Parent"); } }
class Child extends Parent { void print() { System.out.println("Child"); } }
public class Main { public static void main(String[] args) { Parent p = new Child(); p.print(); } }`,shortAnswer:"Child",explanation:"Dynamic dispatch ensures Child's print() runs.",hint:"Actual object is Child.",level:"basic",codeExample:"Output: Child"},{question:"Can constructors be dynamically dispatched?",shortAnswer:"No. Constructors are not inherited and are always called in a chain (super() first). No polymorphism there.",explanation:"Constructors have a fixed call order and are resolved at compile time.",hint:"Think about new keyword and constructor chaining.",level:"basic",codeExample:"// Constructors run from parent to child, no dynamic choice."},{question:"What is a virtual method in Java?",shortAnswer:"All non-static, non-private, non-final methods are virtual by default – they support dynamic dispatch.",explanation:"Java does not have an explicit 'virtual' keyword like C++; all instance methods are virtual unless made final or private.",hint:"If you can override it, it's virtual.",level:"intermediate",codeExample:`void regularMethod() {} // virtual
final void finalMethod() {} // not virtual
private void privateMethod() {} // not virtual`},{question:"How does dynamic dispatch work with multiple levels of inheritance?",shortAnswer:"The JVM starts from the actual object's class and looks up the method. If not found, it goes up the parent chain.",explanation:"It always finds the most specific overriding version in the actual object's class hierarchy.",hint:"Search starts at the bottom (most specific) and goes up until a matching method is found.",level:"intermediate",codeExample:`class GrandParent { void m() { } }
class Parent extends GrandParent { void m() { } }
class Child extends Parent { }
GrandParent ref = new Child(); ref.m(); // calls Parent's m() (closest override above Child)`},{question:"What happens if you call a method that exists only in the subclass using a superclass reference?",shortAnswer:"Compilation error. The superclass reference only knows methods declared in the superclass.",explanation:"You must downcast to the subclass type to access subclass-specific methods.",hint:"The compiler checks the reference type, not the object.",level:"basic",codeExample:`class Animal { }
class Dog extends Animal { void bark() { } }
Animal a = new Dog();
a.bark(); // ERROR – Animal doesn't have bark()`},{question:"Can we achieve dynamic dispatch with interfaces?",shortAnswer:"Yes. Interface references pointing to implementing class objects also use dynamic dispatch.",explanation:"When you call an interface method, the actual object's implementation is invoked at runtime.",hint:"Interfaces are supertypes too.",level:"intermediate",codeExample:`interface Playable { void play(); }
class Guitar implements Playable { public void play() { System.out.println("Strum"); } }
Playable p = new Guitar(); p.play(); // dynamic dispatch`},{question:"What is the performance impact of dynamic dispatch?",shortAnswer:"Very minimal. JVM optimizations like inline caching make it almost as fast as static dispatch.",explanation:"Modern JVMs use virtual call optimizations (e.g., CHA, inline caching) to reduce overhead.",hint:"Don't worry about performance – worry about design.",level:"expert",codeExample:"// Not a code issue; rely on JIT compiler optimizations."},{question:`What will be the output? class A { void m1() { System.out.print("A1 "); m2(); } void m2() { System.out.print("A2 "); } }
class B extends A { void m2() { System.out.print("B2 "); } }
public class Test { public static void main(String[] args) { A a = new B(); a.m1(); } }`,shortAnswer:"A1 B2",explanation:"m1() is called from A (not overridden), but inside m1(), this.m2() is dynamically dispatched to B's m2().",hint:"The method call inside the parent class uses the actual object's version of m2().",level:"advanced",codeExample:"Output: A1 B2"},{question:"Is it possible to change the return type of an overridden method?",shortAnswer:"Yes, covariant return types allow a subclass to return a more specific type (subclass of original return type).",explanation:"Java 5+ supports covariant returns. The overriding method's return type must be a subtype of the overridden method's return type.",hint:"You can return a Dog where the parent returns Animal.",level:"intermediate",codeExample:`class Parent { Animal get() { return new Animal(); } }
class Child extends Parent { @Override Dog get() { return new Dog(); } } // allowed`},{question:"What is the difference between method overloading and dynamic dispatch?",shortAnswer:"Overloading is compile-time (static), dynamic dispatch is runtime (based on actual object).",explanation:"Overloaded methods are chosen by the compiler based on reference type and arguments. Overridden methods are chosen at runtime.",hint:"Overloading = same name, different parameters; Overriding = same signature, different implementation.",level:"intermediate",codeExample:`// Overloading: compiler decides
class Test { void print(String s) {} void print(int i) {} }
// Overriding + dynamic dispatch: runtime decides`},{question:"What is the purpose of the @Override annotation?",shortAnswer:"It tells the compiler that the method is intended to override a superclass method. It helps catch errors.",explanation:"If you misspell the method name or signature, the compiler will complain, preventing accidental overloading instead of overriding.",hint:"Always use @Override – it's a safety net.",level:"basic",codeExample:`@Override
void sound() { } // compiler checks if superclass has sound()`},{question:"Can a final method be dynamically dispatched?",shortAnswer:"No. Final methods cannot be overridden, so they are bound at compile time (static binding).",explanation:"Since there's no overriding, the method to call is known at compile time.",hint:"final = no change allowed.",level:"basic",codeExample:`class Parent { final void show() {} }
class Child extends Parent { // cannot override show() }`},{question:`What is the output? class Parent { void display() { System.out.println("Parent"); } }
class Child extends Parent { void display() { System.out.println("Child"); } }
public class Main { public static void main(String[] args) { Parent p = new Parent(); p.display(); } }`,shortAnswer:"Parent",explanation:"No polymorphism here – reference and actual object are both Parent.",hint:"Dynamic dispatch only when actual object is subclass.",level:"basic",codeExample:"Output: Parent"},{question:"How does dynamic dispatch work with abstract classes?",shortAnswer:"The same as with concrete classes – the actual object's method is called at runtime.",explanation:"Abstract classes can have concrete methods; those can be overridden. The reference can be abstract class type pointing to subclass object.",hint:"Abstract classes are just incomplete parents.",level:"intermediate",codeExample:`abstract class Vehicle { abstract void start(); }
class Car extends Vehicle { void start() { System.out.println("Car start"); } }
Vehicle v = new Car(); v.start(); // Car's start`},{question:"What is the 'method table' (vtable) in Java?",shortAnswer:"A per-class structure that stores pointers to the actual method implementations for dynamic dispatch.",explanation:"Each object has a pointer to its class's vtable. When a method is called, the JVM follows the pointer to the correct implementation.",hint:"Think of it as a function pointer array.",level:"expert",codeExample:"// Internal JVM detail – not directly accessible in Java code."},{question:`What will be the output? class A { void m() { System.out.println("A"); } }
class B extends A { void m() { System.out.println("B"); } }
class C extends B { void m() { System.out.println("C"); } }
public class Test { public static void main(String[] args) { A a = new C(); a.m(); } }`,shortAnswer:"C",explanation:"Dynamic dispatch finds the most specific override in the actual object's class (C).",hint:"The chain is A <- B <- C, C's m() is called.",level:"basic",codeExample:"Output: C"},{question:"Can we use dynamic dispatch with arrays?",shortAnswer:"Yes, if the array element type is a superclass/interface and elements are subclass objects.",explanation:"When you iterate and call a method, dynamic dispatch works per element.",hint:"Polymorphic arrays are common in collections.",level:"intermediate",codeExample:`Animal[] zoo = { new Dog(), new Cat() };
for(Animal a : zoo) a.sound(); // each calls its own sound()`},{question:"What is the difference between early binding and late binding?",shortAnswer:"Early binding (static) occurs at compile time; late binding (dynamic) occurs at runtime via dynamic dispatch.",explanation:"Private, static, final methods are early bound. Instance methods are late bound.",hint:"Which methods can be overridden? Those are late bound.",level:"intermediate",codeExample:`// Early: static methods, private, final
// Late: normal instance methods`},{question:"What happens if a subclass overrides a method but reduces its visibility?",shortAnswer:"Compilation error. You cannot reduce the visibility of an overridden method (e.g., public -> protected).",explanation:"Liskov substitution principle – a subclass must be at least as accessible as the superclass.",hint:"You can increase visibility (protected -> public) but not decrease.",level:"advanced",codeExample:`class Parent { public void show() {} }
class Child extends Parent { protected void show() {} } // ERROR`},{question:`What is the output? class Parent { void m() { System.out.println("Parent m"); } }
class Child extends Parent { void m() { System.out.println("Child m"); } }
public class Main { public static void main(String[] args) { Parent p = null; p.m(); } }`,shortAnswer:"NullPointerException at runtime, not dynamic dispatch issue.",explanation:"The reference is null, so method call throws NPE before any dispatch happens.",hint:"Dynamic dispatch requires an actual object.",level:"basic",codeExample:'Exception in thread "main" java.lang.NullPointerException'}],k=()=>{const[t,s]=a.useState(!0);a.useEffect(()=>{t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[t]);const i=()=>s(!t);return e.jsxs("div",{className:"bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsx("div",{className:"fixed top-4 right-4 z-50",children:e.jsx("button",{onClick:i,className:"p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-md","aria-label":"Toggle dark mode",children:t?"☀️":"🌙"})}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-12 space-y-16",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[slideUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"Dynamic Method Dispatch"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Runtime polymorphism: How Java decides which overridden method to call based on the actual object type, not the reference variable."})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-blue-500 pl-4",children:"What is Dynamic Method Dispatch?"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 animate-[slideUp_0.5s_ease-out]",children:[e.jsx("h3",{className:"text-xl font-bold text-blue-600 dark:text-blue-400",children:"Prototype / Signature"}),e.jsx("pre",{className:"bg-gray-900 text-green-300 p-3 rounded-md text-sm overflow-x-auto mt-2",children:`ParentClass ref;
ref = new ChildClass();
ref.overriddenMethod(); // calls Child's version`}),e.jsxs("p",{className:"mt-3",children:[e.jsx("strong",{children:"Return type:"})," Depends on the method (same as overridden method)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Purpose:"})," Enable runtime polymorphism – decide which method implementation to execute based on actual object type."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"When used:"})," Whenever a superclass reference refers to a subclass object and an overridden method is called."]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 animate-[slideUp_0.6s_ease-out]",children:[e.jsx("h3",{className:"text-xl font-bold text-purple-600 dark:text-purple-400",children:"Key Concept: Virtual Method Invocation"}),e.jsxs("p",{className:"mt-2",children:["Java uses ",e.jsx("strong",{children:"late binding"})," – the method to execute is determined at runtime, not compile time."]}),e.jsxs("div",{className:"mt-4 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg",children:["💡 ",e.jsx("strong",{children:"Real-world analogy:"}),' A "Play" button on a media player – pressing it on a MusicPlayer plays music, on a VideoPlayer plays video. The reference is "MediaPlayer", but the actual object decides the behavior.']})]})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800/50 p-6 rounded-2xl",children:[e.jsx("h3",{className:"text-2xl font-semibold text-center mb-6",children:"How Java Resolves the Method Call"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"700",height:"280",viewBox:"0 0 700 280",className:"w-full max-w-3xl",children:[e.jsxs("defs",{children:[e.jsx("marker",{id:"arrowBlue",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#3b82f6"})}),e.jsx("marker",{id:"arrowGreen",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#10b981"})})]}),e.jsx("rect",{x:"30",y:"20",width:"160",height:"50",rx:"8",fill:"#1e3a8a",className:"dark:fill-blue-800"}),e.jsx("text",{x:"110",y:"50",textAnchor:"middle",fill:"white",fontSize:"14",children:"Animal ref"}),e.jsx("line",{x1:"190",y1:"45",x2:"290",y2:"45",stroke:"#3b82f6",strokeWidth:"3",markerEnd:"url(#arrowBlue)"}),e.jsx("text",{x:"240",y:"35",textAnchor:"middle",fill:"#3b82f6",fontSize:"12",children:"= new Dog()"}),e.jsx("rect",{x:"300",y:"20",width:"140",height:"50",rx:"8",fill:"#047857",className:"dark:fill-green-800"}),e.jsx("text",{x:"370",y:"50",textAnchor:"middle",fill:"white",fontSize:"14",children:"Dog object"}),e.jsx("path",{d:"M370 70 L370 120 L200 120 L200 160",stroke:"#f97316",strokeWidth:"2",fill:"none",markerEnd:"url(#arrowBlue)",strokeDasharray:"6",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"0",to:"20",dur:"1s",repeatCount:"indefinite"})}),e.jsx("text",{x:"280",y:"115",textAnchor:"middle",fill:"#f97316",fontSize:"12",children:"ref.sound()"}),e.jsx("polygon",{points:"200,170 260,210 200,250 140,210",fill:"#d97706",className:"dark:fill-yellow-700"}),e.jsx("text",{x:"200",y:"215",textAnchor:"middle",fill:"white",fontSize:"12",children:"Which sound()?"}),e.jsx("line",{x1:"140",y1:"210",x2:"60",y2:"210",stroke:"#ef4444",strokeWidth:"2",markerEnd:"url(#arrowBlue)"}),e.jsx("text",{x:"100",y:"200",textAnchor:"middle",fill:"#ef4444",fontSize:"12",children:"Compile-time: Animal"}),e.jsx("rect",{x:"10",y:"225",width:"100",height:"40",rx:"6",fill:"#ef4444"}),e.jsx("text",{x:"60",y:"250",textAnchor:"middle",fill:"white",fontSize:"11",children:"Animal.sound()"}),e.jsx("line",{x1:"260",y1:"210",x2:"340",y2:"210",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrowGreen)"}),e.jsx("text",{x:"300",y:"200",textAnchor:"middle",fill:"#10b981",fontSize:"12",children:"Runtime: Dog"}),e.jsx("rect",{x:"290",y:"225",width:"100",height:"40",rx:"6",fill:"#10b981"}),e.jsx("text",{x:"340",y:"250",textAnchor:"middle",fill:"white",fontSize:"11",children:"Dog.sound() ✓"}),e.jsx("animateTransform",{attributeName:"transform",type:"scale",values:"1;1.02;1",dur:"2s",repeatCount:"indefinite",xlinkHref:"#decision"})]})}),e.jsxs("p",{className:"text-center text-gray-600 dark:text-gray-400 mt-4",children:["The method to execute is determined by the ",e.jsx("strong",{children:"actual object type (Dog)"}),", not the reference type (Animal)."]})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-green-500 pl-4",children:"Java Examples"}),e.jsxs("div",{className:"grid gap-6",children:[e.jsx(n,{fileModule:d,title:"DynamicMethodDispatchDemo.java",highlightLines:[]}),e.jsx(n,{fileModule:h,title:"UpcastingDemo.java",highlightLines:[]}),e.jsx(n,{fileModule:m,title:"RuntimePolymorphismDemo.java",highlightLines:[]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-6 rounded-xl hover:shadow-lg transition-all",children:[e.jsx("h3",{className:"text-2xl font-bold text-red-600 dark:text-red-400",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-2",children:[e.jsx("li",{children:"Expecting compile-time binding for overridden methods – methods are always virtual in Java (except static, private, final)."}),e.jsxs("li",{children:["Forgetting that static methods are ",e.jsx("strong",{children:"not"})," dynamically dispatched – they are resolved at compile time based on reference type."]}),e.jsx("li",{children:"Confusing overloaded methods (compile-time) with overridden methods (runtime)."}),e.jsx("li",{children:"Assuming private methods can be overridden – they are not visible to subclasses."}),e.jsxs("li",{children:["Using downcasting without ",e.jsx("code",{children:"instanceof"})," check → risk of ClassCastException."]})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-6 rounded-xl hover:shadow-lg transition-all",children:[e.jsx("h3",{className:"text-2xl font-bold text-green-600 dark:text-green-400",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-2",children:[e.jsx("li",{children:"Use superclass references for flexibility – program to an interface/superclass, not implementation."}),e.jsxs("li",{children:["Always annotate overridden methods with ",e.jsx("code",{children:"@Override"})," to avoid mistakes."]}),e.jsxs("li",{children:["Remember: dynamic dispatch only works for ",e.jsx("strong",{children:"instance methods"})," (non-static, non-private, non-final)."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"instanceof"})," before downcasting to ensure type safety."]}),e.jsx("li",{children:"Design inheritance hierarchies with clear “is-a” relationships for meaningful polymorphism."})]})]})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-blue-700 dark:text-blue-300",children:"💡 Pro Tips & Hints"}),e.jsxs("p",{className:"mt-2",children:[e.jsx("strong",{children:"Think about:"})," What would happen if the method in the parent class were declared ",e.jsx("code",{children:"final"}),"?"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Observe carefully:"})," In the output, which class's method is printed – the reference type or the actual object type?"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Try changing this:"})," Make the method ",e.jsx("code",{children:"static"})," in both parent and child – then call it using a superclass reference pointing to subclass object. What changes?"]}),e.jsxs("p",{className:"mt-3 italic",children:["Professional insight: Dynamic dispatch is the foundation of the ",e.jsx("strong",{children:"Strategy Pattern"})," and many other OOP design patterns."]})]}),e.jsxs("div",{className:"border-2 border-dashed border-gray-400 p-5 rounded-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-center",children:"📋 Student Checklist"}),e.jsx("div",{className:"grid grid-cols-2 gap-2 mt-4",children:["I understand that dynamic dispatch = runtime polymorphism.","I know that method resolution depends on actual object type, not reference.","I can differentiate between overloading (compile-time) and overriding (runtime).","I know that static, private, and final methods are not dynamically dispatched.","I can use upcasting to write flexible, reusable code.","I use instanceof before downcasting to avoid ClassCastException."].map((r,o)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-500",children:"✓"})," ",r]},o))})]}),e.jsx(c,{note:"Dynamic method dispatch is the magic behind polymorphism. Remember: 'What you see (reference) is not always what you get (object)'. Always test with small examples to see which method actually runs. Use @Override religiously!"}),e.jsx(l,{title:"Dynamic Method Dispatch - FAQs",questions:p})]})]})};export{k as default};
