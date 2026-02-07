import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { components } from "../../../data/component-meta-data";

interface SidebarProps {
  isOpen: boolean;
  selectedComponent: string;
  setSelectedComponent: (component: string) => void;
}

// Group components by category
const groupedComponents = components.reduce(
  (acc, component) => {
    if (!acc[component.category]) {
      acc[component.category] = [];
    }
    acc[component.category].push(component);
    return acc;
  },
  {} as Record<string, typeof components>,
);

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  selectedComponent,
  setSelectedComponent,
}) => {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <div className="sidebar-content">
        {Object.entries(groupedComponents).map(([category, items]) => (
          <div key={category} className="sidebar-section">
            <h3 className="sidebar-category">{category}</h3>
            <ul className="sidebar-list">
              {items.map((component) => (
                <li key={component.id}>
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    to={component.path}
                  >
                    <button
                      className={`sidebar-item ${selectedComponent === component.id ? "sidebar-item-active" : ""}`}
                      onClick={() => setSelectedComponent(component.id)}
                    >
                      <span className="sidebar-item-text">
                        {component.name}
                      </span>
                      {selectedComponent === component.id && (
                        <span className="sidebar-item-indicator"></span>
                      )}
                    </button>
                  </NavLink>
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
