import { createRoot } from "react-dom/client";
import "./assets/index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomePage from "./app/home/homePage.tsx";
import Contact from "./app/contact/contact.tsx";
import HomeArticles from "./features/utils/articles.tsx";
import ArticlesDetails from "./features/utils/articleDetails.tsx"; // ArticlesDetailsLoader,
import { SearchProvider } from "./context/searchContext.tsx";
import AdminDashboard from "./app/admin/index.tsx";
import CreateArticlePage from "./features/admin/util/newArticle/index.tsx";
import AdminLogin from "./features/admin/auth/Login.tsx";
import ProtectedRoute from "./features/admin/auth/ProtectedRoute.tsx";
import { AdminProvider } from "./context/adminContext.tsx";
import EditArticlePage from "./app/admin/[id]/index.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>404 Not Found</p>,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          {
            path: "/",
            element: <HomeArticles />,
          },
          {
            path: ":id",
            element: <ArticlesDetails />,
            // loader = { ArticlesDetailsLoader },
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/admin",
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/newArticle",
        element: (
          <ProtectedRoute>
            <CreateArticlePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/adminLogin",
        element: <AdminLogin />,
      },
      {
        path: "/admin/:id",
        element: <EditArticlePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <AdminProvider>
    <SearchProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SearchProvider>
  </AdminProvider>
);
