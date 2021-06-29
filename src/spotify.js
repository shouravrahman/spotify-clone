// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = '987fd09bc07745a2aa64221aa3cfa70a';
const redirectUri = 'http://localhost:3000/';
const scopes = [
	// 'user-read-currently-playing',
	// 'user-read-recently-played',
	// 'user-read-playback-state',
	// 'user-top-read',
	// 'user-modify-playback-state',
	'user-read-playback-position',
	'user-read-email',
	'user-library-modify',
	'playlist-modify-public',
	'ugc-image-upload',
	'user-follow-modify',
	'user-modify-playback-state',
	'user-read-recently-played',
	'user-read-private',
	'user-library-read',
	'user-top-read',
	'playlist-modify-private',
	'user-follow-read',
	'user-read-playback-state',
	'user-read-currently-playing',
	'playlist-read-private',
	'playlist-read-collaborative',
];

export const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split('&')
		.reduce((initial, item) => {
			var parts = item.split('=');
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true`;
