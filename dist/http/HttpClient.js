"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
class HttpClient {
    constructor(config) {
        this.config = config;
    }
    get(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield node_fetch_1.default(`${this.config.getBaseUrl()}${path}`, {
                method: 'GET',
                headers: this.getHeaders(),
            });
            return yield response.json();
        });
    }
    post(path, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield node_fetch_1.default(`${this.config.getBaseUrl()}${path}`, {
                method: 'POST',
                headers: this.getHeaders(),
                body: JSON.stringify(body),
            });
            if (response.status === 201) {
                return response;
            }
            return yield response.json();
        });
    }
    put(path, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield node_fetch_1.default(`${this.config.getBaseUrl()}${path}`, {
                method: 'PUT',
                headers: this.getHeaders(),
                body: JSON.stringify(body),
            });
            if (response.status === 204) {
                return null;
            }
            return yield response.json();
        });
    }
    getHeaders() {
        const headers = {
            Authorization: this.getAuthorizationHeader(),
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        if (this.config.apiVersion) {
            headers['bluesnap-version'] = this.config.apiVersion;
        }
        return headers;
    }
    getAuthorizationHeader() {
        return `Basic ${Buffer.from(`${this.config.username}:${this.config.password}`).toString('base64')}`;
    }
}
exports.HttpClient = HttpClient;
//# sourceMappingURL=HttpClient.js.map