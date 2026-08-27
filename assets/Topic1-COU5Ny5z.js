import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{P as n}from"./PythonQuestionPaperTemplate-BZ334aPN.js";import"./PrintButton-CzwhZypc.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const a="PY-FUNC-TOPIC1-ARGS",t="Topic 1: Arguments: Positional, Keyword, Default & Required Assessment",r="45 Mins",o=25,i="Function arguments and parameter binding rules",s=["Answer all questions with code examples","Highlight mutable default argument traps","Assume Python 3.10+"],u=[{section:"A",type:"Short Conceptual Questions",marksPerQuestion:2,totalQuestions:5,description:"Fundamental parameter rules (2 Marks each)",questions:[{q:"What is the difference between a parameter and an argument?",marks:2,answer:"A **parameter** is the variable defined in the function signature header (`def f(a, b):`). An **argument** is the actual value passed to the function during invocation (`f(10, 20)`)."},{q:"Why must positional arguments always precede keyword arguments in a function call?",marks:2,answer:"Because Python resolves positional arguments left-to-right by slot index first. Placing a positional argument after a keyword argument raises `SyntaxError: positional argument follows keyword argument`."},{q:"What are keyword-only arguments and how are they defined using the bare '*' separator?",marks:2,answer:'Parameters listed after a bare `*` can only be passed by name (keyword), never positionally.\n\n```python\ndef connect(host, port, *, timeout=30):\n    pass\n\nconnect("localhost", 8080, timeout=10) # Valid\n# connect("localhost", 8080, 10) # ❌ TypeError\n```'},{q:"What are positional-only parameters and how are they indicated with the '/' symbol?",marks:2,answer:"Parameters before `/` can only be passed positionally and cannot be passed by keyword name (introduced in Python 3.8).\n\n```python\ndef square(x, /):\n    return x ** 2\n\nsquare(5) # Valid\n# square(x=5) # ❌ TypeError\n```"},{q:"Why is 'def append_item(item, lst=[])' dangerous in Python?",marks:2,answer:"Default argument expressions are evaluated once at function definition time, NOT at each call. A mutable default like `lst=[]` retains state across multiple calls, causing unintentional data accumulation."}]},{section:"B",type:"Descriptive & Code Tracing",marksPerQuestion:5,totalQuestions:3,description:"In-depth argument engineering (5 Marks each)",questions:[{q:"Explain the Mutable Default Argument Trap and show how to fix it using the 'None' sentinel pattern.",marks:5,answer:`\`\`\`python
# ❌ BUG: Shared list across all invocations
def add_order_buggy(item, cart=[]):
    cart.append(item)
    return cart

# ✔ FIX: None sentinel pattern
def add_order_fixed(item, cart=None):
    if cart is None:
        cart = []
    cart.append(item)
    return cart

print(add_order_fixed("Book"))  # ['Book']
print(add_order_fixed("Pen"))   # ['Pen'] (Clean independent list!)
\`\`\``},{q:"Write a user registration function demonstrating Required Positional, Optional Default, and Keyword-Only arguments with validations.",marks:5,answer:`\`\`\`python
def register_user(username, email, role="student", *, send_email=True, city="Kolkata"):
    user_profile = {
        "username": username,
        "email": email,
        "role": role,
        "city": city,
        "email_notifications": send_email
    }
    return user_profile

# Valid Invocations:
u1 = register_user("mamata", "mamata@jadavpur.edu")
u2 = register_user("debangshu", "debangshu@gmail.com", "admin", city="Barrackpore", send_email=False)
\`\`\``},{q:"Trace and explain the output of a function mixing positional, keyword, and default parameters.",marks:5,answer:`\`\`\`python
def compute(a, b=10, c=20):
    return a + b * c

print(compute(5))           # 5 + 10 * 20 = 205
print(compute(5, 2))        # 5 + 2 * 20 = 45
print(compute(5, c=2))      # 5 + 10 * 2 = 25
print(compute(c=5, a=2))    # 2 + 10 * 5 = 52
\`\`\``}]}],l={paperId:a,title:t,duration:r,totalMarks:o,prerequisites:i,instructions:s,sections:u},d={name:"Coder & AccoTax",address:"Barrackpore, Kolkata",logo:"/logo.png"};function f(){return e.jsx("div",{className:"container mx-auto py-8",children:e.jsx(n,{data:l,isLoggedIn:!0,organizationDetails:d})})}export{f as default};
