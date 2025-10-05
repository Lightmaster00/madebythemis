# Configuration n8n - Authentification par Header

## 🔧 Configuration simplifiée

### 1. **Créer le workflow n8n**

1. **Nœud Webhook** :
   - **HTTP Method** : `POST`
   - **Path** : `/webhook/9b8fa3ed-db5a-4001-abd7-75246b3174b8`
   - **Response Mode** : `On Received`

### 2. **Vérification de l'authentification**

Ajoutez un nœud **"Function"** après le Webhook :

```javascript
// Récupérer les headers
const authHeader = $input.headers.authorization;
const apiKey = $input.headers['x-api-key'];
const source = $input.headers['x-source'];

// Token attendu
const expectedToken = 'madebythemis_2024';

// Vérifications
const isAuthValid = authHeader === `Bearer ${expectedToken}`;
const isApiKeyValid = apiKey === expectedToken;
const isSourceValid = source === 'madebythemis-website';

// Authentification globale
const isAuthenticated = isAuthValid && isApiKeyValid && isSourceValid;

// Retourner les données
return {
  authenticated: isAuthenticated,
  data: $input.body,
  headers: {
    auth: isAuthValid,
    apiKey: isApiKeyValid,
    source: isSourceValid
  }
};
```

### 3. **Branchement conditionnel**

Ajoutez un nœud **"IF"** :
- **Condition** : `{{ $json.authenticated === true }}`

### 4. **Traitement des données (SUCCESS)**

Si authentifié, ajoutez un nœud **"Set"** :

```javascript
// Préparer l'email
const data = $json.data;

return {
  to: "contact@madebythemis.com",
  subject: `Nouvelle demande - ${data.prenom} ${data.nom}`,
  body: `
    <h2>Nouvelle demande de contact</h2>
    <p><strong>Nom :</strong> ${data.prenom} ${data.nom}</p>
    <p><strong>Email :</strong> ${data.email}</p>
    <p><strong>Téléphone :</strong> ${data.telephone || 'Non renseigné'}</p>
    <p><strong>Type de projet :</strong> ${data.type_projet}</p>
    <p><strong>Description :</strong></p>
    <p>${data.description}</p>
    <p><strong>Date :</strong> ${data.timestamp}</p>
  `,
  success: true,
  message: "Demande reçue avec succès"
};
```

### 5. **Gestion des erreurs (ERROR)**

Si non authentifié, ajoutez un nœud **"Set"** :

```javascript
return {
  success: false,
  error: "Authentification échouée",
  code: "AUTH_FAILED",
  details: {
    authHeader: $json.headers.auth,
    apiKey: $json.headers.apiKey,
    source: $json.headers.source
  }
};
```

### 6. **Réponse finale**

Ajoutez un nœud **"Respond to Webhook"** :

```javascript
// Retourner la réponse appropriée
if ($json.success) {
  return {
    success: true,
    message: "Demande reçue avec succès",
    id: "req_" + Date.now()
  };
} else {
  return {
    success: false,
    error: "Authentification échouée",
    code: "AUTH_FAILED"
  };
}
```

## 🔒 **Headers de sécurité utilisés**

Le formulaire envoie ces headers :

```javascript
{
  'Content-Type': 'application/json',
  'Authorization': 'Bearer madebythemis_2024',
  'X-API-Key': 'madebythemis_2024',
  'X-Source': 'madebythemis-website'
}
```

## 📊 **Données reçues**

```json
{
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
  "ip": "client-side"
}
```

## ✅ **Avantages de cette méthode**

- ✅ **Plus simple** : Pas de checksum complexe
- ✅ **Plus sécurisé** : Headers d'authentification
- ✅ **Plus rapide** : Validation directe
- ✅ **Plus maintenable** : Code plus clair
- ✅ **Standard** : Utilise les headers HTTP classiques

## 🧪 **Test du webhook**

Testez avec curl :

```bash
curl -X POST https://flow.reignera.com/webhook/9b8fa3ed-db5a-4001-abd7-75246b3174b8 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer madebythemis_2024" \
  -H "X-API-Key: madebythemis_2024" \
  -H "X-Source: madebythemis-website" \
  -d '{"prenom":"Test","nom":"User","email":"test@example.com","type_projet":"conception","description":"Test","confidentialite":"Oui","timestamp":"2024-10-05T00:00:00.000Z","source":"Site web Made by Themis","userAgent":"Mozilla/5.0","ip":"client-side"}'
```

C'est beaucoup plus simple et sécurisé ! 🚀
