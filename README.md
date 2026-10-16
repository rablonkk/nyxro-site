# 🌎 Nyxro Website
Esse é o repo do site do **Nyxro**, meu bot de música e moderação para Discord. É full front-end, sem back-end, sem banco, sem dor de cabeça. Só fazer uma build, e jogar em alguma hosting, que já ta no ar.

🔗 Site oficial: https://nyxro.xyz

---

## ✨ O que tem aqui

- 🌎 **Bilíngue** (PT-BR e EN), com toggle de idioma no header;
- 🌗 **Tema claro/escuro**, e ele lembra o tema que você escolheu;
- 🎨 Visual inspirado no Discord;
- 🟢 **Status em tempo real** via Lanyard API, mostra se eu você está online no Discord;
- 📋 Documentação dos **33 comandos** do bot;
- 🧪 Seção Beta pra quem quer testar as novidades antes de todo mundo;
- ⭐ Link para a página do bot na Top.gg;

---

## 🚀 Rodando na sua máquina

Antes de tudo, é preciso ter o **Node.js** e o **npm** instalados na sua máquina, beleza?

```bash
npm install
```

caso tenha o yarn instalado na sua máquina, você pode optar por:

```bash
yarn run install
```

E depois?

### Opção 1: Abrir o site no modo dev (opção mais rápida)

```bash
npm run dev yarn run dev
```

ou

```bash
yarn run dev
```

Após isso, acesse o seu nevagaor, e jogue `http://localhost:5000` na barra de pesquisa, que pronto. Mexeu no código? Atualiza na hora.

### Opção 2: Build + Live Server

Se você quer ver exatamente como o site vai ficar em uma hosting:

1. Instale a extensão **Live Server** no VS Code
2. Rode `npm run build` ou `yarn run build`
3. Quando terminar, vá em `dist/public/`
4. Clique com o botão direito no arquivo `index.html` e escolha a opção **Open with Live Server**
5. Pronto, vai abrir uma página no seu navegador padrão 🎉

---

## 📁 Como o projeto é organizado?

```
├── client/
│   ├── src/
│   │   ├── pages/          # Páginas (home.tsx, not-found.tsx)
│   │   ├── components/     # Componentes UI
│   │   ├── App.tsx         # Raiz principal
│   │   └── main.tsx        # Entry point
│   └── public/
│       └── favicon.ico     # Logo do bot
├── dist/public/            # ⭐ Build final, é isso que vai pro deploy
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
├── vite.config.ts          # Config do Vite
└── README.md               # Você está aqui 👋
```

---

## 🌐 Deploy

Pegue a pasta **`dist/public/`** (depois do `npm run build`) e faça o upload em qualquer hospedagem que aceite site estático, como:

- **GitHub Pages**
- **Netlify** (só conectar no repo, que o resto é automático)
- **Vercel** (mesma coisa)
- Firebase, Cloudflare Pages, SquareCloud, Discloud ou o que você preferir

---

## 📝 Scripts

| Comando | O que cada um faz? |
|---|---|
| `npm install` | Instala as dependências (só necessário rodá-lo uma vez) |
| `npm run dev` | Abre um servidor local para  desenvolvimento (`localhost:5000`) |
| `npm run build` | Gera o site pronto para hospedagem em `dist/public/` |

---

## 💡 Coisas que vale saber

- **Zero backend:** O site é 100% estático, não precisa de servidor.
- **Favicon já vem incluso:** em `client/public/favicon.ico`.
- **O idioma e tema:** Ambos ficam salvos no cookie do seu navegador, então não precisa trocar toda hora o idioma ou o tema do site.
- O status do Discord vem da **[Lanyard API](https://github.com/Phineas/lanyard)**. Pra funcionar com o seu ID do Discord, é necessário que você esteja no servidor do Lanyard.

---

## 🔗 Links do Nyxro

- 🤖 **Nyxro (versão estável):** [adicionar ao servidor](https://discord.com/oauth2/authorize?client_id=1311537818887258112)
- 🧪 **Nyxro (versão beta):** [adicionar ao servidor](https://discord.com/oauth2/authorize?client_id=1439084261712855130)
- 🌐 **Site:** https://nyxro.xyz

---

## 🤝 Quer contribuir?

O projeto é open source, então fica à vontade! Achou algum bug? Tem alguma ideia de melhoria ou quer arrumar alguma linha quebrada ou mal programada?

1. Faça um fork do repo
2. Crie uma branch (`git checkout -b minha-ideia`)
3. Faça o commit das suas mudanças
4. Abra um Pull Request

Se for algo grande ou grave, abra um issue antes. 😉

---

Site desenvolvido por **@rablonkk**.
Se curtiu, deixa uma ⭐ no repo!