const reducer = (store, { type }) => {
	switch (type) {
		case 'LOG_IN':
			return {
				...store,
				isLoggedIn: true
			};

		case 'LOG_OUT':
			return {
				...store,
				isLoggedIn: false
			};

		default:
			return store;
	}
};

export default reducer;
