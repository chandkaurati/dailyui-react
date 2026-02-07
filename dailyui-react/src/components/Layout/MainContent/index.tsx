import React from "react";
import "./mainContent.css";

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <div className="main-content">
      <div className="content-wrapper">{children}</div>
    </div>
  );
};

export default MainContent;
