import React from 'react';

const Section = ({ id, title, children }) => (
  <section id={id} className="grid-x grid-margin-x">
	<div className="cell">
	  <h2 className="section-title">{title}</h2>
	  {children}
	</div>
  </section>
);

export default Section;