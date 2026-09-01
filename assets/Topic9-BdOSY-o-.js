import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
 * Topic 9: Verifying Interactions & ArgumentCaptor\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.testing;\r
\r
public class VerifyingInteractionsArgumentCaptorDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: VERIFYING INTERACTIONS WITH MOCKITO - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. VERIFYING INVOCATION COUNTS:");\r
        System.out.println("  verify(emailService, times(1)).sendWelcomeMail("swadeep@example.com");");\r
        System.out.println("  verify(auditLogger, never()).logSecurityAlert(anyString());");\r
        System.out.println("  verify(smsService, atLeastOnce()).sendOTP(anyString());\\n");\r
\r
        System.out.println(">>> 2. VERIFYING CALL ORDER (InOrder):");\r
        System.out.println("  InOrder inOrder = inOrder(paymentRepo, auditLogger);");\r
        System.out.println("  inOrder.verify(paymentRepo).saveTransaction(any());");\r
        System.out.println("  inOrder.verify(auditLogger).logSuccess(any());\\n");\r
\r
        System.out.println(">>> 3. CAPTURING ARGUMENTS (ArgumentCaptor):");\r
        System.out.println("  ArgumentCaptor<EmailPayload> captor = ArgumentCaptor.forClass(EmailPayload.class);");\r
        System.out.println("  verify(emailService).send(captor.capture());");\r
        System.out.println("  assertEquals("Barrackpore Batch Confirmation", captor.getValue().getSubject());");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
Topic 9: Verifying Interactions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. VERIFICATION METHODS:\r
   - 'verify(mock, times(n)).method()'\r
   - 'verify(mock, never()).method()'\r
   - 'verify(mock, atLeastOnce()).method()'\r
   - 'verifyNoMoreInteractions(mock)'\r
   - 'ArgumentCaptor.forClass(Class.class)' to inspect outgoing objects.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"When should you use ArgumentCaptor instead of simple assertEquals()?",shortAnswer:"Use ArgumentCaptor when testing methods where the object passed to a dependency is instantiated or modified internally inside the method under test, making it impossible to pass as an expected reference beforehand.",explanation:"Capturing internally constructed arguments.",hint:"Captures objects constructed internally inside the class under test.",level:"Intermediate",codeExample:"ArgumentCaptor<Email> captor = ArgumentCaptor.forClass(Email.class);"},{question:"What is the purpose of Mockito.verifyNoMoreInteractions(mock)?",shortAnswer:"It asserts that no other unexpected interactions or method calls occurred on the mock beyond the ones explicitly verified earlier in the test.",explanation:"Strict interaction enforcement.",hint:"Guarantees no un-verified calls were made to the mock.",level:"Intermediate",codeExample:"verifyNoMoreInteractions(auditMock);"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_006 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JUnit 5, Mockito & Clean Code"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Verifying Interactions: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Mockito.verify() & Captors"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Behavioral verification: checking that methods were called exact number of times, verifying order with InOrder, and capturing arguments with ArgumentCaptor."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"VerifyingInteractionsArgumentCaptorDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Testing & Maven FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 012_006 Topic 9: Verifying Interactions & ArgumentCaptor",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_006_topic9_verifying_interactions_argument_captor_note.txt"})}),e.jsx(a,{note:"Verification ensures that side-effects happened as expected! Use verify(mock, times(1)).sendEmail() to ensure an email was dispatched, and ArgumentCaptor to inspect the exact payload sent into the collaborator! — Sukanta Hui"})]})}export{g as default};
