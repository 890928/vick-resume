import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = '廖致翰 Vick Liao | Full-Stack Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0D1117',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'monospace',
        }}
      >
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
          <span style={{ color: '#8B949E', fontSize: '16px', marginLeft: '12px' }}>
            vick@portfolio:~$
          </span>
        </div>

        {/* Name */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '16px' }}>
          <span
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #00FF41, #00D1FF)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Vick Liao
          </span>
          <span style={{ fontSize: '36px', color: '#8B949E' }}>廖致翰</span>
        </div>

        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
          <span style={{ color: '#00D1FF', fontSize: '28px' }}>~/</span>
          <span style={{ color: '#E6EDF3', fontSize: '28px' }}>Full-Stack Engineer</span>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['Node.js', 'NestJS', 'React', '.NET Core', 'Docker', 'MySQL'].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '18px',
                padding: '6px 16px',
                border: '1px solid #21262D',
                borderRadius: '20px',
                color: '#00FF41',
                background: 'rgba(0, 255, 65, 0.05)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom subtitle */}
        <div style={{ marginTop: '40px', color: '#8B949E', fontSize: '18px' }}>
          Backend-focused, building scalable system architectures
        </div>
      </div>
    ),
    { ...size }
  );
}
