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
import Spinner from "../Shared/Spinner";
import ArtifactsDetails from "../Pages/ArtifactsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        HydrateFallback: Spinner,
        loader: () => fetch("http://localhost:3000/artifacts"),
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
        HydrateFallback: Spinner,
        loader: () => fetch("http://localhost:3000/artifacts"),
      },
      {
        path: "/artifacts/:id",
        element: (
          <PrivateRoute>
            <ArtifactsDetails></ArtifactsDetails>
          </PrivateRoute>
        ),
        HydrateFallback: Spinner,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/artifacts/${params.id}`),
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
