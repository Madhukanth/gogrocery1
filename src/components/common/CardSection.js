import React from 'react';
import { View } from 'react-native';

const CardSection = props => (
	<View style={[styles.containerStyle, props.style]}>{props.children}</View>
);

const styles = {
	containerStyle: {
		borderBottomWidth: 0,
		padding: 9,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#007aff',
		position: 'relative',
		height: 60
	}
};
export { CardSection };
