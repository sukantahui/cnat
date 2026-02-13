import{c as A,r as o,q as I,j as e,Z as P,L as h,p as B,P as T,G as D,t as R,A as U}from"./index-Do7ncMju.js";import{c as a}from"./clsx-B-dksMZM.js";import{C as c}from"./circle-check-big-D6xV_KCZ.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],E=A("box",L),G=()=>{const[x,u]=o.useState(!0),[i,g]=o.useState("basics"),[n,b]=o.useState(0),[p,y]=o.useState(!1),{moduleSlug:M,topicIndex:z}=I(),f=()=>{u(!x)};o.useEffect(()=>{y(!0)},[]);const m={title:"React Components: Building Blocks of UI",analogy:"Like Lego bricks - small, reusable pieces that combine to create complex structures",description:"Components are independent, reusable pieces of UI. They can be as small as a button or as large as an entire page.",characteristics:["Receive data via props","Return JSX describing UI","Can maintain internal state","Reusable across application"]},l=[{title:"Simple Button Component",code:`function PrimaryButton({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      {children}
    </button>
  )
}

// Usage in another component:
function App() {
  return (
    <PrimaryButton onClick={() => alert('Clicked!')}>
      Save Changes
    </PrimaryButton>
  )
}`,features:["Receives props (children, onClick)","Returns JSX","Reusable styling and behavior"],purpose:"Encapsulate button styling and behavior"},{title:"Student Card Component",code:`function StudentCard({ name, grade, attendance }) {
  return (
    <div className="student-card p-4 border rounded-lg shadow">
      <h3 className="text-xl font-bold">{name}</h3>
      <div className="mt-2 space-y-1">
        <p>Grade: <span className="font-semibold">{grade}</span></p>
        <p>Attendance: 
          <span className={\`ml-2 px-2 py-1 rounded \${attendance > 75 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}\`}>
            {attendance}%
          </span>
        </p>
      </div>
    </div>
  )
}

// Usage:
function ClassList() {
  return (
    <div className="space-y-4">
      <StudentCard name="Swadeep" grade="A" attendance={92} />
      <StudentCard name="Tuhina" grade="B+" attendance={88} />
      <StudentCard name="Abhronila" grade="A-" attendance={95} />
    </div>
  )
}`,features:["Multiple props","Conditional styling","Reusable data display"],purpose:"Display student information consistently"},{title:"Counter Component with State",code:`import { useState } from 'react'

function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue)
  
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(initialValue)
  
  return (
    <div className="counter p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Counter: {count}</h3>
      <div className="space-x-2">
        <button onClick={decrement} className="px-3 py-1 bg-gray-200 rounded">
          Decrement
        </button>
        <button onClick={reset} className="px-3 py-1 bg-yellow-200 rounded">
          Reset
        </button>
        <button onClick={increment} className="px-3 py-1 bg-green-200 rounded">
          Increment
        </button>
      </div>
    </div>
  )
}`,features:["Uses useState hook","Internal state management","Default prop value"],purpose:"Self-contained interactive component"},{title:"Conditional Rendering Component",code:`function AttendanceStatus({ isPresent, studentName }) {
  if (isPresent === null || isPresent === undefined) {
    return (
      <div className="attendance status-unknown p-2 border rounded">
        <span className="text-gray-500">Attendance not marked for {studentName}</span>
      </div>
    )
  }
  
  return isPresent ? (
    <div className="attendance status-present p-2 border rounded bg-green-50">
      <span className="text-green-700">✓ {studentName} is present</span>
    </div>
  ) : (
    <div className="attendance status-absent p-2 border rounded bg-red-50">
      <span className="text-red-700">✗ {studentName} is absent</span>
    </div>
  )
}`,features:["Conditional rendering","Early returns","Multiple JSX returns"],purpose:"Display different UI based on conditions"}],j=[{part:"Function Declaration",description:"Defines the component as a JavaScript function",code:"function ComponentName() {",purpose:"Creates a reusable component"},{part:"Parameters (Props)",description:"Receives data from parent component",code:"function ComponentName({ prop1, prop2 }) {",purpose:"Make component configurable"},{part:"Component Body",description:"Contains logic, state, and calculations",code:`  const [state, setState] = useState()
  const result = calculateSomething()`,purpose:"Implement component behavior"},{part:"Return Statement",description:"Returns JSX describing the UI",code:`  return (
    <div>JSX Content</div>
  )`,purpose:"Render component output"},{part:"Export Statement",description:"Makes component available for import",code:"export default ComponentName",purpose:"Enable component reuse"}],N=[{type:"Presentational Components",description:"Focus on how things look",characteristics:["Receive data via props","Rarely have own state","Focus on UI/UX"],example:"Button, Card, Modal, Header",analogy:"Painters - they make things look good"},{type:"Container Components",description:"Focus on how things work",characteristics:["Manage state and data","Pass data to presentational","Handle logic"],example:"UserProfile, ProductList, Dashboard",analogy:"Managers - they handle the business logic"},{type:"Layout Components",description:"Define page structure",characteristics:["Define overall layout","Often use children prop","Consistent structure"],example:"PageLayout, SidebarLayout, GridContainer",analogy:"Architects - they define the structure"},{type:"Utility Components",description:"Provide specific functionality",characteristics:["Single responsibility","Often abstract complex logic","Highly reusable"],example:"ErrorBoundary, LoadingSpinner, Tooltip",analogy:"Tools - each has a specific job"}],v=[{pattern:"Parent-Child Composition",code:`function ParentComponent() {
  return (
    <div className="parent">
      <ChildComponent message="Hello from parent" />
      <AnotherChild count={5} />
    </div>
  )
}`,explanation:"Parent renders children, passes data via props"},{pattern:"Slot Pattern (Children Prop)",code:`function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  )
}

// Usage:
<Card title="Student Info">
  <p>Name: Swadeep</p>
  <p>Grade: A</p>
</Card>`,explanation:"Component accepts dynamic content via children"},{pattern:"Component Specialization",code:`function Button({ variant = 'primary', ...props }) {
  const baseClasses = "px-4 py-2 rounded font-medium"
  const variantClasses = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-200 text-gray-800",
    danger: "bg-red-600 text-white"
  }
  
  return (
    <button 
      className={\`\${baseClasses} \${variantClasses[variant]}\`}
      {...props}
    />
  )
}

// Specialized versions:
function SubmitButton(props) {
  return <Button variant="primary" type="submit" {...props} />
}

function CancelButton(props) {
  return <Button variant="secondary" {...props} />
}`,explanation:"Create specialized versions of base components"},{pattern:"Compound Components",code:`function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState(null)
  
  return React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      isOpen: index === openIndex,
      onToggle: () => setOpenIndex(index === openIndex ? null : index)
    })
  )
}

function AccordionItem({ title, children, isOpen, onToggle }) {
  return (
    <div className="accordion-item">
      <button onClick={onToggle} className="accordion-header">
        {title}
      </button>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  )
}

// Usage:
<Accordion>
  <AccordionItem title="Question 1">
    <p>Answer 1</p>
  </AccordionItem>
  <AccordionItem title="Question 2">
    <p>Answer 2</p>
  </AccordionItem>
</Accordion>`,explanation:"Components work together as a group"}],w=[{student:"Swadeep",project:"School Attendance Dashboard",components:[{name:"AttendanceCard",type:"Presentational",purpose:"Show student attendance"},{name:"ClassList",type:"Container",purpose:"Manage class data"},{name:"StatisticsPanel",type:"Presentational",purpose:"Display attendance stats"},{name:"DatePicker",type:"Utility",purpose:"Select date range"}],structure:`AttendanceDashboard/
  ├── AttendanceCard.jsx      # Presentational
  ├── ClassList.jsx          # Container
  ├── StatisticsPanel.jsx    # Presentational
  └── DatePicker.jsx         # Utility`},{student:"Tuhina",project:"Library Management System",components:[{name:"BookCard",type:"Presentational",purpose:"Display book information"},{name:"SearchBar",type:"Utility",purpose:"Search books"},{name:"BorrowModal",type:"Presentational",purpose:"Borrow book form"},{name:"LibraryLayout",type:"Layout",purpose:"Page structure"}],structure:`LibrarySystem/
  ├── BookCard.jsx           # Presentational
  ├── SearchBar.jsx          # Utility
  ├── BorrowModal.jsx        # Presentational
  └── LibraryLayout.jsx      # Layout`},{student:"Abhronila",project:"Quiz Application",components:[{name:"QuestionCard",type:"Presentational",purpose:"Display quiz question"},{name:"Timer",type:"Utility",purpose:"Countdown timer"},{name:"ScoreBoard",type:"Presentational",purpose:"Show scores"},{name:"QuizManager",type:"Container",purpose:"Manage quiz state"}],structure:`QuizApp/
  ├── QuestionCard.jsx       # Presentational
  ├── Timer.jsx             # Utility
  ├── ScoreBoard.jsx        # Presentational
  └── QuizManager.jsx       # Container`}],C=[{practice:"Single Responsibility",description:"Each component should do one thing well",example:"Button component handles clicks, not data fetching",benefit:"Easier to test, maintain, and reuse"},{practice:"Descriptive Naming",description:"Name components by what they are, not what they do",example:"StudentCard not DisplayStudentInformationBox",benefit:"Self-documenting code"},{practice:"Props Destructuring",description:"Destructure props immediately for cleaner code",example:"function Component({ prop1, prop2 }) {",benefit:"Clear what props are used"},{practice:"Default Props",description:"Provide sensible defaults for optional props",example:"function Component({ size = 'medium' }) {",benefit:"More robust components"},{practice:"Keep Components Small",description:"If a component grows too large, split it",example:"Extract helper components or hooks",benefit:"Easier to understand and maintain"},{practice:"Use PropTypes or TypeScript",description:"Define prop types for better documentation",example:"Component.propTypes = { name: PropTypes.string }",benefit:"Catches bugs early, better IDE support"}],S=[{phase:"Creation",description:"Component is created and rendered for first time",hooks:["useState","useEffect with empty deps"],analogy:"Birth - coming into existence"},{phase:"Update",description:"Component re-renders due to props or state changes",hooks:["useEffect with dependency array","useMemo","useCallback"],analogy:"Growth - responding to changes"},{phase:"Unmount",description:"Component is removed from DOM",hooks:["useEffect cleanup function"],analogy:"Departure - cleaning up before leaving"}],k=[{id:"basics",label:"Component Basics",icon:"📚"},{id:"anatomy",label:"Component Anatomy",icon:"🔬"},{id:"types",label:"Component Types",icon:"📦"},{id:"composition",label:"Composition",icon:"🧩"},{id:"lifecycle",label:"Lifecycle",icon:"🔄"},{id:"best",label:"Best Practices",icon:"✅"}];return e.jsxs("div",{className:a("min-h-screen transition-colors duration-500",x?"dark bg-gray-900 text-gray-100":"bg-gray-50 text-gray-800"),children:[e.jsx("header",{className:"sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700",children:e.jsx("div",{className:"container mx-auto px-6 py-4",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:e.jsx(E,{size:24,className:"text-white"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"React Foundations"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Topic 13: Function-Based Components"})]})]}),e.jsx("button",{onClick:f,className:"px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-300 dark:border-gray-600",children:x?"☀️ Light":"🌙 Dark"})]})})}),e.jsxs("main",{className:"container mx-auto px-6 py-8",children:[e.jsx("section",{className:"mb-16 animate-[fadeIn_0.8s_ease-out]",children:e.jsxs("div",{className:"relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 border border-gray-700",children:[e.jsxs("div",{className:"relative z-10",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center text-3xl text-white mr-6",children:"🧱"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent",children:"Building with Components"}),e.jsx("p",{className:"text-xl text-gray-300",children:"The fundamental unit of React applications - reusable, composable building blocks"})]})]}),e.jsxs("p",{className:"text-xl mb-8 text-gray-300 leading-relaxed",children:["When Tuhina builds her library system, she doesn't create one giant page. She builds small, reusable components: ",e.jsx("code",{className:"text-blue-300",children:"BookCard"}),",",e.jsx("code",{className:"text-purple-300",children:" SearchBar"}),", ",e.jsx("code",{className:"text-green-300",children:"BorrowButton"}),". Each component has a single responsibility, and together they create a complete application."]}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("span",{className:"px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105",children:"Component Anatomy"}),e.jsx("span",{className:"px-4 py-2 bg-green-900/30 text-green-300 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105",children:"Composition Patterns"}),e.jsx("span",{className:"px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105",children:"Best Practices"}),e.jsx("span",{className:"px-4 py-2 bg-yellow-900/30 text-yellow-300 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105",children:"Student Projects"})]})]}),e.jsx("div",{className:"absolute right-8 top-8 opacity-10",children:e.jsxs("svg",{width:"200",height:"150",viewBox:"0 0 200 150",className:"animate-[float_6s_ease-in-out_infinite]",children:[e.jsx("rect",{x:"40",y:"40",width:"40",height:"40",rx:"5",fill:"none",stroke:"#3B82F6",strokeWidth:"2",children:e.jsx("animate",{attributeName:"x",from:"40",to:"50",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"60",y:"65",textAnchor:"middle",fontSize:"10",fill:"#3B82F6",children:"Card"}),e.jsx("rect",{x:"100",y:"40",width:"40",height:"40",rx:"5",fill:"none",stroke:"#10B981",strokeWidth:"2",children:e.jsx("animate",{attributeName:"x",from:"100",to:"90",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"120",y:"65",textAnchor:"middle",fontSize:"10",fill:"#10B981",children:"Button"}),e.jsx("rect",{x:"40",y:"100",width:"40",height:"40",rx:"5",fill:"none",stroke:"#8B5CF6",strokeWidth:"2",children:e.jsx("animate",{attributeName:"y",from:"100",to:"90",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"60",y:"125",textAnchor:"middle",fontSize:"10",fill:"#8B5CF6",children:"Input"}),e.jsx("rect",{x:"100",y:"100",width:"40",height:"40",rx:"5",fill:"none",stroke:"#F59E0B",strokeWidth:"2",children:e.jsx("animate",{attributeName:"y",from:"100",to:"110",dur:"3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"120",y:"125",textAnchor:"middle",fontSize:"10",fill:"#F59E0B",children:"List"}),e.jsx("rect",{x:"65",y:"65",width:"70",height:"50",rx:"8",fill:"none",stroke:"#EF4444",strokeWidth:"1",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"opacity",from:"0.3",to:"0.7",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"100",y:"80",textAnchor:"middle",fontSize:"8",fill:"#EF4444",children:"App"})]})})]})}),e.jsx("section",{className:"mb-8 animate-[slideUp_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]",children:e.jsx("div",{className:"flex overflow-x-auto space-x-2 pb-4",children:k.map(t=>e.jsxs("button",{onClick:()=>g(t.id),className:a("flex items-center px-4 py-3 rounded-lg whitespace-nowrap transition-all duration-300",i===t.id?"bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg":"bg-gray-800 text-gray-400 hover:bg-gray-700"),children:[e.jsx("span",{className:"mr-2",children:t.icon}),t.label]},t.id))})}),i==="basics"&&e.jsxs("section",{className:"mb-16 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]",children:[e.jsxs("div",{className:"flex items-center mb-8",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center mr-4",children:e.jsx("span",{className:"text-2xl",children:"📚"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-100",children:"What Are React Components?"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"The fundamental building blocks of every React application"})]})]}),e.jsxs("div",{className:a("rounded-xl p-8 mb-8","border border-blue-800","bg-gradient-to-br from-gray-800 to-gray-900"),children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-4",children:e.jsx("span",{className:"text-3xl",children:"🧩"})}),e.jsx("h3",{className:"text-2xl font-bold text-gray-100 mb-2",children:m.title}),e.jsxs("p",{className:"text-gray-400 italic mb-4",children:['"',m.analogy,'"']}),e.jsx("p",{className:"text-gray-300 max-w-3xl mx-auto",children:m.description})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-semibold text-gray-200 mb-4 flex items-center",children:[e.jsx(P,{size:20,className:"text-yellow-400 mr-2"}),"Key Characteristics:"]}),e.jsx("ul",{className:"space-y-4",children:m.characteristics.map((t,s)=>e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:a("w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0",s===0?"bg-blue-600":s===1?"bg-green-600":s===2?"bg-purple-600":"bg-yellow-600"),children:e.jsx("span",{className:"text-white font-bold",children:s+1})}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-gray-200",children:t.split(":")[0]}),e.jsx("p",{className:"text-gray-400 mt-1",children:t.split(":")[1]||t})]})]},s))})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-semibold text-gray-200 mb-4 flex items-center",children:[e.jsx(h,{size:20,className:"text-green-400 mr-2"}),"Why Components Matter:"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-lg bg-gray-900/50 border border-gray-700",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3",children:"1"}),e.jsx("h5",{className:"font-semibold text-blue-300",children:"Reusability"})]}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Write once, use everywhere. Like Swadeep's StudentCard across multiple pages."})]}),e.jsxs("div",{className:"p-4 rounded-lg bg-gray-900/50 border border-gray-700",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold mr-3",children:"2"}),e.jsx("h5",{className:"font-semibold text-green-300",children:"Maintainability"})]}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Small, focused components are easier to debug and update."})]}),e.jsxs("div",{className:"p-4 rounded-lg bg-gray-900/50 border border-gray-700",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold mr-3",children:"3"}),e.jsx("h5",{className:"font-semibold text-purple-300",children:"Team Collaboration"})]}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Different team members can work on different components simultaneously."})]})]})]})]})]}),e.jsxs("div",{className:a("rounded-xl p-6 mb-8","border border-green-800","bg-gradient-to-br from-gray-800 to-gray-900"),children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-100",children:"Function Component Examples"}),e.jsx("p",{className:"text-gray-500",children:"Modern React (React 19) uses function components exclusively"})]}),e.jsx("div",{className:"flex space-x-2",children:l.map((t,s)=>e.jsx("button",{onClick:()=>b(s),className:a("w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all",n===s?"bg-green-600 text-white scale-110":"bg-gray-800 text-gray-400 hover:bg-gray-700"),children:s+1},s))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"font-semibold text-gray-200",children:l[n].title}),e.jsxs("span",{className:"px-3 py-1 rounded-full bg-green-900/30 text-green-300 text-sm",children:["Example ",n+1]})]}),e.jsx("pre",{className:"text-sm text-gray-300 bg-black p-4 rounded overflow-x-auto max-h-[400px]",children:l[n].code})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-2",children:"Key Features:"}),e.jsx("ul",{className:"space-y-2",children:l[n].features.map((t,s)=>e.jsxs("li",{className:"flex items-center text-gray-400",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500 mr-3"}),t]},s))})]}),e.jsxs("div",{className:"p-4 rounded-lg bg-gray-900/50 border border-gray-700",children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-2",children:"Component Purpose:"}),e.jsx("p",{className:"text-gray-400",children:l[n].purpose})]}),e.jsxs("div",{className:"p-4 rounded-lg bg-blue-900/20 border border-blue-800",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-2",children:"Student Thinking:"}),e.jsxs("p",{className:"text-gray-400 text-sm",children:[n===0&&"When Swadeep needs buttons throughout his attendance system, he creates one PrimaryButton component instead of repeating styles.",n===1&&"Tuhina's StudentCard ensures every student is displayed consistently across her library system.",n===2&&"Abhronila's Counter component manages its own state - perfect for quiz timers and score tracking.",n===3&&"Debangshu uses conditional rendering to show different attendance statuses clearly."]})]})]})]})]}),e.jsxs("div",{className:a("rounded-xl p-6","border border-purple-800","bg-gradient-to-br from-gray-800 to-gray-900"),children:[e.jsx("h3",{className:"text-xl font-semibold mb-6 text-purple-300",children:"Component vs Regular Function"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-3",children:"Regular JavaScript Function:"}),e.jsx("pre",{className:"text-sm text-gray-300 bg-black p-4 rounded",children:`function calculateTotal(prices) {
  return prices.reduce((sum, price) => sum + price, 0)
}

// Usage:
const total = calculateTotal([10, 20, 30])
// Returns: 60`}),e.jsx("div",{className:"mt-4 p-3 rounded-lg bg-gray-900/50 border border-gray-700",children:e.jsx("p",{className:"text-gray-400 text-sm",children:"Takes input, returns data, used for calculations"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-3",children:"React Component Function:"}),e.jsx("pre",{className:"text-sm text-gray-300 bg-black p-4 rounded",children:`function StudentList({ students }) {
  return (
    <ul>
      {students.map(student => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  )
}

// Usage:
<StudentList students={studentData} />
// Returns: JSX describing UI`}),e.jsx("div",{className:"mt-4 p-3 rounded-lg bg-purple-900/20 border border-purple-800",children:e.jsx("p",{className:"text-gray-400 text-sm",children:"Takes props, returns JSX, describes user interface"})})]})]}),e.jsxs("div",{className:"mt-6 p-4 rounded-lg bg-green-900/20 border border-green-800",children:[e.jsx("h4",{className:"font-semibold text-green-300 mb-2",children:"The Key Difference:"}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Regular functions return data. React components return descriptions of UI (JSX). This is why components are special - they bridge JavaScript logic with visual interface. When a student from Barrackpore writes a component, they're not just calculating - they're describing what should appear on the screen."})]})]})]}),i==="anatomy"&&e.jsxs("section",{className:"mb-16 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]",children:[e.jsxs("div",{className:"flex items-center mb-8",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-green-900/30 flex items-center justify-center mr-4",children:e.jsx(B,{size:24})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-100",children:"Component Anatomy"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Dissecting a React component - every part explained"})]})]}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8",children:j.map((t,s)=>e.jsxs("div",{className:a("rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]","border border-gray-700","bg-gradient-to-br from-gray-800 to-gray-900","hover:shadow-lg","hover:border-blue-700"),children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:a("w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-4",s===0?"bg-blue-600":s===1?"bg-green-600":s===2?"bg-purple-600":s===3?"bg-yellow-600":"bg-red-600"),children:s+1}),e.jsx("h3",{className:"text-xl font-semibold text-gray-100",children:t.part})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-1",children:"Description:"}),e.jsx("p",{className:"text-gray-400 text-sm",children:t.description})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-black/50 border border-gray-700",children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-1",children:"Code:"}),e.jsx("code",{className:"text-sm text-blue-300",children:t.code})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-gray-900/50 border border-gray-700",children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-1",children:"Purpose:"}),e.jsx("p",{className:"text-gray-400 text-sm",children:t.purpose})]})]})]},s))}),e.jsxs("div",{className:a("rounded-xl p-6","border border-blue-800","bg-gradient-to-br from-gray-800 to-gray-900"),children:[e.jsx("h3",{className:"text-xl font-semibold mb-6 text-blue-300",children:"Complete Component - All Parts Together"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-3",children:"Annotated Component:"}),e.jsx("pre",{className:"text-sm text-gray-300 bg-black p-4 rounded overflow-x-auto",children:`// 1️⃣ Import dependencies
import { useState } from 'react'

// 2️⃣ Function declaration with descriptive name
function StudentGradeCard({ student, initialGrade = 'A' }) {
  // 3️⃣ Component state (optional)
  const [grade, setGrade] = useState(initialGrade)
  
  // 4️⃣ Event handlers (component logic)
  const handleGradeChange = (newGrade) => {
    setGrade(newGrade)
    console.log(\`\${student}'s grade changed to \${newGrade}\`)
  }
  
  // 5️⃣ Return JSX (the UI)
  return (
    <div className="grade-card p-4 border rounded">
      <h3 className="text-lg font-bold">{student}</h3>
      <div className="mt-2">
        <p>Current Grade: <span className="font-semibold">{grade}</span></p>
        <div className="mt-3 space-x-2">
          {['A', 'B', 'C', 'D'].map(g => (
            <button
              key={g}
              onClick={() => handleGradeChange(g)}
              className={\`px-3 py-1 rounded \${grade === g ? 'bg-blue-600 text-white' : 'bg-gray-200'}\`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// 6️⃣ Export for use in other files
export default StudentGradeCard`})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-3",children:"Component Breakdown:"}),e.jsx("div",{className:"space-y-4",children:[{part:"Imports",description:"Bring in React features and other components",icon:"📦"},{part:"Function Signature",description:"Defines component name and expected props",icon:"🏷️"},{part:"State & Variables",description:"Internal data management and calculations",icon:"💾"},{part:"Event Handlers",description:"Functions that respond to user interactions",icon:"🖱️"},{part:"JSX Return",description:"Describes what should be rendered",icon:"🎨"},{part:"Export",description:"Makes component available for import",icon:"🚀"}].map((t,s)=>e.jsxs("div",{className:a("flex items-center p-3 rounded-lg","border border-gray-700","bg-gray-900/50","hover:bg-gray-800/50"),children:[e.jsx("div",{className:"w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center text-xl mr-4",children:t.icon}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-gray-200",children:t.part}),e.jsx("p",{className:"text-gray-400 text-sm",children:t.description})]})]},s))}),e.jsxs("div",{className:"mt-6 p-4 rounded-lg bg-green-900/20 border border-green-800",children:[e.jsx("h4",{className:"font-semibold text-green-300 mb-2",children:"Student Exercise:"}),e.jsxs("p",{className:"text-gray-400 text-sm",children:["Create your own component following this structure. Start with a simple",e.jsx("code",{className:"text-green-300",children:" WelcomeMessage"})," component that takes a",e.jsx("code",{className:"text-green-300",children:" name"}),' prop and displays "Welcome, [name]!". Then add a button that changes the message when clicked.']})]})]})]})]}),e.jsxs("div",{className:a("mt-8 rounded-xl p-6","border border-purple-800","bg-gradient-to-br from-gray-800 to-gray-900"),children:[e.jsx("h3",{className:"text-xl font-semibold mb-6 text-purple-300",children:"Component File Structure"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-3",children:"Recommended Structure:"}),e.jsx("div",{className:"p-4 rounded-lg bg-gray-900/50 border border-gray-700",children:e.jsx("pre",{className:"text-sm text-gray-300",children:`src/components/StudentCard/
├── StudentCard.jsx          # Main component
├── StudentCard.module.css   # Component styles (optional)
├── StudentCard.test.jsx     # Tests
└── index.js                # Export file

// index.js contents:
export { default } from './StudentCard'`})}),e.jsx("div",{className:"mt-4 p-4 rounded-lg bg-blue-900/20 border border-blue-800",children:e.jsxs("p",{className:"text-gray-400 text-sm",children:["This structure keeps related files together and makes imports cleaner:",e.jsx("code",{className:"text-blue-300",children:" import StudentCard from './components/StudentCard'"})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-3",children:"File Naming Conventions:"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center p-3 rounded-lg bg-gray-900/50 border border-gray-700",children:[e.jsx(c,{size:16,className:"text-green-400 mr-3"}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-gray-200",children:"PascalCase for components"}),e.jsxs("p",{className:"text-gray-400 text-sm",children:[e.jsx("code",{className:"text-green-300",children:"StudentCard.jsx"})," not ",e.jsx("code",{className:"text-red-300",children:"student-card.jsx"})]})]})]}),e.jsxs("div",{className:"flex items-center p-3 rounded-lg bg-gray-900/50 border border-gray-700",children:[e.jsx(c,{size:16,className:"text-green-400 mr-3"}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-gray-200",children:"Descriptive names"}),e.jsxs("p",{className:"text-gray-400 text-sm",children:[e.jsx("code",{className:"text-green-300",children:"AttendanceStatisticsCard.jsx"})," not ",e.jsx("code",{className:"text-red-300",children:"Stats.jsx"})]})]})]}),e.jsxs("div",{className:"flex items-center p-3 rounded-lg bg-gray-900/50 border border-gray-700",children:[e.jsx(c,{size:16,className:"text-green-400 mr-3"}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-gray-200",children:"One component per file"}),e.jsx("p",{className:"text-gray-400 text-sm",children:"(Except small related helper components)"})]})]}),e.jsxs("div",{className:"flex items-center p-3 rounded-lg bg-gray-900/50 border border-gray-700",children:[e.jsx(c,{size:16,className:"text-green-400 mr-3"}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-gray-200",children:"Use .jsx extension"}),e.jsx("p",{className:"text-gray-400 text-sm",children:"Makes it clear the file contains JSX"})]})]})]})]})]})]})]}),i==="types"&&e.jsxs("section",{className:"mb-16 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]",children:[e.jsxs("div",{className:"flex items-center mb-8",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-purple-900/30 flex items-center justify-center mr-4",children:e.jsx(h,{size:24})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-100",children:"Types of Components"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Different components for different purposes - choosing the right tool"})]})]}),e.jsx("div",{className:"grid md:grid-cols-2 gap-6 mb-8",children:N.map((t,s)=>e.jsxs("div",{className:a("rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]","border border-purple-800","bg-gradient-to-br from-gray-800 to-gray-900","hover:shadow-lg hover:border-purple-700"),children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:a("w-12 h-12 rounded-xl flex items-center justify-center text-xl mr-4",s===0?"bg-blue-600":s===1?"bg-green-600":s===2?"bg-yellow-600":"bg-red-600"),children:s===0?"🎨":s===1?"⚙️":s===2?"🏗️":"🛠️"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-100",children:t.type}),e.jsx("p",{className:"text-gray-500",children:t.description})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-2",children:"Characteristics:"}),e.jsx("ul",{className:"space-y-2",children:t.characteristics.map((r,d)=>e.jsxs("li",{className:"flex items-center text-gray-400",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-purple-500 mr-3"}),r]},d))})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-gray-900/50 border border-gray-700",children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-1",children:"Examples:"}),e.jsx("p",{className:"text-gray-400",children:t.example})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-blue-900/20 border border-blue-800",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-1",children:"Analogy:"}),e.jsxs("p",{className:"text-gray-400 text-sm",children:['"',t.analogy,'"']})]})]})]},s))}),e.jsxs("div",{className:a("rounded-xl p-6 mb-8","border border-green-800","bg-gradient-to-br from-gray-800 to-gray-900"),children:[e.jsx("h3",{className:"text-xl font-semibold mb-6 text-green-300",children:"Choosing Component Type"}),e.jsx("div",{className:"p-6 rounded-lg bg-gray-900/50 border border-gray-700",children:e.jsxs("div",{className:"space-y-8",children:[e.jsx("div",{className:"text-center",children:e.jsx("div",{className:"inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600",children:e.jsx("span",{className:"font-bold text-white",children:"What does this component need to do?"})})}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl",children:"↓"}),e.jsx("div",{className:"text-gray-500 text-sm",children:"choose based on responsibility"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 mb-2",children:e.jsx("span",{className:"font-bold text-white",children:"Display Data"})}),e.jsx("p",{className:"text-gray-400 text-sm mb-3",children:"Show information to user"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-gray-400 text-sm",children:"✅ Presentational Component"}),e.jsx("div",{className:"text-gray-400 text-sm",children:"✅ Layout Component"})]}),e.jsx("div",{className:"mt-3 p-2 rounded bg-gray-800",children:e.jsx("code",{className:"text-xs text-blue-300",children:"StudentCard, Header, Footer"})})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"inline-flex items-center justify-center px-4 py-2 rounded-lg bg-green-600 mb-2",children:e.jsx("span",{className:"font-bold text-white",children:"Manage Logic"})}),e.jsx("p",{className:"text-gray-400 text-sm mb-3",children:"Handle data, state, events"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-gray-400 text-sm",children:"✅ Container Component"}),e.jsx("div",{className:"text-gray-400 text-sm",children:"✅ Utility Component"})]}),e.jsx("div",{className:"mt-3 p-2 rounded bg-gray-800",children:e.jsx("code",{className:"text-xs text-green-300",children:"UserProfile, SearchManager"})})]})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl",children:"↓"}),e.jsx("div",{className:"text-gray-500 text-sm",children:"will it be reused?"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"inline-flex items-center justify-center px-6 py-3 rounded-lg bg-yellow-600",children:e.jsx("span",{className:"font-bold text-white",children:"Specific Use"})}),e.jsxs("div",{className:"mt-4 space-y-2",children:[e.jsx("div",{className:"text-gray-400 text-sm",children:"Used in one place"}),e.jsx("div",{className:"text-gray-400 text-sm",children:"Tightly coupled to context"}),e.jsx("div",{className:"text-gray-400 text-sm",children:"Can be larger, more complex"})]})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"inline-flex items-center justify-center px-6 py-3 rounded-lg bg-red-600",children:e.jsx("span",{className:"font-bold text-white",children:"Reusable"})}),e.jsxs("div",{className:"mt-4 space-y-2",children:[e.jsx("div",{className:"text-gray-400 text-sm",children:"Used in multiple places"}),e.jsx("div",{className:"text-gray-400 text-sm",children:"Loosely coupled, generic"}),e.jsx("div",{className:"text-gray-400 text-sm",children:"Should be small, focused"})]})]})]})]})}),e.jsxs("div",{className:"mt-6 p-4 rounded-lg bg-green-900/20 border border-green-800",children:[e.jsx("h4",{className:"font-semibold text-green-300 mb-2",children:"Student Decision Framework:"}),e.jsx("p",{className:"text-gray-400 text-sm",children:'When Abhronila creates a component for her quiz app, she asks: "Is this for showing things (Presentational) or doing things (Container)?" Then: "Will I use this elsewhere (reusable) or just here (specific)?" This two-question framework guides her to the right component type.'})]})]}),e.jsxs("div",{className:a("rounded-xl p-6","border border-blue-800","bg-gradient-to-br from-gray-800 to-gray-900"),children:[e.jsx("h3",{className:"text-xl font-semibold mb-6 text-blue-300",children:"Student Project Component Architecture"}),e.jsx("div",{className:"space-y-6",children:w.map((t,s)=>e.jsxs("div",{className:a("rounded-lg p-5","border border-gray-700","bg-gray-900/50","hover:bg-gray-800/30"),children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white mr-4",children:e.jsx("span",{className:"font-bold",children:t.student.charAt(0)})}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-semibold text-gray-100",children:[t.student,"'s Project"]}),e.jsx("p",{className:"text-gray-500",children:t.project})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-gray-200 mb-2",children:"Components:"}),e.jsx("div",{className:"space-y-3",children:t.components.map((r,d)=>e.jsxs("div",{className:a("flex items-center p-3 rounded",r.type==="Presentational"?"bg-blue-900/20 border border-blue-800":r.type==="Container"?"bg-green-900/20 border border-green-800":r.type==="Layout"?"bg-yellow-900/20 border border-yellow-800":"bg-red-900/20 border border-red-800"),children:[e.jsx("div",{className:a("w-8 h-8 rounded-full flex items-center justify-center mr-3",r.type==="Presentational"?"bg-blue-600":r.type==="Container"?"bg-green-600":r.type==="Layout"?"bg-yellow-600":"bg-red-600"),children:e.jsx("span",{className:"text-white text-xs",children:r.type.charAt(0)})}),e.jsxs("div",{children:[e.jsx("h6",{className:"font-semibold text-gray-200",children:r.name}),e.jsx("p",{className:"text-gray-400 text-sm",children:r.purpose})]})]},d))})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-gray-200 mb-2",children:"File Structure:"}),e.jsx("div",{className:"p-4 rounded-lg bg-gray-900 border border-gray-700",children:e.jsx("pre",{className:"text-sm text-gray-300",children:t.structure})}),e.jsxs("div",{className:"mt-4 p-3 rounded-lg bg-purple-900/20 border border-purple-800",children:[e.jsx("h6",{className:"font-semibold text-purple-300 mb-1",children:"Architecture Insight:"}),e.jsxs("p",{className:"text-gray-400 text-sm",children:[s===0&&"Swadeep separates presentational cards from container logic for better reusability.",s===1&&"Tuhina uses layout components for consistent page structure across her library system.",s===2&&"Abhronila keeps utility components like Timer separate for easy testing and reuse."]})]})]})]})]},s))})]})]}),i==="composition"&&e.jsxs("section",{className:"mb-16 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]",children:[e.jsxs("div",{className:"flex items-center mb-8",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-yellow-900/30 flex items-center justify-center mr-4",children:e.jsx(T,{size:24})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-100",children:"Component Composition"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Combining small components to build complex UIs"})]})]}),e.jsx("div",{className:"grid md:grid-cols-2 gap-6 mb-8",children:v.map((t,s)=>e.jsxs("div",{className:a("rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]","border border-yellow-800","bg-gradient-to-br from-gray-800 to-gray-900","hover:shadow-lg hover:border-yellow-700"),children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold mr-4",children:s+1}),e.jsx("h3",{className:"text-xl font-semibold text-yellow-300",children:t.pattern})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-2",children:"Implementation:"}),e.jsx("pre",{className:"text-xs text-gray-300 bg-black p-3 rounded overflow-x-auto",children:t.code})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-gray-900/50 border border-gray-700",children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-1",children:"Explanation:"}),e.jsx("p",{className:"text-gray-400 text-sm",children:t.explanation})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-blue-900/20 border border-blue-800",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-1",children:"Student Use Case:"}),e.jsxs("p",{className:"text-gray-400 text-sm",children:[s===0&&"Swadeep uses this for his AttendanceDashboard composing smaller components.",s===1&&"Tuhina's BookCard uses children prop for flexible content display.",s===2&&"Abhronila creates specialized quiz buttons from a base Button component.",s===3&&"Debangshu builds complex forms using compound components for better organization."]})]})]})]},s))}),e.jsxs("div",{className:a("rounded-xl p-6","border border-red-800","bg-gradient-to-br from-gray-800 to-gray-900"),children:[e.jsx("h3",{className:"text-xl font-semibold mb-6 text-red-300",children:"Composition Over Inheritance"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-3",children:"❌ Inheritance Approach (Not Recommended):"}),e.jsx("pre",{className:"text-sm text-gray-300 bg-black p-4 rounded",children:`class BaseButton {
  constructor(label) {
    this.label = label
  }
  
  render() {
    return \`<button>\${this.label}</button>\`
  }
}

class PrimaryButton extends BaseButton {
  render() {
    return \`<button class="primary">\${this.label}</button>\`
  }
}

// Problems:
// 1. Tight coupling
// 2. Hard to change
// 3. Inheritance hierarchy gets complex`})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-3",children:"✅ Composition Approach (React Way):"}),e.jsx("pre",{className:"text-sm text-gray-300 bg-black p-4 rounded",children:`function Button({ variant = 'default', children, ...props }) {
  const baseClasses = "px-4 py-2 rounded"
  const variantClasses = {
    default: "bg-gray-200",
    primary: "bg-blue-600 text-white",
    danger: "bg-red-600 text-white"
  }
  
  return (
    <button 
      className={\`\${baseClasses} \${variantClasses[variant]}\`}
      {...props}
    >
      {children}
    </button>
  )
}

// Usage:
<Button variant="primary">Save</Button>
<Button variant="danger">Delete</Button>

// Benefits:
// 1. Flexible
// 2. Easy to change
// 3. No complex hierarchy`})]})]}),e.jsxs("div",{className:"p-4 rounded-lg bg-red-900/20 border border-red-800",children:[e.jsx("h4",{className:"font-semibold text-red-300 mb-2",children:"React Philosophy:"}),e.jsx("p",{className:"text-gray-400 text-sm",children:'React favors composition over inheritance. Instead of creating complex class hierarchies, build small, focused components and combine them. This approach is more flexible, easier to understand, and aligns with how UI naturally breaks down into pieces. When students in Barrackpore build their applications, they should think "What components can I combine?" not "What can I inherit from?"'})]})]}),e.jsxs("div",{className:a("mt-8 rounded-xl p-6","border border-green-800","bg-gradient-to-br from-gray-800 to-gray-900"),children:[e.jsx("h3",{className:"text-xl font-semibold mb-6 text-green-300",children:"Visual Composition Example"}),e.jsx("div",{className:"p-6 rounded-lg bg-gray-900/50 border border-gray-700",children:e.jsxs("div",{className:"flex flex-col items-center space-y-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-4",children:"Atomic Components"}),e.jsx("div",{className:"flex space-x-4",children:["Button","Input","Label","Icon"].map((t,s)=>e.jsx("div",{className:"w-16 h-16 rounded-lg bg-blue-900/30 border border-blue-800 flex items-center justify-center",children:e.jsx("span",{className:"text-blue-300 text-sm",children:t})},s))}),e.jsx("p",{className:"text-gray-500 text-sm mt-2",children:"Small, reusable building blocks"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl",children:"↓"}),e.jsx("div",{className:"text-gray-500 text-sm",children:"compose together"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-4",children:"Molecular Components"}),e.jsx("div",{className:"flex space-x-6",children:["SearchBar","FormField","Card"].map((t,s)=>e.jsx("div",{className:a("w-24 h-20 rounded-lg border flex items-center justify-center",s===0?"bg-green-900/30 border-green-800":s===1?"bg-purple-900/30 border-purple-800":"bg-yellow-900/30 border-yellow-800"),children:e.jsx("span",{className:a("text-sm",s===0?"text-green-300":s===1?"text-purple-300":"text-yellow-300"),children:t})},s))}),e.jsx("p",{className:"text-gray-500 text-sm mt-2",children:"Combinations of atomic components"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl",children:"↓"}),e.jsx("div",{className:"text-gray-500 text-sm",children:"compose together"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-4",children:"Organism Components"}),e.jsx("div",{className:"flex space-x-8",children:["LoginForm","ProductCard","Navbar"].map((t,s)=>e.jsx("div",{className:a("w-32 h-24 rounded-lg border flex items-center justify-center",s===0?"bg-red-900/30 border-red-800":s===1?"bg-indigo-900/30 border-indigo-800":"bg-pink-900/30 border-pink-800"),children:e.jsx("span",{className:a(s===0?"text-red-300":s===1?"text-indigo-300":"text-pink-300"),children:t})},s))}),e.jsx("p",{className:"text-gray-500 text-sm mt-2",children:"Complete UI sections"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl",children:"↓"}),e.jsx("div",{className:"text-gray-500 text-sm",children:"compose together"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-4",children:"Complete Page"}),e.jsx("div",{className:"w-64 h-32 rounded-xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800 flex items-center justify-center",children:e.jsx("span",{className:"text-xl text-white",children:"Dashboard Page"})}),e.jsx("p",{className:"text-gray-500 text-sm mt-2",children:"Full application page composed of organisms"})]})]})}),e.jsxs("div",{className:"mt-6 p-4 rounded-lg bg-green-900/20 border border-green-800",children:[e.jsx("h4",{className:"font-semibold text-green-300 mb-2",children:"Atomic Design for Students:"}),e.jsx("p",{className:"text-gray-400 text-sm",children:'This "Atomic Design" approach helps students think about component hierarchy. Start with atoms (smallest components), combine into molecules (small groups), then organisms (complete sections), and finally pages (full views). This systematic approach prevents "mega-components" that try to do everything.'})]})]})]}),i==="lifecycle"&&e.jsxs("section",{className:"mb-16 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]",children:[e.jsxs("div",{className:"flex items-center mb-8",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-red-900/30 flex items-center justify-center mr-4",children:e.jsx(D,{size:24})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-100",children:"Component Lifecycle"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"How components are born, live, and are removed"})]})]}),e.jsx("div",{className:"grid md:grid-cols-3 gap-6 mb-8",children:S.map((t,s)=>e.jsxs("div",{className:a("rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]","border",s===0?"border-green-800":s===1?"border-yellow-800":"border-red-800","bg-gradient-to-br from-gray-800 to-gray-900",s===0?"hover:border-green-700":s===1?"hover:border-yellow-700":"hover:border-red-700"),children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:a("w-12 h-12 rounded-xl flex items-center justify-center text-xl mr-4",s===0?"bg-green-600":s===1?"bg-yellow-600":"bg-red-600"),children:s===0?"👶":s===1?"📈":"👋"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-100",children:t.phase}),e.jsx("p",{className:"text-gray-500 text-sm",children:t.analogy})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-1",children:"Description:"}),e.jsx("p",{className:"text-gray-400 text-sm",children:t.description})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-1",children:"Relevant Hooks:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:t.hooks.map((r,d)=>e.jsx("span",{className:"px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm",children:r},d))})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-gray-900/50 border border-gray-700",children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-1",children:"Student Example:"}),e.jsxs("p",{className:"text-gray-400 text-sm",children:[s===0&&"When Swadeep's AttendanceCard first appears, useState sets up its initial state.",s===1&&"When Tuhina's SearchBar receives new props, useEffect updates the search results.",s===2&&"When Abhronila's Timer is removed, useEffect cleanup stops the interval."]})]})]})]},s))}),e.jsxs("div",{className:a("rounded-xl p-6","border border-blue-800","bg-gradient-to-br from-gray-800 to-gray-900"),children:[e.jsx("h3",{className:"text-xl font-semibold mb-6 text-blue-300",children:"Component Lifecycle Flow"}),e.jsx("div",{className:"p-6 rounded-lg bg-gray-900/50 border border-gray-700",children:e.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[e.jsxs("div",{className:a("text-center mb-8 md:mb-0",p?"opacity-100 scale-100":"opacity-50 scale-95"),children:[e.jsx("div",{className:"w-20 h-20 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-4",children:e.jsx("span",{className:"text-2xl",children:"👶"})}),e.jsx("h4",{className:"font-semibold text-gray-200 mb-2",children:"Creation"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"text-gray-400 text-sm",children:"Component is born"}),e.jsx("div",{className:"text-gray-400 text-sm",children:"useState initializes"}),e.jsx("div",{className:"text-gray-400 text-sm",children:"First render happens"})]})]}),e.jsxs("div",{className:"text-center mb-8 md:mb-0",children:[e.jsx("div",{className:"text-3xl animate-pulse",children:"➡️"}),e.jsx("div",{className:"text-gray-500 text-sm",children:"props/state change"})]}),e.jsxs("div",{className:a("text-center mb-8 md:mb-0",p?"opacity-100 scale-100":"opacity-50 scale-95"),children:[e.jsx("div",{className:"w-20 h-20 rounded-full bg-yellow-600 flex items-center justify-center mx-auto mb-4",children:e.jsx("span",{className:"text-2xl",children:"🔄"})}),e.jsx("h4",{className:"font-semibold text-gray-200 mb-2",children:"Updates"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"text-gray-400 text-sm",children:"Re-renders occur"}),e.jsx("div",{className:"text-gray-400 text-sm",children:"State/props change"}),e.jsx("div",{className:"text-gray-400 text-sm",children:"useEffect runs"})]})]}),e.jsxs("div",{className:"text-center mb-8 md:mb-0",children:[e.jsx("div",{className:"text-3xl animate-pulse",children:"➡️"}),e.jsx("div",{className:"text-gray-500 text-sm",children:"component removed"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-20 h-20 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-4",children:e.jsx("span",{className:"text-2xl",children:"👋"})}),e.jsx("h4",{className:"font-semibold text-gray-200 mb-2",children:"Unmount"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"text-gray-400 text-sm",children:"Component removed"}),e.jsx("div",{className:"text-gray-400 text-sm",children:"Cleanup runs"}),e.jsx("div",{className:"text-gray-400 text-sm",children:"Memory freed"})]})]})]})}),e.jsxs("div",{className:"mt-6 p-4 rounded-lg bg-blue-900/20 border border-blue-800",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-2",children:"Lifecycle Thinking:"}),e.jsx("p",{className:"text-gray-400 text-sm",children:`When Debangshu builds components, he thinks about their entire lifecycle: "What setup does this need when created? What should happen when data changes? What cleanup is needed when it's removed?" This holistic thinking prevents memory leaks and ensures components behave correctly throughout their lifespan.`})]})]}),e.jsxs("div",{className:a("mt-8 rounded-xl p-6","border border-purple-800","bg-gradient-to-br from-gray-800 to-gray-900"),children:[e.jsx("h3",{className:"text-xl font-semibold mb-6 text-purple-300",children:"Lifecycle in Code"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-3",children:"Component with Full Lifecycle:"}),e.jsx("pre",{className:"text-sm text-gray-300 bg-black p-4 rounded overflow-x-auto",children:`function StudentTracker({ studentId }) {
  // 🎯 CREATION: Initialize state
  const [attendance, setAttendance] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  // 🎯 CREATION & UPDATES: Fetch data when studentId changes
  useEffect(() => {
    setIsLoading(true)
    
    // Fetch attendance data
    fetchAttendance(studentId)
      .then(data => {
        setAttendance(data)
        setIsLoading(false)
      })
    
    // 🎯 UNMOUNT: Cleanup function
    return () => {
      // Cancel any pending requests
      console.log('Cleaning up tracker for student:', studentId)
    }
  }, [studentId]) // Re-run when studentId changes
  
  // 🎯 UPDATES: Calculate derived data
  const totalClasses = attendance.length
  const presentCount = attendance.filter(a => a.isPresent).length
  const attendanceRate = totalClasses > 0 
    ? (presentCount / totalClasses * 100).toFixed(1)
    : 0
  
  // 🎯 RENDER: Return JSX
  return (
    <div className="tracker">
      {isLoading ? (
        <p>Loading attendance...</p>
      ) : (
        <>
          <h3>Attendance: {attendanceRate}%</h3>
          <ul>
            {attendance.map(record => (
              <li key={record.date}>
                {record.date}: {record.isPresent ? '✓' : '✗'}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}`})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-3",children:"Lifecycle Breakdown:"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white font-bold mr-3",children:"1"}),e.jsx("h5",{className:"font-semibold text-green-300",children:"Creation (Mount)"})]}),e.jsxs("ul",{className:"space-y-2 text-gray-400 text-sm ml-9",children:[e.jsx("li",{children:"• useState hooks initialize state"}),e.jsx("li",{children:"• Component renders for first time"}),e.jsx("li",{children:"• useEffect runs after initial render"}),e.jsx("li",{children:"• Data fetching begins"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold mr-3",children:"2"}),e.jsx("h5",{className:"font-semibold text-yellow-300",children:"Updates (Re-renders)"})]}),e.jsxs("ul",{className:"space-y-2 text-gray-400 text-sm ml-9",children:[e.jsx("li",{children:"• studentId prop changes trigger re-render"}),e.jsx("li",{children:"• useEffect dependency array detects change"}),e.jsx("li",{children:"• Cleanup runs from previous effect"}),e.jsx("li",{children:"• New effect runs with new studentId"}),e.jsx("li",{children:"• State updates trigger another re-render"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white font-bold mr-3",children:"3"}),e.jsx("h5",{className:"font-semibold text-red-300",children:"Removal (Unmount)"})]}),e.jsxs("ul",{className:"space-y-2 text-gray-400 text-sm ml-9",children:[e.jsx("li",{children:"• Component removed from DOM"}),e.jsx("li",{children:"• useEffect cleanup function runs"}),e.jsx("li",{children:"• Any pending promises are cancelled"}),e.jsx("li",{children:"• Event listeners removed"}),e.jsx("li",{children:"• Memory is freed"})]})]})]})]})]})]})]}),i==="best"&&e.jsxs("section",{className:"mb-16 animate-[slideUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]",children:[e.jsxs("div",{className:"flex items-center mb-8",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-gray-900/30 flex items-center justify-center mr-4",children:e.jsx("span",{className:"text-2xl",children:"✅"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-100",children:"Component Best Practices"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Professional habits for building maintainable, reusable components"})]})]}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8",children:C.map((t,s)=>e.jsxs("div",{className:a("rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]","border border-gray-700","bg-gradient-to-br from-gray-800 to-gray-900","hover:shadow-lg hover:border-green-700"),children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold mr-4",children:s+1}),e.jsx("h3",{className:"text-xl font-semibold text-green-300",children:t.practice})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-1",children:"Description:"}),e.jsx("p",{className:"text-gray-400 text-sm",children:t.description})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-gray-900/50 border border-gray-700",children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-1",children:"Example:"}),e.jsx("p",{className:"text-gray-400 text-sm",children:t.example})]}),e.jsxs("div",{className:"p-3 rounded-lg bg-blue-900/20 border border-blue-800",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-1",children:"Benefit:"}),e.jsx("p",{className:"text-gray-400 text-sm",children:t.benefit})]})]})]},s))}),e.jsxs("div",{className:a("rounded-xl p-6 mb-8","border border-yellow-800","bg-gradient-to-br from-gray-800 to-gray-900"),children:[e.jsx("h3",{className:"text-xl font-semibold mb-6 text-yellow-300",children:"Component Quality Checklist"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-4",children:"✅ Does Your Component:"}),e.jsx("div",{className:"space-y-3",children:["Have a single, clear responsibility?","Use descriptive, PascalCase naming?","Accept props to customize behavior?","Provide sensible default props?","Handle edge cases (null, undefined)?","Have appropriate TypeScript/PropTypes?","Include helpful comments for complex logic?","Export properly for reuse?"].map((t,s)=>e.jsxs("div",{className:"flex items-center p-3 rounded-lg bg-green-900/20 border border-green-800",children:[e.jsx(c,{size:16,className:"text-green-400 mr-3"}),e.jsx("span",{className:"text-gray-300",children:t})]},s))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-4",children:"❌ Does Your Component Avoid:"}),e.jsx("div",{className:"space-y-3",children:["Side effects in render (API calls directly in JSX)?","Overly complex logic (should be split)?","Tight coupling to specific parent?","Magic numbers/strings (use constants)?","Large files (>150 lines consider splitting)?","Mixing presentation and business logic?","Direct DOM manipulation (use React state)?","Prop drilling (consider Context API)?"].map((t,s)=>e.jsxs("div",{className:"flex items-center p-3 rounded-lg bg-red-900/20 border border-red-800",children:[e.jsx("span",{className:"text-red-400 mr-3 text-xl",children:"✗"}),e.jsx("span",{className:"text-gray-300",children:t})]},s))})]})]}),e.jsxs("div",{className:"mt-6 p-4 rounded-lg bg-yellow-900/20 border border-yellow-800",children:[e.jsx("h4",{className:"font-semibold text-yellow-300 mb-2",children:"Code Review Exercise:"}),e.jsxs("p",{className:"text-gray-400 text-sm",children:["Pair up with a classmate from a different location (Barrackpore with Ichapur). Review each other's components using this checklist. Look for:",e.jsx("br",{}),"1. Single responsibility violations",e.jsx("br",{}),"2. Missing prop validation",e.jsx("br",{}),"3. Opportunities for splitting large components",e.jsx("br",{}),"4. Magic strings/numbers that should be constants",e.jsx("br",{}),"This peer review builds professional skills and improves code quality."]})]})]}),e.jsxs("div",{className:a("rounded-xl p-6","border border-purple-800","bg-gradient-to-br from-gray-800 to-gray-900"),children:[e.jsx("h3",{className:"text-xl font-semibold mb-6 text-purple-300",children:"Refactoring to Better Components"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-3",children:"Before: Monolithic Component"}),e.jsx("pre",{className:"text-sm text-gray-300 bg-black p-4 rounded overflow-x-auto",children:`function StudentDashboard() {
  // Too many responsibilities!
  const [students, setStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [attendance, setAttendance] = useState({})
  const [grades, setGrades] = useState({})
  
  // Data fetching mixed with UI logic
  useEffect(() => {
    fetchStudents().then(setStudents)
    fetchAttendance().then(setAttendance)
    fetchGrades().then(setGrades)
  }, [])
  
  // Complex rendering logic
  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>
      
      {/* Student list section */}
      <div className="student-list">
        <h2>Students</h2>
        <ul>
          {students.map(student => (
            <li key={student.id}>
              <button onClick={() => setSelectedStudent(student)}>
                {student.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Attendance section */}
      {selectedStudent && (
        <div className="attendance-section">
          <h2>Attendance for {selectedStudent.name}</h2>
          <p>Present: {attendance[selectedStudent.id]?.present || 0}</p>
          <p>Absent: {attendance[selectedStudent.id]?.absent || 0}</p>
        </div>
      )}
      
      {/* Grades section */}
      {selectedStudent && (
        <div className="grades-section">
          <h2>Grades for {selectedStudent.name}</h2>
          <p>Math: {grades[selectedStudent.id]?.math || 'N/A'}</p>
          <p>Science: {grades[selectedStudent.id]?.science || 'N/A'}</p>
        </div>
      )}
    </div>
  )
}`}),e.jsx("div",{className:"mt-3 p-3 rounded-lg bg-red-900/20 border border-red-800",children:e.jsx("p",{className:"text-gray-400 text-sm",children:"Problems: 300+ lines, mixed responsibilities, hard to test, impossible to reuse parts"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-200 mb-3",children:"After: Composed Components"}),e.jsx("pre",{className:"text-sm text-gray-300 bg-black p-4 rounded overflow-x-auto",children:`// StudentDashboard.jsx - Now just composition
function StudentDashboard() {
  const { students, loading } = useStudents()
  const [selectedId, setSelectedId] = useState(null)
  
  return (
    <DashboardLayout>
      <StudentList 
        students={students}
        onSelect={setSelectedId}
        loading={loading}
      />
      
      {selectedId && (
        <>
          <AttendanceCard studentId={selectedId} />
          <GradesCard studentId={selectedId} />
        </>
      )}
    </DashboardLayout>
  )
}

// StudentList.jsx - Single responsibility
function StudentList({ students, onSelect, loading }) {
  if (loading) return <LoadingSpinner />
  
  return (
    <Card title="Students">
      {students.map(student => (
        <StudentListItem 
          key={student.id}
          student={student}
          onClick={() => onSelect(student.id)}
        />
      ))}
    </Card>
  )
}

// AttendanceCard.jsx - Reusable, testable
function AttendanceCard({ studentId }) {
  const { data, loading } = useAttendance(studentId)
  
  return (
    <Card title="Attendance">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <p>Present: {data.present}</p>
          <p>Absent: {data.absent}</p>
        </>
      )}
    </Card>
  )
}

// Similar for GradesCard, StudentListItem, etc.`}),e.jsx("div",{className:"mt-3 p-3 rounded-lg bg-green-900/20 border border-green-800",children:e.jsx("p",{className:"text-gray-400 text-sm",children:"Benefits: Each component <100 lines, reusable, testable, maintainable"})})]})]})]})]}),e.jsx("section",{className:"mb-16 animate-[slideUp_0.8s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]",children:e.jsx("div",{className:a("rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl","border-l-4 border-blue-500","bg-gradient-to-r from-gray-800 to-gray-900","hover:from-gray-700 hover:to-gray-800"),children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0 mr-6",children:e.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:e.jsx("span",{className:"text-2xl text-white",children:"👨‍🏫"})})}),e.jsxs("div",{className:"flex-grow",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-100 mr-4",children:"Teacher's Note"}),e.jsx("span",{className:"px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 text-sm font-medium",children:"Sukanta Hui"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-semibold text-gray-200 mb-3 flex items-center",children:[e.jsx("span",{className:"w-6 h-6 rounded-full bg-green-900/30 flex items-center justify-center mr-3",children:"🎯"}),"The Component Mindset Shift:"]}),e.jsx("p",{className:"text-gray-400 leading-relaxed",children:`When Swadeep first learns React, he thinks in pages: "I need an attendance page." The component mindset shift is thinking in pieces: "I need a StudentCard, an AttendanceChart, a DatePicker." This shift from monolithic to modular thinking is fundamental. It's not just about React—it's about how we solve complex problems by breaking them into manageable pieces.`})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-semibold text-gray-200 mb-3 flex items-center",children:[e.jsx("span",{className:"w-8 h-8 rounded-full bg-yellow-900/30 flex items-center justify-center mr-3",children:"💡"}),"Teaching Component Thinking:"]}),e.jsxs("ul",{className:"space-y-2 text-gray-400",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-1 mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-xs",children:"1"})}),e.jsx("span",{children:"Start with UI breakdown exercises - take a screenshot, draw boxes around components"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-1 mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-xs",children:"2"})}),e.jsx("span",{children:'Use the "single responsibility" test - can you describe the component in one sentence?'})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-1 mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-xs",children:"3"})}),e.jsx("span",{children:"Practice refactoring - take working code and split it into smaller components"})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-1 mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-xs",children:"4"})}),e.jsx("span",{children:'Component naming games - "What would you call this piece?" builds vocabulary'})]})]})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-semibold text-gray-200 mb-3 flex items-center",children:[e.jsx("span",{className:"w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-3",children:"⚠️"}),"Common Student Challenges:"]}),e.jsxs("ul",{className:"space-y-2 text-gray-400",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-1 mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-xs",children:"!"})}),e.jsx("span",{children:'"Everything in one component works, why split it?" (maintainability)'})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-1 mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-xs",children:"!"})}),e.jsx("span",{children:'"How small is too small?" (when splitting creates more complexity)'})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-1 mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-xs",children:"!"})}),e.jsx("span",{children:'"Props drilling feels messy" (introduce Context API later)'})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt=1 mr-3 flex-shrink-0",children:e.jsx("span",{className:"text-xs",children:"!"})}),e.jsx("span",{children:`"I don't know what to name components" (practice with real examples)`})]})]})]})]}),e.jsxs("div",{className:"mt-6 p-5 rounded-xl bg-gray-800/50 border border-gray-700",children:[e.jsxs("h5",{className:"font-semibold text-gray-200 mb-3 flex items-center",children:[e.jsx("span",{className:"w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center mr-3",children:"📚"}),"27 Years of Component Thinking:"]}),e.jsx("p",{className:"text-gray-400",children:"I've taught software design since 1997. The component concept appears everywhere: in object-oriented programming (classes), in functional programming (pure functions), in architecture (microservices). React components are just the latest manifestation of a timeless principle: divide and conquer. When Tuhina builds her library system with components, she's learning a universal problem-solving strategy. The real skill isn't React syntax—it's the ability to look at a complex system and see the natural seams where it can be divided. That skill transfers to every area of software development and beyond. That's why I spend so much time on components: they're not just React features, they're a fundamental way of thinking about complexity."}),e.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-700 text-sm text-gray-500",children:[e.jsx("p",{children:"📧 sukantahui@codernaccotax.co.in | 📱 7003756860"}),e.jsx("p",{children:"Teaching component-based thinking and software design principles since 1997"})]})]})]})]})]})})}),e.jsx("section",{className:"animate-[slideUp_0.8s_ease-out_0.8s] opacity-0 [animation-fill-mode:forwards]",children:e.jsxs("div",{className:a("rounded-2xl p-8","bg-gradient-to-br from-gray-800 to-gray-900","border border-gray-700"),children:[e.jsx("h3",{className:"text-2xl font-bold mb-8 text-center text-gray-100",children:"📋 Topic 13 Checklist"}),e.jsx("div",{className:"space-y-4",children:["Create function-based components with proper syntax","Understand component anatomy (props, state, JSX return)","Differentiate between presentational and container components","Compose components using parent-child relationships","Apply the 'single responsibility' principle to components","Use props to make components configurable and reusable","Follow naming conventions (PascalCase, descriptive names)","Implement component lifecycle methods appropriately","Apply component best practices in student projects","Think in components when designing application architecture"].map((t,s)=>e.jsxs("div",{className:a("flex items-start p-4 rounded-lg transition-all duration-300","border border-gray-700","hover:bg-gray-800","hover:shadow-md hover:border-green-700"),children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-green-900/30 flex items-center justify-center mr-4 mt-1 flex-shrink-0",children:e.jsx("span",{className:"text-green-300",children:s+1})}),e.jsx("span",{className:"text-gray-300 pt-1",children:t})]},s))}),e.jsxs("div",{className:"mt-8 text-center",children:[e.jsxs(R,{to:"/react-foundations/topic/Module1/14",className:`inline-flex items-center gap-2\r
               px-6 py-3 rounded-lg\r
               bg-gradient-to-r from-blue-500 to-purple-600\r
               text-white font-medium`,children:["Ready for Topic 14",e.jsx(U,{size:18})]}),e.jsx("p",{className:"mt-4 text-sm text-gray-400",children:"Next: Why class components are legacy (conceptual awareness only)"})]})]})})]}),e.jsx("footer",{className:"mt-16 border-t border-gray-800 py-8",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:"text-center text-gray-400",children:[e.jsx("p",{children:"© 2024 React Foundations Course. Topic 13: Function-Based Components"}),e.jsx("p",{className:"mt-2 text-sm",children:"Mastering the fundamental building blocks of React applications"})]})})}),e.jsx("style",{children:`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        .motion-safe {
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
          animation-fill-mode: both;
        }
      `})]})};export{G as default};
