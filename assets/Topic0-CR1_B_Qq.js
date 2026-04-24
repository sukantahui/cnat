import{r as a,j as e}from"./index-Da242x_v.js";import{T as n}from"./TeacherSukantaHui-CPTgRfho.js";import{J as t}from"./JavaFileLoader-ByXlwT7S.js";import{F as s}from"./FAQTemplate-oa9iEk_9.js";import"./git-branch-DA1yYObF.js";import"./JavaCodeBlock-Dra3Hw0G.js";import"./prism-zhFG2M2I.js";import"./browser-B29B4uVk.js";import"./prism-java-BwO6k4I_.js";import"./clsx-B-dksMZM.js";const r=`// Basic Inheritance Example - Demonstrating simple inheritance\r
class Employee {\r
    String name;\r
    int id;\r
    \r
    public void work() {\r
        System.out.println(name + " (ID: " + id + ") is working");\r
    }\r
    \r
    public void displayInfo() {\r
        System.out.println("Employee Name: " + name);\r
        System.out.println("Employee ID: " + id);\r
    }\r
}\r
\r
class Developer extends Employee {\r
    String programmingLanguage;\r
    \r
    public void writeCode() {\r
        System.out.println(name + " is writing " + programmingLanguage + " code");\r
    }\r
    \r
    public void debug() {\r
        System.out.println(name + " is debugging the application");\r
    }\r
}\r
\r
public class InheritanceExample1 {\r
    public static void main(String[] args) {\r
        // Creating a Developer object\r
        Developer dev = new Developer();\r
        \r
        // Setting inherited properties\r
        dev.name = "Swadeep";\r
        dev.id = 101;\r
        dev.programmingLanguage = "Java";\r
        \r
        // Calling inherited method\r
        dev.displayInfo();\r
        \r
        // Calling own methods\r
        dev.writeCode();\r
        dev.debug();\r
        \r
        // Calling inherited work method\r
        dev.work();\r
    }\r
}\r
\r
/* OUTPUT:\r
Employee Name: Swadeep\r
Employee ID: 101\r
Swadeep is writing Java code\r
Swadeep is debugging the application\r
Swadeep (ID: 101) is working\r
*/`,i=`// Real-world School Management System Example\r
class Person {\r
    String name;\r
    int age;\r
    String address;\r
    \r
    public void introduce() {\r
        System.out.println("Hi, I'm " + name + " from " + address);\r
    }\r
    \r
    public void celebrateBirthday() {\r
        age++;\r
        System.out.println(name + " is now " + age + " years old!");\r
    }\r
}\r
\r
class Student extends Person {\r
    int rollNumber;\r
    String grade;\r
    String[] subjects = {"Math", "Science", "English"};\r
    \r
    public void study() {\r
        System.out.println(name + " is studying for " + grade + " grade");\r
    }\r
    \r
    public void attendClass() {\r
        System.out.println("Student " + name + " (Roll No: " + rollNumber + ") is attending class");\r
    }\r
    \r
    public void showSubjects() {\r
        System.out.print(name + "'s subjects: ");\r
        for(String subject : subjects) {\r
            System.out.print(subject + " ");\r
        }\r
        System.out.println();\r
    }\r
}\r
\r
class Teacher extends Person {\r
    String employeeId;\r
    String subject;\r
    \r
    public void teach() {\r
        System.out.println("Teacher " + name + " is teaching " + subject);\r
    }\r
    \r
    public void gradePapers() {\r
        System.out.println(name + " is grading " + subject + " papers");\r
    }\r
}\r
\r
public class InheritanceExample2 {\r
    public static void main(String[] args) {\r
        System.out.println("=== School Management System ===\\n");\r
        \r
        // Creating a Student from Barrackpore\r
        Student student = new Student();\r
        student.name = "Tuhina";\r
        student.age = 15;\r
        student.address = "Barrackpore";\r
        student.rollNumber = 25;\r
        student.grade = "10th";\r
        \r
        student.introduce();\r
        student.study();\r
        student.attendClass();\r
        student.showSubjects();\r
        student.celebrateBirthday();\r
        \r
        System.out.println("\\n--- --- ---\\n");\r
        \r
        // Creating a Teacher from Shyamnagar\r
        Teacher teacher = new Teacher();\r
        teacher.name = "Abhronila";\r
        teacher.age = 32;\r
        teacher.address = "Shyamnagar";\r
        teacher.employeeId = "TCH-789";\r
        teacher.subject = "Computer Science";\r
        \r
        teacher.introduce();\r
        teacher.teach();\r
        teacher.gradePapers();\r
        teacher.celebrateBirthday();\r
    }\r
}\r
\r
/* OUTPUT:\r
=== School Management System ===\r
\r
Hi, I'm Tuhina from Barrackpore\r
Tuhina is studying for 10th grade\r
Student Tuhina (Roll No: 25) is attending class\r
Tuhina's subjects: Math Science English \r
Tuhina is now 16 years old!\r
\r
--- --- ---\r
\r
Hi, I'm Abhronila from Shyamnagar\r
Teacher Abhronila is teaching Computer Science\r
Abhronila is grading Computer Science papers\r
Abhronila is now 33 years old!\r
*/`,l=`// Multi-level Inheritance with Different Access Modifiers\r
class GrandParent {\r
    public String publicInfo = "Everyone can see this";\r
    protected String protectedInfo = "Family can see this";\r
    private String privateInfo = "Only grandparent knows this";\r
    String defaultInfo = "Package level access";\r
    \r
    public void showAccessModifiers() {\r
        System.out.println("Inside GrandParent:");\r
        System.out.println("  - Can access privateInfo: " + privateInfo);\r
        System.out.println("  - Can access protectedInfo: " + protectedInfo);\r
        System.out.println("  - Can access publicInfo: " + publicInfo);\r
        System.out.println("  - Can access defaultInfo: " + defaultInfo);\r
    }\r
    \r
    protected void familyTradition() {\r
        System.out.println("Family tradition passed down generations!");\r
    }\r
}\r
\r
class Parent extends GrandParent {\r
    String familyName = "Chatterjee";\r
    String location = "Ichapur";\r
    \r
    public void showWhatInherited() {\r
        System.out.println("\\nInside Parent (from Ichapur):");\r
        System.out.println("  - Can access publicInfo: " + publicInfo);\r
        System.out.println("  - Can access protectedInfo: " + protectedInfo);\r
        // System.out.println(privateInfo); // ERROR! Cannot access private member\r
        System.out.println("  - Can access defaultInfo: " + defaultInfo);\r
        System.out.println("  - Family Name: " + familyName);\r
    }\r
    \r
    public void modifyFamilyInfo() {\r
        protectedInfo = "Modified by Parent from " + location;\r
        System.out.println("Parent modified protectedInfo: " + protectedInfo);\r
    }\r
}\r
\r
class Child extends Parent {\r
    String schoolName = "Naihati High School";\r
    int standard = 8;\r
    \r
    public void showAllAccess() {\r
        System.out.println("\\nInside Child (studying at " + schoolName + "):");\r
        System.out.println("  - Can access publicInfo: " + publicInfo);\r
        System.out.println("  - Can access protectedInfo: " + protectedInfo);\r
        System.out.println("  - Can access defaultInfo: " + defaultInfo);\r
        System.out.println("  - Family Name: " + familyName);\r
        System.out.println("  - Location: " + location);\r
        System.out.println("  - Standard: " + standard);\r
    }\r
    \r
    public void practiceTradition() {\r
        familyTradition(); // Can call protected method from GrandParent\r
        System.out.println("Child " + familyName + " continues the tradition in " + location);\r
    }\r
}\r
\r
public class InheritanceExample3 {\r
    public static void main(String[] args) {\r
        System.out.println("=== Multi-level Inheritance Demo ===\\n");\r
        \r
        // Creating objects at different levels\r
        GrandParent gp = new GrandParent();\r
        Parent parent = new Parent();\r
        Child child = new Child();\r
        \r
        // Demonstrate inheritance chain\r
        System.out.println("--- GrandParent Level ---");\r
        gp.showAccessModifiers();\r
        \r
        System.out.println("\\n--- Parent Level (extends GrandParent) ---");\r
        parent.showWhatInherited();\r
        parent.modifyFamilyInfo();\r
        \r
        System.out.println("\\n--- Child Level (extends Parent) ---");\r
        child.showAllAccess();\r
        child.practiceTradition();\r
        \r
        // Demonstrate protected member modification across chain\r
        System.out.println("\\n--- Protected Member Across Chain ---");\r
        System.out.println("Original protectedInfo in GrandParent: " + gp.protectedInfo);\r
        System.out.println("After Parent modification: " + parent.protectedInfo);\r
        System.out.println("Child sees modified value: " + child.protectedInfo);\r
        \r
        // Demonstrating inheritance of methods\r
        System.out.println("\\n--- Method Inheritance ---");\r
        child.familyTradition(); // Inherited from GrandParent\r
        child.modifyFamilyInfo(); // Inherited from Parent\r
    }\r
}\r
\r
/* OUTPUT HIGHLIGHTS:\r
- Demonstrates what members are inherited (public, protected, default)\r
- Shows that private members are NOT inherited\r
- Multi-level inheritance: Child → Parent → GrandParent\r
- Protected members accessible throughout inheritance chain\r
- Shows real locations: Ichapur, Naihati\r
*/`,o=[{question:"What is inheritance in object-oriented programming?",shortAnswer:"Inheritance allows a class to acquire properties and methods from another class.",explanation:"Inheritance is a mechanism where a new class (child/subclass) inherits fields and methods from an existing class (parent/superclass). It represents an 'is-a' relationship and promotes code reusability.",hint:"Think of a child inheriting traits from parents.",level:"basic",codeExample:"class Parent { } class Child extends Parent { }"},{question:"Which keyword is used to implement inheritance in Java?",shortAnswer:"extends",explanation:"The 'extends' keyword is used to create a subclass that inherits from a superclass.",hint:"It's the same word used for extending functionality.",level:"basic"},{question:"What type of relationship does inheritance represent?",shortAnswer:"is-a relationship",explanation:"Inheritance models an 'is-a' relationship, meaning a child class is a specialized version of the parent class (e.g., Car is a Vehicle).",hint:"Like 'Dog is an Animal'.",level:"basic"},{question:"What is the main benefit of using inheritance?",shortAnswer:"Code reusability",explanation:"Inheritance allows child classes to reuse code from parent classes, reducing duplication and making maintenance easier.",hint:"Don't repeat yourself (DRY).",level:"basic"},{question:"Can a Java class inherit from more than one parent class directly?",shortAnswer:"No",explanation:"Java does not support multiple inheritance with classes to avoid ambiguity (the diamond problem). A class can only extend one parent class.",hint:"Single inheritance only for classes.",level:"basic"},{question:"What is the parent class of all Java classes?",shortAnswer:"Object class",explanation:"Every class in Java implicitly extends the Object class, which provides basic methods like toString(), equals(), and hashCode().",hint:"The root of the class hierarchy.",level:"basic"},{question:"Are private members of a parent class inherited by the child class?",shortAnswer:"No",explanation:"Private fields and methods are not inherited. They can only be accessed within the class they are declared. Child classes cannot directly access private members of the parent.",hint:"Private means only the owner can see it.",level:"basic"},{question:"What is the difference between inheritance and composition?",shortAnswer:"Inheritance is 'is-a', composition is 'has-a'.",explanation:"Inheritance creates a parent-child relationship where the child is a specialized version of the parent. Composition means a class contains objects of other classes (e.g., a Car has an Engine).",hint:"'Has-a' vs 'is-a'.",level:"basic"},{question:"Can a class be both a parent and a child at the same time?",shortAnswer:"Yes",explanation:"A class can extend another class (making it a child) and also be extended by other classes (making it a parent). This creates a multilevel inheritance chain.",hint:"Example: A extends B, B extends C → B is both child and parent.",level:"basic",codeExample:"class GrandParent { } class Parent extends GrandParent { } class Child extends Parent { }"},{question:"What happens if you don't specify 'extends' for a class?",shortAnswer:"It implicitly extends Object.",explanation:"If no parent class is specified, Java automatically makes the class a direct child of the Object class.",hint:"Object is the default parent.",level:"basic"},{question:"Why should inheritance be used only for 'is-a' relationships?",shortAnswer:"To maintain logical design and avoid misuse.",explanation:"Using inheritance for non 'is-a' relationships (e.g., a Car inheriting from Engine) leads to confusing, fragile code. Composition is better for 'has-a' relationships.",hint:"If it doesn't feel natural (e.g., 'Manager is an Employee' works, but 'Manager is a Salary' does not).",level:"intermediate"},{question:"What is the Liskov Substitution Principle?",shortAnswer:"Child objects must be substitutable for parent objects.",explanation:"The principle states that if a class is a subclass, it should be usable wherever the parent class is expected without breaking the program. This ensures proper inheritance design.",hint:"A Developer should be able to replace an Employee without issues.",level:"intermediate"},{question:"What is method overriding?",shortAnswer:"Redefining a parent class method in the child class.",explanation:"When a child class provides its own implementation of a method already defined in the parent, it overrides the parent's version. This enables runtime polymorphism.",hint:"Child can change the behavior.",level:"intermediate",codeExample:'class Animal { void sound() { System.out.println("Some sound"); } } class Dog extends Animal { @Override void sound() { System.out.println("Bark"); } }'},{question:"Can a child class add new methods not present in the parent?",shortAnswer:"Yes",explanation:"Inheritance allows the child class to extend the parent by adding new fields and methods. This is how specialization works.",hint:"Child can have extra features.",level:"intermediate"},{question:"What is the 'super' keyword used for in inheritance?",shortAnswer:"To refer to the parent class.",explanation:"'super' is used to access parent class methods, variables, or constructors, especially when they are hidden or overridden by the child class.",hint:"Think of 'super' as calling the parent version.",level:"intermediate"},{question:"What is constructor chaining in inheritance?",shortAnswer:"Calling parent constructors from child constructors.",explanation:"Every child constructor implicitly calls the parent's no-argument constructor (super()) as the first statement. If the parent lacks a no-arg constructor, the child must explicitly call a parameterized parent constructor.",hint:"The chain always starts from the top (Object) down to the child.",level:"intermediate"},{question:"Why does Java allow multilevel inheritance but not multiple inheritance with classes?",shortAnswer:"To avoid ambiguity and the diamond problem.",explanation:"Multilevel inheritance (A→B→C) is linear and safe. Multiple inheritance (A inherits from B and C) can cause conflicts if B and C have methods with the same signature. Java uses interfaces to provide multiple inheritance of type without ambiguity.",hint:"Two parents may disagree on the same method.",level:"intermediate"},{question:"What is the difference between method overriding and method overloading?",shortAnswer:"Overriding changes parent method in child; overloading adds same-name methods with different parameters.",explanation:"Overriding occurs in inheritance with same method signature; overloading is within the same class or between classes with different parameter lists. Overriding is runtime polymorphism; overloading is compile-time.",hint:"Override = same name, same parameters, different class. Overload = same name, different parameters.",level:"intermediate"},{question:"Can a final class be inherited?",shortAnswer:"No",explanation:"A class declared as 'final' cannot be extended. This is used to prevent inheritance, often for security or immutability reasons (e.g., String class is final).",hint:"Final stops extension.",level:"intermediate"},{question:"What is the default superclass of an interface?",shortAnswer:"None; interfaces do not extend Object.",explanation:"Interfaces do not have a parent class, but any class implementing an interface still extends Object. However, interface methods implicitly inherit from Object if not declared.",hint:"Interfaces are purely abstract types.",level:"intermediate"},{question:"How does the JVM locate a method when called on a subclass object?",shortAnswer:"Dynamic method dispatch (runtime polymorphism).",explanation:"The JVM uses the actual object's class (not the reference type) to determine which method version to execute. This is why overriding works. The method table of the object is consulted at runtime.",hint:"The object knows who it really is.",level:"expert"},{question:"What is the diamond problem in inheritance?",shortAnswer:"Ambiguity when a class inherits from two classes that have a common ancestor.",explanation:"If classes B and C inherit from A, and D inherits from both B and C, then D would have two paths to A's method, causing conflict. Java prevents this by disallowing multiple class inheritance.",hint:"Shape of a diamond: A at top, B and C in middle, D at bottom.",level:"expert",codeExample:"// Not allowed in Java: class D extends B, C { }"},{question:"How does Java solve the diamond problem for interfaces (default methods)?",shortAnswer:"Explicit resolution using super keyword and precedence rules.",explanation:"If a class implements two interfaces with the same default method, the class must override it or specify which interface's version to use using InterfaceName.super.methodName(). If one interface extends another, the child interface's method wins.",hint:"Java 8+ default methods need resolution.",level:"expert"},{question:"What is the 'protected' access modifier's role in inheritance?",shortAnswer:"It allows access within the same package and by subclasses (even in different packages).",explanation:"Protected members are inherited and can be accessed directly in subclasses. This is more permissive than default (package-private) but more restrictive than public.",hint:"Use protected for methods meant to be overridden but not exposed to all.",level:"expert"},{question:"How does inheritance affect memory layout of an object?",shortAnswer:"The child object contains a complete copy of parent object's fields.",explanation:"When a child object is created, memory is allocated for its own fields plus all inherited fields from all ancestors. The object's layout includes a contiguous block containing all fields, from Object down to the child.",hint:"No separate parent object exists; it's one combined object.",level:"expert"},{question:"What is the 'instanceof' operator and how does it relate to inheritance?",shortAnswer:"It checks whether an object is an instance of a particular class or interface.",explanation:"'instanceof' returns true if the object is of the specified type or any subtype (due to inheritance/implementation). It's used for safe casting and type checking.",hint:"Checks 'is-a' relationship at runtime.",level:"expert",codeExample:"if (obj instanceof Employee) { Employee e = (Employee) obj; }"},{question:"Can you override a static method?",shortAnswer:"No, static methods are hidden, not overridden.",explanation:"Static methods belong to the class, not the instance. If a child class defines a static method with the same signature, it hides the parent's static method, but the version called depends on the reference type, not the object type.",hint:"Static methods are resolved at compile-time, not runtime.",level:"expert"},{question:"What is the 'covariant return type' in method overriding?",shortAnswer:"The overriding method can return a subclass of the original return type.",explanation:"Since Java 5, when overriding a method, you may return a more specific type (subclass) than the parent method's return type. This is called covariant return type and is safe because the child object is still compatible with the parent return type.",hint:"Example: Parent method returns Animal; child can return Dog.",level:"expert",codeExample:"class Parent { Number getValue() { return 0; } } class Child extends Parent { @Override Integer getValue() { return 10; } }"},{question:"What are the design trade-offs between inheritance and composition?",shortAnswer:"Inheritance couples classes tightly; composition offers more flexibility and encapsulation.",explanation:"Inheritance exposes parent implementation to child (fragile base class problem) and is fixed at compile time. Composition allows runtime behavior changes, better testing, and adheres to 'favor composition over inheritance' principle. However, inheritance can be simpler for clear 'is-a' hierarchies.",hint:"Composition = has-a, more modular; inheritance = is-a, more direct.",level:"expert"},{question:"What is the 'sealed' class feature introduced in Java 17?",shortAnswer:"Sealed classes restrict which classes can extend them.",explanation:"A sealed class permits only a specified set of subclasses, giving the author control over the inheritance hierarchy. This is useful for domain modeling and pattern matching.",hint:"You decide who can inherit.",level:"expert",codeExample:"sealed class Shape permits Circle, Rectangle { } final class Circle extends Shape { } final class Rectangle extends Shape { }"}],w=()=>{const[d,c]=a.useState(1);return e.jsxs("div",{className:"w-full max-w-6xl mx-auto px-4 py-8 space-y-8 dark:bg-gray-900 bg-gray-50 transition-colors duration-300",children:[e.jsxs("div",{className:"animate-[fadeSlideUp_0.6s_ease-out] motion-safe:animate-[fadeSlideUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-blue-500 pl-4",children:"Concept of Inheritance"}),e.jsxs("p",{className:"text-lg text-gray-700 dark:text-gray-300 leading-relaxed",children:["Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows a class to inherit properties and methods from another class. It represents an ",e.jsx("span",{className:"font-semibold text-blue-600 dark:text-blue-400",children:'"is-a"'})," relationship, promoting code reusability and establishing a natural hierarchy."]})]}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.1s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.1s]  [animation-fill-mode:forwards]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-blue-500 text-3xl",children:"🧬"})," What is Inheritance?"]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed mb-4",children:["In object-oriented programming, ",e.jsx("strong",{className:"text-blue-600 dark:text-blue-400",children:"inheritance"})," enables a new class (called the ",e.jsx("strong",{children:"child"})," or ",e.jsx("strong",{children:"subclass"}),") to acquire the fields and methods of an existing class (called the ",e.jsx("strong",{children:"parent"})," or ",e.jsx("strong",{children:"superclass"}),"). The child class can also add new features or override existing ones."]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:["Think of it like a family tree: children inherit traits from their parents but can also develop unique characteristics. In programming, this means you can create a general class (like ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded",children:"Vehicle"}),") and then create more specific classes (like ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded",children:"Car"}),", ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded",children:"Bike"}),") that reuse and extend the general functionality."]})]})}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.2s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.2s] [animation-fill-mode:forwards]",children:e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"🌍 Real-World Analogy"}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-6 items-center justify-between",children:[e.jsx("div",{className:"flex-1 text-center",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:scale-105 transition-transform duration-300",children:[e.jsxs("svg",{viewBox:"0 0 200 180",className:"w-48 h-48 mx-auto",children:[e.jsx("rect",{x:"50",y:"20",width:"100",height:"60",rx:"8",fill:"#3B82F6",stroke:"#2563EB",strokeWidth:"2"}),e.jsx("text",{x:"100",y:"55",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Employee"}),e.jsx("text",{x:"100",y:"70",textAnchor:"middle",fill:"white",fontSize:"10",children:"(Parent)"}),e.jsx("line",{x1:"100",y1:"80",x2:"100",y2:"100",stroke:"#F59E0B",strokeWidth:"2",markerEnd:"url(#arrowhead)"}),e.jsx("rect",{x:"30",y:"105",width:"65",height:"55",rx:"6",fill:"#10B981",stroke:"#059669",strokeWidth:"2"}),e.jsx("text",{x:"62",y:"130",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"Developer"}),e.jsx("text",{x:"62",y:"145",textAnchor:"middle",fill:"white",fontSize:"9",children:"(Child)"}),e.jsx("rect",{x:"105",y:"105",width:"65",height:"55",rx:"6",fill:"#10B981",stroke:"#059669",strokeWidth:"2"}),e.jsx("text",{x:"137",y:"130",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"Manager"}),e.jsx("text",{x:"137",y:"145",textAnchor:"middle",fill:"white",fontSize:"9",children:"(Child)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#F59E0B"})})})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Inheritance Hierarchy"})]})}),e.jsxs("div",{className:"flex-1 space-y-3",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:["In a school management system, a general class ",e.jsx("strong",{className:"text-blue-600",children:"Employee"})," has properties like ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"id"}),", and methods like ",e.jsx("code",{children:"work()"}),". Specific employee types like ",e.jsx("strong",{className:"text-green-600",children:"Developer"})," and ",e.jsx("strong",{className:"text-green-600",children:"Manager"})," ",e.jsx("span",{className:"font-semibold",children:"inherit"})," these common attributes while adding their own unique features."]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border-l-4 border-yellow-500",children:e.jsxs("p",{className:"text-sm text-yellow-800 dark:text-yellow-200",children:["💡 ",e.jsx("strong",{children:"Think about:"})," How does inheritance help avoid writing duplicate code for ",e.jsx("code",{children:"name"})," and ",e.jsx("code",{children:"id"})," in both Developer and Manager?"]})})]})]})]})}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.3s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.3s]  [animation-fill-mode:forwards]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-3",children:"📝 Java Syntax for Inheritance"}),e.jsx("div",{className:"bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-200 overflow-x-auto",children:e.jsx("pre",{className:"whitespace-pre-wrap",children:`// Parent class (Superclass)
public class Employee {
    String name;
    int id;
    
    public void work() {
        System.out.println(name + " is working");
    }
}

// Child class (Subclass) using 'extends' keyword
public class Developer extends Employee {
    String programmingLanguage;
    
    public void writeCode() {
        System.out.println(name + " is writing " + programmingLanguage + " code");
    }
}`})}),e.jsxs("div",{className:"mt-4 grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg",children:[e.jsxs("p",{className:"font-semibold text-gray-900 dark:text-white",children:["🔑 Keyword: ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-600 px-1 rounded",children:"extends"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Used to declare inheritance. Java supports single inheritance (one parent only)."})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg",children:[e.jsx("p",{className:"font-semibold text-gray-900 dark:text-white",children:"⚙️ Return Type: N/A (class declaration)"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Purpose: Create a hierarchical relationship and enable code reuse."})]})]})]})}),e.jsxs("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.4s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.4s]  [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{fileModule:r,title:"BasicInheritance.java",highlightLines:[8,14]}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800",children:e.jsxs("p",{className:"text-blue-800 dark:text-blue-200 text-sm",children:["🔍 ",e.jsx("strong",{children:"Observe carefully:"})," The Developer class doesn't declare ",e.jsx("code",{children:"name"})," or ",e.jsx("code",{children:"id"}),", but it can access them! Try creating a ",e.jsx("code",{children:"Manager"})," class that extends ",e.jsx("code",{children:"Employee"}),"."]})})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.4s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.4s]  [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"💻 Code Examples 2"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{fileModule:i,title:"BasicInheritance.java 2",highlightLines:[]}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800",children:e.jsx("p",{className:"text-blue-800 dark:text-blue-200 text-sm"})})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.4s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.4s]  [animation-fill-mode:forwards]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"💻 Code Examples 3"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{fileModule:l,title:"BasicInheritance.java 3",highlightLines:[]}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800",children:e.jsx("p",{className:"text-blue-800 dark:text-blue-200 text-sm"})})]})]}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.5s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.5s]  [animation-fill-mode:forwards]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"💡 Pro Tips & Industry Habits"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 text-xl",children:"✓"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:'Use inheritance for "is-a" relationships only'})," — If a ",e.jsx("code",{children:"Car"})," ",e.jsx("strong",{children:"is a"})," ",e.jsx("code",{children:"Vehicle"}),`, inheritance is appropriate. If it's "has-a" (like `,e.jsx("code",{children:"Car"})," has an ",e.jsx("code",{children:"Engine"}),"), use composition instead."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 text-xl",children:"✓"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Keep parent classes generic"})," — The parent should contain common, reusable code. Specific behavior belongs in child classes."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 text-xl",children:"✓"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:'Think of inheritance as "specialization"'})," — Each child class becomes a more specific version of the parent."]})]})]})]})}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.6s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.6s]  [animation-fill-mode:forwards]",children:e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/10 rounded-xl shadow-md p-6 border-l-4 border-red-500",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-red-500 text-2xl",children:"⚠️"})," Common Pitfalls"]}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500 font-bold",children:"•"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Using inheritance when composition is better"})," — Many beginners overuse inheritance, leading to rigid designs."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500 font-bold",children:"•"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Forgetting that Java doesn't support multiple inheritance"})," — A class cannot extend more than one parent class."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500 font-bold",children:"•"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Accessing private members directly"})," — Private fields/methods are NOT inherited. Use protected or public if needed."]})]})]})]})}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.7s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.7s]  [animation-fill-mode:forwards]",children:e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/10 rounded-xl shadow-md p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"✅ Best Practices Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"✓ Follow the Liskov Substitution Principle"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"✓ Use meaningful class names"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"✓ Document inheritance relationships"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"✓ Prefer composition over inheritance when uncertain"})]})]})]})}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.8s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.8s]  [animation-fill-mode:forwards]",children:e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/10 rounded-xl shadow-md p-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-3",children:"📋 Student Checklist"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{className:"flex items-center gap-2 text-gray-700 dark:text-gray-300",children:"□ I understand what inheritance is and why it's used"}),e.jsxs("li",{className:"flex items-center gap-2 text-gray-700 dark:text-gray-300",children:["□ I know the syntax: ",e.jsx("code",{children:"class Child extends Parent"})]}),e.jsx("li",{className:"flex items-center gap-2 text-gray-700 dark:text-gray-300",children:'□ I can identify "is-a" relationships in real-world scenarios'}),e.jsx("li",{className:"flex items-center gap-2 text-gray-700 dark:text-gray-300",children:"□ I understand that private members are not inherited"})]})]})}),e.jsx(s,{title:"Inheritance FAQs",questions:o}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.9s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.9s]  [animation-fill-mode:forwards]",children:e.jsx(n,{note:"Inheritance is a powerful tool, but it's often misunderstood. Emphasize the 'is-a' relationship vs 'has-a'. Use analogies like 'Student (Swadeep) is a Person' or 'Tuhina is a Learner'. Point out that while inheritance promotes reusability, overuse can lead to brittle hierarchies. Always ask: 'Does the child truly need ALL parent behaviors?' If not, composition might be better. Show students how inheritance appears in Java's own libraries — every class extends Object!"})}),e.jsx("div",{className:"text-center text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700",children:e.jsxs("p",{children:["💭 ",e.jsx("strong",{children:"Hint:"})," Before moving to the next topic, try creating a ",e.jsx("code",{children:"Student"})," class that extends ",e.jsx("code",{children:"Person"}),". Add properties like ",e.jsx("code",{children:"grade"})," and ",e.jsx("code",{children:"rollNumber"}),"."]})}),e.jsx("style",{jsx:!0,children:`
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
      `})]})};export{w as default};
