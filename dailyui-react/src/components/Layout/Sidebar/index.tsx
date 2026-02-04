import React from 'react';
import './sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  selectedComponent: string;
  setSelectedComponent: (component: string) => void;
}

const components = [
  { id: 'introduction', name: 'Introduction', category: 'Getting Started' },
  { id: 'tabs', name: 'Tabs', category: 'Navigation' },
  { id: 'modal', name: 'Modal', category: 'Overlay' },
  { id: 'button', name: 'Button', category: 'Form' },
  { id: 'dropdown', name: 'Dropdown', category: 'Form' },
  { id: 'accordion', name: 'Accordion', category: 'Layout' },
  { id: 'card', name: 'Card', category: 'Layout' },
  { id: 'tooltip', name: 'Tooltip', category: 'Overlay' },
];

// Group components by category
const groupedComponents = components.reduce((acc, component) => {
  if (!acc[component.category]) {
    acc[component.category] = [];
  }
  acc[component.category].push(component);
  return acc;
}, {} as Record<string, typeof components>);

const Sidebar: React.FC<SidebarProps> = ({ isOpen, selectedComponent, setSelectedComponent }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="sidebar-content">
        {Object.entries(groupedComponents).map(([category, items]) => (
          <div key={category} className="sidebar-section">
            <h3 className="sidebar-category">{category}</h3>
            <ul className="sidebar-list">
              {items.map((component) => (
                <li key={component.id}>
                  <button
                    className={`sidebar-item ${selectedComponent === component.id ? 'sidebar-item-active' : ''}`}
                    onClick={() => setSelectedComponent(component.id)}
                  >
                    <span className="sidebar-item-text">{component.name}</span>
                    {selectedComponent === component.id && (
                      <span className="sidebar-item-indicator"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;