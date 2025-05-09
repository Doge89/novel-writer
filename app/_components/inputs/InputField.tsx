"use client";

import React, { JSX, useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { InputProps } from "@/app/_typescript/props/inputs/inputs.props";
import IconButton from "@/app/_components/buttons/IconButton";
import {ResultEventHandler} from "@/app/_typescript/types/base.types";

export default function InputField({ onInput, ...props }: InputProps) {
    const [isPassword, setIsPassword] = useState(props.type === 'password');
    const [icon, setIcon] = useState<JSX.Element>(<Eye color='#6b7280' />);
    const [isShowPassword, setIsShowPassword] = useState(false);

    const border = isPassword ? 'rounded-tl-full rounded-bl-full border-r-0' : 'border rounded-full';

    const onClick = (handler: ResultEventHandler<React.MouseEvent, undefined>): void => {
        handler.e.stopPropagation();
        setIsShowPassword(prev => !prev);
    }

    useEffect(() => {
        setIcon(() => isShowPassword ? <Eye color='#6b7280' /> : <EyeOff color='#6b7280' />);
    }, [isShowPassword]);

    return (
        <div className='w-full flex flex-1 flex-row rounded-full overflow-hidden group'>
            <input
                className={`w-full ${border} p-4 outline-0 password text-complementary-950 border border-gray-500 group-hover:border-accent-700 transition focus:border-accent-700 [&:focus+div]:border-accent-700`}
                onInput={onInput}
                {...props}/>
            {isPassword ? (
                <div className='flex items-center justify-center border rounded-tr-full rounded-br-full border-l-0 flex-1 border-gray-500 group-hover:border-accent-700'>
                    <IconButton width='w-[48px]' borderStyle='b' icon={icon} onClick={onClick} />
                </div>
            ) : null}
        </div>
    );
}