import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>Rio Blog</h1>
            <span className="tagline">Découvrez la Cidade Maravilhosa</span>
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link 
                to="/bons-plans" 
                className={location.pathname === '/bons-plans' ? 'nav-link active' : 'nav-link'}
              >
                Bons Plans
              </Link>
            </li>
            <li>
              <Link 
                to="/photos" 
                className={location.pathname === '/photos' ? 'nav-link active' : 'nav-link'}
              >
                Photos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
