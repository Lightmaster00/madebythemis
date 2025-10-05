// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-10-05',
  
  // Configuration des modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-icon'
  ],

  // Configuration des polices Google
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700]
    }
  },

  // Configuration du CSS
  css: ['~/assets/css/main.css'],

  // Configuration de l'application
  app: {
    head: {
      title: 'Made by Themis - Conception et Impression 3D',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Services de conception et impression 3D professionnels. De la modélisation à la production, nous donnons vie à vos projets.' },
        { name: 'keywords', content: 'impression 3D, conception 3D, prototypage, modélisation, Fusion 360, FDM, SLA' },
        { property: 'og:title', content: 'Made by Themis - Conception et Impression 3D' },
        { property: 'og:description', content: 'Services de conception et impression 3D professionnels' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Configuration pour GitHub Pages
  ssr: false, // Mode statique pour GitHub Pages
  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  // Configuration des variables d'environnement
  runtimeConfig: {
    public: {
      n8nWebhookUrl: process.env.NUXT_N8N_WEBHOOK_URL || 'https://flow.reignera.com/webhook/9b8fa3ed-db5a-4001-abd7-75246b3174b8',
      contactEmail: process.env.NUXT_CONTACT_EMAIL || 'contact@madebythemis.com',
      maxSubmissionsPerHour: process.env.NUXT_MAX_SUBMISSIONS_PER_HOUR || '3',
      minTimeBetweenSubmissions: process.env.NUXT_MIN_TIME_BETWEEN_SUBMISSIONS || '30000'
    },
    // Variables privées (côté serveur uniquement)
    n8nAuthToken: process.env.NUXT_N8N_AUTH_TOKEN || 'default_secret_token'
  },

  // Configuration TypeScript
  typescript: {
    strict: true
  }
})
