'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface CodeSnippetForm {
  title: string;
  content: string;
  categories: number[];
}

export function useCodeSnippetEditForm(id: string) {
  const router = useRouter();
  const [form, setForm] = useState<CodeSnippetForm>({
    title: '',
    content: '',
    categories: [],
  });

  useEffect(() => {
    const fetchCodeSnippet = async () => {
      try {
        const res = await fetch(`/api/codes/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch code snippet');
        }
        const data = await res.json();

        setForm({
          title: data.title,
          content: data.content,
          categories: data.categories.map((c: any) => c.id),
        });
        console.log(
          'Fetched code snippet:',
          data,
          data.categories,
          data.categories.map((c: any) => c.categoryId)
        );
      } catch (err) {
        console.error('Error fetching code snippet:', err);
      }
    };

    fetchCodeSnippet();
  }, [id]);

  const updateField = <K extends keyof CodeSnippetForm>(key: K, value: CodeSnippetForm[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/member/codes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          userId: '4cbe1f00-bcff-47d1-898a-5e75f00ea53b', // FIXME: 유저 정보 동적 처리
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to update code snippet');
      }

      router.push(`/code/${id}`);
    } catch (err) {
      console.error('Error updating code snippet:', err);
    }
  };

  return {
    form,
    updateField,
    handleFormSubmit,
    goBack: () => router.back(),
  };
}
