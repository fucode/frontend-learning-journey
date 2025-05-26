import React from 'react';


function JavascriptPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Understanding JavaScript</h1>
      <p style={styles.subtitle}>
        JavaScript brings interactivity to web pages, making them dynamic and engaging.
      </p>

      <section style={styles.section}>
        <h2>What is JavaScript?</h2>
        <p>
          JavaScript is a programming language that adds interactivity and dynamic behavior to web pages. It runs in the browser, allowing developers to manipulate HTML elements, handle user events (e.g., clicks), and update content without reloading the page. Used alongside HTML (structure) and CSS (style), JavaScript makes websites responsive and user-friendly.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Why Was JavaScript Created?</h2>
        <p>
          JavaScript was created in 1995 by Brendan Eich at Netscape to make web pages interactive. Early websites were static, with HTML and CSS only providing structure and style. JavaScript enabled dynamic features like form validation, animations, and real-time updates, transforming the web from static documents to interactive applications.
        </p>
      </section>

      <section style={styles.section}>
        <h2>How JavaScript Helped Build the Internet</h2>
        <p>
          JavaScript revolutionized the internet by enabling:
        </p>
        <ul style={styles.list}>
          <li><strong>Interactivity</strong>: JavaScript allowed users to interact with pages through clicks, forms, and hover effects, making the web more engaging.</li>
          <li><strong>Dynamic Content</strong>: It enabled content updates without page reloads, paving the way for modern web applications like email clients and social media.</li>
          <li><strong>Browser Compatibility</strong>: Standardized as ECMAScript, JavaScript ensured consistent behavior across browsers like Netscape and Internet Explorer.</li>
          <li><strong>Web App Growth</strong>: JavaScript’s flexibility fueled the rise of dynamic sites and applications, making the web a platform for complex services.</li>
        </ul>
        <p>
          By adding interactivity, JavaScript made the web a dynamic and user-centric platform, driving its widespread adoption and growth.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Core JavaScript Concepts</h2>
        <p>
          To add basic interactivity to static web pages, focus on these essential JavaScript concepts:
        </p>
        <ul style={styles.list}>
          <li>
            <strong>Variables</strong>: Store data like numbers, strings, or objects using <code>let</code>, <code>const</code>, or <code>var</code>.
            <br />
            <code>{`let name = "Faraz"; const year = 2023;`}</code>
          </li>
          <li>
            <strong>Functions</strong>: Define reusable blocks of code to perform tasks.
            <br />
            <code>{`function greet() { return "Hello!"; }`}</code>
          </li>
          <li>
            <strong>Arrays</strong>: Store lists of data for iteration or manipulation.
            <br />
            <code>{`let colors = ["red", "blue", "green"];`}</code>
          </li>
          <li>
            <strong>Objects</strong>: Store related data as key-value pairs.
            <br />
            <code>{`let user = { name: "Faraz", age: 25 };`}</code>
          </li>
          <li>
            <strong>DOM Manipulation</strong>: Interact with HTML elements to update content or styles.
            <br />
            <code>{`document.querySelector("h1").textContent = "New Title";`}</code>
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Commonly Used JavaScript Features</h2>
        <p>
          The following table lists frequently used JavaScript features for adding interactivity to static web pages, their purpose, and examples.
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
              <td style={styles.td}><code>{`let, const`}</code></td>
              <td style={styles.td}>Declares variables with block scope</td>
              <td style={styles.td}><code>{`let count = 0; const pi = 3.14;`}</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>{`function`}</code></td>
              <td style={styles.td}>Defines reusable code blocks</td>
              <td style={styles.td}><code>{`function add(a, b) { return a + b; }`}</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>{`array`}</code></td>
              <td style={styles.td}>Stores lists of data</td>
              <td style={styles.td}><code>{`let fruits = ["apple", "banana"];`}</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>{`object`}</code></td>
              <td style={styles.td}>Stores key-value data</td>
              <td style={styles.td}><code>{`let car = { brand: "Toyota", year: 2020 };`}</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>{`querySelector`}</code></td>
              <td style={styles.td}>Selects an HTML element</td>
              <td style={styles.td}><code>{`document.querySelector(".btn");`}</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>{`textContent`}</code></td>
              <td style={styles.td}>Updates an element’s text</td>
              <td style={styles.td}><code>{`element.textContent = "Updated";`}</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>{`forEach`}</code></td>
              <td style={styles.td}>Loops through array items</td>
              <td style={styles.td}><code>{`fruits.forEach(function(fruit) { console.log(fruit); });`}</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>{`onclick`}</code></td>
              <td style={styles.td}>Handles click events</td>
              <td style={styles.td}><code>{`button.onclick = function() { alert("Clicked!"); };`}</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>{`if`}</code></td>
              <td style={styles.td}>Controls conditional logic</td>
              <td style={styles.td}><code>{`if (count > 0) { console.log("Positive"); }`}</code></td>
            </tr>
            <tr>
              <td style={styles.td}><code>{`console.log`}</code></td>
              <td style={styles.td}>Logs data to the console for debugging</td>
              <td style={styles.td}><code>{`console.log("Hello");`}</code></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={styles.section}>
        <h2>Why Learn JavaScript?</h2>
        <p>
          Learning JavaScript enables you to:
        </p>
        <ul style={styles.list}>
          <li>Add interactivity to your website, like buttons or dynamic content.</li>
          <li>Manipulate HTML and CSS to create responsive user experiences.</li>
          <li>Understand how browsers handle dynamic behavior.</li>
          <li>Prepare for frameworks like React, which use JavaScript for components.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Resources for Learning JavaScript</h2>
        <p>
          Explore these resources to deepen your JavaScript knowledge:
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
              <td style={styles.td}>MDN Web Docs: JavaScript Basics</td>
              <td style={styles.td}><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics" target="_blank" rel="noopener noreferrer">Visit</a></td>
              <td style={styles.td}>A beginner-friendly guide to JavaScript fundamentals.</td>
            </tr>
            <tr>
              <td style={styles.td}>W3Schools JavaScript Tutorial</td>
              <td style={styles.td}><a href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer">Visit</a></td>
              <td style={styles.td}>Interactive tutorials with examples for JavaScript features.</td>
            </tr>
            <tr>
              <td style={styles.td}>freeCodeCamp JavaScript Course</td>
              <td style={styles.td}><a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" target="_blank" rel="noopener noreferrer">Visit</a></td>
              <td style={styles.td}>Free course covering JavaScript and data structures.</td>
            </tr>
            <tr>
              <td style={styles.td}>JavaScript.info</td>
              <td style={styles.td}><a href="https://javascript.info/" target="_blank" rel="noopener noreferrer">Visit</a></td>
              <td style={styles.td}>In-depth tutorials on JavaScript concepts and techniques.</td>
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

export default JavascriptPage;