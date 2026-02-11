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
  cat about.md    - 查看關於我
  cat skills.json - 查看技能
  open resume.pdf - 下載履歷 PDF
  clear           - 清除畫面`;
    }
    return `Available commands:
  help            - Show available commands
  ls              - List viewable files
  cat about.md    - View about me
  cat skills.json - View skills
  open resume.pdf - Download resume PDF
  clear           - Clear screen`;
  }

  if (trimmed === 'ls') {
    return 'about.md    skills.json    resume.pdf    projects/';
  }

  if (trimmed === 'cat about.md') {
    return `# ${resume.name[locale]}\n## ${resume.title[locale]}\n\n${resume.about[locale]}`;
  }

  if (trimmed === 'cat skills.json') {
    const skills = {
      frontend: resume.skills.frontend.map(s => `${s.name}: ${s.level}%`),
      backend: resume.skills.backend.map(s => `${s.name}: ${s.level}%`),
      devops: resume.skills.devops.map(s => `${s.name}: ${s.level}%`),
    };
    return JSON.stringify(skills, null, 2);
  }

  if (trimmed === 'open resume.pdf') {
    return '__OPEN_RESUME__';
  }

  if (locale === 'zh') {
    return `指令未找到: '${cmd.trim()}'。輸入 'help' 查看可用指令。`;
  }
  return `Command not found: '${cmd.trim()}'. Type 'help' for available commands.`;
}
