import{j as t,b as o}from"./vendor-react-core-B-R9HE-Z.js";import{T as x}from"./TeacherSukantaHui-1kTygSSH.js";import{F as f}from"./FAQTemplate-16IfroqC.js";import{P as w}from"./PlainTextPrint-C6NaUtnE.js";import{c as v,bn as S,bh as y,t as C}from"./vendor-icons-Bgr6sRjK.js";const P=[{id:"q1",question:`Practice Output Tracing 1: What is the output of the following Java program?

class Counter {
    static int sCount = 0;
    int iCount = 0;
    Counter() {
        sCount++;
        iCount++;
    }
}
public class Main {
    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = new Counter();
        Counter c3 = new Counter();
        System.out.println(Counter.sCount + " " + c3.iCount);
    }
}`,options:["3 1","3 3","1 1","Compilation error"],answer:"3 1",correctAnswer:0,explanation:"`sCount` is static (shared by all instances), so 3 constructor runs increment it to `3`. `iCount` is an instance variable (separate for each object), so `c3.iCount` is incremented once for `c3` and remains `1`. Output is `3 1`.",explanationBn:"sCount স্ট্যাটিক হওয়ায় ৩ বার ইনক্রিমেন্ট হয়ে ৩ হয়েছে; আর iCount প্রতিটি অবজেক্টে আলাদা থাকায় c3 এর iCount মাত্র ১ হবে; ফলাফল '3 1'।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Medium",hint:"Static is shared across all objects; Instance is unique to each object."},{id:"q2",question:`Practice Debugging 2: Identify the syntax error in the following class definition:

class Product {
    private int prodId;
    public void Product(int id) {
        prodId = id;
    }
}
public class Test {
    public static void main(String[] args) {
        Product p = new Product(101);
    }
}`,options:["Because 'void' was specified, Product(int) is a method not a constructor; calling 'new Product(101)' fails because no matching constructor exists","prodId cannot be private","Product cannot be public","main method cannot create Product objects"],answer:"Because 'void' was specified, Product(int) is a method not a constructor; calling 'new Product(101)' fails because no matching constructor exists",correctAnswer:0,explanation:"Adding `void` demoted `Product(int)` to a method. The compiler only supplies a no-arg default constructor `Product()`. Calling `new Product(101)` fails at compile time.",explanationBn:"void লেখার কারণে Product(int) মেথড হয়ে গেছে, তাই new Product(101) কল করার মতো কোনো কনস্ট্রাক্টর খুঁজে পাওয়া যাবে না।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Medium",hint:"Look at the return type on the intended constructor."},{id:"q3",question:`Practice Output Tracing 3: What is the output of the following Java program?

class Alpha {
    Alpha() {
        System.out.print("A ");
    }
}
class Beta extends Alpha {
    Beta() {
        System.out.print("B ");
    }
}
public class Main {
    public static void main(String[] args) {
        Beta b = new Beta();
    }
}`,options:["A B ","B A ","B ","A "],answer:"A B ",correctAnswer:0,explanation:'The subclass constructor `Beta()` automatically invokes `super()` (the `Alpha()` constructor) first, printing `"A "`, before printing `"B "`. Output is `"A B "`.',explanationBn:"Beta() এর শুরুতে অদৃশ্য super() থাকায় আগে Alpha() চলে 'A ' এবং পরে 'B ' প্রিন্ট হয়; মোট আউটপুট 'A B '।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Easy",hint:"Superclass constructor finishes before subclass constructor."},{id:"q4",question:`Practice Output Tracing 4: What is the output of the following constructor chaining program?

class Square {
    int side;
    Square() {
        this(4);
    }
    Square(int s) {
        side = s;
    }
    int getArea() {
        return side * side;
    }
}
public class Main {
    public static void main(String[] args) {
        Square sq1 = new Square();
        Square sq2 = new Square(6);
        System.out.println(sq1.getArea() + " " + sq2.getArea());
    }
}`,options:["16 36","0 36","16 16","36 16"],answer:"16 36",correctAnswer:0,explanation:"`sq1` calls default constructor which delegates via `this(4)` to set `side = 4` (Area = `4*4 = 16`). `sq2` sets `side = 6` (Area = `6*6 = 36`). Output: `16 36`.",explanationBn:"sq1 এর ক্ষেত্রফল ৪*৪=১৬ এবং sq2 এর ক্ষেত্রফল ৬*৬=৩৬; আউটপুট হবে '16 36'।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Easy",hint:"4*4 = 16 and 6*6 = 36."},{id:"q5",question:`Practice Debugging 5: What is wrong with the following constructor declaration?

class Student {
    String name;
    public Student(String n) {
        System.out.println("Student Created");
        this();
    }
    public Student() {
        name = "Unknown";
    }
}`,options:["Compile-time error: 'call to this must be first statement in constructor'","name cannot be assigned","Student cannot have two constructors","println is not allowed in constructors"],answer:"Compile-time error: 'call to this must be first statement in constructor'",correctAnswer:0,explanation:"`this()` must strictly be the **first statement** in the constructor body. Placing `System.out.println` before `this()` causes a fatal compilation error.",explanationBn:"this() কলটি অবশ্যই কনস্ট্রাক্টরের সবার প্রথম লাইনে থাকতে হবে; এর আগে println লিখলে কম্পাইলার এরর দেয়।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Medium",hint:"Rule for constructor chaining placement."},{id:"q6",question:`Practice Output Tracing 6: What is the output of the following Java program?

class Box {
    int dim;
    Box(int dim) {
        dim = dim;
    }
}
public class Main {
    public static void main(String[] args) {
        Box b = new Box(20);
        System.out.println(b.dim);
    }
}`,options:["0","20","null","Compilation error"],answer:"0",correctAnswer:0,explanation:"Because `this.dim` was not written, the parameter `dim` assigns to itself (Variable Shadowing). The instance variable `dim` remains at its default value `0`.",explanationBn:"'this.dim = dim;' না লিখে 'dim = dim;' লেখায় মূল ফিল্ড পরিবর্তন হয়নি; তাই dim এর ডিফল্ট মান 0 থাকবে।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Medium",hint:"Variable shadowing causes field to stay 0."},{id:"q7",question:"Practice Scenario 7: A banking class has 'private double balance = 5000.0;'. Which method correctly implements a safe withdrawal operation?",options:["public boolean withdraw(double amount) { if (amount > 0 && amount <= balance) { balance -= amount; return true; } return false; }","public void withdraw(double amount) { balance -= amount; }","public double withdraw() { balance = 0; return balance; }","public void withdraw(double a) { balance = a; }"],answer:"public boolean withdraw(double amount) { if (amount > 0 && amount <= balance) { balance -= amount; return true; } return false; }",correctAnswer:0,explanation:"Defensive programming in banking requires checking that the withdrawal amount is positive AND does not exceed the available balance before debiting.",explanationBn:"টাকা তোলার সঠিক মেথডে অবশ্যই পরিমাণ পজিটিভ এবং তা বর্তমান ব্যালেন্সের সমান বা কম কিনা তা যাচাই করতে হবে।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Easy",hint:"Validates positive amount and sufficient funds."},{id:"q8",question:`Practice Output Tracing 8: What is the output of the following array allocation code?

class Point {
    Point() {
        System.out.print("P ");
    }
}
public class Main {
    public static void main(String[] args) {
        Point[] points = new Point[3];
        points[0] = new Point();
    }
}`,options:["P ","P P P ","P P P P ","No output"],answer:"P ",correctAnswer:0,explanation:'`new Point[3]` allocates 3 null references (0 constructor runs). `points[0] = new Point()` instantiates 1 object, printing `"P "` once.',explanationBn:"অ্যারে তৈরিতে কনস্ট্রাক্টর চলে না; শুধুমাত্র points[0] = new Point() একবার চলার কারণে আউটপুট হবে একটি মাত্র 'P '।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Medium",hint:"Only one actual Point instance was created."},{id:"q9",question:`Practice Output Tracing 9: What is the output of the following overloaded method program?

class Calculator {
    int add(int a, int b) {
        return a + b;
    }
    double add(double a, double b) {
        return a + b + 0.5;
    }
}
public class Main {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println(c.add(2, 3) + " " + c.add(2.0, 3.0));
    }
}`,options:["5 5.5","5.5 5.5","5 5","Compilation error"],answer:"5 5.5",correctAnswer:0,explanation:"`c.add(2, 3)` calls `add(int, int)` returning `5`. `c.add(2.0, 3.0)` calls `add(double, double)` returning `2.0 + 3.0 + 0.5 = 5.5`. Output: `5 5.5`.",explanationBn:"ইনটিজার আর্গুমেন্টের জন্য 2+3=5 এবং ডাবল আর্গুমেন্টের জন্য 2.0+3.0+0.5=5.5 রিটার্ন হবে; ফলাফল '5 5.5'।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Easy",hint:"Int method returns 5; Double method returns 5.5."},{id:"q10",question:`Practice Debugging 10: What error occurs in the following code snippet?

class Sample {
    private Sample() {
        System.out.println("Private");
    }
}
public class Main {
    public static void main(String[] args) {
        Sample s = new Sample();
    }
}`,options:["Compile-time error: 'Sample() has private access in Sample'","Prints 'Private'","Runtime NullPointerException","StackOverflowError"],answer:"Compile-time error: 'Sample() has private access in Sample'",correctAnswer:0,explanation:"Because the constructor has `private` access, class `Main` cannot instantiate `Sample` with `new`, producing a compile-time private access error.",explanationBn:"কনস্ট্রাক্টরটি private হওয়ায় বাইরের Main ক্লাস থেকে new Sample() দিয়ে অবজেক্ট তৈরি করলে কম্পাইলার এরর দেয়।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Medium",hint:"Private constructor cannot be called from external classes."},{id:"q11",question:`Practice Output Tracing 11: What is the output of the following Java program?

class Vehicle {
    String type = "Generic";
    Vehicle(String t) {
        type = t;
    }
}
class Car extends Vehicle {
    int speed;
    Car(String t, int s) {
        super(t);
        speed = s;
    }
}
public class Main {
    public static void main(String[] args) {
        Car c = new Car("Sedan", 120);
        System.out.println(c.type + " @ " + c.speed + "km/h");
    }
}`,options:["Sedan @ 120km/h","Generic @ 120km/h","Sedan @ 0km/h","Compilation error"],answer:"Sedan @ 120km/h",correctAnswer:0,explanation:'`Car` constructor passes `"Sedan"` to `super(t)` setting `type = "Sedan"`, then sets `speed = 120`. Output: `"Sedan @ 120km/h"`.',explanationBn:"super('Sedan') প্যারেন্ট ক্লাসে টাইপ সেট করে এবং speed=120 হয়; ফলে আউটপুট 'Sedan @ 120km/h'।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Easy",hint:"super(t) initializes the parent type field."},{id:"q12",question:`Practice Output Tracing 12: What is the output of the following Java program?

class Demo {
    static int x = 5;
    int y = 10;
    Demo() {
        x += 2;
        y += 2;
    }
}
public class Main {
    public static void main(String[] args) {
        Demo d1 = new Demo();
        Demo d2 = new Demo();
        System.out.println(Demo.x + " " + d1.y + " " + d2.y);
    }
}`,options:["9 12 12","7 12 12","9 14 14","5 10 10"],answer:"9 12 12",correctAnswer:0,explanation:"`x` starts at 5 and is incremented twice (5 -> 7 -> 9). `d1.y` starts at 10 and is incremented once for `d1` (12). `d2.y` starts at 10 and is incremented once for `d2` (12). Output: `9 12 12`.",explanationBn:"স্ট্যাটিক x দুবার বেড়ে ৫->৭->৯ হয়; d1.y এবং d2.y প্রত্যেকে আলাদাভাবে ১০ থেকে বেড়ে ১২ হয়; মোট আউটপুট '9 12 12'।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Medium",hint:"Static x is incremented twice; instance y is incremented once per instance."},{id:"q13",question:`Practice Debugging 13: What compile error occurs in the following code?

class Test {
    Test() {
        this();
    }
}`,options:["Compile-time error: 'recursive constructor invocation'","Runtime OutOfMemoryError","NullPointerException","No error"],answer:"Compile-time error: 'recursive constructor invocation'",correctAnswer:0,explanation:"A constructor cannot call itself with `this()`. Java detects direct cyclic recursion and throws `recursive constructor invocation`.",explanationBn:"কনস্ট্রাক্টরের ভেতর নিজেকে this() দিয়ে কল করলে কম্পাইলার রিকার্সিভ ইনভোকেশন এরর দেয়।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Easy",hint:"Constructor calling itself."},{id:"q14",question:`Practice Output Tracing 14: What is the output of the following Java program?

class InitOrder {
    {
        System.out.print("Block ");
    }
    InitOrder() {
        System.out.print("Constructor ");
    }
}
public class Main {
    public static void main(String[] args) {
        InitOrder obj = new InitOrder();
    }
}`,options:["Block Constructor ","Constructor Block ","Constructor ","Block "],answer:"Block Constructor ",correctAnswer:0,explanation:'Instance Initializer blocks (`{ ... }`) execute immediately before the constructor body during object instantiation. Output: `"Block Constructor "`.',explanationBn:"অবজেক্ট তৈরির সময় ইন্সট্যান্স ব্লক ({ ... }) কনস্ট্রাক্টরের মূল কোডের আগেই চলে, তাই আউটপুট 'Block Constructor '।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Hard",hint:"Instance block runs before constructor body."},{id:"q15",question:`Practice Output Tracing 15: What is the output of the following Java program?

class Student {
    private String name;
    public void setName(String n) {
        if (n != null && !n.trim().isEmpty()) {
            name = n;
        } else {
            name = "Invalid";
        }
    }
    public String getName() {
        return name;
    }
}
public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        s.setName("   ");
        System.out.println(s.getName());
    }
}`,options:["Invalid","   ","null","Compilation error"],answer:"Invalid",correctAnswer:0,explanation:'`"   ".trim()` produces an empty string `""`, making `!n.trim().isEmpty()` evaluate to `false`. The `else` branch executes setting `name = "Invalid"`.',explanationBn:"স্পেসযুক্ত স্ট্রিং ট্রিম করায় ফাঁকা হয়ে যায়, ফলে if শর্ত ব্যর্থ হয়ে else ব্লকে 'Invalid' সেট হয়।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Medium",hint:"Trimmed whitespace string is empty."},{id:"q16",question:`Practice Output Tracing 16: What is the output of the following program?

class Test {
    static String str = "";
    Test(int a) {
        str += "A";
    }
    Test(double b) {
        str += "B";
    }
}
public class Main {
    public static void main(String[] args) {
        new Test(10);
        new Test(10.5);
        new Test('C');
        System.out.println(Test.str);
    }
}`,options:["A B A (char 'C' is promoted to int 67, matching Test(int))","A B B","A B C","Compilation error"],answer:"A B A (char 'C' is promoted to int 67, matching Test(int))",correctAnswer:0,explanation:'`10` matches `Test(int)` -> `"A"`. `10.5` matches `Test(double)` -> `"B"`. `\'C\'` is a `char` which promotes via widening to `int` 67 matching `Test(int)` -> `"A"`. Total: `"ABA"`.',explanationBn:"char 'C' স্বয়ংক্রিয়ভাবে int এ প্রসারিত হয়ে Test(int) কনস্ট্রাক্টরে যায়, তাই মোট ফলাফল হবে 'ABA'।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Hard",hint:"char widens to int in type promotion."},{id:"q17",question:`Practice Debugging 17: Which line in the following code produces a compile-time error?

1: class Account {
2:     private double balance;
3:     public Account(double b) { balance = b; }
4: }
5: class Test {
6:     public static void main(String[] args) {
7:         Account a = new Account(500.0);
8:         System.out.println(a.balance);
9:     }
10: }`,options:["Line 8 (Attempting to access private variable 'balance' directly from outside the class)","Line 3","Line 7","Line 1"],answer:"Line 8 (Attempting to access private variable 'balance' directly from outside the class)",correctAnswer:0,explanation:"`balance` has `private` access in `Account`. Line 8 violates encapsulation by attempting direct field reading (`a.balance`) instead of using a public getter.",explanationBn:"লাইন ৮ এ private ভ্যারিয়েবল balance সরাসরি পড়ার চেষ্টা করায় কম্পাইলার 'balance has private access' এরর দেবে।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Easy",hint:"Direct access to private field from another class."},{id:"q18",question:`Practice Output Tracing 18: What is the output of the following Java program?

class Matrix {
    int rows, cols;
    Matrix(int r, int c) {
        rows = r;
        cols = c;
    }
    Matrix(int size) {
        this(size, size);
    }
}
public class Main {
    public static void main(String[] args) {
        Matrix m = new Matrix(3);
        System.out.println(m.rows + "x" + m.cols);
    }
}`,options:["3x3","3x0","0x0","Compilation error"],answer:"3x3",correctAnswer:0,explanation:'`new Matrix(3)` invokes `Matrix(int)` which delegates via `this(3, 3)` to `Matrix(int, int)`, setting `rows = 3` and `cols = 3`. Output is `"3x3"`.',explanationBn:"Matrix(3) কনস্ট্রাক্টর this(3, 3) কল করায় rows=3 এবং cols=3 সেট হয়; আউটপুট '3x3'।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Easy",hint:"Square matrix constructor delegates size to rows and cols."},{id:"q19",question:`Practice Output Tracing 19: What is the output of the following Java program?

class Base {
    Base() {
        System.out.print("1 ");
    }
}
class Derived extends Base {
    Derived() {
        this("Hi");
        System.out.print("2 ");
    }
    Derived(String s) {
        System.out.print("3 ");
    }
}
public class Main {
    public static void main(String[] args) {
        new Derived();
    }
}`,options:["1 3 2 ","3 2 1 ","1 2 3 ","2 3 1 "],answer:"1 3 2 ",correctAnswer:0,explanation:'`new Derived()` calls `Derived()` -> calls `this("Hi")`. `Derived(String)` implicitly calls `super()` (`Base()`) printing `"1 "`, then prints `"3 "`. Control returns to `Derived()` which prints `"2 "`. Output: `"1 3 2 "`.',explanationBn:"Derived(String) প্যারেন্ট Base() কল করে '1 ' প্রিন্ট করে, তারপর '3 ' প্রিন্ট করে, শেষে Derived() '2 ' প্রিন্ট করে; ফলাফল '1 3 2 '।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Hard",hint:"Trace chaining: Derived() -> Derived(String) -> super() (Base)."},{id:"q20",question:"Practice Scenario 20: How should an Employee class calculate Net Salary securely in an encapsulated system?",options:["Store 'basicSalary' privately and calculate Net Salary on-the-fly inside a public getter: 'public double getNetSalary() { return basicSalary + (basicSalary * 0.10) - (basicSalary * 0.05); }'","Allow users to enter any Net Salary they want directly","Set net salary to ₹0","Make salary public static"],answer:"Store 'basicSalary' privately and calculate Net Salary on-the-fly inside a public getter: 'public double getNetSalary() { return basicSalary + (basicSalary * 0.10) - (basicSalary * 0.05); }'",correctAnswer:0,explanation:"Computed properties prevent synchronization bugs: calculating DA allowances and PF deductions dynamically inside `getNetSalary()` ensures values are always accurate.",explanationBn:"বেসিক স্যালারি private রেখে গেটার মেথডের মাধ্যমে অন-দ্য-ফ্লাই নেট স্যালারি হিসাব করে দিলে ডেটা সবসময় নির্ভুল থাকে।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Medium",hint:"On-the-fly computed getter ensures accurate payroll."},{id:"q21",question:`Practice Output Tracing 21: What is the output of the following Java snippet?

class Item {
    int id;
    Item(int id) {
        this.id = id;
    }
}
public class Main {
    public static void main(String[] args) {
        Item a = new Item(10);
        Item b = new Item(10);
        System.out.println((a == b) + " " + (a.id == b.id));
    }
}`,options:["false true","true true","false false","true false"],answer:"false true",correctAnswer:0,explanation:"`a == b` compares memory addresses (different objects on heap -> `false`). `a.id == b.id` compares primitive `int` values (`10 == 10` -> `true`). Output: `false true`.",explanationBn:"a == b মেমরি অ্যাড্রেস ভিন্ন হওয়ায় false, কিন্তু a.id == b.id এর মান ১০==১০ হওয়ায় true; আউটপুট 'false true'।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Medium",hint:"Reference comparison vs Primitive value comparison."},{id:"q22",question:`Practice Debugging 22: What happens when trying to compile:

class Car {
    int speed;
    public Car(int s) {
        speed = s;
    }
}
public class Test {
    public static void main(String[] args) {
        Car c1 = new Car(100);
        c1.Car(150);
    }
}`,options:["Compile-time error: 'cannot find symbol: method Car(int)' on line 'c1.Car(150)'","Updates speed to 150","Creates a new Car object","Throws a NullPointerException"],answer:"Compile-time error: 'cannot find symbol: method Car(int)' on line 'c1.Car(150)'",correctAnswer:0,explanation:"Constructors cannot be called on existing object instances via the dot operator (`c1.Car(150)`). The compiler looks for a method named `Car` with return type, fails, and emits `cannot find symbol`.",explanationBn:"বিদ্যমান অবজেক্টের ওপর ডট দিয়ে কনস্ট্রাক্টর কল (c1.Car(150)) করা যায় না; কম্পাইলার একে মেথড ভেবে এরর দেয়।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Medium",hint:"Constructors cannot be called with the dot operator."},{id:"q23",question:`Practice Output Tracing 23: What is the output of the following Java program?

class Sample {
    int num = 100;
    Sample() {
        num = 200;
    }
}
public class Main {
    public static void main(String[] args) {
        Sample s = new Sample();
        System.out.println(s.num);
    }
}`,options:["200","100","0","300"],answer:"200",correctAnswer:0,explanation:"The field initializer sets `num = 100` first. Then the constructor body executes immediately after, overwriting `num = 200`. Output is `200`.",explanationBn:"প্রথমে ফিল্ডের মান 100 হলেও পরবর্তীতে কনস্ট্রাক্টর চলে তা পরিবর্তন করে 200 করে দেয়; আউটপুট 200।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Easy",hint:"Constructor body executes after field initializers and sets 200."},{id:"q24",question:`Practice Output Tracing 24: What is the output of the following Java program?

class Book {
    String title;
    Book(String title) {
        this.title = title;
    }
    Book(Book other) {
        this.title = other.title;
    }
}
public class Main {
    public static void main(String[] args) {
        Book b1 = new Book("Java IT 802");
        Book b2 = new Book(b1);
        b1.title = "Advanced Java";
        System.out.println(b2.title);
    }
}`,options:["Java IT 802","Advanced Java","null","Compilation error"],answer:"Java IT 802",correctAnswer:0,explanation:'`b2` is a separate object created via the copy constructor. Mutating `b1.title` to `"Advanced Java"` does NOT alter `b2.title`, which remains `"Java IT 802"`.',explanationBn:"কপি কনস্ট্রাক্টরের মাধ্যমে b2 একটি সম্পূর্ণ পৃথক অবজেক্টে পরিণত হয়েছে, তাই b1 পরিবর্তন করলেও b2 এর মান 'Java IT 802' থাকবে।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Medium",hint:"Copy constructor creates an independent clone."},{id:"q25",question:"Practice Scenario 25: A student wants to count how many active objects of class 'Session' are created. Where should the counter increment be placed?",options:["Inside the constructor: increment a 'static int activeSessions = 0;' variable","Inside an instance variable declaration","Inside the main method only","In an external text file"],answer:"Inside the constructor: increment a 'static int activeSessions = 0;' variable",correctAnswer:0,explanation:"Because the constructor executes automatically every single time a new object is created, placing `activeSessions++` inside the constructor guarantees 100% accurate count.",explanationBn:"যেহেতু অবজেক্ট তৈরির সাথে সাথেই কনস্ট্রাক্টর চলে, তাই কনস্ট্রাক্টরের ভেতর static ভ্যারিয়েবল বাড়ালে নির্ভুল গণনা পাওয়া যায়।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Easy",hint:"Increment a shared static counter inside constructor."},{id:"q26",question:`Practice Output Tracing 26: What is the output of the following Java code?

class Demo {
    int a = 5;
    void modify(Demo d) {
        d.a += 10;
    }
}
public class Main {
    public static void main(String[] args) {
        Demo d1 = new Demo();
        d1.modify(d1);
        System.out.println(d1.a);
    }
}`,options:["15","5","10","Compilation error"],answer:"15",correctAnswer:0,explanation:"Java passes object references by value. Passing `d1` into `modify` allows mutating the underlying heap object's `a` field (`5 + 10 = 15`).",explanationBn:"অবজেক্ট রেফারেন্স পাস করায় মেথডের ভেতর ফিল্ড পরিবর্তন হয়ে মূল অবজেক্টের মান ৫+১০=১৫ হবে।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Medium",hint:"Mutating object fields through passed reference."},{id:"q27",question:`Practice Output Tracing 27: What is the output of the following Java program?

class Test {
    int x;
    Test(int x) {
        this.x = x;
    }
}
public class Main {
    public static void main(String[] args) {
        Test[] arr = { new Test(10), new Test(20), new Test(30) };
        int sum = 0;
        for (Test t : arr) {
            sum += t.x;
        }
        System.out.println(sum);
    }
}`,options:["60","0","30","NullPointerException"],answer:"60",correctAnswer:0,explanation:"The array holds 3 initialized `Test` instances with values `10, 20, 30`. The enhanced for-loop sums them up: `10 + 20 + 30 = 60`.",explanationBn:"অ্যারেতে তিনটি অবজেক্টের মান যথাক্রমে ১০, ২০ ও ৩০; লুপে যোগফল হবে ১০ + ২০ + ৩০ = ৬০।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Easy",hint:"10 + 20 + 30 = 60."},{id:"q28",question:"Final Mastery Check: Which checklist item is essential for scoring 100% in CBSE Class XII IT (802) Java OOP & Constructors questions?",options:["Verify constructor names match class names, check for illegal return types, trace 'this()' and 'super()' on line 1, and ensure private fields have getters/setters","Memorize the entire Java compiler source code","Write all code in a single line without spaces","Use only global public variables"],answer:"Verify constructor names match class names, check for illegal return types, trace 'this()' and 'super()' on line 1, and ensure private fields have getters/setters",correctAnswer:0,explanation:"Mastering these core rules guarantees success in CBSE IT (802): Exact Name Matching, No Return Types, Proper Chaining Placement, and Robust Encapsulation.",explanationBn:"সিবিএসই পরীক্ষায় সম্পূর্ণ নম্বর পেতে কনস্ট্রাক্টরের নাম, রিটার্ন টাইপ না থাকা, this()/super() এর প্রথম লাইনে অবস্থান এবং এনক্যাপসুলেশন নিশ্চিত করতে হবে।",topic:"Practice Your Skill Here (Interactive Workspace)",difficulty:"Easy",hint:"Core exam checklist for Java OOP and Constructors."}],k=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 004_001: OOP PRINCIPLES, CLASS DESIGN & CONSTRUCTORS\r
TOPIC 9: PRACTICE YOUR SKILL HERE (INTERACTIVE WORKSPACE)\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. PRACTICE EXERCISES\r
--------------------------------------------------------------------------------\r
Exercise 1:\r
Design a \`Student\` class with:\r
- Private fields: \`rollNo\`, \`name\`, \`percentage\`\r
- Default constructor setting roll=0, name="Unknown", percentage=0.0\r
- Parameterized constructor accepting all 3 attributes\r
- Getter and setter methods with validation (percentage between 0 and 100).\r
\r
Exercise 2:\r
Trace constructor output when an array of objects is instantiated.\r
================================================================================\r
`,T=()=>{const[n,p]=o.useState(0),[r,m]=o.useState({}),[c,h]=o.useState({}),l=[{id:0,title:"Challenge 1: Constructor Tracing",code:`class Point {
    int x, y;
    Point() { x = 2; y = 3; }
    Point(int a, int b) { x = a * 2; y = b * 3; }
}
// In main:
Point p1 = new Point();
Point p2 = new Point(4, 5);
System.out.println(p1.x + p2.x + " " + (p1.y + p2.y));`,options:["10 18","6 8","10 8","2 15"],correct:0,explanation:`p1: x=2, y=3.
p2: x=4*2=8, y=5*3=15.
p1.x + p2.x = 2 + 8 = 10.
p1.y + p2.y = 3 + 15 = 18.
Output: '10 18'.`},{id:1,title:"Challenge 2: Method vs Constructor Identification",code:`public class Test {
    public void Test() {
        System.out.print("Method ");
    }
    public Test() {
        System.out.print("Constructor ");
    }
    public static void main(String[] args) {
        Test t = new Test();
    }
}`,options:["Constructor ","Method ","Method Constructor ","Compilation error"],correct:0,explanation:"`new Test()` calls the constructor (the one without a return type). The method `public void Test()` is not invoked, so it prints 'Constructor '."},{id:2,title:"Challenge 3: Encapsulation Access Check",code:`class Student {
    private int marks = 90;
}
public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        System.out.println(s.marks);
    }
}`,options:["Compilation error: marks has private access in Student","Prints 90","NullPointerException","Prints 0"],correct:0,explanation:"Private fields cannot be accessed directly across class boundaries. Accessing `s.marks` causes a compile error."}],i=l[n],b=a=>{m(e=>({...e,[n]:a})),h(e=>({...e,[n]:!0}))};return t.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[t.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[t.jsxs("div",{children:[t.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2",children:[t.jsx(S,{className:"w-3.5 h-3.5"})," Interactive Assessment Arena"]}),t.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"OOP Principles & Constructor Mastery Challenges"})]}),t.jsx("div",{className:"flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs",children:l.map((a,e)=>t.jsxs("button",{onClick:()=>p(e),className:`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${n===e?"bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-950":"text-slate-400 hover:text-white"}`,children:["Task ",e+1]},a.id))})]}),t.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-5",children:[t.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[t.jsx(y,{className:"w-4 h-4 text-emerald-400"})," ",i.title]}),t.jsx("pre",{className:"text-xs font-mono text-slate-300 bg-slate-900/90 p-4 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed",children:i.code}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Select the correct result:"}),t.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5",children:i.options.map((a,e)=>{const g=r[n]===e,u=i.correct===e,d=c[n];let s="bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-850";return d&&(u?s="bg-emerald-500/10 border-emerald-500/40 text-emerald-300 font-bold":g&&(s="bg-rose-500/10 border-rose-500/40 text-rose-300")),t.jsxs("button",{onClick:()=>b(e),className:`p-3 rounded-xl border text-xs font-mono text-left transition cursor-pointer flex items-center justify-between ${s}`,children:[t.jsx("span",{children:a}),d&&u&&t.jsx(C,{className:"w-4 h-4 text-emerald-400 shrink-0"})]},e)})})]}),c[n]&&t.jsxs("div",{className:`p-4 rounded-xl border text-xs space-y-1 ${r[n]===i.correct?"bg-emerald-500/10 border-emerald-500/30 text-emerald-300":"bg-amber-500/10 border-amber-500/30 text-amber-300"}`,children:[t.jsx("strong",{className:"block font-bold",children:r[n]===i.correct?"🎉 Correct Answer!":"💡 Solution Walkthrough:"}),t.jsx("p",{className:"whitespace-pre-line font-mono text-[11px] leading-relaxed text-slate-300",children:i.explanation})]})]})]})},N=()=>t.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:t.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[t.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:[t.jsx(v,{className:"w-3.5 h-3.5"})," Module 004_001 • Topic 9"]}),t.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:"Practice your Skill here: OOP & Constructors"}),t.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:"Test your understanding with authentic CBSE examination constructor questions, void traps, and encapsulation problem sets."})]}),t.jsx(T,{}),t.jsx(f,{title:"Frequently Asked Questions • OOP Practice Challenges",questions:P}),t.jsx(w,{content:k,title:"CBSE Class XII IT 802 – OOP Practice Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 9 Note (.txt)",downloadFileName:"004_001_topic9_note.txt"}),t.jsx(x,{note:"Congratulations on mastering OOP principles and constructors! You now know how to design classes, prevent return type traps, and write clean overloaded constructors. — Sukanta Hui"})]})});export{N as default};
