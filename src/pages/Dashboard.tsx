import { ChatSidebar } from "../components/ChatSidebar";
const Dashboard = () => {
  return (
    <div className="flex min-h-full">
      <div className="fixed top-[80px] lg:top-[112px] h-[calc(100vh-80px)] lg:h-[calc(100vh-112px)] z-50">
        <ChatSidebar />
      </div>

      <div className="flex-1 ml-0 md:ml-80 transition-[margin] duration-300 ease-in-out">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Center Area: Prediction Card Placeholder */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="min-h-[300px] flex items-center justify-center bg-white dark:bg-gray-800 p-6 shadow-sm rounded-xl border border-gray-100 dark:border-gray-700">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 dark:text-gray-100">
                  Prediction Area
                </h3>
                <div className="flex gap-4 justify-center mb-4">
                  <button className="px-6 py-2 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition">
                    UP
                  </button>
                  <button className="px-6 py-2 bg-pink-500 text-white rounded-lg font-bold hover:bg-pink-600 transition">
                    DOWN
                  </button>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Guess Price (6 Decimals)
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="min-h-[300px] flex items-center justify-center bg-white dark:bg-gray-800 p-6 shadow-sm rounded-xl border border-gray-100 dark:border-gray-700">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 dark:text-gray-100">
                  Price Chart
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  SOL/USD Live Chart Placeholder
                </p>
                <div className="h-40 bg-gray-50 dark:bg-gray-900 mt-4 rounded flex items-center justify-center text-gray-400">
                  [Chart Visualization]
                </div>
              </div>
            </div>

            <div className="mt-5 p-4 bg-black/5 rounded-lg text-center">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                142 Playing Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
