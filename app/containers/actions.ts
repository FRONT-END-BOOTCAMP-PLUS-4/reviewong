import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function fetchDailyChallenge() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  console.log('session', session);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/codes/daily${userId ? `?userId=${userId}` : ''}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    if (res.status === 401) {
      return null;
    }
    const errorData = await res.json();
    console.error('API Error:', {
      status: res.status,
      statusText: res.statusText,
      error: errorData,
    });
    throw new Error(`데일리 챌린지 조회 실패: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
