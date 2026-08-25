import{b as o,j as e,bg as c}from"./vendor-react-core-Doz9nIC6.js";import{P as r}from"./PythonFileLoader-hCi5osN-.js";import{P as u}from"./PlainTextPrint-C08xhKA4.js";import{F as m}from"./FAQTemplate-CkSqDH4B.js";import{T as h}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const x=`# ====================================================================\r
# Topic 18: Real-World Use Cases (Unique Users, Tags, Permissions)\r
# File: unique_active_users_tracker.py\r
# Description: Real-time unique active user tracking and DAU analytics\r
# ====================================================================\r
\r
# Simulated user session stream (User IDs logging into Kolkata Educational Portal)\r
daily_login_events = [\r
    "USR-BP-101", "USR-KOL-202", "USR-BP-101", "USR-ICH-303",\r
    "USR-KOL-202", "USR-JAD-404", "USR-BP-101", "USR-KOL-505"\r
]\r
\r
print(f"Total Login Events Received Today: {len(daily_login_events)}")\r
\r
# 1. Real-time unique active user tracking via Set\r
daily_active_users = set(daily_login_events)\r
\r
print(f"\\n--- Daily Active Users (DAU) Summary ---")\r
print(f"Total Unique Users Logged In: {len(daily_active_users)}")\r
for uid in sorted(daily_active_users):\r
    print(f"  ✓ User ID: {uid}")\r
\r
# 2. Tracking Daily Returning vs New Users across two days\r
day1_users = {"USR-BP-101", "USR-KOL-202", "USR-ICH-303"}\r
day2_users = {"USR-BP-101", "USR-KOL-202", "USR-JAD-404", "USR-KOL-505"}\r
\r
returning_users = day1_users & day2_users\r
new_users = day2_users - day1_users\r
churned_users = day1_users - day2_users\r
\r
print(f"\\n--- Cohort Retention Metrics ---")\r
print(f"Returning Users (Day 1 ∩ Day 2): {returning_users}")\r
print(f"New Users Acquired (Day 2 - Day 1): {new_users}")\r
print(f"Churned / Inactive Users (Day 1 - Day 2): {churned_users}")\r
`,f=`# ====================================================================\r
# Topic 18: Real-World Use Cases (Unique Users, Tags, Permissions)\r
# File: tag_filtering_engine.py\r
# Description: E-Commerce Product Multi-Tag Search & Filtering Engine in ₹\r
# ====================================================================\r
\r
# Product Catalog in Barrackpore & Kolkata Institute\r
courses_catalog = [\r
    {\r
        "id": "CRS-101",\r
        "title": "Python for Beginners",\r
        "fee_inr": 4500,\r
        "tags": {"python", "beginner", "backend", "online"}\r
    },\r
    {\r
        "id": "CRS-102",\r
        "title": "FastAPI & Microservices Mastery",\r
        "fee_inr": 7500,\r
        "tags": {"python", "advanced", "backend", "fastapi", "docker"}\r
    },\r
    {\r
        "id": "CRS-103",\r
        "title": "React & Tailwind Frontend Bootcamp",\r
        "fee_inr": 5500,\r
        "tags": {"javascript", "frontend", "react", "tailwind", "online"}\r
    },\r
    {\r
        "id": "CRS-104",\r
        "title": "Fullstack AI Engineer Pro",\r
        "fee_inr": 12500,\r
        "tags": {"python", "advanced", "ai", "machine-learning", "backend", "docker"}\r
    }\r
]\r
\r
def search_courses_all_tags(required_tags: set):\r
    """AND Query: Returns courses containing ALL searched tags (Subset logic)."""\r
    return [c for c in courses_catalog if required_tags <= c["tags"]]\r
\r
def search_courses_any_tag(search_tags: set):\r
    """OR Query: Returns courses containing ANY searched tag (Intersection logic)."""\r
    return [c for c in courses_catalog if not search_tags.isdisjoint(c["tags"])]\r
\r
\r
# 1. User searches for courses with BOTH "python" AND "backend" (AND match)\r
query_and = {"python", "backend"}\r
matched_and = search_courses_all_tags(query_and)\r
print(f"--- Courses with ALL tags {query_and} (AND Match) ---")\r
for c in matched_and:\r
    print(f"  • {c['title']} (₹{c['fee_inr']:,})")\r
\r
# 2. User searches for courses with EITHER "react" OR "ai" (OR match)\r
query_or = {"react", "ai"}\r
matched_or = search_courses_any_tag(query_or)\r
print(f"\\n--- Courses with ANY tag {query_or} (OR Match) ---")\r
for c in matched_or:\r
    print(f"  • {c['title']} (₹{c['fee_inr']:,})")\r
`,p=`# ====================================================================\r
# Topic 18: Real-World Use Cases (Unique Users, Tags, Permissions)\r
# File: enterprise_rbac_guard.py\r
# Description: Enterprise Role-Based Access Control (RBAC) Security System\r
# ====================================================================\r
\r
# Role-to-Permissions Mapping (Immutable Frozensets)\r
ROLE_PERMISSIONS = {\r
    "STUDENT": frozenset({"VIEW_COURSE", "SUBMIT_ASSIGNMENT", "ASK_QUESTION"}),\r
    "MENTOR": frozenset({"VIEW_COURSE", "SUBMIT_ASSIGNMENT", "GRADE_ASSIGNMENT", "CREATE_LESSON"}),\r
    "ADMIN": frozenset({\r
        "VIEW_COURSE", "SUBMIT_ASSIGNMENT", "GRADE_ASSIGNMENT", "CREATE_LESSON",\r
        "MANAGE_USERS", "REFUND_FEE", "VIEW_FINANCIALS"\r
    })\r
}\r
\r
# User profiles in Kolkata tech center\r
user_roles_db = {\r
    "Susmita": ["STUDENT"],\r
    "Mamata": ["MENTOR"],\r
    "Debangshu": ["STUDENT", "MENTOR"],\r
    "Sukanta Hui": ["ADMIN"]\r
}\r
\r
def get_effective_permissions(username: str) -> set:\r
    """Aggregates all permissions across all roles assigned to a user via Set Union."""\r
    roles = user_roles_db.get(username, [])\r
    effective_perms = set()\r
    for role in roles:\r
        effective_perms |= ROLE_PERMISSIONS.get(role, frozenset())\r
    return effective_perms\r
\r
def check_permission(username: str, required_permission: str) -> bool:\r
    """O(1) permission check."""\r
    return required_permission in get_effective_permissions(username)\r
\r
\r
print("--- Enterprise Security Clearance Report ---")\r
for user in user_roles_db:\r
    perms = get_effective_permissions(user)\r
    can_refund = check_permission(user, "REFUND_FEE")\r
    can_grade = check_permission(user, "GRADE_ASSIGNMENT")\r
    print(f"User: {user:15} | Roles: {str(user_roles_db[user]):25} | Can Grade? {can_grade!s:5} | Can Refund ₹? {can_refund}")\r
`,g=`# ====================================================================\r
# Topic 18: Real-World Use Cases (Unique Users, Tags, Permissions)\r
# File: social_graph_recommendations.py\r
# Description: Mutual Friend Detection & Friend Recommendation Engine\r
# ====================================================================\r
\r
# Social Network connection graph across Barrackpore, Kolkata & Jadavpur\r
friend_graph = {\r
    "Susmita":   {"Debangshu", "Mamata", "Abhronila"},\r
    "Debangshu": {"Susmita", "Mamata", "Rohan", "Pooja"},\r
    "Mamata":    {"Susmita", "Debangshu", "Rohan"},\r
    "Abhronila": {"Susmita", "Tanmay"},\r
    "Rohan":     {"Debangshu", "Mamata", "Tanmay"},\r
    "Pooja":     {"Debangshu"},\r
    "Tanmay":    {"Abhronila", "Rohan"}\r
}\r
\r
def find_mutual_friends(user1: str, user2: str) -> set:\r
    """Finds common mutual connections via Set Intersection."""\r
    return friend_graph.get(user1, set()) & friend_graph.get(user2, set())\r
\r
def recommend_friends(target_user: str) -> dict:\r
    """Recommends new friends based on highest mutual connection count."""\r
    user_friends = friend_graph.get(target_user, set())\r
    candidate_scores = {}\r
\r
    for friend in user_friends:\r
        friends_of_friend = friend_graph.get(friend, set())\r
        # Candidates are friends-of-friends who are NOT the user and NOT already direct friends\r
        potential_candidates = friends_of_friend - user_friends - {target_user}\r
\r
        for candidate in potential_candidates:\r
            mutuals = find_mutual_friends(target_user, candidate)\r
            candidate_scores[candidate] = len(mutuals)\r
\r
    return dict(sorted(candidate_scores.items(), key=lambda x: x[1], reverse=True))\r
\r
\r
# 1. Mutual Friends between Susmita and Rohan\r
print("Mutual Friends between Susmita & Rohan:", find_mutual_friends("Susmita", "Rohan"))\r
\r
# 2. Friend Recommendations for Susmita\r
recs = recommend_friends("Susmita")\r
print("\\n--- Friend Recommendations for Susmita ---")\r
for person, count in recs.items():\r
    mutual_names = find_mutual_friends("Susmita", person)\r
    print(f"  • Recommend {person} ({count} mutual friends: {mutual_names})")\r
`,b=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
                PYTHON PROGRAMMING • SEGMENT 2 • MODULE 002_006: SETS\r
         TOPIC 18: REAL-WORLD USE CASES (UNIQUE USERS, TAGS, PERMISSIONS)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. TOP 4 PRODUCTION ARCHITECTURES POWERED BY SETS\r
--------------------------------------------------------------------------------\r
\r
  Use Case 1: Unique User Tracking & DAU Analytics\r
    • Collects user IDs into a set to compute Daily Active Users in O(1).\r
    • Churn / Retention Metrics:\r
      - Returning: \`day1 & day2\`\r
      - New: \`day2 - day1\`\r
      - Churned: \`day1 - day2\`\r
\r
  Use Case 2: Multi-Tag Search & E-Commerce Filtering\r
    • AND Query (Requires ALL tags): \`search_tags <= item_tags\` (Subset)\r
    • OR Query (Requires ANY tag): \`not search_tags.isdisjoint(item_tags)\` (Disjoint)\r
    • NOT Query (Exclude tags): \`item_tags.isdisjoint(excluded_tags)\`\r
\r
  Use Case 3: Enterprise RBAC Security Clearance\r
    • Aggregates multiple user roles: \`effective_perms = role1_perms | role2_perms\`\r
    • O(1) Access Guard: \`required_perm in effective_perms\`\r
\r
  Use Case 4: Social Network Friend Recommendations\r
    • Mutual Connections: \`user_friends & candidate_friends\`\r
    • Non-Friend Candidates: \`friends_of_friends - user_friends - {user}\`\r
\r
--------------------------------------------------------------------------------\r
2. ARCHITECTURAL BEST PRACTICES\r
--------------------------------------------------------------------------------\r
  • Use sets whenever relationships (unions, intersections, differences)\r
    or containment checks are fundamental to your business domain.\r
  • Store static role definitions as \`frozenset\` to ensure immutability and\r
    thread safety.\r
\r
================================================================================\r
          END OF STUDY NOTE • TOPIC 18: REAL-WORLD SET USE CASES\r
================================================================================\r
`,_=[{question:"How can Python sets be used to track Daily Active Users (DAU) in real-time?",shortAnswer:"Collect unique user IDs in a set (dau_set.add(user_id)); len(dau_set) gives the instant real-time count of unique active users.",explanation:"Because sets automatically collapse duplicate session logins from the same user, len(dau_set) provides an accurate, deduplicated active user metric.",hint:"Use a set to collect user IDs and check len(dau_set).",level:"basic",codeExample:`dau = set()
def on_user_login(user_id):
    dau.add(user_id)
print("Current DAU:", len(dau))`},{question:"How do you calculate User Churn between Day 1 and Day 2 using set operations?",shortAnswer:"churned_users = day1_users - day2_users.",explanation:"Set difference isolates users who were active on Day 1 but failed to log in on Day 2.",hint:"Subtract Day 2 active users from Day 1 active users.",level:"basic",codeExample:`d1 = {"U1", "U2", "U3"}
d2 = {"U2", "U4"}
churned = d1 - d2
print("Churned:", churned)  # {'U1', 'U3'}`},{question:"How do you calculate New User Acquisition between Day 1 and Day 2 using set operations?",shortAnswer:"new_users = day2_users - day1_users.",explanation:"Subtracting Day 1 users from Day 2 users isolates first-time users seen on Day 2.",hint:"Subtract Day 1 users from Day 2 users.",level:"basic",codeExample:`d1 = {"U1", "U2"}
d2 = {"U1", "U2", "U3"}
new_users = d2 - d1
print("New:", new_users)  # {'U3'}`},{question:"How do you calculate User Retention (returning users) across two consecutive days?",shortAnswer:"returning_users = day1_users & day2_users.",explanation:"Set intersection extracts users who logged in on both Day 1 and Day 2.",hint:"Use set intersection &.",level:"basic",codeExample:`d1 = {"U1", "U2", "U3"}
d2 = {"U2", "U3", "U4"}
retained = d1 & d2
print("Retained:", retained)  # {'U2', 'U3'}`},{question:"How do you implement an 'AND' multi-tag search filter (find items matching ALL query tags)?",shortAnswer:"search_tags <= item['tags'] (Subset check).",explanation:"Checking if search_tags is a subset of item['tags'] asserts that every search keyword is present on the item.",hint:"Subset <= tests that all required tags are present.",level:"moderate",codeExample:`search_tags = {"python", "fastapi"}
item_tags = {"python", "fastapi", "docker"}
matches = search_tags <= item_tags  # True`},{question:"How do you implement an 'OR' multi-tag search filter (find items matching ANY query tag)?",shortAnswer:"not search_tags.isdisjoint(item['tags']).",explanation:"If the search tags and item tags are not disjoint, they share at least one common tag.",hint:"Use not isdisjoint() for fast short-circuit OR matching.",level:"moderate",codeExample:`query = {"react", "vue"}
item_tags = {"python", "react"}
matches = not query.isdisjoint(item_tags)  # True`},{question:"How do you implement a 'NOT' multi-tag exclusion filter (exclude items with banned tags)?",shortAnswer:"banned_tags.isdisjoint(item['tags']).",explanation:"If the banned tags and item tags are disjoint, the item contains zero banned tags and is safe to include.",hint:"isdisjoint() confirms zero overlap with banned tags.",level:"basic",codeExample:`banned = {"out_of_stock", "discontinued"}
item_tags = {"in_stock", "sale"}
is_valid = banned.isdisjoint(item_tags)  # True`},{question:"How does Role-Based Access Control (RBAC) resolve effective permissions for a user with multiple roles?",shortAnswer:"effective_permissions = set().union(*(ROLE_PERMS[r] for r in user_roles)).",explanation:"Set union combines all permissions granted by each assigned role into a single deduplicated permission set.",hint:"Unite permissions across all assigned user roles.",level:"expert",codeExample:`ROLES = {
    "EDITOR": {"READ", "WRITE"},
    "ADMIN": {"DELETE", "MANAGE"}
}
user_roles = ["EDITOR", "ADMIN"]
effective = set().union(*(ROLES[r] for r in user_roles))
print(effective)  # {'READ', 'WRITE', 'DELETE', 'MANAGE'}`},{question:"How do you find mutual friends between two users in a social network using sets?",shortAnswer:"user1_friends & user2_friends (Set intersection).",explanation:"Intersection extracts friends that both users share in common in O(min(len(u1), len(u2))) time.",hint:"Intersect both friend sets.",level:"basic",codeExample:`u1_friends = {"Susmita", "Debangshu", "Mamata"}
u2_friends = {"Mamata", "Debangshu", "Rohan"}
mutuals = u1_friends & u2_friends
print(mutuals)  # {'Debangshu', 'Mamata'}`},{question:"How do you generate candidate friend recommendations ('People You May Know') using set operations?",shortAnswer:"candidates = (friends_of_friend - user_friends) - {target_user}.",explanation:"Subtracting the user's current friends and the user themselves from friends-of-friends leaves second-degree non-connected contacts.",hint:"Subtract current friends and the user from friends-of-friends.",level:"expert",codeExample:`user_friends = {"Debangshu"}
friend_of_friend = {"Susmita", "Debangshu", "Mamata"}
candidates = friend_of_friend - user_friends - {"Me"}
print(candidates)  # {'Susmita', 'Mamata'}`},{question:"Why should RBAC role permission definitions be stored as frozenset rather than standard set in production?",shortAnswer:"To prevent accidental mutation or tampering with security permissions at runtime.",explanation:"frozensets are immutable, guaranteeing that helper functions cannot execute perms.add('SUPER_ADMIN').",hint:"frozenset makes security role definitions tamper-proof.",level:"moderate",codeExample:'ROLE_PERMS = {"STUDENT": frozenset({"READ_LESSON", "TAKE_QUIZ"})}'},{question:"How do sets enable high-speed web crawler visited-URL tracking?",shortAnswer:"By storing visited URLs in a set, allowing O(1) membership checks before crawling each hyperlink.",explanation:"This prevents circular crawling loops and redundant page downloads in search engines.",hint:"Visited URLs in a set prevent redundant crawls in O(1).",level:"basic",codeExample:`visited = set()
def scrape(url):
    if url in visited: return
    visited.add(url)`},{question:"How do sets optimize multi-channel notification dispatch systems?",shortAnswer:"By uniting recipient sets across email, SMS, and push notification groups (all_recipients = email_set | sms_set | push_set).",explanation:"Deduplicates users who belong to multiple notification categories, sending exactly one message per user.",hint:"Unite notification recipient sets.",level:"basic",codeExample:"all_targets = email_users | sms_users | push_users"},{question:"How do sets identify duplicate IP address fraud in voting systems?",shortAnswer:"if ip_address in registered_ips: reject_vote() else: registered_ips.add(ip_address).",explanation:"Maintains an in-memory set of voting IPs to prevent multiple ballot submissions from the same terminal.",hint:"Store voting IPs in a set.",level:"basic",codeExample:`voted_ips = set()
def vote(ip):
    if ip in voted_ips: return "Already voted!"
    voted_ips.add(ip)`},{question:"How do sets solve the Jaccard Similarity index calculation between two documents?",shortAnswer:"similarity = len(set_a & set_b) / len(set_a | set_b).",explanation:"The Jaccard Index is mathematically defined as the size of the intersection divided by the size of the union.",hint:"len(A & B) / len(A | B).",level:"expert",codeExample:`def jaccard(words1, words2):
    s1, s2 = set(words1), set(words2)
    return len(s1 & s2) / len(s1 | s2)`},{question:"How do sets detect configuration drift between Kubernetes microservice pods?",shortAnswer:"drift = pod1_env_vars ^ pod2_env_vars (Symmetric Difference).",explanation:"Symmetric difference highlights environment variables set on one pod but missing from another.",hint:"Use symmetric difference ^ for drift detection.",level:"moderate",codeExample:`p1 = {"ENV=PROD", "PORT=8080"}
p2 = {"ENV=PROD", "PORT=9000"}
print(p1 ^ p2)  # {'PORT=8080', 'PORT=9000'}`},{question:"How do sets optimize spell checkers and anagram finders?",shortAnswer:"Converting words to sorted character tuples or frozensets allows grouping anagrams into hash table buckets.",explanation:"Words with identical character sets or letter histograms map to the same dictionary key.",hint:"Anagrams share identical character sets/signatures.",level:"moderate",codeExample:`def are_anagrams(w1, w2):
    return sorted(w1) == sorted(w2)`},{question:"How can sets prevent circular dependency deadlocks in package managers?",shortAnswer:"Track package installation dependencies in a visiting = set() during depth-first search (DFS).",explanation:"If a package is encountered that is already present in visiting, a circular dependency cycle is detected.",hint:"Use a visiting set in DFS to detect dependency cycles.",level:"expert",codeExample:"# If pkg in visiting_set: raise CircularDependencyError()"},{question:"How do sets validate incoming API JSON request payloads?",shortAnswer:"missing_fields = required_fields - set(request_json.keys()).",explanation:"Set difference isolates all required fields that the client omitted from the JSON request.",hint:"Subtract payload keys from required fields.",level:"basic",codeExample:`required = {"username", "email", "password"}
payload = {"username": "susmita"}
missing = required - set(payload.keys())
print("Missing fields:", missing)  # {'email', 'password'}`},{question:"How do sets find shared interest tags between two dating app profiles?",shortAnswer:"shared_interests = user1_tags & user2_tags.",explanation:"Intersection extracts common hobbies in O(min(len(u1), len(u2))) time.",hint:"Intersect interest tag sets.",level:"basic",codeExample:`u1 = {"coding", "music", "hiking"}
u2 = {"music", "reading", "hiking"}
print(u1 & u2)  # {'music', 'hiking'}`},{question:"How do sets compute the vocabulary size of a text corpus in Natural Language Processing (NLP)?",shortAnswer:"vocab_size = len({word.lower() for line in corpus for word in line.split()}).",explanation:"Set comprehension normalizes words to lowercase and collapses duplicates into unique lexicon vocabulary.",hint:"Set comprehension of lowercase words gives vocab size.",level:"moderate",codeExample:`text = "Python is great and Python is fast"
vocab = {w.lower() for w in text.split()}
print(len(vocab))  # 5`},{question:"How do sets assist in financial anti-money laundering (AML) detection?",shortAnswer:"By checking transaction counterparties against a global sanctions watchlist set in O(1) time.",explanation:"Instantly flags transactions involving sanctioned entities without slowing down high-volume payment processing.",hint:"O(1) checks against sanctioned entity sets.",level:"moderate",codeExample:`SANCTIONED = {"ACCT-999", "ACCT-888"}
if beneficiary in SANCTIONED: flag_for_review()`},{question:"How do sets optimize database migration schema diffs?",shortAnswer:"added_tables = new_db_tables - old_db_tables; dropped_tables = old_db_tables - new_db_tables.",explanation:"Set difference pinpoints created and dropped tables between two database schema snapshots.",hint:"Set differences find added and dropped tables.",level:"basic",codeExample:`old_tables = {"users", "orders"}
new_tables = {"users", "orders", "invoices"}
print("Added:", new_tables - old_tables)  # {'invoices'}`},{question:"How do sets enforce uniqueness in distributed event streaming architectures (e.g. Apache Kafka consumer)?",shortAnswer:"By deduplicating event IDs using an in-memory set (or Redis set) to ensure exactly-once processing semantics.",explanation:"Protects consumer microservices against duplicate message deliveries.",hint:"Deduplicates message IDs for exactly-once processing.",level:"expert",codeExample:`processed = set()
def process_event(event_id):
    if event_id in processed: return
    processed.add(event_id)`},{question:"How do sets track inventory SKU availability across multiple warehouse locations?",shortAnswer:"all_available_skus = warehouse_a_skus | warehouse_b_skus | warehouse_c_skus.",explanation:"Set union provides the aggregated catalog of unique available items across all fulfillment centers.",hint:"Unite warehouse SKU sets.",level:"basic",codeExample:`w1, w2 = {"SKU1", "SKU2"}, {"SKU2", "SKU3"}
print(w1 | w2)  # {'SKU1', 'SKU2', 'SKU3'}`},{question:"How do sets find missing student course submissions in educational ERP systems?",shortAnswer:"missing_submissions = enrolled_students - submitted_students.",explanation:"Set difference isolates students who have enrolled but not yet submitted the assignment.",hint:"Subtract submitted students from enrolled students.",level:"basic",codeExample:`enrolled = {"Susmita", "Debangshu", "Mamata"}
submitted = {"Susmita", "Mamata"}
print("Missing:", enrolled - submitted)  # {'Debangshu'}`},{question:"How do sets identify user permission violations in cloud IAM policies?",shortAnswer:"unauthorized_perms = user_perms - allowed_policy_perms.",explanation:"If unauthorized_perms is non-empty, the user possesses privileges exceeding their authorized policy baseline.",hint:"Subtract allowed permissions from user permissions.",level:"moderate",codeExample:`user_perms = {"READ", "WRITE", "ADMIN"}
policy = {"READ", "WRITE"}
print("Violations:", user_perms - policy)  # {'ADMIN'}`},{question:"How do sets optimize Sudoku puzzle solvers and constraint satisfaction algorithms?",shortAnswer:"Represent remaining possible numbers for each cell as a set of {1..9}, subtracting row, column, and 3x3 box numbers.",explanation:"Eliminates illegal candidates through set difference: possible = {1..9} - (row_nums | col_nums | box_nums).",hint:"Subtract existing numbers from {1..9}.",level:"expert",codeExample:"possibles = set(range(1, 10)) - (row_set | col_set | box_set)"},{question:"How do sets manage unique active Bluetooth device discovery in IoT networks?",shortAnswer:"Add discovered MAC addresses to an active_devices set; expired devices are removed via set difference.",explanation:"Provides real-time, deduplicated hardware device tracking across RF scan cycles.",hint:"Track discovered MAC addresses in a set.",level:"basic",codeExample:`active_beacons = set()
def on_ble_advertisement(mac):
    active_beacons.add(mac)`},{question:"What is the key overarching takeaway for software engineers regarding Python sets in real-world systems?",shortAnswer:"Sets are the foundational data structure for uniqueness, access control, relational filtering, and graph algorithms, delivering O(1) performance across modern backend systems.",explanation:"From cybersecurity to search engines and e-commerce, mastering Python sets elevates software from naive loops to industrial-grade architectures.",hint:"Sets power Uniqueness, Permissions, Tag Filtering, and Graph Connections.",level:"basic",codeExample:`# Summary Blueprint:
# 1. Active Users / DAU: set(logins)
# 2. Tag Filters:        query <= item_tags
# 3. RBAC Permissions:   role_a | role_b
# 4. Social Graphs:      user1 & user2`}];function R(){const i=o.useRef([]),[a,l]=o.useState("architectures");o.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(d=>{d.isIntersecting&&d.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return i.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const s=t=>{t&&!i.current.includes(t)&&i.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-emerald-500/30 selection:text-emerald-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800/80 shadow-sm shadow-emerald-950/50",children:"Segment 2 • Module 002_006"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-sky-950/80 text-sky-300 px-3 py-1 rounded-full border border-sky-800/80 shadow-sm shadow-sky-950/50",children:"Topic 18"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Industrial Systems Capstone"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Real-World Use Cases: Unique Users, Tags & Permissions"}),e.jsx("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:"The ultimate capstone of Python set theory: deploying sets across 4 production pillars—DAU metrics, multi-tag e-commerce filtering, enterprise RBAC authorization, and social graph recommendation engines."}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"👥 Daily Active Users (DAU)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏷️ Multi-Tag Search Engines"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🔐 Enterprise RBAC Clearance"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🌐 Social Graph Recommendations"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Four Industrial Application Pillars"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"In production Python backends, set algebra powers four critical software architectures:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 my-6 not-prose",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-emerald-800/60 shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"👥"})," 1. Real-Time DAU Analytics"]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Tracks unique session logins. Uses set difference (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Day1 - Day2"}),") for churn analysis and intersection (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Day1 & Day2"}),") for retention."]}),e.jsx("div",{className:"text-xs font-mono text-emerald-300 bg-slate-900 p-2 rounded",children:"dau = set(); dau.add(user_id)"})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-sky-800/60 shadow-lg shadow-sky-950/30 transition-all duration-300 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"🏷️"})," 2. Faceted Multi-Tag Search"]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Executes AND queries with subset (",e.jsx("code",{className:"text-sky-300 font-mono",children:"query <= item_tags"}),") and OR queries with disjoint (",e.jsx("code",{className:"text-sky-300 font-mono",children:"not query.isdisjoint(item_tags)"}),")."]}),e.jsx("div",{className:"text-xs font-mono text-sky-300 bg-slate-900 p-2 rounded",children:"[i for i in catalog if q <= i['tags']]"})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-purple-800/60 shadow-lg shadow-purple-950/30 transition-all duration-300 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"🔐"})," 3. Enterprise RBAC Clearance"]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Aggregates user permissions across multiple assigned roles via set union (",e.jsx("code",{className:"text-purple-300 font-mono",children:"role1 | role2"}),"), checking access in O(1) time."]}),e.jsx("div",{className:"text-xs font-mono text-purple-300 bg-slate-900 p-2 rounded",children:"required_perm in effective_perms"})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/70 border border-amber-800/60 shadow-lg shadow-amber-950/30 transition-all duration-300 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-lg mb-2",children:[e.jsx("span",{children:"🌐"})," 4. Social Graph Recommendations"]}),e.jsxs("p",{className:"text-sm text-slate-300 mb-2",children:["Finds mutual friends via intersection (",e.jsx("code",{className:"text-amber-300 font-mono",children:"u1 & u2"}),") and recommends non-friend candidates via set difference."]}),e.jsx("div",{className:"text-xs font-mono text-amber-300 bg-slate-900 p-2 rounded",children:"candidates = friends_of_friend - user_friends"})]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"🏗️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Production System Architectures"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>l("architectures"),className:c("px-3 py-1.5 rounded-lg transition-all",a==="architectures"?"bg-emerald-900/50 text-emerald-300 border border-emerald-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"RBAC Union Flow"}),e.jsx("button",{onClick:()=>l("social"),className:c("px-3 py-1.5 rounded-lg transition-all",a==="social"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Social Graph Recommendation"})]})]}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:a==="architectures"?e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:"Enterprise RBAC Architecture: Role Union & O(1) Security Access Guard"}),e.jsx("rect",{x:"30",y:"65",width:"220",height:"110",rx:"8",fill:"#1e293b",stroke:"#38bdf8"}),e.jsx("text",{x:"45",y:"90",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",children:"Role 1: STUDENT"}),e.jsx("text",{x:"45",y:"115",fill:"#cbd5e1",fontSize:"11",children:"• VIEW_COURSE"}),e.jsx("text",{x:"45",y:"135",fill:"#cbd5e1",fontSize:"11",children:"• SUBMIT_ASSIGNMENT"}),e.jsx("text",{x:"45",y:"155",fill:"#cbd5e1",fontSize:"11",children:"• ASK_QUESTION"}),e.jsx("rect",{x:"30",y:"190",width:"220",height:"100",rx:"8",fill:"#1e293b",stroke:"#a855f7"}),e.jsx("text",{x:"45",y:"215",fill:"#c084fc",fontSize:"13",fontWeight:"bold",children:"Role 2: MENTOR"}),e.jsx("text",{x:"45",y:"240",fill:"#cbd5e1",fontSize:"11",children:"• GRADE_ASSIGNMENT"}),e.jsx("text",{x:"45",y:"260",fill:"#cbd5e1",fontSize:"11",children:"• CREATE_LESSON"}),e.jsx("path",{d:"M 260 170 L 320 170",stroke:"#10b981",strokeWidth:"2.5"}),e.jsx("text",{x:"265",y:"160",fill:"#34d399",fontSize:"11",fontWeight:"bold",children:"UNION ( | )"}),e.jsx("rect",{x:"330",y:"65",width:"280",height:"225",rx:"8",fill:"#064e3b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"345",y:"95",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:"Effective Permissions Set"}),e.jsx("text",{x:"345",y:"125",fill:"#a7f3d0",fontSize:"11",children:"1. VIEW_COURSE"}),e.jsx("text",{x:"345",y:"145",fill:"#a7f3d0",fontSize:"11",children:"2. SUBMIT_ASSIGNMENT"}),e.jsx("text",{x:"345",y:"165",fill:"#a7f3d0",fontSize:"11",children:"3. ASK_QUESTION"}),e.jsx("text",{x:"345",y:"185",fill:"#a7f3d0",fontSize:"11",children:"4. GRADE_ASSIGNMENT"}),e.jsx("text",{x:"345",y:"205",fill:"#a7f3d0",fontSize:"11",children:"5. CREATE_LESSON"}),e.jsx("text",{x:"345",y:"250",fill:"#ffffff",fontSize:"12",fontWeight:"bold",children:"✓ 5 Deduplicated Grants"}),e.jsx("rect",{x:"630",y:"65",width:"190",height:"225",rx:"8",fill:"#0f172a",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"645",y:"95",fill:"#fbbf24",fontSize:"13",fontWeight:"bold",children:"API Gateway Guard"}),e.jsx("text",{x:"645",y:"130",fill:"#cbd5e1",fontSize:"11",children:"Action: GRADE_ASSIGNMENT"}),e.jsx("text",{x:"645",y:"160",fill:"#34d399",fontSize:"12",fontWeight:"bold",children:"✓ ALLOWED (in set)"}),e.jsx("text",{x:"645",y:"200",fill:"#cbd5e1",fontSize:"11",children:"Action: REFUND_FEE"}),e.jsx("text",{x:"645",y:"230",fill:"#ef4444",fontSize:"12",fontWeight:"bold",children:"❌ 403 FORBIDDEN"})]}):e.jsxs("svg",{viewBox:"0 0 850 320",className:"w-full h-auto min-w-[650px] font-sans",children:[e.jsx("text",{x:"30",y:"35",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",children:"Social Graph: Susmita's Connections & Recommendation Engine"}),e.jsx("circle",{cx:"200",cy:"160",r:"50",fill:"#0369a133",stroke:"#0ea5e9",strokeWidth:"2.5"}),e.jsx("text",{x:"175",y:"165",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",children:"Susmita"}),e.jsx("circle",{cx:"420",cy:"90",r:"40",fill:"#064e3b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"385",y:"95",fill:"#a7f3d0",fontSize:"11",fontWeight:"bold",children:"Debangshu"}),e.jsx("circle",{cx:"420",cy:"230",r:"40",fill:"#064e3b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"395",y:"235",fill:"#a7f3d0",fontSize:"11",fontWeight:"bold",children:"Mamata"}),e.jsx("line",{x1:"250",y1:"140",x2:"380",y2:"100",stroke:"#10b981",strokeWidth:"2"}),e.jsx("line",{x1:"250",y1:"180",x2:"380",y2:"220",stroke:"#10b981",strokeWidth:"2"}),e.jsx("circle",{cx:"650",cy:"160",r:"50",fill:"#581c87",stroke:"#c084fc",strokeWidth:"2.5"}),e.jsx("text",{x:"630",y:"165",fill:"#f5d0fe",fontSize:"13",fontWeight:"bold",children:"Rohan"}),e.jsx("line",{x1:"460",y1:"100",x2:"605",y2:"140",stroke:"#c084fc",strokeWidth:"2",strokeDasharray:"3 3"}),e.jsx("line",{x1:"460",y1:"220",x2:"605",y2:"180",stroke:"#c084fc",strokeWidth:"2",strokeDasharray:"3 3"}),e.jsx("rect",{x:"520",y:"240",width:"300",height:"60",rx:"6",fill:"#0f172a",stroke:"#c084fc"}),e.jsx("text",{x:"535",y:"262",fill:"#f5d0fe",fontSize:"11",fontWeight:"bold",children:"Recommended: Rohan (Score: 2 Mutuals)"}),e.jsxs("text",{x:"535",y:"282",fill:"#94a3b8",fontSize:"10",children:["Mutual Friends: ",'{"Debangshu", "Mamata"}']})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Python Code Labs"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab A: Daily Active Users (DAU) Tracking & Cohort Retention"}),e.jsx(r,{fileModule:x,title:"unique_active_users_tracker.py",highlightLines:[6,14,21,27]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab B: E-Commerce Multi-Tag Search & Course Fees in ₹"}),e.jsx(r,{fileModule:f,title:"tag_filtering_engine.py",highlightLines:[6,27,31,38]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab C: Enterprise Role-Based Access Control (RBAC) Security System"}),e.jsx(r,{fileModule:p,title:"enterprise_rbac_guard.py",highlightLines:[6,17,24,30]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:"Lab D: Social Graph Mutual Friend Detection & Recommendations"}),e.jsx(r,{fileModule:g,title:"social_graph_recommendations.py",highlightLines:[6,16,20,34]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Industry Applications in West Bengal"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"📊"})," 1. Educational Portal DAU & Retention"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Online learning platforms in ",e.jsx("strong",{children:"Barrackpore"})," track daily active students and compute cohort retention percentages across course batches (",e.jsx("strong",{className:"text-emerald-300",children:"₹4,500 enrollment"}),") using set operations."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🛍️"})," 2. E-Commerce Faceted Search"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Retail portals in ",e.jsx("strong",{children:"Kolkata"})," filter multi-attribute product catalogs in milliseconds using subset (",e.jsx("code",{className:"font-mono text-sky-400",children:"selected_tags <= product.tags"}),") and disjoint queries."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🔐"})," 3. Financial Microservice RBAC"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Accounting gateways in ",e.jsx("strong",{children:"Ichapur"})," resolve multi-role permissions with set union (",e.jsx("code",{className:"font-mono text-purple-400",children:"role_a | role_b"}),"), guarding refund endpoints with O(1) checks."]})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500",children:[e.jsxs("div",{className:"flex items-center gap-2 font-bold text-white text-base mb-2",children:[e.jsx("span",{className:"text-xl",children:"🌐"})," 4. Study Cohort Recommendation Graphs"]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Peer study platforms in ",e.jsx("strong",{children:"Jadavpur"})," recommend study partners by ranking mutual shared course connections with set intersection."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Production Architecture Pitfalls"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 1: Mutable Security Roles"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:["Defining roles as mutable sets allows accidental runtime modification. Always seal system roles using ",e.jsx("code",{className:"font-mono text-emerald-400",children:"frozenset([...])"}),"!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 2: Re-computing Effective Perms on Every Request"}),e.jsx("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:"Re-unioning roles on every HTTP request adds CPU overhead. Cache the resolved effective set in the user session object!"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 3: Casing Mismatches in Tag Search"}),e.jsxs("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:[e.jsx("code",{className:"font-mono text-rose-300",children:'"Python"'})," and ",e.jsx("code",{className:"font-mono text-rose-300",children:'"python"'})," have different hashes. Always lowercase tags during indexing and searching!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-900/60",children:[e.jsx("div",{className:"font-bold text-rose-400 mb-1",children:"❌ Pitfall 4: Memory Bloat in Long-Running DAU Sets"}),e.jsx("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:"A single in-memory DAU set tracking 100M users will consume gigabytes of RAM. For massive web scale, transition to HyperLogLog or Redis sets!"})]})]})]}),e.jsx("section",{ref:s,className:"section-hidden",children:e.jsx(u,{content:b,title:"Topic 18: Real-World Set Use Cases Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Study Note",downloadFileName:"topic18_real_world_use_cases_note.txt"})}),e.jsx("section",{ref:s,className:"section-hidden",children:e.jsx(m,{title:"Topic 18 • Real-World Set Use Cases (DAU, Tags, RBAC): Master Viva & Review Questions",questions:_})}),e.jsx("section",{ref:s,className:"section-hidden",children:e.jsx(h,{note:"Teacher's Master Graduation Note: Congratulations on conquering Module 002_006: Sets! You have advanced from fundamental set definitions to industrial-grade architectures—building real-time DAU trackers, e-commerce search engines, enterprise RBAC security guards, and social connection graphs for Susmita, Mamata, Debangshu, and Abhronila across Barrackpore and Kolkata. Master these concepts, and you are ready to engineer world-class software backends!"})})]})]})}export{R as default};
