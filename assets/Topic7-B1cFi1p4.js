import{j as e,b as d}from"./vendor-react-core-B-R9HE-Z.js";import{T as m}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as b}from"./FAQTemplate-16IfroqC.js";import{P as f}from"./PlainTextPrint-C6NaUtnE.js";import{bW as h,R as g}from"./vendor-icons-C1Dcofhq.js";const y=[{id:1,question:"What is 'fall-through' in a Java `switch` statement?",options:["The execution of subsequent case statements without checking their labels when a preceding case omits a `break;` statement.","A JVM crash caused by infinite recursion in switch.","The automatic re-evaluation of the switch condition.","The conversion of an integer to a float."],correctAnswer:0,explanation:"When a `case` matches and does not end with `break;`, control flows unconditionally into the next case, executing its statements regardless of whether its label matches.",explanationBn:"সুইচের কোনো কেস মেলার পর যদি `break;` না থাকে, তবে পরবর্তী কেসের শর্ত না মিলিয়েই সরাসরি তার কোড কার্যকর করাকে 'fall-through' বলে।",hint:"Cascading execution into next cases without checking labels."},{id:2,question:"During fall-through, does Java evaluate the case labels of the subsequent cases it executes?",options:["No, once execution enters a switch block, subsequent case labels are completely ignored during fall-through.","Yes, it tests each label and stops if they don't match.","Only if the cases have numbers.","Only in 64-bit systems."],correctAnswer:0,explanation:"Once inside, Java treats all subsequent code as a continuous stream of instructions until a `break;` or `}` is reached, ignoring case labels entirely.",explanationBn:"একবার ভেতরে প্রবেশের পর জাভা পরবর্তী কোনো কেস লেবেল পরীক্ষা করে না; ব্রেক না পাওয়া পর্যন্ত সব কোড অন্ধের মতো চালিয়ে যায়।",hint:"Case labels are ignored during fall-through."},{id:3,question:`What is the output of the following Java snippet?
int n = 2;
switch (n) {
  case 1: System.out.print("A");
  case 2: System.out.print("B");
  case 3: System.out.print("C");
  default: System.out.print("D");
}`,options:["BCD","B","BC","ABCD"],correctAnswer:0,explanation:'`n = 2` jumps to `case 2:`. It prints "B". Since there are NO `break` statements anywhere, execution cascades through `case 3:` (prints "C") and `default:` (prints "D"), producing "BCD".',explanationBn:'n=২ মেলায় case 2 চলে ("B"); কোনো break না থাকায় case 3 ("C") এবং default ("D") সবগুলি চলে। আউটপুট: "BCD"।',hint:"Falls through case 2, 3, and default."},{id:4,question:`What is the output of the following Java snippet?
int n = 2;
switch (n) {
  case 1: System.out.print("A");
  case 2: System.out.print("B");
  case 3: System.out.print("C"); break;
  default: System.out.print("D");
}`,options:["BC","B","BCD","C"],correctAnswer:0,explanation:'`n = 2` prints "B", falls into `case 3:` printing "C", and then hits `break;` which stops further execution. Output: "BC".',explanationBn:'case 2-তে "B" প্রিন্ট হয়, নিচে গড়িয়ে case 3-তে "C" প্রিন্ট হয় এবং break-এ এসে থেমে যায়। আউটপুট: "BC"।',hint:"Stops at break in case 3."},{id:5,question:"When is fall-through INTENTIONALLY used by Java programmers?",options:["When multiple case labels should execute the exact same block of code (e.g. grouping vowels or weekdays).","To make the JVM run faster.","To bypass variable initialization.","To avoid writing switch closing braces."],correctAnswer:0,explanation:"Intentional fall-through allows grouping multiple case labels together (e.g. `case 'A': case 'E': case 'I': case 'O': case 'U':`) to share a single handler block.",explanationBn:"একাধিক কেস লেবেল যখন হুবহু একই কাজ সম্পাদন করে (যেমন ভাওয়েল বা ছুটির দিন চিহ্নিতকরণ), তখন ইচ্ছাকৃতভাবে fall-through ব্যবহার করা হয়।",hint:"Grouping multiple cases to share logic."},{id:6,question:`What is the output of the following Java code?
char ch = 'o';
switch (ch) {
  case 'a': case 'e': case 'i': case 'o': case 'u':
    System.out.println("Vowel");
    break;
  default:
    System.out.println("Consonant");
}`,options:["Vowel","Consonant","VowelConsonant","Compilation error"],correctAnswer:0,explanation:"`ch = 'o'` matches `case 'o':`. Because of intentional fall-through, it enters the shared statement block, prints \"Vowel\", and breaks.",explanationBn:"`ch = 'o'` কেস 'o'-এর সাথে মেলে এবং শেয়ার করা ব্লকে গিয়ে \"Vowel\" প্রিন্ট করে ব্রেক করে।",hint:"Vowel cases are stacked."},{id:7,question:`What is the output of the following Java snippet?
int day = 6;
switch (day) {
  case 1: case 2: case 3: case 4: case 5:
    System.out.println("Work");
    break;
  case 6: case 7:
    System.out.println("Rest");
    break;
  default:
    System.out.println("Invalid");
}`,options:["Rest","Work","WorkRest","Invalid"],correctAnswer:0,explanation:'`day = 6` jumps to `case 6:`, falls through into `case 7:`\'s shared block, prints "Rest", and breaks.',explanationBn:'`day = 6` কেস ৬-এ গিয়ে নিচে ৭-এর ব্লকে প্রবেশ করে "Rest" প্রিন্ট করে এবং ব্রেক করে।',hint:"Day 6 and 7 print Rest."},{id:8,question:`What is the output of the following Java code?
int x = 1;
switch (x) {
  case 1: x += 2;
  case 2: x += 3;
  case 3: x += 4; break;
  default: x += 5;
}
System.out.println(x);`,options:["10","3","6","15"],correctAnswer:0,explanation:"1) `case 1:`: `x` becomes `1 + 2 = 3`. 2) Falls through to `case 2:`: `x` becomes `3 + 3 = 6`. 3) Falls through to `case 3:`: `x` becomes `6 + 4 = 10`. 4) Hits `break;`. Final `x = 10`.",explanationBn:"১) case 1: x = ১ + ২ = ৩; ২) case 2: x = ৩ + ৩ = ৬; ৩) case 3: x = ৬ + ৪ = ১০; ৪) break হয়। চূড়ান্ত x = ১০।",hint:"1 + 2 + 3 + 4 = 10."},{id:9,question:`What is the output of the code in Question 8 if initial \`x = 2\`?
int x = 2;
switch (x) {
  case 1: x += 2;
  case 2: x += 3;
  case 3: x += 4; break;
  default: x += 5;
}
System.out.println(x);`,options:["9","10","5","14"],correctAnswer:0,explanation:"1) Jumps directly to `case 2:`: `x` becomes `2 + 3 = 5`. 2) Falls through to `case 3:`: `x` becomes `5 + 4 = 9`. 3) Hits `break;`. Output: 9.",explanationBn:"x=২ সরাসরি case 2-তে যায়: ২+৩=৫; তারপর case 3-তে গড়ায়: ৫+৪=৯; ব্রেক করে বেরিয়ে আসে। আউটপুট: ৯।",hint:"2 + 3 + 4 = 9."},{id:10,question:`What is the output of the code in Question 8 if initial \`x = 5\`?
int x = 5;
switch (x) {
  case 1: x += 2;
  case 2: x += 3;
  case 3: x += 4; break;
  default: x += 5;
}
System.out.println(x);`,options:["10","5","15","0"],correctAnswer:0,explanation:"`x = 5` matches none of 1, 2, 3. It jumps to `default:`, computing `x = 5 + 5 = 10`.",explanationBn:"x=৫ কোনো কেসে না মেলায় default চলে: ৫ + ৫ = ১০।",hint:"Default adds 5 to 5."},{id:11,question:`What is the output of the following Java snippet?
int a = 0;
switch (a) {
  case 0: System.out.print("Zero ");
  case 1: System.out.print("One "); break;
  case 2: System.out.print("Two ");
}`,options:["Zero One ","Zero ","Zero One Two ","One "],correctAnswer:0,explanation:'`a = 0` matches `case 0:` ("Zero "), falls through into `case 1:` ("One "), and halts at `break;`. Output: "Zero One ".',explanationBn:'case 0 চলে ("Zero "), নিচে case 1-এ গড়িয়ে ("One ") প্রিন্ট করে এবং ব্রেক করে।',hint:"Zero One."},{id:12,question:"Can a `default` clause cause fall-through into regular `case` blocks?",options:["Yes, if `default` is placed before other cases and does not contain a `break;` statement.","No, default can never fall through.","Only in Java 1.2.","Only if cases are characters."],correctAnswer:0,explanation:"If `default` appears at the top or in the middle without a `break;`, execution cascades into whatever `case` is written immediately below it.",explanationBn:"`default` যদি শুরুতে বা মাঝে থাকে এবং তাতে `break;` না থাকে, তবে এটি নিচের কেসগুলোতে অনায়াসে গড়িয়ে পড়ে।",hint:"Default behaves like any other case without break."},{id:13,question:`What is the output of the following Java snippet?
int val = 99;
switch (val) {
  default: System.out.print("D ");
  case 1: System.out.print("1 ");
  case 2: System.out.print("2 "); break;
  case 3: System.out.print("3 ");
}`,options:["D 1 2 ","D ","D 1 ","D 1 2 3 "],correctAnswer:0,explanation:'`val = 99` enters `default:` ("D "), falls into `case 1:` ("1 "), then falls into `case 2:` ("2 "), and halts at `break;`. Output: "D 1 2 ".',explanationBn:'val=৯৯ default-এ গিয়ে "D " দেয়; break না থাকায় case 1-এ গিয়ে "1 " এবং case 2-তে গিয়ে "2 " প্রিন্ট করে ব্রেক করে।',hint:"Falls through default -> case 1 -> case 2."},{id:14,question:`What is the output of the following Java snippet?
int val = 1;
switch (val) {
  default: System.out.print("D ");
  case 1: System.out.print("1 ");
  case 2: System.out.print("2 "); break;
  case 3: System.out.print("3 ");
}`,options:["1 2 ","D 1 2 ","1 ","D 1 "],correctAnswer:0,explanation:'Even though `default` is at the top, `case 1:` matches first! It prints "1 ", falls into `case 2:` ("2 "), and halts at `break;`. Output: "1 2 ".',explanationBn:'default উপরে থাকলেও জাভা আগে case 1 মেলায়। তাই "1 " প্রিন্ট হয়ে নিচে case 2-তে গিয়ে "2 " প্রিন্ট করে ব্রেক করে। ফলাফল: "1 2 "।',hint:"Case 1 matches, default is skipped."},{id:15,question:`What is the output of the following Java code?
int c = 3;
switch (c) {
  case 1: System.out.print("A"); break;
  case 2: System.out.print("B"); break;
  case 3:
  case 4: System.out.print("C"); break;
  default: System.out.print("D");
}`,options:["C","CD","ABCD","Nothing"],correctAnswer:0,explanation:'`case 3:` is empty and intentionally falls through into `case 4:`, printing "C" and breaking.',explanationBn:'`case 3:` ফাঁকা হওয়ায় নিচে case 4-এ প্রবেশ করে "C" প্রিন্ট করে এবং ব্রেক করে।',hint:"Case 3 and 4 share code."},{id:16,question:"What happens if a `break` is omitted after the LAST case in a switch block when that case is at the bottom?",options:["It has no adverse effect because execution naturally reaches the closing brace `}` and exits.","Causes a compilation error: 'missing break at end'.","The switch statement restarts in an infinite loop.","Throws a runtime exception."],correctAnswer:0,explanation:"The closing brace `}` acts as a natural boundary. Omitting `break;` in the very last statement block at the bottom does not cause any fall-through.",explanationBn:"সুইচের একেবারে শেষ ব্লকে `break;` না থাকলেও সমস্যা হয় না কারণ প্রোগ্রাম স্বয়ংক্রিয়ভাবে সমাপ্তি বন্ধনী `}` অতিক্রম করে বের হয়ে যায়।",hint:"Closing brace } ends the switch."},{id:17,question:`What is the output of the following Java code?
int x = 10;
switch (x) {
  case 10: x *= 2;
  case 20: x *= 3;
  case 30: x *= 4;
}
System.out.println(x);`,options:["240","20","60","120"],correctAnswer:0,explanation:"1) `case 10:`: `x = 10 * 2 = 20`. 2) Falls through to `case 20:`: `x = 20 * 3 = 60`. 3) Falls through to `case 30:`: `x = 60 * 4 = 240`. Final `x = 240`.",explanationBn:"১) case 10: ১০ * ২ = ২০; ২) case 20: ২০ * ৩ = ৬০; ৩) case 30: ৬০ * ৪ = ২৪০। চূড়ান্ত মান ২৪০।",hint:"10 * 2 * 3 * 4 = 240."},{id:18,question:"In Question 17, why did `case 20:` execute when initial `x` was `10`?",options:["Because after case 10 finished without a break, execution fell through into case 20 unconditionally without checking the label.","Because x became 20 after case 10 and matched case 20's label.","Because 10 is divisible by 20.","Because switch re-evaluates the variable on every line."],correctAnswer:0,explanation:"This is a classic misconception! Case labels are NOT re-checked during execution. Even if `x` had remained 10, `case 20:` would have executed anyway due to fall-through!",explanationBn:"এটি একটি সাধারণ ভুল ধারণা! fall-through এর সময় কেস লেবেল কখনোই পুনরায় পরীক্ষা করা হয় না; break না থাকলে নিচের কেস স্বয়ংক্রিয়ভাবে চলে।",hint:"Case labels are ignored during fall-through."},{id:19,question:`What is the output of the following Java snippet?
int m = 1;
switch (m) {
  case 1: System.out.print("Start ");
  case 2: System.out.print("Mid "); return;
  case 3: System.out.print("End ");
}
System.out.print("After");`,options:["Start Mid ","Start Mid After","Start Mid End After","Start "],correctAnswer:0,explanation:'`case 1:` prints "Start ", falls into `case 2:` which prints "Mid ", and then `return;` exits the ENTIRE enclosing method! "After" is never reached.',explanationBn:'case 1-এ "Start " প্রিন্ট হয়, নিচে case 2-তে "Mid " প্রিন্ট হয়, তারপর `return;` মেথড থেকে বের করে দেয়। "After" আর চলে না।',hint:"return exits the method."},{id:20,question:`What is the output of the following Java snippet?
char c = 'B';
switch (c) {
  case 'A': System.out.print("1");
  case 'B': System.out.print("2");
  case 'C': System.out.print("3"); break;
  case 'D': System.out.print("4");
}`,options:["23","2","123","234"],correctAnswer:0,explanation:"`c = 'B'` jumps to `case 'B':` (prints \"2\"), falls through into `case 'C':` (prints \"3\"), and halts at `break;`. Output: \"23\".",explanationBn:`'B' কেস 'B'-তে গিয়ে "2" প্রিন্ট করে, নিচে case 'C'-তে গিয়ে "3" প্রিন্ট করে এবং ব্রেক করে। ফলাফল: "23"।`,hint:"2 followed by 3."},{id:21,question:"Can comments like `// fall through` suppress compiler warnings in modern Java IDEs?",options:['Yes, linters and compilers recognize `// fall through` or `@SuppressWarnings("fallthrough")` as intentional fall-through documentation.',"No, comments have no effect on linters.","Comments cause compilation errors in switch.","Only HTML comments work."],correctAnswer:0,explanation:'IDEs (like NetBeans and Eclipse) inspect code for unintentional missing breaks; adding `// fall through` or `@SuppressWarnings("fallthrough")` confirms to the compiler that the behavior is intentional.',explanationBn:"নেটবিন্স ও কম্পাইলার ইচ্ছাকৃত fall-through বুঝতে পারে যদি `// fall through` মন্তব্য বা অ্যানোটেশন ব্যবহার করা হয়।",hint:"Document intentional fall-through."},{id:22,question:`What is the output of the following Java code?
int p = 5;
switch (p) {
  default: System.out.print("Def ");
  case 10: System.out.print("Ten ");
  case 20: System.out.print("Twenty "); break;
  case 30: System.out.print("Thirty ");
}`,options:["Def Ten Twenty ","Def ","Def Ten ","Thirty "],correctAnswer:0,explanation:'`p = 5` matches no case. It enters `default:` ("Def "), falls into `case 10:` ("Ten "), falls into `case 20:` ("Twenty "), and stops at `break;`.',explanationBn:'p=৫ কোনো কেসে না মেলায় default-এ যায় ("Def "), নিচে case 10 ("Ten ") ও case 20 ("Twenty ") চলে এবং ব্রেক করে।',hint:"Def Ten Twenty."},{id:23,question:`What is the output of the code in Question 22 if \`p = 10\`?
int p = 10;
switch (p) {
  default: System.out.print("Def ");
  case 10: System.out.print("Ten ");
  case 20: System.out.print("Twenty "); break;
  case 30: System.out.print("Thirty ");
}`,options:["Ten Twenty ","Def Ten Twenty ","Ten ","Def Ten "],correctAnswer:0,explanation:'Since `p = 10` matches `case 10:`, it jumps straight to `case 10:`, prints "Ten ", falls into `case 20:` ("Twenty "), and breaks! Default is never executed.',explanationBn:'p=১০ মেলায় সরাসরি case 10 চলে ("Ten "), তারপর case 20 চলে ("Twenty ") এবং ব্রেক করে। default কার্যকর হয় না।',hint:"Direct match to case 10."},{id:24,question:"Why do CBSE board examiners include fall-through questions in almost every Class 12 IT-802 paper?",options:["To test whether students blindly assume switch statements stop after executing one case, rather than tracing the execution flow statement-by-statement until an actual break is encountered.","Because switch statements are the only topic in Java.","To encourage students to write code without breaks.","Because NetBeans does not support if-else."],correctAnswer:0,explanation:"Students frequently assume each case is automatically isolated like an if-else ladder. Examiners test whether candidates understand that `break;` is required to halt execution.",explanationBn:"অনেক শিক্ষার্থী ভুলবশত মনে করে কেস নিজে থেকেই থেমে যায়। তাই ব্রেক না থাকলে যে কোড নিচে গড়িয়ে যায়, তা পরীক্ষা করতেই এই প্রশ্নগুলো দেওয়া হয়।",hint:"Tests deep understanding of control flow vs assumptions."},{id:25,question:"What is the best mental model for tracing a Java `switch` statement in an exam?",options:["1) Find the single entry point (matching case or default); 2) From that point downward, execute every statement sequentially until you hit a `break;` or `}`.","1) Execute all cases simultaneously; 2) Average the outputs.","1) Count the number of colons; 2) Multiply by 2.","1) Skip all cases without numbers."],correctAnswer:0,explanation:"Switch has a single entry door (the matching case or default). Once entered, execution moves straight down through everything until a `break;` or the exit door `}` is reached.",explanationBn:"সুইচের নিয়ম: শুরুতে একটিমাত্র প্রবেশদ্বার খুঁজে বের করো (মিলিত কেস বা ডিফল্ট), এরপর সেখান থেকে সোজা নিচে নামতে নামতে ব্রেক বা সমাপ্তি বন্ধনী না পাওয়া পর্যন্ত সব চালাতে থাকো।",hint:"Find entry point, then execute straight down until break."}],w=`================================================================================
CBSE CLASS XII INFORMATION TECHNOLOGY (CODE 802)
STUDY REVISION NOTES: MODULE 003_003 - TOPIC 7
FALL-THROUGH BEHAVIOR IN JAVA SWITCH STATEMENTS
Author: Sukanta Hui | Coder & AccoTax | Barrackpore, Kolkata
================================================================================

1. WHAT IS FALL-THROUGH?
--------------------------------------------------------------------------------
- In Java's \`switch\` statement, when execution enters a matching \`case\`, it executes all following statements sequentially until a \`break;\` statement is encountered or the switch block closing brace \`}\` is reached.
- If a \`case\` does NOT end with a \`break;\`, control automatically cascades (falls through) into the next \`case\` block, executing its statements UNCONDITIONALLY.
- Crucial Rule: During fall-through, Java does NOT check the subsequent case labels! They are executed blindly regardless of whether their constant matches the test variable!

2. INTENTIONAL USE OF FALL-THROUGH:
--------------------------------------------------------------------------------
Fall-through is not always a bug; when used intentionally, it allows multiple case labels to share identical logic:

Example 1: Identifying Vowels:
\`\`\`java
char ch = 'e';
switch (ch) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        System.out.println("Vowel");
        break;
    default:
        System.out.println("Consonant");
        break;
}
\`\`\`

Example 2: Days of the Week (Weekday vs Weekend):
\`\`\`java
int day = 3;
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        System.out.println("Working Weekday");
        break;
    case 6:
    case 7:
        System.out.println("Weekend Holiday");
        break;
    default:
        System.out.println("Invalid day index");
        break;
}
\`\`\`

3. ACCIDENTAL FALL-THROUGH (THE #1 CBSE EXAM TRAP):
--------------------------------------------------------------------------------
Consider the following output prediction question:
\`\`\`java
int k = 2;
switch (k) {
    case 1: System.out.print("Jan ");
    case 2: System.out.print("Feb ");
    case 3: System.out.print("Mar "); break;
    case 4: System.out.print("Apr ");
    default: System.out.print("End ");
}
\`\`\`
Execution Trace:
1. \`k = 2\` jumps directly to \`case 2:\`.
2. Prints "Feb ".
3. No \`break;\` exists at the end of \`case 2:\`!
4. Execution falls through blindly into \`case 3:\` (without checking if \`k == 3\`).
5. Prints "Mar ".
6. Hits \`break;\` inside \`case 3:\` and halts!
Output: "Feb Mar " (NOT just "Feb "!).

4. HOW TO PREVENT ACCIDENTAL FALL-THROUGH:
--------------------------------------------------------------------------------
1. Standard Practice: Always end every \`case\` and \`default\` with \`break;\` unless deliberate stacking is required.
2. Modern Java (Java 14+): Switch expressions using arrow syntax (\`case 1 -> System.out.println("One");\`) eliminate fall-through completely. (Note: CBSE IT-802 tests traditional colon syntax).

================================================================================
END OF REVISION NOTE - TOPIC 7
================================================================================
`,k=()=>{const[s,c]=d.useState(2),[r,u]=d.useState({1:!1,2:!1,3:!0,4:!1,default:!0}),p=t=>{u(a=>({...a,[t]:!a[t]}))},l=(()=>{const t=[],a=[{id:1,label:"Jan ",key:"1"},{id:2,label:"Feb ",key:"2"},{id:3,label:"Mar ",key:"3"},{id:4,label:"Apr ",key:"4"},{id:99,label:"DefaultEnd ",key:"default"}];let n=-1;s===1?n=0:s===2?n=1:s===3?n=2:s===4?n=3:n=4;for(let o=n;o<a.length;o++){const i=a[o];if(t.push({id:i.id,label:i.label,hasBreak:r[i.key],isEntry:o===n}),r[i.key])break}return t})(),x=l.map(t=>t.label).join("");return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-2",children:[e.jsx(h,{className:"w-3.5 h-3.5"})," Control Flow Cascade Simulator"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"Fall-Through Mechanics & Selective `break` Explorer"})]}),e.jsxs("button",{onClick:()=>{c(2),u({1:!1,2:!1,3:!0,4:!1,default:!0})},className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition",children:[e.jsx(g,{className:"w-3.5 h-3.5"})," Reset to Classic CBSE Question"]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6 flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider font-mono",children:"Select Entry Value (`int month`):"}),e.jsx("div",{className:"flex items-center gap-1.5 font-mono",children:[1,2,3,4,99].map(t=>e.jsx("button",{onClick:()=>c(t),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer border ${s===t?"bg-rose-500 text-white border-rose-400 shadow-md shadow-rose-950":"bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800"}`,children:t===99?"default (99)":`case ${t}:`},t))})]}),e.jsxs("div",{className:"text-xs text-slate-400",children:["Toggle individual ",e.jsx("code",{className:"text-purple-300 font-mono",children:"break;"})," statements below!"]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 rounded-2xl p-5 border border-slate-800 space-y-3 font-mono text-xs",children:[e.jsxs("div",{className:"text-slate-500 border-b border-slate-800 pb-2 flex items-center justify-between",children:[e.jsxs("span",{children:["int month = ",s,";"]}),e.jsx("span",{className:"text-[11px] font-sans text-slate-400",children:"Click break buttons to toggle"})]}),e.jsxs("p",{className:"text-sky-300",children:["switch (month) ","{"]}),[{id:1,text:'System.out.print("Jan ");',key:"1"},{id:2,text:'System.out.print("Feb ");',key:"2"},{id:3,text:'System.out.print("Mar ");',key:"3"},{id:4,text:'System.out.print("Apr ");',key:"4"},{id:99,text:'System.out.print("DefaultEnd ");',key:"default",label:"default:"}].map(t=>{const a=r[t.key],n=t.id===s||t.id===99&&![1,2,3,4].includes(s),o=l.some(i=>i.id===t.id);return e.jsxs("div",{className:`p-3 rounded-xl border transition-all ${n?"bg-rose-500/15 border-rose-500/50 text-white shadow-md shadow-rose-950/20":o?"bg-amber-500/10 border-amber-500/30 text-amber-200":"bg-slate-900/40 border-slate-800/40 text-slate-600"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("span",{className:"font-bold text-slate-200",children:[t.label||`case ${t.id}:`,n&&e.jsx("span",{className:"ml-2 text-[10px] px-2 py-0.5 rounded bg-rose-500 text-white font-sans font-bold",children:"ENTRY POINT"}),o&&!n&&e.jsx("span",{className:"ml-2 text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-sans",children:"FELL THROUGH"})]}),e.jsx("button",{onClick:()=>p(t.key),className:`px-2.5 py-1 rounded text-[11px] font-sans font-bold transition cursor-pointer border ${a?"bg-purple-600/30 text-purple-300 border-purple-500/40 hover:bg-purple-600/40":"bg-slate-800 text-slate-500 border-slate-700 hover:text-slate-300"}`,children:a?"break; [PRESENT]":"break; [OMITTED]"})]}),e.jsx("div",{className:"pl-4 text-emerald-300",children:t.text}),a&&e.jsx("div",{className:"pl-4 text-purple-300 font-bold",children:"break;"})]},t.id)}),e.jsx("p",{className:"text-sky-300",children:"}"})]}),e.jsxs("div",{className:"bg-slate-950 rounded-2xl p-5 border border-slate-800 flex flex-col justify-between space-y-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono",children:"Evaluated Program Output:"}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-emerald-400 font-extrabold text-lg",children:['"',x,'"']}),e.jsx("p",{className:"text-[11px] text-slate-500 mt-1",children:"Notice how multiple strings concatenated together because of missing breaks!"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block font-sans",children:"Execution Path Flow:"}),e.jsx("div",{className:"space-y-1.5 text-xs font-sans",children:l.map((t,a)=>e.jsxs("div",{className:`flex items-center justify-between p-2.5 rounded-lg border ${t.isEntry?"bg-rose-500/10 border-rose-500/30 text-rose-300":"bg-amber-500/10 border-amber-500/30 text-amber-300"}`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-5 h-5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-[10px] font-bold",children:a+1}),e.jsxs("span",{className:"font-mono font-bold",children:[t.id===99?"default":`case ${t.id}`,': Printed "',t.label,'"']})]}),e.jsx("span",{className:`text-[11px] font-bold ${t.hasBreak?"text-purple-400":"text-rose-400"}`,children:t.hasBreak?"Hit break; -> HALTED":"No break -> Cascaded down"})]},a))})]}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{className:"text-amber-400 font-bold block mb-1",children:"The Golden Exam Rule for Output Questions:"}),"When solving switch output questions in CBSE IT-802, find the ",e.jsx("strong",{children:"initial entry point"})," where the variable matches. From that point downward, execute ",e.jsx("strong",{children:"every line"})," unconditionally until you see a ",e.jsx("code",{className:"text-purple-300 font-mono",children:"break;"}),"! Do NOT stop simply because a case label does not match."]})]})]})]})};function B(){return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8 space-y-12",children:[e.jsxs("div",{className:"max-w-6xl mx-auto space-y-4 text-center sm:text-left",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20",children:[e.jsx(h,{className:"w-4 h-4"})," CBSE Class 12 IT (Code 802) • Unit 3: Java Programming"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight",children:"Fall-Through Behavior in Java Switch Statements"}),e.jsxs("p",{className:"text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed",children:["Master how omitted ",e.jsx("code",{className:"text-purple-400 font-mono",children:"break;"})," statements cause execution to cascade through subsequent cases unconditionally, understand intentional grouping (vowels & weekdays), and predict tricky board exam outputs."]})]}),e.jsx("div",{className:"max-w-6xl mx-auto",children:e.jsx(k,{})}),e.jsx("div",{className:"max-w-6xl mx-auto",children:e.jsx(f,{content:w,title:"CBSE Class 12 IT-802: Fall-Through Behavior Revision Notes"})}),e.jsx("div",{className:"max-w-6xl mx-auto",children:e.jsx(b,{faqs:y,title:"CBSE IT-802 High-Yield Exam Questions: Fall-Through & Break",description:"Master 25 exam-tested questions on fall-through mechanics, intentional case stacking, cascaded arithmetic updates, and default fall-through traps with bilingual explanations.",defaultOpenCount:3})}),e.jsx("div",{className:"max-w-6xl mx-auto",children:e.jsx(m,{name:"Sukanta Hui",role:"Senior Vocational IT Educator & Software Architect",location:"Barrackpore, Kolkata",note:"Fall-through is the single biggest trap in CBSE switch questions! Remember: once Java enters a case, it completely stops checking case labels! If 'case 1:' has no break, Java will execute 'case 2:' even if your variable is 1! It only stops when it hits an explicit 'break;' statement or the closing brace '}'. Trace downward line-by-line without assuming early exits."})})]})}export{B as default};
