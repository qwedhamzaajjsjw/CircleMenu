'use client';
import { useState, useEffect, useCallback } from 'react';
import { RefreshCw, Search, TrendingUp, TrendingDown, Info } from 'lucide-react';

interface Rate {
  code: string;
  name: string;
  flag: string;
  buy: number;
  sell: number;
  change: number;
  category: string;
}

const FLAG_MAP: Record<string, string> = {
  USD: '🇺🇸', EUR: '🇪🇺', GBP: '🇬🇧', CHF: '🇨🇭', JPY: '🇯🇵',
  CAD: '🇨🇦', AUD: '🇦🇺', SAR: '🇸🇦', AED: '🇦🇪', KWD: '🇰🇼',
  BHD: '🇧🇭', QAR: '🇶🇦', OMR: '🇴🇲', JOD: '🇯🇴', EGP: '🇪🇬',
  LBP: '🇱🇧', IQD: '🇮🇶', TRY: '🇹🇷', IRR: '🇮🇷', CNY: '🇨🇳',
  INR: '🇮🇳', RUB: '🇷🇺', SEK: '🇸🇪', NOK: '🇳🇴',
};

const CATEGORY_MAP: Record<string, string> = {
  USD: 'رئيسية', EUR: 'رئيسية', GBP: 'رئيسية', CHF: 'رئيسية',
  JPY: 'رئيسية', CAD: 'رئيسية', AUD: 'رئيسية',
  SAR: 'خليجية', AED: 'خليجية', KWD: 'خليجية', BHD: 'خليجية', QAR: 'خليجية', OMR: 'خليجية',
  JOD: 'عربية', EGP: 'عربية', LBP: 'عربية', IQD: 'عربية',
  TRY: 'إقليمية', IRR: 'إقليمية',
  CNY: 'آسيوية', INR: 'آسيوية',
  RUB: 'أخرى', SEK: 'أوروبية', NOK: 'أوروبية',
};

const FALLBACK_RATES: Rate[] = [
  { code: 'USD', name: 'دولار أمريكي', flag: '🇺🇸', buy: 13120, sell: 13180, change: 0.5, category: 'رئيسية' },
  { code: 'EUR', name: 'يورو أوروبي', flag: '🇪🇺', buy: 14290, sell: 14360, change: -0.3, category: 'رئيسية' },
  { code: 'GBP', name: 'جنيه إسترليني', flag: '🇬🇧', buy: 16700, sell: 16800, change: 0.8, category: 'رئيسية' },
  { code: 'SAR', name: 'ريال سعودي', flag: '🇸🇦', buy: 3494, sell: 3518, change: 0.1, category: 'خليجية' },
  { code: 'AED', name: 'درهم إماراتي', flag: '🇦🇪', buy: 3565, sell: 3595, change: 0.2, category: 'خليجية' },
  { code: 'TRY', name: 'ليرة تركية', flag: '🇹🇷', buy: 389, sell: 401, change: -1.2, category: 'إقليمية' },
];

const CATEGORIES = ['الكل', 'رئيسية', 'خليجية', 'عربية', 'إقليمية', 'آسيوية', 'أوروبية', 'أخرى'];

export default function RatesPage() {
  const [rates, setRates] = useState<Rate[]>(FALLBACK_RATES);
  const [filtered, setFiltered] = useState<Rate[]>(FALLBACK_RATES);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('الكل');
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState('');
  const [apiError, setApiError] = useState('');
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    setLastUpdate(new Date().toLocaleTimeString('ar-SY'));
  }, [rates]);

  useEffect(() => {
    let result = rates;
    if (category !== 'الكل') result = result.filter(r => r.category === category);
    if (search) result = result.filter(r =>
      r.code.toLowerCase().includes(search.toLowerCase()) ||
      r.name.includes(search)
    );
    setFiltered(result);
  }, [search, category, rates]);

  const fetchLiveRates = useCallback(async () => {
    setLoading(true);
    setApiError('');
    try {
      const res = await fetch('/api/rates?type=currencies&city=damascus');
      const data = await res.json();

      if (!data.ok) {
        setApiError(data.error || 'خطأ في الاتصال بالخادم');
        setLoading(false);
        return;
      }

      const currencies = data.data?.currencies || data.data?.rates || [];

      if (currencies.length === 0) {
        setApiError('لم يتم استلام بيانات من الخادم');
        setLoading(false);
        return;
      }

      const mapped: Rate[] = currencies.map((c: {
        code: string;
        name_ar?: string;
        name?: string;
        flag?: string;
        cities?: { damascus?: { buy?: number; sell?: number; change?: number } };
      }) => {
        const damascus = c.cities?.damascus || {};
        return {
          code: c.code,
          name: c.name_ar || c.name || c.code,
          flag: c.flag || FLAG_MAP[c.code] || '🏳️',
          buy: damascus.buy || 0,
          sell: damascus.sell || 0,
          change: damascus.change || 0,
          category: CATEGORY_MAP[c.code] || 'أخرى',
        };
      }).filter((r: Rate) => r.buy > 0);

      setRates(mapped);
      setIsLive(true);
      setLastUpdate(new Date().toLocaleTimeString('ar-SY'));
    } catch {
      setApiError('تعذر الاتصال. يتم عرض الأسعار المحفوظة.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Auto-fetch on load
  useEffect(() => {
    fetchLiveRates();
  }, [fetchLiveRates]);

  return (
    <div style={{ padding: '60px 24px', maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 12 }}>
          <span className="text-gold-gradient">أسعار الصرف</span> اليومية
        </h1>
        <div className="section-divider" />
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', marginTop: 16 }}>
          أسعار الصرف محدثة مباشرة من موقع الليرة اليوم
        </p>
      </div>

      {/* Live rates bar */}
      <div className="glass-card" style={{ padding: '20px 24px', marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 10, height: 10, borderRadius: '50%',
            background: isLive ? '#10B981' : '#F59E0B',
            boxShadow: isLive ? '0 0 0 3px rgba(16,185,129,0.2)' : '0 0 0 3px rgba(245,158,11,0.2)'
          }} />
          <span style={{ fontSize: 15, color: 'white' }}>
            {isLive ? 'أسعار مباشرة' : 'أسعار محفوظة'} — آخر تحديث:{' '}
            <strong style={{ color: '#C9A84C' }}>{lastUpdate}</strong>
          </span>
        </div>
        <button
          onClick={fetchLiveRates}
          className="btn-gold"
          style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', fontSize: 14 }}
          disabled={loading}
        >
          <RefreshCw size={16} style={{ animation: loading ? 'spin 0.8s linear infinite' : 'none' }} />
          {loading ? 'جاري التحديث...' : 'تحديث الأسعار'}
        </button>
      </div>

      {/* API error notice */}
      {apiError && (
        <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 12, padding: '14px 20px', marginBottom: 24, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <Info size={18} style={{ color: '#EF4444', marginTop: 2, flexShrink: 0 }} />
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
            <strong style={{ color: '#EF4444' }}>تنبيه: </strong>{apiError}
            <div style={{ marginTop: 8, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
              تأكد من إضافة مفتاح API في ملف <code style={{ color: '#C9A84C' }}>.env.local</code> بالشكل:{' '}
              <code style={{ color: '#C9A84C' }}>SPTODAY_API_KEY=مفتاحك</code>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 28, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
          <Search size={16} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: '#C9A84C' }} />
          <input
            type="text"
            placeholder="ابحث عن عملة..."
            className="input-gold"
            style={{ paddingRight: 44 }}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                padding: '8px 16px', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer', border: 'none',
                background: category === cat ? 'linear-gradient(135deg, #C9A84C, #E8C96B)' : 'rgba(255,255,255,0.06)',
                color: category === cat ? '#0D1B2A' : 'rgba(255,255,255,0.7)',
                transition: 'all 0.2s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="glass-card" style={{ overflow: 'hidden', padding: 0 }}>
        <div style={{ padding: '14px 24px', background: 'rgba(201,168,76,0.08)', display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr 1fr 1fr', gap: 8, fontSize: 13, fontWeight: 600 }}>
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>العملة</span>
          <span style={{ color: '#10B981', textAlign: 'center' }}>سعر الشراء (ل.س)</span>
          <span style={{ color: '#EF4444', textAlign: 'center' }}>سعر البيع (ل.س)</span>
          <span style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>التغيير</span>
          <span style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>الفئة</span>
        </div>
        {loading ? (
          <div style={{ padding: 40, textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>
            جاري تحميل الأسعار...
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ padding: 40, textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>
            لا توجد نتائج مطابقة
          </div>
        ) : (
          filtered.map((rate, i) => (
            <div
              key={rate.code}
              style={{
                display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr 1fr 1fr',
                gap: 8, padding: '14px 24px', alignItems: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 24 }}>{rate.flag}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{rate.code}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{rate.name}</div>
                </div>
              </div>
              <div style={{ textAlign: 'center', fontWeight: 700, color: '#10B981', fontSize: 16 }}>
                {rate.buy >= 1 ? rate.buy.toLocaleString('ar') : rate.buy.toFixed(3)}
              </div>
              <div style={{ textAlign: 'center', fontWeight: 700, color: '#EF4444', fontSize: 16 }}>
                {rate.sell >= 1 ? rate.sell.toLocaleString('ar') : rate.sell.toFixed(3)}
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  color: rate.change >= 0 ? '#10B981' : '#EF4444',
                  fontSize: 14, fontWeight: 600
                }}>
                  {rate.change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {Math.abs(rate.change)}%
                </span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: 12, background: 'rgba(201,168,76,0.15)', color: '#C9A84C', padding: '3px 10px', borderRadius: 12, fontWeight: 600 }}>
                  {rate.category}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Source */}
      <div style={{ marginTop: 24, padding: '14px 20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12 }}>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textAlign: 'center', lineHeight: 1.6 }}>
          ⚠️ تنبيه: الأسعار المعروضة للاسترشاد فقط وقد تتغير في أي وقت. المصدر: موقع الليرة اليوم (sp-today.com)
        </p>
      </div>
    </div>
  );
}
