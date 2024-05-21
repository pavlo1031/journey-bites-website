import { JOURNEY_BITES_COOKIE } from '@/constants';
import { BaseLayoutProps } from '@/types';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function DashboardLayout({ children }: BaseLayoutProps) {
  const cookieObj = cookies();
  const hasLoginToken = cookieObj.get(JOURNEY_BITES_COOKIE);

  if (!hasLoginToken) {
    redirect('/login');
  }

  return (
    <>{children}</>
  );
}
