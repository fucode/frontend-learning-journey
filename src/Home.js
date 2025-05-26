import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Welcome to My Front-End Learning Journey</h1>
      <p style={styles.subtitle}>
        Explore the topics below to see my progress learning HTML, CSS, JavaScript, React, and Material UI.
      </p>

      <div style={styles.cardContainer}>
        <Link to="/html" style={styles.card}>
          <h2>HTML</h2>
          <p>Learn the building blocks of the web with HTML.</p>
        </Link>

        <Link to="/css" style={styles.card}>
          <h2>CSS</h2>
          <p>Style your web pages with CSS.</p>
        </Link>

        <Link to="/javascript" style={styles.card}>
          <h2>JavaScript</h2>
          <p>Add interactivity using JavaScript.</p>
        </Link>

        <Link to="/react" style={styles.card}>
          <h2>React</h2>
          <p>Build powerful UIs with React.</p>
        </Link>

        <Link to="/material" style={styles.card}>
          <h2>Material UI</h2>
          <p>Explore Material UI components and theming.</p>
        </Link>
      </div>
    </main>
  );
}

const styles = {
  main: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '3rem auto',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#555',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    display: 'block',
    padding: '1.5rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    color: '#333',
    textDecoration: 'none',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
};

export default Home;
