// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   IconButton,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Avatar,
//   Button,
//   InputBase,
//   Badge,
//   Menu,
//   MenuItem,
//   Divider,
//   Chip,
//   Collapse,
//   LinearProgress,
//   Switch,
//   FormControlLabel
// } from "@mui/material";
// import { motion } from "framer-motion";
// import {
//   Dashboard as DashboardIcon,
//   Assessment,
//   CreditScore,
//   People,
//   Inventory,
//   Settings,
//   Notifications,
//   Search,
//   Person,
//   HelpOutline,
//   PersonAdd,
//   Add,
//   ArrowForwardIos,
//   ExpandLess,
//   ExpandMore,
//   AdminPanelSettings,
//   MonetizationOn
// } from "@mui/icons-material";
// import AIChatDrawer from "../components/AIChatDrawer";

// const Dashboard: React.FC = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   // We no longer expand on hover, but we do want a small hover effect
//   // for the header area to show the close button.
//   const [headerHover, setHeaderHover] = useState(false);

//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const [leadsOpen, setLeadsOpen] = useState(false);

//   // If sidebarOpen is true, we show 240px; otherwise 72px
//   const sidebarWidth = sidebarOpen ? 240 : 72;

//   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLeadsClick = () => {
//     setLeadsOpen(!leadsOpen);
//   };

//   return (
//     <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f8fafc" }}>
//       {/* SIDEBAR */}
//       <Box
//         component={motion.div}
//         animate={{ width: sidebarWidth }}
//         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         sx={{
//           background: "linear-gradient(195deg, #1a1d28 0%, #232735 100%)",
//           height: "100%",
//           display: "flex",
//           flexDirection: "column",
//           borderTopRightRadius: 16,
//           borderBottomRightRadius: 16,
//           boxShadow: 3,
//           position: "relative",
//           overflow: "hidden"
//         }}
//       >
//         {/* SIDEBAR HEADER */}
//         <Box
//           sx={{
//             p: 3,
//             display: "flex",
//             alignItems: "center",
//             position: "relative"
//           }}
//           onMouseEnter={() => setHeaderHover(true)}
//           onMouseLeave={() => setHeaderHover(false)}
//         >
//           {sidebarWidth > 72 ? (
//             <Typography
//               variant="h6"
//               sx={{
//                 color: "#fff",
//                 fontWeight: 800,
//                 letterSpacing: 1.2,
//                 fontFamily: "'Inter', sans-serif"
//               }}
//             >
//               Mubera AI
//             </Typography>
//           ) : (
//             <Box sx={{ width: 40, height: 40 }} />
//           )}

//           {/* Close/Open Button - only visible on header hover */}
//           <IconButton
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             sx={{
//               position: "absolute",
//               right: 8,
//               top: 12,
//               color: "#fff",
//               bgcolor: "rgba(255,255,255,0.1)",
//               transition: "opacity 0.3s ease",
//               opacity: headerHover ? 1 : 0,
//               pointerEvents: headerHover ? "auto" : "none",
//               "&:hover": {
//                 bgcolor: "rgba(255,255,255,0.2)",
//                 transform: "rotate(15deg)"
//               }
//             }}
//           >
//             {/* Show an arrow icon (choose whichever you'd like) */}
//             <ArrowForwardIos />
//           </IconButton>
//         </Box>

//         {/* MAIN NAVIGATION */}
//         <List sx={{ flex: 1, p: 1 }}>
//           {[
//             { icon: <DashboardIcon />, text: "Dashboard" },
//             { icon: <Assessment />, text: "BRE" },
//             { icon: <CreditScore />, text: "Credit Score" },
//             {
//               icon: <People />,
//               text: "Leads",
//               subItems: [
//                 { text: "Add Leads", icon: <Add />, link: "/addleads" }
//               ]
//             },
//             { icon: <Inventory />, text: "Products" },
//             { icon: <Assessment />, text: "Earnings" },
//             { icon: <Assessment />, text: "Data Management" },
//             { icon: <Assessment />, text: "MIS Report" }
//           ].map((item) => (
//             <div key={item.text}>
//               <ListItem disablePadding sx={{ mb: 0.5 }}>
//                 <ListItemButton
//                   onClick={item.subItems ? handleLeadsClick : () => {}}
//                   sx={{
//                     borderRadius: "8px",
//                     "&:hover": {
//                       bgcolor: "rgba(255,255,255,0.1)",
//                       transform: "translateX(4px)"
//                     },
//                     transition: "all 0.2s cubic-bezier(.4,0,.2,1)"
//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       color: "#fff",
//                       minWidth: 40,
//                       justifyContent: "center"
//                     }}
//                   >
//                     {item.icon}
//                   </ListItemIcon>
//                   {sidebarWidth > 72 && (
//                     <>
//                       <ListItemText
//                         primary={item.text}
//                         primaryTypographyProps={{
//                           variant: "body2",
//                           fontWeight: 500,
//                           color: "#fff",
//                           letterSpacing: 0.2
//                         }}
//                       />
//                       {item.subItems &&
//                         (leadsOpen ? (
//                           <ExpandLess sx={{ color: "#fff", ml: 1 }} />
//                         ) : (
//                           <ExpandMore sx={{ color: "#fff", ml: 1 }} />
//                         ))}
//                     </>
//                   )}
//                 </ListItemButton>
//               </ListItem>

//               {/* Sub-items for "Leads" */}
//               {item.subItems && (
//                 <Collapse in={leadsOpen} timeout="auto" unmountOnExit>
//                   <List component="div" disablePadding>
//                     {item.subItems.map((subItem) => (
//                       <ListItem
//                         key={subItem.text}
//                         disablePadding
//                         sx={{
//                           mb: 0.5,
//                           pl: sidebarWidth > 72 ? 4 : 2
//                         }}
//                       >
//                         <ListItemButton
//                           component={Link}
//                           to={subItem.link}
//                           sx={{
//                             borderRadius: "8px",
//                             "&:hover": {
//                               bgcolor: "rgba(255,255,255,0.05)",
//                               transform: "translateX(4px)"
//                             },
//                             transition: "all 0.2s ease"
//                           }}
//                         >
//                           <ListItemIcon
//                             sx={{
//                               color: "#fff",
//                               minWidth: 40,
//                               justifyContent: "center"
//                             }}
//                           >
//                             {subItem.icon}
//                           </ListItemIcon>
//                           {sidebarWidth > 72 && (
//                             <ListItemText
//                               primary={subItem.text}
//                               primaryTypographyProps={{
//                                 variant: "body2",
//                                 fontWeight: 500,
//                                 color: "#fff",
//                                 letterSpacing: 0.2
//                               }}
//                             />
//                           )}
//                         </ListItemButton>
//                       </ListItem>
//                     ))}
//                   </List>
//                 </Collapse>
//               )}
//             </div>
//           ))}
//         </List>

//         {/* SETTINGS AT THE BOTTOM */}
//         <Box sx={{ p: 2 }}>
//           <ListItemButton sx={{ borderRadius: "8px" }}>
//             <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
//               <Settings />
//             </ListItemIcon>
//             {sidebarWidth > 72 && (
//               <ListItemText
//                 primary="Settings"
//                 primaryTypographyProps={{
//                   variant: "body2",
//                   fontWeight: 500,
//                   color: "#fff"
//                 }}
//               />
//             )}
//           </ListItemButton>
//         </Box>
//       </Box>

//       {/* MAIN CONTENT AREA */}
//       <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
//         {/* TOP BAR */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             p: 2,
//             bgcolor: "#fff",
//             boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
//             borderBottom: "1px solid #f1f5f9",
//             backdropFilter: "blur(8px)",
//             position: "sticky",
//             top: 0,
//             zIndex: 10
//           }}
//         >
//           {/* SEARCH SECTION */}
//           <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 bgcolor: "#f8fafc",
//                 borderRadius: "12px",
//                 px: 2,
//                 py: 0.8,
//                 width: 400,
//                 transition: "all 0.2s",
//                 "&:focus-within": {
//                   boxShadow: "0 0 0 2px #e2e8f0"
//                 }
//               }}
//             >
//               <Search sx={{ color: "#94a3b8", mr: 1, fontSize: 20 }} />
//               <InputBase
//                 placeholder="Search tasks, projects..."
//                 sx={{ flex: 1, fontSize: 14, fontWeight: 500 }}
//               />
//             </Box>
//           </Box>

//           {/* RIGHT CONTROLS */}
//           <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//             {/* Example: "Invite" button */}
//             <Button
//               component={Link}
//               to="/invite"
//               variant="outlined"
//               startIcon={<PersonAdd sx={{ fontSize: 20 }} />}
//               sx={{
//                 borderRadius: "8px",
//                 textTransform: "none",
//                 borderColor: "#1a1d28",
//                 color: "#1a1d28",
//                 px: 2.5,
//                 "&:hover": {
//                   borderColor: "#2d3343",
//                   bgcolor: "#f8fafc"
//                 }
//               }}
//             >
//               Invite
//             </Button>

//             {/* NOTIFICATIONS */}
//             <IconButton
//               sx={{
//                 color: "#64748b",
//                 "&:hover": {
//                   bgcolor: "#f1f5f9",
//                   transform: "rotate(8deg)"
//                 },
//                 transition: "all 0.2s ease"
//               }}
//             >
//               <Badge badgeContent={3} color="error">
//                 <Notifications sx={{ fontSize: 24 }} />
//               </Badge>
//             </IconButton>

//             {/* PROFILE */}
//             <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//               <Avatar
//                 sx={{
//                   bgcolor: "#3b82f6",
//                   color: "#fff",
//                   width: 36,
//                   height: 36,
//                   fontSize: 16,
//                   fontWeight: 600,
//                   boxShadow: "0 2px 4px rgba(59,130,246,0.3)"
//                 }}
//               >
//                 OW
//               </Avatar>
//               <Box sx={{ lineHeight: 1 }}>
//                 <Typography variant="body2" fontWeight={600}>
//                   Olivia W.
//                 </Typography>
//                 <Typography variant="caption" color="#64748b">
//                   Admin
//                 </Typography>
//               </Box>
//             </Box>

//             {/* PROFILE MENU ICON */}
//             <IconButton
//               onClick={handleMenuOpen}
//               sx={{
//                 color: "#64748b",
//                 "&:hover": {
//                   bgcolor: "#f1f5f9",
//                   transform: "rotate(180deg)"
//                 },
//                 transition: "all 0.3s ease"
//               }}
//             >
//               <ArrowForwardIos sx={{ fontSize: 18 }} />
//             </IconButton>

//             {/* PROFILE MENU */}
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleMenuClose}
//               transformOrigin={{ horizontal: "right", vertical: "top" }}
//               anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
//               PaperProps={{
//                 sx: {
//                   mt: 1,
//                   width: 360,
//                   borderRadius: "12px",
//                   boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
//                   border: "1px solid #f1f5f9",
//                   p: 2
//                 }
//               }}
//             >
//               {/* Account */}
//               <Typography variant="subtitle2" sx={{ color: "#475569", mb: 1, fontWeight: 700 }}>
//                 Account
//               </Typography>
//               <MenuItem
//                 dense
//                 sx={{ py: 1, borderRadius: 1 }}
//                 component={Link}
//                 to="/profile"
//                 onClick={handleMenuClose}
//               >
//                 <ListItemIcon>
//                   <Person fontSize="small" />
//                 </ListItemIcon>
//                 <ListItemText primary="My Profile" />
//                 <Chip
//                   label="Pro"
//                   size="small"
//                   sx={{
//                     bgcolor: "#f1f5f9",
//                     color: "#475569",
//                     fontSize: "0.65rem",
//                     fontWeight: 600
//                   }}
//                 />
//               </MenuItem>
//               <MenuItem dense sx={{ py: 1, borderRadius: 1 }}>
//                 <ListItemIcon>
//                   <Settings fontSize="small" />
//                 </ListItemIcon>
//                 <ListItemText primary="Account Settings" />
//               </MenuItem>
//               <Divider sx={{ my: 1 }} />

//               {/* FREE PLAN */}
//               <Typography variant="subtitle2" sx={{ color: "#475569", mb: 1, fontWeight: 700 }}>
//                 Your Free Plan
//               </Typography>
//               <Box sx={{ px: 2, mb: 2 }}>
//                 <Typography variant="caption" sx={{ color: "#64748b" }}>
//                   Items 115/800
//                 </Typography>
//                 <LinearProgress
//                   variant="determinate"
//                   value={Math.round((115 / 800) * 100)}
//                   sx={{
//                     height: 6,
//                     borderRadius: 1,
//                     backgroundColor: "#e2e8f0",
//                     "& .MuiLinearProgress-bar": {
//                       bgcolor: "#3b82f6"
//                     }
//                   }}
//                 />
//                 <Button
//                   variant="text"
//                   sx={{
//                     mt: 1,
//                     textTransform: "none",
//                     color: "#3b82f6",
//                     fontSize: "0.75rem",
//                     fontWeight: 600,
//                     "&:hover": {
//                       bgcolor: "#f1f5f9",
//                       transform: "translateX(2px)"
//                     }
//                   }}
//                 >
//                   Upgrade Now
//                 </Button>
//               </Box>
//               <Divider sx={{ my: 1 }} />

//               {/* WORKING STATUS */}
//               <Typography variant="subtitle2" sx={{ color: "#475569", mb: 1, fontWeight: 700 }}>
//                 Working Status
//               </Typography>
//               <Box sx={{ display: "flex", gap: 2, px: 2, mb: 2 }}>
//                 <FormControlLabel
//                   label="Do Not Disturb"
//                   control={<Switch color="primary" />}
//                 />
//                 <FormControlLabel
//                   label="Online"
//                   control={<Switch color="success" />}
//                 />
//               </Box>
//               <Divider sx={{ my: 1 }} />

//               {/* ADMIN */}
//               <Typography variant="subtitle2" sx={{ color: "#475569", mb: 1, fontWeight: 700 }}>
//                 Administration
//               </Typography>
//               <MenuItem
//                 dense
//                 sx={{ py: 1, borderRadius: 1 }}
//                 component={Link}
//                 to="/admin"
//                 onClick={handleMenuClose}
//               >
//                 <ListItemIcon>
//                   <AdminPanelSettings fontSize="small" />
//                 </ListItemIcon>
//                 <ListItemText primary="Administrator" />
//               </MenuItem>
//               <MenuItem
//                 dense
//                 sx={{ py: 1, borderRadius: 1 }}
//                 component={Link}
//                 to="/commission"
//                 onClick={handleMenuClose}
//               >
//                 <ListItemIcon>
//                   <MonetizationOn fontSize="small" />
//                 </ListItemIcon>
//                 <ListItemText primary="Commission" />
//               </MenuItem>
//               <Divider sx={{ my: 1 }} />

//               {/* SUPPORT */}
//               <Typography variant="subtitle2" sx={{ color: "#475569", mb: 1, fontWeight: 700 }}>
//                 Support
//               </Typography>
//               <MenuItem dense sx={{ py: 1, borderRadius: 1 }}>
//                 <ListItemIcon>
//                   <HelpOutline fontSize="small" />
//                 </ListItemIcon>
//                 <ListItemText primary="Help Center" />
//               </MenuItem>
//               <MenuItem
//                 dense
//                 sx={{ py: 1, borderRadius: 1, color: "#ef4444" }}
//               >
//                 <ListItemIcon>
//                   <Settings fontSize="small" />
//                 </ListItemIcon>
//                 <ListItemText primary="Log Out" />
//               </MenuItem>
//             </Menu>
//           </Box>
//         </Box>

//         {/* MAIN CONTENT */}
//         <Box sx={{ flex: 1, p: 4, overflow: "auto" }}>
//           {/* Example placeholder for metrics or anything else */}
//           <Box
//             sx={{
//               display: "grid",
//               gap: 3,
//               gridTemplateColumns: {
//                 xs: "1fr",
//                 sm: "repeat(2, 1fr)",
//                 lg: "repeat(4, 1fr)"
//               },
//               mb: 4
//             }}
//           >
//             {[
//               { title: "Active Accounts", value: "5", trend: "+2 new", color: "#3b82f6" },
//               { title: "Conversion Rate", value: "68%", trend: "+4.2%", color: "#10b981" },
//               { title: "Pending Tasks", value: "12", trend: "3 urgent", color: "#f59e0b" },
//               { title: "Monthly Revenue", value: "$52.4k", trend: "↑18%", color: "#8b5cf6" }
//             ].map((metric) => (
//               <Box
//                 key={metric.title}
//                 component={motion.div}
//                 whileHover={{ scale: 1.02 }}
//                 sx={{
//                   bgcolor: "#fff",
//                   borderRadius: "16px",
//                   p: 3,
//                   boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
//                   border: "1px solid #f1f5f9",
//                   transition: "all 0.2s"
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     mb: 1
//                   }}
//                 >
//                   <Typography variant="subtitle2" sx={{ color: "#64748b" }}>
//                     {metric.title}
//                   </Typography>
//                   <Box
//                     sx={{
//                       width: 32,
//                       height: 32,
//                       bgcolor: `${metric.color}10`,
//                       borderRadius: "8px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center"
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         width: 16,
//                         height: 16,
//                         bgcolor: metric.color,
//                         borderRadius: "4px"
//                       }}
//                     />
//                   </Box>
//                 </Box>
//                 <Typography
//                   variant="h4"
//                   sx={{
//                     fontWeight: 800,
//                     color: "#1e293b",
//                     letterSpacing: -0.5,
//                     background: `linear-gradient(45deg, ${metric.color} 0%, ${metric.color}99 100%)`,
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent"
//                   }}
//                 >
//                   {metric.value}
//                 </Typography>
//                 <Chip
//                   label={metric.trend}
//                   size="small"
//                   sx={{
//                     mt: 1,
//                     bgcolor: `${metric.color}10`,
//                     color: metric.color,
//                     fontSize: "0.75rem",
//                     height: 24,
//                     fontWeight: 600
//                   }}
//                 />
//               </Box>
//             ))}
//           </Box>
//         </Box>
//       </Box>

//       {/* AI Chat Drawer */}
//       <AIChatDrawer />
//     </Box>
//   );
// };

// export default Dashboard;

// src/pages/Dashboard.tsx
// src/pages/Dashboard.tsx
import React, { useState } from "react";
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
  Button,
  InputBase,
  Badge,
  Menu,
  MenuItem,
  Divider,
  Chip,
  TextField,
  Paper
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Dashboard as DashboardIcon,
  Assessment,
  CreditScore,
  People,
  MonetizationOn,
  Inventory,
  Settings,
  ChevronLeft,
  Notifications,
  Search,
  Person,
  Add,
  ArrowForwardIos,
  Phone,
  Email,
  WhatsApp,
  TrendingUp,
  Timeline
} from "@mui/icons-material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import AIChatDrawer from "../components/AIChatDrawer";

// ------------------------------------------------------------------
// CHART SETUP
// ------------------------------------------------------------------
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type MyLineChartData = ChartData<"line", number[], string>;
type MyLineChartOptions = ChartOptions<"line">;

const RevenueTrendChart: React.FC = () => {
  const data: MyLineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Revenue",
        data: [100, 150, 130, 170, 200, 180, 220],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.15)",
        fill: true,
        tension: 0.3
      }
    ]
  };
  const options: MyLineChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#1a1d28",
        bodyColor: "#1a1d28",
        borderColor: "#e2e8f0",
        borderWidth: 1,
        displayColors: false,
        padding: 8
      }
    },
    scales: { x: { display: false }, y: { display: false } },
    maintainAspectRatio: false
  };
  return <Line data={data} options={options} height={150} />;
};

const GrowthRateChart: React.FC = () => {
  const data: MyLineChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Growth",
        data: [5, 7, 6, 8, 7, 9, 8],
        borderColor: "#8b5cf6",
        backgroundColor: "rgba(139,92,246,0.15)",
        fill: true,
        tension: 0.3
      }
    ]
  };
  const options: MyLineChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#1a1d28",
        bodyColor: "#1a1d28",
        borderColor: "#e2e8f0",
        borderWidth: 1,
        displayColors: false,
        padding: 8
      }
    },
    scales: { x: { display: false }, y: { display: false } },
    maintainAspectRatio: false
  };
  return <Line data={data} options={options} height={150} />;
};

// ------------------------------------------------------------------
// SAMPLE LEADS DATA (50 items)
// ------------------------------------------------------------------
interface LeadRow {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: "New" | "Follow-Ups" | "WIP" | "Closed";
}
const statusesArr: Array<"New" | "Follow-Ups" | "WIP" | "Closed"> = [
  "New",
  "Follow-Ups",
  "WIP",
  "Closed"
];
const sampleLeads: LeadRow[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Lead ${i + 1}`,
  email: `lead${i + 1}@example.com`,
  phone: `555-010${(i + 1).toString().padStart(2, "0")}`,
  status: statusesArr[i % statusesArr.length]
}));
type LeadsTab = "New" | "Follow-Ups" | "WIP" | "Closed";

// ------------------------------------------------------------------
// REUSABLE COMPONENTS
// ------------------------------------------------------------------
interface SummaryCardProps {
  title: string;
  stat: string;
  subtitle: string;
  icon: React.ReactNode;
  gradient: string;
  link?: string;
}
const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  stat,
  subtitle,
  icon,
  gradient,
  link
}) => {
  return (
    <Paper
      component={motion.div}
      whileHover={{ scale: 1.02 }}
      sx={{
        p: 3,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.07)",
        position: "relative",
        cursor: link ? "pointer" : "default",
        background: "#fff"
      }}
      onClick={() => link && (window.location.href = link)}
    >
      <Box
        sx={{
          position: "absolute",
          width: 140,
          height: 140,
          borderRadius: "50%",
          top: -50,
          right: -50,
          background: gradient,
          opacity: 0.15,
          transform: "rotate(30deg)"
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: 2,
            background: gradient,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
          }}
        >
          {icon}
        </Box>
        <Typography variant="subtitle1" fontWeight={700}>
          {title}
        </Typography>
      </Box>
      <Typography variant="h4" fontWeight={800}>
        {stat}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
        {subtitle}
      </Typography>
      <Box
        sx={{
          height: 40,
          width: "100%",
          backgroundColor: "#f9fafc",
          borderRadius: 1,
          border: "1px dashed #e2e8f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "text.secondary",
          fontSize: 12
        }}
      >
        (Sparkline)
      </Box>
    </Paper>
  );
};

interface WideChartCardProps {
  title: string;
  sub: string;
  icon?: React.ReactNode;
  gradient: string;
  chart?: React.ReactNode;
}
const WideChartCard: React.FC<WideChartCardProps> = ({
  title,
  sub,
  icon,
  gradient,
  chart
}) => {
  return (
    <Paper
      component={motion.div}
      whileHover={{ scale: 1.02 }}
      sx={{
        p: 3,
        borderRadius: 2,
        boxShadow: "0 4px 12px rgba(0,0,0,0.07)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        overflow: "hidden",
        position: "relative",
        background: "#fff"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: "50%",
          top: -60,
          right: -60,
          background: gradient,
          opacity: 0.15,
          transform: "rotate(-15deg)"
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {icon && (
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 2,
              background: gradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            }}
          >
            {icon}
          </Box>
        )}
        <Box>
          <Typography variant="subtitle1" fontWeight={700}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {sub}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: 150,
          bgcolor: "#f9fafc",
          borderRadius: 2,
          border: "1px dashed #e2e8f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "text.secondary"
        }}
      >
        {chart || "(Placeholder Chart)"}
      </Box>
    </Paper>
  );
};

// ------------------------------------------------------------------
// MAIN DASHBOARD COMPONENT
// ------------------------------------------------------------------
const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeView, setActiveView] = useState<"Dashboard" | "Leads" | "BRE" | "Other">("Dashboard");
  const [selectedLeadsTab, setSelectedLeadsTab] = useState<LeadsTab>("New");

  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const getFilteredLeads = (): LeadRow[] =>
    sampleLeads.filter((lead) => lead.status === selectedLeadsTab);

  // Render Leads View (with status cards, filter bar, and a table of 50 dummy leads)
  const renderLeadsView = () => {
    const statusCards = [
      { label: "New", value: "New", activeBg: "#e0f7fa", activeText: "#00796b" },
      { label: "Follow-ups", value: "Follow-Ups", activeBg: "#fff3e0", activeText: "#f57c00" },
      { label: "WIP", value: "WIP", activeBg: "#e8eaf6", activeText: "#303f9f" },
      { label: "Closed", value: "Closed", activeBg: "#e8f5e9", activeText: "#2e7d32" },
    ] as const;
    const countLeads = (status: string) =>
      sampleLeads.filter((lead) => lead.status === status).length;
    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
          Leads
        </Typography>
        {/* Status Cards Row */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: 2,
            mb: 2
          }}
        >
          {statusCards.map((card) => {
            const count = countLeads(card.value);
            const isActive = selectedLeadsTab === card.value;
            return (
              <Paper
                key={card.value}
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setSelectedLeadsTab(card.value as LeadsTab)}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: isActive ? "0 4px 12px rgba(0,0,0,0.15)" : "0 1px 3px rgba(0,0,0,0.08)",
                  border: isActive ? `2px solid ${card.activeText}` : "1px solid #e2e8f0",
                  backgroundColor: isActive ? card.activeBg : "#fff"
                }}
              >
                <Typography variant="subtitle2" sx={{ mb: 1, color: isActive ? card.activeText : "text.secondary" }}>
                  {card.label}
                </Typography>
                <Typography variant="h5" fontWeight={700} sx={{ color: isActive ? card.activeText : "text.primary" }}>
                  {count}
                </Typography>
              </Paper>
            );
          })}
        </Box>
        {/* Filter Bar Row */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            mb: 2
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search leads..."
            sx={{
              width: 300,
              borderRadius: 2,
              "& .MuiOutlinedInput-root": { borderRadius: 2 }
            }}
          />
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <Button variant="outlined" sx={{ textTransform: "none", borderRadius: 2 }}>
              Filter
            </Button>
            <Button variant="outlined" sx={{ textTransform: "none", borderRadius: 2 }}>
              Export
            </Button>
            <Button
              variant="contained"
              sx={{ textTransform: "none", borderRadius: 2, bgcolor: "#00C875", "&:hover": { bgcolor: "#00B761" } }}
              component={Link}
              to="/addleads"
            >
              Create leads
            </Button>
          </Box>
        </Box>
        {/* Leads Table */}
        <Paper
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            border: "1px solid #e2e8f0",
            backgroundColor: "#fff"
          }}
        >
          {/* Table Header */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "3fr 3fr 2fr 2fr 2fr",
              gap: 1,
              p: 2,
              borderBottom: "1px solid #e2e8f0",
              backgroundColor: "#f9fafb",
              fontWeight: 600,
              fontSize: 14
            }}
          >
            <Typography variant="subtitle2">Name</Typography>
            <Typography variant="subtitle2">Email</Typography>
            <Typography variant="subtitle2">Phone</Typography>
            <Typography variant="subtitle2">Quick Actions</Typography>
            <Typography variant="subtitle2">Status</Typography>
          </Box>
          {/* Table Body */}
          {getFilteredLeads().map((lead) => (
            <Box
              key={lead.id}
              component={motion.div}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              sx={{
                display: "grid",
                gridTemplateColumns: "3fr 3fr 2fr 2fr 2fr",
                gap: 1,
                p: 2,
                borderBottom: "1px solid #f1f5f9",
                fontSize: 14,
                cursor: "pointer"
              }}
            >
              <Typography>{lead.name}</Typography>
              <Typography sx={{ color: "text.secondary" }}>{lead.email}</Typography>
              <Typography sx={{ color: "text.secondary" }}>{lead.phone}</Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton size="small" sx={{ "&:hover": { color: "#3b82f6" } }}>
                  <Phone fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ "&:hover": { color: "#3b82f6" } }}>
                  <Email fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ "&:hover": { color: "#3b82f6" } }}>
                  <WhatsApp fontSize="small" />
                </IconButton>
              </Box>
              <Chip
                label={lead.status}
                color={
                  lead.status === "New"
                    ? "info"
                    : lead.status === "Follow-Ups"
                    ? "warning"
                    : lead.status === "WIP"
                    ? "primary"
                    : "success"
                }
                sx={{ fontWeight: 600 }}
              />
            </Box>
          ))}
        </Paper>
      </Box>
    );
  };

  // Advanced Dashboard Home (without Recent Leads section)
  const renderDashboardHome = () => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4, p: 2 }}>
        {/* Summary Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: 3
          }}
        >
          <SummaryCard
            title="Leads"
            stat="50"
            subtitle="Active leads in the system"
            icon={<People sx={{ color: "#fff" }} />}
            gradient="linear-gradient(135deg, #3b82f6, #8b5cf6)"
            link="/addleads"
          />
          <SummaryCard
            title="Products"
            stat="12"
            subtitle="Active products"
            icon={<Inventory sx={{ color: "#fff" }} />}
            gradient="linear-gradient(135deg, #8b5cf6, #ec4899)"
            link="/products"
          />
          <SummaryCard
            title="Data"
            stat="25 CSVs"
            subtitle="Uploaded data sets"
            icon={<Assessment sx={{ color: "#fff" }} />}
            gradient="linear-gradient(135deg, #10b981, #06b6d4)"
            link="/datamanagement"
          />
          <SummaryCard
            title="Earnings"
            stat="$12,340"
            subtitle="This month"
            icon={<MonetizationOn sx={{ color: "#fff" }} />}
            gradient="linear-gradient(135deg, #f59e0b, #ef4444)"
          />
        </Box>

        {/* Chart Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
            gap: 3
          }}
        >
          <WideChartCard
            title="Revenue Trend"
            sub="Monthly analysis"
            icon={<TrendingUp sx={{ color: "#fff" }} />}
            gradient="linear-gradient(135deg, #3b82f6, #06b6d4)"
            chart={<RevenueTrendChart />}
          />
          <WideChartCard
            title="Growth Rate"
            sub="Weekly changes"
            icon={<Timeline sx={{ color: "#fff" }} />}
            gradient="linear-gradient(135deg, #8b5cf6, #ec4899)"
            chart={<GrowthRateChart />}
          />
        </Box>

        {/* Quick Stats & Latest Activity */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3
          }}
        >
          <Paper
            component={motion.div}
            whileHover={{ scale: 1.01 }}
            sx={{
              p: 3,
              borderRadius: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,0.07)",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              background: "#fff"
            }}
          >
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
              Quick Stats
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Assessment sx={{ fontSize: 18, color: "#3b82f6" }} />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                4 MIS Reports
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Assessment sx={{ fontSize: 18, color: "#f59e0b" }} />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                18 BRE Rules
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Assessment sx={{ fontSize: 18, color: "#10b981" }} />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                30 Data Pulls
              </Typography>
            </Box>
          </Paper>
          <Paper
            component={motion.div}
            whileHover={{ scale: 1.01 }}
            sx={{
              p: 3,
              borderRadius: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,0.07)",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              background: "#fff"
            }}
          >
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
              Latest Activity
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              • John added a new Lead
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              • Data CSV uploaded by Sarah
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              • Product "API Gateway" updated
            </Typography>
          </Paper>
        </Box>
      </Box>
    );
  };

  // Main content rendering based on activeView
  const renderMainContent = () => {
    if (activeView === "Leads") return renderLeadsView();
    if (activeView === "BRE")
      return (
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            BRE Page
          </Typography>
          <Typography variant="body1" color="text.secondary">
            (Placeholder for Business Rules Engine content.)
          </Typography>
        </Box>
      );
    if (activeView === "Other")
      return (
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Another Page
          </Typography>
          <Typography variant="body1" color="text.secondary">
            (Placeholder for other content.)
          </Typography>
        </Box>
      );
    return renderDashboardHome();
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f8fafc" }}>
      {/* SIDEBAR */}
      <Box
        component={motion.div}
        animate={{ width: sidebarOpen ? 240 : 72 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        sx={{
          background: "linear-gradient(195deg, #1a1d28 0%, #232735 100%)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderTopRightRadius: 16,
          borderBottomRightRadius: 16,
          boxShadow: 3,
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* SIDEBAR HEADER */}
        <Box
          sx={{
            p: 3,
            display: "flex",
            alignItems: "center",
            position: "relative"
          }}
        >
          {sidebarOpen ? (
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontWeight: 800,
                letterSpacing: 1.2,
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Mubera AI
            </Typography>
          ) : (
            <Box sx={{ width: 40, height: 40 }} />
          )}
          <IconButton
            onClick={handleSidebarToggle}
            sx={{
              position: "absolute",
              right: 8,
              top: 12,
              color: "#fff",
              bgcolor: "rgba(255,255,255,0.1)",
              transition: "transform 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.2)",
                transform: "rotate(15deg)"
              }
            }}
          >
            {sidebarOpen ? <ChevronLeft /> : <ArrowForwardIos />}
          </IconButton>
        </Box>

        {/* SIDEBAR NAVIGATION */}
        <List sx={{ flex: 1, p: 1 }}>
          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              onClick={() => setActiveView("Dashboard")}
              sx={{
                borderRadius: "8px",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)", transform: "translateX(4px)" },
                transition: "all 0.2s cubic-bezier(.4,0,.2,1)"
              }}
            >
              <ListItemIcon sx={{ color: "#fff", minWidth: 40, justifyContent: "center" }}>
                <DashboardIcon />
              </ListItemIcon>
              {sidebarOpen && (
                <ListItemText
                  primary="Dashboard"
                  primaryTypographyProps={{
                    variant: "body2",
                    fontWeight: 500,
                    color: "#fff",
                    letterSpacing: 0.2
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              onClick={() => setActiveView("BRE")}
              sx={{
                borderRadius: "8px",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)", transform: "translateX(4px)" },
                transition: "all 0.2s cubic-bezier(.4,0,.2,1)"
              }}
            >
              <ListItemIcon sx={{ color: "#fff", minWidth: 40, justifyContent: "center" }}>
                <Assessment />
              </ListItemIcon>
              {sidebarOpen && (
                <ListItemText
                  primary="BRE"
                  primaryTypographyProps={{
                    variant: "body2",
                    fontWeight: 500,
                    color: "#fff",
                    letterSpacing: 0.2
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              onClick={() => setActiveView("Other")}
              sx={{
                borderRadius: "8px",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)", transform: "translateX(4px)" },
                transition: "all 0.2s cubic-bezier(.4,0,.2,1)"
              }}
            >
              <ListItemIcon sx={{ color: "#fff", minWidth: 40, justifyContent: "center" }}>
                <CreditScore />
              </ListItemIcon>
              {sidebarOpen && (
                <ListItemText
                  primary="Credit Score"
                  primaryTypographyProps={{
                    variant: "body2",
                    fontWeight: 500,
                    color: "#fff",
                    letterSpacing: 0.2
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              onClick={() => setActiveView("Leads")}
              sx={{
                borderRadius: "8px",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)", transform: "translateX(4px)" },
                transition: "all 0.2s cubic-bezier(.4,0,.2,1)"
              }}
            >
              <ListItemIcon sx={{ color: "#fff", minWidth: 40, justifyContent: "center" }}>
                <People />
              </ListItemIcon>
              {sidebarOpen && (
                <>
                  <ListItemText
                    primary="Leads"
                    primaryTypographyProps={{
                      variant: "body2",
                      fontWeight: 500,
                      color: "#fff",
                      letterSpacing: 0.2
                    }}
                  />
                  <ExpandMore sx={{ color: "#fff", ml: 1 }} />
                </>
              )}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              component={Link}
              to="/products"
              sx={{
                borderRadius: "8px",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)", transform: "translateX(4px)" },
                transition: "all 0.2s cubic-bezier(.4,0,.2,1)"
              }}
            >
              <ListItemIcon sx={{ color: "#fff", minWidth: 40, justifyContent: "center" }}>
                <Inventory />
              </ListItemIcon>
              {sidebarOpen && (
                <ListItemText
                  primary="Products"
                  primaryTypographyProps={{
                    variant: "body2",
                    fontWeight: 500,
                    color: "#fff",
                    letterSpacing: 0.2
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              onClick={() => setActiveView("Other")}
              sx={{
                borderRadius: "8px",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)", transform: "translateX(4px)" },
                transition: "all 0.2s cubic-bezier(.4,0,.2,1)"
              }}
            >
              <ListItemIcon sx={{ color: "#fff", minWidth: 40, justifyContent: "center" }}>
                <MonetizationOn />
              </ListItemIcon>
              {sidebarOpen && (
                <ListItemText
                  primary="Earnings"
                  primaryTypographyProps={{
                    variant: "body2",
                    fontWeight: 500,
                    color: "#fff",
                    letterSpacing: 0.2
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              component={Link}
              to="/datamanagement"
              sx={{
                borderRadius: "8px",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)", transform: "translateX(4px)" },
                transition: "all 0.2s cubic-bezier(.4,0,.2,1)"
              }}
            >
              <ListItemIcon sx={{ color: "#fff", minWidth: 40, justifyContent: "center" }}>
                <Assessment />
              </ListItemIcon>
              {sidebarOpen && (
                <ListItemText
                  primary="Data Management"
                  primaryTypographyProps={{
                    variant: "body2",
                    fontWeight: 500,
                    color: "#fff",
                    letterSpacing: 0.2
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              onClick={() => setActiveView("Other")}
              sx={{
                borderRadius: "8px",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)", transform: "translateX(4px)" },
                transition: "all 0.2s cubic-bezier(.4,0,.2,1)"
              }}
            >
              <ListItemIcon sx={{ color: "#fff", minWidth: 40, justifyContent: "center" }}>
                <Assessment />
              </ListItemIcon>
              {sidebarOpen && (
                <ListItemText
                  primary="MIS Report"
                  primaryTypographyProps={{
                    variant: "body2",
                    fontWeight: 500,
                    color: "#fff",
                    letterSpacing: 0.2
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        </List>

        <Box sx={{ p: 2, mt: "auto" }}>
          <ListItemButton sx={{ borderRadius: "8px" }}>
            <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
              <Settings />
            </ListItemIcon>
            {sidebarOpen && (
              <ListItemText
                primary="Settings"
                primaryTypographyProps={{ variant: "body2", fontWeight: 500, color: "#fff" }}
              />
            )}
          </ListItemButton>
        </Box>
      </Box>

      {/* MAIN CONTENT AREA */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* TOP BAR */}
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
            zIndex: 10
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#f8fafc",
                borderRadius: "12px",
                px: 2,
                py: 0.8,
                width: 400,
                transition: "all 0.2s",
                "&:focus-within": { boxShadow: "0 0 0 2px #e2e8f0" }
              }}
            >
              <Search sx={{ color: "#94a3b8", mr: 1, fontSize: 20 }} />
              <InputBase placeholder="Search tasks, projects..." sx={{ flex: 1, fontSize: 14, fontWeight: 500 }} />
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              component={Link}
              to="/addleads"
              variant="outlined"
              startIcon={<Add sx={{ fontSize: 20 }} />}
              sx={{
                borderRadius: "8px",
                textTransform: "none",
                borderColor: "#1a1d28",
                color: "#1a1d28",
                px: 2.5,
                "&:hover": { borderColor: "#2d3343", bgcolor: "#f8fafc" }
              }}
            >
              Add Lead
            </Button>
            <IconButton
              sx={{
                color: "#64748b",
                "&:hover": { bgcolor: "#f1f5f9", transform: "rotate(8deg)" },
                transition: "all 0.2s ease"
              }}
            >
              <Badge badgeContent={3} color="error">
                <Notifications sx={{ fontSize: 24 }} />
              </Badge>
            </IconButton>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar
                sx={{
                  bgcolor: "#3b82f6",
                  color: "#fff",
                  width: 36,
                  height: 36,
                  fontSize: 16,
                  fontWeight: 600,
                  boxShadow: "0 2px 4px rgba(59,130,246,0.3)"
                }}
              >
                OW
              </Avatar>
              <Box sx={{ lineHeight: 1 }}>
                <Typography variant="body2" fontWeight={600}>
                  Olivia W.
                </Typography>
                <Typography variant="caption" color="#64748b">
                  Admin
                </Typography>
              </Box>
            </Box>
            <IconButton
              onClick={handleMenuOpen}
              sx={{
                color: "#64748b",
                "&:hover": { bgcolor: "#f1f5f9", transform: "rotate(180deg)" },
                transition: "all 0.3s ease"
              }}
            >
              <ArrowForwardIos />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              PaperProps={{
                sx: {
                  mt: 1,
                  width: 240,
                  borderRadius: "12px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  border: "1px solid #f1f5f9",
                  p: 1
                }
              }}
            >
              <MenuItem dense onClick={handleMenuClose}>
                <Person fontSize="small" sx={{ mr: 1 }} />
                My Profile
              </MenuItem>
              <MenuItem dense onClick={handleMenuClose}>
                <Settings fontSize="small" sx={{ mr: 1 }} />
                Account Settings
              </MenuItem>
              <Divider sx={{ my: 1 }} />
              <MenuItem dense sx={{ color: "#ef4444" }} onClick={handleMenuClose}>
                <Settings fontSize="small" sx={{ mr: 1 }} />
                Log Out
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* MAIN CONTENT */}
        <Box sx={{ flex: 1, p: 3, overflow: "auto" }}>
          {activeView === "Leads" ? renderLeadsView() : renderMainContent()}
        </Box>
      </Box>

      {/* AI CHAT DRAWER */}
      <AIChatDrawer />
    </Box>
  );
};

export default Dashboard;
