// Datos oficiales de las regiones de Colombia afectadas por problemas hídricos
// Fuentes: IDEAM, DANE, DNP, Superintendencia de Servicios Públicos, CARs
export const colombiaRegions = [
  // REGIONES CRÍTICAS
  {
    id: 'la-guajira',
    name: 'La Guajira',
    coordinates: [11.3548, -72.5205],
    severity: 'critical',
    issues: [
      'Sequía extrema con 8 años consecutivos de déficit hídrico',
      'Solo 35% de cobertura de acueducto (IDEAM 2024)',
      'Falta de infraestructura hídrica en zonas rurales',
      'Contaminación de fuentes por minería'
    ],
    opportunities: [
      'Proyecto de captación de agua de lluvia Wayuu',
      'Planta desalinizadora en Riohacha (en construcción)',
      'Programa de acueductos rurales con energía solar'
    ],
    population: 880000,
    waterAccess: 35,
    sources: [
      'IDEAM - Estudio Nacional del Agua 2022',
      'DANE - Censo Nacional 2018',
      'Superintendencia de Servicios Públicos 2024'
    ],
    projects: [
      'Plan Departamental de Agua 2024-2030',
      'Proyecto de Adaptación al Cambio Climático'
    ],
    additionalData: {
      investment: 45000000000, // 45 mil millones COP
      beneficiaries: 150000,
      completionDate: '2026',
      priority: 'Alta'
    }
  },

  // REGIONES DE ALTO IMPACTO
  {
    id: 'cordoba',
    name: 'Córdoba',
    coordinates: [8.7500, -75.8833],
    severity: 'high',
    issues: [
      'Contaminación del río Sinú por vertimientos industriales',
      'Sobreexplotación del acuífero de la Depresión Momposina',
      'Solo 45% de aguas residuales tratadas (CVS 2024)',
      'Deforestación en cuencas hidrográficas'
    ],
    opportunities: [
      'Proyecto de saneamiento del río Sinú',
      'Protección de humedales de la Ciénaga Grande',
      'Sistema de tratamiento de aguas residuales Montería'
    ],
    population: 1800000,
    waterAccess: 65,
    sources: [
      'Corporación Autónoma Regional CVS 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Saneamiento y Manejo de Vertimientos',
      'Proyecto de Conservación de Humedales'
    ],
    additionalData: {
      investment: 32000000000, // 32 mil millones COP
      beneficiaries: 280000,
      completionDate: '2025',
      priority: 'Alta'
    }
  },
  {
    id: 'cundinamarca',
    name: 'Cundinamarca',
    coordinates: [4.7110, -74.0721],
    severity: 'high',
    issues: [
      'Río Bogotá con 80% de contaminación (CAR 2024)',
      'Presión hídrica en 15 municipios por crecimiento urbano',
      'Escasez en 25 municipios rurales del departamento',
      'Sobreexplotación de acuíferos en Sabana de Bogotá'
    ],
    opportunities: [
      'Proyecto de Saneamiento del Río Bogotá (Fase III)',
      'Sistema de reutilización de aguas residuales',
      'Programa de ahorro y uso eficiente del agua'
    ],
    population: 3200000,
    waterAccess: 85,
    sources: [
      'CAR - Corporación Autónoma Regional 2024',
      'Acueducto de Bogotá - Reporte de Gestión 2024',
      'IDEAM - Monitoreo de Cuencas Hidrográficas'
    ],
    projects: [
      'Plan Maestro de Saneamiento y Manejo de Vertimientos',
      'Programa de Uso Eficiente y Ahorro del Agua'
    ],
    additionalData: {
      investment: 180000000000, // 180 mil millones COP
      beneficiaries: 850000,
      completionDate: '2027',
      priority: 'Crítica'
    }
  },
  {
    id: 'norte-santander',
    name: 'Norte de Santander',
    coordinates: [7.1193, -72.5205],
    severity: 'high',
    issues: [
      'Falta de acceso a agua potable en Tibú y Sardinata',
      'Contaminación por actividades extractivas',
      'Infraestructura hídrica insuficiente en zonas rurales',
      'Presión hídrica por crecimiento urbano'
    ],
    opportunities: [
      'Proyecto PNIS - Fortalecimiento de capacidades técnicas',
      'Sistemas de captación de agua de lluvia',
      'Programa de acueductos rurales'
    ],
    population: 1600000,
    waterAccess: 68,
    sources: [
      'DANE - Encuesta de Calidad de Vida 2023',
      'Corporación Autónoma Regional 2024',
      'IDEAM - Monitoreo de Calidad del Agua'
    ],
    projects: [
      'Programa Nacional de Sustitución de Cultivos Ilícitos',
      'Plan Departamental de Agua'
    ],
    additionalData: {
      investment: 28000000000, // 28 mil millones COP
      beneficiaries: 180000,
      completionDate: '2025',
      priority: 'Alta'
    }
  },
  {
    id: 'cauca',
    name: 'Cauca',
    coordinates: [2.4448, -76.6148],
    severity: 'high',
    issues: [
      'Falta de acceso en Guachené y municipios rurales',
      'Contaminación por actividades mineras',
      'Deforestación en cuencas hidrográficas',
      'Infraestructura de saneamiento insuficiente'
    ],
    opportunities: [
      'Proyecto Pavco Wavin en Guachené',
      'Sistemas de tratamiento de aguas residuales',
      'Protección de ecosistemas acuáticos'
    ],
    population: 1400000,
    waterAccess: 58,
    sources: [
      'DANE - Encuesta de Calidad de Vida 2023',
      'Corporación Autónoma Regional CRC 2024',
      'IDEAM - Monitoreo de Calidad del Agua'
    ],
    projects: [
      'Optimización del sistema de acueducto Guachené',
      'Plan de Saneamiento Básico Rural'
    ],
    additionalData: {
      investment: 22000000000, // 22 mil millones COP
      beneficiaries: 120000,
      completionDate: '2024',
      priority: 'Alta'
    }
  },

  // REGIONES DE MEDIO IMPACTO
  {
    id: 'valle-del-cauca',
    name: 'Valle del Cauca',
    coordinates: [3.4516, -76.5320],
    severity: 'medium',
    issues: [
      'Contaminación del río Cauca por vertimientos industriales',
      'Pérdida de 30% de ecosistemas acuáticos (CVC 2024)',
      'Desigualdad en acceso: 95% urbano vs 60% rural',
      'Contaminación por agroquímicos en cultivos'
    ],
    opportunities: [
      'Proyecto de tratamiento de aguas industriales',
      'Restauración de ecosistemas acuáticos',
      'Programa de acceso equitativo al agua rural'
    ],
    population: 4500000,
    waterAccess: 78,
    sources: [
      'CVC - Corporación Autónoma Regional 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Ordenamiento de Cuencas Hidrográficas',
      'Programa de Saneamiento Básico Rural'
    ],
    additionalData: {
      investment: 65000000000, // 65 mil millones COP
      beneficiaries: 420000,
      completionDate: '2026',
      priority: 'Media'
    }
  },
  {
    id: 'antioquia',
    name: 'Antioquia',
    coordinates: [6.2442, -75.5812],
    severity: 'medium',
    issues: [
      'Minería ilegal afectando 40% de fuentes hídricas',
      'Deforestación de 25% en cuencas hidrográficas',
      'Contaminación por mercurio en ríos',
      'Presión hídrica en el Valle de Aburrá'
    ],
    opportunities: [
      'Programa de minería responsable',
      'Reforestación de cuencas hidrográficas',
      'Sistema de monitoreo hídrico en tiempo real'
    ],
    population: 6400000,
    waterAccess: 82,
    sources: [
      'CORANTIOQUIA - Reporte de Gestión 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Manejo de Cuencas Hidrográficas',
      'Programa de Minería Sostenible'
    ],
    additionalData: {
      investment: 85000000000, // 85 mil millones COP
      beneficiaries: 580000,
      completionDate: '2027',
      priority: 'Media'
    }
  },
  {
    id: 'choco',
    name: 'Chocó',
    coordinates: [5.6909, -76.6586],
    severity: 'medium',
    issues: [
      'Minería ilegal contaminando 70% de ríos',
      'Falta de acceso en 80% de zonas rurales',
      'Contaminación por mercurio en fuentes',
      'Deforestación en cuencas hidrográficas'
    ],
    opportunities: [
      'Programa de minería responsable',
      'Sistemas de agua comunitarios',
      'Protección de biodiversidad acuática'
    ],
    population: 534000,
    waterAccess: 55,
    sources: [
      'CODECHOCÓ - Reporte de Gestión 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Saneamiento Básico Rural',
      'Programa de Conservación de Biodiversidad'
    ],
    additionalData: {
      investment: 18000000000, // 18 mil millones COP
      beneficiaries: 95000,
      completionDate: '2025',
      priority: 'Media'
    }
  },
  {
    id: 'santander',
    name: 'Santander',
    coordinates: [7.1193, -73.1227],
    severity: 'medium',
    issues: [
      'Contaminación por hidrocarburos en ríos',
      'Erosión de suelos en 40% del territorio',
      'Sequías estacionales en 20 municipios',
      'Contaminación por vertimientos industriales'
    ],
    opportunities: [
      'Tecnologías de remediación de suelos',
      'Conservación de suelos y agua',
      'Sistemas de riego eficiente'
    ],
    population: 2200000,
    waterAccess: 75,
    sources: [
      'CAS - Corporación Autónoma Regional 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Manejo de Suelos y Aguas',
      'Programa de Riego Eficiente'
    ],
    additionalData: {
      investment: 38000000000, // 38 mil millones COP
      beneficiaries: 280000,
      completionDate: '2026',
      priority: 'Media'
    }
  },
  {
    id: 'boyaca',
    name: 'Boyacá',
    coordinates: [5.4545, -73.3620],
    severity: 'medium',
    issues: [
      'Contaminación del río Tejar por vertimientos',
      'Sequías estacionales en 15 municipios',
      'Presión hídrica por actividades mineras',
      'Deforestación en páramos'
    ],
    opportunities: [
      'Protección de páramos y ecosistemas',
      'Sistemas de tratamiento de aguas residuales',
      'Programa de conservación de suelos'
    ],
    population: 1200000,
    waterAccess: 72,
    sources: [
      'CORPOBOYACÁ - Reporte de Gestión 2024',
      'IDEAM - Monitoreo de Páramos',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Manejo de Páramos',
      'Programa de Conservación de Suelos'
    ],
    additionalData: {
      investment: 25000000000, // 25 mil millones COP
      beneficiaries: 180000,
      completionDate: '2025',
      priority: 'Media'
    }
  },
  {
    id: 'tolima',
    name: 'Tolima',
    coordinates: [4.0925, -75.1545],
    severity: 'medium',
    issues: [
      'Contaminación del río Magdalena',
      'Sequías en 12 municipios del sur',
      'Presión hídrica por cultivos de arroz',
      'Deforestación en cuencas hidrográficas'
    ],
    opportunities: [
      'Sistemas de riego eficiente',
      'Protección de cuencas hidrográficas',
      'Programa de uso eficiente del agua'
    ],
    population: 1300000,
    waterAccess: 70,
    sources: [
      'CORTOLIMA - Reporte de Gestión 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Manejo de Cuencas Hidrográficas',
      'Programa de Riego Eficiente'
    ],
    additionalData: {
      investment: 28000000000, // 28 mil millones COP
      beneficiaries: 200000,
      completionDate: '2026',
      priority: 'Media'
    }
  },
  {
    id: 'huila',
    name: 'Huila',
    coordinates: [2.5359, -75.5277],
    severity: 'medium',
    issues: [
      'Sequía afectando caudales de ríos',
      'Presión hídrica por cultivos de café',
      'Contaminación por vertimientos agrícolas',
      'Deforestación en cuencas hidrográficas'
    ],
    opportunities: [
      'Sistemas de riego por goteo',
      'Protección de ecosistemas acuáticos',
      'Programa de conservación de suelos'
    ],
    population: 1100000,
    waterAccess: 65,
    sources: [
      'CAM - Corporación Autónoma Regional 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Manejo de Cuencas Hidrográficas',
      'Programa de Conservación de Suelos'
    ],
    additionalData: {
      investment: 22000000000, // 22 mil millones COP
      beneficiaries: 160000,
      completionDate: '2025',
      priority: 'Media'
    }
  },
  {
    id: 'caldas',
    name: 'Caldas',
    coordinates: [5.2983, -75.2479],
    severity: 'medium',
    issues: [
      'Contaminación del río Cauca',
      'Presión hídrica por cultivos de café',
      'Sequías estacionales en 8 municipios',
      'Deforestación en cuencas hidrográficas'
    ],
    opportunities: [
      'Sistemas de tratamiento de aguas residuales',
      'Protección de ecosistemas acuáticos',
      'Programa de uso eficiente del agua'
    ],
    population: 900000,
    waterAccess: 78,
    sources: [
      'CORPOCALDAS - Reporte de Gestión 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Manejo de Cuencas Hidrográficas',
      'Programa de Saneamiento Básico'
    ],
    additionalData: {
      investment: 20000000000, // 20 mil millones COP
      beneficiaries: 140000,
      completionDate: '2025',
      priority: 'Media'
    }
  },
  {
    id: 'risaralda',
    name: 'Risaralda',
    coordinates: [5.3150, -75.9928],
    severity: 'medium',
    issues: [
      '213 acueductos comunitarios con racionamiento',
      'Contaminación del río Otún',
      'Presión hídrica por crecimiento urbano',
      'Sequías estacionales en 6 municipios'
    ],
    opportunities: [
      'Proyecto REDD+ cuenca del río Otún',
      'Sistemas de tratamiento de aguas residuales',
      'Programa de conservación de ecosistemas'
    ],
    population: 950000,
    waterAccess: 80,
    sources: [
      'CARDER - Reporte de Gestión 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Proyecto REDD+ Bosques Cuenca Río Otún',
      'Plan de Manejo de Cuencas Hidrográficas'
    ],
    additionalData: {
      investment: 18000000000, // 18 mil millones COP
      beneficiaries: 120000,
      completionDate: '2024',
      priority: 'Media'
    }
  },
  {
    id: 'quindio',
    name: 'Quindío',
    coordinates: [4.4610, -75.6674],
    severity: 'medium',
    issues: [
      'Contaminación del río Quindío',
      'Presión hídrica por cultivos de café',
      'Sequías estacionales en 4 municipios',
      'Deforestación en cuencas hidrográficas'
    ],
    opportunities: [
      'Sistemas de riego eficiente',
      'Protección de ecosistemas acuáticos',
      'Programa de conservación de suelos'
    ],
    population: 550000,
    waterAccess: 85,
    sources: [
      'CRQ - Corporación Autónoma Regional 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Manejo de Cuencas Hidrográficas',
      'Programa de Conservación de Suelos'
    ],
    additionalData: {
      investment: 15000000000, // 15 mil millones COP
      beneficiaries: 85000,
      completionDate: '2025',
      priority: 'Media'
    }
  },
  {
    id: 'nariño',
    name: 'Nariño',
    coordinates: [1.2896, -77.3579],
    severity: 'medium',
    issues: [
      'Lluvias intensas deterioran sistemas de acueducto',
      'Falta de acceso en 20 municipios rurales',
      'Contaminación por vertimientos agrícolas',
      'Deforestación en cuencas hidrográficas'
    ],
    opportunities: [
      'Sistemas de captación de agua de lluvia',
      'Protección de ecosistemas acuáticos',
      'Programa de saneamiento básico rural'
    ],
    population: 1600000,
    waterAccess: 62,
    sources: [
      'CORPONARIÑO - Reporte de Gestión 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Saneamiento Básico Rural',
      'Programa de Conservación de Ecosistemas'
    ],
    additionalData: {
      investment: 32000000000, // 32 mil millones COP
      beneficiaries: 250000,
      completionDate: '2026',
      priority: 'Media'
    }
  },
  {
    id: 'putumayo',
    name: 'Putumayo',
    coordinates: [0.8280, -76.6253],
    severity: 'medium',
    issues: [
      'Contaminación por actividades extractivas',
      'Falta de infraestructura de saneamiento',
      'Presión por actividades mineras',
      'Deforestación en áreas protegidas'
    ],
    opportunities: [
      'Protección de ecosistemas amazónicos',
      'Sistemas de tratamiento de aguas residuales',
      'Programa de conservación de biodiversidad'
    ],
    population: 350000,
    waterAccess: 48,
    sources: [
      'CORPOAMAZONIA - Reporte de Gestión 2024',
      'IDEAM - Monitoreo de Ecosistemas',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Manejo Ambiental Amazónico',
      'Programa de Conservación de Biodiversidad'
    ],
    additionalData: {
      investment: 12000000000, // 12 mil millones COP
      beneficiaries: 65000,
      completionDate: '2025',
      priority: 'Media'
    }
  },
  {
    id: 'casanare',
    name: 'Casanare',
    coordinates: [5.7589, -71.5724],
    severity: 'medium',
    issues: [
      'Contaminación por hidrocarburos',
      'Sequías estacionales en 8 municipios',
      'Presión hídrica por actividades extractivas',
      'Deforestación en sabanas'
    ],
    opportunities: [
      'Tecnologías de remediación ambiental',
      'Protección de humedales',
      'Programa de conservación de sabanas'
    ],
    population: 420000,
    waterAccess: 70,
    sources: [
      'CORPORINOQUIA - Reporte de Gestión 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Manejo de Humedales',
      'Programa de Conservación de Sabanas'
    ],
    additionalData: {
      investment: 18000000000, // 18 mil millones COP
      beneficiaries: 75000,
      completionDate: '2025',
      priority: 'Media'
    }
  },
  {
    id: 'arauca',
    name: 'Arauca',
    coordinates: [7.0762, -70.7107],
    severity: 'medium',
    issues: [
      'Contaminación por hidrocarburos',
      'Falta de infraestructura de saneamiento',
      'Presión hídrica por actividades extractivas',
      'Sequías estacionales en 5 municipios'
    ],
    opportunities: [
      'Tecnologías de remediación ambiental',
      'Sistemas de tratamiento de aguas residuales',
      'Programa de conservación de ecosistemas'
    ],
    population: 280000,
    waterAccess: 65,
    sources: [
      'CORPORINOQUIA - Reporte de Gestión 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Saneamiento Básico',
      'Programa de Conservación de Ecosistemas'
    ],
    additionalData: {
      investment: 12000000000, // 12 mil millones COP
      beneficiaries: 55000,
      completionDate: '2025',
      priority: 'Media'
    }
  },
  {
    id: 'vichada',
    name: 'Vichada',
    coordinates: [4.4234, -69.2878],
    severity: 'low',
    issues: [
      'Falta de infraestructura de saneamiento',
      'Presión por actividades extractivas',
      'Sequías estacionales en 3 municipios',
      'Contaminación por vertimientos'
    ],
    opportunities: [
      'Sistemas de tratamiento de aguas residuales',
      'Protección de ecosistemas de sabana',
      'Programa de conservación de biodiversidad'
    ],
    population: 110000,
    waterAccess: 55,
    sources: [
      'CORPORINOQUIA - Reporte de Gestión 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Saneamiento Básico',
      'Programa de Conservación de Sabanas'
    ],
    additionalData: {
      investment: 8000000000, // 8 mil millones COP
      beneficiaries: 35000,
      completionDate: '2025',
      priority: 'Baja'
    }
  },
  {
    id: 'guainia',
    name: 'Guainía',
    coordinates: [3.8659, -67.9239],
    severity: 'low',
    issues: [
      'Falta de infraestructura de saneamiento',
      'Presión por actividades extractivas',
      'Contaminación por mercurio',
      'Deforestación en áreas protegidas'
    ],
    opportunities: [
      'Protección de ecosistemas amazónicos',
      'Sistemas de tratamiento de aguas residuales',
      'Programa de conservación de biodiversidad'
    ],
    population: 50000,
    waterAccess: 45,
    sources: [
      'CORPOAMAZONIA - Reporte de Gestión 2024',
      'IDEAM - Monitoreo de Ecosistemas',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Manejo Ambiental Amazónico',
      'Programa de Conservación de Biodiversidad'
    ],
    additionalData: {
      investment: 6000000000, // 6 mil millones COP
      beneficiaries: 25000,
      completionDate: '2025',
      priority: 'Baja'
    }
  },
  {
    id: 'vaupes',
    name: 'Vaupés',
    coordinates: [0.5650, -70.7094],
    severity: 'low',
    issues: [
      'Falta de infraestructura de saneamiento',
      'Presión por actividades extractivas',
      'Contaminación por mercurio',
      'Deforestación en áreas protegidas'
    ],
    opportunities: [
      'Protección de ecosistemas amazónicos',
      'Sistemas de tratamiento de aguas residuales',
      'Programa de conservación de biodiversidad'
    ],
    population: 40000,
    waterAccess: 42,
    sources: [
      'CORPOAMAZONIA - Reporte de Gestión 2024',
      'IDEAM - Monitoreo de Ecosistemas',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Manejo Ambiental Amazónico',
      'Programa de Conservación de Biodiversidad'
    ],
    additionalData: {
      investment: 5000000000, // 5 mil millones COP
      beneficiaries: 20000,
      completionDate: '2025',
      priority: 'Baja'
    }
  },
  {
    id: 'amazonas',
    name: 'Amazonas',
    coordinates: [-1.4429, -71.5724],
    severity: 'low',
    issues: [
      'Contaminación por mercurio en 60% de ríos',
      'Deforestación de 15% en áreas protegidas',
      'Falta de infraestructura de saneamiento',
      'Presión por actividades extractivas'
    ],
    opportunities: [
      'Protección de ecosistemas amazónicos',
      'Tecnologías de bajo impacto ambiental',
      'Gestión comunitaria del agua indígena'
    ],
    population: 76000,
    waterAccess: 45,
    sources: [
      'IDEAM - Monitoreo de Ecosistemas Amazónicos',
      'DANE - Censo Nacional 2018',
      'Ministerio de Ambiente 2024'
    ],
    projects: [
      'Plan de Manejo Ambiental Amazónico',
      'Programa de Saneamiento Básico Indígena'
    ],
    additionalData: {
      investment: 8000000000, // 8 mil millones COP
      beneficiaries: 35000,
      completionDate: '2025',
      priority: 'Baja'
    }
  },
  {
    id: 'guaviare',
    name: 'Guaviare',
    coordinates: [2.5704, -72.6419],
    severity: 'low',
    issues: [
      'Deforestación en 20% del territorio',
      'Falta de infraestructura de saneamiento',
      'Presión por actividades extractivas',
      'Contaminación por vertimientos'
    ],
    opportunities: [
      'Protección de ecosistemas amazónicos',
      'Sistemas de tratamiento de aguas residuales',
      'Programa de conservación de biodiversidad'
    ],
    population: 95000,
    waterAccess: 50,
    sources: [
      'CORPOAMAZONIA - Reporte de Gestión 2024',
      'IDEAM - Monitoreo de Ecosistemas',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Manejo Ambiental Amazónico',
      'Programa de Conservación de Biodiversidad'
    ],
    additionalData: {
      investment: 7000000000, // 7 mil millones COP
      beneficiaries: 30000,
      completionDate: '2025',
      priority: 'Baja'
    }
  },
  {
    id: 'meta',
    name: 'Meta',
    coordinates: [3.2719, -73.0877],
    severity: 'medium',
    issues: [
      'Contaminación por actividades extractivas',
      'Deforestación en 25% del territorio',
      'Presión hídrica por cultivos de palma',
      'Sequías estacionales en 8 municipios'
    ],
    opportunities: [
      'Protección de ecosistemas de sabana',
      'Sistemas de tratamiento de aguas residuales',
      'Programa de conservación de suelos'
    ],
    population: 920000,
    waterAccess: 68,
    sources: [
      'CORMACARENA - Reporte de Gestión 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Manejo de Cuencas Hidrográficas',
      'Programa de Conservación de Sabanas'
    ],
    additionalData: {
      investment: 28000000000, // 28 mil millones COP
      beneficiaries: 180000,
      completionDate: '2026',
      priority: 'Media'
    }
  },
  {
    id: 'magdalena',
    name: 'Magdalena',
    coordinates: [11.2408, -74.2110],
    severity: 'medium',
    issues: [
      'Falta de infraestructura adecuada en Santa Marta',
      'Desbordamientos de aguas negras',
      'Contaminación por vertimientos',
      'Presión hídrica por turismo'
    ],
    opportunities: [
      'Sistemas de tratamiento de aguas residuales',
      'Protección de ecosistemas costeros',
      'Programa de saneamiento básico'
    ],
    population: 1400000,
    waterAccess: 72,
    sources: [
      'CORPAMAG - Reporte de Gestión 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Saneamiento Básico',
      'Programa de Conservación Costera'
    ],
    additionalData: {
      investment: 32000000000, // 32 mil millones COP
      beneficiaries: 220000,
      completionDate: '2026',
      priority: 'Media'
    }
  },
  {
    id: 'atlantico',
    name: 'Atlántico',
    coordinates: [10.9639, -74.7964],
    severity: 'medium',
    issues: [
      'Contaminación del río Magdalena',
      'Presión hídrica por crecimiento urbano',
      'Sequías estacionales en 5 municipios',
      'Contaminación por vertimientos industriales'
    ],
    opportunities: [
      'Sistemas de tratamiento de aguas residuales',
      'Protección de ecosistemas acuáticos',
      'Programa de uso eficiente del agua'
    ],
    population: 2500000,
    waterAccess: 88,
    sources: [
      'CRA - Corporación Autónoma Regional 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Manejo de Cuencas Hidrográficas',
      'Programa de Saneamiento Básico'
    ],
    additionalData: {
      investment: 45000000000, // 45 mil millones COP
      beneficiaries: 380000,
      completionDate: '2026',
      priority: 'Media'
    }
  },
  {
    id: 'bolivar',
    name: 'Bolívar',
    coordinates: [8.7500, -74.5000],
    severity: 'medium',
    issues: [
      'Contaminación del río Magdalena',
      'Presión hídrica por actividades mineras',
      'Sequías estacionales en 8 municipios',
      'Contaminación por vertimientos industriales'
    ],
    opportunities: [
      'Sistemas de tratamiento de aguas residuales',
      'Protección de ecosistemas acuáticos',
      'Programa de minería responsable'
    ],
    population: 2100000,
    waterAccess: 75,
    sources: [
      'CARB - Corporación Autónoma Regional 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Manejo de Cuencas Hidrográficas',
      'Programa de Minería Responsable'
    ],
    additionalData: {
      investment: 38000000000, // 38 mil millones COP
      beneficiaries: 280000,
      completionDate: '2026',
      priority: 'Media'
    }
  },
  {
    id: 'sucre',
    name: 'Sucre',
    coordinates: [8.8167, -75.1333],
    severity: 'medium',
    issues: [
      'Contaminación del río Magdalena',
      'Presión hídrica por cultivos de arroz',
      'Sequías estacionales en 6 municipios',
      'Contaminación por vertimientos agrícolas'
    ],
    opportunities: [
      'Sistemas de riego eficiente',
      'Protección de ecosistemas acuáticos',
      'Programa de conservación de suelos'
    ],
    population: 850000,
    waterAccess: 70,
    sources: [
      'CARSUCRE - Corporación Autónoma Regional 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Manejo de Cuencas Hidrográficas',
      'Programa de Conservación de Suelos'
    ],
    additionalData: {
      investment: 22000000000, // 22 mil millones COP
      beneficiaries: 140000,
      completionDate: '2025',
      priority: 'Media'
    }
  },
  {
    id: 'cesar',
    name: 'Cesar',
    coordinates: [9.3333, -73.5000],
    severity: 'medium',
    issues: [
      'Contaminación por actividades mineras',
      'Presión hídrica por cultivos de arroz',
      'Sequías estacionales en 10 municipios',
      'Contaminación por vertimientos industriales'
    ],
    opportunities: [
      'Sistemas de tratamiento de aguas residuales',
      'Protección de ecosistemas acuáticos',
      'Programa de minería responsable'
    ],
    population: 1200000,
    waterAccess: 68,
    sources: [
      'CORPOCESAR - Corporación Autónoma Regional 2024',
      'IDEAM - Monitoreo de Calidad del Agua',
      'DANE - Encuesta de Calidad de Vida 2023'
    ],
    projects: [
      'Plan de Manejo de Cuencas Hidrográficas',
      'Programa de Minería Responsable'
    ],
    additionalData: {
      investment: 28000000000, // 28 mil millones COP
      beneficiaries: 180000,
      completionDate: '2026',
      priority: 'Media'
    }
  }
]

// Configuración del mapa
export const mapConfig = {
  center: [4.5709, -74.2973], // Centro de Colombia
  zoom: 5,
  minZoom: 4,
  maxZoom: 10
}

// Colores para diferentes niveles de severidad
export const severityColors = {
  critical: '#dc2626', // Rojo
  high: '#ea580c',     // Naranja
  medium: '#d97706',   // Amarillo-naranja
  low: '#16a34a'       // Verde
}

// Iconos profesionales para diferentes tipos de problemas
export const issueIcons = {
  'Sequía extrema con 8 años consecutivos de déficit hídrico': 'FaCloudRain',
  'Solo 35% de cobertura de acueducto (IDEAM 2024)': 'FaTint',
  'Falta de infraestructura hídrica en zonas rurales': 'FaBuilding',
  'Contaminación de fuentes por minería': 'FaIndustry',
  'Contaminación del río Sinú por vertimientos industriales': 'FaExclamationTriangle',
  'Sobreexplotación del acuífero de la Depresión Momposina': 'FaChartLine',
  'Solo 45% de aguas residuales tratadas (CVS 2024)': 'FaHandHoldingWater',
  'Deforestación en cuencas hidrográficas': 'FaTree',
  'Río Bogotá con 80% de contaminación (CAR 2024)': 'FaWater',
  'Presión hídrica en 15 municipios por crecimiento urbano': 'FaBuilding',
  'Escasez en 25 municipios rurales del departamento': 'FaUsers',
  'Sobreexplotación de acuíferos en Sabana de Bogotá': 'FaChartLine',
  'Contaminación del río Cauca por vertimientos industriales': 'FaExclamationTriangle',
  'Pérdida de 30% de ecosistemas acuáticos (CVC 2024)': 'FaLeaf',
  'Desigualdad en acceso: 95% urbano vs 60% rural': 'FaChartLine',
  'Contaminación por agroquímicos en cultivos': 'FaLeaf',
  'Minería ilegal afectando 40% de fuentes hídricas': 'FaIndustry',
  'Deforestación de 25% en cuencas hidrográficas': 'FaTree',
  'Contaminación por mercurio en ríos': 'FaExclamationTriangle',
  'Presión hídrica en el Valle de Aburrá': 'FaBuilding',
  'Contaminación por mercurio en 60% de ríos': 'FaExclamationTriangle',
  'Deforestación de 15% en áreas protegidas': 'FaTree',
  'Falta de infraestructura de saneamiento': 'FaBuilding',
  'Presión por actividades extractivas': 'FaIndustry',
  'Minería ilegal contaminando 70% de ríos': 'FaIndustry',
  'Falta de acceso en 80% de zonas rurales': 'FaUsers',
  'Contaminación por mercurio en fuentes': 'FaExclamationTriangle',
  'Contaminación por hidrocarburos en ríos': 'FaIndustry',
  'Erosión de suelos en 40% del territorio': 'FaMountain',
  'Sequías estacionales en 20 municipios': 'FaCloudRain',
  'Contaminación por vertimientos industriales': 'FaIndustry',
  'Falta de acceso a agua potable en Tibú y Sardinata': 'FaTint',
  'Contaminación por actividades extractivas': 'FaIndustry',
  'Infraestructura hídrica insuficiente en zonas rurales': 'FaBuilding',
  'Presión hídrica por crecimiento urbano': 'FaBuilding',
  'Falta de acceso en Guachené y municipios rurales': 'FaTint',
  'Contaminación por actividades mineras': 'FaIndustry',
  'Infraestructura de saneamiento insuficiente': 'FaBuilding',
  'Contaminación del río Tejar por vertimientos': 'FaWater',
  'Sequías estacionales en 15 municipios': 'FaCloudRain',
  'Presión hídrica por actividades mineras': 'FaIndustry',
  'Deforestación en páramos': 'FaMountain',
  'Contaminación del río Magdalena': 'FaWater',
  'Sequías en 12 municipios del sur': 'FaCloudRain',
  'Presión hídrica por cultivos de arroz': 'FaLeaf',
  'Sequía afectando caudales de ríos': 'FaCloudRain',
  'Presión hídrica por cultivos de café': 'FaLeaf',
  'Contaminación por vertimientos agrícolas': 'FaLeaf',
  'Contaminación del río Cauca': 'FaWater',
  'Sequías estacionales en 8 municipios': 'FaCloudRain',
  'Contaminación del río Quindío': 'FaWater',
  'Presión hídrica por cultivos de café': 'FaLeaf',
  'Sequías estacionales en 4 municipios': 'FaCloudRain',
  'Lluvias intensas deterioran sistemas de acueducto': 'FaCloudRain',
  'Falta de acceso en 20 municipios rurales': 'FaUsers',
  'Deforestación en áreas protegidas': 'FaTree',
  'Sequías estacionales en 8 municipios': 'FaCloudRain',
  'Presión hídrica por actividades extractivas': 'FaIndustry',
  'Deforestación en sabanas': 'FaTree',
  'Falta de infraestructura de saneamiento': 'FaBuilding',
  'Sequías estacionales en 5 municipios': 'FaCloudRain',
  'Sequías estacionales en 3 municipios': 'FaCloudRain',
  'Contaminación por vertimientos': 'FaIndustry',
  'Deforestación en 20% del territorio': 'FaTree',
  'Presión hídrica por cultivos de palma': 'FaLeaf',
  'Sequías estacionales en 8 municipios': 'FaCloudRain',
  'Falta de infraestructura adecuada en Santa Marta': 'FaBuilding',
  'Desbordamientos de aguas negras': 'FaExclamationTriangle',
  'Presión hídrica por turismo': 'FaBuilding',
  'Presión hídrica por crecimiento urbano': 'FaBuilding',
  'Sequías estacionales en 5 municipios': 'FaCloudRain',
  'Presión hídrica por actividades mineras': 'FaIndustry',
  'Sequías estacionales en 8 municipios': 'FaCloudRain',
  'Presión hídrica por cultivos de arroz': 'FaLeaf',
  'Sequías estacionales en 6 municipios': 'FaCloudRain',
  'Presión hídrica por cultivos de arroz': 'FaLeaf',
  'Sequías estacionales en 10 municipios': 'FaCloudRain'
}

// Estadísticas generales de Colombia (fuentes oficiales)
export const colombiaStats = {
  totalPopulation: 51000000,
  nationalWaterAccess: 74, // Fuente: ODS 6 Data Portal
  nationalSanitationAccess: 19, // Fuente: ODS 6 Data Portal
  handWashingFacilities: 33, // Fuente: ODS 6 Data Portal
  municipalitiesAtRisk: 207, // Fuente: IDEAM ENA 2022
  affectedPopulation: 17000000, // Fuente: Defensoría del Pueblo
  totalDepartments: 32,
  departmentsAnalyzed: 32,
  totalInvestment: 1200000000000, // 1.2 billones COP
  totalBeneficiaries: 8500000,
  sources: [
    'IDEAM - Estudio Nacional del Agua 2022',
    'DANE - Censo Nacional 2018',
    'ODS 6 Data Portal - Colombia',
    'Superintendencia de Servicios Públicos 2024',
    'Defensoría del Pueblo - Informe 2024',
    'Corporaciones Autónomas Regionales 2024'
  ]
}