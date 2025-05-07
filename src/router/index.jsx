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
    ComingSoonPage,
    ProfilePage
} from '../pages/index';
import { useApp } from '@/context/AppContextProvider'

export default function Router() {
    const { isRenter, isAuthenticated } = useApp()

    const router = createBrowserRouter([
        {
            path: '/',
            element: <WelcomePage />,
        },
        {
            path: '/app',
            element: isAuthenticated ? <AppLayout /> : <Navigate to="/auth" replace />,
            errorElement: <ErrorElement />,
            children: [
                {
                    index: true,
                    element: isRenter ? <Navigate to="items-feed" replace /> : <Navigate to="my-items" replace />
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
                {
                    path: 'account',
                    element: <ProfilePage />
                }
            ],
        },
        {
            path: '/coming-soon',
            element: <ComingSoonPage />
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