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
  phone: '0908268080',
  email: 'try890928@gmail.com',
  github: 'https://github.com/890928',
  linkedin: 'https://www.linkedin.com/in/vickliao',
  about: {
    zh: '具備 3 年以上全端開發經驗的工程師，專精 Node.js / NestJS 後端架構設計與 React 前端開發。曾主導外送整合平台從 Express 到 NestJS 的架構遷移，服務超過 150 間門市、日處理 5,000+ 筆訂單。熟悉 Docker 容器化部署與 CI/CD 流程，致力於以工程思維解決實際商業問題。',
    en: 'Full-stack engineer with 3+ years of experience, specializing in Node.js/NestJS backend architecture and React frontend development. Led the architecture migration of a delivery integration platform from Express to NestJS, serving 150+ stores with 5,000+ daily orders. Proficient in Docker containerization and CI/CD pipelines, committed to solving real business problems with engineering thinking.',
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
      company: { zh: 'QuickClick 快點科技', en: 'QuickClick Technology' },
      title: { zh: '全端工程師', en: 'Full-Stack Engineer' },
      period: { zh: '2022.06 - 至今', en: '2022.06 - Present' },
      filename: 'quickclick.ts',
      tags: ['NestJS', 'React', 'MySQL', 'Docker', 'Redis'],
      description: {
        zh: [
          '主導外送整合平台架構重構，從 Express 單體遷移至 NestJS 模組化架構，提升程式碼可維護性與團隊開發效率',
          '串接 Foodpanda / UberEats 雙平台 API，整合超過 100,000+ 筆訂單數據，服務 5,000+ 間合作店家',
          '開發 QRCode 掃碼點餐模組，支援 150+ 間門市使用，日均處理 5,000+ 筆訂單，客訴率降低 80% 以上',
          '負責王品集團專案，為 10 人團隊進行技術架構設計與 API 規格制定',
          '導入 Docker 容器化部署流程，搭配 CI/CD 自動化，大幅降低部署風險與人工營運成本',
        ],
        en: [
          'Led architecture migration of delivery integration platform from Express monolith to NestJS modular architecture, improving code maintainability and team development efficiency',
          'Integrated Foodpanda/UberEats dual-platform APIs, processing 100,000+ order records, serving 5,000+ partner stores',
          'Developed QRCode scan-to-order module serving 150+ stores, handling 5,000+ daily orders, reducing customer complaints by 80%+',
          'Led technical architecture design and API specification for Wowprime Group project with 10-person team',
          'Implemented Docker containerized deployment with CI/CD automation, significantly reducing deployment risk and operational costs',
        ],
      },
    },
    {
      id: 'cloudlife',
      company: { zh: '雲端生活家', en: 'CloudLife' },
      title: { zh: '後端工程師', en: 'Backend Engineer' },
      period: { zh: '2021.03 - 2022.05', en: '2021.03 - 2022.05' },
      filename: 'cloudlife.ts',
      tags: ['Node.js', '.NET Core', 'MySQL', 'Vue'],
      description: {
        zh: [
          '開發租屋管理平台，實作房源管理、租約管理、金流串接等核心模組，服務數千名房東與租客',
          '負責票務平台後端開發（兒童新樂園、黑膠博物館），處理票券核銷、場次管理與即時庫存同步',
          '使用 .NET Core 與 Node.js 雙技術棧進行開發，依專案需求靈活選擇技術方案',
        ],
        en: [
          'Developed rental management platform with property management, lease management, and payment integration modules, serving thousands of landlords and tenants',
          'Built ticketing platform backend (Taipei Children\'s Amusement Park, Vinyl Museum) handling ticket validation, session management, and real-time inventory sync',
          'Worked with dual tech stacks (.NET Core & Node.js), flexibly choosing technologies based on project requirements',
        ],
      },
    },
    {
      id: 'intern',
      company: { zh: '實習經歷', en: 'Internship' },
      title: { zh: '軟體工程實習生', en: 'Software Engineering Intern' },
      period: { zh: '2020.07 - 2021.02', en: '2020.07 - 2021.02' },
      filename: 'intern.ts',
      tags: ['JavaScript', 'Python', 'SQL'],
      description: {
        zh: [
          '參與內部工具開發，協助自動化流程建置與資料庫維護，奠定軟體工程基礎能力',
        ],
        en: [
          'Participated in internal tool development, assisted in automation workflow setup and database maintenance, building foundational software engineering skills',
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
    phone: '0908268080',
    email: 'try890928@gmail.com',
    github: 'https://github.com/890928',
    linkedin: 'https://www.linkedin.com/in/vickliao',
  },
} as const;

export type Locale = 'zh' | 'en';
export type LocaleString = { zh: string; en: string };
