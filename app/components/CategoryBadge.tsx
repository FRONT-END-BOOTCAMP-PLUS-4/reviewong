import React from 'react';

const CATEGORY_COLOR_MAP: Record<string, string> = {
  JavaScript: 'bg-yellow-300 text-black',
  TypeScript: 'bg-blue-400 text-white',
  CSS: 'bg-purple-300 text-black',
  'React.js': 'bg-cyan-300 text-black',
};

export default function CategoryBadge({
  name,
  className = '',
  children,
}: {
  name: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const colorClass = CATEGORY_COLOR_MAP[name];

  return (
    <span
      style={{ lineHeight: '13px' }}
      className={`px-2.5 py-1.5 flex gap-2 rounded-full text-xs ${colorClass} ${className}`}
    >
      {name}
      {children}
    </span>
  );
}
