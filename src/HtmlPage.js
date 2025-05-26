import React from 'react';

function HtmlPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Top HTML Concepts to Understand</h1>

      <section style={styles.section}>
        <h2>1. HTML Structure</h2>
        <p>
          HTML documents have a nested structure with elements such as <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code>. Understanding this structure is fundamental.
        </p>
      </section>

      <section style={styles.section}>
        <h2>2. Elements and Tags</h2>
        <p>
          Elements are the building blocks of HTML and are represented by tags like <code>&lt;p&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;div&gt;</code>. Tags usually come in pairs (opening and closing).
        </p>
      </section>

      <section style={styles.section}>
        <h2>3. Attributes</h2>
        <p>
          Attributes provide additional information about elements, such as <code>href</code> in links or <code>src</code> in images.
        </p>
      </section>

      <section style={styles.section}>
        <h2>4. Semantic HTML</h2>
        <p>
          Using semantic tags like <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;section&gt;</code> improves accessibility and SEO.
        </p>
      </section>

      <section style={styles.section}>
        <h2>5. Forms and Inputs</h2>
        <p>
          Forms allow user input with elements like <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, and <code>&lt;button&gt;</code>. Understanding form controls and validation is key.
        </p>
      </section>

      <section style={styles.section}>
        <h2>6. Lists and Tables</h2>
        <p>
          HTML provides ways to organize content with ordered/unordered lists (<code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>) and tabular data with <code>&lt;table&gt;</code>.
        </p>
      </section>
    </main>
  );
}

const styles = {
  main: {
    maxWidth: '700px',
    margin: '2rem auto',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    padding: '0 1rem',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#2c3e50',
  },
  section: {
    marginBottom: '1.5rem',
    lineHeight: '1.6',
    color: '#34495e',
  },
};

export default HtmlPage;
