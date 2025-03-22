import React from "react";
export type ResultEventHandler<TEvent, TData> = TEvent extends React.SyntheticEvent ? {
    e: TEvent;
    data: TData;
} : never

export type TailwindCSSCoordinatesDefinition = 'w' | 'h';

export type TailwindCSSPxSize = `${TailwindCSSCoordinatesDefinition}-[${number}px]`;

export type HTMLButtonType = 'button' | 'submit' | 'reset';