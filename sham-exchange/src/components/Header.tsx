'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, DollarSign, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/rates', label: 'أسعار الصرف' },
  { href: '/calculator', label: 'حاسبة العملات' },
  { href: '/services', label: 'خدماتنا' },
  { href: '/about', label: 'من نحن' },
  { href: '/contact', label: 'اتصل بنا' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={{ background: 'rgba(13,27,42,0.97)', borderBottom: '1px solid rgba(201,168,76,0.2)', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(12px)' }}>
      {/* Top bar */}
      <div style={{ background: 'rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.15)', padding: '6px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
            📍 دمشق، سوريا - شارع الحمرا
          </span>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <a href="tel:+963112345678" style={{ fontSize: 13, color: '#C9A84C', display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none' }}>
              <Phone size={12} />
              <span dir="ltr">+963 11 234 5678</span>
            </a>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
              🕐 9:00 ص - 6:00 م
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 72 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12,
            background: 'linear-gradient(135deg, #C9A84C, #E8C96B)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(201,168,76,0.3)'
          }}>
            <DollarSign size={26} color="#0D1B2A" strokeWidth={2.5} />
          </div>
          <div>
            <div style={{ fontSize: 22, fontWeight: 900, background: 'linear-gradient(135deg, #C9A84C, #E8C96B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              شام للصرافة
            </div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: -2 }}>SHAM EXCHANGE</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="hidden-mobile">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              style={{ textDecoration: 'none' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link href="/calculator" className="btn-gold" style={{ fontSize: 14, padding: '8px 20px', textDecoration: 'none' }}>
            احسب الآن
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', color: '#C9A84C', cursor: 'pointer', display: 'none' }}
            className="mobile-menu-btn"
            aria-label="قائمة"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: '#0D1B2A', borderTop: '1px solid rgba(201,168,76,0.15)', padding: '16px 24px' }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                color: pathname === link.href ? '#C9A84C' : 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                fontSize: 16
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
