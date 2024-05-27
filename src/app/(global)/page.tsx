'use client';

import Image from 'next/image';
import ArticleCardTemplate from '@/components/articleCardTemplate';

import BannerImg from '@/images/banner.webp';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Image src={BannerImg} alt='journey bites' />
      <ArticleCardTemplate title='熱門文章' color='secondary-100' />
      <ArticleCardTemplate title='推薦文章' color='primary-100' />
    </main>
  );
}
