import React from 'react';
import { Text, View } from 'react-native';

const Header = props => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#f5f5f5',
		justifyContent: 'center',
		height: 50,
		paddingTop: 5,
		paddingLeft: 130,
		borderWidth: 1,
		borderRadius: 1,
		borderColor: '#F8F8F8',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { Width: 1, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 1
	},
	textStyle: {
		fontSize: 20,
		color: 'black'
	}
};

export { Header };
