import { useEffect } from 'react';
import './App.css';
import Login from './components/login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/player/Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
	const [{ token }, dispatch] = useDataLayerValue();
	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = '';
		const _token = hash.access_token;
		if (_token) {
			spotify.setAccessToken(_token);
			dispatch({
				type: 'SET_TOKEN',
				token: _token,
			});

			spotify.getMe().then((user) => {
				dispatch({
					type: 'SET_USER',
					user: user,
				});
			});

			dispatch({
				type: 'SET_SPOTIFY',
				spotify: spotify,
			});

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: 'SET_PLAYLISTS',
					playlists: playlists,
				});
			});
			spotify.getPlaylist('37i9dQZF1DXbYM3nMM0oPk').then((response) => {
				dispatch({
					type: 'SET_MEGA_HIT',
					mega_hit: response,
				});
			});
		}
	}, [token, dispatch]);
	return (
		<div className='App'>
			{!token && <Login />}
			{token && <Player spotify={spotify} />}
		</div>
	);
}

export default App;
