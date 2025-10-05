#!/usr/bin/env node

/**
 * Script pour générer une clé d'authentification sécurisée
 * Usage: node scripts/generate-token.js
 */

const crypto = require('crypto');

function generateSecureToken() {
  // Générer une clé de 32 bytes (256 bits)
  const token = crypto.randomBytes(32).toString('hex');
  return token;
}

function generateApiKey() {
  // Générer une clé API au format standard
  const prefix = 'mbth_'; // Made by Themis prefix
  const randomPart = crypto.randomBytes(24).toString('base64url');
  return `${prefix}${randomPart}`;
}

console.log('🔐 Génération de clés d\'authentification sécurisées\n');

const secureToken = generateSecureToken();
const apiKey = generateApiKey();

console.log('📋 Clés générées :');
console.log('==================');
console.log(`Token sécurisé: ${secureToken}`);
console.log(`Clé API: ${apiKey}`);
console.log('');

console.log('📝 Instructions :');
console.log('================');
console.log('1. Copiez le fichier config/env.example vers .env');
console.log('2. Remplacez "your-secure-token-here" par une des clés ci-dessus');
console.log('3. Gardez ces clés secrètes et ne les partagez jamais');
console.log('4. Utilisez la même clé dans votre configuration n8n');
console.log('');

console.log('⚠️  SÉCURITÉ :');
console.log('=============');
console.log('- Ne commitez JAMAIS le fichier .env');
console.log('- Utilisez des clés différentes pour dev/prod');
console.log('- Changez régulièrement vos clés');
console.log('- Surveillez l\'utilisation de vos clés');
