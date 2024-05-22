import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import { Tab } from '@/types';

type TabsWithContentProps = {
  defaultValue: string;
  tabs: Tab[]
};

export default function TabsWithContent({ defaultValue, tabs }: TabsWithContentProps) {
  return (
    <Tabs defaultValue={defaultValue}>
      <TabsList className='text-grey-300 bg-grey p-0 rounded-lg overflow-hidden mb-10 shadow-tabs gap-4'>
        {tabs.map((tab) => (
          <TabsTrigger className='data-[state=active]:bg-primary data-[state=active]:text-white py-3 px-4' key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
        ))}
      </TabsList>
      {
        tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))
      }
    </Tabs>
  );
}
