import RegisterSVG from '@/public/register_image.svg';

export default function RegisterSlider() {
  return (
    <div className="w-full h-full flex flex-col flex-1 py-32 px-24 gap-4">
      <h2 className='font-bold text-2xl'>Let the words conduct your story</h2>
      <span className='text-xl'>Start creating a world where everything is posible</span>
      <div className="m-auto">
        <RegisterSVG width={350} height={350}/>
      </div>
    </div>
  )
}
