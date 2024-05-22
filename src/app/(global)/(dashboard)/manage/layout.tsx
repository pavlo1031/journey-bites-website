import Sidebar from '@/components/dashboard/Sidebar';
import { BaseLayoutProps } from '@/types';

export default function ManageLayout({ children }: BaseLayoutProps) {
  return (
    <div className='grid grid-cols-12 gap-6 max-w-[1296px] mx-auto mt-[60px]'>
      <Sidebar />
      <div className='col-span-9'>
        {children}
      </div>
    </div>  
  );
}
 