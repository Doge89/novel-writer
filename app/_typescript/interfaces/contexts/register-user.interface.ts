import { UserDto } from "@/app/_typescript/models/user.model";
import { ActionDispatch } from "react";
import { RegisterUserAction } from "@/app/_typescript/reducers/register-user.interface";
import { Tag } from "@/app/_typescript/models/tag.model";

export interface RegisterUserDtoContext extends UserDto {
  dispatchUserDto: ActionDispatch<[action: RegisterUserAction<UserDto>]>;
  tags: Tag[];
}
