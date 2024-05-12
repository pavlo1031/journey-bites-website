'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { type FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import InputField from '@/components/custom/InputField';
import PasswordInput from '@/components/custom/PasswordInput';
import { ApiManager } from '@/lib/ApiManager';
import { PASSWORD_VALIDATION } from '@/constants';

const formSchema = z.object({
  email: z.string().email({ message: '非 Email 格式，請重新輸入' }),
  password: PASSWORD_VALIDATION,
});


export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<FieldValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { control, handleSubmit, formState: { isValid } } = form;
  const router = useRouter();
  const buttonDisabled = Boolean(isLoading || !isValid);

  async function onSubmit({ email, password }: FieldValues) {
    setIsLoading(true);
    try {
      await ApiManager.login({ email, password }); 
      router.push('/');
    } catch (error) {
      // TODO: handle different error by statusCode
      toast({ title: '登入失敗', description: '請確認您的密碼是否正確', variant: 'error' });
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <div className="flex justify-between">
        <h2>登入</h2>
      <div>
        新用戶？
        <Link href="/register" className="text-blue-500 underline">快速註冊</Link>
      </div>
      </div>
      <div className="flex flex-col gap-5 my-5">
        <Button variant='outline'>使用 Google 登入</Button>
        <Button variant='outline'>使用 Facebook 登入</Button>
      </div>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <InputField
            control={control}
            name="email"
            label="帳號"
            placeholder="請輸入你的 Email"
          />
          <PasswordInput control={control} name="password" formDescription="請輸入 6 到 20 位英文及數字"/>
          <Button type="submit" className="w-full" disabled={buttonDisabled} isLoading={isLoading}>登入</Button>
        </form>
      </Form>
    </>
  );
}
