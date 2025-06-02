export default function CodeDetailSkeleton() {
  return (
    <>
      <div className="mb-6 pt-4">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3 animate-pulse" />
        <div className="flex items-center justify-between text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
            <div className="w-20 h-4 bg-gray-200 rounded animate-pulse" />
            <div className="w-12 h-4 bg-gray-200 rounded animate-pulse" />
            <span>•</span>
            <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
          ))}
        </div>
      </div>
      <div className="space-y-3 py-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`h-6 bg-gray-200 rounded animate-pulse ${i % 5 === 0 ? 'w-3/4' : 'w-full'}`}
          />
        ))}
        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse mt-2" />
      </div>
    </>
  );
}
