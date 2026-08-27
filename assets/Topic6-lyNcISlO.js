import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 005_005: Object Serialization & The transient Keyword\r
 * Topic 6: The 'transient' Keyword: Protecting Passwords, SSNs & Runtime State\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.serialization;\r
\r
import java.io.ByteArrayInputStream;\r
import java.io.ByteArrayOutputStream;\r
import java.io.ObjectInputStream;\r
import java.io.ObjectOutputStream;\r
import java.io.Serializable;\r
\r
class BankAccountCredentials implements Serializable {\r
    private static final long serialVersionUID = 1L;\r
\r
    private final String accountHolder;\r
    private final String accountNumber;\r
\r
    // TRANSIENT FIELDS: Skipped during serialization; restored to default value (null / 0) upon deserialization:\r
    private final transient String secretPin;\r
    private final transient double cachedSessionBalance;\r
\r
    public BankAccountCredentials(String holder, String accNum, String pin, double balance) {\r
        this.accountHolder = holder;\r
        this.accountNumber = accNum;\r
        this.secretPin = pin;\r
        this.cachedSessionBalance = balance;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return "BankAccount[Holder=" + accountHolder + ", Acc=" + accountNumber +\r
                ", PIN=" + secretPin + ", SessionBalance=" + cachedSessionBalance + "]";\r
    }\r
}\r
\r
public class TransientKeywordProtectionDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: THE 'transient' KEYWORD - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BankAccountCredentials account = new BankAccountCredentials(\r
                "Tuhina Das", "ACCOTAX_BKP_8899", "SECRET_PIN_7721", 75000.00\r
        );\r
\r
        System.out.println(">>> 1. Original Live Object State (Prior to Serialization):");\r
        System.out.println("  " + account);\r
\r
        // Serialize:\r
        ByteArrayOutputStream byteSink = new ByteArrayOutputStream();\r
        try (ObjectOutputStream oos = new ObjectOutputStream(byteSink)) {\r
            oos.writeObject(account);\r
        }\r
\r
        // Deserialize:\r
        BankAccountCredentials restored;\r
        try (ObjectInputStream ois = new ObjectInputStream(new ByteArrayInputStream(byteSink.toByteArray()))) {\r
            restored = (BankAccountCredentials) ois.readObject();\r
        }\r
\r
        System.out.println("\\n>>> 2. Restored Object State (After Deserialization):");\r
        System.out.println("  " + restored);\r
        System.out.println("  Notice that 'secretPin' became 'null' and 'cachedSessionBalance' became '0.0'!");\r
\r
        System.out.println("\\n>>> 3 USE CASES FOR THE 'transient' KEYWORD:");\r
        System.out.println("  1. Security: Preventing sensitive credentials (passwords, PINs, tokens) from being written to disk/wire.");\r
        System.out.println("  2. Performance: Skipping transient computational caches or intermediate calculation buffers.");\r
        System.out.println("  3. System Resources: Skipping non-serializable OS resources (Sockets, FileStreams, Threads, DB connections).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_005: Object Serialization & The transient Keyword\r
Topic 6: The transient Keyword\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE TRANSIENT MODIFIER:\r
   - 'private transient String password;'.\r
   - Instructs ObjectOutputStream to skip this field entirely.\r
   - Upon deserialization, field becomes default (null / 0 / false).\r
   - Used for passwords, temporary caches, and non-serializable OS handles.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What value does a 'transient' field receive when an object is reconstructed during deserialization?",shortAnswer:"When an object is deserialized, any field marked with the 'transient' modifier is skipped during stream reading and is initialized to its Java language default value: 'null' for Object references, '0' for numeric primitives (int, double, long, etc.), and 'false' for booleans.",explanation:"The constructor is bypassed, so field initializers in the class definition do not execute.",hint:"Transient fields receive Java default values: null for objects, 0 for numbers, false for booleans.",level:"Beginner",codeExample:"private transient String password; // Restored as null upon deserialization"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_005 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Data Security"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"transient"})," Keyword: Protecting Passwords, PINs & Runtime State"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Enforce application security: applying the ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"transient"})," modifier to prevent sensitive credentials and computational caches from leaking into persistent streams."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"TransientKeywordProtectionDemo.java",highlightLines:[7,10,18,19,20,21,46,47,48]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Transient Keyword FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 005_005 Topic 6: The transient Keyword",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_005_topic6_transient_keyword_note.txt"})}),e.jsx(a,{note:"Always mark sensitive fields like passwords, credit card CVVs, and database connection pools as 'transient'! When the object is deserialized, those fields will safely reset to null/0! — Sukanta Hui"})]})}export{h as default};
