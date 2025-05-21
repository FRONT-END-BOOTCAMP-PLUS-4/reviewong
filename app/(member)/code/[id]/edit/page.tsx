import CodeSnippetEditContainer from './CodeSnippetEditContainer';

export default function CodeEditPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <main className="container mx-auto px-4 py-8">
      <CodeSnippetEditContainer id={id} />
    </main>
  );
}
