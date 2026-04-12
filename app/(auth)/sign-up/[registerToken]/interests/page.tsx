"use client";

import PrimaryButton from '@/app/_components/buttons/PrimaryButton';
import InterestCard from '@/app/_components/misc/InterestCard';
import { useRegisterUserContext } from "@/app/_contexts/register-user.context";
import { Heart } from "lucide-react";

export default function  InterestTokenPage() {

  const { tags } = useRegisterUserContext();

  const onClick = () => {

  }

  return (
    <div className='w-full flex flex-col items-center justify-center gap-4'>
      <div className='w-full flex flex-row gap-4'>
        {tags.map((tag) => (
          <InterestCard key={tag.tagId} icon={<Heart className='text-accent-700' />} title={tag.tagName} />
        ))}
      </div>
      <div className='w-full'>
        <PrimaryButton content="Let's jump into" type='button' onClick={onClick} />
      </div>
    </div>
  );
}
