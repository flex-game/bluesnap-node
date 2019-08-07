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
class CardTransactionGateway {
    constructor(http) {
        this.http = http;
    }
    authCapture(cardTransaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/services/2/transactions';
            const body = cardTransaction;
            return this.http.post(path, body);
        });
    }
    authOnly(cardTransaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/services/2/transactions';
            const body = cardTransaction;
            return this.http.post(path, body);
        });
    }
    capture(cardTransaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/services/2/transactions';
            const body = cardTransaction;
            return this.http.put(path, body);
        });
    }
    authReversal(cardTransaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/services/2/transactions';
            const body = cardTransaction;
            return this.http.put(path, body);
        });
    }
    get(transactionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/services/2/transactions/${transactionId}`;
            return this.http.get(path);
        });
    }
}
exports.CardTransactionGateway = CardTransactionGateway;
//# sourceMappingURL=CardTransactionGateway.js.map