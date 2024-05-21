'use client';

import Link from 'next/link';
import jsCookie from 'js-cookie';
import { LogOut, User } from 'lucide-react';
import { Button } from './ui/button';
import { useUserStore } from '@/providers/userProvider';
import { DropdownMenuComponent as DropdownMenu } from './custom/DropdownMenu';
import { DropdownMenuItem } from './ui/dropdown-menu';
import { useEffect, useRef } from 'react';
import { JOURNEY_BITES_COOKIE } from '@/constants';

export default function HeaderButtons() {
  const { isLogin, login, logout } = useUserStore((state) => state);
  const isCheckLogin = useRef(false);

  useEffect(() => {
    if (!isCheckLogin.current) { 
      const userCookie = jsCookie.get(JOURNEY_BITES_COOKIE);
      if (userCookie) {
        login();
      } else {
        logout();
      }
      isCheckLogin.current = true;
    }
  }, [login, logout]);

  return (
    <div className='xs:flex sm:flex md:flex lg:flex xl:flex 2xl:flex gap-8 hidden'>
      {typeof isLogin === 'boolean' && (
        !isLogin ? (
          <>
            <Button asChild variant='outline' size='sm'>
              <Link href='/login'>登入</Link>
            </Button>
            <Button asChild size='sm'>
              <Link href='/register'>註冊</Link>
            </Button>
          </>
        ) : (
          <>
            <Button asChild size='sm'>
              <Link href='#'>開始創作</Link>
            </Button>
            <DropdownMenu
              triggerButton={
                <button>
                  <User className='hover:stroke-primary' />
                </button>
              }
            >
              <DropdownMenuItem asChild className='text-primary font-bold cursor-pointer py-1 px-2 w-full focus:bg-primary-100' onClick={logout}>
                <button>
                  <LogOut className='mr-2 h-6 w-6' />
                  <span>登出</span>
                </button>
              </DropdownMenuItem>
            </DropdownMenu>
          </>
        )
      )}

    </div>
  );
}
