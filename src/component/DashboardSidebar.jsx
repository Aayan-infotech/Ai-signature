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
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Avatar } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import ImageIcon from "@mui/icons-material/Image";
import { LayoutTemplate } from "lucide-react";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { useNavigate, useLocation } from "react-router-dom"; // Add these imports

const drawerWidth = 200;

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
  backgroundColor: "#0f3460",
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
  color: "#000000d3",
  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
  "&.Mui-selected": {
    backgroundColor: "#0f3460",
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

export default function DashboardSidebar({ sidebarOpen }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation(); // Get current location
  const [open, setOpen] = React.useState(sidebarOpen);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleNavigation = (link) => {
    navigate(link);
  };

  const mainMenuItems = [
    { text: "Detail", icon: <EditIcon />, link: "/dashboard/detail" },
    { text: "Template", icon: <LayoutTemplate />, link: "/dashboard/template" },
    { text: "Design", icon: <DesignServicesIcon />, link: "/dashboard/design" },
    { text: "Social", icon: <PeopleIcon />, link: "/dashboard/social" },
    { text: "Apps", icon: <ViewModuleIcon />, link: "/dashboard/apps" },
  ];

  // Find the current selected index based on the current path
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
            <MenuIcon />
          </HeaderMenuButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>

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
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <LogoText variant="h6">{open ? "DASHBOARD" : "DB"}</LogoText>
        </DrawerHeader>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

        {/* Main Navigation */}
        <List sx={{ mt: 2 }}>
          {mainMenuItems.map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
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
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#f8f9fa" }}
      >
        <Toolbar />
        {/* Your page content will be rendered here by React Router */}
      </Box>
    </Box>
  );
}
