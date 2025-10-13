# Portfólio — Adriano Oliveira

Portfólio profissional desenvolvido com React 19 e Chakra UI v3, destacando projetos, trajetória e formas de contato com uma experiência de navegação altamente animada e responsiva.

## ✨ Destaques

- **Animações coreografadas**: todas as seções usam `IntersectionObserver` com um hook customizado para retriggerar animações a cada scroll.
- **Design consistente**: paleta, tipografia e iluminação aplicadas em todos os componentes via tokens centralizados.
- **Navegação fluida**: menu sticky com smooth scroll, drawer mobile com transições personalizadas e feedback tátil.
- **Seções com storytelling**: Hero glitch, Sobre Mim, Projetos em cascata, CTA convergente e Footer multi-coluna.
- **Performance e acessibilidade**: animações GPU-friendly, componentes acessíveis do Chakra e responsividade pronta.

## 🛠️ Stack

- [React 19](https://react.dev/)
- [Chakra UI v3](https://chakra-ui.com/)
- [Emotion](https://emotion.sh/docs/introduction) para keyframes
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite 7](https://vitejs.dev/)

## 🗂️ Estrutura

```text
src/
├── App.jsx
├── assets/
├── components/
│   ├── Hero.jsx
│   ├── AboutSection.jsx
│   ├── ProjectsSection.jsx
│   ├── CTASection.jsx
│   ├── Footer.jsx
│   ├── Nav.jsx
│   └── ui/
│       ├── ScrollIndicator.jsx
│       ├── color-mode.jsx
│       ├── provider.jsx
│       ├── toaster.jsx
│       └── tooltip.jsx
├── main.jsx
├── index.css
└── theme/
	├── animationStyles.js
	└── theme.ts
```

## 🎨 Experiência de Usuário

- **Hero** com glitch efeito e CTA duplo.
- **Sobre Mim**: cards diagonais com direções alternadas e badges animados.
- **Projetos**: cards alinhados com tags escalonadas e CTA “Em breve”.
- **CTA**: cards de contato convergentes e botão WhatsApp com bounce controlado.
- **Footer**: três colunas, social icons com bounce e divisória expansiva.

## 🚀 Executando

### Pré-requisitos

- Node.js 18+ (recomendado 20+)

### Instalação

```bash
npm install
```

### Scripts

```bash
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
npm run build    # build de produção
npm run preview  # pré-visualização do build
npm run lint     # análise estática com ESLint
```

## ⚙️ Personalização Rápida

- **Cores e animações**: edite `src/theme/animationStyles.js` e os tokens em cada seção.
- **Conteúdo**: textos e dados estão centralizados em arrays como `ABOUT_CARDS`, `CONTACT_METHODS` e `PROJECTS`.
- **Animações**: keyframes adicionais podem ser criados com Emotion dentro de cada componente ou no tema global.

