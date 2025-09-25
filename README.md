# RUN’Accès – Application mobile inclusive (PMR & malvoyants) – La Réunion

[![CI](https://github.com/bamby974/runacces/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bamby974/runacces/actions/workflows/ci.yml)


> **Mission.** RUN’Accès est une application **React Native (Expo, TypeScript)** qui facilite la **mobilité**, l’**autonomie** et l’**inclusion** des **personnes à mobilité réduite (PMR)** et **malvoyantes** à **La Réunion**.  
> Fonctionnalités clés : **carte & lieux accessibles**, **itinéraires accessibles**, **réservation de transport adapté**, **démarches administratives assistées**, **réseau local (associations/pros/événements)**, **signalements communautaires**, **SOS**, et **assistant vocal IA** (FR / créole réunionnais / EN).

---

## 🧭 Sommaire
- [Fonctionnalités](#-fonctionnalités)
- [Accessibilité (WCAG 2.2 AA / RGAA)](#-accessibilité-wcag-22-aa--rgaa)
- [Écrans & parcours](#-écrans--parcours)
- [Modèle de données (Supabase)](#-modèle-de-données-supabase)
- [Architecture & stack](#-architecture--stack)
- [Démarrage rapide](#-démarrage-rapide)
- [Configuration (.env)](#-configuration-env)
- [Scripts NPM](#-scripts-npm)
- [Jeux de données (seed)](#-jeux-de-données-seed)
- [Design System](#-design-system)
- [IA & services](#-ia--services)
- [Qualité, tests & CI](#-qualité-tests--ci)
- [i18n & contenus](#-i18n--contenus)
- [Hors‑ligne & performances](#-horsligne--performances)
- [Sécurité & confidentialité (RGPD)](#-sécurité--confidentialité-rgpd)
- [Roadmap](#-roadmap)
- [Contribution](#-contribution)
- [Licence](#-licence)
- [Contact](#-contact)

---

## ✅ Fonctionnalités

### Lieux accessibles
- **Carte + liste** des **Lieux Accessibles** structurés par catégories et sous‑catégories :  
  - **Transport & Accessibilité** : Parkings réservés PMR ; Taxis/véhicules adaptés ; Stations‑service accessibles ; Arrêts/Stations de transport public accessibles ; Gares et aéroports accessibles.  
  - **Commerces & Services** : Supermarchés/magasins accessibles ; Banques accessibles ; Centres commerciaux équipés.  
  - **Restauration & Hôtels** : Restaurants/cafés avec accès PMR ; Hôtels avec chambres adaptées ; Lieux d’accueil touristiques accessibles.  
  - **Établissements publics** : Mairies et administrations ; Bureaux de poste ; Postes de police et casernes accessibles.  
  - **Santé & Bien‑être** : Hôpitaux/Cliniques ; Cabinets médicaux/paramédicaux ; Pharmacies avec services adaptés.  
  - **Éducation & Formation** : Bibliothèques/Médiathèques ; Crèches ; Universités ; Centres de formation ; Écoles ; Collèges ; Garderies.  
  - **Loisirs, Sports & Culture** : Cinémas/Théâtres/Salles de spectacle ; Musées/Galeries ; Centres sportifs ; Parcs/Jardins avec cheminements accessibles ; **Plages accessibles**.  
  - **Infrastructures publiques** : **Toilettes publiques adaptées** ; Points info & assistance PMR.  
  - **Services spécifiques** : Réparation/vente de matériel adapté ; Associations & organismes de soutien.  
  - **Événements & Rencontres** : Événements avec aménagements ; Lieux d’activités associatives adaptées.
- **Filtres d’accessibilité** : rampe, ascenseur, largeur porte (cm), pente (%), WC PMR, boucle magnétique, menus braille/audio, cheminement sans marche.
- **Fiche‑lieu** : **score multi‑critères** (Entrée, Circulation, Sanitaires, Signalétique, Accueil), badges, infos pratiques (largeur, pente…), horaires, contact, actions (Y aller/Appeler/Partager).
- **Lecture vocale** (TTS) sur toutes les informations.

### Itinéraires accessibles (porte‑à‑porte)
- Préférences : **éviter escaliers**, **pente max x%**, éviter zones bondées, **préférer ombragé**.
- **Propositions IA A/B/C** : **Fluide** (peu d’obstacles), **Court**, **Ombragé** (relief/météo/signalements).
- **Guidage pas‑à‑pas** : audio + **vibrations codées** (droite/gauche/ralentir) + repères visuels XL.
- **Replanification proactive** (panne ascenseur, travaux).  
- **Multi‑modal** : marche/roue + bus accessible + **transport adapté**.

### Transport adapté (réservation)
- **Profil mobilité** : type/dimensions fauteuil, besoin d’arrimage, **temps de transfert**.
- Opérateurs (mock ou réels), créneaux, estimation, **réservation + suivi en temps réel**.

### Démarches & Aides
- Guides **langage simple** + **lecture vocale** (droits, CMI, aides locales…).
- **Assistant formulaires** : dictée, **OCR**, auto‑complétion, **contrôles**, **export PDF**.
- Checklist + rappels.

### Réseau & Communauté
- Annuaire **associations**, **pros de santé**, **événements**.
- **Demander de l’aide** (micro‑missions géolocalisées) + **modération IA** + **score de confiance**.

### Signalements
- Marquer **Accessible / Non / Problème** : photo + dictée → **IA Vision** (marches/rampe/pente/comptoir).  
- Pondération par **fiabilité contributeur**, gamification légère (points/badges).

### SOS & sécurité
- Bouton **SOS** (appui long) → **appel contact prioritaire** + **position live** + **message audio** personnalisé.

---

## ♿ Accessibilité (WCAG 2.2 AA / RGAA)
- **Onboarding access‑first** : mode Vision/PMR/Mixte, police XXL, contraste élevé, thème sombre, haptique, pente max, éviter escaliers.  
- **TalkBack/VoiceOver** support natif, **`accessibilityLabel`** / **`accessibilityHint`** partout, **ordre de focus** logique.  
- **Cibles tactiles ≥ 56px**, typographies 16–20+ pt, **contrastes** ≥ 4.5:1.  
- **Lecture d’écran** (“Lire cette page”) et **Commandes vocales** (micro persistant, PTT).

---

## 📱 Écrans & parcours
- **Tabs** : Accueil, Lieux, Itinéraires, Réseau, Aide(SOS).  
- **Stacks** :  
  - Lieux → Carte → Liste → **Fiche‑lieu** → Signaler.  
  - Itinéraires → **Wizard** (Départ/Arrivée/Prefs) → Choix A/B/C → Guidage → (Transport).  
  - Démarches → Guide → **Assistant formulaire** → Export PDF.  
  - Réseau → Associations/Pros/Événements → Fiche → Actions.  
  - Aide → **SOS**.

---

## 🗃 Modèle de données (Supabase)
- **users** : id, email, locale, `profile_access` (json : {vision|pmr|mixte, fontScale, contrast, haptics, penteMax, avoidStairs,…}), favorites[], routines[].
- **places** : id, name, **category/subcategory** (alignées sur la taxonomie), geom (lat,lng), address, contact, badges[] (ramp, elevator, loopT,…), specs (width_cm, slope_pct, wc_pmr, counter_height_cm,…), photos[], source, updated_at.
- **place_scores** : place_id, entry, circulation, toilets, signage, welcome, score_global, confidence.
- **reports** : id, place_id, user_id, type (issue/improve/confirm), media_url, note, **ai_flags** (stairs_detected, ramp_detected, slope_estimate,…), trust_score, created_at.
- **events** : id, title, date_time, location, accessible_flags[], org_id.
- **transport_ops** : id, name, phone, vehicle_types[], zones[], pricing_model, availability.
- **bookings** : id, user_id, op_id, from, to, datetime, status, needs (arrimage, transfer_time, chair_dims), price_estimate.
- **guides** : id, slug, title, body_md, locale, attachments[], updated_at.

**Note** : fournir des **mocks** en seed ; harmoniser `places.category` & `places.subcategory` sur la liste fournie.

---

## 🏗 Architecture & stack
- **Mobile** : React Native **Expo** (TypeScript).
- **État** : Zustand ou Redux Toolkit + **React Query**.
- **Carto** : MapLibre *ou* Google Maps (tuiles vecteur, POI, couches accessibilité).
- **Backend** : **Supabase** (Auth, Postgres, Realtime, Storage).
- **IA** : wrappers `tts`, `stt`, `vision`, `routing`, `accessibility`.
- **Offline** : SQLite/SecureStore pour cache POI/fiches/itinéraires récents.
- **i18n** : FR (par défaut), créole RUN, EN.
- **Qualité** : ESlint, Prettier, tests (unit/E2E), check‑list accessibilité.

### Arborescence du socle Expo/Supabase
```
api/                    # Clients externes (Supabase, API REST, etc.)
app/                    # Routes Expo Router (home, places, ...)
components/             # Composants UI réutilisables (à compléter)
lib/                    # Types, helpers métiers et utilitaires
store/                  # Stores globaux (Zustand/Redux) – à définir
supabase/
  ├─ migrations/        # Scripts SQL versionnés (exécution via Supabase Studio)
  ├─ seed/              # Jeux de données d'exemple
  └─ taxonomy/          # Référentiels (catégories & sous-catégories)
scripts/                # Outils CLI (seed, synchronisation, ...)
```

---

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+, npm (ou pnpm/yarn)  
- Expo CLI (`npm i -g expo`)  
- Compte **Supabase** (project + clés)  
- (Option) Clés API carto (Google Maps) ou usage MapLibre

### Installation
```bash
git clone <repo-url>
cd runacces
npm install
cp .env.example .env
# Renseigner les variables (voir section Configuration)
```

### Lancer en local
```bash
npm run start            # démarre Expo Router en mode développement
# Scanner le QR code dans Expo Go (Android/iOS) ou lancer iOS/Android emulator
# Option : `npm run web` pour ouvrir la version web (Expo Web)
```

---

## 🔧 Configuration (.env)
```bash
EXPO_PUBLIC_SUPABASE_URL=https://<id-projet>.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

> ℹ️ Les variables Expo doivent commencer par `EXPO_PUBLIC_` pour être accessibles dans l'app. Ajoutez les clés complémentaires
> (carto, analytics, etc.) au même format lorsque les services seront intégrés.

---

## 📜 Scripts NPM
```json
{
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web",
  "lint": "eslint .",
  "typecheck": "tsc --noEmit"
}
```

---

## 🌱 Jeux de données (seed)
Le dossier [`supabase/seed`](supabase/seed) contient des scripts SQL prêts à être exécutés dans Supabase Studio.

1. Ouvrir **Supabase Studio** → onglet **SQL Editor**.
2. Coller le contenu de `supabase/migrations/001_init.sql`, exécuter pour créer la table `places`.
3. Coller le contenu de `supabase/seed/001_taxonomy_and_places.sql`, exécuter pour insérer les premières données.
4. Vérifier les enregistrements dans l'onglet **Table editor**.

> 📌 Les fichiers contiennent des commentaires `TODO` à compléter avec la taxonomie officielle et des données enrichies.

---

## 🧩 Design System
Composants réutilisables (access‑first) :  
- `BigTile`, `BigButton`, `AccessibleCard`, `OfflineBanner`, `ScoreBadge`, `StepperWizard`, `TogglePref`, `AudioBeaconToggle`, `SOSButton`, `VoiceMic`, `AccessibleMap`.

**Directives UI** : contrastes élevés, zones tactiles ≥ 56px, polices 16–20+ pt, icônes + libellés, feedback audio/haptique.

---

## 🧠 IA & services
- **Assistant vocal** (FR/Créole/EN) : lecture d’écran, recherche lieux, création itinéraires, aide formulaires.  
- **TTS/STT** : on‑device si possible (fallback cloud).  
- **Vision** : OCR + description scène + détection obstacles (marches/pente/comptoir).  
- **Routing IA** : tri A/B/C (Fluide/Court/Ombragé) selon profil + relief + météo + signalements + état ascenseurs.  
- **Modération** : anti‑spam, doublons, scoring fiabilité contributeurs.

---

## 🧪 Qualité, tests & CI
- **Accessibilité** (checklist rapide) :  
  - Labels `accessibilityLabel/Hint` ; focus visible ; ordre logique ; couleurs/contrastes vérifiés.  
  - TalkBack/VoiceOver : navigation 100% vocale sur écrans clés.  
  - Gestes simples + alternatives boutons.  
- **Tests** : unitaires (logic/utils IA), E2E (Detox/Playwright).  
- **CI** : lint + tests + audit accessibilité (scripts).

---

## 🌍 i18n & contenus
- Langues : **FR (par défaut)**, **créole réunionnais**, **EN**.  
- Contenus systèmes dans `i18n/` ; fallback FR si clé manquante.  
- Guidelines micro‑copy : phrases courtes, langage simple, alternatives audio.

---

## 📶 Hors‑ligne & performances
- Cache POI/fiches/itinéraires récents (SQLite/SecureStore).  
- Stratégies : prefetch des quartiers fréquentés, images compressées, TTS local.  
- Budget perf : démarrage < 2.5s sur milieu de gamme, scroll 60 fps.

---

## 🔐 Sécurité & confidentialité (RGPD)
- **Minimisation** des données, consentements explicites, **opt‑in analytics**.  
- Export/suppression compte (self‑service), durées de rétention documentées.  
- Chiffrement en transit (TLS), stockage sécurisé (politiques Supabase).  
- **Mode anonyme** possible pour la consultation des lieux.

---

## 🗺 Roadmap (indicative)
- **M1 – Conception** : maquettes hi‑fi access‑first, choix carto, schéma DB, seed.  
- **M2 – Lieux** : carte+liste, filtres, fiches, TTS.  
- **M3 – Itinéraires** : wizard, A/B/C, guidage audio+vibes.  
- **M4 – Transport** : profil fauteuil, réservation, suivi.  
- **M5 – Démarches** : assistant formulaires (dictée, OCR, PDF).  
- **M6 – Communauté** : aide géolocalisée, modération IA, scoring.  
- **M7 – SOS** : bouton long press, contact prioritaire, position live, message audio.  
- **M8 – Qualif & stores** : QA accessibilité, perf, publication.

---

## 🤝 Contribution
1. Fork du repo → branche `feature/<nom>`
2. PR avec description claire (avant/après, captures)
3. Respect des règles d’accessibilité et du design system

---

## Références
- [CHANGELOG](CHANGELOG.md)
- Pensez à rédiger des messages de commit clairs et descriptifs.

---

## Documents
- [Bonjour RUN'Accès](docs/bonjour.md)

---

## 📄 Licence
Copyright © 2025.

---

## 📬 Contact
**Bamby Joan – PROJECT MANAGER**  
30 allée des Lys – 97440 St André – La Réunion  
Tél : 0262 58 23 15 · Mobile : 0692 44 00 44  
Email : bamby974@gmail.com  
Book Web : https://webdesign-oi.com · Book Apps : https://application-mobile.re

