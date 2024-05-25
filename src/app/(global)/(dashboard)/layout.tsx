'use client';

import { useRouter } from 'next/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BaseLayoutProps } from '@/types';
import { useUserStore } from '@/providers/userProvider';
import { useEffect } from 'react';

const queryClient = new QueryClient();

export default function DashboardLayout({ children }: BaseLayoutProps) {
  const { isLogin  } = useUserStore((state) => state);
  const router = useRouter();

  useEffect(() => {
    // can't use !isLogin, because it's null at first
    if (isLogin === false) {
      router.replace('/login');
    }
  }, [isLogin, router]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
}
