import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

const GRADE_MAP: Record<string, string> = {
  브론즈: 'bronze',
  실버: 'silver',
  골드: 'gold',
  플래티넘: 'platinum',
  다이아몬드: 'diamond',
};

const GRADE_RANGES = [
  { name: '브론즈', min: 0, max: 499, color: '#CD7F32' },
  { name: '실버', min: 500, max: 1499, color: '#C0C0C0' },
  { name: '골드', min: 1500, max: 2999, color: '#FFD700' },
  { name: '플래티넘', min: 3000, max: 4499, color: '#E5E4E2' },
  { name: '다이아몬드', min: 4500, max: Infinity, color: '#B9F2FF' },
];

// 모달 컴포넌트
function GradeModal({
  isOpen,
  onClose,
  grade,
}: {
  isOpen: boolean;
  onClose: () => void;
  grade: string;
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-lg scrollbar-hide p-6 max-w-lg w-full mx-4 relative max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 닫기 버튼 */}
          <button
            onClick={onClose}
            className="cursor-pointer absolute top-6 right-6 text-gray-500 hover:text-gray-700 z-10"
          >
            <X size={24} />
          </button>

          {/* 모달 내용 */}
          <div className="text-center mb-6">
            <h2 className="text-2xl text-black font-bold mb-4">등급 시스템</h2>
          </div>

          {/* 등급 표 */}
          <div className="mb-6">
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                      등급
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                      점수 범위
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                      배지
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {GRADE_RANGES.map((gradeRange) => {
                    const isCurrentGrade = gradeRange.name === grade;
                    return (
                      <tr key={gradeRange.name} className={isCurrentGrade ? 'bg-blue-50' : ''}>
                        <td className="px-4 py-3">
                          <span
                            className={`font-semibold ${isCurrentGrade ? 'text-blue-700' : ''}`}
                            style={{ color: isCurrentGrade ? undefined : gradeRange.color }}
                          >
                            {gradeRange.name}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          {gradeRange.max === Infinity
                            ? `${gradeRange.min.toLocaleString()}점 이상`
                            : `${gradeRange.min.toLocaleString()} ~ ${gradeRange.max.toLocaleString()}점`}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <Image
                            src={`/badges/badge-${GRADE_MAP[gradeRange.name]}.svg`}
                            alt={`${gradeRange.name} 배지`}
                            width={32}
                            height={32}
                            className="mx-auto"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* 점수 계산 방식 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-3 text-gray-900">점수 계산 방식</h3>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-700">받은 좋아요 수</span>
                <span className="font-mono bg-white px-2 py-1 rounded border">× 5점</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-700">리뷰 답변 수</span>
                <span className="font-mono bg-white px-2 py-1 rounded border">× 3점</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-700">코드 작성 수</span>
                <span className="font-mono bg-white px-2 py-1 rounded border">× 2점</span>
              </div>
            </div>

            <div className="border-t pt-3">
              <div className="text-sm text-gray-600">
                <strong>예시:</strong> 좋아요 20개, 리뷰 답변 30개, 코드 작성 20개
              </div>
              <div className="text-sm font-mono text-gray-700 mt-1">
                (20 × 5) + (30 × 3) + (20 × 2) = 100 + 90 + 40 = <strong>230점</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function GradeBadge({
  size = 40,
  grade = '브론즈',
  className = '',
  clickable = true,
}: {
  size?: number;
  grade?: string;
  className?: string;
  clickable?: boolean;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const badgeType = GRADE_MAP[grade] || 'bronze';

  const handleClick = () => {
    if (clickable) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Image
        src={`/badges/badge-${badgeType}.svg`}
        alt={`${grade} 등급 이미지`}
        width={size}
        height={size}
        className={`inline-block -mt-[5px] -ml-[10px] ${
          clickable ? 'cursor-pointer hover:scale-110 transition-transform' : ''
        } ${className}`}
        onClick={handleClick}
      />

      <GradeModal isOpen={isModalOpen} onClose={handleCloseModal} grade={grade} />
    </>
  );
}
