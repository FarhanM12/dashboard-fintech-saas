// src/pages/AddLeads.tsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  IconButton,
  Tooltip,
  Chip,
  Grid,
  Divider,
} from "@mui/material";
import {
  DeleteOutlined,
  EditOutlined,
  PersonAddAlt1,
} from "@mui/icons-material";
import { motion } from "framer-motion";

/** Possible Product and Sub-Product options */
const productOptions = ["KYC/KYB Card", "Loan", "Insurance", "Investment"];
const subProductOptions = [
  "Credit Report",
  "Credit Card",
  "FD Based Credit Card",
  "Personal Loan",
  "Auto Loan",
  "Home Loan",
  "Mortgage",
  "Loan Against Share",
  "Loan Against Mutual Fund",
  "Insurance",
  "Health Insurance",
  "Life Insurance",
  "General Insurance",
  "Mutual Fund",
];

/** Lead interface, matching your DB columns (snake_case). */
interface Lead {
  id: number;
  product: string;
  sub_product: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  mobile: string;
}

const AddLeads: React.FC = () => {
  // State to hold leads from the server
  const [leads, setLeads] = useState<Lead[]>([]);

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingLead, setEditingLead] = useState<Lead | null>(null);

  /**
   * On component mount, fetch all leads from the server.
   */
  useEffect(() => {
    fetchLeads();
  }, []);

  /**
   * Fetch leads from the backend: GET /api/leads
   */
  const fetchLeads = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/leads");
      if (!response.ok) {
        throw new Error("Failed to fetch leads");
      }
      const data: Lead[] = await response.json();
      setLeads(data);
    } catch (error) {
      console.error("Error fetching leads:", error);
      alert("Error fetching leads");
    }
  };

  /**
   * Opens the dialog to add a brand-new lead.
   * We'll set id=0 to indicate a new lead (not from DB).
   */
  const handleAddNew = () => {
    setEditingLead({
      id: 0,
      product: "",
      sub_product: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      mobile: "",
    });
    setDialogOpen(true);
  };

  /**
   * Opens the dialog to edit an existing lead.
   */
  const handleEdit = (lead: Lead) => {
    setEditingLead(lead);
    setDialogOpen(true);
  };

  /**
   * Deletes a lead by ID. Calls DELETE /api/leads/:id
   */
  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/api/leads/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network error while deleting lead");
      }
      // Remove from local state on success
      setLeads((prev) => prev.filter((lead) => lead.id !== id));
    } catch (error) {
      console.error("Error deleting lead:", error);
      alert("Network error while deleting lead");
    }
  };

  /**
   * Helper to update a single field in the editingLead object.
   */
  const handleFieldChange = <K extends keyof Lead>(field: K, value: Lead[K]) => {
    setEditingLead((prev) => (prev ? { ...prev, [field]: value } : null));
  };

  /**
   * Saves the lead:
   * - If id===0 => POST to /api/leads
   * - Else => PUT to /api/leads/:id
   */
  const handleSave = async () => {
    if (!editingLead) return;

    // If adding a new lead
    if (editingLead.id === 0) {
      try {
        const response = await fetch("http://localhost:5000/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editingLead),
        });
        if (!response.ok) {
          throw new Error("Failed to create lead");
        }
        const createdLead: Lead = await response.json();
        // Merge the newly created lead into our leads state
        setLeads((prev) => [...prev, createdLead]);
      } catch (error) {
        console.error("Error creating lead:", error);
        alert("Error creating lead");
      }
    } else {
      // Updating an existing lead
      try {
        const response = await fetch(
          `http://localhost:5000/api/leads/${editingLead.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editingLead),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to update lead");
        }
        const updatedLead: Lead = await response.json();
        // Update local state
        setLeads((prev) =>
          prev.map((lead) => (lead.id === updatedLead.id ? updatedLead : lead))
        );
      } catch (error) {
        console.error("Error updating lead:", error);
        alert("Error updating lead");
      }
    }

    // Close dialog either way
    setDialogOpen(false);
    setEditingLead(null);
  };

  /**
   * Cancels the dialog (without saving).
   */
  const handleCancel = () => {
    setDialogOpen(false);
    setEditingLead(null);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 3,
        bgcolor: "#f6f7f9",
        display: "flex",
        flexDirection: "column",
        maxWidth: 1600,
        margin: "0 auto",
      }}
    >
      {/* Page Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          p: 3,
          bgcolor: "#fff",
          borderRadius: 2,
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          transition: "all 0.2s",
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, color: "#1e293b" }}>
            Lead Management
          </Typography>
          <Typography variant="body2" sx={{ color: "#475569", mt: 0.5 }}>
            {leads.length} active records
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={handleAddNew}
          startIcon={<PersonAddAlt1 />}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            px: 3,
            backgroundColor: "#00C875", // Monday-like green
            fontWeight: 600,
            "&:hover": { backgroundColor: "#00B761" },
            transition: "all 0.2s",
          }}
        >
          Add Lead
        </Button>
      </Box>

      {/* Leads Table */}
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 2,
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead
            sx={{
              backgroundColor: "#f3f6fb",
              "& th": {
                textTransform: "uppercase",
                fontSize: 13,
                fontWeight: 600,
                color: "#475569",
              },
            }}
          >
            <TableRow>
              {[
                "Product",
                "Sub-Product",
                "First Name",
                "Middle Name",
                "Last Name",
                "Mobile",
                "Actions",
              ].map((header) => (
                <TableCell key={header} sx={{ py: 1.5 }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "& tr:hover": {
                backgroundColor: "#fafbfc",
              },
            }}
          >
            {leads.map((lead) => (
              <TableRow
                key={lead.id}
                component={motion.tr}
                whileHover={{ scale: 1.005 }}
              >
                <TableCell sx={{ py: 2 }}>
                  <Chip
                    label={lead.product || "N/A"}
                    variant="filled"
                    sx={{
                      fontWeight: 600,
                      backgroundColor: "#F0FDF9",
                      color: "#00C875",
                    }}
                  />
                </TableCell>
                <TableCell sx={{ py: 2 }}>
                  {lead.sub_product || "—"}
                </TableCell>
                <TableCell sx={{ py: 2 }}>{lead.first_name}</TableCell>
                <TableCell sx={{ py: 2 }}>{lead.middle_name}</TableCell>
                <TableCell sx={{ py: 2 }}>{lead.last_name}</TableCell>
                <TableCell sx={{ py: 2 }}>{lead.mobile}</TableCell>
                <TableCell sx={{ py: 2 }}>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Tooltip title="Edit">
                      <IconButton
                        onClick={() => handleEdit(lead)}
                        sx={{
                          "&:hover": {
                            color: "#00C875",
                          },
                        }}
                      >
                        <EditOutlined fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton
                        onClick={() => handleDelete(lead.id)}
                        sx={{
                          "&:hover": {
                            color: "#ef4444",
                          },
                        }}
                      >
                        <DeleteOutlined fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
            {leads.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} sx={{ textAlign: "center", py: 4 }}>
                  <Typography variant="body2" sx={{ color: "#64748b" }}>
                    No leads found. Click <strong>Add Lead</strong> to create one.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog (Add/Edit Lead) */}
      <Dialog
        open={dialogOpen}
        onClose={handleCancel}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: 2,
            overflow: "hidden",
          },
        }}
      >
        <DialogTitle
          sx={{
            p: 3,
            borderBottom: "1px solid",
            borderColor: "divider",
            bgcolor: "#f9fafb",
          }}
        >
          <Typography variant="h6" fontWeight={700}>
            {editingLead?.id ? "Edit Lead" : "New Lead"}
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          <Grid container spacing={2}>
            {/* Product */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Product
              </Typography>
              <Select
                fullWidth
                value={editingLead?.product || ""}
                onChange={(e) => handleFieldChange("product", e.target.value)}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select a Product
                </MenuItem>
                {productOptions.map((p) => (
                  <MenuItem key={p} value={p}>
                    {p}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            {/* Sub-Product */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Sub-Product
              </Typography>
              <Select
                fullWidth
                value={editingLead?.sub_product || ""}
                onChange={(e) => handleFieldChange("sub_product", e.target.value)}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select a Sub-Product
                </MenuItem>
                {subProductOptions.map((sp) => (
                  <MenuItem key={sp} value={sp}>
                    {sp}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 1 }} />
            </Grid>

            {/* First, Middle, Last Name */}
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="First Name"
                value={editingLead?.first_name || ""}
                onChange={(e) => handleFieldChange("first_name", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Middle Name"
                value={editingLead?.middle_name || ""}
                onChange={(e) => handleFieldChange("middle_name", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Last Name"
                value={editingLead?.last_name || ""}
                onChange={(e) => handleFieldChange("last_name", e.target.value)}
              />
            </Grid>

            {/* Mobile */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mobile Number"
                value={editingLead?.mobile || ""}
                onChange={(e) => handleFieldChange("mobile", e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            p: 3,
            borderTop: "1px solid",
            borderColor: "divider",
            bgcolor: "#f9fafb",
          }}
        >
          <Button
            onClick={handleCancel}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              mr: 1,
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              backgroundColor: "#00C875",
              "&:hover": { backgroundColor: "#00B761" },
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddLeads;
