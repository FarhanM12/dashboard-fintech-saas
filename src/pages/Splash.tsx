// import React from "react";
// import { useTheme } from "@mui/material/styles";
// import {
//   Box,
//   Typography,
//   Button,
//   IconButton,
//   Container,
//   Grid
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
// import {
//   FaCheckCircle,
//   FaRocket,
//   FaGlobe,
//   FaShieldAlt,
//   FaMagic,
//   FaCubes,
//   FaChartLine,
//   FaCog,
//   FaDatabase
// } from "react-icons/fa";

// /** Simple fade-up animation for Framer Motion */
// const fadeUp = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.8 },
// };

// interface SplashProps {
//   isDarkMode: boolean;
//   toggleTheme: () => void;
// }

// const Splash: React.FC<SplashProps> = ({ isDarkMode, toggleTheme }) => {
//   // Theme-based colors
//   const mainBg = isDarkMode ? "#000" : "#fff";
//   const textColor = isDarkMode ? "#fff" : "#000";
//   const subTextColor = isDarkMode ? "#ccc" : "#666";

//   // Glassy top bar gradient
//   const topBarBg = isDarkMode
//     ? "linear-gradient(135deg, rgba(30,30,30,0.7), rgba(30,30,30,0.4))"
//     : "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))";

//   // Nav items
//   const navItems = ["Product", "Solutions", "Docs", "Pricing"];

//   return (
//     <Box sx={{ bgcolor: mainBg, color: textColor, minHeight: "100vh" }}>
//       {/* STICKY NAVBAR (semi-opaque, curved glass-effect) */}
//       <Box
//         sx={{
//           position: "sticky",
//           top: 20,
//           zIndex: 999,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           py: 1,
//           px: 3,
//           mx: 2,
//           borderRadius: 4,
//           background: topBarBg,
//           backdropFilter: "blur(12px)",
//           border: isDarkMode
//             ? "1px solid rgba(255,255,255,0.2)"
//             : "1px solid rgba(0,0,0,0.1)",
//           boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//         }}
//       >
//         {/* Brand (Left) */}
//         <Typography variant="h6" sx={{ fontWeight: "bold", m: 0 }}>
//           Mubera.AI
//         </Typography>

//         {/* Nav Items (Center) */}
//         <Box sx={{ display: "flex", gap: 3 }}>
//           {navItems.map((item) => {
//             if (item === "Docs") {
//               // "Docs" links to GitBook in a new tab
//               return (
//                 <Typography
//                   key={item}
//                   component="a"
//                   href="https://mubera.gitbook.io/untitled/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   variant="body1"
//                   sx={{
//                     fontWeight: "bold",
//                     cursor: "pointer",
//                     color: textColor,
//                     textDecoration: "none",
//                     "&:hover": { opacity: 0.7 },
//                   }}
//                 >
//                   {item}
//                 </Typography>
//               );
//             } else {
//               return (
//                 <Typography
//                   key={item}
//                   variant="body1"
//                   sx={{
//                     fontWeight: "bold",
//                     cursor: "pointer",
//                     "&:hover": { opacity: 0.7 },
//                   }}
//                 >
//                   {item}
//                 </Typography>
//               );
//             }
//           })}
//         </Box>

//         {/* Right: Theme Toggle + CTA Buttons */}
//         <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//           <IconButton onClick={toggleTheme} sx={{ color: textColor }}>
//             {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//           </IconButton>
//           <Button
//             variant="outlined"
//             sx={{
//               textTransform: "none",
//               fontWeight: "bold",
//               borderRadius: 2,
//               color: textColor,
//               borderColor: textColor,
//               "&:hover": {
//                 borderColor: textColor,
//                 opacity: 0.8,
//               },
//             }}
//           >
//             Book Demo
//           </Button>
//           <Button
//             component={Link}
//             to="/signup"
//             variant="contained"
//             sx={{
//               bgcolor: textColor,
//               color: isDarkMode ? "#000" : "#fff",
//               fontWeight: "bold",
//               textTransform: "none",
//               borderRadius: 2,
//               "&:hover": { opacity: 0.8 },
//             }}
//           >
//             Try Free
//           </Button>
//         </Box>
//       </Box>

//       {/* 1) HERO SECTION (Text Left, Right placeholder - no image) */}
//       <Container maxWidth="lg" sx={{ py: 6 }}>
//         <Grid container spacing={4} alignItems="center">
//           {/* Left Text */}
//           <Grid item xs={12} md={6}>
//             <motion.div {...fadeUp}>
//               <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
//                 Empower Your Finance & CRM
//               </Typography>
//             </motion.div>
//             <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
//               <Typography
//                 variant="body1"
//                 sx={{ mb: 3, color: subTextColor, lineHeight: 1.5 }}
//               >
//                 Unlock seamless automation, real-time insights, and AI-driven decisions. 
//                 Our integrated platform helps you manage leads, optimize revenue, and reduce manual overhead—so you can focus on growth.
//               </Typography>
//             </motion.div>
//             <motion.div {...fadeUp} transition={{ delay: 0.4 }}>
//               <Button
//                 variant="contained"
//                 sx={{
//                   bgcolor: textColor,
//                   color: isDarkMode ? "#000" : "#fff",
//                   fontWeight: "bold",
//                   textTransform: "none",
//                   borderRadius: 2,
//                   "&:hover": { opacity: 0.8 },
//                 }}
//               >
//                 Get Started
//               </Button>
//             </motion.div>
//           </Grid>
//           {/* Right Column (no image) */}
//           <Grid item xs={12} md={6} />
//         </Grid>
//       </Container>

//       {/* 2) SECOND SECTION (Image Left, Text Right) => Actually no image now, just placeholders */}
//       <Container maxWidth="lg" sx={{ py: 6 }}>
//         <Grid
//           container
//           spacing={4}
//           alignItems="center"
//           direction={{ xs: "column", md: "row-reverse" }}
//         >
//           {/* Right Text */}
//           <Grid item xs={12} md={6}>
//             <motion.div {...fadeUp}>
//               <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
//                 AI-Driven Insights
//               </Typography>
//             </motion.div>
//             <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
//               <Typography
//                 variant="body1"
//                 sx={{ mb: 3, color: subTextColor, lineHeight: 1.5 }}
//               >
//                 Harness advanced analytics to forecast revenue, identify cross-sell opportunities,
//                 and streamline financial processes. Our robust AI engine processes data in real-time,
//                 giving you a competitive edge in decision-making.
//               </Typography>
//             </motion.div>
//             <motion.div {...fadeUp} transition={{ delay: 0.4 }}>
//               <Button
//                 variant="outlined"
//                 sx={{
//                   textTransform: "none",
//                   fontWeight: "bold",
//                   borderRadius: 2,
//                   color: textColor,
//                   borderColor: textColor,
//                   "&:hover": {
//                     borderColor: textColor,
//                     opacity: 0.8,
//                   },
//                 }}
//               >
//                 Learn More
//               </Button>
//             </motion.div>
//           </Grid>
//           {/* Left Column (no image) */}
//           <Grid item xs={12} md={6} />
//         </Grid>
//       </Container>

//       {/* 3) THIRD SECTION (Text Left, Image Right) => "Streamlined Billing", no image now */}
//       <Container maxWidth="lg" sx={{ py: 6 }}>
//         <Grid container spacing={4} alignItems="center">
//           {/* Left Text */}
//           <Grid item xs={12} md={6}>
//             <motion.div {...fadeUp}>
//               <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
//                 Streamlined Billing
//               </Typography>
//             </motion.div>
//             <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
//               <Typography
//                 variant="body1"
//                 sx={{ mb: 3, color: subTextColor, lineHeight: 1.5 }}
//               >
//                 Simplify your invoicing, manage subscriptions, and reduce manual errors. 
//                 Our finance engine integrates seamlessly with your CRM data, ensuring 
//                 revenue operations remain smooth and transparent.
//               </Typography>
//             </motion.div>
//             <motion.div {...fadeUp} transition={{ delay: 0.4 }}>
//               <Button
//                 variant="outlined"
//                 sx={{
//                   textTransform: "none",
//                   fontWeight: "bold",
//                   borderRadius: 2,
//                   color: textColor,
//                   borderColor: textColor,
//                   "&:hover": {
//                     borderColor: textColor,
//                     opacity: 0.8,
//                   },
//                 }}
//               >
//                 Explore Billing
//               </Button>
//             </motion.div>
//           </Grid>
//           {/* Right Column (no image) */}
//           <Grid item xs={12} md={6} />
//         </Grid>
//       </Container>

//       {/* "Differences" SECTION (6 horizontally arranged cards with border) */}
//       <Container maxWidth="lg" sx={{ py: 6 }}>
//         <motion.div {...fadeUp}>
//           <Typography
//             variant="h4"
//             sx={{ fontWeight: "bold", mb: 3, textAlign: "left" }}
//           >
//             How We’re Different
//           </Typography>
//         </motion.div>

//         <Grid container spacing={3}>
//           {[
//             {
//               icon: <FaCheckCircle size={32} />,
//               title: "No Tech Overhead",
//               desc: "Focus on business logic while our platform handles complex finance & CRM integrations behind the scenes.",
//             },
//             {
//               icon: <FaRocket size={32} />,
//               title: "One-Click Integrations",
//               desc: "Seamlessly connect with existing tools for billing, analytics, or AI-driven workflows—saving time and resources.",
//             },
//             {
//               icon: <FaGlobe size={32} />,
//               title: "Adaptive AI",
//               desc: "Leverage real-time insights and predictive modeling to stay ahead of market trends and drive revenue growth.",
//             },
//             {
//               icon: <FaShieldAlt size={32} />,
//               title: "Enterprise-Grade Security",
//               desc: "Strict protocols and compliance ensure your data remains safe, private, and always accessible.",
//             },
//             {
//               icon: <FaMagic size={32} />,
//               title: "Dedicated Support",
//               desc: "24/7 assistance from our experts, ready to optimize configurations and tackle any challenges you face.",
//             },
//             {
//               icon: <FaCubes size={32} />,
//               title: "All-in-One Solution",
//               desc: "From automated workflows to CRM analytics, manage your finance operations in a single environment.",
//             },
//           ].map((card, idx) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={4}
//               key={card.title}
//               component={motion.div}
//               {...fadeUp}
//               transition={{ delay: 0.1 * idx }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "flex-start",
//                   p: 3,
//                   border: "1px solid",
//                   borderColor: isDarkMode ? "rgba(255,255,255,0.2)" : "#ddd",
//                   borderRadius: 2,
//                   transition: "transform 0.2s ease",
//                   "&:hover": {
//                     transform: "scale(1.03)",
//                   },
//                 }}
//               >
//                 <Box
//                   sx={{
//                     mb: 2,
//                     color: isDarkMode ? "#fff" : "#000",
//                   }}
//                 >
//                   {card.icon}
//                 </Box>
//                 <Typography
//                   variant="h6"
//                   sx={{ fontWeight: "bold", mb: 1, color: textColor }}
//                 >
//                   {card.title}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: subTextColor, lineHeight: 1.4 }}>
//                   {card.desc}
//                 </Typography>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* TWO ADDITIONAL INFO BOXES: BRE & RME (no images) */}
//       <Container maxWidth="lg" sx={{ py: 6 }}>
//         <motion.div {...fadeUp}>
//           <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, textAlign: "left" }}>
//             More About Our Engines
//           </Typography>
//         </motion.div>

//         {/* Box 1: BRE (Left, shadow effect, icon inside) */}
//         <motion.div
//           {...fadeUp}
//           transition={{ delay: 0.2 }}
//           style={{ display: "flex", justifyContent: "flex-start", marginBottom: "40px" }}
//         >
//           <Box
//             sx={{
//               p: 3,
//               maxWidth: 600,
//               boxShadow: 3,
//               borderRadius: 2,
//               bgcolor: isDarkMode ? "rgba(255,255,255,0.06)" : "#fff",
//             }}
//           >
//             <Box sx={{ mb: 2, display: "flex", gap: 2, alignItems: "center", color: textColor }}>
//               <FaCog size={40} />
//             </Box>
//             <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: textColor }}>
//               Automate Decision-Making with BRE
//             </Typography>
//             <Typography variant="body1" sx={{ color: subTextColor, lineHeight: 1.5 }}>
//               Leverage our powerful Business Rules Engine to streamline decision-making 
//               and enforce policies with ease. Whether you're handling compliance, risk 
//               assessment, or dynamic workflows, BRE allows you to define and execute rules 
//               without complex coding. Adapt quickly to changing business needs and 
//               automate key processes effortlessly.
//             </Typography>
//           </Box>
//         </motion.div>

//         {/* Box 2: RME (Right, gradient background, no arrow, no image) */}
//         <motion.div
//           {...fadeUp}
//           transition={{ delay: 0.4 }}
//           style={{ display: "flex", justifyContent: "flex-end" }}
//         >
//           <Box
//             sx={{
//               position: "relative",
//               p: 3,
//               maxWidth: 600,
//               borderRadius: 2,
//               background: isDarkMode
//                 ? "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))"
//                 : "linear-gradient(135deg, #f0f0ff, #ffffff)",
//             }}
//           >
//             <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: textColor }}>
//               Optimize Revenue with RME
//             </Typography>
//             <Typography variant="body1" sx={{ color: subTextColor, lineHeight: 1.5 }}>
//               Our Revenue Maximization Engine helps businesses unlock their full earning potential by analyzing 
//               advanced pricing models, identifying cross-selling opportunities, and automating revenue-driven 
//               decisions. With RME, you can make data-backed optimizations that boost efficiency, drive profitability, 
//               and scale your business across industries.
//             </Typography>
//           </Box>
//         </motion.div>
//       </Container>

//       {/* OPTIONAL: Additional Highlights Section */}
//       <Container maxWidth="lg" sx={{ py: 6, textAlign: "center" }}>
//         <motion.div {...fadeUp}>
//           <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
//             Additional Highlights
//           </Typography>
//         </motion.div>
//         <Grid container spacing={4} justifyContent="center">
//           {[
//             {
//               icon: <FaChartLine size={48} />,
//               title: "Real-Time Analytics",
//               desc: "Instant dashboards and predictive modeling to keep you ahead.",
//             },
//             {
//               icon: <FaDatabase size={48} />,
//               title: "Unified Data",
//               desc: "All your finance & CRM data in one place for a seamless experience.",
//             },
//             {
//               icon: <FaShieldAlt size={48} />,
//               title: "Secure & Compliant",
//               desc: "Enterprise-grade security and compliance standards you can trust.",
//             },
//           ].map((feature, idx) => (
//             <Grid item xs={12} md={4} key={feature.title}>
//               <motion.div {...fadeUp} transition={{ delay: 0.1 * idx }}>
//                 <Box sx={{ textAlign: "center" }}>
//                   <Box sx={{ mb: 1, color: textColor }}>{feature.icon}</Box>
//                   <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
//                     {feature.title}
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: subTextColor }}>
//                     {feature.desc}
//                   </Typography>
//                 </Box>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* FINAL CTA SECTION */}
//       <Container maxWidth="lg" sx={{ py: 6, textAlign: "center" }}>
//         <motion.div {...fadeUp}>
//           <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
//             Ready to Elevate Your Finance & CRM?
//           </Typography>
//         </motion.div>
//         <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
//           <Typography
//             variant="body1"
//             sx={{ color: subTextColor, maxWidth: 700, mx: "auto", mb: 4 }}
//           >
//             Join 1,000+ businesses using Mubera.AI to automate daily operations, boost revenue,
//             and gain a competitive edge with intelligent insights.
//           </Typography>
//         </motion.div>
//         <motion.div {...fadeUp} transition={{ delay: 0.4 }}>
//           <Button
//             component={Link}
//             to="/auth"
//             variant="contained"
//             sx={{
//               bgcolor: textColor,
//               color: isDarkMode ? "#000" : "#fff",
//               fontWeight: "bold",
//               textTransform: "none",
//               px: 3,
//               py: 1.2,
//               borderRadius: 2,
//               "&:hover": { opacity: 0.8 },
//             }}
//           >
//             CREATE FREE ACCOUNT
//           </Button>
//         </motion.div>
//       </Container>

//       {/* NEW BOTTOM FOOTER (Straight line with no curve, full-width) */}
//       <motion.div
//         {...fadeUp}
//         transition={{ delay: 0.2 }}
//         style={{ width: "100%" }}
//       >
//         <Box
//           sx={{
//             width: "100%",
//             backgroundColor: isDarkMode ? "#fff" : "#000", // inverted
//             color: isDarkMode ? "#000" : "#fff",
//             py: 4,
//             px: 3,
//           }}
//         >
//           <Container maxWidth="lg">
//             <Grid container spacing={4}>
//               {/* 1) Product */}
//               <Grid item xs={12} sm={6} md={3}>
//                 <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
//                   Product
//                 </Typography>
//                 <Typography variant="body2" sx={{ mb: 0.5, cursor: "pointer" }}>
//                   RME
//                 </Typography>
//                 <Typography variant="body2" sx={{ mb: 0.5, cursor: "pointer" }}>
//                   CRM
//                 </Typography>
//                 <Typography variant="body2" sx={{ mb: 0.5, cursor: "pointer" }}>
//                   BRE
//                 </Typography>
//               </Grid>

//               {/* 2) About Us */}
//               <Grid item xs={12} sm={6} md={3}>
//                 <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
//                   About Us
//                 </Typography>
//                 <Typography variant="body2" sx={{ mb: 0.5, cursor: "pointer" }}>
//                   Our Story
//                 </Typography>
//                 <Typography variant="body2" sx={{ mb: 0.5, cursor: "pointer" }}>
//                   Careers
//                 </Typography>
//               </Grid>

//               {/* 3) Contact Us */}
//               <Grid item xs={12} sm={6} md={3}>
//                 <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
//                   Contact Us
//                 </Typography>
//                 <Typography variant="body2" sx={{ mb: 0.5 }}>
//                   support@mubera.app
//                 </Typography>
//               </Grid>

//               {/* 4) Address */}
//               <Grid item xs={12} sm={6} md={3}>
//                 <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
//                   Address
//                 </Typography>
//                 <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
//                   C/701 Gaurav Residency CHS LTD Phase 1 Nr Mayor Bungalow
//                   Kanakia Road, Bhd Beverly Park Mira Road East Thane 401107,
//                   Mira Road, Thane, Thane, Maharashtra, India, 401107
//                 </Typography>
//               </Grid>
//             </Grid>

//             {/* Copyright */}
//             <Box sx={{ mt: 4, textAlign: "center" }}>
//               <Typography variant="body2">
//                 © Mubera Technologies Private Limited
//               </Typography>
//             </Box>
//           </Container>
//         </Box>
//       </motion.div>
//     </Box>
//   );
// };

// export default Splash;
// src/pages/Splash.tsx
import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Container,
  Grid,
  Chip
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
  FaCheckCircle,
  FaRocket,
  FaGlobe,
  FaShieldAlt,
  FaMagic,
  FaCubes,
  FaChartLine,
  FaCog,
  FaDatabase
} from "react-icons/fa";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const cardHover = {
  hover: {
    y: -5,
    transition: { duration: 0.3 }
  }
};

interface SplashProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Splash: React.FC<SplashProps> = ({ isDarkMode, toggleTheme }) => {
  // Keep your existing color references
  const mainBg = isDarkMode ? "#0A0A18" : "#F8FAFF";
  const textColor = isDarkMode ? "#E6F1FF" : "#0A0F22";
  const subTextColor = isDarkMode ? "#8B9BBE" : "#5E6E8A";
  const primaryColor = "#6366F1";
  const secondaryColor = "#06B6D4";
  const gradient = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`;

  const topBarBg = isDarkMode
    ? "linear-gradient(145deg, rgba(10,10,24,0.98), rgba(15,15,35,0.95))"
    : "linear-gradient(145deg, rgba(248,250,255,0.98), rgba(245,247,253,0.95))";

  const navItems = ["Product", "Solutions", "Docs", "Pricing"];

  return (
    <Box
      sx={{
        bgcolor: mainBg,
        color: textColor,
        minHeight: "100vh",
        // Subtle grid pattern in the background for a "dashboard" feel
        backgroundImage: `
          radial-gradient(${primaryColor}05 1px, transparent 1px),
          radial-gradient(${primaryColor}05 1px, transparent 1px)
        `,
        backgroundPosition: `
          0px 0px,
          20px 20px
        `,
        backgroundSize: "40px 40px"
      }}
    >
      {/* Holographic Navbar */}
      <Box
        component={motion.div}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        sx={{
          position: "sticky",
          top: 20,
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: 1.5,
          px: 4,
          mx: 3,
          borderRadius: 3,
          background: topBarBg,
          backdropFilter: "blur(16px)",
          border: isDarkMode
            ? `1px solid ${primaryColor}33`
            : `1px solid ${primaryColor}11`,
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            letterSpacing: -0.5,
            color: textColor
          }}
        >
          Mubera.AI
        </Typography>

        <Box sx={{ display: "flex", gap: 4 }}>
          {navItems.map((item) => (
            <motion.div whileHover={{ scale: 1.05 }} key={item}>
              <Typography
                component={item === "Docs" ? "a" : "div"}
                href={item === "Docs" ? "https://mubera.gitbook.io/untitled/" : undefined}
                target={item === "Docs" ? "_blank" : undefined}
                variant="body1"
                sx={{
                  fontWeight: 600,
                  cursor: "pointer",
                  position: "relative",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    bottom: -2,
                    left: 0,
                    width: 0,
                    height: 2,
                    background: gradient,
                    transition: "width 0.3s ease"
                  },
                  "&:hover:after": {
                    width: "100%"
                  }
                }}
              >
                {item}
              </Typography>
            </motion.div>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: textColor,
                "&:hover": {
                  bgcolor: isDarkMode ? `${primaryColor}15` : `${primaryColor}05`
                }
              }}
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="outlined"
              sx={{
                px: 3,
                fontWeight: 700,
                borderRadius: 2,
                borderWidth: 2,
                borderColor: textColor,
                color: textColor,
                "&:hover": {
                  borderColor: primaryColor,
                  color: primaryColor
                }
              }}
            >
              Book Demo
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              component={Link}
              to="/signup"
              variant="contained"
              sx={{
                px: 3,
                fontWeight: 700,
                background: gradient,
                color: "#fff",
                "&:hover": {
                  boxShadow: `0 0 24px ${primaryColor}40`
                }
              }}
            >
              Try Free
            </Button>
          </motion.div>
        </Box>
      </Box>

      {/* Animated Hero Section */}
      <Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div {...fadeUp}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  lineHeight: 1.2,
                  fontSize: "3.5rem",
                  letterSpacing: -1.5
                }}
              >
                A Touch of Class in Your Every Financial Decision
              </Typography>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: subTextColor,
                  fontSize: "1.1rem",
                  lineHeight: 1.7
                }}
              >
                Financial decisions don’t have to be stressful or complicated. 
                Here, we believe in taking a sophisticated approach to your money management.
              </Typography>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.4 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 5,
                  py: 1.5,
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  borderRadius: 2,
                  background: gradient,
                  color: "#fff",
                  "&:hover": {
                    boxShadow: `0 0 32px ${primaryColor}40`
                  }
                }}
              >
                Get Started for Free
              </Button>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div {...fadeUp} transition={{ delay: 0.6 }}>
              <Box
                sx={{
                  height: 500,
                  borderRadius: 4,
                  position: "relative",
                  overflow: "hidden",
                  border: `2px solid ${primaryColor}33`,
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    width: "150%",
                    height: "150%",
                    background: gradient,
                    opacity: 0.1,
                    animation: "shimmer 8s linear infinite",
                    "@keyframes shimmer": {
                      "0%": { transform: "translateX(-50%) rotate(45deg)" },
                      "100%": { transform: "translateX(50%) rotate(45deg)" }
                    }
                  }
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "80%",
                    height: "80%",
                    background: `
                      radial-gradient(circle at 50% 50%, ${primaryColor}05, transparent 60%),
                      repeating-linear-gradient(
                        45deg,
                        ${primaryColor}02,
                        ${primaryColor}02 1px,
                        transparent 1px,
                        transparent 40px
                      )
                    `,
                    animation: "pulse 6s ease-in-out infinite",
                    "@keyframes pulse": {
                      "0%, 100%": { opacity: 0.8 },
                      "50%": { opacity: 0.2 }
                    }
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Core Engines Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <motion.div {...fadeUp}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 6,
              textAlign: "center",
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Neural Engines
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              {...fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Box
                sx={{
                  p: 4,
                  height: "100%",
                  background: isDarkMode
                    ? `linear-gradient(145deg, rgba(10,10,24,0.9), rgba(15,15,35,0.95))`
                    : `linear-gradient(145deg, rgba(248,250,255,0.9), rgba(245,247,253,0.95))`,
                  borderRadius: 4,
                  backdropFilter: "blur(20px)",
                  border: `2px solid ${primaryColor}33`,
                  boxShadow: `0 16px 48px ${primaryColor}11`
                }}
              >
                <Box
                  sx={{
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    color: primaryColor
                  }}
                >
                  <FaCog size={40} />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      background: gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}
                  >
                    Business Rules Engine
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: subTextColor,
                    mb: 3,
                    lineHeight: 1.7
                  }}
                >
                  Automate complex decision-making with AI-powered workflows and real-time compliance checks.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  {["Auto-Compliance", "Risk Analysis", "Workflow Automation"].map(
                    (tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        sx={{
                          bgcolor: `${primaryColor}15`,
                          color: primaryColor,
                          border: `1px solid ${primaryColor}33`,
                          fontWeight: 600
                        }}
                      />
                    )
                  )}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              {...fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <Box
                sx={{
                  p: 4,
                  height: "100%",
                  background: isDarkMode
                    ? `linear-gradient(145deg, rgba(10,10,24,0.9), rgba(15,15,35,0.95))`
                    : `linear-gradient(145deg, rgba(248,250,255,0.9), rgba(245,247,253,0.95))`,
                  borderRadius: 4,
                  backdropFilter: "blur(20px)",
                  border: `2px solid ${secondaryColor}33`,
                  boxShadow: `0 16px 48px ${secondaryColor}11`
                }}
              >
                <Box
                  sx={{
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    color: secondaryColor
                  }}
                >
                  <FaChartLine size={40} />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      background: `linear-gradient(135deg, ${secondaryColor}, ${primaryColor})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}
                  >
                    Revenue Engine
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: subTextColor,
                    mb: 3,
                    lineHeight: 1.7
                  }}
                >
                  Predictive analytics and AI-driven optimization for maximum profitability.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  {["Price Optimization", "Demand Forecasting", "ROI Analysis"].map(
                    (tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        sx={{
                          bgcolor: `${secondaryColor}15`,
                          color: secondaryColor,
                          border: `1px solid ${secondaryColor}33`,
                          fontWeight: 600
                        }}
                      />
                    )
                  )}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Feature Grid */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <motion.div {...fadeUp}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 6,
              textAlign: "center",
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Enterprise Features
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {[
            {
              icon: <FaCheckCircle size={32} />,
              title: "Zero Infrastructure",
              desc: "Cloud-native architecture with automatic scaling"
            },
            {
              icon: <FaRocket size={32} />,
              title: "Instant Deployment",
              desc: "Go live in minutes with pre-configured templates"
            },
            {
              icon: <FaShieldAlt size={32} />,
              title: "Military Security",
              desc: "End-to-end encryption and compliance"
            },
            {
              icon: <FaMagic size={32} />,
              title: "Smart Automation",
              desc: "AI-powered workflow optimization"
            },
            {
              icon: <FaCubes size={32} />,
              title: "Unified Platform",
              desc: "All financial tools in one solution"
            },
            {
              icon: <FaDatabase size={32} />,
              title: "Real-Time Analytics",
              desc: "Instant insights with predictive models"
            }
          ].map((feature, idx) => (
            <Grid item xs={12} sm={6} md={4} key={feature.title}>
              <motion.div
                {...fadeUp}
                transition={{ delay: idx * 0.1 }}
                whileHover="hover"
                variants={cardHover}
              >
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    background: isDarkMode
                      ? `linear-gradient(145deg, rgba(10,10,24,0.9), rgba(15,15,35,0.95))`
                      : `linear-gradient(145deg, rgba(248,250,255,0.9), rgba(245,247,253,0.95))`,
                    borderRadius: 3,
                    backdropFilter: "blur(20px)",
                    border: `1px solid ${primaryColor}33`,
                    boxShadow: `0 16px 48px ${primaryColor}11`
                  }}
                >
                  <Box
                    sx={{
                      mb: 3,
                      width: 48,
                      height: 48,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: gradient,
                      borderRadius: 2,
                      color: "#fff"
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      letterSpacing: -0.5
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: subTextColor,
                      lineHeight: 1.6
                    }}
                  >
                    {feature.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Final CTA */}
      <Container maxWidth="lg" sx={{ py: 12, textAlign: "center" }}>
        <motion.div {...fadeUp}>
          <Box
            sx={{
              p: 6,
              borderRadius: 4,
              background: isDarkMode
                ? `linear-gradient(145deg, rgba(10,10,24,0.9), rgba(15,15,35,0.95))`
                : `linear-gradient(145deg, rgba(248,250,255,0.9), rgba(245,247,253,0.95))`,
              backdropFilter: "blur(20px)",
              border: `2px solid ${primaryColor}33`,
              boxShadow: `0 16px 48px ${primaryColor}11`
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 3,
                background: gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Start Your Transformation
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: subTextColor,
                mb: 4,
                fontSize: "1.1rem",
                maxWidth: 600,
                mx: "auto"
              }}
            >
              Join industry leaders revolutionizing their financial operations
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                component={Link}
                to="/auth"
                variant="contained"
                size="large"
                sx={{
                  px: 6,
                  py: 1.5,
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  borderRadius: 2,
                  background: gradient,
                  color: "#fff",
                  "&:hover": {
                    boxShadow: `0 0 32px ${primaryColor}40`
                  }
                }}
              >
                CREATE FREE ACCOUNT
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>

      {/* Holographic Footer */}
      <Box
        sx={{
          borderTop: `2px solid ${primaryColor}33`,
          mt: 12,
          py: 8,
          background: isDarkMode
            ? `linear-gradient(145deg, rgba(10,10,24,0.9), rgba(15,15,35,0.95))`
            : `linear-gradient(145deg, rgba(248,250,255,0.9), rgba(245,247,253,0.95))`,
          backdropFilter: "blur(20px)"
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Product
              </Typography>
              {["RME", "CRM", "BRE"].map((item) => (
                <Typography
                  key={item}
                  variant="body2"
                  sx={{
                    color: subTextColor,
                    mb: 1,
                    cursor: "pointer",
                    "&:hover": {
                      color: primaryColor
                    }
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                About Us
              </Typography>
              {["Our Story", "Careers"].map((item) => (
                <Typography
                  key={item}
                  variant="body2"
                  sx={{
                    color: subTextColor,
                    mb: 1,
                    cursor: "pointer",
                    "&:hover": {
                      color: primaryColor
                    }
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Contact
              </Typography>
              <Typography variant="body2" sx={{ color: subTextColor }}>
                support@mubera.app
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Headquarters
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: subTextColor,
                  whiteSpace: "pre-line"
                }}
              >
                C/701 Gaurav Residency CHS LTD Phase 1 Nr Mayor Bungalow
                Kanakia Road, Bhd Beverly Park Mira Road East Thane 401107,
                Mira Road, Thane, Thane, Maharashtra, India, 401107
              </Typography>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: 8,
              pt: 4,
              borderTop: `1px solid ${primaryColor}33`,
              textAlign: "center"
            }}
          >
            <Typography variant="body2" sx={{ color: subTextColor }}>
              © {new Date().getFullYear()} Mubera Technologies Private Limited
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Splash;
