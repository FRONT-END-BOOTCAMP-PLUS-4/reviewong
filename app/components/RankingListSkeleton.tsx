import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RankingListSkeletonProps {
  title: string;
  className?: string;
}

export default function RankingListSkeleton({ title, className = '' }: RankingListSkeletonProps) {
  return (
    <Card className={`h-full bg-white ${className}`}>
      <CardHeader>
        <CardTitle className="text-center text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center gap-3 animate-pulse">
              <div className="w-6 h-6 bg-gray-200 rounded" />
              <div className="w-8 h-8 bg-gray-200 rounded-full" />
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-24" />
              </div>
              <div className="w-8 h-4 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
