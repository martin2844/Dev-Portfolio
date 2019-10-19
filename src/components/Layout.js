import React from 'react';
import Footer from './Footer';
import Header from './Header';


const Layout = (props) => {

    return( 
            <div>
                <Header/>
                <div className="main">
                 {props.children}
                </div>
                <Footer/>
            </div>
    )
}

export default Layout