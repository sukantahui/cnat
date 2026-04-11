import{r as d,j as e}from"./index-CR1DasM0.js";import{T as c}from"./TeacherSukantaHui-DVbF6Vfx.js";import{J as s}from"./JavaFileLoader-DxLN4hA4.js";import"./git-branch-ByGo6A14.js";import"./JavaCodeBlock-BUWemFFh.js";import"./prism-JAmis3eQ.js";import"./browser-CxDBipX-.js";import"./prism-java-BwO6k4I_.js";const m=`// SuperVariableExample.java\r
// Demonstrates using 'super' to access hidden parent class variables\r
\r
class ParentClass {\r
    String name = "Parent's Name";\r
    int age = 50;\r
    \r
    void display() {\r
        System.out.println("Parent Display: " + name + ", Age: " + age);\r
    }\r
}\r
\r
class ChildClass extends ParentClass {\r
    // This variable hides the parent's 'name' variable\r
    String name = "Child's Name";\r
    int rollNumber = 101;\r
    \r
    void showVariables() {\r
        // Accessing child's own variable\r
        System.out.println("Child's name: " + name);\r
        \r
        // Accessing parent's hidden variable using 'super'\r
        System.out.println("Parent's name (using super): " + super.name);\r
        \r
        // Accessing parent's age (not hidden, but still accessible)\r
        System.out.println("Parent's age: " + super.age);\r
        \r
        // Accessing child's roll number\r
        System.out.println("Child's roll number: " + rollNumber);\r
    }\r
    \r
    void display() {\r
        super.display();  // Calling parent's display method\r
        System.out.println("Child Display: " + name + ", Roll: " + rollNumber);\r
    }\r
}\r
\r
public class SuperVariableExample {\r
    public static void main(String[] args) {\r
        System.out.println("=== super Keyword - Variable Access Demo ===\\n");\r
        \r
        ChildClass child = new ChildClass();\r
        child.showVariables();\r
        \r
        System.out.println("\\n=== Display Method Demo ===");\r
        child.display();\r
    }\r
}\r
\r
/* EXPECTED OUTPUT:\r
=== super Keyword - Variable Access Demo ===\r
\r
Child's name: Child's Name\r
Parent's name (using super): Parent's Name\r
Parent's age: 50\r
Child's roll number: 101\r
\r
=== Display Method Demo ===\r
Parent Display: Parent's Name, Age: 50\r
Child Display: Child's Name, Roll: 101\r
*/`,u=`// SuperMethodExample.java\r
// Demonstrates using 'super' to call overridden parent class methods\r
\r
class Animal {\r
    String species;\r
    \r
    Animal(String species) {\r
        this.species = species;\r
    }\r
    \r
    void makeSound() {\r
        System.out.println("The " + species + " makes a generic animal sound");\r
    }\r
    \r
    void eat() {\r
        System.out.println("The " + species + " is eating");\r
    }\r
}\r
\r
class Dog extends Animal {\r
    String breed;\r
    \r
    Dog(String species, String breed) {\r
        super(species);  // Calling parent constructor\r
        this.breed = breed;\r
    }\r
    \r
    @Override\r
    void makeSound() {\r
        System.out.println("The " + breed + " dog barks: Woof! Woof!");\r
    }\r
    \r
    void demonstrateSuper() {\r
        System.out.println("\\n--- Using super to call parent's overridden method ---");\r
        super.makeSound();  // Calls Animal's makeSound() method\r
        \r
        System.out.println("\\n--- Calling parent's eat() method (not overridden) ---");\r
        super.eat();  // Works even though not overridden\r
        \r
        System.out.println("\\n--- Calling child's own overridden method ---");\r
        this.makeSound();  // Calls Dog's makeSound()\r
    }\r
}\r
\r
class Cat extends Animal {\r
    String color;\r
    \r
    Cat(String species, String color) {\r
        super(species);\r
        this.color = color;\r
    }\r
    \r
    @Override\r
    void makeSound() {\r
        System.out.println("The " + color + " cat meows: Meow! Meow!");\r
    }\r
    \r
    void compareSounds() {\r
        System.out.println("\\n=== Comparing Parent vs Child Sounds ===");\r
        this.makeSound();      // Child's version\r
        super.makeSound();     // Parent's original version\r
    }\r
}\r
\r
public class SuperMethodExample {\r
    public static void main(String[] args) {\r
        System.out.println("=== super Keyword - Method Access Demo ===\\n");\r
        \r
        Dog dog = new Dog("Canine", "Golden Retriever");\r
        dog.demonstrateSuper();\r
        \r
        Cat cat = new Cat("Feline", "Orange");\r
        cat.compareSounds();\r
    }\r
}\r
\r
/* EXPECTED OUTPUT:\r
=== super Keyword - Method Access Demo ===\r
\r
--- Using super to call parent's overridden method ---\r
The Canine makes a generic animal sound\r
\r
--- Calling parent's eat() method (not overridden) ---\r
The Canine is eating\r
\r
--- Calling child's own overridden method ---\r
The Golden Retriever dog barks: Woof! Woof!\r
\r
=== Comparing Parent vs Child Sounds ===\r
The Orange cat meows: Meow! Meow!\r
The Feline makes a generic animal sound\r
*/`,h=`// SuperConstructorExample.java\r
// Demonstrates using 'super()' to call parent class constructors\r
\r
class Book {\r
    String bookId;\r
    String title;\r
    String author;\r
    \r
    // No-argument constructor\r
    Book() {\r
        this.bookId = "UNKNOWN";\r
        this.title = "Untitled";\r
        this.author = "Unknown Author";\r
        System.out.println("Book() no-arg constructor called");\r
    }\r
    \r
    // Parameterized constructor 1\r
    Book(String bookId, String title) {\r
        this.bookId = bookId;\r
        this.title = title;\r
        this.author = "Unknown Author";\r
        System.out.println("Book(bookId, title) constructor called");\r
    }\r
    \r
    // Parameterized constructor 2\r
    Book(String bookId, String title, String author) {\r
        this.bookId = bookId;\r
        this.title = title;\r
        this.author = author;\r
        System.out.println("Book(bookId, title, author) constructor called");\r
    }\r
    \r
    void displayInfo() {\r
        System.out.println("Book ID: " + bookId + ", Title: " + title + ", Author: " + author);\r
    }\r
}\r
\r
class LibraryBook extends Book {\r
    String libraryCode;\r
    boolean isAvailable;\r
    \r
    // Constructor 1: Calls parent's no-arg constructor automatically\r
    LibraryBook() {\r
        // super() is automatically inserted by Java\r
        this.libraryCode = "LIB-DEFAULT";\r
        this.isAvailable = true;\r
        System.out.println("LibraryBook() constructor called");\r
    }\r
    \r
    // Constructor 2: Explicitly calling parent's parameterized constructor\r
    LibraryBook(String bookId, String title, String libraryCode) {\r
        super(bookId, title);  // Explicit call to parent's 2-parameter constructor\r
        this.libraryCode = libraryCode;\r
        this.isAvailable = true;\r
        System.out.println("LibraryBook(bookId, title, libraryCode) constructor called");\r
    }\r
    \r
    // Constructor 3: Calling parent's 3-parameter constructor\r
    LibraryBook(String bookId, String title, String author, String libraryCode, boolean isAvailable) {\r
        super(bookId, title, author);  // Call parent's 3-parameter constructor\r
        this.libraryCode = libraryCode;\r
        this.isAvailable = isAvailable;\r
        System.out.println("LibraryBook(bookId, title, author, libraryCode, isAvailable) constructor called");\r
    }\r
    \r
    @Override\r
    void displayInfo() {\r
        super.displayInfo();  // Reuse parent's display logic\r
        System.out.println("Library Code: " + libraryCode + ", Available: " + isAvailable);\r
    }\r
}\r
\r
public class SuperConstructorExample {\r
    public static void main(String[] args) {\r
        System.out.println("=== super() Constructor Chaining Demo ===\\n");\r
        \r
        System.out.println("--- Creating LibraryBook with default constructor ---");\r
        LibraryBook book1 = new LibraryBook();\r
        book1.displayInfo();\r
        \r
        System.out.println("\\n--- Creating LibraryBook with 3 parameters ---");\r
        LibraryBook book2 = new LibraryBook("BK001", "Java Programming", "LIB-JAVA-01");\r
        book2.displayInfo();\r
        \r
        System.out.println("\\n--- Creating LibraryBook with 5 parameters ---");\r
        LibraryBook book3 = new LibraryBook("BK002", "Data Structures", "Robert Lafore", "LIB-DSA-02", true);\r
        book3.displayInfo();\r
    }\r
}\r
\r
/* EXPECTED OUTPUT:\r
=== super() Constructor Chaining Demo ===\r
\r
--- Creating LibraryBook with default constructor ---\r
Book() no-arg constructor called\r
LibraryBook() constructor called\r
Book ID: UNKNOWN, Title: Untitled, Author: Unknown Author\r
Library Code: LIB-DEFAULT, Available: true\r
\r
--- Creating LibraryBook with 3 parameters ---\r
Book(bookId, title) constructor called\r
LibraryBook(bookId, title, libraryCode) constructor called\r
Book ID: BK001, Title: Java Programming, Author: Unknown Author\r
Library Code: LIB-JAVA-01, Available: true\r
\r
--- Creating LibraryBook with 5 parameters ---\r
Book(bookId, title, author) constructor called\r
LibraryBook(bookId, title, author, libraryCode, isAvailable) constructor called\r
Book ID: BK002, Title: Data Structures, Author: Robert Lafore\r
Library Code: LIB-DSA-02, Available: true\r
*/`,p=`// SuperRealWorldExample.java\r
// Real-world school management system demonstrating all super keyword usages\r
\r
class Person {\r
    private String name;\r
    private int age;\r
    private String role;\r
    \r
    // Parent constructor\r
    Person(String name, int age, String role) {\r
        this.name = name;\r
        this.age = age;\r
        this.role = role;\r
        System.out.println("Person constructor: " + name + " created as " + role);\r
    }\r
    \r
    void displayInfo() {\r
        System.out.println("=== Person Information ===");\r
        System.out.println("Name: " + name);\r
        System.out.println("Age: " + age);\r
        System.out.println("Role: " + role);\r
    }\r
    \r
    void performDuty() {\r
        System.out.println(name + " is performing general duties as a " + role);\r
    }\r
    \r
    String getRole() {\r
        return role;\r
    }\r
}\r
\r
class Student extends Person {\r
    private int rollNumber;\r
    private String className;\r
    private String role;  // This hides Person's role variable\r
    \r
    Student(String name, int age, int rollNumber, String className) {\r
        super(name, age, "Student");  // Calling parent constructor with specific role\r
        this.rollNumber = rollNumber;\r
        this.className = className;\r
        this.role = "Student Member";  // Hiding parent's role\r
        System.out.println("Student constructor: " + name + " added to class " + className);\r
    }\r
    \r
    @Override\r
    void displayInfo() {\r
        super.displayInfo();  // Reusing parent's display logic\r
        System.out.println("=== Student Specific Information ===");\r
        System.out.println("Roll Number: " + rollNumber);\r
        System.out.println("Class: " + className);\r
        System.out.println("Local Role: " + this.role);\r
        System.out.println("Parent's Role (via super): " + super.getRole());\r
    }\r
    \r
    @Override\r
    void performDuty() {\r
        System.out.println("Student is studying and completing homework");\r
        System.out.print("But also, ");\r
        super.performDuty();  // Calling parent's version to show general duty\r
    }\r
    \r
    void showRoleComparison() {\r
        System.out.println("\\n=== Role Comparison ===");\r
        System.out.println("Student's own role variable: " + this.role);\r
        System.out.println("Parent's role variable (via super): " + super.getRole());\r
    }\r
}\r
\r
class Teacher extends Person {\r
    private String subject;\r
    private String employeeId;\r
    \r
    Teacher(String name, int age, String subject, String employeeId) {\r
        super(name, age, "Teacher");\r
        this.subject = subject;\r
        this.employeeId = employeeId;\r
        System.out.println("Teacher constructor: " + name + " teaches " + subject);\r
    }\r
    \r
    @Override\r
    void displayInfo() {\r
        super.displayInfo();\r
        System.out.println("=== Teacher Specific Information ===");\r
        System.out.println("Subject: " + subject);\r
        System.out.println("Employee ID: " + employeeId);\r
    }\r
    \r
    @Override\r
    void performDuty() {\r
        System.out.println("Teacher is taking classes and checking assignments");\r
        super.performDuty();  // Shows the general duty as well\r
    }\r
}\r
\r
public class SuperRealWorldExample {\r
    public static void main(String[] args) {\r
        System.out.println("=== Shyamnagar School District Management System ===\\n");\r
        \r
        // Create a Student - Tuhina from Barrackpore\r
        System.out.println("--- Registering Student: Tuhina ---");\r
        Student tuhina = new Student("Tuhina", 15, 101, "10th Grade");\r
        tuhina.displayInfo();\r
        tuhina.performDuty();\r
        tuhina.showRoleComparison();\r
        \r
        System.out.println("\\n--- Registering Teacher: Swadeep ---");\r
        // Create a Teacher - Swadeep from Ichapur\r
        Teacher swadeep = new Teacher("Swadeep", 35, "Computer Science", "TCH-2024-001");\r
        swadeep.displayInfo();\r
        swadeep.performDuty();\r
        \r
        System.out.println("\\n--- Registering Another Student: Abhronila from Naihati ---");\r
        Student abhronila = new Student("Abhronila", 14, 102, "9th Grade");\r
        abhronila.displayInfo();\r
        \r
        System.out.println("\\n=== Summary of super Keyword Usage ===");\r
        System.out.println("1. super(name, age, role) - Called parent constructor");\r
        System.out.println("2. super.displayInfo() - Called parent's overridden method");\r
        System.out.println("3. super.performDuty() - Called parent's method from child's override");\r
        System.out.println("4. super.getRole() - Accessed parent's method to get hidden variable");\r
    }\r
}\r
\r
/* EXPECTED OUTPUT:\r
=== Shyamnagar School District Management System ===\r
\r
--- Registering Student: Tuhina ---\r
Person constructor: Tuhina created as Student\r
Student constructor: Tuhina added to class 10th Grade\r
=== Person Information ===\r
Name: Tuhina\r
Age: 15\r
Role: Student\r
=== Student Specific Information ===\r
Roll Number: 101\r
Class: 10th Grade\r
Local Role: Student Member\r
Parent's Role (via super): Student\r
Student is studying and completing homework\r
But also, Tuhina is performing general duties as a Student\r
\r
=== Role Comparison ===\r
Student's own role variable: Student Member\r
Parent's role variable (via super): Student\r
\r
--- Registering Teacher: Swadeep ---\r
Person constructor: Swadeep created as Teacher\r
Teacher constructor: Swadeep teaches Computer Science\r
=== Person Information ===\r
Name: Swadeep\r
Age: 35\r
Role: Teacher\r
=== Teacher Specific Information ===\r
Subject: Computer Science\r
Employee ID: TCH-2024-001\r
Teacher is taking classes and checking assignments\r
Swadeep is performing general duties as a Teacher\r
\r
--- Registering Another Student: Abhronila from Naihati ---\r
Person constructor: Abhronila created as Student\r
Student constructor: Abhronila added to class 9th Grade\r
=== Person Information ===\r
Name: Abhronila\r
Age: 14\r
Role: Student\r
=== Student Specific Information ===\r
Roll Number: 102\r
Class: 9th Grade\r
Local Role: Student Member\r
Parent's Role (via super): Student\r
\r
=== Summary of super Keyword Usage ===\r
1. super(name, age, role) - Called parent constructor\r
2. super.displayInfo() - Called parent's overridden method\r
3. super.performDuty() - Called parent's method from child's override\r
4. super.getRole() - Accessed parent's method to get hidden variable\r
*/`,j=()=>{const[t,i]=d.useState({}),o=a=>{i(r=>({...r,[a]:!r[a]}))},n=[{question:"What is the purpose of the `super` keyword?",answer:"The `super` keyword in Java is a reference variable used to refer to the immediate parent class object. It is used to access parent class properties (variables, methods, constructors) when they are hidden or overridden by the subclass."},{question:"Can `super` be used in a static context?",answer:"No, `super` cannot be used in a static context (static methods or static blocks) because `super` refers to an instance of the parent class, and static contexts are class-level, not instance-level."},{question:"What happens if we don't call `super()` in a subclass constructor?",answer:"Java automatically inserts a call to the no-argument constructor of the parent class (`super()`) as the first statement in every subclass constructor. If the parent class doesn't have a no-argument constructor, you'll get a compile-time error."},{question:"Can we use `super` to access grandparent members directly?",answer:"No, `super` only refers to the immediate parent class. To access grandparent members, you would need the parent class to provide a method that calls the grandparent, or you would have to chain `super` calls through each level."},{question:"What is the difference between `this` and `super`?",answer:"`this` refers to the current class instance, while `super` refers to the immediate parent class instance. `this` can access all members of the current class, while `super` is specifically for accessing overridden or hidden members of the parent class."}];return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:"text-center animate-[fadeSlideUp_0.6s_ease-out] motion-safe:animate-[fadeSlideUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400",children:"The super Keyword"}),e.jsx("p",{className:"mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto",children:"Bridging the gap between parent and child: Understanding Java's super keyword for inheritance mastery"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 animate-[fadeSlideUp_0.6s_ease-out_0.1s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-indigo-500 pl-4 mb-6",children:"Understanding the super Keyword"}),e.jsxs("div",{className:"space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsxs("p",{children:["Imagine you're in a classroom at ",e.jsx("strong",{children:"Barrackpore Government School"}),". The principal (parent class) has certain rules and resources. The class teacher (child class) can also have their own rules, but sometimes they need to refer to the principal's original guidelines. This is exactly what the ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded",children:"super"})," keyword does in Java!"]}),e.jsxs("p",{children:["The ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded",children:"super"})," keyword is a reference variable used to refer to the immediate parent class object. It's like a special pass that lets a child class access members of its parent class that might be hidden or overridden."]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6 my-8",children:[e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md",children:[e.jsx("div",{className:"text-2xl mb-2",children:"🎯"}),e.jsx("h3",{className:"font-bold text-gray-900 dark:text-white mb-2",children:"Purpose"}),e.jsx("p",{className:"text-sm",children:"Access parent class variables, methods, and constructors from a subclass"})]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md",children:[e.jsx("div",{className:"text-2xl mb-2",children:"📋"}),e.jsx("h3",{className:"font-bold text-gray-900 dark:text-white mb-2",children:"Prototype"}),e.jsxs("p",{className:"text-sm font-mono text-sm",children:["super.variable",e.jsx("br",{}),"super.method()",e.jsx("br",{}),"super()"]})]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md",children:[e.jsx("div",{className:"text-2xl mb-2",children:"⏰"}),e.jsx("h3",{className:"font-bold text-gray-900 dark:text-white mb-2",children:"When to Use"}),e.jsx("p",{className:"text-sm",children:"When child class hides parent variables, overrides methods, or needs parent constructor logic"})]})]})]})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 animate-[fadeSlideUp_0.6s_ease-out_0.2s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4",children:[e.jsx("span",{className:"text-indigo-500",children:"1."})," Accessing Parent Class Variables"]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed mb-4",children:["When a subclass declares a variable with the same name as a variable in its parent class, the parent class variable is hidden. The ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded",children:"super"})," keyword allows you to access the hidden parent variable."]}),e.jsx("div",{className:"my-4",children:e.jsx(s,{fileModule:m,title:"SuperVariableExample.java",highlightLines:[8,14,20]})}),e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-xl my-4",children:[e.jsx("h4",{className:"font-bold text-amber-800 dark:text-amber-300 mb-2",children:"💡 Hint"}),e.jsxs("p",{className:"text-amber-700 dark:text-amber-200 text-sm",children:["Think about: If Tuhina (child) has a notebook with the same subject name as Swadeep's (parent) notebook, how can she specifically refer to Swadeep's notebook? ",e.jsx("code",{className:"bg-amber-100 dark:bg-amber-800 px-1 rounded",children:"super"})," is her answer!"]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 animate-[fadeSlideUp_0.6s_ease-out_0.3s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4",children:[e.jsx("span",{className:"text-indigo-500",children:"2."})," Accessing Parent Class Methods (Overridden Methods)"]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed mb-4",children:["When you override a method in a subclass, the parent class method is overridden. ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded",children:"super.methodName()"}),"allows you to call the parent's version of the method even after overriding it."]}),e.jsx("div",{className:"my-4",children:e.jsx(s,{fileModule:u,title:"SuperMethodExample.java",highlightLines:[8,12,18,24]})}),e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-xl my-4",children:[e.jsx("h4",{className:"font-bold text-amber-800 dark:text-amber-300 mb-2",children:"💡 Hint"}),e.jsxs("p",{className:"text-amber-700 dark:text-amber-200 text-sm",children:["Observe carefully: In ",e.jsx("strong",{children:"Ichapur Public Library"}),", the general member's borrowing rule might be overridden for student members. But sometimes a student needs to know the original rule. That's when ",e.jsx("code",{className:"bg-amber-100 dark:bg-amber-800 px-1 rounded",children:"super.borrowBook()"})," becomes useful!"]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 animate-[fadeSlideUp_0.6s_ease-out_0.4s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.4s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4",children:[e.jsx("span",{className:"text-indigo-500",children:"3."})," Calling Parent Class Constructor"]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed mb-4",children:["The ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded",children:"super()"})," call is used to invoke the constructor of the parent class. It must be the ",e.jsx("strong",{children:"first statement"})," in the subclass constructor. Java automatically inserts ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded",children:"super()"})," if you don't explicitly call it."]}),e.jsx("div",{className:"my-4",children:e.jsx(s,{fileModule:h,title:"SuperConstructorExample.java",highlightLines:[8,12,18,21,27]})}),e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-xl my-4",children:[e.jsx("h4",{className:"font-bold text-amber-800 dark:text-amber-300 mb-2",children:"💡 Hint"}),e.jsxs("p",{className:"text-amber-700 dark:text-amber-200 text-sm",children:["Try changing this: Remove the ",e.jsx("code",{className:"bg-amber-100 dark:bg-amber-800 px-1 rounded",children:"super(bookId, title)"})," call from ",e.jsx("strong",{children:"StudentBook.java"}),". What error do you get? This demonstrates why explicit ",e.jsx("code",{className:"bg-amber-100 dark:bg-amber-800 px-1 rounded",children:"super()"})," is needed when parent lacks a no-arg constructor."]})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 animate-[fadeSlideUp_0.6s_ease-out_0.5s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2",children:["🌍 Real-World Usage Example",e.jsx("span",{className:"text-sm bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full",children:"School Management System"})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed mb-6",children:["Let's see how ",e.jsx("strong",{children:"Shyamnagar School District"})," uses the ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded",children:"super"})," keyword in their school management system:"]}),e.jsx(s,{fileModule:p,title:"SchoolManagementSystem.java",highlightLines:[5,9,13,19,23,29,33]}),e.jsxs("div",{className:"mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl",children:[e.jsx("h4",{className:"font-bold text-gray-900 dark:text-white mb-2",children:"🎯 Key Takeaways from this Example:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"super(name, age)"})," ensures person details are initialized by the parent constructor"]}),e.jsxs("li",{children:[e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"super.displayInfo()"})," reuses parent's display logic before adding student-specific details"]}),e.jsxs("li",{children:["The parent's ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"role"})," variable is accessed via ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"super.role"})," when shadowed"]})]})]})]}),e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 rounded-2xl shadow-lg p-6 animate-[fadeSlideUp_0.6s_ease-out_0.6s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-2xl font-bold text-red-800 dark:text-red-300 mb-6 flex items-center gap-2",children:"⚠️ Common Pitfalls & Misconceptions"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-bold text-red-700 dark:text-red-300 mb-2",children:"❌ Mistake 1: Using super in static context"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Cannot use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"super"})," in static methods because it refers to an instance."]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-900 p-3 rounded mt-2 text-sm overflow-x-auto",children:e.jsx("code",{children:`public static void staticMethod() {
    super.display();  // ❌ COMPILE ERROR!
}`})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-bold text-red-700 dark:text-red-300 mb-2",children:"❌ Mistake 2: super() not as first statement"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"super()"})," must be the first statement in constructor."]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-900 p-3 rounded mt-2 text-sm overflow-x-auto",children:e.jsx("code",{children:`Student() {
    System.out.println("Hello");
    super();  // ❌ COMPILE ERROR!
}`})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-bold text-red-700 dark:text-red-300 mb-2",children:"❌ Mistake 3: Forgetting parent no-arg constructor requirement"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["If parent lacks no-arg constructor, must explicitly call parameterized ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"super()"}),"."]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-bold text-red-700 dark:text-red-300 mb-2",children:"❌ Mistake 4: Assuming super can access grandparent directly"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"super"})," only refers to immediate parent, not grandparent or higher."]})]})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-2xl shadow-lg p-6 animate-[fadeSlideUp_0.6s_ease-out_0.7s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.7s]",children:[e.jsx("h3",{className:"text-2xl font-bold text-green-800 dark:text-green-300 mb-6 flex items-center gap-2",children:"✅ Best Practices"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-bold text-green-700 dark:text-green-300 mb-2",children:"1. Use super judiciously"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 text-sm",children:["Only use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"super"})," when necessary. Overusing it can make code harder to understand."]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-bold text-green-700 dark:text-green-300 mb-2",children:"2. Keep constructor chains clear"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 text-sm",children:["Document why you're using parameterized ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"super()"})," calls."]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-bold text-green-700 dark:text-green-300 mb-2",children:"3. Avoid variable hiding"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-sm",children:"Consider using different names instead of hiding parent variables, unless there's a good reason."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 transition-all duration-300 hover:shadow-md",children:[e.jsx("h4",{className:"font-bold text-green-700 dark:text-green-300 mb-2",children:"4. Use super for constructor chaining"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 text-sm",children:["Always call ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"super()"})," to ensure parent initialization happens properly."]})]})]})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-2xl shadow-lg p-6 animate-[fadeSlideUp_0.6s_ease-out_0.8s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.8s]",children:[e.jsx("h3",{className:"text-2xl font-bold text-blue-800 dark:text-blue-300 mb-6 flex items-center gap-2",children:"💎 Professional Tips & Tricks"}),e.jsxs("div",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-blue-700 dark:text-blue-300",children:"Tip 1:"})," Use ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"super"})," in method overriding to extend parent functionality rather than completely replacing it. This follows the Open/Closed Principle."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-blue-700 dark:text-blue-300",children:"Tip 2:"})," In ",e.jsx("strong",{children:"Naihati Coding Bootcamp"}),", instructors teach students to use IDE features (Ctrl+Click in IntelliJ/Eclipse) to trace ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"super"})," calls up the inheritance chain."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-blue-700 dark:text-blue-300",children:"Tip 3:"})," When debugging, place breakpoints in both parent and child methods to see when ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"super"})," calls are executed."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-blue-700 dark:text-blue-300",children:"Tip 4:"})," Remember: ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"super()"})," (constructor call) and ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"super.method()"})," (method call) are different - one initializes, the other executes logic."]})]})]}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg p-6 animate-[fadeSlideUp_0.6s_ease-out_0.9s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.9s]",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2",children:"📝 Student Mini Checklist"}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"text-green-500 text-xl",children:"✓"}),e.jsxs("div",{children:["I understand that ",e.jsx("code",{className:"bg-gray-300 dark:bg-gray-700 px-1 rounded",children:"super"})," refers to the immediate parent class"]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"text-green-500 text-xl",children:"✓"}),e.jsxs("div",{children:["I know how to access hidden parent variables using ",e.jsx("code",{className:"bg-gray-300 dark:bg-gray-700 px-1 rounded",children:"super.variable"})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"text-green-500 text-xl",children:"✓"}),e.jsxs("div",{children:["I can call overridden parent methods with ",e.jsx("code",{className:"bg-gray-300 dark:bg-gray-700 px-1 rounded",children:"super.methodName()"})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"text-green-500 text-xl",children:"✓"}),e.jsxs("div",{children:["I remember ",e.jsx("code",{className:"bg-gray-300 dark:bg-gray-700 px-1 rounded",children:"super()"})," must be the first statement in constructor"]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"text-green-500 text-xl",children:"✓"}),e.jsxs("div",{children:["I understand why parent needs a no-arg constructor or explicit ",e.jsx("code",{className:"bg-gray-300 dark:bg-gray-700 px-1 rounded",children:"super()"})," call"]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"text-green-500 text-xl",children:"✓"}),e.jsxs("div",{children:["I can't use ",e.jsx("code",{className:"bg-gray-300 dark:bg-gray-700 px-1 rounded",children:"super"})," in static contexts"]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 animate-[fadeSlideUp_0.6s_ease-out_1s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_1s]",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2",children:"❓ Frequently Asked Questions (20 Questions)"}),e.jsxs("div",{className:"space-y-4",children:[n.map((a,r)=>e.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md",children:[e.jsxs("button",{onClick:()=>o(r),className:"w-full text-left px-6 py-4 bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 flex justify-between items-center",children:[e.jsxs("span",{className:"font-semibold text-gray-900 dark:text-white",children:[r+1,". ",a.question]}),e.jsx("span",{className:"text-indigo-500 dark:text-indigo-400 text-xl",children:t[r]?"▲":"▼"})]}),t[r]&&e.jsx("div",{className:"px-6 py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700",children:e.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:a.answer})})]},r)),[{q:"Can we use super and this together in a constructor?",a:"Yes, but super() must be the first statement, and this() cannot appear with super() because both need to be first."},{q:"What happens if parent and child have same variable name?",a:"Child's variable hides parent's variable. Use super.variableName to access parent's variable."},{q:"Is super a keyword or an object reference?",a:"super is a keyword that acts as a reference variable to the parent class object."},{q:"Can we assign super to a variable?",a:"No, super is a reserved keyword and cannot be assigned to any variable."},{q:"What's the output if super method is called from child?",a:"It executes the parent's version of that method, not the overridden child version."},{q:"Does every class have a super class in Java?",a:"Yes, except Object class. Every class implicitly extends Object, so super always refers to some parent."},{q:"Can we call super.super.method() to access grandparent?",a:"No, Java doesn't support this syntax. You'd need to create a method in parent that calls grandparent."},{q:"What happens if parent constructor throws an exception?",a:"Child constructor must handle it or declare it in its throws clause."},{q:"Can super be used in enum?",a:"Enums cannot extend other classes, so super refers to java.lang.Enum, but you can't call super() explicitly."},{q:"Is super() called automatically for abstract classes?",a:"Yes, Java inserts super() automatically in abstract class constructors as well."},{q:"What if parent class has private constructor?",a:"Then child cannot extend that class, as super() call would fail. This is how Singleton pattern prevents inheritance."},{q:"Can we use super in interface?",a:"Interfaces don't have parent classes (except Object implicitly), so super isn't applicable."},{q:"How does super work with generics?",a:"super works the same with generics, but you cannot use super with type parameters."},{q:"What's the difference between super and parent reference?",a:"A parent reference can call only parent methods on child object. super specifically accesses parent's hidden/overridden members."},{q:"Can super be used in lambda expressions?",a:"No, lambda expressions cannot use super because they're in a static context."}].forEach((a,r)=>{const l=r+5;n[l]||n.push({question:a.q,answer:a.a})}),n.slice(5).map((a,r)=>e.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md",children:[e.jsxs("button",{onClick:()=>o(r+5),className:"w-full text-left px-6 py-4 bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 flex justify-between items-center",children:[e.jsxs("span",{className:"font-semibold text-gray-900 dark:text-white",children:[r+6,". ",a.question]}),e.jsx("span",{className:"text-indigo-500 dark:text-indigo-400 text-xl",children:t[r+5]?"▲":"▼"})]}),t[r+5]&&e.jsx("div",{className:"px-6 py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700",children:e.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:a.answer})})]},r+5))]})]}),e.jsx(c,{note:`🎓 The super keyword often confuses beginners because they think it's like a 'backup' or 'copy'. Actually, it's a reference to the same parent object! 🧠

💡 Pro Tip from my classroom: Draw the inheritance tree on board. Show how 'super' is like a pointer moving up one level. Students in Barrackpore love the 'Parent Class Phone Directory' analogy - super helps you 'call' the parent's number!

⚠️ Remember: super() in constructor is NOT optional when parent lacks no-arg constructor. I've seen many students waste hours debugging this.

🔍 Debugging strategy: Use System.out.println in both parent and child methods with labels like '[PARENT]' and '[CHILD]' to trace execution flow.`})]}),e.jsx("style",{children:`
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
          .motion-safe\\:animate-\\[fadeSlideUp_0\\.6s_ease-out\\] {
            animation: none !important;
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        }
      `})]})};export{j as default};
