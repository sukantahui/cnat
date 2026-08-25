import{b as a,j as e,bg as l}from"./vendor-react-core-Doz9nIC6.js";import{P}from"./PythonFileLoader-hCi5osN-.js";import{P as E}from"./PlainTextPrint-C08xhKA4.js";import{F as C}from"./FAQTemplate-CkSqDH4B.js";import{T as I}from"./TeacherSukantaHui-ObIX4NbR.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CbUXUJ65.js";const T=`# topic6_files/encapsulation_levels_and_name_mangling.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Encapsulation & Data Hiding\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 1: Encapsulation Levels & CPython Name Mangling Mechanics\r
Demonstrates:\r
  1. Public attributes: \`self.name\` (No restriction)\r
  2. Protected convention: \`self._balance\` (Internal use warning for developers/subclasses)\r
  3. Private attributes: \`self.__pin\` (Triggers Name Mangling to \`_ClassName__pin\`)\r
  4. Inspecting \`__dict__\` to prove how Python renames private attributes in RAM\r
"""\r
\r
class StudentBankAccount:\r
    """Demonstrates all 3 encapsulation conventions in Python."""\r
\r
    def __init__(self, account_holder: str, branch: str, balance: float, pin_code: str):\r
        # 1. PUBLIC: Accessible everywhere\r
        self.account_holder = account_holder\r
        \r
        # 2. PROTECTED: Single underscore convention (Please don't touch outside class/subclass)\r
        self._branch = branch\r
        self._balance = float(balance)\r
\r
        # 3. PRIVATE: Double underscore triggers CPython Name Mangling\r
        self.__pin_code = pin_code\r
\r
    def authenticate_and_check_balance(self, entered_pin: str):\r
        """Public interface method guarding private data."""\r
        if entered_pin == self.__pin_code:\r
            print(f"  [AUTH SUCCESS] Account: {self.account_holder} | Balance: INR {self._balance:,.2f}")\r
            return True\r
        print("  [AUTH FAILED] Invalid PIN Code!")\r
        return False\r
\r
\r
def demonstrate_access_levels():\r
    print("=" * 70)\r
    print("1. PUBLIC, PROTECTED & PRIVATE ACCESS BEHAVIOR")\r
    print("=" * 70)\r
\r
    acc = StudentBankAccount("Debolina Mukherjee", "Barrackpore Main", 15000.0, "7421")\r
\r
    # 1. Public Access\r
    print(f"1. Public Attribute (acc.account_holder) : '{acc.account_holder}'")\r
\r
    # 2. Protected Access (Allowed by Python runtime, but violates convention)\r
    print(f"2. Protected Attribute (acc._branch)      : '{acc._branch}' (Discouraged by PEP 8)")\r
\r
    # 3. Direct Private Access (Fails with AttributeError)\r
    print("\\n3. Attempting Direct Private Access: \`acc.__pin_code\`")\r
    try:\r
        print(acc.__pin_code)\r
    except AttributeError as err:\r
        print(f"   [BLOCKED] AttributeError: {err}")\r
\r
\r
def demonstrate_name_mangling():\r
    print("\\n" + "=" * 70)\r
    print("2. UNDER THE HOOD: CPYTHON NAME MANGLING")\r
    print("=" * 70)\r
\r
    acc = StudentBankAccount("Debolina Mukherjee", "Barrackpore Main", 15000.0, "7421")\r
\r
    print(r"""\r
How Python handles double underscores:\r
  - When Python sees \`__attr\` inside a class definition \`ClassName\`,\r
    it automatically renames it internally to \`_ClassName__attr\`.\r
""")\r
\r
    print(f"Actual keys in acc.__dict__:")\r
    for key, val in acc.__dict__.items():\r
        print(f"  * {key:<28} : {val}")\r
\r
    print("\\nAccessing via the mangled name: \`acc._StudentBankAccount__pin_code\`:")\r
    print(f"  Mangled Value Revealed: '{acc._StudentBankAccount__pin_code}'")\r
    print("\\nTakeaway: In Python, private variables are NOT encrypted; they are mangled to prevent accidental collisions!")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_access_levels()\r
    demonstrate_name_mangling()\r
`,k=`# topic6_files/data_hiding_and_invariant_protection.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Encapsulation & Data Hiding\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 2: Data Hiding & Invariant Protection\r
Demonstrates:\r
  1. Hiding internal mutable state behind controlled public methods\r
  2. Enforcing strict business logic validation before allowing state mutation\r
  3. Masking sensitive data (e.g. Account Number, Pan Card) for display\r
"""\r
\r
import hashlib\r
\r
class SecureWalletAccount:\r
    """Enterprise Secure Digital Wallet guarding balance and PIN credentials."""\r
\r
    def __init__(self, wallet_id: str, owner_name: str, initial_deposit: float, secret_pin: str):\r
        if initial_deposit < 0:\r
            raise ValueError("Opening balance cannot be negative!")\r
        if len(secret_pin) != 4 or not secret_pin.isdigit():\r
            raise ValueError("PIN must be exactly 4 numeric digits!")\r
\r
        self.wallet_id = wallet_id\r
        self.owner_name = owner_name\r
        \r
        # Protected and Private Data\r
        self._balance = float(initial_deposit)\r
        self.__pin_hash = self._hash_pin(secret_pin)\r
        self.__failed_attempts = 0\r
        self.__is_locked = False\r
\r
    def _hash_pin(self, pin: str) -> str:\r
        """Internal helper hashing PIN code using SHA-256."""\r
        return hashlib.sha256(pin.encode("utf-8")).hexdigest()\r
\r
    def get_masked_id(self) -> str:\r
        """Public method exposing safely formatted identification."""\r
        return f"WAL-***-{self.wallet_id[-4:]}"\r
\r
    def withdraw_funds(self, amount: float, pin: str) -> bool:\r
        """Controlled public interface with validation and security guards."""\r
        if self.__is_locked:\r
            print(f"  [LOCKED] Wallet is temporarily locked due to security breaches!")\r
            return False\r
\r
        if self._hash_pin(pin) != self.__pin_hash:\r
            self.__failed_attempts += 1\r
            print(f"  [SECURITY ALERT] Invalid PIN! Attempt {self.__failed_attempts}/3")\r
            if self.__failed_attempts >= 3:\r
                self.__is_locked = True\r
                print("  [LOCKOUT] Maximum attempts exceeded! Wallet locked.")\r
            return False\r
\r
        # Reset failed attempts on success\r
        self.__failed_attempts = 0\r
\r
        if amount <= 0 or amount > self._balance:\r
            print(f"  [TRANSACTION REJECTED] Invalid amount or insufficient funds (Bal: INR {self._balance:,.2f})")\r
            return False\r
\r
        self._balance -= amount\r
        print(f"  [WITHDRAWAL SUCCESS] {self.owner_name}: -INR {amount:,.2f} | Remaining: INR {self._balance:,.2f}")\r
        return True\r
\r
\r
def demonstrate_secure_wallet():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - DATA HIDING & INVARIANT PROTECTION")\r
    print("=" * 70)\r
\r
    wallet = SecureWalletAccount("9830099887", "Abhishek Karmakar", 8000.0, "4321")\r
    print(f"Wallet Created: {wallet.owner_name} | ID: {wallet.get_masked_id()}\\n")\r
\r
    # 1. Valid Withdrawal\r
    print("1. Attempting Valid Withdrawal with correct PIN (4321):")\r
    wallet.withdraw_funds(2500.0, "4321")\r
\r
    # 2. Invalid Withdrawals triggering security lockout\r
    print("\\n2. Attempting Invalid Withdrawals with wrong PIN (0000):")\r
    wallet.withdraw_funds(1000.0, "0000")\r
    wallet.withdraw_funds(1000.0, "0000")\r
    wallet.withdraw_funds(1000.0, "0000")\r
\r
    # 3. Blocked after lockout\r
    print("\\n3. Attempting withdrawal after lockout:")\r
    wallet.withdraw_funds(500.0, "4321")\r
\r
    print("\\n[PASSED] Secure Encapsulation & Lockout Pipeline Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_secure_wallet()\r
`,R=`# topic6_files/name_mangling_inheritance_safety.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Encapsulation & Data Hiding\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 3: The True Purpose of Name Mangling: Subclass Collision Avoidance\r
Demonstrates:\r
  1. Why double underscores exist in Python: To prevent accidental attribute overriding in inheritance\r
  2. How \`_ParentClass__var\` and \`_ChildClass__var\` safely coexist on the SAME object\r
  3. Demonstrating that without name mangling, subclasses would silently overwrite parent internal fields\r
"""\r
\r
class CloudServiceBase:\r
    """Base class defining private internal configuration."""\r
\r
    def __init__(self):\r
        # Name mangled to: _CloudServiceBase__endpoint\r
        self.__endpoint = "https://api.codernaccotax.co.in/v1/core"\r
\r
    def get_base_endpoint(self) -> str:\r
        return self.__endpoint\r
\r
\r
class AnalyticsService(CloudServiceBase):\r
    """Subclass also defining private internal configuration with the same name!"""\r
\r
    def __init__(self):\r
        super().__init__()\r
        # Name mangled to: _AnalyticsService__endpoint\r
        self.__endpoint = "https://analytics.codernaccotax.co.in/v2/stream"\r
\r
    def get_analytics_endpoint(self) -> str:\r
        return self.__endpoint\r
\r
\r
def demonstrate_collision_prevention():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - SUBCLASS ATTRIBUTE COLLISION PREVENTION")\r
    print("=" * 70)\r
\r
    service = AnalyticsService()\r
\r
    print("Reading endpoints through their respective class methods:")\r
    print(f"  * Base Endpoint      : {service.get_base_endpoint()}")\r
    print(f"  * Analytics Endpoint : {service.get_analytics_endpoint()}")\r
\r
    print("\\nInspecting the single object's __dict__ in RAM:")\r
    for key, value in service.__dict__.items():\r
        print(f"  * {key:<30} -> {value}")\r
\r
    print(r"""\r
Architectural Insight:\r
  Because of Name Mangling:\r
    - Base class's \`self.__endpoint\` became \`_CloudServiceBase__endpoint\`\r
    - Subclass's \`self.__endpoint\` became \`_AnalyticsService__endpoint\`\r
  Both internal private variables safely coexist without clobbering each other!\r
""")\r
    print("[PASSED] Subclass Attribute Collision Safety Verified.")\r
\r
\r
if __name__ == "__main__":\r
    demonstrate_collision_prevention()\r
`,D=`# topic6_files/secure_banking_vault_and_wallet.py\r
# Module: 003_001_object-oriented-python\r
# Topic: Encapsulation & Data Hiding\r
# Author: Sukanta Hui (Coder & AccoTax)\r
\r
r"""\r
Topic 6 - File 4: Secure Institutional Banking Vault & Digital Lockbox (Case Study)\r
Demonstrates:\r
  1. Complete encapsulation of sensitive cryptographic keys and transaction ledgers\r
  2. Multi-factor authentication guards before unlocking digital vaults\r
  3. Dynamic audit logging with unalterable private histories\r
"""\r
\r
import datetime as dt\r
import hashlib\r
from typing import List, Optional\r
\r
class InstitutionalSecurityVault:\r
    """Enterprise Institutional Vault encapsulating sensitive cryptographic material."""\r
    institute = "Coder & AccoTax Institutional Reserve"\r
\r
    def __init__(self, vault_id: str, master_key_passphrase: str, initial_cash_reserve: float):\r
        self.vault_id = vault_id\r
        \r
        # Protected State\r
        self._operational_branch = "Barrackpore Treasury Division"\r
        self._cash_reserve = float(initial_cash_reserve)\r
\r
        # Private Encapsulated State (Name Mangled)\r
        self.__passphrase_hash = hashlib.sha256(master_key_passphrase.encode("utf-8")).hexdigest()\r
        self.__secret_bearer_token = hashlib.sha256(f"BEARER-{vault_id}-{dt.date.today()}".encode("utf-8")).hexdigest()\r
        self.__audit_log: List[str] = [\r
            f"{dt.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}: Vault created with Reserve INR {self._cash_reserve:,.2f}"\r
        ]\r
        self.__is_unlocked = False\r
\r
    def authenticate_vault(self, passphrase: str) -> bool:\r
        """Authenticates master passphrase and opens security session."""\r
        if hashlib.sha256(passphrase.encode("utf-8")).hexdigest() == self.__passphrase_hash:\r
            self.__is_unlocked = True\r
            self.__audit_log.append(f"{dt.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}: Vault session UNLOCKED.")\r
            print(f"  [VAULT UNLOCKED] Session opened for Vault #{self.vault_id}")\r
            return True\r
        else:\r
            self.__audit_log.append(f"{dt.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}: UNAUTHORIZED ACCESS ATTEMPT DETECTED!")\r
            print(f"  [SECURITY ALERT] Invalid master passphrase for Vault #{self.vault_id}")\r
            return False\r
\r
    def lock_vault(self):\r
        """Terminates active security session."""\r
        self.__is_unlocked = False\r
        self.__audit_log.append(f"{dt.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}: Vault session LOCKED.")\r
        print(f"  [VAULT LOCKED] Session closed for Vault #{self.vault_id}")\r
\r
    def disburse_treasury_funds(self, amount: float, authorization_code: str) -> bool:\r
        """Guarded fund disbursement requiring active unlocked session."""\r
        if not self.__is_unlocked:\r
            print(f"  [DISBURSEMENT DENIED] Vault is locked. Authenticate first!")\r
            return False\r
\r
        if amount <= 0 or amount > self._cash_reserve:\r
            print(f"  [DISBURSEMENT DENIED] Insufficient treasury reserve (Available: INR {self._cash_reserve:,.2f})")\r
            return False\r
\r
        self._cash_reserve -= amount\r
        self.__audit_log.append(\r
            f"{dt.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}: Disbursed INR {amount:,.2f} | Auth: {authorization_code}"\r
        )\r
        print(f"  [DISBURSED] INR {amount:,.2f} released. Remaining Reserve: INR {self._cash_reserve:,.2f}")\r
        return True\r
\r
    def print_audit_ledger(self) -> None:\r
        """Prints audit history without exposing cryptographic tokens."""\r
        print(f"\\n======================================================================")\r
        print(f"CODER & ACCOTAX - TREASURY VAULT AUDIT TRAIL [#{self.vault_id}]")\r
        print(f"Branch: {self._operational_branch} | Reserve: INR {self._cash_reserve:,.2f}")\r
        print(f"----------------------------------------------------------------------")\r
        for entry in self.__audit_log:\r
            print(f"  * {entry}")\r
        print(f"======================================================================\\n")\r
\r
\r
def run_vault_simulation():\r
    print("=" * 70)\r
    print("CODER & ACCOTAX - INSTITUTIONAL SECURITY VAULT SIMULATION")\r
    print("=" * 70)\r
\r
    vault = InstitutionalSecurityVault("VAULT-BKP-01", "AccoTaxMasterKey2026!", 500000.0)\r
\r
    # 1. Attempt unauthorized disbursement while locked\r
    print("1. Attempting disbursement without unlocking vault:")\r
    vault.disburse_treasury_funds(50000.0, "AUTH-999")\r
\r
    # 2. Failed unlock attempt\r
    print("\\n2. Attempting unlock with wrong password:")\r
    vault.authenticate_vault("WrongPassword123")\r
\r
    # 3. Successful unlock & disbursement\r
    print("\\n3. Authenticating with correct master passphrase:")\r
    if vault.authenticate_vault("AccoTaxMasterKey2026!"):\r
        vault.disburse_treasury_funds(120000.0, "AUTH-TREASURY-001")\r
        vault.lock_vault()\r
\r
    # 4. Print Audit Trail\r
    vault.print_audit_ledger()\r
\r
    print("[PASSED] Institutional Banking Vault Simulation Complete.")\r
\r
\r
if __name__ == "__main__":\r
    run_vault_simulation()\r
`,M=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
       PYTHON PROGRAMMING • SEGMENT 3 • MODULE 003_001: OBJECT-ORIENTED PYTHON\r
                TOPIC 6: ENCAPSULATION & DATA HIDING IN PYTHON\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. THE THREE ACCESS CONVENTIONS\r
--------------------------------------------------------------------------------\r
  Level       Syntax        CPython Behavior                Convention Meaning\r
  ------------------------------------------------------------------------------\r
  Public      self.name     Unrestricted access             Freely accessible\r
  Protected   self._branch  No runtime restriction          Internal use / Subclass\r
  Private     self.__pin    Mangled to _Class__pin in RAM   Collision avoidance\r
\r
--------------------------------------------------------------------------------\r
2. CPYTHON NAME MANGLING MECHANICS\r
--------------------------------------------------------------------------------\r
  class Vault:\r
      def __init__(self):\r
          self.__code = 1234\r
\r
  v = Vault()\r
  # v.__code raises AttributeError!\r
  # But v._Vault__code is accessible:\r
  print(v._Vault__code)  # Output: 1234\r
\r
--------------------------------------------------------------------------------\r
3. PHILOSOPHY: "WE ARE ALL CONSENTING ADULTS HERE"\r
--------------------------------------------------------------------------------\r
  Python does not enforce hardware memory protection. Double underscores\r
  exist primarily to prevent name clashes in inheritance hierarchies,\r
  not to act as impenetrable security walls.\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 6: ENCAPSULATION & NAME MANGLING\r
================================================================================\r
`,O=[{question:"What is Encapsulation in Object-Oriented Programming?",shortAnswer:"The bundling of data (attributes) and methods that operate on that data into a single cohesive unit, while restricting direct external access to internal state.",explanation:"Encapsulation protects object invariants by forcing mutations to pass through validated public methods.",hint:"Bundling data and methods together and restricting direct external mutation.",level:"basic",codeExample:`class Bank:
    def __init__(self):
        self._balance = 0.0`},{question:"What are the three access conventions in Python OOP?",shortAnswer:"1. Public (name); 2. Protected (_name single leading underscore); 3. Private (__name double leading underscore triggering Name Mangling).",explanation:"Public is open; Protected signals internal use; Private triggers CPython Name Mangling.",hint:"Public (var), Protected (_var), and Private (__var).",level:"basic",codeExample:`self.public = 1
self._protected = 2
self.__private = 3`},{question:"What is CPython Name Mangling?",shortAnswer:"The automatic internal rewriting of any identifier with at least two leading underscores (e.g. __pin) to '_ClassName__pin' in the object's __dict__.",explanation:"Prevents direct access via 'obj.__pin' while allowing access via 'obj._ClassName__pin'.",hint:"Automatically transforms __var to _ClassName__var.",level:"basic",codeExample:`class A:
    def __init__(self): self.__x = 10
# Stored as a._A__x`},{question:"What error occurs if you try to access 'obj.__private_attr' directly from outside the class?",shortAnswer:"AttributeError: 'ClassName' object has no attribute '__private_attr'.",explanation:"Because Python renamed the attribute in RAM to '_ClassName__private_attr'.",hint:"Raises AttributeError because the raw name doesn't exist in __dict__.",level:"basic",codeExample:"# AttributeError: 'Vault' object has no attribute '__code'"},{question:"Why does Python lack strict compile-time private access modifiers like Java or C++?",shortAnswer:"Python follows the core community philosophy: 'We are all consenting adults here', trusting developers to respect conventions (like single underscore '_') rather than enforcing hardware barriers.",explanation:"Python favors openness, introspection, and simplicity over rigid access control enforcement.",hint:"'We are all consenting adults here' - trust conventions over rigid enforcement.",level:"moderate",codeExample:"# Python relies on convention and introspection rather than access locks"},{question:"What was Guido van Rossum's true design purpose for implementing Name Mangling?",shortAnswer:"To prevent accidental name collisions when subclasses inherit and define attributes with the same name as internal private attributes in parent classes.",explanation:"Parent._Parent__config and Child._Child__config coexist safely without overwriting each other.",hint:"To prevent subclass inheritance attribute name collisions.",level:"moderate",codeExample:"# Parent.__id -> _Parent__id; Child.__id -> _Child__id"},{question:"What is the difference between '_var', '__var', and '__var__' in Python?",shortAnswer:"'_var' is a protected convention (internal use); '__var' triggers name mangling; '__var__' is a special reserved dunder (magic) method/attribute (e.g. __init__, __str__).",explanation:"Never create custom attributes with double leading AND trailing underscores (__my_var__).",hint:"_var = protected, __var = private mangled, __var__ = magic dunder.",level:"basic",codeExample:`_internal = 1
__mangled = 2
__init__ = 'magic dunder'`},{question:"Why should you use a single underscore '_var' instead of double underscore '__var' for most internal helper methods?",shortAnswer:"Single underscore indicates internal use to other developers and subclasses without the unnecessary overhead and inheritance complications of Name Mangling.",explanation:"PEP 8 recommends single underscore for 95%+ of internal private conventions.",hint:"Single underscore is the standard PEP 8 convention for internal helpers.",level:"moderate",codeExample:"def _validate_score(self): pass"},{question:"Can an attacker still read or modify a private '__attribute' in Python?",shortAnswer:"Yes. By accessing 'obj._ClassName__attribute', anyone can read or mutate the mangled variable in RAM.",explanation:"Private attributes are not encrypted or protected against intentional tampering.",hint:"Yes, by accessing the mangled name obj._ClassName__var directly.",level:"basic",codeExample:"vault._Vault__pin = '9999'  # Direct mangled modification"},{question:"How does Encapsulation improve software maintainability and refactoring?",shortAnswer:"Because internal implementation details (e.g. data structures, algorithms) can be refactored or optimized without breaking external client code that interacts solely with public methods.",explanation:"Decouples public API contracts from underlying storage mechanics.",hint:"Decouples public interface contracts from internal storage implementation.",level:"moderate",codeExample:"# Change internal storage from list to set without breaking public add() API"},{question:"What is 'Data Hiding' vs 'Encapsulation'?",shortAnswer:"Encapsulation is the broader architectural principle of bundling data and behavior; Data Hiding is the specific practice of concealing internal representation details from external consumers.",explanation:"Data hiding is a subset and direct benefit of encapsulation.",hint:"Encapsulation bundles state and logic; Data Hiding restricts visibility of internal details.",level:"moderate",codeExample:"# Public methods guard hidden internal balances"},{question:"What is a single trailing underscore used for (e.g. 'class_' or 'type_')?",shortAnswer:"By PEP 8 convention, a single trailing underscore is used to avoid naming conflicts with Python reserved keywords (e.g., class_ = 'Math', from_ = 'sender').",explanation:"Allows clean variable names without conflicting with language keywords.",hint:"Avoids collisions with Python keywords (class_, id_).",level:"basic",codeExample:"def register(name: str, class_: str): pass"},{question:"How do you inspect all mangled attributes of an object dynamically at runtime?",shortAnswer:"By inspecting 'dir(obj)' or 'obj.__dict__.keys()', which lists all attributes including '_ClassName__var' entries.",explanation:"Python's rich reflection capabilities expose all namespace keys.",hint:"Inspect dir(obj) or obj.__dict__.",level:"basic",codeExample:"print([k for k in dir(obj) if k.startswith('_')])"},{question:"Can private methods (def __helper(self):) be defined and mangled in Python?",shortAnswer:"Yes. Methods starting with double underscores (and at most one trailing underscore) are also mangled to '_ClassName__helper(self)'.",explanation:"Prevents subclasses from accidentally overriding internal helper routines.",hint:"Yes, private methods are mangled identically to _ClassName__method.",level:"basic",codeExample:`def __internal_audit(self): pass
# Stored as _Class__internal_audit`},{question:"What happens if a subclass attempts to call 'self.__private_method()' defined in its parent class?",shortAnswer:"It raises AttributeError because Python looks for '_ChildClass__private_method' instead of '_ParentClass__private_method'.",explanation:"Subclasses cannot directly invoke parent private methods without using the parent's mangled name explicitly.",hint:"Raises AttributeError because it looks for the subclass's mangled name.",level:"complex",codeExample:"# Child calling self.__parent_private raises AttributeError"},{question:"How should sensitive user passwords or PINs be stored inside an encapsulated class?",shortAnswer:"As irreversible cryptographic hashes (e.g. SHA-256 or bcrypt) rather than plaintext strings.",explanation:"Protects security even if the object's namespace is dumped or inspected in memory.",hint:"Store cryptographic hashes (SHA-256 / bcrypt) instead of plaintext.",level:"moderate",codeExample:"self.__pin_hash = hashlib.sha256(pin.encode()).hexdigest()"},{question:"What is 'Masking' in the context of data encapsulation?",shortAnswer:"Exposing public formatted strings that obscure sensitive characters (e.g. 'ACC-***-4829' or '**** **** **** 1234') while keeping the full value private.",explanation:"Common requirement in banking, PCI-DSS, and GDPR compliance.",hint:"Obscuring sensitive characters (e.g. WAL-***-1234) for safe display.",level:"basic",codeExample:"def get_masked_card(self): return f'****-****-****-{self._card[-4:]}'"},{question:"Does Name Mangling occur if the class name consists entirely of underscores (e.g. class ___:)?",shortAnswer:"No. If a class name consists entirely of underscores, Python skips name mangling to avoid syntax errors.",explanation:"An obscure edge-case in CPython compiler source code.",hint:"CPython skips mangling if the class name is all underscores.",level:"complex",codeExample:"# Obscure CPython compiler edge case"},{question:"Why should you never use double underscores in Python module-level global variables?",shortAnswer:"Because Name Mangling only operates inside class definitions; module-level double underscore names are not mangled and may conflict with future Python language internals.",explanation:"Module-level names with dunders are reserved by the Python language specification.",hint:"Mangling only applies in class definitions; module dunders are reserved by Python.",level:"moderate",codeExample:"# Avoid module-level __var = 10; use _var instead"},{question:"How do getters and setters relate to encapsulation in Python?",shortAnswer:"They allow reading and writing private attributes through controlled property methods (@property) that enforce type checks, validation, and calculated state.",explanation:"Topic 7 deep-dives into the @property decorator.",hint:"They provide controlled, validated interfaces to private attributes.",level:"basic",codeExample:`@property
def balance(self): return self._balance`},{question:"What is the 'Tell, Don't Ask' principle in OOP encapsulation?",shortAnswer:"Instead of asking an object for its private data and making decisions outside, tell the object what action to perform so it can manage its own internal state.",explanation:"Promotes high cohesion and reduces tight coupling between classes.",hint:"Tell the object to perform an action rather than extracting its data.",level:"moderate",codeExample:`# Good: account.withdraw(100)
# Bad: if account.balance >= 100: account.balance -= 100`},{question:"Can an instance dynamically add a private attribute after instantiation (e.g. obj.__new_attr = 5)?",shortAnswer:"No Name Mangling occurs when adding attributes from outside the class body; 'obj.__new_attr = 5' creates a literal key '__new_attr' in obj.__dict__ without the class prefix.",explanation:"Name mangling is a syntax-time compiler transformation, not a runtime hook.",hint:"No, mangling only happens at compile-time inside class definitions.",level:"complex",codeExample:"obj.__new = 10  # Literally stored as '__new' in __dict__"},{question:"What is an 'Invariant' in object-oriented encapsulation?",shortAnswer:"A logical business rule or condition that must always remain True throughout the entire lifecycle of an object (e.g. balance >= 0, age > 0).",explanation:"Encapsulation ensures that invalid operations cannot violate class invariants.",hint:"A business condition that must always remain True (e.g. balance >= 0).",level:"moderate",codeExample:"# Invariant: self._balance >= 0 at all times"},{question:"Why does direct attribute access (e.g. obj.balance = -5000) break software reliability in procedural systems?",shortAnswer:"Because bypasses validation logic, creates inconsistent corrupted states, and causes catastrophic cascading failures across dependent subsystems.",explanation:"Encapsulation prevents corrupted object states from ever occurring.",hint:"Bypasses validation and creates corrupted object states.",level:"basic",codeExample:"# Corrupt state: account.balance = -999999"},{question:"What is the ultimate golden rule of Encapsulation in Python?",shortAnswer:"Keep attributes protected (_var) by default, expose clean public interfaces and properties for access, and use private (__var) only when subclass collision protection is strictly required.",explanation:"Balances Pythonic elegance and consenting adults philosophy with robust software architecture.",hint:"Use _var by default, public methods for interaction, and __var only for collision safety.",level:"basic",codeExample:"# _protected by default; public methods for client access"}];function F(){const o=a.useRef([]),[i,c]=a.useState("levels"),[d,u]=a.useState(!1),[h,_]=a.useState(5e5),[x,b]=a.useState(""),[g,m]=a.useState(!1),[v,p]=a.useState(!1),[y,r]=a.useState(["Vault initialized with Reserve: INR 500,000.00"]);a.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(f=>{f.isIntersecting&&f.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return o.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]);const s=t=>{t&&!o.current.includes(t)&&o.current.push(t)},N=()=>{p(!0),m(!1),r(t=>["CRITICAL: AttributeError raised on vault.__passphrase_hash!",...t])},j=()=>{m(!0),p(!1),r(t=>["WARNING: vault._InstitutionalSecurityVault__passphrase_hash inspected via mangled name!",...t])},w=()=>{x==="AccoTaxMasterKey2026!"?(u(!0),r(t=>["SUCCESS: Vault session UNLOCKED with master passphrase.",...t])):r(t=>["ALERT: Unauthorized unlock attempt with invalid passphrase!",...t])},A=()=>{u(!1),r(t=>["INFO: Vault session manually LOCKED.",...t])},S=()=>{if(!d){r(n=>["DENIED: Disbursement rejected - Vault is LOCKED!",...n]);return}if(h<5e4)return;const t=h-5e4;_(t),r(n=>[`DISBURSEMENT: Released INR 50,000.00 | Remaining Reserve: INR ${t.toLocaleString()}`,...n])};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("header",{ref:s,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 3 • Module 003_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 6"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Object-Oriented Programming (OOP) in Python"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:["Encapsulation & Data Hiding (",e.jsx("code",{className:"text-teal-400 font-mono",children:"_var"}),", ",e.jsx("code",{className:"text-rose-400 font-mono",children:"__var"}),", Name Mangling)"]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master Python's encapsulation conventions: Public attributes, Protected single underscores (",e.jsx("code",{className:"text-amber-300 font-mono",children:"_var"}),"), Private double underscores (",e.jsx("code",{className:"text-rose-400 font-mono",children:"__var"}),"), CPython's Name Mangling engine (",e.jsx("code",{className:"text-teal-300 font-mono",children:"_ClassName__var"}),"), and subclass collision prevention."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🛡️ Public vs Protected vs Private"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"⚙️ CPython Name Mangling (_Class__var)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:'🤝 "Consenting Adults" Philosophy'}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏛️ Institutional Security Vault Patterns"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🔐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. Encapsulation Conventions & Access Modifiers in Python"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsxs("p",{children:["In Python, access levels are enforced by ",e.jsx("strong",{children:"naming conventions"})," and ",e.jsx("strong",{children:"compiler name mangling"})," rather than rigid hardware memory barriers:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-base mb-1",children:"1️⃣ Public (var)"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:'self.account_id = "ACC"'}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Unrestricted access. Part of the public API contract; freely readable and mutable by client code."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-base mb-1",children:"2️⃣ Protected (_var)"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"self._balance = 5000.0"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Single leading underscore. Signals internal use for class and subclasses. Not enforced by CPython runtime."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 shadow-lg",children:[e.jsx("div",{className:"text-rose-400 font-bold text-base mb-1",children:"3️⃣ Private (__var)"}),e.jsx("code",{className:"text-xs font-mono text-rose-300 block mb-1",children:'self.__pin_hash = "sha256"'}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Double leading underscore. CPython compiler automatically transforms the name to ",e.jsx("code",{className:"text-rose-300",children:"_ClassName__var"})," in RAM."]})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:'The Python Philosophy: "We Are All Consenting Adults Here"'}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Python assumes developers are responsible and respect conventions. Private variables are not cryptographically locked against introspection; Name Mangling exists primarily to prevent subclass attribute clobbering."})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Name Mangling & Inheritance Safety"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>c("levels"),className:l("px-3 py-1.5 rounded-lg transition-all",i==="levels"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Access Modifiers Spectrum"}),e.jsx("button",{onClick:()=>c("mangling"),className:l("px-3 py-1.5 rounded-lg transition-all",i==="mangling"?"bg-rose-900/50 text-rose-300 border border-rose-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"CPython Name Mangling Engine"}),e.jsx("button",{onClick:()=>c("collision"),className:l("px-3 py-1.5 rounded-lg transition-all",i==="collision"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"Subclass Collision Prevention"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining syntax transformations, memory dictionary renames, and inheritance isolation:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:i==="levels"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"PYTHON ACCESS MODIFIERS SPECTRUM"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"15",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"Public: self.user"}),e.jsx("text",{x:"15",y:"60",fill:"#ecfdf5",fontSize:"10 font-mono",children:"acc.user"}),e.jsx("rect",{x:"15",y:"90",width:"220",height:"50",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"25",y:"115",fill:"#34d399",fontSize:"10 font-bold",children:"Unrestricted Access"}),e.jsx("text",{x:"25",y:"130",fill:"#ecfdf5",fontSize:"9",children:"Client code can read & mutate"}),e.jsx("text",{x:"15",y:"180",fill:"#cbd5e1",fontSize:"10",children:"• Standard API methods"}),e.jsx("text",{x:"15",y:"200",fill:"#cbd5e1",fontSize:"10",children:"• Display attributes"}),e.jsx("rect",{x:"280",y:"0",width:"250",height:"240",rx:"8",fill:"#451a03",stroke:"#d97706"}),e.jsx("text",{x:"295",y:"30",fill:"#fde68a",fontSize:"12",fontWeight:"bold",children:"Protected: self._balance"}),e.jsx("text",{x:"295",y:"60",fill:"#fef3c7",fontSize:"10 font-mono",children:"acc._balance"}),e.jsx("rect",{x:"295",y:"90",width:"220",height:"50",rx:"4",fill:"#78350f",stroke:"#b45309"}),e.jsx("text",{x:"305",y:"115",fill:"#fde68a",fontSize:"10 font-bold",children:"Convention Only (PEP 8)"}),e.jsx("text",{x:"305",y:"130",fill:"#fef3c7",fontSize:"9",children:"Please don't touch externally"}),e.jsx("text",{x:"295",y:"180",fill:"#cbd5e1",fontSize:"10",children:"• Subclass readable"}),e.jsx("text",{x:"295",y:"200",fill:"#cbd5e1",fontSize:"10",children:"• Internal helper state"}),e.jsx("rect",{x:"560",y:"0",width:"250",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"575",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Private: self.__pin"}),e.jsx("text",{x:"575",y:"60",fill:"#ffe4e6",fontSize:"10 font-mono",children:"acc.__pin (AttributeError!)"}),e.jsx("rect",{x:"575",y:"90",width:"220",height:"50",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"585",y:"115",fill:"#fda4af",fontSize:"10 font-bold",children:"CPython Name Mangling"}),e.jsx("text",{x:"585",y:"130",fill:"#ffe4e6",fontSize:"9",children:"Renamed to _Class__pin in RAM"}),e.jsx("text",{x:"575",y:"180",fill:"#cbd5e1",fontSize:"10",children:"• Hashed credentials"}),e.jsx("text",{x:"575",y:"200",fill:"#cbd5e1",fontSize:"10",children:"• Subclass collision guard"})]})]}):i==="mangling"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#f43f5e",fontSize:"14",fontWeight:"bold",children:"HOW CPYTHON NAME MANGLING OPERATES IN RAM"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"Class Definition: BankAccount"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"10 font-mono",children:"class BankAccount:"}),e.jsx("text",{x:"40",y:"85",fill:"#ecfdf5",fontSize:"10 font-mono",children:"def __init__(self, pin):"}),e.jsx("text",{x:"60",y:"110",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"self.__pin = pin"}),e.jsx("rect",{x:"20",y:"140",width:"340",height:"75",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"165",fill:"#a7f3d0",fontSize:"10 font-bold",children:"Compiler Translation Rule:"}),e.jsx("text",{x:"30",y:"185",fill:"#ecfdf5",fontSize:"9 font-mono",children:"__attr → _ + ClassName + __attr"}),e.jsx("text",{x:"30",y:"202",fill:"#ecfdf5",fontSize:"9 font-mono",children:"__pin  → _BankAccount__pin"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#4c0519",stroke:"#f43f5e"}),e.jsx("text",{x:"20",y:"30",fill:"#fda4af",fontSize:"12",fontWeight:"bold",children:"Actual RAM Heap (__dict__ Keys)"}),e.jsxs("text",{x:"20",y:"65",fill:"#cbd5e1",fontSize:"10 font-mono",children:["acc.__dict__ = ","{"]}),e.jsx("text",{x:"40",y:"90",fill:"#38bdf8",fontSize:"10 font-mono",children:"'account_holder': 'Debolina',"}),e.jsx("text",{x:"40",y:"115",fill:"#fde68a",fontSize:"10 font-mono",children:"'_balance': 15000.0,"}),e.jsx("text",{x:"40",y:"140",fill:"#fda4af",fontSize:"10 font-mono font-bold",children:"'_BankAccount__pin': '7421'"}),e.jsx("text",{x:"20",y:"165",fill:"#cbd5e1",fontSize:"10 font-mono",children:"}"}),e.jsx("rect",{x:"20",y:"180",width:"340",height:"40",rx:"4",fill:"#881337",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"205",fill:"#ffe4e6",fontSize:"10",children:"Direct `acc.__pin` throws AttributeError!"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"SUBCLASS COLLISION PREVENTION: _Parent__var & _Child__var"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#134e4a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"30",fill:"#99f6e4",fontSize:"12",fontWeight:"bold",children:"Parent & Child Classes"}),e.jsx("text",{x:"20",y:"60",fill:"#ecfdf5",fontSize:"10 font-mono",children:"class BaseService:"}),e.jsx("text",{x:"40",y:"80",fill:"#34d399",fontSize:"10 font-mono font-bold",children:'self.__config = "BASE_API"'}),e.jsx("text",{x:"20",y:"120",fill:"#ecfdf5",fontSize:"10 font-mono",children:"class AnalyticsService(BaseService):"}),e.jsx("text",{x:"40",y:"140",fill:"#c084fc",fontSize:"10 font-mono font-bold",children:'self.__config = "ANALYTICS_API"'}),e.jsx("rect",{x:"20",y:"170",width:"340",height:"50",rx:"4",fill:"#022c22",stroke:"#059669"}),e.jsx("text",{x:"30",y:"195",fill:"#a7f3d0",fontSize:"10 font-bold",children:"Same private variable name used in both!"})]}),e.jsxs("g",{transform:"translate(460, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"240",rx:"8",fill:"#1e1b4b",stroke:"#8b5cf6"}),e.jsx("text",{x:"20",y:"30",fill:"#c4b5fd",fontSize:"12",fontWeight:"bold",children:"Coexistence in Single Instance RAM"}),e.jsx("text",{x:"20",y:"70",fill:"#cbd5e1",fontSize:"10 font-mono",children:"instance.__dict__ contains:"}),e.jsx("rect",{x:"20",y:"100",width:"340",height:"40",rx:"4",fill:"#090d16",stroke:"#14b8a6"}),e.jsx("text",{x:"30",y:"125",fill:"#34d399",fontSize:"10 font-mono font-bold",children:"'_BaseService__config': 'BASE_API'"}),e.jsx("rect",{x:"20",y:"150",width:"340",height:"40",rx:"4",fill:"#090d16",stroke:"#8b5cf6"}),e.jsx("text",{x:"30",y:"175",fill:"#c084fc",fontSize:"10 font-mono font-bold",children:"'_AnalyticsService__config': 'ANALYTICS_API'"}),e.jsx("text",{x:"20",y:"215",fill:"#ecfdf5",fontSize:"10 font-bold",children:"✓ Zero collision! Both coexist peacefully in RAM."})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🎮"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Security Vault & Name Mangling Inspector"})]}),e.jsxs("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:["Interact with the live ",e.jsx("code",{className:"text-teal-300 font-mono",children:"InstitutionalSecurityVault"})," to test private access, name mangling, and session authentication:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-teal-400 block font-bold",children:"Vault Operations & Introspection"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("button",{onClick:N,className:"bg-rose-950/70 hover:bg-rose-900 text-rose-300 border border-rose-700 p-2.5 rounded-lg text-xs font-mono text-left transition-all",children:["1. Try Direct Access: ",e.jsx("code",{className:"text-rose-200",children:"vault.__passphrase_hash"})," (Raises Error)"]}),e.jsxs("button",{onClick:j,className:"bg-teal-950/70 hover:bg-teal-900 text-teal-300 border border-teal-700 p-2.5 rounded-lg text-xs font-mono text-left transition-all",children:["2. Inspect Mangled: ",e.jsx("code",{className:"text-teal-200",children:"vault._InstitutionalSecurityVault__passphrase_hash"})]}),e.jsxs("div",{className:"pt-2",children:[e.jsxs("label",{className:"block text-xs font-mono text-slate-400 mb-1",children:["Master Passphrase: ",e.jsx("span",{className:"text-slate-500 font-normal",children:"(AccoTaxMasterKey2026!)"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",value:x,onChange:t=>b(t.target.value),placeholder:"AccoTaxMasterKey2026!",className:"flex-1 bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-teal-300 font-mono"}),e.jsx("button",{onClick:w,className:"bg-teal-900 hover:bg-teal-800 text-teal-200 border border-teal-700 px-3 py-2 rounded-lg text-xs font-mono font-bold",children:"Unlock"}),e.jsx("button",{onClick:A,className:"bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 px-3 py-2 rounded-lg text-xs font-mono",children:"Lock"})]})]}),e.jsx("button",{onClick:S,className:"w-full bg-cyan-900/70 hover:bg-cyan-800 text-cyan-200 border border-cyan-700 p-2.5 rounded-lg text-xs font-mono font-bold transition-all",children:"Disburse Treasury Funds (INR 50,000.00)"})]}),v&&e.jsxs("div",{className:"p-3 bg-rose-950/50 border border-rose-800 rounded-lg text-xs font-mono text-rose-300",children:[e.jsx("div",{className:"font-bold",children:"❌ AttributeError:"}),"'InstitutionalSecurityVault' object has no attribute '__passphrase_hash'"]}),g&&e.jsxs("div",{className:"p-3 bg-teal-950/50 border border-teal-800 rounded-lg text-xs font-mono text-teal-300 break-all",children:[e.jsx("div",{className:"font-bold text-teal-400",children:"✓ Mangled RAM Value Exposed:"}),"9a4f21b7c4... (SHA-256 Hash stored in _InstitutionalSecurityVault__passphrase_hash)"]})]}),e.jsxs("div",{className:"space-y-3 flex flex-col justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold",children:"Treasury Vault State & Immutable Audit Trail"}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs font-mono",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Session Status:"}),e.jsx("span",{className:l("font-bold px-2 py-0.5 rounded",d?"bg-emerald-950 text-emerald-300 border border-emerald-700":"bg-rose-950 text-rose-300 border border-rose-700"),children:d?"UNLOCKED (ACTIVE)":"LOCKED"})]}),e.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-slate-800",children:[e.jsx("span",{className:"text-slate-400",children:"Available Reserve:"}),e.jsxs("span",{className:"text-teal-300 font-bold text-sm",children:["INR ",h.toLocaleString("en-IN",{minimumFractionDigits:2})]})]})]}),e.jsx("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1 overflow-y-auto max-h-36 flex-1",children:y.map((t,n)=>e.jsxs("div",{className:"text-slate-400",children:["> ",t]},n))})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📊"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Master Encapsulation Conventions Reference Matrix"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-200 bg-slate-950/60",children:[e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Notation"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Example"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"CPython Runtime Behavior"}),e.jsx("th",{className:"py-3.5 px-4 font-bold",children:"Recommended Usage"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-teal-300 font-semibold",children:"Public"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"self.name"}),e.jsx("td",{className:"py-3 px-4",children:"No restrictions; fully visible in __dict__"}),e.jsx("td",{className:"py-3 px-4",children:"Public API contracts and regular properties"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-amber-300 font-semibold",children:"Protected"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"self._balance"}),e.jsx("td",{className:"py-3 px-4",children:"No runtime restriction; PEP 8 convention warning"}),e.jsx("td",{className:"py-3 px-4",children:"Internal helpers and subclass-accessible data"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-rose-400 font-semibold",children:"Private"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"self.__pin"}),e.jsx("td",{className:"py-3 px-4 text-rose-400 font-bold",children:"Name mangled to _Class__pin"}),e.jsx("td",{className:"py-3 px-4",children:"Subclass collision safety and private tokens"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-purple-300 font-semibold",children:"Dunder (Magic)"}),e.jsx("td",{className:"py-3 px-4 font-mono text-slate-200",children:"__init__, __str__"}),e.jsx("td",{className:"py-3 px-4",children:"Reserved by Python language specification"}),e.jsx("td",{className:"py-3 px-4",children:"System hooks; never invent custom dunders"})]})]})]})})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Interactive Code Lab: Production Scripts"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Explore 4 production-grade Python scripts demonstrating access levels, hashed credentials, subclass collision avoidance, and institutional treasury vaults:"}),e.jsx(P,{files:[{filename:"encapsulation_levels_and_name_mangling.py",code:T,description:"The 3 access levels (public, protected _var, private __var) and CPython Name Mangling internals."},{filename:"data_hiding_and_invariant_protection.py",code:k,description:"Data hiding with SHA-256 hashed PINs, masked account IDs, and security lockout counters."},{filename:"name_mangling_inheritance_safety.py",code:R,description:"Subclass inheritance attribute collision avoidance: why _Parent__var and _Child__var safely coexist."},{filename:"secure_banking_vault_and_wallet.py",code:D,description:"Enterprise Institutional Security Vault with multi-factor passphrases, locked sessions, and audit ledgers."}]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Common Traps, Anti-Patterns & Edge Cases"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-rose-950/30 border border-rose-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 1: Assuming `__var` is Truly Private"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"obj._ClassName__var"})," allows direct external reading and mutation in RAM. Never rely on double underscores for critical data encryption."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use proper cryptographic encryption / hashing for sensitive passwords."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 2: Overusing `__var` Instead of `_var`"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Using double underscores everywhere makes debugging, testing, and subclassing unnecessarily difficult."}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"PEP 8 Rule:"})," Use single underscore ",e.jsx("code",{className:"text-emerald-300",children:"_var"})," for 95%+ of internal attributes."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-purple-950/30 border border-purple-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 3: Subclasses Calling Parent `__private`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["A subclass calling ",e.jsx("code",{className:"text-purple-300 font-mono",children:"self.__private_method()"})," looks for ",e.jsx("code",{className:"text-purple-300 font-mono",children:"_Child__private_method"})," and crashes with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"AttributeError"}),"!"]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Fix:"})," Use ",e.jsx("code",{className:"text-emerald-300",children:"_protected_method"})," if subclasses need to access or override it."]})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-cyan-950/30 border border-cyan-800/60 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base",children:[e.jsx("span",{children:"❌"})," Trap 4: Inventing Custom Dunder Names"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Naming custom attributes ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"__custom__"})," risks colliding with future Python language magic dunder methods."]}),e.jsxs("div",{className:"text-xs font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rule:"})," Reserved exclusively for Python language internals."]})]})]})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"❓"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"7. Master Review & Interview Questions (25 FAQs)"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Comprehensive question-and-answer repository covering encapsulation, data hiding, name mangling, and consenting adults philosophy:"}),e.jsx(C,{questions:O})]}),e.jsxs("section",{ref:s,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"📄"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"8. Study Notes, Printable Handout & Teacher Profile"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Download or print the complete reference sheet with access modifier comparison tables, name mangling formulas, and security vault patterns:"}),e.jsx("div",{className:"mb-10",children:e.jsx(E,{content:M,filename:"python_topic6_encapsulation_and_name_mangling_notes.txt",title:"Print Topic 6 Study Notes"})}),e.jsx(I,{})]})]})]})}export{F as default};
