# bluesnap-node

A node sdk for the [BlueSnap API](https://developers.bluesnap.com/v8976-JSON/docs). Built with TypeScript definitions.

## Getting Started

### Installation
```
npm i --save bluesnap
```

### Quick Start

#### With Typescript
```
import { BlueSnapGateway, BlueSnapConfig } from 'bluesnap';

const bluesnapConfig = new BlueSnapConfig('Sandbox', 'username', 'password', '3.0');
const gateway = new BlueSnapGateway(bluesnapConfig);
```

#### Without Typescript
```
const bluesnap = require('bluesnap');

const gateway = new bluesnap.BlueSnapGateway({
  environment: 'Sandbox', // 'Production' or 'Sandbox'
  username: 'smrubin', // BlueSnap username
  password: 'password', // BlueSnap password
  apiVersion: '3.0', // Optional
});
```

### Api Examples

####  Create Shopper
```
const shopper = await gateway.shopper.create({
  // Vaulted Shopper Request Object
});
```

#### Post Card Transaction
```
const cardTransaction = await gateway.transaction.card.create({
  // Card Transaction Request Object
});
```

#### Post Alt Transaction (PayPal)
```
const paypalTransaction = await gateway.transaction.paypal.get('orderId'); // PayPal Order Id
```

#### Refund
```
await gateway.refund.refund('transactionId'); // The Transaction Id
```

#### Get a Wallet
```
const wallet = await gateway.wallet.get('walletId'); // Wallet Id
```

#### More Examples
For more examples check out tests located in the `test` directory.
