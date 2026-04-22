import{r as a,j as e}from"./index-CJBYzsBp.js";import{J as t}from"./JavaFileLoader-Dax7XGvZ.js";import{T as n}from"./TeacherSukantaHui-BpioJGg-.js";import{F as s}from"./FAQTemplate-BjI0qxLa.js";import"./JavaCodeBlock-mMDJ51Fq.js";import"./prism-Dc-XSp4L.js";import"./browser-K208wPFZ.js";import"./prism-java-BwO6k4I_.js";import"./git-branch-BkM3LVEU.js";import"./clsx-B-dksMZM.js";const r=[{question:"What is abstraction in object-oriented programming?",shortAnswer:"Abstraction hides implementation details and shows only essential features.",explanation:"It's a fundamental OOP concept that reduces complexity by focusing on 'what' an object does rather than 'how' it does it. Achieved via abstract classes and interfaces.",hint:"Think of a TV remote - you press buttons without knowing the internal circuits.",level:"basic",codeExample:"abstract class Vehicle { abstract void start(); }"},{question:"How is abstraction different from encapsulation?",shortAnswer:"Abstraction hides complexity (design level), encapsulation hides data (implementation level).",explanation:"Abstraction provides a simplified interface to a complex system. Encapsulation bundles data and methods together and restricts direct access to some components.",hint:"Abstraction = 'what you see', Encapsulation = 'how you protect'.",level:"intermediate",codeExample:`// Abstraction: interface Vehicle { void move(); }
// Encapsulation: private int speed; public void setSpeed(int s) { if(s>0) speed=s; }`},{question:"Can we instantiate an abstract class in Java?",shortAnswer:"No, abstract classes cannot be instantiated directly.",explanation:"Abstract classes are incomplete (they may have abstract methods without bodies). You must create a concrete subclass that implements all abstract methods.",hint:"Think of 'Animal' - you can't create an 'Animal' object, but you can create a 'Dog' or 'Cat'.",level:"basic",codeExample:`abstract class Animal {}
// Animal a = new Animal(); // ERROR
class Dog extends Animal {}
Dog d = new Dog(); // OK`},{question:"What is the purpose of an abstract method?",shortAnswer:"To declare a method signature without implementation, forcing subclasses to provide their own version.",explanation:"Abstract methods define a contract. They ensure that every subclass will have that behavior, but each subclass can implement it differently.",hint:"A 'makeSound()' method for Animal - Dog barks, Cat meows.",level:"basic",codeExample:"abstract void makeSound(); // no body"},{question:"Can an abstract class have constructors?",shortAnswer:"Yes, abstract classes can have constructors, and they are called when a concrete subclass is instantiated.",explanation:"Constructors in abstract classes are used to initialize common state. They cannot be used to instantiate the abstract class directly but are invoked via super() from subclasses.",hint:"The abstract class constructor runs first, then the subclass constructor.",level:"intermediate",codeExample:`abstract class Base { Base() { System.out.println("Base"); } }
class Derived extends Base { Derived() { super(); } }`},{question:"When should you use an abstract class instead of an interface (prior to Java 8)?",shortAnswer:"Use abstract class when you need to share code (concrete methods) among closely related classes.",explanation:"Abstract classes can have state (fields) and implemented methods. Interfaces were pure contracts. With default methods, the line blurs, but abstract classes still allow instance variables.",hint:"If you want a template with some default behavior, choose abstract class.",level:"intermediate",codeExample:"abstract class FileProcessor { void log(String msg) {...} abstract void process(); }"},{question:"What happens if a subclass does not implement all abstract methods of its parent abstract class?",shortAnswer:"The subclass must also be declared abstract.",explanation:"Java enforces that any concrete class must implement all inherited abstract methods. If not, the class remains abstract and cannot be instantiated.",hint:"The compiler will give an error unless you add 'abstract' to the subclass.",level:"basic",codeExample:`abstract class A { abstract void m(); }
class B extends A { } // ERROR
abstract class C extends A { } // OK`},{question:"Can an abstract class be final?",shortAnswer:"No, an abstract class cannot be final because final prevents inheritance, and abstract requires inheritance.",explanation:"The two modifiers are contradictory. A final class cannot be extended, but an abstract class is meant to be extended.",hint:"Illegal combination: 'abstract final' results in a compile-time error.",level:"intermediate",codeExample:"// abstract final class X {} // COMPILE ERROR"},{question:"How does abstraction improve code maintainability?",shortAnswer:"By separating interface from implementation, changes to internals don't affect code that depends on the abstraction.",explanation:"When you rely on an abstract type, you can swap concrete implementations without modifying client code. This reduces ripple effects.",hint:"If you change how a 'PaymentProcessor' works, the shopping cart code doesn't break.",level:"expert",codeExample:`// Client depends on interface PaymentProcessor
processor.process(amount);
// Later you can change to PayPalProcessor without touching client.`},{question:"What is the 'abstraction leak' problem?",shortAnswer:"When an abstraction accidentally exposes implementation details, forcing clients to know about internals.",explanation:"Example: a method called 'getFileSize()' that throws 'FileNotFoundException' leaks that files are involved. Better to catch and wrap into an abstraction-appropriate exception.",hint:"If you see a stack trace that mentions 'SQLException' from a 'UserRepository' abstraction, that's a leak.",level:"expert",codeExample:`// Leaky: public void load() throws SQLException;
// Better: public void load() throws DataAccessException;`},{question:"What is the difference between abstract class and concrete class?",shortAnswer:"Concrete classes can be instantiated and have all methods implemented; abstract classes cannot be instantiated and may have abstract methods.",explanation:"Concrete classes provide full implementation. Abstract classes act as blueprints that define common behavior and force subclasses to provide specific implementations.",hint:"Concrete = ready-to-use object; Abstract = template.",level:"basic",codeExample:`abstract class Vehicle {} // cannot new
class Car extends Vehicle {} // concrete, can new`},{question:"Can an abstract class implement an interface?",shortAnswer:"Yes, an abstract class can implement an interface, and it may choose to implement some or none of the interface's methods.",explanation:"This allows you to provide default implementations for some methods while leaving others abstract for subclasses.",hint:"Useful for adapter classes where you only need to override a few methods.",level:"intermediate",codeExample:`interface Drawable { void draw(); void resize(); }
abstract class Shape implements Drawable { public void resize() {...} } // draw() remains abstract`},{question:"How does abstraction support dependency inversion (DIP)?",shortAnswer:"DIP states that high-level modules should depend on abstractions, not concretions. Abstraction enables that by providing stable interfaces.",explanation:"By coding to interfaces/abstract classes, you decouple modules, making the system more flexible and testable.",hint:"Your service layer should depend on 'PaymentGateway' interface, not 'StripePaymentGateway' directly.",level:"expert",codeExample:`class OrderService {
  private PaymentProcessor processor; // abstraction
  OrderService(PaymentProcessor p) { this.processor = p; }
}`},{question:"Can we have a static method in an abstract class?",shortAnswer:"Yes, abstract classes can have static methods. They belong to the class, not instances, and can be called without a subclass instance.",explanation:"Static methods are not inherited (they are hidden), but they are accessible via the abstract class name. They cannot be abstract because abstract implies overriding.",hint:"Useful for factory methods that return appropriate subclasses.",level:"intermediate",codeExample:`abstract class Database {
  static Database getConnection(String type) { ... }
}`},{question:"What is the purpose of 'abstract' keyword on a class that has no abstract methods?",shortAnswer:"To prevent instantiation of the class, even though it is fully implemented.",explanation:"Sometimes you want a class to serve only as a base class (like a utility of common code) and not be instantiated on its own.",hint:"It signals 'this class is meant to be extended, not used directly'.",level:"intermediate",codeExample:`abstract class BaseLogger {
  void log(String msg) { System.out.println(msg); }
}
// BaseLogger b = new BaseLogger(); // ERROR`},{question:"How does abstraction relate to 'information hiding'?",shortAnswer:"Abstraction is about providing a simple interface; information hiding is about concealing implementation details. They work together.",explanation:"Abstraction decides what to expose, information hiding decides what to hide. Both reduce complexity and increase safety.",hint:"Public methods = abstraction; private fields/methods = information hiding.",level:"expert",codeExample:`class Bank {
  public void withdraw(double amt) { ... } // abstraction
  private void audit() { ... } // hidden
}`},{question:"What are the advantages of using abstraction in large projects?",shortAnswer:"It reduces complexity, improves reusability, eases maintenance, and allows parallel development.",explanation:"Teams can work on different concrete implementations as long as they adhere to the same abstract contracts. Changes remain local.",hint:"Think of pluggable components: different payment methods, databases, or logging frameworks.",level:"expert",codeExample:`// Multiple implementations of same abstraction
List<PaymentMethod> methods = Arrays.asList(new CreditCard(), new PayPal());`},{question:"Can an abstract class have a main method?",shortAnswer:"Yes, an abstract class can have a main method, and it can be executed (though the class itself cannot be instantiated).",explanation:"The main method is static, so it belongs to the class type, not an instance. You can run it as a normal Java program.",hint:"Try it: put public static void main in an abstract class - it runs fine.",level:"intermediate",codeExample:'abstract class Test { public static void main(String[] args) { System.out.println("Hello"); } }'},{question:"What is the difference between abstraction and polymorphism?",shortAnswer:"Abstraction defines a contract; polymorphism allows using different implementations through that contract.",explanation:"Abstraction is about design (what to expect), polymorphism is about runtime behavior (which concrete method gets called).",hint:"Abstraction: 'Animal can move'. Polymorphism: a Dog runs, a Bird flies, both via move().",level:"intermediate",codeExample:`Animal a = new Dog(); // abstraction
 a.move(); // polymorphic call`},{question:"When is it better to use an interface over an abstract class in modern Java (with default methods)?",shortAnswer:"When you need multiple inheritance (implement several interfaces) or when the abstraction has no state.",explanation:"Interfaces allow a class to implement multiple types. Abstract classes still allow fields and constructors, but a class can extend only one.",hint:"If you need to add new methods without breaking existing code, use interface with default methods.",level:"expert",codeExample:`interface Flyable { default void fly() { ... } }
interface Swimmable { default void swim() { ... } }
class Duck implements Flyable, Swimmable {}`},{question:"Can you declare an abstract method in a non-abstract class?",shortAnswer:"No. If a class contains any abstract method, the class itself must be declared abstract.",explanation:"Java prevents creating instances of a class with incomplete method definitions. The abstract modifier on the class signals incompleteness.",hint:"The compiler error: 'The type X must be an abstract class to define abstract methods'.",level:"basic",codeExample:"class Bad { abstract void m(); } // ERROR"},{question:"How does abstraction help in unit testing?",shortAnswer:"It allows you to replace real implementations with mocks or stubs that adhere to the same abstraction.",explanation:"By coding to interfaces, you can inject test doubles, isolating the unit under test from external dependencies like databases or APIs.",hint:"Use Mockito to mock an interface and verify interactions without real network calls.",level:"expert",codeExample:"UserService service = new UserService(mockUserRepository); // mock implements interface"},{question:"What is the 'template method' pattern and how does it use abstraction?",shortAnswer:"Template method defines the skeleton of an algorithm in an abstract class, letting subclasses override specific steps.",explanation:"The abstract class contains a concrete method that calls abstract methods. Subclasses provide implementations for the abstract steps.",hint:"Like a recipe: the abstract class says 'boil water, add tea, steep', subclasses define what tea to add.",level:"expert",codeExample:"abstract class Brew { final void make() { boil(); add(); steep(); } abstract void add(); }"},{question:"Can we have a private abstract method?",shortAnswer:"No, because an abstract method must be overridden by subclasses, but private methods are not visible to subclasses.",explanation:"Private members are inaccessible outside the class, so a subclass cannot provide an implementation. The combination is illegal.",hint:"Compiler says: 'illegal combination of modifiers: abstract and private'.",level:"intermediate",codeExample:"// abstract private void m(); // ERROR"},{question:"What does the 'non-sealed' modifier mean in the context of sealed classes (Java 17+)?",shortAnswer:"It allows a subclass of a sealed class to be non-sealed, opening up further extension.",explanation:"Sealed classes restrict subclasses. A non-sealed subclass breaks the sealing for its own hierarchy, allowing unknown subclasses.",hint:"Sealed -> permits only specific subclasses. Non-sealed -> permits any subclass.",level:"expert",codeExample:`sealed class Shape permits Circle, Rectangle {}
non-sealed class Circle extends Shape {}
class FancyCircle extends Circle {} // now allowed`},{question:"How would you explain abstraction to a non-programmer?",shortAnswer:"Abstraction is like using a microwave: you press buttons (simple interface) without needing to know how microwaves work (complex internals).",explanation:"It's about hiding unnecessary detail. The microwave abstracts away magnetrons, timers, and waveguides.",hint:"Ask: Do you need to know the physics of radio waves to heat food? No.",level:"basic",codeExample:"// Press start() -> internal machinery runs"},{question:"What is the relationship between abstraction and refactoring?",shortAnswer:"Abstraction allows refactoring internal code without affecting external clients, as long as the abstract contract remains unchanged.",explanation:"You can optimize, fix bugs, or change algorithms inside a class; client code that uses the public abstract interface never needs to change.",hint:"The abstract methods act as a protective shield.",level:"expert",codeExample:"// Changed implementation from ArrayList to LinkedList, but get(int) still works"},{question:"Can an abstract class be used as a type for a method parameter?",shortAnswer:"Yes, you can use an abstract class type for parameters, variables, and return types.",explanation:"This is the essence of abstraction: you write code that works with any concrete subclass of the abstract type.",hint:"It promotes loose coupling.",level:"intermediate",codeExample:"void process(Shape s) { s.draw(); } // works for Circle, Rectangle"},{question:"What is the 'abstract factory' pattern?",shortAnswer:"A creational pattern that provides an interface for creating families of related objects without specifying their concrete classes.",explanation:"It uses abstraction to decouple client code from concrete product classes. The abstract factory returns abstract products.",hint:"Example: GUIFactory creates Button and Window; WindowsFactory returns WindowsButton, WindowsWindow.",level:"expert",codeExample:`interface GUIFactory { Button createButton(); }
class WinFactory implements GUIFactory { ... }`},{question:"How does Java's 'abstract' keyword differ from 'virtual' in C++?",shortAnswer:"In Java, 'abstract' methods have no body; in C++, 'virtual' methods can have a default implementation (pure virtual = abstract).",explanation:"Java's abstract method is equivalent to C++ pure virtual function (=0). Java doesn't need 'virtual' keyword because all non-static methods are virtual by default.",hint:"C++: virtual void f() = 0; Java: abstract void f();",level:"expert",codeExample:`// C++: virtual void start() = 0;
// Java: public abstract void start();`},{question:"What happens if you try to override a concrete method with an abstract one in a subclass?",shortAnswer:"It is allowed, but the subclass must then be declared abstract because it introduces a new abstract method.",explanation:"You can 're-abstract' a method by overriding a concrete method with an abstract one. This forces further subclasses to implement it.",hint:"Rarely used, but can be useful in deep hierarchies.",level:"expert",codeExample:`class A { void m() {} }
abstract class B extends A { abstract void m(); } // allowed, B abstract`}],i=`// RemoteControlAbstraction.java\r
// Demonstrates abstraction: hiding internal circuit details behind simple buttons\r
\r
// Abstract class representing a generic remote control\r
abstract class RemoteControl {\r
    // Abstract methods (what the remote can do, but no how)\r
    public abstract void turnOn();\r
    public abstract void turnOff();\r
    public abstract void setChannel(int channel);\r
    \r
    // Concrete method (shared implementation)\r
    public void printBrand(String brand) {\r
        System.out.println("Remote brand: " + brand);\r
    }\r
}\r
\r
// Concrete implementation for a TV remote\r
class TVRemote extends RemoteControl {\r
    private boolean isOn = false;\r
    private int currentChannel = 1;\r
    \r
    @Override\r
    public void turnOn() {\r
        // Complex internal wiring hidden from user\r
        isOn = true;\r
        System.out.println("TV powered ON. Signal sent to infrared LED.");\r
    }\r
    \r
    @Override\r
    public void turnOff() {\r
        isOn = false;\r
        System.out.println("TV powered OFF. Standby circuit engaged.");\r
    }\r
    \r
    @Override\r
    public void setChannel(int channel) {\r
        if (isOn && channel >= 1 && channel <= 100) {\r
            currentChannel = channel;\r
            System.out.println("Channel set to " + channel + " (tuner frequency adjusted)");\r
        } else {\r
            System.out.println("Cannot change channel: TV is " + (isOn ? "off or invalid channel" : "off"));\r
        }\r
    }\r
    \r
    // Hidden internal method (not part of abstraction)\r
    private void validatePin(int pin) {\r
        System.out.println("PIN validated internally");\r
    }\r
}\r
\r
// Client code - user only sees the abstracted interface\r
public class RemoteControlAbstraction {\r
    public static void main(String[] args) {\r
        RemoteControl myRemote = new TVRemote();  // Abstraction in action\r
        myRemote.turnOn();        // User doesn't know about infrared signals\r
        myRemote.setChannel(42);\r
        myRemote.turnOff();\r
        // myRemote.validatePin(1234); // ERROR: private method - abstraction hides it\r
    }\r
}`,o=`// BankAccountAbstraction.java\r
// Real-world abstraction: bank account hides internal ledger and balance calculation\r
\r
abstract class BankAccount {\r
    protected double balance;\r
    \r
    public BankAccount(double initialBalance) {\r
        this.balance = initialBalance;\r
    }\r
    \r
    // Abstract methods - what you can do\r
    public abstract void deposit(double amount);\r
    public abstract void withdraw(double amount);\r
    public abstract double getBalance();\r
    \r
    // Concrete method - shared behavior\r
    public void printStatement() {\r
        System.out.println("Account statement generated (internal logs hidden)");\r
    }\r
}\r
\r
class SavingsAccount extends BankAccount {\r
    private double interestRate = 0.03;\r
    private String lastTransaction = "";\r
    \r
    public SavingsAccount(double initialBalance) {\r
        super(initialBalance);\r
    }\r
    \r
    @Override\r
    public void deposit(double amount) {\r
        if (amount > 0) {\r
            balance += amount;\r
            updateLedger("DEPOSIT", amount);   // hidden internal method\r
            System.out.println("Deposited: $" + amount);\r
        }\r
    }\r
    \r
    @Override\r
    public void withdraw(double amount) {\r
        if (amount > 0 && amount <= balance) {\r
            balance -= amount;\r
            updateLedger("WITHDRAW", amount);\r
            System.out.println("Withdrew: $" + amount);\r
        } else {\r
            System.out.println("Insufficient funds");\r
        }\r
    }\r
    \r
    @Override\r
    public double getBalance() {\r
        applyInterestIfNeeded();  // hidden calculation\r
        return balance;\r
    }\r
    \r
    // INTERNAL COMPLEXITY (hidden from client)\r
    private void updateLedger(String type, double amount) {\r
        lastTransaction = type + " of $" + amount;\r
        System.out.println("Ledger updated: " + lastTransaction);\r
    }\r
    \r
    private void applyInterestIfNeeded() {\r
        // Complex interest calculation hidden\r
        balance += balance * interestRate / 12;\r
    }\r
}\r
\r
public class BankAccountAbstraction {\r
    public static void main(String[] args) {\r
        BankAccount myAccount = new SavingsAccount(500.0);\r
        myAccount.deposit(200);\r
        myAccount.withdraw(100);\r
        System.out.println("Final balance: $" + myAccount.getBalance());\r
        // myAccount.updateLedger(...); // ERROR - hidden method\r
    }\r
}`,l=`// ShapeAbstraction.java\r
// Abstraction through geometric shapes - each shape calculates area differently\r
\r
abstract class Shape {\r
    // Abstract methods - each shape must implement its own way\r
    public abstract double calculateArea();\r
    public abstract double calculatePerimeter();\r
    \r
    // Concrete method - same for all shapes\r
    public void displayInfo() {\r
        System.out.println("Shape type: " + this.getClass().getSimpleName());\r
        System.out.println("Area: " + calculateArea());\r
        System.out.println("Perimeter: " + calculatePerimeter());\r
    }\r
}\r
\r
class Circle extends Shape {\r
    private double radius;\r
    \r
    public Circle(double radius) {\r
        this.radius = radius;\r
    }\r
    \r
    @Override\r
    public double calculateArea() {\r
        // Complex formula hidden - user just calls the method\r
        return Math.PI * radius * radius;\r
    }\r
    \r
    @Override\r
    public double calculatePerimeter() {\r
        return 2 * Math.PI * radius;\r
    }\r
}\r
\r
class Rectangle extends Shape {\r
    private double width, height;\r
    \r
    public Rectangle(double width, double height) {\r
        this.width = width;\r
        this.height = height;\r
    }\r
    \r
    @Override\r
    public double calculateArea() {\r
        return width * height;\r
    }\r
    \r
    @Override\r
    public double calculatePerimeter() {\r
        return 2 * (width + height);\r
    }\r
}\r
\r
public class ShapeAbstraction {\r
    public static void main(String[] args) {\r
        Shape s1 = new Circle(5);\r
        Shape s2 = new Rectangle(4, 6);\r
        \r
        s1.displayInfo();   // No need to know π * r² inside\r
        s2.displayInfo();\r
        \r
        // Abstraction benefit: we can treat all shapes uniformly\r
        Shape[] shapes = {s1, s2};\r
        double totalArea = 0;\r
        for (Shape shape : shapes) {\r
            totalArea += shape.calculateArea();\r
        }\r
        System.out.println("Total area: " + totalArea);\r
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
      `}),e.jsx("div",{className:"max-w-5xl mx-auto animate-fadeSlideUp",children:e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"Concept of Abstraction"}),e.jsx("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed",children:"Hiding complexity, revealing essentials — the art of designing clean, scalable software."})]})}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-blue-500 pl-4 mb-4",children:"What is Abstraction?"}),e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-blue-600 dark:text-blue-400",children:"Abstraction"})," is the process of hiding implementation details and exposing only the essential features of an object or system. It helps manage complexity by focusing on ",e.jsx("em",{children:"what"})," something does instead of ",e.jsx("em",{children:"how"})," it does it."]}),e.jsx("p",{children:"Think of driving a car: you use the steering wheel, accelerator, and brakes without knowing the intricate workings of the engine, fuel injection, or transmission. That's abstraction in action — the car provides a simple interface while hiding the complex internals."}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-3",children:e.jsx("p",{className:"italic",children:"✨ Real-world parallel: When you withdraw cash from an ATM, you don't need to understand the banking backend, network protocols, or dispenser mechanics. The ATM screen gives you a clean abstraction: enter PIN, choose amount, get cash."})})]})]}),e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-green-500 pl-4 mb-4",children:"How Abstraction Works — Visualized"}),e.jsx("div",{className:"flex justify-center my-4",children:e.jsxs("svg",{viewBox:"0 0 800 320",className:"w-full max-w-3xl h-auto","aria-label":"Abstraction concept diagram",children:[e.jsxs("g",{transform:"translate(30, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"200",height:"180",rx:"12",fill:"#1e293b",className:"dark:fill-gray-700 fill-gray-200"}),e.jsx("text",{x:"100",y:"25",textAnchor:"middle",fill:"#94a3b8",fontSize:"12",children:"Internal Complexity"}),e.jsx("circle",{cx:"50",cy:"70",r:"8",fill:"#ef4444",children:e.jsx("animate",{attributeName:"opacity",values:"0.4;1;0.4",dur:"2s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"100",cy:"100",r:"6",fill:"#3b82f6",children:e.jsx("animate",{attributeName:"opacity",values:"1;0.4;1",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"150",cy:"80",r:"10",fill:"#10b981",children:e.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"2.5s",repeatCount:"indefinite"})}),e.jsx("line",{x1:"50",y1:"70",x2:"100",y2:"100",stroke:"#cbd5e1",strokeWidth:"2",strokeDasharray:"4"}),e.jsx("line",{x1:"100",y1:"100",x2:"150",y2:"80",stroke:"#cbd5e1",strokeWidth:"2",strokeDasharray:"4"}),e.jsx("rect",{x:"30",y:"130",width:"140",height:"35",rx:"6",fill:"#475569"}),e.jsx("text",{x:"100",y:"152",textAnchor:"middle",fill:"#f8fafc",fontSize:"10",children:"Engine, wires, gears"}),e.jsx("text",{x:"100",y:"175",textAnchor:"middle",fill:"#94a3b8",fontSize:"9",children:"(Hidden details)"})]}),e.jsxs("g",{children:[e.jsx("line",{x1:"240",y1:"130",x2:"290",y2:"130",stroke:"#f59e0b",strokeWidth:"3",markerEnd:"url(#arrowhead)"}),e.jsx("text",{x:"265",y:"115",textAnchor:"middle",fill:"#f59e0b",fontSize:"11",children:"Abstract"})]}),e.jsxs("g",{transform:"translate(310, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"180",rx:"12",fill:"#0f172a",className:"dark:fill-gray-800 fill-gray-100",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"90",y:"25",textAnchor:"middle",fill:"#60a5fa",fontSize:"12",children:"Simple Interface"}),e.jsx("circle",{cx:"90",cy:"80",r:"25",fill:"none",stroke:"#3b82f6",strokeWidth:"3"}),e.jsx("line",{x1:"90",y1:"55",x2:"90",y2:"105",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("line",{x1:"65",y1:"80",x2:"115",y2:"80",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"90",y:"145",textAnchor:"middle",fill:"#cbd5e1",fontSize:"12",children:"start()"}),e.jsx("text",{x:"90",y:"165",textAnchor:"middle",fill:"#cbd5e1",fontSize:"12",children:"accelerate()"})]}),e.jsxs("g",{children:[e.jsx("line",{x1:"500",y1:"130",x2:"550",y2:"130",stroke:"#10b981",strokeWidth:"3",markerEnd:"url(#arrowhead)"}),e.jsx("text",{x:"525",y:"115",textAnchor:"middle",fill:"#10b981",fontSize:"11",children:"Use"})]}),e.jsxs("g",{transform:"translate(570, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"190",height:"180",rx:"12",fill:"#064e3b",className:"dark:fill-emerald-900/30 fill-emerald-100"}),e.jsx("text",{x:"95",y:"25",textAnchor:"middle",fill:"#6ee7b7",fontSize:"12",children:"Focus on Essentials"}),e.jsx("path",{d:"M95,140 L75,115 L115,115 Z",fill:"#34d399"}),e.jsx("circle",{cx:"95",cy:"90",r:"22",fill:"#2dd4bf"}),e.jsx("text",{x:"95",y:"96",textAnchor:"middle",fill:"#042f2e",fontSize:"16",children:"✓"}),e.jsx("text",{x:"95",y:"160",textAnchor:"middle",fill:"#ccfbf1",fontSize:"11",children:"No internal clutter"})]}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#f59e0b"})})})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm text-gray-600 dark:text-gray-400 mt-4",children:[e.jsxs("div",{className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200",children:["🔧 ",e.jsx("span",{className:"font-medium",children:"Step 1:"})," Complex internal machinery"]}),e.jsxs("div",{className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200",children:["🎮 ",e.jsx("span",{className:"font-medium",children:"Step 2:"})," Abstracted controls (interface)"]}),e.jsxs("div",{className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200",children:["🧠 ",e.jsx("span",{className:"font-medium",children:"Step 3:"})," User interacts only with essentials"]})]})]}),e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-purple-500 pl-4 mb-4",children:"Abstraction Through Java Code"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:["In Java, abstraction is achieved using ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"abstract classes"})," and ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"interfaces"}),". Here's how we hide implementation:"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{fileModule:i,title:"RemoteControlAbstraction.java",highlightLines:[6,7,12,13]}),e.jsx(t,{fileModule:o,title:"BankAccountAbstraction.java",highlightLines:[8,9,14,15,20]}),e.jsx(t,{fileModule:l,title:"ShapeAbstraction.java",highlightLines:[4,5,10,11,16]})]}),e.jsx("div",{className:"mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg",children:e.jsxs("p",{className:"text-sm",children:["💡 ",e.jsx("strong",{children:"Observation:"})," The client code only knows ",e.jsx("code",{children:"turnOn()"}),", ",e.jsx("code",{children:"deposit()"}),", or ",e.jsx("code",{children:"draw()"})," — not the internal wiring or database queries. That's abstraction at work!"]})})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeSlideUp",children:[e.jsxs("div",{className:"bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl p-5 border border-yellow-200 dark:border-yellow-800 hover:shadow-md transition-all",children:[e.jsxs("h3",{className:"text-xl font-semibold flex items-center gap-2",children:["💎 Tips & Tricks ",e.jsx("span",{className:"text-sm font-normal text-gray-500",children:"(Industry habits)"})]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 mt-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["Start with ",e.jsx("strong",{children:"interfaces"})," to define contracts before writing concrete classes."]}),e.jsxs("li",{children:["Use meaningful method names that reveal ",e.jsx("em",{children:"intent"})," not implementation (e.g., ",e.jsx("code",{children:"calculateTotal()"})," instead of ",e.jsx("code",{children:"addNumbersAndMultiply()"}),")."]}),e.jsx("li",{children:"Debugging mindset: abstraction helps isolate bugs — test the interface first, then dive into implementation."}),e.jsx("li",{children:"Think about “change impact”: If you change a private method, only the class itself is affected."})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-5 border border-red-200 dark:border-red-800 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-semibold flex items-center gap-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 mt-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Leaky abstraction:"})," exposing implementation details through method names or return types."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Premature abstraction:"})," creating abstractions for code that won't change or be reused."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Over-abstraction:"})," too many tiny interfaces/classes confuse readability."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"IDE error:"})," forgetting to implement all abstract methods leads to compilation errors."]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeSlideUp",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border-l-4 border-green-500",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"✅ Best Practices"}),e.jsxs("ul",{className:"space-y-2 mt-2 text-gray-700 dark:text-gray-300 list-disc list-inside",children:[e.jsx("li",{children:"Favor composition over inheritance when designing abstractions."}),e.jsx("li",{children:"Keep interfaces small and focused (Interface Segregation Principle)."}),e.jsxs("li",{children:["Document the ",e.jsx("em",{children:"purpose"})," of an abstraction, not just its methods."]}),e.jsxs("li",{children:["Name abstractions after roles (",e.jsx("code",{children:"PaymentProcessor"}),") not actions (",e.jsx("code",{children:"ProcessPayment"}),")."]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border-l-4 border-blue-500",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"📋 Mini Checklist"}),e.jsxs("ul",{className:"space-y-2 mt-2 text-gray-700 dark:text-gray-300 list-checkbox",children:[e.jsx("li",{children:"✔️ Does my class hide complex implementation?"}),e.jsx("li",{children:"✔️ Can a new developer use this without reading internal code?"}),e.jsx("li",{children:"✔️ Are the method names intention-revealing?"}),e.jsx("li",{children:"✔️ Have I avoided exposing internal data structures?"})]})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800/60 rounded-xl p-5 border-l-8 border-indigo-400 animate-fadeSlideUp",children:[e.jsx("h3",{className:"font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2",children:"🧠 Think about..."}),e.jsxs("p",{className:"italic text-gray-700 dark:text-gray-300 mt-1",children:["Observe carefully: In the BankAccount example, what would happen if the ",e.jsx("code",{children:"updateLedger()"})," method were public? Could external code misuse it? How does making it private improve abstraction?"]}),e.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:["Try changing the visibility of ",e.jsx("code",{children:"validatePin()"})," in RemoteControlAbstraction and see the effect."]})]}),e.jsx("div",{className:"animate-fadeSlideUp",children:e.jsx(s,{title:"Abstraction in OOP - FAQs",questions:r})}),e.jsx("div",{className:"animate-fadeSlideUp mt-8",children:e.jsx(n,{note:"Abstraction is like a car dashboard: students often confuse 'hiding' with 'secrecy'. Emphasize that abstraction is about managing complexity — not security. Use real-life remote controls, ATMs, and vending machines to make it stick. Encourage them to identify abstractions in their favorite apps (e.g., the 'like' button hides database updates)."})})]})]})};export{w as default};
