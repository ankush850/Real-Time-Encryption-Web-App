
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
