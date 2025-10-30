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
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import EmailIcon from "@mui/icons-material/Email";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ArchiveIcon from "@mui/icons-material/Archive";
import ReportIcon from "@mui/icons-material/Report";

const drawerWidth = 260;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#1a1a2e",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(8)} + 1px)`,
  backgroundColor: "#1a1a2e",
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 2),
  minHeight: "64px",
  backgroundColor: "#16213e",
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "#0f3460",
  boxShadow: "none",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  marginLeft: `calc(${theme.spacing(8)} + 1px)`,
  width: `calc(100% - calc(${theme.spacing(8)} + 1px))`,
  [theme.breakpoints.up("sm")]: {
    marginLeft: `calc(${theme.spacing(9)} + 1px)`,
    width: `calc(100% - calc(${theme.spacing(9)} + 1px))`,
  },
  ...(open && {
    marginLeft: "auto",
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
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
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  margin: "4px 8px",
  borderRadius: "8px",
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover": {
    backgroundColor: "rgba(233, 69, 96, 0.1)",
    color: "#e94560",
  },
  "&.Mui-selected": {
    backgroundColor: "rgba(233, 69, 96, 0.2)",
    color: "#e94560",
    borderRight: "3px solid #e94560",
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

export default function DashboardSidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
  console.log(drawerWidth);
  const mainMenuItems = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Analytics", icon: <AnalyticsIcon /> },
    { text: "Users", icon: <PeopleIcon /> },
    { text: "Messages", icon: <EmailIcon /> },
  ];

  const secondaryMenuItems = [
    { text: "Documents", icon: <FileCopyIcon /> },
    { text: "Archive", icon: <ArchiveIcon /> },
    { text: "Reports", icon: <ReportIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <HeaderMenuButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 2,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </HeaderMenuButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Company Dashboard
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Welcome back, Admin!
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <LogoText variant="h6">{open ? "DASHBOARD" : "DB"}</LogoText>
          <MenuButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </MenuButton>
        </DrawerHeader>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

        {/* Main Navigation */}
        <List sx={{ mt: 2 }}>
          <SectionTitle>{open ? "Main Menu" : "•"}</SectionTitle>
          {mainMenuItems.map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <StyledListItemButton
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(index)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "inherit",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    opacity: open ? 1 : 0,
                    "& .MuiTypography-root": {
                      fontWeight: selectedIndex === index ? "600" : "400",
                    },
                  }}
                />
              </StyledListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", my: 1 }} />

        {/* Secondary Navigation */}
        <List>
          <SectionTitle>{open ? "Management" : "•"}</SectionTitle>
          {secondaryMenuItems.map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <StyledListItemButton
                selected={selectedIndex === index + mainMenuItems.length}
                onClick={() =>
                  handleListItemClick(index + mainMenuItems.length)
                }
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "inherit",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    opacity: open ? 1 : 0,
                    "& .MuiTypography-root": {
                      fontWeight:
                        selectedIndex === index + mainMenuItems.length
                          ? "600"
                          : "400",
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
        <DrawerHeader />
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            p: 3,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 3, color: "#0f3460" }}>
            Welcome to Your Dashboard
          </Typography>
          <Typography sx={{ marginBottom: 2, color: "#666", lineHeight: 1.6 }}>
            This is your personalized dashboard where you can manage all aspects
            of your application. Use the sidebar navigation to access different
            sections and features.
          </Typography>
          <Typography sx={{ marginBottom: 2, color: "#666", lineHeight: 1.6 }}>
            The layout features a modern dark sidebar with intuitive navigation
            and a clean, professional header. You can collapse the sidebar to
            maximize your workspace while maintaining easy access to all menu
            items.
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
              gap: 2,
              mt: 4,
            }}
          >
            {[1, 2, 3].map((item) => (
              <Box
                key={item}
                sx={{
                  backgroundColor: "#f0f2f5",
                  borderRadius: 2,
                  p: 3,
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" sx={{ color: "#0f3460" }}>
                  Card {item}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
                  Sample content for dashboard card
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
