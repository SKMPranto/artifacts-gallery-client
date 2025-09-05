import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import AddArtifacts from "../Pages/AddArtifacts";
import AllArtifacts from "../Pages/AllArtifacts";
import MyArtifacts from "../Pages/MyArtifacts";
import LikedArtifacts from "../Pages/LikedArtifacts";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/add-artifacts",
        element: (
          <PrivateRoute>
            <AddArtifacts></AddArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-artifacts",
        element: (
          <PrivateRoute>
            <AllArtifacts></AllArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-artifacts",
        element: (
          <PrivateRoute>
            <MyArtifacts></MyArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: "/liked-artifacts",
        element: (
          <PrivateRoute>
            <LikedArtifacts></LikedArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

export default router;
