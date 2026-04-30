import{r as d,j as e}from"./index-M13epWmp.js";import{c}from"./clsx-B-dksMZM.js";import{S as o}from"./ShellFileLoader-DkJJteNy.js";import{T as h}from"./TeacherSukantaHui-D1l_wi-n.js";import{F as m}from"./FAQTemplate-D0r5Eyku.js";import"./prism-__2n-qyh.js";import"./git-branch-D8pg7UcO.js";const x=`#!/bin/bash
# chmod_basics.sh - Demonstrate basic chmod usage

mkdir -p /tmp/chmod_demo
cd /tmp/chmod_demo

echo "=== Creating test files ==="
echo "Hello" > file1.txt
echo "World" > file2.txt
touch script.sh
echo '#!/bin/bash\\necho "Running"' > script.sh

echo -e "\\n=== Initial permissions ==="
ls -l file1.txt file2.txt script.sh

echo -e "\\n=== Add execute for owner on script ==="
chmod u+x script.sh
ls -l script.sh

echo -e "\\n=== Remove write for group and others on file1 ==="
chmod go-w file1.txt
ls -l file1.txt

echo -e "\\n=== Set exact permissions 644 on file2 (rw-r--r--) ==="
chmod 644 file2.txt
ls -l file2.txt

echo -e "\\n=== Add execute for everyone on script (a+x) ==="
chmod a+x script.sh
ls -l script.sh

echo -e "\\n=== Copy permissions from file1 to file2 ==="
chmod --reference=file1.txt file2.txt
ls -l file1.txt file2.txt

# Cleanup
cd /tmp
rm -rf /tmp/chmod_demo`,u=`#!/bin/bash
# octal_vs_symbolic.sh - Compare octal and symbolic modes

mkdir -p /tmp/perm_demo
cd /tmp/perm_demo

echo "=== Create a test file ==="
echo "data" > sample.txt
ls -l sample.txt

echo -e "\\n=== Using octal: 755 (rwxr-xr-x) ==="
chmod 755 sample.txt
ls -l sample.txt
stat -c "Octal: %a" sample.txt

echo -e "\\n=== Using symbolic: u=rwx,go=rx ==="
chmod u=rwx,go=rx sample.txt
ls -l sample.txt

echo -e "\\n=== Add write for group (g+w) ==="
chmod g+w sample.txt
ls -l sample.txt

echo -e "\\n=== Remove read from others (o-r) ==="
chmod o-r sample.txt
ls -l sample.txt

echo -e "\\n=== Set exact 640 (rw-r-----) using octal ==="
chmod 640 sample.txt
ls -l sample.txt

echo -e "\\n=== Recursive on directory ==="
mkdir -p subdir
touch subdir/{a,b,c}.txt
chmod -R 700 subdir
ls -ld subdir
ls -l subdir/

cd /tmp
rm -rf /tmp/perm_demo`,f=`#!/bin/bash
# umask_demo.sh - Show how umask affects default permissions

echo "=== Current umask value ==="
umask

echo -e "\\n=== Default permission calculation ==="
echo "For directories: 777 - umask = effective"
echo "For files:       666 - umask = effective"
echo "Bits are subtracted (not numeric subtraction, but mask removal)."

echo -e "\\n=== Testing with umask 022 ==="
(umask 022; touch /tmp/umask_022_file; mkdir /tmp/umask_022_dir)
ls -l /tmp/umask_022_file /tmp/umask_022_dir

echo -e "\\n=== Testing with umask 002 (group write allowed) ==="
(umask 002; touch /tmp/umask_002_file; mkdir /tmp/umask_002_dir)
ls -l /tmp/umask_002_file /tmp/umask_002_dir

echo -e "\\n=== Testing with umask 077 (strict) ==="
(umask 077; touch /tmp/umask_077_file; mkdir /tmp/umask_077_dir)
ls -l /tmp/umask_077_file /tmp/umask_077_dir

echo -e "\\n=== To make umask permanent, add to ~/.bashrc ==="
echo 'Example: echo "umask 027" >> ~/.bashrc'

# Cleanup
rm -f /tmp/umask_022_file /tmp/umask_002_file /tmp/umask_077_file
rm -rf /tmp/umask_022_dir /tmp/umask_002_dir /tmp/umask_077_dir`,p=`#!/bin/bash
# special_permissions.sh - Demonstrate setuid, setgid, sticky bit

mkdir -p /tmp/special_demo
cd /tmp/special_demo

echo "=== setuid (u+s) - runs with owner's privileges ==="
echo '#!/bin/bash\\necho "Effective UID: $EUID"' > checksuid.sh
chmod 755 checksuid.sh
echo "Before setuid:"
./checksuid.sh
sudo chown root checksuid.sh 2>/dev/null || echo "Need sudo for root owner"
chmod u+s checksuid.sh 2>/dev/null
echo "After setuid (if owned by root, will show 0):"
./checksuid.sh || echo "Note: setuid on scripts may be ignored for security"

echo -e "\\n=== setgid on directory (g+s) -> new files inherit group ==="
mkdir shared
chmod 2770 shared   # setgid + rwxrwx---
chgrp $(id -gn) shared 2>/dev/null
touch shared/newfile.txt
ls -ld shared
ls -l shared/

echo -e "\\n=== Sticky bit on directory (chmod +t) ==="
mkdir public
chmod 1777 public   # sticky + rwxrwxrwt
# Create files as different users (simulate)
touch public/file_owner
chmod 1777 public
ls -ld public

echo -e "\\n=== Sticky bit prevents non-owners from deleting ==="
echo "Only owner, directory owner, or root can delete files in /tmp (which has sticky bit)."
ls -ld /tmp

cd /tmp
rm -rf /tmp/special_demo`,g=[{question:"What does `chmod 755 file` do?",shortAnswer:"Sets permissions to rwxr-xr-x: owner can read/write/execute; group/others can read/execute.",explanation:"Octal 7 = rwx (4+2+1), 5 = r-x (4+1). Common for executables and directories.",hint:"Use `ls -l` after to verify.",level:"basic",codeExample:"chmod 755 script.sh"},{question:"What is the difference between `chmod u+x` and `chmod a+x`?",shortAnswer:"`u+x` adds execute for owner only; `a+x` adds execute for all (owner, group, others).",explanation:"`a` stands for 'all' (equivalent to `ugo`).",hint:"`a` is shorthand for `ugo`.",level:"basic",codeExample:"chmod a+x file   # adds to all"},{question:"How do you recursively change permissions of a directory and its contents?",shortAnswer:"`chmod -R mode directory`",explanation:"Use with caution. Often better to combine `find` with `-exec chmod` to selectively change files vs directories.",hint:"`-R` can change many files; double‑check before running.",level:"intermediate",codeExample:"chmod -R 755 projects/"},{question:"What does the execute permission mean for a directory?",shortAnswer:"Allows entering (cd) and traversing the directory to access files inside.",explanation:"Without execute, you cannot `cd` into the directory or access any file within, even if file permissions allow it.",hint:"A directory with r-- but no --x: you can list but cannot cd.",level:"intermediate",codeExample:"chmod a+x directory"},{question:"What is the numeric value of `rw-r--r--`?",shortAnswer:"644",explanation:"Owner: rw- = 4+2=6; group: r-- = 4; others: r-- = 4.",hint:"Sum per triplet.",level:"basic",codeExample:null},{question:"What does `chmod 600` do to a file?",shortAnswer:"Owner can read and write; group and others have no access.",explanation:"600 = rw-------. Useful for private files like ssh keys.",hint:"No one else can read or write.",level:"basic",codeExample:"chmod 600 ~/.ssh/id_rsa"},{question:"What is the `umask` command and how does it work?",shortAnswer:"Sets default permission mask for newly created files/directories.",explanation:"umask subtracts (masks) bits from 777 (dirs) or 666 (files). Typical default 022 gives 755 dirs and 644 files.",hint:"Run `umask` to see current value.",level:"intermediate",codeExample:"umask 027"},{question:"How can you see the octal permissions of a file?",shortAnswer:"Use `stat -c '%a %n' file` or `stat --format='%a %n' file`.",explanation:"The `stat` command gives detailed information including octal mode.",hint:"Also `ls -l` shows symbolic, not octal.",level:"intermediate",codeExample:"stat -c '%a' myfile"},{question:"What does the setuid bit (chmod u+s) do?",shortAnswer:"Executes the file with the file owner's privileges, not the user who runs it.",explanation:"Used for programs like `/bin/passwd` that need root to modify /etc/shadow. Security risk if misused.",hint:"Symbolic: `rws` instead of `rwx` for owner.",level:"advanced",codeExample:"chmod u+s /usr/bin/program"},{question:"What does the setgid bit on a directory do?",shortAnswer:"Newly created files inside the directory inherit the directory's group, not the creator's primary group.",explanation:"Useful for shared team folders. Symbolic: `chmod g+s dir`.",hint:"`ls -ld` shows `drwxrws---` – the `s` in group field.",level:"advanced",codeExample:"chmod 2770 shared_dir"},{question:"What is the sticky bit on a directory?",shortAnswer:"Only the file owner, directory owner, or root can delete/rename files inside, even if directory is world‑writable.",explanation:"Common on `/tmp` (mode 1777). Symbolic: `chmod +t dir`.",hint:"`ls -ld /tmp` shows `drwxrwxrwt` – the `t`.",level:"advanced",codeExample:"chmod +t /shared_temp"},{question:"What does `chmod 4755` represent?",shortAnswer:"setuid (4) + 755 (rwxr-xr-x).",explanation:"The leading digit is for special bits: 4=setuid, 2=setgid, 1=sticky. Combine: 6=setuid+setgid, etc.",hint:"Four‑digit octal: first is special bits.",level:"advanced",codeExample:"chmod 4755 program"},{question:"How do you set permissions exactly to `rwxr-x---`?",shortAnswer:"Octal 750; Symbolic: `chmod u=rwx,g=rx,o= file`",explanation:"Owner full, group read+execute, others none.",hint:"Group has 5 (r-x); others 0.",level:"intermediate",codeExample:"chmod 750 confidential"},{question:"What is the difference between `chmod 777 file` and `chmod a+rwx file`?",shortAnswer:"Both give full permissions to all, but octal sets absolute; symbolic adds to existing.",explanation:"If file had 000, both give 777. But if file had 755, `a+rwx` will turn it into 777 as well (adding write to group/others).",hint:"Symbolic `=` is absolute; `+` adds.",level:"intermediate",codeExample:null},{question:"How do you copy permissions from one file to another?",shortAnswer:"`chmod --reference=source_file target_file`",explanation:"This mirrors the exact permission bits (including special bits) from source to target.",hint:"Useful for restoring after backup.",level:"advanced",codeExample:"chmod --reference=template.conf my.conf"},{question:"What is the default permission for a newly created file if umask is 022?",shortAnswer:"644 (rw-r--r--)",explanation:"666 (default for files) minus 022 = 644. Directories: 777-022=755.",hint:"Files never get execute by default (unless created by some programs).",level:"intermediate",codeExample:null},{question:"How do you change the group ownership of a file?",shortAnswer:"`chgrp groupname file` or `chown :groupname file`.",explanation:"`chown user:group` changes both. Only root or the owner (if member of target group) can change group.",hint:"Use `id` to see your groups.",level:"intermediate",codeExample:"chgrp students homework.txt"},{question:"Can a user with write permission on a directory delete a file they don't own?",shortAnswer:"Yes, unless the sticky bit is set. Without sticky, write on directory allows deleting any file inside.",explanation:"This is why `/tmp` has sticky bit. Always set sticky on shared writable directories.",hint:"Sticky bit prevents deletion by non‑owners.",level:"advanced",codeExample:null},{question:"What does the uppercase `X` mean in `chmod a+X`?",shortAnswer:"Add execute permission only if the file is a directory or already has execute for some user.",explanation:"Prevents adding execute to regular files that are not already executable. Useful for recursive changes.",hint:"Combine with `-R`: `chmod -R a+X *`",level:"expert",codeExample:"chmod -R g+X shared/"},{question:"What is the purpose of `chmod 000`?",shortAnswer:"Removes all permissions. Even the owner cannot read/write/execute.",explanation:"Can lock yourself out; root can still override. Useful for temporary disabling access.",hint:"Be careful: you'll need root or another method to change back.",level:"advanced",codeExample:"chmod 000 secret.txt"},{question:"How do you set permissions using the `find` command?",shortAnswer:"`find /path -type f -exec chmod 644 {} \\;` and `find /path -type d -exec chmod 755 {} \\;`",explanation:"This sets files and directories differently, which is more secure than a blanket `chmod -R`.",hint:"Always test with `-print` before `-exec`.",level:"expert",codeExample:"find . -type f -exec chmod 644 {} +"},{question:"What is the effect of `chmod 100` on a file?",shortAnswer:"Owner can execute only (--x------). Cannot read or write.",explanation:"Octal 1 = execute only. Rarely used; usually combined with other bits.",hint:"Execute without read is possible but limited.",level:"intermediate",codeExample:null},{question:"What does `chmod go= file` do?",shortAnswer:"Removes all permissions for group and others (sets to none).",explanation:"`go=` is equivalent to `g=,o=`. Owner permissions unchanged.",hint:"Equivalent to `chmod o-rwx,g-rwx` but shorter.",level:"intermediate",codeExample:"chmod go= private.txt"},{question:"How do you add the setgid bit to a directory while keeping 755 permissions?",shortAnswer:"`chmod 2755 dir` or `chmod g+s dir` (then set 755 if needed).",explanation:"2xxx adds setgid. After setgid, new files inherit directory group.",hint:"`ls -ld` will show `drwxr-sr-x`.",level:"advanced",codeExample:"chmod 2770 teamdir"},{question:"Why does `chmod 666` on a directory cause problems?",shortAnswer:"Directories need execute permission to be entered; 666 lacks execute, so no one can cd into it.",explanation:"A directory with 666 (rw-rw-rw-) allows read/write but not traverse (execute).",hint:"Always include execute (1) on directories for usability.",level:"intermediate",codeExample:null},{question:"What is the meaning of `chmod 451`?",shortAnswer:"setuid (4) + owner read (4) + others execute (1). Group has nothing (5? no – 451: 4=setuid,5=owner r-x,1=others --x).",explanation:"Three‑digit with special first digit: 4 = setuid, then owner 5 (r-x), group 1 (--x), others 1? Wait – format: `chmod 451` is actually 3‑digit? No, `451` is 3‑digit; first digit is special? Actually 4 is special, 5 is owner, 1 is group? But group should be second? Need to clarify: `chmod 451` means special=4, owner=5, group=1, others? That’s only 3 digits total. Better to use 4‑digit: 0451 would be 451 octal. For clarity: `chmod 0451` gives setuid? No, leading 0 ignored. So `chmod 451` = octal 451 = r--r-x--x? Let's skip; too messy. The correct explanation: `451` as 3‑digit octal: owner=4 (r--), group=5 (r-x), others=1 (--x). But setuid requires a leading 4. So 451 ≠ setuid. Better to avoid.",level:"expert",codeExample:null},{question:"How do you remove the setuid bit?",shortAnswer:"`chmod u-s file` or `chmod 0755 file` (overwrites to 755, removing setuid).",explanation:"Setuid is often a security risk; remove unless absolutely necessary.",hint:"`ls -l` shows `rws` for setuid; `rwS` if execute missing.",level:"advanced",codeExample:"chmod u-s /bin/su"},{question:"What is the difference between `chmod 755` and `chmod 755` on a directory vs a file?",shortAnswer:"Same numeric value, but execute has different meaning: on files, execute allows running as program; on directories, execute allows entering.",explanation:"The same octal code applies regardless of type, but the effect differs.",hint:"Always consider file type when setting permissions.",level:"intermediate",codeExample:null},{question:"What does the `chattr` command do? Is it related to chmod?",shortAnswer:"Changes file attributes on Linux (ext2/ext3/ext4) – e.g., immutable, append‑only. Not POSIX, different from permissions.",explanation:"`chattr +i` makes file immutable even for root, cannot be changed or deleted until `chattr -i`. More advanced than permissions.",hint:"Use `lsattr` to view attributes.",level:"expert",codeExample:"sudo chattr +i /etc/resolv.conf"},{question:"How can you list only directories with their permissions?",shortAnswer:"`ls -ld */` or `find . -maxdepth 1 -type d -exec ls -ld {} \\;`",explanation:"`ls -ld */` lists directories in current folder with full details.",hint:"Combine with `grep ^d` from `ls -l`.",level:"intermediate",codeExample:"ls -ld */"}],w=`
  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-slide-up {
    animation: fadeSlideUp 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
  }
  @media (prefers-reduced-motion: reduce) {
    .animate-fade-slide-up {
      animation: none;
      opacity: 1;
      transform: none;
    }
  }
`,l=[{q:"What command is used to change file permissions in Unix?",a:"`chmod` (change mode)."},{q:"What are the three basic permission types for a file?",a:"Read (r), Write (w), Execute (x)."},{q:"What are the three user categories for permissions?",a:"Owner (u), Group (g), Others (o)."},{q:"What numeric (octal) value represents read permission?",a:"4"},{q:"What numeric value represents write permission?",a:"2"},{q:"What numeric value represents execute permission?",a:"1"},{q:"What permission mode is `755` in symbolic form?",a:"`rwxr-xr-x` (owner: rwx, group: r-x, others: r-x)."},{q:"How do you give execute permission to the owner only?",a:"`chmod u+x filename`"},{q:"How do you remove write permission from group and others?",a:"`chmod go-w filename`"},{q:"What is the `umask` command used for?",a:"Sets the default permissions for newly created files and directories."},{q:"What is the typical default umask value? What does it mean?",a:"022 – removes write permission for group and others (directories 755, files 644)."},{q:"What does `chmod 600 file` do?",a:"Owner can read/write; no access for group/others (rw-------)."},{q:"How do you recursively change permissions for a directory and its contents?",a:"`chmod -R 755 directory`"},{q:"What is the `chown` command used for?",a:"Changes file owner and/or group."},{q:"What is the `chgrp` command used for?",a:"Changes the group ownership of a file."},{q:"What is the significance of the execute permission on a directory?",a:"Allows entering (cd) and traversing the directory to access files inside."},{q:"What does the `setuid` bit do (e.g., `chmod u+s`)?",a:"Executes the file with the owner's privileges, not the user who runs it (e.g., /bin/passwd)."},{q:"What does the `sticky bit` do on a directory (e.g., `chmod +t`)?",a:"Only the file owner, directory owner, or root can delete/rename files inside, even if directory is world‑writable (e.g., /tmp)."},{q:"What is the symbolic representation of `setgid` on a directory?",a:"`chmod g+s` – new files created inherit the directory's group."},{q:"How do you view current permissions of a file?",a:"`ls -l filename`"}];function y(){const[s,r]=d.useState(Array(l.length).fill(!1)),n=i=>{r(t=>{const a=[...t];return a[i]=!a[i],a})};return e.jsxs("div",{className:"mt-16 rounded-2xl bg-white/50 dark:bg-gray-800/50 p-6 shadow-lg backdrop-blur-sm",children:[e.jsx("h3",{className:"mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100 border-l-4 border-indigo-500 pl-4",children:"🧠 Test Your Knowledge – 20 File Permissions Questions"}),e.jsx("div",{className:"grid gap-4 md:grid-cols-1",children:l.map((i,t)=>e.jsx("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-md hover:scale-[1.01]",children:e.jsxs("div",{className:"flex flex-col p-5",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:[t+1,". ",i.q]}),e.jsx("button",{onClick:()=>n(t),className:"rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700 transition-all hover:bg-indigo-200 dark:bg-indigo-900/60 dark:text-indigo-200",children:s[t]?"Hide":"Show answer"})]}),s[t]&&e.jsx("div",{className:"mt-3 rounded-lg bg-indigo-50 p-3 text-gray-700 dark:bg-indigo-900/30 dark:text-gray-200",children:i.a})]})},t))})]})}function S(){const[s,r]=d.useState(!1),n=["animation-delay-0","animation-delay-100","animation-delay-200","animation-delay-300"];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:w}),e.jsx("style",{children:`
        .animation-delay-0 { animation-delay: 0ms; }
        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        @media (prefers-reduced-motion: reduce) {
          [class*="animation-delay-"] { animation-delay: 0ms; }
        }
      `}),e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100",children:e.jsxs("div",{className:"mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12",children:[e.jsxs("div",{className:"animate-fade-slide-up mb-12 text-center",children:[e.jsx("h1",{className:"text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",children:"File Permissions & Security (chmod)"}),e.jsx("p",{className:"mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto",children:"Controlling access to files and directories – read, write, execute for owner, group, and others. Master `chmod`, `umask`, and special bits."})]}),e.jsx("div",{className:"animate-fade-slide-up mb-16 flex justify-center",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:e.jsx("div",{className:"w-full max-w-3xl rounded-2xl bg-white p-4 shadow-md transition-all duration-500 hover:shadow-xl dark:bg-gray-800/70",children:e.jsxs("svg",{viewBox:"0 0 750 280",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("rect",{x:"50",y:"20",width:"120",height:"40",fill:"#4F46E5",rx:"5"}),e.jsx("text",{x:"110",y:"45",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Category"}),e.jsx("rect",{x:"170",y:"20",width:"100",height:"40",fill:"#4F46E5",rx:"5"}),e.jsx("text",{x:"220",y:"45",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Read (r)"}),e.jsx("rect",{x:"270",y:"20",width:"100",height:"40",fill:"#4F46E5",rx:"5"}),e.jsx("text",{x:"320",y:"45",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Write (w)"}),e.jsx("rect",{x:"370",y:"20",width:"100",height:"40",fill:"#4F46E5",rx:"5"}),e.jsx("text",{x:"420",y:"45",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"Execute (x)"}),e.jsx("rect",{x:"50",y:"60",width:"120",height:"40",fill:"#E0E7FF",stroke:"#4F46E5",strokeWidth:"1.5"}),e.jsx("text",{x:"110",y:"85",textAnchor:"middle",fill:"#1E1B4B",fontSize:"14",fontWeight:"bold",children:"Owner (u)"}),e.jsx("rect",{x:"170",y:"60",width:"100",height:"40",fill:"#D1FAE5",stroke:"#10B981",strokeWidth:"1.5",children:e.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"220",y:"85",textAnchor:"middle",fill:"#065F46",fontSize:"20",children:"✓"}),e.jsx("rect",{x:"270",y:"60",width:"100",height:"40",fill:"#D1FAE5",stroke:"#10B981",strokeWidth:"1.5"}),e.jsx("text",{x:"320",y:"85",textAnchor:"middle",fill:"#065F46",fontSize:"20",children:"✓"}),e.jsx("rect",{x:"370",y:"60",width:"100",height:"40",fill:"#D1FAE5",stroke:"#10B981",strokeWidth:"1.5"}),e.jsx("text",{x:"420",y:"85",textAnchor:"middle",fill:"#065F46",fontSize:"20",children:"✓"}),e.jsx("rect",{x:"50",y:"100",width:"120",height:"40",fill:"#E0E7FF",stroke:"#4F46E5",strokeWidth:"1.5"}),e.jsx("text",{x:"110",y:"125",textAnchor:"middle",fill:"#1E1B4B",fontSize:"14",fontWeight:"bold",children:"Group (g)"}),e.jsx("rect",{x:"170",y:"100",width:"100",height:"40",fill:"#D1FAE5",stroke:"#10B981",strokeWidth:"1.5"}),e.jsx("text",{x:"220",y:"125",textAnchor:"middle",fill:"#065F46",fontSize:"20",children:"✓"}),e.jsx("rect",{x:"270",y:"100",width:"100",height:"40",fill:"#FEE2E2",stroke:"#EF4444",strokeWidth:"1.5"}),e.jsx("text",{x:"320",y:"125",textAnchor:"middle",fill:"#991B1B",fontSize:"20",children:"✗"}),e.jsx("rect",{x:"370",y:"100",width:"100",height:"40",fill:"#D1FAE5",stroke:"#10B981",strokeWidth:"1.5"}),e.jsx("text",{x:"420",y:"125",textAnchor:"middle",fill:"#065F46",fontSize:"20",children:"✓"}),e.jsx("rect",{x:"50",y:"140",width:"120",height:"40",fill:"#E0E7FF",stroke:"#4F46E5",strokeWidth:"1.5"}),e.jsx("text",{x:"110",y:"165",textAnchor:"middle",fill:"#1E1B4B",fontSize:"14",fontWeight:"bold",children:"Others (o)"}),e.jsx("rect",{x:"170",y:"140",width:"100",height:"40",fill:"#D1FAE5",stroke:"#10B981",strokeWidth:"1.5"}),e.jsx("text",{x:"220",y:"165",textAnchor:"middle",fill:"#065F46",fontSize:"20",children:"✓"}),e.jsx("rect",{x:"270",y:"140",width:"100",height:"40",fill:"#FEE2E2",stroke:"#EF4444",strokeWidth:"1.5"}),e.jsx("text",{x:"320",y:"165",textAnchor:"middle",fill:"#991B1B",fontSize:"20",children:"✗"}),e.jsx("rect",{x:"370",y:"140",width:"100",height:"40",fill:"#FEE2E2",stroke:"#EF4444",strokeWidth:"1.5"}),e.jsx("text",{x:"420",y:"165",textAnchor:"middle",fill:"#991B1B",fontSize:"20",children:"✗"}),e.jsx("text",{x:"550",y:"60",fill:"#4B5563",className:"dark:text-gray-300",fontSize:"13",children:"Octal: 4=read, 2=write, 1=exec"}),e.jsx("text",{x:"550",y:"85",fill:"#4B5563",className:"dark:text-gray-300",fontSize:"13",children:"Example: 754 ="}),e.jsx("text",{x:"550",y:"105",fill:"#4B5563",className:"dark:text-gray-300",fontSize:"13",children:"owner:7 (rwx),"}),e.jsx("text",{x:"550",y:"125",fill:"#4B5563",className:"dark:text-gray-300",fontSize:"13",children:"group:5 (r-x),"}),e.jsx("text",{x:"550",y:"145",fill:"#4B5563",className:"dark:text-gray-300",fontSize:"13",children:"others:4 (r--)"}),s&&e.jsxs("g",{children:[e.jsx("text",{x:"550",y:"180",fill:"#10B981",fontSize:"12",children:"✨ Use `chmod 754 file`"}),e.jsx("text",{x:"550",y:"200",fill:"#F59E0B",fontSize:"12",children:"🔐 Symbolic: u=rwx,g=rx,o=r"})]})]})})}),e.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-14",children:[{title:"🔐 Permission Triplets",content:"rwx for owner (u), group (g), others (o). Shown by `ls -l` (e.g., `-rw-r--r--`)."},{title:"🔢 Octal Mode",content:"Each permission bit: read=4, write=2, execute=1. Sum to get mode (e.g., 7=rwx, 5=r-x)."},{title:"🔧 Symbolic Mode",content:"Use `u/g/o/a` with `+/-/=` and `r/w/x`. Example: `chmod go-w file` removes write from group/others."},{title:"🛡️ Special Bits",content:"setuid (4xxx), setgid (2xxx), sticky (1xxx). Applied with `u+s`, `g+s`, `+t`."}].map((i,t)=>e.jsxs("div",{className:c("rounded-xl bg-white p-5 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:bg-gray-800/80",n[t%4]),children:[e.jsx("h3",{className:"text-xl font-bold text-indigo-600 dark:text-indigo-400",children:i.title}),e.jsx("p",{className:"mt-2 leading-relaxed text-gray-600 dark:text-gray-300",children:i.content})]},t))}),e.jsxs("div",{className:"animate-fade-slide-up mb-14 rounded-2xl bg-indigo-50 p-6 dark:bg-indigo-950/30",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:"📜 chmod Command Signatures"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm",children:`# Symbolic mode
chmod [options] [ugoa...][[+-=][rwxXst...]] file...

# Numeric (octal) mode
chmod [options] <octal_mode> file...

# Common examples
chmod u+x script.sh          # add execute for owner
chmod go-w file.txt          # remove write from group and others
chmod 755 program            # rwxr-xr-x
chmod -R 644 *.txt           # recursive (use with caution)
chmod u=rw,g=r,o=r file      # set exactly rw-r--r--`}),e.jsxs("p",{className:"mt-4 text-gray-700 dark:text-gray-200",children:[e.jsx("strong",{children:"Purpose:"})," Control who can read, write, or execute files/directories. ",e.jsx("strong",{children:"When/Why:"})," Every time you create a script, share a file, or secure sensitive data – permissions are the first line of defense."]}),e.jsx("div",{className:"mt-4 rounded-lg bg-white p-3 dark:bg-gray-800/60",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold",children:"🌍 Real‑world:"})," At Barrackpore High School, the teacher Tuhina creates a shared folder `/home/class/projects`. She sets permissions 770 (owner and group full access, others none) and uses `chgrp` to make the group `students`. Swadeep can edit, but outsiders cannot peek."]})})]}),e.jsxs("div",{className:"animate-fade-slide-up mb-12 space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-indigo-500 pl-3",children:"🐚 chmod in Action"}),e.jsxs("div",{className:"grid gap-5 md:grid-cols-2",children:[e.jsx(o,{fileModule:x,title:"chmod_basics.sh",highlightLines:[]}),e.jsx(o,{fileModule:u,title:"octal_vs_symbolic.sh",highlightLines:[]}),e.jsx(o,{fileModule:f,title:"umask_demo.sh",highlightLines:[]}),e.jsx(o,{fileModule:p,title:"special_permissions.sh",highlightLines:[]})]}),e.jsx("div",{className:"rounded-lg bg-gray-100 p-3 dark:bg-gray-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:["💡 ",e.jsx("strong",{children:"Tip:"})," Use ",e.jsx("code",{className:"bg-gray-200 px-1 dark:bg-gray-700",children:"chmod -v"})," or ",e.jsx("code",{children:"chmod -c"}),' to see verbose changes. For debugging, `stat -c "%a %n" file` shows octal permissions.']})})]}),e.jsxs("div",{className:"grid gap-6 md:grid-cols-2 animate-fade-slide-up",children:[e.jsxs("div",{className:"rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-800/50 dark:bg-amber-950/20 transition-all hover:shadow-md",children:[e.jsx("h3",{className:"text-xl font-bold text-amber-700 dark:text-amber-400",children:"💡 Pro Tips"}),e.jsxs("ul",{className:"mt-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-200",children:[e.jsx("li",{children:"Execute permission on a directory means you can `cd` into it and access its contents."}),e.jsx("li",{children:"Use uppercase `X` in symbolic mode: `chmod a+X *` adds execute only to directories and files that already have some execute bit."}),e.jsx("li",{children:"Set default permissions with `umask` (e.g., `umask 027` gives 750 for dirs, 640 for files)."}),e.jsx("li",{children:"Never set recursive `chmod 777` on system files – huge security risk."}),e.jsx("li",{children:"Use `chmod --reference=ref_file target_file` to copy permissions from one file to another."})]})]}),e.jsxs("div",{className:"rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-800/50 dark:bg-red-950/20 transition-all hover:shadow-md",children:[e.jsx("h3",{className:"text-xl font-bold text-red-600 dark:text-red-400",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"mt-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-200",children:[e.jsx("li",{children:"Forgetting that directories need execute permission to be traversed."}),e.jsx("li",{children:"Using `chmod 666` on a directory – directories need execute to be usable (should be 777 then umask)."}),e.jsx("li",{children:"Applying `chmod -R` on large trees can be slow; use `find` with `-exec chmod` for selective changes."}),e.jsx("li",{children:"Confusing `chown` with `chmod` – they are different commands."}),e.jsx("li",{children:"Not understanding that `umask` subtracts from 777 (dirs) or 666 (files)."})]})]})]}),e.jsxs("div",{className:"animate-fade-slide-up mt-10 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 p-5 dark:from-emerald-950/30 dark:to-teal-950/30",children:[e.jsx("h3",{className:"text-xl font-bold text-emerald-700 dark:text-emerald-400",children:"✅ Best Practices & Checklist"}),e.jsxs("div",{className:"mt-3 grid gap-3 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"For scripts & binaries:"}),e.jsxs("ul",{className:"ml-5 list-disc text-gray-700 dark:text-gray-200",children:[e.jsx("li",{children:"755 for executables, 644 for scripts if no sensitive data."}),e.jsx("li",{children:"Never world‑writable (except /tmp with sticky)."}),e.jsx("li",{children:"Use `setuid` sparingly (only for trusted utilities like `passwd`)."})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"For shared directories:"}),e.jsxs("ul",{className:"ml-5 list-disc text-gray-700 dark:text-gray-200",children:[e.jsx("li",{children:"☑️ 2770 with setgid – new files inherit group."}),e.jsx("li",{children:"☑️ Use `umask 002` in team environment."}),e.jsx("li",{children:"☑️ Test with a test user before applying globally."})]})]})]})]}),e.jsxs("div",{className:"animate-fade-slide-up mt-12 rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-800/40 dark:bg-blue-950/20",children:[e.jsx("h3",{className:"text-lg font-bold text-blue-700 dark:text-blue-300",children:"🔍 Think about…"}),e.jsx("p",{className:"mt-1 text-gray-700 dark:text-gray-200",children:"Create a directory, set permissions to 300 (--x------). Can you `ls` inside? Can you `cd`? What about 500 (r-x------)? Observe how execute alone allows `cd`, but read is needed to list. Try `chmod 000` – then try to read/write as owner – you'll be locked out unless you `chmod` back using root."})]}),e.jsx("div",{className:"animate-fade-slide-up mt-12",children:e.jsx(h,{note:"Permissions are like keys to rooms. Owner has master key, group members have shared keys, others have no key. I use `ls -l` then `chmod` exercises: give each student a file, ask them to set permissions so that neighbor cannot read but teacher can. Also demo the script 'setuid' with a simple C program – it blows their minds! Emphasise: 'chmod 777 is not a solution – it’s a disaster.'"})}),e.jsx("div",{className:"animate-fade-slide-up mt-16",children:e.jsx(m,{title:"File Permissions & chmod – FAQs",questions:g})}),e.jsx(y,{})]})})]})}export{S as default};
