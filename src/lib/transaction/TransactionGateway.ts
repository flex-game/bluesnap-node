import CardTransactionGateway from './card/CardTransactionGateway';
import WalletTransactionGateway from './wallet/WalletTransactionGateway';
import EcpAchTransactionGateway from './alt/ecpAch/EcpAchTransactionGateway';
import SepaDdTransactionGateway from './alt/sepaDirectDebit/SepaDdTransactionGateway';
import PayPalTransactionGateway from './alt/paypal/PayPalTransactionGateway';
import HttpClient from '../http/HttpClient';

export default class MarketplaceGateway {
    private http: HttpClient;
    public card: CardTransactionGateway;
    public wallet: WalletTransactionGateway;
    public ecp: EcpAchTransactionGateway;
    public sepadd: SepaDdTransactionGateway;
    public paypal: PayPalTransactionGateway;

    public constructor(http: HttpClient) {
        this.http = http;
        this.card = new CardTransactionGateway(http);
        this.wallet = new WalletTransactionGateway(http);
        this.ecp = new EcpAchTransactionGateway(http);
        this.sepadd = new SepaDdTransactionGateway(http);
        this.paypal = new PayPalTransactionGateway(http);
    }

}
