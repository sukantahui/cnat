import{r as a,j as e}from"./index-Da242x_v.js";import{J as t}from"./JavaFileLoader-ByXlwT7S.js";import{T as r}from"./TeacherSukantaHui-CPTgRfho.js";import{F as s}from"./FAQTemplate-oa9iEk_9.js";import"./JavaCodeBlock-Dra3Hw0G.js";import"./prism-zhFG2M2I.js";import"./browser-B29B4uVk.js";import"./prism-java-BwO6k4I_.js";import"./git-branch-DA1yYObF.js";import"./clsx-B-dksMZM.js";const n=[{question:"What is the primary benefit of using an abstract class in an inheritance hierarchy?",shortAnswer:"It allows code reuse while enforcing that subclasses implement specific behaviors.",explanation:"Abstract classes provide common fields and methods (reuse) and declare abstract methods that force subclasses to provide their own implementations.",hint:"Think of a template with both shared and customizable parts.",level:"basic",codeExample:"abstract class Shape { String color; abstract double area(); } // common field, abstract method"},{question:"How does inheritance with abstract classes support polymorphism?",shortAnswer:"You can treat any subclass instance as the abstract superclass type, calling abstract methods that execute subclass-specific implementations.",explanation:"Polymorphism allows a reference of the abstract class type to refer to any subclass object, and the correct overridden method is called at runtime.",hint:"Animal a = new Dog(); a.sound(); // calls Dog's sound()",level:"intermediate",codeExample:"Employee emp = new FullTimeEmployee(); emp.calculateSalary(); // polymorphic call"},{question:"Can an abstract class inherit from another abstract class?",shortAnswer:"Yes, and the child abstract class may choose to implement some or none of the parent's abstract methods.",explanation:"This creates a hierarchy of abstraction, where each level can become more concrete or add new abstract methods.",hint:"Like Animal → Mammal → Canine, each can be abstract.",level:"intermediate",codeExample:`abstract class A { abstract void a(); }
abstract class B extends A { } // B is abstract, a() still abstract`},{question:"What happens if a concrete class extends an abstract class but doesn't implement all abstract methods?",shortAnswer:"Compiler error: 'The type must implement the inherited abstract method'.",explanation:"Concrete classes must provide implementations for all inherited abstract methods. Otherwise, they would be incomplete.",hint:"You'll get a clear error message listing the missing methods.",level:"basic",codeExample:`abstract class A { abstract void m(); }
class B extends A { } // ERROR`},{question:"Can an abstract class have a method that calls its own abstract methods?",shortAnswer:"Yes, this is the Template Method pattern, where a concrete method in the abstract class defines an algorithm using abstract steps.",explanation:"The abstract class can provide a skeleton algorithm (concrete method) that calls abstract methods, which subclasses implement.",hint:"This ensures the algorithm structure is consistent while allowing variations.",level:"advanced",codeExample:"abstract class Game { final void play() { start(); playTurn(); end(); } abstract void start(); abstract void playTurn(); abstract void end(); }"},{question:"What is the difference between inheriting from an abstract class vs. a concrete class?",shortAnswer:"An abstract class may have incomplete methods (abstract), forcing you to implement them, while a concrete class is complete.",explanation:"Abstract classes are designed for extension and force subclasses to complete the implementation. Concrete classes may be extended optionally.",hint:"Abstract classes say 'you must fill in the blanks'; concrete classes say 'use as is or override'.",level:"intermediate",codeExample:`abstract class A { abstract void m(); } // must override
class B { void m() {} } // optional override`},{question:"How does inheritance with abstract classes help with the Open/Closed Principle?",shortAnswer:"It allows you to add new subclasses without modifying existing code that uses the abstract superclass.",explanation:"The abstract class defines a stable interface. New functionality can be added by creating new subclasses, keeping existing code closed for modification.",hint:"You can add a new Employee type (e.g., Contractor) without changing payroll processing code.",level:"expert",codeExample:`// Existing code works with any new Employee subclass
void processPayroll(Employee e) { e.calculateSalary(); }`},{question:"Can an abstract class inherit from a concrete class?",shortAnswer:"Yes, an abstract class can extend a concrete class, adding abstract methods or overriding concrete ones.",explanation:"This allows you to take a fully implemented class and make it abstract for further specialization.",hint:"Useful when you want to force additional methods in subclasses of an existing concrete class.",level:"advanced",codeExample:`class Concrete { void doIt() {} }
abstract class Abstract extends Concrete { abstract void doMore(); }`},{question:"What is the role of constructors in an abstract class inheritance chain?",shortAnswer:"Each abstract class constructor initializes its own fields and is called via super() from the subclass constructor.",explanation:"Constructors in abstract classes are called in order from the top of the hierarchy down to the concrete class.",hint:"Even though you can't instantiate the abstract class, its constructor still runs.",level:"intermediate",codeExample:`abstract class A { A() { System.out.println("A"); } }
class B extends A { B() { super(); } }`},{question:"How does method overriding work with abstract methods in a multi-level hierarchy?",shortAnswer:"An abstract method can be overridden at any level. A subclass can provide an implementation, and further subclasses can override it again.",explanation:"The first concrete class in the hierarchy must implement all abstract methods, but subclasses can override those implementations.",hint:"Abstract methods can be implemented and then overridden like any other method.",level:"intermediate",codeExample:`abstract class A { abstract void m(); }
abstract class B extends A { void m() {} } // implements
class C extends B { void m() {} } // overrides`},{question:"Can you have a class that extends an abstract class and also implements an interface?",shortAnswer:"Yes, a class can extend one abstract class and implement multiple interfaces.",explanation:"Java supports single inheritance for classes (abstract or concrete) but multiple interface implementation.",hint:"The extends clause must come before implements.",level:"intermediate",codeExample:"class Concrete extends AbstractClass implements Interface1, Interface2 { }"},{question:"What is the 'is-a' relationship test for abstract class inheritance?",shortAnswer:"If you can say 'subclass IS-A superclass' in a meaningful way, inheritance is appropriate.",explanation:"For example, 'Dog IS-A Animal' makes sense. 'Car IS-A Engine' does not (Car HAS-A Engine). Abstract classes are for IS-A relationships.",hint:"If it's more 'has-a' or 'uses-a', consider composition instead.",level:"basic",codeExample:`// Good: class Dog extends Animal {}
// Bad: class Car extends Engine {}`},{question:"How do you access an overridden abstract method implementation from a superclass?",shortAnswer:"Use 'super.methodName()' inside the subclass method to call the superclass version (if the superclass provided a concrete implementation).",explanation:"If an abstract method was implemented at some level, you can call super.method() to invoke that implementation.",hint:"Only works if the superclass actually has a concrete implementation.",level:"intermediate",codeExample:`class A { void m() { System.out.println("A"); } }
class B extends A { void m() { super.m(); System.out.println("B"); } }`},{question:"What is the difference between abstract class inheritance and interface implementation?",shortAnswer:"Abstract classes can hold state (fields) and provide partial implementation; interfaces (before Java 8) had only abstract methods and constants.",explanation:"Since Java 8, interfaces have default methods, but still cannot have instance fields (except static final). Abstract classes are better when sharing state.",hint:"Use abstract class for 'is-a' with shared code; use interface for 'can-do' capabilities.",level:"intermediate",codeExample:`abstract class Animal { String name; } // state
interface Flyable { void fly(); } // capability`},{question:"How does inheritance with abstract classes affect testing?",shortAnswer:"You can test the abstract class's concrete methods by creating a test-specific subclass that implements abstract methods.",explanation:"Abstract classes can be tested by creating a mock subclass or using anonymous classes in tests.",hint:"Use anonymous inner classes or mocking frameworks (Mockito) to test abstract classes.",level:"expert",codeExample:"new AbstractClass() { void abstractMethod() { } }.concreteMethod(); // test"},{question:"Can an abstract class be used as a reference type for a collection?",shortAnswer:"Yes, you can create collections (List, Set, Map) of the abstract class type and store any subclass instances.",explanation:"This is a powerful use of polymorphism with inheritance.",hint:"List<Shape> shapes = new ArrayList<>(); shapes.add(new Circle()); shapes.add(new Rectangle());",level:"intermediate",codeExample:"List<Employee> payroll = new ArrayList<>(); payroll.add(new FullTimeEmployee()); payroll.add(new Contractor());"},{question:"What is the 'template method' pattern and how does it use abstract class inheritance?",shortAnswer:"A pattern where an abstract class defines the skeleton of an algorithm in a concrete method, calling abstract methods for variable steps.",explanation:"The template method is often final to prevent subclasses from altering the algorithm structure. Subclasses implement the abstract steps.",hint:"Common in frameworks: JUnit's setUp(), tearDown() are hook methods called by template.",level:"advanced",codeExample:"abstract class Recipe { final void cook() { boil(); addIngredients(); simmer(); } abstract void addIngredients(); }"},{question:"How does inheritance with abstract classes support the Dependency Inversion Principle?",shortAnswer:"High-level modules depend on the abstract class (abstraction), not concrete subclasses, allowing easy substitution.",explanation:"By coding to the abstract class, you decouple high-level logic from low-level implementation details.",hint:"Your service class should depend on 'PaymentProcessor' abstract class, not 'StripeProcessor'.",level:"expert",codeExample:"class OrderService { private PaymentProcessor processor; } // depends on abstraction"},{question:"Can you override a concrete method from an abstract class and make it abstract?",shortAnswer:"Yes, you can override a concrete method with an abstract one, but the subclass must then be abstract.",explanation:"This 're-abstraction' forces further subclasses to provide an implementation.",hint:"Rare but useful in deep hierarchies where a middle class wants to force more specific behavior.",level:"expert",codeExample:`class A { void m() {} }
abstract class B extends A { abstract void m(); } // re-abstracted`},{question:"How do you prevent a subclass from modifying a concrete method in an abstract class?",shortAnswer:"Declare the method as final in the abstract class.",explanation:"Final methods cannot be overridden by subclasses, ensuring the behavior remains consistent.",hint:"Use final for template methods to preserve algorithm structure.",level:"intermediate",codeExample:"abstract class A { final void template() { ... } } // cannot be overridden"},{question:"What is the difference between inheritance and composition when using abstract classes?",shortAnswer:"Inheritance is 'is-a' (Dog extends Animal), composition is 'has-a' (Car has Engine). Abstract classes support inheritance.",explanation:"Favor composition over inheritance when the relationship is not a clear 'is-a'. Abstract classes encourage inheritance, so use them appropriately.",hint:"If you find yourself inheriting just to reuse a method, composition might be better.",level:"advanced",codeExample:`// Inheritance: class Dog extends Animal {}
// Composition: class Dog { private Leg leg; }`},{question:"How does Java's single inheritance limitation affect abstract classes?",shortAnswer:"A class can extend only one abstract class (or any class), but can implement multiple interfaces.",explanation:"This limitation means abstract classes should be used for primary classification, while interfaces add secondary capabilities.",hint:"Choose abstract class for the main 'type' of your object.",level:"intermediate",codeExample:"class Student extends Person implements Playable, Studyable { }"},{question:"Can an abstract class have a method that returns an instance of itself?",shortAnswer:"Yes, an abstract class can have methods that return its own type (or a subtype), useful for factory or builder patterns.",explanation:"The return type can be the abstract class, and concrete subclasses return instances of themselves.",hint:"Common in fluent APIs and builder patterns.",level:"advanced",codeExample:`abstract class Builder { abstract Builder addPart(); }
class ConcreteBuilder extends Builder { Builder addPart() { return this; } }`},{question:"What happens if you have two abstract classes in the inheritance chain both declaring the same abstract method?",shortAnswer:"No problem. The method remains abstract until a concrete class implements it.",explanation:"The most specific declaration doesn't cause conflict; the method just needs to be implemented once in a concrete subclass.",hint:"The method signature is the same, so one implementation satisfies all.",level:"intermediate",codeExample:`abstract class A { abstract void m(); }
abstract class B extends A { } // m() still abstract`},{question:"How does inheritance with abstract classes affect serialization?",shortAnswer:"If an abstract class implements Serializable, all subclasses are serializable unless they override to prevent it.",explanation:"The abstract class can define serialVersionUID and handle serialization of its fields. Subclasses inherit serialization behavior.",hint:"Be careful with transient fields in abstract classes.",level:"expert",codeExample:"abstract class Base implements Serializable { protected transient int cache; }"},{question:"Can an abstract class be used with the 'instanceof' operator?",shortAnswer:"Yes, instanceof works with abstract class types because the actual object is always a concrete subclass.",explanation:"The operator checks the actual object's type against the abstract class, returning true if it's a subclass instance.",hint:"Useful for type checks in polymorphic code.",level:"intermediate",codeExample:"if (employee instanceof FullTimeEmployee) { ... }"},{question:"What is the 'factory method' pattern and how does it relate to abstract class inheritance?",shortAnswer:"A pattern where an abstract class declares a factory method (often abstract) that subclasses override to create specific objects.",explanation:"The abstract class may call its own abstract factory method to create objects, allowing subclasses to control instantiation.",hint:"Common in frameworks where the framework calls hooks to create objects.",level:"expert",codeExample:"abstract class Document { abstract Printer createPrinter(); void print() { createPrinter().print(); } }"},{question:"How does method hiding work with static methods in abstract class inheritance?",shortAnswer:"Static methods are hidden, not overridden. If a subclass defines a static method with the same signature, it hides the parent's method.",explanation:"Static methods belong to the class, not instances. The method called depends on the reference type, not the object type.",hint:"Avoid using static methods in inheritance hierarchies.",level:"advanced",codeExample:`abstract class A { static void m() { } }
class B extends A { static void m() { } } // hides, not overrides`},{question:"Can you cast from an abstract class type to a subclass type?",shortAnswer:"Yes, downcasting is allowed if the object actually is an instance of that subclass, but it may throw ClassCastException.",explanation:"Use instanceof before downcasting to avoid runtime exceptions.",hint:"Downcasting is sometimes necessary to access subclass-specific methods.",level:"intermediate",codeExample:"if (animal instanceof Dog) { Dog d = (Dog) animal; d.bark(); }"},{question:"What is the 'Hollywood Principle' and how does abstract class inheritance support it?",shortAnswer:"Don't call us, we'll call you. Abstract classes define hooks that the framework calls, allowing subclasses to plug in behavior.",explanation:"The abstract class (framework) controls the flow and calls abstract methods implemented by subclasses.",hint:"Template Method pattern is an example: framework calls your overrides.",level:"expert",codeExample:"// Framework: abstract class GameLoop { final void run() { init(); while(true) update(); } abstract void init(); abstract void update(); }"}],i=`// InheritanceDemo.java\r
// Demonstrates how abstract classes enable powerful inheritance hierarchies\r
\r
// Abstract base class\r
abstract class Employee {\r
    protected String name;\r
    protected int id;\r
    \r
    public Employee(String name, int id) {\r
        this.name = name;\r
        this.id = id;\r
        System.out.println("Employee constructor called for " + name);\r
    }\r
    \r
    // Concrete method - shared by all subclasses\r
    public String getName() {\r
        return name;\r
    }\r
    \r
    public int getId() {\r
        return id;\r
    }\r
    \r
    // Concrete method with default implementation (can be overridden)\r
    public void displayInfo() {\r
        System.out.println("ID: " + id + ", Name: " + name);\r
    }\r
    \r
    // Abstract method - each subclass calculates salary differently\r
    public abstract double calculateSalary();\r
}\r
\r
// First concrete subclass\r
class FullTimeEmployee extends Employee {\r
    private double monthlySalary;\r
    private double bonus;\r
    \r
    public FullTimeEmployee(String name, int id, double monthlySalary, double bonus) {\r
        super(name, id);\r
        this.monthlySalary = monthlySalary;\r
        this.bonus = bonus;\r
    }\r
    \r
    @Override\r
    public double calculateSalary() {\r
        return monthlySalary + bonus;\r
    }\r
    \r
    @Override\r
    public void displayInfo() {\r
        super.displayInfo();\r
        System.out.println("Type: Full-Time, Salary: $" + calculateSalary());\r
    }\r
}\r
\r
// Second concrete subclass\r
class PartTimeEmployee extends Employee {\r
    private double hourlyRate;\r
    private int hoursWorked;\r
    \r
    public PartTimeEmployee(String name, int id, double hourlyRate, int hoursWorked) {\r
        super(name, id);\r
        this.hourlyRate = hourlyRate;\r
        this.hoursWorked = hoursWorked;\r
    }\r
    \r
    @Override\r
    public double calculateSalary() {\r
        return hourlyRate * hoursWorked;\r
    }\r
    \r
    @Override\r
    public void displayInfo() {\r
        super.displayInfo();\r
        System.out.println("Type: Part-Time, Hours: " + hoursWorked + ", Rate: $" + hourlyRate);\r
        System.out.println("Salary: $" + calculateSalary());\r
    }\r
}\r
\r
// Third concrete subclass\r
class Intern extends Employee {\r
    private double stipend;\r
    \r
    public Intern(String name, int id, double stipend) {\r
        super(name, id);\r
        this.stipend = stipend;\r
    }\r
    \r
    @Override\r
    public double calculateSalary() {\r
        return stipend; // Interns get fixed stipend\r
    }\r
    \r
    @Override\r
    public void displayInfo() {\r
        super.displayInfo();\r
        System.out.println("Type: Intern, Stipend: $" + stipend);\r
    }\r
}\r
\r
public class InheritanceDemo {\r
    public static void main(String[] args) {\r
        System.out.println("=== Employee Inheritance Demo ===\\n");\r
        \r
        // Polymorphic array - all treated as Employee\r
        Employee[] employees = {\r
            new FullTimeEmployee("Swadeep", 101, 5000, 1000),\r
            new PartTimeEmployee("Tuhina", 102, 25, 80),\r
            new Intern("Abhronila", 103, 1200)\r
        };\r
        \r
        // Process all employees uniformly\r
        for (Employee emp : employees) {\r
            emp.displayInfo();\r
            System.out.println("Monthly Salary: $" + emp.calculateSalary());\r
            System.out.println("------------------------");\r
        }\r
        \r
        // Demonstration of inheritance benefits\r
        System.out.println("\\n=== Polymorphism in Action ===");\r
        System.out.println("Total payroll: $" + calculateTotalPayroll(employees));\r
    }\r
    \r
    // Method works with any Employee subclass thanks to abstraction\r
    public static double calculateTotalPayroll(Employee[] employees) {\r
        double total = 0;\r
        for (Employee emp : employees) {\r
            total += emp.calculateSalary();\r
        }\r
        return total;\r
    }\r
}`,o=`// AbstractInheritanceChain.java\r
// Demonstrates multi-level inheritance with abstract classes\r
\r
// Level 1: Most abstract\r
abstract class Animal {\r
    protected String name;\r
    \r
    public Animal(String name) {\r
        this.name = name;\r
    }\r
    \r
    // Abstract methods at top level\r
    public abstract void makeSound();\r
    public abstract void move();\r
    \r
    // Concrete method\r
    public void eat() {\r
        System.out.println(name + " is eating");\r
    }\r
    \r
    public String getName() {\r
        return name;\r
    }\r
}\r
\r
// Level 2: Partial implementation - still abstract\r
abstract class Mammal extends Animal {\r
    protected int bodyTemperature = 37; // Celsius\r
    \r
    public Mammal(String name) {\r
        super(name);\r
    }\r
    \r
    // Implements move() - all mammals move similarly\r
    @Override\r
    public void move() {\r
        System.out.println(name + " is walking/running");\r
    }\r
    \r
    // Adds new abstract method specific to mammals\r
    public abstract void feedMilk();\r
    \r
    // Concrete method for mammals\r
    public void regulateTemperature() {\r
        System.out.println(name + " regulating body temperature: " + bodyTemperature + "°C");\r
    }\r
}\r
\r
// Level 3: Further specialization - still abstract?\r
abstract class Canine extends Mammal {\r
    public Canine(String name) {\r
        super(name);\r
    }\r
    \r
    // Can override or add more abstract methods\r
    public abstract void howl();\r
    \r
    // Concrete method for all canines\r
    public void wagTail() {\r
        System.out.println(name + " is wagging tail");\r
    }\r
}\r
\r
// Level 4: Concrete class\r
class Dog extends Canine {\r
    private String breed;\r
    \r
    public Dog(String name, String breed) {\r
        super(name);\r
        this.breed = breed;\r
    }\r
    \r
    @Override\r
    public void makeSound() {\r
        System.out.println(name + " says: Woof! Woof!");\r
    }\r
    \r
    @Override\r
    public void feedMilk() {\r
        System.out.println(name + " the puppy drinks mother's milk");\r
    }\r
    \r
    @Override\r
    public void howl() {\r
        System.out.println(name + " howls: Awooooo!");\r
    }\r
    \r
    // Dog-specific behavior\r
    public void fetch() {\r
        System.out.println(name + " is fetching the ball");\r
    }\r
}\r
\r
// Another concrete class at level 4\r
class Wolf extends Canine {\r
    private String packName;\r
    \r
    public Wolf(String name, String packName) {\r
        super(name);\r
        this.packName = packName;\r
    }\r
    \r
    @Override\r
    public void makeSound() {\r
        System.out.println(name + " growls deeply");\r
    }\r
    \r
    @Override\r
    public void feedMilk() {\r
        System.out.println(name + " (wolf pup) nurses");\r
    }\r
    \r
    @Override\r
    public void howl() {\r
        System.out.println(name + " howls to the moon!");\r
    }\r
    \r
    public void huntInPack() {\r
        System.out.println(name + " is hunting with pack: " + packName);\r
    }\r
}\r
\r
public class AbstractInheritanceChain {\r
    public static void main(String[] args) {\r
        System.out.println("=== Multi-Level Abstract Inheritance ===\\n");\r
        \r
        // Polymorphic array using top-level abstract type\r
        Animal[] animals = {\r
            new Dog("Buddy", "Golden Retriever"),\r
            new Wolf("Shadow", "Northern Pack")\r
        };\r
        \r
        for (Animal animal : animals) {\r
            System.out.println("--- " + animal.getName() + " ---");\r
            animal.makeSound();\r
            animal.move();\r
            animal.eat();\r
            \r
            // Check if it's a Canine (downcasting)\r
            if (animal instanceof Canine) {\r
                Canine canine = (Canine) animal;\r
                canine.howl();\r
                canine.wagTail();\r
            }\r
            \r
            // Check for specific types\r
            if (animal instanceof Dog) {\r
                ((Dog) animal).fetch();\r
            } else if (animal instanceof Wolf) {\r
                ((Wolf) animal).huntInPack();\r
            }\r
            System.out.println();\r
        }\r
        \r
        // Demonstrate inheritance depth\r
        System.out.println("=== Inheritance Chain Length ===");\r
        Dog dog = new Dog("Max", "Beagle");\r
        System.out.println("Dog class hierarchy:");\r
        System.out.println("Dog extends Canine extends Mammal extends Animal extends Object");\r
        System.out.println("Total levels: 5 (including Object)");\r
    }\r
}`,l=`// TemplateMethodPattern.java\r
// Classic use of abstract class inheritance: Template Method pattern\r
\r
abstract class DataProcessor {\r
    // Template method - defines algorithm skeleton\r
    // Made final to prevent subclasses from changing the algorithm structure\r
    public final void process() {\r
        loadData();\r
        processData();\r
        saveData();\r
        if (needsValidation()) {\r
            validate();\r
        }\r
        cleanup();\r
    }\r
    \r
    // Abstract methods - steps that subclasses must implement\r
    protected abstract void loadData();\r
    protected abstract void processData();\r
    protected abstract void saveData();\r
    \r
    // Hook method - optional override (default implementation)\r
    protected boolean needsValidation() {\r
        return false; // default: no validation\r
    }\r
    \r
    protected void validate() {\r
        System.out.println("Performing default validation");\r
    }\r
    \r
    // Concrete method - same for all\r
    private void cleanup() {\r
        System.out.println("Cleaning up resources");\r
    }\r
}\r
\r
// Concrete implementation for CSV processing\r
class CSVProcessor extends DataProcessor {\r
    private String filename;\r
    \r
    public CSVProcessor(String filename) {\r
        this.filename = filename;\r
    }\r
    \r
    @Override\r
    protected void loadData() {\r
        System.out.println("Loading CSV file: " + filename);\r
    }\r
    \r
    @Override\r
    protected void processData() {\r
        System.out.println("Parsing CSV rows, converting to objects");\r
    }\r
    \r
    @Override\r
    protected void saveData() {\r
        System.out.println("Saving processed CSV data to database");\r
    }\r
    \r
    @Override\r
    protected boolean needsValidation() {\r
        return true; // CSV needs validation\r
    }\r
    \r
    @Override\r
    protected void validate() {\r
        System.out.println("Validating CSV format and data types");\r
    }\r
}\r
\r
// Concrete implementation for JSON processing\r
class JSONProcessor extends DataProcessor {\r
    private String apiEndpoint;\r
    \r
    public JSONProcessor(String apiEndpoint) {\r
        this.apiEndpoint = apiEndpoint;\r
    }\r
    \r
    @Override\r
    protected void loadData() {\r
        System.out.println("Fetching JSON from API: " + apiEndpoint);\r
    }\r
    \r
    @Override\r
    protected void processData() {\r
        System.out.println("Deserializing JSON to Java objects");\r
    }\r
    \r
    @Override\r
    protected void saveData() {\r
        System.out.println("Storing processed JSON data");\r
    }\r
    \r
    // Uses default needsValidation() = false\r
}\r
\r
// Another example: Game loop template\r
abstract class Game {\r
    // Template method - the game loop\r
    public final void play() {\r
        initialize();\r
        while (!isGameOver()) {\r
            takeTurn();\r
            updateDisplay();\r
        }\r
        showGameOver();\r
        cleanup();\r
    }\r
    \r
    protected abstract void initialize();\r
    protected abstract void takeTurn();\r
    protected abstract void updateDisplay();\r
    protected abstract boolean isGameOver();\r
    protected abstract void showGameOver();\r
    \r
    protected void cleanup() {\r
        System.out.println("Game cleanup complete");\r
    }\r
}\r
\r
class ChessGame extends Game {\r
    private int moves = 0;\r
    private boolean gameOver = false;\r
    \r
    @Override\r
    protected void initialize() {\r
        System.out.println("Initializing chess board, placing pieces");\r
    }\r
    \r
    @Override\r
    protected void takeTurn() {\r
        moves++;\r
        System.out.println("Turn " + moves + ": Player moves a piece");\r
        if (moves >= 5) gameOver = true; // demo condition\r
    }\r
    \r
    @Override\r
    protected void updateDisplay() {\r
        System.out.println("Displaying chess board (updated)");\r
    }\r
    \r
    @Override\r
    protected boolean isGameOver() {\r
        return gameOver;\r
    }\r
    \r
    @Override\r
    protected void showGameOver() {\r
        System.out.println("Checkmate! Game over after " + moves + " moves.");\r
    }\r
}\r
\r
public class TemplateMethodPattern {\r
    public static void main(String[] args) {\r
        System.out.println("=== Template Method Pattern Demo ===\\n");\r
        \r
        System.out.println("--- CSV Processor ---");\r
        DataProcessor csvProcessor = new CSVProcessor("data.csv");\r
        csvProcessor.process();\r
        \r
        System.out.println("\\n--- JSON Processor ---");\r
        DataProcessor jsonProcessor = new JSONProcessor("https://api.example.com/data");\r
        jsonProcessor.process();\r
        \r
        System.out.println("\\n--- Chess Game ---");\r
        Game chess = new ChessGame();\r
        chess.play();\r
        \r
        System.out.println("\\n=== Key Insight ===");\r
        System.out.println("The abstract class defines the algorithm structure (template method)");\r
        System.out.println("Subclasses provide specific implementations for each step.");\r
        System.out.println("This promotes code reuse and enforces consistency.");\r
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
      `}),e.jsx("div",{className:"max-w-5xl mx-auto animate-fadeSlideUp",children:e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400",children:"Use of Abstract Class in Inheritance"}),e.jsx("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed",children:"Building powerful hierarchies — how abstract classes enable code reuse and polymorphism."})]})}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-blue-500 pl-4 mb-4",children:"Why Abstract Classes Matter in Inheritance"}),e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsxs("p",{children:["Abstract classes are the ",e.jsx("strong",{children:"cornerstone of inheritance hierarchies"}),". They provide a ",e.jsx("strong",{children:"partial implementation"})," that multiple subclasses can share, while forcing subclasses to implement specific behaviors. This creates a clean ",e.jsx("strong",{children:'"is-a" relationship'})," with built-in flexibility."]}),e.jsxs("p",{children:["Think of a ",e.jsx("strong",{children:"school system"}),": An abstract class ",e.jsx("code",{children:"Person"})," might have fields like ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"age"}),", and concrete methods like ",e.jsx("code",{children:"getAddress()"}),", but abstract methods like ",e.jsx("code",{children:"calculateFee()"})," because students and teachers calculate fees differently. That's inheritance with abstraction in action."]}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-3",children:e.jsxs("p",{className:"italic",children:["✨ ",e.jsx("strong",{children:"Real-world parallel:"}),' A blueprint for a "Vehicle" defines common properties (wheels, engine) and behaviors (start, stop). But "refuel()" is abstract because electric cars charge, petrol cars pump gas. Subclasses inherit the common parts and implement the rest.']})})]})]}),e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-cyan-500 pl-4 mb-4",children:"Visualizing Abstract Class in Inheritance"}),e.jsx("div",{className:"flex justify-center my-4",children:e.jsxs("svg",{viewBox:"0 0 800 450",className:"w-full max-w-3xl h-auto","aria-label":"Abstract class inheritance hierarchy",children:[e.jsxs("g",{transform:"translate(20, 20)",children:[e.jsxs("g",{transform:"translate(250, 0)",children:[e.jsx("rect",{x:"0",y:"0",width:"260",height:"90",rx:"12",fill:"#1e293b",className:"dark:fill-gray-800 fill-gray-200",stroke:"#3b82f6",strokeWidth:"2",strokeDasharray:"8 4"}),e.jsx("text",{x:"130",y:"25",textAnchor:"middle",fill:"#93c5fd",fontSize:"14",fontWeight:"bold",children:"«abstract» Employee"}),e.jsx("line",{x1:"10",y1:"38",x2:"250",y2:"38",stroke:"#3b82f6",strokeWidth:"1"}),e.jsx("text",{x:"15",y:"55",fill:"#cbd5e1",fontSize:"11",children:"- name: String"}),e.jsx("text",{x:"15",y:"70",fill:"#cbd5e1",fontSize:"11",children:"- id: int"}),e.jsx("text",{x:"15",y:"85",fill:"#f472b6",fontSize:"11",fontStyle:"italic",children:"+ calculateSalary(): double (abstract)"})]}),e.jsx("line",{x1:"380",y1:"90",x2:"380",y2:"130",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrowOrange)"}),e.jsx("text",{x:"390",y:"115",fill:"#f59e0b",fontSize:"11",children:"extends"}),e.jsxs("g",{transform:"translate(240, 140)",children:[e.jsx("rect",{x:"0",y:"0",width:"260",height:"100",rx:"10",fill:"#0f172a",className:"dark:fill-gray-900 fill-gray-100",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"130",y:"25",textAnchor:"middle",fill:"#6ee7b7",fontSize:"13",fontWeight:"bold",children:"FullTimeEmployee"}),e.jsx("line",{x1:"10",y1:"38",x2:"250",y2:"38",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"15",y:"55",fill:"#cbd5e1",fontSize:"11",children:"- bonus: double"}),e.jsxs("text",{x:"15",y:"70",fill:"#cbd5e1",fontSize:"11",children:["+ calculateSalary(): double ","{"]}),e.jsx("text",{x:"25",y:"85",fill:"#9ca3af",fontSize:"10",children:"return salary + bonus;"}),e.jsx("text",{x:"15",y:"98",fill:"#cbd5e1",fontSize:"11",children:"}"})]}),e.jsx("line",{x1:"140",y1:"90",x2:"140",y2:"130",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrowOrange)"}),e.jsx("text",{x:"100",y:"115",fill:"#f59e0b",fontSize:"11",children:"extends"}),e.jsxs("g",{transform:"translate(0, 140)",children:[e.jsx("rect",{x:"0",y:"0",width:"260",height:"100",rx:"10",fill:"#0f172a",className:"dark:fill-gray-900 fill-gray-100",stroke:"#f97316",strokeWidth:"2"}),e.jsx("text",{x:"130",y:"25",textAnchor:"middle",fill:"#fdba74",fontSize:"13",fontWeight:"bold",children:"Contractor"}),e.jsx("line",{x1:"10",y1:"38",x2:"250",y2:"38",stroke:"#f97316",strokeWidth:"1"}),e.jsx("text",{x:"15",y:"55",fill:"#cbd5e1",fontSize:"11",children:"- hourlyRate: double"}),e.jsx("text",{x:"15",y:"70",fill:"#cbd5e1",fontSize:"11",children:"- hours: int"}),e.jsxs("text",{x:"15",y:"85",fill:"#cbd5e1",fontSize:"11",children:["+ calculateSalary(): double ","{"]}),e.jsx("text",{x:"25",y:"98",fill:"#9ca3af",fontSize:"10",children:"return hourlyRate * hours;"}),e.jsx("text",{x:"15",y:"111",fill:"#cbd5e1",fontSize:"11",children:"}"})]}),e.jsx("line",{x1:"620",y1:"90",x2:"620",y2:"130",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrowOrange)"}),e.jsx("text",{x:"630",y:"115",fill:"#f59e0b",fontSize:"11",children:"extends"}),e.jsxs("g",{transform:"translate(480, 140)",children:[e.jsx("rect",{x:"0",y:"0",width:"260",height:"100",rx:"10",fill:"#0f172a",className:"dark:fill-gray-900 fill-gray-100",stroke:"#8b5cf6",strokeWidth:"2"}),e.jsx("text",{x:"130",y:"25",textAnchor:"middle",fill:"#c4b5fd",fontSize:"13",fontWeight:"bold",children:"Intern"}),e.jsx("line",{x1:"10",y1:"38",x2:"250",y2:"38",stroke:"#8b5cf6",strokeWidth:"1"}),e.jsx("text",{x:"15",y:"55",fill:"#cbd5e1",fontSize:"11",children:"- stipend: double"}),e.jsxs("text",{x:"15",y:"70",fill:"#cbd5e1",fontSize:"11",children:["+ calculateSalary(): double ","{"]}),e.jsx("text",{x:"25",y:"85",fill:"#9ca3af",fontSize:"10",children:"return stipend;"}),e.jsx("text",{x:"15",y:"98",fill:"#cbd5e1",fontSize:"11",children:"}"})]})]}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowOrange",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#f59e0b"})})})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-center text-sm text-gray-600 dark:text-gray-400 mt-4",children:[e.jsxs("div",{className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all",children:["🏛️ ",e.jsx("span",{className:"font-medium",children:"Abstract Class"})," – Common blueprint"]}),e.jsxs("div",{className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all",children:["📦 ",e.jsx("span",{className:"font-medium",children:"Inheritance"})," – Reuse & extend"]}),e.jsxs("div",{className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-all",children:["🎯 ",e.jsx("span",{className:"font-medium",children:"Polymorphism"})," – Treat all uniformly"]})]})]}),e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-green-500 pl-4 mb-4",children:"Inheritance in Action"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"See how abstract classes enable powerful inheritance hierarchies:"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{fileModule:i,title:"InheritanceDemo.java",highlightLines:[4,5,6,9,10,11,14,15,16]}),e.jsx(t,{fileModule:o,title:"AbstractInheritanceChain.java",highlightLines:[4,5,6,10,11,12,16,17,18]}),e.jsx(t,{fileModule:l,title:"TemplateMethodPattern.java",highlightLines:[5,6,7,8,9,12,13,14,17,18]})]}),e.jsx("div",{className:"mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:e.jsxs("p",{className:"text-sm",children:["💡 ",e.jsx("strong",{children:"Observation:"})," Notice how the abstract class ",e.jsx("code",{children:"Employee"})," provides common fields and concrete methods (",e.jsx("code",{children:"getName()"}),", ",e.jsx("code",{children:"getId()"}),"), while abstract method ",e.jsx("code",{children:"calculateSalary()"})," is implemented differently by each subclass. This is the essence of inheritance with abstraction."]})})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeSlideUp",children:[e.jsxs("div",{className:"bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl p-5 border border-yellow-200 dark:border-yellow-800 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-semibold flex items-center gap-2",children:"💎 Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 mt-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:["Use abstract classes to define ",e.jsx("strong",{children:"common behavior"})," and ",e.jsx("strong",{children:"state"})," that multiple subclasses share."]}),e.jsxs("li",{children:["Place ",e.jsx("strong",{children:"template methods"})," (concrete methods that call abstract ones) in the abstract class to define algorithms."]}),e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"protected fields"})," in abstract classes when subclasses need direct access, otherwise keep them private with getters/setters."]}),e.jsxs("li",{children:["Consider the ",e.jsx("strong",{children:"depth of hierarchy"})," – too many levels can become hard to maintain."]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-5 border border-red-200 dark:border-red-800 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-semibold flex items-center gap-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 mt-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Overusing inheritance"}),' – not every relationship is "is-a". Composition is often better.']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Deep inheritance trees"})," – more than 3-4 levels make code hard to understand."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to call super()"})," – constructors in abstract classes must be explicitly called."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Modifying abstract class breaks all subclasses"})," – design abstract classes carefully as they are a strong contract."]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeSlideUp",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border-l-4 border-green-500",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"✅ Best Practices"}),e.jsxs("ul",{className:"space-y-2 mt-2 text-gray-700 dark:text-gray-300 list-disc list-inside",children:[e.jsxs("li",{children:["Keep abstract classes ",e.jsx("strong",{children:"focused"})," – one clear responsibility."]}),e.jsxs("li",{children:["Document the ",e.jsx("strong",{children:"intended usage"})," of abstract methods."]}),e.jsxs("li",{children:["Prefer ",e.jsx("strong",{children:"interfaces"})," for pure contracts, abstract classes for code reuse."]}),e.jsxs("li",{children:["Use meaningful names that reflect the abstraction (e.g., ",e.jsx("code",{children:"AbstractPaymentProcessor"}),")."]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border-l-4 border-blue-500",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"📋 Mini Checklist"}),e.jsxs("ul",{className:"space-y-2 mt-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:'✔️ Does the abstract class represent a genuine "is-a" relationship?'}),e.jsx("li",{children:"✔️ Are common fields and methods properly factored into the abstract class?"}),e.jsx("li",{children:"✔️ Do subclasses override all abstract methods?"}),e.jsx("li",{children:"✔️ Is the inheritance depth reasonable (≤ 3 levels)?"})]})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800/60 rounded-xl p-5 border-l-8 border-indigo-400 animate-fadeSlideUp",children:[e.jsx("h3",{className:"font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2",children:"🧠 Think about..."}),e.jsxs("p",{className:"italic text-gray-700 dark:text-gray-300 mt-1",children:["In the Employee example, why is ",e.jsx("code",{children:"calculateSalary()"})," abstract while ",e.jsx("code",{children:"getName()"})," is concrete? What would happen if we made ",e.jsx("code",{children:"getName()"})," abstract as well? Would that make sense?"]}),e.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:["Try adding a new subclass ",e.jsx("code",{children:"Manager"})," that extends ",e.jsx("code",{children:"FullTimeEmployee"}),". Does it need to implement ",e.jsx("code",{children:"calculateSalary()"})," again? Why or why not?"]})]}),e.jsx("div",{className:"animate-fadeSlideUp",children:e.jsx(s,{title:"Abstract Class in Inheritance - FAQs",questions:n})}),e.jsx("div",{className:"animate-fadeSlideUp mt-8",children:e.jsx(r,{note:"Emphasize the 'is-a' test: if a Student 'is-a' Person, inheritance makes sense. Abstract classes are perfect for 'partially defined' concepts like Shape, Employee, Animal. Use the analogy of a restaurant menu: abstract class = 'Appetizer' (common properties: price, name), concrete subclasses = 'SpringRolls', 'Soup' (specific preparation). Students should practice building small hierarchies with 1 abstract parent and 2-3 concrete children."})})]})]})};export{w as default};
