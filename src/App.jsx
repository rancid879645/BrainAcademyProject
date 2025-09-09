import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import PDFViewer from './pages/PDFViewer/PDFViewer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documentos" element={<PDFViewer />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
