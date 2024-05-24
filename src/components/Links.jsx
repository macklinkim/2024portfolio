import React from 'react';

function Links() {
	const items = ['Home', 'about', 'Projects', 'Educations', 'Portfolio', 'Contact'];
	return (
		<div className='links'>
			{items.map((item, index) => (
				<a
					key={index}
					href={`#${item}`}
				>
					{item}
				</a>
			))}
		</div>
	);
}

export default Links;
