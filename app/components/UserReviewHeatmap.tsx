'use client';
import React, { useState, useRef } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

type HeatmapData = { date: string; count: number };

export default function UserReviewHeatmap({ reviewCounts }: { reviewCounts: HeatmapData[] }) {
  const [tooltipInfo, setTooltipInfo] = useState<{
    date: string;
    count: number;
    x: number;
    y: number;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getClassName = (count?: number) => {
    if (!count) {
      return 'fill-gray-100';
    }
    if (count >= 4) {
      return 'fill-yellow-400';
    }
    if (count === 3) {
      return 'fill-yellow-300';
    }
    if (count === 2) {
      return 'fill-yellow-200';
    }
    if (count === 1) {
      return 'fill-yellow-100';
    }
    return 'fill-gray-200';
  };

  function shiftDate(date: Date, numDays: number): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }

  const today = new Date();

  return (
    <div ref={containerRef} className="relative">
      <CalendarHeatmap
        startDate={shiftDate(today, -300)}
        endDate={today}
        values={reviewCounts}
        classForValue={(value: HeatmapData | null) => getClassName(value?.count)}
        transformDayElement={(element: React.ReactElement, value: HeatmapData | null) => {
          return React.cloneElement(element, {
            rx: 4,
            ry: 4,
            onMouseEnter: (e: MouseEvent) => {
              if (value && containerRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const targetRect = (e.target as HTMLElement).getBoundingClientRect();

                setTooltipInfo({
                  ...value,
                  x: targetRect.left - containerRect.left + targetRect.width / 2,
                  y: targetRect.top - containerRect.top,
                });
              }
            },
            onMouseLeave: () => setTooltipInfo(null),
          });
        }}
      />

      {tooltipInfo && (
        <div
          className="absolute z-10 px-3 py-2 text-sm bg-yellow-500 rounded-xl shadow-lg pointer-events-none whitespace-nowrap"
          style={{
            left: tooltipInfo.x,
            top: tooltipInfo.y - 35,
            transform: 'translateX(-50%)',
          }}
        >
          {`${tooltipInfo.date.split('T')[0]} ${tooltipInfo.count}번 리뷰했어요!`}
        </div>
      )}
    </div>
  );
}
