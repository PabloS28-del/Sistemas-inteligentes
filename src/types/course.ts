export type HomeworkType =
  | "doc"
  | "slides"
  | "prolog"
  | "code"
  | "graph"
  | "txt"
  | "assignment"; // tareas con varios links/botones

export interface HomeworkLink {
  label: string;
  url: string;
  external?: boolean; // opcional (para abrir en nueva pestaña, etc. si lo necesitas)
}

export interface HomeworkItem {
  id?: string;
  name: string;
  type: HomeworkType;
  url?: string;               // para PDF/Slides/archivo único
  description?: string;
  links?: HomeworkLink[];     // para "assignment" (varios enlaces)
}

export interface CourseInfo {
  title: string;
  code?: string;        // <- opcional, ponlo como 'string' si quieres forzarlo
  instructor?: string;  // <- opcional
  semester: string;
  description: string;
  objectives: string[];
}

export interface Week {
  number: number;
  title: string;
  description: string;
  topics: string[];
  homework: HomeworkItem[];    // <- usa el tipo fuerte
  canvaLink?: string;
  canvaLabel?: string;
}

export interface GroupMember {
  name: string;
  code: string;
}

export interface OtherGroup {
  id: number;
  name: string;
  url: string;
}
