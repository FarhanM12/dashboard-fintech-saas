// import React, { useState, useEffect, useMemo } from "react";
// import {
//   Box,
//   Typography,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   TextField,
//   MenuItem,
//   Divider,
//   Paper,
//   Button,
//   Select,
//   InputLabel,
//   FormControl,
//   LinearProgress,
//   Grid,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import PersonIcon from "@mui/icons-material/Person";
// import BusinessIcon from "@mui/icons-material/Business";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// import HomeWorkIcon from "@mui/icons-material/HomeWork";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";

// enum Section {
//   Personal = "Personal Details",
//   Company = "Company Details",
//   Bank = "Bank Details",
//   Address = "Address",
// }

// const ProfilePage: React.FC = () => {
//   const [activeSection, setActiveSection] = useState<Section>(Section.Personal);

//   // Example states for each section
//   const [personalForm, setPersonalForm] = useState({
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     designation: "",
//     mobile: "",
//     email: "",
//     currentCityPin: "",
//     aadhaar: "",
//   });
//   const [companyForm, setCompanyForm] = useState({
//     firmType: "",
//     companyName: "",
//     companyPin: "",
//     gstNumber: "",
//     companyPan: "",
//   });
//   const [bankForm, setBankForm] = useState({
//     accountType: "",
//     beneficiaryName: "",
//     ifscCode: "",
//   });
//   const [addressForm, setAddressForm] = useState({
//     currentAddress: "",
//     permanentAddress: "",
//   });

//   const firmTypeOptions = ["Proprietor", "Partnership", "LLP", "Pvt. Ltd", "NGO"];
//   const accountTypeOptions = ["Current A/C", "Saving A/C"];

//   /**
//    * 2. Progress Calculation
//    * We'll treat each non-empty field as "completed".
//    * This is a basic approach; adapt as needed.
//    */
//   const totalFields = 8 + 5 + 3 + 2; // total # of fields across all sections
//   const completedCount = useMemo(() => {
//     let count = 0;
//     // personal
//     Object.values(personalForm).forEach((val) => {
//       if (val.trim()) count++;
//     });
//     // company
//     Object.values(companyForm).forEach((val) => {
//       if (val.trim()) count++;
//     });
//     // bank
//     Object.values(bankForm).forEach((val) => {
//       if (val.trim()) count++;
//     });
//     // address
//     Object.values(addressForm).forEach((val) => {
//       if (val.trim()) count++;
//     });
//     return count;
//   }, [personalForm, companyForm, bankForm, addressForm]);

//   const completionPercentage = Math.round((completedCount / totalFields) * 100);

//   // Renders the relevant fields for the active section
//   const renderForm = () => {
//     switch (activeSection) {
//       case Section.Personal:
//         return (
//           <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
//             <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
//               {Section.Personal}
//             </Typography>
//             <Grid container spacing={2}>
//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="First Name"
//                   variant="outlined"
//                   fullWidth
//                   value={personalForm.firstName}
//                   onChange={(e) =>
//                     setPersonalForm({ ...personalForm, firstName: e.target.value })
//                   }
//                 />
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="Middle Name"
//                   variant="outlined"
//                   fullWidth
//                   value={personalForm.middleName}
//                   onChange={(e) =>
//                     setPersonalForm({ ...personalForm, middleName: e.target.value })
//                   }
//                 />
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="Last Name"
//                   variant="outlined"
//                   fullWidth
//                   value={personalForm.lastName}
//                   onChange={(e) =>
//                     setPersonalForm({ ...personalForm, lastName: e.target.value })
//                   }
//                 />
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="Designation"
//                   variant="outlined"
//                   fullWidth
//                   value={personalForm.designation}
//                   onChange={(e) =>
//                     setPersonalForm({ ...personalForm, designation: e.target.value })
//                   }
//                 />
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="Mobile Number"
//                   variant="outlined"
//                   fullWidth
//                   value={personalForm.mobile}
//                   onChange={(e) =>
//                     setPersonalForm({ ...personalForm, mobile: e.target.value })
//                   }
//                 />
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="Email"
//                   variant="outlined"
//                   fullWidth
//                   value={personalForm.email}
//                   onChange={(e) =>
//                     setPersonalForm({ ...personalForm, email: e.target.value })
//                   }
//                 />
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="Current City Pin-Code"
//                   variant="outlined"
//                   fullWidth
//                   value={personalForm.currentCityPin}
//                   onChange={(e) =>
//                     setPersonalForm({ ...personalForm, currentCityPin: e.target.value })
//                   }
//                 />
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="Aadhaar Number"
//                   variant="outlined"
//                   fullWidth
//                   value={personalForm.aadhaar}
//                   onChange={(e) =>
//                     setPersonalForm({ ...personalForm, aadhaar: e.target.value })
//                   }
//                 />
//               </Grid>
//             </Grid>
//           </Paper>
//         );

//       case Section.Company:
//         return (
//           <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
//             <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
//               {Section.Company}
//             </Typography>
//             <Grid container spacing={2}>
//               <Grid item xs={12} md={4}>
//                 <FormControl fullWidth>
//                   <InputLabel>Firm Type</InputLabel>
//                   <Select
//                     label="Firm Type"
//                     value={companyForm.firmType}
//                     onChange={(e) =>
//                       setCompanyForm({ ...companyForm, firmType: e.target.value as string })
//                     }
//                   >
//                     {firmTypeOptions.map((option) => (
//                       <MenuItem key={option} value={option}>
//                         {option}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="Company Name"
//                   variant="outlined"
//                   fullWidth
//                   value={companyForm.companyName}
//                   onChange={(e) =>
//                     setCompanyForm({ ...companyForm, companyName: e.target.value })
//                   }
//                 />
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="Company Pin-Code"
//                   variant="outlined"
//                   fullWidth
//                   value={companyForm.companyPin}
//                   onChange={(e) =>
//                     setCompanyForm({ ...companyForm, companyPin: e.target.value })
//                   }
//                 />
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="GST Number (If Applicable)"
//                   variant="outlined"
//                   fullWidth
//                   value={companyForm.gstNumber}
//                   onChange={(e) =>
//                     setCompanyForm({ ...companyForm, gstNumber: e.target.value })
//                   }
//                 />
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="Company PAN Number"
//                   variant="outlined"
//                   fullWidth
//                   value={companyForm.companyPan}
//                   onChange={(e) =>
//                     setCompanyForm({ ...companyForm, companyPan: e.target.value })
//                   }
//                 />
//               </Grid>
//             </Grid>
//           </Paper>
//         );

//       case Section.Bank:
//         return (
//           <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
//             <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
//               {Section.Bank}
//             </Typography>
//             <Grid container spacing={2}>
//               <Grid item xs={12} md={4}>
//                 <FormControl fullWidth>
//                   <InputLabel>Account Type</InputLabel>
//                   <Select
//                     label="Account Type"
//                     value={bankForm.accountType}
//                     onChange={(e) =>
//                       setBankForm({ ...bankForm, accountType: e.target.value as string })
//                     }
//                   >
//                     {accountTypeOptions.map((option) => (
//                       <MenuItem key={option} value={option}>
//                         {option}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="Beneficiary Name"
//                   variant="outlined"
//                   fullWidth
//                   value={bankForm.beneficiaryName}
//                   onChange={(e) =>
//                     setBankForm({ ...bankForm, beneficiaryName: e.target.value })
//                   }
//                 />
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <TextField
//                   label="Beneficiary IFSC Code"
//                   variant="outlined"
//                   fullWidth
//                   value={bankForm.ifscCode}
//                   onChange={(e) => setBankForm({ ...bankForm, ifscCode: e.target.value })}
//                 />
//               </Grid>
//             </Grid>
//           </Paper>
//         );

//       case Section.Address:
//         return (
//           <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
//             <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
//               {Section.Address}
//             </Typography>
//             <Grid container spacing={2}>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Current Address"
//                   variant="outlined"
//                   multiline
//                   minRows={3}
//                   fullWidth
//                   value={addressForm.currentAddress}
//                   onChange={(e) =>
//                     setAddressForm({ ...addressForm, currentAddress: e.target.value })
//                   }
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Permanent Address"
//                   variant="outlined"
//                   multiline
//                   minRows={3}
//                   fullWidth
//                   value={addressForm.permanentAddress}
//                   onChange={(e) =>
//                     setAddressForm({ ...addressForm, permanentAddress: e.target.value })
//                   }
//                 />
//               </Grid>
//             </Grid>
//           </Paper>
//         );

//       default:
//         return null;
//     }
//   };

//   // Example "save all" function
//   const handleSaveAll = () => {
//     // In real life, you'd call an API to store these forms
//     alert("Profile data saved!");
//   };

//   return (
//     <Box sx={{ display: "flex", height: "100vh" }}>
//       {/* LEFT SIDEBAR */}
//       <Box
//         sx={{
//           width: 280,
//           bgcolor: "#1a1d28",
//           color: "#fff",
//           display: "flex",
//           flexDirection: "column",
//           borderRight: "1px solid rgba(255,255,255,0.1)",
//         }}
//       >
//         {/* Profile header (avatar + name) - REPLACE DUMMY AVATAR */}
//         <Box sx={{ p: 3, display: "flex", alignItems: "center", gap: 2 }}>
//           {/* If user logs in via Azure AD B2C and you have user photo: 
//               Use <Avatar src={userPhotoURL} /> or a fallback */}
//           <Box
//             sx={{
//               width: 60,
//               height: 60,
//               borderRadius: "50%",
//               bgcolor: "#3b82f6",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: 24,
//               fontWeight: "bold",
//               boxShadow: "0 2px 4px rgba(59,130,246,0.3)",
//               color: "#fff",
//             }}
//           >
//             FM
//           </Box>
//           <Box>
//             <Typography variant="body1" sx={{ fontWeight: 700 }}>
//               Farhan Momin
//             </Typography>
//             <Typography variant="caption" sx={{ color: "#ccc" }}>
//               Member
//             </Typography>
//           </Box>
//         </Box>
//         <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

//         {/* Sections */}
//         <List sx={{ flex: 1 }}>
//           <ListItemButton
//             onClick={() => setActiveSection(Section.Personal)}
//             sx={{
//               borderRadius: 2,
//               mt: 1,
//               mx: 1,
//               "&:hover": {
//                 bgcolor: "rgba(255,255,255,0.1)",
//               },
//               ...(activeSection === Section.Personal && {
//                 bgcolor: "rgba(255,255,255,0.1)",
//               }),
//             }}
//           >
//             <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
//               <PersonIcon />
//             </ListItemIcon>
//             <ListItemText primary="Personal Details" />
//           </ListItemButton>

//           <ListItemButton
//             onClick={() => setActiveSection(Section.Company)}
//             sx={{
//               borderRadius: 2,
//               mt: 1,
//               mx: 1,
//               "&:hover": {
//                 bgcolor: "rgba(255,255,255,0.1)",
//               },
//               ...(activeSection === Section.Company && {
//                 bgcolor: "rgba(255,255,255,0.1)",
//               }),
//             }}
//           >
//             <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
//               <BusinessIcon />
//             </ListItemIcon>
//             <ListItemText primary="Company Details" />
//           </ListItemButton>

//           <ListItemButton
//             onClick={() => setActiveSection(Section.Bank)}
//             sx={{
//               borderRadius: 2,
//               mt: 1,
//               mx: 1,
//               "&:hover": {
//                 bgcolor: "rgba(255,255,255,0.1)",
//               },
//               ...(activeSection === Section.Bank && {
//                 bgcolor: "rgba(255,255,255,0.1)",
//               }),
//             }}
//           >
//             <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
//               <AccountBalanceIcon />
//             </ListItemIcon>
//             <ListItemText primary="Bank Details" />
//           </ListItemButton>

//           <ListItemButton
//             onClick={() => setActiveSection(Section.Address)}
//             sx={{
//               borderRadius: 2,
//               mt: 1,
//               mx: 1,
//               "&:hover": {
//                 bgcolor: "rgba(255,255,255,0.1)",
//               },
//               ...(activeSection === Section.Address && {
//                 bgcolor: "rgba(255,255,255,0.1)",
//               }),
//             }}
//           >
//             <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
//               <HomeWorkIcon />
//             </ListItemIcon>
//             <ListItemText primary="Address" />
//           </ListItemButton>
//         </List>

//         <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
//         <Box sx={{ p: 2, textAlign: "center" }}>
//           <Typography variant="caption" sx={{ color: "#aaa" }}>
//             © 2025 Mubera
//           </Typography>
//         </Box>
//       </Box>

//       {/* RIGHT CONTENT AREA */}
//       <Box sx={{ flex: 1, p: 4, overflow: "auto", bgcolor: "#f8fafc" }}>
//         {/* Progress Bar */}
//         <Box sx={{ mb: 2 }}>
//           <Typography variant="body1" sx={{ fontWeight: 600 }}>
//             Profile Completion: {completionPercentage}%
//           </Typography>
//           <LinearProgress
//             variant="determinate"
//             value={completionPercentage}
//             sx={{
//               height: 8,
//               borderRadius: 2,
//               backgroundColor: "#e2e8f0",
//               "& .MuiLinearProgress-bar": {
//                 backgroundColor: completionPercentage > 70 ? "#10b981" : "#3b82f6",
//               },
//             }}
//           />
//         </Box>

//         <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
//           {activeSection}
//         </Typography>

//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.4 }}
//         >
//           {/* Render the relevant form fields */}
//           {renderForm()}

//           {/* Example "Save" button */}
//           <Box sx={{ mt: 3, textAlign: "right" }}>
//             <Button
//               variant="contained"
//               onClick={handleSaveAll}
//               sx={{
//                 borderRadius: 2,
//                 textTransform: "none",
//                 fontWeight: 600,
//               }}
//             >
//               Save All
//             </Button>
//           </Box>
//         </motion.div>
//       </Box>
//     </Box>
//   );
// };

// export default ProfilePage;
import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  MenuItem,
  Divider,
  Paper,
  Button,
  Select,
  InputLabel,
  FormControl,
  LinearProgress,
  Grid,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Person,
  Business,
  AccountBalance,
  Home,
  CheckCircle,
  Lock,
} from "@mui/icons-material";

enum Section {
  Personal = "Personal Details",
  Company = "Company Details",
  Bank = "Bank Details",
  Address = "Address",
}

const ProfilePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.Personal);

  // Form states
  const [personalForm, setPersonalForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    designation: "",
    mobile: "",
    email: "",
    currentCityPin: "",
    aadhaar: "",
  });

  const [companyForm, setCompanyForm] = useState({
    firmType: "",
    companyName: "",
    companyPin: "",
    gstNumber: "",
    companyPan: "",
  });

  const [bankForm, setBankForm] = useState({
    accountType: "",
    beneficiaryName: "",
    ifscCode: "",
  });

  const [addressForm, setAddressForm] = useState({
    currentAddress: "",
    permanentAddress: "",
  });

  const firmTypeOptions = ["Proprietor", "Partnership", "LLP", "Pvt. Ltd", "NGO"];
  const accountTypeOptions = ["Current A/C", "Saving A/C"];

  // Progress calculation
  const totalFields = 8 + 5 + 3 + 2;
  const completedCount = useMemo(() => {
    let count = 0;
    Object.values(personalForm).forEach(val => val.trim() && count++);
    Object.values(companyForm).forEach(val => val.trim() && count++);
    Object.values(bankForm).forEach(val => val.trim() && count++);
    Object.values(addressForm).forEach(val => val.trim() && count++);
    return count;
  }, [personalForm, companyForm, bankForm, addressForm]);

  const completionPercentage = Math.round((completedCount / totalFields) * 100);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<any>>, field: string) => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter((prev: any) => ({ ...prev, [field]: e.target.value }));
    };

  const renderForm = () => {
    switch (activeSection) {
      case Section.Personal:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="First Name"
                value={personalForm.firstName}
                onChange={handleInputChange(setPersonalForm, 'firstName')}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Middle Name"
                value={personalForm.middleName}
                onChange={handleInputChange(setPersonalForm, 'middleName')}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Last Name"
                value={personalForm.lastName}
                onChange={handleInputChange(setPersonalForm, 'lastName')}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Designation"
                value={personalForm.designation}
                onChange={handleInputChange(setPersonalForm, 'designation')}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Mobile Number"
                value={personalForm.mobile}
                onChange={handleInputChange(setPersonalForm, 'mobile')}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Email"
                value={personalForm.email}
                onChange={handleInputChange(setPersonalForm, 'email')}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="City Pin-Code"
                value={personalForm.currentCityPin}
                onChange={handleInputChange(setPersonalForm, 'currentCityPin')}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Aadhaar Number"
                value={personalForm.aadhaar}
                onChange={handleInputChange(setPersonalForm, 'aadhaar')}
                variant="outlined"
              />
            </Grid>
          </Grid>
        );

      case Section.Company:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Firm Type</InputLabel>
                <Select
                  value={companyForm.firmType}
                  onChange={(e) => setCompanyForm(prev => ({ ...prev, firmType: e.target.value }))}
                  label="Firm Type"
                  variant="outlined"
                >
                  {firmTypeOptions.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Company Name"
                value={companyForm.companyName}
                onChange={handleInputChange(setCompanyForm, 'companyName')}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Company Pin-Code"
                value={companyForm.companyPin}
                onChange={handleInputChange(setCompanyForm, 'companyPin')}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="GST Number"
                value={companyForm.gstNumber}
                onChange={handleInputChange(setCompanyForm, 'gstNumber')}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Company PAN"
                value={companyForm.companyPan}
                onChange={handleInputChange(setCompanyForm, 'companyPan')}
                variant="outlined"
              />
            </Grid>
          </Grid>
        );

      case Section.Bank:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Account Type</InputLabel>
                <Select
                  value={bankForm.accountType}
                  onChange={(e) => setBankForm(prev => ({ ...prev, accountType: e.target.value }))}
                  label="Account Type"
                  variant="outlined"
                >
                  {accountTypeOptions.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Beneficiary Name"
                value={bankForm.beneficiaryName}
                onChange={handleInputChange(setBankForm, 'beneficiaryName')}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="IFSC Code"
                value={bankForm.ifscCode}
                onChange={handleInputChange(setBankForm, 'ifscCode')}
                variant="outlined"
              />
            </Grid>
          </Grid>
        );

      case Section.Address:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Current Address"
                value={addressForm.currentAddress}
                onChange={handleInputChange(setAddressForm, 'currentAddress')}
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Permanent Address"
                value={addressForm.permanentAddress}
                onChange={handleInputChange(setAddressForm, 'permanentAddress')}
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
          </Grid>
        );
    }
  };

  const handleSaveAll = () => {
    alert("Profile saved successfully!");
  };

  const isSectionComplete = (section: Section) => {
    const sectionFields = {
      [Section.Personal]: Object.values(personalForm),
      [Section.Company]: Object.values(companyForm),
      [Section.Bank]: Object.values(bankForm),
      [Section.Address]: Object.values(addressForm),
    };
    return sectionFields[section].every(field => field.trim() !== "");
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box sx={{
        width: 280,
        bgcolor: "#1a1d28",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid rgba(255,255,255,0.1)",
      }}>
        <Box sx={{ p: 3, display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar sx={{
            width: 60,
            height: 60,
            bgcolor: "#3b82f6",
            fontSize: 24,
            fontWeight: "bold",
          }}>
            FM
          </Avatar>
          <Box>
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              Farhan Momin
            </Typography>
            <Typography variant="caption" sx={{ color: "#ccc" }}>
              Member
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

        <List sx={{ flex: 1 }}>
          {Object.values(Section).map((section) => (
            <ListItemButton
              key={section}
              onClick={() => setActiveSection(section)}
              sx={{
                borderRadius: 2,
                mx: 1,
                mb: 1,
                bgcolor: activeSection === section ? "rgba(255,255,255,0.1)" : "transparent",
                "&:hover": { bgcolor: "rgba(255,255,255,0.05)" },
              }}
            >
              <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
                {section === Section.Personal && <Person />}
                {section === Section.Company && <Business />}
                {section === Section.Bank && <AccountBalance />}
                {section === Section.Address && <Home />}
              </ListItemIcon>
              <ListItemText primary={section} />
              {isSectionComplete(section) && <CheckCircle sx={{ color: "#4CAF50" }} />}
            </ListItemButton>
          ))}
        </List>

        <Box sx={{ p: 2, textAlign: "center" }}>
          <Lock sx={{ fontSize: 14, color: "#aaa", mr: 1 }} />
          <Typography variant="caption" sx={{ color: "#aaa" }}>
            © 2025 Mubera
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, p: 4, overflow: "auto", bgcolor: "#f8fafc" }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            {activeSection}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <LinearProgress
              variant="determinate"
              value={completionPercentage}
              sx={{
                flex: 1,
                height: 8,
                borderRadius: 2,
                backgroundColor: "#e2e8f0",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#3b82f6",
                  borderRadius: 2,
                },
              }}
            />
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {completionPercentage}% Complete
            </Typography>
          </Box>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
            {renderForm()}
            <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                onClick={handleSaveAll}
                sx={{
                  px: 4,
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                  bgcolor: "#3b82f6",
                  "&:hover": { bgcolor: "#2563eb" },
                }}
              >
                Save All
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ProfilePage;