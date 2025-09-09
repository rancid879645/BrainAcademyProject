import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Award, Calendar } from 'lucide-react'
import { useState, useEffect } from 'react'
import './Home.css'

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Imágenes de fondo para el hero (usando URLs de Unsplash con imágenes educativas)
  const heroImages = [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Estudiantes en aula
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80', // Biblioteca moderna
    'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Laboratorio de ciencias
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80', // Escuela moderna exterior
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80'  // Estudiantes colaborando
  ]

  // Cambiar imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [heroImages.length])
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{
        backgroundImage: `linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(9, 3, 87, 1) 100%), url(${heroImages[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Efecto de partículas */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Bienvenidos a <span className="highlight">Brain Academy</span>
              </h1>
              <p className="hero-description">
                Formando líderes del futuro con excelencia académica, valores sólidos 
                y una educación integral que prepara a nuestros estudiantes para los 
                desafíos del mañana.
              </p>
              <div className="hero-buttons">
                <Link to="/documentos" className="btn btn-primary">
                  Ver Documentos
                  <ArrowRight size={20} />
                </Link>
                <a href="#about" className="btn btn-secondary">
                  Conoce Más
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-card">
                <div className="card-icon">🎓</div>
                <h3>Educación de Calidad</h3>
                <p>Comprometidos con la excelencia educativa</p>
              </div>
            </div>
          </div>
          
          {/* Indicadores de imagen */}
          <div className="hero-indicators">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Cambiar a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="about">
        <div className="container">
          <h2 className="section-title">¿Por qué elegir Brain Academy?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <BookOpen size={32} />
              </div>
              <h3>Metodología Innovadora</h3>
              <p>
                Utilizamos las últimas metodologías pedagógicas para garantizar 
                un aprendizaje efectivo y significativo.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>Profesores Calificados</h3>
              <p>
                Nuestro equipo docente está altamente capacitado y comprometido 
                con el éxito de cada estudiante.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Award size={32} />
              </div>
              <h3>Excelencia Académica</h3>
              <p>
                Reconocidos por nuestros altos estándares académicos y 
                resultados sobresalientes en evaluaciones.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Calendar size={32} />
              </div>
              <h3>Actividades Extracurriculares</h3>
              <p>
                Ofrecemos una amplia variedad de actividades deportivas, 
                culturales y artísticas para el desarrollo integral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>¿Listo para formar parte de nuestra familia?</h2>
            <p>
              Descubre todos nuestros programas académicos y documentos 
              informativos en nuestra sección de documentos.
            </p>
            <Link to="/documentos" className="btn btn-primary">
              Explorar Documentos
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
