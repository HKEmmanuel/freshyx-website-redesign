
# 🧭 Freshyx Website Redesign

## 🌍 Description
Refonte complète du site **[Freshyx.org](https://freshyx.org)**, en s’inspirant du design, de la fluidité et de la structure du site **[AIESEC.org](https://aiesec.org)**.  
L’objectif est de créer une plateforme **moderne, intuitive et inspirante**, qui met en valeur les activités et valeurs de Freshyx.

---

## 🧑‍💼 Équipe du projet

| Rôle | Nom | Responsabilités principales |
|------|------|-----------------------------|
| **Chef de projet** | Micka (HK Emmanuel) | Pilotage global, gestion du dépôt, intégration finale, validation du design |
| **Développeur Frontend** | Justin | Développement des interfaces, intégration visuelle, responsive design |
| **Développeur Frontend** | Comlan | Composants dynamiques, interactions utilisateur, cohérence UI/UX |

---

## ⚙️ Structure du dépôt

```
freshyx-website-redesign/
│
├── frontend/              # Développement interface (React / HTML / CSS / JS)
│   ├── justin/            # Branche de Justin
│   └── comlan/            # Branche de Comlan
│
├── backend/               # (future intégration si API ou CMS)
│
├── docs/                  # Documentation technique et maquettes
│
└── README.md              # Présent fichier
```

---

## 🧩 Workflow Git

### 🔸 Cloner le projet
```bash
git clone https://github.com/HKEmmanuel/freshyx-website-redesign.git
cd freshyx-website-redesign
```

### 🔸 Travailler sur sa branche
- **Justin :**
  ```bash
  git checkout frontend/justin
  ```
- **Comlan :**
  ```bash
  git checkout frontend/comlan
  ```

### 🔸 Sauvegarder son travail
```bash
git add .
git commit -m "Frontend - ajout de la page X"
git push origin frontend/justin
# ou
git push origin frontend/comlan
```

### 🔸 Fusion dans la branche principale
Quand le travail est validé par le chef de projet :
- Création d’une **Pull Request (PR)** vers `main`
- Vérification du code
- Fusion finale par Micka

---

## 🗓️ Deadline
🕐 **Durée totale : 10 jours**  
📅 **Livrable attendu :** première version stable et responsive du site.

---

## 💬 Communication
Toute question technique, proposition de design ou problème de code doit être communiqué via :
- Discussions GitHub
- Messages directs avec le chef de projet

---

## ✨ Objectif final
Un site **fluide, moderne et professionnel**, fidèle à l’identité Freshyx et inspiré de l’expérience utilisateur d’AIESEC.org.
