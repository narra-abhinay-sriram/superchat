
export default function ItemList({title,description,logo}) {
  return (
    <div className="flex flex-col items-center bg-slate-100 shadow-md rounded-lg p-1  w-80 mx-auto">
      <img src={logo} alt="Legal" className="w-full h-40 object-cover rounded-lg mb-4" />
      <div className="text-start">
        <p className="text-xl font-semibold text-gray-800 ml-3">{title}</p>
        <p className="text-sm text-gray-600 mt-2 ml-3"> {description} </p>
      </div>
    </div>
  );
}
