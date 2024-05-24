import { motion } from 'framer-motion';
import './app.scss';
function Test() {
	const variants = {
		enter: index => ({
			opacity: 1,
			x: 100,
			transition: { delay: index * 0.8 },
		}),
		exit: { opacity: 0 },
	};

	const items = ['item1', 'item2', 'item3', 'item4', 'item5'];
	return (
		<div className='course'>
			<motion.ul
				initial='exit'
				animate='enter'
				variants={variants}
			>
				{items.map((item, index) => (
					<motion.li
						variants={variants}
						key={item}
						custom={index}
					>
						{item}
					</motion.li>
				))}
			</motion.ul>
		</div>
	);
}

export default Test;
