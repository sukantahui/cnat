import{j as r}from"./index-C0mc_94R.js";import{J as a}from"./JavaFileLoader-4-ehjeT5.js";import"./JavaCodeBlock-DVZM98Yl.js";import"./prism-Dde13G4z.js";import"./browser-BC2oEfF8.js";import"./prism-java-BwO6k4I_.js";const e=`public class NumberComparator<T extends Number & Comparable<T>> {\r
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
