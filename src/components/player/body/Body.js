import React from 'react';
import './Body.css';
import Header from './header/Header';
import { useDataLayerValue } from '../../../DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './songrow/SongRow';

const Body = ({ spotify }) => {
	const [{ mega_hit }, dispatch] = useDataLayerValue();
	const playPlaylist = (id) => {
		spotify
			.play({
				context_uri: `spotify:playlist:37i9dQZF1DXbYM3nMM0oPk`,
			})
			.then((res) => {
				spotify.getMyCurrentPlayingTrack().then((r) => {
					dispatch({
						type: 'SET_ITEM',
						item: r.item,
					});
					dispatch({
						type: 'SET_PLAYING',
						playing: true,
					});
				});
			});
	};
	const playSong = (id) => {
		spotify
			.play({
				uris: [`spotify:track:${id}`],
			})
			.then((res) => {
				spotify.getMyCurrentPlayingTrack().then((r) => {
					dispatch({
						type: 'SET_ITEM',
						item: r.item,
					});
					dispatch({
						type: 'SET_PLAYING',
						playing: true,
					});
				});
			});
	};
	return (
		<div className='body'>
			<Header spotify={spotify} />
			<div className='body_info'>
				<img src={mega_hit?.images[0].url} alt={mega_hit?.name} />
				<div className='body_infoText'>
					<strong>PLAYLIST</strong>
					<h2>{mega_hit?.name}</h2>
					<p>{mega_hit?.description}</p>
				</div>
			</div>
			<div className='body_songs'>
				<div className='body_icons'>
					<PlayCircleFilledIcon
						className='body_shuffle'
						onClick={playPlaylist}
					/>
					<FavoriteIcon fontSize='large' />
					<MoreHorizIcon />
				</div>
				{mega_hit?.tracks.items.map((item) => (
					<SongRow playSong={playSong} track={item.track} />
				))}
			</div>
		</div>
	);
};

export default Body;
