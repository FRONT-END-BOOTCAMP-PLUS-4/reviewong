import QueryProvider from './components/QueryProvider';
import Provider from './components/Provider';
import Header from './components/Header';
import './globals.css';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: {
    default: '리뷰엉',
    template: '%s | 코드 리뷰 플랫폼',
  },
  icons: {
    icon: '/favicon.ico',
  },
  description: '개발자들을 위한 코드 리뷰 및 공유 플랫폼입니다.',
  keywords: ['코드리뷰', '프로그래밍', '개발자', 'Next.js', 'React', '코드리뷰플랫폼'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <Provider>
            <Header />
            <div className="container mx-auto pb-8">{children}</div>
          </Provider>
        </QueryProvider>
      </body>
    </html>
  );
}
