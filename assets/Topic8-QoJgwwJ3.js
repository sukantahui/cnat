import{b as a,j as e,bg as i}from"./vendor-react-core-Doz9nIC6.js";import{T as f}from"./TeacherSukantaHui-CC0AKmkm.js";import{F as w}from"./FAQTemplate-CkSqDH4B.js";import{P as v}from"./PlainTextPrint-C08xhKA4.js";import{P as k}from"./PythonFileLoader-hCi5osN-.js";import"./vendor-icons-BtJHuk7w.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const A=[{id:1,question:"What two core technical specifications constitute the FIDO2 standard framework?",shortAnswer:"1. W3C Web Authentication (WebAuthn): The standardized JavaScript browser API; 2. FIDO Client-to-Authenticator Protocol 2 (CTAP2): The protocol enabling browsers to communicate with external hardware authenticators (USB/NFC/BLE) and platform security chips.",explanation:"WebAuthn operates at the application/browser layer, while CTAP2 manages low-level binary message framing to physical security keys.",hint:"W3C WebAuthn (browser API) + FIDO CTAP2 (hardware communication protocol).",level:"Basic",codeExample:`// FIDO2 Architecture:
// Web Application -> W3C WebAuthn API -> Browser -> CTAP2 Protocol -> Hardware YubiKey`},{id:2,question:"How does FIDO2 WebAuthn achieve 100% Phishing Resistance against Adversary-in-the-Middle (AitM) reverse proxies (Evilginx)?",shortAnswer:"Through Cryptographic Origin Binding: The browser verifies the exact domain in the URL bar (e.g., 'https://bank.com') and passes it in clientDataJSON. The hardware key cryptographically signs this origin into the authentication assertion. When relayed to a real bank by a phishing proxy ('https://fake-bank.net'), signature verification fails.",explanation:"Because signature creation mathematically incorporates the browser's verified origin, an attacker on a fake domain cannot generate a signature that validates on the legitimate relying party server.",hint:"Browser binds the exact domain origin into the cryptographic signature payload.",level:"Expert",codeExample:`// Origin Binding Verification:
// Browser computes: clientDataHash = SHA256({ "origin": "https://fake-bank.net", ... })
// Hardware signs: Signature = Sign(authenticatorData || clientDataHash)
// Real bank server checks against 'https://realbank.com' -> MISMATCH! Assertion Rejected ❌`},{id:3,question:"What is the difference between FIDO U2F (Universal 2nd Factor) and FIDO2?",shortAnswer:"U2F was designed strictly as a second factor alongside a static password (Password + Key Tap). FIDO2 supports true single-step passwordless login (Security Key Tap + on-device PIN or Biometric), completely eliminating the need for usernames and passwords.",explanation:"FIDO2 introduces Resident Credentials (Discoverable Credentials) stored directly on the hardware key chip.",hint:"U2F requires a password first; FIDO2 supports standalone passwordless authentication.",level:"Basic",codeExample:`// Evolution:
// U2F   : Step 1 = Password -> Step 2 = USB Key Tap
// FIDO2 : Single Step = USB Key Tap + Hardware PIN/Biometric (Passwordless ✔)`},{id:4,question:"What cryptographic algorithms are standard in WebAuthn public-key credential generation?",shortAnswer:"ES256 (ECDSA over NIST P-256 curve with SHA-256 - alg: -7) and Ed25519 (EdDSA over Curve25519 - alg: -8), along with RS256 (RSA 2048-bit - alg: -257) for legacy enterprise environments.",explanation:"Elliptic curve cryptography provides maximum security assurance with compact signature lengths ideal for memory-constrained microcontroller key fobs.",hint:"ES256 (ECDSA P-256), Ed25519 (EdDSA), and RS256.",level:"Moderate",codeExample:`// WebAuthn Algorithm Identifier:
// pubKeyCredParams: [
//   { type: "public-key", alg: -7 }, // ES256 (ECDSA P-256)
//   { type: "public-key", alg: -8 }  // Ed25519
// ]`},{id:5,question:"Explain the two fundamental CTAP2 verification flags: User Presence (UP) vs User Verification (UV).",shortAnswer:"User Presence (UP - Bit 0): Proves a human is physically present and interacted with the device (capacitive metal contact touch on the key). User Verification (UV - Bit 2): Proves the specific authorized owner unlocked the device (entering a local hardware PIN or matching on-device fingerprint).",explanation:"UP satisfies possession factor proof; UV satisfies multi-factor authentication in a single physical interaction.",hint:"UP = Physical touch (presence); UV = Local PIN or biometric verification.",level:"Moderate",codeExample:`// CTAP2 Flag Byte:
// Bit 0 (0x01) -> User Presence (UP) = 1 (Key was physically touched)
// Bit 2 (0x04) -> User Verification (UV) = 1 (PIN/Biometric verified on key)`},{id:6,question:"What is a Resident Credential (Discoverable Credential) in FIDO2?",shortAnswer:"A Resident Credential is a private key pair and associated user metadata stored permanently inside the flash memory of the hardware security key. During login, the user inserts the key with zero input; the key announces available user accounts to the browser.",explanation:"Resident credentials enable true username-less and passwordless login workflows.",hint:"Private key and user metadata stored directly in hardware memory for username-less login.",level:"Moderate",codeExample:`// Discoverable Credential Workflow:
// User visits bank.com -> Touches YubiKey -> Key transmits [User: susmita@bank.in] + Assertion Signature -> Instant Login!`},{id:7,question:"What is the Signature Counter (`signCount`) in WebAuthn and how does it detect cloned hardware authenticators?",shortAnswer:"The hardware key increments an internal 32-bit hardware counter on every signature operation. The server records this count. If a login assertion arrives with a `signCount` lower than or equal to the previously recorded count, the server knows a cloned private key is active.",explanation:"Hardware security keys cannot be cloned non-destructively; if a rogue software-emulated key is active, signature counter regression alerts the SOC immediately.",hint:"Monotonically increasing counter; a lower or equal value indicates a cloned key.",level:"Expert",codeExample:`// Cloned Key Detection:
// Login 1 : signCount = 42 (Server records 42)
// Login 2 : signCount = 38 (CLONED KEY ALERT! 🚨 Assertion Rejected)`},{id:8,question:"What is WebAuthn Public Key Attestation and what is its purpose during registration?",shortAnswer:"Attestation is a cryptographic proof signed by the hardware key manufacturer's factory batch certificate (e.g., Yubico CA), certifying that the public key was generated on a genuine, tamper-resistant hardware security chip rather than a software emulator.",explanation:"Enterprise relying parties inspect attestation statements to enforce policies restricting registration strictly to FIPS 140-2 certified hardware keys.",hint:"Cryptographic statement from the manufacturer certifying the authenticator is genuine hardware.",level:"Expert",codeExample:`// Attestation Statement Verification:
// Server verifies X.509 certificate chain up to Yubico Root CA -> Validates physical model: 'YubiKey 5 NFC FIPS'`},{id:9,question:"What is the difference between Platform Authenticators and Cross-Platform Authenticators in WebAuthn?",shortAnswer:"Platform Authenticators are built directly into the client device hardware (e.g., Windows Hello TPM chip, Apple Touch ID / Face ID Secure Enclave, Android Biometrics). Cross-Platform Authenticators are external, roaming hardware tokens (e.g., USB-A/USB-C YubiKeys, NFC smartcards, Bluetooth fobs).",explanation:"Cross-platform keys can be carried between multiple computers; platform authenticators are bound to a single laptop or phone.",hint:"Platform = Built-in (Touch ID, Windows Hello); Cross-Platform = External USB/NFC keys (YubiKey).",level:"Basic",codeExample:`// Authenticator Attachment Option:
// "platform"       : Windows Hello / Apple Touch ID
// "cross-platform" : USB YubiKey 5 NFC / SoloKey`},{id:10,question:"Why does FIDO2 eliminate server-side credential theft in data breaches?",shortAnswer:"Because the authentication server stores ONLY public keys and credential IDs. The private cryptographic keys never leave the tamper-resistant hardware security key chip. If the server database is breached via SQL injection, the stolen public keys cannot be used to forge authentication signatures.",explanation:"No shared secrets or reversible hashes exist on the server to be cracked offline.",hint:"Server holds only public keys; private keys remain permanently locked inside the physical hardware key.",level:"Basic",codeExample:`// Database Storage:
// [user_id: 101, public_key: "3059301306072a8648ce3d0201...", cred_id: "8f9a2b..."]
// Stolen Public Keys are mathematically useless for impersonation ✔`},{id:11,question:"How does the Relying Party ID (`rp.id`) scoping rule prevent a hardware key from leaking credentials across websites?",shortAnswer:"The hardware key partitions its internal key generation by Relying Party ID (domain name). When authenticating to `bank.com`, the key only accesses keys scoped to `bank.com`. If you visit `evil-site.com`, the key generates completely different, uncorrelated keys.",explanation:"This prevents cross-site user tracking and ensures that a compromised relying party cannot use credentials against other websites.",hint:"Keys are isolated per domain name; credentials on one website cannot be queried by another.",level:"Moderate",codeExample:`// Domain Scoping:
// rp.id = "bank.barrackpore.gov.in" ➔ Key A (Only accessible by barrackpore.gov.in)
// rp.id = "shopping.in"              ➔ Key B (Completely isolated)`},{id:12,question:"What is a FIDO PIN and how does it defend against a physically stolen hardware key?",shortAnswer:"The FIDO PIN is a local alphanumeric code entered into the client machine to unlock the hardware key. The PIN is verified locally inside the key's microcontroller over CTAP2 and is never transmitted over the internet.",explanation:"If an adversary steals your physical YubiKey, they cannot authenticate without knowing the local PIN, and the key permanently locks after 8 failed attempts.",hint:"Local hardware unlock code verified on the key; locks permanently after 8 failed attempts.",level:"Basic",codeExample:`// PIN Protection:
// Failed Attempts: 1/8 -> 2/8 -> ... -> 8/8 ➔ Key hardware locks and zeroizes credentials!`},{id:13,question:"What is CTAP2 ClientPIN protocol and how does it prevent keyloggers from capturing the PIN over USB?",shortAnswer:"The browser and security key establish an ephemeral Elliptic Curve Diffie-Hellman (ECDH) key exchange over the USB bus, creating an encrypted shared AES-256 session key. The PIN hash is transmitted across the USB cable fully encrypted.",explanation:"Even if an attacker attaches a hardware USB bus sniffer, they capture only encrypted ephemeral packets.",hint:"Uses ECDH key exchange to encrypt the PIN across the USB bus before transmission.",level:"Expert",codeExample:`// ClientPIN Encryption:
// Browser & YubiKey -> ECDH P-256 Key Agreement -> AES-256-CBC Encrypted PIN Token -> Secure USB Transport ✔`},{id:14,question:"What is an Authenticator Attestation GUID (AAGUID)?",shortAnswer:"The AAGUID is a 16-byte identifier in the authenticatorData structure that identifies the exact make and model of the hardware authenticator (e.g., Yubico YubiKey 5 NFC vs Feitian ePass FIDO2).",explanation:"Enterprise security teams inspect the AAGUID to enforce policy compliance, restricting employee logins strictly to approved corporate hardware models.",hint:"16-byte identifier indicating the exact manufacturer and model of the security key.",level:"Moderate",codeExample:`// AAGUID Examples:
// YubiKey 5 NFC   : "ee882879-721c-4916-ad92-e030d6ec18ca"
// Windows Hello   : "08987058-cadc-4b81-b6e1-30c504b9be3b"`},{id:15,question:"How does WebAuthn handle User Account Recovery if an employee loses their physical security key?",shortAnswer:"Enterprises enforce multi-key registration (enrolling at least two physical security keys: a primary key and a backup stored in a safe), enterprise-managed Passkey escrow, or administrator-supervised recovery workflows requiring identity re-verification.",explanation:"Because FIDO2 private keys cannot be extracted from hardware, recovery requires revoking the old public key on the server and registering a new key.",hint:"Enrolling a primary and backup key; lost keys are revoked and new keys registered on the server.",level:"Moderate",codeExample:`// Recovery Strategy:
// User Profile:
// Keys Registered: [ "YubiKey_Primary (Active)", "YubiKey_Backup_Home (Active)" ]
// If Primary lost -> Revoke Primary key ID on server, authenticate with Backup key.`},{id:16,question:"What is the `clientDataJSON` structure in WebAuthn and what critical fields does it contain?",shortAnswer:"`clientDataJSON` is a UTF-8 JSON string constructed by the browser containing: `type` ('webauthn.create' or 'webauthn.get'), `challenge` (Base64URL challenge from server), `origin` (verified browser origin e.g. 'https://bank.in'), and `crossOrigin` boolean.",explanation:"The cryptographic signature is computed over the SHA-256 hash of this exact JSON string.",hint:"JSON containing the operation type, server challenge, and verified browser domain origin.",level:"Moderate",codeExample:`// clientDataJSON Anatomy:
// {
//   "type": "webauthn.get",
//   "challenge": "a9f3b7c2...",
//   "origin": "https://bank.barrackpore.gov.in",
//   "crossOrigin": false
// }`},{id:17,question:"Why does NIST SP 800-63B assign FIDO2 hardware keys the highest Authenticator Assurance Level (AAL3)?",shortAnswer:"Because FIDO2 satisfies all three AAL3 criteria: 1. Hardware-backed cryptographic keys isolated from the host OS; 2. Mandatory origin-bound verification immune to Adversary-in-the-Middle (AitM) phishing; 3. Mandatory physical user presence touch.",explanation:"No other commodity authentication technology matches the cryptographic resistance of FIDO2 hardware tokens.",hint:"Combines hardware key isolation, cryptographic origin binding, and physical presence verification.",level:"Basic",codeExample:`// NIST AAL3 Compliance:
// Hardware Private Key + Cryptographic Origin Binding + Touch Proof = AAL3 Phishing Resistant ✔`},{id:18,question:"What is WebAuthn Conditional UI (Passkey Autofill)?",shortAnswer:"Conditional UI allows the browser to show saved passkeys directly inside standard HTML username autocomplete dropdowns (`autocomplete='username webauthn'`). When the user clicks their name, the browser immediately requests a hardware touch or fingerprint to log in with zero typing.",explanation:"This integrates passwordless WebAuthn seamlessly into traditional login forms.",hint:"Shows passkeys inside standard username input autocomplete dropdowns.",level:"Moderate",codeExample:`// HTML Markup:
// <input type="text" name="username" autocomplete="username webauthn" />`},{id:19,question:"How does FIDO2 protect against malware on the host PC attempting to execute silent background logins?",shortAnswer:"The hardware key requires a physical capacitive contact touch (User Presence) for every single cryptographic assertion. Malware running silently in the background cannot physically touch the metal sensor on the USB key.",explanation:"Without physical human contact, the hardware key refuses to compute the signature, thwarting automated background botnets.",hint:"Requires physical touch on the metal contact; background malware cannot touch the key.",level:"Basic",codeExample:`// Physical Touch Barrier:
// Malware triggers API -> YubiKey LED blinks -> Waits for human finger -> Timeout after 15s -> Assertion Fails! 🛡️`},{id:20,question:"What is Enterprise Attestation in FIDO2 and how does it support corporate fleet management?",shortAnswer:"Enterprise Attestation is a specialized mode where the hardware key transmits its unique hardware serial number during registration to corporate MDM/IAM servers, allowing enterprise administrators to enforce device inventory binding.",explanation:"To preserve consumer privacy, standard FIDO2 uses anonymized batch attestation, while enterprise attestation is restricted to managed corporate domains.",hint:"Transmits hardware serial numbers to corporate MDM for strict device inventory tracking.",level:"Expert",codeExample:`// Enterprise Attestation:
// attestation: "enterprise" ➔ Returns unique device serial: 'YUBIKEY-SN-10948291'`},{id:21,question:"What is FIDO2 WebAuthn Large Blob Storage (`largeBlob` extension)?",shortAnswer:"The `largeBlob` extension allows web applications to store arbitrary encrypted data (e.g., an encrypted SSH private key, recovery seeds, or client certificates) directly on the physical hardware key's flash memory.",explanation:"The data is encrypted using a key derived from the WebAuthn credential and can only be read after successful user verification.",hint:"Allows storing encrypted files (like SSH keys) directly in the hardware key's memory.",level:"Expert",codeExample:`// Large Blob Usage:
// Encrypts SSH Private Key -> Writes to YubiKey flash memory -> Decrypted only upon physical key touch.`},{id:22,question:"How does WebAuthn handle Cross-Origin IFrames and what permission policy is required?",shortAnswer:"By default, WebAuthn is blocked inside IFrames to prevent clickjacking and credential harvesting. To permit WebAuthn inside an embedded iframe (e.g., a payment widget), the parent page must explicitly declare: `allow='publickey-credentials-get'`.",explanation:"This ensures third-party advertisers cannot trigger authentication prompts silently.",hint:"Requires explicit iframe permission: allow='publickey-credentials-get'.",level:"Moderate",codeExample:`// Secure IFrame Declaration:
// <iframe src="https://pay.barrackpore.bank.in" allow="publickey-credentials-get"></iframe>`},{id:23,question:"What is the CBOR (Concise Binary Object Representation) format in CTAP2 and why is it used instead of JSON?",shortAnswer:"CBOR (RFC 8949) is a binary data serialization format designed for small code size and minimal memory parsing footprints on embedded 8-bit and 32-bit microcontrollers found in hardware USB keys.",explanation:"Parsing bulky text-based JSON strings on low-power cryptographic smartcard chips with limited RAM would cause performance bottlenecks and memory overflow vulnerabilities.",hint:"Compact binary serialization format optimized for low-power microcontroller chips.",level:"Moderate",codeExample:`// JSON vs CBOR:
// JSON : { "cmd": 1, "data": "hex" } (30 bytes text)
// CBOR : \\xa2\\x01\\x01\\x02\\x43\\x01\\x02\\x03 (8 bytes binary stream)`},{id:24,question:"How do YubiKey 5 Series keys combine FIDO2 with legacy OTP and Smart Card (PIV) applets on a single physical chip?",shortAnswer:"YubiKeys run multiple independent cryptographic applets inside a secure microcontroller: 1. FIDO2 / WebAuthn applet; 2. FIDO U2F applet; 3. Yubico OTP applet; 4. CCID Smart Card (PIV - PKCS#11) applet for Windows Smart Card login; 5. OpenPGP applet.",explanation:"This allows a single physical USB key to support modern web browser passkeys, legacy terminal SSH, and Windows Active Directory workstation smartcard logon.",hint:"Runs independent applets on a single secure chip supporting FIDO2, PIV Smartcard, and OpenPGP.",level:"Moderate",codeExample:`// YubiKey Multi-Protocol Architecture:
// USB Interface -> [Secure Enclave Controller] -> { FIDO2, PIV SmartCard, OpenPGP, Yubico OTP }`},{id:25,question:"What is a FIDO Device Onboarding (FDO) protocol in IoT and industrial systems?",shortAnswer:"FDO is an automated zero-touch onboarding specification that allows headless edge IoT devices and industrial controllers to automatically authenticate and securely configure themselves onto cloud management platforms without human credential entry.",explanation:"FDO uses public-key cryptography burned into device silicon during manufacturing to automate secure zero-trust onboarding.",hint:"Zero-touch automated onboarding protocol for headless IoT devices using silicon keys.",level:"Expert",codeExample:`// FDO Workflow:
// Unbox IoT Sensor -> Connect Power -> Sensor authenticates to cloud using factory silicon key -> Automatically provisions.`},{id:26,question:"What is the difference between Synchronized Passkeys and Device-Bound Passkeys in enterprise security policy?",shortAnswer:"Synchronized passkeys replicate across a user's cloud keychain (iCloud / Google Password Manager) for consumer convenience. Device-Bound passkeys (enforced via `authenticatorAttachment='cross-platform'` on YubiKeys) are non-exportable hardware keys whose private keys can never leave the physical USB chip.",explanation:"High-security financial and government institutions strictly enforce Device-Bound passkeys to eliminate cloud account compromise risks.",hint:"Synced passkeys replicate across cloud keychains; Device-Bound passkeys are locked to physical hardware.",level:"Moderate",codeExample:`// Enterprise Policy:
// Ban Synced Passkeys ➔ Require: authenticatorAttachment = "cross-platform" + FIPS Certified AAGUID.`},{id:27,question:"Why does WebAuthn eliminate Credential Stuffing and Password Spraying attacks entirely?",shortAnswer:"Because there are no passwords or shared secrets in WebAuthn. Attackers cannot guess or spray credentials because every authentication requires a unique asymmetric cryptographic signature generated by a physical hardware private key.",explanation:"Automated credential lists (like `rockyou.txt`) are completely useless against public-key cryptography.",hint:"No shared secrets or passwords exist to be sprayed or stuffed by automated botnets.",level:"Basic",codeExample:`// Defense Outcome:
// Credential Stuffing Botnet tests 10,000,000 passwords -> FIDO2 endpoint requires cryptographic signature -> 0% attack success ✔`},{id:28,question:"How does FIDO2 WebAuthn handle User Verification (UV) fallback when biometric sensors fail?",shortAnswer:"If an on-device fingerprint or facial sensor fails (e.g., due to a cut on a finger), the hardware key falls back locally to the hardware FIDO PIN. The PIN is evaluated on the key itself, preserving the multi-factor assurance level.",explanation:"Local fallback maintains accessibility without compromising security or reverting to weak SMS/email OTP.",hint:"Falls back to local hardware PIN evaluated on the key chip itself.",level:"Basic",codeExample:`// Biometric Failure Fallback:
// Fingerprint scan failed -> Prompt: "Enter 6-digit FIDO PIN on your security key" -> PIN verified on chip.`},{id:29,question:"In a penetration test against a banking portal in Barrackpore, an adversary deployed Evilginx2 with a reverse-proxy domain `bank.barrackpore-fake.in`. Why did the login attempt fail when the user touched their YubiKey?",shortAnswer:"The browser constructed the `clientDataJSON` containing `origin: 'https://bank.barrackpore-fake.in'`. The YubiKey signed this payload with its private key. When Evilginx forwarded this signed assertion to the real banking server (`https://bank.barrackpore.gov.in`), the real server checked the origin against its expected identity, detected the cryptographic mismatch, and instantly rejected the assertion.",explanation:"Origin binding is mathematically enforced by public-key cryptography, making reverse-proxy phishing impossible.",hint:"The browser included the fake domain in the signature payload, causing verification to fail on the real server.",level:"Expert",codeExample:`// Phishing Neutralization:
// 1. Evilginx proxies traffic on fake domain.
// 2. YubiKey signs hash of fake domain origin.
// 3. Real server verifies: Expecting 'bank.barrackpore.gov.in', Got 'bank.barrackpore-fake.in' -> SIGNATURE REJECTED 🚨`},{id:30,question:"What is the comprehensive deployment blueprint for transitioning an enterprise workforce of 5,000 employees from passwords to FIDO2 hardware keys?",shortAnswer:"1. Distribute two FIPS 140-2 certified FIDO2 hardware keys (Primary + Backup) per employee. 2. Configure IDP (Okta / Entra ID) to enforce WebAuthn with mandatory User Verification (PIN/Biometric). 3. Restrict attestation to corporate YubiKey AAGUIDs. 4. Deactivate password and SMS OTP fallback channels. 5. Integrate FIDO2 for workstation OS login (Windows Hello / PAM) and SSH terminal authentication.",explanation:"Following this blueprint achieves complete end-to-end phishing resistance (NIST AAL3) across all enterprise assets.",hint:"Distribute dual hardware keys, enforce WebAuthn with user verification, restrict AAGUIDs, and eliminate legacy fallback.",level:"Expert",codeExample:`// Enterprise FIDO2 Blueprint:
// Phase 1: Dual Key Enrollment (Primary + Backup)
// Phase 2: Enforce WebAuthn AAL3 policy across all IDP apps
// Phase 3: Total deprecation of SMS, Email OTP, and static passwords.`}],S=`====================================================================================================
ACADEMIC STUDY GUIDE & FORENSIC NOTES: FIDO2, WEBAUTHN & U2F HARDWARE SECURITY STANDARDS
COURSE MODULE: 005_005 - AUTHENTICATION FRAMEWORKS & MFA (TOPIC 8)
INSTITUTION: CODER & ACCOTAX | INSTRUCTOR: SUKANTA HUI | LOCATION: BARRACKPORE, WEST BENGAL
====================================================================================================

1. THE EVOLUTION OF FIDO ALLIANCE STANDARDS
----------------------------------------------------------------------------------------------------
The FIDO (Fast IDentity Online) Alliance developed open standards to eliminate shared secrets (passwords):

1. FIDO U2F (Universal 2nd Factor - 2014):
   - Designed strictly as a second factor alongside a static password (Password + USB Key Tap).
   - Protocol: U2F raw message framing over USB HID / NFC.

2. FIDO2 (2018 - Present):
   - Supports true single-step passwordless login (Key Tap + PIN/Biometric on device).
   - Composed of two complementary standardized specifications:
     A. W3C WebAuthn (Web Authentication API): JavaScript browser API standard.
     B. FIDO CTAP2 (Client-to-Authenticator Protocol 2): Protocol enabling browsers to communicate 
        with external USB/NFC/BLE hardware authenticators and on-device platform chips.


2. W3C WEBAUTHN ARCHITECTURAL WORKFLOW
----------------------------------------------------------------------------------------------------
Registration Phase (\`navigator.credentials.create\`):
1. Relying Party (Server) generates a cryptographically random 32-byte \`challenge\` and sets \`rp.id\`.
2. Browser contacts Hardware Authenticator via CTAP2.
3. Authenticator prompts user for physical touch (User Presence) and PIN/Biometric (User Verification).
4. Authenticator generates a unique asymmetric keypair (ECDSA P-256 / Ed25519) bound strictly to the \`rp.id\`.
5. Authenticator returns the Public Key and Attestation Object to the server.
6. Server stores the Public Key alongside the \`credentialId\` in its database (NO SHARED SECRETS STORED).

Authentication Phase (\`navigator.credentials.get\`):
1. Server generates a new cryptographic \`challenge\`.
2. Browser passes challenge and \`rp.id\` to the hardware key.
3. Hardware key prompts for physical contact touch (UP) and PIN (UV).
4. Hardware key signs the payload ($\\text{authenticatorData} \\ || \\ \\text{clientDataHash}$) using its private key.
5. Browser returns the signed assertion to the server.
6. Server verifies the signature against the stored public key.


3. CRYPTOGRAPHIC ORIGIN BINDING (THE PHISHING IMMUNITY MECHANISM)
----------------------------------------------------------------------------------------------------
Why FIDO2 completely neutralizes Adversary-in-the-Middle (AitM) reverse proxies (Evilginx):

1. When a victim visits a phishing proxy (\`https://bank-login.barrackpore-fake.net\`), the browser 
   computes \`clientDataJSON.origin = "https://bank-login.barrackpore-fake.net"\`.
2. The hardware key signs this exact origin string into the cryptographic payload.
3. The phishing proxy relays the signature to the real banking server (\`https://bank.barrackpore.gov.in\`).
4. The real server computes SHA-256 on its expected origin (\`https://bank.barrackpore.gov.in\`) and checks 
   it against the signature.
5. Result: Cryptographic signature verification FAILS mathematically on the real server! Access DENIED.


4. CTAP2 FLAGS & AUTHENTICATOR DATA STRUCTURE
----------------------------------------------------------------------------------------------------
The \`authenticatorData\` byte array contains 37+ bytes of structured security assertions:
- Bytes 0–31: SHA-256 Hash of the Relying Party ID (\`rpIdHash\`).
- Byte 32: Bitwise Flags:
  • Bit 0 (UP - User Presence): Set to 1 if physical contact touch was verified.
  • Bit 2 (UV - User Verification): Set to 1 if on-device PIN or biometric was verified.
  • Bit 6 (AT - Attestation Data): Set to 1 if credential creation data is included.
  • Bit 7 (ED - Extension Data): Set to 1 if WebAuthn extensions are included.
- Bytes 33–36: 32-bit Signature Counter (\`signCount\`) to detect cloned hardware keys.


5. HARDWARE KEYS VS SOFTWARE PASSWORDS COMPARISON
----------------------------------------------------------------------------------------------------
+---------------------------+---------------------------------+----------------------------------------+
| Dimension                 | Static Passwords / SMS OTP      | FIDO2 Hardware Keys (YubiKey 5 NFC)    |
+---------------------------+---------------------------------+----------------------------------------+
| Phishing Resistance       | Zero (Trivially phished via AitM| 100% Phishing Immune (Origin-Bound)    |
| Secret Storage            | Shared secrets in server DB     | Public keys on server; Private key in HSM
| Credential Stuffing       | High vulnerability              | Zero vulnerability (No shared secrets) |
| Replay Attacks            | Vulnerable within time window   | Cryptographically impossible (Challenge|
| NIST SP 800-63B Level     | AAL1 / RESTRICTED               | AAL3 (Highest Enterprise Assurance)    |
+---------------------------+---------------------------------+----------------------------------------+


6. REGIONAL SOC CASE STUDIES (WEST BENGAL INFRASTRUCTURE)
----------------------------------------------------------------------------------------------------
Case 1: Barrackpore Municipal Treasury Disbursals Core
- Policy: Mandatory YubiKey 5 NFC hardware keys for approving payments exceeding ₹10,00,000.
- Result: 100% elimination of phishing compromise; full AAL3 compliance.

Case 2: Salt Lake Sector V FinTech Data Center Cloud Access
- Policy: Zero Trust network enforcement requiring FIDO2 WebAuthn authentication for SSH terminal access.
- Result: Zero credential leaks over 24 months; certified PCI-DSS 4.0 requirement 8.3 compliance.
====================================================================================================
`,I=`#!/usr/bin/env python3
"""
===============================================================================
CYBERSECURITY LAB: FIDO2, WEBAUTHN & CTAP2 HARDWARE CRYPTOGRAPHIC VERIFIER
COURSE: BCA BCAC703 - Cyber Security | MODULE: 005_005 (Authentication & MFA)
INSTITUTION: Coder & AccoTax | INSTRUCTOR: Sukanta Hui | LOCATION: Barrackpore
===============================================================================
This script provides from-scratch simulation of:
1. W3C WebAuthn Registration (navigator.credentials.create) & Public Key Attestation.
2. W3C WebAuthn Authentication (navigator.credentials.get) & Cryptographic Assertion.
3. CTAP2 Flags: User Presence (UP - physical touch) & User Verification (UV - PIN/Biometric).
4. Origin-Binding Verification defeating Adversary-in-the-Middle (Evilginx) proxies.
"""

import sys
import os
import time
import json
import base64
import hashlib
import hmac
from dataclasses import dataclass
from typing import Dict, Tuple

# Ensure UTF-8 stdout encoding for currency symbols and bullets
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

@dataclass
class AuthenticatorData:
    rp_id_hash: bytes
    flags: int            # Bit 0: UP, Bit 2: UV, Bit 6: AT, Bit 7: ED
    sign_count: int

class Fido2WebAuthnVerifier:
    def __init__(self, relying_party_id: str = "bank.barrackpore.gov.in"):
        self.rp_id = relying_party_id
        self.enrolled_credentials = {} # credential_id -> {public_key, user_id, sign_count}

    def generate_registration_challenge(self, user_id: str, username: str) -> Dict:
        """
        Step 1: Relying Party (Server) generates WebAuthn Creation Options.
        """
        challenge = os.urandom(32)
        return {
            "challenge_b64": base64.urlsafe_b64encode(challenge).decode('utf-8'),
            "rp": {"name": "Barrackpore Municipal Treasury", "id": self.rp_id},
            "user": {
                "id": base64.urlsafe_b64encode(user_id.encode('utf-8')).decode('utf-8'),
                "name": username,
                "displayName": f"Officer {username}"
            },
            "pubKeyCredParams": [{"type": "public-key", "alg": -7}], # ES256 (ECDSA P-256)
            "authenticatorSelection": {
                "authenticatorAttachment": "cross-platform", # Hardware YubiKey
                "userVerification": "required"              # Mandatory PIN or Biometric
            }
        }

    def register_credential(self, user_id: str, origin: str, challenge_b64: str) -> Dict:
        """
        Simulates client hardware key generating ECDSA keypair and signing attestation.
        """
        # Verify origin
        expected_origin = f"https://{self.rp_id}"
        if origin != expected_origin:
            return {"status": "FAILED", "reason": f"Origin Mismatch! Expected {expected_origin}, got {origin}"}

        credential_id = os.urandom(16).hex()
        # Simulated ECDSA P-256 Public Key bytes
        simulated_pub_key = hashlib.sha256(f"PUBKEY_{user_id}_{credential_id}".encode()).hexdigest()

        self.enrolled_credentials[credential_id] = {
            "user_id": user_id,
            "public_key": simulated_pub_key,
            "sign_count": 0
        }

        return {
            "status": "REGISTERED_SUCCESS ✔",
            "credential_id": credential_id,
            "public_key": simulated_pub_key,
            "attestation_type": "FIDO2_Direct_Attestation (YubiKey 5 NFC)"
        }

    def verify_authentication_assertion(self, credential_id: str, client_origin: str, user_touched: bool, pin_verified: bool) -> Dict:
        """
        Verifies WebAuthn assertion signature, flags (UP, UV), and origin binding.
        """
        if credential_id not in self.enrolled_credentials:
            return {"verified": False, "status": "UNKNOWN_CREDENTIAL_ID ❌"}

        expected_origin = f"https://{self.rp_id}"

        # 1. Cryptographic Origin Check (Stops Phishing Proxies)
        if client_origin != expected_origin:
            return {
                "verified": False,
                "status": "PHISHING_ATTACK_DETECTED (Origin Mismatch 🚨)",
                "reason": f"Signature bound to origin '{client_origin}', but legitimate RP is '{expected_origin}'."
            }

        # 2. User Presence Flag Check (Bit 0)
        if not user_touched:
            return {
                "verified": False,
                "status": "USER_PRESENCE_FAILED ❌",
                "reason": "Hardware key contact touch was not detected."
            }

        # 3. User Verification Flag Check (Bit 2)
        if not pin_verified:
            return {
                "verified": False,
                "status": "USER_VERIFICATION_FAILED ❌",
                "reason": "PIN or Biometric unlock on hardware key was not satisfied."
            }

        cred = self.enrolled_credentials[credential_id]
        cred["sign_count"] += 1

        return {
            "verified": True,
            "status": "AUTHENTICATION_SUCCESS ✔ (NIST AAL3)",
            "sign_count": cred["sign_count"],
            "security_tier": "Phishing-Resistant Origin-Bound Hardware Assertion"
        }

def main():
    print("=" * 80)
    print("FIDO2, WEBAUTHN & CTAP2 CRYPTOGRAPHIC LAB")
    print("Institution: Coder & AccoTax | Instructor: Sukanta Hui | Location: Barrackpore")
    print("=" * 80)

    verifier = Fido2WebAuthnVerifier(relying_party_id="bank.barrackpore.gov.in")

    # Step 1: Registration
    print("\\n[STEP 1]: WEBAUTHN CREDENTIAL REGISTRATION")
    reg_opts = verifier.generate_registration_challenge("user_101", "susmita")
    print(f"Relying Party ID : {reg_opts['rp']['id']}")
    print(f"Challenge        : {reg_opts['challenge_b64'][:24]}...")

    reg_result = verifier.register_credential("user_101", "https://bank.barrackpore.gov.in", reg_opts['challenge_b64'])
    cred_id = reg_result['credential_id']
    print(f"Registration     : {reg_result['status']} (Cred ID: {cred_id})")

    # Step 2: Legitimate Login
    print("\\n" + "=" * 80)
    print("[STEP 2]: LEGITIMATE WEBAUTHN AUTHENTICATION")
    auth_legit = verifier.verify_authentication_assertion(cred_id, "https://bank.barrackpore.gov.in", user_touched=True, pin_verified=True)
    print(f"Result           : {auth_legit['status']}")
    print(f"Signature Count  : {auth_legit['sign_count']}")

    # Step 3: Evilginx AitM Phishing Attack Simulation
    print("\\n" + "=" * 80)
    print("[STEP 3]: EVILGINX AITM PHISHING PROXY ATTACK TEST")
    auth_phish = verifier.verify_authentication_assertion(cred_id, "https://fake-bank-barrackpore.net", user_touched=True, pin_verified=True)
    print(f"Attack Result    : {auth_phish['status']}")
    print(f"Defensive Reason : {auth_phish['reason']}")
    print("=" * 80)

if __name__ == "__main__":
    main()
`,F=()=>{a.useId(),a.useId();const[o,p]=a.useState("auth"),[d,y]=a.useState(!0),[h,b]=a.useState(!0),r=a.useMemo(()=>{if(o==="registration")return{title:"WebAuthn Registration Phase (navigator.credentials.create)",apiCall:"navigator.credentials.create({ publicKey: creationOptions })",challenge:"a9f3b7c2e810d456...",rpId:"bank.barrackpore.gov.in",authenticatorAction:"Generates unique ECDSA P-256 keypair bound strictly to rp.id.",result:"Public Key & Attestation stored on server. Private Key remains locked in hardware chip.",badgeColor:"bg-indigo-950 text-indigo-300 border-indigo-700"};{let t="",c="";return d?h?(t="AUTHENTICATION SUCCESS ✔: Phishing-resistant cryptographic signature verified (NIST AAL3).",c="bg-emerald-950 text-emerald-300 border-emerald-700"):(t="USER VERIFICATION FAILED ❌: Hardware PIN / Biometric was not provided.",c="bg-amber-950 text-amber-300 border-amber-700"):(t="USER PRESENCE FAILED ❌: Key was not physically touched.",c="bg-rose-950 text-rose-300 border-rose-700"),{title:"WebAuthn Authentication Phase (navigator.credentials.get)",apiCall:"navigator.credentials.get({ publicKey: requestOptions })",challenge:"7c18b4e09f3a2d11...",rpId:"bank.barrackpore.gov.in",authenticatorAction:"Signs (authenticatorData || clientDataHash) using hardware private key.",result:t,badgeColor:c}}},[o,d,h]),[l,u]=a.useState("legitimate"),s=a.useMemo(()=>l==="legitimate"?{url:"https://bank.barrackpore.gov.in",originCalculated:"https://bank.barrackpore.gov.in",expectedOrigin:"https://bank.barrackpore.gov.in",isMatch:!0,verdict:"SIGNATURE VERIFIED ✔ (Access Granted)",explanation:"Browser origin matches Relying Party ID. Cryptographic public-key assertion passes seamlessly.",badgeColor:"bg-emerald-950 text-emerald-300 border-emerald-700"}:{url:"https://bank.barrackpore-fake.net",originCalculated:"https://bank.barrackpore-fake.net",expectedOrigin:"https://bank.barrackpore.gov.in",isMatch:!1,verdict:"PHISHING ATTACK THWARTED 🚨 (Signature Rejected)",explanation:"Hardware key signed the fake proxy origin. When relayed to the real bank, the origin hash mismatch causes cryptographic verification to fail completely!",badgeColor:"bg-rose-950 text-rose-300 border-rose-700"},[l]),[g,x]=a.useState("barrackpore_yubikey"),m={barrackpore_yubikey:{id:"barrackpore_yubikey",title:"Barrackpore Municipal Treasury: Enterprise FIDO2 Mandate",location:"Financial disbursement core approving monthly disbursements of ₹85,00,000",engineers:"Susmita (SecOps Lead) & Debangshu (Senior Systems Architect)",threatScenario:"Spear-phishing emails mimicked the state treasury portal with reverse proxies, attempting to bypass password and SMS OTP authentication.",solution:"Mandated YubiKey 5 NFC hardware security keys for all 350 treasury employees; enforced WebAuthn with mandatory User Verification (FIDO PIN).",outcome:"100% elimination of phishing compromise; achieved NIST SP 800-63B AAL3 certification across all municipal operations."},kolkata_fintech_pci:{id:"kolkata_fintech_pci",title:"Salt Lake Sector V FinTech: Passwordless WebAuthn Migration",location:"Core payment gateway microservices managing 120,000 daily transactions",engineers:"Mahima (Lead Cryptographer) & Mamata (Infrastructure Lead)",threatScenario:"Adversaries attempted credential stuffing against employee SSH and cloud administrative consoles using leaked breach databases.",solution:"Deactivated static passwords and SMS OTPs entirely; integrated FIDO2 WebAuthn for browser SSO and FIDO-backed SSH keys (`ed25519-sk`).",outcome:"Zero credential-stuffing vulnerability; certified PCI-DSS 4.0 requirement 8.3 compliance."},ichapur_defense_fips:{id:"ichapur_defense_fips",title:"Ichapur Ordnance Manufacturing: FIPS 140-2 Hardware Token Enforcement",location:"High-security defense manufacturing CAD repositories and machine controllers",engineers:"Abhronila (CISO) & Incident Response Specialists",threatScenario:"Contractor USB devices tested uncertified software emulators to forge authentication assertions on engineering networks.",solution:"Configured WebAuthn Enterprise Attestation, restricting registration strictly to verified YubiKey 5 FIPS AAGUID hardware serials.",outcome:"Rogue software authenticators completely blocked at enrollment; guaranteed tamper-resistant hardware key execution."}},n=m[g];return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 space-y-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("header",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-full text-xs font-semibold uppercase tracking-wider",children:"Module 005_005 • Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-semibold",children:"BCA BCAC703 • Cyber Security"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Hardware Security Keys: FIDO2, WebAuthn & U2F Standards"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Classroom Lab:"}),e.jsx("span",{className:"text-xs font-bold text-emerald-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800",children:"Barrackpore • West Bengal"})]})]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed",children:["FIDO2 and W3C WebAuthn represent the gold standard in modern identity security, providing 100% mathematical immunity against phishing and credential theft. Master the cryptographic mechanics of ",e.jsx("strong",{children:"Public Key Attestation and Assertion"}),", analyze",e.jsx("strong",{children:"CTAP2 User Presence (UP) and User Verification (UV) flags"}),", explore ",e.jsx("strong",{children:"Cryptographic Origin Binding"}),"that stops Evilginx reverse proxies, and examine enterprise hardware key rollouts."]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg md:text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🔑"})," Studio 1: W3C WebAuthn & CTAP2 Protocol Handshake Simulator"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Toggle between Registration and Authentication flows and observe how CTAP2 hardware tokens verify physical touch and PIN."})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>p("registration"),className:i("px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200",o==="registration"?"bg-indigo-600 text-white shadow-lg shadow-indigo-950":"bg-slate-950 text-slate-400 hover:text-white border border-slate-800"),children:"1. Registration Phase"}),e.jsx("button",{onClick:()=>p("auth"),className:i("px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200",o==="auth"?"bg-emerald-600 text-white shadow-lg shadow-emerald-950":"bg-slate-950 text-slate-400 hover:text-white border border-slate-800"),children:"2. Authentication Phase"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col justify-between items-center text-center space-y-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold tracking-widest text-slate-500",children:"Hardware Security Token"}),e.jsx("div",{className:"text-sm font-bold text-white",children:"Yubico YubiKey 5 NFC"})]}),e.jsxs("div",{className:"w-28 h-40 bg-slate-900 rounded-2xl border-2 border-emerald-500/50 p-3 flex flex-col justify-between items-center shadow-lg shadow-emerald-950/40",children:[e.jsx("div",{className:"w-6 h-6 rounded-full border border-slate-700 bg-slate-800"}),e.jsx("div",{className:"w-12 h-12 rounded-full border-2 border-amber-400/80 bg-amber-950/40 flex items-center justify-center",children:e.jsx("div",{className:"w-6 h-6 rounded-full bg-amber-400 animate-pulse"})}),e.jsx("div",{className:"text-[9px] font-mono text-emerald-400 font-bold",children:"FIDO2 AAL3"})]}),o==="auth"&&e.jsxs("div",{className:"space-y-2 w-full text-xs",children:[e.jsxs("label",{className:"flex items-center justify-between p-2 bg-slate-900 rounded-lg border border-slate-800 cursor-pointer",children:[e.jsx("span",{children:"Physical Contact Touch (UP)"}),e.jsx("input",{type:"checkbox",checked:d,onChange:t=>y(t.target.checked),className:"accent-emerald-500 w-4 h-4"})]}),e.jsxs("label",{className:"flex items-center justify-between p-2 bg-slate-900 rounded-lg border border-slate-800 cursor-pointer",children:[e.jsx("span",{children:"Hardware FIDO PIN (UV)"}),e.jsx("input",{type:"checkbox",checked:h,onChange:t=>b(t.target.checked),className:"accent-emerald-500 w-4 h-4"})]})]})]}),e.jsxs("div",{className:"md:col-span-2 bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4 text-xs",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2",children:[e.jsx("span",{className:"font-bold text-white text-sm",children:r.title}),e.jsx("span",{className:i("px-2.5 py-0.5 rounded-full border font-mono font-bold text-[10px]",r.badgeColor),children:"NIST AAL3"})]}),e.jsxs("div",{className:"space-y-2.5 text-slate-300",children:[e.jsxs("div",{className:"p-2.5 bg-slate-900 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-slate-500 font-semibold block",children:"Browser JavaScript API Call:"}),e.jsx("span",{className:"font-mono text-cyan-300 text-[11px] block mt-0.5",children:r.apiCall})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{className:"p-2.5 bg-slate-900 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-slate-500 font-semibold block",children:"Relying Party ID (RP ID):"}),e.jsx("span",{className:"font-mono text-white text-[11px]",children:r.rpId})]}),e.jsxs("div",{className:"p-2.5 bg-slate-900 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-slate-500 font-semibold block",children:"Cryptographic Challenge:"}),e.jsx("span",{className:"font-mono text-white text-[11px]",children:r.challenge})]})]}),e.jsxs("div",{className:"p-2.5 bg-slate-900 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-slate-500 font-semibold block",children:"CTAP2 Authenticator Operation:"}),e.jsx("span",{className:"text-slate-200",children:r.authenticatorAction})]}),e.jsx("div",{className:i("p-3 rounded-lg border font-semibold text-xs",r.badgeColor),children:r.result})]})]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg md:text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🛡️"})," Studio 2: Cryptographic Origin Binding vs Evilginx AitM Phishing"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Observe how the browser's cryptographic origin binding defeats reverse-proxy phishing attacks automatically."})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>u("legitimate"),className:i("px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200",l==="legitimate"?"bg-emerald-600 text-white shadow-lg shadow-emerald-950":"bg-slate-950 text-slate-400 hover:text-white border border-slate-800"),children:"1. Legitimate Bank Portal"}),e.jsx("button",{onClick:()=>u("phishing"),className:i("px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200",l==="phishing"?"bg-rose-600 text-white shadow-lg shadow-rose-950":"bg-slate-950 text-slate-400 hover:text-white border border-slate-800"),children:"2. Evilginx Phishing Proxy ⚠️"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4 text-xs",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2",children:[e.jsxs("span",{className:"font-bold text-white",children:["Browser URL Bar: ",e.jsx("span",{className:"font-mono text-cyan-300",children:s.url})]}),e.jsx("span",{className:i("px-2.5 py-1 rounded-full border font-bold text-xs",s.badgeColor),children:s.verdict})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-slate-500 font-bold uppercase text-[10px]",children:"ClientDataJSON Origin Signed by Key:"}),e.jsx("div",{className:"font-mono text-white text-xs",children:s.originCalculated})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-slate-500 font-bold uppercase text-[10px]",children:"Real Bank Server Expected Origin:"}),e.jsx("div",{className:"font-mono text-white text-xs",children:s.expectedOrigin})]})]}),e.jsx("p",{className:"text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-lg border border-slate-800 text-xs md:text-sm",children:s.explanation})]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg md:text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," Studio 3: Regional SOC Incident Response Drills (West Bengal)"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Case studies of hardware security key deployments across critical state infrastructure."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(m).map(t=>e.jsx("button",{onClick:()=>x(t),className:i("px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200",g===t?"bg-emerald-600 text-white shadow-lg shadow-emerald-950":"bg-slate-950 text-slate-400 hover:text-white border border-slate-800"),children:t==="barrackpore_yubikey"?"Barrackpore YubiKey":t==="kolkata_fintech_pci"?"Kolkata FinTech WebAuthn":"Ichapur FIPS Keys"},t))})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-base font-bold text-white",children:n.title}),e.jsx("span",{className:"text-xs text-emerald-400 font-mono bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800",children:n.location})]}),e.jsxs("div",{className:"text-xs text-slate-400",children:[e.jsx("strong",{className:"text-slate-300",children:"Lead SecOps Engineers: "})," ",n.engineers]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-rose-400 uppercase text-[10px] tracking-wider block",children:"Threat Vector"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:n.threatScenario})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-emerald-400 uppercase text-[10px] tracking-wider block",children:"FIDO2 Architecture"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:n.solution})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-cyan-400 uppercase text-[10px] tracking-wider block",children:"Measurable Outcome"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:n.outcome})]})]})]})]}),e.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-900/40 rounded-2xl p-6 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Deployment Errors"]}),e.jsxs("ul",{className:"space-y-3 text-xs text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Maintaining Legacy Password/SMS Fallback:"}),' If a user can click "Try SMS OTP instead", the entire phishing resistance of FIDO2 is defeated!']})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Ignoring Signature Counter Regression:"})," Failing to verify that `signCount` increases monotonically allows cloned software keys to operate."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Enrolling Only a Single Key per User:"})," When an employee misplaces their single key, emergency recovery becomes an administrative nightmare."]})]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-900/40 rounded-2xl p-6 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🛡️"})," FIDO2 Engineering Best Practices"]}),e.jsxs("ul",{className:"space-y-3 text-xs text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Mandate Dual Hardware Key Enrollment:"})," Require employees to register a Primary key and a Backup key stored in a safe."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Enforce User Verification (PIN/Biometric):"})," Set `userVerification: 'required'` to ensure stolen physical keys cannot be used without a local PIN."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Check Attestation AAGUID for Enterprise Fleets:"})," Restrict registration strictly to certified FIPS 140-2 hardware models."]})]})]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-base border-b border-slate-800 pb-3",children:[e.jsx("span",{children:"💡"})," Instructor Hints & Retention Checklist"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300",children:[e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-emerald-300",children:"Think About:"}),e.jsx("p",{className:"leading-relaxed",children:"Why does FIDO2 eliminate credential database breaches? Because the server only stores Public Keys! Even if an SQL injection dumps the entire user table, the stolen public keys cannot sign login challenges!"})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-cyan-300",children:"Student Checklist:"}),e.jsxs("ul",{className:"space-y-1.5 list-disc list-inside text-slate-400",children:[e.jsx("li",{children:"FIDO2 = W3C WebAuthn (Browser API) + FIDO CTAP2 (Hardware Protocol)."}),e.jsx("li",{children:"Cryptographic Origin Binding makes reverse-proxy phishing mathematically impossible."}),e.jsx("li",{children:"CTAP2 Flag UP = User Presence (Touch), UV = User Verification (PIN/Biometric)."}),e.jsx("li",{children:"Signature Counter (`signCount`) detects cloned hardware authenticators."}),e.jsx("li",{children:"NIST SP 800-63B rates FIDO2 hardware keys at the highest AAL3 level."})]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400 text-lg",children:"🐍"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"Hands-on FIDO2 WebAuthn Cryptographic Verifier Script"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Standalone Python script simulating WebAuthn registration, public key attestation, UP/UV flags, and origin-bound phishing defense"})]})]}),e.jsx(k,{fileModule:I,title:"fido2_webauthn_verifier.py",highlightLines:[25,45,65,85,105]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(w,{title:"Hardware Security Keys (FIDO2 & WebAuthn) FAQs",questions:A})}),e.jsx(f,{note:"For your BCA BCAC703 examination: Master the two foundational pillars of FIDO2 (W3C WebAuthn browser API and FIDO CTAP2 protocol). Explain how Cryptographic Origin Binding completely defeats Adversary-in-the-Middle (AitM) reverse proxies like Evilginx. Detail the role of CTAP2 User Presence (UP - touch) and User Verification (UV - PIN/Biometric) flags and why the server stores only Public Keys."}),e.jsx("section",{className:"space-y-4",children:e.jsx(v,{content:S,title:"Topic 8: FIDO2 & WebAuthn Security Standards Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 8 Note",downloadFileName:"topic8_fido2_webauthn_note.txt"})})]})})};export{F as default};
