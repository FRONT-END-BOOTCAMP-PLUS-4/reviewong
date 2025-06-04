'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HEADLINE = '리뷰엉이, 당신의 코드 리뷰를 기다립니다';
const SUBTEXT = '코드 리뷰를 통해 더 나은 서비스와 더 나은 코드를 만들어보세요.';

export default function AnimatedHeadline() {
  const [headlineText, setHeadlineText] = useState('');
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [headlineDone, setHeadlineDone] = useState(false);

  useEffect(() => {
    if (headlineIndex < HEADLINE.length) {
      const timeout = setTimeout(() => {
        setHeadlineText((prev) => prev + HEADLINE[headlineIndex]);
        setHeadlineIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setHeadlineDone(true);
    }
  }, [headlineIndex]);

  useEffect(() => {
    if (headlineDone && subIndex < SUBTEXT.length) {
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [headlineDone, subIndex]);

  return (
    <div className="text-center my-12 min-h-[84px]">
      <h1 className="text-4xl font-extrabold tracking-tight font-mono">
        <span>{headlineText}</span>
        {!headlineDone && (
          <motion.span
            className="inline-block w-[1ch] text-primary"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            |
          </motion.span>
        )}
      </h1>
      {headlineDone && (
        <motion.p
          className="text-lg text-muted-foreground max-w-xl mx-auto mt-4 font-mono text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          코드 리뷰를 통해 더 나은 서비스와 더 나은 코드를 만들어보세요.
        </motion.p>
      )}
    </div>
  );
}
