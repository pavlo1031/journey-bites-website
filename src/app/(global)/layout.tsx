'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { JOURNEY_BITES_COOKIE } from '@/constants';
import { useUserStore } from '@/providers/userProvider';
import jsCookie from 'js-cookie';
import Header from '@/components/Header';

export default function GlobalLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  const { setToken, removeToken } = useUserStore((state) => state);
  const isCheckLogin = useRef(false);

  useEffect(() => {
    if (!isCheckLogin.current) { 
      const userCookie = jsCookie.get(JOURNEY_BITES_COOKIE);
      if (userCookie) {
        setToken();
      } else {
        removeToken();
      }
      isCheckLogin.current = true;
    }
  }, [setToken, removeToken]);

  return (
    <>
      <Header />
      {children}
    </>
  );
}
