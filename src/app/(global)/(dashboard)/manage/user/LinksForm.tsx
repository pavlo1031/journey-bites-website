'use client';
// TODO: Completed UI and feature
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import InputField from '@/components/custom/InputField';
import { Form } from '@/components/ui/form';
import TextAreaField from '@/components/custom/TextAreaField';

const urlSchema = z.string().url({ message: '請填入正確的網址格式' });

const formSchema = z.object({
  facebook: urlSchema,
  instagram: urlSchema,
});

export default function LinksForm() {
  const form = useForm<FieldValues>(
    {
      resolver: zodResolver(formSchema),
      mode: 'onBlur',
      defaultValues: {
        facebook: '',
        instagram: ''
      },
    });
  const { handleSubmit, control, formState: { isValid } } = form;

  function onSubmit(data: FieldValues) {
    console.log(data);
  }

  return (
    <Card className='space-y-4'>
      <CardContent className='space-y-4'>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
            <InputField
              control={control}
              name='displayName'
              label='暱稱'
              placeholder='請輸入暱稱'
              />
            <InputField
              control={control}
              name='email'
              label='常用 Email'
              placeholder='Journey bites 會以此電子郵件來寄送通知信、與你聯繫'
            />
            <TextAreaField
              control={control}
              name='bio'
              label='自我介紹'
              placeholder='向其他人簡單介紹你自己吧! 可以分享你的創作理念、寫作方向，建議字數為 50 - 150 字為佳！'
            />
            <Button disabled={!isValid}>儲存連結設定</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
