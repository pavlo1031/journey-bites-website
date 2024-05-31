'use client';

import { useQuery } from '@tanstack/react-query';
import { User2Icon, Loader2Icon } from 'lucide-react';
import TitleWIthIcon from '@/components/dashboard/TitleWIthIcon';
import TabsWithContent from '@/components/dashboard/TabsWithContent';
import ProfileForm from './ProfileForm';
import LinksForm from './LinksForm';
import { getUser } from '@/lib/authApi';

export default function EditInfo() {
  const { data, isLoading, isFetched } = useQuery({ queryKey: ['userInfo'], queryFn: getUser });

  if (!data && isFetched) {
    return <div>找不到您的資料，請聯繫客服</div>;
  }

  return (
    <>
      <TitleWIthIcon title='個人資料管理' icon={User2Icon} />
      {isLoading && <Loader2Icon className='h-6 w-6 animate-spin text-primary mx-auto' />}
      {data &&
        (
          <TabsWithContent
            defaultValue='profile'
            tabs={[
              {
                value: 'profile',
                label: '個人資料',
                content: <ProfileForm displayName={data.profile.displayName || ''} email={data.email || ''} bio={data.profile.bio}/>
              },
              {
                value: 'links',
                label: '連結設定',
                content: <LinksForm />
              }]
            }
          />
        )
      }
    </>
  );
}
