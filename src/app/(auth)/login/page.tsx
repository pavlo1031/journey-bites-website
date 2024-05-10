'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { type FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import InputField from '@/components/custom/InputField';
import { Eye, EyeOff } from 'lucide-react';
import { InputType } from '@/types';
import { ApiManager } from '@/lib/ApiManager';

const formSchema = z.object({
  email: z.string().email({ message: '非 Email 格式，請重新輸入' }),
  password: z.string().regex(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/, { message: '密碼不符規則，請再輸入一次' }),
});


export default function Login() {
  const [passwordInputType, setPasswordInputType] = useState<InputType>(InputType.PASSWORD);
  const form = useForm<FieldValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { control, handleSubmit } = form;
  const router = useRouter();

  function togglePasswordInputType() {
    setPasswordInputType(passwordInputType === InputType.PASSWORD ? InputType.TEXT : InputType.PASSWORD);
  }
 
  async function onSubmit({ email, password }: FieldValues) {
    try {
      await ApiManager.login({ email, password }); 
      router.push('/');
    } catch (error) {
      console.log(error);
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <InputField
            control={control}
            name="email"
            label="帳號"
            placeholder="請輸入你的 Email"
          />
          <InputField
            control={control}
            name="password"
            label="密碼"
            placeholder="請輸入你的密碼"
            endIcon={passwordInputType === 'password' ? EyeOff : Eye}
            iconAction={togglePasswordInputType}
            formDescription="請輸入 6 到 20 位英文及數字"
          />
          <Button type="submit" className="w-full">登入</Button>
        </form>
      </Form>
    </>
  );
}
