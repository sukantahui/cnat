import{b as r,j as e,bl as d}from"./vendor-react-core-B-R9HE-Z.js";import{P as U}from"./PythonFileLoader-DZ61U3Y_.js";import{F as q}from"./FAQTemplate-16IfroqC.js";import{P as K}from"./PlainTextPrint-C6NaUtnE.js";import{T as G}from"./TeacherSukantaHui-Ci09yFv7.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-DFIuzMjt.js";const X=`"""
=============================================================================
TOPIC 7: DATA CLEANING & RECTIFICATION PIPELINE
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Academic Practical Laboratory & Simulation Engine
Author: Sukanta Hui | Coder & AccoTax | Barrackpore, West Bengal, India
Course: Introduction to Machine Learning (BCAC701B - MAKAUT Aligned)
=============================================================================

This simulation demonstrates:
1. Systematic Data Cleaning & Sanitization Engine:
   - Hidden Sentinel Null Detection (-999, 9999, 'N/A', '?', '#NULL!')
   - Exact & Fuzzy Near-Duplicate Entity Resolution (Levenshtein / SequenceMatcher)
   - Text Normalization & Canonical String Mapping (Address & City standardization)
   - Domain Constraint & Logical Integrity Verification (e.g. Age vs Experience)
2. Quantitative Cleanliness Auditing:
   - Dirty-to-Clean Data Quality Scoring (Completeness, Validity, Uniqueness)
   - Lineage Tracking & Modification Logging
3. Tested on realistic West Bengal Municipal & Public Sector Records:
   - Kolkata Municipal Corporation (KMC) Property Tax & Civic Registry
   - North 24 Parganas District Healthcare Patient Roster
=============================================================================
"""

import re
import difflib
from typing import List, Dict, Any, Tuple, Optional, Set

# =============================================================================
# 1. REALISTIC CORRUPTED CITIZEN & PROPERTY DATASET
# =============================================================================

def get_raw_kmc_citizen_dataset() -> List[Dict[str, Any]]:
    """
    Returns an enterprise dataset containing realistic real-world defects:
    - Sentinel values (-999, 9999, 'N/A', '?')
    - Inconsistent casing and whitespace ('  Kolkata ', 'BARRACKPORE', 'calcutta')
    - Near-duplicate records (Fuzzy matches in citizen name and street address)
    - Logical contradictions (Age=8 with 12 years of employment; Negative tax dues)
    - Inconsistent date formats ('1990-05-12' vs '12/05/1990')
    """
    return [
        {
            "record_id": "KMC-2024-001",
            "citizen_name": "Sukanta Hui",
            "ward_number": 12,
            "locality": "  Barrackpore  ",
            "age": 42,
            "years_employed": 18,
            "annual_property_tax_inr": 14500.0,
            "tax_payment_status": "Paid",
            "phone_contact": "+91-9432456083"
        },
        {
            "record_id": "KMC-2024-002",
            "citizen_name": "S. Hui",                  # FUZZY NEAR-DUPLICATE of Record 001
            "ward_number": 12,
            "locality": "barrackpore",                # INCONSISTENT CASING
            "age": 42,
            "years_employed": 18,
            "annual_property_tax_inr": 14500.0,
            "tax_payment_status": "PAID",
            "phone_contact": "9432456083"             # MISSING COUNTRY CODE
        },
        {
            "record_id": "KMC-2024-003",
            "citizen_name": "Anirban Banerjee",
            "ward_number": "WARD-08",                 # NON-STANDARD TYPE (STRING)
            "locality": "Salt Lake Sector V",
            "age": -999,                              # HIDDEN SENTINEL VALUE FOR MISSING
            "years_employed": 7,
            "annual_property_tax_inr": 28400.0,
            "tax_payment_status": "Pending",
            "phone_contact": "9830112233"
        },
        {
            "record_id": "KMC-2024-004",
            "citizen_name": "Debjani Chakraborty",
            "ward_number": 45,
            "locality": "Calcutta",                   # ARCHAIC CITY VARIANT
            "age": 9,                                 # LOGICAL ANOMALY: AGE 9
            "years_employed": 15,                     # WITH 15 YEARS EXPERIENCE!
            "annual_property_tax_inr": -500.0,        # IMPOSSIBLE NEGATIVE TAX
            "tax_payment_status": "N/A",              # TEXT SENTINEL FOR MISSING
            "phone_contact": "Unknown"
        },
        {
            "record_id": "KMC-2024-005",
            "citizen_name": "Anirban Banerjee",       # EXACT DUPLICATE OF 003
            "ward_number": 8,
            "locality": "Salt Lake Sector V",
            "age": 34,
            "years_employed": 7,
            "annual_property_tax_inr": 28400.0,
            "tax_payment_status": "Pending",
            "phone_contact": "9830112233"
        },
        {
            "record_id": "KMC-2024-006",
            "citizen_name": "Subhasis Roy",
            "ward_number": 62,
            "locality": "Howrah",
            "age": 55,
            "years_employed": 25,
            "annual_property_tax_inr": 999999.0,      # EXTREME SENSOR / INPUT GLITCH
            "tax_payment_status": "Overdue",
            "phone_contact": "+91-9874561230"
        },
        {
            "record_id": "KMC-2024-007",
            "citizen_name": "Priyanka Sen",
            "ward_number": 19,
            "locality": "Bidhannagar",
            "age": 29,
            "years_employed": 4,
            "annual_property_tax_inr": 12000.0,
            "tax_payment_status": "Paid",
            "phone_contact": "+91-9123456789"
        }
    ]


# =============================================================================
# 2. STAGE 1: SENTINEL DETECTION & NULL STANDARDIZATION
# =============================================================================

class SentinelSanitizer:
    """
    Detects and replaces hidden sentinel values (e.g. -999, 9999, 'N/A', '?', 'null')
    with standard Python None, allowing downstream imputers to function accurately.
    """
    NUMERIC_SENTINELS = {-999, -9999, 9999, 99999, 999999, -1}
    STRING_SENTINELS = {
        "n/a", "na", "null", "none", "?", "-", "--", "unknown", "missing", "undefined", "#null!"
    }

    def __init__(self):
        self.total_sentinels_cleaned = 0

    def clean_record(self, record: Dict[str, Any]) -> Dict[str, Any]:
        cleaned = {}
        for key, val in record.items():
            if val is None:
                cleaned[key] = None
                continue

            # Check numeric sentinels
            if isinstance(val, (int, float)) and val in self.NUMERIC_SENTINELS:
                cleaned[key] = None
                self.total_sentinels_cleaned += 1
                continue

            # Check string sentinels
            if isinstance(val, str):
                s_strip = val.strip().lower()
                if s_strip in self.STRING_SENTINELS or s_strip == "":
                    cleaned[key] = None
                    self.total_sentinels_cleaned += 1
                    continue

            cleaned[key] = val
        return cleaned


# =============================================================================
# 3. STAGE 2: TEXT CANONICALIZER & NORMALIZER
# =============================================================================

class TextCanonicalizer:
    """
    Standardizes inconsistent formatting, resolves archaic regional synonyms
    (e.g., 'Calcutta' -> 'Kolkata'), strips irregular whitespace, and normalizes phone numbers.
    """
    SYNONYM_DICTIONARY = {
        "calcutta": "Kolkata",
        "kol": "Kolkata",
        "barrackpore": "Barrackpore",
        "bkp": "Barrackpore",
        "bidhannagar": "Bidhannagar",
        "salt lake": "Salt Lake Sector V",
        "saltlake": "Salt Lake Sector V",
        "howrah": "Howrah",
        "hwh": "Howrah"
    }

    def clean_text(self, text: str) -> str:
        if not text:
            return ""
        # Remove superfluous interior whitespace and trim edges
        cleaned = re.sub(r"\\s+", " ", str(text).strip())
        return cleaned

    def canonicalize_locality(self, locality: Optional[str]) -> str:
        if not locality:
            return "Unknown Locality"
        cleaned = self.clean_text(locality)
        lower = cleaned.lower()
        for pattern, replacement in self.SYNONYM_DICTIONARY.items():
            if pattern in lower:
                return replacement
        return cleaned.title()

    def standardize_phone(self, phone: Optional[str]) -> Optional[str]:
        if not phone:
            return None
        # Extract digits only
        digits = re.sub(r"\\D", "", str(phone))
        if len(digits) == 10:
            return f"+91-{digits}"
        elif len(digits) == 12 and digits.startswith("91"):
            return f"+91-{digits[2:]}"
        return phone.strip()


# =============================================================================
# 4. STAGE 3: LOGICAL CONSTRAINT & DOMAIN INTEGRITY CHECKER
# =============================================================================

class ConstraintValidator:
    """
    Enforces business domain rules and cross-field logic:
    1. Age Constraint: 18 <= Age <= 100
    2. Tax Amount Constraint: Annual Tax >= 0
    3. Cross-Field Logic: Years Employed <= (Age - 16)
    """
    def __init__(self):
        self.validation_errors: List[Dict[str, Any]] = []

    def validate_and_correct(self, record: Dict[str, Any]) -> Dict[str, Any]:
        corrected = dict(record)
        rec_id = record.get("record_id", "Unknown")

        # 1. Clean Ward Number
        ward_raw = record.get("ward_number")
        if isinstance(ward_raw, str):
            digits = re.findall(r"\\d+", ward_raw)
            corrected["ward_number"] = int(digits[0]) if digits else 1

        # 2. Check Age & Experience
        age = corrected.get("age")
        exp = corrected.get("years_employed")

        if age is not None:
            if age < 18 or age > 110:
                self.validation_errors.append({
                    "record_id": rec_id,
                    "field": "age",
                    "reason": f"Age {age} violates biological range [18, 110]."
                })
                corrected["age"] = None  # Flag for imputation

        if age is not None and exp is not None:
            if exp > (age - 16):
                self.validation_errors.append({
                    "record_id": rec_id,
                    "field": "years_employed",
                    "reason": f"Experience {exp} exceeds logical maximum for Age {age}."
                })
                # Auto-rectify: cap experience to (age - 18) if plausible, else mark None
                corrected["years_employed"] = max(0, age - 18)

        # 3. Check Tax Amount
        tax = corrected.get("annual_property_tax_inr")
        if tax is not None:
            if tax < 0:
                self.validation_errors.append({
                    "record_id": rec_id,
                    "field": "annual_property_tax_inr",
                    "reason": f"Tax amount {tax} cannot be negative."
                })
                corrected["annual_property_tax_inr"] = abs(tax)  # Assume sign slip
            elif tax > 200000.0:
                self.validation_errors.append({
                    "record_id": rec_id,
                    "field": "annual_property_tax_inr",
                    "reason": f"Tax amount {tax} exceeds municipal cap (outlier glitch)."
                })
                corrected["annual_property_tax_inr"] = 28400.0  # Cap or impute

        return corrected


# =============================================================================
# 5. STAGE 4: EXACT & FUZZY DEDUPLICATOR
# =============================================================================

class FuzzyDeduplicator:
    """
    Detects both exact primary duplicates and fuzzy near-duplicates based on
    string similarity of (Name, Locality, Phone) using Levenshtein ratio.
    """
    def __init__(self, similarity_threshold: float = 0.82):
        self.threshold = similarity_threshold
        self.purged_duplicates: List[Tuple[str, str, float]] = []

    def string_similarity(self, s1: str, s2: str) -> float:
        return difflib.SequenceMatcher(None, s1.lower(), s2.lower()).ratio()

    def deduplicate(self, records: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        unique_records = []
        seen_phones = set()

        for current in records:
            phone = current.get("phone_contact")
            name = current.get("citizen_name", "")
            loc = current.get("locality", "")

            # Exact phone collision check
            if phone and phone in seen_phones:
                self.purged_duplicates.append((current["record_id"], "Phone Collision", 1.0))
                continue

            # Fuzzy name & locality check against accepted records
            is_fuzzy_duplicate = False
            for accepted in unique_records:
                sim_name = self.string_similarity(name, accepted.get("citizen_name", ""))
                sim_loc = self.string_similarity(loc, accepted.get("locality", ""))
                composite_sim = 0.7 * sim_name + 0.3 * sim_loc

                if composite_sim >= self.threshold:
                    self.purged_duplicates.append(
                        (current["record_id"], f"Fuzzy match with {accepted['record_id']}", round(composite_sim, 2))
                    )
                    is_fuzzy_duplicate = True
                    break

            if not is_fuzzy_duplicate:
                unique_records.append(current)
                if phone:
                    seen_phones.add(phone)

        return unique_records


# =============================================================================
# 6. STAGE 5: COMPOSITE CLEANING PIPELINE & AUDIT ENGINE
# =============================================================================

class EndToEndDataCleaningPipeline:
    """
    Chains all data cleaning components and generates a quantitative Data Quality Audit.
    """
    def __init__(self):
        self.sentinel_sanitizer = SentinelSanitizer()
        self.text_canonicalizer = TextCanonicalizer()
        self.constraint_validator = ConstraintValidator()
        self.fuzzy_deduplicator = FuzzyDeduplicator(similarity_threshold=0.80)

    def execute_pipeline(self, raw_data: List[Dict[str, Any]]) -> Tuple[List[Dict[str, Any]], Dict[str, Any]]:
        initial_count = len(raw_data)
        
        # Step 1: Sentinel Sanitization
        sanitized_records = [self.sentinel_sanitizer.clean_record(r) for r in raw_data]

        # Step 2: Text Canonicalization
        canonical_records = []
        for r in sanitized_records:
            row = dict(r)
            row["citizen_name"] = self.text_canonicalizer.clean_text(row.get("citizen_name", ""))
            row["locality"] = self.text_canonicalizer.canonicalize_locality(row.get("locality"))
            row["phone_contact"] = self.text_canonicalizer.standardize_phone(row.get("phone_contact"))
            row["tax_payment_status"] = str(row.get("tax_payment_status") or "Pending").title()
            canonical_records.append(row)

        # Step 3: Domain Constraint & Cross-Field Validation
        validated_records = [self.constraint_validator.validate_and_correct(r) for r in canonical_records]

        # Step 4: Fuzzy & Exact Deduplication
        cleaned_records = self.fuzzy_deduplicator.deduplicate(validated_records)

        # Compute Cleanliness Metrics
        final_count = len(cleaned_records)
        duplicates_removed = len(self.fuzzy_deduplicator.purged_duplicates)
        rule_violations = len(self.constraint_validator.validation_errors)
        sentinels_fixed = self.sentinel_sanitizer.total_sentinels_cleaned

        # Health score: 100 - penalties
        penalty = (duplicates_removed * 15) + (rule_violations * 10) + (sentinels_fixed * 5)
        cleanliness_score = max(20, min(100, 100 - penalty))

        audit_report = {
            "initial_records": initial_count,
            "final_clean_records": final_count,
            "duplicates_purged": duplicates_removed,
            "rule_violations_fixed": rule_violations,
            "sentinels_standardized": sentinels_fixed,
            "cleanliness_score": cleanliness_score,
            "purged_details": self.fuzzy_deduplicator.purged_duplicates,
            "violation_details": self.constraint_validator.validation_errors
        }

        return cleaned_records, audit_report


# =============================================================================
# 7. DEMONSTRATION & VERIFICATION DRIVER
# =============================================================================

def run_topic7_data_cleaning_lab():
    print("=" * 80)
    print("TOPIC 7: DATA CLEANING & RECTIFICATION PIPELINE - LABORATORY SIMULATION")
    print("Author: Sukanta Hui | Coder & AccoTax | Barrackpore, West Bengal")
    print("Course: BCAC701B - Introduction to Machine Learning")
    print("=" * 80)

    # 1. Ingest Raw Dataset
    raw_records = get_raw_kmc_citizen_dataset()
    print(f"\\n[STEP 1] Ingested Raw Dataset: {len(raw_records)} records with realistic defects.")
    print("\\nSample Dirty Records:")
    print(f"  Record 001: {raw_records[0]}")
    print(f"  Record 002: {raw_records[1]} (Fuzzy near-duplicate of 001)")
    print(f"  Record 004: {raw_records[3]} (Age 9 with 15 yrs experience & negative tax!)")

    # 2. Execute Data Cleaning Pipeline
    pipeline = EndToEndDataCleaningPipeline()
    clean_records, audit = pipeline.execute_pipeline(raw_records)

    # 3. Present Audit Report
    print("\\n" + "=" * 80)
    print("DATA QUALITY AUDIT & RECTIFICATION REPORT")
    print("=" * 80)
    print(f"  Initial Records Ingested:    {audit['initial_records']}")
    print(f"  Final Clean Records:         {audit['final_clean_records']}")
    print(f"  Duplicates Purged:           {audit['duplicates_purged']}")
    print(f"  Logical Violations Fixed:    {audit['rule_violations_fixed']}")
    print(f"  Hidden Sentinels Replaced:   {audit['sentinels_standardized']}")
    print(f"  Overall Cleanliness Score:   {audit['cleanliness_score']} / 100")

    print("\\n[PURGED DUPLICATES LOG]")
    for rec_id, reason, sim in audit["purged_details"]:
        print(f"  • {rec_id:15s}: {reason} (Confidence: {sim})")

    print("\\n[LOGICAL RECTIFICATION LOG]")
    for err in audit["violation_details"]:
        print(f"  • {err['record_id']} [{err['field']}]: {err['reason']}")

    # 4. Display Final Clean Dataset
    print("\\n" + "=" * 80)
    print("FINAL SANITIZED & CANONICAL DATASET")
    print("=" * 80)
    for idx, r in enumerate(clean_records):
        tax_str = f"Rs {r['annual_property_tax_inr']:8.1f}" if r.get('annual_property_tax_inr') is not None else "Rs      N/A"
        phone_str = r.get('phone_contact') or "No Phone Provided"
        print(f"  [{idx+1}] {r['citizen_name']:22s} | Ward {r['ward_number']:2d} | Loc: {r['locality']:22s} | Age: {str(r['age']):4s} | Exp: {str(r['years_employed']):2s} yrs | Tax: {tax_str} | Phone: {phone_str}")

    print("\\n" + "=" * 80)
    print("DATA CLEANING SIMULATION COMPLETED CLEANLY WITH ZERO RUNTIME ERRORS")
    print("=" * 80)

if __name__ == "__main__":
    run_topic7_data_cleaning_lab()
`,V=`=============================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES & REVISION HANDBOOK
Course: Introduction to Machine Learning (Subject Code: BCAC701B)
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Topic 7: Data Cleaning & Rectification Architecture
Author: Sukanta Hui | Coder & AccoTax | Barrackpore, West Bengal, India
=============================================================================

1. EXECUTIVE OVERVIEW: THE ANATOMY OF DATA CLEANING
-----------------------------------------------------------------------------
Data Cleaning (also designated as Data Cleansing or Data Scrubbing) is the rigorous 
computational process of detecting, diagnosing, and rectifying corrupt, inaccurate, 
incomplete, duplicated, or improperly formatted records from a dataset.

While general preprocessing encompasses scaling, dimensionality reduction, and 
feature extraction, Data Cleaning is specifically concerned with DATA INTEGRITY 
and FIDELITY:
    Clean Data = Real-World Ground Truth - Measurement Noise - Ingestion Artifacts

In empirical Machine Learning projects:
- Real-world data is NEVER clean; it originates from heterogeneous databases, faulty IoT 
  sensors, manual citizen web forms, and legacy COBOL/Excel dumps.
- Up to 40% of records in raw public sector registries contain at least one defect.
- Training an algorithm on dirty data produces biased model weights, high prediction 
  variance, and unexplainable production failures.


2. THE 4 CLASSIFICATIONS OF DATA DIRT
-----------------------------------------------------------------------------
Data defects manifest across four primary architectural classifications:

A. Syntactic & Structural Irregularities:
   - Case Mismatches: 'kolkata', 'Kolkata', 'KOLKATA', 'Calcutta' representing the identical city.
   - Irregular Whitespace: Leading tabs, trailing spaces, or hidden non-breaking spaces ('\\u00a0').
   - Format Discordance: Dates written as '2024-05-12' vs '12/05/2024' vs 'May 12, 2024'.
   - Phone Numbers: '9432456083' vs '+91-9432456083' vs '(033) 2592-XXXX'.

B. Semantic & Logical Contradictions:
   - Domain Range Violations: Age = -5, Human Heart Rate = 450 bpm, Property Tax = -Rs 500.
   - Cross-Field Inconsistencies: Citizen Age = 8 years old, but Years of Employment = 15 years.
   - Chronological Anomalies: Hospital Discharge Date preceding Admission Date.

C. Hidden Sentinel Values (Implicit Missing Data):
   - Legacy systems avoid null pointer exceptions by filling missing cells with special constants:
     Numeric Sentinels: -999, -1, 9999, 999999
     String Sentinels: 'N/A', 'NA', 'NULL', 'None', '?', 'MISSING', '#REF!', 'Unknown'
   - Standard automated checks (e.g., pandas \`df.isna()\`) evaluate to FALSE on these valid 
     floats or strings, secretly poisoning statistical means, variances, and loss functions!

D. Duplicate Entities (Exact vs Fuzzy Near-Duplicates):
   - Exact Duplicates: Identical byte-for-byte rows resulting from network retry loops.
   - Fuzzy / Near-Duplicates: The same physical person recorded under different keys:
     "Sukanta Hui, Barrackpore, 9432456083" vs "S. Hui, Barrackpore, +919432456083".


3. MATHEMATICAL FOUNDATIONS OF DATA CLEANING
-----------------------------------------------------------------------------
1. Levenshtein Edit Distance Metric:
   The minimum number of single-character edits (insertions, deletions, substitutions) 
   required to transform string s1 into string s2:
       D(i, j) = 0                                     if i=0, j=0
       D(i, j) = i                                     if j=0
       D(i, j) = j                                     if i=0
       D(i, j) = min [ D(i-1, j) + 1,                  (Deletion)
                       D(i, j-1) + 1,                  (Insertion)
                       D(i-1, j-1) + cost(s1[i], s2[j]) ] (Substitution)
       where cost = 0 if s1[i] == s2[j] else 1.

   Normalized Similarity Ratio:
       Sim(s1, s2) = 1.0 - [ D(s1, s2) / max(|s1|, |s2|) ] in [0.0, 1.0]

2. Noise Contamination Theorem in Linear Models:
   Let true data generating process be y = X*beta + epsilon.
   If inputs are contaminated with measurement noise X_dirty = X + Delta:
       beta_hat = (X_dirty^T * X_dirty)^(-1) * X_dirty^T * y
   This produces Attenuation Bias (Errors-in-Variables):
       E[beta_hat] = beta * [ sigma_X^2 / (sigma_X^2 + sigma_Delta^2) ]
   As sensor noise variance sigma_Delta^2 increases, the estimated parameter beta_hat 
   is shrunk toward zero, destroying true causal relationship detection!

3. Listwise Deletion Information Loss:
   Dropping any row containing a missing attribute results in sample size reduction:
       N_clean = N * prod_{j=1}^d (1 - p_j)
   If a dataset has 50 columns each with only 3% missingness, complete-case analysis 
   discards over 78% of all collected training records:
       (1 - 0.03)^50 = 0.218 -> 78.2% data destroyed!


4. THE 5-STAGE END-TO-END DATA CLEANING PROTOCOL
-----------------------------------------------------------------------------
Stage 1: Profiling & Schema Auditing
  - Detect column data types, null ratios, cardinality, and unexpected non-numeric tokens.
  - Calculate baseline Data Quality Index before any mutation.

Stage 2: Hidden Sentinel Extraction & Standardization
  - Scan numerical columns for legacy sentinel boundaries (-999, 9999).
  - Convert all semantic missing tokens ('N/A', '?', 'null') explicitly to np.nan.

Stage 3: Text Normalization & Canonical Synonym Mapping
  - Trim leading/trailing whitespace and collapse interior spaces (\`re.sub(r'\\s+', ' ', text)\`).
  - Apply domain-specific synonym dictionaries ('Calcutta' -> 'Kolkata', 'Bkp' -> 'Barrackpore').
  - Standardize phone numbers to canonical E.164 international format (+91-XXXXXXXXXX).

Stage 4: Domain Constraint & Cross-Field Logical Validation
  - Enforce physical bounds: Age in [18, 100], Tax >= 0.
  - Cross-field logic checks: if Years_Experience > (Age - 16), flag and auto-correct.

Stage 5: Deduplication (Deterministic & Probabilistic Entity Resolution)
  - Pass 1: Deterministic primary key / contact hash deduplication.
  - Pass 2: Fuzzy composite string matching on Name + Locality with similarity threshold >= 0.80.
  - Maintain an immutable Audit Trail logging every deleted row and modified attribute value.


5. REGIONAL WEST BENGAL INDUSTRIAL CASE STUDIES
-----------------------------------------------------------------------------
Case Study 1: Kolkata Municipal Corporation (KMC) Property Tax Registry
- Problem: Tax assessment records from 144 civic wards contain fuzzy address variations:
  "Ballygunge Circular Rd", "Ballygunge Cir Rd", "B.C. Road", "Ballygunge Cir. Road".
- Solution: Rule-based regex token expansion combined with Levenshtein fuzzy deduplication, 
  collapsing 12,000 duplicate assessment accounts and recovering Rs 4.2 Crores in unlinked tax dues.

Case Study 2: West Bengal Food & Supplies Department (WBFACS - Khadya Sathi)
- Problem: Digitization of 8.5 Crore ration cards created transliteration errors when 
  converting Bengali citizen names into English (e.g. "Bondopadhyay" vs "Banerjee", "Mukhopadhyay" vs "Mukherjee").
- Solution: Phonetic encoding algorithms (Soundex / Metaphone tailored to Indic phonetics) 
  linked with Aadhaar UIDAI deduplication to eliminate fraudulent ghost cards.

Case Study 3: North 24 Parganas District Hospital Emergency ICU Telemetry
- Problem: Patient heart-rate and oxygen telemetry streams recorded zero values (0 bpm) 
  whenever ECG chest leads disconnected as patients shifted in bed.
- Solution: Multi-sensor cross-validation: if heart rate = 0 bpm but blood pressure and 
  pulse oximeter waveforms remain normal, the zero reading is classified as a mechanical 
  lead disconnect artifact (flagged as missing and forward-filled) rather than cardiac arrest.

Case Study 4: Howrah Wholesale Agricultural & Fish Mandi Ledgers
- Problem: Daily wholesale ledgers mixed traditional Bengali weight units (Maund = 37.32 kg, 
  Seer = 0.933 kg) with modern metric Kilograms and Quintals.
- Solution: Deterministic unit extraction parser that converts all legacy imperial and regional 
  units into standardized SI kilograms (kg) before feeding commodity price forecast models.


6. ENGINEERING BEST PRACTICES & COMMON ANTI-PATTERNS
-----------------------------------------------------------------------------
1. Anti-Pattern: Blind Listwise Row Dropping (\`df.dropna()\`)
   - Naively executing \`df.dropna()\` without profiling can delete 80% of your training dataset, 
     inducing fatal survivorship and selection bias.
   - Best Practice: Drop columns with > 60-70% missingness; impute columns with < 30% missingness.

2. Anti-Pattern: Hardcoded In-Place Mutation Without Lineage Tracking
   - Mutating raw DataFrames in-place destroys reproducibility and makes it impossible to 
     audit what changed, why it changed, or whether an algorithm hallucinated a correction.
   - Best Practice: Maintain a structured audit log recording {record_id, field, original_val, clean_val, rule_triggered}.

3. Anti-Pattern: Unconditional Case-Folding
   - Lowercasing all text can destroy meaningful domain signals (e.g., 'IT' [Information Tech] 
     becomes pronoun 'it'; 'US' [United States] becomes 'us').
   - Best Practice: Apply case-folding strictly to nominal category dictionaries and entity names.

4. Anti-Pattern: Ignoring Hidden Non-Breaking Spaces
   - Web scrapers often ingest \`&nbsp;\` (Unicode \`\\u00a0\`). Standard Python \`.strip()\` or SQL \`TRIM()\` 
     does not remove non-breaking spaces in legacy database engines, causing string joins to fail silently.
   - Best Practice: Normalize Unicode strings via \`unicodedata.normalize('NFKD', s)\`.


7. MAKAUT SEMESTER EXAM REVISION FLASHCARDS & SHORT QUESTIONS
-----------------------------------------------------------------------------
[Q1] Define Data Cleaning and state its primary objective.
     -> The systematic detection and rectification of corrupt, inaccurate, incomplete, or 
        duplicated records to ensure data integrity prior to machine learning training.

[Q2] What is a hidden sentinel value? Give two examples.
     -> A valid numeric or text constant used by legacy databases to represent missing values 
        (e.g., -999 for missing age, 'N/A' or 'Unknown' for missing category), which bypasses 
        standard null checks.

[Q3] How does Levenshtein distance differ from Hamming distance?
     -> Hamming distance only measures substitutions between strings of EQUAL length. 
        Levenshtein distance handles insertions, deletions, and substitutions between strings 
        of DIFFERENT lengths.

[Q4] Explain the difference between Exact Deduplication and Fuzzy Deduplication.
     -> Exact deduplication checks for 100% byte or hash equality. Fuzzy deduplication 
        identifies near-duplicates using string similarity thresholds (e.g. "S. Hui" vs "Sukanta Hui").

[Q5] What is Attenuation Bias caused by measurement noise?
     -> When feature measurements contain random noise, regression coefficients beta_hat 
        are systematically shrunk toward zero, underestimating the true relationship.

=============================================================================
END OF REVISION HANDBOOK - CODER & ACCOTAX BARRACKPORE
=============================================================================
`,Y=[{id:1,question:"What is the primary definition and objective of Data Cleaning in machine learning?",shortAnswer:"Data Cleaning is the systematic detection, diagnosis, and rectification of corrupt, inaccurate, incomplete, duplicated, or improperly formatted records to ensure data integrity prior to model training.",explanation:"Unlike general preprocessing which handles scaling and feature encoding, Data Cleaning specifically eliminates dirt, sensor glitches, syntax discrepancies, and contradictions so that algorithms learn true ground-truth relationships rather than noise.",hint:"Think about removing dirt, errors, and noise versus transforming clean data for models.",level:"Basic",codeExample:`# Basic Data Cleaning Pipeline in Pandas
def basic_clean(df):
    df = df.drop_duplicates()
    df['city'] = df['city'].str.strip().str.title()
    return df`},{id:2,question:"How do structural defects differ from semantic contradictions in raw datasets?",shortAnswer:"Structural defects are syntax, formatting, or casing flaws (e.g. 'kolkata' vs 'Kolkata'); semantic contradictions violate real-world business logic (e.g. Age=8 with 15 years of employment).",explanation:"Structural issues can often be resolved with regex, whitespace stripping, and casing standardizers. Semantic contradictions require domain-specific logical validation rules (e.g., ensuring child age does not co-occur with professional experience or negative tax dues).",hint:"One is about how data is spelled or formatted; the other is about whether the data makes logical sense.",level:"Basic",codeExample:`# Structural fix: strip and title
df['city'] = df['city'].str.strip().str.title()

# Semantic fix: validate logical contradiction
mask = (df['age'] < 18) & (df['years_employed'] > 0)
df.loc[mask, 'years_employed'] = 0`},{id:3,question:"What are hidden sentinel values and why do standard pandas .isna() functions fail to detect them?",shortAnswer:"Sentinels are valid numerical or text constants (e.g. -999, 9999, 'N/A', 'Unknown') used by legacy databases to mark missing data; because they are valid types, standard null-checkers treat them as legitimate observations.",explanation:"If a medical monitor records -999 when an oxygen sensor unplugs, Python reads it as a valid integer. `df.isna()` returns False, causing the mean blood oxygen calculation to include -999, which heavily skews training features.",hint:"Does Python consider -999 as NaN or as a real integer?",level:"Basic",codeExample:`import pandas as pd
import numpy as np

s = pd.Series([98.5, 99.0, -999, 97.2])
# Wrong: naively computes mean including -999
print('Corrupted mean:', s.mean())  # ~ -201.07!
# Correct: replace sentinels with NaN
s_clean = s.replace([-999, 9999], np.nan)
print('Corrected mean:', s_clean.mean())  # 98.23`},{id:4,question:"What is the difference between Exact Duplicates and Fuzzy Near-Duplicates?",shortAnswer:"Exact duplicates are identical across all column values and byte hashes; fuzzy near-duplicates refer to the same physical entity recorded with minor variations (e.g. 'S. Hui' vs 'Sukanta Hui').",explanation:"Exact duplicates are trivial to evict using hash sets or `df.drop_duplicates()`. Fuzzy near-duplicates require string similarity metrics like Levenshtein distance, Jaro-Winkler, or phonetic matching to detect and consolidate.",hint:"Think about byte-for-byte identical rows versus typos or abbreviated names for the same person.",level:"Basic",codeExample:`# Exact Deduplication
df_exact = df.drop_duplicates(subset=['citizen_id'])

# Fuzzy detection requires similarity algorithms
from difflib import SequenceMatcher
sim = SequenceMatcher(None, 'Sukanta Hui', 'S. Hui').ratio()
print('Fuzzy Similarity:', sim)  # ~0.67`},{id:5,question:"Why can running df.dropna() without prior exploratory profiling severely damage model training?",shortAnswer:"Listwise deletion discards every row with even one missing value; if missingness is spread across multiple columns, it can accidentally destroy the majority of the dataset, inducing severe survivorship bias.",explanation:"In a dataset with 40 columns each missing just 3% of values randomly, running `dropna()` eliminates over 70% of all observations. Furthermore, if vulnerable or rural citizen demographics have higher missingness, dropping them creates extreme demographic bias.",hint:"What percentage of data remains if 30 columns each have 2% independent missing entries?",level:"Basic",codeExample:`# Example of massive information loss
import pandas as pd
import numpy as np

df = pd.DataFrame(np.random.choice([1.0, np.nan], size=(1000, 30), p=[0.97, 0.03]))
print(f'Before dropna: {len(df)} rows')
print(f'After dropna:  {len(df.dropna())} rows')  # Typically drops ~60% of data!`},{id:6,question:"What is whitespace normalization and why are non-breaking spaces (Unicode \\u00a0) problematic?",shortAnswer:"Whitespace normalization removes leading, trailing, and redundant interior spaces; non-breaking spaces (&nbsp; or \\u00a0) fail standard ASCII strip routines, causing identical strings to fail equality checks.",explanation:"Web scrapers frequently ingest non-breaking spaces. When joining tables on citizen name, `'Sukanta Hui'` with a normal space does not equal `'Sukanta\\u00a0Hui'` with a non-breaking space, causing silent relational join failures.",hint:"Why would two strings that look identical to human eyes evaluate to False in `s1 == s2`?",level:"Basic",codeExample:`import unicodedata, re
raw_str = 'Sukanta\\u00a0Hui   '
# Standard strip does not remove internal non-breaking space!
clean_str = unicodedata.normalize('NFKD', raw_str).strip()
clean_str = re.sub(r'\\s+', ' ', clean_str)
print('Normalized:', repr(clean_str))`},{id:7,question:"How do inconsistent categorical casings (e.g. 'Kolkata', 'kolkata', 'KOLKATA') harm One-Hot Encoding?",shortAnswer:"One-Hot Encoding treats strings case-sensitively, creating separate binary columns for each spelling variation and unnecessarily fragmenting statistical sample weight.",explanation:"If 1,000 citizens from Kolkata are split across 'Kolkata' (700), 'kolkata' (200), and 'KOLKATA' (100), three distinct orthogonal features are created. The model treats them as three independent locations, reducing statistical power and confusing tree splits.",hint:"How many columns does `pd.get_dummies` create if a city name has 3 casing variations?",level:"Basic",codeExample:`import pandas as pd

cities = pd.Series(['Kolkata', 'kolkata', 'KOLKATA'])
print('Uncleaned One-Hot Columns:', pd.get_dummies(cities).columns.tolist())
# Cleaned:
clean_cities = cities.str.strip().str.title()
print('Cleaned One-Hot Columns:', pd.get_dummies(clean_cities).columns.tolist())`},{id:8,question:"What is an Audit Trail or Data Lineage Log in an enterprise data cleaning pipeline?",shortAnswer:"An immutable log recording every correction, row deletion, and modification made during cleaning, documenting the original value, new value, rule triggered, and timestamp.",explanation:"In regulated domains like healthcare and civic tax registries, mutating raw data silently destroys reproducibility and legal compliance. An audit trail allows engineers to verify why a value was imputed or modified and reconstruct the raw input if necessary.",hint:"How do you prove to an auditor that an algorithm didn't tamper with financial records?",level:"Basic",codeExample:`audit_log = []
def log_correction(rec_id, field, old_val, new_val, reason):
    audit_log.append({
        'record_id': rec_id, 'field': field,
        'original': old_val, 'corrected': new_val, 'reason': reason
    })`},{id:9,question:"Explain the mathematical formulation and dynamic programming computation of Levenshtein Edit Distance.",shortAnswer:"Levenshtein distance measures the minimum number of single-character insertions, deletions, or substitutions required to transform string s1 into s2 using a dynamic programming matrix.",explanation:"The recurrence is D(i, j) = min(D(i-1, j) + 1, D(i, j-1) + 1, D(i-1, j-1) + cost), where cost = 0 if s1[i] == s2[j] else 1. The matrix runs in O(|s1| * |s2|) time, providing an exact edit distance used to detect fuzzy typographical duplicates.",hint:"Recall the 3 allowed edit operations: insert, delete, substitute.",level:"Moderate",codeExample:`def levenshtein(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(m+1): dp[i][0] = i
    for j in range(n+1): dp[0][j] = j
    for i in range(1, m+1):
        for j in range(1, n+1):
            cost = 0 if s1[i-1] == s2[j-1] else 1
            dp[i][j] = min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+cost)
    return dp[m][n]`},{id:10,question:"How does random measurement noise in feature inputs cause Attenuation Bias in Linear Regression?",shortAnswer:"When an explanatory feature contains random measurement noise X_dirty = X + Delta, the estimated coefficient beta_hat is systematically biased towards zero (underestimating the relationship).",explanation:"Under the classical Errors-in-Variables model, E[beta_hat] = beta * (sigma_X^2 / (sigma_X^2 + sigma_Delta^2)). Because the noise variance sigma_Delta^2 > 0, the shrinkage factor is strictly less than 1.0, diluting the perceived impact of the predictor.",hint:"What happens to the denominator (sigma_X^2 + sigma_Delta^2) as sensor noise increases?",level:"Moderate",codeExample:`# Attenuation Bias Demonstration
import numpy as np
np.random.seed(42)
X_true = np.random.normal(0, 1, 1000)
y = 3.0 * X_true + np.random.normal(0, 0.5, 1000)
# Add random sensor measurement noise
X_noisy = X_true + np.random.normal(0, 1.5, 1000)
slope_true = np.polyfit(X_true, y, 1)[0]   # ~ 3.0
slope_noisy = np.polyfit(X_noisy, y, 1)[0] # ~ 0.92 (Heavily attenuated!)`},{id:11,question:"Why does dropping records containing missing values introduce Survivorship Bias in predictive models?",shortAnswer:"If missingness is not completely random (e.g. failing businesses or critically ill patients fail to report metrics), dropping them trains the model only on surviving, healthier entities.",explanation:"If you are predicting student dropout rates at a college and unmotivated students stop taking optional quizzes, discarding students with missing quiz grades trains the model exclusively on diligent students, blinding it to the exact dropout risk factors.",hint:"Who is most likely to fail to fill out a survey or questionnaire?",level:"Moderate",codeExample:`# Survivorship bias: Discarding nulls purges the at-risk cohort
# df_clean = df[df['attended_review'].notna()]
# Result: You just dropped 80% of students who will fail the course!`},{id:12,question:"When is Rule-Based Domain Validation strongly preferred over Machine Learning Anomaly Detection for data cleaning?",shortAnswer:"When physical, legal, biological, or arithmetic constraints are known with deterministic certainty (e.g., Age >= 0, Tax >= 0, Discharge Date >= Admission Date).",explanation:"ML anomaly detection (like Isolation Forests) is non-deterministic and can produce false positives on legitimate rare events while missing obvious arithmetic rule violations. Deterministic assertions guarantee 100% adherence to domain rules without training data dependencies.",hint:"Do you need a neural network to check if a person's age is negative?",level:"Moderate",codeExample:`# Rule-Based Assertion in Pandas
assert (df['age'] >= 0).all(), 'Negative age detected!'
assert (df['discharge_date'] >= df['admission_date']).all(), 'Time travel detected!'`},{id:13,question:"How does the Jaro-Winkler string distance metric differ from standard Levenshtein distance, and why is it favored for person names?",shortAnswer:"Jaro-Winkler focuses on character transpositions and assigns higher similarity scores to strings that share a common prefix, mirroring real-world human name spelling patterns.",explanation:"In citizen registries, typos in first and last names rarely affect the first 3-4 letters (e.g. 'Banerjee' vs 'Banerji', 'Chakraborty' vs 'Chakravorty'). Jaro-Winkler scales up similarity if the initial prefix matches, making it far superior to Levenshtein for entity resolution.",hint:"Why are humans less likely to make a typo on the very first letter of their own surname?",level:"Moderate",codeExample:`# Jaro-Winkler gives a bonus for matching prefixes (e.g. 'Baner...')
# Sim_JW = Sim_Jaro + L * p * (1 - Sim_Jaro)
# where L is length of matching prefix and p is constant scaling factor (0.1)`},{id:14,question:"What are cross-field logical constraints and how do you programmatically detect violations in customer records?",shortAnswer:"Cross-field constraints check the arithmetic or logical consistency between two or more interdependent columns (e.g. Total_Loan = Principal + Interest; Work_Experience <= Age - 16).",explanation:"A single column might be completely valid on its own (e.g. Age = 7 is valid for a human; Experience = 10 is valid for a career), but their joint intersection is physically impossible. Cross-field validation flags these multidimensional contradictions.",hint:"Can two fields both be valid individually, yet impossible together?",level:"Moderate",codeExample:`import pandas as pd
# Cross-field violation mask
violations = df[df['years_employed'] > (df['age'] - 16)]
print(f'Detected {len(violations)} impossible age-experience combinations.')`},{id:15,question:"How should non-standard regional measurement units (such as Maund, Seer, and Quintal) be parsed and standardized?",shortAnswer:"Using regex unit-extraction tokenizers that extract both the numeric magnitude and unit label, multiplying by conversion factors to map all entries into standard SI kilograms.",explanation:"In wholesale agricultural mandis across West Bengal, transactions mix metric kg, quintals (100 kg), maunds (~37.32 kg), and seers (~0.933 kg). Parsing requires regex extraction of the unit suffix and multiplying into a single canonical float column.",hint:"How do you compare 2 maunds of fish with 70 kilograms of fish mathematically?",level:"Moderate",codeExample:`CONVERSIONS = {'kg': 1.0, 'quintal': 100.0, 'maund': 37.32, 'seer': 0.933}
def parse_weight_to_kg(entry_str):
    import re
    match = re.match(r'([0-9.]+)\\s*([a-zA-Z]+)', str(entry_str))
    if match:
        val, unit = float(match.group(1)), match.group(2).lower()
        return val * CONVERSIONS.get(unit, 1.0)
    return None`},{id:16,question:"What is Phonetic String Matching (Soundex / Metaphone) and when is it essential for deduplication?",shortAnswer:"Phonetic matching indexes words by their spoken pronunciation rather than exact spelling, allowing detection of homophones and transliteration variations (e.g. 'Banerjee' vs 'Bondopadhyay').",explanation:"When digitizing Indian administrative records from Bengali or Hindi to English, multiple transliterations exist for identical names (e.g. 'Choudhury', 'Chowdhury', 'Chowdhuri'). Soundex maps consonants to numeric sound codes, grouping identical phonemes.",hint:"How does software recognize that 'Smith' and 'Smyth' sound exactly the same?",level:"Moderate",codeExample:`# Phonetic indexing maps distinct spellings to identical sound codes
# e.g. Soundex('Mukherjee') == Soundex('Mukherji') -> 'M262'`},{id:17,question:"What is the computational complexity of exhaustive pairwise deduplication on N records, and how is it optimized with Blocking?",shortAnswer:"Exhaustive pairwise comparison requires O(N^2) string similarity calculations; Blocking partitions records into smaller buckets sharing an exact attribute (e.g. Ward Number or PIN code), reducing comparisons to O(N * (N/B)).",explanation:"Comparing 1,000,000 citizen records pairwise requires (10^6)^2 / 2 = 5 * 10^11 Levenshtein calculations, taking weeks of CPU time. Blocking restricts comparisons only to records sharing identical PIN codes or Soundex phonemes, slashing computation by 99%.",hint:"Why compare a citizen in Barrackpore with a citizen in Darjeeling if they can never be the same person?",level:"Advanced",codeExample:`# Blocking by PIN code
def blocked_deduplication(records):
    from collections import defaultdict
    blocks = defaultdict(list)
    for r in records:
        blocks[r['pin_code']].append(r)
    # Only compare records WITHIN the same pin_code block!
    for pin, group in blocks.items():
        pairwise_fuzzy_match(group)`},{id:18,question:"How does Errors-in-Variables (EIV) modeling address attenuation bias mathematically?",shortAnswer:"EIV modeling assumes features have additive error X_obs = X_true + u, and uses Instrumental Variables (IV) or Total Least Squares (Orthogonal Distance Regression) to recover unbiased coefficients.",explanation:"Standard OLS assumes independent variables are measured with zero error. When measurement error u ~ N(0, sigma_u^2) exists, ODR minimizes orthogonal Euclidean distance to the fitted hyper-plane rather than vertical squared residuals, correcting the shrinkage factor.",hint:"Instead of minimizing vertical residuals (y - y_hat)^2, what if you minimize perpendicular distance from the point to the line?",level:"Advanced",codeExample:`from scipy.odr import ODR, Model, RealData
# Orthogonal Distance Regression (ODR) for noisy features
def f(B, x): return B[0]*x + B[1]
model = Model(f)
data = RealData(X_noisy, y_noisy, sx=1.5, sy=0.5)
odr = ODR(data, model, beta0=[1.0, 0.0])
output = odr.run()
print('ODR Unbiased Beta:', output.beta[0])`},{id:19,question:"Explain the trade-off between Precision and Recall when setting the similarity threshold for fuzzy entity resolution.",shortAnswer:"A high threshold (e.g. 0.95) maximizes Precision (ensuring merged entities are truly the same) but sacrifices Recall (missing subtle duplicates); a low threshold (e.g. 0.65) catches all duplicates but merges distinct people.",explanation:"In banking fraud, missing a duplicate entity (low recall) allows money laundering. In medical surgery records, mistakenly merging two distinct patients with similar names (low precision) can lead to operating on the wrong person. The threshold must be tuned to domain cost matrices.",hint:"What is worse: merging two different patients, or having two records for the same patient?",level:"Advanced",codeExample:`# Setting threshold balance
# High threshold (0.92): Few merges, zero false merges (High Precision)
# Low threshold (0.75): Many merges, risky accidental merges (High Recall)`},{id:20,question:"How do Multi-Sensor Agreement Rules differentiate between a genuine cardiac arrest and a mechanical ICU lead disconnect?",shortAnswer:"By evaluating corroborating telemetry: if ECG heart rate drops to 0 bpm, but SpO2 pulse waveform and arterial blood pressure remain stable, the event is categorized as an artifact rather than arrest.",explanation:"Cleaning medical telemetry requires cross-sensor multivariate logic. A true cardiac arrest causes instantaneous collapse across SpO2, blood pressure, and respiratory sensors. Isolated zero readings in a single channel are classified as sensor lead detachment and imputed.",hint:"Can a patient have zero pulse while maintaining normal blood oxygen and consciousness?",level:"Advanced",codeExample:`def clean_icu_telemetry(row):
    if row['ecg_bpm'] == 0:
        if row['spo2_pct'] > 90 and row['art_pressure'] > 60:
            row['ecg_bpm'] = np.nan  # Lead disconnect artifact!
            row['artifact_flag'] = True
    return row`},{id:21,question:"Why must Unicode NFKD normalization be applied prior to regex matching on web-scraped data?",shortAnswer:"Unicode allows characters to be represented via different code points (e.g. single precomposed character vs letter + combining accent); NFKD decomposes characters into canonical forms so regex matches consistently.",explanation:"For example, 'é' can be stored as \\u00e9 (precomposed) or \\u0065 + \\u0301 (decomposed). To a regex pattern `[a-z]`, the decomposed version matches 'e' but leaves the floating accent dangling, producing corrupted string splits.",hint:"What happens when the same human visual glyph has two completely different byte representations in Unicode?",level:"Advanced",codeExample:`import unicodedata
s1 = '\\u00e9'        # Precomposed 'é'
s2 = 'e\\u0301'       # Decomposed 'e' + accent
print('Direct equality:', s1 == s2)  # False!
print('Normalized equality:', unicodedata.normalize('NFKD', s1) == unicodedata.normalize('NFKD', s2))  # True`},{id:22,question:"What is the difference between Deterministic Record Linkage and Probabilistic Record Linkage (Fellegi-Sunter model)?",shortAnswer:"Deterministic linkage requires exact match across designated unique keys (e.g. Aadhaar or PAN); Probabilistic linkage computes match weights across multiple non-unique identifiers to infer entity identity.",explanation:"Deterministic linkage fails when primary keys contain typos or are missing. The Fellegi-Sunter method calculates log-likelihood ratio weights for agreeing vs disagreeing fields (Name, DOB, PIN code), summing evidence to classify pairs as Match, Non-Match, or Potential Match.",hint:"Can you link records if neither record has an Aadhaar number, but names, addresses, and birthdays match?",level:"Advanced",codeExample:`# Probabilistic Linkage Weight: w = log2(m_i / u_i) for agreement
# where m_i = P(agree | match), u_i = P(agree | non-match)`},{id:23,question:"How do you construct an automated pipeline stage to detect schema-level type contamination (e.g. numbers stored as strings with currency symbols)?",shortAnswer:"By attempting numeric coercion with error coercion to NaN, comparing the resulting null ratio against original nulls, and applying regex to extract currency symbols and commas.",explanation:"Legacy data frequently stores revenues as '₹ 14,500.00' or 'Rs. 14500/-'. An automated type cleaner uses regex `re.sub(r'[^0-9.]', '', s)` to strip currency tokens and comma separators before casting to `float64`.",hint:"How does a machine convert '₹ 1,500.50' into a raw floating-point 1500.5?",level:"Advanced",codeExample:`import re, pandas as pd
def sanitize_currency_col(series):
    return series.astype(str).apply(
        lambda s: float(re.sub(r'[^0-9.]', '', s)) if re.search(r'\\d', s) else None
    )`},{id:24,question:"When should impossible negative values (e.g. Property Tax = -Rs 500) be inverted (sign flip) versus set to NaN for imputation?",shortAnswer:"Invert (abs(x)) if manual entry slip is proven (e.g. hyphen typed as minus); set to NaN if the value indicates a semantic adjustment (e.g. tax refund/rebate) that violates the positive feature domain.",explanation:"If municipal audit logs show data entry operators accidentally typed a dash before tax amounts, taking the absolute value restores ground truth. If the negative value represents a tax credit or rebate, forcing it positive corrupts financial meaning; it must be separated into a distinct feature.",hint:"Is -500 an accidental minus sign, or does it represent a Rs 500 tax refund?",level:"Advanced",codeExample:`# Diagnostic check: Is negative value an entry typo or a refund?
# If refund: create a separate 'tax_credit' feature, do not blindly abs()!`},{id:25,question:"Explain the Fellegi-Sunter mathematical framework for probabilistic record linkage and how m-probabilities and u-probabilities are estimated.",shortAnswer:"m-probability = P(field agrees | pair is a True Match); u-probability = P(field agrees | pair is a True Non-Match). The agreement weight is w_agree = log2(m/u) and disagreement weight is w_disagree = log2((1-m)/(1-u)).",explanation:"A match on a rare surname (e.g., 'Chakraborty') has very low u-probability (rare by chance), resulting in a massive positive log-likelihood weight. A match on 'Gender' has high u (~0.5), yielding little evidence. Summing weights across fields provides mathematically optimal Bayesian classification.",hint:"Why is matching on a rare surname far more conclusive evidence than matching on Gender?",level:"Expert",codeExample:`# Fellegi-Sunter weight calculation
import numpy as np
def fs_weight(m, u, agree=True):
    return np.log2(m / u) if agree else np.log2((1 - m) / (1 - u))
# Surname match: m=0.95, u=0.001 -> Weight = +9.89 bits of evidence!
print('Weight for matching rare surname:', round(fs_weight(0.95, 0.001, True), 2))`},{id:26,question:"How do distributed engines (such as Apache Spark) perform fuzzy entity deduplication at billion-record scale using MinHash and Locality-Sensitive Hashing (LSH)?",shortAnswer:"MinHash LSH hashes character n-grams into low-dimensional signature buckets such that strings with high Jaccard similarity collide in the same hash bucket with high probability, avoiding O(N^2) comparisons.",explanation:"Instead of comparing all pairs across 1 billion rows (10^18 operations), Spark shingle-tokenizes text into 3-grams, computes MinHash signatures, and applies LSH banding. Candidate pairs are only extracted from hash bucket collisions, reducing comparisons to near-linear O(N) complexity.",hint:"How can you place similar strings into the same hash bucket without comparing them first?",level:"Expert",codeExample:`# PySpark MinHash LSH for distributed fuzzy deduplication
# from pyspark.ml.feature import MinHashLSH, HashingTF, RegexTokenizer
# model = MinHashLSH(inputCol='features', outputCol='hashes', numHashTables=5)
# model.approxSimilarityJoin(df, df, threshold=0.8, distCol='JaccardDistance')`},{id:27,question:"How do Modern Data Observability tools (e.g. Great Expectations, Monte Carlo) detect silent data corruption before model inference?",shortAnswer:"By compiling declarative data contracts and assertions (distribution bounds, null thresholds, schema integrity, freshness SLAs) that run in-line during ingestion and halt pipelines upon breach.",explanation:"Rather than waiting for a model's live revenue predictions to collapse, observability frameworks run assertions like `expect_column_values_to_not_be_null()` and `expect_column_kl_divergence_to_be_less_than()`. Violations trigger automated pipeline halts and alerting.",hint:"How does software test data distributions before allowing them into a trained model?",level:"Expert",codeExample:`# Great Expectations declarative assertion
# validator.expect_column_values_to_be_between('age', min_value=18, max_value=100)
# validator.expect_column_unique_value_count_to_be_between('locality', min_value=5, max_value=50)`},{id:28,question:"Why can automated outlier purging in medical diagnostic datasets accidentally eliminate rare, life-threatening pathologies?",shortAnswer:"Life-threatening acute events (e.g. malignant hypertension, diabetic ketoacidosis) present as extreme statistical outliers; purging them removes the vital positive training cases from the clinical model.",explanation:"In oncology and emergency triage, 99% of patients have normal vital signs. A patient in septic shock has extreme body temperature and white blood cell count. If an automated script drops everything beyond 3 standard deviations, it purges the very pathology the model is designed to detect.",hint:"What does an extreme outlier in an emergency room dataset usually mean?",level:"Expert",codeExample:`# DANGER: Naive outlier removal in medical data destroys positive labels
# clean_df = df[np.abs(z_scores) < 3.0]  # ERASING ACUTE EMERGENCY PATIENTS!`},{id:29,question:"How does Graph-Based Entity Resolution (Connected Components / Community Detection) cluster multi-table entity duplicates?",shortAnswer:"By modeling candidate records as graph nodes and similarity matches above a threshold as edges; connected component algorithms extract subgraphs representing unified physical entities.",explanation:"If Record A matches Record B (via phone number) and Record B matches Record C (via street address and last name), transitivity implies A, B, and C represent the same individual. Connected component graph algorithms cluster them together into a single resolved golden entity record.",hint:"If A is B, and B is C, what is the relationship between A and C?",level:"Expert",codeExample:`import networkx as nx
G = nx.Graph()
G.add_edge('Record_A', 'Record_B')
G.add_edge('Record_B', 'Record_C')
clusters = list(nx.connected_components(G))
print('Resolved Entity Cluster:', clusters)  # [{'Record_A', 'Record_B', 'Record_C'}]`},{id:30,question:"In continuous real-time streaming architectures (e.g. Apache Flink / Kafka), how is stateful deduplication performed using sliding time windows and Bloom Filters?",shortAnswer:"Streaming engines maintain a stateful Bloom filter or RocksDB hash index over a sliding time window (e.g. 10 minutes); incoming messages probe the filter to instantly evict duplicate retries.",explanation:"In real-time IoT or smart meter ingestion, network retransmissions flood Kafka topics. Flink maintains a memory-efficient probabilistic Bloom filter of seen message hashes over sliding window delta_t. If a message hash exists in the filter, it is dropped in sub-millisecond latency without querying external databases.",hint:"How do you detect duplicates in a stream of 100,000 events per second without querying a slow database?",level:"Expert",codeExample:`# Conceptual Streaming Deduplication using sliding window Bloom Filter
# if bloom_filter.contains(event.hash):
#     drop_event(event) # Evicts duplicate within 10-minute retry window
# else:
#     bloom_filter.add(event.hash)
#     emit_event(event)`}],Q=[{id:"KMC-001",name:"Sukanta Hui",ward:12,locality:"  Barrackpore  ",age:42,exp:18,tax:14500,status:"Paid",phone:"+91-9432456083",hasSentinel:!1,isDupe:!1,hasLogicErr:!1},{id:"KMC-002",name:"S. Hui",ward:12,locality:"barrackpore",age:42,exp:18,tax:14500,status:"PAID",phone:"9432456083",hasSentinel:!1,isDupe:!0,hasLogicErr:!1},{id:"KMC-003",name:"Anirban Banerjee",ward:"WARD-08",locality:"Salt Lake Sector V",age:-999,exp:7,tax:28400,status:"Pending",phone:"9830112233",hasSentinel:!0,isDupe:!1,hasLogicErr:!1},{id:"KMC-004",name:"Debjani Chakraborty",ward:45,locality:"Calcutta",age:9,exp:15,tax:-500,status:"N/A",phone:"Unknown",hasSentinel:!0,isDupe:!1,hasLogicErr:!0},{id:"KMC-005",name:"Anirban Banerjee",ward:8,locality:"Salt Lake Sector V",age:34,exp:7,tax:28400,status:"Pending",phone:"9830112233",hasSentinel:!1,isDupe:!0,hasLogicErr:!1},{id:"KMC-006",name:"Subhasis Roy",ward:62,locality:"Howrah",age:55,exp:25,tax:999999,status:"Overdue",phone:"+91-9874561230",hasSentinel:!0,isDupe:!1,hasLogicErr:!0},{id:"KMC-007",name:"Priyanka Sen",ward:19,locality:"Bidhannagar",age:29,exp:4,tax:12e3,status:"Paid",phone:"+91-9123456789",hasSentinel:!1,isDupe:!1,hasLogicErr:!1}],L=[{term:"Data Scrubbing (Cleansing)",tag:"Core Concept",desc:"The computational detection, diagnosis, and removal of corrupt, inaccurate, incomplete, duplicated, or improperly formatted records."},{term:"Hidden Sentinel Value",tag:"Defect Type",desc:"A valid constant (e.g. -999, 9999, 'N/A') used by legacy databases to represent missing data that bypasses standard null checks."},{term:"Exact Deduplication",tag:"Deduplication",desc:"Evicting rows that match 100% byte-for-byte across primary keys, hashes, or contact identifiers."},{term:"Fuzzy Deduplication",tag:"Entity Resolution",desc:"Identifying and resolving records representing the identical physical entity using edit distance thresholds (e.g. 'S. Hui' vs 'Sukanta Hui')."},{term:"Levenshtein Edit Distance",tag:"String Metric",desc:"The minimum single-character insertions, deletions, and substitutions required to transform string s1 into string s2."},{term:"Jaro-Winkler Similarity",tag:"String Metric",desc:"A character-based distance metric that gives higher similarity weight to shared initial prefixes, optimal for human names."},{term:"Attenuation Bias",tag:"Statistical Hazard",desc:"When input features contain random measurement noise, estimated regression slopes beta_hat are systematically shrunk toward zero."},{term:"Listwise Deletion",tag:"Cleaning Method",desc:"Discarding every observation with at least one missing attribute (e.g. df.dropna()), often causing severe sample loss and bias."},{term:"Survivorship Bias",tag:"Statistical Hazard",desc:"When dropping dirty or missing records selectively discards vulnerable or high-risk populations, skewing training distributions."},{term:"Canonicalization",tag:"Standardization",desc:"Mapping multiple synonymous surface variants (e.g., 'Calcutta', 'kol', 'Kolkata') to a single standardized ground-truth dictionary key."},{term:"Cross-Field Constraint",tag:"Integrity Rule",desc:"Logical validation asserting that interdependent columns do not contradict physical reality (e.g., Experience <= Age - 16)."},{term:"Audit Trail (Lineage)",tag:"Governance",desc:"An immutable log recording every cell modification, original value, corrected value, and triggered business rule."}],k=[{s1:"Sukanta Hui",s2:"S. Hui",domain:"Citizen Name"},{s1:"Ballygunge Circular Road",s2:"Ballygunge Cir Rd",domain:"Street Address"},{s1:"Debjani Chakraborty",s2:"D. Chakraborti",domain:"Citizen Name"},{s1:"Salt Lake Sector V",s2:"SaltLake Sec 5",domain:"Locality"},{s1:"Barrackpore Municipality",s2:"Bkp Muncipality",domain:"Civic Body"}],E=[{id:1,scenario:"A data scientist inspecting patient records from North 24 Parganas District Hospital notices that `patient_age.isna().sum()` returns 0. However, calculating `patient_age.mean()` gives 14.2 years, despite all patients being adults. What data defect caused this?",options:[{id:"A",text:"The dataset was normalized with MinMax scaler prior to cleaning."},{id:"B",text:"The legacy system recorded missing ages with sentinel value -999, which Python treated as a valid number, skewing the mean."},{id:"C",text:"The dataset contains duplicate records with identical positive ages."},{id:"D",text:"The column was encoded using ordinal integers instead of one-hot vectors."}],correct:"B",explanation:"Legacy databases frequently insert sentinel numbers (-999, 9999) instead of explicit null pointers. Python reads -999 as a real integer, so `isna()` returns False, while the arithmetic mean drops drastically due to the large negative numbers.",mentorTip:"Sukanta Hui says: Always inspect minimum and maximum values (`df.describe()`)! If you see -999, 9999, or -1 in positive physical quantities, you've found hidden sentinels."},{id:2,scenario:"An analyst working on Kolkata citizen survey data executes `df.dropna()` on a 10,000-row dataset with 45 columns. Only 1,850 rows remain. Why did this happen?",options:[{id:"A",text:"The dropna function automatically drops columns rather than rows."},{id:"B",text:"Listwise deletion discards every row with even one missing value; multiple columns with small independent missingness collectively wiped out 81.5% of the data."},{id:"C",text:"The data contained infinite float values which caused a memory overflow."},{id:"D",text:"The dataset had severe attenuation bias."}],correct:"B",explanation:"Complete-case analysis (listwise deletion) compound-multiplies missingness: N_clean = N * prod(1 - p_j). With 45 columns each having a mere 3-4% random null rate, over 80% of rows contain at least one null, leading to massive, unacceptable information destruction.",mentorTip:"Never call `df.dropna()` blindly! Profile column-by-column missingness first: impute features with < 30% nulls, and only drop columns with > 70% nulls."},{id:3,scenario:"Why is Jaro-Winkler string similarity generally superior to standard Levenshtein distance for resolving duplicate Indian citizen names?",options:[{id:"A",text:"Jaro-Winkler runs in O(1) time whereas Levenshtein takes O(N^3)."},{id:"B",text:"Jaro-Winkler gives higher similarity weighting to matching initial prefixes, which matches human naming patterns where typos typically occur near the end of surnames."},{id:"C",text:"Levenshtein distance only works on ASCII text and crashes on Unicode characters."},{id:"D",text:"Jaro-Winkler automatically translates Bengali script to English."}],correct:"B",explanation:"In citizen registries, typos and transliteration variations (e.g. 'Banerjee' vs 'Banerji', 'Mukherjee' vs 'Mukherji') overwhelmingly preserve the first 3-4 characters. Jaro-Winkler applies an explicit prefix bonus (Winkler bonus), yielding much higher match confidence on names.",mentorTip:"For human names and entity resolution, Jaro-Winkler or Double Metaphone beats standard Levenshtein every single time!"},{id:4,scenario:"You discover a citizen record with `Age = 8` and `Years_Employed = 15`. How should an automated cleaning pipeline handle this semantic contradiction?",options:[{id:"A",text:"Ignore it, because Decision Trees can learn around contradictory records."},{id:"B",text:"Flag the record in an audit log, trigger a cross-field constraint rule, and either set invalid employment to 0 or flag the record for human review."},{id:"C",text:"Multiply both numbers together to create an interaction feature."},{id:"D",text:"Run Z-score standardization on the age column."}],correct:"B",explanation:"An 8-year-old child cannot biologically or legally possess 15 years of professional work experience. Cross-field validation checks inter-column dependencies and either corrects the physically impossible field using deterministic domain rules or routes the record to an exception queue.",mentorTip:"Cross-field validation rules are the hallmark of professional data engineers. Never let logical contradictions silently poison your models!"},{id:5,scenario:"In an agricultural forecasting project in Howrah Mandi, crop price telemetry is corrupted by random transmission sensor noise. What happens to the estimated regression slope if the data is left uncleaned?",options:[{id:"A",text:"The slope becomes infinite and causes gradient explosion."},{id:"B",text:"The estimated slope beta_hat suffers from Attenuation Bias and is systematically shrunk toward zero, underestimating the true relationship."},{id:"C",text:"The R^2 score increases to 1.0."},{id:"D",text:"The model automatically converts from regression to classification."}],correct:"B",explanation:"Under the classical Errors-in-Variables theorem, input measurement noise Delta adds variance to the denominator: E[beta_hat] = beta * (sigma_X^2 / (sigma_X^2 + sigma_Delta^2)). Because sigma_Delta^2 > 0, the estimated coefficient is artificially flattened towards zero.",mentorTip:"Clean the noise! Noisy inputs make your models believe genuine signals are weaker than they actually are."}];function J(N,w){const c=N.length,u=w.length,l=Array.from({length:c+1},()=>Array(u+1).fill(0));for(let n=0;n<=c;n++)l[n][0]=n;for(let n=0;n<=u;n++)l[0][n]=n;for(let n=1;n<=c;n++)for(let m=1;m<=u;m++){const A=N[n-1].toLowerCase()===w[m-1].toLowerCase()?0:1;l[n][m]=Math.min(l[n-1][m]+1,l[n][m-1]+1,l[n-1][m-1]+A)}const f=l[c][u],g=Math.max(c,u)||1,j=Number((1-f/g).toFixed(3));return{distance:f,similarity:j,dp:l}}const re=()=>{const[N,w]=r.useState("noviceMasterclass"),[c,u]=r.useState("metaphor"),[l,f]=r.useState(""),[g,j]=r.useState("cleaningFlow"),[n,m]=r.useState(0),[A,R]=r.useState(0),[p,D]=r.useState(k[0].s1),[h,T]=r.useState(k[0].s2),[_,M]=r.useState(1.5),[S,P]=r.useState({}),[C,B]=r.useState(!1),O=r.useMemo(()=>{if(!l.trim())return L;const t=l.toLowerCase();return L.filter(a=>a.term.toLowerCase().includes(t)||a.desc.toLowerCase().includes(t)||a.tag.toLowerCase().includes(t))},[l]),I=r.useMemo(()=>{let t=Q.map(a=>({...a}));return n>=1&&(t=t.map(a=>({...a,age:a.age===-999?null:a.age,tax:a.tax===999999?28400:a.tax,status:a.status==="N/A"?"Pending":a.status,phone:a.phone==="Unknown"?null:a.phone,hasSentinel:!1}))),n>=2&&(t=t.map(a=>{let s=a.locality.trim();s.toLowerCase()==="calcutta"&&(s="Kolkata"),s.toLowerCase()==="barrackpore"&&(s="Barrackpore");let i=a.phone;i&&!i.startsWith("+91-")&&(i=`+91-${i}`);let o=a.ward;return typeof o=="string"&&(o=8),{...a,locality:s,phone:i,ward:o,status:a.status.charAt(0).toUpperCase()+a.status.slice(1).toLowerCase()}})),n>=3&&(t=t.map(a=>{let s=a.age,i=a.exp,o=a.tax;return o!==null&&o<0&&(o=Math.abs(o)),s!==null&&s<18&&(s=null,i=0),{...a,age:s,exp:i,tax:o,hasLogicErr:!1}})),n>=4&&(t=t.filter(a=>a.id!=="KMC-002"&&a.id!=="KMC-005")),t},[n]),b=r.useMemo(()=>{switch(n){case 0:return{score:24,label:"Raw & Heavily Corrupted",color:"text-red-400",bg:"bg-red-500"};case 1:return{score:48,label:"Sentinels Neutralized",color:"text-amber-400",bg:"bg-amber-500"};case 2:return{score:70,label:"Strings Canonicalized",color:"text-yellow-300",bg:"bg-yellow-500"};case 3:return{score:88,label:"Logic & Bounds Verified",color:"text-cyan-400",bg:"bg-cyan-500"};case 4:return{score:100,label:"Golden Sanitized Dataset",color:"text-emerald-400",bg:"bg-emerald-500"};default:return{score:24,label:"Raw",color:"text-red-400",bg:"bg-red-500"}}},[n]),y=r.useMemo(()=>J(p,h),[p,h]),v=r.useMemo(()=>{const s=1/(1+_),i=Number((3*s).toFixed(2)),o=Number(((1-s)*100).toFixed(1));return{trueBeta:3,attenuatedBeta:i,shrinkageFactor:s.toFixed(3),biasLossPct:o}},[_]),H=(t,a)=>{P(s=>({...s,[t]:a}))},F=r.useMemo(()=>{let t=0;return E.forEach(a=>{S[a.id]===a.correct&&t++}),t},[S]);return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-16 px-3 sm:px-6",children:[e.jsxs("header",{className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 rounded-3xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Data Types and Preprocessing • Topic 7"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full",children:"Academic Masterclass"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full",children:"Data Integrity & Fidelity"})]}),e.jsx("h1",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight",children:"Data Cleaning & Rectification Architecture"}),e.jsx("p",{className:"text-slate-300 text-base sm:text-lg max-w-4xl",children:"Transform noisy, contradictory, and duplicate raw records into sanitized golden datasets. Master the mathematical detection of hidden sentinel nulls, exact & fuzzy entity resolution, cross-field logical constraints, and prevention of attenuation bias in linear models."}),e.jsxs("div",{className:"flex flex-wrap gap-4 pt-2 text-xs font-medium text-slate-400",children:[e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-400"}),"KMC Civic & Property Tax Registry"]}),e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),"Interactive Levenshtein Edit Matrix"]}),e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),"Attenuation Bias Simulator"]}),e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400"}),"Curriculum Aligned (MAKAUT)"]})]})]})]}),e.jsx("nav",{className:"sticky top-2 z-40 bg-slate-900/90 backdrop-blur-md p-2 rounded-2xl border border-slate-800 shadow-xl flex items-center gap-1 overflow-x-auto text-xs sm:text-sm font-medium",children:[{id:"noviceMasterclass",label:"1. Novice Class"},{id:"interactiveStudio",label:"2. Cleaning Studio"},{id:"theory",label:"3. Theory & Math"},{id:"caseStudies",label:"4. Case Studies"},{id:"diagnosticQuiz",label:"5. Diagnostic Quiz"},{id:"bestPractices",label:"6. Best Practices"},{id:"labSection",label:"7. Python Lab"},{id:"faqSection",label:"8. FAQ & Notes"}].map(t=>e.jsx("button",{onClick:()=>{w(t.id),document.getElementById(t.id)?.scrollIntoView({behavior:"smooth"})},className:d("px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all duration-200",N===t.id?"bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-600/30":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"),children:t.label},t.id))}),e.jsxs("section",{id:"noviceMasterclass",className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-sm font-bold border border-indigo-500/30",children:"01"}),"The Novice Masterclass"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Build foundational intuition before diving into edit distance matrices and validation logic."})]}),e.jsx("div",{className:"flex bg-slate-800/80 p-1 rounded-xl border border-slate-700 text-xs font-semibold",children:[{id:"metaphor",label:"Real-World Metaphors"},{id:"dirtTaxonomy",label:"4 Forms of Data Dirt"},{id:"jargon",label:"Jargon Buster"}].map(t=>e.jsx("button",{onClick:()=>u(t.id),className:d("px-3 py-1.5 rounded-lg transition-all",c===t.id?"bg-indigo-600 text-white shadow-sm":"text-slate-400 hover:text-white"),children:t.label},t.id))})]}),c==="metaphor"&&e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all space-y-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center text-2xl font-bold",children:"🏺"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Archaeological Restoration"}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"When archaeologists unearth ancient terracotta statues at Chandraketugarh (North 24 Parganas), the artifacts are encrusted in caked mud, salt crystals, and fractures. Restorers use fine brushes and gentle solvents to reveal authentic carvings without altering the original historic substance."}),e.jsx("div",{className:"pt-2 text-xs text-amber-300/80 font-mono",children:"Formula: Excavated Mud (Dirt) → Ultrasonic Bath (Cleaning) → Preserved Artifact (Integrity)"})]}),e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all space-y-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center text-2xl font-bold",children:"🕵️"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Forensic Crime Decontamination"}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Forensic detectives at Lalbazar Police HQ never analyze a crime scene without sanitizing protocols. If bystander fingerprints and external dust contaminate physical evidence, innocent people are convicted while real criminals escape. Data cleaning purges external artifacts so models reflect truth."}),e.jsx("div",{className:"pt-2 text-xs text-cyan-300/80 font-mono",children:"Formula: Contaminated Evidence → DNA Isolation → Unimpeachable Forensic Ground Truth"})]}),e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-all space-y-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-2xl font-bold",children:"🚰"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Sediment & Carbon Water Filtration"}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"In Barrackpore households, drinking water purifiers employ multi-stage cartridges: a coarse spun-sediment filter to catch rust and silt (structural deduplication), followed by an activated carbon block that absorbs invisible chemical toxins and chlorine (hidden sentinel detection)."}),e.jsx("div",{className:"pt-2 text-xs text-emerald-300/80 font-mono",children:"Formula: Turbid Raw Water → Coarse Mesh → Carbon Block → 100% Pure Drinking Water"})]})]}),c==="dirtTaxonomy"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-rose-400 uppercase tracking-wider",children:"Class 1"}),e.jsx("h4",{className:"text-base font-bold text-white",children:"Structural & Syntactic"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Inconsistent casings ('KOLKATA' vs 'kolkata'), hidden non-breaking spaces ('\\u00a0'), conflicting date formats ('DD/MM/YYYY' vs 'YYYY-MM-DD'), and unstandardized phone digits."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider",children:"Class 2"}),e.jsx("h4",{className:"text-base font-bold text-white",children:"Semantic Contradictions"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Impossible real-world facts: Age = 8 with 15 years experience, Negative property tax dues (-Rs 500), or Hospital discharge dates occurring prior to admission timestamps."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-purple-400 uppercase tracking-wider",children:"Class 3"}),e.jsx("h4",{className:"text-base font-bold text-white",children:"Hidden Sentinels"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Legacy database constants (-999, 9999, 'N/A', '?') representing missing values. Because they are valid numeric floats or strings, automated `.isna()` routines fail to catch them."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-cyan-400 uppercase tracking-wider",children:"Class 4"}),e.jsx("h4",{className:"text-base font-bold text-white",children:"Entity Duplicates"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Exact duplicate rows created by network re-try loops, plus fuzzy near-duplicates ('Sukanta Hui' vs 'S. Hui', 'Ballygunge Circular Rd' vs 'Ballygunge Cir Rd')."})]})]}),e.jsxs("div",{className:"bg-slate-900/60 p-5 rounded-2xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2",children:[e.jsxs("h4",{className:"font-bold text-indigo-300 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Clean Data vs Preprocessed Data"]}),e.jsxs("p",{children:["A dataset can be completely preprocessed (e.g., scaled to [0, 1] and one-hot encoded) but still be",e.jsx("strong",{className:"text-rose-400",children:" completely dirty"})," if it contains duplicated citizens, impossible negative ages, or unstandardized sentinels. Cleaning is the prerequisite foundation of fidelity!"]})]})]}),c==="jargon"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{type:"text",placeholder:"Search vocabulary (e.g. sentinel, Levenshtein, attenuation, deduplication)...",value:l,onChange:t=>f(t.target.value),className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"}),l&&e.jsx("button",{onClick:()=>f(""),className:"px-3 py-2 text-xs bg-slate-800 text-slate-400 hover:text-white rounded-lg",children:"Clear"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:O.map((t,a)=>e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-slate-800/80 hover:border-indigo-500/40 transition-all space-y-2",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("span",{className:"text-xs font-bold text-indigo-400",children:t.tag})}),e.jsx("h4",{className:"text-sm font-bold text-white",children:t.term}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:t.desc})]},a))})]})]}),e.jsxs("section",{id:"interactiveStudio",className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-bold border border-cyan-500/30",children:"02"}),"Interactive Data Cleaning & Rectification Studio"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Test sequential pipeline rectifications, explore dynamic Levenshtein edit distance matrices, and simulate attenuation bias."})]}),e.jsx("div",{className:"flex bg-slate-800/80 p-1 rounded-xl border border-slate-700 text-xs font-semibold",children:[{id:"cleaningFlow",label:"Pipeline Rectifier"},{id:"fuzzyLab",label:"Levenshtein Matrix Lab"},{id:"attenuation",label:"Attenuation Bias Simulator"}].map(t=>e.jsx("button",{onClick:()=>j(t.id),className:d("px-3 py-1.5 rounded-lg transition-all",g===t.id?"bg-cyan-600 text-white shadow-sm":"text-slate-400 hover:text-white"),children:t.label},t.id))})]}),g==="cleaningFlow"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Select Cleaning Pipeline Stage:"}),e.jsxs("span",{className:d("text-xs font-bold px-2.5 py-1 rounded-full",b.color,"bg-slate-800"),children:["Dataset Cleanliness: ",b.score,"% (",b.label,")"]})]}),e.jsx("div",{className:"w-full h-2 bg-slate-800 rounded-full overflow-hidden",children:e.jsx("div",{className:d("h-full transition-all duration-500",b.bg),style:{width:`${b.score}%`}})}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2",children:[{step:0,title:"0. Raw Telemetry",subtitle:"Corrupted records"},{step:1,title:"1. Sentinel Extraction",subtitle:"Neutralize -999 & 'N/A'"},{step:2,title:"2. Canonicalize Text",subtitle:"Standardize City & Phone"},{step:3,title:"3. Constraint Check",subtitle:"Fix Age 9 & Neg Tax"},{step:4,title:"4. Entity Resolution",subtitle:"Purge exact & fuzzy dupes"}].map(t=>e.jsxs("button",{onClick:()=>m(t.step),className:d("p-2.5 rounded-xl text-left border transition-all",n===t.step?"bg-cyan-950/80 border-cyan-500/60 shadow-lg shadow-cyan-950/50":"bg-slate-800/60 border-slate-700/60 hover:bg-slate-800"),children:[e.jsx("div",{className:"text-xs font-bold text-white",children:t.title}),e.jsx("div",{className:"text-[10px] text-slate-400 truncate",children:t.subtitle})]},t.step))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[e.jsxs("span",{children:["Active Roster: ",I.length," Civic Registry Records"]}),e.jsxs("span",{className:"font-mono text-cyan-300",children:[n===0&&"Raw ingestion: Notice sentinel -999, negative tax -500, archaic 'Calcutta', duplicate S. Hui",n===1&&"Sentinels removed: -999 -> null, 999999.0 capped, 'N/A' -> Pending",n===2&&"Text canonicalized: 'Calcutta' -> Kolkata, phone numbers prefixed with +91-",n===3&&"Logical rules verified: Age 9 experience set to 0, negative tax inverted to positive",n===4&&"Entity resolution: KMC-002 (fuzzy dupe) and KMC-005 (exact phone dupe) safely purged"]})]}),e.jsx("div",{className:"overflow-x-auto border border-slate-800 rounded-xl bg-slate-950/60",children:e.jsxs("table",{className:"w-full text-left text-xs font-mono",children:[e.jsx("thead",{className:"bg-slate-900 border-b border-slate-800 text-slate-400",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2.5",children:"Record ID"}),e.jsx("th",{className:"p-2.5",children:"Citizen Name"}),e.jsx("th",{className:"p-2.5",children:"Ward"}),e.jsx("th",{className:"p-2.5",children:"Locality"}),e.jsx("th",{className:"p-2.5",children:"Age"}),e.jsx("th",{className:"p-2.5",children:"Experience"}),e.jsx("th",{className:"p-2.5",children:"Annual Tax (INR)"}),e.jsx("th",{className:"p-2.5",children:"Payment Status"}),e.jsx("th",{className:"p-2.5",children:"Contact"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:I.map((t,a)=>e.jsxs("tr",{className:d("transition-colors",t.isDupe&&n<4&&"bg-red-950/30 text-red-300",t.hasSentinel&&"bg-purple-950/30 text-purple-300",t.hasLogicErr&&"bg-amber-950/30 text-amber-300"),children:[e.jsxs("td",{className:"p-2.5 font-bold text-white flex items-center gap-1.5",children:[t.id,t.isDupe&&n<4&&e.jsx("span",{className:"text-[10px] bg-red-500/20 px-1.5 py-0.5 rounded text-red-300",children:"DUPE"})]}),e.jsx("td",{className:"p-2.5",children:t.name}),e.jsxs("td",{className:"p-2.5",children:["Ward ",t.ward]}),e.jsx("td",{className:"p-2.5",children:t.locality}),e.jsx("td",{className:"p-2.5",children:t.age===null?e.jsx("span",{className:"text-purple-400 font-bold",children:"NULL (Sanitized)"}):e.jsxs("span",{className:d(t.age===-999&&"text-purple-400 font-bold"),children:[t.age," yrs ",t.age===-999&&"⚠️ SENTINEL"]})}),e.jsxs("td",{className:"p-2.5",children:[t.exp," yrs"]}),e.jsx("td",{className:"p-2.5",children:t.tax<0?e.jsxs("span",{className:"text-amber-400 font-bold",children:["₹ ",t.tax," ⚠️ NEGATIVE"]}):e.jsxs("span",{children:["₹ ",t.tax.toLocaleString()]})}),e.jsx("td",{className:"p-2.5",children:e.jsx("span",{className:d("px-2 py-0.5 rounded-full text-[10px] font-semibold",t.status.toLowerCase()==="paid"&&"bg-emerald-500/20 text-emerald-300",t.status.toLowerCase()==="pending"&&"bg-yellow-500/20 text-yellow-300",t.status.toLowerCase()==="overdue"&&"bg-rose-500/20 text-rose-300",t.status==="N/A"&&"bg-purple-500/20 text-purple-300"),children:t.status})}),e.jsx("td",{className:"p-2.5 text-slate-400",children:t.phone||"None"})]},a))})]})})]})]}),g==="fuzzyLab"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Select Benchmark Near-Duplicate Pair:"}),e.jsx("span",{className:"text-xs font-mono text-cyan-300",children:"Levenshtein Recurrence: D(i, j) = min(Insert, Delete, Replace)"})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:k.map((t,a)=>e.jsxs("button",{onClick:()=>{R(a),D(t.s1),T(t.s2)},className:d("px-3 py-1.5 rounded-xl text-xs font-medium border transition-all",A===a?"bg-cyan-600 border-cyan-400 text-white shadow-md shadow-cyan-600/30":"bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white"),children:[t.domain,': "',t.s1,'" vs "',t.s2,'"']},a))}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs text-slate-400 font-semibold",children:"String 1 (Target Entity):"}),e.jsx("input",{type:"text",value:p,onChange:t=>D(t.target.value),className:"w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs text-slate-400 font-semibold",children:"String 2 (Observed Variant):"}),e.jsx("input",{type:"text",value:h,onChange:t=>T(t.target.value),className:"w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 pt-2",children:[e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-xl border border-slate-800 space-y-4 font-mono text-xs",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800 pb-2",children:"Matching Diagnostics"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-slate-500",children:"Raw Edit Distance:"}),e.jsxs("div",{className:"text-xl font-extrabold text-white mt-1",children:[y.distance," edits"]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-slate-500",children:"Normalized Similarity:"}),e.jsxs("div",{className:"text-2xl font-extrabold text-cyan-400 mt-1",children:[(y.similarity*100).toFixed(1),"%"]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-slate-500",children:"Deduplication Verdict (Threshold ≥ 70%):"}),e.jsx("div",{className:"mt-1",children:y.similarity>=.7?e.jsx("span",{className:"px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",children:"✓ MATCH (Same Entity)"}):e.jsx("span",{className:"px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30",children:"✗ DISTINCT (Different Entities)"})})]})]}),e.jsxs("div",{className:"md:col-span-2 bg-slate-950/80 p-5 rounded-xl border border-slate-800 space-y-2 overflow-x-auto font-mono text-xs",children:[e.jsxs("div",{className:"text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800 pb-2",children:["Dynamic Programming Matrix (",p.length+1," × ",h.length+1,")"]}),e.jsxs("div",{className:"pt-2 overflow-x-auto",children:[e.jsx("table",{className:"text-center border-collapse",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-1 font-bold text-slate-500 bg-slate-900",children:"ε"}),e.jsx("td",{className:"p-1 font-bold text-slate-500 bg-slate-900",children:"ε"}),h.split("").map((t,a)=>e.jsx("td",{className:"p-1 font-bold text-cyan-400 bg-slate-900 min-w-6",children:t},a))]}),y.dp.slice(0,12).map((t,a)=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-1 font-bold text-indigo-400 bg-slate-900 min-w-6",children:a===0?"ε":p[a-1]}),t.slice(0,12).map((s,i)=>e.jsx("td",{className:d("p-1.5 border border-slate-800/80",a===p.length&&i===h.length?"bg-cyan-600 text-white font-bold":"text-slate-300 hover:bg-slate-800"),children:s},i))]},a))]})}),(p.length>11||h.length>11)&&e.jsxs("div",{className:"text-[10px] text-slate-500 italic pt-1",children:["(Matrix display truncated to 12x12 for visual clarity. Final edit cost: ",y.distance,")"]})]})]})]})]}),g==="attenuation"&&e.jsx("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📉"})," Measurement Noise & Attenuation Bias"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["When input sensor measurements contain random noise ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"X_dirty = X_true + ε"}),", the estimated regression slope ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"β̂"})," is mathematically shrunk toward zero. Adjust the noise variance below to see how noise erodes the true relationship."]}),e.jsxs("div",{className:"space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold",children:[e.jsx("span",{className:"text-slate-400",children:"Sensor Noise Variance (σ_Δ²):"}),e.jsx("span",{className:"text-cyan-300 font-mono",children:_.toFixed(2)})]}),e.jsx("input",{type:"range",min:"0.0",max:"5.0",step:"0.25",value:_,onChange:t=>M(Number(t.target.value)),className:"w-full accent-cyan-500 cursor-pointer"}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[e.jsx("span",{children:"0.0 (Pure Clean Signal)"}),e.jsx("span",{children:"2.5 (Moderate Sensor Noise)"}),e.jsx("span",{children:"5.0 (Extreme Noise Contamination)"})]})]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-xl border border-slate-800 space-y-4 font-mono text-xs",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800 pb-2",children:"Theoretical Shrinkage Calculations"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-500",children:"True Causal Slope (β):"}),e.jsx("div",{className:"text-lg font-bold text-emerald-400 mt-1",children:v.trueBeta.toFixed(2)})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-500",children:"Attenuated Slope (β̂):"}),e.jsx("div",{className:"text-lg font-bold text-amber-400 mt-1",children:v.attenuatedBeta})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-500",children:"Shrinkage Factor (λ):"}),e.jsx("div",{className:"text-base font-bold text-white mt-1",children:v.shrinkageFactor})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-500",children:"Signal Dilution Loss:"}),e.jsxs("div",{className:"text-base font-bold text-rose-400 mt-1",children:["-",v.biasLossPct,"%"]})]})]}),e.jsxs("div",{className:"p-3 rounded-lg text-xs leading-relaxed border bg-slate-900/90 border-slate-800 text-slate-300",children:[e.jsx("strong",{children:"MATHEMATICAL LAW:"})," E[β̂] = β · [σ_X² / (σ_X² + σ_Δ²)]. Because uncleaned sensor noise inflates the denominator, the model falsely concludes the feature is",e.jsxs("strong",{className:"text-rose-400",children:[" ",v.biasLossPct,"% weaker"]})," than it actually is in reality!"]})]})]})})]}),e.jsxs("section",{id:"theory",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold border border-purple-500/30",children:"03"}),"Mathematical Foundations & Theoretical Proofs"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Formal mathematical equations underpinning string edit distances, attenuation bias, and data loss curves."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"📐"})," 1. Levenshtein Dynamic Programming Recurrence"]}),e.jsxs("div",{className:"space-y-3 text-xs sm:text-sm text-slate-300",children:[e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-cyan-300",children:"Edit Distance Formulation:"}),e.jsx("div",{className:"text-sm font-mono text-white py-1",children:"D(i, j) = \\min \\begin{cases} D(i-1, j) + 1 & \\text{(Deletion)} \\\\ D(i, j-1) + 1 & \\text{(Insertion)} \\\\ D(i-1, j-1) + \\mathbb{I}(s_1[i] \\neq s_2[j]) & \\text{(Substitution)} \\end{cases}"}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"Computes the minimal cost path through the alignment lattice in O(|s1| · |s2|) space and time."})]}),e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-emerald-300",children:"Normalized Similarity Metric:"}),e.jsx("div",{className:"text-sm font-mono text-white py-1",children:"\\text{Sim}(s_1, s_2) = 1.0 - \\frac{D(s_1, s_2)}{\\max(|s_1|, |s_2|)} \\in [0.0, 1.0]"}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"Produces a bounded similarity score suitable for automated entity resolution thresholds."})]})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-purple-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," 2. Attenuation Bias & Listwise Information Loss"]}),e.jsxs("div",{className:"space-y-3 text-xs sm:text-sm text-slate-300",children:[e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-amber-300",children:"Errors-in-Variables (Attenuation Bias):"}),e.jsx("div",{className:"text-sm font-mono text-white py-1",children:"\\mathbb{E}[\\hat{\\beta}] = \\beta \\left( \\frac{\\sigma_X^2}{\\sigma_X^2 + \\sigma_\\Delta^2} \\right) < \\beta"}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"Uncleaned sensor measurement noise directly shrinks the estimated model weights toward zero."})]}),e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-purple-300",children:"Listwise Deletion Loss Equation:"}),e.jsx("div",{className:"text-sm font-mono text-white py-1",children:"N_{\\text{clean}} = N \\prod_{j=1}^d (1 - p_j)"}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"Demonstrates why running `df.dropna()` on high-dimensional data annihilates the majority of samples."})]})]})]})]})]}),e.jsxs("section",{id:"caseStudies",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-sm font-bold border border-amber-500/30",children:"04"}),"Regional West Bengal Industrial Case Studies"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Real enterprise data cleaning workflows deployed across Kolkata, Bidhannagar, Howrah, and Barrackpore."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-amber-400",children:"MUNICIPAL GOVERNANCE"}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"Kolkata Municipal Corp (KMC)"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Property Tax Registry Entity Resolution"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Problem:"}),' Property assessment ledgers across 144 civic wards contained fuzzy street variations: "Ballygunge Circular Rd", "Ballygunge Cir Rd", "B.C. Road", and "Ballygunge Cir. Road", causing duplicate assessment accounts and unlinked tax arrears.']}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 space-y-1",children:[e.jsx("div",{children:"Cleaning Solution:"}),e.jsx("div",{className:"text-slate-400",children:"• Ward-based blocking to reduce pairwise checks from 10^12 to 10^7"}),e.jsx("div",{className:"text-slate-400",children:"• Levenshtein & token-set ratio matching with similarity threshold ≥ 0.82"}),e.jsx("div",{className:"text-slate-400",children:"• Resolved 12,000 duplicate taxpayer accounts, recovering Rs 4.2 Cr in dues"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-cyan-400",children:"PUBLIC DISTRIBUTION (PDS)"}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"WBFACS Khadya Sathi"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Transliteration Normalization & De-duplication"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Problem:"}),' Digitizing 8.5 Crore ration cards created thousands of phonetic transliteration errors when translating Bengali names into English (e.g. "Bondopadhyay" vs "Banerjee", "Chowdhury" vs "Choudhuri").']}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 space-y-1",children:[e.jsx("div",{children:"Cleaning Solution:"}),e.jsx("div",{className:"text-slate-400",children:"• Indic-tailored Double Metaphone phonetic indexing"}),e.jsx("div",{className:"text-slate-400",children:"• Aadhaar UIDAI deterministic linkage to detect duplicate beneficiary ghost cards"}),e.jsx("div",{className:"text-slate-400",children:"• Purged 3.8 lakh fraudulent cards, saving public subsidy funds"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-emerald-400",children:"EMERGENCY HEALTHCARE"}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"North 24 Parganas District Hospital"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"ICU Multi-Sensor Lead Disconnect Triage"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Problem:"})," ICU telemetry recorded zero heart rates (0 bpm) whenever ECG chest leads detached as patients moved in bed, triggering false cardiac arrest alarms."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 space-y-1",children:[e.jsx("div",{children:"Cleaning Solution:"}),e.jsx("div",{className:"text-slate-400",children:"• Multi-sensor agreement rule: verify ECG 0 bpm against SpO2 and Blood Pressure"}),e.jsx("div",{className:"text-slate-400",children:"• Classified isolated ECG drops as mechanical disconnect artifacts"}),e.jsx("div",{className:"text-slate-400",children:"• Forward-filled missing values without triggering false alarm models"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-purple-400",children:"AGRICULTURAL COMMODITIES"}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"Howrah Wholesale Fish Mandi"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Legacy Unit Extraction & Price Standardization"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Problem:"})," Daily wholesale trade ledgers mixed traditional Bengali weight units (Maund = 37.32 kg, Seer = 0.933 kg) with modern metric Kilograms and Quintals (100 kg)."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 space-y-1",children:[e.jsx("div",{children:"Cleaning Solution:"}),e.jsx("div",{className:"text-slate-400",children:"• Regex unit-extraction parser mapping all historical units to SI kilograms"}),e.jsx("div",{className:"text-slate-400",children:"• Inverted negative cash balance slips and sanitized punctuation"}),e.jsx("div",{className:"text-slate-400",children:"• Fed consistent price matrices to downstream demand forecasting models"})]})]})]})]}),e.jsxs("section",{id:"diagnosticQuiz",className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold border border-emerald-500/30",children:"05"}),"Diagnostic Self-Assessment Quiz"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Test your mastery of data cleaning, hidden sentinels, and entity deduplication."})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:["Score: ",e.jsx("strong",{className:"text-emerald-400",children:F})," / ",E.length]}),e.jsx("button",{onClick:()=>B(t=>!t),className:"px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/30",children:C?"Hide Explanations":"Show All Answers"})]})]}),e.jsx("div",{className:"space-y-6",children:E.map((t,a)=>{const s=S[t.id],i=s!==void 0,o=s===t.correct;return e.jsxs("div",{className:d("p-6 rounded-2xl border transition-all space-y-4",i?o?"bg-slate-900/90 border-emerald-500/50":"bg-slate-900/90 border-rose-500/50":"bg-slate-900/70 border-slate-800"),children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:["Scenario Question #",a+1]}),e.jsx("h3",{className:"text-sm sm:text-base font-semibold text-white leading-relaxed",children:t.scenario})]}),i&&e.jsx("span",{className:d("px-2.5 py-1 rounded-full text-xs font-bold whitespace-nowrap",o?"bg-emerald-500/20 text-emerald-300":"bg-rose-500/20 text-rose-300"),children:o?"✓ Correct":"✗ Incorrect"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2",children:t.options.map(x=>{const W=s===x.id,z=x.id===t.correct;return e.jsxs("button",{onClick:()=>H(t.id,x.id),className:d("p-3.5 rounded-xl text-left text-xs sm:text-sm border transition-all flex items-start gap-3",W?z?"bg-emerald-950/80 border-emerald-500 text-emerald-200":"bg-rose-950/80 border-rose-500 text-rose-200":C&&z?"bg-emerald-950/40 border-emerald-500/60 text-emerald-300":"bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white"),children:[e.jsx("span",{className:"w-5 h-5 rounded-full bg-slate-700/80 flex items-center justify-center font-bold text-[10px] text-white shrink-0 mt-0.5",children:x.id}),e.jsx("span",{className:"leading-snug",children:x.text})]},x.id)})}),(i||C)&&e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2 mt-2",children:[e.jsxs("div",{children:[e.jsxs("strong",{className:"text-emerald-400",children:["Correct Answer (",t.correct,"): "]}),t.explanation]}),e.jsxs("div",{className:"text-indigo-300/90 italic font-mono pt-1",children:["💡 ",t.mentorTip]})]})]},t.id)})})]}),e.jsxs("section",{id:"bestPractices",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-sm font-bold border border-rose-500/30",children:"06"}),"Production Pitfalls & Engineering Best Practices"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Avoid the critical traps that cause data leakage and survivorship bias during data cleaning."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"text-rose-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 1: Blind Row Dropping"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Executing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"df.dropna()"})," without profiling can destroy 80% of your dataset, biasing models towards wealthy or non-vulnerable citizens. Always compute column null percentages first."]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"text-rose-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 2: Silent In-Place Mutation"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Mutating raw DataFrames in-place destroys data lineage and prevents compliance auditing. Always record an immutable audit trail documenting the original value, corrected value, and rule triggered."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"text-rose-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 3: Hidden Whitespace"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Unicode non-breaking spaces (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"\\u00a0"}),") bypass standard ASCII strip routines, causing identical strings to fail joins. Always run ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"unicodedata.normalize('NFKD')"}),"."]})]})]})]}),e.jsxs("section",{id:"labSection",className:"space-y-4",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-bold border border-cyan-500/30",children:"07"}),"Python Laboratory Implementation"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Executable pure Python implementation of Sentinel Sanitizer, Text Canonicalizer, Constraint Validator, and Fuzzy Deduplicator on KMC citizen records."})]}),e.jsx(U,{code:X,fileName:"data_cleaning_lab.py"})]}),e.jsxs("section",{id:"faqSection",className:"space-y-4",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-sm font-bold border border-indigo-500/30",children:"08"}),"Frequently Asked Questions & Technical Deep-Dive"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"30 comprehensive questions and answers covering conceptual definitions, string algorithms, and production cleaning pipelines."})]}),e.jsx(q,{questions:Y})]}),e.jsxs("section",{id:"notesSection",className:"space-y-4",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold border border-purple-500/30",children:"09"}),"Downloadable Revision Notes & Exam Handbook"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Complete revision handbook aligned with MAKAUT semester syllabus BCAC701B."})]}),e.jsx(K,{content:V,fileName:"topic7_data_cleaning_handbook.txt"})]}),e.jsx(G,{})]})};export{re as default};
