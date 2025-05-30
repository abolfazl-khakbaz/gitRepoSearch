# gitRepoSearch
# 🔍 GitHub Repository Search App (Vue 3 + Vuex + Bulma)

A responsive, animated Single Page Application (SPA) built with **Vue 3**, **Vuex**, and **Bulma**, allowing users to search for public GitHub repositories and paginate through results.

---

## 🚀 Live Demo

👉 [Click here to view the live demo] (https://git-repo-search-co7whd2fo-abolfazl-khakbazs-projects.vercel.app)

---

## ✨ Features

- 🔎 Search for GitHub repositories by keyword  
- ⚡ Instant results using GitHub Search API  
- 🔁 Pagination (Next/Prev with current page tracking)  
- 🌙 Dark-themed UI with Bulma CSS  
- 🔐 Hacker-style animated footer with typewriter effect  
- 🖼️ Hacker image for cyber-inspired design  

---

## 🧠 Technologies Used

- [Vue 3](https://vuejs.org/)  
- [Vuex](https://vuex.vuejs.org/) for state management  
- [Bulma](https://bulma.io/) for responsive layout  
- GitHub REST API v3 (`/search/repositories`)

---

## 📁 Project Structure
```bash
src/
├── assets/
│ └── img/
│ └── 3849223.png # Hacker illustration
├── components/
│ ├── SearchBar.vue # Input & Search button
│ ├── RepoList.vue # Repository cards & pagination
│ └── Footer.vue # Footer with animation & info
├── store/
│ └── index.js # Vuex store
├── App.vue # Root component
└── main.js # App entry point
```
## 🧩 How It Works

- **SearchBar.vue** emits a search term  
- **App.vue** handles the event and dispatches a Vuex action  
- **Vuex** fetches from GitHub API and saves results in `state`  
- **RepoList.vue** gets data via `getters`, shows cards, and paginates  
- **Footer.vue** listens to scroll and shows itself with a typewriter slogan when triggered  

---

## 🛠 Setup Instructions

```bash
git clone https://github.com/abolfazl-khakbaz/gitRepoSearch.git
cd github-repo-search
npm install
npm run dev
