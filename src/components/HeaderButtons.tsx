'use client';

import Link from 'next/link';
import { LogOut, User } from 'lucide-react';
import { Button } from './ui/button';
import { useUserStore } from '@/providers/userProvider';
import { DropdownMenuComponent as DropdownMenu } from './custom/DropdownMenu';
import { DropdownMenuItem } from './ui/dropdown-menu';
import { logout } from '@/lib/authApi';

export default function HeaderButtons() {
  const { isLogin, removeToken } = useUserStore((state) => state);

  async function handleLogout() {
    try {
      await logout();
      removeToken();
    } catch (error) {
      removeToken();
    }
  }

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
              <DropdownMenuItem asChild className='text-primary font-bold cursor-pointer py-1 px-2 w-full focus:bg-primary-100' onClick={handleLogout}>
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
