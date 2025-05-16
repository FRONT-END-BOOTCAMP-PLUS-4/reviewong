import { PrismaClient } from './generated';

const prisma = new PrismaClient();

async function main() {
  // --- CodeSnippet -------------------------
  // await prisma.codeSnippet.createMany({
  //   data: [
  //     {
  //       id: 1,
  //       title: 'Hello World in JS',
  //       content: 'console.log(\'Hello, world!\');',
  //       userId: '7ae5e5c9-0c28-426f-952f-85bdfdcfc522',
  //     },
  //     {
  //       id: 2,
  //       title: 'React useState',
  //       content: 'const [count, setCount] = useState(0);',
  //       userId: 'e755441d-1979-4617-acd5-531f2f898b22',
  //     },
  //     {
  //       id: 3,
  //       title: 'Bubble Sort',
  //       content: 'function bubbleSort(arr) { /* ... */ }',
  //       userId: '7ae5e5c9-0c28-426f-952f-85bdfdcfc522',
  //     },
  //   ],
  //   skipDuplicates: true,
  // });
  // // --- Review -------------------------
  // await prisma.review.createMany({
  //   data: [
  //     {
  //       content: '이 코드 정말 유용하네요!',
  //       userId: '7ae5e5c9-0c28-426f-952f-85bdfdcfc522',
  //       codeId: 3,
  //     },
  //     {
  //       content: '조금 더 설명이 있었으면 좋겠어요.',
  //       userId: 'e755441d-1979-4617-acd5-531f2f898b22',
  //       codeId: 3,
  //     },
  //     {
  //       content: '리팩토링 팁 감사합니다!',
  //       userId: '7ae5e5c9-0c28-426f-952f-85bdfdcfc522',
  //       codeId: 3,
  //       parentId: 1,
  //     },
  //   ],
  // });
  // // --- ReviewLike -------------------------
  // await prisma.reviewLike.createMany({
  //   data: [
  //     {
  //       userId: '7ae5e5c9-0c28-426f-952f-85bdfdcfc522',
  //       reviewId: 2, // dragon의 리뷰에 newlec이 좋아요
  //     },
  //     {
  //       userId: 'e755441d-1979-4617-acd5-531f2f898b22',
  //       reviewId: 1, // newlec의 리뷰에 dragon이 좋아요
  //     },
  //     {
  //       userId: 'f4149c84-e247-469a-bc82-6f5c11456561',
  //       reviewId: 1, // newlec의 리뷰에 dragon이 좋아요
  //     },
  //   ],
  //   skipDuplicates: true,
  // });
  // console.log('✅ Seed completed!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
