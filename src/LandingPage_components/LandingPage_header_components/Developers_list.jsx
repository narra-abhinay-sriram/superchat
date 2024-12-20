import ItemList from './Item_list'

export default function DevelopersList({ title, description, logo, items }) {
  return (
    <div className='mb-8 md:mb-14'>
      <div className="flex flex-col justify-center items-center bg-gray-300 mx-4 md:mx-20 rounded-lg">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row p-2 mt-8 md:mt-14">
          {/* Logo Image */}
          <div className='w-full md:w-2/6 px-4 md:px-6 mt-4 md:mt-0 order-1 md:order-2'>
            <img src={logo} className='rounded-lg w-full' alt={title} />
          </div>
          {/* Text Content */}
          <div className="flex flex-col w-full md:w-4/6 px-4 md:px-0 order-2 md:order-1">
            <span className='text-slate-900 text-3xl md:text-6xl max-w-full md:w-[480px] font-semibold text-center md:text-left md:ml-32'>
              {title}
            </span>
            <span className="text-slate-700 py-6 md:py-16 text-lg md:text-xl max-w-full md:w-[490px] font-thin text-center md:text-left md:ml-32">
              {description}
            </span>
          </div>
        </div>
        {/* Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-9 p-4 md:p-8 w-full">
          {items.map((item, index) => (
            <ItemList
              key={index}
              title={item.title}
              description={item.description}
              logo={item.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
