import './BonsPlans.css'

const BonsPlans = () => {
  const restaurants = [
    {
      name: "Aprazível",
      category: "Cuisine Brésilienne",
      location: "Santa Teresa",
      description: "Restaurant avec vue panoramique sur Rio, cuisine traditionnelle dans un cadre tropical",
      price: "€€€"
    },
    {
      name: "Confeitaria Colombo",
      category: "Pâtisserie Historic",
      location: "Centro",
      description: "Café historique de 1894, architecture Belle Époque et pâtisseries traditionnelles",
      price: "€€"
    },
    {
      name: "Zaza Bistrô Tropical",
      category: "Fusion",
      location: "Ipanema",
      description: "Cuisine fusion créative dans un jardin tropical, parfait pour un dîner romantique",
      price: "€€€"
    }
  ]

  const activities = [
    {
      name: "Téléphérique du Pain de Sucre",
      category: "Monument",
      description: "Vue à 360° sur Rio depuis 396m d'altitude. Coucher de soleil recommandé",
      price: "€€"
    },
    {
      name: "Train du Corcovado",
      category: "Monument",
      description: "Montée au Christ Rédempteur à travers la forêt de Tijuca",
      price: "€€"
    },
    {
      name: "Favela Tour Santa Marta",
      category: "Culture",
      description: "Découverte responsable d'une favela pacifiée avec guide local",
      price: "€"
    },
    {
      name: "Vol en hélicoptère",
      category: "Aventure",
      description: "Survol de Rio pour une perspective unique des plages et montagnes",
      price: "€€€€"
    }
  ]

  const accommodations = [
    {
      name: "Copacabana Palace",
      category: "Luxe",
      location: "Copacabana",
      description: "Hôtel iconique face à la plage, service 5 étoiles depuis 1923",
      price: "€€€€"
    },
    {
      name: "Vila Santa Teresa",
      category: "Boutique",
      location: "Santa Teresa",
      description: "Hôtel de charme dans une villa coloniale restaurée",
      price: "€€€"
    },
    {
      name: "Generator Rio",
      category: "Auberge",
      location: "Centro",
      description: "Auberge moderne avec rooftop, parfaite pour les jeunes voyageurs",
      price: "€"
    }
  ]

  return (
    <div className="bons-plans">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <h1>Bons Plans Rio</h1>
          <p>Nos meilleures recommandations pour découvrir Rio comme un local</p>
        </div>
      </section>

      {/* Restaurants */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">🍽️ Restaurants</h2>
          <div className="cards-grid">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <h3>{restaurant.name}</h3>
                  <span className="price">{restaurant.price}</span>
                </div>
                <div className="card-meta">
                  <span className="category">{restaurant.category}</span>
                  <span className="location">📍 {restaurant.location}</span>
                </div>
                <p className="card-description">{restaurant.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">🎯 Activités</h2>
          <div className="cards-grid">
            {activities.map((activity, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <h3>{activity.name}</h3>
                  <span className="price">{activity.price}</span>
                </div>
                <div className="card-meta">
                  <span className="category">{activity.category}</span>
                </div>
                <p className="card-description">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">🏨 Hébergements</h2>
          <div className="cards-grid">
            {accommodations.map((hotel, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <h3>{hotel.name}</h3>
                  <span className="price">{hotel.price}</span>
                </div>
                <div className="card-meta">
                  <span className="category">{hotel.category}</span>
                  <span className="location">📍 {hotel.location}</span>
                </div>
                <p className="card-description">{hotel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="tips-section">
        <div className="container">
          <h2 className="section-title">💡 Conseils de Pro</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">💰</div>
              <h3>Budget</h3>
              <p>Comptez 50-80€/jour pour un budget moyen, 100€+ pour le luxe. Les transports publics sont très abordables.</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🌤️</div>
              <h3>Meilleure Période</h3>
              <p>Mars-Mai et Sept-Nov pour éviter la foule. Déc-Fév pour la plage mais c'est l'été austral.</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🚇</div>
              <h3>Transport</h3>
              <p>Métro + bus pour les longues distances, Uber pour la sécurité le soir. Évitez de marcher seul la nuit.</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🏖️</div>
              <h3>Plages</h3>
              <p>Copacabana touristique, Ipanema plus chic, Barra da Tijuca moins fréquentée. Attention aux courants.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BonsPlans
