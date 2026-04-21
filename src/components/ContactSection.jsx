"use client";

import { Github, Instagram, Linkedin, LocateFixed, Mail, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "fabriciof.dev@gmail.com",
    href: "mailto:fabriciof.dev@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Fabricio-Fontenele",
    href: "https://github.com/Fabricio-Fontenele",
  },
  {
    icon: LocateFixed,
    label: "Localização",
    value: "Parnaíba, PI - Brasil",
  },
];

const socials = [
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

const fields = [
  {
    id: "name",
    name: "name",
    type: "text",
    label: "Nome",
    placeholder: "Seu nome",
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
    placeholder: "Descreva o desafio, objetivo e prazo.",
    required: true,
    rows: 5,
  },
];

export const ContactSection = () => {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef);

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const data = {
      from_name: form.name.value,
      from_email: form.email.value,
      message: form.message.value,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Mensagem enviada",
        description: "Recebi seu contato. Retorno em breve.",
        duration: 4800,
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Falha no envio",
        description: "Tente novamente ou use o email direto.",
        duration: 4800,
        variant: "destructive",
      });

      console.error("Erro ao enviar email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="section-shell section-pad">
          <div className="mb-10 text-left md:text-center">
            <p
              data-reveal
              className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
            >
              Contato
            </p>
            <h2 data-reveal className="mt-3 text-3xl font-bold md:text-4xl">
              Vamos construir algo de alto nível
            </h2>
            <p
              data-reveal
              className="mx-auto mt-4 max-w-3xl text-muted-foreground"
            >
              Se você precisa de alguém para estruturar backend, organizar domínio,
              melhorar a arquitetura ou evoluir uma base em TypeScript, vamos conversar.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <aside data-reveal className="glass-panel min-w-0 p-5 md:p-6">
              <h3 className="text-xl font-semibold">Canais diretos</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Escolha o canal mais conveniente para iniciarmos a conversa.
              </p>

              <div className="mt-5 space-y-3">
                {channels.map((item) => {
                  const IconComponent = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="min-w-0 rounded-lg border border-border/80 bg-background/55 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 rounded-md bg-primary/12 p-2">
                          <IconComponent className="h-4 w-4 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-1 inline-block max-w-full break-all text-sm font-semibold text-foreground/90 transition-colors hover:text-primary"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="mt-1 break-words text-sm font-semibold text-foreground/90">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-border/75 pt-5">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Redes
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {socials.map((item) => {
                    const IconComponent = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex max-w-full items-center gap-2 break-all rounded-md border border-border/80 bg-background/55 px-3 py-2 text-sm font-semibold text-foreground/85 transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        <IconComponent className="h-4 w-4" />
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </aside>

            <div data-reveal className="glass-panel min-w-0 p-5 md:p-6">
              <h3 className="text-xl font-semibold">Envie uma mensagem</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Me conte o contexto do projeto, o problema atual e onde você quer chegar.
              </p>

              <form className="mt-6 min-w-0 space-y-4" onSubmit={handleSubmit}>
                {fields.map((field) => {
                  return (
                    <div key={field.id} className="space-y-2">
                      <label className="text-sm font-medium" htmlFor={field.id}>
                        {field.label}
                      </label>

                      {field.type === "textarea" ? (
                        <textarea
                          id={field.id}
                          name={field.name}
                          rows={field.rows}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="w-full min-w-0 resize-none rounded-md border border-border/80 bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/65 transition-colors focus:border-primary/45 focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                      ) : (
                        <input
                          id={field.id}
                          name={field.name}
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="w-full min-w-0 rounded-md border border-border/80 bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/65 transition-colors focus:border-primary/45 focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                      )}
                    </div>
                  );
                })}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors",
                    "disabled:cursor-not-allowed disabled:opacity-60",
                    isSubmitting
                      ? "bg-primary/80 text-primary-foreground"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/25 border-t-white" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensagem
                      <Send className="h-4 w-4" />
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
