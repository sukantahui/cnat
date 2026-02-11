import{r as l,j as e}from"./index-D1bhWpF_.js";import{c as t}from"./clsx-B-dksMZM.js";import{S as r}from"./ShellFileLoader-izSp1ZwA.js";import"./prism-B_z3Scul.js";const p=`# WRONG: Only print statement is conditional
if (condition)
    print "True"
    process_data()  # ALWAYS executes!

# CORRECT: Use braces
if (condition) {
    print "True"
    process_data()
}`,u=`if (condition) {
    # Code if true
    statement1;
    statement2;
} else if (another_condition) {
    # Alternative condition
    statement3;
} else {
    # Default case
    statement4;
}`,j=`# Compact if-else
result = (condition) ? value_if_true : value_if_false;

# Example: Grade classification
grade = ($3 >= 90) ? "A" : 
        ($3 >= 80) ? "B" : 
        ($3 >= 70) ? "C" : "D";`,b=`# Multi-way branching
switch (expression) {
    case value1:
        # Code for value1
        break;
    case value2:
    case value3:
        # Code for value2 or value3
        break;
    default:
        # Default code
}

# Example: Department codes
switch ($5) {
    case "CS":
        dept = "Computer Science";
        break;
    case "MA":
        dept = "Mathematics";
        break;
    case "PH":
        dept = "Physics";
        break;
    default:
        dept = "General";
}`,N=`awk -F',' '{
    # Calculate average of 5 subjects
    total = $2 + $3 + $4 + $5 + $6
    avg = total / 5
    
    # Multi-level grade classification
    if (avg >= 90) {
        grade = "A+"
        category = "Excellent"
    } else if (avg >= 80) {
        grade = "A"
        category = "Very Good"
    } else if (avg >= 70) {
        grade = "B+"
        category = "Good"
    } else if (avg >= 60) {
        grade = "B"
        category = "Above Average"
    } else if (avg >= 50) {
        grade = "C"
        category = "Average"
    } else if (avg >= 40) {
        grade = "D"
        category = "Below Average"
    } else {
        grade = "F"
        category = "Fail"
    }
    
    # Additional conditions
    if ($2 < 40 || $3 < 40 || $4 < 40 || $5 < 40 || $6 < 40) {
        grade = "F"
        category = "Fail in one or more subjects"
    }
    
    print $1, "Average:", avg, "Grade:", grade, "Category:", category
}' students.txt`,k=`#!/usr/bin/awk -f
# Professional awk script with conditionals and loops

BEGIN {
    FS = ","
    OFS = "|"

    # Initialize counters
    excellent = 0
    good = 0
    average_count = 0
    poor = 0
    failures = 0

    print "Student Analysis Report"
    print "======================="
}

# Main processing
{
    # Validate record
    if (NF < 5) {
        printf "ERROR: Record %d has only %d fields\\n", NR, NF >> "/dev/stderr"
        next
    }

    total = 0
    subject_count = 0

    # Process subject columns (fields 2–5)
    for (i = 2; i <= 5; i++) {
        if ($i >= 0 && $i <= 100) {
            total += $i
            subject_count++
        } else {
            printf "WARNING: Invalid mark %s for %s\\n", $i, $1 >> "/dev/stderr"
        }
    }

    # Skip if no valid marks
    if (subject_count == 0) {
        next
    }

    average_mark = total / subject_count

    # Grading logic
    if (average_mark >= 90) {
        grade = "A+"
        excellent++
        comment = "Outstanding!"
    } else if (average_mark >= 80) {
        grade = "A"
        good++
        comment = "Very Good"
    } else if (average_mark >= 70) {
        grade = "B+"
        average_count++
        comment = "Good"
    } else if (average_mark >= 60) {
        grade = "B"
        average_count++
        comment = "Above Average"
    } else if (average_mark >= 50) {
        grade = "C"
        poor++
        comment = "Needs Improvement"
    } else {
        grade = "F"
        failures++
        comment = "Failed - Requires attention"
    }

    # Output result
    printf "%-20s %6.2f %-4s %-20s\\n", $1, average_mark, grade, comment
}

END {
    print "\\n======================="
    print "SUMMARY STATISTICS"
    print "======================="
    printf "Excellent (A+): %d\\n", excellent
    printf "Good (A): %d\\n", good
    printf "Average (B): %d\\n", average_count
    printf "Poor (C): %d\\n", poor
    printf "Failures (F): %d\\n", failures
    printf "Total Students: %d\\n", NR
}
`,S=()=>{const[x,o]=l.useState(null),[a,d]=l.useState("if"),[s,m]=l.useState(0),[c,i]=l.useState(null),h=new Date().getFullYear()-1998,g=["Initialization","Condition Check","Execute Body","Update/Increment","Condition Check","Exit Loop"];return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 px-4 py-8 transition-colors duration-500",children:[e.jsx("style",{children:`
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
        
        @keyframes decisionFlow {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100px);
            opacity: 0;
          }
        }
        
        @keyframes loopPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        @keyframes codeExecution {
          0% {
            background-color: rgba(59, 130, 246, 0);
          }
          50% {
            background-color: rgba(59, 130, 246, 0.3);
          }
          100% {
            background-color: rgba(59, 130, 246, 0);
          }
        }
        
        @keyframes branchFlow {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}),e.jsx("header",{className:"max-w-6xl mx-auto mb-12",children:e.jsxs("div",{className:"animate-[fadeInUp_0.8s_ease-out] motion-safe:animate-[fadeInUp_0.8s_ease-out]",children:[e.jsx("span",{className:"inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-semibold mb-4",children:"Topic 12: awk Programming"}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 leading-tight",children:e.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-400 dark:to-pink-400",children:"Conditional Logic and Loops in awk"})}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl",children:"Master decision-making and repetition in awk to create sophisticated data processing scripts."})]})}),e.jsxs("main",{className:"max-w-6xl mx-auto",children:[e.jsx("section",{className:"mb-12",children:e.jsx("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.1s_both] motion-safe:animate-[fadeInUp_0.8s_ease-out_0.1s_both]",children:e.jsxs("div",{className:t("bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-all duration-500",x==="intro"?"shadow-2xl shadow-indigo-500/20 dark:shadow-indigo-500/10 -translate-y-1":"hover:shadow-xl"),onMouseEnter:()=>o("intro"),onMouseLeave:()=>o(null),children:[e.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[e.jsx("div",{className:"p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl",children:e.jsx("svg",{className:"w-8 h-8 text-indigo-600 dark:text-indigo-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Programmatic Power in awk"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed",children:"awk isn't just for one-liners - it's a full programming language with C-style conditionals and loops. These constructs transform awk from a simple filter into a powerful data processing engine."})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-lg mb-3 text-indigo-600 dark:text-indigo-400",children:"Conditional Statements"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-indigo-500 rounded-full"}),e.jsx("code",{children:"if-else"})," - Decision making"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-indigo-500 rounded-full"}),e.jsx("code",{children:"?:"})," - Ternary operator"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-indigo-500 rounded-full"}),e.jsx("code",{children:"switch"})," - Multi-way branching"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-lg mb-3 text-pink-600 dark:text-pink-400",children:"Looping Constructs"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-pink-500 rounded-full"}),e.jsx("code",{children:"for"})," - Counter-based iteration"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-pink-500 rounded-full"}),e.jsx("code",{children:"while"})," - Condition-based iteration"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-pink-500 rounded-full"}),e.jsx("code",{children:"do-while"})," - Execute then check"]})]})]})]})]})})}),e.jsx("section",{className:"mb-12",children:e.jsxs("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.2s_both] motion-safe:animate-[fadeInUp_0.8s_ease-out_0.2s_both]",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:"Decision Making in awk"}),e.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("h3",{className:"text-xl font-bold text-green-600 dark:text-green-400",children:"if-else Statement Flow"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{className:t("px-3 py-1 text-sm rounded-full transition-all",a==="if"?"bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400":"bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400"),onClick:()=>d("if"),children:"if-else"}),e.jsx("button",{className:t("px-3 py-1 text-sm rounded-full transition-all",a==="ternary"?"bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400":"bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400"),onClick:()=>d("ternary"),children:"Ternary"})]})]}),e.jsx("div",{className:"relative h-64 mb-6",children:e.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 400 250",className:"overflow-visible",children:[e.jsxs("g",{transform:"translate(150, 20)",onMouseEnter:()=>d("if"),children:[e.jsx("polygon",{points:"0,-30 30,0 0,30 -30,0",fill:"#10b981",stroke:"#059669",strokeWidth:"2",className:"transition-all duration-300 hover:fill-emerald-500"}),e.jsx("text",{x:"0",y:"0",textAnchor:"middle",fill:"white",fontSize:"12",dy:".3em",children:"Condition"}),e.jsx("text",{x:"0",y:"15",textAnchor:"middle",fill:"#a7f3d0",fontSize:"10",dy:".3em",children:"$3 > 75"}),e.jsx("circle",{cx:"0",cy:"0",r:"4",fill:"#f59e0b",children:e.jsx("animate",{attributeName:"r",values:"4;8;4",dur:"2s",repeatCount:"indefinite"})})]}),e.jsxs("g",{transform:"translate(250, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"100",height:"40",rx:"8",fill:"#3b82f6"}),e.jsx("text",{x:"50",y:"20",textAnchor:"middle",fill:"white",fontSize:"12",dy:".3em",children:"True Block"}),e.jsx("text",{x:"50",y:"32",textAnchor:"middle",fill:"#dbeafe",fontSize:"9",dy:".3em",children:'print "Pass"'}),e.jsx("path",{d:"M170,60 Q200,60 200,80 T230,100",fill:"none",stroke:"#10b981",strokeWidth:"3",strokeDasharray:a==="if"?"0":"5,5",className:"transition-all duration-500",children:a==="if"&&e.jsx("animate",{attributeName:"stroke-dashoffset",values:"100;0",dur:"3s",repeatCount:"indefinite"})})]}),e.jsxs("g",{transform:"translate(50, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"100",height:"40",rx:"8",fill:"#ef4444"}),e.jsx("text",{x:"50",y:"20",textAnchor:"middle",fill:"white",fontSize:"12",dy:".3em",children:"False Block"}),e.jsx("text",{x:"50",y:"32",textAnchor:"middle",fill:"#fee2e2",fontSize:"9",dy:".3em",children:'print "Fail"'}),e.jsx("path",{d:"M130,60 Q100,60 100,80 T70,100",fill:"none",stroke:"#ef4444",strokeWidth:"3",strokeDasharray:a==="if"?"0":"5,5",className:"transition-all duration-500",children:a==="if"&&e.jsx("animate",{attributeName:"stroke-dashoffset",values:"100;0",dur:"3s",repeatCount:"indefinite",begin:"1.5s"})})]}),e.jsxs("g",{transform:"translate(150, 180)",children:[e.jsx("circle",{cx:"0",cy:"0",r:"30",fill:"#6b7280"}),e.jsx("text",{x:"0",y:"0",textAnchor:"middle",fill:"white",fontSize:"12",dy:".3em",children:"Continue"}),e.jsx("path",{d:"M180,100 L180,150",stroke:"#6b7280",strokeWidth:"2",fill:"none"}),e.jsx("path",{d:"M120,100 L120,150",stroke:"#6b7280",strokeWidth:"2",fill:"none"})]}),a==="if"&&e.jsxs("circle",{cx:"150",cy:"-10",r:"6",fill:"#f59e0b",children:[e.jsx("animate",{attributeName:"cy",values:"-10;200",dur:"3s",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"cx",values:"150;250;150",dur:"3s",repeatCount:"indefinite",keyTimes:"0;0.3;1"})]})]})}),e.jsx("div",{className:"space-y-4",children:a==="if"?e.jsxs(e.Fragment,{children:[e.jsx("h4",{className:"font-semibold text-green-600 dark:text-green-400",children:"if-else Syntax:"}),e.jsx("div",{className:"bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:e.jsx(r,{fileModule:u,title:"Forgetting braces for multi-statement blocks",highlightLines:[]})})]}):e.jsxs(e.Fragment,{children:[e.jsx("h4",{className:"font-semibold text-blue-600 dark:text-blue-400",children:"Ternary Operator:"}),e.jsx("div",{className:"bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm",children:e.jsx(r,{fileModule:j,title:"Forgetting braces for multi-statement blocks",highlightLines:[]})})]})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-purple-600 dark:text-purple-400",children:"switch Statement"}),e.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm",children:e.jsx(r,{fileModule:b,title:"Switch Eeample",highlightLines:[]})})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",children:[e.jsx("h3",{className:"text-xl font-bold mb-6 text-center text-pink-600 dark:text-pink-400",children:"Loop Execution Flow"}),e.jsxs("div",{className:"mb-6",children:[e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsx("h4",{className:"font-semibold",children:"Loop Steps:"}),e.jsx("button",{className:"px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-sm",onClick:()=>m((s+1)%6),children:"Next Step →"})]}),e.jsx("div",{className:"grid grid-cols-3 gap-2 mb-6",children:g.map((f,n)=>e.jsxs("div",{className:t("p-3 rounded-lg text-center transition-all duration-300",s===n?"bg-pink-100 dark:bg-pink-900/30 border-2 border-pink-500":n<s?"bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800":"bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"),children:[e.jsx("div",{className:t("w-6 h-6 rounded-full mx-auto mb-2 flex items-center justify-center text-xs font-bold",s===n?"bg-pink-500 text-white animate-[loopPulse_1s_ease-in-out_infinite]":n<s?"bg-green-500 text-white":"bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400"),children:n+1}),e.jsx("div",{className:"text-xs",children:f})]},n))})]}),e.jsx("div",{className:"relative h-64",children:e.jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 400 250",className:"overflow-visible",children:e.jsxs("g",{transform:"translate(100, 30)",children:[e.jsxs("g",{transform:"translate(100, 0)",className:t(s>=0&&"animate-[codeExecution_1s_ease-in-out]"),children:[e.jsx("rect",{x:"0",y:"0",width:"100",height:"30",rx:"6",fill:"#3b82f6"}),e.jsx("text",{x:"50",y:"15",textAnchor:"middle",fill:"white",fontSize:"11",dy:".3em",children:"i = 1"})]}),e.jsxs("g",{transform:"translate(100, 50)",className:t(s>=1&&"animate-[codeExecution_1s_ease-in-out]"),children:[e.jsx("polygon",{points:"0,-15 15,0 0,15 -15,0",fill:"#10b981",stroke:"#059669",strokeWidth:"2"}),e.jsx("text",{x:"0",y:"0",textAnchor:"middle",fill:"white",fontSize:"10",dy:".3em",children:"i <= 5"})]}),e.jsxs("g",{transform:"translate(100, 100)",className:t(s>=2&&"animate-[codeExecution_1s_ease-in-out]"),children:[e.jsx("rect",{x:"0",y:"0",width:"120",height:"40",rx:"8",fill:"#8b5cf6"}),e.jsx("text",{x:"60",y:"20",textAnchor:"middle",fill:"white",fontSize:"11",dy:".3em",children:"Process $i"})]}),e.jsxs("g",{transform:"translate(100, 160)",className:t(s>=3&&"animate-[codeExecution_1s_ease-in-out]"),children:[e.jsx("rect",{x:"0",y:"0",width:"100",height:"30",rx:"6",fill:"#f59e0b"}),e.jsx("text",{x:"50",y:"15",textAnchor:"middle",fill:"white",fontSize:"11",dy:".3em",children:"i++"})]}),e.jsx("path",{d:"M160,140 Q200,140 200,80 T160,50",fill:"none",stroke:"#8b5cf6",strokeWidth:"2",strokeDasharray:"5,5"}),e.jsx("path",{d:"M40,50 Q0,50 0,200 T40,190",fill:"none",stroke:"#ef4444",strokeWidth:"2",strokeDasharray:"5,5"}),e.jsxs("g",{transform:"translate(0, 190)",className:t(s>=5&&"animate-[codeExecution_1s_ease-in-out]"),children:[e.jsx("rect",{x:"0",y:"0",width:"80",height:"30",rx:"6",fill:"#059669"}),e.jsx("text",{x:"40",y:"15",textAnchor:"middle",fill:"white",fontSize:"11",dy:".3em",children:"Exit Loop"})]}),e.jsxs("g",{transform:"translate(220, 20)",children:[e.jsx("rect",{x:"0",y:"0",width:"60",height:"30",rx:"6",fill:"#374151"}),e.jsxs("text",{x:"30",y:"15",textAnchor:"middle",fill:"white",fontSize:"11",dy:".3em",children:["i = ",s<5?Math.floor(s/2)+1:6]})]})]})})}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-semibold mb-3 text-pink-600 dark:text-pink-400",children:"Loop Types in awk:"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-sm mb-1",children:"for loop"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-2 rounded text-xs",children:`for (i=1; i<=NF; i++)
    print $i`})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-sm mb-1",children:"while loop"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-2 rounded text-xs",children:`i = 1
while (i <= NF) {
    print $i
    i++
}`})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-sm mb-1",children:"do-while"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-2 rounded text-xs",children:`i = 1
do {
    print $i
    i++
} while (i <= NF)`})]})]})]})]})]})]})}),e.jsx("section",{className:"mb-12",children:e.jsxs("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.3s_both] motion-safe:animate-[fadeInUp_0.8s_ease-out_0.3s_both]",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8",children:"Practical Applications at CNAT Centers"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:t("bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-500",c==="grades"?"shadow-xl shadow-blue-500/20 -translate-y-1":"hover:shadow-xl"),onMouseEnter:()=>i("grades"),onMouseLeave:()=>i(null),children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg",children:e.jsx("svg",{className:"w-6 h-6 text-blue-600 dark:text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})}),e.jsx("h3",{className:"text-xl font-bold",children:"Student Grade Classification"})]}),e.jsxs("p",{className:"mb-4 text-gray-600 dark:text-gray-300",children:["Processing marks for ",e.jsx("strong",{children:"Swadeep"}),", ",e.jsx("strong",{children:"Tuhina"}),", and ",e.jsx("strong",{children:"Abhronila"}),"at ",e.jsx("strong",{children:"CNAT Barrackpore"})," with complex grading rules."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2 text-sm text-gray-500 dark:text-gray-400",children:"Complex if-else Ladder:"}),e.jsx("div",{className:"bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs",children:e.jsx(r,{fileModule:N,title:"if else ladder",highlightLines:[]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2 text-sm text-gray-500 dark:text-gray-400",children:"Using switch for Performance:"}),e.jsx("pre",{className:"bg-blue-900/30 text-blue-100 p-3 rounded-lg overflow-x-auto text-xs",children:`# Convert numeric grade to letter grade using switch
switch(int(avg/10)) {
    case 10:
    case 9:
        letter = "A";
        break;
    case 8:
        letter = "B";
        break;
    case 7:
        letter = "C";
        break;
    case 6:
        letter = "D";
        break;
    default:
        letter = "F";
}`})]})]})]}),e.jsxs("div",{className:t("bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-500",c==="processing"?"shadow-xl shadow-green-500/20 -translate-y-1":"hover:shadow-xl"),onMouseEnter:()=>i("processing"),onMouseLeave:()=>i(null),children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"p-2 bg-green-100 dark:bg-green-900/30 rounded-lg",children:e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})}),e.jsx("h3",{className:"text-xl font-bold",children:"Advanced Data Processing"})]}),e.jsxs("p",{className:"mb-4 text-gray-600 dark:text-gray-300",children:["Processing complex student records from ",e.jsx("strong",{children:"CNAT Naihati"})," with nested loops and conditions."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2 text-sm text-gray-500 dark:text-gray-400",children:"Field Processing with for loop:"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs",children:`# Process all fields in each record
awk '{
    print "Processing record", NR
    print "Number of fields:", NF
    
    # Loop through all fields
    for (i = 1; i <= NF; i++) {
        printf "Field %d: %s\\n", i, $i
        
        # Nested condition within loop
        if ($i ~ /^[0-9]+$/) {
            printf "  -> Numeric field, value: %d\\n", $i
            
            # Further nested logic
            if ($i > 90) {
                print "  -> Excellent score!"
            }
        }
    }
    
    print "--- End of record ---\\n"
}' data.txt`})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2 text-sm text-gray-500 dark:text-gray-400",children:"while with break/continue:"}),e.jsx("pre",{className:"bg-green-900/30 text-green-100 p-3 rounded-lg overflow-x-auto text-xs",children:`# Process until certain condition
awk '{
    i = 1
    total = 0
    count = 0
    
    while (i <= NF) {
        # Skip non-numeric fields
        if ($i !~ /^[0-9]+$/) {
            i++
            continue  # Skip to next iteration
        }
        
        # Stop if we find a negative number
        if ($i < 0) {
            print "Found negative number at field", i
            break  # Exit loop immediately
        }
        
        total += $i
        count++
        i++
    }
    
    if (count > 0) {
        print "Average of numeric fields:", total/count
    }
}' records.txt`})]})]})]})]})]})}),e.jsx("section",{className:"mb-12",children:e.jsxs("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.4s_both] motion-safe:animate-[fadeInUp_0.8s_ease-out_0.4s_both]",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8",children:"Control Flow Statements"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",children:[e.jsx("div",{className:"text-red-500 mb-4",children:e.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})}),e.jsx("h3",{className:"font-bold text-lg mb-3",children:"break Statement"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-3",children:"Immediately exits the innermost loop. Useful for stopping processing when a condition is met."}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-2 rounded text-xs",children:`for (i=1; i<=NF; i++) {
    if ($i == "STOP") {
        break  # Exit loop
    }
    print $i
}`})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",children:[e.jsx("div",{className:"text-yellow-500 mb-4",children:e.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",clipRule:"evenodd"})})}),e.jsx("h3",{className:"font-bold text-lg mb-3",children:"continue Statement"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-3",children:"Skips the rest of the current loop iteration and moves to the next one."}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-2 rounded text-xs",children:`for (i=1; i<=NF; i++) {
    if ($i == "") {
        continue  # Skip empty fields
    }
    process($i)
}`})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",children:[e.jsx("div",{className:"text-purple-500 mb-4",children:e.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z",clipRule:"evenodd"})})}),e.jsx("h3",{className:"font-bold text-lg mb-3",children:"exit Statement"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-3",children:"Immediately stops awk execution. Can return an exit code to the shell."}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-2 rounded text-xs",children:`if (NF < 5) {
    print "Error: Insufficient fields"
    exit 1  # Exit with error code
}
# Normal processing...`})]})]})]})}),e.jsx("section",{className:"mb-12",children:e.jsx("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.5s_both] motion-safe:animate-[fadeInUp_0.8s_ease-out_0.5s_both]",children:e.jsxs("div",{className:"bg-gradient-to-r from-red-500/10 to-orange-500/10 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-8",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx("div",{className:"p-3 bg-red-100 dark:bg-red-900/30 rounded-xl",children:e.jsx("svg",{className:"w-8 h-8 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.342 16.5c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsx("h2",{className:"text-2xl font-bold",children:"Common Logic Errors in awk"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-600 dark:text-red-400 mb-2",children:"Missing Braces"}),e.jsx("p",{className:"text-sm",children:"Forgetting braces for multi-statement blocks causes only the first statement to be conditional."}),e.jsx("div",{className:"bg-red-900/30 text-red-100 p-2 rounded mt-2 text-xs",children:e.jsx(r,{fileModule:p,title:"Forgetting braces for multi-statement blocks",highlightLines:[]})})]}),e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-600 dark:text-red-400 mb-2",children:"Infinite Loops"}),e.jsxs("p",{className:"text-sm",children:["Forgetting to update loop counter or using wrong condition. At ",e.jsx("strong",{children:"CNAT Shyamnagar"}),", a student's script ran forever because ",e.jsxs("code",{children:["while (","i <= NF",")"]})," had no ",e.jsx("code",{children:"i++"}),"."]}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-2 rounded mt-2 text-xs",children:`# INFINITE LOOP:
i = 1
while (i <= NF) {
    print $i
    # Missing: i++
}`})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-600 dark:text-red-400 mb-2",children:"Wrong Comparison Operators"}),e.jsxs("p",{className:"text-sm",children:["Using ",e.jsx("code",{children:"="})," (assignment) instead of ",e.jsx("code",{children:"=="})," (comparison). This changes variable values unexpectedly."]}),e.jsx("pre",{className:"bg-red-900/30 text-red-100 p-2 rounded mt-2 text-xs",children:`# WRONG: Assigns 5 to x, always true
if (x = 5) { ... }

# CORRECT: Compares x with 5
if (x == 5) { ... }`})]}),e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-600 dark:text-red-400 mb-2",children:"Off-by-One Errors"}),e.jsxs("p",{className:"text-sm",children:["Starting loops at 0 instead of 1 for fields, or using ",e.jsx("code",{children:"<="})," when ",e.jsx("code",{children:"<"})," is correct."]}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-2 rounded mt-2 text-xs",children:`# WRONG: $0 is entire record, not first field
for (i=0; i<NF; i++) print $i

# CORRECT: Fields start at 1
for (i=1; i<=NF; i++) print $i`})]})]})]})]})})}),e.jsx("section",{className:"mb-12",children:e.jsxs("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.6s_both] motion-safe:animate-[fadeInUp_0.8s_ease-out_0.6s_both]",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8",children:"Professional awk Programming Practices"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",children:[e.jsx("h3",{className:"font-bold text-lg mb-4 text-green-600 dark:text-green-400",children:"✓ Code Organization"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsxs("span",{children:["Always use braces ",e.jsx("code",{})," even for single statements"]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"Indent nested blocks consistently (2 or 4 spaces)"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"Comment complex logic, especially nested loops"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",children:[e.jsx("h3",{className:"font-bold text-lg mb-4 text-blue-600 dark:text-blue-400",children:"✓ Performance & Safety"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-blue-500 mt-1",children:"•"}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"next"})," statement to skip unnecessary processing early"]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-blue-500 mt-1",children:"•"}),e.jsx("span",{children:"Avoid deep nesting - refactor into functions if needed"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-blue-500 mt-1",children:"•"}),e.jsx("span",{children:"Initialize loop counters before use, validate bounds"})]})]})]})]}),e.jsxs("div",{className:"mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"font-bold text-lg mb-4 text-indigo-600 dark:text-indigo-400",children:"Professional Pattern: Complex Data Processing"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm",children:e.jsx(r,{fileModule:k,title:"Complex Data Processing",highlightLines:[]})})]})]})}),e.jsx("section",{className:"mb-12",children:e.jsx("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.7s_both] motion-safe:animate-[fadeInUp_0.8s_ease-out_0.7s_both]",children:e.jsxs("div",{className:"bg-gradient-to-r from-green-500/10 to-emerald-500/10 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"What Students Should Remember"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-lg mb-4 text-green-600 dark:text-green-400",children:"✓ Conditionals"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mt-0.5",children:"1"}),e.jsxs("span",{children:["Always use braces ",e.jsx("code",{})," for multi-statement blocks"]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mt-0.5",children:"2"}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"=="})," for comparison, not ",e.jsx("code",{children:"="})," (assignment)"]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mt-0.5",children:"3"}),e.jsxs("span",{children:[e.jsx("code",{children:"switch"})," is efficient for multiple exact matches"]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-lg mb-4 text-emerald-600 dark:text-emerald-400",children:"✓ Loops"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm mt-0.5",children:"4"}),e.jsxs("span",{children:["Fields start at 1: ",e.jsx("code",{children:"for (i=1; i<=NF; i++)"})]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm mt-0.5",children:"5"}),e.jsx("span",{children:"Always update loop counters to avoid infinite loops"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm mt-0.5",children:"6"}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"break"})," to exit, ",e.jsx("code",{children:"continue"})," to skip iterations"]})]})]})]})]})]})})}),e.jsx("section",{className:"mb-12",children:e.jsx("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.8s_both] motion-safe:animate-[fadeInUp_0.8s_ease-out_0.8s_both]",children:e.jsx("div",{className:"bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-start gap-6",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center",children:e.jsx("span",{className:"text-white text-2xl font-bold",children:"SH"})})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("svg",{className:"w-6 h-6 text-blue-600 dark:text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})}),e.jsx("h2",{className:"text-2xl font-bold",children:"Teacher's Note"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"font-bold text-lg mb-2",children:"Teaching Programming Thinking in awk"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4 leading-relaxed",children:["At ",e.jsx("strong",{children:"CNAT Ichapur"}),`, I emphasize that awk's conditionals and loops are where students transition from "command users" to "programmers." When `,e.jsx("strong",{children:"Debangshu"}),"learns to use ",e.jsx("code",{children:"if-else"})," for student classification, he's learning algorithmic thinking."]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-bold text-blue-700 dark:text-blue-300 mb-2",children:"Teaching Strategy:"}),e.jsxs("p",{className:"text-sm",children:["Start with simple ",e.jsx("code",{children:"if"})," statements on single fields, progress to ",e.jsx("code",{children:"if-else"})," ladders for grading, then introduce loops for processing all fields. Always trace execution on paper first - have students predict what ",e.jsx("code",{children:"for (i=1; i<=NF; i++) print $i"})," will do before running it."]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Sukanta Hui"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"sukantahui@codernaccotax.co.in"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:[h," years experience"]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold mb-1",children:"Expertise:"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Programming Languages, RDBMS, Operating Systems, Web Development"})]})]})]})]})})})}),e.jsx("section",{children:e.jsx("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.9s_both] motion-safe:animate-[fadeInUp_0.8s_ease-out_0.9s_both]",children:e.jsxs("div",{className:"bg-gradient-to-r from-yellow-500/10 to-amber-500/10 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-2xl p-8",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx("div",{className:"p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl",children:e.jsx("svg",{className:"w-8 h-8 text-yellow-600 dark:text-yellow-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h1m0 0h-1m1 0v4m0 0l2 2m-2-2l-2 2M9 7h6m4 0a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h2m4 0V5a1 1 0 00-1-1H8a1 1 0 00-1 1v2h6z"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Think About This..."}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Developing algorithmic thinking"})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-amber-600 dark:text-amber-400 mb-2",children:"Observe Carefully:"}),e.jsxs("p",{className:"text-sm",children:["What's the difference between ",e.jsx("code",{children:"while (i <= NF)</code> and <code>do { ... } while (i <= NF)"}),"? Try both with ",e.jsx("strong",{children:"Tuhina"}),"'s student record when ",e.jsx("code",{children:"i"})," starts at ",e.jsx("code",{children:"NF + 1"}),"."]})]}),e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-amber-600 dark:text-amber-400 mb-2",children:"Try Changing This:"}),e.jsxs("p",{className:"text-sm",children:["Modify the grade classification to use a ",e.jsx("code",{children:"switch"})," statement instead of ",e.jsx("code",{children:"if-else"})," ladder. Which is more readable? Which is more efficient for many exact matches?"]})]})]}),e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-amber-600 dark:text-amber-400 mb-2",children:"Consider This Scenario:"}),e.jsxs("p",{className:"text-sm mb-3",children:["At ",e.jsx("strong",{children:"CNAT Barrackpore"}),", you need to process student marks where:"]}),e.jsxs("ul",{className:"text-sm space-y-1 mb-3",children:[e.jsx("li",{children:"• Each student has 6 subject marks (fields 2-7)"}),e.jsx("li",{children:"• You need to find the highest and lowest marks for each student"}),e.jsx("li",{children:"• Skip students with any mark below 40 (failures)"}),e.jsx("li",{children:"• Calculate average of remaining students"})]}),e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Challenge:"})," Write an awk script using loops and conditionals to process this data. Think about where to initialize variables, how to handle early exits, and how to structure nested logic."]})]})]})]})})})]}),e.jsx("footer",{className:"max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"text-center text-gray-500 dark:text-gray-400 text-sm",children:[e.jsx("p",{children:"Topic 12: Conditional Logic and Loops in awk • Next: Formatting Output Using awk printf"}),e.jsx("p",{className:"mt-2",children:"Interactive Learning System • Mastering awk Programming • Designed for CNAT Computer Centers"})]})})]})};export{S as default};
