'use client';

import Image from 'next/image';
import { LockKeyhole, Sparkles } from 'lucide-react';

export default function ReviewLockGlassmorphism() {
  return (
    <div className="relative w-full border-gray-100 min-h-[20rem] mt-10 aspect-[3/2] rounded-2xl overflow-hidden">
      {/* 배경 이미지 */}
      <div className="relative w-full h-[450px] aspect-[3/2]">
        <Image src="/reviewLock.png" alt="리뷰 잠김" fill className="" />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8">
        {/* 아이콘 컨테이너 */}
        <div className="relative mb-8">
          <div className="w-28 h-28 bg-white/50 border border-white/30 rounded-full flex items-center justify-center shadow-lg">
            <LockKeyhole className="w-14 h-14 text-yellow-400 drop-shadow-lg" />
          </div>

          {/* 반짝이는 효과 */}
          <Sparkles className="absolute -top-3 -right-3 w-6 h-6 text-yellow-300 animate-pulse" />
          <Sparkles className="absolute -bottom-3 -left-3 w-4 h-4 text-blue-300 animate-pulse delay-500" />
        </div>

        {/* 텍스트 */}
        <div className="text-center space-y-4 max-w-md bg-white/10 rounded-2xl p-6 border border-white/20">
          <h3 className="text-2xl font-bold text-black drop-shadow-lg">리뷰 잠금 해제</h3>

          <p className="text-black/90 text-sm leading-relaxed drop-shadow">
            먼저 리뷰를 작성하시면
            <br />
            다른 사용자들의 리뷰를 확인할 수 있어요
          </p>
        </div>
      </div>
    </div>
  );
}
