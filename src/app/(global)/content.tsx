import { ReactNode } from 'react';
import CreatorList from '@/components/creatorList';
import PopularAttractions from '@/components/popularAttractions';

export default function Content({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className='md:max-w-1024 lg:max-w-1024 xl:max-w-1024 2xl:max-w-1280 mx-auto'>
      <div className='grid'>
        <div className='grid grid-cols-12'>
          <div className='xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-8 2xl:col-span-8 xs:px-3 sm:px-3 md:px-3'>
            {children}
          </div>
          <div className='xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4 2xl:col-span-4 xs:px-3 sm:px-3 md:px-3 md:ml-6 lg:ml-6 xl:ml-6 2xl:ml-6'>
            <CreatorList />
            <PopularAttractions />
          </div>
        </div>
      </div>
    </div>
  );
}
