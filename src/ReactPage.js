import React from 'react';

function ReactPage() {
  const sectionStyle = {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    backgroundColor: '#f9f9f9',
  };

  const headingStyle = {
    fontSize: '32px',
    marginBottom: '20px',
  };

  const subheadingStyle = {
    fontSize: '24px',
    marginTop: '30px',
    marginBottom: '10px',
  };

  const footerStyle = {
    marginTop: '40px',
    paddingTop: '20px',
    borderTop: '1px solid #ccc',
    fontStyle: 'italic',
    fontSize: '14px',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>React</h2>
      <p>
        React is a JavaScript library for building interactive user interfaces. Created by Facebook,
        it enables developers to build reusable UI components that efficiently update and render
        based on changing data.
      </p>

      <h3 style={subheadingStyle}>Core Concepts</h3>
      <ul>
        <li><strong>Components</strong>: Reusable building blocks of the UI.</li>
        <li><strong>Props</strong>: Read-only inputs passed to components.</li>
        <li><strong>State</strong>: Data managed within a component that can change over time.</li>
        <li><strong>Hooks</strong>: Functions like <code>useState</code> and <code>useEffect</code> that add state and side effects to functional components.</li>
        <li><strong>JSX</strong>: A syntax extension that lets you write HTML-like code in JavaScript.</li>
        <li><strong>React Router</strong>: A library to handle client-side routing in single-page apps.</li>
      </ul>

      <h3 style={subheadingStyle}>Why Use React?</h3>
      <ul>
        <li>Declarative and efficient updates to the UI.</li>
        <li>Component-based structure encourages modular design.</li>
        <li>Large ecosystem and community support.</li>
        <li>Used in production by major companies like Facebook, Instagram, and Airbnb.</li>
      </ul>

      <h3 style={subheadingStyle}>Learning Resources</h3>
      <ul>
        <li><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Official React Documentation</a></li>
        <li><a href="https://beta.reactjs.org" target="_blank" rel="noopener noreferrer">React Beta Docs (New)</a></li>
        <li><a href="https://www.freecodecamp.org/learn/front-end-development-libraries/react/" target="_blank" rel="noopener noreferrer">freeCodeCamp React Course</a></li>
        <li><a href="https://scrimba.com/learn/learnreact" target="_blank" rel="noopener noreferrer">Scrimba React Course</a></li>
      </ul>

      <footer style={footerStyle}>React Learning Section</footer>
    </section>
  );
}

export default ReactPage;
