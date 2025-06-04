import { useState } from 'react'
import './Photos.css'

const Photos = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const photos = [
    {
      id: 1,
      title: "Christ Rédempteur",
      category: "monuments",
      description: "Vue panoramique du Christ Rédempteur au coucher du soleil"
    },
    {
      id: 2,
      title: "Plage de Copacabana",
      category: "plages",
      description: "L'emblématique plage de Copacabana avec ses 4 km de sable doré"
    },
    {
      id: 3,
      title: "Pain de Sucre",
      category: "monuments",
      description: "Le célèbre Pain de Sucre depuis la baie de Guanabara"
    },
    {
      id: 4,
      title: "Quartier de Santa Teresa",
      category: "quartiers",
      description: "Street art coloré dans les rues bohèmes de Santa Teresa"
    },
    {
      id: 5,
      title: "Plage d'Ipanema",
      category: "plages",
      description: "Coucher de soleil magique sur la plage d'Ipanema"
    },
    {
      id: 6,
      title: "Escaliers de Selarón",
      category: "art",
      description: "Les célèbres escaliers colorés de l'artiste Jorge Selarón"
    },
    {
      id: 7,
      title: "Cathédrale Métropolitaine",
      category: "monuments",
      description: "Architecture moderne de la cathédrale de Rio"
    },
    {
      id: 8,
      title: "Lapa",
      category: "quartiers",
      description: "Vie nocturne animée dans le quartier de Lapa"
    },
    {
      id: 9,
      title: "Jardin Botanique",
      category: "nature",
      description: "Palmiers royaux dans le magnifique jardin botanique"
    },
    {
      id: 10,
      title: "Plage de Barra da Tijuca",
      category: "plages",
      description: "Longue plage sauvage de Barra da Tijuca"
    },
    {
      id: 11,
      title: "Forêt de Tijuca",
      category: "nature",
      description: "Randonnée dans la plus grande forêt urbaine du monde"
    },
    {
      id: 12,
      title: "Carnaval de Rio",
      category: "culture",
      description: "L'explosion de couleurs du célèbre Carnaval de Rio"
    }
  ]

  const categories = [
    { id: 'all', name: 'Toutes', icon: '🌟' },
    { id: 'monuments', name: 'Monuments', icon: '🏛️' },
    { id: 'plages', name: 'Plages', icon: '🏖️' },
    { id: 'quartiers', name: 'Quartiers', icon: '🏘️' },
    { id: 'nature', name: 'Nature', icon: '🌿' },
    { id: 'art', name: 'Art', icon: '🎨' },
    { id: 'culture', name: 'Culture', icon: '🎭' }
  ]

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory)

  return (
    <div className="photos">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <h1>Galerie Photos</h1>
          <p>Découvrez la beauté de Rio à travers notre collection d'images</p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="filters">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="gallery">
        <div className="container">
          <div className="photos-grid">
            {filteredPhotos.map((photo) => (
              <div key={photo.id} className="photo-card">
                <div className="photo-placeholder">
                  <span className="photo-title">{photo.title}</span>
                </div>
                <div className="photo-info">
                  <h3>{photo.title}</h3>
                  <p>{photo.description}</p>
                  <span className="photo-category">
                    {categories.find(cat => cat.id === photo.category)?.icon} 
                    {categories.find(cat => cat.id === photo.category)?.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{photos.length}</div>
              <div className="stat-label">Photos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{categories.length - 1}</div>
              <div className="stat-label">Catégories</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4K</div>
              <div className="stat-label">Qualité</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">Souvenirs</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="photo-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Envie de voir Rio en vrai ?</h2>
            <p>Ces photos vous donnent un aperçu, mais rien ne vaut l'expérience réelle !</p>
            <a href="/bons-plans" className="btn-primary">Planifier mon voyage</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Photos
