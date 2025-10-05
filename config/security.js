// Configuration de sécurité pour le formulaire de contact
export const securityConfig = {
  // Limites de soumission - Variables publiques
  maxSubmissionsPerHour: parseInt(process.env.NUXT_MAX_SUBMISSIONS_PER_HOUR || '3'),
  minTimeBetweenSubmissions: parseInt(process.env.NUXT_MIN_TIME_BETWEEN_SUBMISSIONS || '30000'), // 30 secondes
  
  // Authentification n8n - SÉCURISÉ (variable privée)
  auth: {
    token: process.env.NUXT_N8N_AUTH_TOKEN || 'default_secret_token',
  },
  
  // URL du webhook n8n - Variable publique
  webhookUrl: process.env.NUXT_N8N_WEBHOOK_URL || 'https://flow.reignera.com/webhook/9b8fa3ed-db5a-4001-abd7-75246b3174b8',
  
  // Configuration email - Variable publique
  contactEmail: process.env.NUXT_CONTACT_EMAIL || 'contact@madebythemis.com',
  
  // Validation des champs
  validation: {
    minNameLength: 2,
    maxNameLength: 50,
    minDescriptionLength: 10,
    maxDescriptionLength: 2000,
    minPhoneLength: 8,
    maxPhoneLength: 20
  },
  
  // Patterns de validation
  patterns: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[0-9+\-\s()]+$/,
    name: /^[a-zA-ZÀ-ÿ\s\-']+$/
  }
}