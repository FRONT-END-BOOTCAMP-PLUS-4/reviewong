import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface EmptyListProps {
  icon: ReactNode;
  text: string;
  midTitle?: string;
  btnText?: string;
  onClick?: () => void;
}

export default function EmptyList({ icon, text, midTitle, btnText, onClick }: EmptyListProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-gray-500">
      {icon}
      <p className="text-center text-lg font-medium">작성한 {text}가 없습니다</p>
      {midTitle && <p className="text-sm mt-1">{midTitle}</p>}
      {btnText && (
        <Button
          onClick={onClick}
          className="mt-6 bg-primary font-bold text-white px-6 py-2 rounded-l"
        >
          {btnText}
        </Button>
      )}
    </div>
  );
}
