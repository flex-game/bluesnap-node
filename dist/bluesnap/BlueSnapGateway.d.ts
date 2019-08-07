import { BlueSnapConfig } from './BlueSnapConfig';
import { RefundGateway } from '../refund/RefundGateway';
import { WalletGateway } from '../wallet/WalletGateway';
import { VaultedShopperGateway } from '../vaultedShopper/VaultedShopperGateway';
import { MarketplaceGateway } from '../marketplace/MarketplaceGateway';
import { HttpClient } from '../http/HttpClient';
import { SubscriptionGateway } from '../subscription/SubscriptionGateway';
import { TransactionGateway } from '../transaction/TransactionGateway';
import { TestingGateway } from '../testing/TestingGateway';
export declare class BlueSnapGateway {
    http: HttpClient;
    marketplace: MarketplaceGateway;
    refund: RefundGateway;
    shopper: VaultedShopperGateway;
    subscription: SubscriptionGateway;
    wallet: WalletGateway;
    transaction: TransactionGateway;
    testing: TestingGateway;
    constructor(config: BlueSnapConfig);
}
