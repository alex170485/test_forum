import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { USER_ROLE_MAP, UserType } from '@/types.ts';

type UserContextType = {
  user: UserType | null;
  setUserData: (user: UserType) => void;
  isAdmin: boolean;
  isUser: boolean;
  logout: () => void;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserType | null>(null);

  const setUserData = (data: UserType) => {
    setUser(data);
  };

  const logout = () => {
    setUser(null);
  };

  const isAdmin = user?.role === USER_ROLE_MAP.ADMIN;
  const isUser = user?.role === USER_ROLE_MAP.USER;

  return <UserContext.Provider value={{ user, setUserData, isAdmin, isUser, logout }}>{children}</UserContext.Provider>;
};

export const useUserContext = (): UserContextType => {
  return useContext(UserContext) as UserContextType;
};
