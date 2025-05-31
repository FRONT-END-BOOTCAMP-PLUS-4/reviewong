'use client';
import Link from 'next/link';
import MDEditor from '@uiw/react-md-editor';
import ProfileImage from '@/app/components/ProfileImage';
import { Calendar } from 'lucide-react';
import GradeBadge from '@/app/components/GradeBadge';
import CategoryBadge from '@/app/components/CategoryBadge';
import { useState } from 'react';
interface CodeSnippetDetailProps {
  id: number;
  title: string;
  content: string;
  author: string;
  profileImage?: string;
  grade?: string;
  date: string;
  categories?: { id: number; name: string }[];
  isAuthor: boolean;
  userReviewContent?: string;
}

export default function CodeSnippetDetail({
  id,
  title,
  content,
  author,
  profileImage,
  grade,
  date,
  categories = [],
  isAuthor = false,
  userReviewContent = '',
}: CodeSnippetDetailProps) {
  const [showOwnReview, setShowOwnReview] = useState<boolean>(false);
  return (
    <main className="p-4">
      {/* <div className="mb-6 border rounded-lg border-gray-100 bg-white shadow-sm p-4"> */}
      <div className="mb-6">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <div className="flex items-center justify-between text-gray-500">
          {/* 작성자 정보 */}
          <div className="flex items-center space-x-2">
            <ProfileImage size={40} src={profileImage} alt="프로필 이미지" />
            <span>{author}</span>
            <GradeBadge grade={grade} />
            <span>•</span>
            <span>
              <Calendar size={18} className="inline-block" />
              {date}
            </span>
          </div>

          {/* 수정/삭제 버튼 */}
          {isAuthor && (
            <div className="space-x-2">
              <Link href={`/code/${id}/edit`} className="inline-block">
                <button className="text-sm text-blue-600 hover:underline">수정</button>
              </Link>
              <button className="text-sm text-red-600 hover:underline" onClick={() => {}}>
                삭제
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {categories.length > 0 &&
            categories.map((category) => {
              return <CategoryBadge key={category.id} name={category.name} />;
            })}
        </div>
      </div>

      <div className="shadow-sm mb-6 border rounded-lg overflow-hidden">
        <div className="flex items-center justify-between bg-gray-100 px-4 py-2">
          <span className="font-medium">코드</span>
          {userReviewContent.length > 0 && (
            <label className="inline-flex gap-2 items-center cursor-pointer">
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                내 리뷰 보기
              </span>
              <input
                onClick={() => setShowOwnReview(!showOwnReview)}
                type="checkbox"
                value=""
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400 dark:peer-checked:bg-yellow-400"></div>
            </label>
          )}
        </div>
        {showOwnReview ? (
          <div className="font-mono text-sm overflow-hidden relative">
            <div className="overflow-x-auto p-4">
              <div data-color-mode="light">
                <MDEditor.Markdown source={userReviewContent} style={{ whiteSpace: 'pre-wrap' }} />
              </div>
            </div>
          </div>
        ) : (
          <div className="font-mono text-sm overflow-hidden relative">
            <div className="overflow-x-auto p-4">
              <div data-color-mode="light">
                <MDEditor.Markdown source={content} style={{ whiteSpace: 'pre-wrap' }} />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
