import React from 'react';
import { Food } from '../assets/Data/imglist'; //IMPORTING IMAGES FROM imglist.js
// FOOD FUNCTION START
const FOOD = () => {
	return (
		<div className='container'>
			<h1>Food Pictures</h1>
			<div className='row'>
				{Food.map((data, key) => {
					return (
						<div className='column' key={key}>
							<img src={data.Src} />
						</div>
					);
				})}
			</div>
		</div>
	);
}; // FOOD FUNCTION END
export default FOOD;
