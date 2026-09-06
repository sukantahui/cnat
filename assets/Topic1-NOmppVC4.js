import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 012_002: Core Banking Capstone\r
 * Topic 1: Domain Entity Modeling - Records & Value Objects\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.banking;\r
\r
import java.math.BigDecimal;\r
import java.time.Instant;\r
import java.util.UUID;\r
\r
public class DomainEntityModelingDemo {\r
\r
    public enum AccountStatus { ACTIVE, FROZEN, CLOSED }\r
    public enum TransactionType { DEPOSIT, WITHDRAWAL, TRANSFER_DEBIT, TRANSFER_CREDIT }\r
\r
    // 1. Immutable Audit Ledger Entry Record:\r
    public record LedgerEntry(\r
        UUID entryId,\r
        UUID transactionId,\r
        String accountNumber,\r
        TransactionType type,\r
        BigDecimal amount,\r
        Instant timestamp\r
    ) {}\r
\r
    // 2. Customer Record:\r
    public record Customer(\r
        String customerId,\r
        String fullName,\r
        String email,\r
        String branchCenter\r
    ) {}\r
\r
    // 3. Bank Account Entity:\r
    public static class BankAccount {\r
        private final String accountNumber;\r
        private final String customerId;\r
        private BigDecimal balance;\r
        private AccountStatus status;\r
\r
        public BankAccount(String accNo, String custId, BigDecimal initialBalance) {\r
            this.accountNumber = accNo;\r
            this.customerId = custId;\r
            this.balance = initialBalance;\r
            this.status = AccountStatus.ACTIVE;\r
        }\r
\r
        public String getAccountNumber() { return accountNumber; }\r
        public String getCustomerId() { return customerId; }\r
        public BigDecimal getBalance() { return balance; }\r
        public AccountStatus getStatus() { return status; }\r
\r
        public void updateBalance(BigDecimal newBalance) { this.balance = newBalance; }\r
        public void setStatus(AccountStatus status) { this.status = status; }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: DOMAIN ENTITY MODELING - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        LedgerEntry entry = new LedgerEntry(\r
            UUID.randomUUID(),\r
            UUID.randomUUID(),\r
            "SB-BKP-2026-101",\r
            TransactionType.DEPOSIT,\r
            new BigDecimal("25000.00"),\r
            Instant.now()\r
        );\r
\r
        System.out.println("Created Immutable Ledger Entry:\r
  " + entry);\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_002: Core Banking Capstone\r
Topic 1: Domain Entity Modeling\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DOMAIN MODELING RULES:\r
   - Monetary values : 'BigDecimal' (scaled to 2 or 4 decimals).\r
   - Identifiers     : 'UUID' or structured alphanumeric strings ('SB-BKP-101').\r
   - Timestamps      : 'Instant' (UTC ISO-8601).\r
   - Ledger Entries  : Pure immutable Java Records.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why should ledger entry domain entities be modeled as immutable Java Records rather than mutable JavaBeans?",shortAnswer:"Because financial transaction ledger entries are historical facts that must never be modified or tampered with after creation; immutability guarantees audit trail integrity and thread safety.",explanation:"Essential requirement for financial compliance.",hint:"Financial ledger entries are historical facts that must never mutate.",level:"Beginner",codeExample:"public record LedgerEntry(UUID id, BigDecimal amount, Instant time) {}"},{question:"Why is java.time.Instant preferred over java.util.Date for financial transaction timestamps?",shortAnswer:"Instant is immutable, thread-safe, represents an unambiguous UTC timestamp on the epoch timeline with nanosecond precision, and does not carry confusing timezone offsets.",explanation:"Standard Java 8+ Date/Time best practice.",hint:"Instant is immutable, thread-safe, and uses unambiguous UTC timestamps.",level:"Beginner",codeExample:"Instant transactionTime = Instant.now();"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_002 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 1: Core Banking System"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Domain Entity Modeling: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Records & Value Objects"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Designing domain models: modeling Account, Customer, Transaction, LedgerEntry, and AuditLog using modern Java Records and immutability."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"DomainEntityModelingDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Core Banking Capstone FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 012_002 Topic 1: Domain Entity Modeling",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_002_topic1_domain_entity_modeling_note.txt"})}),e.jsx(r,{note:"Notice how we use Java Records for LedgerEntry and AuditLog! Since financial records must NEVER be modified once written, Records provide 100% compile-time immutability! — Sukanta Hui"})]})}export{x as default};
