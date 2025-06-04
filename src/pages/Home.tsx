import { useEffect, useState } from 'react'
import './Home.css'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="home">
      {/* Section Hero avec image de Rio */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className={`hero-title ${isVisible ? 'fade-in' : ''}`}>
            Bienvenue à Rio
          </h1>          <p className={`hero-subtitle ${isVisible ? 'fade-in delayed' : ''}`}>
            Découvrez la Cidade Maravilhosa
          </p>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Section contenu */}
      <section id="content-section" className="content-section">
        <div className="container">
          <div className="intro-content">
            <h2>Rio de Janeiro, la Merveille du Monde</h2>
            <p>
              Rio de Janeiro, surnommée la "Cidade Maravilhosa" (Ville Merveilleuse), 
              est une destination qui émerveille par sa beauté naturelle extraordinaire. 
              Entre ses plages iconiques, ses montagnes majestueuses et sa culture vibrante, 
              Rio offre une expérience inoubliable.
            </p>
          </div>

          <div className="highlights-grid">
            <div className="highlight-card">
              <h3>🏖️ Plages Légendaires</h3>
              <p>Copacabana, Ipanema, Leblon... Des plages de renommée mondiale vous attendent.</p>
            </div>
            <div className="highlight-card">
              <h3>🗿 Sites Emblématiques</h3>
              <p>Le Christ Rédempteur et le Pain de Sucre, symboles éternels de Rio.</p>
            </div>
            <div className="highlight-card">
              <h3>🎭 Culture Vibrante</h3>
              <p>Samba, Carnaval, cuisine brésilienne... L'âme de Rio vous envoûtera.</p>
            </div>
            <div className="highlight-card">
              <h3>🌿 Nature Préservée</h3>
              <p>Forêt de Tijuca, jardins botaniques... Une biodiversité exceptionnelle.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
