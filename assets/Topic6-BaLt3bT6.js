import{b as u,j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as d}from"./CProjectAnswerTemplateEnhanced-DRUOSXgE.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const m=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <stdbool.h>\r
\r
#define MAX 5\r
\r
typedef struct {\r
    int data[MAX];\r
    int top;\r
} ArrayStack;\r
\r
void init_stack(ArrayStack *s) { s->top = -1; }\r
\r
bool is_full(ArrayStack *s) { return s->top == MAX - 1; }\r
bool is_empty(ArrayStack *s) { return s->top == -1; }\r
\r
void push(ArrayStack *s, int val) {\r
    if (is_full(s)) { printf("Stack Overflow! Cannot push %d\\n", val); return; }\r
    s->data[++(s->top)] = val;\r
    printf("Pushed: %d\\n", val);\r
}\r
\r
int pop(ArrayStack *s) {\r
    if (is_empty(s)) { printf("Stack Underflow!\\n"); return -1; }\r
    return s->data[(s->top)--];\r
}\r
\r
int main() {\r
    ArrayStack s; init_stack(&s);\r
    printf("--- Array Stack ADT ---\\n");\r
    push(&s, 10); push(&s, 20); push(&s, 30);\r
    printf("Popped: %d\\n", pop(&s));\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
#define N 100\r
\r
typedef struct {\r
    int main_stack[N], min_stack[N];\r
    int top_m, top_min;\r
} MinStack;\r
\r
void init_min_stack(MinStack *s) { s->top_m = -1; s->top_min = -1; }\r
\r
void push_min(MinStack *s, int val) {\r
    s->main_stack[++(s->top_m)] = val;\r
    if (s->top_min == -1 || val <= s->min_stack[s->top_min]) {\r
        s->min_stack[++(s->top_min)] = val;\r
    }\r
}\r
\r
int get_min(MinStack *s) { return (s->top_min == -1) ? -1 : s->min_stack[s->top_min]; }\r
\r
int main() {\r
    MinStack s; init_min_stack(&s);\r
    printf("--- O(1) Min Stack Engine ---\\n");\r
    push_min(&s, 18); push_min(&s, 19); push_min(&s, 29); push_min(&s, 15);\r
    printf("Current Min: %d\\n", get_min(&s));\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
#include <ctype.h>\r
#include <string.h>\r
\r
int prec(char c) {\r
    if (c == '^') return 3;\r
    if (c == '/' || c == '*') return 2;\r
    if (c == '+' || c == '-') return 1;\r
    return -1;\r
}\r
\r
void infix_to_postfix(const char *infix, char *postfix) {\r
    char stack[100]; int top = -1, k = 0;\r
    for (int i = 0; infix[i] != '\\0'; i++) {\r
        char c = infix[i];\r
        if (isalnum(c)) postfix[k++] = c;\r
        else if (c == '(') stack[++top] = c;\r
        else if (c == ')') {\r
            while (top != -1 && stack[top] != '(') postfix[k++] = stack[top--];\r
            top--;\r
        } else {\r
            while (top != -1 && prec(c) <= prec(stack[top])) postfix[k++] = stack[top--];\r
            stack[++top] = c;\r
        }\r
    }\r
    while (top != -1) postfix[k++] = stack[top--];\r
    postfix[k] = '\\0';\r
}\r
\r
int main() {\r
    char infix[] = "a+b*(c^d-e)"; char postfix[100];\r
    printf("--- Infix to Postfix Shunting-Yard ---\\nInfix  : %s\\n", infix);\r
    infix_to_postfix(infix, postfix);\r
    printf("Postfix: %s\\n", postfix);\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
#include <ctype.h>\r
\r
int evaluate_postfix(const char *expr) {\r
    int stack[100], top = -1;\r
    for (int i = 0; expr[i] != '\\0'; i++) {\r
        if (isdigit(expr[i])) stack[++top] = expr[i] - '0';\r
        else {\r
            int val2 = stack[top--];\r
            int val1 = stack[top--];\r
            switch (expr[i]) {\r
                case '+': stack[++top] = val1 + val2; break;\r
                case '-': stack[++top] = val1 - val2; break;\r
                case '*': stack[++top] = val1 * val2; break;\r
                case '/': stack[++top] = val1 / val2; break;\r
            }\r
        }\r
    }\r
    return stack[top];\r
}\r
\r
int main() {\r
    char expr[] = "231*+9-"; // 2 + (3*1) - 9 = 5 - 9 = -4\r
    printf("--- Postfix Expression Evaluator ---\\nExpression: %s\\nEvaluated Result = %d\\n", expr, evaluate_postfix(expr));\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
#define N 100\r
\r
typedef struct {\r
    int s1[N], s2[N];\r
    int t1, t2;\r
} QueueTwoStacks;\r
\r
void init_q2s(QueueTwoStacks *q) { q->t1 = -1; q->t2 = -1; }\r
\r
void enqueue_q2s(QueueTwoStacks *q, int val) { q->s1[++(q->t1)] = val; }\r
\r
int dequeue_q2s(QueueTwoStacks *q) {\r
    if (q->t2 == -1) {\r
        while (q->t1 != -1) q->s2[++(q->t2)] = q->s1[(q->t1)--];\r
    }\r
    if (q->t2 == -1) return -1;\r
    return q->s2[(q->t2)--];\r
}\r
\r
int main() {\r
    QueueTwoStacks q; init_q2s(&q);\r
    printf("--- Queue using Two Stacks ---\\n");\r
    enqueue_q2s(&q, 10); enqueue_q2s(&q, 20);\r
    printf("Dequeued: %d\\n", dequeue_q2s(&q));\r
    enqueue_q2s(&q, 30);\r
    printf("Dequeued: %d\\n", dequeue_q2s(&q));\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
#define N 100\r
\r
typedef struct {\r
    int q1[N], q2[N];\r
    int f1, r1, f2, r2;\r
} StackTwoQueues;\r
\r
void init_s2q(StackTwoQueues *s) { s->f1 = 0; s->r1 = -1; s->f2 = 0; s->r2 = -1; }\r
\r
void push_s2q(StackTwoQueues *s, int val) {\r
    s->q2[++(s->r2)] = val;\r
    while (s->f1 <= s->r1) s->q2[++(s->r2)] = s->q1[(s->f1)++];\r
    // Swap q1 and q2\r
    for (int i = s->f2; i <= s->r2; i++) s->q1[i - s->f2] = s->q2[i];\r
    s->f1 = 0; s->r1 = s->r2 - s->f2;\r
    s->f2 = 0; s->r2 = -1;\r
}\r
\r
int pop_s2q(StackTwoQueues *s) {\r
    if (s->f1 > s->r1) return -1;\r
    return s->q1[(s->f1)++];\r
}\r
\r
int main() {\r
    StackTwoQueues s; init_s2q(&s);\r
    printf("--- Stack using Two Queues ---\\n");\r
    push_s2q(&s, 10); push_s2q(&s, 20); push_s2q(&s, 30);\r
    printf("Popped: %d\\n", pop_s2q(&s));\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
\r
void next_greater_element(int arr[], int n) {\r
    int stack[100], top = -1;\r
    int nge[100];\r
\r
    for (int i = n - 1; i >= 0; i--) {\r
        while (top != -1 && stack[top] <= arr[i]) top--;\r
        nge[i] = (top == -1) ? -1 : stack[top];\r
        stack[++top] = arr[i];\r
    }\r
\r
    printf("--- Next Greater Element (Monotonic Stack) ---\\n");\r
    for (int i = 0; i < n; i++) printf("Element %2d -> NGE = %d\\n", arr[i], nge[i]);\r
}\r
\r
int main() {\r
    int arr[] = {4, 5, 2, 25, 7, 18};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
    next_greater_element(arr, n);\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
\r
void daily_temperatures(int temp[], int n, int ans[]) {\r
    int stack[100], top = -1;\r
    for (int i = 0; i < n; i++) {\r
        while (top != -1 && temp[i] > temp[stack[top]]) {\r
            int idx = stack[top--];\r
            ans[idx] = i - idx;\r
        }\r
        stack[++top] = i;\r
    }\r
    while (top != -1) ans[stack[top--]] = 0;\r
}\r
\r
int main() {\r
    int temp[] = {73, 74, 75, 71, 69, 72, 76, 73};\r
    int n = 8, ans[8];\r
    printf("--- Daily Temperatures / Next Warmer Day ---\\n");\r
    daily_temperatures(temp, n, ans);\r
    printf("Days to wait: [ ");\r
    for (int i = 0; i < n; i++) printf("%d ", ans[i]);\r
    printf("]\\n");\r
    return 0;\r
}\r
`,q=`#include <stdio.h>\r
\r
int can_complete_circuit(int gas[], int cost[], int n) {\r
    int total_surplus = 0, curr_surplus = 0, start_idx = 0;\r
    for (int i = 0; i < n; i++) {\r
        total_surplus += gas[i] - cost[i];\r
        curr_surplus += gas[i] - cost[i];\r
        if (curr_surplus < 0) {\r
            start_idx = i + 1;\r
            curr_surplus = 0;\r
        }\r
    }\r
    return (total_surplus >= 0) ? start_idx : -1;\r
}\r
\r
int main() {\r
    int gas[]  = {1, 2, 3, 4, 5};\r
    int cost[] = {3, 4, 5, 1, 2};\r
    int n = 5;\r
    printf("--- Gas Station Circular Circuit ---\\n");\r
    int start = can_complete_circuit(gas, cost, n);\r
    if (start != -1) printf("Starting Gas Station Index = %d\\n", start);\r
    else printf("Cannot complete circuit.\\n");\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
\r
void first_non_repeating(const char *stream) {\r
    int freq[256] = {0};\r
    char q[100]; int front = 0, rear = -1;\r
\r
    printf("--- First Non-Repeating Character in Stream ---\\n");\r
    for (int i = 0; stream[i] != '\\0'; i++) {\r
        char ch = stream[i];\r
        freq[(unsigned char)ch]++;\r
        q[++rear] = ch;\r
\r
        while (front <= rear && freq[(unsigned char)q[front]] > 1) front++;\r
        if (front <= rear) printf("Read '%c' -> First Non-Repeating: '%c'\\n", ch, q[front]);\r
        else printf("Read '%c' -> First Non-Repeating: -1\\n", ch);\r
    }\r
}\r
\r
int main() {\r
    const char *stream = "aabccxb";\r
    first_non_repeating(stream);\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
\r
void sort_stack(int s[], int *top) {\r
    int tmp_stack[100]; int tmp_top = -1;\r
    while (*top != -1) {\r
        int temp = s[(*top)--];\r
        while (tmp_top != -1 && tmp_stack[tmp_top] > temp) {\r
            s[++(*top)] = tmp_stack[tmp_top--];\r
        }\r
        tmp_stack[++tmp_top] = temp;\r
    }\r
    while (tmp_top != -1) s[++(*top)] = tmp_stack[tmp_top--];\r
}\r
\r
int main() {\r
    int s[] = {34, 3, 31, 98, 92, 23};\r
    int top = 5;\r
    printf("--- Sort Stack using Auxiliary Stack ---\\n");\r
    sort_stack(s, &top);\r
    printf("Sorted Stack (Top to Bottom): ");\r
    while (top != -1) printf("%d ", s[top--]);\r
    printf("\\n");\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
typedef struct {\r
    Node *top;\r
} LinkedStack;\r
\r
void push_link(LinkedStack *s, int val) {\r
    Node *n = (Node*)malloc(sizeof(Node));\r
    n->data = val; n->next = s->top;\r
    s->top = n;\r
}\r
\r
int pop_link(LinkedStack *s) {\r
    if (!s->top) return -1;\r
    Node *temp = s->top;\r
    int val = temp->data;\r
    s->top = s->top->next;\r
    free(temp);\r
    return val;\r
}\r
\r
int main() {\r
    LinkedStack s = {NULL};\r
    printf("--- Linked List Stack ---\\n");\r
    push_link(&s, 100); push_link(&s, 200);\r
    printf("Popped: %d\\n", pop_link(&s));\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
\r
void sliding_window_max(int arr[], int n, int k) {\r
    int deque[100]; int front = 0, rear = -1;\r
    printf("--- Sliding Window Maximum (Monotonic Deque) ---\\nWindow Maxima (K=%d): [ ", k);\r
    for (int i = 0; i < n; i++) {\r
        if (front <= rear && deque[front] <= i - k) front++;\r
        while (front <= rear && arr[deque[rear]] <= arr[i]) rear--;\r
        deque[++rear] = i;\r
        if (i >= k - 1) printf("%d ", arr[deque[front]]);\r
    }\r
    printf("]\\n");\r
}\r
\r
int main() {\r
    int arr[] = {1, 3, -1, -3, 5, 3, 6, 7};\r
    int n = 8, k = 3;\r
    sliding_window_max(arr, n, k);\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
int largest_rectangle_area(int heights[], int n) {\r
    int stack[100], top = -1;\r
    int max_area = 0;\r
    for (int i = 0; i <= n; i++) {\r
        int h = (i == n) ? 0 : heights[i];\r
        while (top != -1 && heights[stack[top]] >= h) {\r
            int height = heights[stack[top--]];\r
            int width = (top == -1) ? i : (i - stack[top] - 1);\r
            max_area = max(max_area, height * width);\r
        }\r
        stack[++top] = i;\r
    }\r
    return max_area;\r
}\r
\r
int main() {\r
    int heights[] = {2, 1, 5, 6, 2, 3};\r
    int n = 6;\r
    printf("--- Largest Rectangle in Histogram ---\\n");\r
    printf("Maximum Rectangular Area = %d\\n", largest_rectangle_area(heights, n));\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
\r
#define R 4\r
#define C 4\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
\r
int max_hist(int row[], int n) {\r
    int stack[100], top = -1, max_area = 0;\r
    for (int i = 0; i <= n; i++) {\r
        int h = (i == n) ? 0 : row[i];\r
        while (top != -1 && row[stack[top]] >= h) {\r
            int height = row[stack[top--]];\r
            int width = (top == -1) ? i : (i - stack[top] - 1);\r
            max_area = max(max_area, height * width);\r
        }\r
        stack[++top] = i;\r
    }\r
    return max_area;\r
}\r
\r
int maximal_rectangle(int matrix[R][C]) {\r
    int max_area = 0;\r
    int heights[C];\r
    for (int j = 0; j < C; j++) heights[j] = 0;\r
\r
    for (int i = 0; i < R; i++) {\r
        for (int j = 0; j < C; j++) {\r
            heights[j] = (matrix[i][j] == 1) ? heights[j] + 1 : 0;\r
        }\r
        max_area = max(max_area, max_hist(heights, C));\r
    }\r
    return max_area;\r
}\r
\r
int main() {\r
    int matrix[R][C] = {\r
        {1, 0, 1, 0},\r
        {1, 0, 1, 1},\r
        {1, 1, 1, 1},\r
        {1, 0, 0, 1}\r
    };\r
    printf("--- Maximal Rectangle in Binary Matrix ---\\n");\r
    printf("Maximal Rectangle Area = %d\\n", maximal_rectangle(matrix));\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
#define RING_SIZE 4\r
\r
typedef struct {\r
    int buffer[RING_SIZE];\r
    volatile int head;\r
    volatile int tail;\r
} RingBuffer;\r
\r
void init_ring(RingBuffer *r) { r->head = 0; r->tail = 0; }\r
\r
bool ring_push(RingBuffer *r, int val) {\r
    int next = (r->head + 1) % RING_SIZE;\r
    if (next == r->tail) return false; // Buffer Full\r
    r->buffer[r->head] = val;\r
    r->head = next;\r
    return true;\r
}\r
\r
bool ring_pop(RingBuffer *r, int *val) {\r
    if (r->head == r->tail) return false; // Buffer Empty\r
    *val = r->buffer[r->tail];\r
    r->tail = (r->tail + 1) % RING_SIZE;\r
    return true;\r
}\r
\r
int main() {\r
    RingBuffer ring; init_ring(&ring);\r
    printf("--- Lock-Free Circular Ring Buffer ---\\n");\r
    ring_push(&ring, 100); ring_push(&ring, 200);\r
    int val;\r
    if (ring_pop(&ring, &val)) printf("Popped from Ring: %d\\n", val);\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <ctype.h>\r
\r
typedef struct ENode {\r
    char data;\r
    struct ENode *left, *right;\r
} ENode;\r
\r
ENode* create_node(char val) {\r
    ENode *n = (ENode*)malloc(sizeof(ENode));\r
    n->data = val; n->left = NULL; n->right = NULL;\r
    return n;\r
}\r
\r
ENode* build_expression_tree(const char *postfix) {\r
    ENode *stack[100]; int top = -1;\r
    for (int i = 0; postfix[i] != '\\0'; i++) {\r
        char ch = postfix[i];\r
        if (isalnum(ch)) {\r
            stack[++top] = create_node(ch);\r
        } else {\r
            ENode *n = create_node(ch);\r
            n->right = stack[top--];\r
            n->left = stack[top--];\r
            stack[++top] = n;\r
        }\r
    }\r
    return stack[top];\r
}\r
\r
int eval_tree(ENode *root) {\r
    if (!root->left && !root->right) return root->data - '0';\r
    int l = eval_tree(root->left);\r
    int r = eval_tree(root->right);\r
    switch (root->data) {\r
        case '+': return l + r;\r
        case '-': return l - r;\r
        case '*': return l * r;\r
        case '/': return l / r;\r
    }\r
    return 0;\r
}\r
\r
int main() {\r
    const char *postfix = "53+82/*"; // (5+3) * (8/2) = 8 * 4 = 32\r
    printf("--- Expression Tree Construction & Evaluation ---\\nPostfix: %s\\n", postfix);\r
    ENode *root = build_expression_tree(postfix);\r
    printf("Tree Evaluated Result = %d\\n", eval_tree(root));\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
\r
#define N 100\r
\r
typedef struct {\r
    int val_stack[N], min_stack[N], max_stack[N];\r
    int top;\r
} MinMaxStack;\r
\r
void init_minmax(MinMaxStack *s) { s->top = -1; }\r
\r
int max(int a, int b) { return (a > b) ? a : b; }\r
int min(int a, int b) { return (a < b) ? a : b; }\r
\r
void push_minmax(MinMaxStack *s, int val) {\r
    s->top++;\r
    s->val_stack[s->top] = val;\r
    if (s->top == 0) {\r
        s->min_stack[s->top] = val;\r
        s->max_stack[s->top] = val;\r
    } else {\r
        s->min_stack[s->top] = min(val, s->min_stack[s->top - 1]);\r
        s->max_stack[s->top] = max(val, s->max_stack[s->top - 1]);\r
    }\r
}\r
\r
int get_min(MinMaxStack *s) { return s->min_stack[s->top]; }\r
int get_max(MinMaxStack *s) { return s->max_stack[s->top]; }\r
\r
int main() {\r
    MinMaxStack s; init_minmax(&s);\r
    printf("--- O(1) Min-Max Stack Engine ---\\n");\r
    push_minmax(&s, 10); push_minmax(&s, 40); push_minmax(&s, 5); push_minmax(&s, 30);\r
    printf("Current Min = %d, Current Max = %d\\n", get_min(&s), get_max(&s));\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
#include <string.h>\r
\r
void reverse_string(char *str) {\r
    int n = strlen(str);\r
    char stack[100];\r
    int top = -1;\r
\r
    for (int i = 0; i < n; i++) stack[++top] = str[i];\r
    for (int i = 0; i < n; i++) str[i] = stack[top--];\r
}\r
\r
int main() {\r
    char str[] = "ANTIGRAVITY";\r
    printf("--- String Reversal using Stack ---\\nBefore: %s\\n", str);\r
    reverse_string(str);\r
    printf("After : %s\\n", str);\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
#include <stdbool.h>\r
#include <string.h>\r
\r
bool is_balanced(const char *expr) {\r
    char stack[100];\r
    int top = -1;\r
    for (int i = 0; expr[i] != '\\0'; i++) {\r
        char ch = expr[i];\r
        if (ch == '(' || ch == '{' || ch == '[') stack[++top] = ch;\r
        else if (ch == ')' || ch == '}' || ch == ']') {\r
            if (top == -1) return false;\r
            char last = stack[top--];\r
            if ((ch == ')' && last != '(') ||\r
                (ch == '}' && last != '{') ||\r
                (ch == ']' && last != '[')) return false;\r
        }\r
    }\r
    return top == -1;\r
}\r
\r
int main() {\r
    const char *expr1 = "{[()]}";\r
    const char *expr2 = "{[(])}";\r
    printf("--- Balanced Parentheses Matcher ---\\n");\r
    printf("%s -> %s\\n", expr1, is_balanced(expr1) ? "Balanced" : "Unbalanced");\r
    printf("%s -> %s\\n", expr2, is_balanced(expr2) ? "Balanced" : "Unbalanced");\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
#define CAPACITY 5\r
\r
typedef struct {\r
    int data[CAPACITY];\r
    int front, rear;\r
} ArrayQueue;\r
\r
void init_queue(ArrayQueue *q) { q->front = 0; q->rear = -1; }\r
\r
void enqueue(ArrayQueue *q, int val) {\r
    if (q->rear == CAPACITY - 1) { printf("Queue Full!\\n"); return; }\r
    q->data[++(q->rear)] = val;\r
}\r
\r
int dequeue(ArrayQueue *q) {\r
    if (q->front > q->rear) { printf("Queue Empty!\\n"); return -1; }\r
    return q->data[(q->front)++];\r
}\r
\r
int main() {\r
    ArrayQueue q; init_queue(&q);\r
    printf("--- Standard Linear Queue ---\\n");\r
    enqueue(&q, 10); enqueue(&q, 20); enqueue(&q, 30);\r
    printf("Dequeued: %d\\n", dequeue(&q));\r
    return 0;\r
}\r
`,M=`#include <stdio.h>\r
#define N 5\r
\r
typedef struct {\r
    int data[N];\r
    int front, rear, count;\r
} CircularQueue;\r
\r
void init_circular(CircularQueue *q) { q->front = 0; q->rear = -1; q->count = 0; }\r
\r
void enqueue_c(CircularQueue *q, int val) {\r
    if (q->count == N) { printf("Circular Queue Full!\\n"); return; }\r
    q->rear = (q->rear + 1) % N;\r
    q->data[q->rear] = val;\r
    q->count++;\r
}\r
\r
int dequeue_c(CircularQueue *q) {\r
    if (q->count == 0) { printf("Circular Queue Empty!\\n"); return -1; }\r
    int val = q->data[q->front];\r
    q->front = (q->front + 1) % N;\r
    q->count--;\r
    return val;\r
}\r
\r
int main() {\r
    CircularQueue q; init_circular(&q);\r
    printf("--- Circular Queue ADT ---\\n");\r
    enqueue_c(&q, 10); enqueue_c(&q, 20); enqueue_c(&q, 30);\r
    printf("Dequeued: %d\\n", dequeue_c(&q));\r
    enqueue_c(&q, 40); enqueue_c(&q, 50); enqueue_c(&q, 60);\r
    return 0;\r
}\r
`,F=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
typedef struct Node {\r
    int data;\r
    struct Node *next;\r
} Node;\r
\r
typedef struct {\r
    Node *front, *rear;\r
} LinkedQueue;\r
\r
void enqueue_link(LinkedQueue *q, int val) {\r
    Node *n = (Node*)malloc(sizeof(Node));\r
    n->data = val; n->next = NULL;\r
    if (!q->rear) { q->front = q->rear = n; return; }\r
    q->rear->next = n; q->rear = n;\r
}\r
\r
int dequeue_link(LinkedQueue *q) {\r
    if (!q->front) return -1;\r
    Node *temp = q->front;\r
    int val = temp->data;\r
    q->front = q->front->next;\r
    if (!q->front) q->rear = NULL;\r
    free(temp);\r
    return val;\r
}\r
\r
int main() {\r
    LinkedQueue q = {NULL, NULL};\r
    printf("--- Linked List Queue ---\\n");\r
    enqueue_link(&q, 10); enqueue_link(&q, 20);\r
    printf("Dequeued: %d\\n", dequeue_link(&q));\r
    return 0;\r
}\r
`,Q=`#include <stdio.h>\r
#define N 5\r
\r
typedef struct {\r
    int arr[N];\r
    int front, rear, size;\r
} Deque;\r
\r
void init_deque(Deque *d) { d->front = -1; d->rear = 0; d->size = 0; }\r
\r
void push_front(Deque *d, int val) {\r
    if (d->size == N) { printf("Deque Full!\\n"); return; }\r
    if (d->front == -1) { d->front = 0; d->rear = 0; }\r
    else d->front = (d->front - 1 + N) % N;\r
    d->arr[d->front] = val;\r
    d->size++;\r
}\r
\r
void push_back(Deque *d, int val) {\r
    if (d->size == N) { printf("Deque Full!\\n"); return; }\r
    if (d->front == -1) { d->front = 0; d->rear = 0; }\r
    else d->rear = (d->rear + 1) % N;\r
    d->arr[d->rear] = val;\r
    d->size++;\r
}\r
\r
int main() {\r
    Deque d; init_deque(&d);\r
    printf("--- Double-Ended Queue (Deque) ---\\n");\r
    push_front(&d, 10); push_back(&d, 20); push_front(&d, 5);\r
    printf("Front Element: %d, Rear Element: %d\\n", d.arr[d.front], d.arr[d.rear]);\r
    return 0;\r
}\r
`,R=`#include <stdio.h>\r
\r
void reverse_first_k(int q[], int n, int k) {\r
    if (k > n || k <= 0) return;\r
    int stack[100], top = -1;\r
\r
    for (int i = 0; i < k; i++) stack[++top] = q[i];\r
    for (int i = 0; i < k; i++) q[i] = stack[top--];\r
}\r
\r
int main() {\r
    int q[] = {10, 20, 30, 40, 50};\r
    int n = 5, k = 3;\r
    printf("--- Reverse First K Queue Elements ---\\nBefore: [ 10 20 30 40 50 ]\\n");\r
    reverse_first_k(q, n, k);\r
    printf("After (K=3): [ ");\r
    for (int i = 0; i < n; i++) printf("%d ", q[i]);\r
    printf("]\\n");\r
    return 0;\r
}\r
`,D="DSA Module 1.3: Stacks, Queues & Priority Buffers",L="Data Structures & Algorithms in C",j="University & Industrial Standards",B=["GCC Compiler","VS Code","GDB Debugger","Valgrind"],U={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},G=JSON.parse('[{"projectId":"STACK_QUEUE_001","title":"Fixed-Size Array Stack ADT with Overflow & Underflow Protection","difficulty":"Beginner","description":"A Stack is a Last-In, First-Out (LIFO) abstract data type where insertions (`push`) and deletions (`pop`) occur exclusively at the `top` index. In this project, you will build a Fixed-Size Array Stack in C. You will maintain a `top` integer index initialized to `-1`. When pushing, your program verifies that `top < MAX - 1` to prevent Stack Overflow; when popping, it verifies `top >= 0` to prevent Stack Underflow. You will implement `peek()` to inspect top values without removal.","learningOutcome":"LIFO Invariant, Stack Top Indexing & Overflow/Underflow Guarding","exampleText":"Push 10, Push 20, Push 30, Pop","exampleOutput":"--- Array Stack ADT ---\\nPushed: 10\\nPushed: 20\\nPushed: 30\\nPopped: 30","logicExplanation":"1. **Initialize**: Set `top = -1`.\\n2. **Push**: Check `top < MAX - 1`, increment `top++`, assign `data[top] = val`.\\n3. **Pop**: Check `top >= 0`, return `data[top--]`.","answerFile":"./answers/answer1.c","codeExplanation":"1. `push()` & `pop()`: Enforce LIFO stack rules with overflow/underflow checks."},{"projectId":"STACK_QUEUE_002","title":"Dynamic Linked List Stack Implementation (Zero-Capacity Limit)","difficulty":"Beginner","description":"Fixed-size array stacks fail when input size is unknown. A Linked List Stack allocates nodes dynamically on the heap, allowing the stack to grow dynamically without capacity limits until system RAM is exhausted. In this project, you will implement a Linked Stack in C. `push()` allocates a node and prepends it to `top` in O(1) time (`n->next = top; top = n;`), while `pop()` removes `top`, updates `top = top->next`, and frees heap memory.","learningOutcome":"Dynamic Heap Stacks, O(1) Push/Pop via Head Relinking & Unlimited Buffer Growth","exampleText":"Push 100, Push 200, Pop","exampleOutput":"--- Linked List Stack ---\\nPopped: 200","logicExplanation":"1. **Push**: Allocate node, `n->next = top`, set `top = n`.\\n2. **Pop**: Save `temp = top`, update `top = top->next`, `free(temp)`.","answerFile":"./answers/answer2.c","codeExplanation":"1. `push_link()` & `pop_link()`: Dynamic linked stack operations."},{"projectId":"STACK_QUEUE_003","title":"String Reversal using Stack LIFO Principle","difficulty":"Beginner","description":"Because a stack reverses the arrival sequence of elements (LIFO), pushing all characters of a string into a stack and popping them sequentially produces a perfectly reversed string! In this project, you will write a String Reversal Tool in C. Iterate through the string, pushing characters onto a character stack. Then pop characters one by one to overwrite the original string, demonstrating practical LIFO properties.","learningOutcome":"LIFO Sequence Inversion, Character Stack Buffers & In-Place String Modification","exampleText":"Input: ANTIGRAVITY","exampleOutput":"--- String Reversal using Stack ---\\nBefore: ANTIGRAVITY\\nAfter : YTIVARGINAT","logicExplanation":"1. **Push Pass**: Push each char `str[i]` to `stack[++top]`.\\n2. **Pop Pass**: Pop `stack[top--]` back into `str[i]`.","answerFile":"./answers/answer3.c","codeExplanation":"1. `reverse_string()`: Reverses string using character stack."},{"projectId":"STACK_QUEUE_004","title":"Balanced Parentheses & Brackets Matcher","difficulty":"Beginner","description":"Compilers and text editors use stacks to verify whether expression brackets (`()`, `{}`, `[]`) are correctly paired and nested. In this project, you will construct a Syntax Bracket Matcher in C. Scan the string: when encountering an opening bracket, push it onto the stack; when encountering a closing bracket, pop the top character and check if it matches the closing bracket type. If the stack is empty at the end, the string is balanced.","learningOutcome":"Syntax Parsing, Nested Bracket Matching & Stack Error State Handling","exampleText":"{[()]} vs {[(])}","exampleOutput":"--- Balanced Parentheses Matcher ---\\n{[()]} → Balanced\\n{[(])} → Unbalanced","logicExplanation":"1. **Opening**: Push `(`, `{`, `[` onto stack.\\n2. **Closing**: Pop top and verify matching pair type.\\n3. **Validation**: Return true if stack is empty after scanning.","answerFile":"./answers/answer4.c","codeExplanation":"1. `is_balanced()`: Validates bracket pairing syntax."},{"projectId":"STACK_QUEUE_005","title":"Standard Linear Queue ADT using Array","difficulty":"Beginner","description":"A Queue is a First-In, First-Out (FIFO) data structure where items are inserted at `rear` (`enqueue`) and removed from `front` (`dequeue`). In this project, you will implement a Linear Array Queue in C with `front` and `rear` indices. You will observe how standard linear array queues suffer from false overflow when `rear` reaches capacity despite freed slots at `front`.","learningOutcome":"FIFO Invariant, Front/Rear Pointer Movement & Linear Queue Memory Drift","exampleText":"Enqueue 10, 20, 30, Dequeue","exampleOutput":"--- Standard Linear Queue ---\\nDequeued: 10","logicExplanation":"1. **Enqueue**: Increment `rear++`, `data[rear] = val`.\\n2. **Dequeue**: Return `data[front++]`.","answerFile":"./answers/answer5.c","codeExplanation":"1. `enqueue()` & `dequeue()`: Linear FIFO queue operations."},{"projectId":"STACK_QUEUE_006","title":"Circular Queue ADT with Modulo Index Arithmetic","difficulty":"Beginner","description":"Linear queues waste memory when items are dequeued. A Circular Queue wraps `rear` and `front` around to index 0 using modulo arithmetic: `idx = (idx + 1) % N`, turning memory into a continuous ring buffer. In this project, you will construct a Circular Queue in C that eliminates memory waste and recycles dequeued slots in O(1) time.","learningOutcome":"Circular Buffer Wraparound, Modulo Index Math & Memory Recycling","exampleText":"Enqueue 10..50, Dequeue, Enqueue 60","exampleOutput":"--- Circular Queue ADT ---\\nDequeued: 10","logicExplanation":"1. **Circular Advance**: `rear = (rear + 1) % N`, `front = (front + 1) % N`.\\n2. **Full Condition**: `count == N`.","answerFile":"./answers/answer6.c","codeExplanation":"1. `enqueue_c()` & `dequeue_c()`: Modulo circular queue implementation."},{"projectId":"STACK_QUEUE_007","title":"Linked List Queue Implementation (Zero-Overflow Capacity)","difficulty":"Beginner","description":"Like dynamic stacks, a Linked Queue dynamically grows node by node. Maintain `front` and `rear` pointers: `enqueue()` appends to `rear` in O(1) time, while `dequeue()` removes from `front` in O(1) time and frees node memory. In this project, you will build a dynamic Linked Queue in C.","learningOutcome":"Dynamic FIFO Queue, Dual Front/Rear Relinking & Zero Overflow Limit","exampleText":"Enqueue 10, 20, Dequeue","exampleOutput":"--- Linked List Queue ---\\nDequeued: 10","logicExplanation":"1. **Enqueue**: Append to `rear->next`, update `rear`.\\n2. **Dequeue**: Remove `front`, update `front = front->next`, `free()` old front.","answerFile":"./answers/answer7.c","codeExplanation":"1. `enqueue_link()` & `dequeue_link()`: Dynamic linked queue operations."},{"projectId":"STACK_QUEUE_008","title":"Double-Ended Queue (Deque) Array Implementation","difficulty":"Beginner","description":"A Deque (Double-Ended Queue) allows insertion and deletion at BOTH ends (`push_front`, `push_back`, `pop_front`, `pop_back`). In this project, you will implement a Circular Array Deque in C, enabling O(1) operations at both boundaries.","learningOutcome":"Bi-Directional Queue Buffers, Deque Boundary Manipulation & Index Wraparound","exampleText":"Push Front 10, Push Back 20, Push Front 5","exampleOutput":"--- Double-Ended Queue (Deque) ---\\nFront Element: 5, Rear Element: 20","logicExplanation":"1. **Front Operations**: `front = (front - 1 + N) % N`.\\n2. **Back Operations**: `rear = (rear + 1) % N`.","answerFile":"./answers/answer8.c","codeExplanation":"1. `push_front()` & `push_back()`: Dual-ended deque operations."},{"projectId":"STACK_QUEUE_009","title":"Reverse First K Elements of a Queue","difficulty":"Beginner","description":"Given a queue and an integer K, reverse the order of the first K elements while keeping remaining elements in original relative order. In this project, you will implement K-Element Queue Reversal in C by dequeueing K elements onto an auxiliary stack and enqueueing them back.","learningOutcome":"Auxiliary Stack Data Transfer, Queue Subsegment Reversal & Data Stream Formatting","exampleText":"Queue [10, 20, 30, 40, 50], K=3","exampleOutput":"--- Reverse First K Queue Elements ---\\nBefore: [ 10 20 30 40 50 ]\\nAfter (K=3): [ 30 20 10 40 50 ]","logicExplanation":"1. **Stack Dequeue**: Dequeue K items into stack.\\n2. **Stack Pop**: Pop stack items back into queue.","answerFile":"./answers/answer9.c","codeExplanation":"1. `reverse_first_k()`: Reverses first K queue items using stack buffer."},{"projectId":"STACK_QUEUE_010","title":"Stack Min Tracker in O(1) Time Complexity","difficulty":"Beginner","description":"Standard minimum searches take O(N) time. A Min Stack design tracks the minimum element in constant O(1) time using an auxiliary `min_stack` that records the running minimum at every push operation. In this project, you will build an O(1) Min Stack in C.","learningOutcome":"Auxiliary State Tracking, Running Minimum Invariants & O(1) Query Complexity","exampleText":"Push 18, 19, 29, 15","exampleOutput":"--- O(1) Min Stack Engine ---\\nCurrent Min: 15","logicExplanation":"1. **Dual Stack**: `main_stack` stores values, `min_stack` stores current min.\\n2. **Push Logic**: Push to `min_stack` if `val <= min_stack[top]`.","answerFile":"./answers/answer10.c","codeExplanation":"1. `push_min()` & `get_min()`: Maintains O(1) minimum query stack."},{"projectId":"STACK_QUEUE_011","title":"Infix to Postfix Expression Conversion Engine (Shunting-Yard Algorithm)","difficulty":"Intermediate","description":"Computers evaluate math expressions in Postfix (Reverse Polish Notation) to eliminate parenthesis ambiguity. Dijkstra\'s Shunting-Yard Algorithm converts Infix (`a+b*c`) to Postfix (`abc*+`) using an operator stack and precedence rules. In this project, you will build a Shunting-Yard Converter in C.","learningOutcome":"Shunting-Yard Algorithm, Operator Precedence Rules & Expression Parsing","exampleText":"Infix: a+b*(c^d-e)","exampleOutput":"--- Infix to Postfix Shunting-Yard ---\\nInfix  : a+b*(c^d-e)\\nPostfix: abcd^e-*+","logicExplanation":"1. **Operand**: Append directly to output.\\n2. **Operator**: Pop operators of higher/equal precedence to output, then push current operator.","answerFile":"./answers/answer11.c","codeExplanation":"1. `infix_to_postfix()`: Converts mathematical infix string to postfix RPN format."},{"projectId":"STACK_QUEUE_012","title":"Postfix Expression Evaluator using Stack","difficulty":"Intermediate","description":"Evaluating a Postfix expression (`231*+9-`) is performed using an operand stack. Scan tokens from left to right: if operand, push to stack; if operator, pop two operands, perform operation, and push result back. In this project, you will build a Postfix Evaluator in C.","learningOutcome":"Postfix RPN Evaluation, Stack Operand Operations & Compiler Expression Execution","exampleText":"Postfix: 231*+9-","exampleOutput":"--- Postfix Expression Evaluator ---\\nExpression: 231*+9-\\nEvaluated Result = -4","logicExplanation":"1. **Operand**: Push integer value to stack.\\n2. **Operator**: Pop `op2` and `op1`, compute `op1 op op2`, push result.","answerFile":"./answers/answer12.c","codeExplanation":"1. `evaluate_postfix()`: Computes mathematical value of postfix string."},{"projectId":"STACK_QUEUE_013","title":"Implement Queue using Two Stacks","difficulty":"Intermediate","description":"A FIFO Queue can be simulated using two LIFO Stacks (`stack_in` and `stack_out`). `enqueue` pushes to `stack_in`. `dequeue` pops from `stack_out`; if `stack_out` is empty, pop all items from `stack_in` into `stack_out` (reversing LIFO twice to recreate FIFO!). In this project, you will build a Queue from Two Stacks in C.","learningOutcome":"Double LIFO Inversion to FIFO, Amortized O(1) Operations & Dual Stack State","exampleText":"Enqueue 10, 20, Dequeue, Enqueue 30","exampleOutput":"--- Queue using Two Stacks ---\\nDequeued: 10\\nDequeued: 20","logicExplanation":"1. **Push**: Always push to `stack_in`.\\n2. **Pop**: If `stack_out` empty, transfer all from `stack_in` to `stack_out`, then pop `stack_out`.","answerFile":"./answers/answer13.c","codeExplanation":"1. `enqueue_q2s()` & `dequeue_q2s()`: Recreates FIFO queue behavior using 2 stacks."},{"projectId":"STACK_QUEUE_014","title":"Implement Stack using Two Queues","difficulty":"Intermediate","description":"A LIFO Stack can be simulated using two FIFO Queues. When pushing a new element into `q2`, dequeue all elements from `q1` into `q2`, then swap `q1` and `q2`. In this project, you will build a Stack from Two Queues in C.","learningOutcome":"FIFO to LIFO State Transformation, Queue Swapping & Functional Data Structure Simulation","exampleText":"Push 10, 20, 30, Pop","exampleOutput":"--- Stack using Two Queues ---\\nPopped: 30","logicExplanation":"1. **Push**: Enqueue `val` to `q2`, move all `q1` items to `q2`, swap `q1` & `q2`.\\n2. **Pop**: Dequeue from `q1`.","answerFile":"./answers/answer14.c","codeExplanation":"1. `push_s2q()` & `pop_s2q()`: Simulates LIFO stack using 2 queues."},{"projectId":"STACK_QUEUE_015","title":"Next Greater Element (NGE) using Monotonic Stack","difficulty":"Intermediate","description":"For each element in an array, find the first element to its right that is strictly greater. Brute force takes O(N^2) time. A Monotonic Decreasing Stack solves this in linear O(N) time! Iterate right-to-left, popping stack elements smaller than `arr[i]`. In this project, you will build a Monotonic NGE Engine in C.","learningOutcome":"Monotonic Stack Pattern, Linear O(N) Next Element Search & Stack Pruning","exampleText":"Input: [4, 5, 2, 25, 7, 18]","exampleOutput":"--- Next Greater Element (Monotonic Stack) ---\\nElement  4 → NGE = 5\\nElement  5 → NGE = 25\\nElement  2 → NGE = 25\\nElement 25 → NGE = -1","logicExplanation":"1. **Right-to-Left**: Loop `i` from `N-1` down to 0.\\n2. **Pop Smaller**: Pop stack while `stack[top] <= arr[i]`.\\n3. **Set NGE**: `NGE[i] = stack[top]`, then push `arr[i]`.","answerFile":"./answers/answer15.c","codeExplanation":"1. `next_greater_element()`: Computes NGE array using monotonic stack in O(N) time."},{"projectId":"STACK_QUEUE_016","title":"Daily Temperatures / Next Warmer Day Index Finder","difficulty":"Intermediate","description":"Given an array of daily temperatures, find how many days you have to wait until a warmer temperature occurs. In this project, you will build a Monotonic Stack Temperature Index Finder in C that stores indices on a stack to find index differences in linear O(N) time.","learningOutcome":"Monotonic Index Stacks, Temperature Span Calculations & Range Processing","exampleText":"Temperatures: [73, 74, 75, 71, 69, 72, 76, 73]","exampleOutput":"--- Daily Temperatures / Next Warmer Day ---\\nDays to wait: [ 1 1 4 2 1 1 0 0 ]","logicExplanation":"1. **Index Stack**: Store index `i` on stack.\\n2. **Warmer Day Check**: Pop index `prev` while `temp[i] > temp[prev]`, set `ans[prev] = i - prev`.","answerFile":"./answers/answer16.c","codeExplanation":"1. `daily_temperatures()`: Solves daily warmer temperature distance using monotonic index stack."},{"projectId":"STACK_QUEUE_017","title":"Circular Tour / Gas Station Circuit Finder","difficulty":"Intermediate","description":"Suppose you have N gas stations on a circular route. Station `i` provides `gas[i]` fuel, and travel to next station costs `cost[i]` fuel. Find the starting gas station index from which you can travel full circuit once without running out of fuel. In this project, you will build a Gas Station Circuit Finder in C operating in O(N) time.","learningOutcome":"Greedy Fuel Accumulation, Circular Route Optimization & O(N) Single-Pass Circuit Search","exampleText":"Gas [1, 2, 3, 4, 5], Cost [3, 4, 5, 1, 2]","exampleOutput":"--- Gas Station Circular Circuit ---\\nStarting Gas Station Index = 3","logicExplanation":"1. **Accumulate Surplus**: `curr_surplus += gas[i] - cost[i]`.\\n2. **Reset Point**: If `curr_surplus < 0`, reset `start = i + 1` and `curr_surplus = 0`.\\n3. **Global Check**: Valid if total gas >= total cost.","answerFile":"./answers/answer17.c","codeExplanation":"1. `can_complete_circuit()`: Finds starting gas station index for circular tour."},{"projectId":"STACK_QUEUE_018","title":"First Non-Repeating Character in a Stream of Characters","difficulty":"Intermediate","description":"Given a continuous stream of characters, find the first non-repeating character after reading each character. In this project, you will build a Stream Processor in C combining a FIFO queue (storing order of characters) and a frequency array.","learningOutcome":"Stream Data Processing, Queue & Frequency Table Combination & Real-Time Filtering","exampleText":"Stream: aabccxb","exampleOutput":"--- First Non-Repeating Character in Stream ---\\nRead \'a\' → First Non-Repeating: \'a\'\\nRead \'a\' → First Non-Repeating: -1\\nRead \'b\' → First Non-Repeating: \'b\'","logicExplanation":"1. **Frequency Tally**: Increment `freq[char]++`, enqueue `char`.\\n2. **Queue Pruning**: Pop queue front while `freq[front] > 1`.\\n3. **Result**: `q.front` is first non-repeating character.","answerFile":"./answers/answer18.c","codeExplanation":"1. `first_non_repeating()`: Tracks real-time non-repeating character in data stream."},{"projectId":"STACK_QUEUE_019","title":"Sort a Stack using a Temporary Auxiliary Stack","difficulty":"Intermediate","description":"Given an unsorted stack, sort its elements so that the smallest values are at the top using only ONE auxiliary stack (`tmp_stack`). In this project, you will build an In-Place Stack Sorting Engine in C operating in O(N^2) time.","learningOutcome":"In-Place Stack Insertion Sort, Auxiliary Stack Transfers & Sorting Invariants","exampleText":"Unsorted Stack [34, 3, 31, 98, 92, 23]","exampleOutput":"--- Sort Stack using Auxiliary Stack ---\\nSorted Stack (Top to Bottom): 3 23 31 34 92 98","logicExplanation":"1. **Pop Target**: Pop `temp` from main stack.\\n2. **Prune Aux**: Pop `tmp_stack` back into main stack while `tmp_stack[top] > temp`.\\n3. **Push Temp**: Push `temp` into `tmp_stack`.","answerFile":"./answers/answer19.c","codeExplanation":"1. `sort_stack()`: Sorts stack elements using auxiliary stack."},{"projectId":"STACK_QUEUE_020","title":"Sliding Window Maximum using Monotonic Double-Ended Queue","difficulty":"Intermediate","description":"Given an array and window size K, find maximum value in every sliding window of size K as it moves left to right. Brute force takes O(N * K) time. A Monotonic Deque stores indices of potential maximums in decreasing order, solving this in O(N) linear time! In this project, you will build a Monotonic Deque Sliding Window Engine in C.","learningOutcome":"Monotonic Deque Window Tracking, Linear O(N) Sliding Max & Queue Index Pruning","exampleText":"Array [1, 3, -1, -3, 5, 3, 6, 7], K=3","exampleOutput":"--- Sliding Window Maximum (Monotonic Deque) ---\\nWindow Maxima (K=3): [ 3 3 5 5 6 7 ]","logicExplanation":"1. **Out of Window**: Pop deque front if `deque[front] <= i - k`.\\n2. **Prune Smaller**: Pop deque rear while `arr[deque[rear]] <= arr[i]`.\\n3. **Window Max**: `arr[deque[front]]` is max for current window.","answerFile":"./answers/answer20.c","codeExplanation":"1. `sliding_window_max()`: Computes sliding window maximums in linear O(N) time."},{"projectId":"STACK_QUEUE_021","title":"Largest Rectangle in Histogram (Monotonic Stack Boundary Engine)","difficulty":"Advanced","description":"Given an array of heights representing a histogram, find the area of the largest rectangle that can be formed within the histogram bars. Brute force takes O(N^2) time. A Monotonic Increasing Stack finds left and right smaller boundaries for each bar in O(N) linear time! In this project, you will build a Monotonic Histogram Engine in C.","learningOutcome":"Monotonic Stack Histogram Analysis, Width/Height Boundary Calculations & O(N) Area Search","exampleText":"Heights: [2, 1, 5, 6, 2, 3]","exampleOutput":"--- Largest Rectangle in Histogram ---\\nMaximum Rectangular Area = 10","logicExplanation":"1. **Monotonic Stack**: Push bar indices maintaining increasing heights.\\n2. **Pop & Calculate**: When encountering smaller height `h`, pop `stack` and compute `area = height * (i - stack[top] - 1)`.\\n3. **Max Area**: Track global maximum area.","answerFile":"./answers/answer21.c","codeExplanation":"1. `largest_rectangle_area()`: Calculates maximum histogram rectangle in O(N) time."},{"projectId":"STACK_QUEUE_022","title":"Maximal Binary Matrix Rectangle Finder (2D Monotonic Stack)","difficulty":"Advanced","description":"Given a 2D binary matrix filled with 0s and 1s, find the largest rectangle containing only 1s and return its area. By converting each matrix row into a histogram of consecutive 1s and running 1D Largest Rectangle in Histogram for each row, this problem is solved in O(R * C) time! In this project, you will build a 2D Maximal Matrix Rectangle Finder in C.","learningOutcome":"2D Grid Matrix to Histogram Reduction, Monotonic Stack Integration & O(R*C) Matrix Search","exampleText":"4x4 Binary Grid Matrix","exampleOutput":"--- Maximal Rectangle in Binary Matrix ---\\nMaximal Rectangle Area = 6","logicExplanation":"1. **Row Histograms**: Accumulate height of consecutive 1s for each column.\\n2. **Run Histogram Area**: Execute 1D Largest Histogram Area on accumulated height array for each row.\\n3. **Global Max**: Return max area found across all rows.","answerFile":"./answers/answer22.c","codeExplanation":"1. `maximal_rectangle()`: Computes largest binary matrix rectangle in O(R * C) time."},{"projectId":"STACK_QUEUE_023","title":"Circular Buffer Ring (Lock-Free Producer-Consumer Thread Communication)","difficulty":"Advanced","description":"In operating systems, real-time audio streams, and multi-threaded systems, a Lock-Free Ring Buffer passes data between a Producer thread and a Consumer thread without mutex locks. Maintain `head` and `tail` atomic/volatile indices. In this project, you will build a Lock-Free Circular Ring Buffer in C.","learningOutcome":"Lock-Free Data Structures, Atomic Head/Tail Ring Buffers & Thread Communications","exampleText":"Push 100, 200 to Ring Buffer, Pop","exampleOutput":"--- Lock-Free Circular Ring Buffer ---\\nPopped from Ring: 100","logicExplanation":"1. **Head/Tail Volatile**: `head` moved by Producer, `tail` moved by Consumer.\\n2. **Lock-Free Check**: `(head + 1) % N == tail` means full; `head == tail` means empty.","answerFile":"./answers/answer23.c","codeExplanation":"1. `ring_push()` & `ring_pop()`: Implements lock-free circular ring buffer."},{"projectId":"STACK_QUEUE_024","title":"Expression Tree Construction & Postorder Evaluation Engine","difficulty":"Advanced","description":"Compilers convert Postfix expressions into binary Expression Trees where internal nodes are operators (`+`, `-`, `*`, `/`) and leaf nodes are operands. Postorder traversal evaluates the tree. In this project, you will build an Expression Tree Builder and Evaluator in C.","learningOutcome":"Expression Tree Data Structures, Postfix Tree Building & Recursive Evaluation","exampleText":"Postfix: 53+82/*","exampleOutput":"--- Expression Tree Construction & Evaluation ---\\nPostfix: 53+82/*\\nTree Evaluated Result = 32","logicExplanation":"1. **Build Tree**: Scan postfix; operands pushed to stack as leaf nodes; operators pop 2 subtrees and push operator node.\\n2. **Evaluate Tree**: Recursively evaluate left and right subtrees and compute operator.","answerFile":"./answers/answer24.c","codeExplanation":"1. `build_expression_tree()` & `eval_tree()`: Builds and evaluates binary expression tree."},{"projectId":"STACK_QUEUE_025","title":"Min-Max Stack & Queue (O(1) Time Min, Max, Push, Pop Engine)","difficulty":"Advanced","description":"Build an advanced Stack data structure that supports `push()`, `pop()`, `get_min()`, AND `get_max()` all in O(1) constant time complexity! Maintain parallel running minimum and running maximum stacks alongside main value stack. In this project, you will build a Min-Max Stack in C.","learningOutcome":"Dual Running Invariant Tracking, O(1) Min/Max Query Design & Multi-Stack Architecture","exampleText":"Push 10, 40, 5, 30","exampleOutput":"--- O(1) Min-Max Stack Engine ---\\nCurrent Min = 5, Current Max = 40","logicExplanation":"1. **Triple Stack Invariant**: `val_stack`, `min_stack`, `max_stack` updated simultaneously.\\n2. **State Updates**: `min_stack[top] = min(val, min_stack[top-1])`, `max_stack[top] = max(val, max_stack[top-1])`.","answerFile":"./answers/answer25.c","codeExplanation":"1. `push_minmax()`, `get_min()`, `get_max()`: Performs O(1) min and max stack tracking."}]'),c={projectCategory:D,subject:L,board:j,class:"Computer Science Core / BCA / B.Tech",tools:B,institute:U,projects:G};function V(){const[t,l]=u.useState(null);return u.useEffect(()=>{const i=Object.assign({"./topic6_files/answers/answer1.c":m,"./topic6_files/answers/answer10.c":f,"./topic6_files/answers/answer11.c":h,"./topic6_files/answers/answer12.c":_,"./topic6_files/answers/answer13.c":g,"./topic6_files/answers/answer14.c":x,"./topic6_files/answers/answer15.c":k,"./topic6_files/answers/answer16.c":w,"./topic6_files/answers/answer17.c":q,"./topic6_files/answers/answer18.c":v,"./topic6_files/answers/answer19.c":S,"./topic6_files/answers/answer2.c":y,"./topic6_files/answers/answer20.c":E,"./topic6_files/answers/answer21.c":b,"./topic6_files/answers/answer22.c":C,"./topic6_files/answers/answer23.c":I,"./topic6_files/answers/answer24.c":O,"./topic6_files/answers/answer25.c":T,"./topic6_files/answers/answer3.c":N,"./topic6_files/answers/answer4.c":A,"./topic6_files/answers/answer5.c":P,"./topic6_files/answers/answer6.c":M,"./topic6_files/answers/answer7.c":F,"./topic6_files/answers/answer8.c":Q,"./topic6_files/answers/answer9.c":R}),a={};Object.keys(i).forEach(n=>{const s=n.split("/").pop();a[s]=i[n]});const p=c.projects.map(n=>{const r=(n.answerFile||"").split("/").pop(),o=a[r];return o||console.warn(`⚠ Missing C answer file: ${r}`),{...n,answer:o||`// Source file "${r}" not found in answers folder`}});l({...c,projects:p})},[]),t?e.jsx(d,{data:t}):e.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{children:"Loading Stacks & Queues Practical Lab Projects..."})]})})}export{V as default};
