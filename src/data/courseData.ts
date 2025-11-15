import type { CourseInfo, Week, GroupMember, OtherGroup } from "@/types/course";

export const courseInfo: CourseInfo = {
  title: "Sistemas Inteligentes – Plan 2018",
  code: "20118086",
  instructor: "Rosa Sumactika Delgadillo Ávila",
  semester: "2025-1",
  description:
    "Asignatura teórico–práctica orientada al diseño y desarrollo de sistemas inteligentes. Contenidos: sistemas inteligentes y su taxonomía, conjuntos y lógica difusa, sistemas de inferencia, algoritmos genéticos y aprendizaje autónomo (ML/DL/GAI) con aplicaciones en industria y servicios.",
  objectives: [
    "Diseñar sistemas basados en conocimiento (preciso/difuso) con motores de inferencia.",
    "Aplicar metaheurísticas y algoritmos genéticos a problemas de optimización.",
    "Implementar soluciones con aprendizaje supervisado, no supervisado y profundo.",
    "Trabajar con responsabilidad ética y pensamiento crítico en proyectos de IA.",
  ],
};

export const weeks: Week[] = [
  {
    number: 1,
    title: "Introducción y Sistemas Basados en Conocimiento",
    description:
      "Panorama de los sistemas inteligentes: conceptos, taxonomía y aplicaciones. Sistemas expertos: arquitectura, tipos y metodología de ingeniería de conocimiento (CommonKADS).",
    topics: [
      "Conceptos y taxonomía de Sistemas Inteligentes",
      "Sistemas Expertos: arquitectura y tipos",
      "Ingeniería de conocimiento y CommonKADS",
    ],
    homework: [
      {
        name: "Lectura: Knowledge Engineering for Hybrid Intelligent Systems",
        type: "doc",
        url:
          "/docs/semana-01/S1_Knowledge Engineering for Hybrid Intelligence.pdf",
        description:
          "Artículo base sobre ingeniería del conocimiento para sistemas inteligentes híbridos.",
      },
      {
        name: "Lectura: La aplicación de la ingeniería del conocimiento",
        type: "doc",
        url:
          "/docs/semana-01/S1_La aplicación de la ingeniería del conocimiento.pdf",
        description:
          "Revisión de la aplicación práctica de la ingeniería del conocimiento.",
      },
    ],
    canvaLink:
      "https://www.canva.com/design/DAGxUc9Qjck/qmnp2_i3gUpUeqwhJ4q9TA/edit",
    canvaLabel: "Ver presentación en canva", // opcional
  },
  {
    number: 2,
    title: "Adquisición de Conocimiento y Motor de Inferencia",
    description:
      "Construcción de la base de conocimiento y base de hechos. Encadenamiento progresivo y regresivo; flujo de inferencia en un SE.",
    topics: [
      "Adquisición de conocimiento",
      "Base de conocimiento y base de hechos",
      "Motor de inferencia",
      "Encadenamiento hacia adelante y hacia atrás",
    ],
    homework: [
      {
        name: "Lectura: Investigating the Impact of Backtracking",
        type: "doc",
        url:
          "/docs/semana-02/S2_Investigating the Impact of Backward Strategy Learning in a Logic Tutor.pdf",
        description:
          "Estudio sobre el impacto del backtracking en procesos de inferencia.",
      },
      {
        name: "Lectura: Knowledge Acquisition and Representation",
        type: "doc",
        url:
          "/docs/semana-02/S2_Knowledge Acquisition and Representation for.pdf",
        description:
          "Conceptos y prácticas para adquisición y representación de conocimiento.",
      },
    ],
    canvaLink:
      "https://www.canva.com/design/DAGxUSE81KY/XkSam1rGltaA5O4jGVyszw/edit",
  },
  {
  number: 3,
  title: "Calidad de Sistemas Expertos: errores comunes e índice de acuerdo",
  description:
    "Panorama de calidad en SE: errores frecuentes, criterios y métricas clave, y medición del acuerdo entre expertos (Kappa).",
  topics: [
    "Errores habituales en adquisición, representación e inferencia",
    "Criterios de calidad: exactitud, cobertura, consistencia y explicabilidad",
    "Verificación y validación de un Sistema Experto",
    "Acuerdo entre expertos: porcentaje de acuerdo e índice Kappa"
  ],
  homework: [
    {
      name: "Lectura: Sistemas Expertos — fundamentos, evolución y aplicaciones",
      type: "doc",
      url: "/docs/semana-03/S3_Sistemas_Expertos_Fundamentos_Evolucion_Aplicaciones.pdf",
      description:
        "Panorama de los SE: bases, evolución histórica, casos de uso; ventajas, límites y vigencia frente a ML/DL."
    },
    {
      name: "Lectura: Hacia la evaluación de calidad en IA (ISO/IEC 25059)",
      type: "doc",
      url: "/docs/semana-03/S3_Towards_Quality_Assessment_of_AI_Systems.pdf",
      description:
        "Entorno de evaluación de calidad para IA basado en ISO/IEC 25000/25059; caso de Adecuación Funcional y retos frente al software tradicional."
    },
    {
      name: "Lectura: Criterios de validación en sistemas inteligentes",
      type: "doc",
      url: "/docs/semana-03/S3_Evaluation_of_Validation_Criteria_on_Intelligent_Systems.pdf",
      description:
        "Comparativa de métodos de validación (nominal/ordinal/binario), pros y contras, y recomendaciones prácticas para elegir el criterio adecuado."
    },
    {
      id: "tarea-paraderos",
      name: "Tarea: Hechos y Reglas (paraderos) — archivo .txt",
      type: "txt",
      url: "/docs/semana-03/tarea_paraderos.txt",
      description:
        "Descarga y revisa el archivo con hechos y reglas (Prolog). Puedes previsualizarlo aquí mismo."
    }
  ],
  canvaLink: "https://www.canva.com/design/DAGx_M6rnOM/5FURzWkd3l24pg5md6ORJw/edit",
  canvaLabel: "Ver en Canva"
  },
  {
  number: 4,
  title: "Sistemas difusos: conjuntos, pertenencia, operaciones y variables lingüísticas",
  description:
    "Introducción práctica a la teoría de conjuntos difusos: funciones de pertenencia, operaciones básicas y uso de variables lingüísticas en toma de decisiones.",
  topics: [
    "Conjuntos difusos y funciones de pertenencia",
    "Operaciones con conjuntos difusos",
    "Variables lingüísticas y etiquetas",
    "Modelo lingüístico 2-tuplas (computing with words)",
  ],
  homework: [
    {
      name:
        "Lectura: 2-tuple linguistic model — overview, extensiones y retos",
      type: "doc",
      url: "/docs/semana-04/S1_2tuple_linguistic_overview.pdf",
      description:
        "Panorama del modelo lingüístico 2-tuplas para computing with words, sus extensiones, aplicaciones y desafíos.",
    },
    {
      name:
        "Lectura: Interpolación con representación funcional de funciones de pertenencia",
      type: "doc",
      url: "/docs/semana-04/S2_Interpolation_Function_Space_MF.pdf",
      description:
        "Generalización de la interpolación de reglas difusas al espacio funcional; soporte para funciones tipo campana.",
    },
    {
      name: "Lectura: Fuzzy Sets (Zadeh, 1965)",
      type: "doc",
      url: "/docs/semana-04/S3_Fuzzy_Sets_Zadeh_1965.pdf",
      description:
        "Fundamentos de los conjuntos difusos: pertenencia, operaciones y propiedades.",
    },
    {
      name: "Tarea: Notebook de Google Colab — sistemas difusos",
      type: "assignment",
      url: "https://colab.research.google.com/drive/1h-3UBWdpxXziuA3PCPqyQ8ug0K-xPaG-?usp=sharing",
      description:
        "Ejercicios guiados en Colab sobre funciones de pertenencia, operaciones difusas y variables lingüísticas.",
    },
  ],
  canvaLink: "https://www.canva.com/design/DAGytqK5ogU/O2ySJ0fhlxZByKBnhEXI6A/edit",
  canvaLabel: "Ver en Canva"
  },
  {
    number: 5,
    title: "Lógica difusa: implicaciones, relaciones y reglas. Sistemas de inferencia",
    description:
      "Repaso de implicaciones y relaciones difusas, reglas y agregación; y diseño de módulos/tipos de sistemas de inferencia (p. ej. Mamdani, Sugeno).",
    topics: [
      "Implicaciones y relaciones difusas",
      "Reglas difusas y agregación",
      "Sistemas de inferencia (Mamdani, Sugeno)",
      "Módulos y tipos de SI difusos"
    ],
    homework: [
      {
        
        name: "Artículo: Aggregation of I-transitive fuzzy relations and fuzzy preference relations",
        type: "doc",
        url: "/docs/semana-05/aggregation-i-transitive.pdf",
        description:
          "Problema: al agregar relaciones/preferencias difusas se pierde transitividad/consistencia; propone agregación que preserve propiedades lógicas."
      },
      {
        name: "Artículo: CI-based feature selection to enhance fuzzy decision-making in cloud",
        type: "doc",
        url: "/docs/semana-05/ci-feature-selection-cloud.pdf",
        description:
          "Problema: consolidación dinámica de servidores en cloud (NP-Hard). Mejora un sistema difuso con selección de características basada en inteligencia computacional."
      },
      {
        id: "wk5-txt1",
        name: "Tarea: Reglas/funciones de pertenencia (TXT)",
        type: "txt",
        url: "/docs/semana-05/Tarea_Prolog.txt",
        description:
          "Descarga y revisa el archivo Prolog. Puedes previsualizarlo aquí mismo."
      }
    ],
    canvaLink: "https://www.canva.com/design/DAGzfOCL7cM/4dLEb0rSOBA9g6EyylX32Q/edit",
    canvaLabel: "Ver en Canva"
  },
  {
    number: 6,
    title: "Sistemas difusos: Mamdani, Sugeno y C-Fuzzy; proyecto SBC",
    description:
      "Diferencias clave entre Mamdani y Sugeno, modelado de funciones de pertenencia y reglas; uso de C-Fuzzy (FCM) para extraer estructura y cierre con un mini-proyecto de sistema basado en conocimiento.",
    topics: [
      "Mamdani: reglas, agregación y desborrosificación",
      "Sugeno/TS: salidas funcionales y control",
      "C-Fuzzy (FCM): particionado difuso y extracción",
      "Buenas prácticas en proyectos SBC difusos"
    ],
    homework: [
      {
        name: "Artículo: Verificación de posición en vehículos conectados (Mamdani)",
        type: "doc",
        url: "/docs/semana-06/Position_Verification_in_Connected_Vehicles_for_Cyber_Resilience_Using_Geofencing_and_Fuzzy_Logic.pdf",
        description:
          "Sistema difuso Mamdani para validar posición vehicular con entradas (distancia, Δvelocidad, dirección) y nivel de confianza; reduce falsos positivos y mejora ciber-resiliencia."
      },
      {
        name: "Artículo: Gestión energética PV+BESS con controlador Sugeno (TS-Fuzzy)",
        type: "doc",
        url: "/docs/semana-06/1-s2.0-S0952197625022110-main.pdf",
        description:
          "Modelo PV+BESS con TS-Fuzzy (MPPT, filtro activo y compensación reactiva); armónicos < 4.2% (IEEE-519), transiciones estables y viabilidad económica en entornos industriales."
      },
      {
        name: "Artículo: Mejora de imágenes submarinas con fusión y Fuzzy C-Means (SPV)",
        type: "doc",
        url: "/docs/semana-06/Position_Verification_in_Connected_Vehicles_for_Cyber_Resilience_Using_Geofencing_and_Fuzzy_Logic.pdf",
        description:
          "Método híbrido con dehazing por espectro previo, corrección de color y módulo de visibilidad vía Fuzzy C-Means; supera 14 métodos en contraste y fidelidad de color."
      },
      {
        name: "Artículo propio: Simulación del control de temperatura con Lógica Difusa",
        type: "doc",
        url: "https://docs.google.com/document/d/1DK9WwBuE8l0xjwPCcxSDxnYhNB0EJ-RJZQw9gVIue8I/edit?usp=sharing",
        description:
          "Simulación en Python de control de temperatura para una habitación con entradas (temperatura actual y número de personas) y salida de enfriamiento; variables lingüísticas, funciones de pertenencia y base de reglas. Resultados muestran una respuesta flexible y cercana al razonamiento humano. Palabras clave: lógica difusa, control de temperatura, simulación, aire acondicionado."
      },
      {
        id: "wk6-txt1",
        name: "Tarea: Reglas/control_difuso_LR (TXT)",
        type: "txt",
        url: "/docs/semana-06/control_difuso_LR.txt",
        description:
          "Descarga y revisa el archivo Prolog. Puedes previsualizarlo aquí mismo."
      }
    ],
    canvaLink: "https://www.canva.com/design/DAGz5SMXW94/YPe6NCXLdls5hwAc5JAFvg/edit",
    canvaLabel: "Ver en Canva"
  },
  {
    number: 7,
    title: "Metaheurísticas y Optimización: Gradiente, Recocido Simulado y más",
    description:
      "Introducción práctica a metaheurísticas y métodos de optimización: gradiente (y variantes aceleradas), recocido simulado y esquemas híbridos con GA/GNN aplicados a planificación y diseño.",
    topics: [
      "Gradiente descendente (acelerado) y fine-tuning",
      "Recocido simulado para optimización combinatoria",
      "Inventarios y reposicionamiento bajo incertidumbre",
      "Optimización guiada por GNN y algoritmos genéticos"
    ],
    homework: [
      {
        name: "Artículo: AGD-DGA para planificación de movimiento robótico",
        type: "doc",
        url: "/docs/semana-07/1-s2.0-S0957417423032967-main.pdf",
        description:
          "Método híbrido basado en gradiente descendente acelerado y un GA de mutagénesis dirigida para optimizar tiempo, energía e impacto en trayectorias robóticas."
      },
      {
        name: "Artículo: Reposicionamiento de contenedores con Programación Dinámica + Recocido Simulado",
        type: "doc",
        url: "/docs/semana-07/1-s2.0-S1568494624012262-main.pdf",
        description:
          "Modelo estocástico para inventarios y reposicionamiento de contenedores bajo demanda no estacionaria; resolución con PD y recocido simulado."
      },
      {
        name: "Artículo: Optimización de acero de refuerzo con GNN + GA",
        type: "doc",
        url: "/docs/semana-07/1-s2.0-S0926580522005477-main.pdf",
        description:
          "Pipeline automático para diseño de barras de refuerzo libre de colisiones integrando GNN y algoritmos genéticos exploratorios; grandes ahorros de tiempo de cómputo."
      },
      {
        name: "Tarea 1: Sistema de Clasificación de Ambiente con FCM",
        type: "assignment",
        description:
          "Sistema que clasifica el ambiente (normal, intrusión, incendio) usando FCM a partir de sensores de temperatura, vibración y distancia.",
        links: [
          { label: "CFuzzy – Entrenamiento", url: "https://github.com/DavisLCVB/CFuzzySistem" },
          { label: "CFuzzy – Prototipo", url: "https://github.com/DavisLCVB/CFuzzyPrototipe" },
          { label: "CFuzzy – Simulación (Wokwi)", url: "https://wokwi.com/projects/443767541862967297" },
          { label: "Video (Drive)", url: "https://drive.google.com/file/d/1LH0V856V5U4YNuA2NdZVaoVzqO5rdU9z/view?usp=drive_link" }
        ]
      },
      {
        name: "Tarea 2: Sistema Difuso Mamdani para Control Automático de Iluminación",
        type: "assignment",
        description:
          "Control difuso Mamdani que regula la cantidad de LEDs encendidos según el nivel de luz ambiental (oscura, media, brillante).",
        links: [
          { label: "Prototipo", url: "https://www.tinkercad.com/things/5MKP8qAk6Hq-luces?sharecode=S9D-JCBHmEbCGM4xv-T0eaXDsosUJqnMzb9s1OAv7Jo" },
          { label: "Video (Drive)", url: "https://drive.google.com/file/d/1P3cy89S86xT53bZIoqAH8wW1Ekq3PPqd/view?usp=drive_link" },
          { label: "Código", url: "https://docs.google.com/document/d/1X_W61RizzfZInmvYwxY6L5Xcg-zXIDaw9nHyRPPoB0k/edit?usp=drive_link" }
        ]
      },
      {
        name: "Tarea 3: Sistema difuso tipo Sugeno para control de intensidad (Temp/Humedad) con LCD I2C",
        type: "assignment",
        description:
          "Sistema Sugeno con 9 reglas y funciones triangulares que calcula una salida de intensidad en función de temperatura y humedad; muestra resultados en LCD I2C y por serial.",
        links: [
          { label: "Prototipo", url: "https://www.tinkercad.com/things/lg3QawiaV4K-sugeno?sharecode=aa6v0mgcgGvzzUsN5O3Bz9s1QqknRb7XB9-CtAv77zo" },
          { label: "Video (Drive)", url: "https://drive.google.com/file/d/12bWY2Q8VnUKsOapyuas0UaBuLSx-koOL/view?usp=drive_link" },
          { label: "Código", url: "https://docs.google.com/document/d/1PjviTMDQyQ-zic9c_Vipo95E94b6iH3izH3Z4UoF1rU/edit?usp=drive_link" }
        ]
      }
    ],
    canvaLink: "https://www.canva.com/design/DAG0x-U4yJI/wWzkTpivCA4z8y174RCU7g/edit",
    canvaLabel: "Ver en Canva"
  },
  {
  // Semana combinada 09–10
  number: 10,
  title: "Fundamentos de Deep Learning + Algoritmos de Entrenamiento",
  description:
    "Introducción a redes neuronales y aprendizaje profundo; forward/backward propagation, optimizadores y buenas prácticas de entrenamiento.",
  topics: [
    "Deep Learning vs. ML clásico",
    "Perceptrón y redes feed-forward",
    "Funciones de activación y pérdidas",
    "Forward & backward propagation",
    "Optimizadores (SGD, Momentum, Adam)",
    "Regularización: dropout, batch norm"
  ],
  homework: [
    {
      id: "wk09-10-art1",
      name: "Artículo: Applicability of Genetic Algorithms for Stock Market Prediction (Survey)",
      type: "doc",
      url: "/docs/semana-10/1-s2.0-S1574013724000364-main.pdf",
      description:
        "Revisión sistemática (2013-2022) del uso de algoritmos genéticos en pronóstico bursátil: selección de características y tuning de hiperparámetros para mejorar precisión."
    }
  ],
  canvaLink: "https://www.canva.com/design/DAG2zcmQz7Y/3_JuCBZskbADLOygRImUpg/edit",
  canvaLabel: "Ver diapositivas (Semanas 09-10)"
},
{
  number: 11,
  title: "Machine Learning vs. Sistemas Expertos; RSL y caso aplicado (FuzzyGrow)",
  description:
    "Repaso de aprendizaje automático (tipos y fases), contraste con sistemas expertos (reglas vs. datos), lectura guiada de un caso real con Big Data+ML para predicción deportiva y un artículo propio de control difuso con autocalibración (FuzzyGrow).",
  topics: [
    "Aprendizaje: definición y condiciones (tarea, métrica, experiencia)",
    "Tipos de ML: supervisado, no supervisado y refuerzo",
    "Fases de un proyecto de ML: datos → preprocesamiento → entrenamiento → validación → implementación",
    "Sistemas Expertos vs. ML: conocimiento explícito vs. patrones; explicabilidad vs. desempeño",
    "Aplicaciones: diagnóstico/explicabilidad (SE) y predicción/optimización (ML)"
  ],
  homework: [
    {
      name: "Artículo: Game-Predicting Expert System (NHL) con Big Data + ML",
      type: "doc",
      url: "/docs/semana-11/1-s2.0-S0957417419302556-main.pdf",
      description:
        "Integra PCA, pruebas no paramétricas y modelos ML (SVM, ensambles) para predecir resultados NHL con >90% de precisión; muestra cómo un sistema experto apoyado por datos escala a decisiones deportivas."
    },
    {
      name: "Artículo propio: FuzzyGrow — Riego inteligente con Lógica Difusa (Arduino)",
      type: "doc",
      url: "/docs/semana-11/FuzzyGrow.pdf",
      description:
        "Control difuso Sugeno de humedad/luz/temperatura con máquina de estados y autocalibración de dosis (ρ) en Arduino UNO; reduce error relativo y mantiene humedad del sustrato en rango objetivo."
    }
  ],
  canvaLink: "https://www.canva.com/design/DAG3J_UW-0g/2I063M_VKxvrcwy04HePtQ/edit",
  canvaLabel: "Ver en Canva"
},
{
  number: 12,
  title: "Algoritmos de Machine Learning: Supervisados y No Supervisados",
  description:
    "Introducción práctica a algoritmos fundamentales de ML: regresión lineal y logística para aprendizaje supervisado; KNN, clustering y otros métodos para aprendizaje no supervisado.",
  topics: [
    "Algoritmos supervisados: Regresión lineal",
    "Algoritmos supervisados: Regresión logística",
    "Algoritmos no supervisados: KNN",
    "Algoritmos no supervisados: Clustering y otros"
  ],
  homework: [
  ],
  canvaLink: "https://www.canva.com/design/DAG4EyIMaJw/ysVWeWLS5N9jOwzbl8rafA/edit",
  canvaLabel: "Ver en Canva"
},
{
  number: 13,
  title: "Redes Neuronales Artificiales: Fundamentos y Perceptrón",
  description:
    "Introducción a las redes neuronales artificiales: desde la neurona biológica hasta arquitecturas multicapa; perceptrón simple y multicapa.",
  topics: [
    "La neurona biológica y las redes RNA",
    "Tipos de RNA y arquitectura",
    "Perceptrón Unicapa",
    "Perceptrón Multicapa"
  ],
  homework: [
    {
      name: "Artículo: 1D Convolutional Neural Networks and Applications — A Survey",
      type: "doc",
      url: "/docs/semana-13/1D_CNN_Survey.pdf",
      description:
        "Revisión comprehensiva de redes neuronales convolucionales 1D (1D CNNs) y sus aplicaciones en ingeniería, enfocándose en ventajas sobre CNNs 2D para procesamiento de señales 1D con datos limitados. Metodología: arquitectura compacta con capas CNN 1D + MLP densas, entrenamiento mediante backpropagation con menor complejidad computacional. Resultados: ECG 99% precisión en arritmias ventriculares, detección estructural 100% precisión sin falsos positivos (45x más rápido que tiempo real), detección de fallas en motores/rodamientos 100% precisión con mínima complejidad computacional."
    },
    {
      name: "Artículo: Deep Physical Neural Networks Trained with Backpropagation",
      type: "doc",
      url: "/docs/semana-13/Deep_Physical_Neural_Networks.pdf",
      description:
        "Introduce redes neuronales físicas profundas (PNNs) entrenadas con backpropagation mediante un algoritmo híbrido in situ-in silico llamado Physics-Aware Training (PAT), que permite entrenar sistemas físicos controlables para ejecutar DNNs sin isomorfismo matemático con capas convencionales. Metodología: PAT ejecuta forward pass por el sistema físico real, backward pass mediante modelo digital diferenciable. Sistemas físicos experimentales: óptica no lineal (SHG), circuito electrónico analógico, oscilaciones mecánicas. Entrenamiento con PyTorch usando funciones autodiff personalizadas que combinan transformaciones físicas reales con gradientes estimados. Resultados: Clasificación de vocales (SHG) 93% precisión vs. 40% con entrenamiento in silico puro, MNIST: Óptica 97%, Electrónica 93%, Mecánica 87% de precisión. Mitigación automática de ruido e imperfecciones mediante entrenamiento in situ. PNNs híbridas físico-digitales aprenden a cooperar automáticamente usando PAT."
    },
    {
      name: "Artículo propio: Sistema de Riego Inteligente con Lógica Difusa y Autocalibración en Arduino UNO",
      type: "doc",
      url: "/docs/semana-13/Sistema_Riego_Inteligente_Fuzzy.pdf",
      description:
        "Sistema de riego inteligente basado en lógica difusa implementado en Arduino UNO para cultivos de pequeña escala. Integra control multivariable (humedad del suelo, temperatura ambiente y luminosidad) con mecanismo de autocalibración que ajusta automáticamente la ganancia del riego según desempeño observado. Problemática: sistemas bang-bang consumen hasta 64L en 8 días vs. 46L con lógica difusa; dinámica hídrica rápida en macetas requiere control adaptativo multivariable. Implementación de bajo costo en microcontrolador económico (Arduino UNO) para democratizar acceso a agricultura inteligente, mejorando eficiencia hídrica y estabilidad ambiental mediante transiciones graduales y decisiones estables basadas en reglas lingüísticas."
    }
  ],
  canvaLink: "https://www.canva.com/design/DAG4ZyovxqA/Ta_3YtivU-e-cjTyKXGk1w/edit",
  canvaLabel: "Ver en Canva"
}
];

export const groupMembers: GroupMember[] = [
  { name: "Sosa Lupuche, Carlos Manuel", code: "22200197" },
  { name: "Rugel Alva, Miguel Aarom", code: "21200037"},
  { name: "Cartagena Valera Brush, Davis Leonardo", code: "22200193" },
  { name: "Santillan Chihuala, Paul Gustavo", code: "21200071" },
  { name: "Suarez Bautista, Pablo", code: "22200132" },
  { name: "Martinez Ochoa, Santos Eduardo", code: "20200098" },
  { name: "Yaipen Diaz, Imanol", code: "19200051"}
];

// Si no quieres mostrar otros grupos, deja esto vacío:
export const otherGroups: OtherGroup[] = [];
