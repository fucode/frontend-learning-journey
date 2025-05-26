import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Welcome to My Front-End Learning Journey</h1>
      <p style={styles.subtitle}>
        Explore the topics below to see my progress learning HTML, CSS, JavaScript, and React.
      </p>

      <nav className="nav">
        <Link to="/html">HTML</Link>
        <Link to="/css">CSS</Link>
        <Link to="/javascript">JavaScript</Link>
        <Link to="/react">React</Link>
      </nav>
    </main>
  );
}

const styles = {
  main: {
    textAlign: 'center',
    maxWidth: '600px',
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
};

export default Home;
