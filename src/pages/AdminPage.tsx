import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  InputBase,
  Badge,
  Menu,
  MenuItem,
  Divider,
  Chip,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Settings,
  ChevronLeft,
  Search,
  Person,
  HelpOutline,
  Notifications,
  ArrowForwardIos,
  ArrowBackIosNew,
  Dashboard as DashboardIcon,
  Build as CustomIcon,
  Security as SecurityIcon,
  AccountBalanceWallet as WalletIcon,
  Payment as PaymentIcon,
  LockOpen as PermissionIcon,
  People as UserIcon,
  Home as GeneralIcon,
} from "@mui/icons-material";

interface CategoryData {
  [key: string]: any;
}

/** Admin categories + icons */
const adminCategories = [
  { key: "general", label: "General", icon: <GeneralIcon /> },
  { key: "customization", label: "Customization", icon: <CustomIcon /> },
  { key: "user", label: "User", icon: <UserIcon /> },
  { key: "security", label: "Security", icon: <SecurityIcon /> },
  { key: "wallet", label: "Wallet", icon: <WalletIcon /> },
  { key: "billing", label: "Billing", icon: <PaymentIcon /> },
  { key: "permission", label: "Permission", icon: <PermissionIcon /> },
];

const AdminPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [sidebarHover, setSidebarHover] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // Which admin category is currently active
  const [activeCategory, setActiveCategory] = React.useState<string>("general");

  const sidebarWidth = sidebarOpen || sidebarHover ? 240 : 72;

  // For user-menu (top-right avatar)
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Dummy data or placeholders for each category
  const categoryData: CategoryData = {
    general: {
      description:
        "Manage global site settings, environment variables, or branding details here.",
      onSave: () => console.log("General settings saved!"),
    },
    customization: {
      description: "Change theme colors, layout options, or custom CSS.",
      onSave: () => console.log("Customization settings saved!"),
    },
    user: {
      description: "Manage user roles, invite new admins, or view user logs.",
      tableData: [
        { id: 1, name: "John Doe", role: "Admin", status: "Active" },
        { id: 2, name: "Jane Smith", role: "Editor", status: "Pending" },
      ],
      onInvite: () => console.log("Invite new user triggered"),
    },
    security: {
      description:
        "Enable 2FA, IP restrictions, password policies, or view security logs.",
      onSave: () => console.log("Security changes saved!"),
    },
    wallet: {
      description: "Handle in-app credits, deposits, or refunds.",
      onSave: () => console.log("Wallet config saved!"),
    },
    billing: {
      description: "Manage billing cycles, subscription tiers, or payment gateways.",
      onSave: () => console.log("Billing updated!"),
    },
    permission: {
      description: "Define or update permission sets for different user groups.",
      onSave: () => console.log("Permission sets updated!"),
    },
  };

  /** Renders main content depending on active category */
  const renderContent = () => {
    const data = categoryData[activeCategory];
    if (!data) {
      return (
        <Paper
          sx={{
            p: 3,
            borderRadius: 2,
            border: "1px solid #f1f5f9",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Unknown Category
          </Typography>
          <Typography variant="body2">No data available.</Typography>
        </Paper>
      );
    }

    // Example: special table for "User" category
    if (activeCategory === "user" && data.tableData) {
      return (
        <Paper
          sx={{
            p: 3,
            borderRadius: 2,
            border: "1px solid #f1f5f9",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            mb: 3,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
            {`Manage ${data.tableData.length} Users`}
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Role</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.tableData.map((row: any) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box sx={{ mt: 2, textAlign: "right" }}>
            <Button
              variant="contained"
              onClick={data.onInvite}
              sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600 }}
            >
              Invite New User
            </Button>
          </Box>
        </Paper>
      );
    }

    // Otherwise, a generic section with text & save button
    return (
      <Paper
        sx={{
          p: 3,
          borderRadius: 2,
          border: "1px solid #f1f5f9",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
          {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Settings
        </Typography>
        <Typography variant="body2" sx={{ color: "#475569", mb: 2 }}>
          {data.description}
        </Typography>
        <Box sx={{ textAlign: "right" }}>
          <Button
            variant="contained"
            onClick={data.onSave}
            sx={{ borderRadius: 2, textTransform: "none", fontWeight: 600 }}
          >
            Save Changes
          </Button>
        </Box>
      </Paper>
    );
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f8fafc" }}>
      {/* LEFT SIDEBAR (Collapsible, same style as Dashboard) */}
      <Box
        component={motion.div}
        animate={{ width: sidebarWidth }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onMouseEnter={() => setSidebarHover(true)}
        onMouseLeave={() => setSidebarHover(false)}
        sx={{
          background: "linear-gradient(195deg, #1a1d28 0%, #232735 100%)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderTopRightRadius: 16,
          borderBottomRightRadius: 16,
          boxShadow: 3,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Sidebar Header */}
        <Box
          sx={{
            p: 3,
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Show text only when expanded */}
          {sidebarWidth > 72 ? (
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontWeight: 800,
                letterSpacing: 1.2,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Mubera Admin
            </Typography>
          ) : (
            <Box sx={{ width: 40, height: 40 }} />
          )}

          {/* Collapse button */}
          <IconButton
            onClick={() => setSidebarOpen((prev) => !prev)}
            sx={{
              position: "absolute",
              right: 8,
              top: 12,
              color: "#fff",
              bgcolor: "rgba(255,255,255,0.1)",
              transition: "transform 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.2)",
                transform: "rotate(15deg)",
              },
            }}
          >
            {sidebarOpen ? <ChevronLeft /> : <ArrowForwardIos />}
          </IconButton>
        </Box>

        {/* Admin Category Items */}
        <List sx={{ flex: 1, p: 1 }}>
          {adminCategories.map((cat) => (
            <ListItem key={cat.key} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => setActiveCategory(cat.key)}
                sx={{
                  borderRadius: "8px",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                    transform: "translateX(4px)",
                  },
                  transition: "all 0.2s cubic-bezier(.4,0,.2,1)",
                  ...(activeCategory === cat.key && {
                    bgcolor: "rgba(255,255,255,0.1)",
                  }),
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    minWidth: 40,
                    justifyContent: "center",
                  }}
                >
                  {cat.icon}
                </ListItemIcon>
                {sidebarWidth > 72 && (
                  <ListItemText
                    primary={cat.label}
                    primaryTypographyProps={{
                      variant: "body2",
                      fontWeight: 500,
                      color: "#fff",
                      letterSpacing: 0.2,
                    }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Bottom "Back" button instead of settings icon */}
        <Box sx={{ p: 2 }}>
          <ListItemButton
            component={Link}
            to="/dashboard"
            sx={{
              borderRadius: "8px",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)",
                transform: "translateX(4px)",
              },
              transition: "all 0.2s ease",
            }}
          >
            <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
              <ArrowBackIosNew />
            </ListItemIcon>
            {sidebarWidth > 72 && (
              <ListItemText
                primary="Back to Dashboard"
                primaryTypographyProps={{
                  variant: "body2",
                  fontWeight: 500,
                  color: "#fff",
                }}
              />
            )}
          </ListItemButton>
        </Box>
      </Box>

      {/* MAIN CONTENT */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Top Bar (similar to Dashboard) */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            bgcolor: "#fff",
            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
            borderBottom: "1px solid #f1f5f9",
            backdropFilter: "blur(8px)",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          {/* Search Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#f8fafc",
                borderRadius: "12px",
                px: 2,
                py: 0.8,
                width: 320,
                transition: "all 0.2s",
                "&:focus-within": {
                  boxShadow: "0 0 0 2px #e2e8f0",
                },
              }}
            >
              <Search sx={{ color: "#94a3b8", mr: 1, fontSize: 20 }} />
              <InputBase
                placeholder="Search admin settings..."
                sx={{ flex: 1, fontSize: 14, fontWeight: 500 }}
              />
            </Box>
          </Box>

          {/* Right Controls */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              sx={{
                color: "#64748b",
                "&:hover": {
                  bgcolor: "#f1f5f9",
                  transform: "rotate(8deg)",
                },
                transition: "all 0.2s ease",
              }}
            >
              <Badge badgeContent={2} color="error">
                <Notifications sx={{ fontSize: 24 }} />
              </Badge>
            </IconButton>

            {/* Premium Profile Section */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar
                sx={{
                  bgcolor: "#3b82f6",
                  color: "#fff",
                  width: 36,
                  height: 36,
                  fontSize: 16,
                  fontWeight: 600,
                  boxShadow: "0 2px 4px rgba(59,130,246,0.3)",
                }}
              >
                AW
              </Avatar>
              <Box sx={{ lineHeight: 1 }}>
                <Typography variant="body2" fontWeight={600}>
                  Admin Wizard
                </Typography>
                <Typography variant="caption" color="#64748b">
                  Super Admin
                </Typography>
              </Box>
            </Box>

            <IconButton
              sx={{
                color: "#64748b",
                "&:hover": {
                  bgcolor: "#f1f5f9",
                  transform: "rotate(180deg)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <ArrowForwardIos sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>
        </Box>

        {/* MAIN ADMIN CONTENT AREA */}
        <Box sx={{ flex: 1, p: 4, overflow: "auto" }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
            Admin Configuration
          </Typography>

          {/* Render dynamic content based on activeCategory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {renderContent()}
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminPage;
