// src/pages/TermsAndConditions.tsx
import React from "react";
import { Box, Typography, Paper, List, ListItem, ListItemText, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Framer Motion variants for a fade-up effect
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const TermsAndConditions: React.FC = () => {
  const navigate = useNavigate();

  const handleAgree = () => {
    // Mark T&C as accepted
    localStorage.setItem("tcAccepted", "true");
    // Navigate to the next onboarding step, e.g., /onboarding/use-case
    navigate("/onboarding/use-case");
  };

  const handleDecline = () => {
    // If user declines, do something (e.g., go back to homepage)
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5", // Light gray background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ width: "100%", maxWidth: 1200 }}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff", // White Paper
            color: "#333",           // Dark text
            borderRadius: 2,
            overflow: "hidden",
            border: "1px solid #ddd",
          }}
        >
          {/* Top Bar: Title + Last Updated */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              borderBottom: "1px solid #ddd",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Terms of Service
            </Typography>
            <Typography variant="body2" sx={{ color: "#999" }}>
              Last Updated: Apr 1, 2024
            </Typography>
          </Box>

          <Grid container sx={{ flex: 1, minHeight: 0 }}>
            {/* Left Side Nav */}
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                borderRight: "1px solid #ddd",
                p: 2,
                backgroundColor: "#fafafa",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2 }}>
                Sections
              </Typography>
              <List dense sx={{ color: "#555" }}>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemText
                    primary="1. General Terms and Conditions"
                    primaryTypographyProps={{ fontSize: 14 }}
                  />
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemText
                    primary="2. Acceptable Use Policy"
                    primaryTypographyProps={{ fontSize: 14 }}
                  />
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemText
                    primary="3. Cancellation Policy"
                    primaryTypographyProps={{ fontSize: 14 }}
                  />
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemText
                    primary="4. Privacy Policy"
                    primaryTypographyProps={{ fontSize: 14 }}
                  />
                </ListItem>
              </List>
            </Grid>

            {/* Main Content */}
            <Grid
              item
              xs={12}
              md={9}
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
                maxHeight: { xs: "70vh", md: "calc(100vh - 120px)" },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Welcome to Mubera.AI!
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: "#555" }}>
                By clicking “I Agree” below, you acknowledge that you have read,
                understood, and accepted these Terms and Conditions (“Agreement”).
                This Agreement governs your use of Mubera.AI’s products and
                services, including any future updates or expansions.
              </Typography>

              <Typography variant="body2" sx={{ mb: 2, color: "#555" }}>
                <strong>1. Scope of Services:</strong> Mubera.AI provides an
                AI-driven financial platform for businesses. Any additional
                services or third-party integrations may require separate
                agreements or terms.
              </Typography>

              <Typography variant="body2" sx={{ mb: 2, color: "#555" }}>
                <strong>2. User Responsibilities:</strong> You agree to use
                Mubera.AI in compliance with all applicable laws and regulations.
                You must maintain the confidentiality of your account credentials
                and promptly notify us of any unauthorized access.
              </Typography>

              <Typography variant="body2" sx={{ mb: 2, color: "#555" }}>
                <strong>3. Limitations of Liability:</strong> To the fullest
                extent permitted by law, Mubera.AI shall not be liable for any
                indirect, incidental, or consequential damages arising from your
                use of the platform.
              </Typography>

              <Typography variant="body2" sx={{ mb: 2, color: "#555" }}>
                <strong>4. Data &amp; Privacy:</strong> Mubera.AI respects your
                privacy and handles personal data according to our Privacy Policy.
                By using our services, you consent to our data practices.
              </Typography>

              <Typography variant="body2" sx={{ mb: 2, color: "#555" }}>
                <strong>5. Termination:</strong> Mubera.AI reserves the right to
                suspend or terminate your access if you breach any of these Terms
                or engage in unauthorized activities.
              </Typography>

              <Typography variant="body2" sx={{ mb: 4, color: "#555" }}>
                If you do not agree to these Terms, do not click “I Agree” and do
                not use our platform. For any questions, please contact our support
                team.
              </Typography>

              {/* Buttons at the bottom */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 2,
                  mt: "auto",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#999",
                    color: "#555",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#eee",
                    },
                  }}
                  onClick={handleDecline}
                >
                  Decline
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#000",
                    color: "#fff",
                    textTransform: "none",
                    "&:hover": { bgcolor: "#333" },
                  }}
                  onClick={handleAgree}
                >
                  Agree &amp; Continue
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default TermsAndConditions;
