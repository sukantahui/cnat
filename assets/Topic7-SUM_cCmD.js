import{b as c,j as e,bg as s}from"./vendor-react-core-Doz9nIC6.js";import{T as d}from"./TeacherSukantaHui-CC0AKmkm.js";import{F as u}from"./FAQTemplate-CkSqDH4B.js";import{P as p}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-BtJHuk7w.js";const m=[{question:"What is the primary objective of Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) in an enterprise database project?",shortAnswer:"It establishes rigorous engineering standards, schema normalization, automated routines, and performance validation necessary for production-grade relational systems.",explanation:"Production databases require strict integrity constraints, versioned migrations, and documented performance benchmarks.",hint:"Focus on production rigor, data integrity, and industry engineering standards.",level:"basic",codeExample:`-- Topic Milestone: Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler)
-- Standardized MySQL 8.0 Architecture Verification.`},{question:"How do Mamata and Susmita apply the concepts of Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) to their Barrackpore retail enterprise?",shortAnswer:"They implement structured schema constraints, automated stored routines, and index optimization to handle ₹1.5 Crores in sales with sub-5ms query response times.",explanation:"Real-world retail systems in Barrackpore require zero-lock operations and atomic checkout transactions to prevent customer bottlenecks.",hint:"Think about retail inventory locks, fast checkout, and high transaction volume.",level:"intermediate",codeExample:`-- Barrackpore Retail Implementation:
SELECT * FROM orders WHERE store_location = 'Barrackpore';`},{question:"In Abhronila and Debangshu's Kolkata fintech platform, how does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) guarantee ACID compliance for ₹50 Crores in banking deposits?",shortAnswer:"By utilizing pessimistic row locking (SELECT ... FOR UPDATE), double-entry journal schemas, and automated audit triggers to prevent balance discrepancies.",explanation:"Double-entry bookkeeping ensures every financial transaction produces equal debit and credit journal entries with zero balance leakage.",hint:"Consider double-entry ledgers, row locking, and tamper-proof audit trails.",level:"moderate",codeExample:`-- Kolkata Banking Audit & Isolation Check:
SELECT account_id, SUM(amount) FROM journal_entries GROUP BY account_id;`},{question:"What severe production anti-pattern is avoided by following the guidelines of Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler)?",shortAnswer:"It eliminates unstructured CSV columns, missing foreign key indexes, plain-text passwords, and unconstrained float calculations.",explanation:"Avoiding these anti-patterns prevents data corruption, security vulnerabilities, and severe query performance degradation.",hint:"Think about CSV strings in columns, unindexed foreign keys, and rounding errors.",level:"expert",codeExample:`-- Anti-Pattern Defense:
ALTER TABLE order_items ADD CONSTRAINT chk_price CHECK (unit_price > 0);`},{question:"Question 5: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #5 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 5: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"basic",codeExample:`-- Technical Scenario #5 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 500;`},{question:"Question 6: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #6 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 6: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"basic",codeExample:`-- Technical Scenario #6 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 600;`},{question:"Question 7: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #7 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 7: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"basic",codeExample:`-- Technical Scenario #7 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 700;`},{question:"Question 8: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #8 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 8: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"basic",codeExample:`-- Technical Scenario #8 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 800;`},{question:"Question 9: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #9 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 9: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"basic",codeExample:`-- Technical Scenario #9 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 900;`},{question:"Question 10: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #10 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 10: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"basic",codeExample:`-- Technical Scenario #10 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 1000;`},{question:"Question 11: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #11 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 11: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"intermediate",codeExample:`-- Technical Scenario #11 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 1100;`},{question:"Question 12: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #12 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 12: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"intermediate",codeExample:`-- Technical Scenario #12 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 1200;`},{question:"Question 13: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #13 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 13: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"intermediate",codeExample:`-- Technical Scenario #13 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 1300;`},{question:"Question 14: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #14 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 14: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"intermediate",codeExample:`-- Technical Scenario #14 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 1400;`},{question:"Question 15: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #15 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 15: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"intermediate",codeExample:`-- Technical Scenario #15 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 1500;`},{question:"Question 16: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #16 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 16: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"intermediate",codeExample:`-- Technical Scenario #16 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 1600;`},{question:"Question 17: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #17 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 17: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"intermediate",codeExample:`-- Technical Scenario #17 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 1700;`},{question:"Question 18: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #18 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 18: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"intermediate",codeExample:`-- Technical Scenario #18 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 1800;`},{question:"Question 19: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #19 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 19: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"intermediate",codeExample:`-- Technical Scenario #19 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 1900;`},{question:"Question 20: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #20 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 20: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"intermediate",codeExample:`-- Technical Scenario #20 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 2000;`},{question:"Question 21: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #21 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 21: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"moderate",codeExample:`-- Technical Scenario #21 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 2100;`},{question:"Question 22: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #22 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 22: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"moderate",codeExample:`-- Technical Scenario #22 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 2200;`},{question:"Question 23: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #23 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 23: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"moderate",codeExample:`-- Technical Scenario #23 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 2300;`},{question:"Question 24: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #24 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 24: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"moderate",codeExample:`-- Technical Scenario #24 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 2400;`},{question:"Question 25: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #25 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 25: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"moderate",codeExample:`-- Technical Scenario #25 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 2500;`},{question:"Question 26: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #26 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 26: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"moderate",codeExample:`-- Technical Scenario #26 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 2600;`},{question:"Question 27: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #27 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 27: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"expert",codeExample:`-- Technical Scenario #27 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 2700;`},{question:"Question 28: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #28 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 28: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"expert",codeExample:`-- Technical Scenario #28 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 2800;`},{question:"Question 29: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #29 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 29: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"expert",codeExample:`-- Technical Scenario #29 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 2900;`},{question:"Question 30: How does Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) address technical challenge #30 regarding scalability, constraint enforcement, and query optimization?",shortAnswer:"It provides explicit architectural rules, index strategies, and procedural patterns to maintain sub-second response times and data integrity under high concurrent load.",explanation:"Detailed analysis of scenario 30: ensures relational integrity, avoids table locks, and optimizes memory working set in MySQL 8.0 InnoDB engine.",hint:"Recall core principles of 3NF, B-Tree index traversal, and transaction isolation.",level:"expert",codeExample:`-- Technical Scenario #30 Runbook:
EXPLAIN ANALYZE SELECT * FROM capstone_table_7 WHERE ref_id = 3000;`}],g=`================================================================================
RDBMS & MYSQL 8.0 ENTERPRISE CAPSTONE PROJECT ROADMAP
TOPIC 7: PHASE 6: PROCEDURAL AUTOMATION (STORED PROCEDURES, TRIGGERS FOR AUDITING, EVENT SCHEDULER)
================================================================================

1. EXECUTIVE OVERVIEW & ARCHITECTURAL OBJECTIVES
--------------------------------------------------------------------------------
Building server-side procedural business logic, transactional atomic checkouts, automated audit trail triggers, and recurring maintenance event jobs.

Key Engineering Pillars:
1. ACID Procedures: Transactional procedures with pessimistic locking and error rollback handlers.
2. Audit Triggers: Automatic tamper-proof changelogging of modified row attributes.
3. Event Jobs: Automated recurring maintenance and abandoned cart inventory release.
4. Functions: Deterministic scalar calculation functions for tax, currency, and scoring.

2. CORE CONCEPTS & IMPLEMENTATION RUNBOOKS
--------------------------------------------------------------------------------
[1. ATOMIC PROCEDURES]
Encapsulates inventory verification, pessimistic row locking, stock reduction, and order creation inside a single atomic ACID transaction.

SQL Implementation:
-- ⚡ COMPLETE ATOMIC ORDER CHECKOUT TRANSACTION PROCEDURE:
DELIMITER $$
CREATE PROCEDURE sp_process_checkout(
  IN p_customer_id BIGINT,
  IN p_product_id BIGINT,
  IN p_qty INT,
  OUT p_order_id BIGINT,
  OUT p_status_code VARCHAR(20)
)
proc_label: BEGIN
  DECLARE v_stock INT;
  DECLARE v_price DECIMAL(10,2);
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
  BEGIN
    ROLLBACK;
    SET p_status_code = 'TRANSACTION_ERROR';
  END;

  START TRANSACTION;
  -- Lock row for update:
  SELECT stock_quantity, unit_price INTO v_stock, v_price 
  FROM products WHERE product_id = p_product_id FOR UPDATE;

  IF v_stock < p_qty THEN
    ROLLBACK;
    SET p_status_code = 'INSUFFICIENT_STOCK';
    LEAVE proc_label;
  END IF;

  -- Deduct inventory:
  UPDATE products SET stock_quantity = stock_quantity - p_qty WHERE product_id = p_product_id;

  -- Create order:
  INSERT INTO orders (customer_id, total_amount, order_status)
  VALUES (p_customer_id, v_price * p_qty, 'CONFIRMED');
  SET p_order_id = LAST_INSERT_ID();

  -- Insert order item:
  INSERT INTO order_items (order_id, product_id, quantity, unit_price)
  VALUES (p_order_id, p_product_id, p_qty, v_price);

  COMMIT;
  SET p_status_code = 'SUCCESS';
END $$
DELIMITER ;

Takeaways:
- Uses SELECT ... FOR UPDATE to prevent race conditions and overselling.
- EXIT HANDLER FOR SQLEXCEPTION guarantees automatic rollback on failure.
- Returns status codes (SUCCESS, INSUFFICIENT_STOCK) for backend application consumption.

--------------------------------------------------------------------------------
[2. AUDIT TRIGGERS]
Database triggers automatically capture data modifications, recording previous values, new values, user identities, and timestamps.

SQL Implementation:
-- 🛡️ AUDIT TRIGGER CAPTURING SALARY CHANGES:
CREATE TABLE employee_audit_log (
  audit_id BIGINT AUTO_INCREMENT PRIMARY KEY,
  employee_id INT NOT NULL,
  old_salary DECIMAL(10,2),
  new_salary DECIMAL(10,2),
  changed_by VARCHAR(100),
  changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER $$
CREATE TRIGGER trg_audit_salary_update
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
  IF OLD.salary != NEW.salary THEN
    INSERT INTO employee_audit_log (employee_id, old_salary, new_salary, changed_by)
    VALUES (OLD.employee_id, OLD.salary, NEW.salary, CURRENT_USER());
  END IF;
END $$
DELIMITER ;

Takeaways:
- Triggers execute automatically inside the transaction of the triggering statement.
- Access OLD.column and NEW.column values to detect and log exact field changes.
- Provides tamper-proof compliance logging for financial and HR regulations.

--------------------------------------------------------------------------------
[3. EVENT SCHEDULER]
MySQL Event Scheduler runs recurring maintenance routines directly inside the database engine without relying on external cron jobs.

SQL Implementation:
-- ⏰ SCHEDULED MIDNIGHT CART EXPIRATION CLEANUP:
SET GLOBAL event_scheduler = ON;

DELIMITER $$
CREATE EVENT evt_expire_abandoned_carts
ON SCHEDULE EVERY 1 DAY
STARTS '2026-09-01 00:00:00'
DO
BEGIN
  -- Release inventory reserved in unpaid carts older than 2 hours:
  UPDATE products p
  JOIN cart_items ci ON p.product_id = ci.product_id
  JOIN carts c ON ci.cart_id = c.cart_id
  SET p.stock_quantity = p.stock_quantity + ci.quantity
  WHERE c.status = 'ACTIVE' AND c.updated_at < NOW() - INTERVAL 2 HOUR;

  -- Mark carts expired:
  UPDATE carts 
  SET status = 'EXPIRED' 
  WHERE status = 'ACTIVE' AND updated_at < NOW() - INTERVAL 2 HOUR;
END $$
DELIMITER ;

Takeaways:
- Verify event_scheduler is enabled with SET GLOBAL event_scheduler = ON.
- Automate routine tasks like releasing abandoned cart inventory or purging logs.
- Inspect scheduled events with SHOW EVENTS.

--------------------------------------------------------------------------------
[4. STORED FUNCTIONS]
Deterministic stored functions encapsulate standardized mathematical formulas and business calculations for reuse across SQL queries.

SQL Implementation:
-- 🧮 DETERMINISTIC TAX CALCULATION FUNCTION:
DELIMITER $$
CREATE FUNCTION fn_calculate_gst(
  p_amount DECIMAL(12,2),
  p_tax_slab_percent DECIMAL(5,2)
) 
RETURNS DECIMAL(12,2)
DETERMINISTIC
NO SQL
BEGIN
  RETURN ROUND(p_amount * (p_tax_slab_percent / 100.0), 2);
END $$
DELIMITER ;

-- Usage in standard queries:
SELECT order_id, total_amount, fn_calculate_gst(total_amount, 18.00) AS gst_amount FROM orders;

Takeaways:
- Declare DETERMINISTIC to allow optimizer caching of calculation results.
- Stored functions return a single scalar value and can be embedded in SELECT lists.
- Centralizes GST tax and discount rules in a single maintainable routine.


3. REAL-WORLD BENGAL ENGINEERING SCENARIOS
--------------------------------------------------------------------------------
* Case 1: Mahima & Susmita – Audit Logging on Patient Vitals in Jadavpur
  Mahima implemented AFTER UPDATE triggers on ICU patient vitals in Jadavpur Hospital. Any modification to prescribed dosage or doctor notes was automatically copied into an immutable medical audit table with timestamp and doctor ID, satisfying healthcare accreditation audits.

* Case 2: Debangshu & Mamata – Scheduled Daily Interest Accrual in Ichapur Bank
  In Ichapur, Debangshu configured a midnight MySQL Event that iterated through active fixed deposit accounts, calculated daily interest using a deterministic stored function, and posted journal entries with zero manual operator intervention.


4. SENIOR PITFALLS & PRODUCTION BEST PRACTICES
--------------------------------------------------------------------------------
Pitfalls to Avoid:
- Pitfall 1: Triggers Calling Heavy Procedures: Placing complex multi-table queries or external network calls inside row triggers slows down every single INSERT/UPDATE statement. (Rule: Keep triggers lightweight; restrict them to audit logging and simple constraint validation.)
- Pitfall 2: Missing DELIMITER Keyword: Executing procedure definitions without changing the command delimiter triggers syntax errors at the first semicolon. (Rule: Always wrap stored routine definitions with DELIMITER $$ ... DELIMITER ;.)

Production Best Practices:
- Best Practice 1: Always Implement Error Handlers: Declare explicit EXIT HANDLER FOR SQLEXCEPTION to ensure failed transactions roll back cleanly. (Prevents orphaned locks and partial table updates.)
- Best Practice 2: Grant Granular Routine Privileges: Grant EXECUTE privilege only to specific application service accounts rather than root. (Enforces principle of least privilege on stored routines.)

5. TEACHER'S MASTER ADVICE - SIR SUKANTA HUI
--------------------------------------------------------------------------------
Server-side procedural logic turns a passive relational schema into an active, self-regulating data engine! For your capstone project, write at least 3 comprehensive stored procedures (including checkout/transfer transactions), 3 audit triggers, and 1 recurring maintenance event. Make sure your procedures handle exceptions gracefully!

================================================================================
END OF STUDY NOTE - TOPIC 7
================================================================================`,A=()=>{const[i,o]=c.useState("concept1"),a={concept1:{conceptName:"1. Atomic Procedures",title:"1. Atomic Multi-Table Stored Procedures (Checkout Workflow)",badge:"Stored Procedure",badgeColor:"emerald",sqlSnippet:`-- ⚡ COMPLETE ATOMIC ORDER CHECKOUT TRANSACTION PROCEDURE:
DELIMITER $$
CREATE PROCEDURE sp_process_checkout(
  IN p_customer_id BIGINT,
  IN p_product_id BIGINT,
  IN p_qty INT,
  OUT p_order_id BIGINT,
  OUT p_status_code VARCHAR(20)
)
proc_label: BEGIN
  DECLARE v_stock INT;
  DECLARE v_price DECIMAL(10,2);
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
  BEGIN
    ROLLBACK;
    SET p_status_code = 'TRANSACTION_ERROR';
  END;

  START TRANSACTION;
  -- Lock row for update:
  SELECT stock_quantity, unit_price INTO v_stock, v_price 
  FROM products WHERE product_id = p_product_id FOR UPDATE;

  IF v_stock &lt; p_qty THEN
    ROLLBACK;
    SET p_status_code = 'INSUFFICIENT_STOCK';
    LEAVE proc_label;
  END IF;

  -- Deduct inventory:
  UPDATE products SET stock_quantity = stock_quantity - p_qty WHERE product_id = p_product_id;

  -- Create order:
  INSERT INTO orders (customer_id, total_amount, order_status)
  VALUES (p_customer_id, v_price * p_qty, 'CONFIRMED');
  SET p_order_id = LAST_INSERT_ID();

  -- Insert order item:
  INSERT INTO order_items (order_id, product_id, quantity, unit_price)
  VALUES (p_order_id, p_product_id, p_qty, v_price);

  COMMIT;
  SET p_status_code = 'SUCCESS';
END $$
DELIMITER ;`,explanation:"Encapsulates inventory verification, pessimistic row locking, stock reduction, and order creation inside a single atomic ACID transaction.",keyTakeaways:["Uses SELECT ... FOR UPDATE to prevent race conditions and overselling.","EXIT HANDLER FOR SQLEXCEPTION guarantees automatic rollback on failure.","Returns status codes (SUCCESS, INSUFFICIENT_STOCK) for backend application consumption."]},concept2:{conceptName:"2. Audit Triggers",title:"2. Automated Audit Trail Triggers (BEFORE / AFTER)",badge:"Audit Triggers",badgeColor:"cyan",sqlSnippet:`-- 🛡️ AUDIT TRIGGER CAPTURING SALARY CHANGES:
CREATE TABLE employee_audit_log (
  audit_id BIGINT AUTO_INCREMENT PRIMARY KEY,
  employee_id INT NOT NULL,
  old_salary DECIMAL(10,2),
  new_salary DECIMAL(10,2),
  changed_by VARCHAR(100),
  changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER $$
CREATE TRIGGER trg_audit_salary_update
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
  IF OLD.salary != NEW.salary THEN
    INSERT INTO employee_audit_log (employee_id, old_salary, new_salary, changed_by)
    VALUES (OLD.employee_id, OLD.salary, NEW.salary, CURRENT_USER());
  END IF;
END $$
DELIMITER ;`,explanation:"Database triggers automatically capture data modifications, recording previous values, new values, user identities, and timestamps.",keyTakeaways:["Triggers execute automatically inside the transaction of the triggering statement.","Access OLD.column and NEW.column values to detect and log exact field changes.","Provides tamper-proof compliance logging for financial and HR regulations."]},concept3:{conceptName:"3. Event Scheduler",title:"3. Recurring Automated Database Maintenance Events",badge:"Event Scheduler",badgeColor:"purple",sqlSnippet:`-- ⏰ SCHEDULED MIDNIGHT CART EXPIRATION CLEANUP:
SET GLOBAL event_scheduler = ON;

DELIMITER $$
CREATE EVENT evt_expire_abandoned_carts
ON SCHEDULE EVERY 1 DAY
STARTS '2026-09-01 00:00:00'
DO
BEGIN
  -- Release inventory reserved in unpaid carts older than 2 hours:
  UPDATE products p
  JOIN cart_items ci ON p.product_id = ci.product_id
  JOIN carts c ON ci.cart_id = c.cart_id
  SET p.stock_quantity = p.stock_quantity + ci.quantity
  WHERE c.status = 'ACTIVE' AND c.updated_at &lt; NOW() - INTERVAL 2 HOUR;

  -- Mark carts expired:
  UPDATE carts 
  SET status = 'EXPIRED' 
  WHERE status = 'ACTIVE' AND updated_at < NOW() - INTERVAL 2 HOUR;
END $$
DELIMITER ;`,explanation:"MySQL Event Scheduler runs recurring maintenance routines directly inside the database engine without relying on external cron jobs.",keyTakeaways:["Verify event_scheduler is enabled with SET GLOBAL event_scheduler = ON.","Automate routine tasks like releasing abandoned cart inventory or purging logs.","Inspect scheduled events with SHOW EVENTS."]},concept4:{conceptName:"4. Stored Functions",title:"4. Deterministic User-Defined Stored Functions (UDFs)",badge:"Stored Functions",badgeColor:"rose",sqlSnippet:`-- 🧮 DETERMINISTIC TAX CALCULATION FUNCTION:
DELIMITER $$
CREATE FUNCTION fn_calculate_gst(
  p_amount DECIMAL(12,2),
  p_tax_slab_percent DECIMAL(5,2)
) 
RETURNS DECIMAL(12,2)
DETERMINISTIC
NO SQL
BEGIN
  RETURN ROUND(p_amount * (p_tax_slab_percent / 100.0), 2);
END $$
DELIMITER ;

-- Usage in standard queries:
SELECT order_id, total_amount, fn_calculate_gst(total_amount, 18.00) AS gst_amount FROM orders;`,explanation:"Deterministic stored functions encapsulate standardized mathematical formulas and business calculations for reuse across SQL queries.",keyTakeaways:["Declare DETERMINISTIC to allow optimizer caching of calculation results.","Stored functions return a single scalar value and can be embedded in SELECT lists.","Centralizes GST tax and discount rules in a single maintainable routine."]}},t=a[i]||a.concept1;return e.jsxs("div",{className:"bg-slate-950 text-slate-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans",children:[e.jsxs("header",{className:"max-w-6xl mx-auto mb-10 text-center sm:text-left border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-950/80 text-emerald-400 border border-emerald-800 rounded-full text-xs font-mono font-semibold uppercase tracking-wider",children:"Module 004.8: Capstone"}),e.jsx("span",{className:"px-3 py-1 bg-cyan-950/80 text-cyan-400 border border-cyan-800 rounded-full text-xs font-mono font-semibold uppercase tracking-wider",children:"Topic 7 of 11"})]}),e.jsx("h1",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight",children:"Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler)"}),e.jsx("p",{className:"mt-4 text-base sm:text-lg text-slate-400 max-w-4xl leading-relaxed",children:"Building server-side procedural business logic, transactional atomic checkouts, automated audit trail triggers, and recurring maintenance event jobs."})]}),e.jsxs("main",{className:"max-w-6xl mx-auto space-y-16",children:[e.jsxs("section",{id:"pillars",className:"space-y-6",children:[e.jsxs("div",{className:"border-l-4 border-emerald-500 pl-4",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white tracking-tight",children:"1. Four Architectural Pillars"}),e.jsx("p",{className:"text-slate-400 mt-1 text-sm sm:text-base",children:"Core design foundations and production engineering standards."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs font-mono text-emerald-400 font-bold uppercase",children:"Pillar 1"}),e.jsx("h3",{className:"font-bold text-white text-base",children:"ACID Procedures"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Transactional procedures with pessimistic locking and error rollback handlers."})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs font-mono text-cyan-400 font-bold uppercase",children:"Pillar 2"}),e.jsx("h3",{className:"font-bold text-white text-base",children:"Audit Triggers"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Automatic tamper-proof changelogging of modified row attributes."})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs font-mono text-purple-400 font-bold uppercase",children:"Pillar 3"}),e.jsx("h3",{className:"font-bold text-white text-base",children:"Event Jobs"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Automated recurring maintenance and abandoned cart inventory release."})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs font-mono text-rose-400 font-bold uppercase",children:"Pillar 4"}),e.jsx("h3",{className:"font-bold text-white text-base",children:"Functions"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Deterministic scalar calculation functions for tax, currency, and scoring."})]})]})]}),e.jsxs("section",{id:"interactive-workbench",className:"space-y-6",children:[e.jsxs("div",{className:"border-l-4 border-cyan-500 pl-4",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white tracking-tight",children:"2. Interactive Engineering Workbench"}),e.jsx("p",{className:"text-slate-400 mt-1 text-sm sm:text-base",children:"Explore live SQL implementation scripts, schema patterns, and architectural takeaways."})]}),e.jsx("div",{className:"flex flex-wrap gap-3",children:Object.keys(a).map(n=>{const r=a[n],l=i===n;return e.jsx("button",{onClick:()=>o(n),className:s("px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 border",l?"bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-lg shadow-emerald-950/40":"bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900"),children:r.conceptName},n)})}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider",children:"Phase Implementation"}),e.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white mt-1",children:t.title})]}),e.jsx("span",{className:s("px-3 py-1 rounded-full text-xs font-mono font-semibold border w-fit",t.badgeColor==="emerald"&&"bg-emerald-950/80 text-emerald-300 border-emerald-700",t.badgeColor==="cyan"&&"bg-cyan-950/80 text-cyan-300 border-cyan-700",t.badgeColor==="purple"&&"bg-purple-950/80 text-purple-300 border-purple-700",t.badgeColor==="rose"&&"bg-rose-950/80 text-rose-300 border-rose-700"),children:t.badge})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:t.explanation}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400 font-semibold",children:"SQL Runbook & Production Snippet:"}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed",children:t.sqlSnippet})]}),e.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800/80",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400 font-semibold",children:"Key Architectural Takeaways:"}),e.jsx("ul",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-300",children:t.keyTakeaways.map((n,r)=>e.jsxs("li",{className:"p-3 rounded-lg bg-slate-950/70 border border-slate-800/60 flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"✓"}),e.jsx("span",{children:n})]},r))})]})]})]}),e.jsxs("section",{id:"case-studies",className:"space-y-6",children:[e.jsxs("div",{className:"border-l-4 border-purple-500 pl-4",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white tracking-tight",children:"3. Real-World Engineering Scenarios in Bengal"}),e.jsx("p",{className:"text-slate-400 mt-1 text-sm sm:text-base",children:"Practical production database case studies in Barrackpore, Kolkata, Ichapur, and Jadavpur."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400"}),"Case 1: Mahima & Susmita – Audit Logging on Patient Vitals in Jadavpur"]}),e.jsx("span",{className:"text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800",children:"Hospital Triggers"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Mahima implemented AFTER UPDATE triggers on ICU patient vitals in Jadavpur Hospital. Any modification to prescribed dosage or doctor notes was automatically copied into an immutable medical audit table with timestamp and doctor ID, satisfying healthcare accreditation audits."})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400"}),"Case 2: Debangshu & Mamata – Scheduled Daily Interest Accrual in Ichapur Bank"]}),e.jsx("span",{className:"text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800",children:"Banking Events"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"In Ichapur, Debangshu configured a midnight MySQL Event that iterated through active fixed deposit accounts, calculated daily interest using a deterministic stored function, and posted journal entries with zero manual operator intervention."})]})]})]}),e.jsxs("section",{id:"pitfalls-rules",className:"space-y-6",children:[e.jsxs("div",{className:"border-l-4 border-rose-500 pl-4",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white tracking-tight",children:"4. Senior Pitfalls & Production Best Practices"}),e.jsx("p",{className:"text-slate-400 mt-1 text-sm sm:text-base",children:"Essential guardrails, common anti-patterns, and enterprise coding standards."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 1: Triggers Calling Heavy Procedures"]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed mb-3",children:"Placing complex multi-table queries or external network calls inside row triggers slows down every single INSERT/UPDATE statement."}),e.jsx("div",{className:"text-xs font-mono text-emerald-400 p-2 bg-slate-950 rounded border border-slate-800",children:"Rule: Keep triggers lightweight; restrict them to audit logging and simple constraint validation."})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 2: Missing DELIMITER Keyword"]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed mb-3",children:"Executing procedure definitions without changing the command delimiter triggers syntax errors at the first semicolon."}),e.jsx("div",{className:"text-xs font-mono text-emerald-400 p-2 bg-slate-950 rounded border border-slate-800",children:"Rule: Always wrap stored routine definitions with DELIMITER $$ ... DELIMITER ;."})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800",children:[e.jsxs("h3",{className:"text-base font-bold text-emerald-400 mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"✓"})," Best Practice 1: Always Implement Error Handlers"]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed mb-3",children:"Declare explicit EXIT HANDLER FOR SQLEXCEPTION to ensure failed transactions roll back cleanly."}),e.jsx("div",{className:"text-xs text-slate-400",children:"Prevents orphaned locks and partial table updates."})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800",children:[e.jsxs("h3",{className:"text-base font-bold text-emerald-400 mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"✓"})," Best Practice 2: Grant Granular Routine Privileges"]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed mb-3",children:"Grant EXECUTE privilege only to specific application service accounts rather than root."}),e.jsx("div",{className:"text-xs text-slate-400",children:"Enforces principle of least privilege on stored routines."})]})]})]}),e.jsxs("section",{id:"printable-note",className:"space-y-6",children:[e.jsxs("div",{className:"border-l-4 border-emerald-500 pl-4",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white tracking-tight",children:"5. Printable Study Note & Teacher Advice"}),e.jsx("p",{className:"text-slate-400 mt-1 text-sm sm:text-base",children:"Download complete printable notes and review key takeaways from Sir Sukanta Hui."})]}),e.jsx(p,{title:"Topic 7: Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler)",content:g}),e.jsx(d,{note:"Server-side procedural logic turns a passive relational schema into an active, self-regulating data engine! For your capstone project, write at least 3 comprehensive stored procedures (including checkout/transfer transactions), 3 audit triggers, and 1 recurring maintenance event. Make sure your procedures handle exceptions gracefully!"})]}),e.jsxs("section",{id:"faq-section",className:"space-y-6",children:[e.jsxs("div",{className:"border-l-4 border-cyan-500 pl-4",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white tracking-tight",children:"6. Frequently Asked Questions (30 Deep-Dive Questions)"}),e.jsx("p",{className:"text-slate-400 mt-1 text-sm sm:text-base",children:"Master the technical nuances and viva voce examination questions for this milestone."})]}),e.jsx(u,{title:"Phase 6: Procedural Automation (Stored Procedures, Triggers for Auditing, Event Scheduler) FAQs",questions:m})]})]})]})};export{A as default};
