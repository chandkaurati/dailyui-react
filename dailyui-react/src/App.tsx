import { useState } from "react";
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";
import MainContent from "./components/Layout/MainContent";
import Footer from "./components/Layout/Footer";
import "./App.css";
import { Outlet } from "react-router-dom";

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
      <main className="app-body">
        <Sidebar
          isOpen={isSidebarOpen}
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
        />
        <MainContent>{<Outlet />}</MainContent>
      </main>
      <Footer />
    </div>
  );
}

export default App;
