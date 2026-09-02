import{b as n,j as e,bg as r}from"./vendor-react-core-Doz9nIC6.js";import{T as C}from"./TeacherSukantaHui-RpFLNJ5A.js";import{F as _}from"./FAQTemplate-BHhlgA96.js";import{P as R}from"./PlainTextPrint-C08xhKA4.js";import{P as D}from"./PythonFileLoader-hCi5osN-.js";import"./vendor-icons-wprqVFW_.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const L=[{id:1,question:"What is Multi-Factor Authentication (MFA) and what is the fundamental mathematical principle governing its security?",shortAnswer:"MFA is an authentication mechanism requiring credentials from two or more independent factor categories. The core principle is that compromise of one factor (e.g., password stolen via phishing) does not compromise credentials in another domain (e.g., physical hardware key).",explanation:"True MFA mathematically reduces the overall probability of compromise to the product of the individual compromise probabilities of independent authentication channels: P(compromise) = P(factor_1) * P(factor_2).",hint:"Requires two or more distinct factor categories (Knowledge, Possession, Inherence).",level:"Basic",codeExample:`// True MFA vs Multi-Step 1FA:
// Multi-Step 1FA: Password (Knowledge) + PIN (Knowledge) → Same domain ❌
// True 2FA      : Password (Knowledge) + TOTP Token (Possession) → Distinct domains ✔`},{id:2,question:"What are the three classical authentication factor categories defined in NIST SP 800-63B?",shortAnswer:"1. Something You KNOW (Knowledge - Passwords, PINs); 2. Something You HAVE (Possession - Security keys, Authenticator apps, smartcards); 3. Something You ARE (Inherence - Fingerprint, facial geometry, iris).",explanation:"Modern zero-trust systems extend this to include 'Somewhere You ARE' (Location - GPS/subnet) and 'Something You DO' (Behavioral - keystroke dynamics).",hint:"Knowledge (know), Possession (have), Inherence (are).",level:"Basic",codeExample:`// The 3 Classical Factors:
// 1. Knowledge  : "Passphrase#2026"
// 2. Possession : YubiKey 5 NFC / Google Authenticator
// 3. Inherence  : 3D Facial Geometry Scan`},{id:3,question:"Why does requiring a password followed by the user's Mother's Maiden Name fail to qualify as True Two-Factor Authentication (2FA)?",shortAnswer:"Because both credentials belong strictly to the 'Something You Know' (Knowledge) factor category. This is Multi-Step Single-Factor Authentication (1FA) and can be compromised simultaneously by phishing or social engineering.",explanation:"For an authentication flow to be True 2FA, the second credential must originate from an independent factor domain such as a physical hardware key (Possession) or biometric scan (Inherence).",hint:"Both credentials are knowledge factors; compromising one mechanism allows compromising both.",level:"Basic",codeExample:`// Flawed Multi-Step Flow:
// Step 1: Enter Password → "Kolkata#2026" (Knowledge)
// Step 2: Enter Security Question → "St. Xavier's" (Knowledge)
// Result: 1FA only! Vulnerable to single-point phishing compromise.`},{id:4,question:"Explain the three NIST Authenticator Assurance Levels (AAL1, AAL2, AAL3) outlined in NIST SP 800-63B.",shortAnswer:"AAL1: Single-factor authentication. AAL2: Multi-factor authentication using software tokens (TOTP) or secure push notifications. AAL3: High-assurance multi-factor requiring hardware cryptographic keys with origin binding (FIDO2/WebAuthn) to defeat phishing.",explanation:"AAL3 is mandatory for high-impact federal, defense, and high-value financial transaction systems where Adversary-in-the-Middle (AitM) attacks must be completely neutralized.",hint:"AAL1 = Single-factor; AAL2 = Standard MFA (TOTP); AAL3 = Hardware Cryptographic MFA (FIDO2).",level:"Moderate",codeExample:`// NIST AAL Tiers:
// AAL1: Password only
// AAL2: Password + Microsoft Authenticator TOTP app
// AAL3: Password/PIN + FIDO2 USB Security Key with physical touch proof`},{id:5,question:"What is an MFA Fatigue Attack (MFA Prompt Bombing) and how do attackers execute it?",shortAnswer:"An attacker who possesses stolen credentials repeatedly triggers dozens of push notification approval prompts to the victim's smartphone (often late at night) until the victim experiences fatigue or confusion and clicks 'Approve'.",explanation:"This attack exploits human psychological exhaustion to bypass simple push-notification MFA without needing to compromise the mobile authenticator itself.",hint:"Bombarding a user with push notifications until they inadvertently tap 'Approve'.",level:"Moderate",codeExample:`// MFA Prompt Bombing Sequence:
// 02:15 AM - Push 1 sent → Denied
// 02:16 AM - Push 2 sent → Ignored
// ...
// 02:28 AM - Push 42 sent → User taps "Approve" to silence alarm → ACCOUNT BREACHED! 🚨`},{id:6,question:"How does Number Matching completely eliminate MFA Fatigue / Prompt Bombing attacks?",shortAnswer:"Number Matching forces the user to view a 2-digit number generated on the web login screen and manually type that exact number into their mobile authenticator app to complete the authentication.",explanation:"Because an attacker triggering remote push bombs cannot see the victim's physical monitor, the victim cannot blindly tap 'Approve' without knowing the 2-digit code displayed on the attacker's screen.",hint:"User must enter a 2-digit code displayed on the login browser into their mobile app.",level:"Moderate",codeExample:`// Number Matching Workflow:
// Web Browser shows: "Enter [ 84 ] in your Authenticator app"
// Mobile App prompts: "Enter the 2-digit number shown on your computer screen: [ __ ]"
// Result: Attacker cannot complete push approval remotely.`},{id:7,question:"What is an Adversary-in-the-Middle (AitM) Reverse Proxy attack (e.g., using Evilginx) against standard MFA?",shortAnswer:"An AitM reverse proxy sits transparently between the victim and the legitimate banking website, proxying login credentials and OTP codes in real time, and capturing the authenticated session cookie once the user finishes 2FA.",explanation:"Because software TOTP and SMS OTP codes are not cryptographically bound to the browser's TLS channel, the proxy relays the valid OTP to the real server and steals the resulting session token.",hint:"Proxies phishing traffic to the real server, stealing the final authenticated session cookie.",level:"Expert",codeExample:`// AitM Flow (Evilginx):
// Victim → [Fake Phishing Proxy: bank-login.net] → [Real Bank: bank.com]
// Victim enters Password + TOTP → Proxy forwards to real bank → Real bank issues Session Cookie → Proxy intercepts cookie!`},{id:8,question:"Why is FIDO2 / WebAuthn completely immune to Adversary-in-the-Middle (AitM) phishing proxies?",shortAnswer:"FIDO2 enforces Cryptographic Origin Binding: the browser signs a challenge using the hardware key's private key that includes the exact domain origin (e.g., 'https://bank.com'). When sent to a phishing proxy ('https://bank-login.net'), the cryptographic signature verification fails on the real server.",explanation:"Because origin verification is handled by the browser engine and cryptographic public key cryptography, an attacker's fake domain cannot forge signatures for the legitimate origin.",hint:"Hardware key binds authentication directly to the exact browser domain in the URL bar.",level:"Expert",codeExample:`// Cryptographic Origin Binding:
// Client on 'attacker-phish.net' → Hardware key signs: { origin: 'https://attacker-phish.net', challenge: '...' }
// Real server 'bank.com' checks signature → Origin mismatch ('attacker-phish.net' !== 'bank.com') → REJECTED ❌`},{id:9,question:"What is Adaptive Risk-Based Authentication (Step-Up Authentication) and how does it optimize user experience?",shortAnswer:"Adaptive Authentication dynamically evaluates contextual risk signals (location, device health, transaction amount in ₹, time) during access requests, granting seamless single sign-on for low-risk sessions and demanding stronger MFA factors only when anomalies occur.",explanation:"Rather than burdening users with 2FA prompts on every routine internal click, Step-Up MFA triggers high-assurance challenges when users attempt high-risk actions (e.g., transferring ₹5,00,000).",hint:"Dynamically prompts for stronger authentication based on contextual risk scores.",level:"Moderate",codeExample:`// Adaptive Step-Up Decision:
if (transactionAmount > 500000 || isImpossibleTraveler) {
    enforceMfa("FIDO2_HARDWARE_KEY_TOUCH"); // High Risk Step-Up
} else {
    allowSeamlessSession(); // Low Risk SSO
}`},{id:10,question:"Why is SMS OTP considered the weakest possession factor and deprecated by modern NIST guidelines?",shortAnswer:"SMS OTP messages are transmitted in cleartext across cellular networks and are highly vulnerable to SIM Swapping attacks, SS7 cellular signaling interception, and malware-infected mobile device SMS interceptors.",explanation:"NIST SP 800-63B classifies SMS OTP as 'Restricted' and recommends replacing it with app-based TOTP or hardware security keys.",hint:"Vulnerable to SIM swapping, SS7 interception, and mobile malware.",level:"Basic",codeExample:`// SIM Swap Attack:
// 1. Attacker bribes telecom agent with ₹5,000 to assign Susmita's phone number to new SIM.
// 2. Attacker clicks "Forgot Password" on bank.
// 3. Bank sends SMS OTP → Delivered to attacker's phone! ❌`},{id:11,question:"What is the difference between Out-of-Band (OOB) authentication and In-Band authentication?",shortAnswer:"In-Band authentication transmits all authentication factors over the same primary communication channel (e.g., typing a password and PIN into the same browser window). Out-of-Band (OOB) delivers the second factor across a completely separate, independent channel (e.g., a push notification to a mobile app via cellular data).",explanation:"OOB authentication ensures that compromising the user's primary network connection (e.g., a compromised Wi-Fi router) does not compromise the secondary authentication pathway.",hint:"In-band uses the same channel; Out-of-Band uses an independent communication channel.",level:"Moderate",codeExample:`// In-Band: PC Browser → Sends Password + PIN over same Ethernet cable.
// Out-of-Band: PC Browser sends Password → Server sends encrypted Push Notification over 5G cellular to Mobile App.`},{id:12,question:"How do Backup Recovery Codes (Emergency Codes) maintain security when a user loses their primary MFA authenticator?",shortAnswer:"Backup codes are a set of single-use, high-entropy random strings generated during MFA enrollment, hashed using slow KDFs, and stored by the user in a secure offline location. Using a backup code immediately invalidates it from the database.",explanation:"Single-use enforcement ensures that intercepted or leaked emergency codes cannot be replayed by adversaries for persistent account access.",hint:"High-entropy, single-use codes that are permanently invalidated after one successful login.",level:"Moderate",codeExample:`// Backup Codes Array:
// ["8f92-a1b4", "3c78-99e2", "01fa-45cd"]
// When "8f92-a1b4" is used → Server marks status as "REDEEMED" and prevents re-use.`},{id:13,question:"What is Context-Rich Push Notification and what metadata must it display to the user?",shortAnswer:"Context-rich notifications display the geographic location (city/state), IP address, operating system, browser application name, and timestamp of the login request alongside the approval prompt.",explanation:"If Susmita is in Barrackpore and receives a push notification stating 'Login requested from Moscow, Russia on Chrome Windows', she instantly recognizes the fraud attempt and taps 'Deny & Report'.",hint:"Displays requesting location, app name, and IP address to help users identify fraud.",level:"Basic",codeExample:`// Context-Rich Prompt:
// "Authentication Request from Chrome on Windows 11"
// Location: Barrackpore, West Bengal, India
// IP Address: 103.220.14.88
// Time: 14:32 IST
// [ Approve ]   [ Deny & Report Fraud 🚨 ]`},{id:14,question:"How do Time-Based One-Time Passwords (TOTP - RFC 6238) synchronize between a client authenticator app and an authentication server without communicating?",shortAnswer:"Client and server share a static base32 cryptographic secret key. Both independently calculate the current time counter $C = \\lfloor \\text{current\\_epoch\\_time} / 30 \\rfloor$ and compute $HMAC\\text{-}SHA1(\\text{secret}, C)$, truncating the result to a 6-digit code.",explanation:"Because both devices use UTC epoch time with a 30-second window, they generate identical 6-digit codes simultaneously without needing an active network connection.",hint:"Both compute HMAC on the shared secret using the current 30-second UTC time counter.",level:"Moderate",codeExample:`// TOTP Formula:
// Counter C = floor(Epoch_Seconds / 30)
// Code = Truncate(HMAC-SHA1(SharedSecret, C)) % 10^6`},{id:15,question:"What is Clock Drift in TOTP systems and how is it resolved on authentication servers?",shortAnswer:"Clock drift occurs when a client smartphone or authentication server's internal hardware clock drifts forward or backward by several seconds. Servers resolve this by validating codes against a tolerance window (e.g., $C-1$, $C$, $C+1$), accepting codes generated 30 seconds before or after.",explanation:"A tolerance window of $\\pm 1$ step prevents legitimate users from being rejected when their phone clock is slightly out of sync.",hint:"Server accepts TOTP codes from the current time step as well as the immediately preceding and succeeding time steps.",level:"Moderate",codeExample:`// Server Verification Window:
const currentStep = Math.floor(Date.now() / 1000 / 30);
const valid = (
    verifyCode(secret, currentStep - 1) || // 30 sec past
    verifyCode(secret, currentStep)     || // Current
    verifyCode(secret, currentStep + 1)    // 30 sec future
);`},{id:16,question:"Explain the Session Hijacking threat model after successful MFA completion.",shortAnswer:"Once MFA is successfully completed, the server issues a session token (cookie or JWT) stored in the user's browser. If an attacker steals this token via Infostealer malware, XSS, or AitM proxy, they bypass MFA entirely for all subsequent requests.",explanation:"MFA authenticates the initial login handshake; session security requires continuous binding (e.g., DPoP - Demonstrating Proof-of-Possession, Token Binding, and short session lifetimes).",hint:"Stealing the authenticated session cookie allows bypassing MFA on subsequent HTTP requests.",level:"Expert",codeExample:`// Session Token Theft:
// 1. User completes high-assurance FIDO2 MFA.
// 2. Server sets cookie: "session_id=9f8a7c2b...".
// 3. LummaC2 infostealer malware extracts cookie → Attacker injects cookie into their browser → Full access without MFA!`},{id:17,question:"What is Demonstrating Proof-of-Possession (DPoP - RFC 9449) and how does it prevent stolen session tokens from being replayed?",shortAnswer:"DPoP binds OAuth access and refresh tokens to a client's private cryptographic key. For every API request, the client generates a unique signed JWT proof using its private key; an attacker stealing the token cannot replay it without possessing the private key.",explanation:"DPoP transforms bearer tokens into sender-constrained tokens, ensuring stolen tokens are useless on unauthorized devices.",hint:"Binds access tokens to a client private key, making stolen tokens unusable without the key.",level:"Expert",codeExample:`// DPoP Protected Request:
// Header: Authorization: DPoP <access_token>
// Header: DPoP: <signed_jwt_proof_containing_http_method_and_uri>`},{id:18,question:"What is MFA Bypass via OAuth Device Authorization Grant abuse (Device Code Phishing)?",shortAnswer:"An attacker initiates a Device Authorization Flow (RFC 8628), obtains a user code (e.g., 'WDJB-MJHT'), and phishes the victim into entering this code on `microsoft.com/devicelogin`. When the victim logs in and completes MFA, the attacker's CLI tool receives the session tokens.",explanation:"Because the victim logs in on the legitimate corporate portal, they believe the action is safe, unaware that they are authorizing the attacker's remote terminal.",hint:"Tricks a victim into entering an attacker's device code on the legitimate corporate portal.",level:"Expert",codeExample:`// Device Code Phishing:
// 1. Attacker runs: az login --use-device-code → Gets code: 'BCA-703'
// 2. Attacker emails victim: "Please verify device at microsoft.com/devicelogin with code BCA-703"
// 3. Victim enters code and completes MFA → Attacker CLI gets full Azure AD admin token!`},{id:19,question:"What is Biometric Liveness Detection and why is it essential for Inherence factor security?",shortAnswer:"Liveness detection determines whether a presented biometric sample (fingerprint, face, iris) originates from a live human present at the sensor rather than a synthetic spoof (e.g., 3D printed silicon mask, photograph, gelatin mold, deepfake video).",explanation:"Techniques include infrared depth sensors, structured light projection, pupil dilation response, micro-texture reflection analysis, and challenge-response eye movements.",hint:"Verifies the biometric trait is from a live, physically present human rather than a fake replica.",level:"Moderate",codeExample:`// Liveness Check:
// 1. Structured Infrared Dot Mesh projects 30,000 dots on face (measures 3D depth).
// 2. Infrared camera checks thermal heat signature and involuntary blink micro-motion.
// 3. 2D photo or silicon mask rejected with Presentation Attack Detection (PAD) alert.`},{id:20,question:"Explain the role of Hardware Security Modules (HSM) in enterprise MFA key management.",shortAnswer:"An HSM is a tamper-resistant physical computing appliance that securely generates, stores, and manages cryptographic keys for MFA token validation, preventing key extraction even if the host server is fully compromised.",explanation:"HSMs enforce physical security boundaries, zeroizing (wiping) keys if physical intrusion or voltage tampering is detected.",hint:"Dedicated tamper-resistant hardware storing and calculating cryptographic MFA keys.",level:"Moderate",codeExample:`// HSM Key Operation:
// Server sends challenge to HSM → HSM signs challenge internally with master private key → Returns signature.
// Master private key NEVER leaves the secure physical boundary of the HSM chip.`},{id:21,question:"What is the difference between Synchronous and Asynchronous MFA push notifications?",shortAnswer:"Synchronous push requires the user to actively interact with both the browser and mobile device in lockstep (e.g., typing a number shown on screen). Asynchronous push delivers a passive 'Approve / Deny' prompt without requiring cross-verification between devices.",explanation:"Asynchronous push is highly vulnerable to accidental approvals and MFA fatigue attacks, whereas synchronous push prevents blind approvals.",hint:"Synchronous requires cross-device verification (number matching); asynchronous is a simple tap.",level:"Basic",codeExample:`// Asynchronous: "Did you just log in? [Yes] [No]" (Vulnerable to blind tap ❌)
// Synchronous : "Type the number 47 displayed on your laptop into your phone." (Secure ✔)`},{id:22,question:"How does Impossible Traveler detection identify compromised accounts using geo-velocity math?",shortAnswer:"It calculates the Great-Circle distance between two consecutive login locations and divides by the elapsed time. If the calculated travel speed exceeds commercial aviation limits (e.g., velocity > 900 km/h), the system flags the login as fraudulent.",explanation:"Using the Haversine formula, logging in from Barrackpore at 10:00 AM and Frankfurt at 10:30 AM requires an impossible travel velocity of ~15,000 km/h, indicating credential sharing or botnet proxy usage.",hint:"Measures distance between two logins divided by elapsed time to detect impossible physical travel.",level:"Moderate",codeExample:`// Haversine Velocity Check:
// Login 1: Barrackpore (22.76°N, 88.36°E) at 10:00 IST
// Login 2: Frankfurt (50.11°N, 8.68°E) at 10:30 IST (Distance = 7,200 km)
// Velocity = 7,200 km / 0.5 hr = 14,400 km/h (> 900 km/h limit) → TRIGGER LOCKOUT! 🚨`},{id:23,question:"What is Passkey Synchronization across cloud ecosystems (Apple iCloud Keychain / Google Password Manager) and what security trade-off does it introduce?",shortAnswer:"Synced passkeys replicate FIDO2 cryptographic private keys across all devices in a user's cloud account using end-to-end encryption. The benefit is seamless backup and multi-device usability, but the trade-off is that compromising the master cloud account exposes all synced passkeys.",explanation:"For ultra-high-security environments (defense, high finance), organizations enforce hardware-bound, non-exportable passkeys (Device-Bound Passkeys on YubiKeys).",hint:"Passkeys sync across cloud devices for convenience; device-bound passkeys remain locked to one hardware chip.",level:"Expert",codeExample:`// Synced vs Device-Bound Passkey:
// Synced Passkey        : Stored in iCloud/Google Keychain → Accessible on iPhone, iPad, Mac.
// Device-Bound Passkey : Stored on YubiKey AAL3 hardware → Private key CANNOT be copied or synced.`},{id:24,question:"What is the impact of MFA on Automated API and Service-to-Service communications?",shortAnswer:"Interactive human MFA (TOTP, push notifications, biometrics) cannot be answered by automated backend microservices. Automated systems use non-interactive cryptographic authentication: mTLS (mutual TLS certificates), Workload Identity Federation, or OAuth client credentials.",explanation:"Enforcing interactive human MFA on machine-to-machine service accounts causes scheduled automation jobs to crash.",hint:"Machine APIs require non-interactive mTLS or OAuth client credentials, not human push prompts.",level:"Moderate",codeExample:`// Machine-to-Machine Authentication:
// Service A → Sends Client X.509 Certificate (mTLS) + Signed JWT Assertion → Service B verifies cryptographically.`},{id:25,question:"How does Conditional Access Policy enforcement in Microsoft Entra ID or Okta protect enterprise networks?",shortAnswer:"Conditional Access evaluates an 'if-then' policy engine: IF user role is Finance, device is non-compliant, and IP is outside corporate subnet, THEN block access or enforce mandatory FIDO2 hardware MFA + PIN.",explanation:"This allows fine-grained security rules that tailor authentication rigor to user privilege, asset sensitivity, and ambient risk.",hint:"Rules engine evaluating user, device health, location, and risk to assign authentication requirements.",level:"Moderate",codeExample:`// Conditional Access Rule:
// IF (User in "Treasury_Admins" AND Location != "Barrackpore_HQ") {
//    Require: MFA (AAL3 FIDO2) AND Device_Compliant == True
// }`},{id:26,question:"What is MFA Downgrade / Fallback Attack and how is it mitigated?",shortAnswer:"An attacker intentionally causes a high-assurance MFA method (FIDO2 or TOTP) to fail or triggers error conditions to force the server into offering a weaker fallback method (such as SMS OTP or security questions).",explanation:"Mitigation requires disabling weak fallback options entirely or requiring administrator authorization for MFA reset requests.",hint:"Manipulating authentication to force the server to accept a weaker secondary factor like SMS.",level:"Moderate",codeExample:`// Downgrade Attack:
// Attacker clicks "Hardware key not available? Try SMS OTP instead" → Server falls back to phishable SMS channel ❌
// Hardened Policy: Fallback to weaker factors is strictly disabled ✔`},{id:27,question:"Explain the concept of Continuous Adaptive Risk and Trust Assessment (CARTA) in zero-trust MFA.",shortAnswer:"CARTA is a security paradigm that continuously monitors user and device behavior throughout the entire session (not just at login), dynamically terminating sessions or requesting step-up authentication if anomalies arise.",explanation:"If a user successfully authenticates with 2FA but their device abruptly disables its firewall, begins exfiltrating gigabytes of data, or connects via a VPN, CARTA revokes access in real time.",hint:"Continuously monitors session risk and revokes access dynamically rather than checking only at login.",level:"Expert",codeExample:`// CARTA Session Monitoring:
// 10:00 - User logs in with MFA (Risk: 5/100 → Pass)
// 10:25 - User disables endpoint antivirus → Risk jumps to 85/100 → CARTA instantly revokes active JWT session!`},{id:28,question:"What is an Infostealer Malware (e.g., RedLine, Racoon, Lumma) attack on MFA-authenticated browsers?",shortAnswer:"Infostealer malware infects a user's machine and extracts decrypted cookies, session tokens, and saved credentials directly from browser SQLite databases (like Chrome's `Cookies` file) in user memory, bypassing MFA entirely.",explanation:"Because the attacker steals the valid, active session token, they can replay it on their own machine without having to solve the MFA challenge.",hint:"Steals active session cookies directly from the victim's local browser memory.",level:"Moderate",codeExample:`// Infostealer Action:
// Target file: %LocalAppData%\\Google\\Chrome\\User Data\\Default\\Network\\Cookies
// Extracts: session_token for banking portal → Exfiltrates to Telegram C2 channel.`},{id:29,question:"How does Fast IDentity Online (FIDO) Universal 2nd Factor (U2F) protocol differ from modern FIDO2?",shortAnswer:"U2F was designed strictly as a second factor alongside a mandatory first-factor password (Password + USB key tap). FIDO2 (WebAuthn + CTAP2) supports passwordless authentication, allowing the security key to act as a standalone primary authenticator using on-device PIN or biometrics.",explanation:"FIDO2 incorporates Client to Authenticator Protocol 2 (CTAP2), enabling mobile phones, laptops, and external USB keys to provide resident credentials without passwords.",hint:"U2F was strictly a 2nd factor; FIDO2 supports true single-step passwordless login.",level:"Moderate",codeExample:`// Evolution:
// U2F   : Password (1st Factor) + U2F Key Tap (2nd Factor)
// FIDO2 : FIDO2 Security Key + Fingerprint Touch (Single-Step Passwordless Authentication)`},{id:30,question:"In a forensic incident at a financial institution in Barrackpore, a remote worker's account was compromised despite having standard SMS OTP 2FA enabled. What was the exact root cause and what architectural change was mandated?",shortAnswer:"The worker fell victim to an Adversary-in-the-Middle (AitM) phishing proxy (Evilginx) that relayed their password and SMS OTP in real time to the real banking server and captured the authenticated session cookie. The SOC mandated migration to phishing-resistant FIDO2 hardware keys (NIST AAL3).",explanation:"SMS OTP and software TOTP are phishable via AitM reverse proxies; only cryptographic origin-bound authenticators (FIDO2) provide absolute immunity.",hint:"AitM proxy intercepted the SMS OTP and stole the session cookie; resolved by migrating to FIDO2.",level:"Expert",codeExample:`// Root Cause & Resolution:
// Root Cause : AitM Reverse Proxy intercepted SMS OTP and captured active session cookie.
// Mandated Fix: Enforced FIDO2 WebAuthn keys with mandatory origin verification; deprecated SMS OTP.`}],B=`====================================================================================================
ACADEMIC STUDY GUIDE & FORENSIC NOTES: MULTI-FACTOR AUTHENTICATION (MFA/2FA) FUNDAMENTALS
COURSE MODULE: 005_005 - AUTHENTICATION FRAMEWORKS & MFA (TOPIC 3)
INSTITUTION: CODER & ACCOTAX | INSTRUCTOR: SUKANTA HUI | LOCATION: BARRACKPORE, WEST BENGAL
====================================================================================================

1. CONCEPTUAL FOUNDATIONS OF MULTI-FACTOR AUTHENTICATION (MFA)
----------------------------------------------------------------------------------------------------
Multi-Factor Authentication (MFA) is a security mechanism requiring a user to present credentials from 
two or more mathematically independent authentication factor categories before being granted system access.

The Three Core Pillars of Authentication Factors:
1. Something You KNOW (Knowledge Factor):
   - Passwords, passphrases, PINs, challenge question answers (deprecated).
   - Vulnerability: Phishing, keylogging, credential stuffing, dictionary attacks.

2. Something You HAVE (Possession Factor):
   - Software TOTP tokens (Google Authenticator, Microsoft Authenticator).
   - Hardware Security Keys (YubiKey 5 NFC, FIDO2/WebAuthn tokens).
   - Smart cards, cryptographic USB dongles, SMS/Email OTP (phishable).
   - Vulnerability: Physical theft, SIM swapping (for SMS), session interception.

3. Something You ARE (Inherence Factor):
   - Capacitive/optical fingerprint scanners, 3D infrared facial recognition, iris scans.
   - Vascular vein recognition, voice biometric analysis.
   - Vulnerability: Non-revocability, high False Rejection Rates (FRR), presentation attacks (spoofing).

Extended Modern Factors (Zero-Trust Context):
4. Somewhere You ARE (Location Factor): GPS geofencing, BSSID Wi-Fi checks, corporate subnet CIDR.
5. Something You DO (Behavioral Factor): Keystroke dynamics, touchscreen swipe velocity, gait analysis.


2. MULTI-STEP 1FA VS TRUE MULTI-FACTOR AUTHENTICATION (2FA)
----------------------------------------------------------------------------------------------------
A critical conceptual error in cybersecurity architecture is conflating "Multi-Step" with "Multi-Factor".

+-------------------------+----------------------------------+------------------+-------------------------+
| Configuration           | Factors Presented                | Classification   | Security Assurance      |
+-------------------------+----------------------------------+------------------+-------------------------+
| Password + PIN          | Knowledge + Knowledge            | Multi-Step 1FA   | VULNERABLE (Single Pt)  |
| Password + Security Q   | Knowledge + Knowledge            | Multi-Step 1FA   | VULNERABLE (Single Pt)  |
| Password + SMS OTP      | Knowledge + Possession (Weak)    | True 2FA (Basic) | Moderate (SIM Swap risk)|
| Password + TOTP App     | Knowledge + Possession (App)     | True 2FA (Std)   | Strong (AAL2 Compliant) |
| Password + FIDO2 Key    | Knowledge + Possession (Crypto)  | True 2FA (High)  | Phishing Resistant(AAL3)|
| Biometric + FIDO2 Key   | Inherence + Possession           | True 2FA (Passwd)| Highest Enterprise Grade|
+-------------------------+----------------------------------+------------------+-------------------------+


3. NIST SP 800-63B AUTHENTICATOR ASSURANCE LEVELS (AAL)
----------------------------------------------------------------------------------------------------
The National Institute of Standards and Technology (NIST) classifies MFA strength into three levels:

1. AAL1 (Low Assurance):
   - Single-factor or multi-step single-factor authentication (e.g., password only).
   - Suitable only for low-impact, non-sensitive public web services.

2. AAL2 (Moderate Assurance):
   - Requires multi-factor authentication using two distinct factor categories.
   - Permitted authenticators: Software TOTP/HOTP, out-of-band push notifications with number matching.
   - Defeats automated credential stuffing and dictionary attacks.

3. AAL3 (High Assurance - Phishing Resistant):
   - Requires hardware-based cryptographic authenticators (FIDO2 / WebAuthn / Smart Card) with 
     origin-binding proofs.
   - Resistant to Adversary-in-the-Middle (AitM) phishing proxies (Evilginx) and session hijacking.


4. MFA BYPASS TECHNIQUES & MODERN DEFENSES
----------------------------------------------------------------------------------------------------
1. MFA Prompt Bombing (MFA Fatigue Attack):
   - Attackers flood a user's phone with 50+ push approval requests at 02:00 AM until the victim 
     accidentally or frustatedly taps "Approve".
   - Modern Defense: Enforce Number Matching (user must enter a 2-digit number displayed on the login 
     screen into the mobile app) and Context-Rich Prompts (showing app name and location).

2. Adversary-in-the-Middle (AitM) Reverse Proxies (Evilginx):
   - Attackers proxy traffic between the real banking server and victim, capturing the session cookie 
     after the user completes software TOTP.
   - Modern Defense: Deploy FIDO2/WebAuthn with cryptographic origin binding (validates TLS origin).

3. SIM Swapping:
   - Attackers bribe or trick telecom operators into reassigning the victim's phone number to an 
     attacker-controlled SIM card to intercept SMS OTPs.
   - Modern Defense: Deprecate SMS OTP entirely; enforce app-based TOTP or hardware passkeys.


5. ADAPTIVE RISK-BASED STEP-UP AUTHENTICATION (CONTEXTUAL MFA)
----------------------------------------------------------------------------------------------------
Adaptive MFA evaluates contextual risk signals during login and dynamically demands additional authentication 
only when anomalous risk thresholds are breached:
- Risk Signals: New device MAC/User-Agent, Impossible Traveler velocity (> 900 km/h), Tor exit node IP, 
  high financial transaction values (e.g., transfer > ₹5,00,000 at Barrackpore Treasury).
- Low Risk   : Seamless login without user friction (SSO).
- Medium Risk: Step-up software TOTP prompt.
- High Risk  : Step-up FIDO2 hardware touch + biometric biometric verification or complete block.


6. REGIONAL SOC CASE STUDIES (WEST BENGAL DEPLOYMENTS)
----------------------------------------------------------------------------------------------------
Case 1: Barrackpore Municipal Treasury Disbursals
- Architecture: Mandatory AAL3 FIDO2 + PIN for approving government budget allocations exceeding ₹10,00,000.
- Result: 100% immunity against credential-stealing spear-phishing attacks.

Case 2: Kolkata FinTech Core Payment Gateway
- Architecture: Migration from simple push notifications to Number Matching after an MFA Fatigue drill.
- Result: Accidental push approvals dropped to 0.0%; unauthorized logins eliminated.
====================================================================================================
`,U=`#!/usr/bin/env python3
"""
===============================================================================
CYBERSECURITY LAB: MULTI-FACTOR AUTHENTICATION (MFA/2FA) ORCHESTRATION ENGINE
COURSE: BCA BCAC703 - Cyber Security | MODULE: 005_005 (Authentication & MFA)
INSTITUTION: Coder & AccoTax | INSTRUCTOR: Sukanta Hui | LOCATION: Barrackpore
===============================================================================
This script provides forensic simulation of:
1. NIST SP 800-63B Authenticator Assurance Levels (AAL1, AAL2, AAL3).
2. Multi-Factor Credential Categorization and True-MFA verification.
3. MFA Prompt Bombing (MFA Fatigue) attack detection & number matching defense.
4. Risk-Based Adaptive Step-Up MFA engine evaluated in Indian Rupee (₹) contexts.
"""

import sys
import time
import math
import random
from dataclasses import dataclass
from typing import Dict, List, Set, Tuple

# Ensure UTF-8 stdout encoding for currency symbols and bullets
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

# =============================================================================
# DATA STRUCTURES
# =============================================================================

@dataclass
class AuthFactor:
    name: str
    category: str      # "KNOWLEDGE", "POSSESSION", "INHERENCE", "LOCATION"
    assurance_score: int

@dataclass
class MfaAssessment:
    factors_used: List[str]
    distinct_categories: Set[str]
    is_true_mfa: bool
    assurance_level: str   # "AAL1", "AAL2", "AAL3"
    description: str

# =============================================================================
# MFA ORCHESTRATION & FATIGUE DETECTION ENGINE
# =============================================================================

class MfaOrchestrationEngine:
    def __init__(self):
        self.factors_db = {
            "password": AuthFactor("Password", "KNOWLEDGE", 20),
            "pin": AuthFactor("ATM PIN", "KNOWLEDGE", 20),
            "sms_otp": AuthFactor("SMS OTP", "POSSESSION", 40),
            "totp_app": AuthFactor("Software TOTP (Google Auth)", "POSSESSION", 70),
            "fido2_key": AuthFactor("Hardware FIDO2 Security Key", "POSSESSION", 95),
            "fingerprint": AuthFactor("Biometric Fingerprint", "INHERENCE", 80),
            "face_id": AuthFactor("3D Face Recognition", "INHERENCE", 80),
            "geofence": AuthFactor("Corporate Subnet Location", "LOCATION", 30)
        }

    def evaluate_mfa(self, selected_keys: List[str]) -> MfaAssessment:
        """
        Evaluates factor combination against NIST SP 800-63B AAL guidelines.
        """
        selected_factors = [self.factors_db[k] for k in selected_keys if k in self.factors_db]
        categories = {f.category for f in selected_factors}
        is_true_mfa = len(categories) >= 2

        # Determine NIST AAL Level
        has_fido = "fido2_key" in selected_keys
        has_knowledge = any(f.category == "KNOWLEDGE" for f in selected_factors)
        has_possession = any(f.category == "POSSESSION" for f in selected_factors)
        has_inherence = any(f.category == "INHERENCE" for f in selected_factors)

        if has_fido and (has_knowledge or has_inherence) and is_true_mfa:
            aal = "AAL3 (High Assurance - Phishing Resistant)"
            desc = "Complies with NIST AAL3: Hardware-bound cryptographic authenticator with biometric/PIN unlock."
        elif is_true_mfa and (has_possession or has_inherence):
            aal = "AAL2 (Moderate Assurance - Standard Enterprise)"
            desc = "Complies with NIST AAL2: Multi-factor using software OTP or biometric."
        else:
            aal = "AAL1 (Low Assurance - Single Factor Multi-Step)"
            desc = "FAILS True MFA: All credentials belong to the same factor category (e.g. Password + PIN)."

        return MfaAssessment(
            factors_used=[f.name for f in selected_factors],
            distinct_categories=categories,
            is_true_mfa=is_true_mfa,
            assurance_level=aal,
            description=desc
        )

    def simulate_mfa_fatigue_attack(self, push_count_per_min: int, has_number_matching: bool) -> Dict:
        """
        Simulates MFA Prompt Bombing (Fatigue attack) and Number Matching defense.
        """
        if has_number_matching:
            return {
                "attack_result": "ATTACK NEUTRALIZED 🛡️",
                "defense": "Number Matching Enforced: User must enter a 2-digit number shown on the login screen into their phone. Blind approval is impossible.",
                "compromise_probability": "0.0%"
            }
        else:
            if push_count_per_min >= 15:
                return {
                    "attack_result": "HIGH RISK OF COMPROMISE 🚨",
                    "defense": "Legacy Simple Push (Approve/Deny): User bombarded with 15+ notification prompts at 02:00 AM until fatigue-clicking 'Approve'.",
                    "compromise_probability": "78.5%"
                }
            else:
                return {
                    "attack_result": "SUSPICIOUS ACTIVITY LOGGED ⚠️",
                    "defense": "Low-frequency push notifications. SOC alert generated for repeated prompts.",
                    "compromise_probability": "15.0%"
                }

    def evaluate_adaptive_step_up(self, amount_inr: float, is_new_device: bool, is_out_of_hours: bool) -> Dict:
        """
        Evaluates contextual risk score and triggers Step-Up authentication for high-value banking transactions.
        """
        risk_score = 0
        reasons = []

        if amount_inr > 500_000:
            risk_score += 40
            reasons.append(f"High Transaction Value (₹{amount_inr:,.2f} > ₹5,00,000 threshold)")
        elif amount_inr > 100_000:
            risk_score += 20
            reasons.append(f"Medium Transaction Value (₹{amount_inr:,.2f})")

        if is_new_device:
            risk_score += 30
            reasons.append("Unrecognized Device Hardware Fingerprint")

        if is_out_of_hours:
            risk_score += 20
            reasons.append("Off-Hours Access (Between 23:00 - 05:00)")

        if risk_score >= 60:
            action = "MANDATORY STEP-UP: Hardware FIDO2 Security Key + Biometric Verification Required"
            policy = "HIGH RISK (AAL3 Required)"
        elif risk_score >= 30:
            action = "STANDARD STEP-UP: Time-Based OTP (TOTP) Challenge Required"
            policy = "MODERATE RISK (AAL2 Required)"
        else:
            action = "SEAMLESS PASS: Standard Single Sign-On session permitted"
            policy = "LOW RISK (AAL1 Permitted)"

        return {
            "amount_inr": f"₹{amount_inr:,.2f}",
            "risk_score": risk_score,
            "policy": policy,
            "action": action,
            "reasons": reasons
        }

# =============================================================================
# CLI DEMONSTRATION & TEST HARNESS
# =============================================================================

def main():
    engine = MfaOrchestrationEngine()
    print("=" * 80)
    print("MFA ORCHESTRATION & RISK-BASED STEP-UP SIMULATOR")
    print("Institution: Coder & AccoTax | Location: Barrackpore, West Bengal")
    print("=" * 80)

    # Test 1: Flawed 1FA vs True 2FA vs AAL3
    combos = [
        ("Password + PIN (Flawed)", ["password", "pin"]),
        ("Password + TOTP App (Standard 2FA)", ["password", "totp_app"]),
        ("Password + FIDO2 Key (AAL3 High Assurance)", ["password", "fido2_key"])
    ]

    for label, keys in combos:
        res = engine.evaluate_mfa(keys)
        print(f"\\n[Scenario]: {label}")
        print(f"  Factors Used        : {', '.join(res.factors_used)}")
        print(f"  Distinct Categories : {', '.join(res.distinct_categories)}")
        print(f"  True MFA Verified   : {'YES ✔' if res.is_true_mfa else 'NO ❌'}")
        print(f"  Assurance Rating    : {res.assurance_level}")
        print(f"  Forensic Summary    : {res.description}")

    # Test 2: MFA Prompt Bombing vs Number Matching
    print("\\n" + "-" * 80)
    print("TEST 2: MFA FATIGUE (PROMPT BOMBING) SIMULATION")
    print("-" * 80)
    fatigue_legacy = engine.simulate_mfa_fatigue_attack(push_count_per_min=20, has_number_matching=False)
    fatigue_modern = engine.simulate_mfa_fatigue_attack(push_count_per_min=20, has_number_matching=True)
    print(f"Legacy Push (20 prompts/min): {fatigue_legacy['attack_result']} - Prob: {fatigue_legacy['compromise_probability']}")
    print(f"Modern Push with Number Match: {fatigue_modern['attack_result']} - Prob: {fatigue_modern['compromise_probability']}")

    # Test 3: Adaptive Step-Up for Municipal Treasury
    print("\\n" + "-" * 80)
    print("TEST 3: ADAPTIVE STEP-UP MFA (BARRACKPORE MUNICIPAL TREASURY)")
    print("-" * 80)
    tx = engine.evaluate_adaptive_step_up(amount_inr=8500000.0, is_new_device=True, is_out_of_hours=True)
    print(f"Disbursement Amount : {tx['amount_inr']}")
    print(f"Risk Score          : {tx['risk_score']}/100")
    print(f"Policy Decision     : {tx['policy']}")
    print(f"Enforced Action     : {tx['action']}")
    print(f"Risk Triggers       : {'; '.join(tx['reasons'])}")
    print("=" * 80)

if __name__ == "__main__":
    main()
`,$=()=>{n.useId(),n.useId();const v=[{id:"password",name:"Static Password",factor:"KNOWLEDGE",icon:"🔑",color:"text-cyan-400"},{id:"pin",name:"Numeric ATM PIN",factor:"KNOWLEDGE",icon:"🔢",color:"text-cyan-400"},{id:"security_q",name:"Security Question",factor:"KNOWLEDGE",icon:"❓",color:"text-cyan-400"},{id:"sms_otp",name:"SMS OTP Code",factor:"POSSESSION",icon:"💬",color:"text-amber-400"},{id:"totp_app",name:"Software TOTP (Google Auth)",factor:"POSSESSION",icon:"📱",color:"text-indigo-400"},{id:"fido2_key",name:"Hardware FIDO2 YubiKey",factor:"POSSESSION",icon:"🛡️",color:"text-emerald-400"},{id:"fingerprint",name:"Biometric Fingerprint",factor:"INHERENCE",icon:"👆",color:"text-purple-400"},{id:"face_id",name:"3D Face Geometry Scan",factor:"INHERENCE",icon:"👤",color:"text-purple-400"}],[a,w]=n.useState(["password","totp_app"]),N=t=>{a.includes(t)?a.length>1&&w(a.filter(s=>s!==t)):w([...a,t])},c=n.useMemo(()=>{const t=v.filter(S=>a.includes(S.id)),s=new Set(t.map(S=>S.factor)),i=s.size>=2,d=a.includes("fido2_key");let g="",x="",f="";return d&&i?(g="NIST AAL3 (High Assurance - Phishing Resistant)",x="TRUE MFA (Fortress Tier): Cryptographic hardware key immune to AitM reverse proxy phishing.",f="bg-emerald-950 text-emerald-300 border-emerald-700"):i?(g="NIST AAL2 (Moderate Assurance - Standard Enterprise)",x="TRUE MFA (Verified): Independent factor categories defeat credential stuffing and password spraying.",f="bg-cyan-950 text-cyan-300 border-cyan-700"):(g="NIST AAL1 (Low Assurance - Multi-Step 1FA)",x="FLAWED: All chosen credentials belong to the same factor domain! Single-point breach risk.",f="bg-rose-950 text-rose-300 border-rose-700"),{selected:t,categories:Array.from(s),isTrueMfa:i,aal:g,verdict:x,badgeColor:f}},[a]),[h,M]=n.useState(12),[p,F]=n.useState(!1),m=n.useMemo(()=>p?{status:"ATTACK NEUTRALIZED 🛡️",compromiseRisk:"0.0%",badgeColor:"bg-emerald-950 text-emerald-300 border-emerald-700",explanation:"Number Matching Enforced: The victim's phone prompts for a 2-digit code displayed on the browser. Because the remote attacker cannot see the user's screen, blind approvals are completely impossible."}:h>=15?{status:"CRITICAL RISK: USER FATIGUE COMPROMISE 🚨",compromiseRisk:"88.5%",badgeColor:"bg-rose-950 text-rose-300 border-rose-700",explanation:"Victim bombarded with 15+ notification buzzes late at night. Over 80% of users tap 'Approve' to silence continuous buzzing, handing the adversary instant access."}:h>=5?{status:"MODERATE RISK: SUSPICIOUS PROMPTS ⚠️",compromiseRisk:"35.0%",badgeColor:"bg-amber-950 text-amber-300 border-amber-700",explanation:"Repeated push prompts generate confusion. Some users tap 'Approve' assuming a background cloud sync glitch."}:{status:"LOW RISK: ISOLATED NOTIFICATION",compromiseRisk:"5.0%",badgeColor:"bg-cyan-950 text-cyan-300 border-cyan-700",explanation:"Single prompt easily recognized and denied by vigilant users."},[h,p]),[o,P]=n.useState(25e4),[A,I]=n.useState(!1),[b,E]=n.useState(!1),[y,O]=n.useState(!1),u=n.useMemo(()=>{let t=0;const s=[];o>1e6?(t+=45,s.push(`High Value Disbursement (₹${o.toLocaleString("en-IN")})`)):o>3e5&&(t+=25,s.push(`Significant Transaction (₹${o.toLocaleString("en-IN")})`)),A&&(t+=30,s.push("Unrecognized Device Hardware Fingerprint")),b&&(t+=20,s.push("Off-Hours Access (01:00 - 05:00 IST)")),y&&(t+=50,s.push("Tor Anonymizing Proxy / High-Risk ASN"));let i="",d="";return t>=60?(i="HIGH RISK STEP-UP: Enforce Hardware FIDO2 Touch + Biometric Verification",d="bg-rose-950 text-rose-300 border-rose-700"):t>=25?(i="MODERATE RISK STEP-UP: Software TOTP Challenge Required",d="bg-amber-950 text-amber-300 border-amber-700"):(i="LOW RISK: Seamless Single Sign-On (SSO) Approved",d="bg-emerald-950 text-emerald-300 border-emerald-700"),{score:t,triggers:s,policyAction:i,badgeColor:d}},[o,A,b,y]),[k,j]=n.useState("barrackpore_treasury"),T={barrackpore_treasury:{id:"barrackpore_treasury",title:"Barrackpore Municipal Treasury: High-Assurance AAL3 Mandate",location:"Municipal financial core approving vendor disbursements exceeding ₹85,00,000",engineers:"Susmita (SecOps Lead) & Debangshu (Infrastructure Architect)",threatScenario:"Adversaries launched spear-phishing campaigns mimicking state bank portals to steal clerk credentials and intercept SMS OTP codes to authorize fraudulent contractor payment batches.",solution:"Deployed FIDO2 USB Security Keys with physical touch verification (NIST AAL3) and deactivated SMS OTP completely for transactions over ₹50,000.",outcome:"100% elimination of AitM reverse-proxy phishing attacks; all treasury disbursements cryptographically verified with zero fraud losses."},kolkata_fintech_number_matching:{id:"kolkata_fintech_number_matching",title:"Salt Lake Sector V FinTech: MFA Fatigue Mitigation",location:"Digital payments hub processing 250,000 merchant logins daily",engineers:"Mahima (Lead Identity Architect) & Mamata (SOC Lead)",threatScenario:"Following an external credential dump, an automated botnet targeted 120 employees with repeated overnight push approval prompts, causing 3 accidental approvals.",solution:"Rolled out mandatory Number Matching across Microsoft Authenticator and integrated geographic location displays on push prompts.",outcome:"Accidental approvals dropped to 0.0%; botnet attack paralyzed; corporate accounts secured."},ichapur_adaptive_iam:{id:"ichapur_adaptive_iam",title:"Ichapur Ordnance Manufacturing: Adaptive Contextual Step-Up",location:"Critical defense engineering systems and design repositories",engineers:"Abhronila (Chief InfoSec Officer) & Incident Response Team",threatScenario:"Contractor credentials accessed from remote VPN connections during off-hours attempting to download restricted technical schematics.",solution:"Implemented CARTA continuous adaptive risk policies demanding biometric re-authentication whenever anomalous file download thresholds are breached.",outcome:"Unauthorized remote exfiltration attempts automatically blocked; real-time SOC incident alarms triggered within 4 seconds."}},l=T[k];return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 space-y-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("header",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-indigo-950 text-indigo-400 border border-indigo-800 rounded-full text-xs font-semibold uppercase tracking-wider",children:"Module 005_005 • Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-semibold",children:"BCA BCAC703 • Cyber Security"})]}),e.jsx("h1",{className:"text-2xl md:text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Multi-Factor Authentication (MFA / 2FA) Fundamentals"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"SOC Location:"}),e.jsx("span",{className:"text-xs font-bold text-indigo-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800",children:"Barrackpore • West Bengal"})]})]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed",children:["Multi-Factor Authentication (MFA) is the primary defensive barrier neutralizing over 99.9% of automated identity attacks. Master the mathematical separation of ",e.jsx("strong",{children:"Knowledge, Possession, and Inherence"})," factors, evaluate",e.jsx("strong",{children:"NIST SP 800-63B Authenticator Assurance Levels (AAL1–AAL3)"}),", simulate ",e.jsx("strong",{children:"MFA Fatigue / Prompt Bombing attacks"}),", and design ",e.jsx("strong",{children:"Adaptive Contextual Step-Up MFA"})," systems for high-assurance financial operations."]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg md:text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🛡️"})," Studio 1: True MFA vs Multi-Step 1FA & NIST AAL Assessor"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select factor credentials to verify whether the combination satisfies mathematical True MFA and NIST SP 800-63B standards."})]}),e.jsx("div",{className:r("px-3 py-1 rounded-full text-xs font-bold border",c.badgeColor),children:c.isTrueMfa?"TRUE MFA VERIFIED ✔":"FLAWED 1FA ❌"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Toggle Authentication Factors:"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:v.map(t=>{const s=a.includes(t.id);return e.jsxs("button",{onClick:()=>N(t.id),className:r("p-3 rounded-xl border text-left transition-all duration-200 space-y-1",s?"bg-indigo-950/80 border-indigo-500 shadow-md shadow-indigo-950/50":"bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"),children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-lg",children:t.icon}),e.jsx("span",{className:r("text-[9px] px-1.5 py-0.5 rounded font-bold uppercase",t.color),children:t.factor})]}),e.jsx("div",{className:"font-semibold text-xs text-white",children:t.name})]},t.id)})})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2",children:[e.jsx("span",{className:"text-sm font-bold text-white",children:"NIST Assurance Rating:"}),e.jsx("span",{className:r("text-xs px-2.5 py-1 rounded-full border font-mono font-bold",c.badgeColor),children:c.aal})]}),e.jsx("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:c.verdict}),e.jsxs("div",{className:"flex items-center gap-2 pt-2 border-t border-slate-800/80 text-xs text-slate-400",children:[e.jsx("span",{className:"font-semibold text-slate-300",children:"Active Factor Categories: "}),c.categories.map((t,s)=>e.jsx("span",{className:"px-2 py-0.5 bg-slate-900 text-indigo-300 rounded border border-slate-700 font-mono text-[10px]",children:t},s))]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"text-xs font-bold text-slate-400 flex items-center justify-between",children:[e.jsx("span",{children:"MFA Architectural Pillars & Independent Factor Domains"}),e.jsx("span",{className:"text-[10px] text-indigo-400",children:"Semantic SVG Map"})]}),e.jsxs("svg",{className:"w-full h-44 bg-slate-900/50 rounded-lg p-2 overflow-visible",viewBox:"0 0 700 160","aria-label":"MFA Factor Domains",children:[e.jsxs("g",{transform:"translate(60, 20)",children:[e.jsx("rect",{x:"0",y:"0",width:"160",height:"110",rx:"10",fill:"#082f49",stroke:"#0284c7",strokeWidth:"1.5"}),e.jsx("text",{x:"80",y:"30",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"1. Something You KNOW"}),e.jsx("text",{x:"80",y:"55",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"Knowledge Factor"}),e.jsx("text",{x:"80",y:"75",fill:"#cbd5e1",fontSize:"9",textAnchor:"middle",children:"• Passwords / PINs"}),e.jsx("text",{x:"80",y:"90",fill:"#cbd5e1",fontSize:"9",textAnchor:"middle",children:"• Diceware Passphrases"})]}),e.jsx("text",{x:"250",y:"80",fill:"#818cf8",fontSize:"20",fontWeight:"bold",textAnchor:"middle",children:"+"}),e.jsxs("g",{transform:"translate(270, 20)",children:[e.jsx("rect",{x:"0",y:"0",width:"160",height:"110",rx:"10",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:"80",y:"30",fill:"#a5b4fc",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"2. Something You HAVE"}),e.jsx("text",{x:"80",y:"55",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"Possession Factor"}),e.jsx("text",{x:"80",y:"75",fill:"#cbd5e1",fontSize:"9",textAnchor:"middle",children:"• FIDO2 Hardware Key"}),e.jsx("text",{x:"80",y:"90",fill:"#cbd5e1",fontSize:"9",textAnchor:"middle",children:"• Software TOTP Token"})]}),e.jsx("text",{x:"460",y:"80",fill:"#818cf8",fontSize:"20",fontWeight:"bold",textAnchor:"middle",children:"+"}),e.jsxs("g",{transform:"translate(480, 20)",children:[e.jsx("rect",{x:"0",y:"0",width:"160",height:"110",rx:"10",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"80",y:"30",fill:"#6ee7b7",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"3. Something You ARE"}),e.jsx("text",{x:"80",y:"55",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"Inherence Factor"}),e.jsx("text",{x:"80",y:"75",fill:"#cbd5e1",fontSize:"9",textAnchor:"middle",children:"• 3D Facial Geometry"}),e.jsx("text",{x:"80",y:"90",fill:"#cbd5e1",fontSize:"9",textAnchor:"middle",children:"• Optical Fingerprint"})]})]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg md:text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📱"})," Studio 2: MFA Prompt Bombing (Fatigue Attack) & Number Matching Defense"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Observe how adversaries exploit human psychological fatigue with repeated push notifications and how Number Matching neutralizes it."})]}),e.jsx("div",{className:r("px-3 py-1 rounded-full text-xs font-bold border",m.badgeColor),children:m.status})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-5",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs font-bold text-slate-300",children:[e.jsx("span",{children:"Adversary Push Prompt Frequency:"}),e.jsxs("span",{className:"font-mono text-cyan-400",children:[h," Prompts / Hour"]})]}),e.jsx("input",{type:"range",min:"1",max:"30",value:h,onChange:t=>M(Number(t.target.value)),className:"w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[e.jsx("span",{children:"1 Prompt (Normal)"}),e.jsx("span",{children:"15 Prompts (Heavy Bombing)"}),e.jsx("span",{children:"30 Prompts (Extreme Fatigue)"})]})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-bold text-white",children:"Enforce Number Matching"}),e.jsx("div",{className:"text-[11px] text-slate-400",children:"User must enter 2-digit number shown on PC screen"})]}),e.jsx("button",{onClick:()=>F(!p),className:r("px-4 py-1.5 rounded-lg text-xs font-bold transition-colors",p?"bg-emerald-600 text-white":"bg-slate-800 text-slate-400 hover:text-white"),children:p?"ENABLED ✔":"DISABLED ❌"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Compromise Probability"}),e.jsx("span",{className:"font-mono text-lg font-extrabold text-rose-400",children:m.compromiseRisk})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed bg-slate-900 p-3.5 rounded-lg border border-slate-800",children:m.explanation})]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg md:text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," Studio 3: Adaptive Contextual Step-Up MFA Engine"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Simulate risk-based authentication triggers for high-value banking and municipal disbursements in Indian Rupees (₹)."})]}),e.jsxs("div",{className:r("px-3 py-1 rounded-full text-xs font-bold border",u.badgeColor),children:["Risk Score: ",u.score,"/100"]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex justify-between text-xs font-bold text-slate-300",children:[e.jsx("span",{children:"Disbursement Amount:"}),e.jsxs("span",{className:"font-mono text-emerald-400",children:["₹",o.toLocaleString("en-IN")]})]}),e.jsx("input",{type:"range",min:"10000",max:"5000000",step:"50000",value:o,onChange:t=>P(Number(t.target.value)),className:"w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"})]}),e.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800 text-xs",children:[e.jsxs("label",{className:"flex items-center justify-between p-2 bg-slate-900 rounded-lg border border-slate-800 cursor-pointer",children:[e.jsx("span",{children:"Unrecognized New Device Hardware"}),e.jsx("input",{type:"checkbox",checked:A,onChange:t=>I(t.target.checked),className:"accent-indigo-500 w-4 h-4"})]}),e.jsxs("label",{className:"flex items-center justify-between p-2 bg-slate-900 rounded-lg border border-slate-800 cursor-pointer",children:[e.jsx("span",{children:"Off-Hours Session (01:00 AM - 05:00 AM IST)"}),e.jsx("input",{type:"checkbox",checked:b,onChange:t=>E(t.target.checked),className:"accent-indigo-500 w-4 h-4"})]}),e.jsxs("label",{className:"flex items-center justify-between p-2 bg-slate-900 rounded-lg border border-slate-800 cursor-pointer",children:[e.jsx("span",{children:"Tor Anonymizer / High-Risk IP Origin"}),e.jsx("input",{type:"checkbox",checked:y,onChange:t=>O(t.target.checked),className:"accent-rose-500 w-4 h-4"})]})]})]}),e.jsx("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4 flex flex-col justify-between",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Adaptive Policy Enforcement Decision"}),e.jsx("div",{className:"p-3.5 bg-slate-900 rounded-lg border border-slate-800 text-xs md:text-sm font-semibold text-white",children:u.policyAction}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-[10px] font-bold text-slate-500 uppercase",children:"Active Risk Triggers:"}),u.triggers.length>0?e.jsx("ul",{className:"space-y-1 text-xs text-amber-300",children:u.triggers.map((t,s)=>e.jsxs("li",{className:"flex items-center gap-1.5",children:[e.jsx("span",{children:"•"})," ",t]},s))}):e.jsx("div",{className:"text-xs text-slate-500",children:"Zero anomalous risk indicators detected."})]})]})})]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg md:text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," Studio 4: Regional SOC Incident Drills (West Bengal)"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Case studies of high-assurance MFA deployments and incident mitigation across regional infrastructure."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(T).map(t=>e.jsx("button",{onClick:()=>j(t),className:r("px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200",k===t?"bg-indigo-600 text-white shadow-lg shadow-indigo-950":"bg-slate-950 text-slate-400 hover:text-white border border-slate-800"),children:t==="barrackpore_treasury"?"Barrackpore Treasury":t==="kolkata_fintech_number_matching"?"Kolkata FinTech":"Ichapur Adaptive IAM"},t))})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-base font-bold text-white",children:l.title}),e.jsx("span",{className:"text-xs text-indigo-400 font-mono bg-indigo-950 px-3 py-1 rounded-full border border-indigo-800",children:l.location})]}),e.jsxs("div",{className:"text-xs text-slate-400",children:[e.jsx("strong",{className:"text-slate-300",children:"Lead SecOps Engineers: "})," ",l.engineers]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-rose-400 uppercase text-[10px] tracking-wider block",children:"Threat Vector"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:l.threatScenario})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-indigo-400 uppercase text-[10px] tracking-wider block",children:"Architectural Defense"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:l.solution})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-emerald-400 uppercase text-[10px] tracking-wider block",children:"Forensic Outcome"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:l.outcome})]})]})]})]}),e.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-900/40 rounded-2xl p-6 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Misconceptions"]}),e.jsxs("ul",{className:"space-y-3 text-xs text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Conflating Multi-Step with Multi-Factor:"})," Requiring Password + PIN is 1FA (both are Knowledge factors) and vulnerable to single-point phishing."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Relying on SMS OTP for High-Value Operations:"})," SMS is unencrypted and trivially intercepted via SIM swapping and SS7 routing flaws."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Ignoring MFA Fatigue Attacks:"})," Using simple push notifications without Number Matching allows attackers to prompt-bomb victims until they tap Approve."]})]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-900/40 rounded-2xl p-6 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🛡️"})," Best Practices & NIST Guidelines"]}),e.jsxs("ul",{className:"space-y-3 text-xs text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Mandate FIDO2 Hardware Keys (AAL3):"})," Origin-bound public-key cryptography provides 100% immunity against AitM reverse-proxy phishing."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Enforce Number Matching & Context Prompts:"})," Require users to enter on-screen numbers into authenticator apps along with location metadata."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Deploy Continuous Adaptive Risk (CARTA):"})," Continuously re-evaluate session risk and trigger Step-Up MFA on anomalous behavior."]})]})]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-2 text-indigo-400 font-bold text-base border-b border-slate-800 pb-3",children:[e.jsx("span",{children:"💡"})," Instructor Hints & Retention Checklist"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300",children:[e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-indigo-300",children:"Think About:"}),e.jsx("p",{className:"leading-relaxed",children:"Why does an Evilginx reverse proxy fail against FIDO2 WebAuthn keys? Because the browser cryptographically binds the authentication signature to the exact domain in the URL bar (`bank.com`), causing the phishing server (`evil-bank.net`) to produce an invalid signature!"})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-emerald-300",children:"Student Checklist:"}),e.jsxs("ul",{className:"space-y-1.5 list-disc list-inside text-slate-400",children:[e.jsx("li",{children:"True MFA mathematically requires $\\ge 2$ independent factor domains."}),e.jsx("li",{children:"NIST AAL1 = 1FA, AAL2 = Software MFA, AAL3 = Hardware Phishing-Resistant MFA."}),e.jsx("li",{children:"Number Matching eliminates MFA prompt-bombing fatigue attacks."}),e.jsx("li",{children:"Adaptive MFA calculates risk scores before triggering Step-Up challenges."})]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 rounded-lg bg-indigo-950 border border-indigo-800 text-indigo-400 text-lg",children:"🐍"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"Hands-on MFA Orchestration & Fatigue Engine Script"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Standalone Python script simulating NIST AAL assessments, MFA prompt bombing, and adaptive step-up risk calculations"})]})]}),e.jsx(D,{fileModule:U,title:"mfa_orchestration_engine.py",highlightLines:[25,45,65,85,105]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(_,{title:"Multi-Factor Authentication (MFA / 2FA) Fundamentals FAQs",questions:L})}),e.jsx(C,{note:"For your BCA BCAC703 examination: Clearly define the three independent authentication factor domains (Knowledge, Possession, Inherence). Highlight why Password + PIN is NOT True 2FA. Be ready to explain NIST SP 800-63B Authenticator Assurance Levels (AAL1, AAL2, AAL3) and why FIDO2 cryptographic origin binding provides phishing resistance against Adversary-in-the-Middle (AitM) reverse proxies."}),e.jsx("section",{className:"space-y-4",children:e.jsx(R,{content:B,title:"Topic 3: Multi-Factor Authentication Fundamentals Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 3 Note",downloadFileName:"topic3_mfa_fundamentals_note.txt"})})]})})};export{$ as default};
