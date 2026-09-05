import{b as c,j as r}from"./vendor-react-core-Doz9nIC6.js";import{C as u}from"./CProjectAnswerTemplateEnhanced-Wqumu2-a.js";import"./CodeBlock-BGRh7DVf.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const g=`#include <stdio.h>\r
#include <string.h>\r
#include <ctype.h>\r
\r
/**\r
 * Project 1: Text Anagram & Palindrome Verifier\r
 * Verifies whether two sentences are anagrams (ignoring spaces and case),\r
 * and checks if a sentence is a palindrome.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
int isAnagram(const char *s1, const char *s2) {\r
    int freq[26] = {0};\r
\r
    for (int i = 0; s1[i] != '\\0'; i++) {\r
        if (isalpha((unsigned char)s1[i])) {\r
            freq[tolower((unsigned char)s1[i]) - 'a']++;\r
        }\r
    }\r
\r
    for (int i = 0; s2[i] != '\\0'; i++) {\r
        if (isalpha((unsigned char)s2[i])) {\r
            freq[tolower((unsigned char)s2[i]) - 'a']--;\r
        }\r
    }\r
\r
    for (int i = 0; i < 26; i++) {\r
        if (freq[i] != 0) return 0;\r
    }\r
    return 1;\r
}\r
\r
int isPalindrome(const char *s) {\r
    int i = 0, j = strlen(s) - 1;\r
    while (i < j) {\r
        while (i < j && !isalnum((unsigned char)s[i])) i++;\r
        while (i < j && !isalnum((unsigned char)s[j])) j--;\r
        if (tolower((unsigned char)s[i]) != tolower((unsigned char)s[j])) {\r
            return 0;\r
        }\r
        i++;\r
        j--;\r
    }\r
    return 1;\r
}\r
\r
int main(void) {\r
    char str1[] = "Listen";\r
    char str2[] = "Silent";\r
    char phrase[] = "A man, a plan, a canal: Panama";\r
\r
    printf("Anagram Check: \\"%s\\" vs \\"%s\\" → %s\\n",\r
           str1, str2, isAnagram(str1, str2) ? "YES (Anagrams)" : "NO");\r
\r
    printf("Palindrome Check: \\"%s\\" → %s\\n",\r
           phrase, isPalindrome(phrase) ? "YES (Palindrome)" : "NO");\r
\r
    return 0;\r
}\r
`,m=`#include <stdio.h>\r
#include <string.h>\r
\r
/**\r
 * Project 10: Roman Numerals to Decimal Integer Converter\r
 * Converts a Roman numeral string (e.g. "MCMXCIV") to its decimal integer (1994).\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
int romanValue(char c) {\r
    switch (c) {\r
        case 'I': return 1;\r
        case 'V': return 5;\r
        case 'X': return 10;\r
        case 'L': return 50;\r
        case 'C': return 100;\r
        case 'D': return 500;\r
        case 'M': return 1000;\r
        default:  return 0;\r
    }\r
}\r
\r
int romanToInt(const char *s) {\r
    int total = 0;\r
    int len = strlen(s);\r
\r
    for (int i = 0; i < len; i++) {\r
        int v1 = romanValue(s[i]);\r
        if (i + 1 < len) {\r
            int v2 = romanValue(s[i + 1]);\r
            if (v1 >= v2) {\r
                total += v1;\r
            } else {\r
                total += (v2 - v1);\r
                i++; // Skip next character\r
            }\r
        } else {\r
            total += v1;\r
        }\r
    }\r
    return total;\r
}\r
\r
int main(void) {\r
    const char *r1 = "XIV";\r
    const char *r2 = "MCMXCIV";\r
    const char *r3 = "MMXXVI";\r
\r
    printf("Roman %-10s = %d\\n", r1, romanToInt(r1));\r
    printf("Roman %-10s = %d\\n", r2, romanToInt(r2));\r
    printf("Roman %-10s = %d (Year 2026)\\n", r3, romanToInt(r3));\r
\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
\r
/**\r
 * Project 2: Custom String Library Suite\r
 * Re-implements custom_strlen, custom_strcpy, custom_strcat, and custom_strcmp.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
size_t custom_strlen(const char *s) {\r
    size_t len = 0;\r
    while (*s++) len++;\r
    return len;\r
}\r
\r
char *custom_strcpy(char *dest, const char *src) {\r
    char *orig = dest;\r
    while ((*dest++ = *src++));\r
    return orig;\r
}\r
\r
char *custom_strcat(char *dest, const char *src) {\r
    char *orig = dest;\r
    while (*dest) dest++;\r
    while ((*dest++ = *src++));\r
    return orig;\r
}\r
\r
int custom_strcmp(const char *s1, const char *s2) {\r
    while (*s1 && (*s1 == *s2)) {\r
        s1++;\r
        s2++;\r
    }\r
    return *(unsigned char*)s1 - *(unsigned char*)s2;\r
}\r
\r
int main(void) {\r
    char buffer[100];\r
\r
    custom_strcpy(buffer, "Coder & AccoTax, ");\r
    custom_strcat(buffer, "Barrackpore");\r
\r
    printf("Result Buffer: \\"%s\\"\\n", buffer);\r
    printf("Length       : %zu\\n", custom_strlen(buffer));\r
    printf("Comparison   : %d\\n", custom_strcmp("Barrackpore", "Shyamnagar"));\r
\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
#include <ctype.h>\r
\r
/**\r
 * Project 3: Word Frequency, Vowel, Consonant, Digit & Space Counter\r
 * Analyzes an English text sentence and outputs statistical character counts.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
int main(void) {\r
    char text[] = "Barrackpore Pin Code is 700120! Learning C Language in 2026.";\r
    int vowels = 0, consonants = 0, digits = 0, spaces = 0, special = 0, words = 0;\r
    int inWord = 0;\r
\r
    for (int i = 0; text[i] != '\\0'; i++) {\r
        char ch = text[i];\r
\r
        if (isalpha((unsigned char)ch)) {\r
            char lower = tolower((unsigned char)ch);\r
            if (lower == 'a' || lower == 'e' || lower == 'i' || lower == 'o' || lower == 'u') {\r
                vowels++;\r
            } else {\r
                consonants++;\r
            }\r
            if (!inWord) {\r
                inWord = 1;\r
                words++;\r
            }\r
        } else if (isdigit((unsigned char)ch)) {\r
            digits++;\r
            if (!inWord) {\r
                inWord = 1;\r
                words++;\r
            }\r
        } else if (isspace((unsigned char)ch)) {\r
            spaces++;\r
            inWord = 0;\r
        } else {\r
            special++;\r
            inWord = 0;\r
        }\r
    }\r
\r
    printf("Analysis of: \\"%s\\"\\n\\n", text);\r
    printf("• Total Words      : %d\\n", words);\r
    printf("• Total Vowels     : %d\\n", vowels);\r
    printf("• Total Consonants : %d\\n", consonants);\r
    printf("• Total Digits     : %d\\n", digits);\r
    printf("• Total Spaces     : %d\\n", spaces);\r
    printf("• Special Symbols  : %d\\n", special);\r
\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
#include <ctype.h>\r
\r
/**\r
 * Project 4: Caesar Cipher Encryption & Decryption Engine\r
 * Encrypts and decrypts text messages by shifting letters by key K positions.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
void caesarEncrypt(char *str, int shift) {\r
    shift = shift % 26;\r
    for (int i = 0; str[i] != '\\0'; i++) {\r
        if (isupper((unsigned char)str[i])) {\r
            str[i] = (str[i] - 'A' + shift) % 26 + 'A';\r
        } else if (islower((unsigned char)str[i])) {\r
            str[i] = (str[i] - 'a' + shift) % 26 + 'a';\r
        }\r
    }\r
}\r
\r
void caesarDecrypt(char *str, int shift) {\r
    caesarEncrypt(str, 26 - (shift % 26));\r
}\r
\r
int main(void) {\r
    char message[100] = "Attack at Dawn from Barrackpore!";\r
    int key = 3;\r
\r
    printf("Original Message : \\"%s\\"\\n", message);\r
\r
    caesarEncrypt(message, key);\r
    printf("Encrypted Cipher : \\"%s\\"\\n", message);\r
\r
    caesarDecrypt(message, key);\r
    printf("Decrypted Plain  : \\"%s\\"\\n", message);\r
\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
\r
/**\r
 * Project 5: Run-Length String Compression Engine\r
 * Compresses repeating character sequences (e.g. "aaabbbcccaa" -> "a3b3c3a2").\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
void compressString(const char *src, char *dest) {\r
    int i = 0, k = 0;\r
    while (src[i] != '\\0') {\r
        char currentChar = src[i];\r
        int count = 0;\r
\r
        while (src[i] == currentChar) {\r
            count++;\r
            i++;\r
        }\r
\r
        k += sprintf(&dest[k], "%c%d", currentChar, count);\r
    }\r
    dest[k] = '\\0';\r
}\r
\r
int main(void) {\r
    char input[] = "wwwwaaadexxxxxxywww";\r
    char compressed[100];\r
\r
    compressString(input, compressed);\r
\r
    printf("Original Input : \\"%s\\"\\n", input);\r
    printf("RLE Compressed : \\"%s\\"\\n", compressed);\r
\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
#include <string.h>\r
\r
/**\r
 * Project 6: Substring Find and Replace Engine\r
 * Replaces all occurrences of string 'find' with string 'replace' in text.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
void findAndReplace(const char *text, const char *find, const char *replace, char *result) {\r
    int findLen = strlen(find);\r
    int replaceLen = strlen(replace);\r
    const char *p = text;\r
    char *dest = result;\r
\r
    while (*p) {\r
        if (strncmp(p, find, findLen) == 0) {\r
            strcpy(dest, replace);\r
            dest += replaceLen;\r
            p += findLen;\r
        } else {\r
            *dest++ = *p++;\r
        }\r
    }\r
    *dest = '\\0';\r
}\r
\r
int main(void) {\r
    char original[] = "The student lives in Naihati. The student studies at Barrackpore.";\r
    char buffer[256];\r
\r
    findAndReplace(original, "The student", "Swadeep", buffer);\r
\r
    printf("Original Text :\\n  %s\\n\\n", original);\r
    printf("Replaced Text :\\n  %s\\n", buffer);\r
\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
#include <string.h>\r
#include <ctype.h>\r
\r
/**\r
 * Project 7: Longest Word Extractor from Text Paragraph\r
 * Finds and extracts the longest single word in an input text.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
void findLongestWord(const char *text, char *longestWord) {\r
    int maxLen = 0, currentLen = 0;\r
    int maxStart = 0, currentStart = 0;\r
    int i = 0;\r
\r
    while (text[i] != '\\0') {\r
        if (isalnum((unsigned char)text[i])) {\r
            if (currentLen == 0) currentStart = i;\r
            currentLen++;\r
        } else {\r
            if (currentLen > maxLen) {\r
                maxLen = currentLen;\r
                maxStart = currentStart;\r
            }\r
            currentLen = 0;\r
        }\r
        i++;\r
    }\r
    // Check for word at the very end\r
    if (currentLen > maxLen) {\r
        maxLen = currentLen;\r
        maxStart = currentStart;\r
    }\r
\r
    strncpy(longestWord, &text[maxStart], maxLen);\r
    longestWord[maxLen] = '\\0';\r
}\r
\r
int main(void) {\r
    char paragraph[] = "Mastering C systems programming and architectural memory layouts in Barrackpore.";\r
    char longest[50];\r
\r
    findLongestWord(paragraph, longest);\r
\r
    printf("Input Text   : \\"%s\\"\\n", paragraph);\r
    printf("Longest Word : \\"%s\\" (Length: %zu characters)\\n", longest, strlen(longest));\r
\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
#include <string.h>\r
#include <ctype.h>\r
\r
/**\r
 * Project 8: Password Strength & Complexity Evaluator\r
 * Evaluates password strength: length >= 8, uppercase, lowercase, digit, special symbol.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
void evaluatePassword(const char *pwd) {\r
    int len = strlen(pwd);\r
    int hasUpper = 0, hasLower = 0, hasDigit = 0, hasSpecial = 0;\r
\r
    for (int i = 0; i < len; i++) {\r
        if (isupper((unsigned char)pwd[i])) hasUpper = 1;\r
        else if (islower((unsigned char)pwd[i])) hasLower = 1;\r
        else if (isdigit((unsigned char)pwd[i])) hasDigit = 1;\r
        else hasSpecial = 1;\r
    }\r
\r
    int score = (len >= 8) + hasUpper + hasLower + hasDigit + hasSpecial;\r
\r
    printf("Password: \\"%s\\" (Length: %d)\\n", pwd, len);\r
    printf("Score: %d/5 -> ", score);\r
\r
    if (score == 5) printf("🛡️ EXCELLENT (Strong Security)\\n");\r
    else if (score >= 3) printf("⚠️ MODERATE (Add missing char types)\\n");\r
    else printf("❌ WEAK (Insecure)\\n");\r
}\r
\r
int main(void) {\r
    evaluatePassword("Admin123!");\r
    evaluatePassword("pass");\r
    evaluatePassword("SukantaHui@2026");\r
\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
#include <string.h>\r
\r
/**\r
 * Project 9: Lexicographical Dictionary Sorter for Names\r
 * Sorts an array of student names in alphabetical order using strcmp and pointer swaps.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
void sortNames(const char *names[], int count) {\r
    for (int i = 0; i < count - 1; i++) {\r
        for (int j = 0; j < count - 1 - i; j++) {\r
            if (strcmp(names[j], names[j + 1]) > 0) {\r
                const char *temp = names[j];\r
                names[j] = names[j + 1];\r
                names[j + 1] = temp;\r
            }\r
        }\r
    }\r
}\r
\r
int main(void) {\r
    const char *students[] = {\r
        "Tuhina Paul",\r
        "Swadeep Mukherjee",\r
        "Abhronila Das",\r
        "Debangshu Roy",\r
        "Arindam Hui"\r
    };\r
    int count = sizeof(students) / sizeof(students[0]);\r
\r
    printf("Original Student List:\\n");\r
    for (int i = 0; i < count; i++) printf("  • %s\\n", students[i]);\r
\r
    sortNames(students, count);\r
\r
    printf("\\nSorted Alphabetical Directory:\\n");\r
    for (int i = 0; i < count; i++) printf("  %d. %s\\n", i + 1, students[i]);\r
\r
    return 0;\r
}\r
`,E="Module 002_006 · Strings & Text Processing Suite",b="C Programming & Systems Fundamentals",v="WBCHSE / ICSE / CBSE / BCA / B.Tech / Gate",k=["GCC Compiler","VS Code","GDB Debugger"],P={name:"Coder & AccoTax",author:"Sukanta Hui",location:"Barrackpore, West Bengal"},T=[{projectId:"P6.1",title:"Text Anagram & Phrase Palindrome Verifier",difficulty:"Intermediate",description:"Write a C program that checks if two words are anagrams and whether a phrase with spaces and punctuation is a palindrome.",exampleText:"Words: 'Listen' vs 'Silent', Phrase: 'A man, a plan, a canal: Panama'",exampleOutput:`Anagram Check: YES (Anagrams)
Palindrome Check: YES (Palindrome)`,logicExplanation:`1. Maintain 26-element frequency count for anagram checking.
2. Use two-pointer scan skipping non-alphanumeric characters for phrase palindrome verification.`,answerFile:"src/components/study/c-language/topics/002_006_strings-and-string-handling-functions/topic5_files/answers/answer1.c",codeExplanation:"Demonstrates case normalization, character filtering via <ctype.h>, and symmetric two-pointer array scanning."},{projectId:"P6.2",title:"Custom String Library Suite",difficulty:"Intermediate",description:"Re-implement strlen, strcpy, strcat, and strcmp from scratch using pure pointer arithmetic without including <string.h>.",exampleText:"custom_strcpy(buf, 'Coder & AccoTax, '); custom_strcat(buf, 'Barrackpore');",exampleOutput:`Result Buffer: 'Coder & AccoTax, Barrackpore'
Length: 28
Comparison: -1`,logicExplanation:`1. Pointer dereferencing and incrementation until '\\0' byte.
2. Proper return pointer mechanics and null termination.`,answerFile:"src/components/study/c-language/topics/002_006_strings-and-string-handling-functions/topic5_files/answers/answer2.c",codeExplanation:"Implements core systems utilities using idiomatic C pointer syntax."},{projectId:"P6.3",title:"Word Frequency, Vowel, Consonant & Digit Analyzer",difficulty:"Intermediate",description:"Parse a paragraph string and count the number of words, vowels, consonants, digits, whitespace, and special symbols.",exampleText:"Input: 'Barrackpore Pin Code is 700120! Learning C Language in 2026.'",exampleOutput:"Words: 10, Vowels: 17, Consonants: 22, Digits: 10, Spaces: 9, Special: 2",logicExplanation:`1. Character categorization using isalpha, isdigit, isspace.
2. State variable inWord tracking word transition boundaries.`,answerFile:"src/components/study/c-language/topics/002_006_strings-and-string-handling-functions/topic5_files/answers/answer3.c",codeExplanation:"Demonstrates text parsing, state machines, and character classification in C."},{projectId:"P6.4",title:"Caesar Cipher Encryption & Decryption Engine",difficulty:"Intermediate",description:"Encrypt and decrypt confidential text messages by cyclically shifting alphabetic characters by K positions.",exampleText:"Message: 'Attack at Dawn from Barrackpore!', Shift: 3",exampleOutput:`Encrypted Cipher : 'Dwwdfn dw Gdzq iurp Eduudfnsruh!'
Decrypted Plain  : 'Attack at Dawn from Barrackpore!'`,logicExplanation:`1. Modulo 26 cyclic arithmetic for uppercase ('A' to 'Z') and lowercase ('a' to 'z').
2. Decrypt by shifting with (26 - shift % 26).`,answerFile:"src/components/study/c-language/topics/002_006_strings-and-string-handling-functions/topic5_files/answers/answer4.c",codeExplanation:"Demonstrates cryptographic substitution algorithms, ASCII normalization, and wraparound modulo arithmetic."},{projectId:"P6.5",title:"Run-Length String Compression Engine",difficulty:"Intermediate",description:"Compress repeating sequences of characters in a string into character-count pairs (e.g. 'wwwwaaadexxxxxxywww' -> 'w4a3d1e1x6y1w3').",exampleText:"Input: 'wwwwaaadexxxxxxywww'",exampleOutput:"RLE Compressed: 'w4a3d1e1x6y1w3'",logicExplanation:`1. Count consecutive identical characters in a while loop.
2. Format character and count into destination buffer using sprintf.`,answerFile:"src/components/study/c-language/topics/002_006_strings-and-string-handling-functions/topic5_files/answers/answer5.c",codeExplanation:"Demonstrates lossless compression algorithms and bounded string formatting."},{projectId:"P6.6",title:"Substring Find and Replace Engine",difficulty:"Hard",description:"Replace all occurrences of a target substring with a replacement string in an input text paragraph.",exampleText:"Text: 'The student lives in Naihati. The student studies at Barrackpore.', Find: 'The student', Replace: 'Swadeep'",exampleOutput:"Replaced Text: 'Swadeep lives in Naihati. Swadeep studies at Barrackpore.'",logicExplanation:`1. Use strncmp to detect substring matches.
2. Copy replacement string and advance source pointer accordingly.`,answerFile:"src/components/study/c-language/topics/002_006_strings-and-string-handling-functions/topic5_files/answers/answer6.c",codeExplanation:"Demonstrates complex string memory copying, offset math, and pattern replacement."},{projectId:"P6.7",title:"Longest Word Extractor from Text Paragraph",difficulty:"Intermediate",description:"Find and extract the longest word from a sentence and report its length.",exampleText:"Paragraph: 'Mastering C systems programming and architectural memory layouts in Barrackpore.'",exampleOutput:"Longest Word: 'architectural' (Length: 13 characters)",logicExplanation:`1. Track word boundaries (start and current length) using isalnum.
2. Update maxLen and maxStart when word exceeds previous record.`,answerFile:"src/components/study/c-language/topics/002_006_strings-and-string-handling-functions/topic5_files/answers/answer7.c",codeExplanation:"Demonstrates word tokenization and substring extraction via strncpy."},{projectId:"P6.8",title:"Password Strength & Complexity Evaluator",difficulty:"Intermediate",description:"Evaluate password security based on length >= 8, uppercase letters, lowercase letters, digits, and special symbols.",exampleText:"Passwords: 'Admin123!', 'pass', 'SukantaHui@2026'",exampleOutput:"Score: 5/5 -> EXCELLENT (Strong Security)",logicExplanation:`1. Iterate characters checking boolean flags for uppercase, lowercase, digit, and special symbols.
2. Compute score out of 5.`,answerFile:"src/components/study/c-language/topics/002_006_strings-and-string-handling-functions/topic5_files/answers/answer8.c",codeExplanation:"Demonstrates character property evaluation for security verification."},{projectId:"P6.9",title:"Lexicographical Dictionary Sorter for Names",difficulty:"Intermediate",description:"Sort an array of student names in alphabetical order using strcmp and O(1) pointer swaps.",exampleText:"Names: ['Tuhina Paul', 'Swadeep Mukherjee', 'Abhronila Das', 'Debangshu Roy', 'Arindam Hui']",exampleOutput:"1. Abhronila Das, 2. Arindam Hui, 3. Debangshu Roy, 4. Swadeep Mukherjee, 5. Tuhina Paul",logicExplanation:`1. Compare names with strcmp.
2. Swap 8-byte pointer addresses directly to avoid buffer copying.`,answerFile:"src/components/study/c-language/topics/002_006_strings-and-string-handling-functions/topic5_files/answers/answer9.c",codeExplanation:"Demonstrates high-performance pointer sorting on string collections."},{projectId:"P6.10",title:"Roman Numerals to Decimal Integer Converter",difficulty:"Intermediate",description:"Convert Roman numeral strings (e.g. 'MCMXCIV') to standard decimal integers (1994).",exampleText:"Roman Numerals: 'XIV', 'MCMXCIV', 'MMXXVI'",exampleOutput:`Roman XIV = 14
Roman MCMXCIV = 1994
Roman MMXXVI = 2026`,logicExplanation:`1. Map Roman chars to values (I=1, V=5, X=10, L=50, C=100, D=500, M=1000).
2. If current value < next value, subtract current from next (e.g. IV = 4); else add.`,answerFile:"src/components/study/c-language/topics/002_006_strings-and-string-handling-functions/topic5_files/answers/answer10.c",codeExplanation:"Demonstrates parsing subtraction rules in historical numbering systems."}],l={projectCategory:E,subject:b,board:v,class:"High School / Undergraduate / Systems Engineering",tools:k,institute:P,projects:T};function R(){const[t,d]=c.useState(null);return c.useEffect(()=>{const a=Object.assign({"./topic5_files/answers/answer1.c":g,"./topic5_files/answers/answer10.c":m,"./topic5_files/answers/answer2.c":h,"./topic5_files/answers/answer3.c":f,"./topic5_files/answers/answer4.c":w,"./topic5_files/answers/answer5.c":x,"./topic5_files/answers/answer6.c":y,"./topic5_files/answers/answer7.c":_,"./topic5_files/answers/answer8.c":C,"./topic5_files/answers/answer9.c":S}),s={};Object.keys(a).forEach(n=>{const i=n.split("/").pop();s[i]=a[n]});const p=l.projects.map(n=>{const e=(n.answerFile||"").split("/").pop(),o=s[e];return o||console.warn(`⚠ Missing C answer file: ${e}`),{...n,answer:o||`// Source file "${e}" not found in answers folder`}});d({...l,projects:p})},[]),t?r.jsx(u,{data:t}):r.jsx("div",{className:"p-8 text-slate-400 flex items-center justify-center min-h-[350px]",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-6 h-6 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),r.jsx("span",{className:"text-sm font-semibold",children:"Loading 10 C String Manipulation Projects..."})]})})}export{R as default};
