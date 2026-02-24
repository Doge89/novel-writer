import { SelectOption } from "@/app/_typescript/props/misc/select.props";

/**
 * Check if the source coming from the select has a checked value
 * @param items The source from the select
 * @returns The index of the checked value. Otherwise, -1*/
export function isOptionChecked(items: SelectOption[]): number {
  if (items.length === 0) return -1;
  if (!items.some((item) => item.isSelected)) return -1;
  return items.findIndex((item) => item.isSelected);
}
