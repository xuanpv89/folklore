import type { HistoricalEvent, Region, EraFilter } from '../types/history';

export const REGION_CONFIG: Record<Region, { name: string; nameVi: string; color: string; badgeBg: string; border: string }> = {
  asia: {
    name: 'Asia & Oceania',
    nameVi: 'Đông & Đông Nam Á',
    color: '#3b82f6', // Blue
    badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    border: 'border-blue-500'
  },
  europe: {
    name: 'Europe',
    nameVi: 'Châu Âu',
    color: '#ec4899', // Pink / Rose
    badgeBg: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    border: 'border-pink-500'
  },
  'middle-east': {
    name: 'Middle East & Central Asia',
    nameVi: 'Trung Đông & Trung Á',
    color: '#eab308', // Amber / Gold
    badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    border: 'border-amber-500'
  },
  americas: {
    name: 'Americas',
    nameVi: 'Châu Mỹ',
    color: '#10b981', // Emerald / Green
    badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    border: 'border-emerald-500'
  },
  africa: {
    name: 'Africa',
    nameVi: 'Châu Phi',
    color: '#f97316', // Orange
    badgeBg: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    border: 'border-orange-500'
  },
  oceania: {
    name: 'Oceania & Pacific',
    nameVi: 'Châu Đại Dương & Thái Bình Dương',
    color: '#8b5cf6', // Purple
    badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    border: 'border-purple-500'
  }
};

export const ERAS: EraFilter[] = [
  { id: 'ancient', label: 'Ancient Era', labelVi: 'Thời Cổ Đại', startYear: -3000, endYear: -500 },
  { id: 'classical', label: 'Classical Antiquity', labelVi: 'Thời Cổ Điển', startYear: -500, endYear: 500 },
  { id: 'medieval', label: 'Medieval Period', labelVi: 'Thời Trung Cổ', startYear: 500, endYear: 1400 },
  { id: 'renaissance', label: 'Early Modern & Renaissance', labelVi: 'Thời Phục Hưng & Đầu Hiện Đại', startYear: 1400, endYear: 1750 },
  { id: 'industrial', label: 'Industrial & Revolutions', labelVi: 'Thời Cách Mạng Công Nghiệp', startYear: 1750, endYear: 1914 },
  { id: 'modern', label: 'Modern & World Wars', labelVi: 'Thời Modern & Thế Chiến', startYear: 1914, endYear: 1945 },
  { id: 'contemporary', label: 'Contemporary Era', labelVi: 'Thời Hiện Đại & Công Nghệ', startYear: 1945, endYear: 2026 }
];

export const INITIAL_EVENTS: HistoricalEvent[] = [
  // --- ANCIENT ERA (-3000 to -500) ---
  {
    id: 'evt-pyramids-giza',
    title: 'Construction of Great Pyramid of Giza',
    titleVi: 'Xây dựng Kim Tự Tháp Khufu (Giza)',
    year: -2560,
    yearDisplay: '2560 TCN',
    region: 'africa',
    country: 'Egypt',
    countryVi: 'Ai Cập',
    location: { lat: 29.9792, lng: 31.1342, name: 'Giza, Egypt' },
    category: 'culture',
    summary: 'Pharaoh Khufu built the largest pyramid in human history.',
    summaryVi: 'Pharaoh Khufu hoàn thành Kim Tự Tháp Lớn nhất lịch sử nhân loại tại Giza.',
    fullDescription: 'The Great Pyramid of Giza was constructed as a monumental tomb for Fourth Dynasty Egyptian pharaoh Khufu. Standing at 146.6 meters, it remained the tallest man-made structure in the world for over 3,800 years.',
    fullDescriptionVi: 'Kim Tự Tháp Giza được xây dựng làm lăng mộ cho Pharaoh Khufu thuộc Triều đại thứ Tư Ai Cập. Cao 146,6 mét, đây là công trình nhân tạo cao nhất thế giới trong suốt hơn 3.800 năm.',
    keyFigures: ['Pharaoh Khufu', 'Hemiunu'],
    globalImpactScore: 9,
    verification: {
      status: 'peer-reviewed',
      confidence: 98,
      sources: ['Encyclopaedia Britannica', 'Journal of Egyptian Archaeology', 'UNESCO World Heritage'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-indus-harappa', 'evt-hong-bang-dynasty'],
    tags: ['Architecture', 'Monument', 'Pharaoh', 'Bronze Age']
  },
  {
    id: 'evt-indus-harappa',
    title: 'Rise of Harappan Indus Valley Civilization',
    titleVi: 'Đỉnh cao Nền Văn minh Thung lũng Sông Ấn (Harappa)',
    year: -2500,
    yearDisplay: '2500 TCN',
    region: 'asia',
    country: 'Pakistan/India',
    countryVi: 'Ấn Độ / Pakistan',
    location: { lat: 30.6287, lng: 72.8647, name: 'Harappa, Punjab' },
    category: 'science',
    summary: 'Indus Valley civilization pioneered grid urban planning and advanced sanitation.',
    summaryVi: 'Nền văn minh Sông Ấn tiên phong quy hoạch đô thị bàn cờ và hệ thống thoát nước khép kín.',
    fullDescription: 'The Indus Valley Civilisation was a Bronze Age civilisation in the northwestern regions of South Asia, famous for standardized bricks, complex urban drainage systems, and peaceful international trade.',
    fullDescriptionVi: 'Văn minh Sông Ấn phát triển rực rỡ ở Nam Á với kỹ thuật quy hoạch đô thị tiên tiến, gạch tiêu chuẩn hóa và hệ thống dẫn nước đô thị chưa từng có ở thế giới cổ đại.',
    keyFigures: ['Harappan Merchants', 'Civic Engineers'],
    globalImpactScore: 8,
    verification: {
      status: 'verified',
      confidence: 95,
      sources: ['Archaeological Survey of India', 'Cambridge Ancient History'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-pyramids-giza', 'evt-hong-bang-dynasty'],
    tags: ['Urban Planning', 'Sanitation', 'Indus Valley', 'Bronze Age']
  },
  {
    id: 'evt-hong-bang-dynasty',
    title: 'Founding of Van Lang / Hong Bang Era',
    titleVi: 'Thời kỳ Hồng Bàng & Nhà nước Văn Lang sáng lập',
    year: -2879,
    yearDisplay: '2879 TCN (Huyền sử)',
    region: 'asia',
    country: 'Vietnam',
    countryVi: 'Việt Nam',
    location: { lat: 21.3256, lng: 105.352, name: 'Phong Châu, Phú Thọ' },
    category: 'politics',
    summary: 'Kinh Duong Vuong established the Hong Bang dynasty, beginning Vietnamese history.',
    summaryVi: 'Kinh Dương Vương thành lập triều đại Hồng Bàng, khởi đầu cho lịch sử nhà nước Văn Lang.',
    fullDescription: 'According to Vietnamese tradition documented in Dai Viet Su Ky Toan Thu, Kinh Duong Vuong united northern tribes into Xich Duye, laying the foundational roots of Lac Viet identity.',
    fullDescriptionVi: 'Theo Đại Việt Sử Ký Toàn Thư, Kinh Dương Vương hợp nhất các bộ lạc hình thành nước Xích Quỷ, tạo nền móng cho bản sắc Lạc Việt và văn hóa Đông Sơn sau này.',
    keyFigures: ['Kinh Dương Vương', 'Lạc Long Quân', 'Âu Cơ'],
    globalImpactScore: 7,
    verification: {
      status: 'primary-record',
      confidence: 88,
      sources: ['Đại Việt Sử Ký Toàn Thư', 'Lĩnh Nam Chích Quái'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-pyramids-giza'],
    tags: ['Hong Bang', 'Van Lang', 'Lac Viet', 'Origin']
  },

  // --- CLASSICAL ANTIQUITY (-500 to 500) ---
  {
    id: 'evt-battle-marathon',
    title: 'Battle of Marathon & Rise of Athenian Democracy',
    titleVi: 'Trận Marathon & Sự trỗi dậy của Dân chủ Athens',
    year: -490,
    yearDisplay: '490 TCN',
    region: 'europe',
    country: 'Greece',
    countryVi: 'Hy Lạp',
    location: { lat: 38.1177, lng: 23.9483, name: 'Marathon, Greece' },
    category: 'war',
    summary: 'Athenians defeated Darius the Great’s Persian invasion army.',
    summaryVi: 'Quân dân Athens đánh bại quân xâm lược Ba Tư của Darius Đại đế tại cánh đồng Marathon.',
    fullDescription: 'The Battle of Marathon was a watershed moment in Greco-Persian Wars. It proved that Greek hoplite phalanxes could defeat the Persian Empire, safeguarding classical democracy and philosophy.',
    fullDescriptionVi: 'Trận Marathon là bước ngoặt quyết định Chiến tranh Ba Tư. Thắng lợi bảo vệ nền dân chủ Athens và đặt nền móng cho triết học Tây phương phát triển.',
    keyFigures: ['Miltiades', 'Darius I', 'Pheidippides'],
    globalImpactScore: 9,
    verification: {
      status: 'verified',
      confidence: 97,
      sources: ['Herodotus - Histories', 'Oxford Classical Dictionary'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-confucius-teachings', 'evt-siddhartha-buddha'],
    tags: ['Democracy', 'Persian Wars', 'Greece', 'Philosophy']
  },
  {
    id: 'evt-confucius-teachings',
    title: 'Spring and Autumn Period & Confucius Philosophy',
    titleVi: 'Khổng Tử sáng lập Nho giáo thời Xuân Thu',
    year: -500,
    yearDisplay: '500 TCN',
    region: 'asia',
    country: 'China',
    countryVi: 'Trung Quốc',
    location: { lat: 35.5901, lng: 116.9846, name: 'Qufu, Shandong' },
    category: 'culture',
    summary: 'Confucius codified ethical and political philosophy shaping East Asia for millennia.',
    summaryVi: 'Khổng Tử giảng dạy triết học đạo đức, nhân nghĩa, định hình văn hóa xã hội Đông Á.',
    fullDescription: 'During the turmoil of the Spring and Autumn period, Confucius promulgated ethical governance, filial piety, and educational meritocracy, founding Confucianism.',
    fullDescriptionVi: 'Trong thời kỳ Xuân Thu biến động, Khổng Tử đưa ra lý thuyết trị quốc bằng Lễ và Nhân, lập ra Nho giáo ảnh hưởng sâu sắc đến Trung Hoa, Việt Nam, Triều Tiên, Nhật Bản.',
    keyFigures: ['Confucius (Khổng Tử)', 'Yan Hui'],
    globalImpactScore: 10,
    verification: {
      status: 'peer-reviewed',
      confidence: 99,
      sources: ['Analects of Confucius', 'Harvard East Asian Monographs'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-battle-marathon', 'evt-siddhartha-buddha'],
    tags: ['Confucianism', 'Philosophy', 'Spring Autumn', 'East Asia']
  },

  // --- YEAR 544 CE PARALLEL ERA (LY NAM DE & WORLD) ---
  {
    id: 'evt-ly-nam-de-van-xuan',
    title: 'Ly Nam De Founds Van Xuan State',
    titleVi: 'Lý Nam Đế khởi nghĩa & Thành lập Nước Vạn Xuân',
    year: 544,
    yearDisplay: '544 SCN',
    region: 'asia',
    country: 'Vietnam',
    countryVi: 'Việt Nam (Đại Việt cổ)',
    location: { lat: 21.0285, lng: 105.8542, name: 'Long Biên, Hà Nội' },
    category: 'politics',
    summary: 'Ly Bon expelled Liang Dynasty forces, declared himself Emperor Ly Nam De, naming the state Van Xuan.',
    summaryVi: 'Lý Bôn đánh đuổi quân đô hộ nhà Lương, xưng Lý Nam Đế, lập nên nước Vạn Xuân độc lập.',
    fullDescription: 'In 544 CE, Ly Bon liberated Giao Chau from Northern Liang Chinese control. He erected the Van Thieu palace, established the imperial title Ly Nam De, built Khai Quoc pagoda (Tran Quoc today), asserting full sovereignty.',
    fullDescriptionVi: 'Năm 544 SCN, Lý Bôn khởi nghĩa đánh đuổi thứ sử Tiêu Tư nhà Lương, giải phóng Giao Châu. Ông lên ngôi Hoàng đế (Lý Nam Đế), đặt tên nước là Vạn Xuân với mong muốn quốc gia độc lập trường tồn muôn đời.',
    keyFigures: ['Lý Bôn (Lý Nam Đế)', 'Triệu Quang Phục', 'Phạm Thị Toàn'],
    globalImpactScore: 9,
    verification: {
      status: 'peer-reviewed',
      confidence: 96,
      sources: ['Đại Việt Sử Ký Toàn Thư', 'Việt Sử Lược', 'Viện Sử học Việt Nam'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-justinian-hagia-sophia', 'evt-liang-dynasty-china', 'evt-maya-copan-dynasty'],
    tags: ['Ly Nam De', 'Van Xuan', 'Sovereignty', 'Independence']
  },
  {
    id: 'evt-justinian-hagia-sophia',
    title: 'Byzantine Empire & Corpus Juris Civilis of Justinian',
    titleVi: 'Đế quốc Byzantine: Bộ luật Justinian & Hoàng kim Constantinople',
    year: 540,
    yearDisplay: '540 SCN',
    region: 'europe',
    country: 'Byzantine Empire (Turkey)',
    countryVi: 'Thổ Nhĩ Kỳ / Byzantine',
    location: { lat: 41.0082, lng: 28.9784, name: 'Constantinople (Istanbul)' },
    category: 'politics',
    summary: 'Emperor Justinian I codified Roman law and rebuilt the magnificent Hagia Sophia.',
    summaryVi: 'Hoàng đế Justinian I hệ thống hóa Luật La Mã (Corpus Juris Civilis) và hoàn thiện Đại thánh đường Hagia Sophia.',
    fullDescription: 'Under Justinian I, the Byzantine Empire reached its territorial peak, conquering Italy and North Africa, while legal scholars created the Justinian Code—the bedrock of modern civil law.',
    fullDescriptionVi: 'Thời Justinian I, Đế quốc Đông La Mã tái chiếm Ý và Bắc Phi, biên soạn Bộ luật Justinian làm cơ sở cho luật pháp dân sự hiện đại khắp phương Tây.',
    keyFigures: ['Emperor Justinian I', 'Empress Theodora', 'Tribonian'],
    globalImpactScore: 10,
    verification: {
      status: 'verified',
      confidence: 99,
      sources: ['Cambridge History of Byzantine Empire', 'Procopius Wars'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-ly-nam-de-van-xuan', 'evt-liang-dynasty-china'],
    tags: ['Justinian Code', 'Byzantine', 'Civil Law', 'Constantinople']
  },
  {
    id: 'evt-liang-dynasty-china',
    title: 'Southern Liang Dynasty & Emperor Wu’s Patronage of Buddhism',
    titleVi: 'Triều Nam Lương (Trung Hoa) & Hoàng đế Lương Vũ Đế tôn sùng Phật giáo',
    year: 545,
    yearDisplay: '545 SCN',
    region: 'asia',
    country: 'China',
    countryVi: 'Trung Quốc',
    location: { lat: 32.0603, lng: 118.7969, name: 'Jiankang (Nanjing)' },
    category: 'religion',
    summary: 'Emperor Wu of Liang promoted Buddhism while struggling with corruption and border revolts.',
    summaryVi: 'Lương Vũ Đế dốc toàn lực biến Nam Lương thành trung tâm Phật giáo, nhưng bỏ ngỏ quản lý khiến Lý Bôn nổi dậy tại Giao Châu.',
    fullDescription: 'While Emperor Wu of Liang built thousands of Buddhist monasteries in Jiankang, his heavy taxation and corrupt regional governors triggered uprisings across the empire, enabling Ly Nam De to seize independence in Vietnam.',
    fullDescriptionVi: 'Lương Vũ Đế sùng bái Phật giáo quá độ, chiêu tập tăng ni xây hàng ngàn ngôi chùa nhưng buông lỏng cai trị, khiến các thứ sử lộng hành. Chính bối cảnh suy thoái này đã tạo thời cơ cho Lý Bôn khởi nghĩa thành công.',
    keyFigures: ['Lương Vũ Đế (Liang Wudi)', 'Tiêu Tư'],
    globalImpactScore: 7,
    verification: {
      status: 'verified',
      confidence: 94,
      sources: ['Book of Liang (Lương Thư)', 'Zizhi Tongjian'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-ly-nam-de-van-xuan', 'evt-justinian-hagia-sophia'],
    tags: ['Liang Dynasty', 'Buddhism', 'Jiankang', 'Giao Chau']
  },
  {
    id: 'evt-maya-copan-dynasty',
    title: 'Classic Maya Golden Age at Copán & Tikal',
    titleVi: 'Thời kỳ Hoàng kim của Văn minh Maya tại Copán & Tikal',
    year: 550,
    yearDisplay: '550 SCN',
    region: 'americas',
    country: 'Honduras/Guatemala',
    countryVi: 'Honduras / Guatemala',
    location: { lat: 14.837, lng: -89.141, name: 'Copán Ruins, Honduras' },
    category: 'culture',
    summary: 'Maya city-states carved intricate hieroglyphic stelae and advanced astronomy.',
    summaryVi: 'Các thành quốc Maya khắc bia chữ tượng hình tinh xảo và phát triển thiên văn học vượt bậc.',
    fullDescription: 'During the 6th century CE, Maya dynastic centers like Copán and Tikal produced remarkable architectural pyramids, solar calendar calculations, and complex trade networks across Mesoamerica.',
    fullDescriptionVi: 'Thế kỷ 6 đánh dấu sự phát triển rực rỡ của các triều đại Maya tại Copán và Tikal với hệ thống lịch Mặt Trời cực kỳ chính xác, các kim tự tháp bậc thang và bảng chữ khắc tượng hình độc đáo.',
    keyFigures: ['Waterlily Jaguar (Copán Ruler)', 'K\'inich Yax K\'uk\' Mo\''],
    globalImpactScore: 8,
    verification: {
      status: 'verified',
      confidence: 93,
      sources: ['Peabody Museum Maya Project', 'National Geographic Mesoamerica'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-ly-nam-de-van-xuan', 'evt-justinian-hagia-sophia'],
    tags: ['Maya', 'Copan', 'Astronomy', 'Mesoamerica']
  },

  // --- YEAR 938 CE PARALLEL ERA (NGO QUYEN & WORLD) ---
  {
    id: 'evt-ngo-quyen-bach-dang',
    title: 'Ngo Quyen’s Historic Victory at Bach Dang River',
    titleVi: 'Ngô Quyền đại phá quân Nam Hán trên sông Bạch Đằng',
    year: 938,
    yearDisplay: '938 SCN',
    region: 'asia',
    country: 'Vietnam',
    countryVi: 'Việt Nam',
    location: { lat: 20.8933, lng: 106.6542, name: 'Sông Bạch Đằng, Quảng Ninh / Hải Phòng' },
    category: 'war',
    summary: 'Ngo Quyen used iron-tipped wooden stakes to destroy Southern Han invaders, ending 1000 years of Northern Rule.',
    summaryVi: 'Ngô Quyền dùng cọc gỗ đầu bọc sắt cắm xuống lòng sông Bạch Đằng tiêu diệt quân Nam Hán, chấm dứt 1000 năm Bắc thuộc.',
    fullDescription: 'In 938 CE, Ngo Quyen lured the Southern Han fleet into the Bach Dang river at high tide. As the tide receded, the enemy warships were impaled on submerged wooden stakes, securing complete independence for Dai Viet.',
    fullDescriptionVi: 'Mùa thu năm 938, Ngô Quyền chỉ huy trận hải chiến kinh điển trên sông Bạch Đằng, dùng chiến thuật cọc gỗ cắm dưới lòng sông nương theo thủy triều. Chiến thắng đè bẹp quân Nam Hán, kết thúc vĩnh viễn 1000 năm Bắc thuộc, mở ra kỷ nguyên độc lập tự chủ lâu dài.',
    keyFigures: ['Ngô Quyền', 'Lưu Hồng Thao', 'Dương Đình Nghệ'],
    globalImpactScore: 10,
    verification: {
      status: 'peer-reviewed',
      confidence: 99,
      sources: ['Đại Việt Sử Ký Toàn Thư', 'Việt Sử Lược', 'UNESCO Memory of the World'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-otto-holy-roman-empire', 'evt-fatimid-caliphate-cairo', 'evt-song-dynasty-founding'],
    tags: ['Bach Dang', 'Ngo Quyen', 'Independence', 'Naval Battle']
  },
  {
    id: 'evt-otto-holy-roman-empire',
    title: 'Otto I & Consolidation of Holy Roman Empire',
    titleVi: 'Otto I Đại đế hợp nhất Đế quốc La Mã Thần thánh',
    year: 936,
    yearDisplay: '936 SCN',
    region: 'europe',
    country: 'Germany/Italy',
    countryVi: 'Đức / Ý',
    location: { lat: 51.4826, lng: 11.9701, name: 'Magdeburg, Saxony' },
    category: 'politics',
    summary: 'Otto I crowned King of Germany, defeating Magyars and laying foundations for the Holy Roman Empire.',
    summaryVi: 'Otto I lên ngôi Vua Đức, đánh bại người Magyar tại Lechfeld và chuẩn bị xưng Đế quốc La Mã Thần thánh.',
    fullDescription: 'In 936 CE, Otto the Great was crowned King of Germany at Aachen. He consolidated feudal duchies, defended Europe against Hungarian raids, and established the Holy Roman Empire structure that endured until Napoleon.',
    fullDescriptionVi: 'Năm 936 SCN, Otto Đại đế đăng quang Vua Đức tại Aachen, thống nhất các công quốc phong kiến, chiến thắng người Magyar và lập nên thế lực Đế quốc La Mã Thần thánh tại Châu Âu.',
    keyFigures: ['Otto I (Otto the Great)', 'Pope John XII'],
    globalImpactScore: 9,
    verification: {
      status: 'verified',
      confidence: 97,
      sources: ['Res Gestae Saxonicae', 'Cambridge Medieval History'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-ngo-quyen-bach-dang', 'evt-fatimid-caliphate-cairo'],
    tags: ['Holy Roman Empire', 'Otto the Great', 'Germany', 'Medieval']
  },
  {
    id: 'evt-fatimid-caliphate-cairo',
    title: 'Fatimid Caliphate & Foundation of Al-Azhar in Cairo',
    titleVi: 'Triều đại Fatimid thành lập Cairo & Đại học Al-Azhar',
    year: 969,
    yearDisplay: '969 SCN',
    region: 'africa',
    country: 'Egypt',
    countryVi: 'Ai Cập',
    location: { lat: 30.0444, lng: 31.2357, name: 'Cairo, Egypt' },
    category: 'culture',
    summary: 'The Ismaili Fatimid Dynasty conquered Egypt, founded Cairo (Al-Qahira) and Al-Azhar University.',
    summaryVi: 'Triều đại Fatimid chinh phục Ai Cập, xây dựng kinh đô Cairo và Đại học Al-Azhar - trung tâm tri thức Hồi giáo.',
    fullDescription: 'General Jawhar al-Siqilli conquered Egypt for the Fatimid Caliph Al-Mu\'izz, laying out the new capital of Cairo and founding Al-Azhar Mosque & University, which remains one of the world\'s oldest institutions of higher learning.',
    fullDescriptionVi: 'Tướng Jawhar al-Siqilli dẫn quân Fatimid làm chủ Ai Cập, đặt nền móng xây dựng thủ đô Cairo và Đại học Al-Azhar - trở thành ngọn hải đăng trí tuệ và thần học Hồi giáo xuyên suốt nhiều thế kỷ.',
    keyFigures: ['Caliph Al-Mu\'izz', 'Jawhar al-Siqilli'],
    globalImpactScore: 9,
    verification: {
      status: 'verified',
      confidence: 96,
      sources: ['History of the Fatimid Caliphate', 'Al-Azhar Archives'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-ngo-quyen-bach-dang', 'evt-otto-holy-roman-empire'],
    tags: ['Fatimid', 'Cairo', 'Al-Azhar', 'Islamic Golden Age']
  },

  // --- YEAR 1288 CE PARALLEL ERA (TRAN HUNG DAO & WORLD) ---
  {
    id: 'evt-tran-hung-dao-1288',
    title: 'Tran Hung Dao’s Masterpiece Victory at Bach Dang (Mongol Invasions)',
    titleVi: 'Trần Hưng Đạo đại phá 30 vạn quân Nguyên Mông trên sông Bạch Đằng',
    year: 1288,
    yearDisplay: '1288 SCN',
    region: 'asia',
    country: 'Vietnam',
    countryVi: 'Việt Nam (Đại Việt)',
    location: { lat: 20.8933, lng: 106.6542, name: 'Vạn Kiếp & Sông Bạch Đằng' },
    category: 'war',
    summary: 'Grand Prince Tran Hung Dao crushed Kublai Khan’s 3rd invasion fleet, ending Mongol expansion in Southeast Asia.',
    summaryVi: 'Hưng Đạo Đại vương Trần Quốc Tuấn đập tan 30 vạn quân thủy bộ Nguyên Mông, bẻ gãy âm mưu bá chủ Đông Nam Á của Hốt Tất Liệt.',
    fullDescription: 'In April 1288, Tran Hung Dao orchestrated the decisive battle of Bach Dang against Omar and Fan Ji\'s Yuan dynasty fleet. By trapping the enemy armada among iron-tipped stakes, Dai Viet completely defeated the mighty Mongol Empire.',
    fullDescriptionVi: 'Tháng 4 năm 1288, Quốc công Tiết chế Trần Hưng Đạo tổ chức trận hỏa công - cọc gỗ đánh tan đoàn thuyền chiến nhà Nguyên do Ô Mã Nhi chỉ huy trên sông Bạch Đằng. Chiến công 3 lần đánh bại quân Nguyên Mông cứu Đại Việt khỏi họa diệt vong và chặn đứng đà xâm lược của đế chế mạn ngược.',
    keyFigures: ['Trần Hưng Đạo (Trần Quốc Tuấn)', 'Trần Nhân Tông', 'Ô Mã Nhi (Omar)'],
    globalImpactScore: 10,
    verification: {
      status: 'peer-reviewed',
      confidence: 99,
      sources: ['Đại Việt Sử Ký Toàn Thư', 'Yuan Shi (Nguyên Sử)', 'Cambridge History of Inner Asia'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-mali-empire-mansa-musa', 'evt-marco-polo-china', 'evt-ottoman-founding'],
    tags: ['Tran Hung Dao', 'Mongol Invasion', 'Bach Dang 1288', 'Dai Viet']
  },
  {
    id: 'evt-marco-polo-china',
    title: 'Marco Polo at the Court of Kublai Khan',
    titleVi: 'Marco Polo khám phá Triều đình Hốt Tất Liệt & Con đường Tơ lụa',
    year: 1285,
    yearDisplay: '1285 SCN',
    region: 'asia',
    country: 'China/Italy',
    countryVi: 'Trung Quốc / Ý',
    location: { lat: 39.9042, lng: 116.4074, name: 'Khanbaliq (Beijing)' },
    category: 'culture',
    summary: 'Venetian merchant Marco Polo served Kublai Khan, bridging East-West communication.',
    summaryVi: 'Thương gia Venice Marco Polo phục vụ tại triều đình Đại Nguyên, ghi chép hành trình Con đường Tơ lụa.',
    fullDescription: 'While Kublai Khan’s armies fought in Dai Viet and Japan, Venetian traveler Marco Polo spent 17 years exploring China, inspiring European age of discovery with his book "The Travels of Marco Polo".',
    fullDescriptionVi: 'Trong khi Hốt Tất Liệt phái quân chinh phạt Đại Việt và Nhật Bản, Marco Polo sống tại Khanbaliq, ghi lại sự giàu có của Châu Á và kích thích khát vọng khám phá phương Đông của Châu Âu.',
    keyFigures: ['Marco Polo', 'Kublai Khan (Hốt Tất Liệt)'],
    globalImpactScore: 9,
    verification: {
      status: 'verified',
      confidence: 96,
      sources: ['Travels of Marco Polo', 'Silk Road Historical Archive'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-tran-hung-dao-1288', 'evt-mali-empire-mansa-musa'],
    tags: ['Marco Polo', 'Silk Road', 'Kublai Khan', 'Travel']
  },
  {
    id: 'evt-mali-empire-mansa-musa',
    title: 'Rise of Mali Empire & Wealth of West Africa',
    titleVi: 'Sự trỗi dậy của Đế quốc Mali & Sự giàu có ở Tây Phi',
    year: 1280,
    yearDisplay: '1280 SCN',
    region: 'africa',
    country: 'Mali',
    countryVi: 'Mali',
    location: { lat: 16.7666, lng: -3.0026, name: 'Timbuktu, Mali' },
    category: 'economy',
    summary: 'Mali Empire under Keita dynasty monopolized trans-Saharan gold and salt trade routes.',
    summaryVi: 'Đế quốc Mali độc quyền các tuyến đường thương mại Vàng và Muối xuyên sa mạc Sahara, tạo tiền đề cho Mansa Musa.',
    fullDescription: 'During the late 13th century, the Mali Empire established Timbuktu as an international hub of Islamic scholarship, trade, and architectural marvels in West Africa.',
    fullDescriptionVi: 'Cuối thế kỷ 13, Đế quốc Mali trở thành trung tâm thương mại vàng, muối và tri thức Hồi giáo lớn nhất Tây Phi với thành phố huyền thoại Timbuktu.',
    keyFigures: ['Sundiata Keita', 'Mansa Sakura'],
    globalImpactScore: 8,
    verification: {
      status: 'verified',
      confidence: 95,
      sources: ['UNESCO World Heritage Timbuktu', 'Ibn Battuta Travels'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-tran-hung-dao-1288', 'evt-marco-polo-china'],
    tags: ['Mali Empire', 'Gold Trade', 'Timbuktu', 'West Africa']
  },

  // --- YEAR 1789 CE PARALLEL ERA (TAY SON & FRENCH REVOLUTION) ---
  {
    id: 'evt-nguyen-hue-dong-da-1789',
    title: 'Emperor Quang Trung’s Blitzkrieg Victory at Ngoc Hoi - Dong Da',
    titleVi: 'Vua Quang Trung đại phá 29 vạn quân Thanh trận Ngọc Hồi - Đống Đa',
    year: 1789,
    yearDisplay: '1789 SCN',
    region: 'asia',
    country: 'Vietnam',
    countryVi: 'Việt Nam',
    location: { lat: 21.0172, lng: 105.8267, name: 'Gò Đống Đa, Hà Nội' },
    category: 'war',
    summary: 'Emperor Quang Trung executed a legendary 5-day march, destroying 290,000 Qing troops during Lunar New Year.',
    summaryVi: 'Vua Quang Trung tiến quân thần tốc trong dịp Tết Kỷ Dậu, đánh tan 29 vạn quân Thanh xâm lược giải phóng Thăng Long.',
    fullDescription: 'In early 1789, Emperor Quang Trung (Nguyen Hue) assembled the Tay Son army at Phu Xuan, marched north at unprecedented speed, and launched a surprise dawn attack on Qing forces at Ngoc Hoi and Dong Da, liberating Thang Long.',
    fullDescriptionVi: 'Đêm mùng 4 rạng sáng mùng 5 Tết Kỷ Dậu 1789, Hoàng đế Quang Trung chỉ huy quân Tây Sơn dùng tượng binh và hỏa công công phá đồn Ngọc Hồi - Đống Đa, tiêu diệt quân Tôn Sĩ Nghị, tạo nên chiến công hiển hách bậc nhất lịch sử quân sự Việt Nam.',
    keyFigures: ['Quang Trung (Nguyễn Huệ)', 'Bùi Thị Xuân', 'Tôn Sĩ Nghị'],
    globalImpactScore: 10,
    verification: {
      status: 'peer-reviewed',
      confidence: 99,
      sources: ['Đại Nam Chính Biên Liệt Truyện', 'Qing Shi Gao (Thanh Sử Cao)', 'Viện Sử học'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-french-revolution-storming-bastille', 'evt-george-washington-us-president'],
    tags: ['Quang Trung', 'Dong Da 1789', 'Tay Son', 'Qing Dynasty']
  },
  {
    id: 'evt-french-revolution-storming-bastille',
    title: 'Storming of the Bastille & French Revolution',
    titleVi: 'Cách mạng Pháp: Đánh chiếm ngục Bastille & Tuyên ngôn Nhân quyền',
    year: 1789,
    yearDisplay: '1789 SCN',
    region: 'europe',
    country: 'France',
    countryVi: 'Pháp',
    location: { lat: 48.8532, lng: 2.3698, name: 'Bastille, Paris' },
    category: 'politics',
    summary: 'Paris citizens stormed Bastille fortress, sparking the French Revolution and modern democracy.',
    summaryVi: 'Nhân dân Paris đánh chiếm nhà ngục Bastille, bùng nổ Cách mạng Pháp và ban hành Tuyên ngôn Nhân quyền & Dân quyền.',
    fullDescription: 'On July 14, 1789, French revolutionaries stormed the medieval fortress Bastille, signaling the collapse of feudal absolute monarchy and proclaiming equality, liberty, and fraternity.',
    fullDescriptionVi: 'Ngày 14 tháng 7 năm 1789, nhân dân Paris phá bỏ nhà ngục Bastille, lật đổ chế độ phong kiến chuyên chế Bourbon, mở đầu cuộc Cách mạng Pháp thay đổi diện mạo chính trị toàn Châu Âu.',
    keyFigures: ['Maximilien Robespierre', 'Louis XVI', 'Marquis de Lafayette'],
    globalImpactScore: 10,
    verification: {
      status: 'verified',
      confidence: 99,
      sources: ['French National Archives', 'Oxford History of French Revolution'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-nguyen-hue-dong-da-1789', 'evt-george-washington-us-president'],
    tags: ['French Revolution', 'Bastille', 'Liberty', 'Paris']
  },
  {
    id: 'evt-george-washington-us-president',
    title: 'George Washington Inauguration & US Bill of Rights',
    titleVi: 'George Washington tuyên thệ Tổng thống đầu tiên của Hoa Kỳ',
    year: 1789,
    yearDisplay: '1789 SCN',
    region: 'americas',
    country: 'United States',
    countryVi: 'Hoa Kỳ',
    location: { lat: 40.7072, lng: -74.01, name: 'Federal Hall, New York' },
    category: 'politics',
    summary: 'George Washington inaugurated as 1st US President under newly ratified Constitution.',
    summaryVi: 'George Washington nhậm chức Tổng thống đầu tiên của Chánh phủ Liên bang Hoa Kỳ tại New York.',
    fullDescription: 'On April 30, 1789, George Washington took the oath of office at Federal Hall in New York City, establishing executive governance precedents for the newly minted constitutional republic.',
    fullDescriptionVi: 'Ngày 30 tháng 4 năm 1789, George Washington tuyên thệ nhậm chức tại New York, chính thức vận hành mô hình cộng hòa hiến pháp đầu tiên ở Tân Thế giới.',
    keyFigures: ['George Washington', 'Alexander Hamilton', 'James Madison'],
    globalImpactScore: 10,
    verification: {
      status: 'verified',
      confidence: 99,
      sources: ['US Library of Congress', 'National Archives Washington D.C.'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-nguyen-hue-dong-da-1789', 'evt-french-revolution-storming-bastille'],
    tags: ['US Constitution', 'George Washington', 'Democracy', 'New York']
  },

  // --- YEAR 1945 CE PARALLEL ERA (HO CHI MINH & WORLD WAR II) ---
  {
    id: 'evt-ho-chi-minh-1945',
    title: 'Ho Chi Minh Reads Declaration of Independence of Vietnam',
    titleVi: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập khai sinh Nước VNDCCH',
    year: 1945,
    yearDisplay: '1945 SCN',
    region: 'asia',
    country: 'Vietnam',
    countryVi: 'Việt Nam',
    location: { lat: 21.0369, lng: 105.8347, name: 'Quảng trường Ba Đình, Hà Nội' },
    category: 'politics',
    summary: 'President Ho Chi Minh proclaimed independence at Ba Dinh Square after August Revolution.',
    summaryVi: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa.',
    fullDescription: 'On September 2, 1945, following the success of the August Revolution, President Ho Chi Minh proclaimed before half a million citizens that Vietnam was henceforth a free and independent nation.',
    fullDescriptionVi: 'Ngày 2 tháng 9 năm 1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập bất hủ, trích dẫn Tuyên ngôn Độc lập Hoa Kỳ 1776 và Tuyên ngôn Nhân quyền Pháp 1789, chính thức tuyên bố sự ra đời của nước Việt Nam Dân chủ Cộng hòa.',
    keyFigures: ['Hồ Chí Minh', 'Võ Nguyên Giáp', 'Trường Chinh'],
    globalImpactScore: 10,
    verification: {
      status: 'peer-reviewed',
      confidence: 100,
      sources: ['Bảo tàng Lịch sử Quốc gia', 'Lịch sử Đảng Cộng sản Việt Nam', 'UNESCO Archives'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-end-wwii-un-founding', 'evt-atomic-bomb-hiroshima'],
    tags: ['Independence', 'Ho Chi Minh', 'Ba Dinh', 'August Revolution']
  },
  {
    id: 'evt-end-wwii-un-founding',
    title: 'Surrender of Axis Powers & Founding of United Nations',
    titleVi: 'Kết thúc Thế chiến II & Thành lập Liên Hợp Quốc (UN)',
    year: 1945,
    yearDisplay: '1945 SCN',
    region: 'europe',
    country: 'Global / USA / Germany',
    countryVi: 'Toàn cầu / Mỹ / Đức',
    location: { lat: 37.7749, lng: -122.4194, name: 'San Francisco, USA' },
    category: 'politics',
    summary: 'WWII ended with Allied victory; 50 nations signed the UN Charter in San Francisco.',
    summaryVi: 'Thế chiến II kết thúc, 50 quốc gia ký Hiến chương Liên Hợp Quốc tại San Francisco xây dựng trật tự thế giới mới.',
    fullDescription: 'In 1945, total defeat of Nazi Germany and Imperial Japan ended World War II. Representatives of 50 nations convened to ratify the UN Charter to prevent future global conflicts.',
    fullDescriptionVi: 'Năm 1945 ghi dấu sự sụp đổ hoàn toàn của Phát xít Đức và Nhật Bản. Đại diện 50 quốc gia họp tại San Francisco ký Hiến chương thành lập Liên Hợp Quốc nhằm duy trì hòa bình thế giới.',
    keyFigures: ['Franklin D. Roosevelt', 'Winston Churchill', 'Joseph Stalin'],
    globalImpactScore: 10,
    verification: {
      status: 'verified',
      confidence: 100,
      sources: ['United Nations History Archives', 'Official WWII Records'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-ho-chi-minh-1945', 'evt-atomic-bomb-hiroshima'],
    tags: ['United Nations', 'WWII', 'San Francisco', 'Global Peace']
  },
  {
    id: 'evt-atomic-bomb-hiroshima',
    title: 'Atomic Bombings of Hiroshima & Nagasaki',
    titleVi: 'Ném bom nguyên tử xuống Hiroshima & Nagasaki',
    year: 1945,
    yearDisplay: '1945 SCN',
    region: 'asia',
    country: 'Japan',
    countryVi: 'Nhật Bản',
    location: { lat: 34.3853, lng: 132.4553, name: 'Hiroshima, Japan' },
    category: 'science',
    summary: 'First operational deployment of nuclear weapons ushered in Atomic Age.',
    summaryVi: 'Quả bom nguyên tử đầu tiên được thả xuống Hiroshima và Nagasaki, mở ra Kỷ nguyên Hạt nhân.',
    fullDescription: 'In August 1945, the US dropped atomic bombs on Hiroshima and Nagasaki, forcing Japan’s unconditional surrender and dramatically changing international geopolitical strategy.',
    fullDescriptionVi: 'Tháng 8 năm 1945, hai quả bom nguyên tử "Little Boy" và "Fat Man" được thả xuống Hiroshima và Nagasaki, dẫn đến sự đầu hàng của Nhật Bản và mở ra Kỷ nguyên Hạt nhân rủi ro cho nhân loại.',
    keyFigures: ['J. Robert Oppenheimer', 'Harry S. Truman'],
    globalImpactScore: 10,
    verification: {
      status: 'verified',
      confidence: 100,
      sources: ['Hiroshima Peace Memorial Museum', 'Atomic Heritage Foundation'],
      lastVerifiedAt: '2026-07-28'
    },
    parallelConnections: ['evt-ho-chi-minh-1945', 'evt-end-wwii-un-founding'],
    tags: ['Atomic Age', 'Hiroshima', 'Nuclear Warfare', 'Japan']
  }
];
