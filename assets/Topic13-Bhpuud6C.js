import{b as d,j as e,bg as n}from"./vendor-react-core-Doz9nIC6.js";import{T as m}from"./TeacherSukantaHui-CyIG3xbg.js";import{F as u}from"./FAQTemplate-CkSqDH4B.js";import{P as p}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-CIaKtAt4.js";const h=[{question:"What is the primary objective of the Complex Join Capstone Lab?",shortAnswer:"To synthesize all join techniques (INNER, LEFT, RIGHT, FULL outer emulation, SELF, NON-EQUI, CTE pre-aggregation, and Anti-Joins) into an enterprise order, shipment, and payment analytics pipeline.",explanation:"Capstone lab overview.",hint:"Synthesizing all join techniques into an enterprise analytics pipeline.",level:"basic"},{question:"In a customer 360-degree analytics report, why must orders, payments, and shipments be aggregated in separate CTEs before joining to `customers`?",shortAnswer:"To prevent the Aggregate Fan-Out Bug (row multiplication) that would otherwise inflate financial sums and item counts.",explanation:"CTE pre-aggregation to prevent multi-child fan-out.",hint:"Prevents row multiplication across independent 1:N child tables.",level:"basic"},{question:"How do you calculate a customer's net outstanding balance across multiple joined tables?",shortAnswer:"`COALESCE(orders.gross_value, 0) - COALESCE(payments.settled_amount, 0)`.",explanation:"Net balance calculation with COALESCE.",hint:"Gross orders minus settled payments with COALESCE.",level:"basic"},{question:"How does an Anti-Join detect paid orders that have NOT been dispatched by warehouse shipping?",shortAnswer:"`FROM orders o JOIN payments p USING (order_id) LEFT JOIN shipments s USING (order_id) WHERE p.status = 'SETTLED' AND s.shipment_id IS NULL`.",explanation:"Fulfillment gap detection via anti-join.",hint:"LEFT JOIN shipments WHERE s.shipment_id IS NULL.",level:"basic"},{question:"How do you calculate the exact duration an order has been waiting for dispatch in hours?",shortAnswer:"`TIMESTAMPDIFF(HOUR, o.order_date, NOW()) AS hours_since_order`.",explanation:"Date difference calculation in MySQL.",hint:"TIMESTAMPDIFF(HOUR, order_date, NOW()).",level:"basic"},{question:"In e-commerce reporting, how do you map annual customer spend to loyalty tiers dynamically without hardcoding tiers in SQL?",shortAnswer:"Using a Non-Equi join between the customer spend summary and the `loyalty_tiers` table on `spend BETWEEN min_spend AND max_spend`.",explanation:"Dynamic loyalty tier mapping via non-equi join.",hint:"Non-Equi join on spend BETWEEN min_spend AND max_spend.",level:"basic"},{question:"What is the recommended index strategy for high-performance 7-table enterprise joins?",shortAnswer:"Create single-column or composite B-Tree indexes on every foreign key column (`customer_id`, `order_id`, `product_id`, `shipment_id`).",explanation:"Foreign key index architecture.",hint:"Index every foreign key column involved in join paths.",level:"basic"},{question:"How do you inspect the execution plan of a complex 7-table CTE join in MySQL 8.0?",shortAnswer:"`EXPLAIN FORMAT=TREE SELECT ...`",explanation:"Tree format execution plan analysis.",hint:"EXPLAIN FORMAT=TREE.",level:"moderate"},{question:"What join algorithm does MySQL 8.0.18+ default to for large unindexed equijoins in multi-table queries?",shortAnswer:"Hash Join.",explanation:"Hash Join algorithm in modern MySQL.",hint:"Hash Join.",level:"moderate"},{question:"In order line-item analytics, how do you calculate total gross order revenue per category?",shortAnswer:"`SELECT cat.category_name, SUM(oi.quantity * oi.unit_price) FROM categories cat JOIN products p USING (category_id) JOIN order_items oi USING (product_id) GROUP BY cat.category_id, cat.category_name;`",explanation:"Category revenue aggregation across 3 tables.",hint:"Join categories to products and order_items with SUM(qty * price).",level:"basic"},{question:"Why should `COALESCE()` be applied to aggregated sums in customer 360-degree reports?",shortAnswer:"To display `₹0.00` instead of `NULL` for customers who have placed zero orders or made zero payments.",explanation:"Clean output formatting with COALESCE.",hint:"Prevents NULL values and formats defaults as ₹0.00.",level:"basic"},{question:"In logistics analytics, how do you find carriers with an on-time delivery rate below 90%?",shortAnswer:"Join `carriers` with `shipments`, calculate `SUM(CASE WHEN status = 'DELIVERED_ON_TIME' THEN 1 ELSE 0 END) / COUNT(*) * 100`, and filter in the `HAVING` clause.",explanation:"Carrier SLA performance aggregation.",hint:"Calculate percentage in SELECT and filter HAVING rate < 90.",level:"moderate"},{question:"Can a CTE pre-aggregation query contain window functions like `ROW_NUMBER()`?",shortAnswer:"YES. CTEs can contain window functions (e.g. to isolate each customer's most recent order date).",explanation:"Combining window functions with CTEs.",hint:"Yes, fully supported in MySQL 8.0+.",level:"moderate"},{question:"In financial accounting, how do you audit discrepancies between internal order totals and payment gateway captured amounts?",shortAnswer:"`SELECT o.order_id, o.total_amount, p.amount_paid, (o.total_amount - p.amount_paid) AS discrepancy FROM orders o JOIN payments p USING (order_id) WHERE o.total_amount != p.amount_paid;`",explanation:"Financial discrepancy detection query.",hint:"Join orders to payments and filter WHERE total != amount_paid.",level:"basic"},{question:"How do you write a query that identifies customers who have registered but have NEVER placed any order?",shortAnswer:"`SELECT c.customer_id, c.customer_name FROM customers c LEFT JOIN orders o USING (customer_id) WHERE o.order_id IS NULL;`",explanation:"Customer acquisition zero-order anti-join.",hint:"LEFT JOIN orders WHERE o.order_id IS NULL.",level:"basic"},{question:"What is the benefit of encapsulating the Customer 360 analytics query inside a MySQL View?",shortAnswer:"It allows reporting dashboards (Tableau, PowerBI, Web UIs) to query `SELECT * FROM view_customer_360` without writing 50 lines of join SQL.",explanation:"View encapsulation for reporting dashboards.",hint:"Simplifies BI dashboard access to complex multi-table SQL.",level:"basic"},{question:"What happens if an order has multiple partial payments (e.g. 2 payments of ₹2,500 for a ₹5,000 order)?",shortAnswer:"The CTE `SUM(amount_paid)` correctly sums them to ₹5,000, reducing the net outstanding balance to ₹0.00.",explanation:"Partial payment handling in pre-aggregation CTE.",hint:"Correctly summed in the payments CTE to ₹5,000.",level:"basic"},{question:"In warehouse dispatch, how do you list orders that are ready to pack (Payment Settled + Zero Shipments Generated)?",shortAnswer:"`SELECT o.order_id FROM orders o JOIN payments p USING (order_id) LEFT JOIN shipments s USING (order_id) WHERE p.payment_status = 'SETTLED' AND s.shipment_id IS NULL;`",explanation:"Warehouse packing queue query.",hint:"Paid orders with NULL shipment records.",level:"basic"},{question:"Why should `DISTINCT` be avoided inside multi-table aggregate queries?",shortAnswer:"Because `SUM(DISTINCT amount)` incorrectly deletes legitimate identical order amounts, corrupting financial reporting.",explanation:"Financial corruption risk of SUM(DISTINCT).",hint:"Deletes legitimate identical amounts, corrupting financial reports.",level:"basic"},{question:"How do you calculate the average delivery time per shipping carrier in days?",shortAnswer:"`SELECT carrier_name, ROUND(AVG(DATEDIFF(delivered_date, dispatch_date)), 1) AS avg_days FROM shipments WHERE delivery_status = 'DELIVERED' GROUP BY carrier_name;`",explanation:"Carrier transit time calculation.",hint:"AVG(DATEDIFF(delivered_date, dispatch_date)) GROUP BY carrier.",level:"basic"},{question:"In product inventory, how do you find products that have NEVER been ordered by any customer?",shortAnswer:"`SELECT p.product_id, p.product_name FROM products p LEFT JOIN order_items oi USING (product_id) WHERE oi.item_id IS NULL;`",explanation:"Zero-sales inventory anti-join.",hint:"products LEFT JOIN order_items WHERE oi.item_id IS NULL.",level:"basic"},{question:"What is the role of `SQL_CALC_FOUND_ROWS` in MySQL 8.0, and why is it deprecated?",shortAnswer:"It was used for pagination row counting; it is deprecated because executing two separate queries (`SELECT ... LIMIT` and `SELECT COUNT(*)`) is faster and optimizes better.",explanation:"Pagination deprecation in modern MySQL.",hint:"Deprecated in MySQL 8.0 in favor of separate COUNT(*) queries.",level:"expert"},{question:"In customer retention, write a query to find customers who placed orders in 2025 but placed ZERO orders in 2026.",shortAnswer:"`SELECT DISTINCT c.customer_id, c.customer_name FROM customers c JOIN orders o25 ON c.customer_id = o25.customer_id AND YEAR(o25.order_date) = 2025 LEFT JOIN orders o26 ON c.customer_id = o26.customer_id AND YEAR(o26.order_date) = 2026 WHERE o26.order_id IS NULL;`",explanation:"Year-over-year customer churn anti-join.",hint:"Join 2025 orders with LEFT JOIN 2026 orders WHERE o26.id IS NULL.",level:"moderate"},{question:"How do you ensure consistent Indian Rupee formatting across all currency columns in a complex join query?",shortAnswer:"Using `CONCAT('₹', FORMAT(amount, 2))` on final computed columns.",explanation:"Indian Rupee output formatting.",hint:"CONCAT('₹', FORMAT(amount, 2)).",level:"basic"},{question:"What is the memory limit variable in MySQL that governs in-memory Hash Join buffers?",shortAnswer:"`join_buffer_size`.",explanation:"MySQL join buffer memory configuration.",hint:"join_buffer_size.",level:"expert"},{question:"In e-commerce return analytics, how do you calculate the return rate percentage per product category?",shortAnswer:"`SELECT cat.name, (COUNT(r.return_id) / COUNT(oi.item_id)) * 100 AS return_rate FROM categories cat JOIN products p USING (category_id) JOIN order_items oi USING (product_id) LEFT JOIN returns r USING (item_id) GROUP BY cat.id, cat.name;`",explanation:"Category return rate percentage calculation.",hint:"COUNT(returns) / COUNT(order_items) * 100.",level:"moderate"},{question:"How does a database administrator monitor running long-lived join queries?",shortAnswer:"By executing `SHOW FULL PROCESSLIST;` or querying `information_schema.processlist` / `performance_schema.events_statements_current`.",explanation:"Monitoring active query processes.",hint:"SHOW FULL PROCESSLIST;",level:"basic"},{question:"What is the risk of using `ORDER BY rand()` in a multi-table join?",shortAnswer:"It forces MySQL to build an unindexed temporary table on disk and sort the entire Cartesian intermediate result set, crippling server performance.",explanation:"ORDER BY RAND() penalty in joins.",hint:"Forces full Cartesian temporary disk table generation and sort.",level:"moderate"},{question:"What is the benefit of using `STRAIGHT_JOIN` in a known-optimal enterprise analytics query?",shortAnswer:"It prevents the query optimizer from wasting CPU time evaluating permutations when the developer has already structured the optimal join order.",explanation:"STRAIGHT_JOIN query hint.",hint:"Forces exact join order, bypassing optimizer search time.",level:"expert"},{question:"What is the ultimate takeaway for database engineers from Module 002_005 (Mastering SQL Joins)?",shortAnswer:"SQL Joins are the foundation of relational analytics; always use explicit ANSI syntax, avoid aggregate fan-out with CTE pre-aggregation, leverage anti-joins for discrepancy audits, index all foreign keys, and verify execution plans with EXPLAIN.",explanation:"Final summary conclusion for Module 002_005.",hint:"Master ANSI joins, CTE pre-aggregation, anti-joins, foreign key indexing, and EXPLAIN execution plans.",level:"basic"}],x=`================================================================================
RDBMS & MySQL MASTER CLASS - STUDY NOTES
MODULE: 002_005 - Mastering SQL Joins & Multi-Table Queries
TOPIC 13: Complex Join Lab: Customer Orders, Shipments, and Payments Analytics
INSTRUCTOR: Sukanta Hui | Founder, Coder & AccoTax
LOCATION: Barrackpore, West Bengal, India
================================================================================

1. CAPSTONE LAB OVERVIEW & ENTERPRISE ARCHITECTURE
--------------------------------------------------------------------------------
This hands-on capstone lab synthesizes all concepts mastered across Module 002_005:
• INNER JOIN, LEFT JOIN, RIGHT JOIN, and Emulated FULL OUTER JOIN.
• SELF JOIN hierarchies, Non-Equi range joins, and USING clause deduplication.
• CTE Pre-Aggregation to prevent Aggregate Fan-Out data inflation bugs.
• Complex multi-table enterprise pipelines for order fulfillment and payment audits.


2. THE ENTERPRISE SCHEMA SPECIFICATION
--------------------------------------------------------------------------------
1. \`customers(customer_id, customer_name, email, city, tier)\`
2. \`orders(order_id, customer_id, order_date, total_amount, status)\`
3. \`order_items(item_id, order_id, product_id, quantity, unit_price)\`
4. \`products(product_id, product_name, category_id, base_price)\`
5. \`shipments(shipment_id, order_id, carrier_name, tracking_no, dispatch_date, delivery_status)\`
6. \`payments(payment_id, order_id, customer_id, payment_date, payment_method, amount_paid, payment_status)\`
7. \`loyalty_tiers(tier_name, min_annual_spend, max_annual_spend, cashback_pct)\`


3. CORE CAPSTONE QUERIES & ANALYTICS PIPELINES
--------------------------------------------------------------------------------

QUERY 1: 360-Degree Customer Lifetime Balance & Fulfillment Pipeline
• Computes total order value, total collected payments, outstanding balance, and delivery status in Indian Rupee (₹).
\`\`\`sql
WITH customer_order_summary AS (
    SELECT 
        customer_id, 
        COUNT(DISTINCT order_id) AS total_orders_placed,
        SUM(total_amount) AS gross_order_value
    FROM orders 
    WHERE status != 'CANCELLED'
    GROUP BY customer_id
),
customer_payment_summary AS (
    SELECT 
        customer_id, 
        SUM(amount_paid) AS total_payments_settled
    FROM payments 
    WHERE payment_status = 'SETTLED'
    GROUP BY customer_id
),
customer_shipment_summary AS (
    SELECT 
        o.customer_id,
        COUNT(CASE WHEN s.delivery_status = 'DELIVERED' THEN 1 END) AS total_delivered,
        COUNT(CASE WHEN s.delivery_status = 'IN_TRANSIT' THEN 1 END) AS total_in_transit
    FROM orders o
    LEFT JOIN shipments s ON o.order_id = s.order_id
    GROUP BY o.customer_id
)
SELECT 
    c.customer_id,
    c.customer_name,
    c.city,
    COALESCE(ord.total_orders_placed, 0) AS total_orders,
    CONCAT('₹', FORMAT(COALESCE(ord.gross_order_value, 0), 2)) AS gross_orders,
    CONCAT('₹', FORMAT(COALESCE(pay.total_payments_settled, 0), 2)) AS settled_payments,
    CONCAT('₹', FORMAT(COALESCE(ord.gross_order_value, 0) - COALESCE(pay.total_payments_settled, 0), 2)) AS net_outstanding,
    COALESCE(shp.total_delivered, 0) AS shipments_delivered,
    COALESCE(shp.total_in_transit, 0) AS shipments_in_transit
FROM customers c
LEFT JOIN customer_order_summary ord USING (customer_id)
LEFT JOIN customer_payment_summary pay USING (customer_id)
LEFT JOIN customer_shipment_summary shp USING (customer_id)
ORDER BY c.customer_id;
\`\`\`

QUERY 2: Order Fulfillment Discrepancy & Anti-Join Audit
• Identifies paid orders that have NOT been dispatched after 48 hours:
\`\`\`sql
SELECT 
    o.order_id,
    c.customer_name,
    o.order_date,
    p.amount_paid,
    TIMESTAMPDIFF(HOUR, o.order_date, NOW()) AS hours_since_order
FROM orders o
INNER JOIN customers c USING (customer_id)
INNER JOIN payments p USING (order_id)
LEFT JOIN shipments s USING (order_id)
WHERE p.payment_status = 'SETTLED'
  AND s.shipment_id IS NULL -- Anti-join isolating unfulfilled orders!
  AND TIMESTAMPDIFF(HOUR, o.order_date, NOW()) > 48;
\`\`\`

QUERY 3: Non-Equi Loyalty Tier Dynamic Rebate Assignment
\`\`\`sql
SELECT 
    c.customer_name,
    c.city,
    SUM(o.total_amount) AS annual_spend,
    lt.tier_name,
    lt.cashback_pct,
    ROUND(SUM(o.total_amount) * (lt.cashback_pct / 100), 2) AS earned_rebate
FROM customers c
INNER JOIN orders o USING (customer_id)
INNER JOIN loyalty_tiers lt 
    ON SUM(o.total_amount) >= lt.min_annual_spend 
   AND (SUM(o.total_amount) < lt.max_annual_spend OR lt.max_annual_spend IS NULL)
WHERE YEAR(o.order_date) = 2026
GROUP BY c.customer_id, c.customer_name, c.city, lt.tier_name, lt.cashback_pct;
\`\`\`


4. PERFORMANCE TUNING CHECKLIST FOR COMPLEX LABS
--------------------------------------------------------------------------------
1. Index foreign key join paths on \`customer_id\`, \`order_id\`, \`product_id\`.
2. Inspect \`EXPLAIN FORMAT=TREE\` to check join algorithms (Hash Join / Nested Loop).
3. Use CTE pre-aggregation to avoid $M \\times N$ row proliferation.
4. Ensure clean fallback formatting with \`COALESCE()\` and \`CONCAT('₹', ...)\`.


5. SUMMARY CHECKLIST
--------------------------------------------------------------------------------
[x] Integrated multi-table queries combining CTEs, outer joins, and anti-joins.
[x] Mastered customer 360-degree ledger reconciliation without row multiplication.
[x] Automated shipping fulfillment gap detection using Anti-Join techniques.
[x] Applied Non-Equi joins for dynamic loyalty tier rewards calculation.
[x] Verified query execution plans with EXPLAIN to ensure zero unindexed full scans.

================================================================================
END OF STUDY NOTE · Coder & AccoTax · Barrackpore, West Bengal
================================================================================
`,S=()=>{const i=d.useRef([]),[o,l]=d.useState("lab_customer_360"),r={lab_customer_360:{title:"1. 360-Degree Customer Financial & Fulfillment Ledger",sqlQuery:`WITH customer_order_summary AS (
    SELECT customer_id, COUNT(DISTINCT order_id) AS total_orders, SUM(total_amount) AS gross_orders
    FROM orders WHERE status != 'CANCELLED' GROUP BY customer_id
),
customer_payment_summary AS (
    SELECT customer_id, SUM(amount_paid) AS settled_payments
    FROM payments WHERE payment_status = 'SETTLED' GROUP BY customer_id
),
customer_shipment_summary AS (
    SELECT o.customer_id, COUNT(CASE WHEN s.delivery_status = 'DELIVERED' THEN 1 END) AS delivered
    FROM orders o LEFT JOIN shipments s USING (order_id) GROUP BY o.customer_id
)
SELECT 
    c.customer_id,
    c.customer_name,
    c.city,
    COALESCE(ord.total_orders, 0) AS total_orders,
    CONCAT('₹', FORMAT(COALESCE(ord.gross_orders, 0), 2)) AS gross_orders,
    CONCAT('₹', FORMAT(COALESCE(pay.settled_payments, 0), 2)) AS settled_payments,
    CONCAT('₹', FORMAT(COALESCE(ord.gross_orders, 0) - COALESCE(pay.settled_payments, 0), 2)) AS net_outstanding,
    COALESCE(shp.delivered, 0) AS delivered_shipments
FROM customers c
LEFT JOIN customer_order_summary ord USING (customer_id)
LEFT JOIN customer_payment_summary pay USING (customer_id)
LEFT JOIN customer_shipment_summary shp USING (customer_id);`,resultRows:[{name:"Mamata Hui (Barrackpore)",col1:"3 Orders",col2:"Gross: ₹12,500.00",col3:"Paid: ₹12,500.00",net:"Net: ₹0.00 (Fully Settled)",badgeColor:"emerald"},{name:"Debangshu Roy (Kolkata)",col1:"2 Orders",col2:"Gross: ₹8,000.00",col3:"Paid: ₹5,000.00",net:"Net: ₹3,000.00 (Due)",badgeColor:"amber"},{name:"Susmita Sen (Ichapur)",col1:"0 Orders",col2:"Gross: ₹0.00",col3:"Paid: ₹0.00",net:"Net: ₹0.00 (Lead)",badgeColor:"cyan"}],verdictText:"✓ 100% RECONCILED (ZERO FAN-OUT)",badgeColor:"emerald",explanation:"Using separate pre-aggregating CTEs guarantees that orders, payments, and shipments are summarized independently before joining, ensuring zero row multiplication!"},lab_fulfillment_gap:{title:"2. Warehouse Fulfillment Gap Audit (Anti-Join)",sqlQuery:`-- Finding paid orders waiting > 48 hours for dispatch:
SELECT 
    o.order_id,
    c.customer_name,
    o.order_date,
    CONCAT('₹', FORMAT(p.amount_paid, 2)) AS amount_paid,
    TIMESTAMPDIFF(HOUR, o.order_date, NOW()) AS hours_delayed
FROM orders o
INNER JOIN customers c USING (customer_id)
INNER JOIN payments p USING (order_id)
LEFT JOIN shipments s USING (order_id)
WHERE p.payment_status = 'SETTLED'
  AND s.shipment_id IS NULL -- Anti-join isolating unfulfilled orders!
  AND TIMESTAMPDIFF(HOUR, o.order_date, NOW()) > 48;`,resultRows:[{name:"Debangshu Roy",col1:"ORD-8041",col2:"Paid: ₹5,000.00",col3:"Delayed: 54 Hours",net:"Warehouse Alert ⚠️",badgeColor:"rose"}],verdictText:"⚠️ 1 FULFILLMENT BOTTLENECK DETECTED",badgeColor:"rose",explanation:"The anti-join pattern (LEFT JOIN shipments WHERE shipment_id IS NULL) identifies orders that customers have paid for but warehouse logistics has not dispatched."},lab_loyalty_rebate:{title:"3. Dynamic Loyalty Tier Rebates (Non-Equi Join)",sqlQuery:`SELECT 
    c.customer_name,
    c.city,
    CONCAT('₹', FORMAT(SUM(o.total_amount), 2)) AS annual_spend,
    lt.tier_name,
    CONCAT(lt.cashback_pct, '%') AS rebate_rate,
    CONCAT('₹', FORMAT(SUM(o.total_amount) * (lt.cashback_pct / 100), 2)) AS earned_cashback
FROM customers c
INNER JOIN orders o USING (customer_id)
INNER JOIN loyalty_tiers lt 
    ON SUM(o.total_amount) >= lt.min_spend 
   AND (SUM(o.total_amount) < lt.max_spend OR lt.max_spend IS NULL)
WHERE YEAR(o.order_date) = 2026
GROUP BY c.customer_id, c.customer_name, c.city, lt.tier_name, lt.cashback_pct;`,resultRows:[{name:"Mamata Hui",col1:"Spend: ₹12,500.00",col2:"Gold Tier (₹10k–₹25k)",col3:"5% Cashback Rate",net:"Cashback: ₹625.00",badgeColor:"emerald"},{name:"Debangshu Roy",col1:"Spend: ₹8,000.00",col2:"Silver Tier (₹5k–₹10k)",col3:"2% Cashback Rate",net:"Cashback: ₹160.00",badgeColor:"cyan"}],verdictText:"✓ DYNAMIC REBATE MAPPING",badgeColor:"cyan",explanation:"Non-Equi join binds total annual customer expenditure to tiered reward brackets without any hardcoded CASE statements."},lab_category_profit:{title:"4. Multi-Table Category Gross Revenue Synthesis",sqlQuery:`SELECT 
    cat.category_name,
    COUNT(DISTINCT p.product_id) AS active_products,
    COUNT(oi.item_id) AS total_items_sold,
    CONCAT('₹', FORMAT(SUM(oi.quantity * oi.unit_price), 2)) AS category_revenue
FROM categories cat
INNER JOIN products p USING (category_id)
INNER JOIN order_items oi USING (product_id)
INNER JOIN orders o USING (order_id)
WHERE o.status = 'COMPLETED'
GROUP BY cat.category_id, cat.category_name;`,resultRows:[{name:"Database & Backend",col1:"12 Products",col2:"340 Units Sold",col3:"Completed Orders",net:"Revenue: ₹1,53,000.00",badgeColor:"emerald"},{name:"Full-Stack Web",col1:"8 Products",col2:"210 Units Sold",col3:"Completed Orders",net:"Revenue: ₹1,15,500.00",badgeColor:"emerald"}],verdictText:"✓ 4-TABLE ENTERPRISE REVENUE",badgeColor:"emerald",explanation:"Synthesizes data across categories, products, order line items, and parent orders to compute total gross revenue per product line in Indian Rupee (₹)."}}[o];d.useEffect(()=>{const t=new IntersectionObserver(a=>{a.forEach(c=>{c.isIntersecting&&c.target.classList.add("is-visible")})},{threshold:.1,rootMargin:"0px 0px -30px 0px"});return i.current.forEach(a=>{a&&t.observe(a)}),()=>{i.current.forEach(a=>{a&&t.unobserve(a)})}},[]);const s=t=>{t&&!i.current.includes(t)&&i.current.push(t)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .reveal-section {
          transform: translateY(20px);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-section.is-visible {
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal-section {
            transform: none !important;
            transition: none !important;
          }
        }
      `}),e.jsxs("div",{className:n("w-full max-w-5xl mx-auto px-4 py-10 md:py-14","bg-slate-950 text-slate-100 font-sans leading-relaxed"),children:[e.jsxs("div",{ref:s,className:"reveal-section mb-12 text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-400",children:[e.jsx("span",{className:"h-2 w-2 rounded-full bg-teal-400 animate-pulse"}),"Module 002_005 · SQL Joins · Topic 13 (Capstone Lab)"]}),e.jsxs("h1",{className:"mt-4 text-3xl md:text-5xl font-black tracking-tight text-white",children:["Complex Join Lab:"," ",e.jsx("span",{className:"bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent",children:"Customer Orders, Shipments & Payments"})]}),e.jsx("p",{className:"mx-auto mt-4 max-w-3xl text-base md:text-lg text-slate-400",children:"Synthesize all join techniques into an enterprise analytics pipeline: customer 360-degree financial reconciliations, warehouse fulfillment anti-join gap tracking, dynamic non-equi loyalty rebates, and multi-table category profit matrixes."}),e.jsxs("div",{className:"mt-6 flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-400",children:[e.jsx("span",{className:"rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5",children:"🏆 Module Capstone Hands-On Lab"}),e.jsx("span",{className:"rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5",children:"🌐 Customer 360-Degree Financial Ledger"}),e.jsx("span",{className:"rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5",children:"📦 Warehouse Dispatch Anti-Join Audits"}),e.jsx("span",{className:"rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5",children:"💰 Non-Equi Dynamic Loyalty Rebates (₹)"})]})]}),e.jsxs("section",{ref:s,className:"reveal-section mb-12 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 md:p-8 shadow-xl shadow-black/40 transition-all duration-300 hover:border-slate-700",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400 font-bold",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-white",children:"Enterprise 7-Table Schema Architecture & CTE Pipeline"}),e.jsx("p",{className:"text-xs text-slate-400",children:"How Common Table Expressions (CTEs) synthesize orders, payments, shipments, and customer tiers cleanly"})]})]}),e.jsxs("div",{className:"mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl border border-teal-500/30 bg-slate-950 space-y-2",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-teal-400 uppercase",children:"1. Triple CTE Pre-Aggregation"}),e.jsx("strong",{className:"text-white text-xs block font-mono",children:"Orders CTE + Payments CTE + Shipments CTE"}),e.jsx("p",{className:"text-xs text-slate-300",children:"Pre-aggregating each domain separately eliminates Cartesian row proliferation, ensuring every customer record joins with exactly 1 summary row per child domain."})]}),e.jsxs("div",{className:"p-4 rounded-xl border border-cyan-500/30 bg-slate-950 space-y-2",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-cyan-400 uppercase",children:"2. Anti-Join Fulfillment Detection"}),e.jsx("strong",{className:"text-white text-xs block font-mono",children:"Paid Orders LEFT JOIN Shipments (IS NULL)"}),e.jsx("p",{className:"text-xs text-slate-300",children:"Isolates orders that customers have settled but warehouse packing has neglected to dispatch after SLA thresholds."})]})]}),e.jsxs("div",{className:"mt-8 rounded-xl border border-slate-800 bg-slate-950 p-4",children:[e.jsx("h3",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 text-center",children:"Visual Guide: Customer 360 Pipeline (Triple CTE Pre-Aggregation Integration)"}),e.jsxs("svg",{viewBox:"0 0 780 140",className:"w-full h-auto text-xs font-sans",role:"img","aria-label":"Enterprise Pipeline Diagram",children:[e.jsxs("g",{transform:"translate(20, 15)",children:[e.jsx("rect",{width:"180",height:"32",rx:"4",fill:"#1e293b",stroke:"#38bdf8"}),e.jsx("text",{x:"90",y:"20",fill:"#38bdf8",textAnchor:"middle",fontSize:"9",children:"CTE 1: Orders Summary (Gross ₹)"})]}),e.jsxs("g",{transform:"translate(20, 55)",children:[e.jsx("rect",{width:"180",height:"32",rx:"4",fill:"#1e293b",stroke:"#10b981"}),e.jsx("text",{x:"90",y:"20",fill:"#10b981",textAnchor:"middle",fontSize:"9",children:"CTE 2: Payments Summary (Settled ₹)"})]}),e.jsxs("g",{transform:"translate(20, 95)",children:[e.jsx("rect",{width:"180",height:"32",rx:"4",fill:"#1e293b",stroke:"#818cf8"}),e.jsx("text",{x:"90",y:"20",fill:"#818cf8",textAnchor:"middle",fontSize:"9",children:"CTE 3: Shipments Summary (Status)"})]}),e.jsx("line",{x1:"200",y1:"31",x2:"270",y2:"70",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("line",{x1:"200",y1:"71",x2:"270",y2:"70",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("line",{x1:"200",y1:"111",x2:"270",y2:"70",stroke:"#818cf8",strokeWidth:"1.5"}),e.jsxs("g",{transform:"translate(270, 30)",children:[e.jsx("rect",{width:"200",height:"80",rx:"8",fill:"#0f172a",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"100",y:"25",fill:"#10b981",textAnchor:"middle",fontWeight:"bold",children:"Customers Master"}),e.jsx("text",{x:"10",y:"48",fill:"#cbd5e1",fontSize:"9",children:"JOIN USING (customer_id)"}),e.jsx("text",{x:"10",y:"66",fill:"#a7f3d0",fontSize:"8",children:"Preserves 100% Customer Base"})]}),e.jsxs("g",{transform:"translate(480, 60)",children:[e.jsx("line",{x1:"0",y1:"10",x2:"35",y2:"10",stroke:"#10b981",strokeWidth:"3"}),e.jsx("polygon",{points:"35,5 48,10 35,15",fill:"#10b981"})]}),e.jsxs("g",{transform:"translate(540, 20)",children:[e.jsx("rect",{width:"220",height:"100",rx:"6",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"110",y:"22",fill:"#38bdf8",textAnchor:"middle",fontWeight:"bold",fontSize:"10",children:"Executive 360 Dashboard"}),e.jsx("text",{x:"10",y:"45",fill:"#cbd5e1",fontSize:"8",children:"Gross Orders · Paid Amounts"}),e.jsx("text",{x:"10",y:"65",fill:"#fde68a",fontSize:"8",children:"Net Outstanding Balance (₹)"}),e.jsx("text",{x:"10",y:"85",fill:"#a7f3d0",fontSize:"8",fontWeight:"bold",children:"Zero Fan-Out Data Integrity"})]})]})]})]}),e.jsxs("section",{ref:s,className:"reveal-section mb-12 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 md:p-8 shadow-xl shadow-black/40 transition-all duration-300 hover:border-slate-700",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 font-bold",children:"02"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-white",children:"Interactive Capstone Join Lab Simulator Sandbox"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Test customer 360 balance sheets, warehouse fulfillment anti-joins, dynamic loyalty rebates, and category revenue"})]})]}),e.jsxs("div",{className:"mt-6 space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:[e.jsx("button",{onClick:()=>l("lab_customer_360"),className:n("py-2 px-2 rounded-lg text-xs font-bold transition-all border text-center font-mono",o==="lab_customer_360"?"bg-emerald-500/20 text-emerald-300 border-emerald-500/50":"bg-slate-950 text-slate-400 border-slate-800 hover:text-white"),children:"1. Customer 360 Ledger"}),e.jsx("button",{onClick:()=>l("lab_fulfillment_gap"),className:n("py-2 px-2 rounded-lg text-xs font-bold transition-all border text-center font-mono",o==="lab_fulfillment_gap"?"bg-rose-500/20 text-rose-300 border-rose-500/50":"bg-slate-950 text-slate-400 border-slate-800 hover:text-white"),children:"2. Fulfillment Gap Audit"}),e.jsx("button",{onClick:()=>l("lab_loyalty_rebate"),className:n("py-2 px-2 rounded-lg text-xs font-bold transition-all border text-center font-mono",o==="lab_loyalty_rebate"?"bg-cyan-500/20 text-cyan-300 border-cyan-500/50":"bg-slate-950 text-slate-400 border-slate-800 hover:text-white"),children:"3. Loyalty Rebates (₹)"}),e.jsx("button",{onClick:()=>l("lab_category_profit"),className:n("py-2 px-2 rounded-lg text-xs font-bold transition-all border text-center font-mono",o==="lab_category_profit"?"bg-indigo-500/20 text-indigo-300 border-indigo-500/50":"bg-slate-950 text-slate-400 border-slate-800 hover:text-white"),children:"4. Category Revenue"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"rounded-xl border border-teal-500/30 bg-slate-950 p-4 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2",children:[e.jsx("span",{className:"text-xs font-bold text-white",children:r.title}),e.jsx("span",{className:n("text-[10px] font-mono px-2 py-0.5 rounded border",r.badgeColor==="emerald"?"bg-emerald-500/10 text-emerald-300 border-emerald-500/30":r.badgeColor==="cyan"?"bg-cyan-500/10 text-cyan-300 border-cyan-500/30":r.badgeColor==="indigo"?"bg-indigo-500/10 text-indigo-300 border-indigo-500/30":"bg-rose-500/10 text-rose-300 border-rose-500/30"),children:r.verdictText})]}),e.jsx("pre",{className:"font-mono text-emerald-400 overflow-x-auto whitespace-pre-wrap text-[11px] bg-slate-900 p-3 rounded-lg border border-slate-800 max-h-56",children:r.sqlQuery}),e.jsx("p",{className:"text-[11px] text-slate-300",children:r.explanation})]})}),e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 rounded-xl border border-slate-800 bg-slate-950 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-200 block border-b border-slate-800 pb-2",children:"Pipeline Execution Results"}),e.jsxs("table",{className:"w-full text-left text-xs font-mono text-slate-300",children:[e.jsx("thead",{className:"text-[10px] text-teal-400 uppercase border-b border-slate-800 bg-slate-900",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-1.5",children:"Entity / Customer"}),e.jsx("th",{className:"p-1.5",children:"Metrics"}),e.jsx("th",{className:"p-1.5",children:"Payments / Details"}),e.jsx("th",{className:"p-1.5",children:"Audit Status"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 text-[11px]",children:r.resultRows.map((t,a)=>e.jsxs("tr",{className:"bg-slate-950/40",children:[e.jsx("td",{className:"p-1.5 text-white font-bold",children:t.name}),e.jsxs("td",{className:"p-1.5 text-cyan-300",children:[t.col1," (",t.col2,")"]}),e.jsx("td",{className:"p-1.5 text-slate-300",children:t.col3}),e.jsx("td",{className:"p-1.5 text-emerald-300 font-bold",children:t.net})]},a))})]})]})})]})]})]}),e.jsxs("section",{ref:s,className:"reveal-section mb-12 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 md:p-8 shadow-xl shadow-black/40 transition-all duration-300 hover:border-slate-700",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400 font-bold",children:"03"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-white",children:"Real-World Production Scenarios (Classroom Case Studies)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"How Barrackpore and Kolkata training institutes deploy capstone analytics in live production"})]})]}),e.jsxs("div",{className:"mt-6 space-y-6",children:[e.jsxs("div",{className:"rounded-xl border border-slate-800 bg-slate-950 p-5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-base font-bold text-indigo-400",children:"Case 1: Mamata's Automated Student Fee Clearance View"}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"Barrackpore Academy"})]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Creating a database SQL view for exam hall ticket clearance:"}),e.jsx("pre",{className:"mt-3 overflow-x-auto rounded-lg bg-slate-900 p-3 font-mono text-xs text-slate-300 leading-relaxed border border-slate-800",children:`-- Production Clearance View:
CREATE OR REPLACE VIEW view_exam_clearance AS
WITH fee_totals AS (
    SELECT student_id, SUM(course_fee) AS total_fee
    FROM student_courses JOIN courses USING (course_id) GROUP BY student_id
),
payment_totals AS (
    SELECT student_id, SUM(amount_paid) AS total_paid
    FROM payments GROUP BY student_id
)
SELECT 
    s.student_id,
    s.student_name,
    s.city,
    CASE 
        WHEN COALESCE(f.total_fee, 0) <= COALESCE(p.total_paid, 0) THEN 'CLEAR (Admit Card Issued)'
        ELSE CONCAT('HOLD (Dues: ₹', FORMAT(f.total_fee - COALESCE(p.total_paid, 0), 2), ')')
    END AS clearance_status
FROM students s
LEFT JOIN fee_totals f USING (student_id)
LEFT JOIN payment_totals p USING (student_id);`})]}),e.jsxs("div",{className:"rounded-xl border border-slate-800 bg-slate-950 p-5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-base font-bold text-indigo-400",children:"Case 2: Debangshu's Real-Time Logistics Carrier SLA Monitoring"}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"Kolkata E-Commerce"})]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Joining shipments, carriers, and routes to monitor SLA breaches in real time:"}),e.jsx("pre",{className:"mt-3 overflow-x-auto rounded-lg bg-slate-900 p-3 font-mono text-xs text-slate-300 leading-relaxed border border-slate-800",children:`-- Carrier SLA Real-Time Performance Monitor:
SELECT 
    c.carrier_name,
    COUNT(s.shipment_id) AS total_dispatched,
    SUM(CASE WHEN s.delivery_status = 'DELIVERED' AND s.delivered_date <= s.promised_date THEN 1 ELSE 0 END) AS on_time_deliveries,
    ROUND((SUM(CASE WHEN s.delivery_status = 'DELIVERED' AND s.delivered_date <= s.promised_date THEN 1 ELSE 0 END) / COUNT(s.shipment_id)) * 100, 2) AS on_time_sla_pct
FROM carriers c
INNER JOIN shipments s USING (carrier_id)
WHERE s.dispatch_date >= CURDATE() - INTERVAL 30 DAY
GROUP BY c.carrier_id, c.carrier_name
HAVING on_time_sla_pct < 95.00;`})]})]})]}),e.jsxs("section",{ref:s,className:"reveal-section mb-12 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 md:p-8 shadow-xl shadow-black/40 transition-all duration-300 hover:border-slate-700",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 font-bold",children:"04"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-white",children:"Common Mistakes & Production Best Practices"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Guidelines for designing enterprise join architectures that scale efficiently"})]})]}),e.jsxs("div",{className:"mt-6 grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h3",{className:"text-sm font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"❌"})," Common Pitfalls"]}),e.jsxs("div",{className:"rounded-xl border border-rose-500/20 bg-rose-500/5 p-4 space-y-2.5 text-xs text-slate-300",children:[e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"1. Multi-Child Join Without CTEs:"}),e.jsx("p",{className:"text-slate-400 mt-0.5",children:"Directly joining multiple 1:N tables causes severe aggregate inflation and corrupted balance sheets."})]}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"2. Forgetting COALESCE on Outer Aggregates:"}),e.jsx("p",{className:"text-slate-400 mt-0.5",children:"Omitting COALESCE causes balances to evaluate to NULL whenever any single child table has 0 rows."})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h3",{className:"text-sm font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"✅"})," Production Best Practices"]}),e.jsxs("div",{className:"rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 space-y-2.5 text-xs text-slate-300",children:[e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"1. Structure Queries with CTE Pre-Aggregation:"}),e.jsx("p",{className:"text-slate-400 mt-0.5",children:"Use modular Common Table Expressions to summarize each domain independently before joining."})]}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"2. Check EXPLAIN FORMAT=TREE:"}),e.jsx("p",{className:"text-slate-400 mt-0.5",children:"Verify that MySQL utilizes Hash Joins or Index Lookups rather than nested block scans."})]})]})]})]})]}),e.jsxs("section",{ref:s,className:"reveal-section mb-12 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 md:p-8 shadow-xl shadow-black/40",children:[e.jsx("h2",{className:"text-lg md:text-xl font-bold text-white border-b border-slate-800 pb-3",children:"Summary Checklist (Module 002_005 Capstone Takeaways)"}),e.jsxs("div",{className:"mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-slate-300",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"☑"}),e.jsx("span",{children:"Synthesized INNER, LEFT, RIGHT, FULL outer simulation, SELF, and NON-EQUI joins"})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"☑"}),e.jsx("span",{children:"Mastered Customer 360 ledger reconciliation without row multiplication"})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"☑"}),e.jsx("span",{children:"Automated shipping fulfillment gap detection using Anti-Join techniques"})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"☑"}),e.jsx("span",{children:"Applied Non-Equi joins for dynamic loyalty tier rewards calculation"})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"☑"}),e.jsx("span",{children:"Ensured index coverage across all foreign key join paths"})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"☑"}),e.jsx("span",{children:"Encapsulated complex multi-table SQL in reusable database Views"})]})]})]}),e.jsx("section",{ref:s,className:"reveal-section mb-12",children:e.jsx(u,{title:"Complex Join Lab & Multi-Table Analytics – FAQs",questions:h,subtitle:"Master complex multi-table joins, customer 360 ledger reconciliation, CTE pre-aggregation patterns, warehouse anti-join fulfillment audits, and performance tuning with 30 comprehensive Q&As",showPrint:!0,showExpandAll:!0,showSearch:!0,showProgress:!0})}),e.jsx("section",{ref:s,className:"reveal-section mb-12",children:e.jsx(p,{content:x,title:"Complex Join Lab: Customer Orders, Shipments, and Payments Analytics",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Plain Text Note",downloadFileName:"topic13_complex_join_lab_note.txt"})}),e.jsx("section",{ref:s,className:"reveal-section mb-12",children:e.jsx(m,{note:"Congratulations on completing Module 002_005: Mastering SQL Joins & Multi-Table Queries! In my classroom at Coder & AccoTax in Barrackpore, I share with my students: 'You have evolved from writing simple 2-table queries to architecting complete enterprise data pipelines. You know how to prevent aggregate fan-out inflation using CTE pre-aggregation, how to uncover unfulfilled shipments using Anti-Joins, and how to bind customer spending dynamically to loyalty tiers using Non-Equi Joins!' These techniques represent the gold standard of real-world database engineering. Always remember: write explicit ANSI joins, index your foreign keys, and let the mathematics of relational algebra work for you!"})}),e.jsx("div",{className:"mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500",children:e.jsx("span",{children:"Topic 13 · Capstone Join Lab · Module 002_005 · Segment 2 · RDBMS MySQL Course · Coder & AccoTax Barrackpore"})})]})]})};export{S as default};
