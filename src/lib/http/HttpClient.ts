import fetch from 'node-fetch';
import BlueSnapConfig from '../bluesnap/BlueSnapConfig';
const version = require('../../package.json').version;

export default class HttpClient {
    private config: BlueSnapConfig;

    public constructor(config: BlueSnapConfig) {
        this.config = config;
    }

    public async delete(path: string): Promise<any> {
        return await fetch(`${this.config.getBaseUrl()}path`, {
            method: 'DELETE',
            headers: this.getHeaders(),
        });
    }

    public async get(path: string): Promise<any> {
        return await fetch(`${this.config.getBaseUrl()}path`, {
            method: 'GET',
            headers: this.getHeaders(),
        });
    }

    public async post(path: string, body: Record<string, any>): Promise<any> {
        return await fetch(`${this.config.getBaseUrl()}path`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify(body)
        });
    }

    public async put(path: string, body?: Record<string, any>): Promise<any> {
        return await fetch(`${this.config.getBaseUrl()}path`, {
            method: 'PUT',
            headers: this.getHeaders(),
            body: JSON.stringify(body)
        });
    }

    private getHeaders() {
        const headers: Record<string, any> = {
            Authorization: this.authorizationHeader,
            'Content-Type': 'application/json',
            'User-Agent': `bluesnap-node-${version}`,
        };

        if (this.config.apiVersion) {
            headers['bluesnap-version'] = this.config.apiVersion;
        }

        return headers;
    }

    private get authorizationHeader() {
        return `Basic ${(new Buffer(this.config.username + ':' + this.config.password)).toString('base64')}`;
    }
}
