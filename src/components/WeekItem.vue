<script setup lang="ts">
import { ref } from "vue";
import type { Week } from "@/types/course";

// Iconos
import CanvaIcon from "@/assets/canva-icon.svg";
import DocsIcon from "@/assets/Docs-icon.svg";
import SwiLogo from "@/assets/swi_logo.svg";
import VsCodeLogo from "@/assets/vscode.svg";
import GraphIcon from "@/assets/graph.svg";

const props = defineProps<{ week: Week }>();

/* ---------------- Preview TXT (uno a la vez) ---------------- */
const previewOpenId = ref<string | null>(null);
const previewContent = ref<string>("");

async function togglePreview(item: any) {
  // item.id es importante para identificar el TXT
  const id = item.id || item.url || item.name;
  if (previewOpenId.value === id) {
    // cerrar
    previewOpenId.value = null;
    previewContent.value = "";
    return;
  }
  try {
    const res = await fetch(item.url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    previewOpenId.value = id;
    previewContent.value = text;
  } catch (err) {
    previewOpenId.value = id;
    previewContent.value = "No se pudo cargar el archivo.";
  }
}

/* ---------------- Helpers UI ---------------- */
function getIconForType(type: string) {
  switch (type) {
    case "slides":
      return CanvaIcon;
    case "doc":
      return DocsIcon;
    case "prolog":
      return SwiLogo;
    case "code":
      return VsCodeLogo;
    case "graph":
      return GraphIcon;
    case "txt":
      return VsCodeLogo; // icono para txt
    default:
      return DocsIcon;
  }
}

function getBackgroundForType(type: string) {
  switch (type) {
    case "slides":
      return "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800";
    case "doc":
      return "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800";
    case "prolog":
      return "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800";
    case "code":
      return "bg-gray-50 dark:bg-gray-950/20 border-gray-200 dark:border-gray-800";
    case "graph":
      return "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800";
    case "txt":
      return "bg-slate-50 dark:bg-slate-950/20 border-slate-200 dark:border-slate-800";
    default:
      return "bg-gray-50 dark:bg-gray-950/20 border-gray-200 dark:border-gray-800";
  }
}

function getTextColorForType(type: string) {
  switch (type) {
    case "slides":
      return "text-blue-900 dark:text-blue-300";
    case "doc":
      return "text-green-900 dark:text-green-300";
    case "prolog":
      return "text-orange-900 dark:text-orange-300";
    default:
      return "text-gray-900 dark:text-gray-300";
  }
}

function formatWeekNumber(num: number) {
  return String(num).padStart(2, "0");
}

/* ---------------- Click tarjeta ---------------- */
function onCardClick(item: any) {
  if (item.type === "prolog") {
    const homeworkId = item.id || "default";
    const basePath = import.meta.env.BASE_URL || "/";
    window.location.href = `${basePath}prolog/${props.week.number}/${homeworkId}`;
    return;
  }
  if (item.type === "txt") {
    // Para TXT no hacemos navegación; los botones manejan todo
    return;
  }
  // Para PDF/links normales
  window.open(item.url, "_blank", "noopener,noreferrer");
}
</script>

<template>
  <article :id="`week-${week.number}`" class="relative py-6 pl-24 bg-white rounded-lg border-1">
    <!-- Punto de timeline -->
    <div class="absolute left-[-20px] top-8 w-10 h-10 bg-muted rounded-full border-4 border-background ring-1 ring-primary/20">
      <span class="absolute inset-0 flex items-center justify-center text-xs font-mono text-muted-foreground">
        {{ formatWeekNumber(week.number) }}
      </span>
    </div>

    <div>
      <!-- Encabezado de semana -->
      <header class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">
          Semana {{ formatWeekNumber(week.number) }}: {{ week.title }}
        </h3>

        <p v-if="week.description" class="text-muted-foreground text-sm">
          {{ week.description }}
        </p>

        <!-- Canva opcional -->
        <div v-if="week.canvaLink" class="mt-3">
          <a
            :href="week.canvaLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7m0 0v7m0-7L10 14"/>
            </svg>
            {{ week.canvaLabel ?? 'Ver en Canva' }}
          </a>
        </div>
      </header>

      <div class="flex justify-between border-t p-6 gap-16 items-start">
        <!-- Temas -->
        <div class="min-w-[200px] max-w-[200px]">
          <h4 class="font-medium mb-3 text-primary">Temas:</h4>
          <ul class="list-disc list-outside pl-5 space-y-2 text-muted-foreground">
            <li v-for="(topic, idx) in week.topics" :key="`${week.number}-topic-${idx}`">
              {{ topic }}
            </li>
          </ul>
        </div>

        <!-- Materiales -->
        <div v-if="week.homework.length" class="mr-auto w-full">
          <h4 class="font-medium mb-3 text-primary">Materiales y Actividades:</h4>

          <div class="flex flex-col gap-4">
            <div
              v-for="(item, idx) in week.homework"
              :key="`${week.number}-homework-${idx}`"
              class="w-full border rounded-lg p-4 transition-all duration-200 hover:shadow-md"
              :class="getBackgroundForType(item.type)"
              @click="onCardClick(item)"
            >
              <!-- Cabecera del recurso -->
              <div class="flex items-start gap-3">
                <img :src="getIconForType(item.type).src" :alt="`${item.type} icon`" class="w-8 h-8 object-contain" />
                <div class="flex-1 min-w-0">
                  <h5 :class="['font-medium text-sm leading-tight', getTextColorForType(item.type)]">
                    {{ item.name }}
                  </h5>
                  <p v-if="item.description" class="text-xs text-muted-foreground mt-1">
                    {{ item.description }}
                  </p>
                </div>

                <!-- Chip de tipo -->
                <span
                  :class="[
                    'text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap',
                    item.type === 'slides'
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      : item.type === 'doc'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : item.type === 'prolog'
                      ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                      : item.type === 'graph'
                      ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                      : item.type === 'txt'
                      ? 'bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300'
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400',
                  ]"
                >
                  {{
                    item.type === 'slides' ? 'Presentación'
                    : item.type === 'doc' ? 'Documento'
                    : item.type === 'prolog' ? 'Programa Prolog'
                    : item.type === 'graph' ? 'Gráfico'
                    : item.type === 'txt' ? 'Archivo .txt'
                    : 'Archivo'
                  }}
                </span>
              </div>

              <!-- Botones y preview SOLO si es TXT -->
              <div v-if="item.type === 'txt'" class="mt-3 space-x-3">
                <button
                  @click.stop="togglePreview(item)"
                  class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/60 text-foreground text-xs font-medium hover:bg-secondary transition"
                >
                  {{ (previewOpenId === (item.id || item.url || item.name)) ? 'Ocultar' : 'Previsualizar' }}
                </button>

                <a
                  :href="item.url"
                  :download="(item.downloadName || (item.name?.replace(/\s+/g,'_') + '.txt'))"
                  class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/90 text-primary-foreground text-xs font-medium hover:bg-primary transition"
                  @click.stop
                >
                  Descargar
                </a>
              </div>

              <!-- Área de previsualización -->
              <div
                v-if="item.type === 'txt' && previewOpenId === (item.id || item.url || item.name)"
                class="mt-3 rounded-md bg-black/40 border border-white/10 p-3 max-h-64 overflow-auto"
              >
                <pre class="text-xs font-mono whitespace-pre-wrap leading-5">{{ previewContent }}</pre>
              </div>
            </div>
          </div>
        </div>
        <!-- /Materiales -->
      </div>
    </div>
  </article>
</template>
