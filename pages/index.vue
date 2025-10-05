<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 relative overflow-hidden">
      <!-- Particules animées -->
      <div class="absolute inset-0">
        <div 
          v-for="(particle, index) in particles" 
          :key="index"
          class="particle absolute rounded-full animate-float"
          :class="particle.class"
          :style="particle.style"
        ></div>
      </div>
      
      <div class="max-w-6xl mx-auto px-4 text-center relative z-10">
        
        <h1 class="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span class="block opacity-90">Transformez vos</span>
          <span class="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            idées en réalité
          </span>
        </h1>
        
        <p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          De la conception 3D professionnelle à l'impression haute précision, 
          nous donnons vie à vos projets les plus ambitieux avec des technologies de pointe.
        </p>
        
        <!-- Avantages -->
        <div class="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div class="text-3xl mb-2">⚡</div>
            <div class="text-sm text-gray-300">Prototypage rapide</div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div class="text-3xl mb-2">🎯</div>
            <div class="text-sm text-gray-300">Précision maximale</div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div class="text-3xl mb-2">💡</div>
            <div class="text-sm text-gray-300">Innovation continue</div>
          </div>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/contact" 
            class="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Nous contacter
          </NuxtLink>
          <NuxtLink 
            to="/portfolio" 
            class="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            Voir nos réalisations
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Nos services</h2>
          <p class="text-lg text-gray-600">Des solutions complètes pour tous vos besoins</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:light-bulb" class="w-8 h-8 text-gray-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Conception 3D</h3>
            <p class="text-gray-600">
              Modélisation professionnelle avec les derniers logiciels CAD.
            </p>
          </div>
          
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:beaker" class="w-8 h-8 text-gray-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Impression 3D</h3>
            <p class="text-gray-600">
              Production de prototypes et pièces finales avec des technologies avancées.
            </p>
          </div>
          
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:bolt" class="w-8 h-8 text-gray-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Prototypage</h3>
            <p class="text-gray-600">
              Accompagnement complet de l'idée au produit final.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Comment fonctionne l'impression 3D</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les deux principales technologies que nous utilisons pour transformer vos idées en réalité
          </p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12 mb-16">
          <!-- FDM Technology -->
          <div class="tech-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <div class="text-3xl">🖨️</div>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">Impression FDM</h3>
                <p class="text-gray-600">Dépôt de filament fondu</p>
              </div>
            </div>
            
            <div class="space-y-4 mb-6">
              <h4 class="font-semibold text-gray-900 mb-3">Comment ça marche :</h4>
              <div class="space-y-3 text-gray-700">
                <p class="text-sm">1. <strong>Chauffage :</strong> Le filament plastique est chauffé à haute température</p>
                <p class="text-sm">2. <strong>Extrusion :</strong> Le matériau fondu est déposé couche par couche</p>
                <p class="text-sm">3. <strong>Solidification :</strong> Chaque couche refroidit et se solidifie</p>
                <p class="text-sm">4. <strong>Empilement :</strong> Les couches s'empilent pour former l'objet final</p>
              </div>
            </div>
            
            <div class="bg-blue-50 rounded-lg p-4">
              <h4 class="font-semibold text-gray-900 mb-2">Avantages :</h4>
              <p class="text-sm text-gray-600">Rapide, économique, idéal pour les prototypes et pièces fonctionnelles</p>
            </div>
          </div>
          
          <!-- SLA Technology -->
          <div class="tech-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <div class="text-3xl">💎</div>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">Impression Résine</h3>
                <p class="text-gray-600">Stéréolithographie (SLA)</p>
              </div>
            </div>
            
            <div class="space-y-4 mb-6">
              <h4 class="font-semibold text-gray-900 mb-3">Comment ça marche :</h4>
              <div class="space-y-3 text-gray-700">
                <p class="text-sm">1. <strong>Résine liquide :</strong> Un bac contient de la résine photosensible</p>
                <p class="text-sm">2. <strong>Laser UV :</strong> Un laser UV solidifie la résine couche par couche</p>
                <p class="text-sm">3. <strong>Précision :</strong> Chaque couche est ultra-fine pour une précision maximale</p>
                <p class="text-sm">4. <strong>Post-traitement :</strong> Nettoyage et durcissement final</p>
              </div>
            </div>
            
            <div class="bg-purple-50 rounded-lg p-4">
              <h4 class="font-semibold text-gray-900 mb-2">Avantages :</h4>
              <p class="text-sm text-gray-600">Précision exceptionnelle, surface lisse, idéal pour les détails fins</p>
            </div>
          </div>
        </div>
        
        <!-- Process Section -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Notre processus de travail</h3>
            <p class="text-gray-600">De votre idée au produit final en 4 étapes</p>
          </div>
          
          <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div class="text-2xl">💭</div>
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">1. Conception</h4>
              <p class="text-sm text-gray-600">Modélisation 3D avec Fusion 360</p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div class="text-2xl">⚙️</div>
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">2. Préparation</h4>
              <p class="text-sm text-gray-600">Optimisation pour l'impression</p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div class="text-2xl">🖨️</div>
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">3. Impression</h4>
              <p class="text-sm text-gray-600">Production avec nos machines</p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div class="text-2xl">✨</div>
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">4. Finition</h4>
              <p class="text-sm text-gray-600">Post-traitement et contrôle qualité</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gray-900 text-white">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
        <p class="text-lg text-gray-300 mb-8">
          Contactez-nous pour un devis personnalisé et gratuit.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/contact" 
            class="bg-white text-gray-900 px-8 py-3 rounded font-medium hover:bg-gray-100"
          >
            Nous contacter
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Configuration SEO
useHead({
  title: 'Made by Themis - Conception et Impression 3D',
  meta: [
    { name: 'description', content: 'Services de conception et impression 3D professionnels. De la modélisation à la production, nous donnons vie à vos projets.' }
  ]
})

// Particules animées
const particles = ref([
  { class: 'w-2 h-2 bg-white/20', style: 'left: 10%; animation-delay: 0s;' },
  { class: 'w-1 h-1 bg-white/30', style: 'left: 20%; animation-delay: 2s;' },
  { class: 'w-3 h-3 bg-white/10', style: 'left: 30%; animation-delay: 4s;' },
  { class: 'w-2 h-2 bg-white/25', style: 'left: 40%; animation-delay: 6s;' },
  { class: 'w-1 h-1 bg-white/20', style: 'left: 50%; animation-delay: 8s;' },
  { class: 'w-2 h-2 bg-white/15', style: 'left: 60%; animation-delay: 10s;' },
  { class: 'w-1 h-1 bg-white/30', style: 'left: 70%; animation-delay: 12s;' },
  { class: 'w-3 h-3 bg-white/10', style: 'left: 80%; animation-delay: 14s;' },
  { class: 'w-2 h-2 bg-white/20', style: 'left: 90%; animation-delay: 16s;' }
])
</script>
