import { Music, Home, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

const translations = {
  en: {
    errorCode: "404",
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist. It might have been moved or deleted.",
    backHome: "Back to Home",
    tagline: "Looks like this track isn't in our playlist",
  },
  pt: {
    errorCode: "404",
    title: "Página Não Encontrada",
    description: "A página que você procura não existe. Ela pode ter sido movida ou deletada.",
    backHome: "Voltar ao Início",
    tagline: "Parece que essa faixa não está em nossa playlist",
  }
};

export default function NotFound() {
  const [language, setLanguage] = useState<"en" | "pt">("pt");
  const [darkMode, setDarkMode] = useState(true);
  const [, setLocation] = useLocation();
  const t = translations[language];

  // Aplica ou remove a classe "dark" no HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden relative">

      {/* Background gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--secondary)/0.05),transparent_50%)]" />

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">

          {/* Ícone */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full w-32 h-32" />
              <img src="/favicon.ico" alt="Nyxro Bot Logo" className="relative w-28 h-28 rounded-2xl object-cover dark:invert-0 invert" />
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-4">
            <div className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              {t.errorCode}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {t.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              {t.description}
            </p>

            <p className="text-sm md:text-base text-primary/70 italic pt-4">
              {t.tagline}
            </p>
          </div>

          {/* Botões */}
          <div className="flex flex-col gap-4 pt-8 items-center">

            {/* Voltar */}
            <Button
              size="lg"
              className="text-lg px-8 py-6 min-h-14 gap-2"
              data-testid="button-back-home"
              onClick={() => setLocation("/")}
            >
              <Home className="w-5 h-5" />
              {t.backHome}
            </Button>

            {/* Dark Mode */}
            <Button
              size="sm"
              variant="outline"
              onClick={() => setDarkMode(!darkMode)}
              className="gap-2"
              data-testid="button-dark-mode-toggle-404"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* Idioma */}
            <Button
              size="sm"
              variant="outline"
              onClick={() => setLanguage(language === "en" ? "pt" : "en")}
              className="gap-2"
              data-testid="button-language-toggle-404"
            >
              {language === "en" ? "PT" : "EN"}
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
}
