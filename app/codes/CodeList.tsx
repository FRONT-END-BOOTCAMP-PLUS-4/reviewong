'use client';

import ProfileImage from '@/app/components/ProfileImage';
import { formatDate } from '@/utils/formatDate';
import { Calendar } from 'lucide-react';
import GradeBadge from '../components/GradeBadge';
import CategoryBadge from '../components/CategoryBadge';
import Link from 'next/link';

export interface Code {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  user: {
    id: string;
    nickname: string;
    imageUrl: string | null;
    grade: string | null;
  };
  reviewCount: number;
  categories?: {
    codeId: number;
    categoryId: number;
    category: {
      id: number;
      name: string;
    };
  }[];
}

export interface CodeListProps {
  codes: Code[];
}

const CodeList = ({ codes }: CodeListProps) => {
  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {codes.map((code, index) => (
        <div
          key={code.id || `${code.title}-${index}`}
          className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 p-6 rounded-2xl border border-gray-200 hover:border-gray-300"
        >
          <Link href={`/codes/${code.id}`} className="block w-full">
            {/* 닉네임 + 그레이드 + 카테고리 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ProfileImage
                  src={code.user.imageUrl || '/default-profile-image.png'}
                  alt={`${code.user.nickname}의 프로필 이미지`}
                  size={50}
                />
                <div className="flex items-center gap-2">
                  <div className="truncate max-w-[120px] text-sm font-semibold">
                    {code.user.nickname}
                  </div>
                  <GradeBadge grade={code.user.grade || undefined} />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {code.categories?.map((category) => (
                  <CategoryBadge key={category.categoryId} name={category.category.name} />
                ))}
              </div>
            </div>

            {/* 타이틀 + 내용 */}
            <div className="mt-4">
              <p className="text-base font-bold text-gray-800">{code.title}</p>
              <p className="mt-2 text-sm text-gray-600 line-clamp-1">{code.content}</p>
            </div>

            {/* 날짜 + 댓글 */}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>{formatDate(code.createdAt)}</span>
              </div>
              <div>댓글 {code.reviewCount ?? 0}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CodeList;
