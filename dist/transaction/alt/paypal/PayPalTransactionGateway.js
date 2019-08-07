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
class PayPalTransactionGateway {
    constructor(http) {
        this.http = http;
    }
    create(altTransaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/services/2/alt-transactions';
            const body = altTransaction;
            return this.http.post(path, body);
        });
    }
    update(altTransaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/services/2/alt-transactions';
            const body = altTransaction;
            return this.http.put(path, body);
        });
    }
    get(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/services/2/alt-transactions/resolve?orderId=${orderId}`;
            return this.http.get(path);
        });
    }
}
exports.PayPalTransactionGateway = PayPalTransactionGateway;
//# sourceMappingURL=PayPalTransactionGateway.js.map