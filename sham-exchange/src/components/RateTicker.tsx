'use client';
import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TickerRate {
  code: string;
  name: string;
  rate: number;
  change: number;
  flag: string;
}

const FALLBACK_RATES: TickerRate[] = [
  { code: 'USD', name: 'دولار أمريكي', rate: 13150, change: 0.5, flag: '🇺🇸' },
  { code: 'EUR', name: 'يورو', rate: 14320, change: -0.3, flag: '🇪🇺' },
  { code: 'SAR', name: 'ريال سعودي', rate: 3506, change: 0.1, flag: '🇸🇦' },
  { code: 'AED', name: 'درهم إماراتي', rate: 3580, change: 0.2, flag: '🇦🇪' },
  { code: 'TRY', name: 'ليرة تركية', rate: 395, change: -1.2, flag: '🇹🇷' },
  { code: 'GBP', name: 'جنيه إسترليني', rate: 16750, change: 0.8, flag: '🇬🇧' },
  { code: 'KWD', name: 'دينار كويتي', rate: 42800, change: 0.1, flag: '🇰🇼' },
  { code: 'JOD', name: 'دينار أردني', rate: 18540, change: -0.1, flag: '🇯🇴' },
];

export default function RateTicker() {
  const [rates, setRates] = useState<TickerRate[]>(FALLBACK_RATES);

  return (
    <div style={{ background: '#060F19', borderBottom: '1px solid rgba(201,168,76,0.15)', padding: '8px 0', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{
          background: 'linear-gradient(135deg, #C9A84C, #E8C96B)',
          color: '#0D1B2A',
          padding: '4px 16px',
          fontSize: 12,
          fontWeight: 700,
          whiteSpace: 'nowrap',
          zIndex: 2
        }}>
          🔴 مباشر
        </div>
        <div style={{ overflow: 'hidden', flex: 1, position: 'relative' }}>
          <div className="ticker-content" style={{ display: 'inline-flex', gap: 40, paddingRight: 40 }}>
            {[...rates, ...rates].map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
                <span>{r.flag}</span>
                <span style={{ color: '#C9A84C', fontWeight: 600 }}>{r.code}/SYP</span>
                <span style={{ color: 'white', fontWeight: 700 }}>{r.rate.toLocaleString('ar')}</span>
                <span style={{ color: r.change >= 0 ? '#10B981' : '#EF4444', display: 'flex', alignItems: 'center', gap: 2 }}>
                  {r.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {Math.abs(r.change)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
