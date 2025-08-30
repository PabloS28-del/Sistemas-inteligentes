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
        name: "Lectura del sílabo y organización de equipos",
        type: "doc",
        url: "#",
        description:
          "Revisión del sílabo y conformación de equipos para el proyecto.",
      },
      
      
    ],
    canvaLink: "https://www.canva.com/design/DAGxUc9Qjck/qmnp2_i3gUpUeqwhJ4q9TA/edit",
    canvaLabel: "Ver presentación en canva" //opcional
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
        name: "Mini-demo en Python (reglas)",
        type: "code",
        url: "#",
        description:
          "Prototipo simple de inferencia con reglas para un dominio acotado.",
      },
    ],
    canvaLink: "https://www.canva.com/design/DAGxUSE81KY/XkSam1rGltaA5O4jGVyszw/edit"
  },
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
