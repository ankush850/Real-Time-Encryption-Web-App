// Main Application
let currentAlgorithm = 'aes';
let selectedFile = null;

// Initialize modules
const keyGenerator = new KeyGenerator();
const fileHandler = new FileHandler();
const aesEncryption = new AESEncryption();
const xorEncryption = new XOREncryption();
const encryptionFactory = new EncryptionFactory();
const themeManager = new ThemeManager();
const notifications = new NotificationSystem();

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    themeManager.init();
    encryptionFactory.setAlgorithm('aes');
    updateKeyStrength();
    
    // Add input listeners
    document.getElementById('encryption-key').addEventListener('input', updateKeyStrength);
    document.getElementById('input-text').addEventListener('input', handleRealTimeEncryption);
});

// Tab switching
function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.includes(tab === 'text' ? '📝' : '📁'));
    });
    
    document.getElementById('text-panel').classList.toggle('active', tab === 'text');
    document.getElementById('file-panel').classList.toggle('active', tab === 'file');
}

// Real-time encryption
let typingTimer;
function handleRealTimeEncryption() {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
        const text = document.getElementById('input-text').value;
        const key = document.getElementById('encryption-key').value;
        
        if (text && key && document.getElementById('text-panel').classList.contains('active')) {
            handleEncrypt();
        }
    }, 500);
}

// Encryption handlers
async function handleEncrypt() {
    const text = document.getElementById('input-text').value;
    const key = document.getElementById('encryption-key').value;
    
    if (!text || !key) {
        notifications.show('Please enter text and key', 'error');
        return;
    }
    
    try {
        const encrypted = await encryptionFactory.encrypt(text, key);
        document.getElementById('output-text').value = encrypted;
        notifications.show('Text encrypted successfully!', 'success');
    } catch (error) {
        notifications.show('Encryption failed: ' + error.message, 'error');
    }
}

async function handleDecrypt() {
    const text = document.getElementById('input-text').value;
    const key = document.getElementById('encryption-key').value;
    
    if (!text || !key) {
        notifications.show('Please enter encrypted text and key', 'error');
        return;
    }
    
    try {
        const decrypted = await encryptionFactory.decrypt(text, key);
        document.getElementById('output-text').value = decrypted;
        notifications.show('Text decrypted successfully!', 'success');
    } catch (error) {
        notifications.show('Decryption failed: ' + error.message, 'error');
    }
}

// Utility functions
function clearInput() {
    document.getElementById('input-text').value = '';
    document.getElementById('output-text').value = '';
}

function toggleKeyVisibility() {
    const keyInput = document.getElementById('encryption-key');
    keyInput.type = keyInput.type === 'password' ? 'text' : 'password';
}

function updateKeyStrength() {
    const key = document.getElementById('encryption-key').value;
    const strengthEl = document.getElementById('key-strength');
    const strengthText = document.getElementById('strength-text');
    
    let strength = 'weak';
    if (key.length >= 12 && /[!@#$%^&*]/.test(key) && /[0-9]/.test(key)) {
        strength = 'strong';
    } else if (key.length >= 8) {
        strength = 'medium';
    }
    
    strengthEl.setAttribute('data-strength', strength);
    strengthText.textContent = strength.charAt(0).toUpperCase() + strength.slice(1);
}

function downloadOutput() {
    const output = document.getElementById('output-text').value;
    if (!output) {
        notifications.show('No output to download', 'error');
        return;
    }
    
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'encryption-output.txt';
    a.click();
    URL.revokeObjectURL(url);
}

function showAbout() {
    notifications.show(
        'Real-Time Encryption Generator v1.0\nSecure your data with AES-256 encryption',
        'info',
        5000
    );
}

// Export for global use
window.switchTab = switchTab;
window.handleEncrypt = handleEncrypt;
window.handleDecrypt = handleDecrypt;
window.clearInput = clearInput;
window.toggleKeyVisibility = toggleKeyVisibility;
window.downloadOutput = downloadOutput;
window.showAbout = showAbout;