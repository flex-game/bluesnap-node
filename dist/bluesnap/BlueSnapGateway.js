"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RefundGateway_1 = require("../refund/RefundGateway");
const WalletGateway_1 = require("../wallet/WalletGateway");
const VaultedShopperGateway_1 = require("../vaultedShopper/VaultedShopperGateway");
const MarketplaceGateway_1 = require("../marketplace/MarketplaceGateway");
const HttpClient_1 = require("../http/HttpClient");
const SubscriptionGateway_1 = require("../subscription/SubscriptionGateway");
const TransactionGateway_1 = require("../transaction/TransactionGateway");
const TestingGateway_1 = require("../testing/TestingGateway");
class BlueSnapGateway {
    constructor(config) {
        const http = new HttpClient_1.HttpClient(config);
        this.http = http;
        this.marketplace = new MarketplaceGateway_1.MarketplaceGateway(http);
        this.refund = new RefundGateway_1.RefundGateway(http);
        this.shopper = new VaultedShopperGateway_1.VaultedShopperGateway(http);
        this.subscription = new SubscriptionGateway_1.SubscriptionGateway(http);
        this.wallet = new WalletGateway_1.WalletGateway(http);
        this.transaction = new TransactionGateway_1.TransactionGateway(http);
        this.testing = new TestingGateway_1.TestingGateway();
    }
}
exports.BlueSnapGateway = BlueSnapGateway;
//# sourceMappingURL=BlueSnapGateway.js.map