import Calculator from "./components/Calculator";

export default function App() {
  return (
    <main className="bg-[#111111] lg:h-screen sm:h-full md:h-full w-full flex justify-center items-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
        {/* Left Heading Section */}
        <div className="flex flex-col justify-center items-center text-white">
          <h1 className="font-black text-4xl mb-2">REACT &</h1>
          <h1 className="font-black text-4xl mb-2">TAILWIND</h1>
          <h1 className="font-black text-4xl mb-2">CALCULATOR</h1>
        </div>

        {/* Calculator Components */}
        <div className="flex justify-center items-center">
          <Calculator />
        </div>

        {/* Right Heading Section */}
        <div className="flex flex-col justify-center items-center text-white">
          <h1 className="font-black text-3xl mb-2">AUTHOR &</h1>
          <h1 className="font-black text-4xl mb-2">DEVELOPER</h1>
          <h1 className="font-black text-3xl mb-2">SHAWAIZ KHAN</h1>
        </div>
      </div>
    </main>
  );
}
