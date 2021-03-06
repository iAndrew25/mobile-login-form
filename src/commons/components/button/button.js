import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import Colors from '../../colors';
import Units from '../../units';

function Button({ text, style, ...rest }) {
	return (
		<TouchableOpacity style={StyleSheet.compose(styles.wrapper, style)} activeOpacity={0.7} {...rest}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		padding: Units.x1,
		borderRadius: Units.x7,
		borderColor: Colors.white,
		borderWidth: 4,
	},
	text: {
		color: Colors.primaryText,
		fontSize: 18,
		textTransform: 'uppercase',
		textAlign: 'center'
	}
});

export default Button;
