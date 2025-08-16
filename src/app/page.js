import MainSwiper from '@/components/MainSwiper';
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className='container grid grid-cols-2 grid-rows-2 gap-8'>
        <div className='row-span-2'>
          <MainSwiper />
        </div>
        <div className="bg-blue-500 p-4">Item 3</div>
        <div className="bg-blue-500 p-4">Item 4</div>
      </div>
    </div>
  );
}
