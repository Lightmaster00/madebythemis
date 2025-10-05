# 🚀 Déploiement GitHub Pages - Made by Themis

## 📋 **Configuration actuelle**

### ✅ **Corrections apportées :**

1. **Node.js version** : Mise à jour vers Node 22 (compatible Nuxt 3.19.2)
2. **Configuration Nuxt** : Ajout du `baseURL` pour GitHub Pages
3. **Workflow GitHub Actions** : Structure corrigée pour GitHub Pages
4. **Variables d'environnement** : Configuration pour la production

## 🔧 **Configuration Nuxt.js**

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  ssr: false, // Mode statique obligatoire
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/madebythemis/' : '/',
    buildAssetsDir: '/_nuxt/'
  }
})
```

## 🚀 **Workflow GitHub Actions**

Le workflow `.github/workflows/deploy.yml` est configuré pour :

1. **Build** : Node.js 22 + npm ci
2. **Génération** : `npm run generate` avec variables d'environnement
3. **Déploiement** : Upload vers GitHub Pages

## 🔐 **Variables d'environnement requises**

Dans GitHub → Settings → Secrets and variables → Actions :

```
N8N_AUTH_TOKEN=your_auth_token
N8N_WEBHOOK_URL=your_webhook_url
CONTACT_EMAIL=contact@madebythemis.com
MAX_SUBMISSIONS_PER_HOUR=3
MIN_TIME_BETWEEN_SUBMISSIONS=30000
```

## 🧪 **Test local**

```bash
# Test du build
NODE_ENV=production npm run generate

# Test du serveur local
npx serve .output/public
```

## 📁 **Structure de déploiement**

```
.output/public/          # Site statique généré
├── index.html           # Page d'accueil
├── _nuxt/              # Assets (CSS, JS, images)
├── portfolio/           # Page portfolio
├── pricing/            # Page tarifs
├── about/              # Page à propos
├── contact/            # Page contact
└── legal/              # Pages légales
```

## 🌐 **URLs de déploiement**

- **Développement** : `http://localhost:3000`
- **GitHub Pages** : `https://username.github.io/madebythemis/`
- **Domaine personnalisé** : `https://madebythemis.com` (avec CNAME)

## ⚠️ **Points d'attention**

1. **Base URL** : Configuré pour `/madebythemis/` en production
2. **Assets** : Chemin `/_nuxt/` pour les ressources
3. **SSR désactivé** : Mode statique uniquement
4. **Prerendering** : Toutes les pages sont pré-générées

## 🔄 **Processus de déploiement**

1. **Push sur main** → Déclenche le workflow
2. **Build automatique** → Génération du site statique
3. **Déploiement** → Upload vers GitHub Pages
4. **Disponible** → Site accessible en quelques minutes

## 🛠️ **Dépannage**

### Problème : Site ne se charge pas
- Vérifier que `baseURL` est correct
- S'assurer que `ssr: false` est défini
- Vérifier les variables d'environnement

### Problème : Assets manquants
- Vérifier `buildAssetsDir: '/_nuxt/'`
- S'assurer que les chemins sont relatifs

### Problème : Formulaire ne fonctionne pas
- Vérifier les secrets GitHub
- Tester l'authentification n8n
- Vérifier les variables d'environnement

## 📞 **Support**

En cas de problème, vérifier :
1. Les logs GitHub Actions
2. La configuration des secrets
3. La structure des fichiers générés
