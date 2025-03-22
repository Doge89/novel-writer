export default function SeparatorOptions() {
    return (
      <div className="w-full flex flex-row items-center gap-4 justify-between">
          <span className='block w-full h-[1px] border border-gray-400' />
          <span className='text-gray-400'>or</span>
          <span className='block w-full h-[1px] border border-gray-400' />
      </div>
    );
}