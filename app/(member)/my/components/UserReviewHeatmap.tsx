'use client';
import React, { useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import 'react-calendar-heatmap/dist/styles.css';

type HeatmapData = { date: string; count: number };

export default function UserReviewHeatmap({ reviewCounts }: { reviewCounts: HeatmapData[] }) {
  const [tooltipInfo, setTooltipInfo] = useState<{ date: string; count: number } | null>(null);

  const getClassName = (count?: number) => {
    if (!count) {
      return 'fill-gray-200';
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
  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }
  const today = new Date();
  return (
    <TooltipProvider>
      <div className="relative">
        <CalendarHeatmap
          startDate={shiftDate(today, -300)}
          endDate={today}
          values={reviewCounts}
          classForValue={(value: HeatmapData | null) => {
            return getClassName(value?.count);
          }}
          transformDayElement={(element: React.ReactElement, value: HeatmapData | null) => {
            return (
              <Tooltip>
                <TooltipTrigger asChild>
                  {React.cloneElement(element, {
                    rx: 100,
                    ry: 100,
                    onMouseEnter: () => value && setTooltipInfo(value),
                    onMouseLeave: () => setTooltipInfo(null),
                  })}
                </TooltipTrigger>
                {value?.date && (
                  <TooltipContent>
                    <p className="text-sm font-bold">{`${value.date.split('T')[0]}: ${value.count}번 리뷰했어요!`}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            );
          }}
        />
      </div>
    </TooltipProvider>
  );
}
