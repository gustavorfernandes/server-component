import Image from 'next/image';

import { getStocks } from './actions';

import arrow from '../../assets/caret-circle-up-down.svg';

const StocksDropSelect: React.FC = async () => {
  const stocks = await getStocks();

  return (
    <div className="relative text-gray-800">
      <select className="block appearance-none cursor-default rounded-md bg-white py-2 pl-3 pr-28 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#21202E] sm:text-sm">
        <option value="">Select a stock</option>
        {stocks.map((stock) => (
          <option key={stock.id} value={stock.name}>
            {stock.name}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <Image className="h-5 w-5" aria-hidden="true" src={arrow} alt="Arrow up and down" />
      </div>
    </div>
  );
};

export default StocksDropSelect;
