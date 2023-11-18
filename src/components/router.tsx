import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import SignUpPage from '../pages/signUp';
import ProfilePage from '../pages/profile';
import Layout from './Layout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: '/profile',
                element: <ProfilePage />,
            },
        ],
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/sign-up',
        element: <SignUpPage />,
    },
]);
