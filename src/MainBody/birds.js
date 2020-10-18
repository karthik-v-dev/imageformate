import React from 'react';
import { Bird } from '../assets/Data/imglist'; //IMPORTING IMAGES FROM imglist.js
// BIRDS FUNCTION START
const BIRDS = () => {
	return (
		<div className='container'>
			<h1>Beach Pictures</h1>
			<div className='row'>
				{Bird.map((data, key) => {
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
//BIRDS FUNCTION END
export default BIRDS;
