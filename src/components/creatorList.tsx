import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import Image from 'next/image';

export default function CreatorList() {
  return (
    <div className='p-7 border-2 rounded-lg'>
      <h3 className='text-3xl'>創作者列表</h3>
      {Array.from({ length: 5 }, (_, i) => i).map((item) => {
        return (
          <div key={item} className=' after:content-[""] after:block after:border-b-2 after:border-dotted after:border-indigo-500/100 after:last-of-type:border-b-0'>
            <div className='flex py-4'>
              <Avatar>
                <AvatarImage asChild src='https://picsum.photos/id//100/100'>
                  <Image src='https://picsum.photos/id/100/100' alt='logo' width={40} height={40} priority />
                </AvatarImage>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className='flex flex-col pl-4'>
                <h4 className='text-xl font-bold'>馬亞弗朗西斯</h4>
                <p className='line-clamp-2 font-normal'>瑪雅是一位對冒險充滿熱情的旅行者。她喜歡挑戰自己,瑪雅是一位對冒險充滿熱情的旅行者。她喜歡挑戰自己,探索世...</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
