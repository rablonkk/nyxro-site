# Nyxro Website
Site estático 100% front-end para o Nyxro bot.

## 🚀 Desenvolvimento Rápido

### Opção 1: Live Server (Recomendado ⭐)
1. Abra o VS Code
2. Instale a extensão "Live Server" (busque por "Live Server" no marketplace)
3. Abra o terminal e rode o comando `npm install` primeirio, e depois `npm run build`
4. Após a finalização do build, vá a até a pasta `dist/public`, e clique com direito em `index.html`
4. Selecione "Open with Live Server"
5. Pronto! O site irá ser aberto no seu navegador padrão.

### Opção 2: HTTP Server via Linha de Comando
1. Abra o VS Code
2. Abra o terminal e rode o comando `npm install` primeirio, e depois `npm run dev`
3. Pronto! Agora é só acessar `http://localhost:5000` no seu navegador.

## 📁 Estrutura do Projeto

```
├── client/
│   ├── src/
│   │   ├── public/
│   │   ├── pages/          # Páginas React (home.tsx, not-found.tsx)
│   │   ├── components/     # Componentes React (UI components)
│   │   ├── App.tsx         # App principal
│   │   └── main.tsx        # Entry point
│   └── public/
│       └── favicon.ico     # Logo do bot
├── dist/public/            # ⭐ ARQUIVO COMPILADO PRONTO PARA DEPLOY
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
├── vite.config.ts          # Configuração Vite
└── README.md               # Este arquivo
```

## 🌐 Deploy

Use a pasta **`dist/public/`** para fazer deploy em:

- **GitHub Pages** - Push para gh-pages branch
- **Netlify** - Conecte seu repositório
- **Vercel** - Conecte seu repositório
- **Qualquer hosting estático** (Firebase, Cloudflare, etc)

## 📝 Scripts Disponíveis

```bash
npm install    # Instala dependências (execute uma vez)
npm run build  # Compila o projeto em dist/public/
```

## 🎨 Características

- ✅ Bilíngue (Inglês/Português)
- ✅ Tema claro/escuro
- ✅ Design Discord-inspired
- ✅ Integração Lanyard API (status Discord em tempo real)
- ✅ Links Top.gg
- ✅ Seção Beta
- ✅ Documentação de 33 comandos

## 💡 Dicas

- **Não precisa de servidor backend** - Site é 100% estático
- **Favicon já está incluído** - Localizado em `client/public/favicon.ico`
- **Bilíngue automático** - Toggle de idioma no header
- **Tema automático** - Toggle claro/escuro com persistência

## 🔗 Links Importantes

- Bot Estável: https://discord.com/oauth2/authorize?client_id=1311537818887258112
- Bot Beta: https://discord.com/oauth2/authorize?client_id=1439084261712855130
- Status em Tempo Real: Lanyard API (Discord ID: 523783344979443712)

---

**Versão:** 1.0.0  
**Última atualização:** Novembro 2025
