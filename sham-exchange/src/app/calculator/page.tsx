'use client';
import { useState, useCallback } from 'react';
import { ArrowLeftRight, Calculator, RefreshCw } from 'lucide-react';

const CURRENCIES = [
  { code: 'SYP', name: 'ليرة سورية', flag: '🇸🇾', rateToUSD: 13150 },
  { code: 'USD', name: 'دولار أمريكي', flag: '🇺🇸', rateToUSD: 1 },
  { code: 'EUR', name: 'يورو', flag: '🇪🇺', rateToUSD: 1.093 },
  { code: 'GBP', name: 'جنيه إسترليني', flag: '🇬🇧', rateToUSD: 1.278 },
  { code: 'SAR', name: 'ريال سعودي', flag: '🇸🇦', rateToUSD: 0.2666 },
  { code: 'AED', name: 'درهم إماراتي', flag: '🇦🇪', rateToUSD: 0.2723 },
  { code: 'KWD', name: 'دينار كويتي', flag: '🇰🇼', rateToUSD: 3.252 },
  { code: 'BHD', name: 'دينار بحريني', flag: '🇧🇭', rateToUSD: 2.652 },
  { code: 'QAR', name: 'ريال قطري', flag: '🇶🇦', rateToUSD: 0.2747 },
  { code: 'OMR', name: 'ريال عماني', flag: '🇴🇲', rateToUSD: 2.597 },
  { code: 'JOD', name: 'دينار أردني', flag: '🇯🇴', rateToUSD: 1.411 },
  { code: 'EGP', name: 'جنيه مصري', flag: '🇪🇬', rateToUSD: 0.0203 },
  { code: 'TRY', name: 'ليرة تركية', flag: '🇹🇷', rateToUSD: 0.0297 },
  { code: 'CHF', name: 'فرنك سويسري', flag: '🇨🇭', rateToUSD: 1.117 },
  { code: 'JPY', name: 'ين ياباني', flag: '🇯🇵', rateToUSD: 0.0067 },
  { code: 'CAD', name: 'دولار كندي', flag: '🇨🇦', rateToUSD: 0.735 },
  { code: 'AUD', name: 'دولار أسترالي', flag: '🇦🇺', rateToUSD: 0.649 },
  { code: 'CNY', name: 'يوان صيني', flag: '🇨🇳', rateToUSD: 0.138 },
  { code: 'RUB', name: 'روبل روسي', flag: '🇷🇺', rateToUSD: 0.011 },
];

export default function CalculatorPage() {
  const [amount, setAmount] = useState('100');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('SYP');
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const getCurrency = (code: string) => CURRENCIES.find(c => c.code === code)!;

  const calculate = useCallback(() => {
    const num = parseFloat(amount);
    if (isNaN(num) || num <= 0) return;
    setLoading(true);
    setTimeout(() => {
      const from = getCurrency(fromCurrency);
      const to = getCurrency(toCurrency);
      const usdAmount = num * from.rateToUSD;
      const converted = usdAmount / to.rateToUSD;
      setResult(converted);
      setLoading(false);
    }, 300);
  }, [amount, fromCurrency, toCurrency]);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult(null);
  };

  const fromC = getCurrency(fromCurrency);
  const toC = getCurrency(toCurrency);

  const QUICK_AMOUNTS = [100, 500, 1000, 5000, 10000, 50000];

  return (
    <div style={{ padding: '60px 24px', maxWidth: 900, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(201,168,76,0.15)', border: '2px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <Calculator size={36} style={{ color: '#C9A84C' }} />
        </div>
        <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 12 }}>
          <span className="text-gold-gradient">حاسبة العملات</span>
        </h1>
        <div className="section-divider" />
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', marginTop: 16 }}>
          احسب قيمة عملتك بسهولة وسرعة مع أحدث أسعار الصرف
        </p>
      </div>

      {/* Calculator Card */}
      <div className="glass-card" style={{ padding: 40, marginBottom: 32 }}>
        {/* Amount */}
        <div style={{ marginBottom: 28 }}>
          <label style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 8, fontWeight: 600 }}>المبلغ</label>
          <input
            type="number"
            className="input-gold"
            value={amount}
            onChange={e => { setAmount(e.target.value); setResult(null); }}
            placeholder="أدخل المبلغ"
            style={{ fontSize: 24, fontWeight: 700, padding: '16px 20px' }}
          />
          <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
            {QUICK_AMOUNTS.map(a => (
              <button
                key={a}
                onClick={() => { setAmount(String(a)); setResult(null); }}
                style={{
                  padding: '6px 14px', borderRadius: 6, fontSize: 13, cursor: 'pointer', border: 'none',
                  background: amount === String(a) ? 'rgba(201,168,76,0.3)' : 'rgba(255,255,255,0.06)',
                  color: amount === String(a) ? '#C9A84C' : 'rgba(255,255,255,0.6)',
                  fontWeight: 600, transition: 'all 0.2s'
                }}
              >
                {a.toLocaleString('ar')}
              </button>
            ))}
          </div>
        </div>

        {/* Currency selectors */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 16, alignItems: 'end', marginBottom: 32 }}>
          {/* From */}
          <div>
            <label style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 8, fontWeight: 600 }}>من عملة</label>
            <select
              className="select-gold"
              value={fromCurrency}
              onChange={e => { setFromCurrency(e.target.value); setResult(null); }}
            >
              {CURRENCIES.map(c => (
                <option key={c.code} value={c.code}>{c.flag} {c.code} - {c.name}</option>
              ))}
            </select>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
              <span style={{ fontSize: 24 }}>{fromC.flag}</span>
              <span style={{ color: '#C9A84C', fontWeight: 700, fontSize: 16 }}>{fromC.name}</span>
            </div>
          </div>

          {/* Swap */}
          <button
            onClick={swap}
            style={{
              width: 48, height: 48, borderRadius: '50%',
              background: 'rgba(201,168,76,0.15)',
              border: '2px solid rgba(201,168,76,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#C9A84C', transition: 'all 0.3s',
              marginBottom: 36
            }}
            onMouseOver={e => (e.currentTarget.style.background = 'rgba(201,168,76,0.3)')}
            onMouseOut={e => (e.currentTarget.style.background = 'rgba(201,168,76,0.15)')}
          >
            <ArrowLeftRight size={20} />
          </button>

          {/* To */}
          <div>
            <label style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 8, fontWeight: 600 }}>إلى عملة</label>
            <select
              className="select-gold"
              value={toCurrency}
              onChange={e => { setToCurrency(e.target.value); setResult(null); }}
            >
              {CURRENCIES.map(c => (
                <option key={c.code} value={c.code}>{c.flag} {c.code} - {c.name}</option>
              ))}
            </select>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
              <span style={{ fontSize: 24 }}>{toC.flag}</span>
              <span style={{ color: '#C9A84C', fontWeight: 700, fontSize: 16 }}>{toC.name}</span>
            </div>
          </div>
        </div>

        {/* Calculate button */}
        <button
          onClick={calculate}
          className="btn-gold"
          style={{ width: '100%', fontSize: 18, padding: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}
          disabled={loading}
        >
          <RefreshCw size={20} style={{ animation: loading ? 'spin 0.8s linear infinite' : 'none' }} />
          {loading ? 'جاري الحساب...' : 'احسب الآن'}
        </button>

        {/* Result */}
        {result !== null && (
          <div style={{ marginTop: 28, padding: 28, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 16, textAlign: 'center' }} className="fade-in-up">
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 12 }}>نتيجة التحويل</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ fontSize: 22, fontWeight: 700 }}>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>{parseFloat(amount).toLocaleString('ar')}</span>
                <span style={{ color: '#C9A84C', marginRight: 8 }}>{fromC.flag} {fromCurrency}</span>
              </div>
              <ArrowLeftRight size={24} style={{ color: '#C9A84C' }} />
              <div style={{ fontSize: 28, fontWeight: 900 }}>
                <span style={{ color: '#C9A84C' }}>
                  {result >= 1 ? result.toLocaleString('ar', { maximumFractionDigits: 2 }) : result.toFixed(6)}
                </span>
                <span style={{ color: 'white', marginRight: 8 }}>{toC.flag} {toCurrency}</span>
              </div>
            </div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', marginTop: 16 }}>
              1 {fromCurrency} = {(getCurrency(toCurrency).rateToUSD > 0 ? getCurrency(fromCurrency).rateToUSD / getCurrency(toCurrency).rateToUSD : 0).toFixed(4)} {toCurrency}
            </div>
          </div>
        )}
      </div>

      {/* Cross rates table */}
      <div className="glass-card" style={{ padding: 28 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#C9A84C', marginBottom: 20 }}>
          أسعار التقاطع - بالليرة السورية
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12 }}>
          {CURRENCIES.filter(c => c.code !== 'SYP').slice(0, 12).map(c => {
            const syp = getCurrency('SYP');
            const rate = c.rateToUSD / syp.rateToUSD;
            return (
              <div
                key={c.code}
                onClick={() => { setFromCurrency('SYP'); setToCurrency(c.code); setResult(null); }}
                style={{
                  padding: '14px 16px', background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(201,168,76,0.15)', borderRadius: 12,
                  cursor: 'pointer', transition: 'all 0.2s'
                }}
                onMouseOver={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.1)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.4)';
                }}
                onMouseOut={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.15)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: 18 }}>{c.flag}</span>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>{c.code}</span>
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{c.name}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#C9A84C', marginTop: 6 }}>
                  {(1 / rate).toLocaleString('ar', { maximumFractionDigits: 0 })} ل.س
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
