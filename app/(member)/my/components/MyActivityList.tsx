import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import MyAnsweredReviewContainer from '@/app/(member)/my/containers/MyAnsweredReviewContainer';
import MyWrittenCodeContainer from '@/app/(member)/my/containers/MyWrittenCodeContainer';

const TABS = [
  { label: '내가 작성한 코드', value: 'written' },
  { label: '내가 답변한 리뷰', value: 'answered' },
];

export default function MyActivityList() {
  return (
    <Tabs defaultValue="written" className="w-full">
      <TabsList className="grid grid-cols-2">
        {TABS.map(({ label, value }) => (
          <TabsTrigger key={value} value={value}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="written">
        <MyWrittenCodeContainer isActive={true} />
      </TabsContent>

      <TabsContent value="answered">
        <MyAnsweredReviewContainer isActive={true} />
      </TabsContent>
    </Tabs>
  );
}
