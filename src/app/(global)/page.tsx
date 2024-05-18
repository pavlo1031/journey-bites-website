'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import jsCookie from 'js-cookie';
import { useUserStore } from '@/providers/userProvider';
import { JOURNEY_BITES_COOKIE } from '@/constants';

import BannerImg from '@/images/banner.webp';

export default function Home() {
  const { login, logout } = useUserStore(
    (state) => state,
  );
  const isCheckLoginState = useRef(false);

  useEffect(() => {
    if (!isCheckLoginState.current) { 
      const userCookie = jsCookie.get(JOURNEY_BITES_COOKIE);
      if (userCookie) {
        login();
      } else {
        logout();
      }
      isCheckLoginState.current = true;
    }
  }, [login, logout]);


  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Image src={BannerImg} alt='journey bites'/>
    </main>
  );
}
