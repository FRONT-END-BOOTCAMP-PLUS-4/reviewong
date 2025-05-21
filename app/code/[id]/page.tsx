import CodeSnippetDetailContainer from './CodeSnippetDetailContainer';

export default function CodeSnippetDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <main>
      <CodeSnippetDetailContainer id={id} />
      {/* <ReviewList snippetId={id} /> */}
    </main>
  );
}
