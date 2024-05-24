import './app.scss';
import Career from './components/career/Career';
import Contact from './components/contact/Contact';
import Landing from './components/landing/Landing';
import Middle from './components/middle/Middle';
import Navbar from './components/Navbar';
import Projects from './components/projects/Projects';
const App = () => {
	return (
		<div>
			<section id='Home'>
				<Navbar />
				<Landing />
			</section>
			<section id='aboutMe'>
				<Middle type='aboutMe'/>
			</section>
			<section><Projects/></section>
			<section id='Projects'>
				<Middle type='projects'/>
			</section>
			<Career/>
			<section id='Contact'><Contact/></section>
		</div>
	);
};

export default App;
