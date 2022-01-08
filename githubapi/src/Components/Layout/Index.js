import React from 'react';
import * as style from './styled';

function Layout ({children} ) {

    
    return (
        <style.WrapperLayout>
            <header>topo</header>
            {children}
        </style.WrapperLayout>
        );
    
}

export default Layout;
