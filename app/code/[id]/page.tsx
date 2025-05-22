import ReviewListContainer from '@/app/review/containers/ReviewListContainer';
import CodeSnippetDetailContainer from './CodeSnippetDetailContainer';

export default function CodeSnippetDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const codeId = parseInt(id, 10);

  return (
    <main>
      <CodeSnippetDetailContainer id={id} />
      <ReviewListContainer codeId={codeId} />
    </main>
  );
}
