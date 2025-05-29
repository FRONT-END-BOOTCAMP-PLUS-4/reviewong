'use client';

import Image from 'next/image';
import { LockKeyhole } from 'lucide-react';

export default function ReviewLock() {
  return (
    <div className="relative w-full min-h-[15rem] aspect-[3/2]">
      {/*자물쇠 아이콘 + 텍스트 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <LockKeyhole className="w-[10rem] h-[10rem] mx-auto" />
        <p className="mt-4 font-semibold text-xl">
          리뷰를 작성하고 다른 사람의 의견을 확인해 보세요!
        </p>
      </div>

      {/* 배경 이미지 */}
      <Image src="/reviewLock.png" alt="리뷰 잠김" fill className="object-contain z-0" />
    </div>
  );
}
