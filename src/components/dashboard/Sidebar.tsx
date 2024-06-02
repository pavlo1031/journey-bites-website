'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CameraIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

import DefaultUserImg from '@/images/default-user.webp';

const menuLinks: { title: string; href: string }[] = [
  {
    title: '個人資料管理',
    href: '/manage/user',
  },
  {
    title: '內容作品管理',
    href: '/manage/content',
  },
  {
    title: '我的追蹤與收藏',
    href: '/manage/follow',
  },
  {
    title: '訂單記錄',
    href: '/manage/orders',
  },
  {
    title: '我的收入',
    href: '/manage/income',
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className='col-span-3 min-h-[733px] rounded-md border border-gray-200 p-6 pt-9 shadow-[0_2px_8px_0_rgba(39,41,55,0.08)]'>
      <div className='relative mx-auto mb-9 size-[120px] rounded-full'>
        <Image
          src={DefaultUserImg}
          width={120}
          height={120}
          alt='Journey Bites'
          className='rounded-full'
        />
        <Button
          variant='icon'
          className='group absolute -right-3 bottom-1'
        >
          <CameraIcon
            size={20}
            className='stroke-primary group-hover:stroke-primary-100'
          />
        </Button>
      </div>
      {menuLinks.map((link) => (
        <Button
          key={link.href}
          asChild
          variant='fullLink'
          className={cn({
            'bg-primary-100': link.href === pathname,
            'hover:text-primary': link.href !== pathname,
          })}
        >
          <Link href={link.href}>{link.title}</Link>
        </Button>
      ))}
    </div>
  );
}
