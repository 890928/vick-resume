'use client';

import { useTranslations } from 'next-intl';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';
import { resume } from '@/data/resume';
import { useState } from 'react';

const categories = ['frontend', 'backend', 'devops'] as const;

const colors: Record<string, string> = {
  frontend: '#00FF41',
  backend: '#00BFFF',
  devops: '#FF6B6B',
};

export default function SkillRadar() {
  const t = useTranslations('about');
  const [active, setActive] = useState<string>('backend');

  const data = resume.skills[active as keyof typeof resume.skills].map((skill) => ({
    name: skill.name,
    value: skill.level,
  }));

  return (
    <div className="space-y-4">
      <h3 className="text-terminal-green text-sm font-bold">{t('skills_title')}</h3>

      {/* Category tabs */}
      <div className="flex gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-3 py-1 text-xs border transition-all duration-200 ${
              active === cat
                ? 'border-terminal-green text-terminal-green bg-terminal-green/10'
                : 'border-card-border text-text-muted hover:border-text-muted'
            }`}
          >
            {t(cat)}
          </button>
        ))}
      </div>

      {/* Radar chart */}
      <div className="w-full h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
            <PolarGrid stroke="#21262D" />
            <PolarAngleAxis
              dataKey="name"
              tick={{ fill: '#8B949E', fontSize: 11 }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{ fill: '#8B949E', fontSize: 9 }}
              axisLine={false}
            />
            <Radar
              dataKey="value"
              stroke={colors[active]}
              fill={colors[active]}
              fillOpacity={0.2}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Skill bars fallback */}
      <div className="space-y-2">
        {data.map((skill) => (
          <div key={skill.name} className="flex items-center gap-3 text-xs">
            <span className="w-20 text-text-muted">{skill.name}</span>
            <div className="flex-1 h-1.5 bg-card-border rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${skill.value}%`,
                  backgroundColor: colors[active],
                }}
              />
            </div>
            <span className="text-text-muted w-8 text-right">{skill.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
