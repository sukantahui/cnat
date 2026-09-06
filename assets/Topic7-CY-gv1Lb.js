import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
 * Topic 7: Creating Mocks - @Mock, @InjectMocks & MockitoExtension\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.testing;\r
\r
public class CreatingMocksInjectMocksDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: CREATING MOCKS WITH @MOCK & @INJECTMOCKS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> DECLARATIVE MOCKITO SETUP PATTERN (JUnit 5):");\r
        System.out.println("  @ExtendWith(MockitoExtension.class)");\r
        System.out.println("  class StudentServiceTest {\\n");\r
        System.out.println("      @Mock");\r
        System.out.println("      private StudentRepository studentRepository; // Creates simulated mock\\n");\r
        System.out.println("      @Mock");\r
        System.out.println("      private EmailNotificationService notificationService;\\n");\r
        System.out.println("      @InjectMocks");\r
        System.out.println("      private StudentService studentService; // Injects mocks into StudentService\\n");\r
        System.out.println("      @Test");\r
        System.out.println("      void testStudentEnrollment() {");\r
        System.out.println("          // Test logic here...");\r
        System.out.println("      }");\r
        System.out.println("  }");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
Topic 7: Creating Mocks (@Mock & @InjectMocks)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MOCKITO ANNOTATIONS:\r
   - '@ExtendWith(MockitoExtension.class)' : Enables JUnit 5 Mockito lifecycle integration.\r
   - '@Mock'         : Creates a mock instance.\r
   - '@InjectMocks'  : Creates instance of class under test and injects '@Mock' / '@Spy' fields.\r
   - 'MockitoAnnotations.openMocks(this)' : Programmatic alternative to extension.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,c=[{question:"How does Mockito decide how to inject mocks into an @InjectMocks target class?",shortAnswer:"Mockito attempts injection in order: 1) Constructor injection (preferred), 2) Property setter injection, 3) Field reflection injection.",explanation:"Mockito injection resolution hierarchy.",hint:"Constructor injection first, then setter injection, then field injection.",level:"Intermediate",codeExample:"@InjectMocks private OrderService service;"},{question:"What happens if you forget to add @ExtendWith(MockitoExtension.class) to your JUnit 5 test class?",shortAnswer:"The fields annotated with @Mock and @InjectMocks remain null, resulting in NullPointerException as soon as a test method attempts to access them.",explanation:"Lifecycle extension initialization requirement.",hint:"Mocks are never initialized and remain null, causing NullPointerException.",level:"Beginner",codeExample:"@ExtendWith(MockitoExtension.class)"}];function M(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_006 · Topic 7"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JUnit 5, Mockito & Clean Code"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Creating Mocks: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"@Mock & @InjectMocks"})]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Declarative mocking setup: initializing test doubles using @Mock, injecting collaborators with @InjectMocks, and integrating via @ExtendWith(MockitoExtension.class)."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:s,title:"CreatingMocksInjectMocksDemo.java",highlightLines:[18,25,34,43]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"JUnit 5 & Mockito FAQs",questions:c})}),t.jsx("section",{className:"space-y-4",children:t.jsx(o,{content:r,title:"Module 012_006 Topic 7: Creating Mocks (@Mock & @InjectMocks)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_006_topic7_creating_mocks_inject_mocks_note.txt"})}),t.jsx(i,{note:"The cleanest way to write Mockito tests in JUnit 5 is with @ExtendWith(MockitoExtension.class)! Annotate your dependencies with @Mock and your class under test with @InjectMocks — Mockito automatically injects the mocks via constructors or setters! — Sukanta Hui"})]})}export{M as default};
