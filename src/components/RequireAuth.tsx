// src/components/RequireAuth.tsx
import React, { JSX, useEffect } from "react";
import { useMsal } from "@azure/msal-react";

interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const { instance, accounts } = useMsal();

  useEffect(() => {
    // If no user is signed in, automatically trigger loginRedirect
    if (accounts.length === 0) {
      instance.loginRedirect({
        scopes: ["openid", "profile", "email"],
      }).catch((error) => {
        console.error("RequireAuth loginRedirect error:", error);
      });
    }
  }, [accounts, instance]);

  // While waiting for the loginRedirect to complete, show a loading state
  return accounts.length > 0 ? children : <div>Loading...</div>;
};

export default RequireAuth;
