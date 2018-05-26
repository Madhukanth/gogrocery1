import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = props => {
	const { buttonStyle, textStyle } = styles;
	return (
		<TouchableOpacity
			onPress={props.onPress}
			style={[buttonStyle, props.style]}
		>
			<Text style={[textStyle, props.textStyle]}>{props.children}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: 'white',
		fontSize: 21,
		paddingTop: 4,
		paddingBottom: 10
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#007aff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5,
		height: 40
	}
};
export { Button };
