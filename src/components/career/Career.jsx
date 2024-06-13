import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {Autoplay,  Pagination, Navigation } from 'swiper/modules';
import './career.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
function Career() {
	const occupations = [
		{
			id: 1,
			name: 'HTML/CSS',
			imageSrc: ['css01.png', 'css02.png', 'css03.png', 'css04.png', 'css05.png', 'css06.png'],
			description: 'HTML과 CSS를 다뤄보며 기본적으로 익힌 프로젝트들입니다.\n멋쟁이 사자들 부트캠프 교육과정에 작성한 과제',
			links: [
				{ title: '첫CSS 과제 Profile', address: 'https://macklinkim.github.io/study/css_study/css_study_01_profile/' },
				{ title: 'Modal 생성', address: 'https://macklinkim.github.io/study/css_study/css_study_23_modal_final/modal-step/' },
				{ title: '로그인 화면 제작', address: 'https://macklinkim.github.io/study/css_study/css_study_20_data/' },
				{ title: '마지막 Mini Project', address: 'https://macklinkim.github.io/study/css_study/css_study_23_challenges_community' },
			],
		},
		{
			id: 2,
			name: 'JavaScript & React',
			imageSrc: ['react01.png', 'react02.png', 'react03.png', 'react04.png', 'react05.png', 'react06.png'],
			description: 'JavaScript와 React Native를 이용한 프로젝트 들입니다. \n멋쟁이 사자들 부트캠프 교육과정에 작성한 프로젝트들이며 \nReact Native위주로 개발했습니다.',
			links: [
				{ title: 'React 실습결과', address: 'https://github.com/macklinkim/LikelionReact.git' },
				{ title: 'React 중간 결과물', address: 'https://github.com/macklinkim/board-app.git' },
			],
		},
		{
			id: 3,
			name: 'Next.js & MongoDB',
			imageSrc: ['/project_demo.mp4'],
			description: 'Next.js와 React Native, TailwindCSS, MongoDB, mongoose를 이용한 개인프로젝트입니다.\n자습하여 제작한 초기 프로젝트입니다.',
			links: [{ title: 'NEXT.js 초기프로젝트', address: 'https://github.com/macklinkim/lionprj' }],
		},
		{
			id: 4,
			name: 'Next.js AI SaaS프로젝트',
			imageSrc: ['/ai_5.png','/ai_0.png', '/ai_1.png', '/ai_2.png', '/ai_3.png', '/ai_4.png', ],
			description: 'Next.js, React Native, TypeScript, Tailwind, Prisma, PostgreDB 등을\n이용하여 제작한 프로젝트입니다.\nOpenAI-API와 Replicate를 이용하여 ChatGPT 3.5, 4.0 및 Llama3, dalle[2/3] 등을\n사용자가 이용할 수 있게 만들었습니다.  ',
			links: [
				{ title: 'Next.js 프로젝트 링크', address: 'https://ai-saas-webstudy.vercel.app/' },
				{ title: 'Next.js 프로젝트(GIT)', address: 'https://github.com/macklinkim/Nextjs-study-ai-saas' },
			],
		},
	];
	const Single = ({ item }) => {
		const ref = useRef();
		const { scrollYProgress } = useScroll({ target: ref });
		const y = useTransform(scrollYProgress, [0, 1], ['-300', '300']);
		return (
			<section>
				<div className='container'>
					<div className='wrapper'>
						<div
							className='imgContainer'
							ref={ref}
						>
							<div className='swiperContainer'>
								<Swiper
									slidesPerView={'auto'}
									centeredSlides={true}
									spaceBetween={30}
									pagination={{
										clickable: true,
									}}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
									loop={true}
									navigation={true}
									modules={[Autoplay, Pagination, Navigation]}
									className='mySwiper'
								>
									{item.imageSrc.map(item =>
										item.includes('mp4') ? (
											<video
												controls
												width='600'
												key={item}
											>
												<source
													src={item}
													type='video/mp4'
												/>
											</video>
										) : (
											<SwiperSlide key={item}>
												<img
													src={item}
													alt=''
												/>
											</SwiperSlide>
										)
									)}
								</Swiper>
							</div>
						</div>
						<motion.div
							className='desc'
							style={{ y }}
						>
							<h2>{item.name}</h2>
							<p>{item.description}</p>
							{item.links.map(link => (
								<button
									key={link}
									onClick={() => window.open(link.address, '_blank')}
								>
									{link.title}
								</button>
							))}
						</motion.div>
					</div>
				</div>
				<hr />
			</section>
		);
	};
	const ref = useRef();
	const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] });
	const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
	return (
		<div
			className='career'
			ref={ref}
		>
			<div className='progress'>
				<h1>프로젝트</h1>
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
