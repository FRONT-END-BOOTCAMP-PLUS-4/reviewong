import { notFound } from 'next/navigation';
import { formatDate } from '@/utils/formatDate';
import CodeSnippetDetail from './CodeSnippetDetail';
async function getCodeSnippet(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/codes/${id}`, {
    cache: 'no-store',
  });
  const codeSnippet = await res.json();
  if (!codeSnippet) {
    notFound();
  }
  return codeSnippet;
}

export default async function CodeSnippetDetailContainer({
  id,
  userId,
  userReviewContent,
}: {
  id: string;
  userId?: string;
  userReviewContent?: string;
}) {
  const codeSnippet = await getCodeSnippet(id);
  return (
    <CodeSnippetDetail
      id={codeSnippet.id}
      title={codeSnippet.title}
      content={codeSnippet.content}
      author={codeSnippet.user.nickname}
      profileImage={codeSnippet.user.imageUrl}
      grade={codeSnippet.user.grade}
      date={formatDate(codeSnippet.createdAt)}
      categories={codeSnippet.categories}
      isAuthor={userId === codeSnippet.user.id}
      userReviewContent={userReviewContent}
    />
  );
}
