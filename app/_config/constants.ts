import { UserDto } from "@/app/_typescript/models/user.model";

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
