import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
interface TabDefinition {
  label: string;
  value: string;
  content: React.ReactNode;
}

interface MyActivityListProps {
  tabs: TabDefinition[];
  defaultValue?: string;
}

export default function ActivityList({ tabs, defaultValue = 'written' }: MyActivityListProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl">
      <Tabs defaultValue={defaultValue} className="w-full">
        <TabsList className="grid grid-cols-2 w-full h-[50px]">
          {tabs.map(({ label, value }) => (
            <TabsTrigger key={value} value={value}>
              {label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map(({ value, content }) => (
          <TabsContent key={value} value={value}>
            {content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
