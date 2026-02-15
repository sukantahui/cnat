import{r as o,j as e}from"./index-CG3iA-Ea.js";import{c as d}from"./clsx-B-dksMZM.js";const y=({code:s="",highlightLines:N=[],title:n="Java Code (BlueJ)"})=>{const[k,x]=o.useState([]),[j,u]=o.useState(!1),[f,g]=o.useState(!1),c=o.useRef(null);o.useEffect(()=>{const t=(p=>{const b=["public","private","protected","class","interface","extends","implements","static","final","void","return","new","import","package","this","super","if","else","for","while","do","switch","case","break","continue","try","catch","finally","throw","throws","instanceof","synchronized","volatile","transient","native","strictfp","enum","assert","boolean","byte","char","short","int","long","float","double","null","true","false"];let r=p;return b.forEach(a=>{const i=new RegExp(`\\b${a}\\b`,"g");r=r.replace(i,`<span class="text-purple-400 font-semibold">${a}</span>`)}),r=r.replace(/"[^"]*"/g,'<span class="text-green-400">$&</span>'),r=r.replace(/\/\/.*$/gm,'<span class="text-gray-500 italic">$&</span>'),r=r.replace(/\/\*[\s\S]*?\*\//g,'<span class="text-gray-500 italic">$&</span>'),r=r.replace(/\b\d+\b/g,'<span class="text-yellow-400">$&</span>'),r=r.replace(/\?/g,'<span class="text-blue-400 font-bold">?</span>'),r=r.replace(/(extends|super)/g,'<span class="text-pink-500 font-bold">$1</span>'),r=r.replace(/&lt;[^&]+&gt;/g,'<span class="text-cyan-400">$&</span>'),r=r.replace(/\b(List|ArrayList|Collection|Set|Map)\b/g,'<span class="text-emerald-400">$&</span>'),r})(s.replace(/</g,"&lt;").replace(/>/g,"&gt;"));x(t.split(`
`))},[s]);function v(){navigator.clipboard.writeText(s),u(!0),setTimeout(()=>u(!1),1500)}async function w(){g(!0),await new Promise(h=>setTimeout(h,300));const m=document.createElement("canvas"),t=m.getContext("2d"),p=s.split(`
`),b=24,r=40,a=800,i=r*2+p.length*b+100;m.width=a,m.height=i,t.fillStyle="#0f172a",t.fillRect(0,0,a,i),t.fillStyle="#1e293b",t.fillRect(0,0,a,50),t.fillStyle="#38bdf8",t.font="bold 16px sans-serif",t.fillText(`☕ ${n}`,20,30),t.font="14px monospace",t.fillStyle="#e2e8f0",p.forEach((h,C)=>{t.fillText(h,r,r+70+C*b)}),t.fillStyle="#475569",t.font="12px sans-serif",t.fillText("Generated from Coder & AccoTax - Barrackpore",20,i-20);const l=document.createElement("a");l.download="java-code.png",l.href=m.toDataURL("image/png"),l.click(),setTimeout(()=>g(!1),2e3)}return e.jsxs("div",{ref:c,className:"my-6 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black border border-sky-500/20 shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:shadow-[0_0_40px_rgba(56,189,248,0.25)] transition-all duration-500",children:[e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700/50 text-sm font-semibold text-slate-300 tracking-wide",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("span",{className:"w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors duration-300"}),e.jsx("span",{className:"w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors duration-300"}),e.jsx("span",{className:"w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors duration-300"})]}),e.jsxs("span",{className:"ml-3 text-sky-400 font-mono",children:["☕ ",n]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{onClick:v,className:"px-4 py-2 rounded-lg text-sm bg-gradient-to-r from-slate-800 to-slate-700 hover:from-sky-600 hover:to-blue-600 transition-all duration-300 active:scale-95 flex items-center gap-2",children:j?e.jsxs(e.Fragment,{children:[e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"Copied!"]}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})}),"Copy Code"]})}),e.jsx("button",{onClick:w,className:"px-4 py-2 rounded-lg text-sm bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-600 hover:to-green-500 transition-all duration-300 active:scale-95 flex items-center gap-2",disabled:f,children:f?e.jsxs(e.Fragment,{children:[e.jsx("svg",{className:"w-4 h-4 animate-spin",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),"Generating..."]}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})}),"Save JPG"]})})]})]}),e.jsxs("div",{className:"flex text-sm leading-7 font-mono overflow-auto max-h-[500px]",children:[e.jsx("div",{className:"px-4 py-5 text-right select-none text-slate-600 border-r border-slate-800 bg-slate-950/80 sticky left-0",children:k.map((m,t)=>e.jsx("div",{className:"pr-2",children:t+1},t))}),e.jsx("div",{className:"flex-1 px-4 py-5 overflow-auto",children:e.jsx("pre",{className:"whitespace-pre",children:e.jsx("code",{children:k.map((m,t)=>e.jsx("div",{className:d("pl-3 transition-colors duration-200 hover:bg-slate-800/50 rounded",N.includes(t+1)&&"bg-yellow-400/10 border-l-2 border-yellow-400 pl-3 hover:bg-yellow-400/20"),dangerouslySetInnerHTML:{__html:m||"&nbsp;"}},t))})})})]}),f&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/80 z-10",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse",children:e.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),e.jsx("p",{className:"text-white text-lg font-semibold",children:"Generating Image with QR Code..."}),e.jsx("p",{className:"text-slate-400 text-sm mt-2",children:"Download will start automatically"})]})})]})},M=()=>{const[s,N]=o.useState(!0),[n,k]=o.useState("what"),[x,j]=o.useState("basic"),[u,f]=o.useState({}),g=o.useRef({});o.useEffect(()=>{if(typeof window>"u")return;const r=window.matchMedia("(prefers-reduced-motion: reduce)");N(r.matches);const a=l=>N(l.matches);r.addEventListener("change",a);const i=new IntersectionObserver(l=>{l.forEach(h=>{if(h.isIntersecting){const C=h.target.id;f(L=>({...L,[C]:!0}))}})},{threshold:.1,rootMargin:"0px 0px -100px 0px"});return Object.keys(g.current).forEach(l=>{g.current[l]&&i.observe(g.current[l])}),()=>{r.removeEventListener("change",a),i.disconnect()}},[]);const c=(r,a)=>{g.current[r]=a},v=`// Upper Bounded Wildcard Example
import java.util.*;

public class StudentMarksProcessor {
    
    // Method with upper bounded wildcard
    // Can accept List of any type that extends Number
    public static double calculateAverage(List<? extends Number> numbers) {
        if (numbers == null || numbers.isEmpty()) {
            return 0.0;
        }
        
        double sum = 0.0;
        for (Number num : numbers) {
            sum += num.doubleValue();  // Safe because all are Numbers
        }
        return sum / numbers.size();
    }
    
    // Another example: Process different numeric lists
    public static void printNumberDetails(List<? extends Number> numbers) {
        System.out.println("Processing " + numbers.size() + " numbers:");
        for (Number num : numbers) {
            System.out.println("  Value: " + num + ", Type: " + num.getClass().getSimpleName());
        }
    }
}

// Usage in Barrackpore College System
public class CollegeApplication {
    public static void main(String[] args) {
        // ✅ Allowed: List<Integer> - Integer extends Number
        List<Integer> studentMarks = Arrays.asList(88, 92, 85, 95, 90);
        double avgMarks = StudentMarksProcessor.calculateAverage(studentMarks);
        System.out.println("Average marks: " + avgMarks);
        
        // ✅ Allowed: List<Double> - Double extends Number
        List<Double> percentages = Arrays.asList(92.5, 88.0, 95.5, 91.0, 89.5);
        double avgPercentage = StudentMarksProcessor.calculateAverage(percentages);
        System.out.println("Average percentage: " + avgPercentage);
        
        // ✅ Allowed: List<Float> - Float extends Number
        List<Float> floatValues = Arrays.asList(1.5f, 2.3f, 3.7f);
        StudentMarksProcessor.printNumberDetails(floatValues);
        
        // ✅ Allowed: List<Long> - Long extends Number
        List<Long> attendance = Arrays.asList(95L, 88L, 92L, 90L, 87L);
        double avgAttendance = StudentMarksProcessor.calculateAverage(attendance);
        System.out.println("Average attendance: " + avgAttendance);
        
        // Real scenario: Processing marks from different branches
        System.out.println("\\nProcessing marks from Shyamnagar College:");
        List<Integer> shyamnagarMarks = Arrays.asList(85, 92, 78, 95, 88);
        StudentMarksProcessor.printNumberDetails(shyamnagarMarks);
        
        System.out.println("\\nProcessing marks from Naihati College:");
        List<Double> naihatiPercentages = Arrays.asList(94.5, 87.0, 91.5, 96.0, 89.5);
        StudentMarksProcessor.printNumberDetails(naihatiPercentages);
        
        // ❌ NOT Allowed: List<String> - String doesn't extend Number
        // List<String> names = Arrays.asList("Swadeep", "Tuhina", "Abhronila");
        // StudentMarksProcessor.calculateAverage(names); // Compilation error
    }
}`,w=`// Upper Bounded Wildcards with Class Hierarchy
import java.util.*;

// Class hierarchy for Barrackpore College
class CollegePerson {
    protected String name;
    
    public CollegePerson(String name) {
        this.name = name;
    }
    
    public String getName() { return name; }
    
    public void introduce() {
        System.out.println("I am " + name);
    }
}

class Student extends CollegePerson {
    private int rollNumber;
    
    public Student(String name, int roll) {
        super(name);
        this.rollNumber = roll;
    }
    
    public int getRollNumber() { return rollNumber; }
    
    @Override
    public void introduce() {
        System.out.println("Student: " + name + " (Roll: " + rollNumber + ")");
    }
}

class Teacher extends CollegePerson {
    private String subject;
    
    public Teacher(String name, String subject) {
        super(name);
        this.subject = subject;
    }
    
    public String getSubject() { return subject; }
    
    @Override
    public void introduce() {
        System.out.println("Teacher: " + name + " (Subject: " + subject + ")");
    }
}

class Staff extends CollegePerson {
    private String department;
    
    public Staff(String name, String department) {
        super(name);
        this.department = department;
    }
    
    public String getDepartment() { return department; }
    
    @Override
    public void introduce() {
        System.out.println("Staff: " + name + " (Dept: " + department + ")");
    }
}

// Processor using upper bounded wildcards
public class CollegeProcessor {
    
    // Can process any list of CollegePerson or its subclasses
    public static void introduceAll(List<? extends CollegePerson> people) {
        System.out.println("\\nIntroducing College Members:");
        for (CollegePerson person : people) {
            person.introduce();
        }
    }
    
    // Can extract names from any CollegePerson list
    public static List<String> getAllNames(List<? extends CollegePerson> people) {
        List<String> names = new ArrayList<>();
        for (CollegePerson person : people) {
            names.add(person.getName());
        }
        return names;
    }
    
    // Count specific type using instanceof
    public static int countStudents(List<? extends CollegePerson> people) {
        int count = 0;
        for (CollegePerson person : people) {
            if (person instanceof Student) {
                count++;
            }
        }
        return count;
    }
}

// Usage
public class CollegeManagement {
    public static void main(String[] args) {
        // Create lists of different types
        List<Student> students = Arrays.asList(
            new Student("Debangshu", 101),
            new Student("Tuhina", 102),
            new Student("Swadeep", 103)
        );
        
        List<Teacher> teachers = Arrays.asList(
            new Teacher("Sukanta Hui", "Java Programming"),
            new Teacher("Ananya Das", "Data Structures")
        );
        
        List<Staff> staffMembers = Arrays.asList(
            new Staff("Rajesh Kumar", "Administration"),
            new Staff("Priya Sharma", "Library")
        );
        
        List<CollegePerson> allPeople = new ArrayList<>();
        allPeople.addAll(students);
        allPeople.addAll(teachers);
        allPeople.addAll(staffMembers);
        
        // ✅ Allowed: Process students (Student extends CollegePerson)
        CollegeProcessor.introduceAll(students);
        System.out.println("Student names: " + CollegeProcessor.getAllNames(students));
        
        // ✅ Allowed: Process teachers (Teacher extends CollegePerson)
        CollegeProcessor.introduceAll(teachers);
        System.out.println("Teacher names: " + CollegeProcessor.getAllNames(teachers));
        
        // ✅ Allowed: Process staff (Staff extends CollegePerson)
        CollegeProcessor.introduceAll(staffMembers);
        
        // ✅ Allowed: Process mixed list (CollegePerson itself)
        CollegeProcessor.introduceAll(allPeople);
        System.out.println("Total students: " + CollegeProcessor.countStudents(allPeople));
        
        // Real scenario: Ichapur College branch
        List<Student> ichapurStudents = Arrays.asList(
            new Student("Abhronila", 201),
            new Student("Rohit", 202),
            new Student("Sneha", 203)
        );
        
        System.out.println("\\nIchapur College Students:");
        CollegeProcessor.introduceAll(ichapurStudents);
        
        // ❌ NOT Allowed: Adding to upper bounded collection
        // List<? extends CollegePerson> peopleList = new ArrayList<Student>();
        // peopleList.add(new Student("New", 999)); // Compilation error - can't add
        
        // ✅ Allowed: Reading from upper bounded collection
        List<? extends CollegePerson> readOnlyList = students;
        CollegePerson first = readOnlyList.get(0); // Can read
        System.out.println("First person: " + first.getName());
    }
}`,m=`// Upper Bounded Wildcards in Generic Classes
import java.util.*;

// Generic container that can hold any type extending Number
class NumberContainer<T extends Number> {
    private List<T> numbers;
    
    public NumberContainer() {
        numbers = new ArrayList<>();
    }
    
    public void add(T number) {
        numbers.add(number);
    }
    
    public T get(int index) {
        return numbers.get(index);
    }
    
    public int size() {
        return numbers.size();
    }
    
    // Method using upper bounded wildcard parameter
    public void addAllFrom(NumberContainer<? extends T> other) {
        for (int i = 0; i < other.size(); i++) {
            this.add(other.get(i)); // Safe: ? extends T means it's a subtype of T
        }
    }
    
    // Method returning upper bounded wildcard
    public List<? extends Number> getAllAsNumbers() {
        return new ArrayList<>(numbers);
    }
    
    public double calculateSum() {
        double sum = 0.0;
        for (T num : numbers) {
            sum += num.doubleValue();
        }
        return sum;
    }
}

// Processor class with wildcard methods
public class NumberProcessor {
    
    // Static method with upper bounded wildcard
    public static double processContainer(NumberContainer<? extends Number> container) {
        System.out.println("Processing container with " + container.size() + " numbers");
        return container.calculateSum();
    }
    
    // Compare two containers of possibly different but related types
    public static boolean compareContainers(
            NumberContainer<? extends Number> container1,
            NumberContainer<? extends Number> container2) {
        
        return container1.calculateSum() == container2.calculateSum();
    }
    
    // Merge multiple containers
    public static NumberContainer<Number> mergeContainers(
            NumberContainer<? extends Number>... containers) {
        
        NumberContainer<Number> result = new NumberContainer<>();
        for (NumberContainer<? extends Number> container : containers) {
            for (int i = 0; i < container.size(); i++) {
                result.add(container.get(i));
            }
        }
        return result;
    }
}

// Usage in Shyamnagar College Marks System
public class MarksContainerSystem {
    public static void main(String[] args) {
        // Create containers for different numeric types
        NumberContainer<Integer> integerContainer = new NumberContainer<>();
        integerContainer.add(88);
        integerContainer.add(92);
        integerContainer.add(85);
        
        NumberContainer<Double> doubleContainer = new NumberContainer<>();
        doubleContainer.add(92.5);
        doubleContainer.add(88.0);
        doubleContainer.add(95.5);
        
        NumberContainer<Float> floatContainer = new NumberContainer<>();
        floatContainer.add(1.5f);
        floatContainer.add(2.3f);
        floatContainer.add(3.7f);
        
        // Process each container using wildcard method
        System.out.println("Integer container sum: " + 
            NumberProcessor.processContainer(integerContainer));
        
        System.out.println("Double container sum: " + 
            NumberProcessor.processContainer(doubleContainer));
        
        System.out.println("Float container sum: " + 
            NumberProcessor.processContainer(floatContainer));
        
        // Compare containers
        boolean sameSum = NumberProcessor.compareContainers(integerContainer, doubleContainer);
        System.out.println("Do containers have same sum? " + sameSum);
        
        // Merge containers
        NumberContainer<Number> merged = NumberProcessor.mergeContainers(
            integerContainer, doubleContainer, floatContainer);
        
        System.out.println("\\nMerged container (" + merged.size() + " items):");
        System.out.println("Total sum: " + merged.calculateSum());
        
        // Real scenario: Student marks from different semesters
        NumberContainer<Integer> semester1 = new NumberContainer<>();
        semester1.add(85);
        semester1.add(92);
        semester1.add(78);
        
        NumberContainer<Integer> semester2 = new NumberContainer<>();
        semester2.add(88);
        semester2.add(95);
        semester2.add(91);
        
        // Transfer marks from semester1 to a combined container
        NumberContainer<Integer> combined = new NumberContainer<>();
        combined.addAllFrom(semester1);
        combined.addAllFrom(semester2);
        
        System.out.println("\\nCombined marks container:");
        System.out.println("Total marks: " + combined.calculateSum());
        System.out.println("Average: " + (combined.calculateSum() / combined.size()));
        
        // Using wildcard return type
        List<? extends Number> numbers = combined.getAllAsNumbers();
        System.out.println("\\nAll marks as Numbers:");
        for (Number num : numbers) {
            System.out.println("Mark: " + num);
        }
        
        // ❌ NOT Allowed: Adding incompatible types
        // NumberContainer<? extends Number> wildcardContainer = integerContainer;
        // wildcardContainer.add(100); // Compilation error - can't add
        
        // ✅ Allowed: Reading from wildcard container
        NumberContainer<? extends Number> readContainer = integerContainer;
        Number firstNumber = readContainer.get(0); // Can read
        System.out.println("\\nFirst number from read container: " + firstNumber);
    }
}`,t=`// ❌ COMMON MISTAKES with Upper Bounded Wildcards

import java.util.*;

public class WildcardMistakes {
    
    // MISTAKE 1: Trying to add to upper bounded collection
    public static void mistake1() {
        List<? extends Number> numbers = new ArrayList<Integer>();
        
        // ❌ WRONG - Can't add to upper bounded wildcard collection
        // numbers.add(10);                    // Compilation error
        // numbers.add(new Integer(20));       // Compilation error
        // numbers.add(new Double(3.14));      // Compilation error
        
        // ✅ CORRECT - Can only read from upper bounded collections
        List<Integer> intList = new ArrayList<>();
        intList.add(10);
        intList.add(20);
        
        List<? extends Number> readableNumbers = intList;
        Number first = readableNumbers.get(0);  // ✅ Can read
        System.out.println("First number: " + first);
    }
    
    // MISTAKE 2: Confusing extends with super
    public static void mistake2() {
        List<Integer> integers = Arrays.asList(1, 2, 3);
        List<Double> doubles = Arrays.asList(1.5, 2.5, 3.5);
        
        // ✅ CORRECT: Upper bounded for reading
        printNumbers(integers);   // Works: Integer extends Number
        printNumbers(doubles);    // Works: Double extends Number
        
        // ❌ WRONG: Trying to use upper bounded where lower bounded is needed
        // addNumber(integers, 10);  // Would need List<? super Integer>
        
        // Understanding the difference:
        // List<? extends Number> - Producer (get values)
        // List<? super Integer>   - Consumer (add values)
    }
    
    // MISTAKE 3: Overusing wildcards
    public static void mistake3() {
        // ❌ Overly complex - hard to read and maintain
        Map<? extends Comparable<?>, ? extends List<? extends Number>> complexMap;
        
        // ✅ Better - use meaningful type parameters
        Map<String, List<Integer>> simpleMap = new HashMap<>();
        simpleMap.put("marks", Arrays.asList(85, 92, 88));
        
        // Or if you need flexibility, use bounded type parameters
        class FlexibleContainer<K extends Comparable<K>, V extends Number> {
            private Map<K, List<V>> data = new HashMap<>();
            
            public void add(K key, V value) {
                data.computeIfAbsent(key, k -> new ArrayList<>()).add(value);
            }
            
            public List<V> get(K key) {
                return data.get(key);
            }
        }
    }
    
    // MISTAKE 4: Forgetting type safety
    public static void mistake4() {
        // ❌ This compiles but is unsafe
        List rawList = new ArrayList();
        rawList.add("String");
        rawList.add(10);
        
        // ❌ This bypasses generic safety
        List<? extends Number> numbers = rawList; // Unchecked warning
        
        // ✅ Always use generics properly
        List<Integer> safeList = new ArrayList<>();
        safeList.add(10);
        // safeList.add("String"); // Compilation error - type safe!
        
        List<? extends Number> safeNumbers = safeList; // No warnings
    }
    
    // MISTAKE 5: Misunderstanding PECS (Producer Extends, Consumer Super)
    public static void mistake5() {
        // Producer example - use extends
        List<Integer> ints = Arrays.asList(1, 2, 3);
        List<Double> doubles = Arrays.asList(1.5, 2.5, 3.5);
        
        double intSum = sumOfList(ints);     // Producer: provides Numbers
        double doubleSum = sumOfList(doubles); // Producer: provides Numbers
        
        // Consumer example - would use super (not shown here)
        // List<? super Integer> consumerList = new ArrayList<Number>();
        // consumerList.add(10); // Can add Integers
        
        System.out.println("Integer sum: " + intSum);
        System.out.println("Double sum: " + doubleSum);
    }
    
    // Helper methods
    public static void printNumbers(List<? extends Number> numbers) {
        for (Number n : numbers) {
            System.out.println(n);
        }
    }
    
    public static double sumOfList(List<? extends Number> numbers) {
        double sum = 0.0;
        for (Number n : numbers) {
            sum += n.doubleValue();
        }
        return sum;
    }
    
    // Real debugging example from Barrackpore College project
    public static void realWorldMistake() {
        // Student marks processing system
        class MarksProcessor {
            // ❌ Common beginner mistake
            public void processMarksWrong(List<? extends Number> marks) {
                // Can't add to marks - compilation error
                // marks.add(95);
                // marks.add(88.5);
                
                // Can only read
                for (Number mark : marks) {
                    System.out.println("Mark: " + mark);
                }
            }
            
            // ✅ Correct approach for processing
            public double calculateAverage(List<? extends Number> marks) {
                if (marks == null || marks.isEmpty()) return 0.0;
                
                double sum = 0.0;
                for (Number mark : marks) {
                    sum += mark.doubleValue();
                }
                return sum / marks.size();
            }
            
            // ✅ Alternative: Use type parameter for adding
            public <T extends Number> void addAndProcess(List<T> marks, T newMark) {
                marks.add(newMark);  // Can add because we know exact type
                System.out.println("Added mark: " + newMark);
                System.out.println("New average: " + calculateAverage(marks));
            }
        }
        
        // Usage
        MarksProcessor processor = new MarksProcessor();
        List<Integer> studentMarks = new ArrayList<>(Arrays.asList(85, 92, 88));
        
        System.out.println("Initial average: " + 
            processor.calculateAverage(studentMarks));
        
        processor.addAndProcess(studentMarks, 95);
        
        // Show final marks
        System.out.println("\\nFinal marks: " + studentMarks);
    }
    
    public static void main(String[] args) {
        System.out.println("=== Common Mistakes Demo ===");
        mistake1();
        mistake5();
        realWorldMistake();
    }
}`,p=`// Advanced Upper Bounded Wildcard Patterns
import java.util.*;

public class AdvancedWildcardPatterns {
    
    // PATTERN 1: Nested wildcards
    public static double processNestedLists(List<List<? extends Number>> nestedLists) {
        double total = 0.0;
        int count = 0;
        
        for (List<? extends Number> innerList : nestedLists) {
            for (Number num : innerList) {
                total += num.doubleValue();
                count++;
            }
        }
        
        return count > 0 ? total / count : 0.0;
    }
    
    // PATTERN 2: Wildcards with bounded type parameters
    public static <T extends Number> List<T> filterAboveThreshold(
            List<T> numbers, T threshold) {
        
        List<T> result = new ArrayList<>();
        for (T num : numbers) {
            if (num.doubleValue() > threshold.doubleValue()) {
                result.add(num);
            }
        }
        return result;
    }
    
    // PATTERN 3: Wildcards in return types (covariant returns)
    public static List<? extends Number> getNumbers(String type) {
        switch (type.toLowerCase()) {
            case "integer":
                return Arrays.asList(1, 2, 3, 4, 5);
            case "double":
                return Arrays.asList(1.5, 2.5, 3.5);
            case "float":
                return Arrays.asList(1.1f, 2.2f, 3.3f);
            default:
                return Collections.emptyList();
        }
    }
    
    // PATTERN 4: Wildcards with streams and optionals
    public static OptionalDouble findMax(List<? extends Number> numbers) {
        return numbers.stream()
                .mapToDouble(Number::doubleValue)
                .max();
    }
    
    // PATTERN 5: Wildcards with varargs
    @SafeVarargs
    public static double weightedAverage(List<? extends Number>... lists) {
        if (lists == null || lists.length == 0) return 0.0;
        
        double weightedSum = 0.0;
        double totalWeight = 0.0;
        
        for (int i = 0; i < lists.length; i++) {
            List<? extends Number> list = lists[i];
            double weight = i + 1; // Weight based on position
            
            for (Number num : list) {
                weightedSum += num.doubleValue() * weight;
                totalWeight += weight;
            }
        }
        
        return totalWeight > 0 ? weightedSum / totalWeight : 0.0;
    }
    
    // PATTERN 6: Factory pattern with wildcards
    interface NumberFactory<T extends Number> {
        T create();
    }
    
    public static <T extends Number> List<T> createNumberList(
            NumberFactory<T> factory, int count) {
        
        List<T> result = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            result.add(factory.create());
        }
        return result;
    }
    
    // Real-world: Barrackpore College Advanced Marks System
    static class CollegeMarksSystem {
        
        // Calculate overall GPA considering different credit weights
        public static double calculateWeightedGPA(
                Map<String, List<? extends Number>> subjectMarks) {
            
            Map<String, Integer> credits = Map.of(
                "Java", 4,
                "DSA", 3,
                "DBMS", 3,
                "OS", 3
            );
            
            double totalWeightedScore = 0.0;
            int totalCredits = 0;
            
            for (Map.Entry<String, List<? extends Number>> entry : subjectMarks.entrySet()) {
                String subject = entry.getKey();
                List<? extends Number> marks = entry.getValue();
                
                int credit = credits.getOrDefault(subject, 3);
                double subjectAverage = calculateAverage(marks);
                
                totalWeightedScore += subjectAverage * credit;
                totalCredits += credit;
            }
            
            return totalCredits > 0 ? totalWeightedScore / totalCredits : 0.0;
        }
        
        // Process student performance across multiple semesters
        public static Map<String, Double> analyzePerformance(
                Map<Integer, Map<String, List<? extends Number>>> semesterData) {
            
            Map<String, Double> performance = new HashMap<>();
            
            for (Map.Entry<Integer, Map<String, List<? extends Number>>> semester : 
                    semesterData.entrySet()) {
                
                int semesterNum = semester.getKey();
                Map<String, List<? extends Number>> subjects = semester.getValue();
                
                for (Map.Entry<String, List<? extends Number>> subject : 
                        subjects.entrySet()) {
                    
                    String subjectName = subject.getKey();
                    List<? extends Number> marks = subject.getValue();
                    
                    double average = calculateAverage(marks);
                    String key = "Sem" + semesterNum + "_" + subjectName;
                    performance.put(key, average);
                }
            }
            
            return performance;
        }
        
        private static double calculateAverage(List<? extends Number> numbers) {
            if (numbers == null || numbers.isEmpty()) return 0.0;
            
            double sum = 0.0;
            for (Number num : numbers) {
                sum += num.doubleValue();
            }
            return sum / numbers.size();
        }
    }
    
    // Usage examples
    public static void main(String[] args) {
        System.out.println("=== Advanced Wildcard Patterns ===");
        
        // Pattern 1: Nested lists
        List<List<Integer>> nestedMarks = Arrays.asList(
            Arrays.asList(85, 92, 88),  // Student 1 marks
            Arrays.asList(78, 85, 92),  // Student 2 marks
            Arrays.asList(91, 89, 94)   // Student 3 marks
        );
        
        double classAverage = processNestedLists(nestedMarks);
        System.out.println("Class average: " + classAverage);
        
        // Pattern 2: Filtering with threshold
        List<Integer> marks = Arrays.asList(85, 92, 78, 95, 88);
        List<Integer> above90 = filterAboveThreshold(marks, 90);
        System.out.println("Marks above 90: " + above90);
        
        // Pattern 3: Covariant returns
        List<? extends Number> integers = getNumbers("integer");
        List<? extends Number> doubles = getNumbers("double");
        
        System.out.println("Integers: " + integers);
        System.out.println("Doubles: " + doubles);
        
        // Pattern 4: Using streams
        OptionalDouble maxMark = findMax(marks);
        maxMark.ifPresent(max -> System.out.println("Maximum mark: " + max));
        
        // Pattern 5: Weighted average
        List<Integer> test1 = Arrays.asList(85, 92, 88);
        List<Double> test2 = Arrays.asList(92.5, 88.0, 95.5);
        List<Float> test3 = Arrays.asList(94.0f, 89.5f, 96.0f);
        
        double weightedAvg = weightedAverage(test1, test2, test3);
        System.out.println("Weighted average: " + weightedAvg);
        
        // Pattern 6: Factory pattern
        NumberFactory<Integer> integerFactory = () -> (int)(Math.random() * 100);
        List<Integer> randomMarks = createNumberList(integerFactory, 5);
        System.out.println("Random marks: " + randomMarks);
        
        // Real-world college example
        Map<String, List<? extends Number>> semester1Marks = Map.of(
            "Java", Arrays.asList(85, 92, 88),
            "DSA", Arrays.asList(78, 85, 92),
            "DBMS", Arrays.asList(91, 89, 94)
        );
        
        double gpa = CollegeMarksSystem.calculateWeightedGPA(semester1Marks);
        System.out.println("\\nStudent GPA: " + gpa);
        
        // Multi-semester analysis
        Map<Integer, Map<String, List<? extends Number>>> allSemesters = Map.of(
            1, semester1Marks,
            2, Map.of(
                "Java", Arrays.asList(88, 95, 91),
                "DSA", Arrays.asList(85, 92, 89),
                "OS", Arrays.asList(90, 87, 93)
            )
        );
        
        Map<String, Double> performance = 
            CollegeMarksSystem.analyzePerformance(allSemesters);
        System.out.println("\\nPerformance analysis:");
        performance.forEach((key, value) -> 
            System.out.println(key + ": " + value));
    }
}`,b=[{type:"Upper Bounded Wildcard",syntax:"<? extends T>",allows:"Reading elements as T",disallows:"Adding elements (except null)",useCase:"Producer collections, read-only operations",example:"List<? extends Number> numbers"},{type:"Lower Bounded Wildcard",syntax:"<? super T>",allows:"Adding elements of type T",disallows:"Reading as specific type (only as Object)",useCase:"Consumer collections, write operations",example:"List<? super Integer> numbers"},{type:"Unbounded Wildcard",syntax:"<?>",allows:"Reading as Object",disallows:"Adding any element (except null)",useCase:"When you don't care about type",example:"List<?> objects"},{type:"Exact Type",syntax:"<T>",allows:"Both reading and adding as T",disallows:"Other types",useCase:"When you need full type control",example:"List<Integer> numbers"}];return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300",children:[e.jsx("style",{children:`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes wildcardPulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
          
          @keyframes arrowFlow {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
          }
          
          .animate-slide-in-right {
            animation: slideInRight 0.6s ease-out forwards;
          }
          
          .hover-lift:hover {
            transform: translateY(-4px);
          }
          
          .wildcard-pulse {
            animation: wildcardPulse 2s ease-in-out infinite;
          }
        `}),e.jsxs("div",{className:"container mx-auto px-4 py-10 max-w-6xl",children:[e.jsxs("header",{className:"mb-12",ref:r=>c("header",r),children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx("div",{className:`w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center ${s?"":"animate-fade-in-up"}`,style:{animationDelay:"0.1s"},children:e.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent",children:"Upper Bounded Wildcards (? extends)"}),e.jsx("p",{className:"mt-3 text-gray-600 dark:text-gray-300 text-lg leading-relaxed",children:"Mastering read-only generic collections with type safety and flexibility"})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 mt-4",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm",children:"Read-Only"}),e.jsx("span",{className:"px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm",children:"Type Safety"}),e.jsx("span",{className:"px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm",children:"Flexibility"}),e.jsx("span",{className:"px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm",children:"PECS Principle"})]})]}),e.jsxs("section",{ref:r=>c("concept",r),className:"mb-12",children:[e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:["what","why","how","rules"].map(r=>e.jsxs("button",{onClick:()=>k(r),className:d("px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap",n===r?"bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),children:[r==="what"&&"What are They?",r==="why"&&"Why Use Them?",r==="how"&&"How They Work",r==="rules"&&"Rules & Limitations"]},r))}),e.jsxs("div",{className:d("bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border transition-all duration-500",n==="what"&&"border-emerald-200 dark:border-emerald-800",n==="why"&&"border-teal-200 dark:border-teal-800",n==="how"&&"border-blue-200 dark:border-blue-800",n==="rules"&&"border-amber-200 dark:border-amber-800"),children:[n==="what"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-emerald-600 dark:text-emerald-400",children:"What are Upper Bounded Wildcards?"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Upper bounded wildcards (",e.jsx("code",{className:"px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded font-mono",children:"? extends Type"}),") allow you to write methods that can accept collections of a specific type ",e.jsx("strong",{children:"or any of its subtypes"}),"."]}),e.jsx("div",{className:"bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 p-4 rounded-lg",children:e.jsxs("p",{className:"italic text-gray-600 dark:text-gray-300",children:[e.jsx("strong",{children:"Analogy:"})," Think of Barrackpore College's library -",e.jsx("code",{children:"List<? extends Book>"}),` means "any list containing Books or any type of Book (Textbook, Novel, ReferenceBook)". You can read any book from this collection, but you can't add new books because you don't know the exact type.`]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800",children:[e.jsx("h4",{className:"font-bold text-emerald-700 dark:text-emerald-300 mb-2",children:"Key Characteristic"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:[e.jsx("strong",{children:"Read-Only:"})," You can read elements as the upper bound type, but cannot add elements (except null)."]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg border border-teal-200 dark:border-teal-800",children:[e.jsx("h4",{className:"font-bold text-teal-700 dark:text-teal-300 mb-2",children:"Syntax"}),e.jsxs("div",{className:"font-mono text-sm bg-gray-900 text-gray-100 p-3 rounded-lg",children:[e.jsx("span",{className:"text-blue-400",children:"List<? extends "}),e.jsx("span",{className:"text-emerald-400",children:"Number"}),e.jsx("span",{className:"text-blue-400",children:">"})]})]})]})]}),n==="why"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-teal-600 dark:text-teal-400",children:"Why Use Upper Bounded Wildcards?"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start gap-3 p-4 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 bg-teal-100 dark:bg-teal-800 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-teal-600 dark:text-teal-300 font-bold",children:"1"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-teal-700 dark:text-teal-300",children:"Maximum Flexibility"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Accept collections of any subtype, making your methods more reusable."})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-blue-600 dark:text-blue-300 font-bold",children:"2"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-blue-700 dark:text-blue-300",children:"Type Safety"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Compile-time checking ensures you only work with compatible types."})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-indigo-600 dark:text-indigo-300 font-bold",children:"3"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-indigo-700 dark:text-indigo-300",children:"PECS Principle"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:'Follows "Producer Extends" principle for read-only collections.'})]})]}),e.jsxs("div",{className:"flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-lg",children:[e.jsx("div",{className:"w-8 h-8 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-purple-600 dark:text-purple-300 font-bold",children:"4"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-purple-700 dark:text-purple-300",children:"API Design"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Creates more flexible and user-friendly APIs for library/framework design."})]})]})]})]}),n==="how"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-blue-600 dark:text-blue-400",children:"How Upper Bounded Wildcards Work"}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-4 rounded-lg",children:[e.jsxs("div",{className:"font-mono text-sm bg-gray-900 text-gray-100 p-4 rounded-lg mb-4",children:[e.jsx("span",{className:"text-purple-400",children:"public static double "}),e.jsx("span",{className:"text-emerald-400",children:"calculateAverage"}),e.jsx("span",{className:"text-gray-300",children:"("}),e.jsx("span",{className:"text-blue-400",children:"List<? extends "}),e.jsx("span",{className:"text-emerald-400",children:"Number"}),e.jsx("span",{className:"text-blue-400",children:"> "}),e.jsxs("span",{className:"text-gray-300",children:["numbers) ","{"]}),e.jsx("br",{}),e.jsx("span",{className:"text-gray-500 ml-4",children:"// Can read as Number"}),e.jsx("br",{}),e.jsx("span",{className:"text-gray-500 ml-4",children:"// Cannot add to numbers"}),e.jsx("br",{}),e.jsx("span",{className:"text-gray-300",children:"}"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-green-600 dark:text-green-400 mb-2",children:"✅ Can Do"}),e.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"• Read elements as Number"}),e.jsx("li",{children:"• Call Number methods on elements"}),e.jsx("li",{children:"• Iterate through collection"}),e.jsx("li",{children:"• Check size, emptiness"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-red-600 dark:text-red-400 mb-2",children:"❌ Cannot Do"}),e.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-300 space-y-1",children:[e.jsx("li",{children:"• Add Integer to List<? extends Number>"}),e.jsx("li",{children:"• Add Double to List<? extends Number>"}),e.jsx("li",{children:"• Know exact type at runtime"}),e.jsx("li",{children:"• Cast to specific subtype list"})]})]})]})]}),e.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300 mt-4",children:[e.jsx("strong",{children:"Real Example:"})," In Shyamnagar College's marks processing system,",e.jsx("code",{children:"calculateAverage"})," can work with List<Integer>, List<Double>, or List<Float> - all are subtypes of Number."]})]}),n==="rules"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-amber-600 dark:text-amber-400",children:"Rules & Limitations"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-lg border-l-4 border-amber-500",children:[e.jsx("h4",{className:"font-bold text-amber-700 dark:text-amber-300 mb-2",children:"Rule 1: Read-Only Nature"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-300",children:["Upper bounded collections are effectively read-only. You can only add ",e.jsx("code",{children:"null"}),"."]}),e.jsxs("div",{className:"font-mono text-sm bg-gray-900 text-gray-100 p-3 rounded-lg mt-2",children:[e.jsx("span",{className:"text-red-400",children:"// ❌ Compilation Error"}),e.jsx("br",{}),e.jsx("span",{className:"text-gray-300",children:"List<? extends Number> nums = new ArrayList<Integer>();"}),e.jsx("br",{}),e.jsx("span",{className:"text-gray-300",children:"nums.add("}),e.jsx("span",{className:"text-green-400",children:"10"}),e.jsx("span",{className:"text-gray-300",children:");"}),e.jsx("br",{}),e.jsx("span",{className:"text-gray-300",children:"nums.add("}),e.jsx("span",{className:"text-green-400",children:"3.14"}),e.jsx("span",{className:"text-gray-300",children:");"})]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 rounded-lg border-l-4 border-orange-500",children:[e.jsx("h4",{className:"font-bold text-orange-700 dark:text-orange-300 mb-2",children:"Rule 2: Type Erasure"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"At runtime, the wildcard information is erased. The JVM only sees it as a raw List."}),e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400 mt-2",children:"This is why you can't perform instanceof checks or casts based on the wildcard type."})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-r from-red-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-lg border-l-4 border-red-500",children:[e.jsx("h4",{className:"font-bold text-red-700 dark:text-red-300 mb-2",children:"Rule 3: PECS Principle"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-300",children:[e.jsx("strong",{children:"Producer Extends, Consumer Super"})," - Use ",e.jsx("code",{children:"? extends"})," when you only need to read from a collection (it produces values)."]}),e.jsxs("div",{className:"text-sm text-gray-500 dark:text-gray-400 mt-2",children:["Example: A method that calculates sum of numbers should use ",e.jsx("code",{children:"List<? extends Number>"}),"."]})]})]})]})]})]}),e.jsxs("section",{ref:r=>c("diagram",r),className:d("mb-12 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg",(u.diagram||s)&&"animate-fade-in-up"),style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6",children:"Upper Bounded Wildcard Flow"}),e.jsx("div",{className:"relative",children:e.jsxs("svg",{viewBox:"0 0 800 400",className:"w-full h-auto",children:[e.jsx("rect",{x:"50",y:"50",width:"300",height:"100",rx:"15",fill:"#D1FAE5",stroke:"#10B981",strokeWidth:"3",className:"dark:fill-emerald-900",children:!s&&e.jsx("animate",{attributeName:"opacity",values:"1;0.95;1",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"200",y:"85",textAnchor:"middle",fill:"#065F46",fontSize:"18",fontWeight:"bold",className:"dark:fill-emerald-200",children:"Method Signature"}),e.jsx("text",{x:"200",y:"115",textAnchor:"middle",fill:"#047857",fontSize:"16",className:"dark:fill-emerald-300",children:"process(List<? extends Number>)"}),e.jsx("circle",{cx:"200",cy:"160",r:"25",fill:"#8B5CF6",stroke:"#7C3AED",strokeWidth:"3",children:!s&&e.jsx("animate",{attributeName:"r",values:"25;28;25",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"200",y:"165",textAnchor:"middle",fill:"white",fontSize:"20",fontWeight:"bold",className:"wildcard-pulse",children:"?"}),e.jsxs("g",{children:[e.jsx("line",{x1:"200",y1:"185",x2:"200",y2:"220",stroke:"#8B5CF6",strokeWidth:"2",children:!s&&e.jsx("animate",{attributeName:"stroke-dashoffset",from:"35",to:"0",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("polygon",{points:"200,220 195,210 205,210",fill:"#8B5CF6"})]}),e.jsx("rect",{x:"150",y:"220",width:"100",height:"50",rx:"10",fill:"#DBEAFE",stroke:"#3B82F6",strokeWidth:"3",className:"dark:fill-blue-900",children:!s&&e.jsx("animate",{attributeName:"y",values:"220;215;220",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"200",y:"250",textAnchor:"middle",fill:"#1E40AF",fontSize:"18",fontWeight:"bold",className:"dark:fill-blue-200",children:"Number"}),e.jsxs("g",{children:[e.jsx("line",{x1:"200",y1:"270",x2:"200",y2:"300",stroke:"#10B981",strokeWidth:"2",strokeDasharray:"5,5",children:!s&&e.jsx("animate",{attributeName:"stroke-dashoffset",from:"30",to:"0",dur:"2s",repeatCount:"indefinite",begin:"0.5s"})}),e.jsx("polygon",{points:"200,300 195,290 205,290",fill:"#10B981"})]}),e.jsx("g",{children:[{x:100,y:330,text:"Integer",color:"#10B981"},{x:200,y:330,text:"Double",color:"#3B82F6"},{x:300,y:330,text:"Float",color:"#8B5CF6"}].map((r,a)=>e.jsxs("g",{children:[e.jsx("rect",{x:r.x-50,y:r.y-25,width:"100",height:"50",rx:"10",fill:r.color+"30",stroke:r.color,strokeWidth:"2",className:"transition-all duration-300",children:!s&&e.jsx("animate",{attributeName:"y",values:`${r.y-25};${r.y-30};${r.y-25}`,dur:"2s",repeatCount:"indefinite",begin:`${a*.3}s`})}),e.jsx("text",{x:r.x,y:r.y+5,textAnchor:"middle",fill:r.color,fontSize:"16",fontWeight:"bold",className:"dark:fill-gray-200",children:r.text}),e.jsx("line",{x1:r.x,y1:r.y-25,x2:r.x,y2:305,stroke:r.color,strokeWidth:"1",strokeDasharray:"3,3",opacity:"0.5",children:!s&&e.jsx("animate",{attributeName:"stroke-dashoffset",from:"25",to:"0",dur:"1.5s",repeatCount:"indefinite",begin:`${a*.5}s`})})]},r.text))}),e.jsx("rect",{x:"450",y:"50",width:"300",height:"180",rx:"15",fill:"#FEF3C7",stroke:"#F59E0B",strokeWidth:"3",className:"dark:fill-yellow-900"}),e.jsx("text",{x:"600",y:"85",textAnchor:"middle",fill:"#92400E",fontSize:"18",fontWeight:"bold",className:"dark:fill-yellow-200",children:"Valid Method Calls"}),e.jsxs("g",{children:[e.jsxs("text",{x:"480",y:"125",fill:"#065F46",fontSize:"14",className:"dark:fill-gray-300",children:[e.jsx("tspan",{x:"480",dy:"0",children:"✅ process(new ArrayList<Integer>());"}),e.jsx("tspan",{x:"480",dy:"25",children:"✅ process(new ArrayList<Double>());"}),e.jsx("tspan",{x:"480",dy:"25",children:"✅ process(new ArrayList<Float>());"}),e.jsx("tspan",{x:"480",dy:"25",children:"✅ process(new ArrayList<Number>());"})]}),e.jsxs("text",{x:"480",y:"225",fill:"#DC2626",fontSize:"14",className:"dark:fill-gray-300",children:[e.jsx("tspan",{x:"480",dy:"0",children:"❌ process(new ArrayList<String>());"}),e.jsx("tspan",{x:"480",dy:"25",children:"❌ process(new ArrayList<Object>());"})]})]}),e.jsx("text",{x:"200",y:"40",textAnchor:"middle",fill:"#6B7280",fontSize:"14",fontWeight:"bold",className:"dark:fill-gray-400",children:"Upper Bound Definition"}),e.jsx("text",{x:"200",y:"320",textAnchor:"middle",fill:"#6B7280",fontSize:"14",fontWeight:"bold",className:"dark:fill-gray-400",children:"Acceptable Types"}),e.jsx("text",{x:"600",y:"40",textAnchor:"middle",fill:"#6B7280",fontSize:"14",fontWeight:"bold",className:"dark:fill-gray-400",children:"Usage Examples"})]})}),e.jsx("div",{className:"mt-8 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-emerald-200 dark:border-emerald-700",children:e.jsx("p",{className:"text-center text-gray-600 dark:text-gray-300 italic",children:"Just like Naihati College's admission office can accept applications from any student (CurrentStudent, ProspectiveStudent, TransferStudent) as long as they're Students, upper bounded wildcards accept any type as long as it extends the bound."})})]}),e.jsxs("section",{ref:r=>c("examples",r),className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6",children:"Code Examples"}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:["basic","hierarchy","generic","mistakes","advanced"].map(r=>e.jsxs("button",{onClick:()=>j(r),className:d("px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap text-sm",x===r?"bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"),children:[r==="basic"&&"Basic Example",r==="hierarchy"&&"Class Hierarchy",r==="generic"&&"Generic Classes",r==="mistakes"&&"Common Mistakes",r==="advanced"&&"Advanced Patterns"]},r))}),e.jsxs("div",{className:d("transition-all duration-500",(u.examples||s)&&"animate-fade-in-up"),children:[x==="basic"&&e.jsx(y,{code:v,title:"StudentMarksProcessor.java",highlightLines:[7,8,9,17,18,27,28,37,38]}),x==="hierarchy"&&e.jsx(y,{code:w,title:"CollegeProcessor.java",highlightLines:[48,49,56,57,64,65,78,79,86,87]}),x==="generic"&&e.jsx(y,{code:m,title:"NumberContainer.java",highlightLines:[15,16,23,24,31,32,39,40,47,48]}),x==="mistakes"&&e.jsx(y,{code:t,title:"WildcardMistakes.java",highlightLines:[9,10,25,26,41,42,57,58,73,74]}),x==="advanced"&&e.jsx(y,{code:p,title:"AdvancedWildcardPatterns.java",highlightLines:[7,8,17,18,27,28,37,38,47,48]})]})]}),e.jsxs("section",{ref:r=>c("comparison",r),className:d("mb-12",(u.comparison||s)&&"animate-fade-in-up"),style:{animationDelay:"0.4s"},children:[e.jsx("h2",{className:"text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6",children:"Wildcard Type Comparison"}),e.jsx("div",{className:"overflow-x-auto rounded-2xl shadow-lg",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gradient-to-r from-emerald-500 to-teal-500 text-white",children:[e.jsx("th",{className:"p-4 text-left font-bold",children:"Wildcard Type"}),e.jsx("th",{className:"p-4 text-left font-bold",children:"Syntax"}),e.jsx("th",{className:"p-4 text-left font-bold",children:"Allows"}),e.jsx("th",{className:"p-4 text-left font-bold",children:"Disallows"}),e.jsx("th",{className:"p-4 text-left font-bold",children:"Use Case"}),e.jsx("th",{className:"p-4 text-left font-bold",children:"Example"})]})}),e.jsx("tbody",{children:b.map((r,a)=>e.jsxs("tr",{className:d("border-b border-gray-200 dark:border-gray-700 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-200",a%2===0?"bg-white/30 dark:bg-gray-800/30":"bg-transparent",r.type==="Upper Bounded Wildcard"&&"bg-emerald-50/50 dark:bg-emerald-900/20"),children:[e.jsx("td",{className:"p-4 font-bold",children:e.jsx("span",{className:d("px-3 py-1 rounded-full text-xs",r.type==="Upper Bounded Wildcard"&&"bg-emerald-100 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200",r.type==="Lower Bounded Wildcard"&&"bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200",r.type==="Unbounded Wildcard"&&"bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200",r.type==="Exact Type"&&"bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"),children:r.type})}),e.jsx("td",{className:"p-4 font-mono",children:r.syntax}),e.jsx("td",{className:"p-4",children:e.jsx("div",{className:"flex flex-wrap gap-1",children:r.allows.split(", ").map((i,l)=>e.jsx("span",{className:"px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded",children:i},l))})}),e.jsx("td",{className:"p-4",children:e.jsx("div",{className:"flex flex-wrap gap-1",children:r.disallows.split(", ").map((i,l)=>e.jsx("span",{className:"px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded",children:i},l))})}),e.jsx("td",{className:"p-4 text-gray-600 dark:text-gray-300",children:r.useCase}),e.jsx("td",{className:"p-4 font-mono text-xs",children:r.example})]},a))})]})}),e.jsxs("div",{className:"mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-blue-200 dark:border-blue-800",children:[e.jsx("h3",{className:"text-lg font-bold text-blue-600 dark:text-blue-400 mb-3",children:"PECS Principle Summary"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-emerald-600 dark:text-emerald-400 mb-2",children:"Producer Extends"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:["Use ",e.jsx("code",{children:"? extends T"})," when a parameter produces values of type T (you read from it). Example: calculating sum of numbers."]})]}),e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-blue-600 dark:text-blue-400 mb-2",children:"Consumer Super"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:["Use ",e.jsx("code",{children:"? super T"})," when a parameter consumes values of type T (you write to it). Example: adding elements to a collection."]})]})]}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-4 italic",children:'Remember: "PECS" helps you choose the right wildcard. If you only need to read, use extends. If you only need to write, use super.'})]})]}),e.jsxs("section",{ref:r=>c("practices",r),className:d("mb-12",(u.practices||s)&&"animate-fade-in-up"),style:{animationDelay:"0.5s"},children:[e.jsx("h2",{className:"text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6",children:"Best Practices & Professional Tips"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800",children:[e.jsxs("h3",{className:"text-xl font-bold text-emerald-700 dark:text-emerald-300 mb-4 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),"Do This"]}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("svg",{className:"w-3 h-3 text-emerald-600 dark:text-emerald-300",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Use upper bounded wildcards for read-only method parameters"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("svg",{className:"w-3 h-3 text-emerald-600 dark:text-emerald-300",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Follow PECS principle for collection parameters"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("svg",{className:"w-3 h-3 text-emerald-600 dark:text-emerald-300",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Document wildcard usage in complex APIs"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("svg",{className:"w-3 h-3 text-emerald-600 dark:text-emerald-300",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Use type parameters when you need both read and write"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800",children:[e.jsxs("h3",{className:"text-xl font-bold text-red-700 dark:text-red-300 mb-4 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Avoid This"]}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("svg",{className:"w-3 h-3 text-red-600 dark:text-red-300",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Trying to add elements to upper bounded collections"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("svg",{className:"w-3 h-3 text-red-600 dark:text-red-300",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Using wildcards where exact types would work better"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("svg",{className:"w-3 h-3 text-red-600 dark:text-red-300",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Overusing nested wildcards (hard to read)"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("svg",{className:"w-3 h-3 text-red-600 dark:text-red-300",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Forgetting about type erasure implications"})]})]})]})]}),e.jsxs("div",{className:"mt-8 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-purple-600 dark:text-purple-400 mb-4 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",clipRule:"evenodd"})}),"Professional Tips from Industry"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-emerald-600 dark:text-emerald-400 mb-2",children:"API Design"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Use upper bounded wildcards in public API methods to increase flexibility for users."})]}),e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-blue-600 dark:text-blue-400 mb-2",children:"Performance"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Wildcards have zero runtime overhead - they're compile-time only constructs."})]}),e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-amber-600 dark:text-amber-400 mb-2",children:"Testing"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Always test with different subtype collections to ensure your methods work correctly."})]}),e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-600 dark:text-red-400 mb-2",children:"Debugging"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:`If you get "cannot add" errors, check if you're using extends where you should use super.`})]})]})]})]}),e.jsxs("section",{ref:r=>c("checklist",r),className:d("mb-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700",(u.checklist||s)&&"animate-fade-in-up"),style:{animationDelay:"0.6s"},children:[e.jsx("h2",{className:"text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6",children:"📋 Quick Reference Checklist"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:["Use ? extends for read-only parameters","Remember: Producer Extends, Consumer Super","Cannot add to ? extends collections (except null)","Can read elements as the upper bound type","Works with any subtype of the bound","Great for utility methods (sum, average, max)","Use type parameters when you need both read/write","Wildcards are compile-time only","Follow PECS principle for collection parameters","Document wildcard usage in complex code","Test with different subtype collections","Consider API flexibility when designing methods"].map((r,a)=>e.jsxs("div",{className:"flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-700 dark:to-gray-800 rounded-xl border border-emerald-100 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300",children:[e.jsx("div",{className:"w-6 h-6 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center flex-shrink-0",children:e.jsx("svg",{className:"w-3 h-3 text-emerald-600 dark:text-emerald-300",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300 text-sm",children:r})]},a))})]}),e.jsx("section",{ref:r=>c("teacher",r),className:d("bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-amber-200 dark:border-amber-800 hover:shadow-2xl transition-all duration-500",(u.teacher||s)&&"animate-fade-in-up hover-lift"),style:{animationDelay:"0.7s"},children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-8",children:[e.jsxs("div",{className:"flex-shrink-0",children:[e.jsx("div",{className:"w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg",children:e.jsx("span",{className:"text-white text-3xl font-bold",children:"SH"})}),e.jsx("div",{className:"mt-4 space-y-2",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"font-bold text-amber-800 dark:text-amber-300",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-amber-600 dark:text-amber-400",children:"27 Years Experience"})]})})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-amber-800 dark:text-amber-300",children:"Teacher's Note"}),e.jsx("div",{className:"px-3 py-1 bg-amber-100 dark:bg-amber-800 text-amber-800 dark:text-amber-200 text-sm font-bold rounded-full",children:"Professional Insight"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsx("strong",{children:"Remember:"})," Upper bounded wildcards are like Shyamnagar College's library reading room - you can read any book (Integer, Double, Float) as long as it's a Book (Number), but you can't add your own books because the librarian doesn't know where they should go. In my 27 years teaching at Barrackpore, I've seen students struggle most with the read-only nature. Remember: if you need to both read AND write, use a type parameter instead of a wildcard."]}),e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 rounded-xl p-5 border border-amber-200 dark:border-amber-700",children:[e.jsxs("h4",{className:"font-bold text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",clipRule:"evenodd"})}),"Pro Tip for Naihati College Students:"]}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-300",children:['When designing methods, ask: "Will this method only read from the collection?" If yes, use ',e.jsx("code",{children:"? extends"}),'. If you also need to write, either use a type parameter or reconsider your design. This simple question will save you hours of debugging "cannot add" compilation errors!']})]}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsxs("a",{href:"mailto:sukantahui@codernaccotax.co.in",className:"px-4 py-2 bg-amber-100 dark:bg-amber-800 text-amber-800 dark:text-amber-200 rounded-lg hover:bg-amber-200 dark:hover:bg-amber-700 transition-colors duration-300 flex items-center gap-2",children:[e.jsxs("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:[e.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),e.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),"Email: sukantahui@codernaccotax.co.in"]}),e.jsxs("div",{className:"px-4 py-2 bg-amber-100 dark:bg-amber-800 text-amber-800 dark:text-amber-200 rounded-lg flex items-center gap-2",children:[e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"})}),"Mobile: 7003756860"]}),e.jsx("div",{className:"px-4 py-2 bg-amber-100 dark:bg-amber-800 text-amber-800 dark:text-amber-200 rounded-lg",children:"Skills: Java, RDBMS, Web Development"})]})]})]})]})})]})]})};export{M as default};
