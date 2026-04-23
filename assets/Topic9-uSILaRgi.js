import{j as r}from"./index-CmAIoOXN.js";import{J as a}from"./JavaFileLoader-BTzcqr9I.js";import"./JavaCodeBlock-BglY1nU3.js";import"./prism-6Oj8TI1J.js";import"./browser-n5DCIAUE.js";import"./prism-java-BwO6k4I_.js";const e=`public class NumberComparator<T extends Number & Comparable<T>> {\r
    private T a, b;\r
\r
    public NumberComparator(T a, T b) {\r
        this.a = a;\r
        this.b = b;\r
    }\r
\r
    public T max() {\r
        return a.compareTo(b) > 0 ? a : b;\r
    }\r
}\r
`;function p(){return r.jsxs("div",{className:"p-6",children:[r.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Java Examples"}),r.jsx(a,{fileModule:e,title:"Main.java",highlightLines:[]})]})}export{p as default};
