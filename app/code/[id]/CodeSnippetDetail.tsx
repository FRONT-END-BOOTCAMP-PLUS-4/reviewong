'use client';
import Link from 'next/link';
import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import ProfileImage from '@/app/components/ProfileImage';
import { Calendar } from 'lucide-react';
interface CodeSnippetDetailProps {
  id: number;
  title: string;
  content: string;
  author: string;
  profileImage?: string;
  date: string;
  categories?: { id: number; name: string }[];
  isAuthor: boolean;
}

export default function CodeSnippetDetail({
  id,
  title,
  content,
  author,
  profileImage,
  date,
  categories = [],
  isAuthor = false,
}: CodeSnippetDetailProps) {
  return (
    <main className="p-4">
      <div className="mb-6 border rounded-lg border-gray-100 bg-white shadow-sm p-4">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <div className="flex items-center justify-between text-gray-500">
          {/* 작성자 정보 */}
          <div className="flex items-center space-x-2">
            <ProfileImage
              size={40}
              src={profileImage ?? '/default-profile-image.png'}
              alt="프로필 이미지"
            />
            <span>{author}</span>
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
              return (
                <span
                  key={category.id}
                  className="leading-[14px] h-[34px] bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  <span>{category.name}</span>
                </span>
              );
            })}
        </div>
      </div>

      <div className="shadow-sm mb-6 border rounded-lg overflow-hidden">
        <div className="flex items-center justify-between bg-gray-100 px-4 py-2">
          <span className="font-medium">코드</span>
        </div>

        <div className="font-mono text-sm overflow-hidden relative">
          <div className="overflow-x-auto p-4">
            <div data-color-mode="light">
              <MDEditor.Markdown source={content} style={{ whiteSpace: 'pre-wrap' }} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
