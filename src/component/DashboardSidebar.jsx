import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import EmailIcon from "@mui/icons-material/Email";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ArchiveIcon from "@mui/icons-material/Archive";
import ReportIcon from "@mui/icons-material/Report";
import { PlusCircleIcon } from "lucide-react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Avatar, TextField } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import ImageIcon from "@mui/icons-material/Image";
import { LayoutTemplate } from "lucide-react";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddIcon from "@mui/icons-material/Add";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import { SquareChevronRight, SquareChevronLeft } from "lucide-react";
import Ai from "../assets/Ai.png";
import Logo from "../assets/aayan.png";
const drawerWidth = 200;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const DeleteConfirmationDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "12px",
    padding: theme.spacing(1),
  },
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#fff",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(8)} + 1px)`,
  backgroundColor: "#fff",
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 20px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 2),
  minHeight: "64px",
  backgroundColor: "#fff",
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#2a8e8a",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open
    ? {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }
    : {
        width: `calc(100% - 93px)`,
        marginLeft: "auto",
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  backgroundColor: "#fff",
  "& .MuiDrawer-paper": {
    border: "none",
  },
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  background: "linear-gradient(45deg, #e94560, #ff6b6b)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
  fontSize: "1.5rem",
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  color: "#e94560",
  "&:hover": {
    backgroundColor: "rgba(233, 69, 96, 0.1)",
  },
}));

const HeaderMenuButton = styled(IconButton)(({ theme }) => ({
  color: "#ffffff",
  marginRight: theme.spacing(2),
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  margin: "4px 8px",
  color: "#6dc36d000d3",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "#6dc36d",
    color: "#fff",
  },
  "&.Mui-selected": {
    backgroundColor: "#2a8e8a",
    color: "#fff",
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.5)",
  fontSize: "0.75rem",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "1px",
  padding: "16px 16px 8px 16px",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
  },
}));

const SectionHeader = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "1rem",
  marginBottom: theme.spacing(2),
  color: "#333",
}));

const PasswordSection = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "8px",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  position: "relative",
}));

const EditIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: 8,
  top: 8,
  color: theme.palette.grey[600],
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

const DeleteAccountSection = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.error.light}`,
  borderRadius: "8px",
  padding: theme.spacing(2),
  marginTop: theme.spacing(3),
  backgroundColor: "rgba(211, 47, 47, 0.04)",
}));

export default function DashboardSidebar({ sidebarOpen }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(sidebarOpen);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = React.useState(false);
  const [isEditingPassword, setIsEditingPassword] = React.useState(false);
  const [userData, setUserData] = React.useState({
    name: "Daksh Kumar",
    email: "daksh.kumar@sayaninfotech.com",
    password: "••••••••",
    newPassword: "",
    confirmPassword: "",
    connectedPlatform: "Google",
  });

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleNavigation = (link) => {
    navigate(link);
  };

  const handleSettingsOpen = () => {
    setSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
    setIsEditingPassword(false);
    setUserData({
      ...userData,
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleInputChange = (field) => (event) => {
    setUserData({
      ...userData,
      [field]: event.target.value,
    });
  };

  const handleSaveChanges = () => {
    // Here you would typically save the changes to your backend
    console.log("Saving user data:", userData);

    // If password was changed, update the displayed password
    if (isEditingPassword && userData.newPassword) {
      setUserData({
        ...userData,
        password: "••••••••", // Reset to masked password
        newPassword: "",
        confirmPassword: "",
      });
      setIsEditingPassword(false);
    }

    handleSettingsClose();
  };

  const handlePasswordEdit = () => {
    setIsEditingPassword(true);
    setUserData({
      ...userData,
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleDeleteAccount = () => {
    setDeleteConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    // Handle account deletion logic here
    console.log("Deleting account...");
    setDeleteConfirmOpen(false);
    handleSettingsClose();
    // Add your account deletion API call here
  };

  const handleCancelDelete = () => {
    setDeleteConfirmOpen(false);
  };

  const mainMenuItems = [
    { text: "Detail", icon: <EditIcon />, link: "/dashboard/detail" },
    { text: "Template", icon: <LayoutTemplate />, link: "/dashboard/template" },
    { text: "Design", icon: <DesignServicesIcon />, link: "/dashboard/design" },
    { text: "Social", icon: <PeopleIcon />, link: "/dashboard/social" },
    {
      text: "Enhancement",
      icon: <ViewModuleIcon />,
      link: "/dashboard/enhancement",
    },
    {
      text: "Call To Action",
      icon: <CallToActionIcon />,
      link: "/dashboard/cta",
    },
  ];

  const getSelectedIndex = () => {
    return mainMenuItems.findIndex((item) => item.link === location.pathname);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className="min-height-custom">
        <Toolbar>
          <HeaderMenuButton
            color="inherit"
            aria-label="toggle drawer"
            onClick={handleDrawerToggle}
            edge="start"
          >
            {!open ? <SquareChevronRight /> : <SquareChevronLeft />}
          </HeaderMenuButton>
          <Box sx={{ display: "flex", justifyContent: "end", width: "100%" }}>
            <Button
              variant="contained"
              size="small"
              className="px-4 py-2 me-2 fw-semibold"
              style={{
                backgroundColor: "#fff",
                border: "none",
                borderRadius: "30px",
                color: "#2a8e8a",
                lineHeight: "25px",
              }}
            >
              Upgrade to Pro
            </Button>
            <NavDropdown
              id="nav-avatar-dropdown"
              title={<Avatar className="custom-size-icon" />}
              menuVariant="light"
              className="nav-profile"
            >
              <NavDropdown.Item href="#action/3.1">
                <PermIdentityIcon className="custom-size-icon" />
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <CreditCardIcon className="custom-size-icon" />
                Plan & Billing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                <AlternateEmailIcon className="custom-size-icon" />
                Add to your email
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                <SettingsIcon className="custom-size-icon" />
                Signature Setting
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                {" "}
                <LogoutIcon className="custom-size-icon" /> Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <LogoText variant="h6">{open ?<img src={Logo} className="w-100 img-fluid h-100" /> : <img className="w-100 img-fluid h-100" src={Ai} />}</LogoText>
        </DrawerHeader>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

        {/* Main Navigation */}
        <List sx={{ mt: 2, px: 1 }}>
          {mainMenuItems.map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" , my:.8 }}>
              <StyledListItemButton
                selected={getSelectedIndex() === index}
                onClick={() => handleNavigation(item.link)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  m: 0,
                  display: "flex",
                  flexDirection: open ? "row" : "column",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : "0",
                    justifyContent: "center",
                    color: "inherit",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  className={!open && "closed-sideText"}
                  sx={{
                    "& .MuiTypography-root": {
                      fontWeight: getSelectedIndex() === index ? "600" : "400",
                    },
                  }}
                />
              </StyledListItemButton>
            </ListItem>
          ))}
        </List>
        <div className="d-flex justify-content-end align-items-center flex-column gap-3 h-100 mb-3 px-2">
          <Button
            variant="contained"
            className="px-3 py-2 fw-semibold w-100"
            style={{
              backgroundColor: "#2a8e8a",
              border: "none",
              borderRadius: "30px",
            }}
            size="small"
          >
            <AddIcon />
            {open && "Add New Signature"}
          </Button>
          <Button
            variant="outlined"
            className="px-3 py-2 fw-semibold w-100"
            style={{
              borderColor: "#2a8e8a",
              borderRadius: "30px",
              color: "#6dc36d",
            }}
            size="small"
            onClick={handleSettingsOpen}
          >
            <SettingsIcon />
            {open && "Settings"}
          </Button>
        </div>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#f8f9fa" }}
      >
        <Toolbar />
        {/* Your page content will be rendered here by React Router */}
      </Box>

      {/* Settings Modal */}
      <BootstrapDialog
        onClose={handleSettingsClose}
        aria-labelledby="customized-dialog-title"
        open={settingsOpen}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Account Settings
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleSettingsClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {/* User Details Section */}
          <SectionHeader>User details</SectionHeader>

          <StyledTextField
            fullWidth
            label="Name"
            value={userData.name}
            onChange={handleInputChange("name")}
            variant="outlined"
          />

          <StyledTextField
            fullWidth
            label="Email"
            value={userData.email}
            onChange={handleInputChange("email")}
            variant="outlined"
          />

          {/* Password Section */}
          <SectionHeader sx={{ mt: 3 }}>Password</SectionHeader>
          <PasswordSection>
            <EditIconButton
              size="small"
              onClick={handlePasswordEdit}
              disabled={isEditingPassword}
            >
              <EditOutlinedIcon fontSize="small" />
            </EditIconButton>

            {!isEditingPassword ? (
              <StyledTextField
                fullWidth
                type="password"
                label="Password"
                value={userData.password}
                variant="outlined"
                disabled
                placeholder="••••••••"
              />
            ) : (
              <>
                <StyledTextField
                  fullWidth
                  type="password"
                  label="New Password"
                  value={userData.newPassword}
                  onChange={handleInputChange("newPassword")}
                  variant="outlined"
                  placeholder="Enter new password"
                />
                <StyledTextField
                  fullWidth
                  type="password"
                  label="Confirm Password"
                  value={userData.confirmPassword}
                  onChange={handleInputChange("confirmPassword")}
                  variant="outlined"
                  placeholder="Confirm new password"
                />
              </>
            )}
          </PasswordSection>

          {/* Account Settings Section */}
          <SectionHeader sx={{ mt: 3 }}>Account settings</SectionHeader>

          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Connected social platforms
            </Typography>
            <Typography variant="body1">
              {userData.connectedPlatform}
            </Typography>
          </Box>

          {/* Delete Account Section */}
          <DeleteAccountSection>
            <Typography
              variant="body1"
              color="error"
              sx={{ fontWeight: "600", mb: 1 }}
            >
              Delete account
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Permanently delete your account and all associated data. This
              action cannot be undone.
            </Typography>
            <Button
              variant="outlined"
              color="error"
              onClick={handleDeleteAccount}
              sx={{
                borderColor: "error.main",
                "&:hover": {
                  borderColor: "error.dark",
                  backgroundColor: "rgba(211, 47, 47, 0.04)",
                },
              }}
            >
              Delete Account
            </Button>
          </DeleteAccountSection>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSettingsClose}
            sx={{ color: "text.secondary" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSaveChanges}
            variant="contained"
            sx={{
              backgroundColor: "#2a8e8a",
              "&:hover": {
                backgroundColor: "#0a2a4d",
              },
            }}
          >
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationDialog
        open={deleteConfirmOpen}
        onClose={handleCancelDelete}
        aria-labelledby="delete-confirmation-dialog"
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 3, pb: 2 }} id="delete-confirmation-dialog">
          <Typography variant="h6" component="div" fontWeight="600">
            Delete Account
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ p: 3, pt: 0 }}>
          <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
            Are you sure you want to delete your account? This action cannot be
            undone and all your data will be permanently lost.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            To confirm, please type "DELETE" in the box below.
          </Typography>
          <StyledTextField
            fullWidth
            placeholder="DELETE"
            variant="outlined"
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button
            onClick={handleCancelDelete}
            sx={{
              color: "text.secondary",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirmDelete}
            variant="contained"
            color="error"
            sx={{
              backgroundColor: "#d32f2f",
              "&:hover": {
                backgroundColor: "#c62828",
              },
            }}
          >
            Delete Account
          </Button>
        </DialogActions>
      </DeleteConfirmationDialog>
    </Box>
  );
}
