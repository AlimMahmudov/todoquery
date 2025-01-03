"use client";
import { store } from "@/redux/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

interface SessionProviderType {
  children: ReactNode;
}

const SessionProvider: FC<SessionProviderType> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default SessionProvider;
