import React, {createContext, useReducer} from 'react';

import initialStore from './initial-store';
import reducer from './reducer';

const AppContext = createContext();

function StoreProvider({children}) {
	const [store, dispatch] = useReducer(reducer, initialStore)

	return (
		<AppContext.Provider value={{store, dispatch}}>
			{children}
		</AppContext.Provider>
	);
};

export {AppContext};
export default StoreProvider;