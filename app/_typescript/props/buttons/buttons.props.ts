import React, { JSX } from 'react';
import { ResultEventHandler, TailwindCSSPxSize, HTMLButtonType } from "@/app/_typescript/types/base.types";

export interface IconButtonProps {
    icon: JSX.Element
    width?: TailwindCSSPxSize;
    height?: TailwindCSSPxSize;
    isRounded?: boolean;
    borderStyle?: string;
    onClick(handler: ResultEventHandler<React.MouseEvent, undefined>): void;
}

export interface PrimaryButtonProps {
    content: string;
    type: HTMLButtonType;
    onClick(handler: ResultEventHandler<React.MouseEvent, undefined>): void;
}