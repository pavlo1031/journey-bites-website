'use client';

import Link from 'next/link';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { type FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import InputField from '@/components/custom/InputField';
import PasswordInput from '@/components/custom/PasswordInput';
import { ApiManager } from '@/lib/ApiManager';
import { PASSWORD_VALIDATION } from '@/constants';

const formSchema = z.object({
  username: z.string().min(1, '請輸入暱稱'),
  email: z.string().email({ message: '非 Email 格式，請重新輸入' }),
  password: PASSWORD_VALIDATION,
  confirmPassword: PASSWORD_VALIDATION,
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: 'custom',
      message: '密碼輸入不相符，請重新輸入',
    });
  }
});


export default function EmailRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FieldValues>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
  });
  const { control, handleSubmit, formState: { isValid } } = form;
  const buttonDisabled = Boolean(isLoading || !isValid);
 
  async function onSubmit({ email, password }: FieldValues) {
    setIsLoading(true);
    try {
      await ApiManager.register({ email, password }); 
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <div className="flex justify-between mb-3">
        <h2>以 Email 註冊</h2>
        <div>
          已有帳號？
          <Link href="/login" className="text-blue-500 underline">登入</Link>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <InputField
            control={control}
            name="username"
            label="暱稱"
            placeholder="請輸入您的暱稱"
          />
          <InputField
            control={control}
            name="email"
            label="帳號"
            placeholder="請輸入您的 Email"
          />
          <PasswordInput control={control} name="password" formDescription="請輸入 6 到 20 位英文及數字"/>
          <PasswordInput control={control} name="confirmPassword" label="再次輸入密碼"/>
          <Button type="submit" className="w-full" disabled={buttonDisabled} isLoading={isLoading}>註冊</Button>
        </form>
      </Form>
    </>
  );
}
