import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 005_007: File Handling & I/O Hands-On Capstone Lab\r
 * Topic 2: Project 2: Encrypted File Vault (XOR/AES Cryptographic Stream Filter)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io.lab;\r
\r
import java.io.FileInputStream;\r
import java.io.FileOutputStream;\r
import java.io.InputStream;\r
import java.io.OutputStream;\r
import java.nio.charset.StandardCharsets;\r
import java.nio.file.Files;\r
import java.nio.file.Path;\r
\r
public class EncryptedFileVaultProjectDemo {\r
\r
    private static final byte SECRET_VAULT_KEY = (byte) 0x5A; // XOR Stream Key\r
\r
    // Encrypt / Decrypt Stream Processor (Symmetric Stream Filter):\r
    public static void transformStream(InputStream in, OutputStream out, byte key) throws Exception {\r
        byte[] buffer = new byte[1024];\r
        int bytesRead;\r
        while ((bytesRead = in.read(buffer)) != -1) {\r
            // Apply byte transformation:\r
            for (int i = 0; i < bytesRead; i++) {\r
                buffer[i] ^= key; // XOR encryption/decryption toggle\r
            }\r
            out.write(buffer, 0, bytesRead);\r
        }\r
        out.flush();\r
    }\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: PROJECT 2 - ENCRYPTED FILE VAULT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Path plainFile = Files.createTempFile("plain_ledger_", ".txt");\r
        Path vaultFile = Files.createTempFile("encrypted_vault_", ".vault");\r
        Path restoredFile = Files.createTempFile("restored_ledger_", ".txt");\r
\r
        String sensitiveData = "CONFIDENTIAL: Barrackpore AccoTax GST Secret Ledger ₹1,50,000";\r
        Files.writeString(plainFile, sensitiveData, StandardCharsets.UTF_8);\r
\r
        // 1. ENCRYPTION PHASE: Plaintext -> Encrypted Vault File:\r
        System.out.println(">>> 1. Encrypting File into Vault Storage:");\r
        try (InputStream in = new FileInputStream(plainFile.toFile());\r
             OutputStream out = new FileOutputStream(vaultFile.toFile())) {\r
            transformStream(in, out, SECRET_VAULT_KEY);\r
        }\r
        System.out.println("  Vault File Generated: " + vaultFile.getFileName() + " (" + Files.size(vaultFile) + " bytes)");\r
\r
        // 2. DECRYPTION PHASE: Encrypted Vault File -> Restored Plaintext:\r
        System.out.println("\\n>>> 2. Decrypting Vault Storage back to Plaintext:");\r
        try (InputStream in = new FileInputStream(vaultFile.toFile());\r
             OutputStream out = new FileOutputStream(restoredFile.toFile())) {\r
            transformStream(in, out, SECRET_VAULT_KEY);\r
        }\r
\r
        String decryptedPayload = Files.readString(restoredFile, StandardCharsets.UTF_8);\r
        System.out.println("  Decrypted Content : " + decryptedPayload);\r
        System.out.println("  Integrity Match   : " + sensitiveData.equals(decryptedPayload));\r
\r
        // Cleanup:\r
        Files.deleteIfExists(plainFile);\r
        Files.deleteIfExists(vaultFile);\r
        Files.deleteIfExists(restoredFile);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_007: File Handling & I/O Hands-On Capstone Lab\r
Topic 2: Encrypted File Vault Project\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STREAM ENCRYPTION VAULT:\r
   - Decorates byte streams with on-the-fly cipher transformations.\r
   - Symmetric encryption: same key encrypts and decrypts.\r
   - Stream processing ensures zero RAM bloat on large files.\r
   - Ideal for securing sensitive financial ledgers and personal credentials.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How do custom cryptographic stream filters (like CipherInputStream / CipherOutputStream) protect file data at rest in Java?",shortAnswer:"They wrap underlying file streams in the Decorator pattern. As bytes flow through the stream, the filter applies cryptographic transformations (AES, RSA, or XOR) in chunks on-the-fly before writing encrypted ciphertext to disk or decrypting ciphertext back to plaintext upon reading, without loading entire files into memory.",explanation:"Standard enterprise approach for zero-trust data-at-rest encryption.",hint:"Applies on-the-fly chunk encryption/decryption as bytes flow through stream decorators.",level:"Advanced",codeExample:"CipherOutputStream cos = new CipherOutputStream(new FileOutputStream(file), aesCipher);"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_007 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Project 2: Encrypted Vault"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Project 2: Encrypted File Vault (Cryptographic Stream Filter)"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build security stream filters: applying cryptographic transformations to protect sensitive financial records on disk with on-the-fly encryption and decryption."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"EncryptedFileVaultProjectDemo.java",highlightLines:[7,10,16,17,21,22,38,39,47,48]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"File Vault FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:l,title:"Module 005_007 Topic 2: Encrypted File Vault",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_007_topic2_encrypted_file_vault_note.txt"})}),e.jsx(a,{note:"In banking and taxation software, data stored on disk must always be encrypted at rest! Building a stream filter lets you secure files of any size without needing gigabytes of RAM! — Sukanta Hui"})]})}export{h as default};
