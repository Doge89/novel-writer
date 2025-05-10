"use client";
import React, { use } from 'react';
import { ParamsProps } from '@/app/_typescript/props/base.props';
import { SignUpParamsProps } from '@/app/_typescript/props/pages/auth/sign-up.props';
import {useUseRegisterContext} from "@/app/_contexts/register-user.context";

import FormContainer from "@/app/_components/forms/FormContainer";
import FormLabel from "@/app/_components/forms/FormLabel";
import InputField from "@/app/_components/inputs/InputField";
import PrimaryButton from "@/app/_components/buttons/PrimaryButton";
import Select from "@/app/_components/misc/Select";
import {ResultEventHandler} from "@/app/_typescript/types/base.types";

export default function RegisterTokenPage({ params }: ParamsProps<SignUpParamsProps>) {
  const { registerToken } =  use(params);
  const { dispatchUserDto, ...userDto } = useUseRegisterContext();
  if (!registerToken) {
    return <div>Not found</div>
  }

  const onClick = (e: ResultEventHandler<React.MouseEvent, undefined>) => {

  }

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  }

  return (
    <div className='w-full flex flex-col gap-4'>
      <FormContainer>
        <FormLabel content='Username' htmlFor='username'/>
        <InputField name='username' onInput={onInput} />
      </FormContainer>
      <div className='w-full flex flex-row gap-4'>
        <FormContainer>
          <FormLabel content='First name' htmlFor='firstname'/>
          <InputField name='firstname' />
        </FormContainer>
        <FormContainer>
          <FormLabel content='Lastname' htmlFor='lastname'/>
          <InputField name='lastname' />
        </FormContainer>
      </div>
      <div>
        <Select />
      </div>
      <PrimaryButton onClick={onClick} type='button' content='Continue' />
    </div>
  )
}
