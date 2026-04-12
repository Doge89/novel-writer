"use client";
import { NodeWithChildrenProps } from "@/app/_typescript/props/base.props";
import {RegisterUserContext} from "@/app/_contexts/register-user.context";
import {usePathname} from "next/navigation";

export default function Layout({ children }: NodeWithChildrenProps<unknown>) {

  const path = usePathname();

  return (
    <RegisterUserContext>
      <div className='w-full h-full flex flex-col items-center justify-center gap-4'>
        <div className='w-full flex flex-col items-start justify-start gap-2'>
          <h2 className='font-bold text-2xl text-complementary-950'>Let&#39;s finish your profile setup</h2>
          <h3 className='font-medium text-xl text-gray-500'>{path.includes('information') ? 'Who are you?' : 'What are you interested in?'}</h3>
        </div>
        {children}
      </div>
    </RegisterUserContext>
  )
}
