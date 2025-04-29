import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  InputBase,
  Select,
  MenuItem,
  FormControl,
  Tabs,
  Tab,
  Chip,
  Paper,
  Divider
} from "@mui/material";
import { Search, Add } from "@mui/icons-material";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: string;
  status: "Published" | "Draft" | "Inactive";
  totalSales: number;
  totalRevenue: string;
  category: "API" | "Cards" | "Loans" | "Insurance" | "Investment" | "Real Estate";
}

// Example data
const initialProducts: Product[] = [
  {
    id: 1,
    name: "API Payment Gateway",
    price: "200 USD",
    status: "Published",
    totalSales: 15,
    totalRevenue: "3,000 USD",
    category: "API"
  },
  {
    id: 2,
    name: "Credit Cards (Gold)",
    price: "200 USD/Year",
    status: "Draft",
    totalSales: 10,
    totalRevenue: "2,000 USD",
    category: "Cards"
  },
  {
    id: 3,
    name: "Personal Loan",
    price: "300,000 INR",
    status: "Inactive",
    totalSales: 8,
    totalRevenue: "2,40,000 INR",
    category: "Loans"
  },
  {
    id: 4,
    name: "Home Insurance Basic",
    price: "150 USD/Month",
    status: "Published",
    totalSales: 12,
    totalRevenue: "1,800 USD",
    category: "Insurance"
  },
  {
    id: 5,
    name: "Mutual Fund Investment",
    price: "5000 INR",
    status: "Draft",
    totalSales: 5,
    totalRevenue: "25,000 INR",
    category: "Investment"
  },
  {
    id: 6,
    name: "Real Estate Mortgage",
    price: "5,00,000 INR",
    status: "Published",
    totalSales: 3,
    totalRevenue: "15,00,000 INR",
    category: "Real Estate"
  },
];

const Products: React.FC = () => {
  // Tabs for category
  const [activeTab, setActiveTab] = useState<string>("All");
  // Search, filter, sort
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("Newest");

  // Handle tab changes
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  // Filter + search logic
  const filteredProducts = initialProducts.filter((prod) => {
    const inTab = activeTab === "All" || prod.category === activeTab;
    const inStatus = filterStatus === "All" || prod.status === filterStatus;
    const inSearch =
      searchTerm === "" ||
      prod.name.toLowerCase().includes(searchTerm.toLowerCase());
    return inTab && inStatus && inSearch;
  });

  // Sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "Newest") return b.id - a.id;
    if (sortBy === "Oldest") return a.id - b.id;
    return 0;
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f8fafc",
        py: 4,
        px: { xs: 2, md: 4 },
      }}
    >
      {/* MAIN CARD */}
      <Paper
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{
          p: { xs: 2, md: 3 },
          borderRadius: 3,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        {/* HEADER: Title & Add Button */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Box>
            <Typography variant="h5" fontWeight={700}>
              Products
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manage and track all your products in one place.
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<Add />}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              bgcolor: "#00C875",
              "&:hover": { bgcolor: "#00B761" },
            }}
          >
            Add Product
          </Button>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* CATEGORY TABS */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mb: 3,
            "& .MuiTabs-indicator": {
              backgroundColor: "#00C875",
            },
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 500,
              minWidth: "auto",
              mr: 2,
            },
          }}
        >
          <Tab label="All" value="All" />
          <Tab label="API" value="API" />
          <Tab label="Cards" value="Cards" />
          <Tab label="Loans" value="Loans" />
          <Tab label="Insurance" value="Insurance" />
          <Tab label="Investment" value="Investment" />
          <Tab label="Real Estate" value="Real Estate" />
        </Tabs>

        {/* SEARCH + FILTERS */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          {/* Search */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#fff",
              borderRadius: 2,
              px: 2,
              py: 0.5,
              width: 300,
              border: "1px solid #e2e8f0",
            }}
          >
            <Search sx={{ color: "#94a3b8", mr: 1 }} />
            <InputBase
              placeholder="Search products..."
              sx={{ flex: 1, fontSize: 14, fontWeight: 500 }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Box>

          {/* Status & Sort */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <FormControl size="small">
              <Select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                displayEmpty
                sx={{
                  borderRadius: 2,
                  bgcolor: "#fff",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#e2e8f0",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#cbd5e1",
                  },
                }}
              >
                <MenuItem value="All">All Status</MenuItem>
                <MenuItem value="Published">Published</MenuItem>
                <MenuItem value="Draft">Draft</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small">
              <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                displayEmpty
                sx={{
                  borderRadius: 2,
                  bgcolor: "#fff",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#e2e8f0",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#cbd5e1",
                  },
                }}
              >
                <MenuItem value="Newest">Sort by: Newest</MenuItem>
                <MenuItem value="Oldest">Sort by: Oldest</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* TABLE HEADER */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr 2fr 2fr 2fr",
            gap: 1,
            p: 2,
            borderBottom: "1px solid #e2e8f0",
            backgroundColor: "#f9fafb",
            fontWeight: 600,
            fontSize: 14,
            borderRadius: 1,
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            Product
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            Price
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            Status
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            Total Sales
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            Total Revenue
          </Typography>
        </Box>

        {/* TABLE BODY (with animated hover) */}
        {sortedProducts.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            style={{
              display: "grid",
              gridTemplateColumns: "3fr 2fr 2fr 2fr 2fr",
              gap: "0.5rem",
              padding: "16px",
              borderBottom: "1px solid #f1f5f9",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            <Typography>{product.name}</Typography>
            <Typography style={{ color: "#64748b" }}>{product.price}</Typography>
            <Box>
              <Chip
                label={product.status}
                color={
                  product.status === "Published"
                    ? "success"
                    : product.status === "Draft"
                    ? "warning"
                    : "error"
                }
                sx={{ fontWeight: 600 }}
              />
            </Box>
            <Typography style={{ color: "#64748b" }}>
              {product.totalSales}
            </Typography>
            <Typography style={{ color: "#64748b" }}>
              {product.totalRevenue}
            </Typography>
          </motion.div>
        ))}

        {/* LOAD MORE (optional) */}
        {sortedProducts.length > 0 && (
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: 2,
                borderColor: "#00C875",
                color: "#00C875",
                "&:hover": {
                  borderColor: "#00B761",
                  bgcolor: "rgba(0,200,117,0.04)",
                },
              }}
            >
              Load More
            </Button>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default Products;
