# Portal ODS 6 Colombia - Agua Limpia y Saneamiento

Portal web informativo sobre el Objetivo de Desarrollo Sostenible 6 (ODS 6) en Colombia, rediseñado completamente con React y Tailwind CSS para ofrecer una experiencia visual moderna y profesional.

## 🚀 Características

- **Diseño Moderno**: Interfaz completamente rediseñada con un sistema de diseño cohesivo
- **Responsive**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Componentes Modulares**: Arquitectura React con componentes reutilizables
- **Tipografía Profesional**: Fuente Inter para una experiencia de lectura óptima
- **Paleta de Colores Hídricos**: Colores corporativos basados en azules y verdes del tema hídrico
- **Animaciones Suaves**: Efectos hover y transiciones elegantes
- **Iconografía**: Iconos de react-icons para mejorar la jerarquía visual
- **Navegación Intuitiva**: Menú de navegación fijo con scroll suave

## 🛠️ Tecnologías Utilizadas

- **React 18**: Biblioteca de JavaScript para interfaces de usuario
- **Vite**: Herramienta de construcción rápida y moderna
- **Tailwind CSS**: Framework de CSS utilitario para diseño responsive
- **React Icons**: Biblioteca de iconos para React
- **PostCSS**: Procesador de CSS con autoprefixer

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd web-portal
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:3000`

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Navigation.jsx      # Barra de navegación
│   ├── IntroSection.jsx    # Sección de introducción
│   ├── WaterIssuesSection.jsx # Sección de problemática del agua
│   ├── GoalsSection.jsx    # Sección de metas del ODS 6
│   └── Footer.jsx          # Pie de página
├── App.jsx                 # Componente principal
├── main.jsx               # Punto de entrada
└── index.css              # Estilos globales con Tailwind

public/
└── assets/
    └── images/            # Imágenes del proyecto
```

## 🎨 Sistema de Diseño

### Colores
- **Water**: Paleta de azules para elementos principales
- **Ocean**: Tonos verdes-azulados para acentos
- **Aqua**: Verdes para elementos de naturaleza

### Tipografía
- **Fuente Principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800

### Componentes
- **Cards**: Diseño con sombras sutiles y bordes redondeados
- **Botones**: Efectos hover con escalado y sombras
- **Navegación**: Barra fija con efecto glassmorphism

## 📱 Responsive Design

El diseño se adapta perfectamente a:
- **Móviles**: < 768px
- **Tablets**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Previsualiza la build de producción

## 📄 Contenido

El portal mantiene todo el contenido original sobre:
- Explicación del ODS 6 en Colombia
- Problemática de escasez y contaminación del agua
- Metas específicas del ODS 6
- **Mapa interactivo con datos reales y verificables**
- **Estadísticas oficiales de 8 regiones críticas**
- **Fuentes oficiales: IDEAM, DANE, DNP, CARs**

## 🗺️ Mapa Interactivo

### Datos Oficiales Incluidos
- **207 municipios en riesgo** (IDEAM 2022)
- **17 millones de colombianos afectados** (Defensoría del Pueblo)
- **74% acceso nacional al agua** (ODS 6 Data Portal)
- **8 regiones analizadas** con datos específicos por departamento

### Fuentes Verificables
- Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM)
- Departamento Administrativo Nacional de Estadística (DANE)
- Departamento Nacional de Planeación (DNP)
- Superintendencia de Servicios Públicos
- Corporaciones Autónomas Regionales (CARs)
- ODS 6 Data Portal - Colombia

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerir mejoras.

## 📜 Licencia

MIT License - ver archivo LICENSE para más detalles.