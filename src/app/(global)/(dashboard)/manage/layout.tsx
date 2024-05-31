import type { PropsWithChildren } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';

export default function ManageLayout({ children }: PropsWithChildren) {
  return (
    <div className='grid grid-cols-12 gap-6 max-w-[1296px] mx-auto mt-[60px]'>
      <Sidebar />
      <div className='col-span-9 px-10'>
        {children}
      </div>
    </div>
  );
}
