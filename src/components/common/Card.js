import React from 'react';
import { View } from 'react-native';

const Card = props => (
	<View style={[styles.containerStyle, props.style]}>{props.children}</View>
);

const styles = {
	containerStyle: {
		elevation: 2,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
		marginBottom: 60
	}
};

export { Card };
