import { useEffect } from 'react';
import './App.css';
import Login from './components/login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/player/Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
	const [{ user, token }, dispatch] = useDataLayerValue();
	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = '';
		const _token = hash.access_token;
		if (_token) {
			dispatch({
				type: 'SET_TOKEN',
				token: _token,
			});
			spotify.setAccessToken(_token);

			spotify.getMe().then((user) => {
				dispatch({
					type: 'SET_USER',
					user: user,
				});
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
	}, []);
	return (
		<div className='App'>
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;
