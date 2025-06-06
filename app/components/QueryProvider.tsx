'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useState } from 'react';

export default function QueryProvider({ children }: React.PropsWithChildren) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false, // 윈도우가 다시 포커스되었을때 데이터를 refetch
          refetchOnMount: false, // 데이터가 stale 상태이면 컴포넌트가 마운트될 때 refetch
          retry: 1, // API 요청 실패시 재시도 하는 옵션 (설정값 만큼 재시도)
        },
      },
    })
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
