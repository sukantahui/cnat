import{j as e}from"./index-Do7ncMju.js";import{S as r}from"./ShellFileLoader-CfxYwE3z.js";import"./prism-B9ltoSp8.js";const t=`#!/bin/bash
# ~/.bashrc - Bash configuration for interactive non-login shells
# Runs for every new terminal window (non-login)

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# Source global definitions
if [ -f /etc/bashrc ]; then
    . /etc/bashrc
fi

# ========== ALIASES ==========
alias ll='ls -la'
alias la='ls -A'
alias l='ls -CF'
alias grep='grep --color=auto'
alias fgrep='fgrep --color=auto'
alias egrep='egrep --color=auto'

# Git aliases
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gd='git diff'

# Navigation aliases
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'

# Safety aliases
alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'

# ========== FUNCTIONS ==========
# Quick directory listing with tree (if available)
if command -v tree &> /dev/null; then
    function tre() {
        tree -aC -I '.git|node_modules|__pycache__' --dirsfirst "$@" | less -FRNX
    }
fi

# Extract function for different archive types
extract() {
    if [ -f "$1" ]; then
        case "$1" in
            *.tar.bz2)   tar xjf "$1"     ;;
            *.tar.gz)    tar xzf "$1"     ;;
            *.bz2)       bunzip2 "$1"     ;;
            *.rar)       unrar x "$1"     ;;
            *.gz)        gunzip "$1"      ;;
            *.tar)       tar xf "$1"      ;;
            *.tbz2)      tar xjf "$1"     ;;
            *.tgz)       tar xzf "$1"     ;;
            *.zip)       unzip "$1"       ;;
            *.Z)         uncompress "$1"  ;;
            *.7z)        7z x "$1"        ;;
            *)           echo "'$1' cannot be extracted via extract()" ;;
        esac
    else
        echo "'$1' is not a valid file"
    fi
}

# ========== SHELL OPTIONS ==========
# Append to history file instead of overwriting
shopt -s histappend
# Save multi-line commands as one line
shopt -s cmdhist
# Check window size and update LINES/COLUMNS
shopt -s checkwinsize

# ========== HISTORY SETTINGS ==========
# Don't put duplicate lines or lines starting with space in history
HISTCONTROL=ignoreboth
# History length
HISTSIZE=1000
HISTFILESIZE=2000

# ========== PROMPT CUSTOMIZATION ==========
# Set variable identifying the chroot you work in (used in prompt below)
if [ -z "\${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
    debian_chroot=$(cat /etc/debian_chroot)
fi

# Set a fancy prompt (non-color, unless we know we want color)
case "$TERM" in
    xterm-color|*-256color) color_prompt=yes;;
esac

if [ -n "$force_color_prompt" ]; then
    if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then
        color_prompt=yes
    else
        color_prompt=
    fi
fi

if [ "$color_prompt" = yes ]; then
    PS1='\${debian_chroot:+($debian_chroot)}\\[\\033[01;32m\\]\\u@\\h\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]\\$ '
else
    PS1='\${debian_chroot:+($debian_chroot)}\\u@\\h:\\w\\$ '
fi
unset color_prompt force_color_prompt

# If this is an xterm set title to user@host:dir
case "$TERM" in
xterm*|rxvt*)
    PS1="\\[\\e]0;\${debian_chroot:+($debian_chroot)}\\u@\\h: \\w\\a\\]$PS1"
    ;;
*)
    ;;
esac

# ========== COMPLETION ==========
# Enable programmable completion features
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

# ========== LOCAL SETTINGS ==========
# Source local bashrc if exists
if [ -f ~/.bashrc_local ]; then
    . ~/.bashrc_local
fi`,a=`#!/bin/bash
# ~/.bash_profile - Bash configuration for login shells
# Executed only for login shells (SSH, console login, bash --login)

# ========== ENVIRONMENT VARIABLES ==========
# These should be set in login shells so they're available everywhere

# Editor preference
export EDITOR='vim'
export VISUAL='vim'

# Add user local bin to PATH if it exists
if [ -d "$HOME/.local/bin" ]; then
    export PATH="$HOME/.local/bin:$PATH"
fi

# Add custom scripts directory to PATH
if [ -d "$HOME/bin" ]; then
    export PATH="$HOME/bin:$PATH"
fi

# Python virtualenvwrapper
export WORKON_HOME="$HOME/.virtualenvs"
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
if [ -f /usr/local/bin/virtualenvwrapper.sh ]; then
    source /usr/local/bin/virtualenvwrapper.sh
fi

# Go language
export GOPATH="$HOME/go"
export PATH="$PATH:$GOPATH/bin"

# Node Version Manager (nvm)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"

# Java
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64

# ========== SECURITY SETTINGS ==========
# Set secure umask (read/write for user, read for group/others)
umask 022

# ========== LOCALE SETTINGS ==========
export LANG='en_US.UTF-8'
export LC_ALL='en_US.UTF-8'

# ========== APPLICATION-SPECIFIC ==========
# Docker
export DOCKER_BUILDKIT=1

# PostgreSQL
export PGDATA="$HOME/postgres_data"

# ========== SOURCE .bashrc ==========
# Always source .bashrc for consistent shell experience
if [ -f ~/.bashrc ]; then
    . ~/.bashrc
fi

# ========== LOGIN-SPECIFIC ACTIONS ==========
# Display system information on login
if [ -t 0 ]; then
    echo "Welcome back, $(whoami)!"
    echo "System: $(uname -srm)"
    echo "Uptime: $(uptime -p)"
    echo ""
fi

# ========== LOCAL LOGIN SETTINGS ==========
# Source local bash_profile if exists
if [ -f ~/.bash_profile_local ]; then
    . ~/.bash_profile_local
fi`,n=`#!/bin/sh
# ~/.profile - Bourne shell compatible profile
# Executed by login shells when .bash_profile doesn't exist
# Good for cross-shell compatibility

# ========== CROSS-SHELL ENVIRONMENT ==========
# These settings work in bash, sh, dash, ksh, etc.

# Set PATH so it includes user's private bin if it exists
if [ -d "$HOME/bin" ]; then
    PATH="$HOME/bin:$PATH"
fi

if [ -d "$HOME/.local/bin" ]; then
    PATH="$HOME/.local/bin:$PATH"
fi

# Set default editor (works across shells)
if [ -n "$(command -v vim)" ]; then
    EDITOR=vim
elif [ -n "$(command -v vi)" ]; then
    EDITOR=vi
elif [ -n "$(command -v nano)" ]; then
    EDITOR=nano
fi
export EDITOR

# Locale settings
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

# History settings for shells that support it
if [ -n "$BASH_VERSION" ]; then
    HISTSIZE=1000
    HISTFILESIZE=2000
    HISTCONTROL=ignoreboth
    export HISTSIZE HISTFILESIZE HISTCONTROL
fi

# ========== APPLICATION PATHS ==========
# Java
if [ -d "/usr/lib/jvm/java-11-openjdk-amd64" ]; then
    JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64"
    PATH="$JAVA_HOME/bin:$PATH"
    export JAVA_HOME
fi

# Go
if [ -d "$HOME/go" ]; then
    GOPATH="$HOME/go"
    PATH="$PATH:$GOPATH/bin"
    export GOPATH
fi

# ========== SHELL-SPECIFIC SOURCING ==========
# Source bashrc if we're in bash
if [ -n "$BASH_VERSION" ]; then
    if [ -f "$HOME/.bashrc" ]; then
        . "$HOME/.bashrc"
    fi
fi

# Source zshrc if we're in zsh
if [ -n "$ZSH_VERSION" ]; then
    if [ -f "$HOME/.zshrc" ]; then
        . "$HOME/.zshrc"
    fi
fi

# ========== WELCOME MESSAGE ==========
# Only show in interactive shells
case "$-" in
    *i*)
        echo "Welcome to $(hostname) - $(date)"
        echo "Shell: $SHELL"
        ;;
esac

# ========== EXPORT PATH LAST ==========
export PATH

# ========== LOCAL PROFILE ==========
# Source local profile if exists
if [ -f "$HOME/.profile_local" ]; then
    . "$HOME/.profile_local"
fi`,o=`#!/bin/bash
# login_flow.sh - Test script to understand bash startup file execution
# Run this script to see which startup files get loaded in different scenarios

echo "=== Testing Bash Startup File Execution ==="
echo ""

# Create test startup files
create_test_files() {
    echo "Creating test startup files..."
    
    # Create .bashrc test
    cat > /tmp/test_bashrc << 'EOF'
echo "[.bashrc] Loaded at $(date)"
export TEST_BASHRC="loaded"
EOF
    
    # Create .bash_profile test
    cat > /tmp/test_bash_profile << 'EOF'
echo "[.bash_profile] Loaded at $(date)"
export TEST_BASH_PROFILE="loaded"
if [ -f /tmp/test_bashrc ]; then
    source /tmp/test_bashrc
fi
EOF
    
    # Create .profile test
    cat > /tmp/test_profile << 'EOF'
echo "[.profile] Loaded at $(date)"
export TEST_PROFILE="loaded"
EOF
}

cleanup_test_files() {
    echo "Cleaning up test files..."
    rm -f /tmp/test_bashrc /tmp/test_bash_profile /tmp/test_profile
}

run_test() {
    local description="$1"
    local command="$2"
    
    echo ""
    echo "--- $description ---"
    echo "Command: $command"
    echo "Output:"
    
    # Set test files as our startup files
    export BASHRC_TEST=/tmp/test_bashrc
    export BASH_PROFILE_TEST=/tmp/test_bash_profile
    export PROFILE_TEST=/tmp/test_profile
    
    eval "$command"
    
    echo "Environment variables set:"
    env | grep TEST_ | sort || echo "No TEST_ variables found"
}

# Main execution
create_test_files

echo ""
echo "1. Login Shell Test (simulates SSH login)"
run_test "Login Shell" "bash --login -c 'echo \\"Shell type: login\\" && env | grep -E \\"(TEST_|BASH)\\"'"

echo ""
echo "2. Non-Login Interactive Shell Test (simulates new terminal)"
run_test "Non-Login Shell" "bash -i -c 'echo \\"Shell type: non-login interactive\\" && env | grep -E \\"(TEST_|BASH)\\"' <<< 'exit'"

echo ""
echo "3. Non-Interactive Shell Test (simulates script execution)"
run_test "Non-Interactive Shell" "bash -c 'echo \\"Shell type: non-interactive\\" && env | grep -E \\"(TEST_|BASH)\\"'"

echo ""
echo "4. With BASH_ENV set"
export BASH_ENV=/tmp/test_bashrc
run_test "With BASH_ENV" "bash -c 'echo \\"BASH_ENV test\\" && echo \\"TEST_BASHRC=\\$TEST_BASHRC\\"'"
unset BASH_ENV

echo ""
echo "5. Direct sourcing test"
echo "Sourcing .bash_profile directly:"
source /tmp/test_bash_profile
echo "TEST_BASH_PROFILE=$TEST_BASH_PROFILE"
echo "TEST_BASHRC=$TEST_BASHRC"

cleanup_test_files

echo ""
echo "=== Summary ==="
echo "• Login shells: Read /etc/profile, then ~/.bash_profile or ~/.profile"
echo "• Non-login interactive shells: Read ~/.bashrc only"
echo "• Non-interactive shells: Read BASH_ENV if set, otherwise nothing"
echo ""
echo "Best Practice: Put environment variables in .bash_profile/.profile"
echo "               Put aliases and functions in .bashrc"
echo "               Source .bashrc from .bash_profile"`,c=()=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 p-4 md:p-8 transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-6xl mx-auto animate-[fadeInUp_0.8s_ease-out]",children:[e.jsxs("div",{className:"mb-10 animate-[fadeInUp_0.8s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg",children:e.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"})})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent",children:"Topic 2: Bash Startup Files"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-1",children:"Mastering .bashrc, .bash_profile, and .profile for shell customization"})]})]}),e.jsx("div",{className:"bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800/50 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("svg",{className:"w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("div",{children:e.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:"Bash startup files are configuration files that run automatically when you start a shell session. They allow you to customize your environment, set aliases, define functions, and configure your shell's behavior. Understanding when each file loads is crucial for effective shell customization."})})]})})]}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.2s]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-700",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Bash Startup File Flow"]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"mb-8",children:e.jsxs("svg",{className:"w-full h-auto",viewBox:"0 0 800 400",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("defs",{children:[e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#3b82f6"})}),e.jsxs("linearGradient",{id:"terminalGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#1e40af"}),e.jsx("stop",{offset:"100%",stopColor:"#3b82f6"})]})]}),e.jsxs("g",{className:"cursor-pointer hover:opacity-90 transition-opacity duration-300",onMouseEnter:s=>s.currentTarget.style.opacity="1",onMouseLeave:s=>s.currentTarget.style.opacity="0.9",children:[e.jsx("rect",{x:"50",y:"50",width:"150",height:"60",rx:"8",fill:"url(#terminalGradient)",className:"transition-all duration-300 hover:stroke-blue-400 hover:stroke-2"}),e.jsx("text",{x:"125",y:"85",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:"Login Shell"}),e.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"2s",repeatCount:"indefinite"})]}),e.jsx("path",{d:"M200 80 L300 80",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrowhead)"}),e.jsx("text",{x:"250",y:"70",textAnchor:"middle",fill:"#6b7280",className:"font-sans text-xs",children:"First"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"300",y:"50",width:"200",height:"60",rx:"8",fill:"#f59e0b",className:"transition-all duration-300 hover:fill-amber-500"}),e.jsx("text",{x:"400",y:"85",textAnchor:"middle",fill:"white",className:"font-sans text-sm font-bold",children:"/etc/profile"}),e.jsx("animate",{attributeName:"fill",values:"#f59e0b;#fbbf24;#f59e0b",dur:"3s",repeatCount:"indefinite"})]}),e.jsx("path",{d:"M500 80 L600 80",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrowhead)"}),e.jsx("text",{x:"550",y:"70",textAnchor:"middle",fill:"#6b7280",className:"font-sans text-xs",children:"Then"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"600",y:"30",width:"150",height:"40",rx:"6",fill:"#10b981",className:"transition-all duration-300 hover:fill-emerald-500"}),e.jsx("text",{x:"675",y:"55",textAnchor:"middle",fill:"white",className:"font-sans text-xs",children:"~/.bash_profile"})]}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"600",y:"80",width:"150",height:"40",rx:"6",fill:"#10b981",className:"transition-all duration-300 hover:fill-emerald-500"}),e.jsx("text",{x:"675",y:"105",textAnchor:"middle",fill:"white",className:"font-sans text-xs",children:"~/.profile"})]}),e.jsx("text",{x:"600",y:"130",textAnchor:"start",fill:"#9ca3af",className:"font-sans text-xs",children:"(whichever exists)"}),e.jsxs("g",{className:"cursor-pointer hover:opacity-90 transition-opacity duration-300",children:[e.jsx("rect",{x:"50",y:"200",width:"150",height:"60",rx:"8",fill:"#8b5cf6",className:"transition-all duration-300 hover:stroke-purple-400 hover:stroke-2"}),e.jsx("text",{x:"125",y:"235",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:"Non-Login Shell"}),e.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"2s",repeatCount:"indefinite",begin:"1s"})]}),e.jsx("path",{d:"M200 230 L350 230",stroke:"#8b5cf6",strokeWidth:"2",markerEnd:"url(#arrowhead)"}),e.jsx("text",{x:"275",y:"220",textAnchor:"middle",fill:"#6b7280",className:"font-sans text-xs",children:"Only"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"350",y:"200",width:"150",height:"60",rx:"8",fill:"#ef4444",className:"transition-all duration-300 hover:fill-red-500"}),e.jsx("text",{x:"425",y:"235",textAnchor:"middle",fill:"white",className:"font-sans text-sm font-bold",children:"~/.bashrc"}),e.jsx("animate",{attributeName:"fill",values:"#ef4444;#f87171;#ef4444",dur:"3s",repeatCount:"indefinite",begin:"0.5s"})]}),e.jsxs("g",{className:"cursor-pointer hover:opacity-90 transition-opacity duration-300",children:[e.jsx("rect",{x:"50",y:"300",width:"150",height:"60",rx:"8",fill:"#6b7280",className:"transition-all duration-300 hover:stroke-gray-400 hover:stroke-2"}),e.jsx("text",{x:"125",y:"335",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:"Script/Non-Interactive"})]}),e.jsx("path",{d:"M200 330 L350 330",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrowhead)"}),e.jsx("text",{x:"275",y:"320",textAnchor:"middle",fill:"#6b7280",className:"font-sans text-xs",children:"Only"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"350",y:"300",width:"200",height:"60",rx:"8",fill:"#9ca3af",className:"transition-all duration-300 hover:fill-gray-400"}),e.jsx("text",{x:"450",y:"335",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:"BASH_ENV or env"})]}),e.jsx("rect",{x:"500",y:"350",width:"250",height:"40",rx:"6",fill:"#1f2937",fillOpacity:"0.8"}),e.jsx("text",{x:"510",y:"370",fill:"#60a5fa",className:"font-sans text-xs",children:"Login Shell: Reads .bash_profile/.profile"}),e.jsx("text",{x:"510",y:"385",fill:"#a78bfa",className:"font-sans text-xs",children:"Non-Login: Reads .bashrc only"})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",children:[e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700",children:[e.jsxs("h3",{className:"font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),".bashrc"]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Runs for ",e.jsx("strong",{children:"non-login interactive shells"}),". Contains aliases, functions, and shell options."]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded-lg border border-green-200 dark:border-green-800 transition-all duration-300 hover:shadow-lg hover:border-green-300 dark:hover:border-green-700",children:[e.jsxs("h3",{className:"font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),".bash_profile"]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Runs for ",e.jsx("strong",{children:"login shells"}),". Should source .bashrc and set environment variables."]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800 transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-700",children:[e.jsxs("h3",{className:"font-bold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),".profile"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Bourne shell compatible. Used when .bash_profile doesn't exist. Good for cross-shell compatibility."})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.3s]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-indigo-600 dark:text-indigo-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),"File Purposes & Differences"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700",children:[e.jsx("h3",{className:"font-bold text-xl text-blue-600 dark:text-blue-400 mb-3",children:"~/.bashrc (Bash Run Commands)"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:["This file is executed for ",e.jsx("strong",{children:"every non-login interactive shell"}),". When you open a new terminal window (that's not a login shell) or start a new interactive bash session, this file runs."]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("svg",{className:"w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.282 16.5c-.77.833.192 2.5 1.732 2.5z"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-yellow-800 dark:text-yellow-300 font-semibold",children:"When is .bashrc executed?"}),e.jsxs("p",{className:"text-yellow-700 dark:text-yellow-400 text-sm mt-1",children:["• Opening a new terminal tab/window (non-login)",e.jsx("br",{}),"• Running ",e.jsx("code",{className:"text-xs bg-yellow-100 dark:bg-yellow-900 px-1 rounded",children:"bash"})," from within bash",e.jsx("br",{}),"• ",e.jsx("strong",{children:"NOT"})," when logging in via SSH or console"]})]})]})}),e.jsx(r,{fileModule:t,title:"Typical .bashrc Contents",highlightLines:[1,3,5,7,9,11]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-green-300 dark:hover:border-green-700",children:[e.jsx("h3",{className:"font-bold text-xl text-green-600 dark:text-green-400 mb-3",children:"~/.bash_profile (Bash Login Profile)"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:["This file is executed only for ",e.jsx("strong",{children:"login shells"}),". When you log in to the system via SSH, console, or start a login shell with ",e.jsx("code",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"bash --login"}),", this file runs."]}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-600 p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("svg",{className:"w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-blue-800 dark:text-blue-300 font-semibold",children:"Best Practice Pattern"}),e.jsxs("p",{className:"text-blue-700 dark:text-blue-400 text-sm mt-1",children:["A good .bash_profile should:",e.jsx("br",{}),"1. Source .bashrc for consistency",e.jsx("br",{}),"2. Set environment variables (PATH, EDITOR, etc.)",e.jsx("br",{}),"3. Run login-specific commands"]})]})]})}),e.jsx(r,{fileModule:a,title:"Recommended .bash_profile Structure",highlightLines:[1,3,5,7,9,11]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700",children:[e.jsx("h3",{className:"font-bold text-xl text-purple-600 dark:text-purple-400 mb-3",children:"~/.profile (Universal Profile)"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:["This is the Bourne shell (sh) compatible profile file. Bash will read this if ",e.jsx("code",{className:"text-sm bg-gray-100 dark:bg-gray-800 px-1 rounded",children:"~/.bash_profile"})," doesn't exist. It's useful for cross-shell compatibility when you might use other shells like dash, ksh, or zsh."]}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 dark:border-purple-600 p-4",children:e.jsxs("div",{className:"flex",children:[e.jsx("svg",{className:"w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-purple-800 dark:text-purple-300 font-semibold",children:"When to use .profile?"}),e.jsxs("p",{className:"text-purple-700 dark:text-purple-400 text-sm mt-1",children:["• When you use multiple shells (bash, sh, dash)",e.jsx("br",{}),"• For system-wide environment variables",e.jsx("br",{}),"• When creating portable shell configurations"]})]})]})}),e.jsx(r,{fileModule:n,title:"Example .profile File",highlightLines:[1,3,5,7,9]})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.4s]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-orange-600 dark:text-orange-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})}),"Real-World Examples & Common Configurations"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 p-5 rounded-xl border border-orange-200 dark:border-orange-800 transition-all duration-300 hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-700",children:[e.jsxs("h3",{className:"font-bold text-lg text-orange-700 dark:text-orange-400 mb-3 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})}),"Student Scenario: Swadeep's Development Setup"]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Swadeep, a student from Barrackpore, needs to set up his Python development environment. He wants different configurations for his college projects vs personal projects."}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"1"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["In ",e.jsx("strong",{children:".bashrc"}),": Aliases for quick navigation to project folders"]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"2"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["In ",e.jsx("strong",{children:".bash_profile"}),": Set Python virtualenv wrapper and PATH"]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"3"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Creates a function in .bashrc to switch between college and personal projects"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/10 dark:to-blue-900/10 p-5 rounded-xl border border-cyan-200 dark:border-cyan-800 transition-all duration-300 hover:shadow-lg hover:border-cyan-300 dark:hover:border-cyan-700",children:[e.jsxs("h3",{className:"font-bold text-lg text-cyan-700 dark:text-cyan-400 mb-3 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),"System Admin: Tuhina's Server Configuration"]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Tuhina, a system administrator from Shyamnagar, manages multiple servers. She needs consistent environment across all servers."}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"1"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Uses ",e.jsx("strong",{children:".profile"})," for cross-shell compatibility (some servers use dash)"]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"2"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["In ",e.jsx("strong",{children:".bashrc"}),": SSH aliases, monitoring shortcuts, safety aliases"]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"3"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Sets umask and history settings in .bash_profile for security"})]})]})]})]}),e.jsx("div",{className:"mt-8",children:e.jsx(r,{fileModule:o,title:"Login Flow Testing Script",highlightLines:[1,3,5,7,9,11,13,15]})})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.5s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10 rounded-2xl shadow-lg p-6 border border-red-200 dark:border-red-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Common Pitfalls & Beginner Mistakes"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-red-600 dark:text-red-400 mb-3",children:"Mistake 1: Putting everything in .bashrc"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-3",children:"Beginners often put all configurations in .bashrc, forgetting that environment variables set here won't persist in child processes."}),e.jsx("div",{className:"bg-red-50 dark:bg-red-900/20 p-4 rounded-lg",children:e.jsxs("p",{className:"text-red-800 dark:text-red-300 font-mono text-sm",children:["# Wrong - PATH won't be available in scripts",e.jsx("br",{}),'export PATH="$PATH:/new/path"  # In .bashrc']})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-red-600 dark:text-red-400 mb-3",children:"Mistake 2: Not sourcing .bashrc from .bash_profile"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-3",children:"When .bash_profile exists, .bashrc won't run for login shells unless explicitly sourced. This leads to inconsistent environments."}),e.jsx("div",{className:"bg-green-50 dark:bg-green-900/20 p-4 rounded-lg",children:e.jsxs("p",{className:"text-green-800 dark:text-green-300 font-mono text-sm",children:["# Correct approach in .bash_profile",e.jsx("br",{}),"if [ -f ~/.bashrc ]; then",e.jsx("br",{}),"  . ~/.bashrc",e.jsx("br",{}),"fi"]})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-red-600 dark:text-red-400 mb-3",children:"Mistake 3: Infinite recursion in sourcing"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-3",children:"Accidentally creating circular sourcing (e.g., .bashrc sources .bash_profile which sources .bashrc...)."}),e.jsx("div",{className:"bg-red-50 dark:bg-red-900/20 p-4 rounded-lg",children:e.jsxs("p",{className:"text-red-800 dark:text-red-300 font-mono text-sm",children:["# DANGER - Infinite loop!",e.jsx("br",{}),"# In .bashrc:",e.jsx("br",{}),"source ~/.bash_profile  # Bad!",e.jsx("br",{}),e.jsx("br",{}),"# In .bash_profile:",e.jsx("br",{}),"source ~/.bashrc  # Also bad!"]})})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.6s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/10 dark:to-green-900/10 rounded-2xl shadow-lg p-6 border border-emerald-200 dark:border-emerald-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-emerald-600 dark:text-emerald-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Best Practices & Professional Tips"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3",children:"Organization Strategy"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Separate aliases, functions, and environment variables into different files"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Use conditional checks for interactive shells"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Keep .bash_profile minimal - source everything else"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3",children:"Portability Tips"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Use .profile for system-wide environment variables"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Test configurations in different shell types"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Version control your dotfiles with Git"})]})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.7s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10 rounded-2xl shadow-lg p-6 border border-violet-200 dark:border-violet-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-violet-600 dark:text-violet-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),"Mini Checklist: What to Remember"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"1"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Login Shells"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Read .bash_profile or .profile"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"2"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Non-Login Shells"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Read .bashrc only"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"3"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Source Order"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Always source .bashrc from .bash_profile"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"4"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Environment Vars"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Set in login shell files"})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.8s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/10 dark:to-yellow-900/10 rounded-2xl shadow-lg p-6 border border-amber-200 dark:border-amber-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-amber-600 dark:text-amber-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Thinking Corner: Questions to Ponder"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-sm",children:[e.jsx("p",{className:"text-amber-700 dark:text-amber-400 font-semibold mb-2",children:"Think about..."}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Why would Abhronila, setting up a server in Ichapur, care about the difference between .bash_profile and .bashrc?"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-sm",children:[e.jsx("p",{className:"text-amber-700 dark:text-amber-400 font-semibold mb-2",children:"Observe carefully..."}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"What happens when Debangshu creates a script that runs from cron? Which startup files get read?"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-sm",children:[e.jsx("p",{className:"text-amber-700 dark:text-amber-400 font-semibold mb-2",children:"Try changing this..."}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Move an alias from .bashrc to .bash_profile. How does it affect your SSH sessions vs local terminal?"})]})]})]})}),e.jsx("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.9s]",children:e.jsx("div",{className:"bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-800 dark:to-gray-800 rounded-2xl shadow-xl p-6 border border-slate-300 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg",children:e.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})})}),e.jsxs("div",{className:"flex-grow",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-100",children:"Teacher's Note"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Sukanta Hui • 27 years experience"})]}),e.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full",children:"sukantahui@codernaccotax.co.in"})]}),e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-600 p-4 rounded-r-lg mb-4",children:e.jsxs("p",{className:"text-blue-800 dark:text-blue-300",children:[e.jsx("strong",{children:"Remember:"}),' The golden rule for Bash startup files is "Environment variables in login shells, everything else in .bashrc." Think of .bash_profile as your login suit and .bashrc as your daily casual wear. Your login suit sets up your formal environment, while casual wear has your handy tools and shortcuts.']})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-200 mb-2",children:"Classroom Tip"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Have students create a simple test in each file to see when they load:",e.jsx("code",{className:"block text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded mt-2",children:'echo "Loading .bashrc"'})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-200 mb-2",children:"Professional Insight"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"In production, use .profile for system-wide env vars and keep user-specific aliases in .bashrc. This ensures consistency across different shell types and user sessions."})]})]})]})]})})})]}),e.jsx("style",{jsx:!0,children:`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @media (prefers-reduced-motion: reduce) {
                    .animate-\\[fadeInUp_0\\.8s_ease-out\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.1s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.2s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.3s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.4s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.5s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.6s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.7s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.8s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.9s\\] {
                        animation: none;
                        opacity: 1;
                        transform: none;
                    }
                }
            `})]});export{c as default};
