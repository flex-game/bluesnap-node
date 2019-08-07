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
const querystring = require("querystring");
class MarketplaceGateway {
    constructor(http) {
        this.http = http;
    }
    create(vendor) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/services/2/vendors';
            const body = vendor;
            const response = yield this.http.post(path, body);
            try {
                return parseInt(response.headers.get('location').split('/').pop()); // Get the vendorId
            }
            catch (_a) {
                throw new Error('Could not parse vendorId from response.');
            }
        });
    }
    update(vendorId, updates) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/services/2/vendors/${vendorId}`;
            const body = updates;
            return this.http.put(path, body);
        });
    }
    get(vendorId) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/services/2/vendors/${vendorId}`;
            return this.http.get(path);
        });
    }
    getAll(parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = querystring.stringify(parameters);
            const path = `/services/2/vendors?${queryParams}`;
            return this.http.get(path);
        });
    }
}
exports.MarketplaceGateway = MarketplaceGateway;
//# sourceMappingURL=MarketplaceGateway.js.map