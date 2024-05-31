'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { type FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { isAxiosError } from 'axios';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import InputField from '@/components/custom/InputField';
import PasswordInput from '@/components/custom/PasswordInput';
import { register, verifyEmail } from '@/lib/api';
import { PASSWORD_VALIDATION } from '@/constants';
import { useToast } from '@/components/ui/use-toast';
import StatusCode from '@/types/StatusCode';
import { ApiResponse } from '@/types/apiResponse';

const formSchema = z.object({
  displayName: z.string().min(1, { message: '暱稱是必填欄位' }).max(50, { message: '暱稱不能超過50個字' }),
  email: z.string().email({ message: '非 Email 格式，請重新輸入' }),
  password: PASSWORD_VALIDATION,
  confirmPassword: PASSWORD_VALIDATION,
}).refine(
  (values) => {
    return values.password === values.confirmPassword;
  },
  {
    message: '密碼輸入不相符，請重新輸入',
    path: ['confirmPassword'],
  }
);

export default function EmailRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<FieldValues>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
  });
  const { control, handleSubmit, formState: { isValid, errors } } = form;
  const buttonDisabled = Boolean(isLoading || !isValid) || Object.keys(errors).length > 0;

  async function onSubmit({ email, password, displayName }: FieldValues) {
    setIsLoading(true);
    try {
      await register({ email, password, displayName });
      router.replace('/login');
    } catch (error) {
      if (!isAxiosError(error)) return;
      switch ((error.response?.data as ApiResponse).statusCode) {
        case StatusCode.USER_ALREADY_EXISTS:
          toast({ title: '此帳號已被註冊，請直接登入', variant: 'error' });
          break;
        default:
          toast({ title: '網站錯誤', description: '請聯絡客服，或稍後再試', variant: 'error' });
          break;
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function handleVerifyEmail() {
    try {
      const email = form.getValues('email');
      await verifyEmail(email);
    } catch (error) {
      if (!isAxiosError(error)) return;
      if(error.response?.data.statusCode === StatusCode.USER_ALREADY_EXISTS) {
        form.setError('email', { message: '此帳號已被註冊，請直接登入' });
      }
    }
  }

  return (
    <>
      <div className='flex justify-between mb-3'>
        <h2>以 Email 註冊</h2>
        <div>
          已有帳號？
          <Link href='/login' className='text-blue-500 underline'>登入</Link>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          <InputField
            control={control}
            name='displayName'
            label='暱稱'
            placeholder='請輸入您的暱稱'
          />
          <InputField
            control={control}
            name='email'
            label='帳號'
            placeholder='請輸入您的 Email'
            onBlur={handleVerifyEmail}
          />
          <PasswordInput control={control} name='password' formDescription='請輸入 6 到 20 位英文及數字'/>
          <PasswordInput control={control} name='confirmPassword' label='再次輸入密碼'/>
          <Button type='submit' className='w-full' disabled={buttonDisabled} isLoading={isLoading}>註冊</Button>
        </form>
      </Form>
    </>
  );
}
