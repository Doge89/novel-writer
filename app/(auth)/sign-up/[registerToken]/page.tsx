"use client";
import { use, useReducer } from 'react';
import { ParamsProps } from '@/app/_typescript/props/base.props';
import { SignUpParamsProps } from '@/app/_typescript/props/pages/auth/sign-up.props';
import {registerUserReducer} from "@/app/_hooks/reducers/register-user.reducer";
import {USER_DTO_TEMPLATE} from "@/app/_config/constants";

export default function RegisterTokenPage({ params }: ParamsProps<SignUpParamsProps>) {
  const { registerToken } =  use(params);
  const [userRegister, dispatchUserRegister] = useReducer(registerUserReducer, USER_DTO_TEMPLATE);
  if (!registerToken) {
    return <div>Not found</div>
  }

  return (
    <>
    <div className='w-full flex flex-col items-start justify-start gap-4'>
      <h2 className='font-bold text-2xl text-complementary-950'>Let&#39;s finish your profile setup</h2>
      <h3 className='font-medium text-xl text-gray-500'>Who are you?</h3>
    </div>
    </>
  )
}
