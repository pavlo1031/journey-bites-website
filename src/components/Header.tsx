import Image from 'next/image';
import Link from 'next/link';
import HeaderNav from './HeaderNav';
// import { getCategories } from '@/lib/nextApi';
import SearchBar from './custom/SearchBar';
import HeaderButtons from './HeaderButtons';

import Logo from '@/images/logo-md.svg';
import LogoSm from '@/images/logo-sm.svg';

export default async function Header() {
  // const categories = await getCategories();

  // if (!categories?.length) {
  //   throw new Error('No categories found');
  // }

  return (
    <header className='sticky z-40 top-0 bg-white'>
      <div className='w-[67.5%] max-w-[1296px] mx-auto py-5 flex items-center justify-between'>
        <div className='flex items-center gap-12'>
          <Link href='/'>
            <Image className='xs:hidden sm:hidden' src={Logo} alt='Journey Bites' priority />
            <Image className='xs:block sm:block hidden' src={LogoSm} alt='Journey Bites' priority />
          </Link>
          <div className='md:flex lg:flex xl:flex 2xl:flex gap-8 hidden'>
            <HeaderNav />
            <SearchBar />
          </div>
        </div>
        <HeaderButtons />
      </div>
    </header>
  );
}
