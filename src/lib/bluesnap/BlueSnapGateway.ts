import { BlueSnapConfig } from './BlueSnapConfig';
import { RefundGateway } from '../refund/RefundGateway';
import { WalletGateway } from '../wallet/WalletGateway';
import { VaultedShopperGateway } from '../vaultedShopper/VaultedShopperGateway';
import { MarketplaceGateway } from '../marketplace/MarketplaceGateway';
import { HttpClient } from '../http/HttpClient';
import { SubscriptionGateway } from '../subscription/SubscriptionGateway';
import { TransactionGateway } from '../transaction/TransactionGateway';
import { TestingGateway } from '../testing/TestingGateway';

export class BlueSnapGateway {
    public marketplace: MarketplaceGateway;

    public refund: RefundGateway;

    public shopper: VaultedShopperGateway;

    public subscription: SubscriptionGateway;

    public wallet: WalletGateway;

    public transaction: TransactionGateway;

    public testing: TestingGateway;

    public constructor(config: BlueSnapConfig) {
        const http = new HttpClient(config);
        this.marketplace = new MarketplaceGateway(http);
        this.refund = new RefundGateway(http);
        this.shopper = new VaultedShopperGateway(http);
        this.subscription = new SubscriptionGateway(http);
        this.wallet = new WalletGateway(http);
        this.transaction = new TransactionGateway(http);
        this.testing = new TestingGateway();
    }
}
