import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import ProjectsAndSkills from './components/ProjectsAndSkills';
import './styles.css';

const App = () => (
  <Router>
	<div>
	  <Header />
	  <ContactInfo />
	  <nav>
		<ul>
		  <li><Link to="/">Home</Link></li>
		  <li><Link to="/about-me">About Me</Link></li>
		  <li><Link to="/education">Education</Link></li>
		  <li><Link to="/experience">Experience</Link></li>
		  <li><Link to="/projects-and-skills">Projects and Skills</Link></li>
		</ul>
	  </nav>
	  <main className="grid-container">
		<Switch>
		  <Route path="/" exact component={Home} />
		  <Route path="/about-me" component={AboutMe} />
		  <Route path="/education" component={Education} />
		  <Route path="/experience" component={Experience} />
		  <Route path="/projects-and-skills" component={ProjectsAndSkills} />
		</Switch>
	  </main>
	  <Footer />
	</div>
  </Router>
);

export default App;