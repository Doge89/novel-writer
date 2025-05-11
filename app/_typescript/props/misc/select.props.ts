import React from 'react';
import {ResultEventHandler} from "@/app/_typescript/types/base.types";

export type SelectProps = {
  sourceList: Omit<SelectOptionProps, 'onChange'>[];
  onChange(e: ResultEventHandler<React.ChangeEvent, Omit<SelectOptionProps, 'onChange'>>): void;
  name?: string;
} & (SelectMultipleProps | SelectSingleProps);

type SelectMultipleProps = {
  isMultiple: true;
  selected?: Omit<SelectOptionProps, 'onChange'>[];
}

type SelectSingleProps = {
  isMultiple: false;
  selected?: Omit<SelectOptionProps, 'onChange'>;
}

export interface SelectOptionProps {
  value: string;
  label: string;
  isSelected: boolean;
  onChange(e: ResultEventHandler<React.ChangeEvent, Omit<SelectOptionProps, 'onChange'>>): void;
}
