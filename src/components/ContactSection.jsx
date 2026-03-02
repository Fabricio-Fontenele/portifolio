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

const CONTACT_INFO = [
  {
    icon: Mail,
    title: "Email",
    value: "fabriciof.dev@gmail.com",
    href: "mailto:fabriciof.dev@gmail.com",
    external: true,
  },
  {
    icon: Github,
    title: "GitHub",
    value: "Fabricio-Fontenele",
    href: "https://github.com/Fabricio-Fontenele",
    external: true,
  },
  {
    icon: LocateFixed,
    title: "Localização",
    value: "Parnaíba, PI - Brasil",
    href: null,
    external: false,
  },
];

const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/fabricio-fontenele-302975333/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/fabriciofontenele_/",
    label: "Instagram",
  },
];

const FORM_FIELDS = [
  {
    id: "name",
    name: "name",
    type: "text",
    label: "Nome",
    placeholder: "Digite seu nome completo",
    required: true,
  },
  {
    id: "email",
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "seu.email@exemplo.com",
    required: true,
  },
  {
    id: "message",
    name: "message",
    type: "textarea",
    label: "Mensagem",
    placeholder: "Conte-me sobre seu projeto ou ideia...",
    required: true,
    rows: 5,
  },
];

const ContactCard = ({ icon: Icon, title, value, href, external }) => (
  <div className="group relative flex items-center space-x-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/10 overflow-hidden">
    {/* Terminal-style top bar */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <div className="text-left flex-1">
      <h4 className="font-medium font-mono text-sm text-muted-foreground mb-1">
        <span className="text-primary"># </span>
        {title}
      </h4>
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="text-foreground hover:text-primary transition-colors font-medium"
        >
          {value}
        </a>
      ) : (
        <span className="text-foreground font-medium">{value}</span>
      )}
    </div>
  </div>
);

const SocialLinks = () => (
  <div className="pt-8">
    <h4 className="text-center mb-4 font-medium">Conecte-se comigo</h4>
    <div className="flex space-x-4 justify-center">
      {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
        >
          <Icon className="h-6 w-6" />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono bg-card border border-border px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {label}
          </span>
        </a>
      ))}
    </div>
  </div>
);

const FormField = ({ field, inputClassName }) => {
  const { id, name, type, label, placeholder, required, rows } = field;

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-foreground mb-1"
      >
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-3 pointer-events-none">
          <span className="text-primary font-mono text-sm">❯</span>
        </div>
        {type === "textarea" ? (
          <textarea
            id={id}
            name={name}
            rows={rows}
            required={required}
            className={inputClassName}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            id={id}
            name={name}
            required={required}
            className={inputClassName}
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
};

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showSuccessToast = () => {
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado por entrar em contato. Responderei em breve!",
      duration: 5000,
    });
  };

  const showErrorToast = () => {
    toast({
      title: "Erro ao enviar",
      description:
        "Algo deu errado. Tente novamente ou me envie um email direto.",
      duration: 5000,
      variant: "destructive",
    });
  };

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

      showSuccessToast();
      e.target.reset();
    } catch (error) {
      showErrorToast();
      console.error("Erro ao enviar email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName =
    "w-full pl-8 pr-4 py-3 rounded-lg border border-border bg-card/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none placeholder:text-muted-foreground/60 hover:border-primary/30 font-mono text-sm";

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
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              {CONTACT_INFO.map((contact) => (
                <ContactCard key={contact.title} {...contact} />
              ))}
            </div>
            <SocialLinks />
          </div>

          <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-lg shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
            {/* Terminal header */}
            <div className="bg-card backdrop-blur px-4 py-3 border-b border-border flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="absolute left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground">
                contact.sh
              </span>
              <div className="w-12"></div>
            </div>

            {/* Form content */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Envie uma Mensagem</h3>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {FORM_FIELDS.map((field) => (
                  <FormField
                    key={field.id}
                    field={field}
                    inputClassName={inputClassName}
                  />
                ))}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
                    isSubmitting
                      ? "bg-primary/80"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98]"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-t-white" />
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
      </div>
    </section>
  );
};
