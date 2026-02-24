import React from "react";
import {Gender, Region} from "@/app/_typescript/models/user.model";

export type ResultEventHandler<TEvent, TData> = TEvent extends React.SyntheticEvent ? {
    e: TEvent;
    data: TData;
} : never
export type TailwindCSSCoordinatesDefinition = 'w' | 'h';
export type TailwindCSSPxSize = `${TailwindCSSCoordinatesDefinition}-[${number}px]`;
export type HTMLButtonType = 'button' | 'submit' | 'reset';
export type BaseReducerActionType = 'update' | 'flush' | 'add-item' | 'reset';

export type Languages = Record<Region, string>;

export type Genders = Record<Gender, string>;

export type ElementLocationDirections = 'up' | 'down' | 'left' | 'right';
