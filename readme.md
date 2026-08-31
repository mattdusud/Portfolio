# Portfolio — Matthieu Giardina

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-000000?style=for-the-badge&logo=googlechrome&logoColor=white)](https://mattdusud.github.io/Portfolio_Matt_Front/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![SCSS](https://img.shields.io/badge/SCSS-CSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)

## Présentation

Ce projet est mon **portfolio personnel**, développé avec React et Vite.

L'objectif est de présenter mon parcours, mes compétences et les différents projets réalisés au cours de ma formation et de mon apprentissage du développement web.

J'ai également souhaité utiliser ce portfolio comme un terrain d'expérimentation pour travailler les **animations, les interactions et le responsive design**, plutôt que de créer simplement une succession de pages statiques.

### [Voir le portfolio en ligne](https://mattdusud.github.io/Portfolio_Matt_Front/)

---

## Fonctionnalités

- **Design responsive** adapté aux différentes tailles d'écran
- **Animations au scroll** avec Motion
- **Trajectoire SVG interactive** pour la présentation des projets
- **Sliders d'images** pour les projets
- **Modale plein écran** pour visualiser les images
- **Navigation entre les projets** au clavier
- Présentation détaillée des projets et des technologies utilisées
- Liens directs vers les dépôts GitHub des projets
- Navigation entre les différentes sections avec React Router
- Interface entièrement personnalisée en SCSS

---

## Technologies utilisées

| Technologie | Utilisation |
|---|---|
| **React** | Création de l'interface et des composants |
| **Vite** | Environnement de développement et build |
| **JavaScript** | Logique et interactions |
| **SCSS** | Mise en forme et responsive design |
| **Motion** | Animations et interactions au scroll |
| **React Router** | Gestion de la navigation |
| **Git / GitHub** | Versionnement et hébergement du projet |
| **GitHub Pages** | Déploiement du portfolio |

---

## Structure du projet

```text
src/
├── assets/
│
├── components/
│   ├── CardProjet/
│   ├── Header/
│   ├── MiniSlider/
│   ├── ModalePhoto/
│   └── ...
│
├── data/
│   └── listeProjetsPortfolio.json
│
├── pages/
│   ├── Accueil/
│   ├── Projets/
│   └── ...
│
├── App.jsx
├── main.jsx
└── ...
```

## Installation

### Prérequis

- [Node.js](https://nodejs.org/)
- npm

### Cloner le projet

```bash
git clone https://github.com/mattdusud/Portfolio_Matt_Front.git
cd Portfolio_Matt_Front
```

### Installer les dépendances

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Le projet sera alors disponible à l'adresse indiquée par Vite, généralement :

```text
http://localhost:5173
```


## Build de production

Pour générer la version de production :

```bash
npm run build
```

Pour prévisualiser le build :

```bash
npm run preview
```

---

## Déploiement

Le portfolio est actuellement déployé avec **GitHub Pages**.

### Version en ligne

 [Voir le portfolio](https://mattdusud.github.io/Portfolio_Matt_Front/)


## Auteur

**Matthieu Giardina**

Développeur Web — Front-End

Passionné par la technologie et la création d'interfaces interactives, je développe mes compétences autour de JavaScript, React et du développement front-end.

---

## Licence

Ce projet est un portfolio personnel.

Le code est public à des fins de présentation et d'apprentissage.
