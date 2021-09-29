import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

function Login({}) {
	const [isFeatureCompatible, setIsFeatureCompatible] = useState();
	const [whatIsAvailable, setWhatIsAvailable] = useState();
	const [isAnythingSet, setIsAnythingSet] = useState();
	const [isLoggedIn, setIsLoggedIn] = useState();

	useEffect(() => {
		(async () => {
			const a = await LocalAuthentication.hasHardwareAsync();
			const b = await LocalAuthentication.supportedAuthenticationTypesAsync();
			const c = await LocalAuthentication.isEnrolledAsync();

			setIsFeatureCompatible(a);
			setWhatIsAvailable(b);
			setIsAnythingSet(c);
		})();
	}, []);

	const handleOnAuthenticate = async () => {
		const res = await LocalAuthentication.authenticateAsync({
			promptMessage: 'Login',
			cancelLabel: 'Cancel',
			fallbackLabel: 'fallback'
		});

		setIsLoggedIn(res); 
	}

	return (
		<View>
			<Text>Login</Text>
			<Text>isFeatureCompatible: {JSON.stringify(isFeatureCompatible)}</Text>
			<Text>whatIsAvailable: {JSON.stringify(whatIsAvailable)}</Text>
			<Text>isAnythingSet: {JSON.stringify(isAnythingSet)}</Text>
			<Text>isLoggedIn: {JSON.stringify(isLoggedIn)}</Text>
			<Text onPress={handleOnAuthenticate}>Click to authenticate</Text>
		</View>
	);
}

export default Login;