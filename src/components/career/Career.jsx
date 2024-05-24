import { useRef } from 'react';
import './career.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
function Career() {
	const occupations = [
		{
			id: 1,
			name: 'Software Engineer',
			img: '/kch.png',
			description: 'I am a software engineer. I am interested in developing web applications. I am a good learner and I am always seeking new challenges.',
		},
		{
			id: 2,
			name: 'Designer',
			img: '/kch.png',
			description: 'I am a designer. I am interested in developing web applications. I am a good learner and I am always seeking new challenges.',
		},
		{
			id: 3,
			name: 'Programmer',
			img: '/kch.png',
			description: 'I am a programmer. I am interested in developing web applications. I am a good learner and I am always seeking new challenges.',
		},
		{
			id: 4,
			name: 'Manager',
			img: '/kch.png',
			description: 'I am a manager. I am interested in developing web applications. I am a good learner and I am always seeking new challenges.',
		},
	];
	const Single = ({ item }) => {
		const ref = useRef();
		const { scrollYProgress } = useScroll({ target: ref });
		const y = useTransform(scrollYProgress, [0, 1], ['-30%', '30%']);
		return (
			<section ref={ref}>
				<div className='container'>
					<div className='wrapper'>
						<div
							className='imgContainer'
							ref={ref}
						>
							<img
								src={item.img}
								alt=''
							/>
						</div>
						<motion.div className='desc' style={{ y }}>
							<h2>{item.name}</h2>
							<p>{item.description}</p>
							<button>View Details</button>
						</motion.div>
					</div>
				</div>
			</section>
		);
	};
	const ref = useRef();
	const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] });
	const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
	return (
		<div className='career'>
			<div className='progress'>
				<h1>프로젝트들</h1>
				<motion.div
					style={{ scaleX }}
					className='progressBar'
				></motion.div>
			</div>
			{occupations.map(occupation => (
				<Single
					key={occupation.id}
					item={occupation}
				/>
			))}
		</div>
	);
}

export default Career;
