<template>
    <div>
      <!-- Hero Section -->
      <section class="bg-gray-900 text-white py-16">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h1 class="text-4xl font-bold mb-4">Conditions Générales de Vente</h1>
          <p class="text-lg text-gray-300">Dernière mise à jour : {{ lastUpdate }}</p>
        </div>
      </section>
  
      <!-- Content Section -->
      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4">
          <div class="prose prose-lg max-w-none">
            <h2>1. Objet</h2>
            <p>
              Les présentes conditions générales de vente (CGV) s'appliquent à toutes les prestations de conception 
              et d'impression 3D proposées par <strong>Made by Themis</strong>.
            </p>
  
            <h2>2. Prestataire</h2>
            <p>
              <strong>Raison sociale :</strong> Lysandre Le Bigot<br>
              <strong>Statut :</strong> Auto-entrepreneur<br>
              <strong>SIRET :</strong> 989 798 715 00011<br>
              <strong>Adresse :</strong> 44610 Indre, Loire-Atlantique, France<br>
              <strong>Email :</strong> contact@madebythemis.com
            </p>
  
            <h2>3. Prestations</h2>
            <p>
              Made by Themis propose les services suivants :
            </p>
            <ul>
              <li>Conception 3D et modélisation</li>
              <li>Impression 3D (FDM et SLA)</li>
              <li>Prototypage rapide</li>
              <li>Conseils techniques</li>
            </ul>
  
            <h2>4. Tarifs</h2>
            <p>
              Les tarifs sont indiqués en euros toutes taxes comprises (TTC). Ils sont susceptibles de modification 
              à tout moment. Les tarifs applicables sont ceux en vigueur au jour de la commande.
            </p>
            <p>
              <strong>Conception 3D :</strong> 20€/heure<br>
              <strong>Impression FDM :</strong> 0,15€/gramme (PLA)<br>
              <strong>Impression SLA :</strong> 0,25€/gramme (résine standard)
            </p>
            <p>
              Les frais de livraison éventuels sont précisés avant validation définitive de la commande.
            </p>
  
            <h2>5. Commande et devis</h2>
            <p>
              Toute commande fait l'objet d'un devis préalable gratuit et sans engagement. 
              Le devis est valable 30 jours à compter de sa date d'émission.
            </p>
            <p>
              La commande devient ferme et définitive après acceptation du devis par le client 
              et versement d'un acompte de 30% du montant total. Le paiement de l'acompte vaut acceptation des présentes CGV.
            </p>
  
            <h2>6. Modalités de paiement</h2>
            <p>
              Le paiement s'effectue :
            </p>
            <ul>
              <li>Par virement bancaire</li>
              <li>Par chèque</li>
              <li>En espèces (pour les montants inférieurs à 1000€)</li>
            </ul>
            <p>
              Le solde est exigible à la livraison de la prestation. La facture correspondante est transmise au client.
            </p>
  
            <h2>7. Délais de réalisation</h2>
            <p>
              Les délais de réalisation sont indiqués à titre indicatif et peuvent varier selon la complexité de la prestation 
              et la charge de travail.
            </p>
            <p>
              <strong>Conception 3D :</strong> 3 à 7 jours ouvrés<br>
              <strong>Impression FDM :</strong> 2 à 3 jours ouvrés<br>
              <strong>Impression SLA :</strong> 3 à 5 jours ouvrés
            </p>
  
            <h2>8. Livraison</h2>
            <p>
              La livraison s'effectue :
            </p>
            <ul>
              <li>Par envoi postal (frais de port à la charge du client)</li>
              <li>Par remise en main propre (sur rendez-vous)</li>
              <li>Par envoi numérique (fichiers 3D uniquement)</li>
            </ul>
  
            <h2>9. Droit de rétractation</h2>
            <p>
              Conformément au Code de la consommation, le client consommateur dispose d’un délai de 14 jours pour exercer 
              son droit de rétractation pour les prestations standards.
            </p>
            <p>
              <strong>Exception :</strong> les prestations de conception et d’impression 3D personnalisées ou réalisées sur mesure 
              sont exclues du droit de rétractation (article L221-28).
            </p>
  
            <h2>10. Garantie et responsabilité</h2>
            <p>
              Made by Themis garantit la conformité de ses prestations aux spécifications convenues. 
              En cas de défaut de conformité, le client dispose d'un délai de 7 jours pour le signaler.
            </p>
            <p>
              La garantie ne couvre pas les dommages dus à une utilisation inappropriée, à l’usure normale ou à des modifications 
              apportées par le client. Made by Themis ne pourra être tenue responsable de l’usage détourné ou non conforme des pièces produites.
            </p>
  
            <h2>11. Propriété intellectuelle</h2>
            <p>
              Les fichiers 3D créés par Made by Themis restent la propriété du client après paiement intégral. 
              Made by Themis s'engage à ne pas divulguer ou utiliser ces fichiers à d'autres fins.
            </p>
  
            <h2>12. Données personnelles</h2>
            <p>
              Les données collectées (nom, coordonnées, informations techniques liées aux projets) sont utilisées uniquement 
              pour la gestion des commandes et ne sont jamais revendues à des tiers.
            </p>
            <p>
              Conformément au RGPD, le client dispose d’un droit d’accès, de rectification et de suppression de ses données 
              en écrivant à <a href="mailto:contact@madebythemis.com" class="text-blue-600 hover:underline">contact@madebythemis.com</a>.
            </p>
  
            <h2>13. Force majeure</h2>
            <p>
              Les parties ne pourront être tenues pour responsables si la non-exécution ou le retard dans 
              l'exécution de leurs obligations est dû à un cas de force majeure (ex. panne matérielle, catastrophe naturelle).
            </p>
  
            <h2>14. Droit applicable et juridiction compétente</h2>
            <p>
              Les présentes conditions générales de vente sont soumises à la loi française. 
              En cas de litige, et à défaut de solution amiable, les tribunaux de Nantes seront seuls compétents.
            </p>
  
            <h2>15. Contact</h2>
            <p>
              Pour toute question relative aux présentes CGV, vous pouvez nous contacter à l'adresse : 
              <a href="mailto:contact@madebythemis.com" class="text-blue-600 hover:underline">contact@madebythemis.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  useHead({
    title: 'Conditions Générales de Vente - Made by Themis',
    meta: [
      { name: 'description', content: 'Conditions générales de vente de Made by Themis - Services de conception et impression 3D.' }
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
  