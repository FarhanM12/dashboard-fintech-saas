// config/authConfig.ts
export const msalConfig = {
  auth: {
    clientId: "40e9b14f-1706-4848-afbf-1c91d1e047f2",
    authority: "https://muberatechapp.b2clogin.com/muberatechapp.onmicrosoft.com/B2C_1_SignInSignUp",
    knownAuthorities: ["muberatechapp.b2clogin.com"],
    redirectUri: "http://localhost:5173", // Must match Azure B2C reply URL
  },
  cache: {
    cacheLocation: "sessionStorage",
  },
};