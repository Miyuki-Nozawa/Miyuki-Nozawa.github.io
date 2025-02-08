"use client";

import { createContext, useState } from "react";

interface AuthContextType {
  authed: boolean;
  setAuthed: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextType>({
  authed: false,
  setAuthed: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);

  return (
    <AuthContext.Provider value={{ authed, setAuthed }}>
      {children}
    </AuthContext.Provider>
  );
}
