#!/bin/bash

# Script de déploiement local pour GitHub Pages
echo "🚀 Déploiement local pour GitHub Pages..."

# Nettoyer les anciens builds
echo "🧹 Nettoyage des anciens builds..."
rm -rf .output
rm -rf dist

# Définir l'environnement de production
export NODE_ENV=production

# Générer le site statique
echo "📦 Génération du site statique..."
npm run generate

# Vérifier que le build a réussi
if [ -d ".output/public" ]; then
    echo "✅ Build réussi !"
    echo "📁 Fichiers générés dans .output/public/"
    echo "🌐 Vous pouvez tester avec: npx serve .output/public"
else
    echo "❌ Erreur lors du build"
    exit 1
fi

echo "🎉 Déploiement local terminé !"
