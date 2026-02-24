import {RegisterUserAction, RegisterUserState} from "@/app/_typescript/reducers/register-user.interface";
import {UserDto} from "@/app/_typescript/models/user.model";
import {USER_DTO_TEMPLATE} from "@/app/_config/constants";

const registerUserReducer = (
  state: RegisterUserState,
  action: RegisterUserAction<UserDto>,
): RegisterUserState => {
  switch (action.type) {
    case 'update': return { ...state, ...action.value }
    case 'reset': return USER_DTO_TEMPLATE;
    default: throw new Error('Invalid hook operation');
  }
}

export { registerUserReducer };
