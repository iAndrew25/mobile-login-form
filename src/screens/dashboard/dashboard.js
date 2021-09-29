import React from 'react';
import {View, Text} from 'react-native';

import {logOutAction} from '../../config/store/actions';

function Dashboard({dispatch}) {
	const handleLogOut = () => dispatch(logOutAction);

	return (
		<View>
			<Text>Dashboard</Text>
			<Text onPress={handleLogOut}>Logout</Text>
		</View>
	);
}

export default Dashboard;