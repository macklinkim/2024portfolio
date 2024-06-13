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
					Fullstack 개발자가 되기 위해,
					<br />
					미래를 향해 공부하는 개발자,
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
						<motion.b whileHover={{ color: 'orange' }}>숭실대 컴퓨터공학 졸업, </motion.b>
						<motion.b whileHover={{ color: 'orange' }}>정보처리기사, </motion.b>
						<motion.b whileHover={{ color: 'orange' }}>토익 835, </motion.b>
						<motion.b whileHover={{ color: 'orange' }}>멋사 Frontend 교육 수료(외 직업훈련 11개)</motion.b>
					</h1>
				</div>
				<button> 이력서 및 경력 기술서 요청하기</button>
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
					<div className='jobTitle'>
						<h2>TmaxData</h2>
						<h3>2015.05~2015.11</h3>
					</div>
					<hr />
					<div className='jobDesc'>
						<ul className='ulLv1'>
							<li>
								<div>
									<h4>근무부서 및 직위</h4>
									<p>Kernel연구개발 2팀 주임</p>
								</div>
							</li>
							<li>
								<div>
									<h4>주요업무내용</h4>
									<ul className='ulLv2'>
										<li>
											<p>데스크탑 운영체제 개발</p>
										</li>
										<li>
											<p>FreeBSD의 System call과 Chromium OpenSource를 이용, 운영체제 제어기능 및 GUI 구현</p>
										</li>
										<li></li>
									</ul>
								</div>
							</li>
							<li>
								<div>
									<h4>사용 기술</h4>
									<p>C++, C, Git, GDB7.8.2.</p>
								</div>
							</li>
						</ul>
					</div>
				</motion.div>
				<motion.div
					className='card'
					whileHover={{ background: 'lightgray', color: 'black' }}
					variants={variants}
				>
					<div className='jobTitle'>
						<h2>건강보험공단</h2>
						<h3>2016.07~2016.08</h3>
					</div>
					<hr />
					<div className='jobDesc'>
						<ul className='ulLv1'>
							<li>
								<div>
									<h4>근무부서 및 직위</h4>
									<p>정보관리실 6급 정규직</p>
								</div>
							</li>
							<li>
								<div>
									<h4>주요업무내용</h4>
									<ul className='ulLv2'>
										<li>
											<p>대형 프로젝트의 효율적인 관리를 위한 시스템 운영</p>
										</li>
										<li>
											<p>내부직원 교육 시스템 유지보수</p>
										</li>
										<li>
											<p>Spring3.0, Oracle DB를 이용</p>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<div>
									<h4>사용 기술</h4>
									<p>C, Java(Spring), OracleDB</p>
								</div>
							</li>
						</ul>
					</div>
				</motion.div>
				<motion.div
					className='card'
					whileHover={{ background: 'lightgray', color: 'black' }}
					variants={variants}
				>
					<div className='jobTitle'>
						<h2>대한건설협회</h2>
						<h3>2017.09~2019.01</h3>
					</div>
					<hr />
					<div className='jobDesc'>
						<ul className='ulLv1'>
							<li>
								<div>
									<h4>근무부서 및 직위</h4>
									<p>정보관리실 사원</p>
								</div>
							</li>
							<li>
								<div>
									<h4>주요업무내용</h4>
									<ul className='ulLv2'>
										<li>
											<p>건설실적조사 전산망의 안정적 운영, 증명서 발급 시스템 등 다양한 시스템의 안정적 운영 및 신규 사업개발</p>
										</li>
										<li>
											<p>협회시스템 유지보수</p>
										</li>
										<li>
											<p>정부기관 요청 자료, DB 추출 문서회신</p>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<div>
									<h4>사용 기술</h4>
									<p>Spring 3.0, Mybatis2, Java, Javascript</p>
								</div>
							</li>
						</ul>
					</div>
				</motion.div>
				<motion.div
					className='card'
					whileHover={{ background: 'lightgray', color: 'black' }}
					variants={variants}
				>
					<div className='jobTitle'>
						<h2>국군 제3248부대</h2>
						<h3>2016.07~2016.08</h3>
					</div>
					<hr />
					<div className='jobDesc'>
						<ul className='ulLv1'>
							<li>
								<div>
									<h4>근무부서 및 직위</h4>
									<p>정보관리실 6급 군무원</p>
								</div>
							</li>
							<li>
								<div>
									<h4>주요업무내용</h4>
									<ul className='ulLv2'>
										<li>
											<p>내부망 시스템 프로그램 개발</p>
										</li>
										<li>
											<p>watchdog 개발 : java, python 등을 통한 로그파일 파싱</p>
										</li>
										<li>
											<p>Protocol 헤더 parsing, 정보추출 DB저장 프로그램 개발</p>
										</li>
										<li>
											<p>웹 크롤링, 주요 상태 알람</p>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<div>
									<h4>사용 기술</h4>
									<p>Java, python, oracle, MySQL, VScode</p>
								</div>
							</li>
						</ul>
					</div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

export default Projects;
