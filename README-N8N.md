# Configuration du formulaire n8n

## 📋 Données envoyées

Le formulaire envoie les données suivantes à votre webhook n8n :

```json
{
  "prenom": "Prénom du client",
  "nom": "Nom du client", 
  "email": "email@client.com",
  "telephone": "0123456789",
  "type_projet": "conception|impression|complet|prototypage|autre",
  "description": "Description détaillée du projet",
  "confidentialite": "Oui|Non",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "source": "Site web Made by Themis"
}
```

## 🔧 Configuration n8n

### 1. Créer un webhook dans n8n

1. Ajoutez un nœud **Webhook** dans votre workflow n8n
2. Configurez le webhook avec :
   - **HTTP Method** : POST
   - **Path** : `/contact-form` (ou le chemin de votre choix)
   - **Response Mode** : "On Received"

### 2. Récupérer l'URL du webhook

L'URL ressemblera à :
```
https://votre-instance-n8n.com/webhook/contact-form
```

### 3. Mettre à jour le code JavaScript

Dans le fichier `contact.html`, ligne 264, remplacez :
```javascript
const n8nWebhookUrl = 'https://votre-instance-n8n.com/webhook/contact-form';
```

Par votre vraie URL n8n.

## 📧 Exemple de workflow n8n

### Workflow simple (Email automatique)

1. **Webhook** (réception des données)
2. **Set** (formatage du message)
3. **Email** (envoi automatique)

### Configuration du nœud Set

```json
{
  "sujet": "Nouvelle demande de devis - {{ $json.prenom }} {{ $json.nom }}",
  "message": "Nouvelle demande reçue :\n\nNom: {{ $json.prenom }} {{ $json.nom }}\nEmail: {{ $json.email }}\nTéléphone: {{ $json.telephone }}\nType: {{ $json.type_projet }}\n\nDescription:\n{{ $json.description }}\n\nAccepte confidentialité: {{ $json.confidentialite }}\nDate: {{ $json.timestamp }}"
}
```

### Workflow avancé (CRM + Email)

1. **Webhook** (réception)
2. **Google Sheets** (sauvegarde dans un tableau)
3. **Email** (notification)
4. **Slack** (notification équipe)

## 🛡️ Sécurité

- Le formulaire valide tous les champs requis côté client
- Les données sont envoyées en JSON sécurisé
- Gestion des erreurs avec messages utilisateur
- Protection contre les envois multiples (bouton désactivé)

## 🧪 Test

Pour tester le formulaire :

1. Ouvrez `contact.html` dans un navigateur
2. Remplissez le formulaire
3. Vérifiez que les données arrivent dans n8n
4. Testez les cas d'erreur (URL incorrecte)

## 📝 Notes

- Le formulaire se réinitialise automatiquement après envoi réussi
- Messages d'état visuels (succès/erreur)
- Compatible avec tous les navigateurs modernes
- Responsive design maintenu
