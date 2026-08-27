import{b as l,j as e,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{P as m}from"./PythonFileLoader-hCi5osN-.js";import{P as b}from"./PlainTextPrint-C08xhKA4.js";import{F as y}from"./FAQTemplate-CkSqDH4B.js";import{T as v}from"./TeacherSukantaHui-CyIG3xbg.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const w=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 4: Publishing projects to GitHub with Git commits, issues, and releases\r
# File: conventional_commits_and_git_workflow.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating Conventional Commit validation, SemVer bumping, and Git workflows.\r
"""\r
\r
import re\r
from dataclasses import dataclass\r
\r
@dataclass\r
class ConventionalCommit:\r
    commit_type: str\r
    scope: str | None\r
    description: str\r
    is_breaking: bool = False\r
\r
    @classmethod\r
    def parse(cls, message: str) -> "ConventionalCommit":\r
        pattern = r"^(?P<type>feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(?:\\((?P<scope>[a-zA-Z0-9_-]+)\\))?(?P<breaking>!)?: (?P<desc>.+)$"\r
        match = re.match(pattern, message.strip())\r
        if not match:\r
            raise ValueError(f"Invalid Conventional Commit message: '{message}'")\r
        \r
        return cls(\r
            commit_type=match.group("type"),\r
            scope=match.group("scope"),\r
            description=match.group("desc"),\r
            is_breaking=bool(match.group("breaking"))\r
        )\r
\r
def bump_semver(current_version: str, commits: list[ConventionalCommit]) -> str:\r
    """Calculates next semantic version (MAJOR.MINOR.PATCH) based on commit history."""\r
    major, minor, patch = map(int, current_version.lstrip("v").split("."))\r
\r
    has_breaking = any(c.is_breaking for c in commits)\r
    has_feat = any(c.commit_type == "feat" for c in commits)\r
    has_fix = any(c.commit_type == "fix" for c in commits)\r
\r
    if has_breaking:\r
        return f"v{major + 1}.0.0"\r
    elif has_feat:\r
        return f"v{major}.{minor + 1}.0"\r
    elif has_fix:\r
        return f"v{major}.{minor}.{patch + 1}"\r
    return f"v{major}.{minor}.{patch}"\r
\r
def test_conventional_commits():\r
    print("   [...] Testing Conventional Commit Parsing & SemVer Engine...")\r
\r
    # 1. Parse valid commits\r
    c1 = ConventionalCommit.parse("feat(admission): add Barrackpore regional merit grant")\r
    assert c1.commit_type == "feat" and c1.scope == "admission"\r
    print("   [PASS] 1. Feature commit parsed cleanly")\r
\r
    c2 = ConventionalCommit.parse("fix(ledger): correct tuition tax rounding bug")\r
    assert c2.commit_type == "fix" and c2.scope == "ledger"\r
    print("   [PASS] 2. Bug fix commit parsed cleanly")\r
\r
    # 2. Test Invalid Commit Rejection\r
    try:\r
        ConventionalCommit.parse("updated some files and fixed stuff")\r
        assert False, "Expected ValueError on non-conventional commit"\r
    except ValueError as e:\r
        print("   [PASS] 3. Non-conventional commit message rejected safely")\r
\r
    # 3. SemVer Bump: v1.0.0 -> v1.1.0 (Feature added)\r
    next_ver = bump_semver("v1.0.0", [c1, c2])\r
    assert next_ver == "v1.1.0"\r
    print(f"   [PASS] 4. SemVer bumped: v1.0.0 -> {next_ver} (Minor version bump on 'feat')")\r
\r
def main():\r
    print("=" * 75)\r
    print("[CONVENTIONAL COMMITS] Standardized Commit Parsing & SemVer Engine")\r
    print("=" * 75)\r
\r
    test_conventional_commits()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Adhering to Conventional Commits enables automated release tools")\r
    print("           to bump semantic versions and generate changelogs with zero manual effort.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 4: Publishing projects to GitHub with Git commits, issues, and releases\r
# File: github_actions_ci_cd_workflow_generator.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating automated generation of multi-platform GitHub Actions CI workflows.\r
"""\r
\r
def generate_github_actions_ci_workflow() -> str:\r
    """Generates an enterprise-grade GitHub Actions CI workflow YAML manifest."""\r
    workflow_yaml = """name: CI Test Suite & Quality Gates\r
\r
on:\r
  push:\r
    branches: [main, develop]\r
  pull_request:\r
    branches: [main]\r
\r
concurrency:\r
  group: \${{ github.workflow }}-\${{ github.ref }}\r
  cancel-in-progress: true\r
\r
jobs:\r
  lint-and-typecheck:\r
    name: Lint & Static Type Check\r
    runs-on: ubuntu-latest\r
    steps:\r
      - name: Checkout Code Repository\r
        uses: actions/checkout@v4\r
\r
      - name: Set up Python 3.12\r
        uses: actions/setup-python@v5\r
        with:\r
          python-version: "3.12"\r
          cache: "pip"\r
\r
      - name: Install Development Dependencies\r
        run: pip install -e ".[dev]"\r
\r
      - name: Run Ruff Linter & Formatter Check\r
        run: ruff check .\r
\r
      - name: Run Mypy Static Type Verification\r
        run: mypy src/\r
\r
  matrix-testing:\r
    name: PyTest Matrix (\${{ matrix.os }} - Py\${{ matrix.python-version }})\r
    needs: lint-and-typecheck\r
    runs-on: \${{ matrix.os }}\r
    strategy:\r
      fail-fast: false\r
      matrix:\r
        os: [ubuntu-latest, windows-latest, macos-latest]\r
        python-version: ["3.10", "3.11", "3.12"]\r
\r
    steps:\r
      - name: Checkout Code\r
        uses: actions/checkout@v4\r
\r
      - name: Set up Python \${{ matrix.python-version }}\r
        uses: actions/setup-python@v5\r
        with:\r
          python-version: \${{ matrix.python-version }}\r
\r
      - name: Install Project & Test Harness\r
        run: pip install -e ".[dev]"\r
\r
      - name: Run Automated PyTest with Branch Coverage\r
        run: pytest --cov=src --cov-branch --cov-report=term-missing --cov-fail-under=85\r
"""\r
    return workflow_yaml\r
\r
def test_workflow_generator():\r
    print("   [...] Generating GitHub Actions CI/CD Pipeline Manifest...")\r
    yaml_content = generate_github_actions_ci_workflow()\r
    assert "concurrency:" in yaml_content\r
    assert "matrix:" in yaml_content\r
    assert "--cov-fail-under=85" in yaml_content\r
    print("   [PASS] 1. GitHub Actions multi-OS and multi-Python matrix workflow generated")\r
\r
def main():\r
    print("=" * 75)\r
    print("[CI/CD WORKFLOWS] Enterprise Multi-Platform Matrix Testing (.github)")\r
    print("=" * 75)\r
\r
    test_workflow_generator()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Multi-platform matrix CI pipelines catch OS-specific path and")\r
    print("           encoding bugs automatically before code is merged into production.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,C=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 4: Publishing projects to GitHub with Git commits, issues, and releases\r
# File: issue_and_pr_templates_scaffolding.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating GitHub Issue Templates and PR review checklists.\r
"""\r
\r
def generate_pull_request_template() -> str:\r
    """Generates standardized Pull Request review checklist manifest."""\r
    return """## 📌 Description of Changes\r
\r
Please provide a brief summary of the changes made and the business requirement satisfied.\r
\r
Fixes #(issue_number)\r
\r
---\r
\r
## 🛠️ Type of Change\r
\r
- [ ] 🐛 Bug fix (non-breaking change fixing an existing defect)\r
- [ ] ✨ New feature (non-breaking addition to functionality)\r
- [ ] 💥 Breaking change (fix or feature modifying existing API contract)\r
- [ ] 📝 Documentation update only\r
- [ ] 🧪 Test suite enhancement / coverage improvement\r
\r
---\r
\r
## ✅ Quality Assurance Checklist\r
\r
- [ ] My code follows the repository's PEP 8 and clean architecture style guidelines.\r
- [ ] I have added docstrings (Google format) and PEP 484 type annotations to new public functions.\r
- [ ] I have written automated unit/integration tests with 100% pass rate.\r
- [ ] Branch coverage meets or exceeds the required threshold (--cov-fail-under=85).\r
- [ ] Mypy static type verification passes with zero errors (\`mypy --strict\`).\r
- [ ] All new and existing automated tests pass locally.\r
"""\r
\r
def generate_bug_report_template() -> str:\r
    """Generates standardized Bug Report markdown template."""\r
    return """---\r
name: 🐛 Bug Report\r
about: Create a report to help us improve and fix defects\r
title: "[BUG]: "\r
labels: ["bug", "triage"]\r
assignees: ""\r
---\r
\r
### 📝 Problem Description\r
A clear and concise description of what the bug is.\r
\r
### 🔄 Steps to Reproduce\r
1. Run command '...'\r
2. Pass argument '...'\r
3. See error traceback: '...'\r
\r
### 🎯 Expected Behavior\r
A clear description of what should have occurred.\r
\r
### 💻 Environment Details\r
- **OS**: [e.g. Windows 11, Ubuntu 24.04]\r
- **Python Version**: [e.g. 3.12.2]\r
- **Package Version**: [e.g. v1.0.0]\r
"""\r
\r
def test_templates():\r
    print("   [...] Generating GitHub Issue & PR Templates...")\r
    pr_template = generate_pull_request_template()\r
    bug_template = generate_bug_report_template()\r
    assert "Quality Assurance Checklist" in pr_template\r
    assert "Steps to Reproduce" in bug_template\r
    print("   [PASS] 1. PR Checklist & Bug Report templates generated cleanly")\r
\r
def main():\r
    print("=" * 75)\r
    print("[COMMUNITY TEMPLATES] Structured GitHub PR & Issue Scaffolding")\r
    print("=" * 75)\r
\r
    test_templates()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Structured PR checklists and issue templates prevent vague bug")\r
    print("           reports and maintain high code quality across team contributions.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,S=`"""\r
# Module: 004_004_capstone-projects\r
# Topic 4: Publishing projects to GitHub with Git commits, issues, and releases\r
# File: institutional_github_release_orchestrator.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: End-to-end automated release pipeline orchestrator simulating changelog\r
#              generation, SemVer tag creation, and wheel artifact distribution.\r
"""\r
\r
from dataclasses import dataclass\r
from datetime import date\r
\r
@dataclass\r
class ReleaseCommit:\r
    commit_hash: str\r
    category: str\r
    author: str\r
    description: str\r
\r
class InstitutionalReleaseOrchestrator:\r
    """Orchestrates production GitHub releases and changelog generation."""\r
    def __init__(self, project_name: str, version: str):\r
        self.project_name = project_name\r
        self.version = version\r
        self.commits: list[ReleaseCommit] = []\r
\r
    def add_commit(self, commit_hash: str, category: str, author: str, description: str):\r
        self.commits.append(ReleaseCommit(commit_hash, category, author, description))\r
\r
    def generate_release_notes(self) -> str:\r
        features = [c for c in self.commits if c.category == "feat"]\r
        fixes = [c for c in self.commits if c.category == "fix"]\r
        docs = [c for c in self.commits if c.category == "docs"]\r
\r
        today_str = date.today().isoformat()\r
        md = f"# 🚀 Release {self.version} ({today_str})\\n\\n"\r
        md += f"Production release of **{self.project_name}** deployed across Barrackpore, Kolkata, and Ichapur campuses.\\n\\n"\r
\r
        if features:\r
            md += "### ✨ New Features\\n"\r
            for f in features:\r
                md += f"- **{f.description}** by @{f.author} ({f.commit_hash[:7]})\\n"\r
            md += "\\n"\r
\r
        if fixes:\r
            md += "### 🐛 Bug Fixes\\n"\r
            for fx in fixes:\r
                md += f"- {fx.description} by @{fx.author} ({fx.commit_hash[:7]})\\n"\r
            md += "\\n"\r
\r
        if docs:\r
            md += "### 📝 Documentation\\n"\r
            for d in docs:\r
                md += f"- {d.description} by @{d.author} ({d.commit_hash[:7]})\\n"\r
            md += "\\n"\r
\r
        md += "### 📦 Distribution Assets\\n"\r
        md += f"- \`institutional_manager-{self.version.lstrip('v')}-py3-none-any.whl\` (Binary Wheel)\\n"\r
        md += f"- \`institutional_manager-{self.version.lstrip('v')}.tar.gz\` (Source Tarball)\\n"\r
\r
        return md\r
\r
def test_release_orchestration():\r
    print("   [...] Testing Release Notes & Artifact Orchestrator...")\r
    orchestrator = InstitutionalReleaseOrchestrator("Institutional Student Manager", "v1.0.0")\r
\r
    # Add milestone commits for student management\r
    orchestrator.add_commit("a1b2c3d4", "feat", "sukantahui", "Add multi-campus SQLite persistence and foreign keys")\r
    orchestrator.add_commit("e5f6a7b8", "feat", "sukantahui", "Implement student fee waiver and ledger calculation engine")\r
    orchestrator.add_commit("c9d0e1f2", "fix", "sukantahui", "Prevent duplicate enrollment collisions via KeyError")\r
    orchestrator.add_commit("b3c4d5e6", "docs", "sukantahui", "Complete Google-style docstrings, README badges, and doctests")\r
\r
    release_notes = orchestrator.generate_release_notes()\r
    assert "Release v1.0.0" in release_notes\r
    assert "New Features" in release_notes\r
    assert "Bug Fixes" in release_notes\r
    assert "Binary Wheel" in release_notes\r
    print("   [PASS] 1. Release v1.0.0 changelog & distribution assets generated successfully")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Complete GitHub Release Orchestration Pipeline")\r
    print("=" * 80)\r
\r
    test_release_orchestration()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Automating release note generation from Git history guarantees")\r
    print("           transparent changelogs and reproducible wheel deployments.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,N=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 4: PRO LEVEL • MODULE 004_004: CAPSTONE PROJECTS\r
           TOPIC 4: PUBLISHING TO GITHUB (COMMITS, ISSUES, RELEASES & CI/CD)\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. CONVENTIONAL COMMITS SPECIFICATION\r
--------------------------------------------------------------------------------\r
  Format: <type>(<scope>): <short description>\r
\r
  Types:\r
  - feat: A new feature (bumps MINOR version in SemVer)\r
  - fix: A bug fix (bumps PATCH version in SemVer)\r
  - docs: Documentation changes only\r
  - refactor: Code change that neither fixes a bug nor adds a feature\r
  - test: Adding or correcting tests\r
  - chore: Build process, tooling, or dependency updates\r
\r
  Examples:\r
  - feat(admission): add regional scholarship grant for Barrackpore campus\r
  - fix(ledger): prevent overpayment balance corruption in atomic transactions\r
  - docs(readme): add shields.io coverage badge and quickstart guide\r
\r
--------------------------------------------------------------------------------\r
2. GITHUB ACTIONS CI WORKFLOW (.github/workflows/ci.yml)\r
--------------------------------------------------------------------------------\r
  name: CI Test & Quality Gates\r
  on: [push, pull_request]\r
\r
  jobs:\r
    test:\r
      runs-on: \${{ matrix.os }}\r
      strategy:\r
        matrix:\r
          os: [ubuntu-latest, windows-latest, macos-latest]\r
          python-version: ["3.10", "3.11", "3.12"]\r
      steps:\r
        - uses: actions/checkout@v4\r
        - uses: actions/setup-python@v5\r
          with:\r
            python-version: \${{ matrix.python-version }}\r
        - run: pip install -e ".[dev]"\r
        - run: ruff check .\r
        - run: mypy src/\r
        - run: pytest --cov=src --cov-fail-under=85\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 4: GITHUB RELEASES & CI/CD\r
================================================================================\r
`,k=[{question:"What is the 'Conventional Commits' specification and why is it important?",shortAnswer:"Conventional Commits is a lightweight convention on top of commit messages (e.g. 'feat:', 'fix:', 'docs:', 'refactor:', 'test:', 'chore:'), providing structured commit history that enables automated changelog generation and automatic semantic version bumping.",explanation:"Standardized commit syntax enabling automated release tooling.",hint:"Uses structured prefixes like feat: and fix: for readable history and automated changelogs.",level:"basic",codeExample:"git commit -m 'feat(admission): add Barrackpore scholarship rule'"},{question:"How does Semantic Versioning (SemVer: MAJOR.MINOR.PATCH) work in software releases?",shortAnswer:"MAJOR version increments on incompatible breaking API changes; MINOR version increments on backwards-compatible new features; PATCH version increments on backwards-compatible bug fixes.",explanation:"The SemVer versioning specification.",hint:"MAJOR = breaking changes, MINOR = new features, PATCH = bug fixes.",level:"basic",codeExample:"# 1.0.0 -> 1.0.1 (Fix) -> 1.1.0 (Feature) -> 2.0.0 (Breaking change)"},{question:"What is the role of GitHub Actions in a modern Python CI/CD pipeline?",shortAnswer:"GitHub Actions automates continuous integration workflows on every Git push or pull request, executing test suites (pytest), linters (ruff), static type checkers (mypy), and coverage reports across multi-OS and multi-Python matrix environments.",explanation:"Automated continuous integration and testing with GitHub Actions.",hint:"Runs automated tests, linters, and type checks on every PR across Linux/Windows/macOS.",level:"basic",codeExample:"# .github/workflows/ci.yml runs on push & pull_request"},{question:"What is a 'Matrix Build' in GitHub Actions?",shortAnswer:"A strategy that automatically runs the same test job across multiple configurations simultaneously (e.g. 3 Python versions × 3 operating systems = 9 parallel test runs), ensuring cross-platform compatibility.",explanation:"Matrix job execution across OS and Python version combinations.",hint:"Runs tests concurrently across multiple Python versions and operating systems.",level:"moderate",codeExample:`strategy:
  matrix:
    os: [ubuntu-latest, windows-latest]
    python: ['3.10', '3.12']`},{question:"What are GitHub 'Branch Protection Rules' and why should they be enabled on 'main'?",shortAnswer:"Branch protection rules prevent direct pushes to the 'main' branch, enforcing code reviews (PR approval requirements), linear Git history, and mandatory passing CI/CD status checks before any code can be merged.",explanation:"Enforcing quality gates and branch governance.",hint:"Blocks direct pushes to main, requiring passing CI tests and pull request code reviews.",level:"basic",codeExample:"# Enforce: Require pull request reviews + Require status checks to pass"},{question:"Where should GitHub Issue and Pull Request templates be placed in a repository?",shortAnswer:"Inside the '.github/ISSUE_TEMPLATE/' directory (for 'bug_report.md' and 'feature_request.md') and '.github/pull_request_template.md', guiding contributors to submit complete diagnostic information.",explanation:"Standard repository community templates location.",hint:"Inside the .github/ folder (.github/ISSUE_TEMPLATE/ and .github/pull_request_template.md).",level:"basic",codeExample:`.github/ISSUE_TEMPLATE/bug_report.md
.github/pull_request_template.md`},{question:"What is the difference between Trunk-Based Development and Git Flow?",shortAnswer:"Trunk-Based Development merges small, frequent branches directly into the 'main' trunk using short-lived feature branches and continuous integration; Git Flow uses long-lived branches (main, develop, feature, release, hotfix) with scheduled release cycles.",explanation:"Branching strategies comparison in modern software engineering.",hint:"Trunk-Based uses short-lived branches merged quickly into main; Git Flow uses multiple long-lived branches.",level:"moderate",codeExample:"# Trunk-Based: feature-branch -> PR -> main (Fast CI/CD rhythm)"},{question:"How do you create and push an annotated Git release tag to GitHub?",shortAnswer:`Run 'git tag -a v1.0.0 -m "Release version 1.0.0"' and push it with 'git push origin v1.0.0' (or 'git push --tags').`,explanation:"Creating and publishing annotated Git release tags.",hint:"git tag -a v1.0.0 -m 'Release 1.0.0' && git push origin v1.0.0.",level:"basic",codeExample:`git tag -a v1.0.0 -m 'Version 1.0.0 Release'
git push origin v1.0.0`},{question:"What is a 'Wheel' distribution ('.whl') in Python packaging?",shortAnswer:"A Wheel is a built-package format (ZIP-based archive) that can be installed instantly by 'pip' without needing to run build steps or compile C extensions at install time, providing fast and reliable package installation.",explanation:"Python built distribution standard (PEP 427).",hint:"A pre-built package archive (.whl) that pip installs instantly without build overhead.",level:"moderate",codeExample:"python -m build # Generates dist/my_package-1.0.0-py3-none-any.whl"},{question:"What is the purpose of 'Trusted Publishing' (OIDC) when publishing Python packages to PyPI from GitHub Actions?",shortAnswer:"OpenID Connect (OIDC) allows GitHub Actions workflows to publish packages to PyPI directly using short-lived cryptographic tokens, eliminating the need to store long-lived permanent API tokens in GitHub repository secrets.",explanation:"Modern secure package publishing via OIDC Trusted Publishing.",hint:"Uses short-lived tokens to publish to PyPI without storing permanent secret keys.",level:"complex",codeExample:`permissions:
  id-token: write # Required for PyPI OIDC Trusted Publishing`},{question:"What is a 'Draft Release' on GitHub?",shortAnswer:"An unpublished release staging area that allows maintainers to prepare release notes, review changelogs, and attach compiled wheel binaries before making the release publicly visible to users.",explanation:"Release staging and drafting in GitHub.",hint:"A private staging area for release notes and wheel assets before public release.",level:"basic",codeExample:"# Draft releases allow review of release notes before publishing"},{question:`Why should you never use 'git commit -m "fixes"' or vague commit messages?`,shortAnswer:"Vague commit messages destroy project history, make debugging regressions via 'git bisect' nearly impossible, and prevent automated tools from generating clear release changelogs.",explanation:"Git history hygiene and bisect debugging.",hint:"Destroys project history and prevents automated changelogs; always write descriptive commit messages.",level:"basic",codeExample:`# ANTI-PATTERN: git commit -m 'update code'
# BEST PRACTICE: git commit -m 'fix(ledger): correct tuition tax rounding'`},{question:"What is 'git bisect' and how does clean Git history facilitate it?",shortAnswer:"'git bisect' uses binary search through commit history to automatically pinpoint the exact commit that introduced a bug; having small atomic commits that each pass tests makes bisecting fast and accurate.",explanation:"Binary search regression hunting via git bisect.",hint:"Uses binary search to find the exact commit that caused a regression.",level:"moderate",codeExample:`git bisect start
git bisect bad HEAD
git bisect good v1.0.0`},{question:"What does the 'actions/checkout@v4' action do in GitHub Actions?",shortAnswer:"It clones the Git repository into the CI runner's workspace so subsequent workflow steps can access source code, test files, and configuration manifests.",explanation:"Repository checkout step in GitHub Actions.",hint:"Clones your repository code into the GitHub Actions virtual runner.",level:"basic",codeExample:"- uses: actions/checkout@v4"},{question:"What is the purpose of an open-source 'LICENSE' file (e.g. MIT vs Apache 2.0)?",shortAnswer:"The LICENSE file legally grants others permission to use, copy, modify, and distribute your software under specified terms; without a license, the code is under exclusive copyright and legally cannot be used by anyone else.",explanation:"Open-source legal licensing fundamentals.",hint:"Legally grants permission to use and modify your software; without it, code cannot be legally used.",level:"basic",codeExample:"# MIT License: Permissive, simple, allows commercial & private use"},{question:"How do you automatically attach binary build artifacts (wheels, tarballs) to a GitHub Release?",shortAnswer:`Using the 'softprops/action-gh-release' action in a release workflow triggered on Git tag push ('tags: ["v*"]'), uploading all files matching 'dist/*'.`,explanation:"Automated release asset attachment.",hint:"Trigger on tag push and use action-gh-release to upload files in dist/*.",level:"moderate",codeExample:`- uses: softprops/action-gh-release@v2
  with:
    files: dist/*`},{question:"What is 'Squash and Merge' in GitHub Pull Requests?",shortAnswer:"Squash and Merge combines all intermediate commits from a feature branch into a single clean commit on the 'main' branch, keeping the main history tidy and linear.",explanation:"Linear git history through PR commit squashing.",hint:"Combines all branch commits into one single commit when merging to main.",level:"basic",codeExample:"# Consolidates 10 WIP commits into 1 clean Conventional Commit on main"},{question:"How do you specify Python version requirements in 'pyproject.toml'?",shortAnswer:`Under the '[project]' table using the 'requires-python' key (e.g. 'requires-python = ">=3.10"').`,explanation:"Specifying minimum supported Python runtime versions.",hint:`Use 'requires-python = ">=3.10"' inside pyproject.toml.`,level:"basic",codeExample:`[project]
requires-python = '>=3.10'`},{question:"What is an 'Atomic Commit' in Git?",shortAnswer:"An atomic commit makes a single, complete, cohesive change (and its corresponding test updates) that leaves the codebase in a working, passing state, never mixing unrelated bug fixes or refactoring.",explanation:"Atomic commit discipline in professional engineering.",hint:"A single cohesive change with its tests that leaves the test suite passing.",level:"basic",codeExample:"# Atomic commit: feature implementation + unit tests together"},{question:"What is the ultimate golden rule of publishing Python software to GitHub?",shortAnswer:"Follow Conventional Commits, protect the 'main' branch with mandatory multi-platform CI/CD quality gates, publish tagged releases with automated changelogs and wheel assets, and provide clear issue templates.",explanation:"The complete enterprise Python GitHub publishing standard.",hint:"Conventional commits + protected main + multi-OS CI/CD + tagged releases with wheels.",level:"basic",codeExample:"# Enterprise GitHub Publishing Standard"}];function O(){const h=l.useRef([]),[s,u]=l.useState("ciMatrix"),[r,p]=l.useState("FEAT"),[f,P]=l.useState("v1.0.0");let i="v1.1.0",a="feat(admission): add Barrackpore regional merit grant",o="Minor version bump (+0.1.0) due to backwards-compatible new feature";r==="FEAT"?(i="v1.1.0",a="feat(admission): add Barrackpore regional merit grant",o="Minor bump (1.0.0 -> 1.1.0) for new backwards-compatible functionality."):r==="FIX"?(i="v1.0.1",a="fix(ledger): prevent overpayment balance corruption in atomic transactions",o="Patch bump (1.0.0 -> 1.0.1) for backwards-compatible bug fix."):r==="DOCS"?(i="v1.0.0",a="docs(readme): add shields.io coverage badge and quickstart guide",o="No version bump (1.0.0 -> 1.0.0) for documentation-only changes."):r==="BREAKING"&&(i="v2.0.0",a="feat(api)!: migrate student ID schema to UUIDv4 format",o="Major bump (1.0.0 -> 2.0.0) due to breaking change in API/database schema.");const g=`# .github/workflows/ci.yml - Production Multi-Platform CI Matrix
name: CI Test Suite & Quality Gates

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

concurrency:
  group: \${{ github.workflow }}-\${{ github.ref }}
  cancel-in-progress: true

jobs:
  matrix-testing:
    name: PyTest Matrix (\${{ matrix.os }} - Py\${{ matrix.python-version }})
    runs-on: \${{ matrix.os }}
    strategy:
      fail-fast: false
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        python-version: ["3.10", "3.11", "3.12"]

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: \${{ matrix.python-version }}
          cache: "pip"

      - name: Install Project in Editable Mode
        run: pip install -e ".[dev]"

      - name: Run Ruff Linter
        run: ruff check .

      - name: Run Mypy Static Type Verification
        run: mypy src/

      - name: Run PyTest with Quality Gates
        run: pytest --cov=src --cov-branch --cov-report=term-missing --cov-fail-under=85`;l.useEffect(()=>{const t=new IntersectionObserver(c=>{c.forEach(x=>{x.isIntersecting&&x.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return h.current.forEach(c=>{c&&t.observe(c)}),()=>t.disconnect()},[]);const n=t=>{t&&!h.current.includes(t)&&h.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 4 • Module 004_004"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 4"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Capstone Projects, Portfolio & Interview Mastery"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Publishing to GitHub: ",e.jsx("span",{className:"text-teal-400",children:"Commits, Releases & CI/CD"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master open-source publishing, Git version control hygiene, and automated GitHub continuous integration in Python: writing structured Conventional Commits (",e.jsx("code",{className:"text-teal-300 font-mono",children:"feat:"}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:"fix:"}),"), managing Semantic Versioning (SemVer), configuring multi-OS and multi-Python GitHub Actions matrix pipelines (",e.jsx("code",{className:"text-cyan-300 font-mono",children:".github/workflows/ci.yml"}),"), establishing branch protection rules, generating automated changelogs, and attaching compiled Wheel binary distributions to GitHub Releases."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📝 Conventional Commits Specification"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏷️ Semantic Versioning (SemVer)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚙️ Multi-OS GitHub Actions Matrix"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📦 GitHub Releases & Binary Wheels"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Professional GitHub Publishing Architecture"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"Publishing production software requires disciplined Git hygiene, automated quality gates, and standardized release engineering:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ Conventional Commits"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"feat:, fix:, docs:"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Standardized prefixes enabling automated changelog generation and automatic SemVer version bumping."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ Semantic Versioning"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"MAJOR.MINOR.PATCH"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Precise version signals: breaking API changes (Major), new features (Minor), and bug fixes (Patch)."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ GitHub Actions CI"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"matrix: [Ubuntu, Win, Mac]"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Executes linters, static type checks, and pytest coverage quality gates across multi-OS environments on every PR."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ Binary Releases"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"dist/*.whl + Tarballs"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Builds and attaches pre-compiled wheel binary distribution packages directly to tagged GitHub releases."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"Branch Protection: The Defense Line Against Broken Production"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["Never push directly to ",e.jsx("code",{className:"text-teal-300 font-mono",children:"main"}),"! Always configure GitHub Branch Protection Rules requiring: 1. Pull Request peer reviews, 2. Passing GitHub Actions CI status checks (Ruff, Mypy, PyTest), and 3. Linear Git history via Squash-and-Merge."]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing CI/CD Matrix, SemVer Flow & PR Review Gates"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>u("ciMatrix"),className:d("px-3 py-1.5 rounded-lg transition-all",s==="ciMatrix"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"GitHub Actions CI Matrix"}),e.jsx("button",{onClick:()=>u("semverFlow"),className:d("px-3 py-1.5 rounded-lg transition-all",s==="semverFlow"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Conventional Commits & SemVer"}),e.jsx("button",{onClick:()=>u("prReviewGate"),className:d("px-3 py-1.5 rounded-lg transition-all",s==="prReviewGate"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"PR Quality Gate Lifecycle"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining multi-OS matrix testing, automated semantic versioning calculations, and protected PR merge flows:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:s==="ciMatrix"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"GITHUB ACTIONS MULTI-PLATFORM CI MATRIX (9 PARALLEL RUNNERS)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"235",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"15",y:"25",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"Event Trigger"}),e.jsx("text",{x:"15",y:"55",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"on: [push, PR]"}),e.jsx("text",{x:"15",y:"75",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"branches: [main]"}),e.jsx("rect",{x:"10",y:"115",width:"160",height:"105",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"15",y:"135",fill:"#38bdf8",fontSize:"8",fontWeight:"bold",children:"Pre-Flight Job:"}),e.jsx("text",{x:"15",y:"152",fill:"#e0f2fe",fontSize:"8",children:"1. Ruff Linter"}),e.jsx("text",{x:"15",y:"169",fill:"#e0f2fe",fontSize:"8",children:"2. Mypy Type Check"}),e.jsx("text",{x:"15",y:"186",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Gate Passed ✅"})]}),e.jsx("path",{d:"M 220 160 L 250 160",stroke:"#14b8a6",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsxs("g",{transform:"translate(260, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"340",height:"235",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"15",y:"25",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"Matrix Testing Grid (3x3 = 9 Runners)"}),e.jsx("rect",{x:"15",y:"45",width:"310",height:"50",rx:"4",fill:"#022c22",stroke:"#0d9488"}),e.jsx("text",{x:"25",y:"65",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"Ubuntu 24.04: Py3.10 | Py3.11 | Py3.12"}),e.jsx("text",{x:"25",y:"82",fill:"#86efac",fontSize:"8",children:"3 Parallel Linux Runners ✅"}),e.jsx("rect",{x:"15",y:"105",width:"310",height:"50",rx:"4",fill:"#022c22",stroke:"#0d9488"}),e.jsx("text",{x:"25",y:"125",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"Windows Server: Py3.10 | Py3.11 | Py3.12"}),e.jsx("text",{x:"25",y:"142",fill:"#86efac",fontSize:"8",children:"3 Parallel Windows Runners (CP1252 Checked) ✅"}),e.jsx("rect",{x:"15",y:"165",width:"310",height:"50",rx:"4",fill:"#022c22",stroke:"#0d9488"}),e.jsx("text",{x:"25",y:"185",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"macOS 14: Py3.10 | Py3.11 | Py3.12"}),e.jsx("text",{x:"25",y:"202",fill:"#86efac",fontSize:"8",children:"3 Parallel macOS Runners ✅"})]}),e.jsx("path",{d:"M 610 160 L 640 160",stroke:"#14b8a6",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsxs("g",{transform:"translate(650, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"170",height:"235",rx:"6",fill:"#1e1b4b",stroke:"#818cf8"}),e.jsx("text",{x:"15",y:"25",fill:"#e0e7ff",fontSize:"11",fontWeight:"bold",children:"Quality Gate"}),e.jsx("rect",{x:"10",y:"45",width:"150",height:"175",rx:"4",fill:"#0f172a",stroke:"#4f46e5"}),e.jsx("text",{x:"15",y:"70",fill:"#facc15",fontSize:"9",fontWeight:"bold",children:"Coverage Audit:"}),e.jsx("text",{x:"15",y:"90",fill:"#a5b4fc",fontSize:"8",children:"Total Coverage: 96%"}),e.jsx("text",{x:"15",y:"105",fill:"#a5b4fc",fontSize:"8",children:"Threshold: >= 85%"}),e.jsx("rect",{x:"15",y:"130",width:"140",height:"40",rx:"4",fill:"#064e3b"}),e.jsx("text",{x:"22",y:"153",fill:"#86efac",fontSize:"9",fontWeight:"bold",children:"BUILD: PASSED ✅"}),e.jsx("text",{x:"15",y:"195",fill:"#e0e7ff",fontSize:"7",children:"Ready for PR Merge"})]})]}):s==="semverFlow"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"CONVENTIONAL COMMITS TO SEMANTIC VERSIONING (SEMVER) MAPPING"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"25",y:"35",width:"240",height:"180",rx:"6",fill:"#0369a1",stroke:"#38bdf8"}),e.jsx("text",{x:"35",y:"60",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"1. PATCH (1.0.0 ➔ 1.0.1)"}),e.jsx("text",{x:"35",y:"85",fill:"#e0f2fe",fontSize:"9",fontFamily:"monospace",children:"fix(ledger): fix tax math"}),e.jsx("text",{x:"35",y:"105",fill:"#e0f2fe",fontSize:"9",fontFamily:"monospace",children:"perf(db): optimize index"}),e.jsx("text",{x:"35",y:"135",fill:"#bae6fd",fontSize:"8",children:"Backwards-compatible bug fix."}),e.jsx("text",{x:"35",y:"150",fill:"#bae6fd",fontSize:"8",children:"Zero new features added."}),e.jsx("text",{x:"35",y:"195",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"Trigger: 'fix:' / 'perf:'"}),e.jsx("rect",{x:"290",y:"35",width:"240",height:"180",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"300",y:"60",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"2. MINOR (1.0.0 ➔ 1.1.0)"}),e.jsx("text",{x:"300",y:"85",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"feat(admission): add waiver"}),e.jsx("text",{x:"300",y:"105",fill:"#ccfbf1",fontSize:"9",fontFamily:"monospace",children:"feat(cli): add export command"}),e.jsx("text",{x:"300",y:"135",fill:"#a7f3d0",fontSize:"8",children:"Backwards-compatible new feature."}),e.jsx("text",{x:"300",y:"150",fill:"#a7f3d0",fontSize:"8",children:"Existing APIs continue working."}),e.jsx("text",{x:"300",y:"195",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Trigger: 'feat:'"}),e.jsx("rect",{x:"555",y:"35",width:"240",height:"180",rx:"6",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"565",y:"60",fill:"#fda4af",fontSize:"11",fontWeight:"bold",children:"3. MAJOR (1.0.0 ➔ 2.0.0)"}),e.jsx("text",{x:"565",y:"85",fill:"#fecdd3",fontSize:"9",fontFamily:"monospace",children:"feat(api)!: migrate to UUID"}),e.jsx("text",{x:"565",y:"105",fill:"#fecdd3",fontSize:"9",fontFamily:"monospace",children:"BREAKING CHANGE: new schema"}),e.jsx("text",{x:"565",y:"135",fill:"#ffe4e6",fontSize:"8",children:"Incompatible breaking change."}),e.jsx("text",{x:"565",y:"150",fill:"#ffe4e6",fontSize:"8",children:"Requires caller code migration."}),e.jsx("text",{x:"565",y:"195",fill:"#fb7185",fontSize:"8",fontWeight:"bold",children:"Trigger: 'feat!:' / 'BREAKING'"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"PROTECTED MAIN BRANCH & PULL REQUEST QUALITY GATE LIFECYCLE"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"25",y:"40",width:"220",height:"165",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"35",y:"65",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"1. Feature Branch"}),e.jsx("text",{x:"35",y:"90",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"git checkout -b feat/waiver"}),e.jsx("text",{x:"35",y:"110",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:'git commit -m "feat(...)"'}),e.jsx("text",{x:"35",y:"130",fill:"#bae6fd",fontSize:"8",fontFamily:"monospace",children:"git push origin feat/waiver"}),e.jsx("text",{x:"35",y:"180",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"Isolated Development"}),e.jsx("path",{d:"M 255 120 L 285 120",stroke:"#a855f7",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"295",y:"40",width:"240",height:"165",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"305",y:"65",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"2. PR Automated CI Gate"}),e.jsx("text",{x:"305",y:"90",fill:"#ccfbf1",fontSize:"8",children:"✓ 9/9 Matrix Tests Passing"}),e.jsx("text",{x:"305",y:"108",fill:"#ccfbf1",fontSize:"8",children:"✓ 96% Branch Coverage (>= 85%)"}),e.jsx("text",{x:"305",y:"126",fill:"#ccfbf1",fontSize:"8",children:"✓ Ruff & Mypy Strict Clean"}),e.jsx("text",{x:"305",y:"144",fill:"#ccfbf1",fontSize:"8",children:"✓ 1 Peer Review Approved"}),e.jsx("text",{x:"305",y:"180",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"All Status Checks Green"}),e.jsx("path",{d:"M 545 120 L 575 120",stroke:"#a855f7",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"585",y:"40",width:"210",height:"165",rx:"6",fill:"#3b0764",stroke:"#c084fc"}),e.jsx("text",{x:"595",y:"65",fill:"#f3e8ff",fontSize:"11",fontWeight:"bold",children:"3. Squash Merge ➔ Release"}),e.jsx("text",{x:"595",y:"90",fill:"#d8b4fe",fontSize:"8",fontFamily:"monospace",children:"Merge to main (Linear)"}),e.jsx("text",{x:"595",y:"110",fill:"#d8b4fe",fontSize:"8",fontFamily:"monospace",children:"SemVer Tag: v1.1.0"}),e.jsx("text",{x:"595",y:"130",fill:"#d8b4fe",fontSize:"8",fontFamily:"monospace",children:"Build Wheels: dist/*.whl"}),e.jsx("text",{x:"595",y:"150",fill:"#d8b4fe",fontSize:"8",children:"Changelog published!"}),e.jsx("text",{x:"595",y:"180",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"🚀 Live Production Release"})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Conventional Commit & SemVer Release Simulator"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select a Conventional Commit type to observe automatic Semantic Versioning calculations, changelog generation, and GitHub Actions CI workflow triggers:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Select Conventional Commit Category:"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:[{id:"FEAT",label:"feat: (Feature)",bump:"MINOR (+0.1.0)"},{id:"FIX",label:"fix: (Bug Fix)",bump:"PATCH (+0.0.1)"},{id:"DOCS",label:"docs: (Docs Only)",bump:"NO BUMP"},{id:"BREAKING",label:"feat!: (Breaking)",bump:"MAJOR (+1.0.0)"}].map(t=>e.jsxs("button",{onClick:()=>p(t.id),className:d("p-2.5 rounded-xl border text-left transition-all",r===t.id?t.id==="BREAKING"?"bg-rose-950/60 border-rose-500 shadow-md shadow-rose-950/50":"bg-teal-950/60 border-teal-500 shadow-md shadow-teal-950/50":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"),children:[e.jsx("div",{className:"text-xs font-bold text-slate-200",children:t.label}),e.jsx("div",{className:"text-[10px] text-cyan-400 font-mono mt-0.5",children:t.bump})]},t.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-teal-900/50",children:[e.jsx("div",{className:"text-xs text-teal-400 font-medium mb-1",children:"Base SemVer Version"}),e.jsx("div",{className:"text-2xl font-bold font-mono text-teal-300",children:f})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-cyan-900/50",children:[e.jsx("div",{className:"text-xs text-cyan-400 font-medium mb-1",children:"Calculated Next Release"}),e.jsx("div",{className:"text-2xl font-bold font-mono text-cyan-300",children:i}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-1",children:o})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-purple-900/50",children:[e.jsx("div",{className:"text-xs text-purple-400 font-medium mb-1",children:"Conventional Git Message"}),e.jsx("div",{className:"text-xs font-mono text-purple-200 mt-1 leading-snug break-all",children:a})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"Generated .github/workflows/ci.yml CI/CD Manifest:"}),e.jsx("pre",{className:"p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-teal-200 overflow-x-auto leading-relaxed",children:g})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Release Automation"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade release engineering labs covering Conventional Commit parsing, multi-platform GitHub Actions CI workflows, issue templates, and the complete institutional release orchestrator:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: Conventional Commit Parsing & SemVer Calculation Engine"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Parsing structured commit headers (",e.jsx("code",{className:"text-teal-300 font-mono",children:"feat(scope):"}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:"fix(scope):"}),") and calculating next SemVer tags."]})]}),e.jsx(m,{fileModule:w,title:"conventional_commits_and_git_workflow.py",highlightLines:[18,30,48,62]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Multi-Platform GitHub Actions CI/CD Workflow Generator"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Generating multi-OS matrix testing pipelines across Ubuntu, Windows, and macOS with coverage quality gates."})]}),e.jsx(m,{fileModule:j,title:"github_actions_ci_cd_workflow_generator.py",highlightLines:[14,32,52,68]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: GitHub Issue & Pull Request Templates Scaffolder"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Scaffolding structured Bug Report issue templates and Pull Request review checklists inside ",e.jsx("code",{className:"text-purple-300 font-mono",children:".github/"}),"."]})]}),e.jsx(m,{fileModule:C,title:"issue_and_pr_templates_scaffolding.py",highlightLines:[12,28,44]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Complete Institutional GitHub Release Orchestrator Case Study"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Full release orchestration pipeline generating automated changelogs, SemVer tag creation, and wheel distribution assets for v1.0.0."})]}),e.jsx(m,{fileModule:S,title:"institutional_github_release_orchestrator.py",highlightLines:[20,36,52,68]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Publishing & CI/CD Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Pushing Directly to Main"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:"Pushing directly to the production branch bypasses CI test runs and peer review, causing broken deployments."}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:["# ANTI-PATTERN: git push origin main",`
`,"# BEST PRACTICE: Protect main; require PR + CI pass"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Vague Commit Messages"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:'Writing commit messages like "fixes" or "updates" destroys project history and breaks automated changelogs.'}),e.jsxs("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:['# ANTI-PATTERN: git commit -m "fixed stuff"',`
`,'# BEST PRACTICE: git commit -m "fix(ledger): correct tax rounding"']})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Single-OS CI Testing"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Running CI on Ubuntu only hides Windows filesystem backslash and encoding (",e.jsx("code",{className:"text-rose-400 font-mono",children:"CP1252"}),") crashes."]}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: matrix: os: [ubuntu-latest, windows-latest, macos-latest]"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Releases Without Binary Wheels"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Publishing Git tags without building and attaching ",e.jsx("code",{className:"text-rose-400 font-mono",children:".whl"})," artifacts forces slow builds during installation."]}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: Build dist/*.whl and attach via action-gh-release"})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Professional Publishing & CI/CD Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Strict Conventional Commits:"})," Format all commits as ",e.jsx("code",{className:"text-teal-300 font-mono",children:"type(scope): description"}),"."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Multi-OS Matrix CI:"})," Run automated tests across Ubuntu, Windows, and macOS with Python 3.10/3.11/3.12."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Enforce Branch Protection:"})," Block direct pushes to ",e.jsx("code",{className:"text-teal-300 font-mono",children:"main"})," and require passing CI status checks."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Publish Tagged Releases:"})," Create annotated SemVer tags with automated changelogs and wheel assets."]})]})]})]}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(y,{title:"GitHub Publishing, Commits & CI/CD FAQs",questions:k})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(b,{content:N,title:"Topic 4: Publishing Projects to GitHub Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic4_note.txt"})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(v,{note:"A professional developer is defined by their release engineering discipline. In our institutional student management deployment pipeline across Barrackpore, Kolkata, Ichapur, and Jadavpur, using Conventional Commits, multi-OS GitHub Actions matrix testing, and automated SemVer release tagging guarantees that every feature update for Mamata, Mahima, and Susmita is thoroughly verified across Linux and Windows before rolling into production."})})]})]})}export{O as default};
