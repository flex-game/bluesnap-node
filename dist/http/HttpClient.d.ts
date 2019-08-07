import { BlueSnapConfig } from '../bluesnap/BlueSnapConfig';
export declare class HttpClient {
    private config;
    constructor(config: BlueSnapConfig);
    get(path: string): Promise<any>;
    post(path: string, body?: Record<string, any> | null): Promise<any>;
    put(path: string, body?: Record<string, any> | null): Promise<any>;
    private getHeaders;
    private getAuthorizationHeader;
}
