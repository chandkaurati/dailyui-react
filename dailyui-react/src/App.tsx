import { useState } from "react";
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";
import MainContent from "./components/Layout/MainContent";
import Footer from "./components/Layout/Footer";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState("introduction");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      {/* Fixed Navbar at top */}
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      {/* Main container with sidebar and content */}
      <div className="app-body">
        <Sidebar
          isOpen={isSidebarOpen}
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
        />

        <MainContent
          isSidebarOpen={isSidebarOpen}
          selectedComponent={selectedComponent}
        />
      </div>

      {/* Fixed Footer at bottom */}
      <Footer />
    </div>
  );
}

export default App;
