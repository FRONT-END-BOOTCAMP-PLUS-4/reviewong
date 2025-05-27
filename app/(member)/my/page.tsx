'use client';

import { useEffect, useState } from 'react';
// @ts-ignore
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

export default function Mypage() {
  const [heatmapData, setHeatmapData] = useState<{ date: string; count: number }[]>([]);

  useEffect(() => {
    const fetchHeatmapData = async () => {
      try {
        const res = await fetch('/api/member/my/review_counts');
        if (!res.ok) {
          throw new Error('Failed to fetch heatmap data');
        }
        const data = await res.json();
        setHeatmapData(data.reviewHeatmap);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHeatmapData();
  }, []);

  return (
    <div>
      <CalendarHeatmap
        startDate={new Date('2025-01-01')}
        endDate={new Date('2025-12-31')}
        values={heatmapData}
      />
    </div>
  );
}
