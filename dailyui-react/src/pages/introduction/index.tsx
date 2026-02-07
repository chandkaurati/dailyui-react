import React from 'react';
import "./style.css"
const Introduction: React.FC = () => {
  return (
    <div className="introduction">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Daily Practice Project</span>
          </div>
          <h1 className="hero-title">
            Building React Components
            <span className="gradient-text"> One Day at a Time</span>
          </h1>
          <p className="hero-description">
            Welcome to my daily UI component practice! This is where I build and showcase 
            reusable React components with TypeScript and custom CSS. Each component is 
            crafted to improve my frontend development skills.
          </p>
          <div className="hero-meta">
            <div className="meta-item">
              <span className="meta-icon">👨‍💻</span>
              <span>Personal Project</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">🎯</span>
              <span>Daily Practice</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">⚛️</span>
              <span>React + TypeScript</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="window-title">MyComponent.tsx</div>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="code-keyword">import</span>
                <span className="code-text"> React </span>
                <span className="code-keyword">from</span>
                <span className="code-string"> 'react'</span>
              </div>
              <div className="code-line">
                <span className="code-keyword">const</span>
                <span className="code-text"> Component = () </span>
                <span className="code-keyword">=&gt;</span>
              </div>
              <div className="code-line indent">
                <span className="code-text">&lt;div&gt;Hello&lt;/div&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About This Project */}
      <section className="about-section">
        <div className="about-content">
          <h2 className="section-title-intro">About This Project</h2>
          <p className="about-text">
            This is my personal learning journey where I challenge myself to build 
            one UI component every day. The goal is to strengthen my React skills, 
            master TypeScript, and create a portfolio of reusable components.
          </p>
          <p className="about-text">
            Each component is built from scratch without using any UI libraries, 
            focusing on understanding the fundamentals and best practices of modern 
            React development.
          </p>
        </div>
      </section>

      {/* What I'm Learning */}
      <section className="learning-section">
        <h2 className="section-title-intro">What I'm Learning</h2>
        <div className="learning-grid">
          <div className="learning-card">
            <div className="learning-icon">⚛️</div>
            <h3>React Fundamentals</h3>
            <ul className="learning-list">
              <li>Component composition</li>
              <li>Hooks & state management</li>
              <li>Props & event handling</li>
              <li>Context API</li>
            </ul>
          </div>

          <div className="learning-card">
            <div className="learning-icon">📘</div>
            <h3>TypeScript</h3>
            <ul className="learning-list">
              <li>Type definitions</li>
              <li>Interfaces & types</li>
              <li>Generic components</li>
              <li>Type safety</li>
            </ul>
          </div>

          <div className="learning-card">
            <div className="learning-icon">🎨</div>
            <h3>CSS Mastery</h3>
            <ul className="learning-list">
              <li>Custom styling</li>
              <li>CSS animations</li>
              <li>Responsive design</li>
              <li>CSS architecture</li>
            </ul>
          </div>

          <div className="learning-card">
            <div className="learning-icon">♿</div>
            <h3>Accessibility</h3>
            <ul className="learning-list">
              <li>ARIA attributes</li>
              <li>Keyboard navigation</li>
              <li>Screen reader support</li>
              <li>Focus management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* My Progress */}
      <section className="progress-section">
        <h2 className="section-title-intro">My Progress</h2>
        <div className="progress-grid">
          <div className="progress-card">
            <div className="progress-number">Day 1+</div>
            <div className="progress-label">Building</div>
            <div className="progress-description">Started this journey</div>
          </div>
          <div className="progress-card">
            <div className="progress-number">8+</div>
            <div className="progress-label">Components</div>
            <div className="progress-description">Planned to build</div>
          </div>
          <div className="progress-card">
            <div className="progress-number">100%</div>
            <div className="progress-label">Custom</div>
            <div className="progress-description">Built from scratch</div>
          </div>
        </div>
      </section>

      {/* Component Categories */}
      <section className="categories-section">
        <h2 className="section-title-intro">Component Categories</h2>
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-icon">🧭</div>
            <h3>Navigation</h3>
            <p>Tabs, Breadcrumbs, Pagination</p>
          </div>
          <div className="category-card">
            <div className="category-icon">📝</div>
            <h3>Forms</h3>
            <p>Inputs, Dropdowns, Buttons</p>
          </div>
          <div className="category-card">
            <div className="category-icon">📦</div>
            <h3>Layout</h3>
            <p>Cards, Grids, Accordions</p>
          </div>
          <div className="category-card">
            <div className="category-icon">💬</div>
            <h3>Feedback</h3>
            <p>Modals, Tooltips, Toasts</p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-section">
        <h3 className="tech-title">Built With</h3>
        <div className="tech-stack-grid">
          <div className="tech-item">
            <div className="tech-logo">⚛️</div>
            <div className="tech-name">React 18</div>
          </div>
          <div className="tech-item">
            <div className="tech-logo">📘</div>
            <div className="tech-name">TypeScript</div>
          </div>
          <div className="tech-item">
            <div className="tech-logo">🎨</div>
            <div className="tech-name">Custom CSS</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Explore the Components</h2>
          <p className="cta-description">
            Select any component from the sidebar to see the implementation, 
            live demo, and code examples.
          </p>
          <div className="cta-note">
            <span className="note-icon">💡</span>
            <span>New components added regularly as I continue learning!</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;