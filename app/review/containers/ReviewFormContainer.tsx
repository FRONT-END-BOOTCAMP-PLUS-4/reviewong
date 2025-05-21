'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewForm from '../components/ReviewForm';
import { useRouter } from 'next/navigation';

export default function ReviewFormContainer({
  codeId,
  parentId,
}: {
  codeId: number;
  parentId?: number | null;
}) {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    setToken(storedToken);
    if (!storedToken) {
      alert('로그인이 필요합니다.');
      router.push('/login');
    }
  }, [router]);

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

  return <ReviewForm onSubmit={handleCreate} />;
}
