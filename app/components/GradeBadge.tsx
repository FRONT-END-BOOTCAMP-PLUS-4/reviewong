import Image from 'next/image';
import React from 'react';

const GRADE_MAP: Record<string, string> = {
  브론즈: 'bronze',
  실버: 'silver',
  골드: 'gold',
  플래티넘: 'platinum',
  다이아몬드: 'diamond',
};

export default function GradeBadge({
  size = 40,
  grade = '브론즈',
  className = '',
}: {
  size?: number;
  grade?: string;
  className?: string;
}) {
  const badgeType = GRADE_MAP[grade] || 'bronze'; // 기본값으로 bronze 사용

  return (
    <Image
      src={`/badges/badge-${badgeType}.svg`}
      alt={`${grade} 등급 이미지`}
      width={size}
      height={size}
      className={`inline-block -mt-[5px] -ml-[10px] ${className}`}
    />
  );
}
