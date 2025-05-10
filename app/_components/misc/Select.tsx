"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import { SelectProps, SelectOptionProps } from "@/app/_typescript/props/misc/select.props";

function Select({
  sourceList,
  selected,
  name,
  isMultiple,
  onChange,
}: SelectProps) {

  const [isOpen, setIsOpen] = useState(false);

  const openDropDown = () => setIsOpen(!isOpen);

  return (
    <div onClick={openDropDown} role='listbox' className='cursor-pointer w-full flex flex-1 flex-row rounded-full border group hover:border-accent-700 p-4 transition focus:border-accent-700 border-gray-500 relative'>
      <div className='w-full'>
        Text
      </div>
      <ChevronDown rotate={isOpen ? 180 : 0} color='#0A0014' size={24} />
      { isOpen ? (
        <div role='listbox' className='absolute left-0 top-16 w-full bg-white z-10 p-4 drop-shadow-xl h-auto max-h-[250px] overflow-y-auto'>
          { sourceList.map((option, idx) => (<Select.Option key={idx} {...option} />))}
        </div>
      ) : null }
    </div>
  );
}

function Option({ label, value, isSelected }: SelectOptionProps) {
  return (
    <div id={value} className='w-full flex flex-row items-center justify-start gap-4'>
      <input type='checkbox' checked={isSelected} />
      <span>{label}</span>
    </div>
  );
}

Select.Option = Option;

export default Select;
