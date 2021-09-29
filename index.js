import React, {useState} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import Login from './src/screens/login/login';
import Dashboard from './src/screens/dashboard/dashboard';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return isLoggedIn ? <Dashboard /> : <Login />;
};

AppRegistry.registerComponent(appName, () => App);
