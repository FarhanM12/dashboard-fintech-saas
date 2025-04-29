import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Chip,
  Avatar,
  Divider,
  Tabs,
  Tab,
  InputAdornment,
} from "@mui/material";
import {
  ContentCopy,
  PersonAddAlt1,
  Search as SearchIcon,
  Email,
  AdminPanelSettings,
  EditNotifications,
  Visibility,
} from "@mui/icons-material";
import { motion } from "framer-motion";

interface Member {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer" | "Member";
  status: "active" | "pending";
}

const roleColors = {
  Admin: "#3b82f6",
  Editor: "#10b981",
  Viewer: "#f59e0b",
  Member: "#64748b",
};

const Invite: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [members, setMembers] = useState<Member[]>([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@mubera.app",
      role: "Admin",
      status: "active",
    },
  ]);
  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState("All Roles");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [inviteData, setInviteData] = useState({
    email: "",
    role: "Member" as Member["role"],
  });
  const [inviteLink, setInviteLink] = useState("");

  useEffect(() => {
    generateInviteLink();
  }, [dialogOpen]);

  const generateInviteLink = () => {
    const randomCode = Math.random().toString(36).substring(2, 15);
    setInviteLink(`${window.location.origin}/invite/${randomCode}`);
  };

  const handleInvite = () => {
    const newMember: Member = {
      id: members.length + 1,
      name: inviteData.email.split("@")[0],
      email: inviteData.email,
      role: inviteData.role,
      status: "pending",
    };
    setMembers([...members, newMember]);
    setDialogOpen(false);
    setInviteData({ email: "", role: "Member" });
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      alert("Link copied to clipboard!");
    } catch (err) {
      alert("Failed to copy link");
    }
  };

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.email.toLowerCase().includes(search.toLowerCase()) ||
      member.name.toLowerCase().includes(search.toLowerCase());
    const matchesRole = selectedRole === "All Roles" || member.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <Box sx={{ p: 4, maxWidth: 1200, margin: "0 auto" }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: "grey.900" }}>
          Team Management
        </Typography>
        <Tabs
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
          sx={{ mt: 3 }}
        >
          <Tab label="Team Members" />
          <Tab label="Invite Settings" />
          <Tab label="Embedded Users" />
        </Tabs>
        <Divider sx={{ mt: 1 }} />
      </Box>

      {activeTab === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
            <TextField
              fullWidth
              placeholder="Search members..."
              variant="outlined"
              size="small"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "grey.500" }} />
                  </InputAdornment>
                ),
              }}
            />
            <Select
              size="small"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              sx={{ minWidth: 140 }}
            >
              <MenuItem value="All Roles">All Roles</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Editor">Editor</MenuItem>
              <MenuItem value="Viewer">Viewer</MenuItem>
              <MenuItem value="Member">Member</MenuItem>
            </Select>
            <Button
              variant="contained"
              startIcon={<PersonAddAlt1 />}
              onClick={() => setDialogOpen(true)}
              sx={{ ml: "auto", borderRadius: 2 }}
            >
              Invite Member
            </Button>
          </Box>

          <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
            <Table>
              <TableHead sx={{ bgcolor: "grey.50" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Member</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Role</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredMembers.map((member) => (
                  <TableRow key={member.id} hover>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Avatar sx={{ bgcolor: "grey.200", color: "grey.800" }}>
                          {member.name[0]}
                        </Avatar>
                        {member.name}
                      </Box>
                    </TableCell>
                    <TableCell>{member.email}</TableCell>
                    <TableCell>
                      <Chip
                        label={member.role}
                        size="small"
                        sx={{
                          bgcolor: `${roleColors[member.role]}10`,
                          color: roleColors[member.role],
                          fontWeight: 600,
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={member.status}
                        variant="outlined"
                        color={member.status === "active" ? "success" : "warning"}
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <EditNotifications />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </motion.div>
      )}

      {activeTab === 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Box sx={{ p: 3, bgcolor: "grey.50", borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Invitation Settings
            </Typography>
            {/* Add invitation settings form here */}
          </Box>
        </motion.div>
      )}

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{ sx: { borderRadius: 2 } }}
      >
        <DialogTitle sx={{ fontWeight: 600 }}>Invite Team Member</DialogTitle>
        <DialogContent dividers>
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            margin="normal"
            value={inviteData.email}
            onChange={(e) => setInviteData({ ...inviteData, email: e.target.value })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email sx={{ color: "grey.500" }} />
                </InputAdornment>
              ),
            }}
          />
          <Select
            fullWidth
            value={inviteData.role}
            onChange={(e) =>
              setInviteData({ ...inviteData, role: e.target.value as Member["role"] })
            }
            sx={{ mt: 2 }}
          >
            <MenuItem value="Admin">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <AdminPanelSettings sx={{ color: roleColors.Admin }} />
                Admin - Full access
              </Box>
            </MenuItem>
            <MenuItem value="Editor">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EditNotifications sx={{ color: roleColors.Editor }} />
                Editor - Edit access
              </Box>
            </MenuItem>
            <MenuItem value="Viewer">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Visibility sx={{ color: roleColors.Viewer }} />
                Viewer - Read only
              </Box>
            </MenuItem>
          </Select>

          <Box sx={{ mt: 3, bgcolor: "grey.50", p: 2, borderRadius: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                Invitation Link:
              </Typography>
              <IconButton onClick={handleCopyLink} size="small">
                <ContentCopy fontSize="small" />
              </IconButton>
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "monospace",
                color: "grey.700",
                wordBreak: "break-all",
              }}
            >
              {inviteLink}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button
            onClick={() => setDialogOpen(false)}
            variant="outlined"
            sx={{ borderRadius: 2 }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleInvite}
            variant="contained"
            disabled={!inviteData.email.includes("@")}
            sx={{ borderRadius: 2 }}
          >
            Send Invite
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Invite;