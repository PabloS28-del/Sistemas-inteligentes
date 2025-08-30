<script setup lang="ts">
import LandingNavigation from "./LandingNavigation.vue";
import { courseInfo, weeks, groupMembers } from "@/data/courseData";

// Imagen de fondo de sistemas inteligentes desde internet
const fondoUrl =
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
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

                <!-- Documentos + botón Canva a la derecha -->
                <div v-if="week.homework && week.homework.length > 0" class="mt-4">
                  <div class="mb-2 flex items-center justify-between">
                    <h4 class="text-sm font-semibold text-white/90">Documentos</h4>
                    <a
                      v-if="week.canvaLink"
                      :href="week.canvaLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md
                             bg-white/5 ring-1 ring-white/10 text-white hover:bg-white/10
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                             transition"
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

                  <div class="space-y-2">
                    <div
                      v-for="doc in week.homework"
                      :key="doc.name"
                      class="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] transition-colors"
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
                        <svg
                          v-else-if="doc.type === 'assignment'"
                          class="w-4 h-4 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <svg v-else class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 18h12V6l-4-4H4v16zm2-14h5v4h4v8H6V4z" />
                        </svg>
                      </div>

                      <!-- Información del documento -->
                      <div class="flex-1 min-w-0">
                        <a
                          :href="doc.url"
                          target="_blank"
                          class="text-sm text-white hover:text-accent transition-colors font-medium block truncate"
                        >
                          {{ doc.name }}
                        </a>
                        <p v-if="doc.description" class="text-xs text-primary/70 truncate">
                          {{ doc.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /Documentos -->
              </div>

              <!-- Columna derecha: número grande -->
              <div class="ml-6 text-right hidden sm:block">
                <div class="text-2xl font-bold text-accent">
                  {{ String(idx + 1).padStart(2, "0") }}
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
          © 2025 UNMSM. Grupo 4 – Sistemas Inteligentes.
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

/* Helpers opcionales por si quieres reutilizar */
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
