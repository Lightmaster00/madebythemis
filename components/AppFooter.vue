<template>
  <footer class="bg-gray-900 text-white">
    <!-- Section principale -->
    <div class="max-w-6xl mx-auto px-4 py-16">
      <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        <!-- Logo et description -->
        <div class="lg:col-span-1">
          <div class="flex items-center space-x-3 mb-6">
            <img 
              src="/assets/typo-white.png" 
              alt="Made by Themis" 
              class="h-10 w-auto"
            />
          </div>
          <p class="text-gray-300 leading-relaxed mb-6">
            Services de conception et impression 3D professionnels. 
            De l'idée à la réalisation, nous donnons vie à vos projets.
          </p>
        </div>
        
        <!-- Navigation -->
        <div>
          <h3 class="text-lg font-semibold mb-6 text-white">Navigation</h3>
          <ul class="space-y-3">
            <li><NuxtLink to="/" class="text-gray-300 hover:text-white transition-colors flex items-center">
              <Icon name="heroicons:home" class="w-4 h-4 mr-2" />
              Accueil
            </NuxtLink></li>
            <li><NuxtLink to="/portfolio" class="text-gray-300 hover:text-white transition-colors flex items-center">
              <Icon name="heroicons:photo" class="w-4 h-4 mr-2" />
              Portfolio
            </NuxtLink></li>
            <li><NuxtLink to="/pricing" class="text-gray-300 hover:text-white transition-colors flex items-center">
              <Icon name="heroicons:currency-euro" class="w-4 h-4 mr-2" />
              Tarifs
            </NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-gray-300 hover:text-white transition-colors flex items-center">
              <Icon name="heroicons:envelope" class="w-4 h-4 mr-2" />
              Contact
            </NuxtLink></li>
            <li><NuxtLink to="/about" class="text-gray-300 hover:text-white transition-colors flex items-center">
              <Icon name="heroicons:user" class="w-4 h-4 mr-2" />
              À propos
            </NuxtLink></li>
          </ul>
        </div>
        
        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold mb-6 text-white">Services</h3>
          <ul class="space-y-3">
            <li class="text-gray-300 flex items-center">
              <Icon name="heroicons:light-bulb" class="w-4 h-4 mr-2 text-blue-400" />
              Conception 3D
            </li>
            <li class="text-gray-300 flex items-center">
              <Icon name="heroicons:beaker" class="w-4 h-4 mr-2 text-green-400" />
              Impression 3D
            </li>
            <li class="text-gray-300 flex items-center">
              <Icon name="heroicons:bolt" class="w-4 h-4 mr-2 text-yellow-400" />
              Prototypage
            </li>
            <li class="text-gray-300 flex items-center">
              <Icon name="heroicons:cog-6-tooth" class="w-4 h-4 mr-2 text-purple-400" />
              Conseil technique
            </li>
          </ul>
        </div>
        
        <!-- Contact et légal -->
        <div>
          <h3 class="text-lg font-semibold mb-6 text-white">Contact</h3>
          <div class="space-y-4 mb-6">
            <div class="flex items-start space-x-3">
              <Icon name="heroicons:map-pin" class="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p class="text-gray-300">44610 Indre</p>
                <p class="text-gray-300">Loire-Atlantique, France</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <Icon name="heroicons:envelope" class="w-5 h-5 text-gray-400" />
              <a href="mailto:contact@madebythemis.com" class="text-gray-300 hover:text-white transition-colors">
                contact@madebythemis.com
              </a>
            </div>
          </div>
          
          <!-- Liens légaux -->
          <div class="pt-4 border-t border-gray-700">
            <h4 class="text-sm font-medium text-gray-400 mb-3">Légal</h4>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/legal/terms" class="text-xs text-gray-400 hover:text-white transition-colors">
                CGU
              </NuxtLink>
              <NuxtLink to="/legal/conditions" class="text-xs text-gray-400 hover:text-white transition-colors">
                CGV
              </NuxtLink>
              <NuxtLink to="/legal/privacy" class="text-xs text-gray-400 hover:text-white transition-colors">
                Confidentialité
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Barre de copyright -->
    <div class="border-t border-gray-800 bg-gray-950">
      <div class="max-w-6xl mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-400 text-sm">
            &copy; 2025 Made by Themis. Tous droits réservés.
          </p>
          <div class="flex items-center space-x-6 text-sm text-gray-400">
            <span>Fait avec ❤️ en France</span>
            <span>•</span>
            <span>Auto-entrepreneur</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
