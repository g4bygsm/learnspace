"use client";
import { SessionProvider as Provider } from "next-auth/react";
import { Session } from "next-auth";
import React from "react";
type Props = {
  children: React.ReactNode;
  session: Session | null;
};

export default function SessionProvider({ children }: Props) {
  return <Provider>{children}</Provider>;
}
