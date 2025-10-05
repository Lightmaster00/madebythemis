# Authentification n8n pour Made by Themis

## 🔐 Configuration de l'authentification

### Données reçues par n8n

Le webhook n8n recevra les données suivantes :

```json
{
  "data": {
    "prenom": "John",
    "nom": "Doe", 
    "email": "john@example.com",
    "telephone": "0123456789",
    "type_projet": "conception",
    "description": "Description du projet...",
    "confidentialite": "Oui",
    "timestamp": "2024-10-05T00:00:00.000Z",
    "source": "Site web Made by Themis",
    "userAgent": "Mozilla/5.0...",
    "ip": "client-side",
    "auth": {
      "token": "madebythemis_2024",
      "version": "1.0",
      "checksum": "abc123def456"
    }
  },
  "auth_token": "madebythemis_2024",
  "auth_version": "1.0"
}
```

### Vérifications à implémenter dans n8n

#### 1. Vérification du token d'authentification
```javascript
// Dans votre workflow n8n
const authToken = $input.body.auth_token;
const expectedToken = 'madebythemis_2024';

if (authToken !== expectedToken) {
  return {
    success: false,
    error: 'Token d\'authentification invalide',
    code: 'INVALID_AUTH_TOKEN'
  };
}
```

#### 2. Vérification de la version
```javascript
const authVersion = $input.body.auth_version;
const expectedVersion = '1.0';

if (authVersion !== expectedVersion) {
  return {
    success: false,
    error: 'Version d\'authentification non supportée',
    code: 'UNSUPPORTED_VERSION'
  };
}
```

#### 3. Vérification du checksum
```javascript
const data = JSON.parse($input.body.data);
const receivedChecksum = data.auth.checksum;

// Recalculer le checksum côté serveur
const dataString = `${data.prenom}${data.nom}${data.email}${data.type_projet}${new Date().toISOString().split('T')[0]}`;
let hash = 0;
for (let i = 0; i < dataString.length; i++) {
  const char = dataString.charCodeAt(i);
  hash = ((hash << 5) - hash) + char;
  hash = hash & hash;
}
const expectedChecksum = Math.abs(hash).toString(16);

if (receivedChecksum !== expectedChecksum) {
  return {
    success: false,
    error: 'Checksum invalide - données corrompues',
    code: 'INVALID_CHECKSUM'
  };
}
```

#### 4. Vérification du rate limiting (optionnel)
```javascript
// Vérifier l'IP et limiter les soumissions
const clientIP = $input.headers['x-forwarded-for'] || $input.headers['x-real-ip'];
const email = data.email;

// Logique de rate limiting basée sur l'IP et l'email
// (à implémenter selon vos besoins)
```

### Réponse attendue de n8n

En cas de succès :
```json
{
  "success": true,
  "message": "Demande reçue avec succès",
  "id": "unique-request-id"
}
```

En cas d'erreur :
```json
{
  "success": false,
  "error": "Description de l'erreur",
  "code": "ERROR_CODE"
}
```

## 🛡️ Sécurité avancée

### Headers de sécurité recommandés
- Vérifier l'origine de la requête
- Limiter les tentatives par IP
- Logger toutes les tentatives d'authentification
- Implémenter un système de blacklist

### Monitoring
- Surveiller les tentatives d'authentification échouées
- Alertes en cas de tentatives suspectes
- Logs détaillés pour le debugging

## 📧 Traitement des demandes

Une fois l'authentification validée :
1. Envoyer un email de confirmation au client
2. Notifier l'équipe Made by Themis
3. Créer un ticket de suivi
4. Archiver la demande dans votre système

## 🔧 Configuration du webhook

URL du webhook : `https://flow.reignera.com/webhook/9b8fa3ed-db5a-4001-abd7-75246b3174b8`

Méthode : `POST`
Content-Type : `multipart/form-data`
