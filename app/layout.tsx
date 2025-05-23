import QueryProvider from './components/QueryProvider';
import Provider from './components/Provider';
import Header from './components/Header';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <Provider>
            <Header />
            {children}
          </Provider>
        </QueryProvider>
      </body>
    </html>
  );
}
