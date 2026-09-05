import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 003_006: Regular Expressions (java.util.regex)\r
 * Topic 13: Enterprise Validation Recipes: Email, Mobile (+91), PAN Card, IPv4 Address\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.regex;\r
\r
import java.util.regex.Pattern;\r
\r
public class EnterpriseValidationRecipesDemo {\r
\r
    // 1. Email Address (OWASP Standard):\r
    public static final Pattern EMAIL_PAT = Pattern.compile("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\\\.[A-Za-z]{2,6}$");\r
\r
    // 2. Indian Mobile Number (+91 followed by 10 digits starting with 6,7,8,9):\r
    public static final Pattern INDIAN_MOBILE_PAT = Pattern.compile("^(\\\\+91)?[6-9]\\\\d{9}$");\r
\r
    // 3. Indian Income Tax PAN Card (5 Letters + 4 Digits + 1 Letter):\r
    public static final Pattern PAN_CARD_PAT = Pattern.compile("^[A-Z]{5}[0-9]{4}[A-Z]$");\r
\r
    // 4. IPv4 Network Address (0-255 octets):\r
    public static final Pattern IPV4_PAT = Pattern.compile("^((25[0-5]|2[0-4]\\\\d|[01]?\\\\d\\\\d?)\\\\.){3}(25[0-5]|2[0-4]\\\\d|[01]?\\\\d\\\\d?)$");\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: ENTERPRISE VALIDATION RECIPES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Email Validation (swadeep.paul@coderaccotax.com): " +\r
                EMAIL_PAT.matcher("swadeep.paul@coderaccotax.com").matches());\r
\r
        System.out.println(">>> 2. Indian Mobile Validation (+919830012345): " +\r
                INDIAN_MOBILE_PAT.matcher("+919830012345").matches());\r
\r
        System.out.println(">>> 3. Indian PAN Card Validation (ABCDE1234F): " +\r
                PAN_CARD_PAT.matcher("ABCDE1234F").matches());\r
\r
        System.out.println(">>> 4. IPv4 Address Validation (192.168.1.100): " +\r
                IPV4_PAT.matcher("192.168.1.100").matches());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_006: Regular Expressions (Regex)\r
Topic 13: Enterprise Validation Recipes\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ENTERPRISE RECIPES:\r
   - Email  : '^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'\r
   - Mobile : '^(\\+91)?[6-9]\\d{9}$'\r
   - PAN    : '^[A-Z]{5}[0-9]{4}[A-Z]$'\r
   - IPv4   : '^((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(...)$'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the standard regular expression for validating an Indian Mobile Number with optional '+91' country code?",shortAnswer:"'^(\\+91)?[6-9]\\d{9}$'. This pattern allows an optional '+91' prefix, mandates that the first subscriber digit is 6, 7, 8, or 9, followed by exactly 9 more decimal digits (total 10 subscriber digits).",explanation:"Widely used across Indian fintech, banking, and telecom verification gates.",hint:"Starts with optional +91, first digit 6-9, followed by 9 digits.",level:"Intermediate",codeExample:'boolean valid = phone.matches("^(\\\\+91)?[6-9]\\\\d{9}$");'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_006 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Production Recipes"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Common Validation Recipes: Email, Indian Phone (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"+91"}),"), PAN Card & IPv4"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build production-ready authentication and billing filters: pre-compiling validated recipes for Indian mobile numbers, income tax PAN cards, and RFC-compliant emails."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"EnterpriseValidationRecipesDemo.java",highlightLines:[7,12,15,18,21,27,30,33,36]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Validation Recipes FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 003_006 Topic 13: Validation Recipes",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_006_topic13_validation_recipes_note.txt"})}),e.jsx(r,{note:"Keep these 4 validation patterns handy in your utility class! You will use them in almost every Spring Boot microservice you write at Barrackpore. — Sukanta Hui"})]})}export{h as default};
