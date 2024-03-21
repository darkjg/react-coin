import React from 'react';
import ReactDom from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from "./App"

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={App} />
    </React.StrictMode>
);