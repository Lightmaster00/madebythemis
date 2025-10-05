# 🚀 Configuration GitHub Pages pour Made by Themis

## 📋 **Étapes de déploiement**

### **1. Configuration des Secrets GitHub**

1. **Aller dans votre repository GitHub :**
   - Repository → Settings → Secrets and variables → Actions

2. **Ajouter les secrets suivants :**
   ```
   N8N_AUTH_TOKEN=votre_token_secret_ici
   N8N_WEBHOOK_URL=https://flow.reignera.com/webhook/9b8fa3ed-db5a-4001-abd7-75246b3174b8
   CONTACT_EMAIL=contact@madebythemis.com
   MAX_SUBMISSIONS_PER_HOUR=10
   MIN_TIME_BETWEEN_SUBMISSIONS=30000
   ```

### **2. Configuration GitHub Pages**

1. **Aller dans Settings → Pages**
2. **Source :** GitHub Actions
3. **Branch :** main
4. **Custom domain :** madebythemis.com (optionnel)

### **3. Configuration DNS (si domaine personnalisé)**

**Chez votre registrar de domaine :**

```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153

Type: CNAME
Name: www
Value: madebythemis.github.io
```

## 🔧 **Fichiers créés/modifiés**

### **✅ Fichiers créés :**
- `.github/workflows/deploy.yml` - Workflow de déploiement
- `public/CNAME` - Configuration du domaine personnalisé
- `docs/github-pages-setup.md` - Cette documentation

### **✅ Fichiers modifiés :**
- `nuxt.config.ts` - Configuration pour GitHub Pages
- `config/security.js` - Variables d'environnement

## 🚀 **Déploiement automatique**

### **À chaque push sur `main` :**
1. ✅ Installation des dépendances
2. ✅ Build du site statique
3. ✅ Injection des variables d'environnement
4. ✅ Déploiement sur GitHub Pages
5. ✅ Site accessible sur `https://madebythemis.github.io`

### **Avec domaine personnalisé :**
- **URL :** `https://madebythemis.com`
- **HTTPS :** Automatique
- **CDN :** Global

## 🔒 **Sécurité**

### **Variables d'environnement :**
- ✅ **Publiques** : URL webhook, email, limites
- ✅ **Privées** : Token d'authentification n8n
- ✅ **Secrets GitHub** : Stockage sécurisé

### **Authentification n8n :**
- ✅ Headers HTTP sécurisés
- ✅ Token d'authentification
- ✅ Validation côté n8n

## 📊 **Monitoring**

### **Vérifier le déploiement :**
1. **Actions** : Repository → Actions
2. **Pages** : Repository → Settings → Pages
3. **Site** : https://madebythemis.github.io

### **Logs de déploiement :**
- ✅ Build logs dans Actions
- ✅ Erreurs de déploiement visibles
- ✅ Variables d'environnement injectées

## 🎯 **Résultat final**

- **Site statique** optimisé
- **Déploiement automatique** à chaque push
- **Variables d'environnement** sécurisées
- **Domaine personnalisé** (optionnel)
- **HTTPS** automatique
- **CDN** global

## 🆘 **Dépannage**

### **Si le déploiement échoue :**
1. Vérifier les secrets GitHub
2. Vérifier les logs dans Actions
3. Vérifier la configuration DNS

### **Si le formulaire ne fonctionne pas :**
1. Vérifier le token n8n
2. Vérifier l'URL du webhook
3. Vérifier la configuration n8n

## 📞 **Support**

Pour toute question :
- 📧 Email : contact@madebythemis.com
- 📚 Documentation : Ce fichier
- 🔧 Configuration : Fichiers dans `.github/workflows/`
