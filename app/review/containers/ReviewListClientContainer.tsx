'use client';

import { useState } from 'react';
import { ReviewView } from '@/domain/entities/ReviewView';
import ReviewList from '../components/ReviewList';

interface Props {
  codeId: number;
  reviews: ReviewView[];
}

export default function ReviewListClientContainer({ codeId, reviews }: Props) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <ReviewList
      reviews={reviews}
      codeId={codeId}
      parentId={expandedId}
      onExpandClick={(id) => setExpandedId((prev) => (prev === id ? null : id))}
      commentButton
    />
  );
}
