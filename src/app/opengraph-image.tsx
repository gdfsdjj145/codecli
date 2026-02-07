import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'CodeCli - Claude Code API 服务';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0c1117 0%, #1a2332 50%, #0c1117 100%)',
          position: 'relative',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.05,
            backgroundImage:
              'linear-gradient(rgba(0,171,182,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,171,182,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            display: 'flex',
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,171,182,0.15) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-2px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px',
            }}
          >
            Code
            <span style={{ color: '#00abb6' }}>Cli</span>
          </div>
          <div
            style={{
              fontSize: 32,
              color: 'rgba(255,255,255,0.7)',
              letterSpacing: '-0.5px',
              display: 'flex',
            }}
          >
            专业的 Claude Code API 中转服务平台
          </div>
          <div
            style={{
              marginTop: '32px',
              padding: '10px 28px',
              borderRadius: '999px',
              background: 'rgba(0,171,182,0.15)',
              border: '1px solid rgba(0,171,182,0.3)',
              color: '#00abb6',
              fontSize: 18,
              fontWeight: 600,
              display: 'flex',
            }}
          >
            codecli.dev
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
