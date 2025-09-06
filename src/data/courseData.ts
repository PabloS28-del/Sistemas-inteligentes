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
  }
];

export const groupMembers: GroupMember[] = [
  { name: "Sosa Lupuche, Carlos Manuel", code: "" },
  { name: "Valdiviezo Goicochea, Wisner", code: "" },
  { name: "Rugel Alva, Miguel Aarom", code: "" },
  { name: "Benites Pardavé, Eder Gustavo", code: "" },
  { name: "Santillan Chihuala, Paul Gustavo", code: "" },
  { name: "Suarez Bautista, Pablo", code: "" },
  { name: "Martinez Ochoa, Santos Eduardo", code: "" },
  { name: "Yaipen Diaz, Imanol", code: "" },
];

// Si no quieres mostrar otros grupos, deja esto vacío:
export const otherGroups: OtherGroup[] = [];
