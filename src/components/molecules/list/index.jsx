export default function List({ label = "", items = [] }) {
  return (
    <div className="bg-black p-4 rounded-lg max-w-[calc(50%-1rem)] bg-tekhelet">
      <div className="text-xl font-semibold text-white mb-4">{label}</div>
      <div className="flex flex-row overflow-x-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="h-14 text-white m-1 flex-[0_0_10%] text-center flex items-center justify-center rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-300 hover:border-gray-500"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
