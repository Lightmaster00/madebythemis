<template>
  <div>
    <!-- En travaux Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div class="mb-12">
          <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <div class="text-4xl">🔧</div>
          </div>
          <h1 class="text-5xl font-bold text-gray-900 mb-6">En construction</h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Notre galerie de réalisations est en cours de développement. 
            Nous travaillons activement pour vous présenter nos meilleurs projets.
          </p>
        </div>

        <div class="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Bientôt disponible</h2>
          <p class="text-gray-600 mb-6">
            Découvrez prochainement nos réalisations en impression 3D, 
            de la conception à la production finale.
          </p>
          <div class="grid md:grid-cols-3 gap-6 text-sm text-gray-500">
            <div class="text-center">
              <div class="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                <div class="text-xl">🎨</div>
              </div>
              <p>Conceptions originales</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                <div class="text-xl">⚙️</div>
              </div>
              <p>Pièces techniques</p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                <div class="text-xl">🏗️</div>
              </div>
              <p>Prototypes fonctionnels</p>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/contact" 
            class="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Nous contacter
          </NuxtLink>
          <NuxtLink 
            to="/" 
            class="bg-white border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105"
          >
            Retour à l'accueil
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Configuration SEO
useHead({
  title: 'Portfolio - Made by Themis',
  meta: [
    { name: 'description', content: 'Découvrez le portfolio de Made by Themis en conception et impression 3D. Galerie de projets en cours de développement.' }
  ]
})
</script>
