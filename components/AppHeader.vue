<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-6xl mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-3">
          <NuxtLink to="/" class="flex items-center space-x-3">
            <img 
              src="/assets/typo-black.png" 
              alt="Made by Themis" 
              class="h-8 w-auto"
            />
          </NuxtLink>
        </div>
        
        <!-- Navigation desktop -->
        <nav class="hidden md:flex space-x-6">
          <NuxtLink 
            to="/" 
            class="text-gray-600 hover:text-gray-900 transition-colors"
            :class="{ 'text-gray-900 font-medium': $route.path === '/' }"
          >
            Accueil
          </NuxtLink>
          <NuxtLink 
            to="/portfolio" 
            class="text-gray-600 hover:text-gray-900 transition-colors"
            :class="{ 'text-gray-900 font-medium': $route.path === '/portfolio' }"
          >
            Portfolio
          </NuxtLink>
          <NuxtLink 
            to="/pricing" 
            class="text-gray-600 hover:text-gray-900 transition-colors"
            :class="{ 'text-gray-900 font-medium': $route.path === '/pricing' }"
          >
            Tarifs
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="text-gray-600 hover:text-gray-900 transition-colors"
            :class="{ 'text-gray-900 font-medium': $route.path === '/contact' }"
          >
            Contact
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="text-gray-600 hover:text-gray-900 transition-colors"
            :class="{ 'text-gray-900 font-medium': $route.path === '/about' }"
          >
            À propos
          </NuxtLink>
        </nav>

        <!-- Menu mobile -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        >
          <Icon name="heroicons:bars-3" class="w-6 h-6" />
        </button>
      </div>

      <!-- Menu mobile déroulant -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4">
        <nav class="flex flex-col space-y-2">
          <NuxtLink 
            to="/" 
            class="px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            @click="mobileMenuOpen = false"
          >
            Accueil
          </NuxtLink>
          <NuxtLink 
            to="/portfolio" 
            class="px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            @click="mobileMenuOpen = false"
          >
            Portfolio
          </NuxtLink>
          <NuxtLink 
            to="/pricing" 
            class="px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            @click="mobileMenuOpen = false"
          >
            Tarifs
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            @click="mobileMenuOpen = false"
          >
            Contact
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            @click="mobileMenuOpen = false"
          >
            À propos
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

// Fermer le menu mobile quand on change de route
watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})
</script>
