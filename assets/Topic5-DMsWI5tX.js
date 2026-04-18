import{r as o,j as e}from"./index-CTaFCVvl.js";import{J as t}from"./JavaFileLoader-XLJUUvz7.js";import{T as l}from"./TeacherSukantaHui-CXljMfmu.js";import{F as c}from"./FAQTemplate-CZZyTGJB.js";import"./JavaCodeBlock-DY4r9R4l.js";import"./prism-BVjeagNH.js";import"./browser-CZkhuWkG.js";import"./prism-java-BwO6k4I_.js";import"./git-branch-DjtSZz17.js";import"./clsx-B-dksMZM.js";const d=`// Payment.java\r
public interface Payment {\r
    boolean processPayment(double amount);\r
    String getPaymentDetails();\r
}`,m=`// CreditCardPayment.java\r
public class CreditCardPayment implements Payment {\r
    private String cardNumber;\r
    private String cardHolderName;\r
\r
    public CreditCardPayment(String cardNumber, String cardHolderName) {\r
        this.cardNumber = cardNumber;\r
        this.cardHolderName = cardHolderName;\r
    }\r
\r
    @Override\r
    public boolean processPayment(double amount) {\r
        // Simulate credit card processing\r
        System.out.println("Processing credit card payment of $" + amount);\r
        System.out.println("Card: " + cardNumber.substring(0, 4) + "******");\r
        return true;\r
    }\r
\r
    @Override\r
    public String getPaymentDetails() {\r
        return "Credit Card: " + cardHolderName;\r
    }\r
}\r
`,p=`// PayPalPayment.java\r
public class PayPalPayment implements Payment {\r
    private String email;\r
\r
    public PayPalPayment(String email) {\r
        this.email = email;\r
    }\r
\r
    @Override\r
    public boolean processPayment(double amount) {\r
        System.out.println("Processing PayPal payment of $" + amount);\r
        System.out.println("Account: " + email);\r
        return true;\r
    }\r
\r
    @Override\r
    public String getPaymentDetails() {\r
        return "PayPal: " + email;\r
    }\r
}`,h=`// PaymentProcessor.java\r
import java.util.List;\r
\r
public class PaymentProcessor {\r
    // Process a single payment\r
    public static void processPayment(Payment payment, double amount) {\r
        if (payment.processPayment(amount)) {\r
            System.out.println("Payment successful via " + payment.getPaymentDetails());\r
        } else {\r
            System.out.println("Payment failed.");\r
        }\r
    }\r
\r
    // Process multiple payments (polymorphism in action)\r
    public static void processPayments(List<Payment> payments, double amount) {\r
        for (Payment payment : payments) {\r
            processPayment(payment, amount);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        Payment cc = new CreditCardPayment("1234-5678-9012-3456", "Swadeep");\r
        Payment pp = new PayPalPayment("tuhina@example.com");\r
\r
        processPayment(cc, 99.99);\r
        processPayment(pp, 49.50);\r
    }\r
}`,u=`// Student.java\r
public class Student implements Comparable<Student> {\r
    private String name;\r
    private int marks;\r
    private String city;\r
\r
    public Student(String name, int marks, String city) {\r
        this.name = name;\r
        this.marks = marks;\r
        this.city = city;\r
    }\r
\r
    @Override\r
    public int compareTo(Student other) {\r
        // Sort by marks descending (higher marks first)\r
        return Integer.compare(other.marks, this.marks);\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return name + " (" + city + ") - " + marks + " marks";\r
    }\r
\r
    public int getMarks() { return marks; }\r
    public String getName() { return name; }\r
}`,y=`// SortDemo.java\r
import java.util.*;\r
\r
public class SortDemo {\r
    public static void main(String[] args) {\r
        List<Student> students = new ArrayList<>();\r
        students.add(new Student("Abhronila", 92, "Barrackpore"));\r
        students.add(new Student("Debangshu", 88, "Shyamnagar"));\r
        students.add(new Student("Swadeep", 95, "Naihati"));\r
        students.add(new Student("Tuhina", 91, "Ichapur"));\r
\r
        System.out.println("Before sorting:");\r
        for (Student s : students) System.out.println(s);\r
\r
        // Uses compareTo() defined in Student\r
        Collections.sort(students);\r
\r
        System.out.println("\\nAfter sorting by marks (descending):");\r
        for (Student s : students) System.out.println(s);\r
    }\r
}`,g=`// UserDAO.java (Data Access Object Interface)\r
import java.util.List;\r
\r
public interface UserDAO {\r
    void addUser(String name, String email);\r
    User findUserById(int id);\r
    List<User> getAllUsers();\r
    void updateUserEmail(int id, String newEmail);\r
    void deleteUser(int id);\r
}\r
\r
// Simple User class\r
class User {\r
    private int id;\r
    private String name;\r
    private String email;\r
\r
    public User(int id, String name, String email) {\r
        this.id = id;\r
        this.name = name;\r
        this.email = email;\r
    }\r
\r
    public String toString() {\r
        return "User{id=" + id + ", name='" + name + "', email='" + email + "'}";\r
    }\r
}`,f=`// UserDAOMySQL.java (Simulated MySQL implementation)\r
import java.util.*;\r
\r
public class UserDAOMySQL implements UserDAO {\r
    private Map<Integer, User> database = new HashMap<>();\r
    private int nextId = 1;\r
\r
    @Override\r
    public void addUser(String name, String email) {\r
        User user = new User(nextId++, name, email);\r
        database.put(user.getId(), user);\r
        System.out.println("MySQL: Added user " + name);\r
    }\r
\r
    @Override\r
    public User findUserById(int id) {\r
        return database.get(id);\r
    }\r
\r
    @Override\r
    public List<User> getAllUsers() {\r
        return new ArrayList<>(database.values());\r
    }\r
\r
    @Override\r
    public void updateUserEmail(int id, String newEmail) {\r
        User user = database.get(id);\r
        if (user != null) {\r
            // In real code, you'd update DB. Here we simulate.\r
            System.out.println("MySQL: Updated email for user " + id);\r
        }\r
    }\r
\r
    @Override\r
    public void deleteUser(int id) {\r
        database.remove(id);\r
        System.out.println("MySQL: Deleted user " + id);\r
    }\r
}`,x=`// DAODemo.java\r
public class DAODemo {\r
    public static void main(String[] args) {\r
        // Program to interface, not implementation\r
        UserDAO userDAO = new UserDAOMySQL();\r
\r
        userDAO.addUser("Abhronila", "abhronila@school.com");\r
        userDAO.addUser("Debangshu", "deba@school.com");\r
\r
        System.out.println("All users:");\r
        for (User u : userDAO.getAllUsers()) {\r
            System.out.println(u);\r
        }\r
\r
        // If we later switch to PostgreSQL, only this line changes:\r
        // UserDAO userDAO = new UserDAOPostgreSQL();\r
    }\r
}`,b=[{question:"Why would you use an interface for a payment system?",shortAnswer:"To support multiple payment methods (Credit Card, PayPal, etc.) without changing the checkout logic.",explanation:"The interface defines the contract; each payment method implements it. The checkout code depends only on the interface.",hint:"Think of 'program to an interface, not an implementation'.",level:"intermediate",codeExample:"Payment p = new CreditCardPayment(...); p.processPayment(100);"},{question:"How does the Comparable interface help in sorting student records?",shortAnswer:"It provides a natural ordering by implementing compareTo(). Collections.sort() uses it.",explanation:"You define how students compare (e.g., by marks, by name) inside compareTo().",hint:"Without Comparable, you would need a separate Comparator.",level:"basic",codeExample:"public int compareTo(Student other) { return this.marks - other.marks; }"},{question:"What is the DAO pattern and why is it interface-based?",shortAnswer:"DAO (Data Access Object) separates database operations from business logic. Interfaces allow swapping database implementations.",explanation:"You define CRUD methods in an interface, then provide concrete classes for MySQL, PostgreSQL, MongoDB, etc.",hint:"Lets you change databases without touching the rest of the code.",level:"expert",codeExample:"UserDAO dao = new UserDAOMySQL(); // can replace with UserDAOPostgreSQL()"},{question:"Can you give a real-world example where multiple unrelated classes implement the same interface?",shortAnswer:"Java's Serializable – classes like String, ArrayList, and custom classes all implement it.",explanation:"They have nothing in common except the ability to be serialized.",hint:"Also Runnable – Thread, TimerTask, and custom tasks.",level:"intermediate",codeExample:""},{question:"What is the advantage of using an interface for a service layer?",shortAnswer:"It allows loose coupling and easy unit testing (mock implementations).",explanation:"Controllers depend on service interfaces, not concrete classes. You can swap real service with a mock during testing.",hint:"Dependency injection frameworks (Spring) rely on this.",level:"expert",codeExample:"class UserController { private UserService service; }"},{question:"How would you design a plugin system using interfaces?",shortAnswer:"Define a Plugin interface with methods like execute(), initialize(), etc. Plugins implement it and are loaded dynamically.",explanation:"The main application only knows the interface; new plugins can be added without recompiling the core.",hint:"Think of browser extensions or IDE plugins.",level:"expert",codeExample:"interface Plugin { void run(); } class HelloPlugin implements Plugin { public void run() { ... } }"},{question:"In the payment example, can we add a new payment method (e.g., Google Pay) without modifying existing code?",shortAnswer:"Yes, just create a new class that implements Payment. The PaymentProcessor remains unchanged.",explanation:"This follows the Open/Closed Principle (open for extension, closed for modification).",hint:"That's the power of interfaces.",level:"intermediate",codeExample:"class GooglePayPayment implements Payment { ... }"},{question:"What is a common mistake when using Comparable?",shortAnswer:"Forgetting that compareTo() must be consistent with equals().",explanation:"If compareTo() returns 0 for two objects, equals() should return true, otherwise collections like TreeSet may misbehave.",hint:"Also, ensure compareTo() is transitive and reflexive.",level:"intermediate",codeExample:""},{question:"Why use an interface for DAO instead of an abstract class?",shortAnswer:"Because DAO implementations (MySQL, PostgreSQL) share no common state; they only need to fulfill the contract. Interfaces are lighter.",explanation:"Abstract classes would force a common base, which is unnecessary and restrictive.",hint:"Use abstract class only if you need to share fields or helper methods.",level:"expert",codeExample:""},{question:"What does 'program to an interface, not an implementation' mean in practice?",shortAnswer:"Use interface types for variables, parameters, and return types instead of concrete classes.",explanation:"Example: `List<String> list = new ArrayList<>();` not `ArrayList<String> list = new ArrayList<>();`",hint:"It makes your code more flexible.",level:"intermediate",codeExample:"Payment payment = new CreditCardPayment(...); // good"},{question:"Can an interface have a default method that provides a common implementation for all DAOs?",shortAnswer:"Yes, for example a default method `default void log(String msg)` that all DAOs can use.",explanation:"But be careful – default methods cannot access instance fields unless the interface provides getters.",hint:"Useful for cross-cutting concerns like logging.",level:"expert",codeExample:'default void logAccess() { System.out.println("Access at " + new Date()); }'},{question:"How do you test code that depends on an interface?",shortAnswer:"Create a mock implementation of the interface for testing, or use a mocking framework like Mockito.",explanation:"You can control the mock's behavior (return values, exceptions) to test edge cases.",hint:"Interfaces make unit testing much easier.",level:"intermediate",codeExample:"Payment mockPayment = mock(Payment.class); when(mockPayment.processPayment(anyDouble())).thenReturn(true);"},{question:"In a microservice architecture, where are interfaces used?",shortAnswer:"To define API contracts (REST or gRPC) between services, often using OpenAPI or Protobuf interfaces.",explanation:"Even within a service, interfaces separate layers (controller → service → repository).",hint:"Interfaces define boundaries.",level:"expert",codeExample:""},{question:"What is the difference between using an interface and a functional interface in practical code?",shortAnswer:"Functional interfaces (single abstract method) can be used with lambda expressions, simplifying code for callbacks, event handlers, and streams.",explanation:"Examples: Runnable, Comparator, Predicate.",hint:"If your interface has only one abstract method, consider @FunctionalInterface.",level:"intermediate",codeExample:'Runnable r = () -> System.out.println("Hello");'},{question:"Can you use an interface to define constants that multiple classes share?",shortAnswer:"Yes, but it's considered an anti-pattern (Constant Interface Anti-Pattern). Better to use a class with private constructor or enums.",explanation:"Implementing an interface for constants pollutes the namespace and leaks implementation detail.",hint:"Use static imports instead.",level:"expert",codeExample:"public interface Constants { int MAX = 100; } // avoid this"},{question:"How does the Java Collections Framework use interfaces?",shortAnswer:"Core interfaces like Collection, List, Set, Map define contracts. Implementations (ArrayList, HashSet, HashMap) provide concrete behavior.",explanation:"This allows polymorphic algorithms (e.g., Collections.sort() works on any List).",hint:"You can write methods that accept List, not ArrayList.",level:"intermediate",codeExample:"public void printList(List<?> list) { for (Object o : list) System.out.println(o); }"},{question:"What is a real-world use of the Comparator interface?",shortAnswer:"Sorting objects by different criteria (e.g., sort students by name, then by marks).",explanation:"You can create multiple Comparator implementations without modifying the Student class.",hint:"Useful when you need multiple sort orders.",level:"intermediate",codeExample:"Comparator<Student> byName = Comparator.comparing(Student::getName);"},{question:"How would you use an interface to implement the Strategy design pattern?",shortAnswer:"Define a Strategy interface with a method (e.g., execute()). Concrete strategies implement it. The context class holds a reference to the Strategy interface.",explanation:"This allows swapping algorithms at runtime.",hint:"Example: Sorting strategy (BubbleSort, QuickSort) implement SortStrategy.",level:"expert",codeExample:"interface SortStrategy { void sort(int[] arr); } class BubbleSort implements SortStrategy { ... }"},{question:"In the payment example, what if you need to add a transaction fee for credit cards only?",shortAnswer:"Implement it inside CreditCardPayment's processPayment method. Other payment methods remain unchanged.",explanation:"Each implementation is independent.",hint:"Interfaces allow varying behavior per implementation.",level:"intermediate",codeExample:""},{question:"Why is it a good practice to have small, focused interfaces (Interface Segregation Principle)?",shortAnswer:"Clients are not forced to depend on methods they don't use. It reduces coupling and makes code easier to understand.",explanation:"Instead of a monolithic Worker interface, split into Eatable, Sleepable, Workable.",hint:"Split large interfaces into role-specific ones.",level:"expert",codeExample:"interface Eatable { void eat(); } interface Workable { void work(); }"},{question:"Can you use an interface to define a callback mechanism?",shortAnswer:"Yes, define an interface with a callback method, and pass an implementation to the event source.",explanation:"Common in GUI programming (e.g., ActionListener) and asynchronous operations.",hint:"Callback interfaces are often functional interfaces.",level:"intermediate",codeExample:'interface ClickListener { void onClick(); } button.setListener(() -> System.out.println("Clicked"));'},{question:"How would you use interfaces to implement dependency injection manually?",shortAnswer:"Pass interface implementations via constructor parameters. The high-level module depends only on the interface.",explanation:"Example: `PaymentService` accepts a `Payment` interface in its constructor.",hint:"No framework needed – pure Java.",level:"expert",codeExample:"class Checkout { private Payment payment; Checkout(Payment payment) { this.payment = payment; } }"},{question:"What is the role of interfaces in layered architecture?",shortAnswer:"Each layer (Presentation, Business, Persistence) defines interfaces for the layer below, allowing independent changes.",explanation:"The business layer defines a Repository interface; the persistence layer implements it.",hint:"Prevents tight coupling between layers.",level:"expert",codeExample:"interface UserRepository { User findById(int id); } class UserRepositoryImpl implements UserRepository { ... }"},{question:"Can an interface be used as a type for a collection of mixed objects?",shortAnswer:"Yes, e.g., `List<Payment>` can hold CreditCardPayment, PayPalPayment, etc.",explanation:"This is polymorphism in action.",hint:"Allows you to process all payments uniformly.",level:"intermediate",codeExample:"List<Payment> payments = Arrays.asList(new CreditCardPayment(...), new PayPalPayment(...));"},{question:"How do you ensure that an interface remains stable over time?",shortAnswer:"Design it carefully, keep it focused, and use default methods for non-breaking additions.",explanation:"Once published, changing an interface breaks all implementations. Default methods allow evolution.",hint:"Think twice before adding abstract methods.",level:"expert",codeExample:""},{question:"What is a practical use of static methods in interfaces?",shortAnswer:"Factory methods: `List.of()`, `Set.of()`, `Comparator.naturalOrder()`.",explanation:"They provide convenient ways to create objects related to the interface.",hint:"Also utility methods that operate on interface types.",level:"intermediate",codeExample:'List<String> list = List.of("a", "b", "c");'},{question:"Can you use an interface to implement a feature toggle?",shortAnswer:"Yes, have two implementations of the same interface – one with the new feature, one without. Choose at runtime.",explanation:"Use configuration to decide which implementation to instantiate.",hint:"Great for A/B testing or gradual rollouts.",level:"expert",codeExample:"Feature f = config.isEnabled() ? new NewFeature() : new OldFeature();"},{question:"Why would you use an interface for a remote service client (e.g., REST API)?",shortAnswer:"The interface defines the API contract. Different implementations can handle HTTP, mock, or cached versions.",explanation:"You can easily swap between a real HTTP client and a fake for testing.",hint:"Also useful for multiple API versions.",level:"expert",codeExample:"interface WeatherService { Weather getWeather(String city); }"},{question:"What is the 'Adapter' pattern and how does it use interfaces?",shortAnswer:"An adapter class implements a target interface and wraps an existing class that does not implement that interface.",explanation:"Allows incompatible interfaces to work together.",hint:"Example: adapting a legacy logging system to a new Logger interface.",level:"expert",codeExample:"class LegacyLoggerAdapter implements Logger { private LegacyLogger legacy; public void log(String msg) { legacy.write(msg); } }"},{question:"How would you design a notification system using interfaces?",shortAnswer:"Define a Notifier interface with send(message) method. Implement EmailNotifier, SMSNotifier, PushNotifier.",explanation:"The system can send notifications via any channel without changing the core logic.",hint:"Easily add SlackNotifier later.",level:"intermediate",codeExample:"interface Notifier { void send(String msg); } class EmailNotifier implements Notifier { ... }"}],L=()=>{const i=o.useRef([]);o.useEffect(()=>{const a=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&(s.target.classList.add("section-visible"),a.unobserve(s.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return i.current.forEach(r=>{r&&a.observe(r)}),()=>a.disconnect()},[]);const n=a=>{a&&!i.current.includes(a)&&i.current.push(a)};return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300",children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .section-animate {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeSlideUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }
        .section-visible {
          animation: fadeSlideUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }
      `}),e.jsxs("section",{ref:n,className:"section-animate max-w-5xl mx-auto px-6 py-12 md:py-16",style:{animationDelay:"0.1s"},children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent",children:"Practical Programs Using Interfaces"}),e.jsxs("p",{className:"text-xl mt-4 leading-relaxed text-gray-600 dark:text-gray-300",children:["See how interfaces solve ",e.jsx("strong",{children:"real‑world problems"})," – from payment systems and sorting algorithms to database abstraction layers."]})]}),e.jsxs("section",{ref:n,className:"section-animate max-w-5xl mx-auto px-6 py-10 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-3xl font-semibold mb-4",children:"💳 Scenario 1: Payment Gateway Integration"}),e.jsxs("p",{className:"mb-4 leading-relaxed",children:["An e‑commerce system needs to support multiple payment methods (Credit Card, PayPal, UPI). By defining a ",e.jsx("code",{children:"Payment"})," interface, we can add new payment types without changing the checkout logic."]}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-xl border-l-4 border-indigo-500 my-6",children:[e.jsx("p",{className:"font-semibold",children:"🎯 Real‑world context:"}),e.jsxs("p",{children:["At ",e.jsx("strong",{children:"Shyamnagar"})," online store, students like ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Tuhina"})," can pay via Credit Card or PayPal. The interface allows easy addition of ",e.jsx("strong",{children:"Google Pay"})," later."]})]}),e.jsxs("div",{className:"space-y-6 mt-6",children:[e.jsx("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-all duration-300",children:e.jsx(t,{fileModule:d,title:"Payment.java",highlightLines:[]})}),e.jsx("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-all duration-300",children:e.jsx(t,{fileModule:m,title:"CreditCardPayment.java",highlightLines:[5,6,7,8,9,10,11,12]})}),e.jsx("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-all duration-300",children:e.jsx(t,{fileModule:p,title:"PayPalPayment.java",highlightLines:[5,6,7,8,9,10,11,12]})}),e.jsx("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-all duration-300",children:e.jsx(t,{fileModule:h,title:"PaymentProcessor.java",highlightLines:[10,11,12,13,14,15,16,17]})})]})]}),e.jsxs("section",{ref:n,className:"section-animate max-w-5xl mx-auto px-6 py-10 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-3xl font-semibold mb-4",children:"📊 Scenario 2: Sorting Students by Marks"}),e.jsxs("p",{className:"mb-4 leading-relaxed",children:["The ",e.jsx("code",{children:"Comparable"})," interface is used to define ",e.jsx("strong",{children:"natural ordering"})," of objects. Here, we sort a list of students based on their marks – a common requirement in school report systems."]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-all duration-300",children:e.jsx(t,{fileModule:u,title:"Student.java",highlightLines:[5,6,7,8,9,10,11,12,13]})}),e.jsx("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-all duration-300",children:e.jsx(t,{fileModule:y,title:"SortDemo.java",highlightLines:[10,11,12,13,14,15,16]})})]})]}),e.jsxs("section",{ref:n,className:"section-animate max-w-5xl mx-auto px-6 py-10 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"0.4s"},children:[e.jsx("h2",{className:"text-3xl font-semibold mb-4",children:"🗄️ Scenario 3: Database Abstraction with DAO Pattern"}),e.jsxs("p",{className:"mb-4 leading-relaxed",children:["In large applications, switching databases (MySQL → PostgreSQL) should not affect business logic. A ",e.jsx("code",{children:"UserDAO"})," interface defines CRUD operations, and concrete classes implement them for specific databases."]}),e.jsxs("div",{className:"bg-teal-50 dark:bg-teal-900/20 p-5 rounded-xl border-l-4 border-teal-500 my-6",children:[e.jsx("p",{className:"font-semibold",children:"🏫 Classroom example:"}),e.jsxs("p",{children:["At ",e.jsx("strong",{children:"Ichapur High School"}),", the admin system needs to store student records. Initially using MySQL, later migrating to MongoDB – only the DAO implementation changes."]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-all duration-300",children:e.jsx(t,{fileModule:g,title:"UserDAO.java",highlightLines:[]})}),e.jsx("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-all duration-300",children:e.jsx(t,{fileModule:f,title:"UserDAOMySQL.java",highlightLines:[5,6,7,8,9,10,11,12,13,14]})}),e.jsx("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-all duration-300",children:e.jsx(t,{fileModule:x,title:"DAODemo.java",highlightLines:[8,9,10,11,12,13,14]})})]})]}),e.jsxs("section",{ref:n,className:"section-animate max-w-5xl mx-auto px-6 py-10 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"0.5s"},children:[e.jsx("h2",{className:"text-3xl font-semibold mb-4",children:"🎓 Key Takeaways for Real Projects"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl hover:shadow-md transition",children:[e.jsx("h3",{className:"text-xl font-bold text-yellow-700 dark:text-yellow-300",children:"💡 Industry Best Practices"}),e.jsxs("ul",{className:"list-disc pl-5 mt-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Program to an interface, not an implementation"})," – increases flexibility."]}),e.jsxs("li",{children:["Use interfaces for ",e.jsx("strong",{children:"dependency injection"})," (Spring, Guice)."]}),e.jsxs("li",{children:["Define ",e.jsx("strong",{children:"service interfaces"})," in layered architecture (Controller → Service → Repository)."]}),e.jsxs("li",{children:["Interface-based design makes ",e.jsx("strong",{children:"unit testing"})," easier (mock implementations)."]})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-5 rounded-xl hover:shadow-md transition",children:[e.jsx("h3",{className:"text-xl font-bold text-green-700 dark:text-green-300",children:"✅ Mini Checklist for Projects"}),e.jsxs("ul",{className:"list-disc pl-5 mt-2 space-y-1",children:[e.jsx("li",{children:"✓ Identify extension points – define interfaces there."}),e.jsx("li",{children:"✓ Keep interfaces focused (single responsibility)."}),e.jsx("li",{children:"✓ Use default methods for backward compatibility only."}),e.jsx("li",{children:"✓ Name interfaces as adjectives or capabilities (`Runnable`, `Payment`)."})]})]})]}),e.jsxs("div",{className:"mt-6 bg-red-50 dark:bg-red-900/20 p-5 rounded-xl",children:[e.jsx("h3",{className:"text-xl font-bold text-red-700 dark:text-red-300",children:"⚠️ Common Mistakes in Practical Code"}),e.jsxs("ul",{className:"list-disc pl-5 mt-2 space-y-1",children:[e.jsxs("li",{children:["Creating ",e.jsx("strong",{children:"fat interfaces"})," with too many methods – violates Interface Segregation Principle."]}),e.jsx("li",{children:"Using interfaces when a simple class would suffice (premature abstraction)."}),e.jsxs("li",{children:["Forgetting that ",e.jsx("strong",{children:"default methods"})," can lead to subtle bugs if overused."]}),e.jsxs("li",{children:["Not using ",e.jsx("code",{children:"@Override"})," annotation – leads to hard-to-find typos."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-animate max-w-5xl mx-auto px-6 py-10 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"0.6s"},children:[e.jsx("h2",{className:"text-3xl font-semibold mb-4",children:"🤔 Think About…"}),e.jsxs("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl italic border-l-8 border-indigo-400",children:[e.jsxs("p",{children:["🔍 ",e.jsx("strong",{children:"Observe carefully:"})," In `PaymentProcessor.java`, the `processPayment` method accepts any `Payment` object. What happens if you pass a `null`?"]}),e.jsxs("p",{className:"mt-2",children:["🔧 ",e.jsx("strong",{children:"Try changing this:"})," Implement a new `UPIPayment` class that implements `Payment`. Does `PaymentProcessor` need any change? Why?"]}),e.jsxs("p",{className:"mt-2",children:["📐 ",e.jsx("strong",{children:"Design thought:"})," In a real project, would you make `UserDAO` an interface or an abstract class? Why?"]})]})]}),e.jsx("section",{ref:n,className:"section-animate max-w-5xl mx-auto px-6 py-10 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"0.7s"},children:e.jsx(c,{title:"Practical Interface Usage – FAQs",questions:b})}),e.jsx("section",{ref:n,className:"section-animate max-w-5xl mx-auto px-6 py-10 border-t border-gray-200 dark:border-gray-700",style:{animationDelay:"0.8s"},children:e.jsx(l,{note:"Practical examples make interfaces come alive. I always start with a payment processing demo – students immediately see the value. Then I show them sorting with `Comparable` – they've used `Collections.sort()` but never thought about the interface behind it. The DAO pattern is advanced but crucial for real work; emphasise that changing from MySQL to PostgreSQL would be trivial with an interface. Assignment idea: Ask them to implement a `Notification` interface with `EmailNotification` and `SMSNotification`, then a `NotificationService` that sends messages to a list of recipients. Common mistake: students try to instantiate interfaces – remind them again that interfaces cannot be instantiated directly."})})]})};export{L as default};
