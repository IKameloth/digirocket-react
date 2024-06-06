import React, { createContext, useContext, useReducer } from "react";

type User = {
  _id: string;
  username: string;
  email: string;
  password: string;
  date: string;
};

interface AuthContext extends AuthState {
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
};

type AuthAction = { type: "SIGN_IN"; payload: User } | { type: "SIGN_OUT" };

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const AuthContext = createContext<AuthContext | null>(null);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "SIGN_OUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signIn = (email: string, password: string) => {
    // make axios call to api endpoint
    console.log({ email, password });

    // format the response from api service
    const user = {
      _id: "1",
      username: "cmatteo",
      email: "cmatteo@gmail.com",
      password: "1234admin",
      date: "ayer",
    };
    // run the dispatch and update the state
    dispatch({ type: "SIGN_IN", payload: user });
  };

  const signOut = () => {
    dispatch({ type: "SIGN_OUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, signIn, signOut }}>
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
