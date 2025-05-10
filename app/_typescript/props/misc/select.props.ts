export interface SelectProps {
  selected: SelectOptionProps | SelectOptionProps[];
  sourceList: SelectOptionProps[];
  onChange: (value: SelectOptionProps) => void;
  isMultiple?: boolean;
  name?: string;
}

export interface SelectOptionProps {
  value: string;
  label: string;
  isSelected: boolean;
}
