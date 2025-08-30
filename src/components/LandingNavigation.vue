<script setup lang="ts">
import { ref } from 'vue';
import SmLogo from "@/assets/unmsm.png"; // igual que tu ejemplo: luego usamos SmLogo.src

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  isMenuOpen.value = false;
};
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border" style="background-color: rgba(30, 41, 59, 0.85);">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span class="text-xl font-bold text-primary">SI</span>
          </div>
          
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <button 
            @click="scrollToSection('somos')"
            class="text-foreground/80 hover:text-primary smooth-transition font-medium"
          >
            Somos
          </button>
          <button 
            @click="scrollToSection('curso-info')"
            class="text-foreground/80 hover:text-primary smooth-transition font-medium"
          >
            Curso Info
          </button>
          <button 
            @click="scrollToSection('clases-semanales')"
            class="text-foreground/80 hover:text-primary smooth-transition font-medium"
          >
            Clases Semanales
          </button>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="toggleMenu"
          class="md:hidden p-2 rounded-lg hover:bg-secondary smooth-transition"
        >
          <svg 
            class="w-6 h-6 text-foreground" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              v-if="!isMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

              <!-- Mobile Navigation -->
        <div 
          v-show="isMenuOpen"
          class="md:hidden border-t border-border backdrop-blur-md"
          style="background-color: rgba(30, 41, 59, 0.9);"
        >
        <div class="py-4 space-y-2">
          <button 
            @click="scrollToSection('somos')"
            class="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-secondary/20 smooth-transition rounded-lg"
          >
            Somos
          </button>
          <button 
            @click="scrollToSection('curso-info')"
            class="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-secondary/20 smooth-transition rounded-lg"
          >
            Curso Info
          </button>
          <button 
            @click="scrollToSection('clases-semanales')"
            class="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-secondary/20 smooth-transition rounded-lg"
          >
            Clases Semanales
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
