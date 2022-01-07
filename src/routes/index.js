import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import DashboardLayout from "../Layouts/dashboard";

// guards
import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";
import LogoOnlyLayout from "../Layouts/LogoOnlyLayout";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes("/dashboard");

  return (
    <Suspense fallback="loading...">
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/index" />,
    },
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: "register",
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          ),
        },
        { path: "reset-password", element: <ResetPassword /> },
        { path: "forgot-password", element: <ForgotPassword /> },
        { path: "verify", element: <VerifyCode /> },
      ],
    },

    // Dashboard Routes
    {
      path: "dashboard",
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { path: "", element: <Navigate to="/dashboard/main" replace /> },
        {
          path: "service",
          children: [
            {
              path: "",
              element: (
                <Navigate to="/dashboard/service/police-extract" replace />
              ),
            },
            { path: "police-extract", element: <PoliceExtract /> },
            {
              path: "character-clearance-certificate",
              element: <CharacterCertificate />,
            },
            { path: "escort-guard-certificate", element: <GuardEscort /> },
          ],
        },
        {
          path: "user",
          children: [
            {
              path: "",
              element: <Navigate to="/dashboard/user/profile" replace />,
            },
            { path: "profile", element: <Profile /> },
            { path: "user/:name/edit", element: <EditProfile /> },
            { path: "users", element: <UserList /> },
          ],
        },
        { path: "main", element: <Main /> },
        { path: "finance", element: <Finance /> },
      ],
    },

    // Main Routes
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "500", element: <Page500 /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
    { path: "index", element: <Landing /> },
    { path: "about", element: <About /> },
    { path: "contact", element: <Contact /> },
  ]);
}

// IMPORT COMPONENTS
// Landing Pages
const Landing = Loadable(lazy(() => import("../pages/Landing/Landing")));
const About = Loadable(lazy(() => import("../pages/Landing/About")));
const Contact = Loadable(lazy(() => import("../pages/Landing/Contact")));
// Main Dashboard
const Main = Loadable(lazy(() => import("../pages/main")));
// Authentication
const Login = Loadable(lazy(() => import("../pages/authentication/Login")));
const Register = Loadable(
  lazy(() => import("../pages/authentication/Register"))
);
const ResetPassword = Loadable(
  lazy(() => import("../pages/authentication/ResetPassword"))
);
const ForgotPassword = Loadable(
  lazy(() => import("../pages/authentication/ForgotPassword"))
);
const VerifyCode = Loadable(
  lazy(() => import("../pages/authentication/VerifyCode"))
);

// Services
const PoliceExtract = Loadable(
  lazy(() => import("../pages/services/police-extract"))
);
const GuardEscort = Loadable(
  lazy(() => import("../pages/services/guard-escort"))
);
const CharacterCertificate = Loadable(
  lazy(() => import("../pages/services/character-certificate"))
);

// Users
const UserList = Loadable(lazy(() => import("../pages/users/users")));
const Profile = Loadable(lazy(() => import("../pages/users/profile")));
const EditProfile = Loadable(lazy(() => import("../pages/users/edit-profile")));

// Finance
const Finance = Loadable(lazy(() => import("../pages/finance/finance")));

// Error

const Page500 = Loadable(lazy(() => import("../pages/error/pages500")));
const NotFound = Loadable(lazy(() => import("../pages/error/pages404")));
