
export default function Home(props) {
  console.log('Home props:', props);
  
  return (
    <main className='flex flex-col items-center px-[120px] gap-y-[24px] border border-3 border-green-600'>
      <div id="banner" className="w-full h-[300px] px-[120px] border border-3 border-blue-400">
        banner
      </div>
      <div id='content' className="flex flex-row w-full min-h-[500px] py-[80px] gap-x-[24px] border border-3 border-red-400">
        <div id='left' className='w-full h-full border border-3 border-blue-500'>
          <div id="popular-articles" className='h-[230px] border'>
            熱門文章
          </div>
          <div id="recommended-articles" className='h-[230px] border'>
            推薦文章
          </div>
        </div>
        <aside id='right' className='w-[300px] border border-3 border-blue-500'>
          <div id="creator-list" className='h-[200px] border border-gray-200'>
            創作者列表
          </div>
          <div id="popular-attractions" className='h-[200px] border border-gray-200'>
            熱門景點
          </div>
        </aside>
      </div>
    </main>
  );
}
