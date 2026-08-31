import { resume } from '@/data/resume';
import type { Locale } from '@/i18n/config';

export interface TerminalLine {
  type: 'input' | 'output';
  content: string;
}

export function processCommand(cmd: string, locale: Locale): string | null {
  const trimmed = cmd.trim().toLowerCase();

  if (trimmed === 'clear') return null; // signals clear

  if (trimmed === 'help') {
    if (locale === 'zh') {
      return `可用指令：
  help            - 顯示可用指令
  ls              - 列出可查看的檔案
  whoami          - 我是誰
  cat about.md    - 查看關於我
  cat skills.json - 查看技能
  cat rca.log     - 查看事故處理紀錄
  open resume.pdf - 下載履歷 PDF
  clear           - 清除畫面`;
    }
    return `Available commands:
  help            - Show available commands
  ls              - List viewable files
  whoami          - Who am I
  cat about.md    - View about me
  cat skills.json - View skills
  cat rca.log     - View incident track record
  open resume.pdf - Download resume PDF
  clear           - Clear screen`;
  }

  if (trimmed === 'ls') {
    return 'about.md    skills.json    rca.log    resume.pdf    projects/';
  }

  if (trimmed === 'whoami') {
    if (locale === 'zh') {
      return `vick — 後端工程師 @ QuickClick 快一點
打造撐得住用餐尖峰的系統。想看實績？試試 'cat rca.log'`;
    }
    return `vick — backend engineer @ QuickClick
Building systems that survive the dinner rush. Try 'cat rca.log'`;
  }

  if (trimmed === 'cat about.md') {
    return `# ${resume.name[locale]}\n## ${resume.title[locale]}\n\n${resume.about[locale]}`;
  }

  if (trimmed === 'cat skills.json') {
    const skills = {
      backend: resume.skills.backend.map(s => `${s.name}: ${s.level}%`),
      devops: resume.skills.devops.map(s => `${s.name}: ${s.level}%`),
      frontend: resume.skills.frontend.map(s => `${s.name}: ${s.level}%`),
    };
    return JSON.stringify(skills, null, 2);
  }

  if (trimmed === 'cat rca.log') {
    if (locale === 'zh') {
      return `── rca.log ──────────────────────────────
[webhook 掉單]     逾時不重試 + 上游重試風暴（流量 ×20）
                   → 行級程式碼證據定位，三階段 Hotfix 根治
[234 筆訂單卡單]   多重量測 + 多日基線比對
                   → 自證我方全鏈路正常，釐清責任歸屬
[Emoji 過濾事故]   Unicode 白名單逐區段分析 → 緊急退版止血
[訂單延遲 27 分鐘] 跨 4 個服務重建日誌證據鏈與完整時間線
─────────────────────────────────────────
11+ 篇正式 RCA｜時間線 → 證據 → 根因 → 止血 + 結構解`;
    }
    return `── rca.log ──────────────────────────────
[dropped webhooks]  no-retry-on-timeout + upstream retry storm (×20 traffic)
                    → pinpointed with line-level code evidence, 3-stage hotfix
[234 stuck orders]  multi-source measurements + multi-day baselines
                    → proved our chain healthy end-to-end, clarified ownership
[emoji incident]    Unicode whitelist analysis → emergency rollback
[27-min delay]      rebuilt the log evidence chain across 4 services
─────────────────────────────────────────
11+ formal RCAs | timeline → evidence → root cause → hotfix + structural fix`;
  }

  if (trimmed === 'sudo hire-me' || trimmed === 'sudo hire me') {
    if (locale === 'zh') {
      return `[sudo] vick 的密碼：********
權限提升成功 ✔

聘用流程已啟動：
  1. 寄信至 ${resume.contact.email}
  2. 我會在 24 小時內回覆（比我們的 webhook retry 還快）`;
    }
    return `[sudo] password for vick: ********
Access granted ✔

Hiring pipeline initiated:
  1. Email ${resume.contact.email}
  2. I reply within 24h (faster than our webhook retries)`;
  }

  if (trimmed === 'open resume.pdf') {
    return '__OPEN_RESUME__';
  }

  if (locale === 'zh') {
    return `指令未找到: '${cmd.trim()}'。輸入 'help' 查看可用指令。`;
  }
  return `Command not found: '${cmd.trim()}'. Type 'help' for available commands.`;
}
