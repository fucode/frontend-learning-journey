import React from 'react';
import './CSSPage.css';

function CSSPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>CSS in the Enterprise & Modern Frameworks</h1>
      <p style={styles.subtitle}>
        Mastering CSS is essential for building scalable, maintainable, and AI-assisted front-end systems.
      </p>

      <section style={styles.section}>
        <h2>1. Core CSS Concepts in the Enterprise</h2>
        <ul>
          <li><strong>Scalability:</strong> Use systems like BEM, CSS Modules, or Tailwind to enforce structure and reduce conflict.</li>
          <li><strong>Maintainability:</strong> Break styles into component-based or utility-first patterns. Reuse variables and mixins consistently.</li>
          <li><strong>Responsiveness:</strong> Use flexible layouts (Flexbox, Grid), breakpoints, and relative units (<code>em</code>, <code>rem</code>, <code>%</code>).</li>
          <li><strong>Theming:</strong> Use CSS variables or preprocessors (Sass) to support dynamic themes like light/dark modes or client branding.</li>
          <li><strong>Performance:</strong> Use critical CSS, avoid unused classes, and limit use of large or complex selectors.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>2. CSS in Modern Frameworks</h2>
        <ul>
          <li><strong>React:</strong> Use inline styles, CSS Modules, styled-components, or Tailwind. Components encapsulate logic and style.</li>
          <li><strong>Angular:</strong> Supports scoped styles with native Shadow DOM emulation. Sass and global theming are common.</li>
          <li><strong>Vue:</strong> Uses <code>&lt;style scoped&gt;</code> for component-specific styling. Works well with Tailwind and preprocessors.</li>
          <li><strong>Svelte:</strong> Styles are scoped by default. Supports nesting and reactivity-friendly style updates.</li>
          <li><strong>Tailwind CSS:</strong> A utility-first approach compatible with all frameworks. Excellent for AI-paired design workflows.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>3. Working with CSS in AI-Enhanced Environments</h2>
        <ul>
          <li><strong>Prompt Engineering for Style:</strong> When using AI tools (e.g., ChatGPT, GitHub Copilot, Figma AI), know how to describe layout, spacing, and theme goals clearly.</li>
          <li><strong>Design-to-Code Translation:</strong> Tools like Figma AI and Locofy.ai can auto-generate CSS or Tailwind classes. Understanding utility classes helps guide better results.</li>
          <li><strong>AI-Readable Code:</strong> Clean, consistent class names (BEM, Atomic CSS) improve results from AI refactoring or conversion tools.</li>
          <li><strong>AI-Powered Testing:</strong> Visual regression tools (like Percy or Chromatic) can use AI to detect UI changes and flag CSS bugs.</li>
          <li><strong>AI Style Tokens:</strong> Use tokenized design systems (color, spacing, typography) so that AI agents can make consistent styling decisions across multiple UIs.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>4. Tips for Scaling CSS in Large Apps</h2>
        <ul>
          <li>Use component libraries like Material UI or Chakra UI that already include themeable, accessible styles.</li>
          <li>Define design tokens in JSON or CSS variables and share them across teams (design, dev, AI agents).</li>
          <li>Use linters, PostCSS, and build tools to auto-prefix, minify, and optimize styles at scale.</li>
          <li>Use code comments to explain design intent when collaborating with AI pair programmers.</li>
        </ul>
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
};

export default CSSPage;
