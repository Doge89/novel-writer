"use client";
import React, {use, useState} from 'react';
import {redirect, RedirectType} from "next/navigation";
import {ParamsProps} from '@/app/_typescript/props/base.props';
import {SignUpParamsProps} from '@/app/_typescript/props/pages/auth/sign-up.props';

import FormContainer from "@/app/_components/forms/FormContainer";
import InputField from "@/app/_components/inputs/InputField";
import PrimaryButton from "@/app/_components/buttons/PrimaryButton";
import Select from "@/app/_components/misc/Select";
import {ResultEventHandler} from "@/app/_typescript/types/base.types";
import {SelectOption, SelectOptionProps} from "@/app/_typescript/props/misc/select.props";
import FormSectionContainer from "@/app/_components/forms/FormSectionContainer";
import {AVAILABLE_GENDERS, AVAILABLE_LANGUAGES} from "@/app/_config/constants";
import {isOptionChecked} from "@/app/_typescript/utils/select.utils";
import {useRegisterUserContext} from "@/app/_contexts/register-user.context";
import {UserDto} from "@/app/_typescript/models/user.model";
import DateTimePicker from "@/app/_components/inputs/DateTimePicker";

const DEFAULT_LANGUAGES_STATE: Omit<SelectOptionProps, 'onChange'>[] = Object
  .entries(AVAILABLE_LANGUAGES)
  .map(([key, value]) => ({ label: value, value: key, isSelected: false }));

const DEFAULT_GENDERS_STATE: Omit<SelectOptionProps, 'onChange'>[] = Object
  .entries(AVAILABLE_GENDERS)
  .map(([key, value]) => ({ label: value, value: key, isSelected: false }));

export default function RegisterTokenPage({ params }: ParamsProps<SignUpParamsProps>) {
  const { registerToken } =  use(params);
  const { dispatchUserDto, ...userDto } = useRegisterUserContext();
  const [selectedCountry, setSelectedCountry] = useState<SelectOption>();
  const [selectedGender, setSelectedGender] = useState<SelectOption>();
  const [countrySource, setCountrySource] = useState<SelectOption[]>(DEFAULT_LANGUAGES_STATE);
  const [gendersSource, setGendersSource] = useState<SelectOption[]>(DEFAULT_GENDERS_STATE)
  if (!registerToken) {
    return <div>Not found</div>
  }

  const onClick = () => {
    redirect(`/sign-up/${registerToken}/interests`, RedirectType.replace);
  }

  const onInput = (
    e: React.InputEvent<HTMLInputElement>,
    field: Extract<keyof UserDto, 'firstName' | 'lastName' | 'username'>,
  ): void  => {
    dispatchUserDto({ type: 'update', value: { ...userDto, [field]: e.currentTarget.value } });
  }

  const onChangeCountryHandler = (event: ResultEventHandler<React.ChangeEvent<HTMLInputElement>, Omit<SelectOptionProps, 'onChange'>>) => {
    if (event.data.value === selectedCountry?.value) {
      setSelectedCountry(undefined);
      setCountrySource(DEFAULT_LANGUAGES_STATE);
      return;
    }
    const arrCopy = countrySource.map(item => ({...item}));
    const idxSelected = isOptionChecked(arrCopy);
    arrCopy[countrySource.findIndex(item => item.label === event.data.label)].isSelected = event.data.isSelected;
    if (idxSelected !== -1) {
      arrCopy[idxSelected].isSelected = false;
    }
    setSelectedCountry(event.data);
    setCountrySource(arrCopy);
  }

  const onChangeGenderHandler = (event: ResultEventHandler<React.ChangeEvent<HTMLInputElement>, Omit<SelectOptionProps, 'onChange'>>) => {
    if (event.data.value === selectedGender?.value) {
      setSelectedGender(undefined);
      setGendersSource(DEFAULT_GENDERS_STATE);
      return;
    }
    const arrCopy = gendersSource.map(item => ({...item}));
    const idxSelected = isOptionChecked(arrCopy);
    arrCopy[gendersSource.findIndex(item => item.label === event.data.label)].isSelected = event.data.isSelected;
    if (idxSelected !== -1) {
      arrCopy[idxSelected].isSelected = false;
    }
    setSelectedGender(event.data);
    setGendersSource(arrCopy);
  }

  const onDateTimePickerChange = (date: Date | null): void => {
    if (date === null) {
      throw new Error('No date selected');
    }
    dispatchUserDto({ type: 'update', value: { ...userDto, birthDay: date } });
  }


  return (
    <FormContainer>
      <FormSectionContainer labelContent='Username' htmlFor='username'>
        <InputField name='username' value={userDto.username} onInput={(e) => onInput(e, 'username')} />
      </FormSectionContainer>
      <div className='w-full flex flex-col gap-4 md:flex-row'>
        <FormSectionContainer labelContent='Firstname' htmlFor='firstname'>
          <InputField name='firstname' value={userDto.firstName} onInput={(e) => onInput(e, 'firstName')} />
        </FormSectionContainer>
        <FormSectionContainer labelContent='Lastname' htmlFor='lastname'>
          <InputField name='lastname' value={userDto.lastName} onInput={(e) => onInput(e, 'lastName')} />
        </FormSectionContainer>
      </div>
      <div className='w-full flex flex-col gap-4 md:flex-row'>
        <FormSectionContainer labelContent='Birthday' htmlFor='birthday'>
          <DateTimePicker
            onChange={onDateTimePickerChange}
            placeholderText='yyyy-MM-dd'/>
        </FormSectionContainer>
        <FormSectionContainer labelContent='Gender' htmlFor='gender'>
          <Select
            sourceList={gendersSource}
            selected={selectedGender}
            onChange={onChangeGenderHandler}
            name='gender'
            isMultiple={false}/>
        </FormSectionContainer>
      </div>
      <FormSectionContainer labelContent='Country' htmlFor='country'>
        <Select
          isMultiple={false}
          selected={selectedCountry}
          sourceList={countrySource}
          name='country'
          onChange={onChangeCountryHandler} />
      </FormSectionContainer>
      <PrimaryButton onClick={onClick} type='button' content='Continue' />
    </FormContainer>
  )
}
