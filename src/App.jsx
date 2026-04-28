import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import ScrollToHash from "./components/ScrollToHash";

function AppContent() {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith("/project/");

  return (
    <div className="bg-black min-h-screen">
      <ScrollToHash />
      {!isProjectDetail && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
