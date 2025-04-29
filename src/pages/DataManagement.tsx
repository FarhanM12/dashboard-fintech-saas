// src/pages/DataManagement.tsx
import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Divider,
  useMediaQuery,
  useTheme,
  Link,
  IconButton,
  TextField
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CloseIcon from "@mui/icons-material/Close";

const DataManagement: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Whether the CSV upload panel is visible
  const [showUploadPanel, setShowUploadPanel] = useState(false);

  // Card data: each item = { title, icon, description, buttonText, onClick }
  const cards = [
    {
      title: "Pull Data",
      icon: <CloudDownloadIcon sx={{ fontSize: 32 }} />,
      description: "Fetch data from external sources or APIs and integrate them here.",
      buttonText: "Pull Now",
      onClick: () => {
        // Future logic for pulling data
        alert("Pull Data clicked!");
      }
    },
    {
      title: "Upload Data",
      icon: <CloudUploadIcon sx={{ fontSize: 32 }} />,
      description: "Upload files or CSVs to add new data. Map columns and preview before finalizing.",
      buttonText: "Upload",
      onClick: () => {
        setShowUploadPanel(true);
      }
    },
    {
      title: "Uploaded Data",
      icon: <ListAltIcon sx={{ fontSize: 32 }} />,
      description: "Review all previously uploaded data, check logs, and manage your records.",
      buttonText: "View Uploads",
      onClick: () => {
        // Future logic for viewing uploads
        alert("View Uploads clicked!");
      }
    }
  ];

  // Common styling for the three cards
  const cardStyles = {
    borderRadius: 3,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    p: 3,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start",
    gap: 1.5,
    cursor: "pointer",
    backgroundColor: "#fff"
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f8fafc",
        py: 4,
        px: { xs: 2, md: 4 }
      }}
    >
      {/* PAGE HEADER */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" fontWeight={700} sx={{ mb: 0.5 }}>
          Data Management
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 600 }}>
          Manage your data by pulling from external sources or uploading local files. 
          You can also review previously uploaded data, all in one place.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* CARDS CONTAINER */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 4
        }}
      >
        {cards.map((card, index) => (
          <Paper
            key={index}
            component={motion.div}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            sx={cardStyles}
          >
            {/* Icon + Title */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {card.icon}
              <Typography variant="h6" fontWeight={700}>
                {card.title}
              </Typography>
            </Box>

            {/* Description */}
            <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
              {card.description}
            </Typography>

            {/* Action Button */}
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: 2,
                mt: "auto",
                bgcolor: "#00C875",
                "&:hover": { bgcolor: "#00B761" }
              }}
              onClick={card.onClick}
            >
              {card.buttonText}
            </Button>
          </Paper>
        ))}
      </Box>

      {/* CSV UPLOAD PANEL */}
      <AnimatePresence>
        {showUploadPanel && (
          <Box
            component={motion.div}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "tween", duration: 0.4 }}
            sx={{ mt: 4 }}
          >
            <Paper
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                position: "relative"
              }}
            >
              {/* Close Button */}
              <IconButton
                onClick={() => setShowUploadPanel(false)}
                sx={{ position: "absolute", top: 16, right: 16 }}
              >
                <CloseIcon />
              </IconButton>

              <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                Upload CSV
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Provide a CSV file with the following sample format. You can also{" "}
                <Link href="#" underline="hover">
                  Download a Template
                </Link>{" "}
                for reference.
              </Typography>

              {/* Example fields / instructions */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  mb: 2
                }}
              >
                <TextField
                  label="Campaign Name"
                  variant="outlined"
                  size="small"
                  sx={{ flex: 1, minWidth: 200 }}
                />
                <TextField
                  label="Description"
                  variant="outlined"
                  size="small"
                  sx={{ flex: 2, minWidth: 300 }}
                />
              </Box>

              {/* Drag & Drop Area */}
              <Box
                sx={{
                  border: "2px dashed #cbd5e1",
                  borderRadius: 2,
                  p: 4,
                  textAlign: "center",
                  color: "#94a3b8",
                  mb: 3
                }}
              >
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Drag & drop your CSV file here or
                </Typography>
                <Button variant="outlined" size="small" sx={{ textTransform: "none" }}>
                  Browse
                </Button>
              </Box>

              {/* Submit Button */}
              <Box sx={{ textAlign: "right" }}>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                    bgcolor: "#00C875",
                    "&:hover": { bgcolor: "#00B761" }
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Paper>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default DataManagement;
