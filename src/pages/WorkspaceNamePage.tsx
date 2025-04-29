// src/pages/WorkspaceNamePage.tsx
import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Simple fade/slide for the image or illustration
const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const WorkspaceNamePage: React.FC = () => {
  const navigate = useNavigate();
  const [workspaceName, setWorkspaceName] = React.useState("");

  const handleContinue = () => {
    // Store the workspace name in localStorage (or call an API)
    localStorage.setItem("workspaceName", workspaceName.trim() || "My Workspace");

    // Navigate to the dashboard (or your next onboarding step)
    navigate("/dashboard");
  };

  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex" }}>
      {/* LEFT HALF (White) */}
      <Box
        sx={{
          flex: 1,
          bgcolor: "#fff",
          color: "#000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          What would you like to name your Workspace?
        </Typography>
        <Typography variant="body2" sx={{ color: "#666", mb: 3, maxWidth: 400 }}>
          Your Workspace is where you can find all your leads, revenue strategies,
          and CRM data. Give it a name that best represents your business.
        </Typography>

        {/* TextField for Workspace Name */}
        <TextField
          label="Enter the name of your workspace"
          variant="outlined"
          fullWidth
          value={workspaceName}
          onChange={(e) => setWorkspaceName(e.target.value)}
          sx={{ maxWidth: 400, mb: 3 }}
        />

        <Button
          variant="contained"
          onClick={handleContinue}
          sx={{
            bgcolor: "#000",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: 2,
            textTransform: "none",
            width: "fit-content",
            px: 4,
            "&:hover": { bgcolor: "#333" },
          }}
        >
          Continue
        </Button>
      </Box>

      {/* RIGHT HALF (Black) */}
      <Box
        sx={{
          flex: 1,
          bgcolor: "#000",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
          textAlign: "center",
        }}
      >
        {/* Animated placeholder image or illustration */}
        <motion.img
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          src="https://via.placeholder.com/600x400?text=Workspace+Illustration"
          alt="Placeholder"
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "8px",
          }}
        />
      </Box>
    </Box>
  );
};

export default WorkspaceNamePage;
