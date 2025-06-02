import { notFound } from 'next/navigation';
import CodeListClientContainer from './CodeListClientContainer';
import { Code } from './CodeList';

async function getCodeList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/codes`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    console.error('Failed to fetch code list:', res.statusText);
    notFound();
  }
  const result: { data: Code }[] = await res.json();
  const codes = result.map((item) => item.data);
  if (!codes) {
    notFound();
  }
  return codes;
}

export default async function CodeListContainer() {
  const codes = await getCodeList();
  return <CodeListClientContainer codes={codes} />;
}
