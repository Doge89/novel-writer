import {UserDto} from "@/app/_typescript/models/user.model";
import {ReducerAction} from "@/app/_typescript/interfaces/base.interface";
import {BaseReducerActionType} from "@/app/_typescript/types/base.types";

export type RegisterUserState = UserDto;
export type RegisterUserAction = ReducerAction<BaseReducerActionType, RegisterUserState>;
