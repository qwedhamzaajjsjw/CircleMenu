'use client';
import Link from 'next/link';
import { Shield, TrendingUp, Clock, Award, ArrowLeftRight, Calculator, Globe, Phone, ChevronLeft, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const MAIN_RATES = [
  { code: 'USD', name: 'دولار أمريكي', flag: '🇺🇸', buy: 13120, sell: 13180, change: 0.5 },
  { code: 'EUR', name: 'يورو أوروبي', flag: '🇪🇺', buy: 14290, sell: 14360, change: -0.3 },
  { code: 'SAR', name: 'ريال سعودي', flag: '🇸🇦', buy: 3494, sell: 3518, change: 0.1 },
  { code: 'AED', name: 'درهم إماراتي', flag: '🇦🇪', buy: 3565, sell: 3595, change: 0.2 },
  { code: 'TRY', name: 'ليرة تركية', flag: '🇹🇷', buy: 389, sell: 401, change: -1.2 },
  { code: 'GBP', name: 'جنيه إسترليني', flag: '🇬🇧', buy: 16700, sell: 16800, change: 0.8 },
];

const STATS = [
  { label: 'عميل راضٍ', value: '+15,000', icon: Star },
  { label: 'سنة خبرة', value: '20+', icon: Award },
  { label: 'عملة متاحة', value: '40+', icon: Globe },
  { label: 'يوم في السنة', value: '365', icon: Clock },
];

const FEATURES = [
  { icon: Shield, title: 'أمان وموثوقية', desc: 'مرخص من مصرف سوريا المركزي، جميع معاملاتك محمية بأعلى معايير الأمان المالي.', color: '#10B981' },
  { icon: TrendingUp, title: 'أفضل الأسعار', desc: 'نضمن لك أفضل أسعار الصرف في السوق، مع تحديث فوري لجميع العملات.', color: '#C9A84C' },
  { icon: Clock, title: 'خدمة سريعة', desc: 'إتمام معاملاتك في دقائق معدودة، مع فريق متخصص جاهز لخدمتك.', color: '#3B82F6' },
  { icon: Globe, title: 'تحويل دولي', desc: 'خدمات التحويل المالي إلى أكثر من 150 دولة حول العالم بكل يسر وسهولة.', color: '#8B5CF6' },
];

const TESTIMONIALS = [
  { name: 'أحمد الخطيب', role: 'رجل أعمال', text: 'أفضل مكتب صرافة في دمشق، أسعار ممتازة وخدمة سريعة. أتعامل معهم منذ 5 سنوات.', rating: 5 },
  { name: 'سارة المحمود', role: 'موظفة', text: 'خدمة احترافية ومتميزة، الموظفون ودودون ومتعاونون. أنصح الجميع بالتعامل معهم.', rating: 5 },
  { name: 'محمد العلي', role: 'تاجر', text: 'وثوق كبير وأمانة في التعامل. الأسعار دائماً أفضل من المنافسين. شكراً لفريق شام.', rating: 5 },
];

export default function HomePage() {
  const [lastUpdate, setLastUpdate] = useState('');
  useEffect(() => { setLastUpdate(new Date().toLocaleTimeString('ar-SY')); }, []);

  return (
    <div>
      <section className="hero-gradient" style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, left: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div className="fade-in-up">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 20, padding: '6px 16px', marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
              <span style={{ fontSize: 13, color: '#C9A84C', fontWeight: 600 }}>مرخص رسمياً من مصرف سوريا المركزي</span>
            </div>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
              <span className="text-gold-gradient">شام للصرافة</span><br />
              <span style={{ color: 'white' }}>ثقتك أمانتنا</span>
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 36, maxWidth: 480 }}>
              نقدم أفضل أسعار صرف العملات في سوريا مع ضمان الشفافية والأمان. خبرة 20 عاماً في خدمة آلاف العملاء.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/rates" className="btn-gold" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <TrendingUp size={18} /> أسعار الصرف الآن
              </Link>
              <Link href="/calculator" className="btn-outline" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Calculator size={18} /> احسب عملتك
              </Link>
            </div>
            <div style={{ display: 'flex', gap: 20, marginTop: 36, flexWrap: 'wrap' }}>
              {['🏆 مرخص رسمياً', '🔒 آمن 100%', '⚡ تحديث فوري'].map((b, i) => (
                <span key={i} style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{b}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="glass-card" style={{ padding: 28 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#C9A84C' }}>أسعار اليوم</h3>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{lastUpdate && `آخر تحديث: ${lastUpdate}`}</span>
              </div>
              <div style={{ display: 'flex', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: 8 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', flex: 2 }}>العملة</span>
                <span style={{ fontSize: 12, color: '#10B981', flex: 1, textAlign: 'center' }}>شراء</span>
                <span style={{ fontSize: 12, color: '#EF4444', flex: 1, textAlign: 'center' }}>بيع</span>
              </div>
              {MAIN_RATES.slice(0, 5).map(rate => (
                <div key={rate.code} style={{ display: 'flex', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 2 }}>
                    <span style={{ fontSize: 18 }}>{rate.flag}</span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{rate.code}</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{rate.name}</div>
                    </div>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#10B981', flex: 1, textAlign: 'center' }}>{rate.buy.toLocaleString('ar')}</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#EF4444', flex: 1, textAlign: 'center' }}>{rate.sell.toLocaleString('ar')}</span>
                </div>
              ))}
              <Link href="/rates" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 16, color: '#C9A84C', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
                عرض جميع العملات <ChevronLeft size={16} />
              </Link>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){ .hero-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section style={{ background: '#060F19', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
          {STATS.map(({ label, value, icon: Icon }, i) => (
            <div key={i} style={{ textAlign: 'center', padding: 24 }}>
              <Icon size={28} style={{ color: '#C9A84C', marginBottom: 12 }} />
              <div style={{ fontSize: 36, fontWeight: 900, color: '#C9A84C', lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginTop: 8 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16 }}>لماذا تختار <span className="text-gold-gradient">شام للصرافة؟</span></h2>
            <div className="section-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {FEATURES.map(({ icon: Icon, title, desc, color }, i) => (
              <div key={i} className="glass-card" style={{ padding: 32 }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: `${color}20`, border: `1px solid ${color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Icon size={28} style={{ color }} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', paddingTop: 80, marginBottom: 48 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16 }}><span className="text-gold-gradient">أسعار الصرف</span> الرئيسية</h2>
            <div className="section-divider" />
          </div>
          <div className="glass-card" style={{ overflow: 'hidden', padding: 0 }}>
            <div style={{ padding: '16px 24px', background: 'rgba(201,168,76,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 14, color: '#C9A84C', fontWeight: 600 }}>العملة / الليرة السورية</span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>الأسعار تقريبية</span>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <th style={{ padding: '14px 24px', textAlign: 'right', fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>العملة</th>
                  <th style={{ padding: '14px 16px', textAlign: 'center', fontSize: 13, color: '#10B981', fontWeight: 500 }}>سعر الشراء</th>
                  <th style={{ padding: '14px 16px', textAlign: 'center', fontSize: 13, color: '#EF4444', fontWeight: 500 }}>سعر البيع</th>
                  <th style={{ padding: '14px 16px', textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>التغيير</th>
                </tr>
              </thead>
              <tbody>
                {MAIN_RATES.map((rate, i) => (
                  <tr key={rate.code} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                    <td style={{ padding: '14px 24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span style={{ fontSize: 22 }}>{rate.flag}</span>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 15 }}>{rate.code}</div>
                          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{rate.name}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 700, color: '#10B981', fontSize: 15 }}>{rate.buy.toLocaleString('ar')}</td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 700, color: '#EF4444', fontSize: 15 }}>{rate.sell.toLocaleString('ar')}</td>
                    <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                      <span style={{ color: rate.change >= 0 ? '#10B981' : '#EF4444', fontSize: 14, fontWeight: 600 }}>
                        {rate.change >= 0 ? '▲' : '▼'} {Math.abs(rate.change)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ padding: 20, textAlign: 'center' }}>
              <Link href="/rates" className="btn-gold" style={{ textDecoration: 'none' }}>عرض جميع العملات (40+)</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(13,27,42,0) 100%)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <ArrowLeftRight size={48} style={{ color: '#C9A84C', marginBottom: 20 }} />
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}>احسب قيمة عملتك <span className="text-gold-gradient">الآن</span></h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 32, lineHeight: 1.7 }}>
            استخدم حاسبة العملات الذكية لمعرفة القيمة الفعلية لأموالك بأي عملة تريدها
          </p>
          <Link href="/calculator" className="btn-gold" style={{ textDecoration: 'none', fontSize: 18, padding: '16px 48px' }}>ابدأ الحساب مجاناً</Link>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#060F19' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16 }}>ماذا يقول <span className="text-gold-gradient">عملاؤنا؟</span></h2>
            <div className="section-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="glass-card" style={{ padding: 28 }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} style={{ color: '#C9A84C', fill: '#C9A84C' }} />
                  ))}
                </div>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: 20 }}>&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div style={{ fontWeight: 700 }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: '#C9A84C' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 24px', background: 'linear-gradient(135deg, #1B2E42 0%, #0D1B2A 100%)', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}>هل تحتاج إلى مساعدة؟</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>فريقنا المتخصص جاهز للإجابة على جميع استفساراتك</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+963112345678" className="btn-gold" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Phone size={18} /> اتصل بنا الآن
            </a>
            <Link href="/contact" className="btn-outline" style={{ textDecoration: 'none' }}>راسلنا</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
