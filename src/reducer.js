export const initialState = {
	user: null,
	playlists: [],
	spotify: null,
	mega_hit: null,
	// top_artists: null,
	playing: false,
	item: null,
	token: null,
	//set token to null after developing
	// token:
	// 	'BQC--4HVo1xg2HBeL8JJ-iOBgPqRowpGTBk0X2YZP6tzfUQnbbjcjWWQqcki7Ky62Fk24CWwM2c1_jOBolNl7fbhkbwdS6Rsarv60PVHdZ5-6uYCMXnn2cYfcN7UJNSg5bLDB1L40MwZ-DadEryGl-Pq-9XoE08xbYGY8DIVce8TszskVCpRc9k',
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};

		case 'SET_PLAYING':
			return {
				...state,
				playing: action.playing,
			};

		case 'SET_ITEM':
			return {
				...state,
				item: action.item,
			};

		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			};

		case 'SET_MEGA_HIT':
			return {
				...state,
				mega_hit: action.mega_hit,
			};
		// case 'SET_TOP_ARTISTS':
		// 	return {
		// 		...state,
		// 		top_artists: action.top_artists,
		// 	};

		case 'SET_SPOTIFY':
			return {
				...state,
				spotify: action.spotify,
			};

		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists,
			};
		default:
			return state;
	}
};

export default reducer;
