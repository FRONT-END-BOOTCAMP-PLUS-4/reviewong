'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CodeSnippetDetail from '../code/[id]/CodeSnippetDetail';
import { formatDate } from '@/utils/formatDate';

async function fetchDailyChallenge() {
  const res = await axios.get('/api/codes/daily', { withCredentials: true });
  return res.data;
}

export default function DailyChallengeCard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['daily-challenge'],
    queryFn: fetchDailyChallenge,
  });

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error || !data) {
    return <div>데일리 챌린지 없음</div>;
  }

  return (
    <div className="w-full">
      <CodeSnippetDetail
        title={data.title}
        content={data.content}
        author={data.user.nickname}
        profileImage={data.user.imageUrl}
        date={formatDate(data.createdAt)}
        categories={data.categories}
      />
    </div>
  );
}
