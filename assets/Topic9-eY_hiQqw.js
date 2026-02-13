import{r as l,j as e}from"./index-Do7ncMju.js";import{c as t}from"./clsx-B-dksMZM.js";const h=()=>{const[d,n]=l.useState(null),[s,a]=l.useState(1),[i,r]=l.useState(null),o=new Date().getFullYear()-1998;return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 px-4 py-8 transition-colors duration-500",children:[e.jsx("style",{jsx:!0,children:`
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
        
        @keyframes columnHighlight {
          0% {
            fill: #4b5563;
          }
          50% {
            fill: #3b82f6;
          }
          100% {
            fill: #4b5563;
          }
        }
        
        @keyframes recordFlow {
          0% {
            transform: translateX(-50px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(400px);
            opacity: 0;
          }
        }
        
        @keyframes dataTransform {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.3);
          }
        }
        
        @keyframes reportGenerate {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}),e.jsx("header",{className:"max-w-6xl mx-auto mb-12",children:e.jsxs("div",{className:"animate-[fadeInUp_0.8s_ease-out] motion-safe:animate-[fadeInUp_0.8s_ease-out]",children:[e.jsx("span",{className:"inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4",children:"Topic 10: Data Processing Mastery"}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 leading-tight",children:e.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",children:"awk for Column-Based Processing and Reports"})}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl",children:"Transform raw data into meaningful insights by mastering awk's powerful column processing and reporting capabilities."})]})}),e.jsxs("main",{className:"max-w-6xl mx-auto",children:[e.jsx("section",{className:"mb-12",children:e.jsx("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.1s_both] motion-safe:animate-[fadeInUp_0.8s_ease-out_0.1s_both]",children:e.jsxs("div",{className:t("bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-all duration-500",d==="intro"?"shadow-2xl shadow-blue-500/20 dark:shadow-blue-500/10 -translate-y-1":"hover:shadow-xl"),onMouseEnter:()=>n("intro"),onMouseLeave:()=>n(null),children:[e.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[e.jsx("div",{className:"p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl",children:e.jsx("svg",{className:"w-8 h-8 text-blue-600 dark:text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:"The Power of awk for Data Processing"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed",children:"awk is a complete programming language designed for pattern scanning and text processing. Its real strength lies in processing structured, column-based data and generating formatted reports."})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400",children:"Basic Syntax"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm",children:`awk 'pattern { action }' input_file
awk -F: '{print $1}' /etc/passwd  # Field separator
awk '{print NF, NR, $0}' file     # Built-in variables`})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400",children:"When to Use awk"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-purple-500 rounded-full"}),"Processing CSV/TSV files"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-purple-500 rounded-full"}),"Generating summary reports"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 bg-purple-500 rounded-full"}),"Data validation and cleaning"]})]})]})]})]})})}),e.jsx("section",{className:"mb-12",children:e.jsxs("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.2s_both] motion-safe:animate-[fadeInUp_0.8s_ease-out_0.2s_both]",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8 text-center",children:"Understanding awk's Record & Field Model"}),e.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-green-600 dark:text-green-400",children:"Records & Fields"}),e.jsxs("p",{className:"mb-4",children:["awk processes data ",e.jsx("strong",{children:"record by record"})," (lines by default). Each record is split into",e.jsx("strong",{children:" fields"})," (columns). The magic happens with field variables."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:t("p-4 text-center rounded-lg transition-all duration-300 cursor-pointer",s===1?"bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500":"bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"),onClick:()=>a(1),onMouseEnter:()=>a(1),children:[e.jsx("div",{className:"font-mono text-lg text-blue-500",children:"$0"}),e.jsx("div",{className:"text-sm mt-2",children:"Entire record"})]}),e.jsxs("div",{className:t("p-4 text-center rounded-lg transition-all duration-300 cursor-pointer",s===2?"bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-500":"bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"),onClick:()=>a(2),onMouseEnter:()=>a(2),children:[e.jsx("div",{className:"font-mono text-lg text-purple-500",children:"$1"}),e.jsx("div",{className:"text-sm mt-2",children:"First field"})]}),e.jsxs("div",{className:t("p-4 text-center rounded-lg transition-all duration-300 cursor-pointer",s===3?"bg-green-100 dark:bg-green-900/30 border-2 border-green-500":"bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"),onClick:()=>a(3),onMouseEnter:()=>a(3),children:[e.jsx("div",{className:"font-mono text-lg text-green-500",children:"NF"}),e.jsx("div",{className:"text-sm mt-2",children:"Field count"})]})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-900 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Built-in Variables:"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("code",{className:"text-blue-500",children:"NR"}),": Current record number"]}),e.jsxs("div",{children:[e.jsx("code",{className:"text-purple-500",children:"NF"}),": Number of fields"]}),e.jsxs("div",{children:[e.jsx("code",{className:"text-green-500",children:"FS"}),": Field separator"]}),e.jsxs("div",{children:[e.jsx("code",{className:"text-orange-500",children:"OFS"}),": Output field separator"]})]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-orange-600 dark:text-orange-400",children:"awk Program Structure"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm",children:`BEGIN { 
    # Initialize variables
    FS = ",";          # Set field separator
    total = 0;         # Initialize counter
    print "Report Start";
}

# Main processing
{
    # Process each record
    total += $3;       # Sum column 3
    if ($2 > 50)       # Conditional logic
        print $1, $2;  # Print specific fields
}

END {
    # Generate final report
    print "Total:", total;
    print "Average:", total/NR;
}`})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",children:[e.jsx("h3",{className:"text-xl font-bold mb-6 text-center",children:"Visualizing awk Processing"}),e.jsxs("div",{className:"relative h-80",children:[e.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 400 320",className:"overflow-visible",children:[e.jsxs("g",{transform:"translate(20, 40)",children:[e.jsx("text",{x:"0",y:"0",fill:"#9ca3af",fontSize:"12",children:"Records (Lines):"}),e.jsxs("g",{transform:"translate(0, 20)",children:[e.jsx("rect",{x:"0",y:"0",width:"360",height:"30",rx:"4",fill:"#1f2937"}),e.jsx("text",{x:"10",y:"20",fill:"white",fontSize:"12",dy:".3em",children:"John 85 92 78 Math"}),e.jsx("rect",{x:"0",y:"40",width:"360",height:"30",rx:"4",fill:"#1f2937"}),e.jsx("text",{x:"10",y:"60",fill:"white",fontSize:"12",dy:".3em",children:"Sarah 92 88 95 Science"}),e.jsx("rect",{x:"0",y:"80",width:"360",height:"30",rx:"4",fill:"#1f2937"}),e.jsx("text",{x:"10",y:"100",fill:"white",fontSize:"12",dy:".3em",children:"Mike 78 85 90 History"}),e.jsx("rect",{x:"0",y:s===1?0:s===2?40:80,width:"360",height:"30",rx:"4",fill:"none",stroke:"#3b82f6",strokeWidth:"2",strokeDasharray:"5,5"})]}),e.jsxs("g",{transform:"translate(0, 130)",children:[e.jsx("text",{x:"0",y:"0",fill:"#9ca3af",fontSize:"12",children:"Fields (Columns):"}),e.jsx("line",{x1:"50",y1:"20",x2:"50",y2:"80",stroke:"#4b5563",strokeDasharray:"3,3"}),e.jsx("line",{x1:"100",y1:"20",x2:"100",y2:"80",stroke:"#4b5563",strokeDasharray:"3,3"}),e.jsx("line",{x1:"150",y1:"20",x2:"150",y2:"80",stroke:"#4b5563",strokeDasharray:"3,3"}),e.jsx("line",{x1:"200",y1:"20",x2:"200",y2:"80",stroke:"#4b5563",strokeDasharray:"3,3"}),e.jsxs("g",{transform:"translate(25, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"50",height:"30",rx:"4",fill:s===1?"#3b82f6":"#374151",className:"transition-all duration-300"}),e.jsx("text",{x:"25",y:"15",textAnchor:"middle",fill:"white",fontSize:"12",dy:".3em",children:"$1"})]}),e.jsxs("g",{transform:"translate(75, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"50",height:"30",rx:"4",fill:s===2?"#8b5cf6":"#4b5563",className:"transition-all duration-300"}),e.jsx("text",{x:"25",y:"15",textAnchor:"middle",fill:"white",fontSize:"12",dy:".3em",children:"$2"})]}),e.jsxs("g",{transform:"translate(125, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"50",height:"30",rx:"4",fill:s===3?"#10b981":"#4b5563",className:"transition-all duration-300"}),e.jsx("text",{x:"25",y:"15",textAnchor:"middle",fill:"white",fontSize:"12",dy:".3em",children:"$3"})]})]}),e.jsxs("g",{transform:"translate(0, 200)",children:[e.jsx("rect",{x:"0",y:"0",width:"80",height:"40",rx:"8",fill:"#059669"}),e.jsx("text",{x:"40",y:"20",textAnchor:"middle",fill:"white",fontSize:"12",dy:".3em",children:"awk Engine"}),e.jsx("circle",{cx:"120",cy:"20",r:"4",fill:"#f59e0b",children:e.jsx("animate",{attributeName:"opacity",values:"0.3;1;0.3",dur:"1s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"130",cy:"20",r:"4",fill:"#f59e0b",children:e.jsx("animate",{attributeName:"opacity",values:"0.3;1;0.3",dur:"1s",repeatCount:"indefinite",begin:"0.2s"})}),e.jsx("circle",{cx:"140",cy:"20",r:"4",fill:"#f59e0b",children:e.jsx("animate",{attributeName:"opacity",values:"0.3;1;0.3",dur:"1s",repeatCount:"indefinite",begin:"0.4s"})}),e.jsxs("g",{transform:"translate(180, 0)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"40",rx:"8",fill:"#7c3aed"}),e.jsx("text",{x:"90",y:"20",textAnchor:"middle",fill:"white",fontSize:"12",dy:".3em",children:"Formatted Report"})]})]})]}),e.jsx("path",{d:"M90,240 Q120,240 120,210 T150,180 T180,180 T210,180 T240,180",fill:"none",stroke:"url(#gradient)",strokeWidth:"2",strokeDasharray:"5,5"}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"#8b5cf6"}),e.jsx("stop",{offset:"100%",stopColor:"#3b82f6"})]})})]}),e.jsx("div",{className:"text-center mt-4 text-sm text-gray-600 dark:text-gray-400",children:"Click/hover on field boxes to see how awk processes different columns"})]})]})]})]})}),e.jsx("section",{className:"mb-12",children:e.jsxs("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.3s_both] motion-safe:animate-[fadeInUp_0.8s_ease-out_0.3s_both]",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8",children:"Practical Applications in Education"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:t("bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-500",i==="marks"?"shadow-xl shadow-green-500/20 -translate-y-1":"hover:shadow-xl"),onMouseEnter:()=>r("marks"),onMouseLeave:()=>r(null),children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"p-2 bg-green-100 dark:bg-green-900/30 rounded-lg",children:e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})}),e.jsx("h3",{className:"text-xl font-bold",children:"CNAT Student Marks Processing"})]}),e.jsxs("p",{className:"mb-4 text-gray-600 dark:text-gray-300",children:["Processing marks for students at ",e.jsx("strong",{children:"CNAT Barrackpore"})," -",e.jsx("strong",{children:"Swadeep"}),", ",e.jsx("strong",{children:"Ritaja"}),", ",e.jsx("strong",{children:"Abhronila"}),", and others."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2 text-sm text-gray-500 dark:text-gray-400",children:"Input Data (marks.txt):"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs",children:`Swadeep Sharma,85,92,78,Maths
Ritaja Das,92,88,95,Science
Abhronila Roy,78,85,90,History
Debangshu Sen,65,72,68,English
Roshni Verma,95,96,98,Computer`})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2 text-sm text-gray-500 dark:text-gray-400",children:"awk Report Generation:"}),e.jsx("pre",{className:"bg-blue-900/30 text-blue-100 p-3 rounded-lg overflow-x-auto text-xs",children:`awk -F, 'BEGIN {
    print "CNAT Student Performance Report"
    print "================================="
    printf "%-20s %-8s %-8s %-8s\\n", "Student", "Total", "Average", "Grade"
}
{
    total = $2 + $3 + $4
    avg = total / 3
    grade = (avg >= 90) ? "A" : (avg >= 80) ? "B" : (avg >= 70) ? "C" : "D"
    printf "%-20s %-8d %-8.2f %-8s\\n", $1, total, avg, grade
    sum += total
}
END {
    print "================================="
    printf "Average Total Marks: %.2f\\n", sum/NR
}' marks.txt`})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2 text-sm text-gray-500 dark:text-gray-400",children:"Output Report:"}),e.jsx("pre",{className:"bg-green-900/30 text-green-100 p-3 rounded-lg overflow-x-auto text-xs",children:`CNAT Student Performance Report
=================================
Student              Total    Average  Grade   
Swadeep Sharma       255      85.00    B       
Ritaja Das           275      91.67    A       
Abhronila Roy        253      84.33    B       
Debangshu Sen        205      68.33    D       
Roshni Verma         289      96.33    A       
=================================
Average Total Marks: 255.40`})]})]})]}),e.jsxs("div",{className:t("bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-500",i==="attendance"?"shadow-xl shadow-purple-500/20 -translate-y-1":"hover:shadow-xl"),onMouseEnter:()=>r("attendance"),onMouseLeave:()=>r(null),children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg",children:e.jsx("svg",{className:"w-6 h-6 text-purple-600 dark:text-purple-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 2a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"})})}),e.jsx("h3",{className:"text-xl font-bold",children:"Attendance Analysis Report"})]}),e.jsxs("p",{className:"mb-4 text-gray-600 dark:text-gray-300",children:["Analyzing attendance records from ",e.jsx("strong",{children:"CNAT Naihati"})," and ",e.jsx("strong",{children:"CNAT Shyamnagar"})," centers."]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2 text-sm text-gray-500 dark:text-gray-400",children:"Complex Data Processing:"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs",children:`awk -F, '{
    # Calculate attendance percentage
    percentage = ($3/$4) * 100
    
    # Categorize students
    if (percentage >= 75) {
        category = "Good"
        good_count++
    } else if (percentage >= 50) {
        category = "Average"
        avg_count++
    } else {
        category = "Poor"
        poor_count++
    }
    
    # Store for sorting
    students[NR] = $1
    percentages[NR] = percentage
    categories[NR] = category
    center[NR] = $2
}
END {
    # Generate summary report
    print "Attendance Analysis Report"
    print "=========================="
    print ""
    print "Category Summary:"
    print "Good (" good_count " students): " good_count/NR*100 "%"
    print "Average (" avg_count " students): " avg_count/NR*100 "%"
    print "Poor (" poor_count " students): " poor_count/NR*100 "%"
    print ""
    print "Students Needing Attention:"
    for (i=1; i<=NR; i++) {
        if (categories[i] == "Poor") {
            printf "%-20s (Center: %s): %.1f%%\\n", 
                   students[i], center[i], percentages[i]
        }
    }
}' attendance.csv`})]}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Professional Insight:"})," awk can handle complex logic, arrays, and generate multi-section reports. Perfect for administrative tasks at CNAT centers."]})})]})]})]})]})}),e.jsx("section",{className:"mb-12",children:e.jsxs("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.4s_both] motion-safe:animate-[fadeInUp_0.8s_ease-out_0.4s_both]",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8",children:"Advanced awk Features for Reports"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",children:[e.jsx("div",{className:"text-blue-500 mb-4",children:e.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z",clipRule:"evenodd"})})}),e.jsx("h3",{className:"font-bold text-lg mb-3",children:"Aggregation Functions"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs mt-2",children:`# Sum, Average, Min, Max
awk '{sum+=$3} END{print "Sum:", sum}'
awk '{if(min==""){min=$3}; 
      if($3<min){min=$3}; 
      if($3>max){max=$3}} 
     END{print "Min:", min, "Max:", max}'`})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",children:[e.jsx("div",{className:"text-green-500 mb-4",children:e.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",clipRule:"evenodd"})})}),e.jsx("h3",{className:"font-bold text-lg mb-3",children:"Formatting with printf"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs mt-2",children:`# Column formatting
printf "%-20s %10.2f %8s\\n", name, salary, grade

# Format Specifiers:
# %s - String
# %d - Integer
# %f - Float (.2 for 2 decimals)
# %-  - Left align
# %   - Right align`})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",children:[e.jsx("div",{className:"text-purple-500 mb-4",children:e.jsx("svg",{className:"w-8 h-8",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z",clipRule:"evenodd"})})}),e.jsx("h3",{className:"font-bold text-lg mb-3",children:"Arrays & Grouping"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs mt-2",children:`# Group by department
awk -F, '{dept[$5]++} 
        END{for(d in dept) 
            print d ":", dept[d] " students"}' 

# Sum by category
awk '{category[$4]+=$3} 
     END{for(c in category) 
         print c, category[c]}'`})]})]})]})}),e.jsx("section",{className:"mb-12",children:e.jsx("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.5s_both] motion-safe:animate-[fadeInUp_0.8s_ease-out_0.5s_both]",children:e.jsxs("div",{className:"bg-gradient-to-r from-red-500/10 to-orange-500/10 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-8",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx("div",{className:"p-3 bg-red-100 dark:bg-red-900/30 rounded-xl",children:e.jsx("svg",{className:"w-8 h-8 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.342 16.5c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsx("h2",{className:"text-2xl font-bold",children:"Common awk Pitfalls & Solutions"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-600 dark:text-red-400 mb-2",children:"Missing Field Separator"}),e.jsxs("p",{className:"text-sm",children:["Not setting ",e.jsx("code",{children:"-F"})," for CSV files. Default is whitespace, not commas."]}),e.jsxs("pre",{className:"bg-red-900/30 text-red-100 p-2 rounded mt-2 text-xs",children:["# WRONG: awk '{print $1,$2}' data.csv","# CORRECT: awk -F, '{print $1,$2}' data.csv"]})]}),e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-600 dark:text-red-400 mb-2",children:"String vs Number Issues"}),e.jsx("p",{className:"text-sm",children:"awk treats uninitialized variables as 0 or empty string. Initialize variables in BEGIN block."}),e.jsxs("pre",{className:"bg-gray-900 text-gray-100 p-2 rounded mt-2 text-xs",children:["BEGIN {total=0}  # Always initialize","{total += $3}    # Now it works correctly"]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-600 dark:text-red-400 mb-2",children:"printf Format Errors"}),e.jsx("p",{className:"text-sm",children:"Mismatched format specifiers and arguments cause runtime errors or garbage output."}),e.jsx("pre",{className:"bg-red-900/30 text-red-100 p-2 rounded mt-2 text-xs",children:'# WRONG: printf "%d %s", name, score # CORRECT: printf "%s %d", name, score'})]}),e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-600 dark:text-red-400 mb-2",children:"Array Index Confusion"}),e.jsxs("p",{className:"text-sm",children:["awk arrays are associative. ",e.jsx("code",{children:"for(i in array)"})," doesn't guarantee order. Use ",e.jsx("code",{children:"asort()"})," for sorting."]}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-2 rounded mt-2 text-xs",children:"# Process in random order for (dept in departments) print dept, departments[dept]"})]})]})]})]})})}),e.jsx("section",{className:"mb-12",children:e.jsxs("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.6s_both] motion-safe:animate-[fadeInUp_0.8s_ease-out_0.6s_both]",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8",children:"Professional awk Best Practices"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",children:[e.jsx("h3",{className:"font-bold text-lg mb-4 text-green-600 dark:text-green-400",children:"✓ Script Organization"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"Use BEGIN block for initialization (FS, OFS, variables)"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"Put complex logic in separate awk script files (.awk)"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"Comment complex operations for maintenance"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",children:[e.jsx("h3",{className:"font-bold text-lg mb-4 text-blue-600 dark:text-blue-400",children:"✓ Performance & Efficiency"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-blue-500 mt-1",children:"•"}),e.jsx("span",{children:"Process files once, store in arrays if needed for END"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-blue-500 mt-1",children:"•"}),e.jsx("span",{children:"Use next statement to skip unnecessary processing"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-blue-500 mt-1",children:"•"}),e.jsx("span",{children:"For large files, avoid storing all data in memory"})]})]})]})]}),e.jsxs("div",{className:"mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6",children:[e.jsx("h3",{className:"font-bold text-lg mb-4 text-purple-600 dark:text-purple-400",children:"Industry Reporting Pattern"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm",children:`# Standard report template
awk -F, 'BEGIN {
    # Header
    print "=" x 60
    print "REPORT TITLE"
    print "Generated: " strftime("%Y-%m-%d %H:%M:%S")
    print "=" x 60
    print ""
    
    # Column headers
    printf "%-20s %10s %10s %10s\\n", "Name", "Value1", "Value2", "Total"
    printf "%-20s %10s %10s %10s\\n", "----", "------", "------", "-----"
    
    # Initialize counters
    grand_total = 0
}

# Data processing
{
    # Business logic
    total = $2 + $3
    grand_total += total
    
    # Format output
    printf "%-20s %10.2f %10.2f %10.2f\\n", $1, $2, $3, total
}

END {
    # Summary section
    print ""
    print "-" x 60
    printf "Grand Total: %30.2f\\n", grand_total
    printf "Average: %34.2f\\n", grand_total/NR
    print "=" x 60
}' data.csv`})]})]})}),e.jsx("section",{className:"mb-12",children:e.jsx("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.7s_both] motion-safe:animate-[fadeInUp_0.8s_ease-out_0.7s_both]",children:e.jsxs("div",{className:"bg-gradient-to-r from-green-500/10 to-emerald-500/10 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"What Students Should Remember"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-lg mb-4 text-green-600 dark:text-green-400",children:"✓ Core Concepts"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mt-0.5",children:"1"}),e.jsxs("span",{children:[e.jsx("code",{children:"$0"})," = entire record, ",e.jsx("code",{children:"$1"}),", ",e.jsx("code",{children:"$2"}),"... = fields"]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mt-0.5",children:"2"}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"-F"})," to set field separator (CSV: ",e.jsx("code",{children:"-F,"}),")"]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mt-0.5",children:"3"}),e.jsxs("span",{children:[e.jsx("code",{children:"BEGIN"})," for setup, main block for processing, ",e.jsx("code",{children:"END"})," for summary"]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-lg mb-4 text-emerald-600 dark:text-emerald-400",children:"✓ Reporting Skills"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm mt-0.5",children:"4"}),e.jsxs("span",{children:["Use ",e.jsx("code",{children:"printf"})," for formatted output (not ",e.jsx("code",{children:"print"}),")"]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm mt-0.5",children:"5"}),e.jsxs("span",{children:["Initialize variables in ",e.jsx("code",{children:"BEGIN"})," block"]})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm mt-0.5",children:"6"}),e.jsx("span",{children:"Test with sample data before processing large files"})]})]})]})]})]})})}),e.jsx("section",{className:"mb-12",children:e.jsx("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.8s_both] motion-safe:animate-[fadeInUp_0.8s_ease-out_0.8s_both]",children:e.jsx("div",{className:"bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-start gap-6",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center",children:e.jsx("span",{className:"text-white text-2xl font-bold",children:"SH"})})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("svg",{className:"w-6 h-6 text-blue-600 dark:text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})}),e.jsx("h2",{className:"text-2xl font-bold",children:"Teacher's Note"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"font-bold text-lg mb-2",children:"Teaching awk: From Data to Decisions"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-4 leading-relaxed",children:["When teaching awk at ",e.jsx("strong",{children:"CNAT Ichapur"})," and ",e.jsx("strong",{children:"CNAT Barrackpore"}),", I emphasize that awk isn't just a command—it's a ",e.jsx("strong",{children:"data-to-decisions tool"}),". Students like ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Ritaja"})," learn best by processing real student data from our centers."]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-bold text-blue-700 dark:text-blue-300 mb-2",children:"Teaching Strategy:"}),e.jsxs("p",{className:"text-sm",children:["Start with simple column extraction (",e.jsx("code",{children:"awk '{print $1, $3}'"}),"), progress to calculations (",e.jsx("code",{children:"awk '{sum+=$3} END{print sum}'"}),"), then to formatted reports. Always use actual CNAT data—it makes learning relevant and demonstrates real-world impact."]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Sukanta Hui"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"sukantahui@codernaccotax.co.in"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:[o,"+ years experience"]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold mb-1",children:"Expertise:"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Programming Languages, RDBMS, Operating Systems, Web Development"})]})]})]})]})})})}),e.jsx("section",{children:e.jsx("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.9s_both] motion-safe:animate-[fadeInUp_0.8s_ease-out_0.9s_both]",children:e.jsxs("div",{className:"bg-gradient-to-r from-yellow-500/10 to-amber-500/10 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-2xl p-8",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx("div",{className:"p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl",children:e.jsx("svg",{className:"w-8 h-8 text-yellow-600 dark:text-yellow-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h1m0 0h-1m1 0v4m0 0l2 2m-2-2l-2 2M9 7h6m4 0a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h2m4 0V5a1 1 0 00-1-1H8a1 1 0 00-1 1v2h6z"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Think About This..."}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Developing data analysis thinking"})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-amber-600 dark:text-amber-400 mb-2",children:"Observe Carefully:"}),e.jsxs("p",{className:"text-sm",children:["How does awk handle empty fields in a CSV file? Try processing a file where",e.jsx("strong",{children:"Debangshu"}),"'s record has missing marks in some subjects."]})]}),e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-amber-600 dark:text-amber-400 mb-2",children:"Try Changing This:"}),e.jsx("p",{className:"text-sm",children:"Modify the student report to show percentage instead of total marks. How would you handle different maximum marks for different subjects?"})]})]}),e.jsxs("div",{className:"bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-amber-600 dark:text-amber-400 mb-2",children:"Consider This Scenario:"}),e.jsxs("p",{className:"text-sm mb-3",children:["At ",e.jsx("strong",{children:"CNAT Shyamnagar"}),", you need to process exam results from 5 different subjects for 200 students and generate:"]}),e.jsxs("ul",{className:"text-sm space-y-1 mb-3",children:[e.jsx("li",{children:"• Individual student report cards"}),e.jsx("li",{children:"• Class-wise subject averages"}),e.jsx("li",{children:"• Top 10 performers list"}),e.jsx("li",{children:"• Subject-wise pass percentage"})]}),e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Challenge:"})," Design an awk script that generates all these reports in one pass through the data file. Think about data structures and memory usage."]})]})]})]})})})]}),e.jsx("footer",{className:"max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"text-center text-gray-500 dark:text-gray-400 text-sm",children:[e.jsx("p",{children:"Topic 10: awk for Column-Based Processing and Reports • Next: Built-in Variables in awk"}),e.jsx("p",{className:"mt-2",children:"Interactive Learning System • Data Processing Mastery • Designed for CNAT Computer Centers"})]})})]})};export{h as default};
