# bluesnap-node

A node sdk for the [BlueSnap API](https://developers.bluesnap.com/v8976-JSON/docs). Built with TypeScript definitions.

## Getting Started

### Installation
```
npm i --save bluesnap-node
const bluesnap = require('bluesnap-node');
```

### Quick Start
```
const bluesnap = require('bluesnap-node');

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

For more examples check out tests located in the `test` directory.
