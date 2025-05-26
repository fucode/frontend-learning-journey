import React from 'react';

function ReactPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Understanding React</h1>
      <p style={styles.subtitle}>
        React is a JavaScript library for building dynamic and interactive user interfaces.
      </p>

      <section style={styles.section}>
        <h2>What is React?</h2>
        <p>
          React is a JavaScript library for building interactive user interfaces. Created by Facebook,
          it enables developers to build reusable UI components that efficiently update and render
          based on changing data. Used alongside HTML and CSS, React makes web applications modular
          and responsive.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Why Was React Created?</h2>
        <p>
          React was developed in 2011 by Jordan Walke at Facebook to address the need for a fast,
          scalable way to build dynamic user interfaces. Traditional JavaScript approaches struggled
          with complex UI updates, so React introduced a component-based architecture and a virtual
          DOM to optimize rendering, making web applications more efficient and maintainable.
        </p>
      </section>

      <section style={styles.section}>
        <h2>How React Helped Build the Internet</h2>
        <p>
          React revolutionized web development by enabling:
        </p>
        <ul style={styles.list}>
          <li><strong>Component-Based Design</strong>: Reusable components simplify development and maintenance.</li>
          <li><strong>Efficient Updates</strong>: The virtual DOM minimizes costly browser re-renders.</li>
          <li><strong>Scalability</strong>: React’s modular structure supports large-scale applications.</li>
          <li><strong>Ecosystem Growth</strong>: React’s popularity spurred frameworks like Next.js and libraries like Redux.</li>
        </ul>
        <p>
          By streamlining UI development, React powers dynamic, high-performance applications used by
          companies like Facebook, Instagram, and Airbnb.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Core React Concepts</h2>
        <p>
          To build interactive web applications with React, focus on these essential concepts:
        </p>
        <ul style={styles.list}>
          <li>
            <strong>Components</strong>: Reusable building blocks for the UI.
            <br />
            <code>{`function Button() { return <button>Click me</button>; }`}</code>
          </li>
          <li>
            <strong>Props</strong>: Read-only inputs passed to components.
            <br />
            <code>{`function Welcome(props) { return <h1>Hello, {props.name}</h1>; }`}</code>
          </li>
          <li>
            <strong>State</strong>: Data managed within a component that can change over time.
            <br />
            <code>{`const [count, setCount] = useState(0);`}</code>
          </li>
          <li>
            <strong>Hooks</strong>: Functions like <code>useState</code> and <code>useEffect</code> for state and side effects.
            <br />
            <code>{`useEffect(() => { document.title = "My App"; }, []);`}</code>
          </li>
          <li>
            <strong>JSX</strong>: HTML-like syntax in JavaScript.
            <br />
            <code>{`const element = <div>Hello, world!</div>;`}</code>
          </li>
          <li>
            <strong>React Router</strong>: Handles client-side routing.
            <br />
            <code>{`<Route path="/home" component={Home} />`}</code>
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Commonly Used React Features</h2>
        <p>
          The following table lists frequently used React features for building interactive UIs, their purpose, and examples.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Feature</th>
              <th style={styles.th}>Purpose</th>
              <th style={styles.th}>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}><code>useState</code></td>
              <td style={styles.td}>Manages component state</td>
              <td style={styles.td}><code>{`const [count, setCount] = useState(0);`}</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>useEffect</code></td>
              <td style={styles.td}>Handles side effects</td>
              <td style={styles.td}><code>{`useEffect(() => { fetchData(); }, []);`}</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>props</code></td>
              <td style={styles.td}>Passes data to components</td>
              <td style={styles.td}><code>{`<Button label="Click" />`}</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>JSX</code></td>
              <td style={styles.td}>Embeds HTML-like syntax</td>
              <td style={styles.td}><code>{`<div>Hello</div>`}</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>React.Component</code></td>
              <td style={styles.td}>Defines class components</td>
              <td style={styles.td}><code>{`class App extends React.Component { render() { return <div />; } }`}</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>useRef</code></td>
              <td style={styles.td}>Persists values or references DOM</td>
              <td style={styles.td}><code>{`const inputRef = useRef(null);`}</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>React Router</code></td>
              <td style={styles.td}>Manages navigation</td>
              <td style={styles.td}><code>{`<Link to="/home">Home</Link>`}</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>useContext</code></td>
              <td style={styles.td}>Accesses context data</td>
              <td style={styles.td}><code>{`const theme = useContext(ThemeContext);`}</code></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={styles.section}>
        <h2>Why Learn React?</h2>
        <p>
          Learning React enables you to:
        </p>
        <ul style={styles.list}>
          <li>Build modular, reusable UI components for web applications.</li>
          <li>Create fast, dynamic interfaces with efficient updates.</li>
          <li>Leverage a large ecosystem and community support.</li>
          <li>Prepare for advanced frameworks like Next.js and careers in modern web development.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Resources for Learning React</h2>
        <p>
          Explore these resources to deepen your React knowledge:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Resource</th>
              <th style={styles.th}>Link</th>
              <th style={styles.th}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Official React Documentation</td>
              <td style={styles.td}>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">Visit</a>
              </td>
              <td style={styles.td}>Comprehensive guide to React fundamentals and APIs.</td>
            </tr>
            <tr>
              <td style={styles.td}>React Learn</td>
              <td style={styles.td}>
                <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">Visit</a>
              </td>
              <td style={styles.td}>Interactive tutorials for building with React.</td>
            </tr>
            <tr>
              <td style={styles.td}>freeCodeCamp React Course</td>
              <td style={styles.td}>
                <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/react/" target="_blank" rel="noopener noreferrer">Visit</a>
              </td>
              <td style={styles.td}>Free course covering React basics and projects.</td>
            </tr>
            <tr>
              <td style={styles.td}>Scrimba React Course</td>
              <td style={styles.td}>
                <a href="https://scrimba.com/learn/learnreact" target="_blank" rel="noopener noreferrer">Visit</a>
              </td>
              <td style={styles.td}>Interactive video-based React tutorials.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

const styles = {
  main: {
    maxWidth: '900px',
    margin: '3rem auto',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    color: '#333',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#555',
  },
  section: {
    marginBottom: '2.5rem',
    backgroundColor: '#f9f9f9',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '1.5rem',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem',
  },
  th: {
    border: '1px solid #ddd',
    padding: '0.75rem',
    backgroundColor: '#f1f5f9',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  td: {
    border: '1px solid #ddd',
    padding: '0.75rem',
  },
};

export default ReactPage;