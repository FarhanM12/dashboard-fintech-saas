// src/pages/UseCasePage.tsx
import React from "react";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { motion } from "framer-motion"; // For the image animation
import { useNavigate } from "react-router-dom";

// Example usage options
const usageOptions = [
  { label: "For selling credit cards & Loans", value: "creditCardsLoans" },
  { label: "For selling Insurance", value: "insurance" },
  { label: "For selling investment products", value: "investments" },
  { label: "All of the above", value: "all" },
  { label: "Other", value: "other" },
];

// Simple fade/slide from right
const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const UseCasePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

  // Toggle a checkbox in the selected list
  const handleCheckboxChange = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleContinue = () => {
    // In production, you might store these selections in your backend or context
    console.log("Selected usage options:", selectedOptions);
    // Navigate to next step (e.g., workspace naming or dashboard)
    navigate("/onboarding/workspace");
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
          How are you planning to use Mubera?
        </Typography>
        <Typography variant="body2" sx={{ color: "#666", mb: 3 }}>
          Select all that apply.
        </Typography>

        {/* Multi-select checkboxes */}
        {usageOptions.map((option) => (
          <FormControlLabel
            key={option.value}
            label={option.label}
            sx={{ mb: 1 }}
            control={
              <Checkbox
                checked={selectedOptions.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
                sx={{
                  color: "#000",
                  "&.Mui-checked": {
                    color: "#000",
                  },
                }}
              />
            }
          />
        ))}

        <Button
          variant="contained"
          onClick={handleContinue}
          sx={{
            mt: 3,
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
        {/* Animated placeholder image */}
        <motion.img
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          src="https://via.placeholder.com/600x400?text=Mubera+AI"
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

export default UseCasePage;
