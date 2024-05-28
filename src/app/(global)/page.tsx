'use client';

import Image from 'next/image';

import BannerImg from '@/images/banner.webp';
import CreatorList from '@/components/CreatorList';
import PopularArea from '@/components/PopularArea';
import ArticleCard from '@/components/ArticleCard';
import { Suspense } from 'react';
import Loading from '@/components/loading';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Image src={BannerImg} alt='journey bites' />
      <div className='md:max-w-1024 lg:max-w-1024 xl:max-w-1024 2xl:max-w-1280 mx-auto'>
        <div className='grid'>
          <div className='grid grid-cols-12'>
            <div className='xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-8 2xl:col-span-8 xs:px-3 sm:px-3 md:px-3'>
              <Suspense fallback={<Loading />}>
                <ArticleCard title='熱門文章' color='secondary-100' />
              </Suspense>
              <Suspense fallback={<Loading />}>
                <ArticleCard title='推薦文章' color='primary-100' />
              </Suspense>
            </div>
            <div className='xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4 2xl:col-span-4 xs:px-3 sm:px-3 md:px-3 md:ml-6 lg:ml-6 xl:ml-6 2xl:ml-6'>
              <CreatorList />
              <PopularArea />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
