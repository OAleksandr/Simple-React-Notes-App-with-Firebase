import React from 'react';

const Footer = () => {

    let year = new Date().getFullYear();

    return(
        <footer className="page-footer">
            <div className="footer-copyright text-center py-3">©{year} Oleksandr:
            <a href="https://www.linkedin.com/in/oleksandrshchegol/" target="_blank"><img src={require('../img/os-icon.png')} className="os-logo" alt="OS Logo"/></a>
            </div>
        </footer>
    )
}

export default Footer;