'use client';
import { useCodeSnippetForm } from './useCodeSnippetForm';
import CodeSnippetForm from './components/CodeSnippetForm';

export default function CodeSnippetCreateContainer() {
  const { form, updateField, handleFormSubmit, goBack } = useCodeSnippetForm();

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
