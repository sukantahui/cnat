import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * ============================================================================\r
 * Java Core Tutorial - Module 002_001: Classes, Objects, Memory & Encapsulation\r
 * Topic 16: Real-World OOP Modeling: BankAccount, Employee, Product, Car Entities\r
 * ============================================================================\r
 *\r
 * Educator & Mentor: Sukanta Hui\r
 * Academic Hubs: Barrackpore, Naihati, Shyamnagar, Ichapur (West Bengal)\r
 * Students Featured: Swadeep, Tuhina, Abhronila, Debangshu\r
 *\r
 * ----------------------------------------------------------------------------\r
 * Conceptual Overview: Enterprise Domain Modeling in Pure Java OOP\r
 * ----------------------------------------------------------------------------\r
 * 1. The Art of Real-World OOP Modeling:\r
 *    - Real-world domain entities are NOT mere data holders.\r
 *    - They are living autonomous software agents that encapsulate:\r
 *      * Identity     : Unique unchangeable identifier (e.g. Account Number, VIN, SKU, EmpId).\r
 *      * State        : Private mutable & immutable fields with guarded invariants.\r
 *      * Behaviors    : Rich business operations ("Tell, Don't Ask") enforcing business truth.\r
 *\r
 * 2. The 4 Canonical Entities Demonstrated in this Module:\r
 *    - Entity 1: BankAccount (Financial invariants, minimum balance, inter-account transfers).\r
 *    - Entity 2: Employee    (Salary computation, HRA/DA tax brackets, performance increments).\r
 *    - Entity 3: Product     (Inventory stock management, SKU validation, sales fulfillment).\r
 *    - Entity 4: AutomobileCar (Finite state machine: ignition, acceleration, braking, fuel).\r
 * ============================================================================\r
 */\r
\r
package com.coderaccotax.javatutorial.oop;\r
\r
import java.util.ArrayList;\r
import java.util.Collections;\r
import java.util.List;\r
import java.util.Objects;\r
\r
public class RealWorldOopModelingEntitiesDemo {\r
\r
    // ========================================================================\r
    // 1. DOMAIN ENTITY: BankAccount (Financial Invariant & Transfer Guard)\r
    // ========================================================================\r
    public static class BankAccount {\r
        private static final double MINIMUM_MAINTENANCE_BALANCE_INR = 1000.00;\r
\r
        private final String accountNumber;\r
        private final String accountHolderName;\r
        private final String branchCampus;\r
        private double balanceInr;\r
        private final List<String> transactionHistory;\r
\r
        public BankAccount(String accountNumber, String accountHolderName, String branchCampus, double initialDepositInr) {\r
            Objects.requireNonNull(accountNumber, "Account number cannot be null.");\r
            Objects.requireNonNull(accountHolderName, "Holder name cannot be null.");\r
            if (initialDepositInr < MINIMUM_MAINTENANCE_BALANCE_INR) {\r
                throw new IllegalArgumentException("Initial deposit must be at least minimum balance: ₹" + MINIMUM_MAINTENANCE_BALANCE_INR);\r
            }\r
            this.accountNumber = accountNumber;\r
            this.accountHolderName = accountHolderName.trim();\r
            this.branchCampus = branchCampus;\r
            this.balanceInr = initialDepositInr;\r
            this.transactionHistory = new ArrayList<>();\r
            recordTxn("Account opened with initial deposit: ₹" + String.format("%.2f", initialDepositInr));\r
        }\r
\r
        public boolean deposit(double amountInr) {\r
            if (amountInr <= 0.0) {\r
                System.out.println("  [Bank Deposit REJECTED] Amount must be positive: ₹" + amountInr);\r
                return false;\r
            }\r
            this.balanceInr += amountInr;\r
            recordTxn("Deposit (+): ₹" + String.format("%.2f", amountInr));\r
            return true;\r
        }\r
\r
        public boolean withdraw(double amountInr) {\r
            if (amountInr <= 0.0) return false;\r
            if (this.balanceInr - amountInr < MINIMUM_MAINTENANCE_BALANCE_INR) {\r
                System.out.printf("  [Bank Withdrawal REJECTED] Invariant Guard: Balance cannot fall below ₹%,.2f. Requested: ₹%,.2f | Available: ₹%,.2f\\n",\r
                        MINIMUM_MAINTENANCE_BALANCE_INR, amountInr, this.balanceInr);\r
                return false;\r
            }\r
            this.balanceInr -= amountInr;\r
            recordTxn("Withdrawal (-): ₹" + String.format("%.2f", amountInr));\r
            return true;\r
        }\r
\r
        // Inter-account transfer honoring atomicity\r
        public boolean transferTo(BankAccount targetAccount, double amountInr) {\r
            Objects.requireNonNull(targetAccount, "Target account cannot be null.");\r
            if (this == targetAccount) {\r
                System.out.println("  [Transfer REJECTED] Cannot transfer funds to the same account!");\r
                return false;\r
            }\r
            if (this.withdraw(amountInr)) {\r
                targetAccount.deposit(amountInr);\r
                recordTxn("Transfer Out (-): ₹" + String.format("%.2f", amountInr) + " to Acc " + targetAccount.getAccountNumber());\r
                targetAccount.recordTxn("Transfer In (+): ₹" + String.format("%.2f", amountInr) + " from Acc " + this.accountNumber);\r
                System.out.printf("  [Transfer SUCCESS] ₹%,.2f transferred from %s (Acc %s) to %s (Acc %s)\\n",\r
                        amountInr, this.accountHolderName, this.accountNumber, targetAccount.getAccountHolderName(), targetAccount.getAccountNumber());\r
                return true;\r
            }\r
            return false;\r
        }\r
\r
        private void recordTxn(String entry) {\r
            this.transactionHistory.add(entry);\r
        }\r
\r
        public String getAccountNumber() { return accountNumber; }\r
        public String getAccountHolderName() { return accountHolderName; }\r
        public double getBalanceInr() { return balanceInr; }\r
        public List<String> getTransactionHistory() { return Collections.unmodifiableList(transactionHistory); }\r
\r
        public void printSummary() {\r
            System.out.printf("  [BankAccount %s] Holder: %-15s | Branch: %-15s | Balance: ₹%,.2f\\n",\r
                    accountNumber, accountHolderName, branchCampus, balanceInr);\r
        }\r
    }\r
\r
    // ========================================================================\r
    // 2. DOMAIN ENTITY: Employee (Payroll & Performance Logic)\r
    // ========================================================================\r
    public static class Employee {\r
        private final int employeeId;\r
        private String employeeName;\r
        private String department;\r
        private double monthlyBasicSalaryInr;\r
        private double performanceRatingScore; // 1.0 to 5.0\r
\r
        public Employee(int id, String name, String dept, double basicSalary) {\r
            if (id <= 0) throw new IllegalArgumentException("Invalid Employee ID.");\r
            this.employeeId = id;\r
            this.employeeName = Objects.requireNonNull(name, "Name required").trim();\r
            this.department = Objects.requireNonNull(dept, "Department required").trim();\r
            setMonthlyBasicSalaryInr(basicSalary);\r
            this.performanceRatingScore = 3.0; // Default average rating\r
        }\r
\r
        public void setMonthlyBasicSalaryInr(double basicSalary) {\r
            if (basicSalary < 15000.00) {\r
                throw new IllegalArgumentException("Minimum wage threshold is ₹15,000.00. Supplied: ₹" + basicSalary);\r
            }\r
            this.monthlyBasicSalaryInr = basicSalary;\r
        }\r
\r
        public void evaluatePerformance(double ratingScore) {\r
            if (ratingScore < 1.0 || ratingScore > 5.0) {\r
                throw new IllegalArgumentException("Rating score must be between 1.0 and 5.0.");\r
            }\r
            this.performanceRatingScore = ratingScore;\r
            // High performance triggers salary increment\r
            if (ratingScore >= 4.5) {\r
                double increment = this.monthlyBasicSalaryInr * 0.15; // 15% merit raise\r
                this.monthlyBasicSalaryInr += increment;\r
                System.out.printf("  [Merit Promotion] %s awarded 15%% raise! New Basic: ₹%,.2f\\n", employeeName, monthlyBasicSalaryInr);\r
            }\r
        }\r
\r
        // Computed Payroll Allowances\r
        public double calculateHraAllowance() { return monthlyBasicSalaryInr * 0.40; } // 40% HRA\r
        public double calculateDaAllowance() { return monthlyBasicSalaryInr * 0.20; }  // 20% DA\r
        public double calculateGrossMonthlySalary() {\r
            return monthlyBasicSalaryInr + calculateHraAllowance() + calculateDaAllowance();\r
        }\r
        public double calculateAnnualCostToCompany() {\r
            return (calculateGrossMonthlySalary() * 12.0) + (monthlyBasicSalaryInr * 1.5); // Bonus\r
        }\r
\r
        public int getEmployeeId() { return employeeId; }\r
        public String getEmployeeName() { return employeeName; }\r
        public String getDepartment() { return department; }\r
        public double getMonthlyBasicSalaryInr() { return monthlyBasicSalaryInr; }\r
        public double getPerformanceRatingScore() { return performanceRatingScore; }\r
\r
        public void printPayrollSlip() {\r
            System.out.printf("  [Employee EMP-%04d] %-15s | Dept: %-10s | Basic: ₹%,.2f | Gross: ₹%,.2f | CTC: ₹%,.2f (Rating: %.1f/5)\\n",\r
                    employeeId, employeeName, department, monthlyBasicSalaryInr, calculateGrossMonthlySalary(), calculateAnnualCostToCompany(), performanceRatingScore);\r
        }\r
    }\r
\r
    // ========================================================================\r
    // 3. DOMAIN ENTITY: Product (E-Commerce Inventory & Order Fulfillment)\r
    // ========================================================================\r
    public static class Product {\r
        private final String skuCode;\r
        private String productTitle;\r
        private String category;\r
        private double unitPriceInr;\r
        private int stockQuantityInStore;\r
\r
        public Product(String sku, String title, String category, double price, int initialStock) {\r
            Objects.requireNonNull(sku, "SKU required");\r
            if (price < 0.0) throw new IllegalArgumentException("Price cannot be negative.");\r
            if (initialStock < 0) throw new IllegalArgumentException("Stock cannot be negative.");\r
            this.skuCode = sku;\r
            this.productTitle = title;\r
            this.category = category;\r
            this.unitPriceInr = price;\r
            this.stockQuantityInStore = initialStock;\r
        }\r
\r
        public boolean fulfillCustomerOrder(int orderQuantity) {\r
            if (orderQuantity <= 0) return false;\r
            if (orderQuantity > stockQuantityInStore) {\r
                System.out.printf("  [Inventory SHORTAGE] SKU %s (%s): Requested %d units, but only %d in stock!\\n",\r
                        skuCode, productTitle, orderQuantity, stockQuantityInStore);\r
                return false;\r
            }\r
            this.stockQuantityInStore -= orderQuantity;\r
            double orderValue = orderQuantity * this.unitPriceInr;\r
            System.out.printf("  [Order FULFILLED] %d x '%s' fulfilled | Total: ₹%,.2f | Remaining Stock: %d\\n",\r
                    orderQuantity, productTitle, orderValue, stockQuantityInStore);\r
            return true;\r
        }\r
\r
        public void restockInventory(int incomingUnits) {\r
            if (incomingUnits <= 0) throw new IllegalArgumentException("Restock units must be positive.");\r
            this.stockQuantityInStore += incomingUnits;\r
            System.out.printf("  [Restocked] SKU %s received %d units. New Stock: %d\\n", skuCode, incomingUnits, stockQuantityInStore);\r
        }\r
\r
        public String getSkuCode() { return skuCode; }\r
        public String getProductTitle() { return productTitle; }\r
        public double getUnitPriceInr() { return unitPriceInr; }\r
        public int getStockQuantityInStore() { return stockQuantityInStore; }\r
\r
        public void printCatalogCard() {\r
            System.out.printf("  [Product SKU: %-10s] %-30s | Category: %-12s | Price: ₹%,.2f | Stock: %d\\n",\r
                    skuCode, productTitle, category, unitPriceInr, stockQuantityInStore);\r
        }\r
    }\r
\r
    // ========================================================================\r
    // 4. DOMAIN ENTITY: AutomobileCar (State Machine: Ignition, Speed, Fuel)\r
    // ========================================================================\r
    public static class AutomobileCar {\r
        private final String vehicleVinNumber;\r
        private final String brandAndModel;\r
        private boolean isEngineRunning = false;\r
        private int currentSpeedKmPerHour = 0;\r
        private double fuelTankCapacityLitres = 50.0;\r
        private double currentFuelLevelLitres;\r
\r
        public AutomobileCar(String vin, String model, double initialFuelLitres) {\r
            this.vehicleVinNumber = Objects.requireNonNull(vin, "VIN required");\r
            this.brandAndModel = Objects.requireNonNull(model, "Model required");\r
            this.currentFuelLevelLitres = Math.min(initialFuelLitres, fuelTankCapacityLitres);\r
        }\r
\r
        public boolean startEngine() {\r
            if (isEngineRunning) {\r
                System.out.println("  [Car Warning] Engine is already running!");\r
                return false;\r
            }\r
            if (currentFuelLevelLitres <= 0.5) {\r
                System.out.println("  [Engine START FAILED] Out of fuel! Please refuel.");\r
                return false;\r
            }\r
            this.isEngineRunning = true;\r
            System.out.printf("  [Engine STARTED] %s engine ignited. Ready to drive.\\n", brandAndModel);\r
            return true;\r
        }\r
\r
        public void accelerate(int kmPerHourDelta) {\r
            if (!isEngineRunning) {\r
                System.out.println("  [Acceleration BLOCKED] Cannot accelerate: Engine is OFF!");\r
                return;\r
            }\r
            if (currentFuelLevelLitres <= 0.0) {\r
                stopEngine();\r
                System.out.println("  [Engine STALLED] Out of fuel while driving!");\r
                return;\r
            }\r
            this.currentSpeedKmPerHour = Math.min(220, this.currentSpeedKmPerHour + kmPerHourDelta);\r
            this.currentFuelLevelLitres = Math.max(0.0, this.currentFuelLevelLitres - (kmPerHourDelta * 0.05));\r
            System.out.printf("  [Accelerating] Speed: %d km/h | Fuel: %.2f L remaining\\n",\r
                    currentSpeedKmPerHour, currentFuelLevelLitres);\r
        }\r
\r
        public void brake(int kmPerHourDelta) {\r
            this.currentSpeedKmPerHour = Math.max(0, this.currentSpeedKmPerHour - kmPerHourDelta);\r
            System.out.printf("  [Braking Applied] Speed slowed to: %d km/h\\n", currentSpeedKmPerHour);\r
        }\r
\r
        public void stopEngine() {\r
            this.isEngineRunning = false;\r
            this.currentSpeedKmPerHour = 0;\r
            System.out.printf("  [Engine STOPPED] %s engine turned off.\\n", brandAndModel);\r
        }\r
\r
        public void refuel(double litres) {\r
            if (litres <= 0) return;\r
            this.currentFuelLevelLitres = Math.min(fuelTankCapacityLitres, this.currentFuelLevelLitres + litres);\r
            System.out.printf("  [Refueled] Added %.1f L. Tank Level: %.1f / %.1f L\\n",\r
                    litres, currentFuelLevelLitres, fuelTankCapacityLitres);\r
        }\r
\r
        public void printDashboard() {\r
            System.out.printf("  [Car VIN: %s] %-20s | Engine: %-3s | Speed: %3d km/h | Fuel: %4.1f L\\n",\r
                    vehicleVinNumber, brandAndModel, (isEngineRunning ? "ON" : "OFF"), currentSpeedKmPerHour, currentFuelLevelLitres);\r
        }\r
    }\r
\r
    // ------------------------------------------------------------------------\r
    // Main Method: Comprehensive Real-World OOP Modeling Demonstrations\r
    // ------------------------------------------------------------------------\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" JAVA OOP: REAL-WORLD DOMAIN MODELING (BankAccount, Employee, Product, Car)");\r
        System.out.println(" Educator: Sukanta Hui | Campus: Barrackpore, Naihati, Shyamnagar");\r
        System.out.println("==========================================================================\\n");\r
\r
        // --------------------------------------------------------------------\r
        // 1. BANK ACCOUNT DEMONSTRATION\r
        // --------------------------------------------------------------------\r
        System.out.println(">>> 1. REAL-WORLD MODELING: BankAccount Entity (Inter-Account Transfers)");\r
        BankAccount swadeepAcc = new BankAccount("SB-WB-1001", "Swadeep Paul", "Barrackpore Hub", 15000.00);\r
        BankAccount tuhinaAcc  = new BankAccount("SB-WB-1002", "Tuhina Das", "Naihati Hub", 8000.00);\r
\r
        swadeepAcc.printSummary();\r
        tuhinaAcc.printSummary();\r
\r
        System.out.println("\\nExecuting Inter-Account Transfer (Swadeep -> Tuhina: ₹5,000):");\r
        swadeepAcc.transferTo(tuhinaAcc, 5000.00);\r
\r
        System.out.println("\\nAttempting Illegal Overdraw (Breaching ₹1,000 Minimum Balance Invariant):");\r
        swadeepAcc.withdraw(12000.00);\r
\r
        swadeepAcc.printSummary();\r
        tuhinaAcc.printSummary();\r
\r
        // --------------------------------------------------------------------\r
        // 2. EMPLOYEE PAYROLL & PERFORMANCE DEMONSTRATION\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> 2. REAL-WORLD MODELING: Employee Entity (Payroll & Performance Raises)");\r
        Employee abhronila = new Employee(501, "Abhronila Ray", "Engineering", 65000.00);\r
        Employee debangshu = new Employee(502, "Debangshu Sen", "Cloud Architecture", 80000.00);\r
\r
        abhronila.printPayrollSlip();\r
        debangshu.printPayrollSlip();\r
\r
        System.out.println("\\nAnnual Appraisal Cycle: Evaluating Abhronila (Rating 4.8/5.0):");\r
        abhronila.evaluatePerformance(4.8); // Triggers merit promotion\r
        abhronila.printPayrollSlip();\r
\r
        // --------------------------------------------------------------------\r
        // 3. PRODUCT INVENTORY & ORDER FULFILLMENT DEMONSTRATION\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> 3. REAL-WORLD MODELING: Product Entity (Inventory & Order Fulfillment)");\r
        Product javaBook = new Product("SKU-JAVA-01", "Mastering Java 21 Enterprise", "Books", 850.00, 15);\r
        javaBook.printCatalogCard();\r
\r
        System.out.println("\\nProcessing customer orders:");\r
        javaBook.fulfillCustomerOrder(5);  // Successful sale\r
        javaBook.fulfillCustomerOrder(12); // Shortage rejection!\r
        javaBook.restockInventory(20);     // Warehouse restock\r
        javaBook.fulfillCustomerOrder(12); // Successful after restock\r
        javaBook.printCatalogCard();\r
\r
        // --------------------------------------------------------------------\r
        // 4. AUTOMOBILE CAR STATE MACHINE DEMONSTRATION\r
        // --------------------------------------------------------------------\r
        System.out.println("\\n>>> 4. REAL-WORLD MODELING: AutomobileCar Entity (Finite State Machine)");\r
        AutomobileCar mySedan = new AutomobileCar("VIN-WB-88992211", "Tata Harrier EV", 25.0);\r
        mySedan.printDashboard();\r
\r
        System.out.println("\\nAttempting acceleration while engine is OFF:");\r
        mySedan.accelerate(40); // Blocked\r
\r
        System.out.println("\\nStarting engine and accelerating on Kalyani Expressway:");\r
        mySedan.startEngine();\r
        mySedan.accelerate(60);\r
        mySedan.accelerate(40);\r
        mySedan.brake(30);\r
        mySedan.stopEngine();\r
        mySedan.printDashboard();\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" REAL-WORLD OOP MODELING DEMONSTRATION COMPLETE - BARRACKPORE");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_001: Classes, Objects, Memory Allocation & Encapsulation\r
Topic 16: Real-World OOP Modeling: BankAccount, Employee, Product, Car Entities\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 3 PILLARS OF DOMAIN ENTITY MODELING:\r
   -----------------------------------------------------------------------------\r
   PILLAR 1: IMMUTABLE IDENTITY\r
             - Unchangeable unique identifier (\`accountNumber\`, \`VIN\`, \`SKU\`, \`empId\`).\r
             - Declared \`final\` and non-null (\`Objects.requireNonNull\`).\r
\r
   PILLAR 2: ENCAPSULATED PRIVATE STATE\r
             - Private fields guarded by business invariants (\`balance >= MIN_BALANCE\`).\r
             - Defensive copies for collections (\`Collections.unmodifiableList\`).\r
\r
   PILLAR 3: RICH DOMAIN BEHAVIORS ("TELL, DON'T ASK")\r
             - Mutators enforce rules internally (\`withdraw()\`, \`accelerate()\`, \`fulfill()\`).\r
             - Self-defending against illegal state transitions.\r
   -----------------------------------------------------------------------------\r
\r
2. THE 4 CANONICAL DOMAIN ENTITIES:\r
   a) BankAccount:\r
      - Invariant: Balance cannot fall below \`MIN_BALANCE\` (₹1,000.00).\r
      - Operation: Atomic \`transferTo(target, amount)\` with self-transfer guards.\r
      - Audit    : Unmodifiable transaction log.\r
\r
   b) Employee:\r
      - Invariant: Salary must meet statutory minimum wage (₹15,000.00).\r
      - Derived  : HRA (40%), DA (20%), Gross, and CTC computed on the fly.\r
      - Appraisal: \`evaluatePerformance()\` grants 15% raise for ratings >= 4.5.\r
\r
   c) Product:\r
      - Invariant: Inventory stock quantity \`stock >= 0\`.\r
      - Operation: \`fulfillCustomerOrder(qty)\` rejects shortages; \`restockInventory(units)\`.\r
\r
   d) AutomobileCar:\r
      - FSM State: Ignition ON/OFF state machine.\r
      - Dynamics : Speed clamped (0 - 220 km/h), fuel consumption on acceleration.\r
      - Safety   : Blocks acceleration when engine is OFF; auto-stalls on 0 fuel.\r
\r
3. SUKANTA HUI'S LIVING AGENT PRINCIPLE:\r
   - "Never design an entity as a passive corpse waiting for outside code to poke its fields.\r
      Design it as a living, intelligent agent that knows its rules, protects its honour,\r
      and defends its domain truth."\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What are the 3 essential components of an Enterprise Domain Entity in OOP?",shortAnswer:"1. Unique Identity (immutable ID), 2. Encapsulated State (private fields & invariants), and 3. Domain Behaviors ('Tell, Don't Ask' methods).",explanation:"Unlike simple data structures (structs or hashes), a true OOP domain entity has an unchangeable identity (account number, VIN, SKU), private fields guarded by business invariants, and methods that model real-world domain workflows.",hint:"Identity + Encapsulated State + Domain Behaviors.",level:"Beginner",codeExample:`public class BankAccount {
    private final String accountNumber; // Identity
    private double balance;             // State
    public boolean deposit(...) { ... } // Behavior
}`},{question:"How does the BankAccount entity enforce the Minimum Balance Invariant?",shortAnswer:"By asserting 'balance - withdrawalAmount >= MIN_BALANCE' in the withdraw() method before executing the deduction.",explanation:"If an attempted withdrawal would cause the balance to drop below ₹1,000, the method halts, logs the rejection, and leaves the account balance completely untouched.",hint:"Invariant check before mutating balance.",level:"Beginner",codeExample:"if (this.balance - amount < MIN_BALANCE) return false; // Invariant Guard"},{question:"How does the BankAccount entity guarantee Atomic Inter-Account Transfers ('transferTo')?",shortAnswer:"By only crediting the target account IF the source account withdrawal succeeds completely.",explanation:"If the source account has insufficient funds, withdrawal returns false and the target deposit is never called. This prevents phantom money creation or debit-without-credit bugs.",hint:"Source withdrawal must succeed before target deposit executes.",level:"Intermediate",codeExample:`public boolean transferTo(BankAccount target, double amt) {
    if (this.withdraw(amt)) { target.deposit(amt); return true; }
    return false;
}`},{question:"What prevents an account holder from transferring money to their OWN same account?",shortAnswer:"An identity check: 'if (this == targetAccount) return false;'.",explanation:"Self-transfers can cause redundant transaction logs and concurrency locking deadlocks in multi-threaded environments. Guarding against self-transfers maintains audit hygiene.",hint:"Reference equality check: this == target.",level:"Beginner",codeExample:'if (this == targetAccount) throw new IllegalArgumentException("Cannot transfer to self");'},{question:"In the Employee entity, why are HRA and DA allowances implemented as Methods rather than stored as Fields?",shortAnswer:"Because HRA and DA are derived percentages (40% and 20%) of the basic salary; computing them on the fly eliminates data redundancy and synchronization bugs.",explanation:"If HRA were a separate field and the basic salary increased, you would have to remember to recalculate HRA manually. Methods compute values dynamically from single source of truth.",hint:"Compute derived values dynamically to prevent stale data.",level:"Intermediate",codeExample:"public double calculateHraAllowance() { return monthlyBasicSalary * 0.40; }"},{question:"How does the Employee entity model the annual appraisal and promotion workflow?",shortAnswer:"Via 'evaluatePerformance(rating)', which validates the 1.0-5.0 score and automatically triggers a 15% merit raise if score >= 4.5.",explanation:"The object encapsulates the company's promotion policy within its domain behavior, keeping the business logic inside the entity rather than scattered across external controllers.",hint:"Encapsulating compensation rules in domain methods.",level:"Beginner",codeExample:`public void evaluatePerformance(double score) {
    if (score >= 4.5) this.basicSalary *= 1.15;
}`},{question:"What is the critical Inventory Invariant in the Product entity?",shortAnswer:"'stockQuantity >= 0'; stock can never become negative during order fulfillment.",explanation:"When fulfilling an order ('fulfillCustomerOrder(qty)'), the product verifies 'qty <= stockQuantity'. If stock is insufficient, the order is rejected immediately (Inventory Shortage).",hint:"Prevent overselling by guarding stock quantity.",level:"Beginner",codeExample:"if (qty > this.stockQuantity) return false; // Prevents negative inventory"},{question:"How does the AutomobileCar entity function as a Finite State Machine (FSM)?",shortAnswer:"It manages boolean state ('isEngineRunning') and speed, blocking illegal transitions (e.g. accelerating while engine is OFF).",explanation:"The car's methods enforce state-dependent rules: accelerating is only allowed when engine is ON, engine cannot start if fuel <= 0.5L, and stopping the engine resets speed to 0.",hint:"State machine transitions: OFF → ON → ACCELERATING → BRAKING → OFF.",level:"Intermediate",codeExample:`public void accelerate(int delta) {
    if (!isEngineRunning) return; // Guard against engine-off acceleration
    this.speed += delta;
}`},{question:"Why is the vehicle VIN number or Bank Account Number marked 'final'?",shortAnswer:"Because domain entity identity is immutable and must never change throughout the object's lifetime.",explanation:"A car can change engines, color, or tires, but its VIN is permanent. Marking identity fields 'final' enforces identity immutability at compile time.",hint:"Identity immutability via final modifier.",level:"Beginner",codeExample:"private final String vehicleVinNumber;"},{question:"How does the 'Tell, Don't Ask' principle apply to Product order fulfillment?",shortAnswer:"Tell the product 'product.fulfillCustomerOrder(5)', rather than asking 'product.getStock()', subtracting externally, and calling 'product.setStock()'.",explanation:"Asking for stock and updating it externally leaks logic outside the class and invites race conditions. Telling the product to fulfill the order lets the product manage its own state safely.",hint:"Delegate behavior to the entity owning the data.",level:"Intermediate",codeExample:`// BAD (Ask): if (prod.getStock() >= 5) prod.setStock(prod.getStock() - 5);
// GOOD (Tell): prod.fulfillCustomerOrder(5);`},{question:"Why does the BankAccount transaction history return 'Collections.unmodifiableList()'?",shortAnswer:"To prevent external callers from calling .clear(), .remove(), or .add() on the account's internal transaction audit log.",explanation:"Returning an unmodifiable view preserves the audit trail's integrity, ensuring transaction records are strictly append-only and tamper-proof.",hint:"Tamper-proof audit logging view.",level:"Intermediate",codeExample:`public List<String> getTransactionHistory() {
    return Collections.unmodifiableList(this.transactionHistory);
}`},{question:"How should an entity handle currency representation in enterprise Java systems?",shortAnswer:"Use 'java.math.BigDecimal' or minor currency units (cents/paise in 'long') for production; avoid binary floating-point round-off errors.",explanation:"While 'double' is suitable for conceptual tutorials, production financial engines use BigDecimal to eliminate floating-point representation anomalies (e.g. 0.1 + 0.2 = 0.30000000000000004).",hint:"BigDecimal for precision currency arithmetic in production.",level:"Advanced",codeExample:'private BigDecimal balance = new BigDecimal("15000.00");'},{question:"What is an 'Aggregate Root' in Domain-Driven Design (DDD)?",shortAnswer:"The primary domain entity (e.g. BankAccount or Order) that acts as the gateway and invariant boundary for a cluster of associated objects.",explanation:"External components interact strictly with the Aggregate Root (BankAccount), which internally coordinates transaction entries and ledger lines.",hint:"Primary root entity guarding an entire cluster.",level:"Advanced",codeExample:"// BankAccount is the Aggregate Root managing Transaction entries"},{question:"How does the AutomobileCar simulate fuel consumption during acceleration?",shortAnswer:"Each acceleration increment deducts fuel proportionally: 'fuelLevel -= (deltaKmPerHour * 0.05)'.",explanation:"If fuel drops to 0 while driving, the car automatically stalls the engine ('stopEngine()'), demonstrating coupled multi-field state transitions.",hint:"Proportional fuel consumption based on acceleration delta.",level:"Intermediate",codeExample:`this.fuelLevel -= (delta * 0.05);
if (this.fuelLevel <= 0) stopEngine(); // Auto-stall`},{question:"Can an Employee entity contain a reference to a BankAccount for automated salary disbursement?",shortAnswer:"Yes! OOP Association allows an Employee to hold a reference to a BankAccount and deposit monthly salary directly.",explanation:"Composition and Association allow modeling real-world workflows: 'employee.disburseSalaryTo(employeeAccount)'.",hint:"Object association for payroll integration.",level:"Beginner",codeExample:`public void disburseSalary(BankAccount account) {
    account.deposit(calculateGrossMonthlySalary());
}`},{question:"Why should the Product entity check for positive incoming units in 'restockInventory'?",shortAnswer:"To prevent accidental or malicious restocks with negative numbers from decreasing stock without sales.",explanation:"Allowing 'product.restockInventory(-50)' would act as an unlogged stock deduction, corrupting inventory accounting.",hint:"Restock operations must strictly require positive units.",level:"Beginner",codeExample:'if (incomingUnits <= 0) throw new IllegalArgumentException("Units must be positive");'},{question:"What is 'Clamping' in AutomobileCar braking logic?",shortAnswer:"Ensuring speed never drops below 0 km/h: 'this.speed = Math.max(0, this.speed - delta)'.",explanation:"Braking hard should bring the car to a full stop (0 km/h) rather than causing negative velocity.",hint:"Speed bounded at minimum 0 km/h.",level:"Beginner",codeExample:"this.currentSpeedKmPerHour = Math.max(0, this.currentSpeedKmPerHour - delta);"},{question:"How does the Employee entity defend against illegal minimum wage violations in setters?",shortAnswer:"By rejecting any salary below statutory minimum wage (e.g. ₹15,000.00) with an IllegalArgumentException.",explanation:"The setter encodes labor law requirements directly into the entity, guaranteeing that no employee can ever be created or updated with an illegal sub-minimum wage.",hint:"Statutory compliance enforced in domain mutator.",level:"Intermediate",codeExample:'if (basicSalary < 15000.0) throw new IllegalArgumentException("Below minimum wage threshold");'},{question:"What is 'Value Object' vs 'Entity' in domain modeling?",shortAnswer:'An Entity is defined by its continuous identity (ID/Account No); a Value Object is defined purely by its attributes (e.g. Money(100, "INR")).',explanation:"Two BankAccounts with ₹10,000 are distinct entities because they have different account numbers. Two Money objects of ₹10,000 are interchangeable value objects.",hint:"Identity-based Entity vs Attribute-based Value Object.",level:"Advanced",codeExample:`// Entity: BankAccount(id=101) != BankAccount(id=102)
// Value Object: Money(100, "INR").equals(Money(100, "INR")) == true`},{question:"How should an entity handle concurrent modifications in multi-threaded banking systems?",shortAnswer:"By using synchronized methods, ReentrantLock, or Optimistic Locking (@Version in JPA) to serialize concurrent transactions.",explanation:"Synchronizing 'deposit' and 'withdraw' methods ensures that multiple threads attempting concurrent transfers cannot cause lost updates or negative balances.",hint:"Thread synchronization or optimistic version locks.",level:"Advanced",codeExample:"public synchronized boolean withdraw(double amt) { ... }"},{question:"Why should entity constructors enforce non-null arguments for mandatory fields?",shortAnswer:"To prevent objects from being instantiated in a 'half-baked' or corrupted state that throws NullPointerExceptions later in production.",explanation:`Using 'Objects.requireNonNull(name, "Name required")' guarantees that every live instance in memory is complete and well-formed from the moment of construction.`,hint:"Constructors establish non-null validity at birth.",level:"Beginner",codeExample:'this.accountNumber = Objects.requireNonNull(accountNumber, "Account number required");'},{question:"What is the danger of returning mutable entity references from getters?",shortAnswer:"Callers can modify the internal state of child entities directly without passing through the parent aggregate's validation rules.",explanation:"If an Order entity returns its internal List of OrderLines directly, external code can add items without recalculating order totals or applying discounts.",hint:"Encapsulate aggregate child collections.",level:"Intermediate",codeExample:"public List<OrderLine> getLines() { return Collections.unmodifiableList(lines); }"},{question:"How does the AutomobileCar entity prevent accelerating past the maximum mechanical speed limit?",shortAnswer:"By capping maximum speed at 220 km/h: 'this.speed = Math.min(220, this.speed + delta)'.",explanation:"Physical vehicle constraints are encoded in domain rules to prevent impossible virtual speeds.",hint:"Upper bound clamping at top speed.",level:"Beginner",codeExample:"this.currentSpeedKmPerHour = Math.min(220, this.currentSpeedKmPerHour + delta);"},{question:"Can an Employee entity belong to multiple departments?",shortAnswer:"If domain rules allow it, the single department string can be refactored into a 'Set<Department>' without changing unrelated public methods.",explanation:"Encapsulation allows refactoring internal department storage while maintaining backward-compatible helper methods like 'isAssignedTo(Department)'.",hint:"Refactoring internal domain associations.",level:"Intermediate",codeExample:"private Set<String> departments = new HashSet<>();"},{question:"What is 'Domain Event Publishing' and when should a BankAccount publish events?",shortAnswer:"Emitting an event notification (e.g. 'AccountOverdrawnEvent', 'MoneyTransferredEvent') whenever significant state changes occur.",explanation:"Domain events decouple entities from notification systems, allowing SMS alerts or analytics pipelines to react asynchronously to banking actions.",hint:"Decoupled domain event notifications.",level:"Advanced",codeExample:"eventPublisher.publish(new FundTransferredEvent(from, to, amount));"},{question:"Why should entity toString() methods omit sensitive security data?",shortAnswer:"To prevent accidental logging of passwords, PINs, or full national identification numbers in server log files.",explanation:"A BankAccount's toString() should display masked account numbers ('****1001') and omit private security PINs to comply with financial privacy standards.",hint:"Prevent credential leakage in logging.",level:"Beginner",codeExample:'public String toString() { return "Account[****" + accNo.substring(accNo.length()-4) + "]"; }'},{question:"How does the Product entity support catalog categorization?",shortAnswer:"By maintaining category metadata alongside pricing and stock, enabling filtered searches and category-based discounting.",explanation:"Product entities encapsulate merchandising metadata that e-commerce engines use for inventory indexing and taxation rules.",hint:"Merchandising and classification metadata.",level:"Beginner",codeExample:"public String getCategory() { return category; }"},{question:"What is 'Bidirectional Association' and why must it be handled carefully in OOP?",shortAnswer:"When two entities hold references to each other (e.g. Employee <-> Department); mutators must update both sides to prevent desynchronization.",explanation:"If an employee changes departments, the employee must be removed from the old department's employee list and added to the new department's list simultaneously.",hint:"Synchronize both sides of bidirectional links.",level:"Advanced",codeExample:"public void setDepartment(Department d) { if (dept != null) dept.remove(this); d.add(this); dept = d; }"},{question:"Why is OOP Domain Modeling superior to procedural database table scripting?",shortAnswer:"OOP unites data and business rules into autonomous, self-defending objects that prevent invalid states anywhere in the application lifecycle.",explanation:"In procedural code, business logic is scattered across hundreds of queries and scripts. In OOP, the entity itself guarantees its own integrity 24/7.",hint:"Unified data and logic vs scattered procedural scripts.",level:"Intermediate",codeExample:"// Self-defending entities maintain system truth consistently across all layers"},{question:"What is Sukanta Hui's Living Agent Principle of OOP Domain Modeling?",shortAnswer:"Never design an entity as a passive corpse waiting for outside code to poke its fields. Design it as a living, intelligent agent that knows its rules, protects its honour, and defends its domain truth.",explanation:"At the Barrackpore academy, Sukanta Hui teaches that real-world software architecture thrives when entities (BankAccounts, Employees, Products, Cars) are empowered to enforce their own invariants. When entities defend themselves, your systems run robust, bug-free, and enterprise-grade.",hint:"Living, self-defending domain agents.",level:"Beginner",codeExample:"// Sukanta Hui's Living Agent Formula: Unique Identity + Private Encapsulated State + Guarded Domain Operations"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes entityPulse {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(16, 185, 129, 0.4)); }
            50% { filter: drop-shadow(0 0 16px rgba(16, 185, 129, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-entity-pulse {
            animation: entityPulse 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_001 · Topic 16"}),e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full",children:"Enterprise Domain Modeling"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Real-World OOP Modeling: BankAccount, Employee, Product, Car Entities"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Apply the complete suite of Object-Oriented Principles to model 4 canonical enterprise entities in pure Java: analyzing financial invariant enforcement and atomic transfers in ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"BankAccount"}),", payroll and performance promotions in ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Employee"}),", stock shortage prevention in ",e.jsx("code",{className:"text-amber-400 font-mono",children:"Product"}),", and finite state machine ignition dynamics in ",e.jsx("code",{className:"text-purple-400 font-mono",children:"AutomobileCar"}),"."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," The 4 Canonical Enterprise Domain Entities"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsx("p",{children:"Real-world entities are living, autonomous agents that protect their own data and invariants through rich domain behaviors:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-3 font-mono text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30",children:[e.jsx("h3",{className:"text-emerald-400 font-bold text-sm mb-1",children:"1. BankAccount"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:["Minimum balance invariants (≥ ₹1,000), atomic ",e.jsx("code",{className:"text-emerald-300",children:"transferTo()"}),", and unmodifiable transaction audit trails."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-sky-500/30",children:[e.jsx("h3",{className:"text-sky-400 font-bold text-sm mb-1",children:"2. Employee"}),e.jsx("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:"Minimum wage limits (≥ ₹15,000), dynamic HRA (40%) and DA (20%) allowances, and performance-based salary increments."})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-amber-500/30",children:[e.jsx("h3",{className:"text-amber-400 font-bold text-sm mb-1",children:"3. Product"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:["Inventory bounds (",e.jsx("code",{className:"text-amber-300",children:"stock ≥ 0"}),"), automated shortage rejections on sales, and warehouse restocking."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-purple-500/30",children:[e.jsx("h3",{className:"text-purple-400 font-bold text-sm mb-1",children:"4. AutomobileCar"}),e.jsx("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:"Finite State Machine: engine ignition, clamped speed (0-220 km/h), proportional fuel consumption, and auto-stall on empty."})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-emerald-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-emerald-300",children:"Classroom Case Study (Inter-Entity Integration in Barrackpore Hub):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["When ",e.jsx("strong",{children:"Swadeep Paul"})," transferred ₹5,000 to ",e.jsx("strong",{children:"Tuhina Das"}),", our ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"BankAccount"})," ensured atomicity. Meanwhile, ",e.jsx("strong",{children:"Abhronila Ray"})," received a 15% merit promotion in ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Employee"}),", our ",e.jsx("code",{className:"text-amber-400 font-mono",children:"Product"})," rejected an oversell of Java textbooks, and our ",e.jsx("code",{className:"text-purple-400 font-mono",children:"AutomobileCar"})," safely navigated the Kalyani Expressway!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Enterprise Domain Modeling Matrix: State · Invariants · Operations"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"Comparing the architectural anatomy of the 4 canonical domain entities:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 920 330",className:"w-full h-auto","aria-label":"Enterprise OOP Domain Modeling Matrix Diagram",children:[e.jsx("rect",{x:"20",y:"20",width:"205",height:"290",rx:"8",fill:"#0f172a",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"122",y:"45",fill:"#34d399",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"1. BankAccount"}),e.jsx("text",{x:"122",y:"60",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"Financial Domain Entity"}),e.jsx("rect",{x:"30",y:"75",width:"185",height:"65",rx:"4",fill:"#022c22",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"38",y:"92",fill:"#a7f3d0",fontSize:"8",fontWeight:"bold",children:"Private State:"}),e.jsx("text",{x:"38",y:"107",fill:"#6ee7b7",fontSize:"7",fontFamily:"monospace",children:"- final String accNo"}),e.jsx("text",{x:"38",y:"120",fill:"#6ee7b7",fontSize:"7",fontFamily:"monospace",children:"- double balanceInr"}),e.jsx("text",{x:"38",y:"133",fill:"#6ee7b7",fontSize:"7",fontFamily:"monospace",children:"- List<String> txns"}),e.jsx("rect",{x:"30",y:"148",width:"185",height:"65",rx:"4",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1"}),e.jsx("text",{x:"38",y:"165",fill:"#e0e7ff",fontSize:"8",fontWeight:"bold",children:"Invariants:"}),e.jsx("text",{x:"38",y:"180",fill:"#c7d2fe",fontSize:"7",children:"• balance ≥ ₹1,000.00"}),e.jsx("text",{x:"38",y:"195",fill:"#c7d2fe",fontSize:"7",children:"• Self-transfer blocked"}),e.jsx("text",{x:"38",y:"208",fill:"#c7d2fe",fontSize:"7",children:"• Unmodifiable history"}),e.jsx("rect",{x:"30",y:"220",width:"185",height:"75",rx:"4",fill:"#0f172a",stroke:"#64748b",strokeWidth:"1"}),e.jsx("text",{x:"38",y:"238",fill:"#fde047",fontSize:"8",fontWeight:"bold",children:"Operations:"}),e.jsx("text",{x:"38",y:"253",fill:"#fef08a",fontSize:"7",fontFamily:"monospace",children:"+ deposit(amt)"}),e.jsx("text",{x:"38",y:"266",fill:"#fef08a",fontSize:"7",fontFamily:"monospace",children:"+ withdraw(amt)"}),e.jsx("text",{x:"38",y:"280",fill:"#fef08a",fontSize:"7",fontFamily:"monospace",children:"+ transferTo(target, amt)"}),e.jsx("rect",{x:"245",y:"20",width:"205",height:"290",rx:"8",fill:"#0f172a",stroke:"#0284c7",strokeWidth:"1.5"}),e.jsx("text",{x:"347",y:"45",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"2. Employee"}),e.jsx("text",{x:"347",y:"60",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"Payroll & HR Domain Entity"}),e.jsx("rect",{x:"255",y:"75",width:"185",height:"65",rx:"4",fill:"#082f49",stroke:"#38bdf8",strokeWidth:"1"}),e.jsx("text",{x:"263",y:"92",fill:"#bae6fd",fontSize:"8",fontWeight:"bold",children:"Private State:"}),e.jsx("text",{x:"263",y:"107",fill:"#7dd3fc",fontSize:"7",fontFamily:"monospace",children:"- final int employeeId"}),e.jsx("text",{x:"263",y:"120",fill:"#7dd3fc",fontSize:"7",fontFamily:"monospace",children:"- double basicSalary"}),e.jsx("text",{x:"263",y:"133",fill:"#7dd3fc",fontSize:"7",fontFamily:"monospace",children:"- double ratingScore"}),e.jsx("rect",{x:"255",y:"148",width:"185",height:"65",rx:"4",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1"}),e.jsx("text",{x:"263",y:"165",fill:"#e0e7ff",fontSize:"8",fontWeight:"bold",children:"Invariants:"}),e.jsx("text",{x:"263",y:"180",fill:"#c7d2fe",fontSize:"7",children:"• basic ≥ ₹15,000.00"}),e.jsx("text",{x:"263",y:"195",fill:"#c7d2fe",fontSize:"7",children:"• rating: 1.0 to 5.0"}),e.jsx("text",{x:"263",y:"208",fill:"#c7d2fe",fontSize:"7",children:"• HRA/DA dynamically derived"}),e.jsx("rect",{x:"255",y:"220",width:"185",height:"75",rx:"4",fill:"#0f172a",stroke:"#64748b",strokeWidth:"1"}),e.jsx("text",{x:"263",y:"238",fill:"#fde047",fontSize:"8",fontWeight:"bold",children:"Operations:"}),e.jsx("text",{x:"263",y:"253",fill:"#fef08a",fontSize:"7",fontFamily:"monospace",children:"+ evaluatePerformance()"}),e.jsx("text",{x:"263",y:"266",fill:"#fef08a",fontSize:"7",fontFamily:"monospace",children:"+ calculateGrossSalary()"}),e.jsx("text",{x:"263",y:"280",fill:"#fef08a",fontSize:"7",fontFamily:"monospace",children:"+ calculateAnnualCTC()"}),e.jsx("rect",{x:"470",y:"20",width:"205",height:"290",rx:"8",fill:"#0f172a",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"572",y:"45",fill:"#fbbf24",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"3. Product"}),e.jsx("text",{x:"572",y:"60",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"E-Commerce Inventory Entity"}),e.jsx("rect",{x:"480",y:"75",width:"185",height:"65",rx:"4",fill:"#451a03",stroke:"#f59e0b",strokeWidth:"1"}),e.jsx("text",{x:"488",y:"92",fill:"#fef3c7",fontSize:"8",fontWeight:"bold",children:"Private State:"}),e.jsx("text",{x:"488",y:"107",fill:"#fde68a",fontSize:"7",fontFamily:"monospace",children:"- final String skuCode"}),e.jsx("text",{x:"488",y:"120",fill:"#fde68a",fontSize:"7",fontFamily:"monospace",children:"- double unitPriceInr"}),e.jsx("text",{x:"488",y:"133",fill:"#fde68a",fontSize:"7",fontFamily:"monospace",children:"- int stockQuantity"}),e.jsx("rect",{x:"480",y:"148",width:"185",height:"65",rx:"4",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1"}),e.jsx("text",{x:"488",y:"165",fill:"#e0e7ff",fontSize:"8",fontWeight:"bold",children:"Invariants:"}),e.jsx("text",{x:"488",y:"180",fill:"#c7d2fe",fontSize:"7",children:"• stockQuantity ≥ 0"}),e.jsx("text",{x:"488",y:"195",fill:"#c7d2fe",fontSize:"7",children:"• priceInr ≥ 0.0"}),e.jsx("text",{x:"488",y:"208",fill:"#c7d2fe",fontSize:"7",children:"• Shortage rejection"}),e.jsx("rect",{x:"480",y:"220",width:"185",height:"75",rx:"4",fill:"#0f172a",stroke:"#64748b",strokeWidth:"1"}),e.jsx("text",{x:"488",y:"238",fill:"#fde047",fontSize:"8",fontWeight:"bold",children:"Operations:"}),e.jsx("text",{x:"488",y:"253",fill:"#fef08a",fontSize:"7",fontFamily:"monospace",children:"+ fulfillOrder(qty)"}),e.jsx("text",{x:"488",y:"266",fill:"#fef08a",fontSize:"7",fontFamily:"monospace",children:"+ restockInventory(units)"}),e.jsx("text",{x:"488",y:"280",fill:"#fef08a",fontSize:"7",fontFamily:"monospace",children:"+ printCatalogCard()"}),e.jsx("rect",{x:"695",y:"20",width:"205",height:"290",rx:"8",fill:"#0f172a",stroke:"#a855f7",strokeWidth:"1.5"}),e.jsx("text",{x:"797",y:"45",fill:"#c084fc",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"4. AutomobileCar"}),e.jsx("text",{x:"797",y:"60",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"Finite State Machine Entity"}),e.jsx("rect",{x:"705",y:"75",width:"185",height:"65",rx:"4",fill:"#3b0764",stroke:"#a855f7",strokeWidth:"1"}),e.jsx("text",{x:"713",y:"92",fill:"#f3e8ff",fontSize:"8",fontWeight:"bold",children:"Private State:"}),e.jsx("text",{x:"713",y:"107",fill:"#e9d5ff",fontSize:"7",fontFamily:"monospace",children:"- final String vinNo"}),e.jsx("text",{x:"713",y:"120",fill:"#e9d5ff",fontSize:"7",fontFamily:"monospace",children:"- boolean isRunning"}),e.jsx("text",{x:"713",y:"133",fill:"#e9d5ff",fontSize:"7",fontFamily:"monospace",children:"- int currentSpeed"}),e.jsx("rect",{x:"705",y:"148",width:"185",height:"65",rx:"4",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1"}),e.jsx("text",{x:"713",y:"165",fill:"#e0e7ff",fontSize:"8",fontWeight:"bold",children:"Invariants:"}),e.jsx("text",{x:"713",y:"180",fill:"#c7d2fe",fontSize:"7",children:"• Speed 0-220 km/h clamped"}),e.jsx("text",{x:"713",y:"195",fill:"#c7d2fe",fontSize:"7",children:"• Start requires fuel > 0.5L"}),e.jsx("text",{x:"713",y:"208",fill:"#c7d2fe",fontSize:"7",children:"• Auto-stall on empty"}),e.jsx("rect",{x:"705",y:"220",width:"185",height:"75",rx:"4",fill:"#0f172a",stroke:"#64748b",strokeWidth:"1"}),e.jsx("text",{x:"713",y:"238",fill:"#fde047",fontSize:"8",fontWeight:"bold",children:"Operations:"}),e.jsx("text",{x:"713",y:"253",fill:"#fef08a",fontSize:"7",fontFamily:"monospace",children:"+ startEngine()"}),e.jsx("text",{x:"713",y:"266",fill:"#fef08a",fontSize:"7",fontFamily:"monospace",children:"+ accelerate(delta)"}),e.jsx("text",{x:"713",y:"280",fill:"#fef08a",fontSize:"7",fontFamily:"monospace",children:"+ brake(delta) / stop()"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Production Java Demonstration"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700",children:"RealWorldOopModelingEntitiesDemo.java"})]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"The comprehensive Java source code below demonstrates the full implementation of all 4 entities, inter-account fund transfers, payroll appraisals, inventory fulfillment, and car ignition state machines:"}),e.jsx(t,{fileName:"RealWorldOopModelingEntitiesDemo.java",code:i})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🎯"})," Key Takeaways & Domain Modeling Exam Points"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-sky-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Invariant Preservation"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Every domain method must guarantee that the object remains in a valid state both before and after execution. If an operation would breach an invariant, it must be rejected."})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-emerald-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Derived vs Backed State"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Values that can be computed from primary fields (like HRA, DA, Gross Salary, Aggregate Percentage) should be implemented as methods rather than stored fields to eliminate synchronization bugs."})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-purple-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Atomic Inter-Object Operations"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["In inter-account transfers (",e.jsx("code",{className:"text-purple-300 font-mono",children:"transferTo"}),"), ensure the source withdrawal completes before crediting the target, preventing phantom money creation."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2",children:[e.jsxs("h3",{className:"text-amber-300 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"📌"})," Finite State Machine Encapsulation"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Entities with lifecycles (like ",e.jsx("code",{className:"text-amber-300 font-mono",children:"AutomobileCar"}),") encapsulate state flags (",e.jsx("code",{className:"text-amber-300 font-mono",children:"isEngineRunning"}),") to block illegal transitions like accelerating with the engine off."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Defensive Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",children:[e.jsxs("div",{className:"p-5 bg-rose-950/20 rounded-xl border border-rose-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-rose-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"❌"})," Pitfall: Asking for Data and Mutating Externally"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed text-xs",children:"Querying an entity's stock, subtracting it in a controller, and setting the new stock bypasses invariant checks and creates severe race conditions."}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-rose-300 overflow-x-auto",children:e.jsx("code",{children:`// BAD (Anemic Design):
if (prod.getStock() >= 5) {
    prod.setStock(prod.getStock() - 5); // Invariant bypassed!
}`})})]}),e.jsxs("div",{className:"p-5 bg-emerald-950/20 rounded-xl border border-emerald-500/30 space-y-3",children:[e.jsxs("h3",{className:"text-emerald-400 font-bold text-base flex items-center gap-2",children:[e.jsx("span",{children:"✅"})," Recommended: “Tell, Don't Ask” Domain Operations"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-xs",children:["Invoke a cohesive domain method (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"fulfillCustomerOrder(5)"}),") and let the entity defend its stock internally."]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg font-mono text-xs text-emerald-300 overflow-x-auto",children:e.jsx("code",{children:`// GOOD (Rich Domain Model):
boolean success = prod.fulfillCustomerOrder(5); // Invariant guarded!`})})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-indigo-500/10 p-6 md:p-8 rounded-2xl border border-emerald-500/30",children:[e.jsxs("h2",{className:"text-xl font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This: Why should production financial systems use BigDecimal instead of double?"]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed",children:["Binary floating-point types (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"double"})," and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"float"}),") cannot accurately represent decimal fractions like 0.1 or 0.7 due to IEEE 754 representation limits. Evaluating ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"0.1 + 0.2"})," yields ",e.jsx("code",{className:"text-amber-300 font-mono",children:"0.30000000000000004"}),"! In enterprise banking and accounting engines, even micro-cent round-off errors can trigger financial auditing discrepancies. Enterprise production systems strictly use ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"java.math.BigDecimal"})," or integer minor units (paise/cents in ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"long"}),") for exact precision!"]})]}),e.jsx(a,{quote:"Never design an entity as a passive corpse waiting for outside code to poke its fields. Design it as a living, intelligent agent that knows its rules, protects its honour, and defends its domain truth.",mentor:"Sukanta Hui",role:"Lead Java Architect & Senior Academic Mentor",location:"Barrackpore & Naihati Campus, West Bengal"}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"❓"})," Frequently Asked Technical Questions (30 Q&As)"]}),e.jsx(n,{questions:s})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("h2",{className:"text-2xl font-bold text-slate-300 flex items-center gap-2",children:[e.jsx("span",{children:"🖨️"})," Printable Quick Reference Note"]})}),e.jsx(r,{content:o,fileName:"Topic16_Real_World_OOP_Modeling_Note.txt"})]})]})}export{g as default};
