'use client';
import MDEditor from '@uiw/react-md-editor';
import { CategorySelectDropdown } from './CategorySelectDropdown';

interface Props {
  form: {
    title: string;
    content: string;
    categories: number[];
  };
  onChange: (key: keyof Props['form'], value: string | number[]) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

export default function CodeSnippetForm({ form, onChange, onSubmit, onCancel }: Props) {
  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <input
        type="text"
        value={form.title}
        onChange={(e) => onChange('title', e.target.value)}
        placeholder="제목을 입력하세요"
        className="w-full text-4xl font-bold placeholder-gray-400 focus:outline-none border-none"
        required
      />
      <CategorySelectDropdown
        selected={form.categories}
        onChange={(value) => onChange('categories', value)}
      />
      <div data-color-mode="light" className="bg-white rounded-xl shadow-md border border-gray-200">
        <MDEditor
          height={500}
          value={form.content}
          onChange={(value) => onChange('content', value || '')}
        />
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-md text-sm text-gray-600 bg-gray-100 hover:bg-gray-200"
        >
          취소
        </button>
        <button
          type="submit"
          className="px-6 py-2 rounded-md text-sm font-semibold text-yellow-900 bg-yellow-400 hover:bg-yellow-500 shadow-sm"
        >
          발행하기
        </button>
      </div>
    </form>
  );
}
