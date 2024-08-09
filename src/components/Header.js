import React from 'react';

const Header = () => (
  <header>
	<div className="top-bar">
	  <div className="top-bar-left">
		<ul className="menu">
		  <li className="menu-text">Shashwat Singh</li>
		</ul>
	  </div>
	  <div className="top-bar-right">
		<ul className="dropdown menu" data-dropdown-menu>
		  <li><a href="#summary">Summary</a></li>
		  <li><a href="#education">Education</a></li>
		  <li><a href="#experience">Experience</a></li>
		  <li><a href="#skills">Skills</a></li>
		  <li><a href="#honors-awards">Honors & Awards</a></li>
		  <li><a href="#career-goal">Career Goal</a></li>
		</ul>
	  </div>
	  </div>
	  <ContactInfo />
	  </header>
	);
	
	export default Header;