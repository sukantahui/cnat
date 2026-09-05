import{b as p,j as r}from"./vendor-react-core-Doz9nIC6.js";import{C as u}from"./CProjectAnswerTemplateEnhanced-Wqumu2-a.js";import"./CodeBlock-BGRh7DVf.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const f=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Right-Angled Star Triangle Pattern\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = 1; r <= n; r++) {\r
        for (int c = 1; c <= r; c++) {\r
            printf("* ");\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,m=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Hollow Star Diamond Pattern\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    int radius = 4;\r
    for (int r = 1; r <= radius; r++) {\r
        for (int s = 1; s <= radius - r; s++) printf(" ");\r
        for (int k = 1; k <= 2 * r - 1; k++) {\r
            if (k == 1 || k == 2 * r - 1) printf("*");\r
            else printf(" ");\r
        }\r
        printf("\\n");\r
    }\r
    for (int r = radius - 1; r >= 1; r--) {\r
        for (int s = 1; s <= radius - r; s++) printf(" ");\r
        for (int k = 1; k <= 2 * r - 1; k++) {\r
            if (k == 1 || k == 2 * r - 1) printf("*");\r
            else printf(" ");\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Half Diamond Star Pattern\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = 1; r <= n; r++) {\r
        for (int c = 1; c <= r; c++) printf("* ");\r
        printf("\\n");\r
    }\r
    for (int r = n - 1; r >= 1; r--) {\r
        for (int c = 1; c <= r; c++) printf("* ");\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Left-Pointing Half Diamond Star Pattern\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = 1; r <= n; r++) {\r
        for (int s = 1; s <= (n - r) * 2; s++) printf(" ");\r
        for (int c = 1; c <= r; c++) printf("* ");\r
        printf("\\n");\r
    }\r
    for (int r = n - 1; r >= 1; r--) {\r
        for (int s = 1; s <= (n - r) * 2; s++) printf(" ");\r
        for (int c = 1; c <= r; c++) printf("* ");\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Hourglass Star Pattern\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = n; r >= 1; r--) {\r
        for (int s = 1; s <= n - r; s++) printf(" ");\r
        for (int k = 1; k <= 2 * r - 1; k++) printf("*");\r
        printf("\\n");\r
    }\r
    for (int r = 2; r <= n; r++) {\r
        for (int s = 1; s <= n - r; s++) printf(" ");\r
        for (int k = 1; k <= 2 * r - 1; k++) printf("*");\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Butterfly Star Pattern\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = 1; r <= n; r++) {\r
        for (int c = 1; c <= r; c++) printf("*");\r
        for (int s = 1; s <= 2 * (n - r); s++) printf(" ");\r
        for (int c = 1; c <= r; c++) printf("*");\r
        printf("\\n");\r
    }\r
    for (int r = n - 1; r >= 1; r--) {\r
        for (int c = 1; c <= r; c++) printf("*");\r
        for (int s = 1; s <= 2 * (n - r); s++) printf(" ");\r
        for (int c = 1; c <= r; c++) printf("*");\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Right-Angled Number Triangle (1 to r per row)\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = 1; r <= n; r++) {\r
        for (int c = 1; c <= r; c++) printf("%d ", c);\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Right-Angled Constant Number Triangle (r per row)\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = 1; r <= n; r++) {\r
        for (int c = 1; c <= r; c++) printf("%d ", r);\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Floyd's Triangle of Natural Numbers\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    int num = 1;\r
    for (int r = 1; r <= n; r++) {\r
        for (int c = 1; c <= r; c++) printf("%-2d ", num++);\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Inverted Number Triangle Pattern\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = n; r >= 1; r--) {\r
        for (int c = 1; c <= r; c++) printf("%d ", c);\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Binary 0-1 Alternating Triangle Pattern\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = 1; r <= n; r++) {\r
        for (int c = 1; c <= r; c++) {\r
            printf("%d ", (r + c) % 2 == 0 ? 1 : 0);\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Inverted Right-Angled Star Triangle Pattern\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = n; r >= 1; r--) {\r
        for (int c = 1; c <= r; c++) {\r
            printf("* ");\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Centered Number Pyramid (1 to r and Back)\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = 1; r <= n; r++) {\r
        for (int s = 1; s <= (n - r) * 2; s++) printf(" ");\r
        for (int c = 1; c <= r; c++) printf("%d ", c);\r
        for (int c = r - 1; c >= 1; c--) printf("%d ", c);\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Pascal's Triangle of Binomial Coefficients\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = 0; r < n; r++) {\r
        for (int s = 0; s < n - r - 1; s++) printf("  ");\r
        int val = 1;\r
        for (int k = 0; k <= r; k++) {\r
            printf("%4d", val);\r
            val = val * (r - k) / (k + 1);\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Continuous Increasing Number Square (N x N)\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    int num = 1;\r
    for (int r = 1; r <= 4; r++) {\r
        for (int c = 1; c <= 4; c++) printf("%2d ", num++);\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Right-Angled Alphabet Triangle (A to Z)\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = 1; r <= n; r++) {\r
        for (int c = 0; c < r; c++) printf("%c ", 'A' + c);\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Palindromic Character Pyramid Pattern\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = 1; r <= n; r++) {\r
        for (int s = 1; s <= (n - r) * 2; s++) printf(" ");\r
        for (int c = 0; c < r; c++) printf("%c ", 'A' + c);\r
        for (int c = r - 2; c >= 0; c--) printf("%c ", 'A' + c);\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Inverted Character Triangle Pattern\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = n; r >= 1; r--) {\r
        for (int c = 0; c < r; c++) printf("%c ", 'A' + c);\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,R=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: 2D Checkerboard / Chessboard Grid Pattern\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = 1; r <= n; r++) {\r
        for (int c = 1; c <= n; c++) {\r
            printf("%c ", (r + c) % 2 == 0 ? 'W' : 'B');\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: X-Shape Cross Pattern of Stars\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = 1; r <= n; r++) {\r
        for (int c = 1; c <= n; c++) {\r
            if (r == c || r + c == n + 1) printf("* ");\r
            else printf("  ");\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,B=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Plus (+)-Shape Cross Pattern of Stars\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    int mid = (n + 1) / 2;\r
    for (int r = 1; r <= n; r++) {\r
        for (int c = 1; c <= n; c++) {\r
            if (r == mid || c == mid) printf("* ");\r
            else printf("  ");\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,F=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Concentric Number Box Pattern (Spiralling Outer to Inner)\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    int layer = 3;\r
    int size = 2 * layer - 1;\r
    for (int r = 1; r <= size; r++) {\r
        for (int c = 1; c <= size; c++) {\r
            int top = r - 1, left = c - 1;\r
            int bottom = size - r, right = size - c;\r
            int minDist = top < left ? top : left;\r
            minDist = minDist < bottom ? minDist : bottom;\r
            minDist = minDist < right ? minDist : right;\r
            printf("%d ", layer - minDist);\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,D=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Right-Aligned Star Triangle Pattern\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = 1; r <= n; r++) {\r
        for (int s = 1; s <= (n - r) * 2; s++) printf(" ");\r
        for (int c = 1; c <= r; c++) printf("* ");\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Snake / Zig-Zag Matrix Number Pattern\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    int num = 1;\r
    for (int r = 1; r <= 4; r++) {\r
        if (r % 2 != 0) {\r
            for (int c = 1; c <= 4; c++) printf("%2d ", num++);\r
        } else {\r
            int temp = num + 4 - 1;\r
            for (int c = 1; c <= 4; c++) printf("%2d ", temp--);\r
            num += 4;\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,j=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Inverted Right-Aligned Star Triangle Pattern\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = n; r >= 1; r--) {\r
        for (int s = 1; s <= (n - r) * 2; s++) printf(" ");\r
        for (int c = 1; c <= r; c++) printf("* ");\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,L=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Centered Full Isosceles Star Pyramid\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = 1; r <= n; r++) {\r
        for (int s = 1; s <= n - r; s++) printf(" ");\r
        for (int k = 1; k <= 2 * r - 1; k++) printf("*");\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,M=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Inverted Centered Star Pyramid\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = n; r >= 1; r--) {\r
        for (int s = 1; s <= n - r; s++) printf(" ");\r
        for (int k = 1; k <= 2 * r - 1; k++) printf("*");\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,U=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Full Symmetrical Star Diamond Pattern\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    int radius = 4;\r
    for (int r = 1; r <= radius; r++) {\r
        for (int s = 1; s <= radius - r; s++) printf(" ");\r
        for (int k = 1; k <= 2 * r - 1; k++) printf("*");\r
        printf("\\n");\r
    }\r
    for (int r = radius - 1; r >= 1; r--) {\r
        for (int s = 1; s <= radius - r; s++) printf(" ");\r
        for (int k = 1; k <= 2 * r - 1; k++) printf("*");\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,J=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Hollow Star Square Pattern (N x N)\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = 1; r <= n; r++) {\r
        for (int c = 1; c <= n; c++) {\r
            if (r == 1 || r == n || c == 1 || c == n) printf("* ");\r
            else printf("  ");\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,W=`#include <stdio.h>\r
\r
void executePattern(int n) {\r
    printf("=========================================================\r
");\r
    printf("  PATTERN PROJECT: Hollow Star Pyramid Pattern\r
");\r
    printf("=========================================================\r
\r
");\r
\r
    for (int r = 1; r <= n; r++) {\r
        for (int s = 1; s <= n - r; s++) printf(" ");\r
        for (int k = 1; k <= 2 * r - 1; k++) {\r
            if (k == 1 || k == 2 * r - 1 || r == n) printf("*");\r
            else printf(" ");\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int n = 5;\r
    executePattern(n);\r
    return 0;\r
}\r
`,H="Project Pattern: 30 Comprehensive C ASCII Graphic & Numerical Pattern Projects",q="C Programming Language (ANSI C / C99)",z="University & Industrial Computer Science Standards",Z=["GCC Compiler","VS Code","Terminal"],G={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Shyamnagar"},X=JSON.parse(`[{"projectId":"P30_01","title":"Right-Angled Star Triangle Pattern","difficulty":"Intermediate","description":"Print a right-angled triangle of stars with N rows where row r contains r stars.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Row 1: *, Row 2: * *, Row 3: * * *...","exampleOutput":"*\\n* *\\n* * *\\n* * * *\\n* * * * *","logicExplanation":"Outer loop r runs 1..N. Inner loop c runs 1..r printing '* '.","answerFile":"./answers/pattern_answer1.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_02","title":"Inverted Right-Angled Star Triangle Pattern","difficulty":"Intermediate","description":"Print an inverted right-angled triangle where row 1 has N stars decreasing down to 1 star.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Row 1: * * * * *, Row 2: * * * *..., Row 5: *","exampleOutput":"* * * * *\\n* * * *\\n* * *\\n* *\\n*","logicExplanation":"Outer loop r runs N down to 1. Inner loop c runs 1..r printing '* '.","answerFile":"./answers/pattern_answer2.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_03","title":"Right-Aligned Star Triangle Pattern","difficulty":"Intermediate","description":"Print a right-aligned right-angled triangle with leading spaces.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Row r has (N-r)*2 leading spaces followed by r stars.","exampleOutput":"        *\\n      * *\\n    * * *\\n  * * * *\\n* * * * *","logicExplanation":"Outer loop r runs 1..N. First inner loop prints (N-r)*2 spaces; second inner loop prints '* '.","answerFile":"./answers/pattern_answer3.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_04","title":"Inverted Right-Aligned Star Triangle Pattern","difficulty":"Intermediate","description":"Print an inverted right-aligned triangle of stars.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Row r (N down to 1) has (N-r)*2 leading spaces followed by r stars.","exampleOutput":"* * * * *\\n  * * * *\\n    * * *\\n      * *\\n        *","logicExplanation":"Outer loop r runs N down to 1. Space loop prints (N-r)*2 spaces; star loop prints '* '.","answerFile":"./answers/pattern_answer4.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_05","title":"Centered Full Isosceles Star Pyramid","difficulty":"Intermediate","description":"Print a centered pyramid of stars with N rows where row r has N-r spaces and 2r-1 stars.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Row 1: 1 star, Row 2: 3 stars, Row 3: 5 stars...","exampleOutput":"    *\\n   ***\\n  *****\\n *******\\n*********","logicExplanation":"Outer loop r=1..N. Space loop runs 1..N-r printing ' '. Star loop runs 1..2*r-1 printing '*'.","answerFile":"./answers/pattern_answer5.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_06","title":"Inverted Centered Star Pyramid","difficulty":"Intermediate","description":"Print an inverted centered star pyramid of N rows.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Row r=N..1 has N-r spaces and 2r-1 stars.","exampleOutput":"*********\\n *******\\n  *****\\n   ***\\n    *","logicExplanation":"Outer loop r=N down to 1. Space loop runs 1..N-r printing ' '. Star loop runs 1..2*r-1 printing '*'.","answerFile":"./answers/pattern_answer6.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_07","title":"Full Symmetrical Star Diamond Pattern","difficulty":"Intermediate","description":"Combine an upright star pyramid and an inverted star pyramid into a symmetrical diamond.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Upper half N rows, lower half N-1 rows.","exampleOutput":"   *\\n  ***\\n *****\\n*******\\n *****\\n  ***\\n   *","logicExplanation":"Run upright pyramid loop 1..N, then run inverted pyramid loop N-1 down to 1.","answerFile":"./answers/pattern_answer7.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_08","title":"Hollow Star Square Pattern (N x N)","difficulty":"Intermediate","description":"Print an N x N square with stars on the boundary and empty spaces inside.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Stars printed if r==1, r==N, c==1, or c==N.","exampleOutput":"* * * * *\\n*       *\\n*       *\\n*       *\\n* * * * *","logicExplanation":"If r==1 || r==N || c==1 || c==N print '* ', else print two spaces '  '.","answerFile":"./answers/pattern_answer8.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_09","title":"Hollow Star Pyramid Pattern","difficulty":"Intermediate","description":"Print a centered star pyramid with stars only on the outline border.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Stars at start of pyramid line, end of line, or bottom row.","exampleOutput":"    *\\n   * *\\n  *   *\\n *     *\\n*********","logicExplanation":"For row r, print star if k==1, k==2*r-1, or r==N.","answerFile":"./answers/pattern_answer9.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_10","title":"Hollow Star Diamond Pattern","difficulty":"Intermediate","description":"Print a symmetrical diamond with stars only along its perimeter.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Hollow diamond perimeter.","exampleOutput":"   *\\n  * *\\n *   *\\n*     *\\n *   *\\n  * *\\n   *","logicExplanation":"Print star at perimeter positions (k==1 or k==2*r-1) for upper and lower halves.","answerFile":"./answers/pattern_answer10.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_11","title":"Half Diamond Star Pattern","difficulty":"Intermediate","description":"Print a right-pointing half diamond pattern.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Increases to N stars then decreases.","exampleOutput":"*\\n* *\\n* * *\\n* * * *\\n* * * * *\\n* * * *\\n* * *\\n* *\\n*","logicExplanation":"Loop r=1..N printing r stars; then loop r=N-1 down to 1 printing r stars.","answerFile":"./answers/pattern_answer11.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_12","title":"Left-Pointing Half Diamond Star Pattern","difficulty":"Intermediate","description":"Print a left-pointing half diamond pattern with leading spaces.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Left-pointing half diamond.","exampleOutput":"        *\\n      * *\\n    * * *\\n  * * * *\\n* * * * *\\n  * * * *\\n    * * *\\n      * *\\n        *","logicExplanation":"Upper half space loop (N-r)*2, star loop r; lower half space loop (N-r)*2, star loop r.","answerFile":"./answers/pattern_answer12.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_13","title":"Hourglass Star Pattern","difficulty":"Intermediate","description":"Print an hourglass pattern combining inverted pyramid and upright pyramid.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Top pyramid wide, middle narrow, bottom wide.","exampleOutput":"*********\\n *******\\n  *****\\n   ***\\n    *\\n   ***\\n  *****\\n *******\\n*********","logicExplanation":"Run inverted pyramid r=N down to 1, then upright pyramid r=2..N.","answerFile":"./answers/pattern_answer13.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_14","title":"Butterfly Star Pattern","difficulty":"Intermediate","description":"Print a symmetrical butterfly pattern of stars.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Left and right wings meeting in middle.","exampleOutput":"*        *\\n**      **\\n***    ***\\n****  ****\\n**********\\n****  ****\\n***    ***\\n**      **\\n*        *","logicExplanation":"For row r=1..N, print r stars, 2*(N-r) spaces, r stars. Mirror for lower half.","answerFile":"./answers/pattern_answer14.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_15","title":"Right-Angled Number Triangle (1 to r per row)","difficulty":"Intermediate","description":"Print numbers 1 to r on each row r.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Row 1: 1, Row 2: 1 2, Row 3: 1 2 3...","exampleOutput":"1\\n1 2\\n1 2 3\\n1 2 3 4\\n1 2 3 4 5","logicExplanation":"Outer r=1..N, inner c=1..r printing c.","answerFile":"./answers/pattern_answer15.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_16","title":"Right-Angled Constant Number Triangle (r per row)","difficulty":"Intermediate","description":"Print number r repeated r times on row r.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Row 1: 1, Row 2: 2 2, Row 3: 3 3 3...","exampleOutput":"1\\n2 2\\n3 3 3\\n4 4 4 4\\n5 5 5 5 5","logicExplanation":"Outer r=1..N, inner c=1..r printing r.","answerFile":"./answers/pattern_answer16.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_17","title":"Floyd's Triangle of Natural Numbers","difficulty":"Intermediate","description":"Print consecutive natural numbers in a right-angled triangle.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"1 / 2 3 / 4 5 6 / 7 8 9 10...","exampleOutput":"1\\n2  3\\n4  5  6\\n7  8  9  10\\n11 12 13 14 15","logicExplanation":"Maintain global counter num=1. Outer r=1..N, inner c=1..r printing num++.","answerFile":"./answers/pattern_answer17.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_18","title":"Inverted Number Triangle Pattern","difficulty":"Intermediate","description":"Print an inverted triangle of numbers 1 to r.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Row 1: 1 2 3 4 5, Row 2: 1 2 3 4...","exampleOutput":"1 2 3 4 5\\n1 2 3 4\\n1 2 3\\n1 2\\n1","logicExplanation":"Outer r=N down to 1, inner c=1..r printing c.","answerFile":"./answers/pattern_answer18.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_19","title":"Binary 0-1 Alternating Triangle Pattern","difficulty":"Intermediate","description":"Print 1s and 0s alternating in a right-angled triangle.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Starts 1 if (r+c) is even, 0 if odd.","exampleOutput":"1\\n0 1\\n1 0 1\\n0 1 0 1\\n1 0 1 0 1","logicExplanation":"If (r + c) % 2 == 0 print 1, else print 0.","answerFile":"./answers/pattern_answer19.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_20","title":"Centered Number Pyramid (1 to r and Back)","difficulty":"Intermediate","description":"Print a palindrome number pyramid on each row with exact spatial centering.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Row 1: 1, Row 2: 1 2 1, Row 3: 1 2 3 2 1...","exampleOutput":"        1\\n      1 2 1\\n    1 2 3 2 1\\n  1 2 3 4 3 2 1\\n1 2 3 4 5 4 3 2 1","logicExplanation":"Space loop runs (N - r) * 2 spaces; inner loop 1..r prints 'c '; second inner loop r-1 down to 1 prints 'c '.","answerFile":"./answers/pattern_answer20.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_21","title":"Pascal's Triangle of Binomial Coefficients","difficulty":"Intermediate","description":"Print Pascal's Triangle using combination formulas.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Each number is sum of two numbers above.","exampleOutput":"        1\\n      1   1\\n    1   2   1\\n  1   3   3   1\\n1   4   6   4   1","logicExplanation":"Use iterative binomial combination \`val = val * (n - k) / (k + 1)\`.","answerFile":"./answers/pattern_answer21.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_22","title":"Continuous Increasing Number Square (N x N)","difficulty":"Intermediate","description":"Print a square matrix filled with consecutive numbers 1 to N^2.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"1 to 16 for 4x4 matrix.","exampleOutput":" 1  2  3  4\\n 5  6  7  8\\n 9 10 11 12\\n13 14 15 16","logicExplanation":"Maintain num=1; outer r=1..N, inner c=1..N printing num++ with %3d formatting.","answerFile":"./answers/pattern_answer22.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_23","title":"Right-Angled Alphabet Triangle (A to Z)","difficulty":"Intermediate","description":"Print uppercase alphabetic letters in a right-angled triangle.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Row 1: A, Row 2: A B, Row 3: A B C...","exampleOutput":"A\\nA B\\nA B C\\nA B C D\\nA B C D E","logicExplanation":"Outer r=1..N, inner c=0..r-1 printing (char)('A' + c).","answerFile":"./answers/pattern_answer23.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_24","title":"Palindromic Character Pyramid Pattern","difficulty":"Intermediate","description":"Print a centered pyramid of palindromic letters.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Row 1: A, Row 2: A B A, Row 3: A B C B A...","exampleOutput":"        A\\n      A B A\\n    A B C B A\\n  A B C D C B A\\nA B C D E D C B A","logicExplanation":"Space loop (N - r) * 2; char loop 'A'..'A'+r-1; backward char loop 'A'+r-2 down to 'A'.","answerFile":"./answers/pattern_answer24.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_25","title":"Inverted Character Triangle Pattern","difficulty":"Intermediate","description":"Print an inverted triangle of letters.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Row 1: A B C D E, Row 2: A B C D...","exampleOutput":"A B C D E\\nA B C D\\nA B C\\nA B\\nA","logicExplanation":"Outer r=N down to 1, inner c=0..r-1 printing (char)('A' + c).","answerFile":"./answers/pattern_answer25.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_26","title":"2D Checkerboard / Chessboard Grid Pattern","difficulty":"Intermediate","description":"Print alternating 'B' (Black) and 'W' (White) cells in an N x N grid.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Alternating grid.","exampleOutput":"W B W B W\\nB W B W B\\nW B W B W\\nB W B W B\\nW B W B W","logicExplanation":"If (r + c) % 2 == 0 print 'W ', else print 'B '.","answerFile":"./answers/pattern_answer26.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_27","title":"X-Shape Cross Pattern of Stars","difficulty":"Intermediate","description":"Print an X-shaped cross of stars inside an N x N square.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Stars on main and anti-diagonals.","exampleOutput":"*       *\\n  *   *\\n    *\\n  *   *\\n*       *","logicExplanation":"If r == c || r + c == N + 1 print '* ', else print two spaces '  '.","answerFile":"./answers/pattern_answer27.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_28","title":"Plus (+)-Shape Cross Pattern of Stars","difficulty":"Intermediate","description":"Print a (+)-shaped cross of stars intersecting at the middle row and column.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Stars on middle row and middle column.","exampleOutput":"    *\\n    *\\n* * * * *\\n    *\\n    *","logicExplanation":"If r == (N+1)/2 || c == (N+1)/2 print '* ', else print two spaces '  '.","answerFile":"./answers/pattern_answer28.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_29","title":"Concentric Number Box Pattern (Spiralling Outer to Inner)","difficulty":"Intermediate","description":"Print concentric square layers of numbers decreasing toward center.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Concentric layers 3 3 3 / 3 2 3 / 3 3 3.","exampleOutput":"3 3 3 3 3\\n3 2 2 2 3\\n3 2 1 2 3\\n3 2 2 2 3\\n3 3 3 3 3","logicExplanation":"Find minimum distance to any 4 borders: min(r, c, 2N-r, 2N-c).","answerFile":"./answers/pattern_answer29.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."},{"projectId":"P30_30","title":"Snake / Zig-Zag Matrix Number Pattern","difficulty":"Intermediate","description":"Print consecutive numbers in a snake (zig-zag) row direction.","learningOutcome":"Nested Loops, 2D Spatial Coordinate Mapping, Boundary Evaluation & Formatting","exampleText":"Odd rows left-to-right, even rows right-to-left.","exampleOutput":" 1  2  3  4\\n 8  7  6  5\\n 9 10 11 12\\n16 15 14 13","logicExplanation":"If row r is odd, print numbers increasing; if row r is even, print numbers decreasing.","answerFile":"./answers/pattern_answer30.c","codeExplanation":"Uses nested outer row (r) and inner column (c) loops to render procedural ASCII graphics."}]`),c={projectCategory:H,subject:q,board:z,class:"Computer Science Core / BCA / B.Tech / ICSE / Competitive Coding",tools:Z,institute:G,projects:X};function nn(){const[e,l]=p.useState(null);return p.useEffect(()=>{const i=Object.assign({"./topic4_files/answers/pattern_answer1.c":f,"./topic4_files/answers/pattern_answer10.c":m,"./topic4_files/answers/pattern_answer11.c":g,"./topic4_files/answers/pattern_answer12.c":w,"./topic4_files/answers/pattern_answer13.c":_,"./topic4_files/answers/pattern_answer14.c":P,"./topic4_files/answers/pattern_answer15.c":x,"./topic4_files/answers/pattern_answer16.c":h,"./topic4_files/answers/pattern_answer17.c":E,"./topic4_files/answers/pattern_answer18.c":v,"./topic4_files/answers/pattern_answer19.c":C,"./topic4_files/answers/pattern_answer2.c":N,"./topic4_files/answers/pattern_answer20.c":T,"./topic4_files/answers/pattern_answer21.c":I,"./topic4_files/answers/pattern_answer22.c":S,"./topic4_files/answers/pattern_answer23.c":A,"./topic4_files/answers/pattern_answer24.c":y,"./topic4_files/answers/pattern_answer25.c":O,"./topic4_files/answers/pattern_answer26.c":R,"./topic4_files/answers/pattern_answer27.c":b,"./topic4_files/answers/pattern_answer28.c":B,"./topic4_files/answers/pattern_answer29.c":F,"./topic4_files/answers/pattern_answer3.c":D,"./topic4_files/answers/pattern_answer30.c":k,"./topic4_files/answers/pattern_answer4.c":j,"./topic4_files/answers/pattern_answer5.c":L,"./topic4_files/answers/pattern_answer6.c":M,"./topic4_files/answers/pattern_answer7.c":U,"./topic4_files/answers/pattern_answer8.c":J,"./topic4_files/answers/pattern_answer9.c":W}),a={};Object.keys(i).forEach(n=>{const o=n.split("/").pop();a[o]=i[n]});const d=c.projects.map(n=>{const t=(n.answerFile||"").split("/").pop(),s=a[t];return s||console.warn(`⚠ Missing C pattern answer file: ${t}`),{...n,answer:s||`// Source file "${t}" not found in answers folder`}});l({...c,projects:d})},[]),e?r.jsx(u,{data:e}):r.jsx("div",{className:"p-8 text-slate-400 flex items-center justify-center min-h-[350px]",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-6 h-6 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"}),r.jsx("span",{className:"text-sm font-semibold",children:"Loading 30 Project Pattern C Programs..."})]})})}export{nn as default};
