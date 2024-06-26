import { useRef } from 'react';
import './landing.scss';
import { motion } from 'framer-motion';
function Landing({ link1, link2 }) {
	const variants = {
		initial: {
			x: -500,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1,
				staggerChildren: 0.3,
			},
		},
		scrollButton: {
			opacity: 0,
			y: 10,
			transition: {
				duration: 2,
				repeat: Infinity,
			},
		},
	};
	const sliderVariants = {
		initial: {
			x: 0,
		},
		animate: {
			x: '-50%',
			transition: {
				repeat: Infinity,
				repeatType: 'loop',
				duration: 20,
				repeatDelay: 0,
			},
		},
	};

	const moveTo = goto => {
		goto === 'projects' ? link1.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }) : link2.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};
	return (
		<div className='landing'>
			<div className='wrapper'>
				<motion.div
					className='intro'
					variants={variants}
					initial='initial'
					animate='animate'
				>
					<motion.h1
						variants={variants}
						className='name'
					>
						Kim Cheon Ho
					</motion.h1>
					<motion.h1
						variants={variants}
						className='occupation'
					>
						Fullstack Developer(노력중)
					</motion.h1>
					<motion.div
						variants={variants}
						className='buttons'
					>
						<motion.button
							onClick={() => moveTo('projects')}
							variants={variants}
						>
							최근 작업물
						</motion.button>
						<motion.button
							onClick={() => moveTo('contacts')}
							variants={variants}
						>
							연락처
						</motion.button>
					</motion.div>
					<motion.img
						variants={variants}
						animate='scrollButton'
						src='/scroll.png'
						alt='scroll'
					/>
				</motion.div>
			</div>
			{/* <motion.div
				variants={sliderVariants}
				initial='initial'
				animate='animate'
				className='slideText'
			>
				Frontend, Backend, Fullstack
			</motion.div> */}
			<div className='container'>
				<img
					src='/kch.png'
					alt='main'
					className='profile'
				/>
			</div>
		</div>
	);
}

export default Landing;
