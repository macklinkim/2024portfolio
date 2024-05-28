import { useRef } from 'react';
import './contact.scss';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { process } from 'dotenv';
import { useState } from 'react';

function Contact() {
	const variants = {
		initial: {
			y: 500,
			opacity: 0,
		},
		animate: {
			y: 10,
			x: 5,
			opacity: 1,
			transition: {
				duration: 1,
				staggerChildren: 0.2,
			},
		},
	};
	const ref = useRef();
	const formRef = useRef();
	const isInView = useInView(ref, { margin: '-100px' });
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const sendEmail = e => {
		e.preventDefault();
		emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE, import.meta.env.VITE_EMAIL_TEMPLATE, formRef.current, import.meta.env.VITE_EMAIL_PRIVATE).then(
			result => {
				setSuccess(true);
			},
			error => {
				console.log(error);
				setError(true);
			}
		);
	};
	return (
		<motion.div
			className='contact'
			variants={variants}
			initial='initial'
			whileInView='animate'
			ref={ref}
		>
			<motion.div
				className='textContainer'
				variants={variants}
			>
				<h1>Contact</h1>
				<motion.div
					className='item'
					variants={variants}
				>
					<h2>Email</h2>
					<span>aDgkS@example.com</span>
				</motion.div>
				<motion.div
					className='item'
					variants={variants}
				>
					<h2>Blog</h2>
					<span>aDgkS@example.com</span>
				</motion.div>
				<motion.div
					className='item'
					variants={variants}
				>
					<h2>Phone</h2>
					<span>(+82) 010-1234-0100</span>
				</motion.div>
			</motion.div>
			<motion.div className='formContainer'>
				<motion.div
					className='emailSvg'
					initial={{ opacity: 1 }}
					whileInView={{ opacity: 0 }}
					transition={{ delay: 2, duration: 1 }}
				>
					<svg
						width='600px'
						height='700px'
						viewBox='0 0 64 64'
					>
						<motion.path
							strokeWidth={0.2}
							fill='none'
							initial={{ pathLength: 0 }}
							animate={isInView && { pathLength: 1 }}
							transition={{ duration: 3 }}
							d='M35.0137,31.8325c0.5488-0.0596,0.9453-0.5532,0.8857-1.1021c-0.0596-0.5493-0.5518-0.9434-1.1025-0.8862     c-6.4932,0.7036-9.5806-1.688-11.0259-3.8203c-2.0195-2.98-2.0645-7.2817-0.1143-10.959     c1.9429-3.6626,5.356-5.7627,9.3657-5.7627c0.001,0,0.002,0,0.0029,0c3.0547,0,5.7949,1.2461,7.3301,3.3325     c1.6016,2.1763,1.8633,5.2012,0.7578,8.7485c-0.4336,1.3921-1.8486,3.2183-3.0938,3.5781     c-0.5078,0.1484-0.9092,0.0938-1.2236-0.1665c-0.3623-0.3013-0.4922-0.769-0.4814-0.9541     c0.002-0.0117,0.0029-0.0225,0.0039-0.0342l1.0957-10.9561c0.0586-0.5493-0.3389-1.042-0.8877-1.1001     c-0.5586-0.061-1.042,0.3389-1.1006,0.8882l-0.0969,0.9086c-0.0175-0.013-0.0319-0.0287-0.0496-0.0414     c-1.2813-0.9214-3.0767-1.0112-4.8047-0.2397c-2.9424,1.3115-5.0669,5.48-4.5469,8.9199c0.3901,2.5801,2.209,4.251,4.9917,4.5845     c1.2773,0.1519,2.8452-0.2251,4.0083-1.085c0.1689,0.2427,0.3682,0.4634,0.5908,0.6484     c0.8242,0.6836,1.9092,0.8794,3.0566,0.5488c2.0088-0.5811,3.8389-2.9502,4.4482-4.9048     c1.6445-5.2793,0.333-8.6396-1.0566-10.5283c-1.9111-2.5972-5.2539-4.1475-8.9414-4.1475c-0.001,0-0.002,0-0.0029,0     c-4.7739,0-8.8315,2.4878-11.1323,6.8252c-2.293,4.3232-2.2046,9.4331,0.2256,13.0186     c2.1333,3.1475,5.8232,4.8188,10.5332,4.8188C33.4111,31.9648,34.2002,31.9209,35.0137,31.8325z M34.9131,17.4961l-0.5693,5.9414     c-0.5811,0.9546-2.1055,1.4746-3.1875,1.3472c-1.9009-0.228-2.9946-1.2026-3.251-2.8975     c-0.3848-2.5454,1.2593-5.8477,3.3838-6.7949c0.5137-0.229,1.0332-0.3433,1.5107-0.3433c0.5029,0,0.96,0.1274,1.3115,0.3804     C34.7412,15.582,35.0176,16.4004,34.9131,17.4961z'
						/>
					</svg>
				</motion.div>

				<motion.form
					ref={formRef}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 4, duration: 1 }}
					onSubmit={sendEmail}
				>
					<input
						type='text'
						required
						placeholder='제목'
						name='name'
					/>
					<input
						type='email'
						required
						placeholder='보내는분 메일주소'
						name='email'
					/>
					<textarea
						rows={8}
						placeholder='연락 내용'
						name='message'
					/>
					<button type='submit'>메일보내기</button>
					{error && 'Error'}
					{success && '메일을 성공적으로 보냈습니다.'}
				</motion.form>
			</motion.div>
		</motion.div>
	);
}

export default Contact;
