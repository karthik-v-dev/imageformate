import React from 'react';
import { Beach } from '../assets/Data/imglist'; //IMPORTING IMAGES FROM imglist.js
// BEACHES FUNCTION START
const BEACHES = () => {
	return (
		<div className='container'>
			<h1>Beach Images</h1>
			<div className='row'>
				{Beach.map((data, key) => {
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
// BEACHES FUNCTION END
export default BEACHES;
