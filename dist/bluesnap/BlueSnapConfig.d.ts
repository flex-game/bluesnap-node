declare type Environment = 'Production' | 'Sandbox';
export declare class BlueSnapConfig {
    environment: Environment;
    username: string;
    password: string;
    apiVersion?: string;
    constructor(environment: Environment, username: string, password: string, apiVersion?: string);
    getBaseUrl(): string;
}
export {};
