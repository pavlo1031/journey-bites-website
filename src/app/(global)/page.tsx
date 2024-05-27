'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import jsCookie from 'js-cookie';
import { JOURNEY_BITES_COOKIE } from '@/constants';
import { useUserStore } from '@/providers/userProvider';
import ArticleCardTemplate from '@/components/articleCardTemplate';

import BannerImg from '@/images/banner.webp';

export default function Home() {
  const { setToken, logout } = useUserStore((state) => state);
  const isCheckLogin = useRef(false);

  useEffect(() => {
    if (!isCheckLogin.current) { 
      const userCookie = jsCookie.get(JOURNEY_BITES_COOKIE);
      if (userCookie) {
        setToken();
      } else {
        logout();
      }
      isCheckLogin.current = true;
    }
  }, [setToken, logout]);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Image src={BannerImg} alt='journey bites' />
      <ArticleCardTemplate title='熱門文章' color='secondary-100' />
      <ArticleCardTemplate title='推薦文章' color='primary-100' />
    </main>
  );
}
