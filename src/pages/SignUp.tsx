// import React from "react";
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Divider,
//   IconButton
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const textFadeUp = {
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
// };

// const SignUp: React.FC = () => {
//   // State for phone + OTP UI
//   const [phoneNumber, setPhoneNumber] = React.useState("");
//   const [showOtpField, setShowOtpField] = React.useState(false);
//   const [otp, setOtp] = React.useState("");
//   const [otpVerified, setOtpVerified] = React.useState(false);

//   // Handler to simulate sending OTP
//   const handleSendOtp = () => {
//     if (phoneNumber.length === 10) {
//       setShowOtpField(true);
//       setOtpVerified(false);
//       alert("OTP sent (UI demo). Please enter the OTP below.");
//     } else {
//       alert("Please enter a valid 10-digit phone number.");
//     }
//   };

//   // Handler to simulate verifying OTP
//   const handleVerifyOtp = () => {
//     if (otp.length === 6) {
//       setOtpVerified(true);
//       alert("OTP verified (UI demo).");
//     } else {
//       alert("Invalid OTP. (Must be 6 digits)");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         overflow: "hidden"
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
//           p: 4
//         }}
//       >
//         {/* TOP BAR: Brand (left) + Sign In Link (right) */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             mb: 4
//           }}
//         >
//           <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
//             Mubera.AI
//           </Typography>
//           <Typography variant="body2" sx={{ color: "#666" }}>
//             Already have an account?{" "}
//             <Link
//               to="/login"
//               style={{
//                 cursor: "pointer",
//                 fontWeight: 500,
//                 textDecoration: "underline",
//                 color: "#666"
//               }}
//             >
//               Sign in
//             </Link>
//           </Typography>
//         </Box>

//         {/* MAIN CONTENT: Centered Sign Up Form */}
//         <Box
//           sx={{
//             flex: 1,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center"
//           }}
//         >
//           <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
//             Create Account
//           </Typography>
//           <Typography
//             variant="body2"
//             sx={{
//               color: "#666",
//               mb: 3,
//               textAlign: "center",
//               maxWidth: 300
//             }}
//           >
//             Sign up and start your journey with our AI-driven financial platform.
//           </Typography>

//           {/* Form Fields */}
//           <Box sx={{ width: "100%", maxWidth: 350 }}>
//             <TextField
//               label="Full Name"
//               variant="outlined"
//               fullWidth
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               label="Email"
//               variant="outlined"
//               fullWidth
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               label="Password"
//               variant="outlined"
//               type="password"
//               fullWidth
//               sx={{ mb: 2 }}
//             />

//             {/* Phone Number + Send OTP */}
//             <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
//               <TextField
//                 label="Phone Number"
//                 variant="outlined"
//                 fullWidth
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               />
//               <Button
//                 variant="contained"
//                 sx={{
//                   bgcolor: "#000",
//                   color: "#fff",
//                   textTransform: "none"
//                 }}
//                 onClick={handleSendOtp}
//               >
//                 Send OTP
//               </Button>
//             </Box>

//             {/* OTP Field (conditionally rendered) */}
//             {showOtpField && (
//               <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
//                 <TextField
//                   label="Enter OTP"
//                   variant="outlined"
//                   fullWidth
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                 />
//                 <Button
//                   variant="contained"
//                   sx={{
//                     bgcolor: "#000",
//                     color: "#fff",
//                     textTransform: "none"
//                   }}
//                   onClick={handleVerifyOtp}
//                 >
//                   Verify OTP
//                 </Button>
//               </Box>
//             )}

//             <Button
//               variant="contained"
//               fullWidth
//               disabled={!otpVerified}
//               sx={{
//                 bgcolor: otpVerified ? "#000" : "#999",
//                 color: "#fff",
//                 fontWeight: "bold",
//                 py: 1.2,
//                 borderRadius: "8px",
//                 "&:hover": {
//                   bgcolor: otpVerified ? "#333" : "#999"
//                 },
//                 mb: 2
//               }}
//             >
//               CREATE AN ACCOUNT
//             </Button>

//             <Divider sx={{ my: 3 }}>Or sign up with</Divider>
//             <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
//               <IconButton
//                 sx={{
//                   bgcolor: "#f5f5f5",
//                   "&:hover": { bgcolor: "#e0e0e0" },
//                   borderRadius: "8px"
//                 }}
//               >
//                 <FaGoogle />
//               </IconButton>
//               <IconButton
//                 sx={{
//                   bgcolor: "#f5f5f5",
//                   "&:hover": { bgcolor: "#e0e0e0" },
//                   borderRadius: "8px"
//                 }}
//               >
//                 <FaApple />
//               </IconButton>
//               <IconButton
//                 sx={{
//                   bgcolor: "#f5f5f5",
//                   "&:hover": { bgcolor: "#e0e0e0" },
//                   borderRadius: "8px"
//                 }}
//               >
//                 <FaFacebook />
//               </IconButton>
//             </Box>
//           </Box>
//         </Box>
//       </Box>

//       {/* RIGHT HALF (BLACK) */}
//       <Box
//         sx={{
//           flex: 1,
//           bgcolor: "#000",
//           color: "#fff",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//           p: 4
//         }}
//       >
//         <Box sx={{ maxWidth: 450, mx: "auto" }}>
//           <motion.div
//             variants={textFadeUp}
//             initial="initial"
//             animate="animate"
//             transition={{ duration: 0.8 }}
//             style={{ marginBottom: "1rem" }}
//           >
//             <Typography variant="h3" sx={{ fontWeight: "bold" }}>
//               Empower Your Future
//             </Typography>
//           </motion.div>

//           <motion.div
//             variants={textFadeUp}
//             initial="initial"
//             animate="animate"
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <Typography variant="body1" sx={{ maxWidth: 400, opacity: 0.8 }}>
//               Unlock AI-driven financial insights to plan, invest, and secure your goals.
//               Join Mubera.AI and transform your aspirations into reality.
//             </Typography>
//           </motion.div>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default SignUp;
