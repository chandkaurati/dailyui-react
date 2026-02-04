import React from 'react';
import './mainContent.css';

interface MainContentProps {
  isSidebarOpen: boolean;
  selectedComponent: string;
}

const MainContent: React.FC<MainContentProps> = ({selectedComponent }) => {
  const renderContent = () => {
    switch (selectedComponent) {
      case 'introduction':
        return (
          <div className="content-section">
            <h1 className="content-title">Welcome to DailyUI-React</h1>
            <p className="content-description">
              A collection of reusable React components built with TypeScript and custom CSS.
              Each component is crafted with attention to accessibility, performance, and design.
            </p>
            
            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon">⚛️</div>
                <h3>React + TypeScript</h3>
                <p>Type-safe components with modern React patterns</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3>Custom CSS</h3>
                <p>Beautiful, maintainable styles without dependencies</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">♿</div>
                <h3>Accessible</h3>
                <p>ARIA compliant with keyboard navigation</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3>Responsive</h3>
                <p>Works seamlessly across all devices</p>
              </div>
            </div>
            
            <div className="getting-started">
              <h2>Getting Started</h2>
              <p>Select a component from the sidebar to view its implementation, demo, and usage guide.</p>
            </div>
          </div>
        );
      
      case 'tabs':
        return (
          <div className="content-section">
            <h1 className="content-title">Tabs Component</h1>
            <p className="content-description">
              A flexible and accessible tabs component with smooth transitions.
            </p>
            <div className="component-placeholder">
              Component demo will be displayed here
            </div>
          </div>
        );
      
      default:
        return (
          <div className="content-section">
            <h1 className="content-title">{selectedComponent}</h1>
            <div className="component-placeholder">
              Component demo coming soon...
            </div>
          </div>
        );
    }
  };

  return (
    <main className="main-content">
      <div className="content-wrapper">
        {renderContent()}
      </div>
    </main>
  );
};

export default MainContent;