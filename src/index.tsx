import React from 'react';
import AuthContext, { AuthProvider } from './contexts/auth';
import Routes from './routes';

function App() {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )
}

export default App;
