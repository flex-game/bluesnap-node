"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WalletTransactionGateway_1 = require("./wallet/WalletTransactionGateway");
const EcpAchTransactionGateway_1 = require("./alt/ecpAch/EcpAchTransactionGateway");
const SepaDdTransactionGateway_1 = require("./alt/sepaDirectDebit/SepaDdTransactionGateway");
const CardTransactionGateway_1 = require("./card/CardTransactionGateway");
const PayPalTransactionGateway_1 = require("./alt/paypal/PayPalTransactionGateway");
class TransactionGateway {
    constructor(http) {
        this.http = http;
        this.card = new CardTransactionGateway_1.CardTransactionGateway(http);
        this.wallet = new WalletTransactionGateway_1.WalletTransactionGateway(http);
        this.ecp = new EcpAchTransactionGateway_1.EcpAchTransactionGateway(http);
        this.sepadd = new SepaDdTransactionGateway_1.SepaDdTransactionGateway(http);
        this.paypal = new PayPalTransactionGateway_1.PayPalTransactionGateway(http);
    }
}
exports.TransactionGateway = TransactionGateway;
//# sourceMappingURL=TransactionGateway.js.map