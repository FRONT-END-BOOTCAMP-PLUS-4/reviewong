import CodeSnippetEditContainer from './CodeSnippetEditContainer';

export default async function CodeEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main className="container mx-auto px-4 py-8">
      <CodeSnippetEditContainer id={id} />
    </main>
  );
}
