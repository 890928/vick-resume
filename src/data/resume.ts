export const resume = {
  name: {
    zh: '廖致翰',
    en: 'Vick Liao',
  },
  title: {
    zh: '全端工程師',
    en: 'Full-Stack Engineer',
  },
  subtitle: {
    zh: '以後端為核心，打造可擴展的系統架構',
    en: 'Backend-focused, building scalable system architectures',
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
    zh: '具備 2~3 年工作經驗的研發工程師，專精 Node.js / NestJS 後端架構設計與 React 前端開發。曾於 QuickClick 擔任 PO 兼後端 RD，主導自營 POS 系統與第三方外送平台 API 串接模組開發。熟悉 .NET Core、Docker 容器化部署與 CI/CD 流程，具備金融業（中國信託、國泰人壽）實習經歷，致力於以工程思維解決實際商業問題。',
    en: 'R&D engineer with 2-3 years of experience, specializing in Node.js/NestJS backend architecture and React frontend development. Served as PO and backend RD at QuickClick, leading self-developed POS system and third-party delivery platform API integration. Proficient in .NET Core, Docker containerization and CI/CD pipelines, with internship experience in finance (CTBC, Cathay Life). Committed to solving real business problems with engineering thinking.',
  },
  typewriterWords: ['Full-Stack Engineer', 'Node.js', 'NestJS', '.NET Core', 'React', 'Docker'],
  skills: {
    frontend: [
      { name: 'React', level: 85 },
      { name: 'Vue', level: 65 },
      { name: 'Angular', level: 55 },
      { name: 'HTML/CSS', level: 90 },
    ],
    backend: [
      { name: 'Node.js', level: 90 },
      { name: 'NestJS', level: 88 },
      { name: '.NET Core', level: 70 },
      { name: 'Java/Spring', level: 55 },
    ],
    devops: [
      { name: 'Docker', level: 80 },
      { name: 'K8s', level: 45 },
      { name: 'MySQL', level: 85 },
      { name: 'Git/CI-CD', level: 82 },
    ],
  },
  experience: [
    {
      id: 'quickclick',
      company: { zh: 'QuickClick快一點 / 點點全球股份有限公司', en: 'QuickClick / DianDian Global Co., Ltd.' },
      title: { zh: '後端工程師', en: 'Backend Engineer' },
      period: { zh: '2024.09 - 至今', en: '2024.09 - Present' },
      filename: 'quickclick.ts',
      tags: ['Node.js', 'NestJS', 'MySQL', 'Docker', 'Jira', 'ELK'],
      description: {
        zh: [
          '產品類型：餐飲 POS 系統、外送平台整合、QRCode 掃碼點餐系統、硬體設備串接',
          '曾擔任 QC 點餐系統 PO / 後端 RD，主導開發維運自營 POS 系統與第三方平台（Foodpanda / UberEats）API 串接模組，提升訂單同步率並減少人工作業 50%',
          '建置 QRCode 點餐模組，整合付款流程與通知機制，優化使用者體驗並降低點餐錯誤率',
          '參與架構重構（從傳統 Node.js Express 過渡至模組化 NestJS 架構），提升維護性與測試覆蓋率',
          '撰寫 ERD 與進行 Code Review，協助團隊提升整體程式碼品質與技術水準',
          '透過系統串接各種硬體設備，提供給用戶更好的系統體驗',
          '王品點餐專案開發',
        ],
        en: [
          'Products: F&B POS system, delivery platform integration, QRCode scan-to-order system, hardware device integration',
          'Served as QC ordering system PO / Backend RD, led development and operation of self-developed POS system and third-party platform (Foodpanda/UberEats) API integration, improving order sync rate and reducing manual work by 50%',
          'Built QRCode ordering module with integrated payment flow and notification mechanism, optimizing UX and reducing ordering error rate',
          'Participated in architecture migration (from traditional Node.js Express to modular NestJS architecture), improving maintainability and test coverage',
          'Authored ERD and conducted Code Reviews, helping team improve overall code quality and technical standards',
          'Integrated various hardware devices via system APIs, providing users with better system experience',
          'Wowprime Group ordering project development',
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
          '擔任後端工程師，主要負責維運公司產品以及開發外包新專案',
          '產品類型：會員服務平台、App 訂單系統、租屋管理平台、售票平台',
          '開發租屋管理平台，負責 QRCode 掃碼與通知模組，串接 LINE Notify、簡訊服務等外部服務、第三方金流服務、發票服務',
          '開發企業後台系統，後台設定可以經營企業的外部形象',
          '協助規劃與實作會員中心模組，包括帳號綁定、通知偏好、統計報表等功能',
          '各種硬體設備串接',
          '熟悉 Git Flow 開發流程，並參與 Jenkins 自動化部署環境維護',
          '透過 Docker 手動部署小型專案',
        ],
        en: [
          'Served as backend engineer, responsible for maintaining company products and developing outsourced projects',
          'Products: membership service platform, App ordering system, rental management platform, ticketing platform',
          'Developed rental management platform with QRCode scanning and notification modules, integrating LINE Notify, SMS services, third-party payment and invoice services',
          'Built enterprise admin system enabling businesses to manage their external brand presence',
          'Assisted in planning and implementing membership center module including account binding, notification preferences, and analytics dashboards',
          'Integrated various hardware devices',
          'Proficient in Git Flow development process, participated in Jenkins CI/CD pipeline maintenance',
          'Deployed small-scale projects via Docker',
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
  projects: [
    {
      id: 'quickclick-platform',
      name: { zh: 'QuickClick 外送整合平台', en: 'QuickClick Delivery Integration Platform' },
      status: 'Running',
      stack: ['NestJS', 'React', 'MySQL', 'Redis', 'Docker'],
      description: {
        zh: '整合 Foodpanda / UberEats 雙平台的外送訂單管理系統，支援 QRCode 點餐、即時訂單同步、多門市管理',
        en: 'Delivery order management system integrating Foodpanda/UberEats dual platforms, supporting QRCode ordering, real-time order sync, multi-store management',
      },
      highlights: {
        zh: ['100,000+ 訂單處理', '5,000+ 合作店家', '客訴率降低 80%'],
        en: ['100,000+ orders processed', '5,000+ partner stores', '80% reduction in complaints'],
      },
      hasArchDiagram: true,
    },
    {
      id: 'ticketing',
      name: { zh: '票務管理平台', en: 'Ticketing Management Platform' },
      status: 'Running',
      stack: ['.NET Core', 'Vue', 'MySQL'],
      description: {
        zh: '兒童新樂園、黑膠博物館等場域的票務系統，支援線上購票、QRCode 核銷、場次管理與即時庫存',
        en: 'Ticketing system for venues including Taipei Children\'s Amusement Park and Vinyl Museum, supporting online booking, QRCode validation, session management and real-time inventory',
      },
      highlights: {
        zh: ['即時庫存同步', '多場域整合', 'QRCode 核銷'],
        en: ['Real-time inventory sync', 'Multi-venue integration', 'QRCode validation'],
      },
      hasArchDiagram: false,
    },
    {
      id: 'rental',
      name: { zh: '租屋管理平台', en: 'Rental Management Platform' },
      status: 'Running',
      stack: ['Node.js', 'React', 'MySQL'],
      description: {
        zh: '完整的租屋管理解決方案，涵蓋房源管理、租約管理、金流串接、通知系統',
        en: 'Complete rental management solution covering property management, lease management, payment integration, notification system',
      },
      highlights: {
        zh: ['完整 CRUD 管理', '金流串接', '自動化通知'],
        en: ['Full CRUD management', 'Payment integration', 'Automated notifications'],
      },
      hasArchDiagram: false,
    },
    {
      id: 'posture-detection',
      name: { zh: '坐姿偵測系統（Side Project）', en: 'Posture Detection System (Side Project)' },
      status: 'Stopped',
      stack: ['Python', 'OpenCV', 'TensorFlow'],
      description: {
        zh: '使用電腦視覺技術偵測使用者坐姿，即時提醒不良姿勢，學生時期專案',
        en: 'Computer vision-based posture detection system that provides real-time alerts for poor posture, student project',
      },
      highlights: {
        zh: ['即時影像偵測', '機器學習模型', '學生專案'],
        en: ['Real-time video detection', 'ML model', 'Student project'],
      },
      hasArchDiagram: false,
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
