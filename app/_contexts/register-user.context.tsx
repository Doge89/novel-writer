"use client";

import {createContext, useContext, useReducer, use, useEffect, useState} from "react";
import { NodeWithChildrenProps } from "@/app/_typescript/props/base.props";
import { USER_DTO_TEMPLATE } from "@/app/_config/constants";
import { RegisterUserDtoContext } from "@/app/_typescript/interfaces/contexts/register-user.interface";
import { registerUserReducer } from "@/app/_hooks/reducers/register-user.reducer";
import {useAxiosBuilder} from "@/app/_hooks/base/useAxiosBuilder";
import {Tag} from "@/app/_typescript/models/tag.model";

const RegisterUserProvider = createContext<RegisterUserDtoContext | undefined>(undefined);

export function RegisterUserContext({ children }: NodeWithChildrenProps<unknown>) {
  const [userDto, dispatchUserDto] = useReducer(registerUserReducer, USER_DTO_TEMPLATE);
  const apiService = useAxiosBuilder('');
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    apiService.get<Tag[]>('/tag').then(response => {
      if (response.status >= 400) throw Error(response.statusText);
      setTags(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <RegisterUserProvider.Provider value={{ ...userDto, dispatchUserDto, tags}}>
      {children}
    </RegisterUserProvider.Provider>
  )
}

export function useRegisterUserContext(): RegisterUserDtoContext {
  const context = useContext(RegisterUserProvider);
  if (context === undefined) {
    throw new Error("Component is not inside the UseRegisterProvider");
  }
  return context;
}
