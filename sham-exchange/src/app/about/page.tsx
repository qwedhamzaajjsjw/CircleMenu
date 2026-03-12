import { Shield, Award, Users, Clock, Target, Eye, Heart } from 'lucide-react';
import Link from 'next/link';

const MILESTONES = [
  { year: '2005', title: 'التأسيس', desc: 'تأسيس مكتب شام للصرافة في قلب دمشق بترخيص رسمي من مصرف سوريا المركزي' },
  { year: '2008', title: 'التوسع', desc: 'توسعة الخدمات لتشمل التحويل المالي الدولي وإضافة 20 عملة جديدة' },
  { year: '2012', title: 'الجائزة الذهبية', desc: 'حصلنا على جائزة أفضل مكتب صرافة في سوريا من الاتحاد العربي للصرافة' },
  { year: '2018', title: 'الرقمنة', desc: 'إطلاق المنصة الرقمية وخدمات التتبع الإلكتروني للتحويلات' },
  { year: '2022', title: 'العملات الرقمية', desc: 'إضافة خدمات تبادل العملات الرقمية مع الامتثال الكامل للتشريعات' },
  { year: '2025', title: 'الحاضر', desc: 'نخدم أكثر من 15,000 عميل شهرياً ونواصل مسيرة التميز والنمو' },
];

const TEAM = [
  { name: 'المدير العام', title: 'أحمد شام', desc: 'خبرة 25 عاماً في القطاع المالي والمصرفي' },
  { name: 'مدير العمليات', title: 'سامر الحموي', desc: 'متخصص في إدارة المخاطر وعمليات الصرف الأجنبي' },
  { name: 'رئيس خدمة العملاء', title: 'لينا المصري', desc: 'مسؤولة عن تجربة العملاء ورضاهم منذ 10 سنوات' },
];

const VALUES = [
  { icon: Shield, title: 'الأمانة والنزاهة', desc: 'نلتزم بأعلى معايير الشفافية والنزاهة في جميع تعاملاتنا المالية', color: '#10B981' },
  { icon: Target, title: 'الدقة والاحترافية', desc: 'كل معاملة تتم بدقة متناهية وبمعايير احترافية عالية', color: '#3B82F6' },
  { icon: Heart, title: 'خدمة العملاء', desc: 'عميلنا هو جوهر عملنا ورضاه هو هدفنا الأول والأخير', color: '#EF4444' },
  { icon: Eye, title: 'الشفافية الكاملة', desc: 'لا رسوم خفية، جميع الأسعار والتكاليف واضحة ومعلنة مسبقاً', color: '#C9A84C' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <div style={{ padding: '80px 24px', background: 'linear-gradient(180deg, rgba(27,46,66,0.9) 0%, transparent 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', gap: 8, alignItems: 'center', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 20, padding: '6px 16px', marginBottom: 24 }}>
              <span style={{ color: '#C9A84C', fontSize: 13, fontWeight: 600 }}>🏛️ منذ عام 2005</span>
            </div>
            <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
              قصة <span className="text-gold-gradient">شام للصرافة</span>
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
              بدأت رحلتنا عام 2005 من قلب دمشق بحلم بسيط: تقديم خدمات صرافة موثوقة وشفافة للمواطن السوري. اليوم، بعد عشرين عاماً، نفخر بخدمة أكثر من 15,000 عميل شهرياً ونواصل مسيرة التميز.
            </p>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
              نؤمن بأن الثقة تُبنى بالسنين ولا تُشترى بالأثمان. كل عميل يدخل بابنا يغادر وهو واثق بأنه حصل على أفضل سعر وأفضل خدمة.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[
              { label: 'عميل نشط', value: '15,000+' },
              { label: 'سنة في الخدمة', value: '20' },
              { label: 'عملة متاحة', value: '40+' },
              { label: 'تحويل يومي', value: '500+' },
            ].map((stat, i) => (
              <div key={i} className="glass-card" style={{ padding: 24, textAlign: 'center' }}>
                <div style={{ fontSize: 36, fontWeight: 900, color: '#C9A84C' }}>{stat.value}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginTop: 6 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px' }}>
        {/* Values */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16 }}>قيمنا <span className="text-gold-gradient">ومبادئنا</span></h2>
            <div className="section-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {VALUES.map(({ icon: Icon, title, desc, color }, i) => (
              <div key={i} className="glass-card" style={{ padding: 28, textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: `${color}15`, border: `2px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Icon size={28} style={{ color }} />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16 }}>مسيرة <span className="text-gold-gradient">النجاح</span></h2>
            <div className="section-divider" />
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', right: '50%', top: 0, bottom: 0, width: 2, background: 'linear-gradient(180deg, #C9A84C, transparent)', transform: 'translateX(50%)' }} />
            {MILESTONES.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start', marginBottom: 32, position: 'relative' }}>
                <div style={{ width: '45%', padding: 24, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 16, [i % 2 === 0 ? 'marginLeft' : 'marginRight']: 'auto' }}>
                  <div style={{ fontSize: 24, fontWeight: 900, color: '#C9A84C', marginBottom: 8 }}>{m.year}</div>
                  <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{m.title}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{m.desc}</div>
                </div>
                <div style={{ position: 'absolute', right: '50%', top: 24, width: 16, height: 16, borderRadius: '50%', background: '#C9A84C', transform: 'translateX(50%)', boxShadow: '0 0 0 4px rgba(201,168,76,0.2)' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16 }}>فريق <span className="text-gold-gradient">الخبراء</span></h2>
            <div className="section-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 28 }}>
            {TEAM.map((m, i) => (
              <div key={i} className="glass-card" style={{ padding: 32, textAlign: 'center' }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #C9A84C, #E8C96B)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 28 }}>
                  <Users size={36} color="#0D1B2A" />
                </div>
                <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{m.title}</div>
                <div style={{ fontSize: 14, color: '#C9A84C', marginBottom: 12, fontWeight: 600 }}>{m.name}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{m.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div style={{ padding: '48px', background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 24, textAlign: 'center' }}>
          <Award size={48} style={{ color: '#C9A84C', marginBottom: 16 }} />
          <h3 style={{ fontSize: 26, fontWeight: 800, marginBottom: 16 }}>شهادات الاعتماد والتراخيص</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginTop: 24 }}>
            {[
              '🏛️ ترخيص مصرف سوريا المركزي رقم SYR-EX-2005-142',
              '🏆 عضو الاتحاد العربي للصرافة',
              '✅ معتمد من هيئة الأوراق المالية السورية',
              '🌐 عضو شبكة SWIFT الدولية',
            ].map((cert, i) => (
              <div key={i} style={{ padding: '12px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: 12, fontSize: 14, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                {cert}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>تواصل معنا</Link>
            <Link href="/services" className="btn-outline" style={{ textDecoration: 'none' }}>خدماتنا</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
