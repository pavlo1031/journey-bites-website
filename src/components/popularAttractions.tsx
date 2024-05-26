export default function PopularAttractions() {
  const attractionClass = 'border-2 rounded-[100px] text-primary-200 border-primary-200 font-bold px-4 py-1';
  const data = ['日本', '京都', '夏威夷', '泰國', '長灘島', '拉斯維加斯', '北海道', '台南', '布拉格', '比利時'];

  return (
    <div className='p-7 border-2 rounded-lg'>
      <h3 className='text-3xl mb-9'>熱門景點</h3>
      <div className='flex flex-wrap'>
      {data.map((item) => (
        <div  key={item} className='mr-3 mb-4'>
          <a href='' className={attractionClass}>{item}</a>
        </div>
      ))}
      </div>
    </div>
  );
}
