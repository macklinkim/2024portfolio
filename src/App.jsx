import { useRef } from 'react';
import './app.scss';
import Career from './components/career/Career';
import Contact from './components/contact/Contact';
import Landing from './components/landing/Landing';
import Middle from './components/middle/Middle';
import NavBar from './components/NavBar';
import Projects from './components/projects/Projects';
const App = () => {
  const landingLink1 = useRef([]);
  const landingLink2 = useRef([]);
	return (
		<div>
			<section id='Home'>
				<Navbar />
				<Landing link1={landingLink1} link2 = {landingLink2}/>
			</section>
			<section ref={landingLink1} id='CAREER'>
				<Middle type='CAREER'/>
			</section>
			<section><Projects/></section>
			<section  id='Project'>
				<Middle  type='Project'/>
			</section>
			<Career/>
			<section ref={landingLink2} id='Contact'><Contact/></section>
		</div>
	);
};

export default App;
