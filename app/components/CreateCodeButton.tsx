import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

interface CreateCodeButtonProps {
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'default' | 'outline';
}

export default function CreateCodeButton({
  size = 'sm',
  variant = 'outline',
}: CreateCodeButtonProps) {
  return (
    <Button variant={variant} size={size} className="gap-1 cursor-pointer">
      <PlusCircle className="h-4 w-4" />
      코드 작성
    </Button>
  );
}
