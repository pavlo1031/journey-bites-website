'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { JOURNEY_BITES_COOKIE } from '@/constants';
import { useUserStore } from '@/providers/userProvider';
import jsCookie from 'js-cookie';
import { Suspense } from 'react';
import Header from '@/components/Header';
import ArticleCardTemplate from '@/components/articleCardTemplate';
import Loading from '@/app/(global)/loadding';
import Content from '@/app/(global)/content';

export default function GlobalLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

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
    <>
      <Header />
      {children}
      <Content>
        <Suspense fallback={<Loading />}>
          <ArticleCardTemplate title='熱門文章' color='secondary-100' />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <ArticleCardTemplate title='推薦文章' color='primary-100' />
        </Suspense>
      </Content>
    </>
  );
}
