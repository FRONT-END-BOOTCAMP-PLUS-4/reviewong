'use client';

import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Button } from '@/components/ui/button';

interface ReviewFormProps {
  onSubmit: (data: { content: string }) => void;
}

export default function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [value, setValue] = useState<string>('');

  const handleSubmit = () => {
    if (!value.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }

    onSubmit({
      content: value,
    });
    setValue('');
  };

  return (
    <div className="flex flex-col w-full p-4 bg-white border-3 rounded-lg gap-2 mt-5">
      <h3 className="text-xl mt-[1rem] font-bold">리뷰 작성</h3>
      <div data-color-mode="light">
        <MDEditor height={200} value={value} onChange={(val) => setValue(val ?? '')} />
      </div>
      <Button className="w-20 font-bold" onClick={handleSubmit}>
        등록
      </Button>
    </div>
  );
}
