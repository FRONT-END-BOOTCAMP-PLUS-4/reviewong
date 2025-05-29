'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface CodeSnippetForm {
  title: string;
  content: string;
  categories: number[];
}

export function useCodeSnippetForm() {
  const router = useRouter();
  const [form, setForm] = useState<CodeSnippetForm>({
    title: '',
    content: '',
    categories: [],
  });

  const updateField = <K extends keyof CodeSnippetForm>(key: K, value: CodeSnippetForm[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/member/codes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          userId: '4cbe1f00-bcff-47d1-898a-5e75f00ea53b', // FIXME: 유저 정보 동적 처리
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to create code snippet');
      }

      const data = await res.json();
      router.push(`/codes/${data.id}`);
    } catch (err) {
      console.error('Error creating code snippet:', err);
    }
  };

  return {
    form,
    updateField,
    handleFormSubmit,
    goBack: () => router.back(),
  };
}
