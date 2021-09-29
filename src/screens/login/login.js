import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

import Button from '../../commons/components/button/button';

import {logInAction} from '../../config/store/actions';

import Colors from '../../commons/colors';
import Units from '../../commons/units';

const fingerprintIcon = require('../../assets/images/fingerprint.png');

const FINGERPRINT = 1;

function Login({dispatch}) {
	const [isFeatureCompatible, setIsFeatureCompatible] = useState();
	const [whatIsAvailable, setWhatIsAvailable] = useState();
	const [isAnythingSet, setIsAnythingSet] = useState();

	const shouldDisplayFingerprint = isAnythingSet && isFeatureCompatible && whatIsAvailable.includes(FINGERPRINT)

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
		const {success} = await LocalAuthentication.authenticateAsync({
			promptMessage: 'Login',
			cancelLabel: 'Cancel',
			fallbackLabel: 'Try again'
		});

		success && dispatch(logInAction);
	};

	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>Log in to your account</Text>
			<View style={styles.form}>
				<TextInput style={styles.textinput}/>
				<TextInput style={styles.textinput}/>
				<View style={styles.formFooter}>
					<Button text="Login" style={styles.login} onPress={console.log}/>
					{true && <TouchableOpacity activeOpacity={0.7} style={styles.fingerprintWrapper} onPress={handleOnAuthenticate}>
						<Image source={fingerprintIcon} style={styles.fingerprintImage}/>
					</TouchableOpacity>}
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: Colors.primary,
		flexDirection: 'column',
		justifyContent: 'center'
	},
	title: {
		color: Colors.primaryText,
		fontSize: 20,
		textAlign: 'center',
		marginBottom: Units.x3
	},
	form: {
		width: Units.x37,
		alignSelf: 'center'
	},
	formFooter: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	login: {
		flex: 1
	},
	textinput: {
		paddingVertical: Units.x1,
		paddingHorizontal: Units.x2,
		borderRadius: Units.x7,
		borderColor: Colors.white,
		borderWidth: 4,
		color: Colors.primaryText,
		fontSize: 18,
		marginVertical: Units.x1
	},
	fingerprintWrapper: {
		width: Units.x6,
		height: Units.x6,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: Units.x2
	},
	fingerprintImage: {
		width: Units.x5,
		height: Units.x5,
	}
});

export default Login;