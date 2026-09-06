import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 005_005: Object Serialization & The transient Keyword\r
 * Topic 10: Customizing Serialization: private writeObject() & readObject() Protocols\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.serialization;\r
\r
import java.io.ByteArrayInputStream;\r
import java.io.ByteArrayOutputStream;\r
import java.io.IOException;\r
import java.io.ObjectInputStream;\r
import java.io.ObjectOutputStream;\r
import java.io.Serializable;\r
import java.util.Base64;\r
\r
class EncryptedCredentials implements Serializable {\r
    private static final long serialVersionUID = 1L;\r
\r
    private String username;\r
    // Transient field with custom encrypted serialization protocol:\r
    private transient String rawPassword;\r
\r
    public EncryptedCredentials(String user, String pass) {\r
        this.username = user;\r
        this.rawPassword = pass;\r
    }\r
\r
    // 1. CUSTOM writeObject PROTOCOL (Must be private void!):\r
    private void writeObject(ObjectOutputStream oos) throws IOException {\r
        oos.defaultWriteObject(); // Serializes non-transient fields (username) automatically!\r
\r
        // Custom encryption transformation for transient password:\r
        String obfuscated = Base64.getEncoder().encodeToString(rawPassword.getBytes());\r
        oos.writeUTF(obfuscated); // Writes encrypted password manually\r
        System.out.println("  [CUSTOM writeObject] Encrypted and wrote transient password.");\r
    }\r
\r
    // 2. CUSTOM readObject PROTOCOL (Must be private void!):\r
    private void readObject(ObjectInputStream ois) throws IOException, ClassNotFoundException {\r
        ois.defaultReadObject(); // Rehydrates non-transient fields automatically!\r
\r
        // Custom decryption transformation:\r
        String obfuscated = ois.readUTF();\r
        this.rawPassword = new String(Base64.getDecoder().decode(obfuscated));\r
        System.out.println("  [CUSTOM readObject] Decrypted and restored transient password.");\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return "EncryptedCredentials[user=" + username + ", password=" + rawPassword + "]";\r
    }\r
}\r
\r
public class CustomWriteObjectReadObjectProtocolDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: CUSTOM writeObject & readObject - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        EncryptedCredentials creds = new EncryptedCredentials("Swadeep Paul", "SecretPass2026");\r
        System.out.println(">>> 1. Original Credentials: " + creds);\r
\r
        // Serialize:\r
        ByteArrayOutputStream byteBuffer = new ByteArrayOutputStream();\r
        try (ObjectOutputStream oos = new ObjectOutputStream(byteBuffer)) {\r
            oos.writeObject(creds);\r
        }\r
\r
        // Deserialize:\r
        EncryptedCredentials restored;\r
        try (ObjectInputStream ois = new ObjectInputStream(new ByteArrayInputStream(byteBuffer.toByteArray()))) {\r
            restored = (EncryptedCredentials) ois.readObject();\r
        }\r
\r
        System.out.println("\\n>>> 2. Restored Credentials: " + restored);\r
\r
        System.out.println("\\n>>> 3 RULES OF CUSTOM writeObject/readObject:");\r
        System.out.println("  1. Visibility MUST be 'private' (invoked by JVM reflection).");\r
        System.out.println("  2. Always call 'defaultWriteObject()' / 'defaultReadObject()' first.");\r
        System.out.println("  3. Used for encrypting sensitive fields and recalculating transient caches on load.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_005: Object Serialization & The transient Keyword\r
Topic 10: Custom writeObject & readObject\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CUSTOM SERIALIZATION PROTOCOL:\r
   - 'private void writeObject(ObjectOutputStream oos) throws IOException'.\r
   - 'private void readObject(ObjectInputStream ois) throws IOException, ClassNotFoundException'.\r
   - Always call 'oos.defaultWriteObject()' and 'ois.defaultReadObject()'.\r
   - Allows custom encryption, transient field reconstruction, and backward compatibility.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why must the custom 'writeObject(ObjectOutputStream oos)' and 'readObject(ObjectInputStream ois)' methods be declared as 'private'?",shortAnswer:"The 'writeObject' and 'readObject' methods are invoked exclusively by the JVM serialization engine via internal reflection. Declaring them as 'private' ensures they cannot be called by external client code and prevents subclasses from accidentally overriding or corrupting the specific class's serialization logic.",explanation:"Standard contract specified in the Java Object Serialization Specification.",hint:"Must be private so only the JVM can invoke them via reflection and subclasses cannot override them.",level:"Intermediate",codeExample:"private void writeObject(ObjectOutputStream oos) throws IOException { oos.defaultWriteObject(); }"}];function j(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_005 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Custom Serialization"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Customizing Serialization: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"private writeObject()"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"readObject()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Customize binary wire protocols: implementing private serialization hooks to encrypt sensitive transient payloads and re-initialize computational caches."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"CustomWriteObjectReadObjectProtocolDemo.java",highlightLines:[7,10,24,25,27,28,33,34,36,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Custom Serialization FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 005_005 Topic 10: Custom writeObject & readObject",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_005_topic10_custom_serialization_note.txt"})}),e.jsx(a,{note:"Custom writeObject and readObject methods give you full power over your data! You can compress large strings, encrypt passwords with Base64/AES, and rebuild hash tables automatically on load! — Sukanta Hui"})]})}export{j as default};
