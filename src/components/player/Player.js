import React from 'react';
import Body from './body/Body';
import './Player.css';
import Sidebar from './sidebar/Sidebar';
import Footer from './footer/Footer';
const Player = ({ spotify }) => {
	return (
		<div className='player'>
			<div className='player_body'>
				<Sidebar />
				<Body spotify={spotify} />
			</div>
			<Footer spotify={spotify} />
		</div>
	);
};

export default Player;
