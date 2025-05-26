'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useRouter } from 'next/navigation';

export default function ReviewFormGuestView() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full p-4 bg-white border-3 rounded-lg gap-2 mt-5">
      <h3 className="text-xl mt-[1rem] font-bold">리뷰 작성</h3>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <textarea
            className="h-32 p-2 border rounded text-gray-500 bg-gray-100 resize-none cursor-pointer"
            placeholder="코드에 대한 리뷰를 작성하려면 로그인해주세요."
            readOnly
          />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>로그인이 필요합니다</AlertDialogTitle>
            <AlertDialogDescription>
              더 나은 코드 리뷰 경험을 위해 로그인이 필요합니다.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="font-bold">닫기</AlertDialogCancel>
            <AlertDialogAction className="font-bold" onClick={() => router.push('/auth/login')}>
              로그인
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
