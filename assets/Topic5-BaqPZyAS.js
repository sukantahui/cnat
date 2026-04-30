import{r as a,j as e}from"./index-sRNy85CP.js";import{J as r}from"./JavaFileLoader-BTkr-Z89.js";import{T as n}from"./TeacherSukantaHui-BwdTrUd-.js";import{F as t}from"./FAQTemplate-Kigl36QQ.js";import"./JavaCodeBlock-S7Z7pBVM.js";import"./prism-CMh3e-_S.js";import"./browser-Cey3ecHY.js";import"./prism-java-BwO6k4I_.js";import"./git-branch-Al-7J7-z.js";import"./clsx-B-dksMZM.js";const s=[{question:"In the EmployeePayrollSystem, why is calculateSalary() abstract?",shortAnswer:"Because each employee type (FullTime, PartTime, Contractor) calculates salary differently.",explanation:"Abstraction allows the payroll system to treat all employees uniformly while each subclass implements its own salary logic.",hint:"Full-time gets salary + bonus, part-time gets hourly rate × hours, contractor gets project fee.",level:"basic",codeExample:`FullTimeEmployee: baseSalary + bonus/12
PartTimeEmployee: hourlyRate * hours
Contractor: projectFee`},{question:"What design pattern is demonstrated in the GameCharacter takeTurn() method?",shortAnswer:"Template Method pattern — takeTurn() is a final method that calls abstract methods attack() and specialAbility().",explanation:"The template defines the algorithm structure (check mana, use special or regular attack, regenerate mana) while subclasses implement the specific behaviors.",hint:"The method is marked 'final' to prevent subclasses from changing the turn structure.",level:"intermediate",codeExample:"final void takeTurn() { if (mana >= cost) specialAbility(); else attack(); regenerate(); }"},{question:"Why does the ShapeAreaCalculator use an abstract class instead of an interface?",shortAnswer:"Because shapes share common state (color) and concrete methods (displayInfo) that are identical across all shapes.",explanation:"Abstract classes allow instance variables and concrete methods, reducing code duplication. An interface would require each shape to reimplement displayInfo().",hint:"All shapes have a color and need to display info — that's shared code.",level:"intermediate",codeExample:"abstract class Shape { protected String color; public void displayInfo() { ... } }"},{question:"In BankingSystem, why does FixedDepositAccount override withdraw() with additional logic?",shortAnswer:"To enforce early withdrawal penalties and maturity rules specific to fixed deposits.",explanation:"The abstract class defines the contract, but each account type implements withdrawal according to its rules (minimum balance for savings, overdraft for current, penalty for FD).",hint:"FD accounts cannot withdraw before maturity without penalty.",level:"basic",codeExample:"if (!isMatured) { applyPenalty(); }"},{question:"How does SchoolManagementSystem demonstrate multiple levels of abstraction?",shortAnswer:"Person (abstract) → Employee (abstract) → Teacher/Staff (concrete). Also Person → Student (concrete).",explanation:"This hierarchy shows that abstraction can be multi-level. Person defines common human attributes, Employee adds work-related fields, and concrete classes add specific behaviors.",hint:"Each level adds more specificity.",level:"intermediate",codeExample:"Person → Employee → Teacher (3 levels)"},{question:"What would you add to EmployeePayrollSystem to support commission-based employees?",shortAnswer:"Create a CommissionEmployee subclass extending Employee, implement calculateSalary() as baseSalary + (sales * commissionRate).",explanation:"The abstract class makes it easy to add new employee types without modifying existing code (Open/Closed Principle).",hint:"Just extend Employee and implement the abstract method.",level:"intermediate",codeExample:"class CommissionEmployee extends Employee { double calculateSalary() { return baseSalary + sales * rate; } }"},{question:"Why is the takeTurn() method in GameCharacter marked final?",shortAnswer:"To prevent subclasses from changing the core game loop structure (mana check, attack/special, regeneration).",explanation:"The game designer wants every character to follow the same turn rules. Subclasses can only customize attack and special ability, not the turn flow.",hint:"Final methods cannot be overridden — ensures consistency.",level:"advanced",codeExample:"public final void takeTurn() { ... } // cannot be overridden"},{question:"In ShapeAreaCalculator, why is Square a subclass of Rectangle instead of directly extending Shape?",shortAnswer:"Because Square 'is-a' Rectangle (a square is a rectangle with equal sides), so it inherits area and perimeter logic.",explanation:"This demonstrates proper inheritance hierarchy. Square reuses Rectangle's area calculation (side × side) without rewriting code.",hint:"A square is a special case of rectangle.",level:"basic",codeExample:"class Square extends Rectangle { Square(double side) { super(side, side); } }"},{question:"How would you modify BankingSystem to add a LoanAccount type?",shortAnswer:"Create LoanAccount extending BankAccount, implement calculateInterest() as negative (interest owed), withdraw() as taking a loan, deposit() as repaying.",explanation:"The abstract class defines the interface. LoanAccount would have a negative balance and different interest calculation.",hint:"Think of a loan as an account with negative balance.",level:"advanced",codeExample:"class LoanAccount extends BankAccount { double calculateInterest() { return balance * 8/100; } }"},{question:"What is the benefit of the getBenefits() hook method in EmployeePayrollSystem?",shortAnswer:"It provides a default implementation but allows subclasses to override it for specific benefit descriptions.",explanation:"Hook methods give subclasses the option to customize behavior without forcing them to implement abstract methods.",hint:"Full-time employees have better benefits than contractors.",level:"intermediate",codeExample:'String getBenefits() { return "Standard benefits"; } // can override'},{question:"In SchoolManagementSystem, why is Employee abstract even though it has no abstract methods?",shortAnswer:"To prevent direct instantiation of Employee — you should only create Teacher or Staff, not a generic Employee.",explanation:"An abstract class without abstract methods still cannot be instantiated. This signals that Employee is meant to be a base class only.",hint:"You wouldn't hire a generic 'Employee' without a specific role.",level:"intermediate",codeExample:"abstract class Employee { } // cannot instantiate, only extend"},{question:"How does the ShapeAreaCalculator demonstrate polymorphism?",shortAnswer:"The ArrayList<Shape> holds different shapes, and calling area() on each executes the correct subclass implementation.",explanation:"Polymorphism allows the same method call (area()) to behave differently based on the actual object type (Circle, Rectangle, etc.).",hint:"One interface, many implementations.",level:"basic",codeExample:"for (Shape s : shapes) { System.out.println(s.area()); }"},{question:"What is the purpose of the regenerateMana() abstract method in GameCharacter?",shortAnswer:"Different character classes regenerate mana at different rates (Mage regenerates faster than Warrior).",explanation:"Abstract methods allow subclasses to customize even small behaviors like mana regeneration while maintaining the template structure.",hint:"Mages get +10 mana per turn, Warriors get +5.",level:"intermediate",codeExample:"Mage: mana += 10; Warrior: mana += 5;"},{question:"In EmployeePayrollSystem, why is baseSalary protected instead of private?",shortAnswer:"To allow subclasses to access it directly, but still keep it hidden from non-subclasses.",explanation:"Protected access is appropriate for abstract class fields that subclasses need. It balances encapsulation with accessibility.",hint:"Subclasses need to read baseSalary to calculate total salary.",level:"basic",codeExample:"protected double baseSalary; // accessible to subclasses"},{question:"How would you extend SchoolManagementSystem to include a Principal role?",shortAnswer:"Create Principal class extending Employee (or Teacher) with additional responsibilities like manageSchool() and higher salary calculation.",explanation:"Principal is a specialized employee. It could extend Teacher (since principals often come from teaching) or directly extend Employee.",hint:"A principal 'is-a' employee and may also 'is-a' teacher.",level:"intermediate",codeExample:"class Principal extends Teacher { double calculateMonthlySalary() { return super.calculateMonthlySalary() + 20000; } }"},{question:"What is the advantage of using abstract classes over concrete base classes in these examples?",shortAnswer:"Abstract classes prevent instantiation of incomplete types and can enforce implementation of key methods via abstract methods.",explanation:"You cannot accidentally create a generic 'Employee' object; you must create a specific type. Abstract methods force subclasses to provide critical behavior.",hint:"Makes the API safer — users must use concrete subclasses.",level:"intermediate",codeExample:`// Employee e = new Employee(); // ERROR — good!
Employee e = new FullTimeEmployee(); // OK`},{question:"In BankingSystem, how does polymorphism help with the interest calculation?",shortAnswer:"The bank can loop through all accounts and call calculateInterest() without knowing the account type.",explanation:"Each account type (Savings, Current, FD) calculates interest differently, but the bank's code remains simple and unified.",hint:"Savings: 4%, Current: 0.5%, FD: 7.5% — all via same method call.",level:"basic",codeExample:"for (BankAccount acc : accounts) { totalInterest += acc.calculateInterest(); }"},{question:"Why does FixedDepositAccount have a mature() method that's not in the abstract class?",shortAnswer:"Because maturity is a concept specific to fixed deposits, not applicable to savings or current accounts.",explanation:"Subclasses can add their own methods. The abstract class defines the minimum common interface, but subclasses can extend it.",hint:"Not all bank accounts mature — only FDs.",level:"intermediate",codeExample:"fd.mature(); // specific to FixedDepositAccount"},{question:"In GameCharacter, what would happen if a subclass overrode takeTurn()?",shortAnswer:"It can't because takeTurn() is marked final. This enforces that all characters follow the same turn rules.",explanation:"The final keyword prevents overriding. This is crucial for template methods to maintain algorithm integrity.",hint:"The game designer doesn't want characters to skip mana checks or regeneration.",level:"advanced",codeExample:"// Cannot override — compile error"},{question:"How does the ShapeAreaCalculator support the Open/Closed Principle?",shortAnswer:"You can add new shapes (Triangle, Pentagon) without modifying existing shape processing code.",explanation:"The system is open for extension (new shapes) but closed for modification (the code that processes shapes doesn't change).",hint:"Just create a new class extending Shape — no need to change the existing loop.",level:"advanced",codeExample:"class Pentagon extends Shape { // new shape, no changes to existing code }"},{question:"In SchoolManagementSystem, why is Person abstract even though it has no abstract methods?",shortAnswer:"To prevent instantiation of a generic Person — a person must be either a Student or an Employee.",explanation:"The abstract keyword signals that this class is incomplete conceptually. You shouldn't create a Person object directly.",hint:"What would a generic 'Person' do? It's too vague.",level:"basic",codeExample:"// Person p = new Person(); // ERROR — intentional"},{question:"How would you add logging to all bank account transactions without changing each subclass?",shortAnswer:"Add logging to the concrete methods in the abstract BankAccount class (deposit, withdraw) since they are called by all subclasses.",explanation:"Concrete methods in abstract classes are inherited and can be used to add cross-cutting concerns like logging, validation, or notifications.",hint:"Put it in the base class once, benefit everywhere.",level:"advanced",codeExample:'public void deposit(double amount) { log("Deposit: " + amount); balance += amount; }'},{question:"What is the difference between the 'hook' method (getBenefits) and abstract method in EmployeePayrollSystem?",shortAnswer:"Hook methods have a default implementation (optional override); abstract methods have no default and must be overridden.",explanation:"Hooks provide sensible defaults but allow customization. Abstract methods force customization.",hint:"You can choose to override a hook; you MUST override an abstract method.",level:"intermediate",codeExample:`String getBenefits() { return "Standard"; } // hook
abstract double calculateSalary(); // must override`},{question:"In GameCharacter, why is the Random object protected?",shortAnswer:"To allow subclasses to use the same random instance for their own calculations if needed.",explanation:"Making it protected gives subclasses access without creating their own Random instances, promoting reuse.",hint:"Subclasses might need random numbers for critical hits or dodge chances.",level:"basic",codeExample:"protected Random random = new Random(); // shared with subclasses"},{question:"How would you implement a Transfer method between bank accounts?",shortAnswer:"Add a transfer method in BankAccount that calls withdraw() on this account and deposit() on the target account.",explanation:"Since withdraw and deposit are defined in the abstract class, transfer works polymorphically for any account types.",hint:"Use the existing abstract methods to implement higher-level operations.",level:"advanced",codeExample:"public void transfer(BankAccount target, double amount) { this.withdraw(amount); target.deposit(amount); }"},{question:"Why does the ShapeAreaCalculator use String.format for displaying area/perimeter?",shortAnswer:"To round decimal places for cleaner output (not all areas are neat integers).",explanation:"This is a presentation concern, not part of the abstraction. It makes the output classroom-friendly.",hint:"Circle area = πr² might be 78.539816... better to show 78.54.",level:"basic",codeExample:'String.format("%.2f", area()) // shows 2 decimal places'},{question:"In SchoolManagementSystem, how does the calculateTotalSalaryExpense() method use polymorphism?",shortAnswer:"It checks if each Person is an instance of Employee using instanceof, then safely casts and calls calculateMonthlySalary().",explanation:"The method needs to handle both Employees and Students. instanceof allows type-safe downcasting to access employee-specific methods.",hint:"Students don't have salaries, so we need to distinguish them.",level:"intermediate",codeExample:"if (p instanceof Employee) { total += ((Employee)p).calculateMonthlySalary(); }"},{question:"What is the purpose of the static nextAccountNumber field in BankAccount?",shortAnswer:"To automatically generate unique account numbers for each new account.",explanation:"Static fields are shared across all instances. Each constructor increments it, giving each account a unique ID.",hint:"All accounts share the same counter.",level:"basic",codeExample:"private static int nextAccountNumber = 1001; // increments for each new account"},{question:"How would you modify GameCharacter to support equipment (weapons, armor)?",shortAnswer:"Add protected fields for equipment and abstract methods like calculateDamage() that equipment can modify, called from attack().",explanation:"Equipment is common to all characters but affects them differently. Abstract methods allow each class to apply equipment bonuses uniquely.",hint:"A Warrior with a sword vs a Mage with a staff — same equipment slot, different effect.",level:"expert",codeExample:"abstract int calculateDamage(); // equipment modifies this"},{question:"What is the key lesson from these five practical programs?",shortAnswer:"Abstract classes enable code reuse, enforce contracts, and support polymorphism, leading to maintainable, extensible systems.",explanation:"Each program demonstrates a different real-world scenario where abstraction solves real problems: payroll, geometry, gaming, banking, education.",hint:"Look for the common patterns: shared fields, template methods, and forced implementations.",level:"advanced",codeExample:"// All five follow the same pattern: abstract base → concrete implementations"}],i=`// EmployeePayrollSystem.java\r
// A complete payroll system demonstrating abstract class usage\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
// Abstract base class\r
abstract class Employee {\r
    protected String name;\r
    protected int id;\r
    protected double baseSalary;\r
    \r
    public Employee(String name, int id, double baseSalary) {\r
        this.name = name;\r
        this.id = id;\r
        this.baseSalary = baseSalary;\r
    }\r
    \r
    // Concrete method - common for all employees\r
    public void displayInfo() {\r
        System.out.println("ID: " + id + " | Name: " + name);\r
        System.out.println("Base Salary: $" + baseSalary);\r
        System.out.println("Total Salary: $" + calculateSalary());\r
    }\r
    \r
    // Abstract method - each employee type calculates differently\r
    public abstract double calculateSalary();\r
    \r
    // Hook method - optional override\r
    public String getBenefits() {\r
        return "Standard benefits";\r
    }\r
}\r
\r
// Full-time employee: base salary + annual bonus/12 + benefits\r
class FullTimeEmployee extends Employee {\r
    private double annualBonus;\r
    \r
    public FullTimeEmployee(String name, int id, double baseSalary, double annualBonus) {\r
        super(name, id, baseSalary);\r
        this.annualBonus = annualBonus;\r
    }\r
    \r
    @Override\r
    public double calculateSalary() {\r
        return baseSalary + (annualBonus / 12);\r
    }\r
    \r
    @Override\r
    public String getBenefits() {\r
        return "Health insurance, 401k, Paid time off";\r
    }\r
}\r
\r
// Part-time employee: hourly rate * hours worked\r
class PartTimeEmployee extends Employee {\r
    private double hourlyRate;\r
    private int hoursWorked;\r
    \r
    public PartTimeEmployee(String name, int id, double hourlyRate, int hoursWorked) {\r
        super(name, id, 0); // baseSalary not used for part-time\r
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
    public String getBenefits() {\r
        return "Limited benefits (no health insurance)";\r
    }\r
}\r
\r
// Contractor: project-based payment\r
class Contractor extends Employee {\r
    private double projectFee;\r
    \r
    public Contractor(String name, int id, double projectFee) {\r
        super(name, id, 0);\r
        this.projectFee = projectFee;\r
    }\r
    \r
    @Override\r
    public double calculateSalary() {\r
        return projectFee;\r
    }\r
    \r
    @Override\r
    public String getBenefits() {\r
        return "No benefits (independent contractor)";\r
    }\r
}\r
\r
// Intern: fixed stipend\r
class Intern extends Employee {\r
    private double stipend;\r
    \r
    public Intern(String name, int id, double stipend) {\r
        super(name, id, 0);\r
        this.stipend = stipend;\r
    }\r
    \r
    @Override\r
    public double calculateSalary() {\r
        return stipend;\r
    }\r
    \r
    @Override\r
    public String getBenefits() {\r
        return "Internship experience, possible conversion";\r
    }\r
}\r
\r
// Payroll processor class\r
class PayrollSystem {\r
    private List<Employee> employees = new ArrayList<>();\r
    \r
    public void addEmployee(Employee e) {\r
        employees.add(e);\r
    }\r
    \r
    public void processPayroll() {\r
        System.out.println("\\n=== PAYROLL REPORT ===");\r
        double totalPayroll = 0;\r
        \r
        for (Employee e : employees) {\r
            e.displayInfo();\r
            System.out.println("Benefits: " + e.getBenefits());\r
            System.out.println("------------------------");\r
            totalPayroll += e.calculateSalary();\r
        }\r
        \r
        System.out.println("TOTAL MONTHLY PAYROLL: $" + totalPayroll);\r
    }\r
}\r
\r
public class EmployeePayrollSystem {\r
    public static void main(String[] args) {\r
        PayrollSystem payroll = new PayrollSystem();\r
        \r
        // Adding different employee types\r
        payroll.addEmployee(new FullTimeEmployee("Swadeep", 101, 5000, 12000));\r
        payroll.addEmployee(new PartTimeEmployee("Tuhina", 102, 25, 80));\r
        payroll.addEmployee(new Contractor("Abhronila", 103, 4500));\r
        payroll.addEmployee(new Intern("Debangshu", 104, 1200));\r
        \r
        payroll.processPayroll();\r
        \r
        System.out.println("\\n=== DEMONSTRATING POLYMORPHISM ===");\r
        // Polymorphic array\r
        Employee[] team = {\r
            new FullTimeEmployee("Alice", 201, 6000, 15000),\r
            new PartTimeEmployee("Bob", 202, 30, 60)\r
        };\r
        \r
        for (Employee e : team) {\r
            System.out.println(e.name + " earns $" + e.calculateSalary());\r
        }\r
    }\r
}`,o=`// ShapeAreaCalculator.java\r
// Geometric shape system for CAD/GIS applications\r
\r
import java.util.ArrayList;\r
\r
// Abstract shape class\r
abstract class Shape {\r
    protected String color;\r
    \r
    public Shape(String color) {\r
        this.color = color;\r
    }\r
    \r
    // Abstract methods - must be implemented by all shapes\r
    public abstract double area();\r
    public abstract double perimeter();\r
    \r
    // Concrete method - common for all shapes\r
    public void displayInfo() {\r
        System.out.println("Shape: " + this.getClass().getSimpleName());\r
        System.out.println("Color: " + color);\r
        System.out.println("Area: " + String.format("%.2f", area()));\r
        System.out.println("Perimeter: " + String.format("%.2f", perimeter()));\r
    }\r
    \r
    public String getColor() { return color; }\r
    public void setColor(String color) { this.color = color; }\r
}\r
\r
// Circle implementation\r
class Circle extends Shape {\r
    private double radius;\r
    \r
    public Circle(String color, double radius) {\r
        super(color);\r
        this.radius = radius;\r
    }\r
    \r
    @Override\r
    public double area() {\r
        return Math.PI * radius * radius;\r
    }\r
    \r
    @Override\r
    public double perimeter() {\r
        return 2 * Math.PI * radius;\r
    }\r
    \r
    public double getRadius() { return radius; }\r
    public void setRadius(double radius) { this.radius = radius; }\r
}\r
\r
// Rectangle implementation\r
class Rectangle extends Shape {\r
    private double width;\r
    private double height;\r
    \r
    public Rectangle(String color, double width, double height) {\r
        super(color);\r
        this.width = width;\r
        this.height = height;\r
    }\r
    \r
    @Override\r
    public double area() {\r
        return width * height;\r
    }\r
    \r
    @Override\r
    public double perimeter() {\r
        return 2 * (width + height);\r
    }\r
}\r
\r
// Triangle implementation\r
class Triangle extends Shape {\r
    private double sideA, sideB, sideC;\r
    \r
    public Triangle(String color, double sideA, double sideB, double sideC) {\r
        super(color);\r
        this.sideA = sideA;\r
        this.sideB = sideB;\r
        this.sideC = sideC;\r
    }\r
    \r
    @Override\r
    public double area() {\r
        // Heron's formula\r
        double s = (sideA + sideB + sideC) / 2;\r
        return Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));\r
    }\r
    \r
    @Override\r
    public double perimeter() {\r
        return sideA + sideB + sideC;\r
    }\r
}\r
\r
// Square (special rectangle)\r
class Square extends Rectangle {\r
    public Square(String color, double side) {\r
        super(color, side, side);\r
    }\r
    \r
    @Override\r
    public void displayInfo() {\r
        System.out.println("Shape: Square");\r
        System.out.println("Color: " + getColor());\r
        System.out.println("Area: " + String.format("%.2f", area()));\r
        System.out.println("Perimeter: " + String.format("%.2f", perimeter()));\r
    }\r
}\r
\r
public class ShapeAreaCalculator {\r
    public static void main(String[] args) {\r
        System.out.println("=== SHAPE CALCULATOR DEMO ===\\n");\r
        \r
        // Collection of shapes\r
        ArrayList<Shape> shapes = new ArrayList<>();\r
        shapes.add(new Circle("Red", 5.0));\r
        shapes.add(new Rectangle("Blue", 4.0, 6.0));\r
        shapes.add(new Triangle("Green", 3.0, 4.0, 5.0));\r
        shapes.add(new Square("Yellow", 4.0));\r
        \r
        // Process all shapes polymorphically\r
        double totalArea = 0;\r
        for (Shape s : shapes) {\r
            s.displayInfo();\r
            totalArea += s.area();\r
            System.out.println();\r
        }\r
        \r
        System.out.println("Total area of all shapes: " + String.format("%.2f", totalArea));\r
        \r
        // Real-world use: sorting shapes by area\r
        shapes.sort((s1, s2) -> Double.compare(s1.area(), s2.area()));\r
        System.out.println("\\n=== SHAPES SORTED BY AREA ===");\r
        for (Shape s : shapes) {\r
            System.out.println(s.getClass().getSimpleName() + ": " + String.format("%.2f", s.area()));\r
        }\r
    }\r
}`,l=`// GameCharacterSystem.java\r
// RPG character system with unique attack behaviors\r
\r
import java.util.Random;\r
\r
// Abstract character class\r
abstract class GameCharacter {\r
    protected String name;\r
    protected int health;\r
    protected int mana;\r
    protected int level;\r
    protected Random random = new Random();\r
    \r
    public GameCharacter(String name, int level) {\r
        this.name = name;\r
        this.level = level;\r
        this.health = 100 + level * 10;\r
        this.mana = 50 + level * 5;\r
    }\r
    \r
    // Concrete methods - shared behavior\r
    public void takeDamage(int damage) {\r
        health -= damage;\r
        if (health < 0) health = 0;\r
        System.out.println(name + " took " + damage + " damage! Health: " + health);\r
    }\r
    \r
    public void heal(int amount) {\r
        health += amount;\r
        System.out.println(name + " healed " + amount + " HP! Health: " + health);\r
    }\r
    \r
    public boolean isAlive() {\r
        return health > 0;\r
    }\r
    \r
    // Template method - defines the turn structure\r
    public final void takeTurn(GameCharacter target) {\r
        System.out.println("\\n--- " + name + "'s turn ---");\r
        if (mana >= getSpecialCost()) {\r
            specialAbility(target);\r
            mana -= getSpecialCost();\r
        } else {\r
            attack(target);\r
        }\r
        regenerateMana();\r
    }\r
    \r
    // Abstract methods\r
    public abstract void attack(GameCharacter target);\r
    public abstract void specialAbility(GameCharacter target);\r
    protected abstract int getSpecialCost();\r
    protected abstract void regenerateMana();\r
    \r
    // Concrete display method\r
    public void displayStats() {\r
        System.out.println(name + " [Level " + level + "]");\r
        System.out.println("  HP: " + health + "/" + (100 + level * 10));\r
        System.out.println("  MP: " + mana + "/" + (50 + level * 5));\r
    }\r
}\r
\r
// Warrior class\r
class Warrior extends GameCharacter {\r
    private int rage = 0;\r
    \r
    public Warrior(String name, int level) {\r
        super(name, level);\r
    }\r
    \r
    @Override\r
    public void attack(GameCharacter target) {\r
        int damage = 15 + level * 2;\r
        System.out.println(name + " swings a sword! Deals " + damage + " damage.");\r
        target.takeDamage(damage);\r
        rage += 5;\r
    }\r
    \r
    @Override\r
    public void specialAbility(GameCharacter target) {\r
        int damage = 30 + level * 3;\r
        System.out.println(name + " uses BERSERKER SLAM! Deals " + damage + " damage.");\r
        target.takeDamage(damage);\r
        rage = 0;\r
    }\r
    \r
    @Override\r
    protected int getSpecialCost() {\r
        return 20;\r
    }\r
    \r
    @Override\r
    protected void regenerateMana() {\r
        mana += 5;\r
        if (mana > 50 + level * 5) mana = 50 + level * 5;\r
    }\r
}\r
\r
// Mage class\r
class Mage extends GameCharacter {\r
    public Mage(String name, int level) {\r
        super(name, level);\r
    }\r
    \r
    @Override\r
    public void attack(GameCharacter target) {\r
        int damage = 8 + level;\r
        System.out.println(name + " casts Magic Missile! Deals " + damage + " damage.");\r
        target.takeDamage(damage);\r
    }\r
    \r
    @Override\r
    public void specialAbility(GameCharacter target) {\r
        int damage = 40 + level * 4;\r
        System.out.println(name + " casts FIREBALL! Deals " + damage + " damage.");\r
        target.takeDamage(damage);\r
    }\r
    \r
    @Override\r
    protected int getSpecialCost() {\r
        return 30;\r
    }\r
    \r
    @Override\r
    protected void regenerateMana() {\r
        mana += 10;\r
        if (mana > 50 + level * 5) mana = 50 + level * 5;\r
    }\r
}\r
\r
// Archer class\r
class Archer extends GameCharacter {\r
    private int arrows = 20;\r
    \r
    public Archer(String name, int level) {\r
        super(name, level);\r
    }\r
    \r
    @Override\r
    public void attack(GameCharacter target) {\r
        if (arrows > 0) {\r
            int damage = 12 + level * 2;\r
            System.out.println(name + " shoots an arrow! Deals " + damage + " damage.");\r
            target.takeDamage(damage);\r
            arrows--;\r
        } else {\r
            System.out.println(name + " has no arrows! Uses dagger for 5 damage.");\r
            target.takeDamage(5);\r
        }\r
    }\r
    \r
    @Override\r
    public void specialAbility(GameCharacter target) {\r
        int damage = 25 + level * 2;\r
        System.out.println(name + " uses MULTI-SHOT! Deals " + damage + " damage.");\r
        target.takeDamage(damage);\r
        arrows = Math.min(arrows + 10, 30);\r
    }\r
    \r
    @Override\r
    protected int getSpecialCost() {\r
        return 15;\r
    }\r
    \r
    @Override\r
    protected void regenerateMana() {\r
        mana += 3;\r
        if (mana > 50 + level * 5) mana = 50 + level * 5;\r
    }\r
}\r
\r
public class GameCharacterSystem {\r
    public static void main(String[] args) {\r
        System.out.println("=== RPG BATTLE SIMULATION ===\\n");\r
        \r
        GameCharacter warrior = new Warrior("Conan", 5);\r
        GameCharacter mage = new Mage("Merlin", 5);\r
        GameCharacter archer = new Archer("Legolas", 5);\r
        \r
        warrior.displayStats();\r
        mage.displayStats();\r
        archer.displayStats();\r
        \r
        System.out.println("\\n=== BATTLE BEGINS ===");\r
        \r
        // Simulate a few turns\r
        warrior.takeTurn(mage);\r
        mage.takeTurn(warrior);\r
        archer.takeTurn(mage);\r
        mage.takeTurn(archer);\r
        warrior.takeTurn(archer);\r
        \r
        System.out.println("\\n=== FINAL STATS ===");\r
        warrior.displayStats();\r
        mage.displayStats();\r
        archer.displayStats();\r
    }\r
}`,c=`// BankingSystem.java\r
// Complete banking system with different account types\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
// Abstract bank account\r
abstract class BankAccount {\r
    protected String accountNumber;\r
    protected String holderName;\r
    protected double balance;\r
    protected static int nextAccountNumber = 1001;\r
    \r
    public BankAccount(String holderName, double initialDeposit) {\r
        this.accountNumber = "ACC" + nextAccountNumber++;\r
        this.holderName = holderName;\r
        this.balance = initialDeposit;\r
    }\r
    \r
    // Concrete methods\r
    public void deposit(double amount) {\r
        if (amount > 0) {\r
            balance += amount;\r
            System.out.println("Deposited: $" + amount);\r
            System.out.println("New balance: $" + balance);\r
        } else {\r
            System.out.println("Invalid deposit amount");\r
        }\r
    }\r
    \r
    public double getBalance() {\r
        return balance;\r
    }\r
    \r
    public void displayInfo() {\r
        System.out.println("Account: " + accountNumber);\r
        System.out.println("Holder: " + holderName);\r
        System.out.println("Balance: $" + balance);\r
        System.out.println("Type: " + getAccountType());\r
        System.out.println("Interest Rate: " + getInterestRate() + "%");\r
    }\r
    \r
    // Abstract methods\r
    public abstract void withdraw(double amount);\r
    public abstract double calculateInterest();\r
    public abstract double getInterestRate();\r
    public abstract String getAccountType();\r
}\r
\r
// Savings account\r
class SavingsAccount extends BankAccount {\r
    private static final double INTEREST_RATE = 4.0;\r
    private static final double MINIMUM_BALANCE = 500;\r
    \r
    public SavingsAccount(String holderName, double initialDeposit) {\r
        super(holderName, initialDeposit);\r
        if (initialDeposit < MINIMUM_BALANCE) {\r
            System.out.println("Warning: Savings account requires minimum $" + MINIMUM_BALANCE);\r
        }\r
    }\r
    \r
    @Override\r
    public void withdraw(double amount) {\r
        if (amount > 0 && (balance - amount) >= MINIMUM_BALANCE) {\r
            balance -= amount;\r
            System.out.println("Withdrew: $" + amount);\r
            System.out.println("Remaining balance: $" + balance);\r
        } else {\r
            System.out.println("Cannot withdraw. Minimum balance of $" + MINIMUM_BALANCE + " required.");\r
        }\r
    }\r
    \r
    @Override\r
    public double calculateInterest() {\r
        return balance * INTEREST_RATE / 100;\r
    }\r
    \r
    @Override\r
    public double getInterestRate() {\r
        return INTEREST_RATE;\r
    }\r
    \r
    @Override\r
    public String getAccountType() {\r
        return "Savings Account";\r
    }\r
}\r
\r
// Current account (Checking)\r
class CurrentAccount extends BankAccount {\r
    private static final double INTEREST_RATE = 0.5;\r
    private double overdraftLimit = 1000;\r
    \r
    public CurrentAccount(String holderName, double initialDeposit) {\r
        super(holderName, initialDeposit);\r
    }\r
    \r
    @Override\r
    public void withdraw(double amount) {\r
        if (amount > 0 && (balance - amount) >= -overdraftLimit) {\r
            balance -= amount;\r
            System.out.println("Withdrew: $" + amount);\r
            if (balance < 0) {\r
                System.out.println("Overdraft used! Balance: $" + balance);\r
            } else {\r
                System.out.println("Remaining balance: $" + balance);\r
            }\r
        } else {\r
            System.out.println("Withdrawal denied. Overdraft limit exceeded.");\r
        }\r
    }\r
    \r
    @Override\r
    public double calculateInterest() {\r
        return balance > 0 ? balance * INTEREST_RATE / 100 : 0;\r
    }\r
    \r
    @Override\r
    public double getInterestRate() {\r
        return INTEREST_RATE;\r
    }\r
    \r
    @Override\r
    public String getAccountType() {\r
        return "Current Account";\r
    }\r
}\r
\r
// Fixed Deposit account\r
class FixedDepositAccount extends BankAccount {\r
    private static final double INTEREST_RATE = 7.5;\r
    private int tenureMonths;\r
    private boolean isMatured;\r
    \r
    public FixedDepositAccount(String holderName, double initialDeposit, int tenureMonths) {\r
        super(holderName, initialDeposit);\r
        this.tenureMonths = tenureMonths;\r
        this.isMatured = false;\r
        System.out.println("Fixed deposit for " + tenureMonths + " months. Early withdrawal penalty applies.");\r
    }\r
    \r
    @Override\r
    public void withdraw(double amount) {\r
        if (!isMatured) {\r
            System.out.println("Cannot withdraw before maturity. Penalty of 10% applies if you continue.");\r
            double penalty = amount * 0.10;\r
            System.out.println("Withdrawal with penalty: $" + (amount - penalty));\r
            balance -= amount;\r
        } else {\r
            if (amount > 0 && amount <= balance) {\r
                balance -= amount;\r
                System.out.println("Withdrew: $" + amount);\r
            }\r
        }\r
    }\r
    \r
    @Override\r
    public double calculateInterest() {\r
        return balance * INTEREST_RATE / 100 * (tenureMonths / 12.0);\r
    }\r
    \r
    @Override\r
    public double getInterestRate() {\r
        return INTEREST_RATE;\r
    }\r
    \r
    @Override\r
    public String getAccountType() {\r
        return "Fixed Deposit (" + tenureMonths + " months)";\r
    }\r
    \r
    public void mature() {\r
        isMatured = true;\r
        double interest = calculateInterest();\r
        balance += interest;\r
        System.out.println("FD matured! Interest earned: $" + interest);\r
    }\r
}\r
\r
public class BankingSystem {\r
    public static void main(String[] args) {\r
        System.out.println("=== BANKING SYSTEM DEMO ===\\n");\r
        \r
        List<BankAccount> accounts = new ArrayList<>();\r
        \r
        // Create different accounts\r
        SavingsAccount savings = new SavingsAccount("Swadeep", 5000);\r
        CurrentAccount current = new CurrentAccount("Tuhina", 2000);\r
        FixedDepositAccount fd = new FixedDepositAccount("Abhronila", 10000, 12);\r
        \r
        accounts.add(savings);\r
        accounts.add(current);\r
        accounts.add(fd);\r
        \r
        // Display all accounts\r
        for (BankAccount acc : accounts) {\r
            acc.displayInfo();\r
            System.out.println("Interest earned: $" + acc.calculateInterest());\r
            System.out.println("------------------------");\r
        }\r
        \r
        // Perform transactions\r
        System.out.println("\\n=== TRANSACTIONS ===");\r
        savings.deposit(1000);\r
        savings.withdraw(2000);\r
        \r
        current.withdraw(2500); // Using overdraft\r
        current.deposit(500);\r
        \r
        fd.mature();\r
        fd.withdraw(5000);\r
        \r
        // Calculate total bank interest payout\r
        double totalInterest = 0;\r
        for (BankAccount acc : accounts) {\r
            totalInterest += acc.calculateInterest();\r
        }\r
        System.out.println("\\nTotal interest to be paid by bank: $" + totalInterest);\r
    }\r
}`,d=`// SchoolManagementSystem.java\r
// School management for Barrackpore institutions\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
// Abstract Person class\r
abstract class Person {\r
    protected String name;\r
    protected int age;\r
    protected String address;\r
    \r
    public Person(String name, int age, String address) {\r
        this.name = name;\r
        this.age = age;\r
        this.address = address;\r
    }\r
    \r
    public abstract void displayRole();\r
    public abstract String getDuties();\r
    \r
    public void displayInfo() {\r
        System.out.println("Name: " + name);\r
        System.out.println("Age: " + age);\r
        System.out.println("Address: " + address);\r
        displayRole();\r
        System.out.println("Duties: " + getDuties());\r
    }\r
}\r
\r
// Abstract Employee (extends Person)\r
abstract class Employee extends Person {\r
    protected int employeeId;\r
    protected double salary;\r
    protected String department;\r
    \r
    public Employee(String name, int age, String address, int employeeId, double salary, String department) {\r
        super(name, age, address);\r
        this.employeeId = employeeId;\r
        this.salary = salary;\r
        this.department = department;\r
    }\r
    \r
    public abstract double calculateMonthlySalary();\r
    \r
    @Override\r
    public void displayRole() {\r
        System.out.println("Role: Employee (ID: " + employeeId + ")");\r
        System.out.println("Department: " + department);\r
        System.out.println("Base Salary: $" + salary);\r
        System.out.println("Monthly Take-home: $" + calculateMonthlySalary());\r
    }\r
}\r
\r
// Teacher class\r
class Teacher extends Employee {\r
    private String subject;\r
    private int classesPerWeek;\r
    private static final double EXTRA_PER_CLASS = 50;\r
    \r
    public Teacher(String name, int age, String address, int employeeId, double salary, String department, String subject, int classesPerWeek) {\r
        super(name, age, address, employeeId, salary, department);\r
        this.subject = subject;\r
        this.classesPerWeek = classesPerWeek;\r
    }\r
    \r
    @Override\r
    public double calculateMonthlySalary() {\r
        // Teachers get extra for extra classes\r
        int extraClasses = Math.max(0, classesPerWeek - 20);\r
        return salary + (extraClasses * EXTRA_PER_CLASS * 4);\r
    }\r
    \r
    @Override\r
    public String getDuties() {\r
        return "Teach " + subject + ", prepare lessons, grade assignments, parent meetings";\r
    }\r
    \r
    @Override\r
    public void displayRole() {\r
        super.displayRole();\r
        System.out.println("Subject: " + subject);\r
        System.out.println("Classes per week: " + classesPerWeek);\r
    }\r
}\r
\r
// Staff class (non-teaching)\r
class Staff extends Employee {\r
    private String shift;\r
    \r
    public Staff(String name, int age, String address, int employeeId, double salary, String department, String shift) {\r
        super(name, age, address, employeeId, salary, department);\r
        this.shift = shift;\r
    }\r
    \r
    @Override\r
    public double calculateMonthlySalary() {\r
        // Staff get fixed salary\r
        return salary;\r
    }\r
    \r
    @Override\r
    public String getDuties() {\r
        return "Administrative work, manage " + department + ", " + shift + " shift";\r
    }\r
    \r
    @Override\r
    public void displayRole() {\r
        super.displayRole();\r
        System.out.println("Shift: " + shift);\r
    }\r
}\r
\r
// Student class (non-employee)\r
class Student extends Person {\r
    private int rollNumber;\r
    private String grade;\r
    private List<String> subjects = new ArrayList<>();\r
    \r
    public Student(String name, int age, String address, int rollNumber, String grade) {\r
        super(name, age, address);\r
        this.rollNumber = rollNumber;\r
        this.grade = grade;\r
    }\r
    \r
    public void addSubject(String subject) {\r
        subjects.add(subject);\r
    }\r
    \r
    @Override\r
    public void displayRole() {\r
        System.out.println("Role: Student (Roll No: " + rollNumber + ")");\r
        System.out.println("Grade: " + grade);\r
        System.out.println("Subjects: " + String.join(", ", subjects));\r
    }\r
    \r
    @Override\r
    public String getDuties() {\r
        return "Attend classes, complete homework, participate in activities";\r
    }\r
}\r
\r
// School class to manage everyone\r
class School {\r
    private String name;\r
    private List<Person> members = new ArrayList<>();\r
    \r
    public School(String name) {\r
        this.name = name;\r
    }\r
    \r
    public void addMember(Person p) {\r
        members.add(p);\r
    }\r
    \r
    public void displayAllMembers() {\r
        System.out.println("\\n=== " + name.toUpperCase() + " DIRECTORY ===");\r
        for (Person p : members) {\r
            System.out.println("\\n---");\r
            p.displayInfo();\r
        }\r
    }\r
    \r
    public double calculateTotalSalaryExpense() {\r
        double total = 0;\r
        for (Person p : members) {\r
            if (p instanceof Employee) {\r
                total += ((Employee) p).calculateMonthlySalary();\r
            }\r
        }\r
        return total;\r
    }\r
}\r
\r
public class SchoolManagementSystem {\r
    public static void main(String[] args) {\r
        School school = new School("Barrackpore Public School");\r
        \r
        // Add teachers\r
        school.addMember(new Teacher("Mrs. Mukherjee", 45, "Barrackpore", 1001, 45000, "Science", "Physics", 24));\r
        school.addMember(new Teacher("Mr. Das", 38, "Shyamnagar", 1002, 42000, "Mathematics", "Algebra", 22));\r
        \r
        // Add staff\r
        school.addMember(new Staff("Mr. Sen", 50, "Ichapur", 2001, 28000, "Administration", "Morning"));\r
        school.addMember(new Staff("Ms. Ghosh", 35, "Naihati", 2002, 25000, "Library", "Evening"));\r
        \r
        // Add students\r
        Student s1 = new Student("Swadeep", 15, "Barrackpore", 101, "10th");\r
        s1.addSubject("Physics");\r
        s1.addSubject("Mathematics");\r
        s1.addSubject("Computer Science");\r
        school.addMember(s1);\r
        \r
        Student s2 = new Student("Tuhina", 14, "Shyamnagar", 102, "9th");\r
        s2.addSubject("Biology");\r
        s2.addSubject("Chemistry");\r
        s2.addSubject("English");\r
        school.addMember(s2);\r
        \r
        Student s3 = new Student("Abhronila", 16, "Ichapur", 103, "11th");\r
        s3.addSubject("Economics");\r
        s3.addSubject("Business Studies");\r
        s3.addSubject("Accountancy");\r
        school.addMember(s3);\r
        \r
        // Display all\r
        school.displayAllMembers();\r
        \r
        System.out.println("\\n=== FINANCIAL SUMMARY ===");\r
        System.out.println("Total monthly salary expense: ₹" + school.calculateTotalSalaryExpense());\r
    }\r
}`,A=()=>{const[m,u]=a.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:`
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
      `}),e.jsx("div",{className:"max-w-5xl mx-auto animate-fadeSlideUp",children:e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400",children:"Practical Programs Using Abstract Classes"}),e.jsx("p",{className:"text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed",children:"Real-world applications — from payroll systems to game engines, see abstraction in action."})]})}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-teal-500 pl-4 mb-4",children:"Putting Theory into Practice"}),e.jsxs("div",{className:"space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsxs("p",{children:["Abstract classes shine in real-world applications where you have ",e.jsx("strong",{children:"common behavior"})," but need ",e.jsx("strong",{children:"variations"})," in implementation. This section presents complete, production-style programs that demonstrate how professionals use abstract classes."]}),e.jsxs("p",{children:["Each program solves a real problem: calculating payroll, managing shapes, building game characters, handling bank accounts, and running a school system. Study these to understand how abstraction leads to ",e.jsx("strong",{children:"maintainable, extensible code"}),"."]}),e.jsx("div",{className:"bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg mt-3",children:e.jsxs("p",{className:"italic",children:["✨ ",e.jsx("strong",{children:"Industry insight:"})," Major frameworks like Spring, Hibernate, and Android SDK use abstract classes extensively for template methods, callbacks, and base implementations."]})})]})]}),e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-blue-500 pl-4 mb-4",children:"🏢 Program 1: Employee Payroll System"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"A complete payroll system with different employee types (Full-time, Part-time, Contractor) each calculating salary differently."}),e.jsx(r,{fileModule:i,title:"EmployeePayrollSystem.java",highlightLines:[4,5,6,9,10,11,14,15,16]}),e.jsxs("div",{className:"mt-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-sm",children:[e.jsx("strong",{children:"Key takeaway:"})," Abstract class ",e.jsx("code",{children:"Employee"})," provides common fields and ",e.jsx("code",{children:"calculateSalary()"})," abstract method. Each subclass implements its own salary logic."]})]}),e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-green-500 pl-4 mb-4",children:"📐 Program 2: Shape Area Calculator"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Geometric shapes with polymorphic area calculation — used in CAD software, graphics engines, and GIS systems."}),e.jsx(r,{fileModule:o,title:"ShapeAreaCalculator.java",highlightLines:[4,5,6,9,10,11,14,15,16]}),e.jsxs("div",{className:"mt-3 p-2 bg-green-50 dark:bg-green-900/20 rounded text-sm",children:[e.jsx("strong",{children:"Key takeaway:"})," Abstract class ",e.jsx("code",{children:"Shape"})," forces subclasses to implement ",e.jsx("code",{children:"area()"})," and ",e.jsx("code",{children:"perimeter()"}),". The ",e.jsx("code",{children:"displayInfo()"})," method is concrete and reused."]})]}),e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-purple-500 pl-4 mb-4",children:"🎮 Program 3: Game Character System"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Role-playing game characters (Warrior, Mage, Archer) with unique attack behaviors but shared health/mana management."}),e.jsx(r,{fileModule:l,title:"GameCharacterSystem.java",highlightLines:[4,5,6,9,10,11,14,15,16]}),e.jsxs("div",{className:"mt-3 p-2 bg-purple-50 dark:bg-purple-900/20 rounded text-sm",children:[e.jsx("strong",{children:"Key takeaway:"})," Abstract class ",e.jsx("code",{children:"GameCharacter"})," defines the template method ",e.jsx("code",{children:"takeTurn()"})," that calls abstract methods ",e.jsx("code",{children:"attack()"})," and ",e.jsx("code",{children:"defend()"}),"."]})]}),e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-red-500 pl-4 mb-4",children:"🏦 Program 4: Banking System"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Account management with Savings, Current, and FixedDeposit accounts — each with different interest calculation and withdrawal rules."}),e.jsx(r,{fileModule:c,title:"BankingSystem.java",highlightLines:[4,5,6,9,10,11,14,15,16]}),e.jsxs("div",{className:"mt-3 p-2 bg-red-50 dark:bg-red-900/20 rounded text-sm",children:[e.jsx("strong",{children:"Key takeaway:"})," Abstract class ",e.jsx("code",{children:"BankAccount"})," enforces ",e.jsx("code",{children:"calculateInterest()"})," and ",e.jsx("code",{children:"withdraw()"})," rules, while providing concrete deposit and balance methods."]})]}),e.jsxs("section",{className:"bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fadeSlideUp",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-yellow-500 pl-4 mb-4",children:"🏫 Program 5: School Management System"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"A system for a school in Barrackpore managing students, teachers, and staff — each person has a role-specific way to calculate salary and display duties."}),e.jsx(r,{fileModule:d,title:"SchoolManagementSystem.java",highlightLines:[4,5,6,9,10,11,14,15,16]}),e.jsxs("div",{className:"mt-3 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded text-sm",children:[e.jsx("strong",{children:"Key takeaway:"})," Abstract class ",e.jsx("code",{children:"Person"})," holds common personal data. ",e.jsx("code",{children:"Employee"})," (abstract) adds salary calculation. Concrete classes add specific behavior."]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeSlideUp",children:[e.jsxs("div",{className:"bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl p-5 border border-yellow-200 dark:border-yellow-800 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-semibold flex items-center gap-2",children:"💎 Professional Tips"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 mt-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Start with one concrete class"}),", then refactor common code into an abstract base class."]}),e.jsxs("li",{children:[e.jsx("strong",{children:'Document the "contract"'})," — what each abstract method should do."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use meaningful names"})," for abstract classes (e.g., ",e.jsx("code",{children:"AbstractPaymentProcessor"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Keep abstract classes small"})," — if it has too many abstract methods, consider splitting."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test abstract classes"})," by creating a test subclass or using mocks."]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-5 border border-red-200 dark:border-red-800 hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-semibold flex items-center gap-2",children:"⚠️ Common Mistakes in Practice"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 mt-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Making concrete classes abstract unnecessarily"})," — only abstract when needed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Putting too much logic in the abstract class"})," — violates Single Responsibility."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to call super()"})," in subclass constructors."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Overriding concrete methods incorrectly"})," — losing shared behavior."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using abstract classes where interfaces would be simpler"})," (no shared state needed)."]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeSlideUp",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border-l-4 border-green-500",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"✅ Best Practices for Practical Programs"}),e.jsxs("ul",{className:"space-y-2 mt-2 text-gray-700 dark:text-gray-300 list-disc list-inside",children:[e.jsxs("li",{children:["Use abstract classes for ",e.jsx("strong",{children:'"is-a" hierarchies with shared code'}),"."]}),e.jsxs("li",{children:["Keep the abstract class ",e.jsx("strong",{children:"focused on one concept"}),"."]}),e.jsxs("li",{children:["Provide ",e.jsx("strong",{children:"default implementations"})," where possible (hook methods)."]}),e.jsxs("li",{children:["Mark the ",e.jsx("strong",{children:"template method as final"})," to preserve algorithm structure."]}),e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"protected fields"})," for subclass access, but prefer private with getters/setters."]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border-l-4 border-blue-500",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"📋 Mini Checklist"}),e.jsxs("ul",{className:"space-y-2 mt-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"✔️ Does the abstract class clearly represent a common concept?"}),e.jsx("li",{children:"✔️ Are all abstract methods meaningful and necessary?"}),e.jsx("li",{children:"✔️ Is the inheritance depth reasonable?"}),e.jsx("li",{children:'✔️ Are the concrete subclasses truly "is-a" relationships?'}),e.jsx("li",{children:"✔️ Have you avoided duplicate code across subclasses?"})]})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800/60 rounded-xl p-5 border-l-8 border-indigo-400 animate-fadeSlideUp",children:[e.jsx("h3",{className:"font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2",children:"🧠 Think about..."}),e.jsxs("p",{className:"italic text-gray-700 dark:text-gray-300 mt-1",children:["In the GameCharacter example, why is ",e.jsx("code",{children:"takeTurn()"})," marked ",e.jsx("code",{children:"final"}),"? What would happen if a subclass overrode it and didn't call ",e.jsx("code",{children:"attack()"})," and ",e.jsx("code",{children:"defend()"}),"? How does this enforce the game rules?"]}),e.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:["Try extending the BankingSystem with a ",e.jsx("code",{children:"PremiumSavingsAccount"})," that gives higher interest. Notice how little code you need to write — that's the power of abstraction."]})]}),e.jsx("div",{className:"animate-fadeSlideUp",children:e.jsx(t,{title:"Practical Programs with Abstract Classes - FAQs",questions:s})}),e.jsx("div",{className:"animate-fadeSlideUp mt-8",children:e.jsx(n,{note:"These five programs represent real scenarios students will encounter. Have them run each program, then modify one — e.g., add a new Employee type (Intern), add a new Shape (Triangle), add a new GameCharacter (Rogue). Emphasize how abstract classes make extensions easy without modifying existing code. Discuss the Open/Closed Principle: open for extension, closed for modification."})})]})]})};export{A as default};
