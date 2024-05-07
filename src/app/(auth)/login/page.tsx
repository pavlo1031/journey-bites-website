'use client';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  username: z.string().email({ message: '非 Email 格式，請重新輸入' }),
  password: z.string().regex(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/, { message: '密碼不符規則，請再輸入一次' }),
});



export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="flex-1 mt-[70px]">
      <div className="max-w-sm mx-auto pt-14">
        <div className="flex justify-between">
          <h2>登入</h2>
          <div>
            新用戶？
            <Link href="/resgister" className="text-blue-500 underline">快速註冊</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 my-5">
          <Button variant='outline'>使用 Google 登入</Button>
          <Button variant='outline'>使用 Facebook 登入</Button>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>帳號</FormLabel>
                  <FormControl>
                    <Input placeholder="請輸入你的 Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>密碼</FormLabel>
                  <FormControl>
                    <Input placeholder="請輸入你的密碼" {...field} />
                  </FormControl>
                  <FormDescription>
                    請輸入 6 到 20 位英文及數字
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">登入</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
