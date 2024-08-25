import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

// page imports
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import SkillsPage from "./pages/SkillsPage";






function App() {
  return (
    <>
    <Router>
      <div className="main">
        <Routes>
          <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/skills" element={<SkillsPage />} />
          </Route>      
        </Routes>
      </div>     
    </Router>

    
    </>
  )
}

export default App
