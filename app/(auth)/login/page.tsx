"use client";

import React from "react";
import Link from 'next/link';
import SignUpGoogleButton from "@/app/_components/buttons/SignUpGoogleButton";
import SeparatorOptions from "@/app/_components/misc/SeparatorOptions";
import FormContainer from "@/app/_components/forms/FormContainer";
import FormSectionContainer from "@/app/_components/forms/FormSectionContainer";
import InputField from "@/app/_components/inputs/InputField";
import PrimaryButton from "@/app/_components/buttons/PrimaryButton";
import {ResultEventHandler} from "@/app/_typescript/types/base.types";

export default function Home() {

    const onClick = (handler: ResultEventHandler<React.MouseEvent, undefined>):void => {

    }

    return (
        <>
        <div className='flex flex-col w-full items-start justify-center gap-6'>
            <div className='flex flex-col gap-1'>
                <h1 className='font-bold text-complementary-950 text-3xl'>Sign up</h1>
                <p className='font-normal text-gray-300'>Welcome back! Let’s this journey begins</p>
            </div>
            <SignUpGoogleButton />
            <SeparatorOptions />
            <FormContainer>
                <FormSectionContainer labelContent='Email' htmlFor='email'>
                    <InputField placeholder='example@gmail.com' name='email' htmlFor='email' />
                </FormSectionContainer>
                <FormSectionContainer labelContent='Password' htmlFor='password'>
                    <InputField placeholder='*****' name='password' type='password' />
                </FormSectionContainer>
                <div>
                    <PrimaryButton content='Log in' type='submit' onClick={onClick} />
                </div>
            </FormContainer>
            <div className='flex items-center justify-center w-full'>
                <span className='text-gray-500 text-sm'>Do not have an account? <Link className='text-accent-700 underline hover:text-accent-800 font-semibold text-sm' href='/sign-up'>Sign Up</Link></span>
            </div>
        </div>
        </>
    );
}