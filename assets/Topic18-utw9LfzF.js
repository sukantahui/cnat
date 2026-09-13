import{b as l,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as x}from"./vendor-prism-CCfIgi4B.js";import{ay as Q,aX as J,L as $,H as v,ab as Z,a7 as ee,n as ne,d as H,E as j,aO as te,ah as Y,ag as G,aa as ae,ad as re,ak as ie,aJ as se,aF as oe,B as le,r as F,N as ce,k as de,S as Ee,a4 as Ne,f as me,g as Te,D as Ae}from"./vendor-icons-ri6cs58t.js";import{T as ue}from"./TeacherSukantaHui-Ds9F9lLV.js";import{F as Ie}from"./FAQTemplate-D_90hN4m.js";import{P as _e}from"./PlainTextPrint-yt10TRX1.js";const Re=`-- ============================================================================\r
-- SQL-PRJ-01: E-Commerce Product Catalog Schema & Price Filter\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
-- Step 1: Create Database & Select Schema\r
CREATE DATABASE IF NOT EXISTS ecommerce_store_db;\r
USE ecommerce_store_db;\r
\r
-- Step 2: DDL - Create Table Definition with BIGINT UNSIGNED Primary Key\r
DROP TABLE IF EXISTS products;\r
CREATE TABLE products (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    product_name VARCHAR(100) NOT NULL,\r
    category VARCHAR(50) NOT NULL,\r
    unit_price DECIMAL(10, 2) NOT NULL,\r
    stock_qty INT DEFAULT 0,\r
    supplier_email VARCHAR(120)\r
);\r
\r
-- Step 3: DML - Batch Insert Seed Records\r
INSERT INTO products (product_name, category, unit_price, stock_qty, supplier_email)\r
VALUES \r
    ('Noise-Cancel Headset Pro', 'Electronics', 6999.00, 30, 'techsupply@audiohub.in'),\r
    ('Solid Teak Study Table', 'Furniture', 14500.00, 10, 'crafts@bengaltimber.com'),\r
    ('Wireless Mouse M330 Silent', 'Electronics', 899.00, 120, 'sales@peripherals.co.in'),\r
    ('Ultra HD 4K Monitor 27-inch', 'Electronics', 28500.00, 15, 'displays@visiontech.in'),\r
    ('RGB Mechanical Gaming Keyboard', 'Electronics', 3499.00, 45, 'gaming@peripherals.co.in');\r
\r
-- Step 4: DQL - Targeted Analytical Query with Aliasing & Sorting\r
SELECT \r
    id AS 'ID',\r
    product_name AS 'Item Name',\r
    category AS 'Category',\r
    unit_price AS 'Price (INR)',\r
    stock_qty AS 'In Stock'\r
FROM products\r
WHERE category = 'Electronics' \r
  AND unit_price <= 25000.00\r
ORDER BY unit_price ASC;\r
`,pe=`-- ============================================================================\r
-- SQL-PRJ-02: Hospital Inpatient Admission & Active Patient Audit\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
CREATE DATABASE IF NOT EXISTS hospital_care_db;\r
USE hospital_care_db;\r
\r
DROP TABLE IF EXISTS inpatient_admissions;\r
CREATE TABLE inpatient_admissions (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    patient_name VARCHAR(80) NOT NULL,\r
    ward_no VARCHAR(10) NOT NULL,\r
    admission_date DATE NOT NULL,\r
    discharge_date DATE NULL,\r
    attending_doctor VARCHAR(80)\r
);\r
\r
INSERT INTO inpatient_admissions (patient_name, ward_no, admission_date, discharge_date, attending_doctor)\r
VALUES\r
    ('Ramesh Chandra Roy', 'GEN-04', '2026-07-28', '2026-08-04', 'Dr. S. Chatterjee'),\r
    ('Ananya Sen', 'ICU-02', '2026-08-05', NULL, 'Dr. P. Mukherjee'),\r
    ('Bimal Krishna Das', 'GEN-11', '2026-08-10', '2026-08-16', 'Dr. S. Chatterjee'),\r
    ('Rajesh Mukherjee', 'GEN-14', '2026-08-18', NULL, 'Dr. A. Sengupta'),\r
    ('Kalyani Banerjee', 'PVT-08', '2026-07-15', '2026-08-02', 'Dr. P. Mukherjee'),\r
    ('Sunita Ghosh', 'CCU-01', '2026-08-25', NULL, 'Dr. A. Sengupta');\r
\r
-- Query: Active August Admissions (Discharge is NULL)\r
SELECT \r
    id,\r
    patient_name,\r
    ward_no,\r
    admission_date,\r
    discharge_date,\r
    attending_doctor\r
FROM inpatient_admissions\r
WHERE discharge_date IS NULL\r
  AND admission_date BETWEEN '2026-08-01' AND '2026-08-31'\r
ORDER BY admission_date ASC;\r
`,Le=`-- ============================================================================\r
-- SQL-PRJ-03: University Student Grading & Honors Directory\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
CREATE DATABASE IF NOT EXISTS university_records_db;\r
USE university_records_db;\r
\r
DROP TABLE IF EXISTS students;\r
CREATE TABLE students (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    roll_no INT NOT NULL UNIQUE,\r
    student_name VARCHAR(100) NOT NULL,\r
    department VARCHAR(30) NOT NULL,\r
    semester INT NOT NULL,\r
    gpa FLOAT\r
);\r
\r
-- Schema Evolution via ALTER TABLE\r
ALTER TABLE students ADD COLUMN email VARCHAR(150);\r
ALTER TABLE students MODIFY COLUMN gpa DECIMAL(3, 2) NOT NULL;\r
\r
INSERT INTO students (roll_no, student_name, department, semester, gpa, email)\r
VALUES\r
    (101, 'Debjit Roy', 'CSE', 6, 3.92, 'debjit.roy@univ.edu.in'),\r
    (102, 'Sourav Mukherjee', 'CSE', 6, 3.65, 'sourav.m@univ.edu.in'),\r
    (103, 'Madhurima Das', 'ECE', 6, 3.88, 'madhurima.d@univ.edu.in'),\r
    (104, 'Priya Chakraborty', 'IT', 6, 3.78, 'priya.c@univ.edu.in'),\r
    (105, 'Arpan Ghosh', 'CSE', 4, 3.95, 'arpan.g@univ.edu.in'),\r
    (106, 'Sneha Dutta', 'IT', 6, 3.40, 'sneha.d@univ.edu.in');\r
\r
-- Query: CSE/IT Sem 6 Honors Students (GPA >= 3.50)\r
SELECT \r
    id,\r
    roll_no,\r
    student_name,\r
    department,\r
    semester,\r
    gpa,\r
    email\r
FROM students\r
WHERE department IN ('CSE', 'IT')\r
  AND semester = 6\r
  AND gpa >= 3.50\r
ORDER BY gpa DESC;\r
`,ge=`-- ============================================================================\r
-- SQL-PRJ-04: Banking High-Value Transaction Tracker & Fraud Alert Filter\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
CREATE DATABASE IF NOT EXISTS core_banking_db;\r
USE core_banking_db;\r
\r
DROP TABLE IF EXISTS bank_transactions;\r
CREATE TABLE bank_transactions (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    account_no VARCHAR(20) NOT NULL,\r
    txn_type VARCHAR(15) NOT NULL,\r
    amount DECIMAL(12, 2) NOT NULL,\r
    txn_time DATETIME NOT NULL,\r
    status VARCHAR(15) NOT NULL\r
);\r
\r
INSERT INTO bank_transactions (account_no, txn_type, amount, txn_time, status)\r
VALUES\r
    ('HDFC00124981', 'WITHDRAWAL', 85000.00, '2026-09-01 09:15:30', 'SUCCESS'),\r
    ('ICIC00994123', 'DEPOSIT',    120000.00, '2026-09-01 10:05:12', 'SUCCESS'),\r
    ('SBIN00451299', 'WITHDRAWAL', 15000.00, '2026-09-01 10:45:00', 'SUCCESS'),\r
    ('SBIN00982341', 'WITHDRAWAL', 50000.00, '2026-09-01 11:45:00', 'SUCCESS'),\r
    ('HDFC00124981', 'TRANSFER',   95000.00, '2026-09-01 12:30:15', 'FAILED'),\r
    ('SBIN00982341', 'TRANSFER',  150000.00, '2026-09-01 14:22:10', 'SUCCESS'),\r
    ('AXIS00118822', 'WITHDRAWAL', 62000.00, '2026-09-01 15:10:45', 'PENDING'),\r
    ('ICIC00994123', 'TRANSFER',   55000.00, '2026-09-01 16:00:20', 'SUCCESS');\r
\r
-- High-Value Outflow Audit Query (Top 3 Successful Debits >= 50k)\r
SELECT \r
    id,\r
    account_no,\r
    txn_type,\r
    amount,\r
    txn_time,\r
    status\r
FROM bank_transactions\r
WHERE txn_type IN ('WITHDRAWAL', 'TRANSFER')\r
  AND amount >= 50000.00\r
  AND status = 'SUCCESS'\r
ORDER BY amount DESC\r
LIMIT 3;\r
`,he=`-- ============================================================================\r
-- SQL-PRJ-05: Corporate HR Employee Payroll & Department Filter\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
CREATE DATABASE IF NOT EXISTS corporate_hr_db;\r
USE corporate_hr_db;\r
\r
DROP TABLE IF EXISTS employees;\r
CREATE TABLE employees (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    first_name VARCHAR(50) NOT NULL,\r
    last_name VARCHAR(50) NOT NULL,\r
    department VARCHAR(40) NOT NULL,\r
    designation VARCHAR(50) NOT NULL,\r
    basic_salary DECIMAL(10, 2) NOT NULL,\r
    hire_date DATE NOT NULL,\r
    manager_id BIGINT UNSIGNED NULL\r
);\r
\r
INSERT INTO employees (first_name, last_name, department, designation, basic_salary, hire_date, manager_id)\r
VALUES\r
    ('Siddhartha', 'Ghosh',     'Executive',   'Chief Executive Officer', 250000.00, '2018-01-10', NULL),\r
    ('Rituparna',  'Sen',       'Engineering', 'Senior Backend Dev',       95000.00, '2021-03-15', 1),\r
    ('Amitava',    'Paul',      'Engineering', 'QA Automation Lead',       68000.00, '2022-07-01', 2),\r
    ('Pradeep',    'Kundu',     'Operations',  'Facility Supervisor',      35000.00, '2023-01-15', 1),\r
    ('Tanmay',     'Das',       'Analytics',   'Data Analyst',             62000.00, '2022-11-20', 1),\r
    ('Barnali',    'Roy',       'Finance',     'Senior Accountant',        58000.00, '2020-09-01', 1),\r
    ('Arindam',    'Mukherjee', 'Marketing',   'Growth Marketer',          52000.00, '2023-05-10', 1);\r
\r
-- Query: Non-Executive Depts (45k - 120k) with valid reporting manager\r
SELECT \r
    id,\r
    first_name,\r
    last_name,\r
    department,\r
    designation,\r
    basic_salary,\r
    manager_id\r
FROM employees\r
WHERE department IN ('Engineering', 'Finance', 'Analytics')\r
  AND basic_salary BETWEEN 45000.00 AND 120000.00\r
  AND manager_id IS NOT NULL\r
ORDER BY department ASC, basic_salary DESC;\r
`,Se=`-- ============================================================================\r
-- SQL-PRJ-06: Airline Flight Schedule & Dynamic Fare Search\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
CREATE DATABASE IF NOT EXISTS airline_operations_db;\r
USE airline_operations_db;\r
\r
DROP TABLE IF EXISTS flights;\r
CREATE TABLE flights (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    flight_code VARCHAR(10) NOT NULL,\r
    airline_name VARCHAR(50) NOT NULL,\r
    origin_city VARCHAR(40) NOT NULL,\r
    dest_city VARCHAR(40) NOT NULL,\r
    departure_time TIME NOT NULL,\r
    arrival_time TIME NOT NULL,\r
    economy_fare DECIMAL(8, 2) NOT NULL\r
);\r
\r
INSERT INTO flights (flight_code, airline_name, origin_city, dest_city, departure_time, arrival_time, economy_fare)\r
VALUES\r
    ('6E-205',  'IndiGo',     'Kolkata', 'Bengaluru', '06:15:00', '08:45:00', 4850.00),\r
    ('SG-401',  'SpiceJet',   'Kolkata', 'Delhi',     '07:00:00', '09:20:00', 3600.00),\r
    ('AI-742',  'Air India',  'Kolkata', 'Delhi',     '09:30:00', '11:50:00', 5900.00),\r
    ('UK-812',  'Vistara',    'Kolkata', 'Mumbai',    '11:00:00', '13:40:00', 6800.00),\r
    ('6E-881',  'IndiGo',     'Kolkata', 'Delhi',     '18:40:00', '21:05:00', 6400.00),\r
    ('QP-1102', 'Akasa Air',  'Kolkata', 'Bengaluru', '20:15:00', '22:50:00', 3800.00),\r
    ('AI-519',  'Air India',  'Kolkata', 'Bengaluru', '14:10:00', '16:40:00', 7800.00);\r
\r
-- Query: Kolkata -> Delhi/BLR, Fare 4k-9.5k, IndiGo or Air India\r
SELECT \r
    id,\r
    flight_code,\r
    airline_name,\r
    origin_city,\r
    dest_city,\r
    departure_time,\r
    arrival_time,\r
    economy_fare\r
FROM flights\r
WHERE origin_city = 'Kolkata'\r
  AND dest_city IN ('Delhi', 'Bengaluru')\r
  AND (flight_code LIKE '6E%' OR flight_code LIKE 'AI%')\r
  AND economy_fare BETWEEN 4000.00 AND 9500.00\r
ORDER BY economy_fare ASC;\r
`,ye=`-- ============================================================================\r
-- SQL-PRJ-07: OTT Movie Streaming Catalog & Paginated Browser\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
CREATE DATABASE IF NOT EXISTS ott_platform_db;\r
USE ott_platform_db;\r
\r
DROP TABLE IF EXISTS movies;\r
CREATE TABLE movies (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    title VARCHAR(120) NOT NULL,\r
    genre VARCHAR(40) NOT NULL,\r
    release_year INT NOT NULL,\r
    imdb_rating DECIMAL(3, 1) NOT NULL,\r
    duration_mins INT NOT NULL,\r
    maturity_rating VARCHAR(5) NOT NULL\r
);\r
\r
INSERT INTO movies (title, genre, release_year, imdb_rating, duration_mins, maturity_rating)\r
VALUES\r
    ('Oppenheimer',                 'Drama',   2023, 8.9, 180, 'A'),\r
    ('Top Gun: Maverick',           'Action',  2022, 8.3, 130, 'UA'),\r
    ('Interstellar',                'Sci-Fi',  2014, 8.7, 169, 'UA'),\r
    ('Spider-Man: No Way Home',     'Action',  2021, 8.2, 148, 'UA'),\r
    ('Dune: Part Two',              'Sci-Fi',  2024, 8.6, 166, 'UA'),\r
    ('Everything Everywhere',       'Sci-Fi',  2022, 7.8, 139, 'A'),\r
    ('Knives Out: Glass Onion',     'Mystery', 2022, 7.1, 139, 'UA'),\r
    ('The Batman',                  'Action',  2022, 7.8, 176, 'UA');\r
\r
-- Query A: Distinct Genres List\r
SELECT DISTINCT genre \r
FROM movies\r
ORDER BY genre ASC;\r
\r
-- Query B: Pagination - Page 2 (3 items/page) for Rating >= 7.5 and Year >= 2018\r
SELECT \r
    id,\r
    title,\r
    genre,\r
    release_year,\r
    imdb_rating,\r
    duration_mins\r
FROM movies\r
WHERE imdb_rating >= 7.5 \r
  AND release_year >= 2018\r
ORDER BY imdb_rating DESC\r
LIMIT 3 OFFSET 3;\r
`,De=`-- ============================================================================\r
-- SQL-PRJ-08: Hotel Room Booking & Table Maintenance (TRUNCATE vs DROP)\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
CREATE DATABASE IF NOT EXISTS grand_resort_db;\r
USE grand_resort_db;\r
\r
-- 1. Main Booking Relation\r
DROP TABLE IF EXISTS room_bookings;\r
CREATE TABLE room_bookings (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    guest_name VARCHAR(100) NOT NULL,\r
    room_category VARCHAR(40) NOT NULL,\r
    check_in_date DATE NOT NULL,\r
    check_out_date DATE NOT NULL,\r
    nightly_rate DECIMAL(10, 2) NOT NULL,\r
    total_bill DECIMAL(10, 2) NOT NULL\r
);\r
\r
-- 2. Staging Table for Marketing Leads\r
DROP TABLE IF EXISTS temp_web_leads;\r
CREATE TABLE temp_web_leads (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    guest_name VARCHAR(100),\r
    phone VARCHAR(15)\r
);\r
\r
-- 3. Obsolete Table for Demonstration of DROP\r
CREATE TABLE IF NOT EXISTS legacy_scratchpad_2020 (id BIGINT UNSIGNED);\r
\r
-- Populate Main Bookings\r
INSERT INTO room_bookings (guest_name, room_category, check_in_date, check_out_date, nightly_rate, total_bill)\r
VALUES\r
    ('Rahul Banerjee',  'Deluxe Suite',   '2026-10-02', '2026-10-06', 8000.00, 32000.00),\r
    ('Moumita Sen',     'Standard Room',  '2026-10-05', '2026-10-07', 3500.00,  7000.00),\r
    ('Kalyan Roy',      'Executive Room', '2026-10-08', '2026-10-09', 6500.00,  6500.00),\r
    ('Saptarshi Sen',   'Executive Room', '2026-10-10', '2026-10-13', 6500.00, 19500.00),\r
    ('Deepak Sharma',   'Standard Room',  '2026-10-15', '2026-10-18', 3500.00, 10500.00),\r
    ('Sharmistha Roy',  'Deluxe Suite',   '2026-10-18', '2026-10-22', 8500.00, 34000.00);\r
\r
-- Populate Temp Leads\r
INSERT INTO temp_web_leads (guest_name, phone) VALUES ('Lead Test User', '9830011223');\r
\r
-- Maintenance: Wipe staging table while keeping schema\r
TRUNCATE TABLE temp_web_leads;\r
\r
-- Maintenance: Permanently remove legacy relation\r
DROP TABLE IF EXISTS legacy_scratchpad_2020;\r
\r
-- Query: Premium Suite/Executive Stays >= 15k\r
SELECT \r
    id,\r
    guest_name,\r
    room_category,\r
    check_in_date,\r
    check_out_date,\r
    total_bill\r
FROM room_bookings\r
WHERE room_category IN ('Deluxe Suite', 'Executive Room')\r
  AND total_bill >= 15000.00\r
ORDER BY check_in_date ASC;\r
`,Ce=`-- ============================================================================\r
-- SQL-PRJ-09: Courier Logistics & Express Parcel Shipment Tracker\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
CREATE DATABASE IF NOT EXISTS express_logistics_db;\r
USE express_logistics_db;\r
\r
DROP TABLE IF EXISTS shipments;\r
CREATE TABLE shipments (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    tracking_no VARCHAR(15) NOT NULL UNIQUE,\r
    sender_city VARCHAR(40) NOT NULL,\r
    dest_city VARCHAR(40) NOT NULL,\r
    weight_kg DECIMAL(5, 2) NOT NULL,\r
    dispatch_date DATE NOT NULL,\r
    delivery_status VARCHAR(20) NOT NULL,\r
    cod_amount DECIMAL(8, 2) DEFAULT 0.00\r
);\r
\r
INSERT INTO shipments (tracking_no, sender_city, dest_city, weight_kg, dispatch_date, delivery_status, cod_amount)\r
VALUES\r
    ('EXP-10492', 'Kolkata',   'Delhi',     1.20, '2026-09-01', 'IN_TRANSIT',       650.00),\r
    ('EXP-20419', 'Kolkata',   'Mumbai',    5.80, '2026-09-02', 'IN_TRANSIT',      1450.00),\r
    ('STD-99018', 'Bengaluru', 'Kolkata',   3.50, '2026-09-01', 'OUT_FOR_DELIVERY',   0.00),\r
    ('EXP-8812',  'Delhi',     'Kolkata',   2.80, '2026-09-02', 'IN_TRANSIT',       890.00),\r
    ('EXP-38102', 'Chennai',   'Kolkata',   4.20, '2026-09-03', 'OUT_FOR_DELIVERY',   0.00),\r
    ('EXP-99041', 'Kolkata',   'Hyderabad', 0.80, '2026-09-03', 'BOOKED',           450.00),\r
    ('EXP-77120', 'Pune',      'Kolkata',   6.10, '2026-08-30', 'DELIVERED',          0.00);\r
\r
-- Update status of specific tracking parcel\r
UPDATE shipments \r
SET delivery_status = 'DELIVERED' \r
WHERE tracking_no = 'EXP-10492';\r
\r
-- Query: Active Express ('EXP-_____') shipments > 2.5kg\r
SELECT \r
    id,\r
    tracking_no,\r
    sender_city,\r
    dest_city,\r
    weight_kg,\r
    dispatch_date,\r
    delivery_status,\r
    cod_amount\r
FROM shipments\r
WHERE tracking_no LIKE 'EXP-_____'\r
  AND delivery_status IN ('IN_TRANSIT', 'OUT_FOR_DELIVERY')\r
  AND weight_kg > 2.50\r
ORDER BY weight_kg DESC;\r
`,xe=`-- ============================================================================\r
-- SQL-PRJ-10: Central Digital Library Circulation & Overdue Tracker\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
CREATE DATABASE IF NOT EXISTS central_library_db;\r
USE central_library_db;\r
\r
DROP TABLE IF EXISTS book_borrow_records;\r
CREATE TABLE book_borrow_records (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    member_id VARCHAR(15) NOT NULL,\r
    member_name VARCHAR(80) NOT NULL,\r
    book_title VARCHAR(120) NOT NULL,\r
    isbn VARCHAR(20) NOT NULL,\r
    borrow_date DATE NOT NULL,\r
    due_date DATE NOT NULL,\r
    return_date DATE NULL,\r
    fine_assessed DECIMAL(6, 2) DEFAULT 0.00\r
);\r
\r
INSERT INTO book_borrow_records (member_id, member_name, book_title, isbn, borrow_date, due_date, return_date, fine_assessed)\r
VALUES\r
    ('LIB-8801', 'Subham Chatterjee', 'Database System Concepts',    '978-0078022159', '2026-08-10', '2026-08-25', NULL,         75.00),\r
    ('LIB-7420', 'Ankita Banerjee',   'Clean Code Handbook',         '978-0132350884', '2026-08-15', '2026-08-30', '2026-08-29',  0.00),\r
    ('LIB-9024', 'Rimpa Mondal',      'Intro to Algorithms (CLRS)',  '978-0262033848', '2026-08-18', '2026-09-01', NULL,         45.00),\r
    ('LIB-3319', 'Joydeep Pal',       'Design Patterns: GoF',        '978-0201633610', '2026-08-20', '2026-09-05', '2026-09-04',  0.00),\r
    ('LIB-4401', 'Sagnik Ghosh',      'Modern Operating Systems',    '978-0133591620', '2026-09-01', '2026-09-15', NULL,          0.00),\r
    ('LIB-8801', 'Subham Chatterjee', 'Clean Architecture',          '978-0134494166', '2026-08-22', '2026-09-05', NULL,         25.00),\r
    ('LIB-5512', 'Poulomi Das',       'Python Data Science Handbook','978-1491957660', '2026-08-25', '2026-09-09', '2026-09-08',  0.00);\r
\r
-- Query: Overdue Loans as of audit date '2026-09-10'\r
SELECT \r
    id,\r
    member_id,\r
    member_name,\r
    book_title,\r
    due_date,\r
    return_date,\r
    fine_assessed AS 'fine_amount'\r
FROM book_borrow_records\r
WHERE return_date IS NULL\r
  AND due_date < '2026-09-10'\r
ORDER BY due_date ASC;\r
`,Oe=`-- ============================================================================\r
-- SQL-PRJ-11: Pharmacy Batch Inventory & Expiry Risk Alert System\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
CREATE DATABASE IF NOT EXISTS pharmacy_retail_db;\r
USE pharmacy_retail_db;\r
\r
DROP TABLE IF EXISTS pharmacy_batches;\r
CREATE TABLE pharmacy_batches (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    medicine_name VARCHAR(100) NOT NULL,\r
    manufacturer VARCHAR(80) NOT NULL,\r
    batch_no VARCHAR(25) NOT NULL UNIQUE,\r
    mfg_date DATE NOT NULL,\r
    expiry_date DATE NOT NULL,\r
    mrp DECIMAL(8, 2) NOT NULL,\r
    stock_qty INT NOT NULL\r
);\r
\r
INSERT INTO pharmacy_batches (medicine_name, manufacturer, batch_no, mfg_date, expiry_date, mrp, stock_qty)\r
VALUES\r
    ('Amoxicillin 250mg DT',  'Sun Pharma',   'AMX-4401',   '2024-12-01', '2026-12-20',  85.00,  85),\r
    ('Azithromycin 500mg',    'Cipla Ltd',    'AZ-2024-09', '2024-09-15', '2026-09-30', 118.50,  15),\r
    ('Telmisartan 40mg',      'Torrent Labs', 'TEL-9912',   '2025-01-10', '2027-01-15', 145.00,  60),\r
    ('Montelukast 10mg',      'Mankind',      'MON-1002',   '2025-03-01', '2027-03-01',  92.00,  40),\r
    ('Paracetamol 650mg',     'Micro Labs',   'PCM-8910',   '2024-11-01', '2026-11-15',  32.00,  12),\r
    ('Cetirizine 10mg',       'Dr Reddys',    'CET-3301',   '2025-02-01', '2027-02-01',  45.00, 150),\r
    ('Pantoprazole 40mg',     'Alkem Labs',   'PAN-9002',   '2025-04-10', '2027-04-10',  95.00,   8),\r
    ('Vitamin C Chewable',    'Abbott',       'VTC-7721',   '2024-10-01', '2026-10-15',  75.00,  50);\r
\r
-- Query: Impending Expiration (Sep-Dec 2026) OR Critical Stock Shortage (<= 20)\r
SELECT \r
    id,\r
    medicine_name,\r
    batch_no,\r
    expiry_date,\r
    mrp AS 'mrp (INR)',\r
    stock_qty AS 'stock'\r
FROM pharmacy_batches\r
WHERE (expiry_date BETWEEN '2026-09-01' AND '2026-12-31')\r
   OR (stock_qty <= 20)\r
ORDER BY expiry_date ASC, stock_qty ASC;\r
`,be=`-- ============================================================================\r
-- SQL-PRJ-12: Online Food Delivery Menu & Vegetarian Gourmet Finder\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
CREATE DATABASE IF NOT EXISTS food_delivery_db;\r
USE food_delivery_db;\r
\r
DROP TABLE IF EXISTS menu_items;\r
CREATE TABLE menu_items (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    item_name VARCHAR(100) NOT NULL,\r
    restaurant_name VARCHAR(80) NOT NULL,\r
    cuisine VARCHAR(30) NOT NULL,\r
    price DECIMAL(7, 2) NOT NULL,\r
    is_veg TINYINT(1) NOT NULL DEFAULT 1,\r
    rating DECIMAL(2, 1) NOT NULL\r
);\r
\r
INSERT INTO menu_items (item_name, restaurant_name, cuisine, price, is_veg, rating)\r
VALUES\r
    ('Dal Makhani Royale',      'Haveli Dine',       'North Indian', 220.00, 1, 4.7),\r
    ('Chicken Dum Biryani',      'Arsalan Express',   'Mughlai',      340.00, 0, 4.9),\r
    ('Paneer Tikka Butter',      'Punjab Sweet House','North Indian', 280.00, 1, 4.8),\r
    ('Crispy Chilli Babycorn',   'Mainland Delight',  'Chinese',      260.00, 1, 4.5),\r
    ('Tandoori Roti (4pc)',      'Punjab Sweet House','North Indian',  80.00, 1, 4.4),\r
    ('Shahi Paneer Korma',       'Aminia Deluxe',     'Mughlai',      310.00, 1, 4.6),\r
    ('Mutton Galouti Kebab',     'Aminia Deluxe',     'Mughlai',      420.00, 0, 4.8),\r
    ('Paneer Lababdar',          'Haveli Dine',       'North Indian', 380.00, 1, 4.3);\r
\r
-- Query: Top 4 Veg dishes (North Indian / Mughlai) under ₹350\r
SELECT \r
    id,\r
    item_name,\r
    restaurant_name,\r
    cuisine,\r
    price,\r
    rating\r
FROM menu_items\r
WHERE is_veg = 1\r
  AND cuisine IN ('North Indian', 'Mughlai')\r
  AND price <= 350.00\r
ORDER BY rating DESC, price ASC\r
LIMIT 4;\r
`,Ue=`-- ============================================================================\r
-- SQL-PRJ-13: Automobile Dealership Inventory & Schema Refactoring\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
CREATE DATABASE IF NOT EXISTS auto_showroom_db;\r
USE auto_showroom_db;\r
\r
DROP TABLE IF EXISTS vehicles;\r
CREATE TABLE vehicles (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    vin VARCHAR(20) NOT NULL UNIQUE,\r
    make VARCHAR(40) NOT NULL,\r
    model VARCHAR(60) NOT NULL,\r
    model_year INT NOT NULL,\r
    fuel_type VARCHAR(20) NOT NULL,\r
    showroom_price DECIMAL(12, 2) NOT NULL,\r
    dealer_notes TEXT\r
);\r
\r
-- Schema Refactoring\r
ALTER TABLE vehicles RENAME COLUMN showroom_price TO ex_showroom_price;\r
ALTER TABLE vehicles DROP COLUMN dealer_notes;\r
\r
INSERT INTO vehicles (vin, make, model, model_year, fuel_type, ex_showroom_price)\r
VALUES\r
    ('VIN-EV-2025-0019', 'Tata',    'Nexon EV LR',   2025, 'ELECTRIC', 1699000.00),\r
    ('VIN-PT-2024-8801', 'Hyundai', 'Creta SX(O)',   2024, 'PETROL',   1850000.00),\r
    ('VIN-HY-2025-0482', 'Toyota',  'Hyryder',       2025, 'HYBRID',   1985000.00),\r
    ('VIN-EV-2024-9182', 'MG',      'ZS EV',         2024, 'ELECTRIC', 2250000.00),\r
    ('VIN-EV-2026-0001', 'Kia',     'EV6 GT-Line',   2026, 'ELECTRIC', 6590000.00),\r
    ('VIN-HY-2023-1104', 'Honda',   'City e:HEV',    2023, 'HYBRID',   1920000.00),\r
    ('VIN-DS-2024-7719', 'Mahindra','XUV700 AX7',    2024, 'DIESEL',   2150000.00);\r
\r
-- Query: EV or Hybrid (2023-2026) under ₹30 Lakhs\r
SELECT \r
    id,\r
    vin,\r
    make,\r
    model,\r
    model_year,\r
    fuel_type,\r
    ex_showroom_price\r
FROM vehicles\r
WHERE fuel_type IN ('ELECTRIC', 'HYBRID')\r
  AND model_year BETWEEN 2023 AND 2026\r
  AND ex_showroom_price <= 3000000.00\r
ORDER BY model_year DESC, ex_showroom_price ASC;\r
`,fe=`-- ============================================================================\r
-- SQL-PRJ-14: Real Estate Property Listings & Budget Matcher\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
CREATE DATABASE IF NOT EXISTS realestate_db;\r
USE realestate_db;\r
\r
DROP TABLE IF EXISTS properties;\r
CREATE TABLE properties (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    title VARCHAR(120) NOT NULL,\r
    property_type VARCHAR(30) NOT NULL,\r
    locality VARCHAR(50) NOT NULL,\r
    carpet_area_sqft INT NOT NULL,\r
    price_lakhs DECIMAL(6, 2) NOT NULL,\r
    possession_status VARCHAR(25) NOT NULL,\r
    agent_phone VARCHAR(15)\r
);\r
\r
INSERT INTO properties (title, property_type, locality, carpet_area_sqft, price_lakhs, possession_status, agent_phone)\r
VALUES\r
    ('Riverside Greens 3BHK',    'Apartment', 'Barrackpore', 1280,  68.50, 'READY_TO_MOVE',      '9830012345'),\r
    ('Silver Oak Studio 1BHK',   'Apartment', 'New Town',     480,  32.00, 'READY_TO_MOVE',      '9831122334'),\r
    ('Merlin Waterfront 2BHK',   'Apartment', 'Howrah',       890,  55.00, 'UNDER_CONSTRUCTION', '9874112233'),\r
    ('EcoSpace Urban Heights',   'Apartment', 'Rajarhat',    1350,  88.00, 'READY_TO_MOVE',      '9830099887'),\r
    ('Skyline Penthouse 4BHK',   'Penthouse', 'New Town',    2400, 210.00, 'READY_TO_MOVE',      '9831001122'),\r
    ('Greenfield Prime Plot',    'Plot',      'Barrackpore', 1500,  45.00, 'READY_TO_MOVE',      '9830012345'),\r
    ('Magnolia Lakefront Villa', 'Villa',     'New Town',    1850, 125.00, 'UNDER_CONSTRUCTION', '9874112233');\r
\r
-- Query: 3BHK/Villa in Barrackpore/Rajarhat/New Town, Area >= 1100, Budget 65-135 Lakhs\r
SELECT \r
    id,\r
    title,\r
    property_type,\r
    locality,\r
    carpet_area_sqft,\r
    price_lakhs,\r
    possession_status\r
FROM properties\r
WHERE property_type IN ('Apartment', 'Villa')\r
  AND locality IN ('Barrackpore', 'Rajarhat', 'New Town')\r
  AND carpet_area_sqft >= 1100\r
  AND price_lakhs BETWEEN 65.00 AND 135.00\r
ORDER BY price_lakhs ASC;\r
`,Me=`-- ============================================================================\r
-- SQL-PRJ-15: Fitness Gym Member Directory & Phone Pattern Query\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
CREATE DATABASE IF NOT EXISTS fitness_club_db;\r
USE fitness_club_db;\r
\r
DROP TABLE IF EXISTS gym_members;\r
CREATE TABLE gym_members (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    full_name VARCHAR(80) NOT NULL,\r
    membership_tier VARCHAR(25) NOT NULL,\r
    phone_no VARCHAR(15) NOT NULL,\r
    join_date DATE NOT NULL,\r
    renewal_date DATE NOT NULL,\r
    monthly_fee DECIMAL(7, 2) NOT NULL,\r
    status VARCHAR(15) DEFAULT 'ACTIVE'\r
);\r
\r
INSERT INTO gym_members (full_name, membership_tier, phone_no, join_date, renewal_date, monthly_fee, status)\r
VALUES\r
    ('Rakesh Karmakar',   'ANNUAL',       '9830124891', '2025-09-01', '2026-09-01', 1200.00, 'ACTIVE'),\r
    ('Pooja Shaw',        'MONTHLY',      '7003756890', '2026-07-10', '2026-08-10', 1800.00, 'ACTIVE'),\r
    ('Abhishek Bhattacharya','QUARTERLY', '8910452319', '2026-05-01', '2026-08-01', 1500.00, 'ACTIVE'),\r
    ('Debolina Sengupta', 'QUARTERLY',    '9831908421', '2026-06-15', '2026-09-15', 1500.00, 'ACTIVE'),\r
    ('Manish Tiwary',     'MONTHLY',      '9874551122', '2026-06-01', '2026-07-01', 1800.00, 'ACTIVE'),\r
    ('Avik Samanta',      'ANNUAL',       '9874192834', '2026-07-01', '2027-07-01', 1200.00, 'ACTIVE'),\r
    ('Moumita Roy',       'VIP_LIFETIME', '9830441100', '2024-01-10', '2029-01-10',  800.00, 'ACTIVE');\r
\r
-- Batch Update: Mark overdue accounts as EXPIRED\r
UPDATE gym_members \r
SET status = 'EXPIRED' \r
WHERE renewal_date < '2026-09-01';\r
\r
-- Query: Active Quarterly/Annual members with Kolkata 98-prefix mobile numbers\r
SELECT \r
    id,\r
    full_name,\r
    membership_tier,\r
    phone_no,\r
    join_date,\r
    renewal_date,\r
    status\r
FROM gym_members\r
WHERE status = 'ACTIVE'\r
  AND membership_tier IN ('QUARTERLY', 'ANNUAL')\r
  AND phone_no LIKE '98%'\r
ORDER BY join_date ASC;\r
`,ke=`-- ============================================================================\r
-- SQL-PRJ-16: Online Examination Portal & Student Result Classification\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
CREATE DATABASE IF NOT EXISTS exam_portal_db;\r
USE exam_portal_db;\r
\r
DROP TABLE IF EXISTS exam_submissions;\r
CREATE TABLE exam_submissions (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    reg_no VARCHAR(20) NOT NULL,\r
    student_name VARCHAR(80) NOT NULL,\r
    subject_code VARCHAR(15) NOT NULL,\r
    total_marks INT NOT NULL,\r
    attempt_number INT DEFAULT 1,\r
    grade VARCHAR(5) NOT NULL\r
);\r
\r
INSERT INTO exam_submissions (reg_no, student_name, subject_code, total_marks, attempt_number, grade)\r
VALUES\r
    ('REG-202601', 'Arjun Sengupta',  'CS-101', 88, 1, 'O'),\r
    ('REG-202602', 'Payel Dey',       'MA-201', 52, 2, 'B'),\r
    ('REG-202603', 'Indranil Nandi',  'CS-101', 28, 1, 'F'),\r
    ('REG-202604', 'Koushik Saha',    'EC-301', 35, 1, 'F'),\r
    ('REG-202605', 'Bikash Roy',      'CS-101', 48, 2, 'C'),\r
    ('REG-202606', 'Megha Bhattacharya','CS-101', 94, 1, 'O'),\r
    ('REG-202607', 'Sayani Majumdar', 'MA-201', 34, 2, 'F'),\r
    ('REG-202608', 'Debabrata Pal',   'MA-201', 76, 1, 'A');\r
\r
-- Query: CS-101 or MA-201 candidates needing remediation (< 40 marks OR repeat attempts)\r
SELECT \r
    id,\r
    reg_no,\r
    student_name,\r
    subject_code,\r
    total_marks,\r
    attempt_number,\r
    grade\r
FROM exam_submissions\r
WHERE subject_code IN ('CS-101', 'MA-201')\r
  AND (total_marks < 40 OR attempt_number > 1)\r
ORDER BY total_marks ASC;\r
`,Be=`-- ============================================================================\r
-- SQL-PRJ-17: Concert & Event Ticketing Missing Contact Auditor\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
CREATE DATABASE IF NOT EXISTS mega_events_db;\r
USE mega_events_db;\r
\r
DROP TABLE IF EXISTS event_tickets;\r
CREATE TABLE event_tickets (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    event_name VARCHAR(100) NOT NULL,\r
    attendee_name VARCHAR(80) NOT NULL,\r
    attendee_email VARCHAR(120) NULL,\r
    attendee_mobile VARCHAR(15) NULL,\r
    seat_category VARCHAR(25) NOT NULL,\r
    ticket_price DECIMAL(8, 2) NOT NULL,\r
    booking_channel VARCHAR(30) NOT NULL\r
);\r
\r
INSERT INTO event_tickets (event_name, attendee_name, attendee_email, attendee_mobile, seat_category, ticket_price, booking_channel)\r
VALUES\r
    ('Kolkata Rock Fest',    'Joyita Sen',         'joyita.s@gmail.com', '9830099881', 'VIP_LOUNGE', 4500.00, 'ONLINE_APP'),\r
    ('Kolkata Rock Fest',    'Tapan Paul',         NULL,                 '9831990011', 'VIP_LOUNGE', 4500.00, 'BOX_OFFICE'),\r
    ('Kolkata Rock Fest',    'Swapan Majhi',       'swapan.m@yahoo.com', '9831122334', 'GOLD',       1500.00, 'ONLINE_APP'),\r
    ('Classical Symphony',   'Sandip Ganguly',     'sandip.g@gmail.com', NULL,         'SILVER',      800.00, 'PARTNER_PORTAL'),\r
    ('Classical Symphony',   'Arindam Roy',        'arindam.r@gmail.com','9874112233', 'PLATINUM',   2800.00, 'ONLINE_APP'),\r
    ('Classical Symphony',   'Goutam Das',         NULL,                 '9830114455', 'PLATINUM',   2800.00, 'BOX_OFFICE'),\r
    ('International Jazz Eve','Poulomi Roy',       'poulomi.r@gmail.com','9830991122', 'GOLD',       1800.00, 'ONLINE_APP'),\r
    ('International Jazz Eve','Subhasish Banerjee',NULL,                 NULL,         'VIP_LOUNGE', 4500.00, 'BOX_OFFICE');\r
\r
-- Query A: VIP/Platinum Patrons with Missing Email Address\r
SELECT \r
    id,\r
    event_name,\r
    attendee_name,\r
    seat_category,\r
    ticket_price\r
FROM event_tickets\r
WHERE seat_category IN ('VIP_LOUNGE', 'PLATINUM')\r
  AND attendee_email IS NULL;\r
\r
-- Query B: Bookings with Verified Mobile Numbers Sorted by Price\r
SELECT \r
    id,\r
    attendee_name,\r
    seat_category,\r
    attendee_mobile,\r
    ticket_price\r
FROM event_tickets\r
WHERE attendee_mobile IS NOT NULL\r
ORDER BY ticket_price DESC;\r
`,Pe=`-- ============================================================================\r
-- SQL-PRJ-18: Smart Meter Power Utility & Commercial Bill Defaulters\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
CREATE DATABASE IF NOT EXISTS power_distribution_db;\r
USE power_distribution_db;\r
\r
DROP TABLE IF EXISTS power_meter_readings;\r
CREATE TABLE power_meter_readings (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    consumer_id VARCHAR(20) NOT NULL,\r
    consumer_name VARCHAR(80) NOT NULL,\r
    connection_type VARCHAR(20) NOT NULL,\r
    units_consumed INT NOT NULL,\r
    billing_month VARCHAR(7) NOT NULL,\r
    bill_amount DECIMAL(10, 2) NOT NULL,\r
    due_date DATE NOT NULL,\r
    payment_status VARCHAR(15) NOT NULL\r
);\r
\r
INSERT INTO power_meter_readings (consumer_id, consumer_name, connection_type, units_consumed, billing_month, bill_amount, due_date, payment_status)\r
VALUES\r
    ('WBSED-DOM01', 'Swapan Kumar Paul',    'DOMESTIC',     210, '2026-08',  1470.00, '2026-09-15', 'PAID'),\r
    ('WBSED-COM02', 'Metro Cineplex',       'COMMERCIAL',  1850, '2026-08', 19420.00, '2026-09-10', 'UNPAID'),\r
    ('WBSED-DOM03', 'Alok Nath Ghosh',      'DOMESTIC',     150, '2026-08',   980.00, '2026-09-15', 'UNPAID'),\r
    ('WBSED-IND09', 'Bengal Jute Mills',    'INDUSTRIAL',  4200, '2026-08', 48500.00, '2026-09-08', 'UNPAID'),\r
    ('WBSED-DOM44', 'Soma Bhattacharya',    'DOMESTIC',     420, '2026-08',  3250.00, '2026-09-15', 'PAID'),\r
    ('WBSED-COM88', 'New Market ColdStore', 'COMMERCIAL',   620, '2026-08',  6820.00, '2026-09-10', 'UNPAID'),\r
    ('WBSED-COM91', 'Bhojohori Manna Cafe', 'COMMERCIAL',   310, '2026-08',  3250.00, '2026-09-10', 'PAID'),\r
    ('WBSED-IND12', 'Apex Plastic Molding', 'INDUSTRIAL',  3100, '2026-08', 35600.00, '2026-09-08', 'PAID');\r
\r
-- Query: High-Value Commercial / Industrial Defaulters (>400 kWh or >₹5,000)\r
SELECT \r
    id,\r
    consumer_id,\r
    consumer_name,\r
    connection_type,\r
    units_consumed,\r
    bill_amount,\r
    payment_status\r
FROM power_meter_readings\r
WHERE connection_type IN ('COMMERCIAL', 'INDUSTRIAL')\r
  AND payment_status = 'UNPAID'\r
  AND (units_consumed > 400 OR bill_amount > 5000.00)\r
ORDER BY bill_amount DESC;\r
`,we=`-- ============================================================================\r
-- SQL-PRJ-19: IT Job Recruitment Portal & Candidate Shortlisting Pipeline\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
CREATE DATABASE IF NOT EXISTS recruitment_portal_db;\r
USE recruitment_portal_db;\r
\r
DROP TABLE IF EXISTS job_candidates;\r
CREATE TABLE job_candidates (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    candidate_name VARCHAR(80) NOT NULL,\r
    applied_role VARCHAR(50) NOT NULL,\r
    experience_years DECIMAL(3, 1) NOT NULL,\r
    primary_skill VARCHAR(80) NOT NULL,\r
    expected_ctc_lpa DECIMAL(4, 2) NOT NULL,\r
    notice_period_days INT NOT NULL,\r
    status VARCHAR(20) DEFAULT 'APPLIED'\r
);\r
\r
INSERT INTO job_candidates (candidate_name, applied_role, experience_years, primary_skill, expected_ctc_lpa, notice_period_days, status)\r
VALUES\r
    ('Sayantan Ghosh',   'Frontend Engineer',    2.5, 'React, Tailwind, HTML5',   7.50, 15, 'APPLIED'),\r
    ('Nilanjan Dutta',   'Full Stack Developer', 4.5, 'React, Node, MySQL',       12.50, 15, 'APPLIED'),\r
    ('Aniket Chakraborty','Data Scientist',      5.0, 'Python, Scikit-learn, SQL', 18.00, 60, 'APPLIED'),\r
    ('Deepanjan Roy',    'Full Stack Developer', 9.5, 'React, Spring Boot, MySQL',24.00, 30, 'APPLIED'),\r
    ('Somnath Banerjee', 'DevOps Engineer',      5.0, 'Python, Docker, AWS',      15.00, 30, 'APPLIED'),\r
    ('Rupak Mondal',     'Frontend Engineer',    4.0, 'Vue.js, CSS, JavaScript',  10.00, 15, 'APPLIED'),\r
    ('Anwesha Roy',      'Full Stack Developer', 6.0, 'React, Django, SQL',       17.50, 30, 'APPLIED'),\r
    ('Kaushik Paul',     'DevOps Engineer',      3.5, 'Linux, Bash, Kubernetes',  14.00, 90, 'APPLIED');\r
\r
-- Query: Senior Full Stack / DevOps (3-8 Yrs Exp, CTC <= 18.5 LPA, Notice <= 30 Days, React/Python)\r
SELECT \r
    id,\r
    candidate_name,\r
    applied_role,\r
    experience_years,\r
    primary_skill,\r
    expected_ctc_lpa,\r
    notice_period_days\r
FROM job_candidates\r
WHERE applied_role IN ('Full Stack Developer', 'DevOps Engineer')\r
  AND experience_years BETWEEN 3.0 AND 8.0\r
  AND expected_ctc_lpa <= 18.50\r
  AND notice_period_days <= 30\r
  AND (primary_skill LIKE '%React%' OR primary_skill LIKE '%Python%')\r
ORDER BY expected_ctc_lpa ASC;\r
`,ve=`-- ============================================================================\r
-- SQL-PRJ-20: SaaS Cloud Subscription Lifecycle & Renewal Management\r
-- Author: Sukanta Hui (Coder & AccoTax)\r
-- Database: MySQL 8.0+\r
-- ============================================================================\r
\r
CREATE DATABASE IF NOT EXISTS cloud_saas_db;\r
USE cloud_saas_db;\r
\r
DROP TABLE IF EXISTS saas_subscriptions;\r
CREATE TABLE saas_subscriptions (\r
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,\r
    tenant_id VARCHAR(20) NOT NULL UNIQUE,\r
    company_name VARCHAR(100) NOT NULL,\r
    plan_tier VARCHAR(30) NOT NULL,\r
    mrr_usd DECIMAL(10, 2) NOT NULL,\r
    auto_renewal TINYINT(1) DEFAULT 1,\r
    start_date DATE NOT NULL,\r
    next_billing_date DATE NOT NULL,\r
    last_login DATE NOT NULL,\r
    churn_risk VARCHAR(15) DEFAULT 'LOW'\r
);\r
\r
INSERT INTO saas_subscriptions (tenant_id, company_name, plan_tier, mrr_usd, auto_renewal, start_date, next_billing_date, last_login, churn_risk)\r
VALUES\r
    ('TNT-US-9018', 'FinTech Global Inc',  'ENTERPRISE_ANNUAL', 4500.00, 1, '2024-08-01', '2027-08-01', '2026-09-03', 'LOW'),\r
    ('TNT-IN-4412', 'Nexa Logistics',     'ENTERPRISE_ANNUAL', 3200.00, 1, '2025-06-15', '2027-06-15', '2026-09-02', 'LOW'),\r
    ('TNT-EU-1102', 'CloudScale AI',      'PRO_MONTHLY',        899.00, 1, '2026-01-10', '2026-10-01', '2026-09-01', 'LOW'),\r
    ('TNT-SG-8891', 'Zenith Retail Apps', 'PRO_MONTHLY',        599.00, 1, '2026-03-01', '2026-09-01', '2026-07-20', 'LOW'),\r
    ('TNT-US-3301', 'Hyperion Media',     'ENTERPRISE_ANNUAL', 2800.00, 0, '2025-02-01', '2026-10-01', '2026-09-02', 'MEDIUM'),\r
    ('TNT-UK-4419', 'Apex Consulting',    'PRO_MONTHLY',        750.00, 0, '2025-11-15', '2026-09-15', '2026-06-10', 'HIGH'),\r
    ('TNT-IN-1002', 'QuickCart E-Shop',   'PRO_MONTHLY',        499.00, 1, '2026-04-01', '2026-10-01', '2026-08-05', 'LOW'),\r
    ('TNT-AU-7711', 'Pacific HealthTech', 'ENTERPRISE_ANNUAL', 5200.00, 1, '2024-10-01', '2026-10-01', '2026-09-03', 'LOW');\r
\r
-- DML Batch Maintenance: Flag inactive Pro monthly users as HIGH churn risk\r
UPDATE saas_subscriptions \r
SET churn_risk = 'HIGH' \r
WHERE plan_tier = 'PRO_MONTHLY' \r
  AND last_login < '2026-08-15';\r
\r
-- Executive DQL: Top 3 Revenue generating accounts with Active Auto-Renewal and Healthy status\r
SELECT \r
    id AS 'ID',\r
    tenant_id AS 'Account ID',\r
    company_name AS 'Company',\r
    plan_tier AS 'Plan Tier',\r
    CONCAT('$', FORMAT(mrr_usd, 2)) AS 'Monthly Rev',\r
    next_billing_date AS 'Next Billing Date'\r
FROM saas_subscriptions\r
WHERE auto_renewal = 1\r
  AND churn_risk != 'HIGH'\r
ORDER BY mrr_usd DESC\r
LIMIT 3;\r
`;function V({text:o,accentColor:T="sky"}){if(!o)return null;const u=o.split(/\n\n+/),N=d=>{const s=[],E=/(\*\*.*?\*\*|`.*?`)/g;let r=0,a;for(;(a=E.exec(d))!==null;){a.index>r&&s.push(d.substring(r,a.index));const i=a[0];i.startsWith("**")&&i.endsWith("**")?s.push(e.jsx("strong",{className:"font-bold text-sky-200",children:i.slice(2,-2)},a.index)):i.startsWith("`")&&i.endsWith("`")&&s.push(e.jsx("code",{className:"rounded bg-slate-900 border border-slate-700/80 px-1.5 py-0.5 font-mono text-[11px] text-amber-300",children:i.slice(1,-1)},a.index)),r=E.lastIndex}return r<d.length&&s.push(d.substring(r)),s.length>0?s:d};return e.jsx("div",{className:"space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed",children:u.map((d,s)=>{const E=d.split(`
`);return e.jsx("div",{className:"space-y-1.5",children:E.map((r,a)=>{const i=r.trim();if(!i)return null;const m=/^\d+\.\s+\*\*(.*?)\*\*:?/.test(i)||/^\*\*(.*?)\*\*:?/.test(i),S=/^[-•*]\s+/.test(i);return m?e.jsxs("div",{className:"font-semibold text-sky-300 flex items-start gap-2 pt-1.5",children:[e.jsx("span",{className:"text-sky-400",children:"⚡"}),e.jsx("span",{children:N(i)})]},a):S?e.jsxs("div",{className:"flex items-start gap-2.5 pl-4 py-0.5",children:[e.jsx("span",{className:"text-emerald-400 mt-1 flex-shrink-0 text-xs",children:"◆"}),e.jsx("span",{className:"text-slate-300",children:N(i.replace(/^[-•*]\s+/,""))})]},a):e.jsx("p",{className:"text-slate-300",children:N(i)},a)})},s)})})}function He({code:o,fileName:T="query.sql"}){const[u,N]=l.useState(!1),[d,s]=l.useState("");l.useEffect(()=>{try{const a=x.languages.sql||x.languages.javascript,i=x.highlight(o,a,"sql");s(i)}catch{s(o)}},[o]);const E=()=>{navigator.clipboard.writeText(o),N(!0),setTimeout(()=>N(!1),1500)},r=()=>{const a=new Blob([o],{type:"text/plain"}),i=URL.createObjectURL(a),m=document.createElement("a");m.href=i,m.download=T.endsWith(".sql")?T:`${T}.sql`,m.click(),URL.revokeObjectURL(i)};return e.jsxs("div",{className:"rounded-xl border border-slate-700/80 bg-[#0d1322] overflow-hidden shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-800/80 border-b border-slate-700/80 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Q,{size:14,className:"text-sky-400"}),e.jsx("span",{className:"font-mono text-slate-200 font-semibold",children:T}),e.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono bg-sky-950/80 border border-sky-600/40 text-sky-300",children:"MySQL 8.0+"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:E,className:"flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-700/60 hover:bg-slate-700 text-slate-200 transition text-xs font-medium",title:"Copy SQL Query",children:u?e.jsxs(e.Fragment,{children:[e.jsx(me,{size:13,className:"text-emerald-400"}),e.jsx("span",{className:"text-emerald-400",children:"Copied"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Te,{size:13}),e.jsx("span",{children:"Copy"})]})}),e.jsxs("button",{onClick:r,className:"flex items-center gap-1 px-2.5 py-1 rounded bg-slate-700/60 hover:bg-slate-700 text-slate-200 transition text-xs font-medium",title:"Download SQL Script",children:[e.jsx(Ae,{size:13}),e.jsx("span",{children:"Download"})]})]})]}),e.jsx("div",{className:"p-4 overflow-x-auto",children:e.jsx("pre",{className:"font-mono text-xs sm:text-sm leading-relaxed text-slate-200",children:e.jsx("code",{className:"language-sql",dangerouslySetInnerHTML:{__html:d||o}})})})]})}function je({data:o}){if(!o||!o.projects)return null;const{projectCategory:T="RDBMS & SQL Practical Database Projects",subject:u="RDBMS using MySQL",board:N="Industry Standards & University Syllabus",class:d="SQL Fundamentals to Advanced",tools:s=["MySQL Server 8.0+","MySQL Workbench","MySQL CLI","phpMyAdmin"],institute:E={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati, West Bengal, India"},projects:r=[]}=o,[a,i]=l.useState(""),[m,S]=l.useState("All"),[p,O]=l.useState("All"),[W,b]=l.useState({}),[L,U]=l.useState({}),[y,f]=l.useState({}),[D,M]=l.useState(!1),[C,k]=l.useState(!1),g=`rdbms_sql_projects_${o.moduleSlug||"sql_fundamentals"}`;l.useEffect(()=>{try{const n=localStorage.getItem(`${g}_completed`);n&&U(JSON.parse(n));const t=localStorage.getItem(`${g}_bookmarked`);t&&f(JSON.parse(t))}catch{}},[g]);const q=n=>{b(t=>({...t,[n]:!t[n]}))},B=n=>{const t={};r.forEach(c=>{t[c.projectId]=n}),b(t)},X=n=>{U(t=>{const c={...t,[n]:!t[n]};try{localStorage.setItem(`${g}_completed`,JSON.stringify(c))}catch{}return c})},z=n=>{f(t=>{const c={...t,[n]:!t[n]};try{localStorage.setItem(`${g}_bookmarked`,JSON.stringify(c))}catch{}return c})},P=l.useMemo(()=>{const n=new Set;return r.forEach(t=>{Array.isArray(t.tags)&&t.tags.forEach(c=>n.add(c)),t.category&&n.add(t.category)}),["All",...Array.from(n)]},[r]),w=l.useMemo(()=>r.filter(n=>{const t=!a||n.title.toLowerCase().includes(a.toLowerCase())||n.description.toLowerCase().includes(a.toLowerCase())||n.projectId.toLowerCase().includes(a.toLowerCase())||n.tags&&n.tags.some(A=>A.toLowerCase().includes(a.toLowerCase()))||n.category&&n.category.toLowerCase().includes(a.toLowerCase()),c=m==="All"||n.difficulty===m,_=p==="All"||n.tags&&n.tags.includes(p)||n.category===p,R=!D||!!y[n.projectId],h=!C||!L[n.projectId];return t&&c&&_&&R&&h}),[r,a,m,p,D,C,y,L]),I=l.useMemo(()=>{const n=r.length,t=Object.values(L).filter(Boolean).length,c=r.filter(A=>A.difficulty==="Beginner").length,_=r.filter(A=>A.difficulty==="Intermediate").length,R=r.filter(A=>A.difficulty==="Advanced").length,h=n>0?Math.round(t/n*100):0;return{total:n,completed:t,beginner:c,intermediate:_,advanced:R,progressPercent:h}},[r,L]);return e.jsxs("div",{className:"space-y-8 pb-16",children:[e.jsxs("header",{className:"relative rounded-3xl border border-sky-700/40 bg-gradient-to-br from-slate-900 via-[#0c192e] to-slate-950 p-6 sm:p-8 shadow-2xl overflow-hidden",children:[e.jsx("div",{className:"absolute -top-24 -right-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-medium tracking-wide",children:[e.jsx(Q,{size:15}),e.jsx("span",{children:"RDBMS & SQL PRACTICAL WORKBOOK"})]}),e.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-400",children:[e.jsx(J,{size:14,className:"text-emerald-400"}),e.jsxs("span",{children:["Target: ",e.jsx("b",{children:"MySQL 8.0+ / MariaDB"})]})]})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-sky-300 to-indigo-300",children:T}),e.jsx("p",{className:"mt-2 text-sm text-slate-300 max-w-4xl leading-relaxed",children:"Real-world, end-to-end database engineering scenarios covering DDL table definitions, data modeling, batch inserts, sophisticated WHERE filtering predicates, pattern matching, range scanning, ordering, and pagination."})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2 text-xs text-slate-300",children:[e.jsxs("div",{className:"p-3 rounded-xl bg-slate-800/60 border border-slate-700/60",children:[e.jsx("span",{className:"text-slate-400 block text-[11px]",children:"Subject"}),e.jsx("b",{className:"text-slate-100",children:u})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-800/60 border border-slate-700/60",children:[e.jsx("span",{className:"text-slate-400 block text-[11px]",children:"Standard / Board"}),e.jsx("b",{className:"text-slate-100",children:N})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-800/60 border border-slate-700/60",children:[e.jsx("span",{className:"text-slate-400 block text-[11px]",children:"Class / Level"}),e.jsx("b",{className:"text-slate-100",children:d})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-800/60 border border-slate-700/60",children:[e.jsx("span",{className:"text-slate-400 block text-[11px]",children:"Author / Institute"}),e.jsxs("b",{className:"text-slate-100",children:[E.author," (",E.name,")"]})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 pt-1 text-xs",children:[e.jsx("span",{className:"text-slate-400",children:"Supported Tools:"}),s.map((n,t)=>e.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 font-mono text-[11px]",children:n},t))]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[e.jsxs("div",{className:"rounded-2xl border border-slate-800 bg-slate-900/80 p-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between text-slate-400 text-xs",children:[e.jsx("span",{children:"Total Projects"}),e.jsx($,{size:16,className:"text-sky-400"})]}),e.jsx("div",{className:"mt-2 text-2xl font-bold text-slate-100",children:I.total}),e.jsx("div",{className:"mt-1 text-[11px] text-slate-400",children:"Comprehensive Case Studies"})]}),e.jsxs("div",{className:"rounded-2xl border border-emerald-900/40 bg-slate-900/80 p-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between text-slate-400 text-xs",children:[e.jsx("span",{children:"Beginner"}),e.jsx(v,{size:16,className:"text-emerald-400"})]}),e.jsx("div",{className:"mt-2 text-2xl font-bold text-emerald-300",children:I.beginner}),e.jsx("div",{className:"mt-1 text-[11px] text-emerald-400/80",children:"Foundational CRUD & Schema"})]}),e.jsxs("div",{className:"rounded-2xl border border-amber-900/40 bg-slate-900/80 p-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between text-slate-400 text-xs",children:[e.jsx("span",{children:"Intermediate"}),e.jsx(Z,{size:16,className:"text-amber-400"})]}),e.jsx("div",{className:"mt-2 text-2xl font-bold text-amber-300",children:I.intermediate}),e.jsx("div",{className:"mt-1 text-[11px] text-amber-400/80",children:"Business Queries & Filtering"})]}),e.jsxs("div",{className:"rounded-2xl border border-rose-900/40 bg-slate-900/80 p-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between text-slate-400 text-xs",children:[e.jsx("span",{children:"Progress"}),e.jsx(ee,{size:16,className:"text-rose-400"})]}),e.jsxs("div",{className:"mt-2 flex items-baseline gap-2",children:[e.jsxs("span",{className:"text-2xl font-bold text-slate-100",children:[I.progressPercent,"%"]}),e.jsxs("span",{className:"text-xs text-slate-400",children:["(",I.completed,"/",I.total,")"]})]}),e.jsx("div",{className:"mt-2 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-sky-400 to-emerald-400 transition-all duration-300",style:{width:`${I.progressPercent}%`}})})]})]}),e.jsxs("div",{className:"rounded-2xl border border-slate-800 bg-slate-900/90 p-4 sm:p-5 shadow-lg space-y-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between",children:[e.jsxs("div",{className:"relative flex-1",children:[e.jsx(ne,{size:17,className:"absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"}),e.jsx("input",{type:"text",placeholder:"Search by project title, domain (e.g. E-Commerce, Hospital, Banking), or SQL keyword...",value:a,onChange:n=>i(n.target.value),className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"}),a&&e.jsx("button",{onClick:()=>i(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200",children:"Clear"})]}),e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[e.jsxs("button",{onClick:()=>B(!0),className:"px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-medium text-slate-200 flex items-center gap-1.5 transition",children:[e.jsx(H,{size:14,className:"text-sky-400"}),e.jsx("span",{children:"Expand All"})]}),e.jsxs("button",{onClick:()=>B(!1),className:"px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-medium text-slate-200 flex items-center gap-1.5 transition",children:[e.jsx(j,{size:14,className:"text-slate-400"}),e.jsx("span",{children:"Collapse All"})]})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[e.jsxs("span",{className:"text-slate-400 font-medium mr-1 flex items-center gap-1",children:[e.jsx(te,{size:13}),"Difficulty:"]}),["All","Beginner","Intermediate","Advanced"].map(n=>e.jsx("button",{onClick:()=>S(n),className:`px-3 py-1 rounded-lg transition font-medium ${m===n?"bg-sky-600 text-white shadow-sm shadow-sky-600/30":"bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:n},n))]}),P.length>1&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-slate-400",children:"Domain / Tag:"}),e.jsx("select",{value:p,onChange:n=>O(n.target.value),className:"px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-sky-500",children:P.map(n=>e.jsx("option",{value:n,children:n},n))})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("button",{onClick:()=>M(n=>!n),className:`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition ${D?"bg-amber-950/60 border-amber-600/50 text-amber-300":"bg-slate-800/60 border-slate-700/60 text-slate-400 hover:text-slate-200"}`,children:[e.jsx(Y,{size:13}),e.jsx("span",{children:"Starred"})]}),e.jsxs("button",{onClick:()=>k(n=>!n),className:`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition ${C?"bg-emerald-950/60 border-emerald-600/50 text-emerald-300":"bg-slate-800/60 border-slate-700/60 text-slate-400 hover:text-slate-200"}`,children:[e.jsx(G,{size:13}),e.jsx("span",{children:"Incomplete Only"})]})]})]})]}),w.length===0?e.jsxs("div",{className:"rounded-2xl border border-slate-800 bg-slate-900/60 p-12 text-center space-y-3",children:[e.jsx(ae,{size:40,className:"mx-auto text-slate-500"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"No Projects Found"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400 max-w-md mx-auto",children:"No projects matched your active search query or filter selection. Try adjusting your filters."}),e.jsxs("button",{onClick:()=>{i(""),S("All"),O("All"),M(!1),k(!1)},className:"mt-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold inline-flex items-center gap-1.5",children:[e.jsx(re,{size:14}),e.jsx("span",{children:"Reset All Filters"})]})]}):e.jsx("div",{className:"space-y-6",children:w.map((n,t)=>{const c=!!W[n.projectId],_=!!L[n.projectId],R=!!y[n.projectId];return e.jsxs("div",{className:`rounded-3xl border transition-all duration-200 p-6 sm:p-7 shadow-xl ${_?"border-emerald-900/50 bg-slate-900/60":"border-slate-800 hover:border-slate-700 bg-slate-900/80"}`,children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[e.jsxs("div",{className:"flex items-start md:items-center gap-3",children:[e.jsx("button",{onClick:()=>X(n.projectId),className:"mt-0.5 md:mt-0 p-1 rounded-lg text-slate-400 hover:text-emerald-400 transition",title:_?"Mark as Incomplete":"Mark as Completed",children:_?e.jsx(v,{size:22,className:"text-emerald-400"}):e.jsx(G,{size:22,className:"text-slate-600"})}),e.jsx("span",{className:"flex h-8 px-2.5 items-center justify-center rounded-lg bg-sky-950 border border-sky-600/40 text-sky-300 font-mono text-xs font-bold",children:n.projectId}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2 flex-wrap",children:n.title}),n.category&&e.jsxs("span",{className:"text-[11px] text-sky-400 font-medium",children:["Domain: ",n.category]})]})]}),e.jsxs("div",{className:"flex items-center gap-2 flex-wrap justify-end",children:[e.jsx("span",{className:`rounded-full px-3 py-1 text-xs font-semibold ${n.difficulty==="Beginner"?"bg-emerald-950/80 text-emerald-300 border border-emerald-700/40":n.difficulty==="Intermediate"?"bg-amber-950/80 text-amber-300 border border-amber-700/40":"bg-rose-950/80 text-rose-300 border border-rose-700/40"}`,children:n.difficulty}),e.jsx("button",{onClick:()=>z(n.projectId),className:`p-1.5 rounded-lg border transition ${R?"bg-amber-950/80 border-amber-600/50 text-amber-300":"bg-slate-800/80 border-slate-700/80 text-slate-400 hover:text-slate-200"}`,title:R?"Remove Star":"Star Project",children:R?e.jsx(ie,{size:16}):e.jsx(Y,{size:16})}),e.jsx("button",{onClick:()=>q(n.projectId),className:"flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold bg-sky-600/20 hover:bg-sky-600/30 text-sky-300 border border-sky-500/40 transition",children:c?e.jsxs(e.Fragment,{children:[e.jsx(j,{size:14}),e.jsx("span",{children:"Hide Solution"})]}):e.jsxs(e.Fragment,{children:[e.jsx(H,{size:14}),e.jsx("span",{children:"Show Solution"})]})})]})]}),e.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-800/80 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider",children:[e.jsx(se,{size:14,className:"text-sky-400"}),e.jsx("span",{children:"Business Scenario & Problem Statement"})]}),e.jsx("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap",children:n.description})]}),n.schemaDetails&&e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-indigo-300",children:[e.jsx(oe,{size:15}),e.jsx("span",{children:"Schema & Data Specification:"})]}),e.jsx("div",{className:"text-slate-300 text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto whitespace-pre",children:n.schemaDetails})]}),n.exampleText&&e.jsxs("div",{className:"mt-3 flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-slate-800/40 p-3 rounded-xl border border-slate-700/50",children:[e.jsx(le,{size:16,className:"text-sky-400 mt-0.5 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("b",{className:"text-sky-300",children:"Sample Input / Condition:"})," ",e.jsx("span",{children:n.exampleText})]})]}),n.exampleOutput&&e.jsxs("div",{className:"mt-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[e.jsxs("span",{className:"font-semibold text-sky-400 flex items-center gap-1.5",children:[e.jsx(F,{size:14})," Expected Result Grid (MySQL Output)"]}),e.jsx("span",{className:"font-mono text-[11px] text-slate-500",children:"Query Result Preview"})]}),e.jsx("pre",{className:"text-emerald-300 text-xs sm:text-sm font-mono leading-snug overflow-x-auto whitespace-pre p-2 bg-slate-900/90 rounded-xl border border-slate-800",children:n.exampleOutput})]}),n.logicExplanation&&e.jsxs("div",{className:"mt-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-amber-300",children:[e.jsx(ce,{size:15,className:"text-amber-400"}),e.jsx("span",{children:"SQL Strategy & Query Mechanics"})]}),e.jsx(V,{text:n.logicExplanation,accentColor:"sky"})]}),c&&e.jsxs("div",{className:"mt-5 space-y-4 pt-4 border-t border-slate-800",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-300",children:[e.jsxs("span",{className:"font-semibold text-emerald-400 flex items-center gap-1.5",children:[e.jsx(F,{size:14})," Complete SQL Solution Script"]}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"Ready to execute in MySQL Workbench"})]}),e.jsx(He,{code:n.answer||"-- SQL solution query",fileName:`${n.projectId.toLowerCase().replace(/[^a-z0-9]/g,"_")}.sql`}),n.codeExplanation&&e.jsxs("div",{className:"rounded-2xl border border-slate-800 bg-slate-950/60 p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-sky-300",children:[e.jsx(de,{size:15}),e.jsx("span",{children:"Code Walkthrough & Step Breakdown"})]}),e.jsx(V,{text:n.codeExplanation,accentColor:"sky"})]})]}),n.keywords&&n.keywords.length>0&&e.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-1.5 pt-2 text-[11px]",children:[e.jsx("span",{className:"text-slate-500 font-medium mr-1",children:"Clauses / Keywords:"}),n.keywords.map((h,A)=>e.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-800 text-sky-300 font-mono border border-slate-700",children:h},A))]}),n.learningOutcome&&e.jsxs("div",{className:"mt-4 flex items-start gap-2.5 text-xs text-slate-400 bg-slate-950/40 p-3 rounded-xl border border-slate-800/80",children:[e.jsx(Ee,{size:15,className:"text-emerald-400 mt-0.5 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("b",{className:"text-emerald-300",children:"Learning Outcome & Best Practice:"})," ",e.jsx("span",{children:n.learningOutcome})]})]})]},n.projectId)})}),e.jsxs("footer",{className:"rounded-3xl border border-sky-800/40 bg-gradient-to-br from-slate-900 via-[#0a192f] to-slate-950 p-6 sm:p-8 text-xs sm:text-sm text-slate-300 space-y-3 shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-2.5 text-sky-300 font-bold text-sm sm:text-base",children:[e.jsx(Ne,{size:20}),e.jsx("span",{children:"Faculty & Industry Guidelines (Sukanta Hui, Coder & AccoTax)"})]}),e.jsx("p",{className:"leading-relaxed text-slate-300",children:"When practicing these 20 SQL projects:"}),e.jsxs("ul",{className:"space-y-2 pl-4 list-disc text-slate-400",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Execute in MySQL Workbench or CLI:"})," Create a dedicated database (e.g. ",e.jsx("code",{children:"CREATE DATABASE sql_lab_projects; USE sql_lab_projects;"}),") to run the DDL and DML scripts safely."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Data Type Discipline:"})," Always specify precise character limits (e.g., ",e.jsx("code",{children:"VARCHAR(100)"})," vs ",e.jsx("code",{children:"TEXT"}),") and exact numeric representations (e.g., ",e.jsx("code",{children:"DECIMAL(10,2)"})," for currency) to prevent truncation and precision loss."]}),e.jsxs("li",{children:[e.jsxs("strong",{className:"text-slate-200",children:["Avoid ",e.jsx("code",{children:"SELECT *"})," in Production:"]})," Explicitly name required columns and assign aliases with ",e.jsx("code",{children:"AS"})," for clarity and query performance."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Test Edge Cases:"})," Try querying records with ",e.jsx("code",{children:"NULL"})," values using ",e.jsx("code",{children:"IS NULL"})," and observe how mathematical and comparison operators treat ",e.jsx("code",{children:"NULL"}),"."]})]})]})]})}const Ye="SQL Fundamentals Practical Projects & Case Studies",Ge="RDBMS using MySQL",Fe="Industry Standards & Database Engineering",Ve="001_002_sql-fundamentals",Ke=["MySQL Server 8.0+","MySQL Workbench","MySQL Command Line Client","phpMyAdmin"],Qe={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati, West Bengal, India"},We=JSON.parse(`[{"projectId":"SQL-PRJ-01","title":"E-Commerce Product Catalog Schema & Price Filter","difficulty":"Beginner","category":"E-Commerce","tags":["CREATE TABLE","INSERT INTO","SELECT","WHERE","ORDER BY","Aliasing"],"keywords":["CREATE TABLE","INSERT INTO","SELECT","AS","WHERE","ORDER BY"],"description":"Design an online store product catalog table \`products\` with primary key \`id\` (BIGINT UNSIGNED AUTO_INCREMENT), product name, category, unit price, stock quantity, and supplier email. Insert 5 diverse consumer electronics items and query all products in the 'Electronics' category priced below ₹25,000, displaying custom column aliases and sorted by unit price in ascending order.","schemaDetails":"TABLE: products\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  product_name VARCHAR(100) NOT NULL\\n  category VARCHAR(50) NOT NULL\\n  unit_price DECIMAL(10,2) NOT NULL\\n  stock_qty INT DEFAULT 0\\n  supplier_email VARCHAR(120)","exampleText":"Filter category = 'Electronics' AND unit_price <= 25000.00, sorted by price ASC.","exampleOutput":"+----+----------------------+-------------+------------+-----------+\\n| ID | Item Name            | Category    | Price (INR)| In Stock  |\\n+----+----------------------+-------------+------------+-----------+\\n|  3 | Wireless Mouse M330  | Electronics |     899.00 |       120 |\\n|  5 | Mechanical Keyboard  | Electronics |    3499.00 |        45 |\\n|  1 | Noise-Cancel Headset | Electronics |    6999.00 |        30 |\\n+----+----------------------+-------------+------------+-----------+","logicExplanation":"1. **DDL Definition**: Create \`products\` table specifying \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\` for industry-standard primary key scalability, \`VARCHAR\` strings, and \`DECIMAL(10,2)\` for financial accuracy.\\n2. **DML Batch Insert**: Populate 5 distinct items spanning Electronics, Furniture, and Audio accessories.\\n3. **Query Strategy**: Utilize \`SELECT\` with \`AS\` column aliasing for readable headers, filter using \`WHERE category = 'Electronics' AND unit_price <= 25000\`, and sort using \`ORDER BY unit_price ASC\`.","answerFile":"answers/01_ecommerce_product_order.sql","codeExplanation":"• \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`: Establishes an unsigned 64-bit primary key capable of supporting trillions of records.\\n• \`INSERT INTO products (...) VALUES (...)\`: Executes multi-row insertion in a single atomic statement.\\n• \`SELECT id AS 'ID', product_name AS 'Item Name'\`: Provides professional display aliases.\\n• \`WHERE category = 'Electronics' AND unit_price <= 25000\`: Combines equality and inequality predicates.\\n• \`ORDER BY unit_price ASC\`: Orders results from lowest to highest price.","learningOutcome":"Mastering standardized BIGINT UNSIGNED primary keys, precise DDL data types, and clean DQL filtering prevents invalid data ingestion and ensures long-term database scalability."},{"projectId":"SQL-PRJ-02","title":"Hospital Inpatient Admission & Active Patient Audit","difficulty":"Beginner","category":"Healthcare","tags":["IS NULL","BETWEEN","DATE","WHERE","Healthcare"],"keywords":["CREATE TABLE","INSERT INTO","IS NULL","BETWEEN","AND","ORDER BY"],"description":"Construct a hospital patient admission table \`inpatient_admissions\` with primary key \`id\` (BIGINT UNSIGNED AUTO_INCREMENT), patient name, ward number, admission date, discharge date, and attending doctor. A patient currently in the hospital has a NULL discharge date. Insert 6 admission records and write a query to find all active inpatients admitted between '2026-08-01' and '2026-08-31' who have not yet been discharged.","schemaDetails":"TABLE: inpatient_admissions\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  patient_name VARCHAR(80) NOT NULL\\n  ward_no VARCHAR(10) NOT NULL\\n  admission_date DATE NOT NULL\\n  discharge_date DATE NULL\\n  attending_doctor VARCHAR(80)","exampleText":"Query: discharge_date IS NULL AND admission_date BETWEEN '2026-08-01' AND '2026-08-31'.","exampleOutput":"+----+------------------+---------+----------------+----------------+\\n| id | patient_name     | ward_no | admission_date | discharge_date |\\n+----+------------------+---------+----------------+----------------+\\n|  2 | Ananya Sen       | ICU-02  | 2026-08-05     | NULL           |\\n|  4 | Rajesh Mukherjee | GEN-14  | 2026-08-18     | NULL           |\\n|  6 | Sunita Ghosh     | CCU-01  | 2026-08-25     | NULL           |\\n+----+------------------+---------+----------------+----------------+","logicExplanation":"1. **Primary Key Standard**: The relation uses \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`.\\n2. **Handling Nullability**: Discharge date is nullable because admitted patients do not have a discharge date yet.\\n3. **Predicate Precision**: In SQL, \`discharge_date = NULL\` evaluates to \`UNKNOWN\`. We MUST use the \`IS NULL\` operator.\\n4. **Range Filtering**: \`admission_date BETWEEN '2026-08-01' AND '2026-08-31'\` filters admissions within August 2026 inclusively.","answerFile":"answers/02_hospital_inpatient_admissions.sql","codeExplanation":"• \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`: Unsigned 64-bit integer identifier.\\n• \`discharge_date DATE NULL\`: Allows NULL values representing ongoing hospital stays.\\n• \`WHERE discharge_date IS NULL\`: Correctly filters records with missing/unassigned discharge dates.\\n• \`AND admission_date BETWEEN ... AND ...\`: Implements inclusive date boundary evaluation.","learningOutcome":"Learn why standard equality (\`= NULL\`) fails in relational databases and how \`IS NULL\` alongside \`BETWEEN\` accurately retrieves active temporal records with BIGINT UNSIGNED keys."},{"projectId":"SQL-PRJ-03","title":"University Student Grading & Honors Directory","difficulty":"Beginner","category":"Education","tags":["ALTER TABLE","ADD COLUMN","MODIFY","WHERE","ORDER BY"],"keywords":["CREATE TABLE","ALTER TABLE","ADD","MODIFY","SELECT","WHERE","ORDER BY"],"description":"Create a \`students\` table with primary key \`id\` (BIGINT UNSIGNED AUTO_INCREMENT), roll number, student name, department, semester, and GPA. After table creation, simulate a schema evolution by using \`ALTER TABLE\` to add an \`email\` column and modify the \`gpa\` column to \`DECIMAL(3,2)\`. Insert 6 student records and query all Computer Science (CSE) or Information Technology (IT) semester 6 students with GPA >= 3.50, ordered by GPA descending.","schemaDetails":"TABLE: students (Initial)\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  roll_no INT NOT NULL UNIQUE\\n  student_name VARCHAR(100) NOT NULL\\n  department VARCHAR(30) NOT NULL\\n  semester INT NOT NULL\\n  gpa FLOAT\\n\\nALTERATIONS:\\n  ADD COLUMN email VARCHAR(150)\\n  MODIFY COLUMN gpa DECIMAL(3,2) NOT NULL","exampleText":"Department IN ('CSE', 'IT') AND semester = 6 AND gpa >= 3.50 ORDER BY gpa DESC.","exampleOutput":"+----+---------+--------------------+------------+----------+------+----------------------------+\\n| id | roll_no | student_name       | department | semester | gpa  | email                      |\\n+----+---------+--------------------+------------+----------+------+----------------------------+\\n|  1 |     101 | Debjit Roy         | CSE        |        6 | 3.92 | debjit.roy@univ.edu.in     |\\n|  4 |     104 | Priya Chakraborty  | IT         |        6 | 3.78 | priya.c@univ.edu.in        |\\n|  2 |     102 | Sourav Mukherjee   | CSE        |        6 | 3.65 | sourav.m@univ.edu.in       |\\n+----+---------+--------------------+------------+----------+------+----------------------------+","logicExplanation":"1. **Surrogate Key Pattern**: Uses \`id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY\` as the surrogate primary key alongside natural key \`roll_no\`.\\n2. **Schema Refactoring**: Use \`ALTER TABLE students ADD COLUMN email VARCHAR(150)\` and \`ALTER TABLE students MODIFY COLUMN gpa DECIMAL(3,2)\`.\\n3. **Compound Filtering**: Combine department list membership (\`department IN ('CSE', 'IT')\`), semester check (\`semester = 6\`), and threshold inequality (\`gpa >= 3.50\`).\\n4. **Ranking**: Sort with \`ORDER BY gpa DESC\` to feature top performers first.","answerFile":"answers/03_university_student_grading.sql","codeExplanation":"• \`id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY\`: Robust surrogate primary key for academic entities.\\n• \`ALTER TABLE ... ADD COLUMN\`: Extends existing relation without destroying table data.\\n• \`ALTER TABLE ... MODIFY COLUMN\`: Changes column data type and nullability definition.\\n• \`WHERE department IN ('CSE', 'IT') AND semester = 6 AND gpa >= 3.50\`: Employs set membership and boolean operators.","learningOutcome":"Understand production schema alterations via ALTER TABLE while adhering to standard BIGINT UNSIGNED primary keys."},{"projectId":"SQL-PRJ-04","title":"Banking High-Value Transaction Tracker & Fraud Alert Filter","difficulty":"Beginner","category":"Banking & Finance","tags":["SELECT","WHERE","ORDER BY","LIMIT","DECIMAL"],"keywords":["CREATE TABLE","INSERT INTO","SELECT","WHERE","ORDER BY","LIMIT"],"description":"Develop a core banking transaction table \`bank_transactions\` with primary key \`id\` (BIGINT UNSIGNED AUTO_INCREMENT), account number, transaction type ('DEPOSIT', 'WITHDRAWAL', 'TRANSFER'), amount, transaction timestamp, and status ('SUCCESS', 'PENDING', 'FAILED'). Insert 8 sample transactions and write a high-value audit query that lists the top 3 largest successful withdrawals or transfers of ₹50,000 or more, ordered from highest amount to lowest.","schemaDetails":"TABLE: bank_transactions\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  account_no VARCHAR(20) NOT NULL\\n  txn_type VARCHAR(15) NOT NULL\\n  amount DECIMAL(12,2) NOT NULL\\n  txn_time DATETIME NOT NULL\\n  status VARCHAR(15) NOT NULL","exampleText":"txn_type IN ('WITHDRAWAL', 'TRANSFER') AND amount >= 50000.00 AND status = 'SUCCESS' ORDER BY amount DESC LIMIT 3.","exampleOutput":"+----+--------------+------------+-----------+---------------------+---------+\\n| id | account_no   | txn_type   | amount    | txn_time            | status  |\\n+----+--------------+------------+-----------+---------------------+---------+\\n|  6 | SBIN00982341 | TRANSFER   | 150000.00 | 2026-09-01 14:22:10 | SUCCESS |\\n|  1 | HDFC00124981 | WITHDRAWAL |  85000.00 | 2026-09-01 09:15:30 | SUCCESS |\\n|  4 | SBIN00982341 | WITHDRAWAL |  50000.00 | 2026-09-01 11:45:00 | SUCCESS |\\n+----+--------------+------------+-----------+---------------------+---------+","logicExplanation":"1. **Auditing Logic**: Filter only settled transactions (\`status = 'SUCCESS'\`) for high-risk debit operations (\`txn_type IN ('WITHDRAWAL', 'TRANSFER')\`).\\n2. **Primary Key**: \`id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY\` supports massive financial ledger scaling.\\n3. **Threshold**: Impose \`amount >= 50000.00\`.\\n4. **Ranking & Limiting**: \`ORDER BY amount DESC LIMIT 3\` picks the 3 highest monetary values efficiently.","answerFile":"answers/04_banking_transaction_audit.sql","codeExplanation":"• \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`: Enterprise banking primary key format.\\n• \`DECIMAL(12,2)\`: Prevents floating point rounding errors in financial transactions.\\n• \`DATETIME\`: Captures full date and time for forensic auditing.\\n• \`ORDER BY amount DESC LIMIT 3\`: Sorts descending and caps output to top 3 rows.","learningOutcome":"Learn financial data modeling with exact decimals, BIGINT UNSIGNED keys, and top-N reporting using ORDER BY and LIMIT."},{"projectId":"SQL-PRJ-05","title":"Corporate HR Employee Payroll & Department Filter","difficulty":"Beginner","category":"Human Resources","tags":["IN","NOT IN","IS NOT NULL","ORDER BY","DECIMAL"],"keywords":["CREATE TABLE","INSERT INTO","IN","NOT IN","IS NOT NULL","ORDER BY"],"description":"Construct an enterprise HR directory table \`employees\` with primary key \`id\` (BIGINT UNSIGNED AUTO_INCREMENT), first name, last name, department, designation, monthly basic salary, hire date, and manager ID (BIGINT UNSIGNED NULL). Insert 7 employees. Write a query to list all active employees working in 'Engineering', 'Finance', or 'Analytics' with a salary between ₹45,000 and ₹1,20,000 who report to an assigned manager (manager_id IS NOT NULL), sorted by department ASC and salary DESC.","schemaDetails":"TABLE: employees\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  first_name VARCHAR(50) NOT NULL\\n  last_name VARCHAR(50) NOT NULL\\n  department VARCHAR(40) NOT NULL\\n  designation VARCHAR(50) NOT NULL\\n  basic_salary DECIMAL(10,2) NOT NULL\\n  hire_date DATE NOT NULL\\n  manager_id BIGINT UNSIGNED NULL","exampleText":"department IN ('Engineering', 'Finance', 'Analytics') AND basic_salary BETWEEN 45000 AND 120000 AND manager_id IS NOT NULL.","exampleOutput":"+----+------------+-----------+-------------+---------------------+--------------+------------+\\n| id | first_name | last_name | department  | designation         | basic_salary | manager_id |\\n+----+------------+-----------+-------------+---------------------+--------------+------------+\\n|  5 | Tanmay     | Das       | Analytics   | Data Analyst        |     62000.00 |          1 |\\n|  2 | Rituparna  | Sen       | Engineering | Senior Backend Dev  |     95000.00 |          1 |\\n|  3 | Amitava    | Paul      | Engineering | QA Automation Lead  |     68000.00 |          2 |\\n|  6 | Barnali    | Roy       | Finance     | Senior Accountant   |     58000.00 |          1 |\\n+----+------------+-----------+-------------+---------------------+--------------+------------+","logicExplanation":"1. **Primary & Foreign Key Types**: \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\` matches the self-referencing \`manager_id BIGINT UNSIGNED NULL\` type.\\n2. **Set Membership**: \`department IN ('Engineering', 'Finance', 'Analytics')\` checks against allowed departments.\\n3. **Null Check**: \`manager_id IS NOT NULL\` excludes top-level executives who do not report to anyone.\\n4. **Multi-Column Sorting**: \`ORDER BY department ASC, basic_salary DESC\` sorts alphabetically by department, then highest earner within each department first.","answerFile":"answers/05_corporate_hr_payroll.sql","codeExplanation":"• \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`: Primary key for HR personnel.\\n• \`manager_id BIGINT UNSIGNED NULL\`: Allows root leaders (e.g. CEO) to have NULL parent manager.\\n• \`WHERE department IN (...)\`: Concise alternative to multiple OR conditions.\\n• \`ORDER BY department ASC, basic_salary DESC\`: Multi-tiered hierarchical sorting.","learningOutcome":"Master multi-column sorting and filtering across nullable hierarchical BIGINT foreign-key relationships."},{"projectId":"SQL-PRJ-06","title":"Airline Flight Schedule & Dynamic Fare Search","difficulty":"Intermediate","category":"Aviation & Travel","tags":["LIKE","BETWEEN","ORDER BY","Wildcard","VARCHAR"],"keywords":["CREATE TABLE","INSERT INTO","LIKE","BETWEEN","ORDER BY","ASC"],"description":"Design an airline flight inventory table \`flights\` with primary key \`id\` (BIGINT UNSIGNED AUTO_INCREMENT), flight code (e.g., 'AI-742', '6E-205'), airline name, origin city, destination city, departure time, arrival time, and economy fare. Insert 7 domestic flights. Write a flight search query to find all flights departing from 'Kolkata' to either 'Delhi' or 'Bengaluru' with an economy fare between ₹4,000 and ₹9,500 whose flight code starts with either '6E' (IndiGo) or 'AI' (Air India), sorted by economy fare ascending.","schemaDetails":"TABLE: flights\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  flight_code VARCHAR(10) NOT NULL\\n  airline_name VARCHAR(50) NOT NULL\\n  origin_city VARCHAR(40) NOT NULL\\n  dest_city VARCHAR(40) NOT NULL\\n  departure_time TIME NOT NULL\\n  arrival_time TIME NOT NULL\\n  economy_fare DECIMAL(8,2) NOT NULL","exampleText":"origin_city = 'Kolkata' AND dest_city IN ('Delhi', 'Bengaluru') AND (flight_code LIKE '6E%' OR flight_code LIKE 'AI%') AND economy_fare BETWEEN 4000 AND 9500.","exampleOutput":"+----+-------------+--------------+-------------+-----------+----------------+--------------+--------------+\\n| id | flight_code | airline_name | origin_city | dest_city | departure_time | arrival_time | economy_fare |\\n+----+-------------+--------------+-------------+-----------+----------------+--------------+--------------+\\n|  1 | 6E-205      | IndiGo       | Kolkata     | Bengaluru | 06:15:00       | 08:45:00     |      4850.00 |\\n|  3 | AI-742      | Air India    | Kolkata     | Delhi     | 09:30:00       | 11:50:00     |      5900.00 |\\n|  5 | 6E-881      | IndiGo       | Kolkata     | Delhi     | 18:40:00       | 21:05:00     |      6400.00 |\\n|  7 | AI-519      | Air India    | Kolkata     | Bengaluru | 14:10:00       | 16:40:00     |      7800.00 |\\n+----+-------------+--------------+-------------+-----------+----------------+--------------+--------------+","logicExplanation":"1. **Primary Key**: \`id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY\`.\\n2. **Origin & Destination**: \`origin_city = 'Kolkata' AND dest_city IN ('Delhi', 'Bengaluru')\`.\\n3. **Wildcard Matching**: Group \`(flight_code LIKE '6E%' OR flight_code LIKE 'AI%')\` using parentheses to enforce precedence over \`AND\` conditions.\\n4. **Price Range**: \`economy_fare BETWEEN 4000 AND 9500\`.\\n5. **Ordering**: \`ORDER BY economy_fare ASC\` helps budget travelers find the lowest price first.","answerFile":"answers/06_airline_flight_schedule.sql","codeExplanation":"• \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`: Unsigned 64-bit flight record key.\\n• \`TIME\`: Stores flight departure and arrival timestamps accurately.\\n• \`LIKE '6E%'\`: Matches flight codes starting with '6E' followed by any characters.\\n• \`ORDER BY economy_fare ASC\`: Returns cheapest flight options first.","learningOutcome":"Learn SQL operator precedence with AND/OR grouping and prefix pattern matching using the '%' wildcard."},{"projectId":"SQL-PRJ-07","title":"OTT Streaming Movie Catalog & Paginated Browser","difficulty":"Intermediate","category":"Entertainment & Media","tags":["LIMIT","OFFSET","ORDER BY","DISTINCT","DECIMAL"],"keywords":["CREATE TABLE","INSERT INTO","SELECT","DISTINCT","ORDER BY","LIMIT","OFFSET"],"description":"Model a video streaming platform table \`movies\` with primary key \`id\` (BIGINT UNSIGNED AUTO_INCREMENT), title, genre, release year, IMDb rating (0.0 to 10.0), duration in minutes, and content maturity rating ('U', 'UA', 'A'). Insert 8 blockbuster movies. Formulate two queries: (a) Retrieve a distinct list of all genres currently available on the platform, and (b) Implement Page 2 of a user catalog search (displaying 3 movies per page) for movies with IMDb rating >= 7.5 released in or after 2018, sorted by IMDb rating descending.","schemaDetails":"TABLE: movies\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  title VARCHAR(120) NOT NULL\\n  genre VARCHAR(40) NOT NULL\\n  release_year INT NOT NULL\\n  imdb_rating DECIMAL(3,1) NOT NULL\\n  duration_mins INT NOT NULL\\n  maturity_rating VARCHAR(5) NOT NULL","exampleText":"Query A: SELECT DISTINCT genre. Query B: WHERE imdb_rating >= 7.5 AND release_year >= 2018 ORDER BY imdb_rating DESC LIMIT 3 OFFSET 3 (Page 2).","exampleOutput":"-- Query A (Distinct Genres):\\n+-------------+\\n| genre       |\\n+-------------+\\n| Sci-Fi      |\\n| Action      |\\n| Drama       |\\n| Mystery     |\\n+-------------+\\n\\n-- Query B (Page 2 Results):\\n+----+-----------------------+---------+--------------+-------------+---------------+\\n| id | title                 | genre   | release_year | imdb_rating | duration_mins |\\n+----+-----------------------+---------+--------------+-------------+---------------+\\n|  4 | Spider-Man: No Way    | Action  |         2021 |         8.2 |           148 |\\n|  2 | Top Gun: Maverick     | Action  |         2022 |         8.3 |           130 |\\n|  6 | Everything Everywhere | Sci-Fi  |         2022 |         7.8 |           139 |\\n+----+-----------------------+---------+--------------+-------------+---------------+","logicExplanation":"1. **Primary Key Standard**: \`id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY\`.\\n2. **De-duplication**: \`SELECT DISTINCT genre\` removes duplicate category entries.\\n3. **Pagination Math**: Formula for Page $N$ with Page Size $S$ is \`LIMIT S OFFSET (N - 1) * S\`. For Page 2 with size 3, offset is $(2-1) \\\\times 3 = 3$.\\n4. **Sorting**: \`ORDER BY imdb_rating DESC\` ensures top-rated content appears first across pagination pages.","answerFile":"answers/07_ott_movie_catalog_pagination.sql","codeExplanation":"• \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`: Industry-standard movie catalog key.\\n• \`DISTINCT\`: Scans and condenses unique domain values across all rows.\\n• \`LIMIT 3 OFFSET 3\`: Skips first 3 highest rated movies and takes the next 3.\\n• \`WHERE imdb_rating >= 7.5 AND release_year >= 2018\`: Quality and recency filter.","learningOutcome":"Master backend pagination mechanics (LIMIT/OFFSET) and DISTINCT value aggregation for UI dropdowns."},{"projectId":"SQL-PRJ-08","title":"Hotel Room Booking & Table Maintenance (TRUNCATE vs DROP)","difficulty":"Beginner","category":"Hospitality","tags":["TRUNCATE","DROP TABLE","CREATE TABLE","IN","Hospitality"],"keywords":["CREATE TABLE","INSERT INTO","TRUNCATE TABLE","DROP TABLE","IN","ORDER BY"],"description":"Construct a luxury resort room reservation schema with two tables: \`room_bookings\` (storing primary key \`id\` as BIGINT UNSIGNED AUTO_INCREMENT, guest name, room category, check-in date, check-out date, nightly rate, and total bill) and a temporary staging table \`temp_web_leads\` with \`id\` (BIGINT UNSIGNED AUTO_INCREMENT). Populate both tables. Demonstrate standard table maintenance by using \`TRUNCATE TABLE temp_web_leads\` to flush staging rows while preserving structure, and \`DROP TABLE\` on an obsolete legacy table. Finally, query all 'Deluxe Suite' or 'Executive Room' bookings with total bill over ₹15,000, ordered by check-in date ASC.","schemaDetails":"TABLE: room_bookings\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  guest_name VARCHAR(100) NOT NULL\\n  room_category VARCHAR(40) NOT NULL\\n  check_in_date DATE NOT NULL\\n  check_out_date DATE NOT NULL\\n  nightly_rate DECIMAL(10,2) NOT NULL\\n  total_bill DECIMAL(10,2) NOT NULL\\n\\nTABLE: temp_web_leads (id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT, guest_name VARCHAR(100), phone VARCHAR(15))","exampleText":"TRUNCATE temp_web_leads; Query: room_category IN ('Deluxe Suite', 'Executive Room') AND total_bill >= 15000 ORDER BY check_in_date ASC.","exampleOutput":"+----+--------------------+----------------+---------------+----------------+------------+\\n| id | guest_name         | room_category  | check_in_date | check_out_date | total_bill |\\n+----+--------------------+----------------+---------------+----------------+------------+\\n|  1 | Rahul Banerjee     | Deluxe Suite   | 2026-10-02    | 2026-10-06     |   32000.00 |\\n|  4 | Saptarshi Sen      | Executive Room | 2026-10-10    | 2026-10-13     |   19500.00 |\\n|  6 | Sharmistha Roy     | Deluxe Suite   | 2026-10-18    | 2026-10-22     |   34000.00 |\\n+----+--------------------+----------------+---------------+----------------+------------+","logicExplanation":"1. **Primary Key Standard**: \`id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY\` on all transactional and staging tables.\\n2. **TRUNCATE vs DROP**: \`TRUNCATE TABLE\` resets the table data and AUTO_INCREMENT counter immediately without destroying the column definition or schema. \`DROP TABLE\` removes both data and metadata definition completely.\\n3. **Filtering Condition**: \`room_category IN ('Deluxe Suite', 'Executive Room') AND total_bill >= 15000\`.\\n4. **Timeline Sorting**: \`ORDER BY check_in_date ASC\`.","answerFile":"answers/08_hotel_room_reservations.sql","codeExplanation":"• \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`: Primary key for booking ledger.\\n• \`TRUNCATE TABLE temp_web_leads\`: High-speed DDL data wipe that keeps table structure intact.\\n• \`DROP TABLE IF EXISTS legacy_scratchpad_2020\`: Safely destroys unneeded database relations.\\n• \`WHERE room_category IN (...) AND total_bill >= 15000\`: Evaluates category match and bill threshold.","learningOutcome":"Distinguish between DDL table deletion commands (TRUNCATE vs DROP) and structure multi-night billing filters with BIGINT UNSIGNED keys."},{"projectId":"SQL-PRJ-09","title":"Courier Logistics & Express Parcel Shipment Tracker","difficulty":"Intermediate","category":"Logistics & Supply Chain","tags":["LIKE","Underscore Wildcard","IN","UPDATE","Logistics"],"keywords":["CREATE TABLE","INSERT INTO","UPDATE","LIKE","IN","ORDER BY"],"description":"Create a logistics courier tracking table \`shipments\` with primary key \`id\` (BIGINT UNSIGNED AUTO_INCREMENT), tracking number (format: 3 uppercase letters, hyphen, 5 digits like 'EXP-10492'), sender city, destination city, weight in kg, dispatch date, delivery status ('BOOKED', 'IN_TRANSIT', 'OUT_FOR_DELIVERY', 'DELIVERED', 'RETURNED'), and COD amount. Insert 7 shipments. Update the status of shipment 'EXP-10492' to 'DELIVERED'. Then, write a tracking query to find all active express shipments whose tracking number matches the exact pattern 'EXP-_____' (using single-character wildcard '_') with status in ('IN_TRANSIT', 'OUT_FOR_DELIVERY') and weight > 2.5 kg.","schemaDetails":"TABLE: shipments\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  tracking_no VARCHAR(15) NOT NULL UNIQUE\\n  sender_city VARCHAR(40) NOT NULL\\n  dest_city VARCHAR(40) NOT NULL\\n  weight_kg DECIMAL(5,2) NOT NULL\\n  dispatch_date DATE NOT NULL\\n  delivery_status VARCHAR(20) NOT NULL\\n  cod_amount DECIMAL(8,2) DEFAULT 0.00","exampleText":"tracking_no LIKE 'EXP-_____' AND delivery_status IN ('IN_TRANSIT', 'OUT_FOR_DELIVERY') AND weight_kg > 2.5.","exampleOutput":"+----+-------------+-------------+-----------+-----------+---------------+------------------+------------+\\n| id | tracking_no | sender_city | dest_city | weight_kg | dispatch_date | delivery_status  | cod_amount |\\n+----+-------------+-------------+-----------+-----------+---------------+------------------+------------+\\n|  2 | EXP-20419   | Kolkata     | Mumbai    |      5.80 | 2026-09-02    | IN_TRANSIT       |    1450.00 |\\n|  5 | EXP-38102   | Chennai     | Kolkata   |      4.20 | 2026-09-03    | OUT_FOR_DELIVERY |       0.00 |\\n+----+-------------+-------------+-----------+-----------+---------------+------------------+------------+","logicExplanation":"1. **Primary Key Standard**: \`id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY\`.\\n2. **Pattern Matching with Underscore**: In SQL, \`_\` represents exactly ONE single character, whereas \`%\` represents zero or more characters. \`EXP-_____\` matches 'EXP-' followed by exactly 5 characters.\\n3. **DML Update**: \`UPDATE shipments SET delivery_status = 'DELIVERED' WHERE tracking_no = 'EXP-10492'\`.\\n4. **Status Filter**: \`delivery_status IN ('IN_TRANSIT', 'OUT_FOR_DELIVERY')\`.","answerFile":"answers/09_courier_shipment_tracking.sql","codeExplanation":"• \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`: Unsigned 64-bit logistics primary key.\\n• \`tracking_no LIKE 'EXP-_____'\`: Enforces strict character count matching using 5 underscores.\\n• \`UPDATE shipments SET ... WHERE ...\`: Modifies targeted record safely using unique tracking ID.\\n• \`weight_kg > 2.5\`: Filters parcels above standard base weight tier.","learningOutcome":"Understand the crucial semantic difference between SQL '%' (multicharacter) and '_' (single character) wildcards."},{"projectId":"SQL-PRJ-10","title":"Central Digital Library Circulation & Overdue Tracker","difficulty":"Intermediate","category":"Library Management","tags":["IS NULL","DATE","ORDER BY","NOT NULL","Library"],"keywords":["CREATE TABLE","INSERT INTO","IS NULL","ORDER BY","ASC","SELECT"],"description":"Design a university central library circulation system table \`book_borrow_records\` with primary key \`id\` (BIGINT UNSIGNED AUTO_INCREMENT), member ID, member name, book title, ISBN, borrow date, due date, return date (NULL if currently checked out), and fine assessed. Insert 7 circulation records. Formulate a query for the librarian to identify all overdue books as of reference date '2026-09-10' (i.e. return_date IS NULL and due_date < '2026-09-10'), ordered by due date ASC so the longest overdue books appear first.","schemaDetails":"TABLE: book_borrow_records\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  member_id VARCHAR(15) NOT NULL\\n  member_name VARCHAR(80) NOT NULL\\n  book_title VARCHAR(120) NOT NULL\\n  isbn VARCHAR(20) NOT NULL\\n  borrow_date DATE NOT NULL\\n  due_date DATE NOT NULL\\n  return_date DATE NULL\\n  fine_assessed DECIMAL(6,2) DEFAULT 0.00","exampleText":"return_date IS NULL AND due_date < '2026-09-10' ORDER BY due_date ASC.","exampleOutput":"+----+-----------+-------------------+----------------------------+------------+------------+-------------+\\n| id | member_id | member_name       | book_title                 | due_date   | return_date| fine_amount |\\n+----+-----------+-------------------+----------------------------+------------+------------+-------------+\\n|  1 | LIB-8801  | Subham Chatterjee | Database System Concepts   | 2026-08-25 | NULL       |       75.00 |\\n|  3 | LIB-9024  | Rimpa Mondal      | Intro to Algorithms (CLRS) | 2026-09-01 | NULL       |       45.00 |\\n|  6 | LIB-8801  | Subham Chatterjee | Clean Architecture         | 2026-09-05 | NULL       |       25.00 |\\n+----+-----------+-------------------+----------------------------+------------+------------+-------------+","logicExplanation":"1. **Primary Key Standard**: \`id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY\`.\\n2. **Active Borrow State**: \`return_date IS NULL\` indicates the physical book is still with the borrower.\\n3. **Temporal Overdue Predicate**: \`due_date < '2026-09-10'\` evaluates if the loan period expired before the audit date.\\n4. **Chronological Sorting**: \`ORDER BY due_date ASC\` presents the oldest unreturned items first.","answerFile":"answers/10_library_circulation_overdue.sql","codeExplanation":"• \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`: Primary key for library ledger.\\n• \`return_date DATE NULL\`: Allows open-ended borrow status.\\n• \`WHERE return_date IS NULL AND due_date < '2026-09-10'\`: Precision compound predicate combining null check and chronological date comparison.\\n• \`ORDER BY due_date ASC\`: Prioritizes critical delinquent loans.","learningOutcome":"Learn temporal database comparisons against audit cutoff dates with nullable completion timestamps."},{"projectId":"SQL-PRJ-11","title":"Pharmacy Batch Inventory & Expiry Risk Alert System","difficulty":"Intermediate","category":"Healthcare & Retail","tags":["BETWEEN","ORDER BY","DECIMAL","Inventory","WHERE"],"keywords":["CREATE TABLE","INSERT INTO","BETWEEN","ORDER BY","ASC","OR"],"description":"Develop a pharmacy inventory management table \`pharmacy_batches\` with primary key \`id\` (BIGINT UNSIGNED AUTO_INCREMENT), medicine name, manufacturer, batch number, manufactured date, expiry date, unit purchase price, unit MRP, and current stock quantity. Insert 8 drug batches. Write an inventory risk query to find either: (a) batches that are expiring soon (expiry date between '2026-09-01' and '2026-12-31'), OR (b) batches with critical stock shortages (stock_qty <= 20 units), ordered by expiry date ASC and stock quantity ASC.","schemaDetails":"TABLE: pharmacy_batches\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  medicine_name VARCHAR(100) NOT NULL\\n  manufacturer VARCHAR(80) NOT NULL\\n  batch_no VARCHAR(25) NOT NULL UNIQUE\\n  mfg_date DATE NOT NULL\\n  expiry_date DATE NOT NULL\\n  mrp DECIMAL(8,2) NOT NULL\\n  stock_qty INT NOT NULL","exampleText":"expiry_date BETWEEN '2026-09-01' AND '2026-12-31' OR stock_qty <= 20 ORDER BY expiry_date ASC, stock_qty ASC.","exampleOutput":"+----+-----------------------+-------------+-------------+------------+--------+\\n| id | medicine_name         | batch_no    | expiry_date | mrp (INR)  | stock  |\\n+----+-----------------------+-------------+-------------+------------+--------+\\n|  2 | Azithromycin 500mg    | AZ-2024-09  | 2026-09-30  |     118.50 |     15 |\\n|  5 | Paracetamol 650mg     | PCM-8910    | 2026-11-15  |      32.00 |     12 |\\n|  1 | Amoxicillin 250mg DT  | AMX-4401    | 2026-12-20  |      85.00 |     85 |\\n|  7 | Pantoprazole 40mg     | PAN-9002    | 2027-04-10  |      95.00 |      8 |\\n+----+-----------------------+-------------+-------------+------------+--------+","logicExplanation":"1. **Primary Key Standard**: \`id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY\`.\\n2. **OR Conjunction**: A batch is flagged if it meets the expiry threshold OR if it suffers a stock stockout.\\n3. **Date Range**: \`expiry_date BETWEEN '2026-09-01' AND '2026-12-31'\`.\\n4. **Stock Level Check**: \`stock_qty <= 20\`.\\n5. **Dual Ordering**: \`ORDER BY expiry_date ASC, stock_qty ASC\` prioritizes near-expiry drugs before low-volume inventory.","answerFile":"answers/11_pharmacy_batch_inventory.sql","codeExplanation":"• \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`: Primary key for pharmaceutical stock batches.\\n• \`batch_no VARCHAR(25) NOT NULL UNIQUE\`: Ensures no duplicate manufacturer batches exist.\\n• \`WHERE expiry_date BETWEEN ... OR stock_qty <= 20\`: Disjunctive condition capturing multiple operational risk factors.\\n• \`ORDER BY expiry_date ASC, stock_qty ASC\`: Sorts by urgency of expiration and restock requirements.","learningOutcome":"Learn operational risk filtering with boolean OR conditions and multi-attribute sorting for supply chain analytics."},{"projectId":"SQL-PRJ-12","title":"Online Food Delivery Menu & Vegetarian Gourmet Finder","difficulty":"Beginner","category":"Food & Restaurant","tags":["IN","LIMIT","ORDER BY","Aliasing","Restaurant"],"keywords":["CREATE TABLE","INSERT INTO","IN","AND","ORDER BY","LIMIT"],"description":"Construct an online restaurant food menu table \`menu_items\` with primary key \`id\` (BIGINT UNSIGNED AUTO_INCREMENT), item name, restaurant name, cuisine ('North Indian', 'South Indian', 'Chinese', 'Mughlai', 'Continental'), price, is_veg (1 for Vegetarian, 0 for Non-Veg), and customer rating (0.0 to 5.0). Insert 8 popular dishes. Write a query to find the top 4 highest-rated pure vegetarian items in 'North Indian' or 'Mughlai' cuisine priced under ₹350.00, sorted by rating DESC and price ASC.","schemaDetails":"TABLE: menu_items\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  item_name VARCHAR(100) NOT NULL\\n  restaurant_name VARCHAR(80) NOT NULL\\n  cuisine VARCHAR(30) NOT NULL\\n  price DECIMAL(7,2) NOT NULL\\n  is_veg TINYINT(1) NOT NULL DEFAULT 1\\n  rating DECIMAL(2,1) NOT NULL","exampleText":"is_veg = 1 AND cuisine IN ('North Indian', 'Mughlai') AND price <= 350.00 ORDER BY rating DESC, price ASC LIMIT 4.","exampleOutput":"+----+--------------------+-------------------+--------------+--------+--------+\\n| id | item_name          | restaurant_name   | cuisine      | price  | rating |\\n+----+--------------------+-------------------+--------------+--------+--------+\\n|  3 | Paneer Tikka Butter| Punjab Sweet House| North Indian | 280.00 |    4.8 |\\n|  1 | Dal Makhani Royale | Haveli Dine       | North Indian | 220.00 |    4.7 |\\n|  6 | Shahi Paneer Korma | Aminia Deluxe     | Mughlai      | 310.00 |    4.6 |\\n|  5 | Tandoori Roti (4pc)| Punjab Sweet House| North Indian |  80.00 |    4.4 |\\n+----+--------------------+-------------------+--------------+--------+--------+","logicExplanation":"1. **Primary Key Standard**: \`id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY\`.\\n2. **Boolean Representation**: In MySQL, \`TINYINT(1)\` represents booleans where 1 = True (Vegetarian) and 0 = False.\\n3. **Set Filtering**: \`cuisine IN ('North Indian', 'Mughlai')\` restricts culinary styles.\\n4. **Price Ceiling**: \`price <= 350.00\`.\\n5. **Tie-Breaking Sort**: \`ORDER BY rating DESC, price ASC LIMIT 4\` ranks best ratings first; for equal ratings, the cheaper dish takes precedence.","answerFile":"answers/12_food_delivery_menu_filter.sql","codeExplanation":"• \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`: Restaurant menu item unique key.\\n• \`is_veg TINYINT(1)\`: Efficient 1-byte storage for binary boolean flags.\\n• \`WHERE is_veg = 1 AND cuisine IN (...) AND price <= 350.00\`: Multi-filter composite predicate.\\n• \`ORDER BY rating DESC, price ASC\`: Multi-column sort with reverse directions.\\n• \`LIMIT 4\`: Restricts to top 4 recommendations.","learningOutcome":"Understand boolean representation in MySQL (TINYINT) and multi-direction sorting for recommendation engines."},{"projectId":"SQL-PRJ-13","title":"Automobile Dealership Inventory & Schema Refactoring","difficulty":"Intermediate","category":"Automotive","tags":["ALTER TABLE","RENAME COLUMN","DROP COLUMN","BETWEEN","Automotive"],"keywords":["CREATE TABLE","ALTER TABLE","RENAME COLUMN","DROP COLUMN","BETWEEN","ORDER BY"],"description":"Create an automobile showroom inventory table \`vehicles\` with primary key \`id\` (BIGINT UNSIGNED AUTO_INCREMENT), VIN (VARCHAR(20) NOT NULL UNIQUE), make, model, model_year, fuel_type ('PETROL', 'DIESEL', 'ELECTRIC', 'HYBRID'), showroom_price, and legacy column \`dealer_notes\`. Use \`ALTER TABLE\` to rename \`showroom_price\` to \`ex_showroom_price\` and drop the unneeded \`dealer_notes\` column. Insert 7 cars and query all Electric or Hybrid vehicles released between 2023 and 2026 priced under ₹30,00,000, sorted by model_year DESC and ex_showroom_price ASC.","schemaDetails":"TABLE: vehicles (Initial)\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  vin VARCHAR(20) NOT NULL UNIQUE\\n  make VARCHAR(40) NOT NULL\\n  model VARCHAR(60) NOT NULL\\n  model_year INT NOT NULL\\n  fuel_type VARCHAR(20) NOT NULL\\n  showroom_price DECIMAL(12,2) NOT NULL\\n  dealer_notes TEXT\\n\\nALTERATIONS:\\n  RENAME COLUMN showroom_price TO ex_showroom_price\\n  DROP COLUMN dealer_notes","exampleText":"fuel_type IN ('ELECTRIC', 'HYBRID') AND model_year BETWEEN 2023 AND 2026 AND ex_showroom_price <= 3000000.","exampleOutput":"+----+-------------------+-----------+-------------+------------+-----------+-------------------+\\n| id | vin               | make      | model       | model_year | fuel_type | ex_showroom_price |\\n+----+-------------------+-----------+-------------+------------+-----------+-------------------+\\n|  1 | VIN-EV-2025-0019  | Tata      | Nexon EV LR |       2025 | ELECTRIC  |        1699000.00 |\\n|  3 | VIN-HY-2025-0482  | Toyota    | Hyryder     |       2025 | HYBRID    |        1985000.00 |\\n|  4 | VIN-EV-2024-9182  | MG        | ZS EV       |       2024 | ELECTRIC  |        2250000.00 |\\n|  6 | VIN-HY-2023-1104  | Honda     | City e:HEV  |       2023 | HYBRID    |        1920000.00 |\\n+----+-------------------+-----------+-------------+------------+-----------+-------------------+","logicExplanation":"1. **Primary Key Standard**: \`id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY\`.\\n2. **Column Renaming**: MySQL 8.0+ supports \`ALTER TABLE vehicles RENAME COLUMN old_name TO new_name\`.\\n3. **Column Removal**: \`ALTER TABLE vehicles DROP COLUMN dealer_notes\` cleans unneeded metadata.\\n4. **Query Logic**: Filter \`fuel_type IN ('ELECTRIC', 'HYBRID')\`, \`model_year BETWEEN 2023 AND 2026\`, and \`ex_showroom_price <= 3000000\`.","answerFile":"answers/13_automobile_inventory_refactor.sql","codeExplanation":"• \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`: Surrogate primary key for vehicle registry.\\n• \`ALTER TABLE ... RENAME COLUMN\`: Renames attributes without altering data types or destroying rows.\\n• \`ALTER TABLE ... DROP COLUMN\`: Permanently deletes obsolete column structures.\\n• \`WHERE fuel_type IN (...) AND model_year BETWEEN ...\`: Fast multi-attribute filtering.","learningOutcome":"Master modern MySQL 8.0+ DDL ALTER syntax and green vehicle catalog querying."},{"projectId":"SQL-PRJ-14","title":"Real Estate Property Listings & Budget Matcher","difficulty":"Intermediate","category":"Real Estate","tags":["BETWEEN","IN","AND","ORDER BY","Real Estate"],"keywords":["CREATE TABLE","INSERT INTO","BETWEEN","IN","ORDER BY","DECIMAL"],"description":"Design a real estate property marketplace table \`properties\` with primary key \`id\` (BIGINT UNSIGNED AUTO_INCREMENT), title, property type ('Apartment', 'Villa', 'Penthouse', 'Plot'), locality/neighborhood, carpet area in sq ft, price in Lakhs (INR), possession status ('READY_TO_MOVE', 'UNDER_CONSTRUCTION'), and contact phone. Insert 7 properties. Write a property search query for a client looking for a 3BHK or Villa property in 'Barrackpore', 'Rajarhat', or 'New Town' with carpet area >= 1,100 sq ft and price between ₹65.00 Lakhs and ₹135.00 Lakhs, sorted by price ascending.","schemaDetails":"TABLE: properties\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  title VARCHAR(120) NOT NULL\\n  property_type VARCHAR(30) NOT NULL\\n  locality VARCHAR(50) NOT NULL\\n  carpet_area_sqft INT NOT NULL\\n  price_lakhs DECIMAL(6,2) NOT NULL\\n  possession_status VARCHAR(25) NOT NULL\\n  agent_phone VARCHAR(15)","exampleText":"property_type IN ('Apartment', 'Villa') AND locality IN ('Barrackpore', 'Rajarhat', 'New Town') AND carpet_area_sqft >= 1100 AND price_lakhs BETWEEN 65.00 AND 135.00.","exampleOutput":"+----+--------------------------+---------------+-------------+------------------+-------------+-------------------+\\n| id | title                    | property_type | locality    | carpet_area_sqft | price_lakhs | possession_status |\\n+----+--------------------------+---------------+-------------+------------------+-------------+-------------------+\\n|  1 | Riverside Greens 3BHK    | Apartment     | Barrackpore |             1280 |       68.50 | READY_TO_MOVE     |\\n|  4 | EcoSpace Urban Heights   | Apartment     | Rajarhat    |             1350 |       88.00 | READY_TO_MOVE     |\\n|  7 | Magnolia Lakefront Villa | Villa         | New Town    |             1850 |      125.00 | UNDER_CONSTRUCTION|\\n+----+--------------------------+---------------+-------------+------------------+-------------+-------------------+","logicExplanation":"1. **Primary Key Standard**: \`id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY\`.\\n2. **Multi-Domain Filters**: Filter \`property_type IN ('Apartment', 'Villa')\` and \`locality IN ('Barrackpore', 'Rajarhat', 'New Town')\`.\\n3. **Area & Budget Boundaries**: \`carpet_area_sqft >= 1100 AND price_lakhs BETWEEN 65.00 AND 135.00\`.\\n4. **Sorting**: \`ORDER BY price_lakhs ASC\`.","answerFile":"answers/14_real_estate_property_matcher.sql","codeExplanation":"• \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`: Primary key for properties catalog.\\n• \`DECIMAL(6,2)\`: Supports property prices up to 9999.99 Lakhs with 2 decimal digits.\\n• \`WHERE locality IN (...) AND carpet_area_sqft >= 1100\`: Compound conjunction restricting spatial and physical metrics.\\n• \`ORDER BY price_lakhs ASC\`: Ascending budget prioritization.","learningOutcome":"Learn commercial property search matching combining discrete locality sets and continuous budget intervals."},{"projectId":"SQL-PRJ-15","title":"Fitness Gym Member Directory & Phone Pattern Query","difficulty":"Intermediate","category":"Health & Fitness","tags":["LIKE","Prefix Wildcard","BETWEEN","UPDATE","Fitness"],"keywords":["CREATE TABLE","INSERT INTO","UPDATE","LIKE","BETWEEN","ORDER BY"],"description":"Construct a fitness gym membership table \`gym_members\` with primary key \`id\` (BIGINT UNSIGNED AUTO_INCREMENT), full name, membership tier ('MONTHLY', 'QUARTERLY', 'ANNUAL', 'VIP_LIFETIME'), phone number, join date, renewal due date, monthly fee, and active status ('ACTIVE', 'EXPIRED', 'FROZEN'). Insert 7 members. Update members whose renewal date is before '2026-09-01' to 'EXPIRED'. Write a marketing campaign query to select all ACTIVE members on 'QUARTERLY' or 'ANNUAL' plans whose phone number starts with '98' (West Bengal/Kolkata mobile prefix), ordered by join date ASC.","schemaDetails":"TABLE: gym_members\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  full_name VARCHAR(80) NOT NULL\\n  membership_tier VARCHAR(25) NOT NULL\\n  phone_no VARCHAR(15) NOT NULL\\n  join_date DATE NOT NULL\\n  renewal_date DATE NOT NULL\\n  monthly_fee DECIMAL(7,2) NOT NULL\\n  status VARCHAR(15) DEFAULT 'ACTIVE'","exampleText":"UPDATE ... WHERE renewal_date < '2026-09-01'; Query: status = 'ACTIVE' AND membership_tier IN ('QUARTERLY', 'ANNUAL') AND phone_no LIKE '98%' ORDER BY join_date ASC.","exampleOutput":"+----+------------------+-----------------+--------------+------------+--------------+---------+\\n| id | full_name        | membership_tier | phone_no     | join_date  | renewal_date | status  |\\n+----+------------------+-----------------+--------------+------------+--------------+---------+\\n|  1 | Rakesh Karmakar  | ANNUAL          | 9830124891   | 2025-09-01 | 2026-09-01   | ACTIVE  |\\n|  4 | Debolina Sengupta| QUARTERLY       | 9831908421   | 2026-06-15 | 2026-09-15   | ACTIVE  |\\n|  6 | Avik Samanta     | ANNUAL          | 9874192834   | 2026-07-01 | 2027-07-01   | ACTIVE  |\\n+----+------------------+-----------------+--------------+------------+--------------+---------+","logicExplanation":"1. **Primary Key Standard**: \`id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY\`.\\n2. **Lifecycle Batch Update**: \`UPDATE gym_members SET status = 'EXPIRED' WHERE renewal_date < '2026-09-01'\`.\\n3. **Targeted Campaign Query**: \`status = 'ACTIVE' AND membership_tier IN ('QUARTERLY', 'ANNUAL') AND phone_no LIKE '98%'\`.\\n4. **Loyalty Sorting**: \`ORDER BY join_date ASC\`.","answerFile":"answers/15_gym_membership_directory.sql","codeExplanation":"• \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`: Unsigned 64-bit membership ID.\\n• \`UPDATE gym_members SET ...\`: Batch status synchronization based on renewal dates.\\n• \`phone_no LIKE '98%'\`: Matches all phone numbers having prefix '98' irrespective of remaining digits.\\n• \`ORDER BY join_date ASC\`: Retrieves senior gym members first.","learningOutcome":"Learn data synchronization with UPDATE statements and telecom prefix pattern matching with LIKE."},{"projectId":"SQL-PRJ-16","title":"Online Examination Portal & Student Result Classification","difficulty":"Beginner","category":"Education & EdTech","tags":["OR","NOT EQUAL","ORDER BY","INSERT INTO","Education"],"keywords":["CREATE TABLE","INSERT INTO","SELECT","OR","!=","ORDER BY"],"description":"Design an online examination portal grading table \`exam_submissions\` with primary key \`id\` (BIGINT UNSIGNED AUTO_INCREMENT), registration number, student name, subject code ('CS-101', 'MA-201', 'EC-301'), total marks (out of 100), attempt number (1, 2, 3), and assigned grade ('O', 'E', 'A', 'B', 'C', 'F'). Insert 8 student exam submissions. Formulate a query for the academic remedial committee to retrieve all students who either scored below 40 marks (Failing grade) OR needed more than 1 attempt (attempt_number > 1) in subject 'CS-101' or 'MA-201', sorted by total marks ASC.","schemaDetails":"TABLE: exam_submissions\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  reg_no VARCHAR(20) NOT NULL\\n  student_name VARCHAR(80) NOT NULL\\n  subject_code VARCHAR(15) NOT NULL\\n  total_marks INT NOT NULL\\n  attempt_number INT DEFAULT 1\\n  grade VARCHAR(5) NOT NULL","exampleText":"subject_code IN ('CS-101', 'MA-201') AND (total_marks < 40 OR attempt_number > 1) ORDER BY total_marks ASC.","exampleOutput":"+----+------------+-----------------+--------------+-------------+----------------+-------+\\n| id | reg_no     | student_name    | subject_code | total_marks | attempt_number | grade |\\n+----+------------+-----------------+--------------+-------------+----------------+-------+\\n|  3 | REG-202603 | Indranil Nandi  | CS-101       |          28 |              1 | F     |\\n|  7 | REG-202607 | Sayani Majumdar | MA-201       |          34 |              2 | F     |\\n|  5 | REG-202605 | Bikash Roy      | CS-101       |          48 |              2 | C     |\\n|  2 | REG-202602 | Payel Dey       | MA-201       |          52 |              2 | B     |\\n+----+------------+-----------------+--------------+-------------+----------------+-------+","logicExplanation":"1. **Primary Key Standard**: \`id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY\`.\\n2. **Subject Domain**: \`subject_code IN ('CS-101', 'MA-201')\`.\\n3. **Remedial Filter**: Group \`(total_marks < 40 OR attempt_number > 1)\` to isolate low scores or repeat examinees.\\n4. **Ascending Order**: \`ORDER BY total_marks ASC\` shows the most vulnerable students at the very top.","answerFile":"answers/16_exam_result_classification.sql","codeExplanation":"• \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`: Primary key for exam attempts.\\n• \`total_marks INT NOT NULL\`: Stores whole integer exam score.\\n• \`(total_marks < 40 OR attempt_number > 1)\`: Encloses disjunctive logic in parentheses to prevent accidental operator precedence mixup.\\n• \`ORDER BY total_marks ASC\`: Ranks lowest scoring candidates first.","learningOutcome":"Understand conditional academic scoring rules and disjunctive boolean logic in SQL."},{"projectId":"SQL-PRJ-17","title":"Concert & Event Ticketing Missing Contact Auditor","difficulty":"Beginner","category":"Entertainment & Events","tags":["IS NULL","IS NOT NULL","IN","ORDER BY","Events"],"keywords":["CREATE TABLE","INSERT INTO","IS NULL","IS NOT NULL","IN","ORDER BY"],"description":"Construct an auditorium concert booking table \`event_tickets\` with primary key \`id\` (BIGINT UNSIGNED AUTO_INCREMENT), event name, attendee name, attendee email, attendee mobile, seat category ('VIP_LOUNGE', 'PLATINUM', 'GOLD', 'SILVER'), ticket price, and booking channel ('ONLINE_APP', 'BOX_OFFICE', 'PARTNER_PORTAL'). Insert 8 ticket records. Some box office bookings have NULL email addresses. Formulate two queries: (a) Retrieve all attendees in 'VIP_LOUNGE' or 'PLATINUM' who do NOT have an email on file (attendee_email IS NULL), and (b) List all confirmed bookings with valid mobile numbers (attendee_mobile IS NOT NULL) ordered by ticket price DESC.","schemaDetails":"TABLE: event_tickets\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  event_name VARCHAR(100) NOT NULL\\n  attendee_name VARCHAR(80) NOT NULL\\n  attendee_email VARCHAR(120) NULL\\n  attendee_mobile VARCHAR(15) NULL\\n  seat_category VARCHAR(25) NOT NULL\\n  ticket_price DECIMAL(8,2) NOT NULL\\n  booking_channel VARCHAR(30) NOT NULL","exampleText":"Query A: seat_category IN ('VIP_LOUNGE', 'PLATINUM') AND attendee_email IS NULL. Query B: attendee_mobile IS NOT NULL ORDER BY ticket_price DESC.","exampleOutput":"-- Query A (Missing VIP Emails):\\n+----+--------------------+---------------+----------------+--------------+\\n| id | event_name         | attendee_name | seat_category  | ticket_price |\\n+----+--------------------+---------------+----------------+--------------+\\n|  2 | Kolkata Rock Fest  | Tapan Paul    | VIP_LOUNGE     |      4500.00 |\\n|  6 | Classical Symphony | Goutam Das    | PLATINUM       |      2800.00 |\\n+----+--------------------+---------------+----------------+--------------+\\n\\n-- Query B (Confirmed Contact Bookings):\\n+----+--------------------+---------------+-----------------+--------------+\\n| id | attendee_name      | seat_category | attendee_mobile | ticket_price |\\n+----+--------------------+---------------+-----------------+--------------+\\n|  1 | Joyita Sen         | VIP_LOUNGE    | 9830099881      |      4500.00 |\\n|  5 | Arindam Roy        | PLATINUM      | 9874112233      |      2800.00 |\\n|  3 | Swapan Majhi       | GOLD          | 9831122334      |      1500.00 |\\n+----+--------------------+---------------+-----------------+--------------+","logicExplanation":"1. **Primary Key Standard**: \`id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY\`.\\n2. **Null Auditing**: \`attendee_email IS NULL\` finds incomplete customer records requiring SMS notification.\\n3. **Non-Null Validation**: \`attendee_mobile IS NOT NULL\` ensures telephonic reachability.\\n4. **Ordering**: \`ORDER BY ticket_price DESC\`.","answerFile":"answers/17_event_ticketing_audit.sql","codeExplanation":"• \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`: Primary key for ticket bookings.\\n• \`attendee_email VARCHAR(120) NULL\`: Expresses optional contact fields.\\n• \`WHERE seat_category IN (...) AND attendee_email IS NULL\`: Filters high-tier patrons missing digital communications.\\n• \`WHERE attendee_mobile IS NOT NULL\`: Enforces mandatory SMS contact constraint.","learningOutcome":"Master nullability auditing in customer communication pipelines using IS NULL and IS NOT NULL."},{"projectId":"SQL-PRJ-18","title":"Smart Meter Power Utility & Commercial Bill Defaulters","difficulty":"Intermediate","category":"Energy & Utilities","tags":["AND","DECIMAL","ORDER BY","Utilities","WHERE"],"keywords":["CREATE TABLE","INSERT INTO","SELECT","AND",">","ORDER BY"],"description":"Model a state electricity distribution company table \`power_meter_readings\` with primary key \`id\` (BIGINT UNSIGNED AUTO_INCREMENT), consumer ID, consumer name, connection type ('DOMESTIC', 'COMMERCIAL', 'INDUSTRIAL'), units consumed (kWh), billing month ('2026-08', '2026-09'), bill amount in INR, due date, and payment status ('PAID', 'UNPAID', 'DISPUTED'). Insert 8 consumer billing records. Formulate a revenue recovery query to identify all Commercial or Industrial consumers with UNPAID bills where units consumed exceed 400 kWh or bill amount exceeds ₹5,000.00, sorted by bill amount descending.","schemaDetails":"TABLE: power_meter_readings\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  consumer_id VARCHAR(20) NOT NULL\\n  consumer_name VARCHAR(80) NOT NULL\\n  connection_type VARCHAR(20) NOT NULL\\n  units_consumed INT NOT NULL\\n  billing_month VARCHAR(7) NOT NULL\\n  bill_amount DECIMAL(10,2) NOT NULL\\n  due_date DATE NOT NULL\\n  payment_status VARCHAR(15) NOT NULL","exampleText":"connection_type IN ('COMMERCIAL', 'INDUSTRIAL') AND payment_status = 'UNPAID' AND (units_consumed > 400 OR bill_amount > 5000) ORDER BY bill_amount DESC.","exampleOutput":"+----+-------------+---------------------+-----------------+----------------+-------------+----------------+\\n| id | consumer_id | consumer_name       | connection_type | units_consumed | bill_amount | payment_status |\\n+----+-------------+---------------------+-----------------+----------------+-------------+----------------+\\n|  4 | WBSED-IND09 | Bengal Jute Mills   | INDUSTRIAL      |           4200 |    48500.00 | UNPAID         |\\n|  2 | WBSED-COM02 | Metro Cineplex      | COMMERCIAL      |           1850 |    19420.00 | UNPAID         |\\n|  6 | WBSED-COM88 | New Market ColdStore| COMMERCIAL      |            620 |     6820.00 | UNPAID         |\\n+----+-------------+---------------------+-----------------+----------------+-------------+----------------+","logicExplanation":"1. **Primary Key Standard**: \`id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY\`.\\n2. **Segment Filtering**: \`connection_type IN ('COMMERCIAL', 'INDUSTRIAL')\`.\\n3. **Delinquent Flag**: \`payment_status = 'UNPAID'\`.\\n4. **Consumption & Monetary Thresholds**: \`(units_consumed > 400 OR bill_amount > 5000.00)\`.\\n5. **Financial Priority**: \`ORDER BY bill_amount DESC\`.","answerFile":"answers/18_power_utility_billing.sql","codeExplanation":"• \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`: Primary key for utility meter readings.\\n• \`DECIMAL(10,2)\`: Handles large utility bills up to ₹9,99,99,999.99.\\n• \`WHERE connection_type IN (...) AND payment_status = 'UNPAID' AND (...)\`: Combines commercial classification with threshold checks.\\n• \`ORDER BY bill_amount DESC\`: Highlights largest outstanding receivables first.","learningOutcome":"Structure utility revenue recovery queries with combined consumption and financial thresholds."},{"projectId":"SQL-PRJ-19","title":"IT Job Recruitment Portal & Candidate Shortlisting Pipeline","difficulty":"Intermediate","category":"Recruitment & HRTech","tags":["BETWEEN","IN","LIKE","ORDER BY","Recruitment"],"keywords":["CREATE TABLE","INSERT INTO","BETWEEN","IN","LIKE","ORDER BY"],"description":"Develop a job board recruitment table \`job_candidates\` with primary key \`id\` (BIGINT UNSIGNED AUTO_INCREMENT), candidate name, applied role ('Frontend Engineer', 'Full Stack Developer', 'DevOps Engineer', 'Data Scientist'), years of experience, primary skill, expected CTC in LPA (Lakhs Per Annum), notice period in days, and interview status ('APPLIED', 'SHORTLISTED', 'REJECTED', 'OFFERED'). Insert 8 applicant records. Formulate a technical shortlisting query for a Senior Full Stack or DevOps opening to select candidates with 3.0 to 8.0 years of experience, expected CTC <= 18.50 LPA, notice period <= 30 days, and primary skill containing 'React' or 'Python' (using LIKE), sorted by expected CTC ASC.","schemaDetails":"TABLE: job_candidates\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  candidate_name VARCHAR(80) NOT NULL\\n  applied_role VARCHAR(50) NOT NULL\\n  experience_years DECIMAL(3,1) NOT NULL\\n  primary_skill VARCHAR(80) NOT NULL\\n  expected_ctc_lpa DECIMAL(4,2) NOT NULL\\n  notice_period_days INT NOT NULL\\n  status VARCHAR(20) DEFAULT 'APPLIED'","exampleText":"applied_role IN ('Full Stack Developer', 'DevOps Engineer') AND experience_years BETWEEN 3.0 AND 8.0 AND expected_ctc_lpa <= 18.50 AND notice_period_days <= 30 AND (primary_skill LIKE '%React%' OR primary_skill LIKE '%Python%') ORDER BY expected_ctc_lpa ASC.","exampleOutput":"+----+------------------+----------------------+------------------+----------------------+------------------+--------------------+\\n| id | candidate_name   | applied_role         | experience_years | primary_skill        | expected_ctc_lpa | notice_period_days |\\n+----+------------------+----------------------+------------------+----------------------+------------------+--------------------+\\n|  2 | Nilanjan Dutta   | Full Stack Developer |              4.5 | React, Node, MySQL   |            12.50 |                 15 |\\n|  5 | Somnath Banerjee | DevOps Engineer      |              5.0 | Python, Docker, AWS  |            15.00 |                 30 |\\n|  7 | Anwesha Roy      | Full Stack Developer |              6.0 | React, Django, SQL   |            17.50 |                 30 |\\n+----+------------------+----------------------+------------------+----------------------+------------------+--------------------+","logicExplanation":"1. **Primary Key Standard**: \`id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY\`.\\n2. **Role Matching**: \`applied_role IN ('Full Stack Developer', 'DevOps Engineer')\`.\\n3. **Experience & CTC Range**: \`experience_years BETWEEN 3.0 AND 8.0 AND expected_ctc_lpa <= 18.50\`.\\n4. **Notice Period**: \`notice_period_days <= 30\`.\\n5. **Skill Substring Search**: Group \`(primary_skill LIKE '%React%' OR primary_skill LIKE '%Python%')\`.\\n6. **Budget Ranking**: \`ORDER BY expected_ctc_lpa ASC\`.","answerFile":"answers/19_job_recruitment_shortlist.sql","codeExplanation":"• \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`: Primary key for ATS candidate records.\\n• \`DECIMAL(3,1)\`: Captures half-years of experience (e.g. 4.5 years).\\n• \`primary_skill LIKE '%React%'\`: Substring matching finds skill mentions anywhere in text.\\n• \`ORDER BY expected_ctc_lpa ASC\`: Prioritizes cost-effective candidate profiles.","learningOutcome":"Master multi-parameter applicant tracking system (ATS) queries utilizing substring pattern matching and boundary bounds."},{"projectId":"SQL-PRJ-20","title":"SaaS Cloud Subscription Lifecycle & Renewal Management","difficulty":"Advanced","category":"Cloud & SaaS","tags":["CREATE TABLE","INSERT INTO","UPDATE","SELECT","ORDER BY","LIMIT"],"keywords":["CREATE TABLE","INSERT INTO","UPDATE","SELECT","ORDER BY","LIMIT","OFFSET"],"description":"Construct an enterprise B2B SaaS subscription table \`saas_subscriptions\` with primary key \`id\` (BIGINT UNSIGNED AUTO_INCREMENT), tenant ID (VARCHAR(20) NOT NULL UNIQUE), company name, plan tier ('FREE', 'PRO_MONTHLY', 'ENTERPRISE_ANNUAL'), monthly recurring revenue (MRR) in USD, auto_renewal_enabled (1 or 0), subscription_start_date, next_billing_date, last_login_date, and churn_risk_flag ('LOW', 'MEDIUM', 'HIGH'). Insert 8 B2B tenant records. Update churn risk to 'HIGH' for all accounts on 'PRO_MONTHLY' whose last login is before '2026-08-15'. Formulate an executive query retrieving the Top 3 highest revenue-generating ACTIVE accounts having auto_renewal_enabled = 1, ordered by MRR descending with custom aliased headers.","schemaDetails":"TABLE: saas_subscriptions\\n  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\\n  tenant_id VARCHAR(20) NOT NULL UNIQUE\\n  company_name VARCHAR(100) NOT NULL\\n  plan_tier VARCHAR(30) NOT NULL\\n  mrr_usd DECIMAL(10,2) NOT NULL\\n  auto_renewal TINYINT(1) DEFAULT 1\\n  start_date DATE NOT NULL\\n  next_billing_date DATE NOT NULL\\n  last_login DATE NOT NULL\\n  churn_risk VARCHAR(15) DEFAULT 'LOW'","exampleText":"UPDATE ... WHERE plan_tier = 'PRO_MONTHLY' AND last_login < '2026-08-15'; Query: auto_renewal = 1 AND churn_risk != 'HIGH' ORDER BY mrr_usd DESC LIMIT 3.","exampleOutput":"+----+--------------------+-------------------+-------------------+---------------+-------------------+\\n| ID | Account ID         | Company           | Plan Tier         | Monthly Rev   | Next Billing Date |\\n+----+--------------------+-------------------+-------------------+---------------+-------------------+\\n|  1 | TNT-US-9018        | FinTech Global Inc| ENTERPRISE_ANNUAL |      $4500.00 | 2027-08-01        |\\n|  2 | TNT-IN-4412        | Nexa Logistics    | ENTERPRISE_ANNUAL |      $3200.00 | 2027-06-15        |\\n|  3 | TNT-EU-1102        | CloudScale AI     | PRO_MONTHLY       |       $899.00 | 2026-10-01        |\\n+----+--------------------+-------------------+-------------------+---------------+-------------------+","logicExplanation":"1. **Primary Key Standard**: \`id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY\` alongside unique natural key \`tenant_id\`.\\n2. **Full DDL Schema**: Complete table declaration with \`DECIMAL(10,2)\` currency and \`TINYINT(1)\` boolean flags.\\n3. **DML Bulk Inserts**: Multi-row record seeding.\\n4. **Conditional Batch Update**: Identifies inactive tenants to trigger retention workflows.\\n5. **Executive DQL Reporting**: Filters active, renewing accounts and uses \`CONCAT('$', mrr_usd)\` alongside \`ORDER BY mrr_usd DESC LIMIT 3\`.","answerFile":"answers/20_saas_subscription_lifecycle.sql","codeExplanation":"• \`id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT\`: Primary key for multi-tenant SaaS accounts.\\n• \`CONCAT('$', mrr_usd) AS 'Monthly Rev'\`: Formats currency symbols directly in SQL.\\n• \`WHERE auto_renewal = 1 AND churn_risk != 'HIGH'\`: Retains healthy accounts.\\n• \`ORDER BY mrr_usd DESC LIMIT 3\`: Delivers high-level C-suite revenue metrics.","learningOutcome":"Synthesize end-to-end database lifecycle operations: DDL table design with BIGINT UNSIGNED keys, DML batch mutations, conditional state updates, and formatted DQL executive queries."}]`),K={projectCategory:Ye,subject:Ge,board:Fe,class:"Module 001_002: SQL Fundamentals",moduleSlug:Ve,tools:Ke,institute:Qe,projects:We},qe=[{question:"Why should we always use DECIMAL instead of FLOAT or DOUBLE for financial amounts in MySQL schemas?",shortAnswer:"DECIMAL stores exact fixed-point numbers, preventing binary floating-point rounding errors and paisa discrepancies in financial balances.",explanation:"FLOAT and DOUBLE are binary approximations governed by IEEE 754. In contrast, DECIMAL stores exact base-10 digits in binary packs, ensuring that monetary transactions, invoice totals, and account balances remain 100% mathematically exact.",hint:"Think about financial audits and preventing fractional cent/paisa rounding errors.",level:"basic",codeExample:"unit_price DECIMAL(10, 2) NOT NULL"},{question:"Why does `WHERE discharge_date = NULL` return no rows, and what is the correct syntax?",shortAnswer:"In three-valued SQL logic, comparison with NULL yields UNKNOWN. The correct syntax is `WHERE discharge_date IS NULL`.",explanation:"In SQL, NULL represents the absence of a value or an unknown state. Comparing anything to NULL with '=' evaluates to UNKNOWN (neither TRUE nor FALSE). To check for the presence or absence of NULL, use `IS NULL` or `IS NOT NULL`.",hint:"SQL uses three-valued logic: TRUE, FALSE, and UNKNOWN.",level:"basic",codeExample:"SELECT * FROM admissions WHERE discharge_date IS NULL;"},{question:"What is the structural difference between `TRUNCATE TABLE` and `DROP TABLE` in MySQL?",shortAnswer:"TRUNCATE deletes all rows and resets AUTO_INCREMENT while preserving the table schema; DROP deletes both data and the schema definition.",explanation:"TRUNCATE TABLE is a fast DDL command that deallocates data pages and recreates the table empty, keeping column definitions, indexes, and constraints intact. DROP TABLE permanently wipes the data and deletes the table definition from the data dictionary.",hint:"Emptying a filing cabinet vs throwing the entire filing cabinet into the incinerator.",level:"moderate",codeExample:`TRUNCATE TABLE temp_leads; -- Keeps structure
DROP TABLE temp_leads;     -- Deletes structure`},{question:"How does the single-character wildcard '_' differ from the multi-character wildcard '%' in SQL LIKE queries?",shortAnswer:"'_' matches exactly ONE single character, whereas '%' matches zero, one, or multiple characters.",explanation:"Pattern `EXP-_____` requires 'EXP-' followed by exactly 5 characters (e.g. 'EXP-10492'). In contrast, `EXP-%` would match 'EXP-1', 'EXP-10492', or 'EXP-ANYTHING'.",hint:"Exact character count matching vs arbitrary variable length matching.",level:"moderate",codeExample:"WHERE tracking_no LIKE 'EXP-_____'; -- Exactly 5 characters after hyphen"},{question:"How do you calculate the LIMIT and OFFSET parameters for Page N in SQL pagination?",shortAnswer:"For Page N with page size S, LIMIT is S and OFFSET is (N - 1) * S.",explanation:"To implement pagination for a web application displaying 10 items per page: Page 1 uses `LIMIT 10 OFFSET 0`, Page 2 uses `LIMIT 10 OFFSET 10`, and Page 3 uses `LIMIT 10 OFFSET 20`.",hint:"Offset is the number of preceding records to skip.",level:"moderate",codeExample:`-- Page 2 with 3 items per page:
SELECT * FROM movies ORDER BY imdb_rating DESC LIMIT 3 OFFSET 3;`}],Xe=`================================================================================\r
CODER & ACCOTAX - RDBMS USING MYSQL STUDY NOTES\r
MODULE 001_002: SQL FUNDAMENTALS - TOPIC 18: PRACTICAL SQL PROJECTS & CASE STUDIES\r
FACULTY: SUKANTA HUI | BARRACKPORE & NAIHATI, WEST BENGAL, INDIA\r
================================================================================\r
\r
1. OVERVIEW OF SQL PRACTICAL PROJECTS\r
--------------------------------------------------------------------------------\r
Practical database engineering requires synthesizing DDL schema modeling, DML\r
data manipulation, and DQL data querying to address real-world business scenarios:\r
  • DDL (Data Definition Language): CREATE TABLE, ALTER TABLE, DROP, TRUNCATE\r
  • DML (Data Manipulation Language): INSERT INTO, UPDATE, DELETE\r
  • DQL (Data Query Language): SELECT, WHERE, ORDER BY, LIMIT, OFFSET, AS\r
\r
2. SUMMARY OF THE 20 PRACTICAL PROJECT CASE STUDIES\r
--------------------------------------------------------------------------------\r
01. E-Commerce Product Catalog: Schema design, financial DECIMAL, WHERE, ORDER BY.\r
02. Hospital Inpatient Care: Nullability handling (IS NULL) and date ranges.\r
03. University Student Grading: Schema evolution using ALTER TABLE (ADD & MODIFY).\r
04. Banking High-Value Audit: Transaction tracking, filtering, ORDER BY DESC, LIMIT.\r
05. Corporate HR Directory: Set membership (IN), manager hierarchy, multi-column sorting.\r
06. Airline Flight Schedule: Pattern matching (LIKE with %), TIME data type, fare filter.\r
07. OTT Movie Platform: Paginated catalog browsing (LIMIT / OFFSET) & DISTINCT genres.\r
08. Luxury Hotel Bookings: Staging table maintenance (TRUNCATE vs DROP) & stay billing.\r
09. Express Courier Logistics: Strict character length pattern matching (LIKE with '_').\r
10. Central Digital Library: Temporal audits of overdue loans against cutoff dates.\r
11. Pharmacy Batch Inventory: Multi-risk analysis using boolean OR (expiry OR shortage).\r
12. Food Delivery Restaurant Menu: Boolean TINYINT(1) filtering and reverse multi-sort.\r
13. Automobile Dealership: MySQL 8.0+ column renaming and column dropping.\r
14. Real Estate Property Finder: Spatial neighborhood sets combined with budget bounds.\r
15. Fitness Club Member Directory: Renewal date updates and telecom prefix search.\r
16. Online Examination Portal: Academic remedial scoring and disjunctive logic.\r
17. Concert Ticket Booking: Contact data auditing with IS NULL and IS NOT NULL.\r
18. Smart Meter Utility Billing: Commercial and industrial power billing threshold analysis.\r
19. IT Job Candidate Pipeline: ATS shortlisting using experience bounds & skill LIKE.\r
20. SaaS Cloud Subscription: End-to-end B2B schema, batch inserts, mutations & C-level DQL.\r
\r
3. GOLDEN RULES FOR SQL PRODUCTION SCRIPTS\r
--------------------------------------------------------------------------------\r
  • Use Exact Decimals: Always prefer DECIMAL(M, D) over FLOAT for currency and balances.\r
  • Three-Valued Logic: Use IS NULL / IS NOT NULL; never use '= NULL'.\r
  • Operator Grouping: Always enclose OR expressions in parentheses when combined with AND.\r
  • Index Optimization: In queries with ORDER BY, ensure sorted columns align with indexes.\r
  • Safe Deletions: Distinguish between TRUNCATE (keeps schema) and DROP (destroys table).\r
\r
================================================================================\r
END OF STUDY NOTES - CODER & ACCOTAX\r
================================================================================\r
`;function tn(){const[o,T]=l.useState(null);return l.useEffect(()=>{const u=Object.assign({"./topic18_files/answers/01_ecommerce_product_order.sql":Re,"./topic18_files/answers/02_hospital_inpatient_admissions.sql":pe,"./topic18_files/answers/03_university_student_grading.sql":Le,"./topic18_files/answers/04_banking_transaction_audit.sql":ge,"./topic18_files/answers/05_corporate_hr_payroll.sql":he,"./topic18_files/answers/06_airline_flight_schedule.sql":Se,"./topic18_files/answers/07_ott_movie_catalog_pagination.sql":ye,"./topic18_files/answers/08_hotel_room_reservations.sql":De,"./topic18_files/answers/09_courier_shipment_tracking.sql":Ce,"./topic18_files/answers/10_library_circulation_overdue.sql":xe,"./topic18_files/answers/11_pharmacy_batch_inventory.sql":Oe,"./topic18_files/answers/12_food_delivery_menu_filter.sql":be,"./topic18_files/answers/13_automobile_inventory_refactor.sql":Ue,"./topic18_files/answers/14_real_estate_property_matcher.sql":fe,"./topic18_files/answers/15_gym_membership_directory.sql":Me,"./topic18_files/answers/16_exam_result_classification.sql":ke,"./topic18_files/answers/17_event_ticketing_audit.sql":Be,"./topic18_files/answers/18_power_utility_billing.sql":Pe,"./topic18_files/answers/19_job_recruitment_shortlist.sql":we,"./topic18_files/answers/20_saas_subscription_lifecycle.sql":ve}),N={};Object.keys(u).forEach(s=>{const E=s.split("/").pop();N[E]=u[s]});const d=K.projects.map(s=>{const r=(s.answerFile||"").split("/").pop(),a=N[r];return{...s,answer:a||`-- SQL Solution for ${s.title}
-- File "${r}" will be generated automatically.`}});T({...K,projects:d})},[]),o?e.jsxs("div",{className:"space-y-12",children:[e.jsx(je,{data:o}),e.jsxs("div",{className:"space-y-8 pt-8 border-t border-slate-800",children:[e.jsx(Ie,{questions:qe}),e.jsx(ue,{}),e.jsx(_e,{content:Xe})]})]}):e.jsx("div",{className:"p-8 text-slate-400 flex items-center justify-center min-h-[350px]",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{className:"text-sm font-medium",children:"Loading SQL Practical Database Projects..."})]})})}export{tn as default};
