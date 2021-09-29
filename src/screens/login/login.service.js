const login = ({email, password}) => Promise.resolve({
	success: email === 'test@test.com' && password === 'test'	
});

export {
	login
};

