(function () {
  const grid = document.querySelector(".product-grid");
  if (!grid || grid.dataset.catalogControlsReady === "true") return;

  const cards = Array.from(grid.querySelectorAll(":scope > .product")).map((card, index) => {
    const priceText = card.querySelector(".price")?.textContent || "";
    const match = priceText.match(/HK\$\s*([\d,]+)/i);
    return {
      card,
      index,
      price: match ? Number(match[1].replace(/,/g, "")) : null
    };
  });

  if (!cards.length) return;

  grid.dataset.catalogControlsReady = "true";
  cards
    .slice()
    .sort((a, b) => {
      const priceA = a.price === null ? -Infinity : a.price;
      const priceB = b.price === null ? -Infinity : b.price;
      return priceB - priceA || a.index - b.index;
    })
    .forEach(({ card }) => grid.appendChild(card));

  const pricedCards = cards.filter(({ price }) => price !== null);
  const highestPrice = Math.max(0, ...pricedCards.map(({ price }) => price));

  function thresholdsFor(maximum) {
    if (maximum <= 20000) return [5000, 10000];
    if (maximum <= 150000) return [10000, 30000, 50000, 100000];
    if (maximum <= 500000) return [50000, 100000, 300000];
    return [50000, 500000];
  }

  function formatMoney(value) {
    return "HK$" + value.toLocaleString("en-HK");
  }

  const thresholds = thresholdsFor(highestPrice);
  const candidateRanges = [];
  let lower = 0;

  thresholds.forEach((upper) => {
    candidateRanges.push({ min: lower, max: upper });
    lower = upper;
  });
  candidateRanges.push({ min: lower, max: Infinity });

  const ranges = candidateRanges
    .map((range) => ({
      ...range,
      count: pricedCards.filter(({ price }) => price >= range.min && price < range.max).length
    }))
    .filter(({ count }) => count > 0);

  const controls = document.createElement("section");
  controls.className = "catalog-controls";
  controls.setAttribute("aria-label", "產品價格篩選");
  controls.innerHTML = `
    <button class="catalog-controls__toggle" type="button" aria-expanded="false" aria-controls="catalog-price-panel">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h10"></path>
        <path d="M18 7h2"></path>
        <circle cx="16" cy="7" r="2"></circle>
        <path d="M4 17h2"></path>
        <path d="M10 17h10"></path>
        <circle cx="8" cy="17" r="2"></circle>
      </svg>
    </button>
    <div class="catalog-controls__panel" id="catalog-price-panel" hidden>
      <div class="catalog-controls__topline">
        <h2 class="catalog-controls__title"></h2>
        <p class="catalog-controls__sort"></p>
      </div>
      <div class="catalog-controls__options" role="group"></div>
      <p class="catalog-controls__status" aria-live="polite"></p>
    </div>
  `;

  const toggle = controls.querySelector(".catalog-controls__toggle");
  const panel = controls.querySelector(".catalog-controls__panel");
  const options = controls.querySelector(".catalog-controls__options");
  const title = controls.querySelector(".catalog-controls__title");
  const sortNote = controls.querySelector(".catalog-controls__sort");
  const status = controls.querySelector(".catalog-controls__status");
  const filters = [{ key: "all", count: cards.length }];

  ranges.forEach((range, index) => {
    filters.push({ key: "range-" + index, ...range });
  });

  const unpricedCount = cards.length - pricedCards.length;
  if (unpricedCount) filters.push({ key: "enquire", count: unpricedCount });

  filters.forEach((filter, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "catalog-controls__button";
    button.dataset.filter = filter.key;
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    options.appendChild(button);
  });

  grid.insertAdjacentElement("beforebegin", controls);

  let activeFilter = "all";

  function isEnglish() {
    return document.documentElement.lang.toLowerCase().startsWith("en");
  }

  function rangeLabel(filter, english) {
    if (filter.min === 0 && Number.isFinite(filter.max)) {
      return english
        ? "Under " + formatMoney(filter.max)
        : formatMoney(filter.max) + "以下";
    }
    if (Number.isFinite(filter.max)) {
      return formatMoney(filter.min) + "–" + (filter.max - 1).toLocaleString("en-HK");
    }
    return english
      ? formatMoney(filter.min) + " & above"
      : formatMoney(filter.min) + "以上";
  }

  function filterLabel(filter, english) {
    if (filter.key === "all") return english ? "All products" : "全部產品";
    if (filter.key === "enquire") return english ? "Price on enquiry" : "價格待查詢";
    return rangeLabel(filter, english);
  }

  function matchesFilter(item, filter) {
    if (filter.key === "all") return true;
    if (filter.key === "enquire") return item.price === null;
    return item.price !== null && item.price >= filter.min && item.price < filter.max;
  }

  function refreshText() {
    const english = isEnglish();
    const visibleCount = cards.filter((item) => {
      const filter = filters.find(({ key }) => key === activeFilter);
      return matchesFilter(item, filter);
    }).length;

    title.textContent = english ? "Price range" : "價格範圍";
    sortNote.textContent = english
      ? "Default: price high to low"
      : "預設：價錢由高至低";
    status.textContent = english
      ? `Showing ${visibleCount} product${visibleCount === 1 ? "" : "s"} · high to low`
      : `顯示 ${visibleCount} 件產品・由高至低`;
    controls.setAttribute("aria-label", english ? "Filter products by price" : "按價格篩選產品");
    const panelOpen = !panel.hidden;
    toggle.setAttribute(
      "aria-label",
      english
        ? `${panelOpen ? "Close" : "Open"} price filter`
        : `${panelOpen ? "關閉" : "開啟"}價格篩選`
    );
    toggle.title = english ? "Price filter" : "價格篩選";

    filters.forEach((filter) => {
      const button = options.querySelector(`[data-filter="${filter.key}"]`);
      button.textContent = `${filterLabel(filter, english)} (${filter.count})`;
    });
  }

  function setPanelOpen(open) {
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    refreshText();
  }

  function closePanel() {
    setPanelOpen(false);
  }

  toggle.addEventListener("click", () => {
    setPanelOpen(panel.hidden);
  });

  options.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;

    activeFilter = button.dataset.filter;
    const filter = filters.find(({ key }) => key === activeFilter);
    cards.forEach((item) => {
      item.card.hidden = !matchesFilter(item, filter);
    });
    options.querySelectorAll("button").forEach((option) => {
      option.setAttribute("aria-pressed", option === button ? "true" : "false");
    });
    toggle.classList.toggle("has-active-filter", activeFilter !== "all");
    refreshText();
    if (window.matchMedia("(max-width: 640px)").matches) closePanel();
  });

  document.addEventListener("click", (event) => {
    if (!controls.contains(event.target)) closePanel();
    if (event.target.closest(".language-switcher button[data-lang]")) {
      window.setTimeout(refreshText, 0);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePanel();
      toggle.focus();
    }
  });

  const languageObserver = new MutationObserver(refreshText);
  languageObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"]
  });

  refreshText();
  window.setTimeout(refreshText, 0);
})();
