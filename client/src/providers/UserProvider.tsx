"use client";
import useFetchData from "@/hooks/fetcher/useFetchData";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserType } from "@/constants/Users";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

interface User {
  id: "number";
  username: "string";
  role: "string";
}

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextType {
  user: User | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("Context must be within provider");
  }
  return context;
};

const UserProvider = (props: UserProviderProps) => {
  const { children } = props;
  const [user, setUser] = useState<User | null>(null);
  const [isLogged, setIsLogged] = useState(false);

  const tokenValue = Cookies.get("token");

  useEffect(() => {
    if (tokenValue) {
      const decoded = jwt.decode(tokenValue) as User | null;
      if (decoded) {
        setUser(decoded);
        setIsLogged(true);
      }
    }
  }, [tokenValue]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export { UserProvider, useUser };
