import type { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <div className="w-2/5 h-screen hidden md:block bg-cover bg-center bg-[url('../images/auth-page-bg.webp')]" />
      <>{children}</>
    </div>
  );
}
