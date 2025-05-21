'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewForm from '../components/ReviewForm';
import ReviewFormGuestView from '../components/ReviewFormGuestView';

export default function ReviewFormContainer({
  codeId,
  parentId,
}: {
  codeId: number;
  parentId?: number | null;
}) {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    setToken(storedToken);
  }, []);

  const handleCreate = async (data: {
    content: string;
    parentId?: number | null;
    codeId?: number;
  }) => {
    try {
      const reviewData = {
        content: data.content,
        codeId,
        parentId,
      };

      await axios.post('/api/reviews', reviewData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch {
      alert('리뷰 작성 실패');
    }
  };
  if (!token) {
    return;
    <ReviewFormGuestView />;
  }

  return <ReviewForm onSubmit={handleCreate} />;
}
