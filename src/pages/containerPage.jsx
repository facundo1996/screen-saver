import React from 'react';
import '../styles/styles.css';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

import Climate from '../components/climate.jsx'
import Clock from '../components/clock.jsx'

export function ContainerPage () {
	return <div className='container-page'>
		<Splide className='contaier-carousel' aria-label="My Favorite Images" pagination='false ' >
			<SplideSlide className='current-carousel'>
				<Climate />
			</SplideSlide>
			<SplideSlide>
				<Clock />
			</SplideSlide>
		</Splide>
	</div>
}