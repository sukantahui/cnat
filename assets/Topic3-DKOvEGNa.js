import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{P as e}from"./PythonQuestionPaperTemplate-BZ334aPN.js";import"./PrintButton-CzwhZypc.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const t="PY-FUNC-TOPIC3-RETURNS",a="Topic 3: Return Values, NoneType Handling & Tuple Unpacking Assessment",i="45 Mins",s=25,r="Return statement, None semantics, multiple return values, tuple unpacking",o=["Answer all questions systematically","Show tuple unpacking syntax and early return guard clauses","Assume Python 3.10+"],l=[{section:"A",type:"Short Conceptual Questions",marksPerQuestion:2,totalQuestions:5,description:"Return mechanics & semantics (2 Marks each)",questions:[{q:"How does Python return multiple values from a single function?",marks:2,answer:"When multiple comma-separated values are listed in a `return` statement (`return a, b`), Python automatically packs them into a single **tuple**."},{q:"What is tuple unpacking at the call site?",marks:2,answer:"Assigning the returned tuple to multiple distinct variables in a single line:\n\n```python\nmin_val, max_val = find_extrema([10, 5, 20, 8])\n```"},{q:"What is the difference between 'return' and 'return None'?",marks:2,answer:"They are functionally identical. Both immediately terminate function execution and return `None` to the caller."},{q:"What is an Early Return / Guard Clause pattern?",marks:2,answer:"Returning immediately upon encountering invalid input or base conditions to avoid deeply nested `if/else` ladders.\n\n```python\ndef get_user(user_id):\n    if user_id <= 0: return None # Guard clause\n    # Main logic...\n```"},{q:"Why is 'if result is None:' preferred over 'if result == None:'?",marks:2,answer:"`None` is a unique singleton in Python. The `is` operator tests object identity in memory directly, which is faster, safer, and recommended by PEP 8."}]},{section:"B",type:"Descriptive & Code Tracing",marksPerQuestion:5,totalQuestions:3,description:"In-depth return value architecture (5 Marks each)",questions:[{q:"Write a robust statistical summary function that returns minimum, maximum, mean, and median using tuple packing and unpacking.",marks:5,answer:`\`\`\`python
import statistics

def calculate_dataset_stats(data):
    if not data:
        return None, None, None, None
    
    min_val = min(data)
    max_val = max(data)
    mean_val = statistics.mean(data)
    median_val = statistics.median(data)
    
    return min_val, max_val, mean_val, median_val

# Unpacking results cleanly
scores = [78, 85, 92, 64, 89, 95]
lo, hi, avg, med = calculate_dataset_stats(scores)
print(f"Low: {lo}, High: {hi}, Mean: {avg:.2f}, Median: {med}")
\`\`\``},{q:"Explain how returning dictionaries or dataclasses provides self-documenting APIs compared to large tuple returns.",marks:5,answer:`Returning tuples with 5+ values leads to positional confusion. Returning a dictionary or dataclass provides named keys:

\`\`\`python
def get_student_report(name, marks):
    return {
        "name": name,
        "total": sum(marks),
        "average": sum(marks) / len(marks),
        "passed": all(m >= 40 for m in marks)
    }

report = get_student_report("Mamata", [85, 90, 78])
print(f"{report['name']} Average: {report['average']}")
\`\`\``},{q:"Trace and explain the execution flow of a function containing multiple conditional return paths.",marks:5,answer:`\`\`\`python
def classify_admission_tier(cgpa, entrance_rank):
    if cgpa >= 9.0 and entrance_rank <= 100:
        return "Merit Scholar - Tier 1"
    if cgpa >= 8.0 or entrance_rank <= 500:
        return "Standard Admission - Tier 2"
    return "Waitlist - Tier 3"

print(classify_admission_tier(9.2, 50))   # Merit Scholar - Tier 1
print(classify_admission_tier(7.5, 200))  # Standard Admission - Tier 2
print(classify_admission_tier(6.5, 800))  # Waitlist - Tier 3
\`\`\``}]}],u={paperId:t,title:a,duration:i,totalMarks:s,prerequisites:r,instructions:o,sections:l},c={name:"Coder & AccoTax",address:"Barrackpore, Kolkata",logo:"/logo.png"};function f(){return n.jsx("div",{className:"container mx-auto py-8",children:n.jsx(e,{data:u,isLoggedIn:!0,organizationDetails:c})})}export{f as default};
