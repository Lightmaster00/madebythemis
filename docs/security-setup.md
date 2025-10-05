# 🔐 Configuration sécurisée - Made by Themis

## 🚀 Installation rapide

### 1. **Générer une clé sécurisée**

```bash
# Générer une clé d'authentification
node scripts/generate-token.js
```

### 2. **Configurer les variables d'environnement**

```bash
# Copier le fichier d'exemple
cp config/env.example .env

# Éditer le fichier .env avec votre clé
nano .env
```

### 3. **Contenu du fichier .env**

```bash
# Clé d'authentification pour n8n (GÉNÉREZ UNE CLÉ FORTE)
N8N_AUTH_TOKEN=mbth_abc123def456ghi789jkl012mno345pqr678stu901vwx234yz567890

# URL du webhook n8n
N8N_WEBHOOK_URL=https://flow.reignera.com/webhook/9b8fa3ed-db5a-4001-abd7-75246b3174b8

# Configuration de sécurité
MAX_SUBMISSIONS_PER_HOUR=3
MIN_TIME_BETWEEN_SUBMISSIONS=30000

# Configuration email
CONTACT_EMAIL=contact@madebythemis.com
```

## 🔒 **Sécurité**

### ✅ **Bonnes pratiques**

1. **Ne commitez JAMAIS le fichier .env**
2. **Utilisez des clés différentes** pour dev/prod
3. **Changez régulièrement** vos clés
4. **Surveillez l'utilisation** de vos clés
5. **Utilisez des clés longues** (32+ caractères)

### 🛡️ **Clés recommandées**

- **Format** : `mbth_` + 32 caractères aléatoires
- **Longueur** : 36 caractères minimum
- **Complexité** : Lettres, chiffres, tirets
- **Rotation** : Tous les 3-6 mois

### 📊 **Exemples de clés sécurisées**

```bash
# Clé API standard
N8N_AUTH_TOKEN=mbth_abc123def456ghi789jkl012mno345pqr678stu901vwx234yz567890

# Clé hexadécimale
N8N_AUTH_TOKEN=a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456

# Clé base64
N8N_AUTH_TOKEN=YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoxMjM0NTY3ODkw
```

## 🔧 **Configuration n8n**

### **Headers à vérifier dans n8n**

```javascript
// Dans votre workflow n8n
const authHeader = $input.headers.authorization;
const apiKey = $input.headers['x-api-key'];
const source = $input.headers['x-source'];

// Vérifications
const expectedToken = process.env.N8N_AUTH_TOKEN; // Votre clé
const isAuthenticated = 
  authHeader === `Bearer ${expectedToken}` &&
  apiKey === expectedToken &&
  source === 'madebythemis-website';
```

### **Variables d'environnement n8n**

Ajoutez dans votre configuration n8n :

```bash
N8N_AUTH_TOKEN=mbth_votre_cle_ici
```

## 🧪 **Test de sécurité**

### **Test avec curl**

```bash
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

- [ ] Clé générée avec `scripts/generate-token.js`
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
