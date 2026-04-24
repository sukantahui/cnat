import{r as a,j as e}from"./index-Da242x_v.js";import{J as t}from"./JavaFileLoader-ByXlwT7S.js";import{T as s}from"./TeacherSukantaHui-CPTgRfho.js";import{F as r}from"./FAQTemplate-oa9iEk_9.js";import"./JavaCodeBlock-Dra3Hw0G.js";import"./prism-zhFG2M2I.js";import"./browser-B29B4uVk.js";import"./prism-java-BwO6k4I_.js";import"./git-branch-DA1yYObF.js";import"./clsx-B-dksMZM.js";const n=[{question:"What is an abstract class in Java?",shortAnswer:"A class that cannot be instantiated and may contain abstract methods.",explanation:"Abstract classes serve as blueprints for subclasses. They can have constructors, fields, concrete methods, and abstract methods. They are declared with the 'abstract' keyword.",hint:"Think of it as a partially built house - you can't live in it, but you can add rooms (subclasses).",level:"basic",codeExample:"abstract class Animal { abstract void sound(); }"},{question:"What is an abstract method?",shortAnswer:"A method declared without an implementation (no body), ending with a semicolon.",explanation:"Abstract methods define a contract that subclasses must fulfill. They have no body and must be overridden in concrete subclasses. The class containing an abstract method must be abstract.",hint:"It's like a promise: 'every subclass will have this method, but they decide how it works'.",level:"basic",codeExample:"public abstract void calculate(); // no curly braces"},{question:"Can an abstract class have a constructor?",shortAnswer:"Yes, abstract classes can have constructors, and they are called when a concrete subclass is instantiated.",explanation:"The constructor initializes common state. Even though you can't instantiate the abstract class directly, its constructor runs via super() from the subclass.",hint:"The abstract class constructor runs first, then the subclass constructor.",level:"intermediate",codeExample:`abstract class Base { Base() { System.out.println("Base"); } }
class Derived extends Base { Derived() { super(); } }`},{question:"Can we have an abstract class with no abstract methods?",shortAnswer:"Yes, an abstract class can have zero abstract methods. It simply cannot be instantiated.",explanation:"Sometimes you want to prevent instantiation of a class even though it's fully implemented. Marking it abstract serves that purpose.",hint:"Useful for utility base classes that should only be extended.",level:"intermediate",codeExample:"abstract class UtilityBase { void log(String msg) { ... } } // no abstract methods"},{question:"What happens if a subclass does not implement all abstract methods of its abstract parent?",shortAnswer:"The subclass must also be declared abstract.",explanation:"Java enforces that any concrete class must provide implementations for all inherited abstract methods. Otherwise, the class remains abstract and cannot be instantiated.",hint:"Compiler error unless you add 'abstract' to the subclass.",level:"basic",codeExample:`abstract class A { abstract void m(); }
class B extends A { } // ERROR
abstract class C extends A { } // OK`},{question:"Can an abstract method be static?",shortAnswer:"No, abstract methods cannot be static because static methods belong to the class and cannot be overridden.",explanation:"Abstract methods rely on polymorphism and overriding, which requires instance methods. A static method is associated with the class itself, not an instance.",hint:"Static and abstract are contradictory - static can't be overridden, abstract must be overridden.",level:"intermediate",codeExample:"// abstract static void m(); // COMPILE ERROR"},{question:"Can an abstract method be final?",shortAnswer:"No, final prevents overriding, but abstract requires overriding. They are mutually exclusive.",explanation:"A final method cannot be changed in subclasses. An abstract method has no body and must be overridden. Combining them is illegal.",hint:"You can't have a method that both must be overridden and cannot be overridden.",level:"intermediate",codeExample:"// abstract final void m(); // ERROR"},{question:"Can an abstract method be private?",shortAnswer:"No, private methods are not visible to subclasses, so they cannot be overridden. Abstract methods must be overridable.",explanation:"Private members are accessible only within the declaring class. Since subclasses cannot see them, they cannot provide an implementation. The combination is illegal.",hint:"If a subclass can't see it, it can't implement it.",level:"intermediate",codeExample:"// abstract private void m(); // ERROR"},{question:"What is the access level of an abstract method?",shortAnswer:"They can be public, protected, or default (package-private), but not private.",explanation:"Abstract methods need to be accessible to subclasses for overriding. private would defeat that purpose. public is most common.",hint:"protected is useful when you want subclasses in different packages to implement.",level:"intermediate",codeExample:"protected abstract void init(); // allowed"},{question:"Can we declare an abstract method in a non-abstract class?",shortAnswer:"No. If a class contains any abstract method, the class must be declared abstract.",explanation:"A non-abstract class is considered 'complete' and can be instantiated. An abstract method would be incomplete, so Java prohibits this.",hint:"Compiler error: 'The type X must be an abstract class to define abstract methods'.",level:"basic",codeExample:"class Bad { abstract void m(); } // ERROR"},{question:"Can an abstract class implement an interface?",shortAnswer:"Yes, an abstract class can implement an interface and may choose to implement some or none of its methods.",explanation:"The abstract class can provide default implementations for some methods, leaving others abstract for subclasses to implement.",hint:"This is useful for adapter classes where you only want to override a few methods.",level:"intermediate",codeExample:`interface Drawable { void draw(); void resize(); }
abstract class Shape implements Drawable { public void resize() {...} } // draw() remains abstract`},{question:"Can an abstract class extend another abstract class?",shortAnswer:"Yes, an abstract class can extend another abstract class, and it may choose to implement some of the parent's abstract methods or leave them abstract.",explanation:"This allows hierarchical abstraction. Each subclass can become more concrete or remain abstract.",hint:"Like a family tree: Grandparent abstract, Parent abstract, Child concrete.",level:"intermediate",codeExample:`abstract class A { abstract void a(); }
abstract class B extends A { void a() {...} } // implements a, may add more abstract methods`},{question:"How do you call an abstract method from a concrete method in the same abstract class?",shortAnswer:"Just call it like any other method. The actual implementation will be determined at runtime based on the concrete subclass.",explanation:"This is the basis of the Template Method pattern. The abstract class defines the algorithm structure, calling abstract methods that subclasses implement.",hint:"The abstract method acts as a placeholder that will be filled by subclasses.",level:"advanced",codeExample:"abstract class Game { final void play() { start(); playTurn(); end(); } abstract void start(); abstract void playTurn(); abstract void end(); }"},{question:"What is the difference between an abstract class and a concrete class?",shortAnswer:"Concrete classes can be instantiated and have all methods implemented; abstract classes cannot be instantiated and may have abstract methods.",explanation:"Concrete classes are 'complete' and ready to use. Abstract classes are 'incomplete' and serve as templates.",hint:"Concrete = ready-to-use object; Abstract = template/blueprint.",level:"basic",codeExample:`abstract class Vehicle {} // cannot new
class Car extends Vehicle {} // concrete, can new`},{question:"Can we have a final abstract class?",shortAnswer:"No, because final prevents inheritance and abstract requires inheritance.",explanation:"A final class cannot be extended, but an abstract class is designed to be extended. The modifiers conflict.",hint:"Illegal combination: 'abstract final' results in compile-time error.",level:"intermediate",codeExample:"// abstract final class X {} // COMPILE ERROR"},{question:"Can an abstract class have a main method?",shortAnswer:"Yes, an abstract class can have a main method, and it can be executed (though the class itself cannot be instantiated).",explanation:"The main method is static, so it belongs to the class type, not an instance. You can run it as a normal Java program.",hint:"Try it: put public static void main in an abstract class - it runs fine.",level:"intermediate",codeExample:'abstract class Test { public static void main(String[] args) { System.out.println("Hello"); } }'},{question:"What is the purpose of the 'abstract' keyword on a class that has no abstract methods?",shortAnswer:"To prevent instantiation of the class, even though it is fully implemented.",explanation:"Sometimes you want a class to serve only as a base class (like a utility of common code) and not be instantiated on its own.",hint:"It signals 'this class is meant to be extended, not used directly'.",level:"intermediate",codeExample:`abstract class BaseLogger {
  void log(String msg) { System.out.println(msg); }
}
// BaseLogger b = new BaseLogger(); // ERROR`},{question:"Can an abstract method have a body if it's defined in an interface (default method)?",shortAnswer:"Default methods in interfaces have bodies but are not abstract. Abstract methods by definition have no body.",explanation:"Since Java 8, interfaces can have default and static methods with implementations. But the 'abstract' keyword on an interface method is redundant and the method still has no body.",hint:"Default methods provide a body, abstract methods do not. They are different concepts.",level:"advanced",codeExample:'interface I { default void m() { System.out.println("body"); } } // not abstract'},{question:"What is the 'abstract' modifier's effect on performance?",shortAnswer:"Negligible. Abstract methods use dynamic dispatch (virtual method invocation) similar to overridden methods.",explanation:"The JVM handles abstract method calls efficiently. The performance difference compared to concrete methods is usually not a concern unless in extremely tight loops.",hint:"Focus on design clarity first; micro-optimizations rarely matter.",level:"expert",codeExample:"// Abstract method call uses invokevirtual bytecode, same as overridden concrete method"},{question:"How does an abstract class differ from an interface in Java 8+?",shortAnswer:"Abstract classes can have state (instance variables) and constructors; interfaces cannot (except static final constants).",explanation:"Both can have default/concrete methods, but abstract classes allow non-final fields and constructors. A class can implement multiple interfaces but extend only one class.",hint:"Use abstract class when you need to share state or common initialization code.",level:"intermediate",codeExample:`abstract class A { int x; A(int x) { this.x = x; } }
interface I { int x = 10; } // implicitly public static final`},{question:"Can we use the 'abstract' keyword with a method in an enum?",shortAnswer:"Yes, you can declare abstract methods in an enum and provide constant-specific implementations.",explanation:"Enum constants can have their own class bodies, allowing you to override abstract methods defined in the enum declaration.",hint:"This is a powerful pattern for strategy enums.",level:"expert",codeExample:"enum Operation { PLUS { double apply(double a, double b) { return a+b; } }, MINUS { ... }; abstract double apply(double a, double b); }"},{question:"What happens if you try to override a concrete method with an abstract one in a subclass?",shortAnswer:"It is allowed, but the subclass must then be declared abstract because it introduces a new abstract method.",explanation:"You can 're-abstract' a method by overriding a concrete method with an abstract one. This forces further subclasses to implement it.",hint:"Rarely used, but can be useful in deep hierarchies.",level:"expert",codeExample:`class A { void m() {} }
abstract class B extends A { abstract void m(); } // allowed, B abstract`},{question:"Can an abstract class be annotated with @FunctionalInterface?",shortAnswer:"No, because @FunctionalInterface requires an interface with exactly one abstract method. Abstract classes are not interfaces.",explanation:"Functional interfaces are a specific concept for lambda expressions. Abstract classes cannot be used as functional interfaces.",hint:"Only interfaces can be functional interfaces.",level:"intermediate",codeExample:"// @FunctionalInterface abstract class X {} // COMPILE ERROR"},{question:"What is the difference between an abstract method and a virtual method in C++?",shortAnswer:"In Java, all non-static, non-final methods are virtual by default. Abstract method is like pure virtual in C++ (=0).",explanation:"Java's abstract method has no body and forces overriding. C++ pure virtual function (=0) is analogous. Java doesn't need a separate 'virtual' keyword.",hint:"C++: virtual void f() = 0; Java: abstract void f();",level:"expert",codeExample:`// C++: virtual void start() = 0;
// Java: public abstract void start();`},{question:"Can we declare a generic abstract method?",shortAnswer:"Yes, abstract methods can be generic, just like concrete methods.",explanation:"Type parameters can be declared at the method level, allowing subclasses to provide type-safe implementations.",hint:"Useful for abstract algorithms that work with different types.",level:"advanced",codeExample:"abstract class Processor { abstract <T> T process(T input); }"},{question:"How does the JVM handle abstract method invocation?",shortAnswer:"Using invokevirtual bytecode, same as concrete method invocation. The receiver type determines the actual method to call.",explanation:"At runtime, the JVM looks up the method in the actual object's class. If the method is abstract in the declared type but implemented in the concrete subclass, it works fine.",hint:"Polymorphism works the same for abstract and overridden concrete methods.",level:"expert",codeExample:"// Animal a = new Dog(); a.sound(); // sound() is abstract in Animal, implemented in Dog"},{question:"Can an abstract class have a synchronized method?",shortAnswer:"Yes, abstract methods can be synchronized? Actually, 'abstract synchronized' is illegal because synchronization is an implementation detail.",explanation:"You cannot declare an abstract method as synchronized because synchronized affects the implementation (acquiring a lock), which an abstract method doesn't have.",hint:"Synchronized is a concrete behavior; abstract methods have no behavior.",level:"advanced",codeExample:"// abstract synchronized void m(); // COMPILE ERROR"},{question:"What is the 'abstract' keyword's role in the Template Method pattern?",shortAnswer:"Abstract methods define the customizable steps, while a concrete template method defines the algorithm structure.",explanation:"The abstract class declares abstract methods for steps that vary. A final concrete method calls these abstract methods in a specific order.",hint:"It's a classic design pattern that heavily uses abstract methods.",level:"expert",codeExample:"abstract class DataParser { final void parse() { readData(); processData(); writeData(); } abstract void readData(); abstract void processData(); abstract void writeData(); }"},{question:"Can we have a static abstract method?",shortAnswer:"No, static methods cannot be abstract because they are not inherited in a polymorphic sense.",explanation:"Static methods belong to the class and are resolved at compile time, not runtime. Abstract methods require runtime polymorphism.",hint:"If you need a static 'factory' method that returns subclasses, make it concrete.",level:"intermediate",codeExample:"// abstract static void create(); // ERROR"},{question:"What is the default return type of an abstract method if not specified?",shortAnswer:"There is no default; you must specify a return type (including void).",explanation:"Like any method, abstract methods must declare a return type. void is allowed, but you must write it explicitly.",hint:"Abstract void doSomething(); // void is the return type",level:"basic",codeExample:"abstract void process(); // void return type"},{question:"Can an abstract method throw exceptions?",shortAnswer:"Yes, abstract methods can declare throws clauses, and subclasses must follow the same exception rules (same or subclass).",explanation:"The throws clause is part of the method contract. Subclasses can throw the same exception, a subclass, or no exception (if the declared exception is unchecked).",hint:"Checked exceptions must be handled or declared by the subclass implementation.",level:"intermediate",codeExample:"abstract void loadData() throws IOException;"}],i=`// AbstractClassDemo.java\r
// Demonstrates the basic syntax of abstract classes and methods\r
\r
// Abstract class with both concrete and abstract methods\r
abstract class Database {\r
    // Concrete method - shared by all databases\r
    public void connect() {\r
        System.out.println("Establishing database connection...");\r
    }\r
    \r
    // Concrete method\r
    public void disconnect() {\r
        System.out.println("Closing database connection...");\r
    }\r
    \r
    // Abstract method - each database executes queries differently\r
    public abstract void executeQuery(String sql);\r
    \r
    // Another abstract method\r
    public abstract int getRowCount();\r
}\r
\r
// Concrete subclass - MySQL implementation\r
class MySQLDatabase extends Database {\r
    @Override\r
    public void executeQuery(String sql) {\r
        System.out.println("MySQL executing: " + sql);\r
        // MySQL-specific query parsing and execution\r
    }\r
    \r
    @Override\r
    public int getRowCount() {\r
        System.out.println("MySQL: Counting rows using SHOW TABLE STATUS");\r
        return 42; // simulated\r
    }\r
}\r
\r
// Concrete subclass - PostgreSQL implementation\r
class PostgresDatabase extends Database {\r
    @Override\r
    public void executeQuery(String sql) {\r
        System.out.println("PostgreSQL executing: " + sql);\r
        // PostgreSQL-specific execution\r
    }\r
    \r
    @Override\r
    public int getRowCount() {\r
        System.out.println("PostgreSQL: Counting rows using pg_stat_user_tables");\r
        return 99; // simulated\r
    }\r
}\r
\r
public class AbstractClassDemo {\r
    public static void main(String[] args) {\r
        // Database db = new Database(); // ERROR: cannot instantiate abstract class\r
        \r
        Database db1 = new MySQLDatabase();\r
        db1.connect();\r
        db1.executeQuery("SELECT * FROM users");\r
        System.out.println("Row count: " + db1.getRowCount());\r
        db1.disconnect();\r
        \r
        System.out.println();\r
        \r
        Database db2 = new PostgresDatabase();\r
        db2.connect();\r
        db2.executeQuery("SELECT * FROM orders");\r
        System.out.println("Row count: " + db2.getRowCount());\r
        db2.disconnect();\r
    }\r
}`,o=`// AbstractMethodDemo.java\r
// Focus on abstract method rules and behavior\r
\r
abstract class Employee {\r
    protected String name;\r
    protected double baseSalary;\r
    \r
    public Employee(String name, double baseSalary) {\r
        this.name = name;\r
        this.baseSalary = baseSalary;\r
    }\r
    \r
    // Concrete method\r
    public void printDetails() {\r
        System.out.println("Employee: " + name);\r
        System.out.println("Base Salary: $" + baseSalary);\r
        System.out.println("Total Salary: $" + calculateSalary()); // calls abstract method\r
    }\r
    \r
    // Abstract method - each employee type has its own salary calculation\r
    public abstract double calculateSalary();\r
    \r
    // Abstract method with parameters\r
    public abstract void giveBonus(double amount);\r
}\r
\r
class FullTimeEmployee extends Employee {\r
    private double annualBonus;\r
    \r
    public FullTimeEmployee(String name, double baseSalary, double annualBonus) {\r
        super(name, baseSalary);\r
        this.annualBonus = annualBonus;\r
    }\r
    \r
    @Override\r
    public double calculateSalary() {\r
        // Full-time: base salary + annual bonus / 12\r
        return baseSalary + (annualBonus / 12);\r
    }\r
    \r
    @Override\r
    public void giveBonus(double amount) {\r
        annualBonus += amount;\r
        System.out.println(name + " received bonus of $" + amount);\r
    }\r
}\r
\r
class ContractEmployee extends Employee {\r
    private int hoursWorked;\r
    private double hourlyRate;\r
    \r
    public ContractEmployee(String name, double hourlyRate, int hoursWorked) {\r
        super(name, 0); // baseSalary not used for contractors\r
        this.hourlyRate = hourlyRate;\r
        this.hoursWorked = hoursWorked;\r
    }\r
    \r
    @Override\r
    public double calculateSalary() {\r
        // Contractor: hourly rate * hours worked\r
        return hourlyRate * hoursWorked;\r
    }\r
    \r
    @Override\r
    public void giveBonus(double amount) {\r
        // Contractors might not get bonuses, but we implement anyway\r
        System.out.println(name + " (contractor) received special payment of $" + amount);\r
        hourlyRate += (amount / hoursWorked);\r
    }\r
}\r
\r
public class AbstractMethodDemo {\r
    public static void main(String[] args) {\r
        Employee emp1 = new FullTimeEmployee("Swadeep", 5000, 12000);\r
        Employee emp2 = new ContractEmployee("Tuhina", 45, 160);\r
        \r
        emp1.printDetails();\r
        emp1.giveBonus(2000);\r
        emp1.printDetails();\r
        \r
        System.out.println();\r
        \r
        emp2.printDetails();\r
        emp2.giveBonus(500);\r
        emp2.printDetails();\r
    }\r
}\r
`,l=`// VehicleAbstractExample.java\r
// Real-world abstraction: Vehicle with abstract refuel method\r
\r
abstract class Vehicle {\r
    protected String model;\r
    protected int fuelLevel; // in liters or percentage\r
    \r
    public Vehicle(String model) {\r
        this.model = model;\r
        this.fuelLevel = 0;\r
    }\r
    \r
    // Concrete method - common for all vehicles\r
    public void start() {\r
        if (fuelLevel > 0) {\r
            System.out.println(model + " engine started. Vroom!");\r
        } else {\r
            System.out.println(model + " cannot start. No fuel/charge!");\r
        }\r
    }\r
    \r
    public void stop() {\r
        System.out.println(model + " engine stopped.");\r
    }\r
    \r
    // Concrete method with default behavior (can be overridden)\r
    public void displayFuelStatus() {\r
        System.out.println(model + " fuel/charge level: " + fuelLevel);\r
    }\r
    \r
    // Abstract method - each vehicle refuels differently\r
    public abstract void refuel(int amount);\r
    \r
    // Another abstract method\r
    public abstract int getRange();\r
}\r
\r
class PetrolCar extends Vehicle {\r
    private int fuelEfficiency; // km per liter\r
    \r
    public PetrolCar(String model, int fuelEfficiency) {\r
        super(model);\r
        this.fuelEfficiency = fuelEfficiency;\r
    }\r
    \r
    @Override\r
    public void refuel(int liters) {\r
        if (liters > 0) {\r
            fuelLevel += liters;\r
            System.out.println(model + " refueled with " + liters + " liters of petrol.");\r
            System.out.println("Fuel level now: " + fuelLevel + " liters");\r
        }\r
    }\r
    \r
    @Override\r
    public int getRange() {\r
        return fuelLevel * fuelEfficiency;\r
    }\r
}\r
\r
class ElectricCar extends Vehicle {\r
    private int batteryEfficiency; // km per kWh\r
    private int maxBattery = 100; // percentage\r
    \r
    public ElectricCar(String model, int batteryEfficiency) {\r
        super(model);\r
        this.batteryEfficiency = batteryEfficiency;\r
        this.fuelLevel = 0; // fuelLevel represents charge %\r
    }\r
    \r
    @Override\r
    public void refuel(int chargePercent) {\r
        if (chargePercent > 0 && chargePercent <= 100) {\r
            fuelLevel = Math.min(maxBattery, chargePercent);\r
            System.out.println(model + " charged to " + fuelLevel + "%.");\r
            System.out.println("Battery level: " + fuelLevel + "%");\r
        }\r
    }\r
    \r
    @Override\r
    public int getRange() {\r
        // range = battery% * efficiency (simplified)\r
        return (fuelLevel * batteryEfficiency) / 100;\r
    }\r
    \r
    // Additional electric-specific method\r
    public void displayBatteryHealth() {\r
        System.out.println(model + " battery health: optimal");\r
    }\r
}\r
\r
public class VehicleAbstractExample {\r
    public static void main(String[] args) {\r
        Vehicle car = new PetrolCar("Toyota Camry", 15);\r
        Vehicle ev = new ElectricCar("Tesla Model 3", 200);\r
        \r
        car.refuel(40);\r
        car.start();\r
        System.out.println("Range: " + car.getRange() + " km");\r
        car.stop();\r
        \r
        System.out.println();\r
        \r
        ev.refuel(80);\r
        ev.start();\r
        System.out.println("Range: " + ev.getRange() + " km");\r
        ev.stop();\r
        \r
        // ((ElectricCar) ev).displayBatteryHealth(); // downcasting to access specific method\r
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
      `}),e.jsx("div",{className:"max-w-5xl mx-auto animate-fadeSlideUp",children:e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400",children:"Abstract Class & Abstract Methods"}),e.jsx("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed",children:"Blueprints for inheritance — defining contracts that subclasses must fulfill."})]})}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-purple-500 pl-4 mb-4",children:"What is an Abstract Class?"}),e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsxs("p",{children:["An ",e.jsx("strong",{className:"text-purple-600 dark:text-purple-400",children:"abstract class"})," is a class that cannot be instantiated. It serves as a blueprint for other classes. It may contain both ",e.jsx("strong",{children:"abstract methods"})," (without a body) and ",e.jsx("strong",{children:"concrete methods"})," (with implementation)."]}),e.jsxs("p",{children:["Think of an abstract class as a ",e.jsx("em",{children:"partial template"}),'. For example, a "Recipe" abstract class might have a concrete method ',e.jsx("code",{children:"boilWater()"})," and an abstract method ",e.jsx("code",{children:"addIngredients()"})," — each specific dish decides what ingredients to add."]}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mt-3",children:e.jsx("p",{className:"italic",children:'✨ Real-world parallel: A "Vehicle" abstract class defines common behaviors (start, stop) but leaves "refuel()" abstract because electric cars refuel differently than petrol cars.'})})]})]}),e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-pink-500 pl-4 mb-4",children:"What is an Abstract Method?"}),e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsxs("p",{children:["An ",e.jsx("strong",{className:"text-pink-600 dark:text-pink-400",children:"abstract method"})," is a method declared without an implementation (no body). It ends with a semicolon. Subclasses ",e.jsx("strong",{children:"must"})," override and provide a body for all abstract methods (unless the subclass is also abstract)."]}),e.jsx("div",{className:"bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono text-sm overflow-x-auto",children:e.jsx("pre",{className:"text-gray-800 dark:text-gray-200",children:`// Abstract method signature
public abstract void calculateSalary();

// No curly braces, just a semicolon`})}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 mt-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Prototype:"})," `access_modifier abstract return_type method_name(parameters);`"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return type:"})," Can be any valid Java type (void, primitive, object)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," To enforce that every subclass provides its own implementation of that behavior."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When to use:"})," When you want to declare a common behavior that must be implemented by all subclasses, but each subclass does it differently."]})]})]})]}),e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-indigo-500 pl-4 mb-4",children:"Visualizing Abstract Class & Methods"}),e.jsx("div",{className:"flex justify-center my-4",children:e.jsxs("svg",{viewBox:"0 0 800 400",className:"w-full max-w-3xl h-auto","aria-label":"Abstract class blueprint diagram",children:[e.jsxs("g",{transform:"translate(50, 20)",children:[e.jsx("rect",{x:"0",y:"0",width:"300",height:"200",rx:"12",fill:"#2d3748",className:"dark:fill-gray-700 fill-gray-200",stroke:"#a855f7",strokeWidth:"2",strokeDasharray:"8 4"}),e.jsx("text",{x:"150",y:"30",textAnchor:"middle",fill:"#d8b4fe",fontSize:"14",fontWeight:"bold",children:"«abstract» Vehicle"}),e.jsx("line",{x1:"10",y1:"45",x2:"290",y2:"45",stroke:"#a855f7",strokeWidth:"1"}),e.jsx("text",{x:"20",y:"70",fill:"#cbd5e1",fontSize:"12",children:"- fuelLevel: int"}),e.jsx("text",{x:"20",y:"90",fill:"#cbd5e1",fontSize:"12",children:"+ start(): void"}),e.jsx("text",{x:"20",y:"110",fill:"#cbd5e1",fontSize:"12",children:"+ stop(): void"}),e.jsx("text",{x:"20",y:"130",fill:"#f472b6",fontSize:"12",fontStyle:"italic",children:"+ refuel(): void  (abstract)"}),e.jsx("text",{x:"20",y:"150",fill:"#f472b6",fontSize:"12",fontStyle:"italic",children:"+ getMileage(): double (abstract)"})]}),e.jsx("line",{x1:"360",y1:"120",x2:"420",y2:"120",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrowOrange)"}),e.jsx("text",{x:"390",y:"110",textAnchor:"middle",fill:"#f59e0b",fontSize:"11",children:"extends"}),e.jsxs("g",{transform:"translate(430, 20)",children:[e.jsx("rect",{x:"0",y:"0",width:"280",height:"200",rx:"12",fill:"#1e293b",className:"dark:fill-gray-800 fill-gray-100",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"140",y:"30",textAnchor:"middle",fill:"#6ee7b7",fontSize:"14",fontWeight:"bold",children:"Car"}),e.jsx("line",{x1:"10",y1:"45",x2:"270",y2:"45",stroke:"#10b981",strokeWidth:"1"}),e.jsxs("text",{x:"20",y:"70",fill:"#cbd5e1",fontSize:"12",children:["+ refuel(): void ","{"]}),e.jsx("text",{x:"30",y:"90",fill:"#9ca3af",fontSize:"11",children:"// Open fuel cap"}),e.jsx("text",{x:"30",y:"110",fill:"#9ca3af",fontSize:"11",children:"// Insert nozzle"}),e.jsx("text",{x:"30",y:"130",fill:"#9ca3af",fontSize:"11",children:"// Pump petrol"}),e.jsx("text",{x:"20",y:"150",fill:"#cbd5e1",fontSize:"12",children:"}"})]}),e.jsx("line",{x1:"360",y1:"280",x2:"420",y2:"280",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrowOrange)"}),e.jsx("text",{x:"390",y:"270",textAnchor:"middle",fill:"#f59e0b",fontSize:"11",children:"extends"}),e.jsxs("g",{transform:"translate(430, 230)",children:[e.jsx("rect",{x:"0",y:"0",width:"280",height:"200",rx:"12",fill:"#1e293b",className:"dark:fill-gray-800 fill-gray-100",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"140",y:"30",textAnchor:"middle",fill:"#93c5fd",fontSize:"14",fontWeight:"bold",children:"ElectricCar"}),e.jsx("line",{x1:"10",y1:"45",x2:"270",y2:"45",stroke:"#3b82f6",strokeWidth:"1"}),e.jsxs("text",{x:"20",y:"70",fill:"#cbd5e1",fontSize:"12",children:["+ refuel(): void ","{"]}),e.jsx("text",{x:"30",y:"90",fill:"#9ca3af",fontSize:"11",children:"// Connect charger"}),e.jsx("text",{x:"30",y:"110",fill:"#9ca3af",fontSize:"11",children:"// Authenticate"}),e.jsx("text",{x:"30",y:"130",fill:"#9ca3af",fontSize:"11",children:"// Charge battery"}),e.jsx("text",{x:"20",y:"150",fill:"#cbd5e1",fontSize:"12",children:"}"})]}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowOrange",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#f59e0b"})})})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-center text-sm text-gray-600 dark:text-gray-400 mt-4",children:[e.jsxs("div",{className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all",children:["📐 ",e.jsx("span",{className:"font-medium",children:"Abstract Class"})," – Incomplete template"]}),e.jsxs("div",{className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all",children:["⚙️ ",e.jsx("span",{className:"font-medium",children:"Abstract Method"})," – No body, must be overridden"]}),e.jsxs("div",{className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all",children:["🏎️ ",e.jsx("span",{className:"font-medium",children:"Concrete Class"})," – Provides implementations"]})]})]}),e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-blue-500 pl-4 mb-4",children:"Java Implementation"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Let's see abstract classes and methods in action:"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{fileModule:i,title:"AbstractClassDemo.java",highlightLines:[4,5,8,9,14,15]}),e.jsx(t,{fileModule:o,title:"AbstractMethodDemo.java",highlightLines:[5,6,11,12,17,18,22]}),e.jsx(t,{fileModule:l,title:"VehicleAbstractExample.java",highlightLines:[4,5,10,11,16,17,24,25]})]}),e.jsx("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:e.jsxs("p",{className:"text-sm",children:["💡 ",e.jsx("strong",{children:"Observation:"})," Notice how each subclass provides its own version of ",e.jsx("code",{children:"calculateArea()"})," or ",e.jsx("code",{children:"refuel()"}),". The abstract class defines ",e.jsx("strong",{children:"what"})," to do, subclasses define ",e.jsx("strong",{children:"how"}),"."]})})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeSlideUp",children:[e.jsxs("div",{className:"bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl p-5 border border-yellow-200 dark:border-yellow-800 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-semibold flex items-center gap-2",children:"💎 Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 mt-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["Use abstract classes when you have ",e.jsx("strong",{children:"common code"})," to share among closely related classes."]}),e.jsxs("li",{children:["Abstract methods are a form of ",e.jsx("strong",{children:"contract"})," — they force subclasses to implement specific behavior."]}),e.jsx("li",{children:"You can call abstract methods from concrete methods inside the abstract class (template method pattern)."}),e.jsx("li",{children:"Debugging tip: If a subclass fails to implement an abstract method, the compiler error will tell you exactly which method is missing."})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-5 border border-red-200 dark:border-red-800 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-semibold flex items-center gap-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 mt-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to override all abstract methods"}),' – compiler error: "The type X must implement inherited abstract method".']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Trying to instantiate an abstract class"}),' – error: "Cannot instantiate the type AbstractClass".']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using abstract when interface would be better"})," – if no state or common code, prefer interface."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Making methods abstract unnecessarily"})," – only when you truly need different implementations per subclass."]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeSlideUp",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border-l-4 border-green-500",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"✅ Best Practices"}),e.jsxs("ul",{className:"space-y-2 mt-2 text-gray-700 dark:text-gray-300 list-disc list-inside",children:[e.jsx("li",{children:"Keep abstract classes focused on a single responsibility."}),e.jsxs("li",{children:['Name abstract classes with "Base" or "Abstract" prefix (e.g., ',e.jsx("code",{children:"AbstractEmployee"}),")."]}),e.jsx("li",{children:"Provide as much concrete functionality as possible to avoid code duplication."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"@Override"})," annotation when implementing abstract methods."]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border-l-4 border-blue-500",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"📋 Mini Checklist"}),e.jsxs("ul",{className:"space-y-2 mt-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"✔️ Is the class intended to be a base class?"}),e.jsx("li",{children:"✔️ Does it have at least one abstract method? (optional but common)"}),e.jsxs("li",{children:["✔️ Did you mark the class as ",e.jsx("code",{children:"abstract"}),"?"]}),e.jsx("li",{children:"✔️ Did all concrete subclasses implement every abstract method?"})]})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800/60 rounded-xl p-5 border-l-8 border-indigo-400 animate-fadeSlideUp",children:[e.jsx("h3",{className:"font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2",children:"🧠 Think about..."}),e.jsxs("p",{className:"italic text-gray-700 dark:text-gray-300 mt-1",children:["Observe carefully: In the Vehicle example, why is ",e.jsx("code",{children:"start()"})," concrete but ",e.jsx("code",{children:"refuel()"})," abstract? What would happen if ",e.jsx("code",{children:"start()"})," were also abstract?"]}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Try changing the abstract class to remove the abstract keyword from the class but keep the abstract method. What error do you get?"})]}),e.jsx("div",{className:"animate-fadeSlideUp",children:e.jsx(r,{title:"Abstract Class & Abstract Methods - FAQs",questions:n})}),e.jsx("div",{className:"animate-fadeSlideUp mt-8",children:e.jsx(s,{note:"Students often confuse abstract classes with interfaces. Emphasize that abstract classes can hold state (fields) and provide partial implementation. Use the analogy of a 'partially built house' — you can't live in it (instantiate), but you can add rooms (concrete subclasses). Encourage them to identify abstract methods in Java's standard library (e.g., HttpServlet's doGet(), doPost() are abstract)."})})]})]})};export{w as default};
