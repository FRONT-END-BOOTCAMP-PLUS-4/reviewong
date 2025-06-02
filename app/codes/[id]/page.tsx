import CodeReviewContainer from './CodeReviewContainer';
export default async function CodeSnippetDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  return <CodeReviewContainer id={id} />;
}
