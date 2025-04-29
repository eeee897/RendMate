import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { AppLayout, ItemsFeedPage, StatusPage, MessagePage, SwitchRolePage, NeedHelpPage, HistoryPage } from '../pages/index'

export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <AppLayout />,
            children: [
                {
                    index: true,
                    element: <Navigate to={'/items-feed'} replace />
                },
                {
                    path: '/items-feed',
                    element: <ItemsFeedPage />
                },
                {
                    path: '/status',
                    element: <StatusPage />
                },
                {
                    path: '/message',
                    element: <MessagePage />
                },
                {
                    path: '/switch-role',
                    element: <SwitchRolePage />
                },
                {
                    path: '/history',
                    element: <HistoryPage />
                },
                {
                    path: '/need-help',
                    element: <NeedHelpPage />
                }
            ]
        },
        {
            path: '/auth',
        },
        {
            path: '*',
            element: <div>404</div>
        }
    ])

    return <RouterProvider router={router} />
}
