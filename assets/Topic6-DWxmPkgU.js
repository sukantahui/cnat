import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 012_004: Custom DI Framework\r
 * Topic 6: Declarative Transactions - @Transactional & Dynamic Proxies\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.minispring;\r
\r
import java.lang.reflect.InvocationHandler;\r
import java.lang.reflect.Method;\r
import java.lang.reflect.Proxy;\r
\r
public class DeclarativeTransactionsDynamicProxiesDemo {\r
\r
    public interface AccountService {\r
        void transfer(String from, String to, double amount);\r
    }\r
\r
    public static class AccountServiceImpl implements AccountService {\r
        @Override\r
        public void transfer(String from, String to, double amount) {\r
            System.out.println("   [BUSINESS LOGIC]: Transferring ₹" + amount + " from " + from + " to " + to);\r
            if (amount > 50000) {\r
                throw new RuntimeException("Limit exceeded! Transaction failed.");\r
            }\r
        }\r
    }\r
\r
    public static class TransactionProxyFactory {\r
        @SuppressWarnings("unchecked")\r
        public static <T> T createProxy(T target, Class<T> interfaceType) {\r
            return (T) Proxy.newProxyInstance(\r
                interfaceType.getClassLoader(),\r
                new Class<?>[]{interfaceType},\r
                new InvocationHandler() {\r
                    @Override\r
                    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {\r
                        System.out.println("   >>> [TX BEGIN]: conn.setAutoCommit(false)");\r
                        try {\r
                            Object result = method.invoke(target, args);\r
                            System.out.println("   >>> [TX COMMIT]: conn.commit() ✅");\r
                            return result;\r
                        } catch (Exception ex) {\r
                            System.err.println("   >>> [TX ROLLBACK]: conn.rollback() ❌");\r
                            throw ex.getCause() != null ? ex.getCause() : ex;\r
                        }\r
                    }\r
                }\r
            );\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: DECLARATIVE TRANSACTIONS WITH PROXIES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        AccountService realService = new AccountServiceImpl();\r
        AccountService proxyService = TransactionProxyFactory.createProxy(realService, AccountService.class);\r
\r
        System.out.println("1. Test Successful Transaction:");\r
        proxyService.transfer("ACC-BKP-1", "ACC-SMR-2", 10000.0);\r
\r
        System.out.println("\r
2. Test Failed Transaction (Triggers Automatic Rollback):");\r
        try {\r
            proxyService.transfer("ACC-BKP-1", "ACC-SMR-2", 80000.0);\r
        } catch (Exception e) {\r
            System.out.println("Caught Expected Business Error: " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_004: Custom DI Framework\r
Topic 6: Declarative Transactions with Proxies\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JDK DYNAMIC PROXY FOR AOP:\r
   - 'Proxy.newProxyInstance(loader, interfaces, invocationHandler)'.\r
   - Intercepts method invocation before and after execution.\r
   - Automatically injects transaction boundaries ('begin', 'commit', 'rollback').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"How does JDK Dynamic Proxy enable Aspect-Oriented Programming (AOP) without modifying source code?",shortAnswer:"The proxy generates an in-memory bytecode implementation of the target interface at runtime that intercepts all method calls, executing cross-cutting concerns (e.g. logging, transactions) before and after delegating to the target object.",explanation:"Core mechanism of Spring AOP and Java dynamic proxies.",hint:"Generates runtime interface wrapper executing cross-cutting advice before and after delegation.",level:"Intermediate",codeExample:"Proxy.newProxyInstance(loader, new Class<?>[]{MyInterface.class}, handler);"},{question:"Why does standard JDK Dynamic Proxy require the target class to implement an interface?",shortAnswer:"Because Proxy.newProxyInstance() generates a subclass of java.lang.reflect.Proxy, and since Java does not support multiple class inheritance, it can only implement additional interfaces rather than extending concrete classes (CGLIB is used for concrete classes).",explanation:"Fundamental limitation of JDK Dynamic Proxies.",hint:"Java single inheritance means the generated proxy already extends java.lang.reflect.Proxy.",level:"Advanced",codeExample:"new Class<?>[]{AccountService.class}"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_004 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 3: Custom DI Framework"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Declarative Transactions: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"@Transactional & Dynamic Proxies"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"AOP in action: wrapping @Transactional methods using java.lang.reflect.Proxy to automatically handle setAutoCommit(false), commit, and rollback."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"DeclarativeTransactionsDynamicProxiesDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Custom DI Framework FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 012_004 Topic 6: Declarative Transactions with Dynamic Proxies",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_004_topic6_declarative_transactions_dynamic_proxies_note.txt"})}),e.jsx(a,{note:"This is the exact mechanism Spring @Transactional uses! The framework creates a dynamic proxy around your interface. When a method runs, the proxy begins the transaction, runs your method, commits if successful, and rolls back if an exception is thrown! — Sukanta Hui"})]})}export{g as default};
