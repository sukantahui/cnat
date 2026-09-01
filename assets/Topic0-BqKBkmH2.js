import{b as a,j as e,bg as d}from"./vendor-react-core-Doz9nIC6.js";import{P as v}from"./PythonFileLoader-hCi5osN-.js";import{F}from"./FAQTemplate-BHhlgA96.js";import{P as H}from"./PlainTextPrint-C08xhKA4.js";import{T as B}from"./TeacherSukantaHui-CEPuAfsb.js";import N,{mathSymbolsData as W}from"./MathSymbolDictionary-bUV3pGCY.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const X=`"""
=============================================================================
TOPIC 0: MEANING AND SCOPE OF MACHINE LEARNING
Laboratory 2: Study Hours vs Exam Marks Prediction (Scikit-Learn & Matplotlib)
Author: Sukanta Hui | Coder & AccoTax | Barrackpore, West Bengal, India
Course: Introduction to Machine Learning (BCAC701B)
=============================================================================

This program demonstrates the core supervised learning paradigm:
1. Historical Dataset (Experience E): Hours studied vs Marks scored.
2. Separation into Input Feature Matrix (X) and Observed Target (y).
3. Inductive Model Fitting: Scikit-Learn discovers slope w and intercept b.
4. Inference on Unseen Test Candidates (e.g. 5.5 hours of study).
5. Visualizing the regression decision line alongside raw historical points.
=============================================================================
"""

try:
    import matplotlib.pyplot as plt
    import pandas as pd
    from sklearn.linear_model import LinearRegression
    SKLEARN_AVAILABLE = True
except ImportError:
    SKLEARN_AVAILABLE = False


def run_sklearn_pipeline():
    # 1. Historical Dataset (Experience E)
    data = {
        "Hours": [1, 2, 3, 4, 5, 6, 7, 8],
        "Marks": [35, 40, 48, 55, 62, 70, 78, 85]
    }
    df = pd.DataFrame(data)

    # 2. Separate Features (X) and Target (y)
    X = df[["Hours"]]
    y = df["Marks"]

    # 3. Model Architecture & Optimization
    model = LinearRegression()
    model.fit(X, y)

    # 4. Learned Parameters
    w = model.coef_[0]
    b = model.intercept_
    r2_score = model.score(X, y)

    print("=" * 75)
    print("CODER & ACCOTAX - TOPIC 0: SCIKIT-LEARN REGRESSION LAB")
    print("=" * 75)
    print("Historical Training Samples:")
    print(df.to_string(index=False))
    print("-" * 75)
    print(f"Learned Weight (w) : {w:.4f} marks per study hour")
    print(f"Learned Bias   (b) : {b:.4f} base baseline marks")
    print(f"Learned Rule h(x)  : Marks = ({w:.2f} * Hours) + {b:.2f}")
    print(f"Model Fit Accuracy : R^2 Score = {r2_score * 100:.2f}%")
    print("-" * 75)

    # 5. Inference on Unseen Students
    unseen_students = pd.DataFrame({"Hours": [2.5, 5.5, 9.0]})
    predictions = model.predict(unseen_students)

    print("Predictions for Brand New (Unseen) Student Profiles:")
    for hours, pred in zip(unseen_students["Hours"], predictions):
        print(f" -> Student studying {hours:>4.1f} hours/day ===> Predicted Mark: {pred:>5.1f} / 100")
    print("=" * 75)

    # 6. Visualization
    plt.figure(figsize=(9, 5.5))
    plt.scatter(X, y, color="#2563eb", s=80, label="Actual Historical Data (X, y)", zorder=4)
    plt.plot(X, model.predict(X), color="#dc2626", linewidth=2.5, label=f"Learned Line: h(x) = {w:.2f}x + {b:.2f}", zorder=3)
    plt.scatter([5.5], [model.predict([[5.5]])[0]], color="#16a34a", s=130, marker="*", label="Unseen Prediction (5.5 hrs -> 66.7 Marks)", zorder=5)
    plt.xlabel("Study Hours (Input Feature X)", fontsize=11, fontweight="bold")
    plt.ylabel("Exam Marks (Observed Target y)", fontsize=11, fontweight="bold")
    plt.title("Topic 0: Linear Regression - Inductive Learning from Experience", fontsize=12, fontweight="bold")
    plt.legend(frameon=True)
    plt.grid(True, linestyle="--", alpha=0.5)
    plt.tight_layout()
    # plt.show()


def run_pure_python_fallback():
    # Pure Python Analytical Solution (Ordinary Least Squares Closed Form)
    hours = [1, 2, 3, 4, 5, 6, 7, 8]
    marks = [35, 40, 48, 55, 62, 70, 78, 85]

    n = len(hours)
    x_mean = sum(hours) / n
    y_mean = sum(marks) / n

    numerator = sum((x - x_mean) * (y - y_mean) for x, y in zip(hours, marks))
    denominator = sum((x - x_mean) ** 2 for x in hours)

    w = numerator / denominator
    b = y_mean - (w * x_mean)

    print("=" * 75)
    print("CODER & ACCOTAX - TOPIC 0: STUDY HOURS REGRESSION LAB")
    print("=" * 75)
    print("Historical Training Samples (Hours -> Marks):")
    for h, m in zip(hours, marks):
        print(f" -> {h} hours/day ===> {m} Marks")
    print("-" * 75)
    print(f"Learned Weight (w) : {w:.4f} marks gained per study hour")
    print(f"Learned Bias   (b) : {b:.4f} baseline marks")
    print(f"Learned Rule h(x)  : Marks = ({w:.2f} * Hours) + {b:.2f}")
    print("-" * 75)

    print("Predictions for Brand New (Unseen) Student Profiles:")
    for new_h in [2.5, 5.5, 9.0]:
        pred = (w * new_h) + b
        print(f" -> Student studying {new_h:>4.1f} hours/day ===> Predicted Mark: {pred:>5.1f} / 100")
    print("=" * 75)


if __name__ == "__main__":
    if SKLEARN_AVAILABLE:
        run_sklearn_pipeline()
    else:
        run_pure_python_fallback()
`,G=`"""
=============================================================================
TOPIC 0: MEANING AND SCOPE OF MACHINE LEARNING
Academic Practical Laboratory & Step-by-Step Educational Engine
Author: Sukanta Hui | Coder & AccoTax | Barrackpore, West Bengal, India
Course: Introduction to Machine Learning (BCAC701B)
=============================================================================

Demonstrating the Core Machine Learning Principle Piece by Piece:
1. Feature Matrix (X) and Observed Target Outcomes (y)
2. Vector Dot Product Hypothesis: h(x) = w^T x + b
3. Loss Evaluation: Comparing Predictions h(x) vs Actual y
4. Gradient Descent Optimization: Automated Parameter Learning (w, b)
5. Inference on Brand New Unseen Inputs (Kolkata Real Estate & Email Spam)
=============================================================================
"""

import math
from typing import List, Tuple, Dict, Any

# =============================================================================
# PART 1: HOUSE PRICE PREDICTION ENGINE (LINEAR REGRESSION VIA GRADIENT DESCENT)
# =============================================================================

class HousePricePredictor:
    """
    Learns to predict house prices in ₹ Lakhs from historical input vectors X:
    Features: [Size (sq ft), Bedrooms, Age (years)] -> Target: Price (₹ Lakhs)
    """
    def __init__(self, learning_rate: float = 0.0000005, epochs: int = 5000):
        self.lr = learning_rate
        self.epochs = epochs
        # Initial terrible weights and bias
        self.w = [0.0, 0.0, 0.0]  # [w1_size, w2_beds, w3_age]
        self.b = 0.0
        self.loss_history: List[float] = []

    def hypothesis(self, x: List[float]) -> float:
        """
        Computes the hypothesis: h(x) = w^T x + b
        = (w1 * size) + (w2 * bedrooms) + (w3 * age) + bias
        """
        dot_product = sum(weight * feature for weight, feature in zip(self.w, x))
        return dot_product + self.b

    def compute_mse_loss(self, X: List[List[float]], y: List[float]) -> float:
        """
        Mean Squared Error Loss:
        L = (1 / N) * sum_{i=1}^N (h(x_i) - y_i)^2
        """
        N = len(X)
        total_squared_error = 0.0
        for x_vec, target in zip(X, y):
            pred = self.hypothesis(x_vec)
            error = pred - target
            total_squared_error += error ** 2
        return total_squared_error / N

    def train(self, X: List[List[float]], y: List[float]) -> List[Dict[str, Any]]:
        """
        Iterative Gradient Descent Loop:
        1. Make predictions h(x)
        2. Calculate error (h(x) - y)
        3. Compute gradients dL/dw and dL/db
        4. Update parameters: w := w - lr * grad_w, b := b - lr * grad_b
        """
        N = len(X)
        history = []

        for epoch in range(1, self.epochs + 1):
            grad_w = [0.0, 0.0, 0.0]
            grad_b = 0.0

            for x_vec, target in zip(X, y):
                pred = self.hypothesis(x_vec)
                error = pred - target  # Residual error (h(x) - y)

                for j in range(len(self.w)):
                    grad_w[j] += error * x_vec[j]
                grad_b += error

            # Average gradients across N samples
            grad_w = [g / N for g in grad_w]
            grad_b = grad_b / N

            # Parameter update step
            for j in range(len(self.w)):
                self.w[j] -= self.lr * grad_w[j]
            self.b -= (self.lr * 1000.0) * grad_b  # Scaled bias rate for convergence

            if epoch in [1, 10, 100, 500, 1000, 2500, 5000]:
                loss = self.compute_mse_loss(X, y)
                self.loss_history.append(loss)
                history.append({
                    "epoch": epoch,
                    "loss": round(loss, 2),
                    "w_size": round(self.w[0], 5),
                    "w_beds": round(self.w[1], 3),
                    "w_age": round(self.w[2], 3),
                    "bias": round(self.b, 2)
                })

        return history


# =============================================================================
# PART 2: EMAIL SPAM CLASSIFICATION ENGINE (LOGISTIC REGRESSION)
# =============================================================================

class EmailSpamClassifier:
    """
    Demonstrates binary classification:
    Features: [Exclamation Marks, Dollar Signs, Embedded Links] -> Target: Spam (1) or Ham (0)
    """
    def __init__(self):
        # Learned optimal weights and bias for email spam detection
        self.w = [0.65, 0.85, 0.40]  # [exclamations, dollar_signs, links]
        self.b = -4.50

    @staticmethod
    def sigmoid(z: float) -> float:
        """Squashes linear score z into probability interval [0.0, 1.0]"""
        z_clamped = max(min(z, 20.0), -20.0)
        return 1.0 / (1.0 + math.exp(-z_clamped))

    def predict_probability(self, x: List[float]) -> float:
        """h(x) = sigma(w^T x + b)"""
        z = sum(weight * feature for weight, feature in zip(self.w, x)) + self.b
        return self.sigmoid(z)

    def classify(self, x: List[float], threshold: float = 0.50) -> Tuple[int, float, str]:
        prob = self.predict_probability(x)
        is_spam = prob >= threshold
        label = "SPAM [ALERT]" if is_spam else "LEGITIMATE (HAM) [CLEAN]"
        return (1 if is_spam else 0), round(prob * 100, 2), label


# =============================================================================
# MAIN LABORATORY EXECUTION & PEDAGOGICAL WALKTHROUGH
# =============================================================================

def run_topic0_lab():
    print("=" * 85)
    print("CODER & ACCOTAX - MACHINE LEARNING LAB (TOPIC 0)")
    print("DECONSTRUCTING THE CORE MACHINE LEARNING PRINCIPLE PIECE BY PIECE")
    print("Author: Sukanta Hui | Barrackpore, West Bengal")
    print("=" * 85)

    # -------------------------------------------------------------------------
    # PIECE 1 & 2: HISTORICAL INPUTS X AND OBSERVED OUTCOMES y
    # -------------------------------------------------------------------------
    print("\\n" + "-" * 85)
    print("PIECE 1 & 2: WHAT ARE X AND y? (HISTORICAL DATASET)")
    print("-" * 85)
    
    # Historical House Data: [Size (sq ft), Bedrooms, Age (years)]
    X_houses = [
        [1000.0, 2.0, 10.0],
        [1500.0, 3.0, 5.0],
        [2000.0, 4.0, 3.0],
        [2500.0, 4.0, 2.0]
    ]
    # Observed actual prices in Rs. Lakhs
    y_prices = [40.0, 60.0, 85.0, 110.0]

    print("Historical Training Dataset (Past Examples):")
    print(f"{'Sample #':<10} | {'Input Vector x = [Size, Beds, Age]':<38} | {'Actual Price y'}")
    print("-" * 85)
    for idx, (x_vec, price) in enumerate(zip(X_houses, y_prices), 1):
        print(f"Row {idx:<6} | x = [{x_vec[0]:>4.0f} sq ft, {x_vec[1]:>1.0f} beds, {x_vec[2]:>2.0f} yrs] {'':<12} | Rs. {price:>5.1f} Lakhs")

    # -------------------------------------------------------------------------
    # PIECE 3, 4 & 5: HYPOTHESIS FUNCTION & GRADIENT OPTIMIZATION
    # -------------------------------------------------------------------------
    print("\\n" + "-" * 85)
    print("PIECE 3, 4 & 5: HYPOTHESIS h(x) = w^T x + b & GRADIENT DESCENT LEARNING")
    print("-" * 85)

    model = HousePricePredictor(learning_rate=0.0000004, epochs=5000)

    # Step A: Initial Terrible State
    initial_loss = model.compute_mse_loss(X_houses, y_prices)
    print(f"[*] Initial Untrained State (Epoch 0):")
    print(f"    Initial Weights: w = {model.w}, Bias: b = {model.b}")
    print(f"    Initial Mean Squared Error Loss: {initial_loss:.2f} (Terrible predictions!)")

    print("\\n[*] Running Gradient Descent: Adjusting parameters iteratively...")
    training_history = model.train(X_houses, y_prices)

    print("\\n[*] Optimization Convergence Trajectory:")
    print(f"{'Epoch':<8} | {'MSE Loss':<12} | {'w1 (Size)':<12} | {'w2 (Beds)':<12} | {'w3 (Age)':<12} | {'Bias (b)'}")
    print("-" * 85)
    for record in training_history:
        print(f"{record['epoch']:<8} | {record['loss']:<12} | {record['w_size']:<12} | {record['w_beds']:<12} | {record['w_age']:<12} | {record['bias']}")

    # -------------------------------------------------------------------------
    # PIECE 6 & 7: EVALUATION & INFERENCE ON BRAND NEW UNSEEN HOUSES
    # -------------------------------------------------------------------------
    print("\\n" + "-" * 85)
    print("PIECE 6: INFERENCE ON TRAINING SAMPLES (EVALUATING LEARNED MODEL)")
    print("-" * 85)

    for idx, (x_vec, actual_p) in enumerate(zip(X_houses, y_prices), 1):
        pred_p = model.hypothesis(x_vec)
        diff = pred_p - actual_p
        print(f"House {idx}: Features={x_vec} -> Predicted: Rs. {pred_p:.2f}L | Actual: Rs. {actual_p:.1f}L | Error: {diff:+.2f}L")

    print("\\n" + "-" * 85)
    print("PREDICTING ON BRAND NEW UNSEEN HOMES (KOLKATA & SALT LAKE):")
    print("-" * 85)
    
    new_unseen_homes = [
        {"desc": "Modern Flat in Salt Lake Sector V",  "features": [1800.0, 3.0, 4.0]},
        {"desc": "Spacious Villa in New Town Action Area", "features": [2800.0, 5.0, 1.0]},
        {"desc": "Vintage Apartment in North Kolkata",  "features": [1200.0, 2.0, 18.0]}
    ]

    for home in new_unseen_homes:
        x_new = home["features"]
        pred_price = model.hypothesis(x_new)
        print(f"-> {home['desc']:<38} | Features: {x_new}")
        print(f"   Calculated Hypothesis: h(x) = Rs. {pred_price:.2f} Lakhs\\n")

    # -------------------------------------------------------------------------
    # PIECE 7: EMAIL SPAM CLASSIFIER DEMO
    # -------------------------------------------------------------------------
    print("-" * 85)
    print("PIECE 7: BINARY EMAIL SPAM CLASSIFICATION DEMO")
    print("-" * 85)
    
    spam_engine = EmailSpamClassifier()
    test_emails = [
        {"subject": "Urgent! Claim Cash Prize Now!!!", "features": [6.0, 12.0, 3.0]},
        {"subject": "Semester Exam Schedule from Barrackpore Lab", "features": [0.0, 0.0, 1.0]},
        {"subject": "Special 50% Discount on Retail Shopping",   "features": [3.0, 4.0, 2.0]}
    ]

    for email in test_emails:
        x_email = email["features"]
        pred_class, prob_pct, verdict = spam_engine.classify(x_email)
        print(f"Subject: \\"{email['subject']}\\"")
        print(f"Features: [Exclamations={x_email[0]}, DollarSigns={x_email[1]}, Links={x_email[2]}]")
        print(f"Prediction: {verdict} (Spam Probability: {prob_pct}%)\\n")

    # -------------------------------------------------------------------------
    # PIECE 8: THE GRAND TAKEAWAY
    # -------------------------------------------------------------------------
    print("=" * 85)
    print("PIECE 8: THE GRAND TAKEAWAY (IN ONE SENTENCE)")
    print("Traditional Programming: Rules + Data -> Output")
    print("Machine Learning:        Data + Answers + Learning Algorithm -> Learned Model h(x) -> Output")
    print("=" * 85)

if __name__ == "__main__":
    run_topic0_lab()
`,q=`=============================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES
Course: Introduction to Machine Learning (Subject Code: BCAC701B)
Module 1: Introduction to Machine Learning
Topic 0: Meaning and Scope of Machine Learning
Author: Sukanta Hui | Barrackpore, West Bengal, India
=============================================================================

1. FOUNDATIONAL DEFINITIONS OF MACHINE LEARNING
-----------------------------------------------------------------------------
1.1 Arthur Samuel's Classical Definition (1959):
"Machine Learning is the subfield of computer science that gives computers the 
ability to learn without being explicitly programmed."
Arthur Samuel created a self-learning Checkers program on the IBM 704 that 
evaluated thousands of board positions and improved its decision heuristics 
over time through self-play.

1.2 Tom M. Mitchell's Formal Mathematical Definition (1997):
"A computer program is said to learn from experience E with respect to some class 
of tasks T and performance measure P, if its performance at tasks in T, as 
measured by P, improves with experience E."

Formal Mathematical Formulation:
- Task (T): The operational objective the system executes.
- Performance Metric (P): The quantitative evaluation function.
- Experience (E): The historical dataset of observed feature-target pairs:
    D = { (x_1, y_1), (x_2, y_2), ..., (x_N, y_N) }
- Monotonic Condition: d P(T) / d E > 0

-----------------------------------------------------------------------------
2. CORE MACHINE LEARNING PRINCIPLES: PIECE-BY-PIECE BREAKDOWN
-----------------------------------------------------------------------------

Piece 1: What are X and y?
- Suppose we want to predict house prices in Kolkata and Salt Lake:
    Size (sq ft) [x_1] | Bedrooms [x_2] | Age [x_3] | Actual Price [y]
    1000               | 2              | 10        | Rs. 40 Lakhs
    1500               | 3              | 5         | Rs. 60 Lakhs
    2000               | 4              | 3         | Rs. 85 Lakhs
    2500               | 4              | 2         | Rs. 110 Lakhs

  Here:
  - X = Input Features (house size, number of bedrooms, age)
  - y = Observed Outcome (actual house price)
  - Conceptually: X = [size, bedrooms, age], y = actual price
  - Each single row of X is called an "input vector": x = [1500, 3, 5], 
    and its observed outcome is y = Rs. 60 Lakhs.

Piece 2: What does "Historical Input Vectors X and Observed Outcomes y" Mean?
- We give the algorithm past examples:
    [1000, 2, 10] --------> Rs. 40L
    [1500, 3, 5]  --------> Rs. 60L
    [2000, 4, 3]  --------> Rs. 85L
    [2500, 4, 2]  --------> Rs. 110L
- The algorithm studies these examples and discovers the mathematical relationship.

Piece 3: What is the Hypothesis Function h(x)?
- The hypothesis is simply the prediction rule learned by the machine:
    h(x) = w^T x + b
- In plain English:
    Prediction = (Weighted combination of inputs) + Bias
- Concrete Example:
    Price = (0.03 * Size) + (5 * Bedrooms) - (2 * Age) + 10
  - The numbers [0.03, 5, -2] are the Weights (w).
  - The number 10 is the Bias (b).

Piece 4: What does w^T x Mean?
- For x = [x_1, x_2, x_3] and w = [w_1, w_2, w_3]:
    w^T x = (w_1 * x_1) + (w_2 * x_2) + (w_3 * x_3)
    h(x)  = (w_1 * x_1) + (w_2 * x_2) + (w_3 * x_3) + b
- For our house example:
    h(x) = (weight_1 * size) + (weight_2 * bedrooms) + (weight_3 * age) + bias
- Key Point: The programmer does NOT choose those weights manually!

Piece 5: What does Gradient Optimization Do?
- This is the learning part:
    1. Start with initial/random weights (w = [0, 0, 0], b = 0).
    2. Make predictions h(x).
    3. Compare predicted h(x) vs actual y using a Loss Function.
    4. Compute gradient (slope of error) and adjust weights: w := w - alpha * grad.
    5. Repeat until weights converge (w = [0.03, 5, -2], b = 10).

Piece 6: The Most Important Sentence (Traditional vs Machine Learning)
- "The programmer defines the learning algorithm and architecture, not the business decision rules."
- Traditional Programming:
    Programmer writes explicit IF/ELSE rules:
      IF income > Rs. 50,000 AND age > 25 THEN approve ELSE reject
      [Programmer] ===> [Rules + Data] ===> [Output]
- Machine Learning:
    Programmer provides architecture + historical data (X, y):
      [Historical Data X, y] + [Learning Algorithm] ===> [Learned Model h(x)] ===> [Output]

Piece 7: A Very Simple Example (Spam vs Legitimate Email)
- Historical training data:
    [5 exclamation, 10 dollar, 2 links] ----> Spam
    [1 exclamation, 2 dollar, 0 links]  ----> Not Spam
- Model learns parameters: h(x) = sigma(w^T x + b).
- A new email arrives: x_new = [6, 12, 3] ==> h(x_new) = 0.94 (94% probability of Spam).

Piece 8: In One Sentence (The Grand Takeaway)
- "Instead of programming the exact prediction rules by hand, we give the machine 
   historical examples (X, y), and an optimization algorithm automatically learns 
   the parameters w and b that produce a useful prediction function h(x) = w^T x + b."
- Memory Rule:
    Traditional Programming: Rules + Data ===> Output
    Machine Learning:        Data + Answers + Algorithm ===> Learned Rules/Model ===> Output

-----------------------------------------------------------------------------
3. MATHEMATICAL SYMBOL, PRONUNCIATION & NOTATION DICTIONARY
-----------------------------------------------------------------------------
Symbol | Name               | Pronunciation        | Meaning / Role in Tutorial
-------+--------------------+----------------------+----------------------------------------------
  ∑    | Capital Sigma      | SIG-muh (/ˈsɪɡ.mə/)  | Summation: Add terms from i=1 to N
  σ    | Lowercase Sigma    | SIG-muh (/ˈsɪɡ.mə/)  | Sigmoid: Squashes values to [0.0, 1.0] probability
 w^T   | Transpose Vector   | TRANS-pose           | Flips column vector to row for dot product w^T x
  y^   | Y-Hat (Prediction) | WYE-hat (/waɪ hæt/)  | Model's predicted output vs ground truth y
  λ    | Lambda             | LAM-duh (/ˈlæm.də/)  | Regularization penalty multiplier
 Ω(w)  | Capital Omega      | oh-MAY-guh           | Model complexity penalty: ||w||_2^2 = sum(w_j^2)
  ∇    | Nabla / Del        | NAB-luh / DEL        | Gradient vector of first-order partial derivatives
  α    | Alpha / Eta        | AL-fuh / AY-tuh      | Learning rate / optimizer step size
  ∈    | Element Of         | IN / belongs to      | Set membership (x_i in R^d, y_i in {0, 1})
 R^d   | Blackboard Bold R  | R-d / Real Numbers   | d-dimensional continuous real coordinate space
argmin | Argmin             | ARG-min              | Returns the optimal weights w* minimizing cost
 J / L | Script J / Loss    | COST / LOSS          | J is total cohort cost; L is single sample loss
  ∂    | Partial Deriv (Del)| PAR-shul d           | Rate of change w.r.t one specific weight parameter
||w||2 | L2 Euclidean Norm  | L-TWO NORM           | Vector magnitude: sqrt(w_1^2 + w_2^2 + ...)
  θ    | Theta              | THAY-tuh / THEE-tuh  | Generalized parameter collection theta = {w, b}
μ / σ^2| Mu & Sigma-Squared | MYEW & SIG-muh sq    | Mean and Variance for feature normalization
  ≈    | Approx Equal       | uh-PROX-ih-mit-lee   | Rounded numerical approximation (e.g. h(x) ~ 66.4)
  ∏    | Capital Pi         | PYE (/paɪ/)          | Product of sequence (multiplies all terms)

-----------------------------------------------------------------------------
4. INTRODUCTORY PRACTICAL PYTHON LAB: STUDY HOURS VS EXAM MARKS
-----------------------------------------------------------------------------
Program Code (Scikit-Learn & Matplotlib):

    import matplotlib.pyplot as plt
    import pandas as pd
    from sklearn.linear_model import LinearRegression

    # 1. Historical Dataset (Experience E)
    data = {
        "Hours": [1, 2, 3, 4, 5, 6, 7, 8],
        "Marks": [35, 40, 48, 55, 62, 70, 78, 85]
    }
    df = pd.DataFrame(data)

    # 2. Input Matrix X and Target y
    X = df[["Hours"]]
    y = df["Marks"]

    # 3. Fit Model (Learns w and b)
    model = LinearRegression()
    model.fit(X, y)

    # 4. Extract Parameters
    w = model.coef_[0]       # ~ 7.30 marks / hour
    b = model.intercept_     # ~ 26.29 baseline marks

    # 5. Prediction on Unseen Student (5.5 study hours)
    pred_5_5 = model.predict([[5.5]])[0]  # => 66.4 Marks

    # 6. Plot Data & Hypothesis Line
    plt.scatter(X, y, color="blue", label="Actual Data (X, y)")
    plt.plot(X, model.predict(X), color="red", label="Regression Line h(x)")
    plt.xlabel("Study Hours")
    plt.ylabel("Marks")
    plt.title("Linear Regression - Inductive Learning")
    plt.legend()
    plt.show()

-----------------------------------------------------------------------------
5. SCOPE AND TAXONOMY OF MACHINE LEARNING
-----------------------------------------------------------------------------
1. Supervised Learning: Labeled pairs (x, y) for Regression & Classification.
2. Unsupervised Learning: Unlabeled vectors {x} for Clustering & Dimensionality Reduction.
3. Semi-Supervised Learning: Small labeled dataset D_L + massive unlabeled dataset D_U.
4. Reinforcement Learning: Agent-Environment interaction via State, Action, Reward (MDP).

-----------------------------------------------------------------------------
6. REAL-WORLD REGIONAL INDUSTRIAL CASE STUDIES
-----------------------------------------------------------------------------
Case 1: Student Grade Prediction & Early Warning in Barrackpore (Mamata & Mahima)
Case 2: Automated Real Estate Valuation in Salt Lake & New Town (Debangshu)
Case 3: Retail Customer Clustering & Basket Analysis in Ichapur (Susmita)
Case 4: Diabetic Retinopathy Vision Diagnostics in Jadavpur (Abhronila)
=============================================================================
`,U=[{id:1,question:"According to Arthur Samuel's classical definition (1959), what is the foundational premise of Machine Learning?",shortAnswer:"Giving computers the ability to learn without being explicitly programmed.",explanation:"Arthur Samuel defined Machine Learning as the subfield of computer science that gives computers the ability to learn from data and empirical interactions without requiring humans to explicitly hardcode deterministic rules for every scenario.",hint:"Think about Samuel's checkers playing program that improved itself through self-play.",level:"Basic",codeExample:`# Traditional: if x > 10: return y
# Machine Learning: model.fit(X_train, y_train)`},{id:2,question:"In Tom Mitchell's formal definition (1997), what do the three parameters T, P, and E represent?",shortAnswer:"Task (T), Performance Metric (P), and Experience (E).",explanation:"Tom Mitchell formulated that a computer program is said to learn from Experience (E) with respect to some class of Tasks (T) and Performance measure (P), if its performance at tasks in T, as measured by P, improves with experience E.",hint:"Think of an autonomous car: driving on roads (T), collision-free mileage (P), and driving logs (E).",level:"Basic",codeExample:`# Mitchell Formulation:
# T: Spam Classification
# P: F1-Score / Accuracy
# E: 50,000 labeled emails`},{id:3,question:"How does the fundamental input-output flow of Traditional Programming differ from that of Machine Learning?",shortAnswer:"Traditional: Data + Rules → Answers; Machine Learning: Data + Answers → Model (Rules).",explanation:"Traditional software engineering follows deductive logic where human developers supply data and explicit logical rules to produce outputs. Machine learning uses inductive logic where algorithms consume data and known historical outputs to learn the underlying predictive hypothesis/model.",hint:"Recall which paradigm outputs a mathematical function h(x) rather than raw computational results.",level:"Moderate",codeExample:`# Traditional Paradigm:
answers = [calculate_tax(income) for income in data]

# ML Paradigm:
model = LinearRegression().fit(X_data, y_targets)`},{id:4,question:"Which of the following scenarios is LEAST suitable for applying Machine Learning?",shortAnswer:"Calculating exact Goods and Services Tax (GST) liability from statutory tax slabs.",explanation:"GST computation is strictly deterministic and governed by clear statutory legal formulas. Applying statistical or probabilistic machine learning models to exact tax calculations would introduce unacceptable approximation errors.",hint:"Look for tasks that have a 100% deterministic mathematical formula with zero ambiguity.",level:"Moderate",codeExample:`# Deterministic computation → Use Rule Engine
gst_amount = invoice_val * 0.18`},{id:5,question:"In the context of Machine Learning, what is 'Generalization'?",shortAnswer:"The model's ability to accurately predict outputs on previously unseen test data.",explanation:"Generalization represents a model's capacity to perform well on new, unseen examples drawn from the same underlying probability distribution as the training data, rather than merely memorizing training points.",hint:"Contrast memorization of past instances with predicting future unknown events.",level:"Moderate",codeExample:"test_accuracy = model.score(X_test, y_test) # Measures generalization"},{id:6,question:"What constitutes the Experience (E) component when training a credit card fraud detection system in Kolkata?",shortAnswer:"Historical database of labeled transaction records (Fraudulent vs Legitimate).",explanation:"Experience (E) refers to the training corpus of historical observations. In fraud detection, E is the tabular dataset of timestamped transactions with customer metadata and audited fraud outcome flags.",hint:"Experience is the data fed into the training pipeline.",level:"Moderate",codeExample:"E = pd.read_csv('kolkata_banking_transactions.csv')"},{id:7,question:"What is Empirical Risk Minimization (ERM) in statistical learning theory?",shortAnswer:"Optimizing model parameters to minimize average loss over the training dataset.",explanation:"Empirical Risk Minimization seeks to find parameter vector w that minimizes the average empirical loss (1/N) * sum L(h(x_i), y_i) computed over the N observed training samples.",hint:"Focus on the term 'Empirical' meaning observed training samples.",level:"Expert",codeExample:"loss = (1/N) * np.sum((y_true - y_pred)**2)"},{id:8,question:"Why does a model with zero training error often fail in production deployment?",shortAnswer:"Overfitting: the model memorized noise and training idiosyncrasies rather than true patterns.",explanation:"When a high-capacity model achieves 0% training error, it typically overfits by fitting data noise and specific outliers. Consequently, it loses the ability to generalize to novel inputs encountered in production.",hint:"High variance leads to poor performance on fresh validation splits.",level:"Moderate",codeExample:`# High degree polynomial overfits training points
poly = PolynomialFeatures(degree=25)`},{id:9,question:"In Supervised Learning, how does Regression differ from Classification?",shortAnswer:"Regression predicts continuous numerical quantities; Classification predicts discrete categorical classes.",explanation:"Regression maps input vectors to continuous real numbers y in R (e.g., house price in ₹ Lakhs, temperature), whereas classification assigns inputs to discrete class labels y in {0, 1, ..., K-1} (e.g., Spam vs Ham, Disease vs Healthy).",hint:"Continuous spectrum vs distinct discrete buckets.",level:"Basic",codeExample:`# Regression: price = 45.80 (₹ Lakhs)
# Classification: label = 'Spam' (0 or 1)`},{id:10,question:"What is the primary characteristic of Unsupervised Learning?",shortAnswer:"The training dataset contains feature vectors without corresponding ground-truth target labels.",explanation:"Unsupervised learning discovers latent geometric, probabilistic, or hierarchical structures within unlabeled datasets D = {x_1, x_2, ..., x_N}, such as customer clusters or low-dimensional manifolds.",hint:"There is no supervisor or teacher providing correct answers during training.",level:"Basic",codeExample:"clusters = KMeans(n_clusters=3).fit_predict(X_unlabeled)"},{id:11,question:"What is Inductive Bias in Machine Learning algorithms?",shortAnswer:"The set of prior assumptions an algorithm uses to predict outputs on unseen inputs.",explanation:"Inductive bias encompasses all structural assumptions built into a learning algorithm (e.g., linearity in Linear Regression, orthogonality of splits in Decision Trees, spatial locality in CNNs) that allow it to generalize beyond observed training points.",hint:"Without prior assumptions, learning from finite data is mathematically impossible (No Free Lunch theorem).",level:"Expert",codeExample:"# Linear Regression assumes y = w^T x + b (linear relationship bias)"},{id:12,question:"In Tom Mitchell's framework for an autonomous medical diagnosis system, what is the Task (T)?",shortAnswer:"Diagnosing patient pathology from clinical markers and radiological images.",explanation:"The Task (T) is the functional execution performed by the program: mapping patient symptoms, lab values, and MRI scans into an accurate disease classification.",hint:"What action is the software performing?",level:"Moderate",codeExample:"T = 'Predict presence of diabetic retinopathy (0 or 1)'"},{id:13,question:"What is the role of the loss function L(y_hat, y) in a Machine Learning training loop?",shortAnswer:"To quantify the mathematical penalty or discrepancy between predicted and actual values.",explanation:"A loss function provides a scalar measure of error for an individual prediction. Optimization algorithms (like gradient descent) use the loss gradient to iteratively update model parameters.",hint:"It acts as a feedback signal guiding parameter weight adjustments.",level:"Moderate",codeExample:"mse_loss = (y_pred - y_true) ** 2"},{id:14,question:"Which learning paradigm is governed by an agent interacting with an environment through States, Actions, and Rewards?",shortAnswer:"Reinforcement Learning (RL).",explanation:"Reinforcement Learning solves sequential decision-making problems formulated as Markov Decision Processes (MDPs), where an autonomous agent takes actions in an environment to maximize cumulative long-term rewards.",hint:"Think of chess bots, robotics, and self-driving navigation systems.",level:"Basic",codeExample:"next_state, reward, done, _ = env.step(action)"},{id:15,question:"What does the No Free Lunch (NFL) Theorem state in Machine Learning?",shortAnswer:"No single machine learning algorithm outperforms all others when averaged across all possible data distributions.",explanation:"Formulated by Wolpert & Macready (1997), the NFL theorem proves that if an algorithm performs well on a particular class of problems, it must necessarily perform worse on the set of all remaining problems.",hint:"There is no universally 'best' model; model selection depends entirely on domain characteristics.",level:"Expert",codeExample:"# Linear models beat Neural Nets on small tabular data; CNNs beat linear models on images."},{id:16,question:"In a real-estate price prediction model for Barrackpore, what represents a 'Feature'?",shortAnswer:"An individual measurable property of a property (e.g., carpet area in sq.ft, floor number, distance to station).",explanation:"A feature is an explanatory variable or quantitative attribute denoted x_j in a feature vector x = [x_1, x_2, ..., x_d] that describes a specific characteristic of the instance.",hint:"Columns in a structured tabular dataset representing explanatory variables.",level:"Basic",codeExample:"features = ['area_sqft', 'bedrooms', 'distance_station_km']"},{id:17,question:"What is the difference between a Model Parameter and a Hyperparameter?",shortAnswer:"Parameters are learned from data during training; Hyperparameters are set prior to training by the engineer.",explanation:"Parameters (e.g., weights w and bias b) are optimized internally by gradient descent during training. Hyperparameters (e.g., learning rate alpha, number of tree estimators, regularization strength lambda) configure the learning process itself and must be tuned externally.",hint:"Weights inside an equation vs learning rate controlling the step size.",level:"Moderate",codeExample:`# Hyperparameter: lr=0.01, max_depth=5
# Parameter: model.coef_, model.intercept_`},{id:18,question:"What is Semi-Supervised Learning and when is it most economically advantageous?",shortAnswer:"Combining a small amount of labeled data with a large amount of unlabeled data when labeling is costly.",explanation:"In many real-world applications (like medical image pathology or speech recognition), obtaining raw data is cheap, but expert annotation is expensive. Semi-supervised learning leverages unlabeled data geometry to boost classification performance.",hint:"Used when hiring domain experts to label millions of rows is cost-prohibitive.",level:"Moderate",codeExample:"from sklearn.semi_supervised import LabelSpreading"},{id:19,question:"Why is feature scaling essential for distance-based ML algorithms like k-Nearest Neighbors (KNN)?",shortAnswer:"Features with large numerical ranges will dominate Euclidean distance calculations over smaller features.",explanation:"If one feature represents income in ₹ (e.g., ₹ 50,000 to ₹ 2,00,000) and another represents age (20 to 60), unscaled Euclidean distance will be almost 100% driven by income, completely ignoring the age dimension.",hint:"Distance metrics compute sqrt(sum (x_i - y_i)^2).",level:"Moderate",codeExample:"X_scaled = StandardScaler().fit_transform(X_raw)"},{id:20,question:"What is the primary role of the Validation Set in a Machine Learning workflow?",shortAnswer:"To tune hyperparameters and evaluate model generalization before final testing.",explanation:"The validation set is used to compare different model architectures, select optimal hyperparameters, and detect overfitting during training without contaminating the pristine final Test set.",hint:"It guides model tuning decisions during the development phase.",level:"Moderate",codeExample:"X_train, X_val, y_train, y_val = train_test_split(X_temp, y_temp, test_size=0.2)"},{id:21,question:"How does Self-Supervised Learning generate training labels from raw data?",shortAnswer:"By creating pretext tasks where part of the input data is masked and predicted from the remaining context.",explanation:"Self-supervised learning (fundamental to modern LLMs and foundation vision models) automatically constructs supervisory signals from raw unannotated data, such as predicting masked words (BERT) or next tokens (GPT).",hint:"Think of language modeling where the next word in a sentence serves as the target label.",level:"Expert",codeExample:"# Pretext task: Predict missing patch in image or masked word in sentence"},{id:22,question:"What is Data Leakage in a Machine Learning pipeline?",shortAnswer:"When information from outside the training dataset (e.g., test split) contaminates the model during training.",explanation:"Data leakage occurs when features containing future information or target indicators that will not be available during real-time inference are inadvertently included during training, leading to unrealistically optimistic validation metrics.",hint:"Fitting a standard scaler on the entire dataset before splitting causes data leakage.",level:"Moderate",codeExample:`# LEAKAGE: scaler.fit(X_all)
# CORRECT: scaler.fit(X_train); scaler.transform(X_test)`},{id:23,question:"In Tom Mitchell's framework, what constitutes a valid Performance Metric (P) for an autonomous vehicle?",shortAnswer:"Average disengagement-free miles driven and rate of traffic violations per 1,000 km.",explanation:"Performance measures must be mathematically rigorous, objective, and directly evaluate the quality of Task execution. Disengagement rate and accident rate quantify autonomous driving safety.",hint:"Must be a measurable quantitative scalar evaluating task success.",level:"Moderate",codeExample:"P = (total_miles_without_human_intervention / total_miles) * 100"},{id:24,question:"What is the curse of dimensionality in Machine Learning?",shortAnswer:"As the number of features increases, the feature space volume grows exponentially, making data points sparse.",explanation:"In high-dimensional spaces (e.g., thousands of features), data points become exponentially isolated from one another. Distance metrics lose discriminatory power, and exponentially more training samples are required to maintain statistical density.",hint:"Space volume grows as O(2^d) with dimension d.",level:"Expert",codeExample:`# PCA reduces dimensionality to counter sparsity
X_pca = PCA(n_components=10).fit_transform(X_high_dim)`},{id:25,question:"What distinguishes Transductive Learning from Inductive Learning?",shortAnswer:"Inductive learns a general hypothesis function for any future input; Transductive predicts labels only for specific given unlabeled points.",explanation:"Inductive learning infers a general mapping function h: X → Y capable of evaluating any arbitrary unseen query. Transductive learning (e.g., standard Graph Neural Label Propagation) solves directly for the given unlabeled test nodes without formulating a global hypothesis.",hint:"Global mapping rule vs specific point-to-point label propagation.",level:"Expert",codeExample:`# Inductive: LinearRegression().predict(any_new_x)
# Transductive: Graph label propagation on fixed graph`},{id:26,question:"Why is accuracy a misleading performance metric for severely imbalanced datasets (e.g., 99.8% normal transactions, 0.2% fraud)?",shortAnswer:"A naive dummy classifier predicting 'Normal' 100% of the time achieves 99.8% accuracy while detecting zero fraud.",explanation:"In imbalanced distributions, overall accuracy is dominated by the majority class. Precision, Recall, F1-Score, and PR-AUC must be used instead to evaluate minority class detection performance.",hint:"Think of what happens if a doctor diagnoses every patient as healthy.",level:"Moderate",codeExample:"f1 = f1_score(y_true, y_pred, pos_label=1)"},{id:27,question:"What is Concept Drift in production Machine Learning systems?",shortAnswer:"The statistical properties of the target variable and feature relationships change over time in the real world.",explanation:"Concept drift occurs when the mapping P(Y|X) shifts due to changes in consumer behavior, macroeconomic events, or adversarial tactics, causing a previously high-performing model to degrade over time.",hint:"Think of e-commerce purchasing patterns shifting dramatically before vs after a pandemic.",level:"Expert",codeExample:"# Model trained on 2019 data fails on 2024 economic conditions due to concept drift."},{id:28,question:"Which of the following is an example of an unsupervised anomaly detection task?",shortAnswer:"Flagging rare, unexpected server telemetry spikes that deviate from historical normal baselines.",explanation:"Unsupervised anomaly detection algorithms (like Isolation Forest or Local Outlier Factor) fit probability density estimators on unlabeled normal logs and identify rare outliers that fall into low-density regions.",hint:"No historical labels of 'attack' vs 'normal' are required.",level:"Moderate",codeExample:"anomaly_scores = IsolationForest().fit_predict(server_logs)"},{id:29,question:"What is the primary role of Regularization (such as L1 Lasso or L2 Ridge) in machine learning models?",shortAnswer:"To penalize excessive model complexity and prevent overfitting by constraining parameter magnitudes.",explanation:"Regularization augments the loss function with a complexity penalty term lambda * Omega(w) (such as sum |w_i| or sum w_i^2). This prevents weights from exploding to fit training noise, enforcing Occam's Razor.",hint:"Adds a penalty for large weights to encourage simpler, smoother decision surfaces.",level:"Moderate",codeExample:"loss_total = mse_loss + alpha * np.sum(weights ** 2) # L2 Ridge Penalty"},{id:30,question:"In end-to-end Machine Learning systems, what does MLOps encompass?",shortAnswer:"The engineering practices that automate the deployment, monitoring, testing, and lifecycle management of ML models in production.",explanation:"MLOps (Machine Learning Operations) unites data engineering, machine learning, and DevOps practices to ensure reliable continuous integration, continuous deployment (CI/CD), feature store management, data versioning, drift monitoring, and automated retraining in production enterprise environments.",hint:"DevOps tailored specifically for machine learning models and data pipelines.",level:"Expert",codeExample:"# MLOps Pipeline: Data Ingestion → Automated Retraining → Model Registry → Canary Deployment → Drift Alert"}],re=()=>{const[V,K]=a.useState("ml"),[h,j]=a.useState("academic"),[n,w]=a.useState(25),[E,S]=a.useState("theory"),[s,A]=a.useState(1),[c,u]=a.useState("sklearn"),[L,g]=a.useState(!1),[m,_]=a.useState(1800),[x,k]=a.useState(3),[p,T]=a.useState(4),[i,M]=a.useState(5.5),o=a.useId();a.useId();const P=t=>{S(t);const r=document.getElementById(t);r&&r.scrollIntoView({behavior:"smooth",block:"start"})},I=+(.03*m+5*x-2*p+10).toFixed(2),b=Math.min(100,+(7.2976*i+26.2857).toFixed(1)),C=[{hours:1,marks:35},{hours:2,marks:40},{hours:3,marks:48},{hours:4,marks:55},{hours:5,marks:62},{hours:6,marks:70},{hours:7,marks:78},{hours:8,marks:85}],l={academic:{title:"Student Performance Prediction (Barrackpore Lab)",task:"Predict whether a student (e.g. Mamata, Mahima, Debangshu) will pass the semester exam with distinction.",performance:"Classification Accuracy (%) & F1-Score on unseen test assessments.",experience:"Historical database of 2,500 student records with attendance %, test marks, and study hours.",inputFeatures:"x = [Attendance %, Weekly Study Hours, Internal Mock Score, Assignment Completion Rate]",targetVariable:"y ∈ {1 (Distinction), 0 (Regular / Needs Support)}",mathForm:"P(y = 1 | x) = σ(w₁x₁ + w₂x₂ + w₃x₃ + w₄x₄ + b)",realWorldContext:"Deployed across colleges in Barrackpore and Ichapur to provide proactive early intervention."},realEstate:{title:"Property Valuation Engine (Kolkata & Salt Lake)",task:"Estimate the fair commercial market price of residential apartments in ₹ Lakhs.",performance:"Root Mean Squared Error (RMSE) in ₹ Lakhs & R² Score.",experience:"Registry database of 18,000 verified property sales across Kolkata, Salt Lake, and New Town.",inputFeatures:"x = [Carpet Area (sq.ft), Distance to Metro (km), Age of Building (years), Floor Number]",targetVariable:"y ∈ ℝ⁺ (Continuous Price in ₹ Lakhs)",mathForm:"ŷ = w₁·Area + w₂·MetroDist + w₃·Age + w₄·Floor + b",realWorldContext:"Used by real-estate valuation platforms operating in Kolkata and Rajarhat."},medical:{title:"Diabetic Retinopathy Screening (Jadavpur Health Hub)",task:"Detect retinal microaneurysms and lesions from fundus retinal photographs.",performance:"Sensitivity (Recall) ≥ 98.5% and Area Under ROC Curve (AUC-ROC).",experience:"45,000 expert-ophthalmologist annotated digital fundus color images.",inputFeatures:"x ∈ ℝ²²⁴ˣ²²⁴ˣ³ (High-resolution pixel color intensity matrix)",targetVariable:"y ∈ {0: No DR, 1: Mild, 2: Moderate, 3: Severe, 4: Proliferative}",mathForm:"ŷ = Softmax(f_CNN(x; θ))",realWorldContext:"Assists community diagnostic clinics in Jadavpur for early blindness prevention."},fraudDetection:{title:"UPI Financial Fraud Prevention (Salt Lake Sector V)",task:"Flag fraudulent digital banking and UPI transactions in real time (sub-50ms).",performance:"Precision-Recall AUC (PR-AUC) and False Positive Rate ≤ 0.05%.",experience:"Stream of 10,000,000 anonymized transaction histories with verified fraud reports.",inputFeatures:"x = [Transaction Amount (₹), Device IP Velocity, Geolocation Distance (km), Hour of Day]",targetVariable:"y ∈ {1 (Fraud Attack), 0 (Legitimate Transaction)}",mathForm:"Loss = -[y log(ŷ) + (1-y) log(1-ŷ)] + λ||w||₂²",realWorldContext:"Embedded in fintech payment gateways across Kolkata Salt Lake Sector V tech corridor."}}[h],R=n*100,D=Math.min(99.2,+(52+47*(1-Math.exp(-n/12))).toFixed(1)),O=Math.max(.045,+(1.45*Math.exp(-n/10)).toFixed(3)),z=[{id:1,title:"1. What are X & y?",icon:"📊"},{id:2,title:"2. Historical Data (X ➔ y)",icon:"🔄"},{id:3,title:"3. Hypothesis h(x)",icon:"🎯"},{id:4,title:"4. What is wᵀx?",icon:"✖️"},{id:5,title:"5. Gradient Optimization",icon:"📉"},{id:6,title:"6. The Golden Rule",icon:"⭐"},{id:7,title:"7. Simple Email Example",icon:"📧"},{id:8,title:"8. In One Sentence",icon:"💡"}];return e.jsxs("div",{className:"space-y-8 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-16 relative",children:[e.jsx("div",{className:"fixed bottom-6 right-6 z-40",children:e.jsxs("button",{onClick:()=>g(!0),className:"bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold px-4 py-2.5 rounded-full shadow-2xl border border-purple-400/50 flex items-center gap-2.5 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40 group",title:"Open Math Symbol & Pronunciation Dictionary",children:[e.jsx("span",{className:"text-xl group-hover:rotate-12 transition-transform",children:"🔣"}),e.jsx("span",{className:"text-xs sm:text-sm font-bold tracking-wide",children:"Math Symbol Dictionary"}),e.jsx("span",{className:"bg-purple-950/80 text-[10px] font-mono px-2 py-0.5 rounded-full border border-purple-700",children:W.length})]})}),L&&e.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200",children:e.jsxs("div",{className:"bg-slate-900 border border-purple-500/50 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4 sticky top-0 bg-slate-900 z-10",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:"🔣"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Mathematical Symbol & Pronunciation Dictionary"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Quick-lookup table with phonetic pronunciations and ML meanings"})]})]}),e.jsx("button",{onClick:()=>g(!1),className:"w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer text-lg font-bold",children:"✕"})]}),e.jsx(N,{})]})}),e.jsxs("header",{className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 rounded-2xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Module 1 • Topic 0"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full",children:"Foundation Theory"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full",children:"Core Principles & T-P-E Formulation"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/40 rounded-full",children:"🔣 Math Symbol Dictionary"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Meaning and Scope of Machine Learning"}),e.jsxs("p",{className:"text-base sm:text-lg text-slate-300 max-w-4xl",children:["Explore the foundational transition from traditional deterministic programming to inductive statistical learning. Break down core mathematical concepts piece by piece, master all mathematical symbols with phonetic pronunciations, understand Arthur Samuel's classical vision and Tom Mitchell's ",e.jsx("span",{className:"text-indigo-400 font-semibold",children:"(T, P, E)"})," formulation."]}),e.jsx("div",{className:"flex flex-wrap gap-2 pt-2",children:[{id:"theory",label:"1. Classical Foundations & Definitions"},{id:"pieceByPiece",label:"2. Core Principles Piece-by-Piece"},{id:"symbols",label:"🔣 3. Math Symbols & Pronunciation Dictionary"},{id:"mitchell",label:"4. Interactive T-P-E Formulation Studio"},{id:"scope",label:"5. Taxonomy & Industry Scope"},{id:"labs",label:"6. Executable Python Labs"}].map(t=>e.jsx("button",{onClick:()=>P(t.id),className:d("px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer",E===t.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/60"),children:t.label},t.id))})]})]}),e.jsxs("section",{id:"theory",className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6 scroll-mt-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Foundational Definitions of Machine Learning"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"From Arthur Samuel's pioneering concept to Tom Mitchell's mathematical formulation"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-indigo-900/50 space-y-3 hover:border-indigo-500/60 transition-all duration-300 group",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold",children:"Classical Vision (1959)"}),e.jsx("span",{className:"text-xs px-2.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800",children:"Arthur Samuel (IBM 704)"})]}),e.jsx("h3",{className:"text-lg font-bold text-white group-hover:text-indigo-300 transition-colors",children:'"Learning Without Being Explicitly Programmed"'}),e.jsx("blockquote",{className:"border-l-2 border-indigo-500 pl-3.5 py-1 text-sm text-slate-300 italic",children:'"Machine Learning is the subfield of computer science that gives computers the ability to learn without being explicitly programmed."'}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Arthur Samuel programmed an IBM 704 to play checkers. Rather than encoding millions of opening moves and endgame trees by hand, he programmed an evaluation function that scored board configurations and adjusted its heuristics over thousands of self-play games."})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-emerald-900/50 space-y-3 hover:border-emerald-500/60 transition-all duration-300 group",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold",children:"Formal Engineering Definition (1997)"}),e.jsx("span",{className:"text-xs px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800",children:"Prof. Tom M. Mitchell (CMU)"})]}),e.jsx("h3",{className:"text-lg font-bold text-white group-hover:text-emerald-300 transition-colors",children:"The (T, P, E) Learning Triad"}),e.jsx("blockquote",{className:"border-l-2 border-emerald-500 pl-3.5 py-1 text-sm text-slate-300 italic",children:'"A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E."'}),e.jsx("div",{className:"bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-xs font-mono text-emerald-300",children:"Condition: d P(T) / d E > 0 (Monotonic improvement with empirical data)"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-400",children:[e.jsx("span",{className:"font-semibold text-slate-300",children:"Visual Blueprint: Tom Mitchell's Formal Learning Loop"}),e.jsx("span",{className:"font-mono text-[11px] text-indigo-400",children:"Closed-Loop Empirical Optimization"})]}),e.jsxs("svg",{viewBox:"0 0 820 220",className:"w-full h-auto max-h-56 bg-slate-900/80 rounded-lg p-2 border border-slate-800",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:`${o}-tGrad`,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#3b82f6",stopOpacity:"0.25"}),e.jsx("stop",{offset:"100%",stopColor:"#1d4ed8",stopOpacity:"0.1"})]}),e.jsxs("linearGradient",{id:`${o}-pGrad`,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981",stopOpacity:"0.25"}),e.jsx("stop",{offset:"100%",stopColor:"#047857",stopOpacity:"0.1"})]}),e.jsxs("linearGradient",{id:`${o}-eGrad`,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#8b5cf6",stopOpacity:"0.25"}),e.jsx("stop",{offset:"100%",stopColor:"#6d28d9",stopOpacity:"0.1"})]})]}),e.jsxs("g",{children:[e.jsx("rect",{x:"30",y:"45",width:"200",height:"130",rx:"10",fill:`url(#${o}-tGrad)`,stroke:"#3b82f6",strokeWidth:"1.5"}),e.jsx("text",{x:"130",y:"75",textAnchor:"middle",fill:"#60a5fa",fontSize:"14",fontWeight:"bold",children:"Task (T)"}),e.jsx("text",{x:"130",y:"100",textAnchor:"middle",fill:"#cbd5e1",fontSize:"11",children:"The Concrete Problem"}),e.jsx("text",{x:"130",y:"125",textAnchor:"middle",fill:"#94a3b8",fontSize:"9.5",children:"• Exam Pass Prediction"}),e.jsx("text",{x:"130",y:"145",textAnchor:"middle",fill:"#94a3b8",fontSize:"9.5",children:"• Kolkata Flat Pricing (₹)"}),e.jsx("text",{x:"130",y:"165",textAnchor:"middle",fill:"#94a3b8",fontSize:"9.5",children:"• Retinopathy Diagnosis"})]}),e.jsxs("g",{children:[e.jsx("line",{x1:"230",y1:"110",x2:"300",y2:"110",stroke:"#64748b",strokeWidth:"2",strokeDasharray:"4 2"}),e.jsx("polygon",{points:"305,110 295,105 295,115",fill:"#64748b"}),e.jsx("text",{x:"265",y:"100",textAnchor:"middle",fill:"#94a3b8",fontSize:"9",children:"Executes"})]}),e.jsxs("g",{children:[e.jsx("rect",{x:"310",y:"45",width:"200",height:"130",rx:"10",fill:`url(#${o}-pGrad)`,stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"410",y:"75",textAnchor:"middle",fill:"#34d399",fontSize:"14",fontWeight:"bold",children:"Performance (P)"}),e.jsx("text",{x:"410",y:"100",textAnchor:"middle",fill:"#cbd5e1",fontSize:"11",children:"Quantitative Metric"}),e.jsx("text",{x:"410",y:"125",textAnchor:"middle",fill:"#a7f3d0",fontSize:"9.5",children:"• Accuracy (%) / F1-Score"}),e.jsx("text",{x:"410",y:"145",textAnchor:"middle",fill:"#a7f3d0",fontSize:"9.5",children:"• Root Mean Sq Error (RMSE)"}),e.jsx("text",{x:"410",y:"165",textAnchor:"middle",fill:"#a7f3d0",fontSize:"9.5",children:"• AUC-ROC / Sensitivity"})]}),e.jsxs("g",{children:[e.jsx("line",{x1:"510",y1:"110",x2:"580",y2:"110",stroke:"#64748b",strokeWidth:"2",strokeDasharray:"4 2"}),e.jsx("polygon",{points:"585,110 575,105 575,115",fill:"#64748b"}),e.jsx("text",{x:"545",y:"100",textAnchor:"middle",fill:"#94a3b8",fontSize:"9",children:"Evaluates"})]}),e.jsxs("g",{children:[e.jsx("rect",{x:"590",y:"45",width:"200",height:"130",rx:"10",fill:`url(#${o}-eGrad)`,stroke:"#8b5cf6",strokeWidth:"1.5"}),e.jsx("text",{x:"690",y:"75",textAnchor:"middle",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"Experience (E)"}),e.jsx("text",{x:"690",y:"100",textAnchor:"middle",fill:"#cbd5e1",fontSize:"11",children:"Training Corpus / History"}),e.jsx("text",{x:"690",y:"125",textAnchor:"middle",fill:"#ddd6fe",fontSize:"9.5",children:"• Labeled Dataset D=(x,y)"}),e.jsx("text",{x:"690",y:"145",textAnchor:"middle",fill:"#ddd6fe",fontSize:"9.5",children:"• 50,000 Patient Scans"}),e.jsx("text",{x:"690",y:"165",textAnchor:"middle",fill:"#ddd6fe",fontSize:"9.5",children:"• 10M UPI Transaction Logs"})]}),e.jsx("path",{d:"M 690 175 Q 410 225 130 175",fill:"none",stroke:"#a855f7",strokeWidth:"2",strokeDasharray:"5 3"}),e.jsx("polygon",{points:"125,175 137,170 135,180",fill:"#a855f7"}),e.jsx("text",{x:"410",y:"210",textAnchor:"middle",fill:"#e9d5ff",fontSize:"10",fontWeight:"bold",children:"Gradient Descent & Parameter Updates (Iterative Learning)"})]})]})]}),e.jsxs("section",{id:"pieceByPiece",className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6 scroll-mt-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-400 font-bold text-lg",children:"02"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Deconstructing Machine Learning: Piece by Piece"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"An intuitive, step-by-step masterclass on features X, targets y, hypothesis h(x), weights w, and optimization"})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-slate-950 via-indigo-950/70 to-slate-950 p-5 rounded-xl border border-indigo-500/40 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-indigo-300 uppercase tracking-wider",children:"The Core Sentence Deconstructed"}),e.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-indigo-900/80 text-indigo-200 border border-indigo-700 font-mono",children:"The Foundational Paradigm"})]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-200 italic leading-relaxed",children:['"The machine learning algorithm consumes historical input vectors ',e.jsx("strong",{className:"text-cyan-300",children:"X"})," and observed outcomes ",e.jsx("strong",{className:"text-emerald-300",children:"y"}),". Using gradient optimization, it synthesizes the hypothesis function ",e.jsx("strong",{className:"text-indigo-300 font-mono",children:"h(x) = wᵀx + b"}),' automatically. The programmer defines the learning algorithm and architecture, not the business decision rules."']})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2",children:z.map(t=>e.jsxs("button",{onClick:()=>A(t.id),className:d("p-2.5 rounded-xl border text-center transition-all duration-300 cursor-pointer space-y-1",s===t.id?"bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/30":"bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"),children:[e.jsx("div",{className:"text-base",children:t.icon}),e.jsx("div",{className:"text-[11px] font-bold truncate",children:t.title})]},t.id))}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6",children:[s===1&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-cyan-400",children:"1."})," What are X and y?"]}),e.jsx("span",{className:"text-xs font-mono px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800",children:"Input Features & Observed Outcomes"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300",children:"Suppose we want to predict residential apartment prices in Kolkata and Salt Lake. Our historical dataset might look like:"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left border-collapse border border-slate-800 bg-slate-900/90 rounded-xl overflow-hidden font-mono",children:[e.jsx("thead",{className:"bg-slate-800 text-slate-200 uppercase text-[11px]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 border-r border-slate-700 text-cyan-300",children:"Size (sq ft) [x₁]"}),e.jsx("th",{className:"p-3 border-r border-slate-700 text-cyan-300",children:"Bedrooms [x₂]"}),e.jsx("th",{className:"p-3 border-r border-slate-700 text-cyan-300",children:"Age (years) [x₃]"}),e.jsx("th",{className:"p-3 text-emerald-300 bg-emerald-950/40",children:"Actual Price (y)"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 border-r border-slate-800",children:"1000"}),e.jsx("td",{className:"p-3 border-r border-slate-800",children:"2"}),e.jsx("td",{className:"p-3 border-r border-slate-800",children:"10"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold bg-emerald-950/20",children:"₹ 40 Lakhs"})]}),e.jsxs("tr",{className:"bg-indigo-950/20 hover:bg-indigo-950/40 border-l-2 border-indigo-500",children:[e.jsx("td",{className:"p-3 border-r border-slate-800 font-bold text-white",children:"1500"}),e.jsx("td",{className:"p-3 border-r border-slate-800 font-bold text-white",children:"3"}),e.jsx("td",{className:"p-3 border-r border-slate-800 font-bold text-white",children:"5"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold bg-emerald-950/30",children:"₹ 60 Lakhs"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 border-r border-slate-800",children:"2000"}),e.jsx("td",{className:"p-3 border-r border-slate-800",children:"4"}),e.jsx("td",{className:"p-3 border-r border-slate-800",children:"3"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold bg-emerald-950/20",children:"₹ 85 Lakhs"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 border-r border-slate-800",children:"2500"}),e.jsx("td",{className:"p-3 border-r border-slate-800",children:"4"}),e.jsx("td",{className:"p-3 border-r border-slate-800",children:"2"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold bg-emerald-950/20",children:"₹ 110 Lakhs"})]})]})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 pt-2",children:[e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-cyan-900/50 space-y-2",children:[e.jsx("div",{className:"font-bold text-cyan-300 text-xs uppercase font-mono",children:"X = Input Features Matrix"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["The measurable characteristics describing the item: ",e.jsx("strong",{className:"text-white",children:"house size"}),", ",e.jsx("strong",{className:"text-white",children:"number of bedrooms"}),", and ",e.jsx("strong",{className:"text-white",children:"building age"}),"."]}),e.jsx("p",{className:"text-xs font-mono text-cyan-200",children:"Conceptually: X = [size, bedrooms, age]"})]}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-emerald-900/50 space-y-2",children:[e.jsx("div",{className:"font-bold text-emerald-300 text-xs uppercase font-mono",children:"y = Observed Outcome (Ground Truth)"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["The true historical target we want to predict: the ",e.jsx("strong",{className:"text-white",children:"actual selling price"})," of the house."]}),e.jsx("p",{className:"text-xs font-mono text-emerald-200",children:"Conceptually: y = actual price (₹ Lakhs)"})]})]}),e.jsxs("div",{className:"p-3 bg-slate-900/80 rounded-lg border border-slate-800 text-xs text-slate-300 font-mono",children:["💡 ",e.jsx("strong",{className:"text-white",children:"Input Vector:"})," Each single row of X is called an ",e.jsx("em",{children:"input vector"})," ",e.jsx("span",{className:"text-cyan-300",children:"x = [1500, 3, 5]"}),", and its corresponding observed outcome is ",e.jsx("span",{className:"text-emerald-400",children:"y = ₹60 Lakhs"}),"."]})]}),s===2&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-400",children:"2."}),' What does "Historical Input Vectors X and Observed Outcomes y" Mean?']}),e.jsx("span",{className:"text-xs font-mono px-2.5 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-800",children:"Learning from Past Experience (E)"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"It simply means we feed the algorithm a collection of past verified examples where we already know both the input conditions and the final answers:"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs",children:[e.jsxs("div",{className:"p-3.5 bg-slate-900 rounded-xl border border-slate-800 text-center space-y-2",children:[e.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:"Example 1"}),e.jsx("div",{className:"text-cyan-300 font-bold",children:"[1000, 2, 10]"}),e.jsx("div",{className:"text-slate-500 font-bold",children:"➔"}),e.jsx("div",{className:"text-emerald-400 font-bold text-sm",children:"₹ 40 Lakhs"})]}),e.jsxs("div",{className:"p-3.5 bg-slate-900 rounded-xl border border-slate-800 text-center space-y-2",children:[e.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:"Example 2"}),e.jsx("div",{className:"text-cyan-300 font-bold",children:"[1500, 3, 5]"}),e.jsx("div",{className:"text-slate-500 font-bold",children:"➔"}),e.jsx("div",{className:"text-emerald-400 font-bold text-sm",children:"₹ 60 Lakhs"})]}),e.jsxs("div",{className:"p-3.5 bg-slate-900 rounded-xl border border-slate-800 text-center space-y-2",children:[e.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:"Example 3"}),e.jsx("div",{className:"text-cyan-300 font-bold",children:"[2000, 4, 3]"}),e.jsx("div",{className:"text-slate-500 font-bold",children:"➔"}),e.jsx("div",{className:"text-emerald-400 font-bold text-sm",children:"₹ 85 Lakhs"})]}),e.jsxs("div",{className:"p-3.5 bg-slate-900 rounded-xl border border-slate-800 text-center space-y-2",children:[e.jsx("span",{className:"text-[10px] text-slate-400 uppercase",children:"Example 4"}),e.jsx("div",{className:"text-cyan-300 font-bold",children:"[2500, 4, 2]"}),e.jsx("div",{className:"text-slate-500 font-bold",children:"➔"}),e.jsx("div",{className:"text-emerald-400 font-bold text-sm",children:"₹ 110 Lakhs"})]})]}),e.jsx("div",{className:"p-4 bg-gradient-to-r from-indigo-950/60 to-slate-900 rounded-xl border border-indigo-800/40 text-xs sm:text-sm text-slate-300 space-y-2",children:e.jsxs("p",{children:["The Machine Learning algorithm studies thousands of these past examples and automatically tries to discover the underlying mathematical pattern connecting ",e.jsx("strong",{className:"text-cyan-300",children:"X"})," to ",e.jsx("strong",{className:"text-emerald-300",children:"y"}),"."]})})]}),s===3&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-400",children:"3."})," What is the Hypothesis Function?"]}),e.jsx("span",{className:"text-xs font-mono px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800",children:"The Learned Prediction Rule"})]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["The ",e.jsx("strong",{className:"text-white",children:"hypothesis"})," is simply the ",e.jsx("strong",{className:"text-emerald-300",children:"prediction rule"})," learned by the machine. For a standard linear model:"]}),e.jsx("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-700 text-center font-mono text-lg sm:text-xl font-bold text-cyan-300",children:"h(x) = wᵀx + b"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Don't let the linear algebra notation intimidate you! It simply means:"}),e.jsx("div",{className:"p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-center font-mono text-sm text-amber-300 font-bold",children:"Prediction = (Weighted combination of inputs) + Bias"}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-slate-400 uppercase",children:"Concrete House Price Example:"}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed space-y-1",children:e.jsxs("div",{children:["Price = ",e.jsx("span",{className:"text-cyan-400 font-bold",children:"0.03"})," × Size + ",e.jsx("span",{className:"text-cyan-400 font-bold",children:"5"})," × Bedrooms - ",e.jsx("span",{className:"text-cyan-400 font-bold",children:"2"})," × Age + ",e.jsx("span",{className:"text-amber-400 font-bold",children:"10"})]})}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300",children:[e.jsxs("div",{className:"p-2.5 bg-slate-950 rounded border border-slate-800",children:["• The numbers ",e.jsx("span",{className:"font-mono text-cyan-400 font-bold",children:"0.03, 5, -2"})," are the ",e.jsx("strong",{className:"text-white",children:"Weights (w)"}),"."]}),e.jsxs("div",{className:"p-2.5 bg-slate-950 rounded border border-slate-800",children:["• The number ",e.jsx("span",{className:"font-mono text-amber-400 font-bold",children:"10"})," is the baseline ",e.jsx("strong",{className:"text-white",children:"Bias (b)"}),"."]})]})]}),e.jsxs("div",{className:"p-5 bg-gradient-to-r from-slate-950 to-indigo-950/60 rounded-xl border border-indigo-800/40 space-y-3",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-indigo-300 uppercase",children:"Test the Learned Hypothesis Live:"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("span",{className:"text-slate-400",children:["Size (sq.ft): ",m]}),e.jsx("input",{type:"range",min:"800",max:"3000",step:"50",value:m,onChange:t=>_(Number(t.target.value)),className:"w-full h-1.5 bg-slate-800 rounded accent-cyan-500"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("span",{className:"text-slate-400",children:["Bedrooms: ",x]}),e.jsx("input",{type:"range",min:"1",max:"5",value:x,onChange:t=>k(Number(t.target.value)),className:"w-full h-1.5 bg-slate-800 rounded accent-cyan-500"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("span",{className:"text-slate-400",children:["Age: ",p," yrs"]}),e.jsx("input",{type:"range",min:"0",max:"20",value:p,onChange:t=>T(Number(t.target.value)),className:"w-full h-1.5 bg-slate-800 rounded accent-cyan-500"})]})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800 flex justify-between items-center text-xs font-mono",children:[e.jsx("span",{className:"text-slate-300",children:"Hypothesis Output h(x):"}),e.jsxs("span",{className:"text-emerald-400 font-bold text-base",children:["₹ ",I," Lakhs"]})]})]})]}),s===4&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-purple-400",children:"4."})," What does wᵀx Mean?"]}),e.jsx("span",{className:"text-xs font-mono px-2.5 py-1 rounded bg-purple-950 text-purple-300 border border-purple-800",children:"Vector Dot Product"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Suppose our input vector and weight vector have 3 elements each:"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-center",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block mb-1",children:"Input Feature Vector:"}),e.jsx("span",{className:"text-cyan-300 font-bold text-sm",children:"x = [x₁, x₂, x₃]"})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block mb-1",children:"Learnable Weight Vector:"}),e.jsx("span",{className:"text-indigo-300 font-bold text-sm",children:"w = [w₁, w₂, w₃]"})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 font-mono text-xs",children:[e.jsxs("div",{className:"text-slate-400",children:["Then the matrix multiplication ",e.jsx("strong",{className:"text-white",children:"wᵀx"})," means:"]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg text-sm text-center text-cyan-300 font-bold",children:"wᵀx = (w₁ × x₁) + (w₂ × x₂) + (w₃ × x₃)"}),e.jsx("div",{className:"text-slate-400 pt-2 border-t border-slate-800",children:"So the full hypothesis equation is:"}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-lg text-sm text-center text-emerald-400 font-bold",children:"h(x) = w₁x₁ + w₂x₂ + w₃x₃ + b"})]}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs text-slate-300",children:[e.jsx("strong",{className:"text-white uppercase font-mono block",children:"In our Kolkata House Pricing Model:"}),e.jsx("p",{className:"font-mono text-slate-300",children:"h(x) = (weight₁ × size) + (weight₂ × bedrooms) + (weight₃ × age) + bias"}),e.jsxs("p",{className:"text-indigo-300 pt-1",children:["⭐ ",e.jsx("strong",{className:"text-white",children:"The Crucial Takeaway:"})," The programmer does ",e.jsx("em",{children:"not"})," choose these weights manually. The optimization algorithm discovers them automatically from the data!"]})]})]}),s===5&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-amber-400",children:"5."})," What does Gradient Optimization Do?"]}),e.jsx("span",{className:"text-xs font-mono px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800",children:"The Learning Process"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:'This is the actual "learning" part of Machine Learning. Initially, the model starts with terrible or random weights (e.g. w₁ = 0, w₂ = 0, w₃ = 0, b = 0). Therefore, its initial predictions are completely wrong.'}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-3 font-mono text-xs",children:[e.jsx("div",{className:"text-xs font-bold text-amber-400 uppercase",children:"The Iterative Optimization Loop:"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-7 gap-2 text-center items-center",children:[e.jsxs("div",{className:"p-2.5 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block text-[10px]",children:"Step 1"}),e.jsx("strong",{className:"text-white text-[11px]",children:"Initial Weights"})]}),e.jsx("div",{className:"text-slate-500 font-bold",children:"➔"}),e.jsxs("div",{className:"p-2.5 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block text-[10px]",children:"Step 2"}),e.jsx("strong",{className:"text-cyan-300 text-[11px]",children:"Predict h(x)"})]}),e.jsx("div",{className:"text-slate-500 font-bold",children:"➔"}),e.jsxs("div",{className:"p-2.5 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block text-[10px]",children:"Step 3"}),e.jsx("strong",{className:"text-rose-400 text-[11px]",children:"Loss vs Actual y"})]}),e.jsx("div",{className:"text-slate-500 font-bold",children:"➔"}),e.jsxs("div",{className:"p-2.5 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block text-[10px]",children:"Step 4"}),e.jsx("strong",{className:"text-emerald-400 text-[11px]",children:"Update Weights w"})]})]})]}),e.jsxs("div",{className:"space-y-2 text-xs text-slate-300",children:[e.jsxs("p",{children:["1. The algorithm compares ",e.jsx("strong",{className:"text-cyan-300 font-mono",children:"Predicted Value h(x)"})," vs ",e.jsx("strong",{className:"text-emerald-300 font-mono",children:"Actual Value y"}),"."]}),e.jsxs("p",{children:["2. It calculates how wrong predictions are using a ",e.jsx("strong",{className:"text-white",children:"Loss / Cost Function"}),"."]}),e.jsxs("p",{children:["3. Gradient Descent computes the slope (derivative) and adjusts the weights in the direction that reduces error:",e.jsx("span",{className:"font-mono text-cyan-300 bg-slate-900 px-2 py-0.5 rounded ml-1 border border-slate-800",children:"w := w - α ∇Loss"})]}),e.jsxs("p",{children:["4. Over hundreds of iterations, the algorithm arrives at optimal weights: ",e.jsx("span",{className:"font-mono text-emerald-300 font-bold",children:"w = [0.03, 5, -2], b = 10"}),"."]})]})]}),s===6&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-rose-400",children:"6."})," The Most Important Sentence"]}),e.jsx("span",{className:"text-xs font-mono px-2.5 py-1 rounded bg-rose-950 text-rose-300 border border-rose-800",children:"Architectural Distinction"})]}),e.jsx("blockquote",{className:"p-4 bg-indigo-950/40 rounded-xl border border-indigo-500/50 text-xs sm:text-sm text-indigo-200 font-medium italic leading-relaxed",children:'"The programmer defines the learning algorithm and architecture, not the business decision rules."'}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5 pt-2",children:[e.jsxs("div",{className:"p-5 bg-slate-900 rounded-xl border border-amber-900/40 space-y-3",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block",children:"Traditional Programming (Rules Handcrafted)"}),e.jsx("p",{className:"text-xs text-slate-300",children:"The programmer explicitly writes every conditional branch:"}),e.jsx("pre",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-[11px] text-amber-300 overflow-x-auto",children:`IF income > ₹50,000
AND age > 25
AND credit_score > 750
THEN approve_loan()
ELSE reject_loan()`}),e.jsx("div",{className:"text-[11px] text-slate-400 font-mono text-center pt-1",children:"Programmer ➔ Handcrafted Rules + Data ➔ Output"})]}),e.jsxs("div",{className:"p-5 bg-slate-900 rounded-xl border border-indigo-900/40 space-y-3",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider block",children:"Machine Learning (Rules Synthesized)"}),e.jsx("p",{className:"text-xs text-slate-300",children:"The programmer provides historical data and an optimization engine:"}),e.jsx("pre",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-[11px] text-indigo-300 overflow-x-auto",children:`# Programmer sets architecture & loss:
model = LinearRegression()
model.fit(X_historical, y_historical)

# Weights are discovered automatically!
# w = [0.03, 5, -2], b = 10`}),e.jsx("div",{className:"text-[11px] text-slate-400 font-mono text-center pt-1",children:"Historical Data (X, y) + Learning Algorithm ➔ Learned Model h(x) ➔ Output"})]})]})]}),s===7&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-cyan-400",children:"7."})," A Very Simple Example: Email Spam Classifier"]}),e.jsx("span",{className:"text-xs font-mono px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800",children:"Binary Classification in Action"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Imagine teaching a computer to distinguish between Spam and Legitimate emails. You provide thousands of historical emails:"}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-2",children:[e.jsxs("div",{className:"flex justify-between border-b border-slate-800 pb-1 text-slate-400 font-bold text-[11px]",children:[e.jsx("span",{children:"Email Feature Vector (X)"}),e.jsx("span",{children:"Observed Result (y)"})]}),e.jsxs("div",{className:"flex justify-between text-slate-300",children:[e.jsx("span",{className:"text-cyan-300",children:"[5 exclamation marks, 10 dollar signs, 2 links, ...]"}),e.jsx("span",{className:"text-rose-400 font-bold",children:"➔ Spam"})]}),e.jsxs("div",{className:"flex justify-between text-slate-300",children:[e.jsx("span",{className:"text-cyan-300",children:"[1 exclamation mark, 2 dollar signs, 0 links, ...]"}),e.jsx("span",{className:"text-emerald-400 font-bold",children:"➔ Not Spam"})]}),e.jsxs("div",{className:"flex justify-between text-slate-300",children:[e.jsx("span",{className:"text-cyan-300",children:"[8 exclamation marks, 15 dollar signs, 4 links, ...]"}),e.jsx("span",{className:"text-rose-400 font-bold",children:"➔ Spam"})]}),e.jsxs("div",{className:"flex justify-between text-slate-300",children:[e.jsx("span",{className:"text-cyan-300",children:"[2 exclamation marks, 1 dollar sign, 0 links, ...]"}),e.jsx("span",{className:"text-emerald-400 font-bold",children:"➔ Not Spam"})]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-r from-slate-950 to-indigo-950/60 rounded-xl border border-indigo-800/40 space-y-2 text-xs sm:text-sm text-slate-300",children:[e.jsxs("p",{children:["1. The algorithm adjusts parameters until it constructs the hypothesis: ",e.jsx("span",{className:"font-mono text-cyan-300",children:"h(x) = σ(wᵀx + b)"}),"."]}),e.jsxs("p",{children:["2. Now a brand-new incoming email arrives: ",e.jsx("span",{className:"font-mono text-white",children:"[6, 12, 3, ...]"}),"."]}),e.jsxs("p",{children:["3. The learned model calculates: ",e.jsx("span",{className:"font-mono text-emerald-400 font-bold",children:"h(x) = 0.94"})," → ",e.jsx("strong",{className:"text-white",children:"94% probability of Spam"}),"!"]}),e.jsx("p",{className:"text-slate-400 italic text-[11px] pt-1",children:"The programmer created the learning mechanism. The training data allowed the system to learn the parameters."})]})]}),s===8&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-400",children:"8."})," In One Sentence: The Grand Synthesis"]}),e.jsx("span",{className:"text-xs font-mono px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800",children:"Executive Summary"})]}),e.jsxs("div",{className:"p-6 bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 rounded-2xl border border-indigo-500/50 shadow-xl space-y-3",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-indigo-300 uppercase tracking-wider block",children:"The Core Takeaway of Supervised Machine Learning"}),e.jsxs("p",{className:"text-sm sm:text-base text-white font-medium leading-relaxed",children:['"Instead of programming the exact prediction rules by hand, we give the machine historical examples ',e.jsx("span",{className:"text-cyan-300 font-mono",children:"(X, y)"}),", and an optimization algorithm automatically learns the parameters ",e.jsx("span",{className:"text-amber-300 font-mono",children:"w"})," and ",e.jsx("span",{className:"text-amber-300 font-mono",children:"b"})," that produce a useful prediction function ",e.jsx("span",{className:"text-emerald-300 font-mono",children:"h(x) = wᵀx + b"}),'."']})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-amber-900/40 text-center space-y-1",children:[e.jsx("span",{className:"text-amber-400 font-bold uppercase text-[10px] block",children:"Traditional Programming:"}),e.jsx("div",{className:"text-slate-200 text-sm font-bold pt-1",children:"Rules + Data ➔ Output"})]}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-xl border border-indigo-900/40 text-center space-y-1",children:[e.jsx("span",{className:"text-indigo-400 font-bold uppercase text-[10px] block",children:"Machine Learning:"}),e.jsx("div",{className:"text-cyan-300 text-sm font-bold pt-1",children:"Data + Answers + Algorithm ➔ Learned Model ➔ Output"})]})]})]})]})]}),e.jsx("section",{id:"symbols",className:"scroll-mt-6",children:e.jsx(N,{})}),e.jsxs("section",{id:"mitchell",className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6 scroll-mt-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"04"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Interactive Tom Mitchell (T, P, E) Studio"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Select real-world industry domains and observe mathematical convergence with Experience (E)"})]})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[{id:"academic",label:"Student Grade (Barrackpore)",icon:"🎓"},{id:"realEstate",label:"Flat Valuation (Kolkata)",icon:"🏢"},{id:"medical",label:"Retinopathy (Jadavpur)",icon:"🔬"},{id:"fraudDetection",label:"UPI Fraud (Salt Lake)",icon:"💳"}].map(t=>e.jsxs("button",{onClick:()=>j(t.id),className:d("p-3 rounded-xl border text-left transition-all duration-300 cursor-pointer space-y-1",h===t.id?"bg-indigo-950/80 border-indigo-500 text-white shadow-lg shadow-indigo-500/20":"bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"),children:[e.jsx("div",{className:"text-xl",children:t.icon}),e.jsx("div",{className:"text-xs font-bold",children:t.label})]},t.id))}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-blue-900/40 space-y-2",children:[e.jsxs("span",{className:"text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-400 inline-block"})," 1. Task (T)"]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-200",children:l.task}),e.jsxs("div",{className:"text-[11px] font-mono text-blue-300/80 pt-2 border-t border-slate-800",children:["Target: ",l.targetVariable]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-emerald-900/40 space-y-2",children:[e.jsxs("span",{className:"text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 inline-block"})," 2. Performance (P)"]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-200",children:l.performance}),e.jsxs("div",{className:"text-[11px] font-mono text-emerald-300/80 pt-2 border-t border-slate-800",children:["Formula: ",l.mathForm]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-purple-900/40 space-y-2",children:[e.jsxs("span",{className:"text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-purple-400 inline-block"})," 3. Experience (E)"]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-200",children:l.experience}),e.jsxs("div",{className:"text-[11px] font-mono text-purple-300/80 pt-2 border-t border-slate-800",children:["Vector: ",l.inputFeatures]})]})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-5",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-bold text-white uppercase tracking-wider",children:"Simulate Experience Accumulation (Dataset Scale N)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Observe how empirical risk minimization drives loss down and accuracy up"})]}),e.jsxs("div",{className:"text-right font-mono text-xs text-indigo-400 font-bold bg-indigo-950 px-3 py-1.5 rounded-lg border border-indigo-800",children:["Experience Dataset: ",R.toLocaleString()," Samples"]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"range",min:"1",max:"50",value:n,onChange:t=>w(Number(t.target.value)),className:"w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"}),e.jsxs("div",{className:"flex justify-between text-[11px] font-mono text-slate-500",children:[e.jsx("span",{children:"100 Samples (Cold Start / High Variance)"}),e.jsx("span",{children:"2,500 Samples"}),e.jsx("span",{children:"5,000+ Samples (Asymptotic Convergence)"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase",children:"Model Generalization Accuracy"}),e.jsxs("div",{className:"text-2xl font-black font-mono text-emerald-400",children:[D,"%"]}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Evaluated on held-out test partition"})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase",children:"Empirical Cross-Entropy Loss"}),e.jsx("div",{className:"text-2xl font-black font-mono text-cyan-400",children:O}),e.jsx("div",{className:"text-[10px] text-slate-500",children:"Loss function L(w, b) penalty"})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase",children:"Learning Regime Status"}),e.jsx("div",{className:"text-base font-bold text-indigo-300 font-mono",children:n<8?"Underfitting (High Bias)":n>42?"Asymptotic Optimal State":"Stable Empirical Learning"}),e.jsx("div",{className:"text-[10px] text-slate-500",children:n<8?"Insufficient data to capture manifold":"Parameters successfully converged"})]})]})]})]}),e.jsxs("section",{id:"scope",className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6 scroll-mt-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold text-lg",children:"05"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Taxonomy and Global Scope of Machine Learning"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"The four foundational learning paradigms governing modern artificial intelligence"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-blue-900/40 space-y-3 hover:border-blue-500/60 transition-all duration-300 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-blue-400",children:"Supervised"}),e.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800",children:"Labeled (x, y)"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Regression & Classification"}),e.jsx("p",{className:"text-xs text-slate-300",children:"Learns a mapping function from input features x to target labels y provided by human ground truth."})]}),e.jsxs("div",{className:"bg-slate-900 p-2.5 rounded text-[11px] font-mono text-slate-400 space-y-1",children:[e.jsx("div",{children:"• Linear/Logistic Regression"}),e.jsx("div",{children:"• Random Forests, XGBoost"}),e.jsx("div",{children:"• Deep Neural Networks"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-emerald-900/40 space-y-3 hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-emerald-400",children:"Unsupervised"}),e.jsxs("span",{className:"text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800",children:["Unlabeled ","{x}"]})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Clustering & Dimensionality"}),e.jsx("p",{className:"text-xs text-slate-300",children:"Discovers hidden structures, probability density modes, customer segments, and low-rank manifolds without target labels."})]}),e.jsxs("div",{className:"bg-slate-900 p-2.5 rounded text-[11px] font-mono text-slate-400 space-y-1",children:[e.jsx("div",{children:"• k-Means, DBSCAN Clustering"}),e.jsx("div",{children:"• PCA, t-SNE, UMAP"}),e.jsx("div",{children:"• Isolation Forest Anomalies"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-purple-900/40 space-y-3 hover:border-purple-500/60 transition-all duration-300 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-purple-400",children:"Semi-Supervised"}),e.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800",children:"Small D_L + Big D_U"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Label Propagation"}),e.jsx("p",{className:"text-xs text-slate-300",children:"Leverages massive unannotated data geometric manifolds alongside a small seed of expensive expert-labeled ground truths."})]}),e.jsxs("div",{className:"bg-slate-900 p-2.5 rounded text-[11px] font-mono text-slate-400 space-y-1",children:[e.jsx("div",{children:"• Graph-based Label Spreading"}),e.jsx("div",{children:"• Pseudo-Labeling"}),e.jsx("div",{children:"• Self-Supervised Pretext Tasks"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-rose-900/40 space-y-3 hover:border-rose-500/60 transition-all duration-300 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-rose-400",children:"Reinforcement"}),e.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800",children:"Action-Reward"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Sequential Decision Agents"}),e.jsx("p",{className:"text-xs text-slate-300",children:"An autonomous agent interacts with dynamic environments, executing actions to maximize cumulative discounted rewards over time."})]}),e.jsxs("div",{className:"bg-slate-900 p-2.5 rounded text-[11px] font-mono text-slate-400 space-y-1",children:[e.jsx("div",{children:"• Q-Learning, SARSA"}),e.jsx("div",{children:"• Deep Q-Networks (DQN)"}),e.jsx("div",{children:"• Proximal Policy Opt (PPO)"})]})]})]})]}),e.jsxs("section",{id:"labs",className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6 scroll-mt-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"06"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Executable Python Laboratory Simulations"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Compare Scikit-Learn standard industry pipelines against pure Python first-principles optimization"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-5",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider",children:"Live Interactive Visual Regression: Study Hours vs Exam Marks"}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Observe the linear hypothesis line ",e.jsx("span",{className:"font-mono text-cyan-300",children:"h(x) = 7.30 × Hours + 26.29"})," predicting test marks"]})]}),e.jsx("div",{className:"font-mono text-xs text-emerald-400 font-bold bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800",children:"Model Fit: R² = 99.65%"})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col md:flex-row gap-6 items-center",children:[e.jsx("div",{className:"w-full md:w-2/3",children:e.jsxs("svg",{viewBox:"0 0 500 280",className:"w-full h-auto bg-slate-950 rounded-lg p-2 border border-slate-800",children:[[0,1,2,3,4,5].map(t=>e.jsx("line",{x1:"45",y1:40+t*40,x2:"480",y2:40+t*40,stroke:"#334155",strokeDasharray:"3 3",strokeWidth:"0.75"},`h-${t}`)),[0,1,2,3,4,5,6,7,8].map(t=>e.jsx("line",{x1:45+t*50,y1:"40",x2:45+t*50,y2:"240",stroke:"#334155",strokeDasharray:"3 3",strokeWidth:"0.75"},`v-${t}`)),e.jsx("text",{x:"35",y:"244",textAnchor:"end",fill:"#94a3b8",fontSize:"9",children:"20"}),e.jsx("text",{x:"35",y:"204",textAnchor:"end",fill:"#94a3b8",fontSize:"9",children:"40"}),e.jsx("text",{x:"35",y:"164",textAnchor:"end",fill:"#94a3b8",fontSize:"9",children:"60"}),e.jsx("text",{x:"35",y:"124",textAnchor:"end",fill:"#94a3b8",fontSize:"9",children:"80"}),e.jsx("text",{x:"35",y:"84",textAnchor:"end",fill:"#94a3b8",fontSize:"9",children:"100"}),[1,2,3,4,5,6,7,8,9].map(t=>e.jsxs("text",{x:45+(t-1)*50,y:"258",textAnchor:"middle",fill:"#94a3b8",fontSize:"9",children:[t,"h"]},`xl-${t}`)),e.jsx("line",{x1:45,y1:240-(33.58-20)/80*160,x2:445,y2:240-(91.96-20)/80*160,stroke:"#ef4444",strokeWidth:"2.5"}),C.map((t,r)=>{const f=45+(t.hours-1)*50,y=240-(t.marks-20)/80*160;return e.jsxs("g",{children:[e.jsx("circle",{cx:f,cy:y,r:"5",fill:"#3b82f6",stroke:"#93c5fd",strokeWidth:"1.5"}),e.jsxs("text",{x:f,y:y-8,textAnchor:"middle",fill:"#cbd5e1",fontSize:"8",fontWeight:"bold",children:[t.marks,"m"]})]},r)}),(()=>{const t=45+(i-1)*50,r=240-(b-20)/80*160;return e.jsxs("g",{children:[e.jsx("circle",{cx:t,cy:r,r:"8",fill:"#10b981",fillOpacity:"0.4",className:"animate-ping"}),e.jsx("circle",{cx:t,cy:r,r:"6",fill:"#10b981",stroke:"#ffffff",strokeWidth:"2"})]})})()]})}),e.jsxs("div",{className:"w-full md:w-1/3 space-y-4 font-mono text-xs",children:[e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-lg border border-slate-800 space-y-2",children:[e.jsx("div",{className:"text-slate-400 uppercase text-[10px] font-bold",children:"Adjust Unseen Study Hours (X):"}),e.jsxs("div",{className:"text-cyan-300 font-bold text-lg",children:[i," Hours / Day"]}),e.jsx("input",{type:"range",min:"1",max:"9",step:"0.5",value:i,onChange:t=>M(Number(t.target.value)),className:"w-full h-2 bg-slate-800 rounded accent-emerald-500 cursor-pointer"})]}),e.jsxs("div",{className:"p-3.5 bg-emerald-950/40 rounded-lg border border-emerald-800/60 space-y-1",children:[e.jsx("div",{className:"text-slate-400 uppercase text-[10px] font-bold",children:"Predicted Exam Marks (ŷ):"}),e.jsxs("div",{className:"text-emerald-400 font-bold text-2xl font-mono",children:[b," / 100"]}),e.jsxs("div",{className:"text-[10px] text-slate-400",children:["h(",i,") = 7.30 × ",i," + 26.29"]})]}),e.jsxs("div",{className:"p-2.5 bg-slate-950 rounded border border-slate-800 text-[11px] text-slate-400 space-y-0.5",children:[e.jsxs("div",{children:["• ",e.jsx("strong",{className:"text-slate-200",children:"Weight (w):"})," 7.30 marks/hour"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{className:"text-slate-200",children:"Bias (b):"})," 26.29 baseline marks"]})]})]})]})]}),e.jsxs("div",{className:"flex gap-2 p-1.5 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("button",{onClick:()=>u("sklearn"),className:d("flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer",c==="sklearn"?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"text-slate-400 hover:text-slate-200"),children:"🔬 Lab 1: Scikit-Learn Regression (Pandas & Matplotlib)"}),e.jsx("button",{onClick:()=>u("firstprinciples"),className:d("flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer",c==="firstprinciples"?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"text-slate-400 hover:text-slate-200"),children:"⚙️ Lab 2: Multi-Feature Gradient Descent Lab"})]}),c==="sklearn"?e.jsx(v,{fileModule:X,title:"study_hours_regression_lab.py",highlightLines:[19,29,39,44,45,52,60]}):e.jsx(v,{fileModule:G,title:"meaning_scope_ml_lab.py",highlightLines:[27,36,44,56,95,131,151,193]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(F,{title:"Meaning and Scope of Machine Learning — Frequently Asked Questions",questions:U})}),e.jsx("section",{className:"space-y-4",children:e.jsx(H,{content:q,title:"Meaning and Scope of Machine Learning",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 0 Study Note",downloadFileName:"topic0_note.txt"})}),e.jsx("section",{children:e.jsx(B,{note:"Always remember: In traditional programming, YOU write the logic rules. In Machine Learning, you provide the data (X, y) and an optimization engine, and the COMPUTER discovers the logic weights w and bias b. Master the hypothesis function h(x) = wᵀx + b, understand how gradient descent reduces loss, and you will understand the essence of all artificial intelligence!"})})]})};export{re as default};
