'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import Header from '@/components/Header';
import { JOURNEY_BITES_COOKIE } from '@/constants';
import { useUserStore } from '@/providers/userProvider';
import jsCookie from 'js-cookie';

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
    </>
  );
}
