import React from 'react';

function HtmlPage() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Top HTML Concepts for 2025</h1>

      <section style={styles.section}>
        <h2>Introduction: HTML in the Age of AI</h2>
        <p>
          HTML remains a cornerstone of web development, even in 2025, as it provides the structural foundation for web pages and applications. However, AI-driven tools, frameworks, and automation are reshaping how developers interact with HTML. Learning HTML is still necessary, though the focus has shifted toward semantic HTML, accessibility, and integration with modern frameworks. AI tools like GitHub Copilot or no-code platforms like Webflow can generate HTML, but human oversight is crucial to ensure accessibility, performance, and compatibility. HTML will remain relevant as long as the web exists, with key concepts evolving to meet modern demands.
        </p>
      </section>

      <section style={styles.section}>
  <h2>1. Semantic HTML and Accessibility</h2>
  <p>
    Semantic HTML provides meaning to web content, making it easier for search engines and assistive technologies to understand the structure of your page. Use semantic tags to enhance both SEO and accessibility.
  </p>
  <p><strong>Common semantic HTML tags include:</strong></p>
  <ul>
    <li><code>&lt;header&gt;</code> – Defines introductory content or navigational links.</li>
    <li><code>&lt;nav&gt;</code> – Contains the main navigation links for the site.</li>
    <li><code>&lt;main&gt;</code> – Represents the dominant content of the document.</li>
    <li><code>&lt;section&gt;</code> – Groups related content with a thematic purpose.</li>
    <li><code>&lt;article&gt;</code> – Encloses self-contained content like blog posts or news stories.</li>
    <li><code>&lt;aside&gt;</code> – Holds tangential content such as sidebars or callouts.</li>
    <li><code>&lt;footer&gt;</code> – Contains footer information like copyright or contact.</li>
    <li><code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> – Use for images and their captions.</li>
    <li><code>&lt;time&gt;</code> – Represents dates and times in a machine-readable way.</li>
    <li><code>&lt;mark&gt;</code> – Highlights relevant or search-matched text.</li>
  </ul>
  <p>
    Supplement with ARIA attributes such as <code>role</code> and <code>aria-label</code> for enhanced compatibility with screen readers and AI-driven crawlers.
  </p>
</section>

<section style={styles.section}>
  <h2>2. HTML in Component-Based Frameworks</h2>
  <p>
    In modern front-end development, HTML is used within component-based frameworks to define the structure and presentation of UI elements. These frameworks wrap HTML in reusable components, often paired with logic and styling, to create dynamic and interactive web apps.
  </p>
  <ul>
    <li>
      <strong>React:</strong> Uses <code>JSX</code> (JavaScript XML), a syntax extension that allows you to write HTML-like code directly in JavaScript. Semantic HTML tags are embedded within components, and dynamic behavior is handled via props, state, and hooks.
      <br />
      <code>{`function Header() { return <header><h1>Welcome</h1></header>; }`}</code>
    </li>
    <li>
      <strong>Angular:</strong> Uses HTML templates enriched with Angular directives like <code>*ngIf</code>, <code>*ngFor</code>, and <code>[(ngModel)]</code>. Components are defined with metadata and logic in TypeScript, and HTML templates bind data and events declaratively.
      <br />
      <code>{`<header *ngIf="showTitle"><h1>{{ title }}</h1></header>`}</code>
    </li>
    <li>
      <strong>Vue.js:</strong> Uses declarative HTML templates similar to Angular. Components include a <code>&lt;template&gt;</code> block for HTML, <code>&lt;script&gt;</code> for logic, and optional <code>&lt;style&gt;</code> for scoped CSS. Vue supports directives like <code>v-if</code> and <code>v-for</code>.
      <br />
      <code>{`<template><header><h1 v-if="showTitle">{{ title }}</h1></header></template>`}</code>
    </li>
    <li>
      <strong>Svelte:</strong> Compiles components into highly optimized JavaScript. HTML is written directly in <code>&lt;script&gt;</code> blocks along with reactive declarations. Unlike React or Vue, there's no virtual DOM — making it fast and lightweight.
      <br />
      <code>{`<script>let title = "Welcome";</script><header><h1>{title}</h1></header>`}</code>
    </li>
    <li>
      <strong>Web Components:</strong> A native browser standard using <code>customElements</code>, <code>Shadow DOM</code>, and <code>HTML templates</code>. HTML is encapsulated inside reusable elements like <code>&lt;my-header&gt;</code> with scoped styles and logic.
      <br />
      <code>{`<template><header><h1>Title</h1></header></template>`}</code>
    </li>
  </ul>
  <p>
    Understanding how these frameworks utilize semantic HTML within component structures is crucial for building accessible, maintainable, and performant web applications.
  </p>
</section>



      <section style={styles.section}>
        <h2>3. Forms and Real-Time Interactivity</h2>
        <p>
          Forms with <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, and HTML5 validation attributes (e.g., <code>required</code>, <code>pattern</code>) are critical for user input. Pair with JavaScript for real-time validation and AI-driven form processing.
        </p>
      </section>

      <section style={styles.section}>
        <h2>4. Custom Elements and Web Components</h2>
        <p>
          The Custom Elements API allows reusable components with tags like <code>&lt;my-component&gt;</code>. This is key for modular, framework-agnostic development in modern web apps.
        </p>
      </section>

      <section style={styles.section}>
        <h2>5. Metadata and SEO Optimization</h2>
        <p>
          Use <code>&lt;meta&gt;</code>, <code>&lt;title&gt;</code>, and Open Graph tags in the <code>&lt;head&gt;</code> to optimize for AI-driven search engines and social media sharing.
        </p>
      </section>

      <section style={styles.section}>
        <h2>6. Integration with Modern Web APIs</h2>
        <p>
          HTML elements like <code>&lt;canvas&gt;</code>, <code>&lt;video&gt;</code>, or <code>&lt;audio&gt;</code> integrate with APIs (e.g., WebRTC, WebGPU) for advanced features like real-time streaming or 3D rendering.
        </p>
      </section>

      <section style={styles.section}>
        <h2>7. Future-Relevant Skills for Web Development</h2>
        <p>
          To build modern web pages and apps in 2025, focus on these HTML-related skills:
        </p>
        <ul style={styles.list}>
          <li><strong>Semantic and Accessible HTML</strong>: Ensure code is inclusive and optimized for AI crawlers.</li>
          <li><strong>Framework Integration</strong>: Master how HTML works within React, Vue, or Svelte for component-based architectures.</li>
          <li><strong>AI Tool Proficiency</strong>: Use AI tools to generate HTML but review for semantics, performance, and accessibility.</li>
          <li><strong>Web APIs</strong>: Leverage HTML’s role in APIs like WebRTC or WebGPU for interactive and 3D features.</li>
          <li><strong>Progressive Web Apps (PWAs)</strong>: Understand HTML’s role in service workers and manifest files for offline-capable apps.</li>
          <li><strong>Debugging and Optimization</strong>: Refine AI-generated HTML for performance, minimizing DOM depth and ensuring compatibility.</li>
        </ul>
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
};

export default HtmlPage;