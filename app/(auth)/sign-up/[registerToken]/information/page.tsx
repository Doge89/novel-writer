"use client";
import React, { use, useState } from 'react';
import { ParamsProps } from '@/app/_typescript/props/base.props';
import { SignUpParamsProps } from '@/app/_typescript/props/pages/auth/sign-up.props';
import {useUseRegisterContext} from "@/app/_contexts/register-user.context";

import FormContainer from "@/app/_components/forms/FormContainer";
import FormLabel from "@/app/_components/forms/FormLabel";
import InputField from "@/app/_components/inputs/InputField";
import PrimaryButton from "@/app/_components/buttons/PrimaryButton";
import Select from "@/app/_components/misc/Select";
import {ResultEventHandler} from "@/app/_typescript/types/base.types";
import {SelectOptionProps} from "@/app/_typescript/props/misc/select.props";

export default function RegisterTokenPage({ params }: ParamsProps<SignUpParamsProps>) {
  const { registerToken } =  use(params);
  const { dispatchUserDto, ...userDto } = useUseRegisterContext();
  const [selectedCountry, setSelectedCountry] = useState<Omit<SelectOptionProps, 'onChange'>>();
  const [itemSource, setItemSource] = useState<Omit<SelectOptionProps, 'onChange'>[]>([{ value: 'Test', label: 'Test', isSelected: false }])
  if (!registerToken) {
    return <div>Not found</div>
  }

  const onClick = (e: ResultEventHandler<React.MouseEvent, undefined>) => {

  }

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  }

  const onChangeHandler = (event: ResultEventHandler<React.ChangeEvent<HTMLInputElement>, Omit<SelectOptionProps, 'onChange'>>) => {
    if (event.data.value === selectedCountry?.value) {
      setSelectedCountry(undefined);
      return;
    }
    const arrCopy = itemSource.map(item => ({...item}));
    arrCopy[itemSource.findIndex(item => item.label === event.data.label)].isSelected = event.data.isSelected;
    setSelectedCountry(event.data);
    setItemSource(arrCopy);
  }

  return (
    <FormContainer>
      <div className='w-full flex flex-col gap-4'>
        <FormLabel content='Username' htmlFor='username'/>
        <InputField name='username' onInput={onInput} />
      </div>
      <div className='w-full flex flex-row gap-4'>
        <div className='w-full flex flex-col gap-4'>
          <FormLabel content='First name' htmlFor='firstname'/>
          <InputField name='firstname' />
        </div>
        <div className='w-full flex flex-col gap-4'>
          <FormLabel content='Lastname' htmlFor='lastname'/>
          <InputField name='lastname' />
        </div>
      </div>
      <div className='w-full flex flex-col gap-4'>
        <FormLabel content='Country'/>
        <Select
          isMultiple={false}
          selected={selectedCountry}
          sourceList={itemSource}
          name='country'
          onChange={onChangeHandler} />
      </div>
      <PrimaryButton onClick={onClick} type='button' content='Continue' />
    </FormContainer>
  )
}
