const braintree = require('braintree');

let id;
let amount;
const gateway = braintree.connect({
	environment: braintree.Environment.Sandbox,
	merchantId: 'qfp3tt4bh5xmdvbk',
	publicKey: 'yqjvsjgs24vhgskq',
	privateKey: 'd93206e757ae4ce17e1bf08d0be17be7'
});
exports.clientToken = (req, res) => {
	gateway.customer.create(
		{
			firstName: 'Jen',
			lastName: 'Smcfbdfith',
			company: 'Brafbgbintree',
			email: 'jen@fgbfgexample.com',
			phone: '312.555.1234',
			fax: '614.555.5678',
			website: 'www.example.com'
		},
		(err, result) => {
			console.log(result.success);
			id = result.customer.id;
			// true

			console.log(result.customer.id);
			// e.g. 494019
		}
	);
	gateway.clientToken.generate({ customerId: id }, (err, response) => {
		res.send(response.clientToken);
	});
};

exports.getAmount = (req, res) => {
	amount = req.body.amount;
	res.send(amount);
};

exports.purchase = (req, res) => {
	const paymentMethodNonce = req.body.paymentMethodNonce;
	gateway.transaction.sale(
		{
			amount,
			paymentMethodNonce,
			options: {
				submitForSettlement: true
			}
		},
		(err, transactionResult) => {
			gateway.testing.settle(
				transactionResult.transaction.id,
				(error, settleResult) => {
					console.log(settleResult.success);
					// true
					res.send(settleResult.success);

					console.log(settleResult.transaction.status);

					// Transaction.Status.Settled
				}
			);
		}
	);
};
