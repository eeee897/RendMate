import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import {
    AppLayout,
    ItemsFeedPage,
    StatusPage,
    ChatsPage,
    SwitchRolePage,
    NeedHelpPage,
    MyItemsPage,
    HistoryPage,
    ErrorElement,
    NotFound,
    AuthPage,
    WelcomePage,
} from '../pages/index';

export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <WelcomePage />,
        },
        {
            path: '/app',
            element: <AppLayout />,
            errorElement: <ErrorElement />,
            children: [
                {
                    index: true,
                    element: <Navigate to="items-feed" replace />
                },
                {
                    path: 'items-feed',
                    element: <ItemsFeedPage />,
                },
                {
                    path: 'my-items',
                    element: <MyItemsPage />,
                },
                {
                    path: 'status',
                    element: <StatusPage />,
                },
                {
                    path: 'chats',
                    element: <ChatsPage />,
                },
                {
                    path: 'switch-role',
                    element: <SwitchRolePage />,
                },
                {
                    path: 'history',
                    element: <HistoryPage />,
                },
                {
                    path: 'need-help',
                    element: <NeedHelpPage />,
                },
            ],
        },
        {
            path: '/auth',
            element: <AuthPage />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]);

    return <RouterProvider router={router} />;
}