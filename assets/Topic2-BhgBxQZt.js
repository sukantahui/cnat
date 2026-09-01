import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{P as a}from"./PythonQuestionPaperTemplate-B5KJCulR.js";import"./PrintButton-BGrBfOtS.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const e="PY-FUNC-TOPIC2-VARARGS",r="Topic 2: Variable-Length Arguments (*args & **kwargs) Assessment",t="45 Mins",s=25,o="*args tuple packing, **kwargs dictionary packing, argument unpacking",i=["Answer all questions with code examples","Trace tuple and dictionary unpacking patterns","Assume Python 3.10+"],u=[{section:"A",type:"Short Conceptual Questions",marksPerQuestion:2,totalQuestions:5,description:"Varargs theory and syntax (2 Marks each)",questions:[{q:"What data structure does *args collect extra arguments into?",marks:2,answer:"`*args` packs any number of extra positional arguments into an immutable **tuple**.\n\n```python\ndef demo(*args):\n    print(type(args)) # <class 'tuple'>\n```"},{q:"What data structure does **kwargs collect extra arguments into?",marks:2,answer:"`**kwargs` packs any number of extra keyword arguments into a mutable **dictionary**.\n\n```python\ndef demo(**kwargs):\n    print(type(kwargs)) # <class 'dict'>\n```"},{q:"What is the mandatory ordering of parameters when mixing standard, *args, and **kwargs?",marks:2,answer:"Standard Positional → `*args` (varargs) → Keyword-Only Parameters → `**kwargs` (keyword varargs).\n\n```python\ndef handler(req_id, *flags, timeout=30, **headers):\n    pass\n```"},{q:"What is argument unpacking using '*' and '**' at function call sites?",marks:2,answer:"`*iterable` unpacks sequence elements as positional arguments; `**dict` unpacks key-value pairs as keyword arguments.\n\n```python\nnums = [10, 20, 30]\nprint(*nums) # Unpacks to print(10, 20, 30)\n```"},{q:"Can you use different names instead of *args and **kwargs?",marks:2,answer:"Yes, `*` and `**` are the actual operators. While `*args` and `**kwargs` are universal PEP 8 conventions, `*values` and `**options` are syntactically valid."}]},{section:"B",type:"Descriptive & Code Tracing",marksPerQuestion:5,totalQuestions:3,description:"Variadic function engineering (5 Marks each)",questions:[{q:"Write a variadic mathematical aggregator function that accepts any count of numbers and optional operation keywords ('sum', 'mean', 'product').",marks:5,answer:`\`\`\`python
def aggregate_numbers(*numbers, op="sum", round_digits=2):
    if not numbers:
        return 0.0
    
    if op == "sum":
        res = sum(numbers)
    elif op == "mean":
        res = sum(numbers) / len(numbers)
    elif op == "product":
        res = 1
        for n in numbers: res *= n
    else:
        raise ValueError(f"Unsupported operation: {op}")
    
    return round(res, round_digits)

print(aggregate_numbers(10, 20, 30, 40, op="mean"))     # 25.0
print(aggregate_numbers(2, 3, 4, 5, op="product"))       # 120
\`\`\``},{q:"Explain how wrapper / decorator functions use *args and **kwargs for universal argument forwarding.",marks:5,answer:`\`\`\`python
def audit_logger(func):
    def wrapper(*args, **kwargs):
        print(f"[AUDIT] Calling {func.__name__} with args={args}, kwargs={kwargs}")
        result = func(*args, **kwargs) # Perfect forwarding!
        print(f"[AUDIT] {func.__name__} returned {result}")
        return result
    return wrapper

@audit_logger
def generate_bill(customer, items_count, discount=0.0):
    return f"Bill for {customer}: {items_count} items with {discount*100}% off"

generate_bill("Susmita", 5, discount=0.10)
\`\`\``},{q:"Demonstrate dictionary merging and configuration overriding using **kwargs and unpacking.",marks:5,answer:`\`\`\`python
def create_database_client(host="localhost", port=5432, **custom_options):
    default_config = {
        "host": host,
        "port": port,
        "ssl": True,
        "timeout": 30
    }
    # Override defaults with caller's custom kwargs
    final_config = {**default_config, **custom_options}
    return final_config

client = create_database_client(host="db.jadavpur.edu", timeout=60, pool_size=10)
print(client)
# {'host': 'db.jadavpur.edu', 'port': 5432, 'ssl': True, 'timeout': 60, 'pool_size': 10}
\`\`\``}]}],c={paperId:e,title:r,duration:t,totalMarks:s,prerequisites:o,instructions:i,sections:u},p={name:"Coder & AccoTax",address:"Barrackpore, Kolkata",logo:"/logo.png"};function k(){return n.jsx("div",{className:"container mx-auto py-8",children:n.jsx(a,{data:c,isLoggedIn:!0,organizationDetails:p})})}export{k as default};
