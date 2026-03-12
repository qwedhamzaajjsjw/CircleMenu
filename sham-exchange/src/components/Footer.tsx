'use client';
import Link from 'next/link';
import { DollarSign, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#060F19', borderTop: '1px solid rgba(201,168,76,0.15)', paddingTop: 60 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, paddingBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: 'linear-gradient(135deg, #C9A84C, #E8C96B)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <DollarSign size={26} color="#0D1B2A" strokeWidth={2.5} />
              </div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 900, background: 'linear-gradient(135deg, #C9A84C, #E8C96B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  شام للصرافة
                </div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>SHAM EXCHANGE</div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 24 }}>
              مكتب صرافة معتمد في سوريا، نقدم أفضل أسعار الصرف وخدمات تحويل العملات بكل أمان وموثوقية منذ عام 2005.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#C9A84C', transition: 'all 0.2s'
                }}
                  onMouseOver={e => (e.currentTarget.style.background = 'rgba(201,168,76,0.25)')}
                  onMouseOut={e => (e.currentTarget.style.background = 'rgba(201,168,76,0.1)')}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: '#C9A84C', marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
              روابط سريعة
            </h4>
            {[
              { href: '/', label: 'الرئيسية' },
              { href: '/rates', label: 'أسعار الصرف' },
              { href: '/calculator', label: 'حاسبة العملات' },
              { href: '/services', label: 'خدماتنا' },
              { href: '/about', label: 'من نحن' },
              { href: '/contact', label: 'اتصل بنا' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{
                display: 'block', padding: '6px 0',
                color: 'rgba(255,255,255,0.55)',
                textDecoration: 'none', fontSize: 14,
                transition: 'color 0.2s'
              }}
                onMouseOver={e => (e.currentTarget.style.color = '#C9A84C')}
                onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                ← {link.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: '#C9A84C', marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
              خدماتنا
            </h4>
            {[
              'شراء وبيع العملات',
              'تحويل الأموال الدولي',
              'عملات رقمية',
              'حوالات مالية',
              'عملات نادرة وتذكارية',
              'خدمة الشركات',
            ].map((s, i) => (
              <div key={i} style={{ padding: '6px 0', color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>
                ◆ {s}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: '#C9A84C', marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
              معلومات التواصل
            </h4>
            {[
              { icon: MapPin, text: 'دمشق، شارع الحمرا، قرب ساحة العباسيين' },
              { icon: Phone, text: '+963 11 234 5678' },
              { icon: Mail, text: 'info@shamexchange.sy' },
              { icon: Clock, text: 'السبت - الخميس: 9:00 ص - 6:00 م' },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '6px 0', color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>
                <Icon size={16} style={{ color: '#C9A84C', marginTop: 2, flexShrink: 0 }} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} شام للصرافة. جميع الحقوق محفوظة.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
            مرخص من قبل مصرف سوريا المركزي | ترخيص رقم: SYR-EX-2005-142
          </p>
        </div>
      </div>
    </footer>
  );
}
