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
class VaultedShopperGateway {
    constructor(http) {
        this.http = http;
    }
    create(shopper) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/services/2/vaulted-shoppers';
            const body = shopper;
            return this.http.post(path, body);
        });
    }
    update(shopperId, updates) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/services/2/vaulted-shoppers/${shopperId}`;
            const body = updates;
            return this.http.put(path, body);
        });
    }
    get(shopperId) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `/services/2/vaulted-shoppers/${shopperId}`;
            return this.http.get(path);
        });
    }
}
exports.VaultedShopperGateway = VaultedShopperGateway;
//# sourceMappingURL=VaultedShopperGateway.js.map