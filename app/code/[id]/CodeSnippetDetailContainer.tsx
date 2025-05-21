import { notFound } from 'next/navigation';
import CodeSnippetDetail from './CodeSnippetDetail';
import { formatDate } from '@/utils/formatDate';
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

export default async function CodeSnippetDetailContainer({ id }: { id: string }) {
  const codeSnippet = await getCodeSnippet(id);
  return (
    <CodeSnippetDetail
      title={codeSnippet.title}
      content={codeSnippet.content}
      author={codeSnippet.user.nickname}
      profileImage={codeSnippet.user.imageUrl}
      date={formatDate(codeSnippet.createdAt)}
      categories={codeSnippet.categories}
    />
  );
}
