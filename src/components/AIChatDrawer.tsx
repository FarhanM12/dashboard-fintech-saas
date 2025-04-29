// src/components/AIChatDrawer.tsx
import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Slide,
  styled
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

// Styled component for the draggable handle
const ResizableHandle = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: "8px",
  cursor: "col-resize",
  zIndex: 1302,
  transition: "background-color 0.2s",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
}));

const AIChatDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [panelWidth, setPanelWidth] = useState(600);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startWidth, setStartWidth] = useState(600);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const MIN_WIDTH = 400;
  const MAX_WIDTH = 900;

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  // Mouse event handler for starting the resize
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStartX(e.clientX);
    setStartWidth(panelWidth);
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      const delta = startX - e.clientX;
      let newWidth = startWidth + delta;
      if (newWidth < MIN_WIDTH) newWidth = MIN_WIDTH;
      if (newWidth > MAX_WIDTH) newWidth = MAX_WIDTH;
      setPanelWidth(newWidth);
    };

    const handleMouseUp = () => {
      if (dragging) setDragging(false);
    };

    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, startX, startWidth]);

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages((prev) => [...prev, input]);
      setInput("");
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            bgcolor: "primary.main",
            color: "#fff",
            width: 56,
            height: 56,
            zIndex: 1300,
            boxShadow: 4,
            borderRadius: "50%",
            "&:hover": { bgcolor: "primary.dark" },
          }}
        >
          <ChatIcon fontSize="large" />
        </IconButton>
      )}

      {/* Slide-in Chat Drawer */}
      <Slide direction="left" in={open} mountOnEnter unmountOnExit>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100vh",
            width: panelWidth,
            bgcolor: "#fff",
            boxShadow: "-2px 0 8px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            zIndex: 1301,
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
            overflow: "hidden",
          }}
        >
          {/* Draggable Handle */}
          <ResizableHandle onMouseDown={handleMouseDown} />

          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              borderBottom: "1px solid #e2e8f0",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              AI Assistant
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Chat Messages */}
          <Box
            sx={{
              flex: 1,
              p: 2,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              background: "linear-gradient(135deg, rgba(240,240,240,0.5), rgba(255,255,255,0.5))",
            }}
          >
            {messages.length === 0 ? (
              <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
                No messages yet. Start chatting!
              </Typography>
            ) : (
              <List>
                {messages.map((msg, idx) => (
                  <ListItem key={idx} disablePadding>
                    <ListItemText primary={msg} />
                  </ListItem>
                ))}
              </List>
            )}
          </Box>

          {/* Input Area */}
          <Box
            sx={{
              p: 2,
              borderTop: "1px solid #e2e8f0",
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              sx={{ borderRadius: 1 }}
            />
            <Button
              variant="contained"
              onClick={handleSend}
              sx={{
                textTransform: "none",
                borderRadius: 1,
                fontWeight: "bold",
                bgcolor: "primary.main",
                "&:hover": { bgcolor: "primary.dark" },
                minWidth: 80,
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Slide>
    </>
  );
};

export default AIChatDrawer;