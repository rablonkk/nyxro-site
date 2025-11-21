import { Music, Shield, Zap, ListMusic, AlertTriangle, FileText, Users, ExternalLink, Search, TrendingUp, MessageSquare, Github, Globe, Moon, Sun, Circle, ChevronDown } from "lucide-react";
import { SiDiscord, SiSpotify } from "react-icons/si";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

const translations = {
  en: {
    tagline: "Level Up Your Discord Server",
    description: "High-quality music and moderation for your Discord community.",
    addToDiscord: "Add to Discord",
    powerful: "Powerful Features",
    featuresDesc: "Everything you need to run, manage, and entertain your Discord community.",
    musicExcellence: "Music Bot Excellence",
    musicExcellenceDesc: "Enjoy crystal-clear streaming from YouTube, Spotify, and SoundCloud. Control every part of playback with advanced commands, manage unlimited queues, and get smooth performance powered by Lavalink.",
    highQuality: "High-Quality Streaming",
    highQualityDesc: "256kbps crystal-clear audio with adaptive bitrate. Smooth, lag-free playback optimized for Discord with advanced codec support.",
    queueManagement: "Queue Management",
    queueManagementDesc: "Organize, shuffle, and control your music queue with powerful commands. Build dynamic playlists, skip tracks, and manage your music effortlessly.",
    playlistSupport: "Multi-Platform Playlists",
    playlistSupportDesc: "Import and play full playlists from YouTube, Spotify, and SoundCloud in your server with a single command.",
    lavalink: "Powered by Lavalink",
    lavalinkDesc: "Built using discord.js, Kazagumo, and Shoukaku for rock-solid stability, ultra-fast searches, and top-tier audio performance.",
    advancedMod: "Advanced Moderation",
    advancedModDesc: "Take total control of your server. Ban, kick, mute, and manage members with simple commands. Remove spam instantly and keep your community healthy.",
    userManagement: "User Management",
    userManagementDesc: "Ban users and apply mutes with ease. Stay in full control of your members with simple, intuitive tools.",
    messageManagement: "Message Management",
    messageManagementDesc: "Bulk delete unwanted messages instantly. Keep your channels clean and organized with minimal effort.",
    removeUnwanted: "Remove Disruptive Users",
    removeUnwantedDesc: "Kick troublesome members instantly. Protect your community by removing users who break your server rules.",
    unban: "Unban Users",
    unbanDesc: "Easily remove bans when users are ready to return. Give second chances to members who deserve it.",
    loveNyxro: "Loving Nyxro?",
    supportVote: "Consider leaving a review on Top.gg — it helps a ton!",
    voteNyxro: "Vote for Nyxro",
    leaveReview: "Leave a Review",
    betaProgram: "Beta Program",
    joinBeta: "Join Our Beta Program",
    betaDesc: "Get early access to new features and help shape the future of Nyxro.",
    earlyAccess: "Early Access",
    earlyAccessDesc: "Try new features before they're released to everyone.",
    directInput: "Direct Influence",
    directInputDesc: "Your feedback directly shapes development priorities.",
    bugReports: "Help Us Improve",
    bugReportsDesc: "Report bugs and help us make Nyxro even better.",
    readyBeta: "Ready to help shape the future of Nyxro?",
    addBetaBotDiscord: "Add the Beta Bot to Discord",
    betaNote: "The beta bot is a separate version with experimental features. It may be unstable and contain bugs.",
    commandRef: "Command Reference",
    commandRefDesc: "Quick reference for commonly used commands",
    searchCommands: "Search commands...",
    musicCommands: "Music Commands",
    moderationCommands: "Moderation Commands",
    utilityCommands: "Utility Commands",
    inDev: "In Development",
    faq: "Frequently Asked Questions",
    faqDesc: "Find answers to common questions about Nyxro",
    q1Title: "Is Nyxro really free?",
    q1Ans: "Yes! Nyxro is completely free. Premium features may come later, but the core experience will always stay free.",
    q2Title: "How do I install Nyxro?",
    q2Ans: "Click the “Add to Discord” button, authorize the required permissions, and the bot will join your server instantly.",
    q3Title: "What audio sources does Nyxro support?",
    q3Ans: "Nyxro supports YouTube, Spotify, SoundCloud, Bandcamp, and direct audio links with advanced search.",
    q4Title: "Can I get early access to new features?",
    q4Ans: "Yes! Add the beta bot through the link in the Beta Program section to try upcoming features early.",
    q5Title: "How can I report bugs or suggest features?",
    q5Ans: "Join our support server and use the feedback channels, or reach out directly through Discord.",
    meetDeveloper: "Meet the Developer",
    developerIntro: "Nyxro was built with passion and dedication to deliver the best Discord experience.",
    fullStackCreator: "Full-Stack Developer",
    developerBio: "When building Nyxro, the idea was simple: create a bot that delivers great audio and powerful moderation tools without the complexity. That's how Nyxro was born.",
    seeMyProfiles: "See My Profiles",
    documentation: "Documentation",
    supportServer: "Support Server",
    terms: "Terms",
    privacy: "Privacy",
    copyright: "© 2025 - 2026 Nyxro Project. All rights reserved.",
    noCommands: "No commands found matching",
  },

  pt: {
    tagline: "Deixe o seu servidor do Discord em outro nível",
    description: "Música de qualidade e ferramentas de moderação para o seu servidor Discord.",
    addToDiscord: "Adicionar ao Discord",
    powerful: "Recursos Poderosos",
    featuresDesc: "Tudo o que você precisa para organizar e animar sua comunidade no Discord.",
    musicExcellence: "Excelência em Música",
    musicExcellenceDesc: "Ouça músicas do YouTube, Spotify e SoundCloud com áudio cristalino. Controle total da reprodução, filas infinitas e desempenho impecável com a tecnologia Lavalink.",
    highQuality: "Streaming de Alta Qualidade",
    highQualityDesc: "Áudio cristalino em 256kbps e bitrate adaptativo. Reprodução estável, sem travar e otimizada para o Discord.",
    queueManagement: "Gerenciamento de Fila",
    queueManagementDesc: "Organize, embaralhe e controle sua fila de músicas facilmente. Crie playlists dinâmicas e pule faixas sem complicação.",
    playlistSupport: "Playlists Multi-Plataforma",
    playlistSupportDesc: "Importe e toque playlists inteiras do YouTube, Spotify e SoundCloud no seu servidor com um único comando.",
    lavalink: "Baseado em Lavalink",
    lavalinkDesc: "Construído com discord.js, Kazagumo e Shoukaku para oferecer estabilidade, buscas rápidas e áudio de primeira.",
    advancedMod: "Moderação Avançada",
    advancedModDesc: "Controle total do seu servidor. Banir, expulsar, silenciar e gerenciar membros de forma simples. Limpe spam rapidamente e mantenha o ambiente saudável.",
    userManagement: "Gerenciamento de Usuários",
    userManagementDesc: "Banir e silenciar membros nunca foi tão fácil. Tenha controle total do servidor com ferramentas intuitivas.",
    messageManagement: "Gerenciamento de Mensagens",
    messageManagementDesc: "Delete mensagens em massa instantaneamente e mantenha seus canais limpos sem esforço.",
    removeUnwanted: "Remova Usuários Problemáticos",
    removeUnwantedDesc: "Expulse usuários tóxicos na hora e mantenha seu servidor seguro e organizado.",
    unban: "Desbanir Usuários",
    unbanDesc: "Remova bans facilmente quando o usuário estiver pronto para voltar. Segunda chance garantida.",
    loveNyxro: "Curtiu o Nyxro?",
    supportVote: "Deixe uma avaliação no Top.gg! Isso ajuda muito.",
    voteNyxro: "Votar no Nyxro",
    leaveReview: "Deixar Avaliação",
    betaProgram: "Programa Beta",
    joinBeta: "Participe do Programa Beta",
    betaDesc: "Acesse novidades antes de todo mundo e ajude a moldar o futuro do Nyxro.",
    earlyAccess: "Acesso Antecipado",
    earlyAccessDesc: "Use novos recursos antes do lançamento.",
    directInput: "Influência Direta",
    directInputDesc: "Seu feedback define as prioridades de desenvolvimento.",
    bugReports: "Ajude a Melhorar",
    bugReportsDesc: "Reporte bugs e ajude a deixar o bot cada vez melhor.",
    readyBeta: "Pronto para ajudar a moldar o futuro do Nyxro?",
    addBetaBotDiscord: "Adicionar Bot Beta ao Discord",
    betaNote: "A versão beta é um bot separado com recursos experimentais. Pode ser instável e apresentar erros.",
    commandRef: "Referência de Comandos",
    commandRefDesc: "Consulta rápida dos comandos disponíveis",
    searchCommands: "Pesquisar comandos...",
    musicCommands: "Comandos de Música",
    moderationCommands: "Comandos de Moderação",
    utilityCommands: "Comandos de Utilidade",
    inDev: "Em Desenvolvimento",
    faq: "Perguntas Frequentes",
    faqDesc: "Respostas para dúvidas comuns sobre o Nyxro",
    q1Title: "O Nyxro é realmente gratuito?",
    q1Ans: "Sim! O Nyxro é totalmente gratuito. Pode receber recursos premium no futuro, mas as funções principais sempre serão grátis.",
    q2Title: "Como instalo o Nyxro?",
    q2Ans: "Clique em “Adicionar ao Discord”, autorize as permissões e o bot entra no seu servidor automaticamente.",
    q3Title: "Quais fontes de áudio o Nyxro suporta?",
    q3Ans: "O Nyxro suporta YouTube, Spotify, SoundCloud, Bandcamp e links diretos de áudio.",
    q4Title: "Tem como ter acesso antecipado às novidades?",
    q4Ans: "Sim! Basta adicionar o bot beta usando o link na seção Programa Beta.",
    q5Title: "Como posso reportar bugs ou sugerir melhorias?",
    q5Ans: "Entre no nosso servidor de suporte e use os canais de feedback.",
    meetDeveloper: "Conheça o Desenvolvedor",
    developerIntro: "Nyxro foi criado com dedicação para entregar a melhor experiência no Discord.",
    fullStackCreator: "Desenvolvedor Full Stack",
    developerBio: "Quando comecei a criar o Nyxro, minha ideia era simples: um bot leve, completo, com áudio de qualidade e ferramentas que facilitassem a vida dos administradores. E o Nyxro nasceu assim.",
    seeMyProfiles: "Meus Perfis",
    documentation: "Documentação",
    supportServer: "Servidor de Suporte",
    terms: "Termos",
    privacy: "Privacidade",
    copyright: "© 2025 - 2026 Nyxro Project. Todos os direitos reservados.",
    noCommands: "Nenhum comando encontrado para",
  }
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState<"en" | "pt">("pt");
  const [darkMode, setDarkMode] = useState(true);
  const [discordStatus, setDiscordStatus] = useState<"online" | "idle" | "dnd" | "offline">("offline");
  const [discordAvatar, setDiscordAvatar] = useState<string>("");
  const t = translations[language];

  // Fetch Discord status and avatar using Lanyard API
  useEffect(() => {
    const fetchDiscordData = async () => {
      try {
        const response = await fetch("https://api.lanyard.rest/v1/users/523783344979443712");
        if (response.ok) {
          const data = await response.json();
          if (data.data) {
            if (data.data.discord_status) {
              setDiscordStatus(data.data.discord_status);
            }
            if (data.data.discord_user && data.data.discord_user.avatar) {
              const avatarUrl = `https://cdn.discordapp.com/avatars/523783344979443712/${data.data.discord_user.avatar}.png`;
              setDiscordAvatar(avatarUrl);
            }
          }
        }
      } catch (error) {
        console.error("Failed to fetch Discord data:", error);
      }
    };

    fetchDiscordData();
    // Poll every 30 seconds for status updates
    const interval = setInterval(fetchDiscordData, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);


  const commandTranslations: { [key: string]: { pt: string } } = {
    '/play': { pt: 'Toque uma música ou adicione à fila' },
    '/back': { pt: 'Toque a música anterior' },
    '/skip': { pt: 'Pule a música atual' },
    '/leave': { pt: 'Saia do canal de voz' },
    '/join': { pt: 'Entre em seu canal de voz' },
    '/loop': { pt: 'Ativar/desativar modo de repetição' },
    '/queue': { pt: 'Veja a fila atual' },
    '/clear': { pt: 'Limpar toda a fila' },
    '/jumpto': { pt: 'Pule para uma música na fila' },
    '/pause': { pt: 'Pausar reprodução' },
    '/resume': { pt: 'Resumir a música pausada' },
    '/remove': { pt: 'Remover uma música da fila' },
    '/shuffle': { pt: 'Embaralhar a fila' },
    '/ban': { pt: 'Banir um membro do servidor' },
    '/kick': { pt: 'Expulsar um membro do servidor' },
    '/tempmute': { pt: 'Silenciar temporariamente um membro' },
    '/mute': { pt: 'Silenciar permanentemente um membro' },
    '/unban': { pt: 'Remover ban de um membro do servidor' },
    '/purge': { pt: 'Deletar mensagens de um canal' },
    '/warning': { pt: 'Emitir aviso para um membro' },
    '/autorule': { pt: 'Aplicar cargos de forma automática para novos membros do servidor' },
    '/lock channel': { pt: 'Bloquear um canal de mensagens' },
    '/avatar': { pt: 'Mostrar avatar do usuário' },
    '/whois': { pt: 'Obter informações do usuário' },
    '/stats': { pt: 'Ver estatísticas do bot' },
    '/botinfo': { pt: 'Exibir informações do bot' },
    '/help': { pt: 'Mostrar ajuda e comandos' },
  };

  const allCommands = [
    { cmd: '/play', desc: 'Play a song or add to queue', usage: '/play <song name or URL>', category: 'music', dev: false },
    { cmd: '/back', desc: 'Play previous song', usage: '/back', category: 'music', dev: false },
    { cmd: '/skip', desc: 'Skip the current song', usage: '/skip', category: 'music', dev: false },
    { cmd: '/leave', desc: 'Leave the voice channel', usage: '/leave', category: 'music', dev: false },
    { cmd: '/join', desc: 'Join your voice channel', usage: '/join', category: 'music', dev: false },
    { cmd: '/loop', desc: 'Toggle loop mode', usage: '/loop', category: 'music', dev: false },
    { cmd: '/queue', desc: 'View the current queue', usage: '/queue', category: 'music', dev: false },
    { cmd: '/clear', desc: 'Clear the entire queue', usage: '/clear', category: 'music', dev: false },
    { cmd: '/jumpto', desc: 'Jump to a song in queue', usage: '/jumpto <position>', category: 'music', dev: false },
    { cmd: '/pause', desc: 'Pause playback', usage: '/pause', category: 'music', dev: false },
    { cmd: '/resume', desc: 'Resume the paused music', usage: '/resume', category: 'music', dev: false },
    { cmd: '/remove', desc: 'Remove a song from queue', usage: '/remove <position>', category: 'music', dev: true },
    { cmd: '/shuffle', desc: 'Shuffle the queue', usage: '/shuffle', category: 'music', dev: true },
    { cmd: '/ban', desc: 'Ban a member from server', usage: '/ban <@user> <reason>', category: 'moderation', dev: false },
    { cmd: '/kick', desc: 'Kick a member from server', usage: '/kick <@user> <reason>', category: 'moderation', dev: false },
    { cmd: '/tempmute', desc: 'Temporarily mute a member', usage: '/tempmute <@user> <duration>', category: 'moderation', dev: false },
    { cmd: '/mute', desc: 'Permanently mute a member', usage: '/mute <@user> <reason>', category: 'moderation', dev: false },
    { cmd: '/unban', desc: 'Unban a member from server', usage: '/unban <@user>', category: 'moderation', dev: false },
    { cmd: '/purge', desc: 'Delete messages from a channel', usage: '/purge <amount>', category: 'moderation', dev: false },
    { cmd: '/warning', desc: 'Issue a warning to a member', usage: '/warning <@user> <reason>', category: 'moderation', dev: true },
    { cmd: '/autorule', desc: 'Automatically assign roles to new server members.', usage: '/autorule <@rule> <type>', category: 'moderation', dev: true },
    { cmd: '/lock channel', desc: 'Lock a channel from messages', usage: '/lock channel <#channel>', category: 'moderation', dev: true },
    { cmd: '/avatar', desc: 'Show user avatar', usage: '/avatar <@user>', category: 'utility', dev: false },
    { cmd: '/whois', desc: 'Get user information', usage: '/whois <@user>', category: 'utility', dev: false },
    { cmd: '/stats', desc: 'View bot statistics', usage: '/stats', category: 'utility', dev: false },
    { cmd: '/botinfo', desc: 'Display bot information', usage: '/botinfo', category: 'utility', dev: false },
    { cmd: '/help', desc: 'Show help and commands', usage: '/help', category: 'utility', dev: false },
  ];

  const getCommandDesc = (cmd: string) => {
    return language === 'pt' && commandTranslations[cmd] ? commandTranslations[cmd].pt : allCommands.find(c => c.cmd === cmd)?.desc || '';
  };

  const filteredCommands = allCommands.filter(cmd => {
    const searchLower = searchQuery.toLowerCase();
    const cmdDesc = getCommandDesc(cmd.cmd).toLowerCase();
    return searchQuery === "" ||
      cmd.cmd.toLowerCase().includes(searchLower) ||
      cmdDesc.includes(searchLower);
  });

  const musicCommands = filteredCommands.filter(c => c.category === 'music');
  const moderationCommands = filteredCommands.filter(c => c.category === 'moderation');
  const utilityCommands = filteredCommands.filter(c => c.category === 'utility');

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/favicon.ico" alt="Nyxro Bot Logo" className="relative w-8 h-8 rounded-2xl object-cover" />
            <span className="font-bold text-lg">Nyxro</span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setDarkMode(!darkMode)}
              className="gap-2"
              data-testid="button-dark-mode-toggle"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setLanguage(language === "en" ? "pt" : "en")}
              className="gap-2"
              data-testid="button-language-toggle"
            >
              <Globe className="w-4 h-4" />
              {language === "en" ? "PT" : "EN"}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--secondary)/0.1),transparent_50%)]" />

        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                <img src="/favicon.ico" alt="Nyxro Bot Logo" className="relative w-24 h-24 rounded-2xl object-cover" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                  Nyxro
                </span>
              </h1>
              <p className="text-2xl md:text-4xl font-semibold text-foreground">
                {t.tagline}
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                className="text-lg px-8 py-6 min-h-14 gap-2"
                data-testid="button-add-stable"
                asChild
              >
                <a href="https://discord.com/oauth2/authorize?client_id=1311537818887258112&scope=bot" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" />
                  {t.addToDiscord}
                </a>
              </Button>

              <Button
                size="lg"
                className="text-lg px-8 py-6 min-h-14 gap-2 bg-destructive/10 text-destructive hover:bg-destructive/20 border border-destructive/30"
                data-testid="button-add-beta"
                asChild
              >
                <a href="https://discord.com/oauth2/authorize?client_id=1439084261712855130&scope=bot" target="_blank" rel="noopener noreferrer">
                  <Zap className="w-5 h-5" />
                  {t.addBetaBotDiscord}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t.powerful}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.featuresDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="relative overflow-hidden hover-elevate" data-testid="card-music-features">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Music className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">{t.musicExcellence}</CardTitle>
                  <CardDescription className="text-base">
                    {t.musicExcellenceDesc}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <p className="font-medium text-foreground">{t.highQuality}</p>
                      <p className="text-sm text-muted-foreground">{t.highQualityDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <p className="font-medium text-foreground">{t.queueManagement}</p>
                      <p className="text-sm text-muted-foreground">{t.queueManagementDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <p className="font-medium text-foreground">{t.playlistSupport}</p>
                      <p className="text-sm text-muted-foreground">{t.playlistSupportDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <p className="font-medium text-foreground">{t.lavalink}</p>
                      <p className="text-sm text-muted-foreground">{t.lavalinkDesc}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden hover-elevate" data-testid="card-moderation-features">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl" />
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">{t.advancedMod}</CardTitle>
                  <CardDescription className="text-base">
                    {t.advancedModDesc}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                    <div>
                      <p className="font-medium text-foreground">{t.userManagement}</p>
                      <p className="text-sm text-muted-foreground">{t.userManagementDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                    <div>
                      <p className="font-medium text-foreground">{t.messageManagement}</p>
                      <p className="text-sm text-muted-foreground">{t.messageManagementDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                    <div>
                      <p className="font-medium text-foreground">{t.removeUnwanted}</p>
                      <p className="text-sm text-muted-foreground">{t.removeUnwantedDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                    <div>
                      <p className="font-medium text-foreground">{t.unban}</p>
                      <p className="text-sm text-muted-foreground">{t.unbanDesc}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top.gg Rating Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t.loveNyxro}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.supportVote}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <Button
              size="lg"
              className="gap-2 px-8 min-w-fit"
              data-testid="button-rate-bot"
              asChild
            >
              <a href="https://top.gg/pt/bot/1311537818887258112/vote" target="_blank" rel="noopener noreferrer">
                <TrendingUp className="w-5 h-5" />
                {t.voteNyxro}
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gap-2 px-8 min-w-fit"
              data-testid="button-review-bot"
              asChild
            >
              <a href="https://top.gg/bot/1311537818887258112#reviews" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5" />
                {t.leaveReview}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Beta Program Section */}
      <section id="beta" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="relative overflow-hidden border-destructive/30 hover-elevate" data-testid="card-beta-program">
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent" />
              <CardHeader className="text-center space-y-6 relative">
                <div className="flex justify-center">
                  <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/30 px-4 py-1.5 text-sm font-semibold" data-testid="badge-beta">
                    <Zap className="w-4 h-4 mr-1.5" />
                    {t.betaProgram}
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-3xl md:text-4xl mb-4">
                    {t.joinBeta}
                  </CardTitle>
                  <CardDescription className="text-base md:text-lg">
                    {t.betaDesc}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-8 relative">
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto">
                      <Zap className="w-6 h-6 text-destructive" />
                    </div>
                    <h3 className="font-semibold text-foreground">{t.earlyAccess}</h3>
                    <p className="text-sm text-muted-foreground">{t.earlyAccessDesc}</p>
                  </div>

                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto">
                      <Users className="w-6 h-6 text-destructive" />
                    </div>
                    <h3 className="font-semibold text-foreground">{t.directInput}</h3>
                    <p className="text-sm text-muted-foreground">{t.directInputDesc}</p>
                  </div>

                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto">
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                    </div>
                    <h3 className="font-semibold text-foreground">{t.bugReports}</h3>
                    <p className="text-sm text-muted-foreground">{t.bugReportsDesc}</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="text-center space-y-8">
                  <p className="text-muted-foreground">
                    {t.readyBeta}
                  </p>

                  <Button
                    size="lg"
                    className="gap-2 bg-destructive hover:bg-destructive/90 text-destructive-foreground px-8"
                    data-testid="button-add-beta-bot"
                    asChild
                  >
                    <a href="https://discord.com/oauth2/authorize?client_id=1439084261712855130&scope=bot" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5" />
                      {t.addBetaBotDiscord}
                    </a>
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    {t.betaNote}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Command Reference Section */}
      <section id="commands" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t.commandRef}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.commandRefDesc}
            </p>

            <div className="max-w-md mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t.searchCommands}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                  data-testid="input-command-search"
                />
              </div>
            </div>
          </div>

          {(musicCommands.length > 0 || moderationCommands.length > 0 || utilityCommands.length > 0) ? (
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {musicCommands.length > 0 && (
                <div className="space-y-6" data-testid="section-music-commands">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <ListMusic className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{t.musicCommands} ({musicCommands.length})</h3>
                  </div>

                  <div className="space-y-3">
                    {musicCommands.map((command) => (
                      <Card key={command.cmd} className="hover-elevate" data-testid={`command-${command.cmd.slice(1)}`}>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <code className="text-sm font-mono font-semibold text-primary break-all">
                                  {command.usage}
                                </code>
                                {command.dev && <Badge variant="outline" className="text-xs">{t.inDev}</Badge>}
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">
                                {getCommandDesc(command.cmd)}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {moderationCommands.length > 0 && (
                <div className="space-y-6" data-testid="section-moderation-commands">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold">{t.moderationCommands} ({moderationCommands.length})</h3>
                  </div>

                  <div className="space-y-3">
                    {moderationCommands.map((command) => (
                      <Card key={command.cmd} className="hover-elevate" data-testid={`command-${command.cmd.slice(1)}`}>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <code className="text-sm font-mono font-semibold text-secondary break-all">
                                  {command.usage}
                                </code>
                                {command.dev && <Badge variant="outline" className="text-xs">{t.inDev}</Badge>}
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">
                                {getCommandDesc(command.cmd)}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {utilityCommands.length > 0 && (
                <div className="space-y-6" data-testid="section-utility-commands">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold">{t.utilityCommands} ({utilityCommands.length})</h3>
                  </div>

                  <div className="space-y-3">
                    {utilityCommands.map((command) => (
                      <Card key={command.cmd} className="hover-elevate" data-testid={`command-${command.cmd.slice(1)}`}>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <code className="text-sm font-mono font-semibold text-accent break-all">
                                  {command.usage}
                                </code>
                                {command.dev && <Badge variant="outline" className="text-xs">{t.inDev}</Badge>}
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">
                                {getCommandDesc(command.cmd)}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{t.noCommands} "{searchQuery}"</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t.faq}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.faqDesc}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4" data-testid="faq-accordion">
              <AccordionItem value="item-1" className="border rounded-lg px-6" data-testid="faq-item-1">
                <AccordionTrigger className="text-lg font-semibold">{t.q1Title}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t.q1Ans}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6" data-testid="faq-item-2">
                <AccordionTrigger className="text-lg font-semibold">{t.q2Title}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t.q2Ans}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6" data-testid="faq-item-3">
                <AccordionTrigger className="text-lg font-semibold">{t.q3Title}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t.q3Ans}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6" data-testid="faq-item-4">
                <AccordionTrigger className="text-lg font-semibold">{t.q4Title}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t.q4Ans}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6" data-testid="faq-item-5">
                <AccordionTrigger className="text-lg font-semibold">{t.q5Title}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t.q5Ans}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Developer Showcase Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t.meetDeveloper}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.developerIntro}
            </p>
          </div>

          <div className="flex justify-center max-w-md mx-auto">
            <Card className="hover-elevate flex flex-col items-center text-center w-full" data-testid="developer-card">
              <CardContent className="pt-8 w-full flex flex-col items-center">
                <div className="relative mb-8">
                  <Avatar className="w-32 h-32 ring-4 ring-primary/30" data-testid="avatar-developer">
                    <AvatarImage src={discordAvatar || "https://avatars.githubusercontent.com/u/157351009?v=4"} alt="rablonkk" />
                    <AvatarFallback>RB</AvatarFallback>
                  </Avatar>
                  <div
                    className="absolute bottom-0 right-0 w-8 h-8 rounded-full border-4 border-background flex items-center justify-center"
                    style={{
                      backgroundColor:
                        discordStatus === "online" ? "#31a24c" :
                          discordStatus === "idle" ? "#f0b232" :
                            discordStatus === "dnd" ? "#f04747" :
                              "#747f8d"
                    }}
                    data-testid={`discord-status-${discordStatus}`}
                    title={`Discord Status: ${discordStatus}`}
                  >
                    <Circle className="w-3 h-3 fill-current text-current" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">@rablonkk</h3>
                <p className="text-base text-muted-foreground mb-6">{t.fullStackCreator}</p>
                <p className="text-muted-foreground text-sm mb-8 max-w-sm">
                  {t.developerBio}
                </p>

                <p className="text-muted-foreground text-xs mb-4">{t.seeMyProfiles}</p>

                <div className="flex gap-4">
                  <Button
                    size="icon"
                    variant="outline"
                    className="hover:bg-primary/10"
                    data-testid="link-github-developer"
                    asChild
                  >
                    <a href="https://github.com/rablonkk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="hover:bg-[#1DB954]/10"
                    data-testid="link-spotify-developer"
                    asChild
                  >
                    <a href="https://open.spotify.com/user/gni3oq6u8qlmytibcbt9mhw2x" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                      <SiSpotify className="w-5 h-5 text-[#1DB954]" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="hover:bg-[#5865F2]/10"
                    data-testid="link-discord-developer"
                    asChild
                  >
                    <a href="https://discord.com/users/rablonkk" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                      <SiDiscord className="w-5 h-5 text-[#5865F2]" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src="/favicon.ico" alt="Nyxro Bot Logo" className="relative w-8 h-8 rounded-2xl object-cover" />
              <span className="text-xl font-bold">Nyxro</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a
                href="https://discord.com/invite/MT7RPUQA3d"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                data-testid="link-support"
              >
                {t.supportServer}
              </a>
              <a
                href="https://discord.com/oauth2/authorize?client_id=1311537818887258112&permissions=2048&scope=bot"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                data-testid="link-add-bot"
              >
                {t.addToDiscord}
              </a>
              <a
                href="https://top.gg/bot/1311537818887258112/vote"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                data-testid="link-vote"
              >
                {t.voteNyxro}
              </a>
            </div>

            <div className="text-sm text-muted-foreground">
              {t.copyright}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
