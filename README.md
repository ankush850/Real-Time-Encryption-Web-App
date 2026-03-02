
<p align="center">
 
  <h1 align="center">Real-Time Encryption Web App</h1>
  
  <p align="center">
    <img src="https://img.shields.io/badge/status-active-success.svg">
    <img src="https://img.shields.io/badge/version-1.0.0-blue.svg">
    <img src="https://img.shields.io/badge/encryption-AES--256-green.svg">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg">
  </p>
  
  <p align="center">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black">
    <img src="https://img.shields.io/badge/Web%20Crypto%20API-4285F4?style=flat&logo=google&logoColor=white">
  </p>
  
  <p align="center">
    <img src="https://img.shields.io/badge/Chrome-✓-green?logo=google%20chrome&logoColor=white">
    <img src="https://img.shields.io/badge/Firefox-✓-orange?logo=firefox&logoColor=white">
    <img src="https://img.shields.io/badge/Safari-✓-blue?logo=safari&logoColor=white">
    <img src="https://img.shields.io/badge/Edge-✓-blue?logo=microsoft%20edge&logoColor=white">
  </p>
</p>

A powerful web-based tool for real-time encryption and decryption of text and files.

## System Architecture

```mermaid
graph TB
    subgraph "Client Browser"
        UI[HTML/CSS User Interface]
        JS[JavaScript Core]
        
        subgraph "UI Components"
            Theme[Theme Manager]
            Notif[Notification System]
            Tabs[Tab Navigation]
            Progress[Progress Bar]
        end
        
        subgraph "Core Modules"
            App[App Controller]
            EncFactory[Encryption Factory]
            KeyGen[Key Generator]
            FileHandler[File Handler]
            Validator[Input Validator]
        end
        
        subgraph "Encryption Engines"
            AES[AES-256 Engine]
            XOR[XOR Engine]
        end
        
        subgraph "Utilities"
            Base64[Base64 Utils]
            Clipboard[Clipboard API]
            Storage[Local Storage]
        end
        
        subgraph "Browser APIs"
            Crypto[Web Crypto API]
            File[File API]
            Blob[Blob & URL API]
        end
    end
    
    UI --> JS
    JS --> App
    App --> EncFactory
    App --> KeyGen
    App --> FileHandler
    App --> Validator
    
    EncFactory --> AES
    EncFactory --> XOR
    
    AES --> Crypto
    XOR --> Base64
    
    FileHandler --> File
    FileHandler --> Blob
    
    Theme --> Storage
    Notif --> UI
 ```


## Application Flow Architecture

```mermaid
sequenceDiagram
    participant User
    participant UI as Interface
    participant App as App Controller
    participant Factory as Encryption Factory
    participant AES as AES Engine
    participant XOR as XOR Engine
    participant Crypto as Web Crypto API
    
    User->>UI: 1. Input Text/File
    UI->>App: 2. Process Input
    App->>Factory: 3. Get Algorithm
    
    alt AES-256 Selected
        Factory->>AES: 4a. Route to AES
        AES->>Crypto: 5a. Call Web Crypto
        Crypto-->>AES: 6a. Encrypted Data
        AES-->>Factory: 7a. Return Result
    else XOR Selected
        Factory->>XOR: 4b. Route to XOR
        XOR-->>Factory: 5b. Return Result
    end
    
    Factory-->>App: 8. Return Processed Data
    App-->>UI: 9. Update Display
    UI-->>User: 10. Show Result
```



-  **Real-time encryption** - Encrypt text as you type
- **File encryption** - Secure your files with strong encryption
-  **Key generation** - Generate strong random encryption keys
-  **Dark/Light theme** - Comfortable viewing in any environment
-  **Multiple algorithms** - AES-256 (secure) and XOR (demo)
-  **Clipboard support** - Easy copy/paste functionality
- **Download results** - Save encrypted/decrypted output

## Technologies Used

- HTML5
- CSS3 (with CSS variables for theming)
- Vanilla JavaScript
- Web Crypto API for AES-256 encryption
- File API for file handling

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/real-time-encryption-webapp.git