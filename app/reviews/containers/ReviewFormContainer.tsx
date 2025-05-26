'use client';

import axios from 'axios';
import ReviewForm from '../components/ReviewForm';
import ReviewFormGuestView from '../components/ReviewFormGuestView';
import { useSession } from 'next-auth/react';

export default function ReviewFormContainer({
  codeId,
  parentId,
  editingReview,
  onDone,
}: {
  codeId: number;
  parentId?: number | null;
  editingReview?: { id: number; content: string };
  onDone?: () => void;
}) {
  const { data: session } = useSession();

  const handleSubmit = async ({ content }: { content: string }) => {
    try {
      if (editingReview) {
        // 수정 요청
        await axios.put(`/api/reviews/${editingReview.id}`, { content });
      } else {
        // 새 리뷰 작성 요청
        await axios.post('/api/reviews', {
          content,
          codeId,
          parentId,
        });
      }
      onDone?.();
    } catch {
      alert(editingReview ? '리뷰 수정 실패' : '리뷰 작성 실패');
    }
  };

  if (!session) {
    return <ReviewFormGuestView />;
  }

  return <ReviewForm onSubmit={handleSubmit} initialValue={editingReview?.content} />;
}
