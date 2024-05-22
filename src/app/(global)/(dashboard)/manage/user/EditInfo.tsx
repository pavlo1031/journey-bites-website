'use client';
 
import { User2 as UserIcon } from 'lucide-react';

export default function EditInfo() {
  return (
    <h3 className='flex items-center gap-2'>
      <UserIcon className='inline-block' size={32}/>
      個人資料編輯
    </h3>
  );
}
