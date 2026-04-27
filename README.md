# Andrômeda ✨

Aplicativo mobile construído com **React Native + Expo** para conectar pessoas a serviços espirituais e oraculistas em uma experiência visual cósmica, elegante e fluida.

## Visão geral

O projeto apresenta uma navegação simples e focada em descoberta de serviços:

- **Login temático** com identidade visual personalizada.
- **Home** com categorias de oráculos e leituras em destaque.
- **Busca** com sugestões recentes, categorias populares e cards promocionais.
- **Leituras** com catálogo de atendimentos e informações rápidas (preço, duração e avaliação).

> Atualmente os dados exibidos são majoritariamente estáticos/mockados, ideais para evolução para integrações reais de backend.

## Stack e tecnologias

- **Expo** (`~54`)
- **React** (`19`) e **React Native** (`0.81`)
- **TypeScript**
- **expo-linear-gradient** para efeitos visuais
- **@expo-google-fonts** (Manrope e Noto Serif) para tipografia da marca

## Estrutura do projeto

```text
.
├── App.tsx
├── src
│   ├── components
│   ├── data
│   ├── navigation
│   ├── screens
│   ├── theme
│   └── types
├── assets
├── app.json
└── package.json
```

### Pastas principais

- `src/screens/`: telas do app (`login`, `home`, `search`, `readings`, `splash`).
- `src/components/`: componentes reutilizáveis de UI (header, navegação inferior, identidade visual cósmica).
- `src/navigation/`: orquestração das rotas/telas visíveis.
- `src/data/`: dados mockados para categorias e conteúdos.
- `src/theme/`: tokens de cores e tema visual.

## Pré-requisitos

Antes de iniciar, tenha instalado:

- **Node.js** (recomendado: versão LTS mais recente)
- **npm** (ou yarn/pnpm, se preferir)
- **Expo Go** no celular (opcional, para teste em dispositivo físico)

## Como rodar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor Expo:

```bash
npm run start
```

3. Abra em uma plataforma:

- Android:

```bash
npm run android
```

- iOS:

```bash
npm run ios
```

- Web:

```bash
npm run web
```

## Scripts disponíveis

- `npm run start` — inicia o Expo Dev Server
- `npm run android` — abre no Android
- `npm run ios` — abre no iOS
- `npm run web` — abre no navegador

## Estado atual do app

- Navegação local por estado (sem biblioteca de rotas externa).
- Interface com foco em estética e prototipação de fluxo.
- Dados locais/mockados em `src/data`.
- Pronto para evolução com:
  - autenticação real,
  - integração com API,
  - persistência de sessão,
  - agenda/chat de atendimentos.

## Próximos passos sugeridos

- Integrar backend para catálogo real de oraculistas e leituras.
- Adicionar gerenciamento de estado global (ex.: Zustand/Redux/Context API robusta).
- Implementar testes (unitários e de componentes).
- Configurar CI para lint, typecheck e build.


