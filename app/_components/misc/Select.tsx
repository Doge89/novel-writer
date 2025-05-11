"use client";

import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

import { SelectProps, SelectOptionProps } from "@/app/_typescript/props/misc/select.props";

import { useCloseClickingOutside } from "@/app/_hooks/misc/useCloseClickingOutside";
import {ResultEventHandler} from "@/app/_typescript/types/base.types";

function Select({
  sourceList,
  selected,
  name,
  isMultiple,
  onChange,
}: SelectProps) {

  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>();
  const openDropDown = () => setIsOpen(!isOpen);
  const [] = useCloseClickingOutside<HTMLDivElement, MouseEvent>(selectRef, openDropDown, isOpen);

  const onChangeHandler = (e: ResultEventHandler<React.ChangeEvent, SelectOptionProps>) => {
    if (!isMultiple) openDropDown();
    onChange(e);
  }

  return (
    <div ref={selectRef} id={name} onClick={openDropDown} role='listbox' className='cursor-pointer w-full flex flex-1 flex-row rounded-full border group hover:border-accent-700 p-4 transition focus:border-accent-700 border-gray-500 relative'>
      <div className='w-full text-complementary-950'>
        { selected ? (
          !(selected instanceof Array) ? selected.label : selected.map((option) => option.label).join(', ')
        ) : (
          <span className='text-gray-400'>Select an option</span>
        ) }
      </div>
      <ChevronDown className={ `transition ${isOpen ? 'rotate-180' : 'rotate-0'}`} color='#0A0014' size={24} />
      { isOpen ? (
        <div role='listbox' className='absolute left-0 top-12 w-full bg-white z-10 drop-shadow-xl h-auto max-h-[250px] overflow-y-auto rounded-md'>
          { sourceList.map((option, idx) => (<Select.Option key={idx} {...option} onChange={onChangeHandler} />))}
        </div>
      ) : null }
    </div>
  );
}

function Option({ label, value, isSelected, onChange }: SelectOptionProps) {
  return (
    <label
      role='listitem'
      htmlFor={value}
      onClick={(e) => e.stopPropagation()}
      className='w-full p-4 text-complementary-950 flex flex-row items-center justify-start gap-4 transition hover:bg-accent-100'>
      <input type='checkbox' id={value} name={value} checked={isSelected} onChange={(e) => onChange({ e, data: { label, value, isSelected: e.target.checked }})}/>
      {label}
    </label>
  );
}

Select.Option = Option;

export default Select;
