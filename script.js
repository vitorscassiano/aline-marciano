/* ══════════════════════════════════════════════════════════════════
   ✏️ CONFIGURAÇÃO RÁPIDA — edite os dois valores abaixo
   ══════════════════════════════════════════════════════════════════ */

// Número do WhatsApp no formato internacional (só dígitos).
// Ex.: São Paulo (11) 99999-9999  →  "5511999999999"
const WHATSAPP = "5511999999999"

// Mensagem padrão dos botões de agendamento
const MENSAGEM_PADRAO =
  "Olá, Aline! Vim pelo site e gostaria de agendar uma primeira conversa."

/* ─────── Daqui para baixo não é preciso alterar nada ─────── */
;(() => {
  const $ = (sel, ctx = document) => ctx.querySelector(sel)
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)]

  /* Preenche todos os links de WhatsApp da página */
  $$("[data-wa]").forEach((el) => {
    el.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAGEM_PADRAO)}`
    el.target = "_blank"
    el.rel = "noopener"
  })

  /* Sombra do cabeçalho ao rolar a página */
  const header = $(".header")
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10)
  onScroll()
  window.addEventListener("scroll", onScroll, { passive: true })

  /* Menu mobile */
  const burger = $("#burger")
  const nav = $("#nav")

  const closeMenu = () => {
    nav.classList.remove("open")
    burger.classList.remove("open")
    burger.setAttribute("aria-expanded", "false")
    burger.setAttribute("aria-label", "Abrir menu")
  }

  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open")
    burger.classList.toggle("open", open)
    burger.setAttribute("aria-expanded", String(open))
    burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu")
  })

  $$("a", nav).forEach((a) => a.addEventListener("click", closeMenu))
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu()
  })
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu()
  })

  /* Animação suave de entrada dos elementos ao rolar */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 },
  )
  $$(".reveal").forEach((el) => io.observe(el))

  /* Formulário de contato → abre o WhatsApp com a mensagem pronta */
  const form = $("#form-contato")
  const note = $("#form-note")

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = form.nome.value.trim()
    const email = form.email.value.trim()
    const mensagem = form.mensagem.value.trim()

    if (!nome || !mensagem) {
      note.textContent = "Preencha o seu nome e uma mensagem antes de enviar, por favor."
      return
    }

    const texto = `Olá, Aline! Meu nome é ${nome}.${email ? ` Meu e-mail é ${email}.` : ""}\n\n${mensagem}`
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`,
      "_blank",
      "noopener",
    )
    note.textContent = "Mensagem pronta! Basta confirmar o envio no WhatsApp que abrirá."
  })

  /* Ano atual no rodapé */
  $("#ano").textContent = new Date().getFullYear()
})()
