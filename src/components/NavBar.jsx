import Sidebar from './Sidebar';
import './navBar.scss';
import { motion } from 'framer-motion';

const Navbar = () => {
	return (
		<div className='navBar'>
			{/* Sidebar */}
			<Sidebar />
			<div className='wrapper'>
				<div></div>
				<motion.span
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					Kim Cheon Ho(김천호)
				</motion.span>
				<div className='social'>
					<a href='#'>
						<img
							src='/facebook.png'
							alt=''
						/>
					</a>
					<a href='#'>
						<img
							src='/instagram.png'
							alt=''
						/>
					</a>
					<a href='#'>
						<img
							src='/github.png'
							alt=''
						/>
					</a>
					<a href='#'>
						<img
							src='/naver.png'
							alt=''
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
