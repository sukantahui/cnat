import{r as s,j as e}from"./index-CG3iA-Ea.js";import{C as t}from"./CodeBlock-Bjfl_AH8.js";import"./prism-DRxy4y8s.js";import"./prism-json-D0UlpdKh.js";class i extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Common Patterns with Async Functions"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Once you understand Promises and async/await, you can combine them in powerful ways. Here are some patterns that are very useful in real apps and in Coder & AccoTax projects."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. Parallel Requests with Promise.all"}),e.jsx(t,{language:"javascript",code:`function getMarks(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, js: 90 + Math.floor(Math.random() * 10) });
    }, 800);
  });
}

async function loadAllMarks() {
  console.log("Loading marks for multiple students...");

  const [r1, r2, r3] = await Promise.all([
    getMarks("Ritaja"),
    getMarks("Mounita"),
    getMarks("Devangshu")
  ]);

  console.log("Results:", r1, r2, r3);
}

loadAllMarks();`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"All three requests run in parallel, and we wait for all of them together."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"2. Sequential Async Steps (One after Another)"}),e.jsx(t,{language:"javascript",code:`function step(msg, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, ms);
  });
}

async function runSteps() {
  await step("Step 1: Login as Susmita", 500);
  await step("Step 2: Load profile", 600);
  await step("Step 3: Load marks", 700);
  console.log("All steps finished.");
}

runSteps();`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"3. Retrying on Failure (Simple Pattern)"}),e.jsx(t,{language:"javascript",code:`function fetchReportOnce() {
  return new Promise((resolve, reject) => {
    const ok = Math.random() > 0.6;
    setTimeout(() => {
      if (ok) resolve("Report data for Swadeep");
      else reject("Temporary server error");
    }, 500);
  });
}

async function fetchWithRetry(retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log("Attempt", attempt);
      const data = await fetchReportOnce();
      console.log("Success:", data);
      return;
    } catch (err) {
      console.log("Failed:", err);
      if (attempt === retries) {
        console.log("All attempts failed.");
      }
    }
  }
}

fetchWithRetry();`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"4. Async Utility Wrapper"}),e.jsx(t,{language:"javascript",code:`async function safeAsync(fn) {
  try {
    const result = await fn();
    return { ok: true, result };
  } catch (error) {
    return { ok: false, error };
  }
}

// Usage:
safeAsync(() => getMarks("Kaustav"))
  .then((res) => {
    if (res.ok) {
      console.log("Marks:", res.result);
    } else {
      console.log("Error:", res.error);
    }
  });`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 rounded-2xl border border-slate-800",children:[e.jsx("h4",{className:"text-sm font-semibold text-slate-100",children:"Async Patterns Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-2 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"Promise.all"})," for parallel work."]}),e.jsxs("li",{children:["Plain ",e.jsx("code",{children:"await"})," in sequence for ordered steps."]}),e.jsx("li",{children:"Retry loops for unstable networks."}),e.jsx("li",{children:"Wrapper functions (like safeAsync) to unify error handling."})]})]})]})}}export{i as default};
