import{r,j as e}from"./index-DQGlkDD-.js";import{c as a}from"./clsx-B-dksMZM.js";import{T as x}from"./TeacherSukantaHui-BKmNB23P.js";import{F as f}from"./FAQTemplate-DFumfJBl.js";import{P as k}from"./PlainTextPrint-CW5C5iHj.js";import{P as y}from"./PythonFileLoader-D9CQhVaU.js";import"./github-CG9Ag1Gm.js";import"./createLucideIcon-DkPaqQ-z.js";import"./git-branch-tvjRpsF3.js";import"./PythonCodeBlock-CEzPkz3E.js";import"./prism-CtT2IhSy.js";import"./browser-CG--_uGh.js";const v=[{id:1,question:"What is a Blockchain and how does it achieve cryptographic immutability?",shortAnswer:"A blockchain is a decentralized, distributed, append-only cryptographic ledger where each block contains a cryptographic hash of the previous block ($H_i = \\text{SHA256}(H_{i-1} || \\text{MerkleRoot} || \\text{Nonce})$). Modifying any past transaction breaks the hash chain for all subsequent blocks, making retroactive tampering mathematically evident.",explanation:"Immutability is guaranteed through the combination of SHA-256 hash chaining and consensus mechanisms.",hint:"Each block contains the hash of the previous block; modifying any block breaks the entire chain.",level:"Basic",codeExample:`// Hash Chaining:
// Block 0 (Genesis) : Hash = "000abc..."
// Block 1 : PreviousHash = "000abc..." | Hash = "000def..."
// Block 2 : PreviousHash = "000def..." | Hash = "000123..."`},{id:2,question:"What is a Merkle Tree (Binary Hash Tree) and why is it used inside blockchain blocks?",shortAnswer:"A Merkle Tree hashes transactions pairwise in a binary tree structure up to a single top hash (Merkle Root). It allows nodes to verify whether a specific transaction exists within a block in $O(\\log_2 N)$ logarithmic time (using a compact Merkle Proof) without downloading the entire block.",explanation:"Merkle trees enable lightweight Simplified Payment Verification (SPV) clients on mobile devices.",hint:"Binary tree of pairwise hashes; allows verifying a transaction in O(log N) time with a Merkle proof.",level:"Moderate",codeExample:`// Merkle Tree Calculation:
// Tx1 ➔ H1, Tx2 ➔ H2 ➔ H12 = SHA256(H1 + H2)
// Tx3 ➔ H3, Tx4 ➔ H4 ➔ H34 = SHA256(H3 + H4)
// Merkle Root = SHA256(H12 + H34)`},{id:3,question:"What happens during a Tamper Cascade when an adversary modifies a single historical transaction?",shortAnswer:"Modifying transaction data in Block #K alters Block #K's Merkle Root, changing its block hash $H_K$. Because Block #K+1 references $H_K$ as its `previous_hash`, Block #K+1 becomes cryptographically invalid, invalidating all subsequent blocks (#K+2 to #N).",explanation:"To forge the ledger, an attacker must recompute Proof-of-Work for the tampered block and all subsequent blocks faster than the honest network.",hint:"Changing one block invalidates all subsequent blocks in the chain, exposing tampering instantly.",level:"Basic",codeExample:`// Tamper Cascade Effect:
// Attacker edits Block #2 ➔ Hash(#2) changes ➔ Block #3 previous_hash mismatch ➔ Chain rejected by network! 🚨`},{id:4,question:"What is Proof-of-Work (PoW / Nakamoto Consensus) and what role does the Nonce play?",shortAnswer:"PoW is a consensus mechanism where nodes (miners) compete to find a 32-bit `nonce` value such that the SHA-256 hash of the block header is less than a dynamic target value (i.e., starts with $D$ leading zeros). The difficulty adjusts dynamically to maintain predictable block creation times.",explanation:"Proof-of-Work provides thermodynamic security, making ledger rewriting computationally cost-prohibitive.",hint:"Iterating the nonce to find a SHA-256 hash with required leading zeros.",level:"Basic",codeExample:`// PoW Mining Loop:
let nonce = 0;
while (!sha256(header + nonce).startsWith("0000")) {
    nonce++;
}`},{id:5,question:"What is a 51% Consensus Attack in Proof-of-Work blockchains?",shortAnswer:"An attack where an adversary controls more than 50% of the network's total computational mining hashrate. This allows the attacker to mine a private fork faster than the public honest network, enabling Double-Spending and transaction reorganizations.",explanation:"Even with 51% hashrate, the attacker CANNOT forge cryptographic signatures, steal funds from private keys, or alter old historical blocks.",hint:"Controlling > 50% hashrate allows rewriting recent blocks and double-spending coins.",level:"Moderate",codeExample:`// 51% Hashrate Race:
// Attacker Hashrate = 55% | Honest Network = 45%
// Attacker private chain grows faster ➔ Releases longer chain ➔ Honest network adopts it (Double-Spend 🚨)`},{id:6,question:"What is Byzantine Fault Tolerance (BFT) and what is the maximum proportion of rogue nodes a BFT system can tolerate?",shortAnswer:"BFT is the property of a distributed system to reach consensus even if some nodes fail or act maliciously (transmitting conflicting messages). Classical BFT algorithms (like PBFT) can tolerate up to $f < n/3$ malicious nodes (less than 33.3% rogue nodes).",explanation:"In Nakamoto consensus (PoW), the fault tolerance threshold is extended to $f < 50%$ of computational hashrate.",hint:"Tolerance against malicious/failing nodes; classical PBFT tolerates up to 1/3 (33.3%) rogue nodes.",level:"Expert",codeExample:`// BFT Constraint:
// Total Nodes n = 3f + 1
// If n = 100 nodes ➔ Maximum tolerable rogue nodes f = 33 nodes.`},{id:7,question:"What is a Sybil Attack on peer-to-peer blockchain networks and how do consensus mechanisms prevent it?",shortAnswer:"A Sybil attack occurs when an adversary creates thousands of fake virtual nodes on a P2P network to monopolize communication channels and isolate legitimate nodes (Eclipse Attack). Consensus mechanisms prevent this by tying voting weight to scarce physical resources (computational hashrate in PoW, or locked capital in PoS) rather than IP addresses.",explanation:"Tying consensus weight to physical resources makes creating millions of fake node identities economically useless.",hint:"Creating fake peer nodes to manipulate the network; prevented by tying consensus to hashrate or staked capital.",level:"Moderate",codeExample:`// Sybil Defense:
// Attacker spawns 10,000 fake IP nodes -> Total Staked Capital = 0 ETH -> Consensus Weight = 0% ✔`},{id:8,question:"How is Blockchain used for Tamper-Proof SIEM and Audit Logging in enterprise SOCs?",shortAnswer:"Enterprises compute SHA-256 cryptographic hashes of audit log batches (e.g., hourly SIEM log summaries) and write the root hashes onto a public or permissioned blockchain. If an insider or ransomware attacker modifies the local SIEM logs to hide their tracks, the hash mismatch with the blockchain proves log tampering in court.",explanation:"Blockchain provides mathematically indisputable non-repudiation for digital forensics and compliance audits.",hint:"Writing hourly log hashes onto a blockchain ensures administrators cannot secretly modify logs to hide tracks.",level:"Moderate",codeExample:`// Tamper-Proof Audit Logging:
// Log Batch #401 ➔ SHA256(Logs) = "7f8a9b..." ➔ Anchored in Blockchain Transaction Tx_99182.`},{id:9,question:"What is Decentralized Public Key Infrastructure (DPKI) and how does it solve Certificate Authority (CA) single points of failure?",shortAnswer:"In traditional PKI, if a root Certificate Authority (like DigiCert or Let's Encrypt) is compromised or coerced by a nation-state, rogue SSL certificates can be forged. DPKI stores public keys and domain ownership records directly on an immutable blockchain ledger, eliminating centralized CAs entirely.",explanation:"In DPKI, only the private key owner can update or revoke their domain's public key.",hint:"Stores public keys directly on an immutable blockchain, eliminating centralized Certificate Authorities.",level:"Expert",codeExample:`// DPKI vs Traditional PKI:
// Traditional : Rely on 150 Root CAs in browser trust store (Any single CA breach allows MITM ❌)
// DPKI        : Domain public keys registered in smart contract ledger (Immune to rogue CAs ✔)`},{id:10,question:"What is the difference between Public (Permissionless) and Private (Permissioned / Consortium) Blockchains?",shortAnswer:"Public (Ethereum, Bitcoin): Anyone can join, read, and mine; uses PoW/PoS; fully decentralized. Permissioned (Hyperledger Fabric, R3 Corda): Access is restricted to vetted organizations with cryptographic identity certificates; uses fast BFT consensus; ideal for banking consortia and government registries.",explanation:"Permissioned blockchains offer high transaction throughput (> 5,000 TPS) and strict privacy controls for enterprise use.",hint:"Public is open to everyone (Bitcoin); Permissioned is restricted to authorized enterprise members (Hyperledger).",level:"Basic",codeExample:`// Blockchain Models:
// Public       : Ethereum (Open participation, pseudonymous)
// Permissioned : Hyperledger Fabric (Authorized banks with X.509 certificates, high TPS)`},{id:11,question:"What is an Eclipse Attack in blockchain P2P networking?",shortAnswer:"An adversary isolates a specific target node by manipulating its peer discovery table so that all incoming and outgoing connections connect exclusively to attacker-controlled nodes. The attacker feeds the victim node false block information, enabling zero-confirmation double-spending.",explanation:"Defenses include maintaining connections across diverse ASNs, random peer selection, and static trusted peers.",hint:"Surrounding a victim node with attacker-controlled peers to feed it fake blockchain data.",level:"Moderate",codeExample:`// Eclipse Isolation:
// Target Node Peer Table: [Attacker_Peer_1, Attacker_Peer_2, Attacker_Peer_3] (Completely blinded from honest network 🚨)`},{id:12,question:"What is Proof-of-Stake (PoS) and how does the 'Slashing' mechanism enforce security?",shortAnswer:"In PoS, validators lock up capital (cryptocurrency stake) as collateral to propose and validate blocks. Slashing is an automated protocol rule that permanently confiscates and burns a validator's staked capital if they act maliciously (e.g., signing two conflicting blocks at the same height or going offline).",explanation:"Slashing makes attacking a PoS network economically self-destructive (attackers lose hundreds of millions of rupees in stake).",hint:"Validators lock up capital; rogue behavior causes automated burning (slashing) of their money.",level:"Moderate",codeExample:`// PoS Slashing Condition:
// IF Validator signs Block_A AND Block_B at Height 100:
// ➔ Execute Slashing: Burn 32 ETH ($80,000) + Eject from validator set!`},{id:13,question:"What is a Smart Contract in blockchain technology?",shortAnswer:"A self-executing, immutable program stored on the blockchain that automatically executes business logic and transfers assets when pre-defined cryptographic conditions are met (e.g., Solidity code running on the Ethereum Virtual Machine - EVM).",explanation:"Smart contracts eliminate trusted intermediaries, but code vulnerabilities are permanently un-patchable on-chain.",hint:"Self-executing code stored on the blockchain that runs automatically without intermediaries.",level:"Basic",codeExample:`// Solidity Smart Contract:
// contract Escrow {
//     function release() public { require(msg.sender == buyer); payable(seller).transfer(amount); }
// }`},{id:14,question:"What is Cryptographic Nonce and Difficulty Adjustment in Bitcoin Proof-of-Work?",shortAnswer:"The Nonce is a 32-bit arbitrary number varied by miners to change the block header hash. Difficulty Adjustment is an automated algorithm that evaluates the time taken to mine the last 2,016 blocks; if blocks were found faster than 10 minutes, difficulty increases (requiring more leading zeros) to maintain steady issuance.",explanation:"Difficulty adjustment maintains predictable block issuance regardless of global hashrate growth.",hint:"Difficulty adjusts every 2016 blocks to keep block mining time at exactly 10 minutes.",level:"Moderate",codeExample:`// Difficulty Adjustment Formula:
// New_Difficulty = Old_Difficulty * (Actual_Time_for_2016_blocks / Target_Time_20160_mins)`},{id:15,question:"How does Blockchain enhance Software Supply Chain Integrity (e.g., in CI/CD pipelines)?",shortAnswer:"When software is compiled, the build pipeline generates a cryptographic hash of the binary and records the hash, source Git commit ID, and developer cryptographic signatures onto a blockchain ledger. Enterprise endpoints check the binary against the blockchain before executing, blocking modified supply chain malware.",explanation:"Even if an attacker compromises a vendor's download server, the altered binary hash will not match the immutable blockchain record.",hint:"Records binary hashes and build metadata on-chain; endpoints verify hash before executing.",level:"Moderate",codeExample:`// Supply Chain Verification:
// Downloaded 'app.exe' ➔ SHA256 = "8f9a2b..."
// Query Blockchain: "8f9a2b..." verified signed by Vendor_Key at Block #88219 -> EXECUTION PERMITTED ✔`},{id:16,question:"What is a Reentrancy Attack in smart contracts (e.g., The DAO Hack)?",shortAnswer:"An attack where a malicious contract calls a vulnerable withdraw function, and before the vulnerable contract can update its balance variable, the malicious fallback function recursively calls `withdraw()` again, repeatedly draining funds before the balance is ever set to zero.",explanation:"Mitigated by the Checks-Effects-Interactions pattern and ReentrancyGuard mutex locks.",hint:"Recursively calling a withdraw function before the contract can update its internal balance.",level:"Expert",codeExample:`// Vulnerable Reentrancy:
// 1. msg.sender.call{value: balance}("") (Transfers ETH -> Calls Attacker Fallback)
// 2. balances[msg.sender] = 0; (NEVER REACHED! Drained in loop)`},{id:17,question:"What is Zero-Knowledge Proof (ZKP / zk-SNARKs) in blockchain privacy and security?",shortAnswer:"A cryptographic method allowing one party (Prover) to mathematically prove to another (Verifier) that a statement is true (e.g., 'I am over 18 years old' or 'I possess a valid private key') without revealing ANY underlying information (e.g., birthdate or key bytes).",explanation:"zk-SNARKs allow private transactions and decentralized identity verification on public blockchains without leaking sensitive personal data.",hint:"Proving a statement is true without revealing any of the underlying secret data.",level:"Expert",codeExample:`// ZKP Verification:
// verify_proof(Proof_zk, Public_Statement) ➔ True (Without revealing user's private Aadhaar ID or salary)`},{id:18,question:"What is the Double-Spending Problem and how does blockchain solve it without a central bank?",shortAnswer:"In digital systems, digital data can be copied infinitely (spending the same ₹50,000 twice). Blockchain solves this by maintaining a globally synchronized, append-only UTXO (Unspent Transaction Output) or Account state machine where each coin can be referenced as an input only ONCE, verified by decentralized consensus.",explanation:"Consensus ordering ensures the first valid transaction is accepted and the conflicting duplicate transaction is permanently rejected.",hint:"Spending the same digital money twice; solved by consensus ordering and UTXO tracking.",level:"Basic",codeExample:`// Double-Spend Attempt:
// Tx1: Spend Coin_A -> Bob (Confirmed in Block #100)
// Tx2: Spend Coin_A -> Alice (REJECTED by nodes: Coin_A is already spent!) ❌`},{id:19,question:"What is a Selfish Mining Attack in Proof-of-Work blockchains?",shortAnswer:"A game-theoretic attack where a mining pool finds new blocks but keeps them secret, mining privately ahead of the public network. When the honest network is about to catch up, the selfish miner releases its longer secret chain, wiping out the honest miners' blocks and wasting their compute power.",explanation:"Selfish mining becomes profitable with as little as 25% to 33% of the total network hashrate.",hint:"Keeping mined blocks secret to invalidate honest miners' work and increase relative reward share.",level:"Expert",codeExample:`// Selfish Mining Strategy:
// Pool mines Block #101 privately -> Mines Block #102 privately -> Honest network mines #101 -> Pool releases [#101, #102] -> Honest #101 orphaned!`},{id:20,question:"What is Hashcash in the origin of Proof-of-Work?",shortAnswer:"A 1997 mechanism proposed by Adam Back to prevent email spam and Denial of Service by requiring the sender to compute a partial SHA-1 collision (finding a hash with leading zeros) on the email header, imposing a small computational cost (e.g., 2 seconds of CPU) per email.",explanation:"Satoshi Nakamoto adapted Hashcash to serve as the core consensus engine for Bitcoin in 2008.",hint:"1997 anti-spam mechanism requiring senders to compute partial hash collisions before sending email.",level:"Basic",codeExample:`// Hashcash Header:
// X-Hashcash: 1:20:060408:recipient@bank.in::4a9f2b:0000000000000000`},{id:21,question:"What is an Oracle Problem in blockchain and smart contracts?",shortAnswer:"Smart contracts running on an isolated blockchain cannot directly fetch real-world data (e.g., stock prices, weather, IoT sensor readings) without relying on external entities called 'Oracles'. If the Oracle is compromised or feeds malicious data, the smart contract executes incorrect actions.",explanation:"Decentralized oracle networks (like Chainlink) use multi-source consensus to secure external data feeds.",hint:"Smart contracts cannot access off-chain data without Oracles; compromised Oracles feed false data.",level:"Moderate",codeExample:`// Oracle Vulnerability:
// Compromised Oracle feeds: "USD/INR = 0.01" ➔ Smart contract liquidation logic drains millions! 🚨`},{id:22,question:"What is MEV (Maximal / Miner Extractable Value) and Front-Running in decentralized finance?",shortAnswer:"MEV is the maximum profit a blockchain miner/validator can extract by arbitrarily reordering, inserting, or censoring transactions within a block. Front-Running occurs when a bot detects a profitable pending transaction in the public mempool and pays a higher gas fee to get its own transaction mined first.",explanation:"MEV exploitation causes financial loss to users and creates consensus instability.",hint:"Validators or bots reordering transactions in the mempool to front-run profitable trades.",level:"Expert",codeExample:`// Sandwich Attack (MEV):
// Bot inserts Tx_Buy BEFORE Victim Tx ➔ Price rises ➔ Victim buys high ➔ Bot inserts Tx_Sell AFTER Victim (Instant Profit)`},{id:23,question:"What is Directed Acyclic Graph (DAG) Distributed Ledger Technology (e.g., IOTA / Nano) and how does it differ from a blockchain?",shortAnswer:"In a DAG, transactions are not bundled into discrete sequential blocks. Instead, each individual new transaction directly validates and links to two or more previous transactions, forming an asynchronous directed graph without miners or transaction fees.",explanation:"DAG architectures offer micro-transaction scaling suitable for low-power IoT sensor networks.",hint:"Transactions link directly to previous transactions in an asynchronous graph without blocks.",level:"Moderate",codeExample:`// DAG Structure:
// Tx_New ➔ Directly validates [Tx_A, Tx_B] (No miners, instant asynchronous confirmation)`},{id:24,question:"How does Blockchain DNS (e.g., Namecoin / Handshake / ENS) eliminate DNS Hijacking and Censorship?",shortAnswer:"Traditional DNS relies on ICANN root servers and centralized registrars vulnerable to BGP hijacking and court seizures. Blockchain DNS registers domain-to-IP mappings on an immutable blockchain where only the private key holder can update the DNS record, eliminating unauthorized hijacking.",explanation:"Decentralized DNS guarantees censorship resistance and tamper-proof domain resolution.",hint:"Registers domain records on a blockchain where only the private key owner can update DNS mappings.",level:"Moderate",codeExample:`// Blockchain DNS Record:
// Domain "barrackpore.eth" ➔ IPFS Content Hash: "QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"`},{id:25,question:"What is Time-to-Finality (TTF) in blockchain consensus?",shortAnswer:"The duration required for a transaction to become cryptographically irreversible. In PoW (Probabilistic Finality), finality requires waiting for 6 block confirmations (~60 minutes). In BFT/PoS systems (Deterministic Finality), finality is achieved in 1 to 3 seconds upon validator quorum signature.",explanation:"Fast finality is essential for real-time commercial payments and fraud mitigation.",hint:"Time required for a transaction to become permanently irreversible.",level:"Moderate",codeExample:`// Finality Comparison:
// Bitcoin PoW   : ~60 minutes (6 confirmations)
// PoS / BFT     : ~2.5 seconds (Instant deterministic finality)`},{id:26,question:"What is a 51% Attack Goldfinger Attack in state-sponsored cyber warfare?",shortAnswer:"An attack where a nation-state adversary acquires 51% hashrate not to steal money, but with the explicit strategic goal of destroying confidence in a rival nation's cryptocurrency or supply chain blockchain by continuously reorganizing blocks and rendering the ledger unusable.",explanation:"Named after the James Bond villain, Goldfinger attacks prioritize network destruction over profit.",hint:"51% attack intended to destroy network trust and usability rather than extract financial profit.",level:"Expert",codeExample:`// Goldfinger Objective:
// Constant 10-block reorgs ➔ Merchants stop accepting transactions ➔ Entire blockchain ecosystem collapses.`},{id:27,question:"How does Zero-Knowledge Rollup (zk-Rollup) achieve Layer-2 scaling while inheriting Layer-1 security?",shortAnswer:"zk-Rollups execute thousands of transactions off-chain, compress the state changes, and generate a succinct cryptographic zero-knowledge proof (SNARK/STARK) submitted to the Layer-1 Ethereum smart contract. The Layer-1 contract verifies the mathematical proof in milliseconds without re-executing transactions.",explanation:"Rollups increase throughput from 15 TPS to 10,000+ TPS while preserving complete cryptographic security.",hint:"Processes transactions off-chain and posts a succinct zero-knowledge proof to Layer-1 for instant verification.",level:"Expert",codeExample:`// zk-Rollup Batch:
// 10,000 Transactions Off-Chain ➔ Generate zk-STARK Proof (12KB) ➔ Verify on Ethereum in 1 transaction!`},{id:28,question:"What is Fork Reorganization (Reorg) in blockchain forensics?",shortAnswer:"When a node receiving a longer or heavier valid chain abandons its current branch and switches to the new chain, orphaning all transactions included in the abandoned blocks. Forensic analysts track reorgs to detect double-spending events and mining cartel anomalies.",explanation:"Deep reorgs (> 6 blocks) indicate network attacks or severe partition anomalies.",hint:"Switching from an old branch to a longer incoming chain, orphaning abandoned blocks.",level:"Moderate",codeExample:`// Reorg Event:
// Node was on Block #50 (Branch A) -> Receives Branch B at Block #52 -> Replaces Branch A (2 blocks reorganized)`},{id:29,question:"In the Barrackpore Municipal Property Registry deployment, fraudsters attempted to alter a property deed record by hacking the municipal database server. How did the permissioned blockchain architecture defeat this tampering attempt?",shortAnswer:"The deed was cryptographically anchored across 8 independent nodes (Treasury, Land Ministry, Judiciary, CAG Audit). When the hacker modified the local MySQL database on one server, the local block hash mismatch was rejected during BFT consensus verification against the other 7 nodes, preventing deed modification and alerting the SOC.",explanation:"Decentralized consensus guarantees that compromising a single server cannot alter immutable enterprise records.",hint:"Hash mismatch on the hacked server was instantly rejected by the other 7 consensus nodes.",level:"Expert",codeExample:`// Multi-Node Consensus Defense:
// Hacked Node A proposes altered deed ➔ Nodes B, C, D, E, F, G, H compare Merkle Root ➔ 7 vs 1 Vote: REJECTED & ALARM! ✔`},{id:30,question:"Write out the comprehensive technical blueprint for integrating a Blockchain Tamper-Proof Audit Logging Architecture in an enterprise SOC.",shortAnswer:"1. Log Ingestion: SIEM aggregates Sysmon and NetFlow logs into 1-minute batches. 2. Merkle Root Generation: Python engine computes the SHA-256 binary Merkle Root of the batch. 3. Blockchain Anchoring: Smart contract writes the Merkle Root, timestamp, and SOC signature to an immutable ledger (Hyperledger / Ethereum). 4. Automated Verification: Audit cron job continuously recomputes log hashes against the on-chain roots. 5. Tamper Alarm: Any discrepancy triggers an immediate Level-1 SOC emergency lockdown.",explanation:"This architecture guarantees cryptographic non-repudiation and permanent tamper-evidence for all enterprise security logs.",hint:"Batch logs -> Compute Merkle Root -> Anchor on-chain -> Continuous verification cron -> Alert on mismatch.",level:"Expert",codeExample:`// Tamper-Proof Audit Architecture:
// [SIEM Logs (1-min batch)] ➔ [Merkle Tree Generator] ➔ Merkle Root H ➔ [Blockchain Anchor Tx] ➔ [Immutable Ledger]`}],w=`====================================================================================================
ACADEMIC STUDY GUIDE & FORENSIC NOTES: BLOCKCHAIN IN CYBER SECURITY & IMMUTABILITY
COURSE MODULE: 005_006 - EMERGING TECHNOLOGIES IN CYBER SECURITY (TOPIC 4)
INSTITUTION: CODER & ACCOTAX | INSTRUCTOR: SUKANTA HUI | LOCATION: BARRACKPORE, WEST BENGAL
====================================================================================================

1. CRYPTOGRAPHIC ARCHITECTURE OF A BLOCKCHAIN
----------------------------------------------------------------------------------------------------
A blockchain is an append-only distributed cryptographic ledger structured as a linear sequence of blocks:

1. Block Header Structure:
   - Index / Height: Integer sequence number.
   - Timestamp: Unix epoch time of creation.
   - Previous Block Hash ($H_{i-1}$): The SHA-256 hash of the parent block (establishing the backward link).
   - Merkle Root ($R_{\\text{Merkle}}$): Cryptographic summary hash of all transactions in the block.
   - Nonce: 32-bit integer adjusted during Proof-of-Work mining.
   - Current Block Hash ($H_i = \\text{SHA256}(\\text{Header})$).

2. Merkle Binary Tree (RFC 6962):
   - Transactions are hashed individually (Leaves).
   - Adjacent hashes are concatenated and hashed pairwise up to a single top hash (Merkle Root).
   - Verification Efficiency: Proving that a specific transaction exists in a block of $N$ transactions 
     requires only $O(\\log_2 N)$ hashes (Merkle Proof).


2. THE MATHEMATICS OF IMMUTABILITY & TAMPER-EVIDENCE
----------------------------------------------------------------------------------------------------
Why a blockchain is computationally impossible to tamper with retroactively:

- Suppose an adversary modifies a transaction in Block #10.
- Modifying Block #10 changes its Merkle Root and its Block Hash $H_{10}$.
- But Block #11 contains $H_{10}$ in its header. Therefore, Block #11's hash $H_{11}$ becomes invalid.
- This creates an unbroken Tamper Cascade: Every subsequent block (#11, #12, ..., #100) becomes invalid!
- To successfully forge the ledger, the attacker would have to re-mine the Proof-of-Work for Block #10 and 
  ALL 90 subsequent blocks faster than the entire honest network combined!


3. CONSENSUS MECHANISMS & ATTACK VECTORS
----------------------------------------------------------------------------------------------------
1. Proof-of-Work (PoW - Nakamoto Consensus):
   - Nodes compete to solve a computational puzzle ($\\text{SHA256}(\\text{Header}) < \\text{Target}$).
   - Security Guarantee: Longest chain rule (chain with the highest cumulative computational work).

2. The 51% Consensus Attack:
   - If an adversary or mining cartel controls $> 50\\%$ of the network's total hashrate, they can generate 
     a secret private fork faster than the honest network.
   - Impact: Enables Double-Spending and transaction reorganization (reorgs).
   - Limitation: Cannot forge digital signatures or steal private keys.

3. Sybil Attacks:
   - An adversary creates thousands of fake peer-to-peer node identities to surround a victim node (Eclipse Attack).
   - Defense: Proof-of-Work / Proof-of-Stake cost barriers and IP reputation scoring.


4. CYBERSECURITY APPLICATIONS OF BLOCKCHAIN
----------------------------------------------------------------------------------------------------
- Tamper-Proof Audit Logging: Storing SIEM and SOC audit trails on a decentralized ledger.
- Decentralized Public Key Infrastructure (DPKI): Eliminating centralized Certificate Authority (CA) single points of failure.
- Software Supply Chain Integrity: Storing cryptographic hashes of authorized software builds.


5. REGIONAL SOC CASE STUDIES (WEST BENGAL DEPLOYMENTS)
----------------------------------------------------------------------------------------------------
Case 1: Barrackpore Municipal Land Registry Immutability
- Architecture: Deployed permissioned blockchain (Hyperledger Fabric) for property deed registration.
- Result: 100% elimination of fraudulent land record tampering and duplicate deed syndicates.

Case 2: Salt Lake Sector V FinTech Tamper-Proof SIEM Ledger
- Architecture: Anchoring hourly SHA-256 root hashes of critical transaction logs onto an immutable blockchain.
- Result: Provided cryptographic non-repudiation during RBI and ISO 27001 regulatory compliance audits.
====================================================================================================
`,A=`#!/usr/bin/env python3
"""
===============================================================================
CYBERSECURITY LAB: BLOCKCHAIN CRYPTOGRAPHIC IMMUTABILITY & 51% ATTACK ENGINE
COURSE: BCA BCAC703 - Cyber Security | MODULE: 005_006 (Emerging Technologies)
INSTITUTION: Coder & AccoTax | INSTRUCTOR: Sukanta Hui | LOCATION: Barrackpore
===============================================================================
This script provides forensic simulations of:
1. Cryptographic Block Construction & Merkle Root Binary Tree calculation.
2. Proof-of-Work (PoW) Nonce Mining & Target Difficulty verification.
3. Cryptographic Chain Integrity & Tamper Cascade Propagation.
4. 51% Consensus Attack Simulation (Honest vs Rogue Hashrate Race).
"""

import sys
import time
import hashlib
import json
from dataclasses import dataclass
from typing import Dict, List, Tuple

# Ensure UTF-8 stdout encoding for currency symbols and bullets
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

@dataclass
class Block:
    index: int
    timestamp: float
    transactions: List[str]
    previous_hash: str
    merkle_root: str
    nonce: int
    hash: str

class BlockchainSecurityEngine:
    def __init__(self, difficulty: int = 2):
        self.difficulty = difficulty # Number of leading zeros required in SHA-256 hash
        self.chain: List[Block] = []
        self._create_genesis_block()

    def _compute_merkle_root(self, transactions: List[str]) -> str:
        """
        Computes binary SHA-256 Merkle Tree root from a transaction list.
        """
        if not transactions:
            return hashlib.sha256(b"EMPTY").hexdigest()

        hashes = [hashlib.sha256(tx.encode('utf-8')).hexdigest() for tx in transactions]

        while len(hashes) > 1:
            if len(hashes) % 2 != 0:
                hashes.append(hashes[-1]) # Duplicate last hash if odd
            new_level = []
            for i in range(0, len(hashes), 2):
                combined = hashes[i] + hashes[i+1]
                new_level.append(hashlib.sha256(combined.encode('utf-8')).hexdigest())
            hashes = new_level

        return hashes[0]

    def _calculate_block_hash(self, index: int, timestamp: float, previous_hash: str, merkle_root: str, nonce: int) -> str:
        header = f"{index}{timestamp}{previous_hash}{merkle_root}{nonce}".encode('utf-8')
        return hashlib.sha256(header).hexdigest()

    def _create_genesis_block(self):
        txs = ["GENESIS_BLOCK_BARRACKPORE_TREASURY_INITIALIZATION"]
        m_root = self._compute_merkle_root(txs)
        t = 1774829100.0
        h = self._calculate_block_hash(0, t, "0" * 64, m_root, 0)
        self.chain.append(Block(0, t, txs, "0" * 64, m_root, 0, h))

    def mine_new_block(self, transactions: List[str]) -> Block:
        """
        Proof-of-Work: Iterates nonce until SHA-256 hash meets target difficulty.
        """
        prev_block = self.chain[-1]
        index = prev_block.index + 1
        timestamp = time.time()
        merkle_root = self._compute_merkle_root(transactions)
        target_prefix = "0" * self.difficulty

        nonce = 0
        while True:
            block_hash = self._calculate_block_hash(index, timestamp, prev_block.hash, merkle_root, nonce)
            if block_hash.startswith(target_prefix):
                break
            nonce += 1

        new_block = Block(index, timestamp, transactions, prev_block.hash, merkle_root, nonce, block_hash)
        self.chain.append(new_block)
        return new_block

    def verify_chain_integrity(self) -> Tuple[bool, str]:
        """
        Verifies cryptographic linking across the entire chain.
        """
        for i in range(1, len(self.chain)):
            current = self.chain[i]
            previous = self.chain[i - 1]

            # Check 1: Previous Hash Link
            if current.previous_hash != previous.hash:
                return False, f"Broken Chain Link at Block #{current.index}! Previous hash does not match Block #{previous.index}."

            # Check 2: Hash Validity
            recalc_hash = self._calculate_block_hash(current.index, current.timestamp, current.previous_hash, current.merkle_root, current.nonce)
            if current.hash != recalc_hash:
                return False, f"Tampered Data in Block #{current.index}! Stored hash does not match computed hash."

            # Check 3: Merkle Root Integrity
            recalc_merkle = self._compute_merkle_root(current.transactions)
            if current.merkle_root != recalc_merkle:
                return False, f"Tampered Transactions in Block #{current.index}! Merkle root mismatch."

        return True, "BLOCKCHAIN IMMUTABILITY VERIFIED ✔ (100% Cryptographic Integrity)"

    def simulate_51_percent_attack(self, attacker_hashrate_pct: float) -> Dict:
        """
        Simulates 51% consensus takeover probability.
        """
        if attacker_hashrate_pct >= 51.0:
            return {
                "hashrate_share": f"{attacker_hashrate_pct}%",
                "attack_outcome": "51% CONSENSUS ATTACK SUCCESSFUL 🚨 (Double-Spend Achieved)",
                "reason": "Rogue mining pool outpaces honest nodes in Proof-of-Work chain extension, rewriting transaction history.",
                "remediation": "Transition to Proof-of-Stake (PoS) with slashing penalties or Byzantine Agreement."
            }
        return {
            "hashrate_share": f"{attacker_hashrate_pct}%",
            "attack_outcome": "ATTACK FAILED ✔ (Honest Chain Wins)",
            "reason": "Honest network holds majority compute power. Rogue fork is mathematically abandoned by Nakamoto consensus.",
            "remediation": "Standard decentralized operation secure."
        }

def main():
    print("=" * 80)
    print("BLOCKCHAIN CRYPTOGRAPHIC IMMUTABILITY & 51% ATTACK LAB")
    print("Institution: Coder & AccoTax | Instructor: Sukanta Hui | Location: Barrackpore")
    print("=" * 80)

    engine = BlockchainSecurityEngine(difficulty=2)

    # Step 1: Mine Blocks
    print("\\n[STEP 1]: MINING CRYPTOGRAPHIC BLOCKS (PROOF-OF-WORK)")
    b1 = engine.mine_new_block(["Tx1: ₹5,00,000 Susmita -> Debangshu", "Tx2: ₹2,50,000 Mamata -> Mahima"])
    b2 = engine.mine_new_block(["Tx3: ₹12,00,000 Treasury -> Contractor_X", "Tx4: ₹1,00,000 Audit -> SecOps"])

    print(f"Block #1 Hash: {b1.hash} (Nonce: {b1.nonce})")
    print(f"Block #2 Hash: {b2.hash} (Nonce: {b2.nonce})")

    # Step 2: Verify Integrity
    print("\\n" + "=" * 80)
    print("[STEP 2]: CRYPTOGRAPHIC CHAIN VALIDATION")
    is_valid, msg = engine.verify_chain_integrity()
    print(f"Integrity Status: {msg}")

    # Step 3: Simulate Tampering on Block #1
    print("\\n" + "=" * 80)
    print("[STEP 3]: ADVERSARIAL TAMPERING SIMULATION ON BLOCK #1")
    print("Adversary modifies Block #1 transaction to: 'Tx1: ₹50,00,000 Susmita -> Attacker'")
    engine.chain[1].transactions[0] = "Tx1: ₹50,00,000 Susmita -> Attacker"

    is_valid_after, msg_after = engine.verify_chain_integrity()
    print(f"Post-Tamper Check: {'TAMPERING DETECTED 🚨' if not is_valid_after else 'VALID'}")
    print(f"Forensic Diagnostic : {msg_after}")

    # Step 4: 51% Attack Simulation
    print("\\n" + "=" * 80)
    print("[STEP 4]: 51% CONSENSUS HASHRATE TAKEOVER SIMULATION")
    res_40 = engine.simulate_51_percent_attack(40.0)
    res_55 = engine.simulate_51_percent_attack(55.0)

    print(f"Cartel with 40% Hashrate: {res_40['attack_outcome']}")
    print(f"Cartel with 55% Hashrate: {res_55['attack_outcome']}")
    print("=" * 80)

if __name__ == "__main__":
    main()
`,R=()=>{r.useId(),r.useId();const[i,u]=r.useState(!1),t=r.useMemo(()=>i?{block0:{hash:"00a89f... (Genesis)",valid:!0},block1:{tx:"Tx1: ₹50,00,000 Susmita -> Attacker (TAMPERED 🚨)",prevHash:"00a89f...",hash:"7f8b91... (Difficulty Broken ❌)",valid:!1},block2:{tx:"Tx2: ₹12,00,000 Treasury -> Contractor",prevHash:"00b42c... (MISMATCH WITH BLOCK 1! ❌)",hash:"9e41d2...",valid:!1},verdict:"BLOCKCHAIN INTEGRITY BROKEN 🚨 (Tampering Detected at Block #1)",badgeColor:"bg-rose-950 text-rose-300 border-rose-700",explanation:"Modifying Block #1 changed its hash, breaking the previous_hash link in Block #2 and all subsequent blocks. The network rejects the tampered chain immediately."}:{block0:{hash:"00a89f... (Genesis)",valid:!0},block1:{tx:"Tx1: ₹5,00,000 Susmita -> Debangshu",prevHash:"00a89f...",hash:"00b42c... (PoW Valid ✔)",valid:!0},block2:{tx:"Tx2: ₹12,00,000 Treasury -> Contractor",prevHash:"00b42c...",hash:"00d71a... (PoW Valid ✔)",valid:!0},verdict:"CRYPTOGRAPHIC IMMUTABILITY VERIFIED ✔ (100% Valid Chain)",badgeColor:"bg-emerald-950 text-emerald-300 border-emerald-700",explanation:"All previous_hash linkages and Merkle roots match. Proof-of-Work difficulty verified across all blocks."},[i]),[n,g]=r.useState(55),l=r.useMemo(()=>{const s=n>=51;let c="",d="",h="";return s?(c="51% CONSENSUS ATTACK SUCCESSFUL 🚨 (Double-Spend Achieved)",d="bg-rose-950 text-rose-300 border-rose-700",h=`Rogue cartel controls ${n}% hashrate, outpacing the honest network (${100-n}%). The private fork overtakes the honest chain, enabling transaction reorgs and double-spending!`):(c="HONEST CONSENSUS PREVAILS ✔ (Attack Thwarted)",d="bg-emerald-950 text-emerald-300 border-emerald-700",h=`Honest network holds majority compute power (${100-n}% vs ${n}%). Rogue fork is mathematically abandoned under Nakamoto longest-chain consensus.`),{isDominant:s,status:c,badgeColor:d,consequence:h}},[n]),[p,b]=r.useState("barrackpore_land_registry"),m={barrackpore_land_registry:{id:"barrackpore_land_registry",title:"Barrackpore Municipal Land Registry: Immutable Property Deeds",location:"Municipal property records core managing 250,000 real estate deeds",engineers:"Susmita (SecOps Lead) & Debangshu (Senior Systems Architect)",threatScenario:"Fraud syndicates bribed registry clerks to alter deed ownership records in central SQL databases to execute illegal property sales.",solution:"Migrated deed records to a permissioned Hyperledger Fabric blockchain with 8 independent consensus nodes across Judiciary and Treasury.",outcome:"100% elimination of fraudulent deed modifications; tamper attempts rejected automatically by consensus nodes."},kolkata_fintech_audit_ledger:{id:"kolkata_fintech_audit_ledger",title:"Salt Lake Sector V FinTech: Tamper-Proof SIEM Audit Logging",location:"Core transaction database processing ₹15,00,00,000 in daily payments",engineers:"Mahima (Lead Cryptographer) & Mamata (Infrastructure Lead)",threatScenario:"Sophisticated insiders with root database access attempted to modify payment audit logs to cover up unauthorized disbursements.",solution:"Implemented automated Merkle Tree batch hashing, writing hourly root hashes to an immutable public blockchain ledger.",outcome:"Any modification to historical SQL logs triggers instant cryptographic hash mismatch alert; achieved 100% compliance with RBI audit standards."},ichapur_defense_supply_chain:{id:"ichapur_defense_supply_chain",title:"Ichapur Ordnance Manufacturing: Software Supply Chain Provenance",location:"Defense CNC machine controller and CAD firmware deployment pipeline",engineers:"Abhronila (CISO) & Incident Response Specialists",threatScenario:"Adversaries attempted to inject backdoored firmware binaries onto contractor distribution servers.",solution:"Anchored authorized firmware binary hashes and developer cryptographic signatures on an immutable defense blockchain.",outcome:"CNC controllers verify on-chain hashes before executing firmware updates, blocking all tampered binaries at the hardware gate."}},o=m[p];return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 space-y-8 font-sans",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("header",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-full text-xs font-semibold uppercase tracking-wider",children:"Module 005_006 • Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-semibold",children:"BCA BCAC703 • Cyber Security"})]}),e.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-tight",children:"Blockchain Technology in Cyber Security: Decentralization & Immutability"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Classroom Lab:"}),e.jsx("span",{className:"text-xs font-bold text-emerald-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800",children:"Barrackpore • West Bengal"})]})]}),e.jsxs("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed",children:["Blockchain technology provides decentralized, mathematically tamper-evident state machines that eliminate central points of compromise. Dissect the cryptographic architecture of ",e.jsx("strong",{children:"Block Headers and Merkle Binary Trees"}),", analyze how",e.jsx("strong",{children:"SHA-256 Hash Chaining creates an unbroken Tamper Cascade"}),", explore ",e.jsx("strong",{children:"Proof-of-Work and the 51% Consensus Attack"}),", and evaluate enterprise applications in ",e.jsx("strong",{children:"Tamper-Proof Audit Logging and Software Supply Chain Integrity"}),"."]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg md:text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"⛓️"})," Studio 1: Cryptographic Hash Chaining & Tamper Cascade Sandbox"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Toggle tampering on Block #1 to witness how altering a single historical transaction invalidates the entire subsequent blockchain."})]}),e.jsx("div",{className:a("px-3 py-1 rounded-full text-xs font-bold border",t.badgeColor),children:t.verdict})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-bold text-white block",children:"Adversarial Action: Tamper with Block #1 Transaction Data"}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"Attempts to secretly reroute ₹50,00,000 to an attacker-controlled address."})]}),e.jsx("button",{onClick:()=>u(!i),className:a("px-4 py-2 rounded-lg font-bold text-xs transition-all duration-200",i?"bg-rose-600 text-white shadow-lg shadow-rose-950":"bg-slate-800 text-slate-300 hover:text-white border border-slate-700"),children:i?"Revert Tampering 🔄":"Tamper Block #1 🚨"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-800/60 space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-1",children:[e.jsx("span",{className:"font-bold text-emerald-400",children:"Block #0 (Genesis)"}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Height: 0"})]}),e.jsx("div",{className:"text-slate-400 text-[11px]",children:"PrevHash: 0000000000000000..."}),e.jsx("div",{className:"text-slate-300 text-[11px] truncate",children:"Tx: Genesis Initialization"}),e.jsxs("div",{className:"text-emerald-300 text-[11px] truncate",children:["Hash: ",t.block0.hash]})]}),e.jsxs("div",{className:a("p-4 rounded-xl border space-y-2 transition-all duration-300",t.block1.valid?"bg-slate-950 border-emerald-800/60":"bg-rose-950/40 border-rose-700"),children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-1",children:[e.jsxs("span",{className:a("font-bold",t.block1.valid?"text-emerald-400":"text-rose-400"),children:["Block #1 ",i&&"(TAMPERED)"]}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Height: 1"})]}),e.jsxs("div",{className:"text-slate-400 text-[11px] truncate",children:["PrevHash: ",t.block1.prevHash]}),e.jsx("div",{className:a("text-[11px] truncate font-bold",i?"text-rose-300":"text-slate-300"),children:t.block1.tx}),e.jsxs("div",{className:a("text-[11px] truncate",t.block1.valid?"text-emerald-300":"text-rose-400 font-bold"),children:["Hash: ",t.block1.hash]})]}),e.jsxs("div",{className:a("p-4 rounded-xl border space-y-2 transition-all duration-300",t.block2.valid?"bg-slate-950 border-emerald-800/60":"bg-rose-950/40 border-rose-700"),children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-1",children:[e.jsxs("span",{className:a("font-bold",t.block2.valid?"text-emerald-400":"text-rose-400"),children:["Block #2 ",i&&"(BROKEN LINK)"]}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Height: 2"})]}),e.jsxs("div",{className:a("text-[11px] truncate",t.block2.valid?"text-slate-400":"text-rose-400 font-bold"),children:["PrevHash: ",t.block2.prevHash]}),e.jsx("div",{className:"text-slate-300 text-[11px] truncate",children:t.block2.tx}),e.jsxs("div",{className:a("text-[11px] truncate",t.block2.valid?"text-emerald-300":"text-rose-400"),children:["Hash: ",t.block2.hash]})]})]}),e.jsxs("div",{className:"p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans",children:[e.jsx("strong",{className:"text-white",children:"Forensic Explanation: "}),t.explanation]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg md:text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"⛏️"})," Studio 2: 51% Consensus Hashrate Race Simulator"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Slide the rogue cartel hashrate percentage to observe the mathematical threshold where double-spending becomes possible."})]}),e.jsx("div",{className:a("px-3 py-1 rounded-full text-xs font-bold border",l.badgeColor),children:l.status})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4 text-xs",children:[e.jsx("span",{className:"font-bold text-slate-400 uppercase tracking-wider block",children:"Network Hashrate Distribution"}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-slate-300 font-semibold",children:[e.jsx("span",{children:"Rogue Cartel Mining Hashrate:"}),e.jsxs("span",{className:a("font-mono font-bold text-sm",l.isDominant?"text-rose-400":"text-amber-400"),children:[n,"% (",n>=51?"Majority Cartel 🚨":"Minority Pool ✔",")"]})]}),e.jsx("input",{type:"range",min:"10",max:"90",step:"1",value:n,onChange:s=>g(Number(s.target.value)),className:"w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[e.jsx("span",{children:"10% (Weak)"}),e.jsx("span",{children:"50% (Equilibrium)"}),e.jsx("span",{children:"51% (Threshold)"}),e.jsx("span",{children:"90% (Total Monopolization)"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-center",children:[e.jsxs("div",{className:"p-2 bg-slate-900 rounded-lg border border-emerald-800/40",children:[e.jsx("span",{className:"text-[10px] text-slate-500 block",children:"Honest Hashrate"}),e.jsxs("span",{className:"font-mono font-bold text-emerald-400 text-sm",children:[100-n,"%"]})]}),e.jsxs("div",{className:"p-2 bg-slate-900 rounded-lg border border-rose-800/40",children:[e.jsx("span",{className:"text-[10px] text-slate-500 block",children:"Rogue Hashrate"}),e.jsxs("span",{className:"font-mono font-bold text-rose-400 text-sm",children:[n,"%"]})]})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3 flex flex-col justify-between text-xs",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Nakamoto Longest-Chain Rule Evaluation"}),e.jsx("p",{className:"text-xs md:text-sm text-slate-200 leading-relaxed bg-slate-900 p-4 rounded-lg border border-slate-800",children:l.consequence})]}),e.jsxs("div",{className:"p-3 bg-slate-900/60 rounded-lg border border-slate-800 text-[11px] text-slate-400",children:[e.jsx("strong",{children:"Attack Limitation: "})," Even with 51% hashrate, an attacker CANNOT forge cryptographic digital signatures, steal funds from private keys, or alter old historical blocks!"]})]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg md:text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," Studio 3: Regional SOC Incident Response Drills (West Bengal)"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Case studies of permissioned blockchain land registries, immutable SIEM audit logs, and supply chain provenance."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(m).map(s=>e.jsx("button",{onClick:()=>b(s),className:a("px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200",p===s?"bg-emerald-600 text-white shadow-lg shadow-emerald-950":"bg-slate-950 text-slate-400 hover:text-white border border-slate-800"),children:s==="barrackpore_land_registry"?"Barrackpore Land Registry":s==="kolkata_fintech_audit_ledger"?"Kolkata SIEM Ledger":"Ichapur Supply Chain"},s))})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-base font-bold text-white",children:o.title}),e.jsx("span",{className:"text-xs text-emerald-400 font-mono bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800",children:o.location})]}),e.jsxs("div",{className:"text-xs text-slate-400",children:[e.jsx("strong",{className:"text-slate-300",children:"Lead SecOps Engineers: "})," ",o.engineers]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-rose-400 uppercase text-[10px] tracking-wider block",children:"Threat Vector"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:o.threatScenario})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-emerald-400 uppercase text-[10px] tracking-wider block",children:"Blockchain Architecture"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:o.solution})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-cyan-400 uppercase text-[10px] tracking-wider block",children:"Auditable Outcome"}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:o.outcome})]})]})]})]}),e.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-900/40 rounded-2xl p-6 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Mistakes"]}),e.jsxs("ul",{className:"space-y-3 text-xs text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Assuming 51% Attacks Steal Private Keys:"})," A 51% attack enables double-spending and reorgs; it CANNOT forge digital signatures or steal wallets."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Storing Plaintext Sensitive Data on Public Chains:"})," Blockchain data is permanently immutable and visible to all nodes; store only salted hashes."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Ignoring Smart Contract Reentrancy Bugs:"})," Immutability means buggy smart contract code cannot be easily patched once deployed."]})]})]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-900/40 rounded-2xl p-6 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🛡️"})," Blockchain Security Best Practices"]}),e.jsxs("ul",{className:"space-y-3 text-xs text-slate-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Anchor Merkle Roots for Tamper-Proof SIEM:"})," Anchor hourly batch hashes to provide non-repudiation during regulatory forensic audits."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Deploy Permissioned BFT Consortia for Enterprise:"})," Use Hyperledger Fabric with X.509 identity certificates to achieve high TPS and privacy."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Enforce Formal Verification on Smart Contracts:"})," Mathematically prove contract execution rules before on-chain deployment."]})]})]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold text-base border-b border-slate-800 pb-3",children:[e.jsx("span",{children:"💡"})," Instructor Hints & Retention Checklist"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300",children:[e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-emerald-300",children:"Think About:"}),e.jsx("p",{className:"leading-relaxed",children:"Why does modifying Block #1 turn the entire chain red? Because each block contains the cryptographic hash of its predecessor! Changing one byte in Block #1 changes its hash, breaking the previous_hash link in Block #2 and all subsequent blocks!"})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"font-bold text-cyan-300",children:"Student Checklist:"}),e.jsxs("ul",{className:"space-y-1.5 list-disc list-inside text-slate-400",children:[e.jsx("li",{children:"Block headers include previous_hash, Merkle root, timestamp, and nonce."}),e.jsx("li",{children:"Merkle binary trees allow $O(\\log N)$ transaction verification proofs."}),e.jsx("li",{children:"Proof-of-Work iterates the nonce to find hashes meeting difficulty target."}),e.jsx("li",{children:"A 51% attack enables double-spending but cannot forge signatures."}),e.jsx("li",{children:"Tamper-proof audit logging anchors SIEM hashes on immutable ledgers."})]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400 text-lg",children:"🐍"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"Hands-on Blockchain Security & 51% Attack Script"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Standalone Python script simulating Merkle root calculation, PoW nonce mining, tamper cascade detection, and 51% hashrate race"})]})]}),e.jsx(y,{fileModule:A,title:"blockchain_security_engine.py",highlightLines:[25,45,65,85,105]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(f,{title:"Blockchain Security & Immutability FAQs",questions:v})}),e.jsx(x,{note:"For your BCA BCAC703 examination: Master the mathematical structure of block headers ($H_i = \\text{SHA256}(H_{i-1} || \\text{MerkleRoot} || \\text{Nonce})$) and explain the Tamper Cascade effect. Detail how Merkle Binary Trees enable $O(\\log N)$ verification proofs. Explain the mechanics and limitations of a 51% Consensus Attack (it enables double-spending but cannot forge signatures). Detail how blockchain anchors tamper-proof SIEM audit logs."}),e.jsx("section",{className:"space-y-4",children:e.jsx(k,{content:w,title:"Topic 4: Blockchain Security & Immutability Study Guide",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 4 Note",downloadFileName:"topic4_blockchain_security_note.txt"})})]})})};export{R as default};
