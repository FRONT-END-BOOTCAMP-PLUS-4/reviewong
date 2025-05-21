'use client';
import { useCodeSnippetEditForm } from './useCodeSnippetEditForm';
import CodeSnippetForm from '../../create/components/CodeSnippetForm';

export default function CodeSnippetEditContainer({ id }: { id: string }) {
  const { form, updateField, handleFormSubmit, goBack } = useCodeSnippetEditForm(id);

  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-32">
      <CodeSnippetForm
        form={form}
        onChange={updateField}
        onSubmit={handleFormSubmit}
        onCancel={goBack}
      />
    </div>
  );
}
