import React, { Component } from 'react';
import { WebView } from 'react-native';

class PurchaseForm extends Component {
	yourAlert = () => {
		'document.write("amount")';
	};
	render() {
		return <WebView source={require('../components/html/purchaseform.html')} />;
	}
}

export default PurchaseForm;
