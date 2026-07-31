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
    "觀音": "Guanyin",
    "觀音系列": "Guanyin Collection",
    "觀音玉器。": "Guanyin Pieces.",
    "觀音玉器": "Guanyin Jade",
    "觀音題材": "Guanyin Design",
    "緬甸A玉": "Burmese Type A Jade",
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
    "返回平安扣": "Back to Peace Buckles",
    "返回雕刻玉牌": "Back to Carved Jade Plaques",
    "返回分類": "Back to Categories",
    "WhatsApp 查詢": "WhatsApp Enquiry",
    "WhatsApp 直接查詢": "WhatsApp Direct Enquiry",
    "WhatsApp Contact": "WhatsApp Enquiry",
    "查詢現貨及價錢": "Check Availability & Price",
    "查詢佛公玉器": "Enquire About Jade Buddha Pieces",
    "查詢觀音玉器": "Enquire About Guanyin Pieces",
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
    "瀏覽觀音系列": "View Guanyin Collection",
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
    "斜角": "Angled view",
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
    "緬甸A玉鑲18K金加鑽石": "Burmese Type A Jade Pendant with 18K Gold and Diamonds",
    "水滴吊墜": "Teardrop Pendant",
    "荷葉吊墜": "Lotus Leaf Pendant",
    "水滴造型配18K金與鑽石鑲嵌，翠色鮮明，尺寸約 58.4 x 22.9 x 11.1mm。": "A vivid green teardrop jade pendant set with 18K gold and diamonds. Approx. 58.4 x 22.9 x 11.1mm.",
    "荷葉造型配18K金與鑽石鑲嵌，翠色飽滿，尺寸約 48.5 x 38.2 x 10.9mm。": "A richly coloured lotus leaf jade pendant set with 18K gold and diamonds. Approx. 48.5 x 38.2 x 10.9mm.",
    "紫羅蘭水滴吊墜": "Lavender Teardrop Pendant",
    "紫羅蘭水滴形翡翠配翠綠頂飾，以18K金及鑽石鑲嵌，尺寸約 32.2 x 17.9 x 10.8mm。": "A lavender teardrop jade pendant with a vivid green accent, set in 18K gold and diamonds. Approx. 32.2 x 17.9 x 10.8mm.",
    "紫羅蘭水滴形翡翠配翠綠頂飾，以18K金及鑽石鑲嵌，造型細緻優雅，適合佩戴或收藏。": "A finely styled lavender teardrop jade pendant with a vivid green accent, set in 18K gold and diamonds, suitable for wearing or collecting.",
    "緬甸A玉紫羅蘭蘋果18K鑲鑽": "Burmese Type A Lavender Jade Apple with 18K Gold and Diamonds",
    "緬甸A玉紫羅蘭蘋果18K鑲鑽正面": "Burmese Type A Lavender Jade Apple with 18K Gold and Diamonds Front",
    "緬甸A玉紫羅蘭蘋果18K鑲鑽背面": "Burmese Type A Lavender Jade Apple with 18K Gold and Diamonds Back",
    "紫羅蘭蘋果": "Lavender Jade Apple",
    "紫羅蘭翡翠雕成蘋果造型，配18K金鑲鑽外框，尺寸 36.5 x 35.2 x 12.1mm。": "An apple-shaped lavender jade pendant in an 18K gold and diamond setting. 36.5 x 35.2 x 12.1mm.",
    "紫羅蘭翡翠雕成蘋果造型，配18K金鑲鑽外框，適合佩戴或收藏。": "An apple-shaped lavender jade pendant in an 18K gold and diamond setting, suitable for wearing or collecting.",
    "緬甸A玉春帶彩佛公": "Burmese Type A Spring-Tone Jade Buddha",
    "緬甸A玉佛公": "Burmese Type A Jade Buddha",
    "佛公玉器": "Jade Buddha Pieces",
    "緬甸A玉紫羅蘭佛公鑲18K金加鑽石": "Burmese Type A Lavender Jade Buddha with 18K Gold and Diamonds",
    "紫羅蘭佛公": "Lavender Jade Buddha",
    "18K金鑽石": "18K Gold and Diamonds",
    "紫羅蘭色澤柔和，佛公造型圓潤，配18K金及鑽石鑲嵌，尺寸 55.4 x 53.3 x 16.8mm。": "Soft lavender jade with a rounded Buddha carving, set with 18K gold and diamonds. 55.4 x 53.3 x 16.8mm.",
    "紫羅蘭佛公造型圓潤，配18K金及鑽石鑲嵌，適合佩戴或收藏。": "A rounded lavender jade Buddha set with 18K gold and diamonds, suitable for wearing or collecting.",
    "緬甸A玉18K金鑲鑽紫羅蘭佛公": "Burmese Type A Lavender Jade Buddha with 18K Gold and Diamonds",
    "18K金鑲鑽": "18K Gold and Diamonds",
    "紫羅蘭色澤柔和，佛公造型圓潤，配18K金鑲鑽外框，尺寸 32.2 x 28.1 x 13.9mm。": "Soft lavender jade with a rounded Buddha carving in an 18K gold and diamond setting. 32.2 x 28.1 x 13.9mm.",
    "紫羅蘭佛公造型圓潤，配18K金鑲鑽外框，適合佩戴或收藏。": "A rounded lavender jade Buddha in an 18K gold and diamond setting, suitable for wearing or collecting.",
    "淡綠佛公造型簡潔，笑容親切，玉色柔和，尺寸約 28.1 x 17.3mm。": "A softly coloured pale green jade Buddha with a simple form and friendly smile. Approx. 28.1 x 17.3mm.",
    "淡綠佛公造型簡潔，笑容親切，玉色柔和，適合日常佩戴或收藏。": "A softly coloured pale green jade Buddha with a simple form and friendly smile, suitable for daily wear or collecting.",
    "白玉與黃翡巧色相映，佛公神態祥和，雕工立體細緻，尺寸約 70.6 x 44.5 x 12.8mm。": "White jade and yellow jade accents complement this serene, finely carved Buddha. Approx. 70.6 x 44.5 x 12.8mm.",
    "白玉與黃翡巧色相映，佛公神態祥和，雕工立體細緻，適合佩戴或收藏。": "White jade and yellow jade accents complement this serene, finely carved Buddha, suitable for wearing or collecting.",
    "緬甸A玉送子觀音鑲18K金加鑽石": "Burmese Type A Child-Giving Guanyin with 18K Gold and Diamonds",
    "送子觀音": "Child-Giving Guanyin",
    "送子觀音雕像配18K金及鑽石鑲嵌，翠色鮮明，尺寸約 55.4 x 35.5 x 7.6mm。": "A vivid green Child-Giving Guanyin carving set with 18K gold and diamonds. Approx. 55.4 x 35.5 x 7.6mm.",
    "緬甸A玉如意": "Burmese Type A Jade Ruyi Plaque",
    "紫綠色澤自然相融，如意題材造型飽滿，雕工細緻，尺寸約 45.8 x 55.9 x 8mm。": "Natural lavender and green tones blend across a well-proportioned, finely carved Ruyi plaque. Approx. 45.8 x 55.9 x 8mm.",
    "紫綠色澤自然相融，如意題材造型飽滿，雕工細緻，寓意吉祥順遂，適合佩戴或收藏。": "Natural lavender and green tones blend across a finely carved Ruyi plaque symbolising auspicious fortune, suitable for wearing or collecting.",
    "緬甸A玉福到如意": "Burmese Type A Jade Fortune and Ruyi Plaque",
    "福到如意": "Fortune and Ruyi",
    "翠色柔和，蝙蝠配如意紋雕刻，寓意福到如意，尺寸約 45.8 x 39.7 x 4.4mm。": "Soft green jade with a carved bat and Ruyi motifs, symbolising the arrival of fortune and fulfilment. Approx. 45.8 x 39.7 x 4.4mm.",
    "翠色柔和，蝙蝠配如意紋雕刻，寓意福到如意，適合佩戴或收藏。": "Soft green jade with a carved bat and Ruyi motifs symbolising the arrival of fortune and fulfilment, suitable for wearing or collecting.",
    "緬甸A玉事業有成": "Burmese Type A Jade Career Success Pendant",
    "緬甸A玉事業有成正面": "Burmese Type A Jade Career Success Pendant Front",
    "緬甸A玉事業有成背面": "Burmese Type A Jade Career Success Pendant Back",
    "緬甸A玉事業有成角度相一": "Burmese Type A Jade Career Success Pendant Angled View One",
    "緬甸A玉事業有成角度相二": "Burmese Type A Jade Career Success Pendant Angled View Two",
    "事業有成": "Career Success",
    "事業有成題材雕刻，葉形線條清晰，尺寸 38.6 x 20.9mm。": "A carved leaf-form jade piece themed around career success. 38.6 x 20.9mm.",
    "事業有成題材雕刻，葉形造型簡潔，適合佩戴或收藏。": "A simply formed leaf-shaped jade carving themed around career success, suitable for wearing or collecting.",
    "緬甸A玉支道林與鶴": "Burmese Type A Jade Zhi Daolin and Crane Plaque",
    "支道林與鶴": "Zhi Daolin and Crane",
    "白玉飄翠圓牌雕刻支道林與鶴題材，人物與仙鶴紋飾相映，尺寸 63.1 x 59.8 x 4.7mm。": "A pale jade round plaque with green accents, carved with Zhi Daolin and a crane. 63.1 x 59.8 x 4.7mm.",
    "白玉飄翠圓牌雕刻支道林與鶴題材，人物與仙鶴紋飾相映，適合佩戴或收藏。": "This pale jade round plaque with green accents depicts Zhi Daolin and a crane, suitable for wearing or collecting.",
    "緬甸A玉紫羅蘭貔貅": "Burmese Type A Lavender Jade Pixiu",
    "緬甸A玉紫羅蘭貔貅正面": "Burmese Type A Lavender Jade Pixiu Front",
    "緬甸A玉紫羅蘭貔貅背面": "Burmese Type A Lavender Jade Pixiu Back",
    "緬甸A玉紫羅蘭貔貅角度相": "Burmese Type A Lavender Jade Pixiu Angled View",
    "緬甸A玉紫羅蘭貔貅細節相": "Burmese Type A Lavender Jade Pixiu Detail View",
    "紫羅蘭貔貅": "Lavender Pixiu",
    "紫羅蘭色澤柔和，貔貅雕刻立體，尺寸 29.8 x 20.8mm。": "A softly coloured lavender jade Pixiu with dimensional carving. 29.8 x 20.8mm.",
    "紫羅蘭色澤柔和，貔貅雕刻立體，適合佩戴或收藏。": "This softly coloured lavender jade Pixiu features dimensional carving, suitable for wearing or collecting.",
    "緬甸A玉紫羅蘭子母扣": "Burmese Type A Lavender Jade Interlocking Buckle",
    "緬甸A玉紫羅蘭子母扣正面": "Burmese Type A Lavender Jade Interlocking Buckle Front",
    "緬甸A玉紫羅蘭子母扣背面": "Burmese Type A Lavender Jade Interlocking Buckle Back",
    "紫羅蘭子母扣": "Lavender Interlocking Buckle",
    "紫羅蘭子母扣內外環相扣，造型簡潔圓潤，尺寸 27.1 x 8.7mm。": "A smooth lavender jade interlocking buckle with linked inner and outer rings. 27.1 x 8.7mm.",
    "紫羅蘭子母扣內外環相扣，造型簡潔圓潤，適合佩戴或收藏。": "This smooth lavender jade interlocking buckle features linked inner and outer rings, suitable for wearing or collecting.",
    "緬甸A玉紫羅蘭": "Burmese Type A Lavender Jade",
    "緬甸A玉紫羅蘭 23.1mm 款正面": "Burmese Type A Lavender Jade 23.1mm Front",
    "緬甸A玉紫羅蘭 23.1mm 款背面": "Burmese Type A Lavender Jade 23.1mm Back",
    "紫羅蘭圓形玉件，造型簡潔圓潤，尺寸 23.1 x 15mm。": "A smooth, simply formed round lavender jade piece. 23.1 x 15mm.",
    "紫羅蘭圓形玉件，造型簡潔圓潤，適合佩戴或收藏。": "This smooth, simply formed round lavender jade piece is suitable for wearing or collecting.",
    "緬甸A玉春帶彩貔貅一對": "Burmese Type A Spring-Tone Jade Pixiu Pair",
    "貔貅一對": "Pixiu Pair",
    "展示一": "View 1",
    "展示二": "View 2",
    "春帶彩紫綠色澤柔和，一對貔貅雕工圓潤，寓意招財納福，尺寸約 32 x 20 x 12.9mm。": "A pair of softly coloured lavender-and-green jade Pixiu carvings, symbolising wealth and good fortune. Approx. 32 x 20 x 12.9mm.",
    "春帶彩紫綠色澤柔和，一對貔貅雕工圓潤，寓意招財納福，適合佩戴或收藏。": "A pair of softly coloured lavender-and-green jade Pixiu carvings symbolising wealth and good fortune, suitable for wearing or collecting.",
    "緬甸A玉女媧練石補青天": "Burmese Type A Jade Nuwa Mends the Sky Plaque",
    "女媧補青天": "Nuwa Mends the Sky",
    "女媧練石補青天題材，黃翡、白玉與翠色相映，人物與祥雲雕工立體，尺寸約 77 x 47.7 x 16.3mm。": "A dimensional Nuwa Mends the Sky carving with yellow, white and green jade tones. Approx. 77 x 47.7 x 16.3mm.",
    "女媧練石補青天題材，黃翡、白玉與翠色相映，人物與祥雲雕工立體細緻，適合佩戴或收藏。": "A finely detailed Nuwa Mends the Sky carving with yellow, white and green jade tones, suitable for wearing or collecting.",
    "緬甸A玉圓牌": "Burmese Type A Jade Round Plaque",
    "圓牌": "Round Plaque",
    "圓牌造型簡潔飽滿，玉色清雅，表面打磨溫潤，尺寸約 53.9 x 5.3mm。": "A clean, well-proportioned round plaque in pale jade with a smooth polished finish. Approx. 53.9 x 5.3mm.",
    "圓牌造型簡潔飽滿，玉色清雅，表面打磨溫潤，適合佩戴或收藏。": "A clean, well-proportioned round plaque in pale jade with a smooth polished finish, suitable for wearing or collecting.",
    "緬甸A玉關公": "Burmese Type A Jade Guan Gong Plaque",
    "關公": "Guan Gong",
    "黃翡巧雕關公，人物神態威嚴，衣甲與大刀雕工立體細緻，尺寸約 55.3 x 32.9 x 13.1mm。": "A dignified Guan Gong carving in yellow jade with finely detailed armour and blade. Approx. 55.3 x 32.9 x 13.1mm.",
    "黃翡巧雕關公，人物神態威嚴，衣甲與大刀雕工立體細緻，適合佩戴或收藏。": "A dignified Guan Gong carving in yellow jade with finely detailed armour and blade, suitable for wearing or collecting.",
    "緬甸A玉龍在心中": "Burmese Type A Jade Dragon in the Heart Plaque",
    "龍在心中": "Dragon in the Heart",
    "黃翡與翠色相映，龍紋鏤空雕刻立體細緻，寓意龍在心中，尺寸約 48.1 x 36.8 x 10.9mm。": "Yellow and green jade tones frame a finely detailed openwork dragon carving. Approx. 48.1 x 36.8 x 10.9mm.",
    "黃翡與翠色相映，龍紋鏤空雕刻立體細緻，寓意龍在心中，尺寸約 46.3 x 35.9 x 11.1mm。": "Yellow and green jade tones frame a finely detailed openwork dragon carving. Approx. 46.3 x 35.9 x 11.1mm.",
    "黃翡與翠色相映，龍紋鏤空雕刻立體細緻，寓意龍在心中，適合佩戴或收藏。": "Yellow and green jade tones frame a finely detailed openwork dragon carving, suitable for wearing or collecting.",
    "緬甸A玉鏤空龍牌": "Burmese Type A Openwork Dragon Jade Plaque",
    "鏤空龍牌": "Openwork Dragon Plaque",
    "深翠色鏤空龍紋層次鮮明，雕工立體細緻，氣勢生動，尺寸約 54.7 x 37.7 x 10.6mm。": "A deep green openwork dragon plaque with vivid depth and finely sculpted detail. Approx. 54.7 x 37.7 x 10.6mm.",
    "深翠色鏤空龍紋層次鮮明，雕工立體細緻，氣勢生動，適合佩戴或收藏。": "This deep green openwork dragon plaque features vivid depth and finely sculpted detail, suitable for wearing or collecting.",
    "緬甸A玉古谷紋五谷豐登龍": "Burmese Type A Ancient Grain-Pattern Harvest Dragon Jade Plaque",
    "五谷豐登龍": "Abundant Harvest Dragon",
    "黃翡圓牌巧色龍，古谷紋與五谷豐登題材寓意豐足吉祥，尺寸約 52.5 x 13.4mm。": "A yellow jade round plaque with a cleverly coloured dragon carving and ancient grain motifs symbolising an abundant, auspicious harvest. Approx. 52.5 x 13.4mm.",
    "黃翡圓牌巧色龍，古谷紋與五谷豐登題材寓意豐足吉祥，適合佩戴或收藏。": "This yellow jade round plaque features a cleverly coloured dragon carving and ancient grain motifs symbolising an abundant, auspicious harvest, suitable for wearing or collecting.",
    "龍牌": "Dragon Plaque",
    "白玉飄翠，橢圓龍牌龍紋層次清晰，尺寸約 49.9 x 39.1 x 7.5mm。": "A pale jade oval plaque with green accents and a clearly layered dragon carving. Approx. 49.9 x 39.1 x 7.5mm.",
    "白玉飄翠，橢圓龍牌龍紋層次清晰，適合佩戴或收藏。": "This pale jade oval plaque features green accents and a clearly layered dragon carving, suitable for wearing or collecting.",
    "緬甸A玉福祿壽三色龍頭魚": "Burmese Type A Three-Colour Dragon-Head Fish Jade Plaque",
    "龍頭魚": "Dragon-Head Fish",
    "福祿壽三色相映，龍頭魚題材雕工立體，色澤層次豐富，尺寸約 61.1 x 37.7 x 11.1mm。": "A richly layered three-colour jade plaque with a dimensional dragon-head fish carving. Approx. 61.1 x 37.7 x 11.1mm.",
    "福祿壽三色相映，龍頭魚題材雕工立體，色澤層次豐富，適合佩戴或收藏。": "This richly layered three-colour jade plaque features a dimensional dragon-head fish carving, suitable for wearing or collecting.",
    "緬甸A玉福祿壽三色喜上眉梢": "Burmese Type A Three-Colour Magpie and Plum Jade Plaque",
    "喜上眉梢": "Magpie and Plum",
    "福祿壽三色相映，喜上眉梢題材雕工立體細緻，色澤層次豐富，尺寸約 66.8 x 32.1 x 16.8mm。": "A richly layered three-colour jade plaque with a finely detailed Magpie and Plum carving. Approx. 66.8 x 32.1 x 16.8mm.",
    "福祿壽三色相映，喜上眉梢題材雕工立體細緻，色澤層次豐富，適合佩戴或收藏。": "This richly layered three-colour jade plaque features a finely detailed Magpie and Plum carving, suitable for wearing or collecting.",
    "緬甸A玉福祿壽三色龍鳳呈祥": "Burmese Type A Three-Colour Dragon and Phoenix Jade Plaque",
    "龍鳳呈祥": "Dragon and Phoenix Harmony",
    "福祿壽三色相映，龍鳳呈祥題材雕工細緻，寓意吉祥和美，尺寸約 62.3 x 41.1 x 7.7mm。": "A finely carved three-colour dragon and phoenix plaque symbolising harmony and auspicious fortune. Approx. 62.3 x 41.1 x 7.7mm.",
    "福祿壽三色相映，龍鳳呈祥題材雕工細緻，寓意吉祥和美，適合佩戴或收藏。": "This finely carved three-colour dragon and phoenix plaque symbolises harmony and auspicious fortune, suitable for wearing or collecting.",
    "緬甸A玉福祿壽三色大展鴻圖": "Burmese Type A Three-Colour Grand Prospects Jade Plaque",
    "大展鴻圖": "Grand Prospects",
    "福祿壽三色相映，大展鴻圖題材雕工細緻，色澤層次豐富，尺寸約 57.1 x 39.7 x 7.8mm。": "A richly layered three-colour jade plaque with finely carved Grand Prospects symbolism. Approx. 57.1 x 39.7 x 7.8mm.",
    "福祿壽三色相映，大展鴻圖題材雕工細緻，色澤層次豐富，適合佩戴或收藏。": "This richly layered three-colour jade plaque features finely carved Grand Prospects symbolism, suitable for wearing or collecting.",
    "緬甸A玉竹報平安": "Burmese Type A Jade Bamboo Peace Plaque",
    "竹報平安": "Bamboo Peace",
    "竹節造型配竹葉雕紋，黃翡色澤溫潤，寓意竹報平安，尺寸約 41.8 x 19.2 x 12.9mm。": "Bamboo-form carving with leaf details in warm yellow jade tones, symbolising peace and safety. Approx. 41.8 x 19.2 x 12.9mm.",
    "竹節造型配竹葉雕紋，黃翡色澤溫潤，寓意竹報平安，適合佩戴或收藏。": "Bamboo-form carving with leaf details in warm yellow jade tones, symbolising peace and safety, suitable for wearing or collecting.",
    "緬甸A玉紫羅蘭觀音": "Burmese Type A Lavender Jade Guanyin",
    "紫羅蘭觀音": "Lavender Guanyin",
    "緬甸A玉紫羅蘭觀音18K鑲鑽": "Burmese Type A Lavender Jade Guanyin with 18K Gold and Diamonds",
    "緬甸A玉紫羅蘭觀音18K鑲鑽正面": "Burmese Type A Lavender Jade Guanyin with 18K Gold and Diamonds Front",
    "緬甸A玉紫羅蘭觀音18K鑲鑽背面": "Burmese Type A Lavender Jade Guanyin with 18K Gold and Diamonds Back",
    "紫羅蘭色澤柔和，觀音造型端莊，配18K金鑲鑽扣頭，尺寸 43.5 x 30.2 x 6.6mm。": "A serene lavender jade Guanyin with an 18K gold and diamond bail. 43.5 x 30.2 x 6.6mm.",
    "紫羅蘭觀音造型端莊，配18K金鑲鑽扣頭，適合佩戴或收藏。": "A serene lavender jade Guanyin with an 18K gold and diamond bail, suitable for wearing or collecting.",
    "紫羅蘭色澤柔和，觀音雕像端莊，寓意慈悲護佑，尺寸約 57.8 x 39.8 x 11mm。": "Soft lavender-toned Guanyin carving with a serene presence, symbolising compassion and protection. Approx. 57.8 x 39.8 x 11mm.",
    "紫羅蘭色澤柔和，觀音雕像端莊，尺寸 54.6 x 30.4 x 6.2mm。": "Soft lavender-toned Guanyin carving with a serene presence. 54.6 x 30.4 x 6.2mm.",
    "紫羅蘭色澤柔和，觀音雕像端莊，寓意慈悲護佑，適合佩戴或收藏。": "This soft lavender-toned Guanyin carving has a serene presence and symbolises compassion and protection, suitable for wearing or collecting.",
    "緬甸A玉九五至尊龍": "Burmese Type A Jade Nine-Five Supreme Dragon Plaque",
    "九五至尊龍": "Nine-Five Supreme Dragon",
    "龍紋雕刻層次細緻，玉色清雅帶黃翡與翠色，寓意尊貴威儀，尺寸約 62.7 x 43.3 x 5mm。": "Finely layered dragon carving in pale jade with yellow and green tones, symbolising prestige and majesty. Approx. 62.7 x 43.3 x 5mm.",
    "九五至尊龍紋雕刻層次細緻，玉色清雅帶黃翡與翠色，寓意尊貴威儀，適合佩戴或收藏。": "The finely layered supreme dragon carving features pale jade with yellow and green tones, symbolising prestige and majesty, suitable for wearing or collecting.",
    "緬甸A玉平安扣鑲18K金鑽石": "Burmese Type A Jade Peace Buckle with 18K Gold and Diamonds",
    "平安扣配18K金與鑽石鑲嵌，圓潤通透，尺寸約 25.8 x 5.7mm。": "A smooth, translucent jade peace buckle set with 18K gold and diamonds. Approx. 25.8 x 5.7mm.",
    "緬甸A玉平安扣鑲18K金扣": "Burmese Type A Jade Peace Buckle with 18K Gold Clasp",
    "緬甸A玉平安扣鑲18K金扣正面": "Burmese Type A Jade Peace Buckle with 18K Gold Clasp Front",
    "緬甸A玉平安扣鑲18K金扣背面": "Burmese Type A Jade Peace Buckle with 18K Gold Clasp Back",
    "18K金扣": "18K Gold Clasp",
    "白玉飄翠平安扣配18K金扣，圓形造型簡潔，尺寸 54.2 x 8.2mm。": "A pale jade peace buckle with green accents and an 18K gold clasp. 54.2 x 8.2mm.",
    "白玉飄翠平安扣配18K金扣，圓形造型簡潔，適合佩戴或收藏。": "This pale jade peace buckle with green accents features an 18K gold clasp, suitable for wearing or collecting.",
    "緬甸A玉雙平安扣": "Burmese Type A Jade Double Peace Buckle",
    "緬甸A玉雙平安扣正面": "Burmese Type A Jade Double Peace Buckle Front",
    "緬甸A玉雙平安扣背面": "Burmese Type A Jade Double Peace Buckle Back",
    "雙平安扣": "Double Peace Buckle",
    "大圓平安扣配翠綠小平安扣，雙扣造型簡潔，尺寸 54.8 x 8.2 x 18.2 x 1.8mm。": "A large round peace buckle paired with a small vivid green peace buckle. 54.8 x 8.2 x 18.2 x 1.8mm.",
    "大圓平安扣配翠綠小平安扣，雙扣造型簡潔，適合佩戴或收藏。": "This large round peace buckle is paired with a small vivid green peace buckle in a clean double-buckle design, suitable for wearing or collecting.",
    "緬甸A玉平安扣": "Burmese Type A Jade Peace Buckle",
    "平安扣玉器": "Jade Peace Buckle Pieces",
    "翠綠與淡黃色澤自然相融，平安扣造型圓潤簡潔，尺寸約 24.5 x 4.5mm。": "Natural green and pale yellow tones blend across this smooth, simply styled peace buckle. Approx. 24.5 x 4.5mm.",
    "翠綠與淡黃色澤自然相融，平安扣造型圓潤簡潔，寓意平安順遂，適合佩戴或收藏。": "Natural green and pale yellow tones blend across this smooth peace buckle, symbolising safety and harmony, suitable for wearing or collecting.",
    "緬甸A玉招財神獸": "Burmese Type A Jade Fortune Beast Plaque",
    "緬甸A玉喜上眉梢": "Burmese Type A Jade Magpie and Plum Plaque",
    "緬甸A玉英明神武": "Burmese Type A Jade Heroic Plaque",
    "緬甸A玉鏤空雕刻一路蓮升": "Burmese Type A Jade Openwork Lotus Plaque",
    "緬甸A玉梅開五福": "Burmese Type A Jade Five Blessings Plum Plaque",
    "緬甸A玉龍牌": "Burmese Type A Jade Dragon Plaque",
    "圓形觀音翡翠玉牌": "Round Guanyin Jade Plaque",
    "圓牌造型飽滿，觀音雕像清晰，尺寸約 56.6 x 7.3mm。": "A well-proportioned round plaque with a clearly carved Guanyin figure. Approx. 56.6 x 7.3mm.",
    "圓牌造型飽滿，觀音雕像清晰，尺寸約 56.6 x 7.3mm。寓意平安順遂，適合日常收藏佩戴。": "A well-proportioned round plaque with a clearly carved Guanyin figure, symbolising peace and smooth fortune, suitable for daily wear or collecting.",
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
  toChinese["WhatsApp Enquiry"] = "WhatsApp 查詢";
  const reversePhrases = phrases.map(([zh, en]) => [en, zh]).reverse();

  const commonLinkLabels = [
    ["jade-necklaces.html", "翡翠吊墜", "Jade Pendants"],
    ["jade-rings.html", "翡翠戒指", "Jade Rings"],
    ["jade-buddha.html", "佛公", "Jade Buddha"],
    ["jade-buddha-guanyin.html", "觀音", "Guanyin"],
    ["jade-peace-buckle.html", "平安扣", "Peace Buckles"],
    ["jade-pendants.html", "雕刻玉牌", "Carved Jade Plaques"],
    ["blue-white-porcelain.html", "青花瓷器", "Blue & White Porcelain"],
    ["porcelain-figures.html", "人物瓷像", "Porcelain Figures"],
    ["#home", "首頁", "Home"],
    ["#jade", "玉器", "Jade"],
    ["#porcelain", "瓷器", "Porcelain"],
    ["#visit", "到店", "Visit"],
    ["#contact", "聯絡", "Contact"]
  ];

  const pageCopy = {
    "index.html": {
      zh: {
        eyebrow: "大埔懷義街3號 · 玉器與瓷器",
        title: "玲瓏藝舍<span>Jenny's Art House</span>",
        lede: "玲瓏藝舍位於大埔，精選玉器、翡翠首飾、傳統瓷器及家居擺設，適合日常佩戴、收藏與送禮。",
        jadeEyebrow: "Featured Jade",
        jadeTitle: "玉質溫潤，適合佩戴與收藏。",
        porcelainEyebrow: "Porcelain Collection",
        porcelainTitle: "瓷器雅致，添上生活韻味。"
      },
      en: {
        eyebrow: "3 Wai Yi Street, Tai Po · Jade and Porcelain",
        title: "Ling Lung Art House<span>Jenny's Art House</span>",
        lede: "Warm jade and luminous porcelain. Jenny's Art House is a physical shop in Tai Po, offering selected jade jewellery, traditional porcelain and home display pieces for modern living.",
        jadeEyebrow: "Featured Jade",
        jadeTitle: "Warm jade pieces for daily wear and collecting.",
        porcelainEyebrow: "Porcelain Collection",
        porcelainTitle: "Elegant porcelain for display, gifting and home styling."
      }
    },
    "jade-necklaces.html": {
      zh: {
        eyebrow: "Jade Pendant Collection",
        title: "翡翠吊墜系列",
        lede: "翡翠吊墜、耳環及配套飾品可按色澤、鑲嵌工藝與佩戴場合挑選。網頁只作款式展示，實際貨況、尺寸及價錢以 WhatsApp 回覆為準。",
        sectionEyebrow: "Available Styles",
        sectionTitle: "逐件細覽。",
        note: "有貨款式會優先顯示；已售款式會移到後方並標示「已售」，方便分辨現貨與參考款。"
      },
      en: {
        eyebrow: "Jade Pendant Collection",
        title: "Jade Pendant Collection",
        lede: "Jade pendants, earrings and matching pieces can be selected by colour, setting and occasion. This page shows available styles; stock, measurements and prices are confirmed by WhatsApp.",
        sectionEyebrow: "Available Styles",
        sectionTitle: "Browse Each Piece.",
        note: "Available pieces are shown first. Sold pieces are moved lower and marked as sold for easy reference."
      }
    },
    "jade-rings.html": {
      zh: {
        eyebrow: "Jade Rings Collection",
        title: "翡翠戒指系列",
        lede: "多款翡翠、紫羅蘭與白冰鑲嵌戒指，每件可按實物狀態、尺寸與預算直接查詢。網頁只作款式展示，實際貨況以 WhatsApp 回覆為準。",
        sectionEyebrow: "Available Styles",
        sectionTitle: "逐件細覽。",
        note: "有貨款式會優先顯示；已售款式會移到後方並標示「已售」，方便分辨現貨與參考款。"
      },
      en: {
        eyebrow: "Jade Rings Collection",
        title: "Jade Rings Collection",
        lede: "Browse jade, lavender jade and icy jade rings. Each piece can be enquired about by condition, size and budget. Actual stock is confirmed by WhatsApp.",
        sectionEyebrow: "Available Styles",
        sectionTitle: "Browse Each Piece.",
        note: "Available pieces are shown first. Sold pieces are moved lower and marked as sold for easy reference."
      }
    },
    "jade-buddha.html": {
      zh: {
        eyebrow: "Jade Buddha Collection",
        title: "佛公",
        lede: "佛公玉器神態圓融，適合佩戴、收藏或送禮。每件款式均可 WhatsApp 查詢現貨、尺寸及價錢。",
        sectionEyebrow: "Available Styles",
        sectionTitle: "佛公玉器。",
        note: "網站只作款式展示，實際貨況、尺寸及價錢以 WhatsApp 回覆為準。"
      },
      en: {
        eyebrow: "Jade Buddha Collection",
        title: "Jade Buddha",
        lede: "Jade Buddha pieces carry a calm, rounded presence and are suitable for wearing, collecting or gifting. Stock, measurements and prices can be confirmed by WhatsApp.",
        sectionEyebrow: "Available Styles",
        sectionTitle: "Jade Buddha Pieces.",
        note: "This page shows styles only. Actual stock, measurements and prices are confirmed by WhatsApp."
      }
    },
    "jade-buddha-guanyin.html": {
      zh: {
        eyebrow: "Guanyin Collection",
        title: "觀音",
        lede: "觀音玉器雕工莊雅，寓意慈悲護佑，適合佩戴、收藏或送禮。每件款式均可 WhatsApp 查詢現貨、尺寸及價錢。",
        sectionEyebrow: "Available Styles",
        sectionTitle: "觀音玉器。",
        note: "網站只作款式展示，實際貨況、尺寸及價錢以 WhatsApp 回覆為準。"
      },
      en: {
        eyebrow: "Guanyin Collection",
        title: "Guanyin",
        lede: "Guanyin jade carvings carry a graceful presence and compassionate symbolism, suitable for wearing, collecting or gifting. Stock, measurements and prices can be confirmed by WhatsApp.",
        sectionEyebrow: "Available Styles",
        sectionTitle: "Guanyin Pieces.",
        note: "This page shows styles only. Actual stock, measurements and prices are confirmed by WhatsApp."
      }
    },
    "jade-peace-buckle.html": {
      zh: {
        eyebrow: "Peace Buckle Collection",
        title: "平安扣",
        lede: "平安扣寓意圓滿平安，適合日常佩戴、收藏或送禮。每件款式均可 WhatsApp 查詢現貨、尺寸及價錢。",
        sectionEyebrow: "Available Styles",
        sectionTitle: "平安扣玉器。",
        note: "網站只作款式展示，實際貨況、尺寸及價錢以 WhatsApp 回覆為準。"
      },
      en: {
        eyebrow: "Peace Buckle Collection",
        title: "Peace Buckles",
        lede: "Peace buckles symbolise harmony and safety, suitable for daily wear, collecting or gifting. Stock, measurements and prices can be confirmed by WhatsApp.",
        sectionEyebrow: "Available Styles",
        sectionTitle: "Peace Buckle Pieces.",
        note: "This page shows styles only. Actual stock, measurements and prices are confirmed by WhatsApp."
      }
    },
    "jade-pendants.html": {
      zh: {
        eyebrow: "Carved Jade Plaque Collection",
        title: "雕刻玉牌系列",
        lede: "玉牌、吊墜與雕刻件可細看種水、色澤、雕工與寓意。網頁只作款式展示，實際貨況、尺寸及價錢以 WhatsApp 回覆為準。",
        sectionEyebrow: "Available Styles",
        sectionTitle: "逐件細覽。",
        note: "點選商品圖片或商品資料可查看詳情；WhatsApp 按鈕會直接開啟查詢。"
      },
      en: {
        eyebrow: "Carved Jade Plaque Collection",
        title: "Carved Jade Plaque Collection",
        lede: "Carved jade plaques and pendants can be viewed by translucency, colour, carving and symbolism. Stock, measurements and prices are confirmed by WhatsApp.",
        sectionEyebrow: "Available Styles",
        sectionTitle: "Browse Each Piece.",
        note: "Tap the image or product information to view details. The WhatsApp button opens the enquiry directly."
      }
    },
    "blue-white-porcelain.html": {
      zh: {
        eyebrow: "Blue & White Porcelain Collection",
        title: "青花瓷器系列",
        lede: "青花瓷器線條清雅，適合家居陳設、收藏或送禮。網頁只作款式展示，實際貨況、尺寸及價錢以 WhatsApp 回覆為準。",
        sectionEyebrow: "Available Styles",
        sectionTitle: "青花瓷器陳設。",
        note: "點選商品圖片或商品資料可查看詳情；WhatsApp 按鈕會直接開啟查詢。"
      },
      en: {
        eyebrow: "Blue & White Porcelain Collection",
        title: "Blue & White Porcelain Collection",
        lede: "Blue and white porcelain has a clean, graceful presence for home display, collecting or gifting. Stock, measurements and prices are confirmed by WhatsApp.",
        sectionEyebrow: "Available Styles",
        sectionTitle: "Blue & White Porcelain Display Pieces.",
        note: "Tap the image or product information to view details. The WhatsApp button opens the enquiry directly."
      }
    },
    "porcelain-figures.html": {
      zh: {
        eyebrow: "Porcelain Figures",
        title: "人物瓷像系列",
        lede: "從衣紋、釉色到神態，展示傳統人物瓷塑之美。適合家居陳設、茶席擺件及收藏送禮。",
        sectionEyebrow: "Available Styles",
        sectionTitle: "人物瓷像與擺設。",
        note: "每件款式均可 WhatsApp 查詢現貨、尺寸及價錢。網頁只作展示，實際貨況以回覆為準。"
      },
      en: {
        eyebrow: "Porcelain Figures",
        title: "Porcelain Figure Collection",
        lede: "From robe details and glaze colours to facial expression, these pieces show the beauty of traditional porcelain figures for display, tea settings and gifting.",
        sectionEyebrow: "Available Styles",
        sectionTitle: "Porcelain Figures and Displays.",
        note: "Stock, measurements and prices can be confirmed by WhatsApp. This page is for display only; actual availability is based on our reply."
      }
    }
  };

  function normalizedPage() {
    return (location.pathname.split("/").pop() || "index.html").toLowerCase();
  }

  function setText(selector, value, root = document) {
    const el = root.querySelector(selector);
    if (el && value) el.textContent = value;
  }

  function setHTML(selector, value, root = document) {
    const el = root.querySelector(selector);
    if (el && value) el.innerHTML = value;
  }

  function applyCommonOverrides(lang) {
    commonLinkLabels.forEach(([target, zh, en]) => {
      document.querySelectorAll("a[href]").forEach((link) => {
        if (link.querySelector("img, picture, video, svg")) return;
        const href = link.getAttribute("href") || "";
        if (href === target || href.endsWith("/" + target) || href.endsWith(target)) {
          link.textContent = lang === "en" ? en : zh;
        }
      });
    });

    document.querySelectorAll(".js-whatsapp").forEach((link) => {
      link.textContent = lang === "en" ? "WhatsApp Enquiry" : "WhatsApp 查詢";
    });
  }

  function applyPageOverrides(lang) {
    applyCommonOverrides(lang);
    const copySet = pageCopy[normalizedPage()];
    if (!copySet) return;
    const copy = copySet[lang];
    if (!copy) return;

    if (normalizedPage() === "index.html") {
      setText(".hero-copy .eyebrow", copy.eyebrow);
      setHTML(".hero-copy h1", copy.title);
      setText(".hero-copy .hero-lede", copy.lede);
      const heads = document.querySelectorAll(".section-head");
      if (heads[0]) {
        setText(".eyebrow", copy.jadeEyebrow, heads[0]);
        setText("h2", copy.jadeTitle, heads[0]);
      }
      if (heads[1]) {
        setText(".eyebrow", copy.porcelainEyebrow, heads[1]);
        setText("h2", copy.porcelainTitle, heads[1]);
      }
      return;
    }

    setText(".hero .eyebrow", copy.eyebrow);
    setText(".hero h1", copy.title);
    setText(".hero .lede", copy.lede);
    setText(".hero-inner > p:not(.eyebrow)", copy.lede);
    setText(".section-head .eyebrow", copy.sectionEyebrow);
    setText(".section-head h2", copy.sectionTitle);
    setText(".section-head .note", copy.note);
  }

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
        z-index: 50;
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
          position: static;
          margin: 0;
          background: rgba(255, 251, 240, .96);
          border-color: rgba(155, 43, 37, .42);
          box-shadow: 0 10px 26px rgba(20, 17, 13, .18);
          z-index: 1200;
        }

        .language-switcher button {
          padding: 8px 10px;
          font-size: 12px;
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

    applyPageOverrides(lang);

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

    switcher.querySelector('[data-lang="zh"]').textContent = "中文";

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
