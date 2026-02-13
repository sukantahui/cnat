import{j as e}from"./index-Do7ncMju.js";import{c as s}from"./clsx-B-dksMZM.js";import{S as t}from"./ShellFileLoader-CfxYwE3z.js";import"./prism-B9ltoSp8.js";const a=`#!/bin/bash
# git_status_prompt.sh – Display Git branch in the shell prompt
# Source this file from .bashrc to enable.

git_branch() {
    # Quietly get the current Git branch name
    git symbolic-ref --short HEAD 2>/dev/null || return 1
}

# Customise PS1 – works in bash; for POSIX sh, use PS1 directly
if [ -n "$BASH" ]; then
    PS1='\\u@\\h:\\w $(git_branch && echo " (")$(git_branch)\\[\\033[00m\\]) \\$ '
fi`,l=`#!/bin/sh
# auto_backup_to_git.sh – Automated daily commit and push
# Intended to be run via cron.

REPO_DIR="$HOME/scripts"
cd "$REPO_DIR" || exit 1

# Stage all changes (new, modified, deleted)
git add --all

# If there's nothing to commit, exit gracefully
if git diff --cached --quiet; then
    echo "No changes to commit."
    exit 0
fi

# Commit with timestamp
git commit -m "Automated backup: $(date '+%Y-%m-%d %H:%M:%S')"

# Push to remote (if configured)
git push origin main 2>/dev/null || echo "Push failed – check remote."`,o=`#!/bin/sh
# pre_commit_hook.sh – Git pre-commit hook to validate shell scripts
# Place in .git/hooks/pre-commit and make executable.

echo "🔍 Running pre-commit shell script validation..."

# Check each staged .sh file for syntax errors
for file in $(git diff --cached --name-only --diff-filter=ACM | grep '\\.sh$'); do
    if [ -f "$file" ]; then
        bash -n "$file"
        if [ $? -ne 0 ]; then
            echo "❌ Syntax error in $file. Commit aborted."
            exit 1
        fi
    fi
done

echo "✅ All shell scripts look good."
exit 0`,c=`#!/bin/sh
# clone_and_setup.sh – One‑command environment setup
# Usage: ./clone_and_setup.sh <git-repo-url>

if [ $# -ne 1 ]; then
    echo "Usage: $0 <git-repo-url>"
    exit 1
fi

REPO_URL="$1"
PROJECT_DIR="$(basename "$REPO_URL" .git)"

echo "📦 Cloning $REPO_URL ..."
git clone "$REPO_URL" || exit 1

cd "$PROJECT_DIR" || exit 1

# Make all utility scripts executable
chmod +x *.sh 2>/dev/null

# Symlink into ~/.local/bin for easy access
mkdir -p "$HOME/.local/bin"
for script in *.sh; do
    name="\${script%.sh}"
    ln -sf "$(pwd)/$script" "$HOME/.local/bin/$name"
done

echo "✅ Setup complete. Scripts are in ~/.local/bin"`,p=()=>{const n=new Date().getFullYear()-1998;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes branchFlow {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes nodePulse {
          0% { r: 3; opacity: 0.8; }
          50% { r: 5; opacity: 1; }
          100% { r: 3; opacity: 0.8; }
        }
      `}),e.jsxs("div",{className:s("max-w-7xl mx-auto px-4 py-12 space-y-16","bg-gray-900 text-gray-100","light:bg-white light:text-gray-900"),children:[e.jsxs("header",{className:s("text-center space-y-4","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold leading-tight",children:"📦 Version Controlling Shell Scripts with Git"}),e.jsxs("p",{className:"text-xl md:text-2xl text-gray-300 light:text-gray-700 max-w-3xl mx-auto leading-relaxed",children:["Stop naming scripts"," ",e.jsx("span",{className:"line-through text-red-400",children:"backup_final_v2.sh"}),". Use Git – the same tool that powers the code in"," ",e.jsx("span",{className:"text-green-400 light:text-green-600",children:"Coder & AccoTax"})," ","and every open‑source project."]}),e.jsx("div",{className:"flex justify-center pt-6",children:e.jsxs("svg",{width:"360",height:"140",viewBox:"0 0 360 140",className:"drop-shadow-xl hover:scale-[1.02] transition-transform duration-300","aria-label":"Git commit history with shell script automation",children:[e.jsxs("g",{id:"commits",children:[e.jsx("circle",{cx:"40",cy:"70",r:"4",fill:"#34d399",children:e.jsx("animate",{attributeName:"r",values:"4;6;4",dur:"2s",repeatCount:"indefinite",begin:"mouseover"})}),e.jsx("circle",{cx:"100",cy:"70",r:"4",fill:"#34d399"}),e.jsx("circle",{cx:"160",cy:"70",r:"4",fill:"#34d399"}),e.jsx("circle",{cx:"220",cy:"70",r:"4",fill:"#34d399"}),e.jsx("circle",{cx:"280",cy:"70",r:"4",fill:"#fbbf24"})," "]}),e.jsx("line",{x1:"40",y1:"70",x2:"280",y2:"70",stroke:"#6b7280",strokeWidth:"2",strokeDasharray:"6 4",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;30;0",dur:"4s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M160 70 Q180 40 200 40",stroke:"#f59e0b",strokeWidth:"2",fill:"none",strokeDasharray:"6 3"}),e.jsx("circle",{cx:"200",cy:"40",r:"4",fill:"#f59e0b"}),e.jsx("text",{x:"210",y:"35",fontSize:"10",fill:"#f59e0b",children:"feature"}),e.jsxs("g",{transform:"translate(300, 90)",children:[e.jsx("rect",{x:"0",y:"0",width:"40",height:"40",rx:"6",fill:"#1e293b",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"8",y:"26",fontSize:"18",fill:"#3b82f6",children:"$"}),e.jsx("text",{x:"22",y:"28",fontSize:"18",fill:"#e2e8f0",children:".sh"}),e.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"0 0; -2 -2; 0 0",dur:"2s",repeatCount:"indefinite",begin:"mouseover"})]}),e.jsx("text",{x:"20",y:"30",fontSize:"14",fill:"#d1d5db",children:"git log"})]})})]}),e.jsxs("section",{className:"space-y-6 motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"🧭 Why Git for Shell Scripts?"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10",children:[e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:[e.jsx("span",{className:"font-bold text-green-400",children:"Track every change"})," – see who changed what, when, and why. No more"," ",e.jsx("code",{className:"bg-gray-800 light:bg-gray-200 px-2 py-1 rounded",children:"backup_2025-01-01.sh"})," ","and"," ",e.jsx("code",{className:"bg-gray-800 light:bg-gray-200 px-2 py-1 rounded",children:"backup_new_fixed.sh"}),"."]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-bold text-green-400",children:"Collaborate safely"})," –"," ",e.jsx("span",{className:"text-blue-400",children:"Tuhina"})," and"," ",e.jsx("span",{className:"text-blue-400",children:"Debangshu"})," can work on the same script without overwriting each other's work. Git merges intelligently."]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-bold text-green-400",children:"Experiment freely"})," – create branches, try risky changes, and discard them if they fail. Your main script stays pristine."]})]}),e.jsxs("div",{className:s("p-6 rounded-xl bg-gray-800 light:bg-gray-100 border border-green-700","hover:shadow-[0_0_20px_-5px_rgba(52,211,153,0.5)] transition-shadow"),children:[e.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"📌"})," Real‑world Scenario"]}),e.jsxs("p",{className:"text-lg",children:["The school admin system in ",e.jsx("span",{className:"italic",children:"Naihati"})," has 15+ cron scripts. Before Git, a mistaken change took down the attendance report. Now, every script is versioned, and rollback takes 10 seconds."]})]})]})]}),e.jsxs("section",{className:"space-y-12",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"🧪 Git + Shell Scripts in Action"}),e.jsx(t,{fileModule:a,title:"📊 git_status_prompt.sh – Show Git branch in your shell prompt",highlightLines:[6,11]}),e.jsx(t,{fileModule:l,title:"⏱️ auto_backup_to_git.sh – Automated daily commit & push",highlightLines:[12,18,25]}),e.jsx(t,{fileModule:o,title:"🔍 pre_commit_hook.sh – Git hook that validates shell scripts",highlightLines:[7,15]}),e.jsx(t,{fileModule:c,title:"⚙️ clone_and_setup.sh – One‑command environment setup",highlightLines:[8,14,20]})]}),e.jsxs("section",{className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-red-800 light:border-red-300 pb-3 inline-block",children:"⚠️ Git Pitfalls for Scripters"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["❌ Committing secrets (passwords, API keys) – they live in history forever.","❌ Committing large binary files – bloats the repo; use Git LFS or ignore.","❌ Not using `.gitignore` – editor swap files, compiled scripts, logs.","❌ Huge, unstructured commits – `git add . && git commit -m 'updates'`","❌ Pushing directly to `main` without testing in a branch.","❌ Forgetting to make hooks executable (`chmod +x .git/hooks/pre-commit`)."].map((i,r)=>e.jsx("div",{className:s("p-5 rounded-lg border border-red-800 light:border-red-300","bg-red-900/20 light:bg-red-50","hover:bg-red-900/30 light:hover:bg-red-100 transition-colors"),children:e.jsx("span",{className:"text-lg",children:i})},r))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-green-800 light:border-green-300 pb-3 inline-block",children:"✅ Best Practices"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:["📝 Write meaningful commit messages: `fix: handle empty filename` not `fix bug`.","🔐 Never store credentials – use environment variables or secret managers.","📄 Always include a `.gitignore` (example: *.log, *.tmp, .env, .DS_Store).","🧪 Test hooks locally before pushing – a broken hook blocks everyone.","🌿 Use feature branches: `git checkout -b add-validate-function`.","📦 Tag releases: `git tag v1.0.0` – easy rollback.","🔁 Commit often, push daily (or after logical chunks).","👀 Review your own diff before committing: `git diff --cached`."].map((i,r)=>e.jsxs("div",{className:"flex items-start gap-3 p-3 rounded hover:bg-gray-800 light:hover:bg-gray-100",children:[e.jsx("span",{className:"text-green-400 light:text-green-600 text-xl",children:"✓"}),e.jsx("span",{children:i})]},r))})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b border-yellow-800 light:border-yellow-300 pb-3 inline-block",children:"🧠 Pro Tips"}),e.jsxs("div",{className:"space-y-4 text-lg leading-relaxed",children:[e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Use `git bisect`"})," – when a script suddenly breaks, bisect pinpoints the exact commit that introduced the bug. Automate it with a test script."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Git hooks in the repository"})," – store hooks in ",e.jsx("code",{children:".githooks/"})," and run"," ",e.jsx("code",{className:"bg-gray-800 light:bg-gray-200 px-2 py-1 rounded",children:"git config core.hooksPath .githooks"}),". Now hooks are versioned."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Alias common Git commands"})," in your shell rc file:"," ",e.jsx("code",{children:"alias gs='git status'"}),", ",e.jsx("code",{children:"alias gc='git commit'"}),"."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Use `git grep`"})," to search across versions:"," ",e.jsx("code",{children:"git grep 'rm -rf' v1.0.0"})," – find dangerous commands."]}),e.jsxs("p",{children:["🔹 ",e.jsx("strong",{children:"Commit often, but squash before merging"})," – keep history clean with"," ",e.jsx("code",{children:"git rebase -i"}),"."]})]})]}),e.jsxs("section",{className:s("p-8 rounded-2xl bg-indigo-900/20 light:bg-indigo-50 border border-indigo-700","flex flex-col md:flex-row gap-6 items-start"),children:[e.jsx("span",{className:"text-5xl",children:"💡"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Observe carefully…"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["In ",e.jsx("code",{children:"pre_commit_hook.sh"}),", why do we check ",e.jsx("code",{children:"$? -ne 0"})," after"," ",e.jsx("code",{children:'bash -n "$file"'}),"? What happens if we omit the ",e.jsx("code",{children:"chmod +x"})," on the hook itself?"]}),e.jsxs("p",{className:"text-md text-gray-300 light:text-gray-700",children:["Try changing the hook to always exit with 1. What effect does that have on ",e.jsx("code",{children:"git commit"}),"?"]})]})]}),e.jsx("section",{className:s("p-8 rounded-2xl bg-amber-900/20 light:bg-amber-50 border border-amber-700","hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] transition-shadow"),children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[e.jsx("span",{className:"text-6xl",children:"🧑‍🏫"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Teacher's Note"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-lg",children:[e.jsx("p",{children:e.jsx("span",{className:"font-semibold",children:"Sukanta Hui"})}),e.jsx("p",{children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsx("p",{children:"🧰 Programming, RDBMS, OS, Web"}),e.jsxs("p",{children:["⏳ ",n," years (since 1998)"]})]}),e.jsxs("p",{className:"text-lg leading-relaxed mt-4",children:["“In 1998, I taught version control with RCS – we locked files. Today, Git empowers every student in ",e.jsx("span",{className:"italic",children:"Shyamnagar"})," to contribute fearlessly. I insist: commit early, commit often, and always write a message you'll understand six months later.”"]}),e.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#CommitOften"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#MeaningfulMessages"}),e.jsx("span",{className:"bg-amber-800 light:bg-amber-200 px-4 py-2 rounded-full text-sm font-mono",children:"#HooksSaveTime"})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold flex items-center gap-3",children:"✅ Git for Shell Scripts – Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside marker:text-green-400",children:[e.jsxs("li",{children:[e.jsx("code",{children:"git init"})," in your script project."]}),e.jsxs("li",{children:["Create a ",e.jsx("code",{children:".gitignore"})," (logs, temp files, secrets)."]}),e.jsx("li",{children:"Commit with descriptive messages."}),e.jsx("li",{children:"Use branches for experiments."}),e.jsx("li",{children:"Add a pre-commit hook to check syntax."}),e.jsxs("li",{children:["Tag releases (",e.jsx("code",{children:"v1.0"}),", ",e.jsx("code",{children:"v2.0"}),")."]}),e.jsx("li",{children:"Push to a remote (GitHub, GitLab) for backup."}),e.jsx("li",{children:"Never commit credentials."})]})]}),e.jsx("footer",{className:"text-center pt-12 text-gray-400 light:text-gray-600 text-sm",children:e.jsx("p",{children:"Next: Writing reusable utility scripts – Topic31"})})]})]})};export{p as default};
