import React from 'react';

function Links() {
	const items = ['Home', 'CAREER', 'Project', 'Contact'];
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
