# 🔧 Configuration Git pour Made by Themis

## ✅ **Git initialisé avec succès !**

### **Repository local créé :**
- ✅ Git initialisé
- ✅ Premier commit effectué
- ✅ 32 fichiers ajoutés
- ✅ Configuration GitHub Pages prête

## 🚀 **Prochaines étapes :**

### **1. Créer le repository GitHub :**

1. **Aller sur [github.com](https://github.com)**
2. **Cliquer sur "New repository"**
3. **Nom :** `madebythemis` (ou votre choix)
4. **Description :** "Site web Made by Themis - Services de conception et impression 3D"
5. **Public** (pour GitHub Pages gratuit)
6. **Ne pas** initialiser avec README (déjà présent)

### **2. Connecter le repository local :**

```bash
# Ajouter le remote GitHub
git remote add origin https://github.com/VOTRE_USERNAME/madebythemis.git

# Pousser le code
git push -u origin main
```

### **3. Configurer GitHub Pages :**

1. **Repository → Settings → Pages**
2. **Source :** GitHub Actions
3. **Branch :** main
4. **Custom domain :** madebythemis.com (optionnel)

### **4. Ajouter les secrets GitHub :**

1. **Repository → Settings → Secrets and variables → Actions**
2. **Ajouter les secrets :**
   ```
   N8N_AUTH_TOKEN=votre_token_secret_ici
   N8N_WEBHOOK_URL=https://flow.reignera.com/webhook/9b8fa3ed-db5a-4001-abd7-75246b3174b8
   CONTACT_EMAIL=contact@madebythemis.com
   MAX_SUBMISSIONS_PER_HOUR=10
   MIN_TIME_BETWEEN_SUBMISSIONS=30000
   ```

## 📋 **Commandes Git utiles :**

### **Développement quotidien :**
```bash
# Voir les changements
git status

# Ajouter les fichiers modifiés
git add .

# Commit avec message
git commit -m "Description des changements"

# Pousser vers GitHub
git push origin main
```

### **Déploiement :**
```bash
# Générer le site localement
npm run generate

# Déployer automatiquement (après push)
git push origin main
```

## 🎯 **Résultat attendu :**

- **Repository GitHub :** Créé et connecté
- **GitHub Pages :** Activé avec Actions
- **Déploiement automatique :** À chaque push
- **Site en ligne :** https://madebythemis.github.io
- **Domaine personnalisé :** https://madebythemis.com (optionnel)

## 🆘 **Dépannage :**

### **Si le push échoue :**
```bash
# Vérifier le remote
git remote -v

# Reconfigurer si nécessaire
git remote set-url origin https://github.com/VOTRE_USERNAME/madebythemis.git
```

### **Si GitHub Pages ne fonctionne pas :**
1. Vérifier les secrets GitHub
2. Vérifier les Actions dans l'onglet "Actions"
3. Vérifier la configuration Pages

## 📞 **Support :**

- 📚 Documentation complète : `docs/github-pages-setup.md`
- 🔧 Configuration : Fichiers dans `.github/workflows/`
- 📧 Contact : contact@madebythemis.com
