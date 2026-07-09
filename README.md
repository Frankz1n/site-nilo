# Jorge Nilo Pinheiro de Lima — Consultoria Gráfica

Landing page em **Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4**, construída com foco em **performance** e **SEO** para o Google.

## Como rodar

```bash
npm install
npm run dev        # desenvolvimento em http://localhost:3000
npm run build      # build de produção
npm run start      # servir o build
```

Requer Node.js 18.18+ (recomendado 20+).

## Estrutura

```
app/
  layout.tsx        # metadata, fontes, JSON-LD, <html lang="pt-BR">
  page.tsx          # composição das seções (Server Component estático)
  globals.css       # tokens de design (Tailwind v4 @theme)
  sitemap.ts        # /sitemap.xml gerado automaticamente
  robots.ts         # /robots.txt gerado automaticamente
  fonts/            # Inter + Montserrat em .woff2 (self-hosted)
components/         # Header, Hero, Stats, Brands, Services, About,
                    # Portfolio, Process, Testimonials, Contact, Footer, icons
lib/site.ts        # dados do site (nome, contato, SEO) — ponto único de edição
public/            # favicon.svg, og.png
```

## O que já está otimizado para SEO e performance

- **Renderização estática (SSG):** toda a home é pré-renderizada em HTML. First Load JS ~104 kB — apenas o `Header` é Client Component; todo o resto é Server Component.
- **Metadata API completa:** `title` com template, `description`, `keywords`, `canonical`, Open Graph e Twitter Card (`app/layout.tsx`).
- **Dados estruturados JSON-LD** (`ProfessionalService` + `Person` + `OfferCatalog`) para rich results.
- **`sitemap.xml` e `robots.txt`** gerados automaticamente.
- **Fontes self-hosted** via `next/font/local` (Inter + Montserrat `.woff2`): zero requisição externa e zero layout shift (CLS = 0).
- **HTML semântico:** um único `<h1>`, hierarquia correta de headings, `<header> <main> <section> <nav> <footer>`, `aria-label`s, skip-link "Pular para o conteúdo".
- **Acessibilidade:** foco visível, contraste alto, `prefers-reduced-motion` respeitado, alvos de toque ≥ 44px.
- **Imagens em SVG inline** (gráfico do herói, ícones e logo): nítidas em qualquer resolução, sem custo de rede.
- **Headers de cache e segurança** configurados em `next.config.mjs`.
- **`lang="pt-BR"`** e `themeColor` definidos.

## Antes de publicar — checklist

1. **`lib/site.ts`** — troque `url`, `email`, `phone`, `whatsapp`, redes sociais e cidade pelos dados reais.
2. **Logotipos das marcas** (`components/Brands.tsx`) — hoje são placeholders textuais. Substitua pelos arquivos oficiais em `/public/brands/*.svg` usando `next/image`, com autorização de uso de cada marca.
3. **Foto do "Sobre"** (`components/About.tsx`) e **imagens do portfólio** (`components/Portfolio.tsx`) — troque os blocos gradientes por fotos reais com `next/image`.
4. **Depoimentos** (`components/Testimonials.tsx`) — use depoimentos reais e autorizados.
5. **`public/og.png`** — imagem de compartilhamento (1200×630) já incluída; ajuste se quiser.
6. Cadastre o domínio no **Google Search Console** e envie o `sitemap.xml`.

## Deploy

Otimizado para **Vercel** (deploy direto do repositório) ou qualquer host com Node. Também é possível `output: 'export'` para hospedagem 100% estática, se não precisar de recursos de servidor.

---
Desenvolvido por **Orbyts** · Stack: React 19 · TypeScript · Vite-friendly · Tailwind v4 · Next.js 15
