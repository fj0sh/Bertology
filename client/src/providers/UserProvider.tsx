"use client";
import useFetchData from "@/hooks/fetcher/useFetchData";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { decrypter } from "@/lib/function/encrypter/encrypter";

interface User {
  id: number;
  username: string;
  role: string;
  token: string;
  user: User;
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
  const [tokenValue, setTokenValue] = useState<string | null>(null);

  useEffect(() => {
    const updateTokenValue = () => {
      const newToken = Cookies.get("jwt_auth");
      setTokenValue(newToken || null);
    };

    updateTokenValue();

    const interval = setInterval(updateTokenValue, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (tokenValue) {
      const data = JSON.parse(decrypter(tokenValue));
      setUser(data);
    } else {
      setUser(null);
    }
  }, [tokenValue]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export { UserProvider, useUser };
