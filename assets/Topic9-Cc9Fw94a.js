import{j as r}from"./vendor-react-core-CaA1o1Cx.js";import{J as a}from"./JavaFileLoader-BYsFDtcs.js";import"./JavaCodeBlock-DjVlNPWU.js";import"./vendor-prism-CCfIgi4B.js";const e=`public class NumberComparator<T extends Number & Comparable<T>> {\r
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
`;function s(){return r.jsxs("div",{className:"p-6",children:[r.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Java Examples"}),r.jsx(a,{fileModule:e,title:"Main.java",highlightLines:[]})]})}export{s as default};
