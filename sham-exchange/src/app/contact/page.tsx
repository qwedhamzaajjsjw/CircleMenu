'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 1500);
  };

  const CONTACT_INFO = [
    { icon: MapPin, label: 'العنوان', value: 'دمشق، شارع الحمرا، قرب ساحة العباسيين، مبنى رقم 42', color: '#EF4444' },
    { icon: Phone, label: 'الهاتف', value: '+963 11 234 5678', color: '#10B981' },
    { icon: Phone, label: 'الجوال / واتساب', value: '+963 93 456 7890', color: '#25D366' },
    { icon: Mail, label: 'البريد الإلكتروني', value: 'info@shamexchange.sy', color: '#3B82F6' },
    { icon: Clock, label: 'أوقات العمل', value: 'السبت - الخميس: 9:00 ص - 6:00 م', color: '#C9A84C' },
  ];

  const FAQS = [
    { q: 'ما هي العملات التي تتعاملون بها؟', a: 'نتعامل بأكثر من 40 عملة عالمية وإقليمية، من الدولار واليورو إلى الريال والدرهم وغيرها.' },
    { q: 'كيف يتم تحديد أسعار الصرف؟', a: 'نتابع أسعار السوق العالمية لحظة بلحظة ونحدث أسعارنا بشكل مستمر لنقدم أفضل الأسعار.' },
    { q: 'هل تقدمون خدمة التوصيل؟', a: 'نعم، نقدم خدمة التوصيل للعملاء في مناطق معينة ضمن دمشق. يرجى التواصل للتفاصيل.' },
    { q: 'ما هو الحد الأدنى للمبلغ؟', a: 'لا يوجد حد أدنى للمبالغ الصغيرة. أما للتحويلات الكبيرة فيُرجى مراجعتنا مسبقاً.' },
  ];

  return (
    <div>
      {/* Header */}
      <div style={{ padding: '80px 24px', textAlign: 'center', background: 'linear-gradient(180deg, rgba(27,46,66,0.8) 0%, transparent 100%)' }}>
        <h1 style={{ fontSize: 44, fontWeight: 900, marginBottom: 16 }}>
          <span className="text-gold-gradient">تواصل معنا</span>
        </h1>
        <div className="section-divider" />
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '16px auto 0', lineHeight: 1.8 }}>
          نحن هنا للإجابة على جميع استفساراتك. تواصل معنا عبر أي من القنوات التالية
        </p>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px 80px', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 48, alignItems: 'start' }}>
        {/* Contact Info */}
        <div>
          <div className="glass-card" style={{ padding: 32, marginBottom: 24 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#C9A84C', marginBottom: 24 }}>معلومات التواصل</h3>
            {CONTACT_INFO.map(({ icon: Icon, label, value, color }, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 0', borderBottom: i < CONTACT_INFO.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${color}15`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 3 }}>{label}</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div style={{ padding: 24, background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: 16, textAlign: 'center' }}>
            <MessageCircle size={36} style={{ color: '#25D366', marginBottom: 12 }} />
            <h4 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>تواصل عبر واتساب</h4>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 16, lineHeight: 1.6 }}>للردود السريعة والاستفسارات الفورية</p>
            <a
              href="https://wa.me/963934567890"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '10px 24px', background: '#25D366', color: 'white', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}
            >
              ابدأ المحادثة
            </a>
          </div>
        </div>

        {/* Form + Map */}
        <div>
          <div className="glass-card" style={{ padding: 36, marginBottom: 28 }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 28 }}>أرسل لنا رسالة</h3>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle size={64} style={{ color: '#10B981', marginBottom: 16 }} />
                <h4 style={{ fontSize: 22, fontWeight: 800, marginBottom: 10, color: '#10B981' }}>تم الإرسال بنجاح!</h4>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                  شكراً لتواصلك معنا. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن خلال ساعات العمل.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', subject: '', message: '' }); }}
                  className="btn-gold"
                  style={{ marginTop: 24 }}
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 6, fontWeight: 500 }}>الاسم الكامل *</label>
                    <input type="text" required className="input-gold" placeholder="محمد أحمد" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 6, fontWeight: 500 }}>رقم الهاتف *</label>
                    <input type="tel" required className="input-gold" placeholder="+963 9X XXX XXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 6, fontWeight: 500 }}>البريد الإلكتروني</label>
                  <input type="email" className="input-gold" placeholder="example@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 6, fontWeight: 500 }}>موضوع الرسالة *</label>
                  <select required className="select-gold" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}>
                    <option value="">اختر الموضوع</option>
                    <option value="rates">الاستفسار عن الأسعار</option>
                    <option value="transfer">خدمة التحويل المالي</option>
                    <option value="crypto">العملات الرقمية</option>
                    <option value="corporate">خدمات الشركات</option>
                    <option value="complaint">شكوى أو اقتراح</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 6, fontWeight: 500 }}>الرسالة *</label>
                  <textarea
                    required
                    className="input-gold"
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    style={{ resize: 'vertical' }}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold"
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 17, padding: 18 }}
                  disabled={loading}
                >
                  <Send size={18} />
                  {loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                </button>
              </form>
            )}
          </div>

          {/* Map placeholder */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 16, overflow: 'hidden', height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>
              <MapPin size={40} style={{ color: '#C9A84C', marginBottom: 10 }} />
              <p style={{ fontSize: 14 }}>دمشق، شارع الحمرا</p>
              <p style={{ fontSize: 12, marginTop: 4 }}>اضغط هنا لفتح الخريطة</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>الأسئلة <span className="text-gold-gradient">الشائعة</span></h2>
          <div className="section-divider" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {FAQS.map((faq, i) => (
            <div key={i} className="glass-card" style={{ padding: 24 }}>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: '#C9A84C', marginBottom: 10 }}>❓ {faq.q}</h4>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:768px){div[style*="grid-template-columns: 1fr 1.5fr"]{grid-template-columns:1fr!important}div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
