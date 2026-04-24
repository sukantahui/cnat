import{r as a,j as e}from"./index-Da242x_v.js";import{J as t}from"./JavaFileLoader-ByXlwT7S.js";import{T as s}from"./TeacherSukantaHui-CPTgRfho.js";import{F as r}from"./FAQTemplate-oa9iEk_9.js";import"./JavaCodeBlock-Dra3Hw0G.js";import"./prism-zhFG2M2I.js";import"./browser-B29B4uVk.js";import"./prism-java-BwO6k4I_.js";import"./git-branch-DA1yYObF.js";import"./clsx-B-dksMZM.js";const n=[{question:"What is the primary difference between an abstract class and a concrete class?",shortAnswer:"Abstract classes cannot be instantiated and may have abstract methods; concrete classes can be instantiated and have all methods implemented.",explanation:"Concrete classes are 'complete' and ready to use. Abstract classes are 'incomplete' blueprints that must be extended.",hint:"Can you use 'new' with it? If yes → concrete; if no → abstract.",level:"basic",codeExample:`abstract class A {} // cannot instantiate
class B {} // can instantiate: new B()`},{question:"Can a concrete class extend an abstract class?",shortAnswer:"Yes, and it must implement all abstract methods from the abstract parent.",explanation:"The concrete class becomes complete by implementing all inherited abstract methods. Otherwise, it would also need to be abstract.",hint:"Concrete class = all methods have bodies.",level:"basic",codeExample:`abstract class Animal { abstract void sound(); }
class Dog extends Animal { void sound() {} } // OK`},{question:"Can an abstract class extend a concrete class?",shortAnswer:"Yes, an abstract class can extend a concrete class, and it may override methods or add new abstract ones.",explanation:"This allows you to take a fully implemented class and make it abstract for further specialization.",hint:"Useful when you want to force additional methods in subclasses.",level:"intermediate",codeExample:`class Concrete { void doIt() {} }
abstract class Abstract extends Concrete { abstract void doMore(); }`},{question:"What happens if you try to instantiate an abstract class?",shortAnswer:"Compiler error: 'Cannot instantiate the type AbstractClass'.",explanation:"Abstract classes are incomplete (may have abstract methods). Java prevents creating instances to avoid calling undefined methods.",hint:"The error message is clear: you cannot create an object of an abstract type.",level:"basic",codeExample:`abstract class A {}
// A a = new A(); // COMPILE ERROR`},{question:"Can a concrete class have abstract methods?",shortAnswer:"No. If a class contains any abstract method, the class must be declared abstract.",explanation:"A concrete class is considered 'complete'. An abstract method would make it incomplete, which is contradictory.",hint:"Compiler error: 'The abstract method can only be defined by an abstract class'.",level:"basic",codeExample:"class Bad { abstract void m(); } // ERROR"},{question:"Which one can be marked 'final' — abstract class or concrete class?",shortAnswer:"Concrete classes can be final; abstract classes cannot be final.",explanation:"Final prevents inheritance. Abstract classes are designed to be extended, so final would contradict their purpose.",hint:"A final abstract class would be useless — can't instantiate, can't extend.",level:"intermediate",codeExample:`final class Concrete {} // OK
// final abstract class Abstract {} // ERROR`},{question:"Can both abstract and concrete classes have constructors?",shortAnswer:"Yes, both can have constructors. Abstract class constructors are called via super() from subclasses.",explanation:"Constructors initialize state. For abstract classes, they cannot be called with 'new' but are invoked during subclass instantiation.",hint:"The constructor chain includes abstract classes.",level:"intermediate",codeExample:`abstract class A { A() {} }
class B extends A { B() { super(); } }`},{question:"Which one is better for code reuse — abstract class or concrete class?",shortAnswer:"Abstract classes are better for code reuse in a hierarchy because they can provide common implementation while forcing subclasses to implement specific parts.",explanation:"Concrete classes can also be extended for reuse, but they don't enforce any contracts through abstract methods.",hint:"Abstract classes give you 'partial' reuse with required customization.",level:"intermediate",codeExample:"abstract class Base { void common() {} abstract void custom(); } // forces customization"},{question:"Can you create an array of abstract class type?",shortAnswer:"Yes, you can declare an array of abstract class type, but you can only store concrete subclass instances in it.",explanation:"The array reference type can be abstract; the actual objects must be concrete subclasses.",hint:"Shape[] shapes = new Shape[10]; shapes[0] = new Circle(); // valid",level:"intermediate",codeExample:"Animal[] animals = new Animal[5]; animals[0] = new Dog(); // OK"},{question:"Which one can have static methods — abstract or concrete?",shortAnswer:"Both can have static methods. Static methods belong to the class, not instances.",explanation:"Static methods are fully implemented and can be called on the class name, regardless of whether the class is abstract or concrete.",hint:"Abstract class can have a main() method and run!",level:"intermediate",codeExample:`abstract class A { static void m() {} } // OK
class B { static void m() {} } // OK`},{question:"Can a concrete class be used as a base class?",shortAnswer:"Yes, concrete classes can be extended. However, they don't force subclasses to implement anything.",explanation:"Concrete base classes are common. Subclasses may override methods but aren't forced to.",hint:"ArrayList extends AbstractList (abstract), but you can also extend ArrayList (concrete).",level:"basic",codeExample:`class Parent { void m() {} }
class Child extends Parent { } // valid`},{question:"What is the memory allocation difference between abstract and concrete classes?",shortAnswer:"No difference. Both define instance variables and methods. Memory is allocated when a concrete instance is created.",explanation:"Abstract classes themselves don't occupy memory; only their concrete subclasses do when instantiated.",hint:"Abstract class is a type, not an object.",level:"advanced",codeExample:"// No memory for abstract class itself; only for new ConcreteSubclass()"},{question:"Can a concrete class override an abstract method from a parent abstract class?",shortAnswer:"Yes, that's required. The concrete class must provide implementations for all inherited abstract methods.",explanation:"Overriding abstract methods is mandatory for concrete subclasses. They can also override concrete methods optionally.",hint:"The @Override annotation is recommended for clarity.",level:"basic",codeExample:`abstract class A { abstract void m(); }
class B extends A { @Override void m() {} } // must override`},{question:"Which one is more flexible for future changes — abstract or concrete?",shortAnswer:"Abstract classes are more flexible for future changes because you can add abstract methods without breaking existing code (subclasses become abstract, but that's a design change).",explanation:"Adding abstract methods forces subclasses to implement them. Adding concrete methods to an abstract class doesn't break subclasses.",hint:"Design for change: abstract classes allow you to add new abstract methods (breaking change) or concrete methods (safe).",level:"expert",codeExample:"// Adding new abstract method breaks all concrete subclasses (they become abstract or must implement)"},{question:"Can you use the instanceof operator with abstract classes?",shortAnswer:"Yes, instanceof works with abstract class types because the actual object is always a concrete subclass.",explanation:"The operator checks the actual object's type against the abstract class, returning true if it's a subclass instance.",hint:"if (shape instanceof Circle) { ... }",level:"intermediate",codeExample:"Animal a = new Dog(); if (a instanceof Animal) { } // true"},{question:"What is the default superclass for both abstract and concrete classes?",shortAnswer:"Object class. All classes (abstract or concrete) implicitly extend Object.",explanation:"Object is the root of the Java class hierarchy. Abstract classes also inherit Object's methods (toString, equals, hashCode).",hint:"You can override toString() in an abstract class.",level:"basic",codeExample:"abstract class A { } // A extends Object implicitly"},{question:"Can an abstract class have a concrete method that calls an abstract method?",shortAnswer:"Yes, this is the Template Method pattern. The concrete method defines an algorithm using abstract steps.",explanation:"This is a powerful design pattern where the abstract class controls the flow and subclasses provide specific implementations.",hint:"The abstract class says 'when to do', subclasses say 'how to do'.",level:"advanced",codeExample:"abstract class Game { final void play() { start(); playTurn(); end(); } abstract void start(); abstract void playTurn(); abstract void end(); }"},{question:"Which one is faster to instantiate — abstract or concrete?",shortAnswer:"You cannot instantiate abstract classes directly. Concrete classes have normal instantiation overhead, which is minimal.",explanation:"Instantiation performance is similar for all classes. The abstract vs concrete distinction doesn't affect speed.",hint:"Focus on design, not micro-optimization.",level:"advanced",codeExample:"// No performance difference between new Concrete1() and new Concrete2()"},{question:"Can you have a private constructor in an abstract class?",shortAnswer:"Yes, but then the abstract class cannot be extended by any subclass outside the class itself.",explanation:"Private constructors prevent subclasses from calling super(). The abstract class becomes unusable (can't instantiate, can't extend). Usually not useful.",hint:"Not recommended — makes the abstract class useless.",level:"expert",codeExample:"abstract class A { private A() {} } // cannot be extended"},{question:"What is the difference in serialization between abstract and concrete classes?",shortAnswer:"Both can be serializable. Abstract classes can define serialVersionUID and serialization behavior for their fields.",explanation:"Serialization works the same for both, but abstract classes cannot be instantiated directly during deserialization (concrete subclasses are created).",hint:"The concrete subclass must be serializable as well.",level:"expert",codeExample:"abstract class Base implements Serializable { protected transient int cache; }"},{question:"Can you use a concrete class where an abstract class is expected?",shortAnswer:"Yes, through polymorphism. A concrete subclass can be used wherever the abstract superclass type is expected.",explanation:"This is the essence of polymorphism — coding to the abstraction.",hint:"List<String> list = new ArrayList<>(); // List is interface, ArrayList concrete",level:"intermediate",codeExample:"Shape s = new Circle(); // Shape abstract, Circle concrete"},{question:"Which one should you use for a utility class with only static methods?",shortAnswer:"Concrete class with a private constructor to prevent instantiation.",explanation:"Utility classes like Math, Collections are concrete, final, and have private constructors. Abstract classes are not appropriate because they imply inheritance.",hint:"Mark the class as final and provide a private constructor.",level:"intermediate",codeExample:"final class Utils { private Utils() {} public static void doIt() {} }"},{question:"Can an abstract class be used as a method parameter type?",shortAnswer:"Yes, you can declare method parameters of abstract class type. Any concrete subclass can be passed.",explanation:"This allows the method to work with any subclass, promoting polymorphism.",hint:"void process(Animal a) { a.sound(); } // works with Dog, Cat",level:"intermediate",codeExample:"public void save(Employee e) { e.calculateSalary(); }"},{question:"What is the difference in testability between abstract and concrete classes?",shortAnswer:"Abstract classes require a test-specific subclass or mocking; concrete classes can be instantiated directly in tests.",explanation:"Testing abstract classes is possible but requires creating an anonymous subclass or using frameworks like Mockito.",hint:"Concrete classes are easier to test in isolation.",level:"advanced",codeExample:"// Testing abstract class: new AbstractClass() { void abstractMethod() {} }.concreteMethod();"},{question:"Can you have a concrete class that is also abstract? (Trick question)",shortAnswer:"No, a class cannot be both concrete and abstract. They are mutually exclusive.",explanation:"Abstract is a modifier; concrete is the absence of abstract. A class either has the abstract keyword or not.",hint:"It's like 'wet' and 'dry' — can't be both.",level:"basic",codeExample:"// A class is either abstract or concrete, not both"},{question:"What happens to abstract methods when you cast a concrete object to its abstract superclass?",shortAnswer:"The abstract methods still execute the concrete subclass's implementation (polymorphism).",explanation:"Casting doesn't change the object's actual type. The overridden method in the concrete class is still called.",hint:"The object 'remembers' what it really is.",level:"intermediate",codeExample:"Animal a = new Dog(); ((Animal)a).sound(); // calls Dog's sound()"},{question:"Which one can have a main method for application entry point?",shortAnswer:"Both can have a main method, and it can be executed. Abstract classes can run even though they can't be instantiated.",explanation:"The main method is static, so it belongs to the class, not an instance. Abstract class with main() is a valid program entry.",hint:"Try it: put public static void main in an abstract class — it runs.",level:"intermediate",codeExample:'abstract class MainDemo { public static void main(String[] args) { System.out.println("Hello"); } }'},{question:"What is the difference in bytecode between abstract and concrete classes?",shortAnswer:"Abstract classes have the ACC_ABSTRACT flag in the class file. Abstract methods have ACC_ABSTRACT flag and no Code attribute.",explanation:"The JVM enforces that abstract classes cannot be instantiated and that concrete subclasses implement all abstract methods.",hint:"The bytecode difference is minimal but crucial for the JVM.",level:"expert",codeExample:"// javap -v AbstractClass shows 'flags: ACC_ABSTRACT, ACC_PUBLIC'"},{question:"Can you have a concrete class that implements an interface with abstract methods?",shortAnswer:"Yes, the concrete class must implement all abstract methods from the interface.",explanation:"Interfaces are abstract by definition. A concrete class implementing an interface must provide bodies for all interface methods.",hint:"Same rule as extending abstract class — all abstract methods must be implemented.",level:"basic",codeExample:`interface I { void m(); }
class C implements I { public void m() {} } // OK`},{question:"What is the rule of thumb for choosing between abstract and concrete base class?",shortAnswer:"If the base class should never be instantiated on its own and/or has abstract methods → make it abstract. Otherwise, make it concrete.",explanation:"Default to concrete. Only use abstract when you specifically need to prevent instantiation or enforce method implementation.",hint:"When in doubt, start concrete. You can always refactor to abstract later.",level:"intermediate",codeExample:`// Start: class Employee { }
// Refactor: abstract class Employee { abstract double calculateSalary(); }`}],i=`// ComparisonDemo.java\r
// Direct comparison between abstract and concrete classes\r
\r
// ========== ABSTRACT CLASS ==========\r
// Cannot be instantiated, may have abstract methods\r
abstract class Shape {\r
    protected String color;\r
    \r
    // Constructor - exists but cannot be called directly with 'new'\r
    public Shape(String color) {\r
        this.color = color;\r
    }\r
    \r
    // Concrete method - fully implemented\r
    public String getColor() {\r
        return color;\r
    }\r
    \r
    // Abstract method - no body, must be overridden\r
    public abstract double getArea();\r
    \r
    // Another concrete method\r
    public void display() {\r
        System.out.println("This is a " + color + " shape with area: " + getArea());\r
    }\r
}\r
\r
// ========== CONCRETE CLASS ==========\r
// Can be instantiated, all methods have bodies\r
class Circle {\r
    private double radius;\r
    private String color;\r
    \r
    // Constructor - can be called with 'new'\r
    public Circle(double radius, String color) {\r
        this.radius = radius;\r
        this.color = color;\r
    }\r
    \r
    // All methods are concrete (fully implemented)\r
    public double getArea() {\r
        return Math.PI * radius * radius;\r
    }\r
    \r
    public String getColor() {\r
        return color;\r
    }\r
    \r
    public void display() {\r
        System.out.println("Circle: radius=" + radius + ", color=" + color + ", area=" + getArea());\r
    }\r
}\r
\r
public class ComparisonDemo {\r
    public static void main(String[] args) {\r
        System.out.println("=== ABSTRACT CLASS USAGE ===");\r
        // Shape s = new Shape("red"); // ERROR: Cannot instantiate abstract class\r
        \r
        // Must use concrete subclass\r
        class Rectangle extends Shape {\r
            private double width, height;\r
            \r
            public Rectangle(String color, double width, double height) {\r
                super(color);\r
                this.width = width;\r
                this.height = height;\r
            }\r
            \r
            @Override\r
            public double getArea() {\r
                return width * height;\r
            }\r
        }\r
        \r
        Shape rect = new Rectangle("blue", 5, 3);\r
        rect.display();\r
        \r
        System.out.println("\\n=== CONCRETE CLASS USAGE ===");\r
        Circle circle = new Circle(4.2, "red");  // Direct instantiation\r
        circle.display();\r
        \r
        System.out.println("\\n=== KEY DIFFERENCES ===");\r
        System.out.println("1. Abstract class: cannot use 'new'");\r
        System.out.println("2. Concrete class: can use 'new'");\r
        System.out.println("3. Abstract class: may have abstract methods (no body)");\r
        System.out.println("4. Concrete class: all methods have bodies");\r
    }\r
}`,c=`// AbstractVsConcrete.java\r
// Comprehensive comparison with real-world example\r
\r
// ===== ABSTRACT CLASS =====\r
// Represents a generic payment method\r
abstract class Payment {\r
    protected double amount;\r
    protected String transactionId;\r
    \r
    public Payment(double amount) {\r
        this.amount = amount;\r
        this.transactionId = generateTransactionId();\r
    }\r
    \r
    // Concrete method - shared by all payments\r
    public void printReceipt() {\r
        System.out.println("Transaction ID: " + transactionId);\r
        System.out.println("Amount: $" + amount);\r
        System.out.println("Payment Type: " + getPaymentType());\r
        System.out.println("Status: " + processPayment());\r
    }\r
    \r
    // Concrete helper method\r
    private String generateTransactionId() {\r
        return "TXN" + System.currentTimeMillis();\r
    }\r
    \r
    // Abstract methods - each payment type implements differently\r
    public abstract String processPayment();\r
    public abstract String getPaymentType();\r
}\r
\r
// Concrete subclass 1\r
class CreditCardPayment extends Payment {\r
    private String cardNumber;\r
    \r
    public CreditCardPayment(double amount, String cardNumber) {\r
        super(amount);\r
        this.cardNumber = maskCardNumber(cardNumber);\r
    }\r
    \r
    @Override\r
    public String processPayment() {\r
        // Credit card specific logic\r
        return "SUCCESS: Credit card charged $" + amount;\r
    }\r
    \r
    @Override\r
    public String getPaymentType() {\r
        return "CREDIT_CARD";\r
    }\r
    \r
    private String maskCardNumber(String number) {\r
        return "****-****-****-" + number.substring(number.length() - 4);\r
    }\r
}\r
\r
// Concrete subclass 2\r
class PayPalPayment extends Payment {\r
    private String email;\r
    \r
    public PayPalPayment(double amount, String email) {\r
        super(amount);\r
        this.email = email;\r
    }\r
    \r
    @Override\r
    public String processPayment() {\r
        // PayPal specific API call\r
        return "SUCCESS: PayPal payment from " + email;\r
    }\r
    \r
    @Override\r
    public String getPaymentType() {\r
        return "PAYPAL";\r
    }\r
}\r
\r
// ===== CONCRETE CLASS =====\r
// Complete, ready-to-use class (not meant to be extended)\r
final class UtilityHelper {\r
    private UtilityHelper() {} // Prevent instantiation\r
    \r
    public static double roundToTwoDecimals(double value) {\r
        return Math.round(value * 100.0) / 100.0;\r
    }\r
    \r
    public static String formatCurrency(double amount) {\r
        return "$" + String.format("%.2f", amount);\r
    }\r
}\r
\r
// Another concrete class - can be instantiated and extended\r
class Customer {\r
    private String name;\r
    private String email;\r
    \r
    public Customer(String name, String email) {\r
        this.name = name;\r
        this.email = email;\r
    }\r
    \r
    public void makePayment(Payment payment) {\r
        System.out.println(name + " making payment of " + UtilityHelper.formatCurrency(payment.amount));\r
        payment.printReceipt();\r
    }\r
    \r
    // Getters and setters (concrete)\r
    public String getName() { return name; }\r
    public void setName(String name) { this.name = name; }\r
}\r
\r
public class AbstractVsConcrete {\r
    public static void main(String[] args) {\r
        System.out.println("=== ABSTRACT CLASS IN ACTION ===\\n");\r
        \r
        // Cannot do: Payment p = new Payment(100); // ERROR\r
        \r
        Payment ccPayment = new CreditCardPayment(299.99, "1234567890123456");\r
        Payment ppPayment = new PayPalPayment(49.99, "swadeep@example.com");\r
        \r
        ccPayment.printReceipt();\r
        System.out.println();\r
        ppPayment.printReceipt();\r
        \r
        System.out.println("\\n=== CONCRETE CLASS IN ACTION ===\\n");\r
        \r
        Customer customer = new Customer("Abhronila", "abhronila@example.com");\r
        customer.makePayment(ccPayment);\r
        \r
        System.out.println("\\n=== UTILITY CONCRETE CLASS ===");\r
        System.out.println("Formatted: " + UtilityHelper.formatCurrency(123.456));\r
        System.out.println("Rounded: " + UtilityHelper.roundToTwoDecimals(123.456));\r
        \r
        // UtilityHelper helper = new UtilityHelper(); // ERROR: private constructor\r
    }\r
}`,l=`// WhenToUseWhat.java\r
// Decision guide: When to use abstract vs concrete class\r
\r
// SCENARIO 1: You have a clear hierarchy with shared behavior\r
// Solution: ABSTRACT class\r
abstract class Employee {\r
    protected String name;\r
    protected int id;\r
    \r
    public Employee(String name, int id) {\r
        this.name = name;\r
        this.id = id;\r
    }\r
    \r
    public void displayInfo() {\r
        System.out.println("Name: " + name + ", ID: " + id);\r
    }\r
    \r
    public abstract double calculateSalary(); // Each type calculates differently\r
}\r
\r
class Manager extends Employee {\r
    private double baseSalary;\r
    private double bonus;\r
    \r
    public Manager(String name, int id, double baseSalary, double bonus) {\r
        super(name, id);\r
        this.baseSalary = baseSalary;\r
        this.bonus = bonus;\r
    }\r
    \r
    @Override\r
    public double calculateSalary() {\r
        return baseSalary + bonus;\r
    }\r
}\r
\r
// SCENARIO 2: Class is complete and ready to use\r
// Solution: CONCRETE class\r
class Address {\r
    private String street;\r
    private String city;\r
    private String zipCode;\r
    \r
    public Address(String street, String city, String zipCode) {\r
        this.street = street;\r
        this.city = city;\r
        this.zipCode = zipCode;\r
    }\r
    \r
    public String getFullAddress() {\r
        return street + ", " + city + " - " + zipCode;\r
    }\r
    \r
    // All methods fully implemented\r
    public boolean isValid() {\r
        return zipCode != null && zipCode.matches("\\\\d{5}");\r
    }\r
}\r
\r
// SCENARIO 3: Utility class - no instantiation, all static\r
// Solution: CONCRETE class with private constructor\r
class MathUtils {\r
    private MathUtils() {} // Prevent instantiation\r
    \r
    public static int add(int a, int b) { return a + b; }\r
    public static int subtract(int a, int b) { return a - b; }\r
}\r
\r
// SCENARIO 4: You want to prevent extension\r
// Solution: CONCRETE class marked final\r
final class Configuration {\r
    private static final String APP_NAME = "MyApp";\r
    private static final String VERSION = "1.0";\r
    \r
    public static String getAppName() { return APP_NAME; }\r
    public static String getVersion() { return VERSION; }\r
}\r
\r
// SCENARIO 5: Template method pattern - algorithm skeleton\r
// Solution: ABSTRACT class with final template method\r
abstract class DataProcessor {\r
    // Template method - defines algorithm structure\r
    public final void process() {\r
        load();\r
        processData();\r
        save();\r
        cleanup();\r
    }\r
    \r
    protected abstract void load();\r
    protected abstract void processData();\r
    protected abstract void save();\r
    \r
    private void cleanup() {\r
        System.out.println("Cleaning up resources");\r
    }\r
}\r
\r
class CSVProcessor extends DataProcessor {\r
    @Override protected void load() { System.out.println("Loading CSV"); }\r
    @Override protected void processData() { System.out.println("Parsing CSV"); }\r
    @Override protected void save() { System.out.println("Saving CSV data"); }\r
}\r
\r
public class WhenToUseWhat {\r
    public static void main(String[] args) {\r
        System.out.println("=== Decision Guide ===\\n");\r
        \r
        System.out.println("USE ABSTRACT CLASS WHEN:");\r
        System.out.println("1. You have a base class that shouldn't be instantiated");\r
        System.out.println("2. You want to provide common code to subclasses");\r
        System.out.println("3. You want to force subclasses to implement specific methods");\r
        System.out.println("4. You need instance variables (state) in the base class");\r
        \r
        System.out.println("\\nUSE CONCRETE CLASS WHEN:");\r
        System.out.println("1. The class is complete and ready to use");\r
        System.out.println("2. You want to create utility classes (static methods)");\r
        System.out.println("3. You want to mark the class as final (no extension)");\r
        System.out.println("4. The class represents a leaf in the hierarchy");\r
        \r
        System.out.println("\\n=== EXAMPLES ===");\r
        \r
        // Abstract class usage\r
        Manager mgr = new Manager("Debangshu", 1001, 75000, 10000);\r
        System.out.println("Manager salary: $" + mgr.calculateSalary());\r
        \r
        // Concrete class usage\r
        Address addr = new Address("123 Main St", "Barrackpore", "700120");\r
        System.out.println("Address: " + addr.getFullAddress());\r
        \r
        // Utility class\r
        System.out.println("5 + 3 = " + MathUtils.add(5, 3));\r
        \r
        // Template method\r
        DataProcessor processor = new CSVProcessor();\r
        processor.process();\r
    }\r
}`,w=()=>{const[o,d]=a.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:`
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
      `}),e.jsx("div",{className:"max-w-5xl mx-auto animate-fadeSlideUp",children:e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400",children:"Abstract Class vs Concrete Class"}),e.jsx("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed",children:"Understanding when to use which — the blueprint vs the finished product."})]})}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-orange-500 pl-4 mb-4",children:"Abstract vs Concrete: The Core Distinction"}),e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsxs("p",{children:["Every class in Java is either ",e.jsx("strong",{className:"text-orange-600 dark:text-orange-400",children:"abstract"})," or ",e.jsx("strong",{className:"text-green-600 dark:text-green-400",children:"concrete"}),". The difference is fundamental: ",e.jsx("strong",{children:"concrete classes"})," are fully implemented and can be instantiated, while ",e.jsx("strong",{children:"abstract classes"})," are incomplete blueprints that cannot be instantiated."]}),e.jsxs("p",{children:["Think of a ",e.jsx("strong",{children:"concrete class"})," as a finished house — you can live in it. An ",e.jsx("strong",{children:"abstract class"})," is a blueprint — you can't live in it, but you can build houses (concrete subclasses) from it."]}),e.jsx("div",{className:"bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg mt-3",children:e.jsxs("p",{className:"italic",children:["✨ ",e.jsx("strong",{children:"Real-world parallel:"}),' A "Recipe" is abstract (steps, but missing specifics like "add 2 cups flour"). A "ChocolateCakeRecipe" is concrete — you can follow it to bake a cake.']})})]})]}),e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-purple-500 pl-4 mb-4",children:"Visual Comparison"}),e.jsx("div",{className:"flex justify-center my-4",children:e.jsx("svg",{viewBox:"0 0 800 380",className:"w-full max-w-4xl h-auto","aria-label":"Abstract vs Concrete comparison",children:e.jsxs("g",{transform:"translate(20, 20)",children:[e.jsxs("g",{transform:"translate(0, 0)",children:[e.jsx("rect",{x:"0",y:"0",width:"360",height:"320",rx:"15",fill:"#1e293b",className:"dark:fill-gray-800 fill-gray-100",stroke:"#f97316",strokeWidth:"2",strokeDasharray:"8 4"}),e.jsx("text",{x:"180",y:"30",textAnchor:"middle",fill:"#fdba74",fontSize:"16",fontWeight:"bold",children:"ABSTRACT CLASS"}),e.jsx("line",{x1:"15",y1:"45",x2:"345",y2:"45",stroke:"#f97316",strokeWidth:"1"}),e.jsx("text",{x:"20",y:"70",fill:"#cbd5e1",fontSize:"13",children:"✗ Cannot be instantiated"}),e.jsx("text",{x:"20",y:"95",fill:"#cbd5e1",fontSize:"13",children:"✗ May have abstract methods (no body)"}),e.jsx("text",{x:"20",y:"120",fill:"#cbd5e1",fontSize:"13",children:"✓ Can have constructors (called by subclasses)"}),e.jsx("text",{x:"20",y:"145",fill:"#cbd5e1",fontSize:"13",children:"✓ Can have instance variables (state)"}),e.jsx("text",{x:"20",y:"170",fill:"#cbd5e1",fontSize:"13",children:"✓ Can have concrete methods"}),e.jsx("text",{x:"20",y:"195",fill:"#cbd5e1",fontSize:"13",children:"✓ Can have static methods"}),e.jsx("text",{x:"20",y:"220",fill:"#cbd5e1",fontSize:"13",children:"✓ Can extend another class (abstract/concrete)"}),e.jsx("text",{x:"20",y:"245",fill:"#cbd5e1",fontSize:"13",children:"✓ Can implement multiple interfaces"}),e.jsx("rect",{x:"20",y:"265",width:"320",height:"40",rx:"6",fill:"#f97316",opacity:"0.2"}),e.jsx("text",{x:"180",y:"290",textAnchor:"middle",fill:"#fdba74",fontSize:"12",fontWeight:"bold",children:"Used as: Blueprint / Template"})]}),e.jsxs("g",{transform:"translate(380, 140)",children:[e.jsx("circle",{cx:"30",cy:"30",r:"35",fill:"#ef4444"}),e.jsx("text",{x:"30",y:"36",textAnchor:"middle",fill:"white",fontSize:"18",fontWeight:"bold",children:"VS"})]}),e.jsxs("g",{transform:"translate(440, 0)",children:[e.jsx("rect",{x:"0",y:"0",width:"340",height:"320",rx:"15",fill:"#0f172a",className:"dark:fill-gray-900 fill-gray-50",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"170",y:"30",textAnchor:"middle",fill:"#6ee7b7",fontSize:"16",fontWeight:"bold",children:"CONCRETE CLASS"}),e.jsx("line",{x1:"15",y1:"45",x2:"325",y2:"45",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"20",y:"70",fill:"#cbd5e1",fontSize:"13",children:"✓ Can be instantiated (new)"}),e.jsx("text",{x:"20",y:"95",fill:"#cbd5e1",fontSize:"13",children:"✓ All methods have bodies (no abstract)"}),e.jsx("text",{x:"20",y:"120",fill:"#cbd5e1",fontSize:"13",children:"✓ Can have constructors"}),e.jsx("text",{x:"20",y:"145",fill:"#cbd5e1",fontSize:"13",children:"✓ Can have instance variables"}),e.jsx("text",{x:"20",y:"170",fill:"#cbd5e1",fontSize:"13",children:"✓ Can have any methods (concrete, static, final)"}),e.jsx("text",{x:"20",y:"195",fill:"#cbd5e1",fontSize:"13",children:"✓ Can extend another class"}),e.jsx("text",{x:"20",y:"220",fill:"#cbd5e1",fontSize:"13",children:"✓ Can implement multiple interfaces"}),e.jsx("text",{x:"20",y:"245",fill:"#cbd5e1",fontSize:"13",children:"✓ Can be final (no further extension)"}),e.jsx("rect",{x:"20",y:"265",width:"300",height:"40",rx:"6",fill:"#10b981",opacity:"0.2"}),e.jsx("text",{x:"170",y:"290",textAnchor:"middle",fill:"#6ee7b7",fontSize:"12",fontWeight:"bold",children:"Used as: Ready-to-use object"})]})]})})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-center text-sm text-gray-600 dark:text-gray-400 mt-4",children:[e.jsxs("div",{className:"p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all",children:[e.jsx("span",{className:"font-medium text-orange-600",children:"Abstract Class"}),e.jsx("br",{}),'"Incomplete — must be extended"']}),e.jsxs("div",{className:"p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all",children:[e.jsx("span",{className:"font-medium text-green-600",children:"Concrete Class"}),e.jsx("br",{}),'"Complete — ready to use"']})]})]}),e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-blue-500 pl-4 mb-4",children:"Side-by-Side Comparison"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full text-sm text-left text-gray-700 dark:text-gray-300",children:[e.jsx("thead",{className:"text-xs uppercase bg-gray-100 dark:bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3",children:"Feature"}),e.jsx("th",{className:"px-4 py-3 text-orange-600 dark:text-orange-400",children:"Abstract Class"}),e.jsx("th",{className:"px-4 py-3 text-green-600 dark:text-green-400",children:"Concrete Class"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-800/50",children:[e.jsx("td",{className:"px-4 py-2 font-medium",children:"Instantiation"}),e.jsx("td",{className:"px-4 py-2 text-red-600",children:"❌ Not allowed"}),e.jsx("td",{className:"px-4 py-2 text-green-600",children:"✅ Allowed (new)"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-800/50",children:[e.jsx("td",{className:"px-4 py-2 font-medium",children:"Abstract Methods"}),e.jsx("td",{className:"px-4 py-2",children:"✅ Can have (0 or more)"}),e.jsx("td",{className:"px-4 py-2",children:"❌ Cannot have any"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-800/50",children:[e.jsx("td",{className:"px-4 py-2 font-medium",children:"Constructors"}),e.jsx("td",{className:"px-4 py-2",children:"✅ Allowed (called via super)"}),e.jsx("td",{className:"px-4 py-2",children:"✅ Allowed"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-800/50",children:[e.jsx("td",{className:"px-4 py-2 font-medium",children:"Instance Variables"}),e.jsx("td",{className:"px-4 py-2",children:"✅ Allowed"}),e.jsx("td",{className:"px-4 py-2",children:"✅ Allowed"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-800/50",children:[e.jsx("td",{className:"px-4 py-2 font-medium",children:"Concrete Methods"}),e.jsx("td",{className:"px-4 py-2",children:"✅ Allowed"}),e.jsx("td",{className:"px-4 py-2",children:"✅ Allowed"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-800/50",children:[e.jsx("td",{className:"px-4 py-2 font-medium",children:"Static Methods"}),e.jsx("td",{className:"px-4 py-2",children:"✅ Allowed"}),e.jsx("td",{className:"px-4 py-2",children:"✅ Allowed"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-800/50",children:[e.jsx("td",{className:"px-4 py-2 font-medium",children:"Final Modifier"}),e.jsx("td",{className:"px-4 py-2",children:"❌ Not allowed on class"}),e.jsx("td",{className:"px-4 py-2",children:"✅ Allowed (prevents extension)"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-800/50",children:[e.jsx("td",{className:"px-4 py-2 font-medium",children:"Purpose"}),e.jsx("td",{className:"px-4 py-2",children:"Blueprint / Template"}),e.jsx("td",{className:"px-4 py-2",children:"Ready-to-use object"})]})]})]})})]}),e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-green-500 pl-4 mb-4",children:"Code Comparison"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"See the difference in syntax and usage:"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{fileModule:i,title:"ComparisonDemo.java",highlightLines:[4,5,6,9,10,11,14,15,16]}),e.jsx(t,{fileModule:c,title:"AbstractVsConcrete.java",highlightLines:[4,5,6,10,11,12,16,17,18]}),e.jsx(t,{fileModule:l,title:"WhenToUseWhat.java",highlightLines:[4,5,6,9,10,11,14,15,16]})]}),e.jsx("div",{className:"mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:e.jsxs("p",{className:"text-sm",children:["💡 ",e.jsx("strong",{children:"Key Insight:"})," The abstract class defines a contract and provides common code. The concrete class completes the contract and can be instantiated."]})})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeSlideUp",children:[e.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-5 border border-orange-200 dark:border-orange-800 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-semibold flex items-center gap-2",children:"📐 Use Abstract Class When..."}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 mt-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["You want to provide a ",e.jsx("strong",{children:"common base"})," with shared code and state."]}),e.jsx("li",{children:"You need to enforce that subclasses implement certain methods."}),e.jsx("li",{children:'You have a clear "is-a" hierarchy with natural parent-child relationships.'}),e.jsxs("li",{children:["You want to define a ",e.jsx("strong",{children:"template method"})," algorithm."]}),e.jsx("li",{children:"You need non-final instance variables (state) shared across subclasses."})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-5 border border-green-200 dark:border-green-800 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-semibold flex items-center gap-2",children:"🏗️ Use Concrete Class When..."}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 mt-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["The class is ",e.jsx("strong",{children:"complete"})," and ready to be instantiated."]}),e.jsx("li",{children:"You don't need to force subclasses to implement anything."}),e.jsx("li",{children:"You want to create utility classes (like Math, Collections)."}),e.jsxs("li",{children:["The class represents a ",e.jsx("strong",{children:"leaf node"})," in an inheritance hierarchy."]}),e.jsxs("li",{children:["You want to mark the class as ",e.jsx("code",{children:"final"})," to prevent extension."]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeSlideUp",children:[e.jsxs("div",{className:"bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl p-5 border border-yellow-200 dark:border-yellow-800 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-semibold flex items-center gap-2",children:"💎 Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 mt-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["Start with a concrete class, then ",e.jsx("strong",{children:"refactor to abstract"})," when you see duplication across subclasses."]}),e.jsxs("li",{children:["Use abstract classes for ",e.jsx("strong",{children:"framework hooks"})," (methods that subclasses must implement)."]}),e.jsxs("li",{children:["Concrete classes can be ",e.jsx("strong",{children:"final"})," to prevent misuse through inheritance."]}),e.jsxs("li",{children:["Prefer ",e.jsx("strong",{children:"interfaces"})," for pure contracts; abstract classes for code reuse."]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-5 border border-red-200 dark:border-red-800 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-semibold flex items-center gap-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 mt-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Making a class abstract unnecessarily"})," — if it can be concrete, make it concrete."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Leaving abstract methods unimplemented"})," in a concrete subclass → compiler error."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Trying to instantiate an abstract class"}),' → "Cannot instantiate the type".']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Overusing abstract classes"})," when composition or interfaces would be simpler."]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeSlideUp",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border-l-4 border-green-500",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"✅ Best Practices"}),e.jsxs("ul",{className:"space-y-2 mt-2 text-gray-700 dark:text-gray-300 list-disc list-inside",children:[e.jsxs("li",{children:["Keep abstract classes ",e.jsx("strong",{children:"small and focused"})," — one clear responsibility."]}),e.jsx("li",{children:"Document why a class is abstract and what subclasses must implement."}),e.jsxs("li",{children:["Prefer ",e.jsx("strong",{children:"concrete classes"})," by default; only make classes abstract when needed."]}),e.jsx("li",{children:"Use meaningful class names that reflect the abstraction level."})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border-l-4 border-blue-500",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"📋 Mini Checklist"}),e.jsxs("ul",{className:"space-y-2 mt-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"✔️ Does the class need to be instantiated? → Concrete."}),e.jsx("li",{children:"✔️ Does it have abstract methods? → Must be abstract."}),e.jsx("li",{children:"✔️ Should it serve only as a base class? → Consider abstract."}),e.jsx("li",{children:"✔️ Is it a leaf in the hierarchy? → Probably concrete."})]})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800/60 rounded-xl p-5 border-l-8 border-indigo-400 animate-fadeSlideUp",children:[e.jsx("h3",{className:"font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2",children:"🧠 Think about..."}),e.jsx("p",{className:"italic text-gray-700 dark:text-gray-300 mt-1",children:"If a class has no abstract methods but is marked abstract, can you instantiate it? No — the abstract keyword alone prevents instantiation. When would you do that? (Hint: when you want a class to be only a base class, even if fully implemented.)"}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Try converting an abstract class to concrete by removing the abstract keyword. What changes? Now try to instantiate it."})]}),e.jsx("div",{className:"animate-fadeSlideUp",children:e.jsx(r,{title:"Abstract Class vs Concrete Class - FAQs",questions:n})}),e.jsx("div",{className:"animate-fadeSlideUp mt-8",children:e.jsx(s,{note:"Students often struggle with when to make a class abstract. A simple rule: if you find yourself saying 'I don't want anyone to instantiate this class directly,' make it abstract. Use real examples: Vehicle (abstract), Car (concrete). Have students practice by taking a concrete class hierarchy and identifying which classes should be abstract. Emphasize that abstract classes are a design choice, not a technical necessity."})})]})]})};export{w as default};
