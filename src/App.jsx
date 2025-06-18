import './App.css'
import Header from './Components/Navbar/Header'
import Home from './Pages/Home'
import Projects from './Pages/Projects/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Skills from './Pages/Skills/Skills'

function App() {
  return (
    <Router>
      <div className="app-body">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
