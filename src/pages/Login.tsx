// // import React, { useState } from "react";
// // import { Box, Typography, TextField, Button, Divider, IconButton } from "@mui/material";
// // import { motion } from "framer-motion";
// // import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
// // import { Link, useNavigate } from "react-router-dom";
// // import { useMsal } from "@azure/msal-react"; // MSAL React
// // import { InteractionType } from "@azure/msal-browser"; // For specifying popup vs. redirect

// // const textFadeUp = {
// //   initial: { opacity: 0, y: 30 },
// //   animate: { opacity: 1, y: 0 },
// // };

// // const Login: React.FC = () => {
// //   const navigate = useNavigate();
// //   const { instance } = useMsal(); // Access MSAL instance

// //   // Local state for optional login hint fields
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleSignIn = async () => {
// //     try {
// //       // Build the login request. Optionally, pass email as loginHint.
// //       const loginRequest = {
// //         scopes: ["openid", "profile", "email"],
// //         loginHint: email || undefined,
// //       };

// //       // Use a popup to sign in. You can switch to loginRedirect if needed.
// //       await instance.loginPopup(loginRequest);

// //       // On successful login, MSAL caches tokens; then navigate to the Dashboard.
// //       navigate("/dashboard");
// //     } catch (error) {
// //       console.error("Login failed:", error);
// //       // Optionally, display an error message to the user
// //     }
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         width: "100vw",
// //         height: "100vh",
// //         display: "flex",
// //         overflow: "hidden",
// //       }}
// //     >
// //       {/* LEFT HALF (WHITE) */}
// //       <Box
// //         component={motion.div}
// //         initial={{ opacity: 0, x: -50 }}
// //         animate={{ opacity: 1, x: 0 }}
// //         transition={{ duration: 0.8 }}
// //         sx={{
// //           flex: 1,
// //           bgcolor: "#fff",
// //           display: "flex",
// //           flexDirection: "column",
// //           p: 4,
// //         }}
// //       >
// //         {/* TOP BAR: Brand (left) + Sign Up Link (right) */}
// //         <Box
// //           sx={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //             mb: 4,
// //           }}
// //         >
// //           <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
// //             Mubera.AI
// //           </Typography>
// //           <Typography variant="body2" sx={{ color: "#666" }}>
// //             Don&apos;t have an account?{" "}
// //             <Link
// //               to="/signup"
// //               style={{
// //                 cursor: "pointer",
// //                 fontWeight: 500,
// //                 textDecoration: "underline",
// //                 color: "#666",
// //               }}
// //             >
// //               Sign up
// //             </Link>
// //           </Typography>
// //         </Box>

// //         {/* MAIN CONTENT: Centered Login Form */}
// //         <Box
// //           sx={{
// //             flex: 1,
// //             display: "flex",
// //             flexDirection: "column",
// //             justifyContent: "center",
// //             alignItems: "center",
// //           }}
// //         >
// //           <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
// //             Welcome Back
// //           </Typography>
// //           <Typography
// //             variant="body2"
// //             sx={{
// //               color: "#666",
// //               mb: 3,
// //               textAlign: "center",
// //               maxWidth: 300,
// //             }}
// //           >
// //             Enter your credentials to sign in and explore our AI-driven financial platform.
// //           </Typography>

// //           {/* Form Fields */}
// //           <Box sx={{ width: "100%", maxWidth: 350 }}>
// //             <TextField
// //               label="Email"
// //               variant="outlined"
// //               fullWidth
// //               sx={{ mb: 2 }}
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //             />
// //             <TextField
// //               label="Password"
// //               variant="outlined"
// //               fullWidth
// //               sx={{ mb: 2 }}
// //               type="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             />

// //             <Button
// //               variant="contained"
// //               fullWidth
// //               onClick={handleSignIn}
// //               sx={{
// //                 bgcolor: "#000",
// //                 color: "#fff",
// //                 fontWeight: "bold",
// //                 py: 1.2,
// //                 borderRadius: "8px",
// //                 "&:hover": { bgcolor: "#333" },
// //                 mb: 2,
// //               }}
// //             >
// //               Sign In
// //             </Button>

// //             <Divider sx={{ my: 3 }}>Or sign in with</Divider>
// //             <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
// //               <IconButton
// //                 sx={{
// //                   bgcolor: "#f5f5f5",
// //                   "&:hover": { bgcolor: "#e0e0e0" },
// //                   borderRadius: "8px",
// //                 }}
// //               >
// //                 <FaGoogle />
// //               </IconButton>
// //               <IconButton
// //                 sx={{
// //                   bgcolor: "#f5f5f5",
// //                   "&:hover": { bgcolor: "#e0e0e0" },
// //                   borderRadius: "8px",
// //                 }}
// //               >
// //                 <FaApple />
// //               </IconButton>
// //               <IconButton
// //                 sx={{
// //                   bgcolor: "#f5f5f5",
// //                   "&:hover": { bgcolor: "#e0e0e0" },
// //                   borderRadius: "8px",
// //                 }}
// //               >
// //                 <FaFacebook />
// //               </IconButton>
// //             </Box>
// //           </Box>
// //         </Box>
// //       </Box>

// //       {/* RIGHT HALF (BLACK) */}
// //       <Box
// //         sx={{
// //           flex: 1,
// //           bgcolor: "#000",
// //           color: "#fff",
// //           display: "flex",
// //           justifyContent: "center",
// //           alignItems: "center",
// //           textAlign: "center",
// //           p: 4,
// //         }}
// //       >
// //         <Box>
// //           <motion.div
// //             variants={textFadeUp}
// //             initial="initial"
// //             animate="animate"
// //             transition={{ duration: 0.8 }}
// //             style={{ marginBottom: "1rem" }}
// //           >
// //             <Typography variant="h3" sx={{ fontWeight: "bold" }}>
// //               Make a Dream
// //             </Typography>
// //           </motion.div>

// //           <motion.div
// //             variants={textFadeUp}
// //             initial="initial"
// //             animate="animate"
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //           >
// //             <Typography variant="body1" sx={{ maxWidth: 400, opacity: 0.8 }}>
// //               With Mubera.AI, you can achieve unparalleled financial insights. Manage your assets,
// //               plan for the future, and harness the power of AI to make your dreams come true.
// //             </Typography>
// //           </motion.div>
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Login;
// import React, { useEffect, useState } from "react";
// import { Box, Typography, TextField, Button, Divider, IconButton } from "@mui/material";
// import { motion } from "framer-motion";
// import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useMsal } from "@azure/msal-react";
// import { InteractionType } from "@azure/msal-browser";

// const textFadeUp = {
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
// };

// const Login: React.FC = () => {
//   const navigate = useNavigate();
//   const { instance, accounts } = useMsal(); // ✅ Get MSAL instance and user account(s)

//   // Local state for optional login hint fields
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // ✅ If user is already logged in, auto-redirect to Dashboard
//   useEffect(() => {
//     if (accounts.length > 0) {
//       navigate("/dashboard");
//     }
//   }, [accounts, navigate]);

//   const handleSignIn = async () => {
//     try {
//       if (!instance) {
//         console.error("MSAL is not initialized");
//         return;
//       }

//       const loginRequest = {
//         scopes: ["openid", "profile", "email"],
//         loginHint: email || undefined,
//       };

//       await instance.loginPopup(loginRequest);

//       // ✅ After successful login, check accounts again
//       const updatedAccounts = instance.getAllAccounts();
//       if (updatedAccounts.length > 0) {
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         overflow: "hidden",
//       }}
//     >
//       {/* LEFT HALF (WHITE) */}
//       <Box
//         component={motion.div}
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         sx={{
//           flex: 1,
//           bgcolor: "#fff",
//           display: "flex",
//           flexDirection: "column",
//           p: 4,
//         }}
//       >
//         {/* TOP BAR: Brand (left) + Sign Up Link (right) */}
//         <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
//           <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
//             Mubera.AI
//           </Typography>
//           <Typography variant="body2" sx={{ color: "#666" }}>
//             Don&apos;t have an account?{" "}
//             <Link
//               to="/signup"
//               style={{
//                 cursor: "pointer",
//                 fontWeight: 500,
//                 textDecoration: "underline",
//                 color: "#666",
//               }}
//             >
//               Sign up
//             </Link>
//           </Typography>
//         </Box>

//         {/* MAIN CONTENT: Centered Login Form */}
//         <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
//           <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
//             Welcome Back
//           </Typography>
//           <Typography variant="body2" sx={{ color: "#666", mb: 3, textAlign: "center", maxWidth: 300 }}>
//             Enter your credentials to sign in and explore our AI-driven financial platform.
//           </Typography>

//           {/* Form Fields */}
//           <Box sx={{ width: "100%", maxWidth: 350 }}>
//             <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} value={email} onChange={(e) => setEmail(e.target.value)} />
//             <TextField label="Password" variant="outlined" fullWidth sx={{ mb: 2 }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

//             <Button
//               variant="contained"
//               fullWidth
//               onClick={handleSignIn}
//               sx={{
//                 bgcolor: "#000",
//                 color: "#fff",
//                 fontWeight: "bold",
//                 py: 1.2,
//                 borderRadius: "8px",
//                 "&:hover": { bgcolor: "#333" },
//                 mb: 2,
//               }}
//             >
//               Sign In
//             </Button>

//             <Divider sx={{ my: 3 }}>Or sign in with</Divider>
//             <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
//               <IconButton sx={{ bgcolor: "#f5f5f5", "&:hover": { bgcolor: "#e0e0e0" }, borderRadius: "8px" }}>
//                 <FaGoogle />
//               </IconButton>
//               <IconButton sx={{ bgcolor: "#f5f5f5", "&:hover": { bgcolor: "#e0e0e0" }, borderRadius: "8px" }}>
//                 <FaApple />
//               </IconButton>
//               <IconButton sx={{ bgcolor: "#f5f5f5", "&:hover": { bgcolor: "#e0e0e0" }, borderRadius: "8px" }}>
//                 <FaFacebook />
//               </IconButton>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

