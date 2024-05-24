import { useState } from 'react';
import Links from './Links';
import './sideBar.scss';
import ToggleButton from './toggleButton/ToggleButton';
import { motion } from 'framer-motion';
function SideBar() {
	const [open, setOpen] = useState(false);
	const variants = {
		enter: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 30,
        delay: 0.2 },
    },
		exit: {
			clipPath: 'circle(30px at 50px 50px)',
			transition: { 
        delay: 0.2, 
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
		},
	};
	return (
		<motion.div
			className='sideBar'
			animate={open ? 'enter' : 'exit'}
		>
			<motion.div className='bg' variants={variants}>
				<Links></Links>
			</motion.div>
			<ToggleButton open={open} setOpen={setOpen}></ToggleButton>
		</motion.div>
	);
}

export default SideBar;
