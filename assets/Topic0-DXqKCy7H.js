import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{P as n}from"./PythonQuestionPaperTemplate-B5KJCulR.js";import"./PrintButton-BGrBfOtS.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const t="PY-FUNC-TOPIC0-DEF",a="Topic 0: Function Definitions, Calling & Execution Flow Assessment",s="45 Mins",o=25,i="Python syntax, def statement, function invocation",r=["Answer all questions systematically","Include Python code snippets and call stacks where applicable","Assume Python 3.10+"],c=[{section:"A",type:"Short Conceptual Questions",marksPerQuestion:2,totalQuestions:5,description:"Fundamental theory & syntax (2 Marks each)",questions:[{q:"What is the purpose of the 'def' keyword in Python?",marks:2,answer:"The `def` keyword creates a user-defined function object and binds it to a specified identifier name in the current namespace.\n\n```python\ndef calculate_tax(gross_income):\n    return gross_income * 0.10\n```"},{q:"What is the difference between function definition time and function execution time?",marks:2,answer:"At definition time, Python parses the syntax, compiles the body into bytecode, and creates default argument objects. At execution time, a new local frame/stack is created, arguments are bound, and code lines run sequentially."},{q:"What happens if a function does not contain a 'return' statement?",marks:2,answer:"In Python, functions without an explicit `return` statement automatically return `None` upon reaching the end of the function body."},{q:"Why must a function be defined before it is called in Python?",marks:2,answer:"Because Python is an interpreted language that reads top-to-bottom. If you call `greet()` before its `def greet():` line is reached, Python raises a `NameError: name 'greet' is not defined`."},{q:"What is the 'pass' keyword used for inside a function body?",marks:2,answer:"The `pass` keyword acts as a syntactic null-statement placeholder, preventing IndentationError when designing stub functions.\n\n```python\ndef process_payroll(employee_id):\n    pass  # To be implemented later\n```"}]},{section:"B",type:"Descriptive & Code Tracing",marksPerQuestion:5,totalQuestions:3,description:"In-depth explanations and flow tracing (5 Marks each)",questions:[{q:"Explain the Python Call Stack and execution frame lifecycle with an example involving nested function calls.",marks:5,answer:`When a function is called, Python pushes a new stack frame onto the Call Stack containing local variables and bytecode instruction pointers. When the function returns, its frame is popped.

\`\`\`python
def first():
    print('First start')
    second()
    print('First end')

def second():
    print('Inside second')

first()
# Call Stack Order: main → first() → second() → pop second() → pop first()
\`\`\``},{q:"Explain Docstrings in Python functions. How are they accessed at runtime and in automated documentation tools?",marks:5,answer:`Docstrings are triple-quoted string literals placed as the very first statement inside a function body. They document parameters, returns, and purpose.

\`\`\`python
def compute_emi(principal, rate, tenure):
    """Calculates monthly loan EMI with compound factor."""
    return (principal * rate) / tenure

print(compute_emi.__doc__)
help(compute_emi)
\`\`\``},{q:"Write a complete modular function that accepts student marks in 3 subjects, computes percentage, and returns both percentage and distinction status.",marks:5,answer:`\`\`\`python
def evaluate_student(name, marks1, marks2, marks3):
    total = marks1 + marks2 + marks3
    percentage = (total / 300) * 100
    is_distinction = percentage >= 75.0
    
    return {
        "name": name,
        "percentage": round(percentage, 2),
        "distinction": is_distinction
    }

# Test Case
result = evaluate_student("Mamata", 88, 92, 85)
print(result) # {'name': 'Mamata', 'percentage': 88.33, 'distinction': True}
\`\`\``}]}],d={paperId:t,title:a,duration:s,totalMarks:o,prerequisites:i,instructions:r,sections:c},u={name:"Coder & AccoTax",address:"Barrackpore, Kolkata",logo:"/logo.png"};function y(){return e.jsx("div",{className:"container mx-auto py-8",children:e.jsx(n,{data:d,isLoggedIn:!0,organizationDetails:u})})}export{y as default};
