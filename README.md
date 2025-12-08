# Basket Club Frontend

Interface utilisateur de l'application Basket Club. Site public et Tableau de bord de gestion pour les clubs de basket (matchs, statistiques, événements).

Développé avec **Astro** pour la performance et le rendu hybride (SSR), couplé avec **Vue.js** pour les composants interactifs.

## 🛠 Tech Stack

- **Framework** : [Astro 4.x](https://astro.build/)
- **Composants Interactifs** : [Vue.js 3](https://vuejs.org/)
- **Styles** : [Tailwind CSS](https://tailwindcss.com/)
- **Gestion d'État** : [Pinia](https://pinia.vuejs.org/)
- **Graphiques** : [Chart.js](https://www.chartjs.org/) (via `vue-chartjs`)
- **Validation** : Zod & Vee-Validate
- **Tests E2E** : Playwright

## 🚀 Installation & Démarrage

### Prérequis

- Node.js 20+ (LTS recommandé)
- API Backend (Laravel) qui tourne (voir README backend).

### 1. Installation

```bash
cd frontend-basketclub-app
npm install
```

### 2. Configuration Environnement

Copiez le fichier `.env.example` en `.env` :

```bash
cp .env.example .env
```

Modifiez `.env` pour pointer vers votre API Back :

```bash
# URL de l'API Backend (DDEV ou localhost)
PUBLIC_API_URL=https://backend-basketclub-app.ddev.site/api 
# OU http://localhost:8000/api si sans Docker
```

### 3. Lancer en Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:4321`.

## 🏗 Architecture du Projet

- **`src/pages`** : Routes de l'application (Astro file-based routing).
    - `index.astro` : Accueil.
    - `api/` : Endpoints API interne (Proxy SSR).
    - `dashboard/`, `manage/` : Pages protégées (Tableau de bord).
- **`src/components`** : Composants réutilisables.
    - `stats/` : Composants de visualisation (Graphiques).
    - `auth/` : Formulaires de connexion/inscription.
- **`src/layouts`** : Mise en page globale (`Layout.astro`).
- **`src/stores`** : Stores Pinia (Gestion utilisateur, équipes, stats).
- **`src/middleware`** : Middleware Astro pour la protection des routes (Auth check).

## 🧪 Tests

Les tests de bout en bout (E2E) sont gérés par **Playwright**.

```bash
# Installer les navigateurs (première fois)
npx playwright install

# Lancer les tests
npm run test:e2e
```

## 📦 Build & Production

L'application est configurée pour le rendu côté serveur (SSR) avec l'adaptateur Node.js.

### Construction

```bash
npm run build
```
Cela génère un dossier `dist/`.

## 📦 Déploiement (Production)
L'application est en mode **SSR (Server Side Rendering)**. Elle nécessite un processus Node.js actif.

### Configuration Serveur (ex: RunCloud)

1. **Type d'app** : **Native App** (Node.js). Ne pas choisir "Static" ou "PHP".
2. **Variables d'Environnement** :
   ```bash
   HOST=0.0.0.0
   PORT=3000   # (Ou laissé vide si géré par RunCloud)
   PUBLIC_API_URL=https://api.basketclub.com/api
   ```
   > **Note** : Astro doit écouter sur l'interface publique (0.0.0.0) pour que le proxy Nginx du serveur puisse lui parler.

### Script de Build & Start

Dans la configuration du déploiement (Git) :

- **Build Command** :
  ```bash
  npm install && npm run build
  ```

- **Start Command** :
  ```bash
  node ./dist/server/entry.mjs
  ```

### Process Manager
Assurez-vous que l'application est supervisée (via PM2 ou Systemd) pour redémarrer automatiquement en cas de crash. RunCloud gère cela nativement pour les "Native Apps".

## 🤝 Contribution

- Les composants Vue doivent être dans `src/components`.
- **Règle d'or de l'Hydratation** :
  - **Par défaut**, Astro rend le HTML statique (même en SSR).
  - Utilisez `client:load` (ou `client:visible`) **uniquement** si le composant a besoin d'interactivité navigateur (clics, state Pinia, graphiques).
  - *Exemple* : Un graphique Chart.js a besoin de `client:visible`. Un header statique n'en a pas besoin.

### Stratégie de Rendu (SSR vs SSG)
Votre configuration est en mode **SSR par défaut** (`output: 'server'`).
- **SSR** : La page est générée à chaque requête (Idéal pour Dashboard, Données privées).
- **SSG (Prerender)** : Pour les pages publiques qui changent peu (ex: Accueil, Contact), on peut optimiser en les rendant statiques.
  - Ajoutez `export const prerender = true;` en haut du fichier `.astro`.
  - Ces pages seront construites une seule fois au `npm run build`.
