import Image from 'next/image';
import { ComponentProps } from 'react';
import {
  Card as Cd,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { PartyPopper, ThumbsUp } from 'lucide-react';
import SocialLink from './custom/SocialLink';

type ArticleCardTitleProps = {
  title: '熱門文章' | '推薦文章';
  color: 'primary-100' | 'secondary-100';
} & ComponentProps<'div'>

export default function ArticleCardTemplate({ title, color }: ArticleCardTitleProps) {
  const colorVariants: Record<'primary-100' | 'secondary-100', string> = {
    'primary-100': 'bg-primary-100',
    'secondary-100': 'bg-secondary-100',
  };

  const containerClass = `xl-w-1280 lg:max-w-1024 relative rounded-lg ${colorVariants[color]}`;

  return (
    <>
      <div className={containerClass}>
        {title === '熱門文章' ? (
          <>
            <h1 className='flex justify-center border-b-16 border-r-16 w-[200px] border-white text-2xl text-white gap-3 p-4 bg-secondary'><PartyPopper />{title}</h1>
            <div className='absolute top-7 right-9 border-2 border-solid border-blue-600'><a href='' className='block px-4 py-3 text-blue-500'>查看更多</a></div>
          </>
        ) : (
          <h1 className='flex justify-center border-b-16 border-r-16 w-[200px] border-white text-2xl text-white gap-3 p-4 bg-primary'><ThumbsUp />{title}</h1>
        )}
        <div className='grid p-9 xl:grid-cols-2 gap-x-4 gap-y-9'>
          {'1234567890'.split('').map((item, index) => (
            < Cd key={item} >
              <div className='grid grid-cols-12'>
                <div className='col-span-9'>
                  <CardHeader className='col-span-10'>
                    <CardTitle className='text-xl font-bold truncate'>探索京都的古老魅力：千年古都的神秘之旅探索京都的古老魅力：千年古都的神秘之旅</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='line-clamp-2'>京都是一個充滿歷史與文化的城市，擁有眾多古老的寺廟和神社。在這裡，您可以體驗到日本傳統的茶道、花道等文化活動。</p>
                  </CardContent>
                </div>
                <div className='relative col-span-3 flex justify-self-end w-[100px] h-[100px]'>
                  <Image src={`https://picsum.photos/id/${index + 10}/100/100`} alt='jorney bites' sizes='100%' placeholder='empty' priority={false} fill={true} className='rounded-lg' />
                </div>
              </div>
              <CardFooter className='py-2'>
                <Avatar>
                  <AvatarImage asChild src={`https://picsum.photos/id/${index + 20}/100/100`}>
                    <Image src={`https://picsum.photos/id/${index + 20}/100/100`} alt='logo' width={40} height={40} />
                  </AvatarImage>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className='px-2'>林美慧</p>
              </CardFooter>
              <div className='flex align-center justify-between'>
                <CardDescription>2024/3/23</CardDescription>
                <SocialLink />
              </div>
            </Cd>
          ))}
        </div>
      </div >
    </>
  );
}
