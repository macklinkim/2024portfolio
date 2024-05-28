import React, { useRef } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import './projects.scss';
function Projects() {
	const variants = {
		initial: {
			x: -100,
			y: 100,
			opacity: 0,
		},
		animate: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				duration: 1,
				staggerChildren: 0.2,
			},
		},
	};
	const ref = useRef(null);
	const isInView = useInView(ref, { margin: '-100px' });
	return (
		<motion.div
			className='projects'
			variants={variants}
			initial='initial'
			ref={ref}
			animate={isInView && 'animate'}
		>
			<motion.div
				className='intro'
				variants={variants}
			>
				<p>
					Fullstack 개발자가 되기 위해 다양한 프로젝트를 진행했습니다.
					<br />
					미래를 향해 항상 공부하는 개발자
				</p>
				<hr />
			</motion.div>
			<motion.div
				className='title'
				variants={variants}
			>
				<div className='content'>
					<img
						src='/people.webp'
						alt='people'
					/>
				</div>
				<div className='desc'>
					<h1>
						<motion.b whileHover={{ color: 'orange' }}>HTML & CSS</motion.b>
						<motion.b whileHover={{ color: 'orange' }}>JavaScript, </motion.b>
						<motion.b whileHover={{ color: 'orange' }}>React, </motion.b>
						<motion.b whileHover={{ color: 'orange' }}>TypeScript, </motion.b>
						<motion.b whileHover={{ color: 'orange' }}>NextJS, </motion.b>
					</h1>
				</div>
				<button>작성 프로젝트들</button>
			</motion.div>
			<motion.div
				className='list'
				variants={variants}
			>
				<motion.div
					className='card'
					whileHover={{ background: 'lightgray', color: 'black' }}
					variants={variants}
				>
					<h2>HTML&CSS</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem consequatur totam cum minima, doloribus velit in quasi iure quis laudantium ea animi nobis eveniet repudiandae ratione ipsum minus. Aspernatur.</p>
					<button>Github보기</button>
				</motion.div>
				<motion.div
					className='card'
					whileHover={{ background: 'lightgray', color: 'black' }}
					variants={variants}
				>
					<h2>React</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem consequatur totam cum minima, doloribus velit in quasi iure quis laudantium ea animi nobis eveniet repudiandae ratione ipsum minus. Aspernatur.</p>
					<button>Github보기</button>
				</motion.div>
				<motion.div
					className='card'
					whileHover={{ background: 'lightgray', color: 'black' }}
					variants={variants}
				>
					<h2>React</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem consequatur totam cum minima, doloribus velit in quasi iure quis laudantium ea animi nobis eveniet repudiandae ratione ipsum minus. Aspernatur.</p>
					<button>Github보기</button>
				</motion.div>
				<motion.div
					className='card'
					whileHover={{ background: 'lightgray', color: 'black' }}
					variants={variants}
				>
					<h2>NextJS</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem consequatur totam cum minima, doloribus velit in quasi iure quis laudantium ea animi nobis eveniet repudiandae ratione ipsum minus. Aspernatur.</p>
					<button>Github보기</button>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

export default Projects;
