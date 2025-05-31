'use client';

import { useQuery } from '@tanstack/react-query';
import RankingList from '@/app/components/RankingList';
import axios from 'axios';

interface RankingResponse {
  likeRanking: RankingUser[];
  reviewRanking: RankingUser[];
}

interface RankingUser {
  nickname: string;
  profileImageUrl: string | null;
  gradeId: number | null;
  likeCount?: number;
  reviewCount?: number;
}

async function getRanking(): Promise<RankingResponse> {
  const { data } = await axios.get<RankingResponse>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/ranking`
  );
  return data;
}

export default function RankingListContainer() {
  const { data, isLoading } = useQuery({
    queryKey: ['ranking'],
    queryFn: getRanking,
  });

  return (
    <div className="w-full flex justify-around gap-4 mb-8">
      <RankingList
        title="좋아요 랭킹"
        ranking={data?.likeRanking || []}
        type="like"
        className="w-1/2"
        isLoading={isLoading}
      />
      <RankingList
        title="리뷰 랭킹"
        ranking={data?.reviewRanking || []}
        type="review"
        className="w-1/2"
        isLoading={isLoading}
      />
    </div>
  );
}
