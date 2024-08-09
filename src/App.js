import React from 'react';
import AboutMe from './components/AboutMe';
import ProjectsAndSkills from './components/ProjectsAndSkills';
import Section from './components/Section';
import './styles.css';

function App() {
	return (
		<div className="container-lg px-3 my-5 markdown-body">
			<h1 id="shashwat-singh">Shashwat Singh</h1>
			<p>
				<strong>Email:</strong> <a href="mailto:shashwat.singh98@gmail.com">shashwat.singh98@gmail.com</a><br />
				<strong>Phone:</strong> 732-210-7862<br />
				<strong>LinkedIn:</strong> <a href="https://linkedin.com/in/shashwhat">linkedin.com/in/shashwat</a>
			</p>
			<hr />
			<Section id="summary" title="Summary">
				<p>With a Master’s degree in Data Science from NJIT and a solid Computer Science foundation from Rutgers University, I leverage extensive experience in Java, SQL, and full-stack development. Currently, at HTD Talent, I enhance client projects by delivering tailored software solutions, including a versatile reservation system. I am adept at translating complex technology into practical applications for diverse clients.</p>
			</Section>
			<hr />
			<Section id="experience" title="Experience">
				<p><strong>Software Engineer (SWE)</strong><br />
				<em>HTD Talent</em><br />
				<em>Jul 2024 - Present</em></p>
				<ul>
					<li><strong>Training:</strong> Delivered two intensive 5-week programs on Java, OOP, SQL, Docker, and MVC.</li>
					<li><strong>Projects:</strong> Developed a versatile reservation system and a comprehensive full-stack website.</li>
					<li><strong>Deployment:</strong> Successfully deployed tailored software solutions to client sites.</li>
					<li><strong>Impact:</strong> Leveraged advanced skills to drive significant improvements in client projects.</li>
				</ul>
			</Section>
			<hr />
			<Section id="about-me" title="About Me">
				<AboutMe />
			</Section>
			<hr />
			<Section id="projects-and-skills" title="Projects and Skills">
				<ProjectsAndSkills />
			</Section>
		</div>
	);
}

export default App;