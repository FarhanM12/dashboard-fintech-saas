// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useState } from "react";
import { lightTheme, darkTheme } from "./theme/theme";

// Existing pages
import Splash from "./pages/Splash";
import AuthPage from "./pages/AuthPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import Dashboard from "./pages/Dashboard";
import AddLeads from "./pages/AddLeads";
import Invite from "./pages/Invite";
import UseCasePage from "./pages/UseCasePage";
import WorkspaceNamePage from "./pages/WorkspaceNamePage";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import Products from "./pages/Products";        // <-- For /products
import DataManagement from "./pages/DataManagement"; // <-- For /datamanagement

// ProtectedRoute (or RequireAuth) for authentication gating
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Public Landing Page */}
          <Route
            path="/"
            element={<Splash isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
          />

          {/* Unified Auth Page */}
          <Route path="/auth" element={<AuthPage />} />

          {/* Terms & Conditions (Protected) */}
          <Route
            path="/onboarding/terms"
            element={
              <ProtectedRoute>
                <TermsAndConditions />
              </ProtectedRoute>
            }
          />

          {/* Use Case Page (Protected) */}
          <Route
            path="/onboarding/use-case"
            element={
              <ProtectedRoute>
                <UseCasePage />
              </ProtectedRoute>
            }
          />

          {/* Workspace Name Page (Protected) */}
          <Route
            path="/onboarding/workspace"
            element={
              <ProtectedRoute>
                <WorkspaceNamePage />
              </ProtectedRoute>
            }
          />

          {/* Main Dashboard (Protected) */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Add Leads (Protected) */}
          <Route
            path="/addleads"
            element={
              <ProtectedRoute>
                <AddLeads />
              </ProtectedRoute>
            }
          />

          {/* Invite Page (Protected) */}
          <Route
            path="/invite"
            element={
              <ProtectedRoute>
                <Invite />
              </ProtectedRoute>
            }
          />

          {/* Profile Page (Protected) */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          {/* Admin Page (Protected) */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />

          {/* Products Page (Protected) */}
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />

          {/* Data Management Page (Protected) */}
          <Route
            path="/datamanagement"
            element={
              <ProtectedRoute>
                <DataManagement />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
