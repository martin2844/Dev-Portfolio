import React from 'react';
import './header.styles.scss';
import {Link} from 'gatsby'

const Header = () => {
    return (
            <div>
            <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro|Open+Sans&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>

                <div className="header-main">
                        <div className="dev">
                        <h1>Dev's Name</h1>
                        <span className="attr">Web designer</span>
                        <span className="dot">•</span>
                        <span className="attr">Architect</span>
                        <span className="dot">•</span>
                        <span className="attr">Mechanic</span>
                        </div>
                        <div className="icons">
                        <i className="fab fa-github"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-dev"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-youtube"></i>
                        </div>
                        <span className="pages-link"><Link to="/">Portfolio</Link>|<Link to="/about">About</Link></span>
                        
                        <hr/>
                 </div>
            </div>
        
    );
}

export default Header