import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Rio Blog</h3>
            <p>Votre guide ultime pour découvrir Rio de Janeiro, la Cidade Maravilhosa.</p>
          </div>
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/bons-plans">Bons Plans</a></li>
              <li><a href="/photos">Photos</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Rio de Janeiro</h4>
            <ul>
              <li>Copacabana</li>
              <li>Christ Rédempteur</li>
              <li>Pain de Sucre</li>
              <li>Ipanema</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Rio Blog. Découvrez la beauté du Brésil.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
