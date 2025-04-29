// // // src/components/ProtectedRoute.tsx
// // import React, { JSX } from "react";
// // import { useMsal } from "@azure/msal-react";
// // import { Navigate } from "react-router-dom";

// // interface ProtectedRouteProps {
// //   children: JSX.Element;
// // }

// // const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
// //   const { accounts } = useMsal();
// //   // If there is at least one account, assume the user is authenticated.
// //   return accounts && accounts.length > 0 ? children : <Navigate to="/auth" />;
// // };

// // export default ProtectedRoute;

// // src/components/ProtectedRoute.tsx
// import React from "react";
// import { useMsal } from "@azure/msal-react";
// import { Navigate } from "react-router-dom";
// import { JSX } from "react/jsx-runtime";

// interface ProtectedRouteProps {
//   children: JSX.Element;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
//   const { accounts } = useMsal();

//   // Check if user is authenticated
//   const isAuthenticated = accounts && accounts.length > 0;

//   // Check T&C acceptance from localStorage (or another method)
//   const tncAccepted = localStorage.getItem("tcAccepted") === "true";

//   if (!isAuthenticated) {
//     // Not logged in, go to /auth
//     return <Navigate to="/auth" />;
//   }

//   if (!tncAccepted) {
//     // Authenticated but hasn't accepted T&C
//     return <Navigate to="/onboarding/terms" />;
//   }

//   // Authenticated & T&C accepted
//   return children;
// };

// export default ProtectedRoute;
// src/components/ProtectedRoute.tsx
import React from "react";
import { useMsal } from "@azure/msal-react";
import { Navigate, useLocation } from "react-router-dom";
import { JSX } from "react/jsx-runtime";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { accounts } = useMsal();
  const location = useLocation();

  const isAuthenticated = accounts && accounts.length > 0;
  const tncAccepted = localStorage.getItem("tcAccepted") === "true";
  const isOnTncPage = location.pathname === "/onboarding/terms";

  // 1) If user is not authenticated, go to /auth
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  // 2) If T&C not accepted, but user is NOT on the T&C page, force them there
  if (!tncAccepted && !isOnTncPage) {
    return <Navigate to="/onboarding/terms" />;
  }

  // Otherwise, render the protected content
  return children;
};

export default ProtectedRoute;
