'use client';
import CategoryBadge from '@/app/components/CategoryBadge';
import { formatDate } from '@/utils/formatDate';
import { Calendar, MessageSquare, ThumbsUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function MyActivityItem({
  codeId,
  title,
  content,
  categories,
  createdAt,
  likeCount = null,
  reviewCount = null,
}: {
  codeId: number;
  title: string;
  content: string;
  categories: { id: number; name: string }[];
  createdAt: string;
  likeCount?: number | null;
  reviewCount?: number | null;
}) {
  const router = useRouter();

  const handleItemClick = () => {
    router.push(`/codes/${codeId}`);
  };

  return (
    <div
      onClick={handleItemClick}
      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex gap-2">
          {categories?.length > 0 &&
            categories.map((category) => (
              <CategoryBadge
                key={category.id}
                name={category.name}
                className="inline-block text-gray-500"
              />
            ))}
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-1">{content}</p>
      <div className="flex items-center justify-between">
        <div>
          <Calendar className="inline-block mr-1 text-gray-500" size={16} />
          <span className="text-xs text-gray-400">{formatDate(new Date(createdAt))}</span>
        </div>
        {typeof likeCount === 'number' && (
          <div className="flex gap-2">
            <ThumbsUp className="text-gray-500" />
            <div className=" mb-2 text-gray-500 font-bold">{likeCount}</div>
          </div>
        )}
        {typeof reviewCount === 'number' && (
          <div className="flex gap-2">
            <MessageSquare size={18} className="text-gray-500" />
            <div className="text-gray-500 text-xs">{reviewCount}</div>
          </div>
        )}
      </div>
    </div>
  );
}
