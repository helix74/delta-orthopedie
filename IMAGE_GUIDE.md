# 📸 Guide d'Images pour Delta Orthopédie

## 🗂️ Structure des Dossiers

```
public/images/
├── hero/                    # Images de fond pour la section héro
├── services/               # Images des services et produits
├── team/                   # Photos de l'équipe
├── equipment/              # Photos de l'équipement et atelier
├── facility/               # Photos de la clinique/facilité
└── products/               # Photos détaillées des produits
```

## 🎯 Images Prioritaires à Ajouter

### 1. **Hero Section** (`/images/hero/`)
- **hero-background.jpg** (1920x1080px)
  - Image de fond montrant une clinique moderne d'orthopédie
  - Ou une image d'équipement médical professionnel
  - Ou une photo d'équipe au travail

### 2. **Équipe** (`/images/team/`)
- **imed-djebbi.jpg** (400x400px)
  - Photo professionnelle de M. Imed Djebbi
  - En tenue médicale ou professionnelle
- **cherifa-soltani.jpg** (400x400px)
  - Photo professionnelle de Mme Cherifa Soltani
  - En tenue médicale ou professionnelle

### 3. **Services** (`/images/services/`)
- **prothese-membre-inferieur.jpg** (600x400px)
  - Prothèse de jambe ou de pied
  - Montrant la qualité et le design
- **prothese-membre-superieur.jpg** (600x400px)
  - Prothèse de bras ou de main
  - Incluant les solutions myoélectriques
- **prothese-esthetique-silicone.jpg** (600x400px)
  - Prothèses esthétiques en silicone
  - Montrant le réalisme et la qualité
- **prothese-pediatrique.jpg** (600x400px)
  - Prothèses adaptées aux enfants
  - Couleurs vives et design adapté

### 4. **Équipement** (`/images/equipment/`)
- **atelier-fabrication.jpg** (800x600px)
  - Atelier de fabrication sur place
  - Machines et outils professionnels
- **technologies-avancees.jpg** (800x600px)
  - Équipements de pointe
  - Ordinateurs et logiciels spécialisés

### 5. **Facilité** (`/images/facility/`)
- **clinique-exterieur.jpg** (800x600px)
  - Vue extérieure de la clinique
  - Façade moderne et accessible
- **salle-consultation.jpg** (800x600px)
  - Salle de consultation
  - Équipement et confort
- **salle-attente.jpg** (800x600px)
  - Salle d'attente confortable
  - Ambiance accueillante

## 📋 Spécifications Techniques

### Formats Recommandés
- **Format**: JPG pour les photos, PNG pour les logos
- **Compression**: Optimisée pour le web (70-85% qualité)
- **Taille maximale**: 500KB par image

### Dimensions Optimales
- **Hero**: 1920x1080px (16:9)
- **Services**: 600x400px (3:2)
- **Équipe**: 400x400px (1:1)
- **Facilité**: 800x600px (4:3)

## 🔍 Optimisation SEO

### Noms de Fichiers
- Utilisez des noms descriptifs en français
- Incluez des mots-clés pertinents
- Exemple: `prothese-membre-inferieur-carbone.jpg`

### Attributs Alt
- Descriptions détaillées et pertinentes
- Incluez le nom de la marque
- Exemple: "Prothèse de membre inférieur en fibre de carbone - Delta Orthopédie"

### Métadonnées
- Ajoutez des titres descriptifs
- Incluez des mots-clés géographiques (Tunisie, Tunis)
- Mentionnez les certifications (ISPO Cat. II)

## 🎨 Suggestions de Contenu Visuel

### Types d'Images à Privilégier
1. **Photos professionnelles** de l'équipe
2. **Images de produits** de haute qualité
3. **Photos de l'atelier** et équipements
4. **Images de la clinique** moderne
5. **Photos de patients satisfaits** (avec consentement)
6. **Images de technologies** avancées

### Éléments à Éviter
- Images génériques de stock
- Photos de mauvaise qualité
- Images non pertinentes au domaine médical
- Photos sans contexte professionnel

## 🚀 Prochaines Étapes

1. **Collecter les images** selon la structure proposée
2. **Optimiser** chaque image pour le web
3. **Ajouter les métadonnées** appropriées
4. **Tester** le chargement et l'affichage
5. **Vérifier** la responsivité sur mobile

## 📱 Responsive Design

Toutes les images sont configurées pour être responsives avec:
- `sizes` appropriés pour chaque contexte
- Chargement optimisé avec Next.js Image
- Fallbacks pour les images manquantes
- Animations de chargement fluides

## 🔧 Intégration Technique

Les images sont intégrées via le composant `OptimizedImage` qui:
- Optimise automatiquement le format
- Gère le lazy loading
- Fournit des placeholders
- Assure l'accessibilité
- Améliore les performances 