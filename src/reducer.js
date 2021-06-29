export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	//set token to null after developing
	token:
		'BQC--4HVo1xg2HBeL8JJ-iOBgPqRowpGTBk0X2YZP6tzfUQnbbjcjWWQqcki7Ky62Fk24CWwM2c1_jOBolNl7fbhkbwdS6Rsarv60PVHdZ5-6uYCMXnn2cYfcN7UJNSg5bLDB1L40MwZ-DadEryGl-Pq-9XoE08xbYGY8DIVce8TszskVCpRc9k',
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			};
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists,
			};
		case 'SET_MEGA_HIT':
			return {
				...state,
				mega_hit: action.mega_hit,
			};
		default:
			return state;
	}
};

export default reducer;
