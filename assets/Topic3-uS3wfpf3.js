import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 003_004: Math, Random, BigInteger & BigDecimal\r
 * Topic 3: Pseudo-Random Number Generation: Math.random() vs java.util.Random\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.math;\r
\r
import java.util.Random;\r
\r
public class PseudoRandomNumberGenerationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: PSEUDO-RANDOM NUMBER GENERATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Using Math.random() -> Returns double in [0.0, 1.0):\r
        double rawRandom = Math.random();\r
        System.out.println(">>> 1. Math.random() Raw Output: " + rawRandom);\r
\r
        // Generating a random integer between min=1 and max=100 (inclusive):\r
        int min = 1, max = 100;\r
        int randomInRange = (int) (Math.random() * (max - min + 1)) + min;\r
        System.out.printf("  Random Number [%d - %d]: %d%n", min, max, randomInRange);\r
\r
        // 2. Using java.util.Random (More flexible API):\r
        Random rng = new Random();\r
        int diceRoll = rng.nextInt(6) + 1; // [1 to 6]\r
        boolean coinFlip = rng.nextBoolean();\r
        double gaussianValue = rng.nextGaussian(); // Normal distribution (mean 0.0, std dev 1.0)\r
\r
        System.out.println("\\n>>> 2. java.util.Random Capabilities:");\r
        System.out.println("  Dice Roll (1-6)    : " + diceRoll);\r
        System.out.println("  Coin Flip (Boolean): " + coinFlip);\r
        System.out.printf("  Gaussian Value     : %.4f%n", gaussianValue);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_004: Math, Random & Arbitrary Precision\r
Topic 3: Pseudo-Random Generation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RANDOM GENERATION FORMULAS:\r
   - 'Math.random()' returns '[0.0, 1.0)'.\r
   - Range [min, max]: '(int)(Math.random() * (max - min + 1)) + min'.\r
   - 'Random.nextInt(bound)' returns '[0, bound - 1]'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the formula to generate a random integer between 'min' and 'max' inclusive using 'Math.random()'?",shortAnswer:"'(int) (Math.random() * (max - min + 1)) + min'. Alternatively, using 'java.util.Random', you can write: 'random.nextInt((max - min) + 1) + min'.",explanation:"Math.random() internally delegates to a singleton java.util.Random instance.",hint:"Formula: (int)(Math.random() * (max - min + 1)) + min.",level:"Beginner",codeExample:"int roll = (int) (Math.random() * 6) + 1; // Dice roll 1 to 6"}];function g(){return n.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[n.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_004 · Topic 3"}),n.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"RNG Foundations"})]}),n.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Generating Pseudo-Random Numbers with ",n.jsx("code",{className:"text-emerald-400 font-mono",children:"Math.random()"})," & ",n.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.Random"})]}),n.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how to generate bounded random integers, coin flips, and Gaussian normal distributions using ",n.jsx("code",{className:"text-emerald-300 font-mono",children:"Math.random()"})," and ",n.jsx("code",{className:"text-emerald-300 font-mono",children:"java.util.Random"}),"."]})]}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[n.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),n.jsx(e,{fileModule:o,title:"PseudoRandomNumberGenerationDemo.java",highlightLines:[7,16,20,24,25,26]})]}),n.jsx("section",{className:"space-y-4",children:n.jsx(a,{title:"RNG FAQs",questions:s})}),n.jsx("section",{className:"space-y-4",children:n.jsx(t,{content:i,title:"Module 003_004 Topic 3: Random Number Generation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_004_topic3_random_numbers_note.txt"})}),n.jsx(r,{note:"Math.random() is great for simple games or dice rolls, but NEVER use it for generating banking OTPs or passwords because it is predictable! — Sukanta Hui"})]})}export{g as default};
