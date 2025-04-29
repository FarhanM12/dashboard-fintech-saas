// // src/pages/AuthPage.tsx
import React, { useEffect } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";

const textFadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const { instance, accounts } = useMsal();

  // Auto-redirect to dashboard if already authenticated
  useEffect(() => {
    if (accounts.length > 0) {
      navigate("/dashboard");
    }
  }, [accounts, navigate]);

  const handleAuth = async () => {
    try {
      const loginRequest = {
        scopes: ["openid", "profile", "email"],
      };

      // Redirect the user to the Azure AD B2C hosted authentication page
      await instance.loginRedirect(loginRequest);
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        overflow: "hidden",
      }}
    >
      {/* LEFT HALF (WHITE) */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          flex: 1,
          bgcolor: "#fff",
          display: "flex",
          flexDirection: "column",
          p: 4,
        }}
      >
        {/* TOP BAR */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
            Mubera.AI
          </Typography>
          <Typography variant="body2" sx={{ color: "#666" }}>
            Need help?{" "}
            <Link to="/support" style={{ textDecoration: "underline", color: "#666" }}>
              Contact Support
            </Link>
          </Typography>
        </Box>

        {/* MAIN CONTENT */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Create or Sign In
          </Typography>
          <Typography variant="body2" sx={{ color: "#666", mb: 3, textAlign: "center", maxWidth: 300 }}>
            Sign up or sign in to experience our AI-driven financial platform.
          </Typography>

          <Button
            variant="contained"
            fullWidth
            onClick={handleAuth}
            sx={{
              bgcolor: "#000",
              color: "#fff",
              fontWeight: "bold",
              py: 1.2,
              borderRadius: "8px",
              "&:hover": { bgcolor: "#333" },
              mb: 2,
            }}
          >
            Get Started with Microsoft
          </Button>

          <Divider sx={{ my: 3 }} />
        </Box>
      </Box>

      {/* RIGHT HALF (BLACK) */}
      <Box
        sx={{
          flex: 1,
          bgcolor: "#000",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          p: 4,
        }}
      >
        <Box sx={{ maxWidth: 450, mx: "auto" }}>
          <motion.div
            variants={textFadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8 }}
            style={{ marginBottom: "1rem" }}
          >
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Empower Your Future
            </Typography>
          </motion.div>
          <motion.div
            variants={textFadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="body1" sx={{ maxWidth: 400, opacity: 0.8 }}>
              Unlock AI-driven financial insights to plan, invest, and secure your goals.
              Join Mubera.AI and transform your aspirations into reality.
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthPage;
