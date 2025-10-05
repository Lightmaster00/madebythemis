<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gray-900 text-white py-16">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">Contactez-nous</h1>
        <p class="text-lg text-gray-300">Obtenez un devis gratuit pour votre projet 3D</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Formulaire -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Demandez votre devis</h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="prenom" class="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                  <input 
                    type="text" 
                    id="prenom" 
                    v-model="form.prenom" 
                    required 
                    class="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  >
                </div>
                <div>
                  <label for="nom" class="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                  <input 
                    type="text" 
                    id="nom" 
                    v-model="form.nom" 
                    required 
                    class="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  >
                </div>
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required 
                  class="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                >
              </div>
              
              <div>
                <label for="telephone" class="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <input 
                  type="tel" 
                  id="telephone" 
                  v-model="form.telephone" 
                  class="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                >
              </div>
              
              <div>
                <label for="type_projet" class="block text-sm font-medium text-gray-700 mb-2">Type de projet *</label>
                <select 
                  id="type_projet" 
                  v-model="form.type_projet" 
                  required 
                  class="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="conception">Conception 3D uniquement</option>
                  <option value="impression">Impression 3D uniquement</option>
                  <option value="complet">Projet complet</option>
                  <option value="prototypage">Prototypage rapide</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              
              <div>
                <label for="description" class="block text-sm font-medium text-gray-700 mb-2">Description du projet *</label>
                <textarea 
                  id="description" 
                  v-model="form.description" 
                  required 
                  rows="5" 
                  placeholder="Décrivez votre projet en détail..." 
                  class="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
                ></textarea>
              </div>
              
              <!-- Authentification n8n -->
              <div class="mb-6">
                <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 class="text-sm font-medium text-blue-900 mb-3">🔐 Authentification sécurisée</h4>
                  <p class="text-sm text-blue-700 mb-3">
                    Votre demande sera vérifiée par notre système d'authentification avant traitement.
                  </p>
                  <div class="flex items-center space-x-2">
                    <Icon name="heroicons:shield-check" class="w-5 h-5 text-blue-600" />
                    <span class="text-sm text-blue-600 font-medium">Protection anti-spam activée</span>
                  </div>
                </div>
              </div>
              
              <div class="flex items-start">
                <input 
                  type="checkbox" 
                  id="confidentialite" 
                  v-model="form.confidentialite" 
                  required 
                  class="mt-1 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                >
                <label for="confidentialite" class="ml-3 text-sm text-gray-600">
                  J'accepte la <NuxtLink to="/legal/privacy" class="text-gray-900 hover:underline">politique de confidentialité</NuxtLink> *
                </label>
              </div>
              
              <!-- Message de statut -->
              <div v-if="statusMessage" :class="statusClasses" class="p-4 rounded-lg">
                <div v-html="statusMessage"></div>
              </div>
              
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white px-8 py-3 rounded font-medium transition-colors duration-200"
              >
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande' }}
              </button>
            </form>
          </div>
          
          <!-- Informations de contact -->
          <div class="space-y-8">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-6">Contact direct</h3>
              
              <div class="space-y-6">
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="heroicons:envelope" class="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">Email</p>
                    <p class="text-gray-600">contact@madebythemis.com</p>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="heroicons:map-pin" class="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">Adresse</p>
                    <p class="text-gray-600">44610 Indre, Loire-Atlantique, France</p>
                  </div>
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
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Prêt à démarrer votre projet ?</h2>
        <p class="text-lg text-gray-600 mb-8">
          Notre équipe d'experts vous accompagne de l'idée à la réalisation.
        </p>
        <div class="flex justify-center">
          <a 
            href="mailto:contact@madebythemis.com" 
            class="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded font-medium"
          >
            Nous contacter par email
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Configuration SEO
useHead({
  title: 'Contact - Made by Themis',
  meta: [
    { name: 'description', content: 'Contactez Made by Themis pour vos projets de conception et impression 3D. Devis gratuit et personnalisé.' }
  ]
})

// Import de la configuration de sécurité
import { securityConfig } from '~/config/security.js'

// État du formulaire
const form = ref({
  prenom: '',
  nom: '',
  email: '',
  telephone: '',
  type_projet: '',
  description: '',
  confidentialite: false
})

const isSubmitting = ref(false)
const statusMessage = ref('')
const statusClasses = ref('')

// Variables de sécurité
const lastSubmission = ref(0)
const submissionCount = ref(0)

// Fonction de génération de JWT simple (optionnel)
const generateJWT = () => {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const payload = btoa(JSON.stringify({ 
    iss: 'madebythemis-website',
    exp: Math.floor(Date.now() / 1000) + 3600, // 1 heure
    iat: Math.floor(Date.now() / 1000)
  }))
  const signature = btoa(`${securityConfig.auth.token}-${Date.now()}`)
  return `${header}.${payload}.${signature}`
}

// Fonction de validation des données sécurisée
const validateForm = () => {
  const { validation, patterns } = securityConfig
  
  // Validation des champs requis
  if (!form.value.prenom.trim() || !form.value.nom.trim() || !form.value.email.trim() || 
      !form.value.type_projet || !form.value.description.trim()) {
    return 'Tous les champs obligatoires doivent être remplis.'
  }
  
  // Validation de l'acceptation des conditions
  if (!form.value.confidentialite) {
    return 'Vous devez accepter la politique de confidentialité.'
  }
  
  // Validation de l'email
  if (!patterns.email.test(form.value.email)) {
    return 'Veuillez saisir une adresse email valide.'
  }
  
  // Validation des noms (caractères autorisés uniquement)
  if (!patterns.name.test(form.value.prenom.trim())) {
    return 'Le prénom ne peut contenir que des lettres, espaces, tirets et apostrophes.'
  }
  
  if (!patterns.name.test(form.value.nom.trim())) {
    return 'Le nom ne peut contenir que des lettres, espaces, tirets et apostrophes.'
  }
  
  // Validation de la longueur des champs
  if (form.value.prenom.length < validation.minNameLength || form.value.prenom.length > validation.maxNameLength) {
    return `Le prénom doit contenir entre ${validation.minNameLength} et ${validation.maxNameLength} caractères.`
  }
  
  if (form.value.nom.length < validation.minNameLength || form.value.nom.length > validation.maxNameLength) {
    return `Le nom doit contenir entre ${validation.minNameLength} et ${validation.maxNameLength} caractères.`
  }
  
  if (form.value.description.length < validation.minDescriptionLength || form.value.description.length > validation.maxDescriptionLength) {
    return `La description doit contenir entre ${validation.minDescriptionLength} et ${validation.maxDescriptionLength} caractères.`
  }
  
  // Validation du téléphone si fourni
  if (form.value.telephone && form.value.telephone.length > 0) {
    if (!patterns.phone.test(form.value.telephone) || 
        form.value.telephone.length < validation.minPhoneLength || 
        form.value.telephone.length > validation.maxPhoneLength) {
      return `Veuillez saisir un numéro de téléphone valide (${validation.minPhoneLength}-${validation.maxPhoneLength} caractères).`
    }
  }
  
  return null
}

// Fonction de vérification du rate limiting sécurisée
const checkRateLimit = () => {
  const now = Date.now()
  const { maxSubmissionsPerHour, minTimeBetweenSubmissions } = securityConfig
  
  // Vérifier le temps minimum entre les soumissions
  if (now - lastSubmission.value < minTimeBetweenSubmissions) {
    return `Veuillez attendre ${Math.ceil((minTimeBetweenSubmissions - (now - lastSubmission.value)) / 1000)} secondes avant de renvoyer un message.`
  }
  
  // Vérifier le nombre de soumissions par heure
  if (submissionCount.value >= maxSubmissionsPerHour) {
    return 'Trop de tentatives. Veuillez réessayer dans une heure.'
  }
  
  return null
}

// Fonction de soumission du formulaire sécurisée
const submitForm = async () => {
  isSubmitting.value = true
  statusMessage.value = ''
  
  try {
    // Validation des données
    const validationError = validateForm()
    if (validationError) {
      statusClasses.value = 'bg-red-100 text-red-800 border border-red-200'
      statusMessage.value = `❌ <strong>Erreur de validation</strong><br>${validationError}`
      isSubmitting.value = false
      return
    }
    
    // Vérification du rate limiting
    const rateLimitError = checkRateLimit()
    if (rateLimitError) {
      statusClasses.value = 'bg-yellow-100 text-yellow-800 border border-yellow-200'
      statusMessage.value = `⚠️ <strong>Limitation de sécurité</strong><br>${rateLimitError}`
      isSubmitting.value = false
      return
    }
    
    // Préparation des données pour n8n
    const data = {
      prenom: form.value.prenom.trim(),
      nom: form.value.nom.trim(),
      email: form.value.email.trim().toLowerCase(),
      telephone: form.value.telephone.trim() || '',
      type_projet: form.value.type_projet,
      description: form.value.description.trim(),
      confidentialite: form.value.confidentialite ? 'Oui' : 'Non',
      timestamp: new Date().toISOString(),
      source: 'Site web Made by Themis',
      userAgent: navigator.userAgent,
      ip: 'client-side' // L'IP sera récupérée côté serveur
    }
    
    // URL du webhook n8n sécurisé
    const n8nWebhookUrl = securityConfig.webhookUrl
    
    // Créer une requête sécurisée pour n8n avec authentification par header
    await fetch(n8nWebhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${securityConfig.auth.token}`,
        'X-API-Key': securityConfig.auth.token,
        'X-Source': 'madebythemis-website'
      },
      body: JSON.stringify(data)
    })
    
    // Mettre à jour les compteurs de sécurité
    lastSubmission.value = Date.now()
    submissionCount.value++
    
    // Afficher le succès
    statusClasses.value = 'bg-green-100 text-green-800 border border-green-200'
    statusMessage.value = `
      ✅ <strong>Message envoyé avec succès !</strong><br>
      Merci pour votre demande. Je vous recontacterai dans les plus brefs délais.
    `
    
    // Réinitialiser le formulaire
    form.value = {
      prenom: '',
      nom: '',
      email: '',
      telephone: '',
      type_projet: '',
      description: '',
      confidentialite: false
    }
    
  } catch (error) {
    console.error('Erreur:', error)
    
    // Afficher l'erreur
    statusClasses.value = 'bg-red-100 text-red-800 border border-red-200'
    statusMessage.value = `
      ❌ <strong>Erreur lors de l'envoi</strong><br>
      Veuillez réessayer ou me contacter directement par email.
    `
  }
  
  isSubmitting.value = false
}
</script>
