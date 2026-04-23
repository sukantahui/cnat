import{r as t,j as e}from"./index-29x6CIxg.js";import{J as n}from"./JavaFileLoader-D7AtwUFV.js";import{F as l}from"./FAQTemplate-Dzu6_Pg9.js";import{T as c}from"./TeacherSukantaHui-CkLTFTKX.js";import"./JavaCodeBlock-DXQeuhK6.js";import"./prism-D8qPEyTn.js";import"./browser-BhB_hP4n.js";import"./prism-java-BwO6k4I_.js";import"./clsx-B-dksMZM.js";import"./git-branch-Db0vt137.js";const d=`// EmployeeHierarchy.java - Single + Multilevel Inheritance\r
// Scenario: Barrackpore IT Solutions employee management\r
\r
class Employee {\r
    protected String name;\r
    protected int id;\r
    \r
    Employee(String name, int id) {\r
        this.name = name;\r
        this.id = id;\r
        System.out.println("Employee constructor: " + name);\r
    }\r
    \r
    void work() {\r
        System.out.println(name + " is working.");\r
    }\r
    \r
    double calculateSalary() {\r
        return 30000; // base salary\r
    }\r
    \r
    void displayInfo() {\r
        System.out.println("ID: " + id + ", Name: " + name);\r
    }\r
}\r
\r
class Manager extends Employee {\r
    private int teamSize;\r
    \r
    Manager(String name, int id, int teamSize) {\r
        super(name, id);\r
        this.teamSize = teamSize;\r
        System.out.println("Manager constructor: team size = " + teamSize);\r
    }\r
    \r
    @Override\r
    void work() {\r
        System.out.println(name + " is managing a team of " + teamSize);\r
    }\r
    \r
    @Override\r
    double calculateSalary() {\r
        return super.calculateSalary() + 20000; // bonus\r
    }\r
    \r
    void conductMeeting() {\r
        System.out.println(name + " is conducting a meeting.");\r
    }\r
}\r
\r
class Developer extends Employee {\r
    private String programmingLanguage;\r
    \r
    Developer(String name, int id, String language) {\r
        super(name, id);\r
        this.programmingLanguage = language;\r
    }\r
    \r
    @Override\r
    void work() {\r
        System.out.println(name + " is coding in " + programmingLanguage);\r
    }\r
    \r
    @Override\r
    double calculateSalary() {\r
        return super.calculateSalary() + 15000;\r
    }\r
}\r
\r
class Intern extends Employee {\r
    private int durationMonths;\r
    \r
    Intern(String name, int id, int months) {\r
        super(name, id);\r
        this.durationMonths = months;\r
    }\r
    \r
    @Override\r
    void work() {\r
        System.out.println(name + " is learning and assisting (internship).");\r
    }\r
    \r
    @Override\r
    double calculateSalary() {\r
        return 15000; // fixed stipend\r
    }\r
}\r
\r
public class EmployeeHierarchy {\r
    public static void main(String[] args) {\r
        // Polymorphic array\r
        Employee[] employees = {\r
            new Manager("Swadeep", 101, 5),\r
            new Developer("Tuhina", 102, "Java"),\r
            new Intern("Abhronila", 103, 6)\r
        };\r
        \r
        System.out.println("\\n--- Work & Salary Report ---");\r
        for (Employee emp : employees) {\r
            emp.work();\r
            System.out.println("Salary: ₹" + emp.calculateSalary());\r
            emp.displayInfo();\r
            System.out.println();\r
        }\r
        \r
        // Downcasting example\r
        if (employees[0] instanceof Manager) {\r
            Manager mgr = (Manager) employees[0];\r
            mgr.conductMeeting();\r
        }\r
    }\r
}`,h=`// ShapeHierarchy.java - Hierarchical Inheritance with Abstract Class\r
// Real-world: Geometry calculator for Ichapur school project\r
\r
abstract class Shape {\r
    protected String color;\r
    \r
    Shape(String color) {\r
        this.color = color;\r
        System.out.println("Shape constructor: color = " + color);\r
    }\r
    \r
    abstract double area();\r
    abstract double perimeter();\r
    \r
    void displayColor() {\r
        System.out.println("Color: " + color);\r
    }\r
}\r
\r
class Circle extends Shape {\r
    private double radius;\r
    \r
    Circle(String color, double radius) {\r
        super(color);\r
        this.radius = radius;\r
    }\r
    \r
    @Override\r
    double area() {\r
        return Math.PI * radius * radius;\r
    }\r
    \r
    @Override\r
    double perimeter() {\r
        return 2 * Math.PI * radius;\r
    }\r
}\r
\r
class Rectangle extends Shape {\r
    private double length, width;\r
    \r
    Rectangle(String color, double length, double width) {\r
        super(color);\r
        this.length = length;\r
        this.width = width;\r
    }\r
    \r
    @Override\r
    double area() {\r
        return length * width;\r
    }\r
    \r
    @Override\r
    double perimeter() {\r
        return 2 * (length + width);\r
    }\r
}\r
\r
class Triangle extends Shape {\r
    private double side1, side2, side3;\r
    \r
    Triangle(String color, double s1, double s2, double s3) {\r
        super(color);\r
        this.side1 = s1;\r
        this.side2 = s2;\r
        this.side3 = s3;\r
    }\r
    \r
    @Override\r
    double area() {\r
        // Heron's formula\r
        double s = (side1 + side2 + side3) / 2;\r
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));\r
    }\r
    \r
    @Override\r
    double perimeter() {\r
        return side1 + side2 + side3;\r
    }\r
}\r
\r
public class ShapeHierarchy {\r
    public static void main(String[] args) {\r
        Shape[] shapes = {\r
            new Circle("Red", 5.0),\r
            new Rectangle("Blue", 4.0, 6.0),\r
            new Triangle("Green", 3.0, 4.0, 5.0)\r
        };\r
        \r
        System.out.println("\\n--- Shape Area & Perimeter ---");\r
        for (Shape s : shapes) {\r
            s.displayColor();\r
            System.out.printf("Area: %.2f\\n", s.area());\r
            System.out.printf("Perimeter: %.2f\\n\\n", s.perimeter());\r
        }\r
    }\r
}`,m=`// VehiclePolymorphism.java - Dynamic Dispatch & Method Overriding\r
// Story: Debangshu's garage in Shyamnagar\r
\r
class Vehicle {\r
    protected String brand;\r
    \r
    Vehicle(String brand) {\r
        this.brand = brand;\r
    }\r
    \r
    void start() {\r
        System.out.println(brand + " vehicle is starting.");\r
    }\r
    \r
    void stop() {\r
        System.out.println(brand + " vehicle is stopping.");\r
    }\r
}\r
\r
class Car extends Vehicle {\r
    private int numberOfDoors;\r
    \r
    Car(String brand, int doors) {\r
        super(brand);\r
        this.numberOfDoors = doors;\r
    }\r
    \r
    @Override\r
    void start() {\r
        System.out.println(brand + " car starts with ignition key.");\r
    }\r
    \r
    void openSunroof() {\r
        System.out.println(brand + " sunroof opened.");\r
    }\r
}\r
\r
class Bike extends Vehicle {\r
    private boolean hasGear;\r
    \r
    Bike(String brand, boolean gear) {\r
        super(brand);\r
        this.hasGear = gear;\r
    }\r
    \r
    @Override\r
    void start() {\r
        System.out.println(brand + " bike starts with kick or self-start.");\r
    }\r
    \r
    void wheelie() {\r
        System.out.println(brand + " bike does a wheelie!");\r
    }\r
}\r
\r
class ElectricCar extends Car {\r
    private int batteryCapacity;\r
    \r
    ElectricCar(String brand, int doors, int battery) {\r
        super(brand, doors);\r
        this.batteryCapacity = battery;\r
    }\r
    \r
    @Override\r
    void start() {\r
        System.out.println(brand + " electric car starts silently.");\r
    }\r
    \r
    void charge() {\r
        System.out.println(brand + " is charging with " + batteryCapacity + "kWh battery.");\r
    }\r
}\r
\r
public class VehiclePolymorphism {\r
    public static void main(String[] args) {\r
        Vehicle v1 = new Car("Toyota", 4);\r
        Vehicle v2 = new Bike("Yamaha", true);\r
        Vehicle v3 = new ElectricCar("Tesla", 4, 75);\r
        \r
        Vehicle[] fleet = {v1, v2, v3};\r
        \r
        System.out.println("--- Starting all vehicles ---");\r
        for (Vehicle v : fleet) {\r
            v.start();   // dynamic dispatch in action!\r
        }\r
        \r
        System.out.println("\\n--- Stopping all vehicles ---");\r
        for (Vehicle v : fleet) {\r
            v.stop();\r
        }\r
        \r
        // Accessing subclass-specific methods requires downcasting\r
        if (v3 instanceof ElectricCar) {\r
            ((ElectricCar) v3).charge();\r
        }\r
    }\r
}`,p=`// BankInheritance.java - Real-world banking system with inheritance\r
// Locations: Naihati, Barrackpore branches\r
\r
class BankAccount {\r
    protected String accountHolder;\r
    protected double balance;\r
    \r
    BankAccount(String holder, double initialBalance) {\r
        this.accountHolder = holder;\r
        this.balance = initialBalance;\r
        System.out.println("Account created for " + holder);\r
    }\r
    \r
    void deposit(double amount) {\r
        balance += amount;\r
        System.out.println("Deposited ₹" + amount + ". New balance: ₹" + balance);\r
    }\r
    \r
    void withdraw(double amount) {\r
        if (amount <= balance) {\r
            balance -= amount;\r
            System.out.println("Withdrew ₹" + amount + ". Remaining: ₹" + balance);\r
        } else {\r
            System.out.println("Insufficient balance!");\r
        }\r
    }\r
    \r
    void displayBalance() {\r
        System.out.println(accountHolder + " balance: ₹" + balance);\r
    }\r
}\r
\r
class SavingsAccount extends BankAccount {\r
    private double interestRate;\r
    \r
    SavingsAccount(String holder, double initial, double rate) {\r
        super(holder, initial);\r
        this.interestRate = rate;\r
    }\r
    \r
    void addInterest() {\r
        double interest = balance * interestRate / 100;\r
        balance += interest;\r
        System.out.println("Interest ₹" + interest + " added. New balance: ₹" + balance);\r
    }\r
    \r
    @Override\r
    void withdraw(double amount) {\r
        if (balance - amount >= 1000) { // minimum balance requirement\r
            super.withdraw(amount);\r
        } else {\r
            System.out.println("Cannot withdraw: minimum balance ₹1000 required.");\r
        }\r
    }\r
}\r
\r
class CurrentAccount extends BankAccount {\r
    private double overdraftLimit;\r
    \r
    CurrentAccount(String holder, double initial, double limit) {\r
        super(holder, initial);\r
        this.overdraftLimit = limit;\r
    }\r
    \r
    @Override\r
    void withdraw(double amount) {\r
        if (amount <= balance + overdraftLimit) {\r
            balance -= amount;\r
            System.out.println("Withdrew ₹" + amount + " (overdraft allowed). New balance: ₹" + balance);\r
        } else {\r
            System.out.println("Overdraft limit exceeded!");\r
        }\r
    }\r
}\r
\r
public class BankInheritance {\r
    public static void main(String[] args) {\r
        BankAccount acc1 = new SavingsAccount("Tuhina", 5000, 4.5);\r
        BankAccount acc2 = new CurrentAccount("Swadeep", 10000, 5000);\r
        \r
        acc1.deposit(2000);\r
        ((SavingsAccount) acc1).addInterest();\r
        acc1.withdraw(6000);  // Savings restriction applies\r
        \r
        acc2.withdraw(12000); // Uses overdraft\r
        acc2.withdraw(5000);  // Should exceed limit\r
        \r
        acc1.displayBalance();\r
        acc2.displayBalance();\r
    }\r
}`,u=[{question:"In the EmployeeHierarchy program, why does Manager's work() method print a different message than Employee's work()?",shortAnswer:"Because Manager overrides work() and dynamic dispatch calls the overridden version.",explanation:"Even though the reference is Employee, the actual object is Manager, so Manager's work() runs.",hint:"Think about the array type vs the object stored.",level:"intermediate",codeExample:"Employee e = new Manager(...); e.work(); // Manager's work()"},{question:"What would happen if we removed the @Override annotation from Manager's calculateSalary() but kept the method signature the same?",shortAnswer:"It would still override correctly; @Override is optional but recommended for safety.",explanation:"The annotation just tells the compiler to check – it doesn't change runtime behavior.",hint:"@Override is a safety net, not a requirement.",level:"basic",codeExample:"// Works without @Override, but risky"},{question:"In ShapeHierarchy, why is Shape declared abstract?",shortAnswer:"Because we cannot have a generic Shape object – area() and perimeter() don't make sense without a specific shape.",explanation:"Abstract classes prevent instantiation and force subclasses to provide implementations.",hint:"What would Shape.area() return?",level:"basic",codeExample:'Shape s = new Shape("red"); // ERROR – Shape is abstract'},{question:"What is the output when we call start() on the ElectricCar object through a Vehicle reference in VehiclePolymorphism?",shortAnswer:"It prints 'Tesla electric car starts silently.'",explanation:"Dynamic dispatch finds the most specific override (ElectricCar's start()).",hint:"The actual object is ElectricCar, even though reference is Vehicle.",level:"intermediate",codeExample:"Output: Tesla electric car starts silently."},{question:"In BankInheritance, why does SavingsAccount's withdraw() method call super.withdraw(amount)?",shortAnswer:"To reuse the parent's withdrawal logic after checking the minimum balance condition.",explanation:"This is an example of extending behavior – add a new rule, then delegate to parent.",hint:"Don't rewrite the same logic; reuse it.",level:"advanced",codeExample:"if (balance - amount >= 1000) { super.withdraw(amount); }"},{question:"What is the purpose of the displayInfo() method in EmployeeHierarchy?",shortAnswer:"To show common information (ID and name) for all employees without repeating code.",explanation:"Inheritance promotes code reuse – the parent method is inherited and can be used by all subclasses.",hint:"No need to write displayInfo() in each subclass.",level:"basic",codeExample:"emp.displayInfo(); // works for Manager, Developer, Intern"},{question:"How would you modify ShapeHierarchy to add a new shape, say Square, without changing existing code?",shortAnswer:"Create a Square class that extends Shape and implements area() and perimeter().",explanation:"The existing array and loop will work automatically because of polymorphism.",hint:"Open/Closed Principle – open for extension, closed for modification.",level:"intermediate",codeExample:"class Square extends Shape { ... }"},{question:"In VehiclePolymorphism, why can't we call openSunroof() on a Vehicle reference that points to a Car object?",shortAnswer:"Because the compiler only knows the reference type (Vehicle), which doesn't have openSunroof().",explanation:"To call subclass-specific methods, you must downcast.",hint:"Reference type determines which methods are visible.",level:"basic",codeExample:"((Car) v1).openSunroof(); // explicit cast"},{question:"What is the output of the EmployeeHierarchy main method?",shortAnswer:"It prints work messages and salaries for Manager, Developer, Intern, each according to their overridden methods.",explanation:"The array loop demonstrates polymorphism – each employee's own work() and calculateSalary() are called.",hint:"Look at the @Override annotations to see which methods are specialized.",level:"intermediate",codeExample:"Manager: managing team of 5, Salary: ₹50000, etc."},{question:"In BankInheritance, what happens if a SavingsAccount tries to withdraw below the minimum balance?",shortAnswer:"It prints 'Cannot withdraw: minimum balance ₹1000 required.' and does not change the balance.",explanation:"The overridden withdraw() checks the condition first and only calls super.withdraw() if satisfied.",hint:"The condition prevents the withdrawal.",level:"basic",codeExample:"Output: Cannot withdraw: minimum balance ₹1000 required."},{question:"Why does the ShapeHierarchy use an abstract method instead of a default implementation?",shortAnswer:"Because there is no reasonable default for area() – each shape calculates differently.",explanation:"Abstract methods force subclasses to provide specific implementations, preventing incomplete subclasses.",hint:"What would a generic Shape's area be?",level:"basic",codeExample:"abstract double area(); // no body"},{question:"In EmployeeHierarchy, what is the purpose of the super(name, id) call in Manager's constructor?",shortAnswer:"To initialize the inherited fields (name and id) from Employee.",explanation:"The subclass constructor must call the superclass constructor first to set up the parent part of the object.",hint:"Superclass fields are private? Actually protected, but still need initialization.",level:"basic",codeExample:"super(name, id); // calls Employee(name, id)"},{question:"What would happen if we tried to instantiate Shape in ShapeHierarchy?",shortAnswer:"Compilation error: 'Shape is abstract; cannot be instantiated'.",explanation:"Abstract classes cannot be instantiated directly – they are incomplete.",hint:'Try it: new Shape("red");',level:"basic",codeExample:"// error: Shape is abstract"},{question:"In VehiclePolymorphism, why is the ElectricCar class useful even though it adds only one new method?",shortAnswer:"It demonstrates multilevel inheritance and specialized behavior (silent start, charging).",explanation:"Inheritance allows gradual specialization without modifying existing code.",hint:"It extends Car, which already extends Vehicle.",level:"intermediate",codeExample:"ElectricCar is a Car, which is a Vehicle."},{question:"How would you modify BankInheritance to add a new account type, FixedDepositAccount, with a lock-in period?",shortAnswer:"Extend BankAccount, add a tenure field, and override withdraw() to prevent withdrawal before maturity.",explanation:"Use inheritance to add new behavior while reusing deposit() and displayBalance().",hint:"Override withdraw() to check maturity date.",level:"advanced",codeExample:"class FixedDepositAccount extends BankAccount { ... }"},{question:"What is the advantage of using an array of Employee (superclass) instead of separate arrays for Manager, Developer, etc.?",shortAnswer:"Uniform processing – you can loop through all employees and call common methods without knowing the exact type.",explanation:"Polymorphism allows you to treat different subclasses uniformly.",hint:"Less code duplication, more flexibility.",level:"basic",codeExample:"for(Employee e : employees) { e.work(); }"},{question:"In ShapeHierarchy, why is the color field stored in Shape instead of each subclass?",shortAnswer:"Because all shapes have a color – it's common property, so it's inherited.",explanation:"Inheritance promotes code reuse by pulling common fields/methods up the hierarchy.",hint:"DRY (Don't Repeat Yourself) principle.",level:"basic",codeExample:"protected String color; // defined once"},{question:"What is the output if we call start() on a Bike object through a Vehicle reference?",shortAnswer:"The Bike's start() method runs (dynamic dispatch).",explanation:"The JVM looks at the actual object (Bike) and calls its version.",hint:"Actual object type wins.",level:"basic",codeExample:`Vehicle v = new Bike("Yamaha", true); v.start(); // Bike's start`},{question:"In EmployeeHierarchy, what is the difference between Manager's work() and conductMeeting()?",shortAnswer:"work() is overridden from Employee and called polymorphically; conductMeeting() is specific to Manager and requires downcasting.",explanation:"Only overridden methods participate in dynamic dispatch. Subclass-specific methods need explicit casting.",hint:"Which method is in the superclass?",level:"intermediate",codeExample:"((Manager) emp).conductMeeting();"},{question:"Why does BankAccount have a constructor even though it's not abstract?",shortAnswer:"To initialize accountHolder and balance when a new account is created (for both Savings and Current).",explanation:"Constructors are used to set up object state, even for non-abstract classes.",hint:"Subclasses call super(holder, initial).",level:"basic",codeExample:"BankAccount(String holder, double balance) { ... }"},{question:"What is the purpose of the displayColor() method in Shape?",shortAnswer:"To demonstrate that a concrete method can be inherited and used by all subclasses without overriding.",explanation:"Not all methods need to be abstract; some can provide common functionality.",hint:"It's not overridden in any subclass.",level:"basic",codeExample:"s.displayColor(); // works for all shapes"},{question:"In VehiclePolymorphism, what would happen if we removed the @Override from Car's start() but kept the method?",shortAnswer:"It would still override correctly, but the compiler wouldn't check that you meant to override.",explanation:"@Override is optional but highly recommended to catch typos.",hint:"If you misspelled 'start' as 'starts', without @Override you'd have a new method, not an override.",level:"intermediate",codeExample:"// safer with @Override"},{question:"How does dynamic dispatch work in the Employee array loop?",shortAnswer:"For each element, the JVM calls the actual object's version of work() and calculateSalary().",explanation:"The compiler sees Employee methods, but the runtime uses the object's vtable.",hint:"It's the same mechanism as single reference examples.",level:"advanced",codeExample:"emp.work(); // polymorphic call"},{question:"In BankInheritance, why does SavingsAccount not override deposit()?",shortAnswer:"Because the parent's deposit() works fine – no special behavior needed.",explanation:"Override only when you need to change or extend behavior.",hint:"Don't override unnecessarily.",level:"basic",codeExample:"// deposit() is inherited as-is"},{question:"What is the output of the ShapeHierarchy main method?",shortAnswer:"It prints area and perimeter for Circle, Rectangle, Triangle with their colors.",explanation:"The abstract methods are implemented in each subclass, and the loop calls them polymorphically.",hint:"Run the code to see numeric values.",level:"basic",codeExample:"Area: 78.54, Perimeter: 31.42 (for circle)"},{question:"Why does ElectricCar need to call super(brand, doors) in its constructor?",shortAnswer:"Because Car's constructor requires brand and doors, and Car's constructor calls Vehicle's constructor.",explanation:"The chain of constructors must be maintained: ElectricCar → Car → Vehicle.",hint:"Every class must call its direct superclass constructor.",level:"intermediate",codeExample:"ElectricCar(...) { super(brand, doors); ... }"},{question:"In EmployeeHierarchy, what is the salary of an Intern?",shortAnswer:"₹15000 (stipend), as defined in Intern's calculateSalary().",explanation:"It overrides the parent's method to return a fixed amount.",hint:"The parent's calculateSalary() returns 30000, but Intern overrides.",level:"basic",codeExample:"return 15000;"},{question:"How would you add a new method to Shape that all shapes must implement, say 'void draw()'?",shortAnswer:"Add abstract void draw(); to the Shape class, then implement in Circle, Rectangle, Triangle.",explanation:"Adding an abstract method forces all existing subclasses to provide an implementation, or they become abstract too.",hint:"It's a contract change – all subclasses must adapt.",level:"advanced",codeExample:"abstract void draw();"},{question:"What is the benefit of using an abstract class (Shape) over an interface in this scenario?",shortAnswer:"Shape can hold state (color) and provide concrete methods (displayColor), which an interface cannot.",explanation:"Abstract classes are used when there is common code and state; interfaces are for pure contracts.",hint:"Interfaces cannot have instance fields (before Java 8+ defaults, still no state).",level:"expert",codeExample:"protected String color; // not possible in interface"},{question:"In VehiclePolymorphism, what happens if we call v3.charge() without downcasting?",shortAnswer:"Compilation error – Vehicle reference doesn't know about charge().",explanation:"The compiler only allows methods declared in the reference type.",hint:"You must cast: ((ElectricCar) v3).charge()",level:"basic",codeExample:"v3.charge(); // ERROR"}],E=()=>{const[r,a]=t.useState(!0);t.useEffect(()=>{r?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[r]);const i=()=>a(!r);return e.jsxs("div",{className:"bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsx("div",{className:"fixed top-4 right-4 z-50",children:e.jsx("button",{onClick:i,className:"p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-md","aria-label":"Toggle dark mode",children:r?"☀️":"🌙"})}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-12 space-y-16",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[slideUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"Practical Programs on Inheritance"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Putting theory into practice: real‑world inheritance hierarchies, code reusability, and polymorphic behaviour."})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-blue-500 pl-4",children:"Why Practical Programs Matter"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 animate-[slideUp_0.5s_ease-out]",children:[e.jsx("h3",{className:"text-xl font-bold text-blue-600 dark:text-blue-400",children:"Learning by Doing"}),e.jsxs("p",{className:"mt-2",children:["Writing complete programs that use inheritance forces you to think about",e.jsx("strong",{children:" “is‑a” relationships"}),", constructor chaining, method overriding, and dynamic dispatch – all working together."]}),e.jsxs("div",{className:"mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg",children:["🎯 ",e.jsx("strong",{children:"Goal:"})," Build reusable, extensible, and maintainable code like professional developers do."]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 animate-[slideUp_0.6s_ease-out]",children:[e.jsx("h3",{className:"text-xl font-bold text-purple-600 dark:text-purple-400",children:"Common Use Cases"}),e.jsxs("ul",{className:"list-disc pl-5 mt-2 space-y-1",children:[e.jsx("li",{children:"Employee management systems (Manager, Developer, Intern)"}),e.jsx("li",{children:"Geometric shapes (Circle, Rectangle, Triangle)"}),e.jsx("li",{children:"Vehicles (Car, Bike, Truck)"}),e.jsx("li",{children:"Bank accounts (Savings, Current, FixedDeposit)"}),e.jsx("li",{children:"UI components (Button, TextField, Checkbox)"})]})]})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800/50 p-6 rounded-2xl",children:[e.jsx("h3",{className:"text-2xl font-semibold text-center mb-6",children:"Program Flow: Employee Hierarchy"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"700",height:"300",viewBox:"0 0 700 300",className:"w-full max-w-3xl",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrowBlue",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#3b82f6"})})}),e.jsx("rect",{x:"280",y:"20",width:"140",height:"45",rx:"8",fill:"#1e3a8a",className:"dark:fill-blue-800"}),e.jsx("text",{x:"350",y:"48",textAnchor:"middle",fill:"white",fontSize:"14",children:"Employee"}),e.jsx("rect",{x:"80",y:"110",width:"130",height:"45",rx:"8",fill:"#047857",className:"dark:fill-green-800"}),e.jsx("text",{x:"145",y:"138",textAnchor:"middle",fill:"white",fontSize:"13",children:"Manager"}),e.jsx("rect",{x:"285",y:"110",width:"130",height:"45",rx:"8",fill:"#b45309",className:"dark:fill-orange-700"}),e.jsx("text",{x:"350",y:"138",textAnchor:"middle",fill:"white",fontSize:"13",children:"Developer"}),e.jsx("rect",{x:"490",y:"110",width:"130",height:"45",rx:"8",fill:"#6d28d9",className:"dark:fill-purple-800"}),e.jsx("text",{x:"555",y:"138",textAnchor:"middle",fill:"white",fontSize:"13",children:"Intern"}),e.jsx("line",{x1:"350",y1:"65",x2:"145",y2:"110",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrowBlue)"}),e.jsx("line",{x1:"350",y1:"65",x2:"350",y2:"110",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrowBlue)"}),e.jsx("line",{x1:"350",y1:"65",x2:"555",y2:"110",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrowBlue)"}),e.jsx("circle",{cx:"350",cy:"180",r:"15",fill:"#ef4444",children:e.jsx("animate",{attributeName:"r",values:"15;18;15",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"350",y:"185",textAnchor:"middle",fill:"white",fontSize:"12",children:"1"}),e.jsx("text",{x:"380",y:"185",fill:"#ef4444",children:"new Manager()"}),e.jsx("circle",{cx:"145",cy:"220",r:"15",fill:"#10b981",children:e.jsx("animate",{attributeName:"r",values:"15;18;15",dur:"1.5s",begin:"0.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"145",y:"225",textAnchor:"middle",fill:"white",fontSize:"12",children:"2"}),e.jsx("text",{x:"175",y:"225",fill:"#10b981",children:"super(name, id)"}),e.jsx("circle",{cx:"350",cy:"260",r:"15",fill:"#f59e0b",children:e.jsx("animate",{attributeName:"r",values:"15;18;15",dur:"1.5s",begin:"1s",repeatCount:"indefinite"})}),e.jsx("text",{x:"350",y:"265",textAnchor:"middle",fill:"white",fontSize:"12",children:"3"}),e.jsx("text",{x:"380",y:"265",fill:"#f59e0b",children:"work() → dynamic dispatch"})]})}),e.jsx("p",{className:"text-center text-gray-600 dark:text-gray-400 mt-4",children:"Each program demonstrates a different inheritance pattern and polymorphism in action."})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-green-500 pl-4",children:"Complete Java Programs"}),e.jsxs("div",{className:"grid gap-6",children:[e.jsx(n,{fileModule:d,title:"EmployeeHierarchy.java",highlightLines:[]}),e.jsx(n,{fileModule:h,title:"ShapeHierarchy.java",highlightLines:[]}),e.jsx(n,{fileModule:m,title:"VehiclePolymorphism.java",highlightLines:[]}),e.jsx(n,{fileModule:p,title:"BankInheritance.java",highlightLines:[]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-6 rounded-xl hover:shadow-lg transition-all",children:[e.jsx("h3",{className:"text-2xl font-bold text-red-600 dark:text-red-400",children:"⚠️ Common Pitfalls in Practical Programs"}),e.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-2",children:[e.jsx("li",{children:"Creating unnecessarily deep hierarchies when composition would be better."}),e.jsx("li",{children:"Forgetting to call super() in subclass constructors, causing hidden bugs."}),e.jsx("li",{children:"Overriding methods but not using @Override – typos lead to accidental overloading."}),e.jsx("li",{children:"Using inheritance for “has‑a” relationships instead of “is‑a”."}),e.jsx("li",{children:"Not designing for polymorphism – using concrete types everywhere."})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-6 rounded-xl hover:shadow-lg transition-all",children:[e.jsx("h3",{className:"text-2xl font-bold text-green-600 dark:text-green-400",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc pl-5 mt-3 space-y-2",children:[e.jsxs("li",{children:["Favor ",e.jsx("strong",{children:"composition over inheritance"})," when behavior can be shared without a strict “is‑a”."]}),e.jsx("li",{children:"Keep hierarchies shallow (max 3‑4 levels)."}),e.jsx("li",{children:"Use abstract classes or interfaces to define contracts."}),e.jsx("li",{children:"Write small, focused programs that test one inheritance concept at a time."}),e.jsxs("li",{children:["Always include a ",e.jsx("code",{children:"main()"})," method that demonstrates polymorphism."]})]})]})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-blue-700 dark:text-blue-300",children:"💡 Pro Tips & Hints"}),e.jsxs("p",{className:"mt-2",children:[e.jsx("strong",{children:"Think about:"})," In the Employee program, why does ",e.jsx("code",{children:"Manager"})," have a ",e.jsx("code",{children:"teamSize"})," but ",e.jsx("code",{children:"Intern"})," doesn’t?"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Observe carefully:"})," The ",e.jsx("code",{children:"calculateSalary()"})," method is overridden in each subclass – see how dynamic dispatch picks the right version when using an array of ",e.jsx("code",{children:"Employee"})," references."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Try changing:"})," Add a new subclass ",e.jsx("code",{children:"Freelancer"})," that extends ",e.jsx("code",{children:"Employee"}),". What methods must you implement? Does the existing array code work without changes?"]}),e.jsx("p",{className:"mt-3 italic",children:"Professional insight: Real projects often start with one concrete class and refactor into inheritance hierarchies when duplication appears – YAGNI (You Aren’t Gonna Need It) principle."})]}),e.jsxs("div",{className:"border-2 border-dashed border-gray-400 p-5 rounded-xl",children:[e.jsx("h3",{className:"text-2xl font-bold text-center",children:"📋 Student Checklist"}),e.jsx("div",{className:"grid grid-cols-2 gap-2 mt-4",children:["I can write a complete inheritance hierarchy with 3+ classes.","I use super() correctly in subclass constructors.","I override methods and use @Override annotation.","I can create an array of superclass references and call overridden methods.","I understand when to use inheritance vs composition.","I can debug common inheritance errors (missing super constructor, etc.)."].map((s,o)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-green-500",children:"✓"})," ",s]},o))})]}),e.jsx(c,{note:"Practical programming is where theory solidifies. Run these examples, modify them, break them, and fix them. Pay special attention to the constructor chain and how dynamic dispatch works with arrays. The best way to master inheritance is to write small programs from scratch – start with a simple Person → Student → GradStudent hierarchy and expand."}),e.jsx(l,{title:"Practical Inheritance Programs - FAQs",questions:u})]})]})};export{E as default};
