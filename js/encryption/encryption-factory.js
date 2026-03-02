class EncryptionFactory {
    constructor() {
        this.aes = new AESEncryption();
        this.xor = new XOREncryption();
        this.currentAlgorithm = 'aes';
    }

    setAlgorithm(algorithm) {
        this.currentAlgorithm = algorithm;
    }

    async encrypt(text, key) {
        switch(this.currentAlgorithm) {
            case 'aes':
                return await this.aes.encrypt(text, key);
            case 'xor':
                return this.xor.encrypt(text, key);
            default:
                throw new Error('Unknown algorithm');
        }
    }

    async decrypt(text, key) {
        switch(this.currentAlgorithm) {
            case 'aes':
                return await this.aes.decrypt(text, key);
            case 'xor':
                return this.xor.decrypt(text, key);
            default:
                throw new Error('Unknown algorithm');
        }
    }

    async encryptFile(file, key, onProgress) {
        switch(this.currentAlgorithm) {
            case 'aes':
                return await this.aes.encryptFile(file, key, onProgress);
            case 'xor':
                return await this.xor.encryptFile(file, key, onProgress);
            default:
                throw new Error('Unknown algorithm');
        }
    }
}