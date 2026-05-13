/* ═══════════════════════════════════════════════════════════════
   MARI MASSAS — script.js
   Versão 1.0 — Código organizado e comentado
   ═══════════════════════════════════════════════════════════════ */

/* ───────────────────────────────────────────────────────────────
   ⚙️  CONFIGURAÇÕES — ALTERE AQUI PARA PERSONALIZAR
   ─────────────────────────────────────────────────────────────── */
const CONFIG = {
  WHATSAPP_NUMBER: "5562984782299",   // Número do WhatsApp (sem + ou espaços)
  LOJA_LAT: -5.3290,                 // Latitude da Mari Massas (5°19'44.3"S)
  LOJA_LNG: -49.0917,                // Longitude da Mari Massas (49°05'30.2"W)
  CUPOM_VALIDO: "MARIFIRST",         // Cupom de desconto
  CUPOM_DESCONTO: 0.10,              // 10% de desconto
  TEMPO_ENTREGA_MIN: 35,             // Tempo estimado de entrega em minutos
};

/* ───────────────────────────────────────────────────────────────
   📦 CARDÁPIO — ALTERE AQUI PARA MUDAR PRODUTOS, PREÇOS E IMAGENS
   
   COMO ADICIONAR UM PRODUTO:
   Copie um bloco { ... } dentro da categoria desejada,
   altere os campos e salve o arquivo.
   
   CAMPO "emoji": o ícone visual do card (pode ser substituído por
   uma URL de imagem em "image" — veja instruções no TUTORIAL.md)
   
   CAMPO "badge": pode ser "top", "promo", "specialty", "popular" ou ""
   ─────────────────────────────────────────────────────────────── */
const CARDAPIO = {

  /* ── MASSAS ── */
  massas: [
    {
      id: "massa-meio",
      nome: "Mary Massa — Meio",
      descricao: "Monte sua massa! Escolha a massa, o molho e os acompanhamentos que quiser.",
      preco: 20.00,
      precoDisplay: "a partir de R$ 20,00",
      emoji: "🍝",
      categoria: "massas",
      badge: "specialty",
      tipo: "massa",
      tamanho: "Meio"
    },
    {
      id: "massa-inteiro",
      nome: "Mary Massa — Inteiro",
      descricao: "Porção inteira da nossa massa artesanal. Escolha a massa, molho e acompanhamentos.",
      preco: 28.00,
      precoDisplay: "R$ 28,00",
      emoji: "🍝",
      categoria: "massas",
      badge: "top",
      tipo: "massa",
      tamanho: "Inteiro"
    },
    {
      id: "massa-meio-camarao",
      nome: "Mary Massa com Camarão — Meio",
      descricao: "Nossa massa especial com camarão fresquinho. Escolha a massa, molho e acompanhamentos.",
      preco: 32.00,
      precoDisplay: "R$ 32,00",
      emoji: "blob:https://web.whatsapp.com/a6f29e78-b8fc-4178-839c-0e1195869817",
      categoria: "massas",
      badge: "promo",
      tipo: "massa",
      tamanho: "Meio com Camarão"
    },
    {
      id: "massa-inteiro-camarao",
      nome: "Mary Massa com Camarão — Inteiro",
      descricao: "Porção inteira da nossa massa premium com camarão. A mais pedida da casa!",
      preco: 43.00,
      precoDisplay: "R$ 43,00",
      emoji: "🍤",
      categoria: "massas",
      badge: "popular",
      tipo: "massa",
      tamanho: "Inteiro com Camarão"
    }
  ],

  /* ── HAMBÚRGUERES ── */
  hamburgueres: [
    {
      id: "x-salada",
      nome: "X-Salada",
      descricao: "Hambúrguer, Mussarela, Alface e Molho Especial da Casa",
      preco: 19.00,
      emoji: "🍔",
      categoria: "hamburgueres",
      badge: "",
      tipo: "burger"
    },
    {
      id: "x-eggs",
      nome: "X-Eggs",
      descricao: "Hambúrguer, Mussarela, Alface, Tomate, Ovo e Molho Especial da Casa",
      preco: 20.00,
      emoji: "🍔",
      categoria: "hamburgueres",
      badge: "popular",
      tipo: "burger"
    },
    {
      id: "x-frango",
      nome: "X-Frango",
      descricao: "Filé de Peito de Frango, Mussarela, Alface, Tomate, Milho Verde e Molho Especial da Casa",
      preco: 21.00,
      emoji: "🍗",
      categoria: "hamburgueres",
      badge: "",
      tipo: "burger"
    },
    {
      id: "x-bacon",
      nome: "X-Bacon",
      descricao: "Hambúrguer, Mussarela, Bacon, Alface, Tomate e Molho Especial da Casa",
      preco: 22.00,
      emoji: "🥓",
      categoria: "hamburgueres",
      badge: "promo",
      tipo: "burger"
    },
    {
      id: "x-tudo",
      nome: "X-Tudo",
      descricao: "Hambúrguer, Mussarela, Presunto, Salsicha, Bacon, Ovo, Batata Palha, Milho Verde, Alface, Tomate e Molho Especial da Casa",
      preco: 25.00,
      emoji: "🍔",
      categoria: "hamburgueres",
      badge: "top",
      tipo: "burger"
    }
  ],

  /* ── BATATAS ── */
  batatas: [
    {
      id: "batata-tradicional",
      nome: "Batata Tradicional",
      descricao: "Porção crocante de batatas fritas tradicionais",
      preco: 15.00,
      emoji: "🍟",
      categoria: "batatas",
      badge: "",
      tipo: "simples"
    },
    {
      id: "batata-queijo-bacon",
      nome: "Batata com Queijo e Bacon",
      descricao: "Batatas fritas cobertas com queijo derretido e bacon crocante",
      preco: 20.00,
      emoji: "🍟",
      categoria: "batatas",
      badge: "popular",
      tipo: "simples"
    }
  ],

  /* ── SALGADOS ── */
  salgados: [
    {
      id: "salgado-unitario",
      nome: "Salgado — Unidade",
      descricao: "Fritos: Coxinha, Bolinha de Queijo, Rizzoli de Carne, Rizzoli de Queijo e Presunto. Assados: Esfiha, Empadinha de Frango, Enroladinho de Queijo, Enroladinho de Salsicha, Americano.",
      preco: 5.00,
      emoji: "🥟",
      categoria: "salgados",
      badge: "",
      tipo: "salgado",
      formatos: [
        { nome: "Por Unidade", preco: 5.00 },
        { nome: "Porção (9 un.)", preco: 12.00 },
        { nome: "Encomenda (Cento)", preco: 85.00 }
      ]
    },
    {
      id: "mini-pizza",
      nome: "Mini Pizza — Unidade",
      descricao: "Sabores: Calabresa, Bacon, Frango com Tomate, Frango com Catupiry, Queijo e Presunto",
      preco: 5.00,
      emoji: "🍕",
      categoria: "salgados",
      badge: "promo",
      tipo: "salgado",
      formatos: [
        { nome: "Por Unidade", preco: 5.00 },
        { nome: "Porção (9 un.)", preco: 12.00 },
        { nome: "Encomenda (Cento)", preco: 85.00 }
      ]
    }
  ]
};

/* ───────────────────────────────────────────────────────────────
   🗺️ TAXA DE ENTREGA POR DISTÂNCIA
   Altere os valores (km e preço) conforme necessário
   ─────────────────────────────────────────────────────────────── */
const TAXAS_ENTREGA = [
  { maxKm: 1,   taxa: 3.00,  msg: "📍 Você está pertinho! Taxa mínima." },
  { maxKm: 2,   taxa: 5.00,  msg: "🛵 Entrega rápida na sua área." },
  { maxKm: 3,   taxa: 7.00,  msg: "🛵 Entrega disponível no seu bairro." },
  { maxKm: 5,   taxa: 10.00, msg: "🗺️ Um pouquinho mais longe, mas chegamos!" },
  { maxKm: 8,   taxa: 15.00, msg: "📦 Entrega expressa até você." },
  { maxKm: 999, taxa: -1,    msg: "😕 Fora da nossa área de entrega." }
];

/* ───────────────────────────────────────────────────────────────
   🎙️ SOCIAL PROOF — Mensagens rotativas
   ─────────────────────────────────────────────────────────────── */
const SOCIAL_PROOF_MSGS = [
  "🍝 Carla acabou de pedir Mary Massa Bolonhesa",
  "🔥 Pedro pediu X-Tudo com bacon extra",
  "⭐ 'Melhor massa da cidade!' — Ana Lima",
  "📦 127 pedidos entregues hoje",
  "🛵 João fez o pedido há 5 min e já saiu!",
  "💬 'Amei a empadinha!' — Fernanda S.",
  "🍔 Carlos pediu X-Bacon agora",
  "🍤 Mariana pediu Massa com Camarão"
];

const LIVE_TICKERS = [
  "🍝 Carla pediu Mary Massa Bolonhesa agora",
  "🔥 Pedro pediu X-Tudo com bacon extra",
  "🛵 João recebeu o pedido em 32 minutos!",
  "⭐ 'Incrível!' — Ana Lima, Nova Marabá",
  "🍤 Mariana pediu Massa com Camarão agora"
];

const REVIEWS = [
  { nome: "Ana Lima", texto: "Melhor massa da cidade! Peço toda semana e nunca decepciona.", stars: 5, cor: "#E91E63" },
  { nome: "Carlos M.", texto: "O X-Tudo é perfeito. Chegou rapidinho e ainda quente!", stars: 5, cor: "#1565C0" },
  { nome: "Fernanda S.", texto: "As empadinhas são incríveis. Encomendei 100 pra festa!", stars: 5, cor: "#2E7D32" },
  { nome: "Rafael P.", texto: "Massa com camarão é coisa de outro mundo. Recomendo demais!", stars: 5, cor: "#F57C00" },
  { nome: "Juliana T.", texto: "App fácil de usar, pedido chegou perfeito. 10 estrelas!", stars: 5, cor: "#7B1FA2" },
  { nome: "Marcos A.", texto: "Mini pizza de frango com catupiry é viciante. Peço sempre!", stars: 5, cor: "#00695C" }
];

/* ═══════════════════════════════════════════════════════════════
   🔧 ESTADO DO APLICATIVO
   ═══════════════════════════════════════════════════════════════ */
let cart = [];
let currentProduct = null;
let currentQty = 1;
let currentExtras = [];
let currentMassaType = "";
let currentMolho = "";
let currentAcomps = [];
let currentSalgadoType = "";
let currentSalgadoFormat = null;
let couponApplied = false;
let deliveryFee = 0;
let deliveryFeeSet = false;
let geoCoords = null;
let trackerInterval = null;
let timerInterval = null;
let currentStep = 1;

/* ═══════════════════════════════════════════════════════════════
   🚀 INICIALIZAÇÃO
   ═══════════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initParticles();
  renderAllProducts();
  renderReviews();
  initEventListeners();
  initScrollProgress();
  initNavbarScroll();
  initLiveTicker();
  initSocialProof();
  initOrdersCounter();
  hideSplash();
  loadHistory();
});

/* ───────────────────────────────────────────────────────────────
   SPLASH — esconde após 3s
   ─────────────────────────────────────────────────────────────── */
function hideSplash() {
  setTimeout(() => {
    const splash = document.getElementById("splash");
    if (splash) {
      splash.style.opacity = "0";
      splash.style.pointerEvents = "none";
      setTimeout(() => splash.remove(), 600);
    }
  }, 3000);
}

/* ───────────────────────────────────────────────────────────────
   TEMA SOL / LUA
   ─────────────────────────────────────────────────────────────── */
function initTheme() {
  const saved = localStorage.getItem("mariMassasTheme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (prefersDark ? "dark" : "light");
  setTheme(theme);
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("mariMassasTheme", theme);
  const icon = document.getElementById("themeIcon");
  if (icon) icon.textContent = theme === "dark" ? "🌙" : "☀️";
}

document.getElementById("themeToggle").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const icon = document.getElementById("themeIcon");
  icon.style.transform = "rotate(360deg)";
  icon.style.transition = "transform 0.4s ease";
  setTimeout(() => { icon.style.transform = ""; icon.style.transition = ""; }, 400);
  setTheme(current === "dark" ? "light" : "dark");
});

/* ───────────────────────────────────────────────────────────────
   PARTÍCULAS DO HERO
   ─────────────────────────────────────────────────────────────── */
function initParticles() {
  const container = document.getElementById("heroParticles");
  if (!container) return;
  for (let i = 0; i < 18; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.top = Math.random() * 100 + "%";
    p.style.animationDuration = (6 + Math.random() * 8) + "s";
    p.style.animationDelay = (Math.random() * 6) + "s";
    p.style.width = p.style.height = (2 + Math.random() * 4) + "px";
    container.appendChild(p);
  }
}

/* ───────────────────────────────────────────────────────────────
   SCROLL PROGRESS
   ─────────────────────────────────────────────────────────────── */
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  window.addEventListener("scroll", () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = pct + "%";
  }, { passive: true });
}

/* ───────────────────────────────────────────────────────────────
   NAVBAR SCROLL
   ─────────────────────────────────────────────────────────────── */
function initNavbarScroll() {
  const nav = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 10);
  }, { passive: true });
}

/* ───────────────────────────────────────────────────────────────
   LIVE TICKER
   ─────────────────────────────────────────────────────────────── */
function initLiveTicker() {
  let idx = 0;
  const el = document.getElementById("tickerText");
  setInterval(() => {
    idx = (idx + 1) % LIVE_TICKERS.length;
    el.style.opacity = "0";
    setTimeout(() => {
      el.textContent = LIVE_TICKERS[idx];
      el.style.opacity = "1";
    }, 300);
  }, 5000);
}

/* ───────────────────────────────────────────────────────────────
   SOCIAL PROOF
   ─────────────────────────────────────────────────────────────── */
function initSocialProof() {
  let idx = 0;
  const el = document.getElementById("socialProof");
  const show = () => {
    el.textContent = SOCIAL_PROOF_MSGS[idx % SOCIAL_PROOF_MSGS.length];
    el.classList.add("visible");
    setTimeout(() => el.classList.remove("visible"), 4000);
    idx++;
  };
  setTimeout(() => { show(); setInterval(show, 12000); }, 6000);
}

/* ───────────────────────────────────────────────────────────────
   CONTADOR DE PEDIDOS (simulado)
   ─────────────────────────────────────────────────────────────── */
function initOrdersCounter() {
  const el = document.getElementById("ordersCount");
  if (!el) return;
  let count = 100 + Math.floor(Math.random() * 50);
  el.textContent = count;
  setInterval(() => {
    if (Math.random() > 0.7) { count++; el.textContent = count; }
  }, 15000);
}

/* ═══════════════════════════════════════════════════════════════
   🍽️  RENDERIZAÇÃO DOS PRODUTOS
   ═══════════════════════════════════════════════════════════════ */
function renderAllProducts() {
  renderCategory("massas", "grid-massas", "massa-visual");
  renderCategory("hamburgueres", "grid-hamburgueres", "burger-visual");
  renderCategory("batatas", "grid-batatas", "batata-visual");
  renderCategory("salgados", "grid-salgados", "salgado-visual");
}

function renderCategory(cat, gridId, visualClass) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = "";
  const items = CARDAPIO[cat] || [];
  items.forEach((item, i) => {
    const card = createProductCard(item, visualClass, i);
    grid.appendChild(card);
  });
}

/* ─── CRIAR CARD DE PRODUTO ─── */
function createProductCard(item, visualClass, delay) {
  const div = document.createElement("div");
  div.className = `product-card${item.badge === "specialty" ? " specialty-card" : ""}`;
  div.style.animationDelay = (delay * 0.08) + "s";

  /* Badge label */
  const badgeMap = {
    top: { cls: "badge-top", txt: "🔥 Top" },
    promo: { cls: "badge-promo", txt: "🏷️ Promoção" },
    specialty: { cls: "badge-specialty", txt: "⭐ Especialidade" },
    popular: { cls: "badge-popular", txt: "★ Mais pedido" }
  };
  const badge = item.badge && badgeMap[item.badge]
    ? `<span class="card-badge-overlay ${badgeMap[item.badge].cls}">${badgeMap[item.badge].txt}</span>`
    : "";

  /* Preço display */
  const precoDisplay = item.precoDisplay || `R$ ${item.preco.toFixed(2).replace(".", ",")}`;

  div.innerHTML = `
    <div class="card-visual ${visualClass}">
      <span class="card-emoji-main">${item.emoji}</span>
      ${badge}
    </div>
    <div class="card-info">
      <p class="card-name">${item.nome}</p>
      <p class="card-ingredients">${item.descricao}</p>
      <div class="card-bottom">
        <span class="card-price">
          ${item.precoDisplay ? `<span class="card-price-from">a partir de</span>` : ""}
          ${precoDisplay}
        </span>
        <button class="card-add-btn" aria-label="Adicionar ${item.nome}">+</button>
      </div>
    </div>
  `;

  div.querySelector(".card-add-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    openProductModal(item);
  });
  div.addEventListener("click", () => openProductModal(item));
  return div;
}

/* ─── RENDERIZAR AVALIAÇÕES ─── */
function renderReviews() {
  const container = document.getElementById("reviewsCarousel");
  if (!container) return;
  container.innerHTML = "";
  REVIEWS.forEach(r => {
    const initials = r.nome.split(" ").map(w => w[0]).slice(0, 2).join("");
    const stars = "★".repeat(r.stars) + "☆".repeat(5 - r.stars);
    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
      <div class="review-top">
        <div class="review-avatar" style="background:${r.cor}">${initials}</div>
        <div class="review-meta">
          <p class="review-name">${r.nome}</p>
          <p class="review-stars">${stars}</p>
        </div>
      </div>
      <p class="review-text">"${r.texto}"</p>
    `;
    container.appendChild(card);
  });
}

/* ═══════════════════════════════════════════════════════════════
   🛒 MODAL DE PRODUTO
   ═══════════════════════════════════════════════════════════════ */
function openProductModal(item) {
  currentProduct = item;
  currentQty = 1;
  currentExtras = [];
  currentMassaType = "";
  currentMolho = "";
  currentAcomps = [];
  currentSalgadoType = "";
  currentSalgadoFormat = null;

  /* Preencher modal */
  document.getElementById("modalTitle").textContent = item.nome;
  document.getElementById("modalDesc").textContent = item.descricao;
  document.getElementById("modalPrice").textContent =
    item.precoDisplay || `R$ ${item.preco.toFixed(2).replace(".", ",")}`;
  document.getElementById("obsInput").value = "";
  document.getElementById("qtyDisplay").textContent = "1";

  /* Visual */
  const visualClassMap = {
    massas: "massa-visual", hamburgueres: "burger-visual",
    batatas: "batata-visual", salgados: "salgado-visual"
  };
  const modalVis = document.getElementById("modalVisual");
  modalVis.className = `modal-visual ${visualClassMap[item.categoria] || ""}`;
  modalVis.innerHTML = `<span style="font-size:5rem">${item.emoji}</span>`;

  /* Esconder todas as opções */
  ["massaOptions", "burgerOptions", "salgadoOptions"].forEach(id => {
    document.getElementById(id).style.display = "none";
  });

  /* Mostrar opções corretas */
  if (item.tipo === "massa") {
    document.getElementById("massaOptions").style.display = "block";
    buildMassaOptions();
  } else if (item.tipo === "burger") {
    document.getElementById("burgerOptions").style.display = "block";
    buildBurgerExtras();
  } else if (item.tipo === "salgado") {
    document.getElementById("salgadoOptions").style.display = "block";
    buildSalgadoOptions(item);
  }

  updateModalTotal();

  /* Abrir */
  document.getElementById("modalOverlay").classList.add("open");
  document.getElementById("productModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.getElementById("productModal").classList.remove("open");
  document.body.style.overflow = "";
}

/* ─── OPÇÕES DE MASSA ─── */
function buildMassaOptions() {
  const massas = ["Penne", "Espaguete", "Talharim", "Parafuso"];
  const molhos = ["Branco", "4 Queijos", "Bolonhesa", "Sugo"];
  const acomps = ["Calabresa", "Peito de frango", "Bacon", "Presunto", "Ervilha", "Milho", "Uva passa", "Azeitona", "Pimenta calabresa", "Orégano", "Alho frito", "Camarão e palmito"];

  const massaGrid = document.getElementById("massaTypeGrid");
  massaGrid.innerHTML = "";
  massas.forEach(m => {
    const chip = document.createElement("button");
    chip.className = "option-chip";
    chip.textContent = m;
    chip.addEventListener("click", () => {
      massaGrid.querySelectorAll(".option-chip").forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      currentMassaType = m;
    });
    massaGrid.appendChild(chip);
  });

  const molhoGrid = document.getElementById("molhoGrid");
  molhoGrid.innerHTML = "";
  molhos.forEach(m => {
    const chip = document.createElement("button");
    chip.className = "option-chip";
    chip.textContent = m;
    chip.addEventListener("click", () => {
      molhoGrid.querySelectorAll(".option-chip").forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      currentMolho = m;
    });
    molhoGrid.appendChild(chip);
  });

  /* Tamanho pré-selecionado pelo produto */
  const tamanhoGrid = document.getElementById("tamanhoGrid");
  tamanhoGrid.innerHTML = "";
  const tamanho = currentProduct.tamanho || "";
  const chip = document.createElement("button");
  chip.className = "option-chip selected";
  chip.textContent = tamanho;
  tamanhoGrid.appendChild(chip);

  const acompGrid = document.getElementById("acompGrid");
  acompGrid.innerHTML = "";
  acomps.forEach(a => {
    const chip = document.createElement("button");
    chip.className = "acomp-chip";
    chip.textContent = a;
    chip.addEventListener("click", () => {
      chip.classList.toggle("selected");
      if (chip.classList.contains("selected")) {
        currentAcomps.push(a);
      } else {
        currentAcomps = currentAcomps.filter(x => x !== a);
      }
    });
    acompGrid.appendChild(chip);
  });
}

/* ─── EXTRAS DE HAMBÚRGUER ─── */
function buildBurgerExtras() {
  const extras = [
    { nome: "Bacon extra", preco: 3.00 },
    { nome: "Queijo extra", preco: 2.00 },
    { nome: "Ovo extra", preco: 2.00 },
    { nome: "Molho especial extra", preco: 1.50 }
  ];
  const list = document.getElementById("extrasList");
  list.innerHTML = "";
  extras.forEach(ex => {
    const div = document.createElement("div");
    div.className = "extra-item";
    div.innerHTML = `
      <span class="extra-name">${ex.nome}</span>
      <span class="extra-price">+R$ ${ex.preco.toFixed(2).replace(".", ",")}</span>
      <div class="extra-check">✓</div>
    `;
    div.addEventListener("click", () => {
      div.classList.toggle("selected");
      if (div.classList.contains("selected")) {
        currentExtras.push(ex);
      } else {
        currentExtras = currentExtras.filter(e => e.nome !== ex.nome);
      }
      updateModalTotal();
    });
    list.appendChild(div);
  });
}

/* ─── OPÇÕES DE SALGADO ─── */
function buildSalgadoOptions(item) {
  const tiposFritos = ["Coxinha", "Bolinha de Queijo", "Rizzoli de Carne", "Rizzoli de Queijo e Presunto"];
  const tiposAssados = ["Esfiha de Carne", "Empadinha de Frango", "Enroladinho de Queijo", "Enroladinho de Salsicha", "Americano com Queijo e Presunto"];
  const tiposPizza = ["Calabresa", "Bacon", "Frango com Tomate", "Frango com Catupiry", "Queijo e Presunto"];

  const tipos = item.id === "mini-pizza" ? tiposPizza : [...tiposFritos, ...tiposAssados];
  const typeGrid = document.getElementById("salgadoTypeGrid");
  typeGrid.innerHTML = "";
  tipos.forEach(t => {
    const chip = document.createElement("button");
    chip.className = "option-chip";
    chip.textContent = t;
    chip.addEventListener("click", () => {
      typeGrid.querySelectorAll(".option-chip").forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      currentSalgadoType = t;
    });
    typeGrid.appendChild(chip);
  });

  const sizeGrid = document.getElementById("salgadoSizeGrid");
  sizeGrid.innerHTML = "";
  const formatos = item.formatos || [{ nome: "Unidade", preco: item.preco }];
  formatos.forEach(f => {
    const chip = document.createElement("button");
    chip.className = "option-chip";
    chip.textContent = `${f.nome} — R$ ${f.preco.toFixed(2).replace(".", ",")}`;
    chip.addEventListener("click", () => {
      sizeGrid.querySelectorAll(".option-chip").forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      currentSalgadoFormat = f;
      updateModalTotal();
    });
    sizeGrid.appendChild(chip);
  });
}

/* ─── TOTAL DO MODAL ─── */
function updateModalTotal() {
  if (!currentProduct) return;
  let base = currentProduct.preco;
  if (currentSalgadoFormat) base = currentSalgadoFormat.preco;
  const extrasTotal = currentExtras.reduce((s, e) => s + e.preco, 0);
  const total = (base + extrasTotal) * currentQty;
  const el = document.getElementById("modalItemTotal");
  if (el) el.textContent = "R$ " + total.toFixed(2).replace(".", ",");
}

/* ─── QUANTIDADE ─── */
document.getElementById("qtyMinus").addEventListener("click", () => {
  if (currentQty > 1) { currentQty--; document.getElementById("qtyDisplay").textContent = currentQty; updateModalTotal(); }
});
document.getElementById("qtyPlus").addEventListener("click", () => {
  currentQty++; document.getElementById("qtyDisplay").textContent = currentQty; updateModalTotal();
});

/* ─── ADICIONAR AO CARRINHO ─── */
document.getElementById("addToCartBtn").addEventListener("click", () => {
  if (!currentProduct) return;

  /* Validação para massas */
  if (currentProduct.tipo === "massa") {
    if (!currentMassaType) { showToast("⚠️ Escolha o tipo de massa!"); return; }
    if (!currentMolho) { showToast("⚠️ Escolha o molho!"); return; }
  }

  /* Validação para salgados */
  if (currentProduct.tipo === "salgado") {
    if (!currentSalgadoType) { showToast("⚠️ Escolha o tipo de salgado!"); return; }
  }

  const preco = currentSalgadoFormat ? currentSalgadoFormat.preco : currentProduct.preco;
  const extrasTotal = currentExtras.reduce((s, e) => s + e.preco, 0);

  /* Montar detalhes */
  let detalhes = [];
  if (currentMassaType) detalhes.push(`Massa: ${currentMassaType}`);
  if (currentMolho) detalhes.push(`Molho: ${currentMolho}`);
  if (currentAcomps.length) detalhes.push(`Acomp: ${currentAcomps.join(", ")}`);
  if (currentExtras.length) detalhes.push(currentExtras.map(e => e.nome).join(", "));
  if (currentSalgadoType) detalhes.push(currentSalgadoType);
  if (currentSalgadoFormat && currentSalgadoFormat.nome !== "Por Unidade") detalhes.push(currentSalgadoFormat.nome);
  const obs = document.getElementById("obsInput").value.trim();
  if (obs) detalhes.push(`Obs: ${obs}`);

  const cartItem = {
    id: Date.now(),
    productId: currentProduct.id,
    nome: currentProduct.nome,
    emoji: currentProduct.emoji,
    preco: preco + extrasTotal,
    qty: currentQty,
    detalhes: detalhes.join(" · "),
    obs: obs,
    categoria: currentProduct.categoria
  };

  cart.push(cartItem);
  closeProductModal();
  updateCartUI();
  animateCartBadge();

  /* Upsell */
  setTimeout(() => showUpsell(currentProduct), 1500);
});

/* ═══════════════════════════════════════════════════════════════
   🛒 CARRINHO
   ═══════════════════════════════════════════════════════════════ */
function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.preco * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  /* Badges */
  const badge = document.getElementById("cartBadge");
  const bnavBadge = document.getElementById("bnavBadge");
  badge.textContent = count;
  bnavBadge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
  bnavBadge.style.display = count > 0 ? "flex" : "none";

  /* Corpo do carrinho */
  const cartItems = document.getElementById("cartItems");
  const cartEmpty = document.getElementById("cartEmpty");
  const cartFooter = document.getElementById("cartFooter");

  if (cart.length === 0) {
    cartEmpty.style.display = "block";
    cartItems.innerHTML = "";
    cartFooter.style.display = "none";
    return;
  }

  cartEmpty.style.display = "none";
  cartFooter.style.display = "block";
  cartItems.innerHTML = "";

  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span class="cart-item-emoji">${item.emoji}</span>
      <div class="cart-item-info">
        <p class="cart-item-name">${item.nome}</p>
        ${item.detalhes ? `<p class="cart-item-details">${item.detalhes}</p>` : ""}
        <div class="cart-item-qty">
          <button class="cart-qty-btn" data-id="${item.id}" data-action="minus">−</button>
          <span class="cart-qty-num">${item.qty}</span>
          <button class="cart-qty-btn" data-id="${item.id}" data-action="plus">+</button>
          <button class="cart-qty-btn" data-id="${item.id}" data-action="remove" style="margin-left:4px;font-size:0.75rem">🗑</button>
        </div>
      </div>
      <span class="cart-item-price">R$ ${(item.preco * item.qty).toFixed(2).replace(".", ",")}</span>
    `;
    cartItems.appendChild(div);
  });

  /* Botões de quantidade no carrinho */
  cartItems.querySelectorAll(".cart-qty-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      const action = btn.dataset.action;
      const idx = cart.findIndex(i => i.id === id);
      if (idx === -1) return;
      if (action === "plus") cart[idx].qty++;
      else if (action === "minus") {
        cart[idx].qty--;
        if (cart[idx].qty <= 0) cart.splice(idx, 1);
      } else if (action === "remove") {
        cart.splice(idx, 1);
      }
      updateCartUI();
      updateCartTotals();
    });
  });

  updateCartTotals();
}

function updateCartTotals() {
  const subtotal = cart.reduce((s, i) => s + i.preco * i.qty, 0);
  const discount = couponApplied ? subtotal * CONFIG.CUPOM_DESCONTO : 0;
  const delivery = deliveryFeeSet ? deliveryFee : 0;
  const total = subtotal - discount + delivery;

  document.getElementById("cartSubtotal").textContent = "R$ " + subtotal.toFixed(2).replace(".", ",");
  document.getElementById("cartDiscount").textContent = "- R$ " + discount.toFixed(2).replace(".", ",");
  document.getElementById("cartDelivery").textContent = "R$ " + delivery.toFixed(2).replace(".", ",");
  document.getElementById("cartTotal").textContent = "R$ " + total.toFixed(2).replace(".", ",");

  document.getElementById("discountRow").style.display = couponApplied ? "flex" : "none";
  document.getElementById("deliveryRow").style.display = deliveryFeeSet ? "flex" : "none";
}

function animateCartBadge() {
  const badge = document.getElementById("cartBadge");
  badge.style.animation = "none";
  setTimeout(() => badge.style.animation = "badgePop 0.3s ease", 10);
}

function openCart() {
  document.getElementById("cartOverlay").classList.add("open");
  document.getElementById("cartDrawer").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartOverlay").classList.remove("open");
  document.getElementById("cartDrawer").classList.remove("open");
  document.body.style.overflow = "";
}

/* ═══════════════════════════════════════════════════════════════
   🎁 UPSELL
   ═══════════════════════════════════════════════════════════════ */
let upsellPendingItem = null;

function showUpsell(item) {
  let title = "", desc = "", upsellProduct = null;

  if (item.categoria === "hamburgueres") {
    const batata = CARDAPIO.batatas.find(b => b.id === "batata-queijo-bacon");
    const jaTemBatata = cart.some(c => c.productId === "batata-queijo-bacon");
    if (!batata || jaTemBatata) return;
    upsellProduct = batata;
    title = "🔥 Complete seu combo!";
    desc = `Adicione Batata com Queijo e Bacon por apenas R$ ${batata.preco.toFixed(2).replace(".", ",")} e economize R$ 4,00!`;
  } else if (item.tipo === "massa") {
    const jaTemSalgado = cart.some(c => c.categoria === "salgados");
    if (jaTemSalgado) return;
    title = "🥟 Que tal uma porção de salgados?";
    desc = "9 salgados variados por apenas R$ 12,00!";
    upsellProduct = { ...CARDAPIO.salgados[0], preco: 12.00, nome: "Porção de Salgados (9 un.)" };
  } else return;

  upsellPendingItem = upsellProduct;
  document.getElementById("upsellTitle").textContent = title;
  document.getElementById("upsellDesc").textContent = desc;
  document.getElementById("upsellOverlay").classList.add("open");
  document.getElementById("upsellSheet").classList.add("open");
}

function closeUpsell() {
  document.getElementById("upsellOverlay").classList.remove("open");
  document.getElementById("upsellSheet").classList.remove("open");
}

document.getElementById("upsellYes").addEventListener("click", () => {
  if (upsellPendingItem) {
    cart.push({
      id: Date.now(),
      productId: upsellPendingItem.id,
      nome: upsellPendingItem.nome,
      emoji: upsellPendingItem.emoji,
      preco: upsellPendingItem.preco,
      qty: 1,
      detalhes: "Adicionado via combo",
      obs: "",
      categoria: upsellPendingItem.categoria
    });
    updateCartUI();
    animateCartBadge();
    showToast("✅ Adicionado ao carrinho!");
  }
  closeUpsell();
});

document.getElementById("upsellNo").addEventListener("click", closeUpsell);
document.getElementById("upsellOverlay").addEventListener("click", closeUpsell);

/* ═══════════════════════════════════════════════════════════════
   📋 CHECKOUT — FLUXO POR ETAPAS
   ═══════════════════════════════════════════════════════════════ */
function goCheckout() {
  if (cart.length === 0) {
    showToast("🛒 Adicione itens ao carrinho primeiro!");
    return;
  }
  closeCart();
  document.getElementById("menu").style.display = "none";
  document.getElementById("reviews").style.display = "none";
  document.querySelector(".search-section").style.display = "none";
  document.querySelector(".categories-section").style.display = "none";
  document.querySelector(".hero").style.display = "none";
  document.getElementById("checkout").style.display = "block";
  document.getElementById("trackerSection").style.display = "none";
  goToStep(1);
  window.scrollTo({ top: 0, behavior: "smooth" });
  updateBnavActive("bnav-order");
}

function goToStep(n) {
  currentStep = n;
  [1,2,3,4].forEach(i => {
    document.getElementById("step" + i).style.display = i === n ? "block" : "none";
  });
  updateStepper(n);
  if (n === 1) renderCheckoutItems();
  if (n === 4) renderConfirmSummary();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateStepper(active) {
  document.querySelectorAll(".step").forEach((el, i) => {
    const num = i + 1;
    el.classList.remove("active", "done");
    if (num < active) el.classList.add("done");
    if (num === active) el.classList.add("active");
  });
  document.querySelectorAll(".step-line").forEach((el, i) => {
    el.classList.toggle("done", i + 1 < active);
  });
}

/* ─── STEP 1 — ITENS DO PEDIDO ─── */
function renderCheckoutItems() {
  const container = document.getElementById("checkoutItems");
  container.innerHTML = "";
  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "checkout-item";
    div.innerHTML = `
      <div class="checkout-item-info">
        <p class="checkout-item-name">${item.emoji} ${item.nome}</p>
        ${item.detalhes ? `<p class="checkout-item-details">${item.detalhes}</p>` : ""}
        <div class="checkout-item-qty">
          <button class="qty-mini-btn" data-id="${item.id}" data-action="minus">−</button>
          <span class="qty-mini-num">${item.qty}</span>
          <button class="qty-mini-btn" data-id="${item.id}" data-action="plus">+</button>
          <button class="qty-mini-btn" data-id="${item.id}" data-action="remove" style="margin-left:4px;font-size:0.7rem">🗑</button>
        </div>
      </div>
      <span class="checkout-item-price">R$ ${(item.preco * item.qty).toFixed(2).replace(".", ",")}</span>
    `;
    container.appendChild(div);
  });

  container.querySelectorAll(".qty-mini-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      const action = btn.dataset.action;
      const idx = cart.findIndex(i => i.id === id);
      if (idx === -1) return;
      if (action === "plus") cart[idx].qty++;
      else if (action === "minus") { cart[idx].qty--; if (cart[idx].qty <= 0) cart.splice(idx, 1); }
      else if (action === "remove") cart.splice(idx, 1);
      updateCartUI();
      renderCheckoutItems();
    });
  });
}

/* ─── CUPOM ─── */
document.getElementById("couponBtn").addEventListener("click", () => {
  const val = document.getElementById("couponInput").value.trim().toUpperCase();
  const msg = document.getElementById("couponMsg");
  if (val === CONFIG.CUPOM_VALIDO) {
    couponApplied = true;
    msg.textContent = "✅ Cupom aplicado! 10% de desconto.";
    msg.className = "coupon-msg coupon-ok";
    updateCartTotals();
  } else {
    couponApplied = false;
    msg.textContent = val ? "❌ Cupom inválido." : "Digite um cupom válido.";
    msg.className = "coupon-msg coupon-err";
    updateCartTotals();
  }
});

/* ─── STEP 2 — ENDEREÇO E GEOLOCALIZAÇÃO ─── */
function validateAndGoStep3() {
  const name = document.getElementById("fieldName").value.trim();
  const street = document.getElementById("fieldStreet").value.trim();
  const neighborhood = document.getElementById("fieldNeighborhood").value.trim();
  if (!name) { showToast("⚠️ Preencha seu nome!"); return; }
  if (!street) { showToast("⚠️ Preencha a rua e número!"); return; }
  if (!neighborhood) { showToast("⚠️ Preencha o bairro!"); return; }
  goToStep(3);
}

/* GEOLOCALIZAÇÃO + CÁLCULO DE TAXA */
document.getElementById("geoBtn").addEventListener("click", () => {
  const btn = document.getElementById("geoBtn");
  const result = document.getElementById("geoResult");
  btn.disabled = true;
  btn.textContent = "📡 Detectando localização…";
  result.style.display = "none";

  if (!navigator.geolocation) {
    result.style.display = "block";
    result.innerHTML = `<div class="geo-fail">Seu navegador não suporta geolocalização. Preencha o endereço manualmente.</div>`;
    btn.disabled = false;
    btn.textContent = "Detectar localização";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      geoCoords = { lat, lng };

      const distKm = haversineKm(CONFIG.LOJA_LAT, CONFIG.LOJA_LNG, lat, lng);
      const feeInfo = calcDeliveryFee(distKm);
      deliveryFee = feeInfo.taxa;
      deliveryFeeSet = feeInfo.taxa >= 0;

      const mapsLink = `https://www.google.com/maps/dir/?api=1&origin=${CONFIG.LOJA_LAT},${CONFIG.LOJA_LNG}&destination=${lat},${lng}`;

      result.style.display = "block";

      if (feeInfo.taxa === -1) {
        result.innerHTML = `
          <div class="geo-fail">
            😕 Você está a ${distKm.toFixed(1)} km da loja — fora da nossa área de entrega no momento.<br>
            <a href="https://wa.me/${CONFIG.WHATSAPP_NUMBER}" target="_blank" style="color:var(--primary);font-weight:700;text-decoration:underline">Entre em contato pelo WhatsApp</a>
          </div>`;
        deliveryFeeSet = false;
      } else {
        result.innerHTML = `
          <div class="geo-success">
            <p>✅ <strong>Localização capturada!</strong></p>
            <p>📏 Distância: ${distKm.toFixed(1)} km da loja</p>
            <p>${feeInfo.msg}</p>
            <a href="${mapsLink}" target="_blank" class="geo-maps-link">🗺️ Ver rota no Google Maps</a>
          </div>`;
      }

      /* Mostrar taxa no checkout */
      const feeCard = document.getElementById("deliveryFeeCard");
      if (deliveryFeeSet) {
        document.getElementById("deliveryFeeDisplay").textContent = `R$ ${deliveryFee.toFixed(2).replace(".", ",")}`;
        document.getElementById("deliveryFeeMsg").textContent = feeInfo.msg;
        feeCard.style.display = "block";
      } else {
        feeCard.style.display = "none";
      }

      updateCartTotals();
      btn.disabled = false;
      btn.textContent = "📍 Localização detectada ✓";
    },
    (err) => {
      result.style.display = "block";
      result.innerHTML = `<div class="geo-fail">Não conseguimos sua localização. Preencha o endereço manualmente.<br><small>${err.message}</small></div>`;
      btn.disabled = false;
      btn.textContent = "Tentar novamente";
    },
    { timeout: 10000, enableHighAccuracy: true }
  );
});

/* ─── FÓRMULA HAVERSINE — distância entre dois pontos GPS ─── */
function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat/2) * Math.sin(dLat/2)
    + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2))
    * Math.sin(dLon/2) * Math.sin(dLon/2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}
function toRad(deg) { return deg * Math.PI / 180; }

/* ─── CALCULAR TAXA ─── */
function calcDeliveryFee(km) {
  for (const faixa of TAXAS_ENTREGA) {
    if (km <= faixa.maxKm) return faixa;
  }
  return TAXAS_ENTREGA[TAXAS_ENTREGA.length - 1];
}

/* ─── STEP 3 — PAGAMENTO ─── */
function validateAndGoStep4() {
  const selected = document.querySelector("input[name='payment']:checked");
  if (!selected) { showToast("⚠️ Escolha a forma de pagamento!"); return; }
  goToStep(4);
}

document.querySelectorAll("input[name='payment']").forEach(radio => {
  radio.addEventListener("change", () => {
    const val = radio.value;
    document.getElementById("pixInfo").style.display = val === "pix" ? "block" : "none";
    document.getElementById("changeField").style.display = val === "dinheiro" ? "block" : "none";

    /* Atualizar visual dos cards */
    document.querySelectorAll(".payment-opt").forEach(opt => {
      const inp = opt.querySelector("input");
      opt.querySelector(".payment-card").style.borderColor = inp.checked ? "var(--primary)" : "";
    });
  });
});

/* ─── STEP 4 — RESUMO FINAL ─── */
function renderConfirmSummary() {
  const name = document.getElementById("fieldName").value.trim();
  const street = document.getElementById("fieldStreet").value.trim();
  const neighborhood = document.getElementById("fieldNeighborhood").value.trim();
  const complement = document.getElementById("fieldComplement").value.trim();
  const paymentEl = document.querySelector("input[name='payment']:checked");
  const payment = paymentEl ? paymentEl.value : "—";
  const change = document.getElementById("fieldChange").value;

  const subtotal = cart.reduce((s, i) => s + i.preco * i.qty, 0);
  const discount = couponApplied ? subtotal * CONFIG.CUPOM_DESCONTO : 0;
  const delivery = deliveryFeeSet ? deliveryFee : 0;
  const total = subtotal - discount + delivery;

  const paymentMap = { pix: "Pix", dinheiro: "Dinheiro", cartao: "Cartão na maquininha" };

  let itemsHtml = cart.map(item => `
    <div class="confirm-item">
      <span class="confirm-item-name">${item.emoji} ${item.nome} × ${item.qty}${item.detalhes ? `<br><small style="color:var(--text-muted)">${item.detalhes}</small>` : ""}</span>
      <span class="confirm-item-price">R$ ${(item.preco * item.qty).toFixed(2).replace(".", ",")}</span>
    </div>
  `).join("");

  const addressLine = [street, neighborhood, complement].filter(Boolean).join(", ");

  let geoLine = "Não compartilhada";
  if (geoCoords) {
    geoLine = `<a href="https://maps.google.com/?q=${geoCoords.lat},${geoCoords.lng}" target="_blank" style="color:var(--primary)">Ver no mapa</a>`;
  }

  document.getElementById("confirmSummary").innerHTML = `
    <div class="confirm-section">
      <p class="confirm-label">Cliente</p>
      <p class="confirm-value">${name}</p>
    </div>
    <div class="confirm-section">
      <p class="confirm-label">Endereço</p>
      <p class="confirm-value">${addressLine}</p>
      <p class="confirm-value">📍 GPS: ${geoLine}</p>
    </div>
    <div class="confirm-section">
      <p class="confirm-label">Itens do pedido</p>
      ${itemsHtml}
    </div>
    <div class="confirm-section">
      <p class="confirm-label">Pagamento</p>
      <p class="confirm-value">${paymentMap[payment] || payment}</p>
      ${payment === "dinheiro" && change ? `<p class="confirm-value">Troco para: R$ ${parseFloat(change).toFixed(2).replace(".", ",")}</p>` : ""}
    </div>
    <div class="confirm-section">
      <div class="confirm-total-row">
        <span class="confirm-total-label">Subtotal</span>
        <span>R$ ${subtotal.toFixed(2).replace(".", ",")}</span>
      </div>
      ${couponApplied ? `<div class="confirm-total-row"><span>🏷️ Cupom</span><span style="color:var(--success)">- R$ ${discount.toFixed(2).replace(".", ",")}</span></div>` : ""}
      ${deliveryFeeSet ? `<div class="confirm-total-row"><span>🛵 Entrega</span><span>R$ ${delivery.toFixed(2).replace(".", ",")}</span></div>` : ""}
      <div class="confirm-total-row">
        <span class="confirm-total-label">TOTAL</span>
        <span class="confirm-total-val">R$ ${total.toFixed(2).replace(".", ",")}</span>
      </div>
    </div>
  `;
}

/* ─── ENVIAR PEDIDO VIA WHATSAPP ─── */
document.getElementById("sendBtn").addEventListener("click", sendOrder);

function sendOrder() {
  const name = document.getElementById("fieldName").value.trim();
  const street = document.getElementById("fieldStreet").value.trim();
  const neighborhood = document.getElementById("fieldNeighborhood").value.trim();
  const complement = document.getElementById("fieldComplement").value.trim();
  const paymentEl = document.querySelector("input[name='payment']:checked");
  const payment = paymentEl ? paymentEl.value : "";
  const change = document.getElementById("fieldChange").value;

  const subtotal = cart.reduce((s, i) => s + i.preco * i.qty, 0);
  const discount = couponApplied ? subtotal * CONFIG.CUPOM_DESCONTO : 0;
  const delivery = deliveryFeeSet ? deliveryFee : 0;
  const total = subtotal - discount + delivery;

  const paymentMap = { pix: "Pix 💸", dinheiro: "Dinheiro 💵", cartao: "Cartão na maquininha 💳" };

  const itemsText = cart.map(item => {
    let line = `- ${item.emoji} ${item.nome} × ${item.qty}`;
    if (item.detalhes) line += `\n  (${item.detalhes})`;
    return line;
  }).join("\n");

  const geoText = geoCoords
    ? `https://maps.google.com/?q=${geoCoords.lat},${geoCoords.lng}`
    : "Não compartilhada";

  const addressFull = [street, neighborhood, complement].filter(Boolean).join(", ");

  let msg = `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `🍝 *NOVO PEDIDO — MARI MASSAS*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
  msg += `👤 *Cliente:* ${name}\n`;
  msg += `📍 *Endereço:* ${addressFull}\n`;
  msg += `🗺️ *Localização GPS:* ${geoText}\n`;
  msg += `💳 *Pagamento:* ${paymentMap[payment] || payment}\n`;
  if (payment === "dinheiro" && change) msg += `💵 *Troco para:* R$ ${parseFloat(change).toFixed(2).replace(".", ",")}\n`;
  msg += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `🧾 *ITENS DO PEDIDO:*\n\n${itemsText}\n`;
  msg += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
  if (couponApplied) msg += `🏷️ *Cupom (${CONFIG.CUPOM_VALIDO}):* - R$ ${discount.toFixed(2).replace(".", ",")}\n`;
  if (deliveryFeeSet) msg += `🛵 *Taxa de entrega:* R$ ${delivery.toFixed(2).replace(".", ",")}\n`;
  msg += `💰 *TOTAL: R$ ${total.toFixed(2).replace(".", ",")}*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━`;

  const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");

  /* Salvar no histórico */
  saveToHistory({ name, addressFull, payment, total, items: [...cart], date: new Date().toLocaleDateString("pt-BR") });

  /* Mostrar rastreador */
  showTracker();
}

/* ═══════════════════════════════════════════════════════════════
   📦 RASTREADOR DE PEDIDO
   ═══════════════════════════════════════════════════════════════ */
function showTracker() {
  document.getElementById("checkout").style.display = "none";
  document.getElementById("trackerSection").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });

  let secs = CONFIG.TEMPO_ENTREGA_MIN * 60;
  timerInterval = setInterval(() => {
    secs--;
    if (secs <= 0) { clearInterval(timerInterval); document.getElementById("timerCount").textContent = "Chegando!"; return; }
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    document.getElementById("timerCount").textContent = `${m}:${s}`;
  }, 1000);

  /* Etapas do tracker com delay */
  const etapas = [
    { id: "track2", lineId: "tline1", delay: 30000 },
    { id: "track3", lineId: "tline2", delay: 120000 },
    { id: "track4", lineId: "tline3", delay: 240000 }
  ];

  etapas.forEach(({ id, lineId, delay }) => {
    setTimeout(() => {
      const prevStep = document.querySelector(".track-step.active");
      if (prevStep) prevStep.classList.remove("active");
      document.getElementById(id).classList.add("active");
      const allDone = document.querySelectorAll(".track-step");
      allDone.forEach(el => { if (el !== document.getElementById(id) && !el.classList.contains("active")) el.classList.add("done"); });
      if (lineId) document.getElementById(lineId).classList.add("done");
    }, delay);
  });
}

/* ═══════════════════════════════════════════════════════════════
   💾 HISTÓRICO LOCAL (PEÇA NOVAMENTE)
   ═══════════════════════════════════════════════════════════════ */
function saveToHistory(order) {
  let history = [];
  try { history = JSON.parse(localStorage.getItem("mariMassasHistory") || "[]"); } catch(e) {}
  history.unshift(order);
  history = history.slice(0, 3);
  localStorage.setItem("mariMassasHistory", JSON.stringify(history));
}

function loadHistory() {
  let history = [];
  try { history = JSON.parse(localStorage.getItem("mariMassasHistory") || "[]"); } catch(e) {}
  if (!history.length) return;

  const hero = document.querySelector(".hero");
  if (!hero) return;

  const section = document.createElement("section");
  section.style.cssText = "padding:0 16px 24px;max-width:600px;margin:0 auto;";
  section.innerHTML = `
    <h2 style="font-family:var(--font-display);font-size:1.4rem;font-weight:700;margin-bottom:14px;">🔁 Pedir novamente</h2>
    <div id="historyCards"></div>
  `;
  document.querySelector(".search-section").insertAdjacentElement("afterend", section);

  const historyCards = section.querySelector("#historyCards");
  history.forEach((order, i) => {
    const card = document.createElement("div");
    card.style.cssText = "background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;margin-bottom:10px;display:flex;align-items:center;justify-content:space-between;gap:12px;";
    card.innerHTML = `
      <div style="flex:1">
        <p style="font-weight:700;font-size:0.88rem;">${order.items.map(it => it.nome).slice(0,2).join(", ")}${order.items.length > 2 ? ` e mais...` : ""}</p>
        <p style="font-size:0.75rem;color:var(--text-muted);">R$ ${order.total.toFixed(2).replace(".", ",")} · ${order.date}</p>
      </div>
      <button style="background:var(--primary);color:#0A0A0F;font-weight:800;font-size:0.8rem;padding:8px 16px;border-radius:99px;flex-shrink:0;">Repetir</button>
    `;
    card.querySelector("button").addEventListener("click", () => {
      cart = order.items.map(it => ({ ...it, id: Date.now() + Math.random() }));
      updateCartUI();
      openCart();
      showToast("✅ Itens adicionados ao carrinho!");
    });
    historyCards.appendChild(card);
  });
}

/* ═══════════════════════════════════════════════════════════════
   🔍 PESQUISA DE PRODUTOS
   ═══════════════════════════════════════════════════════════════ */
document.getElementById("searchInput").addEventListener("input", function() {
  const q = this.value.trim().toLowerCase();
  document.getElementById("searchClear").style.display = q ? "block" : "none";
  document.getElementById("searchTerm").textContent = this.value;

  const allItems = Object.values(CARDAPIO).flat();
  const filtered = q ? allItems.filter(i => i.nome.toLowerCase().includes(q) || i.descricao.toLowerCase().includes(q)) : null;

  document.querySelectorAll(".menu-category").forEach(c => c.style.display = q ? "none" : "block");

  if (q) {
    if (filtered.length === 0) {
      document.getElementById("searchEmpty").style.display = "block";
    } else {
      document.getElementById("searchEmpty").style.display = "none";
      /* Mostrar apenas categorias com resultados */
      const cats = [...new Set(filtered.map(i => i.categoria))];
      cats.forEach(cat => {
        const catEl = document.getElementById("cat-" + cat);
        if (catEl) { catEl.style.display = "block"; }
        const grid = document.getElementById("grid-" + cat);
        if (grid) {
          grid.innerHTML = "";
          const visualMap = { massas: "massa-visual", hamburgueres: "burger-visual", batatas: "batata-visual", salgados: "salgado-visual" };
          filtered.filter(i => i.categoria === cat).forEach((item, i) => {
            grid.appendChild(createProductCard(item, visualMap[cat] || "", i));
          });
        }
      });
    }
  } else {
    document.getElementById("searchEmpty").style.display = "none";
    renderAllProducts();
  }
});

document.getElementById("searchClear").addEventListener("click", () => {
  document.getElementById("searchInput").value = "";
  document.getElementById("searchInput").dispatchEvent(new Event("input"));
});

/* ═══════════════════════════════════════════════════════════════
   🗂️ FILTRO DE CATEGORIAS
   ═══════════════════════════════════════════════════════════════ */
document.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.cat;
    const el = document.getElementById("cat-" + cat);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

/* ═══════════════════════════════════════════════════════════════
   🔔 TOAST NOTIFICATION
   ═══════════════════════════════════════════════════════════════ */
function showToast(msg) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.style.cssText = `
      position:fixed;top:80px;left:50%;transform:translateX(-50%) translateY(-20px);
      background:var(--surface);border:1px solid var(--border);
      border-radius:var(--radius);padding:12px 20px;
      font-size:0.88rem;font-weight:600;color:var(--text);
      z-index:9999;box-shadow:var(--shadow);
      opacity:0;transition:all 0.3s ease;white-space:nowrap;
      max-width:90vw;text-align:center;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = "1";
  toast.style.transform = "translateX(-50%) translateY(0)";
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50%) translateY(-20px)";
  }, 3000);
}

/* ═══════════════════════════════════════════════════════════════
   🧭 NAVEGAÇÃO E EVENTOS GLOBAIS
   ═══════════════════════════════════════════════════════════════ */
function initEventListeners() {
  document.getElementById("navCartBtn").addEventListener("click", openCart);
  document.getElementById("cartClose").addEventListener("click", closeCart);
  document.getElementById("cartOverlay").addEventListener("click", closeCart);
  document.getElementById("checkoutBtn").addEventListener("click", goCheckout);
  document.getElementById("modalClose").addEventListener("click", closeProductModal);
  document.getElementById("modalOverlay").addEventListener("click", closeProductModal);
}

function showSection(section) {
  if (section === "menu") {
    document.getElementById("checkout").style.display = "none";
    document.getElementById("trackerSection").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("reviews").style.display = "block";
    document.querySelector(".search-section").style.display = "block";
    document.querySelector(".categories-section").style.display = "block";
    document.querySelector(".hero").style.display = "flex";
    updateBnavActive("bnav-menu");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function focusSearch() {
  showSection("menu");
  setTimeout(() => {
    document.getElementById("searchInput").focus();
    document.getElementById("searchInput").scrollIntoView({ behavior: "smooth", block: "center" });
  }, 300);
}

function updateBnavActive(activeId) {
  document.querySelectorAll(".bnav-btn").forEach(b => b.classList.remove("active"));
  const el = document.getElementById(activeId);
  if (el) el.classList.add("active");
}

function resetApp() {
  cart = [];
  couponApplied = false;
  deliveryFeeSet = false;
  deliveryFee = 0;
  geoCoords = null;
  clearInterval(timerInterval);

  /* Reset form fields */
  ["fieldName","fieldStreet","fieldNeighborhood","fieldComplement","fieldChange"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  document.querySelectorAll("input[name='payment']").forEach(r => r.checked = false);
  document.getElementById("couponInput").value = "";
  document.getElementById("couponMsg").textContent = "";
  document.getElementById("geoResult").style.display = "none";
  document.getElementById("geoBtn").textContent = "Detectar localização";
  document.getElementById("geoBtn").disabled = false;
  document.getElementById("deliveryFeeCard").style.display = "none";

  updateCartUI();
  showSection("menu");
}
