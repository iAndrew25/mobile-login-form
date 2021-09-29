import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import StoreProvider from './src/config/store/store-provider';
import NavigationStack from './src/config/navigation/navigation-stack';

function App() {
    return (
        <SafeAreaView style={styles.wrapper}>
            <StoreProvider>
                <NavigationStack />
            </StoreProvider>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }
})

AppRegistry.registerComponent(appName, () => App);
