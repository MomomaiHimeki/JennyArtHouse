(function () {
  const STORAGE_KEY = "jennyArtHouseLanguage";
  const DEFAULT_LANG = "zh";

  const exact = {
    "Jenny's Art House": "Jenny's Art House",
    "Jenny’s Art House": "Jenny's Art House",
    "玲瓏藝舍": "Ling Lung Art House",
    "玲瓏藝舍 · 大埔懷義街3號": "Ling Lung Art House · 3 Wai Yi Street, Tai Po",
    "大埔懷義街3號": "3 Wai Yi Street, Tai Po",
    "精選玉器": "Featured Jade",
    "玉器": "Jade",
    "瓷器": "Porcelain",
    "翡翠吊墜": "Jade Pendants",
    "翡翠吊墜系列": "Jade Pendant Collection",
    "翡翠戒指": "Jade Rings",
    "翡翠戒指系列": "Jade Ring Collection",
    "佛公": "Jade Buddha",
    "佛公玉器。": "Jade Buddha Pieces.",
    "平安扣": "Peace Buckles",
    "平安扣玉器。": "Peace Buckle Pieces.",
    "雕刻玉牌": "Carved Jade Plaques",
    "雕刻玉牌系列": "Carved Jade Plaque Collection",
    "青花瓷器": "Blue & White Porcelain",
    "青花瓷器系列": "Blue & White Porcelain Collection",
    "人物瓷像": "Porcelain Figures",
    "人物瓷像系列": "Porcelain Figure Collection",
    "人物瓷像與擺設。": "Porcelain Figures and Displays.",
    "瓷器系列": "Porcelain Collection",
    "玉器與瓷器": "Jade & Porcelain",
    "到店資訊": "Shop Visit",
    "聯絡我們": "Contact Us",
    "返回精選": "Back to Featured",
    "返回首頁": "Back to Home",
    "返回主頁": "Back to Home",
    "返回玉器": "Back to Jade",
    "返回雕刻玉牌": "Back to Carved Jade Plaques",
    "返回分類": "Back to Categories",
    "WhatsApp 查詢": "WhatsApp Enquiry",
    "WhatsApp 直接查詢": "WhatsApp Direct Enquiry",
    "WhatsApp Contact": "WhatsApp Enquiry",
    "查詢現貨及價錢": "Check Availability & Price",
    "查詢佛公玉器": "Enquire About Jade Buddha Pieces",
    "查詢平安扣玉器": "Enquire About Peace Buckles",
    "查詢人物瓷像": "Enquire About Porcelain Figures",
    "查詢茶具": "Enquire About Tea Ware",
    "查詢方式": "Enquiry Method",
    "瀏覽款式": "View Styles",
    "瀏覽產品": "View Products",
    "瀏覽精選": "View Featured Pieces",
    "瀏覽吊墜系列": "View Pendant Collection",
    "瀏覽戒指系列": "View Ring Collection",
    "瀏覽佛公系列": "View Buddha Collection",
    "瀏覽平安扣系列": "View Peace Buckle Collection",
    "瀏覽玉牌系列": "View Plaque Collection",
    "瀏覽人物瓷像": "View Porcelain Figures",
    "瀏覽青花瓷器": "View Blue & White Porcelain",
    "Google Maps 導航到店": "Navigate with Google Maps",
    "預約到店參觀戒指": "Book a Shop Visit",
    "回到首頁": "Back to Home",
    "請查詢": "Enquire",
    "已售": "Sold",
    "已售出": "Sold",
    "現貨": "Available",
    "商品詳情": "Product Details",
    "更多角度": "More Views",
    "款式一覽": "Style Overview",
    "逐件細心瀏覽。": "Browse Each Piece Carefully.",
    "歡迎到大埔店親自挑選。": "Visit our Tai Po shop to choose pieces in person.",
    "正面": "Front",
    "背面": "Back",
    "角度一": "Angle 1",
    "角度二": "Angle 2",
    "價錢": "Price",
    "尺寸": "Dimensions",
    "類別": "Category",
    "查詢": "Enquiry",
    "看到喜歡的玉器或瓷器？歡迎直接 WhatsApp 查詢。": "Found a jade or porcelain piece you like? Welcome to enquire on WhatsApp.",
    "逐件細看。": "Browse Each Piece.",
    "歡迎親臨大埔店參觀實物。": "Visit our Tai Po shop to view pieces in person.",
    "我們會在 12 小時之內回覆。": "We will reply within 12 hours.",
    "玉器 · 瓷器 · 擺設": "Jade · Porcelain · Display Pieces",
    "瓷器有形，亦有神。": "Porcelain has both form and spirit.",
    "歡迎親臨大埔店睇實物。": "Visit our Tai Po shop to view pieces in person.",
    "佛公玉器。": "Jade Buddha Pieces.",
    "佛公系列": "Jade Buddha Collection",
    "平安扣玉器。": "Peace Buckle Pieces.",
    "平安扣系列": "Peace Buckle Collection",
    "青花瓷器系列": "Blue & White Porcelain Collection",
    "青花瓷器陳設。": "Blue & White Porcelain Display Pieces.",
    "人物瓷像系列": "Porcelain Figure Collection",
    "雕刻玉牌系列": "Carved Jade Plaque Collection",
    "翡翠吊墜系列": "Jade Pendant Collection",
    "翡翠戒指系列": "Jade Ring Collection",

    "緬甸A玉鑲18K金鑽石翡翠吊墜": "Burmese Type A Jade 18K Gold Diamond Pendant",
    "緬甸A玉鑲18K金鑽石翡翠荷葉吊墜": "Burmese Type A Jade 18K Gold Diamond Lotus Leaf Pendant",
    "緬甸A玉春帶彩佛公": "Burmese Type A Spring-Tone Jade Buddha",
    "緬甸A玉佛公": "Burmese Type A Jade Buddha",
    "緬甸A玉平安扣鑲18K金鑽石": "Burmese Type A Jade Peace Buckle with 18K Gold and Diamonds",
    "緬甸A玉招財神獸": "Burmese Type A Jade Fortune Beast Plaque",
    "緬甸A玉喜上眉梢": "Burmese Type A Jade Magpie and Plum Plaque",
    "緬甸A玉英明神武": "Burmese Type A Jade Heroic Plaque",
    "緬甸A玉鏤空雕刻一路蓮升": "Burmese Type A Jade Openwork Lotus Plaque",
    "緬甸A玉梅開五福": "Burmese Type A Jade Five Blessings Plum Plaque",
    "緬甸A玉龍牌": "Burmese Type A Jade Dragon Plaque",
    "圓形觀音翡翠玉牌": "Round Guanyin Jade Plaque",
    "緬甸A玉如意龍牌": "Burmese Type A Jade Ruyi Dragon Plaque",
    "雲紋如意翡翠玉牌": "Cloud Ruyi Jade Plaque",
    "青花花鳥瓷瓶": "Blue and White Floral Bird Porcelain Vase",
    "滿綠三角翡翠戒指": "Vivid Green Triangular Jade Ring",
    "高翠圓蛋鑽石戒指": "High Green Cabochon Diamond Ring",
    "紫羅蘭配陽綠翡翠戒指": "Lavender and Green Jade Ring",
    "紫羅蘭蛋面排戒": "Lavender Cabochon Row Ring",
    "冰種長方翡翠戒指": "Icy Rectangular Jade Ring",
    "白冰蛋面鑽石戒指": "White Icy Cabochon Diamond Ring",
    "翠色馬鞍鑽石戒指": "Green Saddle Jade Diamond Ring",
    "皇冠鑽石翡翠戒指": "Crown Jade Diamond Ring",
    "80年代景徳鎮手繪古彩觀音": "1980s Jingdezhen Hand-Painted Famille-Color Guanyin",
    "90年代景德鎮青花釉里紅哥背弟": "1990s Jingdezhen Blue-and-White Underglaze Red Brother Figure",
    "90年代粉彩王羲之戲鵝": "1990s Famille Rose Wang Xizhi with Goose",
    "70年代景德鎮陶瓷李白醉酒": "1970s Jingdezhen Porcelain Drunken Li Bai",
    "彩釉文官人物瓷像": "Color-Glazed Civil Official Porcelain Figure",
    "80年代粉彩福祿壽瓷像組": "1980s Famille Rose Fu Lu Shou Porcelain Set"
  };

  const phrases = [
    ["Jenny’s Art House · 玲瓏藝舍", "Jenny's Art House · Ling Lung Art House"],
    ["Jenny's Art House · 玲瓏藝舍", "Jenny's Art House · Ling Lung Art House"],
    ["HK$ 請查詢", "HK$ Enquire"],
    ["HK$ 已售", "HK$ Sold"],
    [" | 請查詢", " | Enquire"],
    ["｜請查詢", " | Enquire"],
    ["請查詢", "Enquire"],
    ["尺寸約", "Approx. "],
    ["約 ", "Approx. "],
    ["高約", "Height approx. "],
    ["寬約", "Width approx. "],
    ["每件款式均可 WhatsApp 查詢現貨、尺寸及價錢。網頁只作展示，實際貨況以回覆為準。", "Every piece can be enquired via WhatsApp for availability, dimensions and price. The website is for display only; actual availability is subject to our reply."],
    ["網頁只作款式展示，實際貨況、尺寸及價錢以 WhatsApp 回覆為準。", "The website shows styles only; actual availability, dimensions and price are subject to WhatsApp reply."],
    ["網站只作款式展示，實際貨況、尺寸及價錢以 WhatsApp 回覆為準。", "The website shows styles only; actual availability, dimensions and price are subject to WhatsApp reply."],
    ["有貨款式會優先顯示；已售款式會移到後方並標示「已售」，方便分清現貨與參考款。", "Available items are shown first; sold items are moved to the end and marked Sold for clarity."],
    ["可能商品連結已更新，請返回分類頁重新選擇，或直接 WhatsApp 查詢。", "This product link may have been updated. Please return to the category page or enquire on WhatsApp."],
    ["翡翠吊墜、耳環及配套飾品可按色澤、鑲嵌工藝與佩戴場合挑選。", "Jade pendants, earrings and matching jewellery can be chosen by colour, setting and occasion."],
    ["翡翠吊墜、耳環及配套飾品可按色澤、鑲嵌工藝與佩戴場合挑選。網頁只作款式展示，實際貨況、尺寸及價錢以 WhatsApp 回覆為準。", "Jade pendants, earrings and matching jewellery can be chosen by colour, setting and occasion. The website shows styles only; actual availability, dimensions and price are subject to WhatsApp reply."],
    ["多款翡翠、紫羅蘭與白冰鑲嵌戒指，每件可按實物狀態、尺寸與預算直接查詢。", "A range of green jade, lavender and icy white jade rings; each piece can be enquired by condition, size and budget."],
    ["多款翡翠、紫羅蘭與白冰鑲嵌戒指，每件可按實物狀態、尺寸與預算直接查詢。網頁只作款式展示，實際貨況以 WhatsApp 回覆為準。", "A range of green jade, lavender and icy white jade rings; each piece can be enquired by condition, size and budget. The website shows styles only; actual availability is subject to WhatsApp reply."],
    ["從日常可配搭的玉戒、玉鐲，到雕工細緻的玉牌，店內可按預算、色澤與用途協助挑選。", "From jade rings and bangles for daily wear to finely carved plaques, we can help you choose by budget, colour and purpose."],
    ["從衣紋、釉色到神態，展示傳統人物瓷塑之美。", "From robe patterns and glaze to expression, these pieces show the beauty of traditional porcelain figures."],
    ["適合家居陳設、茶席擺件及收藏送禮。", "Suitable for home display, tea settings, collecting and gifting."],
    ["青花瓷器線條清雅，適合家居陳設、收藏或送禮。網頁只作款式展示，實際貨況、尺寸及價錢以 WhatsApp 回覆為準。", "Blue and white porcelain has clean, elegant lines, suitable for home display, collecting or gifting. The website shows styles only; actual availability, dimensions and price are subject to WhatsApp reply."],
    ["玉牌、吊墜與雕刻件可細看種水、色澤、雕工與寓意。網頁只作款式展示，實際貨況、尺寸及價錢以 WhatsApp 回覆為準。", "Jade plaques, pendants and carvings can be appreciated by translucency, colour, carving and meaning. The website shows styles only; actual availability, dimensions and price are subject to WhatsApp reply."],
    ["佛公玉器神態圓融，適合佩戴、收藏或送禮。每件款式均可 WhatsApp 查詢現貨、尺寸及價錢。", "Jade Buddha pieces have a gentle and harmonious expression, suitable for wearing, collecting or gifting. Each style can be enquired via WhatsApp for availability, dimensions and price."],
    ["平安扣寓意圓滿平安，適合日常佩戴、收藏或送禮。每件款式均可 WhatsApp 查詢現貨、尺寸及價錢。", "Peace buckles symbolise completeness and safety, suitable for daily wear, collecting or gifting. Each style can be enquired via WhatsApp for availability, dimensions and price."],
    ["點選商品圖片或下方 WhatsApp 按鈕，訊息會自動帶入指定款式，方便直接查詢。", "Select a product image or the WhatsApp button below; the message will include the selected style for easy enquiry."],
    ["地址：大埔懷義街3號。戒指款式、尺寸及貨況會不時更新，如有心儀款式，建議先 WhatsApp 查詢及預約到店。", "Address: 3 Wai Yi Street, Tai Po. Ring styles, sizes and availability may change, so please enquire on WhatsApp and arrange a visit for pieces you like."],
    ["歡迎親臨大埔店參觀實物。", "Visit our Tai Po shop to view pieces in person."],
    ["歡迎親臨大埔店查看實物。", "Visit our Tai Po shop to view pieces in person."],
    ["地址：大埔懷義街3號。", "Address: 3 Wai Yi Street, Tai Po."],
    ["大埔懷義街3號 · Hong Kong · 玉器瓷器", "3 Wai Yi Street, Tai Po · Hong Kong · Jade and Porcelain"],
    ["玲瓏藝舍大埔店面，歡迎親臨挑選玉器、瓷器及家居擺設。", "Jenny's Art House storefront in Tai Po. You are welcome to visit and choose jade, porcelain and home display pieces in person."],
    ["玉之溫潤，瓷之澄明。玲瓏藝舍是位於大埔的實體店，精選玉器首飾、傳統瓷器與家居擺設，讓東方器物自然走進現代生活。", "Warm jade and luminous porcelain. Jenny's Art House is a physical shop in Tai Po, offering selected jade jewellery, traditional porcelain and home display pieces for modern living."],
    ["網頁以 WhatsApp 作為主要查詢入口，方便客人在 Instagram、Facebook 或店內 QR code 掃描後，直接詢問款式、價錢與到店時間。", "WhatsApp is the main enquiry channel, so customers from Instagram, Facebook or in-store QR codes can ask directly about styles, prices and visiting times."],
    ["可傳送截圖、預算或用途，我們會協助介紹合適款式。若需要保留、到店觀看或了解更多細節，也可以直接查詢。我們會於12小時內回覆。", "Send us a screenshot, budget or intended use and we will suggest suitable styles. You can also enquire directly to reserve, view in store or learn more details. We will reply within 12 hours."],
    ["我們會在 12 小時之內回覆。", "We will reply within 12 hours."],
    ["我們會在12小時之內回覆。", "We will reply within 12 hours."],
    ["直接 WhatsApp 查詢", "Enquire Directly on WhatsApp"]
  ];

  const toChinese = Object.fromEntries(Object.entries(exact).map(([zh, en]) => [en, zh]));
  const reversePhrases = phrases.map(([zh, en]) => [en, zh]).reverse();

  function injectStyles() {
    if (document.getElementById("language-switcher-style")) return;
    const style = document.createElement("style");
    style.id = "language-switcher-style";
    style.textContent = `
      .language-switcher {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 3px;
        margin: 0 10px;
        border: 1px solid rgba(155, 43, 37, .28);
        border-radius: 999px;
        background: rgba(255, 251, 240, .9);
        box-shadow: 0 6px 18px rgba(62, 43, 20, .08);
        flex-shrink: 0;
      }

      .language-switcher button {
        border: 0;
        border-radius: 999px;
        background: transparent;
        color: #6f322c;
        cursor: pointer;
        font: 700 12px/1.1 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        padding: 7px 10px;
        letter-spacing: 0;
      }

      .language-switcher button[aria-pressed="true"] {
        background: #9b2b25;
        color: #fffaf0;
      }

      @media (max-width: 760px) {
        .language-switcher {
          order: 1;
          margin-left: 0;
          margin-right: auto;
        }

        .language-switcher button {
          padding: 7px 9px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function getLanguage() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function preserveSpacing(original, replacement) {
    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];
    return leading + replacement + trailing;
  }

  function translateText(value, lang) {
    if (!value || !value.trim()) return value;
    const dictionary = lang === "en" ? exact : toChinese;
    const phraseList = lang === "en" ? phrases : reversePhrases;
    const compact = value.replace(/\s+/g, " ").trim();

    if (dictionary[compact]) {
      return preserveSpacing(value, dictionary[compact]);
    }

    let next = value;
    phraseList.forEach(([from, to]) => {
      next = next.split(from).join(to);
    });
    return next;
  }

  function shouldSkipNode(node) {
    const parent = node.parentElement;
    if (!parent) return true;
    if (parent.closest(".language-switcher")) return true;
    return /^(SCRIPT|STYLE|NOSCRIPT|TEMPLATE)$/i.test(parent.tagName);
  }

  function translateDocument(lang) {
    document.documentElement.lang = lang === "en" ? "en" : "zh-HK";
    document.title = translateText(document.title, lang);

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return shouldSkipNode(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });

    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach((node) => {
      node.nodeValue = translateText(node.nodeValue, lang);
    });

    document.querySelectorAll("[alt], [aria-label], [title], [placeholder]").forEach((el) => {
      ["alt", "aria-label", "title", "placeholder"].forEach((attr) => {
        if (el.hasAttribute(attr)) {
          el.setAttribute(attr, translateText(el.getAttribute(attr), lang));
        }
      });
    });

    document.querySelectorAll(".language-switcher button").forEach((button) => {
      button.setAttribute("aria-pressed", button.dataset.lang === lang ? "true" : "false");
    });
  }

  function createSwitcher() {
    if (document.querySelector(".language-switcher")) return;
    const nav = document.querySelector("header .nav");
    const brand = document.querySelector("header .brand");
    if (!nav || !brand) return;

    const switcher = document.createElement("div");
    switcher.className = "language-switcher";
    switcher.setAttribute("aria-label", "Language");
    switcher.innerHTML = `
      <button type="button" data-lang="zh">中文</button>
      <button type="button" data-lang="en">EN</button>
    `;

    switcher.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-lang]");
      if (!button) return;
      localStorage.setItem(STORAGE_KEY, button.dataset.lang);
      translateDocument(button.dataset.lang);
    });

    brand.insertAdjacentElement("afterend", switcher);
  }

  function init() {
    injectStyles();
    createSwitcher();
    translateDocument(getLanguage());

    let timer = null;
    const observer = new MutationObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(() => translateDocument(getLanguage()), 80);
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
