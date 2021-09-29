import React, {useContext} from 'react';

import {AppContext} from '../store/store-provider';

import Login from '../../screens/login/login';
import Dashboard from '../../screens/dashboard/dashboard';

function NavigationStack() {
	const {store, dispatch} = useContext(AppContext);

    return store.isLoggedIn ? <Dashboard dispatch={dispatch} /> : <Login dispatch={dispatch} />;
}

export default NavigationStack;