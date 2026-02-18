import{r as b,j as e}from"./index-BFnLuail.js";import{c as t}from"./clsx-B-dksMZM.js";const X=()=>{const[r,x]=b.useState({isLoggedIn:!1,name:"",role:"student",subscription:"free",notifications:3,darkMode:!0}),[n,v]=b.useState("if"),[c,w]=b.useState(!1),[m,j]=b.useState(!1),[h,C]=b.useState(""),p=[{id:"if",label:"if Statement",icon:"🤔",color:"blue"},{id:"ternary",label:"Ternary Operator",icon:"❓",color:"green"},{id:"logical",label:"Logical &&",icon:"🔗",color:"purple"},{id:"switch",label:"Switch Case",icon:"🔀",color:"yellow"},{id:"complex",label:"Complex Conditions",icon:"🧩",color:"cyan"},{id:"patterns",label:"Patterns",icon:"📐",color:"pink"}],N=[{id:1,name:"Swadeep Das",grade:"A",city:"Barrackpore",active:!0},{id:2,name:"Tuhina Roy",grade:"B+",city:"Shyamnagar",active:!0},{id:3,name:"Abhronila Sen",grade:"A+",city:"Ichapur",active:!1},{id:4,name:"Debangshu Dey",grade:"B",city:"Naihati",active:!0}],y={blue:{border:"border-blue-500",bg:"bg-blue-900/10",text:"text-blue-300"},green:{border:"border-green-500",bg:"bg-green-900/10",text:"text-green-300"},purple:{border:"border-purple-500",bg:"bg-purple-900/10",text:"text-purple-300"},yellow:{border:"border-yellow-500",bg:"bg-yellow-900/10",text:"text-yellow-300"},cyan:{border:"border-cyan-500",bg:"bg-cyan-900/10",text:"text-cyan-300"},pink:{border:"border-pink-500",bg:"bg-pink-900/10",text:"text-pink-300"}},S=()=>{j(!0),setTimeout(()=>{x({...r,isLoggedIn:!0,name:"Swadeep Das",role:"student",subscription:"pro",notifications:3}),j(!1),C("")},1e3)},I=()=>{x({...r,isLoggedIn:!1,name:"",role:"student",subscription:"free",notifications:0})},L=s=>{x({...r,role:s})},A=s=>{x({...r,subscription:s})},E=()=>{x({...r,darkMode:!r.darkMode})},P=()=>{x({...r,notifications:0})},k=()=>p.find(l=>l.id===n)?.color||"blue",R=()=>{const s=k();return y[s]||y.blue},D=()=>{switch(n){case"if":return f();case"ternary":return M();case"logical":return U();case"switch":return F();case"complex":return B();case"patterns":return T();default:return f()}},f=()=>{let s="";r.isLoggedIn?s=`Welcome back, ${r.name}!`:s="Please log in to continue";let l="";return r.role==="admin"?l="Administrator":r.role==="teacher"?l="Instructor":l="Student",e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/40 p-5 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-bold text-blue-400 mb-4",children:"if Statement Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-300 mb-2",children:"Simple if-else"}),e.jsx("div",{className:"p-3 bg-gray-900/50 rounded-lg border border-gray-700",children:e.jsx("p",{className:"text-lg text-center",children:s})}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Using if-else to set variable before rendering"})]}),e.jsxs("div",{className:"p-4 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-300 mb-2",children:"if-else if-else Chain"}),e.jsx("div",{className:"p-3 bg-gray-900/50 rounded-lg border border-gray-700",children:e.jsxs("div",{className:"flex items-center justify-center gap-3",children:[e.jsx("div",{className:t("w-3 h-3 rounded-full",r.role==="admin"?"bg-red-500":r.role==="teacher"?"bg-yellow-500":"bg-green-500")}),e.jsxs("p",{className:"text-lg",children:["Role: ",l]})]})}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Multiple conditions with else-if chain"})]}),e.jsxs("div",{className:"p-4 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-300 mb-2",children:"Nested if Statements"}),e.jsx("div",{className:"p-3 bg-gray-900/50 rounded-lg border border-gray-700",children:r.isLoggedIn?r.subscription==="enterprise"?e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-xl text-purple-400",children:"🌟 Enterprise Member"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Full access to all features"})]}):r.subscription==="pro"?e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-xl text-green-400",children:"⭐ Pro Member"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Access to premium features"})]}):e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-xl text-gray-400",children:"Free Member"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Basic features only"})]}):e.jsx("div",{className:"text-center text-gray-500",children:"Please log in to see subscription status"})}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Nested if statements for complex logic"})]})]})]}),c&&e.jsxs("div",{className:"bg-gray-900/40 p-5 rounded-xl border border-gray-700",children:[e.jsx("h4",{className:"font-bold text-blue-300 mb-3",children:"Code Example"}),e.jsx("pre",{className:"bg-gray-950 p-4 rounded-lg overflow-x-auto text-xs",children:`// Simple if-else
let greeting = '';
if (user.isLoggedIn) {
  greeting = \`Welcome back, \${user.name}!\`;
} else {
  greeting = 'Please log in to continue';
}

// if-else if-else chain
let userStatus = '';
if (user.role === 'admin') {
  userStatus = 'Administrator';
} else if (user.role === 'teacher') {
  userStatus = 'Instructor';
} else {
  userStatus = 'Student';
}

// In JSX
return (
  <div>
    <p>{greeting}</p>
    <p>Role: {userStatus}</p>
  </div>
);`})]})]})},M=()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/40 p-5 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-bold text-green-400 mb-4",children:"Ternary Operator Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-300 mb-2",children:"Basic Ternary (Inline)"}),e.jsx("div",{className:"p-3 bg-gray-900/50 rounded-lg border border-gray-700",children:e.jsxs("div",{className:"flex items-center justify-center gap-3",children:[e.jsx("div",{className:t("w-4 h-4 rounded-full",r.isLoggedIn?"bg-green-500":"bg-red-500")}),e.jsxs("p",{className:"text-lg",children:["Status: ",r.isLoggedIn?"Logged In":"Logged Out"]})]})}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Simple true/false condition in JSX"})]}),e.jsxs("div",{className:"p-4 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-300 mb-2",children:"Nested Ternary"}),e.jsx("div",{className:"p-3 bg-gray-900/50 rounded-lg border border-gray-700",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-xl",children:r.subscription==="enterprise"?"🏢 Enterprise":r.subscription==="pro"?"⭐ Pro":r.subscription==="free"?"🆓 Free":"Unknown"}),e.jsx("p",{className:"text-sm text-gray-400 mt-1",children:r.subscription==="enterprise"?"Unlimited access":r.subscription==="pro"?"Premium features":r.subscription==="free"?"Basic features":""})]})}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Multiple conditions with nested ternary (use with caution)"})]}),e.jsxs("div",{className:"p-4 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-300 mb-2",children:"Ternary with JSX Blocks"}),e.jsx("div",{className:"p-3 bg-gray-900/50 rounded-lg border border-gray-700",children:r.isLoggedIn?e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-gray-400",children:"Notifications:"}),e.jsx("span",{className:"text-yellow-400 font-bold",children:r.notifications})]}),r.notifications>0&&e.jsx("button",{onClick:P,className:"w-full py-1 bg-yellow-900/30 text-yellow-300 rounded hover:bg-yellow-800/50 text-sm",children:"Clear Notifications"})]}):e.jsx("div",{className:"text-center text-gray-500",children:"No notifications - please log in"})}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Using ternary to render different JSX blocks"})]})]})]}),c&&e.jsxs("div",{className:"bg-gray-900/40 p-5 rounded-xl border border-gray-700",children:[e.jsx("h4",{className:"font-bold text-green-300 mb-3",children:"Code Example"}),e.jsx("pre",{className:"bg-gray-950 p-4 rounded-lg overflow-x-auto text-xs",children:`// Basic ternary
<p>Status: {user.isLoggedIn ? 'Logged In' : 'Logged Out'}</p>

// Nested ternary (use sparingly)
<p>
  {user.subscription === 'enterprise' ? '🏢 Enterprise' :
   user.subscription === 'pro' ? '⭐ Pro' :
   user.subscription === 'free' ? '🆓 Free' : 'Unknown'}
</p>

// Ternary with JSX blocks
{user.isLoggedIn ? (
  <div>
    <p>Welcome {user.name}!</p>
    <button>Logout</button>
  </div>
) : (
  <div>
    <p>Please log in</p>
    <button>Login</button>
  </div>
)}

// Ternary for styling
<div className={user.isLoggedIn ? 'bg-green-100' : 'bg-red-100'}>
  Status Indicator
</div>`})]})]}),U=()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/40 p-5 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-bold text-purple-400 mb-4",children:"Logical && Operator Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-300 mb-2",children:"Simple && (Conditional Rendering)"}),e.jsx("div",{className:"p-3 bg-gray-900/50 rounded-lg border border-gray-700",children:e.jsxs("div",{className:"space-y-3",children:[r.isLoggedIn&&e.jsx("div",{className:"p-2 bg-green-900/20 rounded border border-green-800/30",children:e.jsxs("p",{className:"text-green-400",children:["✓ You are logged in as ",r.name]})}),r.notifications>0&&e.jsx("div",{className:"p-2 bg-yellow-900/20 rounded border border-yellow-800/30",children:e.jsxs("p",{className:"text-yellow-400",children:["🔔 You have ",r.notifications," unread notification",r.notifications!==1?"s":""]})}),r.role==="admin"&&e.jsx("div",{className:"p-2 bg-red-900/20 rounded border border-red-800/30",children:e.jsx("p",{className:"text-red-400",children:"⚡ Admin privileges enabled"})})]})}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Using && to conditionally render elements"})]}),e.jsxs("div",{className:"p-4 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-300 mb-2",children:"&& with Complex Conditions"}),e.jsx("div",{className:"p-3 bg-gray-900/50 rounded-lg border border-gray-700",children:e.jsxs("div",{className:"space-y-3",children:[r.isLoggedIn&&r.role==="teacher"&&e.jsxs("div",{className:"p-3 bg-blue-900/20 rounded-lg border border-blue-800/30",children:[e.jsx("h5",{className:"font-bold text-blue-300 mb-1",children:"Teacher Dashboard"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Manage your students and courses"})]}),r.isLoggedIn&&r.subscription==="pro"&&r.notifications>0&&e.jsxs("div",{className:"p-3 bg-purple-900/20 rounded-lg border border-purple-800/30",children:[e.jsx("h5",{className:"font-bold text-purple-300 mb-1",children:"Pro Notifications"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Special alerts for pro members"})]}),!r.isLoggedIn&&e.jsx("div",{className:"p-3 bg-gray-800/30 rounded-lg border border-gray-700",children:e.jsx("p",{className:"text-gray-400 text-center",children:"Please log in to see features"})})]})}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Multiple conditions combined with &&"})]}),e.jsxs("div",{className:"p-4 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-300 mb-2",children:"&& for Loading States"}),e.jsx("div",{className:"p-3 bg-gray-900/50 rounded-lg border border-gray-700",children:e.jsxs("div",{className:"space-y-3",children:[m&&e.jsxs("div",{className:"flex items-center justify-center gap-2 p-4",children:[e.jsxs("svg",{className:"animate-spin h-5 w-5 text-blue-400",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),e.jsx("span",{className:"text-blue-400",children:"Loading user data..."})]}),h&&e.jsx("div",{className:"p-3 bg-red-900/20 rounded border border-red-800/30",children:e.jsxs("p",{className:"text-red-400",children:["Error: ",h]})}),!m&&!h&&r.isLoggedIn&&e.jsx("div",{className:"p-3 bg-green-900/20 rounded border border-green-800/30",children:e.jsx("p",{className:"text-green-400",children:"✓ Data loaded successfully"})})]})}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Handling loading and error states"})]})]})]}),c&&e.jsxs("div",{className:"bg-gray-900/40 p-5 rounded-xl border border-gray-700",children:[e.jsx("h4",{className:"font-bold text-purple-300 mb-3",children:"Code Example"}),e.jsx("pre",{className:"bg-gray-950 p-4 rounded-lg overflow-x-auto text-xs",children:`// Simple conditional rendering
{user.isLoggedIn && <p>Welcome back!</p>}

// Multiple conditions
{user.isLoggedIn && user.role === 'admin' && (
  <button>Admin Panel</button>
)}

// Loading state
{loading && (
  <div className="spinner">
    Loading...
  </div>
)}

// Error state
{error && (
  <div className="error">
    {error}
  </div>
)}

// Combined states
{!loading && !error && data.length > 0 && (
  <ul>
    {data.map(item => <li key={item.id}>{item.name}</li>)}
  </ul>
)}

// Empty state
{!loading && !error && data.length === 0 && (
  <p>No data found</p>
)}`})]})]}),F=()=>{const s=i=>{switch(i){case"admin":return{color:"red",icon:"⚡",desc:"Full system access"};case"teacher":return{color:"yellow",icon:"👨‍🏫",desc:"Can create and grade courses"};case"student":return{color:"green",icon:"🎓",desc:"Can enroll in courses"};default:return{color:"gray",icon:"❓",desc:"Unknown role"}}},l=i=>{switch(i){case"enterprise":return["Unlimited courses","Priority support","Custom training","Analytics dashboard"];case"pro":return["Up to 10 courses","Email support","Project templates","Community access"];case"free":return["3 free courses","Basic support","Sample projects"];default:return["No benefits"]}},d=s(r.role),a=l(r.subscription);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/40 p-5 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-bold text-yellow-400 mb-4",children:"Switch Case Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-300 mb-2",children:"Switch for User Roles"}),e.jsx("div",{className:"p-3 bg-gray-900/50 rounded-lg border border-gray-700",children:e.jsxs("div",{className:t("p-4 rounded-lg border-2 text-center",d.color==="red"&&"border-red-500 bg-red-900/20",d.color==="yellow"&&"border-yellow-500 bg-yellow-900/20",d.color==="green"&&"border-green-500 bg-green-900/20",d.color==="gray"&&"border-gray-500 bg-gray-900/20"),children:[e.jsx("div",{className:"text-3xl mb-2",children:d.icon}),e.jsx("p",{className:"text-xl font-bold capitalize",children:r.role}),e.jsx("p",{className:"text-sm text-gray-400 mt-1",children:d.desc})]})}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Using switch to return different values based on role"})]}),e.jsxs("div",{className:"p-4 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-300 mb-2",children:"Switch for Subscription Plans"}),e.jsx("div",{className:"p-3 bg-gray-900/50 rounded-lg border border-gray-700",children:e.jsx("div",{className:"space-y-3",children:e.jsxs("div",{className:t("p-3 rounded-lg border",r.subscription==="enterprise"&&"border-purple-500 bg-purple-900/20",r.subscription==="pro"&&"border-green-500 bg-green-900/20",r.subscription==="free"&&"border-gray-500 bg-gray-900/20"),children:[e.jsxs("h5",{className:"font-bold text-lg capitalize",children:[r.subscription," Plan"]}),e.jsx("ul",{className:"mt-2 space-y-1",children:a.map((i,g)=>e.jsxs("li",{className:"flex items-center gap-2 text-sm",children:[e.jsx("svg",{className:"w-3 h-3 text-green-500",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),e.jsx("span",{children:i})]},g))})]})})}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Switch returning arrays for different subscription levels"})]}),e.jsxs("div",{className:"p-4 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-300 mb-2",children:"Switch in Render Function"}),e.jsx("div",{className:"p-3 bg-gray-900/50 rounded-lg border border-gray-700",children:(()=>{switch(r.role){case"admin":return e.jsxs("div",{className:"p-3 bg-red-900/20 rounded-lg",children:[e.jsx("h5",{className:"font-bold text-red-300",children:"Admin Controls"}),e.jsxs("div",{className:"grid grid-cols-1 gap-2 mt-2",children:[e.jsx("button",{className:"p-2 bg-red-900/30 text-red-300 rounded text-sm",children:"Manage Users"}),e.jsx("button",{className:"p-2 bg-red-900/30 text-red-300 rounded text-sm",children:"System Settings"}),e.jsx("button",{className:"p-2 bg-red-900/30 text-red-300 rounded text-sm",children:"View Reports"}),e.jsx("button",{className:"p-2 bg-red-900/30 text-red-300 rounded text-sm",children:"Backup Data"})]})]});case"teacher":return e.jsxs("div",{className:"p-3 bg-yellow-900/20 rounded-lg",children:[e.jsx("h5",{className:"font-bold text-yellow-300",children:"Teacher Tools"}),e.jsxs("div",{className:"grid grid-cols-1 gap-2 mt-2",children:[e.jsx("button",{className:"p-2 bg-yellow-900/30 text-yellow-300 rounded text-sm",children:"Create Course"}),e.jsx("button",{className:"p-2 bg-yellow-900/30 text-yellow-300 rounded text-sm",children:"Grade Assignments"}),e.jsx("button",{className:"p-2 bg-yellow-900/30 text-yellow-300 rounded text-sm",children:"Student Roster"}),e.jsx("button",{className:"p-2 bg-yellow-900/30 text-yellow-300 rounded text-sm",children:"Schedule Class"})]})]});case"student":return e.jsxs("div",{className:"p-3 bg-green-900/20 rounded-lg",children:[e.jsx("h5",{className:"font-bold text-green-300",children:"Student Dashboard"}),e.jsxs("div",{className:"grid grid-cols-1 gap-2 mt-2",children:[e.jsx("button",{className:"p-2 bg-green-900/30 text-green-300 rounded text-sm",children:"My Courses"}),e.jsx("button",{className:"p-2 bg-green-900/30 text-green-300 rounded text-sm",children:"Assignments"}),e.jsx("button",{className:"p-2 bg-green-900/30 text-green-300 rounded text-sm",children:"Grades"}),e.jsx("button",{className:"p-2 bg-green-900/30 text-green-300 rounded text-sm",children:"Resources"})]})]});default:return e.jsx("div",{className:"p-3 bg-gray-800/30 rounded-lg",children:e.jsx("p",{className:"text-gray-400 text-center",children:"Select a role to see controls"})})}})()}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Using switch inside Immediately Invoked Function Expression (IIFE)"})]})]})]}),c&&e.jsxs("div",{className:"bg-gray-900/40 p-5 rounded-xl border border-gray-700",children:[e.jsx("h4",{className:"font-bold text-yellow-300 mb-3",children:"Code Example"}),e.jsx("pre",{className:"bg-gray-950 p-4 rounded-lg overflow-x-auto text-xs",children:`// Switch in helper function
const getRoleDescription = (role) => {
  switch (role) {
    case 'admin':
      return { color: 'red', icon: '⚡', desc: 'Full access' };
    case 'teacher':
      return { color: 'yellow', icon: '👨‍🏫', desc: 'Can create courses' };
    case 'student':
      return { color: 'green', icon: '🎓', desc: 'Can enroll' };
    default:
      return { color: 'gray', icon: '❓', desc: 'Unknown' };
  }
};

// Using in component
const roleInfo = getRoleDescription(user.role);
return (
  <div className={\`border-\${roleInfo.color}-500\`}>
    <span>{roleInfo.icon}</span>
    <p>{roleInfo.desc}</p>
  </div>
);

// Switch in render with IIFE
{(() => {
  switch (user.role) {
    case 'admin':
      return <AdminPanel />;
    case 'teacher':
      return <TeacherDashboard />;
    case 'student':
      return <StudentDashboard />;
    default:
      return <GuestView />;
  }
})()}

// Switch returning arrays
const getFeatures = (plan) => {
  switch (plan) {
    case 'premium':
      return ['Feature 1', 'Feature 2', 'Feature 3'];
    case 'basic':
      return ['Feature 1', 'Feature 2'];
    default:
      return ['Feature 1'];
  }
};`})]})]})},B=()=>{const s=r.isLoggedIn&&(r.role==="teacher"||r.subscription==="pro")&&r.notifications<5,l=a=>{switch(a){case"advanced-analytics":return r.isLoggedIn&&r.role==="admin";case"course-creation":return r.isLoggedIn&&(r.role==="teacher"||r.role==="admin");case"premium-content":return r.isLoggedIn&&(r.subscription==="pro"||r.subscription==="enterprise");case"community-forum":return r.isLoggedIn;default:return!1}},d=a=>{switch(a){case"advanced-analytics":return"Requires admin role";case"course-creation":return"Requires teacher or admin role";case"premium-content":return"Requires pro or enterprise subscription";case"community-forum":return"Requires login";default:return"Unknown requirements"}};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/40 p-5 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-bold text-cyan-400 mb-4",children:"Complex Conditions Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-300 mb-2",children:"Complex Boolean Logic"}),e.jsx("div",{className:"p-3 bg-gray-900/50 rounded-lg border border-gray-700",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:t("p-3 rounded-lg border",s?"border-green-500 bg-green-900/20":"border-gray-700 bg-gray-800/30"),children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:"Special Discount"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Available for active teachers and pro members"})]}),e.jsx("div",{className:t("px-3 py-1 rounded-full text-sm",s?"bg-green-900/30 text-green-400":"bg-gray-800 text-gray-500"),children:s?"Eligible ✅":"Not Eligible ❌"})]})}),e.jsxs("div",{className:"text-sm text-gray-500",children:[e.jsx("p",{children:"Conditions for discount:"}),e.jsxs("ul",{className:"mt-1 space-y-1 ml-4",children:[e.jsxs("li",{className:t(r.isLoggedIn?"text-green-400":"text-red-400"),children:[r.isLoggedIn?"✓":"✗"," User is logged in"]}),e.jsxs("li",{className:t(r.role==="teacher"||r.subscription==="pro"?"text-green-400":"text-red-400"),children:[r.role==="teacher"||r.subscription==="pro"?"✓":"✗"," Teacher or Pro member"]}),e.jsxs("li",{className:t(r.notifications<5?"text-green-400":"text-red-400"),children:[r.notifications<5?"✓":"✗"," Less than 5 notifications"]})]})]})]})}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Combining multiple conditions with AND (&&) and OR (||)"})]}),e.jsxs("div",{className:"p-4 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-300 mb-2",children:"Feature Access Matrix"}),e.jsx("div",{className:"p-3 bg-gray-900/50 rounded-lg border border-gray-700",children:e.jsx("div",{className:"space-y-3",children:[{id:"advanced-analytics",name:"Advanced Analytics",icon:"📊"},{id:"course-creation",name:"Course Creation",icon:"📝"},{id:"premium-content",name:"Premium Content",icon:"⭐"},{id:"community-forum",name:"Community Forum",icon:"💬"}].map(a=>{const i=l(a.id);return e.jsxs("div",{className:t("p-3 rounded-lg border flex items-center justify-between",i?"border-green-500 bg-green-900/20":"border-gray-700 bg-gray-800/30"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xl",children:a.icon}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:a.name}),e.jsx("p",{className:"text-sm text-gray-400",children:!i&&d(a.id)})]})]}),e.jsx("div",{className:t("px-3 py-1 rounded text-sm",i?"bg-green-900/30 text-green-400":"bg-gray-800 text-gray-500"),children:i?"Access Granted":"Access Denied"})]},a.id)})})}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Dynamic access control based on multiple user properties"})]}),e.jsxs("div",{className:"p-4 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-300 mb-2",children:"Conditional Styling"}),e.jsx("div",{className:"p-3 bg-gray-900/50 rounded-lg border border-gray-700",children:e.jsx("div",{className:"space-y-4",children:e.jsx("div",{className:"grid grid-cols-1 gap-3",children:N.map(a=>e.jsxs("div",{className:t("p-3 rounded-lg border-2 transition-all",a.grade==="A+"&&"border-cyan-500 bg-cyan-900/20",a.grade==="A"&&"border-blue-500 bg-blue-900/20",a.grade==="B+"&&"border-green-500 bg-green-900/20",a.grade==="B"&&"border-yellow-500 bg-yellow-900/20",!a.active&&"opacity-50 border-gray-600"),children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-bold",children:a.name}),e.jsx("p",{className:"text-sm text-gray-400",children:a.city})]}),e.jsxs("div",{className:"flex flex-col items-end",children:[e.jsx("span",{className:t("text-lg font-bold",a.grade==="A+"&&"text-cyan-400",a.grade==="A"&&"text-blue-400",a.grade==="B+"&&"text-green-400",a.grade==="B"&&"text-yellow-400"),children:a.grade}),e.jsx("span",{className:t("text-xs",a.active?"text-green-400":"text-red-400"),children:a.active?"Active":"Inactive"})]})]}),e.jsxs("div",{className:"mt-2 flex gap-1",children:[a.grade.startsWith("A")&&e.jsx("span",{className:"px-2 py-1 bg-cyan-900/30 text-cyan-300 rounded text-xs",children:"Top Performer"}),!a.active&&e.jsx("span",{className:"px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs",children:"Inactive"}),a.city==="Barrackpore"&&a.active&&e.jsx("span",{className:"px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs",children:"Local"})]})]},a.id))})})}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Dynamic styling based on multiple conditions (grade, activity status, location)"})]})]})]}),c&&e.jsxs("div",{className:"bg-gray-900/40 p-5 rounded-xl border border-gray-700",children:[e.jsx("h4",{className:"font-bold text-cyan-300 mb-3",children:"Code Example"}),e.jsx("pre",{className:"bg-gray-950 p-4 rounded-lg overflow-x-auto text-xs",children:`// Complex boolean logic
const isEligibleForDiscount = user.isLoggedIn && 
  (user.role === 'teacher' || user.subscription === 'pro') &&
  user.notifications < 5;

// Conditional access function
const canAccessFeature = (feature) => {
  switch (feature) {
    case 'advanced-analytics':
      return user.isLoggedIn && user.role === 'admin';
    case 'course-creation':
      return user.isLoggedIn && (user.role === 'teacher' || user.role === 'admin');
    case 'premium-content':
      return user.isLoggedIn && (user.subscription === 'pro' || user.subscription === 'enterprise');
    case 'community-forum':
      return user.isLoggedIn;
    default:
      return false;
  }
};

// Complex conditional styling
<div className={clsx(
  "p-3 rounded-lg border-2",
  student.grade === 'A+' && "border-cyan-500 bg-cyan-900/20",
  student.grade === 'A' && "border-blue-500 bg-blue-900/20",
  !student.active && "opacity-50 border-gray-600"
)}>
  {/* content */}
</div>

// Multiple conditional badges
<div className="flex gap-1">
  {student.grade.startsWith('A') && (
    <span className="top-performer-badge">Top Performer</span>
  )}
  {!student.active && (
    <span className="inactive-badge">Inactive</span>
  )}
</div>`})]})]})},T=()=>{const s=()=>r.isLoggedIn?e.jsx("div",{className:"p-4 bg-blue-900/20 rounded-lg border border-blue-800/30",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-xl",children:r.name.charAt(0)})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold",children:r.name}),e.jsxs("p",{className:"text-sm text-gray-400",children:["Role: ",r.role]})]})]})}):e.jsx("div",{className:"p-4 bg-gray-800/30 rounded-lg border border-gray-700",children:e.jsx("p",{className:"text-gray-400 text-center",children:"Please log in to view profile"})}),l=()=>{const g={free:{color:"gray",icon:"🆓",label:"Free"},pro:{color:"green",icon:"⭐",label:"Pro"},enterprise:{color:"purple",icon:"🏢",label:"Enterprise"}},{color:o,icon:O,label:q}=g[r.subscription]||g.free,W=t("inline-flex items-center gap-2 px-3 py-1 rounded-full",o==="gray"&&"bg-gray-900/30 text-gray-300",o==="green"&&"bg-green-900/30 text-green-300",o==="purple"&&"bg-purple-900/30 text-purple-300");return e.jsxs("div",{className:W,children:[e.jsx("span",{children:O}),e.jsx("span",{children:q})]})},d=()=>r.role==="admin"?e.jsxs("div",{className:"p-3 bg-red-900/20 rounded-lg",children:[e.jsx("p",{className:"text-red-300 font-bold",children:"Admin Panel"}),e.jsx("button",{className:"mt-2 px-3 py-1 bg-red-800/30 text-red-300 rounded text-sm",children:"Manage System"})]}):null,a=()=>r.role==="teacher"?e.jsxs("div",{className:"p-3 bg-yellow-900/20 rounded-lg",children:[e.jsx("p",{className:"text-yellow-300 font-bold",children:"Teacher Tools"}),e.jsx("button",{className:"mt-2 px-3 py-1 bg-yellow-800/30 text-yellow-300 rounded text-sm",children:"Create Assignment"})]}):null,i=()=>r.role==="student"?e.jsxs("div",{className:"p-3 bg-green-900/20 rounded-lg",children:[e.jsx("p",{className:"text-green-300 font-bold",children:"Student Features"}),e.jsx("button",{className:"mt-2 px-3 py-1 bg-green-800/30 text-green-300 rounded text-sm",children:"View Courses"})]}):null;return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-900/40 p-5 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-bold text-pink-400 mb-4",children:"Conditional Rendering Patterns"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-300 mb-2",children:"Pattern 1: Early Return"}),e.jsx("div",{className:"p-3 bg-gray-900/50 rounded-lg border border-gray-700",children:s()}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Return early for invalid states or guard clauses"})]}),e.jsxs("div",{className:"p-4 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-300 mb-2",children:"Pattern 2: Configuration Objects"}),e.jsx("div",{className:"p-3 bg-gray-900/50 rounded-lg border border-gray-700",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-center gap-3",children:[l(),e.jsx("p",{className:"text-lg",children:"Subscription Plan"})]}),e.jsx("div",{className:"grid grid-cols-1 gap-3 mt-4",children:Object.entries({free:{color:"gray",icon:"🆓",label:"Free"},pro:{color:"green",icon:"⭐",label:"Pro"},enterprise:{color:"purple",icon:"🏢",label:"Enterprise"}}).map(([g,o])=>e.jsxs("button",{onClick:()=>A(g),className:t("p-3 rounded-lg border transition-all",r.subscription===g?t(o.color==="gray"&&"border-gray-500 bg-gray-900/20",o.color==="green"&&"border-green-500 bg-green-900/20",o.color==="purple"&&"border-purple-500 bg-purple-900/20"):"border-gray-700 hover:border-gray-600"),children:[e.jsx("div",{className:"text-2xl mb-1",children:o.icon}),e.jsx("p",{className:"text-sm",children:o.label})]},g))})]})}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Using configuration objects to avoid complex conditionals"})]}),e.jsxs("div",{className:"p-4 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-300 mb-2",children:"Pattern 3: Conditional Components"}),e.jsx("div",{className:"p-3 bg-gray-900/50 rounded-lg border border-gray-700",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsx(d,{}),e.jsx(a,{}),e.jsx(i,{})]}),!r.isLoggedIn&&e.jsx("div",{className:"p-3 bg-gray-800/30 rounded-lg",children:e.jsx("p",{className:"text-gray-400 text-center",children:"Log in to see role-specific features"})})]})}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Creating small, focused conditional components"})]})]})]}),c&&e.jsxs("div",{className:"bg-gray-900/40 p-5 rounded-xl border border-gray-700",children:[e.jsx("h4",{className:"font-bold text-pink-300 mb-3",children:"Code Example"}),e.jsx("pre",{className:"bg-gray-950 p-4 rounded-lg overflow-x-auto text-xs",children:`// Pattern 1: Early Return
const renderUserProfile = () => {
  if (!user.isLoggedIn) {
    return <p>Please log in</p>;
  }
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

// Pattern 2: Configuration Objects
const buttonConfigs = {
  primary: { className: 'bg-blue-500', text: 'Primary' },
  secondary: { className: 'bg-gray-500', text: 'Secondary' },
  danger: { className: 'bg-red-500', text: 'Danger' }
};

const Button = ({ type = 'primary' }) => {
  const config = buttonConfigs[type];
  return (
    <button className={\`px-4 py-2 text-white \${config.className}\`}>
      {config.text}
    </button>
  );
};

// Pattern 3: Conditional Components
const AdminPanel = () => {
  if (user.role !== 'admin') return null;
  return <div>Admin content</div>;
};

const UserDashboard = () => {
  return (
    <div>
      <AdminPanel />
      <UserProfile />
    </div>
  );
};

// Pattern 4: Render Props
const ConditionalRender = ({ condition, children }) => {
  return condition ? children : null;
};

// Usage:
<ConditionalRender condition={user.isLoggedIn}>
  <UserMenu />
</ConditionalRender>`})]})]})},u=R();return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600",children:"Conditional Rendering in React"}),e.jsx("p",{className:"text-gray-400 mt-2",children:"Master different techniques for conditional rendering in React components"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{onClick:()=>w(!c),className:t("px-4 py-2 rounded-lg border transition-colors",c?"bg-blue-900/30 border-blue-500 text-blue-300":"bg-gray-800/50 border-gray-700 text-gray-300 hover:border-gray-600"),children:c?"Hide Code":"Show Code"}),e.jsx("button",{onClick:E,className:"p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-gray-600",children:r.darkMode?"🌙":"☀️"})]})]}),e.jsxs("div",{className:"grid lg:grid-cols-4 gap-6",children:[e.jsx("div",{className:"lg:col-span-1",children:e.jsxs("div",{className:"bg-gray-900/40 rounded-xl border border-gray-700 p-4 sticky top-6",children:[e.jsx("div",{className:"mb-6",children:e.jsxs("div",{className:"p-3 bg-gray-800/40 rounded-lg border border-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:t("w-2 h-2 rounded-full",r.isLoggedIn?"bg-green-500":"bg-red-500")}),e.jsx("span",{className:"text-sm",children:r.isLoggedIn?"Online":"Offline"})]}),e.jsxs("span",{className:"text-xs text-gray-400",children:[r.darkMode?"Dark":"Light"," Mode"]})]}),e.jsx("div",{className:"space-y-3",children:r.isLoggedIn?e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-bold text-center",children:r.name}),e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("span",{className:"px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs",children:r.role}),e.jsx("span",{className:"px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs",children:r.subscription})]}),e.jsx("button",{onClick:I,className:"w-full py-2 bg-red-900/30 text-red-300 rounded-lg hover:bg-red-800/50 border border-red-800/30",children:"Logout"})]}):e.jsx("button",{onClick:S,disabled:m,className:t("w-full py-3 rounded-lg border transition-colors",m?"bg-gray-800 border-gray-700 text-gray-400":"bg-green-900/30 border-green-800/30 text-green-300 hover:bg-green-800/50"),children:m?"Logging in...":"Login to Demo"})})]})}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"font-bold text-gray-300 mb-2",children:"Change Role"}),e.jsx("div",{className:"grid grid-cols-1 gap-2",children:["student","teacher","admin"].map(s=>e.jsx("button",{onClick:()=>L(s),className:t("py-2 rounded-lg border text-sm capitalize transition-colors",r.role===s?"bg-blue-900/30 border-blue-500 text-blue-300":"bg-gray-800/30 border-gray-700 text-gray-300 hover:border-gray-600"),children:s},s))})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"font-bold text-gray-300 mb-2",children:"Examples"}),e.jsx("div",{className:"space-y-1",children:p.map(s=>{const l=y[s.color];return e.jsxs("button",{onClick:()=>v(s.id),className:t("w-full flex items-center gap-3 p-3 rounded-lg border transition-colors",n===s.id?t(l.border,l.bg.replace("/10","/30"),l.text):"bg-gray-800/30 border-gray-700 text-gray-300 hover:border-gray-600"),children:[e.jsx("span",{className:"text-lg",children:s.icon}),e.jsx("span",{children:s.label})]},s.id)})})]}),e.jsxs("div",{className:"p-3 bg-gray-800/40 rounded-lg border border-gray-700",children:[e.jsx("h3",{className:"font-bold text-gray-300 mb-2",children:"Current Stats"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-400",children:"Notifications:"}),e.jsx("span",{className:t("font-bold",r.notifications>0?"text-yellow-400":"text-gray-400"),children:r.notifications})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-400",children:"Subscription:"}),e.jsx("span",{className:"capitalize",children:r.subscription})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-gray-400",children:"Dark Mode:"}),e.jsx("span",{children:r.darkMode?"Enabled":"Disabled"})]})]})]})]})}),e.jsxs("div",{className:"lg:col-span-3",children:[e.jsx("div",{className:t("mb-6 p-5 rounded-xl border",u.border,u.bg),children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("span",{className:"text-2xl",children:p.find(s=>s.id===n)?.icon}),e.jsx("h2",{className:"text-2xl font-bold",children:p.find(s=>s.id===n)?.label})]}),e.jsxs("p",{className:"text-gray-400",children:[n==="if"&&"Using if statements and if-else chains",n==="ternary"&&"Inline conditional rendering with ternary operator",n==="logical"&&"Conditional rendering with logical && operator",n==="switch"&&"Multiple conditions with switch statements",n==="complex"&&"Complex conditions and dynamic styling",n==="patterns"&&"Best practices and patterns"]})]}),e.jsxs("div",{className:t("px-4 py-2 rounded-lg text-sm font-bold",u.bg.replace("/10","/30"),u.text),children:[n==="if"&&"Basic",n==="ternary"&&"Intermediate",n==="logical"&&"Intermediate",n==="switch"&&"Advanced",n==="complex"&&"Expert",n==="patterns"&&"Patterns"]})]})}),D(),e.jsxs("div",{className:"mt-8 p-5 bg-gray-900/40 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-300 mb-3",children:"Best Practices"}),e.jsxs("div",{className:"grid md:grid-cols-1 gap-4",children:[e.jsxs("div",{className:"p-3 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-400 mb-1",children:"Do's"}),e.jsxs("ul",{className:"text-sm text-gray-400 space-y-1",children:[e.jsx("li",{children:"✓ Use early returns for guard clauses"}),e.jsx("li",{children:"✓ Keep conditions simple and readable"}),e.jsx("li",{children:"✓ Extract complex logic into helper functions"}),e.jsx("li",{children:"✓ Use configuration objects for multiple conditions"}),e.jsx("li",{children:"✓ Consider using enums for finite states"})]})]}),e.jsxs("div",{className:"p-3 bg-gray-800/40 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-400 mb-1",children:"Don'ts"}),e.jsxs("ul",{className:"text-sm text-gray-400 space-y-1",children:[e.jsx("li",{children:"✗ Avoid deeply nested ternary operators"}),e.jsx("li",{children:"✗ Don't put complex logic in JSX"}),e.jsx("li",{children:"✗ Avoid using && with 0 or falsy values"}),e.jsx("li",{children:"✗ Don't duplicate condition logic"}),e.jsx("li",{children:"✗ Avoid large switch statements in render"})]})]})]})]}),e.jsxs("div",{className:"mt-8 text-center text-gray-500 text-sm",children:[e.jsx("p",{children:"This interactive demo covers all major conditional rendering patterns in React. Experiment with different user states to see how each technique works!"}),e.jsxs("div",{className:"flex items-center justify-center gap-4 mt-4",children:[e.jsx("span",{children:"Created with ❤️ for React developers"}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Students: ",N.map(s=>s.name).join(", ")]})]})]})]})]})]})})};export{X as default};
