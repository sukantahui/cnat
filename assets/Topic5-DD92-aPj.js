import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{P as e}from"./PythonQuestionPaperTemplate-B5KJCulR.js";import"./PrintButton-BGrBfOtS.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const a="PY-FUNC-TOPIC5-SCOPE",t="Topic 5: Variable Scope, LEGB Rule & Lifetime Analysis Assessment",o="45 Mins",r=25,s="Local, Enclosing, Global, Built-in namespaces, global, nonlocal",i=["Answer all questions systematically","Trace namespace lookups and scope bindings","Assume Python 3.10+"],l=[{section:"A",type:"Short Conceptual Questions",marksPerQuestion:2,totalQuestions:5,description:"LEGB Scope & Namespace Rules (2 Marks each)",questions:[{q:"What is the LEGB Rule for variable name resolution in Python?",marks:2,answer:"Python resolves identifiers by searching scopes in order:\n1. **L**ocal (inside current function)\n2. **E**nclosing (outer enclosing functions / closures)\n3. **G**lobal (module level)\n4. **B**uilt-in (Python builtins like `len`, `range`)"},{q:"What is the purpose of the 'global' keyword?",marks:2,answer:"The `global` keyword declares that a variable inside a function body refers to the module-level global namespace, allowing assignment/mutation of global state."},{q:"What is the purpose of the 'nonlocal' keyword?",marks:2,answer:"The `nonlocal` keyword allows an inner function in a closure to modify a variable bound in the nearest enclosing (outer) function's scope."},{q:"Why does 'UnboundLocalError' occur when assigning to a variable that exists globally?",marks:2,answer:"If a variable is assigned anywhere inside a function, Python marks it as local for the *entire* function scope. Referencing it before the assignment line raises `UnboundLocalError`."},{q:"What is variable shadowing in Python?",marks:2,answer:"When a local variable is given the same name as a global or built-in identifier (e.g. `list = [1, 2]`), shadowing and temporarily hiding the outer definition."}]},{section:"B",type:"Descriptive & Code Tracing",marksPerQuestion:5,totalQuestions:3,description:"Namespace & closure engineering (5 Marks each)",questions:[{q:"Demonstrate closures and state retention using the 'nonlocal' keyword to build a stateful bank account balance tracker.",marks:5,answer:`\`\`\`python
def create_bank_account(initial_balance):
    balance = initial_balance  # Enclosing state
    
    def transaction(amount, transaction_type="deposit"):
        nonlocal balance
        if transaction_type == "deposit":
            balance += amount
        elif transaction_type == "withdraw":
            if amount > balance:
                return f"Insufficient funds! Balance: ₹{balance:,.2f}"
            balance -= amount
        return f"Transaction Successful. Current Balance: ₹{balance:,.2f}"
    
    return transaction

# Independent account closures for Mamata and Debangshu
mamata_acc = create_bank_account(10000)
print(mamata_acc(5000, "deposit"))   # Current Balance: ₹15,000.00
print(mamata_acc(2000, "withdraw"))  # Current Balance: ₹13,000.00
\`\`\``},{q:"Trace and explain the UnboundLocalError bug and show two ways to properly resolve it.",marks:5,answer:`\`\`\`python
# ❌ BUG:
counter = 10
def increment_buggy():
    # Python marks 'counter' local because of +=, so print fails!
    counter += 1 # UnboundLocalError: local variable 'counter' referenced before assignment

# ✔ FIX 1: Explicit global declaration
def increment_global():
    global counter
    counter += 1
    return counter

# ✔ FIX 2: Pure functional style (passing and returning value)
def increment_pure(val):
    return val + 1
\`\`\``},{q:"Explain the lifetime of local variables compared to global variables in terms of memory and garbage collection.",marks:5,answer:"Local variables exist only during the execution of their stack frame. Once the function returns, its frame is popped and local variables are decremented in reference count and collected by GC. Global variables persist in the module namespace until program exit."}]}],c={paperId:a,title:t,duration:o,totalMarks:r,prerequisites:s,instructions:i,sections:l},u={name:"Coder & AccoTax",address:"Barrackpore, Kolkata",logo:"/logo.png"};function h(){return n.jsx("div",{className:"container mx-auto py-8",children:n.jsx(e,{data:c,isLoggedIn:!0,organizationDetails:u})})}export{h as default};
