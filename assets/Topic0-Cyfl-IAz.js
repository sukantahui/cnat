import{r as n,j as a}from"./index-BRgF9Sn_.js";import{Q as d}from"./QuestionPaperTemplate-BcDd5GSt.js";import"./PrintButton-_C55jByA.js";const p="OSI-INTERMEDIATE-SET-01",c="OSI Layer Model - Intermediate Level Question Paper",l="1 Hours",u=50,h=[{section:"A",type:"Theory (Short Answer)",marksPerQuestion:2,totalQuestions:5,questions:[{q:"What is the OSI model and how many layers does it have?",marks:2,answer:"The OSI (Open Systems Interconnection) model is a conceptual framework that standardizes networking functions into seven layers. It helps in understanding and designing network communication. The seven layers are: Physical, Data Link, Network, Transport, Session, Presentation, and Application."},{q:"Which layer of the OSI model is responsible for routing packets across different networks?",marks:2,answer:"The Network Layer (Layer 3) is responsible for logical addressing (IP addresses) and routing packets from source to destination across multiple networks. Routers operate at this layer."},{q:"What is the difference between a frame and a packet?",marks:2,answer:"A frame is the Protocol Data Unit (PDU) at the Data Link Layer (Layer 2). It includes MAC addresses and a trailer for error checking. A packet is the PDU at the Network Layer (Layer 3) and contains logical addresses (IP). A packet is encapsulated inside a frame for transmission."},{q:"What is the purpose of the Transport Layer?",marks:2,answer:"The Transport Layer (Layer 4) provides end-to-end communication between applications. It ensures reliable data transfer (TCP) or fast but unreliable transfer (UDP), handles segmentation, flow control, error recovery, and uses port numbers to identify applications."},{q:"Name two protocols that operate at the Application Layer of the OSI model.",marks:2,answer:"Examples include HTTP (Hypertext Transfer Protocol), FTP (File Transfer Protocol), SMTP (Simple Mail Transfer Protocol), DNS (Domain Name System), and Telnet."}]},{section:"B",type:"Theory (Descriptive)",marksPerQuestion:5,totalQuestions:2,questions:[{q:"Explain the functions of the Data Link Layer (Layer 2) and the Physical Layer (Layer 1) of the OSI model.",marks:5,answer:"Physical Layer (Layer 1): Responsible for transmitting raw bits over a physical medium (cables, fiber, wireless). Defines electrical signals, voltage levels, pin connectors, data rates, and synchronization. No error correction. Data Link Layer (Layer 2): Provides node-to-node delivery, error detection (CRC), flow control, and media access control (MAC). It packages bits into frames, adds physical addresses (MAC), and manages access to the shared medium (e.g., CSMA/CD in Ethernet). Switches and bridges operate at this layer."},{q:"Describe the role of the Presentation Layer and the Session Layer in the OSI model with examples.",marks:5,answer:"Presentation Layer (Layer 6): Translates data between the application format and network format. Handles data compression, encryption/decryption, and character code conversion (e.g., ASCII to EBCDIC). Example: SSL/TLS encryption for secure web traffic. Session Layer (Layer 5): Manages sessions or dialogues between applications. Establishes, maintains, and terminates connections. Provides checkpointing and recovery (e.g., if a file transfer fails, it can resume from the last checkpoint). Example: Remote Procedure Calls (RPC) and NetBIOS."}]},{section:"C",type:"Theory (Long Answer)",marksPerQuestion:10,totalQuestions:1,questions:[{q:"Explain the entire OSI 7-layer model in detail. For each layer, mention its PDU name, key functions, and one example protocol or device.",marks:10,answer:"Layer 7 – Application: PDU = Data; Provides network services directly to user applications. Examples: HTTP, FTP, SMTP, DNS. Layer 6 – Presentation: PDU = Data; Translates, encrypts, compresses data. Examples: SSL/TLS, JPEG, ASCII. Layer 5 – Session: PDU = Data; Manages sessions, checkpoints, and synchronization. Examples: NetBIOS, RPC, PPTP. Layer 4 – Transport: PDU = Segment (TCP) or Datagram (UDP); End-to-end reliability, flow control, error recovery, port addressing. Examples: TCP, UDP. Layer 3 – Network: PDU = Packet; Logical addressing (IP), routing, path determination. Examples: IP, ICMP, routers. Layer 2 – Data Link: PDU = Frame; Physical addressing (MAC), error detection (CRC), media access control. Examples: Ethernet, PPP, switches. Layer 1 – Physical: PDU = Bits; Transmission of raw bits over medium, defines voltage, cables, data rates. Examples: RJ45, fiber optics, hubs, repeaters. Encapsulation: Data from upper layers is wrapped with headers (and trailers) at each lower layer."}]},{section:"D",type:"Practical (Programming)",marksPerQuestion:10,totalQuestions:1,questions:[{q:"Write a C program to simulate the encapsulation process of the OSI model. The program should take a user message (application data) and add headers for each of the five upper layers (Application, Presentation, Session, Transport, Network). Display the final packet after adding all headers.",marks:10,answer:`\`\`\`c
#include <stdio.h>
#include <string.h>

// Simulated headers (simplified)
typedef struct {
    char app_header[20];
} AppHeader;

typedef struct {
    char pres_header[20];
} PresHeader;

typedef struct {
    char sess_header[20];
} SessHeader;

typedef struct {
    int src_port;
    int dst_port;
} TransHeader;

typedef struct {
    char src_ip[16];
    char dst_ip[16];
} NetHeader;

int main() {
    char user_data[256];
    printf("Enter application data: ");
    fgets(user_data, sizeof(user_data), stdin);
    user_data[strcspn(user_data, "\\n")] = '\\0';

    // Simulate adding headers (encapsulation)
    AppHeader app = {"HTTP/1.1"};
    PresHeader pres = {"Encrypt:AES"};
    SessHeader sess = {"SessionID:12345"};
    TransHeader trans = {8080, 80};
    NetHeader net = {"192.168.1.10", "8.8.8.8"};

    printf("\\n--- Encapsulation Process ---\\n");
    printf("Original Application Data: %s\\n", user_data);
    printf("\\nAfter Application Header: [%s] %s\\n", app.app_header, user_data);
    printf("After Presentation Header: [%s] [%s] %s\\n", pres.pres_header, app.app_header, user_data);
    printf("After Session Header: [%s] [%s] [%s] %s\\n", sess.sess_header, pres.pres_header, app.app_header, user_data);
    printf("After Transport Header: (SrcPort:%d DstPort:%d) [%s] [%s] [%s] %s\\n", 
           trans.src_port, trans.dst_port, sess.sess_header, pres.pres_header, app.app_header, user_data);
    printf("After Network Header: (SrcIP:%s DstIP:%s) (SrcPort:%d DstPort:%d) [%s] [%s] [%s] %s\\n",
           net.src_ip, net.dst_ip, trans.src_port, trans.dst_port,
           sess.sess_header, pres.pres_header, app.app_header, user_data);
    printf("\\nFinal Encapsulated Packet (simulated) is ready for Data Link Layer.\\n");
    return 0;
}
\`\`\``}]},{section:"E",type:"Practical (Mini Project)",marksPerQuestion:10,totalQuestions:1,questions:[{q:"Create a simple network layer routing simulator using C. Implement a function that takes a packet (source IP, destination IP, payload) and a routing table (array of destination networks and next hops). The program should find the appropriate next hop using longest prefix match and display the route. Use structures and demonstrate encapsulation/decapsulation.",marks:10,answer:`\`\`\`c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct {
    char dest_network[16];
    char netmask[16];
    char next_hop[16];
} RouteEntry;

typedef struct {
    char src_ip[16];
    char dst_ip[16];
    char payload[100];
} Packet;

// Simulate IP to integer conversion for prefix match
unsigned int ipToInt(char *ip) {
    unsigned int a,b,c,d;
    sscanf(ip, "%u.%u.%u.%u", &a, &b, &c, &d);
    return (a<<24) | (b<<16) | (c<<8) | d;
}

int matchNetwork(unsigned int ip, unsigned int network, unsigned int mask) {
    return (ip & mask) == (network & mask);
}

void routePacket(Packet *pkt, RouteEntry table[], int size) {
    unsigned int dst = ipToInt(pkt->dst_ip);
    int best_match = -1;
    unsigned int longest_prefix = 0;

    for (int i = 0; i < size; i++) {
        unsigned int network = ipToInt(table[i].dest_network);
        unsigned int mask = ipToInt(table[i].netmask);
        if (matchNetwork(dst, network, mask)) {
            if (mask > longest_prefix) {
                longest_prefix = mask;
                best_match = i;
            }
        }
    }

    printf("\\n--- Routing Simulation ---\\n");
    printf("Packet: Src=%s, Dst=%s, Payload='%s'\\n", pkt->src_ip, pkt->dst_ip, pkt->payload);
    if (best_match != -1) {
        printf("Route found: Next hop = %s (via network %s/%s)\\n", 
               table[best_match].next_hop, table[best_match].dest_network, table[best_match].netmask);
    } else {
        printf("No route to destination. Packet dropped.\\n");
    }
}

int main() {
    // Routing table (destination network, netmask, next hop)
    RouteEntry route_table[] = {
        {"192.168.1.0", "255.255.255.0", "192.168.1.1"},
        {"10.0.0.0",   "255.0.0.0",    "10.0.0.1"},
        {"0.0.0.0",    "0.0.0.0",      "203.0.113.1"} // default route
    };
    int size = sizeof(route_table)/sizeof(route_table[0]);

    Packet pkt;
    printf("Enter source IP: ");
    scanf("%15s", pkt.src_ip);
    printf("Enter destination IP: ");
    scanf("%15s", pkt.dst_ip);
    printf("Enter payload message: ");
    scanf("%99s", pkt.payload);

    routePacket(&pkt, route_table, size);
    return 0;
}
\`\`\``}]}],m={paperId:p,title:c,duration:l,totalMarks:u,sections:h};function P(){const[s,r]=n.useState(!1);n.useEffect(()=>{const e=()=>{const i=localStorage.getItem("token");r(i!==null)};e(),window.addEventListener("storage",e);const t=()=>e();return window.addEventListener("authChange",t),()=>{window.removeEventListener("storage",e),window.removeEventListener("authChange",t)}},[]);const o={name:"Coder & AccoTax",address:"25(10/A) Shibtala Road, PO - N.C. Pukur, Barrackpore, Kol-122",phone:"+91 7003756860",email:"contact@codernaccotax.co.in",website:"www.codernaccotax.co.in"};return a.jsx("div",{className:"p-6 bg-gray-900 min-h-screen",children:a.jsx(d,{data:m,isLoggedIn:s,organizationDetails:o})})}export{P as default};
