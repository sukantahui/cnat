import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 003_006: Regular Expressions (java.util.regex)\r
 * Topic 14: Regex Performance Cautions: Catastrophic Backtracking & ReDoS Security (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.regex;\r
\r
import java.util.regex.Matcher;\r
import java.util.regex.Pattern;\r
\r
public class RedosSecurityAndCatastrophicBacktrackingDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: ReDoS SECURITY & BACKTRACKING CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. WHAT IS CATASTROPHIC BACKTRACKING (ReDoS - Regular Expression Denial of Service)?");\r
        System.out.println("  - Occurs when nested quantifiers like '(a+)+$' encounter non-matching input ('aaaaaaaaaaaaX').");\r
        System.out.println("  - The NFA regex engine tries 2^N permutation paths, causing CPU to spike to 100% and freezing the server!");\r
\r
        // 2. DEFENSIVE MITIGATION 1: Using Possessive Quantifiers (++ or *+)\r
        // Possessive quantifiers NEVER backtrack:\r
        Pattern safePossessivePattern = Pattern.compile("([a-z]++)++$");\r
        String evilInput = "aaaaaaaaaaaaaaaaaaaaaaaaaaaa!";\r
\r
        long start = System.currentTimeMillis();\r
        boolean matchResult = safePossessivePattern.matcher(evilInput).matches();\r
        long elapsed = System.currentTimeMillis() - start;\r
\r
        System.out.println("\\n>>> 2. Testing Possessive Quantifier with Evil Input:");\r
        System.out.printf("  Execution Time: %d ms (Instant rejection! Zero CPU freeze!)%n", elapsed);\r
        System.out.println("  Match Result  : " + matchResult);\r
\r
        System.out.println("\\n>>> 3. THE 3 GOLDEN RULES FOR SAFE REGEX:");\r
        System.out.println("  1. NEVER nest quantifiers: avoid (a+)+ or (.*a)*");\r
        System.out.println("  2. Use Possessive Quantifiers (++) or Atomic Groups when appropriate.");\r
        System.out.println("  3. Set strict maximum character length constraints on user inputs before regex evaluation!");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 003_006 REGULAR EXPRESSIONS (PATTERN & MATCHER) 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_006: Regular Expressions (Regex)\r
Topic 14: ReDoS & Performance Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 003_006 SUMMARY:\r
   - Pattern (compiled, thread-safe) vs Matcher (stateful, single-threaded).\r
   - Flags: CASE_INSENSITIVE, MULTILINE, DOTALL.\r
   - Meta-characters: \\d, \\s, \\w (remember Java double backslash: \\\\d).\r
   - Character classes: [abc], [^abc], [a-zA-Z].\r
   - Greedy (*) vs Reluctant (*?) vs Possessive (*+).\r
   - Capturing groups () and Backreferences (\\\\1).\r
   - Prevent ReDoS by avoiding nested quantifiers '(a+)+'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is Regular Expression Denial of Service (ReDoS) and how do Possessive Quantifiers prevent it?",shortAnswer:"ReDoS is a security vulnerability where an attacker sends a crafted string to a regex containing nested greedy quantifiers (e.g. '(a+)+$'), causing exponential O(2^N) catastrophic backtracking that exhausts CPU resources and crashes the server. Possessive quantifiers ('(a++)++') never backtrack, failing instantly in O(N) linear time.",explanation:"Ranked among top API security vulnerabilities under OWASP Top 10.",hint:"Caused by nested greedy quantifiers backtracking exponentially; solved via possessive quantifiers.",level:"Advanced",codeExample:'Pattern safe = Pattern.compile("([a-z]++)++$"); // Possessive quantifier'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_006 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Security Capstone"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Regex Performance Cautions: Catastrophic Backtracking & ",e.jsx("code",{className:"text-rose-400 font-mono",children:"ReDoS"})," Security"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Defend enterprise web applications against CPU exhaustion attacks: diagnosing exponential backtracking traps and writing immune possessive quantifier algorithms."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"RedosSecurityAndCatastrophicBacktrackingDemo.java",highlightLines:[7,14,15,19,20,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"ReDoS Security FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 003_006 Topic 14: ReDoS Security Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_006_topic14_redos_security_note.txt"})}),e.jsx(n,{note:"Congratulations on completing Module 003_006! You have mastered java.util.regex, Pattern and Matcher, boundary anchors, capturing groups, backreferences, and ReDoS security defenses! — Sukanta Hui"})]})}export{h as default};
