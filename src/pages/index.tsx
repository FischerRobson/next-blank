import { Spin } from 'src/assets/animations/Spin';

export default function Home() {
  return (
    <div className="h-[100vh] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center flex-col">
      <h1 className="font-bold text-white">Next blank with tailwind</h1>
      <Spin />
    </div>
  );
}
