import { isAxiosError } from "axios";
import React, { createContext, useContext, useReducer } from "react";
import axiosInstance from "src/lib/axiosConfig";

type User = {
  _id: string;
  username: string;
  email: string;
  password: string;
  date: string;
};

type Error = Array<{ field: string | null; message: string }> | [];

interface AuthContext extends AuthState {
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  cleanErrors: () => void;
}

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  errors: Error;
  isLoading: boolean;
};

type AuthAction =
  | { type: "SIGN_IN"; payload: User }
  | { type: "SIGN_OUT" }
  | { type: "SET_ERROR"; payload: Error }
  | { type: "CLEAN_ERROR" };

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  errors: [],
  isLoading: false,
};

const AuthContext = createContext<AuthContext | null>(null);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        errors: [],
      };
    case "SIGN_OUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        errors: [],
      };
    case "SET_ERROR":
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    case "CLEAN_ERROR":
      return {
        ...state,
        errors: [],
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signIn = async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      const data = response.data;
      console.log(data);
      // dispatch({ type: "SIGN_IN", payload: user });
    } catch (err) {
      if (isAxiosError(err)) {
        const dataError = err.response?.data.errors;
        dispatch({ type: "SET_ERROR", payload: dataError });
      }
    }
  };

  const signOut = () => {
    dispatch({ type: "SIGN_OUT" });
  };

  const cleanErrors = () => {
    dispatch({ type: "CLEAN_ERROR" });
  };

  return (
    <AuthContext.Provider value={{ ...state, signIn, signOut, cleanErrors }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContext => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
