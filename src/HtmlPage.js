import React from 'react';

function HtmlPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Understanding HTML</h1>

      <section style={styles.section}>
        <h2>What is HTML?</h2>
        <p>
          HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It defines the building blocks of a web page, such as headings, paragraphs, links, images, and lists, using tags like <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, and <code>&lt;a&gt;</code>. HTML provides the skeleton of a website, which CSS styles and JavaScript enhances with interactivity.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Why Was HTML Created?</h2>
        <p>
          HTML was created in 1990 by Tim Berners-Lee to enable scientists to share research documents over the internet. At the time, there was no standard way to format and link documents across different computers. HTML solved this by providing a simple, platform-independent language that browsers could interpret, allowing documents to be structured, linked, and displayed consistently.
        </p>
      </section>

      <section style={styles.section}>
        <h2>How HTML Helped Build the Internet</h2>
        <p>
          HTML laid the foundation for the World Wide Web by enabling:
        </p>
        <ul style={styles.list}>
          <li><strong>Universal Structure</strong>: HTML’s tags provided a consistent way to organize content, making it accessible across different browsers and devices.</li>
          <li><strong>Hyperlinks</strong>: The <code>&lt;a&gt;</code> tag allowed pages to link to each other, creating a network of interconnected documents—the core of the web.</li>
          <li><strong>Browser Compatibility</strong>: HTML’s standardization let browsers like Netscape and Internet Explorer render pages reliably, fueling the web’s growth.</li>
          <li><strong>Scalability</strong>: HTML’s simplicity allowed developers to create millions of pages, from personal sites to commercial platforms, driving the internet’s expansion.</li>
        </ul>
        <p>
          By providing a common language, HTML made the internet accessible to creators and users, enabling the web to evolve into the vast ecosystem we know today.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Core HTML Concepts</h2>
        <p>
          To build static web pages, focus on these essential HTML elements and concepts:
        </p>
        <ul style={styles.list}>
          <li>
            <strong>Basic Structure</strong>: Every HTML document starts with <code>&lt;!DOCTYPE html&gt;</code>, followed by <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code> (for metadata), and <code>&lt;body&gt;</code> (for content).
            <br />
            <code>{`<!DOCTYPE html><html><head><title>My Page</title></head><body><h1>Hello</h1></body></html>`}</code>
          </li>
          <li>
            <strong>Headings and Paragraphs</strong>: Use <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> for titles and <code>&lt;p&gt;</code> for text content.
            <br />
            <code>{`<h1>Main Title</h1><p>This is a paragraph.</p>`}</code>
          </li>
          <li>
            <strong>Links</strong>: The <code>&lt;a&gt;</code> tag creates hyperlinks to other pages or resources.
            <br />
            <code>{`<a href="/about">About Me</a>`}</code>
          </li>
          <li>
            <strong>Images</strong>: The <code>&lt;img&gt;</code> tag embeds images, with <code>alt</code> for accessibility.
            <br />
            <code>{`<img src="image.jpg" alt="Description">`}</code>
          </li>
          <li>
            <strong>Lists</strong>: Use <code>&lt;ul&gt;</code> (unordered) or <code>&lt;ol&gt;</code> (ordered) with <code>&lt;li&gt;</code> for lists.
            <br />
            <code>{`<ul><li>Item 1</li><li>Item 2</li></ul>`}</code>
          </li>
          <li>
            <strong>Semantic Elements</strong>: Tags like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code> add meaning and improve accessibility.
            <br />
            <code>{`<header><h1>My Site</h1></header>`}</code>
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Commonly Used HTML Tags</h2>
        <p>
          The following table lists the most commonly used HTML tags for building static web pages, their purpose, and examples.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Tag</th>
              <th style={styles.th}>Purpose</th>
              <th style={styles.th}>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}><code>&lt;html&gt;</code></td>
              <td style={styles.td}>Root element of an HTML document</td>
              <td style={styles.td}><code>&lt;html lang="en"&gt;...&lt;/html&gt;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>&lt;head&gt;</code></td>
              <td style={styles.td}>Contains metadata (e.g., title, CSS links)</td>
              <td style={styles.td}><code>&lt;head&gt;&lt;title&gt;My Page&lt;/title&gt;&lt;/head&gt;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>&lt;body&gt;</code></td>
              <td style={styles.td}>Holds the visible content of the page</td>
              <td style={styles.td}><code>&lt;body&gt;&lt;h1&gt;Hello&lt;/h1&gt;&lt;/body&gt;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code></td>
              <td style={styles.td}>Defines headings (h1 is largest)</td>
              <td style={styles.td}><code>&lt;h1&gt;Main Title&lt;/h1&gt;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>&lt;p&gt;</code></td>
              <td style={styles.td}>Represents a paragraph of text</td>
              <td style={styles.td}><code>&lt;p&gt;This is text.&lt;/p&gt;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>&lt;a&gt;</code></td>
              <td style={styles.td}>Creates a hyperlink to another page or resource</td>
              <td style={styles.td}><code>&lt;a href="/about"&gt;About&lt;/a&gt;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>&lt;img&gt;</code></td>
              <td style={styles.td}>Embeds an image</td>
              <td style={styles.td}><code>&lt;img src="image.jpg" alt="Description"&gt;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>&lt;ul&gt;</code>, <code>&lt;li&gt;</code></td>
              <td style={styles.td}>Creates an unordered (bulleted) list</td>
              <td style={styles.td}><code>&lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code></td>
              <td style={styles.td}>Creates an ordered (numbered) list</td>
              <td style={styles.td}><code>&lt;ol&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ol&gt;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>&lt;div&gt;</code></td>
              <td style={styles.td}>Groups content for styling or layout</td>
              <td style={styles.td}><code>&lt;div&gt;Content&lt;/div&gt;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>&lt;header&gt;</code></td>
              <td style={styles.td}>Defines introductory content or navigation</td>
              <td style={styles.td}><code>&lt;header&gt;&lt;h1&gt;Site Title&lt;/h1&gt;&lt;/header&gt;</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>&lt;footer&gt;</code></td>
              <td style={styles.td}>Contains footer content (e.g., copyright)</td>
              <td style={styles.td}><code>&lt;footer&gt;&lt;p&gt;© 2023&lt;/p&gt;&lt;/footer&gt;</code></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={styles.section}>
        <h2>Why Learn HTML?</h2>
        <p>
          Learning HTML gives you the foundation to:
        </p>
        <ul style={styles.list}>
          <li>Structure content for your website, like blog posts or learning notes.</li>
          <li>Understand how browsers interpret and display web pages.</li>
          <li>Work effectively with CSS for styling and JavaScript for interactivity.</li>
          <li>Prepare for frameworks like React, which use HTML-like JSX for components.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Resources for Learning HTML</h2>
        <p>
          Explore these resources to deepen your HTML knowledge:
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
              <td style={styles.td}>MDN Web Docs: HTML Basics</td>
              <td style={styles.td}><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" target="_blank" rel="noopener noreferrer">Visit</a></td>
              <td style={styles.td}>A beginner-friendly guide to HTML structure and tags.</td>
            </tr>
            <tr>
              <td style={styles.td}>W3Schools HTML Tutorial</td>
              <td style={styles.td}><a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">Visit</a></td>
              <td style={styles.td}>Interactive tutorials with examples for HTML elements.</td>
            </tr>
            <tr>
              <td style={styles.td}>freeCodeCamp HTML Course</td>
              <td style={styles.td}><a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/" target="_blank" rel="noopener noreferrer">Visit</a></td>
              <td style={styles.td}>Free course covering HTML and basic web design.</td>
            </tr>
            <tr>
              <td style={styles.td}>W3C HTML History</td>
              <td style={styles.td}><a href="https://www.w3.org/standards/history/html" target="_blank" rel="noopener noreferrer">Visit</a></td>
              <td style={styles.td}>Details HTML’s evolution and standards.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

const styles = {
  main: {
    maxWidth: '800px',
    margin: '2rem auto',
    fontFamily: "'Inter', system-ui, sans-serif",
    padding: '0 1.5rem',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '2.75rem',
    marginBottom: '2rem',
    textAlign: 'center',
    color: '#1a202c',
  },
  section: {
    marginBottom: '2rem',
    lineHeight: '1.7',
    color: '#2d3748',
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '6px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
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

export default HtmlPage;