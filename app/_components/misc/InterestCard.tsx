import {InterestCardProps} from "@/app/_typescript/props/misc/interest-card.props";

export default function InterestCard({ icon, title }: InterestCardProps) {
  return (
    <div className='w-full flex flex-row items-center justify-between cursor-pointer p-4 rounded-lg border border-gray-200'>
      <span className='text-accent-950 font-semibold'>{title}</span>
      { icon }
    </div>
  );
}
