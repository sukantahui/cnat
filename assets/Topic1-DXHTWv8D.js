import{r as i,j as e}from"./index-COd1BgDP.js";import{c as a}from"./clsx-B-dksMZM.js";import{T as s}from"./TeacherSukantaHui-BiDY59dC.js";import{J as n}from"./JavaFileLoader-BP9eIELP.js";import{F as l}from"./FAQTemplate-svRpoxM2.js";import"./git-branch-BMCsOpU_.js";import"./JavaCodeBlock-Dep8i8YL.js";import"./prism-XSjjC35C.js";import"./browser-Cg0sBYot.js";import"./prism-java-BwO6k4I_.js";const o=`// Single Inheritance Example\r
class Student {\r
    String name;\r
    int rollNumber;\r
    \r
    public void study() {\r
        System.out.println(name + " is studying");\r
    }\r
    \r
    public void displayInfo() {\r
        System.out.println("Student: " + name + ", Roll No: " + rollNumber);\r
    }\r
}\r
\r
class CollegeStudent extends Student {\r
    String collegeName;\r
    String major;\r
    \r
    public void attendLecture() {\r
        System.out.println(name + " is attending " + major + " lecture at " + collegeName);\r
    }\r
    \r
    public void submitAssignment() {\r
        System.out.println(name + " submitted assignment in " + major);\r
    }\r
}\r
\r
public class SingleInheritance {\r
    public static void main(String[] args) {\r
        // Creating object of child class\r
        CollegeStudent student = new CollegeStudent();\r
        \r
        // Setting inherited properties\r
        student.name = "Swadeep";\r
        student.rollNumber = 42;\r
        student.collegeName = "Barrackpore Engineering College";\r
        student.major = "Computer Science";\r
        \r
        // Calling inherited method\r
        student.displayInfo();\r
        student.study();\r
        \r
        // Calling child-specific methods\r
        student.attendLecture();\r
        student.submitAssignment();\r
    }\r
}`,d=`// Multilevel Inheritance Example\r
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
class Employee extends Person {\r
    int employeeId;\r
    String department;\r
    double salary;\r
    \r
    public void work() {\r
        System.out.println(name + " is working in " + department + " department");\r
    }\r
    \r
    public void attendMeeting() {\r
        System.out.println(name + " is attending department meeting");\r
    }\r
    \r
    public void getSalary() {\r
        System.out.println(name + " received salary: ₹" + salary);\r
    }\r
}\r
\r
class Manager extends Employee {\r
    int teamSize;\r
    String projectName;\r
    \r
    public void conductReview() {\r
        System.out.println(name + " is conducting performance review for " + teamSize + " team members");\r
    }\r
    \r
    public void manageProject() {\r
        System.out.println(name + " is managing project: " + projectName);\r
    }\r
    \r
    public void assignTasks() {\r
        System.out.println(name + " assigned tasks to the team");\r
    }\r
    \r
    @Override\r
    public void work() {\r
        System.out.println(name + " is managing and guiding the team on " + projectName);\r
    }\r
}\r
\r
public class MultilevelInheritance {\r
    public static void main(String[] args) {\r
        System.out.println("=== Multilevel Inheritance Demo ===\\n");\r
        \r
        // Creating Manager object (Bottom of chain)\r
        Manager manager = new Manager();\r
        \r
        // Setting properties from all levels\r
        manager.name = "Abhronila";\r
        manager.age = 35;\r
        manager.address = "Shyamnagar";\r
        manager.employeeId = 1001;\r
        manager.department = "Software Development";\r
        manager.salary = 85000;\r
        manager.teamSize = 8;\r
        manager.projectName = "School Management System";\r
        \r
        // Methods from Person level\r
        manager.introduce();\r
        manager.celebrateBirthday();\r
        \r
        // Methods from Employee level\r
        manager.attendMeeting();\r
        manager.getSalary();\r
        \r
        // Overridden method\r
        manager.work();\r
        \r
        // Methods from Manager level\r
        manager.conductReview();\r
        manager.manageProject();\r
        manager.assignTasks();\r
        \r
        System.out.println("\\n--- Inheritance Chain ---");\r
        System.out.println("Manager → Employee → Person");\r
        System.out.println("Manager inherits from Employee which inherits from Person");\r
    }\r
}`,c=`// Hierarchical Inheritance Example\r
class Shape {\r
    String color;\r
    String name;\r
    \r
    public void displayColor() {\r
        System.out.println("This " + name + " is " + color + " in color");\r
    }\r
    \r
    public void draw() {\r
        System.out.println("Drawing " + name);\r
    }\r
}\r
\r
class Circle extends Shape {\r
    double radius;\r
    \r
    public double calculateArea() {\r
        return Math.PI * radius * radius;\r
    }\r
    \r
    public double calculateCircumference() {\r
        return 2 * Math.PI * radius;\r
    }\r
    \r
    @Override\r
    public void draw() {\r
        System.out.println("Drawing a circle with radius " + radius);\r
    }\r
}\r
\r
class Rectangle extends Shape {\r
    double length;\r
    double width;\r
    \r
    public double calculateArea() {\r
        return length * width;\r
    }\r
    \r
    public double calculatePerimeter() {\r
        return 2 * (length + width);\r
    }\r
    \r
    @Override\r
    public void draw() {\r
        System.out.println("Drawing a rectangle of size " + length + " x " + width);\r
    }\r
}\r
\r
class Triangle extends Shape {\r
    double base;\r
    double height;\r
    \r
    public double calculateArea() {\r
        return 0.5 * base * height;\r
    }\r
    \r
    public void displayType() {\r
        System.out.println("This is a triangle shape");\r
    }\r
    \r
    @Override\r
    public void draw() {\r
        System.out.println("Drawing a triangle with base " + base + " and height " + height);\r
    }\r
}\r
\r
public class HierarchicalInheritance {\r
    public static void main(String[] args) {\r
        System.out.println("=== Hierarchical Inheritance Demo ===\\n");\r
        \r
        // Creating Circle object\r
        Circle circle = new Circle();\r
        circle.name = "Circle";\r
        circle.color = "Red";\r
        circle.radius = 5.0;\r
        circle.displayColor();\r
        circle.draw();\r
        System.out.println("Area: " + circle.calculateArea());\r
        System.out.println("Circumference: " + circle.calculateCircumference());\r
        \r
        System.out.println("\\n--- --- ---\\n");\r
        \r
        // Creating Rectangle object\r
        Rectangle rectangle = new Rectangle();\r
        rectangle.name = "Rectangle";\r
        rectangle.color = "Blue";\r
        rectangle.length = 10.0;\r
        rectangle.width = 6.0;\r
        rectangle.displayColor();\r
        rectangle.draw();\r
        System.out.println("Area: " + rectangle.calculateArea());\r
        System.out.println("Perimeter: " + rectangle.calculatePerimeter());\r
        \r
        System.out.println("\\n--- --- ---\\n");\r
        \r
        // Creating Triangle object\r
        Triangle triangle = new Triangle();\r
        triangle.name = "Triangle";\r
        triangle.color = "Green";\r
        triangle.base = 8.0;\r
        triangle.height = 5.0;\r
        triangle.displayColor();\r
        triangle.draw();\r
        System.out.println("Area: " + triangle.calculateArea());\r
        triangle.displayType();\r
        \r
        System.out.println("\\n--- Inheritance Relationship ---");\r
        System.out.println("Circle, Rectangle, and Triangle all inherit from Shape");\r
        System.out.println("Each has its own specialized methods while sharing common ones");\r
    }\r
}`,h=`// Complete Real-World School System Example\r
class Person {\r
    String name;\r
    int age;\r
    String phoneNumber;\r
    String email;\r
    \r
    public Person() {\r
        System.out.println("Creating a new person...");\r
    }\r
    \r
    public void introduce() {\r
        System.out.println("Hello! I'm " + name + ", age " + age);\r
    }\r
    \r
    public void contact() {\r
        System.out.println("Contact " + name + " at: " + phoneNumber + " or " + email);\r
    }\r
}\r
\r
// Single Inheritance: Student extends Person\r
class Student extends Person {\r
    int rollNumber;\r
    String grade;\r
    double[] marks = new double[5];\r
    \r
    public void study() {\r
        System.out.println(name + " is studying for " + grade + " grade");\r
    }\r
    \r
    public void takeExam() {\r
        System.out.println(name + " is taking final exams");\r
    }\r
    \r
    public double calculatePercentage() {\r
        double total = 0;\r
        for(double mark : marks) {\r
            total += mark;\r
        }\r
        return total / marks.length;\r
    }\r
}\r
\r
// Multilevel Inheritance: CollegeStudent extends Student\r
class CollegeStudent extends Student {\r
    String collegeName;\r
    String major;\r
    int semester;\r
    \r
    public void attendSeminar() {\r
        System.out.println(name + " attending " + major + " seminar at " + collegeName);\r
    }\r
    \r
    public void submitThesis() {\r
        System.out.println(name + " submitting thesis proposal");\r
    }\r
    \r
    @Override\r
    public void study() {\r
        System.out.println(name + " is studying " + major + " subjects for semester " + semester);\r
    }\r
}\r
\r
// Hierarchical Inheritance: Teacher extends Person\r
class Teacher extends Person {\r
    String employeeId;\r
    String subject;\r
    double salary;\r
    \r
    public void teach() {\r
        System.out.println("Teacher " + name + " is teaching " + subject);\r
    }\r
    \r
    public void gradePapers() {\r
        System.out.println(name + " is grading " + subject + " papers");\r
    }\r
    \r
    public void takeAttendance() {\r
        System.out.println(name + " taking attendance for " + subject + " class");\r
    }\r
}\r
\r
// Hierarchical Inheritance: Staff extends Person\r
class Staff extends Person {\r
    String staffId;\r
    String role;\r
    String shift;\r
    \r
    public void performDuty() {\r
        System.out.println(name + " performing " + role + " duties during " + shift + " shift");\r
    }\r
    \r
    public void manageFacilities() {\r
        System.out.println(name + " is managing school facilities");\r
    }\r
}\r
\r
public class RealWorldInheritance {\r
    public static void main(String[] args) {\r
        System.out.println("=== Real-World School System ===\\n");\r
        \r
        // Hierarchical: Teacher from Shyamnagar\r
        Teacher teacher = new Teacher();\r
        teacher.name = "Abhronila";\r
        teacher.age = 32;\r
        teacher.phoneNumber = "9876543210";\r
        teacher.email = "abhronila@school.edu";\r
        teacher.employeeId = "TCH101";\r
        teacher.subject = "Computer Science";\r
        teacher.salary = 65000;\r
        \r
        teacher.introduce();\r
        teacher.teach();\r
        teacher.gradePapers();\r
        teacher.contact();\r
        \r
        System.out.println("\\n--- --- ---\\n");\r
        \r
        // Single Inheritance: Student from Barrackpore\r
        Student student = new Student();\r
        student.name = "Swadeep";\r
        student.age = 16;\r
        student.phoneNumber = "9876543211";\r
        student.email = "swadeep@student.edu";\r
        student.rollNumber = 25;\r
        student.grade = "10th";\r
        student.marks = new double[]{85, 90, 88, 92, 87};\r
        \r
        student.introduce();\r
        student.study();\r
        student.takeExam();\r
        System.out.println("Percentage: " + student.calculatePercentage() + "%");\r
        \r
        System.out.println("\\n--- --- ---\\n");\r
        \r
        // Multilevel Inheritance: CollegeStudent from Naihati\r
        CollegeStudent collegeStudent = new CollegeStudent();\r
        collegeStudent.name = "Tuhina";\r
        collegeStudent.age = 19;\r
        collegeStudent.phoneNumber = "9876543212";\r
        collegeStudent.email = "tuhina@university.edu";\r
        collegeStudent.rollNumber = 101;\r
        collegeStudent.grade = "College";\r
        collegeStudent.collegeName = "Naihati University";\r
        collegeStudent.major = "Computer Science";\r
        collegeStudent.semester = 3;\r
        \r
        collegeStudent.introduce();\r
        collegeStudent.study();\r
        collegeStudent.attendSeminar();\r
        collegeStudent.submitThesis();\r
        collegeStudent.contact();\r
        \r
        System.out.println("\\n--- --- ---\\n");\r
        \r
        // Hierarchical: Staff from Ichapur\r
        Staff staff = new Staff();\r
        staff.name = "Debangshu";\r
        staff.age = 28;\r
        staff.phoneNumber = "9876543213";\r
        staff.email = "debangshu@school.edu";\r
        staff.staffId = "STF202";\r
        staff.role = "Librarian";\r
        staff.shift = "Morning";\r
        \r
        staff.introduce();\r
        staff.performDuty();\r
        staff.manageFacilities();\r
        \r
        System.out.println("\\n=== Inheritance Types Summary ===");\r
        System.out.println("1. Single: Student → CollegeStudent");\r
        System.out.println("2. Multilevel: Person → Student → CollegeStudent");\r
        System.out.println("3. Hierarchical: Person → Teacher, Person → Staff, Person → Student");\r
        System.out.println("\\nNote: Java supports Single, Multilevel, and Hierarchical only!");\r
    }\r
}`,m=[{question:"What is single inheritance?",shortAnswer:"One child inherits from one parent.",explanation:"In single inheritance, a class extends only one parent class and inherits its properties and methods.",hint:"One parent → one child",level:"basic",codeExample:"class Parent { } class Child extends Parent { }"},{question:"What is multilevel inheritance?",shortAnswer:"A chain of inheritance.",explanation:"In multilevel inheritance, a class inherits from another class, which itself inherits from another class, forming a chain.",hint:"Grandparent → Parent → Child",level:"basic",codeExample:"class GrandParent { } class Parent extends GrandParent { } class Child extends Parent { }"},{question:"What is hierarchical inheritance?",shortAnswer:"Multiple children inherit from one parent.",explanation:"In hierarchical inheritance, multiple classes inherit from a single parent class.",hint:"One parent → many children",level:"basic",codeExample:"class Parent { } class ChildA extends Parent { } class ChildB extends Parent { }"},{question:"Which inheritance type is most simple?",shortAnswer:"Single inheritance.",explanation:"Single inheritance is simplest because it involves only one parent and one child class.",hint:"No complexity",level:"basic"},{question:"Does Java support multiple inheritance using classes?",shortAnswer:"No.",explanation:"Java does not support multiple inheritance using classes to avoid ambiguity problems.",hint:"Diamond problem",level:"basic"},{question:"Which keyword is used for inheritance in Java?",shortAnswer:"extends",explanation:"The 'extends' keyword is used to inherit properties and methods from a parent class.",hint:"extends keyword",level:"basic"},{question:"Can a class have more than one child in hierarchical inheritance?",shortAnswer:"Yes.",explanation:"One parent class can have multiple child classes inheriting from it.",hint:"Multiple subclasses",level:"basic"},{question:"What is the benefit of inheritance?",shortAnswer:"Code reuse.",explanation:"Inheritance allows reuse of code and reduces redundancy.",hint:"Avoid duplication",level:"basic"},{question:"Can a class extend itself?",shortAnswer:"No.",explanation:"A class cannot inherit from itself as it creates circular dependency.",hint:"Logical error",level:"basic"},{question:"What is the top-most class in Java inheritance?",shortAnswer:"Object class.",explanation:"Every class in Java implicitly extends the Object class.",hint:"Root class",level:"basic"},{question:"What happens in multilevel inheritance method overriding?",shortAnswer:"Closest method is called.",explanation:"The method in the most derived class overrides all previous implementations.",hint:"Child has priority",level:"intermediate"},{question:"Can hierarchical inheritance lead to code duplication?",shortAnswer:"No, it reduces duplication.",explanation:"Common code is placed in parent class and reused by all child classes.",hint:"Shared parent",level:"intermediate"},{question:"How does constructor chaining work in multilevel inheritance?",shortAnswer:"From top to bottom.",explanation:"Constructors are called in order from parent to child using super().",hint:"Top-down execution",level:"intermediate"},{question:"Can we combine single and multilevel inheritance?",shortAnswer:"Yes.",explanation:"Inheritance types can be combined to create complex class hierarchies.",hint:"Hybrid structure",level:"intermediate"},{question:"What is method resolution order in multilevel inheritance?",shortAnswer:"Child → Parent → Grandparent.",explanation:"Java searches for method from current class up the inheritance chain.",hint:"Bottom-up search",level:"intermediate"},{question:"Can we override methods in hierarchical inheritance?",shortAnswer:"Yes.",explanation:"Each child class can override parent methods independently.",hint:"Different behaviors",level:"intermediate"},{question:"Is multilevel inheritance allowed in Java?",shortAnswer:"Yes.",explanation:"Java fully supports multilevel inheritance through class chaining.",hint:"Chain allowed",level:"intermediate"},{question:"Can we use super keyword in multilevel inheritance?",shortAnswer:"Yes.",explanation:"super can access immediate parent class members.",hint:"Direct parent only",level:"intermediate"},{question:"What is ambiguity problem in inheritance?",shortAnswer:"Confusion due to multiple inheritance.",explanation:"Occurs when a class inherits same method from multiple parents.",hint:"Diamond problem",level:"intermediate"},{question:"Why Java avoids multiple inheritance with classes?",shortAnswer:"To avoid ambiguity.",explanation:"Multiple inheritance can create confusion in method resolution.",hint:"Conflict issue",level:"intermediate"},{question:"How does JVM handle method lookup in multilevel inheritance?",shortAnswer:"Dynamic method dispatch.",explanation:"JVM determines method at runtime by checking actual object type.",hint:"Runtime decision",level:"expert"},{question:"What happens if same method exists in all levels?",shortAnswer:"Child version executes.",explanation:"Overridden method in child class overrides all previous versions.",hint:"Latest override wins",level:"expert"},{question:"Can hierarchical inheritance improve maintainability?",shortAnswer:"Yes.",explanation:"Common logic in parent improves maintainability and reduces duplication.",hint:"Centralized logic",level:"expert"},{question:"What is tight coupling in inheritance?",shortAnswer:"Strong dependency between classes.",explanation:"Child class depends heavily on parent implementation.",hint:"Risk in design",level:"expert"},{question:"How does inheritance affect memory allocation?",shortAnswer:"Single object contains all members.",explanation:"Child object contains inherited properties in memory layout.",hint:"Single object model",level:"expert"},{question:"Can multilevel inheritance cause performance issues?",shortAnswer:"Slightly, but negligible.",explanation:"Long inheritance chains may slightly affect lookup time.",hint:"Deep hierarchy",level:"expert"},{question:"What is diamond problem in inheritance?",shortAnswer:"Ambiguity in multiple inheritance.",explanation:"Occurs when two classes inherit from same parent and child inherits both.",hint:"Multiple paths",level:"expert"},{question:"How is diamond problem solved in Java?",shortAnswer:"Using interfaces.",explanation:"Java avoids it by not allowing multiple inheritance with classes.",hint:"Interfaces only",level:"expert"},{question:"Can hierarchical inheritance affect polymorphism?",shortAnswer:"Yes.",explanation:"Different child classes can provide different implementations of same method.",hint:"Same method, different behavior",level:"expert"},{question:"What is best practice for inheritance design?",shortAnswer:"Use when 'is-a' relationship exists.",explanation:"Inheritance should represent real-world relationships and avoid misuse.",hint:"is-a relationship",level:"expert"}],k=()=>{const[r,t]=i.useState("single");return e.jsxs("div",{className:"w-full max-w-6xl mx-auto px-4 py-8 space-y-8 dark:bg-gray-900 bg-gray-50 transition-colors duration-300",children:[e.jsxs("div",{className:"animate-[fadeSlideUp_0.6s_ease-out] motion-safe:animate-[fadeSlideUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-blue-500 pl-4",children:"Types of Inheritance in Java"}),e.jsxs("p",{className:"text-lg text-gray-700 dark:text-gray-300 leading-relaxed",children:["Java supports three main types of inheritance: ",e.jsx("strong",{className:"text-blue-600 dark:text-blue-400",children:"Single"}),",",e.jsx("strong",{className:"text-green-600 dark:text-green-400",children:" Multilevel"}),", and",e.jsx("strong",{className:"text-purple-600 dark:text-purple-400",children:" Hierarchical"}),". Understanding when to use each type is crucial for building scalable, maintainable applications."]})]}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.1s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center",children:"📊 Explore Inheritance Types"}),e.jsxs("div",{className:"flex flex-wrap gap-4 justify-center mb-8",children:[e.jsx("button",{onClick:()=>t("single"),className:a("px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105",r==="single"?"bg-blue-500 text-white shadow-lg":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),children:"🔷 Single Inheritance"}),e.jsx("button",{onClick:()=>t("multilevel"),className:a("px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105",r==="multilevel"?"bg-green-500 text-white shadow-lg":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),children:"📚 Multilevel Inheritance"}),e.jsx("button",{onClick:()=>t("hierarchical"),className:a("px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105",r==="hierarchical"?"bg-purple-500 text-white shadow-lg":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),children:"🌳 Hierarchical Inheritance"})]}),e.jsxs("div",{className:"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg p-6 mb-6",children:[r==="single"&&e.jsxs("div",{className:"text-center",children:[e.jsxs("svg",{viewBox:"0 0 500 300",className:"w-full max-w-md mx-auto",children:[e.jsx("rect",{x:"175",y:"30",width:"150",height:"60",rx:"8",fill:"#3B82F6",stroke:"#2563EB",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"250",y:"65",textAnchor:"middle",fill:"white",fontSize:"16",fontWeight:"bold",children:"Parent Class"}),e.jsx("line",{x1:"250",y1:"90",x2:"250",y2:"140",stroke:"#F59E0B",strokeWidth:"3",markerEnd:"url(#arrowhead)",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",fill:"freeze"})}),e.jsx("rect",{x:"175",y:"150",width:"150",height:"60",rx:"8",fill:"#10B981",stroke:"#059669",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0;1",dur:"1.5s",begin:"1s",fill:"freeze"})}),e.jsx("text",{x:"250",y:"185",textAnchor:"middle",fill:"white",fontSize:"16",fontWeight:"bold",children:"Child Class"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#F59E0B"})})})]}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mt-4",children:[e.jsx("strong",{children:"Single Inheritance:"})," One parent → One child (simplest form)"]})]}),r==="multilevel"&&e.jsxs("div",{className:"text-center",children:[e.jsxs("svg",{viewBox:"0 0 500 400",className:"w-full max-w-md mx-auto",children:[e.jsx("rect",{x:"175",y:"20",width:"150",height:"55",rx:"8",fill:"#3B82F6",stroke:"#2563EB",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"250",y:"52",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"GrandParent"}),e.jsx("line",{x1:"250",y1:"75",x2:"250",y2:"120",stroke:"#F59E0B",strokeWidth:"3",markerEnd:"url(#arrowhead2)",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",fill:"freeze"})}),e.jsx("rect",{x:"175",y:"130",width:"150",height:"55",rx:"8",fill:"#10B981",stroke:"#059669",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0;1",dur:"1.5s",begin:"0.5s",fill:"freeze"})}),e.jsx("text",{x:"250",y:"162",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Parent"}),e.jsx("line",{x1:"250",y1:"185",x2:"250",y2:"230",stroke:"#F59E0B",strokeWidth:"3",markerEnd:"url(#arrowhead2)",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",begin:"1s",fill:"freeze"})}),e.jsx("rect",{x:"175",y:"240",width:"150",height:"55",rx:"8",fill:"#8B5CF6",stroke:"#6D28D9",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0;1",dur:"1.5s",begin:"1.5s",fill:"freeze"})}),e.jsx("text",{x:"250",y:"272",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Child"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowhead2",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#F59E0B"})})})]}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mt-4",children:[e.jsx("strong",{children:"Multilevel Inheritance:"})," Chain of inheritance (GrandParent → Parent → Child)"]})]}),r==="hierarchical"&&e.jsxs("div",{className:"text-center",children:[e.jsxs("svg",{viewBox:"0 0 500 350",className:"w-full max-w-md mx-auto",children:[e.jsx("rect",{x:"175",y:"20",width:"150",height:"55",rx:"8",fill:"#3B82F6",stroke:"#2563EB",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"250",y:"52",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Parent Class"}),e.jsx("line",{x1:"175",y1:"75",x2:"100",y2:"140",stroke:"#F59E0B",strokeWidth:"3",markerEnd:"url(#arrowhead3)",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",fill:"freeze"})}),e.jsx("line",{x1:"250",y1:"75",x2:"250",y2:"140",stroke:"#F59E0B",strokeWidth:"3",markerEnd:"url(#arrowhead3)",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",begin:"0.5s",fill:"freeze"})}),e.jsx("line",{x1:"325",y1:"75",x2:"400",y2:"140",stroke:"#F59E0B",strokeWidth:"3",markerEnd:"url(#arrowhead3)",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"2s",begin:"1s",fill:"freeze"})}),e.jsx("rect",{x:"50",y:"150",width:"100",height:"55",rx:"8",fill:"#10B981",stroke:"#059669",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0;1",dur:"1.5s",begin:"1.5s",fill:"freeze"})}),e.jsx("text",{x:"100",y:"182",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"Child 1"}),e.jsx("rect",{x:"200",y:"150",width:"100",height:"55",rx:"8",fill:"#10B981",stroke:"#059669",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0;1",dur:"1.5s",begin:"2s",fill:"freeze"})}),e.jsx("text",{x:"250",y:"182",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"Child 2"}),e.jsx("rect",{x:"350",y:"150",width:"100",height:"55",rx:"8",fill:"#10B981",stroke:"#059669",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0;1",dur:"1.5s",begin:"2.5s",fill:"freeze"})}),e.jsx("text",{x:"400",y:"182",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"Child 3"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowhead3",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#F59E0B"})})})]}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mt-4",children:[e.jsx("strong",{children:"Hierarchical Inheritance:"})," One parent → Multiple children"]})]})]})]})}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.2s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.2s]",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-t-4 border-blue-500",children:[e.jsx("div",{className:"text-4xl mb-3",children:"🔷"}),e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-2",children:"Single Inheritance"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm mb-3",children:"One parent, one child"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:"A class inherits from exactly one parent class. This is the simplest form and most common in Java."}),e.jsx("div",{className:"mt-3 p-2 bg-gray-100 dark:bg-gray-700 rounded font-mono text-xs",children:e.jsx("code",{children:"class Child extends Parent "})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-t-4 border-green-500",children:[e.jsx("div",{className:"text-4xl mb-3",children:"📚"}),e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-2",children:"Multilevel Inheritance"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm mb-3",children:"Chain of inheritance"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:"A chain of inheritance where a class inherits from another class, which itself inherits from another class."}),e.jsx("div",{className:"mt-3 p-2 bg-gray-100 dark:bg-gray-700 rounded font-mono text-xs",children:e.jsx("code",{children:"class A → class B extends A → class C extends B"})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-t-4 border-purple-500",children:[e.jsx("div",{className:"text-4xl mb-3",children:"🌳"}),e.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-2",children:"Hierarchical Inheritance"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm mb-3",children:"One parent, multiple children"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:"Multiple child classes inherit from a single parent class. Promotes code reuse across siblings."}),e.jsx("div",{className:"mt-3 p-2 bg-gray-100 dark:bg-gray-700 rounded font-mono text-xs",children:e.jsxs("code",{children:["class A "," → class B extends A, class C extends A"]})})]})]})}),e.jsxs("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.3s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.3s]",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(n,{fileModule:o,title:"SingleInheritance.java - Student & CollegeStudent Example",highlightLines:[8,9,18]}),e.jsx(n,{fileModule:d,title:"MultilevelInheritance.java - Person → Employee → Manager Example",highlightLines:[8,9,10,30,31]}),e.jsx(n,{fileModule:c,title:"HierarchicalInheritance.java - Shape → Circle, Rectangle, Triangle",highlightLines:[8,9,21,31,41]}),e.jsx(n,{fileModule:h,title:"RealWorldInheritance.java - Complete School System",highlightLines:[12,13,14,15]})]})]}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.4s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.4s]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 overflow-x-auto",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"📊 Comparison Table"}),e.jsxs("table",{className:"w-full text-left",children:[e.jsx("thead",{className:"bg-gray-100 dark:bg-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 text-gray-900 dark:text-white",children:"Feature"}),e.jsx("th",{className:"p-3 text-gray-900 dark:text-white",children:"Single"}),e.jsx("th",{className:"p-3 text-gray-900 dark:text-white",children:"Multilevel"}),e.jsx("th",{className:"p-3 text-gray-900 dark:text-white",children:"Hierarchical"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300",children:[e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"Number of parents"}),e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"1"}),e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"1 (chain)"}),e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"1"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300",children:[e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"Number of children"}),e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"1"}),e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"1"}),e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"Multiple"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300",children:[e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"Levels"}),e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"2"}),e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"3+"}),e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"2"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300",children:[e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"Complexity"}),e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"Low"}),e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"Medium"}),e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"Medium"})]}),e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300",children:[e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"Use case"}),e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"Simple extension"}),e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"Chain of specialization"}),e.jsx("td",{className:"p-3 text-gray-700 dark:text-gray-300",children:"Multiple specialized versions"})]})]})]})]})}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.5s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.5s]",children:e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"💡 Pro Tips & Best Practices"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-2 p-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300",children:[e.jsx("span",{className:"text-blue-500 text-xl",children:"✓"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Keep hierarchies shallow:"})," Deep inheritance (more than 3-4 levels) makes code hard to maintain and debug."]})]}),e.jsxs("li",{className:"flex items-start gap-2 p-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300",children:[e.jsx("span",{className:"text-blue-500 text-xl",children:"✓"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Use hierarchical inheritance"})," when multiple classes share common behavior but have their own specializations."]})]}),e.jsxs("li",{className:"flex items-start gap-2 p-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300",children:[e.jsx("span",{className:"text-blue-500 text-xl",children:"✓"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Single inheritance is safest"})," — Java's limitation to single inheritance prevents the diamond problem."]})]}),e.jsxs("li",{className:"flex items-start gap-2 p-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300",children:[e.jsx("span",{className:"text-blue-500 text-xl",children:"✓"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Think about future extensions:"})," Design parent classes keeping in mind they might have multiple children."]})]})]})]})}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.6s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.6s]",children:e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-red-500",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-2 p-2 rounded hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors duration-300",children:[e.jsx("span",{className:"text-red-500 font-bold",children:"•"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Creating unnecessarily deep hierarchies:"})," If you find yourself at level 5+, reconsider your design."]})]}),e.jsxs("li",{className:"flex items-start gap-2 p-2 rounded hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors duration-300",children:[e.jsx("span",{className:"text-red-500 font-bold",children:"•"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Forgetting that Java doesn't support multiple inheritance:"})," Use interfaces instead."]})]}),e.jsxs("li",{className:"flex items-start gap-2 p-2 rounded hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors duration-300",children:[e.jsx("span",{className:"text-red-500 font-bold",children:"•"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Circular inheritance attempts:"})," A class cannot extend itself, directly or indirectly."]})]}),e.jsxs("li",{className:"flex items-start gap-2 p-2 rounded hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors duration-300",children:[e.jsx("span",{className:"text-red-500 font-bold",children:"•"}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"IDE Error:"}),' "Cycle detected in inheritance hierarchy" - Fix by removing circular dependency.']})]})]})]})}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.7s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.7s]",children:e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-3",children:"📋 Student Checklist"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 p-2 rounded hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-300",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-green-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I understand Single Inheritance"})]}),e.jsxs("div",{className:"flex items-center gap-2 p-2 rounded hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-300",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-green-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I understand Multilevel Inheritance"})]}),e.jsxs("div",{className:"flex items-center gap-2 p-2 rounded hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-300",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-green-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I understand Hierarchical Inheritance"})]}),e.jsxs("div",{className:"flex items-center gap-2 p-2 rounded hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-300",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-green-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I can choose the right type for a scenario"})]}),e.jsxs("div",{className:"flex items-center gap-2 p-2 rounded hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-300",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-green-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I know Java doesn't support multiple inheritance"})]}),e.jsxs("div",{className:"flex items-center gap-2 p-2 rounded hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors duration-300",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4 text-green-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I can identify inheritance types in code"})]})]})]})}),e.jsx(l,{title:"Types of Inheritance FAQs",questions:m}),e.jsx("div",{className:"animate-[fadeSlideUp_0.6s_ease-out_0.8s] motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.8s]",children:e.jsx(s,{note:"When teaching inheritance types, use real-world analogies that resonate with students from Barrackpore, Shyamnagar, Ichapur, and Naihati. Single inheritance is like a parent-child relationship (Tuhina inherits from her mother). Multilevel is like grandparents → parents → children (The Chatterjee family tradition passed down). Hierarchical is like a teacher (Abhronila) having multiple students (Swadeep, Debangshu). Emphasize that while multilevel can be powerful, students shouldn't go beyond 3-4 levels. Use the shape hierarchy example (Shape → Circle, Rectangle, Triangle) to show practical hierarchical inheritance."})}),e.jsx("div",{className:"text-center text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 p-3 rounded",children:e.jsxs("p",{children:["💭 ",e.jsx("strong",{children:"Think about:"})," Which inheritance type would you use for: Animal → Dog → Puppy? What about Vehicle → Car, Bike, Truck?"]})}),e.jsx("style",{children:`
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
      `})]})};export{k as default};
