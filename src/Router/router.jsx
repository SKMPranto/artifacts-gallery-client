import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import AddArtifacts from "../Pages/AddArtifacts";
import AllArtifacts from "../Pages/AllArtifacts";
import MyArtifacts from "../Pages/MyArtifacts";
import LikedArtifacts from "../Pages/LikedArtifacts";

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
        Component: AddArtifacts,
      },
      {
        path: "/all-artifacts",
        Component: AllArtifacts,
      },
      {
        path:"/my-artifacts",
        Component: MyArtifacts
      },
      {
        path:"/liked-artifacts",
        Component: LikedArtifacts
      }
    ],
  },
]);

export default router;
