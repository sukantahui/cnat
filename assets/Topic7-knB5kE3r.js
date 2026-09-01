import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const r=`/**\r
 * Java Core Tutorial - Module 009_002: Built-in Functional Interfaces\r
 * Topic 7: Predicate Chaining: and(), or(), negate(), and Predicate.isEqual()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.List;\r
import java.util.function.Predicate;\r
\r
class TaxAccount {\r
    final String panNumber;\r
    final double income;\r
    final boolean hasAuditNotice;\r
\r
    public TaxAccount(String panNumber, double income, boolean hasAuditNotice) {\r
        this.panNumber = panNumber;\r
        this.income = income;\r
        this.hasAuditNotice = hasAuditNotice;\r
    }\r
}\r
\r
public class PredicateChainingOperatorsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: Predicate CHAINING (and, or, negate, isEqual) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<TaxAccount> accounts = List.of(\r
                new TaxAccount("ABCDE1234F", 1200000.0, false),\r
                new TaxAccount("WXYZ9876K", 450000.0, true),\r
                new TaxAccount("PQRS5555L", 850000.0, true),\r
                new TaxAccount("SPECIAL999", 5000000.0, false)\r
        );\r
\r
        // Core Micro-Predicates:\r
        Predicate<TaxAccount> isHighIncome = acc -> acc.income > 1000000.0;\r
        Predicate<TaxAccount> hasNotice = acc -> acc.hasAuditNotice;\r
\r
        // 1. AND Composition: High Income AND Has Notice:\r
        Predicate<TaxAccount> highIncomeWithNotice = isHighIncome.and(hasNotice);\r
\r
        // 2. OR Composition: High Income OR Has Notice:\r
        Predicate<TaxAccount> highRiskAccount = isHighIncome.or(hasNotice);\r
\r
        // 3. NEGATE Composition (NOT): Clean Record (NOT having audit notice):\r
        Predicate<TaxAccount> isCleanRecord = hasNotice.negate();\r
\r
        // 4. Predicate.isEqual() Static Factory:\r
        Predicate<String> isBarrackporePan = Predicate.isEqual("SPECIAL999");\r
\r
        System.out.println(">>> 1. High Risk Accounts (High Income OR Notice):");\r
        accounts.stream().filter(highRiskAccount).forEach(a -> System.out.println("  [Risk] PAN: " + a.panNumber));\r
\r
        System.out.println("\\n>>> 2. Clean Record Accounts (Negate Notice):");\r
        accounts.stream().filter(isCleanRecord).forEach(a -> System.out.println("  [Clean] PAN: " + a.panNumber));\r
\r
        System.out.println("\\n>>> 3. Specific PAN match check: " + isBarrackporePan.test("SPECIAL999"));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_002: Built-in Functional Interfaces\r
Topic 7: Predicate Chaining\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PREDICATE CHAINING:\r
   - 'p1.and(p2)': Short-circuiting logical AND (&&).\r
   - 'p1.or(p2)': Short-circuiting logical OR (||).\r
   - 'p.negate()': Logical NOT (!).\r
   - 'Predicate.isEqual(obj)': Checks null-safe equality via 'Objects.equals()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"How do 'and()', 'or()', 'negate()', and 'Predicate.isEqual()' combine conditional validation logic in Java?",shortAnswer:"1. 'p1.and(p2)': Returns a short-circuiting logical AND predicate that evaluates true only if both p1 and p2 are true. 2. 'p1.or(p2)': Returns a short-circuiting logical OR predicate that evaluates true if either p1 or p2 is true. 3. 'p.negate()': Returns a logical NOT predicate that inverts the result of p. 4. 'Predicate.isEqual(target)': A static factory method that returns a predicate testing if an object equals the target using 'Objects.equals()'.",explanation:"Comprehensive guide to Predicate default and static methods in Java 8.",hint:"and(), or(), negate() form boolean logic; Predicate.isEqual() checks equality using Objects.equals().",level:"Intermediate",codeExample:"Predicate<Student> honors = isEnrolled.and(hasHighMarks).and(isFeePaid.negate());"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_002 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Predicate Chaining"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Predicate"})," Chaining: ",e.jsx("code",{className:"text-sky-400 font-mono",children:"and()"}),", ",e.jsx("code",{className:"text-purple-400 font-mono",children:"or()"}),", ",e.jsx("code",{className:"text-rose-400 font-mono",children:"negate()"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"isEqual()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Construct complex Boolean evaluation trees: chaining discrete predicates with short-circuiting logical operators, negating conditions, and testing null-safe object equality."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"PredicateChainingOperatorsDemo.java",highlightLines:[7,10,31,32,35,38,41,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Predicate Chaining FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 009_002 Topic 7: Predicate Chaining",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_002_topic7_predicate_chaining_note.txt"})}),e.jsx(i,{note:"Instead of writing messy nested if-else statements with &&, ||, and ! operators, write clean named micro-predicates and chain them together: 'isAdult.and(hasPassport).and(isVisaApproved)'! Readable like plain English! — Sukanta Hui"})]})}export{x as default};
