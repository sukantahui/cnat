import{b as i,j as e,bg as s}from"./vendor-react-core-Doz9nIC6.js";import{P as o}from"./PythonFileLoader-hCi5osN-.js";import{P as f}from"./PlainTextPrint-C08xhKA4.js";import{F as g}from"./FAQTemplate-CkSqDH4B.js";import{T as b}from"./TeacherSukantaHui-CyIG3xbg.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const y=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 7: Resume and portfolio presentation strategies\r
# File: resume_ats_parser_and_keyword_optimizer.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating ATS keyword matching, action verb scoring,\r
#              and Google X-Y-Z formula evaluation.\r
"""\r
\r
import re\r
from dataclasses import dataclass\r
\r
@dataclass\r
class ResumeAuditResult:\r
    keyword_match_score: float\r
    action_verbs_found: list[str]\r
    xyz_bullets_count: int\r
    missing_keywords: list[str]\r
\r
class ResumeATSOptimizer:\r
    """Evaluates software engineering resume bullet points for ATS compliance and high impact."""\r
    ACTION_VERBS = {"architected", "engineered", "optimized", "implemented", "reduced", "scaled", "designed", "deployed"}\r
\r
    def __init__(self, target_keywords: list[str]):\r
        self.target_keywords = [k.lower() for k in target_keywords]\r
\r
    def audit_resume_bullets(self, bullet_points: list[str]) -> ResumeAuditResult:\r
        full_text = " ".join(bullet_points).lower()\r
        \r
        # 1. Keyword matching\r
        found_keywords = [k for k in self.target_keywords if re.search(rf"\\b{re.escape(k)}\\b", full_text)]\r
        missing_keywords = [k for k in self.target_keywords if k not in found_keywords]\r
        match_score = (len(found_keywords) / len(self.target_keywords)) * 100.0 if self.target_keywords else 100.0\r
\r
        # 2. Action verbs\r
        found_verbs = [v for v in self.ACTION_VERBS if re.search(rf"\\b{v}\\b", full_text)]\r
\r
        # 3. Google X-Y-Z formula check (Checks for percentages or numbers + action verb + outcome)\r
        xyz_count = 0\r
        for b in bullet_points:\r
            has_metric = bool(re.search(r"(\\d+%)|(\\d+x)|(\\d+,\\d+)|\\b\\d+\\b", b))\r
            has_verb = any(v in b.lower() for v in self.ACTION_VERBS)\r
            if has_metric and has_verb:\r
                xyz_count += 1\r
\r
        return ResumeAuditResult(\r
            keyword_match_score=round(match_score, 1),\r
            action_verbs_found=found_verbs,\r
            xyz_bullets_count=xyz_count,\r
            missing_keywords=missing_keywords\r
        )\r
\r
def test_resume_optimizer():\r
    print("   [...] Testing ATS Resume Keyword & X-Y-Z Formula Optimizer...")\r
    target_skills = ["Python", "SQLite", "Redis", "pytest", "Docker", "CI/CD", "Asyncio"]\r
    optimizer = ResumeATSOptimizer(target_skills)\r
\r
    sample_bullets = [\r
        "Architected a multi-campus student admission ledger using Python and SQLite WAL mode.",\r
        "Optimized query response latency by 85% for 5,000 active student records by implementing a Redis Cache-Aside layer.",\r
        "Engineered automated CI/CD matrix testing pipeline using GitHub Actions, achieving 96% branch coverage with pytest."\r
    ]\r
\r
    result = optimizer.audit_resume_bullets(sample_bullets)\r
    assert result.keyword_match_score > 70.0\r
    assert result.xyz_bullets_count >= 2\r
    assert "architected" in result.action_verbs_found\r
    print(f"   [PASS] 1. ATS Match Score: {result.keyword_match_score}% | X-Y-Z Formatted Bullets: {result.xyz_bullets_count}/3")\r
    print(f"   [PASS] 2. Action verbs identified: {', '.join(result.action_verbs_found)}")\r
\r
def main():\r
    print("=" * 75)\r
    print("[RESUME OPTIMIZER] ATS Keyword Extraction & Google X-Y-Z Formula")\r
    print("=" * 75)\r
\r
    test_resume_optimizer()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Quantified Google X-Y-Z bullets and high-density ATS keywords")\r
    print("           ensure your resume passes automated filters and catches recruiter attention.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,v=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 7: Resume and portfolio presentation strategies\r
# File: portfolio_project_curation_and_readme_evaluator.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Automated GitHub repository auditor grading README completeness,\r
#              badges, quickstart guides, and test coverage %.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class PortfolioProjectScore:\r
    project_name: str\r
    total_score: int\r
    has_ci_badge: bool\r
    has_coverage_badge: bool\r
    has_quickstart: bool\r
    has_architecture_diagram: bool\r
    feedback: list[str]\r
\r
class GitHubPortfolioEvaluator:\r
    """Audits and grades open-source repository manifests for technical hiring managers."""\r
\r
    @classmethod\r
    def evaluate_readme(cls, project_name: str, readme_text: str, coverage_pct: float) -> PortfolioProjectScore:\r
        score = 0\r
        feedback = []\r
\r
        # 1. CI & Coverage Badges\r
        has_ci = "shields.io" in readme_text and "build" in readme_text\r
        has_cov = "coverage" in readme_text or coverage_pct >= 85.0\r
\r
        if has_ci:\r
            score += 25\r
        else:\r
            feedback.append("Missing CI status badge in README.")\r
\r
        if has_cov:\r
            score += 25\r
        else:\r
            feedback.append("Test coverage below 85% or missing coverage badge.")\r
\r
        # 2. Quickstart & Installation\r
        has_quickstart = "pip install" in readme_text or "Quickstart" in readme_text\r
        if has_quickstart:\r
            score += 25\r
        else:\r
            feedback.append("Missing copy-paste quickstart installation commands.")\r
\r
        # 3. Architecture Overview / Diagram\r
        has_arch = "Features" in readme_text or "Architecture" in readme_text or "mermaid" in readme_text\r
        if has_arch:\r
            score += 25\r
        else:\r
            feedback.append("Missing architecture overview or system diagram.")\r
\r
        return PortfolioProjectScore(\r
            project_name=project_name,\r
            total_score=score,\r
            has_ci_badge=has_ci,\r
            has_coverage_badge=has_cov,\r
            has_quickstart=has_quickstart,\r
            has_architecture_diagram=has_arch,\r
            feedback=feedback\r
        )\r
\r
def test_portfolio_evaluator():\r
    print("   [...] Testing Portfolio README & Quality Auditor...")\r
    sample_readme = """\r
    # Institutional Student Manager\r
    [![CI Build](https://img.shields.io/badge/build-passing-brightgreen.svg)]\r
    [![Coverage](https://img.shields.io/badge/coverage-96%25-brightgreen.svg)]\r
    \r
    ## Key Features & Architecture\r
    - SQLite persistence with strict foreign keys\r
    - Layered decoupled domain architecture\r
    \r
    ## Quickstart & Installation\r
    \`\`\`bash\r
    pip install -e .\r
    \`\`\`\r
    """\r
\r
    audit = GitHubPortfolioEvaluator.evaluate_readme("Institutional Manager", sample_readme, 96.0)\r
    assert audit.total_score == 100\r
    assert audit.has_ci_badge and audit.has_coverage_badge and audit.has_quickstart\r
    print(f"   [PASS] 1. Portfolio project audited: Score {audit.total_score}/100 (Full 4-Quadrant Grade)")\r
\r
def main():\r
    print("=" * 75)\r
    print("[PORTFOLIO AUDIT] GitHub README & Engineering Standards Evaluator")\r
    print("=" * 75)\r
\r
    test_portfolio_evaluator()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Pinned repositories that score 100/100 on documentation, badges,")\r
    print("           and test coverage immediately signal senior engineering competence.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,w=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 7: Resume and portfolio presentation strategies\r
# File: behavioral_star_interview_response_generator.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating structured STAR behavioral interview response generation.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class STARStory:\r
    question: str\r
    situation: str\r
    task: str\r
    action: str\r
    result: str\r
\r
    def format_script(self) -> str:\r
        return f"""\r
[INTERVIEW QUESTION]: "{self.question}"\r
\r
1. [SITUATION]:\r
   {self.situation.strip()}\r
\r
2. [TASK]:\r
   {self.task.strip()}\r
\r
3. [ACTION]:\r
   {self.action.strip()}\r
\r
4. [RESULT]:\r
   {self.result.strip()}\r
"""\r
\r
def generate_production_bug_star_story() -> STARStory:\r
    return STARStory(\r
        question="Tell me about a difficult production bug you diagnosed and solved.",\r
        situation="During peak student admission week across Barrackpore and Kolkata campuses, concurrent tuition payment settlements were causing intermittent database lock timeouts in SQLite.",\r
        task="I needed to eliminate transaction lock contention and ensure zero payment data corruption under 50 concurrent administrative transactions.",\r
        action="I enabled SQLite Write-Ahead Logging (WAL mode), implemented a dedicated transaction context manager with automatic rollback on error, and added a Redis Cache-Aside layer for read-only queries.",\r
        result="Database lock errors dropped to 0%, fee reconciliation throughput increased by 4x, and all 3,500 admissions completed without a single dropped transaction."\r
    )\r
\r
def test_star_generator():\r
    print("   [...] Testing STAR Behavioral Response Engine...")\r
    story = generate_production_bug_star_story()\r
    script = story.format_script()\r
    assert "SITUATION" in script\r
    assert "ACTION" in script\r
    assert "RESULT" in script\r
    print("   [PASS] 1. STAR technical interview response formatted and verified")\r
\r
def main():\r
    print("=" * 75)\r
    print("[STAR METHOD] Behavioral & Technical Interview Storytelling")\r
    print("=" * 75)\r
\r
    test_star_generator()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Structuring interview responses with the STAR method showcases")\r
    print("           problem-solving maturity, technical depth, and quantifiable impact.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,S=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 7: Resume and portfolio presentation strategies\r
# File: institutional_career_portfolio_audit_suite.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: End-to-end career portfolio audit engine evaluating student portfolios\r
#              and mock interview scores for Mamata, Mahima, and Susmita.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class CandidatePortfolio:\r
    candidate_name: str\r
    campus_location: str\r
    github_url: str\r
    capstone_coverage_pct: float\r
    ats_score: float\r
    star_story_rating: int  # 1 to 10\r
\r
    @property\r
    def is_hire_ready(self) -> bool:\r
        return (\r
            self.capstone_coverage_pct >= 85.0 and\r
            self.ats_score >= 80.0 and\r
            self.star_story_rating >= 8\r
        )\r
\r
class InstitutionalCareerPortal:\r
    """Evaluates student portfolios and generates hiring readiness certificates."""\r
    def __init__(self):\r
        self.candidates: list[CandidatePortfolio] = []\r
\r
    def enroll_candidate(self, candidate: CandidatePortfolio):\r
        self.candidates.append(candidate)\r
\r
    def generate_batch_audit_report(self) -> list[str]:\r
        results = []\r
        for c in self.candidates:\r
            status = "HIRE-READY (PRO LEVEL) [APPROVED]" if c.is_hire_ready else "NEEDS REFINEMENT [PENDING]"\r
            results.append(\r
                f"[{status}] Candidate: {c.candidate_name} ({c.campus_location}) | "\r
                f"Coverage: {c.capstone_coverage_pct}% | ATS: {c.ats_score}% | STAR: {c.star_story_rating}/10"\r
            )\r
        return results\r
\r
def test_career_audit():\r
    print("   [...] Running Institutional Career & Portfolio Audit...")\r
    portal = InstitutionalCareerPortal()\r
\r
    # Enroll Mamata, Mahima, and Susmita\r
    portal.enroll_candidate(CandidatePortfolio("Mamata", "Barrackpore", "https://github.com/mamata/student-manager", 96.0, 92.5, 9))\r
    portal.enroll_candidate(CandidatePortfolio("Mahima", "Kolkata", "https://github.com/mahima/ledger-engine", 94.0, 88.0, 8))\r
    portal.enroll_candidate(CandidatePortfolio("Susmita", "Ichapur", "https://github.com/susmita/capstone-portal", 91.5, 85.0, 8))\r
\r
    reports = portal.generate_batch_audit_report()\r
    assert len(reports) == 3\r
    for r in reports:\r
        assert "HIRE-READY" in r\r
        print(f"   [PASS] {r}")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Institutional Student Portfolio Audit & Hiring Readiness")\r
    print("=" * 80)\r
\r
    test_career_audit()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Combining deep technical mastery, 85%+ test coverage, and")\r
    print("           STAR interview storytelling transforms learners into senior hires.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_004: CAPSTONE PROJECTS\r
           TOPIC 7: RESUME & PORTFOLIO PRESENTATION STRATEGIES\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE GOOGLE X-Y-Z RESUME FORMULA\r
--------------------------------------------------------------------------------\r
  Formula: "Accomplished [X], as measured by [Y], by doing [Z]"\r
\r
  Weak Bullet (Amateur):\r
  - "Worked on student fee management system and wrote Python code."\r
\r
  Strong Bullet (Pro):\r
  - "Architected a multi-campus Python student ledger engine, reducing fee reconciliation\r
     time by 75% for 3,500 active records by integrating SQLite WAL persistence and Redis caching."\r
\r
--------------------------------------------------------------------------------\r
2. GITHUB PORTFOLIO CURATION CHECKLIST\r
--------------------------------------------------------------------------------\r
  1. Pin 2-3 High-Impact Repositories (Quality over quantity).\r
  2. Every pinned repository MUST have:\r
     - Clear Shields.io badges (CI status, 85%+ coverage, Python version, license)\r
     - 2-sentence value proposition\r
     - Architectural mermaid / SVG system diagram\r
     - Copy-paste quickstart installation commands\r
     - 100% passing automated test suite (pytest)\r
     - PEP 257 Google-style docstrings and PEP 484 static types\r
\r
--------------------------------------------------------------------------------\r
3. THE STAR BEHAVIORAL INTERVIEW METHOD\r
--------------------------------------------------------------------------------\r
  - Situation: Context and problem background\r
  - Task: Specific challenge and technical goal\r
  - Action: Engineering steps, architecture decisions, and code implemented\r
  - Result: Quantified impact, performance metrics, and lessons learned\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 7: RESUME & PORTFOLIO STRATEGIES\r
================================================================================\r
`,_=[{question:"What is the Google X-Y-Z formula for writing engineering resume bullet points?",shortAnswer:"The formula states: 'Accomplished [X], as measured by [Y], by doing [Z]' (e.g. 'Reduced query latency by 85% [Y] across 10,000 daily active student records [X] by implementing a Redis Cache-Aside layer [Z]').",explanation:"The standard high-impact resume bullet writing formula.",hint:"Accomplished [X], as measured by [Y], by doing [Z].",level:"basic",codeExample:"# Example: Built [X], improved [Y] by 40%, by implementing [Z]"},{question:"How do Applicant Tracking Systems (ATS) scan and rank software engineering resumes?",shortAnswer:"ATS parsers extract plain text and match candidate skills against job description keywords (e.g. 'Python', 'SQLite', 'Redis', 'Docker', 'pytest', 'CI/CD', 'Asyncio'); complex multi-column graphics or non-standard fonts can cause parsing failures.",explanation:"ATS parsing mechanics and keyword extraction.",hint:"Parses text and matches keywords; multi-column or graphic-heavy PDFs can break parsing.",level:"basic",codeExample:"# Maintain clean, single-column, standard-font PDF resume layouts"},{question:"Why is pinning 2-3 polished GitHub repositories better than having 50 unmaintained toy scripts?",shortAnswer:"Hiring managers spend only 1-2 minutes reviewing GitHub profiles; having 2-3 exceptional, fully-tested, badge-decorated, and well-documented capstone projects provides an immediate high-signal demonstration of senior craftsmanship, whereas dozens of abandoned repos create noise.",explanation:"Curating high-signal portfolio repositories.",hint:"Quality over quantity: 2-3 deep, tested repos create a stronger impression than 50 unfinished scripts.",level:"basic",codeExample:"# Pin: 1. Institutional Student Manager (Full Capstone with 96% coverage)"},{question:"What are the 4 stages of the STAR method for behavioral and technical interviews?",shortAnswer:"1. Situation (set the context and challenge), 2. Task (your specific technical responsibility), 3. Action (the architectural and coding decisions you took), and 4. Result (quantified business or technical outcome).",explanation:"The STAR behavioral interview storytelling framework.",hint:"Situation, Task, Action, Result.",level:"basic",codeExample:"# STAR: Context -> Challenge -> Engineering Action -> Measurable Impact"},{question:"What should you do when an interviewer asks: 'Tell me about a difficult bug you solved'?",shortAnswer:"Use STAR to explain: 1. The bug's symptom and business impact, 2. The diagnostic hypothesis and tools used (logging, debugger, git bisect), 3. The root cause analysis, 4. The surgical fix, and 5. The preventive automated regression test added to CI.",explanation:"Root cause analysis storytelling and regression prevention.",hint:"Explain symptom -> diagnostic tools -> root cause -> surgical fix -> regression test added.",level:"moderate",codeExample:"# Structure: Symptom -> Debugging -> Root Cause -> Fix -> Automated Test"},{question:"Why should every portfolio repository include an architectural diagram in its README.md?",shortAnswer:"Architectural diagrams (Mermaid / SVG) communicate high-level system comprehension in 5 seconds, proving to hiring managers that you understand layered design, separation of concerns, and data flow beyond basic scripting.",explanation:"Visual communication of software architecture.",hint:"Visually communicates system design, data flow, and decoupled layers at a glance.",level:"basic",codeExample:"```mermaid\ngraph LR\nClient --> API_Gateway --> Gunicorn --> SQLite\n```"},{question:"What length should a software engineer's resume be?",shortAnswer:"A single page (1 page) for engineers with under 8-10 years of experience; concise, quantified bullet points with zero fluff allow recruiters to scan core competencies in under 10 seconds.",explanation:"Standard engineering resume length guidelines.",hint:"1 page is standard for under 8-10 years of experience.",level:"basic",codeExample:"# 1-Page Clean Layout: Contact -> Skills -> Experience -> Projects -> Education"},{question:"How do you demonstrate 'Seniority' in a Python portfolio without 10 years of formal experience?",shortAnswer:"By implementing production-grade engineering standards: strict static typing ('mypy --strict'), 85%+ branch test coverage with pytest, CI/CD matrix workflows (.github), structured logging, defensive custom exceptions, and clear architecture documentation.",explanation:"Signaling professional engineering maturity through code quality.",hint:"Strict static typing + 85%+ branch coverage + multi-OS CI/CD + clean architecture.",level:"moderate",codeExample:"# Signals maturity: pytest-cov + mypy strict + conventional commits"},{question:"What is the best way to handle live technical coding whiteboard/screen-share rounds?",shortAnswer:"1. Clarify requirements and constraints upfront, 2. State assumptions and edge cases, 3. Discuss Time/Space Big-O complexity before writing code, 4. Think out loud, 5. Write clean modular code, and 6. Walk through test cases manually to verify correctness.",explanation:"Live technical coding interview protocol.",hint:"Clarify inputs/edge cases -> state Big-O -> think out loud -> write code -> verify with test cases.",level:"moderate",codeExample:"# Step 1: Clarify -> Step 2: Big-O -> Step 3: Code -> Step 4: Trace"},{question:"How should you list your technical skills on a resume to maximize ATS matching?",shortAnswer:"Group skills into clear, categorized sections (e.g. Languages: Python, SQL; Backend & Web: FastAPI, Django; Persistence & Cache: SQLite, PostgreSQL, Redis; Tooling & DevOps: Docker, Git, GitHub Actions, pytest, Mypy).",explanation:"Categorized skills organization for ATS and recruiters.",hint:"Categorize into Languages, Backend, Databases/Caching, and DevOps/Testing.",level:"basic",codeExample:`Skills:
- Languages: Python 3.12, SQL
- Testing & Quality: pytest, pytest-cov, mypy, ruff`},{question:"What is the role of a GitHub Profile README ('username/username')?",shortAnswer:"It acts as your personal engineering landing page, highlighting your primary technical stack, featured open-source capstone projects with links and badges, and professional contact links.",explanation:"GitHub profile landing page branding.",hint:"Personal developer landing page showcasing tech stack, pinned projects, and bio.",level:"basic",codeExample:"# Hi, I'm Sukanta! | Python Engineer | Pinned Projects: Institutional Manager"},{question:"How should you answer: 'What is your biggest weakness as an engineer?'",shortAnswer:"State a genuine technical or workflow area you identified in the past, followed immediately by the concrete proactive steps and tools you are currently using to overcome it (growth mindset).",explanation:"Handling behavioral self-awareness questions.",hint:"Pick a real area of past improvement and explain the concrete actions you took to improve.",level:"moderate",codeExample:"# E.g. 'I used to under-document code; now I mandate Google docstrings and doctests.'"},{question:"Why should you avoid putting skill rating percentage bars (e.g. 'Python: 90%') on a resume?",shortAnswer:"Arbitrary percentage bars are unquantifiable and subjective (what does 90% Python mean?), confuse ATS parsers, and waste valuable resume space that should instead showcase real quantified achievements.",explanation:"Anti-pattern of subjective skill meters on resumes.",hint:"Subjective and meaningless; replace with real project bullet points and metrics.",level:"basic",codeExample:"# ANTI-PATTERN: 'Python: 85%' | BEST PRACTICE: 'Architected Python API with 96% coverage'"},{question:"What questions should you ask the interviewer when they ask: 'Do you have any questions for us?'",shortAnswer:"Ask high-signal technical and cultural questions: 'What does your CI/CD deployment rhythm look like?', 'How does the engineering team handle technical debt and refactoring?', and 'What is the biggest technical scaling bottleneck the team is currently tackling?'.",explanation:"Reverse interviewing and demonstrating genuine engineering curiosity.",hint:"Ask about their CI/CD release cadence, tech debt management, and architecture challenges.",level:"basic",codeExample:"# High-signal questions prove you think about team workflows and engineering scale"},{question:"How should you describe academic or bootcamp capstone projects on a resume?",shortAnswer:"Treat the capstone as a real software engineering product: highlight user problems solved, system architecture choices (SQLite, Redis, OOP layers), test coverage percentages, and GitHub links with live demonstrations.",explanation:"Presenting capstone projects as production software.",hint:"Frame as a production software product with architectural tradeoffs and test metrics.",level:"basic",codeExample:"# Capstone: Institutional Student Ledger System (github.com/org/repo)"},{question:"What is the importance of a clean Git commit history in your public portfolio?",shortAnswer:"A clean history using Conventional Commits ('feat:', 'fix:') and atomic pull requests demonstrates that you know how to collaborate effectively in professional engineering teams.",explanation:"Git hygiene as a proxy for professional collaboration skills.",hint:"Proves you follow professional team workflows, atomic commits, and release hygiene.",level:"basic",codeExample:"# Conventional commits prove professional collaboration standards"},{question:"How do you prepare for system design rounds for junior/mid-level Python roles?",shortAnswer:"Focus on fundamentals: drawing clear data flow diagrams, separating stateless application servers from stateful databases, applying caching (Redis Cache-Aside), using database indexes/replicas, and explaining CAP theorem tradeoffs.",explanation:"System design preparation strategies for backend interviews.",hint:"Master stateless app tiers, Redis caching, DB indexing/replicas, and message queues.",level:"moderate",codeExample:"# Diagram: Client -> NGINX -> Gunicorn -> Redis / PostgreSQL"},{question:"Why should you deploy a live demo or provide pre-recorded asciinema/GIFs in your GitHub README?",shortAnswer:"Technical recruiters and hiring managers may not have time to clone and run code locally; a 10-second GIF or live link provides instant visual proof that the software functions as advertised.",explanation:"Instant visual verification of working software.",hint:"A 10-second GIF or demo link gives recruiters instant proof of working software.",level:"basic",codeExample:"![Demo Animation](assets/demo.gif)"},{question:"What is the rule for negotiating compensation offers?",shortAnswer:"Never accept an initial offer on the spot; thank the recruiter enthusiastically, ask for the complete offer in writing (base, bonus, equity, benefits), research market rates, and negotiate professionally based on value and competing opportunities.",explanation:"Salary negotiation fundamentals.",hint:"Request complete written offer, research market data, and negotiate based on value.",level:"basic",codeExample:"# Always review total compensation in writing before making decisions"},{question:"What is the ultimate golden rule of resume and portfolio presentation?",shortAnswer:"Lead with quantified impact (Google X-Y-Z formula), showcase 2-3 exceptional, fully-tested, and badge-decorated capstone repositories, communicate technical tradeoffs clearly using STAR, and demonstrate professional engineering discipline in every commit.",explanation:"The complete career portfolio and technical presentation standard.",hint:"Quantified X-Y-Z metrics + top 2-3 tested repos + STAR storytelling + clean Git hygiene.",level:"basic",codeExample:"# Enterprise Resume & Portfolio Presentation Standard"}];function I(){const l=i.useRef([]),[n,d]=i.useState("xyzFormula"),[c,x]=i.useState("PRO");let m="Architected a multi-campus student admission ledger engine with SQLite WAL persistence and Redis Cache-Aside, reducing query latency by 85% for 5,000 active records while maintaining 96% branch test coverage.",u="92.5% (High Match)",h="Senior Craftsmanship: Clear quantifiable impact, architecture justification, and test metrics.";c==="AMATEUR"?(m="Worked on student fee management app and wrote Python code to save records in a database.",u="38.0% (Low Match - Rejected by ATS)",h="Junior / Amateur Signal: Lacks metrics, no action verbs, missing architecture context."):(m="Architected a multi-campus student admission ledger engine with SQLite WAL persistence and Redis Cache-Aside, reducing query latency by 85% for 5,000 active records while maintaining 96% branch test coverage.",u="92.5% (High Match - Top 5% ATS Tier)",h="Senior Craftsmanship: Google X-Y-Z formula, quantifiable business metrics, and testing rigor."),i.useEffect(()=>{const r=new IntersectionObserver(a=>{a.forEach(p=>{p.isIntersecting&&p.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return l.current.forEach(a=>{a&&r.observe(a)}),()=>r.disconnect()},[]);const t=r=>{r&&!l.current.includes(r)&&l.current.push(r)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
        @keyframes pulseGlowTeal {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(20, 184, 166, 0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(20, 184, 166, 0.8)); }
        }
        .animate-glow-teal {
          animation: pulseGlowTeal 3s infinite ease-in-out;
        }
      `}),e.jsxs("header",{ref:t,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_004"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 7 (Capstone Finale)"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Capstone Projects, Portfolio & Interview Mastery"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Resume & Portfolio ",e.jsx("span",{className:"text-teal-400",children:"Presentation Strategies"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master the art of software engineering resumes, GitHub portfolio curation, and technical interview storytelling: formulating quantified bullet points using the Google X-Y-Z formula (",e.jsx("code",{className:"text-teal-300 font-mono",children:"Accomplished [X] by [Y] doing [Z]"}),"), beating Applicant Tracking Systems (ATS), curating top-tier GitHub capstone repositories, mastering the STAR behavioral interview framework, and navigating technical hiring loops with executive confidence."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎯 Google X-Y-Z Resume Formula"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⭐ STAR Behavioral Interview Framework"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🌟 Top 3 Pinned GitHub Repositories"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🤖 ATS Keyword Optimization"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Professional Career & Portfolio Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Landing senior engineering roles requires presenting your technical abilities with mathematical clarity, structured storytelling, and verifiable proof of competence:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Google X-Y-Z Formula"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"Impact = [X] + [Y] + [Z]"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Accomplished [X], as measured by [Y] (metrics/percentages), by doing [Z] (concrete technical implementation)."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ High-Signal GitHub"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"Top 2-3 Pinned Repos"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Curate 2-3 deep, tested (85%+ coverage), badge-decorated repositories with architecture diagrams rather than 50 toy scripts."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ STAR Interviewing"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"Situation ➔ Action ➔ Result"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Structure responses around real engineering challenges, root cause analysis, and measurable system outcomes."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ ATS Optimization"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"Single-Column + Keywords"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Clean, machine-parseable single-column layout matching job description keywords without confusing table graphics."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Anti-Pattern of Subjective Skill Bars"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Never put subjective percentage bars (e.g. ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Python: 90%"}),") on your resume! They confuse ATS parsers and tell recruiters nothing. Replace them with concrete quantified engineering accomplishments: ",e.jsx("span",{className:"text-emerald-400 font-bold",children:'"Architected a Python multi-campus backend with 96% branch test coverage"'}),"!"]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing X-Y-Z Bullet Anatomy, GitHub Curation & STAR Flow"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>d("xyzFormula"),className:s("px-3 py-1.5 rounded-lg transition-all",n==="xyzFormula"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Google X-Y-Z Formula"}),e.jsx("button",{onClick:()=>d("portfolioCuration"),className:s("px-3 py-1.5 rounded-lg transition-all",n==="portfolioCuration"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"GitHub Portfolio Top 3"}),e.jsx("button",{onClick:()=>d("starMethod"),className:s("px-3 py-1.5 rounded-lg transition-all",n==="starMethod"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"STAR Storytelling Cycle"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining resume bullet point deconstructions, high-signal GitHub pinning topologies, and behavioral interview arcs:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:n==="xyzFormula"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"DECONSTRUCTING THE GOOGLE X-Y-Z HIGH-IMPACT RESUME FORMULA"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#0f172a",stroke:"#14b8a6"}),e.jsx("rect",{x:"20",y:"20",width:"780",height:"40",rx:"4",fill:"#042f2e",stroke:"#0d9488"}),e.jsx("text",{x:"30",y:"45",fill:"#5eead4",fontSize:"10",fontWeight:"bold",fontFamily:"monospace",children:'"Architected a student ledger engine [X], cutting query latency by 85% [Y], by adding Redis Cache-Aside [Z]."'}),e.jsx("rect",{x:"20",y:"80",width:"245",height:"140",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"30",y:"105",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"1. Accomplished [X]"}),e.jsx("text",{x:"30",y:"130",fill:"#bae6fd",fontSize:"9",children:"The core technical project:"}),e.jsx("text",{x:"30",y:"150",fill:"#e0f2fe",fontSize:"8",fontFamily:"monospace",children:'• "Multi-campus admission engine"'}),e.jsx("text",{x:"30",y:"168",fill:"#e0f2fe",fontSize:"8",fontFamily:"monospace",children:'• "SQLite WAL persistence layer"'}),e.jsx("text",{x:"30",y:"200",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"Strong Action Verbs (Architected)"}),e.jsx("rect",{x:"285",y:"80",width:"250",height:"140",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"295",y:"105",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"2. Measured By [Y]"}),e.jsx("text",{x:"295",y:"130",fill:"#ccfbf1",fontSize:"9",children:"Quantified metrics & impact:"}),e.jsx("text",{x:"295",y:"150",fill:"#a7f3d0",fontSize:"8",fontFamily:"monospace",children:'• "Reduced latency by 85%"'}),e.jsx("text",{x:"295",y:"168",fill:"#a7f3d0",fontSize:"8",fontFamily:"monospace",children:'• "Scaled to 5,000 active students"'}),e.jsx("text",{x:"295",y:"200",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Numerical Proof of Value ✅"}),e.jsx("rect",{x:"555",y:"80",width:"245",height:"140",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"565",y:"105",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"3. By Doing [Z]"}),e.jsx("text",{x:"565",y:"130",fill:"#d8b4fe",fontSize:"9",children:"Specific engineering methodology:"}),e.jsx("text",{x:"565",y:"150",fill:"#f3e8ff",fontSize:"8",fontFamily:"monospace",children:'• "Redis Cache-Aside with Mutex"'}),e.jsx("text",{x:"565",y:"168",fill:"#f3e8ff",fontSize:"8",fontFamily:"monospace",children:'• "96% branch coverage with pytest"'}),e.jsx("text",{x:"565",y:"200",fill:"#c084fc",fontSize:"8",fontWeight:"bold",children:"Technical Depth & Tooling"})]})]}):n==="portfolioCuration"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"HIGH-SIGNAL GITHUB PROFILE TOPOLOGY: PINNED CAPSTONE SHOWCASES"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"25",y:"35",width:"240",height:"180",rx:"6",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"35",y:"60",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"📌 Pinned Repo 1 (Flagship)"}),e.jsx("text",{x:"35",y:"85",fill:"#e0f2fe",fontSize:"9",fontFamily:"monospace",children:"institutional-student-manager"}),e.jsx("text",{x:"35",y:"108",fill:"#a7f3d0",fontSize:"8",children:"✓ 96% Coverage Badge"}),e.jsx("text",{x:"35",y:"125",fill:"#a7f3d0",fontSize:"8",children:"✓ Mermaid Architecture Diagram"}),e.jsx("text",{x:"35",y:"142",fill:"#a7f3d0",fontSize:"8",children:"✓ Google Docstrings + Mypy Strict"}),e.jsx("text",{x:"35",y:"159",fill:"#a7f3d0",fontSize:"8",children:"✓ 1-line pip install Quickstart"}),e.jsx("text",{x:"35",y:"195",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Flagship Capstone Project"}),e.jsx("rect",{x:"290",y:"35",width:"240",height:"180",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"300",y:"60",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"📌 Pinned Repo 2"}),e.jsx("text",{x:"300",y:"85",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"distributed-task-worker"}),e.jsx("text",{x:"300",y:"108",fill:"#a7f3d0",fontSize:"8",children:"✓ Asyncio + Redis Queue"}),e.jsx("text",{x:"300",y:"125",fill:"#a7f3d0",fontSize:"8",children:"✓ Multi-OS CI/CD Workflow"}),e.jsx("text",{x:"300",y:"142",fill:"#a7f3d0",fontSize:"8",children:"✓ Token Bucket Rate Limiter"}),e.jsx("text",{x:"300",y:"159",fill:"#a7f3d0",fontSize:"8",children:"✓ Benchmark Graph in README"}),e.jsx("text",{x:"300",y:"195",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Distributed Systems Depth"}),e.jsx("rect",{x:"555",y:"35",width:"240",height:"180",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"565",y:"60",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"👤 GitHub Profile README"}),e.jsx("text",{x:"565",y:"85",fill:"#d8b4fe",fontSize:"8",children:"• Categorized Tech Stack Badges"}),e.jsx("text",{x:"565",y:"105",fill:"#d8b4fe",fontSize:"8",children:"• Links to Live Demos & Docs"}),e.jsx("text",{x:"565",y:"125",fill:"#d8b4fe",fontSize:"8",children:"• Conventional Commit Activity"}),e.jsx("text",{x:"565",y:"145",fill:"#d8b4fe",fontSize:"8",children:"• Professional Contact Links"}),e.jsx("text",{x:"565",y:"195",fill:"#c084fc",fontSize:"8",fontWeight:"bold",children:"Executive First Impression ✅"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"THE STAR BEHAVIORAL INTERVIEW STORYTELLING CYCLE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"25",y:"35",width:"180",height:"180",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"35",y:"60",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"1. SITUATION (20%)"}),e.jsx("text",{x:"35",y:"85",fill:"#bae6fd",fontSize:"8",children:"Set the context & business stakes:"}),e.jsx("text",{x:"35",y:"115",fill:"#e0f2fe",fontSize:"8",children:'"During peak admission week across Barrackpore and Kolkata campuses..."'}),e.jsx("text",{x:"35",y:"195",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"Context & Constraints"}),e.jsx("rect",{x:"220",y:"35",width:"180",height:"180",rx:"6",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"230",y:"60",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"2. TASK (15%)"}),e.jsx("text",{x:"230",y:"85",fill:"#bae6fd",fontSize:"8",children:"Your specific ownership:"}),e.jsx("text",{x:"230",y:"115",fill:"#e0f2fe",fontSize:"8",children:'"I needed to eliminate SQLite database lock timeouts under 50 concurrent transactions."'}),e.jsx("text",{x:"230",y:"195",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"Goal Definition"}),e.jsx("rect",{x:"415",y:"35",width:"190",height:"180",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"425",y:"60",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"3. ACTION (50%)"}),e.jsx("text",{x:"425",y:"85",fill:"#ccfbf1",fontSize:"8",children:"The core engineering solution:"}),e.jsx("text",{x:"425",y:"110",fill:"#a7f3d0",fontSize:"8",children:"• Enabled SQLite WAL Mode"}),e.jsx("text",{x:"425",y:"125",fill:"#a7f3d0",fontSize:"8",children:"• Added Transaction Contexts"}),e.jsx("text",{x:"425",y:"140",fill:"#a7f3d0",fontSize:"8",children:"• Implemented Redis Caching"}),e.jsx("text",{x:"425",y:"195",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Technical Execution"}),e.jsx("rect",{x:"620",y:"35",width:"175",height:"180",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"630",y:"60",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"4. RESULT (15%)"}),e.jsx("text",{x:"630",y:"85",fill:"#d8b4fe",fontSize:"8",children:"Quantified business outcome:"}),e.jsx("text",{x:"630",y:"110",fill:"#86efac",fontSize:"8",children:"• 0% lock errors"}),e.jsx("text",{x:"630",y:"125",fill:"#86efac",fontSize:"8",children:"• 4x throughput"}),e.jsx("text",{x:"630",y:"140",fill:"#86efac",fontSize:"8",children:"• 3,500 admissions ✅"}),e.jsx("text",{x:"630",y:"195",fill:"#c084fc",fontSize:"8",fontWeight:"bold",children:"Measurable Impact"})]})]})})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Resume Bullet & STAR Story Evaluator"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Toggle between an amateur resume draft and a senior quantified Google X-Y-Z bullet point to see real-time ATS match scoring and recruiter impression analysis:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Select Resume Bullet Point Version:"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[e.jsxs("button",{onClick:()=>x("AMATEUR"),className:s("p-3 rounded-xl border text-left transition-all",c==="AMATEUR"?"bg-rose-950/60 border-rose-500 shadow-md shadow-rose-950/50":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"),children:[e.jsx("div",{className:"text-xs font-bold text-slate-200",children:"❌ Amateur / Junior Draft"}),e.jsx("div",{className:"text-[10px] text-rose-400 font-mono mt-0.5",children:"Vague, unquantified, passive wording"})]}),e.jsxs("button",{onClick:()=>x("PRO"),className:s("p-3 rounded-xl border text-left transition-all",c==="PRO"?"bg-teal-950/60 border-teal-500 shadow-md shadow-teal-950/50":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"),children:[e.jsx("div",{className:"text-xs font-bold text-slate-200",children:"✅ Senior Google X-Y-Z Bullet"}),e.jsx("div",{className:"text-[10px] text-teal-400 font-mono mt-0.5",children:"Quantified metrics, action verbs, testing rigor"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-teal-900/50",children:[e.jsx("div",{className:"text-xs text-teal-400 font-medium mb-1",children:"ATS Parser Keyword Match"}),e.jsx("div",{className:"text-xl font-bold font-mono text-teal-300",children:u})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-cyan-900/50",children:[e.jsx("div",{className:"text-xs text-cyan-400 font-medium mb-1",children:"Hiring Manager Perception"}),e.jsx("div",{className:"text-xs text-slate-300 leading-snug",children:h})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Resume Bullet Point Preview:"}),e.jsxs("pre",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-teal-200 overflow-x-auto leading-relaxed",children:["• ",m]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Career Audit Suites"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade career optimization labs covering ATS keyword matching, automated GitHub README grading, STAR interview script generation, and institutional candidate evaluations:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: ATS Resume Parser & Google X-Y-Z Formula Optimizer"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Extracting keywords, identifying power action verbs, and scoring quantified metric density in resume bullet points."})]}),e.jsx(o,{fileModule:y,title:"resume_ats_parser_and_keyword_optimizer.py",highlightLines:[18,30,44,58]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: GitHub Portfolio Curation & README Quality Evaluator"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Grading open-source repository manifests on CI status badges, test coverage %, quickstart guides, and architecture diagrams."})]}),e.jsx(o,{fileModule:v,title:"portfolio_project_curation_and_readme_evaluator.py",highlightLines:[16,28,44,58]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: Behavioral STAR Interview Script Generator"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Generating structured behavioral interview scripts covering difficult production bugs, concurrency bottlenecks, and quantified outcomes."})]}),e.jsx(o,{fileModule:w,title:"behavioral_star_interview_response_generator.py",highlightLines:[16,28,40]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Complete Institutional Career & Portfolio Audit Suite"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Full hiring readiness engine evaluating portfolio projects, test coverage, and mock interview scores for Mamata, Mahima, and Susmita across Barrackpore and Kolkata."})]}),e.jsx(o,{fileModule:S,title:"institutional_career_portfolio_audit_suite.py",highlightLines:[18,32,48,62]})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Resume & Portfolio Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Subjective Skill Percentage Bars"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:'Adding "Python 90%" or "SQL 80%" meters conveys zero technical information and confuses ATS parsers.'}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:['# ANTI-PATTERN: "Python: 85%" (Meaningless!)',`
`,'# BEST PRACTICE: "Engineered Python API with 96% coverage"']})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Dozens of Unfinished Toy Repositories"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Flooding your public GitHub with 50 abandoned, undocumented tutorial clones creates a chaotic, junior impression."}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: Pin top 2-3 deep, tested capstone projects"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Vague Unquantified Resume Bullets"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:'Writing "Worked on database" fails to communicate the technical complexity, scale, or business value you delivered.'}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:'# FIX: Apply Google X-Y-Z: "Cut latency by 85% for 5k records"'})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Omitting Test Coverage & Badges"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Publishing repositories without automated test suites or coverage badges signals that you only write untested prototype scripts."}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: Include pytest-cov badge (--cov-fail-under=85)"})]})]})]}),e.jsxs("section",{ref:t,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Career & Portfolio Presentation Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use Google X-Y-Z Formula:"})," Quantify every resume bullet with metrics, percentages, and concrete technical actions."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Pin Top 2-3 Flagship Repositories:"})," Ensure each pinned repository has 85%+ coverage badges, quickstarts, and diagrams."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Structure Stories with STAR:"})," Answer behavioral questions with Situation, Task, Action, and Quantified Result."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Maintain Clean Single-Column Resumes:"})," Format for seamless ATS parsing with categorized technical skills."]})]})]})]}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(g,{title:"Resume, Portfolio & Career Presentation FAQs",questions:_})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(f,{content:j,title:"Topic 7: Resume and Portfolio Presentation Strategies Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic7_note.txt"})}),e.jsx("section",{ref:t,className:"section-hidden",children:e.jsx(b,{note:"Technical mastery is only half the battle; the other half is communicating your engineering impact with clarity, precision, and humility. By mastering clean directory architecture, persistence, logging, documentation, CI/CD, algorithms, and system design across our capstone modules for Mamata, Mahima, and Susmita in Barrackpore, Kolkata, Ichapur, and Jadavpur, you now possess the complete toolkit to build world-class Python software and ace any technical interview in the industry."})})]})]})}export{I as default};
