import React from 'react';
import './CSSPage.css';

function CssPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Understanding CSS</h1>
      <p style={styles.subtitle}>
        CSS brings style and visual appeal to web pages, making them engaging and user-friendly.
      </p>

      <section style={styles.section}>
        <h2>What is CSS?</h2>
        <p>
          CSS (Cascading Style Sheets) is a styling language used to control the appearance of HTML elements on a web page. It defines properties like colors, fonts, layouts, and spacing, allowing developers to separate a page’s structure (HTML) from its presentation. For example, CSS can make a heading blue, center a paragraph, or create a responsive grid layout.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Why Was CSS Created?</h2>
        <p>
          CSS was created in 1996 by Håkon Wium Lie and Bert Bos to address the limitations of HTML for styling. Early HTML used tags like <code>&lt;font&gt;</code> and attributes like <code>bgcolor</code> for presentation, which made pages hard to maintain and inconsistent across browsers. CSS introduced a standardized way to apply styles, allowing developers to update a site’s look without changing its HTML structure.
        </p>
      </section>

      <section style={styles.section}>
        <h2>How CSS Helped Build the Internet</h2>
        <p>
          CSS transformed the internet by enabling:
        </p>
        <ul style={styles.list}>
          <li><strong>Visual Consistency</strong>: CSS ensured uniform styling across pages, making websites look professional and cohesive.</li>
          <li><strong>Separation of Concerns</strong>: By separating style (CSS) from structure (HTML), developers could maintain and update sites more easily.</li>
          <li><strong>Creative Freedom</strong>: CSS allowed for diverse designs, from simple text styling to complex layouts, fueling the growth of visually rich websites.</li>
          <li><strong>Browser Compatibility</strong>: Standardized CSS rules enabled browsers like Netscape and Internet Explorer to render styles consistently, encouraging widespread adoption.</li>
        </ul>
        <p>
          CSS made the web more attractive and accessible, contributing to its growth as a platform for information, commerce, and creativity.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Core CSS Concepts</h2>
        <p>
          To style static web pages, focus on these essential CSS concepts:
        </p>
        <ul style={styles.list}>
          <li>
            <strong>Selectors</strong>: Target HTML elements to apply styles, using tag names, classes, or IDs.
            <br />
            <code>
              {`h1 { color: blue; }
.class { font-size: 16px; }`}
            </code>
          </li>
          <li>
            <strong>Properties and Values</strong>: Define styles like color, size, or spacing.
            <br />
            <code>{`p { margin: 10px; background-color: #f0f0f0; }`}</code>
          </li>
          <li>
            <strong>Box Model</strong>: Every element is a box with content, padding, border, and margin.
            <br />
            <code>{`div { padding: 15px; border: 1px solid black; }`}</code>
          </li>
          <li>
            <strong>Layout</strong>: Use <code>display</code>, <code>float</code>, or <code>position</code> to arrange elements.
            <br />
            <code>{`.container { display: flex; justify-content: center; }`}</code>
          </li>
          <li>
            <strong>Cascading</strong>: Styles are applied based on specificity and order, with later or more specific rules taking precedence.
            <br />
            <code>
              {`p { color: red; }
p.special { color: blue; }`}
            </code>
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Commonly Used CSS Properties</h2>
        <p>
          The following table lists frequently used CSS properties for styling static web pages, their purpose, and examples.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Property</th>
              <th style={styles.th}>Purpose</th>
              <th style={styles.th}>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}><code>color</code></td>
              <td style={styles.td}>Sets the text color</td>
              <td style={styles.td}><code>color: #333;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>font-size</code></td>
              <td style={styles.td}>Sets the size of text</td>
              <td style={styles.td}><code>font-size: 16px;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>font-family</code></td>
              <td style={styles.td}>Specifies the font for text</td>
              <td style={styles.td}><code>font-family: Arial, sans-serif;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>margin</code></td>
              <td style={styles.td}>Sets the outer spacing around an element</td>
              <td style={styles.td}><code>margin: 10px;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>padding</code></td>
              <td style={styles.td}>Sets the inner spacing within an element</td>
              <td style={styles.td}><code>padding: 15px;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>border</code></td>
              <td style={styles.td}>Defines a border around an element</td>
              <td style={styles.td}><code>border: 1px solid black;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>background-color</code></td>
              <td style={styles.td}>Sets the background color</td>
              <td style={styles.td}><code>background-color: #f0f0f0;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>display</code></td>
              <td style={styles.td}>Controls the layout type (e.g., block, inline)</td>
              <td style={styles.td}><code>display: flex;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>width</code></td>
              <td style={styles.td}>Sets the width of an element</td>
              <td style={styles.td}><code>width: 100%;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>text-align</code></td>
              <td style={styles.td}>Aligns text horizontally</td>
              <td style={styles.td}><code>text-align: center;</code></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={styles.section}>
        <h2>Why Learn CSS?</h2>
        <p>
          Learning CSS enables you to:
        </p>
        <ul style={styles.list}>
          <li>Style your website to make it visually appealing and user-friendly.</li>
          <li>Control layout and presentation for better user experiences.</li>
          <li>Work with HTML to create well-designed static pages.</li>
          <li>Prepare for advanced tools like React’s inline styles or frameworks like Tailwind CSS.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Resources for Learning CSS</h2>
        <p>
          Explore these resources to deepen your CSS knowledge:
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
              <td style={styles.td}>MDN Web Docs: CSS Basics</td>
              <td style={styles.td}><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics" target="_blank" rel="noopener noreferrer">Visit</a></td>
              <td style={styles.td}>A beginner-friendly guide to CSS properties and selectors.</td>
            </tr>
            <tr>
              <td style={styles.td}>W3Schools CSS Tutorial</td>
              <td style={styles.td}><a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">Visit</a></td>
              <td style={styles.td}>Interactive tutorials with examples for CSS styling.</td>
            </tr>
            <tr>
              <td style={styles.td}>freeCodeCamp CSS Course</td>
              <td style={styles.td}><a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/" target="_blank" rel="noopener noreferrer">Visit</a></td>
              <td style={styles.td}>Free course covering CSS and responsive design.</td>
            </tr>
            <tr>
              <td style={styles.td}>CSS-Tricks</td>
              <td style={styles.td}><a href="https://css-tricks.com/" target="_blank" rel="noopener noreferrer">Visit</a></td>
              <td style={styles.td}>Articles and guides on CSS techniques and best practices.</td>
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

export default CssPage;
