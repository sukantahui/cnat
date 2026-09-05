import{b as s,j as e,bg as m}from"./vendor-react-core-Doz9nIC6.js";import{T as _}from"./TeacherSukantaHui-DerPxfxp.js";import{F as M}from"./FAQTemplate-BHhlgA96.js";import{P as $}from"./PlainTextPrint-C08xhKA4.js";import{P as I}from"./PythonFileLoader-hCi5osN-.js";import"./vendor-icons-CH1iX9C8.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const D=[{id:1,question:"What is the primary architectural difference between HOTP (RFC 4226) and TOTP (RFC 6238)?",shortAnswer:"HOTP calculates one-time codes using an incrementing event counter C that advances each time the button is pressed. TOTP calculates codes by replacing the event counter with a dynamic time counter derived from Unix epoch time: C = floor(time / 30).",explanation:"Because TOTP is bound to standard UTC epoch time, client and server remain synchronized automatically without needing to transmit an incrementing counter over the wire.",hint:"HOTP uses an event counter incremented per press; TOTP uses time divided by 30 seconds.",level:"Basic",codeExample:`// HOTP Counter : C = 0, 1, 2, 3... (Incremented manually)
// TOTP Counter : T = Math.floor(Date.now() / 1000 / 30) (Changes automatically every 30s)`},{id:2,question:"Write the exact mathematical formula for HOTP generation defined in RFC 4226.",shortAnswer:"HOTP(K, C) = Truncate(HMAC-SHA1(K, C)) mod 10^d, where K is the shared secret key, C is the 8-byte big-endian counter, and d is the number of digits (typically 6 or 8).",explanation:"Dynamic Truncation extracts a 31-bit unsigned integer from the 20-byte HMAC-SHA1 digest before computing modulo 10^d to produce the human-readable code.",hint:"Truncate(HMAC-SHA-1(K, C)) mod 10^d.",level:"Basic",codeExample:`// Mathematical Formula:
// HOTP(K, C) = Truncate(HMAC-SHA-1(K, C)) % (10^d)`},{id:3,question:"How does Dynamic Truncation (DT) extract a 4-byte integer from the 20-byte HMAC-SHA1 output in HOTP?",shortAnswer:"1. Take the last byte of the HMAC digest (byte 19) and mask it with 0x0F to get an offset value between 0 and 15: Offset = digest[19] & 0x0F. 2. Extract 4 bytes starting at that offset: digest[Offset : Offset+4]. 3. Mask the most significant bit (0x7FFFFFFF) to prevent negative signed integers.",explanation:"This dynamic offset selection ensures that the extracted 4 bytes are unpredictably distributed across the 20-byte hash output.",hint:"Low-order 4 bits of the last byte determine the extraction start offset (0 to 15).",level:"Moderate",codeExample:`// Dynamic Truncation Implementation:
const offset = hmacDigest[19] & 0x0f;
const binary = (
  ((hmacDigest[offset] & 0x7f) << 24) |
  ((hmacDigest[offset + 1] & 0xff) << 16) |
  ((hmacDigest[offset + 2] & 0xff) << 8) |
  (hmacDigest[offset + 3] & 0xff)
);
const otp = binary % 1000000; // 6 digits`},{id:4,question:"What is the standard time-step interval X defined in RFC 6238 for TOTP, and why was 30 seconds chosen?",shortAnswer:"The standard default time-step is X = 30 seconds. This duration provides a balance between giving human users sufficient time to read and type a 6-digit code while minimizing the exposure window for intercepted codes.",explanation:"A shorter window (e.g., 10s) causes frequent user input failures; a longer window (e.g., 120s) extends the validity lifetime of intercepted credentials.",hint:"Default interval is 30 seconds to balance human typing speed with minimal exposure window.",level:"Basic",codeExample:`// Time Counter Calculation:
const timeStep = 30; // seconds
const timeCounter = Math.floor(Date.now() / 1000 / timeStep);`},{id:5,question:"Why are TOTP shared secrets encoded in Base32 rather than Base64 or Hex in QR code enrollment URIs?",shortAnswer:"Base32 uses only uppercase letters A–Z and digits 2–7 (excluding 0, 1, 8, 9). This eliminates visually ambiguous characters (like 0 vs O, 1 vs I, 8 vs B) that cause transcription errors if a user manually types the secret key into their authenticator app.",explanation:"Base32 is also case-insensitive and alphanumeric-only, which makes QR code rendering more compact and error-resistant.",hint:"Base32 avoids visually ambiguous characters like 'O' vs '0' and 'I' vs '1'.",level:"Moderate",codeExample:`// Base32 Character Set (RFC 4648):
// "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567" (32 characters, no 0/O or 1/I confusion)`},{id:6,question:"What is the standard structure of an `otpauth://` URI scanned by mobile authenticator apps?",shortAnswer:"`otpauth://totp/[Issuer]:[AccountName]?secret=[Base32Key]&issuer=[Issuer]&algorithm=[SHA1]&digits=[6]&period=[30]`",explanation:"This URI standardizes the transfer of the shared cryptographic key, account metadata, time-step period, and hash algorithm from the server to apps like Google Authenticator or Microsoft Authenticator.",hint:"otpauth://totp/Issuer:User?secret=KEY&issuer=Issuer&digits=6&period=30.",level:"Moderate",codeExample:`// Sample Enrollment URI:
// otpauth://totp/BarrackporeTreasury:susmita@bank.in?secret=JBSWY3DPEHPK3PXP&issuer=BarrackporeTreasury&digits=6&period=30`},{id:7,question:"What is Clock Drift in TOTP systems and how does the server resolve it during authentication?",shortAnswer:"Clock drift occurs when a mobile phone's internal clock runs faster or slower than the server's clock by a few seconds. The server resolves this by evaluating a tolerance window of +/- 1 time step (checking counters T-1, T, and T+1).",explanation:"A tolerance window of +/- 1 step checks a total time window of 90 seconds (30s past, 30s current, 30s future), preventing legitimate users from being locked out due to minor clock inaccuracies.",hint:"Server validates codes against current time counter T as well as T-1 and T+1.",level:"Moderate",codeExample:`// Server Tolerance Check:
const valid = [currentStep - 1, currentStep, currentStep + 1].some(step => {
  return generateHotp(secret, step) === submittedCode;
});`},{id:8,question:"How does a secure TOTP authentication server prevent Replay Attacks within the 30-second validity window?",shortAnswer:"When a user submits a valid TOTP code for time step T, the server marks that time counter T as 'consumed' in an in-memory cache (like Redis) with an expiration time equal to the window length. Any subsequent submission with the same counter T is immediately rejected.",explanation:"Without replay tracking, an attacker eavesdropping on a network connection could capture a valid TOTP code and submit it 5 seconds later within the same 30-second window to gain unauthorized access.",hint:"Recording the consumed time step in a fast cache to ensure each counter step is strictly single-use.",level:"Expert",codeExample:`// Redis Atomic Replay Guard:
const key = \`totp:\${userId}:\${matchedCounter}\`;
const isFirstUse = await redis.set(key, "1", "NX", "EX", 60); // 60s TTL
if (!isFirstUse) {
    throw new Error("REPLAY_ATTACK_DETECTED: Code already consumed for this time step!");
}`},{id:9,question:"What is Counter Desynchronization in HOTP hardware tokens and how does the Resynchronization Look-Ahead Window resolve it?",shortAnswer:"If a user presses the physical button on an HOTP hardware token multiple times without submitting the code to the server, the token's internal counter advances ahead of the server's counter. The server resynchronizes by testing candidate counters across a look-ahead window (e.g., s = 20 steps: C+1 to C+20).",explanation:"Once a match is found at counter C+k within the look-ahead window, the server accepts the login and advances its stored counter to C+k.",hint:"Server searches ahead by 20-50 steps to catch up with a hardware token whose button was pressed offline.",level:"Moderate",codeExample:`// HOTP Look-Ahead Resync:
const lookAheadWindow = 20;
for (let i = 1; i <= lookAheadWindow; i++) {
    if (generateHotp(secret, serverCounter + i) === userCode) {
        serverCounter += i; // Resynchronized!
        return true;
    }
}`},{id:10,question:"Why does TOTP operate without requiring any network connectivity or cellular signal on the user's smartphone?",shortAnswer:"Because TOTP is calculated strictly using the shared secret key stored locally in the app and the device's internal hardware clock. No packets are transmitted between the phone and server to generate the 6-digit code.",explanation:"This allows users to authenticate seamlessly inside airplanes, underground basements, or remote locations with zero cellular reception.",hint:"Calculations rely entirely on local hardware time and the pre-shared key stored in the app.",level:"Basic",codeExample:`// Offline Generation:
// Device has: 1. Base32 Secret Key + 2. Internal RTC Clock → Generates TOTP offline with zero Wi-Fi/cellular.`},{id:11,question:"What hash algorithms are supported by RFC 6238 TOTP beyond SHA-1, and why is SHA-1 still the dominant industry standard in mobile authenticator apps?",shortAnswer:"RFC 6238 supports HMAC-SHA1, HMAC-SHA256, and HMAC-SHA512. SHA-1 remains dominant because the original Google Authenticator implementation only supported SHA-1, creating a legacy compatibility baseline across all third-party apps.",explanation:"Because HMAC-SHA1 is used as a pseudorandom function (PRF) with a high-entropy secret rather than for collision resistance, collision attacks against SHA-1 do not weaken HMAC-SHA1 security.",hint:"RFC 6238 supports SHA-256 and SHA-512, but SHA-1 is preserved for legacy app compatibility.",level:"Moderate",codeExample:`// RFC 6238 Algorithms:
// HMAC-SHA1   : 160-bit digest (Default)
// HMAC-SHA256 : 256-bit digest
// HMAC-SHA512 : 512-bit digest`},{id:12,question:"What is the impact on TOTP if an attacker steals the raw Base32 secret key from the server database?",shortAnswer:"The attacker can clone the user's authenticator app onto their own device and generate valid, real-time TOTP codes indefinitely without physical access to the victim's phone, completely nullifying the second factor.",explanation:"This is why authentication servers must encrypt TOTP secrets at rest in their databases using AES-256-GCM or store them within Hardware Security Modules (HSMs).",hint:"Possessing the secret key allows cloning the authenticator and generating valid codes forever.",level:"Moderate",codeExample:`// Stolen Secret Impact:
// Attacker imports secret "JBSWY3DPEHPK3PXP" into their own phone → Attacker's app produces identical valid codes!`},{id:13,question:"How do Backup Recovery Codes (Scratch Codes) prevent account lockout if a user destroys or loses their TOTP device?",shortAnswer:"Backup codes are a set of 8 to 10 cryptographically random, high-entropy single-use strings issued during enrollment. The server stores slow KDF hashes (Argon2id/Bcrypt) of these codes and immediately deletes/burns each code once it is used for login.",explanation:"Storing only hashes of backup codes ensures that a database dump does not expose usable emergency recovery codes to attackers.",hint:"Single-use random recovery codes hashed in the database and deleted immediately upon consumption.",level:"Basic",codeExample:`// Backup Code Verification:
const isMatch = bcrypt.compareSync(submittedCode, storedBackupHash);
if (isMatch) {
    deleteBackupCodeFromDatabase(userId, storedBackupHash); // Burn code permanently
    grantAccess();
}`},{id:14,question:"What is the mathematical length of an 8-digit OTP keyspace compared to a 6-digit OTP keyspace, and what is the probability of a random guess succeeding?",shortAnswer:"A 6-digit OTP has 10^6 = 1,000,000 combinations (probability of random guess = 0.0001%). An 8-digit OTP has 10^8 = 100,000,000 combinations (probability = 0.000001%), providing 100x greater resistance against online brute-forcing.",explanation:"8-digit OTPs are mandated in high-assurance banking and defense systems where rate-limiting might experience momentary failures.",hint:"6 digits = 1 million combinations; 8 digits = 100 million combinations (100x harder).",level:"Basic",codeExample:`// Keyspace Comparison:
// 6-digit: 000000 to 999999 → 10^6 combinations
// 8-digit: 00000000 to 99999999 → 10^8 combinations`},{id:15,question:"How does an Adversary-in-the-Middle (AitM) phishing proxy (e.g., Evilginx) successfully bypass standard TOTP 2FA?",shortAnswer:"The proxy prompts the user for their username, password, and TOTP code on a fake domain, immediately relays them to the legitimate website to complete authentication, and intercepts the session cookie returned by the real server.",explanation:"Because standard TOTP codes lack origin binding, the user unknowingly provides the valid 6-digit code to the proxy within its 30-second window, allowing the proxy to log in on their behalf.",hint:"Relays the valid TOTP code to the real server in real time within the 30-second window and captures the session cookie.",level:"Expert",codeExample:`// AitM TOTP Interception:
// 1. User enters 6-digit TOTP on 'fake-bank-portal.net'
// 2. Evilginx proxy submits code to 'realbank.com' within 10 seconds
// 3. Real server accepts TOTP → Issues session cookie → Proxy steals cookie!`},{id:16,question:"What is the difference between Time-Step Interval (30s) and Tolerance Window (e.g., 90s) in TOTP validation?",shortAnswer:"The time-step interval (30s) is the period during which a specific single code is generated on the client. The tolerance window (e.g., 90s across counters T-1, T, T+1) is the broader server-side verification range accepted by the server to accommodate clock drift and transmission lag.",explanation:"A code is generated for a 30-second window, but the server accepts codes from adjacent 30-second windows.",hint:"Interval is the client generation cycle (30s); tolerance window is the server's acceptance breadth (90s).",level:"Moderate",codeExample:`// Interval = 30 seconds
// Tolerance Window = [T-1 (30s past), T (30s current), T+1 (30s future)] = 90 seconds total span`},{id:17,question:"What is the security risk of storing TOTP secret keys in plain text inside an application's database?",shortAnswer:"An SQL injection or unauthorized database read exposes all users' base32 secret keys. Adversaries can generate valid TOTP codes offline for every account, permanently bypassing 2FA without triggering any alerts.",explanation:"Mitigation requires encrypting the `totp_secret` column with an envelope key stored in a KMS (Key Management Service) or HSM.",hint:"Allows attackers dumping the database to generate TOTP codes for all accounts indefinitely.",level:"Moderate",codeExample:`// Vulnerable Table:
// SELECT username, password_hash, totp_secret FROM users; ❌ (Raw Base32 exposed)

// Secure Table:
// SELECT username, password_hash, encrypted_totp_secret, kms_key_id FROM users; ✔`},{id:18,question:"How does Network Time Protocol (NTP) synchronization prevent TOTP failure across enterprise servers?",shortAnswer:"NTP synchronizes the system clocks of all authentication server nodes against authoritative stratum-1 atomic clocks over UDP port 123, ensuring server time drift remains within a few milliseconds.",explanation:"If an enterprise authentication cluster has nodes whose clocks drift by 40+ seconds, users routed to drifted nodes will experience random, baffling TOTP validation rejections.",hint:"Synchronizes server system clocks to atomic time to prevent validation failures.",level:"Moderate",codeExample:`// Linux NTP Verification:
// $ chronyc tracking
// Reference ID    : 103.220.14.88 (NTP Server Barrackpore)
// System time     : 0.000042 seconds slow of NTP time (Accurate within 42 microseconds ✔)`},{id:19,question:"What happens if a user submits a TOTP code during the last second of a 30-second window (e.g., at second 29.8)?",shortAnswer:"By the time the network packet arrives at the server (second 30.5), the server will have transitioned to time counter T+1. Because the server incorporates a +/- 1 step tolerance window (checking T-1), the code matching counter T is still accepted.",explanation:"Without the tolerance window, network latency on border-second submissions would cause a high rate of false authentication rejections.",hint:"Tolerance window allows the server to accept the previous time step's code when network latency causes slight delays.",level:"Basic",codeExample:`// Border Condition:
// Generated at 14:00:29.8 (Counter 500)
// Received at 14:00:30.4 (Server at Counter 501)
// Server verifies Counter 500 in [500, 501, 502] → PERMITTED ✔`},{id:20,question:"What is an Authenticator App Transfer / Cloud Sync feature (e.g., Google Authenticator Cloud Backup) and what security debate does it trigger?",shortAnswer:"Cloud sync backs up and synchronizes TOTP secret keys across all devices linked to a user's Google/Apple account. While it eliminates account lockouts from lost phones, it means compromising the user's master Google/Apple account compromises all 2FA keys.",explanation:"High-security enterprises prohibit cloud-synced TOTP and enforce non-exportable hardware-bound authenticators (YubiKeys).",hint:"Convenient backup vs risk of exposing all 2FA seeds if the master cloud account is compromised.",level:"Moderate",codeExample:`// Cloud Sync Debate:
// Benefit: User buys new phone → All 20 TOTP accounts restore instantly.
// Risk: Master Google account phished → Attacker gains all 20 TOTP seeds simultaneously.`},{id:21,question:"How does the TOTP dynamic truncation bitwise mask `& 0x7FFFFFFF` prevent integer overflow issues on 32-bit systems?",shortAnswer:"The most significant bit (MSB) in signed 32-bit integers indicates negative values. Masking with `0x7FFFFFFF` sets the MSB to 0, ensuring the extracted 4 bytes always represent a positive unsigned 31-bit integer before computing modulo.",explanation:"Without this mask, modulo operations on negative integers in languages like C/Java yield negative OTP values.",hint:"Clears the sign bit to ensure the integer is always positive.",level:"Moderate",codeExample:`// Bitwise Mask:
// 0x7FFFFFFF in binary = 01111111 11111111 11111111 11111111
// Clears bit 31 (sign bit) → Guarantees positive 31-bit integer.`},{id:22,question:"Why should an application enforce a maximum failed TOTP attempt limit (e.g., 5 failures) even though codes change every 30 seconds?",shortAnswer:"An attacker with a fast botnet could attempt hundreds of guesses within a single 30-second window. Without rate limiting, distributed brute-force scripts have an amplified probability of guessing the active 6-digit code.",explanation:"Enforcing exponential backoff or locking after 5 failures within a time window neutralizes automated brute-force scripts.",hint:"Prevents automated botnets from submitting thousands of guesses within a single 30-second window.",level:"Basic",codeExample:`// Rate Limiting Policy:
// Max 5 attempts per user per 30-second window → Exceeding triggers 5-minute cooldown.`},{id:23,question:"What is the recommended cryptographic minimum length for a TOTP shared secret key K according to RFC 6238?",shortAnswer:"The minimum recommended secret length is 128 bits (16 bytes), though 160 bits (20 bytes, matching SHA-1 output) is the standard industry recommendation. For HMAC-SHA256, a 256-bit (32-byte) key is recommended.",explanation:"Using low-entropy or short keys (e.g., 4 bytes) allows attackers to brute-force the shared secret from a series of observed OTP codes.",hint:"Minimum 128 bits (16 bytes); 160 bits (20 bytes) recommended for SHA-1.",level:"Moderate",codeExample:`// Generating Cryptographically Secure 160-bit Secret:
const crypto = require('crypto');
const secretBytes = crypto.randomBytes(20); // 160 bits
const base32Secret = base32Encode(secretBytes);`},{id:24,question:"Explain why HOTP is vulnerable to a Brute-Force Look-Ahead attack if the look-ahead window size s is configured excessively large (e.g., s = 10,000).",shortAnswer:"If s = 10,000, for every single guess the attacker submits, the server calculates and tests 10,000 consecutive HOTP codes. This increases the attacker's probability of guessing a valid code by 10,000x per attempt (10,000 / 1,000,000 = 1% success rate per guess).",explanation:"RFC 4226 advises keeping the look-ahead parameter s small (e.g., s <= 20) to prevent amplification of brute-force probability.",hint:"Large window means the server checks thousands of codes per guess, drastically increasing attack success probability.",level:"Expert",codeExample:`// Vulnerable Large Look-Ahead Window:
// s = 10,000 → 10,000 valid codes accepted simultaneously!
// Attacker submits 100 random guesses → ~63% probability of breaching account! ❌`},{id:25,question:"How does TOTP protect against offline dictionary attacks compared to traditional static passwords?",shortAnswer:"TOTP codes are generated and consumed dynamically in real time and are never stored in a static hash database. Even if an attacker steals the entire server database, there are no static password hashes to crack offline.",explanation:"An attacker must compromise the active runtime memory of the server or the user's physical smartphone to obtain secrets.",hint:"Codes are ephemeral and dynamic; no static hashes exist in the database for offline cracking.",level:"Basic",codeExample:`// Ephemeral Nature:
// Stored in DB: Encrypted Seed Key (AES-256)
// Generated in RAM: Active Code [ 849201 ] → Discarded from memory after 30 seconds.`},{id:26,question:"What is an RFC 4226 Throttling Parameter and why is it mandatory for HOTP implementations?",shortAnswer:"Throttling limits the number of unauthenticated HOTP attempts from a client, enforcing a delay (e.g., locking authentication after T_max = 3 consecutive failed attempts) to prevent rapid exhaustive search of the 6-digit space.",explanation:"Because HOTP counters do not expire automatically every 30 seconds like TOTP, strict server-side attempt throttling is non-negotiable.",hint:"Mandatory lockout or progressive delay after failed HOTP attempts to defeat brute-force scripts.",level:"Moderate",codeExample:`// RFC 4226 Throttling:
// Failed Attempts: 1 → OK
// Failed Attempts: 2 → OK
// Failed Attempts: 3 → LOCKOUT! Requires administrator intervention or re-enrollment.`},{id:27,question:"How does Hardware Token manufacturing ensure the security of pre-burned TOTP seeds (e.g., RSA SecurID key fobs)?",shortAnswer:"Seeds are injected into tamper-resistant cryptographic microcontrollers during clean-room factory production and sealed in epoxy resin. The seeds are delivered to the customer via encrypted PGP files and the master factory copies are permanently destroyed.",explanation:"Any physical attempt to slice or chemically dissolve the chip packaging triggers active micro-wire mesh sensors that zeroize the internal memory.",hint:"Factory-sealed in tamper-resistant chips with physical anti-tamper zeroization circuitry.",level:"Expert",codeExample:`// Hardware Fob Lifecycle:
// 1. Secret injected into secure enclave chip in factory clean-room.
// 2. Encrypted seed file shipped via PGP to client.
// 3. Chip clock ticks internally for 5-year battery life; zero external electrical interfaces exposed.`},{id:28,question:"What is the difference between Google Authenticator's URI format and proprietary enterprise authenticator extensions (e.g., Steam Guard)?",shortAnswer:"Google Authenticator strictly adheres to RFC 6238 standard base32 secrets producing numeric digits (0-9). Steam Guard uses a custom proprietary algorithm producing 5-character alphanumeric codes (e.g., 'K3M8P') based on a custom character mapping table.",explanation:"Proprietary formats prevent standard authenticator apps from generating valid codes unless reverse-engineered.",hint:"Standard TOTP generates 6-8 numeric digits; proprietary formats use custom alphanumeric alphabet mappings.",level:"Moderate",codeExample:`// Standard TOTP : [ 4 8 9 2 0 1 ] (Numeric)
// Steam Guard   : [ K 3 M 8 P ] (Custom 5-character alphanumeric mapping)`},{id:29,question:"In a forensic analysis of a web application in Kolkata, an auditor discovered that the TOTP verification function used standard JavaScript `===` to compare the submitted code with the expected code. What vulnerability does this introduce?",shortAnswer:"It introduces a Side-Channel Timing Attack. The standard equality operator `===` aborts on the first mismatched character, leaking timing information in nanoseconds that allows an attacker to deduce the 6 digits one by one.",explanation:"Mitigation requires using `crypto.timingSafeEqual()` or a constant-time comparison loop that always checks all 6 digits regardless of early mismatches.",hint:"Standard equality leaks timing information; constant-time comparison is required.",level:"Expert",codeExample:`// Vulnerable:
if (submittedCode === expectedCode) { ... } // LEAKS TIMING ❌

// Secure:
const crypto = require('crypto');
const match = crypto.timingSafeEqual(
    Buffer.from(submittedCode), 
    Buffer.from(expectedCode)
); // Constant-time verification ✔`},{id:30,question:"During an audit at the Barrackpore municipal treasury, 35 staff members reported that their 6-digit TOTP codes were rejected when trying to approve end-of-month salary batches. What was the exact forensic root cause and how was it permanently fixed?",shortAnswer:"The municipal FreeRADIUS authentication server's NTP synchronization service had crashed 3 weeks prior, causing the server's hardware clock to drift 48 seconds ahead of real-time UTC. Because the drift exceeded the +/- 30s tolerance window, all valid codes were rejected. Fixing required restarting chrony NTP sync and configuring automated clock drift alerting.",explanation:"When server time drifts beyond the tolerance window $W$, mathematically valid client codes generate counter $T$ while the server evaluates $T+2$, causing 100% false rejection.",hint:"Server clock drifted by 48 seconds after NTP service crashed, exceeding the 30-second tolerance window.",level:"Expert",codeExample:`// Forensic Findings:
// Real UTC Time   : 10:00:00 (Time Counter = 1200)
// Server Clock    : 10:00:48 (Time Counter = 1201.6 → 1201)
// Client Code Gen : Counter 1200
// Server Check    : [1201, 1202] → Mismatch ❌
// Fix: Restart Chrony NTP daemon + configure Nagios alert for clock drift > 2 seconds.`}],B=`====================================================================================================
ACADEMIC STUDY GUIDE & FORENSIC NOTES: TOTP (RFC 6238) & HOTP (RFC 4226) CRYPTOGRAPHY
COURSE MODULE: 005_005 - AUTHENTICATION FRAMEWORKS & MFA (TOPIC 4)
INSTITUTION: CODER & ACCOTAX | INSTRUCTOR: SUKANTA HUI | LOCATION: BARRACKPORE, WEST BENGAL
====================================================================================================

1. THE MATHEMATICAL SPECIFICATION OF HOTP (RFC 4226)
----------------------------------------------------------------------------------------------------
The HMAC-Based One-Time Password algorithm generates unpredictable single-use codes based on an 
incrementing 64-bit event counter $C$ and a shared secret key $K$.

Mathematical Formula:
$$\\text{HOTP}(K, C) = \\text{Truncate}(\\text{HMAC-SHA-1}(K, C)) \\pmod{10^d}$$

Step-by-Step Algorithm:
1. Counter Serialization: Counter $C$ is serialized into an 8-byte big-endian integer.
2. HMAC Computation: Compute 20-byte HMAC-SHA1 digest: $HS = \\text{HMAC-SHA-1}(K, C)$.
3. Dynamic Truncation (DT):
   - Extract low-order 4 bits of the last byte: $\\text{Offset} = HS[19] \\ \\& \\ \\text{0x0F}$.
   - Extract 4 bytes starting at Offset: $P = HS[\\text{Offset} : \\text{Offset}+4]$.
4. Binary Conversion:
   - Convert $P$ into a 31-bit unsigned integer (mask MSB): $\\text{Snum} = P \\ \\& \\ \\text{0x7FFFFFFF}$.
5. Modulo Reduction:
   - Compute final code: $\\text{Code} = \\text{Snum} \\pmod{10^d}$ (typically $d = 6$ or $d = 8$ digits).


2. THE SPECIFICATION OF TOTP (RFC 6238)
----------------------------------------------------------------------------------------------------
Time-Based One-Time Password is an extension of HOTP where the static counter $C$ is replaced by a 
dynamically calculated time counter $T$:

$$T = \\left\\lfloor \\frac{\\text{Current Epoch Time} - T_0}{X} \\right\\rfloor$$

Where:
- $T_0$ = Starting Unix epoch time (default $T_0 = 0$).
- $X$ = Time-step interval in seconds (RFC standard default $X = 30\\text{ seconds}$).
- Current Epoch Time = Seconds elapsed since January 1, 1970 UTC.

Formula:
$$\\text{TOTP}(K, \\text{Time}) = \\text{HOTP}\\left(K, \\left\\lfloor \\frac{\\text{Time}}{30} \\right\\rfloor\\right)$$

Key Advantages:
- No network communication required between phone and server during login.
- Zero battery consumption from background radio signals.
- Codes automatically expire after 30 seconds.


3. KEY ENROLLMENT & URI FORMAT: OTP AUTH
----------------------------------------------------------------------------------------------------
During user registration, the server generates a random 160-bit (20-byte) secret $K$, encodes it into 
Base32 format, and embeds it in a standard \`otpauth://\` QR code URI:

Format:
\`otpauth://totp/CoderAccoTax:susmita@bank.in?secret=JBSWY3DPEHPK3PXP&issuer=CoderAccoTax&algorithm=SHA1&digits=6&period=30\`

URI Parameters:
- \`secret\`: Base32-encoded secret shared key.
- \`issuer\`: Name of corporate portal/bank.
- \`algorithm\`: SHA1 (default), SHA256, or SHA512.
- \`digits\`: 6 (default) or 8.
- \`period\`: Time-step in seconds (default 30).


4. CLOCK DRIFT & SERVER-SIDE VERIFICATION WINDOW
----------------------------------------------------------------------------------------------------
Because hardware clocks drift over time, the server checks a tolerance window $W = \\pm 1$ time-step:
$$\\text{Valid Counters} = \\{ T-1, T, T+1 \\}$$

- $T-1$: Validates code generated 30 seconds ago (handles network latency or client clock running slow).
- $T$: Validates code generated in current 30-second window.
- $T+1$: Validates code generated 30 seconds in the future (handles client clock running fast).

Replay Attack Prevention:
- When a code matching counter $T_x$ is successfully validated, the server records $T_x$ in a 
  high-speed cache (Redis) with a 60-second TTL.
- If the exact same code is submitted again within the same 30-second window, the server immediately 
  rejects it with a "Replay Attack Detected" forensic alarm.


5. HOTP DESYNCHRONIZATION & LOOK-AHEAD WINDOW
----------------------------------------------------------------------------------------------------
In HOTP (hardware token with a physical push button), if a user presses the button 5 times without 
logging in, the client counter advances to $C=5$ while the server counter remains at $C=0$.
- Resynchronization Solution: The server searches ahead across a Look-Ahead Window (e.g., $s = 20$ steps):
  Server checks $C+1, C+2, \\dots, C+20$.
- When a match is found at $C+5$, the server validates the user and updates its internal counter to 5.


6. REGIONAL SOC CASE STUDIES (WEST BENGAL DEPLOYMENTS)
----------------------------------------------------------------------------------------------------
Case 1: Barrackpore Treasury Employee Portal
- Problem: Remote municipal staff experienced failed logins due to mobile phone clock drift.
- Remediation: Configured FreeRADIUS TOTP tolerance to $W=\\pm 1$ (60s total window) and enforced NTP sync.

Case 2: Kolkata FinTech Merchant Settlement Gateway
- Problem: Adversaries intercepted TOTP codes over unencrypted public Wi-Fi and attempted replay attacks.
- Remediation: Implemented Redis atomic counter consumption ensuring each 30s code is strictly single-use.
====================================================================================================
`,W=`#!/usr/bin/env python3
"""
===============================================================================
CYBERSECURITY LAB: TOTP (RFC 6238) & HOTP (RFC 4226) CRYPTOGRAPHIC GENERATOR
COURSE: BCA BCAC703 - Cyber Security | MODULE: 005_005 (Authentication & MFA)
INSTITUTION: Coder & AccoTax | INSTRUCTOR: Sukanta Hui | LOCATION: Barrackpore
===============================================================================
This script provides from-scratch RFC-compliant cryptographic implementations of:
1. HOTP: HMAC-based One-Time Password Algorithm (RFC 4226).
2. TOTP: Time-based One-Time Password Algorithm (RFC 6238).
3. Dynamic Truncation (DT) extraction using bitwise operations.
4. Server-Side Verification with +/- 1 Step Clock Drift Tolerance Window.
5. Replay Attack Prevention and Counter Desynchronization Handling.
"""

import sys
import time
import hmac
import hashlib
import struct
import base64
from typing import Tuple, List, Dict

# Ensure UTF-8 stdout encoding for currency symbols and bullets
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

class OtpCryptoEngine:
    def __init__(self, digits: int = 6, time_step: int = 30):
        self.digits = digits
        self.time_step = time_step
        self.used_counters = set()  # Replay attack prevention store

    def generate_hotp(self, secret_bytes: bytes, counter: int) -> Tuple[str, int, str]:
        """
        RFC 4226 HOTP Generation:
        1. Pack counter into 8-byte big-endian integer.
        2. Compute HMAC-SHA1 digest (20 bytes).
        3. Dynamic Truncation (DT): Extract 4 bytes using low-order 4 bits of last byte as offset.
        4. Truncate to desired digits: (binary_code & 0x7FFFFFFF) % 10^digits.
        """
        # Step 1: Pack 64-bit integer
        counter_bytes = struct.pack(">Q", counter)

        # Step 2: Compute HMAC-SHA1
        hmac_digest = hmac.new(secret_bytes, counter_bytes, hashlib.sha1).digest()

        # Step 3: Dynamic Truncation (Offset from last byte low 4 bits)
        offset = hmac_digest[-1] & 0x0F
        four_bytes = hmac_digest[offset:offset + 4]

        # Step 4: Unpack 31-bit unsigned big-endian integer (mask MSB to eliminate sign bit)
        binary_code = struct.unpack(">I", four_bytes)[0] & 0x7FFFFFFF

        # Step 5: Compute modulo 10^digits and format with leading zeros
        otp_val = binary_code % (10 ** self.digits)
        otp_str = str(otp_val).zfill(self.digits)

        return otp_str, offset, hmac_digest.hex()

    def generate_totp(self, secret_bytes: bytes, current_time: float = None) -> Tuple[str, int, int]:
        """
        RFC 6238 TOTP Generation:
        Calculates time counter: C = floor(current_time / time_step)
        """
        if current_time is None:
            current_time = time.time()

        time_counter = int(current_time) // self.time_step
        seconds_remaining = self.time_step - (int(current_time) % self.time_step)
        otp_str, _, _ = self.generate_hotp(secret_bytes, time_counter)

        return otp_str, time_counter, seconds_remaining

    def verify_totp(self, secret_bytes: bytes, user_code: str, tolerance_steps: int = 1) -> Dict:
        """
        Verifies TOTP code against current time counter with +/- tolerance_steps for clock drift.
        Prevents replay attacks by checking if counter was already used.
        """
        now = time.time()
        current_counter = int(now) // self.time_step

        for step_offset in range(-tolerance_steps, tolerance_steps + 1):
            eval_counter = current_counter + step_offset
            expected_otp, _, _ = self.generate_hotp(secret_bytes, eval_counter)

            if user_code == expected_otp:
                # Check for replay attack
                if eval_counter in self.used_counters:
                    return {
                        "verified": False,
                        "status": "REJECTED (Replay Attack Detected 🚨)",
                        "reason": f"Code {user_code} for counter {eval_counter} was already used in this window."
                    }

                # Mark counter as consumed
                self.used_counters.add(eval_counter)
                return {
                    "verified": True,
                    "status": "VERIFIED SUCCESS ✔",
                    "drift_seconds": step_offset * self.time_step,
                    "counter": eval_counter,
                    "reason": f"Matched time window step {eval_counter} (Drift: {step_offset * self.time_step}s)."
                }

        return {
            "verified": False,
            "status": "INVALID CODE ❌",
            "reason": "Provided 6-digit code does not match expected TOTP in tolerance window."
        }

# =============================================================================
# CLI DEMONSTRATION HARNESS
# =============================================================================

def main():
    print("=" * 80)
    print("TOTP (RFC 6238) & HOTP (RFC 4226) CRYPTOGRAPHIC LAB")
    print("Institution: Coder & AccoTax | Instructor: Sukanta Hui | Location: Barrackpore")
    print("=" * 80)

    # Base32 Secret Key (Standard Google Authenticator format)
    base32_secret = "JBSWY3DPEHPK3PXP" # RFC 4226 test vector string '12345678901234567890'
    secret_bytes = base64.b32decode(base32_secret)

    engine = OtpCryptoEngine(digits=6, time_step=30)

    # Test 1: HOTP Sequence (Counter 0 to 4)
    print("\\n[TEST 1]: RFC 4226 HOTP SEQUENCE GENERATION")
    print(f"Secret Key (Base32): {base32_secret}")
    print("-" * 80)
    print(f"{'Counter (C)':<15}{'Offset':<10}{'HOTP Code':<15}{'HMAC-SHA1 Digest Snippet'}")
    print("-" * 80)
    for c in range(5):
        code, offset, digest = engine.generate_hotp(secret_bytes, c)
        print(f"{c:<15}{offset:<10}{code:<15}{digest[:24]}...")

    # Test 2: Live TOTP Generation
    print("\\n" + "=" * 80)
    print("[TEST 2]: RFC 6238 TOTP REAL-TIME GENERATION")
    totp_code, time_counter, remaining = engine.generate_totp(secret_bytes)
    print(f"Current Epoch Time  : {int(time.time())} seconds")
    print(f"Calculated Counter  : {time_counter} (Epoch / 30)")
    print(f"Active TOTP Code    : [ {totp_code} ]")
    print(f"Time Step Remaining : {remaining} seconds before refresh")

    # Test 3: Verification & Replay Protection
    print("\\n" + "=" * 80)
    print("[TEST 3]: SERVER-SIDE VERIFICATION & REPLAY DEFENSE")
    res1 = engine.verify_totp(secret_bytes, totp_code)
    print(f"Submission 1 ({totp_code}): {res1['status']} - {res1['reason']}")

    # Replaying identical code in same time window
    res2 = engine.verify_totp(secret_bytes, totp_code)
    print(f"Submission 2 (Replay)  : {res2['status']} - {res2['reason']}")
    print("=" * 80)

if __name__ == "__main__":
    main()
`,Q=()=>{s.useId(),s.useId();const[y,v]=s.useState(24),[x,C]=s.useState("849201"),[f,k]=s.useState(57392104),[S,A]=s.useState(7),[P,j]=s.useState("3a7f9b2c01e4d8f5");s.useEffect(()=>{const t=setInterval(()=>{v(n=>{if(n<=1){const a=Math.floor(1e5+Math.random()*9e5).toString(),h=f+1,p=Math.floor(Math.random()*16);return C(a),k(h),A(p),j(Math.random().toString(16).substring(2,18)),30}return n-1})},1e3);return()=>clearInterval(t)},[f]);const[r,O]=s.useState(0),[g,L]=s.useState(1),u=s.useMemo(()=>{const n=Math.floor(r/30),a=Math.abs(n)<=g;let h="",p="";return a?(h="ACCEPTED ✔: Drift is within server tolerance window (W = ±"+g*30+"s).",p="bg-emerald-950 text-emerald-300 border-emerald-700"):(h="REJECTED ❌: Clock drift ("+r+"s) exceeds tolerance window. User rejected!",p="bg-rose-950 text-rose-300 border-rose-700"),{clientCounterOffset:n,isAccepted:a,verdict:h,badgeColor:p}},[r,g]),[i,N]=s.useState(12),[l,E]=s.useState(8),[o,K]=s.useState(10),b=s.useMemo(()=>{const t=i-l;let n="",a="";return t===0?(n="SYNCHRONIZED (Counters Match)",a="bg-emerald-950 text-emerald-300 border-emerald-700"):t>0&&t<=o?(n="DESYNCHRONIZED (Recoverable via Look-Ahead: +"+t+" steps)",a="bg-amber-950 text-amber-300 border-amber-700"):t>o?(n="PERMANENTLY DESYNCHRONIZED (Exceeds Look-Ahead Window: +"+t+" steps)",a="bg-rose-950 text-rose-300 border-rose-700"):(n="SERVER AHEAD (Replay / Counter Rollback Detected)",a="bg-rose-950 text-rose-300 border-rose-700"),{diff:t,status:n,color:a}},[i,l,o]),H=()=>{N(t=>t+1)},F=()=>{i>=l&&i-l<=o&&E(i)},[T,R]=s.useState("barrackpore_ntp"),w={barrackpore_ntp:{id:"barrackpore_ntp",title:"Barrackpore Municipal Treasury: NTP Drift Resolution",location:"Municipal financial authorization portal with 350 active accounting staff",engineers:"Susmita (SecOps Lead) & Debangshu (Senior Systems Architect)",threatScenario:"At month-end salary processing, 42 municipal accountants reported that their Google Authenticator 6-digit codes were rejected, bringing payroll authorization to a standstill.",solution:"Forensic root-cause analysis revealed that the local FreeRADIUS authentication server had lost NTP sync, drifting 48 seconds ahead of UTC. Configured redundant Chrony NTP servers and automated time drift alarms.",outcome:"Server time locked within 2 milliseconds of Indian Standard Time (IST); 100% login success rate restored immediately."},kolkata_fintech_replay:{id:"kolkata_fintech_replay",title:"Salt Lake Sector V FinTech: TOTP Replay Attack Defense",location:"Merchant settlement API handling ₹12,00,00,000 daily disbursements",engineers:"Mahima (Lead Cryptographer) & Mamata (Infrastructure Lead)",threatScenario:"Adversaries sniffing unencrypted Wi-Fi in local cafes captured valid TOTP codes submitted by merchant clerks and replayed them 12 seconds later to authorize secondary fund transfers.",solution:"Engineered Redis atomic counter locks with 60-second TTL: when a code matching time counter T is consumed, any secondary submission with identical counter is rejected instantly.",outcome:"Zero unauthorized transfer replays; 100% single-use enforcement certified under PCI-DSS 4.0 standards."},ichapur_hotp_hardware:{id:"ichapur_hotp_hardware",title:"Ichapur Ordnance Facility: Hardware HOTP Token Deployment",location:"Air-gapped high-security manufacturing cells with zero cellular reception",engineers:"Abhronila (Chief Security Officer) & Hardware Engineers",threatScenario:"Staff in shielded subterranean bunkers could not receive SMS or push notifications, requiring offline physical key fobs resistant to counter desynchronization.",solution:"Deployed OATH HOTP hardware key fobs with a calibrated look-ahead window of s = 20 and server-side rate-limiting after 3 consecutive failures.",outcome:"100% reliable offline authentication in shielded facilities; zero desynchronization lockouts reported over 24 months."}},c=w[T];return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 space-y-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("header",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-cyan-950 text-cyan-400 border border-cyan-800 rounded-full text-xs font-semibold uppercase tracking-wider",children:"Module 005_005 • Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-semibold",children:"BCA BCAC703 • Cyber Security"})]}),e.jsx("h1",{className:"text-2xl md:text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Time-based One-Time Passwords (TOTP) & HMAC-based OTP (HOTP)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Classroom Lab:"}),e.jsx("span",{className:"text-xs font-bold text-cyan-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800",children:"Barrackpore • West Bengal"})]})]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed",children:["Time-based One-Time Passwords (RFC 6238) and HMAC-based OTPs (RFC 4226) power the global standard for offline, app-based 2FA. Explore the mathematics of ",e.jsx("strong",{children:"HMAC-SHA1"})," and ",e.jsx("strong",{children:"Dynamic Truncation (DT)"}),", master",e.jsx("strong",{children:"Base32 secret encoding"}),", simulate ",e.jsx("strong",{children:"Clock Drift tolerance windows"}),", and examine atomic replay protection and ",e.jsx("strong",{children:"HOTP look-ahead resynchronization"}),"."]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg md:text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"⏱️"})," Studio 1: Live Real-Time TOTP Generator & Dynamic Truncation Engine"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Observe the live 30-second time-step cycle and how RFC 6238 extracts a 6-digit integer from a 20-byte HMAC-SHA1 digest."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Time-Step Countdown:"}),e.jsxs("span",{className:"px-3 py-1 bg-cyan-950 text-cyan-300 border border-cyan-700 rounded-full font-mono text-xs font-bold",children:[y,"s remaining"]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col justify-between items-center text-center space-y-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold tracking-widest text-slate-500",children:"Google Authenticator Profile"}),e.jsx("div",{className:"text-sm font-bold text-white",children:"Barrackpore Treasury: Susmita"})]}),e.jsxs("div",{className:"bg-slate-900 px-6 py-4 rounded-2xl border border-cyan-500/50 shadow-lg shadow-cyan-950/50 space-y-1",children:[e.jsxs("div",{className:"text-xl sm:text-2xl md:text-3xl font-bold font-mono text-cyan-300 tracking-wider",children:[x.slice(0,3)," ",x.slice(3)]}),e.jsx("div",{className:"w-full bg-slate-800 h-1.5 rounded-full overflow-hidden",children:e.jsx("div",{className:"bg-cyan-400 h-full transition-all duration-1000 ease-linear",style:{width:`${y/30*100}%`}})})]}),e.jsxs("div",{className:"text-[11px] font-mono text-slate-400",children:["Time Counter: ",e.jsx("span",{className:"text-cyan-400",children:f})," (Epoch / 30)"]})]}),e.jsxs("div",{className:"md:col-span-2 bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3 text-xs",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2",children:[e.jsx("span",{className:"font-bold text-white uppercase tracking-wider text-[11px]",children:"RFC 4226 / 6238 Dynamic Truncation (DT) Breakdown"}),e.jsx("span",{className:"text-cyan-400 font-mono text-[10px]",children:"Algorithm: HMAC-SHA1"})]}),e.jsxs("div",{className:"space-y-2 text-slate-300",children:[e.jsxs("div",{className:"p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between",children:[e.jsx("span",{children:"1. 20-Byte HMAC Digest:"}),e.jsxs("span",{className:"font-mono text-slate-400 text-[10px]",children:[P,"... (160 bits)"]})]}),e.jsxs("div",{className:"p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between",children:[e.jsx("span",{children:"2. Dynamic Offset ($HS[19] \\ \\& \\ 0x0F$):"}),e.jsxs("span",{className:"font-mono text-cyan-300 font-bold",children:["Offset = ",S," (0 to 15)"]})]}),e.jsxs("div",{className:"p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between",children:[e.jsx("span",{children:"3. 4-Byte Extraction ($HS[Offset : Offset+4]$):"}),e.jsx("span",{className:"font-mono text-indigo-300 font-bold",children:"4 Bytes Extracted"})]}),e.jsxs("div",{className:"p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between",children:[e.jsx("span",{children:"4. Mask MSB ($Binary \\ \\& \\ 0x7FFFFFFF$):"}),e.jsx("span",{className:"font-mono text-purple-300",children:"Positive 31-bit Integer"})]}),e.jsxs("div",{className:"p-2.5 bg-cyan-950/40 rounded-lg border border-cyan-800/80 flex items-center justify-between font-bold",children:[e.jsxs("span",{className:"text-cyan-300",children:["5. Modulo Reduction ($Binary \\pmod",12,"$):"]}),e.jsx("span",{className:"font-mono text-white text-sm tracking-wider",children:x})]})]})]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg md:text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🕰️"})," Studio 2: Clock Drift & Server Tolerance Window Simulator"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Simulate client mobile phone clock inaccuracies and observe how the server's tolerance window ($W = \\pm 1$ step) accepts or rejects codes."})]}),e.jsx("div",{className:m("px-3 py-1 rounded-full text-xs font-bold border",u.badgeColor),children:u.isAccepted?"VALIDATION SUCCESS":"VALIDATION FAILED"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-5",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs font-bold text-slate-300",children:[e.jsx("span",{children:"Client Mobile Phone Clock Drift:"}),e.jsx("span",{className:"font-mono text-cyan-400",children:r>0?`+${r}s (Fast)`:r<0?`${r}s (Slow)`:"0s (Perfect UTC Sync)"})]}),e.jsx("input",{type:"range",min:"-60",max:"60",step:"5",value:r,onChange:t=>O(Number(t.target.value)),className:"w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[e.jsx("span",{children:"-60s (Slow)"}),e.jsx("span",{children:"-30s (Step -1)"}),e.jsx("span",{children:"0s"}),e.jsx("span",{children:"+30s (Step +1)"}),e.jsx("span",{children:"+60s (Fast)"})]})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs",children:[e.jsx("span",{className:"text-slate-300 font-semibold",children:"Server Tolerance Setting:"}),e.jsx("span",{className:"font-mono text-cyan-400 font-bold",children:"W = ±1 Step (±30s Window)"})]})]}),e.jsx("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3 flex flex-col justify-between",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Server Authentication Verification Result"}),e.jsx("div",{className:m("p-3.5 rounded-lg border text-xs md:text-sm font-semibold",u.badgeColor),children:u.verdict}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed pt-2",children:"When a client clock drifts by more than $\\pm 30 seconds$, the generated time counter advances to $T \\pm 2$, causing legitimate authentication requests to fail completely."})]})})]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg md:text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🔄"})," Studio 3: HOTP Counter Desynchronization & Resync Sandbox"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Simulate physical key fob button presses offline and observe how the server uses a Look-Ahead Window ($s=10$) to catch up."})]}),e.jsx("div",{className:m("px-3 py-1 rounded-full text-xs font-bold border",b.color),children:b.status})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4 text-center",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Physical Hardware Token (Key Fob)"}),e.jsxs("div",{className:"text-2xl font-bold font-mono text-cyan-300",children:["Counter $C_client = ",i,"$"]}),e.jsx("button",{onClick:H,className:"w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg text-xs transition-colors",children:"Press Token Button (Advance $C$) 🔘"})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4 text-center",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Authentication Server State"}),e.jsxs("div",{className:"text-2xl font-bold font-mono text-emerald-300",children:["Counter $C_server = ",l,"$"]}),e.jsx("button",{onClick:F,className:"w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs transition-colors",children:"Submit Code & Resync 🚀"})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3 text-xs",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-2",children:[e.jsx("span",{className:"font-bold text-white",children:"Look-Ahead Parameter ($s$):"}),e.jsxs("span",{className:"font-mono text-cyan-400 font-bold",children:[o," steps"]})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-[11px]",children:["Server checks candidate counters from $C_server+1$ to $C_server+",o,"$. Current Counter Gap: ",e.jsxs("strong",{className:"text-white font-mono",children:[b.diff," steps"]}),"."]})]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg md:text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," Studio 4: Regional SOC Incident Response Drills (West Bengal)"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Forensic investigation of clock drift, replay attacks, and offline tokens in regional enterprise operations."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(w).map(t=>e.jsx("button",{onClick:()=>R(t),className:m("px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200",T===t?"bg-cyan-600 text-white shadow-lg shadow-cyan-950":"bg-slate-950 text-slate-400 hover:text-white border border-slate-800"),children:t==="barrackpore_ntp"?"Barrackpore NTP Drift":t==="kolkata_fintech_replay"?"Kolkata FinTech Replay":"Ichapur Hardware Tokens"},t))})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-base font-bold text-white",children:c.title}),e.jsx("span",{className:"text-xs text-cyan-400 font-mono bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800",children:c.location})]}),e.jsxs("div",{className:"text-xs text-slate-400",children:[e.jsx("strong",{className:"text-slate-300",children:"Lead SecOps Engineers: "})," ",c.engineers]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-rose-400 uppercase text-[10px] tracking-wider block",children:"Incident Failure Vector"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:c.threatScenario})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-cyan-400 uppercase text-[10px] tracking-wider block",children:"Cryptographic Remediation"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:c.solution})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-emerald-400 uppercase text-[10px] tracking-wider block",children:"Operational Outcome"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:c.outcome})]})]})]})]}),e.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-900/40 rounded-2xl p-6 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Vulnerabilities"]}),e.jsxs("ul",{className:"space-y-3 text-xs text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Omitting Atomic Replay Prevention:"})," Allowing the same valid TOTP code to be re-submitted multiple times within the 30-second window."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Ignoring Server NTP Synchronization:"})," Unsynchronized server clocks drift outside the tolerance window, causing total login failures."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Storing Plaintext Base32 Secrets in Database:"})," Stolen database dumps allow adversaries to clone all user authenticators offline."]})]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-900/40 rounded-2xl p-6 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🛡️"})," Cryptographic Best Practices"]}),e.jsxs("ul",{className:"space-y-3 text-xs text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Use Constant-Time Comparison:"})," Prevent nanosecond side-channel timing attacks by verifying codes with `crypto.timingSafeEqual()`."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Encrypt TOTP Secrets with KMS/HSM:"})," Protect Base32 seed keys at rest using envelope encryption (AES-256-GCM)."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Enforce Strict Replay Cache (Redis):"})," Mark validated counter steps as consumed with a 60-second TTL to guarantee single-use."]})]})]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-base border-b border-slate-800 pb-3",children:[e.jsx("span",{children:"💡"})," Instructor Hints & Retention Checklist"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300",children:[e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-cyan-300",children:"Think About:"}),e.jsx("p",{className:"leading-relaxed",children:"Why does TOTP need no internet connection on your phone? Because both your phone and the server share the exact same Base32 secret key and compute HMAC-SHA1 using the same Unix epoch time counter ($T = \\lfloor time/30 \\rfloor$)!"})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-emerald-300",children:"Student Checklist:"}),e.jsxs("ul",{className:"space-y-1.5 list-disc list-inside text-slate-400",children:[e.jsxs("li",{children:["HOTP Formula: $HOTP(K, C) = Truncate(HMAC-SHA1(K, C)) \\pmod",10^d,"$."]}),e.jsx("li",{children:"TOTP Formula: $TOTP(K, T) = HOTP(K, \\lfloor time/30 \\rfloor)$."}),e.jsx("li",{children:"Dynamic Truncation uses low 4 bits of last byte as offset (0 to 15)."}),e.jsx("li",{children:"Tolerance Window ($W = \\pm 1$ step) prevents clock drift lockouts."}),e.jsx("li",{children:"Atomic Redis cache prevents 30-second window code replay attacks."})]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 text-lg",children:"🐍"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"Hands-on RFC 6238 TOTP & RFC 4226 HOTP Generator Script"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Standalone Python script implementing HMAC-SHA1 hashing, Dynamic Truncation, tolerance windows, and atomic replay guards"})]})]}),e.jsx(I,{fileModule:W,title:"totp_hotp_generator.py",highlightLines:[25,45,65,85,105]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(M,{title:"TOTP & HOTP Cryptographic FAQs",questions:D})}),e.jsx(_,{note:"For your BCA BCAC703 examination: Master the mathematical difference between HOTP (RFC 4226, event counter C) and TOTP (RFC 6238, time counter T = floor(Epoch/30)). Write out the 5 steps of Dynamic Truncation (DT) including the offset extraction (HS[19] & 0x0F) and MSB masking (& 0x7FFFFFFF). Explain how servers handle clock drift with tolerance windows (W = ±1) and how atomic caches stop replay attacks within the 30-second window."}),e.jsx("section",{className:"space-y-4",children:e.jsx($,{content:B,title:"Topic 4: TOTP & HOTP Cryptography Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 4 Note",downloadFileName:"topic4_totp_hotp_note.txt"})})]})})};export{Q as default};
