import AltTransactionErrors from '../enum/AltTransactionErrors';
import BatchTransactionErrors from '../enum/BatchTransactionErrors';
import CardTransactionErrors from '../enum/CardTransactionErrors';
import FraudErrors from '../enum/FraudErrors';
import HostedPaymentFieldErrors from '../enum/HostedPaymentFieldErrors';
import MarketplaceErrors from '../enum/MarketplaceErrors';
import RefundErrors from '../enum/RefundErrors';
import SubscriptionAndBillingPlanErrors from '../enum/SubscriptionAndBillingPlanErrors';
import VaultedShopperErrors from '../enum/VaultedShopperErrors';
import WalletErrors from '../enum/WalletErrors';

export interface ErrorMessage {
    errorName: AltTransactionErrors | BatchTransactionErrors | CardTransactionErrors | FraudErrors | HostedPaymentFieldErrors | MarketplaceErrors | RefundErrors | SubscriptionAndBillingPlanErrors | VaultedShopperErrors | WalletErrors;
    code: number;
    description: string;
}
