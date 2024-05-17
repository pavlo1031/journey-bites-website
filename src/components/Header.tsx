import Image from 'next/image';
import Link from 'next/link';
import HeaderNav from './HeaderNav';
import { Button } from './ui/button';
import { getCategories } from '@/lib/nextApi';

import Logo from '@/images/logo-md.svg';

export default async function Header() {
  const categories = await getCategories();

  if (!categories?.length) {
    throw new Error('No categories found');
  }

  return (
    <header className='w-[1296px] mx-auto my-5'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-12'>
          <Link href='/'>
            <Image src={Logo} alt='Journey Bites' />  
          </Link>
          <HeaderNav categories={categories} />
        </div>
        <div className='flex gap-8'>
          <Button asChild variant='outline' size='sm'>
            <Link href='/login'>登入</Link>
          </Button>
          <Button asChild size='sm'>
            <Link href='/register'>註冊</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}