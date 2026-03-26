import{j as r}from"./index-CgrI_Laf.js";import{J as a}from"./JavaFileLoader-C8lnjvW4.js";import"./JavaCodeBlock-C7U72j7E.js";import"./prism-_43gZ6-8.js";import"./browser-BnichB6k.js";import"./prism-java-BwO6k4I_.js";const e=`public class NumberComparator<T extends Number & Comparable<T>> {\r
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
