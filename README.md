<div align="center">

# Portfólio Profissional

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.14-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Portfólio pessoal com foco em backend, engenharia de software e arquitetura**

[Demo](https://fabriciofontenele.com.br) • [Contato](#contato)

</div>

## Sobre

Este projeto é o portfólio pessoal de Fabrício Fontenele. A aplicação foi construída com Next.js App Router e TypeScript, com uma interface editorial/cósmica para apresentar experiência, projetos e posicionamento técnico com foco em backend e engenharia de software.

## Destaques

- App Router com Next.js 15
- TypeScript em toda a base de código
- Tailwind CSS 4 com tokens e utilitários customizados
- animações com GSAP e efeitos de fundo com estrelas/meteoros
- formulário de contato com EmailJS
- layout responsivo com ajustes para mobile e desktop

## Stack

**Base**

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4

**UI e utilitários**

- Radix UI Toast
- Lucide React
- CVA
- clsx
- tailwind-merge

**Animação e integração**

- GSAP
- EmailJS

## Estrutura

```text
src/
├── app/                 # App Router
├── components/          # Seções e componentes de interface
│   └── ui/              # Primitivos reutilizáveis
├── hooks/               # Hooks de tema, animação e toast
├── lib/                 # Utilitários compartilhados
├── types/               # Declarações auxiliares
└── index.css            # Tokens e estilos globais

public/
├── curriculo.pdf
├── favicon.svg
└── images/
```

## Instalação

```bash
git clone https://github.com/Fabricio-Fontenele/portifolio.git
cd portifolio
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Scripts

```bash
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção
npm run start    # sobe a aplicação em produção
npm run lint     # lint da base
```

## Variáveis de ambiente

Para o formulário de contato com EmailJS:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

## Deploy

Build de produção:

```bash
npm run build
```

Como o projeto está configurado com `output: "standalone"`, ele pode ser publicado com facilidade em VPS e ambientes Node.js.

Na VPS atual, a aplicação roda via Docker Compose publicada em `127.0.0.1:3000`, e o Nginx ativo fica no host em `/etc/nginx/sites-available/portfolio`.

O arquivo [infra/nginx/portfolio.conf.example](infra/nginx/portfolio.conf.example) é apenas um template versionado para futuras migrações de VPS e não é aplicado automaticamente pelo deploy atual.

Para uma referência mais próxima da VPS atual com domínio e Certbot, veja também [infra/nginx/portfolio.vps-ssl.conf.example](infra/nginx/portfolio.vps-ssl.conf.example).

## Contato

- LinkedIn: [linkedin.com/in/fabricio-fontenele-302975333](https://www.linkedin.com/in/fabricio-fontenele-302975333/)
- GitHub: [github.com/Fabricio-Fontenele](https://github.com/Fabricio-Fontenele)
- Email: [fabriciof.dev@gmail.com](mailto:fabriciof.dev@gmail.com)

## Licença

MIT © [Fabrício Fontenele](https://github.com/Fabricio-Fontenele)
