import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RateTicker from '@/components/RateTicker';

export const metadata: Metadata = {
  title: 'شام للصرافة | Sham Exchange - أفضل أسعار الصرف في سوريا',
  description: 'مكتب صرافة شام - أفضل أسعار صرف العملات في سوريا. نقدم خدمات تحويل الأموال، شراء وبيع العملات الأجنبية بأسعار تنافسية.',
  keywords: 'صرافة, سوريا, دولار, يورو, أسعار الصرف, تحويل عملات, شام',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Header />
        <RateTicker />
        <main style={{ minHeight: 'calc(100vh - 200px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
