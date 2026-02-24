import { UserDto } from "@/app/_typescript/models/user.model";
import {Genders, Languages} from "@/app/_typescript/types/base.types";

export const USER_DTO_TEMPLATE: UserDto = {
  firstName: '',
  lastName: '',
  username: '',
  gender: 'M',
  region: 'MX',
  interests: [],
  birthDay: new Date(),
  isWriter: false,
}

export const AVAILABLE_LANGUAGES: Languages = {
  MX: 'Mexico',
  USA: 'United State',
  CA: 'Canada',
  CHN: 'China',
  COL: 'Colombia',
  JPN: 'Japan',
  ARG: 'Argentina',
  BRA: 'Brazil',
  ESP: 'Spain',
}

export const AVAILABLE_GENDERS: Genders = {
  M: 'Male',
  F: 'Female',
}
