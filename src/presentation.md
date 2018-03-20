name: inverse
layout: true
class: center, middle, inverse

---

# {{{ title }}}
## {{{ subtitle }}}

.javascript-img[![Javascript logo](./assets/img/javascript_logo.png)]

#### {{{ link }}}

---
layout: false

.left-column[
## Plan
]

.right-column[
- Rappel de l'historique du JS
- Fonctionnement des nouvelles versions du langage (proposals, stages...)
- Fonctionnalités swaggy
  - ES6 (2015)
  - ES2016
  - ES2017
  - Encore en proposals
- Tooling
  - Babel
  - Webpack
    - Parcel ?
  - ESLint
    - Standard ?
  - Prettier
- Frameworks/libs et concepts
  - Frontend
    - React
      - Redux
      - Mobx
    - Vue
      - Vuex
    - Angular
  - Backend
    - Express
    - Loopback
  - Desktop
    - Electron
      - https://github.com/zeit/hyper
      - Limites (overhead de l'install de Chrome + node, failles de sécu sur les electron pas à jour)
      - Expérimentations (utiliser le navigateur du système)
  - Les autres trucs chelous
    - https://github.com/webtorrent/webtorrent
    - WebAssembly

]

---
template: inverse

# Pourquoi ?

???

Au départ, je voulais parler des frameworks JS, les différentes lib, l'écosystème...

Mais les frameworks naissent, vivent, et meurent à un moment (surtout en JS ^^),
alors que le langage est là pour rester. Si le langage est mort, tous les frameworks
du monde ne pourront pas le faire évoluer.

Pas d'inquiétude, je parlerai de l'écosystème à la fin de la présentation, pour
montrer sa richesse et toooooout ce pour quoi le JS est utilisé aujourd'hui.

---

.left-column[
## µ-historique (rappel)
]

--
count: false

.right-column[
- Javascript créé en 1995

- ECMAScript 3 sort en 1999

- ECMAScript 5 sort en 2009

- Depuis 2015 : reprise de l'évolution du langage
]

???

C'est l'année de ma naissance ! ^^

--
count: false

.right-column-no-padding[
➡ Objectif : une version par an
]

---

.left-column[
## µ-historique (rappel)
## Évolution du langage
]

--
count: false

.right-column[
## 5 étapes (ou *stages*)
]

--
count: false

.right-column-no-padding[
0) Stage 0 : n'importe quelle proposition, idée ou discussion d'un changement non formalisée
]

--
count: false

.right-column-no-padding[
1) Stage 1 : **Proposal**  
Identification du problème, début de solution, cas d'usages ➡ polyfills, démos
]

--
count: false

.right-column-no-padding[
2) Stage 2 : **Draft**  
Spécification initiale, description précise de la syntaxe, des TODOs encore acceptés
]

--
count: false

.right-column-no-padding[
3) Stage 3 : **Candidate**  
Spécification complète, à tester en utilisation réelle
]

--
count: false

.right-column-no-padding[
4) Stage 4 : **Finished**  
Tests d'acceptance écrits, pull request acceptée ➡ 2 implémentations (navigateurs et/ou babel)
]

--
count: false

.right-column-no-padding[
➡ validé et écrit dans la spec officielle ECMAScript
]

---

.left-column[
## µ-historique (rappel)
## Évolution du langage
]

.right-column[
## 5 étapes (ou *stages*)

Tout ce processus est public !

La spécification : https://github.com/tc39/ecma262 (accrochez vous !)

Les propositions : https://github.com/tc39/proposals
]

---
template: inverse

# Les nouveautés

---

.left-column[
## ES6
]

---

.left-column[
## ES6
## ES2016
]

---

.left-column[
## ES6
## ES2016
## ES2017
]

---

.left-column[
## ES6
## ES2016
## ES2017
## ES.Next
]

---
template: inverse

# The end

### {{{ link }}}

---

.left-column[
## Sources et liens
]

.right-column[
# Sources

- [Présentation du JS en 2016](https://tdd.github.io/js-nocturnes-federez) par Christophe Porteneuve, et la [partie 2](https://github.com/tdd/js-nocturnes-federez/blob/gh-pages/episode-2-ecosysteme.pdf)
- [Process d'acceptation](https://tc39.github.io/process-document/) des modifications d'ECMAScript
- [Les nouveautés de ES2015+](http://es6-features.org/), avec des exemples de code
]

---

.left-column[
## Sources et liens
]

.right-column[
# Liens

- Un gros bouquin pour réapprendre le Javascript, [You don't know JS](https://github.com/getify/You-Dont-Know-JS)
- [TypeScript](https://github.com/Microsoft/TypeScript), le superset de JS développé par Microsoft, avec comme ajout principal un typage statique (et d'autres bonus)
- [Flow](https://flow.org/), une alternative au typage de TypeScript, développé par Facebook
- [Yarn](https://github.com/yarnpkg/yarn), un gestionnaire de package alternatif à npm et développé par Facebook
- [Gatsby](https://www.gatsbyjs.org/), un générateur de site statique en React
- [PhantomJS](https://github.com/ariya/phantomjs), un navigateur sans interface graphique (très utile pour les tests)
- [Prettier](https://prettier.io/), un outil pour reformater le code automatiquement
- La [Awesome List sur NodeJS](https://github.com/sindresorhus/awesome-nodejs), celle sur [Javascript](https://github.com/sorrycc/awesome-javascript) et la [liste des Awesome Lists](https://github.com/sindresorhus/awesome) en général
- Des [bons conseils](https://github.com/wearehive/project-guidelines) pour organiser un projet Javascript backend (une moitié des conseils peut être réutilisée dans d'autres projets)
- Une autre liste de [best practices](https://github.com/i0natan/nodebestpractices)
- [Un tutoriel](https://github.com/verekia/js-stack-from-scratch) pour construire un projet JS frontend *from scratch*, de la conf Webpack à React en passant par les tests
- Une [cheatsheet](https://github.com/mbeaudru/modern-js-cheatsheet) de la nouvelle syntaxe ES2015+
- Un guide de la [programmation fonctionnelle](https://github.com/MostlyAdequate/mostly-adequate-guide) en JS
- [WebAssembly](http://webassembly.org/), un format d'exécutable binaire implémenté dans les navigateurs
]
