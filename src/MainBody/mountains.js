import React from 'react';
import { Mountain } from '../assets/Data/imglist'; //IMPORTING IMAGES FROM imglist.js
// MOUNTAINS FUNCTION START
const MOUNTAINS = () => {
	return (
		<div className='container'>
			<h1>Mountain Pictures</h1>
			<div className='row'>
				{Mountain.map((data, key) => {
					return (
						<div className='column' key={key}>
							<img src={data.Src} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
// MOUNTAINS FUNCTION END
export default MOUNTAINS;
