import {RegisterUserAction, RegisterUserState} from "@/app/_typescript/reducers/register-user.interface";

const registerUserReducer = (state: RegisterUserState, action: RegisterUserAction): RegisterUserState => {
  return state ?? action.value;
}

export { registerUserReducer };
