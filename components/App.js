import React from 'react';
import Header from './Header';
import ContactInfo from './ContactInfo';
import Section from './Section';
import Footer from './Footer';
import './styles.css';

const App = () => (
  <div>
	<Header />
	<ContactInfo />
	<main className="grid-container">
	  <Section id="summary" title="Summary">
		<p>With a Master’s degree in Data Science from NJIT and a solid Computer Science foundation from Rutgers University, I leverage extensive experience in Java, SQL, and full-stack development. Currently, at HTD Talent, I enhance client projects by delivering tailored software solutions, including a versatile reservation system. I am adept at translating complex technology into practical applications for diverse clients.</p>
	  </Section>
	  <Section id="education" title="Education">
		<div className="experience">
		  <h5>Master of Science in Data Science</h5>
		  <h6>New Jersey Institute of Technology (NJIT)</h6>
		  <p>Graduated: May 2023</p>
		</div>
		<div className="experience">
		  <h5>Bachelor of Science in Computer Science</h5>
		  <h6>Rutgers University</h6>
		  <p>Graduated: May 2021</p>
		</div>
	  </Section>
	  <Section id="experience" title="Experience">
		<div className="experience">
		  <h5>Software Engineer (SWE)</h5>
		  <h6>HTD Talent (Jul 2024 - Present)</h6>
		  <ul>
			<li><strong>Training:</strong> Delivered two intensive 5-week programs on Java, OOP, SQL, Docker, and MVC.</li>
			<li><strong>Projects:</strong> Developed a versatile reservation system and a comprehensive full-stack website.</li>
			<li><strong>Deployment:</strong> Successfully deployed tailored software solutions to client sites.</li>
			<li><strong>Impact:</strong> Leveraged advanced skills to drive significant improvements in client projects.</li>
		  </ul>
		</div>
		<div className="experience">
		  <h5>Software Development Engineer</h5>
		  <h6>Amazon (Aug 2021 - Jul 2022)</h6>
		  <ul>
			<li><strong>Development:</strong> Enhanced Collections Workbench using Java, Python, and Bash scripts.</li>
			<li><strong>Integration:</strong> Connected AWS services with billing and finance teams for seamless data access.</li>
			<li><strong>Maintenance:</strong> Continuously deployed and maintained critical finance automation tools.</li>
			<li><strong>Impact:</strong> Improved efficiency in finance operations and customer data accessibility.</li>
		  </ul>
		</div>
	  </Section>
	  <Section id="skills" title="Skills">
		<ul>
		  <li>Java, Python, SQL</li>
		  <li>Full-stack development</li>
		  <li>Data analysis and visualization</li>
		  <li>Cloud computing (AWS)</li>
		  <li>Docker, Kubernetes</li>
		  <li>Agile methodologies</li>
		</ul>
	  </Section>
	  <Section id="honors-awards" title="Honors & Awards">
		<ul>
		  <li>Dean's List, NJIT (2022-2023)</li>
		  <li>Best Student Project Award, Rutgers University (2021)</li>
		  <li>Amazon Innovation Award (2022)</li>
		</ul>
	  </Section>
	  <Section id="career-goal" title="Career Goal">
		<p>My career goal is to leverage my skills in software engineering and data science to develop innovative solutions that drive business success. I am particularly interested in opportunities within the NJ/NY/PA area, focusing on industries such as technology, finance, and healthcare.</p>
	  </Section>
	</main>
	<Footer />
  </div>
);

export default App;