type Environment = 'Production' | 'Sandbox';

export class BlueSnapConfig {
    public environment: Environment;

    public username: string;

    public password: string;

    public apiVersion?: string; // Optional. BlueSnap will default based on the merchant account if not specified.

    public constructor(environment: Environment, username: string, password: string, apiVersion?: string) {
        this.environment = environment;
        this.username = username;
        this.password = password;
        this.apiVersion = apiVersion;
    }

    public getBaseUrl(): string {
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
