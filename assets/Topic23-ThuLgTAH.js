import{b as o,j as e,bh as n}from"./vendor-react-core-CaA1o1Cx.js";import{P as S}from"./PlainTextPrint-yt10TRX1.js";import{T}from"./TeacherSukantaHui-Ds9F9lLV.js";import{a4 as A,c3 as w,B as h,aq as d,a7 as m,aI as C,Z as I,H as R,S as x,D as f,n as v,f as M,g as L}from"./vendor-icons-ri6cs58t.js";const P=`================================================================================\r
CODER & ACCOTAX - BARRACKPORE, WEST BENGAL\r
DEPARTMENT OF COMPUTER APPLICATIONS / COMPUTER SCIENCE\r
COURSE: BCAC701B - INTRODUCTION TO MACHINE LEARNING (SEMESTER-VII)\r
AUTHOR: SUKANTA HUI\r
MODULE 001_001: INTRODUCTION TO MACHINE LEARNING\r
MASTER EXAMINATION-READY REVISION NOTES & DEFINITIONS HANDBOOK\r
================================================================================\r
\r
--------------------------------------------------------------------------------\r
TABLE OF CONTENTS\r
--------------------------------------------------------------------------------\r
1.  Foundational Definitions of Machine Learning\r
2.  Traditional Programming vs. Machine Learning Paradigm\r
3.  Why Machine Learning is Needed: Key Motivations\r
4.  The 4 Core Machine Learning Paradigms\r
5.  Supervised Learning: Concepts, Math & Loss Functions\r
6.  Unsupervised Learning: Concepts, Formulations & Methods\r
7.  Semi-Supervised Learning: Intuition, Axioms & Propagation\r
8.  Classification vs. Regression: Comparative Framework\r
9.  Clustering Overview: Taxonomy & Evaluation Metrics\r
10. Industrial Applications & Domain Case Studies\r
11. The 7-Stage End-to-End Machine Learning Pipeline\r
12. Data Matrix, Features, Labels & Target Representations\r
13. Train, Validation & Test Splitting Strategies\r
14. System Architectural Archetypes (Streaming, Batch, Edge)\r
15. Summary of Key Worked Numerical Examples (Topics 14-18)\r
16. Step-by-Step Computational Problem-Solving Protocols\r
17. High-Yield Viva Voce Short Questions & Model Answers\r
18. Vector Geometry, Norms & Similarity Formulations\r
19. Comprehensive Glossary of 50+ Examination Definitions\r
20. 10 Golden Rules & Best Practices for ML Examinations\r
\r
================================================================================\r
SECTION 1: FOUNDATIONAL DEFINITIONS OF MACHINE LEARNING\r
================================================================================\r
\r
1.1 ARTHUR SAMUEL'S DEFINITION (1959):\r
"Machine Learning is the subfield of Computer Science that gives computers the \r
ability to learn without being explicitly programmed."\r
- Core Focus: Automatic learning of behavioral patterns directly from empirical data.\r
\r
1.2 TOM MITCHELL'S FORMAL ENGINEERING DEFINITION (1997):\r
"A computer program is said to learn from experience E with respect to some class \r
of tasks T and performance measure P, if its performance at tasks in T, as \r
measured by P, improves with experience E."\r
- Formal Tuple: <T, P, E>\r
- Task (T): The operational objective (e.g., classifying emails as spam or ham).\r
- Performance Measure (P): The quantitative evaluation metric (e.g., accuracy, F1-score).\r
- Experience (E): The historical dataset of observed samples or environmental interactions.\r
\r
1.3 DATA-CENTRIC DEFINITION:\r
Machine Learning is an algorithmic framework that automatically estimates an \r
underlying unknown target function f: X -> Y by optimizing parameters w over a \r
finite empirical training sample D = {(x_i, y_i)}_{i=1}^N, minimizing expected \r
generalization error on unseen future distributions.\r
\r
================================================================================\r
SECTION 2: TRADITIONAL PROGRAMMING VS. MACHINE LEARNING\r
================================================================================\r
\r
2.1 PARADIGM COMPARISON:\r
+------------------------+-----------------------------------------------------+\r
| TRADITIONAL PROGRAM    | Input: [Data] + [Explicit Rules / Code] -> [Output] |\r
+------------------------+-----------------------------------------------------+\r
| MACHINE LEARNING       | Input: [Data] + [Output / Feedback]     -> [Rules]  |\r
+------------------------+-----------------------------------------------------+\r
\r
2.2 KEY ARCHITECTURAL DIFFERENCES:\r
1. Rule Construction:\r
   - Traditional: Manually designed by human domain experts using if-else logic.\r
   - Machine Learning: Automatically induced by optimization algorithms from patterns.\r
2. Adaptability:\r
   - Traditional: Static and rigid; requires manual source code modification for changes.\r
   - Machine Learning: Dynamic and adaptive; model automatically updates with fresh data.\r
3. Dimensionality Scalability:\r
   - Traditional: Fails exponentially in high-dimensional or perceptual spaces (pixels, audio).\r
   - Machine Learning: Scales effectively across thousands or millions of parameters.\r
4. Reasoning Paradigm:\r
   - Traditional: Deductive reasoning (General Rules -> Specific Instances).\r
   - Machine Learning: Inductive reasoning (Specific Data Samples -> General Rule).\r
\r
================================================================================\r
SECTION 3: WHY MACHINE LEARNING IS NEEDED\r
================================================================================\r
\r
3.1 CORE MOTIVATIONS & BOTTLENECKS OF RULE-BASED SYSTEMS:\r
1. High-Dimensional Perceptual Complexity:\r
   - A 28x28 grayscale image contains 784 dimensions (256^784 possible states). Handcrafting \r
     deterministic nested rules for handwritten digits is humanly intractable.\r
2. Dynamic Environment & Concept Drift:\r
   - Fraud patterns and user preferences evolve continuously over time. ML pipelines \r
     retrain automatically on streaming distributions without software code rewrites.\r
3. Implicit Human Expertise (Polanyi's Paradox):\r
   - "We know more than we can tell." Humans recognize faces or speech instantly but \r
     cannot articulate the exact mathematical rules required to write a deterministic parser.\r
4. Scale and Non-Linear Feature Interactions:\r
   - Complex interactions among hundreds of correlated variables cannot be captured by \r
     human intuition or hardcoded heuristics.\r
\r
================================================================================\r
SECTION 4: THE 4 CORE MACHINE LEARNING PARADIGMS\r
================================================================================\r
\r
4.1 SUPERVISED LEARNING:\r
- Definition: Learning a predictive mapping f(x; w) from labeled training pairs D = {(x_i, y_i)}.\r
- Supervision: Full ground-truth target y_i is provided for every sample.\r
- Output Categories:\r
  a) Classification: Discrete category prediction (y in {0, 1} or {C_1, ..., C_K}).\r
  b) Regression: Continuous quantity prediction (y in Real Numbers).\r
\r
4.2 UNSUPERVISED LEARNING:\r
- Definition: Discovering latent structures, clusters, probability distributions, or low-\r
  dimensional representations from unlabeled datasets D = {x_i}.\r
- Supervision: Zero target labels provided (y is absent).\r
- Major Sub-Tasks: Clustering, Dimensionality Reduction (PCA), Density Estimation, Anomaly Detection.\r
\r
4.3 SEMI-SUPERVISED LEARNING:\r
- Definition: Training on a hybrid dataset consisting of a small labeled subset D_L = {(x_i, y_i)} \r
  and a vastly larger unlabeled subset D_U = {x_j} where |D_U| >> |D_L|.\r
- Motivation: Acquiring ground-truth labels requires expensive human expert annotation, \r
  whereas unlabeled raw data is cheap and abundant.\r
\r
4.4 REINFORCEMENT LEARNING:\r
- Definition: An autonomous agent learns an optimal behavioral policy pi(a|s) through sequential \r
  trial-and-error interaction with a dynamic environment, maximizing cumulative scalar reward R.\r
- Formal Model: Markov Decision Process (MDP) tuple <S, A, P, R, gamma>.\r
- Supervision: Evaluative scalar feedback (Reward/Penalty), not prescriptive labels.\r
\r
================================================================================\r
SECTION 5: SUPERVISED LEARNING DEEP DIVE & LOSS FUNCTIONS\r
================================================================================\r
\r
5.1 EMPIRICAL RISK MINIMIZATION (ERM):\r
The optimal parameter vector w* minimizes the empirical loss over training set D plus \r
an optional regularization penalty:\r
   w* = argmin_w [ (1/N) * sum_{i=1}^N L(f(x_i; w), y_i) + lambda * Omega(w) ]\r
\r
5.2 CORE LOSS FUNCTIONS:\r
1. Mean Squared Error (MSE) - For Regression:\r
   MSE = (1/N) * sum_{i=1}^N (y_i - y_hat_i)^2\r
   - Penalizes larger errors quadratically; highly sensitive to extreme outliers.\r
\r
2. Mean Absolute Error (MAE) - For Robust Regression:\r
   MAE = (1/N) * sum_{i=1}^N |y_i - y_hat_i|\r
   - Linear penalty; robust against outlier corruptions.\r
\r
3. Binary Cross-Entropy Loss (BCE / Log Loss) - For Binary Classification:\r
   L_BCE = - (1/N) * sum_{i=1}^N [ y_i * ln(p_i) + (1 - y_i) * ln(1 - p_i) ]\r
   where p_i = sigma(w^T x_i + b) = 1 / (1 + exp(-z_i))\r
\r
4. Categorical Cross-Entropy Loss - For Multi-Class Classification:\r
   L_CCE = - (1/N) * sum_{i=1}^N sum_{k=1}^K y_{i,k} * ln(p_{i,k})\r
   where p_{i,k} = exp(z_{i,k}) / sum_{j=1}^K exp(z_{i,j})  (Softmax)\r
\r
================================================================================\r
SECTION 6: UNSUPERVISED LEARNING DEEP DIVE\r
================================================================================\r
\r
6.1 CLUSTERING (k-MEANS OBJECTIVE):\r
Minimizes Within-Cluster Sum of Squares (WCSS) / Inertia:\r
   J(C, mu) = sum_{k=1}^K sum_{x_i in C_k} || x_i - mu_k ||^2\r
   where mu_k is the centroid of cluster C_k.\r
\r
6.2 DIMENSIONALITY REDUCTION (PRINCIPAL COMPONENT ANALYSIS - PCA):\r
Finds orthogonal projection vectors (eigenvectors of covariance matrix Sigma) that maximize \r
variance retention while minimizing reconstruction error:\r
   Sigma = (1/N) * X_centered^T * X_centered\r
   Sigma * v_j = lambda_j * v_j\r
\r
6.3 ANOMALY DETECTION:\r
Estimates the joint probability density p(x). Samples with density below threshold tau \r
(p(x) < tau) are flagged as anomalies.\r
\r
================================================================================\r
SECTION 7: SEMI-SUPERVISED LEARNING & GEOMETRIC AXIOMS\r
================================================================================\r
\r
7.1 THREE CORE GEOMETRIC ASSUMPTIONS:\r
1. Smoothness Assumption:\r
   If two points x_1 and x_2 reside in a high-density region and are close in feature space, \r
   their corresponding outputs y_1 and y_2 must be identical or close.\r
2. Cluster Assumption:\r
   Data points tend to form discrete clusters; points belonging to the same cluster share the \r
   same class label.\r
3. Low-Density Separation Assumption:\r
   The optimal decision boundary must pass through low-density regions, avoiding cutting \r
   through dense clusters.\r
\r
7.2 LABEL PROPAGATION ALGORITHM:\r
Constructs a similarity graph W where edge weights W_{ij} = exp(-||x_i - x_j||^2 / (2 * sigma^2)). \r
Class probabilities propagate iteratively from labeled nodes to unlabeled neighbors along high-\r
density manifold paths.\r
\r
================================================================================\r
SECTION 8: CLASSIFICATION VS. REGRESSION COMPARISON\r
================================================================================\r
\r
+-------------------+-----------------------------------+-----------------------------------+\r
| DIMENSION         | CLASSIFICATION                    | REGRESSION                        |\r
+-------------------+-----------------------------------+-----------------------------------+\r
| Target Variable   | Qualitative / Categorical (Class) | Quantitative / Numerical (Real)   |\r
| Output Space      | Discrete set: {0, 1} or {C_1..C_K}| Continuous continuum: (-inf, +inf)|\r
| Core Goal         | Partition feature space via       | Fit a continuous response surface |\r
|                   | decision boundaries / hyperplanes | or manifold minimizing residuals  |\r
| Evaluation Metrics| Accuracy, Precision, Recall, F1,  | MSE, RMSE, MAE, R^2 Score,        |\r
|                   | ROC-AUC, Log Loss                 | Adjusted R^2                      |\r
| Primary Algorithms| Logistic Regression, SVM, Decision| Linear Regression, Ridge, Lasso,  |\r
|                   | Trees, Naive Bayes, Random Forest | SVR, Gradient Boosted Regressor   |\r
+-------------------+-----------------------------------+-----------------------------------+\r
\r
================================================================================\r
SECTION 9: CLUSTERING OVERVIEW & EVALUATION\r
================================================================================\r
\r
9.1 TAXONOMY OF CLUSTERING ALGORITHMS:\r
1. Centroid-Based: k-Means, k-Medoids (Assumes spherical, convex clusters).\r
2. Density-Based: DBSCAN, OPTICS (Discovers arbitrary shapes, isolates noise outliers).\r
3. Hierarchical: Agglomerative (Bottom-up), Divisive (Top-down) (Produces dendrogram).\r
4. Distribution-Based: Gaussian Mixture Models (GMM) with EM algorithm.\r
\r
9.2 CLUSTER EVALUATION METRIC - SILHOUETTE COEFFICIENT:\r
For a sample i:\r
   s(i) = (b(i) - a(i)) / max(a(i), b(i))\r
   where:\r
   - a(i) = Mean intra-cluster distance between sample i and all other points in same cluster.\r
   - b(i) = Mean nearest-cluster distance between sample i and points in closest neighboring cluster.\r
   Range: -1.0 (Severely misclustered) to +1.0 (Perfect separation). Values > 0.5 indicate solid structure.\r
\r
================================================================================\r
SECTION 10: INDUSTRIAL APPLICATIONS & DOMAIN CASE STUDIES\r
================================================================================\r
\r
1. FINTECH & BANKING:\r
   - UPI Real-time Fraud Detection (<50ms latency SLA, Extreme class imbalance ~0.01%).\r
   - Credit Risk Scoring (Regulatory explainability requirements).\r
2. HEALTHCARE & MEDICAL IMAGING:\r
   - X-Ray & MRI Tumor Segmentation (High-recall constraint: false negatives are fatal).\r
3. E-COMMERCE & RETAIL:\r
   - Two-Stage Recommendation Funnel (Candidate Retrieval ~1000 items -> High-precision Ranking Top-10).\r
4. AGRICULTURE & CLIMATE:\r
   - Crop Disease Detection via Mobile Vision & Satellite Yield Forecasting.\r
5. NATURAL LANGUAGE PROCESSING (NLP):\r
   - Bengali/Regional Language Sentiment Analysis, Spam Filtering, Translation.\r
\r
================================================================================\r
SECTION 11: THE 7-STAGE END-TO-END ML WORKFLOW\r
================================================================================\r
\r
1. PROBLEM FRAMING: Define business KPIs, formulate ML task type (T), metrics (P), constraints (SLA).\r
2. DATA COLLECTION & INGESTION: Query databases, logs, APIs, scrapers; ensure consent and privacy.\r
3. EXPLORATORY DATA ANALYSIS (EDA) & PREPROCESSING: Handle missing values, outliers, normalization.\r
4. FEATURE ENGINEERING: Extract domain signals, one-hot encoding, scaling, polynomial features.\r
5. MODEL TRAINING & HYPERPARAMETER TUNING: Fit algorithms, optimize hyperparameters via Grid/Random Search.\r
6. MODEL EVALUATION & VALIDATION: Out-of-sample evaluation on test set, confusion matrix, error analysis.\r
7. DEPLOYMENT & PRODUCTION MONITORING: Model registry, REST API serving, concept drift monitoring.\r
\r
* CRITICAL WARNING - DATA LEAKAGE:\r
  Occurs when information from the test/validation set inadvertently contaminates the training \r
  phase (e.g., computing global mean for imputation before train-test split). Always split first!\r
\r
================================================================================\r
SECTION 12: DATA MATRIX, FEATURES, LABELS & TARGET VARIABLES\r
================================================================================\r
\r
12.1 DESIGN MATRIX NOTATION:\r
   X in R^{N x d}  (N rows = observations/samples, d columns = input features)\r
   y in R^N        (N-dimensional ground-truth target vector)\r
\r
12.2 FEATURE DATA TYPES:\r
1. Numerical / Continuous: Measurements, age, salary, temperature (Scaled via MinMax/StandardScaler).\r
2. Numerical / Discrete: Count of items, visits, children (Integer values).\r
3. Categorical / Nominal: Unordered discrete states (e.g., Red, Blue, Green -> One-Hot Encoded).\r
4. Categorical / Ordinal: Ordered categories (e.g., Low < Medium < High -> Integer Label Encoded).\r
\r
================================================================================\r
SECTION 13: TRAIN, VALIDATION & TEST SET PARTITIONING\r
================================================================================\r
\r
13.1 THREE-WAY DATASET SPLIT:\r
1. Training Set (60% - 80%): Used directly by optimization algorithm to learn model weights (w, b).\r
2. Validation Set (10% - 20%): Used to tune hyperparameters, select model architectures, and detect overfitting.\r
3. Test Set (10% - 20%): Held-out gold standard; evaluated ONCE at the end to estimate true generalization error.\r
\r
13.2 K-FOLD CROSS-VALIDATION:\r
Partitions dataset into K equal folds. Iterates K times, using K-1 folds for training and 1 fold for \r
validation. Aggregates performance as mean +/- standard deviation.\r
- Stratified K-Fold: Ensures each fold preserves identical class distribution percentages as the full dataset.\r
\r
================================================================================\r
SECTION 14: SYSTEM ARCHITECTURAL ARCHETYPES\r
================================================================================\r
\r
1. BATCH PREDICTION (Offline Inference):\r
   - Computes predictions over millions of records periodically (e.g., overnight churn scores).\r
   - High throughput, low compute cost, non-real-time.\r
2. STREAMING / ONLINE INFERENCE (Real-Time Serving):\r
   - Ingests single request via REST/gRPC API; responds in <100ms (e.g., UPI fraud detection).\r
   - Low latency, high availability, continuous monitoring.\r
3. TWO-STAGE RETRIEVAL & RANKING FUNNEL:\r
   - Stage 1: Candidate Generation (Retrieves ~1,000 items from millions in <10ms via Approximate Nearest Neighbor).\r
   - Stage 2: Heavy Ranking (Scores top 1,000 items using deep model to produce top 10).\r
4. EDGE / EMBEDDED INFERENCE:\r
   - Runs on local device (smartphones, microcontrollers) without cloud dependencies.\r
   - Zero network latency, full data privacy, constrained memory footprint.\r
\r
================================================================================\r
SECTION 15: SUMMARY OF KEY WORKED EXAMPLES (TOPICS 14-18)\r
================================================================================\r
\r
15.1 EXAMPLE 1: STUDENT PASS/FAIL (BINARY LOGISTIC REGRESSION):\r
- Linear Combiner: z = w_1 * Hours + w_2 * Attendance + b\r
- Activation: p = 1 / (1 + exp(-z))\r
- Decision Rule: Predict Pass (1) if p >= 0.50, else Fail (0).\r
\r
15.2 EXAMPLE 2: HOUSE PRICE PREDICTION (MULTIPLE LINEAR REGRESSION):\r
- Hypothesis: y_hat = w_1 * Area + w_2 * Bedrooms + w_3 * Distance + b\r
- Optimization: Gradient Descent on MSE: w_j := w_j - alpha * (dL / dw_j)\r
- Goodness of Fit: R^2 = 1 - (SS_res / SS_tot)\r
\r
15.3 EXAMPLE 3: CUSTOMER CHURN PREDICTION (CLASSIFICATION METRICS):\r
- Confusion Matrix: TP, FP, TN, FN\r
- Accuracy = (TP + TN) / (TP + TN + FP + FN)\r
- Precision = TP / (TP + FP)  (Minimizes false alarms)\r
- Recall = TP / (TP + FN)     (Minimizes missed churners)\r
- F1-Score = 2 * (Precision * Recall) / (Precision + Recall)\r
\r
15.4 EXAMPLE 4: SPAM EMAIL CLASSIFICATION (NAIVE BAYES NLP):\r
- Bayes Theorem: P(Spam | Words) proportional to P(Spam) * prod P(w_j | Spam)\r
- Laplace Smoothing (+alpha): P(w_j | Spam) = (count(w_j, Spam) + 1) / (total_words_Spam + |V|)\r
- Log-Odds Computation: Prevents arithmetic underflow during floating-point multiplications.\r
\r
15.5 EXAMPLE 5: CUSTOMER SEGMENTATION (RFM & k-MEANS):\r
- RFM Metrics: Recency (days since last purchase), Frequency (total orders), Monetary (total spending).\r
- Clustering: Standardize RFM features -> Run k-Means -> Discover VIP, Loyal, and At-Risk customer personas.\r
\r
================================================================================\r
SECTION 16: STEP-BY-STEP COMPUTATIONAL PROBLEM-SOLVING PROTOCOLS\r
================================================================================\r
\r
PROTOCOL 1: EVALUATING CONFUSION MATRIX METRICS\r
Given: TP=80, FP=10, FN=20, TN=890\r
Step 1: Compute Total Samples N = 80 + 10 + 20 + 890 = 1000\r
Step 2: Accuracy = (80 + 890) / 1000 = 970 / 1000 = 97.0%\r
Step 3: Precision = 80 / (80 + 10) = 80 / 90 = 88.89%\r
Step 4: Recall = 80 / (80 + 20) = 80 / 100 = 80.0%\r
Step 5: F1-Score = 2 * (0.8889 * 0.80) / (0.8889 + 0.80) = 1.4222 / 1.6889 = 84.21%\r
\r
PROTOCOL 2: COMPUTING MEAN SQUARED ERROR (MSE)\r
Given Actuals y = [100, 150, 200] and Predictions y_hat = [110, 140, 220]\r
Step 1: Residuals e = y - y_hat = [-10, +10, -20]\r
Step 2: Squared Residuals e^2 = [100, 100, 400]\r
Step 3: Sum of Squares = 100 + 100 + 400 = 600\r
Step 4: MSE = 600 / 3 = 200.0\r
Step 5: RMSE = sqrt(200.0) = 14.14\r
\r
================================================================================\r
SECTION 17: HIGH-YIELD VIVA VOCE SHORT QUESTIONS & MODEL ANSWERS\r
================================================================================\r
\r
Q1: What is the Fundamental Difference Between Parameters and Hyperparameters?\r
Answer:\r
- Parameters: Internal variables learned automatically by optimization from data during training (e.g., weights w, bias b).\r
- Hyperparameters: External configuration settings set manually by the engineer before training (e.g., learning rate alpha, k in k-Means, regularization lambda).\r
\r
Q2: Why is Accuracy an Inadequate Metric for Imbalanced Datasets?\r
Answer:\r
In severe class imbalance (e.g., 99% legitimate, 1% fraud), a trivial model predicting "Legitimate" 100% of the time achieves 99% accuracy while catching 0% of fraud cases. Precision, Recall, F1-Score, and PR-AUC are required.\r
\r
Q3: What is the Difference Between Overfitting and Underfitting?\r
Answer:\r
- Underfitting (High Bias): Model is too simple to capture underlying patterns (poor train accuracy, poor test accuracy).\r
- Overfitting (High Variance): Model memorizes training noise and idiosyncrasies (perfect train accuracy, poor test accuracy).\r
\r
Q4: Explain Polanyi's Paradox in the Context of Machine Learning.\r
Answer:\r
Polanyi's Paradox states "We know more than we can tell." Humans possess tacit knowledge (face recognition, speech) that cannot be coded via deterministic rules. ML solves this by inducing rules directly from data.\r
\r
Q5: Why Do We Need a Validation Set in Addition to a Test Set?\r
Answer:\r
If we tune hyperparameters repeatedly using the test set, information leaks from the test set into model selection decisions ("data snooping"). The test set must remain completely unseen until final verification.\r
\r
================================================================================\r
SECTION 18: VECTOR GEOMETRY, NORMS & SIMILARITY FORMULATIONS\r
================================================================================\r
\r
18.1 VECTOR DOT PRODUCT:\r
   u . v = sum_{i=1}^d u_i * v_i = ||u|| * ||v|| * cos(theta)\r
- If u . v = 0, vectors are strictly orthogonal (perpendicular).\r
- If u . v > 0, vectors point in similar directions.\r
\r
18.2 VECTOR NORMS:\r
1. L2 Norm (Euclidean Distance / Magnitude):\r
   ||u||_2 = sqrt( sum_{i=1}^d u_i^2 )\r
2. L1 Norm (Manhattan Distance / Taxi-cab Norm):\r
   ||u||_1 = sum_{i=1}^d |u_i|\r
\r
18.3 COSINE SIMILARITY:\r
   CosineSimilarity(u, v) = (u . v) / ( ||u||_2 * ||v||_2 )\r
- Range: -1.0 (Opposite) to +1.0 (Identical direction).\r
- Invariant to vector magnitude; measures directional alignment (critical for NLP embeddings).\r
\r
================================================================================\r
SECTION 19: COMPREHENSIVE GLOSSARY OF 50+ EXAMINATION DEFINITIONS\r
================================================================================\r
\r
1. Accuracy: Fraction of total predictions that are correct: (TP+TN)/(Total).\r
2. Activation Function: Mathematical function applied to linear combination to introduce non-linearity.\r
3. Batch Gradient Descent: Optimization that computes gradients over entire training dataset at each step.\r
4. Bias (Statistical): Error introduced by approximating complex real-world phenomenon with simpler model.\r
5. Binary Cross-Entropy: Loss function quantifying divergence between predicted probabilities and true binary labels.\r
6. Categorical Variable: Qualitative feature taking discrete values representing categories.\r
7. Centroid: Geometric center (mean coordinates) of a cluster of data points.\r
8. Classification: Supervised learning task predicting discrete class labels.\r
9. Cluster: Group of data objects exhibiting high intra-group similarity and low inter-group similarity.\r
10. Clustering: Unsupervised process of grouping unlabeled data points based on geometric distance.\r
11. Confusion Matrix: Table displaying distribution of true vs. predicted classifications (TP, FP, TN, FN).\r
12. Concept Drift: Statistical degradation of model performance when real-world data distribution shifts over time.\r
13. Continuous Variable: Quantitative feature capable of taking any infinite real value within an interval.\r
14. Cosine Similarity: Metric measuring directional alignment between two vectors regardless of magnitude.\r
15. Cross-Validation: Statistical resampling technique partitioning data into K folds to validate generalization.\r
16. Data Leakage: Inadvertent inclusion of target or test set information during model training phase.\r
17. Decision Boundary: Surface/hyperplane in feature space separating different predicted classes.\r
18. Dimensionality Reduction: Process of transforming high-dimensional space into lower-dimensional representation.\r
19. Dot Product: Algebraic operation multiplying corresponding elements of two vectors and summing the products.\r
20. Early Stopping: Regularization technique halting training when validation loss stops improving.\r
21. Empirical Risk Minimization (ERM): Principle of optimizing parameters to minimize average loss over training set.\r
22. Epoch: One complete forward and backward pass through the entire training dataset.\r
23. Euclidean Distance: Straight-line distance between two points in Euclidean space: sqrt(sum(x_i - y_i)^2).\r
24. Explanatory Variable: Independent input feature used to predict or explain the target variable.\r
25. F1-Score: Harmonic mean of Precision and Recall: 2 * (P * R) / (P + R).\r
26. False Negative (FN): Positive instance incorrectly classified as negative.\r
27. False Positive (FP): Negative instance incorrectly classified as positive (False Alarm).\r
28. Feature: Individual measurable property or characteristic of an observed phenomenon.\r
29. Feature Engineering: Process of transforming raw data into informative input features for ML algorithms.\r
30. Feature Matrix (X): 2D array of size N x d containing input features for N observations.\r
31. Gradient Descent: First-order iterative optimization algorithm for finding local minimum of a loss function.\r
32. Ground Truth: Empirical, verified true label or value of an observation.\r
33. Hyperparameter: External configuration variable set by engineer before training begins.\r
34. Hypothesis Space: Set of all possible mathematical functions a learning algorithm can select from.\r
35. Inductive Bias: Set of assumptions an algorithm uses to predict outputs for unseen inputs.\r
36. k-Means: Iterative clustering algorithm partitioning N observations into k clusters via centroids.\r
37. L1 Regularization (Lasso): Adds sum of absolute weights to loss function; induces feature sparsity.\r
38. L2 Regularization (Ridge): Adds sum of squared weights to loss function; prevents extreme weights.\r
39. Label: True target value or class assignment associated with an observation in supervised learning.\r
40. Learning Rate (alpha): Hyperparameter controlling step size taken during gradient descent optimization.\r
41. Linear Regression: Supervised algorithm modeling relationship between continuous target and features linearly.\r
42. Logistic Regression: Supervised classification algorithm modeling probability using the sigmoid function.\r
43. Loss Function: Mathematical function measuring penalty for discrepancy between single prediction and true value.\r
44. Mean Absolute Error (MAE): Average of absolute differences between predictions and actuals.\r
45. Mean Squared Error (MSE): Average of squared differences between predictions and actuals.\r
46. One-Hot Encoding: Conversion of categorical variables into binary vectors of 0s and 1s.\r
47. Outlier: Data point that differs significantly from remaining observations in the dataset.\r
48. Overfitting: Condition where model learns training noise and fails to generalize to unseen data.\r
49. Parameter: Internal model variable learned automatically during training (e.g., weights, biases).\r
50. Precision: Proportion of positive identifications that were actually correct: TP / (TP + FP).\r
51. R-Squared (Coefficient of Determination): Proportion of variance in target variable predictable from features.\r
52. Recall (Sensitivity): Proportion of actual positives that were identified correctly: TP / (TP + FN).\r
53. Regression: Supervised task predicting continuous numerical outcomes.\r
54. Regularization: Technique introducing penalty terms to prevent overfitting and control model complexity.\r
55. Reinforcement Learning: Paradigm where agent learns actions via environmental rewards and penalties.\r
56. Residual: Difference between observed actual value and predicted value: e = y - y_hat.\r
57. Semi-Supervised Learning: Paradigm utilizing small labeled data with large unlabeled data.\r
58. Sigmoid Function: S-shaped activation function mapping real numbers to range (0, 1): 1 / (1 + exp(-z)).\r
59. Silhouette Coefficient: Metric measuring cluster cohesion and separation quality (-1 to +1).\r
60. Stratified Sampling: Splitting strategy maintaining identical class proportions across train/test splits.\r
61. Supervised Learning: Paradigm training models on labeled input-output pairs.\r
62. Target Variable: Output variable that the machine learning model aims to predict.\r
63. Test Set: Independent held-out dataset used exclusively to estimate final model generalization.\r
64. Training Set: Dataset used by the algorithm to fit model parameters.\r
65. True Negative (TN): Negative instance correctly classified as negative.\r
66. True Positive (TP): Positive instance correctly classified as positive.\r
67. Underfitting: Condition where model is too simple to capture underlying patterns in data.\r
68. Unsupervised Learning: Paradigm discovering hidden structures from unlabeled data.\r
69. Validation Set: Dataset used to tune hyperparameters and evaluate model selection.\r
70. Vector: Geometric object possessing both magnitude and direction, represented as ordered array of numbers.\r
\r
================================================================================\r
SECTION 20: 10 GOLDEN RULES & BEST PRACTICES FOR ML EXAMINATIONS\r
================================================================================\r
\r
1. ALWAYS STATE THE TOM MITCHELL FORMAL TUPLE <T, P, E> WHEN DEFINING ML.\r
2. DISTINGUISH EXPLICITLY BETWEEN PARAMETERS (LEARNED) AND HYPERPARAMETERS (TUNED).\r
3. NEVER CONFUSE REGRESSION (CONTINUOUS) WITH CLASSIFICATION (CATEGORICAL).\r
4. EMPHASIZE THE DANGER OF DATA LEAKAGE: ALWAYS SPLIT BEFORE NORMALIZATION/IMPUTATION.\r
5. REMEMBER: ACCURACY FAILS ON IMBALANCED DATA; CITE PRECISION, RECALL, AND F1-SCORE.\r
6. CLARIFY WHY TEST SETS MUST NEVER BE USED FOR HYPERPARAMETER TUNING.\r
7. WRITE EQUATIONS WITH CLEAR INDEX DEFINITIONS (sum from i=1 to N).\r
8. IN CLUSTERING, HIGHLIGHT THAT UNSUPERVISED METHODS DO NOT USE LABELS.\r
9. IN VIVA VOCE, USE CONCRETE REAL-WORLD EXAMPLES (UPI FRAUD, CANCER DETECTION).\r
10. KEEP UNITS AND DIMENSIONS IN MIND WHEN EXPLAINING VECTORS AND LOSS METRICS.\r
\r
================================================================================\r
END OF EXAMINATION NOTE - MODULE 001_001 (BCAC701B)\r
CODER & ACCOTAX, BARRACKPORE - AUTHOR: SUKANTA HUI\r
================================================================================\r
`,O=[{id:1,question:"State Tom Mitchell's formal engineering definition of Machine Learning and explain the significance of the tuple <T, P, E>.",shortAnswer:"A program learns from Experience E with respect to Task T and Performance P if its performance at T, measured by P, improves with E.",explanation:"Mitchell (1997) formalizes ML as an engineering discipline. T is the operational objective (e.g. classification), P is the quantitative objective metric (e.g. F1-score or RMSE), and E is historical sample data or environment interaction.",hint:"Think about Task, Performance Measure, and Experience.",level:"Basic",codeExample:`# Mitchell Tuple Representation
# T = Email classification (Spam/Ham)
# P = Precision and Recall on validation fold
# E = 50,000 historical labeled emails`},{id:2,question:"How does the inductive reasoning in Machine Learning fundamentally differ from deductive reasoning in Traditional Programming?",shortAnswer:"Traditional programming uses deductive logic (General Rules + Data -> Answers), while ML uses inductive learning (Data + Answers -> Generalized Rules).",explanation:"Traditional systems rely on human experts anticipating all edge cases into deterministic if-else rules. ML algorithms generalize from empirical observations to approximate the underlying generator function.",hint:"Deductive goes from rules to outcomes; Inductive goes from data observations to general models.",level:"Basic",codeExample:`# Traditional: output = rule(input)
# Machine Learning: rule = fit(inputs, outputs)`},{id:3,question:"Why does the curse of dimensionality make rule-based programming fail for computer vision tasks like handwritten digit recognition?",shortAnswer:"A 28x28 grayscale image has 784 dimensions, yielding 256^784 possible pixel states, making manual exhaustive rule drafting mathematically intractable.",explanation:"Due to combinatorial explosion and immense visual variance (slant, stroke width, rotations), humans cannot hardcode deterministic conditional rules for every pixel configuration.",hint:"Calculate 28 x 28 = 784 dimensions and consider pixel brightness permutations.",level:"Intermediate",codeExample:`input_dim = 28 * 28  # 784 features
# Combinatorial states: 256**784`},{id:4,question:"Compare Supervised Learning, Unsupervised Learning, Semi-Supervised Learning, and Reinforcement Learning across input data and feedback signals.",shortAnswer:"Supervised: (X, y) with explicit ground truth; Unsupervised: X with no labels; Semi-Supervised: small (X_L, y_L) + vast X_U; RL: Agent in environment receiving scalar rewards R.",explanation:"The 4 paradigms differ by the nature of supervision available during optimization: prescriptive labels (Supervised), latent geometric structures (Unsupervised), manifold propagation (Semi-Supervised), or evaluative rewards (Reinforcement).",hint:"Supervised has y; Unsupervised has no y; Semi-supervised has partial y; RL has rewards.",level:"Intermediate",codeExample:`# Supervised: fit(X, y)
# Unsupervised: fit(X)
# Semi-Supervised: fit(X_labeled, y_labeled, X_unlabeled)
# RL: step(action) -> next_state, reward, done`},{id:5,question:"Write the mathematical formula for Mean Squared Error (MSE) and explain why it is sensitive to extreme outliers.",shortAnswer:"MSE = (1/N) * sum_{i=1}^N (y_i - y_hat_i)^2. The quadratic squaring term disproportionately penalizes large residuals.",explanation:"Because the error difference is squared, an outlier with a residual of 10 adds 100 to the loss, whereas a residual of 2 adds only 4. This pulls the regression hyperplane aggressively toward rogue points.",hint:"Look at the power of 2 in (y - y_hat)^2.",level:"Intermediate",codeExample:`import numpy as np
mse = np.mean((y_true - y_pred) ** 2)`},{id:6,question:"Why is Binary Cross-Entropy preferred over MSE when training Logistic Regression binary classifiers?",shortAnswer:"MSE combined with Sigmoid results in a non-convex loss surface with multiple bad local minima, whereas Binary Cross-Entropy is strictly convex.",explanation:"Binary Cross-Entropy (L_BCE = -[y*ln(p) + (1-y)*ln(1-p)]) guarantees a unique global minimum when paired with logistic sigmoid activations, ensuring fast and robust gradient descent convergence without gradient vanishing near extreme probabilities.",hint:"Think about convexity and gradient vanishing of sigmoid with MSE.",level:"Expert",codeExample:`# Binary Cross-Entropy Loss
loss = -np.mean(y * np.log(p) + (1 - y) * np.log(1 - p))`},{id:7,question:"State the 3 core geometric assumptions of Semi-Supervised Learning.",shortAnswer:"1. Smoothness Assumption, 2. Cluster Assumption, 3. Low-Density Separation Assumption.",explanation:"1. Smoothness: nearby points in high density have identical labels. 2. Cluster: points within the same cluster share classes. 3. Low-Density: decision boundaries must pass through sparse, low-density regions.",hint:"Smoothness, Cluster, and Low-Density separation.",level:"Expert",codeExample:`# Semi-Supervised Label Propagation Graph Weight
W_ij = np.exp(-np.linalg.norm(x_i - x_j)**2 / (2 * sigma**2))`},{id:8,question:"What is the Silhouette Coefficient in Clustering, and how are its score ranges (-1.0 to +1.0) interpreted?",shortAnswer:"s(i) = (b(i) - a(i)) / max(a(i), b(i)). +1 means dense and well-separated, 0 means overlapping border, -1 means assigned to wrong cluster.",explanation:"a(i) is the mean intra-cluster distance to points in the same cluster; b(i) is the mean nearest-cluster distance. High values (>0.5) confirm strong, well-isolated cluster quality.",hint:"b is distance to closest other cluster, a is internal cluster distance.",level:"Intermediate",codeExample:`from sklearn.metrics import silhouette_score
score = silhouette_score(X, cluster_labels)`},{id:9,question:"Define Data Leakage in a Machine Learning workflow and give a concrete real-world example.",shortAnswer:"Data leakage occurs when information from outside the training dataset (such as test or validation data) is accidentally used to fit the model.",explanation:"Example: calculating the global mean of a feature across the entire dataset to impute missing values before splitting into train/test sets. The model indirectly learns test distribution parameters, artificially inflating test scores while failing in production.",hint:"Think about feature scaling or target encoding performed before dataset splitting.",level:"Intermediate",codeExample:`# WRONG (Leakage):
# scaler.fit(X_all); X_train, X_test = split(X_all)
# CORRECT:
# X_train, X_test = split(X_raw); scaler.fit(X_train)`},{id:10,question:"Define Dot Product, L2 Norm, and Cosine Similarity between two d-dimensional vectors u and v.",shortAnswer:"Dot product: u.v = sum(u_i*v_i); L2 norm: ||u|| = sqrt(sum(u_i^2)); Cosine Similarity: (u.v)/(||u||*||v||).",explanation:"Dot product combines magnitudes and directional alignment. L2 norm calculates Euclidean length. Cosine similarity measures angular orientation between -1.0 and +1.0 regardless of magnitude, making it essential for NLP and vector embeddings.",hint:"Cosine similarity divides dot product by the product of both L2 magnitudes.",level:"Basic",codeExample:`dot_prod = np.dot(u, v)
cos_sim = dot_prod / (np.linalg.norm(u) * np.linalg.norm(v))`}],E=[{id:"def-1",term:"Machine Learning (Arthur Samuel)",category:"Foundations & Paradigms",examSignificance:"High - Must quote verbatim in Section A/B",definition:"The subfield of Computer Science that gives computers the ability to learn without being explicitly programmed (Arthur Samuel, 1959).",math:"Deductive if-else -> Inductive empirical generalization",vivaTip:"Mention that Samuel demonstrated this through his self-learning Checkers program at IBM."},{id:"def-2",term:"Machine Learning Formal Tuple (Tom Mitchell)",category:"Foundations & Paradigms",examSignificance:"Critical - Core 5-mark university question",definition:"A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E (Tom Mitchell, 1997).",math:"<T, P, E>",vivaTip:"Always give a concrete tuple: T = Spam email classification, P = F1-score / Accuracy, E = 50,000 labeled emails."},{id:"def-3",term:"Supervised Learning",category:"Foundations & Paradigms",examSignificance:"High - Fundamental distinction",definition:"A machine learning paradigm where the algorithm is provided with a training dataset of input features paired with verified ground-truth labels {(x_i, y_i)} to learn a predictive mapping function f(x).",math:"f : \\mathcal{X} \\rightarrow \\mathcal{Y}, \\quad y_i \\in \\mathbb{R} \\text{ or } y_i \\in \\{C_1, \\dots, C_K\\}",vivaTip:"Remember: It splits into Regression (continuous target) and Classification (discrete category)."},{id:"def-4",term:"Unsupervised Learning",category:"Foundations & Paradigms",examSignificance:"High - Key Viva Topic",definition:"A paradigm where the algorithm discovers latent geometric structures, natural clusters, probability densities, or low-dimensional manifolds from unlabeled data points {x_i} without ground-truth supervisory signals.",math:"\\min_{C, \\mu} \\sum_{k=1}^K \\sum_{x_i \\in C_k} \\|x_i - \\mu_k\\|^2",vivaTip:"Never say 'labels are hidden'. Emphasize that ground truth labels are completely absent."},{id:"def-5",term:"Semi-Supervised Learning",category:"Foundations & Paradigms",examSignificance:"Medium - Modern Industry Standard",definition:"A learning paradigm combining a small set of expensive labeled data D_L with a vastly larger corpus of inexpensive unlabeled data D_U to construct superior decision boundaries by exploiting data manifold geometry.",math:"|D_U| \\gg |D_L|, \\quad W_{ij} = \\exp(-\\|x_i - x_j\\|^2 / 2\\sigma^2)",vivaTip:"State the 3 core axioms: 1. Smoothness, 2. Cluster Assumption, 3. Low-Density Separation."},{id:"def-6",term:"Reinforcement Learning",category:"Foundations & Paradigms",examSignificance:"High - Emerging BCA/MCA favorite",definition:"A goal-directed computational framework where an autonomous agent learns an optimal behavioral policy \\pi(a|s) through sequential trial-and-error environmental interactions to maximize cumulative scalar reward.",math:"\\text{MDP} = \\langle S, A, P, R, \\gamma \\rangle, \\quad G_t = \\sum_{k=0}^\\infty \\gamma^k R_{t+k+1}",vivaTip:"Distinguish evaluative feedback (scalar reward/penalty) from prescriptive feedback (correct answer label)."},{id:"def-7",term:"Empirical Risk Minimization (ERM)",category:"Math & Optimization",examSignificance:"High - Theoretical Core",definition:"The statistical learning principle where model parameters w* are chosen to minimize the average loss (empirical risk) computed over the observed training dataset.",math:"w^* = \\arg\\min_w \\left[ \\frac{1}{N} \\sum_{i=1}^N L(f(x_i; w), y_i) + \\lambda \\Omega(w) \\right]",vivaTip:"Mention that ERM without regularization \\Omega(w) can lead directly to overfitting on small datasets."},{id:"def-8",term:"Mean Squared Error (MSE)",category:"Math & Optimization",examSignificance:"Critical - Standard calculation question",definition:"A regression loss function calculating the arithmetic mean of the squared differences between actual ground-truth values and model predictions.",math:"\\text{MSE} = \\frac{1}{N} \\sum_{i=1}^N (y_i - \\hat{y}_i)^2",vivaTip:"Explain why MSE penalizes large errors quadratically and is therefore sensitive to outliers."},{id:"def-9",term:"Binary Cross-Entropy Loss (Log Loss)",category:"Math & Optimization",examSignificance:"Critical - Logistic Regression derivation",definition:"The standard loss function for binary classification that quantifies the divergence between true binary labels and predicted probabilities.",math:"L_{\\text{BCE}} = -\\frac{1}{N} \\sum_{i=1}^N \\left[ y_i \\ln(p_i) + (1 - y_i) \\ln(1 - p_i) \\right]",vivaTip:"Explain why MSE is non-convex for Logistic Regression, while BCE is strictly convex with a global minimum."},{id:"def-10",term:"Logistic Sigmoid Function",category:"Math & Optimization",examSignificance:"High - Standard viva activation question",definition:"An S-shaped mathematical activation function that maps any real-valued linear score z \\in (-\\infty, +\\infty) monotonically into a valid probability p \\in (0, 1).",math:"\\sigma(z) = \\frac{1}{1 + e^{-z}}, \\quad \\sigma'(z) = \\sigma(z)(1 - \\sigma(z))",vivaTip:"Derivative property \\sigma'(z) = \\sigma(z)(1-\\sigma(z)) makes backpropagation very computationally efficient."},{id:"def-11",term:"Feature Matrix (Design Matrix X)",category:"Math & Vectors",examSignificance:"High - Linear Algebra Representation",definition:"A structured 2-dimensional mathematical matrix of shape N x d where each row i represents an individual sample/observation vector and each column j represents an input feature.",math:"X \\in \\mathbb{R}^{N \\times d}, \\quad x_i = [x_{i1}, x_{i2}, \\dots, x_{id}]^T",vivaTip:"Remember: N = number of samples (rows), d = number of features/dimensions (columns)."},{id:"def-12",term:"Vector Dot Product & Cosine Similarity",category:"Math & Vectors",examSignificance:"High - Core geometric concept",definition:"The algebraic sum of component-wise products of two vectors, representing their directional alignment scaled by magnitudes. Cosine similarity normalizes the dot product by Euclidean norms.",math:"u \\cdot v = \\sum u_i v_i = \\|u\\| \\|v\\| \\cos(\\theta), \\quad \\text{CosSim}(u,v) = \\frac{u \\cdot v}{\\|u\\|_2 \\|v\\|_2}",vivaTip:"Cosine similarity is independent of vector magnitude, making it the industry standard for text/embedding comparisons."},{id:"def-13",term:"Data Leakage",category:"Pipeline & Engineering",examSignificance:"Critical - Top Viva & Interview Trap",definition:"A catastrophic methodological error where information from outside the training dataset (such as test features or target values) contaminates the model training process, artificially inflating evaluation scores.",math:"\\text{Leakage: } \\text{fit}(X_{\\text{all}}) \\rightarrow \\text{split}(X) \\quad \\text{vs. Correct: } \\text{split}(X) \\rightarrow \\text{fit}(X_{\\text{train}})",vivaTip:"Always state the golden rule: Split your dataset into train/test BEFORE calculating means, scalers, or imputations."},{id:"def-14",term:"Confusion Matrix & F1-Score",category:"Evaluation & Metrics",examSignificance:"Critical - Mandatory numerical in every exam",definition:"A contingency table tabulating True Positives (TP), False Positives (FP), True Negatives (TN), and False Negatives (FN). The F1-Score is the harmonic mean of Precision and Recall.",math:"\\text{Precision} = \\frac{TP}{TP+FP}, \\quad \\text{Recall} = \\frac{TP}{TP+FN}, \\quad F_1 = \\frac{2 \\cdot P \\cdot R}{P + R}",vivaTip:"Explain why harmonic mean is used instead of arithmetic mean (it penalizes severe imbalance between Precision and Recall)."},{id:"def-15",term:"Stratified K-Fold Cross-Validation",category:"Evaluation & Metrics",examSignificance:"High - Model Selection",definition:"A statistical resampling technique that partitions data into K equal folds while ensuring every single fold preserves the exact class percentage distribution of the overall dataset.",math:"P(y = c \\mid \\text{Fold}_k) \\approx P(y = c \\mid D) \\quad \\forall k \\in \\{1, \\dots, K\\}",vivaTip:"Crucial for imbalanced datasets (e.g. 1% fraud) to prevent folds with zero positive instances."},{id:"def-16",term:"Silhouette Coefficient",category:"Evaluation & Metrics",examSignificance:"High - Unsupervised Evaluation",definition:"A cluster validation metric measuring how well-separated and tightly cohesive clusters are, calculated per sample and averaged across the dataset.",math:"s(i) = \\frac{b(i) - a(i)}{\\max(a(i), b(i))}, \\quad s \\in [-1.0, +1.0]",vivaTip:"a(i) = mean intra-cluster distance; b(i) = mean nearest other cluster distance. Score > 0.5 indicates solid clustering."},{id:"def-17",term:"Parameters vs. Hyperparameters",category:"Pipeline & Engineering",examSignificance:"Critical - 2-mark distinction in almost all papers",definition:"Parameters (weights w, bias b) are learned automatically from training data via optimization. Hyperparameters (learning rate \\alpha, cluster count k, regularization \\lambda) are set manually by the engineer before training.",math:"w \\leftarrow w - \\alpha \\nabla_w L \\quad (w = \\text{param}, \\alpha = \\text{hyperparam})",vivaTip:"Use this simple memory trick: Parameters are 'Data-Learned', Hyperparameters are 'Human-Tuned'."},{id:"def-18",term:"Polanyi's Paradox",category:"Foundations & Paradigms",examSignificance:"Medium - Conceptual Philosophy",definition:"The philosophical and cognitive observation that 'we know more than we can tell'—humans perform complex perceptual tasks (recognizing faces, understanding tone) without conscious awareness of the explicit mathematical rules.",math:"\\text{Tacit Knowledge } \\gg \\text{Articulable Rules}",vivaTip:"Cite this to justify why machine learning is indispensable for computer vision and speech recognition."}],D=["All","Foundations & Paradigms","Math & Optimization","Math & Vectors","Evaluation & Metrics","Pipeline & Engineering"],_=[{num:1,title:"Always Quote the Tom Mitchell <T, P, E> Formal Tuple",desc:"When asked to define Machine Learning, provide Arthur Samuel's intuitive definition first, then immediately write Mitchell's formal definition with a labeled example tuple (Task T, Performance P, Experience E)."},{num:2,title:"Clearly Distinguish Regression vs. Classification",desc:"State unequivocally: Regression predicts a continuous quantitative real number (e.g. house price in Lakhs), whereas Classification predicts a discrete qualitative category (e.g. Pass/Fail, Spam/Ham)."},{num:3,title:"Highlight the Danger of Data Leakage",desc:"In any workflow or preprocessing question, explicitly mention that feature scaling, mean imputation, and encoding must be fitted ONLY on the training split, never on the full dataset before splitting."},{num:4,title:"Explain Why Accuracy Fails on Imbalanced Data",desc:"Always give the 99% fraud example: In a dataset with 990 legitimate and 10 fraud transactions, a naive model predicting 'Legitimate' 100% of the time scores 99% accuracy while failing 100% of fraud detection."},{num:5,title:"Define Parameters vs. Hyperparameters Explicitly",desc:"Parameters are learned automatically by the optimizer (weights, biases). Hyperparameters are configured externally prior to fitting (learning rate, k in k-Means, tree depth)."},{num:6,title:"Write Index Summations Explicitly",desc:"Always specify the limits on sigma notations: \\sum_{i=1}^N instead of a naked \\sum to demonstrate mathematical rigor to the university examiner."},{num:7,title:"State the 3 Semi-Supervised Geometric Axioms",desc:"Memorize the trifecta: 1. Smoothness Assumption, 2. Cluster Assumption, 3. Low-Density Separation Assumption."},{num:8,title:"Detail the 3-Way Dataset Split Rationale",desc:"Explain why a validation set is needed in addition to a test set: Hyperparameter tuning on test data causes data snooping and model overfitting. The test set must be evaluated only ONCE."},{num:9,title:"Provide Real-World Concrete Examples",desc:"Anchor your theoretical answers to concrete applications: UPI fraud detection (<50ms SLA), chest X-ray pneumonia classification (high recall requirement), and telecom subscriber churn."},{num:10,title:"Master Vector Dot Products & Cosine Similarity",desc:"Know the difference: Dot product is magnitude-dependent, while Cosine Similarity is purely directional (normalized by L2 norms) and bounded in [-1.0, +1.0]."}],j=[{concept:"Linear Model Hypothesis",formula:"\\hat{y} = w^T x + b = \\sum_{j=1}^d w_j x_j + b",application:"Linear & Logistic Regression base linear combiner"},{concept:"Mean Squared Error (MSE)",formula:"\\text{MSE} = \\frac{1}{N} \\sum_{i=1}^N (y_i - \\hat{y}_i)^2",application:"Continuous regression loss minimization"},{concept:"Binary Cross-Entropy (Log Loss)",formula:"L = -\\frac{1}{N} \\sum_{i=1}^N [y_i \\ln p_i + (1-y_i) \\ln(1-p_i)]",application:"Binary classification loss with convex gradient"},{concept:"Logistic Sigmoid Activation",formula:"\\sigma(z) = \\frac{1}{1 + e^{-z}}",application:"Maps linear score to probability in (0, 1)"},{concept:"Precision & Recall",formula:"P = \\frac{TP}{TP+FP}, \\quad R = \\frac{TP}{TP+FN}",application:"Classification evaluation under imbalanced distributions"},{concept:"F1-Score (Harmonic Mean)",formula:"F_1 = 2 \\cdot \\frac{P \\cdot R}{P + R} = \\frac{2 TP}{2 TP + FP + FN}",application:"Balanced evaluation metric for classification"},{concept:"Vector L2 Norm (Euclidean)",formula:"\\|u\\|_2 = \\sqrt{\\sum_{j=1}^d u_j^2}",application:"Vector magnitude and Euclidean distance calculation"},{concept:"Cosine Similarity",formula:"\\text{CosSim}(u, v) = \\frac{u \\cdot v}{\\|u\\|_2 \\|v\\|_2}",application:"Directional alignment of text/image vector embeddings"},{concept:"k-Means WCSS Objective",formula:"J = \\sum_{k=1}^K \\sum_{x_i \\in C_k} \\|x_i - \\mu_k\\|^2",application:"Centroid-based clustering inertia minimization"},{concept:"Silhouette Coefficient",formula:"s(i) = \\frac{b(i) - a(i)}{\\max(a(i), b(i))}",application:"Cluster cohesion vs. separation quality measurement"}];function H(){const[l,u]=o.useState("All"),[t,p]=o.useState(""),[b,g]=o.useState(null),[a,r]=o.useState("definitions"),c=o.useMemo(()=>E.filter(i=>{const s=l==="All"||i.category===l,N=i.term.toLowerCase().includes(t.toLowerCase())||i.definition.toLowerCase().includes(t.toLowerCase())||i.category.toLowerCase().includes(t.toLowerCase())||i.vivaTip.toLowerCase().includes(t.toLowerCase());return s&&N}),[l,t]),y=i=>{const s=`${i.term}
Category: ${i.category}
Definition: ${i.definition}
Formula: ${i.math}
Viva Key Tip: ${i.vivaTip}`;navigator.clipboard.writeText(s),g(i.id),setTimeout(()=>g(null),2e3)};return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-6 md:p-10 font-sans selection:bg-indigo-500/30 selection:text-indigo-200",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[e.jsxs("header",{className:"text-center space-y-4 pt-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/50 text-indigo-300 text-xs font-semibold uppercase tracking-wider shadow-lg shadow-indigo-950/40",children:[e.jsx(A,{className:"w-4 h-4 text-indigo-400"}),e.jsx("span",{children:"BCAC701B · Module 001 · Examination Special Topic"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Comprehensive Examination Ready Note & Complete Definitions Handbook"}),e.jsx("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed",children:"Downloadable, printable, and search-indexed revision handbook covering the foundational concepts, definitions, mathematical formulations, and viva voce points across all 22 topics of this module."}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-medium text-slate-400",children:[e.jsxs("span",{className:"px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-emerald-400 flex items-center gap-1.5",children:[e.jsx(w,{className:"w-3.5 h-3.5"})," 100% Syllabus Aligned"]}),e.jsxs("span",{className:"px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-cyan-400 flex items-center gap-1.5",children:[e.jsx(h,{className:"w-3.5 h-3.5"})," 50+ Formal Definitions"]}),e.jsxs("span",{className:"px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-indigo-400 flex items-center gap-1.5",children:[e.jsx(d,{className:"w-3.5 h-3.5"})," Complete Formula Suite"]}),e.jsxs("span",{className:"px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-amber-400 flex items-center gap-1.5",children:[e.jsx(m,{className:"w-3.5 h-3.5"})," Downloadable Plain-Text Note"]})]})]}),e.jsxs("section",{className:"bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900/90 border border-indigo-500/30 rounded-2xl p-5 sm:p-7 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute -top-12 -right-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-2xl shrink-0 shadow-inner",children:"👨‍🏫"}),e.jsxs("div",{className:"space-y-3 flex-1",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("h2",{className:"text-lg sm:text-xl font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"Teacher Sukanta Hui's Examination & Viva Strategy Guide"})}),e.jsx("span",{className:"text-xs px-2.5 py-1 rounded bg-indigo-900/60 border border-indigo-700/50 text-indigo-300 font-mono",children:"Coder & AccoTax · Barrackpore"})]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Dear Students, in university examinations (BCA / B.Tech / MCA) as well as technical job interviews, examiners look for three hallmarks of excellence: ",e.jsx("strong",{className:"text-indigo-300",children:"Exact Formal Definitions"}),", ",e.jsx("strong",{className:"text-cyan-300",children:"Mathematical Notation Rigor"}),", and ",e.jsx("strong",{className:"text-emerald-300",children:"Real-World Case Grounding"}),"."]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs",children:[e.jsxs("div",{className:"bg-slate-950/70 p-3 rounded-xl border border-slate-800 space-y-1",children:[e.jsxs("div",{className:"font-bold text-indigo-400 flex items-center gap-1",children:[e.jsx(C,{className:"w-3.5 h-3.5"})," 1. Definitions"]}),e.jsxs("p",{className:"text-slate-400",children:["Always write Tom Mitchell's ",e.jsx("code",{className:"text-indigo-300",children:"<T, P, E>"})," tuple along with Arthur Samuel's classic 1959 statement."]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-3 rounded-xl border border-slate-800 space-y-1",children:[e.jsxs("div",{className:"font-bold text-cyan-400 flex items-center gap-1",children:[e.jsx(I,{className:"w-3.5 h-3.5"})," 2. Equations"]}),e.jsxs("p",{className:"text-slate-400",children:["Write sigma summation limits clearly (",e.jsxs("code",{className:"text-cyan-300",children:["\\sum_","i=1","^N"]}),") and specify parameter dimensions (",e.jsxs("code",{className:"text-cyan-300",children:["X \\in \\mathbb","R","^","N 	imes d"]}),")."]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-3 rounded-xl border border-slate-800 space-y-1",children:[e.jsxs("div",{className:"font-bold text-emerald-400 flex items-center gap-1",children:[e.jsx(R,{className:"w-3.5 h-3.5"})," 3. Data Leakage"]}),e.jsx("p",{className:"text-slate-400",children:"Never forget to mention why preprocessing (scaling, imputation) MUST occur strictly after splitting the dataset."})]})]})]})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2 border-b border-slate-800 pb-4",children:[e.jsxs("button",{onClick:()=>r("definitions"),className:n("px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2",a==="definitions"?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30":"bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"),children:[e.jsx(h,{className:"w-4 h-4"}),e.jsxs("span",{children:["Master Definitions Dictionary (",E.length,")"]})]}),e.jsxs("button",{onClick:()=>r("formulas"),className:n("px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2",a==="formulas"?"bg-cyan-600 text-white shadow-lg shadow-cyan-600/30":"bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"),children:[e.jsx(d,{className:"w-4 h-4"}),e.jsx("span",{children:"Formula Quick Reference"})]}),e.jsxs("button",{onClick:()=>r("rules"),className:n("px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2",a==="rules"?"bg-amber-600 text-white shadow-lg shadow-amber-600/30":"bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"),children:[e.jsx(m,{className:"w-4 h-4"}),e.jsx("span",{children:"10 Golden Exam Rules"})]}),e.jsxs("button",{onClick:()=>r("viva"),className:n("px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2",a==="viva"?"bg-purple-600 text-white shadow-lg shadow-purple-600/30":"bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"),children:[e.jsx(x,{className:"w-4 h-4"}),e.jsx("span",{children:"High-Yield Viva Q&A"})]}),e.jsxs("button",{onClick:()=>r("note"),className:n("px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2",a==="note"?"bg-emerald-600 text-white shadow-lg shadow-emerald-600/30":"bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"),children:[e.jsx(f,{className:"w-4 h-4"}),e.jsx("span",{children:"Download & Print Full Note"})]})]}),a==="definitions"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 shadow-xl",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 items-center justify-between",children:[e.jsxs("div",{className:"relative w-full sm:w-80",children:[e.jsx(v,{className:"w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"}),e.jsx("input",{type:"text",value:t,onChange:i=>p(i.target.value),placeholder:"Search any definition or concept...",className:"w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"})]}),e.jsx("div",{className:"flex items-center gap-2 text-xs text-slate-400",children:e.jsxs("span",{children:["Found: ",e.jsx("strong",{className:"text-white",children:c.length})," definitions"]})})]}),e.jsx("div",{className:"flex flex-wrap gap-2 pt-1",children:D.map(i=>e.jsx("button",{onClick:()=>u(i),className:n("px-3 py-1.5 rounded-lg text-xs font-medium transition-all",l===i?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"),children:i},i))})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",children:c.map(i=>e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-5 space-y-3.5 transition-all hover:shadow-xl hover:shadow-indigo-950/20 group flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-2.5",children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsx("h3",{className:"text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors",children:i.term}),e.jsx("button",{onClick:()=>y(i),title:"Copy Exam Definition",className:"p-1.5 rounded-lg bg-slate-950 hover:bg-indigo-950 text-slate-400 hover:text-indigo-300 border border-slate-800 shrink-0 transition-colors",children:b===i.id?e.jsx(M,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(L,{className:"w-3.5 h-3.5"})})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("span",{className:"text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800/60",children:i.category}),e.jsx("span",{className:"text-[10px] font-medium px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800/40",children:i.examSignificance})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:i.definition}),i.math&&e.jsx("div",{className:"p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-xs text-indigo-300 overflow-x-auto",children:e.jsx("code",{children:i.math})})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800/70 text-[11px] text-slate-400 flex items-start gap-1.5",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"💡 Viva Tip:"}),e.jsx("span",{children:i.vivaTip})]})]},i.id))}),c.length===0&&e.jsxs("div",{className:"text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800 text-slate-400 space-y-2",children:[e.jsx(v,{className:"w-8 h-8 mx-auto text-slate-600"}),e.jsxs("p",{children:['No definitions found matching "',t,'".']}),e.jsx("button",{onClick:()=>{p(""),u("All")},className:"text-xs text-indigo-400 hover:underline",children:"Clear all filters"})]})]}),a==="formulas"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3",children:[e.jsxs("h2",{className:"text-base sm:text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(d,{className:"w-5 h-5 text-cyan-400"}),e.jsx("span",{children:"Essential Mathematical Formulations Cheat Sheet"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Memorize these core formulas for numerical problems, derivation questions, and viva voce examinations."})]}),e.jsx("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-slate-950 border-b border-slate-800 text-xs text-slate-400 uppercase tracking-wider font-semibold",children:[e.jsx("th",{className:"p-4",children:"Concept / Metric"}),e.jsx("th",{className:"p-4",children:"Mathematical Equation"}),e.jsx("th",{className:"p-4",children:"Examination Application"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 text-xs sm:text-sm",children:j.map((i,s)=>e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsx("td",{className:"p-4 font-bold text-white whitespace-nowrap",children:i.concept}),e.jsx("td",{className:"p-4 font-mono text-cyan-300 whitespace-nowrap bg-slate-950/40",children:e.jsx("code",{children:i.formula})}),e.jsx("td",{className:"p-4 text-slate-300",children:i.application})]},s))})]})})})]}),a==="rules"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3",children:[e.jsxs("h2",{className:"text-base sm:text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(m,{className:"w-5 h-5 text-amber-400"}),e.jsx("span",{children:"10 Golden Rules for Securing 100% Marks in ML Examinations"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Key presentation guidelines, common traps to avoid, and essential examiner checkpoints curated by Sukanta Hui."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",children:_.map(i=>e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-2.5 flex items-start gap-4 hover:border-amber-500/40 transition-colors",children:[e.jsx("div",{className:"w-8 h-8 rounded-xl bg-amber-950 border border-amber-700/60 text-amber-300 font-bold text-sm flex items-center justify-center shrink-0",children:i.num}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:"text-sm font-bold text-white",children:i.title}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:i.desc})]})]},i.num))})]}),a==="viva"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3",children:[e.jsxs("h2",{className:"text-base sm:text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(x,{className:"w-5 h-5 text-purple-400"}),e.jsx("span",{children:"High-Yield Viva Voce & Technical Interview Flashcards"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Rapid-fire questions frequently asked by university external examiners and technical interview panels."})]}),e.jsx("div",{className:"space-y-4",children:O.map(i=>e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("h3",{className:"text-sm sm:text-base font-bold text-white flex items-start gap-2.5",children:[e.jsxs("span",{className:"w-6 h-6 rounded-lg bg-purple-950 text-purple-400 border border-purple-800 flex items-center justify-center text-xs shrink-0 mt-0.5",children:["Q",i.id]}),e.jsx("span",{children:i.question})]}),e.jsx("span",{className:"text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-950 text-purple-400 border border-slate-800 shrink-0",children:i.level})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5",children:[e.jsx("div",{className:"text-xs font-bold text-emerald-400",children:"Direct Examination Model Answer:"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-200 leading-relaxed",children:i.shortAnswer})]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{className:"text-indigo-300",children:"Examiner Deep-Dive Rationale:"})," ",i.explanation]}),i.codeExample&&e.jsx("pre",{className:"p-2.5 bg-slate-950 rounded-lg text-xs font-mono text-cyan-300 overflow-x-auto border border-slate-800/80",children:e.jsx("code",{children:i.codeExample})})]},i.id))})]}),a==="note"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3",children:[e.jsxs("h2",{className:"text-base sm:text-lg font-bold text-white flex items-center gap-2",children:[e.jsx(f,{className:"w-5 h-5 text-emerald-400"}),e.jsx("span",{children:"Downloadable Plain-Text Examination Note"})]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-400",children:["You can directly download this note as a clean UTF-8 text file (",e.jsx("code",{className:"text-emerald-300",children:".txt"}),"), copy the text to your clipboard, or print it out with one click for offline study."]})]}),e.jsx(S,{content:P,filename:"001_001_introduction_to_machine_learning_master_exam_notes.txt",title:"BCAC701B: Module 001 - Introduction to Machine Learning Master Exam Notes",hidePreview:!1,showDownload:!0})]}),e.jsx("section",{className:"pt-4",children:e.jsx(T,{note:"Mastering Machine Learning is not about memorizing complex Python libraries—it is about building an unshakable intuitive foundation of how algorithms generalize from data. Review these definitions and formulas consistently before your university examinations and interviews. When your theoretical foundation is solid, any implementation becomes easy. Best of luck in your ML journey!"})}),e.jsxs("footer",{className:"pt-8 border-t border-slate-800 text-center text-xs text-slate-500 space-y-1",children:[e.jsx("p",{children:"Module 001: Introduction to Machine Learning · Examination Handbook & Study Notes"}),e.jsx("p",{children:"Course: BCAC701B · Coder & AccoTax, Barrackpore, West Bengal · Author: Sukanta Hui"})]})]})})}export{H as default};
