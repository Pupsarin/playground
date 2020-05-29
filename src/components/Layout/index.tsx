import React from 'react';
import './index.scss';

export const Layout: React.FC = ({children}) => {
    return (
        <>
            <header>
                TEST APP
            </header>
            <main className="main-container">
                {children}
            </main>
        </>
    )
}