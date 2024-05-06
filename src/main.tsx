import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notification from "./routes/Notification.tsx";
import Accept from "./routes/Accept.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/notification", element: <Notification /> },
  { path: "/accept", element: <Accept /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
);
