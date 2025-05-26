'use client';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const categoryList = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'TypeScript' },
  { id: 3, name: 'React.js' },
  { id: 4, name: 'CSS' },
];

export function CategorySelectDropdown({
  selected,
  onChange,
}: {
  selected: number[];
  onChange: (categories: number[]) => void;
}) {
  const handleToggle = (id: number, checked: boolean) => {
    if (checked) {
      onChange([...selected, id]);
    } else {
      onChange(selected.filter((cid) => cid !== id));
    }
  };

  const handleXBtnClick = (id: number) => {
    onChange(selected.filter((cid) => cid !== id));
  };
  return (
    <div className="flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">카테고리 선택</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>카테고리</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {categoryList.map((category) => (
            <DropdownMenuCheckboxItem
              key={category.id}
              checked={selected.includes(category.id)}
              onCheckedChange={(checked) => handleToggle(category.id, Boolean(checked))}
            >
              {category.name}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Tag Container */}
      <div className="flex flex-wrap gap-2">
        {selected.map((id) => {
          const category = categoryList.find((c) => c.id === id);
          return (
            <span
              key={id}
              className="leading-[14px] h-[34px] bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              <span>{category?.name}</span>
              <button onClick={() => handleXBtnClick(id)} aria-label="카테고리 삭제">
                <X size={14} />
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
}
