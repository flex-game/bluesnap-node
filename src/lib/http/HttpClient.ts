import fetch from 'node-fetch';
import {BlueSnapConfig} from '../bluesnap/BlueSnapConfig';

const { version } = require('../../../package.json');

export class HttpClient {
    private config: BlueSnapConfig;

    public constructor(config: BlueSnapConfig) {
        this.config = config;
    }

    public async get(path: string): Promise<any> {
        const response = await fetch(`${this.config.getBaseUrl()}${path}`, {
            method: 'GET',
            headers: this.getHeaders(),
        });

        return await response.json();
    }

    public async post(path: string, body?: Record<string, any> | null): Promise<any> {
        const response = await fetch(`${this.config.getBaseUrl()}${path}`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify(body),
        });

        if (response.status === 201) {
            return response;
        }

        return await response.json();
    }

    public async put(path: string, body?: Record<string, any> | null): Promise<any> {
        const response = await fetch(`${this.config.getBaseUrl()}${path}`, {
            method: 'PUT',
            headers: this.getHeaders(),
            body: JSON.stringify(body),
        });

        if (response.status === 204) {
            return null;
        }

        return await response.json();
    }

    private getHeaders(): Record<string, any> {
        const headers: Record<string, any> = {
            Authorization: this.getAuthorizationHeader(),
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': `bluesnap-node-${version}`,
        };

        if (this.config.apiVersion) {
            headers['bluesnap-version'] = this.config.apiVersion;
        }

        return headers;
    }

    private getAuthorizationHeader(): string {
        return `Basic ${Buffer.from(`${this.config.username}:${this.config.password}`).toString('base64')}`;
    }
}
