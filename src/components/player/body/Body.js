import React from 'react';
import './Body.css';
import Header from './header/Header';
import { useDataLayerValue } from '../../../DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Body = ({ spotify }) => {
	const [{ mega_hit }] = useDataLayerValue();
	console.log(mega_hit);
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
					<PlayCircleFilledIcon />
					<FavoriteIcon />
					<MoreHorizIcon />
				</div>
			</div>
		</div>
	);
};

export default Body;
