"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlueSnapConfig {
    constructor(environment, username, password, apiVersion) {
        this.environment = environment;
        this.username = username;
        this.password = password;
        this.apiVersion = apiVersion;
    }
    getBaseUrl() {
        switch (this.environment) {
            case 'Production':
                return 'https://ws.bluesnap.com';
            case 'Sandbox':
                return 'https://sandbox.bluesnap.com';
            default:
                throw new Error('Invalid Environment');
        }
    }
}
exports.BlueSnapConfig = BlueSnapConfig;
//# sourceMappingURL=BlueSnapConfig.js.map