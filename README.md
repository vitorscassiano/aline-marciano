# Site — Alyne Marciano · Neuropsicologia

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

Procure pelos comentários `✏️ EDITE`. Estrutura das seções:

- **Início** — boas-vindas, apresentação e registros (CRP / CRFa)
- **Conheça os atendimentos** — cards por público (Infância e Adolescência /
  Adulto e Idoso); ao clicar, exibem os serviços de cada público
- **O que é Avaliação Neuropsicológica**
- **Infância e Adolescência** — 6 grupos de sinais + chamada para agendar
- **Adulto e Gerontologia** — sinais de alerta, impacto no dia a dia
- **Programa REAB** — como funciona, Fonoaudiologia neurológica,
  orientação a familiares e cuidadores, para quem é indicado
- **Psicoterapia** — infantil (presencial) e adultos (presencial e on-line)
- **Um olhar integrado** e **Sobre Alyne**
- **FAQ** e **Contato** (o formulário inclui o atendimento de interesse)

### Número do WhatsApp (`script.js`, primeira linha)

```js
const WHATSAPP = "5521999999999" // 55 + DDD + número
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
<img src="sua-foto.jpg" alt="Alyne Marciano" />
```

Os cards de público têm áreas `.publico-photo` para as fotos do
espaço infantil e do espaço de gerontologia — coloque uma `<img>` dentro.

### Registros profissionais

CRP 05/38142 e CRFa 1-15495 aparecem no Início, na seção Sobre e no
rodapé — a exibição é obrigatória.

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
