class KeyGenerator {
    constructor() {
        this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    }

    generate() {
        const length = 16;
        let key = '';
        
        // Ensure at least one of each type
        key += this.getRandomChar('ABCDEFGHIJKLMNOPQRSTUVWXYZ'); // uppercase
        key += this.getRandomChar('abcdefghijklmnopqrstuvwxyz'); // lowercase
        key += this.getRandomChar('0123456789'); // number
        key += this.getRandomChar('!@#$%^&*()_+'); // special
        
        // Fill the rest randomly
        for (let i = key.length; i < length; i++) {
            key += this.chars.charAt(Math.floor(Math.random() * this.chars.length));
        }
        
        // Shuffle the key
        key = this.shuffleString(key);
        
        // Update both key inputs
        document.getElementById('encryption-key').value = key;
        document.getElementById('file-key').value = key;
        
        // Trigger strength update
        document.getElementById('encryption-key').dispatchEvent(new Event('input'));
        
        notifications.show('New encryption key generated!', 'success');
    }

    getRandomChar(charSet) {
        return charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    shuffleString(str) {
        const array = str.split('');
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.join('');
    }

    validateKey(key) {
        const hasUpper = /[A-Z]/.test(key);
        const hasLower = /[a-z]/.test(key);
        const hasNumber = /[0-9]/.test(key);
        const hasSpecial = /[!@#$%^&*]/.test(key);
        const isLongEnough = key.length >= 8;
        
        return {
            isValid: hasUpper && hasLower && hasNumber && hasSpecial && isLongEnough,
            details: {
                hasUpper,
                hasLower,
                hasNumber,
                hasSpecial,
                isLongEnough
            }
        };
    }
}

// Make globally available
window.KeyGenerator = KeyGenerator;