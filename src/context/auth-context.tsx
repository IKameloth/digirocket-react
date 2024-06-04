import React, { createContext, useContext, useState } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  loginUser: () => void;
  logoutUser: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const loginUser = () => {
    // Perform authentication logic
    setIsAuthenticated(true);
  };

  const logoutUser = () => {
    // Perform logout logic
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
