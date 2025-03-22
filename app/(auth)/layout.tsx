"use client";

import RootContainer from "@/app/_components/base/RootContainer";
import Image from "next/image";
import { NodeWithChildrenProps, AuthLayoutProps } from "@/app/_typescript/props/base.props";
import {usePathname} from "next/navigation";

export default function RootLayout({ children, signin, register }: NodeWithChildrenProps<AuthLayoutProps>) {

    const path = usePathname();

    return (
      <RootContainer>
          <div className='lg:flex flex-col flex-1 bg-complementary-600 hidden'>
              {path === '/login' ? signin : register}
          </div>
          <div className='items-center justify-center flex flex-col flex-1 gap-1.5 lg:p-12 sm:p-6 bg-white'>
              <div className='flex w-full items-end justify-end p-1.5'>
                  <Image src='/LogoMomentBg.png' alt='Logo app' width={64} height={64} />
              </div>
              <div className='items-center justify-center flex-1 p-3'>
                  <div className='flex items-center justify-center flex-col gap-8 w-[520px]'>
                      {children}
                  </div>
              </div>
              <div className='flex flex-row items-end justify-end p-3'>
                  <span className='text-gray-700 text-sm w-full text-right'>Copyright 2025</span>
              </div>
          </div>
      </RootContainer>
    );
}