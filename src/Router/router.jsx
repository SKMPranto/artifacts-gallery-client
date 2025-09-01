import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
        {
            path:"/",
            Component: Home
        }
    ]
  },
]);

export default router;