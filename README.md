# Site — Aline Marciano · Psicóloga

Template profissional de site vertical (one-page) com cores pastéis,
100% responsivo, feito em HTML + CSS + JavaScript puros — sem build,
sem dependências. Basta abrir o `index.html` no navegador.

## Arquivos

| Arquivo       | O que faz                                            |
| ------------- | ---------------------------------------------------- |
| `index.html`  | Todo o conteúdo e textos do site                     |
| `styles.css`  | Cores, fontes e estilos (paleta no topo do arquivo)   |
| `script.js`   | Menu, animações, formulário → WhatsApp               |
| `README.md`   | Este guia                                            |

## Como editar

### Textos (tudo no `index.html`)

Procure pelos comentários `✏️ EDITE` — cada seção tem um:

- **Hero** — frase principal e texto de apoio
- **Sobre** — apresentação, formação e credenciais
- **Áreas de atuação** — 6 cards (título + descrição)
- **Como funciona** — os 3 passos + destaque do atendimento online
- **Depoimentos** — ⚠️ use apenas relatos reais e autorizados
  (verifique as diretrizes do CFP sobre depoimentos em publicidade)
- **FAQ** — perguntas e respostas
- **Contato** — e-mail, Instagram e horários

### Número do WhatsApp (`script.js`, primeira linha)

```js
const WHATSAPP = "5511999999999" // 55 + DDD + número
```

Todos os botões ("Agendar conversa", botão flutuante e o formulário)
usam esse número automaticamente.

### Cores (`styles.css`, bloco `:root` no topo)

Troque os valores das variáveis `--c-*` para mudar a paleta do site
inteiro de uma vez (fundo, verde sálvia, lilás, rosé…).

### Fotos

As áreas de foto são círculos decorativos com as iniciais "AM" e o
texto "sua foto aqui". Para trocar, substitua o elemento
`.hero-blob` (seção Início) e `.sobre-photo` (seção Sobre) por:

```html
<img src="sua-foto.jpg" alt="Aline Marciano" />
```

### CRP

O número do CRP aparece no cabeçalho, no rodapé e na seção Sobre —
exibição é obrigatória para psicólogas(os) no Brasil.

## Publicar

O site é estático: pode ser hospedado de graça em qualquer um destes:

- **GitHub Pages** — suba os arquivos num repositório e ative Pages
- **Netlify** — arraste a pasta em [app.netlify.com/drop](https://app.netlify.com/drop)
- **Vercel** — `npx vercel` na pasta do projeto
- **Hostinger / GoDaddy** — envie os arquivos por FTP/cPanel

## Observações

- O formulário de contato não tem backend: ele monta a mensagem e
  abre o WhatsApp — perfeito para começar sem custo.
- Nota de segurança (CVV 188) no rodapé: recomendável manter.
