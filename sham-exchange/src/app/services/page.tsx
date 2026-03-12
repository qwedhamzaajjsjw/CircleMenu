import { ArrowLeftRight, Globe, Shield, Banknote, CreditCard, Building2, Coins, Phone } from 'lucide-react';
import Link from 'next/link';

const SERVICES = [
  {
    icon: ArrowLeftRight,
    title: 'شراء وبيع العملات',
    desc: 'نقدم خدمة شراء وبيع جميع العملات الأجنبية الرئيسية والإقليمية بأفضل الأسعار في السوق وبكل شفافية وأمان.',
    features: ['40+ عملة متاحة', 'أسعار تنافسية', 'خدمة فورية', 'بدون رسوم خفية'],
    color: '#C9A84C'
  },
  {
    icon: Globe,
    title: 'التحويل المالي الدولي',
    desc: 'نوفر خدمات التحويل المالي الدولي إلى أكثر من 150 دولة بسرعة وأمان عبر أكبر شبكات التحويل العالمية.',
    features: ['150+ دولة', 'تحويل سريع', 'رسوم منخفضة', 'تتبع التحويل'],
    color: '#3B82F6'
  },
  {
    icon: Coins,
    title: 'العملات الرقمية',
    desc: 'نوفر خدمات تبادل العملات الرقمية مع ضمان أعلى معايير الأمان والامتثال للتشريعات المالية.',
    features: ['Bitcoin & USDT', 'تحويل فوري', 'أسعار سوقية', 'آمن ومضمون'],
    color: '#8B5CF6'
  },
  {
    icon: Banknote,
    title: 'الحوالات المالية',
    desc: 'خدمة الحوالات الداخلية والخارجية لإرسال الأموال إلى ذويك في أي مكان بأسرع وقت وأقل تكلفة.',
    features: ['حوالات محلية', 'حوالات دولية', 'وصول سريع', 'تأكيد فوري'],
    color: '#10B981'
  },
  {
    icon: CreditCard,
    title: 'خدمات الشركات',
    desc: 'حلول متكاملة للشركات والمؤسسات التجارية تشمل إدارة العملات الأجنبية وخدمات التسوية الدولية.',
    features: ['حسابات تجارية', 'أسعار الجملة', 'مدير حساب مخصص', 'تقارير دورية'],
    color: '#EF4444'
  },
  {
    icon: Building2,
    title: 'العملات التذكارية والنادرة',
    desc: 'نمتلك مجموعة نادرة من العملات التذكارية والتاريخية للهواة والمقتنين بأسعار عادلة ومضمونة.',
    features: ['عملات تاريخية', 'شهادة أصالة', 'تقييم مهني', 'شراء وبيع'],
    color: '#F59E0B'
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <div style={{ padding: '80px 24px', textAlign: 'center', background: 'linear-gradient(180deg, rgba(27,46,66,0.8) 0%, transparent 100%)' }}>
        <h1 style={{ fontSize: 44, fontWeight: 900, marginBottom: 16 }}>
          <span className="text-gold-gradient">خدماتنا</span> المتميزة
        </h1>
        <div className="section-divider" />
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', maxWidth: 580, margin: '16px auto 0', lineHeight: 1.8 }}>
          نقدم مجموعة شاملة من الخدمات المالية المرخصة بأعلى معايير الجودة والأمان
        </p>
      </div>

      {/* Services Grid */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
          {SERVICES.map(({ icon: Icon, title, desc, features, color }, i) => (
            <div key={i} className="glass-card" style={{ padding: 36 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{ width: 60, height: 60, borderRadius: 16, background: `${color}20`, border: `2px solid ${color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={28} style={{ color }} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 800 }}>{title}</h3>
              </div>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 24 }}>{desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {features.map((f, j) => (
                  <span key={j} style={{ fontSize: 13, padding: '5px 12px', borderRadius: 20, background: `${color}15`, color, border: `1px solid ${color}30`, fontWeight: 600 }}>
                    ✓ {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div style={{ marginTop: 80, textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16 }}>كيف <span className="text-gold-gradient">نعمل؟</span></h2>
          <div className="section-divider" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, marginTop: 48 }}>
            {[
              { num: '01', title: 'تواصل معنا', desc: 'زر مكتبنا أو اتصل بنا لمعرفة أحدث الأسعار' },
              { num: '02', title: 'اختر العملة', desc: 'حدد العملة والمبلغ الذي تريد تحويله أو شراءه' },
              { num: '03', title: 'أتمم الصفقة', desc: 'نوفر لك سعراً تنافسياً وتتم العملية فوراً' },
              { num: '04', title: 'استلم أموالك', desc: 'استلم عملتك الأجنبية أو تحويلك في الحال' },
            ].map((step, i) => (
              <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #C9A84C, #E8C96B)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', boxShadow: '0 4px 20px rgba(201,168,76,0.3)' }}>
                  <span style={{ fontSize: 22, fontWeight: 900, color: '#0D1B2A' }}>{step.num}</span>
                </div>
                <h4 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{step.title}</h4>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 80, textAlign: 'center', padding: '60px 40px', background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 24 }}>
          <Shield size={48} style={{ color: '#C9A84C', marginBottom: 20 }} />
          <h2 style={{ fontSize: 30, fontWeight: 800, marginBottom: 12 }}>مرخص ومعتمد رسمياً</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
            شام للصرافة مرخص من مصرف سوريا المركزي ويعمل وفق أعلى معايير الامتثال المالي
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>احصل على استشارة مجانية</Link>
            <a href="tel:+963112345678" className="btn-outline" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Phone size={16} /> اتصل الآن
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
