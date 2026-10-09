import{b as d,j as e}from"./vendor-react-core-B-R9HE-Z.js";import{T as v}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as y}from"./FAQTemplate-16IfroqC.js";import{P as w}from"./PlainTextPrint-C6NaUtnE.js";import{$ as E,aj as T,bo as C,t as b,aE as S,br as N,O as A,bJ as j,x as D,R as I,ae as P,a as L}from"./vendor-icons-C1Dcofhq.js";const h=[{id:1,question:"What is the primary objective of the 'Implementation / Coding Phase' in web development?",options:["To draft the project budget and financial invoices","To translate the Design Document Specifications (DDS) into working, executable source code","To gather client requirements via surveys","To conduct final marketing campaigns"],correctAnswer:1,explanation:"The Implementation Phase converts structural blueprints and design specifications into actual programming code across front-end and back-end tiers.",explanationBengali:"ইমপ্লিমেন্টেশন বা কোডিং পর্বের মূল লক্ষ্য হলো ডিজাইন স্পেসিফিকেশনগুলোকে কার্যকরী সোর্স কোডে রূপান্তর করা।"},{id:2,question:"Which of the following is considered the primary input to the Implementation Phase?",options:["Software Requirements Specification (SRS) alone without designs","Approved Design Document Specification (DDS) including ER schemas and UI wireframes","Bug Reports from final Beta Testing","User Acceptance Certificate"],correctAnswer:1,explanation:"Developers write code based directly on the approved DDS (wireframes, table schemas, class diagrams) produced in Stage 2.",explanationBengali:"ডেভেলপাররা ডিজাইন ফেজে তৈরি অনুমোদিত DDS (ডিজাইন ডকুমেন্ট স্পেসিফিকেশন)-এর ওপর ভিত্তি করে কোড লিখেন।"},{id:3,question:"Which set of technologies is predominantly used for front-end web development?",options:["HTML5, CSS3, and JavaScript","C++, Assembly, and COBOL","MySQL, Oracle, and MongoDB","Apache Tomcat and Nginx"],correctAnswer:0,explanation:"HTML5 builds semantic document structure, CSS3 provides responsive styling, and JavaScript adds interactive dynamic behavior.",explanationBengali:"ফ্রন্ট-এন্ড ওয়েব ডেভেলপমেন্টে মূলত HTML5 (স্ট্রাকচার), CSS3 (স্টাইলিং) এবং JavaScript (ইন্টারঅ্যাকশন) ব্যবহৃত হয়।"},{id:4,question:"Why should developers use `PreparedStatement` instead of `Statement` when executing SQL queries in Java back-end code?",options:["To make Java code compile into Python code","To prevent SQL Injection vulnerabilities and pre-compile SQL queries for better performance","To bypass database passwords completely","To increase font sizes in MySQL output"],correctAnswer:1,explanation:"PreparedStatements parameterize input with placeholders (`?`), neutralizing malicious SQL injection attacks and optimizing query execution plans.",explanationBengali:"PreparedStatement প্যারামিটারাইজড কুয়েরি ব্যবহার করে SQL Injection আক্রমণ প্রতিরোধ করে এবং কুয়েরি দ্রুত এক্সিকিউট করে।"},{id:5,question:"Which JDBC method is used to execute `INSERT`, `UPDATE`, or `DELETE` SQL statements in Java?",options:["executeQuery()","executeUpdate()","fetchRows()","commitTransactionOnly()"],correctAnswer:1,explanation:"`executeUpdate()` executes DML/DDL statements (INSERT, UPDATE, DELETE) and returns the number of affected rows (an integer).",explanationBengali:"`executeUpdate()` মেথডটি INSERT, UPDATE এবং DELETE কুয়েরি চালানোর জন্য ব্যবহৃত হয় এবং প্রভাবিত সারির সংখ্যা রিটার্ন করে।"},{id:6,question:"Which JDBC method is used to execute a `SELECT` query and retrieve database records in Java?",options:["executeUpdate()","executeQuery()","dropTable()","createConnection()"],correctAnswer:1,explanation:"`executeQuery()` executes SELECT statements and returns a `ResultSet` object containing the retrieved tabular data.",explanationBengali:"`executeQuery()` মেথডটি SELECT কুয়েরি রান করে এবং ডেটা সহ একটি ResultSet অবজেক্ট রিটার্ন করে।"},{id:7,question:"What is the role of the `ResultSet` object in Java JDBC programming?",options:["It represents a tabular stream of database rows returned by a SELECT query","It compiles Java code into native machine code","It renders CSS styles in Google Chrome","It encrypts hard drives"],correctAnswer:0,explanation:"A `ResultSet` maintains a cursor pointing to a table of data, allowing rows to be traversed using `.next()` and read using `.getString()`, `.getInt()`, etc.",explanationBengali:"`ResultSet` হলো একটি কার্সার ভিত্তিক অবজেক্ট যা SELECT কুয়েরির মাধ্যমে প্রাপ্ত টেবিলের রেকর্ডগুলো একে একে রিড করতে সাহায্য করে।"},{id:8,question:"What does AJAX / Fetch API enable in modern web application front-ends?",options:["Asynchronous data exchange with the server without reloading the entire web page","Permanent deletion of client-side hard drive files","Direct hardware acceleration of CPU fans","Bypassing internet service provider firewalls"],correctAnswer:0,explanation:"AJAX and Fetch API allow web pages to send and receive data from web servers asynchronously in the background without refreshing the page.",explanationBengali:"AJAX বা Fetch API পেজ রিলোড না করেই ব্যাকগ্রাউন্ডে সার্ভারের সাথে ডেটা আদান-প্রদান করতে দেয়।"},{id:9,question:"In desktop Java GUI development using NetBeans, which component is used to trigger action events when clicked?",options:["JLabel","JButton","JPanel","JProgressBar"],correctAnswer:1,explanation:"`JButton` triggers an `ActionEvent` when clicked, which is handled inside the `actionPerformed()` event handler method.",explanationBengali:"NetBeans GUI-তে `JButton` ক্লিকের মাধ্যমে অ্যাকশন ইভেন্ট ট্রিগার করে, যা `actionPerformed()` মেথডে প্রসেস করা হয়।"},{id:10,question:"Which of the following represents a best practice for clean, maintainable code during Stage 3?",options:["Writing all code in a single 10,000-line file with single-letter variable names","Using meaningful variable identifiers, modular functions, consistent indentation, and explanatory comments","Hardcoding database passwords in client-side HTML files","Disabling all error handling and try-catch blocks"],correctAnswer:1,explanation:"Clean code adheres to naming conventions, modular component design, proper indentation, and robust exception handling.",explanationBengali:"অর্থপূর্ণ ভ্যারিয়েবলের নাম, মডিউলার ফাংশন, সঠিক ইন্ডেন্টেশন ও কমেন্ট ব্যবহার করা কোডিংয়ের সর্বোত্তম নিয়ম।"},{id:11,question:"What is the function of a 'Version Control System' (such as Git) during the coding phase?",options:["It tracks code changes, manages branches, and enables collaborative development among multiple programmers","It replaces the need for writing HTML or CSS","It automatically pays developer salaries","It prevents web servers from getting dusty"],correctAnswer:0,explanation:"Git tracks historical commits, merges code written by team members, and prevents accidental code overwrites.",explanationBengali:"Git ভার্সন কন্ট্রোল কোডের পরিবর্তন রেকর্ড রাখে, ব্রাঞ্চিং পরিচালনা করে এবং একাধিক ডেভেলপারের একসাথে কাজ করা সহজ করে।"},{id:12,question:"Which Java package provides classes and interfaces for JDBC database connectivity?",options:["java.io.*","java.sql.*","java.awt.*","java.net.*"],correctAnswer:1,explanation:"The `java.sql` package contains `Connection`, `DriverManager`, `Statement`, `PreparedStatement`, and `ResultSet`.",explanationBengali:"`java.sql` প্যাকেজে JDBC ডেটাবেস সংযোগের সমস্ত ক্লাস এবং ইন্টারফেস রয়েছে।"},{id:13,question:"What is the purpose of input sanitization during front-end and back-end implementation?",options:["To clean dust off keyboard keys","To filter out dangerous characters and scripts to prevent Cross-Site Scripting (XSS) and SQL injection","To make user input bold and italic","To automatically convert rupee amounts to dollars"],correctAnswer:1,explanation:"Sanitizing and validating user inputs prevents attackers from injecting malicious scripts (XSS) or destructive SQL statements.",explanationBengali:"ইনপুট স্যানিটাইজেশন ক্ষতিকারক স্ক্রিপ্ট ও স্পেশাল ক্যারেক্টার ফিল্টার করে XSS এবং SQL Injection প্রতিরোধ করে।"},{id:14,question:"In NetBeans Java Swing, which component is used to capture single-line textual user input (e.g., Consumer ID)?",options:["JLabel","JTextField","JRadioButton","JCheckBox"],correctAnswer:1,explanation:"`JTextField` allows users to enter and edit a single line of unformatted text.",explanationBengali:"`JTextField` ব্যবহারকারীকে এক লাইনের টেক্সট ইনপুট (যেমন কনজিউমার আইডি) প্রদান করতে সাহায্য করে।"},{id:15,question:"Why should database credentials (username and password) never be embedded in client-side JavaScript code?",options:["Because JavaScript files are executed in the user's browser, allowing anyone to inspect source code and steal database access","Because JavaScript cannot connect to the internet","Because JavaScript automatically deletes passwords every 5 minutes","Because web servers crash when reading JavaScript strings"],correctAnswer:0,explanation:"Client-side code is publicly viewable via browser developer tools; database access must always be mediated by a secure back-end tier.",explanationBengali:"ব্রাউজারে ক্লায়েন্ট-সাইড JS কোড যে কেউ 'View Source' বা DevTools দিয়ে দেখতে পারে, তাই ডেটাবেস ক্রেডেনশিয়াল কখনোই ক্লায়েন্টে রাখা যাবে না।"},{id:16,question:"What is a 'REST API' developed during the implementation phase?",options:["A software interface enabling systems to communicate over HTTP using standard methods like GET, POST, PUT, DELETE","A holiday schedule for programmers","An automated sleep timer for web servers","A printer driver protocol"],correctAnswer:0,explanation:"REST (Representational State Transfer) APIs allow front-end apps to send and retrieve structured JSON data to and from back-end servers.",explanationBengali:"REST API হলো একটি ইন্টারফেস যা HTTP পদ্ধতির (GET, POST ইত্যাদি) মাধ্যমে ক্লায়েন্ট ও সার্ভারের মধ্যে JSON ডেটা আদান-প্রদান করতে ব্যবহৃত হয়।"},{id:17,question:"What happens if an unexpected database connection error occurs during Java backend execution?",options:["The computer catches fire","A `SQLException` is thrown, which should be caught inside a `try-catch` block to provide graceful error handling","The database automatically deletes all tables","The Java compiler uninstalls itself"],correctAnswer:1,explanation:"Database errors throw a checked `SQLException`, which developers must handle gracefully with `try-catch-finally` to avoid server crashes.",explanationBengali:"ডেটাবেস ত্রুটি হলে `SQLException` তৈরি হয়, যা `try-catch` ব্লকে হ্যান্ডেল করে ব্যবহারকারীকে সুন্দর বার্তা দিতে হয়।"},{id:18,question:"Which HTTP method is universally used when a client submits sensitive form data (e.g. passwords, billing payments) to the server?",options:["GET","POST","HEAD","OPTIONS"],correctAnswer:1,explanation:"POST packages data inside the HTTP request body rather than displaying parameters openly in the browser URL query string.",explanationBengali:"সংবেদনশীল ডেটা (যেমন পাসওয়ার্ড বা বিল পেমেন্ট) পাঠানোর জন্য POST মেথড ব্যবহৃত হয় কারণ এটি URL-এ ডেটা উন্মুক্ত করে না।"},{id:19,question:"In Java JDBC, which object is responsible for establishing a physical connection to the MySQL database?",options:["DriverManager.getConnection(url, user, password)","System.out.println()","Scanner.nextLine()","Math.random()"],correctAnswer:0,explanation:"`DriverManager.getConnection()` connects to the database using the JDBC URL (e.g. `jdbc:mysql://localhost:3306/billing_db`).",explanationBengali:"`DriverManager.getConnection()` নির্দিষ্ট JDBC URL এবং ইউজারনেম/পাসওয়ার্ড দিয়ে ডেটাবেসের সাথে কানেকশন তৈরি করে।"},{id:20,question:"What is 'Modularity' in software implementation?",options:["Breaking a large software program into smaller, independent, reusable modules or classes","Buying expensive computer monitors","Writing duplicate code across multiple files","Disabling CSS styles"],correctAnswer:0,explanation:"Modularity divides code into manageable components (e.g. BillingService, AuthService, DBConnection), improving readability and reusability.",explanationBengali:"মডিউলারিটি হলো একটি বড় প্রোগ্রামকে ছোট ছোট স্বাধীন ও পুনর্ব্যবহারযোগ্য মডিউলে বিভক্ত করার প্রক্রিয়া।"},{id:21,question:"What is the primary deliverable of Stage 3 (Implementation / Coding Phase)?",options:["A signed client questionnaire","Complete, fully functional, and integrated source code repository ready for testing","The initial project feasibility study","The final marketing brochure"],correctAnswer:1,explanation:"The output of Stage 3 is the integrated, executable source code codebase covering front-end and back-end modules.",explanationBengali:"তৃতীয় পর্বের মূল ডেলিভারেবল হলো সম্পূর্ণ কার্যকরী এবং সমন্বিত সোর্স কোড রিপোজিটরি যা টেস্ট করার জন্য প্রস্তুত।"},{id:22,question:"What is 'Continuous Integration' (CI) during modern software coding?",options:["Regularly merging developer code commits into a central repository and running automated compilation and tests","Writing code for 24 hours without sleeping","Deleting previous versions of code permanently","Keeping the web server disconnected from the network"],correctAnswer:0,explanation:"CI automates building and verifying code whenever developers commit changes, identifying merge conflicts early.",explanationBengali:"CI (Continuous Integration) হলো স্বয়ংক্রিয়ভাবে কোড একত্রীকরণ এবং বিল্ড/টেস্ট চালিয়ে ত্রুটি দ্রুত শনাক্ত করার প্রক্রিয়া।"},{id:23,question:"Which of the following represents a secure coding practice for storing user passwords in the database?",options:["Storing passwords as plain text strings (e.g. 'mypassword123')","Hashing passwords using one-way cryptographic algorithms with salt (e.g., BCrypt, PBKDF2)","Sharing user passwords on public chat channels","Saving passwords in a public text file on the desktop"],correctAnswer:1,explanation:"Passwords must never be saved in plaintext; secure systems hash and salt passwords so even database administrators cannot view them.",explanationBengali:"পাসওয়ার্ড কখনোই প্লেইন টেক্সটে রাখা উচিত নয়; সেগুলোকে শক্তিশালী হ্যাশিং অ্যালগরিদম (যেমন BCrypt) দিয়ে হ্যাশ করে সংরক্ষণ করতে হয়।"},{id:24,question:"In NetBeans Swing GUI, how do you extract text entered into a `JTextField` named `txtConsumerId`?",options:["txtConsumerId.getText()","txtConsumerId.deleteText()","txtConsumerId.clear()","txtConsumerId.sendEmail()"],correctAnswer:0,explanation:"`txtConsumerId.getText()` returns a `String` containing the characters entered by the user in the text field.",explanationBengali:"`txtConsumerId.getText()` মেথডটি টেক্সটফিল্ডে ব্যবহারকারীর টাইপ করা স্ট্রিং মানটি রিট্রিভ করে।"},{id:25,question:"What phase immediately follows the Implementation / Coding Phase in the standard Web Application Development Lifecycle?",options:["Requirement Definition Phase","Testing & Quality Assurance Phase (Stage 4)","Design Phase (Stage 2)","Feasibility Study Phase"],correctAnswer:1,explanation:"Once the code is implemented, it directly enters Stage 4: Testing & Quality Assurance Phase for rigorous bug hunting and validation.",explanationBengali:"কোডিং সমাপ্ত হওয়ার পর অ্যাপ্লিকেশনটি সরাসরি চতুর্থ পর্বে (Stage 4: Testing & Quality Assurance Phase) প্রবেশ করে।"}],B=`================================================================================
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)
SEGMENT 2: OPERATING WEB-BASED APPLICATIONS & E-SERVICES
MODULE: THE FOUR STAGES OF WEB APPLICATION DEVELOPMENT
TOPIC 3: STAGE 3: IMPLEMENTATION / CODING PHASE (FRONT-END & BACK-END)
TEACHER / AUTHOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)
================================================================================

1. WHAT IS THE IMPLEMENTATION / CODING PHASE?
--------------------------------------------------------------------------------
The Implementation Phase (Stage 3) is the construction phase of the Web Application Development Lifecycle. In this stage, software programmers and developers translate the design specifications (DDS, ER schemas, UI wireframes, flowcharts) into functional, executable source code.

Primary Deliverable: A fully integrated, functional source code repository (front-end interfaces, middle-tier controllers/services, and back-end database access routines) ready for systematic testing.

2. FRONT-END IMPLEMENTATION TECHNOLOGIES
--------------------------------------------------------------------------------
A. Web Technologies:
   - HTML5: Creates semantic structural markup (<header>, <nav>, <main>, <form>, <table>, <input>).
   - CSS3: Provides responsive styling, layout grids (Flexbox, CSS Grid), color schemes, and media queries.
   - JavaScript (ES6+) / React: Implements client-side dynamic validation, DOM manipulation, and asynchronous HTTP calls via Fetch API / AJAX without page reloads.

B. Desktop GUI (NetBeans & Java Swing):
   - JFrame: Top-level desktop application window.
   - JLabel: Displays static text or images (e.g. "Enter Consumer ID:").
   - JTextField: Captures single-line textual user inputs via \`getText()\`.
   - JButton: Interactive button triggering \`ActionEvent\` handled by \`actionPerformed()\`.
   - JTable: Renders tabular database records visually on screen.

3. BACK-END & DATABASE PERSISTENCE CODING
--------------------------------------------------------------------------------
A. Middle-Tier Business Logic:
   - Written in Java (Servlets, Spring Boot, NetBeans Java classes) or Node.js.
   - Validates user sessions, executes business formulas (e.g., Late Fee = BillAmount * 0.05 if CurrentDate > DueDate), and packages responses as JSON.

B. Java Database Connectivity (JDBC - java.sql.*):
   - Step 1: Load Driver & Connect:
     \`Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/billing_db", "root", "password");\`
   
   - Step 2: Prepare Parameterized SQL Statement:
     \`PreparedStatement ps = con.prepareStatement("INSERT INTO BILLS (ConsumerID, Units, Amount) VALUES (?, ?, ?)");\`
     \`ps.setInt(1, 101);\`
     \`ps.setDouble(2, 240.50);\`
     \`ps.setDouble(3, 1480.00);\`
   
   - Step 3: Execute Query:
     * \`int rows = ps.executeUpdate();\`  -> For INSERT, UPDATE, DELETE (returns affected row count).
     * \`ResultSet rs = ps.executeQuery();\` -> For SELECT queries (returns tabular ResultSet cursor).
   
   - Step 4: Process Results & Close:
     \`while (rs.next()) { String name = rs.getString("FullName"); }\`
     \`con.close();\`

4. SECURITY: WHY PREPAREDSTATEMENT IS MANDATORY
--------------------------------------------------------------------------------
- SQL Injection Vulnerability: If developers concatenate raw user input into SQL queries (e.g. \`"SELECT * FROM Users WHERE User='" + input + "'"\`), an attacker can enter \`' OR '1'='1\` to bypass authentication.
- PreparedStatement Defense: PreparedStatements treat user inputs strictly as literal values (placeholders \`?\`), eliminating SQL injection exploits and improving database query execution speed via pre-compilation.

5. CLEAN CODING STANDARDS & BEST PRACTICES
--------------------------------------------------------------------------------
1. Meaningful Naming Conventions: Use camelCase for variables/methods (\`calculateBillingAmount\`), PascalCase for classes (\`BillingController\`), and UPPER_SNAKE_CASE for constants (\`MAX_RETRY_COUNT\`).
2. Modularity & Separation of Concerns: Separate UI presentation code, business computation services, and database DAO (Data Access Object) classes.
3. Exception Handling: Wrap database and I/O operations in \`try-catch-finally\` blocks to catch \`SQLException\` gracefully without crashing the server.
4. Version Control: Commit and push modular code to Git repositories with descriptive commit messages.

6. DELIVERABLES OF STAGE 3 (IMPLEMENTATION PHASE)
--------------------------------------------------------------------------------
1. Front-end web pages / GUI forms with client-side validation.
2. Back-end business logic services and API endpoints.
3. Database access scripts (JDBC / DAO layer).
4. Unit test scaffolding and Git source code repository.

7. KEY CBSE BOARD EXAM TAKEAWAYS
--------------------------------------------------------------------------------
- "Which phase translates DDS into executable code?" -> Stage 3: Implementation / Coding Phase.
- "Which method is used to run INSERT / UPDATE queries in JDBC?" -> \`executeUpdate()\`.
- "Which method is used to run SELECT queries in JDBC?" -> \`executeQuery()\`.
- "Why use PreparedStatement instead of Statement?" -> To prevent SQL Injection and optimize execution performance.
- "Which method reads text from a NetBeans JTextField?" -> \`getText()\`.

================================================================================
END OF TOPIC 3 STUDY NOTES
================================================================================
`,R=()=>{const[s,c]=d.useState("billing"),[a,o]=d.useState("backend"),[p,u]=d.useState(!1),[n,t]=d.useState(null),r={billing:{title:"Generate Online Utility Bill (Barrackpore Electric)",frontendCode:`<!-- Front-End: HTML5 Form + JavaScript Fetch API -->
<form id="billingForm" onsubmit="handleGenerateBill(event)">
  <label>Consumer ID:</label>
  <input type="text" id="consumerId" placeholder="e.g. WB-KOL-8921" required />
  
  <label>Units Consumed (kWh):</label>
  <input type="number" id="units" min="1" step="0.5" required />
  
  <button type="submit">Calculate & Save Bill</button>
</form>

<script>
async function handleGenerateBill(event) {
  event.preventDefault();
  const consumerId = document.getElementById('consumerId').value;
  const units = parseFloat(document.getElementById('units').value);

  // Asynchronous HTTP POST request to middle-tier Java Servlet
  const response = await fetch('/api/bills/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ consumerId, units })
  });
  const data = await response.json();
  alert('Bill Generated! Total Payable: ₹' + data.totalAmount);
}
<\/script>`,backendCode:`// Middle-Tier: Java Servlet Controller with JDBC PreparedStatement
import java.io.*;
import java.sql.*;
import javax.servlet.http.*;

public class BillingServlet extends HttpServlet {
  protected void doPost(HttpServletRequest req, HttpServletResponse res) 
      throws IOException {
    String consumerId = req.getParameter("consumerId");
    double units = Double.parseDouble(req.getParameter("units"));

    // Business Logic: Slab-based electricity tariff calculation
    double ratePerUnit = (units > 200) ? 6.50 : 5.00;
    double totalAmount = units * ratePerUnit + 150.00; // Fixed charge

    // Secure Database Persistence using JDBC PreparedStatement
    String sql = "INSERT INTO BILLS (ConsumerID, Units, TotalAmount, Status) VALUES (?, ?, ?, 'Unpaid')";
    
    try (Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/billing_db", "dbuser", "Pass@123");
         PreparedStatement ps = con.prepareStatement(sql)) {
      
      ps.setString(1, consumerId);
      ps.setDouble(2, units);
      ps.setDouble(3, totalAmount);
      
      int affectedRows = ps.executeUpdate(); // Executes DML statement
      
      res.setContentType("application/json");
      res.getWriter().write("{\\"status\\":\\"success\\", \\"totalAmount\\":" + totalAmount + "}");
    } catch (SQLException e) {
      res.setStatus(500);
      res.getWriter().write("{\\"error\\": \\"" + e.getMessage() + "\\"}");
    }
  }
}`,databaseCode:`-- Back-End Database: MySQL DDL Schema & Executed Query
CREATE TABLE BILLS (
  BillID INT AUTO_INCREMENT PRIMARY KEY,
  ConsumerID VARCHAR(30) NOT NULL,
  Units DECIMAL(8,2) NOT NULL,
  TotalAmount DECIMAL(10,2) NOT NULL,
  BillingDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  Status ENUM('Unpaid', 'Paid') DEFAULT 'Unpaid'
);

-- Parameterized Query executed via JDBC PreparedStatement:
INSERT INTO BILLS (ConsumerID, Units, TotalAmount, Status) 
VALUES ('WB-KOL-8921', 240.0, 1710.00, 'Unpaid');`},login:{title:"User Authentication & Password Verification",frontendCode:`<!-- Front-End: Login Form with Client-Side Validation -->
<form id="loginForm" onsubmit="handleLogin(event)">
  <input type="text" id="username" placeholder="Username / Email" required />
  <input type="password" id="password" placeholder="Password" required />
  <button type="submit">Sign In</button>
</form>

<script>
async function handleLogin(e) {
  e.preventDefault();
  const u = document.getElementById('username').value.trim();
  const p = document.getElementById('password').value;

  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: u, password: p })
  });
  const result = await res.json();
  if (result.authenticated) window.location.href = '/dashboard';
}
<\/script>`,backendCode:`// Middle-Tier: Java Authentication Service with PreparedStatement
import java.sql.*;
import org.mindrot.jbcrypt.BCrypt;

public class AuthService {
  public boolean authenticateUser(String username, String rawPassword) throws SQLException {
    // PREPAREDSTATEMENT prevents SQL Injection attacks like: ' OR '1'='1
    String query = "SELECT PasswordHash FROM USERS WHERE Username = ?";
    
    try (Connection conn = DBConnection.getConnection();
         PreparedStatement ps = conn.prepareStatement(query)) {
      
      ps.setString(1, username);
      ResultSet rs = ps.executeQuery(); // Executes SELECT query
      
      if (rs.next()) {
        String storedHash = rs.getString("PasswordHash");
        // Verify hashed password safely with BCrypt
        return BCrypt.checkpw(rawPassword, storedHash);
      }
      return false; // User not found
    }
  }
}`,databaseCode:`-- Back-End Database: MySQL Users Table
CREATE TABLE USERS (
  UserID INT AUTO_INCREMENT PRIMARY KEY,
  Username VARCHAR(50) UNIQUE NOT NULL,
  PasswordHash VARCHAR(255) NOT NULL,
  Role VARCHAR(20) DEFAULT 'Citizen'
);

-- Parameterized SELECT executed securely:
SELECT PasswordHash FROM USERS WHERE Username = 'sukanta_hui';`}},i=()=>{u(!0),t(null),setTimeout(()=>{u(!1),t(s==="billing"?{status:"HTTP 200 OK",message:"PreparedStatement compiled successfully. 1 row inserted into MySQL table `BILLS`.",calcDetails:"Units: 240 kWh | Rate: ₹6.50/unit + ₹150 base = ₹1,710.00 Total Bill.",dbRecord:"{ BillID: 1042, ConsumerID: 'WB-KOL-8921', TotalAmount: 1710.00, Status: 'Unpaid' }"}:{status:"HTTP 200 OK",message:"PreparedStatement bound parameter 'sukanta_hui'. Hash verified via BCrypt.",calcDetails:"User authenticated successfully. JWT session token generated.",dbRecord:"{ UserID: 412, Username: 'sukanta_hui', Role: 'Educator', Session: 'ACTIVE' }"})},1200)},m=r[s];return e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl mb-12",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",children:[e.jsx(N,{className:"w-3.5 h-3.5"})," Stage 3: Construction Pipeline"]}),e.jsx("h3",{className:"text-xl font-bold text-white mt-2",children:"Interactive 3-Tier Code Pipeline Inspector"}),e.jsx("p",{className:"text-sm text-slate-400",children:"See how Front-End JavaScript, Middle-Tier Java Servlets, and Back-End MySQL interact seamlessly."})]}),e.jsxs("div",{className:"flex bg-slate-800/80 p-1 rounded-xl border border-slate-700",children:[e.jsx("button",{onClick:()=>{c("billing"),t(null)},className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${s==="billing"?"bg-emerald-600 text-white shadow":"text-slate-400 hover:text-slate-200"}`,children:"Billing Logic"}),e.jsx("button",{onClick:()=>{c("login"),t(null)},className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${s==="login"?"bg-emerald-600 text-white shadow":"text-slate-400 hover:text-slate-200"}`,children:"Auth & PreparedStatements"})]})]}),e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3 mb-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>o("frontend"),className:`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all ${a==="frontend"?"bg-sky-500/20 text-sky-400 border border-sky-500/40":"text-slate-400 hover:text-slate-200 bg-slate-800/40"}`,children:[e.jsx(A,{className:"w-3.5 h-3.5"})," 1. Front-End (HTML/JS)"]}),e.jsxs("button",{onClick:()=>o("backend"),className:`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all ${a==="backend"?"bg-purple-500/20 text-purple-400 border border-purple-500/40":"text-slate-400 hover:text-slate-200 bg-slate-800/40"}`,children:[e.jsx(j,{className:"w-3.5 h-3.5"})," 2. Middle-Tier (Java / JDBC)"]}),e.jsxs("button",{onClick:()=>o("database"),className:`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all ${a==="database"?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"text-slate-400 hover:text-slate-200 bg-slate-800/40"}`,children:[e.jsx(D,{className:"w-3.5 h-3.5"})," 3. Data Tier (MySQL SQL)"]})]}),e.jsx("button",{onClick:i,disabled:p,className:"px-4 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 transition-all",children:p?e.jsxs(e.Fragment,{children:[e.jsx(I,{className:"w-3.5 h-3.5 animate-spin"})," Executing Pipeline..."]}):e.jsxs(e.Fragment,{children:[e.jsx(P,{className:"w-3.5 h-3.5"})," Test Code Pipeline"]})})]}),e.jsxs("div",{className:"bg-slate-950 rounded-xl border border-slate-800 p-4 font-mono text-xs overflow-x-auto relative",children:[e.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-500 mb-2 pb-2 border-b border-slate-800",children:[e.jsxs("span",{children:[a==="frontend"&&"Presentation Tier Source (Client-Side HTML5 / JavaScript)",a==="backend"&&"Application Tier Source (Java Servlet with PreparedStatement)",a==="database"&&"Database Tier Script (MySQL DDL / Executed Statement)"]}),e.jsx("span",{className:"text-emerald-400",children:"Strictly follows Stage 2 DDS Blueprints"})]}),e.jsxs("pre",{className:"text-slate-300 leading-relaxed",children:[a==="frontend"&&m.frontendCode,a==="backend"&&m.backendCode,a==="database"&&m.databaseCode]})]}),n&&e.jsxs("div",{className:"mt-4 p-4 rounded-xl bg-slate-950 border border-emerald-500/40 font-mono text-xs space-y-2 animate-fadeIn",children:[e.jsxs("div",{className:"flex items-center justify-between text-emerald-400 font-bold",children:[e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx(b,{className:"w-4 h-4"})," Live Code Execution Successful (",n.status,")"]}),e.jsx("span",{className:"text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-300",children:"Runtime: 12ms"})]}),e.jsx("div",{className:"text-slate-300",children:n.message}),e.jsx("div",{className:"text-amber-300",children:n.calcDetails}),e.jsxs("div",{className:"p-2 bg-slate-900 rounded border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-sky-300 font-bold",children:"Database Return: "}),n.dbRecord]})]})]})},U=()=>e.jsxs("div",{className:"p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-rose-950/30 border border-rose-500/30 shadow-xl mb-12",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(L,{className:"w-6 h-6 text-rose-400"}),e.jsx("h3",{className:"text-xl font-bold text-white",children:"Security Spotlight: Why PreparedStatements are Mandatory"})]}),e.jsxs("p",{className:"text-xs text-slate-300 mb-6 max-w-3xl",children:["One of the most dangerous coding vulnerabilities is ",e.jsx("strong",{children:"SQL Injection"}),". In CBSE Class 12 IT 802, students must understand how parameter placeholders (`?`) prevent hackers from altering database query logic."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-rose-500/40 font-mono text-xs",children:[e.jsxs("div",{className:"flex items-center justify-between text-rose-400 font-bold mb-2 pb-1 border-b border-rose-500/30",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(S,{className:"w-4 h-4"})," Flawed / Vulnerable Statement"]}),e.jsx("span",{className:"text-[10px] text-rose-300 bg-rose-950 px-1.5 py-0.5 rounded",children:"High Risk"})]}),e.jsx("p",{className:"text-slate-400 text-[11px] mb-2",children:"Concatenating raw user input directly into SQL strings:"}),e.jsx("pre",{className:"text-rose-300 bg-slate-900 p-2.5 rounded mb-2 overflow-x-auto text-[11px]",children:`// DANGEROUS: String Concatenation
String q = "SELECT * FROM Users WHERE User='" 
           + userInput + "' AND Pass='" + pass + "'";
Statement stmt = con.createStatement();
ResultSet rs = stmt.executeQuery(q);`}),e.jsxs("div",{className:"text-[11px] text-slate-400",children:[e.jsx("strong",{className:"text-rose-400",children:"Exploit:"})," Entering ",e.jsx("code",{className:"text-amber-300",children:"' OR '1'='1"})," turns the query into: ",e.jsx("code",{className:"text-slate-300",children:"WHERE User='' OR '1'='1'"}),", granting unauthorized access!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-emerald-500/40 font-mono text-xs",children:[e.jsxs("div",{className:"flex items-center justify-between text-emerald-400 font-bold mb-2 pb-1 border-b border-emerald-500/30",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(b,{className:"w-4 h-4"})," Secure PreparedStatement"]}),e.jsx("span",{className:"text-[10px] text-emerald-300 bg-emerald-950 px-1.5 py-0.5 rounded",children:"Best Practice"})]}),e.jsx("p",{className:"text-slate-400 text-[11px] mb-2",children:"Parameterizing inputs with positional `?` placeholders:"}),e.jsx("pre",{className:"text-emerald-300 bg-slate-900 p-2.5 rounded mb-2 overflow-x-auto text-[11px]",children:`// SECURE: Pre-compiled PreparedStatement
String q = "SELECT * FROM Users WHERE User = ? AND Pass = ?";
PreparedStatement ps = con.prepareStatement(q);
ps.setString(1, userInput);
ps.setString(2, pass);
ResultSet rs = ps.executeQuery();`}),e.jsxs("div",{className:"text-[11px] text-slate-400",children:[e.jsx("strong",{className:"text-emerald-400",children:"Protection:"})," The database engine treats the entire input strictly as literal string values, preventing query manipulation completely."]})]})]})]});function Q(){const[s,c]=d.useState({}),[a,o]=d.useState(!1),p=(t,r)=>{c(i=>({...i,[t]:r}))},u=()=>{let t=0;return h.forEach(r=>{s[r.id]===r.correctAnswer&&t++}),t},n=()=>{c({}),o(!1)};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2",children:[e.jsx("span",{children:"Segment 2: Operating Web-Based Applications"}),e.jsx("span",{children:"/"}),e.jsx("span",{children:"Module: Four Stages of Web App Dev"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Stage 3: Implementation / Coding Phase"}),e.jsx("p",{className:"mt-3 text-base text-slate-400 max-w-3xl",children:"Transforming design blueprints into robust executable code: Front-End UI scripting, Middle-Tier Java Servlet logic, JDBC PreparedStatement database transactions, and secure coding standards."})]}),e.jsx(R,{}),e.jsx(U,{}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 font-bold text-lg",children:[e.jsx(E,{className:"w-5 h-5"}),e.jsx("h4",{children:"JDBC Methods: `executeUpdate` vs `executeQuery`"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"In Java database programming (`java.sql.*`), developers must choose the correct execution method based on SQL query type:"}),e.jsxs("ul",{className:"space-y-1.5 text-xs text-slate-400",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{className:"text-emerald-300",children:"executeUpdate():"})," Used for `INSERT`, `UPDATE`, `DELETE`, and DDL statements. Returns an ",e.jsx("code",{className:"text-purple-300 font-mono",children:"int"})," representing affected row count."]}),e.jsxs("li",{children:["• ",e.jsx("strong",{className:"text-sky-300",children:"executeQuery():"})," Used for `SELECT` queries. Returns a ",e.jsx("code",{className:"text-purple-300 font-mono",children:"ResultSet"})," object that allows row-by-row data reading via ",e.jsx("code",{className:"text-slate-300",children:"rs.next()"}),"."]})]})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-lg",children:[e.jsx(T,{className:"w-5 h-5"}),e.jsx("h4",{children:"Clean Code Standards & Modularity"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Writing production-ready software requires strict adherence to naming conventions (camelCase methods, PascalCase classes), modular separation of concerns, comprehensive error logging, and Git version control."}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-400",children:[e.jsx("span",{className:"text-purple-300 font-semibold",children:"Stage 3 Deliverable:"})," Fully integrated executable code repository tested with unit tests and ready for Stage 4 QA validation."]})]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30",children:[e.jsx(C,{className:"w-3.5 h-3.5"})," Self-Assessment Challenge"]}),e.jsx("h3",{className:"text-2xl font-bold text-white mt-2",children:"Topic 3 Mastery Quiz (25 MCQs)"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Test your knowledge of Stage 3 Implementation, JDBC, PreparedStatements, and Front-End/Back-End coding."})]}),a&&e.jsxs("div",{className:"flex items-center gap-4 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-xs text-slate-400 font-medium",children:"Your Score"}),e.jsxs("div",{className:"text-xl font-extrabold text-amber-400",children:[u()," / ",h.length]})]}),e.jsx("button",{onClick:n,className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-all",children:"Retake"})]})]}),e.jsx("div",{className:"space-y-6",children:h.map((t,r)=>{const i=s[t.id];return i!==void 0&&t.correctAnswer,e.jsxs("div",{className:"p-5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-all",children:[e.jsxs("div",{className:"flex items-start gap-3 mb-4",children:[e.jsx("span",{className:"flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 text-xs font-bold text-slate-300 shrink-0",children:r+1}),e.jsx("h4",{className:"text-sm sm:text-base font-semibold text-slate-200",children:t.question})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5 ml-9",children:t.options.map((f,l)=>{const g=i===l;let x="border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800/80";return a?l===t.correctAnswer?x="border-emerald-500/80 bg-emerald-950/50 text-emerald-200 font-semibold":g&&(x="border-rose-500/80 bg-rose-950/50 text-rose-200 font-semibold"):g&&(x="border-emerald-500 bg-emerald-950/50 text-emerald-200 font-semibold ring-1 ring-emerald-500"),e.jsxs("button",{onClick:()=>p(t.id,l),className:`p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${x}`,children:[e.jsx("span",{children:f}),a&&l===t.correctAnswer&&e.jsx(b,{className:"w-4 h-4 text-emerald-400 shrink-0 ml-2"}),a&&g&&l!==t.correctAnswer&&e.jsx(S,{className:"w-4 h-4 text-rose-400 shrink-0 ml-2"})]},l)})}),a&&e.jsxs("div",{className:"mt-4 ml-9 p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1",children:[e.jsx("div",{className:"text-emerald-400 font-semibold",children:"Explanation:"}),e.jsx("p",{className:"text-slate-300",children:t.explanation}),e.jsx("p",{className:"text-slate-400 italic font-bengali",children:t.explanationBengali})]})]},t.id)})}),e.jsx("div",{className:"mt-8 flex justify-center",children:a?e.jsx("button",{onClick:n,className:"px-8 py-3 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white transition-all",children:"Reset & Try Again"}):e.jsxs("button",{onClick:()=>o(!0),disabled:Object.keys(s).length===0,className:`px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-lg ${Object.keys(s).length===0?"bg-slate-800 text-slate-500 cursor-not-allowed":"bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-500/25"}`,children:["Submit & Check Answers (",Object.keys(s).length,"/",h.length,")"]})})]}),e.jsx(y,{title:"Frequently Asked Questions: Stage 3 Implementation & Coding",faqs:[{question:"What is the key input required before programmers begin coding in Stage 3?",answer:"The approved Design Document Specification (DDS), which contains the UI wireframes, Entity-Relationship schemas, normalized tables, class diagrams, and process flowcharts."},{question:"How do PreparedStatements prevent SQL Injection attacks?",answer:"PreparedStatements pre-compile the SQL template and treat input values bound to '?' placeholders strictly as literal data rather than executable SQL syntax."},{question:"What is the difference between executeUpdate() and executeQuery() in JDBC?",answer:"executeUpdate() is used for DML/DDL commands (INSERT, UPDATE, DELETE) and returns an integer count of modified rows. executeQuery() is used for SELECT statements and returns a ResultSet object containing queried rows."}]}),e.jsx(w,{title:"CBSE Class 12 IT 802: Topic 3 - Stage 3: Implementation Phase Notes",content:B}),e.jsx(v,{topicName:"Stage 3: Implementation & Coding Phase",unitName:"Four Stages of Web Application Development"})]})})}export{Q as default};
