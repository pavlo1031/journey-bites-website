import type { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex h-screen'>
      <div className="w-2/5 xs:hidden sm:hidden bg-cover bg-center bg-[url('../images/auth-page-bg.webp')]" />
      <div className='flex-1 pt-[70px] overflow-y-auto'>
        <div className='max-w-xs px-5 md:px-0 md:max-w-sm mx-auto pt-14'>
          {children}
        </div>
      </div>
    </div>
  );
}
