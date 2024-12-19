import Item_list from './Item_list'
export default function Developers_list({title,description,logo,items}) {
    console.log(items)
  return (
<div className='mb-14'>
    <div className="flex flex-col justify-center items-center bg-gray-300 mx-20 rounded-lg">
      <div className="flex flex-row p-2 mt-14 ">
        <div className="flex flex-col w-4/6">
            <span className='text-slate-900 text-6xl w-[480px] font-semibold ml-32 '>{title}</span>
            <span className="text-slate-700 py-16 text-xl w-[490px] font-thin  ml-32">{description}</span>
        </div>
        <div className='w-2/6 px-6 '>
            <img src={logo} className='rounded-lg ' />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 p-8">
      {
            items.map((item,index)=><Item_list key={index} title={item.title} description={item.description} logo={item.logo} />)
        }
       </div>
    </div>
</div>
  )
}
