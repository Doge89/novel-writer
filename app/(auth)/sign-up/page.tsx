"use client";

import { useState, useEffect } from "react";

import React from "react";
import Link from "next/link";


import SignUpGoogleButton from "@/app/_components/buttons/SignUpGoogleButton";
import SeparatorOptions from "@/app/_components/misc/SeparatorOptions";
import FormContainer from "@/app/_components/forms/FormContainer";
import FormSectionContainer from "@/app/_components/forms/FormSectionContainer";
import InputField from "@/app/_components/inputs/InputField";
import PrimaryButton from "@/app/_components/buttons/PrimaryButton";


export default function Page() {

  const onClick = (): void => {

  }

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);

  useEffect(() => {
    setIsValidPassword(password === confirmPassword && password !== '' && confirmPassword !== '');
  }, [password, confirmPassword]);

  return (
    <>
      <div className='flex flex-col w-full items-start justify-center gap-6'>
        <div className='flex flex-col gap-1'>
          <h1 className='font-bold text-complementary-950 text-3xl'>Sign up</h1>
          <p className='font-normal text-gray-300'>Be the author of your own history</p>
        </div>
        <SignUpGoogleButton/>
        <SeparatorOptions/>
        <FormContainer>
          <FormSectionContainer labelContent='Email' htmlFor='email'>
            <InputField
              onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
              value={email}
              placeholder='example@gmail.com'
              name='email'
              htmlFor='email'/>
          </FormSectionContainer>
          <FormSectionContainer labelContent='Password' htmlFor='password'>
            <InputField
              placeholder='*****'
              name='password'
              type='password'
              onInput={(e) => setPassword((e.target as HTMLInputElement).value)}/>
          </FormSectionContainer>
          <FormSectionContainer labelContent='Confirm Password' htmlFor='confirmPassword'>
            <InputField
              placeholder='*****'
              name='confirmPassword'
              onInput={(e) => setConfirmPassword((e.target as HTMLInputElement).value)}
              type='password'/>
          </FormSectionContainer>
          <div>
            <PrimaryButton
              content='Log in'
              type='submit'
              disabled={!isValidPassword}
              onClick={onClick}/>
          </div>
        </FormContainer>
        <div className='flex flex-col items-center justify-center w-full gap-1'>
          <span className='text-gray-500 text-sm'>By creating an account you agree with the</span>
          <span className='text-gray-500 text-sm'> <Link
            className='text-accent-700 underline hover:text-accent-800 font-semibold text-sm' href='/sign-up'>Terms of use</Link> and <Link
            className='text-accent-700 underline hover:text-accent-800 font-semibold text-sm' href='/sign-up'>Privacy policy</Link></span>
        </div>
        <div className='w-full'>
          <span className='text-gray-500 text-sm text-center block w-full'>Have an account already? <Link
            className='text-accent-700 underline hover:text-accent-800 font-semibold text-sm'
            href='/login'>Log in</Link></span>
        </div>
      </div>
    </>
  )
}
