import {AltTransactionErrors} from "../enum/AltTransactionErrors";
import {FraudErrors} from '../enum/FraudErrors';
import {WalletErrors} from '../enum/WalletErrors';
import {BatchTransactionErrors} from '../enum/BatchTransactionErrors';
import {MarketplaceErrors} from '../enum/MarketplaceErrors';
import {RefundErrors} from '../enum/RefundErrors';
import {VaultedShopperErrors} from '../enum/VaultedShopperErrors';
import {HostedPaymentFieldErrors} from '../enum/HostedPaymentFieldErrors';
import {SubscriptionAndBillingPlanErrors} from '../enum/SubscriptionAndBillingPlanErrors';
import {CardTransactionErrors} from '../enum/CardTransactionErrors';

export interface ErrorMessage {
    errorName: AltTransactionErrors | BatchTransactionErrors | CardTransactionErrors | FraudErrors | HostedPaymentFieldErrors | MarketplaceErrors | RefundErrors | SubscriptionAndBillingPlanErrors | VaultedShopperErrors | WalletErrors;
    code: number;
    description: string;
}
