export const resume = {
  name: {
    zh: '廖致翰',
    en: 'Vick Liao',
  },
  title: {
    zh: '後端工程師',
    en: 'Backend Engineer',
  },
  subtitle: {
    zh: '打造撐得住用餐尖峰的點餐、金流與電子發票系統——寫程式，也寫 RCA。',
    en: 'I build ordering, payment and e-invoice systems that survive the dinner rush — and write the RCAs when anything doesn’t.',
  },
  location: {
    zh: '台灣',
    en: 'Taiwan',
  },
  phone: '+886 908268080',
  email: 'try890928@gmail.com',
  github: 'https://github.com/890928',
  linkedin: 'https://www.linkedin.com/in/vickliao',
  about: {
    zh: '4 年開發經驗（後端為核心），現於點點全球（快一點 QuickClick）負責餐飲 SaaS 核心系統：從零建置王品集團掃碼點餐系統後端（130+ 門市）、電子發票中台與多銀行 TWQR 金流串接，並參與次世代訂單中台的架構設計。兩年經手 2,000+ 筆工單、產出 116 篇技術文件與 11+ 篇正式 RCA——擅長在高併發、多方整合的系統裡找到根因，並把它變成不會再發生的架構。',
    en: 'Backend engineer with 4 years of development experience, building F&B SaaS at QuickClick (DianDian Global): built the Wowprime Group scan-to-order backend from scratch (130+ restaurants), an e-invoice hub, and multi-bank TWQR payment integrations, while co-designing the next-gen ordering platform. 2,000+ tickets, 116 technical docs and 11+ formal RCAs in two years — I find root causes in high-concurrency, multi-vendor systems, then turn them into architecture that won’t fail the same way twice.',
  },
  typewriterWords: [
    'Backend Engineer',
    'NestJS · TypeScript',
    'MySQL · Redis · BullMQ',
    'Payments & E-Invoice',
    'Incident RCA',
    'System Architecture',
  ],
  skills: {
    backend: [
      { name: 'Node.js / TS', level: 92 },
      { name: 'NestJS', level: 90 },
      { name: 'MySQL', level: 88 },
      { name: 'Redis / BullMQ', level: 82 },
    ],
    devops: [
      { name: 'Docker', level: 82 },
      { name: 'ELK', level: 78 },
      { name: 'GCP / AWS', level: 72 },
      { name: 'K8s (GKE)', level: 68 },
    ],
    frontend: [
      { name: 'HTML/CSS', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Next.js', level: 75 },
      { name: 'Vue', level: 72 },
    ],
  },
  experience: [
    {
      id: 'quickclick',
      company: { zh: 'QuickClick快一點 / 點點全球股份有限公司', en: 'QuickClick / DianDian Global Co., Ltd.' },
      title: { zh: '後端工程師', en: 'Backend Engineer' },
      period: { zh: '2024.09 - 至今', en: '2024.09 - Present' },
      filename: 'quickclick.ts',
      tags: ['NestJS', 'TypeScript', 'MySQL', 'Redis', 'BullMQ', 'GCP / K8s', 'ELK'],
      description: {
        zh: [
          '獨立負責王品集團掃碼點餐系統（QC 4.0）後端：以 NestJS 從零建置訂單、菜單同步、購物車、揪團與支付模組，串接集團中台與 POS，上線後支撐 130+ 門市，並持續開發吃到飽、會員 SSO、點數票券等功能',
          '從 0 到 1 設計並落地電子發票中台：綠界相容 API、發票號碼池、佇列化上傳與冪等／限流／熔斷機制，搭配管理後台與不停機 canary 遷移，既有客戶零改碼轉移',
          '完成三家銀行 TWQR（台灣 Pay）與 AFTEE 金流串接：主掃／被掃／退款／對帳，跨 5 個服務同步改造並全環境驗測上線',
          '於 LINE Notify 停服前主導推播系統遷移：Email＋Firestore 雙軌、訂閱管理後台、跨系統 DB 資料遷移，如期無痛切換',
          '參與次世代點餐中台架構設計（NestJS monorepo、Hexagonal、adapter-per-vendor），規劃收斂 10+ 個遺留服務；系統性 DB 治理：慢查詢優化、索引、壓測與百 GB 級大表分析',
          '兩年經手 2,000+ 筆工單、產出 11+ 篇正式 RCA：曾以行級程式碼證據定位 webhook 重試風暴造成 20 倍流量放大的掉單事故，並以三階段 Hotfix 根治',
          '整合 Foodpanda／UberEats 與多家 POS 廠商：外送平台 API 改版專案化承接、菜單同步併發限流、訂單防重與冪等設計',
        ],
        en: [
          'Sole backend owner of the Wowprime Group scan-to-order system (QC 4.0): built ordering, menu sync, cart, group-ordering and payment modules from scratch in NestJS, integrating group middleware and POS; now serving 130+ restaurants, with ongoing work on AYCE, member SSO and points/vouchers',
          'Designed and shipped an e-invoice hub from zero: ECPay-compatible API, invoice number pooling, queued uploads with idempotency / rate limiting / circuit breaking, plus an ops dashboard and zero-downtime canary migration — existing merchants moved with zero code changes',
          'Delivered TWQR (Taiwan Pay) integrations with three banks plus AFTEE BNPL — merchant- and customer-presented modes, refunds and reconciliation — coordinated across 5 services and verified through every environment',
          'Led the notification-system migration ahead of LINE Notify EOL: dual-track Email + Firestore push, a subscription console, and cross-system DB migration with zero downtime',
          'Co-designed the next-gen ordering platform architecture (NestJS monorepo, hexagonal, adapter-per-vendor) to consolidate 10+ legacy services; systematic DB work: slow-query tuning, indexing, load testing and 100GB-scale table analysis',
          'Handled 2,000+ tickets and authored 11+ formal RCAs in two years — once pinpointed, with line-level code evidence, a webhook retry storm amplifying traffic 20x and dropping orders, then eliminated it with a three-stage hotfix',
          'Integrated Foodpanda / UberEats and multiple POS vendors: API version migrations, concurrency-limited menu sync, and idempotent order de-duplication',
        ],
      },
    },
    {
      id: 'cloudlife',
      company: { zh: '雲端生活家股份有限公司', en: 'CloudLife Co., Ltd.' },
      title: { zh: '後端工程師', en: 'Backend Engineer' },
      period: { zh: '2023.06 - 2024.08', en: '2023.06 - 2024.08' },
      filename: 'cloudlife.ts',
      tags: ['.NET Core', 'C#', 'React', 'Node.js', 'MySQL', 'MSSQL'],
      description: {
        zh: [
          '維運公司產品並開發外包新專案：會員服務平台、App 訂單系統、租屋管理平台、售票平台',
          '開發租屋管理平台：QRCode 掃碼與通知模組，串接 LINE Notify、簡訊、第三方金流與電子發票服務',
          '開發企業形象後台（CMS），支援官網內容自助維護；規劃並實作會員中心（帳號綁定、通知偏好、統計報表）',
          '串接門禁、出單機等多種硬體設備',
          '熟悉 Git Flow，參與 Jenkins CI/CD 環境維護，以 Docker 部署小型專案',
        ],
        en: [
          'Maintained company products and built outsourced projects: membership platform, app ordering system, rental management platform, ticketing platform',
          'Built the rental management platform: QRCode scanning and notification modules, integrating LINE Notify, SMS, third-party payment and e-invoice services',
          'Developed a corporate CMS for self-service website content; planned and implemented the member center (account binding, notification preferences, analytics)',
          'Integrated access-control and printer hardware devices',
          'Proficient in Git Flow; maintained Jenkins CI/CD pipelines and deployed small projects with Docker',
        ],
      },
    },
    {
      id: 'ctbc',
      company: { zh: '中國信託金融控股股份有限公司', en: 'CTBC Financial Holding Co., Ltd.' },
      title: { zh: '實習工程師', en: 'Engineering Intern' },
      period: { zh: '2023.02 - 2023.06', en: '2023.02 - 2023.06' },
      filename: 'ctbc.ts',
      tags: ['Angular', 'Java', 'Spring Boot', 'RPA'],
      description: {
        zh: [
          '實習工程師，負責 RPA 流程自動化、Angular 前端開發與 Java/Spring Boot 後端開發',
        ],
        en: [
          'Engineering intern, responsible for RPA process automation, Angular frontend and Java/Spring Boot backend development',
        ],
      },
    },
    {
      id: 'cathay',
      company: { zh: '國泰人壽保險股份有限公司', en: 'Cathay Life Insurance Co., Ltd.' },
      title: { zh: '實習工程師', en: 'Engineering Intern' },
      period: { zh: '2022.07 - 2023.01', en: '2022.07 - 2023.01' },
      filename: 'cathay.ts',
      tags: ['Vue', 'Java', 'Spring Boot', 'PostgreSQL'],
      description: {
        zh: [
          '實習工程師，負責 Vue 前端開發、Java/Spring Boot 後端開發與 PostgreSQL 資料庫操作，參與全端開發',
        ],
        en: [
          'Engineering intern, responsible for Vue frontend, Java/Spring Boot backend and PostgreSQL database operations, participated in full-stack development',
        ],
      },
    },
  ],
  education: [
    {
      id: 'nutc',
      school: { zh: '國立台中科技大學', en: 'National Taichung University of Science and Technology' },
      degree: { zh: '學士', en: 'Bachelor' },
      major: { zh: '資訊管理系', en: 'Information Management' },
      period: { zh: '2019 - 2023', en: '2019 - 2023' },
      filename: 'nutc.ts',
    },
  ],
  projects: [
    {
      id: 'wowprime-qc4',
      name: { zh: '王品集團掃碼點餐系統 QC 4.0', en: 'Wowprime Group Scan-to-Order (QC 4.0)' },
      status: 'Running',
      stack: ['NestJS', 'TypeORM', 'MySQL', 'Redis', 'BullMQ', 'GKE'],
      description: {
        zh: '王品集團旗下品牌的內用／外帶掃碼點餐系統。獨立負責後端：訂單、菜單同步、Redis 購物車、揪團與支付，串接集團中台與 POS，並持續演進吃到飽與會員 SSO。',
        en: 'Dine-in / takeout scan-to-order system for Wowprime Group brands. Sole backend owner: ordering, menu sync, Redis cart, group ordering and payments, integrating group middleware and POS — now evolving toward AYCE and member SSO.',
      },
      highlights: {
        zh: ['130+ 門市線上營運', '從零建置後端與中台串接', '揪團／吃到飽／會員 SSO'],
        en: ['130+ restaurants in production', 'Backend & middleware built from scratch', 'Group ordering / AYCE / member SSO'],
      },
      archVariant: 'wowprime',
    },
    {
      id: 'einvoice-hub',
      name: { zh: '電子發票中台', en: 'E-Invoice Hub' },
      status: 'Running',
      stack: ['NestJS', 'MySQL', 'Redis', 'Bull', 'GCP'],
      description: {
        zh: '集團級電子發票引擎：統一取號、開立、作廢、折讓與加值中心上傳，支援多服務接入與外部商戶。以綠界相容 API 讓既有客戶零改碼遷移。',
        en: 'Group-level e-invoice engine: unified numbering, issuing, voiding, allowances and value-added-center uploads for multiple services and external merchants. ECPay-compatible API lets existing merchants migrate with zero code changes.',
      },
      highlights: {
        zh: ['綠界相容 API，零改碼遷移', '號碼池＋冪等／限流／熔斷', '不停機 canary 遷移'],
        en: ['ECPay-compatible API, zero-code migration', 'Number pool + idempotency / rate limit / circuit breaker', 'Zero-downtime canary migration'],
      },
      archVariant: 'einvoice',
    },
    {
      id: 'twqr-payments',
      name: { zh: 'TWQR 多銀行金流整合', en: 'Multi-Bank TWQR Payment Integration' },
      status: 'Running',
      stack: ['Node.js', 'FISC XML', 'MySQL', 'Redis'],
      description: {
        zh: '台灣 Pay TWQR 與 AFTEE 先買後付串接：從銀行端協定（FISC XML、簽章加密）到 POS、點餐、報表、通知全產品線落地。',
        en: 'Taiwan Pay TWQR and AFTEE BNPL integrations: from bank-side protocols (FISC XML, signing & encryption) all the way into POS, ordering, reporting and notification product lines.',
      },
      highlights: {
        zh: ['3 家銀行 × 主掃／被掃／退款', '跨 5 個服務同步上線', 'FISC XML／簽章／對帳'],
        en: ['3 banks × MPM / CPM / refunds', 'Shipped across 5 services in lockstep', 'FISC XML / signing / reconciliation'],
      },
      archVariant: null,
    },
    {
      id: 'notify-migration',
      name: { zh: '推播系統遷移（LINE Notify 停服因應）', en: 'Notification Migration (LINE Notify EOL)' },
      status: 'Completed',
      stack: ['Node.js', 'Firestore', 'AWS SES'],
      description: {
        zh: 'LINE Notify 終止服務前的全平台通知系統遷移：Email＋Firestore 即時推播雙軌、訂閱管理後台、跨系統 DB 資料遷移與相容代理，如期切換。',
        en: 'Platform-wide notification migration ahead of LINE Notify shutdown: dual-track Email + Firestore realtime push, a subscription console, cross-system DB migration and a compatibility proxy — switched over on schedule.',
      },
      highlights: {
        zh: ['Email＋Firestore 雙軌推播', '訂閱管理後台', '跨系統 DB 遷移零中斷'],
        en: ['Dual-track Email + Firestore push', 'Subscription console', 'Cross-system DB migration, zero downtime'],
      },
      archVariant: null,
    },
    {
      id: 'ticketing',
      name: { zh: '票務管理平台', en: 'Ticketing Management Platform' },
      status: 'Running',
      stack: ['.NET Core', 'Vue', 'MySQL'],
      description: {
        zh: '兒童新樂園、黑膠博物館等場域的票務系統，支援線上購票、QRCode 核銷、場次管理與即時庫存。',
        en: 'Ticketing system for venues including Taipei Children’s Amusement Park and Vinyl Museum, supporting online booking, QRCode validation, session management and real-time inventory.',
      },
      highlights: {
        zh: ['即時庫存同步', '多場域整合', 'QRCode 核銷'],
        en: ['Real-time inventory sync', 'Multi-venue integration', 'QRCode validation'],
      },
      archVariant: null,
    },
    {
      id: 'rental',
      name: { zh: '租屋管理平台', en: 'Rental Management Platform' },
      status: 'Running',
      stack: ['Node.js', 'React', 'MySQL'],
      description: {
        zh: '完整的租屋管理解決方案，涵蓋房源管理、租約管理、金流串接、通知系統與門禁控管。',
        en: 'Complete rental management solution covering property management, leases, payment integration, notifications and access control.',
      },
      highlights: {
        zh: ['租約／帳單自動化', '金流與發票串接', '門禁硬體整合'],
        en: ['Automated leases & billing', 'Payment & e-invoice integration', 'Access-control hardware'],
      },
      archVariant: null,
    },
  ],
  contact: {
    phone: '+886 908268080',
    email: 'try890928@gmail.com',
    github: 'https://github.com/890928',
    linkedin: 'https://www.linkedin.com/in/vickliao',
  },
} as const;

export type Locale = 'zh' | 'en';
export type LocaleString = { zh: string; en: string };
export type ArchVariant = 'wowprime' | 'einvoice';
