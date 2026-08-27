import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{P as a}from"./PythonQuestionPaperTemplate-BZ334aPN.js";import"./PrintButton-CzwhZypc.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const n="PY-FUNC-TOPIC4-LAMBDAS",s="Topic 4: Lambda Expressions & Higher-Order Functions Assessment",t="45 Mins",r=25,o="Anonymous lambda functions, map, filter, sorted key functions",i=["Answer all questions systematically","Show functional programming paradigms with Python code","Assume Python 3.10+"],m=[{section:"A",type:"Short Conceptual Questions",marksPerQuestion:2,totalQuestions:5,description:"Lambda syntax & restrictions (2 Marks each)",questions:[{q:"What is an anonymous lambda function in Python?",marks:2,answer:"A lambda function is an inline, anonymous function defined without a `def` statement using the `lambda` keyword: `lambda params: expression`."},{q:"What are the structural limitations of a Python lambda compared to a 'def' function?",marks:2,answer:"Lambdas can only contain a **single expression** (not statements like `while`, `for`, `try/except`, or multi-line assignments), and implicitly return that expression's value."},{q:"What is a Higher-Order Function?",marks:2,answer:"A higher-order function is a function that either takes another function as an argument (e.g. `map()`, `filter()`, `sorted()`) or returns a function as its result."},{q:"How does 'sorted()' use a lambda as its 'key' parameter?",marks:2,answer:"The `key` function extracts a comparison criteria for each element before sorting.\n\n```python\nstudents = [('Mamata', 92), ('Debangshu', 85)]\nstudents.sort(key=lambda s: s[1], reverse=True)\n```"},{q:"Why does PEP 8 discourage assigning lambdas to variable names (e.g. 'f = lambda x: x*2')?",marks:2,answer:"Because `def f(x): return x*2` is more readable, provides proper traceback function names (`__name__`), and supports docstrings."}]},{section:"B",type:"Descriptive & Code Tracing",marksPerQuestion:5,totalQuestions:3,description:"Functional pipeline engineering (5 Marks each)",questions:[{q:"Demonstrate data transformation using map(), filter(), and list comprehensions side-by-side on student score records.",marks:5,answer:`\`\`\`python
marks = [45, 78, 92, 38, 85, 60]

# 1. Filter passing marks (>= 50)
passed_filter = list(filter(lambda m: m >= 50, marks))
passed_comp = [m for m in marks if m >= 50]

# 2. Add 5 bonus marks with map()
bonus_map = list(map(lambda m: min(m + 5, 100), passed_filter))
bonus_comp = [min(m + 5, 100) for m in passed_comp]

print("Filtered Passed:", passed_comp) # [78, 92, 85, 60]
print("With Bonus:    ", bonus_comp)  # [83, 97, 90, 65]
\`\`\``},{q:"Write a multi-attribute sorting pipeline using lambdas to sort employee records first by department (ascending) then by salary (descending).",marks:5,answer:`\`\`\`python
employees = [
    {"name": "Mamata", "dept": "IT", "salary": 85000},
    {"name": "Debangshu", "dept": "HR", "salary": 65000},
    {"name": "Susmita", "dept": "IT", "salary": 95000},
    {"name": "Abhronila", "dept": "HR", "salary": 72000}
]

# Sort key tuple: (dept, -salary) for dual-criteria sorting
employees.sort(key=lambda e: (e["dept"], -e["salary"]))

for emp in employees:
    print(f"{emp['dept']:<4} | {emp['name']:<10} | ₹{emp['salary']:,}")
\`\`\``},{q:"Explain how functools.reduce() works with lambda expressions to compute cumulative aggregates.",marks:5,answer:`\`\`\`python
from functools import reduce

numbers = [1, 2, 3, 4, 5]
# Computes factorial: (((1*2)*3)*4)*5
factorial = reduce(lambda acc, x: acc * x, numbers, 1)
print("Factorial of 5:", factorial) # 120

# Finding maximum element with reduce
max_val = reduce(lambda a, b: a if a > b else b, [14, 88, 23, 95, 42])
print("Max Value:", max_val) # 95
\`\`\``}]}],p={paperId:n,title:s,duration:t,totalMarks:r,prerequisites:o,instructions:i,sections:m},l={name:"Coder & AccoTax",address:"Barrackpore, Kolkata",logo:"/logo.png"};function h(){return e.jsx("div",{className:"container mx-auto py-8",children:e.jsx(a,{data:p,isLoggedIn:!0,organizationDetails:l})})}export{h as default};
