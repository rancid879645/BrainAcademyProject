# 🎓 Brain Academy - Sitio Web del Colegio

Un sitio web moderno y responsivo para el Colegio Brain Academy, desarrollado con React y Vite. Incluye una página de inicio atractiva y un visualizador de documentos PDF integrado con Google Drive.

## ✨ Características

- **Diseño Moderno**: Interfaz atractiva y responsiva con gradientes y animaciones
- **Navegación Intuitiva**: Sistema de navegación limpio con React Router
- **Visualizador de PDF**: Integración con Google Drive para mostrar documentos del colegio
- **Totalmente Responsivo**: Optimizado para dispositivos móviles y desktop
- **Rendimiento Optimizado**: Construido con Vite para desarrollo rápido

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de desarrollo rápida
- **React Router DOM** - Navegación entre páginas
- **React PDF** - Visualización de documentos PDF
- **Lucide React** - Iconos modernos
- **CSS3** - Estilos modernos con Flexbox y Grid

## 📱 Páginas Incluidas

### 🏠 Página de Inicio
- Hero section con información del colegio
- Sección de características destacadas
- Diseño atractivo con tarjetas informativas
- Call-to-action para navegación

### 📄 Visualizador de Documentos
- Carga de PDFs desde Google Drive
- Controles de navegación (página anterior/siguiente)
- Zoom in/out y rotación de documentos
- Enlaces directos a documentos importantes del colegio
- Instrucciones para configurar enlaces de Google Drive

## 🛠️ Instalación y Configuración

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd BrainAcademyProject
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

## 📋 Configuración de Google Drive

Para usar el visualizador de PDF con documentos de Google Drive:

1. Sube tu documento PDF a Google Drive
2. Haz clic derecho en el archivo y selecciona "Compartir"
3. Cambia los permisos a "Cualquier persona con el enlace puede ver"
4. Copia el enlace compartido
5. Modifica la URL cambiando `/view?usp=sharing` por `/preview`
6. Usa esta URL modificada en el visualizador

## 🎨 Personalización

El proyecto está estructurado de manera modular para facilitar la personalización:

- **Colores**: Modifica las variables CSS en `src/App.css`
- **Contenido**: Actualiza los textos en los componentes de página
- **Documentos**: Añade nuevos enlaces de documentos en `PDFViewer.jsx`
- **Estilos**: Cada componente tiene su propio archivo CSS

## 📁 Estructura del Proyecto

```
src/
├── components/
│   └── Navbar/          # Componente de navegación
├── pages/
│   ├── Home/           # Página de inicio
│   └── PDFViewer/      # Visualizador de documentos
├── App.jsx             # Componente principal
├── App.css             # Estilos globales
└── index.css           # Estilos base
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más información.

## 👥 Contacto

Brain Academy - [info@brainacademy.edu.co](mailto:info@brainacademy.edu.co)

Enlace del Proyecto: [https://github.com/tu-usuario/BrainAcademyProject](https://github.com/tu-usuario/BrainAcademyProject)
