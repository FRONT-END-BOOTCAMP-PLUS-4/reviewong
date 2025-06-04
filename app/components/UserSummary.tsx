import GradeBadge from '@/app/components/GradeBadge';
import ProfileImage from '@/app/components/ProfileImage';
import { Button } from '@/components/ui/button';
import { UserSummary as UserSummaryType } from '@/types/UserSummary';
import { signOut } from 'next-auth/react';

import React from 'react';
export default function UserSummary({
  userSummary,
  isInMy = false,
}: {
  userSummary: UserSummaryType;
  isInMy?: boolean;
}) {
  return (
    <div className="my-6 max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow border">
      <div className="flex items-start justify-between">
        {/* 프로필 영역 */}
        <div className="flex gap-4">
          <ProfileImage size={60} redirectUserPage={false} />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold">{userSummary.nickname}</h2>
              <GradeBadge grade={userSummary.grade} />
            </div>
            <p className="text-sm text-gray-600">{userSummary.email}</p>
          </div>
        </div>
        {isInMy && (
          <div className="flex flex-row gap-2">
            {/* 프로필 편집 버튼 */}
            <button className="border px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
              프로필 편집
            </button>
            <Button onClick={() => signOut()}>로그아웃</Button>
          </div>
        )}
      </div>

      {/* 통계 카드 */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="bg-gray-50 rounded-xl py-4">
          <div className="text-xl font-bold">{userSummary.codeCount}</div>
          <div className="text-sm text-gray-600">작성한 코드</div>
        </div>
        <div className="bg-gray-50 rounded-xl py-4">
          <div className="text-xl font-bold">{userSummary.reviewCount}</div>
          <div className="text-sm text-gray-600">작성한 리뷰</div>
        </div>
        <div className="bg-gray-50 rounded-xl py-4">
          <div className="text-xl font-bold">{userSummary.likeCount}</div>
          <div className="text-sm text-gray-600">받은 좋아요</div>
        </div>
      </div>
    </div>
  );
}
