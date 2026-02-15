import{r as l,j as e,e as u}from"./index-CG3iA-Ea.js";import{c as x}from"./clsx-B-dksMZM.js";import{P as j}from"./PythonCodeBlock-Bdi_g55m.js";import"./prism-DRxy4y8s.js";import"./browser-D8LptQP4.js";function t({fileModule:s,title:r=null,highlightLines:m=[],showEscapes:d=!1}){const[h,c]=l.useState(""),[g,i]=l.useState(!0);l.useEffect(()=>{if(!s){i(!1);return}typeof s=="string"?(c(o(s)),i(!1)):p(s)},[s,d]);function o(n){let a=n.replace(/\r\n/g,`
`);return d?a.replace(/\n/g,`\\n
`):a}async function p(n){try{if(i(!0),n?.then){const a=await n;a?.default&&c(o(a.default))}else n?.default&&c(o(n.default))}catch(a){console.error("Error loading Python module:",a)}finally{i(!1)}}return g?e.jsxs("div",{className:"text-center py-8 text-slate-400",children:[e.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-sky-500 mx-auto mb-2"}),"Loading Python code..."]}):e.jsx(j,{code:h,title:r||"Python File",highlightLines:m})}const b=`def validate_age(age_str):\r
    try:\r
        age = int(age_str)\r
\r
        if age < 0 or age > 120:\r
            return False, "Age must be 0-120"\r
\r
        return True, age\r
\r
    except ValueError:\r
        return False, "Please enter a valid number"\r
`,N=`def get_number(prompt, default=None):\r
    while True:\r
        user_input = input(f"{prompt} [{default}]: ")\r
\r
        if user_input == "" and default is not None:\r
            return default  # Use default if empty\r
\r
        # ... validation logic ...\r
`,f=`import logging\r
\r
try:\r
    age = int(input("Age: "))\r
except ValueError as e:\r
    logging.warning(f"Invalid age input: {e}")\r
    print("Please enter a valid number")\r
`,y=`try:\r
    value = int(input())\r
    if value < 0:\r
        raise ValueError("Must be positive")\r
except ValueError as e:\r
    print(f"Error: {e}")\r
`,v=`# Pattern 1: Basic numeric input validation\r
\r
def get_positive_integer():\r
    """Get a positive integer from user with validation"""\r
    while True:  # Keep asking until valid input\r
        user_input = input("Enter a positive integer: ")\r
\r
        try:\r
            # Try to convert to integer\r
            number = int(user_input)\r
\r
            # Check if positive\r
            if number <= 0:\r
                print("Error: Number must be positive!")\r
                continue  # Ask again\r
\r
            # If we get here, input is valid\r
            return number\r
\r
        except ValueError:\r
            # Handle conversion errors\r
            if user_input.strip() == "":\r
                print("Error: Input cannot be empty!")\r
            else:\r
                print(f"Error: '{user_input}' is not a valid integer!")\r
\r
\r
# Test the function\r
print("=== Testing Input Validation ===\\n")\r
print(\r
    "Try entering:\\n"\r
    "1. Valid number (e.g., 42)\\n"\r
    "2. Text (e.g., abc)\\n"\r
    "3. Negative number\\n"\r
    "4. Empty input\\n"\r
    "5. Decimal (e.g., 3.14)\\n"\r
)\r
\r
# Uncomment to test:\r
# result = get_positive_integer()\r
# print(f"\\nSuccess! You entered: {result}")\r
`,w=`# Pattern 2: Advanced validation with multiple constraints\r
\r
def get_student_grade():\r
    """Get a valid student grade (0-100) with detailed error messages"""\r
    while True:\r
        print("\\n" + "=" * 50)\r
        print("Enter a student grade (0-100) or 'quit' to exit")\r
        user_input = input("Grade: ").strip()\r
\r
        # Allow user to exit\r
        if user_input.lower() == "quit":\r
            print("Exiting grade entry...")\r
            return None\r
\r
        try:\r
            # Try to convert to float (allow decimal grades)\r
            grade = float(user_input)\r
\r
            # Multiple validation checks\r
            if grade < 0:\r
                raise ValueError("Grade cannot be negative!")\r
            elif grade > 100:\r
                raise ValueError("Grade cannot exceed 100!")\r
\r
            # Additional business logic\r
            if grade >= 90:\r
                category = "A (Excellent)"\r
            elif grade >= 75:\r
                category = "B (Good)"\r
            elif grade >= 60:\r
                category = "C (Average)"\r
            elif grade >= 40:\r
                category = "D (Pass)"\r
            else:\r
                category = "F (Fail)"\r
\r
            # Success!\r
            print(f"✓ Valid grade entered: {grade}")\r
            print(f"  Grade Category: {category}")\r
            return grade\r
\r
        except ValueError as e:\r
            print(f"✗ Error: {e}")\r
            print("  Please enter a number between 0 and 100")\r
\r
        except Exception as e:\r
            print(f"✗ Unexpected error: {type(e).__name__}")\r
            print("  Please try again")\r
\r
\r
# Test with various inputs\r
print("=== Student Grade Validator ===\\n")\r
get_student_grade()\r
`,k=`# Pattern 3: Menu system with validation\r
\r
def student_management_system():\r
    """A menu-driven student management system"""\r
    students = []\r
\r
    while True:\r
        print("\\n" + "=" * 50)\r
        print("STUDENT MANAGEMENT SYSTEM")\r
        print("1. Add Student")\r
        print("2. View All Students")\r
        print("3. Calculate Class Average")\r
        print("4. Exit")\r
\r
        choice = input("Enter your choice (1-4): ").strip()\r
\r
        try:\r
            # Convert choice to integer\r
            choice_int = int(choice)\r
\r
            # Validate menu range\r
            if choice_int < 1 or choice_int > 4:\r
                print("Error: Choice must be between 1 and 4!")\r
                continue\r
\r
            # Handle menu options\r
            if choice_int == 1:\r
                add_student(students)\r
            elif choice_int == 2:\r
                view_students(students)\r
            elif choice_int == 3:\r
                calculate_average(students)\r
            elif choice_int == 4:\r
                print("Thank you for using the Student Management System!")\r
                break\r
\r
        except ValueError:\r
            print(f"Error: '{choice}' is not a valid number!")\r
        except Exception as e:\r
            print(f"Unexpected error: {type(e).__name__}")\r
\r
\r
def add_student(students):\r
    """Add a student with validation"""\r
    print("\\n--- Add New Student ---")\r
\r
    while True:\r
        name = input("Student Name: ").strip()\r
        if name == "":\r
            print("Error: Name cannot be empty!")\r
        else:\r
            break\r
\r
    while True:\r
        try:\r
            age = int(input("Age: "))\r
            if age < 5 or age > 60:\r
                print("Error: Age must be between 5 and 60!")\r
            else:\r
                break\r
        except ValueError:\r
            print("Error: Please enter a valid number for age!")\r
\r
    while True:\r
        try:\r
            grade = float(input("Grade (0-100): "))\r
            if grade < 0 or grade > 100:\r
                print("Error: Grade must be between 0 and 100!")\r
            else:\r
                break\r
        except ValueError:\r
            print("Error: Please enter a valid number for grade!")\r
\r
    students.append({\r
        "name": name,\r
        "age": age,\r
        "grade": grade\r
    })\r
\r
    print(f"✓ Student {name} added successfully!")\r
\r
\r
def view_students(students):\r
    """View all students"""\r
    print("\\n--- All Students ---")\r
    if not students:\r
        print("No students in the system yet.")\r
    else:\r
        for i, student in enumerate(students, start=1):\r
            print(\r
                f"{i}. {student['name']} "\r
                f"(Age: {student['age']}, Grade: {student['grade']})"\r
            )\r
\r
\r
def calculate_average(students):\r
    """Calculate class average"""\r
    if not students:\r
        print("No students to calculate average.")\r
    else:\r
        total = sum(student["grade"] for student in students)\r
        average = total / len(students)\r
        print(f"\\nClass Average: {average:.2f}")\r
\r
\r
# Run the system\r
student_management_system()\r
`,E="",M=()=>{const[s,r]=l.useState(null),[m,d]=l.useState(null);return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 p-6 md:p-8 transition-all duration-500",children:[e.jsx("style",{jsx:!0,children:`
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
        @keyframes validationSuccess {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes inputFlow {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
      `}),e.jsxs("header",{className:"mb-10 motion-safe:animate-[fadeSlideUp_0.8s_ease-out]",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-300 mb-3",children:"Input Validation with Exception Handling"}),e.jsx("p",{className:"text-xl text-gray-300 max-w-3xl leading-relaxed",children:"Building robust programs that handle invalid user input gracefully using try-except blocks."}),e.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-400 mt-4 rounded-full"})]}),e.jsxs("div",{className:"space-y-12",children:[e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_1s_ease-out] animation-delay-[200ms]",children:e.jsxs("div",{className:`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 \r
            hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-900/10 transition-all duration-500`,children:[e.jsxs("h2",{className:"text-3xl font-bold text-amber-300 mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-amber-900/30 rounded-lg",children:"🎯"}),"Why Validate Input?"]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/60 p-5 rounded-xl border-l-4 border-amber-500",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"The Problem"}),e.jsxs("p",{className:"text-gray-300 leading-relaxed",children:["User input is ",e.jsx("span",{className:"text-amber-300 font-medium",children:"unpredictable"}),". Without validation, programs crash with confusing errors when users enter unexpected values."]})]}),e.jsxs("div",{className:"bg-gray-900/60 p-5 rounded-xl border-l-4 border-red-500",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"Student Scenario"}),e.jsxs("p",{className:"text-gray-300 leading-relaxed",children:[e.jsx("span",{className:"text-amber-300",children:"Tuhina"})," from Barrackpore builds a calculator. When ",e.jsx("span",{className:"text-amber-300",children:"Swadeep"}),' enters "abc" instead of a number, the program crashes with ',e.jsx("code",{className:"text-red-400",children:"ValueError"}),"."]})]}),e.jsxs("div",{className:"bg-gray-900/60 p-5 rounded-xl",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"Validation Goals"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full mt-2"}),e.jsx("span",{className:"text-gray-300",children:"Prevent program crashes"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full mt-2"}),e.jsx("span",{className:"text-gray-300",children:"Provide helpful error messages"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full mt-2"}),e.jsx("span",{className:"text-gray-300",children:"Allow users to correct mistakes"})]})]})]})]}),e.jsx("div",{className:"relative",children:e.jsxs("svg",{className:"w-full h-auto",viewBox:"0 0 400 320",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"inputGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#F59E0B",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#EF4444",stopOpacity:1}})]})}),e.jsx("rect",{x:"50",y:"40",width:"300",height:"60",rx:"8",className:"fill-gray-800 stroke-amber-500 stroke-2"}),e.jsx("text",{x:"200",y:"75",className:"text-lg font-bold fill-white",textAnchor:"middle",children:"User Input"}),e.jsx("text",{x:"200",y:"95",className:"text-sm fill-amber-300",textAnchor:"middle",children:'"abc", "123", "-5", ""'}),e.jsx("rect",{x:"150",y:"130",width:"100",height:"60",rx:"8",className:"fill-blue-900/30 stroke-blue-500 stroke-2"}),e.jsx("text",{x:"200",y:"160",className:"text-lg font-bold fill-white",textAnchor:"middle",children:"Validate"}),e.jsx("text",{x:"200",y:"180",className:"text-sm fill-blue-300",textAnchor:"middle",children:"Check & Convert"}),e.jsx("path",{d:"M200 190 L200 240",className:"stroke-green-500 stroke-2",strokeDasharray:"5,5"}),e.jsx("rect",{x:"150",y:"240",width:"100",height:"60",rx:"8",className:"fill-green-900/30 stroke-green-500 stroke-2"}),e.jsx("text",{x:"200",y:"270",className:"text-sm fill-green-300",textAnchor:"middle",children:"Valid ✓"}),e.jsx("text",{x:"200",y:"290",className:"text-xs fill-green-200",textAnchor:"middle",children:"Use in program"}),e.jsx("path",{d:"M200 130 L100 190 L100 240",className:"stroke-red-500 stroke-2"}),e.jsx("rect",{x:"50",y:"240",width:"100",height:"60",rx:"8",className:"fill-red-900/30 stroke-red-500 stroke-2"}),e.jsx("text",{x:"100",y:"270",className:"text-sm fill-red-300",textAnchor:"middle",children:"Invalid ✗"}),e.jsx("text",{x:"100",y:"290",className:"text-xs fill-red-200",textAnchor:"middle",children:"Ask again"}),e.jsx("path",{d:"M200 100 L200 130",className:"stroke-gray-500 stroke-2"}),e.jsx("text",{x:"260",y:"160",className:"text-xs fill-green-400",textAnchor:"middle",children:"Valid"}),e.jsx("text",{x:"80",y:"160",className:"text-xs fill-red-400",textAnchor:"middle",children:"Invalid"})]})})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_1s_ease-out] animation-delay-[400ms]",children:e.jsxs("div",{onMouseEnter:()=>r("basic"),onMouseLeave:()=>r(null),className:x("bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transition-all duration-500",s==="basic"&&"border-blue-500/50 shadow-2xl shadow-blue-900/20 transform -translate-y-2"),children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-3 bg-blue-900/40 rounded-xl",children:e.jsx("span",{className:"text-2xl",children:"1️⃣"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold text-blue-400",children:"Basic Numeric Input"}),e.jsx("p",{className:"text-gray-400",children:"Handling invalid numbers"})]})]}),e.jsx("div",{className:"px-4 py-2 bg-blue-900/30 rounded-full border border-blue-700/50",children:e.jsx("code",{className:"text-blue-300 font-mono",children:"Pattern 1"})})]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/60 p-5 rounded-xl",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"Common Issues"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full mt-2"}),e.jsxs("span",{className:"text-gray-300",children:[e.jsx("span",{className:"text-red-400",children:"Non-numeric input:"}),' "abc", "ten", "12a"']})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full mt-2"}),e.jsxs("span",{className:"text-gray-300",children:[e.jsx("span",{className:"text-red-400",children:"Empty input:"}),' "" (just pressing Enter)']})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full mt-2"}),e.jsxs("span",{className:"text-gray-300",children:[e.jsx("span",{className:"text-red-400",children:"Decimal numbers:"}),' "12.5" when int() expected']})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full mt-2"}),e.jsxs("span",{className:"text-gray-300",children:[e.jsx("span",{className:"text-red-400",children:"Negative numbers:"}),' "-5" when positive expected']})]})]})]}),e.jsxs("div",{className:"bg-gray-900/60 p-5 rounded-xl",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"Validation Strategy"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"px-2 py-1 bg-blue-900/40 rounded text-xs text-blue-300 mt-1",children:"Step 1"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-300 font-medium",children:"Try to convert"}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Use try-except with int() or float()"})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"px-2 py-1 bg-blue-900/40 rounded text-xs text-blue-300 mt-1",children:"Step 2"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-300 font-medium",children:"Check value range"}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Use if statements for boundaries"})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"px-2 py-1 bg-blue-900/40 rounded text-xs text-blue-300 mt-1",children:"Step 3"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-300 font-medium",children:"Loop until valid"}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Use while True with break on success"})]})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Interactive Example"}),e.jsx(t,{fileModule:v,title:"Python: Positive Integer Input Validation",highlightLines:[]}),e.jsxs("div",{className:"mt-4 p-4 bg-blue-900/20 rounded-lg border border-blue-700/30",children:[e.jsx("h4",{className:"font-bold text-blue-300 mb-2",children:"💡 Professional Insight"}),e.jsxs("p",{className:"text-blue-200 text-sm",children:[e.jsx("span",{className:"text-amber-300",children:"Swadeep"})," learned: Always use ",e.jsx("code",{className:"text-cyan-300",children:"while True"}),"with input validation. It ensures users can correct mistakes without restarting the program."]})]})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_1s_ease-out] animation-delay-[600ms]",children:e.jsxs("div",{onMouseEnter:()=>r("advanced"),onMouseLeave:()=>r(null),className:x("bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transition-all duration-500",s==="advanced"&&"border-purple-500/50 shadow-2xl shadow-purple-900/20 transform -translate-y-2"),children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-3 bg-purple-900/40 rounded-xl",children:e.jsx("span",{className:"text-2xl",children:"2️⃣"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold text-purple-400",children:"Advanced Validation Patterns"}),e.jsx("p",{className:"text-gray-400",children:"Multiple constraints and custom validation"})]})]}),e.jsx("div",{className:"px-4 py-2 bg-purple-900/30 rounded-full border border-purple-700/50",children:e.jsx("code",{className:"text-purple-300 font-mono",children:"Pattern 2"})})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Example: Student Grade Validator"}),e.jsx(t,{fileModule:w,title:"Python: Positive Integer Input Validation",highlightLines:[]})]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-8",children:[e.jsxs("div",{className:"bg-gray-900/60 p-5 rounded-xl",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"Custom Validation Rules"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"px-2 py-1 bg-purple-900/40 rounded text-xs text-purple-300 mt-1",children:"Rule"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-300 font-medium",children:"Range checking"}),e.jsx("p",{className:"text-gray-400 text-sm",children:e.jsx("code",{children:"if not (0 <= value <= 100): raise ValueError(...)"})})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"px-2 py-1 bg-purple-900/40 rounded text-xs text-purple-300 mt-1",children:"Rule"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-300 font-medium",children:"Format validation"}),e.jsx("p",{className:"text-gray-400 text-sm",children:e.jsx("code",{children:"if not re.match(pattern, value): raise ValueError(...)"})})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"px-2 py-1 bg-purple-900/40 rounded text-xs text-purple-300 mt-1",children:"Rule"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-300 font-medium",children:"Business logic"}),e.jsx("p",{className:"text-gray-400 text-sm",children:e.jsx("code",{children:"if value in invalid_values: raise ValueError(...)"})})]})]})]})]}),e.jsxs("div",{className:"bg-gray-900/60 p-5 rounded-xl",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"Professional Pattern"}),e.jsxs("p",{className:"text-gray-300 mb-3",children:["Use ",e.jsx("code",{className:"text-purple-400",children:"raise ValueError()"})," inside try blocks to trigger consistent error handling:"]}),e.jsx("div",{className:"bg-gray-800/50 p-4 rounded-lg",children:e.jsx(t,{fileModule:y,title:"Python: Raising a ValueError",highlightLines:[]})})]})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_1s_ease-out] animation-delay-[800ms]",children:e.jsxs("div",{onMouseEnter:()=>r("menu"),onMouseLeave:()=>r(null),className:x("bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transition-all duration-500",s==="menu"&&"border-green-500/50 shadow-2xl shadow-green-900/20 transform -translate-y-2"),children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-3 bg-green-900/40 rounded-xl",children:e.jsx("span",{className:"text-2xl",children:"3️⃣"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold text-green-400",children:"Menu System Validation"}),e.jsx("p",{className:"text-gray-400",children:"Handling menu choices and user options"})]})]}),e.jsx("div",{className:"px-4 py-2 bg-green-900/30 rounded-full border border-green-700/50",children:e.jsx("code",{className:"text-green-300 font-mono",children:"Pattern 3"})})]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:"Interactive Example"}),e.jsx(u,{initialCode:k})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/60 p-5 rounded-xl",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"Menu Validation Strategy"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full mt-2"}),e.jsxs("span",{className:"text-gray-300",children:[e.jsx("span",{className:"text-green-400",children:"Convert to number:"})," Use ",e.jsx("code",{children:"int()"})," with try-except"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full mt-2"}),e.jsxs("span",{className:"text-gray-300",children:[e.jsx("span",{className:"text-green-400",children:"Check range:"})," Validate against available options"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full mt-2"}),e.jsxs("span",{className:"text-gray-300",children:[e.jsx("span",{className:"text-green-400",children:"Handle gracefully:"})," Show error and re-show menu"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full mt-2"}),e.jsxs("span",{className:"text-gray-300",children:[e.jsx("span",{className:"text-green-400",children:"Allow exit:"})," Always include quit/exit option"]})]})]})]}),e.jsxs("div",{className:"bg-gray-900/60 p-5 rounded-xl",children:[e.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:"Common Menu Errors"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"px-2 py-1 bg-red-900/40 rounded text-xs text-red-300 mt-1",children:"Error"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-300 font-medium",children:"Out of range"}),e.jsx("p",{className:"text-gray-400 text-sm",children:"User enters 5 when options are 1-4"})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"px-2 py-1 bg-red-900/40 rounded text-xs text-red-300 mt-1",children:"Error"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-300 font-medium",children:"Non-numeric input"}),e.jsx("p",{className:"text-gray-400 text-sm",children:'User enters "A" instead of 1'})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"px-2 py-1 bg-red-900/40 rounded text-xs text-red-300 mt-1",children:"Error"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-300 font-medium",children:"Empty input"}),e.jsx("p",{className:"text-gray-400 text-sm",children:"User just presses Enter"})]})]})]})]})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_1s_ease-out] animation-delay-[1000ms]",children:e.jsxs("div",{className:`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 \r
            hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-900/10 transition-all duration-500`,children:[e.jsxs("h2",{className:"text-3xl font-bold text-cyan-300 mb-8 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-cyan-900/30 rounded-lg",children:"📊"}),"Input Validation Decision Flow"]}),e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsxs("svg",{className:"w-full h-auto",viewBox:"0 0 700 500",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"decisionGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#8B5CF6",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#06B6D4",stopOpacity:1}})]})}),e.jsx("rect",{x:"300",y:"20",width:"100",height:"60",rx:"10",className:"fill-gray-800 stroke-cyan-500 stroke-2"}),e.jsx("text",{x:"350",y:"55",className:"text-lg font-bold fill-white",textAnchor:"middle",children:"Start"}),e.jsx("rect",{x:"250",y:"100",width:"200",height:"60",rx:"10",className:"fill-amber-900/40 stroke-amber-500 stroke-2"}),e.jsx("text",{x:"350",y:"130",className:"text-md font-bold fill-white",textAnchor:"middle",children:"Get User Input"}),e.jsx("rect",{x:"250",y:"180",width:"200",height:"80",rx:"10",className:"fill-blue-900/40 stroke-blue-500 stroke-2"}),e.jsx("text",{x:"350",y:"210",className:"text-md font-bold fill-white",textAnchor:"middle",children:"Try Conversion"}),e.jsx("text",{x:"350",y:"235",className:"text-sm fill-blue-300",textAnchor:"middle",children:"int() or float()"}),e.jsx("path",{d:"M350 260 L350 300",className:"stroke-gray-500 stroke-2"}),e.jsx("circle",{cx:"350",cy:"320",r:"20",className:"fill-gray-700"}),e.jsx("text",{x:"350",y:"325",className:"text-lg fill-white",textAnchor:"middle",children:"?"}),e.jsx("text",{x:"350",y:"305",className:"text-sm fill-gray-400",textAnchor:"middle",children:"Success?"}),e.jsx("path",{d:"M350 340 L350 380",className:"stroke-red-500 stroke-2"}),e.jsx("rect",{x:"250",y:"380",width:"200",height:"60",rx:"10",className:"fill-red-900/40 stroke-red-500 stroke-2"}),e.jsx("text",{x:"350",y:"415",className:"text-md font-bold fill-white",textAnchor:"middle",children:"Show Error"}),e.jsx("text",{x:"325",y:"365",className:"text-sm fill-red-400",textAnchor:"middle",children:"No"}),e.jsx("path",{d:"M380 320 L430 320 L430 240",className:"stroke-green-500 stroke-2"}),e.jsx("rect",{x:"430",y:"240",width:"200",height:"80",rx:"10",className:"fill-green-900/40 stroke-green-500 stroke-2"}),e.jsx("text",{x:"530",y:"270",className:"text-md font-bold fill-white",textAnchor:"middle",children:"Validate Range/Rules"}),e.jsx("text",{x:"530",y:"295",className:"text-sm fill-green-300",textAnchor:"middle",children:"0 ≤ value ≤ 100"}),e.jsx("text",{x:"405",y:"315",className:"text-sm fill-green-400",textAnchor:"middle",children:"Yes"}),e.jsx("path",{d:"M530 320 L530 360",className:"stroke-gray-500 stroke-2"}),e.jsx("circle",{cx:"530",cy:"380",r:"20",className:"fill-gray-700"}),e.jsx("text",{x:"530",y:"385",className:"text-lg fill-white",textAnchor:"middle",children:"?"}),e.jsx("text",{x:"530",y:"365",className:"text-sm fill-gray-400",textAnchor:"middle",children:"Valid?"}),e.jsx("path",{d:"M510 380 L430 420 L430 460",className:"stroke-red-500 stroke-2"}),e.jsx("text",{x:"470",y:"405",className:"text-sm fill-red-400",textAnchor:"middle",children:"No"}),e.jsx("path",{d:"M550 380 L610 380 L610 440",className:"stroke-green-500 stroke-2"}),e.jsx("rect",{x:"530",y:"440",width:"160",height:"60",rx:"10",className:"fill-emerald-900/40 stroke-emerald-500 stroke-2"}),e.jsx("text",{x:"610",y:"475",className:"text-md font-bold fill-white",textAnchor:"middle",children:"Return Value"}),e.jsx("text",{x:"580",y:"395",className:"text-sm fill-green-400",textAnchor:"middle",children:"Yes"}),e.jsx("path",{d:"M350 440 L350 460 L100 460 L100 160 L250 160",className:"stroke-amber-500 stroke-2",strokeDasharray:"5,5"}),e.jsx("text",{x:"225",y:"445",className:"text-sm fill-amber-400",textAnchor:"middle",children:"Ask Again"}),e.jsx("path",{d:"M350 80 L350 100 M350 260 L350 320 M380 320 L430 320 L430 240 M530 320 L530 380 M550 380 L610 380 L610 440",className:"stroke-cyan-500 stroke-2 fill-none",strokeWidth:"2",strokeDasharray:"10,5",strokeDashoffset:"100",style:{animation:"inputFlow 4s linear infinite"}})]}),e.jsxs("div",{className:"mt-8 grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"text-center p-4 bg-amber-900/20 rounded-lg border border-amber-700/30",children:[e.jsx("p",{className:"text-amber-400 font-bold mb-2",children:"Step 1"}),e.jsx("p",{className:"text-xs text-gray-300",children:"Get raw input from user"}),e.jsx("p",{className:"text-xs text-amber-300 mt-2",children:"input() function"})]}),e.jsxs("div",{className:"text-center p-4 bg-blue-900/20 rounded-lg border border-blue-700/30",children:[e.jsx("p",{className:"text-blue-400 font-bold mb-2",children:"Step 2"}),e.jsx("p",{className:"text-xs text-gray-300",children:"Try conversion with try-except"}),e.jsx("p",{className:"text-xs text-blue-300 mt-2",children:"int() or float()"})]}),e.jsxs("div",{className:"text-center p-4 bg-green-900/20 rounded-lg border border-green-700/30",children:[e.jsx("p",{className:"text-green-400 font-bold mb-2",children:"Step 3"}),e.jsx("p",{className:"text-xs text-gray-300",children:"Validate business rules"}),e.jsx("p",{className:"text-xs text-green-300 mt-2",children:"Range checking"})]})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_1s_ease-out] animation-delay-[1200ms]",children:e.jsxs("div",{className:`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 \r
            hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-500`,children:[e.jsxs("h2",{className:"text-3xl font-bold text-red-300 mb-8 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-red-900/30 rounded-lg",children:"⚠️"}),"Common Validation Mistakes"]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/70 p-5 rounded-xl border border-red-700/30",children:[e.jsx("h4",{className:"text-lg font-bold text-red-400 mb-3",children:"Mistake 1: No Validation"}),e.jsx("code",{className:"block bg-gray-800/50 p-3 rounded-lg text-red-300 text-sm font-mono mb-3",children:'age = int(input("Enter age: "))  # ❌ Crashes on "abc"'}),e.jsxs("p",{className:"text-gray-300",children:[e.jsx("span",{className:"text-amber-300",children:"Abhronila"})," from Shyamnagar learned this the hard way: Always validate user input!"]})]}),e.jsxs("div",{className:"bg-gray-900/70 p-5 rounded-xl border border-red-700/30",children:[e.jsx("h4",{className:"text-lg font-bold text-red-400 mb-3",children:"Mistake 2: Incomplete Validation"}),e.jsx(t,{initialCode:E}),e.jsxs("p",{className:"text-gray-300",children:["Validation isn't complete until you check for ",e.jsx("span",{className:"text-red-400",children:"all possible invalid values"}),"."]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/70 p-5 rounded-xl border border-red-700/30",children:[e.jsx("h4",{className:"text-lg font-bold text-red-400 mb-3",children:"Mistake 3: Poor Error Messages"}),e.jsxs("code",{className:"block bg-gray-800/50 p-3 rounded-lg text-red-300 text-sm font-mono mb-3",children:["except ValueError:",e.jsx("br",{}),'  print("Error!")  # ❌ Not helpful!']}),e.jsxs("p",{className:"text-gray-300",children:[e.jsx("span",{className:"text-amber-300",children:"Debangshu"})," from Ichapur learned: Error messages should tell users",e.jsx("span",{className:"text-green-400",children:" what went wrong and how to fix it"}),"."]}),e.jsx("div",{className:"mt-3 p-3 bg-gray-800/50 rounded-lg",children:e.jsxs("p",{className:"text-sm text-green-400",children:[e.jsx("span",{className:"font-bold",children:"Better:"})," ",e.jsx("code",{className:"text-cyan-300",children:'print("Please enter a number between 1 and 100")'})]})})]}),e.jsxs("div",{className:"bg-gray-900/70 p-5 rounded-xl border border-red-700/30",children:[e.jsx("h4",{className:"text-lg font-bold text-red-400 mb-3",children:"Mistake 4: Infinite Loop on Quit"}),e.jsx("p",{className:"text-gray-300 mb-3",children:"Forgetting to provide an exit option:"}),e.jsxs("code",{className:"block bg-gray-800/50 p-3 rounded-lg text-red-300 text-sm font-mono",children:["while True:  # ❌ How does user exit?",e.jsx("br",{}),"  # ... validation code ..."]}),e.jsx("p",{className:"text-gray-400 text-sm mt-3",children:"💡 Always provide a way to exit validation loops"})]})]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_1.4s_ease-out] animation-delay-[1400ms]",children:e.jsx("div",{className:`bg-gradient-to-r from-amber-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-8 border border-amber-700/50 \r
            hover:shadow-2xl hover:shadow-amber-900/20 transition-all duration-500 group`,children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-6 items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:`w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center \r
                  group-hover:scale-110 transition-transform duration-500`,children:e.jsx("span",{className:"text-2xl",children:"👨‍🏫"})})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"inline-block px-4 py-1 bg-amber-800/50 rounded-full mb-4",children:e.jsx("h3",{className:"text-xl font-bold text-amber-300",children:"Teacher's Note"})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-200 leading-relaxed",children:[e.jsx("span",{className:"text-cyan-300 font-medium",children:"Key Insight:"})," Input validation is not just about preventing crashes—it's about ",e.jsx("span",{className:"text-amber-400",children:"creating a good user experience"}),". Good validation guides users to correct their mistakes."]}),e.jsxs("div",{className:"bg-gray-900/40 p-4 rounded-xl",children:[e.jsx("h4",{className:"font-bold text-amber-300 mb-2",children:"Teaching Strategy:"}),e.jsxs("p",{className:"text-gray-300",children:['I tell my Barrackpore students: "Think of your program as a helpful teacher. When ',e.jsx("span",{className:"text-amber-300",children:"Swadeep"}),` makes a mistake (enters 'abc' instead of a number), don't scold him with a crash. Instead, gently say 'That's not a number. Please try again.' That's what good validation does."`]})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 mt-4",children:[e.jsxs("div",{className:"p-3 bg-gray-900/40 rounded-lg",children:[e.jsx("p",{className:"text-red-400 font-bold text-sm",children:"Bad Validation"}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:'"ValueError" (cryptic)'})]}),e.jsxs("div",{className:"p-3 bg-gray-900/40 rounded-lg",children:[e.jsx("p",{className:"text-green-400 font-bold text-sm",children:"Good Validation"}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:'"Please enter a number between 1-100" (helpful)'})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-4 mt-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-400",children:"Sukanta Hui"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-400",children:"27 years experience"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-amber-500 rounded-full"}),e.jsx("span",{className:"text-sm text-gray-400",children:"Specializes in user-friendly design"})]})]})]})]})]})})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_1.6s_ease-out] animation-delay-[1600ms]",children:e.jsxs("div",{className:`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 \r
            hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500`,children:[e.jsxs("h2",{className:"text-3xl font-bold text-emerald-300 mb-8 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-emerald-900/30 rounded-lg",children:"✅"}),"Professional Best Practices"]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/60 p-5 rounded-xl border border-emerald-700/30",children:[e.jsx("h4",{className:"text-xl font-bold text-emerald-300 mb-3",children:"1. Create Validation Functions"}),e.jsx("p",{className:"text-gray-300 mb-3",children:"Reusable validation functions make code cleaner:"}),e.jsx("div",{className:"bg-gray-800/50 p-4 rounded-lg",children:e.jsx(t,{fileModule:b,title:"Python: Validate Age Function",highlightLines:[]})})]}),e.jsxs("div",{className:"bg-gray-900/60 p-5 rounded-xl border border-emerald-700/30",children:[e.jsx("h4",{className:"text-xl font-bold text-emerald-300 mb-3",children:"2. Use Meaningful Error Messages"}),e.jsx("p",{className:"text-gray-300",children:"Error messages should guide users:"}),e.jsxs("div",{className:"mt-3 grid grid-cols-1 gap-2",children:[e.jsxs("div",{className:"p-3 bg-red-900/20 rounded-lg",children:[e.jsx("p",{className:"text-red-400 text-xs",children:"❌ Bad:"}),e.jsx("p",{className:"text-red-300 text-xs",children:'"Invalid input"'})]}),e.jsxs("div",{className:"p-3 bg-green-900/20 rounded-lg",children:[e.jsx("p",{className:"text-green-400 text-xs",children:"✅ Good:"}),e.jsx("p",{className:"text-green-300 text-xs",children:'"Please enter a number between 1-100"'})]})]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/60 p-5 rounded-xl border border-emerald-700/30",children:[e.jsx("h4",{className:"text-xl font-bold text-emerald-300 mb-3",children:"3. Provide Default Values"}),e.jsx("p",{className:"text-gray-300 mb-3",children:"Sometimes it's helpful to suggest defaults:"}),e.jsx("div",{className:"bg-gray-800/50 p-4 rounded-lg",children:e.jsx(t,{fileModule:N,title:"Python: get_number() with Default Input",highlightLines:[]})})]}),e.jsxs("div",{className:"bg-gray-900/60 p-5 rounded-xl border border-emerald-700/30",children:[e.jsx("h4",{className:"text-xl font-bold text-emerald-300 mb-3",children:"4. Log Validation Attempts"}),e.jsx("p",{className:"text-gray-300",children:"For professional applications, log validation failures:"}),e.jsx("div",{className:"mt-3 bg-gray-800/50 p-4 rounded-lg",children:e.jsx(t,{fileModule:f,title:"Python: Logging Invalid Age Input",highlightLines:[]})})]})]})]}),e.jsxs("div",{className:"mt-8 p-5 bg-blue-900/20 rounded-xl border border-blue-700/30",children:[e.jsx("h4",{className:"text-lg font-bold text-blue-300 mb-3",children:"🏆 Industry Standard"}),e.jsxs("p",{className:"text-gray-300",children:["In professional Python applications, input validation is often handled by dedicated validation libraries like ",e.jsx("span",{className:"text-cyan-300",children:"Pydantic"})," or",e.jsx("span",{className:"text-purple-300",children:" Marshmallow"}),". These use the same principles you're learning: type conversion, range checking, and clear error messages—but at an industrial scale."]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_1.8s_ease-out] animation-delay-[1800ms]",children:e.jsxs("div",{className:"bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50",children:[e.jsxs("h2",{className:"text-3xl font-bold text-cyan-300 mb-8 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-cyan-900/30 rounded-lg",children:"📋"}),"Input Validation Checklist"]}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-8",children:[e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-gray-900/60 p-5 rounded-xl",children:[e.jsx("h4",{className:"text-xl font-bold text-emerald-400 mb-4",children:"Always Do These"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-emerald-900/40 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("span",{className:"text-emerald-400",children:"✓"})}),e.jsx("p",{className:"text-gray-300",children:"Use try-except for type conversion"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-emerald-900/40 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("span",{className:"text-emerald-400",children:"✓"})}),e.jsx("p",{className:"text-gray-300",children:"Check for empty input"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-emerald-900/40 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("span",{className:"text-emerald-400",children:"✓"})}),e.jsx("p",{className:"text-gray-300",children:"Validate value ranges (min/max)"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-emerald-900/40 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("span",{className:"text-emerald-400",children:"✓"})}),e.jsx("p",{className:"text-gray-300",children:"Provide clear, helpful error messages"})]})]})]})}),e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-gray-900/60 p-5 rounded-xl",children:[e.jsx("h4",{className:"text-xl font-bold text-red-400 mb-4",children:"Avoid These"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-red-900/40 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("span",{className:"text-red-400",children:"✗"})}),e.jsx("p",{className:"text-gray-300",children:"Assuming user input is valid"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-red-900/40 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("span",{className:"text-red-400",children:"✗"})}),e.jsx("p",{className:"text-gray-300",children:"Cryptic error messages"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-red-900/40 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("span",{className:"text-red-400",children:"✗"})}),e.jsx("p",{className:"text-gray-300",children:"Infinite loops without exit option"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-6 h-6 bg-red-900/40 rounded-full flex items-center justify-center flex-shrink-0 mt-1",children:e.jsx("span",{className:"text-red-400",children:"✗"})}),e.jsx("p",{className:"text-gray-300",children:"Forgetting to strip whitespace"})]})]})]})})]}),e.jsxs("div",{className:"mt-8 p-5 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-700/30",children:[e.jsx("h4",{className:"text-lg font-bold text-purple-300 mb-3",children:"💪 Practice Exercise"}),e.jsxs("p",{className:"text-gray-300",children:["Create a registration system that validates:",e.jsx("span",{className:"text-cyan-300",children:" 1) Username (non-empty, 3-20 chars)"}),",",e.jsx("span",{className:"text-amber-300",children:" 2) Email (contains @ and .)"}),",",e.jsx("span",{className:"text-green-300",children:" 3) Password (8+ chars, contains number)"}),",",e.jsx("span",{className:"text-blue-300",children:" 4) Age (18+ only)"}),". Use while loops to keep asking until all inputs are valid."]})]})]})}),e.jsx("section",{className:"motion-safe:animate-[fadeSlideUp_2s_ease-out] animation-delay-[2000ms]",children:e.jsxs("div",{className:"bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/50",children:[e.jsxs("h3",{className:"text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-3",children:[e.jsx("span",{className:"p-2 bg-cyan-900/30 rounded-lg",children:"🤔"}),"Think About This..."]}),e.jsxs("div",{className:"bg-gray-900/30 p-5 rounded-xl",children:[e.jsxs("p",{className:"text-gray-300 italic mb-3",children:['"When ',e.jsx("span",{className:"text-amber-300",children:"Swadeep"})," builds a banking application, how should he validate monetary amounts?",e.jsx("span",{className:"text-cyan-300",children:" Consider: Can amounts be negative? Can they have more than 2 decimal places? What about very large numbers? How would you handle currency symbols?"}),'"']}),e.jsxs("div",{className:"mt-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50",children:[e.jsx("h4",{className:"font-bold text-amber-300 mb-2",children:"Consider:"}),e.jsxs("ul",{className:"text-gray-400 space-y-2",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-gray-600 rounded-full"}),"Use ",e.jsx("code",{className:"bg-gray-800 px-2 py-1 rounded",children:"Decimal"})," instead of ",e.jsx("code",{className:"bg-gray-800 px-2 py-1 rounded",children:"float"})," for money"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-gray-600 rounded-full"}),"Strip currency symbols before conversion"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-gray-600 rounded-full"}),"Check for reasonable limits (no $1 trillion deposits!)"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-gray-600 rounded-full"}),"Handle different decimal separators (1.00 vs 1,00)"]})]})]})]})]})})]}),e.jsxs("footer",{className:"mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm",children:[e.jsx("p",{children:"Basic input validation using exception handling • Topic 6 of Python Exception Handling Series"}),e.jsx("p",{className:"mt-2",children:"Next: Raising custom exceptions"})]})]})};export{M as default};
