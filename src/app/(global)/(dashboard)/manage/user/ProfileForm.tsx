'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import InputField from '@/components/custom/InputField';
import { Form } from '@/components/ui/form';
import TextAreaField from '@/components/custom/TextAreaField';
import PasswordInput from '@/components/custom/PasswordInput';
import { PASSWORD_VALIDATION } from '@/constants';
import { resetPassword } from '@/lib/authApi';
import { toast } from '@/components/ui/use-toast';

const formSchema = z.object({
  displayName: z.string(),
  email: z.string().email({ message: '非 Email 格式，請重新輸入' }),
  bio: z.optional(z.string().max(500, { message: '最多只能輸入 500 個字' })),
});

const passwordFormSchema = z.object({
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

type ProfileFormProps = {
  displayName: string;
  email: string;
  bio: string | null;
}

export default function ProfileForm({ displayName, email, bio }: ProfileFormProps) {
  const passwordMutation = useMutation({ mutationFn: resetPassword });

  const form = useForm<FieldValues>(
    {
      resolver: zodResolver(formSchema),
      mode: 'onBlur',
      defaultValues: {
        displayName,
        bio: bio || ''
      },
    });
  const { handleSubmit, control, formState: { isValid } } = form;

  const resetPasswordForm = useForm<FieldValues>(
    {
      resolver: zodResolver(passwordFormSchema),
      mode: 'onBlur',
      defaultValues: {
        password: '',
        confirmPassword: ''
      },
    });
  const { handleSubmit: handleSubmitPassword, control: controlPassword, formState: { isValid: isValidPassword } } = resetPasswordForm;

  function onSubmit(data: FieldValues) {
    console.log(data);
  }

  async function onSubmitPassword(data: FieldValues) {
    try {
      const { password } = data;
      passwordMutation.mutate(password as string);
      toast({ title: '重設密碼成功', variant: 'success' });
    } catch (error) {
      toast({ title: '重設密碼失敗，請稍後再試', variant: 'error' });
    }
  }

  return (
    <>
      <Card className='mb-6 space-y-4'>
        <CardHeader>
          <CardTitle>個人資料編輯</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='flex gap-3 items-center'>
            <span>帳號</span>
            <span>{email}</span>
          </div>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
              <InputField
                control={control}
                name='displayName'
                label='暱稱'
                placeholder='請輸入暱稱'
                />
              <TextAreaField
                control={control}
                name='bio'
                label='自我介紹'
                placeholder='向其他人簡單介紹你自己吧! 可以分享你的創作理念、寫作方向，建議字數為 50 - 150 字為佳！'
              />
              <Button disabled={!isValid}>儲存個人資料</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card className='space-y-4'>
        <CardHeader>
          <CardTitle>重設密碼</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <Form {...resetPasswordForm}>
            <form onSubmit={handleSubmitPassword(onSubmitPassword)} className='space-y-5'>
              <PasswordInput control={controlPassword} name='password' label='新密碼'/>
              <PasswordInput control={controlPassword} name='confirmPassword' label='再輸入一次密碼'/>
              <Button
                className='min-w-[130px]'
                disabled={!isValidPassword || passwordMutation.isPending}
                type='submit'
                isLoading={passwordMutation.isPending}
              >
                確認修改
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
