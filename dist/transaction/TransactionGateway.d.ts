import { WalletTransactionGateway } from './wallet/WalletTransactionGateway';
import { EcpAchTransactionGateway } from './alt/ecpAch/EcpAchTransactionGateway';
import { SepaDdTransactionGateway } from './alt/sepaDirectDebit/SepaDdTransactionGateway';
import { HttpClient } from '../http/HttpClient';
import { CardTransactionGateway } from './card/CardTransactionGateway';
import { PayPalTransactionGateway } from './alt/paypal/PayPalTransactionGateway';
export declare class TransactionGateway {
    private http;
    card: CardTransactionGateway;
    wallet: WalletTransactionGateway;
    ecp: EcpAchTransactionGateway;
    sepadd: SepaDdTransactionGateway;
    paypal: PayPalTransactionGateway;
    constructor(http: HttpClient);
}
