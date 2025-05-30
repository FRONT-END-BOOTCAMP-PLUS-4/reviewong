'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import CodeList, { Code } from './CodeList';
import { CategorySelectDropdown } from '../(member)/codes/create/components/CategorySelectDropdown';

interface Props {
  codes: Code[];
}

export default function CodeListClientContainer({ codes }: Props) {
  const [categoryCodes, setCategoryCodes] = useState<Code[]>(codes);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const fetchCodesByCategories = async (categoriesId: number[]) => {
    try {
      const query = categoriesId.join(',');
      const res = await fetch(`/api/codes?categories=${query}`);
      if (!res.ok) {
        throw new Error('Failed to fetch codes');
      }
      const data = await res.json();
      setCategoryCodes(data);
    } catch (error) {
      console.error(error);
      notFound();
    }
  };

  useEffect(() => {
    fetchCodesByCategories(selectedCategories);
  }, [selectedCategories]);

  return (
    <>
      <div className="flex flex-row m-5 items-center gap-3">
        <h3 className="font-bold">코드 목록</h3>
        <CategorySelectDropdown selected={selectedCategories} onChange={setSelectedCategories} />
      </div>
      <CodeList codes={categoryCodes} />
    </>
  );
}
