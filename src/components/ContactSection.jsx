import {
  Github,
  Instagram,
  Linkedin,
  LocateFixed,
  Mail,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      from_name: e.target.name.value,
      from_email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado por entrar em contato. Responderei em breve!",
        duration: 5000,
      });

      e.target.reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description:
          "Algo deu errado. Tente novamente ou me envie um email direto.",
        duration: 5000,
        variant: "destructive",
      });
      console.error("Erro ao enviar email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/50 dark:bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Entre em <span className="text-primary">contato</span>
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Tem um projeto em mente ou quer colaborar? Sinta-se à vontade para
          entrar em contato. Estou sempre aberto a discutir novas oportunidades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 ">
            <h3 className="text-2xl font-semibold mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border-2 border-border hover:border-primary/50 transition-all shadow-md">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium">Email</h4>
                  <a
                    target="_blank"
                    href="mailto:fabriciof.dev@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    fabriciof.dev@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border-2 border-border hover:border-primary/50 transition-all shadow-md">
                <div className="p-3 rounded-full bg-primary/10">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium">GitHub</h4>
                  <a
                    target="_blank"
                    href="https://github.com/Fabricio-Fontenele"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Fabricio-Fontenele
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border-2 border-border hover:border-primary/50 transition-all shadow-md">
                <div className="p-3 rounded-full bg-primary/10">
                  <LocateFixed className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium">Localização</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Parnaíba, PI - Brasil
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Conecte-se comigo</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/fabricio-fontenele-302975333/">
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/_fabriciovieira_a/">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card backdrop-blur-sm border-2 border-border p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Send className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Envie uma Mensagem</h3>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground/80"
                >
                  Seu Nome *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 placeholder:text-muted-foreground/60"
                    placeholder="Digite seu nome completo..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground/80"
                >
                  Seu Email *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 placeholder:text-muted-foreground/60"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground/80"
                >
                  Sua Mensagem *
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none placeholder:text-muted-foreground/60"
                    placeholder="Conte-me sobre seu projeto, ideia ou como posso ajudá-lo..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                  isSubmitting
                    ? "bg-primary/80"
                    : "bg-primary hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
                )}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-t-white"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
