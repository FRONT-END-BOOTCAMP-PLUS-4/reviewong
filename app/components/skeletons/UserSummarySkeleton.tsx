import { Skeleton } from '@/components/ui/skeleton';

export default function UserSummarySkeleton() {
  return (
    <div className="my-6 max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow border">
      {/* 상단 프로필 섹션 */}
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <Skeleton className="w-[60px] h-[60px] rounded-full" />
          <div className="space-y-2">
            <Skeleton className="w-32 h-6" />
            <Skeleton className="w-40 h-4" />
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className="w-24 h-9 rounded-md" />
          <Skeleton className="w-20 h-9 rounded-md" />
        </div>
      </div>

      {/* 통계 카드 영역 */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="bg-gray-50 rounded-xl py-4 space-y-2">
          <Skeleton className="mx-auto w-12 h-6" />
          <Skeleton className="mx-auto w-16 h-4" />
        </div>
        <div className="bg-gray-50 rounded-xl py-4 space-y-2">
          <Skeleton className="mx-auto w-12 h-6" />
          <Skeleton className="mx-auto w-16 h-4" />
        </div>
        <div className="bg-gray-50 rounded-xl py-4 space-y-2">
          <Skeleton className="mx-auto w-12 h-6" />
          <Skeleton className="mx-auto w-16 h-4" />
        </div>
      </div>
    </div>
  );
}
