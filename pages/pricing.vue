<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gray-900 text-white py-16">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">Nos tarifs</h1>
        <p class="text-lg text-gray-300">Des prix transparents pour tous vos besoins</p>
      </div>
    </section>

    <!-- Tarifs Section -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <!-- Services -->
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Conception 3D -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Conception 3D</h2>
            
            <div class="bg-white border-2 border-gray-900 rounded-lg p-8">
              <div class="text-center mb-6">
                <div class="bg-gray-900 text-white px-3 py-1 rounded text-sm font-medium mb-4 inline-block">
                  Tarif unique
                </div>
                <h3 class="text-2xl font-semibold text-gray-900 mb-2">Conception 3D</h3>
                <p class="text-gray-600 mb-4">Modélisation professionnelle</p>
                <div class="text-3xl font-bold text-gray-900">20€<span class="text-lg font-normal">/h</span></div>
              </div>
              
              <ul class="space-y-3 mb-8">
                <li class="flex items-center">
                  <Icon name="heroicons:check" class="w-5 h-5 text-green-500 mr-3" />
                  <span class="text-gray-600">Modélisation avec Fusion 360</span>
                </li>
                <li class="flex items-center">
                  <Icon name="heroicons:check" class="w-5 h-5 text-green-500 mr-3" />
                  <span class="text-gray-600">Révisions incluses</span>
                </li>
                <li class="flex items-center">
                  <Icon name="heroicons:check" class="w-5 h-5 text-green-500 mr-3" />
                  <span class="text-gray-600">Fichiers STL optimisés</span>
                </li>
                <li class="flex items-center">
                  <Icon name="heroicons:check" class="w-5 h-5 text-green-500 mr-3" />
                  <span class="text-gray-600">Conseils d'impression</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Impression 3D -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Impression 3D</h2>
            
            <div class="grid gap-6">
              <!-- FDM PLA -->
              <div class="bg-white rounded-lg p-6 border-2 border-gray-900">
                <div class="text-center mb-4">
                  <div class="text-3xl mb-3">🖨️</div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">FDM</h3>
                  <p class="text-sm text-gray-600">PLA uniquement</p>
                </div>
                
                <div class="space-y-2 mb-4">
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-600">PLA</span>
                    <span class="font-medium">0.15€/g</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-400">ABS</span>
                    <span class="font-medium text-gray-400">À venir</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-400">PETG</span>
                    <span class="font-medium text-gray-400">À venir</span>
                  </div>
                </div>
                
                <div class="text-xs text-gray-500">
                  <p>• Précision: ±0.2mm</p>
                  <p>• Délai: 2-3 jours</p>
                </div>
              </div>
              
              <!-- SLA Standard -->
              <div class="bg-white rounded-lg p-6 border-2 border-gray-900">
                <div class="text-center mb-4">
                  <div class="text-3xl mb-3">💎</div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">SLA</h3>
                  <p class="text-sm text-gray-600">Résine standard</p>
                </div>
                
                <div class="space-y-2 mb-4">
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-600">Standard</span>
                    <span class="font-medium">0.25€/g</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-400">Flexible</span>
                    <span class="font-medium text-gray-400">À venir</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-400">Tough</span>
                    <span class="font-medium text-gray-400">À venir</span>
                  </div>
                </div>
                
                <div class="text-xs text-gray-500">
                  <p>• Précision: ±0.1mm</p>
                  <p>• Délai: 3-5 jours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Besoin d'un devis personnalisé ?</h2>
        <p class="text-lg text-gray-600 mb-8">
          Nos tarifs sont indicatifs. Contactez-nous pour un devis gratuit et personnalisé.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/contact" 
            class="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded font-medium"
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
  title: 'Tarifs - Made by Themis',
  meta: [
    { name: 'description', content: 'Découvrez nos tarifs transparents pour la conception et impression 3D. Devis gratuit et personnalisé.' }
  ]
})
</script>
