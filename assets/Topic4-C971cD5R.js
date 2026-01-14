import{r as e,j as t}from"./index-CjrfwjvR.js";import{P as n}from"./ProjectListTemplate-CWeleeDq.js";import"./prism-Cob4Ymvg.js";import"./browser-D2Wz0UH5.js";import"./prism-java-CQA27I6F.js";import"./graduation-cap-BBnWrLyy.js";const i=[{projectId:1,title:"Print First N Even Numbers",difficulty:"Moderate",concepts:["for loop","even numbers"],description:"Print the first N even numbers starting from 2.",exampleText:"First 5 even numbers",exampleOutput:"2 4 6 8 10",answer:`int num=2;
for(int i=1;i<=n;i++){
 System.out.print(num+" ");
 num+=2;
}`,learningOutcome:"Generate a number sequence using a loop."},{projectId:2,title:"Print First N Odd Numbers",difficulty:"Moderate",concepts:["for loop","odd numbers"],description:"Print the first N odd numbers.",exampleText:"First 5 odd numbers",exampleOutput:"1 3 5 7 9",answer:`int num=1;
for(int i=1;i<=n;i++){
 System.out.print(num+" ");
 num+=2;
}`,learningOutcome:"Understand arithmetic progression logic."},{projectId:3,title:"Series of Squares",difficulty:"Moderate",concepts:["for loop","square calculation"],description:"Print square of numbers from 1 to N.",exampleText:"Squares up to 4",exampleOutput:"1 4 9 16",answer:`for(int i=1;i<=n;i++)
 System.out.print((i*i)+" ");`,learningOutcome:"Apply mathematical expressions in loops."},{projectId:4,title:"Series of Cubes",difficulty:"Moderate",concepts:["for loop","cube calculation"],description:"Print cube of numbers from 1 to N.",exampleText:"Cubes up to 3",exampleOutput:"1 8 27",answer:`for(int i=1;i<=n;i++)
 System.out.print((i*i*i)+" ");`,learningOutcome:"Reinforce exponent logic."},{projectId:5,title:"Fibonacci Series",difficulty:"Moderate",concepts:["for loop","series generation"],description:"Generate Fibonacci series up to N terms.",exampleText:"First 6 Fibonacci terms",exampleOutput:"0 1 1 2 3 5",answer:`int a=0,b=1,c;
System.out.print(a+" "+b+" ");
for(int i=3;i<=n;i++){
 c=a+b;
 System.out.print(c+" ");
 a=b;
 b=c;
}`,learningOutcome:"Understand variable dependency."},{projectId:6,title:"Sum of First N Even Numbers",difficulty:"Moderate",concepts:["for loop","even logic","sum"],description:"Find sum of first N even numbers.",exampleText:"Sum of first 5 even numbers",exampleOutput:"30",answer:`int sum=0;
for(int i=1;i<=n;i++) sum+=2*i;`,learningOutcome:"Use formula-based summation."},{projectId:7,title:"Multiples of 7 Series",difficulty:"Moderate",concepts:["for loop","multiplication series"],description:"Print first N multiples of 7.",exampleText:"First 4 multiples of 7",exampleOutput:"7 14 21 28",answer:'for(int i=1;i<=n;i++) System.out.print((7*i)+" ");',learningOutcome:"Generate table series."},{projectId:8,title:"Harmonic Series",difficulty:"Moderate",concepts:["for loop","double type"],description:"Calculate sum of harmonic series up to N terms.",exampleText:"Sum of 1/1 + 1/2 + 1/3",exampleOutput:"1.8333",answer:`double sum=0;
for(int i=1;i<=n;i++) sum+=1.0/i;`,learningOutcome:"Understand floating-point division."},{projectId:9,title:"Square Star Pattern",difficulty:"Moderate",concepts:["nested loop","pattern printing"],description:"Print square star pattern of size N.",exampleText:"Square star pattern of N=3",exampleOutput:`***
***
***`,answer:`for(int i=1;i<=n;i++){
 for(int j=1;j<=n;j++) System.out.print("*");
 System.out.println();
}`,learningOutcome:"Control rows and columns."},{projectId:10,title:"Right Triangle Star Pattern",difficulty:"Moderate",concepts:["nested loop","incremental rows"],description:"Print right angled triangle pattern.",exampleText:"Right triangle of N=4",exampleOutput:`*
**
***
****`,answer:`for(int i=1;i<=n;i++){
 for(int j=1;j<=i;j++) System.out.print("*");
 System.out.println();
}`,learningOutcome:"Understand nested loop dependency."},{projectId:11,title:"Inverted Star Triangle",difficulty:"Moderate",concepts:["nested loop","reverse rows"],description:"Print inverted right triangle.",exampleText:"Inverted triangle of N=4",exampleOutput:`****
***
**
*`,answer:`for(int i=n;i>=1;i--){
 for(int j=1;j<=i;j++) System.out.print("*");
 System.out.println();
}`,learningOutcome:"Apply reverse loop."},{projectId:12,title:"Number Triangle",difficulty:"Moderate",concepts:["nested loop","number printing"],description:"Print number triangle.",exampleText:"Triangle of N=3",exampleOutput:`1
1 2
1 2 3`,answer:`for(int i=1;i<=n;i++){
 for(int j=1;j<=i;j++) System.out.print(j+" ");
 System.out.println();
}`,learningOutcome:"Use inner loop counters."},{projectId:13,title:"Same Number Row Pattern",difficulty:"Moderate",concepts:["nested loop","row logic"],description:"Print rows with same numbers.",exampleText:"Rows with same number",exampleOutput:`1
2 2
3 3 3`,answer:`for(int i=1;i<=n;i++){
 for(int j=1;j<=i;j++) System.out.print(i+" ");
 System.out.println();
}`,learningOutcome:"Understand row-based output."},{projectId:14,title:"Floyd's Triangle",difficulty:"Moderate",concepts:["nested loop","continuous counter"],description:"Print Floyd’s triangle.",exampleText:"Floyd's triangle of N=3",exampleOutput:`1
2 3
4 5 6`,answer:`int num=1;
for(int i=1;i<=n;i++){
 for(int j=1;j<=i;j++) System.out.print(num+++" ");
 System.out.println();
}`,learningOutcome:"Maintain external counter."},{projectId:15,title:"Star Pyramid",difficulty:"Moderate",concepts:["nested loop","spacing"],description:"Print centered star pyramid.",exampleText:"Pyramid of N=3",exampleOutput:`  *
 ***
*****`,answer:`for(int i=1;i<=n;i++){
 for(int s=n;s>i;s--) System.out.print(" ");
 for(int j=1;j<=2*i-1;j++) System.out.print("*");
 System.out.println();
}`,learningOutcome:"Apply alignment logic."},{projectId:16,title:"Inverted Star Pyramid",difficulty:"Moderate",concepts:["nested loop","reverse spacing"],description:"Print inverted star pyramid.",exampleText:"Inverted pyramid of N=3",exampleOutput:`*****
 ***
  *`,answer:`for(int i=n;i>=1;i--){
 for(int s=n;s>i;s--) System.out.print(" ");
 for(int j=1;j<=2*i-1;j++) System.out.print("*");
 System.out.println();
}`,learningOutcome:"Reverse row-spacing logic."},{projectId:17,title:"Hollow Square Pattern",difficulty:"Moderate",concepts:["nested loop","boundary check"],description:"Print hollow square star pattern.",exampleText:"Hollow square of N=4",exampleOutput:`****
*  *
*  *
****`,answer:`for(int i=1;i<=n;i++){
 for(int j=1;j<=n;j++){
  if(i==1||i==n||j==1||j==n) System.out.print("*");
  else System.out.print(" ");
 }
 System.out.println();
}`,learningOutcome:"Apply boundary conditions."},{projectId:18,title:"Alternate Square Series",difficulty:"Moderate",concepts:["for loop","step increment"],description:"Print square of alternate numbers.",exampleText:"Alternate squares up to 9",exampleOutput:"1 9 25 49 81",answer:'for(int i=1;i<=n;i+=2) System.out.print((i*i)+" ");',learningOutcome:"Use custom increments."},{projectId:19,title:"Series 1, 11, 111",difficulty:"Moderate",concepts:["for loop","number formation"],description:"Generate series 1, 11, 111 up to N terms.",exampleText:"First 4 terms",exampleOutput:"1 11 111 1111",answer:`int num=0;
for(int i=1;i<=n;i++){
 num=num*10+1;
 System.out.print(num+" ");
}`,learningOutcome:"Build numbers iteratively."},{projectId:20,title:"Reverse Number Triangle",difficulty:"Moderate",concepts:["nested loop","reverse column"],description:"Print reverse number triangle.",exampleText:"Reverse triangle of N=4",exampleOutput:`4 3 2 1
3 2 1
2 1
1`,answer:`for(int i=n;i>=1;i--){
 for(int j=i;j>=1;j--)
System.out.print(j+" ");
 System.out.println();
}`,learningOutcome:"Combine descending loops."}],r={projects:i};class m extends e.Component{render(){return t.jsx(n,{title:"ICSE Class IX – Java Project Work (BlueJ)",subtitle:"These projects are designed strictly according to the ICSE Class IX Java syllabus and are ideal for practical exams and viva preparation.",teacherNote:"Students should explain the conceptual examples in viva and then convert them into complete BlueJ programs during practical exams.",projects:r.projects})}}export{m as default};
