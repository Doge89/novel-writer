"use client";

import { createContext, useContext, useReducer } from "react";
import { NodeWithChildrenProps } from "@/app/_typescript/props/base.props";
import { USER_DTO_TEMPLATE } from "@/app/_config/constants";
import { RegisterUserDtoContext } from "@/app/_typescript/interfaces/contexts/register-user.interface";
import { registerUserReducer } from "@/app/_hooks/reducers/register-user.reducer";

const RegisterUserProvider = createContext<RegisterUserDtoContext | undefined>(undefined);

export function RegisterUserContext({ children }: NodeWithChildrenProps<unknown>) {

  const [userDto, dispatchUserDto] = useReducer(registerUserReducer, USER_DTO_TEMPLATE);

  return (
    <RegisterUserProvider.Provider value={{ ...userDto, dispatchUserDto }}>
      {children}
    </RegisterUserProvider.Provider>
  )
}

export function useUseRegisterContext(): RegisterUserDtoContext {
  const context = useContext(RegisterUserProvider);
  if (context === undefined) {
    throw new Error("Component is not inside the UseRegisterProvider");
  }
  return context;
}
