<template>
  <div>
    <!-- About Us Section -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold text-gray-900 mb-6">À propos de moi</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez mon parcours, ma passion et les technologies qui m'animent.
          </p>
        </div>

        <!-- Mon Profil -->
        <div class="max-w-4xl mx-auto mb-20">
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover-lift">
            <div class="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div class="text-4xl">👨‍💻</div>
            </div>
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Lysandre Le Bigot</h2>
            <p class="text-blue-600 font-medium mb-6 text-xl">Auto-entrepreneur spécialisé en 3D</p>
            <div class="text-gray-700 leading-relaxed space-y-4 text-left">
              <p>
                Passionné de conception 3D et d'impression, j'ai commencé mon aventure avec une Creality Ender 5 Plus. 
                Cette première imprimante m'a permis de découvrir et maîtriser les techniques de fabrication additive.
              </p>
              <p>
                Diplômé d'un <strong>Bac Pro Technicien d'Usinage</strong> et titulaire d'un 
                <strong>Titre Professionnel Technicien d'Études en Mécanique</strong>, 
                j'allie formation technique solide et passion pour l'innovation.
              </p>
              <p>
                Aujourd'hui, je mets mes compétences au service de vos projets, 
                de la conception à la production, avec précision et expertise.
              </p>
            </div>
          </div>
        </div>

        <!-- Mon Matériel -->
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Mon matériel</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Des outils de pointe pour une qualité et une précision inégalées.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover-lift">
            <div class="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <div class="text-4xl">💻</div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Fusion 360</h3>
            <p class="text-gray-600 text-sm">Logiciel de modélisation 3D professionnel pour une conception précise et innovante.</p>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover-lift">
            <div class="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <div class="text-4xl">🖨️</div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Creality Ender 3 V3 KE</h3>
            <p class="text-gray-600 text-sm">Imprimante FDM haute performance, idéale pour les prototypes rapides et les pièces fonctionnelles.</p>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover-lift">
            <div class="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <div class="text-4xl">💎</div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Elegoo Saturn 3 Ultra</h3>
            <p class="text-gray-600 text-sm">Imprimante résine 4K pour des détails ultra-fins et des surfaces lisses, parfaite pour les miniatures et bijoux.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Configuration SEO
useHead({
  title: 'À propos - Made by Themis',
  meta: [
    { name: 'description', content: 'Découvrez le parcours de Lysandre Le Bigot, auto-entrepreneur spécialisé en conception et impression 3D. Formation technique solide et passion pour l\'innovation.' }
  ]
})
</script>
