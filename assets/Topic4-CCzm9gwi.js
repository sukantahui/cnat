import{b as u,j as e}from"./vendor-react-core-BBXbtqt1.js";import{P as z}from"./PythonFileLoader-YugaCzY9.js";import{F as B}from"./FAQTemplate-BamsZuNW.js";import{P as R}from"./PlainTextPrint-CGJ_aUDk.js";import{T as L}from"./TeacherSukantaHui-CzsyGExA.js";import{df as X,g as H,z as O,h as V,a as G,cm as W}from"./vendor-icons-CKN6-nXc.js";import"./PythonCodeBlock-BDgVOCqn.js";import"./vendor-prism-B7oW9GGR.js";const Q=`"""\r
Topic 4: Continuous Probability Distributions in scipy.stats\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
import numpy as np\r
from scipy import stats\r
\r
# 1. Standard Normal Distribution (loc=mean, scale=standard deviation)\r
normal_dist = stats.norm(loc=100, scale=15) # e.g. IQ scores distribution\r
\r
# Probability Density Function (PDF) at mean\r
pdf_at_mean = normal_dist.pdf(100)\r
print(f"Normal Distribution: mean=100, std=15")\r
print(f"PDF value at x=100: {pdf_at_mean:.4f}")\r
\r
# Cumulative Distribution Function (CDF): P(X <= 115) -> 1 standard deviation\r
p_under_115 = normal_dist.cdf(115)\r
print(f"Probability P(X <= 115): {p_under_115 * 100:.2f}% (approx 84.13%)")\r
\r
# Percent Point Function (PPF / Inverse CDF / Quantile): Find score at 95th percentile\r
p95_score = normal_dist.ppf(0.95)\r
print(f"95th Percentile Cutoff Score: {p95_score:.2f}")\r
\r
# Random Variates Simulation (RVS)\r
samples = normal_dist.rvs(size=5, random_state=42)\r
print(f"5 Random Sample Observations: {np.round(samples, 1)}")\r
`,U=`"""\r
Topic 4: Discrete Probability Distributions: Binomial & Poisson\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
from scipy import stats\r
\r
# 1. Binomial Distribution: Probability of k successes in n trials with p success rate\r
# Example: 10 customer website visits in Shyamnagar, 30% conversion probability (p=0.30)\r
n_trials = 10\r
p_success = 0.30\r
binom_dist = stats.binom(n=n_trials, p=p_success)\r
\r
# Probability Mass Function (PMF): P(X = 3 conversions)\r
p_exactly_3 = binom_dist.pmf(3)\r
print("--- Binomial Distribution (n=10, p=0.30) ---")\r
print(f"P(Exactly 3 conversions) : {p_exactly_3 * 100:.2f}%")\r
print(f"P(At most 3 conversions) : {binom_dist.cdf(3) * 100:.2f}%")\r
\r
# 2. Poisson Distribution: Rate of events occurring in fixed time interval (mu = lambda)\r
# Example: Server receiving on average 5 API requests per second\r
poisson_dist = stats.poisson(mu=5)\r
print("\\n--- Poisson Distribution (mu=5 requests/sec) ---")\r
print(f"P(Exactly 5 requests)    : {poisson_dist.pmf(5) * 100:.2f}%")\r
print(f"P(More than 8 requests)  : {(1 - poisson_dist.cdf(8)) * 100:.2f}% (Surge alert)")\r
`,Y=`"""\r
Topic 4: The Universal Distribution API Architecture\r
Module: 009_006_scipy-overview\r
Coder & AccoTax • Barrackpore\r
"""\r
\r
from scipy import stats\r
\r
# Every continuous distribution in scipy.stats (norm, uniform, expon, t, chi2) \r
# shares the identical, uniform object-oriented API:\r
\r
# Methods:\r
# .pdf(x) : Probability Density Function\r
# .pmf(k) : Probability Mass Function (discrete)\r
# .cdf(x) : Cumulative Distribution Function P(X <= x)\r
# .sf(x)  : Survival Function 1 - CDF = P(X > x)\r
# .ppf(q) : Percent Point Function (Quantiles)\r
# .rvs()  : Random Variates Sampling\r
# .fit(data): Maximum Likelihood Parameter Estimation\r
\r
# Example: Fitting a Student-t distribution to sample data\r
data_sample = [1.2, 0.9, -0.4, 1.8, 2.1, -1.1, 0.3, 0.8, -0.2]\r
df_est, loc_est, scale_est = stats.t.fit(data_sample)\r
print("--- Maximum Likelihood Estimation via .fit() ---")\r
print(f"Fitted Degrees of Freedom : {df_est:.2f}")\r
print(f"Fitted Location (Center)  : {loc_est:.2f}")\r
print(f"Fitted Scale (Spread)     : {scale_est:.2f}")\r
`,Z="================================================================================\r\nSCIPY OVERVIEW: TOPIC 4 - SCIPY.STATS: PROBABILITY DISTRIBUTIONS\r\nClassroom Notes | Coder & AccoTax (Barrackpore)\r\nInstructor: Sukanta Hui\r\n================================================================================\r\n\r\n1. CONTINUOUS VS DISCRETE DISTRIBUTIONS:\r\n--------------------------------------------------------------------------------\r\n- Continuous (infinite measurable values):\r\n  * `stats.norm(loc, scale)`     : Gaussian/Normal (weights, errors, heights).\r\n  * `stats.uniform(loc, scale)`  : Flat rectangular distribution.\r\n  * `stats.expon(scale)`         : Exponential waiting times / survival.\r\n  * `stats.t(df, loc, scale)`    : Student's t distribution (small samples).\r\n  * `stats.chi2(df)`             : Chi-square goodness-of-fit.\r\n- Discrete (countable occurrences):\r\n  * `stats.binom(n, p)`          : Number of successes in n Bernoulli trials.\r\n  * `stats.poisson(mu)`          : Count of independent events in interval.\r\n  * `stats.bernoulli(p)`         : Single binary outcome (0 or 1).\r\n\r\n2. THE UNIVERSAL 6-METHOD API:\r\n--------------------------------------------------------------------------------\r\n1. `dist.pdf(x)` / `dist.pmf(k)` : Height of density or exact probability mass.\r\n2. `dist.cdf(x)`                 : Cumulative probability $P(X \\le x)$.\r\n3. `dist.sf(x)`                  : Survival function $P(X > x) = 1 - CDF(x)$.\r\n4. `dist.ppf(q)`                 : Percent Point Function / Quantiles (Inverse CDF).\r\n5. `dist.rvs(size)`              : Generate random pseudo-sample numbers.\r\n6. `dist.fit(data)`              : Fits distribution parameters to empirical data.\r\n\r\n3. ROLE IN MACHINE LEARNING:\r\n--------------------------------------------------------------------------------\r\n- Generative Classifiers: Naive Bayes estimates Gaussian feature probabilities.\r\n- Hyperparameter Tuning: `scipy.stats.uniform` and `loguniform` define search spaces\r\n  in RandomizedSearchCV.\r\n- Anomaly Detection: Fitting distribution and evaluating PDF thresholds.\r\n",J=[{question:"What are the 4 core unified methods exposed by all probability distributions in `scipy.stats`?",shortAnswer:"`.pdf()` / `.pmf()`, `.cdf()`, `.ppf()`, and `.rvs()`.",explanation:"SciPy distribution classes implement a unified object-oriented API:\n1) `.pdf(x)` (Continuous) or `.pmf(k)` (Discrete): Probability Density/Mass Function.\n2) `.cdf(x)`: Cumulative Distribution Function ($P(X \\le x)$).\n3) `.ppf(q)`: Percent Point Function (Inverse CDF / Quantile lookup for probability $q$).\n4) `.rvs(size)`: Random Variate Sampling.",hint:"PDF = height of curve; CDF = cumulative area under curve; PPF = x value for a given area; RVS = generate random numbers.",level:"basic",codeExample:`from scipy.stats import norm

# Standard normal N(0, 1)
print('PDF at x=0:', norm.pdf(0))       # ~0.3989 (peak height)
print('CDF at x=0:', norm.cdf(0))       # 0.5000 (50% area to the left)
print('PPF for 95%:', norm.ppf(0.95))   # ~1.6448 (95th percentile)
print('Random sample:', norm.rvs(size=3, random_state=42))`},{question:"What is the difference between a 'Frozen' distribution and passing shape/loc/scale parameters dynamically?",shortAnswer:"A frozen distribution locks parameters into a reusable object, avoiding passing loc/scale repeatedly.",explanation:"Dynamic invocation requires passing parameters every time: `norm.cdf(1.5, loc=10, scale=2)`. Freezing the distribution creates an instance with fixed parameters: `my_dist = norm(loc=10, scale=2)`, allowing clean repeated calls like `my_dist.cdf(1.5)`, `my_dist.pdf(10)`, and `my_dist.rvs(100)`.",hint:"Frozen distributions encapsulate state (loc and scale) into a persistent distribution object.",level:"moderate",codeExample:`from scipy.stats import norm

# Frozen normal distribution for student exam scores
exam_dist = norm(loc=75, scale=10)
print('Probability scoring <= 85:', exam_dist.cdf(85)) # ~0.8413
print('Score needed for top 5%:', exam_dist.ppf(0.95))  # ~91.45`},{question:"How do `loc` and `scale` parameters map to mean and standard deviation in continuous distributions?",shortAnswer:"`loc` shifts the distribution along the x-axis (mean/center); `scale` stretches/compresses the width (standard deviation/spread).",explanation:"In `scipy.stats`, all continuous distributions use standardized form $y = (x - \\text{loc}) / \\text{scale}$. For a Normal distribution, $\\text{loc} = \\mu$ (mean) and $\\text{scale} = \\sigma$ (standard deviation). For a Uniform distribution, $\\text{loc} = a$ and $\\text{scale} = b - a$. For Exponential, $\\text{scale} = 1/\\lambda$.",hint:"loc = location (center shift), scale = scale (spread multiplier).",level:"basic",codeExample:`from scipy.stats import norm, uniform

# Normal with mean 100, std 15
height_dist = norm(loc=100, scale=15)
# Uniform distribution spanning [10, 30]
unif_dist = uniform(loc=10, scale=20)  # [10, 10+20]`},{question:"What is the Binomial distribution in `scipy.stats.binom` and when is it used in ML?",shortAnswer:"It models the number of successes in $n$ independent Bernoulli trials with success probability $p$.",explanation:"`binom.pmf(k, n, p)` calculates the probability of obtaining exactly $k$ successes out of $n$ binary trials (e.g. ad clicks, email opens, binary classification false positive counts). In A/B testing and conversion rate optimization, binomial models evaluate significance of click-through rates.",hint:"Binomial parameters: n = number of trials, p = probability of success per trial.",level:"moderate",codeExample:`from scipy.stats import binom

# 100 email campaigns, each with 5% click probability
# Probability of getting exactly 8 clicks:
prob_8 = binom.pmf(k=8, n=100, p=0.05)
# Probability of getting 10 or more clicks (1 - CDF(9)):
prob_10_plus = binom.sf(k=9, n=100, p=0.05) # sf = Survival Function (1 - CDF)
print(f'P(k=8): {prob_8:.4f} | P(k>=10): {prob_10_plus:.4f}')`},{question:"What is the Poisson distribution in `scipy.stats.poisson` and how does it apply to count data?",shortAnswer:"It models the count of independent events occurring within a fixed interval given an average rate $\\mu$ (lambda).",explanation:"`poisson.pmf(k, mu)` calculates the probability of observing $k$ events in a fixed time window or spatial area (e.g. web server requests per second, machine failure events per month, call center arrivals). In ML, Poisson regression is applied to nonnegative integer count predictions.",hint:"Poisson has a single parameter mu (lambda), where Mean = Variance = mu.",level:"moderate",codeExample:`from scipy.stats import poisson

# Server receives average 20 requests/sec (mu=20)
# Probability of receiving exactly 25 requests in 1 sec:
prob_25 = poisson.pmf(25, mu=20)
# Probability of traffic surge (> 30 requests/sec):
prob_surge = poisson.sf(30, mu=20)
print(f'P(k=25): {prob_25:.4f} | P(surge): {prob_surge:.4f}')`},{question:"What is the Survival Function (`.sf()`) and Inverse Survival Function (`.isf()`) in SciPy?",shortAnswer:"`.sf(x)` computes right-tail probability $P(X > x) = 1 - \\text{CDF}(x)$; `.isf(q)` computes the inverse right-tail quantile.",explanation:"When calculating probabilities for extreme rare events in deep tails (e.g., $z = 8$), `1.0 - norm.cdf(8)` suffers from catastrophic floating-point cancellation yielding `0.0`. `norm.sf(8)` calculates the upper tail directly using specialized asymptotic expansions, retaining high numerical precision.",hint:"Always use .sf() instead of 1 - .cdf() when calculating p-values and extreme upper-tail probabilities.",level:"advanced",codeExample:`from scipy.stats import norm

# Extreme tail calculation
print('1 - CDF (cancellation risk):', 1.0 - norm.cdf(8.0))
print('Survival Function (accurate):', norm.sf(8.0)) # ~6.22e-16`},{question:"How does `scipy.stats.norm.fit()` compute maximum likelihood parameters from raw sample data?",shortAnswer:"It calculates the Maximum Likelihood Estimates (MLE) for mean (`loc`) and standard deviation (`scale`) directly from sample observations.",explanation:"`norm.fit(data)` fits a Gaussian curve to observed sample values by maximizing the log-likelihood function analytically: $\\hat{\\mu} = \\bar{x}$ and $\\hat{\\sigma} = \\sqrt{\\frac{1}{n}\\sum (x_i - \\bar{x})^2}$. For non-Gaussian distributions (like Gamma or Beta), SciPy runs numerical optimizers to find MLE parameters.",hint:"dist.fit(data) returns optimal shape, loc, and scale parameters.",level:"moderate",codeExample:`from scipy.stats import norm
import numpy as np

sample_data = np.array([48.2, 51.1, 49.8, 52.4, 47.9, 50.5])
mu_est, sigma_est = norm.fit(sample_data)
print(f'Estimated Gaussian: mu={mu_est:.2f}, sigma={sigma_est:.2f}')`},{question:"What is the Percent Point Function (`.ppf()`) used for in Machine Learning hypothesis testing and confidence intervals?",shortAnswer:"It determines critical z-scores, t-values, and threshold boundaries corresponding to given confidence levels (e.g. 95% or 99%).",explanation:"To determine the critical value for a two-tailed 95% confidence interval ($\\alpha = 0.05$), we need the 97.5th percentile ($1 - \\alpha/2$). `norm.ppf(0.975)` yields the famous critical value $1.95996 \\approx 1.96$. For a 99% interval, `norm.ppf(0.995)` yields $2.576$.",hint:"PPF is the mathematical inverse of the CDF: PPF(CDF(x)) = x.",level:"advanced",codeExample:`from scipy.stats import norm, t

# Critical z-score for 95% two-tailed confidence level
z_crit_95 = norm.ppf(0.975)
# Critical t-score with 15 degrees of freedom
t_crit_95 = t.ppf(0.975, df=15)
print('Z critical (95%):', z_crit_95) # ~1.960
print('T critical (df=15, 95%):', t_crit_95) # ~2.131`}],g=[{id:"part1",fileName:"01_continuous_distributions_norm.py",title:"1. Continuous Distributions: Normal (Gaussian)",badge:"Continuous rv_continuous",code:Q,summary:"Visualizes standard and parameterized normal distributions using norm.pdf(), norm.cdf(), and norm.ppf()."},{id:"part2",fileName:"02_discrete_distributions_binom_poisson.py",title:"2. Discrete Distributions: Binomial & Poisson",badge:"Discrete rv_discrete",code:U,summary:"Models binary conversion trials with binom.pmf() and server request counts with poisson.pmf()."},{id:"part3",fileName:"03_distribution_methods_pdf_cdf_ppf_rvs.py",title:"3. Unified Distribution Object Methods",badge:"API Architecture",code:Y,summary:"Comprehensive guide to the 4 universal methods: .pdf(), .cdf(), .ppf(), and .rvs() with frozen objects."}];function oe(){const[c,_]=u.useState("interactive"),[f,w]=u.useState("part1"),[s,F]=u.useState(0),[n,$]=u.useState(1),[r,S]=u.useState(1),x=g.find(t=>t.id===f)||g[0],y=(t,a,i)=>1/(i*Math.sqrt(2*Math.PI))*Math.exp(-.5*Math.pow((t-a)/i,2)),D=t=>{const a=.254829592,i=-.284496736,v=1.421413741,M=-1.453152027,A=1.061405429,E=.3275911,T=t<0?-1:1;t=Math.abs(t);const p=1/(1+E*t),q=1-((((A*p+M)*p+v)*p+i)*p+a)*p*Math.exp(-t*t);return T*q},C=(t,a,i)=>.5*(1+D((t-a)/(i*Math.sqrt(2)))),j=y(r,s,n),P=C(r,s,n),b=[],l=s-3.5*n,d=s+3.5*n,k=(d-l)/40;for(let t=l;t<=d;t+=k)b.push({x:t,y:y(t,s,n)});const N=Math.max(...b.map(t=>t.y),.01),m=500,o=160,I=b.map((t,a)=>{const i=(t.x-l)/(d-l)*m,v=o-t.y/N*(o-20)-10;return`${a===0?"M":"L"} ${i.toFixed(1)} ${v.toFixed(1)}`}).join(" "),h=Math.max(0,Math.min(m,(r-l)/(d-l)*m));return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-800/40 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -right-8 -top-8 w-44 h-44 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-semibold text-xs uppercase tracking-widest mb-2",children:[e.jsx(X,{className:"w-4 h-4"}),e.jsx("span",{children:"Machine Learning Module 009_006 • Topic 4"})]}),e.jsxs("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:["Probability Distributions in ",e.jsx("code",{className:"text-blue-300 font-mono",children:"scipy.stats"})]}),e.jsxs("p",{className:"text-slate-400 text-sm mt-1 max-w-2xl",children:["Continuous & discrete random variable architectures: Normal (Gaussian), Binomial, Poisson, and the unified ",e.jsx("code",{className:"text-blue-300 font-mono",children:".pdf()"}),", ",e.jsx("code",{className:"text-blue-300 font-mono",children:".cdf()"}),", ",e.jsx("code",{className:"text-blue-300 font-mono",children:".ppf()"}),", and ",e.jsx("code",{className:"text-blue-300 font-mono",children:".rvs()"})," API."]})]}),e.jsx("div",{className:"px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono",children:"Coder & AccoTax • Barrackpore"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/80",children:[{id:"interactive",label:"Interactive Distribution Studio",icon:H},{id:"code",label:"Python Code Lab",icon:O},{id:"notes",label:"Revision Notes",icon:V},{id:"quiz",label:"Practice & FAQs",icon:G}].map(t=>{const a=t.icon,i=c===t.id;return e.jsxs("button",{onClick:()=>_(t.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 ${i?"bg-blue-600 text-white shadow-lg shadow-blue-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"}`,children:[e.jsx(a,{className:"w-4 h-4"}),e.jsx("span",{children:t.label})]},t.id)})})]}),c==="interactive"&&e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx(W,{className:"w-5 h-5 text-blue-400"}),e.jsx("span",{children:"Interactive Gaussian Curve Simulator: $\\mathcal{N}(\\mu, \\sigma^2)$"})]}),e.jsx("span",{className:"text-xs px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30 font-mono",children:"Live SciPy PDF / CDF Evaluator"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-slate-400",children:"Mean ($\\mu$ / loc):"}),e.jsx("span",{className:"text-blue-400 font-mono font-bold",children:s})]}),e.jsx("input",{type:"range",min:"-10",max:"10",step:"0.5",value:s,onChange:t=>F(parseFloat(t.target.value)),className:"w-full accent-blue-500 bg-slate-800 rounded-lg cursor-pointer"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-slate-400",children:"Std Dev ($\\sigma$ / scale):"}),e.jsx("span",{className:"text-blue-400 font-mono font-bold",children:n})]}),e.jsx("input",{type:"range",min:"0.5",max:"5.0",step:"0.1",value:n,onChange:t=>$(parseFloat(t.target.value)),className:"w-full accent-blue-500 bg-slate-800 rounded-lg cursor-pointer"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-slate-400",children:"Evaluation Point ($x$):"}),e.jsx("span",{className:"text-emerald-400 font-mono font-bold",children:r.toFixed(2)})]}),e.jsx("input",{type:"range",min:s-3*n,max:s+3*n,step:"0.1",value:r,onChange:t=>S(parseFloat(t.target.value)),className:"w-full accent-emerald-500 bg-slate-800 rounded-lg cursor-pointer"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex justify-between text-xs text-slate-500 font-mono",children:[e.jsxs("span",{children:["x = ",l.toFixed(1)]}),e.jsxs("span",{children:["$\\mu = ",s,"$"]}),e.jsxs("span",{children:["x = ",d.toFixed(1)]})]}),e.jsx("div",{className:"relative w-full overflow-hidden",children:e.jsxs("svg",{viewBox:`0 0 ${m} ${o}`,className:"w-full h-40",children:[e.jsx("line",{x1:"0",y1:o-10,x2:m,y2:o-10,stroke:"#334155",strokeWidth:"1"}),e.jsx("path",{d:I,fill:"none",stroke:"#38bdf8",strokeWidth:"3"}),e.jsx("line",{x1:h,y1:"0",x2:h,y2:o-10,stroke:"#10b981",strokeWidth:"2",strokeDasharray:"4 2"}),e.jsx("circle",{cx:h,cy:o-j/N*(o-20)-10,r:"5",fill:"#10b981"})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsxs("span",{className:"text-[10px] font-mono text-sky-400 font-bold uppercase block",children:["norm.pdf(x=",r.toFixed(2),")"]}),e.jsx("p",{className:"text-xl font-bold text-sky-300 font-mono",children:j.toFixed(4)}),e.jsx("p",{className:"text-[10px] text-slate-400",children:"Height of probability density curve"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsxs("span",{className:"text-[10px] font-mono text-emerald-400 font-bold uppercase block",children:["norm.cdf(x=",r.toFixed(2),")"]}),e.jsxs("p",{className:"text-xl font-bold text-emerald-300 font-mono",children:[(P*100).toFixed(2),"%"]}),e.jsx("p",{className:"text-[10px] text-slate-400",children:"Area under curve to the left ($P(X \\le x)$)"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsxs("span",{className:"text-[10px] font-mono text-purple-400 font-bold uppercase block",children:["norm.sf(x=",r.toFixed(2),")"]}),e.jsxs("p",{className:"text-xl font-bold text-purple-300 font-mono",children:[((1-P)*100).toFixed(2),"%"]}),e.jsx("p",{className:"text-[10px] text-slate-400",children:"Right tail probability ($P(X > x)$)"})]})]})]})}),c==="code"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:g.map(t=>e.jsxs("button",{onClick:()=>w(t.id),className:`p-3.5 rounded-xl border text-left transition-all ${f===t.id?"bg-blue-950/40 border-blue-500 shadow-md shadow-blue-950/40 scale-[1.02]":"bg-slate-900/80 border-slate-800 hover:bg-slate-850 text-slate-400 hover:text-slate-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[e.jsx("span",{className:`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${f===t.id?"bg-blue-500/20 text-blue-300 border-blue-500/40":"bg-slate-800 text-slate-500 border-slate-700"}`,children:t.badge}),e.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:".py"})]}),e.jsx("p",{className:"text-xs font-bold text-white truncate",children:t.title}),e.jsx("p",{className:"text-[11px] text-slate-400 line-clamp-1 mt-1",children:t.summary})]},t.id))}),e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-blue-300",children:x.title}),e.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:x.fileName})]}),e.jsx("span",{className:"text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700",children:"Probability Distributions Suite"})]}),e.jsx(z,{fileModule:x.code,title:x.fileName})]})]}),c==="notes"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx(L,{note:"Remember the core 4: `.pdf()` for density, `.cdf()` for cumulative area, `.ppf()` for quantile cutoff lookups, and `.rvs()` for generating synthetic datasets. In ML classification and Bayesian modeling, mastering these methods is fundamental to understanding probability thresholds and priors. — Sukanta Hui, Barrackpore ML Lab"}),e.jsx("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:e.jsx(R,{content:Z,title:"Probability Distributions — Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 4 Study Note",downloadFileName:"scipy_distributions_note.txt"})})]}),c==="quiz"&&e.jsx("div",{className:"space-y-6",children:e.jsx(B,{title:"Probability Distributions — Domain FAQs",subtitle:"Master continuous/discrete distribution objects, PDF/CDF/PPF/RVS methods, and parameter freezing",questions:J})})]})})}export{oe as default};
