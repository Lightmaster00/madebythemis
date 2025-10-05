<template>
    <div>
      <!-- Hero Section -->
      <section class="bg-gray-900 text-white py-16">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h1 class="text-4xl font-bold mb-4">Conditions Générales d'Utilisation</h1>
          <p class="text-lg text-gray-300">Dernière mise à jour : {{ lastUpdate }}</p>
        </div>
      </section>
  
      <!-- Content Section -->
      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4">
          <div class="prose prose-lg max-w-none">
            <h2>1. Objet</h2>
            <p>
              Les présentes conditions générales d'utilisation (CGU) régissent l'accès et l'utilisation du site web 
              <strong>Made by Themis</strong> accessible à l'adresse <strong>madebythemis.com</strong>.
            </p>
            <p>
              En naviguant sur ce site, l'utilisateur accepte pleinement et sans réserve les présentes CGU.
            </p>
  
            <h2>2. Mentions légales</h2>
            <p>
              <strong>Éditeur du site :</strong> Lysandre Le Bigot<br>
              <strong>Statut :</strong> Auto-entrepreneur<br>
              <strong>SIRET :</strong> 989 798 715 00011<br>
              <strong>Adresse :</strong> 44610 Indre, Loire-Atlantique, France<br>
              <strong>Email :</strong> contact@madebythemis.com
            </p>
            <p>
              L'hébergement du site est assuré par [Nom de l’hébergeur] – [Adresse de l’hébergeur].
            </p>
  
            <h2>3. Accès au site</h2>
            <p>
              Le site est accessible gratuitement à tout utilisateur disposant d'un accès Internet. 
              Tous les frais liés à l'accès au site (matériel, logiciels, connexion, etc.) sont à la charge de l'utilisateur.
            </p>
            <p>
              Made by Themis s'efforce d'assurer un accès permanent au site mais ne garantit pas l'absence d'interruptions, 
              notamment pour des raisons de maintenance, de force majeure ou de défaillance de l'hébergeur.
            </p>
  
            <h2>4. Données personnelles</h2>
            <p>
              Lors de l’utilisation du site, certaines données personnelles peuvent être collectées. 
              Elles sont traitées conformément à notre <a href="/confidentialite" class="text-blue-600 hover:underline">Politique de Confidentialité</a>, 
              en conformité avec le Règlement Général sur la Protection des Données (RGPD).
            </p>
  
            <h2>5. Propriété intellectuelle</h2>
            <p>
              L’ensemble du contenu du site (textes, images, graphismes, logo, vidéos, icônes, fichiers, etc.) 
              est protégé par le droit de la propriété intellectuelle et appartient à Made by Themis ou à ses partenaires.
            </p>
            <p>
              Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans autorisation écrite préalable, 
              est strictement interdite.
            </p>
  
            <h2>6. Responsabilité</h2>
            <p>
              Les informations présentes sur le site sont fournies à titre indicatif et sont régulièrement mises à jour. 
              Toutefois, des erreurs ou omissions peuvent survenir.
            </p>
            <p>
              Made by Themis ne saurait être tenue responsable :
            </p>
            <ul>
              <li>Des interruptions de service ou dysfonctionnements techniques</li>
              <li>Des inexactitudes ou omissions dans le contenu</li>
              <li>De tout dommage résultant d’un usage du site ou des informations fournies</li>
            </ul>
  
            <h2>7. Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers d’autres sites. Made by Themis n’exerce aucun contrôle sur ces sites tiers 
              et décline toute responsabilité quant à leur contenu, leur disponibilité ou leur sécurité.
            </p>
  
            <h2>8. Cookies</h2>
            <p>
              Le site utilise des cookies pour améliorer la navigation, mesurer l’audience et personnaliser l’expérience utilisateur.
            </p>
            <p>
              Conformément à la réglementation, un bandeau informe l’utilisateur lors de sa première visite et lui permet 
              d’accepter ou de refuser l’installation de cookies soumis à consentement.
            </p>
  
            <h2>9. Droit applicable et juridiction compétente</h2>
            <p>
              Les présentes CGU sont soumises au droit français. 
              En cas de litige et à défaut de résolution amiable, les tribunaux compétents de Nantes seront seuls compétents.
            </p>
  
            <h2>10. Contact</h2>
            <p>
              Pour toute question relative à ces CGU, vous pouvez nous contacter à l’adresse : 
              <a href="mailto:contact@madebythemis.com" class="text-blue-600 hover:underline">contact@madebythemis.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  useHead({
    title: "Conditions Générales d'Utilisation - Made by Themis",
    meta: [
      { name: 'description', content: "Conditions générales d'utilisation du site Made by Themis - Accès, données personnelles, cookies et responsabilités." }
    ]
  })
  
  const lastUpdate = '5 octobre 2025'
  </script>
  
  <style scoped>
  .prose h2 {
    @apply text-2xl font-bold text-gray-900 mt-8 mb-4;
  }
  
  .prose p {
    @apply text-gray-700 leading-relaxed mb-4;
  }
  
  .prose ul {
    @apply list-disc list-inside text-gray-700 mb-4;
  }
  
  .prose li {
    @apply mb-2;
  }
  
  .prose strong {
    @apply font-semibold text-gray-900;
  }
  </style>
