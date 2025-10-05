# 🔐 Guide de sécurité - Made by Themis

## 🚀 Configuration rapide

### 1. **Générer une clé sécurisée**

```bash
# Générer une clé d'authentification
npm run generate-token

# Ou directement
node scripts/generate-token.js
```

### 2. **Configurer l'environnement**

```bash
# Copier le fichier d'exemple
cp config/env.example .env

# Éditer avec votre clé
nano .env
```

### 3. **Démarrer le projet**

```bash
npm run dev
```

## 🔒 **Sécurité**

### ✅ **Fichiers protégés**

- ✅ `.env` - Variables d'environnement (dans .gitignore)
- ✅ `config/security.js` - Configuration sécurisée
- ✅ `scripts/generate-token.js` - Générateur de clés

### 🛡️ **Clés d'authentification**

- **Format** : `mbth_` + 32 caractères
- **Longueur** : 36 caractères minimum
- **Rotation** : Tous les 3-6 mois
- **Stockage** : Variables d'environnement uniquement

### 📊 **Exemple de configuration**

```bash
# .env
N8N_AUTH_TOKEN=mbth_abc123def456ghi789jkl012mno345pqr678stu901vwx234yz567890
N8N_WEBHOOK_URL=https://flow.reignera.com/webhook/9b8fa3ed-db5a-4001-abd7-75246b3174b8
MAX_SUBMISSIONS_PER_HOUR=3
MIN_TIME_BETWEEN_SUBMISSIONS=30000
CONTACT_EMAIL=contact@madebythemis.com
```

## 🔧 **Configuration n8n**

### **Headers de sécurité**

Le formulaire envoie ces headers :

```javascript
{
  'Content-Type': 'application/json',
  'Authorization': 'Bearer mbth_votre_cle_ici',
  'X-API-Key': 'mbth_votre_cle_ici',
  'X-Source': 'madebythemis-website'
}
```

### **Vérification dans n8n**

```javascript
// Dans votre workflow n8n
const authHeader = $input.headers.authorization;
const apiKey = $input.headers['x-api-key'];
const source = $input.headers['x-source'];

const expectedToken = 'mbth_votre_cle_ici'; // Même clé que dans .env

const isAuthenticated = 
  authHeader === `Bearer ${expectedToken}` &&
  apiKey === expectedToken &&
  source === 'madebythemis-website';
```

## 🧪 **Test de sécurité**

### **Test avec curl**

```bash
# Test avec bonne clé
curl -X POST https://flow.reignera.com/webhook/9b8fa3ed-db5a-4001-abd7-75246b3174b8 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer mbth_votre_cle_ici" \
  -H "X-API-Key: mbth_votre_cle_ici" \
  -H "X-Source: madebythemis-website" \
  -d '{"prenom":"Test","nom":"User","email":"test@example.com","type_projet":"conception","description":"Test","confidentialite":"Oui","timestamp":"2024-10-05T00:00:00.000Z","source":"Site web Made by Themis","userAgent":"Mozilla/5.0","ip":"client-side"}'
```

### **Test de sécurité**

```bash
# Test avec mauvaise clé (doit échouer)
curl -X POST https://flow.reignera.com/webhook/9b8fa3ed-db5a-4001-abd7-75246b3174b8 \
  -H "Authorization: Bearer wrong-token" \
  -d '{"test":"data"}'
```

## 📋 **Checklist de sécurité**

- [ ] Clé générée avec `npm run generate-token`
- [ ] Fichier `.env` créé avec la clé
- [ ] Fichier `.env` ajouté au `.gitignore`
- [ ] Clé configurée dans n8n
- [ ] Test de l'authentification réussi
- [ ] Clé stockée de manière sécurisée
- [ ] Plan de rotation des clés établi

## 🚨 **En cas de compromission**

1. **Changez immédiatement** la clé
2. **Vérifiez les logs** n8n
3. **Surveillez** les accès suspects
4. **Mettez à jour** tous les environnements
5. **Documentez** l'incident

## 📞 **Support**

En cas de problème :
- Vérifiez les logs n8n
- Testez avec curl
- Vérifiez la configuration des headers
- Contactez le support technique
