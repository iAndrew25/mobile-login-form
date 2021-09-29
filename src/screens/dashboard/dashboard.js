import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Button from '../../commons/components/button/button';

import {logOutAction} from '../../config/store/actions';

import Units from '../../commons/units';
import Colors from '../../commons/colors';

function Dashboard({dispatch}) {
	const handleLogOut = () => dispatch(logOutAction);

	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>Dashboard</Text>
			<Button text="Logout" style={styles.logout} onPress={handleLogOut} />
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: Colors.secondary,
		justifyContent: 'center'
	},
	title: {
		color: Colors.primaryText,
		fontSize: 20,
		textAlign: 'center',
		marginBottom: Units.x3
	},
	logout: {
		justifyContent: 'center',
		marginHorizontal: Units.x3
	}
})

export default Dashboard;