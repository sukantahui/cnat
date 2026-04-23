import{r as i,j as e}from"./index-Ci-Q4Ner.js";import{c as n}from"./clsx-B-dksMZM.js";import{T as s}from"./TeacherSukantaHui-BrcGZF6N.js";import{J as a}from"./JavaFileLoader-BlL9pLbO.js";import{F as o}from"./FAQTemplate-Cm56IP0Z.js";import"./git-branch-DCfgpPA-.js";import"./JavaCodeBlock-CbpPnd07.js";import"./prism-BuBU6Rh9.js";import"./browser-Dp8W79cH.js";import"./prism-java-BwO6k4I_.js";const l=`// Basic Method Overriding Example\r
class Animal {\r
    String name;\r
    int age;\r
    \r
    public void makeSound() {\r
        System.out.println(name + " makes a generic animal sound");\r
    }\r
    \r
    public void move() {\r
        System.out.println(name + " moves in some way");\r
    }\r
    \r
    public void eat() {\r
        System.out.println(name + " is eating");\r
    }\r
}\r
\r
class Dog extends Animal {\r
    String breed;\r
    \r
    @Override\r
    public void makeSound() {\r
        System.out.println(name + " the " + breed + " barks: Woof! Woof!");\r
    }\r
    \r
    @Override\r
    public void move() {\r
        System.out.println(name + " runs on four legs");\r
    }\r
    \r
    // New method specific to Dog\r
    public void wagTail() {\r
        System.out.println(name + " is wagging tail happily!");\r
    }\r
}\r
\r
class Cat extends Animal {\r
    String color;\r
    \r
    @Override\r
    public void makeSound() {\r
        System.out.println(name + " the " + color + " cat meows: Meow! Meow!");\r
    }\r
    \r
    @Override\r
    public void move() {\r
        System.out.println(name + " walks silently");\r
    }\r
    \r
    public void climb() {\r
        System.out.println(name + " is climbing a tree");\r
    }\r
}\r
\r
public class BasicMethodOverriding {\r
    public static void main(String[] args) {\r
        System.out.println("=== Method Overriding Demo ===\\n");\r
        \r
        // Dog object\r
        Dog dog = new Dog();\r
        dog.name = "Tommy";\r
        dog.age = 3;\r
        dog.breed = "Golden Retriever";\r
        \r
        System.out.println("--- Dog Behavior ---");\r
        dog.makeSound();  // Overridden\r
        dog.move();       // Overridden\r
        dog.eat();        // Inherited\r
        dog.wagTail();    // Own method\r
        \r
        System.out.println("\\n--- Cat Behavior ---");\r
        \r
        // Cat object\r
        Cat cat = new Cat();\r
        cat.name = "Whiskers";\r
        cat.age = 2;\r
        cat.color = "White";\r
        \r
        cat.makeSound();  // Overridden\r
        cat.move();       // Overridden\r
        cat.eat();        // Inherited\r
        cat.climb();      // Own method\r
        \r
        System.out.println("\\n--- Polymorphism in Action ---");\r
        // Parent reference, child object\r
        Animal animal1 = new Dog();\r
        Animal animal2 = new Cat();\r
        \r
        animal1.name = "Buddy";\r
        animal2.name = "Mittens";\r
        \r
        animal1.makeSound();  // Calls Dog's version\r
        animal2.makeSound();  // Calls Cat's version\r
    }\r
}`,d=`// Demonstrating the importance of @Override annotation\r
class Parent {\r
    public void display() {\r
        System.out.println("Parent display method");\r
    }\r
    \r
    public void calculate(int x, int y) {\r
        System.out.println("Parent calculate: " + (x + y));\r
    }\r
    \r
    public Number getValue() {\r
        return 100;\r
    }\r
}\r
\r
class Child extends Parent {\r
    // CORRECT: Overriding with @Override\r
    @Override\r
    public void display() {\r
        System.out.println("Child display method - OVERRIDDEN");\r
    }\r
    \r
    // WRONG: This is OVERLOADING, not OVERRIDING (different parameters)\r
    // Without @Override, this compiles but doesn't override!\r
    // @Override  // Uncommenting this would cause compilation error\r
    public void calculate(int x, int y, int z) {\r
        System.out.println("Child calculate: " + (x + y + z));\r
    }\r
    \r
    // CORRECT: Overriding with covariant return type\r
    @Override\r
    public Integer getValue() {\r
        return 200;\r
    }\r
    \r
    // Common mistake: Misspelled method name\r
    // @Override\r
    // public void disply() {  // ERROR! No such method in parent\r
    //     System.out.println("This won't override anything");\r
    // }\r
}\r
\r
public class OverrideAnnotation {\r
    public static void main(String[] args) {\r
        System.out.println("=== @Override Annotation Demo ===\\n");\r
        \r
        Child child = new Child();\r
        \r
        // This calls the overridden method\r
        child.display();\r
        \r
        // This calls Parent's method (not overridden)\r
        child.calculate(5, 10);\r
        \r
        // This calls Child's overloaded method\r
        child.calculate(5, 10, 15);\r
        \r
        // Demonstrating covariant return type\r
        Number num = child.getValue();\r
        System.out.println("Value: " + num);\r
        System.out.println("Type: " + num.getClass().getSimpleName());\r
        \r
        System.out.println("\\n--- Why @Override is Important ---");\r
        System.out.println("1. Compiler catches spelling mistakes");\r
        System.out.println("2. Compiler catches parameter mismatches");\r
        System.out.println("3. Makes code more readable");\r
        System.out.println("4. Ensures you're actually overriding");\r
    }\r
}`,c=`// Real-world method overriding in a School System\r
class Employee {\r
    protected String name;\r
    protected int id;\r
    protected double salary;\r
    \r
    public Employee(String name, int id, double salary) {\r
        this.name = name;\r
        this.id = id;\r
        this.salary = salary;\r
    }\r
    \r
    public void work() {\r
        System.out.println(name + " (ID: " + id + ") is working");\r
    }\r
    \r
    public double calculateBonus() {\r
        // Base bonus: 5% of salary\r
        return salary * 0.05;\r
    }\r
    \r
    public void displayInfo() {\r
        System.out.println("Employee: " + name);\r
        System.out.println("ID: " + id);\r
        System.out.println("Salary: ₹" + salary);\r
        System.out.println("Bonus: ₹" + calculateBonus());\r
    }\r
}\r
\r
class Teacher extends Employee {\r
    private String subject;\r
    private String department;\r
    \r
    public Teacher(String name, int id, double salary, String subject, String department) {\r
        super(name, id, salary);\r
        this.subject = subject;\r
        this.department = department;\r
    }\r
    \r
    @Override\r
    public void work() {\r
        System.out.println(name + " is teaching " + subject + " to students");\r
        System.out.println("Department: " + department);\r
    }\r
    \r
    @Override\r
    public double calculateBonus() {\r
        // Teachers get 8% bonus\r
        return salary * 0.08;\r
    }\r
    \r
    @Override\r
    public void displayInfo() {\r
        super.displayInfo();\r
        System.out.println("Subject: " + subject);\r
        System.out.println("Department: " + department);\r
    }\r
}\r
\r
class Manager extends Employee {\r
    private int teamSize;\r
    private String projectName;\r
    \r
    public Manager(String name, int id, double salary, int teamSize, String projectName) {\r
        super(name, id, salary);\r
        this.teamSize = teamSize;\r
        this.projectName = projectName;\r
    }\r
    \r
    @Override\r
    public void work() {\r
        System.out.println(name + " is managing project: " + projectName);\r
        System.out.println("Leading a team of " + teamSize + " members");\r
    }\r
    \r
    @Override\r
    public double calculateBonus() {\r
        // Managers get 12% bonus\r
        return salary * 0.12;\r
    }\r
    \r
    @Override\r
    public void displayInfo() {\r
        super.displayInfo();\r
        System.out.println("Project: " + projectName);\r
        System.out.println("Team Size: " + teamSize);\r
    }\r
}\r
\r
class Developer extends Employee {\r
    private String programmingLanguage;\r
    private String specialization;\r
    \r
    public Developer(String name, int id, double salary, String programmingLanguage, String specialization) {\r
        super(name, id, salary);\r
        this.programmingLanguage = programmingLanguage;\r
        this.specialization = specialization;\r
    }\r
    \r
    @Override\r
    public void work() {\r
        System.out.println(name + " is writing " + programmingLanguage + " code");\r
        System.out.println("Specialization: " + specialization);\r
    }\r
    \r
    @Override\r
    public double calculateBonus() {\r
        // Developers get 10% bonus\r
        return salary * 0.10;\r
    }\r
    \r
    @Override\r
    public void displayInfo() {\r
        super.displayInfo();\r
        System.out.println("Language: " + programmingLanguage);\r
        System.out.println("Specialization: " + specialization);\r
    }\r
}\r
\r
public class RealWorldOverride {\r
    public static void main(String[] args) {\r
        System.out.println("=== Real-World Method Overriding ===\\n");\r
        \r
        // Creating different types of employees\r
        Teacher teacher = new Teacher("Abhronila", 1001, 65000, "Computer Science", "Engineering");\r
        Manager manager = new Manager("Swadeep", 1002, 85000, 8, "School Management System");\r
        Developer developer = new Developer("Tuhina", 1003, 75000, "Java", "Backend Development");\r
        \r
        System.out.println("--- Teacher Details ---");\r
        teacher.displayInfo();\r
        System.out.println();\r
        teacher.work();\r
        \r
        System.out.println("\\n--- Manager Details ---");\r
        manager.displayInfo();\r
        System.out.println();\r
        manager.work();\r
        \r
        System.out.println("\\n--- Developer Details ---");\r
        developer.displayInfo();\r
        System.out.println();\r
        developer.work();\r
        \r
        System.out.println("\\n--- Polymorphism Example ---");\r
        Employee[] employees = {teacher, manager, developer};\r
        \r
        for(Employee emp : employees) {\r
            System.out.println("\\n" + emp.name + "'s bonus: ₹" + emp.calculateBonus());\r
        }\r
    }\r
}`,m=`// Demonstrating rules of method overriding\r
class ParentClass {\r
    // Public method\r
    public void publicMethod() {\r
        System.out.println("Parent public method");\r
    }\r
    \r
    // Protected method\r
    protected void protectedMethod() {\r
        System.out.println("Parent protected method");\r
    }\r
    \r
    // Default (package-private) method\r
    void defaultMethod() {\r
        System.out.println("Parent default method");\r
    }\r
    \r
    // Method with return type\r
    Number getNumber() {\r
        return 100;\r
    }\r
    \r
    // Method with exception\r
    void riskyMethod() throws Exception {\r
        System.out.println("Parent risky method");\r
    }\r
    \r
    // Final method - cannot be overridden\r
    public final void finalMethod() {\r
        System.out.println("Parent final method - cannot override");\r
    }\r
    \r
    // Static method - hidden, not overridden\r
    public static void staticMethod() {\r
        System.out.println("Parent static method");\r
    }\r
    \r
    // Private method - not inherited\r
    private void privateMethod() {\r
        System.out.println("Parent private method");\r
    }\r
}\r
\r
class ChildClass extends ParentClass {\r
    // CORRECT: Can increase access (public is broader than protected)\r
    @Override\r
    public void protectedMethod() {\r
        System.out.println("Child protected method (now public)");\r
    }\r
    \r
    // CORRECT: Can keep same access\r
    @Override\r
    public void defaultMethod() {\r
        System.out.println("Child default method");\r
    }\r
    \r
    // CORRECT: Covariant return type\r
    @Override\r
    public Integer getNumber() {\r
        return 200;\r
    }\r
    \r
    // CORRECT: Can throw narrower exception\r
    @Override\r
    void riskyMethod() throws RuntimeException {\r
        System.out.println("Child risky method - narrower exception");\r
    }\r
    \r
    // CANNOT override final method\r
    // @Override\r
    // public void finalMethod() { }  // COMPILER ERROR!\r
    \r
    // CANNOT override static method (this is hiding, not overriding)\r
    public static void staticMethod() {\r
        System.out.println("Child static method - hiding parent");\r
    }\r
    \r
    // CANNOT override private method (not visible)\r
    // @Override\r
    // private void privateMethod() { }  // COMPILER ERROR!\r
    \r
    // This would cause error: weaker access\r
    // @Override\r
    // private void publicMethod() { }  // COMPILER ERROR!\r
}\r
\r
public class OverridingRules {\r
    public static void main(String[] args) {\r
        System.out.println("=== Method Overriding Rules ===\\n");\r
        \r
        ChildClass child = new ChildClass();\r
        \r
        System.out.println("--- Allowed Overrides ---");\r
        child.publicMethod();\r
        child.protectedMethod();\r
        child.defaultMethod();\r
        \r
        System.out.println("\\n--- Covariant Return Type ---");\r
        Number num = child.getNumber();\r
        System.out.println("Return type: " + num.getClass().getSimpleName());\r
        System.out.println("Value: " + num);\r
        \r
        System.out.println("\\n--- Exception Handling ---");\r
        child.riskyMethod();\r
        \r
        System.out.println("\\n--- Static Method Hiding ---");\r
        ChildClass.staticMethod();\r
        ParentClass.staticMethod();\r
        \r
        System.out.println("\\n--- Summary of Rules ---");\r
        System.out.println("✓ Same method name & parameters");\r
        System.out.println("✓ Same or covariant return type");\r
        System.out.println("✓ Same or broader access modifier");\r
        System.out.println("✓ Same or narrower exceptions");\r
        System.out.println("✗ Cannot override final methods");\r
        System.out.println("✗ Cannot override private methods");\r
        System.out.println("✗ Cannot override static methods (hidden)");\r
    }\r
}`,h=[{question:"Can private methods be overridden?",shortAnswer:"No, private methods cannot be overridden.",explanation:"Private methods are not inherited by child classes. Since overriding depends on inheritance, private methods are not accessible in subclasses.",hint:"Can child class access private members?",level:"basic"},{question:"What is runtime polymorphism?",shortAnswer:"Method call resolved at runtime.",explanation:"In runtime polymorphism, the method that gets executed is determined by the actual object type, not the reference type.",hint:"Think: object type vs reference type",level:"basic"},{question:"What is the role of @Override annotation?",shortAnswer:"Ensures correct overriding.",explanation:"It tells the compiler that the method should override a parent method. If not, it throws a compile-time error.",hint:"Helps detect mistakes early",level:"basic"},{question:"Can constructors be overridden?",shortAnswer:"No, constructors cannot be overridden.",explanation:"Constructors are not inherited, so they cannot be overridden. They are called using super().",hint:"Overriding requires inheritance",level:"basic"},{question:"Can we change return type in overriding?",shortAnswer:"Yes, using covariant return type.",explanation:"The return type can be changed only if it is a subclass of the original return type.",hint:"Subtype allowed",level:"basic"},{question:"What happens if we don't override a method?",shortAnswer:"Parent method is used.",explanation:"If the child class does not override a method, it inherits and uses the parent class implementation.",hint:"Inheritance default behavior",level:"basic"},{question:"Can abstract methods be overridden?",shortAnswer:"Yes, they must be overridden.",explanation:"Abstract methods do not have implementation, so subclasses must provide implementation.",hint:"Mandatory override",level:"basic"},{question:"Can we increase visibility while overriding?",shortAnswer:"Yes, visibility can be increased.",explanation:"A method can be made more accessible (e.g., protected → public), but not less accessible.",hint:"Access can expand",level:"basic"},{question:"What is method hiding?",shortAnswer:"Static methods are hidden, not overridden.",explanation:"Static methods belong to class, not object. So they are resolved at compile-time and hidden instead of overridden.",hint:"Static = compile-time",level:"basic"},{question:"Difference between overloading and overriding?",shortAnswer:"Overloading = same class, overriding = inheritance.",explanation:"Overloading uses different parameters, overriding uses same signature in subclass.",hint:"Compile-time vs runtime",level:"basic"},{question:"Can static methods be overridden?",shortAnswer:"No, they are hidden.",explanation:"Static methods belong to class, so they are resolved at compile-time and cannot be overridden.",hint:"Static methods are not polymorphic",level:"intermediate"},{question:"Can final methods be overridden?",shortAnswer:"No, final methods cannot be overridden.",explanation:"The final keyword prevents method overriding to ensure behavior remains unchanged.",hint:"Final = no change allowed",level:"intermediate"},{question:"What is super keyword in overriding?",shortAnswer:"Used to call parent method.",explanation:"super allows access to parent class methods that are overridden in the child class.",hint:"Call parent version",level:"intermediate"},{question:"Can interface methods be overridden?",shortAnswer:"Yes, they must be implemented.",explanation:"All abstract methods in interfaces must be implemented (overridden) by the class.",hint:"Interfaces require implementation",level:"intermediate"},{question:"What is dynamic binding?",shortAnswer:"Method call resolved at runtime.",explanation:"Dynamic binding ensures the correct overridden method is called based on object type.",hint:"Runtime decision",level:"intermediate"},{question:"Can overriding method throw exceptions?",shortAnswer:"Yes, but with restrictions.",explanation:"Child method cannot throw broader checked exceptions than parent method.",hint:"Exception hierarchy matters",level:"intermediate"},{question:"Can we override methods from Object class?",shortAnswer:"Yes.",explanation:"Methods like toString(), equals(), and hashCode() can be overridden for custom behavior.",hint:"Commonly overridden methods",level:"intermediate"},{question:"What happens if method signature differs slightly?",shortAnswer:"It becomes overloading.",explanation:"Even a small change in parameters results in a different method, not overriding.",hint:"Exact match required",level:"intermediate"},{question:"Can we override a method and make it final?",shortAnswer:"Yes.",explanation:"A child class can override a method and prevent further overriding using final keyword.",hint:"Stops further inheritance",level:"intermediate"},{question:"Can we override synchronized methods?",shortAnswer:"Yes.",explanation:"Synchronization is not part of method signature, so it can be added or removed.",hint:"Not part of signature",level:"intermediate"},{question:"What happens if parent method is static and child defines non-static?",shortAnswer:"Compilation error.",explanation:"Static and non-static methods cannot override each other due to different binding mechanisms.",hint:"Mismatch type",level:"expert"},{question:"Can overriding method throw unchecked exception?",shortAnswer:"Yes.",explanation:"Unchecked exceptions are not restricted in overriding.",hint:"Runtime exceptions",level:"expert"},{question:"Can we override methods from multiple interfaces?",shortAnswer:"Yes.",explanation:"A single implementation satisfies all interface methods with same signature.",hint:"One method, many interfaces",level:"expert"},{question:"What if two interfaces have same default method?",shortAnswer:"Must override it.",explanation:"The class must resolve ambiguity by overriding the method explicitly.",hint:"Diamond problem",level:"expert"},{question:"Can we call overridden method using parent reference?",shortAnswer:"Yes, but runtime decides.",explanation:"Method execution depends on actual object type, not reference type.",hint:"Polymorphism rule",level:"expert"},{question:"Can we override methods in anonymous classes?",shortAnswer:"Yes.",explanation:"Anonymous classes commonly override methods inline.",hint:"Inline subclass",level:"expert"},{question:"What is bridge method?",shortAnswer:"Compiler-generated method.",explanation:"Bridge methods ensure polymorphism works with generics after type erasure.",hint:"JVM internal concept",level:"expert"},{question:"How does overriding work with generics?",shortAnswer:"Based on erased types.",explanation:"Due to type erasure, overriding works on raw types at runtime.",hint:"Generics removed at runtime",level:"expert"},{question:"Can default methods be overridden?",shortAnswer:"Yes.",explanation:"Default methods in interfaces can be overridden by implementing classes.",hint:"Java 8 feature",level:"expert"},{question:"What is performance impact of overriding?",shortAnswer:"Slight overhead.",explanation:"Dynamic method dispatch is slightly slower than static binding, but negligible in real-world use.",hint:"Runtime resolution",level:"expert"}],N=()=>{const[p,u]=i.useState({}),[r,t]=i.useState("basic");return e.jsxs("div",{className:"w-full max-w-6xl mx-auto px-4 py-8 space-y-8 dark:bg-gray-900 bg-gray-50 transition-colors duration-300",children:[e.jsxs("div",{className:"animate-[fadeSlideUp_0.6s_ease-out] motion-safe:animate-[fadeSlideUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-blue-500 pl-4",children:"Method Overriding in Java"}),e.jsxs("p",{className:"text-lg text-gray-700 dark:text-gray-300 leading-relaxed",children:["Method overriding allows a subclass to provide a ",e.jsx("strong",{className:"text-blue-600 dark:text-blue-400",children:"specific implementation"}),"of a method that is already defined in its parent class. It's a cornerstone of runtime polymorphism and enables flexible, extensible code."]})]}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.1s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center",children:"🎯 What is Method Overriding?"}),e.jsxs("div",{className:"flex flex-col lg:flex-row gap-8 items-center justify-between",children:[e.jsx("div",{className:"flex-1",children:e.jsxs("svg",{viewBox:"0 0 500 350",className:"w-full max-w-md mx-auto",children:[e.jsx("rect",{x:"150",y:"20",width:"200",height:"80",rx:"8",fill:"#3B82F6",stroke:"#2563EB",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"250",y:"55",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Parent Class"}),e.jsx("text",{x:"250",y:"75",textAnchor:"middle",fill:"white",fontSize:"12",children:"makeSound()"}),e.jsx("line",{x1:"250",y1:"100",x2:"250",y2:"140",stroke:"#F59E0B",strokeWidth:"3",markerEnd:"url(#arrowOverride)",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",fill:"freeze"})}),e.jsx("text",{x:"260",y:"125",fill:"#F59E0B",fontSize:"12",children:"extends"}),e.jsx("rect",{x:"100",y:"150",width:"300",height:"160",rx:"8",fill:"#1F2937",stroke:"#10B981",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"})}),e.jsx("text",{x:"250",y:"180",textAnchor:"middle",fill:"#10B981",fontSize:"14",fontWeight:"bold",children:"Child Class"}),e.jsx("rect",{x:"120",y:"195",width:"260",height:"35",rx:"4",fill:"#374151",stroke:"#F59E0B",strokeWidth:"1.5"}),e.jsx("text",{x:"250",y:"217",textAnchor:"middle",fill:"#F59E0B",fontSize:"12",fontWeight:"bold",children:'@Override makeSound() → "Woof!"'}),e.jsx("rect",{x:"120",y:"240",width:"260",height:"35",rx:"4",fill:"#374151",stroke:"#8B5CF6",strokeWidth:"1.5"}),e.jsx("text",{x:"250",y:"262",textAnchor:"middle",fill:"#8B5CF6",fontSize:"12",fontWeight:"bold",children:'@Override move() → "Run quickly!"'}),e.jsx("rect",{x:"120",y:"285",width:"260",height:"35",rx:"4",fill:"#374151",stroke:"#EC4899",strokeWidth:"1.5"}),e.jsx("text",{x:"250",y:"307",textAnchor:"middle",fill:"#EC4899",fontSize:"12",fontWeight:"bold",children:"eat() → New method (not overridden)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowOverride",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#F59E0B"})})})]})}),e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsx("strong",{className:"text-blue-600 dark:text-blue-400",children:"Method Overriding"})," happens when a child class redefines a method from its parent class with the ",e.jsx("strong",{children:"same name, same parameters, and same return type"}),"."]})}),e.jsx("div",{className:"bg-green-50 dark:bg-green-900/20 p-4 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["💡 ",e.jsx("strong",{children:"Key Point:"})," The version of the method that gets called depends on the ",e.jsx("strong",{children:"actual object type"}),"at runtime, not the reference variable type."]})})]})]})]})}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.2s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.2s]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"📝 Method Signature & Rules"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-bold text-gray-900 dark:text-white mb-2",children:"✅ Allowed in Overriding"}),e.jsxs("ul",{className:"space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("li",{className:"flex items-start gap-2",children:"• Same method name"}),e.jsx("li",{className:"flex items-start gap-2",children:"• Same parameter list (type & order)"}),e.jsx("li",{className:"flex items-start gap-2",children:"• Same return type (or covariant return type)"}),e.jsx("li",{className:"flex items-start gap-2",children:"• Can have broader access modifier"}),e.jsx("li",{className:"flex items-start gap-2",children:"• Can throw fewer or narrower exceptions"})]})]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-bold text-gray-900 dark:text-white mb-2",children:"❌ Not Allowed in Overriding"}),e.jsxs("ul",{className:"space-y-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsx("li",{className:"flex items-start gap-2",children:"• Cannot have weaker access (public → private)"}),e.jsx("li",{className:"flex items-start gap-2",children:"• Cannot throw broader checked exceptions"}),e.jsx("li",{className:"flex items-start gap-2",children:"• Cannot override static methods (they're hidden)"}),e.jsx("li",{className:"flex items-start gap-2",children:"• Cannot override final methods"}),e.jsx("li",{className:"flex items-start gap-2",children:"• Cannot override private methods"})]})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500",children:e.jsxs("p",{className:"text-sm text-yellow-800 dark:text-yellow-200",children:["💡 ",e.jsx("strong",{children:"Remember:"})," The ",e.jsx("code",{className:"bg-yellow-100 dark:bg-yellow-900 px-1 rounded",children:"@Override"})," annotation is optional but highly recommended. It helps the compiler catch errors if you're not actually overriding a method!"]})})]})}),e.jsxs("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.3s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.3s]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"flex flex-wrap gap-3 mb-6",children:[e.jsx("button",{onClick:()=>t("basic"),className:n("px-4 py-2 rounded-lg font-medium transition-all duration-300",r==="basic"?"bg-blue-500 text-white shadow-md":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),children:"Basic Overriding"}),e.jsx("button",{onClick:()=>t("annotation"),className:n("px-4 py-2 rounded-lg font-medium transition-all duration-300",r==="annotation"?"bg-green-500 text-white shadow-md":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),children:"@Override Annotation"}),e.jsx("button",{onClick:()=>t("realworld"),className:n("px-4 py-2 rounded-lg font-medium transition-all duration-300",r==="realworld"?"bg-purple-500 text-white shadow-md":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),children:"Real-World Example"}),e.jsx("button",{onClick:()=>t("rules"),className:n("px-4 py-2 rounded-lg font-medium transition-all duration-300",r==="rules"?"bg-orange-500 text-white shadow-md":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),children:"Rules Demo"})]}),e.jsxs("div",{className:"space-y-6",children:[r==="basic"&&e.jsx(a,{fileModule:l,title:"BasicMethodOverriding.java",highlightLines:[17,18,19,29,30,31]}),r==="annotation"&&e.jsx(a,{fileModule:d,title:"OverrideAnnotation.java",highlightLines:[8,9,10,20,21,22]}),r==="realworld"&&e.jsx(a,{fileModule:c,title:"RealWorldOverride.java",highlightLines:[15,16,17,28,29,30,40,41,42]}),r==="rules"&&e.jsx(a,{fileModule:m,title:"OverridingRules.java",highlightLines:[12,13,14,27,28,29]})]})]}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.4s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.4s]",children:e.jsxs("div",{className:"bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-3",children:"🔄 Covariant Return Type"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed mb-4",children:["Java 5+ allows an overridden method to return a ",e.jsx("strong",{className:"text-purple-600",children:"subtype"})," of the parent method's return type. This is called ",e.jsx("strong",{children:"covariant return type"})," and makes overriding more flexible."]}),e.jsx("div",{className:"bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-200 overflow-x-auto",children:e.jsx("pre",{className:"whitespace-pre-wrap",children:`class Parent {
    Number getValue() {
        return 100;
    }
}

class Child extends Parent {
    @Override
    Integer getValue() {  // Integer is a subtype of Number
        return 200;
    }
}`})}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-3",children:["💡 ",e.jsx("strong",{children:"Pro Tip:"})," Covariant return types eliminate the need for explicit casting and make APIs more intuitive."]})]})}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.5s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.5s]",children:e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"💡 Professional Tips & Industry Habits"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-2 p-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300",children:[e.jsx("span",{className:"text-blue-500 text-xl",children:"✓"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Always use @Override annotation"})," — It catches subtle errors like misspelled method names or incorrect parameters."]})]}),e.jsxs("li",{className:"flex items-start gap-2 p-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300",children:[e.jsx("span",{className:"text-blue-500 text-xl",children:"✓"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Don't change the method's purpose"})," — Overriding should enhance or specialize behavior, not completely change it (Liskov Substitution Principle)."]})]}),e.jsxs("li",{className:"flex items-start gap-2 p-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300",children:[e.jsx("span",{className:"text-blue-500 text-xl",children:"✓"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Use super.method() when needed"})," — Sometimes you want to extend parent behavior, not replace it entirely."]})]}),e.jsxs("li",{className:"flex items-start gap-2 p-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300",children:[e.jsx("span",{className:"text-blue-500 text-xl",children:"✓"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Debugging mindset:"})," When debugging overridden methods, check the actual object type, not the reference type."]})]})]})]})}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.6s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.6s]",children:e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-red-500",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-2 p-2 rounded hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors duration-300",children:[e.jsx("span",{className:"text-red-500 font-bold",children:"•"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Forgetting @Override annotation:"})," Without it, you might accidentally overload instead of override."]})]}),e.jsxs("li",{className:"flex items-start gap-2 p-2 rounded hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors duration-300",children:[e.jsx("span",{className:"text-red-500 font-bold",children:"•"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Changing parameter types:"})," Different parameters = overloading, not overriding."]})]}),e.jsxs("li",{className:"flex items-start gap-2 p-2 rounded hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors duration-300",children:[e.jsx("span",{className:"text-red-500 font-bold",children:"•"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Weaker access modifier:"})," Changing public to private causes compilation error."]})]}),e.jsxs("li",{className:"flex items-start gap-2 p-2 rounded hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors duration-300",children:[e.jsx("span",{className:"text-red-500 font-bold",children:"•"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"IDE Error:"}),' "Method does not override method from its superclass" — Fix by checking method signature.']})]})]})]})}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.7s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.7s]",children:e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-3",children:"✅ Best Practices Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 p-2 rounded hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-300",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-green-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"✓ Always use @Override annotation"})]}),e.jsxs("div",{className:"flex items-center gap-2 p-2 rounded hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-300",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-green-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"✓ Maintain same method signature"})]}),e.jsxs("div",{className:"flex items-center gap-2 p-2 rounded hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-300",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-green-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"✓ Don't narrow access modifiers"})]}),e.jsxs("div",{className:"flex items-center gap-2 p-2 rounded hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-300",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-green-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"✓ Call super method when appropriate"})]}),e.jsxs("div",{className:"flex items-center gap-2 p-2 rounded hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-300",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-green-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"✓ Follow Liskov Substitution Principle"})]}),e.jsxs("div",{className:"flex items-center gap-2 p-2 rounded hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-300",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-green-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"✓ Document overridden methods"})]})]})]})}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.8s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.8s]",children:e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-3",children:"📋 Student Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 p-2 rounded hover:bg-yellow-100 dark:hover:bg-yellow-900/20 transition-colors duration-300",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-yellow-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I understand what method overriding is"})]}),e.jsxs("div",{className:"flex items-center gap-2 p-2 rounded hover:bg-yellow-100 dark:hover:bg-yellow-900/20 transition-colors duration-300",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-yellow-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I know the rules of overriding"})]}),e.jsxs("div",{className:"flex items-center gap-2 p-2 rounded hover:bg-yellow-100 dark:hover:bg-yellow-900/20 transition-colors duration-300",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-yellow-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I can use @Override annotation correctly"})]}),e.jsxs("div",{className:"flex items-center gap-2 p-2 rounded hover:bg-yellow-100 dark:hover:bg-yellow-900/20 transition-colors duration-300",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-yellow-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I understand covariant return types"})]}),e.jsxs("div",{className:"flex items-center gap-2 p-2 rounded hover:bg-yellow-100 dark:hover:bg-yellow-900/20 transition-colors duration-300",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-yellow-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I can distinguish overriding from overloading"})]}),e.jsxs("div",{className:"flex items-center gap-2 p-2 rounded hover:bg-yellow-100 dark:hover:bg-yellow-900/20 transition-colors duration-300",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-yellow-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I know why overriding is important for polymorphism"})]})]})]})}),e.jsx(o,{title:"Inheritance FAQs",questions:h}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.9s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.9s]",children:e.jsx(s,{note:"Method overriding is where polymorphism truly shines! Use the Animal example (Swadeep's pet dog vs Tuhina's pet cat) to show how the same 'makeSound()' method produces different outputs. Emphasize that overriding is about BEHAVIOR specialization, not just code reuse. Show students the difference between overriding (runtime) and overloading (compile-time). A great exercise: Have students create a 'Vehicle' class with 'start()' method, then override it in 'Car', 'Bike', and 'Auto' classes from Barrackpore, Shyamnagar, and Ichapur respectively."})}),e.jsx("div",{className:"text-center text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 p-3 rounded",children:e.jsxs("p",{children:["💭 ",e.jsx("strong",{children:"Think about:"})," If you remove @Override but keep the same method signature, what happens? Try changing the parameter type slightly — is it still overriding?"]})}),e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate\\[fadeSlideUp.*\\] {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `})]})};export{N as default};
