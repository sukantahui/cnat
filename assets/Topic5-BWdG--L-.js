import{b as n,j as e,bl as l}from"./vendor-react-core-B-R9HE-Z.js";import{P as de}from"./PythonFileLoader-DZ61U3Y_.js";import{F as ce}from"./FAQTemplate-16IfroqC.js";import{P as me}from"./PlainTextPrint-C6NaUtnE.js";import{T as ue}from"./TeacherSukantaHui-Ci09yFv7.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-DFIuzMjt.js";const pe=`"""
=============================================================================
TOPIC 5: STRUCTURED AND UNSTRUCTURED DATA (BASIC IDEA & FEATURE PIPELINES)
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Academic Practical Laboratory & Interactive Multimodal Vectorization Engine
Author: Sukanta Hui | Senior Academic Mentor | Coder & AccoTax
Location: Barrackpore, Kolkata, West Bengal, India
Course Code: BCAC701B / MCA / B.Tech Computer Science
=============================================================================

This comprehensive laboratory engine demonstrates:
1. Data Modality Triad:
   - Structured Data: Relational tabular records with fixed schema-on-write.
   - Semi-Structured Data: Hierarchical, self-describing JSON with nested attributes.
   - Unstructured Data: Free-form clinical text notes and 2D grayscale image matrices.
2. Unstructured Text Vectorization:
   - Custom Tokenizer, Stop-word filter, and Vocabulary Builder.
   - Mathematical TF-IDF (Term Frequency - Inverse Document Frequency) implementation.
   - Sparse vector generation and pairwise Cosine Similarity calculation.
3. Unstructured Image Preprocessing:
   - 2D pixel intensity normalization ([0, 255] -> [0.0, 1.0]).
   - Discrete 2D spatial convolution with edge-detection kernels.
   - Vector flattening into 1D numerical representation.
4. Semi-Structured JSON Normalization:
   - Recursive dictionary flattening of nested keys into relational columns.
5. Multimodal Feature Fusion:
   - Horizontal concatenation of Tabular + Text TF-IDF + Image features
     into a unified design matrix X in R^(N x D) ready for machine learning.
=============================================================================
"""

import math
import json
import re
from typing import List, Dict, Any, Tuple, Set


# =============================================================================
# 1. SYNTHETIC MULTIMODAL HEALTHCARE DATASET (BARRACKPORE CLINICAL HUB)
# =============================================================================

def get_sample_multimodal_records() -> List[Dict[str, Any]]:
    """
    Returns 5 multimodal patient records containing:
    1. Structured: age, blood_pressure, blood_sugar, prior_visits
    2. Semi-Structured: nested JSON clinical visit metadata with nested tags
    3. Unstructured Text: doctor's free-form examination narrative
    4. Unstructured Image: synthetic 4x4 micro chest X-ray pixel intensity matrix
    """
    return [
        {
            "patient_id": "PT-7001",
            "name": "Mamata Banerjee (Barrackpore)",
            # Structured tabular features
            "structured": {
                "age": 52,
                "systolic_bp": 138,
                "blood_sugar_fasting": 110.5,
                "prior_admissions": 2
            },
            # Semi-structured hierarchical JSON
            "semi_structured_json": {
                "insurance": {"provider": "SwasthyaSathi", "tier": "Gold", "active": True},
                "triage": {"urgency_code": 2, "ward": "Cardiology"},
                "lab_tests": ["ECG", "HbA1c", "LipidProfile"]
            },
            # Unstructured text narrative
            "unstructured_text": (
                "Patient presents with mild chest discomfort and fatigue. "
                "History of controlled hypertension and elevated fasting blood sugar. "
                "Recommended resting ECG and low-sodium diet."
            ),
            # Unstructured 2D image matrix (4x4 synthetic grayscale pixels [0-255])
            "unstructured_image": [
                [45, 60, 210, 220],
                [50, 75, 195, 205],
                [40, 55, 180, 190],
                [35, 50, 160, 175]
            ],
            "target_risk_level": "Moderate"
        },
        {
            "patient_id": "PT-7002",
            "name": "Debangshu Mukherjee (Kolkata)",
            "structured": {
                "age": 64,
                "systolic_bp": 165,
                "blood_sugar_fasting": 185.0,
                "prior_admissions": 5
            },
            "semi_structured_json": {
                "insurance": {"provider": "Mediclaim", "tier": "Platinum", "active": True},
                "triage": {"urgency_code": 1, "ward": "ICU"},
                "lab_tests": ["CardiacEnzymes", "Troponin", "Echo"]
            },
            "unstructured_text": (
                "Acute shortness of breath and severe palpitations following exertion. "
                "Uncontrolled diabetes and critical hypertensive crisis observed. "
                "Immediate intensive care monitoring required."
            ),
            "unstructured_image": [
                [220, 230, 240, 250],
                [210, 225, 235, 245],
                [180, 200, 215, 230],
                [170, 190, 205, 220]
            ],
            "target_risk_level": "High"
        },
        {
            "patient_id": "PT-7003",
            "name": "Susmita Sen (Ichapur)",
            "structured": {
                "age": 28,
                "systolic_bp": 115,
                "blood_sugar_fasting": 88.0,
                "prior_admissions": 0
            },
            "semi_structured_json": {
                "insurance": {"provider": "CorporateGroup", "tier": "Standard", "active": True},
                "triage": {"urgency_code": 3, "ward": "GeneralOPD"},
                "lab_tests": ["RoutineBlood", "Thyroid"]
            },
            "unstructured_text": (
                "Annual preventative health screening. Patient reports high energy levels and no chest pain. "
                "Normal cardiovascular rhythm and normal blood glucose observed."
            ),
            "unstructured_image": [
                [30, 35, 40, 45],
                [32, 38, 42, 48],
                [28, 34, 39, 44],
                [25, 30, 35, 40]
            ],
            "target_risk_level": "Low"
        },
        {
            "patient_id": "PT-7004",
            "name": "Abhronila Das (Jadavpur)",
            "structured": {
                "age": 45,
                "systolic_bp": 128,
                "blood_sugar_fasting": 102.0,
                "prior_admissions": 1
            },
            "semi_structured_json": {
                "insurance": {"provider": "SwasthyaSathi", "tier": "Silver", "active": True},
                "triage": {"urgency_code": 3, "ward": "GeneralOPD"},
                "lab_tests": ["CBC", "LipidProfile"]
            },
            "unstructured_text": (
                "Patient notes recurring tension headaches and mild postural dizziness. "
                "Blood pressure marginally elevated under work stress. Advised lifestyle modifications."
            ),
            "unstructured_image": [
                [70, 85, 120, 130],
                [75, 90, 125, 135],
                [65, 80, 115, 125],
                [60, 75, 110, 120]
            ],
            "target_risk_level": "Moderate"
        },
        {
            "patient_id": "PT-7005",
            "name": "Mahima Paul (Salt Lake)",
            "structured": {
                "age": 71,
                "systolic_bp": 172,
                "blood_sugar_fasting": 210.0,
                "prior_admissions": 6
            },
            "semi_structured_json": {
                "insurance": {"provider": "Mediclaim", "tier": "SeniorCitizen", "active": False},
                "triage": {"urgency_code": 1, "ward": "ICU"},
                "lab_tests": ["CardiacEnzymes", "RenalPanel", "ECG"]
            },
            "unstructured_text": (
                "Severe dyspnea and orthopnea. Acute exacerbation of chronic congestive heart failure. "
                "Critical hyperglycemia and hypertensive urgency noted. Urgent IV medication initiated."
            ),
            "unstructured_image": [
                [230, 240, 250, 255],
                [220, 235, 245, 250],
                [210, 225, 235, 240],
                [195, 210, 220, 230]
            ],
            "target_risk_level": "High"
        }
    ]


# =============================================================================
# 2. UNSTRUCTURED TEXT PREPROCESSING & TF-IDF VECTORIZER (FROM SCRATCH)
# =============================================================================

STOPWORDS: Set[str] = {
    "a", "an", "and", "are", "as", "at", "be", "by", "for", "from", "has", "he",
    "in", "is", "it", "its", "of", "on", "that", "the", "to", "was", "were",
    "will", "with", "patient", "reports", "observed", "under", "following"
}

class UnstructuredTextVectorizer:
    """
    Mathematical TF-IDF Vectorizer built from first principles:
    TF(t, d) = count(t in d) / total_words(d)
    IDF(t, D) = log( (1 + |D|) / (1 + df(t)) ) + 1.0 (Scikit-Learn smoothed convention)
    Vector = L2-normalized [TF * IDF]
    """
    def __init__(self, top_n_vocab: int = 12):
        self.top_n = top_n_vocab
        self.vocabulary: Dict[str, int] = {}
        self.idf_: Dict[str, float] = {}

    @staticmethod
    def tokenize(text: str) -> List[str]:
        cleaned = re.sub(r"[^a-zA-Z0-9\\s]", "", text.lower())
        tokens = cleaned.split()
        return [t for t in tokens if t not in STOPWORDS and len(t) > 2]

    def fit(self, documents: List[str]):
        doc_tokens = [self.tokenize(doc) for doc in documents]
        n_docs = len(documents)

        # Count document frequency (df) for each word
        df_counts: Dict[str, int] = {}
        for tokens in doc_tokens:
            unique_in_doc = set(tokens)
            for word in unique_in_doc:
                df_counts[word] = df_counts.get(word, 0) + 1

        # Select top-N most informative terms (by highest document frequency & length)
        sorted_terms = sorted(df_counts.keys(), key=lambda w: (-df_counts[w], w))
        self.vocabulary = {term: idx for idx, term in enumerate(sorted_terms[:self.top_n])}

        # Calculate smoothed IDF: log((1 + N) / (1 + df)) + 1
        for term in self.vocabulary:
            df = df_counts.get(term, 0)
            self.idf_[term] = math.log((1 + n_docs) / (1 + df)) + 1.0

    def transform(self, documents: List[str]) -> List[List[float]]:
        feature_matrix = []
        for doc in documents:
            tokens = self.tokenize(doc)
            total_tokens = len(tokens) if tokens else 1

            # Compute TF
            tf: Dict[str, float] = {}
            for t in tokens:
                if t in self.vocabulary:
                    tf[t] = tf.get(t, 0) + 1.0

            # Vector in vocabulary space
            vec = [0.0] * len(self.vocabulary)
            for term, idx in self.vocabulary.items():
                term_tf = tf.get(term, 0.0) / total_tokens
                term_idf = self.idf_[term]
                vec[idx] = term_tf * term_idf

            # L2 Normalization
            norm = math.sqrt(sum(v * v for v in vec))
            if norm > 0:
                vec = [round(v / norm, 4) for v in vec]
            feature_matrix.append(vec)

        return feature_matrix


# =============================================================================
# 3. UNSTRUCTURED IMAGE PROCESSOR (NORMALIZATION & 2D CONVOLUTION)
# =============================================================================

class UnstructuredImageProcessor:
    """
    Preprocesses 2D pixel matrices into normalized, feature-extracted vectors:
    1. Pixel Scaling: Maps raw [0, 255] integer intensities to [0.0, 1.0] continuous space.
    2. Spatial Feature Convolution: Applies a 3x3 Edge-Detection Sobel/Laplacian kernel.
    3. Global Flattening: Unrolls 2D spatial grid into a 1D feature vector in R^d.
    """
    HORIZONTAL_EDGE_KERNEL = [
        [-1, -2, -1],
        [ 0,  0,  0],
        [ 1,  2,  1]
    ]

    @classmethod
    def normalize_pixels(cls, matrix: List[List[int]]) -> List[List[float]]:
        return [[round(pixel / 255.0, 4) for pixel in row] for row in matrix]

    @classmethod
    def apply_convolution(cls, matrix: List[List[float]]) -> List[List[float]]:
        """Applies valid 3x3 horizontal edge convolution to a 4x4 matrix (resulting in 2x2 output)."""
        kernel = cls.HORIZONTAL_EDGE_KERNEL
        h, w = len(matrix), len(matrix[0])
        out_h, out_w = h - 2, w - 2
        convolved = []

        for i in range(out_h):
            row = []
            for j in range(out_w):
                acc = 0.0
                for ki in range(3):
                    for kj in range(3):
                        acc += matrix[i + ki][j + kj] * kernel[ki][kj]
                row.append(round(acc, 4))
            convolved.append(row)

        return convolved

    @classmethod
    def flatten(cls, matrix: List[List[Any]]) -> List[float]:
        return [float(val) for row in matrix for val in row]


# =============================================================================
# 4. SEMI-STRUCTURED JSON FLATTENER (RECURSIVE JSON-TO-TABLE)
# =============================================================================

def flatten_semi_structured_json(nested_dict: Dict[str, Any], parent_key: str = "", sep: str = "_") -> Dict[str, Any]:
    """
    Recursively projects hierarchical JSON keys into flat tabular columns
    (Mirroring the functionality of pandas.json_normalize).
    Example: {"insurance": {"provider": "SwasthyaSathi"}} -> {"insurance_provider": "SwasthyaSathi"}
    """
    items = []
    for k, v in nested_dict.items():
        new_key = f"{parent_key}{sep}{k}" if parent_key else k
        if isinstance(v, dict):
            items.extend(flatten_semi_structured_json(v, new_key, sep=sep).items())
        elif isinstance(v, list):
            # Encode list length and join elements as compact categorical summary
            items.append((f"{new_key}_count", len(v)))
            items.append((f"{new_key}_joined", "|".join(str(item) for item in v)))
        else:
            items.append((new_key, v))
    return dict(items)


# =============================================================================
# 5. COSINE SIMILARITY ENGINE (VECTOR SPACE DISTANCE)
# =============================================================================

def cosine_similarity(vec1: List[float], vec2: List[float]) -> float:
    dot_product = sum(a * b for a, b in zip(vec1, vec2))
    norm1 = math.sqrt(sum(a * a for a in vec1))
    norm2 = math.sqrt(sum(b * b for b in vec2))
    if norm1 == 0 or norm2 == 0:
        return 0.0
    return round(dot_product / (norm1 * norm2), 4)


# =============================================================================
# 6. MAIN MULTIMODAL FEATURE FUSION LABORATORY PIPELINE
# =============================================================================

def run_laboratory():
    print("=" * 80)
    print("CODER & ACCOTAX - ADVANCED MACHINE LEARNING LABORATORY")
    print("TOPIC 5: STRUCTURED AND UNSTRUCTURED DATA (BASIC IDEA & FEATURE PIPELINES)")
    print("Academic Subject: BCAC701B | Data Types and Preprocessing")
    print("Mentor: Sukanta Hui | Barrackpore, West Bengal, India")
    print("=" * 80)

    records = get_sample_multimodal_records()
    print(f"\\n[+] Ingested {len(records)} Multimodal Patient Cohort Records from Barrackpore Clinical Hub.")

    # -------------------------------------------------------------------------
    # PART A: STRUCTURED DATA TABULAR MATRIX
    # -------------------------------------------------------------------------
    print("\\n" + "-" * 80)
    print("1. STRUCTURED DATA: Tabular Feature Matrix (Fixed Schema-on-Write)")
    print("-" * 80)
    struct_headers = ["age", "systolic_bp", "blood_sugar_fasting", "prior_admissions"]
    print(f"{'Patient ID':<12} | {'Name':<24} | " + " | ".join(f"{h:>18}" for h in struct_headers))
    print("-" * 80)
    
    structured_matrix = []
    for rec in records:
        s = rec["structured"]
        row = [s["age"], s["systolic_bp"], s["blood_sugar_fasting"], s["prior_admissions"]]
        structured_matrix.append(row)
        print(f"{rec['patient_id']:<12} | {rec['name'][:24]:<24} | " + " | ".join(f"{val:>18}" for val in row))

    # -------------------------------------------------------------------------
    # PART B: SEMI-STRUCTURED JSON FLATTENING
    # -------------------------------------------------------------------------
    print("\\n" + "-" * 80)
    print("2. SEMI-STRUCTURED DATA: Hierarchical JSON Normalization (Schema-on-Read)")
    print("-" * 80)
    print("Raw Hierarchical JSON for PT-7001:")
    print(json.dumps(records[0]["semi_structured_json"], indent=2))
    
    flattened_json_list = [flatten_semi_structured_json(r["semi_structured_json"]) for r in records]
    print("\\nFlattened Tabular Output (Equivalent to pd.json_normalize):")
    sample_flat = flattened_json_list[0]
    for key, val in sample_flat.items():
        print(f"  -> Column '{key:<28}': {val}")

    # -------------------------------------------------------------------------
    # PART C: UNSTRUCTURED TEXT TF-IDF VECTORIZATION
    # -------------------------------------------------------------------------
    print("\\n" + "-" * 80)
    print("3. UNSTRUCTURED TEXT DATA: Mathematical TF-IDF Vector Space Model")
    print("-" * 80)
    raw_texts = [r["unstructured_text"] for r in records]
    vectorizer = UnstructuredTextVectorizer(top_n_vocab=10)
    vectorizer.fit(raw_texts)

    print("Learned Top-10 Vocabulary & Computed Inverse Document Frequency (IDF):")
    for term, idx in vectorizer.vocabulary.items():
        print(f"  [Index {idx:>2}] Term: '{term:<18}' | IDF Weight: {vectorizer.idf_[term]:.4f}")

    tfidf_matrix = vectorizer.transform(raw_texts)
    print("\\nResulting TF-IDF Feature Vectors (L2 Normalized):")
    for rec, vec in zip(records, tfidf_matrix):
        print(f"  {rec['patient_id']} ({rec['name'][:16]}): {[round(x, 3) for x in vec]}")

    # Pairwise Cosine Similarity between Patient 1 and others
    print("\\nText Semantic Cosine Similarity relative to Patient 1 (Mamata):")
    p1_vec = tfidf_matrix[0]
    for i in range(1, len(records)):
        sim = cosine_similarity(p1_vec, tfidf_matrix[i])
        print(f"  Sim(PT-7001, {records[i]['patient_id']} - {records[i]['name'][:20]}) = {sim:.4f}")

    # -------------------------------------------------------------------------
    # PART D: UNSTRUCTURED IMAGE PROCESSING (PIXEL NORMALIZATION & CONVOLUTION)
    # -------------------------------------------------------------------------
    print("\\n" + "-" * 80)
    print("4. UNSTRUCTURED IMAGE DATA: Intensity Normalization & Edge Convolution")
    print("-" * 80)
    p1_img_raw = records[0]["unstructured_image"]
    print("Raw 4x4 Pixel Matrix for PT-7001 (Integer intensities [0-255]):")
    for row in p1_img_raw:
        print("  " + "  ".join(f"{p:>4}" for p in row))

    p1_img_norm = UnstructuredImageProcessor.normalize_pixels(p1_img_raw)
    print("\\nNormalized Pixel Matrix ([0.0 - 1.0] continuous scale):")
    for row in p1_img_norm:
        print("  " + "  ".join(f"{p:>6.3f}" for p in row))

    p1_img_conv = UnstructuredImageProcessor.apply_convolution(p1_img_norm)
    print("\\nConvolved 2x2 Spatial Feature Matrix (Horizontal Edge Detection Kernel):")
    for row in p1_img_conv:
        print("  " + "  ".join(f"{p:>7.3f}" for p in row))

    image_feature_vectors = [
        UnstructuredImageProcessor.flatten(
            UnstructuredImageProcessor.apply_convolution(
                UnstructuredImageProcessor.normalize_pixels(r["unstructured_image"])
            )
        )
        for r in records
    ]

    # -------------------------------------------------------------------------
    # PART E: MULTIMODAL FEATURE FUSION (THE MACHINE LEARNING INPUT MATRIX)
    # -------------------------------------------------------------------------
    print("\\n" + "-" * 80)
    print("5. MULTIMODAL FEATURE FUSION: Unifying Disparate Data Modalities into R^(N x D)")
    print("-" * 80)
    print("Formula: X_fused = [ X_structured (4) | X_text_tfidf (10) | X_image_conv (4) ] in R^(5 x 18)\\n")

    fused_matrix = []
    for i in range(len(records)):
        fused_row = structured_matrix[i] + tfidf_matrix[i] + image_feature_vectors[i]
        fused_matrix.append(fused_row)
        print(f"  {records[i]['patient_id']} -> Fused Vector Length: {len(fused_row)} features | Target: {records[i]['target_risk_level']}")

    print("\\n" + "=" * 80)
    print("[✔] LABORATORY VERIFICATION SUCCESSFUL:")
    print("    Demonstrated how Unstructured text (TF-IDF) and Image (Convolution) signals")
    print("    and Semi-Structured JSON (Flattening) are transformed into a strict")
    print("    numerical 2D feature matrix X in R^(N x D) for model training.")
    print("=" * 80)


if __name__ == "__main__":
    run_laboratory()
`,xe=`=============================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES & COMPREHENSIVE REVISION HANDBOOK
Course: Introduction to Machine Learning (Subject Code: BCAC701B)
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Topic 5: Structured, Semi-Structured and Unstructured Data (Foundations & Preprocessing)
Author: Sukanta Hui | Senior Academic Mentor | Coder & AccoTax
Location: Barrackpore, Kolkata, West Bengal, India
=============================================================================

-----------------------------------------------------------------------------
1. EXECUTIVE SUMMARY & THE 80/20 ENTERPRISE DATA PARADOX
-----------------------------------------------------------------------------
In modern data science and enterprise computing, raw information exists in three
fundamental organizational states:

A. STRUCTURED DATA (~10% - 20% of Global Enterprise Volume):
   - Highly organized, tabular grids conforming to rigid, pre-defined schemas.
   - Stored in Relational Database Management Systems (RDBMS: PostgreSQL, MySQL,
     Oracle) or columnar formats (Apache Parquet).
   - High query speed using Structured Query Language (SQL); immediate ingestion
     by classical ML algorithms (XGBoost, Random Forest, Logistic Regression).

B. SEMI-STRUCTURED DATA (~5% - 10% of Global Enterprise Volume):
   - Possesses internal organizational markers, tags, or hierarchies (JSON, XML,
     YAML, BSON), but lacks a rigid relational table schema.
   - Operates on "Schema-on-Read": schema is inferred or adapted at query time.
   - Stored in NoSQL document stores (MongoDB, Couchbase) or data lakes.
   - Requires flattening (e.g. pandas.json_normalize) or key-value feature extraction
     before model ingestion.

C. UNSTRUCTURED DATA (~80% - 90% of Global Enterprise Volume):
   - Information with NO predefined structural model or schema.
   - Examples: Natural language text (clinical narratives, legal briefs, emails),
     digital imagery (JPEG, PNG, DICOM), audio waveforms (WAV, MP3), and video.
   - Stored in Object Storage (Amazon S3, Google Cloud Storage, MinIO) and queried
     via Full-Text Search engines (Elasticsearch) or Vector Databases (Pinecone,
     Milvus, ChromaDB, Qdrant).
   - CRITICAL MACHINE LEARNING PRINCIPLE: ML models are mathematical operators over
     numerical vector spaces R^d. They CANNOT ingest raw text, audio, or images directly.
     Therefore, preprocessing unstructured data consists of "Feature Extraction &
     Vectorization" (mapping raw sensory bits into structured numerical matrices).

-----------------------------------------------------------------------------
2. COMPREHENSIVE 3-WAY ARCHITECTURAL COMPARISON MATRIX
-----------------------------------------------------------------------------
Feature / Dimension        | Structured Data          | Semi-Structured Data    | Unstructured Data
---------------------------+--------------------------+-------------------------+--------------------------
Data Model & Schema        | Schema-on-Write (Rigid)  | Schema-on-Read (Dynamic)| No Inherent Schema
Physical Organization      | Rows (Tuples) & Columns  | Trees, Graphs, Key-Value| Bitstreams, Pixels, Waves
Storage Technologies       | RDBMS (Postgres, Oracle) | NoSQL, JSON, MongoDB    | Object Stores, S3, HDFS
Query Language             | Declarative SQL          | JSONPath, XQuery, MQL   | Vector Similarity, NLP
Enterprise Volume          | 10% - 20%                | 5% - 10%                | 80% - 90% (Dominant)
Modification Cost          | High (Altering DDL DDL)  | Low (Add new JSON keys) | Zero schema change cost
Scalability Nature         | Primarily Vertical       | Horizontal (Distributed)| Massively Horizontal
ML Pipeline Ingestion      | Direct Tabular Matrix    | Needs Flattening/Parse  | Needs Dense/Sparse Embeddings
Processing Latency         | Sub-millisecond (B-Tree) | Fast indexed document   | High (Deep Neural Nets)

-----------------------------------------------------------------------------
3. MATHEMATICAL FOUNDATIONS: VECTORIZATION OF UNSTRUCTURED DATA
-----------------------------------------------------------------------------

A. TEXT MODALITY: THE VECTOR SPACE MODEL (VSM):
   Let document collection D = {d_1, d_2, ..., d_N} and vocabulary V = {t_1, ..., t_M}.
   Each document d is transformed into a sparse or dense vector x_d in R^M.

   1. TERM FREQUENCY (TF):
      TF(t, d) = count(t in d) / sum_{t' in d} count(t' in d)

   2. INVERSE DOCUMENT FREQUENCY (IDF):
      Measures rarity across the entire corpus D:
      IDF(t, D) = log( (1 + |D|) / (1 + |{d in D : t in d}|) ) + 1.0

   3. TF-IDF SCORE:
      x_{d, t} = TF(t, d) * IDF(t, D)
      Normalized via L2 norm: x_norm = x / ||x||_2

   4. COSINE SIMILARITY:
      CosineSim(u, v) = (u . v) / (||u||_2 * ||v||_2)

B. IMAGE MODALITY: DISCRETE 2D CONVOLUTION & NORMALIZATION:
   1. Dynamic Range Normalization:
      I_norm(i, j) = (I_raw(i, j) - min_val) / (max_val - min_val) = I_raw(i, j) / 255.0

   2. 2D Discrete Spatial Convolution with Kernel K in R^(k_h x k_w):
      S(i, j) = (I * K)(i, j) = sum_{m} sum_{n} I(i + m, j + n) * K(m, n)

   3. Vector Flattening:
      Mapping matrix I in R^(H x W x C) -> vector x in R^D where D = H * W * C.

C. AUDIO MODALITY: SPECTROGRAMS & MFCCs:
   1. Windowing: Multiply signal s(t) by Hamming window w(t).
   2. Short-Time Fourier Transform (STFT): Converts 1D time domain to 2D time-frequency.
   3. Mel-Filterbank Mapping: Warps linear Hertz frequencies to logarithmic human ear perception.
   4. Discrete Cosine Transform (DCT): Yields Mel-Frequency Cepstral Coefficients (MFCCs).

-----------------------------------------------------------------------------
4. SEMI-STRUCTURED DATA: JSON PROJECTIVE FLATTENING (SCHEMA-ON-READ)
-----------------------------------------------------------------------------
When consuming REST APIs, IoT payloads, or MongoDB collections, nested dictionaries
and variable-length arrays cannot be passed directly into Scikit-Learn or XGBoost.

Algorithm: Recursive Key Unrolling (Equivalent to pandas.json_normalize):
Given JSON object:
  {
    "user_id": 104,
    "metrics": {"latency_ms": 42.5, "error_count": 0},
    "tags": ["prod", "asia-south1"]
  }
Flattened Relational Columns:
  - user_id -> 104 (Integer)
  - metrics_latency_ms -> 42.5 (Float)
  - metrics_error_count -> 0 (Integer)
  - tags_count -> 2 (Integer count)
  - tags_is_prod -> 1 (One-Hot Encoded Boolean)

-----------------------------------------------------------------------------
5. MULTIMODAL FEATURE FUSION ARCHITECTURE
-----------------------------------------------------------------------------
Modern industrial ML systems (e.g. healthcare diagnostics, fraud detection) fuse
disparate modalities into a single design matrix X in R^(N x D):

  X_fused = [ X_structured (d1) | X_semi_structured (d2) | X_text_tfidf (d3) | X_image_conv (d4) ]

Early Fusion (Feature Level):
  Concatenates preprocessed feature vectors before passing them to an estimator.
Late Fusion (Decision Level):
  Trains separate domain models (e.g. ResNet for images, RoBERTa for text, XGBoost for tabular)
  and blends their predicted probabilities via soft-voting or meta-learning.

-----------------------------------------------------------------------------
6. REGIONAL INDUSTRIAL CASE STUDIES (WEST BENGAL & INDIA)
-----------------------------------------------------------------------------
Case 1: Kolkata Salt Lake Sector V FinTech Hub (Credit Underwriting & Fraud):
  - Fuses Structured CIBIL credit scores and monthly bank transaction ledgers (RDBMS)
    with Unstructured customer dispute call recordings (Whisper ASR) and bank statement
    PDF scans (Tesseract OCR).

Case 2: Kolkata Medical College & SSKM Hospital (Diagnostic Decision Support):
  - Fuses Structured patient vitals (Age, Fasting Sugar, BP) with Unstructured Doctor
    free-text clinical narratives (BioBERT) and digital Chest X-rays (DenseNet-121).

Case 3: Howrah Railway Logistics & Hooghly Manufacturing:
  - Fuses Structured GPS IoT telematics and fuel consumption sensor logs with
    Unstructured container damage inspection photographs and shipping manifest PDFs.

Case 4: Barrackpore & North 24 Parganas E-Commerce Customer Analytics:
  - Fuses Structured purchase histories with Semi-Structured web clickstream JSON logs
    and Unstructured customer review text and unboxing video snippets.

-----------------------------------------------------------------------------
7. COMMON ENGINEERING PITFALLS & INDUSTRY BEST PRACTICES
-----------------------------------------------------------------------------
Pitfall 1: Dense Matrix Materialization of TF-IDF:
  - Text vocabularies easily reach 50,000 terms. Generating a dense NumPy array for
    100,000 documents consumes 100,000 * 50,000 * 8 bytes = 40 GB RAM (instant OOM crash!).
  - Remedy: Always preserve sparse matrices (scipy.sparse.csr_matrix), which only
    store non-zero entries (consuming < 150 MB RAM).

Pitfall 2: Schema Drift in Semi-Structured JSON APIs:
  - Microservices frequently introduce new JSON keys, rename fields, or emit unexpected nulls.
  - Remedy: Implement schema contract validation (Pydantic, JSON Schema) and strict imputation
    pipelines before feeding flattened dictionaries to ML models.

Pitfall 3: Naive Image Flattening for High-Resolution Visual Tasks:
  - A 1024x1024 RGB image flattened into 1D yields 3,145,728 input dimensions. Linear models
    or MLPs will severely overfit and destroy spatial translation invariance.
  - Remedy: Use Convolutional Neural Networks (CNNs) or Pretrained Vision Transformers (ViT)
    to extract low-dimensional spatial feature representations.

Pitfall 4: Treating Semi-Structured Logs as Relational Tables:
  - Forcing frequently mutating JSON IoT logs into an inflexible SQL database triggers endless
    DDL schema migration headaches and database downtime.
  - Remedy: Adopt a Lakehouse pattern (store raw JSON in S3/MinIO, flatten on demand via PySpark).

-----------------------------------------------------------------------------
8. REVISION CHECKLIST (SUKANTA HUI, ACADEMIC MENTOR)
-----------------------------------------------------------------------------
[ ] Understand why 80%+ of real-world enterprise data is unstructured.
[ ] Define the mathematical difference between Schema-on-Write and Schema-on-Read.
[ ] Master the TF-IDF formula and sparse CSR matrix representations.
[ ] Explain how pixel normalization and 2D convolution bridge images into R^d.
[ ] Demonstrate recursive JSON flattening into tabular dataframes.
[ ] Contrast Early Feature Fusion vs Late Decision Fusion for multimodal models.
=============================================================================
`,he=[{id:1,question:"What is the primary architectural difference between Structured and Unstructured data?",shortAnswer:"Structured data follows a strict, predefined relational schema (tables with rows and columns); unstructured data has no predefined data model and consists of free-form text, images, or audio.",explanation:"Structured data conforms to a formal schema-on-write model (e.g. SQL tables, CSV, Parquet) where each column has a rigid data type (INTEGER, VARCHAR, FLOAT). Unstructured data (e.g. doctor notes, chest X-rays, customer call recordings) lacks predefined relational attributes and represents 80-90% of all enterprise information.",hint:"Think about an Excel table with fixed column headers vs a folder of raw MP3 audio recordings.",level:"Basic",codeExample:`# Structured Data (Tabular Pandas DataFrame):
import pandas as pd
df_structured = pd.DataFrame({'age': [24, 52], 'income_lakhs': [4.5, 12.8]})

# Unstructured Data (Raw string text):
text_unstructured = 'Patient reports severe chest pain and persistent morning fatigue.'`},{id:2,question:"What is Semi-Structured data, and how does it bridge the gap between Structured and Unstructured formats?",shortAnswer:"Semi-structured data lacks a formal relational database schema, but contains internal self-describing markers, tags, or hierarchies (like JSON, XML, or BSON).",explanation:`Unlike pure unstructured data (which is a raw byte stream or text), semi-structured data uses self-describing tags or key-value pairs (e.g. {"user": "Mamata", "tags": ["student", "cardiology"]}). It operates on a 'Schema-on-Read' philosophy, allowing flexible, nested, and evolving fields across records without modifying database DDL.`,hint:"Look at web API responses: they are organized in keys and nested brackets, but not in strict SQL tables.",level:"Basic",codeExample:`# Semi-Structured JSON payload
patient_json = {
    'id': 'PT-101',
    'vitals': {'bp': 120, 'hr': 74},
    'allergies': ['Penicillin', 'Sulfa']
}`},{id:3,question:"Why can machine learning algorithms (like SVM, Logistic Regression, or XGBoost) NOT directly consume raw unstructured text or images?",shortAnswer:"Machine learning models are mathematical operators over vector spaces (R^d); they require numerical matrices and cannot perform matrix multiplication on raw text strings or binary image files.",explanation:"Algorithms optimize mathematical cost functions using linear combinations (w^T x + b), distance metrics (||x_i - x_j||), and gradient descent updates. A raw string like 'hypertension' has no intrinsic geometric meaning until it is mapped into a numerical vector space via tokenization, TF-IDF, or dense embeddings.",hint:"Can you multiply a matrix W by a raw string 'Hello World'?",level:"Basic",codeExample:`# Invalid ML call:
# model.fit(['Patient has fever', 'Healthy patient'], [1, 0])  # ERROR!

# Correct: Must vectorize into numerical feature matrix X in R^(N x D)
from sklearn.feature_extraction.text import TfidfVectorizer
X = TfidfVectorizer().fit_transform(['Patient has fever', 'Healthy patient'])`},{id:4,question:"What does the 80/20 Enterprise Data Rule state in modern data engineering?",shortAnswer:"Approximately 80% to 90% of all data generated and stored by enterprises is unstructured (documents, logs, images, audio), while only 10% to 20% is structured relational data.",explanation:"While traditional business software (ERPs, accounting ledgers, CRMs) runs primarily on structured relational databases, the massive explosion of modern data originates from customer reviews, WhatsApp messages, CCTV surveillance, sensor streams, PDFs, and diagnostic scans. Hence, modern data science must master multimodal unstructured preprocessing.",hint:"Think about the proportion of your personal phone storage taken by photos/voice notes vs contacts spreadsheet.",level:"Basic",codeExample:`# Enterprise Volume Distribution
enterprise_data = {'Unstructured (Text, Images, Audio, Logs)': '80-90%', 'Structured (SQL, ERP, Ledger)': '10-20%'}`},{id:5,question:"What is the difference between Schema-on-Write and Schema-on-Read?",shortAnswer:"Schema-on-Write validates and enforces structure before saving data (RDBMS); Schema-on-Read stores raw or semi-structured data as-is and applies structure only when querying or preprocessing (Data Lakes / JSON).",explanation:"In an RDBMS (Postgres, MySQL), inserting a record with a missing mandatory column or wrong type fails instantly (Schema-on-Write). In Big Data and NoSQL systems (S3, MongoDB, Spark), raw logs or JSON are ingested freely without validation; downstream analytics pipelines parse and extract specific keys when needed (Schema-on-Read).",hint:"Enforcing rules at the database door vs interpreting the rules when reading the file.",level:"Basic",codeExample:`# Schema-on-Write: SQL INSERT INTO patients (id, age) VALUES (1, 'twenty') -> FAILS!
# Schema-on-Read: Store raw JSON, parse 'age' during Python ETL:
import json
raw_data = json.loads('{"id": 1, "age": "twenty"}')  # Stored successfully`},{id:6,question:"What is a Document-Term Matrix (DTM) in text preprocessing?",shortAnswer:"A 2D mathematical matrix where rows represent individual documents, columns represent unique vocabulary words, and cells store word occurrences or TF-IDF weights.",explanation:"The Document-Term Matrix transforms an unstructured corpus of text documents into a structured numerical matrix X in R^(N x |V|), where N is the number of documents and |V| is the total vocabulary size. This allows algorithms like Naive Bayes or Logistic Regression to ingest text data.",hint:"Rows = Sentences/Docs, Columns = Dictionary words.",level:"Basic",codeExample:`from sklearn.feature_extraction.text import CountVectorizer
corpus = ['Severe chest pain', 'Normal chest scan']
vectorizer = CountVectorizer()
X_dtm = vectorizer.fit_transform(corpus)
# X_dtm is a 2x4 matrix`},{id:7,question:"Why is a Bag-of-Words (BoW) Document-Term Matrix typically stored as a Sparse Matrix rather than a Dense NumPy array?",shortAnswer:"Because individual documents use only a tiny fraction of the total vocabulary, making over 98-99% of matrix cells zero; sparse matrices store only non-zero coordinates, saving gigabytes of memory.",explanation:"If a vocabulary contains 50,000 words, a typical 50-word document will have 49,950 zeros (99.9% sparsity). Storing 100,000 documents as a dense 64-bit float array would require 100,000 * 50,000 * 8 bytes = 40 GB RAM! A Compressed Sparse Row (CSR) matrix stores only the non-zero word counts, requiring less than 100 MB.",hint:"Why allocate RAM for 49,950 zeroes when only 50 words actually exist in the sentence?",level:"Moderate",codeExample:`from scipy.sparse import csr_matrix
import numpy as np
# Dense consumes 40GB; Sparse stores only (row, col, value) triples
sparse_dtm = csr_matrix([[0, 0, 1], [2, 0, 0], [0, 0, 0]])
print('Memory saved:', sparse_dtm.nnz, 'non-zero entries stored.')`},{id:8,question:"In image preprocessing, how is an unstructured raw image file (e.g. JPEG) converted into a structured machine learning tensor?",shortAnswer:"By decoding the compressed image bytes into a 2D or 3D numerical matrix of pixel intensities (Height x Width x Channels), typically normalized to [0.0, 1.0].",explanation:"An image file is fundamentally a compressed binary bitstream. During preprocessing, image decoding libraries (OpenCV, PIL) expand it into an array of pixel values. A grayscale image yields an H x W matrix with values in [0, 255]; an RGB color image yields an H x W x 3 tensor. Dividing by 255.0 normalizes the inputs for numerical stability.",hint:"Think of an image as a 2D spreadsheet where each cell is a pixel brightness number from 0 to 255.",level:"Basic",codeExample:`import numpy as np
# Synthetic 3x3 RGB image tensor
raw_pixels = np.array([[[255, 0, 0], [0, 255, 0]], [[0, 0, 255], [128, 128, 128]]], dtype=np.float32)
normalized_image = raw_pixels / 255.0  # Scaled to [0.0, 1.0]`},{id:9,question:"What is the mathematical formulation of TF-IDF, and why is it superior to raw word count frequencies?",shortAnswer:"TF-IDF = TF(t, d) * IDF(t, D). It penalizes common ubiquitous words (like 'patient', 'hospital') and elevates rare, highly discriminative keywords (like 'myocardial', 'hyperglycemia').",explanation:"Raw term counts bias models toward frequent boilerplate words. Inverse Document Frequency IDF(t) = log(N / df(t)) assigns high weights to terms that appear in very few documents and low weights to ubiquitous terms. Thus, TF-IDF measures how uniquely informative a word is to a specific document.",hint:"If the word 'the' appears 100 times, is it informative? If 'arsenic' appears 3 times, is it informative?",level:"Moderate",codeExample:`from sklearn.feature_extraction.text import TfidfVectorizer
corpus = ['Patient admitted with acute appendicitis', 'Patient admitted for routine dental checkup']
tfidf = TfidfVectorizer().fit_transform(corpus)
# 'Patient' and 'admitted' receive low weights; 'appendicitis' receives high weight`},{id:10,question:"What is JSON flattening (normalization), and when is it required in a machine learning feature pipeline?",shortAnswer:"JSON flattening recursively unrolls nested dictionaries and lists into top-level column headers, transforming hierarchical JSON records into a 2D tabular dataframe.",explanation:"Web microservices, IoT streams, and Mongo databases store semi-structured JSON with nested objects (e.g. {'user': {'address': {'city': 'Barrackpore'}}}). Standard tabular estimators require a flat 2D matrix. Tools like pandas.json_normalize create compound column headers ('user_address_city') to flatten the hierarchy.",hint:"How do you put a folder inside a folder into a single-row Excel table?",level:"Moderate",codeExample:`import pandas as pd
nested_json = [{'id': 1, 'vitals': {'bp': 120, 'hr': 72}}]
flat_df = pd.json_normalize(nested_json)
# Resulting columns: ['id', 'vitals.bp', 'vitals.hr']`},{id:11,question:"What is Schema Drift in semi-structured data, and what catastrophic problem does it cause in production ML pipelines?",shortAnswer:"Schema Drift occurs when an upstream service alters JSON keys, data types, or nesting without notice, causing downstream preprocessing code to throw KeyErrors or silently generate wrong features.",explanation:"Because semi-structured data has no schema-on-write constraint, an API might suddenly rename 'user_age' to 'age_years', or start returning nulls or strings instead of numbers. If an ML model expects 10 exact input columns, schema drift causes pipeline crashes or silent data corruption.",hint:"What happens to your Python script if a JSON key you access with data['user_name'] is renamed to data['full_name']?",level:"Moderate",codeExample:`# Production defense against Schema Drift using Pydantic
from pydantic import BaseModel, Field
class PatientSchema(BaseModel):
    patient_id: str
    age: int = Field(ge=0, le=120)  # Validates type and range`},{id:12,question:"What is Cosine Similarity, and why is it preferred over Euclidean Distance when comparing unstructured text embeddings?",shortAnswer:"Cosine Similarity measures the cosine of the angle between two vectors, making it invariant to document length, whereas Euclidean distance is distorted by word count variations.",explanation:"If document A has 10 words about cardiology and document B has 100 words about the exact same cardiology topic, their Euclidean distance will be very large due to magnitude differences. Cosine similarity = (u . v) / (||u|| ||v||) measures directional alignment (topic similarity) regardless of document length.",hint:"Angle of direction vs length of arrow.",level:"Moderate",codeExample:`import numpy as np
u = np.array([1, 2, 0])      # Short document
v = np.array([10, 20, 0])    # 10x longer document on same topic
cos_sim = np.dot(u, v) / (np.linalg.norm(u) * np.linalg.norm(v)) # Exactly 1.0 (Identical topic!)`},{id:13,question:"Why does naively flattening a high-resolution 2D image (e.g. 1024x1024 RGB) into a 1D vector cause the Curse of Dimensionality in classical ML?",shortAnswer:"A 1024x1024x3 image produces 3,145,728 input features, causing severe overfitting, astronomical memory requirements, and complete destruction of 2D spatial locality.",explanation:"Flattening treats pixel (1, 1) and pixel (1, 2) as independent, unrelated features, discarding crucial 2D spatial relationships (edges, textures, shapes). Furthermore, fitting an algorithm on 3 million input dimensions requires millions of training samples to prevent overfitting. CNNs solve this via localized kernels.",hint:"What is 1024 * 1024 * 3, and can Logistic Regression handle that many input weights without millions of images?",level:"Moderate",codeExample:`# Naive flattening dimension count:
h, w, c = 1024, 1024, 3
num_features = h * w * c  # 3,145,728 dimensions!
# Solution: Downsample, use CNN feature extractors, or Vision Transformers`},{id:14,question:"How is unstructured audio data preprocessed before being fed into a machine learning model?",shortAnswer:"Audio waveforms are converted into 2D time-frequency images (Spectrograms) or Mel-Frequency Cepstral Coefficients (MFCCs) using Short-Time Fourier Transforms (STFT).",explanation:"Raw audio is a 1D sequence of air pressure amplitudes sampled at 16 kHz or 44.1 kHz. Preprocessing divides the signal into short overlapping windows (e.g. 25ms), applies the Fast Fourier Transform (FFT) to extract frequencies, and maps them to the perceptual Mel scale, producing an MFCC feature matrix.",hint:"How does human hearing perceive sound frequencies, and how do we turn sound waves into an image?",level:"Moderate",codeExample:`# Conceptual MFCC Extraction
# raw_audio: 16000 samples/sec -> STFT -> Mel Filterbank -> MFCCs (e.g. 13 to 40 coefficients per frame)`},{id:15,question:"What is a Dense Embedding (e.g. Word2Vec, BERT, BioBERT), and how does it solve the limitations of Sparse TF-IDF?",shortAnswer:"Dense embeddings map unstructured words or sentences into continuous low-dimensional vectors (e.g. R^300 or R^768) where semantically similar words are close in vector space.",explanation:"Sparse TF-IDF has two flaws: orthogonality (the words 'physician' and 'doctor' share zero overlapping features, cosine similarity = 0) and high dimensionality. Dense embeddings capture latent semantic relationships: vector('doctor') is mathematically close to vector('physician') in embedding space.",hint:"Does TF-IDF understand that 'car' and 'automobile' mean the same thing?",level:"Advanced",codeExample:`# Dense embedding semantic proximity:
# cos_sim(embed('cardiologist'), embed('heart doctor')) ≈ 0.89
# In TF-IDF: cos_sim('cardiologist', 'heart doctor') == 0.0 (Zero shared words)`},{id:16,question:"What is Multimodal Feature Fusion in machine learning systems?",shortAnswer:"The integration of features from multiple distinct data modalities (e.g. Structured patient vitals + Unstructured doctor notes + Unstructured X-ray images) into a unified predictive model.",explanation:"Real-world problems rarely exist in a single modality. In hospital ICUs, patient risk is best predicted by combining structured tabular telemetry (heart rate, blood pressure), unstructured clinical progress notes (NLP), and medical scans (computer vision). Multimodal fusion combines these sources for higher predictive power.",hint:"Combining a patient's lab numbers, doctor's written notes, and X-ray into one comprehensive diagnosis.",level:"Advanced",codeExample:`# Early Fusion: Horizontal concatenation of feature vectors
import numpy as np
x_struct = np.array([54, 130])     # Age, BP (2 dims)
x_text = np.array([0.42, 0.88])     # TF-IDF / NLP embedding (2 dims)
x_image = np.array([0.15, 0.65])    # CNN feature vector (2 dims)
x_fused = np.concatenate([x_struct, x_text, x_image]) # Combined R^6 vector`},{id:17,question:"What is the difference between Early Fusion and Late Fusion in multimodal machine learning?",shortAnswer:"Early Fusion concatenates preprocessed feature vectors from all modalities before model training; Late Fusion trains separate models for each modality and combines their final prediction probabilities.",explanation:"In Early Fusion (feature-level fusion), a single model learns complex cross-modal interactions (e.g. how a specific blood pressure number correlates with a specific X-ray shadow). In Late Fusion (decision-level fusion), specialized models (e.g. ResNet for images, RoBERTa for text, XGBoost for tabular) output probabilities, which are averaged or blended via a meta-classifier.",hint:"Mix ingredients before cooking (Early) vs prepare separate dishes and plate them together (Late).",level:"Advanced",codeExample:`# Late Fusion: Ensembling individual model probabilities
p_tabular = model_xgb.predict_proba(x_tabular)[:, 1]
p_vision = model_cnn.predict_proba(x_image)[:, 1]
p_nlp = model_bert.predict_proba(x_text)[:, 1]
p_final = (0.3 * p_tabular) + (0.4 * p_vision) + (0.3 * p_nlp)`},{id:18,question:"How do Vector Databases (e.g. Pinecone, Milvus, ChromaDB, Qdrant) handle unstructured data search in production enterprise applications?",shortAnswer:"They index dense vector embeddings generated by deep neural networks using Approximate Nearest Neighbor (ANN) algorithms (like HNSW) to perform sub-second semantic search.",explanation:"Traditional relational databases cannot index 768-dimensional float vectors efficiently with B-Trees. Vector databases store dense embeddings of unstructured text or images and use hierarchical navigable small world (HNSW) graphs to find the closest vectors in vector space in milliseconds, powering Retrieval-Augmented Generation (RAG) and reverse image search.",hint:"How does Google Photos find pictures of 'dogs on a beach' without any image filenames having those words?",level:"Advanced",codeExample:`# Conceptual Vector Search Query
query_vector = embed('severe chest discomfort and dizziness')
# vector_db.query(vector=query_vector, top_k=5) -> returns most semantically relevant clinical notes`},{id:19,question:"What is Stop-Word Removal, and when can removing stop-words actually HARM an unstructured text machine learning model?",shortAnswer:"Stop-word removal filters out high-frequency functional words ('the', 'is', 'at'); it harms models when analyzing sentiment, negation ('not', 'no'), or when using modern contextual Transformers (BERT).",explanation:"In classical Bag-of-Words, stop-words add noise and inflate dimensionality without providing topic signal. However, in sentiment analysis or clinical triage, removing 'not' turns 'patient is NOT responding to medication' into 'patient responding medication' (a catastrophic reversal!). Modern Transformers require stop-words to model syntactic attention.",hint:"What happens to the sentence 'Flight was NOT delayed' if you remove the word 'NOT'?",level:"Moderate",codeExample:`# Catastrophic Stop-word Removal on Negation:
raw_text = 'Tumor is not malignant'
filtered = [w for w in raw_text.split() if w.lower() not in ['is', 'not']]
# filtered: ['Tumor', 'malignant'] -> Meaning completely inverted!`},{id:20,question:"What is N-Gram modeling in text vectorization, and what trade-off does it introduce?",shortAnswer:"N-grams group contiguous sequences of N words (e.g. bigrams: 'blood pressure'); they capture local word order context but exponentially increase vocabulary size and matrix sparsity.",explanation:"Unigrams (1-grams) cannot distinguish 'not good' from 'good, not'. Bigrams (2-grams) and trigrams (3-grams) capture phrase-level meaning ('acute myocardial infarction'). However, the number of unique word pairs grows quadratically with vocabulary size, requiring feature selection or frequency pruning.",hint:"Unigram = 'blood', Bigram = 'blood pressure', Trigram = 'high blood pressure'.",level:"Moderate",codeExample:`from sklearn.feature_extraction.text import CountVectorizer
vec = CountVectorizer(ngram_range=(1, 2))  # Captures both unigrams and bigrams
X = vec.fit_transform(['High blood pressure noted'])`},{id:21,question:"In unstructured image preprocessing, what is Discrete 2D Spatial Convolution?",shortAnswer:"A mathematical operation where a small weight matrix (kernel) slides over a 2D image, multiplying overlapping pixel values and summing them to detect localized spatial features (edges, textures).",explanation:"Formally, S(i, j) = (I * K)(i, j) = ∑_m ∑_n I(i - m, j - n) K(m, n). Convolving an image with Sobel or Laplacian kernels highlights horizontal lines, vertical contours, and corners while maintaining translation invariance. This forms the foundation of Convolutional Neural Networks (CNNs).",hint:"A sliding magnifying glass multiplying and adding neighboring pixels to highlight edges.",level:"Advanced",codeExample:`# 3x3 Sobel Horizontal Edge Kernel
sobel_horizontal = [
    [-1, -2, -1],
    [ 0,  0,  0],
    [ 1,  2,  1]
]`},{id:22,question:"Why is Parquet preferred over CSV for storing large-scale structured and semi-structured tabular data in Machine Learning pipelines?",shortAnswer:"Parquet is a columnar binary format with snappy compression, strict schema typing, and partition pruning, making it 5x to 10x smaller and up to 50x faster to read than row-based CSVs.",explanation:"CSV is an uncompressed, untyped plain-text row format; every query must parse every single character across all columns from disk. Parquet stores data column-by-column with dictionary encoding and statistics (min/max per block), allowing queries to read only the specific feature columns needed for model training without loading the entire dataset into RAM.",hint:"Reading only the 3 columns your model needs vs parsing every text line of a 100-column CSV.",level:"Moderate",codeExample:`import pandas as pd
# df.to_parquet('data.parquet', compression='snappy')
# Fast column-pruned load:
# df_subset = pd.read_parquet('data.parquet', columns=['age', 'blood_sugar'])`},{id:23,question:"How do you handle polymorphic arrays inside semi-structured JSON records when preparing tabular ML features?",shortAnswer:"By computing summary aggregation statistics (array length, min, max, average) or applying multi-hot encoding / bag-of-tags vectorization.",explanation:'If a patient JSON has a list of varying length (e.g. {"prescriptions": ["Metformin", "Aspirin"]}), you cannot place variable-length lists directly into fixed SQL columns. Best practice is to extract: (1) count of items len(prescriptions), and (2) Multi-label binarization (One-Hot boolean columns: has_metformin=1, has_aspirin=1).',hint:"How do you turn a shopping basket with 3 items for customer A and 10 items for customer B into fixed table columns?",level:"Advanced",codeExample:`from sklearn.preprocessing import MultiLabelBinarizer
mlb = MultiLabelBinarizer()
prescriptions = [['Metformin', 'Aspirin'], ['Paracetamol'], ['Metformin']]
encoded = mlb.fit_transform(prescriptions)
# Generates clean binary columns for each unique medication`},{id:24,question:"What is Data Leakage in unstructured text preprocessing pipelines, and how does it happen during TF-IDF vectorization?",shortAnswer:"Data leakage occurs when the TF-IDF vectorizer is fit on the entire dataset (including test set) before train/test splitting, allowing test document vocabulary and IDF weights to contaminate the training state.",explanation:"IDF weights depend on total document frequency across the corpus. If you call tfidf.fit(all_data), the model 'knows' words and frequencies from the unseen test set ahead of time, producing artificially inflated validation scores that collapse in production. Always call tfidf.fit_transform(X_train) and tfidf.transform(X_test).",hint:"Fit ONLY on training data; transform on test data!",level:"Advanced",codeExample:`# WRONG (LEAKAGE):
# X_all_tfidf = tfidf.fit_transform(all_docs)
# X_train, X_test = split(X_all_tfidf)

# CORRECT:
X_train_tfidf = tfidf.fit_transform(X_train_docs)
X_test_tfidf = tfidf.transform(X_test_docs)`},{id:25,question:"In enterprise data lakehouses, what is the role of Object Storage (like Amazon S3 or MinIO) for unstructured data?",shortAnswer:"Object storage provides virtually unlimited, low-cost, highly durable, distributed storage for raw binary files (images, audio, PDFs, text logs) accessible via REST APIs.",explanation:"Storing millions of multi-megabyte DICOM scans or CCTV video files directly inside an RDBMS table (as BLOBs) bloats relational database backups, degrades B-Tree indexing, and incurs massive hardware costs. Best practice is to store raw files in S3/MinIO and save only their URI paths (e.g. s3://hospital-scans/pt-101.dcm) in the structured database.",hint:"Store the heavy file on S3; store the file path link in SQL.",level:"Moderate",codeExample:`# Structured Database Record:
record = {'patient_id': 'PT-101', 'scan_date': '2026-11-19', 's3_uri': 's3://medical-lake/scans/pt101_chest_xray.dcm'}`},{id:26,question:"What is Subword Tokenization (e.g. Byte-Pair Encoding BPE, WordPiece), and how does it handle Out-Of-Vocabulary (OOV) words in unstructured text?",shortAnswer:"Subword tokenization breaks unknown or complex words into frequent subword fragments (e.g. 'unpredictable' -> 'un', 'predict', 'able'), eliminating Out-Of-Vocabulary errors.",explanation:"Classical word-level tokenization replaces any unseen word in test data with an unknown '<UNK>' token, losing all semantic meaning. Subword algorithms (used in BERT, GPT, LLaMA) break rare or domain-specific words into common subword pieces, enabling models to parse novel compound terms, typos, and medical jargon seamlessly.",hint:"Breaking compound words into meaningful Lego bricks.",level:"Advanced",codeExample:`# Subword breakdown in modern NLP:
# 'hypercholesterolemia' -> ['hyper', '##cholesterol', '##emia']`},{id:27,question:"When should you choose a Relational Database (Structured) over a NoSQL Document Store (Semi-Structured)?",shortAnswer:"Choose Relational RDBMS when data has a stable, known schema, requires ACID transactions, and involves complex multi-table JOINs; choose NoSQL when schema evolves rapidly, data is nested, and massive horizontal scaling is required.",explanation:"Financial ledgers, banking core accounts, and payroll demand absolute mathematical consistency (ACID) and relational integrity (foreign keys). E-commerce product catalogs with thousands of fluctuating attributes, web analytics event logs, and user profile metadata thrive in flexible NoSQL document stores (MongoDB, DynamoDB).",hint:"Bank accounts (ACID, rigid) vs Amazon product listings (flexible, thousands of varying specs).",level:"Moderate",codeExample:`# RDBMS: Strict foreign key constraints and atomic balances
# NoSQL: Flexible heterogeneous catalog items where a shirt has 'size/fabric' and a laptop has 'ram/cpu'`},{id:28,question:"What is OCR (Optical Character Recognition), and what preprocessing challenges does it present when converting unstructured paper documents to text?",shortAnswer:"OCR converts scanned pixel images of printed or handwritten text into digital machine-readable character strings; challenges include noise, skewed angles, varying fonts, and broken table layouts.",explanation:"Enterprises in West Bengal (e.g. land records, paper bills, medical prescriptions) have decades of scanned physical archives. OCR tools (Tesseract, AWS Textract) convert these to text strings, but produce OCR errors (e.g. reading 'rn' as 'm', or misreading decimal points in medical dosages). Text cleanup and regex normalization are vital.",hint:"Turning a photo of a doctor's handwritten prescription into a digital string.",level:"Moderate",codeExample:"# OCR Pipeline: Image Scan -> Binarization -> Tesseract OCR -> Post-Processing Regex Cleanup"},{id:29,question:"How does Min-Max Normalization differ from Z-Score Standardization when applied to unstructured image pixel intensities?",shortAnswer:"Min-Max normalization scales pixel values strictly to a fixed range [0.0, 1.0] by dividing by 255.0; Z-score standardization shifts pixels to mean 0 and standard deviation 1 using ImageNet pretraining statistics.",explanation:"For neural networks starting from scratch, dividing raw [0, 255] pixels by 255.0 scales intensities cleanly to [0, 1]. For transfer learning with pretrained networks (ResNet, VGG, EfficientNet), pixels must be standardized with the exact mean and std of the ImageNet training corpus: (pixel/255.0 - [0.485, 0.456, 0.406]) / [0.229, 0.224, 0.225].",hint:"Scaling to [0, 1] vs standardizing with ImageNet mean and variance.",level:"Expert",codeExample:`import numpy as np
# Min-Max Normalization:
img_minmax = raw_img / 255.0
# Standardized for Transfer Learning:
mean = np.array([0.485, 0.456, 0.406])
std = np.array([0.229, 0.224, 0.225])
img_standardized = (img_minmax - mean) / std`},{id:30,question:"What is the end-to-end architecture of a Modern Multimodal Enterprise Machine Learning System?",shortAnswer:"Raw structured data flows to SQL/Parquet; semi-structured data is normalized from JSON; unstructured data is vectorized via CNNs/Transformers; all modalities are fused into a unified feature store for training and real-time inference.",explanation:"In production systems (e.g. fraud detection in Salt Lake, Kolkata), (1) Transaction data is queried from PostgreSQL, (2) IoT logs are flattened from Kafka JSON streams, (3) Customer chat transcripts are embedded via RoBERTa into R^768, (4) Invoices are parsed via OCR, and (5) A feature store (Feast/Hopsworks) serves the fused feature vector to an ensembled XGBoost + Neural Network pipeline.",hint:"Connecting SQL tables + JSON streams + Text embeddings + Computer Vision into one production prediction pipeline.",level:"Expert",codeExample:`# Complete Multimodal Pipeline Conceptual Flow:
# [PostgreSQL + Kafka JSON + S3 Audio/Images] -> [Feature Extractors] -> [Unified Feature Store] -> [Model Inference]`}],ge=new Set(["a","an","and","are","as","at","be","by","for","from","has","he","in","is","it","its","of","on","that","the","to","was","were","will","with","patient","reports","observed","under","following"]),fe=p=>String(p).toLowerCase().replace(/[^a-zA-Z0-9\s]/g,"").split(/\s+/).filter(x=>x.length>2&&!ge.has(x)),be=(p,x)=>{if(!p||!x||p.length!==x.length)return 0;let v=0,E=0,w=0;for(let c=0;c<p.length;c++)v+=p[c]*x[c],E+=p[c]*p[c],w+=x[c]*x[c];const M=Math.sqrt(E)*Math.sqrt(w);return M===0?0:Number((v/M).toFixed(4))},R={horizontalEdge:{name:"Sobel Horizontal Edge",desc:"Highlights horizontal boundaries and density gradients",matrix:[[-1,-2,-1],[0,0,0],[1,2,1]]},verticalEdge:{name:"Sobel Vertical Edge",desc:"Highlights vertical contours and structural boundaries",matrix:[[-1,0,1],[-2,0,2],[-1,0,1]]},sharpen:{name:"Laplacian Sharpen",desc:"Enhances high-frequency texture details and contrast",matrix:[[0,-1,0],[-1,5,-1],[0,-1,0]]},identity:{name:"Pass-Through Identity",desc:"Preserves original normalized intensities without alteration",matrix:[[0,0,0],[0,1,0],[0,0,0]]}},Ae=()=>{const[p,x]=n.useState("noviceMasterclass"),[v,E]=n.useState("intuition"),[w,M]=n.useState("all"),[c,K]=n.useState(""),[j,P]=n.useState("textTfidf"),[_,ye]=n.useState([{id:"D1",title:"Mamata (Barrackpore)",text:"Patient presents with mild chest discomfort, high blood sugar, and hypertension."},{id:"D2",title:"Debangshu (Kolkata)",text:"Acute shortness of breath, severe heart palpitations, and critical hypertensive crisis."},{id:"D3",title:"Susmita (Ichapur)",text:"Routine annual health checkup, normal cardiovascular rhythm, and normal blood glucose."},{id:"D4",title:"Abhronila (Jadavpur)",text:"Postural dizziness, mild work stress, blood pressure marginally elevated, advised diet."}]),[A,Y]=n.useState(0),[F,Z]=n.useState(1),[D,O]=n.useState("tfidf"),[ve,we]=n.useState(4),[T,$]=n.useState("horizontalEdge"),[V,Ne]=n.useState([[35,45,215,230],[40,55,200,220],[30,50,185,210],[25,40,170,195]]),[Se,je]=n.useState("clinical"),[k,ee]=n.useState(!1),[N,te]=n.useState(!1),[z,ae]=n.useState(0),[H,W]=n.useState(null),[ne,X]=n.useState(!1);n.useId();const se=t=>{x(t);const a=document.getElementById(t);a&&a.scrollIntoView({behavior:"smooth",block:"start"})},re=[{term:"Structured Data",category:"architecture",pronunciation:"Struk-churd Day-tuh",shortDef:"Information organized into strict relational tables with pre-defined column schemas.",deepExplanation:"Conforms to rigid Schema-on-Write semantics (SQL databases, CSV, Parquet). Every row is an entity; every column is a typed attribute (Integer, Float, Date). Machine learning estimators like XGBoost, Decision Trees, and OLS directly process structured 2D matrices X in R^(N x D).",equation:"X in R^{N x D}, quad x_{ij} in mathcal{D}_j"},{term:"Semi-Structured Data",category:"architecture",pronunciation:"Sem-ee Struk-churd",shortDef:"Data lacking a relational table schema, but containing self-describing tags or hierarchical trees (JSON, XML, BSON).",deepExplanation:"Operates on Schema-on-Read. Records can have variable fields, nested sub-dictionaries, and polymorphic arrays. Before ML training, semi-structured documents must be flattened or normalized into a tabular dataframe.",equation:"mathcal{T} = (V, E) quad text{where} quad v_i in text{Keys} cup text{Values}"},{term:"Unstructured Data",category:"architecture",pronunciation:"Un-struk-churd Day-tuh",shortDef:"Information with no predefined data model, encompassing raw text, images, audio, and video (80-90% of all data).",deepExplanation:"Because ML algorithms are mathematical operators on vector spaces, unstructured data cannot be used raw. Feature representation pipelines (tokenization, TF-IDF, CNN kernels, MFCCs) map raw bytes into structured numerical tensors.",equation:"phi: mathcal{U} rightarrow mathbb{R}^D"},{term:"The 80/20 Enterprise Paradox",category:"architecture",pronunciation:"80-20 Rule",shortDef:"The industrial reality that 80-90% of all real-world data is unstructured, while 80% of legacy analytics only uses structured SQL.",deepExplanation:"While corporate ERP and billing databases hold structured data, the vast majority of actionable signal resides in unstructured physician notes, PDFs, customer reviews, call transcripts, and security camera streams, driving the need for multimodal AI.",equation:"text{Vol}_{text{Unstructured}} approx 4 text{ to } 9 times text{Vol}_{text{Structured}}"},{term:"Document-Term Matrix (DTM)",category:"nlp",pronunciation:"D-T-M",shortDef:"A 2D matrix where rows represent documents and columns represent unique vocabulary words.",deepExplanation:"Represents an unstructured text corpus in structured tabular form. Cell (i, j) indicates either the raw count or the TF-IDF weight of word j in document i.",equation:"mathbf{X}_{text{DTM}} in mathbb{R}^{N times |V|}"},{term:"TF-IDF Weighting",category:"nlp",pronunciation:"T-F I-D-F",shortDef:"Term Frequency times Inverse Document Frequency; measures how uniquely informative a word is to a document.",deepExplanation:"Penalizes high-frequency common words across the corpus while boosting rare, discriminative domain keywords. Highly resilient against document length variations when paired with L2 normalization.",equation:"text{TF-IDF}(t, d) = text{TF}(t, d) times logleft(frac{1 + N}{1 + text{df}(t)}right) + 1"},{term:"Sparse Matrix Representation (CSR)",category:"nlp",pronunciation:"Com-pressed Sparse Row",shortDef:"A memory-efficient format storing only non-zero coordinates and values, saving over 98% of RAM.",deepExplanation:"In text analysis, most documents contain less than 1% of the entire vocabulary. Storing zeros in dense NumPy arrays causes immediate Out-Of-Memory (OOM) crashes. CSR stores three compact 1D arrays: data, indices, and indptr.",equation:"text{Memory Ratio} = frac{text{nnz} times (text{val} + text{idx})}{N times M times 8 text{ bytes}} ll 1"},{term:"Dense Embeddings",category:"nlp",pronunciation:"Dense Em-bed-dings",shortDef:"Continuous vector representations (e.g. Word2Vec, BERT) where semantically similar concepts are close in space.",deepExplanation:"Unlike sparse orthogonal TF-IDF vectors, dense embeddings map semantic concepts into low-dimensional spaces (R^300 to R^768). The words 'doctor' and 'physician' have high cosine similarity even if they share zero characters.",equation:"mathbf{e}_{text{word}} in mathbb{R}^d, quad text{sim}(mathbf{u}, mathbf{v}) = cos(theta)"},{term:"Pixel Intensity Tensor",category:"vision",pronunciation:"Pix-el Ten-sor",shortDef:"A multi-dimensional numerical array representing image brightness values across spatial coordinates and color channels.",deepExplanation:"Grayscale images are 2D matrices H x W with integer values in [0, 255]. Color images are 3D tensors H x W x 3 (Red, Green, Blue). Preprocessing scales these to [0.0, 1.0] continuous floats.",equation:"mathbf{I} in [0, 255]^{H times W times C} quad xrightarrow{text{norm}} quad mathbf{I}_{text{norm}} in [0.0, 1.0]^{H times W times C}"},{term:"Discrete 2D Spatial Convolution",category:"vision",pronunciation:"Con-vo-loo-shun",shortDef:"Sliding a small matrix kernel over an image to compute weighted neighborhood sums that detect edges and textures.",deepExplanation:"Preserves 2D spatial locality without blowing up parameter counts. Convolutional kernels (Sobel, Laplacian) detect horizontal contours, vertical boundaries, and corners while maintaining translation invariance.",equation:"S(i, j) = (I * K)(i, j) = sum_{m} sum_{n} I(i + m, j + n) K(m, n)"},{term:"JSON Flattening / Normalization",category:"storage",pronunciation:"J-SON Nor-muh-li-zay-shun",shortDef:"The process of recursively converting nested JSON dictionaries and arrays into tabular relational columns.",deepExplanation:"Maps nested keys (e.g. user -> address -> city) into compound column headers (user_address_city) so tabular models like Random Forest can ingest IoT, mobile app, and REST API payloads.",equation:"text{Flatten}({text{k}_1: {text{k}_2: v}}) rightarrow {text{k}_1 ext{_} ext{k}_2: v}"},{term:"Multimodal Feature Fusion",category:"storage",pronunciation:"Mul-ti-mo-dul Few-zhun",shortDef:"Combining tabular structured features, text TF-IDF vectors, and image embeddings into a single unified design matrix.",deepExplanation:"Enables unified predictive modeling by horizontally concatenating diverse feature vectors: X_fused = [ X_structured | X_text | X_image ] in R^(N x D).",equation:"mathbf{x}_{text{fused}} = mathbf{x}_{text{struct}} oplus mathbf{x}_{text{text}} oplus mathbf{x}_{text{vision}} in mathbb{R}^{d_1 + d_2 + d_3}"}],ie=n.useMemo(()=>re.filter(t=>{const a=w==="all"||t.category===w,s=t.term.toLowerCase().includes(c.toLowerCase())||t.shortDef.toLowerCase().includes(c.toLowerCase());return a&&s}),[w,c]),m=n.useMemo(()=>{const t=_.map(r=>fe(r.text)),a=new Set;t.forEach(r=>r.forEach(d=>a.add(d)));const s=Array.from(a).sort(),o=_.length,g={};s.forEach(r=>{let d=0;t.forEach(i=>{i.includes(r)&&d++}),g[r]=d});const f={};s.forEach(r=>{f[r]=Number((Math.log((1+o)/(1+g[r]))+1).toFixed(4))});const C=t.map(r=>{const d=r.length||1,i={};r.forEach(h=>i[h]=(i[h]||0)+1);const u=s.map(h=>{const L=(i[h]||0)/d,le=f[h];return L*le}),Q=Math.sqrt(u.reduce((h,L)=>h+L*L,0));return u.map(h=>Q>0?Number((h/Q).toFixed(4)):0)}),I=t.map(r=>{const d=r.length||1,i={};return r.forEach(u=>i[u]=(i[u]||0)+1),s.map(u=>Number(((i[u]||0)/d).toFixed(4)))}),q=C.reduce((r,d)=>r+d.filter(i=>i===0).length,0),b=o*s.length,y=b>0?(q/b*100).toFixed(1):0;return{vocab:s,docTokens:t,dfMap:g,idfMap:f,tfMatrix:I,tfidfMatrix:C,sparsityPct:y}},[_]),J=n.useMemo(()=>!m.tfidfMatrix[A]||!m.tfidfMatrix[F]?0:be(m.tfidfMatrix[A],m.tfidfMatrix[F]),[m,A,F]),B=n.useMemo(()=>{const t=V,a=t.length,s=t[0].length,o=t.map(b=>b.map(y=>Number((y/255).toFixed(3)))),g=R[T].matrix,f=Math.max(1,a-2),C=Math.max(1,s-2),I=[];for(let b=0;b<f;b++){const y=[];for(let r=0;r<C;r++){let d=0;for(let i=0;i<3;i++)for(let u=0;u<3;u++)d+=o[b+i][r+u]*g[i][u];y.append?y.append(d):y.push(Number(d.toFixed(3)))}I.push(y)}const q=I.flat();return{raw:t,normalized:o,convolved:I,flattened:q,outH:f,outW:C}},[V,T]),U=[{id:1,scenario:"Semi-Structured JSON vs Relational SQL",question:'A fintech payment gateway in Salt Lake, Kolkata, logs user transactions as JSON objects with nested metadata: {"txn_id": "TXN-904", "user": {"tier": "Gold", "city": "Kolkata"}, "items": ["Grocery", "Apparel"]}. Which classification is strictly correct?',options:[{label:"A",text:"Pure Structured Data, because JSON strings are stored in computer memory."},{label:"B",text:"Semi-Structured Data, because it possesses internal hierarchical tags and operates on Schema-on-Read."},{label:"C",text:"Pure Unstructured Data, because it is impossible to run any mathematical algorithm on it."},{label:"D",text:"Continuous Gaussian Data, because monetary transaction amounts are real numbers."}],correct:"B",explanation:"JSON, XML, and YAML are classic Semi-Structured data formats. They lack a rigid relational database schema (Schema-on-Write), but contain explicit self-describing key-value hierarchies. They require projective flattening (e.g. pd.json_normalize) before ingestion by standard tabular ML estimators.",mentorTip:"Always identify the data contract: Relational SQL is Structured (Schema-on-Write), JSON/XML is Semi-Structured (Schema-on-Read), and raw video/text/audio is Unstructured!"},{id:2,scenario:"Direct Ingestion of Raw Text by Machine Learning Estimators",question:"A junior data scientist writes: `model = LogisticRegression().fit(['Patient has fever', 'Healthy patient'], [1, 0])`. What will occur?",options:[{label:"A",text:"The code will automatically convert text to ASCII numbers and train flawlessly."},{label:"B",text:"A TypeError will crash the program because machine learning algorithms are mathematical operators over vector spaces (R^d) and cannot perform arithmetic on raw strings."},{label:"C",text:"Scikit-Learn will automatically download GPT-4 to read the text in English."},{label:"D",text:"The model will silently output 50% accuracy on all predictions."}],correct:"B",explanation:"Machine learning models optimize linear algebra loss functions (w^T x + b, Euclidean distance, gradient descent). They strictly require numerical 2D feature matrices X in R^(N x D). Unstructured text must first be transformed into numerical vectors via Tokenization, CountVectorizer, TF-IDF, or Dense Embeddings.",mentorTip:"Never forget: Machine learning algorithms don't know English, Hindi, or Bengali—they only know linear algebra over numbers! Vectorization is mandatory."},{id:3,scenario:"Dense Array Allocation Disaster on Unstructured Text",question:"You vectorize 100,000 patient clinical discharge records using a 50,000-word vocabulary. A student converts the output to a dense NumPy array with `X.toarray()`. What happens to the system?",options:[{label:"A",text:"The code executes in 2 milliseconds with zero memory overhead."},{label:"B",text:"An immediate Out-Of-Memory (OOM) crash occurs because 100,000 x 50,000 x 8 bytes requires ~40 Gigabytes of contiguous RAM!"},{label:"C",text:"The vocabulary is automatically reduced to the top 5 most common words."},{label:"D",text:"The model automatically converts to a Convolutional Neural Network."}],correct:"B",explanation:"A dense 100,000 x 50,000 float64 matrix requires 5,000,000,000 floats * 8 bytes = 40 GB RAM! Because typical documents contain fewer than 100 unique words (99.8% sparsity), preserving the sparse matrix (scipy.sparse.csr_matrix) stores only non-zero coordinates, consuming under 120 MB.",mentorTip:"Never call `.toarray()` on text DTMs in production! Always keep them in sparse CSR format (scipy.sparse) which Scikit-Learn algorithms natively support."},{id:4,scenario:"Dimensionality Explosion in Raw Image Flattening",question:"An AI engineer attempts to train a Random Forest on 1024x1024 pixel RGB chest X-ray scans by naively unrolling each image with `image.flatten()`. Why is this approach fundamentally flawed?",options:[{label:"A",text:"Random Forests are mathematically prohibited from accepting floating-point numbers."},{label:"B",text:"Flattening generates 3,145,728 input dimensions per image, completely destroying 2D spatial locality and causing the Curse of Dimensionality."},{label:"C",text:"The images will become inverted in color from grayscale to green."},{label:"D",text:"The algorithm will require negative numbers to predict disease."}],correct:"B",explanation:"1024 * 1024 * 3 = 3,145,728 input features! Flattening treats adjacent pixels as completely independent features, losing essential spatial relationships (edges, anatomical organs, lesions). Convolutional Neural Networks (CNNs) solve this by sliding small localized kernels to extract low-dimensional translation-invariant features.",mentorTip:"Flattening destroys spatial topology! For complex visual data, use CNNs or Vision Transformers instead of feeding raw flattened pixels to classical tabular models."},{id:5,scenario:"Orthogonality Limitation of Sparse TF-IDF vs Dense Embeddings",question:"In a clinical review corpus, Document 1 states 'Physician examined cardiac rhythm' and Document 2 states 'Doctor checked heart beat'. What is their TF-IDF Cosine Similarity, and how do Dense Embeddings solve this?",options:[{label:"A",text:"TF-IDF similarity is 1.0; Dense Embeddings are unnecessary."},{label:"B",text:"TF-IDF similarity is 0.0 because they share zero common words; Dense Embeddings capture latent semantic synonyms in continuous vector space."},{label:"C",text:"TF-IDF similarity is negative; Dense Embeddings convert words into relational SQL."},{label:"D",text:"Both methods fail because medical terms cannot be represented in vector spaces."}],correct:"B",explanation:"TF-IDF treats distinct vocabulary words as completely orthogonal dimensions. Since 'physician' and 'doctor' share no characters, their dot product is zero. Dense embeddings (like Word2Vec, BioBERT) project words into semantic vector spaces where vector('physician') and vector('doctor') have high cosine similarity (e.g. ~0.88).",mentorTip:"Remember the vocabulary orthogonality trap: TF-IDF only matches exact keywords; Dense Embeddings match semantic meaning!"}],oe=t=>{W(t),X(!0)},S=U[z],G=H===S.correct;return e.jsxs("div",{className:"space-y-10 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-16",children:[e.jsxs("header",{className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-8 rounded-2xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Data Types and Preprocessing • Topic 5"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full",children:"MAKAUT Master Syllabus"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full",children:"Multimodal ML Core"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Structured, Semi-Structured & Unstructured Data"}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed",children:["Understand the architectural taxonomy of enterprise data modalities, the 80/20 data paradox, schema-on-write vs schema-on-read, and the mathematical feature extraction pipelines (TF-IDF vector space modeling, 2D image convolution, and recursive JSON flattening) required to transform raw sensory signals into structured design matrices ",e.jsx("span",{className:"font-mono text-cyan-300 font-bold",children:"X ∈ ℝ^(N×D)"}),"."]}),e.jsx("div",{className:"flex flex-wrap gap-2 pt-3",children:[{id:"noviceMasterclass",label:"1. Novice Masterclass & Jargon"},{id:"interactiveStudio",label:"2. Multimodal Vectorization Studio"},{id:"theory",label:"3. Vector Space Theory & Math"},{id:"caseStudies",label:"4. Regional Industrial Cases"},{id:"diagnosticQuiz",label:"5. Diagnostic Self-Quiz"},{id:"bestPractices",label:"6. Pitfalls & Best Practices"},{id:"labSection",label:"7. Python Lab Code"},{id:"faqSection",label:"8. FAQ & Answers"},{id:"notesSection",label:"9. Revision Notes"}].map(t=>e.jsx("button",{onClick:()=>se(t.id),className:l("px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300 cursor-pointer",p===t.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/60"),children:t.label},t.id))})]})]}),e.jsxs("section",{id:"noviceMasterclass",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Novice Classroom: Intuition, Taxonomy & Jargon Buster"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Plain-English analogies, architectural comparison matrices, and searchable terminology glossary"})]})]}),e.jsx("div",{className:"flex gap-2 p-1.5 bg-slate-900 rounded-xl border border-slate-800 max-w-xl",children:[{id:"intuition",label:"Real-World Metaphors"},{id:"comparison",label:"3-Way Comparative Matrix"},{id:"jargon",label:"Interactive Jargon Buster"}].map(t=>e.jsx("button",{onClick:()=>E(t.id),className:l("flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all",v===t.id?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"text-slate-400 hover:text-white"),children:t.label},t.id))}),v==="intuition"&&e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-blue-500/30 space-y-4 relative overflow-hidden",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg",children:"📊"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Structured Data: The Meticulous Spreadsheet"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Imagine an official banking ledger or Excel spreadsheet where every single column is strictly titled (",e.jsx("span",{className:"text-blue-300 font-mono",children:"Account_No"}),", ",e.jsx("span",{className:"text-blue-300 font-mono",children:"Balance_INR"}),", ",e.jsx("span",{className:"text-blue-300 font-mono",children:"KYC_Status"}),") and locked. You are prohibited from entering text in a numeric column."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-400 font-mono",children:[e.jsx("span",{className:"text-blue-400 font-bold",children:"SQL / RDBMS / Parquet:"}),e.jsx("br",{}),"• 10%–20% of enterprise volume",e.jsx("br",{}),"• Instant query speed with B-Trees",e.jsx("br",{}),"• Directly feeds XGBoost & Regression"]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-amber-500/30 space-y-4 relative overflow-hidden",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg",children:"🏷️"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Semi-Structured: The Sticky-Note Prescription"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Imagine a medical receipt or JSON payload with labeled tags: ",e.jsx("span",{className:"text-amber-300 font-mono",children:'Doctor: "Dr. Roy"'}),", ",e.jsx("span",{className:"text-amber-300 font-mono",children:'Medicines: ["Paracetamol", "Azithromycin"]'}),". It isn't locked into rigid table columns, but each piece of data carries its own descriptive label."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-400 font-mono",children:[e.jsx("span",{className:"text-amber-400 font-bold",children:"JSON / XML / MongoDB:"}),e.jsx("br",{}),"• 5%–10% of enterprise volume",e.jsx("br",{}),"• Flexible Schema-on-Read",e.jsx("br",{}),"• Flattened via pd.json_normalize()"]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-rose-500/30 space-y-4 relative overflow-hidden",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-lg",children:"🌊"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Unstructured Data: The Continuous River"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Imagine a continuous voice recording of a patient consultation, a handwritten diary page, or a raw MRI brain scan. There are no predefined rows, columns, or tags—just raw, continuous sensory bitstreams that human senses naturally interpret."}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-400 font-mono",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"Text / Audio / Images / Video:"}),e.jsx("br",{}),"• 80%–90% of all global data!",e.jsx("br",{}),"• Stored in S3 / MinIO Object Lakes",e.jsx("br",{}),"• Requires TF-IDF / CNN Embeddings"]})]})]}),v==="comparison"&&e.jsxs("div",{className:"bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden shadow-xl",children:[e.jsxs("div",{className:"p-4 sm:p-5 bg-slate-950 border-b border-slate-800",children:[e.jsx("h3",{className:"text-base font-bold text-white",children:"Comprehensive Architectural Comparison Matrix"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Detailed side-by-side analysis across engineering dimensions"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-xs border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-slate-950/80 text-slate-300 border-b border-slate-800 text-[11px] uppercase tracking-wider",children:[e.jsx("th",{className:"p-3.5 font-bold",children:"Dimension"}),e.jsx("th",{className:"p-3.5 font-bold text-blue-400",children:"Structured Data"}),e.jsx("th",{className:"p-3.5 font-bold text-amber-400",children:"Semi-Structured Data"}),e.jsx("th",{className:"p-3.5 font-bold text-rose-400",children:"Unstructured Data"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30 transition",children:[e.jsx("td",{className:"p-3.5 font-bold text-white",children:"Schema Nature"}),e.jsx("td",{className:"p-3.5 font-mono text-blue-300",children:"Schema-on-Write (Strict DDL)"}),e.jsx("td",{className:"p-3.5 font-mono text-amber-300",children:"Schema-on-Read (Dynamic)"}),e.jsx("td",{className:"p-3.5 font-mono text-rose-300",children:"No Predefined Schema"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition",children:[e.jsx("td",{className:"p-3.5 font-bold text-white",children:"Physical Representation"}),e.jsx("td",{className:"p-3.5",children:"Relational 2D tables (Rows & Columns)"}),e.jsx("td",{className:"p-3.5",children:"Hierarchical trees, nested key-values, lists"}),e.jsx("td",{className:"p-3.5",children:"Character strings, pixel tensors, audio waveforms"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition",children:[e.jsx("td",{className:"p-3.5 font-bold text-white",children:"Storage Tech"}),e.jsx("td",{className:"p-3.5 font-mono",children:"PostgreSQL, MySQL, Oracle, Parquet"}),e.jsx("td",{className:"p-3.5 font-mono",children:"MongoDB, Couchbase, JSON files, XML"}),e.jsx("td",{className:"p-3.5 font-mono",children:"Amazon S3, MinIO, Blob Stores, HDFS"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition",children:[e.jsx("td",{className:"p-3.5 font-bold text-white",children:"Enterprise Share"}),e.jsx("td",{className:"p-3.5 font-bold text-blue-400",children:"10% – 20%"}),e.jsx("td",{className:"p-3.5 font-bold text-amber-400",children:"5% – 10%"}),e.jsx("td",{className:"p-3.5 font-bold text-rose-400",children:"80% – 90% (Dominant)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition",children:[e.jsx("td",{className:"p-3.5 font-bold text-white",children:"Query Language"}),e.jsx("td",{className:"p-3.5 font-mono",children:"Declarative SQL"}),e.jsx("td",{className:"p-3.5 font-mono",children:"JSONPath, XQuery, MQL"}),e.jsx("td",{className:"p-3.5 font-mono",children:"Vector Cosine Similarity, Full-Text Search"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition",children:[e.jsx("td",{className:"p-3.5 font-bold text-white",children:"ML Ingestion Prep"}),e.jsx("td",{className:"p-3.5",children:"Direct tabular matrix ingestion"}),e.jsx("td",{className:"p-3.5",children:"Flattening (pd.json_normalize), Key binarization"}),e.jsx("td",{className:"p-3.5",children:"Tokenization, TF-IDF, CNN Kernels, Vector Embeddings"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition",children:[e.jsx("td",{className:"p-3.5 font-bold text-white",children:"Search Indexing"}),e.jsx("td",{className:"p-3.5 font-mono",children:"B-Tree, Hash Indexing"}),e.jsx("td",{className:"p-3.5 font-mono",children:"Inverted Document Index"}),e.jsx("td",{className:"p-3.5 font-mono",children:"HNSW, IVF Vector Index (Pinecone, ChromaDB)"})]})]})]})})]}),v==="jargon"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900 p-4 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"flex gap-1.5 flex-wrap",children:[{id:"all",label:"All Terms"},{id:"architecture",label:"Architecture"},{id:"nlp",label:"Text & NLP"},{id:"vision",label:"Computer Vision"},{id:"storage",label:"Storage & Lakehouse"}].map(t=>e.jsx("button",{onClick:()=>M(t.id),className:l("px-3 py-1 rounded-lg text-xs font-semibold transition-all",w===t.id?"bg-indigo-600 text-white":"bg-slate-800 text-slate-300 hover:text-white"),children:t.label},t.id))}),e.jsx("input",{type:"text",placeholder:"Search definitions (e.g. TF-IDF, Sparse, JSON)...",value:c,onChange:t=>K(t.target.value),className:"w-full sm:w-64 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:ie.map((t,a)=>e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-xl border border-slate-800 hover:border-indigo-500/40 transition space-y-2.5",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("h4",{className:"text-sm font-bold text-white tracking-wide",children:t.term}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800",children:t.pronunciation})]}),e.jsx("p",{className:"text-xs text-cyan-300 font-medium",children:t.shortDef}),e.jsx("p",{className:"text-[11px] text-slate-300 leading-relaxed",children:t.deepExplanation}),t.equation&&e.jsxs("div",{className:"text-[10px] font-mono bg-slate-950 p-2 rounded border border-slate-800 text-emerald-300",children:["Math: ",t.equation]})]},a))})]})]}),e.jsxs("section",{id:"interactiveStudio",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"02"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Interactive Multimodal Vectorization Laboratory"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Hands-on interactive simulators for Text TF-IDF vector spaces, 2D Image Convolution, and JSON Relational Flattening"})]})]}),e.jsxs("div",{className:"flex gap-2 p-1.5 bg-slate-900 rounded-xl border border-slate-800 max-w-2xl",children:[e.jsx("button",{onClick:()=>P("textTfidf"),className:l("flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer",j==="textTfidf"?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"text-slate-400 hover:text-white"),children:"Modality A: Text TF-IDF & Cosine Space"}),e.jsx("button",{onClick:()=>P("imageConv"),className:l("flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer",j==="imageConv"?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"text-slate-400 hover:text-white"),children:"Modality B: Image 2D Convolution & Flattening"}),e.jsx("button",{onClick:()=>P("jsonNormalize"),className:l("flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer",j==="jsonNormalize"?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"text-slate-400 hover:text-white"),children:"Modality C: Semi-Structured JSON Normalizer"})]}),j==="textTfidf"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📝"})," Text Vector Space & Document-Term Matrix (DTM)"]}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Vocabulary: ",m.vocab.length," unique terms • Corpus Sparsity: ",m.sparsityPct,"%"]})]}),e.jsxs("div",{className:"flex gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>O("tfidf"),className:l("px-2.5 py-1 rounded",D==="tfidf"?"bg-indigo-600 text-white":"text-slate-400"),children:"TF-IDF (Normalized)"}),e.jsx("button",{onClick:()=>O("tf"),className:l("px-2.5 py-1 rounded",D==="tf"?"bg-indigo-600 text-white":"text-slate-400"),children:"Raw Term Frequency (TF)"}),e.jsx("button",{onClick:()=>O("idf"),className:l("px-2.5 py-1 rounded",D==="idf"?"bg-indigo-600 text-white":"text-slate-400"),children:"IDF Weights"})]})]}),e.jsx("div",{className:"overflow-x-auto bg-slate-950 rounded-xl border border-slate-800 p-3",children:e.jsxs("table",{className:"w-full text-xs text-left",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-800 text-slate-400 font-mono text-[11px]",children:[e.jsx("th",{className:"p-2 w-44",children:"Document"}),m.vocab.map((t,a)=>e.jsxs("th",{className:"p-2 text-center text-cyan-300 font-bold whitespace-nowrap",children:[t,D==="idf"&&e.jsxs("span",{className:"block text-[10px] text-slate-500 font-normal",children:["IDF: ",m.idfMap[t]]})]},a))]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 font-mono text-xs",children:_.map((t,a)=>e.jsxs("tr",{className:"hover:bg-slate-900/60 transition",children:[e.jsxs("td",{className:"p-2 font-bold text-white font-sans text-xs",children:[e.jsxs("span",{className:"text-indigo-400 mr-1.5",children:[t.id,":"]}),t.title]}),m.vocab.map((s,o)=>{const g=D==="tfidf"?m.tfidfMatrix[a][o]:D==="tf"?m.tfMatrix[a][o]:m.idfMap[s],f=g===0;return e.jsx("td",{className:l("p-2 text-center",f?"text-slate-700":"text-emerald-400 font-bold bg-emerald-500/10 rounded"),children:g.toFixed(2)},o)})]},t.id))})]})}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("h4",{className:"text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{children:"📐"})," Vector Space Angle: Pairwise Cosine Similarity"]}),e.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-slate-400",children:"Doc A:"}),e.jsx("select",{value:A,onChange:t=>Y(Number(t.target.value)),className:"bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white text-xs font-semibold",children:_.map((t,a)=>e.jsxs("option",{value:a,children:[t.id,": ",t.title]},t.id))})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-slate-400",children:"Doc B:"}),e.jsx("select",{value:F,onChange:t=>Z(Number(t.target.value)),className:"bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white text-xs font-semibold",children:_.map((t,a)=>e.jsxs("option",{value:a,children:[t.id,": ",t.title]},t.id))})]}),e.jsxs("div",{className:"flex items-center gap-3 ml-auto bg-slate-900 px-4 py-2 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-slate-400",children:"Cosine Similarity:"}),e.jsx("span",{className:"font-mono text-base font-bold text-cyan-400",children:J}),e.jsxs("span",{className:"text-[11px] text-slate-400",children:["(",(J*100).toFixed(1),"% Semantic Directional Match)"]})]})]})]})]}),j==="imageConv"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🖼️"})," 2D Pixel Intensity Normalization & Spatial Convolution"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Transform raw [0-255] pixels into normalized feature maps and flattened 1D tensors"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400 font-semibold",children:"Active Filter Kernel:"}),e.jsx("select",{value:T,onChange:t=>$(t.target.value),className:"bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-cyan-300 font-bold",children:Object.entries(R).map(([t,a])=>e.jsx("option",{value:t,children:a.name},t))})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"text-xs font-bold text-white uppercase tracking-wider",children:"Stage 1: Raw Pixels [0–255]"}),e.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:"4×4 Unstructured"})]}),e.jsx("div",{className:"grid grid-cols-4 gap-1 p-2 bg-slate-900 rounded-lg border border-slate-800",children:B.raw.map((t,a)=>t.map((s,o)=>e.jsx("div",{style:{backgroundColor:`rgb(${s}, ${s}, ${s})`},className:"h-10 rounded flex items-center justify-center text-[10px] font-mono font-bold text-indigo-400 shadow-inner",children:e.jsx("span",{className:"bg-slate-950/80 px-1 py-0.5 rounded text-white text-[9px]",children:s})},`${a}-${o}`)))}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"Integer byte intensities decoded from JPEG/DICOM bitstream."})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"text-xs font-bold text-cyan-300 uppercase tracking-wider",children:"Stage 2: 2D Spatial Filter"}),e.jsx("span",{className:"text-[10px] font-mono text-cyan-400",children:"Kernel: 3×3"})]}),e.jsx("div",{className:"grid grid-cols-3 gap-1 p-2 bg-slate-900 rounded-lg border border-slate-800 max-w-[140px] mx-auto",children:R[T].matrix.map((t,a)=>t.map((s,o)=>e.jsx("div",{className:"h-7 bg-slate-950 border border-slate-700 rounded flex items-center justify-center text-[10px] font-mono font-bold text-amber-300",children:s},`${a}-${o}`)))}),e.jsxs("div",{className:"text-[11px] text-slate-400 space-y-1",children:[e.jsx("p",{className:"font-semibold text-slate-300",children:R[T].name}),e.jsx("p",{children:R[T].desc})]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"text-xs font-bold text-emerald-400 uppercase tracking-wider",children:"Stage 3: Feature Map & 1D Vector"}),e.jsx("span",{className:"text-[10px] font-mono text-emerald-400",children:"Output: 2×2 -> R^4"})]}),e.jsx("div",{className:"grid grid-cols-2 gap-1.5 p-2 bg-slate-900 rounded-lg border border-slate-800 max-w-[140px] mx-auto",children:B.convolved.map((t,a)=>t.map((s,o)=>e.jsx("div",{className:"h-10 bg-indigo-950/80 border border-indigo-500/40 rounded flex items-center justify-center text-[11px] font-mono font-bold text-emerald-300",children:s.toFixed(2)},`${a}-${o}`)))}),e.jsxs("div",{className:"bg-slate-900 p-2 rounded border border-slate-800 text-[10px] font-mono text-cyan-300 truncate",children:["Flattened Vector x: [",B.flattened.map(t=>t.toFixed(2)).join(", "),"]"]}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"Ready for concatenation into multimodal feature design matrix."})]})]})]}),j==="jsonNormalize"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🏷️"})," Semi-Structured JSON Hierarchical Normalizer"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Simulate pandas.json_normalize() projective transformation from nested trees into 2D tables"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>ee(!k),className:l("px-4 py-2 rounded-xl text-xs font-bold transition shadow-md cursor-pointer",k?"bg-emerald-600 text-white shadow-emerald-600/30":"bg-indigo-600 text-white shadow-indigo-600/30"),children:k?"✔ Reset to Raw Hierarchical JSON":"⚡ Execute pd.json_normalize()"}),e.jsx("button",{onClick:()=>te(!N),className:l("px-3 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer",N?"bg-rose-500/20 text-rose-300 border-rose-500/40":"bg-slate-800 text-slate-400 border-slate-700"),title:"Simulate upstream API adding new keys or altering data types",children:N?"⚠️ Schema Drift Active":"Simulate Schema Drift"})]})]}),k?e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-mono text-cyan-400 font-bold uppercase",children:"Projected 2D Relational Columns (Ready for Model Training):"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left border-collapse font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-slate-900 text-indigo-300 border-b border-slate-800",children:[e.jsx("th",{className:"p-2.5",children:"patient_id"}),e.jsx("th",{className:"p-2.5",children:"full_name"}),e.jsx("th",{className:"p-2.5",children:"vitals_systolic_bp"}),e.jsx("th",{className:"p-2.5",children:"vitals_hr"}),e.jsx("th",{className:"p-2.5",children:"insurance_provider"}),e.jsx("th",{className:"p-2.5",children:"insurance_tier"}),e.jsx("th",{className:"p-2.5",children:"medications_count"}),N&&e.jsx("th",{className:"p-2.5 text-rose-400 bg-rose-500/10",children:"NEW_UNEXPECTED_FIELD"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 text-slate-300",children:e.jsxs("tr",{children:[e.jsx("td",{className:"p-2.5 text-white font-bold",children:"PT-7001"}),e.jsx("td",{className:"p-2.5",children:"Mamata Banerjee"}),e.jsx("td",{className:"p-2.5 text-emerald-400",children:"138"}),e.jsx("td",{className:"p-2.5 text-emerald-400",children:"78"}),e.jsx("td",{className:"p-2.5 text-cyan-300",children:"SwasthyaSathi"}),e.jsx("td",{className:"p-2.5 text-amber-300",children:"Gold"}),e.jsx("td",{className:"p-2.5 font-bold",children:"2"}),N&&e.jsx("td",{className:"p-2.5 text-rose-300 bg-rose-500/10 text-[10px]",children:"Emergency admission..."})]})})]})}),N&&e.jsxs("div",{className:"p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 flex items-start gap-2",children:[e.jsx("span",{children:"⚠️"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Warning: Schema Drift Detected!"})," The upstream JSON schema introduced unexpected keys that break fixed tabular input pipelines unless defensive Pydantic contracts or dynamic column filters are implemented."]})]})]}):e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto space-y-1",children:[e.jsx("span",{className:"text-slate-500",children:"// Raw Semi-Structured JSON Payload (Schema-on-Read):"}),e.jsx("pre",{className:"text-slate-300",children:JSON.stringify(N?{patient_id:"PT-7001",full_name:"Mamata Banerjee",vitals:{systolic_bp:138,hr:78,o2_saturation:98.5},insurance:{provider:"SwasthyaSathi",tier:"Gold",active:!0},medications:["Metformin","Amlodipine"],NEW_UNEXPECTED_FIELD:"Emergency admission without prior appointment",schema_drift_warning:"Type changed from integer to string in v2 API"}:{patient_id:"PT-7001",full_name:"Mamata Banerjee",vitals:{systolic_bp:138,hr:78},insurance:{provider:"SwasthyaSathi",tier:"Gold",active:!0},medications:["Metformin","Amlodipine"]},null,2)})]})]})]}),e.jsxs("section",{id:"theory",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"03"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Mathematical Foundations & Vector Space Theory"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Formal mathematical definitions, TF-IDF derivation, 2D convolution equations, and Multimodal Fusion matrices"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-cyan-400 uppercase",children:"1. Natural Language Vector Space Model (VSM)"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Given a document collection ",e.jsx("span",{className:"font-mono text-white",children:"D = {d₁, ..., d_N}"})," and vocabulary ",e.jsx("span",{className:"font-mono text-white",children:"V = {t₁, ..., t_M}"}),", each document ",e.jsx("span",{className:"font-mono text-white",children:"d"})," is projected into an M-dimensional geometric vector space:"]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs font-mono text-indigo-300",children:[e.jsx("div",{children:"TF(t, d) = count(t ∈ d) / ∑_(t' ∈ d) count(t' ∈ d)"}),e.jsx("div",{children:"IDF(t, D) = ln( (1 + |D|) / (1 + df(t)) ) + 1.0"}),e.jsx("div",{className:"text-emerald-400 font-bold",children:"x_(d, t) = TF(t, d) × IDF(t, D)"}),e.jsx("div",{className:"text-slate-400 text-[11px] pt-1 border-t border-slate-800",children:"L2 Normalization: x_norm = x / ||x||₂ where ||x||₂ = √(∑ x_i²)"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Penalizes pervasive corpus noise words while emphasizing rare, domain-specific clinical/financial markers."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-emerald-400 uppercase",children:"2. 2D Discrete Spatial Image Convolution"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["An unstructured digital image is a discrete 2D spatial intensity tensor ",e.jsx("span",{className:"font-mono text-white",children:"I ∈ [0, 255]^(H×W)"}),". Discrete spatial convolution with a kernel ",e.jsx("span",{className:"font-mono text-white",children:"K ∈ ℝ^(k_h × k_w)"})," extracts structural edge representations:"]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs font-mono text-cyan-300",children:[e.jsx("div",{children:"I_norm(i, j) = I_raw(i, j) / 255.0  (Scale to [0, 1])"}),e.jsx("div",{className:"text-emerald-400 font-bold",children:"S(i, j) = (I * K)(i, j) = ∑_m ∑_n I(i + m, j + n) K(m, n)"}),e.jsx("div",{className:"text-slate-400 text-[11px] pt-1 border-t border-slate-800",children:"Flattening to 1D: vec(S) ∈ ℝ^(out_H × out_W) preserves translation invariance."})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Filters extract localized spatial frequencies without causing the dimensional explosion of naive pixel flattening."})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-purple-400 uppercase",children:"3. The Multimodal Feature Fusion Matrix"}),e.jsx("span",{className:"text-xs font-mono px-2.5 py-0.5 rounded bg-purple-950 border border-purple-800 text-purple-300",children:"Design Matrix ℝ^(N × D)"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"In modern production architectures, disparate data modalities are vectorized independently, scaled, and horizontally fused into a unified design matrix before passing to estimators (e.g. CatBoost, XGBoost, Multi-Layer Perceptrons):"}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs sm:text-sm font-mono text-center space-y-2",children:[e.jsx("div",{className:"text-white font-bold",children:"X_fused = [ X_structured (d₁) ∥ X_semi_structured (d₂) ∥ X_text_tfidf (d₃) ∥ X_image_conv (d₄) ]"}),e.jsxs("div",{className:"text-slate-400 text-xs",children:["Where total dimensionality ",e.jsx("span",{className:"text-cyan-300 font-bold",children:"D = d₁ + d₂ + d₃ + d₄"})," and sample size ",e.jsx("span",{className:"text-cyan-300 font-bold",children:"N"})," is preserved across all patient rows."]})]})]})]}),e.jsxs("section",{id:"caseStudies",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold text-lg",children:"04"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Real-World Regional Industrial Case Studies"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Applied multimodal systems deployed across healthcare, banking, manufacturing, and commerce in West Bengal"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-indigo-400 uppercase",children:"Case 1 • Salt Lake Sector V FinTech Hub"}),e.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800",children:"FinTech & Fraud"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Multimodal Credit Underwriting & Fraud Detection"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Debangshu engineered a hybrid risk-scoring engine at an enterprise payment gateway in Sector V. The model combines ",e.jsx("strong",{children:"Structured"})," CIBIL bureau scores and repayment history (RDBMS tables) with ",e.jsx("strong",{children:"Semi-Structured"})," mobile payment JSON transaction clickstreams, and ",e.jsx("strong",{children:"Unstructured"})," customer dispute call recordings (Whisper ASR) to detect loan default risks with 94.2% precision."]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-emerald-400 uppercase",children:"Case 2 • Kolkata Medical College & SSKM Hospital"}),e.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800",children:"Healthcare AI"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Cardiovascular Emergency Triage System"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Mamata and Mahima implemented a clinical triage system across Kolkata hospitals. The system fuses ",e.jsx("strong",{children:"Structured"})," patient telemetry (blood pressure, fasting blood glucose, age) with ",e.jsx("strong",{children:"Unstructured"})," attending physician clinical progress notes (BioBERT embeddings) and ",e.jsx("strong",{children:"Unstructured"})," 2D DICOM chest X-ray scans (DenseNet-121) to prioritize acute myocardial infarction interventions."]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-purple-400 uppercase",children:"Case 3 • Howrah Railway Freight Logistics & Hooghly"}),e.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800",children:"Supply Chain IoT"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Predictive Locomotive Maintenance & Telematics"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Engineers at Howrah freight yards combined ",e.jsx("strong",{children:"Structured"})," vibration sensor time-series and diesel consumption logs with ",e.jsx("strong",{children:"Semi-Structured"})," JSON container manifest manifests, and ",e.jsx("strong",{children:"Unstructured"})," thermal infrared imaging of axle wheel bearings to forecast catastrophic mechanical failures 48 hours in advance."]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-rose-400 uppercase",children:"Case 4 • Barrackpore & North 24 Parganas Commerce"}),e.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800",children:"E-Commerce"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Customer Sentiment & Return Fraud Analytics"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Susmita and Abhronila analyzed retail returns across regional hubs. The engine pairs ",e.jsx("strong",{children:"Structured"})," order transaction IDs and return reason codes with ",e.jsx("strong",{children:"Unstructured"})," customer review text (TF-IDF sentiment vectors) and customer-submitted unboxing photos to detect fraudulent return requests automatically."]})]})]})]}),e.jsxs("section",{id:"diagnosticQuiz",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold text-lg",children:"05"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Diagnostic Self-Assessment Quiz"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Interactive scenario-based multiple-choice evaluation with instant feedback and mentor guidance"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4 flex-wrap gap-2",children:[e.jsxs("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:["Question ",z+1," of ",U.length,":"]}),e.jsx("div",{className:"flex gap-2",children:U.map((t,a)=>e.jsx("button",{onClick:()=>{ae(a),W(null),X(!1)},className:l("w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer",z===a?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"bg-slate-800 text-slate-400 hover:text-white"),children:t.id},t.id))})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("span",{className:"text-[11px] font-mono px-2.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 font-bold uppercase",children:S.scenario}),e.jsx("h3",{className:"text-base sm:text-lg font-bold text-white leading-snug",children:S.question})]}),e.jsx("div",{className:"space-y-2.5",children:S.options.map(t=>e.jsxs("button",{onClick:()=>oe(t.label),className:l("w-full p-4 rounded-xl text-left text-xs sm:text-sm border transition-all flex items-start gap-3 cursor-pointer",H===t.label?t.label===S.correct?"bg-emerald-950/40 border-emerald-500/80 text-emerald-200":"bg-rose-950/40 border-rose-500/80 text-rose-200":"bg-slate-950/80 hover:bg-slate-800/80 border-slate-800 text-slate-300"),children:[e.jsx("span",{className:"w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5",children:t.label}),e.jsx("span",{className:"leading-relaxed",children:t.text})]},t.label))}),ne&&e.jsxs("div",{className:l("p-5 rounded-xl border space-y-3 transition-all",G?"bg-emerald-950/30 border-emerald-500/40 text-emerald-200":"bg-rose-950/30 border-rose-500/40 text-rose-200"),children:[e.jsx("div",{className:"flex items-center gap-2 font-bold text-sm",children:e.jsx("span",{children:G?"✔ Correct!":"❌ Incorrect Answer"})}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:S.explanation}),e.jsxs("div",{className:"pt-2 border-t border-slate-800/80 text-xs text-amber-300/90 font-medium",children:[e.jsx("strong",{children:"Sukanta Hui Mentor Tip:"})," ",S.mentorTip]})]})]})]}),e.jsxs("section",{id:"bestPractices",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-400 font-bold text-lg",children:"06"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Engineering Pitfalls & Industry Best Practices"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Crucial production lessons from multimodal data engineering teams"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-rose-900/40 space-y-4 shadow-xl",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Critical Mistakes to Avoid"]}),e.jsxs("ul",{className:"space-y-3 text-xs sm:text-sm text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-white",children:"Dense Matrix Conversion on TF-IDF:"})," Calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"X.toarray()"})," on a 50,000-term vocabulary instantly exhausts RAM. Always maintain sparse CSR matrix format."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-white",children:"Unchecked Schema Drift:"})," Ingesting semi-structured JSON APIs without Pydantic contracts or missing-key handlers causes silent pipeline crashes."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-white",children:"Naive High-Res Image Flattening:"})," Unrolling a 1024×1024 image into 3.1 million 1D features destroys spatial topology and triggers severe overfitting."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-white",children:"TF-IDF Data Leakage:"})," Fitting the vectorizer on the full corpus before splitting into train/test sets leaks test frequencies and corrupts model validation."]})]})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-emerald-900/40 space-y-4 shadow-xl",children:[e.jsxs("h3",{className:"text-base font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"✔"})," Production Engineering Best Practices"]}),e.jsxs("ul",{className:"space-y-3 text-xs sm:text-sm text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-white",children:"Adopt S3/MinIO Object Lakehouses:"})," Store heavy unstructured binary files (DICOM, MP3, MP4) in object stores; store only lightweight URIs in relational SQL."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-white",children:"Use Parquet for Intermediate Features:"})," Replace slow, uncompressed row CSVs with columnar Apache Parquet for 5x compression and 20x faster reads."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-white",children:"Vector Database Indexing:"})," For unstructured text and image embeddings, use specialized vector databases (Milvus, Pinecone, ChromaDB) with HNSW graphs."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{className:"text-white",children:"Evaluate Late Fusion Early:"})," Before training a monolithic early fusion network, build domain baseline models (ResNet for vision, RoBERTa for text) and blend predictions."]})]})]})]})]})]}),e.jsxs("section",{id:"labSection",className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"07"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Executable Python Laboratory Simulation"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Complete standalone Python engine implementing Multimodal Feature Extraction (TF-IDF, 2D Convolution, JSON Normalization)"})]})]}),e.jsx(de,{fileModule:pe,title:"structured_and_unstructured_data_basic_idea_lab.py",highlightLines:[21,95,115,145,175,210]})]}),e.jsx("section",{id:"faqSection",className:"space-y-4",children:e.jsx(ce,{title:"Structured and Unstructured Data — 30 Comprehensive Assessment Questions & Solutions",questions:he})}),e.jsx("section",{id:"notesSection",className:"space-y-4",children:e.jsx(me,{content:xe,title:"Structured and Unstructured Data (Academic Revision Handbook)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 5 Comprehensive Study Notes",downloadFileName:"topic5_structured_unstructured_data_notes.txt"})}),e.jsx("section",{children:e.jsx(ue,{note:"Mastering the architectural distinction between Structured, Semi-Structured, and Unstructured data is the cornerstone of enterprise data science. Over 80% of real-world value lies locked in unstructured medical reports, audio calls, and visual scans. Remember: machine learning models cannot think in words or pixels—they only compute in vector spaces! Practice the TF-IDF mathematical formulas, study the 2D spatial convolution kernel calculations, and run the Python lab code to master multimodal feature fusion."})})]})};export{Ae as default};
