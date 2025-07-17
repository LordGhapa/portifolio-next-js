# Copilot Instructions for portifolio-next-js

## Visão Geral
Este projeto é um portfólio pessoal construído com Next.js, utilizando TypeScript, Tailwind CSS e integração com Sanity.io para CMS. O código segue a estrutura de roteamento de app directory do Next.js (`src/app/`).

## Estrutura e Componentes Principais
- **src/app/**: Contém as rotas e páginas principais, organizadas por diretórios. Exemplo: `(web)/projetos/[slug]/` para páginas dinâmicas de projetos.
- **src/components/**: Componentes reutilizáveis (ex: `NavBar`, `Footer`, `ScrollToTop`, `ButtonBackPage`).
- **sanity/**: Configuração e schemas do Sanity CMS, além de utilitários para integração (`lib/client.ts`, `lib/image.ts`).
- **public/**: Imagens e assets estáticos.

## Fluxo de Dados
- Dados de projetos são buscados do Sanity via funções em `src/lib/apis.ts`.
- As páginas dinâmicas usam `generateStaticParams` e funções assíncronas para buscar e renderizar dados do CMS.
- Imagens do Sanity são processadas via `urlFor`.

## Convenções e Padrões
- Componentes de página recebem props tipadas e geralmente são assíncronos para SSR/SSG.
- Uso extensivo de Tailwind CSS para estilização, com classes utilitárias diretamente nos elementos.
- O PortableText do Sanity é customizado via a prop `components` para renderização de rich text.
- Estrutura de pastas prioriza clareza semântica: componentes específicos de página ficam em subpastas de `components/` ou dentro da própria rota.
- Sempre trate campos opcionais do Sanity (`string | null`, arrays possivelmente nulos) antes de renderizar.

## Workflows de Desenvolvimento
- **Rodar localmente:** `npm run dev` (ou `pnpm run dev` se usar pnpm)
- **Build de produção:** `npm run build`
- **Deploy:** Vercel (configuração padrão Next.js)
- **Sanity Studio:** comandos e schemas ficam fora do escopo do app principal, mas podem ser acessados via scripts em `sanity/`.

## Integrações e Dependências
- **Sanity.io**: CMS headless, schemas em `sanity/schema/`.
- **Tailwind CSS**: Configurado em `tailwind.config.js`.
- **Framer Motion**: Para animações de UI.
- **Lucide-react**: Ícones SVG.

## Exemplos de Padrão
- Renderização de rich text:
  ```tsx
  <PortableText
    value={info.fullDescription}
    components={{
      block: {
        normal: ({ children }) => (
          <p className="text-base leading-relaxed text-gray-200 mb-8 last:mb-0">{children}</p>
        ),
      },
    }}
  />
  ```
- Busca de dados do Sanity:
  ```ts
  import { getAllProjects } from "@/lib/apis";
  const projects = await getAllProjects();
  ```

## Dicas para Agentes
- Sempre verifique e trate campos opcionais/nulos vindos do Sanity.
- Prefira componentes funcionais assíncronos para SSR/SSG.
- Siga a estrutura de pastas para manter clareza entre componentes globais e específicos de página.
- Use as classes utilitárias do Tailwind para estilização rápida e consistente.

---
Se algo não estiver claro ou faltar contexto, peça exemplos de uso real ou esclarecimentos sobre fluxos específicos.
