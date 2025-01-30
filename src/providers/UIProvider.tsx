"use client";
import { HeroUIProvider } from "@heroui/react";
import { ReactNode } from "react";

interface UIProviderProps {
  children: ReactNode;
}

export default function UIProvider({ children }: UIProviderProps) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}