import { motion } from 'framer-motion';
import { Menu, Minimize2 } from 'lucide-react';
const ToggleButton = ({ open, setOpen }) => {
	return (
		<div>
			<button onClick={() => setOpen(prev => !prev)}></button>
			<motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: open ? 45 : 0 }}
      className='icon'>{open ? <Menu /> : <Minimize2 />}</motion.div>
		</div>
	);
};

export default ToggleButton;
