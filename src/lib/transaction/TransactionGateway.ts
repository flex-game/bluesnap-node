import CardTransactionGateway from './card/CardTransactionGateway';
import WalletTransactionGateway from './wallet/WalletTransactionGateway';
import EcpAchTransactionGateway from './ecpAch/EcpAchTransactionGateway';
import SepaDdTransactionGateway from './sepaDirectDebit/SepaDdTransactionGateway';
import BatchTransactionGateway from './batch/BatchTransactionGateway';
import PayPalTransactionGateway from './paypal/PayPalTransactionGateway';
import HttpClient from '../http/HttpClient';

export default class MarketplaceGateway {
    private http: HttpClient;
    public card: CardTransactionGateway;
    public wallet: WalletTransactionGateway;
    public ecp: EcpAchTransactionGateway;
    public sepadd: SepaDdTransactionGateway;
    public batch: BatchTransactionGateway;
    public paypal: PayPalTransactionGateway;

    public constructor(http: HttpClient) {
        this.http = http;
        this.card = new CardTransactionGateway(http);
        this.wallet = new WalletTransactionGateway(http);
        this.ecp = new EcpAchTransactionGateway(http);
        this.sepadd = new SepaDdTransactionGateway(http);
        this.batch = new BatchTransactionGateway(http);
        this.paypal = new PayPalTransactionGateway(http);
    }

}
