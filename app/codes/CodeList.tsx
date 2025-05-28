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
  counts: {
    reviews: number;
  };
  categories?: { id: number; name: string }[];
}

export interface CodeListProps {
  codes: Code[];
}

const CodeList = ({ codes }: CodeListProps) => {
  return (
    <div className="space-y-2">
      {codes.map((code) => (
        <div
          key={code.id}
          className="border hover:border-gray-400 p-4 rounded flex flex-col items-start m-8"
        >
          <Link href={`/codes/${code.id}`} className="w-full">
            <div className="flex flex-row items-center gap-2 mr-2">
              <ProfileImage
                src={code.user.imageUrl || '/default-profile-image.png'}
                alt={`${code.user.nickname}의 프로필 이미지`}
                size={50}
              />
              <div className="flex flex-row text-sm text-gray-800 font-semibold items-center">
                {code.user.nickname}
                <div className="ml-2 text-xs text-gray-500 w-full">
                  <GradeBadge grade={code.user.grade || undefined} />
                </div>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-700 font-bold">{code.title}</p>
            <p className="mt-2 text-sm text-gray-700 line-clamp-1">{code.content}</p>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex flex-row gap-2 items-center">
                {code.categories &&
                  code.categories.map((category) => (
                    <CategoryBadge key={category.id} name={category.name} />
                  ))}
                <Calendar className="w-5 text-gray-500" />
                <div className="text-xs">{formatDate(code.createdAt)}</div>
              </div>
              <div className="text-xs text-gray-500">댓글 {code.counts.reviews}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default CodeList;
