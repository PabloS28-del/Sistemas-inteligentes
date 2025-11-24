<script setup lang="ts">
import { ref } from "vue";
import LandingNavigation from "./LandingNavigation.vue";
import { courseInfo, weeks, groupMembers } from "@/data/courseData";

// Imagen de fondo de sistemas inteligentes desde internet
const fondoUrl =
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

// ===== Preview de TXT (uno a la vez) =====
const txtPreviewOpenId = ref<string | null>(null);
const txtPreviewContent = ref<string>("");

async function toggleTxtPreview(item: any) {
  const id = item.id || item.url || item.name;
  if (txtPreviewOpenId.value === id) {
    txtPreviewOpenId.value = null;
    txtPreviewContent.value = "";
    return;
  }
  try {
    const res = await fetch(item.url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    txtPreviewOpenId.value = id;
    txtPreviewContent.value = text;
  } catch (err) {
    txtPreviewOpenId.value = id;
    txtPreviewContent.value = "No se pudo cargar el archivo.";
  }
}
</script>

<template>
  <div
    class="min-h-screen bg-background text-foreground"
    style="background-color: hsl(220 25% 15%);"
  >
    <!-- Navbar -->
    <LandingNavigation />

    <!-- HERO con imagen de fondo -->
    <section
      class="relative min-h-[85vh] w-full pt-24 flex items-center bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${fondoUrl})` }"
    >
      <!-- Overlays -->
      <div class="absolute inset-0 bg-[hsl(220_25%_15%)]/80"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.35)] via-transparent to-transparent"></div>
      <!-- Halos -->
      <div
        class="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-primary/30 blur-3xl rounded-full"
      ></div>
      <div
        class="pointer-events-none absolute -bottom-24 -right-24 w-[36rem] h-[36rem] bg-accent/30 blur-3xl rounded-full"
      ></div>

      <div class="relative max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 2xl:px-8">
        <div
          class="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center"
        >
          <!-- Texto -->
          <div>
            <span
              class="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-primary/20 backdrop-blur border border-primary/30"
            >
              <span class="text-primary font-semibold">Sistemas Inteligentes</span>
              <span class="h-1 w-1 rounded-full bg-accent"></span>
              <span class="text-accent font-semibold">Grupo 1</span>
            </span>

            <h1
              class="mt-4 text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-glow"
            >
              <span class="text-white">SI</span>
              <span class="text-accent">2025-2</span>
            </h1>

            <p class="mt-4 text-lg md:text-xl text-primary/90 max-w-2xl font-medium">
              Explorando el futuro de la inteligencia artificial y los sistemas
              expertos
            </p>
          </div>

          <!-- Tarjeta con info corta (glass) -->
          <div class="lg:justify-self-end">
            <div class="rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-6 shadow-xl shadow-black/20">
              <h3 class="text-xl font-semibold text-accent mb-3">
                Información rápida
              </h3>
              <ul class="space-y-3 text-foreground/90">
                <li class="flex justify-between items-center">
                  <span class="text-primary font-medium">Curso:</span>
                  <span class="text-white font-semibold">{{ courseInfo.title }}</span>
                </li>
                <li class="flex justify-between items-center">
                  <span class="text-primary font-medium">Código:</span>
                  <span class="text-white font-semibold">{{ courseInfo.code || "—" }}</span>
                </li>
                <li class="flex justify-between items-center">
                  <span class="text-primary font-medium">Semestre:</span>
                  <span class="text-white font-semibold">{{ courseInfo.semester }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SOMOS -->
    <section id="somos" class="py-16" style="background-color: hsl(220 25% 15%);">
      <div class="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 2xl:px-8">
        <div class="text-center mb-10">
          <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-white">
            ¿Quiénes Somos?
          </h2>
          <p class="text-base md:text-lg text-white/70 font-medium">
            Estudiantes de la UNMSM explorando IA aplicada y sistemas expertos
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="m in groupMembers"
            :key="m.name"
            class="rounded-xl border border-white/10 bg-white/[0.04] text-card-foreground p-5 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center gap-4">
              <div
                class="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold shadow-lg"
              >
                {{ m.name.charAt(0) }}
              </div>
              <div>
                <p class="font-semibold leading-tight text-white">{{ m.name }}</p>
                <p class="text-xs text-primary/80 font-medium">
                  Código: {{ m.code }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CURSO INFO -->
    <section id="curso-info" class="py-16" style="background-color: hsl(220 25% 20%);">
      <div class="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 2xl:px-8">
        <div class="text-center mb-10">
          <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-white">
            Información del Curso
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div
            class="rounded-2xl ring-1 ring-white/10 bg-white/[0.04] text-card-foreground p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 class="text-xl font-semibold text-accent mb-3">Descripción</h3>
            <p class="text-primary/90 leading-relaxed font-medium">
              {{ courseInfo.description }}
            </p>
          </div>

          <div
            class="rounded-2xl ring-1 ring-white/10 bg-white/[0.04] text-card-foreground p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 class="text-xl font-semibold text-accent mb-3">Objetivos</h3>
            <ul class="space-y-2 text-primary/90">
              <li
                v-for="o in courseInfo.objectives"
                :key="o"
                class="flex gap-2 items-start"
              >
                <span class="text-accent text-lg">•</span>
                <span class="font-medium">{{ o }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- EXAMEN PARCIAL GRUPAL -->
    <section id="examen-parcial" class="py-16" style="background: linear-gradient(135deg, hsl(220 25% 15%) 0%, hsl(260 30% 18%) 100%);">
      <div class="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 2xl:px-8">
        <div class="text-center mb-10">
          <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-white">
            Corrección Examen Parcial Grupal
          </h2>
          <p class="text-base md:text-lg text-white/70 font-medium">
            Sistema de navegación autónoma Multi-vehículo basado en lógica difusa
          </p>
        </div>

        <!-- Tarjeta principal del examen -->
        <div class="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-sm">
          
          <!-- Badges -->
          <div class="flex flex-wrap gap-3 mb-6">
            <span class="px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-semibold ring-1 ring-green-500/30">
              ✓ 100% Tasa de Éxito
            </span>
            <span class="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold ring-1 ring-blue-500/30">
              🎯 Precisión ±1.5°
            </span>
            <span class="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold ring-1 ring-purple-500/30">
              🚀 Rust + Lógica Difusa
            </span>
          </div>

          <!-- Contenido en dos columnas -->
          <div class="grid md:grid-cols-2 gap-8">
            
            <!-- Columna izquierda: Descripción -->
            <div>
              <h3 class="text-2xl font-bold text-white mb-4">Sobre el Proyecto</h3>
              <p class="text-white/80 leading-relaxed mb-6">
                Sistema de navegación autónoma basado en lógica difusa que logró una tasa de convergencia del 100% en 1000 simulaciones con condiciones iniciales aleatorias. El controlador difuso diseñado es generalizable a vehículos con características cinemáticas muy diferentes (Barco, Lancha, Avión) sin requerir modificación de la base de reglas.
              </p>

              <h4 class="text-lg font-semibold text-accent mb-3">Aspectos Destacados:</h4>
              <ul class="space-y-2">
                <li class="flex items-start gap-3 text-white/90">
                  <span class="text-accent text-xl flex-shrink-0">✓</span>
                  <span>100% de tasa de éxito en 1000 simulaciones</span>
                </li>
                <li class="flex items-start gap-3 text-white/90">
                  <span class="text-accent text-xl flex-shrink-0">✓</span>
                  <span>Controlador generalizable a múltiples tipos de vehículos</span>
                </li>
                <li class="flex items-start gap-3 text-white/90">
                  <span class="text-accent text-xl flex-shrink-0">✓</span>
                  <span>Precisión angular de ±1.5° en aproximación final</span>
                </li>
                <li class="flex items-start gap-3 text-white/90">
                  <span class="text-accent text-xl flex-shrink-0">✓</span>
                  <span>Implementación en Rust con visualización interactiva</span>
                </li>
                <li class="flex items-start gap-3 text-white/90">
                  <span class="text-accent text-xl flex-shrink-0">✓</span>
                  <span>Motor de lógica difusa tipo Mamdani completo</span>
                </li>
              </ul>
            </div>

            <!-- Columna derecha: Integrantes y enlaces -->
            <div>
              <h3 class="text-2xl font-bold text-white mb-4">Integrantes del Equipo</h3>
              <div class="space-y-3 mb-6">
                <div class="rounded-xl bg-white/[0.05] ring-1 ring-white/10 p-4 hover:bg-white/[0.08] transition">
                  <p class="font-semibold text-white">Davis Leonardo Cartagena Valera Brush</p>
                  <p class="text-sm text-primary/80">Código: 22200193</p>
                </div>
                <div class="rounded-xl bg-white/[0.05] ring-1 ring-white/10 p-4 hover:bg-white/[0.08] transition">
                  <p class="font-semibold text-white">Carlos Manuel Sosa Lupuche</p>
                  <p class="text-sm text-primary/80">Código: 22200197</p>
                </div>
                <div class="rounded-xl bg-white/[0.05] ring-1 ring-white/10 p-4 hover:bg-white/[0.08] transition">
                  <p class="font-semibold text-white">Pablo Israel Suárez Bautista</p>
                  <p class="text-sm text-primary/80">Código: 22200132</p>
                </div>
              </div>

              <!-- Botones de acción -->
              <div class="space-y-3">
                <a
                  href="https://github.com/DavisLCVB/examen-parcial-si.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold transition shadow-lg hover:shadow-xl ring-1 ring-white/10"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Ver Repositorio en GitHub
                </a>

                <a
                  href="/docs/examen-parcial/Art-Parcial-SI.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-accent hover:bg-accent/80 text-white font-semibold transition shadow-lg hover:shadow-xl"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                  Descargar Artículo (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CLASES (semanas) -->
    <section id="clases-semanales" class="py-16" style="background-color: hsl(220 25% 15%);">
      <div class="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 2xl:px-8">
        <div class="text-center mb-10">
          <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-white">
            Clases Semanales
          </h2>
          <p class="text-base md:text-lg text-white/70 font-medium">
            Plan de estudios por semanas
          </p>
        </div>

        <div class="space-y-5">
          <div
            v-for="(week, idx) in weeks"
            :key="week.number"
            class="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 text-card-foreground p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-start justify-between">
              <!-- Columna izquierda -->
              <div class="flex-1">
                <span
                  class="inline-flex bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium mb-3"
                >
                  Semana {{ week.number }}
                </span>

                <h3 class="text-lg md:text-xl font-semibold mb-2 text-white">
                  {{ week.title }}
                </h3>

                <p class="text-primary/90 mb-3 leading-relaxed">
                  {{ week.description }}
                </p>

                <!-- Chips de temas -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="t in week.topics"
                    :key="t"
                    class="px-3 py-1 rounded-full text-xs bg-white/5 text-white/90 ring-1 ring-white/10 hover:bg-white/10 transition"
                  >
                    {{ t }}
                  </span>
                </div>

                <!-- Botón Canva (siempre visible si existe el link) -->
                <div v-if="week.canvaLink" class="mb-4">
                  <a
                    :href="week.canvaLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 px-4 py-2 rounded-md
                           bg-white/5 ring-1 ring-white/10 text-white hover:bg-white/10
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                           transition font-medium text-sm"
                  >
                    Ver en Canva
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 3h7m0 0v7m0-7L10 14"
                      />
                    </svg>
                  </a>
                </div>

                <!-- Documentos -->
                <div v-if="week.homework && week.homework.length > 0" class="mt-4">
                  <h4 class="text-sm font-semibold text-white/90 mb-2">Documentos</h4>

                  <!-- Lista de documentos -->
                  <div class="space-y-3">
                    <!-- Contenedor por documento -->
                    <div
                      v-for="doc in week.homework"
                      :key="doc.name"
                      class="rounded-lg"
                    >
                      <!-- Fila del documento -->
                      <div
                        class="flex flex-wrap sm:flex-nowrap items-center gap-2 p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] transition-colors"
                      >
                        <!-- Icono según el tipo -->
                        <div class="flex-shrink-0">
                          <svg
                            v-if="doc.type === 'doc'"
                            class="w-4 h-4 text-blue-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M4 18h12V6l-4-4H4v16zm2-14h5v4h4v8H6V4z" />
                          </svg>
                          <svg
                            v-else-if="doc.type === 'slides'"
                            class="w-4 h-4 text-orange-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                            />
                          </svg>
                          <div
                            v-else-if="doc.type === 'assignment'"
                            class="w-5 h-5 rounded-full bg-green-500/25 border border-green-400/60
                                  grid place-items-center text-green-300"
                            aria-hidden="true"
                          >
                            <span class="text-[10px] leading-none font-semibold">✓</span>
                          </div>
                          <svg v-else class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 18h12V6l-4-4H4v16zm2-14h5v4h4v8H6V4z" />
                          </svg>
                        </div>

                        <!-- Información del documento -->
                        <div class="flex-1 min-w-0">
                          <a
                            :href="doc.url"
                            target="_blank"
                            rel="noopener"
                            class="text-sm text-white hover:text-accent transition-colors font-medium block truncate"
                          >
                            {{ doc.name }}
                          </a>
                          <p
                            v-if="doc.description"
                            class="text-xs text-primary/70 clamp-2"
                            :title="doc.description"
                          >
                            {{ doc.description }}
                          </p>
                        </div>

                        <!-- ASSIGNMENT: si hay links, muéstralos; si no, botón Colab -->
                        <div v-if="doc.type === 'assignment'" class="ml-auto flex flex-wrap items-center gap-2">
                          <!-- A) Conjunto de enlaces (Semana 7) -->
                          <template v-if="doc.links && doc.links.length">
                            <a
                              v-for="lnk in doc.links"
                              :key="lnk.url"
                              :href="lnk.url"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-xs font-semibold text-white"
                            >
                              {{ lnk.label }}
                            </a>
                          </template>

                          <!-- B) Botón Colab clásico (Semana 4) -->
                          <template v-else>
                            <span
                              class="hidden sm:inline-flex items-center text-[11px] px-2 py-0.5 rounded-full bg-green-500/15 text-green-300 ring-1 ring-green-600/30"
                            >
                              Notebook Colab
                            </span>
                            <a
                              :href="doc.url"
                              target="_blank"
                              rel="noopener"
                              class="px-3 py-1.5 rounded-md bg-green-600 text-white text-xs font-medium hover:bg-green-700 transition"
                            >
                              Abrir en Colab
                              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7m0 0v7m0-7L10 14"/>
                              </svg>
                            </a>
                          </template>
                        </div>
                      
                        <!-- Botonera solo para TXT -->
                        <div v-if="doc.type === 'txt'" class="ml-auto flex items-center gap-2">
                          <button
                            @click.stop="toggleTxtPreview(doc)"
                            class="px-3 py-1.5 rounded-md bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition"
                          >
                            {{
                              (txtPreviewOpenId === (doc.id || doc.url || doc.name))
                                ? 'Ocultar'
                                : 'Previsualizar'
                            }}
                          </button>

                          <a
                            :href="doc.url"
                            :download="doc.downloadName || (doc.name?.replace(/\s+/g,'_') + '.txt')"
                            class="px-3 py-1.5 rounded-md bg-primary/90 text-primary-foreground text-xs font-medium hover:bg-primary transition"
                            @click.stop
                          >
                            Descargar
                          </a>
                        </div>
                      </div>

                      <!-- Área de previsualización para TXT -->
                      <div
                        v-if="doc.type === 'txt' && txtPreviewOpenId === (doc.id || doc.url || doc.name)"
                        class="mt-2 rounded-md bg-black/40 border border-white/10 p-3 max-h-64 overflow-auto"
                      >
                        <pre class="text-xs font-mono whitespace-pre-wrap leading-5">{{ txtPreviewContent }}</pre>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /Documentos -->
              </div>

              <!-- Columna derecha: número grande -->
              <div class="ml-6 text-right hidden sm:block">
                <div class="text-2xl font-bold text-accent">
                  {{ String(week.number).padStart(2, "0") }}
                </div>
                <div class="text-[10px] text-primary/70 font-medium">SEMANA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="py-12 border-t" style="background-color: hsl(220 25% 20%);">
      <div class="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 2xl:px-8 text-center">
        <div class="mb-4">
          <div
            class="mx-auto h-16 w-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
          >
            <span class="text-primary-foreground font-bold text-lg">SI</span>
          </div>
        </div>
        <p class="text-lg text-primary/90 font-medium mb-2">
          © 2025 UNMSM. Grupo 1 – Sistemas Inteligentes.
        </p>
        <p class="text-sm text-primary/70">
          Desarrollado con tecnologías modernas para una experiencia excepcional
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.text-glow {
  text-shadow: 0 0 20px hsl(200 100% 60% / 0.4);
}
.card-glow {
  box-shadow: 0 8px 25px hsl(200 100% 60% / 0.1);
}
.hover-lift {
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px hsl(200 100% 60% / 0.15);
}
/* Limita el párrafo a 2 líneas con '...' */
.clamp-2{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.glass {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.btn-ghost {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
