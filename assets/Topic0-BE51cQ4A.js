import{j as e,b as o}from"./vendor-react-core-B-R9HE-Z.js";import{T as g}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as b}from"./FAQTemplate-16IfroqC.js";import{P as y}from"./PlainTextPrint-C6NaUtnE.js";import{a1 as m}from"./vendor-icons-C1Dcofhq.js";const w=[{id:1,question:"What must the expression inside the parentheses of an `if(...)` statement evaluate to in Java?",options:["boolean","int (0 or 1)","Any primitive type","void"],correctAnswer:0,explanation:"In Java, the test condition in an `if` statement MUST strictly evaluate to a `boolean` (`true` or `false`). Unlike C/C++, Java does not allow integer values like 0 or 1 as conditions.",explanationBn:"জাভায় `if` শর্তের মধ্যকার এক্সপ্রেশনটি অবশ্যই boolean মান (`true` বা `false`) হতে হবে। সি-এর মতো 0 বা 1 কে শর্ত হিসেবে গ্রহণ করা যায় না।",hint:"Only true or false is accepted."},{id:2,question:`What is the output of the following Java snippet?
int x = 5;
if (x > 10);
{
  System.out.println("Hello");
}`,options:["Hello","Nothing is printed","Compilation error","Runtime exception"],correctAnswer:0,explanation:'Because of the semicolon `;` immediately following `if (x > 10);`, the if statement terminates as an empty statement. The subsequent curly block `{ ... }` executes unconditionally, printing "Hello".',explanationBn:'`if (x > 10);` এর শেষে সেমিকোলন থাকায় শর্তটি ফাঁকা স্টেটমেন্ট হিসেবে শেষ হয়ে যায়। ফলে নিচের ব্লকটি নিঃশর্তভাবে চলে এবং "Hello" প্রিন্ট হয়।',hint:"Notice the semicolon after if."},{id:3,question:`What happens when compiling the code:
int a = 0;
if (a = 1) {
  System.out.println("True");
}`,options:["Compilation error: incompatible types (int cannot be converted to boolean)",'Prints "True"','Prints "False"',"Runtime exception"],correctAnswer:0,explanation:"`a = 1` is an assignment expression that evaluates to the integer `1`. Since `1` is an `int` and not a `boolean`, the Java compiler rejects it with an incompatible types error.",explanationBn:"`a = 1` হলো অ্যাসাইনমেন্ট যার মান ১। পূর্ণসংখ্যা ১ কে বুলিয়ানে পরিবর্তন করা যায় না বলে কম্পাইল এরর ঘটে।",hint:"= is assignment, not equality =="},{id:4,question:`What is the output of the following Java code?
boolean flag = false;
if (flag = true) {
  System.out.println("Yes");
} else {
  System.out.println("No");
}`,options:["Yes","No","Compilation error","false"],correctAnswer:0,explanation:'In `if (flag = true)`, the single `=` assigns `true` to `flag`. An assignment expression evaluates to the assigned value, which is `true`. Because the result is a boolean `true`, the `if` block executes, printing "Yes".',explanationBn:'`flag = true` অ্যাসাইনমেন্টে flag-এর মান true হয় এবং সামগ্রিক শর্তটি true রিটার্ন করে। তাই if ব্লক কার্যকর হয়ে "Yes" প্রিন্ট করে।',hint:"The assignment assigns true and returns true."},{id:5,question:"In an `if-else-if` ladder, what happens once one of the conditions evaluates to `true`?",options:["Its associated block executes, and all remaining conditions in the ladder are bypassed.","The program evaluates all subsequent conditions anyway.","The program resets the variable.","A compile-time warning is issued."],correctAnswer:0,explanation:"An `if-else-if` ladder is mutually exclusive. Once a condition evaluates to `true`, its block executes and control transfers immediately out of the entire ladder construct.",explanationBn:"`if-else-if` ল্যাডারে একটি শর্ত সত্য (true) হলে তার সংশ্লিষ্ট ব্লক চলে এবং বাকি সব শর্ত এড়িয়ে গিয়ে ল্যাডার থেকে বের হয়ে যায়।",hint:"First true condition wins and skips the rest."},{id:6,question:`What is the output of the following Java snippet?
int marks = 75;
if (marks >= 80) {
  System.out.print("A ");
} else if (marks >= 60) {
  System.out.print("B ");
} else if (marks >= 40) {
  System.out.print("C ");
} else {
  System.out.print("D ");
}`,options:["B ","B C D ","A B ","C "],correctAnswer:0,explanation:'`marks >= 80` (75 >= 80) is false. Next, `marks >= 60` (75 >= 60) is true! It prints "B " and bypasses all subsequent `else if` and `else` branches.',explanationBn:'৭৫ >= ৮০ মিথ্যা; কিন্তু ৭৫ >= ৬০ সত্য। তাই "B " প্রিন্ট হয় এবং পরবর্তী কোনো শাখা আর যাচাই করা হয় না।',hint:"75 is greater than 60."},{id:7,question:"What is the 'dangling else' problem in programming?",options:["Ambiguity regarding which preceding `if` an `else` clause belongs to when braces `{}` are omitted.","An else clause without any code inside.","An else statement appearing before an if statement.","A syntax error caused by too many else statements."],correctAnswer:0,explanation:"The dangling else problem occurs in nested if statements without explicit curly braces `{}`. In Java, an `else` is always paired with the closest preceding unmatched `if` within the same block.",explanationBn:"ড্যাংলিং এলস হলো নেস্টেড `if`-এ বন্ধনী না থাকলে `else` কোন `if`-এর সাথে যুক্ত হবে সেই বিভ্রান্তি। জাভায় `else` সবসময় নিকটতম পূর্ববর্তী `if`-এর সাথে যুক্ত হয়।",hint:"Else pairs with the closest preceding unmatched if."},{id:8,question:`What is the output of this code with nested conditionals?
int x = 10, y = 5;
if (x > 5)
  if (y > 10)
    System.out.print("One");
  else
    System.out.print("Two");`,options:["Two","One","OneTwo","Nothing is printed"],correctAnswer:0,explanation:'`x > 5` (10 > 5) is true, entering the inner if. The inner condition `y > 10` (5 > 10) is false, so its corresponding `else` executes, printing "Two".',explanationBn:'`x > 5` সত্য হওয়ায় ভেতরের if-এ প্রবেশ করে। `y > 10` মিথ্যা হওয়ায় এর সাথে যুক্ত `else` চলে এবং "Two" প্রিন্ট করে।',hint:"Inner if is false, its else runs."},{id:9,question:`What is the output of this code?
int x = 2, y = 5;
if (x > 5)
  if (y > 2)
    System.out.print("One");
  else
    System.out.print("Two");`,options:["Nothing is printed","Two","One","Compilation error"],correctAnswer:0,explanation:"`x > 5` (2 > 5) is false. Since the outer `if` condition is false, the entire inner `if-else` construct is bypassed. Nothing is printed.",explanationBn:"`x > 5` (২ > ৫) মিথ্যা হওয়ায় বাইরের if-এর ভেতরে প্রবেশই করে না। তাই কোনো কিছুই প্রিন্ট হয় না।",hint:"Outer if fails immediately."},{id:10,question:"When are curly braces `{}` strictly mandatory in an `if` statement?",options:["When the body contains two or more statements.","Always; Java does not allow single statements without braces.","Only when using else.","Only inside loops."],correctAnswer:0,explanation:"If the body of an `if` or `else` contains two or more statements, curly braces `{}` are strictly mandatory to group them into a single block.",explanationBn:"`if` বা `else` ব্লকে একের অধিক স্টেটমেন্ট থাকলে সেগুলোকে একত্রে ব্লক করার জন্য দ্বিতীয় বন্ধনী `{}` বাধ্যতামূলক।",hint:"More than one statement requires braces."},{id:11,question:`What is the output of the following Java snippet?
int a = 10;
if (a > 5)
  a += 2;
  a += 3;
System.out.println(a);`,options:["15","12","10","Compilation error"],correctAnswer:0,explanation:"Without braces, only the immediately following statement `a += 2;` belongs to the `if`. `a += 3;` executes unconditionally! `a` becomes `10 + 2 = 12`, then `12 + 3 = 15`.",explanationBn:"বন্ধনী না থাকায় শুধু `a += 2;` অংশটি if-এর অধীনে থাকে। `a += 3;` নিঃশর্তভাবে চলে। ফলে a-এর মান 10 + 2 + 3 = 15 হয়।",hint:"Only one statement belongs to the unbraced if."},{id:12,question:`What is the output of the following Java snippet?
int a = 2;
if (a > 5)
  a += 2;
  a += 3;
System.out.println(a);`,options:["5","2","7","Compilation error"],correctAnswer:0,explanation:"`a > 5` (2 > 5) is false, so `a += 2;` is skipped. However, because there are no curly braces, `a += 3;` is NOT part of the `if` and executes unconditionally! `a` becomes `2 + 3 = 5`.",explanationBn:"`a > 5` মিথ্যা হওয়ায় `a += 2;` বাদ যায়, কিন্তু বন্ধনী না থাকায় `a += 3;` নিঃশর্তভাবে চলে এবং মান ২ + ৩ = ৫ হয়।",hint:"a += 3 is outside the if block."},{id:13,question:"Which of the following can replace a simple two-way `if-else` statement with a single concise line?",options:["The ternary conditional operator `? :`","The switch statement","A while loop","The instanceof operator"],correctAnswer:0,explanation:"The ternary operator `condition ? value_if_true : value_if_false` provides a compact inline alternative to a standard `if-else` statement.",explanationBn:"টার্নারি অপারেটর (`? :`) একটি সাধারণ দুই-শাখার `if-else` স্টেটমেন্টের সংক্ষিপ্ত এক-লাইনের বিকল্প হিসেবে কাজ করে।",hint:"? : is the ternary operator."},{id:14,question:`What will the following code print?
int age = 16;
String status = age >= 18 ? "Adult" : "Minor";
System.out.println(status);`,options:["Minor","Adult","16","Compilation error"],correctAnswer:0,explanation:'`16 >= 18` is false. The ternary operator evaluates the false branch, returning "Minor".',explanationBn:'১৬ >= ১৮ মিথ্যা (false) হওয়ায় টার্নারি অপারেটর দ্বিতীয় মান "Minor" প্রদান করে।',hint:"16 is less than 18."},{id:15,question:"Can an `if` statement exist without an `else` branch in Java?",options:["Yes, an `if` statement can exist independently without any `else`.","No, every `if` must have a matching `else`.","Only in void methods.","Only if it contains a return statement."],correctAnswer:0,explanation:"An `else` branch is entirely optional in Java. A simple `if` statement without an `else` executes only when its condition is true.",explanationBn:"জাভায় `else` সম্পূর্ণ ঐচ্ছিক। কোনো `else` ছাড়াই একটি স্বাধীন `if` স্টেটমেন্ট সম্পূর্ণ বৈধ।",hint:"Else is optional."},{id:16,question:"Can an `else` branch exist without a preceding `if` in Java?",options:["No, an `else` without a matching `if` causes a compile-time error (`'else' without 'if'`).","Yes, it executes by default.","Yes, if placed inside a class.","Only if written in lowercase."],correctAnswer:0,explanation:"An `else` statement must always be paired with a preceding `if`. Writing `else` without an `if` produces a compiler error.",explanationBn:"একটি `else` অবশ্যই পূর্ববর্তী কোনো `if`-এর সাথে যুক্ত থাকতে হয়। `if` ছাড়া `else` লিখলে কম্পাইল এরর হয়।",hint:"Else requires an if."},{id:17,question:`What is the output of the following Java snippet?
int n = 0;
if (n > 0) {
  System.out.print("Positive");
} else if (n < 0) {
  System.out.print("Negative");
} else {
  System.out.print("Zero");
}`,options:["Zero","Positive","Negative","PositiveZero"],correctAnswer:0,explanation:'`n > 0` (0 > 0) is false. `n < 0` (0 < 0) is false. The catch-all `else` block executes, printing "Zero".',explanationBn:'০ > ০ এবং ০ < ০ উভয় শর্তই মিথ্যা। ফলে শেষ `else` ব্লকটি সক্রিয় হয়ে "Zero" প্রিন্ট করে।',hint:"0 is neither positive nor negative."},{id:18,question:`What is the output of the following Java code?
boolean x = true, y = false;
if (x && y) {
  System.out.print("1");
} else if (x || y) {
  System.out.print("2");
} else {
  System.out.print("3");
}`,options:["2","1","3","12"],correctAnswer:0,explanation:'`x && y` (true && false) is `false`. Next condition `x || y` (true || false) is `true`. It prints "2" and terminates the ladder.',explanationBn:'`true && false` হলো false; কিন্তু `true || false` হলো true। ফলে "2" প্রিন্ট হয়।',hint:"OR condition succeeds."},{id:19,question:"What is the purpose of the final `else` clause in an `if-else-if` ladder?",options:["It acts as a default fallback executed when none of the preceding conditions evaluate to true.","It restarts the ladder.","It forces the compiler to optimize the code.","It makes all previous conditions true."],correctAnswer:0,explanation:"The final `else` serves as a default catch-all handler that executes if and only if every single preceding `if` and `else if` condition evaluated to `false`.",explanationBn:"ল্যাডারের শেষ `else` একটি ডিফল্ট ফলব্যাক হিসেবে কাজ করে যা পূর্ববর্তী কোনো শর্তই সত্য না হলে বাস্তবায়িত হয়।",hint:"Fallback when all conditions fail."},{id:20,question:"What happens if all conditions in an `if-else-if` ladder are `false` and there is NO final `else` block?",options:["The entire construct terminates without executing any block, and control continues with the next statement.","A NullPointerException is thrown.","Compilation error.","The first block executes anyway."],correctAnswer:0,explanation:"If no conditions match and there is no default `else`, none of the blocks execute, and execution continues to the line after the ladder.",explanationBn:"কোনো শর্তই না মিললে এবং শেষ `else` না থাকলে কোনো ব্লকই চলবে না, প্রোগ্রাম স্বাভাবিকভাবে পরের লাইনে চলে যাবে।",hint:"Nothing executes."},{id:21,question:`What is the output of the following Java code?
int val = 15;
if (val % 3 == 0) {
  System.out.print("Three ");
}
if (val % 5 == 0) {
  System.out.print("Five ");
}`,options:["Three Five ","Three ","Five ","Nothing"],correctAnswer:0,explanation:'Notice these are two INDEPENDENT `if` statements, NOT an `if-else` ladder! Both conditions are evaluated: `15 % 3 == 0` is true (prints "Three "), and `15 % 5 == 0` is true (prints "Five ").',explanationBn:'এখানে দুটি পৃথক স্বাধীন `if` স্টেটমেন্ট রয়েছে (কোনো else নেই)। উভয় শর্তই সত্য হওয়ায় "Three Five " প্রিন্ট হবে।',hint:"Two separate if statements, not an if-else."},{id:22,question:`In contrast to Question 21, what is the output if an \`else if\` is used?
int val = 15;
if (val % 3 == 0) {
  System.out.print("Three ");
} else if (val % 5 == 0) {
  System.out.print("Five ");
}`,options:["Three ","Three Five ","Five ","Nothing"],correctAnswer:0,explanation:'Because this is an `if-else-if` ladder, once `val % 3 == 0` is true, "Three " is printed and the subsequent `else if` is completely skipped.',explanationBn:'যেহেতু এটি একটি ল্যাডার, প্রথম শর্ত `val % 3 == 0` সত্য হওয়ায় "Three " প্রিন্ট হয়ে ল্যাডার শেষ হয়ে যায়। "Five " আর চলে না।',hint:"Ladder stops after the first true match."},{id:23,question:`What is the output of the following Java snippet?
int a = 5;
if (a > 2)
  if (a < 4)
    System.out.print("Inside");
else
  System.out.print("Outside");`,options:["Outside","Inside","InsideOutside","Nothing"],correctAnswer:0,explanation:'Due to the dangling else rule, `else` binds to the inner `if (a < 4)`. `a > 2` (5 > 2) is true, entering inner block. `a < 4` (5 < 4) is false, so the inner `else` executes, printing "Outside".',explanationBn:'ড্যাংলিং এলস নিয়মে `else` ভেতরের `if (a < 4)`-এর সাথে যুক্ত। ৫ > ২ সত্য, কিন্তু ৫ < ৪ মিথ্যা। তাই ভেতরের else কার্যকর হয়ে "Outside" প্রিন্ট করে।',hint:"Indentation does not fool the Java compiler; else belongs to inner if."},{id:24,question:"How can a developer force an `else` to belong to the OUTER `if` in nested conditions?",options:["By enclosing the inner `if` inside curly braces `{}`.","By indenting the else to match the outer if.","By putting a semicolon after the inner if.","Java does not permit an else to belong to an outer if."],correctAnswer:0,explanation:"Wrapping the inner `if` in braces `{ if (...) ... }` closes its scope, forcing any subsequent `else` to attach to the outer `if`.",explanationBn:"ভেতরের `if`-কে দ্বিতীয় বন্ধনী `{}` দিয়ে আবদ্ধ করলে তার পরিধি শেষ হয়ে যায় এবং পরবর্তী `else` সরাসরি বাইরের `if`-এর সাথে যুক্ত হয়।",hint:"Use curly braces to isolate the inner if."},{id:25,question:`What will happen if a programmer writes an unreachable statement in Java?
if (false) {
  System.out.println("Unreachable");
}`,options:["Java allows `if (false)` without compilation error (used for conditional compilation/feature toggling), though the statement will never execute.","Throws a mandatory compile-time error: 'unreachable statement'.","Causes a JVM crash.","Converts false to true."],correctAnswer:0,explanation:"While unreachable `while(false)` or statements after `return` cause compile errors, the Java Language Specification (§14.21) explicitly allows `if (false)` to support conditional compilation flags.",explanationBn:"জাভায় `while(false)` বা return-এর পরের কোডে unreachable এরর দিলেও JLS §14.21 অনুযায়ী `if (false)` অনুমোদিত (ফিচার ফ্ল্যাগের সুবিধার জন্য)।",hint:"if (false) is a special exemption in JLS for conditional compilation."}],v=`================================================================================
CBSE CLASS XII INFORMATION TECHNOLOGY (CODE 802)
STUDY REVISION NOTES: MODULE 003_003 - TOPIC 0
CONDITIONAL BRANCHING IN JAVA: SIMPLE IF, IF-ELSE & IF-ELSE-IF LADDERS
Author: Sukanta Hui | Coder & AccoTax | Barrackpore, Kolkata
================================================================================

1. WHAT IS CONDITIONAL BRANCHING?
--------------------------------------------------------------------------------
- In standard Java programs, statements execute sequentially from top to bottom.
- Conditional branching statements alter the normal linear control flow by executing specific blocks of code only when a given boolean condition evaluates to \`true\`.
- In Java, decision-making is implemented through:
  1. Simple \`if\`
  2. \`if-else\`
  3. \`if-else-if\` ladder
  4. Nested \`if\`
  5. \`switch-case\`

2. SIMPLE \`if\` STATEMENT
--------------------------------------------------------------------------------
- Syntax:
  \`\`\`java
  if (boolean_expression) {
      // Statements executed ONLY if boolean_expression is true
  }
  \`\`\`
- Important Rules:
  - The condition MUST evaluate to a \`boolean\` (\`true\` or \`false\`). Integers (0 or 1) are NOT allowed.
  - If the block contains only ONE statement, curly braces \`{}\` are optional, but omitting them is prone to bugs.
  - Semicolon Trap: Writing \`if (x > 10);\` terminates the if statement immediately with an empty body, causing subsequent code to execute unconditionally!

3. \`if-else\` STATEMENT (MUTUALLY EXCLUSIVE DUAL BRANCH)
--------------------------------------------------------------------------------
- Syntax:
  \`\`\`java
  if (condition) {
      // Executes if condition is TRUE
  } else {
      // Executes if condition is FALSE
  }
  \`\`\`
- Exactly one of the two blocks will execute—never both, and never neither.
- Example: Checking even or odd:
  \`\`\`java
  if (num % 2 == 0) {
      System.out.println("Even");
  } else {
      System.out.println("Odd");
  }
  \`\`\`

4. \`if-else-if\` LADDER (MULTI-WAY DECISION)
--------------------------------------------------------------------------------
- Syntax:
  \`\`\`java
  if (condition1) {
      // Block 1
  } else if (condition2) {
      // Block 2
  } else if (condition3) {
      // Block 3
  } else {
      // Default Block: Executes if NONE of the above conditions matched
  }
  \`\`\`
- Execution Mechanics:
  1. Conditions are evaluated from top to bottom.
  2. As soon as ONE condition evaluates to \`true\`, its corresponding block executes.
  3. The entire remainder of the ladder is BYPASSED (short-circuited).
  4. If none of the conditions evaluate to \`true\`, the final \`else\` block executes.

5. COMMON CBSE EXAM TRAPS:
--------------------------------------------------------------------------------
Trap 1: The Semicolon Trap
  \`\`\`java
  int x = 5;
  if (x > 10); // Semicolon terminates if!
  {
      System.out.println("Greater"); // ALWAYS prints!
  }
  \`\`\`

Trap 2: Assignment in \`if\` with booleans
  \`\`\`java
  boolean flag = false;
  if (flag = true) { // Assigns true to flag and evaluates to true!
      System.out.println("Executed"); // This WILL print!
  }
  \`\`\`
  Note: \`if (x = 5)\` where \`x\` is \`int\` causes a COMPILE ERROR because \`int\` cannot be converted to \`boolean\`. But \`if (flag = true)\` assigns \`true\` and compiles!

Trap 3: The Dangling Else Problem
  - In Java, an \`else\` always matches the closest preceding unmatched \`if\` within the same block unless braces \`{}\` specify otherwise.

================================================================================
END OF REVISION NOTE - TOPIC 0
================================================================================
`,N=()=>{const[r,p]=o.useState("ladder"),[a,x]=o.useState(72),[n,u]=o.useState(!1),[s,f]=o.useState(!1),[j,S]=o.useState(8),[T,A]=o.useState(3),c=[{condition:"marks >= 90",test:a>=90,grade:"A+",desc:"Outstanding Performance"},{condition:"marks >= 75",test:a>=75,grade:"A",desc:"Distinction Performance"},{condition:"marks >= 60",test:a>=60,grade:"B",desc:"First Division"},{condition:"marks >= 40",test:a>=40,grade:"C",desc:"Passing Grade"},{condition:"else (Default)",test:!0,grade:"D / Remedial",desc:"Needs Academic Support"}];let d=-1;for(let t=0;t<c.length;t++)if(c[t].test){d=t;break}return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2",children:[e.jsx(m,{className:"w-3.5 h-3.5"})," Interactive Control Flow Simulator"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"Decision Structures & Execution Path Explorer"})]}),e.jsx("div",{className:"flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs",children:[{id:"ladder",label:"1. If-Else Ladder"},{id:"semicolon",label:"2. Semicolon Trap"},{id:"dangling",label:"3. Dangling Else"}].map(t=>e.jsx("button",{onClick:()=>p(t.id),className:`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${r===t.id?"bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-950":"text-slate-400 hover:text-white"}`,children:t.label},t.id))})]}),r==="ladder"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3",children:[e.jsxs("label",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider",children:["Adjust Student Marks: ",e.jsx("span",{className:"text-emerald-400 text-base font-bold font-mono",children:a})," / 100"]}),e.jsxs("span",{className:"text-xs text-slate-400",children:["Awarded Grade: ",e.jsx("strong",{className:"text-white font-mono",children:c[d].grade})]})]}),e.jsx("input",{type:"range",min:"0",max:"100",value:a,onChange:t=>x(Number(t.target.value)),className:"w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"}),e.jsxs("div",{className:"flex justify-between text-[11px] text-slate-500 font-mono mt-1",children:[e.jsx("span",{children:"0 (Fail)"}),e.jsx("span",{children:"40 (Pass)"}),e.jsx("span",{children:"60 (1st Div)"}),e.jsx("span",{children:"75 (Distinction)"}),e.jsx("span",{children:"100 (Max)"})]})]}),e.jsx("div",{className:"grid gap-3 font-mono text-xs",children:c.map((t,i)=>{const l=i===d,h=i>d;return e.jsxs("div",{className:`p-4 rounded-xl border transition-all ${l?"bg-emerald-500/10 border-emerald-500/40 text-emerald-200 shadow-lg shadow-emerald-950/20":h?"bg-slate-950/40 border-slate-800/40 text-slate-600 opacity-60":"bg-rose-500/5 border-rose-500/20 text-rose-300/80"}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-bold ${l?"bg-emerald-500 text-slate-950":h?"bg-slate-800 text-slate-500":"bg-rose-500/20 text-rose-400"}`,children:i===4?"DEFAULT":`CHECK ${i+1}`}),e.jsxs("span",{className:"font-bold text-white",children:[i===0?"if":i===4?"else":"else if"," (",t.condition,")"]})]}),e.jsx("span",{className:`text-[11px] font-sans font-semibold ${l?"text-emerald-400":h?"text-slate-600":"text-rose-400"}`,children:l?"✓ MATCHED & EXECUTED":h?"⚡ BYPASSED":"✗ EVALUATED FALSE"})]}),e.jsxs("div",{className:"mt-2 text-[11px] font-sans text-slate-300 flex items-center justify-between border-t border-slate-800/60 pt-2",children:[e.jsxs("span",{children:["Grade assigned: ",e.jsx("code",{className:"text-white font-mono font-bold",children:t.grade})," (",t.desc,")"]}),l&&e.jsx("span",{className:"text-emerald-400 text-xs font-semibold",children:"Terminates ladder immediately!"})]})]},i)})})]}),r==="semicolon"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-bold text-white",children:"Toggle Accidental Semicolon"}),e.jsxs("p",{className:"text-xs text-slate-400",children:["See what happens when an accidental semicolon is placed right after ",e.jsx("code",{className:"text-amber-400 font-mono",children:"if (x > 10);"})]})]}),e.jsx("button",{onClick:()=>u(!n),className:`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${n?"bg-rose-500 text-white border-rose-400 shadow-md shadow-rose-950":"bg-emerald-600 text-white border-emerald-500"}`,children:n?"Semicolon PRESENT: `if (x > 10);`":"Clean Syntax: `if (x > 10)`"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs",children:[e.jsx("span",{className:"text-slate-500",children:"// Java Code"}),e.jsx("p",{className:"text-purple-300 mt-1",children:"int x = 5;"}),e.jsxs("p",{className:"text-sky-300",children:["if (x > 10)",n?e.jsx("span",{className:"bg-rose-500 text-white px-1 font-bold animate-pulse",children:";"}):""]}),e.jsx("p",{className:"text-slate-300 pl-4",children:"{"}),e.jsx("p",{className:"text-amber-300 pl-8",children:'System.out.println("x is greater than 10");'}),e.jsx("p",{className:"text-slate-300 pl-4",children:"}"})]}),e.jsxs("div",{className:`p-4 rounded-xl border flex flex-col justify-between ${n?"bg-rose-500/10 border-rose-500/30":"bg-emerald-500/10 border-emerald-500/30"}`,children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider block mb-1",children:"Terminal Output:"}),e.jsx("div",{className:"bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-xs text-white",children:n?e.jsx("span",{className:"text-rose-400 font-bold",children:"x is greater than 10 (BUG!)"}):e.jsx("span",{className:"text-slate-500 italic",children:"(Nothing printed - Condition was false)"})})]}),e.jsx("p",{className:"text-xs text-slate-300 mt-3 leading-relaxed",children:n?e.jsxs(e.Fragment,{children:["⚠️ ",e.jsx("strong",{children:"The CBSE Trap:"})," The semicolon immediately terminates the if statement as an empty statement! The block below runs unconditionally, even though ",e.jsx("code",{className:"text-amber-300 font-mono",children:"5 > 10"})," is completely false!"]}):e.jsxs(e.Fragment,{children:["✓ ",e.jsx("strong",{children:"Correct Behavior:"})," Without the semicolon, Java binds the block to the condition. Since ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"5 > 10"})," is false, the block is safely bypassed."]})})]})]})]}),r==="dangling"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-bold text-white",children:"The Dangling Else Ambiguity"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Toggle curly braces to control whether the `else` pairs with the inner `if` or outer `if`."})]}),e.jsx("button",{onClick:()=>f(!s),className:`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${s?"bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-950":"bg-slate-800 text-slate-300 border-slate-700"}`,children:s?"Braces Added: { inner if }":"No Braces (Compiler Default Binding)"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs",children:[e.jsx("span",{className:"text-slate-500",children:"// Variables: x = 10, y = 5"}),e.jsxs("p",{className:"text-sky-300 mt-2",children:["if (x > 5) ",s?"{":""]}),e.jsx("p",{className:"text-purple-300 pl-4",children:"if (y > 10)"}),e.jsx("p",{className:"text-amber-300 pl-8",children:'System.out.println("One");'}),s&&e.jsx("p",{className:"text-sky-300 pl-4",children:"}"}),e.jsx("p",{className:"text-rose-400 pl-4",children:"else"}),e.jsx("p",{className:"text-amber-300 pl-8",children:'System.out.println("Two");'})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider block mb-1 text-slate-400",children:"Evaluated Result:"}),e.jsx("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono text-xs text-emerald-400 font-bold",children:s?"Nothing printed (Outer else never triggers because x > 5 is true)":"Outputs: 'Two'"})]}),e.jsx("p",{className:"text-xs text-slate-300 mt-3 leading-relaxed",children:s?e.jsxs(e.Fragment,{children:["By enclosing the inner if in braces, the ",e.jsx("code",{className:"text-rose-300 font-mono",children:"else"})," is forced to bind to the ",e.jsx("strong",{children:"outer if"}),"! Because ",e.jsx("code",{className:"text-sky-300 font-mono",children:"x > 5"})," is true, the outer else is bypassed."]}):e.jsxs(e.Fragment,{children:["Under standard Java rules, an ",e.jsx("code",{className:"text-rose-300 font-mono",children:"else"})," binds to the ",e.jsx("strong",{children:"closest preceding unmatched if"})," (the inner ",e.jsx("code",{className:"text-purple-300 font-mono",children:"y > 10"}),"). Since ",e.jsx("code",{className:"text-purple-300 font-mono",children:"5 > 10"}),' is false, its else runs, printing "Two"!']})})]})]})]})]})};function O(){return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8 space-y-12",children:[e.jsxs("div",{className:"max-w-6xl mx-auto space-y-4 text-center sm:text-left",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:[e.jsx(m,{className:"w-4 h-4"})," CBSE Class 12 IT (Code 802) • Unit 3: Java Programming"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight",children:"Conditional Branching in Java: Simple if, if-else & Ladders"}),e.jsxs("p",{className:"text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed",children:["Master linear vs branching execution, mutual exclusion in ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"if-else"}),", short-circuit ladder termination, the dangling else ambiguity, and dangerous semicolon traps."]})]}),e.jsx("div",{className:"max-w-6xl mx-auto",children:e.jsx(N,{})}),e.jsx("div",{className:"max-w-6xl mx-auto",children:e.jsx(y,{content:v,title:"CBSE Class 12 IT-802: Conditional Branching Revision Notes"})}),e.jsx("div",{className:"max-w-6xl mx-auto",children:e.jsx(b,{faqs:w,title:"CBSE IT-802 High-Yield Exam Questions: Conditional Branching",description:"Master 25 exam-tested questions on if conditions, semicolon pitfalls, dangling else resolution, and short-circuit ladders with bilingual explanations.",defaultOpenCount:3})}),e.jsx("div",{className:"max-w-6xl mx-auto",children:e.jsx(g,{name:"Sukanta Hui",role:"Senior Vocational IT Educator & Software Architect",location:"Barrackpore, Kolkata",note:"Never write a semicolon after the parentheses of an if statement (e.g. 'if (x > 5);')! In CBSE practicals and board theory, examiners intentionally hide that semicolon. It immediately ends the if statement, making the code block below execute unconditionally! Also remember that in an if-else-if ladder, the very first true condition executes and skips all remaining branches."})})]})}export{O as default};
