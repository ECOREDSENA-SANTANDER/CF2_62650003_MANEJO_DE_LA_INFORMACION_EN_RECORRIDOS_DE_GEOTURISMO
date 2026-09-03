export default {
  global: {
    Name: 'Diseño, planificación y ejecución de recorridos geoturísticos',
    Description:
      'Cada recorrido geoturístico inicia con una buena planeación: conocer el territorio, definir el objetivo, identificar el grupo, diseñar el guion, prever riesgos y orientar la experiencia. Esta formación guía al aprendiz en la planificación y ejecución de recorridos seguros, organizados e interpretativos, que promuevan la valoración del patrimonio geológico y la conservación del entorno.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Diseño del recorrido geoturístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Perfil de usuario en el geoturismo: tipologías, características, segmentos e importancia para la guianza turística',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Información e interpretación del territorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Fuentes de información y manifestaciones culturales del territorio',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Guion del recorrido e interpretación del patrimonio: relatos, diálogos, actividades, redacción y validación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Planeación técnica y operativa del recorrido',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Servicio y recursos para la guianza: protocolos, ciclo de servicio, estándares, recursos humanos, financieros, materiales y equipos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Cartografía aplicada al turismo: mapas, interpretación, herramientas de orientación y levantamiento de rutas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Plan de acción del recorrido: componentes, estructura e itinerario',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de riesgos y contingencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Factores de riesgo, medidas preventivas, correctivas y protocolos de seguridad',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Plan de contingencia: conceptos, componentes, estructura y respuesta ante eventualidades',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Ejecución e interpretación del recorrido geoturístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Manejo de grupo: técnicas, estrategias y participación de los usuarios',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Técnica narrativa y comunicación no verbal: persuasión, elementos comunicativos y experiencia interpretativa',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Geoconservación, evaluación y mejora del recorrido',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo:
              'Geoconservación: medidas de preservación, estrategias, acciones y principios de No Dejar Rastro',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Evaluación y seguimiento: técnicas, instrumentos y oportunidades de mejora',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/62650003_CF02_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Comunicación no verbal',
      significado:
        'Forma de transmitir mensajes mediante gestos, postura, mirada, expresión facial y uso del espacio.',
    },
    {
      termino: 'Geoconservación',
      significado:
        'Acciones y estrategias dirigidas a proteger y valorar el patrimonio geológico.',
    },
    {
      termino: 'Geodiversidad',
      significado:
        'Variedad de elementos geológicos, geomorfológicos y procesos naturales que conforman el territorio.',
    },
    {
      termino: 'Georuta',
      significado:
        'Trayecto organizado que conecta geositios y otros atractivos con fines educativos, científicos y turísticos.',
    },
    {
      termino: 'Geositio',
      significado:
        'Lugar con valor geológico especial por su importancia científica, educativa, paisajística o patrimonial.',
    },
    {
      termino: 'Guion turístico',
      significado:
        'Herramienta metodológica que organiza la información y la forma en que el guía la comunica al visitante.',
    },
    {
      termino: 'Interpretación del patrimonio',
      significado:
        'Proceso de comunicación que busca hacer comprensible, interesante y significativa la relación entre el visitante y el patrimonio.',
    },
    {
      termino: 'Manejo de grupo',
      significado:
        'Capacidad del guía para organizar, orientar y conducir visitantes con seguridad, orden y participación.',
    },
    {
      termino: 'Patrimonio geológico',
      significado:
        'Conjunto de elementos de la geodiversidad que tienen valor excepcional y deben ser conservados.',
    },
    {
      termino: 'Plan de acción',
      significado:
        'Instrumento que organiza objetivos, actividades, tiempos, recursos y responsables de un recorrido.',
    },
    {
      termino: 'Plan de contingencia',
      significado:
        'Conjunto de acciones previstas para responder a riesgos, emergencias o incidentes durante el servicio.',
    },
    {
      termino: 'Protocolo de seguridad',
      significado:
        'Normas y procedimientos que orientan la prevención y atención de riesgos en una actividad turística.',
    },
    {
      termino: 'Recorrido geoturístico',
      significado:
        'Ruta o itinerario diseñado para divulgar conocimiento geológico y promover la conservación del territorio.',
    },
    {
      termino: 'Riesgo turístico',
      significado:
        'Posibilidad de que ocurra una situación que afecte la seguridad, bienestar o experiencia del visitante.',
    },
    {
      termino: '<em>Storytelling</em>',
      significado:
        'Técnica narrativa que usa historias para conectar emocionalmente al visitante con el destino.',
    },
  ],
  referencias: [
    {
      referencia:
        'Addis Tessema, G., van der Borg, J., Van Rompaey, A., Van Passel, S., Adgo, A., Sewnet Minale, A., Asrese, K., Frankl, A., & Poesen, J. (2022). Benefit segmentation of tourists to geosites and its implications for sustainable development of geotourism in the southern Lake Tana region, Ethiopia. Sustainability, 14(6), 3411.',
      link: '',
    },
    {
      referencia:
        'Alcaldia Mayor de Bogota. (2018). Seguridad turistica: Recomendaciones para hacer recorridos seguros en el sendero Las Delicias.',
      link: '',
    },
    {
      referencia:
        'Bernal Torres, C. A. (2010). Metodologia de la investigacion (3.ª ed.). Pearson Educacion.',
      link: '',
    },
    {
      referencia:
        'Brilha, J. (2015). Inventory and quantitative assessment of geosites and geodiversity sites: A review. Geoheritage, 8(2), 119-134.',
      link: '',
    },
    {
      referencia:
        'Carcavilla, L., Duran, J. J., Garcia-Cortes, A., Lopez-Martinez, J., & Rabano, I. (2014). Geological heritage and geoconservation in Spain: Past, present, and future. Geoheritage, 6(1), 75-91.',
      link: '',
    },
    {
      referencia:
        'Dill, H. G., Khishigsuren, S., Stebich, M., Bugarin, J., & Lopez-Mendoza, M. C. (2020). The "badland trilogy" of the Desierto de la Tatacoa, upper Magdalena Valley, Colombia. Catena, 196, 104830.',
      link: '',
    },
    {
      referencia:
        'Dowling, R. K., & Newsome, D. (Eds.). (2018). Handbook of geotourism. Edward Elgar Publishing.',
      link: '',
    },
    {
      referencia:
        'ESATUR Formacion. (s. f.). La comunicacion como herramienta del guia turistico: definicion y tipos.',
      link: '',
    },
    {
      referencia:
        'Gonzalez Molina, J. F., Rodriguez, M., Perez, L., Gomez, A., & Sanchez, D. (2023). Planificacion y ejecucion de actividades de guianza turistica en el departamento de Caldas. Servicio Nacional de Aprendizaje (SENA); Centro de Comercio y Servicios.',
      link: '',
    },
    {
      referencia:
        'Guerra Rosado, F. J. (2017). La comunicacion en interpretacion del patrimonio. Carpeta Informativa del CENEAM.',
      link: '',
    },
    {
      referencia:
        'Ham, S. H. (2013). Interpretation: Making a difference on purpose. Fulcrum Publishing.',
      link: '',
    },
    {
      referencia:
        'Henriques, M. H., Pena dos Reis, R., Brilha, J., & Mota, T. (2011). Geoconservation as an emerging geoscience. Geoheritage, 3(2), 117-128.',
      link: '',
    },
    {
      referencia:
        'Icontec. (2014). Norma Tecnica Sectorial Colombiana NTS-GT 001: Prestacion del servicio de guianza de acuerdo con lo requerido por el usuario. Instituto Colombiano de Normas Tecnicas y Certificacion.',
      link: '',
    },
    {
      referencia:
        'Leave No Trace. (s. f.). Los 7 principios de No Deje Rastro.',
      link: '',
    },
    {
      referencia:
        'Marin-Ceron, M. I., Hermelin, M., Londono, A. C., Restrepo, J. J., Montes, C., Toro, J., Tavera, M. A., & otros. (2022). Geoconservacion en Colombia: Aproximaciones teoricas-practicas (Vol. 1). Catedra del Agua; Convenio Interinstitucional.',
      link: '',
    },
    {
      referencia: 'Raisz, E. (1985). Cartografia (6.ª ed.). Ediciones Omega.',
      link: '',
    },
    {
      referencia:
        'Universidad Europea. (2022, 19 de octubre). Que es el storytelling y para que sirve.',
      link: '',
    },
    {
      referencia:
        'Vargas-Hernandez, J. G., & Cruz-Rodriguez, M. T. (2021). Diagnostico de riesgo en el sector turistico latinoamericano para el trienio 2020-2022. Revista Cientifica General Jose Maria Cordova, 19(34), 332-353.',
      link: '',
    },
    {
      referencia:
        'Villar Bernardo, J. M. (s. f.). Actividades al aire libre. Escuela Alarca.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Celmira Pereira Franco',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Teran Carvajal',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
