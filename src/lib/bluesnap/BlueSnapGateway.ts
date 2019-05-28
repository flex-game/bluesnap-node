import MarketplaceGateway from '../marketplace/MarketplaceGateway';
import RefundGateway from '../refund/RefundGateway';
import VaultedShopperGateway from '../vaultedShopper/VaultedShopperGateway';
import SubscriptionGateway from '../subscription/SubscriptionGateway';
import WalletGateway from '../wallet/WalletGateway';
import TransactionGateway from '../transaction/TransactionGateway';
import BlueSnapConfig from './BlueSnapConfig';
import HttpClient from '../http/HttpClient';

export default class BlueSnapGateway {
    public marketplace: MarketplaceGateway;
    public refund: RefundGateway;
    public shopper: VaultedShopperGateway;
    public subscription: SubscriptionGateway;
    public wallet: WalletGateway;
    public transaction: TransactionGateway;

    public constructor(config: BlueSnapConfig) {
        const http = new HttpClient(config);
        this.marketplace = new MarketplaceGateway(http);
        this.refund = new RefundGateway(http);
        this.shopper = new VaultedShopperGateway(http);
        this.subscription = new SubscriptionGateway(http);
        this.wallet = new WalletGateway(http);
        this.transaction = new TransactionGateway(http);
    }
}
