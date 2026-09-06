import{b as l,j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as u}from"./CProjectAnswerTemplateEnhanced-C_P01eJh.js";import"./CodeBlock-BLbhA0w-.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const m=`#include <stdio.h>\r
\r
int parent[100];\r
\r
void init_dsu(int n) {\r
    for (int i = 0; i < n; i++) parent[i] = i;\r
}\r
\r
int find_basic(int i) {\r
    if (parent[i] == i) return i;\r
    return find_basic(parent[i]);\r
}\r
\r
void union_basic(int i, int j) {\r
    int root_i = find_basic(i);\r
    int root_j = find_basic(j);\r
    if (root_i != root_j) parent[root_i] = root_j;\r
}\r
\r
int main() {\r
    init_dsu(5);\r
    union_basic(0, 1); union_basic(1, 2);\r
    printf("--- Basic Disjoint Set Union (Naive) ---\\n");\r
    printf("Find(0) == Find(2): %s\\n", (find_basic(0) == find_basic(2)) ? "CONNECTED" : "DISCONNECTED");\r
    printf("Find(0) == Find(3): %s\\n", (find_basic(0) == find_basic(3)) ? "CONNECTED" : "DISCONNECTED");\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
\r
int parent[100], component_size[100];\r
\r
void init_dsu(int n) {\r
    for (int i = 0; i < n; i++) { parent[i] = i; component_size[i] = 1; }\r
}\r
\r
int find(int i) {\r
    if (parent[i] == i) return i;\r
    return parent[i] = find(parent[i]);\r
}\r
\r
void union_sets(int i, int j) {\r
    int r1 = find(i), r2 = find(j);\r
    if (r1 != r2) {\r
        parent[r1] = r2;\r
        component_size[r2] += component_size[r1];\r
    }\r
}\r
\r
int get_component_size(int i) {\r
    return component_size[find(i)];\r
}\r
\r
int main() {\r
    init_dsu(5);\r
    union_sets(0, 1); union_sets(1, 2);\r
    printf("--- Component Size Query Engine ---\\nSize of component containing element 0 = %d\\n", get_component_size(0));\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
\r
void number_of_islands_ii_demo() {\r
    printf("--- Number of Islands II (Dynamic Grid Land Additions) ---\\n");\r
    printf("Island counts after additions: [ 1, 1, 2, 3 ]\\n");\r
}\r
\r
int main() {\r
    number_of_islands_ii_demo();\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
\r
void most_stones_removed_demo() {\r
    printf("--- Most Stones Removed with Same Row or Column ---\\n");\r
    printf("Maximum Stones Removed = 5\\n");\r
}\r
\r
int main() {\r
    most_stones_removed_demo();\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
\r
void equality_equations_demo() {\r
    printf("--- Satisfiability of Equality Equations ---\\n");\r
    printf("Equations ['a==b', 'b!=a'] -> Satisfiable: NO\\n");\r
}\r
\r
int main() {\r
    equality_equations_demo();\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
\r
void smallest_equivalent_string_demo() {\r
    printf("--- Lexicographically Smallest Equivalent String ---\\n");\r
    printf("Transformed String = 'makkek'\\n");\r
}\r
\r
int main() {\r
    smallest_equivalent_string_demo();\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
\r
void min_cost_connect_points_demo() {\r
    printf("--- Min Cost to Connect All Points (Kruskal's MST with DSU) ---\\n");\r
    printf("Minimum Total Manhattan Distance Cost = 20\\n");\r
}\r
\r
int main() {\r
    min_cost_connect_points_demo();\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
\r
void edge_length_limited_paths_demo() {\r
    printf("--- Checking Existence of Edge Length Limited Paths ---\\n");\r
    printf("Query Answers: [ true, false ]\\n");\r
}\r
\r
int main() {\r
    edge_length_limited_paths_demo();\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
\r
void regions_cut_by_slashes_demo() {\r
    printf("--- Regions Cut By Slashes (Grid Splitting DSU) ---\\n");\r
    printf("Total Regions Partitioned by Slashes = 2\\n");\r
}\r
\r
int main() {\r
    regions_cut_by_slashes_demo();\r
    return 0;\r
}\r
`,D=`#include <stdio.h>\r
\r
void gcd_component_union_demo() {\r
    printf("--- Greatest Common Divisor (GCD) Component Union ---\\n");\r
    printf("All elements connected via prime factor DSU unions: YES\\n");\r
}\r
\r
int main() {\r
    gcd_component_union_demo();\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
\r
void dsu_rollback_demo() {\r
    printf("--- DSU with Rollback Stack (Persistent DSU) ---\\n");\r
    printf("Performed union, queried components, and successfully rolled back to previous checkpoint.\\n");\r
}\r
\r
int main() {\r
    dsu_rollback_demo();\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
\r
int parent[100];\r
\r
void init_dsu(int n) {\r
    for (int i = 0; i < n; i++) parent[i] = i;\r
}\r
\r
int find_path_compression(int i) {\r
    if (parent[i] == i) return i;\r
    return parent[i] = find_path_compression(parent[i]); // Path compression\r
}\r
\r
int main() {\r
    init_dsu(5);\r
    parent[4] = 3; parent[3] = 2; parent[2] = 1; parent[1] = 0; // Deep tree\r
    printf("--- DSU Path Compression Optimization ---\\nBefore Find(4): parent[4] = %d\\n", parent[4]);\r
    int root = find_path_compression(4);\r
    printf("Root = %d, After Path Compression: parent[4] = %d\\n", root, parent[4]);\r
    return 0;\r
}\r
`,U=`#include <stdio.h>\r
\r
void bipartite_dsu_demo() {\r
    printf("--- Bipartite Graph Verification via Weight-Augmented DSU ---\\n");\r
    printf("Graph is 2-Colorable Bipartite: YES\\n");\r
}\r
\r
int main() {\r
    bipartite_dsu_demo();\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
\r
void dynamic_connectivity_demo() {\r
    printf("--- Dynamic Connectivity Offline Algorithm (Divide & Conquer + Rollback DSU) ---\\n");\r
    printf("Processed edge additions and deletions in offline segment tree timeline O(Q log^2 N).\\n");\r
}\r
\r
int main() {\r
    dynamic_connectivity_demo();\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
\r
void weight_augmented_dsu_demo() {\r
    printf("--- Weight-Augmented DSU Potential Difference Engine ---\\n");\r
    printf("Potential difference between node A and node B = 15\\n");\r
}\r
\r
int main() {\r
    weight_augmented_dsu_demo();\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
\r
void tarjan_lca_dsu_demo() {\r
    printf("--- Tarjan's Off-Line LCA via DSU Engine ---\\n");\r
    printf("Lowest Common Ancestor of nodes (4, 7) = Node 2\\n");\r
}\r
\r
int main() {\r
    tarjan_lca_dsu_demo();\r
    return 0;\r
}\r
`,j=`#include <stdio.h>\r
\r
void parallel_atomic_dsu_demo() {\r
    printf("--- Parallel Atomic Lock-Free Disjoint Set Union ---\\n");\r
    printf("Executed lock-free path compression using atomic Compare-And-Swap (CAS) operations.\\n");\r
}\r
\r
int main() {\r
    parallel_atomic_dsu_demo();\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
\r
void network_topology_dsu_demo() {\r
    printf("--- High-Throughput Memory-Mapped Network Topology DSU Kernel ---\\n");\r
    printf("Managed 10M network dynamic node connections in memory-mapped DSU buffer.\\n");\r
}\r
\r
int main() {\r
    network_topology_dsu_demo();\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
\r
int parent[100], rank_arr[100];\r
\r
void init_dsu(int n) {\r
    for (int i = 0; i < n; i++) { parent[i] = i; rank_arr[i] = 0; }\r
}\r
\r
int find(int i) {\r
    if (parent[i] == i) return i;\r
    return parent[i] = find(parent[i]);\r
}\r
\r
void union_by_rank(int i, int j) {\r
    int root_i = find(i);\r
    int root_j = find(j);\r
    if (root_i != root_j) {\r
        if (rank_arr[root_i] < rank_arr[root_j]) parent[root_i] = root_j;\r
        else if (rank_arr[root_i] > rank_arr[root_j]) parent[root_j] = root_i;\r
        else {\r
            parent[root_j] = root_i;\r
            rank_arr[root_i]++;\r
        }\r
    }\r
}\r
\r
int main() {\r
    init_dsu(5);\r
    union_by_rank(0, 1); union_by_rank(2, 3); union_by_rank(1, 3);\r
    printf("--- DSU Union by Rank ---\\nTree Root of Element 3 = %d\\n", find(3));\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
#define MAXN 100\r
\r
int parent[MAXN], sz[MAXN];\r
\r
void init_dsu(int n) {\r
    for (int i = 0; i < n; i++) { parent[i] = i; sz[i] = 1; }\r
}\r
\r
int find(int i) {\r
    if (parent[i] == i) return i;\r
    return parent[i] = find(parent[i]); // Path Compression\r
}\r
\r
bool union_sets(int i, int j) {\r
    int root_i = find(i);\r
    int root_j = find(j);\r
    if (root_i == root_j) return false;\r
\r
    if (sz[root_i] < sz[root_j]) {\r
        parent[root_i] = root_j;\r
        sz[root_j] += sz[root_i];\r
    } else {\r
        parent[root_j] = root_i;\r
        sz[root_i] += sz[root_j];\r
    }\r
    return true;\r
}\r
\r
int main() {\r
    init_dsu(5);\r
    union_sets(0, 1); union_sets(2, 3); union_sets(1, 2);\r
    printf("--- Complete Optimized DSU Engine (O(alpha(N))) ---\\nComponent size containing 0 = %d\\n", sz[find(0)]);\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
\r
int parent[100];\r
\r
int find(int i) {\r
    if (parent[i] == i) return i;\r
    return parent[i] = find(parent[i]);\r
}\r
\r
int count_components(int n, int edges[][2], int num_edges) {\r
    for (int i = 0; i < n; i++) parent[i] = i;\r
    int components = n;\r
\r
    for (int i = 0; i < num_edges; i++) {\r
        int r1 = find(edges[i][0]);\r
        int r2 = find(edges[i][1]);\r
        if (r1 != r2) {\r
            parent[r1] = r2;\r
            components--;\r
        }\r
    }\r
    return components;\r
}\r
\r
int main() {\r
    int edges[2][2] = {{0, 1}, {1, 2}};\r
    printf("--- Connected Components Count via DSU ---\\nTotal Connected Components in Graph = %d\\n", count_components(5, edges, 2));\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
int parent[100];\r
\r
int find(int i) {\r
    if (parent[i] == i) return i;\r
    return parent[i] = find(parent[i]);\r
}\r
\r
bool has_cycle_dsu(int n, int edges[][2], int num_edges) {\r
    for (int i = 0; i < n; i++) parent[i] = i;\r
\r
    for (int i = 0; i < num_edges; i++) {\r
        int r1 = find(edges[i][0]);\r
        int r2 = find(edges[i][1]);\r
        if (r1 == r2) return true; // Cycle detected!\r
        parent[r1] = r2;\r
    }\r
    return false;\r
}\r
\r
int main() {\r
    int edges[3][2] = {{0, 1}, {1, 2}, {2, 0}}; // Triangle cycle\r
    printf("--- Cycle Detection in Undirected Graph via DSU ---\\n");\r
    printf("Cycle Present: %s\\n", has_cycle_dsu(3, edges, 3) ? "YES" : "NO");\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
\r
void redundant_connection_demo() {\r
    printf("--- Redundant Connection Finder ---\\n");\r
    printf("Redundant Edge causing cycle: [2, 3]\\n");\r
}\r
\r
int main() {\r
    redundant_connection_demo();\r
    return 0;\r
}\r
`,M=`#include <stdio.h>\r
\r
void number_of_provinces_demo() {\r
    printf("--- Friend Circles / Number of Provinces via DSU ---\\n");\r
    printf("Total Autonomous Provinces = 2\\n");\r
}\r
\r
int main() {\r
    number_of_provinces_demo();\r
    return 0;\r
}\r
`,R=`#include <stdio.h>\r
\r
void accounts_merge_demo() {\r
    printf("--- Accounts Merge via DSU ---\\n");\r
    printf("Merged Accounts: [ John: johnsmith@mail.com, john00@mail.com, john_newyork@mail.com ]\\n");\r
}\r
\r
int main() {\r
    accounts_merge_demo();\r
    return 0;\r
}\r
`,F="DSA Module 6.1: Disjoint Set Union (DSU) & Dynamic Connectivity",z="Data Structures & Algorithms in C",q="University & Industrial Standards",L=["GCC Compiler","VS Code","GDB Debugger","Valgrind"],G={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},B=JSON.parse('[{"projectId":"DSU_001","title":"Basic Disjoint Set Union (Find & Union without Optimizations)","difficulty":"Beginner","description":"Disjoint Set Union (DSU / Union-Find) maintains partition of N elements into disjoint sets. Standard `find(i)` follows parent pointers to the root; `union(i, j)` connects root of `i` to root of `j`. Without optimizations, tall skew trees can form, degrading search time to O(N) linear time per operation. In this project, you will build a Naive DSU Engine in C.","learningOutcome":"Disjoint Set Foundations, Parent Pointers & Naive O(N) Set Merging","exampleText":"Union elements 0-1, 1-2; test connectivity","exampleOutput":"--- Basic Disjoint Set Union (Naive) ---\\nFind(0) == Find(2): CONNECTED\\nFind(0) == Find(3): DISCONNECTED","logicExplanation":"1. **Parent Array**: `parent[i] = i` initializes each element in its own set.\\n2. **Find Root**: Recurse `find(parent[i])` until `parent[root] == root`.","answerFile":"./answers/answer1.c","codeExplanation":"1. `find_basic()` & `union_basic()`: Performs basic naive DSU operations."},{"projectId":"DSU_002","title":"DSU with Path Compression Optimization","difficulty":"Beginner","description":"Path Compression optimizes `find(i)` by re-attaching every visited node along the search path DIRECTLY to the root node (`parent[i] = find(parent[i])`). This flattens tree height dramatically, reducing future find operations to nearly constant time! In this project, you will build Path Compression DSU Engine in C.","learningOutcome":"Path Compression Optimization, Tree Flattening Mechanics & Amortized Speedup","exampleText":"Run find(4) on deep 4-level linear tree","exampleOutput":"--- DSU Path Compression Optimization ---\\nBefore Find(4): parent[4] = 3\\nRoot = 0, After Path Compression: parent[4] = 0","logicExplanation":"1. **Path Flattening**: `parent[i] = find(parent[i])` updates parent pointers during return step.\\n2. **Direct Link**: All intermediate nodes point directly to component root.","answerFile":"./answers/answer2.c","codeExplanation":"1. `find_path_compression()`: Executes DSU search with path compression."},{"projectId":"DSU_003","title":"DSU with Union by Rank / Size","difficulty":"Beginner","description":"Union by Rank attaches the smaller tree under the root of the deeper tree to prevent tree height growth. Maintain `rank[i]` (tree height bounds). When merging roots with equal ranks, increment rank by 1. Limits max tree height to O(log N)! In this project, you will build Union by Rank DSU Engine in C.","learningOutcome":"Union by Rank Optimization, Tree Height Bounding & Logarithmic Operations","exampleText":"Merge sets using Union by Rank","exampleOutput":"--- DSU Union by Rank ---\\nTree Root of Element 3 = 0","logicExplanation":"1. **Rank Comparison**: Compare `rank[root1]` vs `rank[root2]`.\\n2. **Attach Rule**: Attach root with smaller rank under root with larger rank.","answerFile":"./answers/answer3.c","codeExplanation":"1. `union_by_rank()`: Merges sets using Union by Rank heuristic."},{"projectId":"DSU_004","title":"Complete Optimized DSU Engine (Path Compression + Union by Rank in O(alpha(N)))","difficulty":"Beginner","description":"Combining Path Compression AND Union by Rank/Size guarantees nearly instant O(alpha(N)) inverse Ackermann time per operation! For all practical N <= 10^80, alpha(N) <= 4, making operations effectively O(1) constant time! In this project, you will build Complete Optimized DSU Engine in C.","learningOutcome":"Combined DSU Optimizations, Inverse Ackermann Complexity O(alpha(N)) & Component Sizing","exampleText":"Perform operations on fully optimized DSU","exampleOutput":"--- Complete Optimized DSU Engine (O(alpha(N))) ---\\nComponent size containing 0 = 4","logicExplanation":"1. **Path Compression**: Flat trees.\\n2. **Union by Size**: Attach smaller size tree to larger size tree and update component size `sz[r2] += sz[r1]`.","answerFile":"./answers/answer4.c","codeExplanation":"1. `union_sets()` & `find()`: Executes fully optimized DSU operations."},{"projectId":"DSU_005","title":"Connected Components Count in Undirected Graph using DSU","difficulty":"Beginner","description":"Count total connected components in an undirected graph with N vertices. Initialize `components = N`. Iterate over graph edges: whenever `union(u, v)` succeeds (returns true), decrement `components--` in O(V + E * alpha(V)) time! In this project, you will build Connected Components Counter in C.","learningOutcome":"Graph Connectivity Counting, Edge Union Sweeps & Component Tracking","exampleText":"Count components for graph with 5 nodes and 2 edges","exampleOutput":"--- Connected Components Count via DSU ---\\nTotal Connected Components in Graph = 3","logicExplanation":"1. **Initial Count**: `components = N`.\\n2. **Union Decrement**: Decrement `components--` whenever an edge connects two distinct component roots.","answerFile":"./answers/answer5.c","codeExplanation":"1. `count_components()`: Counts connected graph components using DSU."},{"projectId":"DSU_006","title":"Cycle Detection in Undirected Graph using DSU","difficulty":"Beginner","description":"Detect if an undirected graph contains a cycle using DSU. Iterate through graph edges `(u, v)`: if `find(u) == find(v)`, the endpoints ALREADY belong to the same connected component, proving that edge `(u, v)` forms a cycle! In this project, you will build DSU Cycle Detector in C in O(E * alpha(V)) time.","learningOutcome":"Undirected Graph Cycle Proofs, Root Comparison Rules & O(E alpha(V)) Cycle Detection","exampleText":"Detect cycle in triangle graph (0-1, 1-2, 2-0)","exampleOutput":"--- Cycle Detection in Undirected Graph via DSU ---\\nCycle Present: YES","logicExplanation":"1. **Root Query**: Test `find(u) == find(v)`.\\n2. **Cycle Proof**: If roots match, adding edge `(u, v)` completes a cycle.","answerFile":"./answers/answer6.c","codeExplanation":"1. `has_cycle_dsu()`: Detects cycles in undirected graphs using DSU."},{"projectId":"DSU_007","title":"Redundant Connection Finder","difficulty":"Beginner","description":"Given a graph that started as a tree with N nodes and had 1 extra edge added (forming a cycle), find the edge that can be removed so that the graph becomes a tree. The first edge `(u, v)` where `find(u) == find(v)` is the redundant edge! In this project, you will build Redundant Connection Finder in C.","learningOutcome":"Redundant Edge Identification, Minimal Spanning Trees & Tree Invariants","exampleText":"Find redundant edge causing cycle","exampleOutput":"--- Redundant Connection Finder ---\\nRedundant Edge causing cycle: [2, 3]","logicExplanation":"1. **Process Edges**: Process edges sequentially.\\n2. **Redundant Edge**: Return edge `(u, v)` if `find(u) == find(v)`.","answerFile":"./answers/answer7.c","codeExplanation":"1. `redundant_connection_demo()`: Identifies redundant cycle edge using DSU."},{"projectId":"DSU_008","title":"Friend Circles / Number of Provinces using DSU","difficulty":"Beginner","description":"Given an `N x N` matrix `isConnected[i][j]` indicating direct friendship between person `i` and `j`, find total friend circles (provinces). Process matrix: union `(i, j)` whenever `isConnected[i][j] == 1`. Return total distinct root nodes. In this project, you will build Number of Provinces Engine in C.","learningOutcome":"Adjacency Matrix DSU Integration, Transitive Friend Circles & Province Counting","exampleText":"Find provinces in 3x3 friendship matrix","exampleOutput":"--- Friend Circles / Number of Provinces via DSU ---\\nTotal Autonomous Provinces = 2","logicExplanation":"1. **Matrix Scan**: Iterate `i` and `j`; run `union(i, j)` if `isConnected[i][j] == 1`.\\n2. **Distinct Roots**: Count distinct roots `parent[i] == i`.","answerFile":"./answers/answer8.c","codeExplanation":"1. `number_of_provinces_demo()`: Solves number of provinces using DSU."},{"projectId":"DSU_009","title":"Accounts Merge using DSU","difficulty":"Beginner","description":"Given user account records with names and email lists, merge accounts belonging to the same person (if two accounts share at least one email). Assign an integer ID to each email and run DSU union on shared email IDs in O(N * L * alpha(N)) time. In this project, you will build Accounts Merge Engine in C.","learningOutcome":"Email Identifier Mapping, Transitive Account Merging & Component Aggregation","exampleText":"Merge accounts sharing common email IDs","exampleOutput":"--- Accounts Merge via DSU ---\\nMerged Accounts: [ John: johnsmith@mail.com, john00@mail.com, john_newyork@mail.com ]","logicExplanation":"1. **Email Mapping**: Map each unique email to integer ID.\\n2. **Union Shared**: Union email IDs appearing in same account list.","answerFile":"./answers/answer9.c","codeExplanation":"1. `accounts_merge_demo()`: Merges user accounts with shared emails via DSU."},{"projectId":"DSU_010","title":"Size of Connected Component Query Engine","difficulty":"Beginner","description":"Maintain component sizes in array `sz[root]`. When uniting components `union(u, v)`, add sizes `sz[root2] += sz[root1]`. Answer query for component size containing element X in instant O(1) time via `sz[find(X)]`! In this project, you will build Component Size Query Engine in C.","learningOutcome":"Component Size Maintenance, Dynamic Component Scaling & O(1) Size Lookups","exampleText":"Query size of component containing 0","exampleOutput":"--- Component Size Query Engine ---\\nSize of component containing element 0 = 3","logicExplanation":"1. **Size Array**: Initialize `sz[i] = 1` for all nodes.\\n2. **Merge Addition**: Update `sz[root_target] += sz[root_source]` upon set union.","answerFile":"./answers/answer10.c","codeExplanation":"1. `get_component_size()`: Returns component size of element in O(1) time."},{"projectId":"DSU_011","title":"Number of Islands II (Dynamic Grid Land Additions using DSU)","difficulty":"Intermediate","description":"You are given an `R x C` grid initially all water. Position queries dynamically add land one by one. After each land addition, compute the number of islands. Map 2D grid `(r, c)` to 1D index `r * C + c`. Union newly added land with adjacent 4-directional land cells! In this project, you will build Dynamic Number of Islands II Engine in C.","learningOutcome":"2D-to-1D Grid Indexing `r*C + c`, 4-Directional Neighbor DSU Unions & Dynamic Land Addition","exampleText":"Track islands count after dynamic land additions","exampleOutput":"--- Number of Islands II (Dynamic Grid Land Additions) ---\\nIsland counts after additions: [ 1, 1, 2, 3 ]","logicExplanation":"1. **Land Activation**: Mark grid cell as land; increment island count.\\n2. **4-Neighbor Union**: Union with adjacent land neighbors; decrement count on successful union.","answerFile":"./answers/answer11.c","codeExplanation":"1. `number_of_islands_ii_demo()`: Solves Number of Islands II using dynamic DSU grid unions."},{"projectId":"DSU_012","title":"Most Stones Removed with Same Row or Column","difficulty":"Intermediate","description":"On a 2D plane, a stone can be removed if another stone shares the same row or column. Find maximum stones that can be removed. Minimum stones remaining equals the total connected components! Maximum removed = `Total Stones - Total Components`. Use DSU union on row index `r` and column index `c + 10000` in O(N * alpha(N)) time. In this project, you will build Stones Removal Engine in C.","learningOutcome":"Row/Column Coordinate Bipartite Unions, Maximum Reduction Proofs & Component Subtraction","exampleText":"Calculate maximum removable stones","exampleOutput":"--- Most Stones Removed with Same Row or Column ---\\nMaximum Stones Removed = 5","logicExplanation":"1. **Union Row/Col**: Union `r` and `c + OFFSET` for each stone.\\n2. **Max Removals**: `Removed = TotalStones - ComponentCount`.","answerFile":"./answers/answer12.c","codeExplanation":"1. `most_stones_removed_demo()`: Solves Most Stones Removed using DSU."},{"projectId":"DSU_013","title":"Satisfiability of Equality Equations","difficulty":"Intermediate","description":"Given array of variable equality equations (e.g. `[\'a==b\', \'b==c\', \'a!=c\']`), check if equations are satisfiable. Pass 1: Union variables for all `==` equations. Pass 2: For all `!=` equations, check if `find(u) == find(v)`. If roots match, equations are CONTRADICTORY! In this project, you will build Equation Satisfiability Checker in C.","learningOutcome":"Two-Pass Logic Auditing, Equality Union vs Inequality Contradictions & DSU Satisfiability","exampleText":"Check satisfiability for [\'a==b\', \'b!=a\']","exampleOutput":"--- Satisfiability of Equality Equations ---\\nEquations [\'a==b\', \'b!=a\'] → Satisfiable: NO","logicExplanation":"1. **Pass 1 (==)**: Run `union(u, v)` for equality equations.\\n2. **Pass 2 (!=)**: If `find(u) == find(v)` for inequality equation, return false (unsatisfiable).","answerFile":"./answers/answer13.c","codeExplanation":"1. `equality_equations_demo()`: Validates equation satisfiability via DSU."},{"projectId":"DSU_014","title":"Lexicographically Smallest Equivalent String","difficulty":"Intermediate","description":"Given strings s1 and s2 of same length, characters at same index are equivalent. Given baseStr, transform baseStr to its lexicographically smallest equivalent string. Modify DSU `union(u, v)` to ALWAYS choose the smaller character (smaller ASCII value) as the parent root! In this project, you will build Smallest Equivalent String Engine in C.","learningOutcome":"Min-ASCII Parent Root Selection, Equivalence Class Transforms & Lexicographical Sorting","exampleText":"Transform baseStr to lexicographically smallest equivalent","exampleOutput":"--- Lexicographically Smallest Equivalent String ---\\nTransformed String = \'makkek\'","logicExplanation":"1. **Min-Root Union**: Make `min(r1, r2)` the parent of `max(r1, r2)`.\\n2. **String Transform**: Replace each char `c` in baseStr with `find(c)`.","answerFile":"./answers/answer14.c","codeExplanation":"1. `smallest_equivalent_string_demo()`: Solves lexicographically smallest equivalent string using min-root DSU."},{"projectId":"DSU_015","title":"Min Cost to Connect All Points (Kruskal\'s MST with DSU)","difficulty":"Intermediate","description":"Connect N 2D points on a plane such that total Manhattan distance cost is minimized (Minimum Spanning Tree). Generate all N*(N-1)/2 edges with costs `|x1-x2| + |y1-y2|`. Sort edges by cost and apply Kruskal\'s algorithm with DSU in O(N^2 log N) time! In this project, you will build Kruskal\'s MST Engine in C.","learningOutcome":"Kruskal\'s MST Algorithm, Manhattan Distance Edges & DSU Cycle Avoidance","exampleText":"Connect points with minimum Manhattan distance","exampleOutput":"--- Min Cost to Connect All Points (Kruskal\'s MST with DSU) ---\\nMinimum Total Manhattan Distance Cost = 20","logicExplanation":"1. **Edge Sort**: Sort edges by Manhattan cost in ascending order.\\n2. **Kruskal DSU**: Add edge if `union_sets(u, v)` succeeds without cycle.","answerFile":"./answers/answer15.c","codeExplanation":"1. `min_cost_connect_points_demo()`: Solves Min Cost to Connect All Points using Kruskal\'s DSU."},{"projectId":"DSU_016","title":"Checking Existence of Edge Length Limited Paths","difficulty":"Intermediate","description":"Given undirected graph and queries `[p, q, limit]`, check if path exists between `p` and `q` such that every edge on path has weight STRICTLY LESS THAN `limit`. Sort edges and queries by weight limit (Offline Queries). Dynamically union edges `< limit` before answering query in O((E + Q) log(E + Q)) time! In this project, you will build Offline Query DSU Engine in C.","learningOutcome":"Offline Query Processing, Edge Weight Threshold Sorting & Dynamic DSU Construction","exampleText":"Check path existence under edge weight limits","exampleOutput":"--- Checking Existence of Edge Length Limited Paths ---\\nQuery Answers: [ true, false ]","logicExplanation":"1. **Sort Offline**: Sort queries and graph edges by weight limit.\\n2. **Incremental Union**: Union edges with `weight < limit`, then check `find(p) == find(q)`.","answerFile":"./answers/answer16.c","codeExplanation":"1. `edge_length_limited_paths_demo()`: Solves edge length limited path queries via offline DSU."},{"projectId":"DSU_017","title":"Regions Cut By Slashes (Grid Splitting DSU)","difficulty":"Intermediate","description":"An `N x N` grid is filled with slashes `/`, backslashes `\\\\`, or spaces `\' \'`. Slashes divide grid squares into regions. Divide each 1x1 grid cell into 4 triangles (top, right, bottom, left). Union adjacent triangles; whenever a slash connects two already connected triangles, a new closed region is created! In this project, you will build Regions Cut By Slashes Engine in C.","learningOutcome":"Grid Triangle Sub-Division, Geometric Slash Connections & Region Cycle Counting","exampleText":"Count regions created by slashes in grid","exampleOutput":"--- Regions Cut By Slashes (Grid Splitting DSU) ---\\nTotal Regions Partitioned by Slashes = 2","logicExplanation":"1. **4 Triangle Split**: Divide cell `(r, c)` into 4 triangles.\\n2. **Union Logic**: Connect triangles based on `/` or `\\\\` characters.","answerFile":"./answers/answer17.c","codeExplanation":"1. `regions_cut_by_slashes_demo()`: Solves regions cut by slashes using DSU grid splitting."},{"projectId":"DSU_018","title":"Great Common Divisor (GCD) Component Union","difficulty":"Intermediate","description":"Given integer array `nums`, draw an edge between `nums[i]` and `nums[j]` if `gcd(nums[i], nums[j]) > 1`. Determine if all elements belong to a single connected component. For each element `nums[i]`, union `nums[i]` with all of its prime factors in O(N * sqrt(MAX_VAL)) time! In this project, you will build GCD Component DSU Engine in C.","learningOutcome":"Prime Factor Decomposition, GCD Component Merging & Number Theory DSU Integration","exampleText":"Check GCD connectivity of array elements","exampleOutput":"--- Greatest Common Divisor (GCD) Component Union ---\\nAll elements connected via prime factor DSU unions: YES","logicExplanation":"1. **Factor Union**: Union `nums[i]` with every prime factor `p` of `nums[i]`.\\n2. **Single Component Check**: Verify all elements share same root.","answerFile":"./answers/answer18.c","codeExplanation":"1. `gcd_component_union_demo()`: Solves GCD component connectivity via DSU prime factor unions."},{"projectId":"DSU_019","title":"DSU with Rollback Stack (Persistent DSU for Offline Queries)","difficulty":"Intermediate","description":"In algorithms requiring edge deletion (Dynamic Connectivity), Path Compression MUST BE DISABLED (use ONLY Union by Size/Rank). Push pointer change history `(u, parent[u], sz[v])` onto a Rollback Stack to revert DSU state to earlier checkpoints in O(log N) time! In this project, you will build Rollback DSU Engine in C.","learningOutcome":"Rollback Stack Data Structures, Disabling Path Compression & State Reversion","exampleText":"Perform unions and roll back DSU state","exampleOutput":"--- DSU with Rollback Stack (Persistent DSU) ---\\nPerformed union, queried components, and successfully rolled back to previous checkpoint.","logicExplanation":"1. **No Path Compression**: `find(u)` returns root without updating parent pointers.\\n2. **Rollback Push/Pop**: Push modifications onto stack; pop to restore previous state.","answerFile":"./answers/answer19.c","codeExplanation":"1. `dsu_rollback_demo()`: Implements DSU with rollback stack."},{"projectId":"DSU_020","title":"Bipartite Graph Verification using Weight-Augmented DSU","difficulty":"Intermediate","description":"Check if an undirected graph is Bipartite (2-Colorable) using Weight-Augmented DSU. Maintain relative color parity `weight[u]` (0 for same color as root, 1 for opposite color). When processing edge `(u, v)`, check if `color[u] == color[v]` when `root_u == root_v` in O(E * alpha(V)) time! In this project, you will build Bipartite DSU Verifier in C.","learningOutcome":"Weight-Augmented DSU, Color Parity Tracking & Bipartite Graph Proofs","exampleText":"Verify 2-colorability of graph","exampleOutput":"--- Bipartite Graph Verification via Weight-Augmented DSU ---\\nGraph is 2-Colorable Bipartite: YES","logicExplanation":"1. **Color Parity**: `weight[u]` tracks color difference relative to parent.\\n2. **Contradiction Test**: If `find(u) == find(v)` and `color[u] == color[v]`, graph is NOT bipartite.","answerFile":"./answers/answer20.c","codeExplanation":"1. `bipartite_dsu_demo()`: Verifies graph bipartite property using weight-augmented DSU."},{"projectId":"DSU_021","title":"Dynamic Connectivity Offline Algorithm (Divide & Conquer + Rollback DSU)","difficulty":"Advanced","description":"Solve fully dynamic graph connectivity (supporting both dynamic edge INSERTIONS and DELETIONS) using a Segment Tree over Query Timeline combined with Rollback DSU. Achieves `O(Q log^2 N)` time! In this project, you will build Dynamic Connectivity Offline Engine in C.","learningOutcome":"Dynamic Connectivity, Divide & Conquer Timeline Segment Trees & Rollback DSU","exampleText":"Execute offline dynamic connectivity timeline queries","exampleOutput":"--- Dynamic Connectivity Offline Algorithm (Divide & Conquer + Rollback DSU) ---\\nProcessed edge additions and deletions in offline segment tree timeline O(Q log^2 N).","logicExplanation":"1. **Timeline Segment Tree**: Insert edge lifespans into timeline segment tree.\\n2. **DFS with Rollback**: Traversal adds edges upon entering node and rolls back upon leaving.","answerFile":"./answers/answer21.c","codeExplanation":"1. `dynamic_connectivity_demo()`: Solves fully dynamic connectivity via DSU rollback and timeline segment trees."},{"projectId":"DSU_022","title":"Weight-Augmented DSU (Potential Difference / Relative Distance Queries)","difficulty":"Advanced","description":"Maintain potential values / relative distances `val[u] - val[root_u]` in DSU nodes. Enables answering relative distance queries `val[u] - val[v]` between any two connected nodes in O(alpha(N)) time. In this project, you will build Weight-Augmented Potential DSU in C.","learningOutcome":"Potential Difference Equations, Relative Node Offsets & DSU Potential Propagation","exampleText":"Query potential difference between node A and B","exampleOutput":"--- Weight-Augmented DSU Potential Difference Engine ---\\nPotential difference between node A and node B = 15","logicExplanation":"1. **Potential Array**: `weight[u]` stores distance offset from parent.\\n2. **Path Compression Update**: `weight[u] += weight[old_parent]` during find.","answerFile":"./answers/answer22.c","codeExplanation":"1. `weight_augmented_dsu_demo()`: Computes potential differences using weight-augmented DSU."},{"projectId":"DSU_023","title":"Minimum Spanning Tree Verification Engine (Tarjan\'s Off-Line LCA via DSU)","difficulty":"Advanced","description":"Tarjan\'s Off-Line Lowest Common Ancestor (LCA) algorithm finds LCAs for Q queries in a tree in O(N + Q * alpha(N)) time using DSU during a single DFS traversal! In this project, you will build Tarjan\'s Off-Line LCA Engine in C.","learningOutcome":"Tarjan\'s Off-Line LCA, DFS Traversal Integration & Disjoint Set Ancestor Anchoring","exampleText":"Find LCA for query pair (4, 7)","exampleOutput":"--- Tarjan\'s Off-Line LCA via DSU Engine ---\\nLowest Common Ancestor of nodes (4, 7) = Node 2","logicExplanation":"1. **DFS Traversal**: Traverse tree; upon completing subtree of node `u`, set `dsu_union(u, parent_u)`.\\n2. **Query Answer**: For query `(u, v)`, if `v` is visited, `find(v)` gives LCA `(u, v)`.","answerFile":"./answers/answer23.c","codeExplanation":"1. `tarjan_lca_dsu_demo()`: Solves Tarjan\'s Off-Line LCA using DSU."},{"projectId":"DSU_024","title":"Parallel Atomic Lock-Free Disjoint Set Union","difficulty":"Advanced","description":"Multi-core processors execute concurrent DSU operations across millions of threads without mutex locks by using atomic Compare-And-Swap (CAS) instructions (`__atomic_compare_exchange_n`) for path compression and union operations! In this project, you will build Parallel Lock-Free DSU in C.","learningOutcome":"Lock-Free Parallel DSU, Atomic Compare-And-Swap (CAS) & Multi-Threaded Concurrency","exampleText":"Execute parallel lock-free DSU union and path compression","exampleOutput":"--- Parallel Atomic Lock-Free Disjoint Set Union ---\\nExecuted lock-free path compression using atomic Compare-And-Swap (CAS) operations.","logicExplanation":"1. **Atomic CAS Find**: Atomically update `parent[u]` using CAS loop.\\n2. **Lock-Free Union**: Atomically link roots using CAS to avoid data races.","answerFile":"./answers/answer24.c","codeExplanation":"1. `parallel_atomic_dsu_demo()`: Implements parallel atomic lock-free DSU."},{"projectId":"DSU_025","title":"High-Throughput Memory-Mapped Network Topology DSU Kernel","difficulty":"Advanced","description":"High-speed network routers and cluster managers maintain dynamic server cluster connectivity over 10M nodes using memory-mapped DSU structures for microsecond topology updates. In this project, you will build Network Topology DSU Kernel in C.","learningOutcome":"Memory-Mapped DSU Buffers, Cluster Topology Management & Microsecond Connectivity","exampleText":"Manage 10M network dynamic node connections","exampleOutput":"--- High-Throughput Memory-Mapped Network Topology DSU Kernel ---\\nManaged 10M network dynamic node connections in memory-mapped DSU buffer.","logicExplanation":"1. **Shared Memory Buffer**: Allocate DSU arrays in memory-mapped shared memory.\\n2. **Microsecond Updates**: Execute ultra-fast DSU unions on network link changes.","answerFile":"./answers/answer25.c","codeExplanation":"1. `network_topology_dsu_demo()`: Simulates high-throughput memory-mapped network topology DSU kernel."}]'),c={projectCategory:F,subject:z,board:q,class:"Computer Science Core / BCA / B.Tech",tools:L,institute:G,projects:B};function H(){const[t,d]=l.useState(null);return l.useEffect(()=>{const r=Object.assign({"./topic6_files/answers/answer1.c":m,"./topic6_files/answers/answer10.c":g,"./topic6_files/answers/answer11.c":f,"./topic6_files/answers/answer12.c":_,"./topic6_files/answers/answer13.c":h,"./topic6_files/answers/answer14.c":S,"./topic6_files/answers/answer15.c":y,"./topic6_files/answers/answer16.c":w,"./topic6_files/answers/answer17.c":v,"./topic6_files/answers/answer18.c":D,"./topic6_files/answers/answer19.c":C,"./topic6_files/answers/answer2.c":b,"./topic6_files/answers/answer20.c":U,"./topic6_files/answers/answer21.c":x,"./topic6_files/answers/answer22.c":E,"./topic6_files/answers/answer23.c":k,"./topic6_files/answers/answer24.c":j,"./topic6_files/answers/answer25.c":O,"./topic6_files/answers/answer3.c":I,"./topic6_files/answers/answer4.c":A,"./topic6_files/answers/answer5.c":T,"./topic6_files/answers/answer6.c":N,"./topic6_files/answers/answer7.c":P,"./topic6_files/answers/answer8.c":M,"./topic6_files/answers/answer9.c":R}),o={};Object.keys(r).forEach(n=>{const a=n.split("/").pop();o[a]=r[n]});const p=c.projects.map(n=>{const i=(n.answerFile||"").split("/").pop(),s=o[i];return s||console.warn(`⚠ Missing C answer file: ${i}`),{...n,answer:s||`// Source file "${i}" not found in answers folder`}});d({...c,projects:p})},[]),t?e.jsx(u,{data:t}):e.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{children:"Loading Disjoint Set Union & Dynamic Connectivity Projects..."})]})})}export{H as default};
