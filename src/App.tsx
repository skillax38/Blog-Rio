import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BonsPlans from './pages/BonsPlans'
import Photos from './pages/Photos'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bons-plans" element={<BonsPlans />} />
            <Route path="/photos" element={<Photos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
