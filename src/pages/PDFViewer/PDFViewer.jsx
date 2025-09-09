import { useState } from 'react'
import { Download, ExternalLink, RefreshCw } from 'lucide-react'
import './PDFViewer.css'

const PDFViewer = () => {
  const [pdfUrl, setPdfUrl] = useState('')
  const [inputUrl, setInputUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // URLs de ejemplo para el colegio
  const exampleDocs = [
    {
      name: 'Horario',
      url: '/test.pdf',
      description: 'Horario del dia de hoy'
    },
    {
      name: 'PDF de Ejemplo Simple',
      url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      description: 'Documento PDF básico de prueba'
    },
    {
      name: 'Documento Técnico Mozilla',
      url: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
      description: 'PDF técnico con múltiples páginas'
    }
  ]

  const loadPdf = () => {
    if (inputUrl.trim()) {
      setLoading(true)
      setError(null)
      
      // Simular un pequeño delay para mostrar el loading
      setTimeout(() => {
        setPdfUrl(inputUrl.trim())
        setLoading(false)
      }, 500)
    }
  }

  const loadExampleDoc = (url) => {
    setLoading(true)
    setError(null)
    setInputUrl(url)
    
    // Simular un pequeño delay para mostrar el loading
    setTimeout(() => {
      setPdfUrl(url)
      setLoading(false)
    }, 500)
  }

  const clearViewer = () => {
    setPdfUrl('')
    setInputUrl('')
    setError(null)
  }

  const refreshViewer = () => {
    if (pdfUrl) {
      setLoading(true)
      // Forzar refresh del iframe
      const currentUrl = pdfUrl
      setPdfUrl('')
      setTimeout(() => {
        setPdfUrl(currentUrl)
        setLoading(false)
      }, 100)
    }
  }

  return (
    <div className="pdf-viewer-page">
      <div className="container">
        <div className="pdf-header">
          <h1>📚 Centro de Documentos</h1>
          <p>Accede a todos los documentos importantes del colegio</p>
        </div>

        {/* URL Input Section */}
        <div className="pdf-input-section">
          <div className="url-input-group">
            <input
              type="url"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="Ingresa la URL del PDF (debe ser público y accesible)..."
              className="url-input"
            />
            <button onClick={loadPdf} className="btn btn-primary" disabled={!inputUrl.trim()}>
              Cargar PDF
            </button>
          </div>
          
          <div className="example-docs">
            <h3>Documentos:</h3>
            <p className="docs-description">
              Aqui encontraras los documentos importantes de nuestra institucion
            </p>
            <div className="docs-grid">
              {exampleDocs.map((doc, index) => (
                <button
                  key={index}
                  onClick={() => loadExampleDoc(doc.url)}
                  className="doc-card"
                >
                  <span className="doc-icon">📄</span>
                  <div className="doc-info">
                    <span className="doc-name">{doc.name}</span>
                    <span className="doc-description">{doc.description}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PDF Viewer con iframe */}
        {pdfUrl && (
          <div className="pdf-viewer-container">
            {/* Controls */}
            <div className="pdf-controls">
              <div className="control-group">
                <span className="current-doc">📄 Documento cargado</span>
              </div>
              
              <div className="control-group">
                <button onClick={refreshViewer} className="control-btn" title="Refrescar">
                  <RefreshCw size={20} />
                </button>
                <button onClick={clearViewer} className="control-btn" title="Cerrar">
                  ✕
                </button>
              </div>
              
              <div className="control-group">
                <a 
                  href={pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  title="Abrir en nueva pestaña"
                >
                  <ExternalLink size={16} />
                  Abrir en nueva pestaña
                </a>
                <a 
                  href={pdfUrl} 
                  download
                  className="btn btn-primary"
                  title="Descargar PDF"
                >
                  <Download size={16} />
                  Descargar
                </a>
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="loading-state">
                <div className="spinner"></div>
                <p>Cargando documento...</p>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="error-state">
                <div className="error-icon">⚠️</div>
                <p>{error}</p>
              </div>
            )}

            {/* PDF iframe */}
            {!loading && !error && (
              <div className="pdf-iframe-container">
                <iframe
                  src={pdfUrl}
                  width="100%"
                  height="800px"
                  style={{ 
                    border: 'none', 
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                  }}
                  title="Visualizador de PDF"
                  onError={() => setError('No se pudo cargar el documento. Verifica que la URL sea correcta.')}
                />
              </div>
            )}
          </div>
        )}

        {/* Instructions
        {!pdfUrl && (
          <div className="instructions">
            <div className="instruction-card">
              <h3>🔗 Cómo cargar tus documentos</h3>
              
              <div className="instruction-section">
                <h4>📄 Documentos de Ejemplo</h4>
                <p>Prueba la funcionalidad con los documentos de ejemplo arriba, o carga tu propio PDF.</p>
              </div>
              
              <div className="instruction-section">
                <h4>🌐 Para PDFs en línea</h4>
                <p>Puedes cargar cualquier PDF público desde una URL directa.</p>
                <ul>
                  <li>El archivo debe ser accesible públicamente</li>
                  <li>La URL debe terminar en .pdf o ser un enlace directo</li>
                </ul>
              </div>
              
              <div className="instruction-section">
                <h4>📁 Para archivos de Google Drive</h4>
                <ol>
                  <li>Abre el archivo PDF en Google Drive</li>
                  <li>Haz clic en "Compartir"</li>
                  <li>Selecciona "Cualquier persona con el enlace puede ver"</li>
                  <li>Copia el enlace y cámbialo de <code>/view?usp=sharing</code> a <code>/preview</code></li>
                  <li>Pega el enlace modificado en el campo de arriba</li>
                </ol>
              </div>

              <div className="instruction-section">
                <h4>📂 Para archivos locales del servidor</h4>
                <p>Coloca tus PDFs en la carpeta <code>public/docs/</code> y usa URLs como:</p>
                <code>/docs/manual-estudiante.pdf</code>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  )
}

export default PDFViewer
