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
    label: "Seu Nome",
    placeholder: "Digite seu nome completo...",
    required: true,
  },
  {
    id: "email",
    name: "email",
    type: "email",
    label: "Seu Email",
    placeholder: "seu.email@exemplo.com",
    required: true,
  },
  {
    id: "message",
    name: "message",
    type: "textarea",
    label: "Sua Mensagem",
    placeholder: "Conte-me sobre seu projeto, ideia ou como posso ajudá-lo...",
    required: true,
    rows: 5,
  },
];

const ContactCard = ({ icon: Icon, title, value, href, external }) => (
  <div className="flex items-center space-x-4 p-4 rounded-lg bg-card border-2 border-border hover:border-primary/50 transition-all shadow-md">
    <div className="p-3 rounded-full bg-primary/10">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <div className="text-left">
      <h4 className="font-medium">{title}</h4>
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {value}
        </a>
      ) : (
        <span className="text-muted-foreground">{value}</span>
      )}
    </div>
  </div>
);

const SocialLinks = () => (
  <div className="pt-8">
    <h4 className="font-medium mb-4 text-center">Conecte-se comigo</h4>
    <div className="flex space-x-4 justify-center">
      {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="p-2 text-foreground hover:text-primary hover:scale-110 transition-all"
        >
          <Icon className="h-6 w-6" />
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
        className="block text-sm font-medium text-foreground/80"
      >
        {label} {required && "*"}
      </label>
      <div className="relative">
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
    "w-full px-4 py-3 rounded-lg border border-input bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none placeholder:text-muted-foreground/60";

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
            <h3 className="text-2xl font-semibold mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              {CONTACT_INFO.map((contact) => (
                <ContactCard key={contact.title} {...contact} />
              ))}
            </div>
            <SocialLinks />
          </div>

          <div className="bg-card backdrop-blur-sm border-2 border-border p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Send className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Envie uma Mensagem</h3>
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
                  "cosmic-button w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                  isSubmitting
                    ? "bg-primary/80"
                    : "bg-primary hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
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
    </section>
  );
};
