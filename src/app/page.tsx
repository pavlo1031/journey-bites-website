import Image from 'next/image';
import BannerImg from '@/images/banner.webp';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={BannerImg} alt="jorney bites"/>
    </main>
  );
}
