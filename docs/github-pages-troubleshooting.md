# 🔧 Dépannage GitHub Pages - Made by Themis

## 🚨 **Problème actuel : Page blanche avec erreurs 404**

### **Diagnostic :**
- ✅ Code poussé sur GitHub
- ✅ Workflow GitHub Actions configuré
- ❌ Site ne se charge pas correctement
- ❌ Assets (CSS/JS) retournent 404

## 🔍 **Vérifications nécessaires :**

### 1. **GitHub Pages activé ?**
Aller sur : `https://github.com/Lightmaster00/madebythemis/settings/pages`

**Configuration requise :**
- **Source** : `GitHub Actions` (pas "Deploy from a branch")
- **Branch** : `main`
- **Folder** : `/ (root)`

### 2. **Workflow GitHub Actions**
Aller sur : `https://github.com/Lightmaster00/madebythemis/actions`

**Vérifier :**
- ✅ Workflow "Deploy to GitHub Pages" s'exécute
- ✅ Build réussit sans erreur
- ✅ Déploiement se termine avec succès

### 3. **Secrets configurés ?**
Aller sur : `https://github.com/Lightmaster00/madebythemis/settings/secrets/actions`

**Secrets requis :**
```
N8N_AUTH_TOKEN=your_token_here
N8N_WEBHOOK_URL=your_webhook_url
CONTACT_EMAIL=contact@madebythemis.com
MAX_SUBMISSIONS_PER_HOUR=3
MIN_TIME_BETWEEN_SUBMISSIONS=30000
```

## 🛠️ **Solutions possibles :**

### **Solution 1 : Réactiver GitHub Pages**
1. Aller dans Settings → Pages
2. Changer la source vers "Deploy from a branch"
3. Sélectionner `main` et `/ (root)`
4. Attendre 5 minutes
5. Rechanger vers "GitHub Actions"

### **Solution 2 : Vérifier le workflow**
1. Aller dans Actions
2. Vérifier que le workflow s'exécute
3. Cliquer sur le dernier run
4. Vérifier les logs d'erreur

### **Solution 3 : Test local**
```bash
# Tester le build local
NODE_ENV=production npm run generate

# Tester le serveur local
npx serve .output/public
```

### **Solution 4 : Configuration alternative**
Si le problème persiste, essayer :
1. Désactiver GitHub Pages
2. Attendre 5 minutes
3. Réactiver avec GitHub Actions
4. Vérifier l'URL : `https://lightmaster00.github.io/madebythemis/`

## 📊 **URLs de test :**

- **Repository** : `https://github.com/Lightmaster00/madebythemis`
- **Actions** : `https://github.com/Lightmaster00/madebythemis/actions`
- **Pages Settings** : `https://github.com/Lightmaster00/madebythemis/settings/pages`
- **Site** : `https://lightmaster00.github.io/madebythemis/`

## 🚨 **Problèmes courants :**

### **Erreur 404 sur les assets**
- **Cause** : Mauvaise configuration du `baseURL`
- **Solution** : Utiliser `router.base` au lieu de `app.baseURL`

### **Page blanche**
- **Cause** : JavaScript ne se charge pas
- **Solution** : Vérifier les chemins des assets

### **Redirection 301**
- **Cause** : GitHub Pages pas encore configuré
- **Solution** : Attendre et réessayer

## 📞 **Prochaines étapes :**

1. **Vérifier GitHub Pages** : Settings → Pages
2. **Vérifier Actions** : Onglet Actions
3. **Tester localement** : `npm run generate`
4. **Attendre le déploiement** : 5-10 minutes

## 🔄 **Si rien ne fonctionne :**

1. **Créer un nouveau repository**
2. **Copier le code**
3. **Configurer GitHub Pages**
4. **Tester avec une configuration simple**
