import Link from 'next/link';

export default function PopularAttractions() {
  const data = ['日本', '京都', '夏威夷', '泰國', '長灘島', '拉斯維加斯', '北海道', '台南', '布拉格', '比利時'];

  return (
    <div className='rounded-lg border-2 p-7'>
      <h3 className='mb-9 text-3xl'>熱門景點</h3>
      <div className='flex flex-wrap'>
      {data.map((item) => (
        <div key={item} className='mb-4 mr-3'>
          <Link href='' className='rounded-[100px] border-2 border-primary-200 px-4 py-1 font-bold text-primary-200'>{item}</Link>
        </div>
      ))}
      </div>
    </div>
  );
}
